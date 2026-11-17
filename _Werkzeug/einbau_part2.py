"""Einmaliger Einbau der Folien S. 142–177 (Folien/Part2) in die Einzelseite."""
import sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()


def rep(a, b, count=1):
    global s
    assert s.count(a) == count, (s.count(a), a[:80])
    s = s.replace(a, b)


kap2 = open('_Werkzeug/neu_kap2.html', encoding='utf-8').read()
kap3 = open('_Werkzeug/neu_kap3.html', encoding='utf-8').read()

# 1 Abschnitte hinter "planen" einfügen
i = s.index('<section class="section" id="planen">')
j = s.index('</section>\n', i) + len('</section>\n')
s = s[:j] + '\n' + kap2 + kap3 + s[j:]

# 2 Navigation
rep('''        <a href="#planen" class="nav-link"><span class="material-icons">event_note</span>NKA planen</a>
''', '''        <a href="#planen" class="nav-link"><span class="material-icons">event_note</span>NKA planen</a>
        <a href="#methoden" class="nav-link"><span class="material-icons">lightbulb</span>Design Thinking, Lean UX</a>
        <div class="nav-group">Kapitel 3</div>
        <a href="#erheben" class="nav-link"><span class="material-icons">travel_explore</span>Überblick Kapitel 3</a>
        <a href="#rekrutieren" class="nav-link"><span class="material-icons">group_add</span>3.1 Rekrutieren</a>
        <a href="#durchfuehren" class="nav-link"><span class="material-icons">record_voice_over</span>3.2 Erhebung durchführen</a>
''')

# 3 Prozessgrafik: neue Chips
rep('<line x1="72" y1="226" x2="72" y2="400" stroke="#cbd5e0" stroke-width="2"/>',
    '<line x1="72" y1="226" x2="72" y2="446" stroke="#cbd5e0" stroke-width="2"/>')
rep('''<g class="hot chip" data-k="info"><rect x="80" y="382" width="284" height="36" rx="4"/><text x="222" y="405" text-anchor="middle" style="font-size:12.5px">Empirische und konstruierte Information</text></g>
''', '''<g class="hot chip" data-k="info"><rect x="80" y="382" width="284" height="36" rx="4"/><text x="222" y="405" text-anchor="middle" style="font-size:12.5px">Empirische und konstruierte Information</text></g>
                <g class="hot chip" data-k="methoden"><rect x="80" y="428" width="284" height="36" rx="4"/><text x="222" y="451" text-anchor="middle">Design Thinking · Lean UX</text></g>
''')
rep('''<g class="hot chip t" data-k="aufgabenmodell"><rect x="640" y="354" width="150" height="34" rx="4"/><text x="715" y="376" text-anchor="middle">Aufgabenmodell</text></g>
''', '''<g class="hot chip t" data-k="aufgabenmodell"><rect x="640" y="354" width="150" height="34" rx="4"/><text x="715" y="376" text-anchor="middle">Aufgabenmodell</text></g>
                <!-- Kapitel 3: erheben -->
                <g class="hot chip" data-k="rekrutierung"><rect x="600" y="400" width="104" height="30" rx="4"/><text x="652" y="420" text-anchor="middle" style="font-size:12.5px">Rekrutierung</text></g>
                <g class="hot chip" data-k="interview"><rect x="710" y="400" width="118" height="30" rx="4"/><text x="769" y="420" text-anchor="middle" style="font-size:12.5px">Kontext. Interview</text></g>
                <g class="hot chip" data-k="rollen"><rect x="834" y="400" width="84" height="30" rx="4"/><text x="876" y="420" text-anchor="middle" style="font-size:12.5px">Rollen</text></g>
''')

