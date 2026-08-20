#!/usr/bin/env python3
"""Recompresse les images les plus lourdes pour alléger le site final.

Ne touche qu'aux images dépassant un seuil, afin de ne pas dégrader
inutilement celles qui sont déjà légères.

    python3 optimiser_images.py            # simulation, n'écrit rien
    python3 optimiser_images.py --appliquer
"""
import base64, glob, io, json, os, sys

SEUIL_KO = 90      # au-delà de cette taille en base64, on recompresse
LARGEUR_MAX = 600  # les images s'affichent dans une colonne d'environ 760 px
QUALITE = 66

def main():
    appliquer = "--appliquer" in sys.argv
    from PIL import Image
    avant = apres = 0
    touchees = 0
    for path in sorted(glob.glob(os.path.join("data", "images", "*.json"))):
        d = json.load(open(path, encoding="utf-8"))
        taille = len(d["data"])
        avant += taille
        if taille / 1024 <= SEUIL_KO:
            apres += taille
            continue
        brut = base64.b64decode(d["data"].split(",", 1)[1])
        im = Image.open(io.BytesIO(brut))
        im.thumbnail((LARGEUR_MAX, LARGEUR_MAX), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "WEBP", quality=QUALITE, method=6)
        neuf = "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode("ascii")
        # « NaN » ou « undefined » dans le base64 ne pose plus de problème au test,
        # mais on garde l'image la plus petite des deux
        if len(neuf) >= taille:
            apres += taille
            continue
        touchees += 1
        apres += len(neuf)
        print(f"  {d['slug']:34} {taille/1024:5.0f} -> {len(neuf)/1024:5.0f} Ko"
              f"   {im.size[0]}x{im.size[1]}")
        if appliquer:
            d["data"] = neuf
            d["largeur"], d["hauteur"] = im.size
            json.dump(d, open(path, "w", encoding="utf-8"), ensure_ascii=False)
    print(f"\n{touchees} image(s) recompressée(s)")
    print(f"total base64 : {avant/1048576:.2f} Mo -> {apres/1048576:.2f} Mo"
          f"  (gain {100 - 100*apres/avant:.0f} %)")
    if not appliquer:
        print("\n(simulation — relancer avec --appliquer pour écrire)")

if __name__ == "__main__":
    main()
