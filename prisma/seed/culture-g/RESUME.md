# Culture G — lot de questions sans cours

Ce dossier contient **7 820 questions de quiz** réparties en **782 notions**, écrites
sans leçon associée. Une prochaine session pourra rédiger les cours correspondants.

Avec les 2 209 questions héritées (`heritage/culture-g/data/*.json`), le module
culture générale totalise **10 029 questions** et **1 104 sujets**.

## Comment retrouver ce lot

Trois repères concordants :

1. le slug de chaque notion commence par **`cg-neuf-`** ;
2. chaque exercice porte **`batch: "cg-sans-cours"`** ;
3. côté module, tout est regroupé dans le lot **`cg-neuf`**
   (`src/modules/culture-g/contenu.ts`).

Pour lister les notions :

```
npx tsx -e "import {CG_NEUF} from './prisma/seed/culture-g'; CG_NEUF.forEach(n => console.log(n.slug, '·', n.title))"
```

## Ce qui est fait, par catégorie

| Catégorie | Notions | Questions |
| --- | --- | --- |
| Histoire du monde | 76 | 760 |
| Histoire de France | 75 | 750 |
| Langue française | 56 | 560 |
| Gastronomie & Art de vivre | 54 | 540 |
| Sport | 54 | 540 |
| Géographie | 53 | 530 |
| Cinéma & Médias | 53 | 530 |
| Sciences de la vie & Terre | 52 | 520 |
| Physique & Chimie | 52 | 520 |
| Institutions & Économie | 52 | 520 |
| Littérature | 52 | 520 |
| Arts & Musique | 52 | 520 |
| Mythologie & Religions | 52 | 520 |
| Inventions & Technologie | 49 | 490 |
| **Total** | **782** | **7 820** |

Les volumes sont volontairement inégaux : les catégories où le contenu vérifiable
abonde (histoire, langue) ont reçu quatre lots, les autres deux ou trois.

Un fichier par catégorie et par lot : `histoire-monde.ts`, `histoire-monde-2.ts`,
`histoire-monde-3.ts`, `histoire-monde-4.ts`, et ainsi de suite. `index.ts` les
agrège dans `CG_NEUF`.

Chaque notion porte déjà son `title`, son `statement` (une ou deux phrases de
cadrage) et son `tip` (le point qui fait trébucher), mais **pas de `lesson`** :
c'est ce qui reste à écrire.

## L'étape suivante : rédiger les cours

Chaque notion de `CG_NEUF` attend un champ `lesson`. Le modèle à suivre est celui
des leçons existantes de culture générale (`heritage/culture-g/data/*.json`) : un
document court, structuré, qui explique ce que les dix questions vérifient.

Marche à suivre :

1. choisir un fichier de sujet, par exemple `sport.ts` ;
2. pour chaque notion, lire ses dix questions : elles définissent le périmètre
   exact du cours à écrire, ni plus ni moins ;
3. ajouter le `lesson` dans l'appel à `notion()` — il faudra pour cela étendre la
   signature de `notion()` dans `commun.ts`, qui n'accepte pour l'instant que
   `statement` et `tip` ;
4. une fois toutes les notions d'une catégorie pourvues, retirer le
   `batch: LOT_SANS_COURS` de ses exercices et déplacer la catégorie hors du lot
   `cg-neuf` ;
5. relancer la barrière habituelle après chaque fichier :

```
npm run validate:content -- --module=culture-g   # doit rester à 0 erreur
npm run seed -- --prune
npx vitest run
```

## Le contrôle qui protège de la répétition

`npm run validate:content` compare l'énoncé normalisé de **toutes** les questions
du dépôt, tous modules confondus, et refuse le seed au premier jumeau. Il a
attrapé environ cent cinquante doublons pendant la rédaction de ce lot. Ne jamais
le contourner : si une erreur remonte, soit la question est en trop, soit le
contrôle est trop strict — et dans ce second cas, c'est le contrôle qu'il faut
corriger, en expliquant pourquoi.

Attention : le validateur n'affiche que les huit premières erreurs de chaque type.
Pour obtenir la liste complète des doublons d'un lot, un script jetable rend
service :

```ts
import { chargerContenuCultureG } from "./src/modules/culture-g/contenu";
import { normalizeForDedupe } from "./src/lib/tokenize";
const vus = new Map<string, string>();
for (const lot of chargerContenuCultureG())
  for (const s of lot.skills)
    for (const e of s.exercises) {
      const q = (e.payload as any).question;
      if (!q) continue;
      const k = normalizeForDedupe(q);
      if (vus.has(k)) console.log(s.slug, "::", q, "<-", vus.get(k));
      else vus.set(k, s.slug);
    }
```

Le même script, appliqué aux `title` des sujets, sert à vérifier qu'aucun sujet ne
porte le même intitulé qu'un autre : les titres sont visibles au catalogue, deux
sujets homonymes s'y verraient immédiatement.
