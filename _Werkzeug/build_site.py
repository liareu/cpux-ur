"""Baut aus Landkarte/CPUX-UR_Prozess-Landkarte.html (Einzelseite) die Unterseiten im Ordner Landkarte/.

Aufruf (im Projektordner):
  python3 -I _Werkzeug/build_site.py Landkarte/CPUX-UR_Prozess-Landkarte.html Landkarte _Werkzeug
Die Folienfotos in Landkarte/folien/ (verkleinert, 12 davon gedreht) werden hiervon nicht berührt.
Die Einzelseite wird nur gelesen. Kann beliebig oft neu ausgeführt werden.
"""
import html, os, re, sys

src_path, out_dir, tool_dir = sys.argv[1:4]
src = open(src_path, encoding='utf-8').read()
os.makedirs(out_dir, exist_ok=True)


def between(text, start, end, incl=False):
    i = text.index(start)
    j = text.index(end, i + len(start))
    return text[i:j + len(end)] if incl else text[i + len(start):j]


# ---------- Seitenaufbau ----------
# (Datei, Navigationstitel, Icon, Gruppe, Sektionen, Seitenüberschrift, Unterzeile)
PAGES = [
    ('dashboard.html', 'Lern-Cockpit', 'dashboard', 'Überblick', ['@cockpit'],
     'Lern-Cockpit', 'Dein Lernstand und dein nächster Schritt'),
    ('index.html', 'Prozesskarte', 'map', 'Überblick', ['karte'], None, None),
    ('seminar.html', 'Zum Seminar', 'school', 'Überblick', ['ausblick', 'rollen'],
     'Zum Seminar', 'Agenda, Rollen und Begriffe'),
    ('zusammenhang.html', 'Alles im Zusammenhang', 'hub', 'Lernen', ['@zusammenhang'],
     'Alles im Zusammenhang', 'Der HCD-Prozess Schritt für Schritt: Begriffe, wichtige Folien, Schablonen, Lernziele und Prüfung an einem Ort'),
    ('schaubilder.html', 'Schaubilder', 'account_tree', 'Lernen', ['@schaubilder'],
     'Schaubilder', 'Alle klickbaren Prozess- und Strukturschaubilder der Folien'),
    ('lernziele.html', 'Lernziele des Curriculums', 'checklist', 'Lernen', ['@lernziele'],
     'Lernziele', 'Alle 61 Lernziele des Curriculums mit Folien und Prüfungsfragen'),
    ('selbsttest.html', 'Selbsttest Begriffe', 'style', 'Lernen', ['@selbsttest'],
     'Selbsttest Begriffe', 'Begriff sehen, Definition aufdecken, „kann ich“ oder „nochmal“ markieren'),
    ('kapitel-1.html', '1 Einführung in die NKA', 'looks_one', 'Kapitel',
     ['kette', 'kontext', 'aufgabenmodell', 'anforderungen', 'nutzungsanforderungen'],
     'Kapitel 1', 'Einführung in die Nutzungskontextanalyse'),
    ('kapitel-2.html', '2 NKA planen', 'looks_two', 'Kapitel', ['planen', 'methoden'],
     'Kapitel 2', 'Nutzungskontextanalyse planen'),
    ('kapitel-3.html', '3 Information erheben', 'looks_3', 'Kapitel', ['erheben', 'rekrutieren', 'durchfuehren', 'beobachtung', 'fokusgruppe', 'methodenwahl', 'mentale-modelle', 'beschreiben', 'nk-beschreibung', 'narrativ', 'modellhaft', 'ergebnisse-33'],
     'Kapitel 3', 'Nutzungskontextinformation erheben und dokumentieren'),
    ('kapitel-4.html', '4 Erfordernisse identifizieren', 'looks_4', 'Kapitel', ['erfordernisse-4', 'erfordernis-def', 'arten-erfordernisse', 'qualitaet-erfordernisse', 'syntax-erfordernisse', 'erfordernisse-identifizieren', 'nki-typen-beispiele', 'ueberblick-praxis', 'ure-erfordernisse'],
     'Kapitel 4', 'Erfordernisse in Nutzungskontextinformationen identifizieren'),
    ('pruefung-theorie.html', 'Theoretische Prüfung', 'quiz', 'Prüfung', ['@theorie'],
     'Theoretische Prüfung', 'Öffentliche Beispielprüfung CPUX-UR: 40 Fragen, 90 Minuten'),
    ('pruefung-praxis.html', 'Praktische Prüfung', 'assignment', 'Prüfung', ['pruefung', '@praxis'],
     'Praktische Prüfung', 'Öffentliche Beispielprüfung CPUX-UR: Aufgaben, Material und Lösung'),
    ('glossar.html', 'Glossar', 'menu_book', 'Nachschlagen', ['glossar'],
     'Glossar', 'Alle Definitionen im Wortlaut der Folien'),
    ('ure-story.html', 'URE Story', 'auto_stories', 'Nachschlagen', ['@ure'],
     'URE Story', 'Die Zusammenfassungen der Kapitel'),
    ('schablonen.html', 'Formulierungsschablonen', 'text_fields', 'Nachschlagen', ['@schablonen'],
     'Formulierungsschablonen', 'Alle Schablonen aus den Folien, prüfungsrelevant'),
    ('curriculum.html', 'Curriculum', 'library_books', 'Nachschlagen', ['@curriculum'],
     'Curriculum', 'CPUX-UR Curriculum und Glossar, durchsuchbar'),
]
# Kapitel, deren Folien noch fehlen (Agenda S. 9)
SOON = [ '5 NA ableiten',
        '6 Konsolidieren & priorisieren', '7 Schnittstellen']

