"""Manuelle Korrekturen aus dem Folienabgleich (Fälle, die nicht automatisch eindeutig ersetzbar waren)."""
import sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
NOTE = '<div class="note"><div class="note-label"><span class="material-icons">edit_note</span>%s</div>%s</div>'


def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:90])
    s = s.replace(a, b)


# S. 18: kein Komma im Folientitel
rep('<h4>Produktentwicklungsprozess, Anteile zum PEP (S. 18)</h4>', '<h4>Produktentwicklungsprozess Anteile zum PEP (S. 18)</h4>')
# S. 30: Notiz wörtlich
rep('Deine Notiz (S. 30)</div>UX Hilfe</div>', 'Deine Notiz (S. 30)</div>ux Hilfe ☺</div>')
# S. 35: Handschrift als Notiz statt als Folientext
rep('''                    <div class="risk"><span>wie wahrscheinlich</span><b>×</b><span>wie groß sind Konsequenzen</span></div>
                    <span class="note-inline">Deine Notiz</span></div>''',
    '                    ' + NOTE % ('Deine Notiz (S. 35)', 'wie wahrscheinlich × wie groß sind Konsequenzen') + '</div>')
# S. 38: „werden überführt“ ohne Zusatz
rep('(Basis für technische Lösung) · Stakeholderanforderungen werden überführt</small>', '(Basis für technische Lösung) · werden überführt</small>')
# S. 58: Reihenfolge wie auf der Folie – Beispiele vor „In der Praxis …“
li = '<li>In der Praxis wird oft der Begriff der "Geschäftsanforderungen" genutzt. Diese begründen warum ein interaktives System für die eigene Organisation entwickelt oder beschafft wird.</li>'
rep(li, '')
rep('<div class="ok"><span class="material-icons">check</span><span>Angebote über 100.000 Euro vom Geschäftsführer unterschreiben lassen.</span></div>',
    '<div class="ok"><span class="material-icons">check</span><span>Angebote über 100.000 Euro vom Geschäftsführer unterschreiben lassen.</span></div>\n                    <ul style="margin-top:6px">' + li + '</ul>')
# S. 60: WAS / WIE sind Handschrift
rep('<div class="na-head"><div class="big">WAS</div><div class="t">Qualitative Nutzungsanforderung</div><div class="s">Deine Notizen: Interaktionsschritte',
    '<div class="na-head"><div class="t">Qualitative Nutzungsanforderung</div><div class="s">Deine Notizen: WAS · Interaktionsschritte')
rep('<div class="na-head"><div class="big">WIE</div><div class="t">Quantitative Nutzungsanforderung</div><div class="s">Deine Notizen: usability',
    '<div class="na-head"><div class="t">Quantitative Nutzungsanforderung</div><div class="s">Deine Notizen: WIE · usability')
# S. 79: Zeichen zwischen Grund und Ziel ist „+“
s = s.replace('Beschreibung d. Aufgabe ⇒ Grund ⇒ Ziel + Teilaufgaben', 'Beschreibung d. Aufgabe ⇒ Grund + Ziel + Teilaufgaben')
# S. 80/83: Inhalte von S. 83 kennzeichnen, eigene Etiketten entfernen
rep('<b>Freunde besuchen, kein eigenes Auto</b>', '<b>Freunde besuchen, kein eigenes Auto</b> <small>(S. 83)</small>')
rep('<div class="ts-h" style="margin-top:14px">erfüllt das "Meta"-Ziel</div>\n                    gute Zeit mit Freunden verbringen',
    '<div class="ts-h" style="margin-top:14px">erfüllt das "Meta"-Ziel: gute Zeit mit Freunden verbringen <small>(S. 83)</small></div>')
rep('<div class="ts-h" style="margin-top:14px">Nachbedingung</div>\n                    kann Freunde besuchen',
    'kann Freunde besuchen <small>(S. 83)</small>')
rep('<b>erfüllt das aufgabenbezogene Ziel: Fahrzeug ist gemietet</b>', '<b>erfüllt das aufgabenbezogene Ziel: Fahrzeug ist gemietet</b> <small>(S. 83)</small>')
rep('<div class="fh"><small>Ergebnis</small>Fahrzeug reserviert für Abholung</div>', '<div class="fh">Fahrzeug reserviert für Abholung</div>')
rep('<div class="box"><div class="box-title">neues Wissen</div>mit bestehendem Aufgabenobjekt neues Wissen generiert</div>', '<div class="box">mit bestehendem Aufgabenobjekt neues Wissen generiert</div>')
rep('4. Ergebnis bewerten · 5. Ergebnis weitergeben</div>', '4. Ergebnis bewerten <span class="note-inline">Deine Notiz: / Überprüfung</span> · 5. Ergebnis weitergeben</div>')
# S. 84: Notiz vollständig
rep('Deine Notizen (S. 84)</div>Daten sammeln</div>', 'Deine Notizen (S. 84)</div>= Ende der Aufgabe / früher Nutzungsobjekte · Daten sammeln</div>')
# S. 93: Grafik steht nicht auf der Folie
rep('<div class="ss-outer"><span>Nutzungskontext (heute)</span><div class="ss-inner">Nutzungskontext für die Gestaltung</div></div>\n', '')
# S. 103: Folientext vollständig
rep('<div class="sec">Formulierungsschablone (Syntax)</div>', '<div class="sec">Formulierungsschablone (Syntax) für eine qualitativen Nutzungsanforderung:</div>')
# S. 125: kein Punkt am Ende
s = s.replace('den Fokus und Umfang für die durchzuführende Nutzungskontextanalyse angemessen zu setzen.', 'den Fokus und Umfang für die durchzuführende Nutzungskontextanalyse angemessen zu setzen')
# S. 130: Notiz „abgeschlossen“ gehört zu S. 130, nicht zu S. 119
rep('ermitteln<span class="note-inline" style="color:white">Deine Notiz: abgeschlossen</span></div>', 'ermitteln</div>')
rep('<span class="material-icons">science</span>2.2 Das Vorgehen bei der Nutzungskontextanalyse festlegen</h3>',
    '<span class="material-icons">science</span>2.2 Das Vorgehen bei der Nutzungskontextanalyse festlegen</h3>\n            <p style="font-size:13px">2.1 – Anlass und Ziele der Nutzungskontextanalyse ermitteln <span class="note-inline">Deine Notiz (S. 130): ✓ abgeschlossen</span></p>')
# S. 114: Überschrift „Wechselwirkungen“ steht nicht auf der Folie
rep('            <h4>Wechselwirkungen</h4>\n', '')
# S. 143: Titel vollständig, Doppelung in der Einleitung entfernen
rep('<h2>Weitere Methoden, Vorgehen zum Verstehen und Erheben des Nutzungskontextes</h2></div>\n        <p class="section-lead">Weitere Methoden, Vorgehen zum Verstehen und Erheben des Nutzungskontextes, die UX-Professionals kennen sollten! (S. 143)</p>',
    '<h2>Weitere Methoden, Vorgehen zum Verstehen und Erheben des Nutzungskontextes, die UX-Professionals kennen sollten!</h2></div>\n        <p class="section-lead">Folie S. 143</p>')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
