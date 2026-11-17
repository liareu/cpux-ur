/* Originalfolien: Ein Klick auf eine Folienangabe („S. 24–26“) oder auf „Originalfolien“
   öffnet die Fotos der Folien. Zuordnung Foto → Folienseite steht in folien-daten.js. */
(function () {
    if (typeof FOLIEN === 'undefined') return;
    const byPage = {};
    FOLIEN.forEach(f => f.pages.forEach(p => { (byPage[p] = byPage[p] || []).push(f); }));

    /* „S. 23–26, 48, 132“ → [23, 24, 25, 26, 48, 132] */
    function pagesOf(text) {
        const out = [];
        (text.match(/S\.\s*\d[\d\s,–-]*/g) || []).forEach(m => {
            m.replace(/^S\.\s*/, '').split(',').forEach(part => {
                const r = part.trim().split(/\s*[–-]\s*/).map(Number);
                if (!r[0]) return;
                for (let p = r[0]; p <= (r[1] || r[0]) && p - r[0] < 60; p++) out.push(p);
            });
        });
        return [...new Set(out)];
    }
    function photosOf(pages) {
        const seen = new Set(), list = [];
        pages.sort((a, b) => a - b).forEach(p => (byPage[p] || []).forEach(f => { if (!seen.has(f.file)) { seen.add(f.file); list.push(f); } }));
        return list;
    }
    const label = f => (f.pages.length > 1 ? 'Folien S. ' : 'Folie S. ') + f.pages.join(', ');

    document.body.insertAdjacentHTML('beforeend', `
        <div class="sl" id="sl" role="dialog" aria-modal="true" aria-label="Originalfolien" hidden>
            <div class="sl-bar"><span class="material-icons">photo_library</span><b class="sl-title"></b><span class="sl-count"></span>
                <a class="sl-orig" target="_blank" title="Foto in neuem Tab öffnen"><span class="material-icons">open_in_new</span>Foto öffnen</a>
                <button class="sl-x" aria-label="Schließen"><span class="material-icons">close</span></button></div>
            <div class="sl-stage"><button class="sl-nav prev" aria-label="Vorheriges Foto"><span class="material-icons">chevron_left</span></button>
                <img alt=""><button class="sl-nav next" aria-label="Nächstes Foto"><span class="material-icons">chevron_right</span></button></div>
            <div class="sl-strip"></div>
        </div>`);
    const box = document.getElementById('sl'), img = box.querySelector('img');
    let list = [], idx = 0;

    function show(i) {
        idx = (i + list.length) % list.length;
        const f = list[idx];
        img.src = 'folien/' + f.file.replace(/\.jpe?g$/i, '.jpg');
        img.alt = label(f) + (f.titles && f.titles.length ? ': ' + f.titles.join(' · ') : '');
        box.querySelector('.sl-title').textContent = label(f);
        box.querySelector('.sl-count').textContent = list.length > 1 ? (idx + 1) + ' / ' + list.length : '';
        box.querySelector('.sl-orig').href = img.src;
        box.querySelectorAll('.sl-strip button').forEach((b, j) => b.classList.toggle('on', j === idx));
        box.classList.toggle('single', list.length < 2);
    }
    function open(pages) {
        list = photosOf(pages);
        if (!list.length) return false;
        box.querySelector('.sl-strip').innerHTML = list.map((f, j) =>
            `<button data-i="${j}"><img src="folien/${f.file.replace(/\.jpe?g$/i, '.jpg')}" alt="" loading="lazy"><span>${label(f).replace('Folien ', '').replace('Folie ', '')}</span></button>`).join('');
        box.hidden = false; document.body.classList.add('sl-open');
        show(0); box.querySelector('.sl-x').focus();
        return true;
    }
    function close() { box.hidden = true; document.body.classList.remove('sl-open'); img.removeAttribute('src'); }

    box.addEventListener('click', e => {
        if (e.target.closest('.sl-x') || e.target === box) close();
        else if (e.target.closest('.sl-nav.prev')) show(idx - 1);
        else if (e.target.closest('.sl-nav.next')) show(idx + 1);
        else if (e.target.closest('.sl-strip button')) show(+e.target.closest('button').dataset.i);
    });
    /* Fängt die Tasten ab, bevor das Detailpanel darunter sie bekommt */
    window.addEventListener('keydown', e => {
        if (box.hidden) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') show(idx - 1);
        else if (e.key === 'ArrowRight') show(idx + 1);
        else return;
        e.preventDefault(); e.stopImmediatePropagation();
    }, true);

    /* Auslöser: Folienangaben im Text und „Originalfolien“-Knöpfe */
    const TRIG = '.src, .g-meta, .d-title, .note-label, .sl-btn';
    function mark(root) {
        root.querySelectorAll(TRIG).forEach(el => {
            const pages = el.dataset.pages ? el.dataset.pages.split(',').map(Number) : pagesOf(el.textContent);
            const ok = photosOf(pages).length > 0;
            el.classList.toggle('sl-link', ok);
            if (ok) { el.title = 'Originalfolien anzeigen'; el.tabIndex = 0; el.setAttribute('role', 'button'); }
        });
    }
    document.addEventListener('click', e => {
        const el = e.target.closest('.sl-link'); if (!el) return;
        const pages = el.dataset.pages ? el.dataset.pages.split(',').map(Number) : pagesOf(el.textContent);
        if (open(pages)) { e.preventDefault(); e.stopPropagation(); }
    });
    document.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('sl-link')) { e.preventDefault(); e.target.click(); }
    });

    /* Je Thema ein Knopf „Originalfolien“ mit allen Folien, die das Thema nennt */
    document.querySelectorAll('section.section').forEach(sec => {
        if (sec.id === 'glossar') return;
        const pages = [...new Set([...sec.querySelectorAll('.src, .g-meta, .note-label')].flatMap(el => pagesOf(el.textContent)))];
        const title = sec.querySelector('.section-title');
        if (!title || !photosOf(pages).length) return;
        title.insertAdjacentHTML('beforeend', `<button class="sl-btn" data-pages="${pages.join(',')}"><span class="material-icons">photo_library</span>Originalfolien</button>`);
    });
    mark(document);

    /* Detailpanel: Inhalt wechselt beim Öffnen, Knopf im Fuß mitführen */
    const drBody = document.getElementById('drBody'), foot = document.querySelector('.dr-foot');
    if (drBody && foot) {
        foot.insertAdjacentHTML('afterbegin', '<button class="btn sl-btn" id="drSlides"><span class="material-icons">photo_library</span>Originalfolien</button>');
        const btn = document.getElementById('drSlides');
        new MutationObserver(() => {
            const pages = [...new Set([...drBody.querySelectorAll('.src, .d-title, .note-label')].flatMap(el => pagesOf(el.textContent)))];
            btn.dataset.pages = pages.join(',');
            btn.style.display = photosOf(pages).length ? '' : 'none';
            mark(drBody); mark(foot);
        }).observe(drBody, { childList: true });
    }
})();
