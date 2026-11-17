/* Curriculum: Volltextsuche mit Markierung, Filter Definitionen / Lernziele. Alles lokal im Browser. */
(function () {
    const q = document.getElementById('cuQ');
    if (!q) return;
    const count = document.getElementById('cuCount');
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss');
    /* Suchbare Einheiten: Absätze, Listen, Definitionen, einzelne Lernziele, Abbildungen */
    const units = [...document.querySelectorAll('.cu-kap p.cu-b, .cu-kap ul.cu-b, .cu-kap .cu-def, .cu-kap .cu-lz-i, .cu-kap .cu-fig')];
    units.forEach(u => { u.dataset.orig = u.innerHTML; u.dataset.n = norm(u.textContent); });
    let filter = 'alle';

    function typeOk(u) {
        if (filter === 'def') return u.classList.contains('cu-def');
        if (filter === 'lz') return u.classList.contains('cu-lz-i');
        return true;
    }
    function mark(el, words) {
        const re = new RegExp('(' + words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi');
        const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nodes = []; while (walk.nextNode()) nodes.push(walk.currentNode);
        nodes.forEach(n => {
            if (!re.test(n.nodeValue)) return; re.lastIndex = 0;
            const span = document.createElement('span');
            span.innerHTML = n.nodeValue.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]).replace(re, '<mark>$1</mark>');
            n.replaceWith(...span.childNodes);
        });
    }
    function run() {
        const raw = q.value.trim(), words = raw ? raw.split(/\s+/).filter(w => w.length > 1) : [];
        const nw = words.map(norm);
        let hits = 0;
        units.forEach(u => {
            u.innerHTML = u.dataset.orig;
            const ok = typeOk(u) && nw.every(w => u.dataset.n.includes(w));
            u.classList.toggle('cu-hide', !ok);
            if (ok && (nw.length || filter !== 'alle')) { hits++; if (words.length) mark(u, words); }
        });
        const active = nw.length || filter !== 'alle';
        document.body.classList.toggle('cu-active', !!active);
        /* Überschriften und Lernziel-Blöcke nur zeigen, wenn darunter etwas sichtbar ist */
        document.querySelectorAll('.cu-lz').forEach(b => b.classList.toggle('cu-hide', active && !b.querySelector('.cu-lz-i:not(.cu-hide)')));
        document.querySelectorAll('.cu-kap').forEach(sec => {
            const vis = sec.querySelector('.cu-b:not(.cu-hide):not(.cu-lz), .cu-lz:not(.cu-hide)');
            sec.classList.toggle('cu-hide', active && !vis);
            /* Überschrift zeigen, wenn bis zur nächsten gleich- oder höherrangigen Überschrift etwas sichtbar ist */
            const els = [...sec.querySelectorAll('.cu-h2, .cu-h3, .cu-b')];
            els.forEach((el, i) => {
                if (!el.matches('.cu-h2, .cu-h3')) return;
                const stop = el.matches('.cu-h2') ? '.cu-h2' : '.cu-h2, .cu-h3';
                let has = false;
                for (let j = i + 1; j < els.length && !els[j].matches(stop); j++) if (els[j].matches('.cu-b') && !els[j].classList.contains('cu-hide')) { has = true; break; }
                el.classList.toggle('cu-hide', active && !has);
            });
        });
        count.textContent = active ? (hits ? hits + ' Treffer' : 'Kein Treffer') + (filter !== 'alle' ? ' · ' + (filter === 'def' ? 'nur Definitionen' : 'nur Lernziele') : '') : units.length + ' Textstellen, ' + document.querySelectorAll('.cu-def').length + ' Definitionen, ' + document.querySelectorAll('.cu-lz-i').length + ' Lernziele';
        try { history.replaceState(null, '', raw ? '#q=' + encodeURIComponent(raw) : location.pathname); } catch (e) {}
    }
    let tm; q.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(run, 120); });
    document.querySelectorAll('[data-cu]').forEach(b => b.addEventListener('click', () => {
        filter = b.dataset.cu;
        document.querySelectorAll('[data-cu]').forEach(x => x.classList.toggle('on', x === b));
        run();
    }));
    const m = location.hash.match(/^#q=(.+)/); if (m) q.value = decodeURIComponent(m[1]);
    run();
    document.addEventListener('keydown', e => { if (e.key === '/' && document.activeElement !== q) { e.preventDefault(); q.focus(); } });
})();
