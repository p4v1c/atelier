# Culture G — lot de questions sans cours

Ce dossier contient **1 820 questions de quiz** réparties en **182 notions**, écrites
sans leçon associée. Une prochaine session pourra rédiger les cours correspondants.

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

## Ce qui est fait

| Fichier | Catégorie | Notions | Questions |
| --- | --- | --- | --- |
| `histoire-france.ts` | Histoire de France | 13 | 130 |
| `histoire-monde.ts` | Histoire du monde | 13 | 130 |
| `geographie.ts` | Géographie | 13 | 130 |
| `institutions-economie.ts` | Institutions & Économie | 13 | 130 |
| `litterature.ts` | Littérature | 13 | 130 |
| `langue-francaise.ts` | Langue française | 13 | 130 |
| `arts-musique.ts` | Arts & Musique | 13 | 130 |
| `cinema-medias.ts` | Cinéma & Médias | 13 | 130 |
| `mythologie-religions.ts` | Mythologie & Religions | 13 | 130 |
| `sciences-vie.ts` | Sciences de la vie & Terre | 13 | 130 |
| `physique-chimie.ts` | Physique & Chimie | 13 | 130 |
| `sciences-tech.ts` | Inventions & Technologie | 13 | 130 |
| `gastronomie.ts` | Gastronomie & Art de vivre | 13 | 130 |
| `sport.ts` | Sport | 13 | 130 |
| **Total** | **14 catégories** | **182** | **1 820** |

Les quatorze catégories du module sont couvertes. Chaque notion porte déjà son
`title`, son `statement` (une ou deux phrases de cadrage) et son `tip` (le point
qui fait trébucher), mais **pas de `lesson`** : c'est ce qui reste à écrire.

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
attrapé une vingtaine de doublons pendant la rédaction de ce lot. Ne jamais le
contourner : si une erreur remonte, soit la question est en trop, soit le contrôle
est trop strict — et dans ce second cas, c'est le contrôle qu'il faut corriger, en
expliquant pourquoi.
