"""Wandelt Folien-Transkriptionen (JSON) wörtlich in Karten-HTML für die Kapitelseiten um.

Aufruf: python3 -I folien_zu_html.py <ausgabe.html> <abschnitte.json> <transkription.json> [weitere.json …]
abschnitte.json: [{"id": "...", "titel": "<exakter Folientitel>", "icon": "...", "lead": "<Folientext oder leer>", "seiten": [208, 209, …]}, …]
Regeln: Titel = Folientitel; Text zeilenweise; „- “ = Aufzählung (Einrückung = Ebene); „a | b“ = Tabellenzeile;
[…] = Bildbeschreibung (entfällt); Notizen nur mit dem handschriftlichen Wortlaut („…“), sonst Warnung.
"""
import html, json, re, sys

out, abschnitte_json, files = sys.argv[1], sys.argv[2], sys.argv[3:]
rows = {}
for f in files:
    for r in json.load(open(f, encoding='utf-8')):
        if r.get('ausschnitt'):
            continue
        rows.setdefault(r['page'], r)
warn = []
e = lambda t: html.escape(t, quote=False)


def notiz_wortlaut(r):
    if r.get('notiz_wortlaut') is not None:          # festgelegter Wortlaut hat Vorrang
        return r['notiz_wortlaut']
    n = (r.get('notiz') or '').strip()
    if not n:
        return ''
    # nur der Text nach dem letzten Doppelpunkt einer Ortsangabe ist Handschrift („über X (pink): "…"“)
    n = re.sub(r'\([^)]*\[\?\][^)]*\)', '', n)
    q = re.findall(r'[„"]([^“"]+)[“"]', n)
    if not q:
        warn.append('S. %s: Notiz ohne Anführungszeichen, bitte prüfen: %s' % (r['page'], n[:120]))
        return ''
    return ' · '.join(x.strip() for x in q if x.strip())


def text_html(text):
    """Zeilen → Absätze, verschachtelte Listen, Tabellen."""
    h, stack, table = [], [], []

    def close_lists(level=0):
        while len(stack) > level:
            h.append('</li></ul>' if stack.pop() else '</ul>')

    def flush_table():
        if not table:
            return
        cols = max(len(t) for t in table)
        head = table[0] if len(table) > 1 else None
        body = table[1:] if head else table
        h.append('<table class="criteria">' + ('<tr>' + ''.join('<th>%s</th>' % e(c) for c in head) + '</tr>' if head else '')
                 + ''.join('<tr>' + ''.join('<td>%s</td>' % e(c) for c in t + [''] * (cols - len(t))) + '</tr>' for t in body) + '</table>')
        table.clear()

    for raw in text.split('\n'):
        line = re.sub(r'\[[^\]]*\]', '', raw).rstrip()
        if not line.strip():
            continue
        if ' | ' in line:
            close_lists()
            table.append([c.strip() for c in line.split(' | ')])
            continue
        flush_table()
        m = re.match(r'^(\s*)- (.*)$', line)
        if m:
            level = len(m.group(1)) // 2 + 1
            if len(stack) < level:
                while len(stack) < level:
                    h.append('<ul>')
                    stack.append(False)
            else:
                close_lists(level)
                h.append('</li>')
            h.append('<li>' + e(m.group(2)))
            stack[-1] = True
            continue
        close_lists()
        h.append('<p>%s</p>' % e(line.strip()))
    close_lists()
    flush_table()
    return ''.join(h).replace('<ul><li>', '<ul><li>')


def folien_angabe(pages):
    pages = sorted(pages)
    return ('Folie S. %d' % pages[0]) if len(pages) == 1 else 'Folien S. ' + ', '.join(str(p) for p in pages)


teile = []
for ab in json.load(open(abschnitte_json, encoding='utf-8')):
    teile.append('    <section class="section" id="%s">\n        <div class="section-title"><div class="num"><span class="material-icons">%s</span></div><h2>%s</h2></div>\n'
                 % (ab['id'], ab.get('icon', 'article'), e(ab['titel'])))
    if ab.get('lead'):
        teile.append('        <p class="section-lead">%s</p>\n' % e(ab['lead']))
    # gleichnamige Folien hintereinander zu einer Karte zusammenfassen
    gruppen = []
    for p in ab['seiten']:
        r = rows.get(p)
        if not r:
            warn.append('S. %s: keine Transkription' % p)
            continue
        if gruppen and (gruppen[-1][0].get('title') or '') == (r.get('title') or '') and bool(gruppen[-1][0].get('ure_story')) == bool(r.get('ure_story')):
            gruppen[-1].append(r)
        else:
            gruppen.append([r])
    for g in gruppen:
        r0 = g[0]
        ure = r0.get('ure_story')
        cls = 'card ure' if ure else 'card'
        icon = 'auto_stories' if ure else ('menu_book' if r0.get('def') else 'article')
        titel = (('Die URE Story: ' if ure else '') + (r0.get('title') or '')).strip()
        body = []
        for r in g:
            t = r.get('text') or ''
            if (r.get('title') or '') and t.startswith(r['title']):
                t = t[len(r['title']):].lstrip('\n')
            inner = text_html(t)
            if r.get('schablone'):
                inner = '<div class="schablone" data-titel="%s" data-folie="S. %d">%s</div>' % (e(r.get('title') or ''), r['page'], inner)
            body.append(inner)
            n = notiz_wortlaut(r)
            if n:
                body.append('<div class="note"><div class="note-label"><span class="material-icons">edit_note</span>Deine Notiz (S. %d)</div>%s</div>' % (r['page'], e(n)))
        if any(r.get('nur_bild') for r in g):
            body.append('<p class="ex-mute">Kleindruck auf der Folie – bitte im Originalfoto lesen.</p>')
        kopf = '<h3><span class="material-icons">%s</span>%s</h3>' % (icon, e(titel)) if titel else ''
        teile.append('        <div class="%s">\n            %s\n            %s\n            <span class="src"><span class="material-icons">description</span>%s</span>\n        </div>\n'
                     % (cls, kopf, '\n            '.join(body), folien_angabe([r['page'] for r in g])))
    teile.append('    </section>\n\n')

open(out, 'w', encoding='utf-8').write(''.join(teile))
print('ok', out)
for w in warn:
    print('WARNUNG', w)
