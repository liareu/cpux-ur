"""Zerlegt CPUX-UR_DE_Curriculum-und-Glossar.pdf (über pdftohtml -xml) in eine durchsuchbare HTML-Seite.

Aufruf: python3 -I parse_curriculum.py <cur.xml> <ausgabe.html> <figuren.txt>
Text wörtlich; Abbildungen und Tabellen werden als Bild der Originalseite eingebunden (figuren.txt = Seitenliste).
"""
import html, re, sys
import xml.etree.ElementTree as ET

src, out, figlist = sys.argv[1:4]
root = ET.parse(src).getroot()
size = {f.get('id'): int(f.get('size')) for f in root.iter('fontspec')}
BULLETS = {'•', '', '§', '–', '-', 'o', ''}


def seg_text(el):
    return ''.join(el.itertext())


def is_bold(el):
    return el.find('b') is not None


# ---------- Zeilen je Seite ----------
lines = []  # dict(page, top, left, size, text, bold, kind)
for page in root.iter('page'):
    pno = int(page.get('number'))
    els = []
    klein = sum(1 for t in page.iter('text') if 105 < int(t.get('top')) < 1205 and ''.join(t.itertext()).strip() and size.get(t.get('font')) not in (16, 18, 21, 24, 14))
    hat_titel = any(size.get(t.get('font')) == 14 and re.match(r'\s*(Abbildung|Tabelle) \d+', ''.join(t.itertext())) for t in page.iter('text'))
    if klein > 15 and not hat_titel:          # Fortsetzung einer Tabelle von der Vorseite
        els.append(dict(top=106, left=106, size=14, text='Fortsetzung der Tabelle (Seite %d)' % pno, bold=False, caption=True))
    for t in page.iter('text'):
        top, left = int(t.get('top')), int(t.get('left'))
        txt = seg_text(t)
        sz = size.get(t.get('font'), 0)
        if top < 105 or top > 1205:          # Kopf- und Fußzeile
            continue
        if not txt.strip():
            continue
        if sz == 14 and re.match(r'\s*(Abbildung|Tabelle) \d+', txt):
            els.append(dict(top=top, left=left, size=sz, text=txt, bold=False, caption=True))
            continue
        if sz not in (16, 18, 21, 24) and txt.strip() not in BULLETS:
            continue                          # Beschriftungen in Abbildungen und Tabellen
        els.append(dict(top=top, left=left, size=sz, text=txt, bold=is_bold(t), caption=False))
    els.sort(key=lambda e: (e['top'], e['left']))
    cur = []
    for e in els:
        if cur and abs(e['top'] - cur[0]['top']) <= 3 and not e['caption'] and not cur[0]['caption']:
            cur.append(e)
        else:
            if cur:
                lines.append((pno, cur))
            cur = [e]
    if cur:
        lines.append((pno, cur))


def line_info(pno, segs):
    segs = sorted(segs, key=lambda e: e['left'])
    text = ''.join(s['text'] for s in segs)
    htm = ''.join(('<b>%s</b>' % html.escape(s['text'])) if s['bold'] and s['size'] == 16 else html.escape(s['text']) for s in segs)
    first = next((s for s in segs if s['text'].strip() not in BULLETS), segs[0])
    return dict(page=pno, top=segs[0]['top'], left=segs[0]['left'], tleft=first['left'], size=max(s['size'] for s in segs),
                text=re.sub(r'\s+', ' ', text).strip(), html=htm.strip(), bold=all(s['bold'] for s in segs if s['text'].strip()),
                bullet=segs[0]['text'].strip() in BULLETS, caption=segs[0]['caption'])


L = [line_info(p, s) for p, s in lines]

# ---------- Blöcke bilden ----------
blocks = []   # (typ, daten)
figures = []
i = 0
mode = None


def join(parts):
    """Zeilen zusammenfügen, Trennstriche am Zeilenende auflösen."""
    out = ''
    for p in parts:
        if not out:
            out = p
        elif re.search(r'[a-zäöüß]-$', out) and re.match(r'[a-zäöüß]', re.sub('<[^>]+>', '', p)):
            out = out[:-1] + p
        elif out.endswith('-'):
            out = out + p
        else:
            out = out + ' ' + p
    return re.sub(r'</b>\s*<b>', ' ', out).replace('<b> </b>', ' ')


