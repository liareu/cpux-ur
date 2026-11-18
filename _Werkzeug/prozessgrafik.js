/* Klickbare Schaubilder der Folien mit Tabellenansicht.
   Einbau: <div class="pg" data-pg='{"titel": …, "folie": "S. 71", "stufen": [{"titel": …, "folie": …, "gruppen": [{"titel": …, "elemente": [{"label": …, "text": …, "folie": …, "k": "<D-Schlüssel>", "link": "#anker"}]}]}]}'></div>
   Tabellenansicht nur auf Wunsch je Schaubild: "tabelle": true (bei den meisten Schaubildern zeigt sie nichts Neues).
   Alle Texte im Folienwortlaut; ein Klick auf ein Element öffnet das Detailpanel (D-Eintrag oder Folientext).
   Form wie auf der Folie über "form" (ohne Angabe: Ablauf mit Pfeilen):
     "baum"        Wurzel ("wurzel") → Äste (Stufen) → Zweige (Gruppen) → Blätter (Elemente)
     "zusammenlauf" Stufe 1 oben, ihre Elemente als Kästen nebeneinander, alle münden in Stufe 2
     "ebenen"      Stufen als Zeilen untereinander, links die Ebene, rechts der Inhalt (ohne Gruppentitel = Pfeilkette)
     "wirkung"     Zeilen Anforderung → "wirkt" → Qualität (Stufe 1+2 links, Stufe 3 rechts; "spannen": Zeilen je rechtem Kasten)
     "vergleich"   Gruppen als Spalten, Stufen als Zeilen; gleicher Wortlaut wird mit = markiert ("breit": lange Zeilentitel)
     "paare"       je Stufe eine Zeile: Stufentitel | Elemente, Spaltenköpfe aus "spalten"
     "klammer"     Stufen nebeneinander; ab Stufe "klammer_ab" fasst eine Klammer ("klammer") die übrigen zusammen
     "matrix"      Gruppen = Methoden (Umschalter), Stufen = Phasen; Stufen mit art "l" stehen als Ergänzung darunter */
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
        const fluss = `<div class="pg-flow${g.viele ? ' viele' : ''}">${g.stufen.map((st, si) => `
            ${si ? `<div class="pg-pfeil"><span class="material-icons">${st.pfeil === 'down' ? 'south' : 'east'}</span>${st.pfeil_text ? '<small>' + esc(st.pfeil_text) + '</small>' : ''}</div>` : ''}
            <div class="pg-stufe ${st.art || ''}">
                <div class="pg-st-t">${st.k ? `<button class="pg-el pg-head" data-k="${st.k}">${esc(st.titel)}</button>` : esc(st.titel)}</div>
                ${(st.gruppen || []).map(gr => `<div class="pg-gruppe">${gr.titel ? `<div class="pg-gr-t">${gr.k ? `<button class="pg-el pg-sub" data-k="${gr.k}">${esc(gr.titel)}</button>` : esc(gr.titel)}</div>` : ''}
                    <div class="pg-els">${(gr.elemente || []).map(el => chip(elemente.find(x => x.el === el))).join('')}</div></div>`).join('')}
            </div>`).join('')}</div>`;
        const el = e => chip(elemente.find(x => x.el === e));
        const kopfK = st => st.k ? `<button class="pg-el pg-head" data-k="${st.k}">${esc(st.titel)}</button>` : esc(st.titel);
        const alle = st => (st.gruppen || []).flatMap(gr => gr.elemente || []);
        const FORM = {
            baum: () => `<div class="pg-baum"><div class="pg-wurzel">${esc(g.wurzel || '')}</div>
                <div class="pg-aeste pg-spalten" style="--n:${g.stufen.length}">${g.stufen.map(st => `<div class="pg-ast">
                    <div class="pg-ast-t">${kopfK(st)}</div>
                    ${(st.gruppen || []).map(gr => `<div class="pg-zweig">${gr.titel ? `<div class="pg-zw-t">${esc(gr.titel)}</div>` : ''}
                        <ul>${(gr.elemente || []).map(e => `<li>${el(e)}</li>`).join('')}</ul></div>`).join('')}
                </div>`).join('')}</div></div>`,
            zusammenlauf: () => { const [oben, unten] = g.stufen; return `<div class="pg-lauf">
                <div class="pg-lauf-oben">${kopfK(oben)}</div>
                <div class="pg-lauf-mitte" style="--n:${alle(oben).length}">${alle(oben).map(e => `<div>${el(e)}<span class="material-icons">south</span></div>`).join('')}</div>
                <div class="pg-lauf-unten"><b>${kopfK(unten)}</b>${alle(unten).length ? ' == ' + alle(unten).map(el).join(' / ') : ''}</div></div>`; },
            ebenen: () => `<div class="pg-ebenen">${g.stufen.map(st => `<div class="pg-ebene">
                <div class="pg-eb-t">${kopfK(st)}${(st.gruppen || []).filter(gr => gr.titel).map(gr => `<small>${esc(gr.titel)}</small>`).join('')}</div>
                <div class="pg-eb-i">${(st.gruppen || []).every(gr => !gr.titel) && alle(st).length > 2
                    ? `<div class="pg-kette">${alle(st).map(el).join('')}</div>`
                    : `<ul>${alle(st).map(e => `<li>${el(e)}</li>`).join('')}</ul>`}</div></div>`).join('')}</div>`,
            wirkung: () => {
                const links = g.stufen.slice(0, -1).flatMap(st => (st.gruppen || []).map(gr => ({ st, gr })));
                const rechts = alle(g.stufen[g.stufen.length - 1]), spannen = g.spannen || rechts.map(() => 1);
                let z = 0;
                const rechtsHtml = rechts.map((e, i) => { const von = z + 2; z += spannen[i]; return `<div class="pg-wk-q" style="grid-row:${von} / span ${spannen[i]}">${el(e)}</div>`; }).join('');
                return `${g.lead ? `<p class="pg-lead">${esc(g.lead)}</p>` : ''}<div class="pg-wirkung">
                    <div class="pg-wk-h" style="grid-column:1">${esc(g.stufen[0].titel)}</div><div class="pg-wk-h" style="grid-column:3">${esc(g.stufen[g.stufen.length - 1].titel)}</div>
                    ${links.map(({ st, gr }, i) => `<div class="pg-wk-a" style="grid-row:${i + 2}">
                        <div class="pg-wk-at">${gr.titel ? esc(gr.titel) : kopfK(st)}</div>
                        <div class="pg-els">${(gr.elemente || []).map(el).join('')}</div>
                        ${g.ueberfuehrt && i === links.length - 2 ? `<div class="pg-wk-ue"><span class="material-icons">south</span>${esc(g.ueberfuehrt[0])}<span class="pg-wk-nicht"><span class="material-icons">bolt</span>${esc(g.ueberfuehrt[1] || '')}</span></div>` : ''}
                    </div><div class="pg-wk-p" style="grid-row:${i + 2}"><span>${esc((g.wirkt || [])[i] || '')}</span><span class="material-icons">east</span></div>`).join('')}
                    ${rechtsHtml}</div>${g.fuss ? `<p class="pg-fuss"><span class="material-icons">bolt</span>${esc(g.fuss)}</p>` : ''}`;
            },
            vergleich: () => {
                const spalten = (g.stufen[0].gruppen || []).map(gr => gr.titel);
                return `<div class="pg-vgl${g.breit ? ' breit' : ''}" style="--n:${spalten.length}">
                    <div class="pg-vgl-nr"></div>${spalten.map(t => `<div class="pg-vgl-h">${esc(t)}</div>`).join('')}
                    ${g.stufen.map(st => { const zellen = spalten.map(t => ((st.gruppen || []).find(gr => gr.titel === t) || {}).elemente || []);
                        const gleich = zellen.every(z => z.map(e => e.label).join('|') === zellen[0].map(e => e.label).join('|'));
                        return `<div class="pg-vgl-nr">${kopfK(st)}${gleich ? '<small title="gleicher Wortlaut">=</small>' : ''}</div>${zellen.map(z => `<div class="pg-vgl-z${gleich ? ' gleich' : ''}">${z.map(el).join('')}</div>`).join('')}`; }).join('')}
                </div>`;
            },
            paare: () => `<div class="pg-paare">${(g.spalten || ['', '']).map(t => `<div class="pg-vgl-h">${esc(t)}</div>`).join('')}
                ${g.stufen.map(st => `<div class="pg-pa-a">${kopfK(st)}</div><div class="pg-pa-e">${alle(st).map(el).join('')}</div>`).join('')}</div>`,
            klammer: () => {
                const ab = g.klammer_ab || 1;
                const spalte = st => `<div class="pg-kl-s"><div class="pg-kl-t">${kopfK(st)}</div><div class="pg-kl-i">${(st.gruppen || []).map(gr => `${gr.titel ? `<div class="pg-zw-t">${esc(gr.titel)}</div>` : ''}<ul>${(gr.elemente || []).map(e => `<li>${el(e)}</li>`).join('')}</ul>`).join('')}</div></div>`;
                const innen = g.stufen.slice(ab);
                return `<div class="pg-kl">${g.stufen.slice(0, ab).map(st => `<div class="pg-kl-allein">${spalte(st)}</div>`).join('')}
                    <div class="pg-kl-gruppe"><div class="pg-kl-k">${esc(g.klammer || '')}</div>
                        <div class="pg-kl-innen">${innen.map((st, i) => (i ? `<div class="pg-kl-pfeil">${esc(st.pfeil_text || '') || '<span class="material-icons">east</span>'}</div>` : '') + spalte(st)).join('')}</div></div></div>`;
            },
            matrix: () => {
                const phasen = g.stufen.filter(st => st.art !== 'l'), extra = g.stufen.filter(st => st.art === 'l');
                const methoden = [...new Set(phasen.flatMap(st => (st.gruppen || []).map(gr => gr.titel)))];
                const zelle = (st, m) => ((st.gruppen || []).find(gr => gr.titel === m) || {}).elemente || [];
                const liste = es => `<ul>${es.map(e => `<li>${el(e)}</li>`).join('')}</ul>`;
                return `<div class="view-switch pg-mx-wahl">${methoden.map((m, i) => `<button class="btn${i ? '' : ' on'}" data-mx="${i}">${esc(m)}</button>`).join('')}<button class="btn" data-mx="alle">Alle vergleichen</button></div>
                    ${methoden.map((m, i) => `<div class="pg-mx-v" data-mxv="${i}"${i ? ' hidden' : ''}><div class="pg-phasen pg-spalten" style="--n:${phasen.length}">${phasen.map((st, pi) => `<div class="pg-phase">
                        <div class="pg-ph-t"><b>${pi + 1}</b>${kopfK(st)}</div>${liste(zelle(st, m))}</div>`).join('')}</div></div>`).join('')}
                    <div class="pg-mx-v" data-mxv="alle" hidden><div class="pg-mx" style="--n:${phasen.length}">
                        <div></div>${phasen.map((st, pi) => `<div class="pg-ph-t"><b>${pi + 1}</b>${esc(st.titel)}</div>`).join('')}
                        ${methoden.map(m => `<div class="pg-mx-m">${esc(m)}</div>${phasen.map(st => `<div class="pg-mx-z">${liste(zelle(st, m))}</div>`).join('')}`).join('')}
                    </div></div>
                    ${extra.map(st => `<div class="pg-extra"><div class="pg-extra-t">${kopfK(st)}</div><div class="pg-spalten" style="--n:${(st.gruppen || []).length}">${(st.gruppen || []).map(gr => `<div><div class="pg-zw-t">${esc(gr.titel)}</div>${liste(gr.elemente || [])}</div>`).join('')}</div></div>`).join('')}`;
            }
        };
        const FORM_NAME = { baum: ['account_tree', 'Struktur'], zusammenlauf: ['call_merge', 'Struktur'], ebenen: ['view_agenda', 'Ebenen'], wirkung: ['trending_flat', 'Wirkung'],
            vergleich: ['compare_arrows', 'Vergleich'], paare: ['format_list_numbered', 'Schritte und Ergebnisse'], klammer: ['call_split', 'Einteilung'], matrix: ['view_week', 'Vorgehen je Methode'] };
        const art = FORM_NAME[g.form] || ['east', 'Ablauf'];
        const grafik = FORM[g.form] ? FORM[g.form]() : fluss;
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

        box.classList.add('pg-form-' + (g.form || 'ablauf'));
        box.innerHTML = `<div class="pg-kopf"><span class="pg-typ"><span class="material-icons">${art[0]}</span>${art[1]}</span><div class="pg-titel">${esc(g.titel)} <small>${esc(g.folie || '')}</small>${box.dataset.ort ? `<span class="pg-ort">${box.dataset.ort}</span>` : ''}</div>
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
            const mx = e.target.closest('[data-mx]');
            if (mx) {
                box.querySelectorAll('[data-mx]').forEach(b => b.classList.toggle('on', b === mx));
                box.querySelectorAll('[data-mxv]').forEach(v => { v.hidden = v.dataset.mxv !== mx.dataset.mx; });
                window.dispatchEvent(new Event('resize'));
                return;
            }
            const b = e.target.closest('.pg-el');
            if (b && typeof openDetail === 'function') openDetail(b.dataset.k);
        });
    });
})();
