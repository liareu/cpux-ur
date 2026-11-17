/* Lernfortschritt und Lern-Cockpit. Daten: LERN_DATEN (lern-daten.js, vom Build erzeugt).
   Fortschritt bleibt im localStorage dieses Browsers. */
(function () {
    if (typeof LERN_DATEN === 'undefined') return;
    const KEY = 'cpuxGelernt';
    const lade = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
    const speichere = g => { try { localStorage.setItem(KEY, JSON.stringify(g)); } catch (e) {} };
    let G = lade();
    const seite = location.pathname.split('/').pop() || 'index.html';
    const alle = LERN_DATEN.flatMap(k => k.abschnitte.map(a => Object.assign({ seite: k.seite, kapitel: k.titel }, a)));

    /* 1 Kapitelseiten: Schalter „gelernt“ je Abschnitt */
    const hier = LERN_DATEN.find(k => k.seite === seite);
    if (hier) hier.abschnitte.forEach(a => {
        const sec = document.getElementById(a.id), t = sec && sec.querySelector('.section-title');
        if (!t) return;
        const b = document.createElement('button');
        b.className = 'lern-btn'; b.dataset.id = a.id;
        t.appendChild(b);
    });
    document.addEventListener('click', e => {
        const b = e.target.closest('.lern-btn'); if (!b) return;
        const id = b.dataset.id;
        if (G[id]) delete G[id]; else G[id] = Date.now();
        speichere(G); malen();
    });

    function stand(k) {
        const n = k.abschnitte.length, d = k.abschnitte.filter(a => G[a.id]).length;
        return { n, d, pct: n ? Math.round(d / n * 100) : 0, naechster: k.abschnitte.find(a => !G[a.id]) };
    }

    function malen() {
        document.querySelectorAll('.lern-btn').forEach(b => {
            const on = !!G[b.dataset.id];
            b.classList.toggle('on', on);
            b.innerHTML = '<span class="material-icons">' + (on ? 'check_circle' : 'radio_button_unchecked') + '</span>' + (on ? 'Gelernt' : 'Als gelernt markieren');
        });
        /* Seitenleiste: Haken an Unterpunkten, Stand an Kapiteln */
        document.querySelectorAll('.nav-sub a').forEach(a => a.classList.toggle('gelernt', !!G[a.getAttribute('href').slice(1)]));
        LERN_DATEN.forEach(k => {
            const l = document.querySelector('.nav-link[href="' + k.seite + '"]'); if (!l) return;
            let s = l.querySelector('.lern-stand');
            if (!s) { s = document.createElement('span'); s.className = 'lern-stand'; l.appendChild(s); }
            const st = stand(k);
            s.textContent = st.d ? st.d + '/' + st.n : '';
            s.classList.toggle('fertig', st.d === st.n && st.n > 0);
        });
        /* Lernziele-Seite: Lerneinheit gilt als gelernt, wenn alle zugeordneten Abschnitte gelernt sind */
        document.querySelectorAll('[data-lz-secs]').forEach(c => {
            const ids = c.dataset.lzSecs.split(' ').filter(Boolean);
            c.classList.toggle('lz-gelernt', ids.length > 0 && ids.every(id => G[id]));
        });
        cockpit();
    }

    /* 2 Lern-Cockpit (nur wo #cockpit existiert): Lernweg in drei Schritten, je Schritt Bedeutung, Stand, nächster Klick */
    function cockpit() {
        const box = document.getElementById('cockpit'); if (!box) return;
        const gesamt = alle.length, gelernt = alle.filter(a => G[a.id]).length;
        const naechster = alle.find(a => !G[a.id]);
        let pruef = null, karten = null;
        try { pruef = JSON.parse(localStorage.getItem('cpuxTheorieErgebnis')); } catch (e) {}
        try { karten = JSON.parse(localStorage.getItem('cpuxKarten')); } catch (e) {}
        const nK = typeof KARTEN_ANZAHL !== 'undefined' ? KARTEN_ANZAHL : 0;
        const kann = karten ? Object.values(karten).filter(x => x === 'kann').length : 0;
        const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
        const balken = p => `<span class="ck-bar"><i style="width:${p}%"></i></span>`;
        const schritt = (nr, titel, was, stand, p, knopf, fertig) => `
            <div class="ck-schritt${fertig ? ' fertig' : ''}">
                <div class="ck-nr">${fertig ? '<span class="material-icons">check</span>' : nr}</div>
                <div class="ck-inhalt">
                    <h3>${titel}</h3>
                    <p class="ck-was">${was}</p>
                    <div class="ck-stand">${p === null ? '' : balken(p)}<span>${stand}</span></div>
                </div>
                <div class="ck-aktion">${knopf}</div>
            </div>`;
        box.innerHTML = `
            <p class="ck-intro">Geh die drei Schritte der Reihe nach durch.</p>
            ${schritt(1, 'Kapitel durcharbeiten',
                'Lies die Kapitelseiten Abschnitt für Abschnitt. Wenn du einen Abschnitt verstanden hast, klick oben rechts am Abschnitt auf <b>„Als gelernt markieren“</b>.',
                gelernt ? `${gelernt} von ${gesamt} Abschnitten gelernt` : `Noch kein Abschnitt markiert (${gesamt} insgesamt)`, pct(gelernt, gesamt),
                naechster ? `<a class="btn on" href="${naechster.seite}#${naechster.id}">${gelernt ? 'Weiterlernen' : 'Jetzt starten'}</a><small>Nächster Abschnitt: <b>${naechster.titel}</b><br>${naechster.kapitel}</small>`
                          : '<span class="ck-ok">Alle Abschnitte gelernt</span>', !naechster)}
            ${schritt(2, 'Begriffe abfragen',
                'Die Prüfung fragt Definitionen im genauen Wortlaut ab. Im Selbsttest siehst du einen Begriff, deckst die Definition auf und sagst, ob du sie konntest.',
                kann ? `${kann} von ${nK} Begriffen gekonnt` : `Noch nicht begonnen (${nK} Begriffe)`, pct(kann, nK),
                `<a class="btn${naechster ? '' : ' on'}" href="selbsttest.html">${kann ? 'Weiter abfragen' : 'Selbsttest starten'}</a>`, nK && kann === nK)}
            ${schritt(3, 'Beispielprüfung machen',
                'Die öffentliche Beispielprüfung: 40 Fragen in 90 Minuten. Bestanden ist sie ab 70 %.',
                pruef ? `Letztes Ergebnis: <b>${pruef.pct} %</b> – ${pruef.pct >= 70 ? 'bestanden' : 'noch nicht bestanden'} (${new Date(pruef.datum).toLocaleDateString('de-DE')})` : 'Noch nicht gemacht',
                pruef ? Math.min(100, pruef.pct) : null,
                `<a class="btn" href="pruefung-theorie.html">${pruef ? 'Nochmal versuchen' : 'Prüfung starten'}</a><a class="ck-neben" href="pruefung-praxis.html">Praktische Prüfung</a>`, pruef && pruef.pct >= 70)}
            <h3 class="ck-h">Stand je Kapitel</h3>
            <p class="ck-hinweis">Ein Klick bringt dich zum ersten noch nicht gelernten Abschnitt des Kapitels.</p>
            <div class="ck-kapitel">${LERN_DATEN.map(k => { const st = stand(k); return `
                <a class="ck-kap" href="${st.naechster ? k.seite + '#' + st.naechster.id : k.seite}">
                    <span class="ck-kap-t">${k.titel}</span>${balken(st.pct)}
                    <span class="ck-kap-n">${st.d} / ${st.n}</span></a>`; }).join('')}</div>
            <p class="ck-hinweis ck-fuss"><span class="material-icons">lock</span>Dein Stand wird nur in diesem Browser gespeichert und nirgendwohin verschickt.</p>`;
    }
    malen();
})();