# Sektionen, die nicht aus der Einzelseite kommen
EXTRA_SUB = {
    '@theorie': [('theorie-anleitung', 'Anleitung & Bewertung', 'info'),
                 ('theorie-fragen', 'Die 40 Fragen', 'quiz'),
                 ('theorie-ergebnis', 'Auswertung', 'fact_check')],
    '@praxis': [('praxis-instruktion', 'Instruktion', 'assignment'),
                ('praxis-material', 'Prüfungsmaterial', 'description'),
                ('praxis-szenario', 'Ist-Szenario', 'history_edu'),
                ('praxis-gruppen', 'Benutzergruppen', 'groups'),
                ('praxis-erfordernisse', 'Erfordernisse & NA', 'edit_note'),
                ('praxis-aufgabenmodell', 'Aufgabenmodell', 'checklist'),
                ('praxis-interviewer', 'Interviewfehler', 'record_voice_over'),
                ('praxis-auswertung', 'Selbstauswertung', 'fact_check')],
}

# ---------- Bausteine aus der Einzelseite ----------
css = between(src, '<style>', '</style>')
head_links = '\n'.join(re.findall(r'<link [^>]*>', between(src, '<head>', '</head>')))
sidebar = between(src, '<aside class="sidebar">', '</aside>', incl=True)
sb_header = between(sidebar, '<div class="sidebar-header">', '</div>', incl=True)
sb_footer = sidebar[sidebar.index('<div class="sidebar-footer">'):sidebar.rindex('</aside>')]
main_header = between(src, '<div class="header">', '\n    </div>\n', incl=True)
footer = re.search(r'<footer>.*?</footer>', src, re.S).group(0)
drawer = src[src.index('<div class="drawer-bg"'):src.index('<button class="back-to-top"')]
btt = re.search(r'<button class="back-to-top".*?</button>', src, re.S).group(0)
js = between(src, '<script>', '</script>')

# Navigationstexte der Sektionen aus der alten Seitenleiste
nav_old = {m.group(1): (m.group(3), m.group(2)) for m in re.finditer(
    r'<a href="#([\w-]+)" class="nav-link[^"]*"><span class="material-icons">([\w_]+)</span>(.*?)</a>', sidebar)}

# Sektionen samt vorangestelltem Kommentarblock
sections = {}
for m in re.finditer(r'(    <!-- =+\n.*?=+ -->\n)?    <section class="section[^"]*" id="([\w-]+)">.*?</section>\n', src, re.S):
    sections[m.group(2)] = m.group(0)

used = [s for p in PAGES for s in p[4] if not s.startswith('@')]
missing = [s for s in used if s not in sections]
unplaced = [s for s in sections if s not in used]
assert not missing, 'fehlende Sektionen: %s' % missing
assert not unplaced, 'Sektionen ohne Unterseite (bitte in PAGES eintragen): %s' % unplaced

page_of = {s: p[0] for p in PAGES for s in p[4]}
for p in PAGES:
    for s in p[4]:
        for sub in EXTRA_SUB.get(s, []):
            page_of[sub[0]] = p[0]
# Sprungziele auf einzelne Karten (id an der Karte) liegen auf der Seite ihrer Sektion
for sec, h in sections.items():
    for kid in re.findall(r'<div class="card[^"]*" id="([\w-]+)"', h):
        page_of.setdefault(kid, page_of.get(sec))


def relink(text):
    """Anker auf Sektionen anderer Unterseiten umbiegen: #kontext -> kapitel-1.html#kontext"""
    text = re.sub(r'href="#([\w-]+)"', lambda m: 'href="%s#%s"' % (page_of[m.group(1)], m.group(1))
                  if m.group(1) in page_of else m.group(0), text)
    return re.sub(r"link: '#([\w-]+)'", lambda m: "link: '%s#%s'" % (page_of.get(m.group(1), 'index.html'), m.group(1)), text)


# ---------- Gemeinsames Skript ----------
chunks = re.split(r'(?m)^(?=/\* -{10} )', js)


def chunk(name):
    hits = [i for i, c in enumerate(chunks) if c.startswith('/* ---------- ' + name)]
    assert len(hits) == 1, 'Skriptabschnitt nicht eindeutig: ' + name
    return hits[0]


for name, el in (('Glossar', 'glossary'),):
    i = chunk(name)
    first, rest = chunks[i].split('\n', 1)
    chunks[i] = "%s\nif (document.getElementById('%s')) {\n%s}\n\n" % (first, el, rest.rstrip() + '\n')

chunks[chunk('Navigation')] = """/* ---------- Navigation: Unterpunkte der aktuellen Seite hervorheben ---------- */
const subLinks = [...document.querySelectorAll('.nav-sub a')];
const subTargets = subLinks.map(l => document.getElementById(l.getAttribute('href').slice(1)));
const btt = document.getElementById('backToTop');
function spy() {
    btt.classList.toggle('show', window.scrollY > 600);
    let idx = 0;
    subTargets.forEach((s, i) => { if (s && s.getBoundingClientRect().top < 160) idx = i; });
    subLinks.forEach((l, i) => l.classList.toggle('active', i === idx));
}
window.addEventListener('scroll', spy); spy();
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
"""
js = ''.join(chunks)
old_direct = "if (location.hash.startsWith('#d-')) { document.getElementById('karte').scrollIntoView(); openDetail(location.hash.slice(3)); }"
assert old_direct in js, 'Direktlink-Zeile nicht gefunden'
js = js.replace(old_direct, "if (location.hash.startsWith('#d-')) { const karte = document.getElementById('karte'); if (karte) karte.scrollIntoView(); openDetail(location.hash.slice(3)); }")
js = relink(js)

open(os.path.join(out_dir, 'landkarte.js'), 'w', encoding='utf-8').write(
    '/* CPUX-UR Prozess-Landkarte: gemeinsames Skript aller Unterseiten. Erzeugt mit build_site.py. */\n' + js.strip() + '\n')
open(os.path.join(out_dir, 'landkarte.css'), 'w', encoding='utf-8').write(
    '/* CPUX-UR Prozess-Landkarte: gemeinsame Gestaltung. Erzeugt mit build_site.py. */\n' + css.strip() + '\n\n'
    + open(os.path.join(tool_dir, 'unterseiten.css'), encoding='utf-8').read()
    + '\n' + open(os.path.join(tool_dir, 'ruhe.css'), encoding='utf-8').read())
