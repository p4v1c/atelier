"""Retire, dans les leçons du cahier d'origine, la seconde occurrence d'une même question."""
import json, pathlib, unicodedata, re

def norm(s):
    s = unicodedata.normalize("NFD", str(s).lower())
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", s).strip()
def mots(s): return {m for m in norm(s).split() if len(m) > 3}
def jac(a, b):
    i = len(a & b); return i / (len(a) + len(b) - i or 1)

def cle(q): return q.get("q") or q.get("question") or ""
def rep(q):
    ch = q.get("choix") or q.get("choices") or []
    i = q.get("bonne", q.get("answerIndex", 0))
    return ch[i] if 0 <= i < len(ch) else ""

fichiers = sorted(pathlib.Path("heritage/culture-g/data").rglob("*.json"))
# index global : toutes les questions du cahier d'origine
index = []
for f in fichiers:
    try: d = json.loads(f.read_text(encoding="utf-8"))
    except Exception: continue
    for champ in ("questions", "quiz"):
        for k, q in enumerate(d.get(champ) or []):
            if isinstance(q, dict) and cle(q):
                index.append({"f": f, "champ": champ, "k": k, "q": cle(q), "r": rep(q)})

print(f"{len(index)} questions dans le cahier d'origine")
retraits = {}
for i in range(len(index)):
    for j in range(i + 1, len(index)):
        a, b = index[i], index[j]
        if norm(a["r"]) != norm(b["r"]) or len(norm(a["r"])) < 3: continue
        s = jac(mots(a["q"]), mots(b["q"]))
        if s < 0.8: continue
        cible = (str(b["f"]), b["champ"], b["k"])
        if cible in retraits or (str(a["f"]), a["champ"], a["k"]) in retraits: continue
        retraits[cible] = True
        print(f"{round(s*100)}%  garde  [{a['f'].name}] {a['q']}\n     retire [{b['f'].name}] {b['q']}")

par_fichier = {}
for (f, champ, k) in retraits: par_fichier.setdefault(f, []).append((champ, k))
for f, liste in par_fichier.items():
    d = json.loads(pathlib.Path(f).read_text(encoding="utf-8"))
    for champ in {c for c, _ in liste}:
        ind = {k for c, k in liste if c == champ}
        d[champ] = [q for k, q in enumerate(d[champ]) if k not in ind]
    pathlib.Path(f).write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"\n{len(retraits)} question(s) retirée(s) dans {len(par_fichier)} fichier(s)")
