/* Hervorhebungen wie auf den Folien: Rottext der Folie fett und rot, Folien mit „W“ als prüfungsrelevant.
   Daten in hervorhebung-daten.js (ROT: Folienseite → Marker und rote Begriffe), erfasst von den Folienfotos.
   Hervorgehoben wird nur in Inhalten, die genau diese Folie zitieren; der Text selbst bleibt unverändert. */
(function () {
    if (typeof ROT === 'undefined') return;
    const KEY = 'cpuxHervorhebung';

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
    const wPages = pages => pages.filter(p => ROT[p] && ROT[p].m === 'W');
    /* Legende der Symbole, Folie S. 6 */
    const LEG = { 'W': 'wichtige Folie', '+': 'zusätzliche Inhalte', 'CPUX F': 'Grundlagen aus CPUX-F Lehrplan', 'Ü': 'Übungen', 'B': 'Beispiele, Beispielfolie' };
    const markOf = pages => { const m = {}; pages.forEach(p => { const x = ROT[p] && ROT[p].m; if (x && LEG[x]) (m[x] = m[x] || []).push(p); }); return m; };
    const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const SKIP = '.src, .note, .note-label, .g-meta, .d-title, b.rot, .mk, script, style, textarea, input, svg, button, .sl-btn, h1, h2, h3, h4, h5, .box-title, .g-term, .fh, .seq, .pillar-roof, .pt-dach, span[class], b[class], a[class]';
    const BLOCK = 'p, li, td, th, dd, .box, .card, .g-item, .d-block, div';

    function markRed(root, pages) {
        const words = [...new Set(pages.flatMap(p => (ROT[p] && ROT[p].rot) || []))]
            .map(w => w.trim().replace(/[.,;:]+$/, '')).filter(w => w.length > 2).sort((a, b) => b.length - a.length);
        if (!words.length) return;
        const re = new RegExp('(?<![\\p{L}\\p{N}])(' + words.map(esc).join('|') + ')(?![\\p{L}\\p{N}])', 'gu');
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: n => n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
        });
        const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
        /* je Absatz nur das erste Vorkommen eines Begriffs, damit es scanbar bleibt */
        const seen = new Map();
        nodes.forEach(n => {
            re.lastIndex = 0;
            if (!re.test(n.nodeValue)) return;
            const blk = n.parentElement.closest(BLOCK) || root;
            if (!seen.has(blk)) seen.set(blk, new Set());
            const done = seen.get(blk);
            const frag = document.createDocumentFragment();
            let last = 0; re.lastIndex = 0;
            n.nodeValue.replace(re, (m, g, i) => {
                if (done.has(m.toLowerCase())) return m;
                /* in Spiegelpunkten nur der erste rote Begriff */
                if (blk.tagName === 'LI' && done.size) return m;
                done.add(m.toLowerCase());
                frag.append(n.nodeValue.slice(last, i));
                const b = document.createElement('b'); b.className = 'rot'; b.textContent = m; frag.append(b);
                last = i + m.length;
            });
            frag.append(n.nodeValue.slice(last));
            n.replaceWith(frag);
        });
    }

    function badge(el, pages) {
        if (el.querySelector(':scope > .mk')) return;
        const m = markOf(pages), keys = Object.keys(m);
        if (!keys.length) return;
        if (m.W) el.classList.add('w-rel');
        el.insertAdjacentHTML('afterbegin', '<span class="mk">' + keys.sort((a, b) => (b === 'W') - (a === 'W')).map(k => k === 'W'
            ? `<span class="w-badge" title="„W“ = wichtige Folie (Folie S. ${m.W.join(', ')})"><i>W</i>wichtige Folie</span>`
            : `<span class="mk-o" title="${LEG[k]} (Folie S. ${m[k].join(', ')})">${k === 'CPUX F' ? 'F' : k}</span>`).join('') + '</span>');
    }

    function apply(scope) {
        /* Karten und Kästen: Folienangabe steht am Ende des Blocks */
        scope.querySelectorAll('.src').forEach(src => {
            const box = src.parentElement, pages = pagesOf(src.textContent);
            if (!box || box.dataset.hl) return;
            box.dataset.hl = '1';
            markRed(box, pages); badge(box, pages);
        });
        /* Glossar und Detailpanel: Folie steht in der Meta-Zeile bzw. im Blocktitel */
        scope.querySelectorAll('.g-item, .d-block').forEach(item => {
            if (item.dataset.hl) return;
            const meta = item.querySelector('.g-meta, .d-title');
            if (!meta) return;
            item.dataset.hl = '1';
            const pages = pagesOf(meta.textContent);
            markRed(item, pages); badge(item, pages);
        });
    }
    apply(document);

    /* Gewichtung: Wesentliches vorn, Zusätzliches dezent.
       Kern = Definition oder Folie mit „W“; neben = nur Beispiel/Übung/Zusatz/CPUX-F oder Titel wie „Beispiel“, „Übung“, „Abgrenzung“. */
    const NEBEN_M = ['+', 'B', 'Ü', 'CPUX F'];
    const titleOf = el => (el.querySelector(':scope > .box-title, :scope > h3, :scope > h4, :scope > .g-term, :scope > .d-title') || {}).textContent || '';
    function weigh(el, pages) {
        const m = markOf(pages), keys = Object.keys(m), t = titleOf(el);
        if (m.W || /^\s*Definition|\(Definition|Def\b/.test(t)) el.classList.add('is-kern');
        else if ((keys.length && keys.every(k => NEBEN_M.includes(k))) || /Beispiel|Übung|Abgrenzung|Typen von|Fragen \(S\./.test(t)) el.classList.add('is-neben');
    }
    document.querySelectorAll('.src').forEach(src => { const box = src.parentElement; if (box) weigh(box, pagesOf(src.textContent)); });
    /* Definition erkennen: Titel „Begriff (english term)“ wie auf den Def-Folien, oder „Definition“ */
    const DEF_T = /^\s*Definition|\((?:[a-z][a-z\- ,]*)\)\s*(?:,\s*S\.\s*\d+)?\s*$/;
    document.querySelectorAll('.box, .card').forEach(el => {
        const t = titleOf(el).trim();
        if (/Beispiel|Übung|Abgrenzung/.test(t)) { el.classList.remove('is-kern'); el.classList.add('is-neben'); }
        else if (!el.classList.contains('is-neben') && DEF_T.test(t)) el.classList.add('is-kern');
    });
    /* Karten mit Def-Titel: erster Kasten bzw. erster Absatz ist die Definition */
    document.querySelectorAll('.card.is-kern').forEach(c => {
        const first = c.querySelector(':scope > .box, :scope > .card-lead, :scope > p');
        if (first) first.classList.add('is-kern');
    });

    /* Ebene 3 einklappen: Beispiele, Zusatz, Übungen, Abgrenzungen – außer sie enthalten Kerninhalt */
    const mehrLabel = el => {
        const t = titleOf(el), m = Object.keys(markOf(pagesOf((el.querySelector('.src') || {}).textContent || '')));
        if (/Übung/.test(t) || m.includes('Ü')) return 'Übung';
        if (/Beispiel/.test(t) || m.includes('B')) return 'Beispiel';
        if (/Abgrenzung/.test(t)) return 'Abgrenzung';
        if (m.includes('CPUX F')) return 'Grundlage aus CPUX-F';
        return 'Zusätzliche Inhalte';
    };
    document.querySelectorAll('.is-neben').forEach(el => {
        if (el.querySelector('.is-kern') || el.closest('.mehr') || el.closest('.drawer') || el.classList.contains('g-item')) return;
        if (mehrLabel(el) === 'Beispiel') return;           /* Beispiele (B) bleiben immer offen */
        if (el.classList.contains('card')) return;          /* ganze Karten nie zuklappen, sonst bleibt nur eine leere Hülle; das „+“ oben rechts zeigt den Zusatz */
        const keep = el.querySelector(':scope > h3, :scope > .box-title');
        const rest = [...el.childNodes].filter(n => n !== keep && !(n.classList && (n.classList.contains('mk') || n.classList.contains('src'))));
        if (!rest.some(n => n.nodeType === 1 || (n.nodeType === 3 && n.textContent.trim()))) return;
        const d = document.createElement('details'); d.className = 'mehr';
        d.innerHTML = `<summary><span class="mehr-pfeil" aria-hidden="true"></span>${mehrLabel(el)} anzeigen</summary>`;
        rest.forEach(n => d.appendChild(n));
        const src = el.querySelector(':scope > .src');
        src ? el.insertBefore(d, src) : el.appendChild(d);
    });

    /* Zwischenüberschriften (h4) wie „Abgrenzung …“ oder „… – Beispiele“: Inhalt bis zur nächsten Überschrift einklappen */
    document.querySelectorAll('.card > h4').forEach(h => {
        const t = h.textContent;
        if (!/Übung|Abgrenzung/.test(t) || h.closest('.mehr')) return;   /* Beispiele bleiben offen */
        const part = [];
        for (let n = h.nextElementSibling; n && !/^H[34]$/.test(n.tagName) && !n.classList.contains('src'); n = n.nextElementSibling) part.push(n);
        if (!part.length || part.some(n => n.classList.contains('is-kern') || n.querySelector('.is-kern'))) return;
        const d = document.createElement('details'); d.className = 'mehr';
        d.innerHTML = `<summary><span class="mehr-pfeil" aria-hidden="true"></span>${/Übung/.test(t) ? 'Übung' : /Beispiel/.test(t) ? 'Beispiele' : 'Abgrenzung'} anzeigen</summary>`;
        h.after(d); part.forEach(n => d.appendChild(n));
        h.classList.add('is-neben');
    });

    /* Abschnittstitel: W, sobald ein Block darin prüfungsrelevant ist */
    document.querySelectorAll('section.section').forEach(sec => {
        const n = sec.querySelectorAll('.w-badge').length, t = sec.querySelector('.section-title h2');
        if (n && t && sec.id !== 'glossar') t.insertAdjacentHTML('beforeend', `<span class="w-dot" title="${n} Blöcke zu wichtigen Folien (W)">W</span>`);
    });

    /* Prozesskarte: W an den Knoten, deren Details eine W-Folie zitieren */
    if (typeof D !== 'undefined') {
        document.querySelectorAll('.master .hot[data-k]').forEach(g => {
            const d = D[g.dataset.k]; if (!d) return;
            const pages = d.blocks.flatMap(b => pagesOf((b[0] || '') + ' ' + b[2]));
            if (!wPages(pages).length || !g.getBBox) return;
            const bb = g.getBBox(), ns = 'http://www.w3.org/2000/svg';
            const c = document.createElementNS(ns, 'g'); c.setAttribute('class', 'w-svg');
            c.innerHTML = `<title>Wichtige Folie (W)</title><circle cx="${bb.x + bb.width - 2}" cy="${bb.y + 2}" r="10"/><text x="${bb.x + bb.width - 2}" y="${bb.y + 6}" text-anchor="middle">W</text>`;
            g.appendChild(c);
        });
    }

    /* Detailpanel: Inhalt wird beim Öffnen neu gesetzt */
    const drBody = document.getElementById('drBody');
    if (drBody) new MutationObserver(() => apply(drBody)).observe(drBody, { childList: true });

    /* Hervorhebungen aus/an gilt auf allen Seiten; geschaltet wird in der Legende der Startseite */
    let off = false; try { off = localStorage.getItem(KEY) === 'aus'; } catch (e) {}
    document.body.classList.toggle('hl-off', off);

    /* Legende mit Schalter nur auf der Startseite (Prozesskarte), unter dem Seitenkopf */
    const head = document.querySelector('.container > .header');
    if (head && document.getElementById('karte')) {
        head.insertAdjacentHTML('afterend', `
            <details class="hl-legend" id="hlLegend"><summary><span class="material-icons">info_outline</span>Hervorhebungen erklärt<span class="material-icons hl-pfeil">expand_more</span></summary>
            <div class="hl-body"><span><span class="w-badge"><i>W</i>wichtige Folie</span> prüfungsrelevant, wie das „W“ oben rechts auf der Folie</span>
            <span><span class="mk-o">+</span> zusätzliche Inhalte <span class="mk-o">F</span> Grundlagen aus CPUX-F <span class="mk-o">B</span> Beispiel <span class="mk-o">Ü</span> Übung</span>
            <span><b class="rot">fett und rot</b> = auf der Folie rot hervorgehoben</span>
            <label><input type="checkbox" id="hlToggle"> Hervorhebungen ausblenden</label></div></details>`);
        /* Auf- und Zuklappen merken */
        const lg = document.getElementById('hlLegend');
        try { lg.open = localStorage.getItem(KEY + '-legende') === 'auf'; } catch (e) {}
        lg.addEventListener('toggle', () => { try { localStorage.setItem(KEY + '-legende', lg.open ? 'auf' : 'zu'); } catch (e) {} });
        const t = document.getElementById('hlToggle');
        t.checked = off;
        t.addEventListener('change', () => {
            document.body.classList.toggle('hl-off', t.checked);
            try { localStorage.setItem(KEY, t.checked ? 'aus' : 'an'); } catch (e) {}
        });
    }
})();
