# Sport

> ÉTAT : passe 1 en cours. Lus : `prisma/seed/culture-g/sport.ts` (13 notions, 129 q.), `sport-2.ts` (19 notions, 189 q.), `sport-3.ts` (22 notions, 214 q.), `cours/sport.ts` (42 cours, intégral), `cours/fusions.ts` + `src/modules/culture-g/contenu.ts` (mécanique de fusion vérifiée), `heritage/culture-g/data/sport.json` (57 questions + 3 cours), leçons héritées **01, 06, 07, 09, 14, 15, 16**. Reste : leçons **02, 03, 04, 05, 08, 10, 11, 12, 13, 17**, puis la passe 2 complète.

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

### [GRAVE] Laure Manaudou n'a jamais été championne olympique du 800 m — l'explication contredit l'énoncé
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-natation`
- **Texte** : « Quelle nageuse française a été championne olympique du huit cents mètres ? » → réponse « Laure Manaudou », explication : « Elle remporte le quatre cents mètres nage libre à Athènes en 2004. »
- **Problème** : Laure Manaudou est championne olympique du **400 m nage libre** à Athènes en 2004 ; sur 800 m elle est vice-championne (argent). L'énoncé est donc faux, et l'explication le contredit ouvertement. Le cours de la même notion (`cours/sport.ts`, `sp3-natation`, section « Les grandes carrières ») confirme : « Laure Manaudou devient championne olympique du quatre cents mètres nage libre à Athènes en 2004 ».
- **Correction proposée** : « Quelle nageuse française a été championne olympique du quatre cents mètres nage libre en 2004 ? »

### [GRAVE] Question insoluble : un « nageur français » qui est une nageuse, sur une épreuve qui n'est pas la bonne
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-natation`
- **Texte** : « Quel nageur français a remporté le quatre cents mètres quatre nages en 2012 ? », choix `["Camille Muffat sur le quatre cents nage libre", "Yannick Agnel", "Alain Bernard", "Florent Manaudou"]`, bonne réponse 0, explication « Camille Muffat s'impose sur le quatre cents mètres nage libre à Londres. »
- **Problème** : trois défauts cumulés. (1) L'énoncé demande un **nageur** masculin, la bonne réponse est une femme. (2) L'énoncé demande le **400 m quatre nages** (remporté à Londres 2012 par l'Américain Ryan Lochte, aucun Français) ; la réponse porte sur le **400 m nage libre**. (3) La « bonne réponse » est une phrase qui corrige l'énoncé, ce qui la désigne immédiatement.
- **Correction proposée** : « Quelle nageuse française a remporté le quatre cents mètres nage libre aux Jeux de Londres en 2012 ? » — choix : « Camille Muffat », « Laure Manaudou », « Charlotte Bonnet », « Coralie Balmy ».

### [GRAVE] Question sans réponse : Kévin Mayer n'a jamais été champion olympique
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-athletisme-lancers`
- **Texte** : « Quel décathlonien français a été champion olympique ? » → réponse « Kévin Mayer, vice-champion olympique et champion du monde »
- **Problème** : la bonne réponse dit elle-même qu'il n'est pas champion olympique. Mayer est vice-champion olympique en 2016 et 2021 ; aucun décathlonien français n'a jamais été champion olympique. La question n'a donc aucune réponse correcte, et sa formulation trahit le bricolage.
- **Aggravant** : le cours de la même notion est explicite et correct — « Le Français Kévin Mayer détient le record du monde de la discipline depuis 2018, avec un titre de champion du monde et deux médailles d'argent olympiques — **l'or lui ayant échappé de peu à deux reprises**. » La question contredit frontalement son propre cours.
- **Correction proposée** : « Quel décathlonien français a été double vice-champion olympique et champion du monde ? » — réponse « Kévin Mayer ».

### [GRAVE] Question dont les choix ne répondent pas à l'énoncé
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-tennis-3`
- **Texte** : « Quel tournoi du Grand Chelem se joue sur terre battue ? », choix `["Sur terre battue", "Sur gazon", "Sur dur", "Sur surface synthétique"]`
- **Problème** : l'énoncé demande un **tournoi**, les quatre choix sont des **surfaces**. Question insoluble telle quelle : la bonne réponse est la reformulation littérale de l'énoncé. Copier-coller manifestement raté depuis la question voisine « Sur quelle surface Wimbledon se dispute-t-il ? ».
- **Correction proposée** : « Quel tournoi du Grand Chelem se joue sur terre battue ? » — choix : « Roland-Garros », « Wimbledon », « l'US Open », « l'Open d'Australie ».

### [GRAVE] Joakim Noah présenté comme premier choix de draft alors qu'il fut choisi neuvième
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-basket-3`
- **Texte** : « Quel joueur français a été premier choix de la draft NBA en 2023 ? » → « Victor Wembanyama », explication : « Il devient le deuxième Français premier choix après Joakim Noah, lui-même choisi en neuvième position. »
- **Problème** : la phrase se contredit dans sa propre longueur. Noah n'a jamais été premier choix (9e en 2007) ; Wembanyama est le **premier** Français jamais choisi en première position. Le cours de la même notion dit d'ailleurs correctement : « Il n'est pas le premier Français premier choix — Joakim Noah avait été sélectionné en neuvième position en 2007 » — formulation elle-même fautive (« il n'est pas le premier » alors qu'il l'est), ce qui suggère une négation mal recopiée des deux côtés.
- **Correction proposée** (question) : « Il est le premier Français jamais choisi en première position ; le précédent Français le mieux placé était Joakim Noah, neuvième en 2007. » — et corriger la phrase du cours en « Il est le premier Français choisi en première position ».

### [GRAVE] Le record de Bubka a tenu vingt et un ans, pas seize
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-athletisme-lancers`
- **Texte** : « Quel perchiste français a détenu le record du monde ? » → « Renaud Lavillenie », explication : « Il bat le record de Bubka en salle en 2014, seize ans après. »
- **Problème** : Bubka avait établi son record en salle (6,15 m) en **février 1993** ; Lavillenie franchit 6,16 m en **février 2014**, soit **vingt et un ans** plus tard. Le chiffre « seize » ne correspond à aucune des deux dates de Bubka (record extérieur 6,14 m en 1994 : vingt ans).
- **Aggravant** : le cours de la notion d'accueil dit juste — « le record de Sergueï Bubka vieux de **vingt et un ans** » (`cours/sport.ts`, `sp3-athletisme-lancers`, section « Les sauts »). La question et son propre cours se contredisent donc dans le même chapitre.
- **Correction proposée** : « Il bat en 2014 le record en salle de Sergueï Bubka, qui tenait depuis 1993, soit vingt et un ans. »

### [GRAVE] Le pass'Sport date de 2021, pas de 2022 — l'erreur est répétée dans la question et dans le cours
- **Où** : `prisma/seed/culture-g/sport.ts` — notion `sp-sport-societe` ; et `prisma/seed/culture-g/cours/sport.ts` — `sp-sport-societe`, section « L'organisation française »
- **Texte** : « Quel dispositif français vise l'accès au sport des enfants depuis 2022 ? » → « Le pass'Sport, aide à la licence » ; et dans le cours : « Le pass'Sport, créé en 2022, est une aide financière à la prise de licence ».
- **Problème** : le pass'Sport a été créé pour la rentrée **2021** (décret du 12 août 2021, campagne 2021-2022, 50 € par enfant). La date de 2022 est fausse aux deux endroits ; comme elle figure à la fois dans la question et dans le cours, l'apprenant n'a aucun moyen de la corriger. **(À revérifier sur le web avant correction définitive.)**
- **Correction proposée** : remplacer « depuis 2022 » par « depuis 2021 » dans l'énoncé, et « créé en 2022 » par « créé en 2021 » dans le cours.

### [GRAVE] Le bilan de Hillsborough diffère entre le cours et la question de la même notion
- **Où** : `prisma/seed/culture-g/sport-2.ts` — notion `sp2-violence-sport` ; et `cours/sport.ts` — `sp2-violence-sport`, section « Deux drames fondateurs »
- **Texte** : question — « Quatre-vingt-dix-sept morts. Il a fallu près de trente ans pour établir les responsabilités officielles. » ; cours — « le 15 avril 1989, à Hillsborough, quatre-vingt-seize personnes meurent écrasées ».
- **Problème** : 96 et 97 dans le même domaine, sur le même fait. Le chiffre exact aujourd'hui est **97** : Andrew Devine, blessé en 1989 et mort en 2021, a été reconnu 97e victime par le coroner. La question est à jour, le cours ne l'est pas.
- **Correction proposée** : dans le cours, « quatre-vingt-seize personnes meurent écrasées » → « quatre-vingt-seize personnes meurent écrasées ; une 97e victime, restée dans le coma, décédera en 2021 et sera reconnue comme telle ».

### [GRAVE] Nombre d'engins de la gymnastique rythmique : le cours dit quatre, la question dit cinq
- **Où** : `prisma/seed/culture-g/sport-2.ts` — notion `sp2-gymnastique` ; et `cours/sport.ts` — `sp2-gymnastique`, section « Les disciplines voisines » ; voir aussi `sport-3.ts` — `sp3-gymnastique`
- **Texte** : question sp2 — « Cinq engins sont utilisés : corde, cerceau, ballon, massues et ruban. » ; cours sp2 — « La gymnastique rythmique associe mouvements et engins — cerceau, ballon, massues, ruban » ; question sp3 — « Cerceau, ballon, massues et ruban en sont les engins. »
- **Problème** : contradiction frontale à l'intérieur d'une même notion, et entre deux notions du domaine. La corde a été retirée du programme senior par la FIG ; le programme actuel repose sur quatre engins (cerceau, ballon, massues, ruban). La version « cinq engins » est périmée.
- **Correction proposée** : dans la question `sp2-gymnastique`, « Quatre engins sont aujourd'hui utilisés en compétition senior : cerceau, ballon, massues et ruban ; la corde a été retirée du programme. »

### [GRAVE] Une question du lot 3 contredit une question du lot 2 sur la recommandation de l'OMS
- **Où** : `prisma/seed/culture-g/sport-3.ts` — notion `sp3-sport-sante` ; contre `sport-2.ts` — `sp2-sport-sante`
- **Texte** : sp3 — « Quelle durée d'activité physique l'OMS recommande-t-elle par semaine ? » → « Au moins cent cinquante minutes d'activité modérée », avec « Trois cents minutes » donné comme **mauvaise** réponse. sp2 — « Quelle durée d'activité physique modérée l'OMS recommande-t-elle par semaine à l'adulte ? » → « Cent cinquante à trois cents minutes ».
- **Problème** : la recommandation de l'OMS est bien **150 à 300 minutes** ; le distracteur « Trois cents minutes » de sp3 est donc lui aussi dans la fourchette recommandée. Un apprenant qui a fait les deux questions apprend deux choses incompatibles.
- **Correction proposée** : remplacer le distracteur « Trois cents minutes » par « Six cents minutes », ou aligner l'énoncé de sp3 sur « Quel est le minimum hebdomadaire recommandé par l'OMS ? ».

### [GRAVE] Doublons massifs entre les trois lots — le lot 3 réécrit des notions entières des lots 1 et 2
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

### [GRAVE] La fusion réunit dans un même chapitre des questions qui posent deux fois la même chose

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

### [GRAVE] La fusion jette le cours de la notion absorbée, et l'hôte ne couvre pas les questions qui arrivent

- **Où** : `src/modules/culture-g/contenu.ts:487-503` — « La cible garde le chapitre ; la source disparaît du catalogue après avoir cédé ses questions. »
- **Problème** : cinq cours de `prisma/seed/culture-g/cours/sport.ts` sont écrits pour des notions absorbées et ne seront donc **jamais affichés** : `sp-cyclisme`, `sp-athletisme`, `sp3-paralympiques`, `sp3-rugby-3`, `sp3-gymnastique`. Leurs questions, elles, survivent chez l'hôte. Quand l'hôte ne traite pas le sujet, la question devient irrépondable après lecture du cours. Cas relevés :

  - **Le maillot jaune.** `sp-cyclisme` est absorbée par `sp3-cyclisme-3`. Or la question d'ouverture de la notion — « Pourquoi le maillot du leader du Tour de France est-il jaune ? » — et l'accroche même de la notion (« Le maillot jaune du Tour de France doit sa couleur au papier du journal organisateur ») ne trouvent leur explication que dans le cours **abandonné** de `sp-cyclisme` (« Le maillot du leader est jaune parce que c'était la couleur du papier sur lequel L'Auto était imprimé »). Le cours conservé, celui de `sp3-cyclisme-3`, énumère les maillots à pois, vert et blanc **sans jamais dire pourquoi le premier est jaune**, ni nommer L'Auto. Idem pour « Qu'est-ce qu'un peloton ? » et « Qu'est-ce qu'une échappée ? », traités dans le cours abandonné et absents du cours conservé.
  - **Simone Biles.** `sp3-gymnastique` est absorbée par `sp2-gymnastique`. La question « Quelle gymnaste américaine domine la discipline depuis 2013 ? » arrive chez un hôte dont le cours ne nomme jamais Simone Biles. Le cours abandonné lui consacrait une section entière, y compris son retrait de Tokyo 2021 — page qui disparaît. Même chose pour « Qu'est-ce que le mouvement de libération de la parole dans le sport ? » et pour l'affaire Nassar, citée par son nom dans le cours abandonné et seulement évoquée (« les affaires de maltraitance révélées depuis 2016 ») chez l'hôte.
  - **Le rugby à sept.** `sp3-rugby-3` est absorbée par `sp2-rugby`, dont le cours ne dit rien du rugby à sept, ni de la valeur de l'essai, ni du palmarès de la Coupe du monde — trois questions qui arrivent pourtant.
  - **Marie-Amélie Le Fur et le tandem.** `sp3-paralympiques` est absorbée par `sp2-handisport`, dont le cours ne mentionne ni l'une ni l'autre.
- **Correction proposée** : avant fusion, reverser dans le cours de l'hôte les paragraphes du cours abandonné qui portent les réponses (origine du maillot jaune, peloton et échappée ; Simone Biles ; rugby à sept ; Le Fur et le tandem), ou inverser le sens de la fusion là où le cours absorbé est le plus complet.

### [MOYEN] Un paragraphe de cours réécrit presque mot pour mot dans un autre cours

- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-athletisme` section « Courir » / « Sauter et lancer », contre `sp3-athletisme-lancers` sections « Courir » / « Les sauts »
- **Texte** : `sp-athletisme` — « Le saut en hauteur a changé de technique en une seule soirée : à Mexico en 1968, l'Américain Dick Fosbury franchit la barre sur le dos et remporte l'or. Le rouleau dorsal, ou Fosbury flop, s'est imposé partout en quelques années, parce qu'il permet au centre de gravité du sauteur de passer sous la barre pendant que son corps passe dessus. » ; `sp3-athletisme-lancers` — « Le saut en hauteur a connu une révolution technique en une soirée : à Mexico en 1968, Dick Fosbury franchit la barre sur le dos et remporte l'or. Le Fosbury flop s'est imposé partout en quelques années, parce qu'il permet au centre de gravité du sauteur de passer sous la barre pendant que le corps passe dessus. »
- **Problème** : le même paragraphe, à trois mots près. Le passage sur le marathon est dans le même cas (« cette distance étrange a été fixée aux Jeux de Londres en 1908, le parcours partant du château de Windsor »), de même que le paragraphe sur le vent et le faux départ. Les deux cours portent d'ailleurs une section homonyme, « Courir ». Comme `sp-athletisme` est absorbée, ce cours est du code mort qui duplique le cours vivant.
- **Correction proposée** : supprimer le cours `sp-athletisme` devenu inutile, après avoir vérifié qu'aucun de ses paragraphes n'est perdu.

### [GRAVE] Section de cours qui dit deux fois la même chose
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-football`, section « L'arbitrage assisté »
- **Texte** : § 1 — « ils n'interviennent que sur quatre types de décisions — but, penalty, carton rouge direct, erreur d'identité — et l'arbitre central reste seul juge » ; § 2 — « Son périmètre est volontairement étroit : buts, penaltys, cartons rouges directs et erreurs d'identité. »
- **Problème** : les deux paragraphes énoncent la même liste et la même idée de périmètre restreint, à quelques mots près. Le second paragraphe commence de plus par un « Elle » sans antécédent (le premier parle d'« ils »), signe d'une fusion mal faite de deux rédactions. C'est du remplissage, et le lecteur croit avoir manqué une nuance.
- **Correction proposée** : supprimer le second paragraphe et développer à la place les cas que la vidéo **ne** couvre pas (fautes hors surface, deuxième carton jaune, hors-jeu antérieur à la phase), qui sont la vraie source des controverses.

### [MOYEN] « Enfer du Nord » : une seule cause donnée à un surnom qui en a plusieurs
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-cyclisme`
- **Texte** : « Le surnom vient d'abord de la découverte des paysages dévastés après la Première Guerre mondiale. »
- **Problème** : l'affirmation est défendable (reconnaissance de 1919) mais présentée comme la seule origine, alors que l'usage moderne du surnom renvoie surtout à la dureté des pavés. Le « d'abord » atténue sans lever l'ambiguïté.
- **Correction proposée** : « Le surnom naît en 1919, à la découverte des paysages dévastés par la guerre ; il désigne aujourd'hui surtout la dureté des secteurs pavés. »

### [MOYEN] Le rallye Dakar n'est pas parti de Paris jusqu'en 2007
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sports-mecaniques`
- **Texte** : « Parti de Paris jusqu'en 2007, il se dispute depuis en Amérique du Sud puis en Arabie saoudite. »
- **Problème** : le dernier départ parisien est celui de **2001** ; les éditions suivantes sont parties d'Arras, Marseille, Clermont-Ferrand, Barcelone puis Lisbonne (2006 et 2007). L'édition 2008 a été annulée, l'Amérique du Sud commence en 2009. La formule enchaîne deux approximations. La question `sp3-sports-mecaniques` donne d'ailleurs la version correcte (« Disputé en Afrique puis en Amérique du Sud, il se tient en Arabie saoudite depuis 2020 »), ce qui crée en plus une incohérence interne.
- **Correction proposée** : « Parti de Paris jusqu'en 2001, puis d'autres villes européennes jusqu'en 2007, il s'est couru en Amérique du Sud de 2009 à 2019, et en Arabie saoudite depuis 2020. »

### [MOYEN] Palmarès NBA présenté comme une égalité, et énoncé bancal
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3` ; et `cours/sport.ts`, `sp3-basket-3`, section « Une ligue devenue mondiale »
- **Texte** : « Quelle équipe détient le record de titres NBA avec les Lakers ? » → « Les Boston Celtics », explication « Celtics et Lakers sont au coude à coude en tête du palmarès. » ; cours : « Son palmarès est dominé par deux franchises, les Boston Celtics et les Los Angeles Lakers, au coude à coude en tête. »
- **Problème** : deux défauts. (1) L'énoncé « détient le record […] avec les Lakers » est incompréhensible : il présuppose une égalité tout en demandant un détenteur unique. (2) Depuis juin 2024, Boston compte 18 titres contre 17 aux Lakers : il n'y a plus égalité. C'est exactement le type de palmarès qui se périme sans date.
- **Correction proposée** : « Quelle franchise compte le plus de titres NBA ? » → « Les Boston Celtics », explication : « Dix-huit titres depuis 2024, devant les Los Angeles Lakers qui en comptent dix-sept. »

### [MOYEN] « Seule défaite olympique marquante » des États-Unis en basket : deux défaites majeures passées sous silence
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3` ; repris dans le cours (« avec pour principale interruption la finale contestée de 1972 »)
- **Texte** : « Leur seule défaite olympique marquante remonte à la finale contestée de 1972. »
- **Problème** : les États-Unis ont aussi perdu la demi-finale de 1988 face à l'URSS, et ont subi trois défaites en 2004 pour finir troisièmes — la première fois qu'une équipe américaine composée de joueurs NBA échouait. Le mot « seule » est faux.
- **Correction proposée** : « Leur défaite la plus contestée reste la finale de 1972 ; ils ont aussi été battus en demi-finale en 1988 et n'ont pris que le bronze en 2004. »

### [MOYEN] La distance du marathon : « fixée en 1908 » présenté comme un fait, alors qu'elle n'est officialisée qu'en 1921
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-athletisme` ; et `sport-3.ts` — `sp3-athletisme-fond`
- **Texte** : sp — « La distance a été fixée en 1908 à Londres, allongée pour que l'arrivée soit face à la loge royale. » ; sp3 — bonne réponse « La distance a été fixée à Londres en 1908 pour des raisons de parcours », avec « Elle a été arrondie en 1921 » donné comme distracteur.
- **Problème** : 42,195 km est **courue** en 1908 mais n'est **officialisée** comme distance standard qu'en 1921 par la fédération internationale. Le cours `sp3-athletisme-fond` le dit correctement (« La distance fut officialisée en 1921 »), ce qui rend le distracteur de la question troublant : un apprenant attentif hésitera légitimement.
- **Correction proposée** : reformuler le distracteur en « Elle a été calculée à partir de la distance réelle entre Marathon et Athènes », et l'explication en « Courue à Londres en 1908 du château de Windsor à la loge royale, elle n'est officialisée comme distance standard qu'en 1921. »

### [MOYEN] Parité de Paris 2024 : parité des quotas, pas des participants
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sport-societe`
- **Texte** : « Quelle proportion de femmes le CIO a-t-il atteinte parmi les athlètes aux Jeux de Paris en 2024 ? » → « La parité »
- **Problème** : la parité a été atteinte sur les **quotas de places attribuées** (5 250 / 5 250), pas sur les athlètes effectivement engagés, un peu moins nombreuses côté féminin. L'énoncé dit « parmi les athlètes », ce qui est exact mais trompeur. Le cours de la même notion est, lui, précis (« la parité stricte dans les quotas d'athlètes »), tout comme la question de `sp3-sport-femmes` (« Les quotas de participation ont été strictement paritaires »).
- **Correction proposée** : « Quelle parité le CIO a-t-il atteinte dans les quotas de participation aux Jeux de Paris en 2024 ? »

### [MOYEN] Énoncé fantaisiste : le « biathlon de tir sportif dit à dix mètres »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-precision`
- **Texte** : « Qu'est-ce que le biathlon de tir sportif dit à dix mètres ? » → « Une épreuve de précision à la carabine ou au pistolet à air comprimé »
- **Problème** : cette discipline n'existe pas sous ce nom. Les épreuves concernées sont le **10 m carabine à air comprimé** et le **10 m pistolet à air comprimé**. Le mot « biathlon » est ici parasite et entre directement en collision avec le biathlon d'hiver, traité dans deux autres notions du même domaine. Le cours de la même notion emploie d'ailleurs la bonne formule : « Le tir sportif à dix mètres se dispute à la carabine ou au pistolet à air comprimé ».
- **Correction proposée** : « Qu'est-ce que le tir sportif à dix mètres ? »

### [MOYEN] Deux réponses défendables, et un distracteur qui se dénonce
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-jo-hiver`
- **Texte** : « Quelle skieuse américaine a marqué le ski alpin des années 2010 ? », choix `["Mikaela Shiffrin", "Lindsey Vonn", "Julia Mancuso", "Bode Miller"]`
- **Problème** : Lindsey Vonn a marqué le début de la décennie (or olympique 2010, globes de cristal 2010 et 2012) au moins autant que Shiffrin ; l'énoncé seul ne permet pas de trancher, seule l'explication (« record de victoires en Coupe du monde ») départage. Par ailleurs **Bode Miller est un homme** : un distracteur exclu par le genre de l'énoncé n'apprend rien et réduit le choix réel à trois.
- **Correction proposée** : « Quelle skieuse détient le record de victoires en Coupe du monde de ski alpin ? » et remplacer « Bode Miller » par « Picabo Street ».

### [MOYEN] Réponse incompréhensible : les « balises de la balle »
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-tennis-3`
- **Texte** : « Qu'est-ce que le système Hawk-Eye ? » → « Un dispositif de traçage vidéo vérifiant les balises de la balle »
- **Problème** : « les balises de la balle » ne veut rien dire. Le hawk-eye reconstitue la **trajectoire** de la balle et son point d'impact — ce que dit correctement le cours de la même notion et la question `sp-arbitrage-regles`.
- **Correction proposée** : « Un dispositif reconstituant par plusieurs caméras la trajectoire de la balle et son point d'impact ».

### [MOYEN] Une série d'énoncés dont la forme ne correspond pas à celle de la réponse (lot 3)
- **Où** : `prisma/seed/culture-g/sport-3.ts` — plusieurs notions
- **Texte** : « Comment les coureurs s'élancent-ils dans un contre-la-montre ? » → « Une épreuve où les coureurs partent individuellement contre le chronomètre » (`sp3-cyclisme-3`) ; « Quel effet l'EPO produit-elle sur l'organisme ? » → « Une hormone stimulant la production de globules rouges » (`sp3-dopage`) ; « Avec quoi la gymnastique rythmique se pratique-t-elle ? » → « Une discipline féminine associant mouvements et engins » (`sp3-gymnastique`) ; « Par quelle nage un quatre nages individuel commence-t-il ? » → « Papillon, dos, brasse, nage libre » (`sp3-natation`) ; « Quelles racines le sumo japonais possède-t-il ? » → « Une lutte japonaise ritualisée aux racines shintoïstes » (`sp3-sports-combat`) ; « À quels athlètes le rugby-fauteuil s'adresse-t-il ? » → « Un sport de contact en fauteuil pour tétraplégiques » (`sp3-paralympiques`) ; « À quoi renvoie le terme de sportwashing ? » → « L'usage du sport pour… » ; « Comment réussit-on un Grand Chelem ? » → « Le fait de battre toutes les autres équipes ».
- **Problème** : ce sont des définitions (« Une épreuve où… », « Une hormone… ») recyclées sous des énoncés interrogatifs qui appellent autre chose. La bonne réponse se repère alors à sa **forme** — c'est la seule qui commence par un article défini ou indéfini là où les distracteurs suivent parfois une autre construction — et non à son contenu. Le procédé se répète assez pour constituer un défaut de fabrication du lot 3.
- **Correction proposée** : rétablir l'énoncé définitionnel (« Qu'est-ce qu'un contre-la-montre ? », « Qu'est-ce que l'EPO ? »), ou réécrire la réponse dans la forme appelée par la question (« Ils partent l'un après l'autre, à intervalle régulier »).

### [MOYEN] Trois questions consécutives avec la même réponse et la même liste de choix
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-sports-glisse`
- **Texte** : « Quand le surf est-il devenu olympique ? », « Quand le skateboard est-il devenu olympique ? », « Quand l'escalade est-elle devenue olympique ? » — toutes trois avec « À Tokyo en 2021 » et des choix quasi identiques.
- **Problème** : après la première, les deux suivantes ne testent plus rien. La série apprend un réflexe, pas un fait.
- **Correction proposée** : n'en garder qu'une (« Quels trois sports urbains ou de nature sont entrés au programme olympique à Tokyo en 2021 ? ») et remplacer les deux autres par des questions de contenu (format des épreuves, sites).

### [MOYEN] Un distracteur qui est vrai lui aussi (fondation de la NBA)
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-basket-3`
- **Texte** : « Quand la NBA a-t-elle été fondée ? », choix `["En 1946", "En 1936", "En 1956", "En 1949 sous ce nom"]`, bonne réponse « En 1946 », explication « Créée sous le nom de Basketball Association of America, elle prend son nom en 1949. »
- **Problème** : l'explication valide explicitement le distracteur « En 1949 sous ce nom ». Deux réponses sont défendables selon qu'on parle de la ligue ou de son nom.
- **Correction proposée** : « Sous quel nom la NBA a-t-elle été fondée en 1946 ? » → « Basketball Association of America ».

### [MOYEN] « Sept trois-quarts » : les arrières d'une équipe de rugby ne sont pas tous des trois-quarts
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-sports-collectifs`, section « Le rugby et la passe en arrière » ; repris dans `sp3-rugby-3`, section « Quinze, et sept »
- **Texte** : « Le rugby à quinze aligne quinze joueurs, huit avants et sept trois-quarts. »
- **Problème** : les sept joueurs de la ligne arrière comprennent le demi de mêlée, le demi d'ouverture, **quatre** trois-quarts et l'arrière. Appeler les sept « trois-quarts » est une erreur de vocabulaire technique, dans un cours dont c'est précisément le rôle d'installer le vocabulaire.
- **Correction proposée** : « huit avants et sept arrières, dont quatre trois-quarts ».

### [MOYEN] Le cours de `sp-corps-performance` ne dit rien de la VO2 max, dont c'est pourtant la première question
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-corps-performance` ; contre `sport.ts`, `sp-corps-performance`
- **Problème** : la première question de la notion est « Qu'est-ce que la VO2 max ? », mais les trois sections du cours (« Ce que consomme l'effort », « S'entraîner, c'est récupérer », « Les pièges du corps ») traitent du glycogène, du seuil anaérobie, des fibres, de la surcompensation, du sommeil, de l'altitude, de l'échauffement, de la déshydratation et du RED-S — jamais de la VO2 max. La question n'est pas répondable après lecture du cours.
- **Correction proposée** : ajouter au premier paragraphe : « La VO2 max, consommation maximale d'oxygène, mesure le plafond de la filière aérobie ; elle s'exprime en millilitres par kilo et par minute et ne suffit pas à prédire la performance. »

