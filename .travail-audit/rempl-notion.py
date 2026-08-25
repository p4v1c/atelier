#!/usr/bin/env python3
"""Remplacements limités aux lignes d'une notion : le même leurre peut exister
ailleurs dans le fichier, et il ne faut toucher que celui-ci."""
import sys, json, io, re
plan = json.load(open(sys.argv[1], encoding="utf-8"))
for chemin, bloc in plan.items():
    slug, paires = bloc["slug"], bloc["paires"]
    lignes = io.open(chemin, encoding="utf-8").read().split("\n")
    debut = next(i for i, l in enumerate(lignes) if 'notion("%s"' % slug in l)
    fin = next((i for i in range(debut + 1, len(lignes)) if lignes[i].lstrip().startswith("notion(")), len(lignes))
    n = 0
    for a, b in paires:
        for i in range(debut, fin):
            if a in lignes[i]:
                lignes[i] = lignes[i].replace(a, b)
                n += 1
                break
        else:
            print("ABSENT dans %s : %s" % (slug, a), file=sys.stderr)
    io.open(chemin, "w", encoding="utf-8").write("\n".join(lignes))
    print("ok %s — %s : %d remplacement(s)" % (chemin, slug, n))
