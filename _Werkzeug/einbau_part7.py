"""Einbau der Folien S. 253–258 (Folien/Part7, Kapitel 4) und der Prüfungsübersicht (S. 256) mit Sprungzielen.

Aufruf: python3 -I _Werkzeug/einbau_part7.py Landkarte/CPUX-UR_Prozess-Landkarte.html /tmp/cpux_exam/part7.json
"""
import html, json, subprocess, sys

p, PT7 = sys.argv[1], sys.argv[2]
s = open(p, encoding='utf-8').read()
T = {r['page']: r for r in json.load(open(PT7, encoding='utf-8'))}
e = lambda t: html.escape(t, quote=False)
js = lambda t: t.replace('\\', '\\\\').replace("'", "\\'")


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


def zeilen(pg):
    return [z for z in T[pg]['text'].split('\n') if z.strip()]


def punkte(pg):
    return [z[2:].strip() for z in zeilen(pg) if z.startswith('- ')]


def note(pg):
    return '<div class="note"><div class="note-label"><span class="material-icons">edit_note</span>Julias Notiz (S. %d)</div>%s</div>' % (pg, '<br>'.join(e(x) for x in T[pg]['notiz_wortlaut'].split(' · ')))


def src(pg):
    return '<span class="src"><span class="material-icons">description</span>Folie S. %d</span>' % pg


# 1 Kapitelabschnitte: S. 253/254 und 258 wörtlich über folien_zu_html.py
abschnitte = [
    {"id": "erfordernisse-identifizieren", "titel": T[253]['title'], "icon": "manage_search", "seiten": [253, 254]},
    {"id": "nki-typen-beispiele", "titel": T[255]['title'], "icon": "lightbulb", "seiten": []},
    {"id": "ueberblick-praxis", "titel": T[256]['title'], "icon": "assignment", "seiten": [257]},
    {"id": "ure-erfordernisse", "titel": T[258]['title'], "icon": "auto_stories", "seiten": [258]}]
json.dump(abschnitte, open('/tmp/cpux_tools/abs_part7.json', 'w', encoding='utf-8'), ensure_ascii=False)
subprocess.run([sys.executable, '-I', '_Werkzeug/folien_zu_html.py', '_Werkzeug/neu_kap4b.html', '/tmp/cpux_tools/abs_part7.json', PT7], check=True)
neu = open('_Werkzeug/neu_kap4b.html', encoding='utf-8').read()

# S. 255: Tabelle mit Art des Erfordernisses als Zeilenkopf in der rechten Spalte
z = zeilen(255)
kopf, reihen = z[0].split(' | '), [r.split(' | ') for r in z[1:]]
arten = ('Informatorisches Erfordernis', 'Ressourcenerfordernis', 'Kompetenzerfordernis')
tab = '<table class="criteria nki-tab"><tr><th>%s</th><th>%s</th></tr>' % (e(kopf[0]), e(kopf[1]))
for links, rechts in reihen:
    art = next(a for a in arten if rechts.startswith(a + ' '))
    tab += '<tr><td>%s</td><td><b>%s</b><br>%s</td></tr>' % (e(links), e(art), e(rechts[len(art) + 1:]))
tab += '</table>'
karte255 = ('        <div class="card">\n            <h3><span class="material-icons">lightbulb</span>%s</h3>\n            %s\n            %s\n        </div>\n'
            % (e(T[255]['title']), tab, src(255)))
neu = neu.replace('<h2>%s</h2></div>\n' % e(T[255]['title']), '<h2>%s</h2></div>\n%s' % (e(T[255]['title']), karte255), 1)

# S. 256: Folie im Wortlaut auf der Kapitelseite, mit Sprung zur interaktiven Übersicht
z = zeilen(256)
aufg = [r.split(' | ') for r in z if ' | ' in r][1:]
tab256 = ('<table class="criteria pu-folie"><tr><th></th><th></th><th>Punkte pro</th><th>max.</th></tr>'
          + ''.join('<tr><td>%d.</td><td>%s</td><td>%s</td><td>%s</td></tr>' % (i + 1, e(a), e(b), e(c)) for i, (a, b, c) in enumerate(aufg))
          + '<tr><td></td><td></td><td></td><td><b>%s</b></td></tr></table>' % e(z[-1]))
