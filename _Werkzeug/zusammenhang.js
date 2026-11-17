/* „Alles im Zusammenhang“: Titel, Kernaussage und Begriffe je Prozessschritt aus den Detailtexten (D) der Prozesskarte. */
(function () {
    if (typeof D === 'undefined') return;
    const kurz = t => t.replace(/ \(.*\)$/, '');
    const ersterBlock = d => (d.blocks.find(b => /Definition/.test(b[0] || '')) || d.blocks.find(b => b[0]) || [, , ''])[2];
    document.querySelectorAll('[data-z-title]').forEach(h => { const d = D[h.dataset.zTitle]; if (d) h.textContent = d.title; });
    document.querySelectorAll('[data-z-icon]').forEach(i => { const d = D[i.dataset.zIcon]; if (d) i.textContent = d.icon; });
    document.querySelectorAll('[data-z-kern]').forEach(el => {
        const d = D[el.dataset.zKern]; if (!d) return;
        const b = d.blocks.find(x => x[0]) || ['', '', ''];
        el.innerHTML = `<div class="z-kern-t">${b[0]}</div>${b[2]}`;
    });
    document.querySelectorAll('[data-z-themen]').forEach(el => {
        el.innerHTML = el.dataset.zThemen.split(' ').filter(k => D[k]).map(k => {
            const d = D[k];
            return `<div class="z-begriff"><button class="z-b-t" data-k="${k}" title="Details öffnen"><span class="material-icons">${d.icon === 'stacks' ? 'layers' : d.icon}</span>${kurz(d.title)}</button><div class="z-b-d">${ersterBlock(d)}</div></div>`;
        }).join('');
    });
    document.addEventListener('click', e => {
        const b = e.target.closest('.z-b-t'); if (b && typeof openDetail === 'function') openDetail(b.dataset.k);
    });
})();
