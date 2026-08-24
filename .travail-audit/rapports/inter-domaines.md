> ÉTAT : passe 1 (recouvrement global des énoncés, 333 paires) triée et tranchée.
> Passe 2 (mots rares + réponses divergentes, 467 paires ; contradictions de
> dates, 860 paires) : tri en cours. Cours : 907 indexés, 92 paires
> inter-domaines partageant au moins deux segments de huit mots ; dix paires
> lues et tranchées. Reste : fin du tri des dates, dernières paires de cours.

# Inter-domaines (transversal, 14 domaines de culture-g)

## Ce que j'ai lu
- Les 9 921 énoncés extraits via `contenuDe(culture-g)` (fichier de travail `/tmp/cg.jsonl`).
- Repérage passe 1 : Jaccard ≥ 0,42 sur les mots signifiants des énoncés, uniquement
  entre domaines différents → 333 paires candidates.
- Lecture intégrale (énoncé + les 4 choix + explication) de chaque candidat retenu
  ci-dessous.

## Constats

### [GRAVE] La même question sur le nombre de communes, avec deux chiffres différents
- **Où** : `cg-geographie-c02` (Géographie) et `cg-institutions-economie-04` (Institutions & Économie)
- **Texte** : Géographie — « Environ combien de communes la France compte-t-elle ? » → **« 35 000 »**, expl. « La France compte environ 35 000 communes ».
  Institutions — « Combien la France compte-t-elle environ de communes ? » → **« Environ trente-quatre mille »**, expl. « Un record en Europe, hérité des paroisses d'Ancien Régime. »
