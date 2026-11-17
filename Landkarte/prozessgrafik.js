/* Klickbare Schaubilder der Folien mit Tabellenansicht.
   Einbau: <div class="pg" data-pg='{"titel": …, "folie": "S. 71", "stufen": [{"titel": …, "folie": …, "gruppen": [{"titel": …, "elemente": [{"label": …, "text": …, "folie": …, "k": "<D-Schlüssel>", "link": "#anker"}]}]}]}'></div>
   Tabellenansicht nur auf Wunsch je Schaubild: "tabelle": true (bei den meisten Schaubildern zeigt sie nichts Neues).
   Alle Texte im Folienwortlaut; ein Klick auf ein Element öffnet das Detailpanel (D-Eintrag oder Folientext). */
(function () {
    const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    let nr = 0;
    document.querySelectorAll('.pg[data-pg]').forEach(box => {
        let g;
        try { g = JSON.parse(box.dataset.pg); } catch (e) { box.textContent = 'Schaubild-Daten fehlerhaft'; return; }
        const id = 'pg' + (++nr);
        const elemente = [];
        g.stufen.forEach((st, si) => (st.gruppen || []).forEach(gr => (gr.elemente || []).forEach(el => elemente.push({ st, si, gr, el }))));

        /* Detailtexte für Elemente ohne eigenen D-Eintrag */
        elemente.forEach((x, i) => {
            if (x.el.k || typeof D === 'undefined') return;
            const key = id + '_' + i;
            D[key] = { icon: 'schema', title: x.el.label, tags: [x.st.titel].concat(x.gr.titel ? [x.gr.titel] : []), link: x.el.link || '#', blocks: [
                [(x.el.folie ? 'Folie ' + x.el.folie : ''), 'menu_book', x.el.text ? esc(x.el.text) : '<span class="pt-none">Auf der Folie nur als Begriff genannt.</span>'],
                ['', '', '<span class="src"><span class="material-icons">description</span>Folien ' + esc(x.el.folie || g.folie) + '</span>']
            ]};
            x.el.k = key;
        });

        const chip = x => `<button class="pg-el" data-k="${x.el.k}" title="Details öffnen">${esc(x.el.label)}</button>`;
        const grafik = `<div class="pg-flow${g.viele ? ' viele' : ''}">${g.stufen.map((st, si) => `
            ${si ? `<div class="pg-pfeil"><span class="material-icons">${st.pfeil === 'down' ? 'south' : 'east'}</span>${st.pfeil_text ? '<small>' + esc(st.pfeil_text) + '</small>' : ''}</div>` : ''}
            <div class="pg-stufe ${st.art || ''}">
                <div class="pg-st-t">${st.k ? `<button class="pg-el pg-head" data-k="${st.k}">${esc(st.titel)}</button>` : esc(st.titel)}</div>
                ${(st.gruppen || []).map(gr => `<div class="pg-gruppe">${gr.titel ? `<div class="pg-gr-t">${gr.k ? `<button class="pg-el pg-sub" data-k="${gr.k}">${esc(gr.titel)}</button>` : esc(gr.titel)}</div>` : ''}
                    <div class="pg-els">${(gr.elemente || []).map(el => chip(elemente.find(x => x.el === el))).join('')}</div></div>`).join('')}
            </div>`).join('')}</div>`;
        /* Tabelle: nur Spalten mit Inhalt; Stufe und Gruppe stehen einmal (rowspan).
           Ohne Beschreibungen eine Zeile je Gruppe mit allen Elementen, sonst eine Zeile je Element. */
        const hatGr = elemente.some(x => x.gr.titel), hatText = elemente.some(x => x.el.text), hatFol = elemente.some(x => x.el.folie);
        const fol = el => hatFol && el.folie ? ` <small class="pg-f">${esc(el.folie)}</small>` : '';
        const stTitel = st => st.k ? `<button class="pg-el pg-head" data-k="${st.k}">${esc(st.titel)}</button>` : `<b>${esc(st.titel)}</b>`;
        const grTitel = gr => gr.k ? `<button class="pg-el pg-sub" data-k="${gr.k}">${esc(gr.titel)}</button>` : esc(gr.titel || '');
        const zeilen = [];
        g.stufen.forEach(st => {
            const grs = (st.gruppen || []).filter(gr => (gr.elemente || []).length);
            const nSt = grs.reduce((n, gr) => n + (hatText ? gr.elemente.length : 1), 0);
            grs.forEach((gr, gi) => {
                const xs = gr.elemente.map(el => elemente.find(x => x.el === el));
                const teile = hatText ? xs.map(x => [`<td><button class="pg-el" data-k="${x.el.k}">${esc(x.el.label)}</button>${fol(x.el)}</td><td>${esc(x.el.text || '')}</td>`])
                    : [[`<td><div class="pg-els">${xs.map(x => chip(x) + fol(x.el)).join('')}</div></td>`]];
                teile.forEach(([zellen], ei) => {
                    const kopf = (!gi && !ei ? `<th rowspan="${nSt}">${stTitel(st)}</th>` : '')
                        + (hatGr && !ei ? `<td rowspan="${teile.length}" class="pg-gr">${grTitel(gr)}</td>` : '');
                    zeilen.push(`<tr>${kopf}${zellen}</tr>`);
                });
            });
        });
        const tabelle = `<div class="pt-scroll"><table class="pt pg-tab"><thead><tr><th>Stufe</th>${hatGr ? '<th>Gruppe</th>' : ''}<th>${hatText ? 'Element' : 'Elemente'}</th>${hatText ? '<th>Beschreibung</th>' : ''}</tr></thead><tbody>${zeilen.join('')}</tbody></table></div>`;

        box.innerHTML = `<div class="pg-kopf"><div class="pg-titel">${esc(g.titel)} <small>${esc(g.folie || '')}</small></div>
            ${g.tabelle ? '<div class="view-switch"><button class="btn on" data-pgv="grafik"><span class="material-icons">account_tree</span>Grafik</button><button class="btn" data-pgv="tabelle"><span class="material-icons">table_chart</span>Tabelle</button></div>' : ''}</div>
            <div class="pg-v pg-grafik">${grafik}</div>${g.tabelle ? `<div class="pg-v pg-tabelle" hidden>${tabelle}</div>` : ''}
            <p class="pt-hint">Alles ist klickbar: ein Element öffnet die Details im Folienwortlaut.</p>`;
        box.addEventListener('click', e => {
            const v = e.target.closest('[data-pgv]');
            if (v) {
                box.querySelectorAll('[data-pgv]').forEach(b => b.classList.toggle('on', b === v));
                box.querySelector('.pg-grafik').hidden = v.dataset.pgv !== 'grafik';
                box.querySelector('.pg-tabelle').hidden = v.dataset.pgv !== 'tabelle';
                return;
            }
            const b = e.target.closest('.pg-el');
            if (b && typeof openDetail === 'function') openDetail(b.dataset.k);
        });
    });
})();
