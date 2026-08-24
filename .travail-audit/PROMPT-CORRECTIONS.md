Tu reprends la correction du contenu de « l'Atelier », une application
d'apprentissage à répétition espacée. Le dépôt est à `~/Downloads/la-regle`.

Un audit complet a été mené par vingt et un relecteurs indépendants. Il a
produit **1 952 constats — 515 graves, 879 moyens, 558 mineurs**, chacun avec
sa citation, son emplacement et une correction rédigée. Environ cent ont été
appliqués. **Ta mission est d'appliquer le reste.**

---

## 1. Lis ceci avant de toucher à quoi que ce soit

- `~/Downloads/ATELIER-REPRISE.md` — l'état du projet.
- `~/Downloads/atelier-audit/LISEZ-MOI.md` — l'index des rapports, les défauts
  systémiques et les faux positifs déjà démasqués.
- Les rapports eux-mêmes, dans `~/Downloads/atelier-audit/` (aussi versionnés
  dans `.travail-audit/rapports/`). Un fichier par domaine.

## 2. Règles absolues

- **Ne reconstruis jamais la base.** `prisma migrate reset` détruirait 618
  règles, 4 336 phrases et la progression de trois comptes. Avant tout seed :
  `docker exec la-regle-db pg_dump -U laregle laregle > sauvegardes/<nom>.sql`
  (`pg_dump` n'existe pas sur l'hôte, il faut passer par le conteneur).
- **Ne déploie rien.**
- **Ne contourne jamais un contrôle du validateur.** S'il bloque, ou le contenu
  est fautif, ou le contrôle est trop strict — dis-le et corrige le contrôle en
  expliquant pourquoi.
- Les comptes `p4v1c` et `Essai` portent de la vraie progression : jamais de bac
  à sable dessus. Pour une vérification connectée, `verif@atelier.test` /
  `correct-cheval-batterie-92`.
- **Le module français n'est plus en lecture seule** : l'interdiction a été
  levée le 23 août 2026. Tu peux le corriger.

## 3. La porte à passer avant chaque commit

```
npx tsc --noEmit
npm run validate:content     # 0 erreur obligatoire ; les avertissements sont un tableau de bord
npx vitest run               # 236 tests
npm run build
```
Et après toute modification de contenu : sauvegarde puis
`npx tsx prisma/seed.ts --module=<id> --prune`.

## 4. Ce qui est déjà fait — ne le refais pas

- 68 erreurs de fait en culture générale et en langues.
- 13 règles de français, dont `accord-tout-autre`, qui enseignait l'inverse du
  français sur six phrases.
- L'astuce des 280 leçons du cahier, qui était **fabriquée par le code** en
  collant les titres de sections — donc en nommant les réponses.
- Les 38 astuces écrites à la main qui donnaient la réponse.
- Une règle nouvelle : dans une notion, deux questions ne peuvent plus avoir la
  même bonne réponse (56 questions retirées).
- Trois contrôles neufs au validateur, qui chiffrent ce qui reste :
  `reponse-la-plus-longue` (521), `explication-qui-repond-ailleurs` (113),
  `astuce-qui-repond` (0).

`git log --oneline` depuis `8814230` montre le détail.

## 5. Quatre pièges qui te feront perdre du temps

1. **L'ordre des propositions en mémoire n'est pas celui du fichier.**
   `src/modules/kinds/melange.ts` permute au chargement. Pour éditer, lis
   toujours le fichier source, jamais le contenu chargé.
2. **Un marqueur `[…]` du module français ne peut contenir qu'un seul mot.**
   Quand la correction en touche deux, il faut refaire la phrase pour que le
   changement tienne en un mot. Beaucoup de corrections proposées par les
   relecteurs ignorent cette limite : adapte-les.
3. **Seule la balise `<b>` est admise** dans un énoncé ou une astuce.
4. **Deux faux positifs récurrents** : « notion sans cours » pour un slug
   `cg-neuf-*` (c'est l'effet des fusions de `cours/fusions.ts`), et « toutes
   les bonnes réponses au rang 0 » (c'est l'ordre de stockage).

## 6. Le principe de méthode qui compte le plus

**Vérifie chaque correction avant de l'appliquer.** Cinq domaines sur six ont
découvert, en seconde passe, que des corrections proposées en première passe
étaient elles-mêmes fausses — la fourchette attribuée à Henri III, la hauteur de
Khéops, la mortalité du passage du milieu, le record de perche, les forêts. Une
correction non vérifiée qui remplace une erreur par une autre est pire que
l'erreur d'origine.

Corrige **par fait, pas par ligne** : le même chiffre faux est souvent recopié
dans la question, son explication, le cours et l'astuce. Cherche toutes les
occurrences avant de corriger.

## 7. L'ordre à suivre

1. **Les 420 constats graves restants**, domaine par domaine, en commençant par
   les erreurs de fait. `francais.md` en compte 76 à lui seul, presque tous du
   même type : une correction bien formée qui produit une phrase impossible une
   fois appliquée.
2. **Le biais de longueur** — 271 notions où la bonne réponse est la plus longue
   dans plus de neuf questions sur dix. Cocher la plus longue donne 76 % de
   réussite sans rien savoir. Il faut allonger les trois leurres de chaque
   question pour qu'ils fassent le poids, sans les rendre justes. Mesure
   l'avancement avec `.travail-audit/mesure-longueur.ts` et le contrôle
   `reponse-la-plus-longue`. C'est le plus gros morceau : plusieurs milliers de
   leurres.
3. **Les 879 constats moyens**, puis les 558 mineurs.

## 8. Comment rendre compte

Commite par lots cohérents, un domaine ou un type de défaut à la fois, avec un
message qui dit **ce qui était faux et pourquoi**, pas seulement ce qui a changé.
Tiens à jour un journal dans `.travail-audit/CORRECTIONS.md` : ce qui est
appliqué, ce qui est écarté et pour quelle raison, ce qui reste. Une session
peut être coupée à tout moment — **écris au fur et à mesure, jamais à la fin**.

Le propriétaire surveille sa consommation de jetons. Annonce le coût de chaque
lot, et arrête-toi s'il te le demande sans laisser de travail non écrit.