import json
fmap = os.path.join(tool_dir, 'folien_map.json')
if os.path.exists(fmap):
    data = [dict({'file': x['file'], 'pages': x['pages'], 'titles': x.get('titles', [])}, **({'dir': x['dir']} if x.get('dir') else {})) for x in json.load(open(fmap, encoding='utf-8'))]
    open(os.path.join(out_dir, 'folien-daten.js'), 'w', encoding='utf-8').write(
        '/* Zuordnung Foto (Ordner Folien/) → gedruckte Folienseite. Erzeugt mit build_site.py. */\nconst FOLIEN = '
        + json.dumps(data, ensure_ascii=False, indent=0) + ';\n')
frot = os.path.join(tool_dir, 'folien_rot.json')
if os.path.exists(frot):
    rot = {str(x['page']): {'m': (x.get('marker') or '').replace('-', ' ') or None, 'rot': x.get('rot', [])} for x in json.load(open(frot, encoding='utf-8'))}
    open(os.path.join(out_dir, 'hervorhebung-daten.js'), 'w', encoding='utf-8').write(
        '/* Folienseite → Marker im roten Kreis (W = prüfungsrelevant) und rot gedruckte Begriffe. Erzeugt mit build_site.py. */\nconst ROT = '
        + json.dumps(rot, ensure_ascii=False, indent=0) + ';\n')
for f in ('pruefung.css', 'pruefung.js', 'folien.js', 'hervorhebung.js', 'detail.js', 'curriculum.js', 'zusammenhang.js', 'prozessgrafik.js', 'ausrichten.js', 'lernen.js', 'lernen.css', 'selbsttest.js'):
    open(os.path.join(out_dir, f), 'w', encoding='utf-8').write(open(os.path.join(tool_dir, f), encoding='utf-8').read())
open(os.path.join(out_dir, 'pruefung-daten.js'), 'w', encoding='utf-8').write(
    open(os.path.join(tool_dir, 'pruefung-daten.js'), encoding='utf-8').read())

def element_at(text, start):
    """Vollständiges <div …>…</div> ab start (Tiefe zählen)."""
    depth, i = 0, start
    for m in re.finditer(r'<div\b|</div>', text[start:]):
        depth += 1 if m.group(0) == '<div' else -1
        if depth == 0:
            return text[start:start + m.end()]
    return text[start:]


def sammeln(muster):
    """Bausteine in Seitenreihenfolge einsammeln: [(Seite, Navigationstitel, html)]"""
    out = []
    for pg in PAGES:
        for sec in pg[4]:
            if sec.startswith('@') or sec not in sections:
                continue
            for m in re.finditer(muster, sections[sec]):
                out.append((pg, sec, element_at(sections[sec], m.start())))
    return out


def sammelseite(muster, titel, leer):
    teile, letzte = [], None
    for pg, sec, h in sammeln(muster):
        if pg[0] != letzte:
            if letzte:
                teile.append('        </div>\n    </section>\n')
            teile.append('    <section class="section" id="s-%s">\n        <div class="section-title"><div class="num"><span class="material-icons">%s</span></div><h2>%s</h2>'
                         '<a class="sm-link" href="%s">zur Kapitelseite →</a></div>\n        <div class="sammel">\n' % (pg[0][:-5], pg[2], html.escape(pg[5] + ' – ' + pg[6] if pg[5] else pg[1]), pg[0]))
            letzte = pg[0]
        teile.append('            ' + h + '\n')
    if letzte:
        teile.append('        </div>\n    </section>\n')
    return ''.join(teile) or '<p>%s</p>' % leer


extra_html = {
    '@theorie': open(os.path.join(tool_dir, 'theorie.html'), encoding='utf-8').read(),
    '@praxis': open(os.path.join(tool_dir, 'praxis.html'), encoding='utf-8').read(),
    '@curriculum': open(os.path.join(tool_dir, 'curriculum.html'), encoding='utf-8').read(),
}
extra_html['@ure'] = sammelseite(r'<div class="card ure">', 'URE Story', 'Noch keine URE Story vorhanden.')
schab = []
for pg, sec, h in sammeln(r'<div class="schablone"'):
    t = re.search(r'data-titel="([^"]*)"', h).group(1); f = re.search(r'data-folie="([^"]*)"', h).group(1)
    schab.append('        <div class="card schablone-karte" id="sch-%s"><h3>' % re.sub(r'\D', '', f.split(',')[0]) + '<span class="material-icons">text_fields</span>%s <small>%s</small></h3>\n            %s\n            <span class="src"><span class="material-icons">description</span>Folie %s</span> <a class="sm-link" href="%s#%s">im Kapitel ansehen →</a>\n        </div>\n' % (t, html.escape(pg[5] or ''), h, f.replace('S. ', 'S. '), pg[0], sec))
extra_html['@schablonen'] = ('    <section class="section" id="schablonen-alle">\n        <div class="section-title"><div class="num"><span class="material-icons">text_fields</span></div><h2>Formulierungsschablonen</h2></div>\n'
    '        <p class="section-lead">Alle Schablonen und Bausteine aus den Folien an einem Ort, im Wortlaut. Neue Schablonen aus weiteren Folien kommen automatisch dazu.</p>\n' + ''.join(schab) + '    </section>\n')
# Schablonen direkt an der Prüfungsaufgabe: <!--SCHABLONEN S. 252|S. 103--> in praxis.html
sch_by = {re.search(r'data-folie="([^"]*)"', h).group(1).split(',')[0]: (re.search(r'data-titel="([^"]*)"', h).group(1), h) for pg, sec, h in sammeln(r'<div class="schablone"')}


def schablonen_an_aufgabe(m):
    teile = []
    for f in m.group(1).split('|'):
        t, h = sch_by[f.strip()]
        teile.append('<div class="pu-sch-k"><div class="pu-sch-t">%s <small>Folie %s</small> <a class="sm-link" href="schablonen.html#sch-%s">bei allen Schablonen →</a></div>%s</div>' % (t, f.strip(), re.sub(r'\D', '', f), h))
    return ('<details class="pu-schablonen" open><summary><span class="material-icons">text_fields</span>Formulierungsschablonen für diese Aufgabe</summary>'
            + ''.join(teile) + '</details>')


