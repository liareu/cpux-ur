"""Einbau der Folien S. 259–300 (Folien/Part8, Kapitel 5–7). Texte aus der Transkription.

Aufruf: python3 -I _Werkzeug/einbau_part8.py Landkarte/CPUX-UR_Prozess-Landkarte.html /tmp/cpux_exam/part8_A.json /tmp/cpux_exam/part8_B.json /tmp/cpux_exam/part8_C.json
Nicht fotografiert: S. 281, 284, 285.
"""
import html, json, re, subprocess, sys

p, files = sys.argv[1], sys.argv[2:]
s = open(p, encoding='utf-8').read()
T = {}
for f in files:
    for r in json.load(open(f, encoding='utf-8')):
        T[r['page']] = r
e = lambda t: html.escape(t, quote=False)
js = lambda t: t.replace('\\', '\\\\').replace("'", "\\'")
attr = lambda d: html.escape(json.dumps(d, ensure_ascii=False), quote=True)


def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:100])
    s = s.replace(a, b)


def zeilen(pg):
    return [z for z in T[pg]['text'].split('\n') if z.strip()]


def punkte(pg):
    return [z[2:].strip() for z in zeilen(pg) if z.lstrip().startswith('- ') and not z.startswith('  ')]


def src(pg):
    return '<span class="src"><span class="material-icons">description</span>Folie S. %d</span>' % pg


def wortlaut(pg, offen=False):
    """Folientext eines Schaubilds zum Nachlesen (Zeilen wie auf der Folie)."""
    teile = []
    for z in zeilen(pg):
        z = re.sub(r'\[[^\]]*\]', '', z).rstrip()
        if not z.strip():
            continue
        m = re.match(r'^(\s*)- (.*)$', z)
        teile.append('<li>%s</li>' % e(m.group(2)) if m else '<p>%s</p>' % e(z.strip()))
    h = re.sub(r'((?:<li>.*?</li>)+)', r'<ul>\1</ul>', ''.join(teile))
    return '<details class="pg-wortlaut"%s><summary>Folientext S. %d im Wortlaut</summary>%s</details>' % (' open' if offen else '', pg, h)


def karte(pg, body, icon='article', kid=None, titel=None):
    t = T[pg]['title'] if titel is None else titel
    kopf = '<h3><span class="material-icons">%s</span>%s</h3>' % (icon, e(t)) if t else ''
    return ('        <div class="card"%s>\n            %s\n            %s\n            %s\n        </div>\n'
            % (' id="%s"' % kid if kid else '', kopf, body, src(pg)))


# 1 Transkription bereinigen
for pg in (261, 262, 263, 264, 265, 266, 267):                 # gedrucktes Etikett oben rechts
    z = T[pg]['text'].split('\n')
    if z[0] in ('Qual.', 'Quant.', 'Qual./Quant.'):
        T[pg]['etikett'] = z[0]
        T[pg]['text'] = '\n'.join(z[1:])
T[264]['text'] = T[264]['text'].replace('} Anforderung an die Nutzung', 'Anforderung an die Nutzung')
T[267]['schablone'] = True                                     # Bausteine wie S. 110
T[292]['text'] = T[292]['text'].split('[Bild:]')[0].rstrip()  # Beispielbild der Roadmap: nur im Originalfoto lesbar
T[292]['nur_bild'] = True
for r in T.values():
    r.setdefault('notiz_wortlaut', r.get('notiz_wortlaut') or '')