while i < len(L):
    ln = L[i]
    t = ln['text']
    if ln['caption']:
        figures.append(ln['page'])
        blocks.append(('figur', dict(page=ln['page'], text=t)))
        i += 1
        continue
    if ln['size'] == 24 and ln['bold'] and re.match(r'(\d|Anhang|Vorbemerkungen|Inhaltsverzeichnis)', t):
        parts = [t]
        while i + 1 < len(L) and L[i + 1]['size'] == 24 and L[i + 1]['bold'] and L[i + 1]['page'] == ln['page'] and not re.match(r'(\d|Anhang)', L[i + 1]['text']):
            i += 1
            parts.append(L[i]['text'])
        blocks.append(('h1', dict(page=ln['page'], text=' '.join(parts))))
        i += 1
        continue
    if ln['size'] == 21 and ln['bold']:
        parts = [t]
        while i + 1 < len(L) and L[i + 1]['size'] == 21 and L[i + 1]['bold'] and L[i + 1]['page'] == ln['page']:
            i += 1
            parts.append(L[i]['text'])
        blocks.append(('h2', dict(page=ln['page'], text=' '.join(parts))))
        i += 1
        continue
    if ln['size'] == 24 and ln['bold']:
        blocks.append(('h1', dict(page=ln['page'], text=t)))
        i += 1
        continue
    if ln['size'] == 18 and ln['bold']:
        parts = [t]
        while i + 1 < len(L) and L[i + 1]['size'] == 18 and L[i + 1]['bold']:
            i += 1
            parts.append(L[i]['text'])
        blocks.append(('h3', dict(page=ln['page'], text=' '.join(parts))))
        i += 1
        continue
    # Lernziele: Kennung links (left≈111), Text rechts (left≈174)
    if t == 'Lernziele' and ln['bold'] and ln['left'] > 250:
        codes, texts = [], []
        j = i + 1
        while j < len(L):
            x = L[j]
            if x['size'] != 16 or x['caption'] or (x['left'] < 140 and not re.match(r'^\d\.\d\.[a-z]\b', x['text'])):
                break
            if re.match(r'^\d\.\d\.[a-z]\b', x['text']) and x['left'] < 140:
                m = re.match(r'^(\d\.\d\.[a-z])\s*(.*)$', x['text'])
                codes.append([m.group(1), x['page'], x['top'], []])
                if m.group(2):
                    texts.append((x['page'], x['top'], m.group(2)))
            else:
                texts.append((x['page'], x['top'], x['html']))
            j += 1
        for pg, top, tx in texts:
            cand = [c for c in codes if c[1] == pg] or codes
            if not cand:
                continue
            best = min(cand, key=lambda c: abs(c[2] - top))
            best[3].append((top, tx))
        lz = [(c[0], join([x for _, x in sorted(c[3])])) for c in codes]
        blocks.append(('lz', dict(page=ln['page'], items=lz)))
        i = j
        continue
    # Fachbegriff: fett, eingerückt (left 109–125), Definition folgt eingerückt
    if ln['bold'] and 108 <= ln['left'] <= 125 and ln['size'] == 16 and len(t) < 90:
        term = t
        j = i + 1
        cpuxf = False
        body = []
        while j < len(L) and L[j]['size'] == 16 and 108 <= L[j]['left'] <= 130 and not L[j]['caption'] and not (L[j]['bold'] and L[j]['left'] <= 115 and body):
            if L[j]['text'].startswith('Definition aus CPUX-F'):
                cpuxf = True
            else:
                body.append(L[j]['html'])
            j += 1
        if body:
            blocks.append(('def', dict(page=ln['page'], term=term, cpuxf=cpuxf, text=join(body))))
            i = j
            continue
    # Aufzählung
    if ln['bullet']:
        parts = [ln['html'].lstrip('•§–- ').strip()]
        j = i + 1
        while j < len(L) and not L[j]['bullet'] and L[j]['size'] == 16 and L[j]['left'] >= ln['tleft'] - 3 and L[j]['left'] > ln['left'] + 5 and L[j]['top'] - L[j - 1]['top'] < 26 and L[j]['page'] == L[j - 1]['page']:
            parts.append(L[j]['html'])
            j += 1
        if blocks and blocks[-1][0] == 'ul' and blocks[-1][1]['page'] in (ln['page'], ln['page'] - 1):
            blocks[-1][1]['items'].append(join(parts))
        else:
            blocks.append(('ul', dict(page=ln['page'], items=[join(parts)])))
        i = j
        continue
    # Absatz (inkl. eingerückter Beispiele)
    if ln['size'] == 16:
        parts = [ln['html']]
        j = i + 1
        while j < len(L):
            x, prev = L[j], L[j - 1]
            gap = x['top'] - prev['top'] if x['page'] == prev['page'] else 22
            if x['size'] != 16 or x['bullet'] or x['caption'] or gap > 25 or abs(x['left'] - ln['left']) > 6 or (x['bold'] and 108 <= x['left'] <= 125 and len(x['text']) < 90 and x['left'] != ln['left']) or x['text'] == 'Lernziele':
                break
            if x['bold'] and x['left'] == ln['left'] and len(x['text']) < 70 and prev['text'].endswith(('.', ':')):
                break
            parts.append(x['html'])
            j += 1
        kind = 'bsp' if ln['left'] > 115 and ln['left'] < 140 and re.match(r'(Beispiel|Hinweis)', ln['text']) else 'p'
        blocks.append((kind, dict(page=ln['page'], text=join(parts))))
        i = j
        continue
    i += 1

