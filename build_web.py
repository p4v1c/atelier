#!/usr/bin/env python3
"""Génère la version « site web » dans web/ : fichiers séparés, chargement à la demande.

    python3 build_web.py

Différences avec build.py (qui produit le fichier unique site.html) :
  - les données de chaque matière vont dans web/data/<id>.json, chargées à la demande
  - les images deviennent de vrais fichiers web/img/<slug>.webp (fini le base64, -33 %)
  - web/index.html ne pèse que la coquille de l'appli
"""
import base64, json, os, re, shutil, sys
import build as noyau            # on réutilise le chargement et la validation

BASE = os.path.dirname(os.path.abspath(__file__))
WEB = os.path.join(BASE, "web")


def charge_tout():
    """rejoue la logique de build.py mais renvoie les catégories au lieu d'écrire le site"""
    cats, errors, seen = [], [], set()
    images = noyau.charge_images()
    manquantes = set()
    fichiers = {os.path.splitext(os.path.basename(p))[0]: p
                for p in __import__("glob").glob(os.path.join(BASE, "data", "*.json"))}
    for cid in noyau.ORDER:
        if cid not in fichiers:
            continue
        with open(fichiers[cid], encoding="utf-8") as f:
            cat = json.load(f)
        extra = sorted(__import__("glob").glob(os.path.join(BASE, "data", "lecons", cid, "*.json")))
        titres = {c["titre"].strip().lower() for c in cat["cours"]}
        for path in extra:
            try:
                with open(path, encoding="utf-8") as f:
                    lec = json.load(f)
            except Exception:
                continue
            if not all(k in lec for k in ("titre", "sections", "quiz")):
                continue
            if lec["titre"].strip().lower() in titres:
                continue
            titres.add(lec["titre"].strip().lower())
            cat["cours"].append(lec)
        noyau.resout_images(cat, images, manquantes)
        errors += noyau.validate(cat, cid)
        for c in cat["cours"]:
            garde = []
            for q in c["quiz"]:
                k = noyau.cle(q["q"])
                if k in seen: continue
                seen.add(k); garde.append(q)
            c["quiz"] = garde
        kept = []
        for q in cat["questions"]:
            k = noyau.cle(q["q"])
            if k in seen: continue
            seen.add(k); kept.append(q)
        cat["questions"] = kept
        cats.append(cat)
    if errors:
        print("\n".join(errors)); sys.exit(1)
    return cats


def extrait_images(cats):
    """remplace les data URI par des chemins de fichiers, et écrit les .webp"""
    os.makedirs(os.path.join(WEB, "img"), exist_ok=True)
    vus, poids = {}, 0
    for cat in cats:
        for c in cat["cours"]:
            for s in c.get("sections", []):
                for v in s.get("visuels", []):
                    if v.get("type") != "image" or not v.get("data"):
                        continue
                    slug = v.get("image") or "img"
                    if slug not in vus:
                        octets = base64.b64decode(v["data"].split(",", 1)[1])
                        with open(os.path.join(WEB, "img", slug + ".webp"), "wb") as f:
                            f.write(octets)
                        vus[slug] = len(octets)
                    v["src"] = f"img/{slug}.webp"
                    del v["data"]
    poids = sum(vus.values())
    return len(vus), poids


def main():
    cats = charge_tout()
    if os.path.isdir(WEB):
        shutil.rmtree(WEB)
    os.makedirs(os.path.join(WEB, "data"), exist_ok=True)

    n_img, poids_img = extrait_images(cats)

    # index léger : ce qu'il faut pour afficher l'accueil sans charger le contenu
    index = {"matieres": [], "total_questions": 0, "total_lecons": 0}
    for cat in cats:
        nq = len(cat["questions"]) + sum(len(c["quiz"]) for c in cat["cours"])
        index["matieres"].append({
            "id": cat["id"], "nom": cat["nom"], "emoji": cat["emoji"],
            "n_questions": nq, "n_lecons": len(cat["cours"]),
            "n_sections": sum(len(c["sections"]) for c in cat["cours"]),
        })
        index["total_questions"] += nq
        index["total_lecons"] += len(cat["cours"])
        with open(os.path.join(WEB, "data", cat["id"] + ".json"), "w", encoding="utf-8") as f:
            json.dump(cat, f, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(WEB, "data", "index.json"), "w", encoding="utf-8") as f:
        json.dump(index, f, ensure_ascii=False, separators=(",", ":"))

    tailles = {c["id"]: os.path.getsize(os.path.join(WEB, "data", c["id"] + ".json")) for c in cats}
    print(f"{len(cats)} matieres, {index['total_questions']} questions, {index['total_lecons']} lecons")
    print(f"  index.json      {os.path.getsize(os.path.join(WEB,'data','index.json'))/1024:6.1f} Ko  (charge au demarrage)")
    print(f"  matiere moyenne {sum(tailles.values())/len(tailles)/1024:6.1f} Ko  (chargee a la demande)")
    print(f"  {n_img} images    {poids_img/1048576:6.2f} Mo  (chargees quand affichees)")
    return cats, index


if __name__ == "__main__":
    main()
