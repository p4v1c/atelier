import sys, pathlib, json, re

def bloc(lignes, i):
    """Renvoie l'indice de fin (inclus) du tableau ouvert à la ligne i."""
    prof, dans_texte, echap, delim = 0, False, False, ""
    for j in range(i, len(lignes)):
        for c in lignes[j]:
            if dans_texte:
                if echap: echap = False
                elif c == "\\": echap = True
                elif c == delim: dans_texte = False
                continue
            if c in "\"'`": dans_texte, delim = True, c
            elif c == "[": prof += 1
            elif c == "]":
                prof -= 1
                if prof == 0: return j
        # les gabarits multi-lignes gardent dans_texte à True d'une ligne à l'autre
    raise SystemExit(f"bloc non refermé à la ligne {i+1}")

def supprimer(fichier, question):
    p = pathlib.Path(fichier)
    lignes = p.read_text(encoding="utf-8").splitlines(keepends=True)
    cible = None
    for i, l in enumerate(lignes):
        if l.lstrip().startswith('["') and question in l:
            cible = i
            break
    if cible is None: return False
    fin = bloc(lignes, cible)
    del lignes[cible:fin + 1]
    p.write_text("".join(lignes), encoding="utf-8")
    return True

if __name__ == "__main__":
    a_supprimer = json.load(open(sys.argv[1], encoding="utf-8"))
    fichiers = list(pathlib.Path("prisma/seed/culture-g").rglob("*.ts"))
    faits, manques = 0, []
    for q in a_supprimer:
        ok = False
        for f in fichiers:
            if question_dans := (q in f.read_text(encoding="utf-8")):
                if supprimer(f, q):
                    print(f"  supprimée dans {f.name} : {q[:70]}")
                    ok = True
                    break
        if ok: faits += 1
        else: manques.append(q)
    print(f"\n{faits} supprimée(s), {len(manques)} introuvable(s)")
    for m in manques: print("  MANQUE :", m)
