/* Mini-Onboarding: erklärt in vier Schritten, was wo zu finden ist.
   Erscheint einmal beim ersten Besuch (localStorage cpuxOnboarding), danach über „Einführung“ in der Seitenleiste. */
(function () {
    const KEY = 'cpuxOnboarding';
    const SCHRITTE = [
        { icon: 'waving_hand', titel: 'Willkommen in der CPUX-UR-Lernkarte',
          text: 'Hier findest du alle Folien des Trainings (S. 2–300) mit Julias Notizen, geordnet nach dem HCD-Prozess. Ziel: den ganzen Kurs überblicken und für die theoretische und praktische Prüfung lernen.',
          wege: [['dashboard.html', 'dashboard', 'Lern-Cockpit', 'dein Lernstand und der nächste Schritt'],
                 ['index.html', 'map', 'Prozesskarte', 'der HCD-Prozess als klickbare Grafik, alles hat dort seinen Platz'],
                 ['seminar.html', 'school', 'Zum Seminar', 'Agenda, Rollen und das Handout als PDF']] },
        { icon: 'looks_one', titel: 'Die Kapitel 1–7',
          text: 'Jedes Kapitel hat eine eigene Seite mit den Folien im Wortlaut. Rot = rot gedruckt auf der Folie, gelb = Julias Notiz, W = wichtige Folie. „Originalfolien“ zeigt das Foto, „Als gelernt markieren“ zählt im Cockpit.',
          wege: [['kapitel-1.html', 'looks_one', 'Kapitel 1', 'Einführung in die NKA'],
                 ['kapitel-4.html', 'looks_4', 'Kapitel 4', 'Erfordernisse identifizieren'],
                 ['kapitel-5.html', 'looks_5', 'Kapitel 5', 'Nutzungsanforderungen ableiten']] },
        { icon: 'school', titel: 'Lernen und üben',
          text: 'Unter „Lernen“ siehst du die Zusammenhänge und trainierst für die Prüfung: Theorie mit Auswertung, Praxis mit Übersicht der Aufgaben und Punkte, Übungen aus dem Seminar mit Beispiellösungen.',
          wege: [['zusammenhang.html', 'hub', 'Alles im Zusammenhang', 'je Prozessschritt Begriffe, Schablonen, Lernziele, Prüfung'],
                 ['pruefung-praxis.html', 'assignment', 'Praktische Prüfung', 'Aufgaben, Punkte, Sprünge zu Lernstoff und Schablonen'],
                 ['pruefung-uebungen.html', 'edit', 'Übungen', 'Ist-Szenario, Erfordernisse, Aufgabenmodell'],
                 ['pruefung-theorie.html', 'quiz', 'Theoretische Prüfung', '40 Fragen der Beispielprüfung']] },
        { icon: 'menu_book', titel: 'Nachschlagen',
          text: 'Definitionen, Zusammenfassungen und die prüfungsrelevanten Formulierungsschablonen an einem Ort, dazu das Curriculum zum Durchsuchen.',
          wege: [['schablonen.html', 'text_fields', 'Formulierungsschablonen', 'mit den Gütekriterien dazu'],
                 ['glossar.html', 'menu_book', 'Glossar', 'alle Definitionen im Wortlaut'],
                 ['ure-story.html', 'auto_stories', 'URE Story', 'die Zusammenfassungen der Kapitel'],
                 ['curriculum.html', 'library_books', 'Curriculum', 'durchsuchbar, mit Link ins PDF'],
                 ['../Input/bungencpuxurtnbescheinigungrckmeldungslink/CPUX-UR%20HANDOUT-Pr%C3%A4senztraining%20V3.2.2%20Nov26.pdf', 'picture_as_pdf', 'Alle Folien (Handout-PDF)', 'auch aus jedem Fenster „Originalfolien“ direkt zur passenden Seite']] }
    ];
    const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
    let nr = 0, box = null, zuvor = null;

    function zeichnen() {
        const s = SCHRITTE[nr], letzter = nr === SCHRITTE.length - 1;
        box.querySelector('.ob-inhalt').innerHTML = `
            <div class="ob-kopf"><span class="material-icons">${s.icon}</span><h2 id="obTitel">${esc(s.titel)}</h2></div>
            <p class="ob-text">${esc(s.text)}</p>
            <div class="ob-wege">${s.wege.map(([href, icon, t, d]) => `<a href="${href}"><span class="material-icons">${icon}</span><span><b>${esc(t)}</b><small>${esc(d)}</small></span></a>`).join('')}</div>`;
        box.querySelector('.ob-punkte').innerHTML = SCHRITTE.map((_, i) => `<button class="${i === nr ? 'on' : ''}" aria-label="Schritt ${i + 1}" data-i="${i}"></button>`).join('');
        box.querySelector('.ob-zurueck').hidden = nr === 0;
        box.querySelector('.ob-weiter').innerHTML = letzter ? 'Los geht’s' : 'Weiter<span class="material-icons">east</span>';
    }
    function schliessen() {
        try { localStorage.setItem(KEY, '1'); } catch (e) {}
        box.hidden = true; document.body.classList.remove('ob-offen');
        if (zuvor) zuvor.focus();
    }
    function oeffnen() {
        zuvor = document.activeElement; nr = 0;
        if (!box) bauen();
        zeichnen(); box.hidden = false; document.body.classList.add('ob-offen');
        box.querySelector('.ob-weiter').focus();
    }
    function bauen() {
        box = document.createElement('div');
        box.className = 'ob-bg'; box.hidden = true;
        box.innerHTML = `<div class="ob" role="dialog" aria-modal="true" aria-labelledby="obTitel">
            <button class="ob-x" aria-label="Einführung schließen"><span class="material-icons">close</span></button>
            <div class="ob-inhalt"></div>
            <div class="ob-fuss"><div class="ob-punkte"></div>
                <div class="ob-knoepfe"><button class="ob-zurueck btn">Zurück</button><button class="ob-weiter btn">Weiter</button></div></div>
        </div>`;
        document.body.appendChild(box);
        box.querySelector('.ob-x').addEventListener('click', schliessen);
        box.querySelector('.ob-zurueck').addEventListener('click', () => { nr--; zeichnen(); });
        box.querySelector('.ob-weiter').addEventListener('click', () => { if (nr < SCHRITTE.length - 1) { nr++; zeichnen(); } else schliessen(); });
        box.querySelector('.ob-punkte').addEventListener('click', e => { if (e.target.dataset.i) { nr = +e.target.dataset.i; zeichnen(); } });
        box.addEventListener('click', e => { if (e.target === box) schliessen(); });
        box.addEventListener('click', e => { if (e.target.closest('.ob-wege a')) { try { localStorage.setItem(KEY, '1'); } catch (x) {} } });
        document.addEventListener('keydown', e => {
            if (box.hidden) return;
            if (e.key === 'Escape') schliessen();
            if (e.key === 'ArrowRight' && nr < SCHRITTE.length - 1) { nr++; zeichnen(); }
            if (e.key === 'ArrowLeft' && nr > 0) { nr--; zeichnen(); }
            if (e.key === 'Tab') {                                   /* Fokus im Dialog halten */
                const f = [...box.querySelectorAll('button:not([hidden]), a')];
                if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
                else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
            }
        });
    }

    /* Wiederaufruf über die Seitenleiste */
    const fuss = document.querySelector('.sidebar-footer');
    if (fuss) {
        const b = document.createElement('button');
        b.className = 'ob-start'; b.type = 'button';
        b.innerHTML = '<span class="material-icons">help_outline</span>Einführung: was finde ich wo?';
        b.addEventListener('click', oeffnen);
        fuss.prepend(b);
    }
    /* Nach-oben-Knopf auf jeder Seite (unabhängig vom übrigen Seitenskript) */
    let hoch = document.getElementById('backToTop');
    if (!hoch) {
        hoch = document.createElement('button');
        hoch.className = 'back-to-top'; hoch.id = 'backToTop'; hoch.setAttribute('aria-label', 'Zurück nach oben');
        hoch.innerHTML = '<span class="material-icons" style="font-size:26px">arrow_upward</span>';
        document.body.appendChild(hoch);
    }
    const zeigen = () => hoch.classList.toggle('show', window.scrollY > 300);
    window.addEventListener('scroll', zeigen, { passive: true }); zeigen();
    hoch.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    let gesehen = false;
    try { gesehen = localStorage.getItem(KEY) === '1'; } catch (e) {}
    if (!gesehen) oeffnen();
})();