extra_html['@praxis'] = re.sub(r'<!--SCHABLONEN ([^>]*)-->', schablonen_an_aufgabe, extra_html['@praxis'])
EXTRA_SUB['@ure'] = [('s-' + p[0][:-5], p[1], 'chevron_right') for p in PAGES if any(x[0] == p for x in sammeln(r'<div class="card ure">'))]
EXTRA_SUB['@schablonen'] = [('schablonen-alle', 'Alle Schablonen', 'text_fields')]
# ---------- Lernziele und „Alles im Zusammenhang“ ----------
LZ = json.load(open(os.path.join(tool_dir, 'lernziele.json'), encoding='utf-8'))
_t = open(os.path.join(tool_dir, 'pruefung-daten.js'), encoding='utf-8').read()
EXQ = json.loads(_t[_t.index('['):_t.rindex(']') + 1])
q_by_lo = {}
for q in EXQ:
    q_by_lo.setdefault(q['lo'], []).append(q['n'])
# Zuordnung Lerneinheit → Abschnitte der Kapitelseiten (redaktionell, auf Ebene der Lerneinheit)
UNIT_SECS = {'1.1': ['kette'], '1.2': ['anforderungen'], '1.3': ['kontext', 'aufgabenmodell'], '1.4': ['nutzungsanforderungen'],
             '2.1': ['planen'], '2.2': ['planen', 'methoden'], '3.1': ['rekrutieren'],
             '3.2': ['durchfuehren', 'beobachtung', 'fokusgruppe', 'methodenwahl', 'mentale-modelle'], '3.3': ['beschreiben', 'nk-beschreibung', 'narrativ', 'modellhaft', 'ergebnisse-33'], '4.1': ['erfordernisse-4', 'erfordernis-def', 'arten-erfordernisse', 'qualitaet-erfordernisse', 'syntax-erfordernisse', 'erfordernisse-identifizieren', 'nki-typen-beispiele', 'ueberblick-praxis', 'ure-erfordernisse']}
sec_title = {}
for sid, h in sections.items():
    m = re.search(r'<h2>(.*?)</h2>', h, re.S)
    sec_title[sid] = re.sub('<[^>]+>', '', m.group(1)).strip() if m else sid
cu_anchor = lambda u: 'curriculum.html#' + u['id']
lo_anchor = lambda code: 'lo-' + code.replace('.', '-')


def lz_items(codes_or_units, only=None):
    out = []
    for u in LZ:
        for code, txt in u['lz']:
            if (u['code'] in codes_or_units or code in codes_or_units) and (only is None or code in only or u['code'] in only):
                qs = ''.join('<a class="lz-q" href="pruefung-theorie.html#q-%d">Frage %d</a>' % (n, n) for n in q_by_lo.get(code, []))
                out.append('<div class="lz-i" id="%s"><b>%s</b><span>%s</span><span class="lz-qs">%s</span></div>' % (lo_anchor(code), code, html.escape(txt), qs))
    return ''.join(out)


teile = ['    <section class="section" id="lz-alle">\n        <div class="section-title"><div class="num"><span class="material-icons">checklist</span></div><h2>Lernziele des Curriculums</h2></div>\n'
         '        <p class="section-lead">Wortlaut aus dem CPUX-UR Curriculum. Zu jeder Lerneinheit die passenden Folien-Abschnitte, zu jedem Lernziel die Fragen der Beispielprüfung, die es abfragen.</p>\n']
for u in LZ:
    secs = UNIT_SECS.get(u['code'], [])
    folien = ''.join('<a href="%s#%s">%s</a>' % (page_of[x], x, html.escape(sec_title[x])) for x in secs if x in page_of) or '<span class="pt-none">Folien folgen</span>'
    teile.append('        <div class="card lz-card" id="lz-%s" data-lz-secs="%s"><h3><span class="lz-code">%s</span>%s</h3>\n            <div class="lz-links"><span>Folien:</span>%s<a href="%s">Im Curriculum lesen</a></div>\n            <div class="lz-list">%s</div>\n        </div>\n'
                 % (u['code'].replace('.', '-'), ' '.join(x for x in secs if x in page_of), u['code'], html.escape(u['titel']), folien, cu_anchor(u), lz_items([u['code']])))
teile.append('    </section>\n')
extra_html['@lernziele'] = ''.join(teile)

# ---------- Lernfortschritt, Cockpit, Selbsttest (lernen.js, selbsttest.js) ----------
lern = [dict(seite=pg[0], titel=pg[1], abschnitte=[dict(id=s_, titel=sec_title[s_]) for s_ in pg[4]])
        for pg in PAGES if pg[0].startswith('kapitel-')]
seite_kap = {}
for pg in PAGES:
    if pg[0].startswith('kapitel-'):
        for s_ in pg[4]:
            for m in re.finditer(r'<span class="src">(?:<span class="material-icons">[^<]*</span>)?([^<]*)</span>', sections[s_]):
                for n_ in re.findall(r'\d+', m.group(1)):
                    seite_kap.setdefault(int(n_), pg[1])
g_src = js[js.index('const G = ['):]
g_src = g_src[:g_src.index('\n];') + 3]
karten = []
for m in re.finditer(r"\n    \[('(?:[^'\\]|\\.)*'), ('(?:[^'\\]|\\.)*'), ('(?:[^'\\]|\\.)*'), ('(?:[^'\\]|\\.)*'), \d\]", g_src):
    term, en, de, fol = [x[1:-1].replace("\\'", "'") for x in m.groups()]
    nums = [int(x) for x in re.findall(r'\d+', fol)]
    kap = next((seite_kap[x] for x in nums if x in seite_kap), 'Zum Seminar')
    karten.append(dict(term=term, en=en, **{'def': de}, folie=fol.replace('S. ', ''), kap=kap))
