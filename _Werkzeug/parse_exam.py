"""Zerlegt den pdftotext-Auszug der CPUX-UR-Beispielprüfung in Fragen und Lösungen (wörtlich)."""
import json, re, sys

src, out = sys.argv[1], sys.argv[2]
lines = open(src, encoding='utf-8').read().split('\n')

def is_noise(l):
    s = l.strip()
    return (s.startswith('Copyright 2026') or s == 'CPUX-UR Öffentliche Beispielprüfung'
            or s.startswith('Frage     Richtige') or s == 'Antworten')

def find(prefix):
    return next(i for i, l in enumerate(lines) if l.strip().startswith(prefix))

q_start = find('2.3 Prüfungsfragen')
a_start = find('2.4   Antworten')
p_start = find('3 Praktische Prüfungsaufgabe')
q_end = find('Auf den folgenden Seiten finden Sie')

# ---------- Fragen ----------
q_lines = [l for l in lines[q_start + 1:q_end] if not is_noise(l)]
head_re = re.compile(r'^\s*Frage (\d+)\s+(\d) richtige Antworte?n?\s+LO ([\d.a-z]+)')
opt_re = re.compile(r'^\s*([A-F]) - (.*)$')
item_re = re.compile(r'^\s*(\d+\.?|UR\d)\s+\S')
para_start = re.compile(r'^\s*(Welche|Entscheiden Sie|Nun |Ihr Kollege|Nachdem|Angestrebtes|Kontextuelle|Der Nutzungskontext|Ein angemessen)')

questions, cur = [], None
for l in q_lines:
    m = head_re.match(l)
    if m:
        cur = {'n': int(m.group(1)), 'k': int(m.group(2)), 'lo': m.group(3), 'stem': [], 'opts': []}
        questions.append(cur)
        prev_blank = True
        continue
    if cur is None:
        continue
    if not l.strip():
        prev_blank = True
        continue
    om = opt_re.match(l)
    if om:
        cur['opts'].append([om.group(1), om.group(2).strip()])
    elif cur['opts']:
        cur['opts'][-1][1] += ' ' + l.strip()
    else:
        s = l.strip()
        new = (prev_blank or not cur['stem'] or item_re.match(l) or para_start.match(l)
               or cur['stem'][-1].endswith((':', '?')))
        if new:
            cur['stem'].append(s)
        else:
            cur['stem'][-1] += ' ' + s
    prev_blank = False

# ---------- Lösungen ----------
a_lines = [l for l in lines[a_start + 1:p_start] if not is_noise(l)]
ans_re = re.compile(r'^ (\d{1,2})\s+([A-F](?:, [A-F])*)\s*(.*)$')
answers, cur = {}, None
for l in a_lines:
    m = ans_re.match(l)
    if m:
        cur = {'ok': m.group(2).split(', '), 'notes': []}
        answers[int(m.group(1))] = cur
        l = ' ' * 23 + m.group(3)
        if not m.group(3).strip():
            continue
    if cur is None or not l.strip():
        continue
    s = l.strip()
    if s.startswith('●'):
        cur['notes'].append(['li', s.lstrip('●').strip()])
    elif re.match(r'^o\s', s):
        cur['notes'].append(['sub', s[1:].strip()])
    elif len(l) - len(l.lstrip()) <= 24 or not cur['notes']:
        if cur['notes'] and cur['notes'][-1][0] == 'p' and not cur['notes'][-1][1].endswith(('.', ':')):
            cur['notes'][-1][1] += ' ' + s
        else:
            cur['notes'].append(['p', s])
    else:
        cur['notes'][-1][1] += ' ' + s

# Frage 20: der Einleitungssatz steht im PDF eine Zeile über der Fragennummer
moved = answers[19]['notes'].pop()
assert moved[1].startswith('B, C und F'), moved
answers[20]['notes'].insert(0, moved)

for q in questions:
    q.update(answers[q['n']])
    assert len(q['opts']) == 6 and len(q['ok']) == q['k'], q['n']
assert len(questions) == 40

with open(out, 'w', encoding='utf-8') as fh:
    fh.write('/* Theoretische Prüfung CPUX-UR, Fragen und Lösungen im Wortlaut aus\n'
             '   CPUX-UR_DE_Oeffentliche-Beispielpruefung.pdf (Version 3.1 DE, UXQB e. V.). Erzeugt mit parse_exam.py. */\n')
    fh.write('const EXAM_Q = ' + json.dumps(questions, ensure_ascii=False, indent=1) + ';\n')
print('ok', len(questions))
