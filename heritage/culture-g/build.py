#!/usr/bin/env python3
"""Assemble le site : data/*.json + data/lecons/<cat>/*.json -> site.html"""
import json, sys, glob, os, re, unicodedata


def cle(texte):
    """empreinte d'un enonce : insensible aux accents, a la casse et a la ponctuation"""
    t = unicodedata.normalize("NFD", texte.lower())
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    return re.sub(r"[^a-z0-9]+", " ", t).strip()

BASE = os.path.dirname(os.path.abspath(__file__))
ORDER = [
    "histoire-france", "histoire-monde", "geographie", "physique-chimie",
    "sciences-vie", "sport", "litterature", "arts-musique",
    "cinema-medias", "institutions-economie", "mythologie-religions", "sciences-tech",
    "gastronomie", "langue-francaise",
]

def validate(cat, path):
    errs = []
    for k in ("id", "nom", "emoji", "questions", "cours"):
        if k not in cat:
            errs.append(f"{path}: cle manquante '{k}'")
            return errs
    def check_q(q, where):
        if not isinstance(q.get("q"), str) or not q["q"].strip():
            errs.append(f"{where}: question vide")
        if not isinstance(q.get("choix"), list) or len(q["choix"]) != 4:
            errs.append(f"{where}: il faut 4 choix")
        elif len({str(c).strip() for c in q["choix"]}) != 4:
            errs.append(f"{where}: choix dupliques")
        if not isinstance(q.get("bonne"), int) or not (0 <= q["bonne"] <= 3):
            errs.append(f"{where}: index 'bonne' invalide")
        if not isinstance(q.get("explication"), str) or len(q.get("explication", "")) < 40:
            errs.append(f"{where}: explication trop courte")
        q.setdefault("difficulte", 1)
    for i, q in enumerate(cat["questions"]):
        check_q(q, f"{path} q[{i}]")
    for ci, c in enumerate(cat["cours"]):
        if not c.get("titre") or not c.get("sections") or not c.get("quiz"):
            errs.append(f"{path} cours[{ci}]: structure incomplete")
            continue
        for si, s in enumerate(c["sections"]):
            if not s.get("titre") or not s.get("texte") or len(s["texte"]) < 100:
                errs.append(f"{path} cours[{ci}] section[{si}]: texte trop court")
        for qi, q in enumerate(c["quiz"]):
            check_q(q, f"{path} cours[{ci}] quiz[{qi}]")
    return errs

def charge_images():
    """data/images/<slug>.json -> dict slug -> visuel prêt à afficher"""
    out = {}
    for path in glob.glob(os.path.join(BASE, "data", "images", "*.json")):
        try:
            with open(path, encoding="utf-8") as f:
                d = json.load(f)
        except Exception as e:
            print(f"image illisible, ignoree : {os.path.basename(path)} ({e})")
            continue
        out[d["slug"]] = d
    return out


def resout_images(cat, images, manquantes):
    """remplace {"type":"image","image":"<slug>"} par l'image embarquee"""
    for c in cat["cours"]:
        for sec in c.get("sections", []):
            liste = sec.get("visuels") or ([sec["visuel"]] if sec.get("visuel") else [])
            gardes = []
            for v in liste:
                if isinstance(v, dict) and v.get("type") == "image":
                    img = images.get(v.get("image"))
                    if not img:
                        manquantes.add(v.get("image"))
                        continue
                    v = dict(v)
                    for k in ("data", "auteur", "licence", "source", "largeur", "hauteur"):
                        v[k] = img[k]
                gardes.append(v)
            if gardes:
                sec["visuels"] = gardes
                sec.pop("visuel", None)
            else:
                sec.pop("visuels", None)
                sec.pop("visuel", None)


def main():
    cats, errors, seen = [], [], set()
    images = charge_images()
    manquantes = set()
    files = {os.path.splitext(os.path.basename(p))[0]: p
             for p in glob.glob(os.path.join(BASE, "data", "*.json"))}
    for cid in ORDER:
        if cid not in files:
            print(f"ATTENTION: {cid}.json absent, ignore")
            continue
        with open(files[cid], encoding="utf-8") as f:
            cat = json.load(f)
        # lecons supplementaires : data/lecons/<cid>/*.json, une lecon par fichier
        extra = sorted(glob.glob(os.path.join(BASE, "data", "lecons", cid, "*.json")))
        titres = {c["titre"].strip().lower() for c in cat["cours"]}
        for path in extra:
            try:
                with open(path, encoding="utf-8") as f:
                    lec = json.load(f)
            except Exception as e:
                print(f"lecon illisible, ignoree : {cid}/{os.path.basename(path)} ({e})")
                continue
            if not all(k in lec for k in ("titre", "sections", "quiz")):
                print(f"lecon incomplete, ignoree : {cid}/{os.path.basename(path)}")
                continue
            if lec["titre"].strip().lower() in titres:
                print(f"lecon en double, ignoree : {lec['titre']}")
                continue
            titres.add(lec["titre"].strip().lower())
            cat["cours"].append(lec)
        resout_images(cat, images, manquantes)
        errors += validate(cat, cid)
        # doublons : les quiz de lecons sont prioritaires (ils sont lies a un cours),
        # une question de la banque qui les repete est retiree
        for c in cat["cours"]:
            garde = []
            for q in c["quiz"]:
                k = cle(q["q"])
                if k in seen:
                    print(f"doublon retire ({cid}, quiz de lecon): {q['q'][:55]}")
                    continue
                seen.add(k)
                garde.append(q)
            c["quiz"] = garde
        kept = []
        for q in cat["questions"]:
            k = cle(q["q"])
            if k in seen:
                print(f"doublon retire ({cid}, banque): {q['q'][:55]}")
                continue
            seen.add(k)
            kept.append(q)
        cat["questions"] = kept
        cats.append(cat)
    if errors:
        print("\n".join(errors))
        sys.exit(1)
    with open(os.path.join(BASE, "app_template.html"), encoding="utf-8") as f:
        tpl = f.read()
    payload = json.dumps(cats, ensure_ascii=False, separators=(",", ":"))
    # le JSON vit dans un <script> : neutraliser ce qui fermerait la balise
    payload = (payload.replace("</", "<\\/")
                      .replace(" ", "\\u2028")
                      .replace(" ", "\\u2029"))
    out = tpl.replace("/*__DATA__*/[]", payload, 1)
    dest = os.path.join(BASE, "site.html")
    with open(dest, "w", encoding="utf-8") as f:
        f.write(out)
    if manquantes:
        print(f"images referencees mais absentes de data/images/ : {', '.join(sorted(manquantes))}")
    nvis = sum(len(s.get("visuels", []))
               for c in cats for x in c["cours"] for s in x["sections"])
    nimg = sum(1 for c in cats for x in c["cours"] for s in x["sections"]
               for v in s.get("visuels", []) if v.get("type") == "image")
    print(f"visuels: {nvis} dont {nimg} images ({len(images)} disponibles)")
    nq = sum(len(c["questions"]) for c in cats)
    ncq = sum(len(x["quiz"]) for c in cats for x in c["cours"])
    nc = sum(len(c["cours"]) for c in cats)
    print(f"OK: {len(cats)} categories, {nq} questions quiz + {ncq} questions de cours = {nq+ncq}, {nc} lecons")
    print(f"taille: {os.path.getsize(dest)/1024:.0f} Ko -> {dest}")

if __name__ == "__main__":
    main()
