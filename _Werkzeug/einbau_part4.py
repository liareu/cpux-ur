"""Einbau der Folien S. 208–229 (Folien/Part4, Kapitel 3.3). Texte kommen aus der Transkription, nicht von Hand."""
import json, re, sys
p, ta, tb = sys.argv[1:4]
s = open(p, encoding='utf-8').read()
T = {r['page']: r for r in json.load(open(ta, encoding='utf-8')) + json.load(open(tb, encoding='utf-8'))}
js = lambda t: t.replace('\\', '\\\\').replace("'", "\\'")


def defsatz(page):
    """Erster Absatz (Definition) der Folie, wörtlich."""
    txt = T[page]['text']
    if txt.startswith(T[page]['title']):
        txt = txt[len(T[page]['title']):]
    return txt.strip().split('\n')[0].strip()


def punkte(page, n=None):
    xs = [l[2:].strip() for l in T[page]['text'].split('\n') if l.startswith('- ')]
    return xs[:n] if n else xs


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


# 1 Abschnitte hinter 3.3-Auftakt
neu = open('_Werkzeug/neu_kap3c.html', encoding='utf-8').read()
i = s.index('<section class="section" id="beschreiben">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + neu + s[j:]

# 2 Navigation
rep('''        <a href="#beschreiben" class="nav-link"><span class="material-icons">description</span>3.3 Beschreibungen</a>
''', '''        <a href="#beschreiben" class="nav-link"><span class="material-icons">description</span>3.3 Beschreibungen</a>
        <a href="#nk-beschreibung" class="nav-link"><span class="material-icons">description</span>Nutzungskontextbeschreibung</a>
        <a href="#narrativ" class="nav-link"><span class="material-icons">history_edu</span>Narrative Beschreibungen</a>
        <a href="#modellhaft" class="nav-link"><span class="material-icons">schema</span>Modellhafte Beschreibungen</a>
''')

# 3 Prozessgrafik: Chip „NK-Beschreibung“ rechts neben dem Aufgabenmodell, Prüfungs-Badge 12 P links daneben
rep('<g class="hot chip t" data-k="aufgabenmodell"><rect x="640" y="354" width="150" height="34" rx="4"/><text x="715" y="376" text-anchor="middle">Aufgabenmodell</text></g>',
    '<g class="hot chip t" data-k="aufgabenmodell"><rect x="640" y="354" width="150" height="34" rx="4"/><text x="715" y="376" text-anchor="middle">Aufgabenmodell</text></g>\n'
    '                <g class="hot chip t" data-k="nkbeschreibung"><rect x="798" y="354" width="120" height="34" rx="4"/><text x="858" y="376" text-anchor="middle" style="font-size:12px">NK-Beschreibung</text></g>')
rep('<g class="hot pts" data-k="pruefung"><rect x="796" y="359" width="60" height="24" rx="4"/><text x="826" y="376" text-anchor="middle">12 P</text></g>',
    '<g class="hot pts" data-k="pruefung"><rect x="574" y="359" width="60" height="24" rx="4"/><text x="604" y="376" text-anchor="middle">12 P</text></g>')

# 4 Detailtexte (Wortlaut aus der Transkription)
d = f"""    nkbeschreibung: {{ icon: 'description', title: '{js(T[209]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#nk-beschreibung', blocks: [
        ['Definition (S. 209)', 'menu_book', '{js(defsatz(209))}'],
        ['{js(T[210]['title'])} (S. 210)', 'list', '<a href="#nk-beschreibung">{js(T[210]['title'])}</a>'],
        ['{js(T[212]['title'])} (S. 212)', 'history_edu', ul(['<a href="#narrativ">narrative Beschreibungen</a>: Ist-Szenarien, Personas', '<a href="#modellhaft">modellhafte Beschreibungen</a>: Benutzergruppenprofile, Aufgabenmodelle, Aufgabenobjekte, Affinity-Diagramme, User Journeys, Zielkataloge, Umgebungsmodelle, Informationsmodelle'])],
        ['', '', src('S. 208–229')]
    ]}},
    istszenario: {{ icon: 'history_edu', title: '{js(T[214]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#narrativ', blocks: [
        ['Definition (S. 214)', 'menu_book', '{js(defsatz(214))}' + ul([{', '.join("'" + js(x) + "'" for x in punkte(214))}])],
        ['', '', src('S. 214, 215')]
    ]}},
    persona: {{ icon: 'person_outline', title: '{js(T[216]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#narrativ', blocks: [
        ['Definition (S. 216)', 'menu_book', '{js(defsatz(216))}' + ul([{', '.join("'" + js(x) + "'" for x in punkte(216, 3))}])],
        ['', '', src('S. 216–221')]
    ]}},
    affinity: {{ icon: 'dashboard', title: '{js(T[224]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#modellhaft', blocks: [
        ['Definition (S. 224)', 'menu_book', '{js(defsatz(224))}'],
        ['', '', src('S. 224, 225')]
    ]}},
    journey: {{ icon: 'route', title: '{js(T[227]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#modellhaft', blocks: [
        ['Definition (S. 227)', 'menu_book', '{js(defsatz(227))}'],
        ['{js(T[226]['title'])} (S. 226)', 'route', '{js(defsatz(226))}'],
        ['', '', src('S. 226–229')]
    ]}},
"""
rep("    verstehen: { icon: 'travel_explore',", d + "    verstehen: { icon: 'travel_explore',")

# 5 Glossar
g = ''
for page, term, en in [(209, 'Nutzungskontextbeschreibung', 'context of use discription'), (214, 'Ist-Szenario', 'as-is scenario'), (216, 'Persona', 'persona'),
                       (224, 'Affinity-Diagramm', 'affinity diagram'), (226, 'User Journey', 'user journey'), (227, 'User Journey Map', 'user journey map')]:
    g += "    ['%s', '%s', '%s', 'S. %d', 0],\n" % (js(term), js(en), js(defsatz(page)), page)
rep("    ['Modellbasierte Nutzungskontextanalyse',", g + "    ['Modellbasierte Nutzungskontextanalyse',")

# 6 Prozesstabelle, Kapitelzuordnung
rep("'beobachtung', 'fokusgruppe', 'mentales', 'nkinfo', 'erfordernis'],", "'beobachtung', 'fokusgruppe', 'mentales', 'nkbeschreibung', 'istszenario', 'persona', 'affinity', 'journey', 'nkinfo', 'erfordernis'],")
rep('<a href="#beschreiben">3.3 Beschreibungen</a><a href="#kette">Die Kette</a>',
    '<a href="#beschreiben">3.3 Beschreibungen</a><a href="#nk-beschreibung">Nutzungskontextbeschreibung</a><a href="#narrativ">Narrative Beschreibungen</a><a href="#modellhaft">Modellhafte Beschreibungen</a><a href="#kette">Die Kette</a>')
rep("'mentale-modelle': '3.2', beschreiben: '3.3' };", "'mentale-modelle': '3.2', beschreiben: '3.3', 'nk-beschreibung': '3.3', narrativ: '3.3', modellhaft: '3.3' };")

# 7 Evas Kette: Dokumentieren des Nutzungskontextes (Folien S. 209, 214)
rep('''                <tr><th>Nicht verwechseln</th>''', '''                <tr><th>Dokumentieren</th>
                    <td><b>Ist-Szenario</b> (S. 214): ''' + defsatz(214) + '''<br><b>Nutzungskontextbeschreibung</b> (S. 209): ''' + defsatz(209) + '''</td>
                    <td><span class="pt-none">–</span></td><td><span class="pt-none">–</span></td><td><span class="pt-none">–</span></td></tr>
                <tr><th>Nicht verwechseln</th>''')

# 8 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 207</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 229</p>')
rep('Folien S. 2–207 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis Beginn 3.3)</span>', 'Folien S. 2–229 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis 3.3)</span>')
rep('Kapitel 3 bis Folie S. 207 (3.1, 3.2 und Beginn 3.3).', 'Kapitel 3 bis Folie S. 229 (3.1, 3.2, 3.3).')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
