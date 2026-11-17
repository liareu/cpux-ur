"""Wendet die Funde des Folienabgleichs auf die Einzelseite an (nur eindeutige Fundstellen).

Aufruf: python3 -I abgleich_anwenden.py <Einzelseite.html> <alle.json> <protokoll.json>
Ersetzt nur, wenn der Ausschnitt genau einmal vorkommt und keine Block-Tags überspannt.
"""
import html, json, re, sys

page, funde, proto = sys.argv[1:4]
s = open(page, encoding='utf-8').read()
rows = json.load(open(funde, encoding='utf-8'))
BLOCKTAG = re.compile(r'</?(div|p|li|ul|ol|h\d|section|table|tr|td|th|details|summary)\b', re.I)
log = []


def pattern(txt):
    """Wörter des Ausschnitts, dazwischen beliebige Leerzeichen, Inline-Tags oder Icons erlauben."""
    toks = [t for t in re.split(r'\s+', txt.strip()) if t]
    parts = []
    for t in toks:
        alts = {re.escape(t), re.escape(html.escape(t, quote=False)), re.escape(t.replace('"', '&quot;'))}
        parts.append('(?:' + '|'.join(sorted(alts)) + ')')
    gap = r'(?:\s|<(?:/?(?:b|i|em|strong|span|br|small)\b[^>]*)>|<span class="material-icons">[^<]*</span>)*'
    return gap.join(parts)


for r in rows:
    u, e = (r.get('unser_text') or '').strip(), (r.get('ersatz') or '').strip()
    entry = dict(r, status='')
    if r['art'] == 'fehlt' or not u:
        entry['status'] = 'manuell (fehlt)'
        log.append(entry)
        continue
    u_clean = re.sub(r'^\s*(\[NOTIZ\]|\[QUELLE\]|##)\s*', '', u)
    e_clean = re.sub(r'^\s*(\[NOTIZ\]|\[QUELLE\]|##)\s*', '', e)
    if u_clean == e_clean:
        entry['status'] = 'gleich'
        log.append(entry)
        continue
    if '\n' in u_clean.strip():
        entry['status'] = 'manuell (mehrzeilig)'
        log.append(entry)
        continue
    rx = re.compile(pattern(u_clean))
    hits = list(rx.finditer(s))
    if len(hits) != 1:
        entry['status'] = 'manuell (%d Treffer)' % len(hits)
        log.append(entry)
        continue
    m = hits[0]
    span = m.group(0)
    if re.search(r'<(?!span class="material-icons")[a-z]', re.sub(r'<span class="material-icons">[^<]*</span>', '', span)):
        entry['status'] = 'manuell (enthält Auszeichnung)'
        log.append(entry)
        continue
    if BLOCKTAG.search(span):
        entry['status'] = 'manuell (überspannt Blöcke)'
        log.append(entry)
        continue
    # im JS-Teil Anführungszeichen escapen
    in_js = s.rfind('<script>', 0, m.start()) > s.rfind('</script>', 0, m.start())
    if in_js:
        # Rohtext aus dem Skript: nichts umwandeln, nur echte Apostrophe (Buchstabe'Buchstabe) maskieren
        rep = re.sub(r"(?<=[A-Za-zäöüß])(?<!\\)'(?=[a-zäöüß])", "\\\\'", e_clean)
    else:
        rep = html.escape(e_clean, quote=False)
    s = s[:m.start()] + rep + s[m.end():]
    entry['status'] = 'ersetzt'
    log.append(entry)

open(page, 'w', encoding='utf-8').write(s)
json.dump(log, open(proto, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
from collections import Counter
print(Counter(x['status'].split(' (')[0] for x in log))
print(Counter(x['status'] for x in log if x['status'].startswith('manuell')))
