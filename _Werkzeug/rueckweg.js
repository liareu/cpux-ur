/* Rückweg: Wer im Inhalt einem Link folgt (andere Seite oder Sprung innerhalb der Seite), bekommt unten
   „← Zurück zu: Seite · Abschnitt“ und landet beim Klick wieder genau an der alten Stelle.
   Links auf andere Seiten tragen ein ↗ und sagen im Tooltip, wohin sie führen. Stapel in sessionStorage. */
(function () {
    const KEY = 'cpuxRueckweg', ZIEL = 'cpuxRueckwegZiel';
    const lesen = k => { try { return JSON.parse(sessionStorage.getItem(k)) || null; } catch (e) { return null; } };
    const schreiben = (k, v) => { try { v == null ? sessionStorage.removeItem(k) : sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
    const ohneHash = u => u.split('#')[0];
    const seite = u => decodeURIComponent(ohneHash(u).split('/').pop() || 'index.html');

    /* Seitennamen aus der Seitenleiste */
    const NAME = {};
    document.querySelectorAll('.sidebar a.nav-link[href$=".html"]').forEach(a => {
        const c = a.cloneNode(true); c.querySelectorAll('.material-icons').forEach(i => i.remove());
        NAME[a.getAttribute('href')] = c.textContent.trim();
    });
    const hier = seite(location.href);
    const abschnitt = el => {
        const sec = el.closest('section.section, .drawer');
        const h = sec && sec.querySelector('h2, .d-title, h3');
        return h ? h.textContent.replace(/\s+/g, ' ').trim().slice(0, 60) : '';
    };
    const ausgenommen = a => a.closest('.sidebar, .sch-tabs, .ob, .pager, .nav-sub, .sl, .ob-wege, .rw') || a.target === '_blank';

    /* Links kennzeichnen */
    function kennzeichnen(root) {
        root.querySelectorAll('a[href]').forEach(a => {
            if (a.dataset.rw) return;
            a.dataset.rw = '1';
            const href = a.getAttribute('href');
            if (/\.pdf(#|$)/i.test(href)) { a.classList.add('rw-pdf'); a.title = a.title || 'Öffnet das PDF in einem neuen Tab'; return; }
            if (ausgenommen(a) || /^(https?:|mailto:)/.test(href)) return;
            const ziel = seite(href.startsWith('#') ? location.href : href);
            if (href.startsWith('#') || ziel === hier) return;
            a.classList.add('rw-weg');
            a.title = 'Wechselt zur Seite „' + (NAME[ziel] || ziel.replace('.html', '')) + '“ – mit „Zurück“ unten kommst du hierher zurück';
        });
    }
    kennzeichnen(document);
    new MutationObserver(m => m.forEach(x => x.addedNodes.forEach(n => { if (n.nodeType === 1) kennzeichnen(n); }))).observe(document.body, { childList: true, subtree: true });

    /* Knopf unten */
    const pill = document.createElement('div');
    pill.className = 'rw'; pill.hidden = true;
    pill.innerHTML = '<button class="rw-zurueck"><span class="material-icons">arrow_back</span><span class="rw-t"></span></button><button class="rw-x" aria-label="Rückweg ausblenden"><span class="material-icons">close</span></button>';
    document.body.appendChild(pill);
    function zeigen() {
        const st = lesen(KEY) || [];
        const e = st[st.length - 1];
        if (!e) { pill.hidden = true; return; }
        pill.querySelector('.rw-t').textContent = 'Zurück zu: ' + (e.seite === hier ? 'vorheriger Stelle' : (NAME[e.seite] || e.seite.replace('.html', ''))) + (e.abschnitt ? ' · ' + e.abschnitt : '');
        pill.hidden = false;
    }
    pill.querySelector('.rw-zurueck').addEventListener('click', () => {
        const st = lesen(KEY) || [], e = st.pop();
        schreiben(KEY, st);
        if (!e) return;
        if (e.seite === hier) { history.replaceState(null, '', ohneHash(location.href)); window.scrollTo({ top: e.y, behavior: 'smooth' }); zeigen(); }
        else { schreiben(ZIEL, e); location.href = e.url; }
    });
    pill.querySelector('.rw-x').addEventListener('click', () => { schreiben(KEY, []); zeigen(); });

    /* Klick im Inhalt merkt die Stelle */
    document.addEventListener('click', ev => {
        const a = ev.target.closest('a[href]');
        if (!a || ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ausgenommen(a)) return;
        const href = a.getAttribute('href');
        if (/^(https?:|mailto:)/.test(href) || /\.pdf(#|$)/i.test(href)) return;
        const ziel = seite(href.startsWith('#') ? location.href : href);
        if (ziel === hier && href.includes('#')) {                       /* Sprung innerhalb der Seite: nur wenn er weit führt */
            const el = document.getElementById(href.split('#')[1]);
            if (!el || Math.abs(el.getBoundingClientRect().top) < window.innerHeight) return;
        }
        const st = lesen(KEY) || [];
        st.push({ url: ohneHash(location.href), seite: hier, y: Math.round(window.scrollY), abschnitt: abschnitt(a) });
        schreiben(KEY, st.slice(-10));
        if (ziel === hier) setTimeout(zeigen, 0);
    }, true);

    /* Rückkehr: alte Scrollposition wiederherstellen */
    const z = lesen(ZIEL);
    if (z && z.seite === hier) {
        schreiben(ZIEL, null);
        const hin = () => window.scrollTo(0, z.y);
        hin(); window.addEventListener('load', () => setTimeout(hin, 30));
    }
    zeigen();
})();
