/* Theoretische Prüfung CPUX-UR, Fragen und Lösungen im Wortlaut aus
   CPUX-UR_DE_Oeffentliche-Beispielpruefung.pdf (Version 3.1 DE, UXQB e. V.). Erzeugt mit parse_exam.py. */
const EXAM_Q = [
 {
  "n": 1,
  "k": 1,
  "lo": "1.1.a",
  "stem": [
   "Welche EINE der folgenden Dimensionen bezieht sich NICHT auf die technische Qualität?"
  ],
  "opts": [
   [
    "A",
    "Wartbarkeit"
   ],
   [
    "B",
    "Sicherheit"
   ],
   [
    "C",
    "Zuverlässigkeit"
   ],
   [
    "D",
    "Vermeidung von Schäden durch die Nutzung"
   ],
   [
    "E",
    "Interoperabilität"
   ],
   [
    "F",
    "Funktionale Angemessenheit"
   ]
  ],
  "ok": [
   "D"
  ],
  "notes": [
   [
    "p",
    "D ist die richtige Antwort. “Vermeidung von Schäden durch die Nutzung” ist eine Dimension von menschzentrierter Qualität."
   ],
   [
    "p",
    "Die Antworten A, B, C, E, F nennen Dimensionen technischer Qualität."
   ]
  ]
 },
 {
  "n": 2,
  "k": 3,
  "lo": "1.1.b",
  "stem": [
   "Betrachten Sie die folgenden Aussagen über verschiedene Arten von Informationen:",
   "1. Der Koch muss die richtigen Zutaten haben, um eine bestimmte Mahlzeit kochen zu können.",
   "2. Der Koch muss am System erkennen können, welche Hilfsmittel zur Erstellung der Mahlzeit benötigt werden.",
   "3. Das System muss einen Signalton ausgeben, damit der Koch weiß, dass der nächste Kochschritt erfolgen soll.",
   "4. Die Mehrheit der Köche kocht Rezepte für zwei Personen.",
   "5. Der Koch muss wissen, für wie viele Personen das Rezept gedacht ist, um die richtige Menge kochen zu können.",
   "Welche DREI der folgenden Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "1 und 3 sind Erfordernisse."
   ],
   [
    "B",
    "3 ist eine Lösung."
   ],
   [
    "C",
    "5 ist eine Marktanforderung."
   ],
   [
    "D",
    "2 ist eine Nutzungsanforderung."
   ],
   [
    "E",
    "3 ist eine Nutzungsanforderung."
   ],
   [
    "F",
    "4 ist eine Nutzungskontextinformation."
   ]
  ],
  "ok": [
   "B",
   "D",
   "F"
  ],
  "notes": [
   [
    "p",
    "B, D und F sind die richtigen Antworten."
   ],
   [
    "li",
    "B ist richtig. 3 nennt ein Produktattribut und ist daher eine Lösung."
   ],
   [
    "li",
    "D ist richtig. 2 nennt eine Nutzungsanforderung, weil sie eine Aussage darüber enthält, was ein Benutzer erkennen können muss."
   ],
   [
    "li",
    "F ist richtig. 4 ist eine Nutzungskontextinformation, weil sie sachliche Informationen über den Nutzungskontext angibt."
   ],
   [
    "p",
    "A, C und E sind falsche Antworten:"
   ],
   [
    "li",
    "A ist eine falsche Antwort, weil 3 eine Lösung ist und kein Erfordernis."
   ],
   [
    "li",
    "C ist eine falsche Antwort, weil 5 ein Erfordernis ist und keine Marktanforderung."
   ],
   [
    "li",
    "E ist eine falsche Antwort, weil 3 eine Lösung ist und keine Nutzungsanforderung."
   ]
  ]
 },
 {
  "n": 3,
  "k": 3,
  "lo": "1.1.g",
  "stem": [
   "Welche DREI Aussagen über Gestaltungsregeln sind NICHT richtig?"
  ],
  "opts": [
   [
    "A",
    "Eine Gestaltungsregel ist eine zu befolgende Regel, die nicht aus dem spezifischen Nutzungskontext für das interaktive System abgeleitet wurde."
   ],
   [
    "B",
    "Eine Gestaltungsregel ist eine Nutzungsanforderung, da sie beschreibt, wie die Benutzungsschnittstelle für eine gute Gebrauchstauglichkeit gestaltet sein sollte."
   ],
   [
    "C",
    "Eine Gestaltungsregel ist eine Marktanforderung."
   ],
   [
    "D",
    "Eine Gestaltungsregel ist typischerweise über verschiedene Nutzungskontexte hinweg anwendbar."
   ],
   [
    "E",
    "Eine Gestaltungsregel ist eine Lösung, weil sie ein Merkmal des interaktiven Systems ist."
   ],
   [
    "F",
    "Der Begriff „Gestaltungsregel“ ist Bestandteil des CPUX-UR-Curriculums."
   ]
  ],
  "ok": [
   "B",
   "C",
   "E"
  ],
  "notes": [
   [
    "p",
    "B, C und E sind die richtigen Antworten."
   ],
   [
    "li",
    "B ist richtig, weil Gestaltungsregeln keine Nutzungsanforderungen sind."
   ],
   [
    "li",
    "C ist richtig, weil Gestaltungsregeln keine Marktanforderungen sind."
   ],
   [
    "li",
    "E ist richtig, weil Gestaltungsregeln keine Lösungen sind, sondern Regeln für die Gestaltung von Lösungen."
   ],
   [
    "p",
    "A, D und F sind falsche Antworten:"
   ],
   [
    "li",
    "A beschreibt richtig, was eine Gestaltungsregel ist."
   ],
   [
    "li",
    "D beschreibt richtig, dass Gestaltungsregeln in vielen Nutzungskontexten gelten."
   ],
   [
    "li",
    "F beschreibt richtig, dass der Begriff \"Gestaltungsregel\" eine Art von Information im CPUX-UR-Lehrplan ist."
   ]
  ]
 },
 {
  "n": 4,
  "k": 2,
  "lo": "1.1.h",
  "stem": [
   "Welche ZWEI der folgenden Aussagen beschreiben Lösungen?"
  ],
  "opts": [
   [
    "A",
    "Allergiker müssen am System erkennen können, wie hoch die Pollenbelastung in den nächsten 7 Tagen sein wird."
   ],
   [
    "B",
    "Benutzungsschnittstellen sollten die Nutzungsanforderungen befriedigen."
   ],
   [
    "C",
    "Die übliche Blütezeit einer Pollenart wird in einem Jahreskalender angezeigt."
   ],
   [
    "D",
    "Wenn der Pollenflug stark ist, wird ein rotes Warn-Symbol angezeigt."
   ],
   [
    "E",
    "80% der Benutzer sollten innerhalb von 2 Sekunden erkennen können, ob die Pollen, gegen die sie allergisch sind, heute in ihrer Region fliegen."
   ],
   [
    "F",
    "Allergiker sind im Durchschnitt gegen drei verschiedene Pollenarten allergisch. ."
   ]
  ],
  "ok": [
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "C und D sind die richtigen Antworten."
   ],
   [
    "li",
    "C ist richtig, weil es ein Produktmerkmal beschreibt."
   ],
   [
    "li",
    "D ist richtig, weil es ein Produktmerkmal beschreibt."
   ],
   [
    "p",
    "A, B, E und F sind falsche Antworten:"
   ],
   [
    "li",
    "A ist eine Nutzungsanforderung."
   ],
   [
    "li",
    "B ist eine Empfehlung, die immer gilt."
   ],
   [
    "li",
    "E ist eine quantitative Nutzungsanforderung."
   ],
   [
    "li",
    "F ist eine Nutzungskontextinformation."
   ]
  ]
 },
 {
  "n": 5,
  "k": 3,
  "lo": "1.2.c",
  "stem": [
   "Welche DREI Aussagen über Stakeholderanforderungen und Systemanforderungen sind NICHT richtig?"
  ],
  "opts": [
   [
    "A",
    "Systemanforderungen werden aus Stakeholderanforderungen abgeleitet."
   ],
   [
    "B",
    "Stakeholderanforderungen sind nicht mehr relevant, nachdem sie in Systemanforderungen überführt worden sind."
   ],
   [
    "C",
    "Menschzentrierte Qualität umfasst die Erfüllung von Stakeholderanforderungen."
   ],
   [
    "D",
    "Anforderungen lassen sich in organisatorische Anforderungen und Nutzungsanforderungen unterscheiden."
   ],
   [
    "E",
    "Laut Curriculum sind Nutzungsanforderungen eine Art von Systemanforderungen."
   ],
   [
    "F",
    "Quantitative Nutzungsanforderungen sind Stakeholderanforderungen."
   ]
  ],
  "ok": [
   "B",
   "D",
   "E"
  ],
  "notes": [
   [
    "p",
    "B, D und E sind die richtigen Antworten."
   ],
   [
    "li",
    "B ist richtig, weil Stakeholderanforderungen die Basis für den Entwurf der Lösung aus der Sicht der Stakeholder sind. Die Überführung von Stakeholderanforderungen in Systemanforderungen macht die Stakeholderanforderungen nicht überflüssig."
   ],
   [
    "li",
    "D ist richtig, weil Anforderungen nicht nur in organisatorische Anforderungen und Nutzungsanforderungen unterschieden werden können. (Anforderungen werden in gesetzliche Anforderungen, Marktanforderungen, organisatorische Anforderungen, fachliche Anforderungen, Nutzungsanforderungen und Systemanforderungen unterschieden)."
   ],
   [
    "li",
    "E ist richtig, weil Nutzungsanforderungen nicht eine Art von Systemanforderungen sind (sondern eine Art von Stakeholderanforderungen)"
   ],
   [
    "p",
    "A, C und F sind falsche Antworten:"
   ],
   [
    "li",
    "A beschreibt richtig, dass die Systemanforderungen aus den Stakeholderanforderungen abgeleitet werden."
   ],
   [
    "li",
    "C beschreibt richtig, dass menschzentrierte Qualität die Befriedigung von Stakeholderanforderungen beinhaltet."
   ],
   [
    "li",
    "F beschreibt richtig, dass es sich bei quantitativen Nutzungsanforderungen um Stakeholderanforderungen handelt."
   ]
  ]
 },
 {
  "n": 6,
  "k": 2,
  "lo": "1.2.d",
  "stem": [
   "Welche ZWEI der folgenden Aussagen über Nutzungsanforderungen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Nutzungsanforderungen sind Teil der Stakeholderanforderungen."
   ],
   [
    "B",
    "Marktanforderungen sind eine bestimmte Art von Nutzungsanforderungen."
   ],
   [
    "C",
    "Ohne Marktanforderungen ist es nicht möglich, Nutzungsanforderungen abzuleiten."
   ],
   [
    "D",
    "Nutzungsanforderungen können mit Marktanforderungen in Widerspruch stehen."
   ],
   [
    "E",
    "Marktanforderungen können Nutzungsanforderungen außer Kraft setzen."
   ],
   [
    "F",
    "Qualitative Nutzungsanforderungen können immer als quantitative Nutzungsanforderungen ausgedrückt werden."
   ]
  ],
  "ok": [
   "A",
   "D"
  ],
  "notes": [
   [
    "p",
    "A und D sind die richtigen Antworten."
   ],
   [
    "li",
    "A ist richtig, weil Nutzungsanforderungen Teil der Stakeholderanforderungen sind."
   ],
   [
    "li",
    "D ist richtig, weil Nutzungsanforderungen im Widerspruch zu Marktanforderungen stehen können."
   ],
   [
    "p",
    "B, C, E und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil Marktanforderungen keine bestimmte Art von Nutzungsanforderungen sind."
   ],
   [
    "li",
    "C ist falsch, weil Nutzungsanforderungen von Erfordernissen abgeleitet werden, nicht unbedingt von Marktanforderungen."
   ],
   [
    "li",
    "E ist falsch, weil Anforderungen andere Anforderungen nicht \"außer Kraft setzen\". Die verschiedenen Arten von Anforderungen implizieren keine Rangfolge. Wenn z.B. Marktanforderungen implementiert werden, die im Widerspruch zu Nutzungsanforderungen stehen, werden die Nutzungsanforderungen nicht außer Kraft gesetzt. Sie sind weiterhin vorhanden, haben aber eine niedrigere Priorität erhalten."
   ],
   [
    "li",
    "F ist falsch, weil qualitative Nutzungsanforderungen typischerweise nicht als quantitative Nutzungsanforderungen ausgedrückt werden können. Es handelt sich um zwei verschiedene Arten von Nutzungsanforderungen."
   ]
  ]
 },
 {
  "n": 7,
  "k": 2,
  "lo": "1.2.e",
  "stem": [
   "Welche ZWEI Aussagen über Verifizierung und Validierung sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Eine Usability-Inspektion durch einen Usability-Experten, bei der überprüft wird, ob die Nutzungsanforderungen umgesetzt wurden, ist eine Validierung."
   ],
   [
    "B",
    "Eine Usability-Inspektion durch einen Usability-Experten, bei der überprüft wird, ob die Gestaltungsregeln angewendet wurden, ist eine Verifizierung."
   ],
   [
    "C",
    "Ein Usability-Test, der prüft, ob die Nutzungsanforderungen aus Benutzersicht angemessen umgesetzt wurden, ist eine Validierung."
   ],
   [
    "D",
    "Ein Usability-Test, der prüft, ob die Nutzungsanforderungen aus Benutzersicht angemessen umgesetzt wurden, ist eine Verifizierung."
   ],
   [
    "E",
    "Validierung ist der Prozess, bei dem festgestellt wird, ob alle Anforderungen durch eine geeignete Produkteigenschaft unterstützt werden."
   ],
   [
    "F",
    "Verifizierung ist der Prozess, bei dem festgestellt wird, ob alle Stakeholder- Anforderungen aus Sicht aller Stakeholder wirksam umgesetzt wurden."
   ]
  ],
  "ok": [
   "B",
   "C"
  ],
  "notes": [
   [
    "p",
    "B und C sind die richtigen Antworten."
   ],
   [
    "li",
    "B ist richtig, weil Inspektionen Verifizierungen sind."
   ],
   [
    "li",
    "C ist richtig, weil ein Usability-Test eine Validierung aus Sicht der Stakeholder-Gruppe \"primäre und sekundäre Benutzer\" ist."
   ],
   [
    "p",
    "A, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil Inspektionen Verifizierungen sind. Validierungen beziehen immer Stakeholder mit ein."
   ],
   [
    "li",
    "D ist falsch, weil ein Usability-Test eine Validierung aus Sicht der Stakeholder-Gruppe \"primäre und sekundäre Benutzer\" ist."
   ],
   [
    "li",
    "E ist falsch, weil dies die Definition von Verifizierung ist."
   ],
   [
    "li",
    "F ist falsch, weil dies die Definition von Validierung ist."
   ]
  ]
 },
 {
  "n": 8,
  "k": 3,
  "lo": "1.3.a",
  "stem": [
   "Welche DREI der folgenden Auswahlmöglichkeiten sind Komponenten des Nutzungskontexts?"
  ],
  "opts": [
   [
    "A",
    "Erfordernisse"
   ],
   [
    "B",
    "Soziale Bedingungen"
   ],
   [
    "C",
    "Indirekte Benutzer"
   ],
   [
    "D",
    "Bildungsumgebung"
   ],
   [
    "E",
    "Aufgabenmodelle für die Gestaltung"
   ],
   [
    "F",
    "Sich erschöpfende Ressourcen"
   ]
  ],
  "ok": [
   "B",
   "C",
   "F"
  ],
  "notes": [
   [
    "p",
    "B, C und F sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil die sozialen Bedingungen Teil des Nutzungskontextes ist."
   ],
   [
    "li",
    "C ist richtig, weil indirekte Benutzer Teil des Nutzungskontextes sind."
   ],
   [
    "li",
    "F ist richtig, weil die sich erschöpfenden Ressourcen Teil des Nutzungskontextes sind."
   ],
   [
    "p",
    "A, D und E sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch; Erfordernisse sind nicht Teil des Nutzungskontexts. Sie können im Nutzungskontext identifiziert werden."
   ],
   [
    "li",
    "D ist falsch, weil \"Bildungsumgebung\" kein definierter Begriff ist."
   ],
   [
    "li",
    "E ist falsch, weil Aufgabenmodelle für die Gestaltung konstruierte Informationen sind. Nutzungskontextinformationen sind immer empirische Informationen."
   ]
  ]
 },
 {
  "n": 9,
  "k": 3,
  "lo": "1.3.b",
  "stem": [
   "Bei welchen DREI der folgenden Beispiele handelt es sich NICHT um Ziele?"
  ],
  "opts": [
   [
    "A",
    "Eine Urlaubsreise planen"
   ],
   [
    "B",
    "Erholt sein nach dem Urlaub"
   ],
   [
    "C",
    "Sich für ein Hotel entscheiden"
   ],
   [
    "D",
    "Festlegen, welche Kleidungsstücke mitgenommen werden"
   ],
   [
    "E",
    "Jederzeit einen Platz am Pool verfügbar haben"
   ],
   [
    "F",
    "Jeden Morgen ein abwechslungsreiches Frühstück im Hotel verfügbar haben"
   ]
  ],
  "ok": [
   "A",
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "A, C und D sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil “Einen Kuchen backen” eine Aufgabe ist."
   ],
   [
    "li",
    "C ist richtig, weil “Sich für einen Kuchen für die Gäste entscheiden” eine Teilaufgabe ist."
   ],
   [
    "li",
    "D ist richtig, weil “Kuchen in Stücke schneiden” eine Teilaufgabe ist."
   ],
   [
    "p",
    "B, E und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil dies eine Aussage über ein Ziel ist."
   ],
   [
    "li",
    "E ist falsch, weil dies eine Aussage über ein Ziel ist."
   ],
   [
    "li",
    "F ist falsch, weil dies eine Aussage über ein Ziel ist."
   ]
  ]
 },
 {
  "n": 10,
  "k": 3,
  "lo": "1.3.c",
  "stem": [
   "Betrachten Sie die folgenden Aussagen über Komponenten einer Aufgabe. Welche DREI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "\"Die Zahnpasta auf die Zahnbürste auftragen\" ist eine Teilaufgabe der Aufgabe \"Zähne putzen\"."
   ],
   [
    "B",
    "Bei der Aufgabe \"Die Zähne putzen\" stellt jeder Zahn ein Aufgabenobjekt der Aufgabe dar."
   ],
   [
    "C",
    "\"Zähne putzen\" ist eine Teilaufgabe der Aufgabe \"Den Körper pflegen\"."
   ],
   [
    "D",
    "Bei der Aufgabe \"Zähne putzen\" stellt das Wasser zum Ausspülen ein Aufgabenobjekt der Aufgabe dar."
   ],
   [
    "E",
    "\"Entscheiden, wann die Zähne geputzt werden sollen\" ist eine Teilaufgabe der Aufgabe \"Zähne putzen\"."
   ],
   [
    "F",
    "Die Aussagen A und E sind angestrebte Ergebnisse der Aufgabe \"Zähne putzen\"."
   ]
  ],
  "ok": [
   "A",
   "B",
   "E"
  ],
  "notes": [
   [
    "p",
    "A, B und E sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil es eine Teilaufgabe richtig beschreibt."
   ],
   [
    "li",
    "B ist richtig, weil es ein Aufgabenobjekt richtig beschreibt."
   ],
   [
    "li",
    "E ist richtig, weil es eine Teilaufgabe richtig beschreibt."
   ],
   [
    "p",
    "C, D und F sind falsche Antworten."
   ],
   [
    "li",
    "C ist falsch, weil \"Zähne putzen\" eine Aufgabe ist. \"Den Körper pflegen\" ist eine Menge von Aufgaben, die z.B. die Aufgaben \"Zähne putzen\" und \"Eine Dusche nehmen\" beinhalten können."
   ],
   [
    "li",
    "D ist falsch, weil „Wasser zum Ausspülen“ eine Ressource im Nutzungskontext ist."
   ],
   [
    "li",
    "F ist falsch, weil A und E Teilaufgaben sind und keine Beschreibungen von Zielen bzw. beabsichtigten Ergebnissen."
   ]
  ]
 },
 {
  "n": 11,
  "k": 2,
  "lo": "1.3.d",
  "stem": [
   "Denken Sie an die Aufgabe \"Mit dem Fahrrad zum Arbeitsplatz fahren\". Welche ZWEI der folgenden Optionen sind Vorbedingungen oder Nachbedingungen dieser Aufgabe?"
  ],
  "opts": [
   [
    "A",
    "Die Person hat an allen roten Ampeln angehalten."
   ],
   [
    "B",
    "Der Abfahrtszeitpunkt ist eingetreten, zu dem man am Arbeitsplatz noch pünktlich mit dem Fahrrad ankommen wird."
   ],
   [
    "C",
    "Aufgrund der Wetterverhältnisse entscheiden, ob man mit dem Fahrrad oder der Straßenbahn fährt."
   ],
   [
    "D",
    "Die Person ist pünktlich am Arbeitsplatz angekommen."
   ],
   [
    "E",
    "Das Fahrrad ist bereit für die Inspektion in der Werkstatt."
   ],
   [
    "F",
    "Den Luftdruck der Reifen prüfen."
   ]
  ],
  "ok": [
   "B",
   "D"
  ],
  "notes": [
   [
    "p",
    "B und D sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil dies die Bedingung beschreibt, die vorhanden sein muss, bevor die Aufgabe beginnen kann (\"Vorbedingung\")"
   ],
   [
    "li",
    "D ist richtig, weil dies die Bedingung angibt, die das beabsichtigte Ergebnis beschreibt (\"Nachbedingung\"), das wahr ist, wenn die Aufgabe erfolgreich abgeschlossen wurde."
   ],
   [
    "p",
    "A, C, E, F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil es sich um eine Aussage über ein Ergebnis einer Teilaufgabe handelt, die nicht direkt zum beabsichtigten Ergebnis der Aufgabe führt."
   ],
   [
    "li",
    "C ist falsch, weil dies eine Aussage über eine Teilaufgabe ist."
   ],
   [
    "li",
    "E ist falsch, weil dies eine Aussage über das Ergebnis einer Teilaufgabe ist, die nicht Teil der Aufgabe ist."
   ],
   [
    "li",
    "F ist falsch, weil dies eine Aussage über eine Teilaufgabe ist."
   ]
  ]
 },
 {
  "n": 12,
  "k": 2,
  "lo": "1.3.e",
  "stem": [
   "Welche ZWEI der folgenden Aussagen über Aufgabenmodelle und Nutzungskontext sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Der Lebenszyklus einer Aufgabe besteht typischerweise aus den Phasen \"planen, vorbereiten, auswählen, Ergebnis bewerten, Ergebnis weitergeben\"."
   ],
   [
    "B",
    "Ein Aufgabenmodell des Nutzungskontextes beschreibt die Teilaufgaben für jede Aufgabe, die von dem zukünftigen System unterstützt werden soll."
   ],
   [
    "C",
    "Ein Aufgabenmodell für die Gestaltung beschreibt eine Aufgabe und die Teilaufgaben, wie sie vom neuen oder vom überarbeiteten interaktiven System unterstützt werden."
   ],
   [
    "D",
    "Der Nutzungskontext für die Gestaltung kann Benutzergruppen ausschließen, die im Nutzungskontext identifiziert wurden."
   ],
   [
    "E",
    "Ein Aufgabenmodell endet immer mit genau einer Nachbedingung."
   ],
   [
    "F",
    "Ein Aufgabenmodell beschreibt die Logik von mindestens zwei Aufgaben einschließlich ihrer Teilaufgaben."
   ]
  ],
  "ok": [
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "C und D sind richtige Antworten."
   ],
   [
    "li",
    "C ist richtig, weil sie den Begriff \"Aufgabenmodell für die Gestaltung\" korrekt beschreibt."
   ],
   [
    "li",
    "D ist richtig, weil sie den Begriff \"Nutzungskontext für die Gestaltung\" als Teilmenge des Nutzungskontextes korrekt beschreibt."
   ],
   [
    "p",
    "A, B, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil \"auswählen\" keine Phase einer Aufgabe ist. (Die richtige Phase wäre \"durchführen\" gewesen)."
   ],
   [
    "li",
    "B ist falsch, weil ein Aufgabenmodell des Nutzungskontextes die Teilaufgaben für eine einzelne Aufgabe beschreibt, die im (gegebenen) Nutzungskontext vorkommt."
   ],
   [
    "li",
    "E ist falsch, da eine Aufgabe mehr als ein beabsichtigtes Ergebnis (\"Nachbedingungen\") haben kann."
   ],
   [
    "li",
    "F ist falsch, weil ein Aufgabenmodell die Teilaufgaben einer einzelnen Aufgabe beschreibt."
   ]
  ]
 },
 {
  "n": 13,
  "k": 3,
  "lo": "1.4.a",
  "stem": [
   "Betrachten Sie die folgenden Aussagen über Nutzungsanforderungen. Welche DREI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Die Relevanz bestimmter Nutzungsanforderungen in Bezug auf die Gebrauchstauglichkeit des gesamten interaktiven Systems kann je nach Benutzergruppe unterschiedlich sein."
   ],
   [
    "B",
    "Quantitative Nutzungsanforderungen sind generell wichtiger als qualitative Nutzungsanforderungen."
   ],
   [
    "C",
    "Die Nutzungsanforderungen sollten nach Implementierungsaufwand sortiert werden, um so zu ermitteln, wie viele Nutzungsanforderungen implementiert werden sollen."
   ],
   [
    "D",
    "Die Umsetzung einer bestimmten Nutzungsanforderung kann für die Gebrauchstauglichkeit des interaktiven Systems von größerer Bedeutung sein als die Umsetzung mehrerer anderer Nutzungsanforderungen."
   ],
   [
    "E",
    "Jede Nutzungsanforderung hat die gleichen Auswirkungen auf die Gebrauchstauglichkeit des interaktiven Systems."
   ],
   [
    "F",
    "Die Gebrauchstauglichkeit eines interaktiven Systems kann maßgeblich davon abhängen, ob eine bestimmte Nutzungsanforderung implementiert ist oder nicht."
   ]
  ],
  "ok": [
   "A",
   "D",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, D und F sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil Nutzungsanforderungen nicht für alle Benutzergruppen gleichermaßen relevant sind."
   ],
   [
    "li",
    "D ist richtig, weil unterschiedliche Nutzungsanforderungen unterschiedliche Relevanz für die Nutzung des Systems haben. Während manche Nutzungsanforderungen für die Gebrauchstauglichkeit des interaktiven Systems eine hohe Relevanz haben können, sind viele andere für die Gebrauchstauglichkeit des interaktiven Systems möglicherweise nur von begrenzter Relevanz."
   ],
   [
    "li",
    "F ist richtig (siehe Erläuterung zu Antwort D)."
   ],
   [
    "p",
    "B, C und E sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, denn ob es sich um eine qualitative oder quantitative Nutzungsanforderung handelt, ist nicht entscheidend für die Relevanz der Nutzungsanforderung für den Benutzer."
   ],
   [
    "li",
    "C ist falsch, da die Nutzungsanforderungen nach Aufgaben und Teilaufgaben sortiert werden sollten, damit die zu unterstützenden Aufgaben für die Benutzer im Fokus bleiben."
   ],
   [
    "li",
    "E ist falsch (siehe Erläuterung zu Antwort D)."
   ]
  ]
 },
 {
  "n": 14,
  "k": 3,
  "lo": "1.4.b",
  "stem": [
   "Betrachten Sie die folgenden Aussagen über Nutzungsanforderungen. Welche DREI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Quantitative Nutzungsanforderungen sind die zentrale Basis für die Gestaltung der Interaktion zwischen Benutzer und interaktivem System."
   ],
   [
    "B",
    "Qualitative Nutzungsanforderungen geben an, was die Benutzer bei der Erledigung von Aufgaben am interaktiven System erkennen, auswählen oder in das System eingeben können müssen."
   ],
   [
    "C",
    "Nutzungsanforderungen können direkt aus den Marktanforderungen abgeleitet werden."
   ],
   [
    "D",
    "Stakeholderanforderungen sind eine Quelle für quantitative Nutzungsanforderungen."
   ],
   [
    "E",
    "Jede qualitative Nutzungsanforderung muss auf einen oder mehrere Stakeholderanforderungen zurückverfolgt werden können."
   ],
   [
    "F",
    "Qualitative Nutzungsanforderungen lassen sich in Produktmerkmale aus Benutzersicht überführen und sind damit Basis für die Gestaltung der Interaktion zwischen Benutzer und interaktivem System."
   ]
  ],
  "ok": [
   "B",
   "D",
   "F"
  ],
  "notes": [
   [
    "p",
    "B, D und F sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil sie aussagt, was der Benutzer auf dem interaktiven System ausführen können muss."
   ],
   [
    "li",
    "D ist richtig, weil quantitative Nutzungsanforderungen hauptsächlich aus Stakeholderanforderungen abgeleitet werden."
   ],
   [
    "li",
    "F ist richtig, weil dies beschreibt, wie man Nutzungsanforderungen bei der Gestaltung verwendet."
   ],
   [
    "p",
    "A, C und E sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil quantitative Nutzungsanforderungen primär als Akzeptanzkriterien für das interaktive System dienen."
   ],
   [
    "li",
    "C ist falsch, weil die einzige direkte Quelle für qualitative Nutzungsanforderungen Erfordernisse sind."
   ],
   [
    "li",
    "E ist falsch, weil qualitative Nutzungsanforderungen auf ein oder mehrere Erfordernisse zurückführbar sein müssen."
   ]
  ]
 },
 {
  "n": 15,
  "k": 3,
  "lo": "1.4.c",
  "stem": [
   "Welche DREI Aussagen über Quellen für Nutzungsanforderungen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Antizipierte Usability-Probleme sind keine Quelle für Nutzungsanforderungen."
   ],
   [
    "B",
    "Marktanforderungen können eine indirekte Quelle für Nutzungsanforderungen sein."
   ],
   [
    "C",
    "Die direkte Quelle für Nutzungsanforderungen sind immer die im Nutzungskontext ermittelten Erfordernisse."
   ],
   [
    "D",
    "Nutzungsanforderungen können zu organisatorischen Anforderungen führen, aber nicht umgekehrt."
   ],
   [
    "E",
    "Heuristiken können eine indirekte Quelle für die Spezifikation von Nutzungsanforderungen sein."
   ],
   [
    "F",
    "Benutzerwünsche können einfach in Nutzungsanforderungen transformiert werden, indem die Syntaxregel für die Spezifikation von Nutzungsanforderungen angewendet wird."
   ]
  ],
  "ok": [
   "B",
   "C",
   "E"
  ],
  "notes": [
   [
    "p",
    "B, C und E sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil jede Stakeholderanforderung eine indirekte Quelle für Nutzungsanforderungen sein kann."
   ],
   [
    "li",
    "C ist richtig, weil Erfordernisse die einzige direkte Quelle für qualitative Nutzungsanforderungen sind."
   ],
   [
    "li",
    "E ist richtig, weil Heuristiken und auch Dialogprinzipien eine indirekte Quelle für die Spezifikation von Nutzungsanforderungen sein können."
   ],
   [
    "p",
    "A, D und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil antizipierte Usability-Probleme hinsichtlich unbefriedigter Erfordernisse analysiert werden können und als indirekte Quelle für Nutzungsanforderungen dienen."
   ],
   [
    "li",
    "D ist falsch, weil organisatorische Anforderungen zu Nutzungsanforderungen führen können."
   ],
   [
    "li",
    "F ist falsch, weil Benutzerwünsche zunächst auf den zugrundeliegenden Nutzungskontext und identifizierbare Erfordernisse innerhalb dieses Nutzungskontextes hin analysiert werden sollten."
   ]
  ]
 },
 {
  "n": 16,
  "k": 1,
  "lo": "2.1.b",
  "stem": [
   "Lesen Sie die folgenden menschzentrierten Qualitätsziele und überlegen Sie, auf welche Dimension der menschzentrierten Qualität sie sich beziehen.",
   "1. Benutzer müssen die gewünschte Serie auf der Streamingplattform innerhalb von",
   "20 Sekunden finden können.",
   "2. Benutzer der Altersgruppe 60+ sollen die Streamingplattform ohne Hilfe nutzen können.",
   "3. Benutzer sollen Serien, die sie schon begonnen haben, leicht weiterschauen können.",
   "4. Die neue Plattform soll Benutzern Serien anzeigen, die vergleichbar mit schon betrachteten Serien sind.",
   "Welche EINE der folgenden Aussagen ist zutreffend?"
  ],
  "opts": [
   [
    "A",
    "Alle Aussagen beziehen sich auf Usability als Dimension der menschzentrierten Qualität."
   ],
   [
    "B",
    "1 bezieht sich auf die Performanz als Dimension der menschzentrierten Qualität."
   ],
   [
    "C",
    "Alle obigen Aussagen beziehen sich auf die User Experience als Dimension der menschzentrierten Qualität."
   ],
   [
    "D",
    "2 bezieht sich auf die Barrierefreiheit als Dimension der menschzentrierten Qualität."
   ],
   [
    "E",
    "4 bezieht sich auf die Individualisierung als Dimension der menschzentrierten Qualität."
   ],
   [
    "F",
    "Keine der oben genannten Antworten ist richtig."
   ]
  ],
  "ok": [
   "A"
  ],
  "notes": [
   [
    "p",
    "A ist die richtige Antwort, weil sich jedes der genannten menschzentrierten Qualitätsziele entweder auf Effektivität oder Effizienz bezieht."
   ],
   [
    "p",
    "B, C, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil Performanz keine Qualitätsdimension der menschzentrierten Qualität ist."
   ],
   [
    "li",
    "C ist falsch, weil sich keines der angegebenen menschzentrierten Qualitätsziele auf die subjektive Wahrnehmung der Benutzer oder die Reaktionen der Benutzer bezieht."
   ],
   [
    "li",
    "D ist falsch, weil sich Barrierefreiheit auf Behinderungen bezieht. Es ist keine Behinderung, zur Altersgruppe 60+ zu gehören, aber es kann bedeuten, dass man nur begrenzte Erfahrung mit interaktiven Systemen hat."
   ],
   [
    "li",
    "E ist falsch, weil Individualisierung keine Qualitätsdimension der menschzentrierten Qualität ist."
   ],
   [
    "li",
    "F ist falsch, weil Antwort A richtig ist."
   ]
  ]
 },
 {
  "n": 17,
  "k": 3,
  "lo": "2.2.a",
  "stem": [
   "Welche DREI Aussagen über empirische Informationen sind NICHT richtig?"
  ],
  "opts": [
   [
    "A",
    "Empirische Informationen müssen durch Marktforschung verifiziert werden."
   ],
   [
    "B",
    "Empirische Informationen können durch Beobachtungen gewonnen werden."
   ],
   [
    "C",
    "Empirische Informationen können durch kontextuelle Interviews gesammelt werden."
   ],
   [
    "D",
    "Annahmen können als empirische Informationen dienen, wenn sie im Rahmen von Fokusgruppen gesammelt werden."
   ],
   [
    "E",
    "Konstruierte Informationen sind die Grundlage für empirische Informationen."
   ],
   [
    "F",
    "Annahmen sind ein Ausgangspunkt für die Gewinnung von empirischer Information."
   ]
  ],
  "ok": [
   "A",
   "D",
   "E"
  ],
  "notes": [
   [
    "p",
    "A, D und E sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil eine Verifizierung der empirischen Informationen durch die Marktforschung nicht notwendig ist."
   ],
   [
    "li",
    "D ist richtig, weil Annahmen außer in Fokusgruppen auch auf andere Weise erhoben werden können, z.B. durch Stakeholder- Workshops."
   ],
   [
    "li",
    "E ist richtig, weil konstruierte Informationen nicht die Grundlage für empirische Informationen sind. Es ist genau umgekehrt."
   ],
   [
    "p",
    "B, C und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil Beobachtungen ein gültiger Ansatz für das Sammeln von empirischen Informationen sind."
   ],
   [
    "li",
    "C ist falsch, weil kontextuelle Interviews ein gültiger Ansatz für das Sammeln von empirischen Informationen sind."
   ],
   [
    "li",
    "F ist falsch, weil Annahmen ein Ausgangspunkt für die Gewinnung empirischer Informationen sind."
   ]
  ]
 },
 {
  "n": 18,
  "k": 2,
  "lo": "2.2.b",
  "stem": [
   "Sie führen einen ersten Stakeholder-Workshop zur Vorbereitung einer Nutzungskontextanalyse durch.",
   "Welche ZWEI Aussagen über Fragestellungen für eine Nutzungskontextanalyse, die Sie den Teilnehmern gegenüber machen, sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Die zu klärenden Fragestellungen müssen vor dem Stakeholder-Workshop definiert werden, da sie die Grundlage für einen effizienten Stakeholder-Workshop sind."
   ],
   [
    "B",
    "Im Workshop werden wir Benutzergruppen und Aufgaben festlegen, die unterstützt werden sollen. Möglicherweise haben wir offene Fragen zu den Benutzergruppen, die zu Fragestellungen für die Nutzungskontextanalyse führen."
   ],
   [
    "C",
    "Im Workshop werden wir Benutzergruppen identifizieren. Möglicherweise haben wir offene Fragen zu den Benutzergruppen. In diesem Fall müssen wir diese Fragen durch Marktforschung oder andere interne Statistiken verifizieren, bevor wir die Nutzungskontextanalyse durchführen."
   ],
   [
    "D",
    "Bei der Spezifikation und Strukturierung der zu unterstützenden Aufgaben stellen wir möglicherweise fest, dass wir offene Fragen zu den Aufgaben haben, die zu Fragestellungen für die Nutzungskontextanalyse führen."
   ],
   [
    "E",
    "Zu klärende Fragestellungen sollten nicht durch einen Stakeholder-Workshop gesammelt werden. Nur Stakeholderforderungen können in einem internen Workshop gesammelt werden."
   ],
   [
    "F",
    "Basierend auf den im Vorfeld festgelegten Fragestellungen können die Stakeholder während des Workshops menschzentrierte Qualitätsziele formulieren."
   ]
  ],
  "ok": [
   "B",
   "D"
  ],
  "notes": [
   [
    "p",
    "B und D sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil der Stakeholder-Workshop eine Bestandsaufnahme der bekannten Informationen und Annahmen vornimmt und auch unbekannte Informationen identifiziert, was zu Fragen führt, die zu klären sind."
   ],
   [
    "li",
    "D ist richtig, weil die Fragestellungen den Nutzungskontext betreffen und zu kontextuellen Interviews und / oder Beobachtungen führen sollten."
   ],
   [
    "p",
    "A, C, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil die Fragestellungen ein Ergebnis des Stakeholder- Workshops sind, nicht ein Input."
   ],
   [
    "li",
    "C ist falsch, weil die Fragestellungen den Nutzungskontext betreffen und zu kontextuellen Interviews und / oder Beobachtungen führen sollten."
   ],
   [
    "li",
    "E ist falsch, weil die Identifizierung von Fragestellungen mit Stakeholdern die Notwendigkeit einer Nutzungskontextanalyse aufzeigt."
   ],
   [
    "li",
    "F ist falsch, weil menschzentrierte Qualitätsziele ein Anreiz für die Identifizierung der zu klärenden Fragestellungen sind."
   ]
  ]
 },
 {
  "n": 19,
  "k": 2,
  "lo": "2.2.c",
  "stem": [
   "Ein Unternehmen, das eine Online-Banking-App betreibt, möchte sein Produkt optimieren. Das Team ist der Meinung, dass Push-Nachrichten über Kontoumsätze die Kundenbindung stärken würden. Die Projektmitglieder bezweifeln, dass eine Erhebung empirischer Daten mit den Benutzern relevante Erkenntnisse bringen wird und wollen stattdessen den \"Lean UX\"-Ansatz wählen.",
   "Entscheiden Sie, welche zwei der folgenden Aktivitäten Sie NICHT wählen würden:"
  ],
  "opts": [
   [
    "A",
    "Ich würde aufgrund der bestehenden Zweifel eine klassische Nutzungskontextanalyse durchführen."
   ],
   [
    "B",
    "Ich würde erklären, dass ich eine modellbasierte Nutzungskontextanalyse empfehle, die ein geeigneter Ausgangspunkt für \"Lean UX\" ist."
   ],
   [
    "C",
    "Ich unterstütze den \"Lean UX\"-Ansatz, weil er für die Umsetzung kleiner Verbesserungen geeignet ist."
   ],
   [
    "D",
    "Ich würde vorschlagen, die Aussage \"Push-Nachrichten über Kontoumsätze stärken die Kundenbindung\" zunächst als Hypothese zu betrachten und diese Hypothese durch einige kontextuelle Interviews mit echten Benutzern zu validieren."
   ],
   [
    "E",
    "Ich würde eine groß angelegte Nutzungskontextanalyse empfehlen, um das Innovationspotenzial zu identifizieren, das dem Kunden weitgehend unbekannt ist."
   ],
   [
    "F",
    "Ich würde einen agilen Entwicklungsprozess wie z.B. Lean UX empfehlen, der es ermöglicht, Ergebnisse aus Tests direkt in der nächsten Iteration zu verwenden."
   ]
  ],
  "ok": [
   "A",
   "E"
  ],
  "notes": [
   [
    "p",
    "A und E sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil eine klassische Nutzungskontextanalyse vom Team nicht akzeptiert wird"
   ],
   [
    "li",
    "E ist richtig, weil eine klassische Nutzungskontextanalyse vom Team nicht akzeptiert wird"
   ],
   [
    "p",
    "B, C, D und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil die modellbasierte Nutzungskontextanalyse ein geeigneter Ausgangspunkt für Lean UX ist."
   ],
   [
    "li",
    "C ist falsch, weil der Lean UX-Ansatz für die Umsetzung von kleinen Verbesserungen geeignet ist."
   ],
   [
    "li",
    "D ist falsch, weil es auf die Validierung einer bestehenden Hypothese abzielt."
   ],
   [
    "li",
    "F ist falsch, weil Lean UX gut zur agilen Entwicklung passt."
   ]
  ]
 },
 {
  "n": 20,
  "k": 3,
  "lo": "3.1.b",
  "stem": [
   "Sie arbeiten für ein Unternehmen, das eine mobile App für Projektmitarbeitende entwickelt, die alle Aufgaben rund um die Abrechnung von Arbeitsstunden im Projekt unterstützt. Sie erstellen einen Rekrutierungsfragebogen für die Benutzergruppe \"Projektmitarbeitende\".",
   "Welche DREI der folgenden Fragen sind für diese Benutzergruppe am ehesten geeignet?"
  ],
  "opts": [
   [
    "A",
    "Wie lange sind Sie schon beruflich tätig?"
   ],
   [
    "B",
    "Wie viel Arbeitszeit pro Woche rechnen Sie spezifisch für ein bestimmtes Projekt ab?"
   ],
   [
    "C",
    "Dokumentieren Sie die Zeitaufwände für die Projekte regelmäßig selbst?"
   ],
   [
    "D",
    "Was sind Ihre Hobbys?"
   ],
   [
    "E",
    "Arbeiten Sie gern im Projekt?"
   ],
   [
    "F",
    "Arbeiten Sie parallel in mehreren Projekten?"
   ]
  ],
  "ok": [
   "B",
   "C",
   "F"
  ],
  "notes": [
   [
    "p",
    "B, C und F sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil diese Frage auf einen Nutzungskontext abzielt, der für das Projektthema relevant ist."
   ],
   [
    "li",
    "C ist richtig, weil diese Frage auf einen Nutzungskontext abzielt, der für das Projektthema relevant ist."
   ],
   [
    "li",
    "F ist richtig, weil diese Frage auf einen Nutzungskontext abzielt, der für das Projektthema relevant ist."
   ],
   [
    "p",
    "A, D und E sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil B, C und F relevanter für den spezifischen Nutzungskontext aus der Projekt-Fragestellung sind, als das einfache Merkmal „Berufserfahrung“."
   ],
   [
    "li",
    "D ist falsch, weil die Frage nichts mit dem Kontext zu tun hat."
   ],
   [
    "li",
    "E ist falsch, weil Hobbies nicht relevant für die Rekrutierung passender Teilnehmer für diesen spezifischen Kontext sind."
   ]
  ]
 },
 {
  "n": 21,
  "k": 3,
  "lo": "3.2.a",
  "stem": [
   "Welche DREI der folgenden Antworten nennen Formen der Beobachtung?"
  ],
  "opts": [
   [
    "A",
    "Strukturiert"
   ],
   [
    "B",
    "Hypothetisch"
   ],
   [
    "C",
    "Im Feld"
   ],
   [
    "D",
    "Nicht-teilnehmend"
   ],
   [
    "E",
    "Geführt"
   ],
   [
    "F",
    "Unvorbereitet"
   ]
  ],
  "ok": [
   "A",
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "A, C und D sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil \"strukturiert\" eine Form der Beobachtung ist (versus \"unstrukturiert\")."
   ],
   [
    "li",
    "C ist richtig, weil \"im Feld\" eine Form der Beobachtung ist (versus \"im Labor\")."
   ],
   [
    "li",
    "D ist richtig, weil \"nicht-teilnehmend\" eine Form der Beobachtung ist (versus \"teilnehmend\")."
   ],
   [
    "p",
    "B, E und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil \"hypothetische\" Beobachtung nicht definiert ist."
   ],
   [
    "li",
    "E ist falsch, weil \"geführte\" Beobachtung nicht definiert ist."
   ],
   [
    "li",
    "F ist falsch, weil \"unvorbereitete\" Beobachtung nicht definiert ist. (unstrukturierte Beobachtung ist definiert)."
   ]
  ]
 },
 {
  "n": 22,
  "k": 3,
  "lo": "3.2.d",
  "stem": [
   "Welche DREI der folgenden Antworten enthalten Empfehlungen für die Durchführung von Beobachtungen?"
  ],
  "opts": [
   [
    "A",
    "Es kann hilfreich sein, wenn Manager der Benutzer die Arbeitsweise der Benutzer demonstrieren, bevor die Beobachtungen stattfinden."
   ],
   [
    "B",
    "Der Beobachter mischt sich nicht ein, außer wenn er gelegentlich eine klärende Frage stellen muss."
   ],
   [
    "C",
    "Wenn kein interaktives System verwendet wird, sollten bestehende manuelle Verfahren beobachtet werden."
   ],
   [
    "D",
    "Vor den Beobachtungen sollte immer eine Fokusgruppe durchgeführt werden."
   ],
   [
    "E",
    "Beobachtungen sollten in einem möglichst natürlichen Kontext stattfinden, zum Beispiel am Arbeitsplatz des Benutzers."
   ],
   [
    "F",
    "Beobachtungen sollten auf Video dokumentiert werden. Eine Dokumentation in Form von Ist-Szenarien ist nicht notwendig."
   ]
  ],
  "ok": [
   "B",
   "C",
   "E"
  ],
  "notes": [
   [
    "p",
    "B, C und E sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil dies die Wahrscheinlichkeit maximiert, objektive Nutzungskontextinformationen zu erhalten."
   ],
   [
    "li",
    "C ist richtig, weil dies die Wahrscheinlichkeit maximiert, objektive Nutzungskontextinformationen zu erhalten."
   ],
   [
    "li",
    "E ist richtig, weil dies die Wahrscheinlichkeit maximiert, objektive Nutzungskontextinformationen zu erhalten."
   ],
   [
    "p",
    "A, D und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil es eine Beobachtung in unnötiger Weise beeinflusst."
   ],
   [
    "li",
    "D ist falsch, weil dies die Beobachtung in keiner Weise unterstützt."
   ],
   [
    "li",
    "F ist falsch, weil eine Dokumentation der Beobachtung in Form von Ist-Szenarien die strukturierte Identifizierung von Erfordernissen ermöglicht."
   ]
  ]
 },
 {
  "n": 23,
  "k": 3,
  "lo": "3.3.c",
  "stem": [
   "Welche DREI der folgenden Aussagen über Personas sind NICHT richtig?"
  ],
  "opts": [
   [
    "A",
    "Sekundäre Personas werden zunächst aus Annahmen über die jeweilige Benutzergruppe abgeleitet."
   ],
   [
    "B",
    "Durch die Verwendung von Personas können sich alle Projektmitglieder besser in die Benutzer, ihre Eigenschaften und Ziele einfühlen."
   ],
   [
    "C",
    "Personas sind realistische Beschreibungen von Benutzern, die anhand von empirisch ermittelten Daten, z.B. aus Beobachtungen oder Interviews, entwickelt werden."
   ],
   [
    "D",
    "Anti-Personas repräsentieren Benutzer, für die das interaktive System nicht vorgesehen ist."
   ],
   [
    "E",
    "Personas sind die Basis für die Entwicklung von Rekrutierungsfragebögen."
   ],
   [
    "F",
    "Personas dienen demselben Zweck wie Benutzergruppenprofile."
   ]
  ],
  "ok": [
   "A",
   "E",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, E und F sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil sekundäre Personas aus empirischen Informationen abgeleitet werden."
   ],
   [
    "li",
    "E ist richtig, weil Personas nicht die Basis für Rekrutierungsfragebögen sind. Die Basis für Rekrutierungsfragebögen sind Benutzergruppenprofile"
   ],
   [
    "li",
    "F ist richtig, weil Personas nicht denselben Zweck erfüllen wie Benutzergruppenprofile. Während Personas primär dazu dienen, Empathie zu erzeugen, dienen Benutzergruppenprofile primär dazu, Benutzer für kontextuelle Interviews, Beobachtungen, Fokusgruppen und Usability-Evaluierungen zu rekrutieren."
   ],
   [
    "p",
    "B, C und D sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil es den Zweck einer Persona-Beschreibung korrekt wiedergibt."
   ],
   [
    "li",
    "C ist falsch, weil es korrekt zusammenfasst, was eine Persona ist."
   ],
   [
    "li",
    "D ist falsch, weil es korrekt beschreibt, was eine Anti-Persona ist."
   ]
  ]
 },
 {
  "n": 24,
  "k": 3,
  "lo": "3.3.d",
  "stem": [
   "Welche DREI Aussagen über ein angemessen formuliertes Ist-Szenario sind richtig?",
   "Ein angemessen formuliertes Ist-Szenario"
  ],
  "opts": [
   [
    "A",
    "ist eine narrative Textbeschreibung des Nutzungskontexts, die auf kontextuellen Interviews oder Beobachtungen basiert."
   ],
   [
    "B",
    "ist identisch mit einem Interview-Skript in Bezug auf alle Informationen, die zwischen dem Interviewer und der befragten Person ausgetauscht werden."
   ],
   [
    "C",
    "berücksichtigt ausschließlich den Nutzungskontext für die Gestaltung."
   ],
   [
    "D",
    "ist besonders hilfreich für die Identifizierung von Erfordernissen und die Ableitung von Nutzungsanforderungen."
   ],
   [
    "E",
    "minimiert die Notwendigkeit, dass Mitglieder des Projektteams Rückfragen an den/die Interviewer stellen müssen, um den beschriebenen Nutzungskontext zu klären."
   ],
   [
    "F",
    "kann als Ersatz für ein Benutzergruppenprofil verwendet werden."
   ]
  ],
  "ok": [
   "A",
   "D",
   "E"
  ],
  "notes": [
   [
    "p",
    "A, D und E sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil dies korrekt beschreibt, was ein Ist-Szenario ist."
   ],
   [
    "li",
    "D ist richtig, weil sich narrativer Text, der den Nutzungskontext beschreibt, zur strukturierten Identifizierung von Erfordernissen eignet."
   ],
   [
    "li",
    "E ist richtig, weil dies ein Gütekriterium für ein Ist-Szenario korrekt beschreibt."
   ],
   [
    "p",
    "B, C und F sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil Ist-Szenarien keine Protokolle von Interviews sind. Ist-Szenarien beschreiben die Nutzungskontextinformationen, die von Benutzern bei der Beantwortung von Fragen angegeben werden. In einem Ist-Szenario würde eine Aussage wie \"Kann ich noch eine Tasse Kaffee haben?\" nicht erscheinen. In einem Interviewprotokoll würde sie erscheinen."
   ],
   [
    "li",
    "C ist falsch, weil ein Ist-Szenario den Nutzungskontext (Ist- Zustand) betrachtet, nicht den Nutzungskontext für die Gestaltung."
   ],
   [
    "li",
    "E ist falsch, weil das Benutzergruppenprofil eine Beschreibung ist, die die Rekrutierung von Benutzern ermöglicht. Benutzergruppenprofile ermöglichen keine strukturierte Identifizierung von Erfordernissen."
   ]
  ]
 },
 {
  "n": 25,
  "k": 1,
  "lo": "4.1.a",
  "stem": [
   "Schauen Sie sich die folgenden Erfordernisse an, die Ihr Kollege in Interviews mit Sachbearbeitern des Bürgerbüros bzgl. der Ausstellung neuer Personalausweise ermittelt hat, und identifizieren Sie, um welche Art von Erfordernis es sich dabei jeweils handelt:",
   "1   Der Sachbearbeiter muss wissen, wie der Name und das Geburtsdatum lauten, um die Person im System identifizieren zu können.",
   "2   Der Sachbearbeiter muss in der Lage sein, den internen Bestellprozess zu starten, um für die Person einen neuen Personalausweis ausstellen zu lassen.",
   "3   Der Sachbearbeiter muss einen vorläufigen Personalausweis erstellen können, um der Person einen gültigen Ausweis für die Zeit zur Verfügung zu stellen, bis der neue Personalausweis abgeholt wird.",
   "4   Der Sachbearbeiter muss wissen, ob der aktuelle Personalausweis noch gültig ist, um zu entscheiden, ob ein vorläufiger Personalausweis ausgestellt werden muss.",
   "5   Der Sachbearbeiter muss ein aktuelles Foto der Person haben, um einen neuen Personalausweis ausstellen lassen zu können.",
   "6   Der Sachbearbeiter muss wissen, ob sich die Angaben zur Person geändert haben, um aktuell gültige Informationen auf dem neuen Personalausweis festhalten zu lassen.",
   "Welche eine der folgenden Aussagen ist richtig?"
  ],
  "opts": [
   [
    "A",
    "1,2,4,5 sind informatorische Erfordernisse."
   ],
   [
    "B",
    "2 und 3 sind Kompetenzerfordernisse."
   ],
   [
    "C",
    "5 ist ein Ressourcenerfordernis."
   ],
   [
    "D",
    "5 ist ein informatorisches Erfordernis."
   ],
   [
    "E",
    "Alle 6 sind Usability-Erfordernisse."
   ],
   [
    "F",
    "2 ist ein Fähigkeitserfordernis."
   ]
  ],
  "ok": [
   "C"
  ],
  "notes": [
   [
    "p",
    "C ist die richtige Antwort, weil 5 eine Aussage über ein Ressourcenerfordernis ist (\"muss haben\")."
   ],
   [
    "p",
    "A, B, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil 2 kein informatorisches Erfordernis ist und 5 ein Ressourcenbedürfnis ist."
   ],
   [
    "li",
    "B ist falsch, weil 2 und 3 keine Beschreibungen von Erfordernissen sind, sondern Beschreibungen von zu unterstützenden Aufgaben."
   ],
   [
    "li",
    "D ist falsch, weil 5 ein Ressourcenerfordernis ist."
   ],
   [
    "li",
    "E ist falsch, weil der Begriff \"Usability-Erfordernis\" nicht definiert ist."
   ],
   [
    "li",
    "F ist falsch, weil der Begriff \"Fähigkeitserfordernis\" nicht definiert ist."
   ]
  ]
 },
 {
  "n": 26,
  "k": 3,
  "lo": "4.1.b",
  "stem": [
   "Welche DREI der nachfolgend aufgelisteten Aussagen über Erfordernisse sind zutreffend?"
  ],
  "opts": [
   [
    "A",
    "In einer Beschreibung eines Erfordernisses darf das interaktive System nicht vorkommen."
   ],
   [
    "B",
    "Erfordernisse sind immer im Nutzungskontext begründet."
   ],
   [
    "C",
    "Ein Erfordernis besteht immer aus einer Aufgabe, die ein Benutzer ausführt und die sich auf das interaktive System bezieht."
   ],
   [
    "D",
    "Erfordernisse bestehen immer aus einem Ziel, das erreicht werden muss, und der Voraussetzung, die zum Erreichen des Ziels gegeben sein muss."
   ],
   [
    "E",
    "Ressourcenerfordernisse sind weniger wichtig als informatorische Erfordernisse."
   ],
   [
    "F",
    "Erfordernisse, die nicht zu Nutzungsanforderungen für das zu gestaltende interaktive System führen, sollten nicht ermittelt werden."
   ]
  ],
  "ok": [
   "A",
   "B",
   "D"
  ],
  "notes": [
   [
    "p",
    "A, B und D sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil dies ein gültiges Gütekriterium für die Formulierung von Nutzungsanforderungen ist"
   ],
   [
    "li",
    "B ist richtig, weil dies ein gültiges Gütekriterium für die Formulierung von Nutzungsanforderungen ist."
   ],
   [
    "li",
    "D ist richtig, weil dies ein gültiges Gütekriterium für die Formulierung von Nutzungsanforderungen ist"
   ],
   [
    "p",
    "C, E und F sind falsche Antworten."
   ],
   [
    "li",
    "C ist falsch, da die Erfordernisse nicht die vom System zu unterstützenden Aufgaben \"umformulieren\" sollten, sondern vielmehr angeben sollten, was bei der Erledigung der einzelnen vom System zu unterstützenden Aufgaben erforderlich ist."
   ],
   [
    "li",
    "E ist falsch, weil die Art von Erfordernissen (benötigte Ressource, benötigte Information, oder benötigte Kompetenz) nicht deren Relevanz für die Benutzer impliziert."
   ],
   [
    "li",
    "F ist falsch, weil bei der Identifizierung der Erfordernisse noch nicht klar ist, welche Nutzungsanforderungen aus den Erfordernissen abgeleitet werden können."
   ]
  ]
 },
 {
  "n": 27,
  "k": 3,
  "lo": "4.1.c",
  "stem": [
   "Ein Softwarehersteller für einen Online-Supermarkt, der seine Bestell-App verbessern möchte, hat einige empirische Informationen von Benutzern über die von ihnen ausgeführten Aufgaben gesammelt und möchte, dass Sie die relevanten Erfordernisse identifizieren.",
   "Der Nutzungskontext, der im Rahmen eines Ist-Szenarios dokumentiert wurde, ist wie folgt:",
   "\"Manchmal gebe ich zwei Bestellungen für eine Woche auf. Wenn ich dann meinen Bestellungen nachträglich noch Produkte hinzufügen möchte und danach suche, haben diejenigen Produkte eine Markierung erhalten, die sich bereits in einer Bestellung befinden. Bei dieser Markierung kann ich aber nicht erkennen, in welcher der beiden Bestellungen die Produkte schon enthalten sind. Ich muss dann immer ins Menü zurück und zur Übersicht mit den Bestellungen und diese noch einmal einzeln prüfen.“",
   "Welche DREI der folgenden Erfordernisse würden Sie bei Ihrer Nutzungskontextanalyse NICHT identifizieren?"
  ],
  "opts": [
   [
    "A",
    "Der Käufer muss in der Lage sein, Produkte zu beiden Bestellungen hinzuzufügen."
   ],
   [
    "B",
    "Der Käufer muss die Möglichkeit haben, die Bestellungen zu überprüfen, um zu entscheiden, welche Produkte er noch hinzufügt."
   ],
   [
    "C",
    "Der Käufer muss wissen, welche Produkte in welcher Bestellung enthalten sind, um entscheiden zu können, welche Produkte er ggf. noch hinzufügt."
   ],
   [
    "D",
    "Der Käufer muss wissen, dass er mehrere Bestellungen aufgegeben hat, um entscheiden zu können, welcher Bestellung ein Produkt hinzugefügt werden soll."
   ],
   [
    "E",
    "Der Käufer muss die Anzahl der offenen Bestellungen kennen, um zu entscheiden, welchen Bestellungen er noch Produkte hinzufügen kann."
   ],
   [
    "F",
    "Der Käufer muss eine Liste aller Bestellungen haben, um eine Entscheidung für eine Produktbestellung treffen zu können."
   ]
  ],
  "ok": [
   "A",
   "B",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, B und F sind richtige Antworten."
   ],
   [
    "p",
    "Erfordernisse sollten immer Voraussetzungen angeben wie \"muss wissen\" oder \"muss <Ressource> haben\" oder muss können (im Sinne einer Kompetenz)\"."
   ],
   [
    "li",
    "In A ist \"muss in der Lage sein\" keines davon und schließt \"etwas möglich zu machen\" ein. Darüber hinaus fehlt die Beschreibung des beabsichtigten Ergebnisses."
   ],
   [
    "li",
    "In B ist \"muss die Möglichkeit haben\" keines davon und schließt ebenfalls \"etwas möglich zu machen\" ein."
   ],
   [
    "li",
    "In F ist \"muss eine Liste haben\" keines davon und schließt auch \"etwas möglich zu machen\" im Sinne einer Produkteigenschaft ein."
   ],
   [
    "p",
    "C, D und E sind falsche Antworten."
   ],
   [
    "li",
    "C ist falsch, weil es sich hierbei um ein valides informatorisches Erfordernis im Nutzungskontext handelt."
   ],
   [
    "li",
    "D ist falsch, weil es sich hierbei um ein valides informatorisches Erfordernis im Nutzungskontext handelt."
   ],
   [
    "li",
    "E ist falsch, weil es sich hierbei um ein valides informatorisches Erfordernis im Nutzungskontext handelt."
   ]
  ]
 },
 {
  "n": 28,
  "k": 2,
  "lo": "4.1.d",
  "stem": [
   "Ihr Team hat mit Mitarbeitern von Reisebüros eine Nutzungskontextanalyse durchgeführt.",
   "Ihr Kollege hat die folgenden 6 Erfordernisse identifiziert:",
   "1   Der Mitarbeiter muss die Höhe der Übernachtungskosten wissen, die der anfragende Gast bereit ist zu zahlen, um passende Ferienobjekte anbieten zu können.",
   "2   Der Mitarbeiter muss dem anfragenden Gast eine Mitteilung senden können, wenn passende Ferienobjekte verfügbar sind.",
   "3   Der Mitarbeiter muss den Gast kontaktieren können, falls ein für ihn interessantes Objekt in der Zwischenzeit vermietet worden ist.",
   "4   Der Mitarbeiter muss wissen, wie er einen Gast kontaktieren kann.",
   "5   Der Mitarbeiter muss die Kontaktdaten des Gastes haben, um diesen über neue, relevante Übernachtungsmöglichkeiten informieren zu können.",
   "6   Der Mitarbeiter muss die Mietzeiträume gebuchter Ferienobjekte kennen, um zeitlich passende Objekte anbieten zu können.",
   "Ihr Kollege bittet Sie um Ihr Feedback, ob diese Erfordernisse gut formuliert sind.",
   "Welche ZWEI der folgenden Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Alle sechs Erfordernisse sollten mit \"der Benutzer\" beginnen, und nicht mit der spezifischen Rolle des \"Immobilienmaklers\"."
   ],
   [
    "B",
    "1, 2, 4, 5 und 6 sind gut formuliert."
   ],
   [
    "C",
    "1, 5 und 6 sind gut formuliert."
   ],
   [
    "D",
    "2, 3 und 4 sind nicht gut formuliert."
   ],
   [
    "E",
    "Alle sechs Erfordernisse sind gut formuliert."
   ],
   [
    "F",
    "Keines der Erfordernisse ist gut formuliert."
   ]
  ],
  "ok": [
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "C und D sind richtige Antworten."
   ],
   [
    "li",
    "C ist richtig, weil 1, 5 und 6 eine notwendige Voraussetzung und das zu erreichende Ziel beinhalten."
   ],
   [
    "li",
    "D ist richtig, weil"
   ],
   [
    "sub",
    "2 eine Aufgabe formuliert. Es wird weder eine benötigte Information noch eine benötigte Ressource noch eine benötigte Kompetenz erwähnt. Daher ist Antwortoption 2 falsch."
   ],
   [
    "sub",
    "3 gibt weder die benötigte Ressource oder Information noch die benötigte Kompetenz an."
   ],
   [
    "sub",
    "4 nennt nur eine Voraussetzung, aber nicht das Ziel."
   ],
   [
    "p",
    "A, B, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, da bei Erfordernissen immer die Benutzergruppe angegeben werden muss, für die die Erfordernisse gelten."
   ],
   [
    "li",
    "B ist falsch, weil 2 und 4 nicht gut formuliert sind"
   ],
   [
    "li",
    "E ist falsch, weil 2, 3 und 4 nicht gut formuliert sind."
   ],
   [
    "li",
    "F ist falsch, weil 1, 5 und 6 gut formuliert sind"
   ]
  ]
 },
 {
  "n": 29,
  "k": 2,
  "lo": "4.1.e",
  "stem": [
   "Welche ZWEI der folgenden Aussagen über Benutzerwünsche sind NICHT richtig?"
  ],
  "opts": [
   [
    "A",
    "Ein Benutzerwunsch ist ein Bedarf einer Benutzergruppe."
   ],
   [
    "B",
    "Benutzerwünsche sollten genauer hinsichtlich des zugrunde liegenden Nutzungskontextes untersucht werden."
   ],
   [
    "C",
    "Benutzerwünsche können der Ausgangspunkt für die Analyse des zugrundeliegenden Nutzungskontextes sein."
   ],
   [
    "D",
    "Benutzerwünsche werden oft als gewünschte Lösungen formuliert."
   ],
   [
    "E",
    "Ein Benutzerwunsch ist eine subjektive Aussage."
   ],
   [
    "F",
    "Benutzerwünsche sind oft implizit in Nutzungskontextbeschreibungen enthalten."
   ]
  ],
  "ok": [
   "A",
   "F"
  ],
  "notes": [
   [
    "p",
    "A und F sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil ein Benutzerwunsch typischerweise von einzelnen Benutzern angegeben wird und der Begriff \"Bedarf\" im Curriculum nicht definiert ist."
   ],
   [
    "li",
    "F ist richtig, weil Benutzerwünsche explizit von Benutzern angegeben werden. Erfordernisse hingegen sind oft implizit in Nutzungskontextbeschreibungen enthalten."
   ],
   [
    "p",
    "B, C, D und E sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, da die Benutzerwünsche genauer untersucht werden sollten, indem der zugrundeliegende Nutzungskontext identifiziert wird. Dadurch könnten tatsächliche Erfordernisse aufgedeckt werden."
   ],
   [
    "li",
    "C ist falsch, weil die Benutzerwünsche der Ausgangspunkt für die Analyse des zugrundeliegenden Nutzungskontexts sein können."
   ],
   [
    "li",
    "D ist falsch, weil Benutzerwünsche oft als gewünschte Lösungen formuliert werden."
   ],
   [
    "li",
    "E ist falsch, weil Benutzerwünsche subjektive Aussagen einzelner Benutzer sind."
   ]
  ]
 },
 {
  "n": 30,
  "k": 3,
  "lo": "5.1.a",
  "stem": [
   "Nachfolgend finden Sie einige Aussagen über Gütekriterien für Nutzungsanforderungen.",
   "Welche DREI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Nutzungsanforderungen befriedigen immer ein oder mehrere Erfordernisse."
   ],
   [
    "B",
    "Nutzungsanforderungen beziehen sich auf die Benutzer, die interviewt oder beobachtet wurden."
   ],
   [
    "C",
    "Nutzungsanforderungen müssen im Hinblick auf die Benutzung der Lösung formuliert werden, jedoch nicht als die Lösung selbst."
   ],
   [
    "D",
    "Quantitative Nutzungsanforderungen sind für alle Benutzergruppen gültig."
   ],
   [
    "E",
    "Benutzerwünsche können direkt in qualitative Nutzungsanforderungen überführt werden."
   ],
   [
    "F",
    "In der Beschreibung von Nutzungsanforderungen geht es immer darum, was der Benutzer am interaktiven System erkennen, mit ihm auswählen oder in es eingeben können muss."
   ]
  ],
  "ok": [
   "A",
   "C",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, C und F sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil Nutzungsanforderungen immer auf einem oder mehreren Erfordernissen beruhen müssen"
   ],
   [
    "li",
    "C ist richtig, weil Nutzungsanforderungen nicht \"erforderliche Produkteigenschaften\" angeben sollen, sondern was der Benutzer erkennen, auswählen oder eingeben können musst."
   ],
   [
    "li",
    "F ist richtig, weil hier korrekt beschrieben ist, wie Nutzungsanforderungen formuliert werden sollten."
   ],
   [
    "p",
    "B, D und E sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil Nutzungsanforderungen so abgeleitet werden müssen, dass sie für eine gesamte Benutzergruppe gelten."
   ],
   [
    "li",
    "D ist falsch, da weder quantitative Nutzungsanforderungen noch qualitative Nutzungsanforderungen notwendigerweise über Benutzergruppen hinweg gelten."
   ],
   [
    "li",
    "E ist falsch, da Benutzerwünsche zunächst auf den zugrundeliegenden Nutzungskontext und die identifizierbaren Erfordernisse hin analysiert werden sollten, bevor sie in Nutzungsanforderungen überführt werden."
   ]
  ]
 },
 {
  "n": 31,
  "k": 2,
  "lo": "5.1.b",
  "stem": [
   "Welche ZWEI der folgenden Antwortoptionen sind angemessen formulierte Nutzungsanforderungen?"
  ],
  "opts": [
   [
    "A",
    "Der Benutzer muss am Controllingsystem die Möglichkeit haben, dem Projektmanager Nachrichten zum Stand des Projektbudgets zu senden."
   ],
   [
    "B",
    "Der Benutzer muss am Controllingsystem eine Budgetübersicht erstellen können."
   ],
   [
    "C",
    "Der Benutzer muss am Controllingsystem das vereinbarte Projektbudget eingeben können."
   ],
   [
    "D",
    "Der Benutzer muss am Controllingsystem erkennen können, welche Projekte das Projektbudget überschritten haben."
   ],
   [
    "E",
    "Der Benutzer muss am Controllingsystem die Ansicht den persönlichen Vorlieben entsprechend anpassen können."
   ],
   [
    "F",
    "Das Controllingsystem muss es dem Benutzer ermöglichen, das vereinbarte Projektbudget einzugeben."
   ]
  ],
  "ok": [
   "C",
   "D"
  ],
  "notes": [
   [
    "p",
    "C und D sind richtige Antworten."
   ],
   [
    "li",
    "C ist richtig, weil es sich um eine Aussage über eine Nutzungsanforderung handelt, die der Syntaxregel für qualitative Nutzungsanforderungen entspricht."
   ],
   [
    "li",
    "D ist richtig, weil es sich um eine Aussage über eine Nutzungsanforderung handelt, die der Syntaxregel für qualitative Nutzungsanforderungen entspricht."
   ],
   [
    "p",
    "A, B, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil hier eine Lösung (Produkteigenschaft) angegeben wird."
   ],
   [
    "li",
    "B ist falsch, weil hier die zu unterstützende Aufgabe angegeben wird (aber nicht genau, was der Benutzer bei der Erledigung der Aufgabe erkennen, auswählen, eingeben können muss)."
   ],
   [
    "li",
    "E ist falsch, weil hier eine Lösung (Produkteigenschaft) angegeben wird."
   ],
   [
    "li",
    "F ist falsch, da es sich hier um eine Aussage über eine Nutzungsanforderung handelt, die nicht der Syntaxregel für qualitative Nutzungsanforderungen entspricht. Die Anforderung ist nach der Syntaxregel für Systemanforderungen formuliert, die nur eine Verifizierung, aber keine Validierung ermöglicht."
   ]
  ]
 },
 {
  "n": 32,
  "k": 3,
  "lo": "5.1.c",
  "stem": [
   "Sie haben die folgenden drei Erfordernisse bei einer Nutzungskontextanalyse für die Entwicklung einer Online-Bibliothek identifiziert in der Bücher in Papierform ausgeliehen werden können:",
   "1. Der Kunde muss wissen, welche Bücher er aktuell ausgeliehen hat, um festzustellen zu können, welche Bücher zurückgegeben werden müssen.",
   "2. Der Kunde muss wissen, ob ein in der Bibliothek vorhandenes Buch aktuell ausgeliehen ist, um feststellen zu können, wann dieses wieder ausgeliehen werden kann.",
   "3. Der Kunde muss wissen, wann ein aktuell von einer anderen Person ausgeliehenes Buch wieder vorrätig sein wird, um entscheiden zu können, ob er die Verfügbarkeit dieses Buch in einer anderen Bibliothek recherchieren soll.",
   "Nun müssen Sie die Nutzungsanforderungen ableiten. Welche DREI der folgenden Optionen würden Sie NICHT ableiten?"
  ],
  "opts": [
   [
    "A",
    "Der Benutzer muss am System den aktuellen Preis eines Buchs erkennen können."
   ],
   [
    "B",
    "Der Benutzer muss am System auswählen können, dass ein Buch zur Ausleihe vorgemerkt wurde, das aktuell von einer anderen Person ausgeliehen ist."
   ],
   [
    "C",
    "Der Benutzer muss am System während der Nutzung der Website ein weiteres Browserfenster öffnen können, um dort die Verfügbarkeit bestimmter Bücher zu recherchieren."
   ],
   [
    "D",
    "Der Benutzer muss am System überblicken können, welche Bücher er aktuell ausgeliehen hat."
   ],
   [
    "E",
    "Der Benutzer muss am System für jedes Buch erkennen können, bis wann dieses zurückgegeben werden muss."
   ],
   [
    "F",
    "Der Benutzer muss am System einen gewünschten Zeitraum auswählen können, innerhalb dessen ein aktuell ausgeliehenes Buch wieder zur Ausleihe verfügbar sein soll."
   ]
  ],
  "ok": [
   "A",
   "C",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, C und F sind richtige Antworten für unzutreffende Nutzungsanforderungen."
   ],
   [
    "li",
    "A ist eine unzutreffende Nutzungsanforderung, weil diese nicht auf eines der Erfordernisse zurückführbar ist."
   ],
   [
    "li",
    "C ist eine unzutreffende Nutzungsanforderung, weil eine technische Lösung beschrieben wird und nicht eine Nutzungsanforderung."
   ],
   [
    "li",
    "F ist eine unzutreffende Nutzungsanforderung, weil diese nicht auf eines der Erfordernisse zurückführbar ist."
   ],
   [
    "p",
    "B, D und E sind falsche Antworten, da zutreffende Nutzungsanforderungen beschrieben sind:"
   ],
   [
    "li",
    "B ist eine zutreffende Nutzungsanforderung, da es sich hierbei um eine Aussage handelt, die der Syntaxregel für qualitative Nutzungsanforderungen entspricht und aus den Erfordernissen abgeleitet werden kann."
   ],
   [
    "li",
    "D ist eine zutreffende Nutzungsanforderung, da es sich hierbei um eine Aussage über eine Nutzungsanforderung handelt, die der Syntaxregel für qualitative Nutzungsanforderungen entspricht und aus den Erfordernissen abgeleitet werden kann."
   ],
   [
    "li",
    "E ist eine zutreffende Nutzungsanforderung, da es sich hierbei um eine Aussage handelt, die der Syntaxregel für qualitative Nutzungsanforderungen entspricht und aus den Erfordernissen abgeleitet werden kann."
   ]
  ]
 },
 {
  "n": 33,
  "k": 2,
  "lo": "5.1.d",
  "stem": [
   "Sie arbeiten für \"Tresto Bank\", ein Unternehmen, das Bankdienstleistungen inklusive Online-Banking anbietet. Sie werden gebeten, die folgenden Anforderungen zu überprüfen.",
   "Welche ZWEI der folgenden sind gut formulierte quantitative Nutzungsanforderungen?"
  ],
  "opts": [
   [
    "A",
    "Die Gebühren für den Handel mit europäischen Aktien müssen 10% günstiger sein als die Gebühren für US-Aktien."
   ],
   [
    "B",
    "80% von mindestens 25 Benutzern, die den Wertschriftenhandel zum ersten Mal verwenden, müssen in der Lage sein, Aktien zu kaufen und zu verkaufen, ohne vorher die Gebrauchsanweisung zu lesen."
   ],
   [
    "C",
    "Der Benutzer muss bei der Kontoeröffnung aus mindestens 5 verschiedenen Produktpaketen auswählen können."
   ],
   [
    "D",
    "90% von mindestens 25 Benutzern, die eine Zahlung online erfassen, müssen die Zahlungserfassung g innerhalb von 2 Minuten korrekt abschließen können."
   ],
   [
    "E",
    "Der Benutzer muss in der Lage sein, den Wertschriftenhandel innerhalb von 30 Sekunden im Online-Banking zu finden."
   ],
   [
    "F",
    "Der Benutzer muss in der Lage sein, alle Anleitungen innerhalb von 5 Minuten zu lesen."
   ]
  ],
  "ok": [
   "B",
   "D"
  ],
  "notes": [
   [
    "p",
    "B und D sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil diese Formulierung einer quantitativen Nutzungsanforderung den Gütekriterien für quantitative Nutzungsanforderungen entspricht."
   ],
   [
    "li",
    "D ist richtig, weil diese Formulierung einer quantitativen Nutzungsanforderung den Gütekriterien für quantitative Nutzungsanforderungen entspricht."
   ],
   [
    "p",
    "A, C, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil es sich hier um eine Marktanforderung handelt."
   ],
   [
    "li",
    "C ist falsch, weil es sich hier um eine Lösung handelt."
   ],
   [
    "li",
    "E ist falsch, weil die Elemente \"Benutzergruppe\" und \"Prozentsatz der Benutzer\" fehlen."
   ],
   [
    "li",
    "F ist falsch, weil die Elemente \"Benutzergruppe\" und \"Prozentsatz der Benutzer\" fehlen."
   ]
  ]
 },
 {
  "n": 34,
  "k": 2,
  "lo": "5.1.e",
  "stem": [
   "Ein Kollege bittet Sie um Hilfe. Er hat sich widersprechende Erfordernisse innerhalb einer Benutzergruppe identifiziert und fragt nun, was zu tun ist.",
   "Welche ZWEI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Das Beste ist, wenn Sie eines der Erfordernisse streichen, da Sie sonst endlose Diskussionen im Projektteam haben werden."
   ],
   [
    "B",
    "Sie schlagen vor, die Nutzungsanforderungen abzuleiten, um eine Lösung identifizieren zu können, die ein Kompromiss zur Befriedigung beider Erfordernisse ist."
   ],
   [
    "C",
    "Widersprüchliche Erfordernisse gibt es nicht. Eine geeignete Nutzungskontextanalyse führt nicht zu widersprüchlichen Erfordernissen."
   ],
   [
    "D",
    "Widersprüchliche Erfordernisse können trotzdem zu nicht widersprüchlichen Nutzungsanforderungen führen."
   ],
   [
    "E",
    "Widersprüchliche Erfordernisse sind Benutzerwünsche, die falsch interpretiert wurden."
   ],
   [
    "F",
    "Widersprüchliche Erfordernisse weisen auf unterschiedliche Benutzergruppen hin, die in Konflikt zueinanderstehen."
   ]
  ],
  "ok": [
   "B",
   "D"
  ],
  "notes": [
   [
    "p",
    "B und D sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil dies ein Ansatz ist, den Konflikt in der Lösung zu beseitigen"
   ],
   [
    "li",
    "D ist richtig, weil dies ein Ansatz ist, den Konflikt in den Nutzungsanforderungen zu beseitigen."
   ],
   [
    "p",
    "A, C, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil Erfordernisse nicht gestrichen werden dürfen, wenn sie im Nutzungskontext identifiziert werden können. Jedes gültige Erfordernis ist für die Gebrauchstauglichkeit des interaktiven Systems relevant."
   ],
   [
    "li",
    "C ist falsch, weil widersprüchliche Erfordernisse durchaus vorkommen können."
   ],
   [
    "li",
    "E ist falsch, weil sich widersprechende Erfordernisse nicht zwangsläufig widersprüchliche Benutzerwünsche sind."
   ],
   [
    "li",
    "F ist falsch, weil sich widersprechende Erfordernisse kein Indiz für Benutzergruppen sind, die miteinander in Konflikt stehen."
   ]
  ]
 },
 {
  "n": 35,
  "k": 3,
  "lo": "5.2.a",
  "stem": [
   "Was ist der Unterschied zwischen einem Aufgabenmodell des Nutzungskontextes und einem Aufgabenmodell für die Gestaltung?",
   "Welche DREI Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "\"Aufgabenmodell für die Gestaltung\" ist ein Synonym für \"Nutzungskontext für die Gestaltung\"."
   ],
   [
    "B",
    "Ein Aufgabenmodell für die Gestaltung kann mehr Teilaufgaben haben als ein Aufgabenmodell des Nutzungskontextes."
   ],
   [
    "C",
    "Aufgabenmodelle des Nutzungskontextes sind irrelevant, weil die Aufgabenmodelle für die Gestaltung sie außer Kraft setzen."
   ],
   [
    "D",
    "Ein Aufgabenmodell für die Gestaltung kann weniger Teilaufgaben haben als ein Aufgabenmodell des Nutzungskontextes."
   ],
   [
    "E",
    "Ein Aufgabenmodell für die Gestaltung kann Teilaufgaben enthalten, die sich aus der Technologie des interaktiven Systems ergeben haben."
   ],
   [
    "F",
    "Aufgabenmodelle für die Gestaltung und Aufgabenmodelle des Nutzungskontextes sind immer identisch."
   ]
  ],
  "ok": [
   "B",
   "D",
   "E"
  ],
  "notes": [
   [
    "p",
    "B, D und E sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil ein Aufgabenmodell für die Gestaltung mehr Teilaufgaben haben kann als ein Aufgabenmodell des Nutzungskontexts."
   ],
   [
    "li",
    "D ist richtig, weil ein Aufgabenmodell für die Gestaltung weniger Teilaufgaben haben kann als ein Aufgabenmodell des Nutzungskontexts."
   ],
   [
    "li",
    "E ist richtig, weil ein Aufgabenmodell für die Gestaltung Teilaufgaben enthalten kann, die sich aus der Technologie des interaktiven Systems ergeben haben."
   ],
   [
    "p",
    "A, C und D sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil \"Aufgabenmodell für die Gestaltung\" kein Synonym für \"Nutzungskontext für die Gestaltung\" ist."
   ],
   [
    "li",
    "C ist falsch, weil Aufgabenmodelle des Nutzungskontexts die Basis für Aufgabenmodelle für die Gestaltung sind, da sie Projektteams über den Nutzungskontext informieren, der durch das interaktive System unterstützt werden soll. Es gibt beide Aufgabenmodelle. Das eine beschreibt die Gegenwart. Das andere beschreibt die Zukunft, wenn das interaktive System im Einsatz ist."
   ],
   [
    "li",
    "F ist falsch, weil Aufgabenmodelle für die Gestaltung mit Aufgabenmodellen des Nutzungskontextes identisch sein können, sich jedoch in vielen Fällen unterscheiden"
   ]
  ]
 },
 {
  "n": 36,
  "k": 2,
  "lo": "5.2.b",
  "stem": [
   "Sie arbeiten für ein Unternehmen, das Luftpumpen für Tankstellen baut. Sie haben ein Aufgabenmodell für die Aufgabe \"Reifendruck prüfen\" entwickelt.",
   "Kontextuelle Vorbedingung: Der Autofahrer hat alle vier Reifen erneuern lassen und soll nach 50 km Fahrt den Luftdruck prüfen.",
   "1.   Feststellen, wann der Reifendruck geprüft werden muss",
   "2.   Entscheiden, an welcher Tankstelle den Reifendruck geprüft werden soll",
   "3.   Zur Tankstelle fahren",
   "4.   Die Ventilkappe des jeweils zu prüfenden Reifens abschrauben.",
   "5.   Das Luftdruckmessgerät am Luftventil des jeweils zu prüfenden Reifens positionieren",
   "6.   Den aktuellen Luftdruck des jeweiligen Reifens ablesen.",
   "7.   Den Luftdruck des jeweiligen Reifens auf den erforderlichen Wert korrigieren",
   "8.   Die Ventilkappe des jeweiligen Reifens aufschrauben",
   "9.   Überprüfen, ob alle vier Reifen aufgepumpt sind",
   "Angestrebtes Ergebnis (kontextuelle Nachbedingung): Der Autofahrer fühlt sich sicher, dass der Luftdruck der neuen Reifen richtig eingestellt ist und ist bereit, das Fahrzeug wieder im Straßenverkehr einzusetzen.",
   "Nachdem Sie die Erfordernisse im Nutzungskontext identifiziert haben, haben Sie die folgenden drei Nutzungsanforderungen abgeleitet:",
   "UR1 – Der Benutzer muss am System den aktuellen Reifendruck erkennen können.",
   "UR2 – Der Benutzer muss am System den gewünschten Druck für den Reifen auswählen können.",
   "UR3 – Der Benutzer muss am System erkennen können, wann der Reifen auf den erforderlichen Reifendruck aufgepumpt ist.",
   "Nun möchten Sie jede Nutzungsanforderung der entsprechenden Teilaufgabe zuordnen.",
   "Welche ZWEI der folgenden Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "UR3 kann nicht zugeordnet werden, da es keine entsprechende Teilaufgabe gibt."
   ],
   [
    "B",
    "UR1 gehört zu Teilaufgabe 6."
   ],
   [
    "C",
    "UR2 und UR3 gehören zu Teilaufgabe 7."
   ],
   [
    "D",
    "UR2 ist nicht korrekt, weil sie eine Lösung enthält."
   ],
   [
    "E",
    "Keine der Nutzungsanforderungen kann einer entsprechenden Teilaufgabe zugeordnet werden."
   ],
   [
    "F",
    "UR1 und UR3 gehören zu Teilaufgabe 9."
   ]
  ],
  "ok": [
   "B",
   "C"
  ],
  "notes": [
   [
    "p",
    "B und C sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil UR1 zur Teilaufgabe 6 gehört."
   ],
   [
    "li",
    "C ist richtig, weil UR2 und UR3 zur Teilaufgabe 7 gehören."
   ],
   [
    "p",
    "A, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil UR3 zur Teilaufgabe 7 gehört."
   ],
   [
    "li",
    "D ist falsch, weil UR2 eine korrekt formulierte Nutzungsanforderung ist."
   ],
   [
    "li",
    "E ist falsch, weil alle drei Nutzungsanforderungen einer oder mehreren Teilaufgaben zugeordnet werden können."
   ],
   [
    "li",
    "F ist falsch, weil UR1 zu Teilaufgabe 6 und UR 3 zu Teilaufgabe 7 gehört."
   ]
  ]
 },
 {
  "n": 37,
  "k": 2,
  "lo": "6.1.b",
  "stem": [
   "Betrachten Sie die folgenden Aussagen über die Verwendung von standardisierten Schemata zur Priorisierung von Nutzungsanforderungen.",
   "Welche ZWEI der folgenden Aussagen sind richtig?"
  ],
  "opts": [
   [
    "A",
    "Standardisierte Schemata (z.B. das Kano-Schema) ermöglichen die Priorisierung von Nutzungsanforderungen aus Sicht des Benutzers und nicht aufgrund persönlicher Ansichten anderer Stakeholder oder Mitglieder des Projektteams."
   ],
   [
    "B",
    "Standardisierte Schemata (z.B. das Kano-Schema) helfen, einen benutzerorientierten Konsens über Prioritäten herzustellen."
   ],
   [
    "C",
    "Ein einfaches, aber nützliches Schema für Priorisierungen besteht aus den Prioritäten \"Unbedingt notwendig\" versus \"Nice to have\"."
   ],
   [
    "D",
    "Für die Priorisierung von Nutzungsanforderungen ist eine Beteiligung der Benutzer nicht erforderlich, wenn die Nutzungskontextanalyse ordnungsgemäß durchgeführt wurde."
   ],
   [
    "E",
    "Standardisierte Schemata zur Priorisierung (z.B. das Kano-Modell) sind für die Priorisierung nicht notwendig, da Anforderungen, die leicht zu realisieren sind oder die schnelle Erfolge versprechen, immer die höchste Priorität haben."
   ],
   [
    "F",
    "Das Projektteam sollte die Nutzungsanforderungen vor allem auf Basis der Implementierungskosten priorisieren."
   ]
  ],
  "ok": [
   "A",
   "B"
  ],
  "notes": [
   [
    "p",
    "A und B sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil standardisierte Schemata (z.B. das Kano- Schema) den Wert für den Benutzer in den Fokus stellen."
   ],
   [
    "li",
    "B ist richtig, weil standardisierte Schemata (z.B. das Kano- Schema) den Wert für den Benutzer in den Fokus stellen."
   ],
   [
    "p",
    "C, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "C ist falsch, weil das Schema den Benutzern suggeriert, dass alle gültigen Nutzungsanforderungen implementiert werden müssen."
   ],
   [
    "li",
    "D ist falsch, weil es davon ausgeht, dass alle Nutzungsanforderungen auf einmal implementiert werden können, was nicht realistisch ist."
   ],
   [
    "li",
    "E ist falsch, weil es sich hierbei um ein kostengetriebenes Priorisierungsschema handelt, das die Relevanz der einzelnen Nutzungsanforderungen nicht berücksichtigt. Daher könnten Nutzungsanforderungen mit geringer Relevanz für die Benutzer umgesetzt werden, während Nutzungsanforderungen mit hoher Relevanz für die Benutzer möglicherweise nicht berücksichtigt werden."
   ],
   [
    "li",
    "F ist falsch, weil es sich hierbei um ein kostengetriebenes Priorisierungsschema handelt, das die Relevanz der einzelnen Nutzungsanforderungen nicht berücksichtigt. Daher könnten Nutzungsanforderungen mit geringer Relevanz für die Benutzer umgesetzt werden, während Nutzungsanforderungen mit hoher Relevanz für die Benutzer möglicherweise nicht berücksichtigt werden."
   ]
  ]
 },
 {
  "n": 38,
  "k": 3,
  "lo": "6.2.a",
  "stem": [
   "Es wird erwartet, dass Sie dem Projektteam die Ergebnisse einer Nutzungskontextanalyse präsentieren. Sie haben bereits die Relevanz der einzelnen Nutzungsanforderungen mit einer Gruppe repräsentativer Benutzer bewertet.",
   "Welche DREI der folgenden Aktivitäten können Sie NICHT empfehlen, um dem Projektteam die Nutzungsanforderungen zu präsentieren?"
  ],
  "opts": [
   [
    "A",
    "Ich schildere alle Ist-Szenarien im Detail, damit das Projektteam ein tiefes Verständnis für jeden der interviewten Benutzer erlangt."
   ],
   [
    "B",
    "Ich erläutere zunächst die menschzentrierten Qualitätsziele, die für das zu implementierende Release festgelegt wurden."
   ],
   [
    "C",
    "Ich konzentriere mich auf festgestellte Probleme mit unserem bestehenden System und präsentiere Verbesserungen, die leicht zu realisieren sind oder die schnelle Erfolge versprechen."
   ],
   [
    "D",
    "Ich zeige anhand einer Persona für jede Benutzergruppe die wichtigsten Merkmale und Einstellungen der einzelnen Benutzergruppen auf."
   ],
   [
    "E",
    "Ich stelle die Nutzungsanforderungen anhand der zu unterstützenden Aufgaben vor, um die erforderliche Unterstützung des gesamten Projektteams durch die Benutzer im Fokus zu haben."
   ],
   [
    "F",
    "Statt der Nutzungsanforderungen präsentiere ich die identifizierten Benutzerwünsche, da diese interessanter sind."
   ]
  ],
  "ok": [
   "A",
   "C",
   "F"
  ],
  "notes": [
   [
    "p",
    "A, C und F sind richtige Antworten."
   ],
   [
    "li",
    "A ist richtig, weil das ausführliche Betrachten sämtlicher Ist- Szenarien für Stakeholder nicht gerade interessant ist."
   ],
   [
    "li",
    "C ist richtig, weil die Fokussierung auf festgestellte Probleme mit dem bestehenden System und die Präsentation von Verbesserungen nicht im Fokus einer Nutzungskontextanalyse stehen soll. Dieser Ansatz wird das Verständnis der Stakeholder für den Nutzungskontext nicht verbessern."
   ],
   [
    "li",
    "F ist richtig, weil es für die Stakeholder irreführend ist, sich auf angegebene Benutzerwünsche, anstatt auf objektive Erfordernisse zu konzentrieren."
   ],
   [
    "p",
    "B, D und E sind falsche Antworten."
   ],
   [
    "li",
    "B ist falsch, weil die Zusammenfassung der menschzentrierten Qualitätsziele die Stakeholder daran erinnert, warum die Nutzungskontextanalyse durchgeführt wurde."
   ],
   [
    "li",
    "D ist falsch, weil Personas helfen, Empathie der Stakeholder für die Benutzer zu schaffen und die Stakeholder einzubinden."
   ],
   [
    "li",
    "E ist falsch, weil das Durcharbeiten der Nutzungsanforderungen nach Aufgaben und Teilaufgaben dem Entwicklungsteam hilft, sich auf die Aufgaben der Benutzer zu konzentrieren und nicht auf die resultierende Funktionalität."
   ]
  ]
 },
 {
  "n": 39,
  "k": 2,
  "lo": "6.2.a",
  "stem": [
   "In einem Workshop mit Benutzern wurden die Nutzungsanforderungen hinsichtlich Vollständigkeit, Korrektheit und Relevanz für die Benutzer verifiziert. Einige der Nutzungsanforderungen wurden als relevanter eingestuft als die anderen. Der Implementierungsaufwand für diese Nutzungsanforderungen wurde vom Projektteam als relativ hoch eingestuft. Der Projektleiter hat Sie in Ihrer Rolle als Verantwortlicher für die Nutzungsanforderungen zu einer Teambesprechung eingeladen und bittet Sie um Rat.",
   "Welche ZWEI der folgenden Optionen sollten Sie wählen?"
  ],
  "opts": [
   [
    "A",
    "Sie weisen das Projektteam darauf hin, dass es deren Entscheidung ist, was mit den Nutzungsanforderungen geschieht, und dass Sie die Nutzungsanforderungen nur liefern."
   ],
   [
    "B",
    "Sie erklären dem Projektteam, welche Konsequenzen es hat, wenn die jeweiligen Nutzungsanforderungen nicht umgesetzt werden, und dass dies zu einer geringeren Effektivität, Effizienz und Zufriedenheit der Benutzer führt."
   ],
   [
    "C",
    "Sie empfehlen, die Nutzungsanforderungen aufgrund der hohen Relevanz für die Benutzer umzusetzen und, falls Projektzwänge dies nicht zulassen, sie in eine Roadmap für kommende Produkt-Releases aufzunehmen."
   ],
   [
    "D",
    "Sie sind sich mit dem Projektleiter einig, dass bei der Entscheidungsfindung die wirtschaftliche Sicht immer Vorrang vor den Nutzungsanforderungen hat."
   ],
   [
    "E",
    "Sie stimmen zu, dass Benutzer die Relevanz von Nutzungsanforderungen immer höher einschätzen, als sie tatsächlich sind."
   ],
   [
    "F",
    "Sie erklären, dass bei Nutzungsanforderungen immer diejenigen die höchste Priorität haben, die leicht zu realisieren sind oder die schnelle Erfolge versprechen."
   ]
  ],
  "ok": [
   "B",
   "C"
  ],
  "notes": [
   [
    "p",
    "B und C sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil es dem Projektteam hilft, eine Entscheidung zu treffen, die sowohl die Relevanz für die Benutzer als auch die Implementierungskosten berücksichtigt."
   ],
   [
    "li",
    "C ist richtig, weil es dem Projektteam hilft, eine Entscheidung zu treffen, die sowohl die Relevanz für die Benutzer als auch die Implementierungskosten berücksichtigt."
   ],
   [
    "p",
    "A, D, E und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil es das Projektteam nicht dazu anhält, sich auf die Relevanz der einzelnen Nutzungsanforderungen zu konzentrieren."
   ],
   [
    "li",
    "D ist falsch, weil es das Projektteam nicht dazu anhält, sich auf die Relevanz der einzelnen Nutzungsanforderungen zu konzentrieren."
   ],
   [
    "li",
    "E ist falsch, da die Verwendung von standardisierten Schemata (z.B. Kano-Modell) den Benutzern dabei hilft, die Relevanz einer Nutzungsanforderung angemessen zu bewerten."
   ],
   [
    "li",
    "F ist falsch, weil dies das Projektteam nicht dazu anhält, sich auf die Relevanz der einzelnen Nutzungsanforderungen zu konzentrieren."
   ]
  ]
 },
 {
  "n": 40,
  "k": 2,
  "lo": "6.2.d",
  "stem": [
   "Sie arbeiten in einem Unternehmen als User Requirements Engineer. Der Product Owner des Produkts, an dem Sie arbeiten, hat Ihre Liste mit Anforderungen erhalten, die aus Benutzersicht eine hohe Relevanz haben. Der Product Owner ist wenig erfreut, weil die Anforderungen nicht innerhalb eines kurzen Zeitraums umgesetzt werden können und er den Mehrwert einer Umsetzung nicht sieht.",
   "Welche ZWEI Antworten würden Sie dem Product Owner geben?"
  ],
  "opts": [
   [
    "A",
    "Ich sage ihm, dass dies dringende Nutzungsanforderungen sind, die im aktuellen Release umgesetzt werden sollten, damit die Akzeptanz der Benutzer gesichert ist. Er soll alle anderen Implementierungen stoppen und sich auf diese Anforderungen mit hoher Priorität konzentrieren."
   ],
   [
    "B",
    "Ich erkläre, dass die Umsetzung über mehrere Releases hinweg erfolgen kann. Typischerweise können nicht alle Nutzungsanforderungen gleichzeitig realisiert werden, so dass sie in eine Roadmap aufgenommen werden sollten."
   ],
   [
    "C",
    "Ich sage ihm, dass er einen weiteren Workshop mit den Benutzern durchführen und den Benutzern vorschlagen soll, wie die Nutzungsanforderungen priorisiert werden können, damit sie mit dem Release-Zeitplan übereinstimmen."
   ],
   [
    "D",
    "Ich erkläre, dass alles, was für die zukünftige Entwicklung ausgewählt wurde, eigentlich kein Muss ist und daher nicht berücksichtigt werden muss. Dadurch sinkt die Anzahl der relevanten Anforderungen und wird besser umsetzbar."
   ],
   [
    "E",
    "Ich erläutere die Erfordernisse und den Nutzungskontext, auf denen die Anforderungen basieren, zeige den Nutzen auf, den die Benutzer durch die Umsetzung der Anforderungen erzielen, sowie die Risiken, die entstehen, wenn diese nicht umgesetzt werden."
   ],
   [
    "F",
    "Ich erkläre, dass dies nur Meinungen und Annahmen der Benutzer sind. Das Projektteam sollte selbst eine Priorisierung vornehmen."
   ]
  ],
  "ok": [
   "B",
   "E"
  ],
  "notes": [
   [
    "p",
    "B und E sind richtige Antworten."
   ],
   [
    "li",
    "B ist richtig, weil dies eine kontinuierlichen Umsetzung von Nutzungsanforderungen über einen Zeitraum hinweg unterstützt."
   ],
   [
    "li",
    "E ist richtig, weil es dem Projektteam hilft, die Priorität der einzelnen Nutzungsanforderungen zu beurteilen, indem es mit dem Risiko einer Nichtumsetzung der jeweiligen Nutzungsanforderung konfrontiert wird."
   ],
   [
    "p",
    "A, C, D und F sind falsche Antworten."
   ],
   [
    "li",
    "A ist falsch, weil es nicht möglich sein wird, alle Nutzungsanforderungen gleichzeitig umzusetzen."
   ],
   [
    "li",
    "C ist falsch, weil sich die Benutzer von denen, die die Nutzungskontextanalyse durchgeführt haben, getäuscht fühlen werden."
   ],
   [
    "li",
    "D ist falsch, weil etwas, das für die zukünftige Entwicklung vorgesehen wird, nicht gleichbedeutend mit einem \"Nice to have\" ist. Nutzungsanforderungen mit der Priorität \"Zur späteren Umsetzung\" könnten diejenigen sein, die den Erfolg des interaktiven Systems sichern."
   ],
   [
    "li",
    "F ist falsch, weil es nicht dazu beiträgt, dass das Projektteam die Nutzungsanforderungen ernst nimmt."
   ]
  ]
 }
];
