"""Remplace un paragraphe entier d'un cours, repéré par ses premiers mots."""
import sys, json, pathlib

def remplacer(debut, nouveau):
    for f in pathlib.Path("prisma/seed/culture-g/cours").glob("*.ts"):
        s = f.read_text(encoding="utf-8")
        i = s.find(debut)
        if i < 0: continue
        # fin du paragraphe : ligne vide suivante, ou fin du littéral
        fins = [s.find("\n\n", i), s.find("`]", i), s.find("`,", i)]
        fins = [x for x in fins if x > 0]
        if not fins: return None
        fin = min(fins)
        s = s[:i] + nouveau + s[fin:]
        f.write_text(s, encoding="utf-8")
        return f.name
    return None

if __name__ == "__main__":
    for debut, nouveau in json.load(open(sys.argv[1], encoding="utf-8")):
        r = remplacer(debut, nouveau)
        print(("  ok   " if r else "  RATÉ ") + (r or "") + " · " + debut[:60])
