#!/usr/bin/env python3
"""Remplace un leurre là où il se trouve, quel que soit le fichier de contenu.

Le contenu de la culture générale est éclaté entre le cahier d'origine (JSON) et
les lots du seed (TypeScript) : un leurre à réécrire peut être dans l'un ou dans
l'autre. Ce script le cherche partout, et refuse d'agir s'il est ambigu.
"""
import sys, json, io, glob

# Un second argument restreint la recherche à un domaine : indispensable quand
# plusieurs relecteurs travaillent en parallèle, pour qu'aucun n'écrive dans les
# fichiers d'un autre.
DOMAINE = sys.argv[2] if len(sys.argv) > 2 else "*"
SOURCES = (
    glob.glob("prisma/seed/culture-g/%s.ts" % DOMAINE)
    + glob.glob("prisma/seed/culture-g/cours/%s.ts" % DOMAINE)
    + glob.glob("heritage/culture-g/data/%s.json" % DOMAINE)
    + glob.glob("heritage/culture-g/data/lecons/%s/*.json" % DOMAINE)
)
SOURCES = sorted(set(SOURCES))

paires = json.load(open(sys.argv[1], encoding="utf-8"))
textes = {f: io.open(f, encoding="utf-8").read() for f in SOURCES}
touches, absents, ambigus = {}, [], []
for a, b in paires:
    ou = [f for f, s in textes.items() if s.count(a) == 1]
    trop = [f for f, s in textes.items() if s.count(a) > 1]
    if len(ou) == 1 and not trop:
        textes[ou[0]] = textes[ou[0]].replace(a, b)
        touches[ou[0]] = touches.get(ou[0], 0) + 1
    elif not ou and not trop:
        absents.append(a)
    else:
        ambigus.append(a)
for f, n in touches.items():
    io.open(f, "w", encoding="utf-8").write(textes[f])
    print("ok %s — %d" % (f, n))
if absents: print("ABSENTS : " + " | ".join(x[:40] for x in absents), file=sys.stderr)
if ambigus: print("AMBIGUS : " + " | ".join(x[:40] for x in ambigus), file=sys.stderr)