### [MOYEN] Le cours de `sp2-rugby` ne mentionne pas le haka, dont il y a une question
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-rugby` ; contre `sport-2.ts`, `sp2-rugby`
- **Problème** : la question « Qu'est-ce que le haka ? » n'a pas de réponse dans le cours de sa notion, qui parle de la scission, des phases de jeu, de la sécurité et des compétitions. (Le cours `sp3-rugby-3`, lui, le traite — mais il s'agit d'une autre notion.)
- **Correction proposée** : ajouter une phrase à la section « Les compétitions et la culture ».

### [MOYEN] Rustine hors sujet en fin de section
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-sport-collectif-tactique`, section « Les limites du modèle »
- **Texte** : « Une précision utile au passage : il n'existe pas de hors-jeu au handball, contrairement à une confusion fréquente avec le football. »
- **Problème** : la section traite de la modélisation statistique du jeu collectif ; cette phrase, ajoutée en queue de paragraphe, n'a aucun lien avec ce qui précède. Elle est manifestement là pour couvrir la question sur le hors-jeu au handball. Une information juste, placée là où elle n'a pas de sens, ne s'apprend pas.
- **Correction proposée** : déplacer la phrase dans la section « Les principes défensifs et offensifs », où il est question des règles de placement.

### [MOYEN] Comparaison bancale dans le même paragraphe
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-sport-collectif-tactique`, section « Les limites du modèle »
- **Texte** : « Le sport collectif résiste pourtant à la modélisation statistique bien mieux que le baseball ou le basket »
- **Problème** : le baseball et le basket **sont** des sports collectifs. La phrase oppose un ensemble à deux de ses éléments. Ce que le cours veut dire — et dit très bien juste après — est que les sports à jeu continu résistent mieux que les sports à actions discrètes.
- **Correction proposée** : « Les sports à jeu continu, comme le football ou le handball, résistent à la modélisation statistique bien mieux que le baseball ou le basket, faits d'actions discrètes. »

### [MOYEN] Un diplôme supprimé présenté au présent
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sport-education`
- **Texte** : « Qu'est-ce qu'un brevet d'État d'éducateur sportif ? » → « Un diplôme permettant d'enseigner contre rémunération une activité sportive »
- **Problème** : le BEES n'est plus délivré ; il a été remplacé par les BPJEPS, DEJEPS et DESJEPS. Le cours de la même notion le dit correctement (« anciennement brevet d'État d'éducateur sportif, aujourd'hui décliné en plusieurs certifications professionnelles »), la question non.
- **Correction proposée** : « Que faut-il pour encadrer une activité sportive contre rémunération en France ? » → « Un diplôme d'État, aujourd'hui le BPJEPS ou ses équivalents ».

