/* Detailpanel ordnen: Das Wichtigste vorn, Beispiele und Notizen eingeklappt, Details als Links.
   Läuft automatisch für jeden Eintrag in D, sobald das Panel neuen Inhalt bekommt. */
(function () {
    const body = document.getElementById('drBody');
    if (!body) return;
    const head = document.querySelector('.dr-head');

    function ordnen() {
        if (body.querySelector(':scope > .dz-kern, :scope > .dz-leer')) return;
        const blocks = [...body.querySelectorAll(':scope > .d-block')];
        if (!blocks.length) return;
        const titel = b => ((b.querySelector('.d-title') || {}).textContent || '').trim();
        const kern = blocks.find(b => /Definition/.test(titel(b))) || blocks.find(b => titel(b) && !/Beispiel/.test(titel(b)));
        /* Beispiele (B-Folien) gehören nicht in die Übersicht: nur auf den Kapitelseiten */
        const seitenB = t => { const ps = (t.match(/S\.\s*\d[\d\s,–-]*/g) || []).join(',').match(/\d+/g) || [];
            return ps.length && typeof ROT !== 'undefined' && ps.every(p => ROT[p] && ROT[p].m === 'B'); };
        const istBeispiel = b => /Beispiel|gut formuliert|falsch formuliert/.test(titel(b)) || seitenB(titel(b));
        blocks.filter(b => b !== kern && istBeispiel(b)).forEach(b => b.remove());
        const beispiele = [];
        const leer = blocks.filter(b => !titel(b));
        const weitere = blocks.filter(b => b !== kern && b.isConnected && !istBeispiel(b) && !leer.includes(b));
        const notizen = leer.flatMap(b => [...b.querySelectorAll('.note')]);
        const quellen = leer.flatMap(b => [...b.querySelectorAll('.src')]);
        const sonst = leer.filter(b => !b.querySelector('.note, .src') && b.textContent.trim());

        const frag = document.createDocumentFragment();
        if (kern) { kern.classList.add('dz-kern'); frag.append(kern); }
        if (weitere.length || sonst.length) {
            const w = document.createElement('div'); w.className = 'dz-weitere';
            [...weitere, ...sonst].forEach(b => w.append(b));
            frag.append(w);
        }
        const gruppe = (label, icon, items) => {
            if (!items.length) return;
            const d = document.createElement('details'); d.className = 'dz-gruppe';
            d.innerHTML = `<summary><span class="material-icons">${icon}</span>${label} <span class="dz-n">${items.length}</span><span class="material-icons dz-pfeil">expand_more</span></summary>`;
            items.forEach(i => d.append(i));
            frag.append(d);
        };
        gruppe('Beispiele', 'lightbulb', beispiele);
        gruppe('Deine Notizen', 'edit_note', notizen);

        /* Weiterlesen: Folien, Abschnitt, Glossar als leise Links */
        const links = document.createElement('div'); links.className = 'dz-links';
        const seiten = quellen.map(q => q.textContent.replace(/^\s*description\s*/, '').trim()).join(', ');
        const zur = document.getElementById('drLink');
        links.innerHTML = '<div class="dz-links-t">Weiterlesen</div>'
            + (seiten ? `<a class="src dz-l" role="button" tabindex="0"><span class="material-icons">photo_library</span>Originalfolien ${seiten.replace(/Folien?\s*/g, '')}</a>` : '')
            + (zur && zur.getAttribute('href') && zur.getAttribute('href') !== '#' ? `<a class="dz-l" href="${zur.getAttribute('href')}"><span class="material-icons">article</span>Ausführlich auf der Kapitelseite</a>` : '')
            + '<a class="dz-l" href="glossar.html"><span class="material-icons">menu_book</span>Alle Begriffe im Glossar</a>';
        frag.append(links);
        quellen.forEach(q => q.remove());
        leer.forEach(b => b.remove());

        body.textContent = '';
        body.append(frag);
        body.insertAdjacentHTML('afterbegin', '<span class="dz-leer" hidden></span>');
    }

    /* Kopfzeile: Tags als ruhige Meta-Zeile */
    function kopf() {
        const tags = document.getElementById('drTags');
        if (!tags || tags.dataset.dz === tags.innerHTML) return;
        tags.querySelectorAll('.badge').forEach(b => {
            const t = b.textContent;
            b.className = 'badge dz-tag' + (/Problemraum/.test(t) ? ' t' : /Lösungsraum/.test(t) ? ' l' : /Prüfung|P$/.test(t) ? ' p' : '');
        });
        tags.dataset.dz = tags.innerHTML;
    }

    new MutationObserver(() => { ordnen(); kopf(); }).observe(body, { childList: true });
    if (head) head.classList.add('dz-head');
})();