assert karten, 'Glossar G nicht gefunden'
open(os.path.join(out_dir, 'lern-daten.js'), 'w', encoding='utf-8').write(
    '/* Abschnitte der Kapitelseiten (Lernfortschritt) und Begriffe aus dem Glossar (Selbsttest). Erzeugt mit build_site.py. */\nconst LERN_DATEN = '
    + json.dumps(lern, ensure_ascii=False) + ';\nconst KARTEN = ' + json.dumps(karten, ensure_ascii=False, indent=0) + ';\nconst KARTEN_ANZAHL = KARTEN.length;\n')
extra_html['@selbsttest'] = ('    <section class="section" id="st-karten">\n        <div class="section-title"><div class="num"><span class="material-icons">style</span></div><h2>Begriffe abfragen</h2></div>\n'
    '        <p class="section-lead">%d Begriffe aus dem Glossar, Definitionen im Wortlaut der Folien. Dein Stand bleibt in diesem Browser gespeichert.</p>\n'
    '        <div id="selbsttest"></div>\n    </section>\n' % len(karten))
LEITFADEN = [
    ('Verstehen: Wie hängt alles zusammen?', [
        ('index.html', 'Der HCD-Prozess als klickbare Grafik oder Tabelle. Klick auf einen Begriff öffnet rechts die Details. Gut als Einstieg und zum Einordnen.'),
        ('zusammenhang.html', 'Jeder Prozessschritt auf einer Seite: Begriffe, wichtige Folien, Schablonen, Lernziele und passende Prüfungsfragen.'),
        ('schaubilder.html', 'Die großen Schaubilder der Folien (z. B. B/A&amp;Z/U/R) zum Durchklicken.')]),
    ('Lernen: Die Inhalte durcharbeiten', [
        ('kapitel-1.html', 'Die Kapitelseiten 1 bis 4 mit den Folieninhalten im Wortlaut. Rot = auf der Folie rot, <b>W</b> = prüfungsrelevante Folie. Hier markierst du Abschnitte als gelernt.'),
        ('lernziele.html', 'Die 61 Lernziele des Curriculums: Was die Prüfung verlangt, mit Folien und Prüfungsfragen.'),
        ('selbsttest.html', 'Definitionen abfragen wie mit Karteikarten.')]),
    ('Üben: Prüfung simulieren', [
        ('pruefung-theorie.html', 'Die öffentliche Beispielprüfung mit Auswertung, bestanden ab 70 %.'),
        ('pruefung-praxis.html', 'Aufgaben, Material und Musterlösung der praktischen Prüfung.')]),
    ('Nachschlagen: Schnell etwas finden', [
        ('glossar.html', 'Alle Definitionen, durchsuchbar.'),
        ('schablonen.html', 'Alle Formulierungsschablonen, zum Beispiel für Erfordernisse und Nutzungsanforderungen.'),
        ('ure-story.html', 'Die Zusammenfassungen der Kapitel.'),
        ('curriculum.html', 'Das offizielle Curriculum, durchsuchbar.')]),
]
_titel = {p_[0]: (p_[1], p_[2]) for p_ in PAGES}
_lf = []
for gruppe, eintraege in LEITFADEN:
    _lf.append('            <div class="lf-gruppe"><h4>%s</h4>\n' % gruppe + ''.join(
        '                <a class="lf-seite" href="%s"><span class="material-icons">%s</span><span><b>%s</b>%s</span></a>\n'
        % (f, _titel[f][1], 'Kapitel 1–4' if f == 'kapitel-1.html' else html.escape(_titel[f][0]), t) for f, t in eintraege) + '            </div>\n')
extra_html['@cockpit'] = ('    <section class="section" id="cockpit-stand">\n'
    '        <details class="card ck-erkl">\n            <summary><span class="material-icons">help_outline</span>Was ist das Lern-Cockpit?</summary>\n'
    '            <p>Das Lern-Cockpit ist deine Startseite fürs Lernen. Es zeigt dir auf einen Blick, <b>wie weit du bist</b> und <b>womit du weitermachst</b>. Es stellt keine eigenen Inhalte dar, sondern führt dich zu den richtigen Seiten.</p>\n'
    '            <ul><li><b>Schritt 1: Kapitel durcharbeiten.</b> Der Fortschritt entsteht, wenn du auf den Kapitelseiten bei einem Abschnitt „Als gelernt markieren“ klickst. Der Knopf bringt dich immer zum ersten Abschnitt, den du noch nicht markiert hast.</li>\n'
    '            <li><b>Schritt 2: Begriffe abfragen.</b> Hier zählt, wie viele Begriffe du im Selbsttest mit „Kann ich“ markiert hast.</li>\n'
    '            <li><b>Schritt 3: Beispielprüfung machen.</b> Hier steht das Ergebnis deiner letzten Auswertung der theoretischen Beispielprüfung.</li>\n'
    '            <li>Ein Schritt bekommt einen grünen Haken, wenn er erledigt ist.</li></ul>\n'
    '            <p class="ck-hinweis">Dein Stand liegt nur in diesem Browser. In einem anderen Browser oder nach dem Löschen der Browserdaten fängst du wieder bei null an.</p>\n'
    '        </details>\n'
    '        <div id="cockpit" aria-label="Lern-Cockpit"></div>\n    </section>\n'
    '    <section class="section" id="cockpit-seiten">\n        <div class="section-title"><div class="num"><span class="material-icons">explore</span></div><h2>Welche Seite wofür?</h2></div>\n'
    '        <p class="section-lead">Die Lernkarte hat vier Bereiche. Wenn du nicht weißt, wo du etwas findest, schau hier.</p>\n'
    '        <div class="lf-raster">\n' + ''.join(_lf) + '        </div>\n    </section>\n')
EXTRA_SUB['@cockpit'] = [('cockpit-stand', 'Mein Stand', 'dashboard'), ('cockpit-seiten', 'Welche Seite wofür?', 'explore')]
EXTRA_SUB['@selbsttest'] = [('st-karten', 'Begriffe abfragen', 'style')]
EXTRA_SUB['@lernziele'] = [('lz-alle', 'Alle Lernziele', 'checklist')]
extra_html['@schaubilder'] = sammelseite(r'<div class="pg" data-pg=', 'Schaubilder', 'Noch keine Schaubilder vorhanden.')
EXTRA_SUB['@schaubilder'] = [('s-' + p[0][:-5], p[1], 'chevron_right') for p in PAGES if any(x[0] == p for x in sammeln(r'<div class="pg" data-pg='))]

