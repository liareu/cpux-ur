/* Selbsttest Begriffe: Begriff sehen, Definition aufdecken, „kann ich“ / „nochmal“.
   Daten: KARTEN (lern-daten.js, aus dem Glossar im Folienwortlaut). Stand im localStorage. */
(function () {
    const box = document.getElementById('selbsttest');
    if (!box || typeof KARTEN === 'undefined') return;
    const KEY = 'cpuxKarten';
    let S = {}; try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) {}
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
    let filter = 'offen', kapitel = '', stapel = [], pos = 0, offen = false;
    const kapitelListe = [...new Set(KARTEN.map(k => k.kap))];

    box.innerHTML = `
        <div class="st-bar">
            <div class="q-modes" role="radiogroup">
                <button class="btn" data-f="offen">Noch nicht gekonnt</button>
                <button class="btn" data-f="nochmal">Nochmal</button>
                <button class="btn" data-f="alle">Alle</button>
            </div>
            <select class="q-filter" id="stKap"><option value="">Alle Kapitel</option>${kapitelListe.map(k => `<option>${k}</option>`).join('')}</select>
            <span class="st-stand" id="stStand"></span>
            <button class="btn" id="stReset" title="Stand zurücksetzen"><span class="material-icons">restart_alt</span></button>
        </div>
        <div class="st-karte" id="stKarte"></div>
        <div class="st-nav">
            <button class="btn" id="stZurueck"><span class="material-icons">chevron_left</span></button>
            <span id="stPos"></span>
            <button class="btn" id="stWeiter"><span class="material-icons">chevron_right</span></button>
        </div>
        <p class="pt-hint">Leertaste: Definition aufdecken · ← →: blättern · J: kann ich · N: nochmal</p>`;

    function mischen(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
    function neuerStapel() {
        stapel = mischen(KARTEN.filter(k => (!kapitel || k.kap === kapitel) &&
            (filter === 'alle' || (filter === 'offen' && S[k.term] !== 'kann') || (filter === 'nochmal' && S[k.term] === 'nochmal'))));
        pos = 0; offen = false; zeigen();
    }
    function zeigen() {
        box.querySelectorAll('[data-f]').forEach(b => b.classList.toggle('on', b.dataset.f === filter));
        const kann = KARTEN.filter(k => S[k.term] === 'kann').length;
        document.getElementById('stStand').textContent = kann + ' von ' + KARTEN.length + ' Begriffen „kann ich“';
        const k = stapel[pos], el = document.getElementById('stKarte');
        document.getElementById('stPos').textContent = stapel.length ? (pos + 1) + ' / ' + stapel.length : '';
        if (!k) { el.innerHTML = '<div class="st-leer">Keine Karten in dieser Auswahl. ' + (filter === 'offen' ? 'Alles gekonnt – stark!' : '') + '</div>'; return; }
        el.innerHTML = `
            <div class="st-kap">${k.kap} · Folie ${k.folie}</div>
            <div class="st-term">${k.term}</div><div class="st-en">${k.en || ''}</div>
            ${offen ? `<div class="st-def">${k.def}</div>
                <div class="st-urteil"><button class="btn on" data-u="kann"><span class="material-icons">check</span>Kann ich</button>
                <button class="btn" data-u="nochmal"><span class="material-icons">replay</span>Nochmal</button></div>`
                    : `<button class="btn on st-auf" id="stAuf"><span class="material-icons">visibility</span>Definition aufdecken</button>`}
            ${S[k.term] ? `<div class="st-status ${S[k.term]}">${S[k.term] === 'kann' ? 'zuletzt: kann ich' : 'zuletzt: nochmal'}</div>` : ''}`;
    }
    function urteil(u) {
        const k = stapel[pos]; if (!k) return;
        S[k.term] = u; save();
        pos = Math.min(pos + 1, stapel.length); offen = false;
        if (pos >= stapel.length) neuerStapel(); else zeigen();
    }
    box.addEventListener('click', e => {
        const f = e.target.closest('[data-f]'); if (f) { filter = f.dataset.f; neuerStapel(); return; }
        if (e.target.closest('#stAuf')) { offen = true; zeigen(); return; }
        const u = e.target.closest('[data-u]'); if (u) { urteil(u.dataset.u); return; }
        if (e.target.closest('#stWeiter')) { pos = Math.min(pos + 1, Math.max(0, stapel.length - 1)); offen = false; zeigen(); }
        if (e.target.closest('#stZurueck')) { pos = Math.max(0, pos - 1); offen = false; zeigen(); }
        if (e.target.closest('#stReset') && confirm('Selbsttest-Stand zurücksetzen?')) { S = {}; save(); neuerStapel(); }
    });
    document.getElementById('stKap').addEventListener('change', e => { kapitel = e.target.value; neuerStapel(); });
    document.addEventListener('keydown', e => {
        if (/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) return;
        if (e.key === ' ') { e.preventDefault(); offen = !offen; zeigen(); }
        if (e.key === 'ArrowRight') document.getElementById('stWeiter').click();
        if (e.key === 'ArrowLeft') document.getElementById('stZurueck').click();
        if (offen && (e.key === 'j' || e.key === 'J')) urteil('kann');
        if (offen && (e.key === 'n' || e.key === 'N')) urteil('nochmal');
    });
    neuerStapel();
})();
