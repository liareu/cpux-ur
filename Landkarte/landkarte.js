/* CPUX-UR Prozess-Landkarte: gemeinsames Skript aller Unterseiten. Erzeugt mit build_site.py. */
/* ---------- Prozesskarte: Detailinhalte ----------
   Neue Folien ergänzen: Eintrag hier anlegen und in der SVG ein Element mit data-k="schluessel" setzen. */
const ul = a => '<ul>' + a.map(x => '<li>' + x + '</li>').join('') + '</ul>';
const pills = a => '<div class="dr-pills">' + a.map(x => '<span>' + x + '</span>').join('') + '</div>';
const note = (t, s) => '<div class="note"><div class="note-label"><span class="material-icons">edit_note</span>Deine Notiz' + (s ? ' (' + s + ')' : '') + '</div>' + t + '</div>';
const src = s => '<span class="src"><span class="material-icons">description</span>Folien ' + s + '</span>';

const D = {
    hcd: { icon: 'account_balance', title: 'Menschzentrierte Gestaltung (Human-centred Design, HCD)', tags: ['ISO 9241-210:2019', 'Basis'], link: 'seminar.html#rollen', blocks: [
        ['Definition (S. 7)', 'menu_book', 'Herangehensweise bei der Gestaltung und Entwicklung von interaktiven Systemen, die darauf abzielt, diese gebrauchstauglicher zu machen, indem sie sich auf die Verwendung des interaktiven Systems konzentriert und Kenntnisse und Methoden aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Usability anwendet.'],
        ['Aktivitäten (S. 7)', 'sync', ul(['Planung des menschzentrierten Gestaltungsprozesses', 'Verstehen und Festlegen des Nutzungskontextes', 'Festlegen der Nutzungsanforderungen', 'Gestalten von Lösungen, die Nutzungsanforderungen erfüllen', 'Evaluieren der Gestaltungslösung gegen Nutzungsanforderungen', 'Gestaltungslösung erfüllt die Nutzungsanforderungen']) + '<p>Iterationen</p>'],
        ['Produktentwicklungsprozess Anteile zum PEP (S. 18)', 'hub', pills(['Technologie: Technische Entwicklung', 'Nutzende: Menschzentrierte Gestaltung (HCD)', 'Business: organisatorische Produktentwicklung'])],
        ['', '', note('beliebiger Start hier möglich', 'S. 8') + src('S. 7, 8, 18 · Quelle: UXQB CPUX-F Curriculum V4.01 nach ISO 9241-210:2019')]
    ]},
    planung: { icon: 'event_note', title: 'Planung des menschzentrierten Gestaltungsprozesses', tags: ['Problemraum', 'Kapitel 2'], link: 'kapitel-2.html#planen', blocks: [
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', pills(['UX-Projektplan', 'menschzentrierte Qualitätsziele'])],
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Festlegung der zu entwickelnden menschzentrierten Qualitätsziele'],
        ['Kapitel 2 (S. 119)', 'flag', 'Sicherstellen, dass die Nutzungskontextanalyse für den gegebenen Anlass und die spezifizierten menschzentrierten Qualitätsziele in angemessenem Umfang geplant werden kann.' + pills(['2.1 Anlass und Ziele der Nutzungskontextanalyse ermitteln', '2.2 Das Vorgehen bei der Nutzungskontextanalyse festlegen'])],
        ['', '', note('1 Grundlage ★ · – Gemeinsames Ziel · – Voraussetzung · Fokus, zielgesteuert Entwicklung', 'S. 8') + note('→ Vision · – quantitative &amp; Qualitativ', 'S. 117') + src('S. 8, 117, 119')]
    ]},
    qziele: { icon: 'flag', title: 'Menschzentrierte Qualitätsziele (human-centred quality objectives)', tags: ['Planung', 'Kapitel 2.1'], link: 'kapitel-2.html#planen', blocks: [
        ['Definition (S. 124)', 'menu_book', 'Ein beabsichtigtes Ergebnis der Entwicklung eines interaktiven Systems für den Benutzer, das sich auf die Usability, die Barrierefreiheit, die User Experience oder die Vermeidung von Schäden durch die Benutzung bezieht'],
        ['menschzentrierte Qualitätsziele', 'view_column', pills(['Usability: Effizienz, Effektivität, Zufriedenstellung während der Benutzung', 'User Experience: Erlebnis vor, während, nach der Benutzung', 'Barrierefreiheit: Benutzung für alle', 'Vermeidung von Schäden durch die Benutzung: sichere Benutzung'])],
        ['S. 125', 'list', ul(['Menschzentrierte Qualitätsziele sind Ziele der Stakeholder in Bezug auf die menschzentrierte Qualität des zu entwickelnden, zu verbessernden interaktiven Systems. Sie sind noch keine Nutzungsanforderungen.', 'Menschzentrierte Qualitätsziele werden bei der Planung der menschzentrierten Gestaltung spezifiziert. Der User Requirements Engineer fungiert hierbei als Moderator, da er die Fachkenntnisse für das Spezifizieren hat.', 'Das explizite Spezifizieren von menschzentrierte Qualitätszielen hilft, bei Projektbeginn den Fokus und Umfang für die durchzuführende Nutzungskontextanalyse angemessen zu setzen', 'Menschzentrierte Qualitätsziele können als verifizierbare quantitative Nutzungsanforderungen formuliert sein, wenn sie als Akzeptanzkriterien im Projekt dienen sollen.'])],
        ['', '', note('Nutzungsqualität · ⇒ gemeinsames Entwicklungsziel', 'S. 124') + note('Planung und Zielsetzung mit Stakeholdern, Ziele aufstellen → Kontexterhebung/Interviews → Erfordernisse → Ziele challengen/ändern', 'S. 125') + src('S. 124–128')]
    ]},
    anlass: { icon: 'help_center', title: 'Anlass und Ziele der Nutzungskontextanalyse ermitteln', tags: ['Planung', 'Kapitel 2.1'], link: 'kapitel-2.html#planen', blocks: [
        ['Anlass einer Nutzungskontextanalyse (S. 122)', 'event', 'Typische Anlässe für Nutzungskontextanalysen innerhalb eines Projekts zur Gestaltung eines interaktiven Systems' + ul(['Ein neues interaktives System soll entwickelt werden, ohne dass es einen Vorgänger hierfür gibt.', 'Die Akzeptanz / Nutzungsintensität eines bestehenden interaktiven Systems soll erhöht werden.', 'Die Effizienz der Nutzung eines interaktiven Systems soll für eine Benutzergruppe erhöht werden.', 'Ein bestehendes interaktives System soll bezüglich seines Funktionsumfangs erweitert werden (Erhöhung der Effektivität, z.B. für eine neue Benutzergruppe oder eine neue Aufgabe innerhalb einer bereits unterstützten Benutzergruppe).', 'Für eine Usability-Evaluierung eines interaktiven Systems sollen die relevanten Nutzungsanforderungen ermittelt werden.', 'Nutzungskontext hat sich über die Zeit weiterentwickelt / verändert.'])],
        ['Sponsor (S. 123)', 'payments', 'Stakeholder, der das Budget für ein Entwicklungsprojekt bereitstellt.'],
        ['', '', src('S. 121–123, 129')]
    ]},
    nka: { icon: 'alt_route', title: 'Vorgehen NKA festlegen: klassisch vs. modellbasiert', tags: ['Planung', 'Kapitel 2.2'], link: 'kapitel-2.html#planen', blocks: [
        ['Klassische Nutzungskontextanalyse (S. 136)', 'search', 'Vorgehen bei der Nutzungskontextanalyse, bei dem systematisch ohne Annahmen über den Nutzungskontext zunächst alle Nutzungskontextinformationen erhoben werden und erst dann Erfordernisse und ableitbare Nutzungsanforderungen ermittelt werden.'],
        ['Modellbasierte Nutzungskontextanalyse (S. 136)', 'schema', 'Vorgehen bei der Nutzungskontextanalyse, bei dem auf Basis bekannter Nutzungskontextinformationen, vorliegender Aufgabenmodelle, bereits bekannter Nutzungsanforderungen und Nutzungsszenarien und/oder vorhandener Prototypen offene Fragen über den Nutzungskontext gesammelt werden, mit deren Hilfe dann systematisch in kontextuellen Interviews und/oder Beobachtungen empirische Informationen über den Nutzungskontext eingeholt werden.'],
        ['S. 138', 'warning_amber', ul(['Je mehr empirische Nutzungskontextinformationen bereits im Projektteam vorliegen, umso ökonomischer ist die modellbasierte Nutzungskontextanalyse. (siehe auch LeanUX)', 'Je weniger empirische Nutzungskontextinformationen über den Nutzungskontext bereits im Projektteam vorliegen, umso risikobehafteter ist die modellbasierte Nutzungskontextanalyse in Hinblick auf die Immunisierungsfalle.'])],
        ['', '', note('Annahmebasiert', 'S. 138') + src('S. 136–141')]
    ]},
    info: { icon: 'science', title: 'Empirische und konstruierte Information (empirical and constructed information)', tags: ['Planung', 'Kapitel 2.2'], link: 'kapitel-2.html#planen', blocks: [
        ['Empirische Information', 'fact_check', 'Faktische Information, die im Nutzungskontext durch kontextuelle Interviews oder Beobachtungen erhoben wurde.' + ul(['Beispiele sind etwa Aufgaben und Ziele, Ist-Szenarios', 'Empirische Information ist die Grundlage für konstruierte Information'])],
        ['Konstruierte Information', 'construction', 'Eine Information, die aus empirischer Information abgeleitet wurde. Z.B. Personas, Anforderungen'],
        ['Annahmen', 'help', 'Annahmen sind Informationen, die nicht auf empirische Informationen zurückgeführt werden können.' + ul(['Annahmen müssen durch Evaluierung bestätigt werden und werden, bei Bestätigung, überführt in empirische Information.'])],
        ['', '', note('z.B. aus Interview · Benutzergruppen · – Erfordernisse · Erfordernisse werden zu Anforderungen konstruiert', 'S. 133') + src('S. 133')]
    ]},
    methoden: { icon: 'lightbulb', title: 'Weitere Methoden: Design Thinking, Lean UX', tags: ['Planung', 'Kapitel 2.2'], link: 'kapitel-2.html#methoden', blocks: [
        ['Design Thinking (S. 144)', 'psychology', 'Ein systematischer Ansatz zur Erarbeitung von Lösungen für komplexe Probleme in allen Lebensbereichen, bei dem menschliche Werte Vorrang vor technischen oder wirtschaftlichen Zwängen haben. Es ist ein Instrument zur Bewältigung unbekannter Problemstellungen und wird bei der Entwicklung von Produkten, Dienstleistungen oder Prozessinnovationen verwendet.' + ul(['Design Thinking konzentriert sich auf drei Elemente: Menschen, Orte, Prozess.'])],
        ['Design Thinking (S. 145)', 'info', ul(['Design Thinking liefert einen besonderen Weg, sich eine Lösung, die zum Problemkontext passt, zu erarbeiten. Dieses Vorgehen berücksichtigt jedoch Nutzungsanforderungen nur implizit, sie werden nicht explizit formuliert und für eine spätere Verwendung dokumentiert.'])],
        ['Lean UX (S. 151)', 'rocket_launch', 'Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.' + ul(['Die modellbasierte Nutzungskontextanalyse ist ein geeigneter Ausgangspunkt für LeanUX'])],
        ['', '', note('Idee Annahme → MVP → Rückmeldung wirtschaftl. → braucht die Welt dieses Produkt?', 'S. 151') + src('S. 142–153')]
    ]},
    rekrutierung: { icon: 'group_add', title: 'Benutzer auswählen und rekrutieren', tags: ['Verstehen', 'Kapitel 3.1'], link: 'kapitel-3.html#rekrutieren', blocks: [
        ['Benutzergruppe (S. 157)', 'groups', 'Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten in Bezug auf das interaktive System.'],
        ['Benutzergruppenprofil (S. 157)', 'badge', 'Eine verallgemeinerte Beschreibung einer Benutzergruppe.' + ul(['Benutzergruppenprofile stellen die Basis für den Rekrutierungsfragebogen'])],
        ['Rekrutierungsfragebogen (S. 160)', 'checklist', 'Eine Reihe von Kriterien, die aus dem Benutzergruppenprofil abgeleitet wurden und die die Teilnehmer einer Nutzungskontextanalyse erfüllen müssen, sowie eine Reihe von Fragen, mit denen überprüft werden kann, ob die Kriterien erfüllt sind.'],
        ['Rekrutierung von Benutzern (S. 162)', 'how_to_reg', 'Je nach Verhältnis zwischen zu rekrutierenden Benutzenden und dem Hersteller des interaktiven Systems ist das Vorgehen bei der Rekrutierung unterschiedlich.'],
        ['', '', src('S. 156–163')]
    ]},
    interview: { icon: 'forum', title: 'kontextuelles Interview (contextual interview)', tags: ['Verstehen', 'Kapitel 3.2', 'Prüfung: Interviewfehler 4 P'], link: 'kapitel-3.html#durchfuehren', blocks: [
        ['Interview (S. 170)', 'forum', 'Eine Methode der Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes zu gelangen.'],
        ['Kontextuelles Interview (S. 171)', 'place', 'Ein Interview, das an dem Ort stattfindet, an dem die Benutzer normalerweise Aufgaben in Zusammenhang mit dem interaktiven System ausführen.' + ul(['Die Kombination kontextuelles Interview plus Beobachtung wird oft als contextual inquiry bezeichnet.'])],
        ['Meister-Schüler-Modell (S. 172)', 'school', 'Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister-Schüler-Modells ist es, die Ziele und Aufgaben des Benutzers im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.'],
        ['Typische Fehler bei einem kontextuellen Interview (S. 176)', 'report', ul(['Kleben am Interviewleitfaden (Inhalt und Reihenfolge) statt Anpassung des Interviews an den Erkenntnisgewinn während des Interviews', 'Fehlerhaftes Paraphrasieren wie etwa Wechsel der Ebene durch den Interviewer (Nutzungskontext, Erfordernisse, Nutzungsanforderungen, Lösungen)', 'Keine Überprüfung des Gesagten durch Nutzung gleicher Begriffe – Nachplappern', 'Hinzufügen eigener konstruierter Kontextinformationen', 'Schlechte Fragen: Suggestiv-, geschlossene Fragen, keine Anwendung des Meister-Schüler-Modells', '→ Fehlende Kompetenz, Training und Erfahrung als Interviewer', '→ Fehlende Kuriosität und fehlendes tiefes Explorieren des Interviewers', '→ Stellen von impliziten Annahmen zum Nutzungskontext und den Erfordernissen'])],
        ['', '', src('S. 169–177')]
    ]},
    rollen: { icon: 'diversity_3', title: 'Moderator, Protokollant, Beobachter', tags: ['Verstehen', 'Kapitel 3.2'], link: 'kapitel-3.html#durchfuehren', blocks: [
        ['Moderator (S. 166)', 'record_voice_over', 'Eine neutrale Person, die ein Interview, Beobachtung, Fokusgruppe oder Usability-Testsitzung leitet.'],
        ['Protokollant (S. 167)', 'edit_note', 'Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.'],
        ['Beobachter (S. 168)', 'visibility', 'Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet.' + ul(['Beobachter dürfen nicht aktiv in die beobachtete Aktivität eingreifen (außer bei teilnehmender Beobachtung).', 'Beobachter können jedoch aktiv in die Analyse der Ergebnisse involviert sein.'])],
        ['', '', src('S. 165–168')]
    ]},
    beobachtung: { icon: 'visibility', title: 'Beobachtung (observation)', tags: ['Verstehen', 'Kapitel 3.2'], link: 'kapitel-3.html#beobachtung', blocks: [
        ['Definition (S. 178)', 'menu_book', 'Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein User Experience Professional Benutzer beobachtet, die mit dem interaktiven System Aufgaben ausführen.'],
        ['Formen der Beobachtung (S. 180, 181)', 'category', ul(['strukturiert versus unstrukturiert', 'teilnehmend versus nicht-teilnehmend', 'offen versus verdeckt', 'im Feld versus im Labor'])],
        ['Typische Fehler bei der Beobachtung (S. 184)', 'report', ul(['Vorwissen und Annahmen über zu beobachtende Phänomene können die Beobachtung verfälschen', 'Wertung, Interpretation und Beobachtung können sich vermischen', 'Zu frühe Abstraktion (auf vermutete Zusammenhänge ...) führt zu voreiligen Wertungen.', 'Mit zunehmender Vertrautheit der zu beobachtenden Ereignisse nimmt die Aufmerksamkeit und damit die Zuverlässigkeit der Beobachtung ab.'])],
        ['Kriterien für die Auswahl und Kombination von Methoden, gesammelte Antworten (S. 191)', 'tune', '<a href="kapitel-3.html#methodenwahl">Kriterien für die Auswahl und Kombination von Methoden, gesammelte Antworten</a>'],
        ['', '', src('S. 178–185')]
    ]},
    fokusgruppe: { icon: 'groups', title: 'Fokusgruppe (focus group)', tags: ['Verstehen', 'Kapitel 3.2'], link: 'kapitel-3.html#fokusgruppe', blocks: [
        ['Definition (S. 186)', 'menu_book', 'Eine moderierte Diskussion über vorgegebene Themen und Fragen zwischen Mitgliedern einer oder mehrerer Benutzergruppen.'],
        ['Fokusgruppe (S. 187)', 'info', ul(['Fokusgruppen sind kein Ersatz für kontextuelle Interviews, Beobachtungen oder Benutzerbefragungen.'])],
        ['Typische Fehler bei einer Fokusgruppe (S. 190)', 'report', ul(['Mangelnde Moderationskompetenz, insbesondere:' + ul(['Vorwissen und Annahmen des Moderators zum Thema beeinflussen die Moderation. Teilnehmerperspektiven können missachtet oder verfälscht werden.', 'Mangelnde Steuerung dominierender Teilnehmer, die andere Teilnehmer führen oder unterdrücken']), 'Falsche oder schlechte Rekrutierung. Teilnehmer haben kein eigenes Erfahrungswissen zum Thema und bringen irrelevante Annahmen ein', 'Zu kurze Erkundungsphase (in Bezug auf ein Thema) führt zu frühen Abstraktionen auf vermutete Zusammenhänge und damit zu Ergebnissen oder voreiligen Wertungen, ohne Sammlung und Bewertung aller Perspektiven und Facetten des Themas.'])],
        ['Kriterien für die Auswahl und Kombination von Methoden, gesammelte Antworten (S. 191)', 'tune', '<a href="kapitel-3.html#methodenwahl">Kriterien für die Auswahl und Kombination von Methoden, gesammelte Antworten</a>'],
        ['', '', src('S. 186–192')]
    ]},
    mentales: { icon: 'psychology', title: 'Mentales Modell (mental model)', tags: ['Verstehen', 'Kapitel 3.2'], link: 'kapitel-3.html#mentale-modelle', blocks: [
        ['Definition (S. 194)', 'menu_book', 'Das Konzept, das Menschen von sich selbst, anderen, der Umgebung und der Funktionsweise der Dinge, mit denen sie interagieren, entwickelt haben.'],
        ['Mentales Modell (S. 195)', 'info', ul(['Offengelegte mentale Modelle sind wichtige Informationsquellen für die Ermittlung von Erfordernissen.'])],
        ['Bedürfnis (user need), S. 201', 'favorite', 'Ein Bedürfnis kann als Zustand oder Erleben eines Mangels, verbunden mit dem Wunsch ihn zu beheben, definiert werden.'],
        ['Gegenüberstellung Benutzerwunsch und Erfordernis (S. 202)', 'compare_arrows', '<b>Benutzerwunsch</b>' + ul(['subjektiv', 'wird in NKA gesammelt, ist NICHT Ausgangspunkt für Lösungsfindung']) + '<b>Erfordernis</b>' + ul(['objektiv', 'ist Ausgangspunkt für NA'])],
        ['', '', src('S. 193–202')]
    ]},
    nkbeschreibung: { icon: 'description', title: 'Nutzungskontextbeschreibung (context of use discription)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#nk-beschreibung', blocks: [
        ['Definition (S. 209)', 'menu_book', 'Alle Arten von Darlegungen, die die Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen beschreiben, die durch die Analyse von Beobachtungen, kontextuellen Interviews, Fokusgruppen und Benutzerbefragungen ermittelt wurden.'],
        ['Zusammenfassende Nutzungskontextbeschreibung (summary context of use description) (S. 210)', 'list', '<a href="kapitel-3.html#nk-beschreibung">Zusammenfassende Nutzungskontextbeschreibung (summary context of use description)</a>'],
        ['Detaillierte Nutzungskontextbeschreibung (detailed context of use discription) (S. 212)', 'history_edu', ul(['<a href="kapitel-3.html#narrativ">narrative Beschreibungen</a>: Ist-Szenarien, Personas', '<a href="kapitel-3.html#modellhaft">modellhafte Beschreibungen</a>: Benutzergruppenprofile, Aufgabenmodelle, Aufgabenobjekte, Affinity-Diagramme, User Journeys, Zielkataloge, Umgebungsmodelle, Informationsmodelle'])],
        ['Planung, Durchführung und HCD-Ergebnisse der NK-Erhebung (S. 238)', 'fact_check', '<a href="kapitel-3.html#ergebnisse-33">Planung, Durchführung und HCD-Ergebnisse der NK-Erhebung</a>'],
        ['', '', src('S. 208–229')]
    ]},
    istszenario: { icon: 'history_edu', title: 'Ist-Szenario (as-is scenario)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#narrativ', blocks: [
        ['Definition (S. 214)', 'menu_book', 'Eine erzählende, textuelle Beschreibung, wie ein Benutzer derzeit eine oder mehrere Aufgaben im aktuellen Nutzungskontext erledigt.' + ul(['Ist-Szenarien beschreiben den gegenwärtigen Nutzungskontext und dienen dazu, Erfordernisse zu erkennen und Nutzungsanforderungen abzuleiten.', 'Ist-Szenarien beschreiben vorrangig die Komponenten des gegebenen Nutzungskontextes im Zusammenspiel.', 'Ist-Szenarien machen in der Beschreibung des Verhaltens von Benutzenden ein oder mehrere Probleme deutlich, die die effiziente Erledigung der Aufgaben behindern.'])],
        ['', '', src('S. 214, 215')]
    ]},
    persona: { icon: 'person_outline', title: 'Persona (persona)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#narrativ', blocks: [
        ['Definition (S. 216)', 'menu_book', 'Eine Beschreibung eines konstruierten, aber realistischen Benutzers und was dieser bei der Benutzung eines interaktiven Systems beabsichtigt' + ul(['Personas sind erfundene Beispiele eines realen Benutzenden auf der Basis empirisch ermittelter Daten, zum Beispiel von Beobachtungen oder kontextuellen Interviews.', 'Personas verfügen typischerweise über einen Namen, Alter, einige Hintergrundinformationen, Ziele und Wünsche. Persona-Beschreibungen enthalten oft ein Foto.', 'Eine Persona-Beschreibung sollte Informationen über wesentliches Wissen im Themenfeld des interaktiven Systems und die entsprechenden Interessen der Persona im Themenfeld beinhalten.'])],
        ['', '', src('S. 216–221')]
    ]},
    affinity: { icon: 'dashboard', title: 'Affinity-Diagramm (affinity diagram)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#modellhaft', blocks: [
        ['Definition (S. 224)', 'menu_book', 'Ein strukturiertes Format für die Dokumentation von Ergebnissen aus der Analyse qualitativer Daten.'],
        ['', '', src('S. 224, 225')]
    ]},
    journey: { icon: 'route', title: 'User Journey Map (user journey map)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#modellhaft', blocks: [
        ['Definition (S. 227)', 'menu_book', 'Eine lineare Darstellung der Interaktion eines Benutzers mit dem interaktiven System und der betreibenden Organisation, die alle Berührungspunkte abdeckt, die die User Experience beeinflussen.'],
        ['User Journey (user journey) (S. 226)', 'route', 'Ein Verfahren, das dazu dient, eine Beschreibung der "Begegnung" von Benutzenden mit dem interaktiven System und der Organisation über alle Berührungspunkte (touchpoints) an denen die User Experience entsteht, für Dritte erfahrbar zu machen.'],
        ['', '', src('S. 226–229')]
    ]},
    zielkatalog: { icon: 'checklist', title: 'Zielkatalog (goal catalogue)', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#modellhaft', blocks: [
        ['Definition (S. 232)', 'menu_book', 'Ein Zielkatalog ist eine tabellarische Darstellung aller identifizierten Ziele, die für das Benutzerverhalten im Nutzungskontext Relevanz haben.' + ul(['Für jedes Ziel muss angegeben werden, für welche Benutzergruppen oder Personas es gültig ist.', 'Der Zielkatalog hilft zu prüfen, ob relevante Ziele für eine Benutzergruppe identifiziert und beschrieben wurden, und ob es Lücken oder Verständnisprobleme gibt.'])],
        ['', '', src('S. 232, 233')]
    ]},
    umgebungsmodell: { icon: 'map', title: 'Umgebungs- und Informationsmodel', tags: ['Verstehen', 'Kapitel 3.3'], link: 'kapitel-3.html#modellhaft', blocks: [
        ['Umgebungs- und Informationsmodel (S. 234)', 'menu_book', 'Umgebungsmodelle (sozial und physisch) beschreiben die besonderen Merkmale der jeweiligen Umgebung.<br>Informationsmodelle (Informationsobjekte) beschreiben die dem Aufgabenmodell und den Aufgabenobjekten innewohnende Struktur der Information.'],
        ['', '', src('S. 234–237')]
    ]},
    infoerf: { icon: 'info', title: 'Informatorisches Erfordernis (informational need)', tags: ['Verstehen', 'Kapitel 4.1'], link: 'kapitel-4.html#arten-erfordernisse', blocks: [
        ['Definition (S. 248)', 'menu_book', 'Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Informationen angibt.' + ul(['Informatorische Erfordernisse führen typischerweise zu Nutzungsanforderungen an interaktive Systeme, da diese an der Benutzungsschnittstelle die notwendigen Informationen bereitstellen.', 'Informatorische Erfordernisse sind häufig implizit und lassen sich erst durch die Betrachtung von Ressourcenerfordernissen explizieren.'])],
        ['', '', src('S. 248')]
    ]},
    ressourcenerf: { icon: 'inventory', title: 'Ressourcenerfordernis (resource need)', tags: ['Verstehen', 'Kapitel 4.1'], link: 'kapitel-4.html#arten-erfordernisse', blocks: [
        ['Definition (S. 249)', 'menu_book', 'Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Ressourcen angibt.' + ul(['Ressourcenerfordernisse führen typischerweise zu organisatorischen Anforderungen, deren Umsetzung sicherstellt, dass notwendige Ressourcen für die jeweilige Benutzergruppe verfügbar sind.', 'Ressourcenerfordernisse helfen informatorische Erfordernisse zu identifizieren, die wiederum typischerweise zu Nutzungsanforderungen an interaktive Systeme führen.'])],
        ['', '', src('S. 249')]
    ]},
    kompetenzerf: { icon: 'school', title: 'Kompetenzerfordernis (competence need)', tags: ['Verstehen', 'Kapitel 4.1'], link: 'kapitel-4.html#arten-erfordernisse', blocks: [
        ['Definition (S. 250)', 'menu_book', 'Ein Erfordernis, dass eine bestimmte Kompetenz oder Fähigkeit in einer Benutzergruppe vorhanden sein muss.' + ul(['Kompetenzerfordernisse führen typischerweise zu organisatorischen Anforderungen, deren Umsetzung sicherstellt, dass notwendige Kompetenzen für die jeweilige Benutzergruppe verfügbar sind.'])],
        ['', '', src('S. 250')]
    ]},
    verstehen: { icon: 'travel_explore', title: 'Verstehen und Festlegen des Nutzungskontextes', tags: ['Problemraum', 'Kapitel 3'], link: 'kapitel-1.html#kontext', blocks: [
        ['3. Nutzungskontextinformation erheben und dokumentieren (S. 154, 164, 207)', 'travel_explore', ul(['<a href="kapitel-3.html#rekrutieren">3.1 – Benutzer für die Erhebung von Nutzungskontextinformationen auswählen und rekrutieren</a>', '<a href="kapitel-3.html#durchfuehren">3.2 – Erhebung von Nutzungskontextinformationen vorbereiten und durchführen</a>', '<a href="kapitel-3.html#beschreiben">3.3 – Nutzungskontextbeschreibungen basierend auf Nutzungskontextinformationen erstellen</a>']) + '<p><a href="kapitel-3.html#erheben">Benutzer für NKA rekrutieren → Methoden für NKA festlegen → Ergebnisse der NKA dokumentieren</a></p>'],
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', '<b>Nutzungskontextbeschreibung</b>' + pills(['Benutzergruppenprofile', 'Personas', 'Aufgabenmodelle', 'Ist-Szenarien', 'User Journey Maps'])],
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Informationen zu und in "Frühform" von Bedürfnissen, Zielen, Wünschen, Forderungen, Funktionen'],
        ['Nutzungskontext (S. 23)', 'menu_book', 'Eine Kombination aus Benutzern, Zielen und Aufgaben, Ressourcen und Umgebungen'],
        ['', '', note('– Analyse: Probleme Unzulänglichkeiten', 'S. 8') + note('wen rekrutieren wir? · Informationen → Erfordernisse formulieren · dokumentieren als Basis', 'S. 21') + src('S. 8, 21, 23, 117')]
    ]},
    benutzer: { icon: 'person', title: 'Benutzer (user)', tags: ['Nutzungskontext', 'B'], link: 'kapitel-1.html#kontext', blocks: [
        ['Definition (S. 72)', 'menu_book', 'Eine Person, die mit einem interaktiven System interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.'],
        ['Unterschiede im Ziel der Interaktion', 'groups', ul(['<b>Primäre Benutzer:</b> Ein Benutzer, der das interaktive System für den beabsichtigten Zweck verwendet.', '<b>Sekundäre Benutzer:</b> Ein Benutzer, der unterstützende Aufgaben mit dem interaktiven System ausführt, beispielsweise um es zu warten oder um primäre Benutzer zu schulen.'])],
        ['keine Interaktion', 'visibility', '<b>Indirekte Benutzer:</b> Ein Benutzer, der die Ergebnisse des interaktiven Systems verwendet, aber nicht direkt mit dem interaktiven System interagiert.'],
        ['Benutzergruppe (S. 69)', 'badge', pills(['pers. Ziele', 'Eigenschaften', 'Einstellungen', '…'])],
        ['', '', note('Unterschiedl. Ziele / Aufgabenbezogen · z.B. techn./Administrativ · Haupt/primärnutzer', 'S. 73') + src('S. 69, 72–74')]
    ]},
    aufgaben: { icon: 'checklist', title: 'Aufgaben & Ziele', tags: ['Nutzungskontext', 'A&Z'], link: 'kapitel-1.html#aufgabenmodell', blocks: [
        ['Aufgabe (task), S. 76', 'task', 'Eine Menge von Aktivitäten, die durchgeführt werden, um ein bestimmtes Ziel zu erreichen'],
        ['Teilaufgabe (subtask), S. 77', 'subdirectory_arrow_right', 'Ein Schritt, der durchgeführt wird, um eine Aufgabe zu erledigen.'],
        ['Ziel (goal), S. 78', 'flag', 'Das beabsichtigte Ergebnis der Aufgabe.' + ul(['Beabsichtigte Ergebnisse sind beobachtbare Bedingungen, nachdem die Aufgabe abgeschlossen ist.'])],
        ['', '', note('Aufgabe → Ziel', 'S. 23') + src('S. 75–78')]
    ]},
    umgebung: { icon: 'domain', title: 'Umgebung (environment)', tags: ['Nutzungskontext', 'U'], link: 'kapitel-1.html#kontext', blocks: [
        ['Definition (S. 89)', 'menu_book', 'Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert'],
        ['Bedingungen', 'category', ul(['Die physischen Bedingungen beziehen sich auf alles, was mit einem physischen Parameter versehen ist, z.B. Raumgröße (in Quadratmetern), Lichtstärke (in Lumen), Lärm (in Dezibel).', 'Die technischen Bedingungen beziehen sich auf den Zugang zu Energie und Konnektivität, z.B. W-LAN-Zugang, Steckdosen, Telefonanschluss.', 'Die sozialen Bedingungen beziehen sich auf die Aspekte des Lebens, die von der Gesellschaft geprägt sind, z.B. Arbeitsbedingungen, Gesetze und Vorschriften, Zugang zu Informationen und KollegInnen.'])],
        ['', '', src('S. 89')]
    ]},
    ressourcen: { icon: 'inventory', title: 'Ressourcen (resources)', tags: ['Nutzungskontext', 'R'], link: 'kapitel-1.html#kontext', blocks: [
        ['Definition (S. 91)', 'menu_book', 'Alle Mittel, die erforderlich sind, um ein beabsichtigtes Ergebnis im Nutzungskontext zu erreichen'],
        ['wiederverwendbare Ressourcen', 'autorenew', pills(['Information', 'Support', 'Ausrüstung: Hardware, Software, physische Gegenstände'])],
        ['sich erschöpfende Ressourcen', 'hourglass_bottom', pills(['Zeit', 'physischer Aufwand', 'mentaler Aufwand', 'finanzieller Aufwand', 'Material'])],
        ['mit Bezug auf die Verwendung des Systems', 'priority_high', ul(['Ressourcen sind immer in Bezug auf die Nutzung des Systems definiert.', 'Benutzergruppen können ggf. nach der Verfügbarkeit von Ressourcen unterschieden werden.', 'Das System selbst ist keine Ausrüstung.'])],
        ['', '', src('S. 91')]
    ]},
    aufgabenmodell: { icon: 'account_tree', title: 'Aufgabenmodell (task model)', tags: ['Nutzungskontext', 'Prüfung 12 P'], link: 'kapitel-1.html#aufgabenmodell', blocks: [
        ['Definition (S. 79)', 'menu_book', 'Eine Beschreibung einer Aufgabe, die aus dem Grund für das Beginnen der Aufgabe, dem Ziel, das sie unterstützt, und den Teilaufgaben besteht, die ausgeführt werden müssen, um die Aufgabe zu erledigen'],
        ['Lebenszyklus einer Aufgabe (S. 81)', 'loop', pills(['Vorbedingung: Grund des Aktivwerdens', 'Planen', 'Vorbereiten', 'Durchführen', 'Ergebnis bewerten', 'Ergebnis weitergeben', 'Nachbedingung: Ziel'])],
        ['S. 79', 'list', ul(['Ein Aufgabenmodell beschreibt die Logik (Inhalt / Abarbeitung / Abfolge) einer Aufgabe an sich plus den Grund des Startens und das beabsichtigte Arbeitsergebnis der Aufgabe.'])],
        ['', '', note('Beschreibung d. Aufgabe ⇒ Grund + Ziel + Teilaufgaben', 'S. 79') + note('Attribute &lt; Teilaufgaben · Mini-Daten &lt; Aufgabenobjekte &lt; Ergebnis', 'S. 85') + src('S. 79–87')]
    ]},
    nkinfo: { icon: 'description', title: 'Nutzungskontext', tags: ['Problemraum'], link: 'kapitel-1.html#kette', blocks: [
        ['Zusammenhang (S. 24)', 'link', 'Enthält faktische Information, die auf Erfordernis hinweisen.'],
        ['Nutzungskontextinformation (S. 132)', 'menu_book', 'Fragment einer Nutzungskontextbeschreibung, das Erfordernisse enthält.' + ul(['Jedes Erfordernis beruht auf mindestens einer spezifischen Nutzungskontextinformation.', 'Eine einzelne Nutzungskontextinformation ersetzt keine (zusammenhängende) Nutzungskontextbeschreibung.'])],
        ['Beispiel (S. 132)', 'lightbulb', 'Viele ankommende Flugreisende am Frankfurter Flughafen haben als Reiseziel die Frankfurter Innenstadt und nutzen dazu den öffentlichen Nahverkehr.'],
        ['', '', src('S. 23, 24, 132')]
    ]},
    erfordernis: { icon: 'priority_high', title: 'Erfordernis', tags: ['Problemraum', 'Kapitel 4', 'Prüfung 40 P'], link: 'kapitel-1.html#kette', blocks: [
        ['Definition (S. 23)', 'menu_book', 'Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.'],
        ['Zusammenhang (S. 24)', 'link', 'Ist Grund für den Unterstützungsbedarf und stellt Basis für Anforderung.'],
        ['Erfordernis – Beispiel (S. 27)', 'lightbulb', 'Ein Vortragender (Benutzer) muss wissen wie viel Zeit er noch hat (Erfordernis / Voraussetzung), um den Vortrag rechtzeitig beenden zu können (Ziel).' + '<p style="margin-top:6px">Welche weiteren Erfordernisse gibt es zum Einhalten der Zeit?</p>'],
        ['Beispiel (S. 132)', 'lightbulb', 'Erfordernis: Der angekommene Fluggast muss nach Ankunft einen gültigen Fahrschein für die S-Bahn haben, um sein endgültiges Reiseziel legal zu erreichen.'],
        ['4. Erfordernisse in Nutzungskontextinformationen identifizieren (S. 242)', 'priority_high', '<a href="kapitel-4.html#erfordernisse-4">4.1 – Erfordernisse systematisch identifizieren und formulieren</a><p>Sicherstellen, dass die Nutzungsanforderungen zutreffend spezifiziert werden können, ohne dass diese lediglich auf Annahmen beruhen.</p>'],
        ['Arten von Erfordernissen (S. 247)', 'category', '<a href="kapitel-4.html#arten-erfordernisse">Arten von Erfordernissen</a>: notwendige Information · notwendige Ressource · notwendige Kompetenz'],
        ['Qualitätskriterien für Erfordernisse (S. 251)', 'workspace_premium', ul(['Erfordernisse sind immer im Nutzungskontext begründet', 'Erfordernisse sind immer objektiv für alle Benutzenden einer Benutzergruppe zutreffend', 'Erfordernisse sind immer unstrittig', 'Erfordernisse bestehen immer aus einer Voraussetzung, die gegeben sein muss in Form eines Zustands ("etwas verfügbar haben" oder "etwas wissen" oder "etwas können") und dem Ziel, dem diese Voraussetzung dient ("etwas entscheiden können" oder "etwas tun können").', 'Das (zu entwickelnde oder zu evaluierende) interaktive System kommt nicht im Erfordernis vor.']) + '<a href="kapitel-4.html#qualitaet-erfordernisse">Qualitätskriterien für Erfordernisse</a>'],
        ['Formulierungsschablone (Syntax) für Erfordernisse (S. 252)', 'text_fields', '<a href="kapitel-4.html#syntax-erfordernisse">Formulierungsschablone (Syntax) für Erfordernisse</a>'],
        ['Erfordernis (user need) (S. 245)', 'menu_book', '<a href="kapitel-4.html#erfordernis-def">Erfordernis (user need)</a>'],
        ['Erfordernisse identifizieren (S. 253)', 'manage_search', 'Jede Nutzungskontextinformation kann ein oder mehrere Erfordernisse enthalten. Es empfiehlt sich daher, Nutzungskontextbeschreibungen Satz für Satz durchzugehen und mit den folgenden Leitfragen Erfordernisse zu identifizieren:' + ul(['Welche Ressource wird jeweils innerhalb der beschriebenen Nutzungskontextinformation benötigt und warum (Ziel)?', 'Welche Information wird jeweils innerhalb der beschriebenen Nutzungskontextinformation benötigt und warum (Ziel)?', 'Welche Kompetenz wird jeweils innerhalb der beschriebenen Nutzungskontextinformation benötigt und warum (Ziel)?']) + '<a href="kapitel-4.html#erfordernisse-identifizieren">Erfordernisse identifizieren</a>'],
        ['', '', note('– wie viel Zeit ich noch benötige – wie viele Folien [übrig] hat er wie lang braucht er', 'S. 27') + note('Wunsch: Allgemeingültigkeit? → ja → Erfordernis', 'S. 42') + src('S. 23, 24, 27, 132')]
    ]},
    na: { icon: 'edit_note', title: 'Nutzungsanforderung (user requirement)', tags: ['Lösungsraum', 'Kapitel 5', 'Prüfung 26 P'], link: 'kapitel-1.html#nutzungsanforderungen', blocks: [
        ['Definition (S. 60)', 'menu_book', 'Anforderungen an die Nutzung, die die Grundlage für die Gestaltung und die Evaluierung eines interaktiven Systems bildet, um Erfordernisse zu erfüllen.'],
        ['Zusammenhang (S. 24)', 'link', 'Anforderung: Ist geforderte Leistungen an ein interaktives System, um eine angemessene Unterstützung zu bieten.'],
        ['Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen (S. 264)', 'text_fields', '<div class="template">Der Benutzer muss am System eine <span class="slot">&lt;Information oder Ressource&gt;</span><br><span class="tpl-gruppe"><span class="tpl-zeilen">eingeben /<br>auswählen /<br>erkennen können</span><span class="tpl-label">Anforderung an die Nutzung</span></span><br>unter <span class="slot">&lt;Bedingung (optional)&gt;</span>.</div><a href="kapitel-5.html#syntax-qual">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen</a>'],
        ['und … wichtiges Qualitätskriterium im URE (S. 41)', 'rule', '<b>begründet:</b> Muss auf einem Erfordernis beruhen.'],
                ['Nutzungsanforderung (user requirement) (S. 261)', 'menu_book', 'Anforderungen an die Nutzung, die die Basis für die Gestaltung und Evaluierung eines interaktiven Systems in Hinblick auf identifizierte Erfordernisse bilden.'],
        ['Kapitel 5 (S. 259–278)', 'menu_book', '<a href="kapitel-5.html#na-ableiten-5">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#na-def-5">Nutzungsanforderung (user requirement)</a><a href="kapitel-5.html#guete-qual">Gütekriterien für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#syntax-qual">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#ableiten-qual">Ableiten von qualitativen Nutzungsanforderungen</a><a href="kapitel-5.html#guete-quant">Gütekriterien für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#elemente-quant">Elemente für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#widerspruch">Sich widersprechende Erfordernisse identifizieren</a><a href="kapitel-5.html#na-strukturieren">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#aufgabenmodell-struktur">Aufgabenmodell als Strukturgebendes Format</a><a href="kapitel-5.html#uebung-6">Praktische Übung 6</a>'],
        ['', '', note('Lösungsneutral', 'S. 24') + src('S. 24, 41, 60, 101–118')]
    ]},
    festlegen: { icon: 'edit_note', title: 'Festlegen der Nutzungsanforderungen', tags: ['Problem-/Lösungsraum', 'Kapitel 4, 5, 6'], link: 'kapitel-1.html#nutzungsanforderungen', blocks: [
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', pills(['Erfordernisse', 'Nutzungsanforderungen'])],
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Ableitung aus Erfordernissen und Stakeholderanforderungen' + '<br>Priorisierung in der Planung der Produkt Road Map'],
        ['Agenda (S. 9)', 'bookmark', pills(['4 Erfordernisse identifizieren', '5 Nutzungsanforderungen ableiten', '6 Nutzungsanforderungen konsolidieren & priorisieren'])],
                ['5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren (S. 259)', 'flag', 'Sicherstellen, dass Nutzungsanforderungen zutreffend aus Erfordernissen hergeleitet werden und so erforderliche Handlungen am interaktiven System spezifiziert werden und überflüssige Handlungen vermieden werden können.<br><a href="kapitel-5.html#na-ableiten-5">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#na-def-5">Nutzungsanforderung (user requirement)</a><a href="kapitel-5.html#guete-qual">Gütekriterien für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#syntax-qual">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#ableiten-qual">Ableiten von qualitativen Nutzungsanforderungen</a><a href="kapitel-5.html#guete-quant">Gütekriterien für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#elemente-quant">Elemente für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#widerspruch">Sich widersprechende Erfordernisse identifizieren</a><a href="kapitel-5.html#na-strukturieren">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#aufgabenmodell-struktur">Aufgabenmodell als Strukturgebendes Format</a><a href="kapitel-5.html#uebung-6">Praktische Übung 6</a>'],
        ['6. Nutzungsanforderungen konsolidieren (S. 279)', 'flag', 'Sicherstellen, dass erhobene Nutzungsanforderungen durch Benutzende als vollständig und richtig bestätigt werden (Konsolidierung) und die jeweilige Relevanz jeder Nutzungsanforderung eingestuft ist, so dass die Priorisierung für die Umsetzung aus Projektsicht festgelegt werden kann.<br><a href="kapitel-6.html#konsolidieren-6">6. Nutzungsanforderungen konsolidieren</a><a href="kapitel-6.html#kano">Kano-Schema (Kano scheme)</a>'],
        ['6. Nutzungsanforderungen konsolidieren (S. 287)', 'flag', 'Sicherstellen, dass Nutzungsanforderungen bezüglich ihrer Umsetzung durch die Projektbeteiligten (zeitlich) priorisiert werden müssen, da typischerweise nicht alle Nutzungsanforderungen im gleichen Zeitrahmen umgesetzt werden können und mittels einer zeitlichen Priorisierung Konflikte über die Umsetzung / Nichtumsetzung von Anforderungen vermieden werden.<br><a href="kapitel-6.html#umsetzung-62">6. Nutzungsanforderungen konsolidieren</a><a href="kapitel-6.html#priorisierung">Priorisierung (prioritization)</a><a href="kapitel-6.html#na-in-hcd">Qualitative Nutzungsanforderungen in der Menschzentrierten Gestaltung</a>'],
        ['', '', note('was sollen wir testen?', 'S. 21') + note('6: mit User-Brille', 'S. 9') + src('S. 8, 9, 21, 117')]
    ]},
    qual: { icon: 'mouse', title: 'Qualitative Nutzungsanforderung (qualitative user requirement)', tags: ['WAS', 'Gestaltung'], link: 'kapitel-1.html#nutzungsanforderungen', blocks: [
        ['Definition (S. 102)', 'menu_book', 'Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.'],
        ['S. 60', 'list', ul(['Grundlage für die Gestaltung eines interaktiven Systems', 'Richtschnur für das Design', 'bestimmen die Interaktionsschritte', 'sind Grundlage für Funktionen des Systems']) + 'Art und Weise der Interaktion, um Ziele zu erreichen → Interaktionsanforderungen'],
        ['gut formuliert (S. 105)', 'check_circle', 'Der Benutzer muss am System ein Fahrzeug mit Automatikgetriebe auswählen können.'],
        ['falsch formuliert (S. 105)', 'cancel', ul(['Die Benutzungsschnittstelle muss gebrauchstauglich sein und alle Benutzeraufgaben unterstützen. (zu allgemein)', 'Die Benutzungsschnittstelle muss eine große rote Schaltfläche "Auto mieten" haben. (Lösung)'])],
                ['Gütekriterien für qualitative Nutzungsanforderungen (S. 263)', 'workspace_premium', ul(['Müssen immer als Anforderung an die Nutzung und nicht als geforderte Lösung formuliert werden.', 'Müssen sich immer auf eine oder mehrere Benutzergruppen beziehen.', 'Müssen immer durch Erfordernisse im Nutzungskontext begründet sein.', 'Müssen immer aus einer Anforderung an die Nutzung / Interaktion (etwas eingeben, auswählen, erkennen können) eines interaktiven Systems, ggf. unter welcher Bedingung (und ggf. Referenz zu Erfordernis) bestehen.']) + '<a href="kapitel-5.html#guete-qual">Gütekriterien für qualitative Nutzungsanforderungen</a>'],
        ['Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen (S. 264)', 'text_fields', '<div class="template">Der Benutzer muss am System eine <span class="slot">&lt;Information oder Ressource&gt;</span><br><span class="tpl-gruppe"><span class="tpl-zeilen">eingeben /<br>auswählen /<br>erkennen können</span><span class="tpl-label">Anforderung an die Nutzung</span></span><br>unter <span class="slot">&lt;Bedingung (optional)&gt;</span>.</div><a href="kapitel-5.html#syntax-qual">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen</a>'],
        ['Ableiten von qualitativen Nutzungsanforderungen (S. 265)', 'help_outline', ul(['Was muss der Benutzer am interaktiven System erkennen können, um das Erfordernis zu befriedigen?', 'Was muss der Benutzer am interaktiven System auswählen können, um das Erfordernis zu befriedigen?', 'Was muss der Benutzer am interaktiven System eingeben können, um das Erfordernis zu befriedigen?']) + '<a href="kapitel-5.html#ableiten-qual">Ableiten von qualitativen Nutzungsanforderungen</a>'],
        ['', '', note('WAS · Interaktionsschritte · Gestaltung · Offene Fragen', 'S. 60') + note('woher hab ich die Informationen', 'S. 102') + src('S. 60, 102–107')]
    ]},
    quant: { icon: 'speed', title: 'Quantitative Nutzungsanforderung (quantitative user requirement)', tags: ['WIE', 'Evaluierung'], link: 'kapitel-1.html#nutzungsanforderungen', blocks: [
        ['Definition (S. 109)', 'menu_book', 'Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, User Experience, Barrierefreiheit und der Vermeidung von Schäden durch die Benutzung.'],
        ['S. 60', 'list', ul(['Grundlage für die Evaluierung eines interaktiven Systems', 'Kriterien für die Akzeptanz, Evaluierung', 'bestimmen die menschzentrierte Qualität', 'sind überprüfbare Kriterien der Nutzung des Systems']) + 'Messbares Ziel für die menschzentrierte Qualität → Anforderungen an die Nutzungsqualität'],
        ['gut formuliert (S. 112)', 'check_circle', '80% der Benutzer, die die Autovermietungswebseite mindestens zweimal benutzt haben, müssen innerhalb von 5 Minuten einen Kleinwagen ab Flughafen Frankfurt (Deutschland) für zwei Tage beginnend ab morgen 09:00 Uhr mieten können.'],
        ['falsch formuliert (S. 112)', 'cancel', 'Benutzer sollten in der Lage sein die Aufgabe der Automiete zufriedenstellend zu beenden.'],
                ['Gütekriterien für quantitative Nutzungsanforderungen (S. 266)', 'workspace_premium', ul(['Müssen immer als Anforderung an die Nutzung und nicht als geforderte Lösung formuliert werden.', 'Müssen sich immer auf eine oder mehrere Benutzergruppen beziehen.', 'Quantitative Nutzungsanforderungen müssen sich immer durch Stakeholderanforderungen begründen lassen.', 'Quantitative Nutzungsanforderungen müssen als Akzeptanzkriterien für die Nutzungsqualität dienen können.']) + '<a href="kapitel-5.html#guete-quant">Gütekriterien für quantitative Nutzungsanforderungen</a>'],
        ['Elemente für quantitative Nutzungsanforderungen (S. 267)', 'text_fields', ul(['Stakeholder, der die Anforderung stellt (z.B. Arbeitgeber oder Gesetzgeber)', 'betroffene Benutzergruppe, die die Anforderung während der Nutzung erfüllen muss', 'Anzahl / Prozentzahl der Benutzenden, die die Anforderung erfüllen müssen', 'Quantität (z.B. maximal zulässige Zeit, Fehlerrate, Genauigkeit)', 'Gegenstand der Nutzung (was bei der Ausführung der Aufgabe gemacht wird)', 'spezifische Bedingung(en) des Nutzungskontextes unter denen die Nutzung stattfindet.']) + '<a href="kapitel-5.html#elemente-quant">Elemente für quantitative Nutzungsanforderungen</a>'],
        ['', '', note('WIE · usability, ux, barrierefreiheit, Schädenvermeidung · Evaluierung · Zustimmung ja/nein, Bewerten 1–5', 'S. 60') + note('nicht messbar', 'S. 112') + src('S. 60, 109–113')]
    ]},
    kano: { icon: 'sentiment_satisfied', title: 'Kano-Schema (Kano scheme)', tags: ['Kapitel 6.1', 'Lösungsraum'], link: 'kapitel-6.html#kano', blocks: [
        ['Definition (S. 280)', 'menu_book', 'Ein Einstufungssystem für die Priorität von qualitativen Nutzungsanforderungen oder (daraus abgeleiteten) Funktionen eines interaktiven Systems aus Benutzersicht.'],
        ['Vorgehen Kano-Schema (S. 282)', 'list', 'Es werden jeweils 5 – 15 Personen einer Benutzergruppe (Vermeidung von Meinungsverschiedenheiten) eingeladen. Nach Erklärung des Vorgehens und der Quelle der Merkmale (Nutzungsanforderungen / Teilaufgaben), werden diese wie folgt bewertet:<br><a href="kapitel-6.html#kano">Kano-Schema (Kano scheme)</a><a href="kapitel-6.html#kano-notation">Notation Kano-Schema</a>'],
        ['', '', src('S. 280, 282, 283')]
    ]},
    priorisierung: { icon: 'low_priority', title: 'Priorisierung (prioritization)', tags: ['Kapitel 6.2', 'Lösungsraum'], link: 'kapitel-6.html#priorisierung', blocks: [
        ['Definition (S. 290)', 'menu_book', 'Eine Aktivität, bei der festgelegt wird, ob und wann eine identifizierte Anforderung umgesetzt wird.' + ul(['Eine Priorisierung sollte immer zuerst in Hinblick auf die menschzentrierte Qualitätsziele vorgenommen werden. "Wie relevant ist die Umsetzung der Anforderung in Hinblick auf die Benutzenden?"', 'In einem zweiten Schritt sollte die Priorisierung aus der Perspektive weitere Stakeholder vorgenommen werden.', 'Den Stakeholdern sollte die Relevanz der Nutzungsanforderungen vermittelt werden. Basis für die'])],
        ['Produkt-Roadmap (product road map) (S. 291)', 'map', 'Darstellung, die zeigt, wie sich ein Produkt über Releases hinweg in definierten Zeiträumen bzgl. seines Funktionsumfangs entwickeln soll.'],
        ['Schema der Priorisierung (S. 292)', 'list', '<a href="kapitel-6.html#priorisierung">Priorisierung (prioritization)</a><a href="kapitel-6.html#priorisierung-schema">Schema der Priorisierung</a>'],
        ['', '', src('S. 290–292, 295')]
    ]},
    stakeholder: { icon: 'stacks', title: 'Stakeholder- und Systemanforderung', tags: ['Kapitel 1.2'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['Stakeholderanforderungen (S. 55)', 'layers', ul(['Gesetzliche / regulatorische Anforderungen · Gesetzgeber', 'Marktanforderungen · Kaufentscheider', 'Organisatorische Anforderungen · Betreiber der Organisation', 'Fachliche Anforderungen · Indirekte Benutzer', 'Nutzungsanforderungen · Primäre, sekundäre Benutzer'])],
        ['sind Basis für', 'south', '<b>Systemanforderungen</b>'],
        ['S. 38', 'bolt', 'Stakeholderanforderungen, die nicht in Systemanforderungen überführt werden, tragen nicht zur menschzentrierten Qualität bei.'],
        ['', '', note('Bsp. Fahrkarte kaufen ↳ welche Infos gehören drauf · User: Käufer · Indirekt: Schaffner, Beamter v. Finanzamt, Controlling · Organisatorisch: Finanzamt', 'S. 55') + src('S. 38, 55–61, 100')]
    ]},
    gestalten: { icon: 'design_services', title: 'Gestalten von Lösungen, die Nutzungsanforderungen erfüllen', tags: ['Lösungsraum'], link: 'kapitel-1.html#aufgabenmodell', blocks: [
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', pills(['Aufgabenmodelle der Gestaltung', 'Nutzungsszenarien', 'Storyboards', 'User Journey Maps der Gestaltung', 'Informationsarchitektur', '– Navigationsstruktur', 'Style Guide', 'Wireframes', 'Low-, High-Fidelity Prototypen'])],
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Grundlage für Design, Funktionen und zu erreichende MZ-Qualität'],
        ['Lösung (S. 23)', 'menu_book', 'Ein Produktmerkmal oder mehrere zusammenhängende Produktmerkmale, die spezifiziert oder realisiert sind und eine oder mehrere Anforderungen erfüllen sollen.'],
                ['Nutzungsanforderungen in der Menschzentrierten Gestaltung (S. 293, 294)', 'compare', '<a href="kapitel-6.html#na-in-hcd">Qualitative Nutzungsanforderungen in der Menschzentrierten Gestaltung / Quantitative Nutzungsanforderungen in der Menschzentrierten Gestaltung</a>'],
        ['', '', note('– neues Designsystem start hier · – neue Tech-Anforder. start hier', 'S. 8') + note('Qualitativ · Quantitativ · MZ = Menschenzentriert', 'S. 117') + src('S. 8, 23, 117')]
    ]},
    regeln: { icon: 'style', title: 'Gestaltungsregel (user interface guideline)', tags: ['Gestalten'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['Definition (S. 37)', 'menu_book', 'Konkrete, spezifische Instruktion oder Empfehlung für das Design und die Implementierung von Benutzungsschnittstellen, die wenig Interpretationsspielraum lässt, sodass sie konsistent umgesetzt werden kann.'],
        ['S. 37', 'list', ul(['Eine Gestaltungsregel ist bindend und sorgt für Konsistenz.', 'Gestaltungsregeln betreffen das Verhalten und Aussehen von User Interface Elementen, Schriftarten, die Verwendung von Farben, die Formulierung von Fehlermeldungen, die Interaktionsstruktur und mehr.', 'Um die Konsistenz der Benutzungsschnittstelle zu gewährleisten, sollten Gestaltungsregeln zwingend vorgeschrieben werden mit klar festgelegten Verfahren für zulässige Abweichungen aus triftigen Gründen.']) + 'Sammlungen von Gestaltungsregeln sind Styleguides. Eine Sammlung von UI-Komponenten und Gestaltungsrichtlinien zur direkten Umsetzung und Anwendung sind Desginsysteme.'],
        ['S. 38', 'verified', 'Gestaltungsregeln (generische Anforderung) · Einhaltung wirkt auf · menschzentrierte Qualität'],
        ['', '', note('Styleguides, Design Systeme', 'S. 37') + src('S. 37, 38')]
    ]},
    amgest: { icon: 'auto_fix_high', title: 'Beschreibung – Aufgabenmodell für die Gestaltung (task model used for design)', tags: ['Gestalten'], link: 'kapitel-1.html#aufgabenmodell', blocks: [
        ['S. 94', 'menu_book', 'Aufgabenmodelle des gegenwärtigen Nutzungskontextes können in Aufgabenmodelle für die Gestaltung überführt werden. Es wird berücksichtigt, wie die Aufgabe durch das zu entwickelnde interaktive System unterstützt wird.'],
        ['Eine Anpassung des Aufgabenmodells wird etwa aus folgenden Gründen vorgenommen:', 'edit', ul(['Der Nutzungskontext für die Gestaltung wurde eingeschränkt (z.B. wird nur eine bestimmte Benutzergruppe unterstützt).', 'Es gibt weniger Teilaufgaben aufgrund von Automatisierung oder zusätzliche Teilaufgaben aufgrund von Einschränkungen bei der Implementierung (z.B. eine bestimmte Technologie, die für Benutzende Teilaufgaben mit sich bringen).', 'Die Aufgaben der Benutzenden wurden im frühen Design vereinfacht.']) + 'Die Anpassung von Aufgabenmodellen kann das Löschen, Hinzufügen oder Ändern von Teilaufgaben innerhalb jeder unterstützten Aufgabe umfassen.'],
                ['Aufgabenmodell als Strukturgebendes Format (S. 272)', 'account_tree', 'Damit die Nutzungsanforderungen keine strukturlose Liste werden, arbeiten/entwickeln wir aufgaben-bezogen:<br><a href="kapitel-5.html#aufgabenmodell-struktur">Aufgabenmodell als Strukturgebendes Format</a>'],
        ['Aufgabenmodell der Gestaltung: Fahrzeugbuchung über Webseite leihen (S. 276)', 'table_rows', '<a href="kapitel-5.html#aufgabenmodell-gestaltung">Aufgabenmodell der Gestaltung: Fahrzeugbuchung über Webseite leihen</a>'],
        ['', '', src('S. 94')]
    ]},
    artefakte: { icon: 'web', title: 'Low-, High-Fidelity Prototypen', tags: ['Gestalten'], link: 'kapitel-1.html#kette', blocks: [
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', pills(['Storyboards', 'Wireframes', 'Low-, High-Fidelity Prototypen'])],
        ['Lösung (S. 24)', 'link', 'Ist interaktives System mit geeigneten Merkmalen zur Unterstützung.'],
        ['', '', src('S. 8, 24')]
    ]},
    evaluieren: { icon: 'fact_check', title: 'Evaluieren der Gestaltungslösung gegen Nutzungsanforderungen', tags: ['Lösungsraum'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['HCD-Ergebnisse (S. 8)', 'inventory_2', pills(['Usability-Evaluierungsberichte'])],
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Testaufgabe und Kriterium der Evaluierung'],
        ['Auf welche Art von Umsetzung hin können Anforderungen überprüft werden? (S. 62)', 'help', pills(['Verifizierung', 'Validierung'])],
                ['Nutzungsanforderungen in der Menschzentrierten Gestaltung (S. 293, 294)', 'compare', '<a href="kapitel-6.html#na-in-hcd">Qualitative Nutzungsanforderungen in der Menschzentrierten Gestaltung / Quantitative Nutzungsanforderungen in der Menschzentrierten Gestaltung</a>'],
        ['', '', note('wie gut ist\'s wirklich · – bei bestehender Anwendung start hier · – früh testen · Test', 'S. 8') + src('S. 8, 62–64, 117')]
    ]},
    verif: { icon: 'checklist_rtl', title: 'Verifizierung (verification)', tags: ['Evaluieren'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['Definition (S. 64)', 'menu_book', 'Prozess, bei dem festgestellt wird, ob alle Anforderungen in entsprechende Produktmerkmale umgesetzt wurden.'],
        ['S. 64', 'list', ul(['Eine inspektions-basierte Usability-Evaluierung, bei der explizit die Erfüllung von Inspektionskriterien (Nutzungsanforderungen und / oder Gestaltungsregeln) überprüft wird, ist eine Verifizierung.', 'Ist die Prüfung, ob jede Anforderung umgesetzt wurde, bzw. ein Produktmerkmal dazu existiert, wie es vorab spezifiziert wurde.'])],
        ['', '', note('Umgesetzt? ja/nein · Wurden Anforderungen alle umgesetzt? · Styleguide-einhaltung', 'S. 64') + src('S. 64')]
    ]},
    valid: { icon: 'how_to_reg', title: 'Validierung (validation)', tags: ['Evaluieren'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['Definition (S. 63)', 'menu_book', 'Prozess, bei dem festgestellt wird, ob die Stakeholderanforderungen aus Sicht der fordernden Stakeholder angemessen umgesetzt wurden.'],
        ['S. 63', 'list', ul(['Ein Usability-Test, bei dem explizit die Erfüllung von Nutzungsanforderungen überprüft wird, ist eine Validierung.', 'Ist die Prüfung, ob Umsetzung aus Nutzersicht funktioniert.'])],
        ['', '', note('kann der Nutzer es nutzen aus User/Stakeholder Sicht · Usability Inspektion · Usability Test', 'S. 63') + src('S. 63')]
    ]},
    erfuellt: { icon: 'task_alt', title: 'Gestaltungslösung erfüllt die Nutzungsanforderungen', tags: ['Ausgang'], link: 'kapitel-1.html#anforderungen', blocks: [
        ['Nutzungsanforderungen in der HCD (S. 117)', 'edit_note', 'Funktion oder Merkmal im Produkt, System'],
        ['Qualität (S. 31)', 'verified', 'Grad der Erfüllung von Anforderungen durch ein interaktives System.'],
        ['', '', src('S. 7, 31, 117')]
    ]},
    problemraum: { icon: 'help_outline', title: 'Problemraum (problem space)', tags: ['Problemraum (Benutzende): Nutzungskontext, Erfordernis'], link: 'kapitel-1.html#kette', blocks: [
        ['Definition (S. 25)', 'menu_book', 'Sammelbegriff für den Nutzungskontext und die darin enthaltenen Erfordernisse zur Zielerreichung der Benutzer.'],
        ['', '', src('S. 24–26')]
    ]},
    loesungsraum: { icon: 'lightbulb', title: 'Lösungsraum (solution space)', tags: ['Lösungsraum: Anforderung, Lösung'], link: 'kapitel-1.html#kette', blocks: [
        ['Definition (S. 25)', 'menu_book', 'Sammelbegriff für die Nutzungsanforderungen und Lösungen, die die Erfordernisse zur Zielerreichung der Benutzer befriedigen.'],
        ['S. 50', 'list', 'Anforderungen kreisen passende Lösungen ein und verwerfen unpassende Lösungen, da Lösungsvorschläge auf Fakten anstatt Meinungen basieren. Der Lösungsraum muss zum Problemraum passen.'],
        ['', '', note('Lösungsneutral', 'S. 24') + src('S. 24–26, 50')]
    ]},
    kap7: { icon: 'cable', title: '7. Schnittstellen des User Requirements Engineer mit anderen Rollen und Disziplinen', tags: ['Kapitel 7', '+ zusätzliche Inhalte'], link: 'kapitel-7.html#schnittstellen-7', blocks: [
        ['7.1 (S. 296)', 'flag', 'Sicherstellen, dass der User Requirements Engineer andere relevante Disziplinen und Rollen kennt und seine Arbeitsergebnisse den Rollen innerhalb dieser Disziplinen kommunizieren kann.'],
        ['Disziplinen (S. 297–299)', 'groups', '<a href="kapitel-7.html#disziplinen">Produktmanagement, Produktmanager (product management, product manager)</a><br>Requirements Engineering · Systems Engineering'],
        ['Aufgaben und Schnittstellen des User Requirements Engineer (S. 300)', 'hub', 'Planung des Usability Engineerings ↔ Usability Engineer · Release-Planung und Product Roadmap ↔ Produkt- und Projektmanager · Planung (Backlog item) und User Stories ↔ Product Owner · Grundlage für Designentscheidungen ↔ Interaktionsdesigner · Rekrutierung, Testaufgaben, Abnahmekriterien ↔ Usability Tester · Testfälle ↔ Softwaretester<br><a href="kapitel-7.html#aufgaben-ure">Aufgaben und Schnittstellen des User Requirements Engineer</a>'],
        ['', '', note('296–300 · nicht prüfungsrelevant', 'S. 9') + src('S. 9, 296–300')]
    ]},
    pruefung: { icon: 'assignment', title: 'Überblick Praktische Prüfung – Aufgaben und Punkte', tags: ['100 Punkte', '5:45'], link: 'pruefung-praxis.html#pruefung', blocks: [
        ['Aufgaben und Punkte (S. 256)', 'list', '<ol><li>Ist-Szenario des Videos erstellen – 3 Punkte – max. 3</li><li>max. 4 Interviewfehler identifizieren – 4 mal 1 Punkt – max. 4</li><li>alle Benutzergruppen aus den 4 Ist-Szenarien identifizieren – 5 mal 1 Punkt – max. 5</li><li>für ein Ist-Szenario, die darin enthaltenen Erfordernisse identifizieren, 10 markieren – 10 mal 4 Punkte – max. 40</li><li>Aus den Erfordernissen alle Nutzungsanforderungen ableiten, 13 markieren – 13 mal 2 Punkte – max. 26</li><li>Aufgabenmodell: Vor- und Nachbedingung, Teilaufgaben – 1 + 1 plus 5 mal 2 Punkte – max. 12</li><li>Nutzungsanforderungen den Teilaufgaben des Aufgabenmodells zuordnen – max. 10</li></ol><p><b>total 100 Punkte</b></p><a href="pruefung-praxis.html#pruefung">Zur Prüfungsübersicht mit Sprüngen</a>'],
        ['', '', src('S. 256')]
    ]}
};