karte256 = ('        <div class="card">\n            <h3><span class="material-icons">assignment</span>%s</h3>\n            <ul>%s</ul>\n            %s\n            %s\n'
            '            <p><a class="sm-link" href="#pruefung">Zur Prüfungsübersicht mit Sprüngen zu jeder Aufgabe, zum Lernstoff und zu den Schablonen →</a></p>\n            %s\n        </div>\n'
            % (e(T[256]['title']), ''.join('<li>%s</li>' % e(x) for x in punkte(256)), tab256, note(256), src(256)))
neu = neu.replace('<h2>%s</h2></div>\n' % e(T[256]['title']), '<h2>%s</h2></div>\n%s' % (e(T[256]['title']), karte256), 1)

i = s.index('<section class="section" id="syntax-erfordernisse">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + neu + s[j:]

# 2 Sprungziele auf einzelne Karten (für die Prüfungsübersicht)
rep('            <div class="card">\n                <h3><span class="material-icons">groups</span>Benutzergruppen, Benutzergruppenprofil',
    '            <div class="card" id="benutzergruppen">\n                <h3><span class="material-icons">groups</span>Benutzergruppen, Benutzergruppenprofil')
rep('        <div class="card">\n            <h3><span class="material-icons">workspace_premium</span>Gütekriterien eines kontextuellen Interviews</h3>',
    '        <div class="card" id="guetekriterien-interview">\n            <h3><span class="material-icons">workspace_premium</span>Gütekriterien eines kontextuellen Interviews</h3>')
rep('        <div class="card">\n            <h3><span class="material-icons">menu_book</span>Ist-Szenario (as-is scenario)</h3>',
    '        <div class="card" id="ist-szenario">\n            <h3><span class="material-icons">menu_book</span>Ist-Szenario (as-is scenario)</h3>')

# 3 Prüfungsübersicht (Seite Praktische Prüfung): Folie S. 256 wörtlich, je Aufgabe Sprünge
#   Üben = Aufgabe der Beispielprüfung, Lernen = Kapitelstelle, Schablone = Formulierungsschablone
L = lambda href, t: '<a href="%s">%s</a>' % (href, t)
SPRUNG = [
    ('Verstehen NK', [L('#praxis-szenario', '3.5 Ist-Szenario')],
     [L('#ist-szenario', 'Ist-Szenario (S. 214)'), L('#narrativ', 'Narrative Nutzungskontextbeschreibungen'), L('#ueberblick-praxis', 'Praktische Übung 5 (S. 257)')], []),
    ('Verstehen NK', [L('#praxis-interviewer', '3.9 Verhaltensfehler des Interviewers')],
     [L('#guetekriterien-interview', 'Gütekriterien eines kontextuellen Interviews (S. 174)'), L('#durchfuehren', '3.2 Erhebung durchführen')], []),
    ('Verstehen NK', [L('#praxis-gruppen', '3.6 Weitere Benutzergruppen')],
     [L('#benutzergruppen', 'Benutzergruppen, Benutzergruppenprofil'), L('#kontext', 'Die 5 Komponenten des Nutzungskontextes')], []),
    ('Festlegen NA', [L('#praxis-erfordernisse', '3.7 Erfordernisse')],
     [L('#erfordernis-def', 'Erfordernis (user need)'), L('#arten-erfordernisse', 'Arten von Erfordernissen'), L('#qualitaet-erfordernisse', 'Qualitätskriterien (W)'),
      L('#erfordernisse-identifizieren', 'Erfordernisse identifizieren (S. 253, Tipps S. 254)'), L('#nki-typen-beispiele', 'NKI → Typen – Beispiele (S. 255)')],
     [L('schablonen.html#sch-252', 'Formulierungsschablone (Syntax) für Erfordernisse (S. 252)')]),
    ('Festlegen NA', [L('#praxis-erfordernisse', '3.7 Nutzungsanforderungen')],
     [L('#nutzungsanforderungen', 'Nutzungsanforderung (user requirement)')],
     [L('schablonen.html#sch-103', 'Qualitative Nutzungsanforderung (S. 103)'), L('schablonen.html#sch-110', 'Quantitative Nutzungsanforderung (S. 110)')]),
    ('Verstehen NK', [L('#praxis-aufgabenmodell', '3.8 Vor-/Nachbedingung, Teilaufgaben')],
     [L('#aufgabenmodell', 'Aufgaben &amp; Ziele, Aufgabenmodell'), L('#modellhaft', 'Modellhafte Nutzungskontextbeschreibung')], []),
    ('Festlegen NA', [L('#praxis-aufgabenmodell', '3.8 Zuordnung zu Teilaufgaben')],
     [L('#aufgabenmodell', 'Aufgabenmodell'), L('#nutzungsanforderungen', 'Nutzungsanforderung')], []),
]
reihen = ''
for n, ((a, b, c), (phase, ueben, lernen, schab)) in enumerate(zip(aufg, SPRUNG), 1):
    wege = ('<div class="pu-wege"><span class="pu-w"><b>Üben</b><span class="pu-ls">%s</span></span><span class="pu-w"><b>Lernen</b><span class="pu-ls">%s</span></span>%s</div>'
            % (''.join(ueben), ''.join(lernen), '<span class="pu-w pu-sch"><b>Schablone</b><span class="pu-ls">%s</span></span>' % ''.join(schab) if schab else ''))
    extra = note(256) if n == 2 else ''
    reihen += ('<div class="pu-row" id="pu-%d"><div class="pu-nr">%d.</div><div class="pu-task"><div class="pu-text">%s</div>'
               '<div class="pu-phase">%s</div>%s%s</div><div class="pu-pro">%s</div><div class="pu-max">%s<div class="exam-bar" style="width:%d%%"></div></div></div>\n'
               % (n, n, e(a), phase, wege, extra, e(b), e(c), round(int(c) * 2.5)))
neu_pruefung = '''    <section class="section" id="pruefung">
        <div class="section-title"><div class="num"><span class="material-icons">assignment</span></div><h2>%s</h2></div>
        <div class="card pu-card">
            <ul>%s</ul>
            <div class="pu-tab">
<div class="pu-row pu-head"><div></div><div>Aufgabe · Sprung zu Übung, Lernstoff und Schablone</div><div class="pu-pro">Punkte pro</div><div class="pu-max">max.</div></div>
%s<div class="pu-row pu-sum"><div></div><div class="pu-max pu-total">%s</div></div>
            </div>
            <p class="card-lead">„Verstehen NK“ und „Festlegen NA“ sind meine Zuordnung zur Prozesskarte; Aufgaben und Punkte im Wortlaut der Folie.</p>
            %s <a class="sm-link" href="#ueberblick-praxis">im Kapitel ansehen →</a>
            <div class="grid-3" style="margin-top:20px">
                <div class="box"><div class="box-title"><span class="material-icons">schedule</span>Praktische Prüfung</div>5:45 mit 3 Aufgabenbereichen. Handschriftlich auf Papier.</div>
                <div class="box lila"><div class="box-title"><span class="material-icons">quiz</span>Theoretische Prüfung</div>40 Multiple-Choice Fragen in 90 Minuten zu beantworten. Online.</div>
                <div class="box gelb"><div class="box-title"><span class="material-icons">priority_high</span>Punkte</div>Erfordernisse 40 + Nutzungsanforderungen 26 = 66 von 100</div>
            </div>
            <span class="src"><span class="material-icons">description</span>CPUX-UR_Pruefungsabstimmung.md</span>
        </div>
    </section>
''' % (e(T[256]['title']), ''.join('<li>%s</li>' % e(x) for x in punkte(256)), reihen, e(z[-1]), src(256))
i = s.index('    <section class="section" id="pruefung">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:i] + neu_pruefung + s[j:]

# alte Skript-Tabelle EXAM entfällt (Übersicht ist jetzt statisch)
i = s.index('/* ---------- Prüfung ---------- */')
j = s.index("'<div class=\"exam-row\"><div></div><div style=\"font-weight:700\">Gesamt</div><div class=\"exam-pts\">100</div></div>';\n", i)
s = s[:i] + s[j + len("'<div class=\"exam-row\"><div></div><div style=\"font-weight:700\">Gesamt</div><div class=\"exam-pts\">100</div></div>';\n"):]

# 4 Detail D.pruefung (Chips „Punkte“ in der Prozesskarte): Folienwortlaut S. 256
i = s.index("    pruefung: { icon: 'assignment', title: 'Überblick praktische Prüfung'")
j = s.index('    ]}\n', i) + len('    ]}\n')
s = s[:i] + ("    pruefung: { icon: 'assignment', title: '%s', tags: ['100 Punkte', '5:45'], link: '#pruefung', blocks: [\n"
             "        ['Aufgaben und Punkte (S. 256)', 'list', '<ol>%s</ol><p><b>%s</b></p><a href=\"#pruefung\">Zur Prüfungsübersicht mit Sprüngen</a>'],\n"
             "        ['', '', src('S. 256')]\n    ]}\n") % (
    js(T[256]['title']), ''.join('<li>%s – %s – max. %s</li>' % (js(e(a)), js(e(b)) if b.strip() else '', c) for a, b, c in aufg), js(e(z[-1]))) + s[j:]
s = s.replace('<li>Nutzungsanforderungen den Teilaufgaben des Aufgabenmodells zuordnen –  – max. 10</li>', '<li>Nutzungsanforderungen den Teilaufgaben des Aufgabenmodells zuordnen – max. 10</li>')

# 5 D.erfordernis: Leitfragen S. 253 (wörtlich) + Abschnitte
i = s.index("    erfordernis: { icon:"); j = s.index("['', '', ", i)
s = s[:j] + ("['%s (S. 253)', 'manage_search', '%s' + ul([%s]) + '<a href=\"#erfordernisse-identifizieren\">%s</a>'],\n        ") % (
    js(T[253]['title']), js(zeilen(253)[0]), ', '.join("'" + js(x) + "'" for x in punkte(253)), js(T[253]['title'])) + s[j:]

# 6 Navigation, Tabelle, Kapitelzuordnung
rep('''        <a href="#syntax-erfordernisse" class="nav-link"><span class="material-icons">text_fields</span>Formulierungsschablone</a>
''', '''        <a href="#syntax-erfordernisse" class="nav-link"><span class="material-icons">text_fields</span>Formulierungsschablone</a>
        <a href="#erfordernisse-identifizieren" class="nav-link"><span class="material-icons">manage_search</span>Erfordernisse identifizieren</a>
        <a href="#nki-typen-beispiele" class="nav-link"><span class="material-icons">lightbulb</span>NKI → Typen – Beispiele</a>
        <a href="#ueberblick-praxis" class="nav-link"><span class="material-icons">assignment</span>Überblick Praktische Prüfung</a>
        <a href="#ure-erfordernisse" class="nav-link"><span class="material-icons">auto_stories</span>URE Story</a>
''')
rep('<a href="#syntax-erfordernisse">Formulierungsschablone für Erfordernisse</a><a href="#kette">Die Kette</a>',
    '<a href="#syntax-erfordernisse">Formulierungsschablone für Erfordernisse</a><a href="#erfordernisse-identifizieren">Erfordernisse identifizieren</a>'
    '<a href="#nki-typen-beispiele">NKI → Typen von Erfordernissen</a><a href="#ueberblick-praxis">Überblick Praktische Prüfung</a><a href="#ure-erfordernisse">URE Story Kapitel 4</a><a href="#kette">Die Kette</a>')
rep("'syntax-erfordernisse': '4.1' };", "'syntax-erfordernisse': '4.1', 'erfordernisse-identifizieren': '4.1', 'nki-typen-beispiele': '4.1', 'ueberblick-praxis': '4.1', 'ure-erfordernisse': '4.1' };")

# 7 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 252</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 258</p>')
rep('Folien S. 2–252 (Zum Seminar, Kapitel 1–3, Kapitel 4 bis S. 252)</span>', 'Folien S. 2–258 (Zum Seminar, Kapitel 1–3, Kapitel 4 bis S. 258)</span>')
rep('Kapitel 3 vollständig, Kapitel 4 bis Folie S. 252.', 'Kapitel 3 vollständig, Kapitel 4 bis Folie S. 258.')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