# Prozessschritte aus der Prozesstabelle (PT) im Skript
pt_src = js[js.index('const PT = ['):js.index('const KAP = [')]
STEPS = []
for chunk in pt_src.split("{ k: '")[1:]:
    k = chunk.split("'", 1)[0]
    them = re.search(r"themen: \[([^\]]*)\]", chunk)
    lesen = re.search(r"lesen: '([^']*)'", chunk)
    STEPS.append(dict(k=k, raum=re.search(r"raum: '([^']*)'", chunk).group(1), themen=re.findall(r"'(\w+)'", them.group(1)) if them else [],
                      praxis=re.findall(r"\['([^']*)', (\d+), '([\w-]+)'\]", chunk),
                      secs=re.findall(r'href="[^"#]*#([\w-]+)"', lesen.group(1)) if lesen else []))
STEP_LZ = {'hcd': ['1.1', '1.2'], 'planung': ['2.1', '2.2'], 'verstehen': ['1.3', '3.1', '3.2', '3.3', '4.1'],
           'festlegen': ['1.4', '5.1', '5.2', '6.1', '6.2'], 'gestalten': ['1.1.g'], 'evaluieren': ['1.2.e']}
w_pages = {x['page'] for x in json.load(open(os.path.join(tool_dir, 'folien_rot.json'), encoding='utf-8')) if (x.get('marker') or '') == 'W'}


def seiten(txt):
    out = set()
    for m in re.finditer(r'S\.\s*(\d[\d\s,–-]*)', txt):
        for part in m.group(1).split(','):
            r = [int(x) for x in re.findall(r'\d+', part)[:2]]
            if r:
                out.update(range(r[0], (r[1] if len(r) > 1 else r[0]) + 1))
    return out


gesehen = set()
zt = []
Z_KURZ = {'hcd': 'Basis', 'planung': 'Planung', 'verstehen': 'Nutzungskontext verstehen', 'festlegen': 'Anforderungen festlegen',
          'gestalten': 'Gestalten', 'evaluieren': 'Evaluieren'}
Z_NR = {}
for st in STEPS:
    if st['k'] != 'hcd':
        Z_NR[st['k']] = len(Z_NR) + 1


# Schaubilder einordnen: Kapitel und Prozessschritt an jedes .pg (data-ort, id), dazu die Übersicht der Schaubilder-Seite
PG_FORM = {'baum': ('account_tree', 'Struktur'), 'zusammenlauf': ('call_merge', 'Struktur'), 'ebenen': ('view_agenda', 'Ebenen'),
           'wirkung': ('trending_flat', 'Wirkung'), 'vergleich': ('compare_arrows', 'Vergleich'),
           'paare': ('format_list_numbered', 'Schritte und Ergebnisse'), 'klammer': ('call_split', 'Einteilung'), 'matrix': ('view_week', 'Vorgehen je Methode')}
pg_liste = []


def pg_einordnen(sec, h):
    pg = next((x for x in PAGES if x[0] == page_of.get(sec)), None)
    st = next((x for x in STEPS if sec in x['secs']), None)
    ort = ' · '.join(t for t in ((pg[5] if pg and pg[5] else ''), (('Schritt %d ' % Z_NR[st['k']] if st['k'] in Z_NR else '') + Z_KURZ.get(st['k'], '') if st else '')) if t)

    def setzen(m):
        g_ = json.loads(html.unescape(m.group(1)))
        pid = 'pg-' + re.sub(r'[^a-z0-9]+', '-', g_['titel'].lower()).strip('-')[:40]
        pg_liste.append(dict(id=pid, titel=g_['titel'], folie=g_.get('folie', ''), ort=ort, form=g_.get('form', ''), seite=pg[0] if pg else ''))
        return m.group(0) + ' data-ort="%s" id="%s"' % (html.escape(ort), pid)
    return re.sub(r'<div class="pg" data-pg="([^"]*)"', setzen, h)


for _sec in list(sections):
    if '<div class="pg" data-pg=' in sections[_sec]:
        sections[_sec] = pg_einordnen(_sec, sections[_sec])
_ueb = ''.join('<a class="pg-ueb-k" href="#%s"><span class="material-icons">%s</span><span><b>%s</b><small>%s · %s</small><em>%s</em></span></a>' % (
    x['id'], PG_FORM.get(x['form'], ('east', 'Ablauf'))[0], html.escape(x['titel']), html.escape(x['ort']), html.escape(x['folie']),
    PG_FORM.get(x['form'], ('east', 'Ablauf'))[1]) for x in pg_liste)
extra_html['@schaubilder'] = ('    <section class="section" id="s-uebersicht">\n        <div class="section-title"><div class="num"><span class="material-icons">grid_view</span></div><h2>Übersicht</h2></div>\n'
    '        <p class="section-lead">Jedes Schaubild in der Form seiner Folie: Struktur (Baum), Ebenen, Wirkung, Vergleich, Einteilung, Schritte und Ergebnisse oder Vorgehen je Methode. Ein Klick springt hin.</p>\n'
    '        <div class="pg-ueb">' + _ueb + '</div>\n    </section>\n'
    + sammelseite(r'<div class="pg" data-pg=', 'Schaubilder', 'Noch keine Schaubilder vorhanden.'))
EXTRA_SUB['@schaubilder'] = [('s-uebersicht', 'Übersicht', 'grid_view')] + EXTRA_SUB['@schaubilder']


def wegweiser(titel, folie, sec):
    """Eine Zeile „Titel · Folie → Kapitelabschnitt“ statt der vollen Karte"""
    ziel = '%s#%s' % (page_of.get(sec, ''), sec)
    return '<li><a href="%s">%s</a> <small>%s</small><span class="z-weg-wo">%s</span></li>' % (
        ziel, titel.strip(), html.escape(folie.strip()), html.escape(sec_title.get(sec, sec)))


