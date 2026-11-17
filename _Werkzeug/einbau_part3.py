"""Einmaliger Einbau der Folien S. 178–207 (Folien/Part3) in die Einzelseite."""
import sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


neu = open('_Werkzeug/neu_kap3b.html', encoding='utf-8').read()
i = s.index('<section class="section" id="durchfuehren">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + neu + s[j:]

# Navigation
rep('''        <a href="#durchfuehren" class="nav-link"><span class="material-icons">record_voice_over</span>3.2 Erhebung durchführen</a>
''', '''        <a href="#durchfuehren" class="nav-link"><span class="material-icons">record_voice_over</span>3.2 Erhebung durchführen</a>
        <a href="#beobachtung" class="nav-link"><span class="material-icons">visibility</span>Beobachtung</a>
        <a href="#fokusgruppe" class="nav-link"><span class="material-icons">groups</span>Fokusgruppe</a>
        <a href="#methodenwahl" class="nav-link"><span class="material-icons">tune</span>Methoden wählen</a>
        <a href="#mentale-modelle" class="nav-link"><span class="material-icons">psychology</span>Mentale Modelle, Wünsche</a>
        <a href="#beschreiben" class="nav-link"><span class="material-icons">description</span>3.3 Beschreibungen</a>
''')

# Prozessgrafik: zwei flache Chip-Reihen unter „Verstehen“
rep('''<g class="hot chip" data-k="rekrutierung"><rect x="600" y="400" width="104" height="30" rx="4"/><text x="652" y="420" text-anchor="middle" style="font-size:12.5px">Rekrutierung</text></g>
                <g class="hot chip" data-k="interview"><rect x="710" y="400" width="118" height="30" rx="4"/><text x="769" y="420" text-anchor="middle" style="font-size:12.5px">Kontext. Interview</text></g>
                <g class="hot chip" data-k="rollen"><rect x="834" y="400" width="84" height="30" rx="4"/><text x="876" y="420" text-anchor="middle" style="font-size:12.5px">Rollen</text></g>''',
'''<g class="hot chip" data-k="rekrutierung"><rect x="600" y="394" width="104" height="21" rx="4"/><text x="652" y="409" text-anchor="middle" style="font-size:11.5px">Rekrutierung</text></g>
                <g class="hot chip" data-k="interview"><rect x="710" y="394" width="118" height="21" rx="4"/><text x="769" y="409" text-anchor="middle" style="font-size:11.5px">Kontext. Interview</text></g>
                <g class="hot chip" data-k="rollen"><rect x="834" y="394" width="84" height="21" rx="4"/><text x="876" y="409" text-anchor="middle" style="font-size:11.5px">Rollen</text></g>
                <g class="hot chip" data-k="beobachtung"><rect x="600" y="419" width="104" height="21" rx="4"/><text x="652" y="434" text-anchor="middle" style="font-size:11.5px">Beobachtung</text></g>
                <g class="hot chip" data-k="fokusgruppe"><rect x="710" y="419" width="118" height="21" rx="4"/><text x="769" y="434" text-anchor="middle" style="font-size:11.5px">Fokusgruppe</text></g>
                <g class="hot chip" data-k="mentales"><rect x="834" y="419" width="84" height="21" rx="4"/><text x="876" y="434" text-anchor="middle" style="font-size:11.5px">Mentales M.</text></g>''')

# Detailtexte (Wortlaut der Folien)
rep('''    verstehen: { icon: 'travel_explore',''', '''    beobachtung: { icon: 'visibility', title: 'Beobachtung (observation)', tags: ['Verstehen', 'Kapitel 3.2'], link: '#beobachtung', blocks: [
        ['Definition (S. 178)', 'menu_book', 'Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein User Experience Professional Benutzer beobachtet, die mit dem interaktiven System Aufgaben ausführen.'],
        ['Formen der Beobachtung (S. 180, 181)', 'category', ul(['strukturiert versus unstrukturiert', 'teilnehmend versus nicht-teilnehmend', 'offen versus verdeckt', 'im Feld versus im Labor'])],
        ['Typische Fehler bei der Beobachtung (S. 184)', 'report', ul(['Vorwissen und Annahmen über zu beobachtende Phänomene können die Beobachtung verfälschen', 'Wertung, Interpretation und Beobachtung können sich vermischen', 'Zu frühe Abstraktion (auf vermutete Zusammenhänge ...) führt zu voreiligen Wertungen.', 'Mit zunehmender Vertrautheit der zu beobachtenden Ereignisse nimmt die Aufmerksamkeit und damit die Zuverlässigkeit der Beobachtung ab.'])],
        ['', '', src('S. 178–185')]
    ]},
    fokusgruppe: { icon: 'groups', title: 'Fokusgruppe (focus group)', tags: ['Verstehen', 'Kapitel 3.2'], link: '#fokusgruppe', blocks: [
        ['Definition (S. 186)', 'menu_book', 'Eine moderierte Diskussion über vorgegebene Themen und Fragen zwischen Mitgliedern einer oder mehrerer Benutzergruppen.'],
        ['Fokusgruppe (S. 187)', 'info', ul(['Fokusgruppen sind kein Ersatz für kontextuelle Interviews, Beobachtungen oder Benutzerbefragungen.'])],
        ['Typische Fehler bei einer Fokusgruppe (S. 190)', 'report', ul(['Mangelnde Moderationskompetenz', 'Falsche oder schlechte Rekrutierung. Teilnehmer haben kein eigenes Erfahrungswissen zum Thema und bringen irrelevante Annahmen ein', 'Zu kurze Erkundungsphase (in Bezug auf ein Thema) führt zu frühen Abstraktionen auf vermutete Zusammenhänge und damit zu Ergebnissen oder voreiligen Wertungen, ohne Sammlung und Bewertung aller Perspektiven und Facetten des Themas.'])],
        ['', '', src('S. 186–192')]
    ]},
    mentales: { icon: 'psychology', title: 'Mentales Modell (mental model)', tags: ['Verstehen', 'Kapitel 3.2'], link: '#mentale-modelle', blocks: [
        ['Definition (S. 194)', 'menu_book', 'Das Konzept, das Menschen von sich selbst, anderen, der Umgebung und der Funktionsweise der Dinge, mit denen sie interagieren, entwickelt haben.'],
        ['Mentales Modell (S. 195)', 'info', ul(['Offengelegte mentale Modelle sind wichtige Informationsquellen für die Ermittlung von Erfordernissen.'])],
        ['Bedürfnis (user need), S. 201', 'favorite', 'Ein Bedürfnis kann als Zustand oder Erleben eines Mangels, verbunden mit dem Wunsch ihn zu beheben, definiert werden.'],
        ['Gegenüberstellung Benutzerwunsch und Erfordernis (S. 202)', 'compare_arrows', ul(['Benutzerwunsch: subjektiv', 'Erfordernis: objektiv'])],
        ['', '', src('S. 193–202')]
    ]},
    verstehen: { icon: 'travel_explore',''')

# Glossar
rep("""    ['Modellbasierte Nutzungskontextanalyse',""", """    ['Beobachtung', 'observation', 'Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein User Experience Professional Benutzer beobachtet, die mit dem interaktiven System Aufgaben ausführen.', 'S. 178', 0],
    ['Cultural Probe', 'cultural probe', 'Spezialfall der Beobachtung, bei der der Benutzer sich selbst beobachtet bzw. Proben, Spuren seiner Aktivitäten im Nutzungskontext sammelt und für die Auswertung zur Verfügung stellt, z. B. Fotos, Notizzettel, Skizzen, ...', 'S. 179', 0],
    ['Tagebuchstudie', 'diary study', 'Eine Spezialform der Beobachtung, bei der die Teilnehmer bestimmte Ereignisse, Gefühle, Verhaltensweisen und Interaktionen in einer mobilen Anwendung oder einem Papiertagebuch aufzeichnen, um einen Einblick in die User Experience mit einem interaktiven System zu geben.', 'S. 179', 0],
    ['Fokusgruppe', 'focus group', 'Eine moderierte Diskussion über vorgegebene Themen und Fragen zwischen Mitgliedern einer oder mehrerer Benutzergruppen.', 'S. 186', 0],
    ['Mentales Modell', 'mental model', 'Das Konzept, das Menschen von sich selbst, anderen, der Umgebung und der Funktionsweise der Dinge, mit denen sie interagieren, entwickelt haben.', 'S. 194', 0],
    ['Bedürfnis', 'user need', 'Ein Bedürfnis kann als Zustand oder Erleben eines Mangels, verbunden mit dem Wunsch ihn zu beheben, definiert werden.', 'S. 201', 0],
    ['Modellbasierte Nutzungskontextanalyse',""")

# Prozesstabelle
rep("themen: ['benutzer', 'aufgaben', 'umgebung', 'ressourcen', 'aufgabenmodell', 'rekrutierung', 'interview', 'rollen', 'nkinfo', 'erfordernis'],",
    "themen: ['benutzer', 'aufgaben', 'umgebung', 'ressourcen', 'aufgabenmodell', 'rekrutierung', 'interview', 'rollen', 'beobachtung', 'fokusgruppe', 'mentales', 'nkinfo', 'erfordernis'],")
rep('<a href="#durchfuehren">3.2 Erhebung durchführen</a><a href="#kette">Die Kette</a>',
    '<a href="#durchfuehren">3.2 Erhebung durchführen</a><a href="#beobachtung">Beobachtung</a><a href="#fokusgruppe">Fokusgruppe</a><a href="#methodenwahl">Methoden wählen</a><a href="#mentale-modelle">Mentale Modelle, Wünsche</a><a href="#kette">Die Kette</a>')
rep("rekrutieren: '3.1', durchfuehren: '3.2' };", "rekrutieren: '3.1', durchfuehren: '3.2', beobachtung: '3.2', fokusgruppe: '3.2', methodenwahl: '3.2', 'mentale-modelle': '3.2', beschreiben: '3.3' };")

# Evas Kette: Abgrenzung Benutzerwunsch (Folie S. 202, W)
rep('''                <tr class="pt-eva pt-bsp"><th>Beispiel</th>''', '''                <tr><th>Nicht verwechseln</th>
                    <td><b>Benutzerwunsch</b> (S. 202): subjektiv · wird in Interview häufig als Forderung/ Lösung formuliert · wird in NKA gesammelt, ist NICHT Ausgangspunkt für Lösungsfindung</td>
                    <td>objektiv · wird in Interview nur implizit genannt, von URE in NK-Info identifiziert, beschreibt was Benutzende brauchen · ist Ausgangspunkt für NA<span class="pt-src">S. 202</span></td>
                    <td>wird zu NA und kann durch Benutzerwunsch priorisiert werden<span class="pt-src">S. 202</span></td>
                    <td><span class="pt-none">–</span></td></tr>
                <tr class="pt-eva pt-bsp"><th>Beispiel</th>''')
rep('<thead>\n                <tr class="pt-dach"><th></th><td colspan="4"><b>Erhebung von Nutzungskontextinformation</b> (Interview, Beobachtung, Fokusgruppe, Befragung)</td></tr>',
    '<thead>\n                <tr class="pt-dach"><th></th><td colspan="4"><b>Erhebung von Nutzungskontextinformation</b> (Interview, Beobachtung, Fokusgruppe, Befragung) · erhoben werden auch: Mentale Modelle, Wünsche und Bedürfnisse der Benutzenden (S. 193)</td></tr>')

# Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 177</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 207</p>')
rep('Folien S. 2–177 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis 3.2)</span>', 'Folien S. 2–207 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis Beginn 3.3)</span>')
rep('Kapitel 3 bis Folie S. 177 (3.1 und Anfang 3.2).', 'Kapitel 3 bis Folie S. 207 (3.1, 3.2 und Beginn 3.3).')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