### [MOYEN] Raccourci chronologique sur la naissance du rugby à treize
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp2-rugby`, section « Une scission fondatrice »
- **Texte** : « Les clubs du nord font sécession et modifient les règles […] : treize joueurs au lieu de quinze, suppression des mêlées disputées, limitation des plaquages successifs. »
- **Problème** : présenté comme la conséquence immédiate de 1895, alors que le passage à treize joueurs date de 1906 et la règle des six plaquages de 1966. Le cours donne l'impression d'un sport né complet en une réunion.
- **Correction proposée** : « Les clubs du nord font sécession en 1895, puis modifient progressivement les règles : treize joueurs à partir de 1906, mêlées non disputées, puis limitation du nombre de plaquages successifs. »

### [GRAVE] Le domaine compte à peu près deux fois plus de chapitres qu'il n'a de sujets

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

### [GRAVE] La fusion vers les leçons héritées produit les mêmes doublons frontaux

- **Où** : `prisma/seed/culture-g/cours/fusions.ts` — table `FUSIONS`, entrées Sport
- **Problème** : neuf notions du seed sont versées dans une leçon héritée qui possède déjà son quiz de cinq questions. Le dédoublonnage ne portant que sur l'énoncé, les recouvrements passent. Relevé :
  - **`sp2-basket-nba` → `cg-sport-06`** : la leçon demande « À quelle hauteur se situe le panier de basket-ball ? » (3,05 m) et la notion « Quelle est la hauteur d'un panier de basket ? » (Trois mètres cinq) ; la leçon demande « Combien de temps une équipe de basket a-t-elle pour tenter un tir ? » (Vingt-quatre secondes) et la notion « Combien de temps une équipe a-t-elle pour tirer en NBA ? » (Vingt-quatre secondes).
  - **`sp2-sports-mecaniques` → `cg-sport-07`** : « En quelle année le championnat du monde de Formule 1 a-t-il été créé ? » (1950) et « Quand le championnat du monde de Formule 1 est-il créé ? » (En 1950).
  - **`sp3-sports-combat` → `cg-sport-09`** : « Qui a créé le judo, et en quelle année ? » (Jigoro Kano en 1882) et « Qu'est-ce que le judo ? » (Un art martial japonais fondé par Jigorō Kano en 1882) ; « Qu'est-ce qui distingue la lutte gréco-romaine de la lutte libre ? » et « Qu'est-ce que la lutte gréco-romaine ? », avec la même explication sur les prises de jambes.
  - **`sp-dopage-ethique` → `cg-sport-15`** : « Quel est l'effet principal de l'EPO utilisée comme produit dopant ? » et « Qu'est-ce que l'EPO ? » ; « En quelle année l'Agence mondiale antidopage a-t-elle été créée ? » et « Quelle agence coordonne la lutte antidopage au niveau mondial ? », dont l'explication donne la même date et la même cause.
  - **`sp-sport-economie` + `sp2-sport-medias` → `cg-sport-16`** (deux notions dans une seule leçon) : « Quel est le nom donné à la pratique consistant à attribuer à un stade le nom d'une marque ? » (Le naming) et « Qu'est-ce que le naming d'une enceinte sportive ? » ; et trois questions concurrentes sur les droits de diffusion.
  - **`sp-jeux-olympiques` + `sp3-jo-hiver` → `cg-sport-c01`** : « En quelle année les premiers Jeux d'hiver sont-ils organisés ? » (1924, à Chamonix) et « Où se sont tenus les premiers Jeux olympiques d'hiver ? » (À Chamonix, en 1924), désormais dans le même chapitre.
- **Correction proposée** : les mêmes que ci-dessus — dédoublonner sur le couple (bonne réponse, explication) avant de verser.

### [GRAVE] Contradiction sur la date des règles de Queensberry, à l'intérieur d'un même chapitre

- **Où** : `heritage/culture-g/data/lecons/sport/09.json` contre `prisma/seed/culture-g/sport-3.ts` — `sp3-sports-combat`, fusionnée dans `cg-sport-09`
- **Texte** : leçon — « Le tournant décisif intervient **en 1865**, lorsque John Graham Chambers rédige, sous le patronage du marquis de Queensberry, un ensemble de règles » ; question du seed — « Les règles du marquis de Queensberry l'ont codifiée **en 1867**. »
- **Problème** : les deux dates circulent (rédaction en 1865, publication en 1867), mais la fusion les place dans le même chapitre, sans que rien n'explique l'écart. L'apprenant lit successivement deux dates différentes pour le même fait.
- **Correction proposée** : retenir une seule formulation dans les deux textes — « rédigées en 1865 par John Graham Chambers sous le patronage du marquis de Queensberry, et publiées en 1867 ».

### [MOYEN] Les questions versées dans une leçon héritée n'y trouvent souvent pas leur réponse

- **Où** : table `FUSIONS` de `prisma/seed/culture-g/cours/fusions.ts`
- **Problème** : la leçon d'accueil garde son chapitre — cinq sections écrites sans connaissance des questions qui vont y arriver. Le recouvrement est partiel, et parfois faible. Comptage sur les cas les plus nets :
  - **`cg-sport-16`** reçoit `sp-sport-economie` **et** `sp2-sport-medias`, soit vingt questions ; ses cinq sections traitent le poids économique du sport, les ressources d'un club, les droits de diffusion, le parrainage et l'histoire de la presse sportive. **Environ treize de ces vingt questions n'ont aucune réponse dans le chapitre** : arrêt Bosman, plafond salarial, draft, ligue fermée, masse salariale, club formateur, paris sportifs en ligne, décret sur les événements d'importance majeure, commentaire sportif, ralenti, sport-spectacle, journalisme d'investigation, récit de la revanche.
  - **`cg-sport-07`** reçoit `sp2-sports-mecaniques` : le halo, la voiture de sécurité, le drapeau rouge et la Formule E ne figurent nulle part dans la leçon.
  - **`cg-sport-c01`** reçoit `sp3-jo-hiver` : sur dix questions, le skeleton, Mikaela Shiffrin, le snowboard à Nagano, le combiné nordique, la définition du biathlon, la domination norvégienne au tableau des médailles et le manque de neige ne sont traités par aucune de ses quatre sections.
  - **`cg-sport-14`** reçoit `sp2-sport-feminin` : Kathrine Switzer, l'interdiction du football féminin en Angleterre, la première Coupe du monde féminine, le test de féminité, l'hyperandrogénie et la proportion de licenciées en France sont absents de la leçon.
- **Correction proposée** : pour chaque notion versée, ajouter à la leçon d'accueil un paragraphe couvrant les questions orphelines, ou retirer ces questions.

### [MOYEN] Le cahier d'origine dit juste là où le seed dit faux — sans que rien ne les réconcilie

- **Où** : `heritage/culture-g/data/sport.json` contre `prisma/seed/culture-g/`
- **Problème** : sur plusieurs points que je signale plus haut comme fautifs dans le seed, le cahier d'origine donne la version exacte. Les deux corpus coexistant dans la même application, l'apprenant reçoit successivement les deux versions.
  - **Distance du marathon** : héritage (q. 13) — « cette longueur devint la norme officielle **en 1921** » ; seed (`sp-athletisme`, `sp3-athletisme-fond`) — « fixée en 1908 », avec « arrondie en 1921 » présenté comme une erreur.
  - **Composition de la ligne arrière au rugby** : héritage (q. 19) — « huit « avants »… et sept « **trois-quarts et demis** » » ; seed (`cours/sport.ts`, `sp-sports-collectifs` et `sp3-rugby-3`) — « sept trois-quarts ».
  - **Victoires d'Eddy Merckx** : héritage (q. 54) — « 525 victoires sur l'ensemble de sa carrière, dont **445 chez les professionnels** » ; seed (`cours/sport.ts`, `sp3-cyclisme-3`) — « **plus de cinq cents victoires professionnelles** ». Le seed confond le total toutes catégories avec le total professionnel.
- **Correction proposée** : aligner le seed sur le cahier d'origine dans les trois cas.

### [MINEUR] Quatre tournois, trois surfaces, mais « chaque tournoi une surface différente »

- **Où** : `heritage/culture-g/data/sport.json` — question 14
- **Texte** : « Chaque tournoi se joue sur une surface différente : dur, terre battue et gazon. »
- **Problème** : la phrase promet quatre surfaces pour quatre tournois et n'en énumère que trois. L'Open d'Australie et l'US Open se disputent tous deux sur dur — ce que le seed dit correctement (`sp3-tennis-3`, cours : « Le Grand Chelem réunit quatre tournois **sur trois surfaces** »).
- **Correction proposée** : « Les quatre tournois se répartissent sur trois surfaces : terre battue, gazon et dur. »

### [MINEUR] Une borne de comparaison inutilement lâche

- **Où** : `heritage/culture-g/data/sport.json` — question 11
- **Texte** : « Aucun autre olympien, tous sports confondus, ne dépasse les 10 médailles d'or. »
- **Problème** : littéralement vrai, mais la borne suggère qu'un athlète approcherait 10 titres, alors que le maximum suivant est 9 (Larissa Latynina, Paavo Nurmi, Mark Spitz, Carl Lewis). Une borne fausse-vraie n'apprend rien.
- **Correction proposée** : « Aucun autre olympien, tous sports confondus, ne dépasse 9 médailles d'or. »

### [MINEUR] Redondance et double « dont »

- **Où** : `heritage/culture-g/data/sport.json` — question 54
- **Texte** : « Avec 525 victoires sur l'ensemble de sa carrière, dont 445 chez les professionnels, dont trois championnats du monde sur route et sept Milan-San Remo, il est très largement considéré… »
- **Problème** : deux « dont » enchâssés sur des ensembles qui ne s'emboîtent pas de la même façon, dans une phrase déjà longue.
- **Correction proposée** : « Avec 525 victoires en carrière, dont 445 chez les professionnels — trois championnats du monde sur route et sept Milan-San Remo parmi elles —, il est… »

### [MINEUR] « La première championne olympique » : une formule qui prête à confusion

- **Où** : `heritage/culture-g/data/sport.json` — question 7
- **Texte** : « Les femmes ne furent admises qu'à partir des Jeux de Paris en 1900, où la Britannique Charlotte Cooper devint la première championne olympique en tennis. »
- **Problème** : exact avec le complément « en tennis », mais lu vite il contredit le fait qu'Hélène de Pourtalès, sacrée en voile en mai 1900, précède Charlotte Cooper (juillet 1900). Cooper est la première championne olympique **en individuel**.
- **Correction proposée** : « … où la Britannique Charlotte Cooper devint, en tennis, la première championne olympique d'une épreuve individuelle. »

### [MINEUR] Diacritiques d'un nom propre absents dans le cahier d'origine

- **Où** : `heritage/culture-g/data/sport.json` — question 37 (« Nadia Comaneci », « Vera Caslavska ») contre `prisma/seed/culture-g/sport-3.ts` (« Nadia Comăneci », « Věra Čáslavská »)
- **Correction proposée** : harmoniser sur la graphie accentuée dans les deux corpus.

### [MINEUR] « Tensing Norgay » au lieu de « Tenzing Norgay », et incohérence interne
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sports-glisse`
- **Texte** : « Par Edmund Hillary et Tensing Norgay. »
- **Problème** : orthographe fautive du nom. Le cours de la même notion écrit correctement « Tenzing Norgay » — les deux graphies coexistent donc dans le domaine.
- **Correction proposée** : « Tenzing Norgay ».