const FLOW = ['planung', 'qziele', 'verstehen', 'nkinfo', 'erfordernis', 'na', 'festlegen', 'qual', 'quant', 'gestalten', 'evaluieren', 'verif', 'valid', 'erfuellt'];
const drawer = document.getElementById('drawer'), drawerBg = document.getElementById('drawerBg');
let current = null;
function openDetail(k) {
    const d = D[k]; if (!d) return;
    current = k;
    document.getElementById('drIcon').textContent = d.icon;
    document.getElementById('drTitle').textContent = d.title;
    document.getElementById('drTags').innerHTML = d.tags.map(t => '<span class="badge">' + t + '</span>').join('');
    document.getElementById('drBody').innerHTML = d.blocks.map(b => '<div class="d-block">' + (b[0] ? '<div class="d-title"><span class="material-icons">' + b[1] + '</span>' + b[0] + '</div>' : '') + b[2] + '</div>').join('');
    document.getElementById('drBody').scrollTop = 0;
    const link = document.getElementById('drLink'); link.setAttribute('href', d.link);
    const i = FLOW.indexOf(k);
    document.getElementById('drPrev').disabled = i <= 0;
    document.getElementById('drNext').disabled = i < 0 || i >= FLOW.length - 1;
    document.querySelectorAll('.master .hot').forEach(g => g.classList.toggle('sel', g.dataset.k === k));
    drawer.classList.add('open'); drawerBg.classList.add('open'); drawer.setAttribute('aria-hidden', 'false');
}
function closeDetail() {
    drawer.classList.remove('open'); drawerBg.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true');
    document.querySelectorAll('.master .sel').forEach(g => g.classList.remove('sel'));
}
document.querySelectorAll('.master .hot, .hot-btn').forEach(g => {
    if (g.tagName.toLowerCase() === 'g') { g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); }
    g.addEventListener('click', () => openDetail(g.dataset.k));
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetail(g.dataset.k); } });
});
document.getElementById('drClose').addEventListener('click', closeDetail);
drawerBg.addEventListener('click', closeDetail);
document.getElementById('drLink').addEventListener('click', closeDetail);
document.getElementById('drPrev').addEventListener('click', () => { const i = FLOW.indexOf(current); if (i > 0) openDetail(FLOW[i - 1]); });
document.getElementById('drNext').addEventListener('click', () => { const i = FLOW.indexOf(current); if (i >= 0 && i < FLOW.length - 1) openDetail(FLOW[i + 1]); });
document.addEventListener('keydown', e => {
    if (!drawer.classList.contains('open')) return;
    if (e.key === 'Escape') closeDetail();
    if (e.key === 'ArrowRight') document.getElementById('drNext').click();
    if (e.key === 'ArrowLeft') document.getElementById('drPrev').click();
});

