#!/usr/bin/env python3
"""Remplacements exacts dans un fichier, sans portée : pour les JSON du cahier
d'origine, où chaque leurre est unique."""
import sys, json, io
plan = json.load(open(sys.argv[1], encoding="utf-8"))
for chemin, paires in plan.items():
    s = io.open(chemin, encoding="utf-8").read()
    n = 0
    for a, b in paires:
        c = s.count(a)
        if c != 1:
            print("ABSENT/AMBIGU (%d) : %s" % (c, a[:60]), file=sys.stderr)
            continue
        s = s.replace(a, b); n += 1
    io.open(chemin, "w", encoding="utf-8").write(s)
    print("ok %s — %d remplacement(s)" % (chemin, n))