# 4 Detailtexte (Wortlaut der Folien)
rep('''    verstehen: { icon: 'travel_explore',''', '''    methoden: { icon: 'lightbulb', title: 'Weitere Methoden: Design Thinking, Lean UX', tags: ['Planung', 'Kapitel 2.2'], link: '#methoden', blocks: [
        ['Design Thinking (S. 144)', 'psychology', 'Ein systematischer Ansatz zur Erarbeitung von Lösungen für komplexe Probleme in allen Lebensbereichen, bei dem menschliche Werte Vorrang vor technischen oder wirtschaftlichen Zwängen haben. Es ist ein Instrument zur Bewältigung unbekannter Problemstellungen und wird bei der Entwicklung von Produkten, Dienstleistungen oder Prozessinnovationen verwendet.' + ul(['Design Thinking konzentriert sich auf drei Elemente: Menschen, Orte, Prozess.'])],
        ['Design Thinking (S. 145)', 'info', ul(['Design Thinking liefert einen besonderen Weg, sich eine Lösung, die zum Problemkontext passt, zu erarbeiten. Dieses Vorgehen berücksichtigt jedoch Nutzungsanforderungen nur implizit, sie werden nicht explizit formuliert und für eine spätere Verwendung dokumentiert.'])],
        ['Lean UX (S. 151)', 'rocket_launch', 'Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.' + ul(['Die modellbasierte Nutzungskontextanalyse ist ein geeigneter Ausgangspunkt für LeanUX'])],
        ['', '', note('Idee Annahme → MVP → Rückmeldung wirtschaftl. → braucht die Welt dieses Produkt?', 'S. 151') + src('S. 142–153')]
    ]},
    rekrutierung: { icon: 'group_add', title: 'Benutzer auswählen und rekrutieren', tags: ['Verstehen', 'Kapitel 3.1'], link: '#rekrutieren', blocks: [
        ['Benutzergruppe (S. 157)', 'groups', 'Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten in Bezug auf das interaktive System.'],
        ['Benutzergruppenprofil (S. 157)', 'badge', 'Eine verallgemeinerte Beschreibung einer Benutzergruppe.' + ul(['Benutzergruppenprofile stellen die Basis für den Rekrutierungsfragebogen'])],
        ['Rekrutierungsfragebogen (S. 160)', 'checklist', 'Eine Reihe von Kriterien, die aus dem Benutzergruppenprofil abgeleitet wurden und die die Teilnehmer einer Nutzungskontextanalyse erfüllen müssen, sowie eine Reihe von Fragen, mit denen überprüft werden kann, ob die Kriterien erfüllt sind.'],
        ['Rekrutierung von Benutzern (S. 162)', 'how_to_reg', 'Je nach Verhältnis zwischen zu rekrutierenden Benutzenden und dem Hersteller des interaktiven Systems ist das Vorgehen bei der Rekrutierung unterschiedlich.'],
        ['', '', src('S. 156–163')]
    ]},
    interview: { icon: 'forum', title: 'Kontextuelles Interview (contextual interview)', tags: ['Verstehen', 'Kapitel 3.2', 'Prüfung: Interviewfehler 4 P'], link: '#durchfuehren', blocks: [
        ['Interview (S. 170)', 'forum', 'Eine Methode der Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes zu gelangen.'],
        ['Kontextuelles Interview (S. 171)', 'place', 'Ein Interview, das an dem Ort stattfindet, an dem die Benutzer normalerweise Aufgaben in Zusammenhang mit dem interaktiven System ausführen.' + ul(['Die Kombination kontextuelles Interview plus Beobachtung wird oft als contextual inquiry bezeichnet.'])],
        ['Meister-Schüler-Modell (S. 172)', 'school', 'Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist.'],
        ['Typische Fehler bei einem kontextuellen Interview (S. 176)', 'report', ul(['Kleben am Interviewleitfaden (Inhalt und Reihenfolge) statt Anpassung des Interviews an den Erkenntnisgewinn während des Interviews', 'Fehlerhaftes Paraphrasieren wie etwa Wechsel der Ebene durch den Interviewer (Nutzungskontext, Erfordernisse, Nutzungsanforderungen, Lösungen)', 'Keine Überprüfung des Gesagten durch Nutzung gleicher Begriffe – Nachplappern', 'Hinzufügen eigener konstruierter Kontextinformationen', 'Schlechte Fragen: Suggestiv-, geschlossene Fragen, keine Anwendung des Meister-Schüler-Modells'])],
        ['', '', src('S. 169–177')]
    ]},
    rollen: { icon: 'diversity_3', title: 'Moderator, Protokollant, Beobachter', tags: ['Verstehen', 'Kapitel 3.2'], link: '#durchfuehren', blocks: [
        ['Moderator (S. 166)', 'record_voice_over', 'Eine neutrale Person, die ein Interview, Beobachtung, Fokusgruppe oder Usability-Testsitzung leitet.'],
        ['Protokollant (S. 167)', 'edit_note', 'Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.'],
        ['Beobachter (S. 168)', 'visibility', 'Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet.' + ul(['Beobachter dürfen nicht aktiv in die beobachtete Aktivität eingreifen (außer bei teilnehmender Beobachtung).'])],
        ['', '', src('S. 165–168')]
    ]},
    verstehen: { icon: 'travel_explore',''')

