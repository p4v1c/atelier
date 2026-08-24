# Géographie

> ÉTAT : passe 1 TERMINÉE (17 leçons, 3 lots du seed, le cours, fusions.ts, geographie.json).
> Passe 2 : `geographie.ts`, `geographie-2.ts`, `geographie-3.ts` relus ; module chargé par `contenuDe` et croisé.
> Passe 2 : `cours/geographie.ts` relu intégralement.
> Passe 2 : `geographie.json` relu (58 questions). Reste à relire : les 17 leçons.

## Ce que j'ai lu

- `prisma/seed/culture-g/geographie.ts` — 13 notions, 128 questions
- `prisma/seed/culture-g/geographie-2.ts` — 20 notions, ~197 questions
- `prisma/seed/culture-g/geographie-3.ts` — 20 notions, ~200 questions
- `prisma/seed/culture-g/cours/geographie.ts` — 45 cours, 178 sections, lu intégralement
- `prisma/seed/culture-g/cours/fusions.ts` — table des fusions, lue (indispensable pour lire le reste)
- `heritage/culture-g/data/geographie.json` — 58 questions et 3 cours (13 sections), lu intégralement
- `heritage/culture-g/data/lecons/geographie/*.json` — les 17 leçons, lues intégralement (85 sections, 85 questions de quiz)

## Constats

### [GRAVE] Le lot 2 et le lot 3 rejouent massivement les questions du lot 1

