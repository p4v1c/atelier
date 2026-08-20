# Héritage

Les deux projets dont l'Atelier est issu, conservés parce qu'ils servent encore.

| Dossier      | Ce que c'est                                                          |
| ------------ | --------------------------------------------------------------------- |
| `la-regle/`  | Le fichier autonome d'origine. Source du lot « legacy » et référence visuelle. |
| `culture-g/` | Le cahier de culture générale. `data/` est la **source** du module Culture générale — le loader y lit directement. |

## Retrouver l'historique d'avant la fusion

Le dépôt du cahier a été fusionné en **sous-arbre** : ses commits sont tous là,
et le contenu de n'importe quelle version reste atteignable.

```bash
git log --oneline b64c27c              # l'historique du cahier
git show 416d22e:data/geographie.json  # un fichier tel qu'il était alors
git log --oneline -- heritage/culture-g/data/geographie.json
```

En revanche, `git log --follow` **ne traverse pas** une fusion en sous-arbre :
l'historique d'un fichier s'arrête au commit de fusion. C'est une limite connue
de git, pas une perte — les commits d'avant sont dans le dépôt, il faut juste
les interroger par leur identifiant plutôt que par le chemin du fichier.

## Le site publié du cahier

Toujours en ligne, et toujours reconstruit : <https://p4v1c.github.io/atelier/>

Le workflow d'origine vivait à la racine du dépôt du cahier, où GitHub ne le
lit plus depuis la fusion — seul le `.github/` de la racine est actif. Il a donc
été repris dans `.github/workflows/cahier.yml`, avec pour seule différence le
dossier de travail. Il ne se déclenche que si `heritage/culture-g/` change.

À la main :

```bash
cd heritage/culture-g
python3 build_web.py      # site multi-fichiers dans web/
python3 build.py          # version en un seul fichier : site.html
node test_web.js          # vérifie que l'application tourne
```

`heritage/culture-g/package.json` n'existe que pour rendre leur contexte
CommonJS à ces scripts : le `"type": "module"` de l'Atelier s'appliquerait
sinon à tout le dossier et les casserait.
