#!/usr/bin/env python3
"""Récupère une image de Wikimedia Commons, la compresse et l'enregistre
prête à être embarquée dans le site (data URI + crédit de licence).

    python3 images.py "France location map-Regions-2016.svg" carte-france-regions
    python3 images.py --lot lot.json      (liste de [fichier_commons, slug])
    python3 images.py --cherche "mont blanc"   (trouve le nom exact d'un fichier)

Les images sont stockées dans data/images/<slug>.json et référencées depuis
les leçons par {"type": "image", "image": "<slug>", "legende": "…"}.
"""
import base64, io, json, os, re, subprocess, sys, urllib.parse

BASE = os.path.dirname(os.path.abspath(__file__))
DEST = os.path.join(BASE, "data", "images")
UA = "CultureG/1.0 (application de revision personnelle)"
LARGEUR = 640
# licences acceptées : domaine public et Creative Commons libres
OK_LICENCE = re.compile(r"(public domain|^cc0|^cc[ -]by|^pd|attribution)", re.I)


def _curl(url, binaire=True):
    r = subprocess.run(["curl", "-sL", "--max-time", "60", "-A", UA, url],
                       capture_output=True)
    if r.returncode != 0:
        raise RuntimeError(f"téléchargement échoué : {url}")
    return r.stdout if binaire else r.stdout.decode("utf-8", "replace")


def metadonnees(fichier):
    url = ("https://commons.wikimedia.org/w/api.php?action=query&titles="
           + urllib.parse.quote("File:" + fichier)
           + "&prop=imageinfo&iiprop=extmetadata|url&format=json")
    d = json.loads(_curl(url, binaire=False))
    page = list(d["query"]["pages"].values())[0]
    if "imageinfo" not in page:
        raise RuntimeError(f"introuvable sur Commons : {fichier}")
    md = page["imageinfo"][0].get("extmetadata", {})
    def champ(k):
        v = str(md.get(k, {}).get("value", ""))
        v = re.sub(r"<[^>]+>", "", v)          # les valeurs contiennent du HTML
        return re.sub(r"\s+", " ", v).strip()
    return {
        "auteur": champ("Artist") or "auteur non précisé",
        "licence": champ("LicenseShortName") or "licence non précisée",
        "licence_url": champ("LicenseUrl"),
        "description": champ("ImageDescription")[:300],
        "source": "https://commons.wikimedia.org/wiki/" + urllib.parse.quote("File:" + fichier),
    }


def recupere(fichier, slug, largeur=LARGEUR):
    from PIL import Image
    meta = metadonnees(fichier)
    if not OK_LICENCE.search(meta["licence"]):
        raise RuntimeError(f"licence non acceptée pour {fichier} : {meta['licence']}")

    url = ("https://commons.wikimedia.org/wiki/Special:FilePath/"
           + urllib.parse.quote(fichier) + f"?width={largeur * 2}")
    brut = _curl(url)
    im = Image.open(io.BytesIO(brut))
    if im.mode in ("RGBA", "LA", "P"):
        fond = Image.new("RGB", im.size, (255, 255, 255))
        im = im.convert("RGBA")
        fond.paste(im, mask=im.split()[-1])
        im = fond
    else:
        im = im.convert("RGB")
    im.thumbnail((largeur, largeur), Image.LANCZOS)
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=78, method=6)
    octets = buf.getvalue()

    os.makedirs(DEST, exist_ok=True)
    out = {
        "slug": slug,
        "fichier": fichier,
        "largeur": im.size[0], "hauteur": im.size[1],
        "data": "data:image/webp;base64," + base64.b64encode(octets).decode("ascii"),
        **meta,
    }
    chemin = os.path.join(DEST, slug + ".json")
    with open(chemin, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False)
    print(f"  OK {slug:32} {im.size[0]}x{im.size[1]}  {len(octets)/1024:5.1f} Ko  [{meta['licence']}]")
    return out


def cherche(terme, limite=8):
    """liste les fichiers Commons correspondant a un terme, avec leur licence"""
    url = ("https://commons.wikimedia.org/w/api.php?action=query&generator=search"
           "&gsrnamespace=6&gsrlimit=" + str(limite)
           + "&gsrsearch=" + urllib.parse.quote(terme)
           + "&prop=imageinfo&iiprop=extmetadata|size&format=json")
    d = json.loads(_curl(url, binaire=False))
    pages = d.get("query", {}).get("pages", {})
    if not pages:
        print("aucun resultat"); return
    for pg in sorted(pages.values(), key=lambda x: x.get("index", 0)):
        nom = pg["title"].replace("File:", "")
        if not re.search(r"\.(jpe?g|png|svg|webp)$", nom, re.I):
            continue
        info = (pg.get("imageinfo") or [{}])[0]
        md = info.get("extmetadata", {})
        lic = re.sub(r"<[^>]+>", "", str(md.get("LicenseShortName", {}).get("value", "?")))
        libre = "OUI" if OK_LICENCE.search(lic) else "NON"
        print(f"  [{libre}] {lic:20} {nom}")


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    if args[0] == "--cherche":
        cherche(" ".join(args[1:]))
        return
    if args[0] == "--lot":
        lot = json.load(open(args[1], encoding="utf-8"))
        ok = err = 0
        for item in lot:
            fichier, slug = item[0], item[1]
            if os.path.exists(os.path.join(DEST, slug + ".json")):
                print(f"  -- {slug} déjà présent"); ok += 1; continue
            try:
                recupere(fichier, slug); ok += 1
            except Exception as e:
                print(f"  ÉCHEC {slug} : {e}"); err += 1
        print(f"\n{ok} image(s) prêtes, {err} échec(s)")
    else:
        recupere(args[0], args[1])


if __name__ == "__main__":
    main()
