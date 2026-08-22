# Culture générale — chantier des questions sans cours

## Ce qui est fait

| Sujet | Notions | Questions |
| --- | --: | --: |
| _(rien encore)_ | | |

## Ce qui reste

Les quatorze sujets, dans l'ordre du registre `SUJETS` (src/modules/culture-g/index.ts).

## Comment reprendre

1. Lire l'en-tête de `commun.ts` : il porte les règles d'écriture et les trois
   marques qui identifient ces notions.
2. Écrire un fichier par sujet, `prisma/seed/culture-g/<slug-du-sujet>.ts`,
   exportant un tableau de `notion(...)`.
3. L'ajouter à `index.ts`.
4. `npm run validate:content -- --module=culture-g` doit rendre 0 erreur — il
   refuse le moindre énoncé en double, toutes matières confondues.
5. `npm run seed -- --prune` après un `pg_dump` dans `sauvegardes/`.
6. Mettre ce tableau à jour.

## L'étape d'après

Écrire les cours. Chaque notion `cg-neuf-*` est un thème assez étroit pour
qu'un `lesson` vienne s'y attacher sans redécoupage. Le format attendu est
celui de `LessonDocument` (voir `src/modules/types.ts`) : trois sections
rédigées au moins, et un visuel au minimum.