### [MINEUR] Accent manquant
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-hiver-nautiques`
- **Texte** : « Un kilometre cinq de natation, quarante de vélo et dix de course sur la distance olympique. »
- **Correction proposée** : « Un kilomètre cinq… »

### [MINEUR] Participe passé au lieu de l'infinitif
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-sports-hiver-nautiques`, section « Sur la neige et la glace »
- **Texte** : « Le biathlon, lui, alterne ski de fond et tir à la carabine : hériter d'un entraînement militaire scandinave, il demande de faire chuter son rythme cardiaque… »
- **Correction proposée** : « hérité d'un entraînement militaire scandinave, il demande… »

### [MINEUR] Accord de « contre-attaque »
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-sport-collectif-tactique`
- **Texte** : « Qu'est-ce qu'un contre-attaque en sport collectif ? »
- **Correction proposée** : « Qu'est-ce qu'une contre-attaque en sport collectif ? »

### [MINEUR] Genre de « boccia » et de « chistera » flottants
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-handisport` (« Qu'est-ce que **la** boccia ? ») contre `sport-3.ts` — `sp3-paralympiques` (« Qu'est-ce que **le** boccia ? ») ; et `cours/sport.ts` — `sp2-jeux-traditionnels` (« un gant d'osier, une raquette ou **un** chistera »)
- **Problème** : le même mot change de genre d'un fichier à l'autre. L'usage français est « la boccia » et « la chistera ». Dans la même phrase, « un gant d'osier » et « un chistera » désignent en outre le même objet, énuméré deux fois.
- **Correction proposée** : uniformiser en « la boccia » ; et « à main nue, à la chistera — le gant d'osier — ou à la pala ».

### [MINEUR] Diacritiques d'un nom propre incohérents entre deux fichiers
- **Où** : `prisma/seed/culture-g/sport-2.ts` — `sp2-gymnastique` (« Vera Cáslavská ») contre `sport-3.ts` — `sp3-gymnastique` (« Věra Čáslavská »)
- **Correction proposée** : retenir « Věra Čáslavská » partout.

### [MINEUR] Répétitions de mots dans une même phrase
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-gymnastique` : « l'affichage ne pouvait afficher que 1,00 » ; `cours/sport.ts` — `sp-arbitrage-regles` : « Le temps additionnel compense les arrêts de jeu, sans les compenser exactement. »
- **Correction proposée** : « l'affichage ne pouvait pas dépasser 1,00 » ; « Le temps additionnel compense les arrêts de jeu, sans jamais les rattraper exactement. »

### [MINEUR] Limite de vent : « inférieur à » au lieu de « ne dépassant pas »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-athletisme` (accroche) ; `cours/sport.ts` — `sp2-records-performance`, section « Le matériel et les conditions »
- **Texte** : « Un record du monde n'est homologué qu'avec un vent inférieur à deux mètres par seconde » ; « vent inférieur à deux mètres par seconde ».
- **Problème** : un vent de exactement 2,0 m/s est **autorisé**. La question `sp3-records-limites` emploie d'ailleurs la bonne formule (« Un vent favorable supérieur à deux mètres par seconde invalide un record »).
- **Correction proposée** : « un vent favorable ne dépassant pas deux mètres par seconde ».

### [MINEUR] « Olympiade » employé pour « édition des Jeux »
- **Où** : `prisma/seed/culture-g/sport.ts` — `sp-sports-hiver-nautiques` (« sur quatre olympiades ») ; `sport-3.ts` — `sp3-basket-3` (« Barcelone est la première olympiade ouverte aux professionnels de la NBA ») ; `cours/sport.ts` — `sp3-natation`
- **Problème** : une olympiade est la **période de quatre ans** entre deux Jeux, pas les Jeux eux-mêmes. L'emploi est particulièrement fautif dans « Barcelone est la première olympiade ».
- **Correction proposée** : « sur quatre éditions des Jeux » ; « Barcelone est la première édition ouverte aux professionnels de la NBA ».

### [MINEUR] « Des années 1998 à 2012 »
- **Où** : `prisma/seed/culture-g/sport-3.ts` — `sp3-cyclisme-3`
- **Texte** : « Quel scandale a marqué le cyclisme des années 1998 à 2012 ? »
- **Correction proposée** : « Quel scandale a marqué le cyclisme de 1998 à 2012 ? »

### [MINEUR] Le volant de badminton appelé « la balle »
- **Où** : `prisma/seed/culture-g/cours/sport.ts` — `sp-tennis-raquettes`, section « Les cousins du tennis »
- **Texte** : « Le badminton se joue avec un volant, dont la traînée aérodynamique interdit tout rebond : la balle ne touche jamais le sol en jeu »
- **Problème** : le cours vient de nommer correctement le volant, puis l'appelle « la balle » dans la phrase suivante, au moment précis où il installe la distinction avec le tennis.
- **Correction proposée** : « le volant ne touche jamais le sol tant que l'échange dure ».

### [MINEUR] Commentaires d'en-tête faux
- **Où** : `prisma/seed/culture-g/sport-2.ts` l. 2 ; `prisma/seed/culture-g/cours/sport.ts` l. 1
- **Texte** : « Sport, deuxième lot — **vingt** notions sans cours. » ; « Sport, premier lot — les cours des **treize** notions. »
- **Problème** : `sport-2.ts` contient **dix-neuf** notions, pas vingt. Et `cours/sport.ts` contient **quarante-deux** cours couvrant les trois lots (`sp-`, `sp2-`, `sp3-`), pas les treize du premier. La mention « sans cours » des trois en-têtes est démentie par l'existence même du fichier de cours.
- **Correction proposée** : corriger les décomptes et supprimer « sans cours ».

---

## Point en suspens (à vérifier avant de conclure)

- **Faits à recontrôler sur le web** : date de création du pass'Sport (2021 ou 2022) ; année d'entrée du goalball au programme paralympique (démonstration en 1976, médailles en 1980 ?) ; le record du monde du décathlon de Kévin Mayer tient-il toujours en 2026 ; état réel des Jeux olympiques de l'esport annoncés par le CIO (`sp3-esport` écrit « Le CIO **a lancé** des Jeux olympiques de l'esport », alors que la première édition a été reportée).
- ~~Douze notions sans cours~~ : **faux positif, écarté.** Les douze slugs concernés figurent tous dans `prisma/seed/culture-g/cours/fusions.ts` ; la notion absorbée disparaît du catalogue et ses questions rejoignent l'hôte. Vérification faite. Ce qui en sort en revanche, c'est le constat ci-dessous sur les cours orphelins.

