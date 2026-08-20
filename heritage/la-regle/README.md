# Le fichier d'origine

`la-regle.html` : l'application autonome dont tout est parti — 243 règles,
621 phrases, 24 dictées, la progression dans un `window.storage` maison, le
tout dans un seul fichier de 136 Ko.

Il est conservé ici pour trois raisons :

- **c'est la source du lot `legacy`.** `npm run extract:legacy` le relit et
  produit `prisma/seed/legacy.json`. Sans lui, 243 des 618 règles du module
  Français seraient irrécupérables depuis le dépôt seul ;
- **c'est la référence visuelle.** L'encre violette, le papier seyès, le cercle
  rouge tracé à la main et la correction en Caveat viennent de là. Quand un
  doute surgit sur l'apparence, c'est ce fichier qui tranche ;
- il s'ouvre encore dans un navigateur, sans rien installer.

```bash
npm run extract:legacy    # relit ce fichier -> prisma/seed/legacy.json
```
