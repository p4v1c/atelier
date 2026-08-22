# Culture G — les notions écrites ici

Ce dossier contient **7 820 questions de quiz** écrites à la main, réparties à
l'origine en 782 notions. Avec les 2 209 questions héritées
(`heritage/culture-g/data/*.json`), le module totalise **10 029 questions**.

## Trois chantiers, dans l'ordre

**1. Les questions — terminé.** Sept mille huit cent vingt questions, aucune en
double : le validateur compare l'énoncé normalisé de toutes les questions du
dépôt, tous modules confondus, et refuse le seed au premier jumeau.

**2. Les fusions — terminé.** Le corpus avait été composé sans être confronté
aux 322 leçons du cahier d'origine, ni confronté à lui-même d'un lot à l'autre.
Résultat : des sujets en double au catalogue, alors qu'aucune question ne l'était.
Cent trente-deux notions ont donc été versées dans le chapitre qui traitait déjà
leur sujet — voir `cours/fusions.ts`. Il reste **650 notions autonomes**.

**3. Les cours — en cours.** Voir l'état ci-dessous.

## Comment retrouver ce lot

1. le slug de chaque notion commence par **`cg-neuf-`** ;
2. les exercices portent **`batch: "cg-sans-cours"`** tant que la notion n'a pas
   de cours, **`cg-cours`** ensuite ;
3. côté module, tout est regroupé dans le lot **`cg-neuf`**
   (`src/modules/culture-g/contenu.ts`).

## Où en sont les cours

```
███·················   7/44  Physique & Chimie
████················   9/50  Langue française
████················   8/42  Institutions & Économie
████················  12/58  Histoire du monde
████················  13/61  Histoire de France
████················  10/46  Gastronomie & Art de vivre
█████···············  13/49  Sciences de la vie & Terre
█████···············  12/45  Géographie
█████···············  12/45  Inventions & Technologie
████████████████████  44/45  Mythologie & Religions
████████████████████  39/39  Littérature
████████████████████  43/43  Arts & Musique
████████████████████  41/41  Cinéma & Médias
████████████████████  42/42  Sport

305 / 650 notions ont leur cours (47 %).
```

Le décompte se relit à tout moment :

```
npx tsx prisma/seed/culture-g/cours/etat.ts
npx tsx prisma/seed/culture-g/cours/etat.ts --reste "Histoire de France"
```

## Écrire un cours

Les cours vivent dans `cours/<matière>.ts`, indexés sur le slug de la notion
**sans le préfixe `cg-neuf-`**. Les fichiers de questions ne sont jamais
modifiés : `attacherCours()` fait la jonction au chargement et bascule le
`batch` des exercices.

```ts
export const COURS_SPORT: LotCours = {
  "sp-jeux-olympiques": [
    ["Titre de section", `Texte. Les paragraphes se séparent par une ligne vide.`],
    ["Avec un visuel", `Texte.`, { type: "tableau", titre: "…", colonnes: [], lignes: [] }],
    ["Avec une image", `Texte.`, { image: "hf-jeanne-darc", legende: "…" }],
  ],
};
```

Puis l'ajouter à `cours/index.ts`, qui agrège tout dans `COURS_TOUS`.

**Le périmètre d'un cours, ce sont ses dix questions** : ni plus, ni moins. Pour
les lire :

```
npx tsx -e "import { chargerContenuCultureG } from './src/modules/culture-g/contenu';
  const s = chargerContenuCultureG().find(l => l.id === 'cg-neuf').skills
    .find(x => x.slug === 'cg-neuf-<slug>');
  for (const e of s.exercises) { const p = e.payload; console.log('-', p.question, '→', p.choices[p.answerIndex]); }"
```

**Format visé :** quatre à cinq sections d'environ neuf cents signes, un ou deux
visuels quand ils apportent quelque chose — jamais pour décorer. Les visuels
disponibles sont la frise, le tableau, les chiffres, les étapes, la comparaison,
les barres, et l'image.

Les cent vingt **illustrations du cahier d'origine** sont réutilisables par leur
slug, qui est le nom de fichier dans `heritage/culture-g/data/images/` :

```
ls heritage/culture-g/data/images | sed 's/.json//'
```

Un slug inconnu lève une erreur explicite au chargement.

## Les trois contrôles à relancer

```
npm run validate:content -- --module=culture-g          # 0 erreur exigé
npx tsx prisma/seed/culture-g/cours/doublons-internes.ts # sujets en double entre lots
npx tsx prisma/seed/culture-g/cours/recouvrements.ts     # sujets doublant une leçon héritée
```

Les deux derniers doivent renvoyer zéro. S'ils signalent une paire, la réponse
n'est pas de renommer un titre mais d'ajouter une entrée dans `cours/fusions.ts` :
un seul chapitre par sujet, mieux fourni.

Ne jamais contourner le validateur : s'il signale quelque chose, soit le contenu
est fautif, soit le contrôle est trop strict — et dans ce second cas, c'est le
contrôle qu'il faut corriger, en expliquant pourquoi.

## Ensuite

Après chaque fichier :

```
npx tsc --noEmit
npm run validate:content -- --module=culture-g
npm run seed -- --prune
npx vitest run
```
