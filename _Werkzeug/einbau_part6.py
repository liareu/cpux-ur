"""Einbau der Folien S. 243–252 (Folien/Part6, Kapitel 4.1). Texte aus der Transkription."""
import html, json, re, subprocess, sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
PA, PB = '/tmp/cpux_exam/part6_A.json', '/tmp/cpux_exam/part6_B.json'
A, B = json.load(open(PA, encoding='utf-8')), json.load(open(PB, encoding='utf-8'))
T = {r['page']: r for r in A + B}
js = lambda t: t.replace('\\', '\\\\').replace("'", "\\'")
attr = lambda d: html.escape(json.dumps(d, ensure_ascii=False), quote=True)


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


# 1 Transkription bereinigen: nur Folientext (keine Beschreibungen des Agenten)
boxes244 = [l[2:].strip() for l in T[244]['text'].split('Pfeile:')[0].split('\n') if l.startswith('- ')]
T[244]['text'] = ' → '.join(boxes244) + '\nIterationen\nQuelle: ISO 9241-210:2019'
t247 = T[247]['text'].split('Pfeile:')[0].replace('Diagramm (Boxen):\n', '')
lab247 = [l[2:].strip() if l.startswith('- ') else l.strip() for l in t247.split('\n') if l.strip()]
voraus = lab247[0] + ' ' + lab247[1]                       # „Voraussetzung (notwendig für Benutzende)“
arten, ziel = lab247[2:5], lab247[5]
T[247]['text'] = voraus + '\n' + '\n'.join('- ' + x for x in arten) + '\n' + ziel
T[247]['notiz_wortlaut'] = 'WISSEN · HABEN · KÖNNEN'
T[250]['notiz_wortlaut'] = 'KÖNNEN'
T[252]['notiz_wortlaut'] = '1 Erfordernis → 1 identifizierte Voraussetzung · !!'
z252 = [l for l in T[252]['text'].split('\n') if l.strip()]
label_v = re.sub(r'^\([^)]*\)\s*', '', [l for l in z252 if 'identifizierte Voraussetzung' in l][0])
label_z = re.sub(r'^\([^)]*\)\s*', '', [l for l in z252 if 'beabsichtigtes Ergebnis' in l][0])
tz = [l for l in z252 if not l.startswith('(')]
T[252]['text'] = '\n'.join(tz)
json.dump([T[r['page']] for r in A], open(PA, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump([T[r['page']] for r in B], open(PB, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)

# 2 Abschnitte erzeugen
abschnitte = [
    {"id": "erfordernis-def", "titel": T[245]['title'], "icon": "priority_high", "seiten": [243, 244, 245, 246]},
    {"id": "arten-erfordernisse", "titel": T[247]['title'], "icon": "category", "seiten": [247, 248, 249, 250]},
    {"id": "qualitaet-erfordernisse", "titel": T[251]['title'], "icon": "workspace_premium", "seiten": [251]},
    {"id": "syntax-erfordernisse", "titel": T[252]['title'], "icon": "text_fields", "seiten": [252]}]
json.dump(abschnitte, open('/tmp/cpux_tools/abs_part6.json', 'w', encoding='utf-8'), ensure_ascii=False)
subprocess.run([sys.executable, '-I', '_Werkzeug/folien_zu_html.py', '_Werkzeug/neu_kap4a.html', '/tmp/cpux_tools/abs_part6.json', PA, PB], check=True)
neu = open('_Werkzeug/neu_kap4a.html', encoding='utf-8').read()

# Schablone S. 252 als Satzschablone mit den beiden Klammer-Beschriftungen der Folie
slot = lambda t: re.sub(r'(<[^>]+>)', lambda m: '<span class="slot">%s</span>' % html.escape(m.group(1)), t)
vor_zeilen = [l for l in tz[1:] if not l.startswith('um ')]
tpl = ('<div class="template">%s<br><span class="tpl-gruppe"><span class="tpl-zeilen">%s</span><span class="tpl-label">%s</span></span>'
       '<br><span class="tpl-gruppe"><span class="tpl-zeilen">%s</span><span class="tpl-label">%s</span></span></div>') % (
    slot(tz[0]), '<br>'.join(slot(x) for x in vor_zeilen), html.escape(label_v), slot([l for l in tz if l.startswith('um ')][0]), html.escape(label_z))
i = neu.index('<div class="schablone"'); j = neu.index('">', i) + 2; k = neu.index('</div>', j)
neu = neu[:j] + tpl + neu[k:]

i = s.index('<section class="section" id="erfordernisse-4">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + neu + s[j:]

# 3 Schaubild „Arten von Erfordernissen“ (S. 247) mit Verknüpfung zu S. 248–250
pg = {"titel": T[247]['title'], "folie": "S. 247–250", "stufen": [
    {"titel": voraus, "art": "t", "gruppen": [{"titel": "", "elemente": [
        {"label": arten[0], "k": "infoerf"}, {"label": arten[1], "k": "ressourcenerf"}, {"label": arten[2], "k": "kompetenzerf"}]}]},
    {"titel": ziel.split(' == ')[0] + ' == ' + ziel.split(' == ')[1], "art": "l", "gruppen": [{"titel": "", "elemente": [
        {"label": x.strip(), "text": ziel, "folie": "S. 247"} for x in ziel.split(' == ')[2].split(' / ')]}]}]}
i = s.index('<section class="section" id="arten-erfordernisse">'); j = s.index('</div>', s.index('<h2>', i)) + 6
s = s[:i] + s[i:j] + '\n        <div class="pg" data-pg="%s"></div>' % attr(pg) + s[j:]


# 4 Detailtexte
def defsatz(pg_):
    return [l for l in T[pg_]['text'].split('\n') if l.strip()][0].strip()


def punkte(pg_):
    return [l[2:].strip() for l in T[pg_]['text'].split('\n') if l.startswith('- ')]


d = ''
for key, pg_, icon in (('infoerf', 248, 'info'), ('ressourcenerf', 249, 'inventory'), ('kompetenzerf', 250, 'school')):
    d += f"""    {key}: {{ icon: '{icon}', title: '{js(T[pg_]['title'])}', tags: ['Verstehen', 'Kapitel 4.1'], link: '#arten-erfordernisse', blocks: [
        ['Definition (S. {pg_})', 'menu_book', '{js(defsatz(pg_))}' + ul([{', '.join("'" + js(x) + "'" for x in punkte(pg_))}])],
        ['', '', src('S. {pg_}')]
    ]}},
"""
rep("    verstehen: { icon: 'travel_explore',", d + "    verstehen: { icon: 'travel_explore',")
i = s.index("    erfordernis: { icon:"); j = s.index("['', '', ", i)
s = s[:j] + ("['%s (S. 247)', 'category', '<a href=\"#arten-erfordernisse\">%s</a>: %s'],\n        "
             "['%s (S. 251)', 'workspace_premium', ul([%s]) + '<a href=\"#qualitaet-erfordernisse\">%s</a>'],\n        "
             "['%s (S. 252)', 'text_fields', '<a href=\"#syntax-erfordernisse\">%s</a>'],\n        "
             "['%s (S. 245)', 'menu_book', '<a href=\"#erfordernis-def\">%s</a>'],\n        ") % (
    js(T[247]['title']), js(T[247]['title']), js(' · '.join(arten)),
    js(T[251]['title']), ', '.join("'" + js(x) + "'" for x in punkte(251)), js(T[251]['title']),
    js(T[252]['title']), js(T[252]['title']), js(T[245]['title']), js(T[245]['title'])) + s[j:]

# 5 Glossar
g = ''
for term, en, pg_ in (('Informatorisches Erfordernis', 'informational need', 248), ('Ressourcenerfordernis', 'resource need', 249), ('Kompetenzerfordernis', 'competence need', 250)):
    g += "    ['%s', '%s', '%s', 'S. %d', 0],\n" % (term, en, js(defsatz(pg_)), pg_)
rep("    ['Modellbasierte Nutzungskontextanalyse',", g + "    ['Modellbasierte Nutzungskontextanalyse',")

# 6 Navigation, Tabelle, Kapitelzuordnung
rep('''        <a href="#erfordernisse-4" class="nav-link"><span class="material-icons">priority_high</span>4. Erfordernisse identifizieren</a>
''', '''        <a href="#erfordernisse-4" class="nav-link"><span class="material-icons">priority_high</span>4. Erfordernisse identifizieren</a>
        <a href="#erfordernis-def" class="nav-link"><span class="material-icons">priority_high</span>Erfordernis</a>
        <a href="#arten-erfordernisse" class="nav-link"><span class="material-icons">category</span>Arten von Erfordernissen</a>
        <a href="#qualitaet-erfordernisse" class="nav-link"><span class="material-icons">workspace_premium</span>Qualitätskriterien</a>
        <a href="#syntax-erfordernisse" class="nav-link"><span class="material-icons">text_fields</span>Formulierungsschablone</a>
''')
rep("'zielkatalog', 'umgebungsmodell', 'nkinfo', 'erfordernis'],", "'zielkatalog', 'umgebungsmodell', 'nkinfo', 'erfordernis', 'infoerf', 'ressourcenerf', 'kompetenzerf'],")
rep('<a href="#erfordernisse-4">4. Erfordernisse identifizieren</a><a href="#kette">Die Kette</a>',
    '<a href="#erfordernisse-4">4. Erfordernisse identifizieren</a><a href="#arten-erfordernisse">Arten von Erfordernissen</a><a href="#qualitaet-erfordernisse">Qualitätskriterien für Erfordernisse</a><a href="#syntax-erfordernisse">Formulierungsschablone für Erfordernisse</a><a href="#kette">Die Kette</a>')
rep("'ergebnisse-33': '3.3', 'erfordernisse-4': '4.1' };", "'ergebnisse-33': '3.3', 'erfordernisse-4': '4.1', 'erfordernis-def': '4.1', 'arten-erfordernisse': '4.1', 'qualitaet-erfordernisse': '4.1', 'syntax-erfordernisse': '4.1' };")

# 7 Evas Kette, Belege-Zeile: Schablone und Qualitätskriterien der Folien
rep('„… bei Erfordernissen immer die Benutzergruppe angegeben werden muss, für die die Erfordernisse gelten.“<span class="pt-src">Frage 28, Anmerkung zu A</span></td>',
    '„… bei Erfordernissen immer die Benutzergruppe angegeben werden muss, für die die Erfordernisse gelten.“<span class="pt-src">Frage 28, Anmerkung zu A</span>'
    '<b>Formulierungsschablone (Syntax) für Erfordernisse:</b> ' + html.escape(' '.join(tz)) + '<span class="pt-src">S. 252</span>'
    '<b>Qualitätskriterien:</b> ' + html.escape(punkte(251)[3]) + '<span class="pt-src">S. 251 (W)</span></td>')

# 8 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 242</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 252</p>')
rep('Folien S. 2–242 (Zum Seminar, Kapitel 1–3, Beginn Kapitel 4)</span>', 'Folien S. 2–252 (Zum Seminar, Kapitel 1–3, Kapitel 4 bis S. 252)</span>')
rep('Kapitel 3 vollständig, Kapitel 4 ab Folie S. 242.', 'Kapitel 3 vollständig, Kapitel 4 bis Folie S. 252.')
rep('</style>', '''.tpl-gruppe { display: inline-flex; align-items: center; gap: 14px; margin: 4px 0; }
.tpl-zeilen { border-right: 2px solid #a3122e; padding-right: 10px; }
.tpl-label { font-size: 12.5px; font-weight: 700; color: #a3122e; }
</style>''')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