# 5 Glossar
rep("""    ['Modellbasierte Nutzungskontextanalyse',""", """    ['Design Thinking', 'design thinking', 'Ein systematischer Ansatz zur Erarbeitung von Lösungen für komplexe Probleme in allen Lebensbereichen, bei dem menschliche Werte Vorrang vor technischen oder wirtschaftlichen Zwängen haben. Es ist ein Instrument zur Bewältigung unbekannter Problemstellungen und wird bei der Entwicklung von Produkten, Dienstleistungen oder Prozessinnovationen verwendet.', 'S. 144', 0],
    ['Lean UX', 'lean UX', 'Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.', 'S. 151', 0],
    ['Benutzergruppe', 'user group', 'Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten in Bezug auf das interaktive System.', 'S. 157', 0],
    ['Benutzergruppenprofil', 'user-group profile', 'Eine verallgemeinerte Beschreibung einer Benutzergruppe.', 'S. 157', 0],
    ['Usability (Gebrauchstauglichkeit)', 'usability', 'Das Ausmaß, in dem ein interaktives System von bestimmten Benutzern benutzt werden kann, um in einem bestimmten Nutzungskontext bestimmte Ziele effektiv, effizient und zufriedenstellend zu erreichen.', 'S. 158', 0],
    ['Rekrutierungsfragebogen', 'recruitment screener', 'Eine Reihe von Kriterien, die aus dem Benutzergruppenprofil abgeleitet wurden und die die Teilnehmer einer Nutzungskontextanalyse erfüllen müssen, sowie eine Reihe von Fragen, mit denen überprüft werden kann, ob die Kriterien erfüllt sind.', 'S. 160', 0],
    ['Moderator', 'moderator', 'Eine neutrale Person, die ein Interview, Beobachtung, Fokusgruppe oder Usability-Testsitzung leitet.', 'S. 166', 0],
    ['Protokollant', 'note-taker', 'Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.', 'S. 167', 0],
    ['Beobachter', 'observer', 'Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet.', 'S. 168', 0],
    ['Interview', 'interview', 'Eine Methode der Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes zu gelangen.', 'S. 170', 0],
    ['Interviewleitfaden', 'interview guide', 'Eine schriftliche Liste geeigneter Fragen und Hinweise, die der Interviewer während eines Interviews verwendet, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.', 'S. 170', 0],
    ['Kontextuelles Interview', 'contextual interview', 'Ein Interview, das an dem Ort stattfindet, an dem die Benutzer normalerweise Aufgaben in Zusammenhang mit dem interaktiven System ausführen.', 'S. 171', 0],
    ['Meister-Schüler-Modell', 'master-apprentice model', 'Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister-Schüler-Modells ist es, die Ziele und Aufgaben des Benutzers im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.', 'S. 172', 0],
    ['Offene Frage', 'open question', 'Eine Frage in einem Interview, die keinen Hinweis auf das erwartete Format oder den erwarteten Inhalt der Antwort gibt.', 'S. 173', 0],
    ['Geschlossene Frage', 'closed question', 'Eine Interviewfrage, die eine Antwort aus einem vordefinierten Satz von Alternativen fordert.', 'S. 173', 0],
    ['Neutrale Frage', 'neutral question', 'Eine Frage in einem Interview, die keine impliziten Annahmen beinhaltet und auch keinen Ansatz bietet, irgendetwas auszuschließen oder die Antwort in eine bestimmte Richtung zu lenken.', 'S. 173', 0],
    ['Suggestivfrage', 'leading question', 'Eine Frage in einem Interview, die eine Präferenz für bestimmte Antwortmöglichkeiten vorgibt oder versucht, die Antwort in eine bestimmte Richtung zu lenken.', 'S. 173', 0],
    ['Modellbasierte Nutzungskontextanalyse',""")