Ce n'est pas une redite ponctuelle, c'est le trait dominant du domaine. Le
validateur annoncé dans `commun.ts` (« aucune QUESTION en double dans tout le
module : le validateur compare l'énoncé normalisé ») ne compare que des énoncés
exacts : toutes les paires ci-dessous passent au travers parce qu'elles sont
reformulées. Un apprenant qui enchaîne les trois lots réapprend trois fois la
même chose.

Doublons francs relevés (même fait, même bonne réponse, souvent mêmes
distracteurs voire même explication) :

- **Fosse des Mariannes** — `geographie.ts` geo-climats-extremes « Quel est le
  point le plus profond des océans ? » et `geographie-2.ts` geo2-oceans-mers
  « Quelle est la fosse océanique la plus profonde ? » : **liste de distracteurs
  strictement identique** (Mariannes, Tonga, Japon, Porto Rico).
- **Mer la plus salée** — geo-mers-oceans « Quelle mer est la plus salée du
  monde ? » et geo2-oceans-mers « Quelle mer est la plus salée du monde parmi
  ces étendues ? » : trois distracteurs sur quatre identiques.
- **Premier producteur de pétrole** — geo-ressources « Quel pays produit le plus
  de pétrole aujourd'hui ? » et geo2-energie-ressources « Quel pays est le
  premier producteur mondial de pétrole ces dernières années ? » : mêmes quatre
  propositions.
- **Réserves de gaz naturel** — geo-ressources « Quel pays possède les plus
  grandes réserves de gaz naturel ? » et geo2-energie-ressources « Quel pays
  détient les plus grandes réserves prouvées de gaz naturel ? ».
- **Cobalt** — geo-ressources « Quel pays produit le plus de cobalt ? » et
  geo2-energie-ressources « Quel pays produit la majorité du cobalt mondial ? ».
- **Malédiction des ressources** — geo-ressources « Qu'appelle-t-on malédiction
  des ressources ? » et geo2-energie-ressources « Qu'est-ce que la malédiction
  des ressources ? ».
- **Contentieux du Nil** — geo-ressources « Quel bassin fluvial fait l'objet
  d'un contentieux entre l'Éthiopie et l'Égypte ? » et `geographie-3.ts`
  geo3-eau-conflits « Quel fleuve fait l'objet de tensions entre l'Égypte, le
  Soudan et l'Éthiopie ? » : **liste de distracteurs strictement identique**
  (Nil, Niger, Zambèze, Congo).
- **Agglomération la plus peuplée (Tokyo, ~37 M)** — geo-villes-monde et
  geo2-urbanisation, à un distracteur près.
- **Transition démographique** — geo-population « Qu'appelle-t-on transition
  démographique ? » et geo2-population-mondiale « Qu'est-ce que la transition
  démographique ? ».
- **Croissance de l'Afrique** — geo-population et geo2-population-mondiale,
  explications quasi mot pour mot (« Sa population pourrait doubler d'ici le
  milieu du siècle »).
- **Seuil de 2007 (moitié de l'humanité urbaine)** — apparaît **quatre fois** :
  `tip` de geo-villes-monde, explication de geo-population, `tip` de
  geo2-urbanisation, et question 1 de geo2-urbanisation.
- **Zone démilitarisée coréenne** — geo-frontieres « Quelle frontière est la
  plus militarisée du monde ? » et geo2-frontieres-conflits « Quelle zone
  démilitarisée sépare deux États depuis 1953 ? » : trois distracteurs
  identiques, même mention des quatre kilomètres.
- **Danube / quatre capitales** — geo-fleuves-monde et geo2-europe-geographie :
  la liste « Vienne, Bratislava, Budapest et Belgrade » est reprise telle quelle.
- **Yangzi à Shanghai** — geo-fleuves-monde « Quel fleuve traverse la Chine du
  sud et se jette près de Shanghai ? » et geo2-fleuves-monde « Quel fleuve
  traverse Shanghai avant de se jeter dans la mer de Chine ? ».
- **Volga, plus long fleuve d'Europe** — donnée dans l'explication de
  geo-fleuves-monde, puis posée comme question dans geo2-fleuves-monde.
- **Détroit de Gibraltar** — trois fois : geo-detroits Q1 (Europe/Afrique),
  geo-detroits Q9 (Espagne/Maroc à Ceuta), geo2-transports-mondialisation
  (Méditerranée/Atlantique). L'explication « Quatorze kilomètres au plus
  étroit » est reprise mot pour mot.
- **Détroit d'Ormuz / un cinquième du pétrole** — geo-detroits et
  geo2-transports-mondialisation, formule quasi identique.
- **Détroit de Malacca** — geo-detroits et geo2-transports-mondialisation.
- **Atacama** — trois fois : geo-climats-extremes (« endroit habité le plus sec
  du monde »), geo2-ameriques-geographie (« désert le plus aride »),
  geo3-deserts (« Quels facteurs expliquent l'aridité extrême »). L'explication
  « Certaines stations n'y ont jamais enregistré de pluie » est réemployée.
- **Antarctique, plus vaste désert** — geo-climats-extremes et geo3-deserts,
  avec la même formule « un désert se définit par les précipitations, pas par la
  température ».
- **Antarctique, ~90 % des glaces** — geo2-oceanie-poles et
  geo3-glaciers-cryosphere.
- **Atoll / explication de Darwin** — geo-iles et geo2-oceanie-poles.
- **Mer d'Aral** — trois fois : geo-mers-oceans, geo2-oceans-mers (le coton),
  geo2-asie-geographie (le désastre écologique d'Asie centrale).
- **Grande muraille verte** — geo2-afrique-geographie « Qu'est-ce que la grande
  muraille verte africaine ? » et geo3-deserts « Qu'est-ce que la grande
  muraille verte au Sahel ? » : même réponse, explications quasi superposables
  (« rideau d'arbres » → « mosaïque de pratiques agricoles »).
- **Grande Barrière de corail** — geo-tourisme-patrimoine et
  geo2-oceanie-poles, même « plus de deux mille kilomètres » + blanchissement.
- **Permafrost / méthane + déstabilisation des infrastructures** — trois fois :
  explication de geo2-climats-monde, question de geo3-glaciers-cryosphere,
  question de geo3-arctique-enjeux. Les deux dernières ont **le même texte de
  bonne réponse** à un mot près.
- **Magnitude vs intensité** — geo2-risques-naturels « Que mesure l'échelle de
  Richter ? » (dont l'explication donne Mercalli) et geo3-seismes, qui en fait
  **deux** questions séparées.
- **Boucle du Niger** — geo-fleuves-monde et geo2-afrique-geographie.
- **Corse, collectivité unique depuis 2018** — geo-france-regions et
  geo3-regions-france.
- **Le Nord, département le plus peuplé, ~2,6 M** — geo-france-regions et
  geo3-departements-france (qui met en plus la réponse dans l'énoncé : « le
  département du Nord, le plus peuplé de France »).
- **Banane bleue** — l'explication de geo2-europe-geographie donne déjà la
  réponse de la question de geo3-espace-europeen « Pourquoi les géographes
  critiquent-ils l'expression de banane bleue ? ».
- **Estuaire** — défini dans l'explication de geo2-fleuves-monde, puis posé en
  question dans geo3-littoraux.
- **Indonésie, dix-sept mille îles** — donnée dans l'explication de geo-iles,
  posée en question dans geo2-asie-geographie.

**Correction proposée** : ne pas corriger question par question. Le lot 2 et le
lot 3 doivent être passés au crible contre le lot 1 sujet par sujet, et les
notions redondantes supprimées ou refondues (voir constat suivant). Étendre le
validateur à une comparaison de la **bonne réponse + du sujet**, pas seulement
de l'énoncé.

### [GRAVE] Les six fusions vers une leçon héritée produisent toutes des doublons dans le chapitre

C'est le constat central de l'audit. `FUSIONS` verse six notions de géographie
dans une leçon héritée. **Les six, sans exception, mettent une question du seed
dans le même chapitre qu'une question héritée qui pose déjà la même chose.** Le
validateur ne les voit pas : il compare des énoncés normalisés, et il suffit
qu'un chiffre soit écrit en lettres d'un côté et en chiffres de l'autre.

| Fusion | Question héritée (quiz de la leçon) | Question du seed, désormais dans le même chapitre |
|---|---|---|
| `geo2-risques-naturels` → leçon 07 | « Quelle température minimale de la surface de la mer est nécessaire à la formation d'un cyclone tropical ? » → *Environ 26 degrés* | « Quelle température de surface de la mer est nécessaire à la formation d'un cyclone ? » → *Environ vingt-six degrés* |
| | « Que désigne exactement la vulnérabilité en géographie des risques ? » | « Qu'est-ce qu'un risque naturel ? » — même triplet aléa / vulnérabilité / risque, **même illustration** du séisme en zone déserte |
| `geo2-population-mondiale` → leçon 02 | « Comment appelle-t-on le processus de passage d'une natalité et d'une mortalité fortes à une natalité et une mortalité faibles ? » | « Qu'est-ce que la transition démographique ? » |
| | « Quelle forme prend la pyramide des âges d'un pays vieillissant comme le Japon ? » | « Que révèle un creux marqué dans une pyramide des âges ? » |
| `geo2-urbanisation` → leçon 15 | « En quelle année la population mondiale est-elle devenue majoritairement urbaine ? » → *2007* | « Depuis quand la majorité de l'humanité vit-elle en ville ? » → *Depuis 2007 environ* |
| | « Quelle était l'agglomération la plus peuplée du monde selon les données de 2018 ? » → *Tokyo, 37,5 M* | « Quelle est l'agglomération la plus peuplée du monde ? » → *Tokyo, environ trente-sept millions* |
| | « Qu'est-ce qui distingue une mégalopole d'une mégapole ? » | **deux** questions : « Qu'est-ce qu'une mégapole ? » et « Qu'est-ce qu'une mégalopole ? » |
| `geo2-agriculture-monde` → leçon 14 | « Quelle est la céréale la plus produite dans le monde ? » → *Le maïs* | « Quelle céréale est la plus produite dans le monde ? » → *Le maïs* |
| | « Que signifie la sécurité alimentaire selon la définition de 1996 ? » | « Qu'est-ce que la sécurité alimentaire selon la FAO ? » |
| `geo3-forets` → leçon 12 | « Quelle part des terres émergées les forêts couvrent-elles aujourd'hui ? » → *Environ 31 %* | « Quelle part des terres émergées les forêts couvrent-elles ? » → *Environ un tiers* |
| | « Quelle est la principale cause de la déforestation dans le monde ? » → *L'agriculture* | « Quelle est la principale cause de la déforestation tropicale ? » → *L'expansion agricole et l'élevage* |
| `geo-fleuves-monde` **et** `geo2-fleuves-monde` → leçon 09 | (les deux notions du seed sont versées dans la **même** leçon) | la paire Yangzi/Shanghai et la paire Volga s'y retrouvent réunies, plus les contradictions ci-dessous |

Le cas de `geo2-urbanisation` est le plus dense : quatre des dix questions
versées ont leur jumelle parmi les cinq questions du quiz hérité. Le cas de
`geo3-forets` n'est pas loin — outre les deux jumelles ci-dessus, la leçon
détaille les parts respectives des forêts primaires (36 %), secondaires (57 %)
et plantées (7 %), alors que le seed en fait **trois questions de définition**
séparées, et elle nomme la Russie premier pays boisé, ce dont le seed fait une
question de plus.

**Correction proposée** : ajouter au moment de la fusion un dédoublonnage
question à question, et arbitrer en faveur de la version héritée. Celle-ci est
systématiquement supérieure sur deux points décisifs : elle **date ses
chiffres** (« selon les données de 2018 », « en 2008 », « en 2014 ») là où le
seed écrit « aujourd'hui », et elle explique en cinq phrases là où le seed en
donne une.

### [GRAVE] Les quatre piliers de la sécurité alimentaire : le seed a raison, la leçon a tort

- **Où** : leçon héritée 14 (« L'agriculture et l'alimentation dans le monde »)
  contre `geo2-agriculture-monde`, qui y est versée par `FUSIONS`
- **Textes** : leçon — « La disponibilité […] ; l'**accès** […] ; la **qualité**
  renvoie aux aspects nutritionnels, sanitaires et socioculturels ; la
  **stabilité** » ; seed — « Disponibilité, accès, **utilisation** et stabilité
  en sont les quatre dimensions. »
- **Problème** : les quatre piliers retenus par la FAO sont *disponibilité,
  accès, **utilisation**, stabilité*. « Utilisation » désigne la manière dont
  l'organisme tire parti de la nourriture — état sanitaire, eau potable,
  pratiques de préparation — et n'est pas synonyme de « qualité ». La leçon se
  trompe, le seed a raison, et la fusion les met côte à côte dans le même
  chapitre : l'apprenant lira les deux listes et n'aura aucun moyen de trancher.
- **Correction proposée** : corriger la leçon 14 en « l'utilisation, qui renvoie
  à la valeur nutritionnelle réelle tirée des aliments, laquelle dépend de la
  santé, de l'eau potable et des pratiques de préparation ».

### [GRAVE] La leçon 12 se contredit sur l'ampleur de la déforestation historique

- **Où** : leçon héritée 12 (« Les forêts du monde et la déforestation »),
  section « Le rythme et les causes » **et** explication de sa première question
  de quiz
- **Texte** : « **la moitié** des forêts de la planète a disparu au cours du
  vingtième siècle, et selon l'IPBES en 2019, les forêts actuelles ne
  représentent plus que **68 pour cent** de leur surface estimée à l'ère
  préindustrielle. » Le quiz reprend les deux dans le même souffle : « ces
  forêts ne représentent plus qu'environ 68 pour cent de leur étendue
  préindustrielle. La moitié des forêts de la planète a **en effet** disparu au
  cours du seul vingtième siècle. »
- **Problème** : les deux chiffres s'excluent. S'il reste 68 % du couvert
  préindustriel, la perte est d'un tiers, pas de la moitié — et le « en effet »
  présente comme confirmation ce qui est une contradiction. Le chiffre de 68 %
  est celui de l'IPBES et se vérifie ; celui de « la moitié » provient de la
  statistique, exacte mais bien plus large, de la perte forestière depuis le
  début de l'agriculture, sur dix mille ans, et non sur le seul XXe siècle. Le
  seed, lui, l'énonce correctement dans `geo3-forets` : « Contre environ la
  moitié avant l'expansion agricole humaine. »
- **Correction proposée** : « les forêts actuelles ne représentent plus que
  68 pour cent de leur surface préindustrielle selon l'IPBES, et environ la
  moitié de leur étendue d'avant l'expansion agricole, il y a dix mille ans. »

### [MOYEN] Déforestation : un rythme net donné à la valeur du rythme brut

- **Où** : leçon héritée 12, section « Le rythme et les causes »
- **Texte** : « Le rythme annuel de la **déforestation nette** a néanmoins
  varié : environ 8,3 millions d'hectares par an entre 1990 et 2000,
  5,2 millions entre 2000 et 2010, puis à nouveau **une dizaine de millions
  d'hectares par an entre 2015 et 2020**. »
- **Problème** : la série de la FAO donne pour la perte **nette** 7,8 puis 5,2
  puis 4,7 millions d'hectares par an sur ces trois périodes — c'est-à-dire une
  baisse continue. Les dix millions d'hectares annuels sont la déforestation
  **brute**, avant reboisement. Le texte annonce donc une reprise de la
  déforestation qui n'existe pas dans la grandeur qu'il prétend mesurer, et
  ruine au passage la leçon de méthode qu'il porte.
- **Correction proposée** : « environ 7,8 millions d'hectares par an entre 1990
  et 2000, 5,2 entre 2000 et 2010, 4,7 entre 2010 et 2020 pour la perte nette —
  la déforestation brute, elle, reste proche de dix millions d'hectares par an,
  compensée par les reboisements. »

### [MOYEN] Deux superficies pour le bassin de l'Amazone, dans deux leçons voisines

- **Où** : leçon héritée 09 (« Les grands fleuves du monde ») contre leçon
  héritée 12 (« Les forêts du monde »)
- **Textes** : leçon 09 — « Son bassin versant couvre environ **6,1 millions**
  de kilomètres carrés » (et son quiz en fait une question à réponse unique) ;
  leçon 12 — « elle couvre environ 5,5 millions de kilomètres carrés au sein
  d'un bassin de **7,3 millions** de kilomètres carrés ».
- **Problème** : les deux valeurs circulent selon qu'on retient le bassin
  hydrographique strict ou le « biome amazonien » élargi, mais aucune des deux
  leçons ne le dit, et la leçon 09 fait de 6,1 la bonne réponse d'un QCM dont
  7,3 n'est même pas proposé. Un apprenant qui suit les deux chapitres retient
  deux chiffres et croit s'être trompé.
- **Correction proposée** : préciser dans les deux leçons ce qui est mesuré —
  « bassin hydrographique : environ 6,1 millions de km² ; biome amazonien au
  sens large : environ 7,3 millions ».

### [MOYEN] L'agriculture urbaine : 15 % de la production mondiale, ou un apport limité ?

- **Où** : leçon héritée 14 contre `geo3-alimentation-monde`
- **Textes** : leçon — « environ **15 pour cent de la production alimentaire
  mondiale** proviendrait aujourd'hui de zones urbaines » ; seed — « Son apport
  nutritionnel réel **reste limité** mais ses fonctions sociales sont
  importantes. »
- **Problème** : contradiction franche sur le même objet. Le chiffre de 15 à
  20 % circule largement mais il est mal étayé et repose sur des définitions
  très extensives de la « zone urbaine » — les travaux récents le revoient
  fortement à la baisse pour les cultures vivrières. La formulation du seed est
  la plus prudente ; celle de la leçon est présentée comme un fait établi, avec
  un « aujourd'hui » sans date dans une leçon qui date par ailleurs tout.
- **Correction proposée** : dans la leçon 14, « une estimation souvent citée
  attribue à l'agriculture urbaine et périurbaine jusqu'à 15 pour cent de la
  production alimentaire mondiale, chiffre débattu car il dépend fortement de la
  définition retenue de la zone urbaine ».

### [MOYEN] La part agricole de la population active mondiale, seul chiffre non daté de la leçon 14

- **Où** : leçon héritée 14, section « L'agriculture, première activité humaine »
- **Texte** : « Elle mobilise aussi une main-d'œuvre immense, de l'ordre de
  1,34 milliard de personnes, ce qui **représentait environ 43 pour cent de la
  population active mondiale** ».
- **Problème** : la leçon date scrupuleusement tous ses autres chiffres (« en
  2013 », « en 2014 »), mais pas celui-ci. Or 43 % correspond au début des
  années 2000 ; la part agricole de l'emploi mondial est aujourd'hui de l'ordre
  de 26 %. C'est le chiffre le plus périssable de la leçon et le seul sans
  millésime.
- **Correction proposée** : donner l'année, et actualiser : « environ 26 pour
  cent de la population active mondiale au début des années 2020, contre plus de
  40 pour cent au début du siècle ».

### [MOYEN] Le Tokaido : de Tokyo à Osaka ou jusqu'à Fukuoka ?

- **Où** : leçon héritée 15 et `geo2-asie-geographie` (question) disent
  Fukuoka ; le cours de `geo2-asie-geographie` dit Osaka
- **Textes** : leçon 15 — « La mégalopole japonaise du Tokaido dépasse 1 000
  kilomètres de Tokyo à Fukuoka et concentre 110 millions de personnes » ;
  question du seed — « De Tokyo à Fukuoka » ; cours du seed — « de Tokyo à
  Osaka ».
- **Problème** : au sens strict, le Tokaido est l'axe Tokyo–Osaka ; l'ensemble
  qui court jusqu'à Fukuoka est la ceinture du Taiheiyō. Les deux usages
  existent, mais le dépôt les emploie sans le dire, et le cours contredit la
  question qu'il est censé préparer.
- **Correction proposée** : retenir une formulation unique — « la mégalopole du
  Tokaido, de Tokyo à Osaka, prolongée jusqu'à Fukuoka par la ceinture du
  Taiheiyō » — et l'employer aux trois endroits.

### [GRAVE] Après fusion, `cg-geographie-09` affirme et nie que le Nil est le plus long fleuve

- **Où** : `FUSIONS` verse **deux** notions dans la même leçon héritée —
  `geo-fleuves-monde` → `cg-geographie-09` et `geo2-fleuves-monde` →
  `cg-geographie-09` (leçon 09, « Les grands fleuves du monde »)
- **Textes en présence dans ce seul chapitre** :
  - `tip` de `geo2-fleuves-monde` : « **Le Nil est le plus long**, mais
    l'Amazone charrie à elle seule un cinquième de l'eau douce mondiale. »
  - `tip` de `geo-fleuves-monde` : « L'Amazone gagne au débit et au bassin, **le
    Nil ou l'Amazone à la longueur selon la source retenue**. »
  - leçon 09 : « Sa longueur, mesurée le long de la branche Ucayali-Apurímac,
    atteint environ 7 025 kilomètres, ce qui le place **au coude à coude avec le
    Nil** […] le classement dépend des conventions retenues et **reste
    discuté**. »
- **Problème** : l'un des deux `tip` tranche une question que le cours du même
  chapitre et l'autre `tip` déclarent ouverte. C'est le seul endroit du dépôt où
  l'affirmation est faite sans réserve — le cahier hérité (`geographie.json`
  Q29) la nuance également.
- **Correction proposée** : aligner le `tip` de `geo2-fleuves-monde` sur les
  deux autres : « Nil ou Amazone, la longueur se dispute selon la source
  retenue ; au débit et au bassin, l'Amazone l'emporte sans conteste. »

### [GRAVE] Le barrage des Trois-Gorges : 2003 dans le cours, 2006 dans la question du même chapitre

- **Où** : leçon 09 (« Les grands fleuves du monde ») et `geo-fleuves-monde`,
  qui y est versée par `FUSIONS`
- **Textes** : leçon — « la Chine a inauguré **en 2003** le barrage des
  Trois-Gorges, le plus grand jamais construit » ; question du seed — « Le
  barrage des Trois-Gorges le barre **depuis 2006**. »
- **Problème** : deux dates pour le même fait, dans le même chapitre après
  fusion. Les deux renvoient à des jalons réels — mise en eau et premiers
  groupes en 2003, achèvement du mur en 2006, pleine puissance en 2012 — mais
  présentées sans qualification elles se contredisent, et l'apprenant ne peut
  pas savoir laquelle retenir.
- **Correction proposée** : une seule formulation aux deux endroits : « mis en
  eau en 2003, achevé en 2006 et pleinement opérationnel en 2012 ».
- **À noter au passage** : la leçon donne au Yangzi « environ 6 380
  kilomètres », la question du seed « six mille trois cents » — même chapitre,
  deux valeurs.

### [MOYEN] « Douze ans » entre sept et huit milliards, quand la leçon héritée dit onze

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-population`, contre la
  leçon héritée 02
- **Textes** : seed — « Le passage de sept à huit milliards a pris **douze
  ans**. » ; leçon 02 (quiz) — « Ce jalon arrive seulement **onze ans** après
  celui des 7 milliards, atteint en 2011 » ; leçon 02 (texte) — « un peu plus de
  dix ans pour passer du septième au huitième ».
- **Problème** : les deux dates que le dépôt enseigne partout — 31 octobre 2011
  et 15 novembre 2022 — donnent onze ans. Le chiffre de douze ans provient de la
  communication de l'ONU de 2022, fondée sur une estimation révisée plaçant le
  septième milliard en 2010 ; mais il n'est jamais expliqué ici, et il
  contredit l'arithmétique que l'apprenant peut faire lui-même.
- **Correction proposée** : « Onze ans après le septième milliard, franchi le
  31 octobre 2011. »

### [GRAVE] Le cahier hérité se double lui-même, d'un fichier à l'autre

Troisième couche de doublons, indépendante des deux précédentes et qu'aucun
outil du dépôt ne regarde : `geographie.json` et les dix-sept leçons ont été
écrits sans être confrontés entre eux.

- **La plus longue chaîne continentale** : `geographie.json` Q40 et le quiz de
  la leçon 06 posent la **même question**, avec la même bonne réponse, trois
  distracteurs communs — et la même phrase de conclusion, mot pour mot :
  « L'Himalaya est plus haut mais bien plus court, avec environ 2 400
  kilomètres. » S'y ajoute `geo2-montagnes-monde` dans le seed : trois fois.
- **Le débit de l'Amazone** : `geographie.json` Q41 (« Quel fleuve possède le
  plus grand débit du monde ? ») et le quiz de la leçon 06 (« Quel fleuve
  possède le débit le plus important du monde ? ») — même réponse, deux
  distracteurs communs. Le quiz de la leçon 09 en fait une troisième question,
  sur la valeur du débit.
- **Le pays le plus peuplé d'Afrique** : `geographie.json` Q58 et le quiz de la
  leçon 05 proposent **exactement les quatre mêmes pays**, dans un ordre
  différent, pour la même bonne réponse. Plus `geo2-afrique-geographie` : trois
  fois.
- **Le fleuve traversant le plus de pays** : `geographie.json` Q51 et le quiz de
  la leçon 03, plus `geo-fleuves-monde` et `geo2-europe-geographie` dans le
  seed : quatre fois, toujours avec la liste « Vienne, Bratislava, Budapest et
  Belgrade ».
- **Le cobalt congolais à 70 %** : texte **et** quiz de la leçon 05, plus
  `geo-ressources` et `geo2-energie-ressources` : quatre fois.
- **La Grande Muraille verte** : leçon 05 (texte et quiz),
  `geo2-afrique-geographie` (question et cours), `geo3-deserts` (question et
  cours) : six occurrences.
- **Le toit du monde** : quiz de la leçon 04 et `geo2-asie-geographie`, avec les
  mêmes distracteurs (Deccan, Mongolie).
- **Le détroit de Malacca** : quiz de la leçon 04, `geo-detroits`,
  `geo2-transports-mondialisation`.

**Correction proposée** : le dédoublonnage doit se faire sur les trois corpus à
la fois — lots du seed, `geographie.json`, leçons — et non lot par lot.

### [MOYEN] Trois superficies pour le Sahara, deux pour le mont Blanc, deux pour le Japon

Le cahier hérité, si soigneux par ailleurs, entre en désaccord avec lui-même sur
plusieurs valeurs qu'il donne comme des faits.

- **Sahara** : leçon 05 — « plus de **8 millions** de kilomètres carrés » ;
  `geographie.json` Q31 et le cours « Le monde » — « environ **9 millions** de
  km², soit une superficie proche de celle de la Chine ou des États-Unis » ; le
  seed (`geo2-afrique-geographie`) — « Plus de **neuf** millions ». La valeur
  admise est d'environ 9,2 millions ; la leçon 05 est la seule fautive, et son
  chiffre ruine la comparaison avec les États-Unis faite ailleurs.
- **Mont Blanc** : leçon 03 — « **4 808** mètres » ; `geographie.json` Q2 et le
  cours « La France physique » — « environ **4 806** mètres ». Les deux
  renvoient à des campagnes de mesure réelles, mais rien ne le dit, et le cours
  du seed se contente de « plus de quatre mille huit cents mètres ».
- **Japon** : leçon 04 — « archipel de **plus de 6 800 îles** » ;
  `geographie.json` Q49 — « un archipel d'**environ 14 000 îles** ». Le facteur
  deux s'explique : le recomptage officiel de 2023 a porté le chiffre de 6 852 à
  14 125 îles. La leçon 04 conserve l'ancien décompte.
- **Bassin de l'Amazone** : leçon 09 — 6,1 millions de km² ; leçon 06 — « près
  de 6 millions » ; leçon 12 — 7,3 millions (voir constat dédié).

**Correction proposée** : aligner sur 9,2 millions de km² pour le Sahara,
14 125 îles pour le Japon (en signalant le recomptage de 2023), et donner pour
le mont Blanc l'altitude avec sa date de mesure.

### [MOYEN] La Grande Muraille verte : la leçon enseigne la version que le seed dit périmée

- **Où** : leçon héritée 05 (texte et quiz) contre `geo2-afrique-geographie` et
  `geo3-deserts`
- **Textes** : leçon 05 — « des projets de reboisement comme la Grande Muraille
  verte, lancée en 2007 pour restaurer une bande de terres sur environ 8 000
  kilomètres » et, dans le quiz, « vise à y **planter une large bande
  d'arbres** » ; seed — « il ne s'agit **plus**, comme dans la version
  initiale, de planter une bande d'arbres continue de l'Atlantique à la mer
  Rouge, mais d'une mosaïque d'actions de reforestation, d'agroforesterie et de
  gestion des sols ».
- **Problème** : le seed a raison — le programme a explicitement abandonné le
  rideau d'arbres continu — et la leçon enseigne l'image que le seed prend soin
  de corriger. Le fait que le seed le dise **deux fois** ne sert à rien si
  l'apprenant a lu la leçon 05 avant.
- **Correction proposée** : reprendre dans la leçon 05 la formulation du seed.

### [GRAVE] La moitié du cahier hérité est rejouée par les questions du seed

- **Où** : `heritage/culture-g/data/geographie.json` (58 questions) contre les
  trois lots du seed
- **Problème** : `cours/fusions.ts` reconnaît lui-même le défaut de méthode —
  « Le corpus de questions écrit ici a été composé sans être confronté aux 322
  leçons du cahier d'origine. » Mais la table des fusions ne traite que le
  recouvrement **de notion à leçon**. Elle ne voit pas le recouvrement **de
  question à question** avec le fichier `geographie.json`, qui n'est pas une
  leçon et n'entre donc dans aucune fusion. Résultat : une bonne trentaine des
  58 questions héritées ont une jumelle dans le seed, et les deux survivent.

  Recensement (question héritée → question du seed qui la refait) :

  | Cahier hérité | Notion du seed |
  |---|---|
  | Q1 le plus long fleuve de France | `geo-france-regions`, `geo2-relief-france` |
  | Q3 treize régions depuis 2016 | `geo-france-regions` |
  | Q8 chaîne séparant France et Espagne | `geo-france-regions` |
  | Q11 département le plus peuplé | `geo-france-regions`, `geo3-departements-france` |
  | Q15 chaîne des Puys | `geo2-relief-france` |
  | Q16 détroit France–Angleterre | `geo-detroits` |
  | Q19 cent un départements | `geo3-departements-france` |
  | Q26 capitale de l'Australie | `geo-capitales-monde` |
  | Q27 capitale du Canada | `geo-capitales-monde` |
  | Q28 plus grand océan | `geo2-oceans-mers` |
  | Q29 plus long fleuve du monde | `geo2-fleuves-monde` (`tip`) |
  | Q30 plus haut sommet | `geo2-montagnes-monde` |
  | Q31 plus grand désert chaud | `geo2-afrique-geographie` (quasi mot pour mot) |
  | Q33 pays le plus peuplé depuis 2023 | `geo-population` |
  | Q35 capitale du Brésil | `geo-capitales-monde` |
  | Q36 plus grande étendue d'eau intérieure | `geo2-asie-geographie` |
  | Q37 lac le plus profond | `geo-climats-extremes` |
  | Q38 point le plus profond des océans | `geo-climats-extremes` **et** `geo2-oceans-mers` |
  | Q39 capitale de la Turquie | `geo-capitales-monde` |
  | Q40 plus longue chaîne continentale | `geo2-montagnes-monde` (quasi mot pour mot) |
  | Q41 débit de l'Amazone | `geo2-fleuves-monde` |
  | Q44 capitale exécutive sud-africaine | `geo-capitales-monde` |
  | Q46 détroit à Istanbul | `geo-detroits`, `geo-villes-monde` |
  | Q47 plus grande île du monde | `geo-iles` |
  | Q48 point émergé le plus bas | `geo-climats-extremes` (trois distracteurs identiques) |
  | Q49 capitale du Japon / Tokyo 37 M | `geo-villes-monde`, `geo2-urbanisation` |
  | Q50 désert le plus aride | `geo-climats-extremes`, `geo2-ameriques-geographie`, `geo3-deserts` |
  | Q51 fleuve traversant le plus de pays | `geo-fleuves-monde`, `geo2-europe-geographie` |
  | Q52 plus haut sommet d'Afrique | `geo2-montagnes-monde` |
  | Q54 climat méditerranéen | `geo2-climats-monde` (quasi mot pour mot) |
  | Q55 huit milliards d'humains | `geo-population` |
  | Q58 pays le plus peuplé d'Afrique | `geo2-afrique-geographie` |

  Le cas de l'Atacama est le plus net : **quatre** questions dans le dépôt
  (Q50 hérité, `geo-climats-extremes`, `geo2-ameriques-geographie`,
  `geo3-deserts`), toutes avec le même couple d'explications « courant froid de
  Humboldt + barrière andine » et la même phrase sur les stations qui n'ont
  jamais vu la pluie.
- **Correction proposée** : étendre le contrôle de doublons au fichier
  `geographie.json`, qui n'est aujourd'hui confronté à rien, et arbitrer en
  faveur de la version héritée — ses explications sont systématiquement plus
  riches et mieux qualifiées (voir « Ce qui est sain »).

### [GRAVE] Le cahier hérité dit lui-même que le pas de Calais est le détroit de Douvres

- **Où** : `heritage/culture-g/data/geographie.json` — Q16
- **Texte** : « Le pas de Calais, appelé « Strait of Dover » par les
  Britanniques, sépare la France de l'Angleterre. »
- **Problème** : c'est la démonstration, dans le dépôt lui-même, que le
  distracteur « Le détroit de Douvres seul » de `geo-detroits` est en fait la
  bonne réponse (voir le constat sur les deux bonnes réponses plus bas). Un
  apprenant qui lit le cahier puis répond au QCM du seed sera noté faux pour
  avoir retenu ce que le cahier lui a appris.
- **Correction proposée** : celle déjà indiquée pour `geo-detroits` — changer le
  distracteur.

### [GRAVE] Le tunnel sous la Manche : cinquante kilomètres sous la mer au lieu de trente-huit

- **Où** : `heritage/culture-g/data/geographie.json` — Q16
- **Texte** : « Le tunnel sous la Manche, ouvert en 1994, le franchit sous la
  mer sur environ 50 km. »
- **Problème** : le tunnel mesure 50,45 km **au total**, dont **37,9 km**
  seulement sous la mer — ce qui en fait justement la plus longue section
  sous-marine du monde, détail qui perd tout sens si l'on donne 50 km. La
  question `geo-detroits` du seed l'écrit correctement : « sur cinquante
  kilomètres dont trente-huit sous la mer ». C'est ici le cahier hérité qui se
  trompe et le seed qui a raison.
- **Correction proposée** : « Le tunnel sous la Manche, ouvert en 1994, le
  franchit sur environ 50 km, dont 38 km sous la mer — la plus longue section
  sous-marine du monde. »

### [MOYEN] La frontière franco-espagnole : le chiffre juste est dans le dépôt, à deux fichiers de là

- **Où** : `heritage/culture-g/data/geographie.json` — Q12
- **Texte** : « Elle dépasse celles avec l'Espagne (environ 620 km) et la
  Belgique (environ 620 km également). »
- **Problème** : le cahier hérité donne la bonne valeur de la frontière
  franco-espagnole. Le seed, lui, en donne 430 dans une question et deux cours.
  L'erreur n'est donc pas un manque d'information mais un défaut de
  confrontation entre les deux corpus.

### [GRAVE] Les fusions concentrent les doublons au lieu de les résoudre

`cours/fusions.ts` verse certaines notions dans une autre : l'absorbée quitte le
catalogue et ses questions rejoignent l'hôte. Pour la géographie :

    geo-cartographie-outils  →  geo2-cartographie
    geo-mers-oceans          →  geo2-oceans-mers
    geo3-regions-france      →  geo-france-regions
    geo-fleuves-monde        →  cg-geographie-09  (leçon héritée)
    geo2-fleuves-monde       →  cg-geographie-09  (la même)
    geo2-population-mondiale →  cg-geographie-02
    geo2-urbanisation        →  cg-geographie-15
    geo2-agriculture-monde   →  cg-geographie-14
    geo2-risques-naturels    →  cg-geographie-07
    geo3-forets              →  cg-geographie-12

Le problème : les paires fusionnées sont précisément celles qui se doublonnaient.
La fusion ne supprime aucune question — elle les met **dans le même chapitre**.

- **`geo-cartographie-outils` + `geo2-cartographie`** donnent un chapitre de
  vingt questions où **neuf paires sont jumelles** : « Que conserve une
  projection équivalente comme celle de Peters ? » / « Que conserve une
  projection équivalente ? » ; « Où passe le méridien d'origine ? » / « Où passe
  le méridien de référence international ? » (même réponse, même conférence de
  1884, même « France jusqu'en 1911 ») ; « Qu'est-ce qu'un SIG ? » / « Qu'est-ce
  qu'un système d'information géographique ? » ; « Que relient les courbes de
  niveau sur une carte topographique ? » / « Qu'est-ce qu'une courbe de
  niveau ? » ; le Groenland sur Mercator, deux fois. L'apprenant tire deux fois
  la même carte dans la même séance.
- **`geo-mers-oceans` + `geo2-oceans-mers`** mettent côte à côte « Quelle mer
  est la plus salée du monde ? » et « Quelle mer est la plus salée du monde
  parmi ces étendues ? », ainsi que les deux questions sur la mer d'Aral.
- **`geo3-regions-france` + `geo-france-regions`** réunissent « Quelle
  collectivité française a un statut particulier depuis 2018 ? » et « Quel
  statut particulier la Corse possède-t-elle ? ».
- **`geo-fleuves-monde` et `geo2-fleuves-monde` sont versées dans le même hôte**
  `cg-geographie-09` : la paire Yangzi/Shanghai et la paire Volga s'y retrouvent
  donc réunies, en plus des questions propres à la leçon héritée.

**Correction proposée** : la fusion doit s'accompagner d'un dédoublonnage des
questions versées. Concrètement, ne garder de `geo2-cartographie` que les deux
questions sans jumelle (« Pourquoi aucune carte plane ne peut-elle être
exacte ? », « Qu'exprime l'échelle d'une carte ? ») et, symétriquement, ne
verser de `geo-mers-oceans` que ce que `geo2-oceans-mers` n'a pas.
`geo3-cartes-donnees`, qui traite la sémiologie (choroplèthe, discrétisation,
anamorphose, figuré proportionnel), reste une notion distincte et légitime.

### [GRAVE] Deux cours écrits pour des notions qui n'existent plus au catalogue

- **Où** : `prisma/seed/culture-g/cours/geographie.ts` — clés `geo-mers-oceans`
  (lignes 101 sq.) et `geo-cartographie-outils` (lignes 125 sq.)
- **Problème** : ces deux slugs figurent dans `FUSIONS_INTERNES` **comme
  absorbés**. Ils disparaissent donc du catalogue, et les trois sections de
  cours écrites pour chacun ne seront jamais affichées. Le compte tombe juste :
  53 notions écrites − 10 absorbées = 43 survivantes, pour 45 clés de cours ;
  les deux clés en trop sont exactement celles-là. Ce sont six sections de texte
  substantiel — courants, marées, mers en danger, « Toute carte ment », « Se
  repérer », « Les outils modernes, et l'histoire » — écrites pour rien.
- **Conséquence aggravante** : ce sont les cours *orphelins* qui couvrent
  certaines questions versées à l'hôte. Après fusion :
  - la question « Pourquoi les cartes anciennes placent-elles souvent l'est en
    haut ? » arrive dans `geo2-cartographie`, dont le cours ne dit pas un mot
    des cartes médiévales ni de l'étymologie d'« orienter » — alors que le cours
    orphelin de `geo-cartographie-outils` l'explique en propre ;
  - les questions sur le Gulf Stream, sur les zones mortes océaniques et sur
    l'océan Arctique (« le plus petit et le moins profond ») arrivent dans
    `geo2-oceans-mers`, dont le cours ne traite aucun des trois — alors que le
    cours orphelin de `geo-mers-oceans` leur consacre des paragraphes entiers.
- **Correction proposée** : avant de supprimer les cours orphelins, y prélever
  les paragraphes qui sont les seuls à couvrir des questions versées, et les
  fondre dans le cours hôte.

### [GRAVE] `geo3-regions-france` versée dans un cours qui ne l'explique pas

- **Où** : `FUSIONS_INTERNES` — `geo3-regions-france` → `geo-france-regions`
- **Problème** : le cours de `geo-france-regions` (trois sections : « Un
  découpage récent », « Le relief et l'eau », « Économies et statuts ») a été
  écrit pour les huit questions de `geo-france-regions`, et il les couvre bien.
  Il accueille désormais neuf questions de plus, dont **sept n'ont aucun appui
  dans le texte** : l'Île-de-France région la plus peuplée (~12 millions), les
  régions restées inchangées en 2016, la compétence économique des régions, la
  densité de l'Île-de-France, la première région pour le tourisme étranger, la
  première région agricole, et la définition du schéma régional d'aménagement.
  L'apprenant lira le cours puis butera sur des questions dont la réponse n'y
  est nulle part.
- **Correction proposée** : ajouter au cours de `geo-france-regions` une
  quatrième section « Ce que fait une région » couvrant compétences, SRADDET,
  poids démographique et spécialisations régionales.


### [GRAVE] Deux bonnes réponses : le détroit qui sépare la France de l'Angleterre

- **Où** : `prisma/seed/culture-g/geographie.ts:30` — `geo-detroits`
- **Texte** : « Quel détroit sépare la France de l'Angleterre ? » — propositions
  « Le pas de Calais », « Le détroit de Douvres seul », « La mer d'Irlande »,
  « Le Solent »
- **Problème** : le pas de Calais **est** le détroit de Douvres — c'est le même
  bras de mer sous son nom français et son nom anglais (*Strait of Dover*). Le
  distracteur est donc exact. Le mot « seul » ne le disqualifie pas : il n'y a
  rien d'autre à quoi il pourrait s'ajouter.
- **Correction proposée** : remplacer le distracteur par « Le détroit du
  Cotentin », « La baie de Somme » ou « Le canal de Bristol ».

### [GRAVE] Deux bonnes réponses : le pays enclavé entre deux États

- **Où** : `prisma/seed/culture-g/geographie.ts:76` — `geo-frontieres`
- **Texte** : « Quel pays est enclavé dans deux États seulement, sans littoral,
  en Europe occidentale ? » — bonne réponse « Andorre », distracteurs « Le
  Luxembourg », « Monaco », « Le Liechtenstein »
- **Problème** : le Liechtenstein satisfait l'énoncé aussi bien qu'Andorre —
  deux voisins (Suisse, Autriche), aucun littoral, Europe de l'Ouest au sens
  courant. Le cours de `geo-frontieres` l'établit lui-même : il cite le
  Liechtenstein comme l'un des deux pays *doublement* enclavés, ce qui suppose
  exactement deux voisins sans littoral. Seule l'explication (les coprinces)
  tranche, et elle arrive après la réponse.
- **Correction proposée** : ajouter le discriminant à l'énoncé — « Quel pays,
  sans littoral, est enclavé entre la France et l'Espagne ? » — et rétrograder
  le Liechtenstein en distracteur légitime.

### [GRAVE] Le Groenland présenté comme un continent

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-cartographie-outils`
- **Texte** : « Quel continent apparaît beaucoup trop grand sur une carte de
  Mercator ? » — bonne réponse « Le Groenland »
- **Problème** : le Groenland est une île, pas un continent — c'est même
  l'exemple canonique de l'île, et une autre notion du même domaine
  (`geo-iles`) le pose comme « la plus grande île du monde ». L'énoncé apprend
  donc le contraire de ce que le domaine enseigne par ailleurs. Aggravant : le
  distracteur « l'Afrique », lui, est bien un continent.
- **Correction proposée** : « Quel territoire apparaît beaucoup trop grand sur
  une carte de Mercator ? » (`geo2-cartographie` dit d'ailleurs correctement
  « Quel territoire »).

### [GRAVE] Contradiction interne : la ville la plus peuplée d'Afrique

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-villes-monde`, contre
  `prisma/seed/culture-g/geographie-2.ts` — `geo2-afrique-geographie`
- **Texte** : lot 1 — « Quelle ville africaine est la plus peuplée ? » → bonne
  réponse « Lagos », « Le Caire » étant donné comme **faux**. Lot 2 — « Quelle
  est la ville la plus peuplée d'Afrique ? » → bonne réponse « Le Caire ou
  Lagos selon les définitions ». Le cours de `geo-villes-monde` tranche une
  troisième fois : « Lagos, au Nigeria, est la ville la plus peuplée d'Afrique. »
- **Problème** : selon la notion tirée, l'apprenant est noté faux pour avoir
  répondu ce que l'autre notion lui a appris. Sur le fond, les séries de l'ONU
  placent Le Caire devant Lagos en agglomération ; la question du lot 1 est donc
  celle qui est fausse.
- **Correction proposée** : aligner sur la formulation prudente du lot 2, et
  reformuler la question du lot 1 en « Quelle ville nigériane est la plus peuplée
  d'Afrique de l'Ouest ? », ou la supprimer. Corriger le cours en conséquence.

### [GRAVE] Contradiction interne : le Bosphore

- **Où** : `prisma/seed/culture-g/geographie-2.ts` —
  `geo2-transports-mondialisation`
- **Texte** : « Le Bosphore relie la mer Noire à la Méditerranée. »
- **Problème** : faux. Le Bosphore relie la mer Noire à la **mer de Marmara** ;
  ce sont les Dardanelles qui font ensuite communiquer la Marmara avec la mer
  Égée. `geo-detroits` pose exactement cette question et donne la bonne réponse,
  et le cours de `geo-detroits` l'écrit correctement (« relie la mer Noire à la
  mer de Marmara et, au-delà, à la Méditerranée »). L'explication fautive
  apprend donc le contraire d'une question du même domaine.
- **Correction proposée** : « Le Bosphore relie la mer Noire à la mer de
  Marmara, première étape vers la Méditerranée. »

### [GRAVE] Contradiction cours ↔ question : les déclassements du patrimoine mondial

- **Où** : `prisma/seed/culture-g/cours/geographie.ts` —
  `geo-tourisme-patrimoine`, section « Protéger, déplacer, déclasser »
- **Texte** : « Cela est arrivé deux fois : à une réserve d'oryx d'Oman, dont le
  périmètre avait été réduit, et à la vallée de l'Elbe à Dresde, après la
  construction d'un pont contesté. »
- **Problème** : il y a eu **trois** retraits — le sanctuaire de l'oryx d'Arabie
  (Oman, 2007), la vallée de l'Elbe à Dresde (2009) et Liverpool (2021). Le
  cours oublie Liverpool, alors que la question de la même notion l'énonce :
  « Dresde l'a subi en 2009 après la construction d'un pont, Liverpool en
  2021. » Le cours dément sa propre question.
- **Correction proposée** : « Cela est arrivé trois fois : au sanctuaire de
  l'oryx d'Arabie à Oman en 2007, à la vallée de l'Elbe à Dresde en 2009, et au
  port marchand de Liverpool en 2021. »

### [GRAVE] Le Conservatoire du littoral : chiffre faux d'un facteur sept

- **Où** : `prisma/seed/culture-g/geographie-3.ts` — `geo3-littoraux`
- **Texte** : « Créé en 1975, il protège aujourd'hui plus de deux cents
  kilomètres de rivages. »
- **Problème** : le Conservatoire du littoral protège environ **1 500 km** de
  rivages, sur quelque 200 000 hectares — soit plus de 13 % du linéaire côtier
  français. Le chiffre donné est vraisemblablement une confusion avec les
  200 000 hectares. Tel quel, il fait passer l'institution pour marginale.
- **À noter** : le cours de `geo3-littoraux` décrit correctement le
  Conservatoire (acquisition de terrains soustraits au marché) **sans avancer de
  chiffre**. L'erreur est donc confinée à l'explication de la question, et rien
  dans le cours ne vient la corriger dans l'esprit de l'apprenant.
- **Correction proposée** : « Créé en 1975, il protège aujourd'hui environ mille
  cinq cents kilomètres de rivages, soit plus d'un dixième du littoral
  français. »

### [GRAVE] Question insoluble : le département le plus éolien

- **Où** : `prisma/seed/culture-g/geographie-3.ts` — `geo3-energie-territoires`
- **Texte** : « Quel département français produit le plus d'électricité
  éolienne ? » — bonne réponse « Des départements du nord et du nord-est, très
  venteux et peu boisés »
- **Problème** : l'énoncé demande **un** département et aucune proposition n'en
  nomme un. La bonne réponse est un groupe régional, ce qui rend la question
  sans objet ; elle est de surcroît la seule proposition à porter une
  justification, donc reconnaissable sans rien savoir.
- **Correction proposée** : « Quelles régions françaises concentrent l'essentiel
  du parc éolien terrestre ? » avec pour réponse « Les Hauts-de-France et le
  Grand Est », et des distracteurs régionaux homogènes.

### [GRAVE] Question insoluble : le site français le plus visité

- **Où** : `prisma/seed/culture-g/geographie-2.ts` — `geo2-tourisme-mondial`
- **Texte** : « Quel site français est le plus visité ? » — bonne réponse
  « Notre-Dame de Paris avant l'incendie, puis le Louvre » ; explication : « Les
  classements varient selon que l'on compte les entrées payantes ou toutes les
  visites. »
- **Problème** : l'explication reconnaît que la question n'a pas de réponse
  unique. La bonne proposition est deux réponses agrafées, deux fois plus longue
  que les autres et la seule datée. Enfin le fait a vieilli : Notre-Dame a
  rouvert en décembre 2024 et retrouvé sa fréquentation, si bien que
  « avant l'incendie » ne décrit plus l'état du monde.
- **Correction proposée** : remplacer par « Quel musée est le plus visité au
  monde ? » → « Le Louvre », question qui a une réponse.

### [GRAVE] La frontière franco-espagnole confondue avec la longueur des Pyrénées — trois fois

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-france-regions`
  (question) ; `cours/geographie.ts` — `geo-france-regions`, section « Le relief
  et l'eau » ; `cours/geographie.ts` — `geo2-relief-france`, section « Trois âges
  de montagnes »
- **Texte** : question — « Quatre cent trente kilomètres de frontière. » ;
  cours `geo-france-regions` — « Les Pyrénées séparent la France de l'Espagne
  sur environ quatre cents kilomètres. » ; cours `geo2-relief-france` — « Les
  Pyrénées séparent la France de l'Espagne sur près de quatre cents
  kilomètres. »
- **Problème** : la frontière entre la France et l'Espagne mesure environ
  **623 km**. Les 430 km sont la longueur de la chaîne des Pyrénées. L'erreur
  n'est pas isolée : elle est répétée dans une question et dans deux cours
  distincts, ce qui la rend pratiquement inévitable à l'apprentissage — et
  interdit de la traiter comme une coquille.
- **Correction proposée** : « La chaîne s'étire sur environ quatre cent trente
  kilomètres ; la frontière franco-espagnole, qui la suit sans la épouser
  exactement, en compte plus de six cents. »

### [MOYEN] Chiffres et classements donnés sans date, et qui ont bougé

Le domaine est truffé de « aujourd'hui », « ces dernières années » et de
présents de vérité générale posés sur des données datées. Les plus exposés :

- **Pays accueillant le plus de réfugiés** (`geo-population`, et cours de
  `geo-population` : « la Turquie figure depuis plusieurs années en tête, devant
  l'Iran… »). L'Iran est passé devant la Turquie dans les séries du HCR ; les
  retours syriens depuis fin 2024 ont encore creusé l'écart. La bonne réponse
  est datée et l'Iran n'est même pas proposé. **À vérifier et à redater.**
- **Réchauffement de l'Arctique** (`geo3-arctique-enjeux`, question et `tip`) :
  « environ trois fois plus vite ». Les travaux récents donnent près de
  **quatre** fois. Le chiffre de trois est celui des années 2010.
- **Traité des eaux de l'Indus** (`geo3-eau-conflits`) : « il a survécu à
  plusieurs guerres entre les deux pays ». L'Inde l'a suspendu en 2025 ; la
  phrase, au présent, ne décrit plus l'état du traité.
- **Sites du patrimoine mondial** (`geo-tourisme-patrimoine`) : « chacune avec
  une soixantaine de biens », sans année, sur un classement qui change à chaque
  session du Comité.
- **Espace Schengen à vingt-neuf** (`geo3-espace-europeen`) : exact depuis
  janvier 2025, mais non daté.
- **Shenzhen** : « plus de dix-sept millions » dans la question,
  « plus de dix millions » dans le cours — deux chiffres différents pour le même
  fait, aucun daté.
- **Ports, terres rares, cobalt, blé** (`geo-ressources`,
  `geo2-energie-ressources`, `geo2-transports-mondialisation`) : parts de marché
  au présent, sans millésime.

**Correction proposée** : imposer une année entre parenthèses à tout classement
et à toute part de marché, ou reformuler au passé daté (« en 2023, … »).

### [MOYEN] Le `tip` de la notion donne la réponse de sa première question

Le cinquième argument de `notion()` est affiché à l'apprenant. Or il énonce
parfois exactement ce que la première question demande :

- `geo2-urbanisation` — tip : « Depuis 2007, plus de la moitié de l'humanité vit
  en ville. » ; Q1 : « Depuis quand la majorité de l'humanité vit-elle en
  ville ? »
- `geo2-population-mondiale` — tip : « La transition démographique décrit le
  passage d'une forte natalité et mortalité à de faibles taux. » ; Q1 :
  « Qu'est-ce que la transition démographique ? », dont la bonne réponse
  reprend la phrase.
- `geo2-transports-mondialisation` — tip : « Environ quatre-vingts pour cent du
  commerce mondial en volume passe par la mer. » ; Q1 : « Quelle part du commerce
  mondial passe par voie maritime en volume ? »
- `geo3-glaciers-cryosphere` — tip : « La fonte de la banquise ne fait pas
  monter le niveau de la mer… » ; Q1 : « Pourquoi la fonte de la banquise
  n'élève-t-elle pas le niveau de la mer ? »
- `geo3-deserts` — tip : « Un désert se définit par son aridité, non par sa
  température. » ; Q1 et Q2 portent là-dessus.

**Correction proposée** : le tip doit donner une clé de lecture, pas un fait
interrogé — par exemple, pour `geo2-urbanisation` : « La ville se définit
autrement selon les pays : les seuils de population varient de 200 à 50 000
habitants. »

### [MOYEN] La bonne réponse est trop souvent la seule proposition nuancée

Indépendamment du biais de longueur déjà mesuré, un motif de forme se répète :
la bonne réponse est la seule à porter une réserve, une précision ou une
énumération, et se reconnaît sans connaître le sujet.

- « Le Caire ou Lagos **selon les définitions** » (geo2-afrique-geographie)
- « Les Pays-Bas **parmi les grands pays** » (geo2-europe-geographie)
- « Le Pakistan **parmi les grands pays** » (geo2-asie-geographie)
- « Toulouse, **parmi les grandes villes** » (geo3-espace-urbain-france)
- « Notre-Dame de Paris **avant l'incendie, puis** le Louvre »
  (geo2-tourisme-mondial)
- « **Aucun, mais** le Vaucluse possède une enclave » (geo3-departements-france)
- « Vingt-neuf, **dont quelques non-membres de l'Union** » (geo3-espace-europeen)
- « **Plusieurs peuples distincts, dont** les Inuits et les Nenets »
  (geo3-arctique-enjeux)
- « **Des départements** du nord et du nord-est, très venteux et peu boisés »
  (geo3-energie-territoires)

**Correction proposée** : déplacer la nuance dans l'énoncé ou dans
l'explication, et ne laisser dans les propositions que des réponses de même
forme.

### [MOYEN] Le lac Baïkal : un cinquième de quelle eau douce ?

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-climats-extremes`
- **Texte** : « Quelle part de l'eau douce de surface du globe le lac Baïkal
  contient-il ? » → « Environ un cinquième »
- **Problème** : le chiffre vaut pour l'eau douce de surface **non gelée**. Avec
  les glaces, la part du Baïkal tombe très en dessous. Le cours de la même
  notion écrit correctement « eau douce de surface **non gelée** » : la question
  a perdu la qualification qui la rend vraie.
- **Correction proposée** : « Quelle part de l'eau douce de surface non gelée du
  globe le lac Baïkal contient-il ? »

### [MOYEN] Le record de chaleur : deux propositions désignent le même lieu

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-climats-extremes`
- **Texte** : propositions « À Furnace Creek, dans la Vallée de la Mort » (bonne)
  et « À Death Valley au Nevada » (fausse)
- **Problème** : Furnace Creek *est* dans la Death Valley. Le distracteur ne
  diffère de la bonne réponse que par une erreur d'État — la Vallée de la Mort
  est en Californie, pas au Nevada — que rien dans l'énoncé n'invite à
  débusquer. Le mélange du toponyme français et de sa version anglaise dans la
  même liste ajoute à la confusion.
- **Correction proposée** : remplacer le distracteur par « À Bassorah, en Irak »
  ou « À Ahvaz, en Iran », records réels quoique inférieurs.

### [MOYEN] Les pinsons de Darwin, légende présentée comme observation

- **Où** : `prisma/seed/culture-g/geographie.ts` — `geo-iles`
- **Texte** : « Il y observe en 1835 des pinsons dont le bec varie d'une île à
  l'autre selon la nourriture disponible. »
- **Problème** : exact sur le fond, faux sur la chronologie. Darwin n'a pas
  étiqueté ses pinsons par île et n'a pas fait le lien sur place ; c'est John
  Gould, à Londres en 1837, qui a établi qu'il s'agissait d'espèces distinctes.
  Le cours de la même notion est plus prudent (« observe les variations des
  espèces d'une île à l'autre, observation qui nourrira la théorie »), ce qui
  laisse la question seule à porter la légende.
- **Correction proposée** : « Les spécimens qu'il y collecte en 1835, identifiés
  à Londres deux ans plus tard, révèlent des espèces distinctes d'une île à
  l'autre. »

### [MOYEN] Le détroit de Béring : 82 km dans la question, 85 dans le cours

- **Où** : `geographie.ts` — `geo-detroits` (« Quatre-vingt-deux kilomètres
  séparent la Russie de l'Alaska ») contre `cours/geographie.ts` — même notion
  (« sépare l'Asie de l'Amérique sur environ quatre-vingt-cinq kilomètres »)
- **Problème** : deux valeurs pour le même fait, à quelques lignes l'une de
  l'autre dans le parcours de l'apprenant.
- **Correction proposée** : retenir « environ quatre-vingts kilomètres » aux
  deux endroits.

### [MOYEN] Canberra : trois dates incompatibles entre la question et le cours

- **Où** : `geographie.ts` — `geo-capitales-monde` (« Le site fut choisi en 1908
  […] et la ville inaugurée en 1927 ») contre `cours/geographie.ts` — même
  notion (« bâtie de toutes pièces à partir de 1913 »)
- **Problème** : 1908 (choix du site), 1913 (fondation et baptême), 1927
  (installation du Parlement) sont trois jalons réels, mais présentés comme
  concurrents. Le cours ne reprend pas les dates de la question et vice versa.
- **Correction proposée** : fixer la chronologie une fois : « site choisi en
  1908, ville fondée en 1913, Parlement installé en 1927 », et la répéter à
  l'identique.

### [MOYEN] L'Atacama rangé parmi les déserts de cellules de Hadley

- **Où** : `geographie-2.ts` — `geo2-climats-monde`, contre le cours de la même
  notion
- **Texte** : question — « Le Sahara, l'Arabie, le désert australien et
  l'Atacama s'alignent sur ces latitudes. » ; cours — « D'autres déserts ont
  d'autres causes : […] un courant froid côtier pour l'Atacama. »
- **Problème** : la question donne l'Atacama en exemple du mécanisme que le
  cours lui refuse explicitement. Le cours cite le Kalahari à sa place.
- **Correction proposée** : aligner la question sur le cours — « Le Sahara,
  l'Arabie, le Kalahari et les déserts australiens s'alignent sur ces
  latitudes. »

### [MOYEN] La mer Caspienne située au sud du Caucase

- **Où** : `geographie-2.ts` — `geo2-asie-geographie`, repris dans le cours
- **Texte** : « Quelle mer intérieure sépare l'Europe de l'Asie au sud du
  Caucase ? »
- **Problème** : la Caspienne est à **l'est** du Caucase, pas au sud. La limite
  conventionnelle Europe-Asie suit d'ailleurs l'Oural, puis le fleuve Oural,
  puis la Caspienne, puis le Caucase — la Caspienne est en amont du Caucase sur
  ce tracé, pas en aval.
- **Correction proposée** : « Quelle mer intérieure prolonge vers le sud la
  limite conventionnelle entre l'Europe et l'Asie ? »

### [MOYEN] Le seuil de l'aridité : 250 mm dans la question, 200 mm dans le cours

- **Où** : `prisma/seed/culture-g/geographie-3.ts` — `geo3-deserts`, contre
  `cours/geographie.ts` — même notion, section « Sec, pas forcément chaud »
- **Texte** : question — « Le seuil retenu est souvent de deux cent cinquante
  millimètres de pluie par an. » ; cours — « des précipitations très faibles —
  usuellement moins de deux cents millimètres par an ».
- **Problème** : deux seuils différents pour la même définition, dans la même
  notion. Les deux valeurs circulent en climatologie (200 mm pour l'aride,
  250 mm dans l'usage scolaire courant), mais présentées ainsi elles se
  contredisent, et l'apprenant qui a lu le cours répondra faux à la question s'il
  la retrouve sous forme numérique.
- **Correction proposée** : retenir un seul chiffre aux deux endroits, et
  signaler qu'il est conventionnel : « moins de deux cent cinquante millimètres
  par an, seuil conventionnel qui varie selon les auteurs ».

### [MOYEN] Le Traité de l'Indus donné comme intact, dans la question et dans le cours

- **Où** : `prisma/seed/culture-g/geographie-3.ts` — `geo3-eau-conflits`
  (explication), et `cours/geographie.ts` — même notion, section « Trois bassins
  sous tension »
- **Texte** : question — « il a survécu à plusieurs guerres entre les deux
  pays » ; cours — « il répartit les affluents entre les deux États et a survécu
  à plusieurs guerres entre eux — preuve qu'un accord technique bien conçu peut
  tenir là où tout le reste échoue ».
- **Problème** : le présent d'état et la conclusion (« peut tenir ») ne
  décrivent plus la situation depuis que l'Inde a suspendu sa participation au
  traité en 2025. Le cours va plus loin que la question en en tirant une morale
  générale, ce qui rend l'obsolescence plus dommageable encore.
- **Correction proposée** : « Signé en 1960 sous l'égide de la Banque mondiale,
  il a survécu à plusieurs guerres avant que l'Inde n'en suspende l'application
  en 2025 — un accord technique peut tenir longtemps, mais rien ne le met à
  l'abri d'une crise politique. » *(à confirmer par vérification web)*

### [MOYEN] Le réchauffement de l'Arctique : le chiffre de trois est celui d'hier

- **Où** : `prisma/seed/culture-g/geographie-3.ts` — `geo3-arctique-enjeux`
  (`tip`, énoncé **et** explication), et `cours/geographie.ts` — même notion
- **Texte** : « L'Arctique se réchauffe environ trois fois plus vite que la
  moyenne mondiale. »
- **Problème** : les travaux publiés depuis 2022 donnent un facteur proche de
  **quatre** sur la période 1979-2021. Le chiffre de trois reste défendable pour
  des fenêtres plus longues, mais il est donné ici sans période de référence, en
  `tip`, en énoncé et en explication — quatre fois le même chiffre non daté, ce
  qui interdit à l'apprenant de le relativiser. Aggravant : le seul distracteur
  supérieur proposé est « Dix fois plus vite », si bien qu'un apprenant à jour
  n'a aucune case où mettre la valeur exacte.
- **Correction proposée** : « L'Arctique se réchauffe trois à quatre fois plus
  vite que la moyenne mondiale selon la période retenue » et ajouter un
  distracteur « Environ quatre fois » — ou, mieux, poser la question sur le
  mécanisme (l'amplification arctique) plutôt que sur le facteur.

### [MINEUR] Langue et typographie

- « **Moins de un pour cent** » — `geo-ressources` (question) et le cours de la
  même notion. Élision obligatoire : « moins d'un pour cent ».
- Capitalisation flottante des propositions : `geo-ressources` écrit « La
  Russie », « l'Iran », « le Qatar », « les États-Unis » dans la même liste ;
  toute la notion `geo-tourisme-patrimoine` met ses propositions en minuscule
  (« l'UNESCO », « l'Italie ») là où le reste du domaine les capitalise.
- « L'Arabie **S**aoudite » (`geo-ressources`) contre « L'Arabie **s**aoudite »
  (`geo2-energie-ressources`) : la seconde graphie est la bonne.
- Nombres tantôt en toutes lettres (« deux virgule un enfants par femme »,
  `geo-population`), tantôt en chiffres (« Environ 2,1 enfants par femme »,
  `geo2-population-mondiale` ; « 8 849 mètres », `geo2-montagnes-monde`) —
  pour des faits identiques ou voisins.
- « **fonte** du permafrost » (`geo3-arctique-enjeux`) contre « **dégel** du
  permafrost » (`geo3-glaciers-cryosphere`) : le permafrost dégèle, il ne fond
  pas. La seconde formulation est la bonne.
- « Qu'est-ce que le fret aérien représente dans le commerce mondial ? »
  (`geo2-transports-mondialisation`) : phrase mal construite. Lire « Quelle
  place le fret aérien occupe-t-il dans le commerce mondial ? ».

### [MINEUR] Le Yangzi présenté comme fleuve de « la Chine du sud »

- **Où** : `geographie.ts` — `geo-fleuves-monde`
- **Texte** : « Quel fleuve traverse la Chine du sud et se jette près de
  Shanghai ? »
- **Problème** : le Yangzi traverse la Chine **centrale** — il est précisément
  la limite conventionnelle entre Chine du Nord et Chine du Sud. Le fleuve du
  sud est le Xi Jiang, donné en distracteur.
- **Correction proposée** : « Quel fleuve traverse la Chine d'ouest en est et se
  jette près de Shanghai ? »

### [MINEUR] Istanbul : « un tunnel » là où il y en a deux

- **Où** : `geographie.ts` — `geo-villes-monde`
- **Texte** : « Trois ponts et un tunnel ferroviaire sous-marin relient les
  rives. »
- **Problème** : sous le Bosphore passent le tunnel ferroviaire Marmaray (2013)
  **et** le tunnel routier d'Eurasie (2016). Le compte est daté.
- **Correction proposée** : « Trois ponts et deux tunnels sous-marins, l'un
  ferroviaire, l'autre routier, relient les rives. »

### [MINEUR] L'océan Austral « officiellement reconnu en 2000 »

- **Où** : `geographie-2.ts` — `geo2-oceans-mers` (`tip`), atténué dans le cours
- **Problème** : la proposition de l'Organisation hydrographique internationale
  de 2000 n'a jamais été ratifiée. Le cours le dit correctement (« son adoption
  reste inégale selon les pays ») ; le `tip`, lu en premier, affirme sans
  réserve.
- **Correction proposée** : « L'océan Austral n'a été proposé comme cinquième
  océan qu'en 2000, et sa reconnaissance reste inégale. »

### [MINEUR] Régions non modifiées en 2016 : liste incomplète

- **Où** : `geographie-3.ts` — `geo3-regions-france`
- **Texte** : « Corse, Île-de-France, Pays de la Loire et Provence-Alpes-Côte
  d'Azur non plus. »
- **Problème** : le **Centre-Val de Loire** est également resté inchangé et
  manque à la liste, qui se donne pourtant comme exhaustive.
- **Correction proposée** : ajouter le Centre-Val de Loire.

### [MINEUR] L'Amazone et « les six suivants »

- **Où** : `geographie-2.ts` — `geo2-fleuves-monde`
- **Texte** : « Le débit de l'Amazone dépasse celui de combien de fleuves
  suivants réunis ? » → « Les six suivants »
- **Problème** : la formule courante est « les **sept** suivants ». Six et sept
  circulent tous deux ; poser un QCM sur un chiffre contesté sans le signaler
  fabrique une fausse certitude.
- **Correction proposée** : reformuler en « plus que les sept fleuves suivants
  réunis », ou remplacer par une question sur le débit lui-même
  (200 000 m³/s), qui, lui, est stable.

### [GRAVE] L'Antarctique donné comme quatrième continent par la taille — trois fois dans la leçon 08

- **Où** : `heritage/culture-g/data/lecons/geographie/08.json` — section « L'Antarctique,
  un désert de glace », son visuel « L'Antarctique en cinq records », et
  l'explication de la première question du quiz
- **Textes** : section — « Sa superficie atteint près de 14,1 millions de kilomètres
  carrés, ce qui en fait le **quatrième continent par la taille** » ; visuel —
  « 14,1 M km² de superficie : quatrième continent par la taille » ; quiz — « ce qui
  en fait le quatrième continent par la superficie, **derrière l'Asie, l'Afrique et
  l'Amérique du Nord** ».
- **Problème** : l'énumération oublie l'Amérique du Sud (environ 17,8 millions de
  km²), plus vaste que l'Antarctique (environ 14,2). Dans le modèle à sept continents
  — celui que la leçon adopte puisqu'elle isole l'Amérique du Nord — l'Antarctique est
  **cinquième**, derrière l'Asie, l'Afrique, l'Amérique du Nord et l'Amérique du Sud.
  Le rang « quatrième » ne serait juste que dans un modèle à six continents où les
  deux Amériques sont réunies, ce que la phrase exclut elle-même. L'erreur est
  répétée trois fois dans le même chapitre, dont une dans un encadré de chiffres à
  mémoriser.
- **Correction proposée** : « ce qui en fait le cinquième continent par la superficie,
  derrière l'Asie, l'Afrique, l'Amérique du Nord et l'Amérique du Sud » — et la même
  correction dans le visuel et dans l'explication du quiz.

### [MOYEN] L'Arctique se réchauffe « quatre fois plus vite » dans la leçon 08, « trois fois » dans le seed

- **Où** : `heritage/culture-g/data/lecons/geographie/08.json` — section « L'Arctique,
  un océan gelé qui se réchauffe » et son visuel de comparaison, contre
  `prisma/seed/culture-g/geographie-3.ts` — `geo3-arctique-enjeux` (`tip`, énoncé,
  explication) et `cours/geographie.ts` — même notion
- **Textes** : leçon 08 — « depuis 1979, l'Arctique s'est réchauffé **près de quatre
  fois plus vite** que la moyenne mondiale » (repris dans le tableau de comparaison) ;
  seed — « environ **trois fois** plus vite ».
- **Problème** : le dépôt possède déjà la valeur à jour et correctement bornée (« depuis
  1979 »), à un fichier de là. Le constat déjà porté plus haut sur `geo3-arctique-enjeux`
  s'en trouve confirmé sur pièces : ce n'est pas une incertitude de la littérature, c'est
  une incohérence interne. Le distracteur « Dix fois plus vite » de la question du seed
  ne laisse toujours aucune case à l'apprenant qui aurait lu la leçon 08.
- **Correction proposée** : aligner le seed sur la leçon 08 — « près de quatre fois plus
  vite que la moyenne mondiale depuis 1979 » — aux quatre endroits (`tip`, énoncé,
  explication, cours).

### [MOYEN] Seize États indépendants en Océanie, sans dire lesquels sont comptés

- **Où** : `heritage/culture-g/data/lecons/geographie/08.json` — section « L'Océanie,
  un continent d'îles »
- **Texte** : « On y dénombre **seize États indépendants** et une quinzaine de
  territoires aux statuts variés ».
- **Problème** : le décompte usuel est de **quatorze** États souverains (Australie,
  Nouvelle-Zélande, Papouasie-Nouvelle-Guinée, Fidji, Salomon, Vanuatu, Samoa, Tonga,
  Tuvalu, Kiribati, Nauru, Marshall, États fédérés de Micronésie, Palaos). On atteint
  seize en ajoutant les îles Cook et Niue, États en libre association avec la
  Nouvelle-Zélande dont la souveraineté n'est reconnue que par une partie de la
  communauté internationale. Le chiffre est donc défendable mais il dépend d'une
  convention que la leçon ne donne pas, alors qu'elle range par ailleurs les îles Cook
  parmi les « territoires aux statuts variés ».
- **Correction proposée** : « On y dénombre quatorze États souverains, auxquels
  s'ajoutent les îles Cook et Niue, en libre association avec la Nouvelle-Zélande, et
  une quinzaine de territoires aux statuts variés. »

### [MINEUR] Les Aborigènes : une phrase dont la seconde moitié ne se rattache à rien

- **Où** : `heritage/culture-g/data/lecons/geographie/08.json` — section « L'Australie,
  le continent le plus sec »
- **Texte** : « Les Aborigènes, premiers habitants du continent, **y vivent depuis
  environ 50 000 ans, au cours de la dernière période glaciaire, lorsque le niveau des
  mers était nettement plus bas qu'aujourd'hui**. »
- **Problème** : le complément de temps se rapporte à l'arrivée, pas à la durée
  d'occupation ; tel quel, il fait dire à la phrase qu'ils vivent aujourd'hui encore
  pendant la dernière glaciation.
- **Correction proposée** : « Les Aborigènes, premiers habitants du continent, y sont
  arrivés il y a environ 50 000 ans, pendant la dernière période glaciaire, lorsque le
  niveau des mers était nettement plus bas qu'aujourd'hui et que les traversées depuis
  l'Asie du Sud-Est étaient plus courtes. »


### [GRAVE] La plus longue chaîne continentale : une cinquième et une sixième occurrence, avec deux longueurs

- **Où** : `heritage/culture-g/data/lecons/geographie/10.json` — section « Les Andes,
  une chaîne de subduction » et quatrième question du quiz ; contre
  `heritage/culture-g/data/lecons/geographie/06.json` (texte, visuel et quiz),
  `heritage/culture-g/data/geographie.json` Q40 et son cours « Le monde », et
  `geo2-montagnes-monde`
- **Textes** : leçon 10 — « La cordillère des Andes est **la plus longue chaîne de
  montagnes continentale du monde** : […] environ **7 150 kilomètres** » et, dans le
  quiz, « Quelle est approximativement la longueur de la cordillère des Andes ? » →
  « Environ 7 150 kilomètres », avec l'explication « devant l'Himalaya qui ne mesure
  que 2 400 kilomètres environ » ; leçon 06 — « les Andes au sud, longue d'environ
  **7 000 kilomètres**, ce qui en fait la plus longue chaîne continentale du monde »,
  repris dans un visuel et dans une question de quiz ; `geographie.json` — « environ
  7 000 km ».
- **Problème** : deux défauts cumulés. D'abord le doublon : le même fait est posé en
  question dans **deux leçons voisines** (06 et 10) et dans le cahier, avec la même
  comparaison « l'Himalaya ne fait que 2 400 km » — la phrase déjà relevée plus haut
  entre `geographie.json` Q40 et la leçon 06 se retrouve donc une fois de plus.
  Ensuite la valeur : 7 000 d'un côté, 7 150 de l'autre, sans que ni l'une ni l'autre
  soit présentée comme approximative au même degré, alors que la leçon 10 en fait la
  bonne réponse d'un QCM à quatre chiffres.
- **Correction proposée** : ne garder qu'une seule question sur la longueur des Andes,
  dans la leçon 10 (celle qui explique le mécanisme), et écrire partout « environ
  7 000 kilomètres » — l'ordre de grandeur admis, que la précision « 7 150 » ne
  justifie pas dans un contenu à mémoriser.

### [MOYEN] L'Aconcagua : 6 962 mètres dans la leçon 10, 6 961 dans la leçon 06 et dans le cahier

- **Où** : `heritage/culture-g/data/lecons/geographie/10.json` (section « Les grandes
  formes du relief » et section « Les Andes ») contre
  `heritage/culture-g/data/lecons/geographie/06.json` (visuel « Point culminant :
  l'Aconcagua, 6 961 m ») et `heritage/culture-g/data/geographie.json` (cours « Le
  monde », deux occurrences)
- **Problème** : un mètre d'écart, sans explication, sur une valeur que trois
  chapitres donnent comme un fait. Les deux circulent (l'altitude officielle argentine
  est de 6 960,8 m, arrondie tantôt à 6 961, tantôt à 6 962), mais rien ne le dit et
  l'apprenant qui a mémorisé l'une lira l'autre comme une correction.
- **Correction proposée** : retenir « environ 6 961 mètres » partout, ou « 6 960,8
  mètres » si l'on veut la précision.

### [MINEUR] Une phrase qui oppose les montagnes jeunes à leurs propres sommets

- **Où** : `heritage/culture-g/data/lecons/geographie/10.json` — section « Les grandes
  formes du relief »
- **Texte** : « On oppose souvent les montagnes jeunes, comme l'Himalaya, les Andes ou
  les Alpes, **aux sommets aigus, aux vallées profondes et aux fortes altitudes**, et
  les massifs anciens, comme les Appalaches ou le Massif central, usés par… »
- **Problème** : la préposition « aux » sert deux fois dans deux fonctions
  différentes — d'abord comme second terme de l'opposition, puis comme caractérisation.
  À la lecture, la phrase oppose les montagnes jeunes à des sommets aigus. Le verbe
  « oppose » attend d'ailleurs son vrai second terme (« les massifs anciens »)
  vingt mots plus loin, sans « à ».
- **Correction proposée** : « On oppose souvent les montagnes jeunes — l'Himalaya, les
  Andes, les Alpes — aux sommets aigus, aux vallées profondes et aux fortes altitudes,
  et les massifs anciens — les Appalaches, le Massif central — usés par des centaines
  de millions d'années d'érosion et réduits à des formes arrondies. »

### [MINEUR] « La seule chaîne plus longue de la planète est la dorsale médio-atlantique »

- **Où** : `heritage/culture-g/data/lecons/geographie/10.json` — explication de la
  quatrième question du quiz
- **Problème** : la dorsale médio-atlantique (environ 16 000 km) n'est qu'un segment du
  système des dorsales océaniques, long d'environ 65 000 km et qui compte plusieurs
  branches elles aussi plus longues que les Andes. « La seule » est donc faux, et le
  fait remarquable — un relief presque continu qui fait deux fois le tour du globe —
  est perdu.
- **Correction proposée** : « Seules les dorsales océaniques la dépassent : ce système
  de reliefs sous-marins, long d'environ 65 000 kilomètres, ceinture la planète. »


### [MOYEN] Le Sahara : une quatrième superficie, et une comparaison qui ne tient plus

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` — section « Le Sahara, le
  plus grand désert chaud », son visuel et la deuxième question du quiz, dont c'est la
  bonne réponse
- **Textes** : « il couvre **plus de 8,5 millions de kilomètres carrés**, soit environ
  30 pour cent de la superficie de l'Afrique » ; QCM — « Plus de 8,5 millions de km² » ;
  explication — « Cette superficie est **comparable à celle des États-Unis**. »
- **Problème** : le dépôt donne désormais quatre valeurs pour le même désert — « plus de
  8 millions » (leçon 05), « plus de 8,5 millions » (leçon 11, y compris en réponse de
  QCM), « environ 9 millions » (`geographie.json` Q31 et le cours « Le monde »), « plus
  de neuf millions » (`geo2-afrique-geographie`). Vérification faite, les deux extrêmes
  viennent de la **même source** : l'article Wikipédia français donne 9 065 000 km² en
  infobox et « plus de 8,5 millions » dans son résumé introductif. Les deux sont donc
  défendables, mais leur coexistence non signalée dans un contenu à mémoriser ne l'est
  pas — d'autant que la leçon 11 se contredit dans le même paragraphe : les États-Unis
  couvrent 9,83 millions de km², comparaison qui fonctionne à 9 millions et devient
  fausse à 8,5.
- **Correction proposée** : retenir « environ 9 millions de kilomètres carrés » aux
  quatre endroits, valeur qui rend vraie la comparaison avec les États-Unis et le taux
  de 30 pour cent de l'Afrique.
- **À noter** : le constat de passe 1 « la leçon 05 est la seule fautive, la valeur
  admise est 9,2 millions » demande donc à être révisé : la valeur usuelle est plutôt
  9,0 ; et la leçon 11, non lue à ce moment-là, est une seconde source de désaccord.

### [MOYEN] L'ensoleillement du Sahara : 3 600 heures par an ne font pas onze heures par jour

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` — section « Le Sahara, le
  plus grand désert chaud »
- **Texte** : « l'ensoleillement dépasse **3 600 heures par an, soit plus de onze heures
  par jour en moyenne**, certaines zones approchant même 4 300 heures. »
- **Problème** : 3 600 divisé par 365 donne 9,9 heures par jour, pas plus de onze. Les
  onze heures correspondent aux 4 300 heures citées juste après (11,8 h/jour) : les deux
  chiffres ont été intervertis. L'apprenant peut faire la division lui-même, ce qui
  discrédite le reste du paragraphe.
- **Correction proposée** : « l'ensoleillement dépasse 3 600 heures par an, soit près de
  dix heures par jour en moyenne, certaines zones approchant même 4 300 heures, c'est-à-
  dire près de douze heures quotidiennes. »

### [GRAVE] La cause de l'aridité de l'Atacama : le seed enseigne le contraire de la leçon 11, et la correction proposée en passe 1 aggraverait l'erreur

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` — section « L'Atacama, un
  désert côtier extrême » et cinquième question du quiz ; contre
  `prisma/seed/culture-g/geographie-3.ts:130` — `geo3-deserts` et
  `prisma/seed/culture-g/cours/geographie.ts:155` — `geo2-climats-monde`
- **Textes** :
  - leçon 11 (quiz) — « Quelles causes expliquent l'aridité extrême du désert
    d'Atacama ? » → « **Le courant froid de Humboldt, l'anticyclone du Pacifique et
    l'effet d'abri des Andes** » ; la section développe les **trois** mécanismes, en
    plaçant l'anticyclone en premier.
  - seed `geo3-deserts` — « Quels facteurs expliquent l'aridité extrême du désert
    d'Atacama ? » → « **Un courant marin froid et une barrière montagneuse** », avec
    « **Sa latitude tropicale seule** » posée en **distracteur**, donc comme réponse
    fausse.
  - cours `geo2-climats-monde` — « D'autres déserts ont **d'autres causes** : […] un
    courant froid côtier pour l'Atacama ».
- **Problème** : l'anticyclone permanent du Pacifique Sud *est* la branche subsidente de
  la cellule de Hadley à cette latitude. Le seed en fait donc une réponse fausse alors
  que c'est la première des trois causes, et son cours affirme que l'Atacama a « d'autres
  causes » que la circulation de Hadley, ce que la leçon 11 dément explicitement. Les
  deux questions sont par ailleurs des jumelles à un mot près, dans deux corpus que rien
  ne confronte.
- **Conséquence pour la passe 1** : le constat « [MOYEN] L'Atacama rangé parmi les
  déserts de cellules de Hadley » proposait de **retirer l'Atacama** de la liste des
  déserts de Hadley dans `geo2-climats-monde` et de le remplacer par le Kalahari. Cette
  correction est fausse et entérinerait l'erreur : c'est le **cours** du seed qu'il faut
  corriger, pas la question. Le constat doit être inversé.
- **Correction proposée** : dans le cours `geo2-climats-monde`, « D'autres déserts
  cumulent les causes : l'éloignement de toute mer pour les déserts continentaux d'Asie
  centrale ; pour l'Atacama, l'anticyclone du Pacifique, le courant froid de Humboldt et
  l'effet d'abri des Andes ». Dans `geo3-deserts`, remplacer le distracteur « Sa latitude
  tropicale seule » et faire de la bonne réponse « L'anticyclone du Pacifique, un courant
  marin froid et une barrière montagneuse ».

### [MOYEN] Le seuil de l'aridité : la leçon 11 tranche en faveur de la question, contre le cours

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` — section « Qu'est-ce
  qu'un désert ? », son visuel et la première question du quiz, dont c'est la bonne
  réponse
- **Texte** : « Le seuil le plus couramment retenu est celui de **250 millimètres** de
  pluie par an ; en dessous de 50 millimètres, on parle de région hyperaride. »
- **Apport** : le constat de passe 1 sur les deux seuils de `geo3-deserts` (250 dans la
  question, 200 dans le cours) est confirmé sur pièces, et l'arbitrage est désormais
  facile : le cahier d'origine dit 250 à trois endroits, avec en prime le seuil
  d'hyperaridité à 50 mm que le seed ne donne nulle part. C'est le **cours** du seed qui
  doit s'aligner, et non l'inverse.

### [MOYEN] La leçon 11 rejoue `geo3-deserts` presque question pour question

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` contre
  `prisma/seed/culture-g/geographie-3.ts` — `geo3-deserts` (dix questions)
- **Problème** : aucune fusion ne relie ces deux ensembles, et ils traitent pourtant le
  même programme dans le même ordre : la définition par l'aridité et son seuil, l'Antarctique
  premier désert du monde, l'erg, le reg, l'oasis, la foggara, l'aridité de l'Atacama, le
  désert d'abri, la grande muraille verte. Sept des dix questions du seed trouvent leur
  réponse littérale dans le texte de la leçon 11 — souvent dans la même phrase (« des
  ergs, mers de dunes de sable, des regs, plaines couvertes de graviers, des hamadas,
  plateaux rocheux, et des oasis »), et la leçon ajoute les foggaras au mot près. Le
  chapitre 11 et la notion `geo3-deserts` sont donc, pour l'apprenant, le même cours servi
  deux fois.
- **Correction proposée** : traiter `geo3-deserts` comme les six notions déjà fusionnées —
  la verser dans `cg-geographie-11` **après** dédoublonnage, en n'en gardant que ce que la
  leçon n'a pas (l'oued, le volet « sociétés désertiques »).

### [MINEUR] La Grande Muraille verte, septième occurrence

- **Où** : `heritage/culture-g/data/lecons/geographie/11.json` — section « Vivre dans
  l'aride et lutter contre la désertification »
- **Texte** : « la Grande Muraille verte africaine, lancée en 2007, les cordons de
  pierres, les demi-lunes et les trous appelés zaï donnent des résultats encourageants. »
- **Problème** : le sujet apparaît maintenant sept fois dans le domaine (leçon 05 texte et
  quiz, leçon 11, `geo2-afrique-geographie` question et cours, `geo3-deserts` question et
  cours). La leçon 11 a le mérite de ne pas reprendre l'image fautive du rideau d'arbres
  continu, mais elle ne la corrige pas non plus.
- **Correction proposée** : ne garder qu'un développement, dans la leçon 11 (celle qui le
  replace parmi les autres techniques de lutte contre la désertification), et y intégrer
  la précision du seed sur l'abandon du rideau d'arbres continu.


### [MOYEN] Mer d'Aral : trente-deux espèces moins vingt-huit ne font pas six

- **Où** : `heritage/culture-g/data/lecons/geographie/13.json` — section « La mer d'Aral,
  une catastrophe exemplaire »
- **Texte** : « La salinité a explosé, faisant passer le nombre d'espèces de poissons **de
  trente-deux à six** et provoquant la disparition **des vingt-huit espèces
  endémiques** ».
- **Problème** : les deux chiffres sont incompatibles dans la même phrase. Si six espèces
  subsistent sur trente-deux, vingt-six ont disparu — pas vingt-huit. L'incohérence vient
  de l'article Wikipédia source, qui juxtapose les deux données sans les articuler ; la
  leçon les a réunies dans une seule proposition, ce qui rend la contradiction visible à
  l'apprenant qui sait soustraire.
- **Correction proposée** : « La salinité a explosé : sur les trente-deux espèces de
  poissons que comptait le lac, six seulement subsistent, et l'essentiel du peuplement
  endémique a disparu. »

### [MOYEN] Le déclin de la faune d'eau douce : un chiffre de mégafaune donné pour l'ensemble

- **Où** : `heritage/culture-g/data/lecons/geographie/13.json` — section « Des usages
  inégaux et une répartition déséquilibrée »
- **Texte** : « les populations **d'animaux d'eau douce** ont chuté d'environ **88 pour
  cent entre 1970 et 2012**, un effondrement bien plus rapide que celui observé dans les
  milieux terrestres ou marins. »
- **Problème** : vérification faite, l'Indice Planète Vivante donne **81 pour cent** de
  déclin pour les vertébrés d'eau douce sur exactement cette période 1970-2012. Les 88
  pour cent proviennent d'une étude distincte portant sur la seule **mégafaune** d'eau
  douce, c'est-à-dire les animaux de plus de trente kilogrammes. Le chiffre est donc
  exact mais appliqué à un ensemble bien plus large que celui qu'il mesure — le cas de
  figure exactement visé par la consigne « exact mais trompeur ».
- **Correction proposée** : « les populations de vertébrés d'eau douce ont chuté
  d'environ 81 pour cent entre 1970 et 2012, et de 88 pour cent pour la seule grande
  faune, un effondrement bien plus rapide que celui observé dans les milieux terrestres
  ou marins. »

### [MOYEN] `geo3-eau-conflits` et la leçon 13 définissent les mêmes notions dans les mêmes mots

- **Où** : `prisma/seed/culture-g/geographie-3.ts:294-317` — `geo3-eau-conflits` contre
  `heritage/culture-g/data/lecons/geographie/13.json`
- **Textes appariés** :
  - seed — « Qu'est-ce que le stress hydrique ? » → « Une situation où la demande en eau
    dépasse la ressource disponible » ; leçon 13 — « On parle de stress hydrique lorsque
    la demande en eau dépasse la ressource disponible dans une zone géographique
    donnée. » *(même phrase)*
  - seed — « Qu'est-ce qu'une nappe fossile ? » → « Une nappe qui ne se recharge
    pratiquement plus », explication « consommer un stock non renouvelable » ; leçon 13 —
    « Une nappe fossile surexploitée est donc, à l'échelle humaine, une ressource non
    renouvelable. »
  - seed — « Qu'est-ce que la surexploitation d'une nappe ? » → « Un prélèvement supérieur
    à sa recharge naturelle » ; leçon 13 — « une nappe fossile pompée plus vite qu'elle ne
    se recharge ».
  - la mer d'Aral, enfin, y est traitée en section entière alors qu'elle apparaît déjà
    dans `geo-mers-oceans`, `geo2-oceans-mers` et `geo2-asie-geographie` : **quatrième**
    occurrence, et non trois comme relevé en passe 1.
- **Correction proposée** : `geo3-eau-conflits` ne conserve d'intérêt propre que sur son
  volet institutionnel français (agences de l'eau, pollueur-payeur, arrêté sécheresse) et
  sur les bassins transfrontaliers. Le reste doit être versé dans `cg-geographie-13` puis
  dédoublonné, comme les six notions déjà fusionnées.

### [MOYEN] Dans les quiz hérités aussi, la bonne réponse est la seule à porter un chiffre

- **Où** : `heritage/culture-g/data/lecons/geographie/13.json` — quiz, questions 2, 3 et 5
- **Textes** : Q2 — « **Gelée dans les glaces et les neiges, pour environ 69 %** » contre
  « Dans les fleuves et les rivières », « En vapeur dans l'atmosphère », « Dans les lacs
  de plaine » ; Q3 — « **L'agriculture, avec environ 70 % des prélèvements** » contre
  « L'industrie manufacturière », « Les usages domestiques », « Le refroidissement des
  centrales électriques » ; Q5 — « **Le détournement de l'Amou-Daria et du Syr-Daria pour
  irriguer le coton** », seule proposition nommant quoi que ce soit de précis.
- **Problème** : le constat de passe 1 sur ce biais visait le seed ; il vaut aussi pour le
  cahier d'origine, et sur trois questions de cinq dans ce seul chapitre. Un apprenant qui
  ne sait rien coche la proposition chiffrée et a raison trois fois.
- **Correction proposée** : chiffrer toutes les propositions ou aucune — « Gelée dans les
  glaces et les neiges », « Dans les nappes souterraines », « Dans les lacs et les
  rivières », « En vapeur dans l'atmosphère », et déplacer les 69 pour cent dans
  l'explication.

### [MINEUR] Mer d'Aral : « plus des trois quarts » pour une perte de près de neuf dixièmes

- **Où** : `heritage/culture-g/data/lecons/geographie/13.json` — section « La mer d'Aral »
  et légende de l'image
- **Texte** : « d'environ 66 458 kilomètres carrés […] Il ne couvre plus aujourd'hui
  qu'environ 8 300 kilomètres carrés, soit une perte de **plus des trois quarts** de son
  étendue. »
- **Problème** : 8 300 sur 66 458 représente 12,5 pour cent de la surface initiale, donc
  une perte de 87,5 pour cent. « Plus des trois quarts » est vrai mais minimise de moitié
  l'ampleur du désastre, dans une leçon qui en fait son exemple emblématique.
- **Correction proposée** : « soit une perte de près de neuf dixièmes de son étendue ».


### [MOYEN] Lascaux : « 16 500 avant notre ère » pour des peintures vieilles de 16 500 ans, et une hypothèse donnée pour un fait

- **Où** : `heritage/culture-g/data/lecons/geographie/16.json` — section « Une longue
  histoire de la carte » et première entrée de la frise
- **Texte** : « certaines **représentations d'étoiles** peintes dans la grotte de Lascaux
  **sont datées d'environ 16 500 avant notre ère** » ; frise — « ≈ 16 500 av. J.-C. —
  Lascaux ».
- **Problème** : deux défauts superposés. La date d'abord : Lascaux est daté d'environ
  17 000 ans avant le présent, soit autour de 15 000 avant notre ère. Le chiffre de
  16 500 est celui de l'**âge** des peintures, pas d'une date en ère chrétienne ; écrit
  « av. J.-C. », il les vieillit de deux millénaires. Le fond ensuite : l'identification
  d'une carte des Pléiades dans la salle des Taureaux est une **hypothèse** d'un seul
  chercheur, contestée et non consensuelle. « Sont datées » et « représentations
  d'étoiles » la présentent comme un fait établi, dans la phrase d'ouverture d'un
  chapitre — c'est le même défaut que les pinsons de Darwin relevé dans `geo-iles`.
- **Correction proposée** : « on a proposé de reconnaître dans certaines figures de la
  grotte de Lascaux, peintes il y a environ 16 500 ans, une représentation des Pléiades —
  hypothèse discutée, mais qui dit assez l'ancienneté du geste cartographique. » Et dans
  la frise : « ≈ 15 000 av. J.-C. ».

### [GRAVE] La cartographie est enseignée par trois corpus qui s'ignorent

- **Où** : `heritage/culture-g/data/lecons/geographie/16.json` (« La cartographie : lire et
  fabriquer une carte », cinq sections, cinq questions) contre `geo2-cartographie`
  augmentée de `geo-cartographie-outils` par `FUSIONS_INTERNES` (vingt questions) et
  contre `geo3-cartes-donnees`
- **Problème** : le constat de passe 1 relevait déjà neuf paires jumelles à l'intérieur du
  chapitre `geo2-cartographie`. La leçon 16 en fait un **troisième** traitement complet du
  même programme, et aucune fusion ne la relie aux deux autres. Les recoupements sont
  frontaux :
  - « Que conserve une projection dite équivalente ? » → « Les rapports de surface entre
    les territoires » est désormais la **troisième** occurrence de cette question, après
    « Que conserve une projection équivalente comme celle de Peters ? » et « Que conserve
    une projection équivalente ? » ;
  - le Groenland grossi par Mercator apparaît dans la section, dans la légende de l'image
    et dans l'explication du quiz de la leçon 16, en plus des **deux** questions du seed ;
  - le méridien de Greenwich, les systèmes d'information géographique, l'échelle, la
    sémiologie de Bertin sont traités des deux côtés.
- **Ce que la leçon 16 apporte et que le seed n'a pas** : la distinction grande
  échelle / petite échelle avec son piège de vocabulaire, la nomenclature complète
  conforme / équivalente / aphylactique, les trois modes d'implantation de Bertin, la
  valeur du degré en kilomètres, les éléments obligatoires d'une carte. Elle est
  nettement supérieure au chapitre du seed.
- **Correction proposée** : verser `geo2-cartographie` dans `cg-geographie-16` comme les
  six notions déjà fusionnées, dédoublonner en faveur de la leçon, et ne conserver du seed
  que ce qu'elle n'a pas (les cartes médiévales orientées à l'est, la conférence de 1884,
  la France restée à Paris jusqu'en 1911).

### [MINEUR] « Que signifie une carte à grande échelle ? » : quatre propositions de formes différentes

- **Où** : `heritage/culture-g/data/lecons/geographie/16.json` — troisième question du quiz
- **Texte** : propositions — « Le 1 sur 1 000 000 est une grande échelle » ; « Une grande
  échelle couvre toujours un très vaste territoire » ; « **Une grande échelle, comme le 1
  sur 25 000, montre un petit territoire avec beaucoup de détails** » ; « L'échelle n'a
  aucun rapport avec le niveau de détail ».
- **Problème** : l'énoncé demande une définition, la première proposition donne un
  exemple, la dernière nie la pertinence de la question. La bonne réponse est la seule à
  répondre à ce qui est demandé, et la plus longue des quatre — elle se reconnaît sans
  rien savoir de la cartographie.
- **Correction proposée** : homogénéiser — « Une carte couvrant un petit territoire avec
  beaucoup de détails » ; « Une carte couvrant un vaste territoire avec peu de détails » ;
  « Une carte dont le dénominateur d'échelle est grand » ; « Une carte sans indication de
  réduction ».


### [MOYEN] « Le rythme a doublé depuis 1993 » adossé à deux chiffres qui ne doublent pas — trois fois

- **Où** : `heritage/culture-g/data/lecons/geographie/17.json` — section « La montée du
  niveau de la mer », son visuel « La mer monte, et de plus en plus vite », et
  l'explication de la troisième question du quiz
- **Texte** : « le rythme est passé d'environ **3,1 millimètres par an** sur la période
  1993-2017 à **plus de 3,5 millimètres par an** vers 2020, **soit un doublement depuis
  1993** » ; visuel — « 3,5 mm/an vers 2020 : le rythme a doublé depuis 1993 » ; quiz —
  « plus de 3,5 millimètres par an vers 2020, soit un rythme qui a doublé depuis 1993 ».
- **Problème** : passer de 3,1 à 3,5 est une hausse de treize pour cent, pas un
  doublement, et la phrase adosse la conclusion aux deux chiffres qu'elle vient de citer.
  Le doublement est réel, mais il se mesure contre autre chose : environ 1,4 mm/an en
  moyenne sur le vingtième siècle, ou environ 2,1 mm/an au tout début de l'ère
  altimétrique. Tel quel, l'apprenant qui fait la division voit que le texte se contredit,
  et il le voit trois fois.
- **Correction proposée** : « le rythme est passé d'environ 1,4 millimètre par an sur le
  vingtième siècle à 3,1 millimètres par an sur la période 1993-2017, puis à plus de
  3,5 vers 2020 : il a plus que doublé. »

### [MOYEN] « L'année la plus chaude jamais enregistrée en Europe » : 2023 a été dépassée par 2024

- **Où** : `heritage/culture-g/data/lecons/geographie/17.json` — section « Un réchauffement
  mesuré et attribué » et explication de la deuxième question du quiz
- **Texte** : « L'Europe a ainsi connu **en 2023 son année la plus chaude jamais
  enregistrée**, avec environ 2,6 degrés au-dessus de l'ère préindustrielle. »
- **Problème** : vérification faite auprès de Copernicus, **2024** est l'année la plus
  chaude jamais enregistrée en Europe, comme au niveau mondial — et 2024 est aussi la
  première année civile au-dessus de 1,5 degré à l'échelle du globe. Le superlatif de la
  leçon n'est donc plus vrai. Le reste du paragraphe vieillit du même mouvement : les
  « environ 1,2 degré vers 2020 » sont datés et restent honnêtes, mais l'explication du
  quiz sur l'accord de Paris en tire une conclusion qui, elle, est dépassée (« sachant que
  le réchauffement atteignait déjà environ 1,2 degré vers 2020, l'objectif de 1,5 degré
  suppose une réduction très rapide »).
- **Correction proposée** : « L'Europe, continent qui se réchauffe le plus vite, a connu
  en 2024 son année la plus chaude jamais enregistrée ; 2024 est aussi la première année
  civile dont la moyenne mondiale a dépassé 1,5 degré au-dessus de l'ère
  préindustrielle. »

### [MOYEN] La leçon 17 et `geo3-glaciers-cryosphere` donnent la même explication dans les mêmes mots

- **Où** : `heritage/culture-g/data/lecons/geographie/17.json` (section « La montée du
  niveau de la mer », note du visuel et explication de la cinquième question) contre
  `prisma/seed/culture-g/geographie-3.ts` — `geo3-glaciers-cryosphere` (`tip` et première
  question) et `geo3-arctique-enjeux`
- **Textes** : leçon — « la fonte de la banquise arctique, déjà flottante, n'y participe
  pas, car elle déplace déjà son propre volume d'eau » ; seed (`tip`) — « La fonte de la
  banquise ne fait pas monter le niveau de la mer, contrairement à celle des glaciers. » ;
  seed (question) — « Pourquoi la fonte de la banquise n'élève-t-elle pas le niveau de la
  mer ? » → « **Elle flotte déjà et déplace son propre volume** ».
- **Problème** : la réponse littérale est écrite trois fois dans la leçon 17 et deux fois
  dans le seed, dont une en `tip` juste avant la question qui la pose. S'y ajoutent la
  boucle de rétroaction du pergélisol (leçon 17, `geo2-climats-monde`,
  `geo3-glaciers-cryosphere`, `geo3-arctique-enjeux` : quatre occurrences) et
  l'acidification des océans.
- **Correction proposée** : verser `geo3-glaciers-cryosphere` et `geo2-climats-monde` dans
  `cg-geographie-17` avec dédoublonnage, et retirer le `tip` qui donne la réponse.

### [MINEUR] « Fonte » du pergélisol : le cahier d'origine commet la faute que le seed corrige ailleurs

- **Où** : `heritage/culture-g/data/lecons/geographie/17.json` — section « Le déplacement
  des milieux naturels »
- **Texte** : « Dans les régions arctiques, la **fonte du pergélisol** déstabilise les
  sols ».
- **Problème** : un sol gelé dégèle, il ne fond pas ; seule la glace qu'il contient fond.
  Le constat de passe 1 opposait la « fonte du permafrost » de `geo3-arctique-enjeux` au
  « dégel du permafrost » de `geo3-glaciers-cryosphere` ; la faute est donc aussi dans le
  cahier d'origine, et la correction doit être appliquée aux trois endroits. S'y ajoute
  une hésitation de vocabulaire à l'échelle du domaine : le cahier écrit « pergélisol », le
  seed « permafrost », sans que l'équivalence soit jamais donnée.
- **Correction proposée** : « le dégel du pergélisol » partout, avec une mention de
  l'équivalence « pergélisol (permafrost) » à la première occurrence du domaine.

### [MINEUR] « Quelles sont les deux causes principales » : une seule proposition en donne deux

- **Où** : `heritage/culture-g/data/lecons/geographie/17.json` — cinquième question du quiz
- **Texte** : « Quelles sont les **deux** causes principales de l'élévation du niveau des
  océans ? » — propositions « **La dilatation thermique de l'eau et la fonte des glaces
  continentales** », « La fonte de la banquise arctique flottante », « L'augmentation des
  précipitations au-dessus des océans », « Les séismes et les éruptions volcaniques
  sous-marines ».
- **Problème** : l'énoncé annonce deux causes et une seule proposition en énumère deux.
  La question se résout sur la forme, sans rien connaître du sujet. C'est aussi le cas de
  la quatrième question, dont la bonne réponse est la seule à porter à la fois une date et
  un objectif chiffré.
- **Correction proposée** : « Qu'est-ce qui explique l'essentiel de l'élévation du niveau
  des océans ? » avec des propositions de même forme — « La dilatation thermique de l'eau
  et la fonte des glaces continentales », « La fonte de la banquise et celle des glaciers
  de montagne », « L'augmentation des précipitations et le ruissellement des fleuves »,
  « L'affaissement des fonds océaniques et l'activité volcanique ».


### [GRAVE] Le `tip` donne la réponse littérale d'une question de sa propre notion — dans six notions du lot 1 (passe 2)

Le constat de passe 1 signalait ce défaut sur cinq notions des lots 2 et 3. La relecture
du lot 1, qui n'avait pas été passé au crible sous cet angle, montre qu'il est
**systématique** : le cinquième argument de `notion()` est affiché avant le quiz, et il
énonce la bonne réponse d'une question du même quiz dans six notions sur treize.

- **Où** : `prisma/seed/culture-g/geographie.ts`
- **Paires** :

| Notion | `tip` affiché | Question de la même notion |
|---|---|---|
| `geo-ressources` (l. 194) | « La rente minière ne fait pas la prospérité : c'est ce qu'on appelle **la malédiction des ressources**. » | Q9 « Qu'appelle-t-on malédiction des ressources ? » → « **Le fait qu'une richesse minière freine souvent le développement** » |
| `geo-france-regions` (l. 220) | « La réforme de 2016 fait passer de vingt-deux à **treize** régions métropolitaines » | Q1 « Combien de régions compte la France métropolitaine depuis 2016 ? » → « **Treize** » |
| `geo-population` (l. 268) | « L'essentiel des migrations internationales est régional : **la majorité des migrants restent dans leur zone d'origine**. » | Q7 « Où réside la majorité des migrants internationaux ? » → « **Dans une région proche de leur pays d'origine** » |
| `geo-mers-oceans` (l. 242) | « **Le Gulf Stream** fait partie d'une circulation thermohaline globale » | Q1 « Quel courant chaud remonte l'Atlantique nord vers l'Europe ? » → « **Le Gulf Stream** » |
| `geo-capitales-monde` (l. 40) | « Beaucoup de capitales ont été choisies pour **arbitrer entre deux villes rivales**, ou pour **déplacer le centre de gravité d'un pays**. » | Q1 Canberra → « **Pour trancher la rivalité entre Sydney et Melbourne** » **et** Q3 Brasília → « **Pour tirer le peuplement vers l'intérieur du pays** » — le tip donne les deux |
| `geo-cartographie-outils` (l. 294) | « Une projection conserve **soit les angles, soit les surfaces**, jamais les deux » | Q1 Mercator → « **Les angles**, donc les caps » et Q3 Peters → « **Les surfaces** » : le tip réduit les deux questions à un tirage à pile ou face entre deux options qu'il a lui-même nommées |

- **Cas particulier, après fusion** : le `tip` de `geo-fleuves-monde` (« L'Amazone gagne au
  débit et au bassin ») ne trahit aucune question de sa propre notion, mais `FUSIONS` la
  verse dans `cg-geographie-09`, dont le quiz hérité pose précisément la superficie du
  bassin de l'Amazone et son débit. Le tip y devient donc, lui aussi, une antisèche.
- **Correction proposée** : réécrire ces sept `tip` en clé de lecture et non en fait
  interrogé. Par exemple, pour `geo-france-regions` : « Le nombre de régions a changé en
  2016, pas celui des départements ni celui des communes. » Pour `geo-ressources` : « Le
  pays qui détient les plus grosses réserves n'est presque jamais celui qui produit le
  plus. » Et vérifier la règle sur l'ensemble du domaine : un `tip` ne doit contenir aucun
  mot figurant dans une bonne réponse de sa notion.

### [MOYEN] Kaliningrad appelée « enclave » par une question dont le `tip` dit qu'elle n'en est pas une (passe 2)

- **Où** : `prisma/seed/culture-g/geographie.ts:78` — `geo-frontieres`, contre le `tip` de
  la même notion (l. 66)
- **Textes** : `tip` — « **Une enclave est entourée par un seul pays** ; un pays sans
  littoral est enclavé au sens large. » ; énoncé — « Quelle **enclave** russe est séparée
  du reste du pays ? » ; explication — « Coincée entre la Pologne et la Lituanie, elle est
  devenue une **exclave** lors de la dissolution de l'URSS. »
- **Problème** : Kaliningrad borde deux États et la mer Baltique : ce n'est pas une
  enclave au sens que la notion vient elle-même de définir, et l'explication le reconnaît
  en changeant de mot. L'énoncé enseigne donc le contre-exemple de sa propre définition, à
  douze lignes d'intervalle. C'est d'autant plus dommage que la distinction
  enclave/exclave est exactement ce que la notion prétend apprendre.
- **Correction proposée** : « Quel territoire russe est séparé du reste du pays par
  d'autres États ? », avec l'explication « Bordée par la Pologne, la Lituanie et la
  Baltique, Kaliningrad est une exclave — et non une enclave, puisqu'elle n'est pas
  entourée par un seul pays. »

### [MOYEN] « Quel pays a le plus de voisins ? » : une question au singulier, une réponse au pluriel (passe 2)

- **Où** : `prisma/seed/culture-g/geographie.ts:74` — `geo-frontieres`
- **Texte** : « Quel **pays** a le plus de voisins terrestres ? » — bonne réponse « **La
  Chine et la Russie, à égalité avec quatorze** », distracteurs « Le Brésil »,
  « L'Allemagne », « L'Inde »
- **Problème** : même défaut de forme que la question du département le plus éolien
  relevée en passe 1 — l'énoncé demande un pays, la bonne réponse en donne deux, et c'est
  la seule proposition à porter un chiffre et une justification. Elle se reconnaît sans
  rien savoir. Le fond est juste, la forme trahit.
- **Correction proposée** : « Combien de voisins terrestres la Chine et la Russie
  ont-elles chacune ? » → « Quatorze », avec des distracteurs numériques ; ou « Quels pays
  comptent le plus de voisins terrestres ? » et des propositions toutes formulées par
  paires.

### [MOYEN] La plus peuplée d'Europe intra-muros : Istanbul n'est pas proposée, alors que la notion vient de dire qu'elle est européenne (passe 2)

- **Où** : `prisma/seed/culture-g/geographie.ts:180` — `geo-villes-monde`, contre la
  question 4 de la même notion
- **Textes** : Q4 — « Quelle ville s'étend sur deux continents ? » → « **Istanbul** » ;
  Q6 — « Quelle ville européenne compte le plus d'habitants intra-muros ? » → « Moscou »,
  « Plus de douze millions d'habitants. Londres arrive ensuite avec environ neuf
  millions. »
- **Problème** : Istanbul compte environ quinze millions et demi d'habitants dans ses
  limites municipales, dont la majorité du côté européen ; la plupart des recensements
  européens la placent devant Moscou. Deux questions plus haut, la notion a appris à
  l'apprenant qu'Istanbul est en partie européenne — et elle ne figure pas parmi les
  propositions. La question n'a donc de réponse que si l'on adopte, sans le dire, la
  convention qui exclut les villes transcontinentales.
- **Correction proposée** : « Quelle ville de la Russie d'Europe compte le plus
  d'habitants intra-muros ? », ou conserver l'énoncé en ajoutant Istanbul aux propositions
  et en faisant d'elle la bonne réponse.

### [MINEUR] La Mecque et Médine : le distracteur n'est faux que par le mot « seule » (passe 2)

- **Où** : `prisma/seed/culture-g/geographie.ts:184` — `geo-villes-monde`
- **Texte** : « Quelle ville sainte est interdite aux non-musulmans ? » — « **La Mecque** »,
  distracteurs « Jérusalem », « **Médine seule** », « Kairouan » ; explication — « La
  Mecque et Médine sont **toutes deux fermées**, mais La Mecque l'est le plus
  strictement ».
- **Problème** : même mécanique que le distracteur « Le détroit de Douvres seul » déjà
  relevé — la proposition n'est fausse que par un adverbe ajouté, et l'explication
  reconnaît que les deux villes conviennent à l'énoncé. Un apprenant qui sait que Médine
  est également fermée hésite légitimement.
- **Correction proposée** : « Quelle ville sainte est **entièrement** interdite aux
  non-musulmans ? » et remplacer le distracteur par « Médine, dont seul le centre est
  fermé » — la nuance devient alors instructive au lieu d'être piégeuse.

### [MINEUR] « L'Atlantique nord » proposé comme un océan (passe 2)

- **Où** : `prisma/seed/culture-g/geographie.ts:262` — `geo-mers-oceans`
- **Texte** : « Quel **océan** est le plus petit et le moins profond ? » — propositions
  « L'océan Arctique », « L'océan Indien », « L'océan Austral », « **L'Atlantique nord** »
- **Problème** : l'Atlantique nord est une portion d'océan, pas un océan de la
  nomenclature ; il est le seul intrus dans une liste par ailleurs homogène, ce qui le
  rend éliminable sans connaissance. Même défaut de mélange des niveaux que le Groenland
  rangé parmi les continents.
- **Correction proposée** : remplacer par « L'océan Pacifique ».


### [GRAVE] Le `tip` de `geo2-montagnes-monde` affirme le contraire de ce que la leçon 10 enseigne (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:84` — `geo2-montagnes-monde`, contre
  `heritage/culture-g/data/lecons/geographie/10.json` et contre la sixième question de la
  notion elle-même
- **Texte** : `tip` — « Les plus hautes chaînes sont **toutes** le résultat de
  **collisions** de plaques encore actives. »
- **Problème** : c'est faux, et la notion se dément trois lignes plus bas. Sa question 6
  donne les Andes comme « la plus longue chaîne continentale du monde » — or les Andes ne
  résultent pas d'une collision mais d'une **subduction**, ce dont la leçon 10 fait
  précisément une question de quiz (« Quel mécanisme tectonique explique la formation de
  la cordillère des Andes ? » → « La subduction des plaques de Nazca et antarctique sous
  la plaque sud-américaine ») et le cœur de son propos, en opposant explicitement les deux
  mécanismes. Les Rocheuses relèvent également d'une subduction. Le mot « toutes » rend
  l'énoncé indéfendable, et l'apprenant lit l'affirmation **avant** le quiz, en position
  de règle à retenir.
- **Correction proposée** : « Les grandes chaînes naissent de deux mécanismes distincts :
  la collision de deux continents, comme l'Himalaya, ou la subduction d'une plaque
  océanique, comme les Andes. »

### [MOYEN] « Un cinquième de l'eau douce mondiale » : le `tip` perd la qualification que son explication conserve (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:62` — `geo2-fleuves-monde`, contre
  l'explication de sa propre première question
- **Textes** : `tip` — « l'Amazone charrie à elle seule **un cinquième de l'eau douce
  mondiale** » ; explication de Q1 — « Environ deux cent mille mètres cubes par seconde à
  l'embouchure, soit un cinquième de **l'eau douce rejoignant les océans**. »
- **Problème** : la proportion vaut pour le **débit** fluvial mondial vers les océans, pas
  pour le stock d'eau douce de la planète, dont l'essentiel est immobilisé dans les glaces
  et les nappes — la leçon 13 l'établit chiffre en main (69 % de glaces, 30 % de nappes,
  1 % en surface, dont 2 % seulement en rivières). Le `tip`, lu en premier, enseigne donc
  une énormité que l'explication corrigera trop tard. C'est exactement le défaut déjà
  relevé sur le lac Baïkal (« eau douce de surface » au lieu de « de surface non gelée »).
- **Correction proposée** : « l'Amazone charrie à elle seule un cinquième de l'eau douce
  que les fleuves du monde déversent dans les océans ».

### [GRAVE] Trois `tip` de plus donnent la réponse littérale de leur première question (passe 2)

En complément du constat sur le lot 1 et de celui de la passe 1, la relecture du lot 2
ajoute trois notions au décompte. Le total atteint **quatorze notions sur cinquante-trois**.

- **Où** : `prisma/seed/culture-g/geographie-2.ts`
- **Paires** :
  - `geo2-risques-naturels` (l. 44) — `tip` « Un **risque** est le **croisement d'un aléa
    et d'une population exposée** : sans enjeu, pas de risque. » ; Q1 « Qu'est-ce qu'un
    risque naturel ? » → « **Le croisement d'un aléa et d'enjeux exposés** ». Le tip
    contient jusqu'à l'exemple de l'explication.
  - `geo2-oceanie-poles` (l. 200) — `tip` « **L'Arctique est un océan** entouré de
    continents, **l'Antarctique un continent** entouré d'océans. » ; Q1 « Quelle
    différence fondamentale sépare l'Arctique de l'Antarctique ? » → « **L'Arctique est un
    océan gelé, l'Antarctique un continent** ».
  - `geo2-agriculture-monde` (l. 186) — `tip` « La faim dans le monde ne résulte pas d'un
    manque global de production mais de **l'accès** aux ressources. » ; Q7 « Qu'est-ce que
    la sécurité alimentaire selon la FAO ? » → « **L'accès** physique et économique de
    tous à une nourriture suffisante et saine » : le mot-clé discriminant est donné.
- **Correction proposée** : la même règle mécanique que plus haut — aucun mot de la bonne
  réponse ne doit figurer dans le `tip` de sa notion. Le contrôle est automatisable et
  devrait être ajouté au validateur de `commun.ts`, qui ne regarde aujourd'hui que les
  énoncés.

### [MOYEN] Le détroit de Corée : deux cents kilomètres donnés pour la largeur « au plus étroit » (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:132` — `geo2-asie-geographie`
- **Texte** : « Quel détroit sépare la Corée du Japon ? » → « Le détroit de Corée » ;
  explication — « Environ **deux cents kilomètres au plus étroit**, avec l'île de Tsushima
  au milieu. »
- **Problème** : deux cents kilomètres est la largeur **totale** du détroit, d'une rive à
  l'autre. Comme l'explication le dit elle-même, Tsushima le partage en deux passes : la
  passe occidentale, entre la Corée et Tsushima, mesure une cinquantaine de kilomètres, la
  passe orientale une soixantaine. « Au plus étroit » est donc contredit par la phrase qui
  le suit. La notion est par ailleurs précise ailleurs (quatorze kilomètres pour
  Gibraltar, moins de trois pour Malacca), ce qui rend l'écart d'autant plus visible.
- **Correction proposée** : « Environ deux cents kilomètres de large, partagés par l'île
  de Tsushima en deux passes d'une cinquantaine et d'une soixantaine de kilomètres. »

### [MOYEN] Les Aborigènes d'Australie : soixante-cinq mille ans dans le seed, cinquante mille dans la leçon 08 (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:220` — `geo2-oceanie-poles`, contre
  `heritage/culture-g/data/lecons/geographie/08.json`
- **Textes** : seed — « Quel peuple autochtone habite l'Australie depuis **au moins
  soixante-cinq mille ans** ? » ; leçon 08 — « Les Aborigènes […] y vivent depuis
  **environ 50 000 ans** », et, dans la section sur l'Océanie, « des chasseurs-cueilleurs
  sont arrivés il y a **45 000 à 50 000 ans** ».
- **Problème** : les deux chiffres correspondent à deux états de la recherche — 65 000 ans
  est la datation du site de Madjedbebe publiée en 2017, 50 000 ans la fourchette
  antérieure encore largement citée. Aucun des deux textes ne le dit, et le seed en fait
  un élément de l'énoncé, donc un fait à mémoriser. L'apprenant qui suit les deux
  chapitres tient deux durées qui diffèrent de trente pour cent.
- **Correction proposée** : retenir « au moins 50 000 ans, et jusqu'à 65 000 selon les
  datations du site de Madjedbebe » aux deux endroits, ou poser l'énoncé sans chiffre.

### [MOYEN] `geo2-oceanie-poles` rejoue la question de quiz de la leçon 08 (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:202` contre
  `heritage/culture-g/data/lecons/geographie/08.json` — cinquième question du quiz
- **Textes** : seed — « Quelle différence fondamentale sépare l'Arctique de
  l'Antarctique ? » → « L'Arctique est un océan gelé, l'Antarctique un continent » ;
  leçon 08 — « Quelle est la différence fondamentale entre l'Arctique et l'Antarctique ? »
  → « L'Arctique est un océan gelé entouré de terres, l'Antarctique un continent entouré
  d'océans ». Les deux explications développent le même argument, jusqu'à la même remarque
  sur l'altitude et l'isolement qui rendent l'Antarctique plus froid.
- **Problème** : c'est le même énoncé à trois mots près — le validateur ne le voit pas, et
  aucune fusion ne relie `geo2-oceanie-poles` à `cg-geographie-08`. S'y ajoutent, entre ces
  deux mêmes ensembles, les 90 pour cent des glaces, la Grande Barrière de corail, l'atoll
  de Darwin, la répartition Mélanésie/Micronésie/Polynésie et la vulnérabilité de Tuvalu :
  la notion du seed est un condensé de la leçon.
- **Correction proposée** : verser `geo2-oceanie-poles` dans `cg-geographie-08` et n'en
  garder que le passage du Nord-Ouest, absent de la leçon.

### [MINEUR] « Quel détroit sépare l'Asie de l'Indonésie ? » (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:244` — `geo2-transports-mondialisation`
- **Texte** : « Quel détroit **sépare l'Asie de l'Indonésie** et concentre un trafic
  considérable ? » → « Le détroit de Malacca »
- **Problème** : l'Indonésie est en Asie ; on ne peut pas l'en séparer. Le détroit sépare
  la péninsule malaise de l'île de Sumatra. L'énoncé est d'autant plus malvenu que le
  domaine enseigne par ailleurs (`geo2-asie-geographie`) que l'Indonésie est le plus grand
  État archipel d'Asie.
- **Correction proposée** : « Quel détroit sépare la péninsule malaise de Sumatra et
  concentre un trafic considérable ? »

### [MINEUR] « Quelle mer est la plus salée ? » — réponse : une qui n'est pas une mer (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-2.ts:122` — `geo2-oceans-mers`
- **Texte** : « Quelle **mer** est la plus salée du monde parmi ces étendues ? » → « La mer
  Morte » ; explication — « Environ dix fois la salinité de l'océan. **C'est un lac
  endoréique, non une mer au sens strict.** »
- **Problème** : l'explication retire à la bonne réponse la qualité que l'énoncé exige, et
  un des distracteurs (la mer Caspienne) est un lac lui aussi. La formule « parmi ces
  étendues » montre que l'auteur a vu la difficulté sans la résoudre.
- **Correction proposée** : « Quelle étendue d'eau est la plus salée du monde ? », et
  déplacer la remarque sur le statut de lac dans le corps de l'explication comme
  information et non comme rectification.


### [MOYEN] Une même réponse sert trois fois dans la même notion — `geo-france-regions` (passe 2, module chargé)

Le module a été chargé par `contenuDe()`, c'est-à-dire tel que l'apprenant le reçoit :
fusions appliquées, dédoublonnage passé, propositions déjà mélangées. Les 675 questions de
Géographie ainsi obtenues ont été croisées deux à deux. Le croisement **confirme** les
doublons décrits plus haut — ils survivent tous au chargement, aucun n'est retiré par le
dédoublonnage — et il fait apparaître un défaut que la lecture fichier par fichier ne
pouvait pas voir : la **répétition de la bonne réponse** à l'intérieur d'une même notion.

- **Où** : `prisma/seed/culture-g/geographie.ts` + `geographie-3.ts`, une fois la fusion
  `geo3-regions-france → geo-france-regions` appliquée — la notion servie compte alors
  dix-sept questions.
- **Texte** : trois questions ont **l'Île-de-France** pour bonne réponse — « Quelle région
  française est la plus peuplée ? », « Quelle région française a la plus forte densité de
  population ? », « Quelle région française attire le plus de touristes étrangers ? » — et
  trois autres ont **la Nouvelle-Aquitaine** — « Quelle région française est la plus vaste
  en métropole ? », « Quelle région française est issue de la fusion de trois anciennes
  régions en 2016 ? », « Quelle région française est la première pour la production
  agricole ? ».
- **Problème** : six des dix-sept questions de la notion n'ont que deux réponses distinctes.
  Les trois premières ne sont d'ailleurs pas indépendantes : la région la plus peuplée d'un
  pays où elle tient sur un territoire minuscule est nécessairement la plus dense, et le
  cours du seed les énonce dans la même phrase. L'apprenant qui a vu passer la première
  répond aux deux suivantes sans rien savoir de plus, et la notion lui apprend six fois
  moins qu'elle n'y paraît. C'est le même mécanisme, appliqué aux réponses, que le biais de
  longueur déjà mesuré sur les propositions.
- **Autres cas relevés par le même croisement** (moins graves parce que les notions sont
  plus courtes) : `cg-geographie-09` où la Volga répond à « Quel fleuve se jette dans la mer
  Caspienne ? » et à « Quel est le plus long fleuve d'Europe ? », et le Congo à « Quel
  fleuve traverse deux fois l'équateur ? » et à « Quel fleuve africain a le deuxième débit
  mondial ? » ; `geo-ressources` où la Russie répond au gaz naturel et au blé.
- **Correction proposée** : dans `geo-france-regions`, fondre densité et population en une
  seule question (« Pourquoi l'Île-de-France est-elle à la fois la région la plus peuplée et
  la plus dense ? »), et transformer la question du tourisme en question à réponse chiffrée
  (« Quelle part des nuitées étrangères en France l'Île-de-France concentre-t-elle ? »).
  Plus généralement, ajouter au validateur un contrôle de répartition : aucune réponse ne
  devrait valoir pour plus de deux questions d'une même notion.


### [MOYEN] « Quel État membre de l'Union n'a jamais adopté l'euro par choix ? » : deux réponses défendables, et l'explication le dit (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-3.ts:409` — `geo3-espace-europeen`
- **Texte** : « Quel État membre de l'Union n'a **jamais adopté l'euro par choix** ? » →
  « **Le Danemark** », distracteurs « La Suède », « La Pologne », « La Hongrie » ;
  explication — « Le Danemark bénéficie d'une clause d'exemption ; **la Suède a de facto
  choisi de ne pas y entrer**. »
- **Problème** : le critère retenu par l'énoncé est le **choix**, et c'est précisément
  celui qui désigne la Suède. Juridiquement, le Danemark est le seul à disposer d'une
  clause d'exemption négociée à Maastricht ; la Suède, elle, est tenue par traité d'adopter
  l'euro et s'y soustrait volontairement, en refusant d'entrer dans le mécanisme de change
  et après le référendum de 2003. La bonne réponse est donc celle qui n'a **pas** eu à
  choisir, et le distracteur celle qui a choisi — l'explication l'écrit noir sur blanc,
  deux lignes plus bas. L'apprenant attentif est puni.
- **Correction proposée** : « Quel État membre de l'Union dispose d'une clause d'exemption
  l'autorisant à ne pas adopter l'euro ? » → « Le Danemark », avec l'explication actuelle,
  qui devient alors instructive au lieu de contredire l'énoncé.

### [MOYEN] Le croquis et le schéma : deux questions voisines, deux bonnes réponses presque identiques (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-3.ts:376-378` — `geo3-cartes-donnees`, questions
  6 et 7, consécutives
- **Textes** : « Qu'est-ce qu'un croquis de géographie ? » → « Une représentation
  **simplifiée organisant l'espace** autour d'une problématique » ; « Qu'est-ce qu'un
  schéma en géographie ? » → « Une représentation **très simplifiée de l'organisation d'un
  espace** ».
- **Problème** : les deux bonnes réponses sont la même phrase à l'adverbe près. Posées à
  la suite, elles n'apprennent pas la distinction : elles la rendent illisible. La
  différence réelle — le croquis conserve le contour du territoire et se construit sur un
  fond de carte, le schéma abandonne la forme réelle pour ne garder que des figures
  géométriques — n'est énoncée ni dans les réponses ni dans les explications. Et le
  distracteur du schéma (« Une carte détaillée ») n'est pas celui qu'il faudrait écarter :
  c'est le croquis qu'un apprenant confondra avec le schéma.
- **Correction proposée** : « Qu'est-ce qui distingue un schéma d'un croquis en
  géographie ? » → « Le croquis se dessine sur le contour réel du territoire, le schéma le
  remplace par des formes géométriques », et supprimer l'une des deux questions actuelles.

### [MOYEN] Le nombre de médecins, la sous-alimentation : deux chiffres que leur propre explication déclare instables (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-3.ts:390` — `geo3-inegalites-territoriales`, et
  `geographie-3.ts:268` — `geo3-alimentation-monde`
- **Textes** : « Quelle part de la population française vit dans une zone sous-dotée en
  médecins ? » → « Environ un habitant sur dix », explication « **Le chiffre varie fortement
  selon la définition retenue et la spécialité considérée.** » ; « Combien de personnes
  souffrent de sous-alimentation dans le monde ? » → « Plusieurs centaines de millions »,
  distracteurs « Environ dix millions », « Environ deux milliards », « Environ cinquante
  millions ».
- **Problème** : deux défauts distincts, tous deux liés à des chiffres non datés.
  1. La part de population en zone sous-dense **bouge vite** : environ 6 % au zonage de
     2021, environ 9 % au zonage 2024 de la DREES, davantage encore avec les zonages
     régionaux les plus récents. « Environ un habitant sur dix » est juste aujourd'hui et
     le sera faux demain, et l'explication reconnaît que la valeur dépend de la définition
     — c'est-à-dire qu'elle avoue que la question n'a pas de réponse unique. Il manque une
     date, qui suffirait à la rendre défendable.
  2. La question sur la sous-alimentation est la seule du domaine dont la bonne réponse est
     la **moins précise** des quatre : trois propositions donnent un ordre de grandeur
     chiffré, la quatrième reste vague. Le biais de longueur mesuré ailleurs joue ici à
     l'envers, mais il joue : on reconnaît la réponse à sa forme. La valeur visée (environ
     735 millions de personnes sous-alimentées selon la FAO) permettrait pourtant une
     question nette.
- **Correction proposée** : « Quelle part de la population française vivait dans une zone
  sous-dotée en médecins généralistes selon le zonage de 2024 ? » → « Environ un habitant
  sur dix » ; et « Combien de personnes souffrent de sous-alimentation dans le monde ? » →
  « Environ sept cents millions », avec « Environ soixante-dix millions », « Environ deux
  milliards » et « Environ deux cents millions » pour distracteurs.

### [MOYEN] Quatre `tip` de plus donnent la réponse littérale de leur notion — le lot 3 (passe 2)

Le lot 3 n'avait été passé au crible sous cet angle que pour deux notions
(`geo3-glaciers-cryosphere` et `geo3-deserts`, constat de passe 1). La relecture complète
en ajoute quatre, dont deux au mot près.

- **Où** : `prisma/seed/culture-g/geographie-3.ts`

| Notion | `tip` affiché | Question de la même notion |
|---|---|---|
| `geo3-departements-france` (l. 35) | « La numérotation des départements suit **l'ordre alphabétique de leur nom d'origine**. » | Q2 « Pourquoi les départements sont-ils numérotés dans cet ordre ? » → « **Par ordre alphabétique de leur nom d'origine** » — la phrase entière |
| `geo3-arctique-enjeux` (l. 443) | « L'Arctique se réchauffe **environ trois fois plus vite que la moyenne mondiale**. » | Q1 « À quelle vitesse l'Arctique se réchauffe-t-il ? » → « **Environ trois fois plus vite que la moyenne mondiale** » — la phrase entière, **et le chiffre est faux** (voir le constat sur les quatre fois) : l'astuce grave donc l'erreur avant même la question |
| `geo3-volcanisme` (l. 137) | « Le type d'éruption dépend surtout de **la viscosité du magma**. » | Q1 « De quoi dépend principalement le type d'éruption volcanique ? » → « De **la viscosité du magma** et de sa teneur en gaz » |
| `geo3-forets` (l. 205) | « La forêt française a **doublé** de surface depuis le milieu du XIXe siècle. » | Q7 « Quelle évolution la forêt française a-t-elle connue depuis 1850 ? » → « Sa surface a environ **doublé** » |

S'y ajoutent deux cas que le rapprochement littéral ne voit pas mais qu'un apprenant voit :
`geo3-seismes` (tip « **On ne sait pas prédire un séisme**, mais on sait où et à quelle
fréquence ils surviennent. » contre Q8 « Peut-on prédire un séisme ? » → « **Non**, on peut
seulement évaluer un aléa probabiliste ») et `geo3-espace-europeen` (tip « L'espace Schengen
et l'Union européenne **ne recouvrent pas exactement les mêmes pays**. » contre Q5 « Combien
de pays composent l'espace Schengen ? » → « Vingt-neuf, **dont quelques non-membres de
l'Union** » : c'est le membre de phrase qui distingue la bonne réponse de « Vingt-sept »).

**Décompte final sur le domaine : vingt notions sur cinquante-trois**, soit un peu plus
d'une sur trois — la même proportion que celle relevée en gastronomie et en physique-chimie.

- **Correction proposée** : celle déjà donnée, et son automatisation — le validateur de
  `commun.ts` doit refuser un `tip` dont plus de la moitié des mots signifiants figurent
  dans une bonne réponse de la notion. Pour `geo3-arctique-enjeux`, corriger d'abord le
  chiffre, puis remplacer le tip par « Le pôle Nord n'a pas de continent sous la glace :
  c'est ce qui distingue radicalement l'Arctique de l'Antarctique. »

### [MINEUR] « Quelle pression le tourisme exerce-t-il ? » — la réponse parle d'autre chose (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-3.ts:435` — `geo3-espace-mediterranee`
- **Texte** : « Quelle pression **le tourisme** exerce-t-il sur la Méditerranée ? » →
  « **Elle** est la première destination touristique mondiale, avec de fortes pressions
  locales »
- **Problème** : la réponse ne répond pas à la question posée — elle énonce un classement
  au lieu d'une pression — et son pronom « elle » n'a aucun antécédent féminin dans
  l'énoncé, où le sujet est « le tourisme ». Les trois distracteurs, eux, sont bien des
  pressions (« Une pression modérée », « Une pression limitée aux îles »…) : la bonne
  réponse est donc la seule qui ne soit pas de la même nature grammaticale que les autres,
  et se repère sans rien connaître du sujet.
- **Correction proposée** : « Quelle pression le tourisme exerce-t-il sur la Méditerranée ? »
  → « Une pression très forte : c'est la première destination touristique du monde », les
  distracteurs restant inchangés.


### [GRAVE] L'Arctique « trois fois plus vite » : l'erreur est écrite trois fois, dans le `tip`, dans la question et dans le cours (passe 2)

- **Où** : `prisma/seed/culture-g/geographie-3.ts:443` et `:445` (`geo3-arctique-enjeux`), et
  `prisma/seed/culture-g/cours/geographie.ts:628` — première section du cours de la même
  notion
- **Textes** : `tip` — « L'Arctique se réchauffe environ **trois fois** plus vite que la
  moyenne mondiale. » ; Q1 — « À quelle vitesse l'Arctique se réchauffe-t-il ? » → « Environ
  **trois fois** plus vite que la moyenne mondiale » ; cours — « L'Arctique se réchauffe
  environ **trois fois** plus vite que la moyenne mondiale — un phénomène appelé
  amplification arctique. »
- **Problème** : la passe 1 avait relevé le chiffre comme périmé (les travaux de 2022 sur la
  période 1979-2021 donnent près de **quatre fois**, et la leçon 08 du cahier écrit
  d'ailleurs « quatre fois plus vite »). Ce que la relecture ajoute, c'est **l'ampleur de la
  reprise** : la même valeur fausse est servie à l'apprenant trois fois, à trois moments
  différents de la même notion — avant le quiz, pendant le quiz, et dans le cours de
  révision. Aucune des trois occurrences ne renvoie aux deux autres : corriger l'une
  laisserait les deux autres enseigner l'erreur. Et le domaine se contredit désormais
  ouvertement, puisque la leçon 08 dit quatre.
- **À corriger aussi, dans la même section** : « l'étendue de la banquise d'été a diminué de
  **moitié** en quelques décennies » — la baisse du minimum de septembre est d'environ
  quarante pour cent par rapport à la moyenne des années 1980 ; c'est le **volume**, et non
  l'étendue, qui a chuté de plus de moitié.
- **Correction proposée** : « environ quatre fois plus vite que la moyenne mondiale » aux
  trois endroits, avec la précision « sur la période 1979-2021 » au moins dans le cours ; et
  « l'étendue de la banquise d'été a reculé d'environ quarante pour cent, son volume de plus
  de moitié ».

### [MOYEN] Le cours dit la différence entre croquis et schéma, les questions la suppriment (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:562` — `geo3-cartes-donnees`, section
  « Simplifier pour démontrer », contre les questions 6 et 7 de la même notion
- **Textes** : cours — « Un schéma va plus loin dans l'abstraction : […] il **abandonne les
  contours réels au profit de formes géométriques**. » ; questions — « Une représentation
  simplifiée organisant l'espace autour d'une problématique » et « Une représentation **très**
  simplifiée de l'organisation d'un espace ».
- **Problème** : le cours possède le critère qui sépare les deux notions — le croquis garde
  le contour du territoire, le schéma le remplace par des figures. Les deux questions ne le
  reprennent pas : elles se distinguent par le seul adverbe « très ». C'est le cas de figure
  exactement inverse de ceux relevés jusqu'ici, où le cours était plus pauvre que la
  question : ici la question **perd** ce que le cours enseigne, et l'apprenant qui a lu le
  cours ne peut pas s'en servir pour répondre.
- **Correction proposée** : remplacer les deux questions par une seule — « Qu'est-ce qui
  distingue un schéma d'un croquis en géographie ? » → « Le croquis garde le contour réel du
  territoire, le schéma le remplace par des formes géométriques », avec pour distracteurs
  « Le croquis est en couleur, le schéma en noir et blanc », « Le croquis est à l'échelle, le
  schéma non » et « Le croquis porte une légende, le schéma non ».

### [MINEUR] Le volcan d'Armero appelé « peu explosif » deux paragraphes après avoir été rangé parmi les explosifs (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:446` — `geo3-volcanisme`, section « Les
  formes et les dangers », contre la section précédente du même cours
- **Textes** : section 1 — « Un volcan explosif, à magma visqueux, produit des nuées ardentes
  et des panaches de cendres […] Les Antilles et l'Indonésie [en relèvent] » et, dans la
  question 3, « Ils se situent principalement en **zone de subduction** » ; section 2 —
  « C'est un lahar qui a fait plus de vingt mille morts à Armero, en Colombie, en 1985, à
  cinquante kilomètres d'un volcan **pourtant peu explosif**. »
- **Problème** : le Nevado del Ruiz est un stratovolcan andésitique de la zone de subduction
  andine, c'est-à-dire le type même du volcan explosif selon la classification que le cours
  vient d'établir. Ce qui était modeste, c'est **l'éruption** de novembre 1985 (indice
  d'explosivité 3), pas le volcan. En l'état, la phrase apprend à l'apprenant que les Andes
  seraient effusives, ce que la question 3 de la même notion contredit.
- **Correction proposée** : « … à cinquante kilomètres d'un volcan dont l'éruption, ce
  jour-là, fut pourtant modeste : c'est la fonte du glacier sommital, et non la puissance de
  l'explosion, qui a fait la catastrophe. »

### [MINEUR] « Un rapport de plusieurs unités » (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:613` — `geo3-espace-mediterranee`,
  section « Deux rives »
- **Texte** : « Quatorze kilomètres séparent l'Espagne du Maroc, et **un rapport de plusieurs
  unités** sépare leurs PIB par habitant. »
- **Problème** : la formule ne veut rien dire — un rapport n'a pas d'unités, et « plusieurs »
  n'en donne pas l'ordre de grandeur. L'explication de la question correspondante est
  d'ailleurs plus précise (« de un à dix entre les deux rives »), ce qui rend l'imprécision
  du cours d'autant moins justifiable. Le rapport réel entre l'Espagne et le Maroc est
  d'environ huit.
- **Correction proposée** : « … et un rapport d'environ un à huit sépare leurs PIB par
  habitant. »


### [GRAVE] Le cours de `geo2-montagnes-monde` se contredit dans la même section, deux phrases plus loin (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:164-167` — section « Des collisions en
  cours »
- **Texte** : « Les plus hautes chaînes du monde sont **toutes** le résultat de **collisions**
  de plaques encore actives : elles continuent de s'élever […] » puis, au paragraphe suivant :
  « **Les Andes** longent toute la côte ouest de l'Amérique du Sud et **résultent d'une
  subduction** : la plaque océanique plonge sous le continent […] »
- **Problème** : la passe 2 avait déjà relevé que le `tip` de la notion énonce cette fausseté.
  La relecture du cours montre que le `tip` **n'est pas une maladresse isolée** : il recopie
  la phrase d'attaque du cours, laquelle se dément deux phrases plus bas, dans la même
  section et sous un titre (« Des collisions en cours ») qui prend parti pour la version
  fausse. L'apprenant lit donc successivement une règle absolue et son contre-exemple, sans
  qu'un mot signale la contradiction. Les Rocheuses, la Sierra Nevada et l'ensemble de la
  ceinture andine relèvent de la subduction, et la leçon 10 du cahier en fait sa question de
  quiz centrale.
- **Correction proposée** : retitrer la section « Deux façons de fabriquer une montagne » et
  écrire : « Les plus hautes chaînes du monde naissent de deux mécanismes distincts, tous deux
  encore actifs : la collision de deux masses continentales, comme l'Himalaya, et la
  subduction d'une plaque océanique sous un continent, comme les Andes. »

### [MOYEN] La Turquie donnée « en tête » des pays d'accueil de réfugiés — ce n'est plus le cas (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:113` — `geo-population`, section « Les
  migrations, sans idées reçues »
- **Texte** : « les pays qui accueillent le plus de réfugiés ne sont pas les plus riches mais
  les voisins des zones de crise : **la Turquie figure depuis plusieurs années en tête**,
  devant l'Iran, la Colombie ou le Pakistan. »
- **Problème** : la phrase est datée sans le dire. Elle décrit exactement la décennie
  2014-2023. Dans les tableaux les plus récents du HCR, la Turquie n'est plus première : la
  Colombie et l'Allemagne la précèdent, l'Iran est passé derrière elle, et le Pakistan a
  fortement reculé. Or l'argument que le cours veut faire passer — « pas les plus riches mais
  les voisins des zones de crise » — est précisément celui que le nouveau classement
  contredit en partie, puisque l'Allemagne y figure au deuxième rang. Le fait choisi pour
  illustrer la thèse est devenu celui qui la nuance, et rien n'avertit l'apprenant.
- **Correction proposée** : « les pays qui accueillent le plus de réfugiés ne sont pas
  seulement les plus riches : Turquie, Iran, Ouganda, Tchad et Pakistan figurent depuis des
  années parmi les premiers, aux côtés de la Colombie et de l'Allemagne. » — une formulation
  qui ne dépend d'aucun rang et n'a donc pas de date de péremption.

### [MINEUR] Les sommets de l'Oural « dépassent à peine mille neuf cents mètres » — aucun ne les atteint (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:174` — `geo2-montagnes-monde`, section
  « Les massifs anciens »
- **Texte** : « L'Oural […] est une chaîne ancienne, formée il y a près de trois cents
  millions d'années et depuis longtemps érodée : **ses sommets dépassent à peine mille neuf
  cents mètres**. »
- **Problème** : le point culminant de l'Oural, le mont Narodnaïa, s'élève à **1 895 mètres**.
  Aucun sommet de la chaîne n'atteint 1 900 mètres, et donc aucun ne les « dépasse ». La
  démonstration du cours — un massif ancien rabote ses altitudes — n'a pas besoin d'être
  fausse pour convaincre.
- **Correction proposée** : « ses sommets n'atteignent pas mille neuf cents mètres — le mont
  Narodnaïa, le plus haut, culmine à 1 895 mètres. »


### [GRAVE] Le conflit du Sahara occidental donné pour « gelé depuis 1991 » — le cessez-le-feu est rompu depuis 2020 (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:235` — `geo2-frontieres-conflits`,
  section « Les grands contentieux »
- **Texte** : « Le Sahara occidental est administré par le Maroc et revendiqué par un
  mouvement indépendantiste, dans un **conflit gelé depuis un cessez-le-feu de 1991**. »
- **Problème** : le cessez-le-feu signé le 6 septembre 1991 a été déclaré rompu par le Front
  Polisario le 14 novembre 2020, après l'intervention marocaine de Guerguerat ; les
  affrontements de faible intensité n'ont pas cessé depuis. Ce n'est pas une nuance
  d'actualité : la phrase enseigne qu'il ne s'y passe rien, ce qui est le contraire du cas.
  C'est aussi le seul énoncé du domaine qui décrit un conflit armé en cours au présent de
  l'indicatif comme éteint — les autres contentieux de la même section (Cachemire, Taïwan,
  mer de Chine) sont, eux, correctement présentés comme ouverts.
- **Correction proposée** : « Le Sahara occidental est administré par le Maroc et revendiqué
  par le Front Polisario. Le cessez-le-feu conclu en 1991 sous l'égide de l'ONU a tenu
  jusqu'en 2020 ; il a été dénoncé depuis, et les affrontements ont repris à basse
  intensité. »

### [MOYEN] La « banane bleue » : un cours l'enseigne comme une structure, l'autre comme une erreur de méthode (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts:281` (`geo2-europe-geographie`) contre
  `:608` (`geo3-espace-europeen`)
- **Textes** : lot 2 — « La dorsale européenne désigne un axe fortement urbanisé et
  industrialisé courant de Londres à Milan […] Longtemps appelée banane bleue, cette
  concentration de population, de richesse et d'activité **structure l'économie du continent
  et explique la géographie des grands réseaux de transport**. » ; lot 3 — « Les géographes en
  **critiquent aujourd'hui l'usage** : la formule **simplifie à l'excès** une réalité bien plus
  fragmentée, agrège des régions très inégales, ignore la montée des métropoles scandinaves,
  espagnoles et d'Europe centrale, et gomme les zones en difficulté situées à l'intérieur même
  du corridor. »
- **Problème** : la passe 1 avait noté que l'**explication** d'une question du lot 2 donne la
  réponse d'une question du lot 3. Le désaccord est en réalité plus profond, et il est entre
  les deux **cours** : le premier présente la notion sans la moindre réserve et lui attribue
  une valeur explicative, le second en fait un cas d'école de mauvaise image géographique.
  L'apprenant qui suit les chapitres dans l'ordre du catalogue apprend d'abord la thèse, puis
  qu'il ne fallait pas y croire — sans qu'aucun des deux textes ne renvoie à l'autre.
  Le lot 3 a raison ; c'est le lot 2 qu'il faut réviser.
- **Correction proposée** : au lot 2, « La dorsale européenne, longtemps appelée banane bleue,
  désigne un axe urbanisé courant de Londres à Milan. L'image reste commode pour situer les
  grands réseaux de transport, mais les géographes la jugent aujourd'hui trop grossière : elle
  agrège des régions très inégales et ignore la montée d'autres métropoles européennes. »

### [MINEUR] Trois inexactitudes de détail dans les cours du lot 2 (passe 2)

- **Où** : `prisma/seed/culture-g/cours/geographie.ts`
- **Textes et problèmes** :
  1. **`geo2-relief-france`, l. 343** — « Ses crêtes parallèles et ses **combles** internes lui
     donnent une géométrie presque dessinée. » Le relief jurassien alterne des **monts** et des
     **combes** : une combe est un val évidé au sommet d'un anticlinal. « Combles » est un mot
     de charpente, et la faute passe inaperçue parce qu'elle produit une phrase grammaticalement
     correcte. Lire « ses combes internes ».
  2. **`geo2-ameriques-geographie`, l. 316** — « le détroit de Magellan […] longtemps **unique
     passage maritime** avant le canal de Panama ». Il ne l'a jamais été : le cap Horn et le
     passage de Drake ont toujours offert une route, plus dure mais praticable — et le cours de
     `geo-detroits` la décrit lui-même (« le passage de Drake […] le plus redouté des marins »).
     Lire « longtemps le seul passage abrité avant le canal de Panama ».
  3. **`geo2-relief-france`, l. 331** — « Les chaînes récentes — Alpes et Pyrénées — sont nées de
     la collision entre **l'Afrique et l'Europe** au Tertiaire ». Cela vaut pour les Alpes ; les
     Pyrénées résultent du rapprochement de la **plaque ibérique** et de la plaque européenne,
     et leur soulèvement principal est antérieur, du Crétacé supérieur à l'Éocène. Lire « nées du
     rapprochement de l'Afrique et de l'Ibérie avec l'Europe, entre la fin du Secondaire et le
     Tertiaire ».


### [MOYEN] Rectification d'un constat de passe 1 : le « 430 km » des Pyrénées vient du cahier hérité lui-même (passe 2)

- **Où** : `heritage/culture-g/data/geographie.json` — **Q8** et **Q12**, à quatre questions
  d'écart
- **Textes** : Q8 — « Les Pyrénées forment une barrière naturelle d'**environ 430 km** entre
  la France et l'Espagne, **de l'océan Atlantique à la mer Méditerranée**. » ; Q12 — « Elle
  dépasse celles avec l'**Espagne (environ 620 km)** et la Belgique. »
- **Problème** : la passe 1 concluait que « le chiffre juste est dans le dépôt, à deux
  fichiers de là » et imputait au seed la confusion entre la longueur de la chaîne (≈ 430 km)
  et celle de la frontière (≈ 623 km). **La relecture montre que le cahier hérité porte les
  deux valeurs, et qu'il porte aussi la confusion** : Q8 attribue les 430 kilomètres à ce qui
  sépare « la France et l'Espagne, de l'océan Atlantique à la mer Méditerranée » — c'est-à-dire
  exactement le tracé de la frontière, qui est sinueux et mesure 623 kilomètres. Le seed n'a
  donc pas inventé l'erreur : il l'a recopiée. Corriger le seed sans corriger Q8 laisserait
  l'apprenant devant les deux chiffres, dans le même fichier, sans explication.
- **Correction proposée** : Q8 — « Les Pyrénées s'étirent sur environ 430 kilomètres d'ouest
  en est ; la frontière franco-espagnole, qui en suit les crêtes en serpentant, mesure quant à
  elle environ 623 kilomètres. » Et la même distinction partout où l'un des deux chiffres
  apparaît.

### [MOYEN] Le cahier hérité donne au Nil « une dizaine de pays » et fait des dix pays du Danube un record mondial (passe 2)

- **Où** : `heritage/culture-g/data/geographie.json` — **Q29** contre **Q51**
- **Textes** : Q29 — « Il [le Nil] **traverse ou borde une dizaine de pays**, dont le Soudan et
  l'Égypte. » ; Q51 — « Le Danube **traverse ou borde dix pays, un record mondial** :
  l'Allemagne, l'Autriche, la Slovaquie, la Hongrie, la Croatie, la Serbie, la Bulgarie, la
  Roumanie, la Moldavie et l'Ukraine. »
- **Problème** : les deux explications emploient la **même formule** — « traverse ou borde » —
  et lui donnent la même valeur, dix. La seconde en fait un record mondial que la première a
  déjà égalé quatre-vingts lignes plus haut. L'apprenant qui a lu les deux ne peut plus
  répondre à Q51 : il tient deux fleuves à dix pays et une seule case à cocher. L'erreur est
  dans Q29 : le **cours** du Nil traverse ou borde l'Ouganda, le Soudan du Sud, le Soudan et
  l'Égypte ; c'est son **bassin versant** qui s'étend sur onze pays. Confondre les deux est
  précisément ce que Q51 ne fait pas, en énumérant les dix pays traversés.
- **Correction proposée** : Q29 — « Son bassin versant s'étend sur onze pays ; le fleuve
  lui-même traverse ou borde l'Ouganda, le Soudan du Sud, le Soudan et l'Égypte. »

### [MINEUR] Le marnage du Mont-Saint-Michel : treize mètres dans le cahier, plus de quatorze dans le seed (passe 2)

- **Où** : `heritage/culture-g/data/geographie.json` — Q20, contre
  `prisma/seed/culture-g/cours/geographie.ts:178` (`geo2-oceans-mers`)
- **Textes** : cahier — « Sa baie connaît parmi les plus grandes marées d'Europe continentale,
  avec un marnage pouvant **dépasser 13 mètres**. » ; seed — « **plus de quatorze mètres** dans
  la baie du Mont-Saint-Michel ».
- **Problème** : un mètre d'écart sur un chiffre présenté deux fois comme un fait, dans deux
  corpus qu'aucun contrôle ne confronte. La valeur usuellement retenue pour les plus grandes
  vives-eaux y est de quatorze à quinze mètres ; c'est le cahier qui est en retrait.
- **Correction proposée** : retenir « jusqu'à environ quatorze mètres en vives-eaux » aux deux
  endroits.


## Ce que la seconde passe a ajouté

- Le défaut du `tip` qui donne la réponse est **systématique** et non ponctuel : six notions du lot 1 s'y ajoutent aux cinq déjà relevées dans les lots 2 et 3, plus un cas créé par la fusion (`geo-fleuves-monde` → `cg-geographie-09`).
- `geo-frontieres` appelle Kaliningrad « enclave » alors que son propre `tip` définit l'enclave comme entourée d'un seul pays, et que son explication rétablit « exclave ».
- « Quel pays a le plus de voisins terrestres ? » : énoncé au singulier, réponse double, seule proposition chiffrée.
- « Quelle ville européenne compte le plus d'habitants intra-muros ? » : Istanbul manque aux propositions, deux questions après que la notion l'a déclarée européenne.
- « Médine seule » : deuxième distracteur du domaine qui n'est faux que par un adverbe.
- « L'Atlantique nord » proposé parmi les océans.
- Le `tip` de `geo2-montagnes-monde` est **faux** : il donne toutes les hautes chaînes pour des chaînes de collision, alors que les Andes — qu'il nomme deux questions plus loin — sont une chaîne de subduction, et que la leçon 10 en fait sa question centrale.
- Le `tip` de `geo2-fleuves-monde` donne « un cinquième de l'eau douce mondiale » là où son explication écrit correctement « de l'eau douce rejoignant les océans ».
- Trois `tip` de plus donnent la réponse littérale (`geo2-risques-naturels`, `geo2-oceanie-poles`, `geo2-agriculture-monde`) : quatorze notions sur cinquante-trois au total.
- Le détroit de Corée : « deux cents kilomètres au plus étroit » alors que c'est sa largeur totale.
- Les Aborigènes : 65 000 ans dans le seed, 50 000 dans la leçon 08.
- `geo2-oceanie-poles` Q1 est le jumeau mot pour mot de la question 5 du quiz de la leçon 08.
- « Quel détroit sépare l'Asie de l'Indonésie ? » : l'Indonésie est en Asie.

## Ce qui est sain

*(à écrire en fin d'audit)*