def wege(titel, icon, items):
    if not items:
        return ''
    return '<div class="z-weg"><h4 class="z-h2">%s%s</h4><ul>%s</ul></div>' % (
        '<span class="material-icons">%s</span>' % icon if icon else '', titel, ''.join(items))


def schrittleiste(akt):
    """Prozessschritte mit Nummern, aktueller Schritt hervorgehoben"""
    out = []
    for st in STEPS:
        k = st['k']
        nr = '<b>%d</b>' % Z_NR[k] if k in Z_NR else '<b class="basis">B</b>'
        out.append('<a href="#z-%s"%s>%s%s</a>' % (k, ' class="akt" aria-current="step"' if k == akt else '', nr, Z_KURZ.get(k, k)))
    return '<nav class="z-leiste" aria-label="Prozessschritte">' + '<span class="material-icons">chevron_right</span>'.join(out) + '</nav>'


for st in STEPS:
    w_html, sch_html, pg_html, ure_html = [], [], [], []
    for sec in st['secs']:
        h = sections.get(sec, '')
        for m in re.finditer(r'<div class="card[^"]*">', h):
            card = element_at(h, m.start())
            srcs = ' '.join(re.findall(r'<span class="src">(?:<span class="material-icons">[^<]*</span>)?([^<]*)</span>', card))
            if seiten(srcs) & w_pages and card not in gesehen and card.count('<div class="card') == 1:
                gesehen.add(card)
                t = re.search(r'<h3>(?:<span class="material-icons">[^<]*</span>)?(.*?)</h3>', card, re.S)
                w_html.append(wegweiser(t.group(1) if t else sec_title.get(sec, sec), re.sub(r'^Folien? ', '', srcs.strip()), sec))
        for m in re.finditer(r'<div class="card ure">', h):
            b = element_at(h, m.start())
            if b not in gesehen:
                gesehen.add(b)
                ure_html.append(b)
        for m in re.finditer(r'<div class="pg" data-pg=', h):
            b = element_at(h, m.start())
            if b not in gesehen:
                gesehen.add(b)
                g_ = json.loads(html.unescape(re.search(r'data-pg="([^"]*)"', b).group(1)))
                pg_html.append(wegweiser(html.escape(g_['titel']), g_.get('folie', ''), sec))
        for m in re.finditer(r'<div class="schablone"', h):
            b = element_at(h, m.start())
            if b not in gesehen:
                gesehen.add(b)
                sch_html.append(wegweiser(re.search(r'data-titel="([^"]*)"', b).group(1), re.search(r'data-folie="([^"]*)"', b).group(1), sec))
    lz = lz_items(STEP_LZ.get(st['k'], []))
    praxis = ''.join('<a class="pt-p" href="pruefung-praxis.html#praxis-%s">%s <b>%s P</b></a>' % (i, t, p) for t, p, i in st['praxis'])
    vertiefen = ''.join('<a href="%s#%s">%s</a>' % (page_of.get(x, ''), x, html.escape(sec_title.get(x, x))) for x in st['secs'] if x in page_of)
    zt.append(f"""    <section class="section z-step r-{st['raum'][:2].lower()}" id="z-{st['k']}">
        {schrittleiste(st['k'])}
        <div class="section-title"><div class="num">{'<span class="z-nr">%d</span>' % Z_NR[st['k']] if st['k'] in Z_NR else '<span class="material-icons" data-z-icon="%s">hub</span>' % st['k']}</div><h2 data-z-title="{st['k']}">{st['k']}</h2><span class="pt-raum">{html.escape(st['raum'])}</span></div>
        <div class="card z-card">
            <div class="z-kern" data-z-kern="{st['k']}"></div>
            <h4 class="z-h">Begriffe in diesem Schritt</h4>
            <div class="z-begriffe" data-z-themen="{' '.join(st['themen'])}"></div>
            {'<h4 class="z-h">Lernziele und Prüfungsfragen</h4><div class="lz-list">' + lz + '</div>' if lz else ''}
            {'<h4 class="z-h">Praktische Prüfung</h4><div class="z-praxis">' + praxis + '</div>' if praxis else ''}
            <div class="z-vertiefen"><span>Ausführlich in den Kapiteln:</span>{vertiefen}</div>
        </div>
        {'<h4 class="z-h2">Die URE Story</h4><div class="sammel">' + ''.join(ure_html) + '</div>' if ure_html else ''}
        {'<div class="z-wege">' + wege('Schaubilder', 'account_tree', pg_html) + wege('<span class="w-badge"><i>W</i>wichtige Folien</span>', '', w_html) + wege('Formulierungsschablonen', 'text_fields', sch_html) + '</div>' if pg_html or w_html or sch_html else ''}
    </section>
""")
    if st['k'] == 'verstehen':
        zt.append('    <div class="z-kette"><span class="material-icons">link</span>Die Kette verbindet Verstehen und Festlegen: Nutzungskontext → Erfordernis → Nutzungsanforderung → Lösung. <a href="index.html#karte">Als Tabelle in der Prozesskarte (Ansicht „Tabelle“)</a></div>\n')
extra_html['@zusammenhang'] = ''.join(zt)
Z_NAME = {'hcd': 'Basis: Menschzentrierte Gestaltung', 'planung': 'Planung', 'verstehen': 'Verstehen und Festlegen des Nutzungskontextes',
          'festlegen': 'Festlegen der Nutzungsanforderungen', 'gestalten': 'Gestalten', 'evaluieren': 'Evaluieren'}
EXTRA_SUB['@zusammenhang'] = [('z-' + st['k'], ('%d ' % Z_NR[st['k']] if st['k'] in Z_NR else '') + Z_NAME.get(st['k'], st['k']), 'chevron_right') for st in STEPS]

EXTRA_SUB['@curriculum'] = [(m.group(1), re.sub(r'^(\d) ', r'\1 ', m.group(2)), 'chevron_right') for m in
    re.finditer(r'<section class="section[^"]*" id="(cu-[\w-]+)">\s*<div class="section-title">.*?<h2>(.*?)</h2>', extra_html['@curriculum'], re.S)]