# ---------- HTML ----------
def slug(s):
    s = s.lower().replace('ä', 'ae').replace('ö', 'oe').replace('ü', 'ue').replace('ß', 'ss')
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')[:60]


PDF = '../CPUX-UR_DE_Curriculum-und-Glossar.pdf'
out_h, toc, terms = [], [], []
open_sec = False
for typ, d in blocks:
    pg = '<a class="cu-pg" href="%s#page=%d" target="_blank" title="Seite im PDF öffnen">S. %d</a>' % (PDF, d['page'], d['page'])
    if typ == 'h1' and d['text'].startswith('Inhaltsverzeichnis'):
        if open_sec:
            out_h.append('        </div>\n    </section>\n')
        open_sec = False
        continue
    if typ == 'h1':
        if open_sec:
            out_h.append('        </div>\n    </section>\n')
        sid = 'cu-' + slug(d['text'])
        toc.append((sid, d['text']))
        out_h.append('    <section class="section cu-kap" id="%s">\n        <div class="section-title"><div class="num"><span class="material-icons">menu_book</span></div><h2>%s</h2></div>\n        <div class="card cu-card">\n' % (sid, html.escape(d['text'])))
        open_sec = True
    elif not open_sec:
        continue
    elif typ == 'h2':
        out_h.append('            <h3 class="cu-h2" id="cu-%s">%s %s</h3>\n' % (slug(d['text']), html.escape(d['text']), pg))
    elif typ == 'h3':
        out_h.append('            <h4 class="cu-h3">%s %s</h4>\n' % (html.escape(d['text']), pg))
    elif typ == 'p':
        out_h.append('            <p class="cu-b">%s</p>\n' % d['text'])
    elif typ == 'bsp':
        out_h.append('            <p class="cu-b cu-bsp">%s</p>\n' % d['text'])
    elif typ == 'ul':
        out_h.append('            <ul class="cu-b">%s</ul>\n' % ''.join('<li>%s</li>' % x for x in d['items']))
    elif typ == 'def':
        tid = 'cu-def-' + slug(d['term'])
        terms.append((d['term'], tid, d['page']))
        out_h.append('            <div class="cu-b cu-def" id="%s"><div class="cu-term">%s%s</div>%s %s</div>\n' % (
            tid, html.escape(d['term']), ' <span class="cu-f">Definition aus CPUX-F</span>' if d['cpuxf'] else '', d['text'], pg))
    elif typ == 'lz':
        out_h.append('            <div class="cu-b cu-lz"><div class="cu-lz-t">Lernziele</div>%s</div>\n' % ''.join(
            '<div class="cu-lz-i"><b>%s</b><span>%s</span></div>' % (c, x) for c, x in d['items']))
    elif typ == 'figur':
        out_h.append('            <figure class="cu-b cu-fig"><img src="curriculum/seite-%02d.png" alt="%s" loading="lazy"><figcaption>%s %s</figcaption></figure>\n' % (
            d['page'], html.escape(d['text']), html.escape(d['text']), pg))
if open_sec:
    out_h.append('        </div>\n    </section>\n')

head = ['    <section class="section" id="cu-suche">',
        '        <div class="section-title"><div class="num"><span class="material-icons">search</span></div><h2>CPUX-UR Curriculum und Glossar</h2></div>',
        '        <p class="section-lead">Version 3.2.3 DE, 1. Oktober 2025, Herausgeber UXQB e. V. Der Text ist wörtlich übernommen; Abbildungen und Tabellen als Bild der Originalseite. Jede Seitenangabe öffnet das PDF an dieser Stelle.</p>',
        '        <div class="card cu-tools">',
        '            <div class="cu-search"><span class="material-icons">search</span><input id="cuQ" type="search" placeholder="Im Curriculum suchen, z. B. Erfordernis, Meister-Schüler, 4.1.c …" autocomplete="off"></div>',
        '            <div class="cu-filter" role="radiogroup"><button class="btn on" data-cu="alle">Alles</button><button class="btn" data-cu="def">Definitionen</button><button class="btn" data-cu="lz">Lernziele</button></div>',
        '            <div class="cu-count" id="cuCount"></div>',
        '            <details class="cu-terms"><summary>Alle %d Fachbegriffe mit Definition</summary><div>%s</div></details>' % (
            len(terms), ''.join('<a href="#%s">%s</a>' % (tid, html.escape(t)) for t, tid, _ in sorted(terms, key=lambda x: x[0].lower()))),
        '        </div>',
        '    </section>', '']
open(out, 'w', encoding='utf-8').write('\n'.join(head) + ''.join(out_h))
open(figlist, 'w').write('\n'.join(str(p) for p in sorted(set(figures))))
print('blöcke', len(blocks), 'kapitel', len(toc), 'begriffe', len(terms), 'figuren', sorted(set(figures)))
for sid, t in toc:
    print(' ', sid, t)
