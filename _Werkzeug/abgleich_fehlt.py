"""Fügt die beim Folienabgleich als fehlend gemeldeten Folieninhalte wörtlich ein."""
import sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
SRC = '<span class="src"><span class="material-icons">description</span>%s</span>'


def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:90])
    s = s.replace(a, b)


def frage(text, seite):
    return '<div class="box grau"><div class="box-title"><span class="material-icons">help_outline</span>Frage (S. %s)</div>%s</div>' % (seite, text)


# S. 27: gedruckte Übungsfrage im Detailtext Erfordernis
rep("um den Vortrag rechtzeitig beenden zu können (Ziel).'],",
    "um den Vortrag rechtzeitig beenden zu können (Ziel).' + '<p style=\"margin-top:6px\">Welche weiteren Erfordernisse gibt es zum Einhalten der Zeit?</p>'],")
# S. 29: Fragefolie vor „Ein System ist gut …“
rep('<h3 style="margin-top:22px"><span class="material-icons">thumb_up</span>Ein System ist "gut", …</h3>',
    '<h3 style="margin-top:22px"><span class="material-icons">thumb_up</span>Ein System ist "gut", …</h3>\n                ' + frage('Wann ist ein interaktives System (Lösung) gut?<br>Was sind umgangssprachliche Ausprägungen, die auf gute Qualität hinweisen?', '29'))
# S. 31: Kasten der Grafik
rep('<div class="qual-mini"><span>technische Qualität', '<div class="qual-top">Qualität<small>Erfüllung von Anforderungen</small></div>\n                    <div class="qual-mini"><span>technische Qualität')
# S. 38: Spaltenköpfe des Schaubilds
rep('                <div class="q-src">Stakeholderanforderungen<small>(aus Nutzungskontext)',
    '                <div class="q-colh">Anforderungen</div><div></div><div class="q-colh">Qualität der Lösung</div>\n                <div class="q-src">Stakeholderanforderungen<small>(aus Nutzungskontext)')
# S. 39: Fragefolie vor den Qualitätskriterien
rep('<h3><span class="material-icons">rule</span>Typische Qualitätskriterien von Anforderung aus dem RE <span class="note-inline">(Bosch)</span></h3>',
    '<h3><span class="material-icons">rule</span>Typische Qualitätskriterien von Anforderung aus dem RE <span class="note-inline">(Bosch)</span></h3>\n                '
    + frage('Auf welche Kriterien hin können Anforderungen überprüft werden?<br>Gibt es Unterschiede für die Formulierung für das Requirements Engineering und das User Requirements Engineering?', '39'))
# S. 44: Praktische Übung 1
rep('                <span class="src"><span class="material-icons">description</span>Folien S. 42, 43</span>',
    '''                <div class="box"><div class="box-title"><span class="material-icons">edit</span>Praktische Übung 1 (S. 44)</div>Bitte bearbeiten Sie Übung 1 aus der Datei "Praktische Übungen":
                    <p style="margin-top:6px">Im Folgenden sehen Sie einen Zusammenschnitt kontextueller Interviews zu Küchenmaschinen. Sammeln Sie bitte</p>
                    <ul><li>Erfordernisse</li><li>Forderungen</li><li>Wünsche,</li></ul>
                    <p>die in dem folgenden kontextuellen Interview / Beobachtung genannt werden.</p>
                    <span class="src"><span class="material-icons">description</span>Folie S. 44</span></div>
                <span class="src"><span class="material-icons">description</span>Folien S. 42, 43</span>''')
# S. 51 und S. 67: Fortschrittsleiste der Kapitelfolien
BAR = '<p class="kap-bar"><span>Anforderungen und Qualität</span> → <span>Anforderung und Stakeholder</span> → <span>Komponenten des Nutzungskontexts</span> → <span>Nutzungsanforderungen</span> <small>(S. %s)</small></p>'
i = s.index('<section class="section" id="anforderungen">')
j = s.index('</p>', s.index('class="section-lead"', i)) + 4
s = s[:j] + '\n        ' + BAR % '51' + s[j:]
i = s.index('<section class="section" id="kontext">')
j = s.index('</p>', s.index('class="section-lead"', i)) + 4
s = s[:j] + '\n        ' + BAR % '67' + s[j:]
# S. 68: HCD-Folie im Kapitel Nutzungskontext
j = s.index('</p>', s.index('class="kap-bar"', s.index('<section class="section" id="kontext">'))) + 4
s = s[:j] + '''
        <div class="card">
            <h3><span class="material-icons">account_balance</span>Menschzentrierte Gestaltung (HCD)</h3>
            <p>Planung des menschzentrierten Gestaltungsprozesses → <b>Verstehen und Festlegen des Nutzungskontextes</b> → Festlegen der Nutzungsanforderungen → Erarbeiten von Gestaltungslösungen → Evaluieren der Gestaltung → Gestaltungslösung erfüllt die Nutzungsanforderungen</p>
            <p style="font-size:13px;color:#6b7280">Iterationen · Quelle: ISO 9241-210:2019</p>
            <span class="src"><span class="material-icons">description</span>Folie S. 68</span>
        </div>''' + s[j:]