- **Problème** : même question, deux ordres de grandeur affichés différemment (35 000 / 34 000).
  Les deux explications reprennent en outre la même idée (« record en Europe », « paroisses
  d'Ancien Régime »). Le chiffre réel est 34 875 communes au 1er janvier 2024 : la version
  Géographie arrondit vers le haut, la version Institutions vers le bas. Un apprenant qui
  a lu l'une hésitera sur l'autre, et surtout retiendra deux chiffres.
- **Correction proposée** : ne garder qu'une des deux questions (celle d'Institutions,
  domaine légitime pour l'organisation territoriale), et aligner le chiffre :
  « Environ trente-cinq mille » avec explication « 34 875 communes au 1er janvier 2024,
  un record en Europe hérité des paroisses d'Ancien Régime ».

### [GRAVE] La même question sur le gaz le plus abondant de l'air sec, dans deux domaines
- **Où** : `cg-sciences-vie-20` (Sciences de la vie & Terre) et `cg-neuf-pc2-air-atmosphere` (Physique & Chimie)
- **Texte** : SVT — « Quel gaz est de loin le plus abondant dans l'air sec ? » → « L'azote »
  (distracteurs : vapeur d'eau, oxygène, dioxyde de carbone).
  P&C — « Quel gaz est le plus abondant dans l'air sec ? » → « Le diazote »
  (distracteurs : argon, dioxygène, dioxyde de carbone).
- **Problème** : question identique, à la nomenclature près. Ce n'est pas une contradiction
  (azote = diazote ici), mais c'est un doublon franc, et le glissement de vocabulaire entre
  les deux domaines (azote/diazote, oxygène/dioxygène) est une source de confusion inutile
  pour qui révise les deux.
- **Correction proposée** : supprimer la version SVT (l'air sec relève de la physique-chimie
  de l'atmosphère) ou la transformer en question réellement biologique (rôle de l'azote
  atmosphérique dans le cycle de l'azote).

### [GRAVE] « Dans quelle galaxie se trouve le système solaire ? » posée trois fois, dans deux domaines
- **Où** : `cg-libre-sciences-vie-1` et `cg-sciences-vie-06` (Sciences de la vie & Terre),
  `cg-neuf-pc-univers-cosmologie` (Physique & Chimie)
- **Texte** : SVT-1 — « Comment s'appelle la galaxie dans laquelle se trouve le système
  solaire ? » → « La Voie lactée ». SVT-06 — « Comment se nomme notre galaxie et quel est
  son type ? » → « La Voie lactée, une galaxie spirale barrée ». P&C — « Dans quelle galaxie
  se trouve le système solaire ? » → « La Voie lactée ».
- **Problème** : trois occurrences de la même connaissance, avec les mêmes distracteurs
  (Andromède, Grand Nuage de Magellan). Divergence de détail au passage : `cg-libre-sciences-vie-1`
  décrit « une galaxie spirale », les deux autres « spirale barrée ».
- **Correction proposée** : ne conserver que la version Physique & Chimie et supprimer les
  deux versions SVT ; harmoniser sur « galaxie spirale barrée ».

### [GRAVE] Toute une leçon d'astrophysique rangée en Sciences de la vie & Terre
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/06.json`, titre « L'Univers, les
  étoiles et les galaxies » → notion `cg-sciences-vie-06`, domaine « Sciences de la vie & Terre »
- **Texte** : ses cinq questions sont « Que représente une année-lumière ? », « Quelle réaction
  produit l'énergie rayonnée par le Soleil ? », « Comment se nomme notre galaxie… ? », « Quelle
  observation d'Edwin Hubble… ? », « Qu'est-ce que le fond diffus cosmologique découvert en 1965 ? »
- **Problème** : fait rangé dans le mauvais domaine. Aucune de ces cinq questions ne relève des
  sciences de la vie ni de la Terre ; toutes ont leur pendant exact en Physique & Chimie
  (`cg-neuf-pc-univers-cosmologie`, `cg-neuf-pc-astronomie-systeme`, `cg-neuf-pc3-etoiles-vie`,
  `cg-neuf-pc-mesures-unites`). Résultat : l'apprenant qui révise « SVT » tombe sur de la
  cosmologie, et les mêmes faits lui sont resservis en « Physique & Chimie ».
- **Correction proposée** : rattacher la notion `cg-sciences-vie-06` au domaine
  « Physique & Chimie », ou la supprimer au profit des notions PC existantes.
  Même remarque, à plus petite échelle, pour `cg-libre-sciences-vie-1`, qui mêle à la biologie
  cinq questions d'astronomie (Mercure, Mars, Jupiter, Saturne, nombre de planètes), une
  question d'histoire des techniques (premier homme sur la Lune), une de géologie/sismologie
  (échelle de Richter) et une de chimie (« Quelle valeur de pH correspond à une solution
  neutre ? »).

### [MOYEN] Deux questions incompatibles pour qui ne lit que l'énoncé : 1962 ou 1965 ?
- **Où** : `cg-libre-histoire-france-3` (Histoire de France) et `cg-libre-institutions-economie-2` (Institutions & Économie)
- **Texte** : HF — « En quelle année a lieu la première élection du président de la République
  française au suffrage universel direct ? » → **1965** (distracteurs : 1958, 1974, **1962**).
  IE — « Depuis quelle année le président de la République française est-il élu au suffrage
  universel direct ? » → **1962** (distracteurs : 1958, 1974, 1946).
- **Problème** : les deux sont exactes prises isolément (référendum d'octobre 1962, première
  élection en décembre 1965) et les deux explications le disent. Mais la question d'Histoire
  de France propose 1962 comme distracteur : l'apprenant qui a mémorisé « suffrage universel
  direct = 1962 » chez Institutions se trompera. Les énoncés ne se distinguent que par
  « première élection » / « depuis quelle année », nuance trop ténue pour un QCM.
- **Correction proposée** : reformuler la question d'Institutions en « Quel référendum instaure
  en 1962 l'élection du président au suffrage universel direct ? », ou expliciter l'énoncé
  d'Histoire de France : « En quelle année se tient la première élection présidentielle
  effectivement organisée au suffrage universel direct ? »

### [GRAVE] Toute une leçon de météorologie rangée en Sciences de la vie & Terre, redoublant Géographie et Physique
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/20.json`, « L'atmosphère et la météorologie » → `cg-sciences-vie-20` (Sciences de la vie & Terre)
- **Texte** : ses cinq questions et leurs jumelles ailleurs —
  1. « Quel gaz est de loin le plus abondant dans l'air sec ? » ↔ `cg-neuf-pc2-air-atmosphere` (P&C) ;
  2. « Dans quelle couche de l'atmosphère se déroulent les phénomènes météorologiques ? » → « La troposphère » ↔ P&C « Quelle couche de l'atmosphère contient l'essentiel des phénomènes météorologiques ? » → « La troposphère » ;
  3. « Pourquoi la température remonte-t-elle avec l'altitude dans la stratosphère ? » ↔ P&C « Où se situe la couche d'ozone ? » ;
  4. « Quelle condition portant sur l'océan est nécessaire à la formation d'un cyclone tropical ? » ↔ `cg-geographie-07` (deux fois) ;
  5. « Pourquoi les grands déserts chauds se trouvent-ils souvent autour de 30 degrés de latitude ? » ↔ `cg-geographie-11` et `cg-neuf-geo2-climats-monde`.
- **Problème** : cinq questions sur cinq sont des doublons d'autres domaines, et aucune ne relève des sciences de la vie. La leçon entière est mal rangée.
- **Correction proposée** : supprimer `cg-sciences-vie-20` (ses cinq contenus existent déjà en Géographie et en Physique & Chimie), ou la rattacher à « Physique & Chimie ».

### [GRAVE] Le mécanisme des déserts de 30° expliqué trois fois, dans deux domaines, avec les mêmes phrases
- **Où** : `cg-geographie-11` et `cg-neuf-geo2-climats-monde` (Géographie), `cg-sciences-vie-20` (SVT)
- **Texte** : Géographie — « À l'équateur, l'air chaud et humide s'élève, se refroidit et libère des pluies abondantes. Cet air, devenu sec, se dirige en altitude vers le nord et le sud, puis redescend vers 30 à 35 degrés de latitude : ce sont les cellules de Hadley. »
  SVT — « Sous l'équateur, l'air fortement chauffé s'élève, se refroidit et déverse son humidité en pluies abondantes […] Cet air, désormais asséché, se dirige en altitude vers les tropiques et redescend vers 30 degrés de latitude […] C'est la branche descendante de la cellule de Hadley ».
- **Problème** : ce n'est pas une simple redite de fait, c'est le **même paragraphe de cours réécrit** d'un domaine à l'autre, jusqu'à l'énumération finale (Sahara, Arabie, Kalahari, Australie). La troisième version (`cg-neuf-geo2-climats-monde`) redit encore la même chose en une ligne.
- **Correction proposée** : garder la seule version de Géographie `cg-geographie-11` (la plus complète), supprimer celle de SVT et celle de `cg-neuf-geo2-climats-monde`.

### [MOYEN] Le seuil de formation des cyclones donné avec deux chiffres et deux épaisseurs
- **Où** : `cg-geographie-07` (Géographie) et `cg-sciences-vie-20` (Sciences de la vie & Terre)
- **Texte** : Géographie — « Environ 26 degrés », expl. « il faut pour cela une eau d'au moins 26 à 27 degrés sur une épaisseur d'environ **50 mètres** ».
  SVT — « Une eau de surface à plus de **26,5 °C** sur plusieurs dizaines de mètres », expl. « sur une épaisseur d'au moins **60 mètres** ».
- **Problème** : même fait, deux seuils et deux épaisseurs. Les deux sont dans la fourchette admise, mais l'apprenant qui révise les deux domaines retient deux chiffres qui se contredisent en apparence.
- **Correction proposée** : ne garder qu'une des deux questions et retenir la valeur usuelle : « une eau de surface à au moins 26,5 °C sur une soixantaine de mètres d'épaisseur ».

### [GRAVE] Doublons francs d'une question à l'autre entre deux domaines (lus intégralement)
- **Où / Texte** :
  - `cg-libre-institutions-economie-2` (Institutions) « Qu'appelle-t-on l'espace Schengen ? » → « Un espace de libre circulation sans contrôles aux frontières intérieures » ↔ `cg-neuf-ga-voyage-tourisme` (**Gastronomie & Art de vivre**) « Qu'est-ce que l'espace Schengen ? » → « Une zone de libre circulation sans contrôle aux frontières intérieures ». Même question, mêmes distracteurs (union douanière, zone euro, UE), et les deux explications donnent la même mise en garde (« il ne coïncide pas avec l'Union européenne »). Schengen n'a en outre rien à faire en gastronomie.
  - `cg-arts-musique-05` (Arts) « Qui a publié en 1924 le Manifeste du surréalisme ? » ↔ `cg-litterature-c01` et `cg-libre-litterature-2` (Littérature) — la même question posée **trois fois** dans deux domaines, réponse « André Breton », distracteur commun « Tristan Tzara ».
  - `cg-histoire-france-15` (Histoire de France) « Qu'est-ce que la bataille d'Alger de 1957 ? » ↔ `cg-neuf-hm3-decolonisation-conflits` (Histoire du monde) « Qu'est-ce que la bataille d'Alger en 1957 ? » — même réponse (« une opération de police… menée par l'armée »), même distracteur « débarquement ».
  - `cg-institutions-economie-04` (Institutions) « Combien de régions métropolitaines la France compte-t-elle depuis 2016 ? » → « Treize » ↔ `cg-libre-geographie-1` et `cg-neuf-geo-france-regions` (Géographie), même question, même réponse, trois occurrences.
  - `cg-geographie-10` (Géographie) « En quelle année Alfred Wegener a-t-il proposé sa théorie de la dérive des continents ? » ↔ `cg-sciences-vie-05` et `cg-libre-sciences-vie-2` (SVT) « Qui a proposé en 1912 la théorie de la dérive des continents ? » — même couple (Wegener, 1912) posé dans les deux sens, trois fois.
- **Problème** : dans tous ces cas, réviser deux domaines revient à réviser deux fois la même carte. Le pire est Schengen, où la question est de surcroît hors sujet dans son domaine d'accueil.
- **Correction proposée** : conserver une seule occurrence, dans le domaine le plus légitime (Schengen → Institutions ; surréalisme → Littérature, en laissant à Arts une question sur la *peinture* surréaliste ; bataille d'Alger → Histoire de France ; régions → Institutions ; Wegener → SVT ou Géographie, pas les deux).

### [GRAVE] Deux cours jumeaux sur les séismes et les volcans, phrases comprises
- **Où** : `cg-geographie-07` « Les risques naturels : séismes, volcans et cyclones » (Géographie)
  et `cg-sciences-vie-05` « Volcans, séismes et tectonique des plaques » (Sciences de la vie & Terre)
- **Texte** (segments repris presque à l'identique) :
  - Géo : « La surface de la Terre est **découpée en une douzaine de grandes plaques rigides qui se déplacent de quelques centimètres par an** sur un manteau visqueux. » / SVT : « La lithosphère est **découpée en une douzaine de grandes plaques rigides qui se déplacent de quelques centimètres par an**, portées par les mouvements de convection du manteau. »
  - Géo : « **Le point de rupture** souterrain **s'appelle le foyer ou hypocentre, et le point situé à la verticale en surface l'épicentre.** » / SVT : « **Le point de rupture s'appelle le foyer, ou hypocentre, et le point situé à sa verticale en surface est l'épicentre**, en général le plus affecté. »
  - Géo : « des **nuées ardentes, mélanges de gaz brûlants et de débris dévalant les pentes** à plus de 100 kilomètres par heure » / SVT : « des **nuées ardentes, ces avalanches de gaz brûlants et de débris dévalant les pentes** à grande vitesse ».
  - Les deux redisent aussi « un degré de magnitude supplémentaire ≈ trente fois plus d'énergie », l'échelle de Mercalli, la ceinture de feu du Pacifique, le Piton de la Fournaise et la destruction de Saint-Pierre en 1902.
- **Problème** : ce n'est pas un chevauchement thématique, c'est le même cours écrit deux fois dans deux domaines, avec dix-huit segments de huit mots strictement identiques. L'apprenant révise deux fois la même chose en croyant apprendre deux matières.
- **Correction proposée** : garder `cg-sciences-vie-05` pour le mécanisme (tectonique, ondes P/S, types d'éruption) et réécrire `cg-geographie-07` sur ce qui est proprement géographique : la répartition des populations exposées, l'aléa/vulnérabilité/risque, la prévention et l'aménagement.

### [GRAVE] La société féodale et l'essor du XIIe siècle écrits deux fois — avec deux dates de fondation de Cluny
- **Où** : `cg-histoire-france-03` « Les Capétiens et la France médiévale (987-1328) » (Histoire de France)
  et `cg-histoire-monde-03` « Le Moyen Âge en Europe (Ve-XVe siècle) » (Histoire du monde)
- **Texte** :
  - HF : « lors de la cérémonie de l'hommage, **le vassal place ses mains dans celles de son seigneur et lui jure fidélité ; en échange, il reçoit** un fief » / HM : « au cours d'une cérémonie d'hommage, **le vassal place ses mains dans celles du seigneur et lui jure fidélité ; en échange, il reçoit** le plus souvent une terre appelée fief ».
  - HF : « une société de trois ordres : **ceux qui prient, ceux qui combattent et ceux qui travaillent** » / HM : phrase identique mot pour mot.
  - HF : « **La croisée d'ogives, l'arc-brisé et l'arc-boutant permettent d'élever des** édifices lumineux : Notre-Dame de Paris, commencée en 1163 » / HM : « **la croisée d'ogives, l'arc brisé et l'arc-boutant permettent d'élever des** cathédrales de plus en plus hautes et lumineuses, comme Notre-Dame de Paris, commencée en 1163 ».
- **Problème** : dix-sept segments de huit mots communs. Et surtout, deux **contradictions de fait** au passage :
  1. **Cluny** : Histoire de France écrit « l'ordre de Cluny, **fondé en 909** » ; Histoire du monde écrit « **Cluny fondé en 910** ». Deux dates pour le même fait, dans la même application.
  2. **Cîteaux** : Histoire de France écrit « puis celui de Cîteaux **au XIIe siècle** » ; Histoire du monde écrit « **Cîteaux fondé en 1098** », c'est-à-dire au XI<sup>e</sup> siècle. La version d'Histoire de France est fausse : l'abbaye est fondée le 21 mars 1098.
- **Correction proposée** : harmoniser sur « Cluny, fondée en 909-910 » (la charte est datée de septembre 909 ou 910 selon les éditions ; le plus sûr est d'écrire « au début du X<sup>e</sup> siècle ») et « Cîteaux, fondée en 1098 » des deux côtés ; puis dégraisser l'un des deux cours pour supprimer la redite : à Histoire du monde le cadre européen, à Histoire de France ce qui est spécifiquement capétien.

### [GRAVE] Le même cours de cosmologie en Sciences de la vie et en Physique, phrases comprises
- **Où** : `cg-sciences-vie-06` « L'Univers, les étoiles et les galaxies » (SVT) et `cg-neuf-pc-univers-cosmologie` « L'univers et son histoire » (Physique & Chimie)
- **Texte** :
  - SVT : « **Le prêtre et physicien belge Georges Lemaître avait proposé** peu avant que l'Univers […] ait dû être extrêmement dense et chaud à l'origine. » / P&C : « **Le prêtre et physicien belge Georges Lemaître avait proposé** quelques années plus tôt l'idée d'un univers en expansion issu d'un atome primitif. »
  - SVT : « il y a **environ treize milliards huit cents millions d'années** » / P&C : « L'univers a **environ treize milliards huit cents millions d'années**. »
  - SVT : « Le Soleil s'y trouve dans un bras périphérique, **à quelque vingt-six mille années-lumière du centre** » / P&C : « **à environ vingt-six mille années-lumière de son centre** ».
  - SVT : « Andromède, se trouve à environ deux millions cinq cent mille années-lumière et se rapproche : les deux galaxies devraient **fusionner dans quelques milliards d'années** » / P&C : « **les deux fusionneront dans quelques milliards d'années** ».
- **Problème** : c'est le même cours, dans deux domaines. S'y ajoute une divergence de chiffre sur le contenu de la Voie lactée : SVT écrit « sans doute plus de cent milliards d'étoiles », P&C « quelques centaines de milliards d'étoiles », et la question `cg-libre-sciences-vie-1` « entre 100 et 400 milliards ».
- **Correction proposée** : supprimer `cg-sciences-vie-06` (voir plus haut : la notion entière est mal rangée) et harmoniser le chiffre sur « cent à quatre cents milliards d'étoiles ».

### [MOYEN] L'ONU et le droit international traités par quatre cours dans deux domaines
- **Où** : `cg-institutions-economie-13` « L'ONU et le droit international » et `cg-neuf-ie-onu-organisations` « L'ONU et les organisations internationales » (Institutions & Économie) ; `cg-neuf-hm-organisations-internationales` « Les organisations internationales et leur histoire » et `cg-neuf-hm3-droit-international` « Le droit international » (Histoire du monde)
- **Texte** : la section « Qu'est-ce que le droit international public ? » d'Institutions énumère « la coutume internationale, qui résulte d'une pratique constante acceptée comme étant le droit […] des normes impératives, dites jus cogens, auxquelles aucun accord ne peut déroger » ; le cours d'Histoire du monde reprend point pour point : « La coutume internationale est une pratique générale acceptée comme étant le droit […] Le jus cogens fait exception au consentement : ce sont des normes impératives auxquelles aucun traité ne peut déroger ». Les deux domaines redisent aussi les cinq membres permanents, le veto, la CIJ à La Haye, la distinction CIJ/CPI, l'OMS.
- **Problème** : quatre cours pour un même noyau, répartis entre deux domaines dont aucun n'est illégitime — mais l'apprenant les révise quatre fois. Les questions suivent : « Combien de membres permanents siègent au Conseil de sécurité ? » (HM) et « Combien de membres permanents compte le Conseil de sécurité de l'ONU ? » (IE) ; « Quel organisme siège à La Haye et juge les différends entre États ? » (HM) et « Quelle juridiction internationale siège à La Haye et juge les différends entre États ? » (IE), réponse identique.
- **Correction proposée** : à Histoire du monde la genèse (SDN, 1945, Bretton Woods, décolonisation et élargissement) ; à Institutions le fonctionnement actuel (organes, veto, droit international, juridictions). Supprimer de chaque côté ce qui relève de l'autre.

### [MOYEN] La Réforme protestante écrite deux fois, en Histoire du monde et en Mythologie & Religions
- **Où** : `cg-histoire-monde-21` « La Renaissance et les réformes religieuses en Europe » et `cg-mythologie-religions-16` « La Réforme protestante et les guerres de religion en Europe »
- **Texte** : HM — « Le pape Léon X publie la bulle Exsurge Domine en juin 1520, puis **excommunie Luther le 3 janvier 1521** ; la même année, à la diète de Worms, **l'empereur Charles Quint le met au ban de l'Empire. Protégé par le prince** de Saxe… » / M&R — « Le pape Léon X réagit par la bulle Exsurge Domine en 1520, puis **excommunie Luther le 3 janvier 1521** […] et **l'empereur Charles Quint le met au ban de l'Empire. Protégé par le prince** électeur Frédéric de Saxe… ». Même chose pour « **La Compagnie de Jésus, fondée par Ignace de Loyola** », le concile de Trente (séminaires, résidence des évêques), la paix d'Augsbourg de 1555 et les traités de Westphalie.
- **Problème** : douze segments de huit mots communs ; les deux cours racontent la même histoire. Aucune contradiction de fait relevée — les dates concordent — mais la redite est totale sur le cœur du récit.
- **Correction proposée** : garder à Mythologie & Religions ce qui est doctrinal (justification par la foi, Écriture seule, décisions dogmatiques de Trente) et à Histoire du monde ce qui est politique et militaire (Worms, ligue de Smalkalde, Augsbourg, guerre de Trente Ans, Westphalie).

### [MOYEN] Maxwell : 1864 dans un domaine, 1865 dans l'autre
- **Où** : `cg-libre-physique-chimie-3` (Physique & Chimie) et `cg-sciences-tech-05` § « Les ondes : radio et télévision » (Inventions & Technologie)
- **Texte** : P&C — « Quel physicien a unifié électricité, magnétisme et lumière dans une théorie du champ **présentée en 1864** ? », expl. « présente **en 1864** devant la Royal Society sa théorie dynamique du champ électromagnétique, publiée l'année suivante ».
  Inventions — « **En 1865**, le physicien écossais James Clerk Maxwell réunit l'électricité et le magnétisme dans un ensemble d'équations ».
- **Problème** : la date est enfermée dans l'énoncé du QCM de Physique. Un apprenant qui a lu le cours d'Inventions retiendra 1865 et hésitera. Les deux sont défendables (lecture devant la Royal Society en décembre 1864, publication en 1865), mais l'application ne le dit qu'une fois sur deux.
- **Correction proposée** : écrire des deux côtés « présentée en 1864 et publiée en 1865 ».

### [MOYEN] Villers-Cotterêts, l'ordonnance racontée six fois dans deux domaines
- **Où** : `cg-histoire-france-05`, `cg-neuf-hf-francois-premier`, `cg-neuf-hf4-renaissance-france` (deux sections) — Histoire de France ; `cg-langue-francaise-c01` et `cg-neuf-lf-noms-propres` — Langue française
- **Texte** : HF — « **L'ordonnance de Villers-Cotterêts**, promulguée en 1539, **impose l'usage du français** à la place du latin **dans les actes de justice** et rend obligatoire la tenue des registres de baptêmes ». LF — « En 1539, **l'ordonnance de Villers-Cotterêts impose le français dans les actes de justice** ». Et encore : « L'ordonnance de Villers-Cotterêts, en 1539, impose la tenue des registres de baptême » (`cg-neuf-lf-noms-propres`).
- **Problème** : six occurrences du même fait, dont deux dans un domaine différent de celui où on l'attendrait. Aucune divergence factuelle : c'est une redite pure.
- **Correction proposée** : la garder en Histoire de France (règne de François Ier) et n'en laisser en Langue française qu'une mention d'une phrase dans le cours d'histoire de la langue, sans question dédiée.

### [GRAVE] La naissance de la microbiologie racontée deux fois, en SVT et en Inventions & Technologie
- **Où** : `cg-sciences-vie-07` « Microbes, maladies et immunité » (SVT) et `cg-sciences-tech-03` « Les grandes découvertes médicales » (Inventions & Technologie)
- **Texte** : SVT — « Le médecin allemand Robert Koch identifie de son côté les bactéries responsables de **la tuberculose en 1882 et du choléra en 1883, et** formule **des critères rigoureux pour attribuer une maladie à un germe** précis. » / Inventions — « L'Allemand Robert Koch identifie ensuite les bactéries responsables du charbon, de **la tuberculose en 1882 et du choléra en 1883, et** énonce **des critères rigoureux pour attribuer une maladie à un germe**. »
  Les deux racontent aussi, dans le même ordre, Pasteur et les ballons à col de cygne, Semmelweis et le lavage des mains en 1847, Lister et l'antisepsie.
- **Problème** : sept segments de huit mots strictement identiques ; c'est le même paragraphe recopié d'un domaine à l'autre.
- **Correction proposée** : garder le récit complet en Inventions & Technologie (histoire des techniques médicales) et réduire la section SVT au mécanisme biologique (théorie microbienne, immunité), sans reprendre la chronologie des découvreurs.

### [GRAVE] Les lois Ferry écrites mot pour mot dans deux domaines, et posées en question dans un troisième
- **Où** : `cg-histoire-france-07` « La IIIe République (1870-1940) » (Histoire de France), `cg-institutions-economie-15` « L'école et le système éducatif français » (Institutions & Économie), et `cg-neuf-lf-lecture-illettrisme` (Langue française)
- **Texte** : IE — « **La loi du 16 juin 1881 rend l'enseignement primaire public gratuit**, en supprimant les frais de scolarité […] **La loi du 28 mars 1882** rend l'instruction primaire **obligatoire pour les enfants de six à treize ans** et laïcise les programmes : l'enseignement religieux y est remplacé par une **instruction morale et civique** […] **La loi Goblet** du 30 octobre **1886** ».
  HF — « **la loi du 16 juin 1881 rend l'enseignement primaire public gratuit**, et celle **du 28 mars 1882** le rend **obligatoire de six à treize ans** et laïque, l'instruction religieuse étant remplacée par une **instruction morale et civique** ; **la loi Goblet de 1886** laïcise ensuite le personnel ».
  Langue française — question « Quelles lois rendent l'école primaire gratuite, laïque et obligatoire en France ? » → « Les lois Ferry de 1881 et 1882 ».
- **Problème** : dix segments de huit mots communs entre les deux cours ; la même connaissance est en outre interrogée dans un troisième domaine. Aucune contradiction de fait (les deux versions donnent bien 1881 pour la gratuité et 1882 pour l'obligation et la laïcité), mais c'est trois fois la même leçon.
- **Correction proposée** : le récit détaillé revient à Institutions & Économie (le cours porte sur l'école) ; Histoire de France peut se contenter d'une phrase renvoyant aux lois scolaires parmi les grandes lois républicaines ; supprimer la question de Langue française.

### [MOYEN] L'index glycémique expliqué deux fois — et pas avec le même nom
- **Où** : `cg-neuf-sv3-alimentation-sante` « Épidémiologie de l'alimentation » (SVT) et `cg-neuf-ga3-alimentation-sante` « Nutriments et repères nutritionnels » (Gastronomie & Art de vivre)
- **Texte** : SVT — « L'**index** glycémique mesure la vitesse à laquelle un aliment élève la glycémie, **par rapport à une référence. Il nuance la** distinction entre sucres lents et rapides […] **une purée de pomme de terre élève la glycémie plus vite** qu'un sucre de table […] un indicateur utile mais qui **ne s'applique pas à un aliment isolé de son repas**. »
  Gastronomie — « L'**indice** glycémique mesure la vitesse d'élévation de la glycémie […] **par rapport à une référence. Il nuance la** vieille opposition entre sucres lents et sucres rapides […] **une purée de pomme de terre élève la glycémie plus vite** que du sucre de table. Il **ne s'applique** cependant **pas à un aliment isolé de son repas** ».
- **Problème** : même paragraphe, même exemple, même réserve finale — et deux appellations différentes du même indicateur (« index » / « indice »), ce qui suffit à faire douter un apprenant.
- **Correction proposée** : ne garder qu'une des deux versions (celle de Gastronomie, dans un cours de repères nutritionnels) et fixer le terme : « l'indice glycémique (souvent appelé index glycémique) ».

### [MOYEN] Les institutions de la Ve République dites deux fois, en Histoire de France et en Institutions
- **Où** : `cg-histoire-france-14` « La Ve République, de 1958 à nos jours » et `cg-institutions-economie-c01` « Les institutions de la Ve République »
- **Texte** : les deux écrivent « **Le gouvernement, dirigé par le Premier ministre, détermine et conduit la politique de la nation** » (citation de l'article 20, admissible) mais aussi, mot pour mot, « la question prioritaire de constitutionnalité **permet à tout justiciable de contester une loi déjà promulguée** ». S'y ajoutent, des deux côtés, les pouvoirs propres du président, l'article 16, l'article 49-3, le Conseil constitutionnel.
- **Problème** : onze segments de huit mots communs. La QPC est par ailleurs expliquée quatre fois dans l'application : deux cours et deux questions (`cg-institutions-economie-01`, `cg-neuf-ie-justice-france`, `cg-neuf-hf2-cinquieme-republique`, `cg-histoire-france-14`).
- **Correction proposée** : à Histoire de France la chronologie politique (1958, 1962, 1968, alternances, cohabitations, révisions) ; à Institutions le fonctionnement du régime. Une seule question sur la QPC, en Institutions.

### [MINEUR] L'umami expliqué dans deux domaines
- **Où** : `cg-neuf-pc3-chimie-alimentaire` (Physique & Chimie) et `cg-neuf-ga3-cuisines-asie` (Gastronomie & Art de vivre)
- **Texte** : P&C — « l'umami, **cinquième saveur** reconnue par la physiologie du goût **aux côtés du sucré, du salé, de l'acide et de l'amer** » / Gastronomie — « identifia l'umami comme **cinquième saveur** fondamentale, **aux côtés du sucré, du salé, de l'acide et de l'amer** ».
- **Problème** : la même définition, à la virgule près, dans deux domaines. Les deux cours l'abordent toutefois par des angles distincts (le glutamate comme additif ; le dashi et la découverte de 1908), ce qui rend la redite tolérable.
- **Correction proposée** : garder les deux sections mais supprimer d'un des deux la définition littérale de la cinquième saveur.

### [GRAVE] L'eau : sept cours dans quatre domaines, avec trois redites identifiées
- **Où** : Sciences de la vie & Terre — `cg-neuf-sv-eau-cycle`, `cg-neuf-sv2-eau-potable`, `cg-neuf-sv3-eau-corps` ; Géographie — `cg-geographie-13` « L'eau douce, une ressource stratégique », `cg-neuf-geo3-eau-conflits` ; Physique & Chimie — `cg-neuf-pc3-chimie-eau`, et `cg-physique-chimie-03` ; Inventions & Technologie — `cg-neuf-st3-eau-technologies`
- **Texte** — trois recoupements lus et vérifiés :
  1. **Le cycle de l'eau**, écrit deux fois. SVT : « Le cycle de l'eau comprend quatre grandes étapes : évaporation, condensation, précipitation, ruissellement […] L'évapotranspiration réunit l'évaporation depuis le sol et la transpiration des plantes ». Géographie, § « Le cycle de l'eau » : « l'eau des océans, des lacs et des sols s'évapore, tandis que les plantes rejettent de la vapeur par leurs feuilles : la combinaison des deux processus s'appelle l'évapotranspiration […] La vapeur s'élève, se refroidit […] se condense […] L'eau retombe ensuite sous forme de précipitations […] Une partie ruisselle ». Les deux donnent aussi le même chiffre : 97 % d'eau salée (Géo : « 97,25 pour cent ») et 70 % des prélèvements pour l'agriculture.
  2. **La glace qui flotte**, écrite deux fois et posée en question deux fois. SVT : « La glace flotte parce qu'**elle est moins dense que l'eau liquide : cette anomalie**, rare parmi les corps purs, tient à la structure ouverte des liaisons hydrogène […] les lacs gèlent en surface et non en profondeur, ce qui permet à la vie d'y subsister. » P&C `cg-neuf-pc3-chimie-eau` : « en gelant, ses liaisons hydrogène imposent une structure hexagonale ouverte […] la glace est donc moins dense — elle flotte […] Un lac gèle par le haut, et la couche de glace isole l'eau du dessous, ce qui permet à la vie aquatique de passer l'hiver ». Questions jumelles : « Pourquoi la glace flotte-t-elle sur l'eau ? » (SVT `cg-neuf-sv-eau-cycle`) et « Pourquoi la glace flotte-t-elle ? » (P&C `cg-neuf-pc3-chimie-eau`). Le fait est en outre repris par `cg-physique-chimie-03`.
  3. **L'eau dure et la station d'épuration**, écrites deux fois. SVT : « Une eau dure est riche en calcium et magnésium : sans danger pour la santé, elle entartre les canalisations. » P&C : « La dureté de l'eau est sa teneur en ions calcium et magnésium […] Une eau dure n'est pas malsaine […] elle dépose du tartre. » Et : SVT « Qu'est-ce qu'une station d'épuration ? » → « Une installation traitant les eaux usées avant rejet dans le milieu » ↔ Inventions « Qu'est-ce qu'une station d'épuration à boues activées ? » → « Un traitement biologique aéré dégradant la matière organique », les deux cours décrivant la même chaîne (dégrillage, décantation, traitement biologique par bactéries, boues).
- **Problème** : c'est le cas d'école annoncé — l'eau traitée en sciences de la vie **et** en physique-chimie **et** en géographie **et** en technologie, avec les mêmes explications. Aucune contradiction chiffrée relevée, mais une redondance massive.
- **Correction proposée** : répartir explicitement — le cycle et la ressource à Géographie ; la molécule, la densité de la glace et la dureté à Physique & Chimie ; l'eau dans l'organisme et la microbiologie de l'eau à SVT ; les procédés (fuites, réutilisation, boues, traitement quaternaire) à Inventions & Technologie. Supprimer de SVT la section « Propriétés et usages » de `cg-neuf-sv-eau-cycle` et de Géographie la section « Le cycle de l'eau » de `cg-geographie-13`, dont le contenu existe déjà ailleurs.

## Ce que la seconde passe a ajouté
(passe 2 non commencée)

## Ce qui est sain
(à compléter en fin de lecture)