json.dump(sorted(T.values(), key=lambda r: r['page']), open('/tmp/cpux_exam/part8_alle.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# 2 Abschnitte (Überschrift = Titel der ersten Folie)
A = lambda sid, pg, icon, seiten: {"id": sid, "titel": T[pg]['title'], "icon": icon, "seiten": seiten}
KAP5 = [A('na-ableiten-5', 259, 'edit_note', [259, 260]), A('na-def-5', 261, 'menu_book', [261, 262]),
        A('guete-qual', 263, 'workspace_premium', [263]), A('syntax-qual', 264, 'text_fields', [264]),
        A('ableiten-qual', 265, 'help_outline', [265]), A('guete-quant', 266, 'workspace_premium', [266]),
        A('elemente-quant', 267, 'text_fields', [267]), A('widerspruch', 268, 'compare_arrows', [268, 269]),
        A('ure-5-1', 270, 'auto_stories', [270]), A('na-strukturieren', 271, 'account_tree', [271]),
        A('aufgabenmodell-struktur', 272, 'account_tree', [272, 273, 274, 275, 276]), A('uebung-6', 277, 'edit', [277]),
        A('ure-5-2', 278, 'auto_stories', [278])]
KAP6 = [A('konsolidieren-6', 279, 'fact_check', [279]), A('kano', 280, 'sentiment_satisfied', [280, 282, 283]),
        A('ure-6-1', 286, 'auto_stories', [286]), A('umsetzung-62', 287, 'event_upcoming', [287, 288, 289]),
        A('priorisierung', 290, 'low_priority', [290, 291, 292]), A('na-in-hcd', 293, 'compare', [293, 294]),
        A('ure-6-2', 295, 'auto_stories', [295])]
KAP7 = [A('schnittstellen-7', 296, 'cable', [296]), A('disziplinen', 297, 'groups', [297, 298, 299]),
        A('aufgaben-ure', 300, 'hub', [300])]
json.dump(KAP5 + KAP6 + KAP7, open('/tmp/cpux_tools/abs_part8.json', 'w', encoding='utf-8'), ensure_ascii=False)
subprocess.run([sys.executable, '-I', '_Werkzeug/folien_zu_html.py', '_Werkzeug/neu_kap5_7.html', '/tmp/cpux_tools/abs_part8.json', '/tmp/cpux_exam/part8_alle.json'], check=True)
neu = open('_Werkzeug/neu_kap5_7.html', encoding='utf-8').read()


def ersetze_karte(pg, neue):
    global neu
    m = re.search(r'        <div class="card[^"]*">\n(?:(?!        <div class="card).)*?Folie S. %d</span>\n        </div>\n' % pg, neu, re.S)
    assert m, pg
    neu = neu[:m.start()] + neue + neu[m.end():]


def karten_id(pg, kid):
    global neu
    m = re.search(r'        <div class="(card[^"]*)">\n((?:(?!        <div class="card).)*?Folie S. %d</span>\n        </div>\n)' % pg, neu, re.S)
    assert m, pg
    neu = neu[:m.start()] + '        <div class="%s" id="%s">\n' % (m.group(1), kid) + m.group(2) + neu[m.end():]


# Etiketten Qual./Quant. als kleines Schild in der Kartenüberschrift
for pg in (261, 262, 263, 264, 265, 266, 267):
    if T[pg].get('etikett'):
        tit = e(T[pg]['title'])
        neu = neu.replace('%s</h3>' % tit, '%s <span class="qq-tag">%s</span></h3>' % (tit, e(T[pg]['etikett'])), 1)

# S. 260 (ohne Titel): HCD-Zyklus mit Problem- und Lösungsraum
z = zeilen(260)
pg260 = {"titel": "", "folie": "S. 260", "stufen": [
    {"titel": z[4], "k": "planung", "art": "t", "gruppen": []},
    {"titel": z[5], "k": "verstehen", "art": "t", "gruppen": []},
    {"titel": z[6], "k": "festlegen", "art": "tl", "gruppen": [{"titel": z[7].rstrip(':'), "elemente": [
        {"label": z[8][2:], "k": "erfordernis"}, {"label": z[9][2:], "k": "na"}]}]},
    {"titel": z[10], "k": "gestalten", "art": "l", "gruppen": []},
    {"titel": z[11], "k": "evaluieren", "art": "l", "gruppen": []},
    {"titel": z[13], "k": "erfuellt", "art": "l", "gruppen": []}]}
raeume = ('<div class="grid-2"><div class="box"><div class="box-title">%s</div>%s</div><div class="box"><div class="box-title">%s</div>%s</div></div>'
          % (e(z[0]), e(z[1]), e(z[2]), e(z[3])))
ersetze_karte(260, karte(260, raeume + '<div class="pg" data-pg="%s"></div><p class="ex-mute">%s · %s</p>' % (attr(pg260), e(z[12]), e(z[14])) + wortlaut(260), titel=''))

# S. 261: Vergleich qualitative / quantitative Nutzungsanforderungen, zeilengleich
z = zeilen(261)
kq, kn = z[1].split(' | ')
vgl = '<div class="na-vgl"><div class="na-vgl-h">%s</div><div class="na-vgl-h">%s</div>' % (e(kq), e(kn))
vgl += '<div><b>%s</b></div><div><b>%s</b></div>' % (e(z[2]), e(z[6].split(' | ')[1]))
vgl += '<div>%s<ul>%s</ul></div>' % (e(z[3]), ''.join('<li>%s</li>' % e(x[2:]) for x in (z[4], z[5], z[6].split(' | ')[0])))
vgl += '<div>%s<ul>%s</ul></div>' % (e(z[7]), ''.join('<li>%s</li>' % e(x[2:]) for x in z[8:12]))
fq, fn = z[12].split(' | ')
vgl += '<div class="na-vgl-f">%s</div><div class="na-vgl-f">%s</div></div>' % (e(fq), e(fn))
body261 = '<p>%s</p>%s' % (e(z[0]), vgl)
ersetze_karte(261, karte(261, body261, 'menu_book').replace('%s</h3>' % e(T[261]['title']), '%s <span class="qq-tag">Qual./Quant.</span></h3>' % e(T[261]['title'])))

# S. 264: Satzschablone mit Klammer „Anforderung an die Nutzung“ (wie S. 252)
z = zeilen(264)
slot = lambda t: re.sub(r'(<[^>]+>)', lambda m: '<span class="slot">%s</span>' % html.escape(m.group(1)), t)
tpl264 = ('<div class="schablone" data-titel="%s" data-folie="S. 264"><div class="template">%s<br><span class="tpl-gruppe"><span class="tpl-zeilen">%s</span>'
          '<span class="tpl-label">%s</span></span><br>%s</div></div>') % (
    e(T[264]['title']), slot(z[0]), '<br>'.join(e(x) for x in z[1:4]), e(z[4]), slot(z[5]))
note264 = '<div class="note"><div class="note-label"><span class="material-icons">edit_note</span>Julias Notiz (S. 264)</div>%s</div>' % e(T[264]['notiz_wortlaut'])
ersetze_karte(264, karte(264, tpl264 + note264, 'text_fields').replace('%s</h3>' % e(T[264]['title']), '%s <span class="qq-tag">Qual.</span></h3>' % e(T[264]['title'])))
tpl264_innen = tpl264[tpl264.index('<div class="template">'):-len('</div>')]

# S. 272: Aufgabenmodell als strukturgebendes Format (Ebenen wie S. 76–84)
z = zeilen(272)
a_row = z[3].split(' | ')
ziel_row = z[5].split(' | ')
pg272 = {"titel": T[272]['title'], "folie": "S. 272", "form": "ebenen", "stufen": [
    {"titel": z[1], "art": "g", "gruppen": [{"titel": z[2].split(' | ')[0], "elemente": [{"label": z[2].split(' | ')[1], "folie": "S. 272", "text": z[2].split(' | ')[1]}]}]},
    {"titel": a_row[0], "k": "aufgabenmodell", "art": "t", "gruppen": [{"titel": "", "elemente": [{"label": x, "k": "aufgabenmodell"} for x in a_row[1:]]}]},
    {"titel": z[4], "art": "g", "gruppen": [{"titel": ziel_row[0], "elemente": [{"label": ziel_row[1], "folie": "S. 272", "text": ziel_row[1]}] + [{"label": x[2:], "folie": "S. 272", "text": x[2:]} for x in z[6:9]]}]}]}
ersetze_karte(272, karte(272, '<p>%s</p><div class="pg" data-pg="%s"></div>' % (e(z[0]), attr(pg272)) + wortlaut(272)))


# S. 273 / 275: Struktur des Aufgabenmodells (Ablauf löst aus → führt zu → und erfüllt)
def struktur(pg):
    z = zeilen(pg)
    ergebnis = [z[12], z[14], z[15]]
    d = {"titel": "", "folie": "S. %d" % pg, "stufen": [
        {"titel": z[0], "art": "g", "gruppen": []},
        {"titel": z[2], "k": "aufgabenmodell", "art": "t", "pfeil_text": z[1], "gruppen": [{"titel": z[4], "elemente": [{"label": x, "k": "aufgabenmodell"} for x in z[5:10]]}]},
        {"titel": z[10], "art": "t", "pfeil_text": z[3], "pfeil": "down", "gruppen": [
            {"titel": z[11], "elemente": [{"label": ergebnis[0], "folie": "S. %d" % pg, "text": ergebnis[0]}]},
            {"titel": z[13], "elemente": [{"label": x, "folie": "S. %d" % pg, "text": x} for x in ergebnis[1:]]}]},
        {"titel": z[17], "art": "g", "pfeil_text": z[16], "gruppen": [{"titel": "", "elemente": [{"label": z[18], "folie": "S. %d" % pg, "text": z[18]}]}]}]}
    return karte(pg, '<div class="pg" data-pg="%s"></div>' % attr(d) + wortlaut(pg))


ersetze_karte(273, struktur(273))
ersetze_karte(275, struktur(275))

# S. 274 / 276: Aufgabenmodell-Tabellen (Zellen mit mehreren Nutzungsanforderungen)
def am_tabelle(pg):
    z = zeilen(pg)
    out, rows, fuss = ['<div class="am-titel">%s</div><p>%s</p>' % (e(z[0]), e(z[1]))], [], []
    kopf = None
    for x in z[2:]:
        if ' | ' in x:
            c = [y.strip() for y in x.split(' | ')]
            if kopf is None:
                kopf = c
            else:
                rows.append(c)
        elif rows and re.match(r'^NA\d', x):
            rows[-1][-1] += '\n' + x
        else:
            fuss.append((len(rows), x))
    t = '<table class="criteria am-tab"><tr>%s</tr>' % ''.join('<th>%s</th>' % e(c) for c in kopf)
    for i, r in enumerate(rows):
        for n, x in fuss:
            if n == i and not x.startswith('*'):
                t += '<tr class="am-zw"><td colspan="3">%s</td></tr>' % e(x)
        t += '<tr>%s</tr>' % ''.join('<td>%s</td>' % '<br>'.join(e(y) for y in c.split('\n')) for c in r)
    for n, x in fuss:
        if n == len(rows) and not x.startswith('*'):
            t += '<tr class="am-zw"><td colspan="3">%s</td></tr>' % e(x)
    t += '</table>' + ''.join('<p class="ex-mute">%s</p>' % e(x) for n, x in fuss if x.startswith('*'))
    return ''.join(out) + t


karte_274 = karte(274, am_tabelle(274))
ersetze_karte(274, karte_274)
ersetze_karte(276, karte(276, am_tabelle(276), kid='aufgabenmodell-gestaltung'))

# S. 280: Kano-Schema als Kurvenbild mit den Folienbeschriftungen
z = zeilen(280)
kano_svg = '''<svg class="kano-svg" viewBox="0 0 460 300" role="img" aria-label="%s">
<line x1="40" y1="150" x2="440" y2="150" stroke="#111" stroke-width="1.2" marker-end="url(#kpf)"/><line x1="240" y1="290" x2="240" y2="12" stroke="#111" stroke-width="1.2" marker-end="url(#kpf)"/>
<defs><marker id="kpf" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#111"/></marker></defs>
<path d="M60,140 C220,138 330,110 420,20" fill="none" stroke="#2563eb" stroke-width="3"/>
<path d="M70,270 L420,30" fill="none" stroke="#111" stroke-width="3"/>
<path d="M60,285 C150,190 260,165 420,158" fill="none" stroke="#6b7280" stroke-width="3"/>
<text x="248" y="22" font-size="12">%s</text><text x="300" y="168" font-size="12">%s</text>
<text x="300" y="44" font-size="12" font-weight="700" fill="#2563eb">%s</text><text x="80" y="230" font-size="12" font-weight="700">%s</text><text x="300" y="186" font-size="12" font-weight="700" fill="#6b7280">%s</text>
</svg>''' % (e(T[280]['title']), e(z[1]), e(z[2]), e(z[3]), e(z[6]), e(z[9]))
kano_tab = '<table class="criteria kano-tab"><tr><th></th><th></th><th></th></tr>' + ''.join(
    '<tr><td><b>%s</b></td><td>%s</td><td>%s</td></tr>' % (e(z[i]), e(z[i + 1]), e(z[i + 2])) for i in (3, 6, 9)) + '</table>'
kano_body = ('<div class="box pink"><div class="box-title">Definition</div>%s</div><div class="kano-grid"><div>%s</div><div>%s<p><b>%s</b></p><ul>%s</ul></div></div>'
             % (e(z[0]), kano_svg, kano_tab, e(z[12]), ''.join('<li>%s</li>' % e(x[2:]) for x in z[13:15])))
ersetze_karte(280, karte(280, kano_body + '<p class="ex-mute">S. 281 ist nicht fotografiert.</p>', 'menu_book', kid='kano-schema'))

# S. 283: Notation Kano-Schema mit farbiger Auswertungsmatrix wie auf der Folie
z = zeilen(283)
farbe = {'Begeisterung': 'k-beg', 'Leistungsmerkmal': 'k-leist', 'Basismerkmal': 'k-basis', 'Rückweisung': 'k-rueck'}
liste = lambda a, b: '<ul>%s</ul>' % ''.join('<li>%s</li>' % e(x[2:]) for x in z[a:b])
matrix = [r.split(' | ') for r in z if ' | ' in r]
mt = '<table class="kano-mx"><tr>%s</tr>' % ''.join('<th>%s</th>' % e(c) for c in matrix[0])
for r in matrix[1:]:
    mt += '<tr><th>%s</th>%s</tr>' % (e(r[0]), ''.join('<td class="%s">%s</td>' % (farbe.get(c, ''), e(c)) for c in r[1:]))
mt += '</table>'
body283 = '<div class="grid-2"><div><p><b>%s</b></p>%s</div><div><p><b>%s</b></p>%s</div></div>%s' % (e(z[0]), liste(1, 6), e(z[6]), liste(7, 12), mt)
ersetze_karte(283, karte(283, body283, kid='kano-notation'))

# S. 288: Stakeholder- und Systemanforderung (Schalen wie Kapitel 1)
z = zeilen(288)
schalen = ''.join('<tr><td><b>%s</b></td><td>%s</td></tr>' % (e(z[i]), e(z[i + 1])) for i in range(0, 10, 2))
body288 = ('<table class="criteria"><tr><th></th><th></th></tr>%s</table><p>%s ↓ <b>%s</b></p><p class="ex-mute">%s · %s</p>'
           '<p><a class="sm-link" href="#anforderungen">Schaubild in Kapitel 1 ansehen →</a></p>') % (schalen, e(z[10]), e(z[12]), e(z[13]), e(z[14]))
ersetze_karte(288, karte(288, body288))

# S. 289: HCD (wie Prozesskarte)
z = zeilen(289)
pg289 = {"titel": "", "folie": "S. 289", "stufen": [{"titel": z[0], "k": "planung", "art": "t", "gruppen": []}, {"titel": z[1], "k": "verstehen", "art": "t", "gruppen": []},
                                                    {"titel": z[3], "k": "festlegen", "art": "tl", "gruppen": []}, {"titel": z[4], "k": "gestalten", "art": "l", "gruppen": []},
                                                    {"titel": z[5], "k": "evaluieren", "art": "l", "gruppen": []}, {"titel": z[6], "k": "erfuellt", "art": "l", "gruppen": []}]}
ersetze_karte(289, karte(289, '<div class="pg" data-pg="%s"></div><p class="ex-mute">%s · %s</p>' % (attr(pg289), e(z[2]), e(z[7])) + wortlaut(289)))

# S. 293 + 294: qualitative und quantitative Nutzungsanforderungen in der HCD als zeilengleicher Vergleich
SCHRITT = ['Planung des menschzentrierten Gestaltungsprozesses', 'Verstehen und Festlegen des Nutzungskontextes', 'Festlegen der Nutzungsanforderungen',
           None, 'Erarbeiten von Gestaltungslösungen', 'Evaluieren der Gestaltung', 'Gestaltungslösung erfüllt die Nutzungsanforderungen']
K = ['planung', 'verstehen', 'festlegen', None, 'gestalten', 'evaluieren', 'erfuellt']


def erklaerungen(pg):
    z = [x for x in zeilen(pg) if x != 'Iterationen']
    out, i = {}, 0
    while i < len(z):
        if z[i].startswith('Priorisierung der Umsetzung'):
            out[None] = z[i]; i += 1; continue
        out[z[i + 1]] = z[i]; i += 2
    return out


q, n = erklaerungen(293), erklaerungen(294)
assert set(q) == set(n) == set(SCHRITT), (set(q), set(SCHRITT))
pg_hcd = {"titel": T[293]['title'] + ' · ' + T[294]['title'], "folie": "S. 293, 294", "form": "vergleich", "stufen": [
    {"titel": st or '', "k": K[i], "art": "t" if i < 2 else "l", "gruppen": [
        {"titel": 'Qualitative Nutzungsanforderungen (S. 293)', "elemente": [{"label": q[st], "folie": "S. 293", "text": q[st], "k": "qual"}]},
        {"titel": 'Quantitative Nutzungsanforderungen (S. 294)', "elemente": [{"label": n[st], "folie": "S. 294", "text": n[st], "k": "quant"}]}]}
    for i, st in enumerate(SCHRITT)]}
hcd_karte = ('        <div class="card" id="na-hcd-vergleich">\n            <h3><span class="material-icons">compare</span>%s · %s</h3>\n            <div class="pg" data-pg="%s"></div>%s%s\n'
             '            <span class="src"><span class="material-icons">description</span>Folien S. 293, 294</span>\n        </div>\n') % (
    e(T[293]['title']), e(T[294]['title']), attr(pg_hcd), wortlaut(293), wortlaut(294))
ersetze_karte(293, hcd_karte)
ersetze_karte(294, '')

# S. 300: Aufgaben ↔ Rollen
z = zeilen(300)
paare = [x.split(' | ') for x in z if ' | ' in x]
pg300 = {"titel": z[0], "folie": "S. 300", "form": "paare", "spalten": ["Aufgabe", "Rolle"], "stufen": [
    {"titel": a, "art": "t", "gruppen": [{"titel": "", "elemente": [{"label": '↔ ' + b, "folie": "S. 300", "text": a + ' ↔ ' + b}]}]} for a, b in paare]}
ersetze_karte(300, karte(300, '<div class="pg" data-pg="%s"></div><ul><li>%s</li></ul>' % (attr(pg300), e(z[-1][2:])) + wortlaut(300), 'hub', kid='ure-rollen'))

# Sprungziele auf Karten
for pg, kid in ((263, 'guete-qual-k'), (265, 'leitfragen-qual'), (266, 'guete-quant-k'), (267, 'elemente-quant-k'), (277, 'uebung-6-k'),
                (290, 'priorisierung-def'), (291, 'roadmap-def'), (292, 'priorisierung-schema'), (268, 'widerspruch-k')):
    karten_id(pg, kid)

# Kapitelseiten: Einzeldatei – Abschnitte hinter Kapitel 4 einfügen
i = s.index('<section class="section" id="ure-erfordernisse">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + neu + s[j:]

# 3 Detailtexte D
lk = lambda sid, t: '<a href="#%s">%s</a>' % (sid, js(e(t)))
NAV5 = ''.join(lk(a['id'], a['titel']) for a in KAP5 if not a['id'].startswith('ure'))
d_qual = ("        ['%s (S. 263)', 'workspace_premium', ul([%s]) + '%s'],\n        ['%s (S. 264)', 'text_fields', '%s'],\n"
          "        ['%s (S. 265)', 'help_outline', ul([%s]) + '%s'],\n        ") % (
    js(T[263]['title']), ', '.join("'%s'" % js(x) for x in punkte(263)), lk('guete-qual', T[263]['title']),
    js(T[264]['title']), js(tpl264_innen) + lk('syntax-qual', T[264]['title']),
    js(T[265]['title']), ', '.join("'%s'" % js(x) for x in punkte(265)), lk('ableiten-qual', T[265]['title']))
i = s.index("    qual: { icon:"); j = s.index("['', '', ", i); s = s[:j] + d_qual + s[j:]
d_quant = ("        ['%s (S. 266)', 'workspace_premium', ul([%s]) + '%s'],\n        ['%s (S. 267)', 'text_fields', ul([%s]) + '%s'],\n        ") % (
    js(T[266]['title']), ', '.join("'%s'" % js(x) for x in punkte(266)), lk('guete-quant', T[266]['title']),
    js(T[267]['title']), ', '.join("'%s'" % js(x) for x in punkte(267)), lk('elemente-quant', T[267]['title']))
i = s.index("    quant: { icon:"); j = s.index("['', '', ", i); s = s[:j] + d_quant + s[j:]
d_na = ("        ['%s (S. 261)', 'menu_book', '%s'],\n        ['Kapitel 5 (S. 259–278)', 'menu_book', '%s'],\n        ") % (
    js(T[261]['title']), js(zeilen(261)[0]), NAV5)
i = s.index("    na: { icon:"); j = s.index("['', '', ", i); s = s[:j] + d_na + s[j:]
d_fest = ("        ['%s (S. 259)', 'flag', '%s'],\n        ['%s (S. 279)', 'flag', '%s'],\n        ['%s (S. 287)', 'flag', '%s'],\n        ") % (
    js(T[259]['title']), js(zeilen(259)[2]) + '<br>' + NAV5, js(T[279]['title']), js(zeilen(279)[2]) + '<br>' + lk('konsolidieren-6', T[279]['title']) + lk('kano', T[280]['title']),
    js(T[287]['title']), js(zeilen(287)[2]) + '<br>' + lk('umsetzung-62', T[287]['title']) + lk('priorisierung', T[290]['title']) + lk('na-in-hcd', T[293]['title']))
i = s.index("    festlegen: { icon:"); j = s.index("['', '', ", i); s = s[:j] + d_fest + s[j:]
d_am = "        ['%s (S. 272)', 'account_tree', '%s'],\n        ['%s (S. 276)', 'table_rows', '%s'],\n        " % (
    js(T[272]['title']), js(zeilen(272)[0]) + '<br>' + lk('aufgabenmodell-struktur', T[272]['title']), js(T[276]['title']), '<a href="#aufgabenmodell-gestaltung">%s</a>' % js(e(T[276]['title'])))
i = s.index("    amgest: { icon:"); j = s.index("['', '', ", i); s = s[:j] + d_am + s[j:]
d_hcdvgl = "        ['%s (S. 293, 294)', 'compare', '%s'],\n        " % ('Nutzungsanforderungen in der Menschzentrierten Gestaltung', lk('na-in-hcd', T[293]['title'] + ' / ' + T[294]['title']))
for key in ('gestalten', 'evaluieren'):
    i = s.index("    %s: { icon:" % key); j = s.index("['', '', ", i); s = s[:j] + d_hcdvgl + s[j:]

# neue Begriffe als Chips in der Prozesskarte: Kano-Schema, Priorisierung
kano_d = ("    kano: { icon: 'sentiment_satisfied', title: '%s', tags: ['Kapitel 6.1', 'Lösungsraum'], link: '#kano', blocks: [\n"
          "        ['Definition (S. 280)', 'menu_book', '%s'],\n        ['%s (S. 282)', 'list', '%s'],\n        ['', '', src('S. 280, 282, 283')]\n    ]},\n") % (
    js(T[280]['title']), js(zeilen(280)[0]), js(T[282]['title']), js(e(zeilen(282)[0])) + '<br>' + lk('kano', T[280]['title']) + '<a href="#kano-notation">%s</a>' % js(e(T[283]['title'])))
prio_d = ("    priorisierung: { icon: 'low_priority', title: '%s', tags: ['Kapitel 6.2', 'Lösungsraum'], link: '#priorisierung', blocks: [\n"
          "        ['Definition (S. 290)', 'menu_book', '%s' + ul([%s])],\n        ['%s (S. 291)', 'map', '%s'],\n        ['%s (S. 292)', 'list', '%s'],\n        ['', '', src('S. 290–292, 295')]\n    ]},\n") % (
    js(T[290]['title']), js(zeilen(290)[0]), ', '.join("'%s'" % js(x) for x in punkte(290)), js(T[291]['title']), js(zeilen(291)[0]),
    js(T[292]['title']), lk('priorisierung', T[290]['title']) + '<a href="#priorisierung-schema">%s</a>' % js(e(T[292]['title'])))
rep("    stakeholder: { icon: 'stacks',", kano_d + prio_d + "    stakeholder: { icon: 'stacks',")
rep('''                <g class="hot chip l" data-k="quant"><rect x="1198" y="434" width="132" height="34" rx="4"/><text x="1264" y="456" text-anchor="middle">quantitativ · WIE</text></g>
''', '''                <g class="hot chip l" data-k="quant"><rect x="1198" y="434" width="132" height="34" rx="4"/><text x="1264" y="456" text-anchor="middle">quantitativ · WIE</text></g>
                <g class="hot chip l" data-k="kano"><rect x="1060" y="476" width="132" height="30" rx="4"/><text x="1126" y="496" text-anchor="middle">Kano-Schema</text></g>
                <g class="hot chip l" data-k="priorisierung"><rect x="1198" y="476" width="132" height="30" rx="4"/><text x="1264" y="496" text-anchor="middle">Priorisierung</text></g>
''')

# Kapitel 7
i = s.index("    kap7: { icon: 'cable',"); j = s.index('    ]},\n', i) + len('    ]},\n')
s = s[:i] + ("    kap7: { icon: 'cable', title: '%s', tags: ['Kapitel 7', '+ zusätzliche Inhalte'], link: '#schnittstellen-7', blocks: [\n"
             "        ['7.1 (S. 296)', 'flag', '%s'],\n        ['Disziplinen (S. 297–299)', 'groups', '%s'],\n        ['%s (S. 300)', 'hub', '%s'],\n"
             "        ['', '', note('296–300 · nicht prüfungsrelevant', 'S. 9') + src('S. 9, 296–300')]\n    ]},\n") % (
    js(T[296]['title']), js(zeilen(296)[1]), lk('disziplinen', T[297]['title']) + '<br>' + js(e(T[298]['title'])) + ' · ' + js(e(T[299]['title'])),
    js(T[300]['title']), ' · '.join(js(e(a + ' ↔ ' + b)) for a, b in paare) + '<br>' + lk('aufgaben-ure', T[300]['title'])) + s[j:]

# 4 Prozesstabelle PT: Nachlesen und Themen
rep("{ k: 'festlegen', raum: 'Problem-/Lösungsraum', kap: ['4', '5', '6'], themen: ['na', 'qual', 'quant', 'stakeholder'],",
    "{ k: 'festlegen', raum: 'Problem-/Lösungsraum', kap: ['4', '5', '6'], themen: ['na', 'qual', 'quant', 'stakeholder', 'kano', 'priorisierung'],")
rep("lesen: '<a href=\"#nutzungsanforderungen\">Nutzungsanforderungen</a><a href=\"#anforderungen\">Anforderungsarten</a>' },",
    "lesen: '<a href=\"#nutzungsanforderungen\">Nutzungsanforderungen</a><a href=\"#anforderungen\">Anforderungsarten</a>"
    + ''.join(lk(a['id'], a['titel'] if not a['id'].startswith('ure') else 'URE Story: ' + a['titel']) for a in KAP5 + KAP6) + "' },")
rep("lesen: '<a href=\"#aufgabenmodell\">Aufgabenmodell für die Gestaltung</a><a href=\"#anforderungen\">Gestaltungsregel</a>' },",
    "lesen: '<a href=\"#aufgabenmodell\">Aufgabenmodell für die Gestaltung</a><a href=\"#anforderungen\">Gestaltungsregel</a>" + lk('aufgabenmodell-struktur', T[272]['title']) + lk('na-in-hcd', 'Nutzungsanforderungen in der Menschzentrierten Gestaltung') + "' },")
rep("lesen: '<a href=\"#anforderungen\">Verifizierung und Validierung</a>' }",
    "lesen: '<a href=\"#anforderungen\">Verifizierung und Validierung</a>" + lk('na-in-hcd', 'Nutzungsanforderungen in der Menschzentrierten Gestaltung') + "' }")
rep("lesen: '<a href=\"#rollen\">Rollen und Begriffe</a><a href=\"#kette\">Die Kette</a><a href=\"#anforderungen\">Anforderungsarten</a>' },",
    "lesen: '<a href=\"#rollen\">Rollen und Begriffe</a><a href=\"#kette\">Die Kette</a><a href=\"#anforderungen\">Anforderungsarten</a>" + ''.join(lk(a['id'], a['titel']) for a in KAP7) + "' },")
rep("{ k: 'hcd', raum: 'Basis', kap: ['1'],", "{ k: 'hcd', raum: 'Basis', kap: ['1', '7'],")
rep("['4', 'Erfordernisse identifizieren', 'kapitel-4.html'], ['5', 'Nutzungsanforderungen ableiten'],\n        ['6', 'Nutzungsanforderungen konsolidieren & priorisieren'], ['7', 'Schnittstellen des UR-Engineers']];",
    "['4', 'Erfordernisse identifizieren', 'kapitel-4.html'], ['5', 'Nutzungsanforderungen ableiten', 'kapitel-5.html'],\n        ['6', 'Nutzungsanforderungen konsolidieren & priorisieren', 'kapitel-6.html'], ['7', 'Schnittstellen des UR-Engineers', 'kapitel-7.html']];")
unit = {a['id']: '5.1' for a in KAP5[:9]}
unit.update({a['id']: '5.2' for a in KAP5[9:]}); unit.update({a['id']: '6.1' for a in KAP6[:3]}); unit.update({a['id']: '6.2' for a in KAP6[3:]}); unit.update({a['id']: '7' for a in KAP7})
rep("'ure-erfordernisse': '4.1' };", "'ure-erfordernisse': '4.1', " + ', '.join("'%s': '%s'" % kv for kv in unit.items()) + " };")

# 5 Evas Kette: Belege der Folien für die Nutzungsanforderung
rep('''<span class="pt-src">Frage 33, Anmerkung zu E und F</span></td>''',
    '''<span class="pt-src">Frage 33, Anmerkung zu E und F</span>''' + '<b>%s:</b> %s<span class="pt-src">S. 264</span><b>%s:</b> %s<span class="pt-src">S. 263</span>%s<span class="pt-src">S. 270</span></td>' % (
        e(T[264]['title']), e(' '.join(T[264]['text'].split('\n')[:4]) + ' ' + T[264]['text'].split('\n')[5]), e(T[263]['title']), e(punkte(263)[0]), e(punkte(270)[0].split('. ')[0] + '.')))

# 6 Glossar
G_NEU = [('Nutzungsanforderung', 'user requirement', zeilen(261)[0], 261, 1),
         ('Qualitative Nutzungsanforderung', 'qualitative user requirement', zeilen(262)[1], 262, 1),
         ('Quantitative Nutzungsanforderung', 'quantitative user requirement', zeilen(262)[3], 262, 1),
         ('Kano-Schema', 'Kano scheme', zeilen(280)[0], 280, 1), ('Priorisierung', 'prioritization', zeilen(290)[0], 290, 1),
         ('Produkt-Roadmap', 'product road map', zeilen(291)[0], 291, 1),
         ('Produktmanagement', 'product management', zeilen(297)[1], 297, 1), ('Produktmanager', 'product manager', zeilen(297)[4], 297, 1),
         ('Requirements Engineering', 'Requirements Engineering', zeilen(298)[0], 298, 1), ('Systems Engineering', 'Systems Engineering', zeilen(299)[0], 299, 1)]
vorhanden = s[s.index('const G = ['):s.index('];', s.index('const G = ['))]
g = ''
for term, en, d, pg, l in G_NEU:
    if "'%s'" % js(d) in vorhanden:                                   # gleicher Wortlaut schon da: nur Folie ergänzen
        m = re.search(r"(\['%s', '[^']*', '%s', ')([^']*)'" % (re.escape(js(term)), re.escape(js(d))), s)
        if m:
            s = s[:m.start(2)] + m.group(2) + ', %d' % pg + s[m.end(2):]
            continue
    g += "    ['%s', '%s', '%s', 'S. %d', %d],\n" % (js(term), js(en), js(d), pg, l)
rep("    ['Modellbasierte Nutzungskontextanalyse',", g + "    ['Modellbasierte Nutzungskontextanalyse',")

# 7 Navigation (Seitenleiste der Einzeldatei)
nav = ''.join('        <a href="#%s" class="nav-link"><span class="material-icons">%s</span>%s</a>\n' % (a['id'], a['icon'], e('URE Story' if a['id'].startswith('ure') else a['titel'])) for a in KAP5 + KAP6 + KAP7)
rep('        <a href="#ure-erfordernisse" class="nav-link"><span class="material-icons">auto_stories</span>URE Story</a>\n',
    '        <a href="#ure-erfordernisse" class="nav-link"><span class="material-icons">auto_stories</span>URE Story</a>\n' + nav)

# 8 Prüfungsübersicht: neue Sprungziele für Nutzungsanforderungen und Aufgabenmodell
L = lambda href, t: '<a href="%s">%s</a>' % (href, e(t))
rep('<a href="#nutzungsanforderungen">Nutzungsanforderung (user requirement)</a></span>',
    '<a href="#nutzungsanforderungen">Nutzungsanforderung (user requirement)</a>' + L('#guete-qual-k', 'Gütekriterien qualitativ (S. 263)') + L('#leitfragen-qual', 'Ableiten – Leitfragen (S. 265)')
    + L('#guete-quant-k', 'Gütekriterien quantitativ (S. 266)') + L('#uebung-6-k', 'Praktische Übung 6 (S. 277)') + '</span>')
rep('<a href="schablonen.html#sch-103">Qualitative Nutzungsanforderung (S. 103)</a><a href="schablonen.html#sch-110">Quantitative Nutzungsanforderung (S. 110)</a>',
    '<a href="schablonen.html#sch-264">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen (S. 264)</a><a href="schablonen.html#sch-103">Qualitative Nutzungsanforderung (S. 103)</a>'
    '<a href="schablonen.html#sch-267">Elemente für quantitative Nutzungsanforderungen (S. 267)</a><a href="schablonen.html#sch-110">Quantitative Nutzungsanforderung (S. 110)</a>')
rep('<a href="#aufgabenmodell">Aufgaben &amp; Ziele, Aufgabenmodell</a><a href="#modellhaft">Modellhafte Nutzungskontextbeschreibung</a></span>',
    '<a href="#aufgabenmodell">Aufgaben &amp; Ziele, Aufgabenmodell</a><a href="#modellhaft">Modellhafte Nutzungskontextbeschreibung</a>' + L('#aufgabenmodell-struktur', 'Aufgabenmodell als Strukturgebendes Format (S. 272–276)') + '</span>')
rep('<a href="#aufgabenmodell">Aufgabenmodell</a><a href="#nutzungsanforderungen">Nutzungsanforderung</a></span>',
    '<a href="#aufgabenmodell">Aufgabenmodell</a><a href="#nutzungsanforderungen">Nutzungsanforderung</a>' + L('#aufgabenmodell-gestaltung', 'Aufgabenmodell der Gestaltung (S. 276)') + L('#ure-5-2', 'URE Story: Nutzungsanforderungen angemessen strukturieren (S. 278)') + '</span>')
rep('<a href="#nki-typen-beispiele">NKI → Typen – Beispiele (S. 255)</a></span>',
    '<a href="#nki-typen-beispiele">NKI → Typen – Beispiele (S. 255)</a>' + L('#widerspruch-k', 'Sich widersprechende Erfordernisse (S. 268)') + '</span>')

# 9 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 258</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 300</p>')
rep('Folien S. 2–258 (Zum Seminar, Kapitel 1–3, Kapitel 4 bis S. 258)</span>', 'Folien S. 2–300 (Zum Seminar, Kapitel 1–7)</span>')
rep('Kapitel 1 und 2 sind eingearbeitet, Kapitel 3 vollständig, Kapitel 4 bis Folie S. 258. Die übrigen Kapitel ergänze ich, sobald die Folien da sind.',
    'Alle Kapitel 1–7 sind eingearbeitet (Folien S. 2–300). Nicht fotografiert: S. 53, 54, 230, 281, 284, 285.')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
