#!/usr/bin/env python3
"""Retire les questions quasi identiques (meme sens, formulation differente).

Ne touche qu'aux paires tres proches ET de meme reponse — les cas ou il n'y a
aucun doute. La question conservee est celle du quiz de lecon quand il y en a
une, sinon la premiere rencontree.

    python3 nettoyer_doublons.py              # simulation
    python3 nettoyer_doublons.py --appliquer
"""
import glob, json, os, re, sys, unicodedata
from collections import defaultdict
from itertools import combinations

SEUIL = 0.85
VIDES = {"le","la","les","un","une","des","du","de","d","l","et","ou","est","sont","a","au",
         "aux","en","dans","par","pour","sur","qui","que","quel","quelle","quels","quelles",
         "quoi","ce","cet","cette","ces","son","sa","ses","leur","leurs","il","elle","on",
         "se","ne","pas","plus","dont","avec","comme","combien","appelle","t"}

def norm(t):
    t = unicodedata.normalize("NFD", str(t).lower())
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9 ]", " ", t)

def mots(t):
    return {m for m in norm(t).split() if m not in VIDES and len(m) > 2}

def main():
    appliquer = "--appliquer" in sys.argv
    # (chemin, emplacement, index, question, priorite) ; priorite 0 = quiz de lecon (garde)
    items, fichiers = [], {}
    for path in sorted(glob.glob("data/*.json")):
        d = json.load(open(path, encoding="utf-8"))
        if "questions" not in d: continue
        fichiers[path] = d
        for ci, c in enumerate(d.get("cours", [])):
            for qi, q in enumerate(c["quiz"]):
                items.append([path, ("cours", ci, qi), q, 0])
        for i, q in enumerate(d["questions"]):
            items.append([path, ("banque", None, i), q, 1])
    for path in sorted(glob.glob("data/lecons/*/*.json")):
        d = json.load(open(path, encoding="utf-8"))
        if "quiz" not in d: continue
        fichiers[path] = d
        for qi, q in enumerate(d["quiz"]):
            items.append([path, ("lecon", None, qi), q, 0])

    par_mot = defaultdict(list)
    prep = []
    for idx, (path, loc, q, prio) in enumerate(items):
        m = mots(q["q"]); prep.append(m)
        for w in m: par_mot[w].append(idx)
    paires = set()
    for w, lst in par_mot.items():
        if len(lst) > 300: continue
        paires.update(combinations(sorted(lst), 2))

    a_retirer = {}
    for i, j in paires:
        mi, mj = prep[i], prep[j]
        if not mi or not mj: continue
        s = len(mi & mj) / len(mi | mj)
        if s < SEUIL: continue
        qi, qj = items[i][2], items[j][2]
        if norm(qi["choix"][qi["bonne"]]) != norm(qj["choix"][qj["bonne"]]): continue
        # on retire celui de moindre priorite (banque avant quiz de lecon)
        perdant = i if items[i][3] > items[j][3] else j
        gagnant = j if perdant == i else i
        if perdant in a_retirer: continue
        a_retirer[perdant] = (s, gagnant)

    print(f"{len(items)} questions analysees, {len(a_retirer)} quasi-doublons a retirer\n")
    for idx, (s, g) in sorted(a_retirer.items(), key=lambda x: -x[1][0]):
        path, loc, q, _ = items[idx]
        gp, gl, gq, _ = items[g]
        print(f"  {s:.2f}  RETIRE {os.path.relpath(path,'data')} {loc[0]}[{loc[2]}]")
        print(f"          « {q['q'][:68]} »")
        print(f"        garde {os.path.relpath(gp,'data')} {gl[0]}[{gl[2]}]")

    if not appliquer:
        print("\n(simulation — relancer avec --appliquer)")
        return

    # retrait, en partant des index les plus eleves pour ne pas decaler
    par_fichier = defaultdict(list)
    for idx in a_retirer: par_fichier[items[idx][0]].append(items[idx][1])
    for path, locs in par_fichier.items():
        d = fichiers[path]
        for kind, ci, qi in sorted(locs, key=lambda x: -x[2]):
            if kind == "banque": del d["questions"][qi]
            elif kind == "cours": del d["cours"][ci]["quiz"][qi]
            else: del d["quiz"][qi]
        json.dump(d, open(path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"\n{len(a_retirer)} question(s) retiree(s) dans {len(par_fichier)} fichier(s)")

if __name__ == "__main__":
    main()