## Ce que la seconde passe a ajouté

_(à compléter — passe 2 non commencée)_

## Ce qui est sain

Les cours sont, dans l'ensemble, d'un niveau nettement supérieur aux questions : ceux de `sp2-nutrition-sportive` (hyponatrémie d'effort, contamination des compléments, responsabilité objective), `sp3-athletisme-fond` (la section « Pourquoi le Kenya » refuse explicitement l'explication génétique unique), `sp2-handisport` (les Deaflympics et le refus d'intégration au mouvement paralympique), `sp2-natation-eau` (le départ du dos qui explique l'ordre du relais) et `sp2-records-performance` apprennent réellement quelque chose et prennent le risque de nuancer. Côté faits, les repères du lot 1 sont solides et bien datés : Coubertin 1894/1896, Chamonix 1924, Naismith 1891, Morgan 1895, scission de 1895, Bosman 1995, AMA 1999, Heysel 39 morts, Hillsborough et le rapport Taylor, McLaren 2016, Titre IX 1972, interdiction du football féminin anglais de 1921 à 1971. Rien de ce que j'ai vérifié dans ces séries n'est faux.

**Le cahier d'origine (`heritage/culture-g/data/sport.json`) est le meilleur morceau du domaine.** J'ai vérifié ses cinquante-sept questions une à une : dates, scores, noms, chiffres. Elles tiennent. Les explications font quatre à cinq phrases et ajoutent systématiquement quelque chose au-delà de la réponse — la finale de 1930 gagnée 4-2 par l'Uruguay, Eugène Christophe premier porteur du maillot jaune, le classement de la montagne créé en 1933 mais le maillot à pois seulement en 1975, les 8 secondes entre LeMond et Fignon en 1989, la ligne à trois points à 7,24 m en NBA contre 6,75 m en FIBA, Pérec à égalité avec Félicia Ballanger, la légende de Webb Ellis correctement présentée comme une légende. Les palmarès y sont datés (« entre 2005 et 2022 », « en 1985 », « avant 2024 »), ce qui les met à l'abri de la péremption — exactement ce qui manque au seed.
