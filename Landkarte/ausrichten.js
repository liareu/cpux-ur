/* Nebeneinander vergleichen: In mehrspaltigen Rastern stehen gleichartige Teile (Titel, Unterzeile, erster Absatz …)
   auf gleicher Höhe, damit man Zeile für Zeile vergleichen kann, wie auf den Folien.
   Verglichen werden nur Spalten in derselben Bildschirmzeile und nur, solange die Teile gleich aufgebaut sind. */
(function () {
    const RASTER = '.grid-2, .grid-3, .grid-4, .bridge, .pg-spalten';
    const art = e => e.tagName + '.' + [...e.classList].filter(c => !/^is-|^mk|rot$/.test(c)).sort().join('.');
    const teile = spalte => [...spalte.children].filter(e => {
        if (e.matches('.src, .mk, .w-badge, details.mehr')) return false;
        const d = getComputedStyle(e).display;
        return d !== 'none' && !d.startsWith('inline');
    });
    const danach = e => { for (let n = e.nextSibling; n; n = n.nextSibling) if (n.nodeType === 1 ? !n.matches('.src, .mk') : n.textContent.trim()) return true; return false; };
    function ausrichten() {
        document.querySelectorAll(RASTER).forEach(r => {
            const spalten = [...r.children].filter(c => c.offsetParent);
            spalten.forEach(c => teile(c).forEach(t => { t.style.minHeight = ''; }));
            const zeilen = {};
            spalten.forEach(c => (zeilen[Math.round(c.getBoundingClientRect().top)] = zeilen[Math.round(c.getBoundingClientRect().top)] || []).push(c));
            Object.values(zeilen).forEach(cs => {
                if (cs.length < 2) return;
                const tl = cs.map(teile), n = Math.min(...tl.map(t => t.length));
                for (let k = 0; k < n; k++) {
                    if (!tl.every(t => art(t[k]) === art(tl[0][k]))) break;
                    if (!tl.every(t => danach(t[k]))) break;      /* was zuletzt kommt, darf unterschiedlich lang sein */
                    const h = Math.max(...tl.map(t => t[k].getBoundingClientRect().height));
                    tl.forEach(t => { t[k].style.boxSizing = 'border-box'; t[k].style.minHeight = h + 'px'; });
                }
            });
        });
    }
    let warte;
    const spaeter = () => { clearTimeout(warte); warte = setTimeout(ausrichten, 80); };
    window.addEventListener('load', ausrichten);
    window.addEventListener('resize', spaeter);
    document.addEventListener('toggle', spaeter, true);
    if (document.fonts) document.fonts.ready.then(ausrichten);
    ausrichten();
})();