# 6 Prozesstabelle und Kapitel-Matrix
rep("themen: ['qziele', 'anlass', 'nka', 'info'],", "themen: ['qziele', 'anlass', 'nka', 'info', 'methoden'],")
rep("lesen: '<a href=\"#planen\">NKA planen</a>' },", "lesen: '<a href=\"#planen\">NKA planen</a><a href=\"#methoden\">Design Thinking, Lean UX</a>' },")
rep("themen: ['benutzer', 'aufgaben', 'umgebung', 'ressourcen', 'aufgabenmodell', 'nkinfo', 'erfordernis'],",
    "themen: ['benutzer', 'aufgaben', 'umgebung', 'ressourcen', 'aufgabenmodell', 'rekrutierung', 'interview', 'rollen', 'nkinfo', 'erfordernis'],")
rep("""lesen: '<a href="#kontext">Nutzungskontext</a><a href="#aufgabenmodell">Aufgabenmodell</a><a href="#kette">Die Kette</a>' },""",
    """lesen: '<a href="#kontext">Nutzungskontext</a><a href="#aufgabenmodell">Aufgabenmodell</a><a href="#rekrutieren">3.1 Rekrutieren</a><a href="#durchfuehren">3.2 Erhebung durchführen</a><a href="#kette">Die Kette</a>' },""")
rep("['3', 'Nutzungskontextinformation erheben'],", "['3', 'Nutzungskontextinformation erheben', 'kapitel-3.html'],")

# 7 Stand
rep('<p>Lernbegleiter zum Training, Stand Folie S. 141</p>', '<p>Lernbegleiter zum Training, Stand Folie S. 177</p>')
rep('Folien S. 2–141 (Zum Seminar, Kapitel 1, Kapitel 2)</span>', 'Folien S. 2–177 (Zum Seminar, Kapitel 1–2, Kapitel 3 bis 3.2)</span>')
rep('Kapitel 1 und 2 sind eingearbeitet. Die übrigen Kapitel ergänze ich, sobald die Folien da sind. (S. 9)',
    'Kapitel 1 und 2 sind eingearbeitet, Kapitel 3 bis Folie S. 177 (3.1 und Anfang 3.2). Die übrigen Kapitel ergänze ich, sobald die Folien da sind. (S. 9)')

# 8 Gestaltung der neuen Bausteine
rep('</style>', '''
/* KAPITEL 2/3 (Folien S. 142–177) */
.dt-cycle { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 10px; }
.dt-raum { display: flex; flex-direction: column; gap: 4px; padding: 8px; border-radius: 4px; font-size: 12.5px; font-weight: 600; }
.dt-raum small { font-size: 10.5px; text-transform: uppercase; letter-spacing: 0.05em; }
.dt-raum.t { background: rgba(0,155,163,0.1); color: var(--tuerkis-dark); }
.dt-raum.l { background: rgba(139,92,246,0.1); color: #6d3fd6; }
.dt-raum span { background: white; border-radius: 3px; padding: 3px 6px; color: var(--text); }
.erheben-m { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.erheben-m .em { background: #f1d6da; color: #7a1020; border-radius: 4px; padding: 14px 10px; text-align: center; font-weight: 700; font-size: 14px; }
.erheben-m .em.on { background: #a3122e; color: white; }
.erheben-m .em small { display: block; font-size: 11px; font-weight: 600; opacity: 0.8; }
.erheben-base { margin-top: 8px; background: #4a5568; color: white; text-align: center; font-weight: 700; padding: 8px; border-radius: 4px; }
.box.ok-box { background: #f0faf5; border-color: #9fdcbf; }
</style>''')

open(p, 'w', encoding='utf-8').write(s)
print('ok')
