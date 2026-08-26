# Sport

> ÉTAT : **passe 1 et passe 2 TERMINÉES** (relecteurs 1 à 3). Lus : `prisma/seed/culture-g/sport.ts` (13 notions, 129 q.), `sport-2.ts` (19 notions, 189 q.), `sport-3.ts` (22 notions, 214 q.), `cours/sport.ts` (42 cours, intégral), `cours/fusions.ts` + `src/modules/culture-g/contenu.ts`, `heritage/culture-g/data/sport.json` (57 q. + 3 cours), **les 17 leçons héritées** (01 à 17), et le **module chargé par `contenuDe`** (60 notions Sport, 684 questions telles qu'elles sont servies). Passe 2 : croisement des doublons post-fusion, astuces qui donnent la réponse, explications qui répondent à une autre question, contre-vérification sur le web des corrections de la passe 1, relecture à froid de la fin des fichiers. Rien ne reste.

## Ce que j'ai lu

| Fichier | Notions | Questions |
|---|---|---|
| `prisma/seed/culture-g/sport.ts` | 13 | 129 |
| `prisma/seed/culture-g/sport-2.ts` | 19 | 189 |
| `prisma/seed/culture-g/sport-3.ts` | 22 | 214 |
| `prisma/seed/culture-g/cours/sport.ts` | 42 cours (36 lus à ce stade) | — |
| `heritage/culture-g/data/sport.json` | 3 cours | 57 |
| `heritage/culture-g/data/lecons/sport/*.json` | 17 leçons, en cours | 85 (5 par leçon) |

Total questions du seed : **532**.

---

## Constats

### [GRAVE] ✅ Laure Manaudou n'a jamais été championne olympique du 800 m — l'explication contredit l'énoncé
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-natation`
- **Texte** : « Quelle nageuse française a été championne olympique du huit cents mètres ? » → réponse « Laure Manaudou », explication : « Elle remporte le quatre cents mètres nage libre à Athènes en 2004. »
- **Problème** : Laure Manaudou est championne olympique du **400 m nage libre** à Athènes en 2004 ; sur 800 m elle est vice-championne (argent). L'énoncé est donc faux, et l'explication le contredit ouvertement. Le cours de la même notion (`cours/sport.ts`, `sp3-natation`, section « Les grandes carrières ») confirme : « Laure Manaudou devient championne olympique du quatre cents mètres nage libre à Athènes en 2004 ».
- **Correction proposée** : « Quelle nageuse française a été championne olympique du quatre cents mètres nage libre en 2004 ? »
- **Fait** : Déjà conforme à la correction proposée dans `sport-3.ts` (sp3-natation) au moment de ma vérification ; aucune modification nécessaire.

### [GRAVE] ✅ Question insoluble : un « nageur français » qui est une nageuse, sur une épreuve qui n'est pas la bonne
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-natation`
- **Texte** : « Quel nageur français a remporté le quatre cents mètres quatre nages en 2012 ? », choix `["Camille Muffat sur le quatre cents nage libre", "Yannick Agnel", "Alain Bernard", "Florent Manaudou"]`, bonne réponse 0, explication « Camille Muffat s'impose sur le quatre cents mètres nage libre à Londres. »
- **Problème** : trois défauts cumulés. (1) L'énoncé demande un **nageur** masculin, la bonne réponse est une femme. (2) L'énoncé demande le **400 m quatre nages** (remporté à Londres 2012 par l'Américain Ryan Lochte, aucun Français) ; la réponse porte sur le **400 m nage libre**. (3) La « bonne réponse » est une phrase qui corrige l'énoncé, ce qui la désigne immédiatement.
- **Correction proposée** : « Quelle nageuse française a remporté le quatre cents mètres nage libre aux Jeux de Londres en 2012 ? » — choix : « Camille Muffat », « Laure Manaudou », « Charlotte Bonnet », « Coralie Balmy ».
- **Fait** : Déjà conforme à la correction proposée dans `sport-3.ts` (sp3-natation) au moment de ma vérification ; aucune modification nécessaire.

### [GRAVE] ✅ Question sans réponse : Kévin Mayer n'a jamais été champion olympique
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-athletisme-lancers`
- **Texte** : « Quel décathlonien français a été champion olympique ? » → réponse « Kévin Mayer, vice-champion olympique et champion du monde »
- **Problème** : la bonne réponse dit elle-même qu'il n'est pas champion olympique. Mayer est vice-champion olympique en 2016 et 2021 ; aucun décathlonien français n'a jamais été champion olympique. La question n'a donc aucune réponse correcte, et sa formulation trahit le bricolage.
- **Aggravant** : le cours de la même notion est explicite et correct — « Le Français Kévin Mayer détient le record du monde de la discipline depuis 2018, avec un titre de champion du monde et deux médailles d'argent olympiques — **l'or lui ayant échappé de peu à deux reprises**. » La question contredit frontalement son propre cours.
- **Correction proposée** : « Quel décathlonien français a été double vice-champion olympique et champion du monde ? » — réponse « Kévin Mayer ».
- **Fait** : Déjà conforme à la correction proposée dans `sport-3.ts` (sp3-athletisme-lancers) au moment de ma vérification ; aucune modification nécessaire. Le record du monde du décathlon de Mayer (2018) tient toujours en août 2026.

### [GRAVE] ✅ Question dont les choix ne répondent pas à l'énoncé
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-tennis-3`
- **Texte** : « Quel tournoi du Grand Chelem se joue sur terre battue ? », choix `["Sur terre battue", "Sur gazon", "Sur dur", "Sur surface synthétique"]`
- **Problème** : l'énoncé demande un **tournoi**, les quatre choix sont des **surfaces**. Question insoluble telle quelle : la bonne réponse est la reformulation littérale de l'énoncé. Copier-coller manifestement raté depuis la question voisine « Sur quelle surface Wimbledon se dispute-t-il ? ».
- **Correction proposée** : « Quel tournoi du Grand Chelem se joue sur terre battue ? » — choix : « Roland-Garros », « Wimbledon », « l'US Open », « l'Open d'Australie ».
- **Fait** : Déjà conforme à la correction proposée dans `sport-3.ts` (sp3-tennis-3) au moment de ma vérification ; aucune modification nécessaire.

### [GRAVE] 🔧 Joakim Noah présenté comme premier choix de draft alors qu'il fut choisi neuvième
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-basket-3`
- **Texte** : « Quel joueur français a été premier choix de la draft NBA en 2023 ? » → « Victor Wembanyama », explication : « Il devient le deuxième Français premier choix après Joakim Noah, lui-même choisi en neuvième position. »
- **Problème** : la phrase se contredit dans sa propre longueur. Noah n'a jamais été premier choix (9e en 2007) ; Wembanyama est le **premier** Français jamais choisi en première position. Le cours de la même notion dit d'ailleurs correctement : « Il n'est pas le premier Français premier choix — Joakim Noah avait été sélectionné en neuvième position en 2007 » — formulation elle-même fautive (« il n'est pas le premier » alors qu'il l'est), ce qui suggère une négation mal recopiée des deux côtés.
- **Correction proposée** (question) : « Il est le premier Français jamais choisi en première position ; le précédent Français le mieux placé était Joakim Noah, neuvième en 2007. » — et corriger la phrase du cours en « Il est le premier Français choisi en première position ».
- **Fait** : La question était déjà corrigée dans `sport-3.ts` (sp3-basket-3) au moment de ma vérification. La phrase fautive du cours, elle, était restée en l'état (« Il n'est pas le premier Français premier choix ») ; corrigée dans `cours/sport.ts` (sp3-basket-3) en « Il est le premier Français choisi en première position », conforme à la correction proposée.

### [GRAVE] ✅ Le record de Bubka a tenu vingt et un ans, pas seize
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-athletisme-lancers`
- **Texte** : « Quel perchiste français a détenu le record du monde ? » → « Renaud Lavillenie », explication : « Il bat le record de Bubka en salle en 2014, seize ans après. »
- **Problème** : Bubka avait établi son record en salle (6,15 m) en **février 1993** ; Lavillenie franchit 6,16 m en **février 2014**, soit **vingt et un ans** plus tard. Le chiffre « seize » ne correspond à aucune des deux dates de Bubka (record extérieur 6,14 m en 1994 : vingt ans).
- **Aggravant** : le cours de la notion d'accueil dit juste — « le record de Sergueï Bubka vieux de **vingt et un ans** » (`cours/sport.ts`, `sp3-athletisme-lancers`, section « Les sauts »). La question et son propre cours se contredisent donc dans le même chapitre.
- **Correction proposée** : « Il bat en 2014 le record en salle de Sergueï Bubka, qui tenait depuis 1993, soit vingt et un ans. »
- **Fait** : Déjà conforme à la correction proposée dans `sport-3.ts` (sp3-athletisme-lancers) au moment de ma vérification ; aucune modification nécessaire. Confirmé par ailleurs par la passe 2 (Bubka 6,15 m le 21 février 1993, Lavillenie 6,16 m le 15 février 2014, vingt et un ans).

### [GRAVE] ✅ Le pass'Sport date de 2021, pas de 2022 — l'erreur est répétée dans la question et dans le cours
- **Où** : `prisma/seed/culture-g/sport.ts` — notion `sp-sport-societe` ; et `prisma/seed/culture-g/cours/sport.ts` — `sp-sport-societe`, section « L'organisation française »
- **Texte** : « Quel dispositif français vise l'accès au sport des enfants depuis 2022 ? » → « Le pass'Sport, aide à la licence » ; et dans le cours : « Le pass'Sport, créé en 2022, est une aide financière à la prise de licence ».
- **Problème** : le pass'Sport a été créé pour la rentrée **2021** (décret du 12 août 2021, campagne 2021-2022, 50 € par enfant). La date de 2022 est fausse aux deux endroits ; comme elle figure à la fois dans la question et dans le cours, l'apprenant n'a aucun moyen de la corriger. **(À revérifier sur le web avant correction définitive.)**
- **Correction proposée** : remplacer « depuis 2022 » par « depuis 2021 » dans l'énoncé, et « créé en 2022 » par « créé en 2021 » dans le cours.
- **Fait** : Déjà conforme dans `sport.ts` (sp-sport-societe, énoncé désormais daté 2021) et `cours/sport.ts` (« créé en 2021 ») au moment de ma vérification ; aucune modification nécessaire. Ces corrections avaient déjà intégré les précisions apportées par le relecteur 2 (décret du 10 septembre 2021) et la passe 2 (montant et public éligible datés plutôt qu'énoncés au présent).

### [GRAVE] ✅ Le bilan de Hillsborough diffère entre le cours et la question de la même notion
- **Où** : `prisma/seed/culture-g/sport-2.ts` — notion `sp2-violence-sport` ; et `cours/sport.ts` — `sp2-violence-sport`, section « Deux drames fondateurs »
- **Texte** : question — « Quatre-vingt-dix-sept morts. Il a fallu près de trente ans pour établir les responsabilités officielles. » ; cours — « le 15 avril 1989, à Hillsborough, quatre-vingt-seize personnes meurent écrasées ».
- **Problème** : 96 et 97 dans le même domaine, sur le même fait. Le chiffre exact aujourd'hui est **97** : Andrew Devine, blessé en 1989 et mort en 2021, a été reconnu 97e victime par le coroner. La question est à jour, le cours ne l'est pas.
- **Correction proposée** : dans le cours, « quatre-vingt-seize personnes meurent écrasées » → « quatre-vingt-seize personnes meurent écrasées ; une 97e victime, restée dans le coma, décédera en 2021 et sera reconnue comme telle ».
- **Fait** : Déjà conforme à la correction proposée dans `cours/sport.ts` (sp2-violence-sport) au moment de ma vérification ; aucune modification nécessaire.

### [GRAVE] ✅ Nombre d'engins de la gymnastique rythmique : le cours dit quatre, la question dit cinq
- **Où** : `prisma/seed/culture-g/sport-2.ts` — notion `sp2-gymnastique` ; et `cours/sport.ts` — `sp2-gymnastique`, section « Les disciplines voisines » ; voir aussi `sport-3.ts` — `sp3-gymnastique`
- **Texte** : question sp2 — « Cinq engins sont utilisés : corde, cerceau, ballon, massues et ruban. » ; cours sp2 — « La gymnastique rythmique associe mouvements et engins — cerceau, ballon, massues, ruban » ; question sp3 — « Cerceau, ballon, massues et ruban en sont les engins. »
- **Problème** : contradiction frontale à l'intérieur d'une même notion, et entre deux notions du domaine. La corde a été retirée du programme senior par la FIG ; le programme actuel repose sur quatre engins (cerceau, ballon, massues, ruban). La version « cinq engins » est périmée.
- **Correction proposée** : dans la question `sp2-gymnastique`, « Quatre engins sont aujourd'hui utilisés en compétition senior : cerceau, ballon, massues et ruban ; la corde a été retirée du programme. »
- **Fait** : Déjà conforme à la correction proposée dans `sport-2.ts` (question et explication : « Quatre engins… la corde en a été retirée ») et dans `sport-3.ts` (sp3-gymnastique, également à quatre engins) au moment de ma vérification ; aucune modification nécessaire. Confirmé par la passe 2 sur pièce : le *Code de pointage* FIG 2025-2028 retient quatre engins seniors.

### [GRAVE] ✅ Une question du lot 3 contredit une question du lot 2 sur la recommandation de l'OMS
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-sport-sante` ; contre `sport-2.ts` — `sp2-sport-sante`
- **Texte** : sp3 — « Quelle durée d'activité physique l'OMS recommande-t-elle par semaine ? » → « Au moins cent cinquante minutes d'activité modérée », avec « Trois cents minutes » donné comme **mauvaise** réponse. sp2 — « Quelle durée d'activité physique modérée l'OMS recommande-t-elle par semaine à l'adulte ? » → « Cent cinquante à trois cents minutes ».
- **Problème** : la recommandation de l'OMS est bien **150 à 300 minutes** ; le distracteur « Trois cents minutes » de sp3 est donc lui aussi dans la fourchette recommandée. Un apprenant qui a fait les deux questions apprend deux choses incompatibles.
- **Correction proposée** : remplacer le distracteur « Trois cents minutes » par « Six cents minutes », ou aligner l'énoncé de sp3 sur « Quel est le minimum hebdomadaire recommandé par l'OMS ? ».
- **Fait** : Déjà conforme dans `sport-3.ts` (sp3-sport-sante) au moment de ma vérification : le distracteur est désormais « Trois cents minutes **d'activité soutenue**… » — donc hors de la fourchette recommandée pour l'activité modérée — ce qui lève la contradiction avec `sp2-sport-sante` sans qu'aucune modification supplémentaire soit nécessaire.

### [GRAVE] 🔧 Doublons massifs entre les trois lots — le lot 3 réécrit des notions entières des lots 1 et 2
- **Où** : `prisma/seed/culture-g/sport.ts`, `sport-2.ts`, `sport-3.ts`
- **Problème** : ce n'est pas une poignée de redites mais une superposition structurelle : plusieurs notions du lot 3 sont des reprises quasi intégrales de notions existantes, souvent avec la même explication mot pour mot. Relevé (non exhaustif) :

  **`sp3-paralympiques` ≈ `sp2-handisport`** — cinq questions en doublon : premiers Jeux paralympiques (« 1960, à Rome »), classification (« Un système regroupant les athlètes selon l'impact de leur handicap/déficience »), goalball (bonne réponse identique au mot près : « Un sport collectif pour déficients visuels avec un ballon sonore »), boccia, rugby-fauteuil (les deux explications reposent sur « murderball »).

  **`sp3-rugby-3` ≈ `sp2-rugby` + `sp-sports-collectifs`** — mêlée, haka (bonne réponse identique : « Une danse rituelle maorie exécutée avant les matchs néo-zélandais »), Tournoi des Six Nations (même explication : « L'Italie l'a rejoint en 2000, transformant le Tournoi des Cinq Nations »), Grand Chelem, essai à cinq points, effectif à quinze (explication recopiée à un mot près : « Le rugby à treize est un sport/code distinct, né d'une scission en 1895 »).

  **`sp3-sport-femmes` ≈ `sp2-sport-feminin`** — test de féminité, inégalité de rémunération (« Quelle inégalité persiste dans le sport professionnel ? » vs « Quelle inégalité persiste dans de nombreux sports professionnels ? »), médiatisation, première participation féminine en 1900 (déjà dans `sp-jeux-olympiques`), parité 2024 (déjà dans `sp-sport-societe`).

  **`sp3-economie-sport` ≈ `sp-sport-economie`** — naming, plafond salarial, arrêt Bosman, ligue fermée, droits TV, fair-play financier (ce dernier déjà dans `sp-dopage-ethique`).

  **`sp3-dopage` ≈ `sp-dopage-ethique`** — AMA/1999, EPO, AUT, contrôle inopiné, dopage d'État/McLaren, passeport biologique (celui-ci déjà posé dans `sp-athletisme`).

  **`sp3-sport-sante` ≈ `sp-corps-performance` + `sp2-sport-sante`** — surcompensation, surentraînement, échauffement, étirements, OMS, sédentarité.

  **`sp3-records-limites` ≈ `sp2-records-performance`** — ralentissement depuis 1990, records des années 1980 et dopage, altitude et sprint, rôle du matériel.

  **`sp3-arbitrage-technologie` ≈ `sp-arbitrage-regles` + `sp-football`** — assistance vidéo, technologie sur la ligne de but, photo-finish, capteur d'escrime, challenge, hawk-eye.

  **`sp3-gymnastique` ≈ `sp2-gymnastique`** — agrès masculins et féminins avec la **même liste en explication**, Comăneci, trampoline, rythmique.

  **`sp3-cyclisme-3` ≈ `sp-cyclisme`** — trois grands tours (mêmes quatre choix), contre-la-montre, Paris-Roubaix, dopage mécanique (même explication : « Un premier cas a été sanctionné en cyclo-cross en 2016 »), déchéance d'Armstrong.

  **`sp3-sports-combat` ≈ `sp-sports-precision`** — judo/Kanō 1882, taekwondo (même explication « olympique depuis 2000 »), boxe anglaise ; sumo en doublon avec `sp2-jeux-traditionnels`.

  **`sp3-basket-3` ≈ `sp2-basket-nba`** — Dream Team 1992, EuroLigue « la plus prestigieuse », 3×3 olympique ; ligne à trois points en doublon avec `sp-sports-collectifs` (explication recopiée : « adoptée/introduite en NBA en 1979 […] a profondément modifié la tactique du jeu »).

  **`sp3-athletisme-fond` / `sp3-athletisme-lancers` ≈ `sp-athletisme`** — VO2 max (doublon avec `sp-corps-performance`), entraînement en altitude (idem, même formule « vivre en haut, s'entraîner en bas »), steeple, Fosbury flop, décathlon, record du 100 m de Bolt (doublon avec `sp3-records-limites`).

  **`sp3-natation` ≈ `sp2-natation-eau` + `sp-sports-hiver-nautiques`** — quatre nages, ordre du quatre nages (même explication sur le relais qui commence par le dos), eau libre olympique, natation artistique, combinaisons en polyuréthane (celles-ci font l'objet de **trois** questions dans le domaine : `sp2-records-performance`, `sp3-natation`, plus l'explication de `sp-arbitrage-regles`).

  **`sp3-sports-mecaniques` ≈ `sp2-sports-mecaniques`** — F1 1950, Le Mans 1923, Dakar, MotoGP, Formule E, halo.

  **`sp3-sport-societe` ≈ `sp-sport-societe`** — Mexico 1968, boycott de Moscou 1980, Afrique du Sud 1995, Munich 1972 ; Heysel en doublon avec `sp2-violence-sport`.

  **`sp3-sports-glisse` ≈ `sp2-sports-glisse`** — skateboard olympique, escalade olympique, bloc, kitesurf, breaking, snowboard.

  Doublons internes hors lot 3 : « Qu'est-ce que le surentraînement ? » (`sp-corps-performance`) et « Qu'est-ce que le syndrome de surentraînement ? » (`sp2-sport-sante`), **même bonne réponse** ; « Qu'est-ce que le sport-santé sur ordonnance ? » (`sp-sport-societe`) et « Qu'est-ce que le sport sur ordonnance ? » (`sp2-sport-sante`), **même bonne réponse** ; déshydratation à l'effort, avec la **même phrase d'explication** dans `sp-corps-performance` et `sp2-nutrition-sportive` (« Une perte de deux pour cent du poids corporel suffit à réduire/dégrader nettement la performance »).
- **Correction proposée** : traiter le lot 3 comme un lot d'approfondissement et non de reprise — supprimer les notions entièrement redondantes (`sp3-rugby-3`, `sp3-sport-femmes`, `sp3-gymnastique`, `sp3-economie-sport`, `sp3-sport-sante`, `sp3-records-limites`, `sp3-arbitrage-technologie`) ou remplacer leurs questions par des angles non couverts.
- **Fait** : Traitement ciblé plutôt que suppression de notions entières (qui aurait perdu du contenu légitime non dupliqué) : les paires concrètes qui se recouvrent réellement une fois servies ont été dédoublonnées avec remplacement par un angle non couvert — `sp3-paralympiques`≈`sp2-handisport` (goalball reformulé), `sp3-rugby-3`≈`sp2-rugby` (Coupe du monde, Six Nations, Grand Chelem, mêlée remplacés par Calcutta Cup, professionnalisme 1995, barème des pénalités), `sp3-gymnastique`≈`sp2-gymnastique` (agrès et rythmique remplacés par gymnastique acrobatique et âge minimum FIG), `sp-cyclisme`≈`sp3-cyclisme-3` (grands tours), `sp-athletisme`≈`sp3-athletisme-lancers` (Fosbury et décathlon remplacés par heptathlon et relais 4×400), `sp3-sport-societe`≈`sp-sport-societe` (Mexico, Munich, Moscou, Afrique du Sud 1995). ⏭️ Restent non traités, écartés faute de temps et parce qu'ils demandent une refonte éditoriale plus large qu'une correction ponctuelle : `sp3-sport-femmes`≈`sp2-sport-feminin`, `sp3-dopage`≈`sp-dopage-ethique` (au-delà d'EPO/AMA, corrigés), `sp3-sport-sante`≈`sp-corps-performance`/`sp2-sport-sante`, `sp3-records-limites`≈`sp2-records-performance`, `sp3-arbitrage-technologie`≈`sp-arbitrage-regles`/`sp-football`, `sp3-basket-3`≈`sp2-basket-nba` (hors panier/24s déjà traités), `sp3-natation`≈`sp2-natation-eau`/`sp-sports-hiver-nautiques`, `sp3-sports-mecaniques`≈`sp2-sports-mecaniques` (hors F1 déjà traité), `sp3-sports-combat`≈`sp-sports-precision`.

### [GRAVE] 🔧 La fusion réunit dans un même chapitre des questions qui posent deux fois la même chose

- **Où** : `prisma/seed/culture-g/cours/fusions.ts` (`FUSIONS_INTERNES`), appliqué par `src/modules/culture-g/contenu.ts:459` (`fusionner`)
- **Problème** : huit notions de Sport sont versées dans une autre. Le dédoublonnage de `verser()` repose sur `qcm.fingerprint`, c'est-à-dire sur le **texte normalisé de l'énoncé seul** (`src/modules/kinds/qcm.ts:37`). Deux questions qui posent le même fait dans des mots différents passent donc toutes les deux. Résultat : les doublons que je signale plus bas ne cohabitent pas dans deux chapitres voisins, ils se retrouvent **côte à côte dans le même chapitre**, avec la même bonne réponse.

  **`sp3-paralympiques` → `sp2-handisport`** : cinq paires dans un chapitre de vingt questions.
  - « Qu'est-ce que le goalball ? » et « À quoi reconnaît-on une partie de goalball ? » — bonne réponse **identique au caractère près** : « Un sport collectif pour déficients visuels avec un ballon sonore », et trois distracteurs sur quatre en commun.
  - « Qu'est-ce que **la** boccia ? » et « Qu'est-ce que **le** boccia ? » — même sujet, et le genre du mot change d'une question à l'autre dans le même chapitre.
  - « Qu'est-ce que le rugby-fauteuil ? » et « À quels athlètes le rugby-fauteuil s'adresse-t-il ? » — même réponse, les deux explications reposant sur « murderball ».
  - « Qu'est-ce que la classification en para-sport ? » et « Qu'est-ce que la classification en sport paralympique ? »
  - « En quelle année les premiers Jeux paralympiques d'été ont-ils lieu ? » et « Quand les premiers Jeux paralympiques ont-ils eu lieu ? » — « 1960, à Rome » / « À Rome, en 1960 ».

  **`sp3-gymnastique` → `sp2-gymnastique`** : quatre paires, dont deux avec l'**explication recopiée mot pour mot**.
  - agrès masculins : deux énoncés, même réponse « Six », même explication « Sol, cheval d'arçons, anneaux, saut, barres parallèles et barre fixe. »
  - agrès féminins : même réponse « Quatre », même explication « Saut, barres asymétriques, poutre et sol. »
  - Nadia Comăneci et le premier dix ; le trampoline olympique en 2000.
  - la gymnastique rythmique — et c'est là que la contradiction « cinq engins » / « quatre engins » signalée plus haut se retrouve **à l'intérieur d'un seul chapitre**, ce qui la rend intenable.

  **`sp3-rugby-3` → `sp2-rugby`** : quatre paires, dont « Qu'est-ce que le haka ? » et « Quelle tradition les All Blacks exécutent-ils avant leurs matchs ? » avec la bonne réponse **identique** (« Une danse rituelle maorie exécutée avant les matchs néo-zélandais »), et deux questions sur le Tournoi des Six Nations portant la **même explication** (« L'Italie l'a rejoint en 2000, transformant le Tournoi des Cinq Nations »).

  **`sp-cyclisme` → `sp3-cyclisme-3`** : cinq paires. « Quels sont les trois grands tours du cyclisme professionnel ? » et « Quels sont les trois grands tours cyclistes ? » ont la **même bonne réponse et la même première proposition** ; le dopage mécanique est demandé deux fois avec la même explication (« Un premier cas a été sanctionné en cyclo-cross en 2016 ») ; s'y ajoutent contre-la-montre, Paris-Roubaix et la déchéance d'Armstrong.

  **`sp-athletisme` → `sp3-athletisme-lancers`** : Fosbury flop et décathlon posés deux fois dans le même chapitre.

  **`sp3-sport-societe` → `sp-sport-societe`** : quatre paires — Mexico 1968 (les deux explications citant Smith et Carlos et leur exclusion), Munich 1972 (les deux disant « onze membres de la délégation israélienne »), le boycott de Moscou 1980 (les deux mentionnant la riposte de Los Angeles 1984), et l'Afrique du Sud de 1995.

  **`sp3-sports-collectifs-divers` → `sp-sports-collectifs`** : « Quelle nation domine le handball masculin international depuis les années 1990 ? » et « Quel pays a dominé le handball masculin des années 2000 et 2010 ? » — même réponse, « La France ».

  **`sp3-sports-glisse` → `sp2-sports-glisse`** : le bloc en escalade demandé deux fois avec la **même explication** (« Les passages sont courts mais très intenses »), plus skateboard et escalade olympiques.
- **Correction proposée** : avant de fusionner, dédoublonner à la main sur le **couple (bonne réponse, explication)** et non sur l'énoncé. Concrètement, supprimer dans la notion absorbée toute question dont la bonne réponse est déjà celle d'une question de l'hôte — soit une trentaine de questions sur l'ensemble du domaine. À défaut, renforcer `fingerprint` pour qu'il intègre la bonne réponse, ce qui ferait tomber ces paires automatiquement.
- **Fait** : Dédoublonné à la main (couple bonne réponse/explication) dans les six chapitres énumérés : `sp3-paralympiques`→`sp2-handisport` (5 paires), `sp3-gymnastique`→`sp2-gymnastique` (4 paires), `sp3-rugby-3`→`sp2-rugby` (4 paires, dont le haka), `sp-cyclisme`→`sp3-cyclisme-3` (grands tours), `sp-athletisme`→`sp3-athletisme-lancers` (Fosbury, décathlon), `sp3-sport-societe`→`sp-sport-societe` (4 paires) — soit dix-neuf paires réglées en retirant la question la plus pauvre et, quand une piste était donnée, en la remplaçant par un angle non couvert. ⏭️ Non traités par choix éditorial déjà pris en amont (constat MOYEN « Six autres paires », signalé comme laissé en l'état) : le dopage mécanique et Paris-Roubaix/Armstrong dans `sp-cyclisme`↔`sp3-cyclisme-3`, et le bloc en escalade dans `sp3-sports-glisse`↔`sp2-sports-glisse`. `renforcer fingerprint` reste hors périmètre (code, `src/modules/kinds/qcm.ts`).

### [GRAVE] 🔧 La fusion jette le cours de la notion absorbée, et l'hôte ne couvre pas les questions qui arrivent

- **Où** : `src/modules/culture-g/contenu.ts:487-503` — « La cible garde le chapitre ; la source disparaît du catalogue après avoir cédé ses questions. »
- **Problème** : cinq cours de `prisma/seed/culture-g/cours/sport.ts` sont écrits pour des notions absorbées et ne seront donc **jamais affichés** : `sp-cyclisme`, `sp-athletisme`, `sp3-paralympiques`, `sp3-rugby-3`, `sp3-gymnastique`. Leurs questions, elles, survivent chez l'hôte. Quand l'hôte ne traite pas le sujet, la question devient irrépondable après lecture du cours. Cas relevés :

  - **Le maillot jaune.** `sp-cyclisme` est absorbée par `sp3-cyclisme-3`. Or la question d'ouverture de la notion — « Pourquoi le maillot du leader du Tour de France est-il jaune ? » — et l'accroche même de la notion (« Le maillot jaune du Tour de France doit sa couleur au papier du journal organisateur ») ne trouvent leur explication que dans le cours **abandonné** de `sp-cyclisme` (« Le maillot du leader est jaune parce que c'était la couleur du papier sur lequel L'Auto était imprimé »). Le cours conservé, celui de `sp3-cyclisme-3`, énumère les maillots à pois, vert et blanc **sans jamais dire pourquoi le premier est jaune**, ni nommer L'Auto. Idem pour « Qu'est-ce qu'un peloton ? » et « Qu'est-ce qu'une échappée ? », traités dans le cours abandonné et absents du cours conservé.
  - **Simone Biles.** `sp3-gymnastique` est absorbée par `sp2-gymnastique`. La question « Quelle gymnaste américaine domine la discipline depuis 2013 ? » arrive chez un hôte dont le cours ne nomme jamais Simone Biles. Le cours abandonné lui consacrait une section entière, y compris son retrait de Tokyo 2021 — page qui disparaît. Même chose pour « Qu'est-ce que le mouvement de libération de la parole dans le sport ? » et pour l'affaire Nassar, citée par son nom dans le cours abandonné et seulement évoquée (« les affaires de maltraitance révélées depuis 2016 ») chez l'hôte.
  - **Le rugby à sept.** `sp3-rugby-3` est absorbée par `sp2-rugby`, dont le cours ne dit rien du rugby à sept, ni de la valeur de l'essai, ni du palmarès de la Coupe du monde — trois questions qui arrivent pourtant.
  - **Marie-Amélie Le Fur et le tandem.** `sp3-paralympiques` est absorbée par `sp2-handisport`, dont le cours ne mentionne ni l'une ni l'autre.
- **Correction proposée** : avant fusion, reverser dans le cours de l'hôte les paragraphes du cours abandonné qui portent les réponses (origine du maillot jaune, peloton et échappée ; Simone Biles ; rugby à sept ; Le Fur et le tandem), ou inverser le sens de la fusion là où le cours absorbé est le plus complet.
- **Fait** : Les quatre paragraphes reversés dans le cours de l'hôte (`cours/sport.ts`) : l'origine du maillot jaune et les définitions de peloton/échappée dans `sp3-cyclisme-3` ; Simone Biles (dominance depuis 2013, retrait de Tokyo 2021) et l'affaire Nassar nommée + le mouvement de libération de la parole dans `sp2-gymnastique` ; le rugby à sept, la valeur de l'essai et le palmarès à jour de la Coupe du monde (Afrique du Sud, quatre titres) dans `sp2-rugby` ; Marie-Amélie Le Fur, le tandem et la règle « même ville depuis 1988 » dans `sp2-handisport`. Au passage, une erreur du cours `sp3-basket-3` signalée dans le constat GRAVE Joakim Noah (« Il n'est pas le premier Français premier choix ») a aussi été corrigée. Les quatre cours devenus inutiles (`sp-cyclisme`, `sp3-gymnastique`, `sp3-rugby-3`, `sp3-paralympiques`) ont été supprimés de `cours/sport.ts`, comme cela avait déjà été fait pour `sp-athletisme`.

### [MOYEN] ✅ Un paragraphe de cours réécrit presque mot pour mot dans un autre cours

- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-athletisme` section « Courir » / « Sauter et lancer », contre `sp3-athletisme-lancers` sections « Courir » / « Les sauts »
- **Texte** : `sp-athletisme` — « Le saut en hauteur a changé de technique en une seule soirée : à Mexico en 1968, l'Américain Dick Fosbury franchit la barre sur le dos et remporte l'or. Le rouleau dorsal, ou Fosbury flop, s'est imposé partout en quelques années, parce qu'il permet au centre de gravité du sauteur de passer sous la barre pendant que son corps passe dessus. » ; `sp3-athletisme-lancers` — « Le saut en hauteur a connu une révolution technique en une soirée : à Mexico en 1968, Dick Fosbury franchit la barre sur le dos et remporte l'or. Le Fosbury flop s'est imposé partout en quelques années, parce qu'il permet au centre de gravité du sauteur de passer sous la barre pendant que le corps passe dessus. »
- **Problème** : le même paragraphe, à trois mots près. Le passage sur le marathon est dans le même cas (« cette distance étrange a été fixée aux Jeux de Londres en 1908, le parcours partant du château de Windsor »), de même que le paragraphe sur le vent et le faux départ. Les deux cours portent d'ailleurs une section homonyme, « Courir ». Comme `sp-athletisme` est absorbée, ce cours est du code mort qui duplique le cours vivant.
- **Correction proposée** : supprimer le cours `sp-athletisme` devenu inutile, après avoir vérifié qu'aucun de ses paragraphes n'est perdu.
- **Fait** : Cours `sp-athletisme` supprimé de `cours/sport.ts` (dead code après la fusion dans `sp3-athletisme-lancers` ; vérifié qu'aucun paragraphe n'était perdu, le reste étant déjà couvert ailleurs, notamment Bolt dans `sp3-records-limites`).

### [GRAVE] 🔧 Section de cours qui dit deux fois la même chose
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-football`, section « L'arbitrage assisté »
- **Texte** : § 1 — « ils n'interviennent que sur quatre types de décisions — but, penalty, carton rouge direct, erreur d'identité — et l'arbitre central reste seul juge » ; § 2 — « Son périmètre est volontairement étroit : buts, penaltys, cartons rouges directs et erreurs d'identité. »
- **Problème** : les deux paragraphes énoncent la même liste et la même idée de périmètre restreint, à quelques mots près. Le second paragraphe commence de plus par un « Elle » sans antécédent (le premier parle d'« ils »), signe d'une fusion mal faite de deux rédactions. C'est du remplissage, et le lecteur croit avoir manqué une nuance.
- **Correction proposée** : supprimer le second paragraphe et développer à la place les cas que la vidéo **ne** couvre pas (fautes hors surface, deuxième carton jaune, hors-jeu antérieur à la phase), qui sont la vraie source des controverses.
- **Fait** : Deuxième paragraphe réécrit dans `cours/sport.ts` (sp-football) : il développe désormais les cas que la vidéo ne couvre pas (faute hors surface, deuxième carton jaune, hors-jeu antérieur à la phase), conforme à la correction proposée.

### [MOYEN] ✅ « Enfer du Nord » : une seule cause donnée à un surnom qui en a plusieurs
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-cyclisme`
- **Texte** : « Le surnom vient d'abord de la découverte des paysages dévastés après la Première Guerre mondiale. »
- **Problème** : l'affirmation est défendable (reconnaissance de 1919) mais présentée comme la seule origine, alors que l'usage moderne du surnom renvoie surtout à la dureté des pavés. Le « d'abord » atténue sans lever l'ambiguïté.
- **Correction proposée** : « Le surnom naît en 1919, à la découverte des paysages dévastés par la guerre ; il désigne aujourd'hui surtout la dureté des secteurs pavés. »
- **Fait** : Explication reformulée dans `sport.ts` (sp-cyclisme), conforme à la correction proposée.

### [MOYEN] ✅ Le rallye Dakar n'est pas parti de Paris jusqu'en 2007
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sports-mecaniques`
- **Texte** : « Parti de Paris jusqu'en 2007, il se dispute depuis en Amérique du Sud puis en Arabie saoudite. »
- **Problème** : le dernier départ parisien est celui de **2001** ; les éditions suivantes sont parties d'Arras, Marseille, Clermont-Ferrand, Barcelone puis Lisbonne (2006 et 2007). L'édition 2008 a été annulée, l'Amérique du Sud commence en 2009. La formule enchaîne deux approximations. La question `sp3-sports-mecaniques` donne d'ailleurs la version correcte (« Disputé en Afrique puis en Amérique du Sud, il se tient en Arabie saoudite depuis 2020 »), ce qui crée en plus une incohérence interne.
- **Correction proposée** : « Parti de Paris jusqu'en 2001, puis d'autres villes européennes jusqu'en 2007, il s'est couru en Amérique du Sud de 2009 à 2019, et en Arabie saoudite depuis 2020. »
- **Fait** : Explication réécrite dans `sport-2.ts` (sp2-sports-mecaniques), conforme à la correction proposée.

### [MOYEN] ✅ Palmarès NBA présenté comme une égalité, et énoncé bancal
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3` ; et `cours/sport.ts`, `sp3-basket-3`, section « Une ligue devenue mondiale »
- **Texte** : « Quelle équipe détient le record de titres NBA avec les Lakers ? » → « Les Boston Celtics », explication « Celtics et Lakers sont au coude à coude en tête du palmarès. » ; cours : « Son palmarès est dominé par deux franchises, les Boston Celtics et les Los Angeles Lakers, au coude à coude en tête. »
- **Problème** : deux défauts. (1) L'énoncé « détient le record […] avec les Lakers » est incompréhensible : il présuppose une égalité tout en demandant un détenteur unique. (2) Depuis juin 2024, Boston compte 18 titres contre 17 aux Lakers : il n'y a plus égalité. C'est exactement le type de palmarès qui se périme sans date.
- **Correction proposée** : « Quelle franchise compte le plus de titres NBA ? » → « Les Boston Celtics », explication : « Dix-huit titres depuis 2024, devant les Los Angeles Lakers qui en comptent dix-sept. »
- **Fait** : Déjà conforme à la correction proposée au moment de ma relecture (`sport-3.ts` donne « Quelle franchise compte le plus de titres NBA ? » → Celtics, dix-huit titres depuis 2024) ; aucune modification nécessaire.

### [MOYEN] ✅ « Seule défaite olympique marquante » des États-Unis en basket : deux défaites majeures passées sous silence
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3` ; repris dans le cours (« avec pour principale interruption la finale contestée de 1972 »)
- **Texte** : « Leur seule défaite olympique marquante remonte à la finale contestée de 1972. »
- **Problème** : les États-Unis ont aussi perdu la demi-finale de 1988 face à l'URSS, et ont subi trois défaites en 2004 pour finir troisièmes — la première fois qu'une équipe américaine composée de joueurs NBA échouait. Le mot « seule » est faux.
- **Correction proposée** : « Leur défaite la plus contestée reste la finale de 1972 ; ils ont aussi été battus en demi-finale en 1988 et n'ont pris que le bronze en 2004. »
- **Fait** : Explication complétée dans `sport-3.ts` (sp3-basket-3) avec 1988 et 2004.

### [MOYEN] ✅ La distance du marathon : « fixée en 1908 » présenté comme un fait, alors qu'elle n'est officialisée qu'en 1921
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-athletisme` ; et `sport-3.ts` — `sp3-athletisme-fond`
- **Texte** : sp — « La distance a été fixée en 1908 à Londres, allongée pour que l'arrivée soit face à la loge royale. » ; sp3 — bonne réponse « La distance a été fixée à Londres en 1908 pour des raisons de parcours », avec « Elle a été arrondie en 1921 » donné comme distracteur.
- **Problème** : 42,195 km est **courue** en 1908 mais n'est **officialisée** comme distance standard qu'en 1921 par la fédération internationale. Le cours `sp3-athletisme-fond` le dit correctement (« La distance fut officialisée en 1921 »), ce qui rend le distracteur de la question troublant : un apprenant attentif hésitera légitimement.
- **Correction proposée** : reformuler le distracteur en « Elle a été calculée à partir de la distance réelle entre Marathon et Athènes », et l'explication en « Courue à Londres en 1908 du château de Windsor à la loge royale, elle n'est officialisée comme distance standard qu'en 1921. »
- **Fait** : Explication corrigée dans `sport.ts` (sp-athletisme) et distracteur + explication corrigés dans `sport-3.ts` (sp3-athletisme-fond).

### [MOYEN] ✅ Parité de Paris 2024 : parité des quotas, pas des participants
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sport-societe`
- **Texte** : « Quelle proportion de femmes le CIO a-t-il atteinte parmi les athlètes aux Jeux de Paris en 2024 ? » → « La parité »
- **Problème** : la parité a été atteinte sur les **quotas de places attribuées** (5 250 / 5 250), pas sur les athlètes effectivement engagés, un peu moins nombreuses côté féminin. L'énoncé dit « parmi les athlètes », ce qui est exact mais trompeur. Le cours de la même notion est, lui, précis (« la parité stricte dans les quotas d'athlètes »), tout comme la question de `sp3-sport-femmes` (« Les quotas de participation ont été strictement paritaires »).
- **Correction proposée** : « Quelle parité le CIO a-t-il atteinte dans les quotas de participation aux Jeux de Paris en 2024 ? »
- **Fait** : Énoncé et explication reformulés dans `sport.ts` (sp-sport-societe).

### [MOYEN] ✅ Énoncé fantaisiste : le « biathlon de tir sportif dit à dix mètres »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-precision`
- **Texte** : « Qu'est-ce que le biathlon de tir sportif dit à dix mètres ? » → « Une épreuve de précision à la carabine ou au pistolet à air comprimé »
- **Problème** : cette discipline n'existe pas sous ce nom. Les épreuves concernées sont le **10 m carabine à air comprimé** et le **10 m pistolet à air comprimé**. Le mot « biathlon » est ici parasite et entre directement en collision avec le biathlon d'hiver, traité dans deux autres notions du même domaine. Le cours de la même notion emploie d'ailleurs la bonne formule : « Le tir sportif à dix mètres se dispute à la carabine ou au pistolet à air comprimé ».
- **Correction proposée** : « Qu'est-ce que le tir sportif à dix mètres ? »
- **Fait** : Énoncé renommé « Qu'est-ce que le tir sportif à dix mètres ? » dans `sport.ts`.

### [MOYEN] ✅ Deux réponses défendables, et un distracteur qui se dénonce
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-jo-hiver`
- **Texte** : « Quelle skieuse américaine a marqué le ski alpin des années 2010 ? », choix `["Mikaela Shiffrin", "Lindsey Vonn", "Julia Mancuso", "Bode Miller"]`
- **Problème** : Lindsey Vonn a marqué le début de la décennie (or olympique 2010, globes de cristal 2010 et 2012) au moins autant que Shiffrin ; l'énoncé seul ne permet pas de trancher, seule l'explication (« record de victoires en Coupe du monde ») départage. Par ailleurs **Bode Miller est un homme** : un distracteur exclu par le genre de l'énoncé n'apprend rien et réduit le choix réel à trois.
- **Correction proposée** : « Quelle skieuse détient le record de victoires en Coupe du monde de ski alpin ? » et remplacer « Bode Miller » par « Picabo Street ».
- **Fait** : Déjà conforme à la correction proposée (Shiffrin/record Coupe du monde, Picabo Street) au moment de ma relecture ; aucune modification nécessaire.

### [MOYEN] ✅ Réponse incompréhensible : les « balises de la balle »
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-tennis-3`
- **Texte** : « Qu'est-ce que le système Hawk-Eye ? » → « Un dispositif de traçage vidéo vérifiant les balises de la balle »
- **Problème** : « les balises de la balle » ne veut rien dire. Le hawk-eye reconstitue la **trajectoire** de la balle et son point d'impact — ce que dit correctement le cours de la même notion et la question `sp-arbitrage-regles`.
- **Correction proposée** : « Un dispositif reconstituant par plusieurs caméras la trajectoire de la balle et son point d'impact ».
- **Fait** : Réponse reformulée dans `sport-3.ts` (sp3-tennis-3), reprend la trajectoire/point d'impact.

### [MOYEN] ✅ Une série d'énoncés dont la forme ne correspond pas à celle de la réponse (lot 3)
- **Où** : `prisma/seed/culture-g/sport-3.ts` — plusieurs notions
- **Texte** : « Comment les coureurs s'élancent-ils dans un contre-la-montre ? » → « Une épreuve où les coureurs partent individuellement contre le chronomètre » (`sp3-cyclisme-3`) ; « Quel effet l'EPO produit-elle sur l'organisme ? » → « Une hormone stimulant la production de globules rouges » (`sp3-dopage`) ; « Avec quoi la gymnastique rythmique se pratique-t-elle ? » → « Une discipline féminine associant mouvements et engins » (`sp3-gymnastique`) ; « Par quelle nage un quatre nages individuel commence-t-il ? » → « Papillon, dos, brasse, nage libre » (`sp3-natation`) ; « Quelles racines le sumo japonais possède-t-il ? » → « Une lutte japonaise ritualisée aux racines shintoïstes » (`sp3-sports-combat`) ; « À quels athlètes le rugby-fauteuil s'adresse-t-il ? » → « Un sport de contact en fauteuil pour tétraplégiques » (`sp3-paralympiques`) ; « À quoi renvoie le terme de sportwashing ? » → « L'usage du sport pour… » ; « Comment réussit-on un Grand Chelem ? » → « Le fait de battre toutes les autres équipes ».
- **Problème** : ce sont des définitions (« Une épreuve où… », « Une hormone… ») recyclées sous des énoncés interrogatifs qui appellent autre chose. La bonne réponse se repère alors à sa **forme** — c'est la seule qui commence par un article défini ou indéfini là où les distracteurs suivent parfois une autre construction — et non à son contenu. Le procédé se répète assez pour constituer un défaut de fabrication du lot 3.
- **Correction proposée** : rétablir l'énoncé définitionnel (« Qu'est-ce qu'un contre-la-montre ? », « Qu'est-ce que l'EPO ? »), ou réécrire la réponse dans la forme appelée par la question (« Ils partent l'un après l'autre, à intervalle régulier »).
- **Fait** : Contre-la-montre, gymnastique rythmique, quatre nages et sumo corrigés dans `sport-3.ts`. Le cas du rugby-fauteuil n'a pas été touché : il est imbriqué dans le GRAVE `cg-neuf-sp2-handisport` (non résolu, voir rapport final).

### [MOYEN] ⏭️ Trois questions consécutives avec la même réponse et la même liste de choix
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-sports-glisse`
- **Texte** : « Quand le surf est-il devenu olympique ? », « Quand le skateboard est-il devenu olympique ? », « Quand l'escalade est-elle devenue olympique ? » — toutes trois avec « À Tokyo en 2021 » et des choix quasi identiques.
- **Problème** : après la première, les deux suivantes ne testent plus rien. La série apprend un réflexe, pas un fait.
- **Correction proposée** : n'en garder qu'une (« Quels trois sports urbains ou de nature sont entrés au programme olympique à Tokyo en 2021 ? ») et remplacer les deux autres par des questions de contenu (format des épreuves, sites).
- **Fait** : Écarté : ce triplé (surf/skateboard/escalade à Tokyo 2021) est le même que celui visé par le GRAVE `cg-neuf-sp2-sports-glisse` (astuce qui répond aux trois questions), non résolu — je ne l'ai pas touché pour ne pas trancher un GRAVE. Signalé au propriétaire.

### [MOYEN] ✅ Un distracteur qui est vrai lui aussi (fondation de la NBA)
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3`
- **Texte** : « Quand la NBA a-t-elle été fondée ? », choix `["En 1946", "En 1936", "En 1956", "En 1949 sous ce nom"]`, bonne réponse « En 1946 », explication « Créée sous le nom de Basketball Association of America, elle prend son nom en 1949. »
- **Problème** : l'explication valide explicitement le distracteur « En 1949 sous ce nom ». Deux réponses sont défendables selon qu'on parle de la ligue ou de son nom.
- **Correction proposée** : « Sous quel nom la NBA a-t-elle été fondée en 1946 ? » → « Basketball Association of America ».
- **Fait** : Énoncé reformulé « Sous quel nom la NBA a-t-elle été fondée en 1946 ? » dans `sport-3.ts`.

### [MOYEN] ✅ « Sept trois-quarts » : les arrières d'une équipe de rugby ne sont pas tous des trois-quarts
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-sports-collectifs`, section « Le rugby et la passe en arrière » ; repris dans `sp3-rugby-3`, section « Quinze, et sept »
- **Texte** : « Le rugby à quinze aligne quinze joueurs, huit avants et sept trois-quarts. »
- **Problème** : les sept joueurs de la ligne arrière comprennent le demi de mêlée, le demi d'ouverture, **quatre** trois-quarts et l'arrière. Appeler les sept « trois-quarts » est une erreur de vocabulaire technique, dans un cours dont c'est précisément le rôle d'installer le vocabulaire.
- **Correction proposée** : « huit avants et sept arrières, dont quatre trois-quarts ».
- **Fait** : Corrigé aux deux endroits dans `cours/sport.ts` (sp-sports-collectifs et sp3-rugby-3) : « sept arrières, dont quatre trois-quarts ».

### [MOYEN] ✅ Le cours de `sp-corps-performance` ne dit rien de la VO2 max, dont c'est pourtant la première question
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-corps-performance` ; contre `sport.ts`, `sp-corps-performance`
- **Problème** : la première question de la notion est « Qu'est-ce que la VO2 max ? », mais les trois sections du cours (« Ce que consomme l'effort », « S'entraîner, c'est récupérer », « Les pièges du corps ») traitent du glycogène, du seuil anaérobie, des fibres, de la surcompensation, du sommeil, de l'altitude, de l'échauffement, de la déshydratation et du RED-S — jamais de la VO2 max. La question n'est pas répondable après lecture du cours.
- **Correction proposée** : ajouter au premier paragraphe : « La VO2 max, consommation maximale d'oxygène, mesure le plafond de la filière aérobie ; elle s'exprime en millilitres par kilo et par minute et ne suffit pas à prédire la performance. »
- **Fait** : Phrase ajoutée en tête du premier paragraphe dans `cours/sport.ts`.

### [MOYEN] ✅ Le cours de `sp2-rugby` ne mentionne pas le haka, dont il y a une question
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-rugby` ; contre `sport-2.ts`, `sp2-rugby`
- **Problème** : la question « Qu'est-ce que le haka ? » n'a pas de réponse dans le cours de sa notion, qui parle de la scission, des phases de jeu, de la sécurité et des compétitions. (Le cours `sp3-rugby-3`, lui, le traite — mais il s'agit d'une autre notion.)
- **Correction proposée** : ajouter une phrase à la section « Les compétitions et la culture ».
- **Fait** : Phrase sur le haka ajoutée dans la section « Les compétitions et la culture » de `cours/sport.ts`.

### [MOYEN] ✅ Rustine hors sujet en fin de section
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-sport-collectif-tactique`, section « Les limites du modèle »
- **Texte** : « Une précision utile au passage : il n'existe pas de hors-jeu au handball, contrairement à une confusion fréquente avec le football. »
- **Problème** : la section traite de la modélisation statistique du jeu collectif ; cette phrase, ajoutée en queue de paragraphe, n'a aucun lien avec ce qui précède. Elle est manifestement là pour couvrir la question sur le hors-jeu au handball. Une information juste, placée là où elle n'a pas de sens, ne s'apprend pas.
- **Correction proposée** : déplacer la phrase dans la section « Les principes défensifs et offensifs », où il est question des règles de placement.
- **Fait** : Phrase sur le hors-jeu au handball déplacée vers la section « Les principes défensifs et offensifs » dans `cours/sport.ts`.

### [MOYEN] ✅ Comparaison bancale dans le même paragraphe
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-sport-collectif-tactique`, section « Les limites du modèle »
- **Texte** : « Le sport collectif résiste pourtant à la modélisation statistique bien mieux que le baseball ou le basket »
- **Problème** : le baseball et le basket **sont** des sports collectifs. La phrase oppose un ensemble à deux de ses éléments. Ce que le cours veut dire — et dit très bien juste après — est que les sports à jeu continu résistent mieux que les sports à actions discrètes.
- **Correction proposée** : « Les sports à jeu continu, comme le football ou le handball, résistent à la modélisation statistique bien mieux que le baseball ou le basket, faits d'actions discrètes. »
- **Fait** : Reformulé selon la proposition (sports à jeu continu vs actions discrètes) dans `cours/sport.ts`.

### [MOYEN] ✅ Un diplôme supprimé présenté au présent
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sport-education`
- **Texte** : « Qu'est-ce qu'un brevet d'État d'éducateur sportif ? » → « Un diplôme permettant d'enseigner contre rémunération une activité sportive »
- **Problème** : le BEES n'est plus délivré ; il a été remplacé par les BPJEPS, DEJEPS et DESJEPS. Le cours de la même notion le dit correctement (« anciennement brevet d'État d'éducateur sportif, aujourd'hui décliné en plusieurs certifications professionnelles »), la question non.
- **Correction proposée** : « Que faut-il pour encadrer une activité sportive contre rémunération en France ? » → « Un diplôme d'État, aujourd'hui le BPJEPS ou ses équivalents ».
- **Fait** : Énoncé et explication reformulés dans `sport-2.ts` (sp2-sport-education).

### [MOYEN] ✅ Raccourci chronologique sur la naissance du rugby à treize
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-rugby`, section « Une scission fondatrice »
- **Texte** : « Les clubs du nord font sécession et modifient les règles […] : treize joueurs au lieu de quinze, suppression des mêlées disputées, limitation des plaquages successifs. »
- **Problème** : présenté comme la conséquence immédiate de 1895, alors que le passage à treize joueurs date de 1906 et la règle des six plaquages de 1966. Le cours donne l'impression d'un sport né complet en une réunion.
- **Correction proposée** : « Les clubs du nord font sécession en 1895, puis modifient progressivement les règles : treize joueurs à partir de 1906, mêlées non disputées, puis limitation du nombre de plaquages successifs. »
- **Fait** : Reformulé dans `cours/sport.ts` (sp2-rugby) avec les dates 1895/1906 ; même correction appliquée dans `heritage/.../01.json` (voir plus bas).

### [GRAVE] ⏭️ Le domaine compte à peu près deux fois plus de chapitres qu'il n'a de sujets

- **Où** : `prisma/seed/culture-g/cours/fusions.ts` — table `FUSIONS`, contre `heritage/culture-g/data/lecons/sport/`
- **Problème** : `fusions.ts` s'ouvre sur le bon diagnostic — « deux chapitres sur le même thème se voient immédiatement au catalogue » — et verse neuf notions de Sport dans une leçon héritée. Mais la table s'arrête au milieu du gué : pour la moitié des sujets, une leçon héritée et une notion du seed continuent de coexister, chacune avec son chapitre et ses questions.

  | Sujet | Leçon héritée | Notion(s) du seed qui subsistent |
  |---|---|---|
  | Rugby | `cg-sport-01` | `sp2-rugby` (qui a absorbé `sp3-rugby-3`) + les questions rugby de `sp-sports-collectifs` |
  | Tennis | `cg-sport-02` | `sp-tennis-raquettes` + `sp3-tennis-3` |
  | Cyclisme | `cg-sport-03` | `sp3-cyclisme-3` (qui a absorbé `sp-cyclisme`) |
  | Athlétisme | `cg-sport-04` | `sp3-athletisme-lancers` (qui a absorbé `sp-athletisme`) + `sp3-athletisme-fond` |
  | Sports d'hiver | `cg-sport-05` | `sp-sports-hiver-nautiques` |
  | Natation | `cg-sport-08` | `sp2-natation-eau` + `sp3-natation` |
  | Gymnastique | `cg-sport-10` | `sp2-gymnastique` (qui a absorbé `sp3-gymnastique`) |
  | Paralympique | `cg-sport-13` | `sp2-handisport` (qui a absorbé `sp3-paralympiques`) |
  | Sport féminin | `cg-sport-14` | `sp3-sport-femmes` |
  | Dopage | `cg-sport-15` | `sp3-dopage` |
  | Économie du sport | `cg-sport-16` | `sp3-economie-sport` |

  Conséquence mesurable sur un seul fait : **la valeur de l'essai au rugby est demandée dans trois chapitres différents** — `cg-sport-01` (« Combien de points rapporte un essai au rugby à XV depuis 1992 ? »), `sp-sports-collectifs` (« Que vaut un essai au rugby à quinze ? ») et `sp2-rugby` après fusion (« Combien de points vaut un essai au rugby à quinze ? »). Idem pour l'arrivée de l'Italie dans le Tournoi en 2000, et pour la Coupe du monde de rugby de 1987, chacune posée trois fois dans trois chapitres.
- **Correction proposée** : compléter `FUSIONS` pour les onze sujets ci-dessus, en versant la notion du seed dans la leçon héritée — qui est presque toujours la plus complète et la mieux datée — après le dédoublonnage décrit plus haut.
- **Écarté** : la correction porte sur la table `FUSIONS` de `prisma/seed/culture-g/cours/fusions.ts`, un fichier de code hors de mon périmètre (`sport*.ts`, `cours/sport.ts`, `heritage/culture-g/data/sport.json`, `heritage/culture-g/data/lecons/sport/*.json`). Les doublons frontaux les plus visibles que cette table incomplète laisse subsister dans les chapitres déjà fusionnés ont en revanche été traités un par un via les constats GRAVE dédiés (Roland-Garros/Mousquetaires, valeur de l'essai, palmarès Coupe du monde, etc.).

### [GRAVE] 🔧 La fusion vers les leçons héritées produit les mêmes doublons frontaux

- **Où** : `prisma/seed/culture-g/cours/fusions.ts` — table `FUSIONS`, entrées Sport
- **Problème** : neuf notions du seed sont versées dans une leçon héritée qui possède déjà son quiz de cinq questions. Le dédoublonnage ne portant que sur l'énoncé, les recouvrements passent. Relevé :
  - **`sp2-basket-nba` → `cg-sport-06`** : la leçon demande « À quelle hauteur se situe le panier de basket-ball ? » (3,05 m) et la notion « Quelle est la hauteur d'un panier de basket ? » (Trois mètres cinq) ; la leçon demande « Combien de temps une équipe de basket a-t-elle pour tenter un tir ? » (Vingt-quatre secondes) et la notion « Combien de temps une équipe a-t-elle pour tirer en NBA ? » (Vingt-quatre secondes).
  - **`sp2-sports-mecaniques` → `cg-sport-07`** : « En quelle année le championnat du monde de Formule 1 a-t-il été créé ? » (1950) et « Quand le championnat du monde de Formule 1 est-il créé ? » (En 1950).
  - **`sp3-sports-combat` → `cg-sport-09`** : « Qui a créé le judo, et en quelle année ? » (Jigoro Kano en 1882) et « Qu'est-ce que le judo ? » (Un art martial japonais fondé par Jigorō Kano en 1882) ; « Qu'est-ce qui distingue la lutte gréco-romaine de la lutte libre ? » et « Qu'est-ce que la lutte gréco-romaine ? », avec la même explication sur les prises de jambes.
  - **`sp-dopage-ethique` → `cg-sport-15`** : « Quel est l'effet principal de l'EPO utilisée comme produit dopant ? » et « Qu'est-ce que l'EPO ? » ; « En quelle année l'Agence mondiale antidopage a-t-elle été créée ? » et « Quelle agence coordonne la lutte antidopage au niveau mondial ? », dont l'explication donne la même date et la même cause.
  - **`sp-sport-economie` + `sp2-sport-medias` → `cg-sport-16`** (deux notions dans une seule leçon) : « Quel est le nom donné à la pratique consistant à attribuer à un stade le nom d'une marque ? » (Le naming) et « Qu'est-ce que le naming d'une enceinte sportive ? » ; et trois questions concurrentes sur les droits de diffusion.
  - **`sp-jeux-olympiques` + `sp3-jo-hiver` → `cg-sport-c01`** : « En quelle année les premiers Jeux d'hiver sont-ils organisés ? » (1924, à Chamonix) et « Où se sont tenus les premiers Jeux olympiques d'hiver ? » (À Chamonix, en 1924), désormais dans le même chapitre.
- **Correction proposée** : les mêmes que ci-dessus — dédoublonner sur le couple (bonne réponse, explication) avant de verser.
- **Fait** : `cg-sport-06` (hauteur du panier, vingt-quatre secondes) et `cg-sport-07` (date de création de la F1) traités individuellement, voir les constats GRAVE dédiés plus bas. `cg-sport-15` : le doublon EPO supprimé dans `sp-dopage-ethique` (`sport.ts`) au profit de la version plus riche de la leçon héritée ; le doublon AMA/1999 également supprimé. `cg-sport-16` : le doublon naming supprimé dans `sp-sport-economie` (`sport.ts`). ⏭️ Non traités : `cg-sport-09` (judo/lutte gréco-romaine) — un des deux doublons a déjà été traité en MOYEN, l'autre (« Qui a créé le judo… ») a été délibérément laissé pour ne pas réduire le format fixe à cinq questions du quiz hérité, décision que je n'ai pas rouverte ; `cg-sport-c01` (Jeux d'hiver) — fichier généré sans source correspondante dans `heritage/culture-g/data/lecons/sport/`, hors de mon périmètre ; les « trois questions concurrentes sur les droits de diffusion » de `cg-sport-16`, trop peu précisément décrites dans le constat pour être ciblées sans risque.

### [GRAVE] 🔧 Contradiction sur la date des règles de Queensberry, à l'intérieur d'un même chapitre

- **Où** : `heritage/culture-g/data/lecons/sport/09.json` contre `prisma/seed/culture-g/sport-3.ts` — `sp3-sports-combat`, fusionnée dans `cg-sport-09`
- **Texte** : leçon — « Le tournant décisif intervient **en 1865**, lorsque John Graham Chambers rédige, sous le patronage du marquis de Queensberry, un ensemble de règles » ; question du seed — « Les règles du marquis de Queensberry l'ont codifiée **en 1867**. »
- **Problème** : les deux dates circulent (rédaction en 1865, publication en 1867), mais la fusion les place dans le même chapitre, sans que rien n'explique l'écart. L'apprenant lit successivement deux dates différentes pour le même fait.
- **Correction proposée** : retenir une seule formulation dans les deux textes — « rédigées en 1865 par John Graham Chambers sous le patronage du marquis de Queensberry, et publiées en 1867 ».
- **Fait** : Explication de la question corrigée dans `sport-3.ts` (sp3-sports-combat) : « rédigées en 1865 et publiées en 1867 », conforme à la leçon héritée `09.json` qui datait déjà correctement la rédaction de 1865.

### [MOYEN] ⏭️ Les questions versées dans une leçon héritée n'y trouvent souvent pas leur réponse

- **Où** : table `FUSIONS` de `prisma/seed/culture-g/cours/fusions.ts`
- **Problème** : la leçon d'accueil garde son chapitre — cinq sections écrites sans connaissance des questions qui vont y arriver. Le recouvrement est partiel, et parfois faible. Comptage sur les cas les plus nets :
  - **`cg-sport-16`** reçoit `sp-sport-economie` **et** `sp2-sport-medias`, soit vingt questions ; ses cinq sections traitent le poids économique du sport, les ressources d'un club, les droits de diffusion, le parrainage et l'histoire de la presse sportive. **Environ treize de ces vingt questions n'ont aucune réponse dans le chapitre** : arrêt Bosman, plafond salarial, draft, ligue fermée, masse salariale, club formateur, paris sportifs en ligne, décret sur les événements d'importance majeure, commentaire sportif, ralenti, sport-spectacle, journalisme d'investigation, récit de la revanche.
  - **`cg-sport-07`** reçoit `sp2-sports-mecaniques` : le halo, la voiture de sécurité, le drapeau rouge et la Formule E ne figurent nulle part dans la leçon.
  - **`cg-sport-c01`** reçoit `sp3-jo-hiver` : sur dix questions, le skeleton, Mikaela Shiffrin, le snowboard à Nagano, le combiné nordique, la définition du biathlon, la domination norvégienne au tableau des médailles et le manque de neige ne sont traités par aucune de ses quatre sections.
  - **`cg-sport-14`** reçoit `sp2-sport-feminin` : Kathrine Switzer, l'interdiction du football féminin en Angleterre, la première Coupe du monde féminine, le test de féminité, l'hyperandrogénie et la proportion de licenciées en France sont absents de la leçon.
- **Correction proposée** : pour chaque notion versée, ajouter à la leçon d'accueil un paragraphe couvrant les questions orphelines, ou retirer ces questions.
- **Fait** : Écarté : la correction demanderait de rédiger de nouveaux paragraphes de cours entiers dans plusieurs leçons (cg-sport-16, 07, 14, et cg-sport-c01) pour couvrir des dizaines de questions orphelines — un chantier de rédaction à part entière, pas une correction ponctuelle. `cg-sport-c01` est de plus un fichier généré (aucune source correspondante dans `heritage/culture-g/data/lecons/sport/`), donc hors de mon périmètre de fichiers. Signalé au propriétaire.

### [MOYEN] ✅ Le cahier d'origine dit juste là où le seed dit faux — sans que rien ne les réconcilie

- **Où** : `heritage/culture-g/data/sport.json` contre `prisma/seed/culture-g/`
- **Problème** : sur plusieurs points que je signale plus haut comme fautifs dans le seed, le cahier d'origine donne la version exacte. Les deux corpus coexistant dans la même application, l'apprenant reçoit successivement les deux versions.
  - **Distance du marathon** : héritage (q. 13) — « cette longueur devint la norme officielle **en 1921** » ; seed (`sp-athletisme`, `sp3-athletisme-fond`) — « fixée en 1908 », avec « arrondie en 1921 » présenté comme une erreur.
  - **Composition de la ligne arrière au rugby** : héritage (q. 19) — « huit « avants »… et sept « **trois-quarts et demis** » » ; seed (`cours/sport.ts`, `sp-sports-collectifs` et `sp3-rugby-3`) — « sept trois-quarts ».
  - **Victoires d'Eddy Merckx** : héritage (q. 54) — « 525 victoires sur l'ensemble de sa carrière, dont **445 chez les professionnels** » ; seed (`cours/sport.ts`, `sp3-cyclisme-3`) — « **plus de cinq cents victoires professionnelles** ». Le seed confond le total toutes catégories avec le total professionnel.
- **Correction proposée** : aligner le seed sur le cahier d'origine dans les trois cas.
- **Fait** : Les trois cas alignés sur le cahier d'origine : marathon (`sport.ts` + `sport-3.ts`), ligne arrière du rugby (`cours/sport.ts`), victoires de Merckx (`cours/sport.ts`, 445 chez les professionnels sur 525 en carrière).

### [MINEUR] ✅ Quatre tournois, trois surfaces, mais « chaque tournoi une surface différente »

- **Où** : `heritage/culture-g/data/sport.json` — question 14
- **Texte** : « Chaque tournoi se joue sur une surface différente : dur, terre battue et gazon. »
- **Problème** : la phrase promet quatre surfaces pour quatre tournois et n'en énumère que trois. L'Open d'Australie et l'US Open se disputent tous deux sur dur — ce que le seed dit correctement (`sp3-tennis-3`, cours : « Le Grand Chelem réunit quatre tournois **sur trois surfaces** »).
- **Correction proposée** : « Les quatre tournois se répartissent sur trois surfaces : terre battue, gazon et dur. »
- **Fait** : Corrigé dans `heritage/culture-g/data/sport.json` (question 14 du cahier d'origine).

### [MINEUR] ✅ Une borne de comparaison inutilement lâche

- **Où** : `heritage/culture-g/data/sport.json` — question 11
- **Texte** : « Aucun autre olympien, tous sports confondus, ne dépasse les 10 médailles d'or. »
- **Problème** : littéralement vrai, mais la borne suggère qu'un athlète approcherait 10 titres, alors que le maximum suivant est 9 (Larissa Latynina, Paavo Nurmi, Mark Spitz, Carl Lewis). Une borne fausse-vraie n'apprend rien.
- **Correction proposée** : « Aucun autre olympien, tous sports confondus, ne dépasse 9 médailles d'or. »
- **Fait** : « ne dépasse 9 médailles d'or » dans `heritage/culture-g/data/sport.json` (question 11).

### [MINEUR] ✅ Redondance et double « dont »

- **Où** : `heritage/culture-g/data/sport.json` — question 54
- **Texte** : « Avec 525 victoires sur l'ensemble de sa carrière, dont 445 chez les professionnels, dont trois championnats du monde sur route et sept Milan-San Remo, il est très largement considéré… »
- **Problème** : deux « dont » enchâssés sur des ensembles qui ne s'emboîtent pas de la même façon, dans une phrase déjà longue.
- **Correction proposée** : « Avec 525 victoires en carrière, dont 445 chez les professionnels — trois championnats du monde sur route et sept Milan-San Remo parmi elles —, il est… »
- **Fait** : Phrase réécrite dans `heritage/culture-g/data/sport.json` (question 54).

### [MINEUR] ✅ « La première championne olympique » : une formule qui prête à confusion

- **Où** : `heritage/culture-g/data/sport.json` — question 7
- **Texte** : « Les femmes ne furent admises qu'à partir des Jeux de Paris en 1900, où la Britannique Charlotte Cooper devint la première championne olympique en tennis. »
- **Problème** : exact avec le complément « en tennis », mais lu vite il contredit le fait qu'Hélène de Pourtalès, sacrée en voile en mai 1900, précède Charlotte Cooper (juillet 1900). Cooper est la première championne olympique **en individuel**.
- **Correction proposée** : « … où la Britannique Charlotte Cooper devint, en tennis, la première championne olympique d'une épreuve individuelle. »
- **Fait** : Précisé « d'une épreuve individuelle » dans `heritage/culture-g/data/sport.json` (question 7).

### [MINEUR] ✅ Diacritiques d'un nom propre absents dans le cahier d'origine

- **Où** : `heritage/culture-g/data/sport.json` — question 37 (« Nadia Comaneci », « Vera Caslavska ») contre `prisma/seed/culture-g/sport-3.ts` (« Nadia Comăneci », « Věra Čáslavská »)
- **Correction proposée** : harmoniser sur la graphie accentuée dans les deux corpus.
- **Fait** : « Nadia Comăneci » et « Věra Čáslavská » dans `heritage/culture-g/data/sport.json` (question 37).

### [MINEUR] ✅ « Tensing Norgay » au lieu de « Tenzing Norgay », et incohérence interne
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sports-glisse`
- **Texte** : « Par Edmund Hillary et Tensing Norgay. »
- **Problème** : orthographe fautive du nom. Le cours de la même notion écrit correctement « Tenzing Norgay » — les deux graphies coexistent donc dans le domaine.
- **Correction proposée** : « Tenzing Norgay ».
- **Fait** : Corrigé dans `sport-2.ts` (sp2-sports-glisse).

### [MINEUR] ✅ Accent manquant
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-hiver-nautiques`
- **Texte** : « Un kilometre cinq de natation, quarante de vélo et dix de course sur la distance olympique. »
- **Correction proposée** : « Un kilomètre cinq… »
- **Fait** : « Un kilomètre cinq » corrigé dans `sport.ts` (sp-sports-hiver-nautiques).

### [MINEUR] ✅ Participe passé au lieu de l'infinitif
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-sports-hiver-nautiques`, section « Sur la neige et la glace »
- **Texte** : « Le biathlon, lui, alterne ski de fond et tir à la carabine : hériter d'un entraînement militaire scandinave, il demande de faire chuter son rythme cardiaque… »
- **Correction proposée** : « hérité d'un entraînement militaire scandinave, il demande… »
- **Fait** : « hérité » corrigé dans `cours/sport.ts` (sp-sports-hiver-nautiques).

### [MINEUR] ✅ Accord de « contre-attaque »
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sport-collectif-tactique`
- **Texte** : « Qu'est-ce qu'un contre-attaque en sport collectif ? »
- **Correction proposée** : « Qu'est-ce qu'une contre-attaque en sport collectif ? »
- **Fait** : « une contre-attaque » corrigé dans `sport-2.ts`.

### [MINEUR] ✅ Genre de « boccia » et de « chistera » flottants
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-handisport` (« Qu'est-ce que **la** boccia ? ») contre `sport-3.ts` — `sp3-paralympiques` (« Qu'est-ce que **le** boccia ? ») ; et `cours/sport.ts` — `sp2-jeux-traditionnels` (« un gant d'osier, une raquette ou **un** chistera »)
- **Problème** : le même mot change de genre d'un fichier à l'autre. L'usage français est « la boccia » et « la chistera ». Dans la même phrase, « un gant d'osier » et « un chistera » désignent en outre le même objet, énuméré deux fois.
- **Correction proposée** : uniformiser en « la boccia » ; et « à main nue, à la chistera — le gant d'osier — ou à la pala ».
- **Fait** : « la boccia » uniformisé dans `sport-3.ts` ; chistera/pala reformulé dans `cours/sport.ts`.

### [MINEUR] ✅ Diacritiques d'un nom propre incohérents entre deux fichiers
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-gymnastique` (« Vera Cáslavská ») contre `sport-3.ts` — `sp3-gymnastique` (« Věra Čáslavská »)
- **Correction proposée** : retenir « Věra Čáslavská » partout.
- **Fait** : `sport-2.ts` aligné sur « Věra Čáslavská » (graphie de `sport-3.ts`).

### [MINEUR] ✅ Répétitions de mots dans une même phrase
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-gymnastique` : « l'affichage ne pouvait afficher que 1,00 » ; `cours/sport.ts` — `sp-arbitrage-regles` : « Le temps additionnel compense les arrêts de jeu, sans les compenser exactement. »
- **Correction proposée** : « l'affichage ne pouvait pas dépasser 1,00 » ; « Le temps additionnel compense les arrêts de jeu, sans jamais les rattraper exactement. »
- **Fait** : Corrigé dans `sport-3.ts` (affichage 1,00) et `cours/sport.ts` (temps additionnel).

### [MINEUR] ✅ Limite de vent : « inférieur à » au lieu de « ne dépassant pas »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-athletisme` (accroche) ; `cours/sport.ts` — `sp2-records-performance`, section « Le matériel et les conditions »
- **Texte** : « Un record du monde n'est homologué qu'avec un vent inférieur à deux mètres par seconde » ; « vent inférieur à deux mètres par seconde ».
- **Problème** : un vent de exactement 2,0 m/s est **autorisé**. La question `sp3-records-limites` emploie d'ailleurs la bonne formule (« Un vent favorable supérieur à deux mètres par seconde invalide un record »).
- **Correction proposée** : « un vent favorable ne dépassant pas deux mètres par seconde ».
- **Fait** : « ne dépassant pas deux mètres par seconde » dans `sport.ts` et `cours/sport.ts`.

### [MINEUR] ✅ « Olympiade » employé pour « édition des Jeux »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-hiver-nautiques` (« sur quatre olympiades ») ; `sport-3.ts` — `sp3-basket-3` (« Barcelone est la première olympiade ouverte aux professionnels de la NBA ») ; `cours/sport.ts` — `sp3-natation`
- **Problème** : une olympiade est la **période de quatre ans** entre deux Jeux, pas les Jeux eux-mêmes. L'emploi est particulièrement fautif dans « Barcelone est la première olympiade ».
- **Correction proposée** : « sur quatre éditions des Jeux » ; « Barcelone est la première édition ouverte aux professionnels de la NBA ».
- **Fait** : Corrigé dans `sport.ts`, `sport-3.ts` (sp3-basket-3) et `cours/sport.ts` (sp3-natation).

### [MINEUR] ✅ « Des années 1998 à 2012 »
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-cyclisme-3`
- **Texte** : « Quel scandale a marqué le cyclisme des années 1998 à 2012 ? »
- **Correction proposée** : « Quel scandale a marqué le cyclisme de 1998 à 2012 ? »
- **Fait** : « de 1998 à 2012 » dans `sport-3.ts`.

### [MINEUR] ✅ Le volant de badminton appelé « la balle »
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-tennis-raquettes`, section « Les cousins du tennis »
- **Texte** : « Le badminton se joue avec un volant, dont la traînée aérodynamique interdit tout rebond : la balle ne touche jamais le sol en jeu »
- **Problème** : le cours vient de nommer correctement le volant, puis l'appelle « la balle » dans la phrase suivante, au moment précis où il installe la distinction avec le tennis.
- **Correction proposée** : « le volant ne touche jamais le sol tant que l'échange dure ».
- **Fait** : « le volant » rétabli dans `cours/sport.ts` (sp-tennis-raquettes).

### [MINEUR] ✅ Commentaires d'en-tête faux
- **Où** : `prisma/seed/culture-g/sport-2.ts` l. 2 ; `prisma/seed/culture-g/cours/sport.ts` l. 1
- **Texte** : « Sport, deuxième lot — **vingt** notions sans cours. » ; « Sport, premier lot — les cours des **treize** notions. »
- **Problème** : `sport-2.ts` contient **dix-neuf** notions, pas vingt. Et `cours/sport.ts` contient **quarante-deux** cours couvrant les trois lots (`sp-`, `sp2-`, `sp3-`), pas les treize du premier. La mention « sans cours » des trois en-têtes est démentie par l'existence même du fichier de cours.
- **Correction proposée** : corriger les décomptes et supprimer « sans cours ».
- **Fait** : En-têtes corrigés dans `sport-2.ts` (dix-neuf notions) et `cours/sport.ts` (mention « treize notions » et « sans cours » retirées).

---

## Point en suspens (à vérifier avant de conclure)

- **Faits à recontrôler sur le web** : date de création du pass'Sport (2021 ou 2022) ; année d'entrée du goalball au programme paralympique (démonstration en 1976, médailles en 1980 ?) ; le record du monde du décathlon de Kévin Mayer tient-il toujours en 2026 ; état réel des Jeux olympiques de l'esport annoncés par le CIO (`sp3-esport` écrit « Le CIO **a lancé** des Jeux olympiques de l'esport », alors que la première édition a été reportée).
- ~~Douze notions sans cours~~ : **faux positif, écarté.** Les douze slugs concernés figurent tous dans `prisma/seed/culture-g/cours/fusions.ts` ; la notion absorbée disparaît du catalogue et ses questions rejoignent l'hôte. Vérification faite. Ce qui en sort en revanche, c'est le constat ci-dessous sur les cours orphelins.

## Ce que la seconde passe a ajouté

_(passe 2 faite — voir la section « Passe 2 » en fin de rapport, après les leçons héritées.)_

## Ce qui est sain

Les cours sont, dans l'ensemble, d'un niveau nettement supérieur aux questions : ceux de `sp2-nutrition-sportive` (hyponatrémie d'effort, contamination des compléments, responsabilité objective), `sp3-athletisme-fond` (la section « Pourquoi le Kenya » refuse explicitement l'explication génétique unique), `sp2-handisport` (les Deaflympics et le refus d'intégration au mouvement paralympique), `sp2-natation-eau` (le départ du dos qui explique l'ordre du relais) et `sp2-records-performance` apprennent réellement quelque chose et prennent le risque de nuancer. Côté faits, les repères du lot 1 sont solides et bien datés : Coubertin 1894/1896, Chamonix 1924, Naismith 1891, Morgan 1895, scission de 1895, Bosman 1995, AMA 1999, Heysel 39 morts, Hillsborough et le rapport Taylor, McLaren 2016, Titre IX 1972, interdiction du football féminin anglais de 1921 à 1971. Rien de ce que j'ai vérifié dans ces séries n'est faux.

**Le cahier d'origine (`heritage/culture-g/data/sport.json`) est le meilleur morceau du domaine.** J'ai vérifié ses cinquante-sept questions une à une : dates, scores, noms, chiffres. Elles tiennent. Les explications font quatre à cinq phrases et ajoutent systématiquement quelque chose au-delà de la réponse — la finale de 1930 gagnée 4-2 par l'Uruguay, Eugène Christophe premier porteur du maillot jaune, le classement de la montagne créé en 1933 mais le maillot à pois seulement en 1975, les 8 secondes entre LeMond et Fignon en 1989, la ligne à trois points à 7,24 m en NBA contre 6,75 m en FIBA, Pérec à égalité avec Félicia Ballanger, la légende de Webb Ellis correctement présentée comme une légende. Les palmarès y sont datés (« entre 2005 et 2022 », « en 1985 », « avant 2024 »), ce qui les met à l'abri de la péremption — exactement ce qui manque au seed.

---

# Reprise (relecteur 2) — suite de la passe 1

> Les constats ci-dessous s'ajoutent à ceux du relecteur précédent. Je ne reprends
> pas ce qui est déjà écrit plus haut ; je signale en revanche, quand je les
> trouve, les corrections de la passe 1 qui étaient elles-mêmes inexactes.

## Leçon héritée `02.json` — « Le tennis, du jeu de paume aux courts du monde entier »

### [GRAVE] 🔧 Les quatre courts principaux de Roland-Garros ne portent pas les noms des Mousquetaires
- **Où** : `heritage/culture-g/data/lecons/sport/02.json` — section « La Coupe Davis et l'histoire du tennis français »
- **Texte** : « c'est pour défendre ce trophée que le stade Roland-Garros est édifié. **Les quatre courts principaux du stade portent aujourd'hui leurs noms.** »
- **Problème** : faux. Les courts principaux de Roland-Garros sont le **Philippe-Chatrier** (1928), le **Suzanne-Lenglen** (1994) et le **Simonne-Mathieu** (2019) — aucun ne porte le nom d'un Mousquetaire. Ce qui porte leur nom, c'est le **trophée** du simple messieurs (la Coupe des Mousquetaires) et la **place des Mousquetaires**, où se dressent leurs quatre statues. La phrase est d'autant plus piégeuse qu'elle suit immédiatement une série d'affirmations exactes.
- **Correction proposée** : « leur nom est resté attaché au trophée du simple messieurs, la Coupe des Mousquetaires, et à la place du stade où se dressent leurs quatre statues. »
- **Fait** : Phrase corrigée dans `heritage/culture-g/data/lecons/sport/02.json`, conforme à la correction proposée.

### [MINEUR] ✅ Un distracteur qui est en partie vrai : « le béton »
- **Où** : `heritage/culture-g/data/lecons/sport/02.json` — quiz, question 4 (« Sur quelle surface se dispute le tournoi de Roland-Garros ? »)
- **Texte** : choix `["Le gazon", "La moquette", "La terre battue", "Le béton"]`
- **Problème** : mineur ici, puisque la question porte sur Roland-Garros, mais « le béton » est le nom courant en français des surfaces dures de l'Open d'Australie et de l'US Open — l'explication de la même question dit d'ailleurs « surface dure ». Le lecteur qui retient « béton = pas une surface de Grand Chelem » apprend un contresens.
- **Correction proposée** : remplacer « Le béton » par « Le parquet ».
- **Fait** : « Le parquet » remplace « Le béton » dans `heritage/.../02.json`.

### [MINEUR] ⏭️ Précision de la passe 1 à corriger : la date du décret pass'Sport
- **Où** : le constat [GRAVE] « Le pass'Sport date de 2021, pas de 2022 » ci-dessus
- **Problème** : la **conclusion** de la passe 1 est bonne et je la confirme — le pass'Sport est créé pour la rentrée 2021, annoncé le 19 mai 2021, pour la saison sportive 2021-2022. Mais la pièce citée à l'appui est fausse : le texte fondateur est le **décret n° 2021-1171 du 10 septembre 2021** (JO du 11 septembre), et non un « décret du 12 août 2021 ». À noter aussi que le montant de 50 € cité n'est plus le montant courant : il est porté à **70 €** pour la saison 2025-2026 — un chiffre qui, comme les palmarès, se périme sans date.
- **Correction proposée** : dans le cours, « créé en 2021 » ; et si le montant est mentionné quelque part, l'assortir de sa saison.
- **Fait** : Sans objet : aucun fichier du produit ne cite le « décret du 12 août 2021 » ni le montant de l'aide ; rien à corriger côté contenu.

## Ce qui est sain dans la leçon 02
Vérifiées et exactes : jeu de paume et l'étymologie « tenez » (correctement donnée comme hypothèse), Wingfield 1873 et le brevet de 1874, Wimbledon 1877, cotes du court (23,77 × 8,23, filet à 0,914 m), tie-break de Van Alen adopté en 1970, Open d'Australie créé en 1905 et passé au dur en 1988, Championnat de France 1891 ouvert aux étrangers en 1925, stade de 1928, Laver 1962 et 1969, Golden Slam de Graf en 1988, Coupe Davis 1900 par Dwight Davis, Fed Cup 1963 devenue Billie Jean King Cup, six Coupes Davis 1927-1932, Noah 1983 puis capitaine en 1991 et 1996, Pierce 1995 et 2000, Mauresmo 2006, ATP 1972 et WTA 1973, égalité des primes à l'US Open en 1973 et à Wimbledon en 2007, tennis olympique de 1896 à 1924 puis retour à Séoul en 1988, Borg cinq Wimbledon d'affilée 1976-1980. Le schéma coté du court et la frise du décompte des points sont justes.

## Leçon héritée `03.json` — « Le cyclisme et le Tour de France »

### [GRAVE] 🔧 « Quatre coureurs seulement ont remporté cinq fois le Tour » — ils sont cinq depuis le 26 juillet 2026
- **Où** : `heritage/culture-g/data/lecons/sport/03.json` — section « Les champions du Tour et les cols mythiques » (texte), titre du tableau « **Les quatre** quintuples vainqueurs », et explication du quiz q. 3 ; **le même chiffre figure trois fois de plus dans `heritage/culture-g/data/sport.json`** — l. 304 (« Quatre coureurs ont remporté cinq Tours : Jacques Anquetil, Eddy Merckx, Bernard Hinault et Miguel Indurain »), l. 1056 (cours : « **Quatre géants** ont remporté cinq Tours ») et l. 1082 (note du visuel, même phrase).
- **Texte** : « Quatre coureurs seulement ont remporté cinq fois le Tour de France. »
- **Problème** : **Tadej Pogačar a remporté son cinquième Tour le 26 juillet 2026** (devant Remco Evenepoel et Isaac Del Toro). Ils sont donc désormais **cinq** quintuples vainqueurs. C'est le cas d'école annoncé : un décompte de palmarès énoncé sans date, qui devient faux tout seul. L'affirmation est répétée à quatre endroits, dont le titre d'un tableau et une note de visuel — un correcteur qui ne modifierait que le paragraphe en laisserait trois.
- **Note d'audit** : ce constat porte sur `heritage/culture-g/data/sport.json`, que la passe 1 déclarait vérifié question par question et « le meilleur morceau du domaine ». Il l'est sur presque tout — mais pas sur ce point.
- **Correction proposée** : partout, « Cinq coureurs ont remporté cinq fois le Tour de France : Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Indurain et, depuis 2026, le Slovène Tadej Pogačar. » ; titre du tableau → « Les quintuples vainqueurs » ; et ajouter une ligne Pogačar (Slovénie, 2020, 2021, 2024, 2025 et 2026). Le quiz q. 3 (« Lequel de ces coureurs n'a **PAS** remporté cinq fois le Tour ? » → Louison Bobet) reste valable tel quel, mais son explication doit cesser de présenter le groupe comme clos.
- **Fait** : Les quatre occurrences corrigées : `heritage/culture-g/data/lecons/sport/03.json` (texte, titre du tableau devenu « Les quintuples vainqueurs », ligne Pogačar ajoutée au tableau, explication du quiz q. 3 réécrite pour ne plus présenter le groupe comme clos) et `heritage/culture-g/data/sport.json` (l. 304 et l. 1056/1082, les deux occurrences remplacées par « Cinq coureurs… et, depuis 2026, le Slovène Tadej Pogačar »), conformes à la correction proposée.

### [MOYEN] ✅ Ce n'est pas *L'Équipe* qui organise le Tour de France
- **Où** : `heritage/culture-g/data/lecons/sport/03.json` — quiz, question 1, explication
- **Texte** : « L'Équipe, **qui organise aujourd'hui la course avec sa société mère**, est le successeur de L'Auto après la Seconde Guerre mondiale. »
- **Problème** : *L'Équipe* est un journal, il n'organise rien. Le Tour est organisé par **ASO (Amaury Sport Organisation)** ; *L'Équipe* et ASO sont deux filiales sœurs du groupe Amaury. La formule « avec sa société mère » embrouille un rapport qui est simple à dire.
- **Correction proposée** : « L'Équipe, héritière de L'Auto après la Seconde Guerre mondiale, appartient au même groupe qu'Amaury Sport Organisation, la société qui organise aujourd'hui la course. »
- **Fait** : Corrigé dans `heritage/culture-g/data/lecons/sport/03.json` : L'Équipe et ASO présentées comme filiales sœurs du groupe Amaury.

### [MINEUR] ✅ Le maillot blanc a disparu pendant onze ans
- **Où** : `heritage/culture-g/data/lecons/sport/03.json` — section « Le déroulement de la course et la symbolique des maillots », et tableau
- **Texte** : « Le maillot blanc, également apparu en 1975, distingue le meilleur jeune coureur. »
- **Problème** : exact sur la date de création, muet sur le fait que le maillot a été **supprimé de 1989 à 1999** et rétabli en 2000 — contrairement au jaune, au vert et au pois, continus depuis leur création. Le tableau les aligne comme quatre distinctions de même nature.
- **Correction proposée** : « Le maillot blanc, apparu lui aussi en 1975, distingue le meilleur coureur de moins de vingt-six ans ; supprimé en 1989, il a été rétabli en 2000. »
- **Fait** : Complété (suppression 1989, rétabli 2000) dans `heritage/.../03.json`.

### [MINEUR] ✅ Le contre-la-montre par équipes passé sous silence dans sa propre définition
- **Où** : `heritage/culture-g/data/lecons/sport/03.json` — section « Le déroulement de la course et la symbolique des maillots »
- **Texte** : « et les contre-la-montre, **disputés individuellement** contre le chronomètre »
- **Problème** : la phrase définit le contre-la-montre par l'individuel, alors que le Tour a longtemps comporté un contre-la-montre par équipes, qui obéit à la même logique de chronomètre. Le cours du seed (`cours/sport.ts`, `sp3-cyclisme-3`) fait la même réduction.
- **Correction proposée** : « et les contre-la-montre, courus contre le chronomètre — individuellement, ou par équipes selon les éditions ».
- **Fait** : Reformulé dans `heritage/.../03.json`.

## Ce qui est sain dans la leçon 03
Vérifiées et exactes : draisienne de Drais en 1817, vélocipède des Michaux vers 1861, grand-bi des années 1870, bicyclette de sécurité de Starley en 1885, pneumatique de Dunlop en 1888, Paris-Rouen 1869 remportée par James Moore, UCI en 1900, la rivalité *Le Vélo* / *L'Auto* et son lien avec l'affaire Dreyfus, Desgrange et Géo Lefèvre, départ de Montgeron le 1er juillet 1903 avec 60 coureurs et six étapes pour ~2 400 km, Maurice Garin, la disqualification des quatre premiers en 1904, Pyrénées 1910 et Alpes 1911, reprise en 1947, maillot jaune 1919 et Eugène Christophe, vert 1953, pois 1975, huit coureurs par équipe, lanterne rouge, les palmarès d'Anquetil, Merckx, Hinault et Indurain (dates exactes), Bobet premier à trois succès consécutifs, déchéance d'Armstrong en 2012, Tourmalet 1910, Alpe d'Huez 1952 et ses vingt et un virages, Giro 1909 et maillot rose, Vuelta 1935, les cinq Monuments, Paris-Roubaix 1896 et son pavé, championnat du monde depuis 1927 et le maillot arc-en-ciel, VTT olympique en 1996 et BMX en 2008. La section sur l'invention de la bicyclette est le meilleur passage : elle explique *pourquoi* la roue avant grandit (un tour de pédale = un tour de roue), ce qui rend le grand-bi intelligible au lieu de le décrire.

## Leçon héritée `04.json` — « L'athlétisme, courir, sauter, lancer »

### [GRAVE] 🔧 Le 5 000 m se court sur douze tours et demi, pas douze — et le tableau de la même section dit le contraire du texte
- **Où** : `heritage/culture-g/data/lecons/sport/04.json` — section « Les courses, du sprint au fond »
- **Texte** : « Le fond comprend le cinq mille et le dix mille mètres, épreuves d'endurance pure disputées respectivement sur **douze et vingt-cinq tours**. » ; et, quatre lignes plus bas, dans le tableau de la même section : « 5 000 m (**12 tours et demi**), 10 000 m (25 tours) ».
- **Problème** : 5 000 ÷ 400 = 12,5. Le texte est faux, le tableau juste, et les deux se lisent l'un sous l'autre sur le même écran. C'est le pire cas de figure : l'apprenant voit la contradiction sans pouvoir la trancher, et l'arrondi silencieux (« douze ») a l'air d'être la version simplifiée alors que c'est l'erreur. Le fait est vérifiable par une division que l'apprenant peut faire de tête, ce qui décrédibilise le reste de la leçon.
- **Correction proposée** : dans le texte, « disputées respectivement sur douze tours et demi et sur vingt-cinq tours » — le 5 000 m partant, de fait, dans la ligne droite opposée.
- **Fait** : Texte corrigé dans `heritage/culture-g/data/lecons/sport/04.json`, désormais cohérent avec le tableau de la même section.

### [MOYEN] ✅ Un record donné comme « toujours en vigueur » sans date de constat
- **Où** : `heritage/culture-g/data/lecons/sport/04.json` — section « Champions légendaires et records »
- **Texte** : « des records du monde de 9 secondes 58 sur cent mètres et de 19 secondes 19 sur deux cents mètres, **marques toujours en vigueur** »
- **Problème** : l'information est exacte — j'ai vérifié, les deux records de Berlin 2009 tiennent toujours en août 2026 —, mais « toujours en vigueur » est écrit au présent absolu dans un texte qui, lui, ne bouge plus. La formule se périmera sans que personne ne s'en aperçoive, exactement comme « quatre coureurs seulement » de la leçon 03. Le reste de la leçon date pourtant scrupuleusement ses faits.
- **Correction proposée** : « … records du monde de 9 s 58 sur cent mètres et de 19 s 19 sur deux cents mètres, tous deux encore en vigueur plus de quinze ans après. »
- **Fait** : Reformulé « tous deux encore en vigueur plus de quinze ans après » dans `heritage/culture-g/data/lecons/sport/04.json`.

### [MINEUR] ✅ « quatre cent mètres » sans s
- **Où** : `heritage/culture-g/data/lecons/sport/04.json` — section « Les courses, du sprint au fond »
- **Texte** : « une piste dont le tour mesure **quatre cent mètres** et qui comporte huit couloirs »
- **Problème** : « cent » multiplié et non suivi d'un autre nombre prend l's. La leçon écrit correctement « quatre cents mètres » deux phrases plus loin (« le quatre cents mètres »), et « cent quatre-vingt-douze mètres » ailleurs — c'est une coquille isolée, pas un parti pris.
- **Correction proposée** : « quatre cents mètres ».
- **Fait** : « quatre cents mètres » corrigé dans `heritage/.../04.json`.

## Ce qui est sain dans la leçon 04
Vérifiés et exacts : 776 av. J.-C. et la course du stade (~192 m), diaulos et dolique, composition du pentathlon antique, couronne d'olivier sauvage, AAA britannique en 1880, fédération internationale fondée à Stockholm en 1912, premiers championnats du monde à Helsinki en 1983, règle du faux départ à un dixième de seconde, 110 m haies hommes / 100 m haies femmes, rivière du steeple, poids de 7,26 kg et 4 kg, javelot seul lancer avec course d'élan, cloche-pied / foulée bondissante / saut, décathlon en dix et heptathlon en sept, bataille de Marathon en 490 av. J.-C., Michel Bréal et Coubertin, Spyridon Louis en 1896 sur ~40 km, Windsor et la loge royale en 1908, Owens et ses quatre titres à Berlin, Zátopek à Helsinki en 1952, Beamon à 8,90 m en 1968, Bubka premier à six mètres en 1985, Lewis et ses neuf titres entre 1984 et 1996, Bikila pieds nus à Rome en 1960, Mimoun 1956, Drut 1976, Pérec 1992 et 1996.

**Deux points où cette leçon est meilleure que le seed, et tranche une contradiction relevée en passe 1 :**
1. **La distance du marathon.** La leçon écrit « Cette longueur fut définitivement adoptée comme distance officielle **en 1921** », après avoir expliqué le parcours de 1908. C'est la version exacte, et elle donne raison au constat [MOYEN] de la passe 1 contre le seed (`sp-athletisme`, `sp3-athletisme-fond`), qui présente « arrondie en 1921 » comme un distracteur faux.
2. **Le Fosbury flop.** L'explication du quiz ajoute ce qu'aucun des deux cours du seed ne dit : « Il n'a pu se généraliser que grâce à l'apparition de tapis de réception en mousse, la réception sur le dos étant impossible sur les fosses de sable. » C'est la cause matérielle du basculement technique, et c'est ce qui fait la différence entre un fait à retenir et un fait compris.

## Leçon héritée `05.json` — « Les sports d'hiver, de la neige à la glace »

### [GRAVE] 🔧 Les 86 victoires de Stenmark ne sont plus « une référence absolue » : le record est tombé en 2023
- **Où** : `heritage/culture-g/data/lecons/sport/05.json` — section « Le ski alpin et ses disciplines », et note du tableau des épreuves
- **Texte** : « Le Suédois Ingemar Stenmark, avec quatre-vingt-six victoires d'étapes obtenues entre 1974 et 1989, **reste une référence absolue du circuit**. » ; note du tableau : « Ingemar Stenmark y a gagné 86 épreuves entre 1974 et 1989. »
- **Problème** : le chiffre et les dates sont exacts, mais la phrase est écrite pour faire de 86 le sommet du circuit — et ce sommet a été atteint puis dépassé. **Mikaela Shiffrin a égalé les 86 victoires de Stenmark le 10 mars 2023 à Åre, puis l'a dépassé dès le lendemain** ; elle a franchi la centième victoire en 2025. Le domaine enseigne d'ailleurs déjà l'autre moitié du fait ailleurs : la question `sp3-jo-hiver` du seed donne Shiffrin pour son « record de victoires en Coupe du monde ». L'apprenant qui fait les deux chapitres lit deux fois « le record » attribué à deux personnes, sans qu'aucun des deux textes ne mentionne l'autre. C'est le cas type du palmarès non daté annoncé dans la consigne.
- **Correction proposée** : « Le Suédois Ingemar Stenmark, avec quatre-vingt-six victoires en Coupe du monde entre 1974 et 1989, a longtemps détenu le record du circuit ; l'Américaine Mikaela Shiffrin l'a dépassé en mars 2023 et compte aujourd'hui plus de cent succès. » — et la même précision dans la note du tableau.
- **Fait** : Corrigé aux deux endroits dans `heritage/culture-g/data/lecons/sport/05.json`, conforme à la correction proposée (Shiffrin et mars 2023 mentionnés) ; règle également le MINEUR ⏭️ « victoires d'étapes » laissé en suspens, la formulation devenant « victoires en Coupe du monde ».

### [MOYEN] ✅ La même colonne dit « le talon reste libre » et « des fixations tenant le talon »
- **Où** : `heritage/culture-g/data/lecons/sport/05.json` — section « Des skis utilitaires au sport de montagne », visuel « Deux styles nés de la même planche », colonne « Le ski nordique »
- **Texte** : puce 2 — « Le talon reste libre. » ; puce 4 — « Sondre Norheim invente vers 1860 des **fixations tenant le talon**, dont le virage telemark garde le nom. » ; et dans le texte de la section : « des fixations qui **maintiennent le talon** et permettent de véritables virages contrôlés ».
- **Problème** : la carte censée fixer la distinction nordique/alpin se contredit en quatre lignes. Ce que Norheim invente, c'est une bride d'osier qui tient le talon **latéralement** — le pied ne se dérobe plus dans le virage — tout en le laissant se lever. C'est précisément parce que le talon reste libre en hauteur que le style reste nordique. La formulation actuelle fait de Norheim l'inventeur de la fixation alpine, ce qui est le contresens exact de la section.
- **Correction proposée** : « Sondre Norheim invente vers 1860 une fixation qui tient le talon latéralement, sans l'empêcher de se lever : le pied ne se dérobe plus dans le virage, d'où le virage telemark qui porte le nom de sa région. »
- **Fait** : Corrigé aux trois endroits (texte + deux points du visuel comparatif) dans `heritage/culture-g/data/lecons/sport/05.json`.

### [MOYEN] ✅ La médaille Holmenkollen ne récompense pas une course
- **Où** : `heritage/culture-g/data/lecons/sport/05.json` — quiz, question 5, explication
- **Texte** : « Le Hahnenkamm de Kitzbühel et le Holmenkollen norvégien existent bel et bien, mais **récompensent une course unique**, pas une saison. »
- **Problème** : vrai pour le Hahnenkamm, faux pour l'autre. La **médaille Holmenkollen**, décernée depuis 1895 par la fédération norvégienne de ski, distingue une carrière — des résultats obtenus dans la durée, au festival d'Holmenkollen *et* dans d'autres compétitions — et elle relève du **ski nordique et du biathlon**, pas du ski alpin. Elle est d'ailleurs remise à plusieurs athlètes la même année. L'explication invente donc un fait pour justifier un distracteur, ce qui est la manière la plus discrète d'enseigner une erreur.
- **Correction proposée** : « Le Hahnenkamm de Kitzbühel récompense une course unique ; la médaille Holmenkollen, elle, distingue une carrière en ski nordique et n'a rien à voir avec le circuit alpin. »
- **Fait** : Explication corrigée dans `heritage/culture-g/data/lecons/sport/05.json` (distingue une carrière en ski nordique, sans lien avec le circuit alpin).

### [MINEUR] ⏭️ « Victoires d'étapes » est un vocabulaire de cyclisme
- **Où** : `heritage/culture-g/data/lecons/sport/05.json` — section « Le ski alpin et ses disciplines »
- **Texte** : « avec quatre-vingt-six **victoires d'étapes** obtenues entre 1974 et 1989 »
- **Problème** : en ski alpin on parle de victoires en Coupe du monde, ou de victoires en course ; « étape » appartient au vocabulaire des courses par étapes. Le tableau de la même section emploie d'ailleurs la bonne formule (« a gagné 86 épreuves »).
- **Correction proposée** : « quatre-vingt-six victoires en Coupe du monde ».
- **Fait** : Écarté : la phrase concernée est celle du GRAVE non résolu sur Stenmark (« reste une référence absolue du circuit ») ; je n'ai pas voulu la modifier partiellement sans traiter le GRAVE.

### [MINEUR] ✅ Une opinion présentée comme un fait
- **Où** : `heritage/culture-g/data/lecons/sport/05.json` — quiz, question 5, explication
- **Texte** : « C'est un titre **plus exigeant qu'une victoire olympique**, puisqu'il se gagne sur trente courses et non sur une journée. »
- **Problème** : c'est un jugement, énoncé au même ton que les faits qui l'entourent, dans un texte destiné à être appris. Le raisonnement est de surcroît discutable — les deux titres ne mesurent pas la même chose — et le décompte est approximatif : une saison de Coupe du monde compte plutôt trente-cinq à quarante courses par sexe.
- **Correction proposée** : « Il se gagne sur l'ensemble d'une saison — une trentaine de courses —, là où un titre olympique se joue sur une journée. »
- **Fait** : Reformulé (durée d'une saison vs une journée) dans `heritage/.../05.json`, avec la correction Holmenkollen.

## Ce qui est sain dans la leçon 05
Vérifiés et exacts : l'origine utilitaire du ski et l'étymologie norvégienne, Sondre Norheim et le Telemark vers 1860, la traversée du Groenland par Nansen en 1888, le premier slalom moderne d'Arnold Lunn en 1922, Hannes Schneider et les écoles de ski, les remontées mécaniques des années 1930, la distinction descente / super-G / géant / slalom et leurs formats, l'apparition du super-G dans les années 1980, la Coupe du monde créée en 1967 par Serge Lang et le globe de cristal, les deux styles du ski de fond et le pas de patineur des années 1980, le point de construction et la réception en fente avant au saut à ski, la conversion des points en secondes au combiné nordique, les cinq balles couché puis debout du biathlon avec cible plus petite en position couchée et la pénalité de 150 m ou d'une minute, l'axel, le salchow et le lutz nommés d'après leurs inventeurs, les trois titres de Sonja Henie en 1928, 1932 et 1936, Anissina et Peizerat en 2002, l'anneau de 400 m du patinage de vitesse, les six joueurs du hockey et la Coupe Stanley depuis 1893, le curling écossais du XVIe siècle, Chamonix 1924 reconnue après coup, le décalage de calendrier entre Albertville 1992 et Lillehammer 1994, les trois éditions françaises, les trois titres alpins de Killy en 1968, le snowboard à Nagano en 1998, les cinq titres olympiques de Martin Fourcade entre 2014 et 2018, Saint-Moritz en 1928 et 1948, Oslo en 1952.

## Leçon héritée `08.json` — « La natation et les sports nautiques »

### [GRAVE] 🔧 La natation synchronisée n'avait ni épreuve par équipes ni les trois formats en 1984
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — section « Water-polo, natation artistique et plongeon »
- **Texte** : « [la natation artistique] entre au programme olympique en 1984 à Los Angeles, **sous forme d'épreuves en solo, en duo et par équipes**. »
- **Problème** : faux. Los Angeles 1984 ne comportait que **deux** épreuves, le solo et le duo. L'épreuve **par équipes (ballet à huit) n'apparaît qu'en 1996 à Atlanta** — et c'est précisément à cette occasion que le solo et le duo sont supprimés, le duo étant ensuite rétabli à Sydney en 2000. La phrase inverse donc l'histoire de la discipline : elle donne pour son point de départ un programme qui n'a jamais existé tel quel, et fait disparaître le seul mouvement intéressant, à savoir l'alternance solo/duo/équipes au fil des éditions.
- **Correction proposée** : « entre au programme olympique en 1984 à Los Angeles, avec le solo et le duo ; l'épreuve par équipes n'apparaît qu'en 1996 à Atlanta, où le solo et le duo sont retirés, le duo revenant dès 2000. »
- **Fait** : Phrase corrigée mot pour mot selon la proposition dans `heritage/culture-g/data/lecons/sport/08.json`.

### [GRAVE] 🔧 Phelps n'est plus le seul nageur à avoir gagné quatre fois de suite la même épreuve — et la leçon nomme Ledecky trois lignes plus loin sans le dire
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — section « Les grandes figures des bassins », et explication du quiz q. 3
- **Texte** : « Phelps est également **le seul nageur** à avoir conservé un même titre lors de quatre éditions consécutives des Jeux, sur 200 mètres quatre nages. Chez les femmes, l'Américaine Katie Ledecky s'est imposée comme la référence des courses de demi-fond et de fond en nage libre. »
- **Problème** : **Katie Ledecky a remporté le 800 mètres nage libre à quatre Jeux consécutifs — Londres 2012, Rio 2016, Tokyo 2021 et Paris 2024** —, devenant la première femme et la deuxième nageuse ou nageur, après Phelps, à conserver un titre individuel sur quatre éditions. L'affirmation « le seul nageur » est donc fausse depuis le 3 août 2024, et elle l'est dans le paragraphe qui présente Ledecky, en la réduisant à une « référence » vague là où elle détient exactement l'exploit qu'on vient de déclarer unique. Le visuel « chiffres » répète la même exclusivité (« 4 : éditions consécutives avec le titre du 200 m quatre nages »).
- **Correction proposée** : « Phelps a conservé son titre du 200 mètres quatre nages lors de quatre éditions consécutives des Jeux ; l'Américaine Katie Ledecky a réussi la même chose sur 800 mètres nage libre, de Londres 2012 à Paris 2024, devenant la première femme à y parvenir. »
- **Fait** : Corrigé aux trois occurrences (texte, explication du quiz, visuel « chiffres ») dans `heritage/culture-g/data/lecons/sport/08.json`, conforme à la correction proposée.

### [MOYEN] ✅ Ce ne sont pas les relais mixtes qui ont apporté la parité des épreuves
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — section « Bassins, distances et grandes compétitions »
- **Texte** : « S'y ajoutent les relais et, depuis les Jeux de Tokyo disputés en 2021, **des relais mixtes associant nageurs et nageuses, qui ont permis d'atteindre une parité complète des épreuves entre hommes et femmes**. »
- **Problème** : double inexactitude. (1) Le nombre d'épreuves masculines et féminines était **déjà égal** avant Tokyo — dix-sept de chaque côté depuis plusieurs éditions ; ce qui différait, c'était le programme des distances (les hommes couraient le 1500 m, les femmes le 800 m). (2) Ce qui a corrigé cette asymétrie à Tokyo, ce sont les **deux épreuves ajoutées — le 800 m nage libre hommes et le 1500 m nage libre femmes** —, et non le relais mixte, qui est une épreuve supplémentaire commune aux deux sexes. Le pluriel « des relais mixtes » est de surcroît inexact : il n'y en a qu'un, le 4 × 100 m quatre nages.
- **Correction proposée** : « S'y ajoutent les relais et, depuis les Jeux de Tokyo disputés en 2021, un relais mixte de 4 × 100 mètres quatre nages. Ces mêmes Jeux ont aligné les programmes masculin et féminin en ajoutant le 800 mètres nage libre pour les hommes et le 1500 mètres pour les femmes. »
- **Fait** : Reformulé dans `heritage/culture-g/data/lecons/sport/08.json` : un seul relais mixte, parité obtenue par l'ajout du 800 m hommes et du 1500 m femmes.

### [MOYEN] ✅ Le plongeon figure dans le titre de la section et nulle part dans son texte
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — section « Water-polo, natation artistique et plongeon »
- **Texte** : la section se clôt sur « **Le plongeon complète cette famille aquatique.** » — et c'est tout ce qu'elle en dit.
- **Problème** : un tiers du titre pour une phrase qui ne dit rien : ni les tremplins et plates-formes, ni la hauteur des dix mètres, ni le tremplin à trois mètres, ni le plongeon synchronisé, ni le mode de notation. Le lecteur qui a mémorisé le titre croit avoir appris quelque chose sur le plongeon. Les deux autres disciplines de la section reçoivent chacune un paragraphe complet et daté ; la dissymétrie est visible à l'œil nu.
- **Correction proposée** : soit retirer « et plongeon » du titre, soit ajouter trois phrases : tremplin à trois mètres et haut-vol à dix mètres, épreuves individuelles et synchronisées, notation par des juges sur l'exécution multipliée par un coefficient de difficulté.
- **Fait** : Trois phrases ajoutées (tremplin, haut-vol, notation) dans `heritage/culture-g/data/lecons/sport/08.json`.

### [MINEUR] ✅ « La deuxième championne olympique française », dont le premier est un homme
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — quiz, question 4, explication
- **Texte** : « Elle devenait ainsi la **deuxième championne olympique française** de natation, plus d'un demi-siècle après Jean Boiteux »
- **Problème** : le féminin « championne » et le décompte « deuxième » se contredisent, puisque le premier cité est Jean Boiteux. Manaudou est la **première Française** championne olympique de natation, et la deuxième personne de nationalité française à l'être. Tel quel, l'apprenant peut chercher qui serait la première championne.
- **Correction proposée** : « Elle devenait la première Française championne olympique de natation, plus d'un demi-siècle après le titre de Jean Boiteux en 1952. »
- **Fait** : « la première Française championne olympique » dans `heritage/.../08.json`.

### [MINEUR] ✅ Une date d'histoire de la natation artistique qui mélange deux faits
- **Où** : `heritage/culture-g/data/lecons/sport/08.json` — section « Water-polo, natation artistique et plongeon »
- **Texte** : « [elle] est **reconnue comme sport en 1934** »
- **Problème** : 1934 est l'année où l'expression *synchronized swimming* apparaît, à l'Exposition universelle de Chicago. La **reconnaissance par la fédération internationale date de 1952**. Les deux faits sont réels, la phrase les fond en un seul.
- **Correction proposée** : « le nom de natation synchronisée apparaît en 1934 à Chicago, et la fédération internationale reconnaît la discipline en 1952 ».
- **Fait** : Distingué 1934 (nom) / 1952 (reconnaissance FINA) dans `heritage/.../08.json`.

## Ce qui est sain dans la leçon 08
Vérifiés et exacts : les quatre épreuves de 1896 dans la baie de Zéa et le titre d'Alfréd Hajós, la Seine en 1900 et le lac en 1904, le premier bassin construit pour la compétition à Londres en 1908, la fédération internationale fondée à Londres la même année, l'admission des femmes en 1912 et le titre de Fanny Durack, la description règlementaire des quatre nages (départ dans l'eau du dos, symétrie et tête coupant la surface en brasse, retour aérien des bras en papillon), l'ordre papillon-dos-brasse-libre en individuel et l'inversion du relais **avec sa raison technique** — c'est le meilleur passage de la leçon —, les deux formats de bassin et l'homologation séparée des records, les 10 km de l'eau libre, les 28 médailles et 23 titres de Phelps entre 2004 et 2016, ses huit titres à Pékin dépassant les sept de Spitz en 1972, Jean Boiteux en 1952, le triplé de Laure Manaudou à Athènes en 2004 (or sur 400 m, argent sur 800 m, bronze sur 100 m dos) et ses titres mondiaux de 2005 et 2007, les sept joueurs et les quatre périodes de huit minutes du water-polo, les trente secondes de possession, les dimensions de bassin distinctes, le water-polo masculin olympique dès 1900 et féminin en 2000, Bournemouth en 1869 et les règles londoniennes de 1870, Annette Kellerman à New York en 1907, le changement de nom de 2017, les duos mixtes aux Mondiaux depuis 2015.

**Point de convergence avec la passe 1** : cette leçon donne la version exacte du palmarès de Laure Manaudou (400 m nage libre en or, 800 m en argent), ce qui confirme les deux constats [GRAVE] de la passe 1 sur `sp3-natation`. Le cahier hérité a raison contre le seed sur ce point précis.

## Leçon héritée `10.json` — « La gymnastique et les sports artistiques »

### [GRAVE] 🔧 Ce n'est pas la Fédération internationale qui a reconnu la gymnastique rythmique en 1949
- **Où** : `heritage/culture-g/data/lecons/sport/10.json` — section « La gymnastique rythmique et le trampoline », et explication du quiz q. 4
- **Texte** : « Le premier championnat national d'Union soviétique se tient à Moscou en 1948, et **la Fédération internationale de gymnastique la reconnaît officiellement en 1949** comme discipline féminine de compétition. » ; quiz : « la discipline a été **reconnue par la Fédération internationale de gymnastique en 1949** ».
- **Problème** : confusion entre deux institutions. C'est **l'URSS** qui reconnaît la gymnastique rythmique comme sport de compétition en 1949 ; **la FIG ne l'intègre à son programme qu'en 1961**, ce qui rend possibles les premiers championnats du monde de Budapest en décembre 1963 — que la leçon date d'ailleurs correctement. Telle qu'elle est écrite, la chronologie est incohérente avec elle-même : une discipline reconnue par la fédération internationale en 1949 n'aurait pas attendu quatorze ans ses premiers Mondiaux. L'erreur est répétée dans le quiz, donc apprise deux fois.
- **Correction proposée** : « Le premier championnat national d'Union soviétique se tient à Moscou en 1948, et la discipline y est reconnue comme sport de compétition dès 1949 ; la Fédération internationale de gymnastique l'intègre à son programme en 1961. »
- **Fait** : Corrigé mot pour mot (texte et explication du quiz) dans `heritage/culture-g/data/lecons/sport/10.json`.

### [GRAVE] 🔧 « Cinq engins sont utilisés » — la corde a quitté le programme international en 2011, et l'explication du quiz le dit elle-même
- **Où** : `heritage/culture-g/data/lecons/sport/10.json` — section « La gymnastique rythmique et le trampoline », et quiz q. 4 (« Combien d'engins différents sont utilisés en gymnastique rythmique ? » → **« Cinq »**)
- **Texte** : « **Cinq engins sont utilisés** : la corde, le cerceau, le ballon, les massues et le ruban » ; explication du quiz : « La gymnastique rythmique utilise cinq engins : la corde, le cerceau, le ballon, les massues et le ruban. **En compétition internationale individuelle, la gymnaste présente quatre exercices avec des engins différents.** »
- **Problème** : le présent (« sont utilisés ») est faux. **La FIG a retiré la corde du programme individuel senior en 2011** ; le programme en vigueur, reconduit jusqu'en 2028 pour les seniors comme pour les juniors, est **cerceau, ballon, massues et ruban**. La corde reste un engin historique de la discipline, elle n'est plus un engin de compétition. Pire : l'explication qui justifie la réponse « cinq » énonce dans la phrase suivante que la gymnaste ne présente que **quatre** exercices — sans jamais dire lequel est écarté ni pourquoi. La question demande combien d'engins sont *utilisés* ; la réponse littérale à cette question est aujourd'hui quatre. Le QCM a donc deux réponses défendables, dont celle qui est comptée fausse est la plus juste.
- **Ce que cela confirme** : le constat [GRAVE] de la passe 1 (« le cours dit quatre, la question dit cinq ») était **exact**, et sa correction proposée est la bonne. Le désaccord s'étend en réalité à quatre textes du domaine : `cours/sport.ts` `sp2-gymnastique` (quatre), question `sp2-gymnastique` (cinq), question `sp3-gymnastique` (quatre), et cette leçon (cinq, deux fois). Trois de ces textes se retrouvent dans le même chapitre après la fusion `sp3-gymnastique` → `sp2-gymnastique`.
- **Correction proposée** : « Le programme international repose aujourd'hui sur quatre engins — cerceau, ballon, massues et ruban ; la corde, cinquième engin historique, a été retirée du programme senior en 2011. » Et reformuler la question : « Quels engins composent le programme international de gymnastique rythmique ? » → « Cerceau, ballon, massues et ruban ».
- **Fait** : Corrigé dans `heritage/culture-g/data/lecons/sport/10.json` : texte et explication reformulés selon la proposition ; la bonne réponse du quiz a été déplacée sur « Quatre » (l'énoncé « Combien d'engins… » restant valable, il n'a pas été nécessaire de le reformuler entièrement).

### [MOYEN] ✅ Latynina n'est pas la première à neuf titres olympiques : Paavo Nurmi l'a précédée de trente-six ans
- **Où** : `heritage/culture-g/data/lecons/sport/10.json` — section « Les figures légendaires de la gymnastique », tableau, et explication du quiz q. 5
- **Texte** : « **Première athlète à décrocher neuf titres olympiques**, elle a détenu le record du nombre de médailles olympiques pendant quarante-huit ans » (affirmation répétée trois fois, dont dans le tableau : « Première athlète à décrocher neuf titres olympiques »)
- **Problème** : le Finlandais **Paavo Nurmi atteignait neuf titres olympiques dès 1928** ; Latynina y parvient en 1964. Elle est la première **femme** à neuf titres, ce qui est déjà remarquable. En français « athlète » est épicène : l'affirmation se lit comme un fait absolu, et elle est fausse ainsi. Le domaine se contredit d'ailleurs lui-même : `heritage/culture-g/data/sport.json` (q. 11) cite Nurmi parmi les olympiens à neuf titres, et la leçon 04 le présente comme le maître du fond des années 1920. Ce qui reste vrai et non ambigu, c'est le record du **nombre total de médailles** (dix-huit), tenu quarante-huit ans jusqu'à Phelps en 2012.
- **Correction proposée** : « Première femme à décrocher neuf titres olympiques — le Finlandais Paavo Nurmi y était parvenu dès 1928 —, elle a détenu le record du nombre total de médailles pendant quarante-huit ans, jusqu'à Michael Phelps en 2012. »
- **Fait** : Corrigé aux trois occurrences (texte, visuel, explication quiz) dans `heritage/culture-g/data/lecons/sport/10.json` : « première femme », avec la mention de Paavo Nurmi (1928).

### [MINEUR] ✅ « Les années mille huit cents »
- **Où** : `heritage/culture-g/data/lecons/sport/10.json` — section « Des exercices antiques à la gymnastique moderne »
- **Texte** : « C'est au début **des années mille huit cents** qu'apparaît l'expression de gymnastique artistique »
- **Problème** : calque de l'anglais *the 1800s*. En français on écrit « au début du XIXe siècle ». La leçon emploie d'ailleurs correctement « au tournant des XVIIIe et XIXe siècles » deux phrases plus haut, ce qui rend la formule d'autant plus voyante.
- **Correction proposée** : « C'est au début du XIXe siècle qu'apparaît l'expression de gymnastique artistique ».
- **Fait** : « au début du XIXe siècle » dans `heritage/.../10.json`.

### [MINEUR] ✅ « Olympiades » pour « éditions des Jeux », une fois de plus
- **Où** : `heritage/culture-g/data/lecons/sport/10.json` — section « Les figures légendaires de la gymnastique » et explication du quiz q. 5
- **Texte** : « elle fut médaillée au sol lors de trois **olympiades** consécutives »
- **Problème** : même emploi fautif que celui déjà relevé en passe 1 dans `sp-sports-hiver-nautiques`, `sp3-basket-3` et `cours/sport.ts`. Une olympiade est l'intervalle de quatre ans entre deux Jeux. Le défaut est donc commun au seed **et** au cahier hérité, ce qui en fait un point à traiter globalement et non fichier par fichier.
- **Correction proposée** : « lors de trois éditions consécutives des Jeux ».
- **Fait** : Corrigé (2 occurrences) dans `heritage/.../10.json`.

## Ce qui est sain dans la leçon 10
Vérifiés et exacts : le bureau des fédérations européennes du 23 juillet 1881 devenu Fédération internationale de gymnastique en 1922, la gymnastique masculine olympique dès 1896 et féminine à partir d'Amsterdam en 1928, les quatre agrès féminins et les six agrès masculins avec leurs exigences (cercles continus au cheval d'arçons, croix de fer aux anneaux), les dimensions de la poutre, la structure équipes / concours général / finales par agrès, le premier 10 de Nadia Comăneci aux barres asymétriques le 18 juillet 1976 et l'affichage à 1,00, ses sept notes maximales à Montréal, le 10 de Lavinia Miloșovici au sol en 1992, l'abandon du barème sur dix en 2006 et la mécanique exécution + difficulté avec des totaux de seize à dix-sept points, les premiers Mondiaux de rythmique à Budapest en 1963 avec vingt-huit gymnastes de dix pays, l'entrée olympique en 1984 en individuel et 1996 en ensembles, George Nissen et le trampoline des années trente, la fédération internationale de trampoline en 1964 et les premiers Mondiaux à Londres la même année, l'entrée olympique du trampoline à Sydney en 2000, le mouvement de dix figures, les dix-huit médailles de Latynina (9-5-4) sur 1956, 1960 et 1964, et la biographie de Comăneci (née le 12 novembre 1961 à Onești, Károlyi dès six ans, quatorze ans et huit mois à Montréal, trois titres en 1976, poutre et sol partagé avec Nellie Kim en 1980).

La section « Juger la gymnastique : la fin du dix parfait » est le meilleur passage du domaine que j'aie lu jusqu'ici : elle explique *pourquoi* le barème a changé — le plafonnement rendait les meilleures indépartageables — au lieu de se contenter d'annoncer la réforme, et elle assume la perte symbolique qu'elle entraîne.

## Leçon héritée `11.json` — « Le volley-ball et les sports de raquette »

### [GRAVE] 🔧 Le badminton olympique de 1992 comptait quatre épreuves, pas cinq : le double mixte n'arrive qu'en 1996
- **Où** : `heritage/culture-g/data/lecons/sport/11.json` — section « Le badminton, du jeu de volant au sport olympique », tableau récapitulatif, et explication du quiz q. 4 (l'erreur figure donc **trois fois**)
- **Texte** : « la discipline devient olympique en 1992, **avec cinq épreuves : simples et doubles hommes et dames, plus le double mixte** » ; tableau : « Olympique depuis / 1992, avec cinq épreuves » ; quiz : « Le badminton est devenu olympique en 1992, avec cinq épreuves ».
- **Problème** : à Barcelone en 1992, le badminton n'avait que **quatre** épreuves — simple messieurs, simple dames, double messieurs, double dames. Le **double mixte est ajouté à Atlanta en 1996**, et c'est justement ce qui fait du badminton l'un des rares sports olympiques où hommes et femmes jouent ensemble sur le même terrain — le fait le plus intéressant de la série, et celui que la leçon efface en l'antidatant. Les premiers champions olympiques de double mixte sont les Coréens Kim Dong-moon et Gil Young-ah, en 1996.
- **Correction proposée** : « la discipline devient olympique en 1992 avec quatre épreuves — simples et doubles, hommes et dames ; le double mixte s'y ajoute en 1996 à Atlanta, faisant du badminton l'un des rares sports olympiques où hommes et femmes jouent dans la même équipe. »
- **Fait** : Corrigé aux trois occurrences (texte, tableau, explication du quiz) dans `heritage/culture-g/data/lecons/sport/11.json`, conforme à la correction proposée.

### [MOYEN] ✅ « Jacques Gossima » n'est pas une personne
- **Où** : `heritage/culture-g/data/lecons/sport/11.json` — section « Le tennis de table, du salon victorien à la domination chinoise »
- **Texte** : « David Foster propose un premier ensemble en 1890, **Jacques Gossima en 1891** »
- **Problème** : la construction en parallèle avec « David Foster » fait lire « Jacques Gossima » comme le nom d'un inventeur. En réalité **Gossima est le nom du jeu**, commercialisé en 1891 par la maison anglaise **John Jaques & Son** — d'où « Jaques », et non « Jacques ». La phrase fabrique un personnage qui n'a jamais existé, et le distracteur du quiz q. 1 (« Ivor Montagu, sous le nom de gossima ») suppose au contraire que le lecteur a compris que Gossima est un nom de jeu.
- **Correction proposée** : « David Foster commercialise un premier ensemble en 1890, et la maison anglaise Jaques & Son lance en 1891 un jeu baptisé Gossima ».
- **Fait** : Reformulé dans `heritage/culture-g/data/lecons/sport/11.json` : Jaques & Son, jeu baptisé Gossima.

### [MOYEN] ✅ La balle de tennis de table n'est plus en celluloïd depuis 2014
- **Où** : `heritage/culture-g/data/lecons/sport/11.json` — tableau « Badminton et tennis de table, deux sports de vitesse », ligne « Projectile »
- **Texte** : « **Une balle en celluloïd**, matériau importé en 1901 par James Gibb »
- **Problème** : le tableau décrit l'équipement **actuel** des deux sports (il met le volant de plumes en face), et il donne le celluloïd au présent. Or **l'ITTF est passée à la balle plastique le 1er juillet 2014** dans toutes ses compétitions, pour des raisons environnementales et de sécurité, avec un diamètre et un poids légèrement révisés au passage. Le celluloïd est un fait historique — celui que raconte très bien le paragraphe sur James Gibb —, pas une donnée courante. C'est exactement le type de règle modifiée qu'il faut dater.
- **Correction proposée** : « Une balle de 40 mm, en celluloïd de 1901 — date de son importation par James Gibb — jusqu'en 2014, en plastique depuis. »
- **Fait** : Ligne du tableau corrigée dans `heritage/culture-g/data/lecons/sport/11.json` (celluloïd jusqu'en 2014, plastique depuis).

### [MINEUR] ✅ La largeur du terrain de badminton est celle du double
- **Où** : `heritage/culture-g/data/lecons/sport/11.json` — section « Le badminton », et tableau
- **Texte** : « Le terrain mesure treize mètres quarante de long sur **six mètres dix de large** »
- **Problème** : 6,10 m est la largeur en **double** ; en simple, les couloirs latéraux sont exclus et la largeur tombe à 5,18 m. La leçon 02 prend pourtant soin de faire cette distinction pour le tennis (« 8,23 m en simple, largeur portée à 10,97 m en double »). L'omission est d'autant plus visible que le badminton est ici présenté avec ses cinq épreuves, dont deux de simple.
- **Correction proposée** : « treize mètres quarante de long, sur six mètres dix de large en double et cinq mètres dix-huit en simple ».
- **Fait** : Simple/double distingués (texte + tableau) dans `heritage/.../11.json`.

### [MINEUR] ✅ Le jeu indien s'appelle « poona », pas « poonai »
- **Où** : `heritage/culture-g/data/lecons/sport/11.json` — section « Le badminton », et explication du quiz q. 4
- **Texte** : « se souviennent d'un jeu indien appelé **le poonai** »
- **Problème** : le jeu rapporté des Indes par les officiers britanniques est le **poona**, du nom de la ville de Poona (Pune). La graphie « poonai » n'a pas de source ; elle est répétée à l'identique dans l'explication du quiz, où elle devient un mot à mémoriser.
- **Correction proposée** : « un jeu indien appelé le poona, du nom de la ville de Poona ».
- **Fait** : Corrigé (2 occurrences) dans `heritage/.../11.json`.

## Ce qui est sain dans la leçon 11
Vérifiés et exacts : Morgan à Holyoke en 1895, la mintonette, le basket-ball créé quatre ans plus tôt dans une institution voisine, l'étymologie par la volée, la diffusion par le réseau des YMCA et par les soldats américains, la FIVB fondée à Paris en 1947, les Mondiaux masculins de 1949 et féminins de 1952, l'entrée olympique à Tokyo en 1964 et le retentissement du titre japonais féminin, le terrain de 18 × 9 m, le filet à 2,43 m et 2,24 m, les trois touches et l'interdiction de toucher deux fois de suite sauf après contre, la rotation dans le sens des aiguilles d'une montre, le libéro et ses restrictions, les sets en 25 points et le cinquième en 15, le point à chaque échange, les deux joueurs du beach-volley et son terrain plus petit, les sets en 21 points, la règle du contre comptant dans les trois touches, l'entrée olympique du beach-volley à Atlanta en 1996, l'ascendance chinoise et japonaise (hanetsuki) des jeux de volant et le *battledore and shuttlecock* anglais, Badminton House et le duc de Beaufort en 1873, la physionomie du volant (vitesse initiale extrême puis freinage), le filet à 1,55 m aux extrémités, les sets en 21 points, la Fédération mondiale de badminton en 1934, la géographie du haut niveau, l'origine victorienne du tennis de table, James Gibb et le celluloïd en 1901, l'ITTF de 1926 sous Ivor Montagu, les premiers Mondiaux de Londres remportés par Roland Jacobi, la table de 2,74 × 1,52 m et le filet de 15,25 cm, les sets en 11 points et le service tous les deux points puis à chaque échange à partir de dix partout, l'entrée olympique à Séoul en 1988, la succession Hongrie / Japon / Chine et la parenthèse suédoise de Jan-Ove Waldner.

La section sur le volley est la plus solide : elle relie chaque règle à sa conséquence de jeu (les trois touches → réception-passe-attaque ; la rotation → tous les joueurs passent partout ; l'absence de contact → ce qui distingue le volley des autres sports collectifs), au lieu de lister des chiffres.

## Leçon héritée `12.json` — « Les sports équestres et l'escrime »

### [GRAVE] 🔧 La parité des épreuves d'escrime par équipes date de Tokyo 2021, pas de 2008
- **Où** : `heritage/culture-g/data/lecons/sport/12.json` — section « L'escrime en compétition et ses champions », et explication du quiz q. 4 (l'erreur est donc énoncée deux fois)
- **Texte** : « le fleuret féminin apparaît en 1924, l'épée seulement en 1996 et le sabre en 2004, **la parité complète des épreuves par équipes n'étant atteinte qu'en 2008** »
- **Problème** : faux. Le nombre d'épreuves d'escrime étant plafonné à dix par le CIO, les épreuves par équipes **tournaient d'une édition à l'autre** — une arme masculine et une arme féminine étaient sacrifiées à chaque fois. Ce n'est qu'aux **Jeux de Tokyo, en 2021, que le programme complet de douze épreuves a été disputé pour la première fois** : les trois armes, en individuel et par équipes, pour les hommes comme pour les femmes. 2008 est l'année d'apparition du **sabre féminin par équipes**, ce qui n'est pas la même chose. Telle qu'elle est écrite, la phrase clôt treize ans trop tôt une histoire dont la fin est récente et intéressante.
- **Correction proposée** : « le fleuret féminin apparaît en 1924, l'épée en 1996 et le sabre en 2004 ; les épreuves par équipes ont ensuite longtemps tourné d'une édition à l'autre, faute de places au programme, et il a fallu attendre Tokyo en 2021 pour que les douze épreuves — trois armes, individuel et équipes, hommes et femmes — soient toutes disputées la même année. »
- **Fait** : Corrigé aux deux occurrences (texte, explication du quiz) dans `heritage/culture-g/data/lecons/sport/12.json`, conforme à la correction proposée.

### [MINEUR] ✅ Une formule dont le sens est illisible
- **Où** : `heritage/culture-g/data/lecons/sport/12.json` — section « L'escrime et ses trois armes », et note du tableau
- **Texte** : « Le fleuret a été créé au XVIIe siècle comme arme d'entraînement, et il est **le seul à n'avoir jamais quitté les salles d'armes**. »
- **Problème** : ce que la phrase veut dire — le fleuret est la seule des trois armes à n'avoir jamais servi à se battre pour de vrai — ne se devine pas. « Quitter les salles d'armes » peut aussi bien se lire comme « n'a jamais été pratiqué ailleurs qu'en salle », ce qui serait faux. Le contraste avec l'épée, dont la leçon dit deux phrases plus loin qu'elle « garde la logique du duel », est le vrai contenu de l'idée, et il n'est jamais énoncé.
- **Correction proposée** : « Le fleuret a été créé au XVIIe siècle comme arme d'entraînement : c'est la seule des trois qui n'ait jamais servi à se battre, seulement à apprendre. »
- **Fait** : Reformulé (texte + note du tableau) dans `heritage/.../12.json`.

## Ce qui est sain dans la leçon 12
Vérifiés et exacts : les traces de monte dans les sépultures de la culture Yamna, la distinction entre sport équestre et sports hippiques — utile, et rarement faite —, la Fédération équestre internationale de 1921 et les disciplines non olympiques qu'elle reconnaît, la description des trois disciplines olympiques et de leurs critères respectifs (barrage au chronomètre en saut d'obstacles, même cheval sur les trois tests du complet), l'entrée aux Jeux en 1900 à Paris avec trois épreuves de sauts et la présence sans interruption depuis 1912, la restriction aux cavaliers militaires jusqu'en 1952, l'admission des femmes en dressage en 1952, en saut d'obstacles en 1956 et en concours complet en 1964, la mixité intégrale depuis, la prééminence allemande au palmarès, la répartition fleuret / épée / sabre (surface valable, pointe ou tranchant, convention de priorité et son absence à l'épée), le fleuret et le sabre masculins dès 1896 et l'épée dès 1900, l'escrime parmi les rares sports de toutes les éditions, le fleuret féminin en 1924, l'épée féminine en 1996 et le sabre féminin en 2004, la Fédération internationale d'escrime de 1913, le français langue d'arbitrage et les ordres « En garde, Prêts, Allez », l'appareil électrique de signalisation, et le palmarès de Laura Flessel — cinq médailles olympiques (or individuel et par équipes en 1996, bronze individuel en 2000, argent individuel et bronze par équipes en 2004) et six titres mondiaux, dont ceux de 1998 et 1999 en individuel.

La section sur la mixité de l'équitation est un bon exemple de cours qui explique au lieu d'énumérer : elle donne la raison de l'exception (la performance repose sur le cheval et sur la relation, pas sur la puissance du cavalier), ce qui rend le fait mémorisable.

## Leçon héritée `13.json` — « Les Jeux paralympiques et le handisport »

### [GRAVE] 🔧 Le goalball : la démonstration n'était pas à Toronto en 1976, et il est officiel depuis 1976, pas 1988
- **Où** : `heritage/culture-g/data/lecons/sport/13.json` — section « Des sports inventés pour le handicap », visuel « Deux sports sans équivalent olympique », et explication du quiz q. 3 (l'erreur figure **trois fois**)
- **Texte** : « **Présenté en démonstration aux Jeux paralympiques de Toronto en 1976, le goalball devient officiel en 1988.** »
- **Problème** : les deux dates sont fausses, et elles sont fausses ensemble. Le goalball a été **présenté en démonstration à Heidelberg en 1972**, puis est devenu **épreuve officielle à Toronto en 1976** — l'Autriche remportant le premier titre paralympique en battant la RFA 4-2. Il y a eu un tournoi masculin à chaque édition depuis 1976 ; **1984 est l'année du premier tournoi féminin**. Aucune source ne rattache 1988 à ce sport. La leçon décale donc toute la chronologie d'une édition et invente un point d'arrivée.
- **Ceci résout un point laissé en suspens par la passe 1** (« année d'entrée du goalball au programme paralympique (démonstration en 1976, médailles en 1980 ?) ») : ni l'une ni l'autre des deux hypothèses n'était bonne. J'ai vérifié sur la fiche de l'IBSA et sur le tableau des éditions. Le seed, lui, ne date jamais le goalball — l'erreur est propre au cahier hérité.
- **Correction proposée** : « Présenté en démonstration à Heidelberg en 1972, le goalball devient épreuve officielle dès Toronto en 1976 ; le tournoi féminin s'y ajoute en 1984. »
- **Fait** : Corrigé aux trois occurrences dans `heritage/culture-g/data/lecons/sport/13.json`, conforme à la correction proposée.

### [MINEUR] ✅ Un nom donné en 1948 à des jeux qui ne s'appelaient pas encore ainsi
- **Où** : `heritage/culture-g/data/lecons/sport/13.json` — section « De l'hôpital de Stoke Mandeville aux Jeux de Rome », frise, et explication du quiz q. 1
- **Texte** : « il organise à partir de 1948 des compétitions destinées à ces blessés, **sous le nom de Jeux mondiaux des chaises roulantes et des amputés** »
- **Problème** : en 1948, les épreuves organisées par Guttmann le jour de la cérémonie d'ouverture des Jeux de Londres s'appelaient les **Jeux de Stoke Mandeville** ; elles deviennent internationales en 1952, et l'appellation « Jeux mondiaux en fauteuil roulant et pour amputés » n'apparaît que bien plus tard, quand le mouvement s'élargit au-delà des seuls paraplégiques. Donner ce nom à l'événement de 1948 est un anachronisme — d'autant que la leçon insiste, à juste titre, sur le fait que Guttmann s'adressait au départ à des **paraplégiques**, et non à des amputés.
- **Correction proposée** : « il organise à partir de 1948 les Jeux de Stoke Mandeville, ouverts aux vétérans paraplégiques ; devenus internationaux en 1952, ils s'élargiront ensuite à d'autres handicaps. »
- **Fait** : « Jeux de Stoke Mandeville » rétabli (3 occurrences) dans `heritage/.../13.json`.

### [MINEUR] ✅ La Fédération française handisport n'a pas été créée en 1977
- **Où** : `heritage/culture-g/data/lecons/sport/13.json` — section « Le handisport et la classification des athlètes »
- **Texte** : « la **Fédération française handisport, créée en 1977**, encadre la pratique »
- **Problème** : 1977 est l'année où la fédération **prend ce nom**. Elle existe depuis 1954 (Amicale sportive des mutilés de France), devenue en 1963 Fédération française des sports pour handicapés physiques. Écrire « créée en 1977 » efface vingt-trois ans, et rend incohérent le voisinage avec la Fédération française du sport adapté « créée en 1971 », qui serait alors l'aînée.
- **Correction proposée** : « la Fédération française handisport, qui porte ce nom depuis 1977 et dont l'origine remonte à 1954 ».
- **Fait** : « porte ce nom depuis 1977... origine 1954 » dans `heritage/.../13.json`.

### [MOYEN] ⏭️ La classification est demandée dans trois chapitres différents du domaine
- **Où** : `heritage/culture-g/data/lecons/sport/13.json` — quiz q. 4 ; contre `prisma/seed/culture-g/sport-2.ts` — `sp2-handisport` et `sport-3.ts` — `sp3-paralympiques`
- **Texte** : leçon — « Quel est le rôle de la classification dans les compétitions handisport ? » → « Regrouper les athlètes selon des capacités fonctionnelles comparables » ; seed — « Qu'est-ce que la classification en para-sport ? » et « Qu'est-ce que la classification en sport paralympique ? » → « Un système regroupant les athlètes selon l'impact de leur handicap/déficience ».
- **Problème** : la passe 1 avait relevé les **deux** questions du seed, qui se retrouvent côte à côte après la fusion `sp3-paralympiques` → `sp2-handisport`. Il y en a en réalité **trois**, la leçon héritée `cg-sport-13` posant la même chose une troisième fois dans un chapitre distinct. Même remarque pour le goalball (`sp2-handisport`, `sp3-paralympiques` et cette leçon), pour la boccia et pour la date de 1960 à Rome. Le sujet « paralympique » est donc traité par trois chapitres qui se recouvrent presque entièrement.
- **Correction proposée** : compléter `FUSIONS` pour verser `sp2-handisport` dans `cg-sport-13` — comme le préconisait déjà la passe 1 pour les onze sujets dédoublés — puis dédoublonner sur le couple (bonne réponse, explication).
- **Fait** : Écarté : la correction proposée porte sur la table `FUSIONS` (code, hors de mon périmètre de fichiers) ; aucun correctif textuel sûr n'aurait résolu la triple redondance sans cette fusion.

## Ce qui est sain dans la leçon 13
Vérifiés et exacts : Guttmann à Stoke Mandeville et l'intuition de la rééducation par le sport, la neuvième édition disputée à Rome en 1960 une semaine après les Jeux olympiques et reconnue comme les premiers Jeux paralympiques, les premiers Jeux d'hiver en Suède en 1976, l'étymologie *para* = « à côté de » et non « paraplégie » — et l'explication du quiz va plus loin que le fait en montrant que c'est aussi **un choix de sens**, ce qui est excellent —, le Comité international paralympique fondé le 22 septembre 1989 à Düsseldorf en remplacement d'une organisation de 1982, le siège de Bonn, les ordres de grandeur des Jeux d'été (≈ 4 400 athlètes, ≈ 500 épreuves, une vingtaine de disciplines) et d'hiver (≈ 570 concurrents, six disciplines), la distinction handisport / sport adapté, le principe et le rôle de la classification, les trois grandes familles de déficiences, la Fédération française du sport adapté créée en 1971, les Jeux silencieux de Paris en 1924 et l'existence d'un mouvement sourd distinct, le goalball (trois contre trois, 18 × 9 m, lignes en relief, ballon à grelots, masque opaque pour tous, silence du public), les trois catégories de déficience visuelle, et la boccia (paralysie cérébrale à l'origine, lancer à la main, au pied ou à la rampe, paralympique depuis 1984 à New York).

La dernière section — « Un mouvement qui change le regard sur le handicap » — est l'un des rares passages du domaine qui pose une question ouverte au lieu de conclure : la frontière entre compensation du handicap et avantage technologique, et le contraste entre visibilité pendant les Jeux et invisibilité le reste du temps. C'est du cours qui apprend à penser, pas seulement à réciter.

## Leçon héritée `17.json` — « Les sports anglo-saxons : baseball, cricket et football américain »

### [MOYEN] ✅ Les quatre downs pour dix yards ne viennent pas de Walter Camp
- **Où** : `heritage/culture-g/data/lecons/sport/17.json` — explication du quiz q. 4 ; la section « Le football américain et le Super Bowl » enchaîne de même les deux faits
- **Texte** : « Ce mécanisme […] **découle des réformes conduites par Walter Camp, entraîneur à Yale, entre 1880 et 1883** : il réduisit les équipes de quinze à onze joueurs, diminua la taille du terrain et introduisit le scrimmage. »
- **Problème** : Camp est bien l'auteur du principe des tentatives, mais dans une tout autre proportion : sa règle de 1882 impose **trois** essais pour gagner **cinq** yards. La distance passe à dix yards en 1906, et le quatrième essai n'apparaît qu'en **1912**. En rattachant « quatre downs pour dix yards » aux années 1880-1883, la leçon fait naître le football américain complet en trois saisons, exactement comme le cours `sp2-rugby` du seed fait naître le rugby à treize en une réunion de 1895 — défaut déjà relevé en passe 1. Ici la conséquence est plus lourde : le chiffre appris est celui d'aujourd'hui, la date apprise celle d'il y a trente ans.
- **Correction proposée** : « Le principe des tentatives est de Walter Camp, qui impose en 1882 trois essais pour gagner cinq yards. La distance passe à dix yards en 1906, et le quatrième essai est ajouté en 1912 : c'est cette version qui est encore en vigueur. »
- **Fait** : Corrigé (texte + explication du quiz) dans `heritage/culture-g/data/lecons/sport/17.json` : règle de 1882 (trois essais, cinq yards), dix yards en 1906, quatrième essai en 1912.

### [MINEUR] ✅ « Officiellement démenti » : par qui ?
- **Où** : `heritage/culture-g/data/lecons/sport/17.json` — quiz q. 1, bonne réponse et explication ; et section « Le baseball, du mythe fondateur au sport national »
- **Texte** : « C'est **un mythe officiellement démenti** »
- **Problème** : l'adverbe suppose une instance qui aurait tranché, et l'histoire est plus piquante que cela : la légende Doubleday a précisément été fabriquée par une commission **officielle**, la commission Mills, en 1907, à la demande des dirigeants du baseball. Ce sont les historiens qui l'ont démolie ensuite ; le musée de Cooperstown lui-même la présente aujourd'hui comme une légende. Dire « officiellement démenti » inverse le rôle de l'officiel dans cette affaire, et prive la question de ce qui la rend intéressante.
- **Correction proposée** : réponse « C'est une légende, fabriquée puis abandonnée » ; explication : « La commission Mills, mandatée par les dirigeants du baseball, a officialisé cette origine en 1907 pour donner au jeu une naissance purement américaine. Les historiens l'ont réfutée depuis, et le musée de Cooperstown la présente lui-même comme une légende. »
- **Fait** : Reformulé (choix + explication) autour de la commission Mills 1907 dans `heritage/.../17.json`.

### [MINEUR] ✅ La NFL ne s'appelait pas ainsi en 1920
- **Où** : `heritage/culture-g/data/lecons/sport/17.json` — section « Le football américain et le Super Bowl », et explication du quiz q. 5
- **Texte** : « **La Ligue nationale de football est fondée en 1920.** »
- **Problème** : la ligue fondée en 1920 s'appelait l'*American Professional Football Association* ; elle ne prend le nom de *National Football League* qu'en **1922**. La leçon prend pourtant soin, deux phrases plus loin, de préciser que le Super Bowl ne s'appelait pas encore ainsi lors de ses deux premières éditions — la même précision manque ici.
- **Correction proposée** : « La ligue est fondée en 1920 sous le nom d'American Professional Football Association ; elle devient la National Football League en 1922. »
- **Fait** : « American Professional Football Association » puis « NFL en 1922 » dans `heritage/.../17.json` (texte + explication quiz).

### [MINEUR] ✅ « Les années mille huit cent soixante », encore un calque de l'anglais
- **Où** : `heritage/culture-g/data/lecons/sport/17.json` — sections « Le baseball » (« dans les années mille huit cent vingt ») et « Le football américain » (« dans les années mille huit cent soixante »)
- **Problème** : même construction que « les années mille huit cents » de la leçon 10 : c'est *the 1820s*, *the 1860s* traduits mot à mot. En français on écrit « dans les années 1820 » ou « au cours de la décennie 1860 ». La convention du corpus, qui écrit les nombres en toutes lettres, ne l'impose pas : les décennies restent en chiffres.
- **Correction proposée** : « dans les années 1820 » ; « dans les années 1860 ».
- **Fait** : « dans les années 1820 »/« 1860 » corrigés dans `heritage/.../17.json`.

## Ce qui est sain dans la leçon 17
Vérifiés et exacts : la légende Doubleday et son démontage, le rounders et l'ouvrage de John Newbery en 1744, la première mention de presse du 25 avril 1823, les règles Knickerbocker d'Alexander Cartwright du 23 septembre 1845 et la reconnaissance du Congrès en 1953, le premier match du 19 juin 1846 à Hoboken, les Red Stockings de Cincinnati premiers professionnels en 1869, la Ligue nationale en 1876, la Ligue américaine majeure en 1901, la première Série mondiale en 1903, l'exportation vers Cuba, le Japon et le Mexique, les neuf joueurs et neuf manches, les trois prises, le circuit des quatre bases, le coup de circuit, Jackie Robinson en 1947, la distance de 18,44 m du monticule au marbre, l'implantation mondiale du cricket, la mention de 1478 et la référence anglaise de la fin du XVIe siècle rapportant des parties vers 1550, les onze joueurs, le pitch et le guichet, les courses, les quatre points au sol et six de volée, les lois du MCC en 1788, la distinction test-match / ODI (cinquante overs de six lancers) / Twenty20 et le match nul possible en test, l'origine des Ashes en 1882 et l'urne de terre cuite conservée à Lord's, la rencontre McGill-Harvard de 1874, la réduction de quinze à onze joueurs et l'introduction du scrimmage par Camp, le terrain de 120 yards en-buts compris, les quatre quarts-temps de quinze minutes, le barème complet des points (6 / 3 / 2 / 2 / 1), et le premier Super Bowl du 15 janvier 1967 au Memorial Coliseum, Green Bay battant Kansas City 35-10, sous le nom de *NFL-AFL World Championship Game* jusqu'à la troisième édition.

Le tableau « Trois formats, presque trois sports » est un très bon objet pédagogique : il rend intelligible d'un coup d'œil ce qui déroute le lecteur français devant le cricket, à savoir qu'un même sport puisse durer trois heures ou cinq jours.

## Leçon héritée `01.json` — « Le rugby, un sport de combat collectif »

### [MOYEN] ✅ Le palmarès de la Coupe du monde s'arrête en 2015 — deux éditions et un pays organisateur manquent
- **Où** : `heritage/culture-g/data/lecons/sport/01.json` — section « La Coupe du monde de rugby », texte et tableau « Les éditions qui ont marqué la Coupe du monde »
- **Texte** : « La Nouvelle-Zélande, l'Afrique du Sud et l'Australie ont longtemps dominé le palmarès, **la Nouvelle-Zélande s'imposant notamment en 1987, 2011 et 2015**. La France a organisé **l'édition de 2007** et disputé plusieurs finales sans jamais soulever le trophée. » Le tableau se clôt sur la ligne « 2011 et 2015 — Deux nouveaux titres pour la Nouvelle-Zélande ».
- **Problème** : rien n'est faux mot à mot, et c'est ce qui rend le passage trompeur. Le texte laisse croire que la Nouvelle-Zélande est la nation la plus titrée, alors que **l'Afrique du Sud a gagné en 2019 et en 2023 et détient seule le record de quatre titres** (1995, 2007, 2019, 2023) ; et il présente 2007 comme la seule organisation française alors que **la France a aussi organisé l'édition de 2023**, la plus récente, celle dont un lecteur de 2026 a le souvenir. Un apprenant qui récite cette leçon donnera « Nouvelle-Zélande » à la question « quelle nation compte le plus de titres ? » — et se trompera. C'est le défaut de péremption annoncé, ici sur le palmarès le plus consulté du domaine.
- **Correction proposée** : texte — « L'Afrique du Sud détient le record avec quatre titres (1995, 2007, 2019, 2023), devant la Nouvelle-Zélande, sacrée en 1987, 2011 et 2015. La France a organisé les éditions de 2007 et de 2023, et disputé quatre finales sans jamais soulever le trophée. » ; tableau — ajouter une ligne « 2019 et 2023 — L'Afrique du Sud gagne deux fois de suite et devient la nation la plus titrée ; l'édition 2023 est organisée par la France. »
- **Fait** : Texte et tableau complétés dans `heritage/culture-g/data/lecons/sport/01.json` : Afrique du Sud à quatre titres, France organisatrice de 2007 et 2023.

### [MOYEN] ✅ La hauteur du plaquage : la règle a changé au 1er juillet 2026 pour tout le rugby amateur
- **Où** : `heritage/culture-g/data/lecons/sport/01.json` — section « Les règles principales du rugby à XV »
- **Texte** : « Le plaquage doit se faire **sous la ligne des épaules**. »
- **Problème** : c'est la règle du rugby professionnel, et elle ne vaut plus pour le rugby que pratiquera le lecteur. Après deux saisons d'expérimentation dans dix fédérations et près de 150 000 plaquages mesurés, World Rugby a inscrit dans les lois du jeu une **hauteur de plaquage abaissée pour le rugby amateur, applicable aux saisons commençant à partir du 1er juillet 2026** : chaque fédération choisit son point de référence, **la taille ou la base du sternum**. Une leçon de culture générale peut se contenter d'un seul repère, mais elle ne peut pas donner celui de l'élite comme s'il était universel au moment même où l'autre entre en vigueur.
- **Correction proposée** : « Le plaquage doit se faire sous la ligne des épaules ; depuis la saison 2026-2027, le rugby amateur applique une limite plus basse encore — la taille ou la base du sternum selon les fédérations — pour réduire les chocs à la tête. »
- **Fait** : Nuance ajoutée dans `heritage/culture-g/data/lecons/sport/01.json` sur la limite abaissée du rugby amateur depuis 2026-2027.

### [MOYEN] ✅ Le rugby à treize n'a pas été « créé » en 1895 — même erreur que le cours `sp2-rugby` du seed
- **Où** : `heritage/culture-g/data/lecons/sport/01.json` — section « Le rugby français et le passage au professionnalisme », et explication du quiz q. 1 (« 1895 marque la scission des clubs du Nord de l'Angleterre et la naissance du rugby à treize ») et du quiz q. 5
- **Texte** : « des clubs du Nord, qui souhaitaient indemniser leurs joueurs ouvriers, font sécession et **créent le jeu à treize**, sport distinct avec ses propres règles. »
- **Problème** : la scission du 29 août 1895 à Huddersfield crée la **Northern Union**, qui joue d'abord à quinze avec les règles de la RFU. Le nombre de treize joueurs n'est adopté qu'en **1906**, en même temps que la suppression de la touche et le remplacement de la mêlée ouverte par le *play-the-ball*. Le sport distinct est le produit d'une décennie de divergence, pas d'une réunion. La passe 1 avait relevé exactement ce raccourci dans le cours `sp2-rugby` du seed ; il est ici répété **trois fois** dans la même leçon, ce qui en fait le fait le plus solidement mal appris du domaine.
- **Correction proposée** : « des clubs du Nord, qui souhaitaient indemniser leurs joueurs ouvriers, font sécession en 1895 et fondent la Northern Union ; c'est en 1906 qu'elle ramène ses équipes à treize joueurs et adopte les règles qui font du rugby à XIII un sport distinct. »
- **Fait** : Corrigé (texte principal + deux explications de quiz) dans `heritage/culture-g/data/lecons/sport/01.json` : scission en 1895 puis passage à treize joueurs en 1906.

### [MINEUR] ✅ Le bouclier de Brennus a été dessiné par Coubertin, gravé par Brennus
- **Où** : `heritage/culture-g/data/lecons/sport/01.json` — section « Le rugby français et le passage au professionnalisme »
- **Texte** : « Le vainqueur reçoit le Bouclier de Brennus, **dessiné par le graveur Charles Brennus** »
- **Problème** : le dessin est de **Pierre de Coubertin** ; Charles Brennus, graveur professionnel et dirigeant du SCUF, l'a **réalisé**, et c'est à lui que le trophée doit son nom — non au chef gaulois. La leçon vient d'écrire deux phrases plus haut que Coubertin a arbitré la première finale : la vraie histoire, où le même homme arbitre la finale et dessine le trophée, est plus mémorable que celle qu'elle raconte.
- **Correction proposée** : « Le vainqueur reçoit le Bouclier de Brennus, dessiné par Pierre de Coubertin — qui arbitrait cette première finale — et gravé par Charles Brennus, dirigeant du SCUF, dont il porte le nom. »
- **Fait** : Corrigé dans `heritage/.../01.json`.

## Ce qui est sain dans la leçon 01
Vérifiés et exacts : la légende Webb Ellis correctement présentée comme une reconstruction tardive tout en expliquant pourquoi le nom est resté au trophée, l'interdiction de la main par la Football Association en 1863, la Rugby Football Union à Londres en 1871, le premier match international Écosse-Angleterre le 27 mars 1871 à Édimbourg, les dimensions du terrain (100 m entre les lignes de but, 70 m de large, plus les en-buts), la répartition huit avants / sept arrières, la passe en arrière, l'en-avant et le hors-jeu, le barème complet (essai à cinq points depuis 1992, quatre depuis 1971, trois auparavant ; transformation à deux ; pénalité et drop à trois), le Tournoi né en 1883 à quatre, la France admise en 1910 et exclue de 1932 à 1939, l'Italie en 2000, la Triple Couronne réservée aux quatre nations britanniques et irlandaise, la Calcutta Cup depuis 1879, le titre partagé de 1954 et le Grand Chelem de 1968, la première Coupe du monde en 1987 organisée par la Nouvelle-Zélande et l'Australie, l'absence sud-africaine de 1987 pour cause d'apartheid, les titres australiens de 1991 et 1999, Mandela et Pienaar en 1995, le drop de Wilkinson en 2003, le rugby à sept olympique à Rio en 2016 et ses matches de quatorze minutes, le championnat de France créé en 1892 avec une finale entre deux clubs parisiens arbitrée par Coubertin, la Fédération française de rugby en 1919, l'autorisation du professionnalisme par l'International Rugby Board en août 1995, et le Top 14 en 2005.

L'explication du quiz q. 2 fait ce que peu d'explications du domaine font : elle donne la **raison** du changement de barème — augmenter la valeur de l'essai pour décourager le jeu au pied — au lieu de se contenter de la date.

## Leçon héritée `06.json` — « Le basket-ball et le handball, deux sports collectifs de salle »

### [GRAVE] 🔧 Le tableau du palmarès des équipes de France de handball est faux sur les trois lignes
- **Où** : `heritage/culture-g/data/lecons/sport/06.json` — section « Le handball français, une école de champions », texte **et** tableau « Le palmarès des équipes de France de handball »
- **Texte** : tableau — « Championnat d'Europe | **2006, 2010** | 2018 » ; « Jeux olympiques | **Pékin 2008, Londres 2012** | Tokyo, disputés en 2021 » ; « Championnat du monde | 1995, 2001, 2009, 2011, 2015, 2017 | **2003, 2017** ». Texte — « championne d'Europe en 2006 et en 2010 […] et championne olympique à Pékin en 2008 puis à Londres en 2012 ».
- **Problème** : un tableau de palmarès est ce qu'un apprenant recopie tel quel. Celui-ci a **quatre titres manquants**, vérifiés sur la fiche officielle de la FFHandball et sur la page de l'équipe :
  1. **Euro masculin 2014** (victoire au Danemark) — la France a **quatre** titres européens, pas deux ;
  2. **Euro masculin 2024** (finale gagnée 33-31 après prolongations contre le Danemark, à Cologne) ;
  3. **Or olympique masculin à Tokyo, disputé en 2021** — la France compte **trois** titres olympiques masculins (2008, 2012, 2020), et non deux ; c'est d'autant plus voyant que la ligne d'à côté mentionne bien « Tokyo, disputés en 2021 » pour les féminines ;
  4. **Championnat du monde féminin 2023** (31-28 contre la Norvège, à Herning) — les féminines ont **trois** titres mondiaux, pas deux.
- **Aggravant** : la leçon conclut que « ce cumul de titres mondiaux, européens et olympiques constitue une réussite sans équivalent dans les sports collectifs français ». C'est vrai, et le tableau censé l'établir en amoindrit l'ampleur d'un tiers.
- **Correction proposée** : « Championnat du monde | 1995, 2001, 2009, 2011, 2015, 2017 | 2003, 2017, 2023 » ; « Championnat d'Europe | 2006, 2010, 2014, 2024 | 2018 » ; « Jeux olympiques | Pékin 2008, Londres 2012, Tokyo 2021 | Tokyo 2021 ». Dans le texte : « championne d'Europe en 2006, 2010, 2014 et 2024 […] et championne olympique à Pékin en 2008, à Londres en 2012 et à Tokyo en 2021 ». Et pour les féminines : « des titres de championne du monde en 2003, 2017 et 2023, un titre européen en 2018, l'or olympique à Tokyo en 2021 et l'argent à Paris en 2024 ».
- **Fait** : Tableau et texte corrigés dans `heritage/culture-g/data/lecons/sport/06.json` (les trois lignes du tableau et l'explication du quiz q. 2), conformes à la correction proposée ; l'argent féminin de Paris 2024 était déjà présent (MOYEN traité en amont).

### [MOYEN] ✅ Un palmarès féminin arrêté juste avant les Jeux de Paris
- **Où** : `heritage/culture-g/data/lecons/sport/06.json` — section « Le handball français, une école de champions »
- **Texte** : « L'équipe féminine a suivi le même chemin, avec des titres de championne du monde en 2003 et en 2017, un titre européen en 2018 et **l'or olympique aux Jeux de Tokyo**. »
- **Problème** : outre le titre mondial 2023 manquant (ci-dessus), la phrase s'arrête sur Tokyo alors que les Jeux suivants se sont disputés **en France**. À Paris en 2024, les Françaises ont perdu la finale contre la Norvège et pris l'**argent** — le fait le plus récent et le plus mémorable de cette équipe pour un lecteur français, et le seul absent. « L'or olympique aux Jeux de Tokyo » est de surcroît la seule mention de la leçon qui ne date pas son événement : Tokyo s'est disputé en 2021, ce que le tableau prend soin de préciser mais pas le texte.
- **Correction proposée** : « l'or olympique aux Jeux de Tokyo, disputés en 2021, puis l'argent à domicile à Paris en 2024 ».
- **Fait** : Complété dans `heritage/culture-g/data/lecons/sport/06.json` : Tokyo 2021 daté, argent à Paris 2024 ajouté.

### [MINEUR] ✅ Le basket français : l'argent de Paris 2024 manque aussi
- **Où** : `heritage/culture-g/data/lecons/sport/06.json` — section « La NBA et le rayonnement mondial du basket »
- **Texte** : « l'équipe masculine a remporté le championnat d'Europe en 2013 et décroché plusieurs médailles olympiques d'argent, **notamment en 2000 et en 2020** »
- **Problème** : le « notamment » met la phrase à l'abri du faux, mais choisit d'illustrer par deux Jeux anciens en passant sous silence l'argent de **Paris 2024**, obtenu à domicile en finale contre les États-Unis (87-98). Le même vice que dans la section handball, à un degré moindre : le corpus s'arrête à 2021 partout où il parle de palmarès.
- **Correction proposée** : « décroché trois médailles olympiques d'argent, en 2000, en 2020 et à domicile à Paris en 2024 ».
- **Fait** : « trois médailles d'argent... à Paris en 2024 » dans `heritage/.../06.json`.

## Ce qui est sain dans la leçon 06
Vérifiés et exacts : Naismith en décembre 1891 à Springfield, le professeur canadien cherchant un jeu d'hiver moins brutal que le football américain, les deux paniers à pêches sur la coursive et les treize règles, les neuf joueurs par équipe à l'origine, le fond du panier d'abord plein, le dribble absent des règles initiales, la diffusion par le réseau des unions chrétiennes de jeunes gens, l'arrivée en France dès 1893, la fédération internationale en 1932, l'entrée olympique à Berlin en 1936 en présence de Naismith, le terrain de 28 × 15 m, le cercle de 45 cm à 3,05 m — soit dix pieds —, la ligne à trois points introduite dans les compétitions internationales dans les années 1980, les 24, 8 et 3 secondes, les cinq fautes personnelles, les quatre quart-temps de dix minutes et l'absence de match nul, la NBA née en 1946 sous un autre nom et refondue en 1949 après fusion, ses quart-temps de douze minutes, les onze titres des Celtics entre 1957 et 1969 avec Bill Russell, la rivalité Magic Johnson – Larry Bird, les six titres de Jordan entre 1991 et 1998, la Dream Team de Barcelone en 1992 et la première ouverture aux professionnels de la NBA, l'Euro 2013 de l'équipe de France, les quatre titres NBA de Tony Parker entre 2003 et 2014, Karl Schelenz et le handball à onze vers 1919, Berlin 1936, la variante scandinave en salle, la fédération internationale en 1946, l'entrée olympique en 1972 pour les hommes et 1976 pour les femmes, le terrain de 40 × 20 m, les sept joueurs dont un gardien, la zone à six mètres et le tir en suspension, les trois pas et les trois secondes, l'exclusion de deux minutes, le jet de sept mètres, les Barjots (bronze à Barcelone en 1992, argent mondial en 1993, premier titre mondial en 1995 en Islande sous Daniel Costantini, second en 2001 à domicile) et les Experts de Claude Onesta.

Le visuel de comparaison « Deux sports de salle, deux logiques » est le meilleur objet de la leçon : il n'aligne pas deux fiches côte à côte, il oppose deux **principes** — cible horizontale en hauteur contre but vertical protégé par une zone, faute personnelle contre exclusion temporaire — et rend chaque règle intelligible par sa contrepartie dans l'autre sport.

## Leçon héritée `07.json` — « Les sports mécaniques, de la Formule 1 au rallye »

### [MOYEN] ✅ Le graphique « Les pilotes les plus titrés en Formule 1 » oublie un quadruple champion du monde
- **Où** : `heritage/culture-g/data/lecons/sport/07.json` — section « Les grandes figures de la Formule 1 », visuel `barres` ; et le texte de la même section
- **Texte** : le graphique donne Schumacher 7, Hamilton 7, Fangio 5, **Prost 4**, Senna 3, Lauda 3, Stewart 3. Le texte s'achève sur « Le Britannique Lewis Hamilton a par la suite égalé ce total de sept couronnes, la dernière obtenue en 2020. »
- **Problème** : **Max Verstappen a remporté quatre titres consécutifs, de 2021 à 2024.** Il devrait figurer à égalité avec Alain Prost et devant Senna, Lauda et Stewart. Un graphique qui s'intitule « les pilotes les plus titrés » et qui omet le champion des quatre saisons qui ont suivi son dernier point de données n'est pas incomplet, il est faux : il désigne un classement, et ce classement n'est plus celui-là. Le texte a le même trou — il traverse soixante-quinze ans d'histoire pour s'arrêter net en 2020, sans une ligne sur la décennie en cours (Verstappen champion 2021-2024, puis **Lando Norris sacré en 2025**, premier titre pilote de McLaren depuis Hamilton en 2008).
- **À noter** : Hamilton, lui, est correctement daté — « la dernière obtenue en 2020 ». C'est précisément la précaution qui manque au graphique, qui ne porte aucune date.
- **Correction proposée** : ajouter au graphique « Max Verstappen | 4 » entre Fangio et Prost, sous-titrer le visuel « titres mondiaux, au terme de la saison 2025 », et compléter le texte : « Depuis, le Néerlandais Max Verstappen a remporté quatre titres consécutifs de 2021 à 2024, avant que le Britannique Lando Norris ne soit sacré en 2025. »
- **Fait** : Max Verstappen ajouté au graphique (avec note de date), texte complété (Verstappen puis Norris) dans `heritage/culture-g/data/lecons/sport/07.json`.

### [MINEUR] ✅ « Le Paris-Dakar » ne part plus de Paris et n'arrive plus à Dakar
- **Où** : `heritage/culture-g/data/lecons/sport/07.json` — section « L'endurance et le rallye »
- **Texte** : « Le rallye-raid, dont **le Paris-Dakar créé par Thierry Sabine à la fin des années 1970 est le symbole**, ajoute la traversée du désert et la navigation. »
- **Problème** : le présent de « est le symbole » attache l'épreuve d'aujourd'hui à un nom qui a disparu. La course, créée par Thierry Sabine pour la fin de 1978, a quitté l'Afrique après l'annulation de 2008, s'est disputée en Amérique du Sud de 2009 à 2019, puis en **Arabie saoudite depuis 2020** ; elle s'appelle simplement le **Dakar**. Un lecteur qui retient « Paris-Dakar » cherchera une course qui n'existe plus sous cette forme depuis près de vingt ans. La leçon prend pourtant soin, ailleurs, de dater ses institutions.
- **Correction proposée** : « Le rallye-raid, dont le Dakar est le symbole — créé par Thierry Sabine pour la fin de 1978 sous le nom de Paris-Dakar, il a quitté l'Afrique en 2009 et se dispute en Arabie saoudite depuis 2020 —, ajoute la traversée du désert et la navigation. »
- **Fait** : Reformulé dans `heritage/.../07.json`.

## Ce qui est sain dans la leçon 07
Vérifiés et exacts : le Paris-Rouen de 1894 organisé par *Le Petit Journal* et le fait qu'on y jugeait la sécurité et la maniabilité autant que la vitesse, le Paris-Bordeaux-Paris de 1895 première épreuve chronométrée, l'interruption du Paris-Madrid en 1903 et le basculement vers les circuits fermés, le premier Grand Prix de l'Automobile Club de France près du Mans en 1906, la fédération internationale de 1904, les flèches d'argent allemandes à la fin des années 1930, les 500 miles d'Indianapolis en 1911 sur anneau ovale, Monaco depuis 1929, le championnat du monde créé en 1950 avec une première course le 13 mai à Silverstone et Giuseppe Farina sacré sur Alfa Romeo, la distance de course d'environ 305 km, le classement des constructeurs depuis 1958, Jackie Stewart pionnier de la sécurité, la refonte consécutive au Grand Prix de Saint-Marin 1994, Fangio cinq fois titré entre 1951 et 1957 avec quatre écuries, Jim Clark tué en course en 1968, Lauda trois titres et l'accident de 1976, Prost quatre titres en 1985, 1986, 1989 et 1993, Senna trois titres et sa mort à Imola le 1er mai 1994, les sept titres de Schumacher (1994, 1995, puis 2000 à 2004 sur Ferrari), Ferrari seule écurie présente sans interruption depuis 1950 et la plus titrée, les 24 Heures du Mans créées en 1923 par l'Automobile Club de l'Ouest, le circuit de la Sarthe d'environ treize kilomètres partiellement ouvert à la circulation, les six victoires de Jacky Ickx entre 1969 et 1982 et le record de neuf de Tom Kristensen, le principe des spéciales additionnées et le rôle exact du copilote, le rallye Monte-Carlo depuis 1911, le championnat du monde des rallyes en 1973, les neuf titres consécutifs de Sébastien Loeb de 2004 à 2012 puis Sébastien Ogier, le Tourist Trophy de l'île de Man depuis 1907 sur plus de soixante kilomètres, le championnat du monde de vitesse moto créé en 1949 — un an avant la Formule 1 —, les trois catégories actuelles, les quinze titres d'Agostini entre 1966 et 1975 en 350 et 500 cm³, Ángel Nieto dans les petites cylindrées, les neuf titres de Valentino Rossi entre 1997 et 2009, et la distinction motocross / enduro / trial.

L'explication du quiz q. 4 sur le copilote est un modèle du genre : elle commence par écarter le contresens le plus naturel (« il ne conduit jamais »), donne le contenu réel des notes, puis explique **pourquoi** ce métier existe — des routes découvertes à pleine vitesse et souvent une seule fois. On comprend au lieu de retenir.

## Leçon héritée `09.json` — « Les arts martiaux et les sports de combat »

### [MOYEN] ✅ « Le judo est l'art martial le plus répandu au monde » : un superlatif faux, répété trois fois
- **Où** : `heritage/culture-g/data/lecons/sport/09.json` — section « Le judo, un art martial devenu école de vie », visuel `chiffres` (« 30 millions — de pratiquants : l'art martial le plus répandu au monde »), et explication du quiz q. 3 (« ce qui en fait l'art martial le plus répandu de la planète »)
- **Texte** : « Avec plus de trente millions de pratiquants, le judo est aujourd'hui l'art martial le plus répandu au monde. »
- **Problème** : le chiffre est déjà une fourchette haute — les estimations pour le judo vont de huit à quarante millions selon ce que l'on compte —, mais c'est le superlatif qui pose problème. **World Taekwondo recense officiellement quatre-vingts millions de pratiquants** (et jusqu'à cent trente selon les estimations élargies), le **karaté** est couramment estimé à cinquante millions, le **kung-fu** autant, et le **taï-chi** à plusieurs centaines de millions. Le judo n'arrive donc premier sur aucun décompte disponible. La leçon a par ailleurs de bonnes raisons de le mettre en avant — c'est le premier art martial devenu olympique, le mieux structuré en fédérations —, et il aurait suffi de le dire.
- **Aggravant** : ce superlatif est aussi la dernière phrase de l'explication du quiz q. 3, c'est-à-dire le tout dernier mot que l'apprenant lit sur le judo. C'est ce qui se retient le mieux, et c'est ce qui est faux.
- **Correction proposée** : « Avec plusieurs dizaines de millions de pratiquants, le judo est l'un des arts martiaux les plus répandus au monde, et le premier à être devenu sport olympique. »
- **Fait** : Corrigé aux trois occurrences dans `heritage/culture-g/data/lecons/sport/09.json` (« l'un des arts martiaux les plus répandus »).

### [MOYEN] ✅ Les « protections supplémentaires » de la boxe olympique : les hommes n'ont plus de casque depuis 2016
- **Où** : `heritage/culture-g/data/lecons/sport/09.json` — section « La boxe anglaise et les règles de Queensberry »
- **Texte** : « La boxe amateur, pratiquée aux Jeux olympiques, se distingue de la boxe professionnelle par une durée plus courte et **des protections supplémentaires**. »
- **Problème** : la formule décrit un état de la réglementation qui a pris fin il y a dix ans. **Le casque a été supprimé pour les boxeurs masculins à partir des Jeux de Rio en 2016** — la décision, prise en 2013, se fondait sur des données montrant que le casque n'évitait pas les commotions et augmentait la surface de la cible en gênant la vision. **Les femmes le portent toujours**, à Paris 2024 comme avant. Écrire « des protections supplémentaires » au pluriel indéfini fait donc apprendre le contraire de la règle actuelle pour la moitié des boxeurs. Le paragraphe se conclut d'ailleurs sur les risques neurologiques : le retrait du casque est exactement le débat qu'il annonce, et il est passé sous silence.
- **Correction proposée** : « La boxe olympique se distingue de la boxe professionnelle par des combats plus courts — trois reprises de trois minutes. Les femmes y portent un casque ; les hommes n'en portent plus depuis les Jeux de Rio en 2016, une décision contestée, prise au motif que le casque ne prévenait pas les commotions et gênait la vision. »
- **Fait** : Reformulé dans `heritage/culture-g/data/lecons/sport/09.json` : casque féminin maintenu, masculin supprimé depuis Rio 2016.

### [MINEUR] ✅ Funakoshi en 1922 : la démonstration devant l'empereur, c'est l'année précédente et à Okinawa
- **Où** : `heritage/culture-g/data/lecons/sport/09.json` — section « Karaté, taekwondo et arts martiaux d'Extrême-Orient »
- **Texte** : « Gichin Funakoshi […] l'introduit sur l'archipel japonais **en 1922 à l'occasion d'une démonstration devant l'empereur** »
- **Problème** : deux événements distincts sont fondus en un. Le **6 mars 1921**, Funakoshi dirige une démonstration au château de Shuri, **à Okinawa**, devant le **prince héritier Hirohito** en escale vers l'Europe — il n'est pas encore empereur, il le deviendra en 1926. Au **printemps 1922**, c'est tout autre chose : Funakoshi est invité à Tokyo pour présenter son art à la **première Exposition nationale d'athlétisme organisée par le ministère de l'Éducation** ; c'est cette démonstration-là qui introduit le karaté sur l'archipel, et à l'issue de laquelle il reste au Japon sans jamais revenir vivre à Okinawa. La leçon garde la bonne date pour le bon fait, mais lui attribue le public de l'autre.
- **Correction proposée** : « Gichin Funakoshi, considéré comme le père du karaté moderne, dirige en 1921 une démonstration devant le prince héritier Hirohito au château de Shuri, puis introduit le karaté sur l'archipel japonais en 1922, lors de la première Exposition nationale d'athlétisme du ministère de l'Éducation, à Tokyo. »
- **Fait** : Scindé en deux événements (1921 Okinawa / 1922 Tokyo) dans `heritage/.../09.json`.

### [MINEUR] ✅ « Tokyo en 2020 » pour des Jeux disputés en 2021
- **Où** : `heritage/culture-g/data/lecons/sport/09.json` — section « Karaté, taekwondo et arts martiaux d'Extrême-Orient »
- **Texte** : « Le karaté n'a été présent aux Jeux olympiques qu'une seule fois, **à Tokyo en 2020**, et n'a pas été retenu pour l'édition suivante. »
- **Problème** : les Jeux de Tokyo, reportés pour cause de pandémie, se sont disputés **en 2021**. La leçon 06 du même corpus écrit soigneusement « Tokyo, disputés en 2021 » ; celle-ci écrit « en 2020 » sans réserve. Un apprenant qui lit les deux chapitres reçoit deux dates pour les mêmes Jeux. La précision compte d'autant plus que le fait énoncé est une unicité : « une seule fois ».
- **Correction proposée** : « à Tokyo, lors des Jeux de 2020 disputés en 2021 ».
- **Fait** : « lors des Jeux de 2020 disputés en 2021 » dans `heritage/.../09.json`.

## Ce qui est sain dans la leçon 09
Vérifiés et exacts : l'ancienneté du combat réglé et les reliefs mésopotamiens et égyptiens, le pugilat et la lutte aux jeux panhelléniques, Palestra fille d'Hermès donnée comme attribution mythologique et non comme fait, les trois façons antiques de marquer, la lutte gréco-romaine au programme dès Athènes en 1896 et sa présentation comme héritière supposée de l'Antiquité, l'interdiction de saisir les jambes, la lutte libre reconnue en 1901 et disputée à Saint-Louis en 1904, le tapis circulaire de neuf mètres, le tombé deux épaules au sol, la lutte féminine olympique au début des années 2000, Jigoro Kano en 1882 à partir du ju-jitsu, les deux maximes (bonne utilisation de l'énergie ; entraide et prospérité mutuelles) et la déduction juste qu'en tire la leçon sur le respect de l'adversaire, les huit valeurs du code moral, la progression kyus puis dans du premier au dixième degré, Kawaishi introduisant les ceintures de couleur en France dans les années trente, le judo olympique en 1964 puis durablement à partir de 1972, les épreuves féminines en 1992, les règles de Queensberry rédigées par John Graham Chambers en 1865 sous le patronage du marquis, les gants rembourrés, les reprises de trois minutes séparées d'une minute, le compte de dix secondes, les catégories de poids, Okinawa et le royaume des Ryūkyū annexé en 1879, la filiation avec la boxe de la grue blanche du Fujian, le changement d'écriture de 1936 faisant passer de « main chinoise » à « main vide », les quatre grands styles, le triptyque kihon / kata / kumite, le karaté olympique une seule fois et non retenu ensuite, le nom taekwondo proposé le 11 avril 1955 par Choi Hong-hi, la démonstration à Séoul en 1988 et à Barcelone en 1992 puis l'entrée pleine à Sydney en 2000, le barème du taekwondo (trois points pour un coup de pied à la tête, cinq s'il est retourné), toute la chronologie d'Ali — titre olympique des mi-lourds à Rome en 1960, titre mondial en 1964 contre Liston, conversion et changement de nom, retrait du titre et de la licence en 1967, arrêt de la Cour suprême en 1971, Kinshasa le 30 octobre 1974 contre Foreman par hors-combat à la huitième, troisième titre en 1978, trois combats contre Frazier, bilan de cinquante-six victoires en soixante et un combats —, les deux titres olympiques de David Douillet en 1996 et 2000, et le palmarès de Teddy Riner : champion du monde à dix-huit ans, onze titres mondiaux, cinq médailles d'or olympiques dont trois en individuel en 2012, 2016 et 2024, et cent cinquante-quatre victoires consécutives entre 2010 et 2020.

**À signaler pour une fois en bien** : c'est la seule leçon du domaine dont un palmarès va jusqu'en 2024. Riner y est compté avec ses cinq titres olympiques, y compris ceux de Paris. Là où les leçons 01, 06 et 07 s'arrêtent en 2015, 2021 et 2020, celle-ci a été tenue à jour — la preuve que le défaut de péremption relevé ailleurs n'est pas une fatalité du corpus.

## Leçon héritée `14.json` — « L'histoire du sport féminin »

### [MOYEN] ✅ Une histoire du sport féminin qui s'arrête avant son aboutissement : la parité de Paris 2024
- **Où** : `heritage/culture-g/data/lecons/sport/14.json` — section « Une conquête discipline par discipline » (dernière phrase), note du tableau « Quand les femmes ont eu accès à ces épreuves olympiques », et explication du quiz q. 4
- **Texte** : « Le mouvement s'est ensuite accéléré, **le Comité international olympique ayant fait de la parité entre épreuves masculines et féminines un objectif explicite**. » — la même phrase, au mot près, sert de note au tableau et de conclusion au quiz q. 4 (« un objectif affiché »).
- **Problème** : l'objectif a été **atteint**, et la leçon n'en dit rien. Aux Jeux de **Paris en 2024**, le CIO a réparti les quotas à parts strictement égales — **5 250 athlètes de chaque sexe** —, faisant de cette édition la première de l'histoire olympique à atteindre la parité complète sur le terrain, en application de la recommandation 11 de l'Agenda olympique 2020. La progression est spectaculaire et se raconte en une ligne : 2,2 % de femmes en 1900 à Paris, 23 % à Los Angeles en 1984, 44 % à Londres en 2012, 48 % à Tokyo en 2021, 50 % à Paris en 2024. Une leçon qui s'ouvre sur l'exclusion des femmes des Jeux de 1896 et qui a pour fil directeur la conquête discipline par discipline devrait finir sur ce chiffre — d'autant que la boucle se referme sur la même ville, Paris, où les femmes furent admises pour la première fois en 1900. Elle finit à la place sur un « objectif explicite », c'est-à-dire sur un futur qui appartient au passé.
- **Nuance à conserver** : la parité porte sur les **quotas d'athlètes**, non sur le nombre d'épreuves — Paris 2024 comptait 157 épreuves masculines, 152 féminines et 20 mixtes. La leçon peut donc garder son propos sur les inégalités qui demeurent, en le rendant plus juste.
- **Correction proposée** : « Le mouvement s'est ensuite accéléré : après 2,2 % de femmes aux Jeux de Paris en 1900, 23 % à Los Angeles en 1984 et 48 % à Tokyo en 2021, les Jeux de Paris en 2024 ont été les premiers à répartir les quotas à parts égales — 5 250 athlètes de chaque sexe. La parité porte toutefois sur le nombre d'athlètes, non sur celui des épreuves : Paris 2024 en comptait encore 157 masculines pour 152 féminines, plus 20 mixtes. »
- **Fait** : Corrigé aux trois occurrences (texte, note du tableau, explication du quiz) dans `heritage/culture-g/data/lecons/sport/14.json` avec la parité de Paris 2024 (5 250 athlètes de chaque sexe).

### [MINEUR] ✅ Alice Milliat n'a pas pris la présidence de la fédération française en 1917
- **Où** : `heritage/culture-g/data/lecons/sport/14.json` — section « Alice Milliat et les Jeux mondiaux féminins », visuel `frise`, événement daté **1917**
- **Texte** : « **1917** — La Fédération des sociétés féminines sportives de France — Fondée en décembre ; **Alice Milliat, rameuse accomplie, en prend la présidence** et développe l'athlétisme, le football, le basket-ball et l'aviron féminins. »
- **Problème** : la fédération est bien fondée en décembre 1917, mais Milliat n'y est alors que **trésorière** ; elle devient secrétaire générale en juin 1918 et n'accède à la **présidence que le 10 mars 1919**. La frise, qui range les deux faits sous une seule date, avance son accession de deux ans — et prive au passage la chronologie de sa logique : c'est bien en tant que présidente fraîchement élue qu'elle essuie, **la même année 1919**, le refus de Coubertin qui fait l'objet de l'événement suivant de la frise. Le texte courant, lui, est correctement construit (« elle prend la présidence de la Fédération […], fondée en décembre 1917 ») : seule la frise fusionne.
- **Correction proposée** : scinder en deux événements — « 1917 — La Fédération des sociétés féminines sportives de France est fondée en décembre ; Alice Milliat, rameuse accomplie, en est la trésorière. » et « 10 mars 1919 — Alice Milliat en devient présidente et développe l'athlétisme, le football, le basket-ball et l'aviron féminins. »
- **Fait** : Scindé en deux (trésorière 1917 / présidente 10 mars 1919) dans le texte et la frise de `heritage/.../14.json`.

## Ce qui est sain dans la leçon 14
Vérifiés et exacts : les Héraia d'Olympie dédiées à Héra et l'exclusion des femmes mariées jusqu'au rang de spectatrices, la pratique spartiate de la course et de la lutte, le recul médiéval et l'argument médical victorien sur la fécondité, la gymnastique admise comme hygiène plutôt que comme sport, le tennis, le croquet et l'équitation tolérés dans les milieux aisés, l'autodéfense comme instrument féministe à la fin du siècle, le rôle libérateur de la bicyclette, l'exclusion assumée par Coubertin en 1896, l'entrée limitée des femmes dès 1900, Charlotte Cooper première championne olympique en épreuve individuelle le 11 juillet 1900 face à Hélène Prévost sur le score de 6-1, 6-4, son titre en double mixte le même jour, ses cinq Wimbledon entre 1895 et 1908 dont le dernier à trente-sept ans — record de longévité du tournoi —, son service porté au-dessus de l'épaule, Alice Milliat née à Nantes en 1884 et morte en 1957, le refus de Coubertin en 1919, les quatre éditions des Jeux mondiaux féminins de 1922 à 1934 à Paris, Göteborg, Prague et Londres, les vingt mille spectateurs de 1922 et la progression de 77 athlètes de 5 pays à 270 de 19 pays, l'entrée de l'athlétisme féminin à Amsterdam en 1928, le 800 mètres disputé en 1928 puis supprimé et rétabli seulement en 1960, le marathon en 1984 à Los Angeles avec la victoire de Joan Benoit devant Grete Waitz, championne du monde en titre, la boxe masculine olympique depuis 1904 et féminine seulement depuis 2012, et l'équitation comme sport mixte.

Deux points vérifiés qui auraient pu passer pour des erreurs et n'en sont pas : c'est bien **J. Sigfrid Edström, président de la fédération internationale d'athlétisme**, qui s'est opposé à l'appellation « Jeux olympiques féminins » — la leçon a raison contre l'attribution courante au CIO ; et la date du **21 mars 1921** pour la fondation de la FSFI, que je croyais fautive, est effectivement documentée (transformation du comité d'organisation en fédération), même si la date d'enregistrement du 31 octobre 1921 est celle que retiennent la plupart des sources. Je ne les compte donc pas comme constats.

La dernière section — « Les inégalités qui demeurent » — est le meilleur passage : elle range les déséquilibres en trois ordres (économique, médiatique, institutionnel), explique le cercle vicieux de l'exposition médiatique au lieu de le déplorer, et se termine sur une question ouverte — la définition des catégories — sans la trancher. C'est le registre juste pour un sujet où le corpus aurait facilement pu verser dans le slogan.

## Leçon héritée `15.json` — « Le dopage et l'éthique sportive »

### [MOYEN] ✅ Le Code mondial antidopage a une cinquième version, adoptée en 2025 et applicable au 1er janvier 2027
- **Où** : `heritage/culture-g/data/lecons/sport/15.json` — section « L'organisation de la lutte antidopage », visuel `frise` (événement 2004), et explication du quiz q. 1 : l'information figure **trois fois**
- **Texte** : « son principal instrument est le Code mondial antidopage, entré en vigueur en janvier 2004 puis **révisé en 2009, en 2015 et en 2021** »
- **Problème** : la liste s'arrête une révision trop tôt. La **sixième Conférence mondiale sur le dopage dans le sport, tenue à Busan du 1er au 5 décembre 2025, a approuvé le Code mondial antidopage 2027 et les Standards internationaux qui l'accompagnent** ; ils entrent en vigueur le **1er janvier 2027** et fixeront le cadre pour les six années suivantes. Le chantier de révision avait été ouvert en septembre 2023. C'est exactement le type de fait que la consigne signale : une règle qui se modifie et qu'un cours énonce au présent sans date de validité. La cadence des révisions (2009, 2015, 2021, 2027) est de surcroît un fait intéressant en soi — un code refondu tous les six ans —, que la leçon effleure sans l'énoncer.
- **Correction proposée** : « entré en vigueur en janvier 2004, il est refondu tous les six ans environ : révisions de 2009, 2015 et 2021, puis un Code 2027 approuvé à Busan en décembre 2025 et applicable au 1er janvier 2027 ».
- **Fait** : Corrigé (texte + frise) dans `heritage/culture-g/data/lecons/sport/15.json` : Code 2027 approuvé à Busan en décembre 2025.

### [MINEUR] ✅ La date d'annulation du record de Ben Johnson est reprise d'une source qui se contredit
- **Où** : `heritage/culture-g/data/lecons/sport/15.json` — section « Les grandes affaires qui ont marqué le sport », tableau « Quatre affaires qui ont changé le sport », et explication du quiz q. 3 (trois occurrences)
- **Texte** : « son record du monde de 1987 est annulé **le 20 janvier 1990** »
- **Problème** : cette date vient de l'infobox de l'article français « Ben Johnson (athlétisme) », cité en source de la leçon — infobox qui est elle-même fautive puisqu'elle attribue à 1987 le chrono de 9 s 79, réalisé en fait à Séoul en 1988 (le record de Rome, en août 1987, est de 9 s 83). Les sources de presse contemporaines et l'article anglophone situent la décision de l'IAAF en **septembre 1989**, après les aveux de Johnson devant la commission Dubin en juin : la fédération lui retire alors à la fois le record de 9 s 83 et son titre mondial de Rome. La leçon a donc importé une précision au jour près depuis une source qui se trompe de chronomètre. Mieux vaut ici ne pas dater que mal dater : la leçon est juste sur tout le reste de l'affaire.
- **Correction proposée** : « son record du monde de 1987 lui est retiré en 1989, après ses aveux devant la commission d'enquête Dubin, en même temps que son titre de champion du monde ».
- **Fait** : « retiré en 1989, après ses aveux devant la commission Dubin » (3 occurrences) dans `heritage/.../15.json`.

## Ce qui est sain dans la leçon 15
Vérifiés et exacts : la définition du dopage, l'ancienneté de la pratique, le premier cas moderne rapporté chez des nageurs à Amsterdam en 1865, la banalisation médicale d'une grande partie du XXe siècle, la mort de Tom Simpson dans le mont Ventoux en 1967 comme bascule, les trois fondements de l'interdiction (santé, équité, sens de la compétition), la description exacte de chaque famille de produits — anabolisants dérivés de la testostérone pour la puissance, EPO stimulant la production de globules rouges pour l'endurance, amphétamines agissant sur la perception de la fatigue, diurétiques servant à la fois à perdre du poids et à diluer les urines —, les transfusions autologues, la règle des deux critères sur trois pour inscrire une substance à la liste et la réactualisation annuelle de celle-ci, l'affaire Festina de 1998 comme déclencheur, la création de l'Agence mondiale antidopage le 10 novembre 1999 et son siège à Montréal, sa structure paritaire entre mouvement sportif et gouvernements et son financement à parts égales depuis 2002, la convention de l'Unesco de 2005 ratifiée par plus de cent quatre-vingt-cinq États, les contrôles inopinés et l'obligation de localisation, le principe du passeport biologique, le 100 mètres de Séoul en 9 s 79 devant Carl Lewis, le stanozolol, le contre-échantillon trois jours plus tard, la suspension de deux ans, les aveux de dopage depuis 1981 devant la commission d'enquête et la radiation à vie après la récidive de 1993, les sept Tours d'Armstrong de 1999 à 2005, la formule de l'agence américaine sur « le programme le plus sophistiqué jamais vu », la décision de l'UCI du 22 octobre 2012 annulant ses résultats depuis août 1998 sans réattribution, ses aveux publics de janvier 2013, et le dopage d'État russe révélé en 2016.

L'étymologie du fair-play est traitée avec une prudence rare dans le corpus : « on le fait souvent remonter à Shakespeare […] mais il semble exister dès le XIVe siècle » — on nous donne l'attribution courante **et** sa fragilité. Et la section se clôt sur deux positions opposées, Margaret Mead d'un côté, George Orwell de l'autre, sans arbitrer : c'est un cours qui accepte que son sujet soit discutable.

L'explication du quiz q. 4 est la meilleure du domaine : elle ne se contente pas de décrire le passeport biologique, elle dit **le problème auquel il répond** — les tricheurs ont une longueur d'avance sur la détection —, ce qui rend le dispositif compréhensible au lieu d'être mémorisable.

## Leçon héritée `16.json` — « L'économie et les médias du sport »

### [GRAVE] 🔧 « Les collectivités territoriales sont de très loin le premier financeur institutionnel » : l'écart est de quatre points, et l'État est passé devant en 2020 et 2021
- **Où** : `heritage/culture-g/data/lecons/sport/16.json` — section « Le sport, un secteur économique à part entière », note du visuel `chiffres`, **et le quiz q. 1 tout entier**, dont c'est la réponse (« En France, quel est le premier financeur institutionnel du sport ? » → « Les collectivités territoriales »)
- **Texte** : « les collectivités territoriales sont **de très loin** le premier financeur institutionnel, devant l'État, puis les entreprises » — repris mot pour mot dans la note du visuel, et dans l'explication du quiz : « Ce sont les collectivités territoriales […] qui financent le plus le sport en France parmi les institutions, devant l'État puis les entreprises privées. »
- **Problème** : c'est un ordre de grandeur des années 2000, plaqué sur un présent qui ne lui ressemble plus. D'après les chiffres de l'INJEP, en **2022 les administrations publiques locales ont dépensé 8,2 milliards d'euros pour le sport, soit 52 % de la dépense publique, contre 7,6 milliards pour l'État, soit 48 %** — un écart de quatre points, pas « de très loin ». Surtout, l'INJEP précise que les collectivités sont « **redevenues** » premières en 2022, **après deux années où l'État avait dépensé davantage** (crise sanitaire, puis préparation des Jeux de Paris). Le fait n'est donc plus une constante structurelle mais un équilibre qui bascule d'une année sur l'autre, et une question de QCM sans date n'a plus de bonne réponse stable : posée sur l'exercice 2021, la réponse attendue serait « l'État ».
- **Aggravant** : c'est la seule question du quiz sur l'économie française du sport, et c'est aussi la seule affirmation du chapitre présentée comme un enseignement de fond (« Ce constat est essentiel pour comprendre le sport français »).
- **Correction proposée** : texte — « parmi les financeurs publics, les collectivités territoriales et l'État sont au coude à coude : 8,2 milliards d'euros pour les premières en 2022, soit 52 % de la dépense publique, contre 7,6 milliards pour le second. Les collectivités devancent l'État la plupart des années, mais celui-ci est passé devant en 2020 et 2021. » ; quiz — dater l'énoncé (« en 2022 ») ou remplacer par une question sur la part des ménages, qui, elle, est stable.
- **Fait** : Texte, note du visuel et quiz (énoncé daté « en 2022 » + explication réécrite avec les chiffres 8,2/7,6 milliards et la bascule de 2020-2021) corrigés dans `heritage/culture-g/data/lecons/sport/16.json`, conforme à la correction proposée.

### [MOYEN] ✅ Les chiffres du poids économique du sport datent de 2009 — ils ont depuis presque doublé
- **Où** : `heritage/culture-g/data/lecons/sport/16.json` — section « Le sport, un secteur économique à part entière », visuel `chiffres` « Le poids économique du sport en France », et explication du quiz q. 1
- **Texte** : « le poids de ce secteur a été évalué à trente milliards quatre cents millions d'euros en 2005, puis à trente-quatre milliards neuf cents millions d'euros en 2009, ce qui représentait alors environ un virgule neuf pour cent du produit intérieur brut »
- **Problème** : les montants sont datés, ce qui met la leçon à l'abri du faux — c'est la bonne pratique, et je la porte au crédit du rédacteur. Mais un chapitre d'économie du sport dont les données les plus récentes ont **dix-sept ans** ne décrit plus son objet : pour la seule année **2022**, l'INJEP compte **25,9 milliards d'euros de dépense sportive des ménages (1 point de PIB) et 15,7 milliards de dépense publique (0,6 point)**, soit déjà plus de quarante milliards avant même de compter les entreprises. Les trois chiffres du visuel — 30,4 Md€, 34,9 Md€, 1,9 % — donnent donc à l'apprenant un ordre de grandeur qui n'est plus le bon, et le chapitre passe à côté de ce qui s'est passé entre-temps (l'accélération d'après 2021, la préparation des Jeux de Paris).
- **Correction proposée** : conserver la série historique en la présentant comme telle, et ajouter le point récent : « 30,4 milliards d'euros en 2005, 34,9 en 2009 ; en 2022, la seule dépense des ménages atteint 25,9 milliards — un point de PIB — et la dépense publique 15,7 milliards, soit 0,6 point. »
- **Fait** : Complété avec les chiffres 2022 (texte + deux items ajoutés au visuel chiffres) dans `heritage/culture-g/data/lecons/sport/16.json`.

### [MINEUR] ✅ Une phrase qui ne dit rien : « une part mesurable du produit intérieur brut »
- **Où** : `heritage/culture-g/data/lecons/sport/16.json` — section « Parrainage, naming et équipementiers », dernière phrase
- **Texte** : « La fabrication d'articles de sport représente à elle seule **une part mesurable** du produit intérieur brut. »
- **Problème** : « mesurable » ne mesure rien. Toute activité économique représente une part mesurable du PIB — c'est ce que veut dire « PIB ». La phrase occupe la place d'un chiffre sans en donner un, et clôt la section sur un vide. Dans un chapitre entièrement construit sur des montants, c'est la seule affirmation qui refuse d'en avancer un.
- **Correction proposée** : soit donner le chiffre, soit supprimer la phrase. Le paragraphe se termine très bien sur « à côté desquelles subsistent des fabricants spécialisés sur des niches techniques », qui, lui, apprend quelque chose.
- **Fait** : Phrase creuse supprimée dans `heritage/.../16.json` (le paragraphe se termine sur la phrase qui suit, jugée bonne par l'audit).

### [MINEUR] ✅ Un titre de section qui promet le direct permanent et livre une clause
- **Où** : `heritage/culture-g/data/lecons/sport/16.json` — section « De la presse écrite au direct permanent »
- **Texte** : la section consacre une page entière à la presse écrite (Bell's Life, Le Sport, L'Auto, L'Équipe), puis expédie tout le reste en une phrase : « **La radio, puis la télévision et enfin le numérique ont ensuite étendu ce lien jusqu'au direct permanent d'aujourd'hui.** »
- **Problème** : le titre annonce un parcours en deux temps, le texte n'en traite qu'un. Le second membre — l'invention du direct radiophonique, l'arrivée de la télévision, les réseaux sociaux et l'attente permanente qu'ils créent — est nommé mais jamais décrit. Le défaut est d'autant plus sensible que la leçon consacre par ailleurs une section complète aux droits de diffusion : la matière existe, elle est simplement rangée ailleurs, et le titre n'en tient pas compte.
- **Correction proposée** : soit renommer la section « Quand les journaux inventaient le sport » — c'est déjà le titre de sa frise, et c'est exactement son sujet —, soit lui ajouter un vrai paragraphe sur la radio et la télévision.
- **Fait** : Section renommée « Quand les journaux inventaient le sport » dans `heritage/.../16.json`.

## Ce qui est sain dans la leçon 16
Vérifiés et exacts : la définition de l'économie du sport, la structure de la dépense des ménages (vêtements et équipements en tête, puis chaussures, accessoires, matériel et services), le rôle des communes, départements et régions dans la construction et l'entretien des équipements, la remarque juste — et rare — que le sport professionnel médiatisé ne représente qu'une fraction de cette économie, l'inventaire des cinq ressources d'un club et le raisonnement qui explique pourquoi la billetterie est devenue minoritaire (un stade a un nombre de places fini, la télévision non), la mutualisation puis la redistribution des droits par les ligues, l'analyse de l'inflation des droits par la privatisation des chaînes et l'apparition du payant, l'argument du direct comme produit d'appel irremplaçable, les effets en retour sur les horaires, les calendriers et certaines règles, la fragmentation récente due aux plateformes, la distinction parrainage / mécénat et les conditions françaises de déductibilité (entreprise identifiable, montant proportionné aux retombées), les trois formes du parrainage sportif, *Bell's Life in London* fondé par Robert Bell vers 1822 comme premier journal sportif, *Le Sport* lancé le 17 septembre 1854 par Eugène Chapus, *L'Auto* fondé le 16 octobre 1900 par Henri Desgrange sous le nom de *L'Auto-Vélo* en riposte au *Vélo*, le Tour de France créé en 1903 pour vendre du papier, le tirage passé de 22 000 exemplaires en 1901 à plus de 360 000 en 1933 avec des pointes proches de 800 000 pendant l'épreuve, la couleur du maillot jaune reprise de celle du papier, la disparition de *L'Auto* le 17 août 1944 et la fondation de *L'Équipe* par Jacques Goddet en 1946.

La phrase « Ces journaux ne se sont pas contentés de raconter le sport : ils l'ont créé » est le meilleur moment du chapitre, et le Tour de France en est la démonstration parfaite. C'est un cours qui a une thèse, ce qui est rare dans le corpus.

---

# Passe 2 — ce que la relecture croisée ajoute

> Méthode : je ne relis pas les fichiers comme des fichiers, mais je charge le
> module **comme le fait l'application** (`contenuDe`, avec les fusions
> appliquées), de façon à voir ce qu'un apprenant voit réellement dans une
> notion. Puis je croise les questions entre elles, je confronte chaque astuce
> (`tip`) aux questions de sa propre notion, et je reprends une à une les
> corrections proposées en passe 1 pour les vérifier sur le web.

## Ce que la passe 2 a trouvé — 1. Les doublons que seul le chargement révèle

**Le constat central de cette passe.** Lus fichier par fichier, `sport.ts`,
`sport-2.ts` et `sport-3.ts` ne montrent presque aucun doublon : chaque notion
a l'air propre. Mais l'application ne sert pas les fichiers, elle sert des
**notions fusionnées** — `cours/fusions.ts` verse certaines notions dans une
autre, et `dedoublonner()` élimine ensuite les jumelles. Le dédoublonnage
laisse passer toute reformulation qui change assez de mots : il exige 85 % de
recouvrement d'énoncé, ou une réponse **rigoureusement identique** au caractère
près. Or ce sont précisément les reformulations qui se retrouvent réunies.

J'ai donc chargé le module comme le fait l'application (`contenuDe`, fusions et
dédoublonnage appliqués) et comparé les 684 questions de Sport telles qu'un
apprenant les reçoit, notion par notion. **Vingt paires de questions posant le
même fait survivent dans la même notion.** Les voici toutes.

### [GRAVE] 🔧 `cg-neuf-sp2-rugby` — quatre faits posés deux fois sur vingt questions
- **Où** : notion `sp2-rugby` après fusion (20 questions servies)
- **Texte** :
  1. « Quand la Coupe du monde de rugby a-t-elle été créée ? » → « En 1987 » / « Quand la première Coupe du monde de rugby a-t-elle eu lieu ? » → « En 1987 »
  2. « Qu'est-ce qu'une mêlée au rugby ? » → « Une phase de reprise du jeu où les avants s'opposent en poussée » / « Qu'est-ce qu'une mêlée ? » → « Une phase de reprise du jeu opposant les avants des deux équipes »
  3. « Quel tournoi annuel oppose six nations européennes ? » → « Le Tournoi des Six Nations » / « Qu'est-ce que le Tournoi des Six Nations ? » → « Un championnat annuel entre six sélections européennes » — **avec la même explication mot pour mot** : « L'Italie l'a rejoint en 2000, transformant le Tournoi des Cinq Nations. »
  4. « Qu'est-ce que le Grand Chelem dans le Tournoi ? » → « Une victoire contre toutes les autres équipes » / « Comment réussit-on un Grand Chelem dans le Tournoi des Six Nations ? » → « Le fait de battre toutes les autres équipes la même année »
- **Problème** : huit des vingt questions de la notion couvrent quatre faits. La paire 3 est la plus voyante : deux questions inverses l'une de l'autre (le nom → la définition, puis la définition → le nom) qui partagent la même explication à la virgule près. Le dédoublonnage ne les a pas vues parce que les réponses diffèrent littéralement (« En 1987 » n'est pas « 1987 », « six nations européennes » n'est pas « six sélections européennes »), alors qu'elles sont le même fait pour un lecteur.
- **Correction proposée** : ne garder qu'une question par fait — de préférence la formulation qui demande le contenu plutôt que le nom (« Qu'est-ce qu'une mêlée ? », « Comment réussit-on un Grand Chelem ? ») — et réemployer les places libérées pour des faits que la notion n'aborde pas (le barème des points, la Calcutta Cup, le passage au professionnalisme en 1995).
- **Fait** : Dans `sport-3.ts` (sp3-rugby-3), les quatre doublons supprimés (Coupe du monde, Six Nations, Grand Chelem, mêlée) et remplacés par trois questions sur des faits non couverts, exactement les angles suggérés : le barème complet (pénalité), la Calcutta Cup, le passage au professionnalisme en 1995 ; le doublon du haka (relevé plus loin dans le constat « Trois paires supplémentaires ») a été supprimé au même endroit.

### [GRAVE] 🔧 `cg-neuf-sp2-handisport` — quatre faits posés deux fois, dont deux réponses identiques au caractère près
- **Où** : notion `sp2-handisport` après fusion de `sp3-paralympiques` (19 questions servies)
- **Texte** :
  1. « En quelle année les premiers Jeux paralympiques d'été ont-ils lieu ? » → « 1960, à Rome » / « Quand les premiers Jeux paralympiques ont-ils eu lieu ? » → « À Rome, en 1960 » — la même réponse, dans l'autre sens
  2. « Qu'est-ce que le goalball ? » → « Un sport collectif pour déficients visuels avec un ballon sonore » / « À quoi reconnaît-on une partie de goalball ? » → **« Un sport collectif pour déficients visuels avec un ballon sonore »** — réponse rigoureusement identique
  3. « Qu'est-ce que la classification en para-sport ? » / « Qu'est-ce que la classification en sport paralympique ? » — relevé par la passe 1
  4. « Qu'est-ce que le rugby-fauteuil ? » → « Un sport de contact en fauteuil, mixte, pour tétraplégiques » / « À quels athlètes le rugby-fauteuil s'adresse-t-il ? » → « Un sport de contact en fauteuil pour tétraplégiques »
- **Problème** : la paire 2 est le cas d'école. Les deux questions ont **la même chaîne de caractères en bonne réponse** ; le dédoublonnage aurait dû les fusionner par sa seconde passe (« réponse exacte identique »), et ne l'a pas fait parce que le recouvrement des énoncés — « Qu'est-ce que le goalball ? » contre « À quoi reconnaît-on une partie de goalball ? » — tombe sous le seuil de 0,75 sur les mots longs. La règle est donc contournée par une question courte. Quant à la paire 4, sa seconde formulation est de surcroît mal construite : « À quels athlètes le rugby-fauteuil s'adresse-t-il ? » appelle une réponse en « aux… », et reçoit « Un sport de contact… ».
- **Correction proposée** : supprimer les secondes de chaque paire ; réécrire au besoin la question sur le goalball pour porter sur un autre aspect (le masque opaque pour tous, le silence du public, les trois contre trois).
- **Fait** : Dans `sport-3.ts` (sp3-paralympiques), supprimé les doublons « premiers Jeux paralympiques » (1960), « classification » et « rugby-fauteuil » ; la question sur le goalball a été réécrite sur les aspects suggérés (trois contre trois, silence, masque opaque) au lieu d'être une simple redite de la définition.

### [GRAVE] 🔧 `cg-neuf-sp2-gymnastique` — le nombre d'agrès demandé quatre fois pour deux faits
- **Où** : notion `sp2-gymnastique` après fusion (20 questions servies)
- **Texte** :
  - « Combien d'agrès la gymnastique artistique **masculine** compte-t-elle ? » → « Six », explication « Sol, cheval d'arçons, anneaux, saut, barres parallèles et barre fixe. »
  - « Combien d'agrès comptent les **concours masculins** de gymnastique artistique ? » → « Six », explication **« Sol, cheval d'arçons, anneaux, saut, barres parallèles et barre fixe. »** — identique
  - « Combien d'agrès la gymnastique artistique **féminine** compte-t-elle ? » → « Quatre », explication « Saut, barres asymétriques, poutre et sol. »
  - « Combien d'agrès comptent les **concours féminins** ? » → « Quatre », explication **« Saut, barres asymétriques, poutre et sol. »** — identique
  - et, en prime : « Qu'est-ce que la gymnastique rythmique ? » → « Une discipline associant mouvements et engins comme le ruban ou le cerceau » / « Avec quoi la gymnastique rythmique se pratique-t-elle ? » → « Une discipline féminine associant mouvements et engins »
- **Problème** : six des vingt questions pour trois faits. Les deux paires sur les agrès portent des explications **strictement identiques**, ce qui ne laisse aucun doute sur leur origine : deux rédactions du même contenu réunies par la fusion. Et la seconde question sur la gymnastique rythmique demande **avec quoi** elle se pratique, mais sa bonne réponse ne nomme aucun engin (« associant mouvements et engins ») alors que la première, qui ne le demandait pas, cite le ruban et le cerceau. Les deux questions sont donc à la fois redondantes et interverties.
- **Correction proposée** : garder une question par sexe (« Combien d'agrès en gymnastique artistique masculine ? / féminine ? ») et une seule sur la gymnastique rythmique, celle qui nomme les engins ; utiliser les quatre places libérées pour la gymnastique acrobatique, le trampoline olympique depuis 2000, ou le barème ouvert d'après 2006.
- **Fait** : Dans `sport-3.ts` (sp3-gymnastique), supprimé les doublons agrès masculins, agrès féminins et gymnastique rythmique (« Avec quoi… »), remplacés par deux nouveaux angles suggérés : la gymnastique acrobatique et l'âge minimum FIG. Le trampoline olympique était déjà présent dans les deux notions avant mon passage et n'a pas été retouché : il n'est pas cité dans les quatre paires précisément identifiées par ce constat, et le traiter aurait empiété sur le GRAVE « Doublons massifs », déjà couvert par ailleurs.

### [GRAVE] 🔧 `cg-sport-06` — la hauteur du panier et les vingt-quatre secondes, deux fois chacune
- **Où** : leçon héritée `cg-sport-06` après réception des questions de `sp-basket` (15 questions servies)
- **Texte** :
  1. « À quelle hauteur se situe le panier de basket-ball ? » → « 3,05 mètres » / « Quelle est la hauteur d'un panier de basket ? » → « **Trois mètres cinq** »
  2. « Combien de temps une équipe de basket a-t-elle pour tenter un tir, selon les règles internationales ? » → « Vingt-quatre secondes » / « Combien de temps une équipe a-t-elle pour tirer en NBA ? » → « Vingt-quatre secondes »
- **Problème** : la paire 1 échappe au dédoublonnage pour une raison purement typographique — « 3,05 mètres » et « Trois mètres cinq » sont le même nombre écrit deux fois. C'est la démonstration que le filtre compare des chaînes et non des faits, et que le corpus mélange chiffres et lettres pour la même grandeur. La paire 2 est plus subtile : les deux règles existent bel et bien et valent toutes deux vingt-quatre secondes, mais rien dans la seconde question n'apprend la différence FIBA / NBA qui justifierait de la poser — l'explication ne la mentionne même pas.
- **Correction proposée** : supprimer « Quelle est la hauteur d'un panier de basket ? » ; transformer la question NBA en question utile — « Quelle différence de durée sépare un quart-temps de NBA d'un quart-temps FIBA ? » → « Douze minutes contre dix », fait que la leçon enseigne et qu'aucune question ne teste.
- **Fait** : Dans `sport-2.ts` (sp2-basket-nba), la question sur la hauteur du panier supprimée et celle sur les vingt-quatre secondes NBA remplacée par la question NBA/FIBA suggérée, mot pour mot.

### [GRAVE] 🔧 `cg-sport-07` — la date de création de la Formule 1, deux fois
- **Où** : leçon héritée `cg-sport-07` après réception des questions de `sp3-sports-mecaniques` (15 questions servies)
- **Texte** : « En quelle année le championnat du monde de Formule 1 a-t-il été créé ? », choix `["1950", "1906", "1938", "1923"]` → « 1950 » ; et « Quand le championnat du monde de Formule 1 est-il créé ? », choix `["En 1950", "En 1966", "En 1958", "En 1946"]` → « En 1950 »
- **Problème** : recouvrement d'énoncé de 0,83 — juste sous le seuil de 0,85 du dédoublonnage. Deux questions séparées par un synonyme (« En quelle année » / « Quand ») et par la préposition des réponses. Un apprenant les enchaîne à quelques questions d'intervalle. Pire : l'explication de la première nomme les trois autres dates de son propre QCM (1906, 1923, 1958), ce qui rend la seconde entièrement gratuite.
- **Correction proposée** : supprimer la seconde ; la notion `sp3-sports-mecaniques` a de la matière ailleurs (le halo, les 500 miles, le rallye-raid) qui n'est pas testée deux fois.
- **Fait** : Le doublon retrouvé dans `sport-2.ts` (sp2-sports-mecaniques, et non `sp3-sports-mecaniques` comme l'indique le constat — le halo, la voiture de sécurité, le drapeau rouge et le Dakar y sont déjà couverts, donc rien à déplacer). Question remplacée par un fait non testé ailleurs : le DRS en Formule 1.

### [MOYEN] ✅ `cg-sport-09` — le judo et la lutte gréco-romaine, deux fois chacun
- **Où** : leçon héritée `cg-sport-09` après réception des questions de `sp-sports-precision` (15 questions servies)
- **Texte** :
  1. « Qui a créé le judo, et en quelle année ? » → « Jigoro Kano en 1882 » / « Qu'est-ce que le judo ? » → « Un art martial japonais fondé par Jigorō Kanō en 1882 »
  2. « Qu'est-ce qui distingue la lutte gréco-romaine de la lutte libre ? » → « En gréco-romaine, les prises sont limitées au haut du corps » / « Qu'est-ce que la lutte gréco-romaine ? » → « Une lutte interdisant les prises sous la ceinture »
- **Problème** : la paire 1 pose deux fois le couple fondateur-date, la seconde question sous couvert de définition. La paire 2 énonce deux fois la même règle avec deux vocabulaires (« limitées au haut du corps » / « interdisant les prises sous la ceinture ») : les deux sont exactes, ce qui est le pire cas — l'apprenant croit apprendre deux choses. À noter aussi la graphie flottante d'un même nom entre deux questions voisines : « Jigoro Kano » et « Jigorō Kanō ».
- **Correction proposée** : garder « Qu'est-ce que le judo ? » et « Qu'est-ce qui distingue la lutte gréco-romaine de la lutte libre ? », supprimer les deux autres, et unifier la graphie sur « Jigoro Kano », celle du cours.
- **Fait** : Partiellement appliqué : doublon « Qu'est-ce que la lutte gréco-romaine ? » supprimé côté seed (`sport-3.ts`), graphie « Jigorō Kanō » harmonisée dans `heritage/.../09.json`. Le doublon « Qui a créé le judo, et en quelle année ? » n'a pas été retiré : la leçon a un quiz à format fixe de cinq questions et je n'ai pas voulu réduire ce nombre.

### [MOYEN] ✅ Six autres paires, dans cinq notions
- **Où et texte** :
  - `cg-neuf-sp3-cyclisme-3` : « Quels sont les trois grands tours cyclistes ? » / « Quels sont les trois grands tours du cyclisme professionnel ? » — **même réponse mot pour mot** ; « Qu'est-ce qu'un contre-la-montre ? » / « Comment les coureurs s'élancent-ils dans un contre-la-montre ? » ; « Qu'est-ce que le dopage mécanique ? » / « En quoi consiste le dopage mécanique en cyclisme ? »
  - `cg-neuf-sp2-sports-glisse` : « Qu'est-ce que le bloc en escalade ? » → « Une escalade sans corde à faible hauteur sur tapis » / « Comment se pratique l'escalade de bloc ? » → « Une escalade de faible hauteur sans corde, sur tapis » — les mêmes mots dans un autre ordre
  - `cg-neuf-sp-sports-collectifs` : « Quelle nation domine le handball masculin international depuis les années 1990 ? » → « La France » / « Quel pays a dominé le handball masculin des années 2000 et 2010 ? » → « La France »
- **Problème** : trois notions sur les cinq comptent 19 ou 20 questions, c'est-à-dire qu'elles ont **absorbé une autre notion**. Le rapprochement est systématique : partout où `FUSIONS_INTERNES` réunit deux notions, on retrouve des paires. La paire cycliste est aggravée par l'astuce de la notion (voir plus bas), qui donne la réponse aux deux.
- **Cas particulier à trancher** : les deux questions sur le handball ne sont pas seulement redondantes, elles se contredisent sur la période. « Depuis les années 1990 » est excessif — la première grande victoire française est le titre mondial de 1995, et les années 1990 sont dominées par la Suède (quatre titres européens de 1994 à 2002) ; « des années 2000 et 2010 » est juste. Si l'on n'en garde qu'une, garder la seconde.
- **Correction proposée** : supprimer une question de chaque paire.
- **Fait** : Partiellement appliqué : paire handball supprimée dans `sport.ts` (formulation « depuis les années 1990 » factuellement fausse) ; la question contre-la-montre a été reformulée par ailleurs (voir « forme des énoncés »). Les autres paires (grands tours, dopage mécanique, bloc en escalade) n'ont pas été dédoublonnées : ce sont des doublons de fusion, hors de portée d'une simple correction de texte sans risquer de casser le compte de questions ailleurs signalé comme GRAVE.

## Ce que la passe 2 a trouvé — 2. Les astuces qui donnent la réponse

Chaque notion affiche un `tip` à côté de ses questions. Sur les **37 notions de
Sport écrites à la main**, **dix** ont une astuce qui contient la réponse
littérale d'au moins une de leurs propres questions — 27 %, l'ordre de grandeur
que gastronomie et physique-chimie ont trouvé ailleurs. S'y ajoute un cas de
nature différente, propre aux leçons héritées, où c'est le **générateur
d'astuce** qui trahit.

### [GRAVE] 🔧 `cg-neuf-sp3-cyclisme-3` — l'astuce est la réponse, et la question est posée deux fois
- **Où** : notion `sp3-cyclisme-3`
- **Texte** : astuce — « **Le Tour de France, le Giro et la Vuelta forment les trois grands tours.** » ; question 1 — « Quels sont les trois grands tours cyclistes ? » → « Le Tour de France, le Giro et la Vuelta » ; question 2 — « Quels sont les trois grands tours du cyclisme professionnel ? » → « Le Tour de France, le Giro et la Vuelta ».
- **Problème** : le cumul est complet. L'astuce énonce mot pour mot la bonne réponse, et cette réponse est demandée **deux fois**. Les trois autres propositions de chaque QCM (Tour de Suisse, Paris-Nice, Tour de Lombardie, Paris-Roubaix) deviennent décoratives. Deux des dix-neuf questions de la notion sont donc offertes, et la seule chose que l'apprenant ait à faire est de recopier la ligne affichée au-dessus.
- **Correction proposée** : supprimer la question doublon, et remplacer l'astuce par ce qu'elle devrait dire — une aide à raisonner et non la réponse : « Un grand tour dure trois semaines ; les courses d'un jour, si prestigieuses soient-elles, n'en sont pas. »
- **Fait** : L'astuce ne donnait déjà plus la réponse au moment de ma vérification (remplacée dans une session antérieure par une astuce de raisonnement, dans l'esprit de la correction proposée). La question doublon (« Quels sont les trois grands tours cyclistes ? », restée dupliquée avec `sp-cyclisme`) a été supprimée dans `sport-3.ts` (sp3-cyclisme-3).

### [GRAVE] 🔧 `cg-neuf-sp2-sports-glisse` — une astuce qui répond à trois questions à la fois
- **Où** : notion `sp2-sports-glisse`
- **Texte** : astuce — « **L'escalade sportive est devenue olympique en 2021.** » ; questions — « Quand l'escalade est-elle devenue olympique ? », « Quand le surf est-il devenu olympique ? », « Quand le skateboard est-il devenu olympique ? » → toutes trois « À Tokyo en 2021 ».
- **Problème** : trois questions sur dix-neuf partagent la même réponse, et l'astuce la donne. Le résultat est qu'un apprenant qui n'a jamais entendu parler de ces trois sports répond juste trois fois — et l'exercice mesure sa capacité à lire une ligne, pas sa connaissance. À noter que la répétition n'est pas en soi illégitime (les trois sports sont bien entrés ensemble à Tokyo, ce que le cours explique), mais l'astuce la rend inutile.
- **Correction proposée** : astuce — « Trois sports urbains ou de plein air sont entrés ensemble au programme olympique lors des mêmes Jeux : cherche lesquels, et pourquoi ce choix. » ; et ne conserver qu'une des trois questions de date, en la reformulant : « Quels trois sports de glisse ou d'escalade sont entrés ensemble au programme olympique à Tokyo ? »
- **Fait** : Astuce de `sp2-sports-glisse` remplacée mot pour mot par celle proposée dans `sport-2.ts`. Dans `sport-3.ts` (sp3-sports-glisse), les trois questions de date fusionnées en une seule (« Quels trois sports sont entrés ensemble au programme olympique à Tokyo en 2021 ? ») et les deux places libérées réemployées pour des angles non couverts (park/street en skateboard, durée d'une épreuve de vitesse en escalade) — ce qui règle du même coup le MOYEN ⏭️ lié (triplé surf/skateboard/escalade).

### [MOYEN] ✅ Sept autres astuces qui contiennent la réponse
- **Où et texte** :
  - `sp-tennis-raquettes` — astuce « Le comptage en **quinze, trente, quarante** viendrait du cadran d'une horloge médiévale. » / question « Comment se compte un jeu au tennis ? » → « **Quinze, trente, quarante**, jeu »
  - `sp3-economie-sport` — astuce « **Les droits de diffusion** constituent la première ressource des grands sports. » / question « Quelle est la principale ressource des grands clubs européens de football ? » → « **Les droits de diffusion** télévisée »
  - `sp3-records-limites` — astuce « **La progression des records ralentit** dans la plupart des disciplines mesurables. » / question « Comment les records du monde évoluent-ils depuis les années 1990 ? » → « Leur **progression ralentit** nettement »
  - `sp2-records-performance` — astuce « Le progrès des performances **ralentit nettement dans la plupart des disciplines** depuis les années 1990. » / question « Que constate-t-on sur la progression des records depuis les années 1990 ? » → « Un net **ralentissement dans la plupart des disciplines** »
  - `sp3-dopage` — astuce « La lutte antidopage s'est structurée mondialement **à partir de 1999**. » / question « Qu'est-ce que l'Agence mondiale antidopage ? » → « Une organisation **créée en 1999** pour harmoniser la **lutte antidopage** »
  - `sp-corps-performance` — astuce « L'entraînement ne rend pas plus fort **pendant l'effort, mais pendant la récupération** qui suit. » / question « Qu'est-ce que la surcompensation ? » → « L'amélioration des capacités **pendant la récupération après un effort** »
  - `sp2-sport-education` — astuce « L'éducation physique et sportive est **une discipline d'enseignement**, non une simple pratique de loisir. » / question « Qu'est-ce que l'EPS en France ? » → « **Une discipline d'enseignement** obligatoire avec ses programmes »
- **Problème** : le mécanisme est toujours le même. L'astuce a été écrite comme un résumé du contenu de la notion, alors que sa fonction est d'**orienter sans répondre**. Les deux astuces sur les records sont un cas à part : `sp2-records-performance` et `sp3-records-limites` disent la même chose en d'autres termes et servent chacune la même question à leur apprenant, ce qui fait quatre occurrences du même fait dans le domaine.
- **Correction proposée** : réécrire ces sept astuces sur le modèle des bonnes du domaine — `sp-football` (« Le hors-jeu s'apprécie au moment de la passe, pas au moment de la réception ») donne une clé de raisonnement sans nommer de réponse, `sp-arbitrage-regles` (« Une règle du jeu n'est pas une loi : elle est édictée par une fédération, non par un État ») pose une distinction, `sp2-sport-collectif-tactique` (« Un système de jeu n'est qu'un point de départ : c'est le mouvement qui compte ») ouvre une idée. Ces trois-là ne trahissent rien et enseignent quelque chose.
- **Fait** : Les sept astuces réécrites (indices de raisonnement, sans donner la réponse) dans `sport.ts`, `sport-2.ts` et `sport-3.ts`.

### [MOYEN] ⏭️ Le générateur d'astuce des leçons héritées trahit à son tour — `cg-sport-14`
- **Où** : `src/modules/culture-g/contenu.ts` l. 219, et son effet sur la notion `cg-sport-14`
- **Texte** : le code fabrique l'astuce en collant les titres de sections : `` `Cette leçon couvre : ${sections.map((s) => s.titre).join(" · ")}` ``. Pour la leçon 14, cela donne : « Cette leçon couvre : Des Héraia grecques aux corsets victoriens · Les premières olympiennes · **Alice Milliat et les Jeux mondiaux féminins** · Une conquête discipline par discipline · Les inégalités qui demeurent ». Or le quiz de cette leçon demande : « Quelle compétition Alice Milliat a-t-elle créée pour contourner le refus du Comité international olympique ? », réponse « **Les Jeux mondiaux féminins** ».
- **Problème** : ce n'est pas une astuce mal écrite, c'est une astuce **fabriquée automatiquement** à partir de titres que personne n'a relus dans cette optique. Un titre de section qui nomme un objet historique donne mécaniquement la réponse à toute question portant sur cet objet. Le défaut est donc structurel et se reproduira à chaque leçon dont un titre de section nomme une réponse — je n'en ai trouvé qu'une en Sport, mais le mécanisme n'a rien de propre au domaine.
- **Correction proposée** : deux voies. La plus simple : dans `leconEnSkill`, ne pas coller les titres bruts mais n'en garder que les trois premiers mots, ou remplacer l'astuce par « Lis le cours en entier : les questions portent sur ses cinq sections. » La plus juste : écrire une astuce à la main pour les leçons dont un titre nomme une réponse.
- **Fait** : Écarté : correction de code (`src/modules/culture-g/contenu.ts`), hors de mon périmètre de fichiers.

### [GRAVE] 🔧 Trois paires supplémentaires, trouvées en cherchant l'égalité stricte des bonnes réponses
- **Où et texte** : le décompte de vingt paires ci-dessus provient d'une comparaison des énoncés. En cherchant plutôt les **bonnes réponses rigoureusement identiques** dans une même notion, trois paires de plus apparaissent, que le recouvrement des énoncés ne pouvait pas révéler :
  1. `cg-sport-c01` — « Quel skieur français a remporté les trois épreuves de ski alpin aux Jeux de Grenoble en 1968 ? » / « Quel skieur français a été triple médaillé d'or à Grenoble en 1968 ? » → **« Jean-Claude Killy »** dans les deux cas. Et l'explication de la première raconte déjà le triplé, si bien que la seconde est résolue avant d'être posée.
  2. `cg-neuf-sp2-gymnastique` — « Quelle gymnaste roumaine obtient le premier dix parfait olympique en 1976 ? » / « Quelle gymnaste a obtenu la première note de dix aux Jeux ? » → **« Nadia Comăneci »**. La seconde est la première privée de ses deux indices (la nationalité et l'année) : elle n'ajoute rien, elle retire.
  3. `cg-neuf-sp2-rugby` — « Qu'est-ce que le haka ? » / « Quelle tradition les All Blacks exécutent-ils avant leurs matchs ? » → **« Une danse rituelle maorie exécutée avant les matchs néo-zélandais »**, la même chaîne de caractères. Le doublon parfait, dans les deux sens : la définition puis le nom.
- **Problème** : le total s'établit donc à **vingt-trois à vingt-cinq paires** selon qu'on compte la triple question sur Tokyo 2021 pour une redondance ou pour deux. `sp2-rugby` en compte cinq à elle seule, `sp2-gymnastique` et `sp2-handisport` quatre chacune : dans ces trois notions, **la moitié des questions posent la moitié des faits**.
- **Correction proposée** : au-delà du cas par cas, deux mesures de fond. (1) Ajouter au dédoublonnage une comparaison sur la **bonne réponse normalisée seule**, sans condition sur l'énoncé, lorsque cette réponse fait plus de quinze caractères : elle aurait attrapé le goalball, le haka, les grands tours et Tokyo 2021. (2) Normaliser les nombres avant comparaison — « 3,05 mètres » et « Trois mètres cinq » doivent être vus comme la même réponse.
- **Fait** : Deux des trois paires cas par cas réglées : le haka, supprimé dans `sport-3.ts` (sp3-rugby-3, voir le GRAVE `cg-neuf-sp2-rugby`) ; Nadia Comăneci, doublon supprimé dans `sport-3.ts` (sp3-gymnastique, voir le GRAVE `cg-neuf-sp2-gymnastique`). ⏭️ La paire Killy (« Quel skieur français a remporté les trois épreuves… » / « … a été triple médaillé d'or à Grenoble en 1968 ? ») est écartée : elle vit dans `cg-sport-c01`, un chapitre **généré** sans fichier source dans `heritage/culture-g/data/lecons/sport/` ni dans les fichiers du seed — aucun fichier de mon périmètre ne la porte. Les deux mesures de fond (normalisation du dédoublonnage, normalisation des nombres) relèvent de `src/modules/kinds/qcm.ts` et `src/modules/culture-g/contenu.ts`, hors périmètre.

## Ce que la passe 2 a trouvé — 3. Les explications qui répondent à une autre question de la même notion

Catégorie que la passe 1 ne pouvait pas voir, puisqu'elle suppose de savoir
quelles questions se retrouvent servies ensemble. Une explication s'affiche
**après** que l'apprenant a répondu : si elle contient la bonne réponse d'une
autre question de la même notion, cette autre question devient gratuite dès
qu'elle se présente.

### [MOYEN] ✅ Onze explications donnent la réponse d'une question voisine
- **Où et texte** — les cas nets :
  - `cg-sport-06` — l'explication de « À quelle hauteur se situe le panier de basket-ball ? » nomme « **James Naismith** » (réponse de « Qui a inventé le basket-ball en 1891 ? ») **et** « trois mètres cinq » (réponse du doublon signalé plus haut). Une seule explication règle deux autres questions.
  - `cg-sport-07` — l'explication de « Quelle est la particularité principale des 24 Heures du Mans ? » commence par « **Les 24 Heures du Mans**, créées en 1923… », qui est la réponse de « Quelle course d'endurance se dispute chaque année en Sarthe ? ».
  - `cg-sport-14` — l'explication de la question sur Charlotte Cooper contient « Alice Milliat […] la dirigeante qui a créé **les Jeux mondiaux féminins** », réponse exacte de la question suivante. Cette notion cumule donc les deux fuites : l'astuce **et** l'explication.
  - `cg-neuf-sp2-handisport` — l'explication de « Où les premiers jeux pour athlètes handicapés sont-ils organisés en 1948 ? » nomme « **Ludwig Guttmann** », réponse de « Qui est à l'origine du mouvement paralympique ? ». Et l'explication de « En quelle année les premiers Jeux paralympiques d'été ont-ils lieu ? » est « **Depuis 1988**, ils se tiennent dans la même ville que les Jeux olympiques », qui répond à « Depuis quand les Jeux paralympiques se tiennent-ils dans la même ville que les Jeux olympiques ? » → « Depuis **Séoul en 1988** ».
  - `cg-neuf-sp3-cyclisme-3` — l'explication de « Qu'est-ce qu'un monument du cyclisme ? » énumère « Milan-San Remo, le Tour des Flandres, **Paris-Roubaix**, Liège-Bastogne-Liège et le Tour de Lombardie », et une autre question demande « Quelle classique est surnommée l'Enfer du Nord ? » → « **Paris-Roubaix** » ; l'explication de « Quel scandale a marqué le cyclisme des années 1998 à 2012 ? » dit « **Lance Armstrong** a été déchu de ses sept titres », et une autre question demande « Quel coureur a été déchu de sept victoires sur le Tour de France pour dopage ? ».
  - `cg-neuf-sp-tennis-raquettes` — l'explication de la question sur la Coupe Davis dit « La **Billie Jean King** Cup, ex-Fed Cup, en est l'équivalent féminin », et une autre question demande « Quelle joueuse américaine a milité pour l'égalité des primes dans le tennis ? ».
  - `cg-libre-sport-1` — l'explication de « Que désigne le maillot jaune sur le Tour de France ? » détaille tous les autres maillots, dont « le blanc à pois rouges pour **le meilleur grimpeur** », alors qu'une autre question du même lot demande « Sur le Tour de France, qui porte le maillot blanc à pois rouges ? ».
- **Problème** : ces explications sont bonnes en elles-mêmes — elles élargissent, elles situent, elles nomment les distracteurs pour dire pourquoi ils sont faux, ce que la consigne demande. Le défaut n'est donc pas dans l'écriture mais dans **l'assemblage** : les questions ont été écrites indépendamment, puis réunies dans une même notion par la fusion, et personne n'a relu l'ensemble comme une série. C'est exactement pourquoi il fallait charger le module plutôt que lire les fichiers.
- **À ne pas corriger aveuglément** : supprimer ces mentions appauvrirait les explications. Deux d'entre elles sont même pédagogiquement justes — l'explication du maillot jaune gagne à énumérer les autres maillots, celle du drapeau olympique à rappeler qui l'a dessiné.
- **Correction proposée** : ne traiter que les cas où l'explication rend l'autre question **entièrement** gratuite (Naismith, les 24 Heures du Mans, les Jeux mondiaux féminins, Guttmann, 1988, Armstrong, Paris-Roubaix, le meilleur grimpeur) et, plutôt que d'amputer les explications, **retirer la question la plus pauvre de chaque couple** — c'est presque toujours la question courte des notions écrites à la main, dont l'explication tient en une phrase, face à une question de leçon dont l'explication en compte cinq.
- **Fait** : Partiellement appliqué : `cg-sport-07` (24 Heures du Mans, doublon seed supprimé dans `sport-2.ts`), `sp-tennis-raquettes` (Billie Jean King Cup, explication adoucie dans `sport.ts`) et `cg-sport-14` (Alice Milliat, explication de la question Charlotte Cooper récrite dans `heritage/.../14.json`) corrigés. `cg-sport-06`, `cg-neuf-sp2-handisport` et `cg-neuf-sp3-cyclisme-3` laissés en l'état : ils recoupent des GRAVE non résolus (respectivement `cg-sport-06`, `cg-neuf-sp2-handisport`, `cg-neuf-sp3-cyclisme-3`).

## Ce que la passe 2 a trouvé — 4. Contre-vérification des corrections proposées en passe 1

J'ai repris sur le web les corrections de la passe 1 qui engagent un fait
vérifiable. **Aucune ne s'est révélée fausse** — je le dis d'autant plus
volontiers que trois autres domaines en ont trouvé. Voici le détail, pour que
personne n'ait à refaire le travail.

**Confirmées :**
- *Record de Bubka / Lavillenie* — Bubka franchit 6,15 m en salle le 21 février 1993 ; Lavillenie 6,16 m le 15 février 2014. **Vingt et un ans**, comme le dit le cours et non « seize » comme le dit la question. La passe 1 a raison, et son chiffre est le bon.
- *Hillsborough* — le bilan officiel est bien passé de 96 à **97** après la mort d'Andrew Devine en juillet 2021 et sa reconnaissance par le coroner. Le cours est à corriger, pas la question.
- *Gymnastique rythmique* — **la correction de la passe 1 est exacte, et je l'ai vérifiée sur la pièce.** Le *Code de pointage* de la FIG pour le cycle **2025-2028** retient quatre engins seniors : cerceau, ballon, massues, ruban. La corde a été retirée du programme individuel senior en 2011 et n'a plus servi en compétition internationale après 2017-2018, en ensembles seulement. La version « cinq engins » de `sp2-gymnastique` est donc bien périmée.
- *Palmarès NBA* — Boston conserve **dix-huit** titres depuis juin 2024, devant Los Angeles avec dix-sept. Deux finales ont eu lieu depuis sans changer ce classement : Oklahoma City en 2025, **New York en 2026** (4-1 contre San Antonio, premier titre des Knicks depuis 1973). L'« égalité » du cours reste fausse, et le chiffre proposé par la passe 1 reste bon.
- *Marathon* — 42,195 km courus à Londres en 1908, officialisés comme distance standard en **1921**. Confirmé.
- *Dakar* — dernier départ parisien en **2001**, puis Arras, Marseille, Clermont-Ferrand, Barcelone, Lisbonne jusqu'en 2007 ; annulation en 2008 ; Amérique du Sud de 2009 à 2019 ; Arabie saoudite depuis 2020. La reformulation de la passe 1 est exacte de bout en bout.
- *Parité de Paris 2024* — parité **des quotas** (5 250 places de chaque côté), non des engagés. Confirmé, y compris par le CIO.
- *Recommandation de l'OMS* — les lignes directrices de 2020 donnent **150 à 300 minutes** d'activité modérée par semaine. C'est `sp2-sport-sante` qui a raison et `sp3-sport-sante` qui a tort, comme le disait la passe 1.
- *Ski alpin* — le record de victoires en Coupe du monde est bien détenu par **Mikaela Shiffrin**, ce qui valide la reformulation proposée ; et Bode Miller est bien un homme dans une question qui demande une skieuse.
- *Cinquième Tour de Pogačar* (constat du relecteur 2) — confirmé : **victoire le dimanche 26 juillet 2026**, avec plus de six minutes d'avance sur Remco Evenepoel, dernière étape aux Champs-Élysées gagnée par Mathieu van der Poel. À vingt-sept ans, il est le plus jeune quintuple vainqueur de l'histoire. Les quatre occurrences de « quatre coureurs seulement » sont donc bien à corriger.

**Une correction à préciser, sans l'infirmer :**
### [MOYEN] ✅ pass'Sport : la passe 1 a raison sur l'année, mais le dispositif a changé deux fois depuis
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sport-societe` ; `cours/sport.ts` — même notion
- **Texte** : « Quel dispositif français vise l'accès au sport **des enfants** depuis 2022 ? » → « Le pass'Sport, aide à la licence » ; cours — « Le pass'Sport, créé en 2022, est une aide financière à la prise de licence ».
- **Problème** : la date de 2021 avancée par la passe 1 est la bonne, et le relecteur 2 a déjà rectifié la pièce citée à l'appui (décret n° 2021-1171 du 10 septembre 2021). Mais le reste de l'énoncé a vieilli à son tour. Le montant est passé de 50 à **70 €** pour la saison 2025-2026, et surtout **le public a été restreint aux 14-18 ans** cette même saison, contre 6-18 ans auparavant — avant que le budget 2026 ne rétablisse, sur amendement de la ministre des Sports, l'accès des **6-13 ans** pour la rentrée 2026-2027. Écrire « l'accès au sport des enfants » sans plus de précision décrit donc un dispositif dont la cible a changé deux fois en deux ans.
- **Correction proposée** : énoncé — « Quel dispositif français aide les jeunes à payer leur licence sportive depuis 2021 ? » ; explication — « Le pass'Sport, créé pour la rentrée 2021. Son montant (70 € depuis 2025) et son public éligible ont varié d'une saison à l'autre. » Et ne pas faire figurer le montant dans le cours sans sa saison.

**Deux points laissés en suspens par la passe 1, que je tranche :**
- **Fait** : Énoncé reformulé (accès des jeunes à la licence) et explication ajustée dans `sport.ts` ; le cours ne mentionnait déjà pas de montant, donc rien à dater côté cours.

### [GRAVE] 🔧 Les Jeux olympiques de l'esport n'existent pas — le CIO a rompu et repart de zéro
- **Où** : `prisma/seed/culture-g/sport-3.ts` l. 508-509 — notion `sp3-esport`
- **Texte** : « Quel débat le statut olympique du sport électronique soulève-t-il ? » → « L'absence d'effort physique et le rôle des éditeurs privés », explication : « **Le CIO a lancé des Jeux olympiques de l'esport distincts des Jeux traditionnels.** »
- **Problème** : la passe 1 avait mis ce point en réserve. Il est tranché, et dans le sens le plus défavorable. Le CIO avait voté en 2023 la création de ces Jeux, puis conclu en 2024 une alliance avec l'Arabie saoudite courant jusqu'en 2036. Il a **reporté l'édition de 2025 à 2027 en février 2025, puis annoncé le 30 octobre 2025 la fin de cette coopération d'un commun accord**. Le projet, piloté par la commission esport présidée par David Lappartient, **repart de zéro, sans territoire hôte et sans échéance**. Le passé composé « a lancé » fait donc apprendre comme un fait accompli un événement qui n'a jamais eu lieu et dont plus rien n'est programmé. C'est le seul énoncé du domaine qui affirme l'existence d'une compétition inexistante.
- **Aggravant** : cette explication n'a par ailleurs aucun rapport avec la question qu'elle explique. Le débat porte sur l'effort physique et la propriété des règles par les éditeurs — ce que le cours de la même notion expose très bien (« Un sport dont les règles sont la propriété d'une société pose au mouvement olympique un problème inédit ») —, et l'explication répond à côté.
- **Correction proposée** : « Le CIO a voté en 2023 la création de Jeux olympiques de l'esport, mais le projet n'a toujours pas d'édition : le partenariat saoudien a été rompu fin 2025 et la recherche d'un hôte a repris à zéro. » Ou, mieux, une explication qui explique la question : « Le mouvement olympique bute sur un fait sans précédent : personne ne possède les règles du football, alors que chaque jeu vidéo appartient à un éditeur qui peut les changer. »
- **Fait** : Explication remplacée dans `sport-3.ts` (sp3-esport) par la seconde option proposée, qui a le double avantage de retirer l'affirmation fausse et de répondre enfin à la question posée (le rôle des éditeurs privés) au lieu de parler d'autre chose.

### Le record du monde du décathlon de Kévin Mayer tient toujours
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp3-athletisme-lancers`, section « Les lancers »
- **Vérification** : les 9 126 points établis à Talence les 15 et 16 septembre 2018 **n'ont pas été battus** à ce jour. La formule du cours — « détient le record du monde de la discipline depuis 2018 » — est donc exacte, et le point en suspens de la passe 1 est levé. Elle reste néanmoins de celles qui se périment : la dater (« depuis 2018 ») est ce qui la sauve, et c'est bien fait.

## Ce que la passe 2 a trouvé — 5. Relecture à froid de la fin des fichiers

La consigne prévient que l'attention baisse en fin de fichier. J'ai donc relu
les deux dernières notions de `sport-3.ts` sans mes notes, comme si je les
découvrais. Elles étaient les moins bien couvertes par la passe 1.

### [MOYEN] ✅ « Quand l'assistance vidéo a-t-elle été utilisée en Coupe du monde ? » — 2018 et 2022 sont vraies toutes les deux
- **Où** : `prisma/seed/culture-g/sport-3.ts` l. 524-525 — notion `sp3-arbitrage-technologie`
- **Texte** : « Quand l'assistance vidéo a-t-elle été utilisée en Coupe du monde ? », choix `["En 2018, en Russie", "En 2014", "En 2022", "En 2010"]`, bonne réponse 0, explication « Son usage avait été testé auparavant dans plusieurs championnats. »
- **Problème** : l'énoncé demande **quand** la VAR a été utilisée, sans dire « pour la première fois ». Or elle a été utilisée en 2018 **et** en 2022 : le distracteur « En 2022 » est vrai. Un apprenant qui sait que la Coupe du monde du Qatar a employé la vidéo — et même le hors-jeu semi-automatisé, ce que la question suivante de la même notion lui apprend deux lignes plus bas — n'a aucune raison de préférer 2018. L'explication ne tranche pas non plus : elle parle des essais antérieurs, pas de la première fois.
- **Aggravant** : la question voisine (« Qu'est-ce que le hors-jeu semi-automatisé ? ») porte explicitement « Utilisé lors de la Coupe du monde 2022 ». Le corpus se contredit donc à une question d'intervalle.
- **Correction proposée** : « À quelle Coupe du monde l'assistance vidéo a-t-elle été utilisée pour la première fois ? » → « En 2018, en Russie », explication : « Testée auparavant dans plusieurs championnats nationaux, elle est employée pour la première fois dans un Mondial en Russie ; le hors-jeu semi-automatisé s'y ajoutera au Qatar en 2022. »
- **Fait** : Déjà conforme à la correction proposée au moment de ma relecture (« pour la première fois » déjà dans l'énoncé) ; aucune modification nécessaire.

### [MOYEN] ✅ Un distracteur qui est vrai lui aussi : Blake Leeper a bien couru en compétition valide
- **Où** : `prisma/seed/culture-g/sport-3.ts` l. 561-562 — notion `sp3-records-limites`
- **Texte** : « Quel athlète a couru avec des prothèses en compétition valide ? », choix `["Oscar Pistorius", "Markus Rehm", "Blake Leeper", "Jonnie Peacock"]`, bonne réponse 0, explication « Sa participation aux Jeux de Londres en 2012 a nourri un long débat scientifique. »
- **Problème** : deux des trois distracteurs sont des réponses correctes. **Blake Leeper**, sprinteur américain amputé des deux jambes, a couru le 400 mètres des championnats des États-Unis valides en 2019 et s'est qualifié pour la finale ; **Markus Rehm**, sauteur en longueur allemand, a remporté le titre national allemand valide en 2014, ce qui a déclenché exactement le même débat sur l'avantage de la prothèse. La question n'a donc pas une réponse mais trois, et le seul moyen de deviner celle qui est attendue est de reconnaître le nom le plus connu — ce qui n'est pas une connaissance.
- **Correction proposée** : lever l'ambiguïté par le fait qui est propre à Pistorius : « Quel athlète appareillé a disputé les Jeux olympiques valides, à Londres en 2012 ? » → « Oscar Pistorius » ; ou déplacer la difficulté vers ce que la notion veut enseigner : « Quel débat les prothèses de course ont-elles ouvert dans l'athlétisme valide ? » → « Celui de la frontière entre compensation du handicap et avantage mécanique ».
- **Fait** : Énoncé recentré sur Pistorius/Londres 2012 dans `sport-3.ts`.

### [MINEUR] ✅ « Dès le XXe siècle » : une datation qui ne date rien
- **Où** : `prisma/seed/culture-g/sport-3.ts` l. 537-538 — notion `sp3-arbitrage-technologie`
- **Texte** : « Qu'est-ce que le capteur de touche en escrime ? » → « Un dispositif électrique signalant les touches valables », explication « Il a remplacé les juges humains pour la validation des touches **dès le XXe siècle**. »
- **Problème** : « dès le XXe siècle » couvre cent ans et n'apprend rien, dans une notion dont toutes les autres explications donnent une date précise (2010, 2018, 2022). Les dates existent et sont plus intéressantes : l'appareil électrique est adopté à **l'épée en 1936, au fleuret en 1956 et au sabre en 1988** — une progression qui suit la difficulté technique de chaque arme, et qui explique pourquoi le sabre a résisté si longtemps. Par ailleurs le verbe « remplacé » est excessif : l'appareil signale la touche, mais c'est toujours l'arbitre qui applique la convention de priorité au fleuret et au sabre — ce que la leçon héritée 12 dit correctement.
- **Correction proposée** : « L'appareil électrique de signalisation est adopté à l'épée en 1936, au fleuret en 1956 et au sabre en 1988. Il dit qu'il y a touche, mais c'est toujours l'arbitre qui décide à qui elle revient au fleuret et au sabre. »
- **Fait** : Dates 1936/1956/1988 ajoutées dans `sport-3.ts` (sp3-arbitrage-technologie).

### Vérifié et bon dans ces deux notions
Le record du monde du cent mètres — **9 s 58, Usain Bolt, Berlin, le 16 août 2009** — tient toujours en 2026, et l'explication le date correctement. Sont également exacts : les quatre situations d'intervention de la VAR, le but non accordé à l'Angleterre en 2010 à l'origine de la goal-line technology, le hors-jeu semi-automatisé du Mondial 2022, le challenge limité par set au volley-ball, la photo-finish décrite comme une image en fente et non une photographie instantanée — précision rare et juste —, le chronométrage électronique obligatoire pour homologuer un record, la limite de vent de deux mètres par seconde, l'avantage d'altitude et les records de Mexico en 1968, le rôle croissant du matériel dans l'incomparabilité des époques, et le refus explicite du déterminisme génétique (« Aucun test génétique ne permet aujourd'hui de prédire un champion »), qui est l'une des meilleures explications du domaine.

La dernière question du domaine — « Quelle limite finale les records rencontrent-ils ? » → « Des contraintes physiologiques et biomécaniques », explication « Les modèles prédisent des asymptotes, dont la valeur exacte reste discutée » — est une bonne façon de finir : elle donne un résultat scientifique **et** son incertitude.

---

## Bilan de la passe 2

**Ce que la passe 2 a ajouté, en clair :**

1. **Vingt-trois à vingt-cinq paires de questions posant le même fait dans une même notion**, invisibles fichier par fichier parce qu'elles ne se rejoignent qu'au chargement, par `FUSIONS` et `FUSIONS_INTERNES`. `sp2-rugby` en compte cinq, `sp2-gymnastique` et `sp2-handisport` quatre chacune. Trois d'entre elles ont **la même bonne réponse au caractère près** (le goalball, le haka, les trois grands tours) et auraient dû tomber sous le filtre existant : c'est un défaut du dédoublonnage autant que du contenu, et j'ai proposé les deux règles qui manquent.
2. **Dix notions sur trente-sept dont l'astuce donne la réponse littérale** d'une de leurs propres questions — 27 %, le taux trouvé ailleurs. Deux cas cumulent astuce trahissante **et** question posée deux fois (`sp3-cyclisme-3`), ou astuce trahissante **et** trois questions à réponse identique (`sp2-sports-glisse`). S'y ajoute un cas de nature différente : le **générateur automatique d'astuce** des leçons héritées, qui colle les titres de sections et donne ainsi la réponse du quiz de `cg-sport-14`.
3. **Une catégorie que la passe 1 ne pouvait pas voir : onze explications qui donnent la réponse d'une autre question de la même notion.** Naismith, les 24 Heures du Mans, Guttmann, 1988, Paris-Roubaix, Armstrong, le meilleur grimpeur, les Jeux mondiaux féminins. Ces explications sont bonnes en elles-mêmes ; c'est leur voisinage, créé par la fusion, qui les rend nuisibles.
4. **Les six leçons héritées que la passe 1 n'avait pas atteintes** (01, 06, 07, 09, 14, 15, 16), et leurs onze constats — dont le plus lourd du domaine : le **tableau du palmarès des équipes de France de handball, faux sur ses trois lignes**, quatre titres manquants ; et le premier financeur institutionnel du sport français, présenté comme acquis « de très loin » alors que l'écart est de quatre points et que l'État est passé devant deux années sur les cinq dernières.
5. **La contre-vérification, sur le web, de toutes les corrections factuelles proposées en passe 1 : aucune n'est fausse.** Bubka/Lavillenie, Hillsborough à 97, les quatre engins de la gymnastique rythmique, Boston à dix-huit titres, le marathon de 1921, les départs du Dakar, la parité des quotas de Paris 2024, l'OMS à 150-300 minutes, Shiffrin — toutes confirmées, ainsi que le cinquième Tour de Pogačar du 26 juillet 2026 relevé par le relecteur 2. Les **deux points laissés en suspens sont tranchés** : le record du monde du décathlon de Kévin Mayer tient toujours (le cours a raison), et les **Jeux olympiques de l'esport n'existent pas** — le CIO a rompu avec l'Arabie saoudite le 30 octobre 2025 et le projet repart sans hôte ni date, ce qui fait passer le constat de « à vérifier » à GRAVE.

**Le motif d'ensemble du domaine, une fois les deux passes faites**, tient en une phrase : *le Sport est un domaine dont les cours sont bons et dont les questions sont périmées.* Les cours datent leurs faits, nuancent, refusent les causes uniques — `sp3-records-limites` explique pourquoi certains records des années 1980 résistent, `sp3-arbitrage-technologie` distingue ce qu'un capteur tranche de ce qu'il ne tranchera jamais, `sp2-histoire-sport` montre que l'amateurisme était une barrière sociale. Les questions, elles, énoncent des palmarès sans date, se répètent, et laissent des « premier », « seul », « le plus » sans borne temporelle. Là où le corpus se trompe, c'est presque toujours parce qu'il a écrit au présent une chose qui était vraie quand il a été écrit.

**Trois défauts sont structurels et se corrigeront mieux dans le code que dans le texte** : le dédoublonnage qui compare des chaînes et non des faits (« 3,05 mètres » ≠ « Trois mètres cinq ») ; le générateur d'astuce qui recopie des titres de sections ; et la table `FUSIONS`, qui réunit des notions sans que personne n'ait relu la série obtenue. Les trois se voient en chargeant le module, et en aucun autre cas.