document.querySelectorAll('[data-layer]').forEach(btn => {
    btn.addEventListener('click', () => {
        const layer = document.getElementById('layer-' + btn.dataset.layer);
        btn.classList.toggle('on', !layer.classList.toggle('hidden'));
    });
});

/* ---------- Prozesstabelle: dieselbe Karte als Übersicht ---------- */
if (document.getElementById('pTable')) {
    /* Zeilen = HCD-Aktivitäten; Zuordnung wie in den Ebenen der Grafik (Kapitel, Prüfungspunkte) */
    const PT = [
        { k: 'hcd', raum: 'Basis', kap: ['1', '7'], themen: ['problemraum', 'loesungsraum', 'nkinfo', 'stakeholder'],
          theorie: [['1', 1, 15]], praxis: [],
          lesen: '<a href="seminar.html#rollen">Rollen und Begriffe</a><a href="kapitel-1.html#kette">Die Kette</a><a href="kapitel-1.html#anforderungen">Anforderungsarten</a><a href="kapitel-7.html#schnittstellen-7">7. Schnittstellen des User Requirements Engineer mit anderen Rollen und Disziplinen</a><a href="kapitel-7.html#disziplinen">Produktmanagement, Produktmanager (product management, product manager)</a><a href="kapitel-7.html#aufgaben-ure">Aufgaben und Schnittstellen des User Requirements Engineer</a>' },
        { k: 'planung', raum: 'Problemraum', kap: ['2'], themen: ['qziele', 'anlass', 'nka', 'info', 'methoden'],
          theorie: [['2', 16, 19]], praxis: [],
          lesen: '<a href="kapitel-2.html#planen">NKA planen</a><a href="kapitel-2.html#methoden">Design Thinking, Lean UX</a>' },
        { k: 'verstehen', raum: 'Problemraum', kap: ['3', '4'], themen: ['benutzer', 'aufgaben', 'umgebung', 'ressourcen', 'aufgabenmodell', 'rekrutierung', 'interview', 'rollen', 'beobachtung', 'fokusgruppe', 'mentales', 'nkbeschreibung', 'istszenario', 'persona', 'affinity', 'journey', 'zielkatalog', 'umgebungsmodell', 'nkinfo', 'erfordernis', 'infoerf', 'ressourcenerf', 'kompetenzerf'],
          theorie: [['3', 20, 24], ['4', 25, 29]],
          praxis: [['Ist-Szenario', 3, 'szenario'], ['Interviewfehler', 4, 'interviewer'], ['Benutzergruppen', 5, 'gruppen'], ['Erfordernisse', 40, 'erfordernisse'], ['Aufgabenmodell', 12, 'aufgabenmodell']],
          lesen: '<a href="kapitel-1.html#kontext">Nutzungskontext</a><a href="kapitel-1.html#aufgabenmodell">Aufgabenmodell</a><a href="kapitel-3.html#erheben">Überblick Kapitel 3</a><a href="kapitel-3.html#rekrutieren">3.1 Rekrutieren</a><a href="kapitel-3.html#durchfuehren">3.2 Erhebung durchführen</a><a href="kapitel-3.html#beobachtung">Beobachtung</a><a href="kapitel-3.html#fokusgruppe">Fokusgruppe</a><a href="kapitel-3.html#methodenwahl">Methoden wählen</a><a href="kapitel-3.html#mentale-modelle">Mentale Modelle, Wünsche</a><a href="kapitel-3.html#beschreiben">3.3 Beschreibungen</a><a href="kapitel-3.html#nk-beschreibung">Nutzungskontextbeschreibung</a><a href="kapitel-3.html#narrativ">Narrative Beschreibungen</a><a href="kapitel-3.html#modellhaft">Modellhafte Beschreibungen</a><a href="kapitel-3.html#ergebnisse-33">Planung und Ergebnisse der NK-Erhebung</a><a href="kapitel-4.html#erfordernisse-4">4. Erfordernisse identifizieren</a><a href="kapitel-4.html#erfordernis-def">Erfordernis (user need)</a><a href="kapitel-4.html#arten-erfordernisse">Arten von Erfordernissen</a><a href="kapitel-4.html#qualitaet-erfordernisse">Qualitätskriterien für Erfordernisse</a><a href="kapitel-4.html#syntax-erfordernisse">Formulierungsschablone für Erfordernisse</a><a href="kapitel-4.html#erfordernisse-identifizieren">Erfordernisse identifizieren</a><a href="kapitel-4.html#nki-typen-beispiele">NKI → Typen von Erfordernissen</a><a href="kapitel-4.html#ueberblick-praxis">Überblick Praktische Prüfung</a><a href="kapitel-4.html#ure-erfordernisse">URE Story Kapitel 4</a><a href="kapitel-1.html#kette">Die Kette</a>' },
        { k: 'festlegen', raum: 'Problem-/Lösungsraum', kap: ['4', '5', '6'], themen: ['na', 'qual', 'quant', 'stakeholder', 'kano', 'priorisierung'],
          theorie: [['5', 30, 36], ['6', 37, 40]],
          praxis: [['Nutzungsanforderungen', 26, 'erfordernisse'], ['Zuordnung zu Teilaufgaben', 10, 'aufgabenmodell']],
          lesen: '<a href="kapitel-1.html#nutzungsanforderungen">Nutzungsanforderungen</a><a href="kapitel-1.html#anforderungen">Anforderungsarten</a><a href="kapitel-5.html#na-ableiten-5">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#na-def-5">Nutzungsanforderung (user requirement)</a><a href="kapitel-5.html#guete-qual">Gütekriterien für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#syntax-qual">Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen</a><a href="kapitel-5.html#ableiten-qual">Ableiten von qualitativen Nutzungsanforderungen</a><a href="kapitel-5.html#guete-quant">Gütekriterien für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#elemente-quant">Elemente für quantitative Nutzungsanforderungen</a><a href="kapitel-5.html#widerspruch">Sich widersprechende Erfordernisse identifizieren</a><a href="kapitel-5.html#ure-5-1">URE Story: Erfordernisse systematisch in Nutzungsanforderungen überführen</a><a href="kapitel-5.html#na-strukturieren">5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren</a><a href="kapitel-5.html#aufgabenmodell-struktur">Aufgabenmodell als Strukturgebendes Format</a><a href="kapitel-5.html#uebung-6">Praktische Übung 6</a><a href="kapitel-5.html#ure-5-2">URE Story: Nutzungsanforderungen angemessen strukturieren</a><a href="kapitel-6.html#konsolidieren-6">6. Nutzungsanforderungen konsolidieren</a><a href="kapitel-6.html#kano">Kano-Schema (Kano scheme)</a><a href="kapitel-6.html#ure-6-1">URE Story: Nutzungsanforderungen mit Benutzern konsolidieren und priorisieren</a><a href="kapitel-6.html#umsetzung-62">6. Nutzungsanforderungen konsolidieren</a><a href="kapitel-6.html#priorisierung">Priorisierung (prioritization)</a><a href="kapitel-6.html#na-in-hcd">Qualitative Nutzungsanforderungen in der Menschzentrierten Gestaltung</a><a href="kapitel-6.html#ure-6-2">URE Story: Die Umsetzungspriorität von Nutzungsanforderungen mit Projektbeteiligten festlegen</a>' },
        { k: 'gestalten', raum: 'Lösungsraum', kap: [], themen: ['regeln', 'amgest', 'artefakte'], theorie: [], praxis: [],
          lesen: '<a href="kapitel-1.html#aufgabenmodell">Aufgabenmodell für die Gestaltung</a><a href="kapitel-1.html#anforderungen">Gestaltungsregel</a><a href="kapitel-5.html#aufgabenmodell-struktur">Aufgabenmodell als Strukturgebendes Format</a><a href="kapitel-6.html#na-in-hcd">Nutzungsanforderungen in der Menschzentrierten Gestaltung</a>' },
        { k: 'evaluieren', raum: 'Lösungsraum', kap: [], themen: ['verif', 'valid', 'erfuellt'], theorie: [], praxis: [],
          lesen: '<a href="kapitel-1.html#anforderungen">Verifizierung und Validierung</a><a href="kapitel-6.html#na-in-hcd">Nutzungsanforderungen in der Menschzentrierten Gestaltung</a>' }
    ];
    /* Agenda S. 9 */
    const KAP = [['1', 'Einführung in die Nutzungskontextanalyse', 'kapitel-1.html'], ['2', 'Nutzungskontextanalyse planen', 'kapitel-2.html'],
        ['3', 'Nutzungskontextinformation erheben', 'kapitel-3.html'], ['4', 'Erfordernisse identifizieren', 'kapitel-4.html'], ['5', 'Nutzungsanforderungen ableiten', 'kapitel-5.html'],
        ['6', 'Nutzungsanforderungen konsolidieren & priorisieren', 'kapitel-6.html'], ['7', 'Schnittstellen des UR-Engineers', 'kapitel-7.html']];
    const raumCls = r => r === 'Lösungsraum' ? 'l' : r === 'Problemraum' ? 't' : r === 'Basis' ? 'b' : 'tl';
    /* Folienkapitel je Begriff: aus „Kapitel x.y“ in den Tags, sonst aus dem Abschnitt, auf den der Begriff verweist */
    const SEK_KAP = { rollen: 'Seminar', ausblick: 'Seminar', kette: '1.1', anforderungen: '1.2', kontext: '1.3', aufgabenmodell: '1.3', nutzungsanforderungen: '1.4',
        planen: '2', methoden: '2.2', erheben: '3', rekrutieren: '3.1', durchfuehren: '3.2', beobachtung: '3.2', fokusgruppe: '3.2', methodenwahl: '3.2', 'mentale-modelle': '3.2', beschreiben: '3.3', 'nk-beschreibung': '3.3', narrativ: '3.3', modellhaft: '3.3', 'ergebnisse-33': '3.3', 'erfordernisse-4': '4.1', 'erfordernis-def': '4.1', 'arten-erfordernisse': '4.1', 'qualitaet-erfordernisse': '4.1', 'syntax-erfordernisse': '4.1', 'erfordernisse-identifizieren': '4.1', 'nki-typen-beispiele': '4.1', 'ueberblick-praxis': '4.1', 'ure-erfordernisse': '4.1', 'na-ableiten-5': '5.1', 'na-def-5': '5.1', 'guete-qual': '5.1', 'syntax-qual': '5.1', 'ableiten-qual': '5.1', 'guete-quant': '5.1', 'elemente-quant': '5.1', 'widerspruch': '5.1', 'ure-5-1': '5.1', 'na-strukturieren': '5.2', 'aufgabenmodell-struktur': '5.2', 'uebung-6': '5.2', 'ure-5-2': '5.2', 'konsolidieren-6': '6.1', 'kano': '6.1', 'ure-6-1': '6.1', 'umsetzung-62': '6.2', 'priorisierung': '6.2', 'na-in-hcd': '6.2', 'ure-6-2': '6.2', 'schnittstellen-7': '7', 'disziplinen': '7', 'aufgaben-ure': '7' };
    const kapOf = k => {
        const t = (D[k].tags || []).map(x => (x.match(/^Kapitel (\d+(?:\.\d+)?)$/) || [])[1]).find(Boolean);
        return t || SEK_KAP[(D[k].link || '').split('#')[1]] || '';
    };
    const kapName = n => (KAP.find(x => x[0] === String(n).split('.')[0]) || [, ''])[1];
    const chip = k => D[k] ? `<button class="pt-chip" data-k="${k}"><span class="material-icons">${D[k].icon === 'stacks' ? 'layers' : D[k].icon}</span><span class="pt-ct">${D[k].title.replace(/ \(.*\)$/, '')}</span></button>` : '';
    const kapBadge = n => `<span class="pt-kap" title="${kapName(n)}">${n}</span>`;
    /* Kapitel je Schritt = Kapitel laut Grafik-Ebene plus die Kapitel der zugeordneten Begriffe */
    PT.forEach(r => { r.kapAlle = [...new Set([...r.kap, ...r.themen.filter(k => D[k]).map(k => kapOf(k).split('.')[0]).filter(n => /^\d$/.test(n))])].sort(); });
    const steps = PT.slice(1), basis = PT[0];
    const name = k => D[k].title.replace(/ \(.*\)$/, '');
    const row = (label, cls, cell) => `<tr class="${cls}"><th>${label}</th>${steps.map(r => `<td>${cell(r) || '<span class="pt-none">–</span>'}</td>`).join('')}</tr>`;

    /* Unterprozesse je Spalte: Überschrift = Abschnitt der Folien (verlinkt), darunter die Begriffe */
    const TEILE = {
        planung: [['<a href="kapitel-2.html#planen">2. Nutzungskontextanalysen planen</a>', ['qziele', 'anlass', 'nka', 'info']],
            ['<a href="kapitel-2.html#methoden">Weitere Methoden, Vorgehen zum Verstehen und Erheben des Nutzungskontextes, die UX-Professionals kennen sollten!</a>', ['methoden']]],
        nk: [['<a href="kapitel-1.html#kontext">Die 5 Komponenten des Nutzungskontextes – B/A&Z/U/R</a>', ['benutzer', 'aufgaben', 'umgebung', 'ressourcen']],
            ['<a href="kapitel-1.html#aufgabenmodell">Aufgaben & Ziele, Aufgabenmodell</a>', ['aufgabenmodell']],
            ['<a href="kapitel-3.html#rekrutieren">3.1 – Benutzer für die Erhebung von Nutzungskontextinformationen auswählen und rekrutieren</a>', ['rekrutierung']],
            ['<a href="kapitel-3.html#durchfuehren">3.2 – Erhebung von Nutzungskontextinformationen vorbereiten und durchführen</a>', ['interview', 'rollen', 'beobachtung', 'fokusgruppe', 'mentales']],
            ['<a href="kapitel-3.html#beschreiben">3.3 – Nutzungskontextbeschreibungen basierend auf Nutzungskontextinformationen erstellen</a>', ['nkbeschreibung', 'istszenario', 'persona', 'affinity', 'journey', 'zielkatalog', 'umgebungsmodell']]],
        erf: [['<a href="kapitel-4.html#erfordernisse-4">4. Erfordernisse in Nutzungskontextinformationen identifizieren</a>', ['erfordernis', 'infoerf', 'ressourcenerf', 'kompetenzerf']]],
        na: [['<a href="kapitel-1.html#nutzungsanforderungen">Nutzungsanforderung (user requirement)</a>', ['na', 'qual', 'quant']],
            ['<a href="kapitel-1.html#anforderungen">Stakeholder- und Systemanforderung, Qualität</a>', ['stakeholder']]],
        loesung: [['', ['amgest', 'regeln', 'artefakte']]],
        evaluieren: [['', ['verif', 'valid', 'erfuellt']]]
    };
    /* Spalten in Prozessreihenfolge; Verstehen ist in Nutzungskontext und Erfordernis geteilt (Kette 1–4) */
    const SP = [['planung', 'planung', ''], ['nk', 'verstehen', '1 Nutzungskontext'], ['erf', 'verstehen', '2 Erfordernis'],
        ['na', 'festlegen', '3 Nutzungsanforderung'], ['loesung', 'gestalten', '4 Lösung'], ['evaluieren', 'evaluieren', '']];
    const KETTE_K = { nk: 'nkinfo', erf: 'erfordernis', na: 'na', loesung: 'loesungsraum' };
    /* Unterprozess: Überschrift sichtbar, Begriffe zum Aufklappen */
    const teil = ([t, ks]) => t ? `<details class="pt-teil"><summary><span class="pt-teil-t">${t}</span><span class="pb-n">${ks.length}</span></summary>${ks.map(chip).join('')}</details>` : `<div class="pt-teil">${ks.map(chip).join('')}</div>`;
    const tq = ([c, a, b]) => `<a class="pt-q" href="pruefung-theorie.html#q-${a}">LO ${c}: Fragen ${a}–${b}</a>`;
    const tp = ([t, p, id]) => `<a class="pt-p" href="pruefung-praxis.html#praxis-${id}">${t} <b>${p} P</b></a>`;
    const pr = k => PT.find(r => r.k === k);
    const THEO = { planung: pr('planung').theorie, nk: [pr('verstehen').theorie[0]], erf: [pr('verstehen').theorie[1]], na: pr('festlegen').theorie, loesung: [], evaluieren: [] };
    const PRAX = { planung: [], nk: pr('verstehen').praxis.filter(x => x[2] !== 'erfordernisse'), erf: pr('verstehen').praxis.filter(x => x[2] === 'erfordernisse'),
        na: pr('festlegen').praxis, loesung: [], evaluieren: [] };
    const zelle = (m, f) => `<tr class="${m}"><th>${f[0]}</th>${SP.map(([c]) => `<td>${f[1](c) || '<span class="pt-none">–</span>'}</td>`).join('')}</tr>`;
    const schritte = [];
    SP.forEach(([c, k]) => { const last = schritte[schritte.length - 1]; if (last && last.k === k) last.n++; else schritte.push({ k, n: 1 }); });

    /* Quelle: kombinierte Tabelle (Evas Zeilen wörtlich); daraus entstehen unten die Blöcke je Schritt */
    const quelle = document.createElement('div');
    quelle.innerHTML = `
        <div class="pt-scroll"><table class="pt pt-quer pt-kette pt-gesamt">
            <colgroup><col style="width:120px"><col style="width:13%"><col><col><col><col><col style="width:13%"></colgroup>
            <thead>
                <tr class="pt-dach"><th></th><td colspan="6"><button class="pt-step" data-k="${basis.k}"><span class="material-icons">${D[basis.k].icon}</span>${name(basis.k)}</button>
                    <div class="pt-dach-chips">${basis.themen.map(chip).join('')}</div></td></tr>
                <tr class="pt-steps"><th>HCD-Schritt</th>${schritte.map((r, i) => `<th colspan="${r.n}"><button class="pt-step" data-k="${r.k}"><span class="material-icons">${D[r.k].icon}</span>${name(r.k)}</button>${i < schritte.length - 1 ? '<span class="pt-arrow material-icons">arrow_forward</span>' : ''}</th>`).join('')}</tr>
                <tr class="pt-glied"><th>Die Kette</th>${SP.map(([c, k, t]) => `<td>${t ? `<button class="pt-step" data-k="${KETTE_K[c]}"><span class="pt-kap">${t.split(' ')[0]}</span>${t.slice(2)}</button>` : ''}</td>`).join('')}</tr>
            </thead>
            <tbody>
                ${zelle('pt-tun', ['Was tue ich', c => TEILE[c].map(teil).join('')])}
                <tr class="pt-eva"><th>Erheben</th><td class="pt-rand"><span class="pt-none">–</span></td><td colspan="4"><b>Erheben von Nutzungskontextinformation</b>: (kontextuelles) Interview · Beobachtung · Fokusgruppe · Benutzerbefragung (S. 185)<br>Und was wird sonst noch erhoben? Mentale Modelle, Wünsche und Bedürfnisse der Benutzenden (S. 193)</td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr><th>Definition</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td>Eine Kombination aus Benutzern, Zielen und Aufgaben, Ressourcen und Umgebungen<span class="pt-src">S. 23</span></td>
                    <td>Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.<span class="pt-src">S. 23</span></td>
                    <td>Anforderungen an die Nutzung, die die Grundlage für die Gestaltung und die Evaluierung eines interaktiven Systems bildet, um Erfordernisse zu erfüllen.<span class="pt-src">S. 60, 101</span></td>
                    <td>Ein Produktmerkmal oder mehrere zusammenhängende Produktmerkmale, die spezifiziert oder realisiert sind und eine oder mehrere Anforderungen erfüllen sollen.<span class="pt-src">S. 23</span></td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr class="pt-eva"><th>Bausteine</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td>Kombination aus <b>B/A&amp;Z/U/R</b><ul><li><b>B</b> – Benutzer</li><li><b>A&amp;Z</b> – Aufgaben und Ziele</li><li><b>U</b> – Umgebung: physisch, sozial, technisch</li><li><b>R</b> – Ressourcen: wiederverwendbar (Ausrüstung, Informationen, Support) oder sich erschöpfend (Material, Zeit, Geld, Leistungsfähigkeit)</li></ul></td>
                    <td><ul><li>muss <b>WISSEN</b> → informatorisches Erfordernis</li><li>muss <b>HABEN</b> (verfügbar) → Ressourcenerfordernis</li><li>muss <b>KÖNNEN</b> (im Sinne einer Kompetenz)</li></ul></td>
                    <td><b>Qualitativ (WAS):</b> Der Benutzer muss am <b>SYSTEM</b> eine Info / Ressource<ul><li>erkennen</li><li>auswählen</li><li>eingeben</li></ul>können.<br><br><b>Quantitativ (WIE GUT):</b> Benutzergruppe + Prozentsatz der Benutzer + messbares Maß (z. B. Zeit) → Akzeptanzkriterium</td>
                    <td><b>WIE</b> sieht die Lösung aus: ein oder mehrere Produktmerkmale<ul><li>Haken</li><li>Button</li><li>SMS</li><li>…</li></ul></td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr class="pt-eva"><th>So formulieren</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td>empirische Information, also <b>FAKT</b>:<ul><li>beobachtet</li><li>erzählt (Interview)</li></ul>keine Annahmen<br><b>IST-Szenario</b><br>↳ Art des Aufschreibens</td>
                    <td>lösungsneutral, <b>ohne System</b><br><br><b>Benutzergruppe</b> muss …<br><b>Voraussetzung</b> (wissen / haben / können)<br>+ um …<br><b>Ziel</b> (entscheiden / tun / können)</td>
                    <td><b>Leitfrage:</b> WAS muss der Benutzer am SYSTEM auswählen, erkennen, eingeben können?<br><br>nicht als Lösung formulieren, nicht immunisiert</td>
                    <td><b>WIE</b> sieht die Lösung aus, die die Nutzungsanforderung erfüllt?</td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr class="pt-abgl"><th>Laut Folien und Prüfung</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td>Die 5 Komponenten des Nutzungskontextes – B/A&amp;Z/U/R<span class="pt-src">S. 71</span>
                        <b>Umgebung:</b> Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert<span class="pt-src">S. 89</span>
                        <b>Ressourcen:</b> wiederverwendbar (Ausrüstung, Informationen, Support) · sich erschöpfend (Material, Zeit, Geld, Leistungsfähigkeit)<span class="pt-src">S. 71</span></td>
                    <td>„Erfordernisse bestehen immer aus einem Ziel, das erreicht werden muss, und der Voraussetzung, die zum Erreichen des Ziels gegeben sein muss.“<span class="pt-src">Beispielprüfung, Frage 26 D (richtig)</span>
                        „In einer Beschreibung eines Erfordernisses darf das interaktive System nicht vorkommen.“<span class="pt-src">Frage 26 A (richtig)</span>
                        „… bei Erfordernissen immer die Benutzergruppe angegeben werden muss, für die die Erfordernisse gelten.“<span class="pt-src">Frage 28, Anmerkung zu A</span><b>Formulierungsschablone (Syntax) für Erfordernisse:</b> Die &lt;Benutzergruppe&gt; muss &lt;Information&gt; wissen / &lt;Ressource&gt; verfügbar haben / &lt;Kompetenz/Fähigkeit&gt; haben um &lt;Entscheidung treffen&gt; oder &lt;Handlung ausführen&gt; zu können.<span class="pt-src">S. 252</span><b>Qualitätskriterien:</b> Erfordernisse bestehen immer aus einer Voraussetzung, die gegeben sein muss in Form eines Zustands (&quot;etwas verfügbar haben&quot; oder &quot;etwas wissen&quot; oder &quot;etwas können&quot;) und dem Ziel, dem diese Voraussetzung dient (&quot;etwas entscheiden können&quot; oder &quot;etwas tun können&quot;).<span class="pt-src">S. 251 (W)</span></td>
                    <td><b>Qualitativ:</b> Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.<span class="pt-src">S. 102</span>
                        <b>Quantitativ:</b> Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, User Experience, Barrierefreiheit und der Vermeidung von Schäden durch die Benutzung.<span class="pt-src">S. 109</span>
                        Fehlen dürfen nicht: die Elemente "Benutzergruppe" und "Prozentsatz der Benutzer"<span class="pt-src">Frage 33, Anmerkung zu E und F</span><b>Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen:</b> Der Benutzer muss am System eine &lt;Information oder Ressource&gt; eingeben / auswählen / erkennen können unter &lt;Bedingung (optional)&gt;.<span class="pt-src">S. 264</span><b>Gütekriterien für qualitative Nutzungsanforderungen:</b> Müssen immer als Anforderung an die Nutzung und nicht als geforderte Lösung formuliert werden.<span class="pt-src">S. 263</span>Erfordernisse sind die einzige direkte Quelle für Nutzungsanforderungen.<span class="pt-src">S. 270</span></td>
                    <td>„Nutzungsanforderungen müssen im Hinblick auf die Benutzung der Lösung formuliert werden, jedoch nicht als die Lösung selbst.“<span class="pt-src">Frage 30 C (richtig)</span></td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr><th>Dokumentieren</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td><b>Ist-Szenario</b> (S. 214): Eine erzählende, textuelle Beschreibung, wie ein Benutzer derzeit eine oder mehrere Aufgaben im aktuellen Nutzungskontext erledigt.<br><b>Nutzungskontextbeschreibung</b> (S. 209): Alle Arten von Darlegungen, die die Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen beschreiben, die durch die Analyse von Beobachtungen, kontextuellen Interviews, Fokusgruppen und Benutzerbefragungen ermittelt wurden.</td>
                    <td><span class="pt-none">–</span></td><td><span class="pt-none">–</span></td><td><span class="pt-none">–</span></td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr><th>Nicht verwechseln</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td><b>Benutzerwunsch</b><ul><li>subjektiv</li><li>wird in Interview häufig als Forderung/ Lösung formuliert</li><li>wird in NKA gesammelt, ist NICHT Ausgangspunkt für Lösungsfindung</li><li>wird zusammen mit NA, für die er Lösungen ist, betrachtet und ist somit wichtig für Akzeptanz möglicher Lösungen</li><li>führt häufig zu Marktanforderungen</li><li>kann außerhalb des NK begründet sein, somit Systemgrenzen verdeutlichen und zu NA führen</li></ul><span class="pt-src">S. 202</span></td>
                    <td><b>Erfordernis</b><ul><li>objektiv</li><li>wird in Interview nur implizit genannt, von URE in NK-Info identifiziert, beschreibt was Benutzende brauchen</li><li>ist Ausgangspunkt für NA</li><li>wird zu NA und kann durch Benutzerwunsch priorisiert werden</li><li>führt zu Nutzungsanforderungen</li></ul><span class="pt-src">S. 202</span></td>
                    <td><span class="pt-none">–</span></td>
                    <td><span class="pt-none">–</span></td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                <tr class="pt-eva pt-bsp"><th>Beispiel</th><td class="pt-rand"><span class="pt-none">–</span></td>
                    <td>„Bestellte Fußmatten passen nicht in meinen Golf 7“</td>
                    <td>„Die Kundin muss WISSEN, ob eine Fußmatte zu ihrem Golf 7 passt, UM eine passende Fußmatte auswählen zu können“</td>
                    <td>„Der Benutzer muss am SYSTEM ERKENNEN können, ob eine Fußmatte zu seinem Fahrzeug passt“<br><span class="pt-quant">quantitativ, z. B.: „90 % von mindestens 25 Benutzern, die eine Fußmatte suchen, müssen innerhalb von 10 Sekunden erkennen können, ob sie zu ihrem Fahrzeug passt.“</span></td>
                    <td>grüner Haken auf Produktkachel<br>„✓ Passt zu ihrem Golf 7“</td><td class="pt-rand"><span class="pt-none">–</span></td></tr>
                ${zelle('pt-exam', ['Prüfung Theorie', c => THEO[c].map(tq).join('')])}
                ${zelle('pt-exam', ['Prüfung Praxis', c => PRAX[c].map(tp).join('')])}
            </tbody>
        </table></div>
        <p class="pt-hint"><button class="pt-belege-btn" onclick="this.closest('.ptable').classList.toggle('show-belege')"><span class="material-icons">format_quote</span>Belege aus Folien und Prüfung ein-/ausblenden</button> Ein Klick auf Schritt oder Begriff öffnet die Details, die Überschriften führen zu den Folien. Definitionen und Belege im Wortlaut. Bausteine, Formulierung und Beispiel nach Evas Skizze (Screenshots/Skizze-Eva-Tabelle_IMG_7243.jpg), gelb hinterlegt und an Folien und Prüfung angeglichen. Das quantitative Beispiel ist nach dem Muster aus Prüfungsfrage 33 D ergänzt.</p>
        <h4 class="pt-h">Kapitel und wo sie im Prozess wirken</h4>
        <div class="pt-scroll"><table class="pt pt-kapitel">
            <thead><tr><th>Kapitel (Agenda S. 9)</th>${PT.map((r, i) => `<th title="${D[r.k].title}">${['Basis', 'Planung', 'Verstehen', 'Festlegen', 'Gestalten', 'Evaluieren'][i]}</th>`).join('')}<th class="pt-exam">Theorie</th></tr></thead>
            <tbody>${KAP.map(([n, t, href]) => {
                const th = PT.flatMap(r => r.theorie).find(x => x[0] === n);
                return `<tr class="${href ? '' : 'soon'}"><th>${kapBadge(n)}${href ? `<a href="${href}">${t}</a>` : `${t} <small>folgt</small>`}</th>
                    ${PT.map(r => `<td>${r.kapAlle.includes(n) ? `<i class="pt-dot" title="${r.themen.filter(k => D[k] && kapOf(k).split('.')[0] === n).map(name).join(', ')}"></i>` : ''}</td>`).join('')}
                    <td class="pt-exam">${th ? `<a class="pt-q" href="pruefung-theorie.html#q-${th[1]}">Fragen ${th[1]}–${th[2]}</a>` : n === '7' ? '<span class="pt-none">nicht prüfungsrelevant</span>' : ''}</td></tr>`;
            }).join('')}</tbody>
        </table></div>`;

    /* Je Schritt ein Block: Was tue ich → Wie tue ich es → Was kommt dabei raus → Nicht verwechseln → Belege, Prüfung */
    const qt = quelle.querySelector('.pt-gesamt');
    const Z = {};
    [...qt.tBodies[0].rows].forEach(tr => {
        const out = SP.map(() => '');
        let ci = 0;
        [...tr.cells].slice(1).forEach(td => {
            const leer = td.textContent.trim() === '–' && td.querySelector('.pt-none');
            if (!leer && !out[ci]) out[ci] = td.innerHTML;
            ci += td.colSpan;
        });
        Z[tr.cells[0].textContent.trim()] = out;
    });
    /* [Gruppe, Klasse, Zeilen, aufklappbar] – nur „Was tue ich“ ist immer offen */
    const ORDNUNG = [
        ['Was tue ich', 'pb-was', ['Was tue ich', 'Erheben'], false],
        ['Wie tue ich es', 'pb-wie', ['So formulieren', 'Bausteine'], true],
        ['Was kommt dabei raus', 'pb-erg', ['Definition', 'Dokumentieren', 'Beispiel', 'Nicht verwechseln'], true],
        ['Laut Folien und Prüfung', 'pt-abgl', ['Laut Folien und Prüfung'], true],
        ['Prüfung', 'pt-exam', ['Prüfung Theorie', 'Prüfung Praxis'], true]
    ];
    const block = ([c, k, t], i) => {
        const gruppen = ORDNUNG.map(([titel, cls, labels, klapp]) => {
            const da = labels.filter(l => Z[l] && Z[l][i]);
            if (!da.length) return '';
            const inhalt = da.map(l => `<div class="pb-zeile">${da.length > 1 && l !== titel ? `<div class="pb-l">${l}</div>` : ''}<div class="pb-c">${Z[l][i]}</div></div>`).join('');
            return klapp
                ? `<details class="pb-gruppe pb-klapp ${cls}"><summary><span class="pb-gt">${titel}</span><span class="pb-was-drin">${da.filter(l => l !== titel).join(' · ')}</span><span class="material-icons pb-pf">expand_more</span></summary><div class="pb-gc">${inhalt}</div></details>`
                : `<div class="pb-gruppe ${cls}"><div class="pb-gt">${titel}</div><div class="pb-gc">${inhalt}</div></div>`;
        }).join('');
        return `<section class="pb-block${t ? ' pb-kette' : ''}">
            <div class="pb-kopf"><span class="pb-nr">${i + 1}</span><button class="pt-step" data-k="${k}"><span class="material-icons">${D[k].icon}</span>${name(k)}</button>
                ${t ? `<button class="pt-step pb-glied" data-k="${KETTE_K[c]}"><span class="pt-kap">${t.split(' ')[0]}</span>${t.slice(2)}</button>` : ''}</div>
            ${gruppen}</section>`;
    };
    const dach = quelle.querySelector('.pt-dach td').innerHTML;
    qt.closest('.pt-scroll').outerHTML = `<div class="pb">
        <div class="pb-dach">${dach}</div>
        ${SP.map((sp, i) => block(sp, i) + (i < SP.length - 1 ? `<div class="pb-pfeil"><span class="material-icons">south</span>${SP[i + 1][2] ? SP[i + 1][2].slice(2) : name(SP[i + 1][1])}</div>` : '')).join('')}
    </div>`;
    document.getElementById('pTable').replaceChildren(...quelle.childNodes);

    /* Prüfungszeilen nur auf Wunsch */
    const XKEY = 'cpuxTabellePruefung';
    const exBtn = document.querySelector('[data-ptexam]');
    function setExam(on) {
        document.getElementById('pTable').classList.toggle('show-exam', on);
        exBtn.classList.toggle('on', on);
        try { localStorage.setItem(XKEY, on ? '1' : '0'); } catch (e) {}
    }
    exBtn.addEventListener('click', () => setExam(!exBtn.classList.contains('on')));
    let x0 = false; try { x0 = localStorage.getItem(XKEY) === '1'; } catch (e) {}
    setExam(x0);

    document.getElementById('pTable').addEventListener('click', e => {
        const b = e.target.closest('[data-k]'); if (b) openDetail(b.dataset.k);
    });
    const VKEY = 'cpuxKartenAnsicht';
    function setView(v) {
        const tab = v === 'tabelle';
        document.querySelector('.master').style.display = tab ? 'none' : '';
        document.querySelector('.map-card .legend').style.display = tab ? 'none' : '';
        document.getElementById('pTable').hidden = !tab;
        document.querySelectorAll('.map-card [data-layer]').forEach(b => { b.style.display = tab ? 'none' : ''; });
        document.querySelector('[data-ptexam]').style.display = tab ? '' : 'none';
        document.querySelectorAll('[data-view]').forEach(b => { b.classList.toggle('on', b.dataset.view === v); b.setAttribute('aria-checked', b.dataset.view === v); });
        try { localStorage.setItem(VKEY, v); } catch (e) {}
    }
    document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => setView(b.dataset.view)));
    let v0 = 'grafik'; try { v0 = localStorage.getItem(VKEY) || 'grafik'; } catch (e) {}
    setView(v0);
}