# ---------- Kontrolle: jeder Kapitelabschnitt in Tabelle und Prozessgrafik eingeordnet ----------
pt_block = js[js.index('const PT = ['):js.index('const KAP = [')] if 'const PT = [' in js else ''
d_links = set(re.findall(r"link: '[^']*#([\w-]+)'", js))
svg = sections.get('karte', '')
svg_keys = set(re.findall(r'data-k="([\w-]+)"', svg))
d_keys_by_sec = {}
for m in re.finditer(r"\n    ([\w]+): \{ icon: '[^']*', title: '[^']*', tags: \[[^\]]*\], link: '[^']*#([\w-]+)'", js):
    d_keys_by_sec.setdefault(m.group(2), set()).add(m.group(1))
d_text = {}
for m in re.finditer(r"\n    ([\w]+): \{ icon:", js):
    end = js.find('\n    ]},', m.end())
    d_text[m.group(1)] = js[m.start():end]
warn = []
for pg in PAGES:
    if not pg[0].startswith('kapitel-'):
        continue
    for sec in pg[4]:
        in_pt = ('#%s"' % sec) in pt_block
        in_svg = bool(d_keys_by_sec.get(sec, set()) & svg_keys) or any(('#%s' % sec) in d_text.get(k, '') for k in svg_keys)
        if not in_pt or not in_svg:
            warn.append('%-24s Tabelle:%s  Prozessgrafik:%s' % (sec, 'ja' if in_pt else 'FEHLT', 'ja' if in_svg else 'FEHLT'))
if warn:
    print('WARNUNG – Abschnitte nicht vollständig in den Übersichten eingeordnet:')
    for w in warn:
        print('   ' + w)

# ---------- Seiten schreiben ----------
def sub_items(p):
    items = []
    for s in p[4]:
        if s.startswith('@'):
            items += EXTRA_SUB[s]
        else:
            label, icon = nav_old.get(s, (s, 'chevron_right'))
            items.append((s, label, icon))
    return items


def nav_html(cur):
    out, group = [], None
    for p in PAGES:
        if p[3] != group:
            if group == 'Kapitel':
                out += ['        <span class="nav-link soon" title="Folien folgen"><span class="material-icons">schedule</span>%s</span>' % html.escape(t) for t in SOON]
            group = p[3]
            out.append('        <div class="nav-group">%s</div>' % group)
        on = p[0] == cur[0]
        out.append('        <a href="%s" class="nav-link%s"><span class="material-icons">%s</span>%s</a>'
                   % (p[0], ' active' if on else '', p[2], html.escape(p[1])))
        if on and len(sub_items(p)) > 1:
            out.append('        <div class="nav-sub">' + ''.join(
                '<a href="#%s">%s</a>' % (s, lbl) for s, lbl, _ in sub_items(p)) + '</div>')
    return '\n'.join(out)


for n, p in enumerate(PAGES):
    exam = p[0].startswith('pruefung')
    header = main_header if p[5] is None else (
        '<div class="header sub">\n        <p class="eyebrow">%s</p>\n        <h1>%s</h1>\n    </div>' % (html.escape(p[5]), html.escape(p[6])))
    body = ''.join(extra_html[s] if s.startswith('@') else sections[s] for s in p[4])
    if p[0] == 'index.html':
        # Der rote Faden steht auf der Prozesskarte ganz oben, vor der Karte
        m = re.search(r'\n        <div class="card">\n            <h3><span class="material-icons">route</span>Der rote Faden.*?\n        </div>\n', body, re.S)
        if m:
            body = m.group(0).replace('<div class="card">', '<div class="card faden">', 1) + body[:m.start()] + body[m.end():]
    prev_p, next_p = (PAGES[n - 1] if n else None), (PAGES[n + 1] if n + 1 < len(PAGES) else None)
    pager = '    <nav class="pager">%s%s</nav>\n' % (
        '<a class="prev" href="%s"><span class="material-icons">chevron_left</span><span><small>Zurück</small>%s</span></a>' % (prev_p[0], html.escape(prev_p[1])) if prev_p else '<span></span>',
        '<a class="next" href="%s"><span><small>Weiter</small>%s</span><span class="material-icons">chevron_right</span></a>' % (next_p[0], html.escape(next_p[1])) if next_p else '<span></span>')
    doc = f"""<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{html.escape(p[1])} | CPUX-UR Prozess-Landkarte</title>
{head_links}
<link rel="stylesheet" href="landkarte.css">\n<link rel="stylesheet" href="lernen.css">{'''
<link rel="stylesheet" href="pruefung.css">''' if exam else ''}
</head>
<body>

<button class="sb-toggle" id="sbToggle" aria-label="Navigation ein- oder ausblenden" title="Navigation ein-/ausblenden"><span class="material-icons" id="sbIcon">menu_open</span></button>

<aside class="sidebar">
    {sb_header}
    <nav class="sidebar-nav" id="nav">
{nav_html(p)}
    </nav>
    {sb_footer.strip()}
</aside>

<div class="container">

    {header}

{relink(body)}
{pager}
    {footer}
</div>

{drawer.strip()}

{btt}

<script src="lern-daten.js"></script>\n<script src="landkarte.js"></script>\n<script src="folien-daten.js"></script>\n<script src="folien.js"></script>\n<script src="hervorhebung-daten.js"></script>\n<script src="hervorhebung.js"></script>\n<script src="detail.js"></script>\n<script src="prozessgrafik.js"></script>{'''
<script src="pruefung-daten.js"></script>
<script src="pruefung.js"></script>''' if exam else ''}{'''
<script src="curriculum.js"></script>''' if p[0] == 'curriculum.html' else ''}{'''
<script src="zusammenhang.js"></script>''' if p[0] == 'zusammenhang.html' else ''}
<script src="lernen.js"></script>
<script src="ausrichten.js"></script>{'''
<script src="selbsttest.js"></script>''' if p[0] == 'selbsttest.html' else ''}
</body>
</html>
"""
    open(os.path.join(out_dir, p[0]), 'w', encoding='utf-8').write(doc)
    print('%-22s %3d KB' % (p[0], len(doc.encode()) // 1024))
