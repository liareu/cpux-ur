/* Abschnitte der Kapitelseiten (Lernfortschritt) und Begriffe aus dem Glossar (Selbsttest). Erzeugt mit build_site.py. */
const LERN_DATEN = [{"seite": "kapitel-1.html", "titel": "1 Einführung in die NKA", "abschnitte": [{"id": "kette", "titel": "Zusammenhang Nutzungskontext, Erfordernis, Anforderung, Lösung"}, {"id": "kontext", "titel": "Die 5 Komponenten des Nutzungskontextes – B/A&amp;Z/U/R"}, {"id": "aufgabenmodell", "titel": "Aufgaben &amp; Ziele, Aufgabenmodell"}, {"id": "anforderungen", "titel": "Stakeholder- und Systemanforderung, Qualität"}, {"id": "nutzungsanforderungen", "titel": "Nutzungsanforderung (user requirement)"}]}, {"seite": "kapitel-2.html", "titel": "2 NKA planen", "abschnitte": [{"id": "planen", "titel": "2. Nutzungskontextanalysen planen"}, {"id": "methoden", "titel": "Weitere Methoden, Vorgehen zum Verstehen und Erheben des Nutzungskontextes, die UX-Professionals kennen sollten!"}]}, {"seite": "kapitel-3.html", "titel": "3 Information erheben", "abschnitte": [{"id": "erheben", "titel": "3. Nutzungskontextinformation erheben und dokumentieren"}, {"id": "rekrutieren", "titel": "3.1 – Benutzer für die Erhebung von Nutzungskontextinformationen auswählen und rekrutieren"}, {"id": "durchfuehren", "titel": "3.2 – Erhebung von Nutzungskontextinformationen vorbereiten und durchführen"}, {"id": "beobachtung", "titel": "Beobachtung (observation)"}, {"id": "fokusgruppe", "titel": "Fokusgruppe (focus group)"}, {"id": "methodenwahl", "titel": "Kriterien für die Auswahl und Kombination von Methoden, gesammelte Antworten"}, {"id": "mentale-modelle", "titel": "Mentale Modelle, Wünsche und Bedürfnisse"}, {"id": "beschreiben", "titel": "3.3 – Nutzungskontextbeschreibungen basierend auf Nutzungskontextinformationen erstellen"}, {"id": "nk-beschreibung", "titel": "Nutzungskontextbeschreibung (context of use discription)"}, {"id": "narrativ", "titel": "Detaillierte, Narrative Nutzungskontextbeschreibungen"}, {"id": "modellhaft", "titel": "Detaillierte, Modellhafte Nutzungskontextbeschreibung"}, {"id": "ergebnisse-33", "titel": "Planung, Durchführung und HCD-Ergebnisse der NK-Erhebung"}]}, {"seite": "kapitel-4.html", "titel": "4 Erfordernisse identifizieren", "abschnitte": [{"id": "erfordernisse-4", "titel": "4. Erfordernisse in Nutzungskontextinformationen identifizieren"}, {"id": "erfordernis-def", "titel": "Erfordernis (user need)"}, {"id": "arten-erfordernisse", "titel": "Arten von Erfordernissen"}, {"id": "qualitaet-erfordernisse", "titel": "Qualitätskriterien für Erfordernisse"}, {"id": "syntax-erfordernisse", "titel": "Formulierungsschablone (Syntax) für Erfordernisse"}, {"id": "erfordernisse-identifizieren", "titel": "Erfordernisse identifizieren"}, {"id": "nki-typen-beispiele", "titel": "NKI → Typen von Erfordernissen – Beispiele"}, {"id": "ueberblick-praxis", "titel": "Überblick Praktische Prüfung – Aufgaben und Punkte"}, {"id": "ure-erfordernisse", "titel": "Erfordernisse systematisch identifizieren und formulieren"}]}, {"seite": "kapitel-5.html", "titel": "5 NA ableiten", "abschnitte": [{"id": "na-ableiten-5", "titel": "5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren"}, {"id": "na-def-5", "titel": "Nutzungsanforderung (user requirement)"}, {"id": "guete-qual", "titel": "Gütekriterien für qualitative Nutzungsanforderungen"}, {"id": "syntax-qual", "titel": "Formulierungsschablone (Syntax) für qualitative Nutzungsanforderungen"}, {"id": "ableiten-qual", "titel": "Ableiten von qualitativen Nutzungsanforderungen"}, {"id": "guete-quant", "titel": "Gütekriterien für quantitative Nutzungsanforderungen"}, {"id": "elemente-quant", "titel": "Elemente für quantitative Nutzungsanforderungen"}, {"id": "widerspruch", "titel": "Sich widersprechende Erfordernisse identifizieren"}, {"id": "ure-5-1", "titel": "Erfordernisse systematisch in Nutzungsanforderungen überführen"}, {"id": "na-strukturieren", "titel": "5. Nutzungsanforderungen aus Erfordernissen ableiten und strukturieren"}, {"id": "aufgabenmodell-struktur", "titel": "Aufgabenmodell als Strukturgebendes Format"}, {"id": "uebung-6", "titel": "Praktische Übung 6"}, {"id": "ure-5-2", "titel": "Nutzungsanforderungen angemessen strukturieren"}]}, {"seite": "kapitel-6.html", "titel": "6 Konsolidieren & priorisieren", "abschnitte": [{"id": "konsolidieren-6", "titel": "6. Nutzungsanforderungen konsolidieren"}, {"id": "kano", "titel": "Kano-Schema (Kano scheme)"}, {"id": "ure-6-1", "titel": "Nutzungsanforderungen mit Benutzern konsolidieren und priorisieren"}, {"id": "umsetzung-62", "titel": "6. Nutzungsanforderungen konsolidieren"}, {"id": "priorisierung", "titel": "Priorisierung (prioritization)"}, {"id": "na-in-hcd", "titel": "Qualitative Nutzungsanforderungen in der Menschzentrierten Gestaltung"}, {"id": "ure-6-2", "titel": "Die Umsetzungspriorität von Nutzungsanforderungen mit Projektbeteiligten festlegen"}]}, {"seite": "kapitel-7.html", "titel": "7 Schnittstellen", "abschnitte": [{"id": "schnittstellen-7", "titel": "7. Schnittstellen des User Requirements Engineer mit anderen Rollen und Disziplinen"}, {"id": "disziplinen", "titel": "Produktmanagement, Produktmanager (product management, product manager)"}, {"id": "aufgaben-ure", "titel": "Aufgaben und Schnittstellen des User Requirements Engineer"}]}];
const KARTEN = [
{
"term": "Menschzentrierte Gestaltung",
"en": "Human-centred Design, HCD",
"def": "Herangehensweise bei der Gestaltung und Entwicklung von interaktiven Systemen, die darauf abzielt, diese gebrauchstauglicher zu machen, indem sie sich auf die Verwendung des interaktiven Systems konzentriert und Kenntnisse und Methoden aus den Bereichen der Arbeitswissenschaft, Ergonomie und der Usability anwendet.",
"folie": "7",
"kap": "Zum Seminar"
},
{
"term": "User == Benutzer",
"en": "user",
"def": "Eine Person, die mit einem interaktiven System interagiert oder die Ergebnisse, die vom System erzeugt werden, benutzt.",
"folie": "11, 72",
"kap": "1 Einführung in die NKA"
},
{
"term": "Primäre Benutzer",
"en": "user",
"def": "Ein Benutzer, der das interaktive System für den beabsichtigten Zweck verwendet.",
"folie": "72",
"kap": "1 Einführung in die NKA"
},
{
"term": "Sekundäre Benutzer",
"en": "user",
"def": "Ein Benutzer, der unterstützende Aufgaben mit dem interaktiven System ausführt, beispielsweise um es zu warten oder um primäre Benutzer zu schulen.",
"folie": "72",
"kap": "1 Einführung in die NKA"
},
{
"term": "Indirekte Benutzer",
"en": "user",
"def": "Ein Benutzer, der die Ergebnisse des interaktiven Systems verwendet, aber nicht direkt mit dem interaktiven System interagiert.",
"folie": "72",
"kap": "1 Einführung in die NKA"
},
{
"term": "Requirements == Anforderung",
"en": "requirement",
"def": "Eine Bedingung oder Fähigkeit, die ein interaktives System erfüllen oder besitzen muss, um eine Vereinbarung, eine Norm, eine Spezifikation oder anderen formal auferlegte Dokumente zu erfüllen.",
"folie": "11",
"kap": "Zum Seminar"
},
{
"term": "Engineering == Ingenieurstätigkeit",
"en": "engineering",
"def": "Geistige Tätigkeiten, die für die Definition, die Planung, die Herstellung, die Erhaltung und Wiederverwertung eines Produkts, eines Prozesses oder eines Gebäudes erforderlich sind.",
"folie": "11",
"kap": "Zum Seminar"
},
{
"term": "Requirements Engineering aus Sicht der Technologie",
"en": "Perspektive des Systems Engineering",
"def": "The systematic and disciplined approach to the specification and management of requirements with the goal of understanding the stakeholders' desires and needs and minimizing the risk of delivering a system that does not meet the stakeholders' desires and needs",
"folie": "12",
"kap": "Zum Seminar"
},
{
"term": "Requirements Engineering aus Sicht der Vertreter der Nutzenden",
"en": "Perspektive des Usability Engineering",
"def": "Disziplin, die das systematische Spezifizieren und Verwalten von Stakeholderanforderungen und Systemanforderungen umfasst.",
"folie": "13",
"kap": "Zum Seminar"
},
{
"term": "Nutzungskontextanalyse",
"en": "context of use analysis",
"def": "Prozess der Planung, Erhebung und Dokumentation authentischer Nutzungskontextinformationen, des Identifizierens darin enthaltener Erfordernisse und des Spezifizierens der Nutzungsanforderungen.",
"folie": "21, 136",
"kap": "2 NKA planen"
},
{
"term": "Nutzungskontext",
"en": "context of use",
"def": "Eine Kombination aus Benutzern, Zielen und Aufgaben, Ressourcen und Umgebungen.",
"folie": "23, 70",
"kap": "1 Einführung in die NKA"
},
{
"term": "Erfordernis",
"en": "need",
"def": "Eine Voraussetzung, die für einen Benutzer oder eine Benutzergruppe als notwendig erachtet wird, um ein implizites oder im Rahmen eines bestimmten Nutzungskontextes vorgegebenes Ziel zu erreichen.",
"folie": "23",
"kap": "1 Einführung in die NKA"
},
{
"term": "Lösung",
"en": "solution",
"def": "Ein Produktmerkmal oder mehrere zusammenhängende Produktmerkmale, die spezifiziert oder realisiert sind und eine oder mehrere Anforderungen erfüllen sollen.",
"folie": "23",
"kap": "1 Einführung in die NKA"
},
{
"term": "Problemraum",
"en": "problem space",
"def": "Sammelbegriff für den Nutzungskontext und die darin enthaltenen Erfordernisse zur Zielerreichung der Benutzer.",
"folie": "25",
"kap": "Zum Seminar"
},
{
"term": "Lösungsraum",
"en": "solution space",
"def": "Sammelbegriff für die Nutzungsanforderungen und Lösungen, die die Erfordernisse zur Zielerreichung der Benutzer befriedigen.",
"folie": "25",
"kap": "Zum Seminar"
},
{
"term": "Interaktives System",
"en": "interactive system",
"def": "Eine Kombination von Hardware, Software und Dienstleistungen mit denen Benutzer interagieren, um bestimmte Ziele zu erreichen.",
"folie": "28",
"kap": "1 Einführung in die NKA"
},
{
"term": "Qualität",
"en": "quality",
"def": "Grad der Erfüllung von Anforderungen durch ein interaktives System.",
"folie": "31",
"kap": "1 Einführung in die NKA"
},
{
"term": "Technische Qualität",
"en": "technology-centred quality",
"def": "Grad der Erfüllung von Systemanforderungen durch ein interaktives System.",
"folie": "32",
"kap": "1 Einführung in die NKA"
},
{
"term": "Menschzentrierte Qualität",
"en": "human-centred quality",
"def": "Ein beabsichtigtes Ergebnis der Entwicklung eines interaktiven Systems für den Benutzer, das sich auf die Usability, die User Experience, die Barrierefreiheit oder die Vermeidung von Schäden durch die Benutzung bezieht.",
"folie": "33",
"kap": "1 Einführung in die NKA"
},
{
"term": "Vermeidung von Schäden durch die Benutzung",
"en": "avoidance of harm from use",
"def": "Das Ausmaß, in dem negative Auswirkungen auf Gesundheit, Sicherheit, Finanzen oder Umwelt, die sich aus der Benutzung des interaktiven Systems ergeben, minimiert werden.",
"folie": "34",
"kap": "Zum Seminar"
},
{
"term": "Risiko",
"en": "risk",
"def": "Kombination der Wahrscheinlichkeit des Auftretens eines Schadens und des Schweregrads dieses Schadens.",
"folie": "35",
"kap": "1 Einführung in die NKA"
},
{
"term": "Gestaltungsregel",
"en": "user interface guideline",
"def": "Konkrete, spezifische Instruktion oder Empfehlung für das Design und die Implementierung von Benutzungsschnittstellen, die wenig Interpretationsspielraum lässt, sodass sie konsistent umgesetzt werden kann.",
"folie": "37",
"kap": "Zum Seminar"
},
{
"term": "Benutzerwunsch",
"en": "user want",
"def": "Ein Wunsch, den ein Benutzer hinsichtlich der Attribute eines interaktiven Systems formuliert.",
"folie": "42",
"kap": "1 Einführung in die NKA"
},
{
"term": "Forderung",
"en": "request",
"def": "Ein Benutzerwunsch oder eine Vorgabe eines oder mehrerer Stakeholder für das interaktive System.",
"folie": "42",
"kap": "1 Einführung in die NKA"
},
{
"term": "Immunisierungsfalle",
"en": "immunization trap",
"def": "Ein unbewusst gewähltes Vorgehen, bei dem Anforderungen spezifiziert werden, die bekannte oder vorgestellte Lösungen repräsentieren, statt lösungsneutral auf der Basis von Erfordernissen im Nutzungskontext hergeleitet worden zu sein.",
"folie": "48",
"kap": "1 Einführung in die NKA"
},
{
"term": "Stakeholder",
"en": "Interessenvertreter",
"def": "Einzelperson oder Organisation, die ein Anrecht, einen Anteil, einen Anspruch oder ein Interesse an einem System oder an dessen Merkmalen hat, die ihren Erfordernissen und Erwartungen entsprechen. Eine Person oder Organisation mit einem aktiven Interesse an einem interaktiven System (UXQB)",
"folie": "52",
"kap": "1 Einführung in die NKA"
},
{
"term": "Gesetzliche / regulatorische Anforderung",
"en": "legal/regulatory requirement",
"def": "Eine Stakeholderanforderung, die durch ein Gesetz oder ein regulatorisches Dokument (z.B. eine harmonisierte ISO-Norm, Vorgabe einer Aufsichtsbehörde) vorgegeben ist, und die bei der Gestaltung des interaktiven Systems zu berücksichtigen ist.",
"folie": "56",
"kap": "1 Einführung in die NKA"
},
{
"term": "Marktanforderung",
"en": "market requirement",
"def": "Eine Anforderung für ein interaktives System basierend auf einer Marketingpolitik, die darauf abzielt, Geschäftschancen, Absatz und Nutzen zu maximieren.",
"folie": "57",
"kap": "1 Einführung in die NKA"
},
{
"term": "Organisatorische Anforderung",
"en": "organisational requirement",
"def": "Eine organisatorische Regel, die Benutzer bei der Ausführung ihrer Aufgaben befolgen müssen.",
"folie": "58",
"kap": "1 Einführung in die NKA"
},
{
"term": "Fachliche Anforderung",
"en": "domain-specific requirement",
"def": "Eine Anforderung, die die Attribute eines vollständigen und richtigen Arbeitsergebnisses einer Aufgabe definiert.",
"folie": "59",
"kap": "1 Einführung in die NKA"
},
{
"term": "Nutzungsanforderung",
"en": "user requirement",
"def": "Anforderungen an die Nutzung, die die Grundlage für die Gestaltung und die Evaluierung eines interaktiven Systems bildet, um Erfordernisse zu erfüllen.",
"folie": "60, 101",
"kap": "1 Einführung in die NKA"
},
{
"term": "Validierung",
"en": "validation",
"def": "Prozess, bei dem festgestellt wird, ob die Stakeholderanforderungen aus Sicht der fordernden Stakeholder angemessen umgesetzt wurden.",
"folie": "63",
"kap": "Zum Seminar"
},
{
"term": "Verifizierung",
"en": "verification",
"def": "Prozess, bei dem festgestellt wird, ob alle Anforderungen in entsprechende Produktmerkmale umgesetzt wurden.",
"folie": "64",
"kap": "1 Einführung in die NKA"
},
{
"term": "Aufgabe",
"en": "task",
"def": "Eine Menge von Aktivitäten, die durchgeführt werden, um ein bestimmtes Ziel zu erreichen",
"folie": "76",
"kap": "1 Einführung in die NKA"
},
{
"term": "Teilaufgabe",
"en": "subtask",
"def": "Ein Schritt, der durchgeführt wird, um eine Aufgabe zu erledigen.",
"folie": "77",
"kap": "Zum Seminar"
},
{
"term": "Ziel",
"en": "goal",
"def": "Das beabsichtigte Ergebnis der Aufgabe.",
"folie": "78",
"kap": "1 Einführung in die NKA"
},
{
"term": "Aufgabenmodell",
"en": "task model",
"def": "Eine Beschreibung einer Aufgabe, die aus dem Grund für das Beginnen der Aufgabe, dem Ziel, das sie unterstützt, und den Teilaufgaben besteht, die ausgeführt werden müssen, um die Aufgabe zu erledigen",
"folie": "79",
"kap": "1 Einführung in die NKA"
},
{
"term": "Aufgabenobjekt",
"en": "task object",
"def": "Die Objekte, die von einer Person erstellt, verändert oder inspiziert werden, um die beabsichtigten Ergebnisse einer Aufgabe zu erzielen.",
"folie": "84",
"kap": "1 Einführung in die NKA"
},
{
"term": "Umgebung",
"en": "environment",
"def": "Die physischen, sozialen und technischen Bedingungen, unter denen ein Benutzer mit einem interaktiven System interagiert",
"folie": "89",
"kap": "1 Einführung in die NKA"
},
{
"term": "Ressourcen",
"en": "resources",
"def": "Alle Mittel, die erforderlich sind, um ein beabsichtigtes Ergebnis im Nutzungskontext zu erreichen",
"folie": "91",
"kap": "1 Einführung in die NKA"
},
{
"term": "Nutzungskontext für die Gestaltung",
"en": "context of use for design",
"def": "Eine Teilmenge des Nutzungskontextes, die als Grundlage für die Gestaltung eines interaktiven Systems verwendet wird.",
"folie": "93",
"kap": "1 Einführung in die NKA"
},
{
"term": "Aufgabenmodell für die Gestaltung",
"en": "task model used for design",
"def": "Aufgabenmodelle des gegenwärtigen Nutzungskontextes können in Aufgabenmodelle für die Gestaltung überführt werden. Es wird berücksichtigt, wie die Aufgabe durch das zu entwickelnde interaktive System unterstützt wird.",
"folie": "94",
"kap": "1 Einführung in die NKA"
},
{
"term": "Qualitative Nutzungsanforderung",
"en": "qualitative user requirement",
"def": "Eine Aussage darüber, was Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.",
"folie": "102",
"kap": "Zum Seminar"
},
{
"term": "Quantitative Nutzungsanforderung",
"en": "quantitative user requirement",
"def": "Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, User Experience, Barrierefreiheit und der Vermeidung von Schäden durch die Benutzung.",
"folie": "109",
"kap": "Zum Seminar"
},
{
"term": "Sponsor",
"en": "sponsor",
"def": "Stakeholder, der das Budget für ein Entwicklungsprojekt bereitstellt.",
"folie": "123",
"kap": "2 NKA planen"
},
{
"term": "Menschzentrierte Qualitätsziele",
"en": "human-centred quality objectives",
"def": "Ein beabsichtigtes Ergebnis der Entwicklung eines interaktiven Systems für den Benutzer, das sich auf die Usability, die Barrierefreiheit, die User Experience oder die Vermeidung von Schäden durch die Benutzung bezieht",
"folie": "124",
"kap": "2 NKA planen"
},
{
"term": "Nutzungskontextinformation",
"en": "context of use information",
"def": "Fragment einer Nutzungskontextbeschreibung, das Erfordernisse enthält.",
"folie": "132",
"kap": "1 Einführung in die NKA"
},
{
"term": "Empirische Information",
"en": "empirical information",
"def": "Faktische Information, die im Nutzungskontext durch kontextuelle Interviews oder Beobachtungen erhoben wurde.",
"folie": "133",
"kap": "Zum Seminar"
},
{
"term": "Konstruierte Information",
"en": "constructed information",
"def": "Eine Information, die aus empirischer Information abgeleitet wurde. Z.B. Personas, Anforderungen",
"folie": "133",
"kap": "Zum Seminar"
},
{
"term": "Annahmen",
"en": "assumptions",
"def": "Annahmen sind Informationen, die nicht auf empirische Informationen zurückgeführt werden können.",
"folie": "133",
"kap": "Zum Seminar"
},
{
"term": "User Research",
"en": "user research",
"def": "User Research umfasst alle Aktivitäten während der Analyse, Design und Usability-Evaluierung interaktiver Systeme, bei denen in Zusammenarbeit mit Benutzern Informationen gesammelt werden über: Nutzungskontext · Wünsche, Vorlieben und Abneigungen · Nutzungsprobleme bei der Nutzung von interaktiven Systemen",
"folie": "134",
"kap": "2 NKA planen"
},
{
"term": "Klassische Nutzungskontextanalyse",
"en": "classic",
"def": "Vorgehen bei der Nutzungskontextanalyse, bei dem systematisch ohne Annahmen über den Nutzungskontext zunächst alle Nutzungskontextinformationen erhoben werden und erst dann Erfordernisse und ableitbare Nutzungsanforderungen ermittelt werden.",
"folie": "136",
"kap": "2 NKA planen"
},
{
"term": "Design Thinking",
"en": "design thinking",
"def": "Ein systematischer Ansatz zur Erarbeitung von Lösungen für komplexe Probleme in allen Lebensbereichen, bei dem menschliche Werte Vorrang vor technischen oder wirtschaftlichen Zwängen haben. Es ist ein Instrument zur Bewältigung unbekannter Problemstellungen und wird bei der Entwicklung von Produkten, Dienstleistungen oder Prozessinnovationen verwendet.",
"folie": "144",
"kap": "2 NKA planen"
},
{
"term": "Lean UX",
"en": "lean UX",
"def": "Ein Ansatz der menschzentrierten Gestaltung, der Prinzipien und Methoden für Usability und User Experience in die agile Entwicklung integriert und damit wirtschaftliche Vorteile erzielt.",
"folie": "151",
"kap": "2 NKA planen"
},
{
"term": "Benutzergruppe",
"en": "user group",
"def": "Eine Gruppe von Benutzern mit gleichen oder ähnlichen persönlichen Merkmalen und Nutzungskontexten in Bezug auf das interaktive System.",
"folie": "157",
"kap": "3 Information erheben"
},
{
"term": "Benutzergruppenprofil",
"en": "user-group profile",
"def": "Eine verallgemeinerte Beschreibung einer Benutzergruppe.",
"folie": "157",
"kap": "3 Information erheben"
},
{
"term": "Usability (Gebrauchstauglichkeit)",
"en": "usability",
"def": "Das Ausmaß, in dem ein interaktives System von bestimmten Benutzern benutzt werden kann, um in einem bestimmten Nutzungskontext bestimmte Ziele effektiv, effizient und zufriedenstellend zu erreichen.",
"folie": "158",
"kap": "3 Information erheben"
},
{
"term": "Rekrutierungsfragebogen",
"en": "recruitment screener",
"def": "Eine Reihe von Kriterien, die aus dem Benutzergruppenprofil abgeleitet wurden und die die Teilnehmer einer Nutzungskontextanalyse erfüllen müssen, sowie eine Reihe von Fragen, mit denen überprüft werden kann, ob die Kriterien erfüllt sind.",
"folie": "160",
"kap": "3 Information erheben"
},
{
"term": "Moderator",
"en": "moderator",
"def": "Eine neutrale Person, die ein Interview, Beobachtung, Fokusgruppe oder Usability-Testsitzung leitet.",
"folie": "166",
"kap": "3 Information erheben"
},
{
"term": "Protokollant",
"en": "note-taker",
"def": "Ein User Experience Professional, der während einer Usability-Testsitzung, einer Fokusgruppe oder einem Interview Notizen über Usability-Befunde macht.",
"folie": "167",
"kap": "3 Information erheben"
},
{
"term": "Beobachter",
"en": "observer",
"def": "Eine Person, die Benutzer in einer Beobachtung, Usability-Testsitzung oder Fokusgruppe beobachtet.",
"folie": "168",
"kap": "3 Information erheben"
},
{
"term": "Interview",
"en": "interview",
"def": "Eine Methode der Datensammlung, die einige sorgfältig ausgewählte Personen eingehend befragt, um zu einem besseren Verständnis des Nutzungskontextes zu gelangen.",
"folie": "170",
"kap": "3 Information erheben"
},
{
"term": "Interviewleitfaden",
"en": "interview guide",
"def": "Eine schriftliche Liste geeigneter Fragen und Hinweise, die der Interviewer während eines Interviews verwendet, um sicherzustellen, dass alle relevanten Themen abgedeckt werden.",
"folie": "170",
"kap": "3 Information erheben"
},
{
"term": "Kontextuelles Interview",
"en": "contextual interview",
"def": "Ein Interview, das an dem Ort stattfindet, an dem die Benutzer normalerweise Aufgaben in Zusammenhang mit dem interaktiven System ausführen.",
"folie": "171",
"kap": "3 Information erheben"
},
{
"term": "Meister-Schüler-Modell",
"en": "master-apprentice model",
"def": "Ein Prinzip für ein erfolgreiches kontextuelles Interview: Der Interviewer behandelt den Benutzer als den Meister, während der Interviewer selbst der Schüler ist. Ziel des Meister-Schüler-Modells ist es, die Ziele und Aufgaben des Benutzers im Detail zu verstehen, indem man als Schüler vom Benutzer als Meister lernt.",
"folie": "172",
"kap": "3 Information erheben"
},
{
"term": "Offene Frage",
"en": "open question",
"def": "Eine Frage in einem Interview, die keinen Hinweis auf das erwartete Format oder den erwarteten Inhalt der Antwort gibt.",
"folie": "173",
"kap": "3 Information erheben"
},
{
"term": "Geschlossene Frage",
"en": "closed question",
"def": "Eine Interviewfrage, die eine Antwort aus einem vordefinierten Satz von Alternativen fordert.",
"folie": "173",
"kap": "3 Information erheben"
},
{
"term": "Neutrale Frage",
"en": "neutral question",
"def": "Eine Frage in einem Interview, die keine impliziten Annahmen beinhaltet und auch keinen Ansatz bietet, irgendetwas auszuschließen oder die Antwort in eine bestimmte Richtung zu lenken.",
"folie": "173",
"kap": "3 Information erheben"
},
{
"term": "Suggestivfrage",
"en": "leading question",
"def": "Eine Frage in einem Interview, die eine Präferenz für bestimmte Antwortmöglichkeiten vorgibt oder versucht, die Antwort in eine bestimmte Richtung zu lenken.",
"folie": "173",
"kap": "3 Information erheben"
},
{
"term": "Beobachtung",
"en": "observation",
"def": "Eine Methode zum Sammeln von Kontextinformationen zu den Erfordernissen des Nutzungskontextes, bei der ein User Experience Professional Benutzer beobachtet, die mit dem interaktiven System Aufgaben ausführen.",
"folie": "178",
"kap": "3 Information erheben"
},
{
"term": "Cultural Probe",
"en": "cultural probe",
"def": "Spezialfall der Beobachtung, bei der der Benutzer sich selbst beobachtet bzw. Proben, Spuren seiner Aktivitäten im Nutzungskontext sammelt und für die Auswertung zur Verfügung stellt, z. B. Fotos, Notizzettel, Skizzen, ...",
"folie": "179",
"kap": "3 Information erheben"
},
{
"term": "Tagebuchstudie",
"en": "diary study",
"def": "Eine Spezialform der Beobachtung, bei der die Teilnehmer bestimmte Ereignisse, Gefühle, Verhaltensweisen und Interaktionen in einer mobilen Anwendung oder einem Papiertagebuch aufzeichnen, um einen Einblick in die User Experience mit einem interaktiven System zu geben.",
"folie": "179",
"kap": "3 Information erheben"
},
{
"term": "Fokusgruppe",
"en": "focus group",
"def": "Eine moderierte Diskussion über vorgegebene Themen und Fragen zwischen Mitgliedern einer oder mehrerer Benutzergruppen.",
"folie": "186",
"kap": "3 Information erheben"
},
{
"term": "Mentales Modell",
"en": "mental model",
"def": "Das Konzept, das Menschen von sich selbst, anderen, der Umgebung und der Funktionsweise der Dinge, mit denen sie interagieren, entwickelt haben.",
"folie": "194",
"kap": "3 Information erheben"
},
{
"term": "Bedürfnis",
"en": "user need",
"def": "Ein Bedürfnis kann als Zustand oder Erleben eines Mangels, verbunden mit dem Wunsch ihn zu beheben, definiert werden.",
"folie": "201",
"kap": "3 Information erheben"
},
{
"term": "Nutzungskontextbeschreibung",
"en": "context of use discription",
"def": "Alle Arten von Darlegungen, die die Benutzer, Ziele, Aufgaben, Ressourcen und Umgebungen beschreiben, die durch die Analyse von Beobachtungen, kontextuellen Interviews, Fokusgruppen und Benutzerbefragungen ermittelt wurden.",
"folie": "209",
"kap": "3 Information erheben"
},
{
"term": "Ist-Szenario",
"en": "as-is scenario",
"def": "Eine erzählende, textuelle Beschreibung, wie ein Benutzer derzeit eine oder mehrere Aufgaben im aktuellen Nutzungskontext erledigt.",
"folie": "214",
"kap": "3 Information erheben"
},
{
"term": "Persona",
"en": "persona",
"def": "Eine Beschreibung eines konstruierten, aber realistischen Benutzers und was dieser bei der Benutzung eines interaktiven Systems beabsichtigt",
"folie": "216",
"kap": "3 Information erheben"
},
{
"term": "Affinity-Diagramm",
"en": "affinity diagram",
"def": "Ein strukturiertes Format für die Dokumentation von Ergebnissen aus der Analyse qualitativer Daten.",
"folie": "224",
"kap": "3 Information erheben"
},
{
"term": "User Journey",
"en": "user journey",
"def": "Ein Verfahren, das dazu dient, eine Beschreibung der \"Begegnung\" von Benutzenden mit dem interaktiven System und der Organisation über alle Berührungspunkte (touchpoints) an denen die User Experience entsteht, für Dritte erfahrbar zu machen.",
"folie": "226",
"kap": "3 Information erheben"
},
{
"term": "User Journey Map",
"en": "user journey map",
"def": "Eine lineare Darstellung der Interaktion eines Benutzers mit dem interaktiven System und der betreibenden Organisation, die alle Berührungspunkte abdeckt, die die User Experience beeinflussen.",
"folie": "227",
"kap": "3 Information erheben"
},
{
"term": "Zielkatalog",
"en": "goal catalogue",
"def": "Ein Zielkatalog ist eine tabellarische Darstellung aller identifizierten Ziele, die für das Benutzerverhalten im Nutzungskontext Relevanz haben.",
"folie": "232",
"kap": "3 Information erheben"
},
{
"term": "Umgebungsmodell",
"en": "environment model",
"def": "Umgebungsmodelle (sozial und physisch) beschreiben die besonderen Merkmale der jeweiligen Umgebung.",
"folie": "234",
"kap": "3 Information erheben"
},
{
"term": "Informationsmodell",
"en": "information model",
"def": "Informationsmodelle (Informationsobjekte) beschreiben die dem Aufgabenmodell und den Aufgabenobjekten innewohnende Struktur der Information.",
"folie": "234",
"kap": "3 Information erheben"
},
{
"term": "Informatorisches Erfordernis",
"en": "informational need",
"def": "Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Informationen angibt.",
"folie": "248",
"kap": "4 Erfordernisse identifizieren"
},
{
"term": "Ressourcenerfordernis",
"en": "resource need",
"def": "Ein Erfordernis, das die für die Erledigung einer Aufgabe erforderlichen spezifischen Ressourcen angibt.",
"folie": "249",
"kap": "4 Erfordernisse identifizieren"
},
{
"term": "Kompetenzerfordernis",
"en": "competence need",
"def": "Ein Erfordernis, dass eine bestimmte Kompetenz oder Fähigkeit in einer Benutzergruppe vorhanden sein muss.",
"folie": "250",
"kap": "4 Erfordernisse identifizieren"
},
{
"term": "Nutzungsanforderung",
"en": "user requirement",
"def": "Anforderungen an die Nutzung, die die Basis für die Gestaltung und Evaluierung eines interaktiven Systems in Hinblick auf identifizierte Erfordernisse bilden.",
"folie": "261",
"kap": "5 NA ableiten"
},
{
"term": "Qualitative Nutzungsanforderung",
"en": "qualitative user requirement",
"def": "Eine Aussage darüber, was die Benutzer im Rahmen der Durchführung einer Aufgabe mit dem interaktiven System erkennen, auswählen oder eingeben können müssen, um den identifizierten Erfordernissen des Nutzungskontextes zu genügen.",
"folie": "262",
"kap": "5 NA ableiten"
},
{
"term": "Quantitative Nutzungsanforderung",
"en": "quantitative user requirement",
"def": "Ein erforderliches Maß an menschzentrierter Qualität, um identifizierte Erfordernisse in einem bestimmten Nutzungskontext zu erfüllen, ausgedrückt in Maßen für die Usability, Barrierefreiheit, User Experience und Vermeidung von Schäden durch die Benutzung.",
"folie": "262",
"kap": "5 NA ableiten"
},
{
"term": "Kano-Schema",
"en": "Kano scheme",
"def": "Ein Einstufungssystem für die Priorität von qualitativen Nutzungsanforderungen oder (daraus abgeleiteten) Funktionen eines interaktiven Systems aus Benutzersicht.",
"folie": "280",
"kap": "6 Konsolidieren & priorisieren"
},
{
"term": "Priorisierung",
"en": "prioritization",
"def": "Eine Aktivität, bei der festgelegt wird, ob und wann eine identifizierte Anforderung umgesetzt wird.",
"folie": "290",
"kap": "6 Konsolidieren & priorisieren"
},
{
"term": "Produkt-Roadmap",
"en": "product road map",
"def": "Darstellung, die zeigt, wie sich ein Produkt über Releases hinweg in definierten Zeiträumen bzgl. seines Funktionsumfangs entwickeln soll.",
"folie": "291",
"kap": "6 Konsolidieren & priorisieren"
},
{
"term": "Produktmanagement",
"en": "product management",
"def": "Disziplin in der Produktentwicklung, die die Planung, Steuerung und Kontrolle eines Produkts von seiner Entstehung bis hin zum Ausscheiden aus dem Markt (Produktlebenszyklus) umfasst, mit dem Ziel, ein marktkonformes Ergebnis zu erzielen.",
"folie": "297",
"kap": "7 Schnittstellen"
},
{
"term": "Produktmanager",
"en": "product manager",
"def": "Rolle im Produktmanagement, die typischerweise die Planung, Steuerung und Kontrolle eines Produkts von seiner Entstehung bis hin zum Ausscheiden aus dem Markt verantwortet.",
"folie": "297",
"kap": "7 Schnittstellen"
},
{
"term": "Requirements Engineering",
"en": "Requirements Engineering",
"def": "Disziplin, die das systematische Spezifizieren und Verwalten von Stakeholderanforderungen und Systemanforderungen umfasst.",
"folie": "298",
"kap": "7 Schnittstellen"
},
{
"term": "Systems Engineering",
"en": "Systems Engineering",
"def": "Disziplin in der Produktentwicklung, die für die technische Realisierung des interaktiven Systems verantwortlich ist.",
"folie": "299",
"kap": "7 Schnittstellen"
},
{
"term": "Modellbasierte Nutzungskontextanalyse",
"en": "model-based",
"def": "Vorgehen bei der Nutzungskontextanalyse, bei dem auf Basis bekannter Nutzungskontextinformationen, vorliegender Aufgabenmodelle, bereits bekannter Nutzungsanforderungen und Nutzungsszenarien und/oder vorhandener Prototypen offene Fragen über den Nutzungskontext gesammelt werden, mit deren Hilfe dann systematisch in kontextuellen Interviews und/oder Beobachtungen empirische Informationen über den Nutzungskontext eingeholt werden.",
"folie": "136",
"kap": "2 NKA planen"
}
];
const KARTEN_ANZAHL = KARTEN.length;
