"""Prüft nach dem Einbau, ob jede Folienzeile der Transkription wörtlich auf der Website steht.

Aufruf: python3 -I abgleich_transkription.py <textdump-ordner> <transkription.json> [weitere.json …]
Meldet je Folie die Zeilen, die nirgends wörtlich vorkommen (Folientext, rot gedruckte Begriffe, Notizen).
"""
import json, re, sys, os

dump_dir, files = sys.argv[1], sys.argv[2:]
norm = lambda t: re.sub(r'\s+', ' ', t.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')).strip()
site = norm(' '.join(open(os.path.join(dump_dir, f), encoding='utf-8').read() for f in os.listdir(dump_dir) if f.endswith('.txt')))
site_flat = re.sub(r'[\s\-–]+', '', site)


def zeilen(text):
    for z in text.split('\n'):
        z = re.sub(r'\[[^\]]*\]', '', z)                      # Bildbeschreibungen wie [Pfeil]
        z = re.sub(r'^\s*(- |\d+\. |→ |✓ |✗ |\(die .*\)$)', '', z).strip()
        z = re.sub(r':$', '', z).strip()                          # Spaltenköpfe „Planen:“
        z = re.sub(r'^\|\s*', '', z).strip()                      # Tabellenzeile mit leerer erster Spalte
        if not z or z.startswith('[') or len(z) < 8:
            continue
        for teil in z.split(' | '):
            teil = teil.strip()
            if len(teil) >= 8:
                yield teil


fehlt, gesamt = [], 0
for f in files:
    for r in json.load(open(f, encoding='utf-8')):
        if r.get('ausschnitt'):
            continue
        for z in zeilen((r.get('title') or '') + '\n' + (r.get('text') or '')):
            gesamt += 1
            # Silbentrennung und Zeilenumbrüche der Folie ignorieren
            if norm(z) not in site and re.sub(r'[\s\-–]+', '', norm(z)) not in site_flat:
                fehlt.append((r['page'], 'Text', z))
print('geprüfte Folienzeilen:', gesamt, '· nicht wörtlich gefunden:', len(fehlt))
for p, art, z in fehlt:
    print('  S. %s  %s: %s' % (p, art, z[:160]))