# S. 65: Praktische Übung 2 vor der URE Story S. 66
rep('''        <div class="card">
            <h3><span class="material-icons">auto_stories</span>Die URE Story: Stakeholderanforderungen und Systemanforderungen unterscheiden</h3>''',
    '''        <div class="card">
            <h3><span class="material-icons">edit</span>Praktische Übung 2</h3>
            <p>Bitte bearbeiten Sie Übung 2 aus der Datei "Praktische Übungen":</p>
            <p style="margin-top:6px">Im Folgenden finden Sie verschiedene Aussagen, die in Nutzungskontextinterviews gesammelt oder aus diesen abgeleitet wurden. Bitte ordnen Sie diese, soweit möglich, den angegebenen Kategorien zu.</p>
            <p style="margin-top:6px">Die Aussagen können sehr verkürzt sein, so dass in dieser Übung Annahmen getroffen werden müssen. Daher notieren Sie sich, welche Fragen Sie zusätzlich stellen würden, um diese Anforderung zuzuordnen.</p>
            <p style="margin-top:6px">Zur Zuordnung zu einer Kategorie, stellen Sie sich selbst die Fragen:</p>
            <ul><li>um welches interaktive System, Produkt oder Service es sich handeln könnte?</li><li>wann und von wem die Aussage getroffen wurde?</li></ul>
            <span class="src"><span class="material-icons">description</span>Folie S. 65</span>
        </div>

        <div class="card">
            <h3><span class="material-icons">auto_stories</span>Die URE Story: Stakeholderanforderungen und Systemanforderungen unterscheiden</h3>''')
# S. 82: Folientitel vor den drei Beispielen
rep('Nachbedingung erreicht durch das angestrebte Arbeitsergebnis (Ziel) indem:</h4>\n            <div class="grid-3">',
    'Nachbedingung erreicht durch das angestrebte Arbeitsergebnis (Ziel) indem:</h4>\n            <p class="kap-bar" style="margin-left:0">Aufgabenobjekt als Ergebnis der Aufgabe – Beispiele <small>(S. 82)</small></p>\n            <div class="grid-3">')
# S. 108 und S. 113: Übungsfolien
rep('''"Auto mieten" haben. (Lösung)</span></div>
                    </div>''', '''"Auto mieten" haben. (Lösung)</span></div>
                        <div class="sec">Übung (S. 108)</div>
                        <p>Formulieren Sie zwei qualitative Nutzungsanforderungen an die Dienstleistung UR-Engineering Seminare halten.<br>(Teilnehmerperspektive)</p>
                    </div>''')
rep('''zufriedenstellend zu beenden. <span class="note-inline">Deine Notiz: nicht messbar</span></span></div>
                    </div>''', '''zufriedenstellend zu beenden. <span class="note-inline">Deine Notiz: nicht messbar</span></span></div>
                        <div class="sec">Übung (S. 113)</div>
                        <p>Formulieren Sie zwei quantitative Nutzungsanforderungen an die Dienstleistung UR-Seminare halten.<br>(Teilnehmerperspektive)</p>
                    </div>''')
# S. 121: Fragefolie vor dem Anlass (S. 122)
rep('''            <div class="grid-2" style="margin-top:16px">
                <div class="box"><div class="box-title">Anlass einer Nutzungskontextanalyse (S. 122)</div>''',
    '''            <div style="margin-top:16px">''' + frage('Wann wird eine Nutzungskontextanalyse durchgeführt?<br>Welche Anlässe für eine Nutzungskontextanalyse gibt es?', '121') + '''</div>
            <div class="grid-2" style="margin-top:16px">
                <div class="box"><div class="box-title">Anlass einer Nutzungskontextanalyse (S. 122)</div>''')
# S. 155: Beschriftung „Iterationen“
rep('Evaluieren der Gestaltung → Gestaltungslösung erfüllt die Nutzungsanforderungen<p style="margin-top:6px;font-size:12.5px;color:#718096">Quelle: ISO 9241-210:2019</p>',
    'Evaluieren der Gestaltung → Gestaltungslösung erfüllt die Nutzungsanforderungen<p style="margin-top:6px;font-size:12.5px;color:#718096">Iterationen · Quelle: ISO 9241-210:2019</p>')
# Gestaltung der neuen Bausteine
rep('</style>', '''.kap-bar { font-size: 12px; color: #6b7280; margin: -12px 0 24px 40px; }
.kap-bar span { white-space: nowrap; }
.qual-top { text-align: center; font-weight: 700; font-size: 13px; margin: 10px 0 4px; }
.qual-top small { display: block; font-weight: 500; color: #6b7280; }
.q-colh { font-size: 11px; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; color: #6b7280; }
</style>''')
open(p, 'w', encoding='utf-8').write(s)
print('ok')
