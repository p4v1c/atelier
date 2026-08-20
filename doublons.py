#!/usr/bin/env python3
"""Détecte les questions en double ou trop proches dans toute la base.

    python3 doublons.py            # rapport
    python3 doublons.py --seuil 0.75

Deux questions sont signalées quand leurs énoncés se ressemblent fortement,
ou quand elles ont la même bonne réponse et un énoncé proche.
"""
import glob, json, os, re, sys, unicodedata
from collections import defaultdict
from itertools import combinations

VIDES = {"le","la","les","un","une","des","du","de","d","l","et","ou","est","sont","a",
         "au","aux",  "en","dans","par","pour","sur","qui","que","quel","quelle","quels",
         "quelles","quoi","ce","cet","cette","ces","son","sa","ses","leur","leurs","il",
         "elle","on","se","ne","pas","plus","dont","avec","comme","quelle","combien"}

def normalise(t):
    t = unicodedata.normalize("NFD", t.lower())
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    t = re.sub(r"[^a-z0-9 ]", " ", t)
    return t

def mots(t):
    return {m for m in normalise(t).split() if m not in VIDES and len(m) > 2}

def jaccard(a, b):
    if not a or not b: return 0.0
    return len(a & b) / len(a | b)

def charge():
    out = []
    for path in sorted(glob.glob("data/*.json")):
        cid = os.path.basename(path).replace(".json", "")
        d = json.load(open(path, encoding="utf-8"))
        if "questions" not in d: continue
        for i, q in enumerate(d["questions"]):
            out.append((cid, f"{cid}.json q[{i}]", q))
        for ci, c in enumerate(d.get("cours", [])):
            for qi, q in enumerate(c["quiz"]):
                out.append((cid, f"{cid}.json cours[{ci}] quiz[{qi}]", q))
    for path in sorted(glob.glob("data/lecons/*/*.json")):
        cid = os.path.basename(os.path.dirname(path))
        d = json.load(open(path, encoding="utf-8"))
        for qi, q in enumerate(d.get("quiz", [])):
            out.append((cid, f"lecons/{cid}/{os.path.basename(path)} quiz[{qi}]", q))
    return out

def main():
    seuil = 0.7
    if "--seuil" in sys.argv:
        seuil = float(sys.argv[sys.argv.index("--seuil") + 1])
    items = charge()
    print(f"{len(items)} questions analysées\n")

    exacts = defaultdict(list)
    for cid, ref, q in items:
        exacts[normalise(q["q"])].append((cid, ref, q))
    dbl_exacts = {k: v for k, v in exacts.items() if len(v) > 1}

    # index par mot rare pour ne comparer que les paires plausibles
    par_mot = defaultdict(list)
    prep = []
    for idx, (cid, ref, q) in enumerate(items):
        m = mots(q["q"])
        prep.append((cid, ref, q, m))
        for w in m: par_mot[w].append(idx)
    candidats = set()
    for w, lst in par_mot.items():
        if len(lst) > 300: continue          # mot trop courant, saute
        candidats.update(combinations(sorted(lst), 2))

    proches = []
    for i, j in candidats:
        ci, ri, qi, mi = prep[i]
        cj, rj, qj, mj = prep[j]
        s = jaccard(mi, mj)
        if s < seuil: continue
        if normalise(qi["q"]) == normalise(qj["q"]): continue   # déjà compté
        rep_i = normalise(str(qi["choix"][qi["bonne"]]))
        rep_j = normalise(str(qj["choix"][qj["bonne"]]))
        proches.append((s, rep_i == rep_j, ci, ri, qi["q"], cj, rj, qj["q"]))
    proches.sort(reverse=True)

    print(f"=== {len(dbl_exacts)} énoncés strictement identiques ===")
    for k, v in list(dbl_exacts.items())[:20]:
        print(f"  « {v[0][2]['q'][:70]} »")
        for cid, ref, q in v: print(f"      {ref}")
    print(f"\n=== {len(proches)} paires proches (seuil {seuil}) ===")
    for s, meme_rep, ci, ri, qi, cj, rj, qj in proches[:25]:
        flag = "MEME REPONSE" if meme_rep else "reponse differente"
        print(f"  {s:.2f} [{flag}]")
        print(f"      {ri}\n        « {qi[:72]} »")
        print(f"      {rj}\n        « {qj[:72]} »")
    if len(proches) > 25: print(f"  … et {len(proches)-25} autres")

if __name__ == "__main__":
    main()
