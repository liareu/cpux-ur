"""Einbau der Folien S. 231–242 (Folien/Part5): Rest 3.3, URE Story, Auftakt Kapitel 4. Texte aus der Transkription."""
import html, json, re, subprocess, sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
T4 = json.load(open('/tmp/cpux_exam/part4_A.json', encoding='utf-8')) + json.load(open('/tmp/cpux_exam/part4_B.json', encoding='utf-8'))
P5A = '/tmp/cpux_exam/part5_A.json'
A = json.load(open(P5A, encoding='utf-8'))
for r in A:
    if r['page'] in (231, 235):              # Kleindruck/Kartenbeschriftung unsicher: nur als Bild
        r['text_unsicher'] = r.get('text', ''); r['text'] = ''; r['nur_bild'] = True
json.dump(A, open(P5A, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
T = {r['page']: r for r in T4 + A + json.load(open('/tmp/cpux_exam/part5_B.json', encoding='utf-8'))}
js = lambda t: t.replace('\\', '\\\\').replace("'", "\\'")
attr = lambda d: html.escape(json.dumps(d, ensure_ascii=False), quote=True)


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


def zeilen(page):
    """Textzeilen, Index 0 = Titel (auch wenn die Transkription ihn nicht wiederholt)."""
    z = [l.strip() for l in T[page]['text'].split('\n') if l.strip()]
    return z if z and z[0] == T[page]['title'].strip() else [T[page]['title'].strip()] + z


# 1 Abschnitte erzeugen (Generator) und einsetzen
abschnitte = [
    {"id": "modellhaft", "titel": "Detaillierte, Modellhafte Nutzungskontextbeschreibung", "icon": "schema", "seiten": [222, 223, 224, 225, 226, 227, 228, 229, 231, 232, 233, 234, 235, 236, 237]},
    {"id": "ergebnisse-33", "titel": T[238]['title'], "icon": "fact_check", "seiten": [238, 239, 240, 241]},
    {"id": "erfordernisse-4", "titel": T[242]['title'], "icon": "priority_high", "seiten": [242]}]
json.dump(abschnitte, open('/tmp/cpux_tools/abs_part5.json', 'w', encoding='utf-8'), ensure_ascii=False)
subprocess.run([sys.executable, '-I', '_Werkzeug/folien_zu_html.py', '_Werkzeug/neu_kap3d.html', '/tmp/cpux_tools/abs_part5.json',
                '/tmp/cpux_exam/part4_A.json', '/tmp/cpux_exam/part4_B.json', P5A, '/tmp/cpux_exam/part5_B.json'], check=True)
neu = open('_Werkzeug/neu_kap3d.html', encoding='utf-8').read()
i = s.index('<section class="section" id="modellhaft">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:i] + neu.lstrip() + s[j:]

# 2 Schaubild S. 238 (Aktivität → Ergebnis)
stufen, cur = [], None
for l in [x for x in T[238]['text'].split('\n') if '|' in x][1:]:
    a, b = [x.strip() for x in l.split('|', 1)]
    if a:
        cur = {"titel": a, "art": "t", "gruppen": [{"titel": "", "elemente": []}]}
        stufen.append(cur)
    cur['gruppen'][0]['elemente'].append({"label": b, "text": "Aktivität: " + cur['titel'] + " · Ergebnis, Kenntnisgewinn: " + b, "folie": "S. 238"})
pg238 = {"titel": T[238]['title'], "folie": "S. 238", "viele": True, "stufen": stufen}
i = s.index('<section class="section" id="ergebnisse-33">'); j = s.index('</div>', s.index('<h2>', i)) + 6
s = s[:i] + s[i:j] + '\n        <div class="pg" data-pg="%s"></div>' % attr(pg238) + s[j:]

# 3 Schaubild Nutzungskontextbeschreibungen: neue Detailtexte verknüpfen
i = s.index('data-pg="', s.index('<section class="section" id="nk-beschreibung">')) + len('data-pg="'); j = s.index('"', i)
nk = json.loads(html.unescape(s[i:j]))
for st in nk['stufen']:
    for g in st['gruppen']:
        for el in g['elemente']:
            if el['label'] == 'Zielkataloge':
                el['k'] = 'zielkatalog'
            if el['label'] in ('Umgebungsmodelle', 'Informationsmodelle'):
                el['k'] = 'umgebungsmodell'
s = s[:i] + attr(nk) + s[j:]

# 4 Detailtexte
z232, z234 = zeilen(232), zeilen(234)
d = f"""    zielkatalog: {{ icon: 'checklist', title: '{js(T[232]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#modellhaft', blocks: [
        ['Definition (S. 232)', 'menu_book', '{js(z232[1])}' + ul([{', '.join("'" + js(x[2:]) + "'" for x in z232 if x.startswith('- '))}])],
        ['', '', src('S. 232, 233')]
    ]}},
    umgebungsmodell: {{ icon: 'map', title: '{js(T[234]['title'])}', tags: ['Verstehen', 'Kapitel 3.3'], link: '#modellhaft', blocks: [
        ['Umgebungs- und Informationsmodel (S. 234)', 'menu_book', '{js(z234[1])}<br>{js(z234[2])}'],
        ['', '', src('S. 234–237')]
    ]}},
"""
rep("    verstehen: { icon: 'travel_explore',", d + "    verstehen: { icon: 'travel_explore',")
# Nutzungskontextbeschreibung → Planung/Ergebnisse; Erfordernis → Kapitel 4
i = s.index("    nkbeschreibung: { icon:"); j = s.index("['', '', src(", i)
s = s[:j] + "['%s (S. 238)', 'fact_check', '<a href=\"#ergebnisse-33\">%s</a>'],\n        " % (js(T[238]['title']), js(T[238]['title'])) + s[j:]
i = s.index("    erfordernis: { icon:"); j = s.index("['', '', ", i)
z242 = zeilen(242)
s = s[:j] + "['%s (S. 242)', 'priority_high', '<a href=\"#erfordernisse-4\">%s</a><p>%s</p>'],\n        " % (js(T[242]['title']), js(z242[1]), js(z242[2])) + s[j:]

# 5 Glossar
g = "    ['Zielkatalog', 'goal catalogue', '%s', 'S. 232', 0],\n" % js(z232[1])
g += "    ['Umgebungsmodell', 'environment model', '%s', 'S. 234', 0],\n" % js(z234[1])
g += "    ['Informationsmodell', 'information model', '%s', 'S. 234', 0],\n" % js(z234[2])
rep("    ['Modellbasierte Nutzungskontextanalyse',", g + "    ['Modellbasierte Nutzungskontextanalyse',")

# 6 Navigation, Tabelle, Kapitel
rep('''        <a href="#modellhaft" class="nav-link"><span class="material-icons">schema</span>Modellhafte Beschreibungen</a>
''', '''        <a href="#modellhaft" class="nav-link"><span class="material-icons">schema</span>Modellhafte Beschreibungen</a>
        <a href="#ergebnisse-33" class="nav-link"><span class="material-icons">fact_check</span>Planung und Ergebnisse der NK-Erhebung</a>
        <div class="nav-group">Kapitel 4</div>
        <a href="#erfordernisse-4" class="nav-link"><span class="material-icons">priority_high</span>4. Erfordernisse identifizieren</a>
''')
rep("'persona', 'affinity', 'journey', 'nkinfo', 'erfordernis'],", "'persona', 'affinity', 'journey', 'zielkatalog', 'umgebungsmodell', 'nkinfo', 'erfordernis'],")
rep('<a href="#modellhaft">Modellhafte Beschreibungen</a><a href="#kette">Die Kette</a>',
    '<a href="#modellhaft">Modellhafte Beschreibungen</a><a href="#ergebnisse-33">Planung und Ergebnisse der NK-Erhebung</a><a href="#erfordernisse-4">4. Erfordernisse identifizieren</a><a href="#kette">Die Kette</a>')
rep("narrativ: '3.3', modellhaft: '3.3' };", "narrativ: '3.3', modellhaft: '3.3', 'ergebnisse-33': '3.3', 'erfordernisse-4': '4.1' };")
rep("['4', 'Erfordernisse identifizieren'],", "['4', 'Erfordernisse identifizieren', 'kapitel-4.html'],")

# 7 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 229</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 242</p>')
rep('Folien S. 2–229 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis 3.3)</span>', 'Folien S. 2–242 (Zum Seminar, Kapitel 1–3, Beginn Kapitel 4)</span>')
rep('Kapitel 3 bis Folie S. 229 (3.1, 3.2, 3.3).', 'Kapitel 3 vollständig, Kapitel 4 ab Folie S. 242.')
open(p, 'w', encoding='utf-8').write(s)
print('ok, Schaubild S. 238 mit', len(stufen), 'Aktivitäten')
