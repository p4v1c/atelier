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

Le workflow qui reconstruisait `site.html` et le publiait sur GitHub Pages se
trouve maintenant sous `culture-g/.github/workflows/`, où GitHub ne le lit plus :
seul le `.github/` à la racine est actif. Le site déjà publié reste en ligne,
mais il ne se reconstruit plus tout seul. C'est voulu — c'est l'Atelier qui
prend la suite.

Pour le régénérer à la main :

```bash
cd heritage/culture-g && python3 build_web.py
```