/* ---------- Sidebar ein-/ausfahren ---------- */
const sbIcon = document.getElementById('sbIcon');
function setSidebar(closed) {
    document.body.classList.toggle('sb-closed', closed);
    sbIcon.textContent = closed ? 'menu' : 'menu_open';
    try { localStorage.setItem('cpuxSidebarClosed', closed ? '1' : '0'); } catch (e) {}
}
let stored = null;
try { stored = localStorage.getItem('cpuxSidebarClosed'); } catch (e) {}
setSidebar(stored === null ? window.innerWidth < 960 : stored === '1');
document.getElementById('sbToggle').addEventListener('click', () => setSidebar(!document.body.classList.contains('sb-closed')));

/* Direktlink auf ein Detail, z. B. #d-erfordernis */
if (location.hash.startsWith('#d-')) { const karte = document.getElementById('karte'); if (karte) karte.scrollIntoView(); openDetail(location.hash.slice(3)); }


/* ---------- Glossar: Definitionen im Wortlaut der Folien ---------- */
if (document.getElementById('glossary')) {
const G = [
    ['Menschzentrierte Gestaltung', 'Human-centred Design, HCD', 'Herangehensweise bei der Gestaltung und Entwicklung von interaktiven Systemen, die darauf abzielt, diese gebrauchstauglicher zu machen, indem sie sich auf die Verwendung des interaktiven Systems konzentriert und Kenntnisse und Methoden aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Usability anwendet.', 'S. 7', 0],
    ['User == Benutzer', 'user', 'Eine Person, die mit einem interaktiven System interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.', 'S. 11, 72', 0],
    ['Primäre Benutzer', 'user', 'Ein Benutzer, der das interaktive System für den beabsichtigten Zweck verwendet.', 'S. 72', 0],
    ['Sekundäre Benutzer', 'user', 'Ein Benutzer, der unterstützende Aufgaben mit dem interaktiven System ausführt, beispielsweise um es zu warten oder um primäre Benutzer zu schulen.', 'S. 72', 0],
    ['Indirekte Benutzer', 'user', 'Ein Benutzer, der die Ergebnisse des interaktiven Systems verwendet, aber nicht direkt mit dem interaktiven System interagiert.', 'S. 72', 0],
    ['Requirements == Anforderung', 'requirement', 'Eine Bedingung oder Fähigkeit, die ein interaktives System erfüllen oder besitzen muss, um eine Vereinbarung, eine Norm, eine Spezifikation oder anderen formal auferlegte Dokumente zu erfüllen.', 'S. 11', 1],
    ['Engineering == Ingenieurstätigkeit', 'engineering', 'Geistige Tätigkeiten, die für die Definition, die Planung, die Herstellung, die Erhaltung und Wiederverwertung eines Produkts, eines Prozesses oder eines Gebäudes erforderlich sind.', 'S. 11', 0],
    ['Requirements Engineering aus Sicht der Technologie', 'Perspektive des Systems Engineering', 'The systematic and disciplined approach to the specification and management of requirements with the goal of understanding the stakeholders\' desires and needs and minimizing the risk of delivering a system that does not meet the stakeholders\' desires and needs', 'S. 12', 1],
    ['Requirements Engineering aus Sicht der Vertreter der Nutzenden', 'Perspektive des Usability Engineering', 'Disziplin, die das systematische Spezifizieren und Verwalten von Stakeholderanforderungen und Systemanforderungen umfasst.', 'S. 13', 0],
    ['Nutzungskontextanalyse', 'context of use analysis', 'Prozess der Planung, Erhebung und Dokumentation authentischer Nutzungskontextinformationen, des Identifizierens darin enthaltener Erfordernisse und des Spezifizierens der Nutzungsanforderungen.', 'S. 21, 136', 0],
    ['Nutzungskontext', 'context of use', 'Eine Kombination aus Benutzern, Zielen und Aufgaben, Ressourcen und Umgebungen.', 'S. 23, 70', 0],
    ['Erfordernis', 'need', 'Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.', 'S. 23', 0],
    ['Lösung', 'solution', 'Ein Produktmerkmal oder mehrere zusammenhängende Produktmerkmale, die spezifiziert oder realisiert sind und eine oder mehrere Anforderungen erfüllen sollen.', 'S. 23', 1],
    ['Problemraum', 'problem space', 'Sammelbegriff für den Nutzungskontext und die darin enthaltenen Erfordernisse zur Zielerreichung der Benutzer.', 'S. 25', 0],
    ['Lösungsraum', 'solution space', 'Sammelbegriff für die Nutzungsanforderungen und Lösungen, die die Erfordernisse zur Zielerreichung der Benutzer befriedigen.', 'S. 25', 1],
    ['Interaktives System', 'interactive system', 'Eine Kombination von Hardware, Software und Dienstleistungen mit denen Benutzer interagieren, um bestimmte Ziele zu erreichen.', 'S. 28', 1],
    ['Qualität', 'quality', 'Grad der Erfüllung von Anforderungen durch ein interaktives System.', 'S. 31', 1],
    ['Technische Qualität', 'technology-centred quality', 'Grad der Erfüllung von Systemanforderungen durch ein interaktives System.', 'S. 32', 1],
    ['Menschzentrierte Qualität', 'human-centred quality', 'Ein beabsichtigtes Ergebnis der Entwicklung eines interaktiven Systems für den Benutzer, das sich auf die Usability, die User Experience, die Barrierefreiheit oder die Vermeidung von Schäden durch die Benutzung bezieht.', 'S. 33', 1],
    ['Vermeidung von Schäden durch die Benutzung', 'avoidance of harm from use', 'Das Ausmaß, in dem negative Auswirkungen auf Gesundheit, Sicherheit, Finanzen oder Umwelt, die sich aus der Benutzung des interaktiven Systems ergeben, minimiert werden.', 'S. 34', 1],
    ['Risiko', 'risk', 'Kombination der Wahrscheinlichkeit des Auftretens eines Schadens und des Schweregrads dieses Schadens.', 'S. 35', 1],
    ['Gestaltungsregel', 'user interface guideline', 'Konkrete, spezifische Instruktion oder Empfehlung für das Design und die Implementierung von Benutzungsschnittstellen, die wenig Interpretationsspielraum lässt, sodass sie konsistent umgesetzt werden kann.', 'S. 37', 1],
    ['Benutzerwunsch', 'user want', 'Ein Wunsch, den ein Benutzer hinsichtlich der Attribute eines interaktiven Systems formuliert.', 'S. 42', 0],
    ['Forderung', 'request', 'Ein Benutzerwunsch oder eine Vorgabe eines oder mehrerer Stakeholder für das interaktive System.', 'S. 42', 0],
    ['Immunisierungsfalle', 'immunization trap', 'Ein unbewusst gewähltes Vorgehen, bei dem Anforderungen spezifiziert werden, die bekannte oder vorgestellte Lösungen repräsentieren, statt lösungsneutral auf der Basis von Erfordernissen im Nutzungskontext hergeleitet worden zu sein.', 'S. 48', 1],
    ['Stakeholder', 'Interessenvertreter', 'Einzelperson oder Organisation, die ein Anrecht, einen Anteil, einen Anspruch oder ein Interesse an einem System oder an dessen Merkmalen hat, die ihren Erfordernissen und Erwartungen entsprechen. Eine Person oder Organisation mit einem aktiven Interesse an einem interaktiven System (UXQB)', 'S. 52', 0],
    ['Gesetzliche / regulatorische Anforderung', 'legal/regulatory requirement', 'Eine Stakeholderanforderung, die durch ein Gesetz oder ein regulatorisches Dokument (z.B. eine harmonisierte ISO-Norm, Vorgabe einer Aufsichtsbehörde) vorgegeben ist, und die bei der Gestaltung des interaktiven Systems zu berücksichtigen ist.', 'S. 56', 1],
    ['Marktanforderung', 'market requirement', 'Eine Anforderung für ein interaktives System basierend auf einer Marketingpolitik, die darauf abzielt, Geschäftschancen, Absatz und Nutzen zu maximieren.', 'S. 57', 1],
    ['Organisatorische Anforderung', 'organisational requirement', 'Eine organisatorische Regel, die Benutzer bei der Ausführung ihrer Aufgaben befolgen müssen.', 'S. 58', 1],
    ['Fachliche Anforderung', 'domain-specific requirement', 'Eine Anforderung, die die Attribute eines vollständigen und richtigen Arbeitsergebnisses einer Aufgabe definiert.', 'S. 59', 1],
    ['Nutzungsanforderung', 'user requirement', 'Anforderungen an die Nutzung, die die Grundlage für die Gestaltung und die Evaluierung eines interaktiven Systems bildet, um Erfordernisse zu erfüllen.', 'S. 60, 101', 1],
    ['Validierung', 'validation', 'Prozess, bei dem festgestellt wird, ob die Stakeholderanforderungen aus Sicht der fordernden Stakeholder angemessen umgesetzt wurden.', 'S. 63', 1],
    ['Verifizierung', 'verification', 'Prozess, bei dem festgestellt wird, ob alle Anforderungen in entsprechende Produktmerkmale umgesetzt wurden.', 'S. 64', 1],
    ['Aufgabe', 'task', 'Eine Menge von Aktivitäten, die durchgeführt werden, um ein bestimmtes Ziel zu erreichen', 'S. 76', 0],
    ['Teilaufgabe', 'subtask', 'Ein Schritt, der durchgeführt wird, um eine Aufgabe zu erledigen.', 'S. 77', 0],
    ['Ziel', 'goal', 'Das beabsichtigte Ergebnis der Aufgabe.', 'S. 78', 0],
    ['Aufgabenmodell', 'task model', 'Eine Beschreibung einer Aufgabe, die aus dem Grund für das Beginnen der Aufgabe, dem Ziel, das sie unterstützt, und den Teilaufgaben besteht, die ausgeführt werden müssen, um die Aufgabe zu erledigen', 'S. 79', 0],
    ['Aufgabenobjekt', 'task object', 'Die Objekte, die von einer Person erstellt, verändert oder inspiziert werden, um die beabsichtigten Ergebnisse einer Aufgabe zu erzielen.', 'S. 84', 0],
    ['Umgebung', 'environment', 'Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert', 'S. 89', 0],
    ['Ressourcen', 'resources', 'Alle Mittel, die erforderlich sind, um ein beabsichtigtes Ergebnis im Nutzungskontext zu erreichen', 'S. 91', 0],
    ['Nutzungskontext für die Gestaltung', 'context of use for design', 'Eine Teilmenge des Nutzungskontextes, die als Grundlage für die Gestaltung eines interaktiven Systems verwendet wird.', 'S. 93', 1],
    ['Aufgabenmodell für die Gestaltung', 'task model used for design', 'Aufgabenmodelle des gegenwärtigen Nutzungskontextes können in Aufgabenmodelle für die Gestaltung überführt werden. Es wird berücksichtigt, wie die Aufgabe durch das zu entwickelnde interaktive System unterstützt wird.', 'S. 94', 1],
    ['Qualitative Nutzungsanforderung', 'qualitative user requirement', 'Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.', 'S. 102', 1],
    ['Quantitative Nutzungsanforderung', 'quantitative user requirement', 'Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, User Experience, Barrierefreiheit und der Vermeidung von Schäden durch die Benutzung.', 'S. 109', 1],
    ['Sponsor', 'sponsor', 'Stakeholder, der das Budget für ein Entwicklungsprojekt bereitstellt.', 'S. 123', 0],
    ['Menschzentrierte Qualitätsziele', 'human-centred quality objectives', 'Ein beabsichtigtes Ergebnis der Entwicklung eines interaktiven Systems für den Benutzer, das sich auf die Usability, die Barrierefreiheit, die User Experience oder die Vermeidung von Schäden durch die Benutzung bezieht', 'S. 124', 0],
    ['Nutzungskontextinformation', 'context of use information', 'Fragment einer Nutzungskontextbeschreibung, das Erfordernisse enthält.', 'S. 132', 0],
    ['Empirische Information', 'empirical information', 'Faktische Information, die im Nutzungskontext durch kontextuelle Interviews oder Beobachtungen erhoben wurde.', 'S. 133', 0],
    ['Konstruierte Information', 'constructed information', 'Eine Information, die aus empirischer Information abgeleitet wurde. Z.B. Personas, Anforderungen', 'S. 133', 1],
    ['Annahmen', 'assumptions', 'Annahmen sind Informationen, die nicht auf empirische Informationen zurückgeführt werden können.', 'S. 133', 0],
    ['User Research', 'user research', 'User Research umfasst alle Aktivitäten während der Analyse, Design und Usability-Evaluierung interaktiver Systeme, bei denen in Zusammenarbeit mit Benutzern Informationen gesammelt werden über: Nutzungskontext · Wünsche, Vorlieben und Abneigungen · Nutzungsprobleme bei der Nutzung von interaktiven Systemen', 'S. 134', 0],
    ['Klassische Nutzungskontextanalyse', 'classic', 'Vorgehen bei der Nutzungskontextanalyse, bei dem systematisch ohne Annahmen über den Nutzungskontext zunächst alle Nutzungskontextinformationen erhoben werden und erst dann Erfordernisse und ableitbare Nutzungsanforderungen ermittelt werden.', 'S. 136', 0],
    ['Design Thinking', 'design thinking', 'Ein systematischer Ansatz zur Erarbeitung von Lösungen für komplexe Probleme in allen Lebensbereichen, bei dem menschliche Werte Vorrang vor technischen oder wirtschaftlichen Zwängen haben. Es ist ein Instrument zur Bewältigung unbekannter Problemstellungen und wird bei der Entwicklung von Produkten, Dienstleistungen oder Prozessinnovationen verwendet.', 'S. 144', 0],
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
    ['Beobachtung', 'observation', 'Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein User Experience Professional Benutzer beobachtet, die mit dem interaktiven System Aufgaben ausführen.', 'S. 178', 0],
    ['Cultural Probe', 'cultural probe', 'Spezialfall der Beobachtung, bei der der Benutzer sich selbst beobachtet bzw. Proben, Spuren seiner Aktivitäten im Nutzungskontext sammelt und für die Auswertung zur Verfügung stellt, z. B. Fotos, Notizzettel, Skizzen, ...', 'S. 179', 0],
    ['Tagebuchstudie', 'diary study', 'Eine Spezialform der Beobachtung, bei der die Teilnehmer bestimmte Ereignisse, Gefühle, Verhaltensweisen und Interaktionen in einer mobilen Anwendung oder einem Papiertagebuch aufzeichnen, um einen Einblick in die User Experience mit einem interaktiven System zu geben.', 'S. 179', 0],
    ['Fokusgruppe', 'focus group', 'Eine moderierte Diskussion über vorgegebene Themen und Fragen zwischen Mitgliedern einer oder mehrerer Benutzergruppen.', 'S. 186', 0],
    ['Mentales Modell', 'mental model', 'Das Konzept, das Menschen von sich selbst, anderen, der Umgebung und der Funktionsweise der Dinge, mit denen sie interagieren, entwickelt haben.', 'S. 194', 0],
    ['Bedürfnis', 'user need', 'Ein Bedürfnis kann als Zustand oder Erleben eines Mangels, verbunden mit dem Wunsch ihn zu beheben, definiert werden.', 'S. 201', 0],
    ['Nutzungskontextbeschreibung', 'context of use discription', 'Alle Arten von Darlegungen, die die Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen beschreiben, die durch die Analyse von Beobachtungen, kontextuellen Interviews, Fokusgruppen und Benutzerbefragungen ermittelt wurden.', 'S. 209', 0],
    ['Ist-Szenario', 'as-is scenario', 'Eine erzählende, textuelle Beschreibung, wie ein Benutzer derzeit eine oder mehrere Aufgaben im aktuellen Nutzungskontext erledigt.', 'S. 214', 0],
    ['Persona', 'persona', 'Eine Beschreibung eines konstruierten, aber realistischen Benutzers und was dieser bei der Benutzung eines interaktiven Systems beabsichtigt', 'S. 216', 0],
    ['Affinity-Diagramm', 'affinity diagram', 'Ein strukturiertes Format für die Dokumentation von Ergebnissen aus der Analyse qualitativer Daten.', 'S. 224', 0],
    ['User Journey', 'user journey', 'Ein Verfahren, das dazu dient, eine Beschreibung der "Begegnung" von Benutzenden mit dem interaktiven System und der Organisation über alle Berührungspunkte (touchpoints) an denen die User Experience entsteht, für Dritte erfahrbar zu machen.', 'S. 226', 0],
    ['User Journey Map', 'user journey map', 'Eine lineare Darstellung der Interaktion eines Benutzers mit dem interaktiven System und der betreibenden Organisation, die alle Berührungspunkte abdeckt, die die User Experience beeinflussen.', 'S. 227', 0],
    ['Zielkatalog', 'goal catalogue', 'Ein Zielkatalog ist eine tabellarische Darstellung aller identifizierten Ziele, die für das Benutzerverhalten im Nutzungskontext Relevanz haben.', 'S. 232', 0],
    ['Umgebungsmodell', 'environment model', 'Umgebungsmodelle (sozial und physisch) beschreiben die besonderen Merkmale der jeweiligen Umgebung.', 'S. 234', 0],
    ['Informationsmodell', 'information model', 'Informationsmodelle (Informationsobjekte) beschreiben die dem Aufgabenmodell und den Aufgabenobjekten innewohnende Struktur der Information.', 'S. 234', 0],
    ['Informatorisches Erfordernis', 'informational need', 'Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Informationen angibt.', 'S. 248', 0],
    ['Ressourcenerfordernis', 'resource need', 'Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Ressourcen angibt.', 'S. 249', 0],
    ['Kompetenzerfordernis', 'competence need', 'Ein Erfordernis, dass eine bestimmte Kompetenz oder Fähigkeit in einer Benutzergruppe vorhanden sein muss.', 'S. 250', 0],
    ['Nutzungsanforderung', 'user requirement', 'Anforderungen an die Nutzung, die die Basis für die Gestaltung und Evaluierung eines interaktiven Systems in Hinblick auf identifizierte Erfordernisse bilden.', 'S. 261', 1],
    ['Qualitative Nutzungsanforderung', 'qualitative user requirement', 'Eine Aussage darüber, was die Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.', 'S. 262', 1],
    ['Quantitative Nutzungsanforderung', 'quantitative user requirement', 'Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, Barrierefreiheit, User Experience und Vermeidung von Schäden durch die Benutzung.', 'S. 262', 1],
    ['Kano-Schema', 'Kano scheme', 'Ein Einstufungssystem für die Priorität von qualitativen Nutzungsanforderungen oder (daraus abgeleiteten) Funktionen eines interaktiven Systems aus Benutzersicht.', 'S. 280', 1],
    ['Priorisierung', 'prioritization', 'Eine Aktivität, bei der festgelegt wird, ob und wann eine identifizierte Anforderung umgesetzt wird.', 'S. 290', 1],
    ['Produkt-Roadmap', 'product road map', 'Darstellung, die zeigt, wie sich ein Produkt über Releases hinweg in definierten Zeiträumen bzgl. seines Funktionsumfangs entwickeln soll.', 'S. 291', 1],
    ['Produktmanagement', 'product management', 'Disziplin in der Produktentwicklung, die die Planung, Steuerung und Kontrolle eines Produkts von seiner Entstehung bis hin zum Ausscheiden aus dem Markt (Produktlebenszyklus) umfasst, mit dem Ziel, ein marktkonformes Ergebnis zu erzielen.', 'S. 297', 1],
    ['Produktmanager', 'product manager', 'Rolle im Produktmanagement, die typischerweise die Planung, Steuerung und Kontrolle eines Produkts von seiner Entstehung bis hin zum Ausscheiden aus dem Markt verantwortet.', 'S. 297', 1],
    ['Requirements Engineering', 'Requirements Engineering', 'Disziplin, die das systematische Spezifizieren und Verwalten von Stakeholderanforderungen und Systemanforderungen umfasst.', 'S. 298', 1],
    ['Systems Engineering', 'Systems Engineering', 'Disziplin in der Produktentwicklung, die für die technische Realisierung des interaktiven Systems verantwortlich ist.', 'S. 299', 1],
    ['Modellbasierte Nutzungskontextanalyse', 'model-based', 'Vorgehen bei der Nutzungskontextanalyse, bei dem auf Basis bekannter Nutzungskontextinformationen, vorliegender Aufgabenmodelle, bereits bekannter Nutzungsanforderungen und Nutzungsszenarien und/oder vorhandener Prototypen offene Fragen über den Nutzungskontext gesammelt werden, mit deren Hilfe dann systematisch in kontextuellen Interviews und/oder Beobachtungen empirische Informationen über den Nutzungskontext eingeholt werden.', 'S. 136', 0]
];
const gWrap = document.getElementById('glossary');
const gAbc = document.getElementById('gAbc');
const gLetter = t => { const c = t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0).toUpperCase(); return /[A-Z]/.test(c) ? c : '#'; };
const gGroups = {};
G.sort((a, b) => a[0].localeCompare(b[0], 'de')).forEach(g => (gGroups[gLetter(g[0])] = gGroups[gLetter(g[0])] || []).push(g));
gWrap.innerHTML = Object.keys(gGroups).sort().map(L =>
    '<section class="g-letter" id="g-' + L + '" data-l="' + L + '"><h3 class="g-L">' + L + '</h3><div class="g-list">' +
    gGroups[L].map(g =>
        '<div class="g-item' + (g[4] ? ' l' : '') + '" data-s="' + (g[0] + ' ' + g[1] + ' ' + g[2]).toLowerCase().replace(/"/g, '') + '">' +
        '<div class="g-term">' + g[0] + ' <span class="g-en">(' + g[1] + ')</span></div>' + g[2] +
        '<div class="g-meta">Folie ' + g[3] + '</div></div>').join('') +
    '</div></section>').join('');
gAbc.innerHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(L =>
    gGroups[L] ? '<a href="#g-' + L + '" data-l="' + L + '">' + L + '</a>' : '<span>' + L + '</span>').join('');
function gFilter() {
    const q = document.getElementById('gSearch').value.trim().toLowerCase();
    let n = 0;
    gWrap.querySelectorAll('.g-letter').forEach(sec => {
        let m = 0;
        sec.querySelectorAll('.g-item').forEach(el => { const hit = !q || el.dataset.s.includes(q); el.style.display = hit ? '' : 'none'; if (hit) m++; });
        sec.style.display = m ? '' : 'none';
        const a = gAbc.querySelector('a[data-l="' + sec.dataset.l + '"]');
        if (a) a.classList.toggle('off', !m);
        n += m;
    });
    document.getElementById('gEmpty').style.display = n ? 'none' : 'block';
    document.getElementById('gCount').textContent = n + (n === 1 ? ' Begriff' : ' Begriffe');
}
document.getElementById('gSearch').addEventListener('input', gFilter);
gFilter();
}

/* ---------- Navigation: Unterpunkte der aktuellen Seite hervorheben ---------- */
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
