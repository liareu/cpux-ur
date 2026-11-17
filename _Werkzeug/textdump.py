"""Erzeugt für den Folienabgleich reine Textfassungen der Inhaltsseiten (eine Zeile je Block, mit Folienangabe).

Aufruf: python3 -I textdump.py <Landkarte-Ordner> <Zielordner>
"""
import html, os, re, sys
from html.parser import HTMLParser

src, out = sys.argv[1:3]
os.makedirs(out, exist_ok=True)
BLOCK = {'p', 'li', 'h1', 'h2', 'h3', 'h4', 'div', 'td', 'th', 'tr', 'section', 'span'}


class P(HTMLParser):
    def __init__(self):
        super().__init__()
        self.lines, self.buf, self.skip, self.cls = [], '', 0, []

    def flush(self):
        t = re.sub(r'\s+', ' ', self.buf).strip()
        if t:
            self.lines.append(t)
        self.buf = ''

    def handle_starttag(self, tag, a):
        c = dict(a).get('class', '') or ''
        if tag in ('script', 'style') or (tag == 'span' and 'material-icons' in c):
            self.skip += 1
        if tag in BLOCK and (tag != 'span' or any(k in c for k in ('src', 'note-inline', 'seq'))):
            self.flush()
            if 'note' in c.split() or 'note-inline' in c:
                self.buf += '[NOTIZ] '
            if 'src' in c.split():
                self.buf += '[QUELLE] '
            if tag in ('h2', 'h3', 'h4') or 'box-title' in c:
                self.buf += '## '

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip -= 1
        if tag == 'span' and self.skip and not self.buf.endswith(' '):
            pass
        if tag in BLOCK:
            self.flush()

    def handle_data(self, d):
        if not self.skip:
            self.buf += d


def material_icon_end(p):
    return p


for name in [f[:-5] for f in sorted(os.listdir(src)) if f.endswith('.html') and f.startswith(('kapitel-', 'seminar', 'glossar', 'index', 'pruefung-praxis', 'zusammenhang', 'ure-story', 'schablonen'))]:
    s = open(os.path.join(src, name + '.html'), encoding='utf-8').read()
    body = s[s.index('<div class="container">'):s.index('<div class="drawer-bg"')]
    # Material-Icons sind eigene Spans; als „Skip“ behandeln, bis das Span endet
    body = re.sub(r'<span class="material-icons"[^>]*>[^<]*</span>', '', body)
    p = P()
    p.feed(body)
    p.flush()
    open(os.path.join(out, name + '.txt'), 'w', encoding='utf-8').write('\n'.join(p.lines) + '\n')

# Detailtexte der Prozesskarte (Objekt D) und Glossar (G) aus dem gemeinsamen Skript
js = open(os.path.join(src, 'landkarte.js'), encoding='utf-8').read()
d = js[js.index('const D = {'):js.index('const FLOW')]
d = re.sub(r"\\'", "'", d)
open(os.path.join(out, 'details-prozesskarte.txt'), 'w', encoding='utf-8').write(d)
g = js[js.index('const G = ['):js.index('const gWrap')]
open(os.path.join(out, 'glossar-daten.txt'), 'w', encoding='utf-8').write(g)
print('ok', sorted(os.listdir(out)))
