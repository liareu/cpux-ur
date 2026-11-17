/* CPUX-UR Beispielprüfung: Theorie mit Auswertung nach Abschnitt 2.2, Praxis mit Lösungsanzeige.
   Alle Eingaben bleiben im localStorage dieses Browsers, es wird nichts verschickt. */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const store = {
    get(k, d) { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
};
const fmt = x => String(Math.round(x * 100) / 100).replace('.', ',');

/* ---------- Theoretische Prüfung ---------- */
const qList = document.getElementById('qList');
if (qList) {
    const KEY = 'cpuxTheorie', LIMIT = 90 * 60 * 1000, MAX = 40, PASS = 0.7;
    const S = Object.assign({ mode: 'lern', view: 'einzeln', cur: 1, sel: {}, checked: {}, done: false, start: null }, store.get(KEY, {}));
    const save = () => store.set(KEY, S);
    const chap = q => q.lo.split('.')[0];

    /* Punkte nach 2.2: 3 minus je Fehlentscheidung 3/k, nie unter 0 */
    /* 1 Punkt je Frage: jede richtig angekreuzte Antwort +1/k, jede falsch angekreuzte −1/k,
       nicht Angekreuztes zählt nicht, nie unter 0 (entspricht 2.2 der Beispielprüfung, dort 3 Punkte je Frage). */
    function score(q) {
        const sel = S.sel[q.n] || [];
        const richtig = sel.filter(l => q.ok.includes(l)).length, falsch = sel.length - richtig;
        return Math.max(0, (richtig - falsch) / q.k);
    }

    function notesHtml(notes) {
        let h = '', open = false, subOpen = false;
        notes.forEach(([t, txt]) => {
            if (t !== 'sub' && subOpen) { h += '</ul>'; subOpen = false; }
            if (t === 'p') { if (open) { h += '</ul>'; open = false; } h += '<p>' + esc(txt) + '</p>'; }
            if (t === 'li') { if (!open) { h += '<ul>'; open = true; } h += '<li>' + esc(txt); }
            if (t === 'sub') { if (!subOpen) { h += '<ul class="sub">'; subOpen = true; } h += '<li>' + esc(txt) + '</li>'; }
        });
        return h + (subOpen ? '</ul>' : '') + (open ? '</ul>' : '');
    }

    function stemHtml(lines) {
        return lines.map(l => {
            const m = l.match(/^(\d+\.?|UR\d)\s+(?:–\s+)?(.*)$/);
            return m ? '<div class="q-item"><span>' + esc(m[1]) + '</span>' + esc(m[2]) + '</div>' : '<p>' + esc(l) + '</p>';
        }).join('');
    }

    qList.innerHTML = EXAM_Q.map(q => `
        <article class="card q" id="q-${q.n}" data-n="${q.n}" data-ch="${chap(q)}">
            <header class="q-head"><span class="q-num">Frage ${q.n}</span>
                <span class="badge">${q.k} richtige Antwort${q.k > 1 ? 'en' : ''}</span>
                <a class="q-lo" href="lernziele.html#lo-${q.lo.replace(/\./g, '-')}" title="Lernziel im Curriculum">LO ${esc(q.lo)}</a><span class="q-pts"></span></header>
            <div class="q-stem">${stemHtml(q.stem)}</div>
            <div class="q-opts">${q.opts.map(([l, t]) => `
                <label class="q-opt" data-l="${l}"><input type="checkbox" value="${l}"><b>${l}</b><span>${esc(t)}</span><i class="material-icons"></i></label>`).join('')}
            </div>
            <div class="q-actions"><button class="btn q-check"><span class="material-icons">done</span>Antwort prüfen</button>
                <button class="btn q-again"><span class="material-icons">undo</span>Noch einmal</button></div>
            <div class="q-sol"><div class="q-sol-head">Richtige Antworten: <b>${q.ok.join(', ')}</b></div>
                <div class="q-sol-title">Anmerkungen (2.4)</div>${notesHtml(q.notes)}</div>
        </article>`).join('');

    const filter = document.getElementById('qFilter');
    [...new Set(EXAM_Q.map(chap))].forEach(c => {
        const ns = EXAM_Q.filter(q => chap(q) === c).map(q => q.n);
        filter.insertAdjacentHTML('beforeend', `<option value="${c}">Lernziele Kapitel ${c} (Fragen ${ns[0]}–${ns[ns.length - 1]})</option>`);
    });
    filter.addEventListener('change', () => {
        document.querySelectorAll('.q').forEach(el => { el.style.display = !filter.value || el.dataset.ch === filter.value ? '' : 'none'; });
    });

    const dots = document.getElementById('qDots');
    dots.innerHTML = EXAM_Q.map(q => `<a href="#q-${q.n}" data-n="${q.n}">${q.n}</a>`).join('');

    const nav = document.createElement('div'); nav.className = 'q-nav';
    nav.innerHTML = '<button class="btn" id="qPrev"><span class="material-icons">chevron_left</span>Zurück</button><span id="qPos"></span><button class="btn on" id="qNext">Weiter<span class="material-icons">chevron_right</span></button>';
    qList.after(nav);
    function go(n) {
        S.cur = Math.min(40, Math.max(1, n)); save(); paint();
        if (S.view === 'einzeln') document.getElementById('qBar').scrollIntoView({ block: 'start' });
    }
    document.getElementById('qPrev').addEventListener('click', () => go(S.cur - 1));
    document.getElementById('qNext').addEventListener('click', () => {
        if (S.cur < 40) go(S.cur + 1); else document.getElementById('qEval').click();
    });
    document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => { S.view = b.dataset.view; save(); paint(); }));
    dots.addEventListener('click', e => {
        const a = e.target.closest('a[data-n]'); if (!a || S.view !== 'einzeln') return;
        e.preventDefault(); go(+a.dataset.n);
    });
    document.addEventListener('keydown', e => {
        if (S.view !== 'einzeln' || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && document.activeElement.type !== 'checkbox') return;
        if (e.key === 'ArrowRight') go(S.cur + 1);
        if (e.key === 'ArrowLeft') go(S.cur - 1);
    });

    function paint() {
        document.body.dataset.qmode = S.mode;
        document.body.classList.toggle('q-einzeln', S.view === 'einzeln');
        document.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('on', b.dataset.view === S.view));
        document.querySelectorAll('.q').forEach(el => el.classList.toggle('aktiv', +el.dataset.n === S.cur));
        dots.querySelectorAll('a').forEach(a => a.classList.toggle('cur', +a.dataset.n === S.cur && S.view === 'einzeln'));
        document.getElementById('qPos').textContent = 'Frage ' + S.cur + ' von 40';
        document.getElementById('qPrev').disabled = S.cur <= 1;
        document.getElementById('qNext').innerHTML = S.cur < 40 ? 'Weiter<span class="material-icons">chevron_right</span>' : (S.done ? 'Ergebnis ansehen' : 'Auswerten') + '<span class="material-icons">fact_check</span>';
        document.body.classList.toggle('q-done', S.done);
        document.querySelectorAll('[data-mode]').forEach(b => { b.classList.toggle('on', b.dataset.mode === S.mode); b.setAttribute('aria-checked', b.dataset.mode === S.mode); });
        let answered = 0;
        EXAM_Q.forEach(q => {
            const el = document.getElementById('q-' + q.n), sel = S.sel[q.n] || [];
            const shown = S.done || S.checked[q.n];
            if (sel.length) answered++;
            el.classList.toggle('shown', !!shown);
            el.querySelectorAll('.q-opt').forEach(o => {
                const l = o.dataset.l, inp = o.querySelector('input'), isOk = q.ok.includes(l), isSel = sel.includes(l);
                inp.checked = isSel; inp.disabled = !!shown;
                o.classList.toggle('ok', !!shown && isOk);
                o.classList.toggle('bad', !!shown && isSel && !isOk);
                o.classList.toggle('miss', !!shown && !isSel && isOk);
                o.querySelector('i').textContent = !shown ? '' : isOk ? (isSel ? 'check_circle' : 'radio_button_unchecked') : (isSel ? 'cancel' : '');
            });
            const pts = score(q);
            el.querySelector('.q-pts').textContent = shown ? fmt(pts) + ' von 1 Punkt' : '';
            el.querySelector('.q-pts').className = 'q-pts' + (shown ? (pts === 1 ? ' full' : pts > 0 ? ' part' : ' zero') : '');
            const dot = dots.querySelector(`[data-n="${q.n}"]`);
            dot.className = shown ? (pts === 1 ? 'full' : pts > 0 ? 'part' : 'zero') : sel.length ? 'set' : '';
        });
        document.getElementById('qProgress').textContent = answered + ' / 40 beantwortet';
        document.getElementById('qEval').disabled = S.done;
        renderResult();
    }

    function renderResult() {
        const box = document.getElementById('qResult');
        if (!S.done) { box.innerHTML = '<p class="ex-mute">Noch nicht ausgewertet. Wenn du alle Fragen beantwortet hast, klick oben auf „Auswerten“.</p>'; return; }
        const total = EXAM_Q.reduce((s, q) => s + score(q), 0), pct = total / MAX * 100, pass = pct >= PASS * 100;
        store.set('cpuxTheorieErgebnis', { pct: Math.round(pct), datum: S.end || Date.now() });
        const byCh = {};
        EXAM_Q.forEach(q => { const c = chap(q); byCh[c] = byCh[c] || [0, 0]; byCh[c][0] += score(q); byCh[c][1] += 1; });
        const used = S.start ? Math.min(Date.now(), S.end || Date.now()) - S.start : null;
        box.innerHTML = `
            <div class="r-top ${pass ? 'pass' : 'fail'}">
                <div class="r-big">${Math.round(pct)} %<small> · ${fmt(total)} von ${MAX} Punkten</small></div>
                <div><div class="r-verdict"><span class="material-icons">${pass ? 'verified' : 'error_outline'}</span>${pass ? 'Bestanden' : 'Nicht bestanden'}</div>
                <div class="r-sub">Bestehensgrenze 70 % (28 von 40 Punkten)${used ? ' · Zeit: ' + Math.round(used / 60000) + ' Min.' : ''}</div></div>
            </div>
            <div class="r-bar"><span style="width:${pct}%"></span><i style="left:70%"></i></div>
            <h4 class="ex-h">Nach Lernzielen</h4>
            <div class="r-ch">${Object.entries(byCh).map(([c, [p, m]]) => `
                <div><span>Kapitel ${c}</span><div class="r-bar sm"><span style="width:${p / m * 100}%"></span></div><b>${fmt(p)} / ${m}</b></div>`).join('')}</div>
            <p class="ex-mute">Die Fragen mit Abzügen sind oben in der Übersicht gelb (teilweise) oder rot (0 Punkte) markiert. Ein Klick auf die Nummer springt zur Frage samt Lösung.</p>`;
    }

    function tick() {
        const t = document.getElementById('qTimer');
        if (S.mode !== 'pruef' || !S.start) { t.textContent = S.mode === 'pruef' ? '90:00' : ''; t.classList.remove('over'); return; }
        const left = LIMIT - ((S.done && S.end ? S.end : Date.now()) - S.start);
        const a = Math.abs(left), mm = Math.floor(a / 60000), ss = Math.floor(a / 1000) % 60;
        t.textContent = (left < 0 ? '+' : '') + mm + ':' + String(ss).padStart(2, '0');
        t.classList.toggle('over', left < 0);
    }

    qList.addEventListener('change', e => {
        if (!e.target.matches('input[type=checkbox]')) return;
        const n = e.target.closest('.q').dataset.n;
        S.sel[n] = [...e.target.closest('.q-opts').querySelectorAll('input:checked')].map(i => i.value);
        if (S.mode === 'pruef' && !S.start) S.start = Date.now();
        save(); paint();
    });
    qList.addEventListener('click', e => {
        const q = e.target.closest('.q'); if (!q) return;
        if (e.target.closest('.q-check')) { S.checked[q.dataset.n] = true; save(); paint(); }
        if (e.target.closest('.q-again') && !S.done) { delete S.checked[q.dataset.n]; delete S.sel[q.dataset.n]; save(); paint(); }
    });
    document.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => {
        if (S.mode === b.dataset.mode) return;
        S.mode = b.dataset.mode;
        if (S.mode === 'pruef') { S.checked = {}; }
        save(); paint(); tick();
    }));
    document.getElementById('qEval').addEventListener('click', () => {
        const open = 40 - Object.values(S.sel).filter(a => a.length).length;
        if (open && !confirm(open + ' Fragen sind noch ohne Kreuz. Trotzdem auswerten?')) return;
        S.done = true; S.end = Date.now(); save(); paint(); tick();
        document.getElementById('theorie-ergebnis').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('qReset').addEventListener('click', () => {
        if (!confirm('Alle Kreuze und die Auswertung löschen?')) return;
        Object.assign(S, { sel: {}, checked: {}, done: false, start: null, end: null }); save(); paint(); tick();
    });
    paint(); tick(); setInterval(tick, 1000);
}

/* ---------- Praktische Prüfung ---------- */
const praxisScore = document.getElementById('praxisScore');
if (praxisScore) {
    const KEY = 'cpuxPraxis', P = store.get(KEY, {});
    /* Punkte laut Folie „Überblick praktische Prüfung“, Lösung = Abschnitt der Beispielprüfung */
    const TASKS = [
        ['Ist-Szenario des Videos erstellen (3 Punkte)', 3, '#praxis-szenario'],
        ['max. 4 Interviewfehler identifizieren (4 × 1 Punkt)', 4, '#praxis-interviewer'],
        ['alle Benutzergruppen aus den 4 Ist-Szenarien identifizieren (5 × 1 Punkt)', 5, '#praxis-gruppen'],
        ['für ein Ist-Szenario die enthaltenen Erfordernisse identifizieren, 10 markieren (10 × 4 Punkte)', 40, '#praxis-erfordernisse'],
        ['aus den Erfordernissen alle Nutzungsanforderungen ableiten, 13 markieren (13 × 2 Punkte)', 26, '#praxis-erfordernisse'],
        ['Aufgabenmodell: Vor- und Nachbedingung, Teilaufgaben (1 + 1 plus 5 × 2 Punkte)', 12, '#praxis-aufgabenmodell'],
        ['Nutzungsanforderungen den Teilaufgaben des Aufgabenmodells zuordnen', 10, '#praxis-aufgabenmodell']
    ];
    praxisScore.innerHTML = '<div class="s-row s-head"><span>Aufgabe</span><span>Deine Punkte</span><span>max.</span></div>' +
        TASKS.map(([t, m, a], i) => `<label class="s-row"><span><a href="${a}">${t}</a></span>
            <input type="number" class="ex-input" min="0" max="${m}" step="1" data-save="score-${i}"><span>${m}</span></label>`).join('') +
        '<div class="s-row s-total"><span>Gesamt</span><span id="praxisTotal">0</span><span>100</span></div>';

    const fields = [...document.querySelectorAll('[data-save]')];
    const total = () => {
        document.getElementById('praxisTotal').textContent = fmt(TASKS.reduce((s, t, i) => s + Math.min(t[1], Math.max(0, +P['score-' + i] || 0)), 0));
    };
    fields.forEach(f => {
        if (P[f.dataset.save] != null) f.value = P[f.dataset.save];
        f.addEventListener('input', () => { P[f.dataset.save] = f.value; store.set(KEY, P); total(); });
    });
    total();
    document.getElementById('praxisReset').addEventListener('click', () => {
        if (!confirm('Alle Eingaben und Punkte auf dieser Seite löschen?')) return;
        Object.keys(P).forEach(k => delete P[k]); store.set(KEY, P);
        fields.forEach(f => { f.value = ''; }); total();
    });
}
