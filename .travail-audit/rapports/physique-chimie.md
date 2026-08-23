# Physique & Chimie

> ÉTAT : interrompu. Fichiers lus : `prisma/seed/culture-g/physique-chimie.ts`, `prisma/seed/culture-g/physique-chimie-2.ts`, `prisma/seed/culture-g/physique-chimie-3.ts`, `prisma/seed/culture-g/cours/physique-chimie.ts` (intégralité), `heritage/culture-g/data/physique-chimie.json` (57 questions + 3 cours), `heritage/culture-g/data/lecons/physique-chimie/01.json`, `02.json`, `03.json`. Reste à lire : `heritage/culture-g/data/lecons/physique-chimie/04.json` à `17.json` (14 leçons, 70 sections, ~70 questions de quiz). Passe 1 seulement — la passe 2 n'a pas été faite.

## Ce que j'ai lu

- `prisma/seed/culture-g/physique-chimie.ts` — 13 notions, **127 questions**, lues une à une.
- `prisma/seed/culture-g/physique-chimie-2.ts` — 20 notions, **200 questions**.
- `prisma/seed/culture-g/physique-chimie-3.ts` — 19 notions, **190 questions**.
- `prisma/seed/culture-g/cours/physique-chimie.ts` — **44 cours**, environ 160 sections, lus intégralement.
- `heritage/culture-g/data/physique-chimie.json` — **57 questions** et **3 cours** de 5 sections.
- `heritage/culture-g/data/lecons/physique-chimie/01–03.json` — **3 leçons**, 15 sections, 15 questions de quiz.

Soit **574 questions du seed + 57 questions du cahier + 15 questions de quiz** et **44 + 3 + 3 = 50 cours** réellement parcourus. Il reste 14 leçons du cahier non lues.

**Note de méthode** : j'ai d'abord soupçonné une faute grave — la bonne réponse est au rang 0 pour les 517 questions des trois fichiers de seed. Vérification faite, `src/modules/kinds/melange.ts` permute les propositions de façon déterministe au moment du seed, précisément pour corriger ce défaut. **Ce n'est donc pas un constat**, et je le signale pour qu'un relecteur ultérieur ne le rouvre pas.

## Constats

### [GRAVE] Température d'ébullition de l'eau en altitude : chiffre faux
- **Où** : `prisma/seed/culture-g/physique-chimie.ts` — notion `pc-etats-matiere`, question « À quelle température l'eau bout-elle au niveau de la mer ? »
- **Texte** : « En altitude, la pression plus faible abaisse ce point : environ quatre-vingt-cinq degrés à trois mille mètres. »
- **Problème** : à 3 000 m l'eau bout vers **90 °C**, pas 85 °C. 85 °C correspond à environ 4 500–4 800 m. Le cahier d'origine dit d'ailleurs le contraire au bon endroit : `heritage/culture-g/data/physique-chimie.json` (question « À quelle température l'eau pure bout-elle au niveau de la mer ? ») écrit « au sommet du mont Blanc, l'eau bout vers 85 °C », et la leçon `03.json` écrit « environ 85 degrés Celsius à 4 000 mètres ». Le seed est donc seul à donner 3 000 m, et il a tort.
- **Correction proposée** : « En altitude, la pression plus faible abaisse ce point : environ quatre-vingt-dix degrés à trois mille mètres, et quatre-vingt-cinq au sommet du mont Blanc. »

### [GRAVE] Doublon franc — E = mc² posé deux fois
- **Où** : `physique-chimie.ts` — `pc-energie` ; et `physique-chimie-2.ts` — `pc2-relativite`
- **Texte** : (1) « Que signifie la relation E = mc² ? » → « Masse et énergie sont deux formes d'une même grandeur » / explication « Une très faible perte de masse libère une énergie considérable : c'est le principe des réactions nucléaires. » — (2) « Que signifie l'équation E = mc² ? » → « La masse est une forme d'énergie » / explication « Une infime perte de masse libère une énergie considérable, principe des réactions nucléaires. »
- **Problème** : même question, même réponse, même explication à la synonymie près. Le validateur ne les attrape pas parce que « relation » ≠ « équation ». Une troisième occurrence existe dans le cahier (`heritage/.../physique-chimie.json`, « Que signifie la célèbre formule E = mc² ? »), tolérable puisqu'il s'agit d'un autre corpus, mais les deux du seed font doublon entre elles.
- **Correction proposée** : supprimer celle de `pc-energie` et la remplacer par une question sur la conservation de l'énergie mécanique, ou remplacer celle de `pc2-relativite` par la réciproque, que le cours enseigne et qu'aucune question ne teste : « Que devient la masse d'un corps auquel on donne de l'énergie ? » → « Elle augmente ».

### [GRAVE] Doublon franc — la période radioactive définie deux fois
- **Où** : `physique-chimie.ts` — `pc-nucleaire-radioactivite` ; et `physique-chimie-2.ts` — `pc2-energie-nucleaire-fonctionnement`
- **Texte** : (1) « Qu'est-ce qu'une période radioactive ou demi-vie ? » → « La durée au bout de laquelle la moitié des noyaux se sont désintégrés » — (2) « Qu'est-ce que la période radioactive d'un déchet ? » → « Le temps au bout duquel la moitié des noyaux se sont désintégrés »
- **Problème** : définition identique mot pour mot ou presque, distracteurs de même nature. Le simple ajout de « d'un déchet » ne change rien à ce qu'on apprend.
- **Correction proposée** : remplacer la seconde par une question sur ce que le cours dit et qui n'est nulle part testé : « Pourquoi certains déchets nucléaires posent-ils un problème inhabituel de conception ? » → « Leur sûreté doit être garantie sur des durées supérieures à celles de toute institution humaine ».

### [GRAVE] Doublon franc — l'antioxydant alimentaire défini deux fois
- **Où** : `physique-chimie.ts` — `pc-chimie-quotidien` ; et `physique-chimie-3.ts` — `pc3-chimie-alimentaire`
- **Texte** : (1) « Qu'est-ce qu'un antioxydant alimentaire ? » → « Une substance qui ralentit l'oxydation des aliments », distracteur « Un conservateur antibactérien » — (2) « Qu'est-ce qu'un antioxydant en alimentation ? » → « Une substance ralentissant l'oxydation des aliments », distracteur « Un conservateur antibactérien »
- **Problème** : même énoncé à un mot près, même réponse, même distracteur principal. Seules les explications diffèrent (vitamine C d'un côté, vitamines C et E de l'autre).
- **Correction proposée** : supprimer celle de `pc3-chimie-alimentaire` et la remplacer par le mécanisme, que le cours de cette notion développe et qu'aucune question ne teste : « Comment un antioxydant ralentit-il le rancissement ? » → « Il capte les radicaux libres avant qu'ils ne propagent la réaction en chaîne ».

### [GRAVE] Doublon franc — l'aurore polaire, deux fois en question et deux fois en cours
- **Où** : `physique-chimie-2.ts` — `pc2-magnetisme` ; et `physique-chimie-3.ts` — `pc3-couleurs-lumiere-nature`. Les cours correspondants doublonnent aussi : `cours/physique-chimie.ts`, `pc2-magnetisme` § « Le champ de la Terre », et `pc3-couleurs-lumiere-nature` § « Émettre au lieu de dévier ».
- **Texte** : (1) « Qu'est-ce que l'aurore polaire ? » → « Une émission lumineuse due aux particules solaires guidées par le champ magnétique », distracteur « Un reflet de la banquise » — (2) « Qu'est-ce qu'une aurore polaire ? » → « Une émission lumineuse due aux particules solaires excitant les gaz atmosphériques », distracteur « Une réflexion sur la banquise ». Côté cours : « verte pour l'oxygène à basse altitude, rouge plus haut, bleue ou violette pour l'azote » contre « vert et rouge pour l'oxygène selon l'altitude, bleu et violet pour l'azote ».
- **Problème** : la seule différence entre les deux questions est un article. Les deux cours redisent le même paragraphe.
- **Correction proposée** : garder l'aurore dans `pc3-couleurs-lumiere-nature` (phénomènes lumineux naturels, c'est sa place) ; dans `pc2-magnetisme`, remplacer la question par « Que devient le vent solaire en arrivant sur la Terre ? » → « Il est dévié par le champ magnétique, qui en canalise une partie vers les pôles », et réduire le paragraphe du cours de `pc2-magnetisme` à cette seule fonction de bouclier, en renvoyant l'émission lumineuse à l'autre notion.

### [GRAVE] Doublon franc — sensibilité et étalonnage, questions ET phrase de cours réemployées
- **Où** : `physique-chimie-2.ts` — `pc2-mesure-precision` ; et `physique-chimie-3.ts` — `pc3-detection-mesure`. Cours : `cours/physique-chimie.ts`, `pc2-mesure-precision` § « Ce qu'on ne mesure pas directement » et `pc3-detection-mesure` § « Transformer une grandeur en signal ».
- **Texte** : questions — (1) « Qu'est-ce que la sensibilité d'un instrument ? » → « La variation de sa réponse pour une variation de la grandeur mesurée » / « Elle ne se confond ni avec la résolution ni avec la limite de détection. » — (2) « Qu'est-ce que la sensibilité d'un capteur ? » → « La variation de son signal pour une variation donnée de la grandeur mesurée » / « Elle ne garantit ni la justesse ni la fidélité de la mesure. » Cours — (1) « La sensibilité d'un instrument est la variation de sa réponse pour une variation donnée de la grandeur mesurée : c'est la pente de sa courbe d'étalonnage. » — (2) « La sensibilité d'un capteur est la variation de son signal pour une variation donnée de la grandeur mesurée — sa pente. »
- **Problème** : la même phrase, transposée. S'y ajoute le même doublon sur l'étalonnage : « Qu'est-ce que l'étalonnage d'un instrument ? » → « Sa comparaison à une référence connue pour corriger ses écarts » (pc2) contre « Qu'est-ce qu'un étalonnage périodique ? » → « Une vérification régulière par comparaison à une référence » (pc3). Deux notions distinctes enseignent donc deux fois la même chose avec les mêmes mots.
- **Correction proposée** : `pc2-mesure-precision` traite de métrologie générale, `pc3-detection-mesure` des capteurs concrets. Retirer de `pc3` les deux questions sensibilité/étalonnage et la phrase de cours correspondante, et les remplacer par ce que `pc3` seul peut apporter : le temps de réponse d'un capteur et l'influence de l'émissivité sur un thermomètre infrarouge, tous deux présents dans son cours et non testés.

### [GRAVE] Doublon interne — l'ozone troposphérique enseigné deux fois dans la même notion
- **Où** : `physique-chimie-3.ts` — `pc3-chimie-environnement`, questions 1 et 4
- **Texte** : Q1 « Qu'est-ce que l'ozone troposphérique ? » → « Un polluant secondaire formé sous l'effet du soleil sur d'autres polluants » / « Les pics surviennent par temps chaud et ensoleillé, en aval des zones urbaines. » — Q4 « Que produisent les composés organiques volatils en présence de soleil et d'oxydes d'azote ? » → « De l'ozone troposphérique » / « C'est pourquoi les pics d'ozone surviennent surtout par temps chaud et ensoleillé. »
- **Problème** : même fait, et surtout la même phrase d'explication à quelques mots près, à quatre questions d'intervalle dans la même notion. Un apprenant voit deux fois la même carte.
- **Correction proposée** : garder Q4 (qui nomme les précurseurs) et remplacer Q1 par le point vraiment contre-intuitif que le cours développe et qu'aucune question ne teste : « Pourquoi une baisse du trafic peut-elle faire monter l'ozone en centre-ville ? » → « Les oxydes d'azote y détruisent une partie de l'ozone ; moins d'oxydes d'azote, plus d'ozone résiduel ».

### [GRAVE] Traînée hydrodynamique : phrase auto-contradictoire
- **Où** : `physique-chimie-3.ts` — `pc3-physique-sport`, question « Qu'est-ce que la traînée hydrodynamique ? »
- **Texte** : « Elle est environ huit cents fois plus forte que celle de l'air à densité comparable. »
- **Problème** : la phrase se détruit elle-même. Le facteur 800 **vient précisément** de ce que l'eau est ~800 fois plus dense que l'air ; « à densité comparable » annule la raison invoquée et la rend fausse. Le cours de la même notion le dit correctement : « L'eau étant environ huit cents fois plus dense que l'air, elle domine tout ». La question contredit donc son propre cours.
- **Correction proposée** : « L'eau est environ huit cents fois plus dense que l'air : à vitesse égale, la traînée y est sans commune mesure. »

### [GRAVE] Chaleur latente de vaporisation : rapport numérique faux
- **Où** : `prisma/seed/culture-g/cours/physique-chimie.ts` — `pc2-thermodynamique`, § « Chauffer sans changer la température »
- **Texte** : « Il faut environ sept fois plus d'énergie pour vaporiser un gramme d'eau bouillante que pour l'amener de zéro à cent degrés. »
- **Problème** : 2 260 J/g pour la vaporisation contre 418 J/g pour le chauffage de 0 à 100 °C, soit un rapport de **5,4**, pas 7. La leçon du cahier `03.json` donne d'ailleurs les deux bons chiffres (334 kJ/kg et 2 260 kJ/kg), d'où l'on retrouve 5,4. Le chiffre est mémorisable et faux.
- **Correction proposée** : « Il faut environ cinq fois et demie plus d'énergie pour vaporiser un gramme d'eau bouillante que pour l'amener de zéro à cent degrés. »

### [GRAVE] Saut à la perche : progression des records surestimée du double
- **Où** : `cours/physique-chimie.ts` — `pc3-physique-sport`, § « Stocker l'énergie, la conserver »
- **Texte** : « Les records ont bondi d'environ un mètre cinquante en une décennie — la performance a changé de nature autant que de niveau. »
- **Problème** : le record du monde passe de 4,80 m (1960, perche métallique) à 5,44 m (1970, fibre de verre), soit **environ 65 cm**, et 75 cm si l'on va jusqu'à 1972. « Un mètre cinquante » double la réalité. L'argument reste vrai avec le bon chiffre.
- **Correction proposée** : « Les records ont gagné plus de soixante centimètres en une décennie — la performance a changé de nature autant que de niveau. »

### [GRAVE] Radioprotection : le cours dit deux principes, la question en dit trois
- **Où** : question dans `physique-chimie-3.ts` — `pc3-nucleaire-medecine` ; cours dans `cours/physique-chimie.ts` — `pc3-nucleaire-medecine`, § « Limiter l'exposition »
- **Texte** : question — « Qu'est-ce que la radioprotection ? » / explication « Elle repose sur trois principes : justification, optimisation et limitation. » Cours — « La radioprotection rassemble les mesures limitant l'exposition aux rayonnements ionisants. **Elle repose sur deux principes clairs.** » puis justification et ALARA.
- **Problème** : contradiction directe entre le cours et la question de la même notion. C'est la question qui a raison : le cadre réglementaire tient en trois principes, et le cours omet la limitation des doses (qui, elle, ne s'applique pas au patient — d'où probablement la confusion).
- **Correction proposée** : dans le cours, « Elle repose sur trois principes. » puis, après ALARA, ajouter : « Le principe de limitation, enfin, fixe des doses annuelles à ne pas dépasser ; il s'applique aux travailleurs et au public, jamais au patient, pour lequel c'est la justification qui décide. »

### [GRAVE] Transparence du verre : la cause donnée est fausse
- **Où** : `physique-chimie.ts` — `pc-materiaux`, question « Pourquoi le verre est-il transparent ? » ; et `cours/physique-chimie.ts` — `pc-materiaux`, § « Matériaux à propriétés singulières »
- **Texte** : réponse retenue — « Sa structure désordonnée n'absorbe pas la lumière visible ». Cours — « Le verre est transparent parce que sa structure désordonnée ne possède pas de niveaux d'énergie absorbant le visible ».
- **Problème** : le désordre n'est pas la cause. Le verre est transparent parce que sa bande interdite est trop large pour qu'un photon visible soit absorbé — et le quartz **cristallin**, parfaitement ordonné, est tout aussi transparent, ce qui suffit à réfuter l'explication. Le désordre explique seulement l'absence de diffusion aux joints de grains. La bonne raison figure d'ailleurs dans l'explication de la question elle-même (« faute de niveaux d'énergie disponibles »), qui contredit donc la proposition qu'elle est censée justifier.
- **Correction proposée** : réponse — « Aucun de ses électrons ne peut absorber un photon visible » ; cours — « Le verre est transparent parce qu'aucune transition électronique ne correspond à l'énergie des photons visibles : ils le traversent sans être arrêtés. Le désordre de sa structure n'y est pour rien — le quartz cristallin est tout aussi transparent ; il évite seulement la diffusion aux joints de grains d'une céramique. »

### [MOYEN] Fond diffus cosmologique : 1964 dans la question, 1965 dans le cours
- **Où** : `physique-chimie.ts` — `pc-univers-cosmologie` ; et `cours/physique-chimie.ts` — `pc-univers-cosmologie`, § « Le rayonnement fossile et l'inconnu »
- **Texte** : question — « Découvert par hasard en 1964 par Penzias et Wilson » ; cours — « Détecté par hasard en 1965 ».
- **Problème** : les deux dates circulent (détection 1964, publication 1965), mais le corpus doit choisir, et le cours devrait au moins nommer Penzias et Wilson comme la question le fait.
- **Correction proposée** : harmoniser sur « Détecté par hasard en 1964 par Penzias et Wilson, et publié l'année suivante ».

### [MOYEN] Épaisseur de la troposphère : deux chiffrages incompatibles
- **Où** : `physique-chimie-2.ts` — `pc2-air-atmosphere` ; et `cours/physique-chimie.ts` — `pc2-air-atmosphere`, § « Des couches et leurs rôles »
- **Texte** : question — « Elle s'étend jusqu'à environ huit kilomètres aux pôles et dix-huit à l'équateur. » ; cours — « Elle s'arrête vers dix à quinze kilomètres selon la latitude. »
- **Problème** : la question donne le bon encadrement (8 km aux pôles, 16–18 km à l'équateur) ; le cours le resserre à tort et ne recouvre pas les valeurs polaires.
- **Correction proposée** : cours — « Elle s'arrête vers huit kilomètres aux pôles et dix-huit à l'équateur. »

### [MOYEN] Étoile à neutrons : diamètre incohérent entre question et cours
- **Où** : `physique-chimie-3.ts` — `pc3-etoiles-vie` ; et `cours/physique-chimie.ts` — `pc3-etoiles-vie`, § « La fin des étoiles massives »
- **Texte** : question — « quelques kilomètres de diamètre pour une masse solaire » ; cours — « une sphère d'une vingtaine de kilomètres ».
- **Problème** : c'est le cours qui a raison (≈ 20 km de diamètre, 10 km de rayon). « Quelques kilomètres » est trop petit d'un facteur cinq environ.
- **Correction proposée** : question — « une vingtaine de kilomètres de diamètre pour une masse solaire ».

### [MOYEN] Mars Climate Orbiter : trois occurrences, deux coûts différents, une unité incohérente
- **Où** : question dans `physique-chimie.ts` — `pc-mesures-unites` ; cours `pc-mesures-unites` § « Estimer, et se tromper » ; cours `pc3-mesure-quantite` § « Vérifier par les unités »
- **Texte** : question — « Un logiciel fournissait des livres-force par seconde, l'autre attendait des newtons-seconde. » ; cours 1 — « une mission de plusieurs centaines de millions de dollars » ; cours 2 — « Cent vingt-cinq millions de dollars ».
- **Problème** : trois choses. (a) « livres-force **par** seconde » est dimensionnellement faux : la grandeur en cause est une impulsion, en livre-force·**seconde**, ce que la seconde moitié de la phrase écrit correctement — un contresens gênant dans une question qui porte justement sur les unités. (b) Deux cours donnent deux coûts incompatibles pour le même événement (125 M$ pour l'orbiteur, ~328 M$ pour le programme complet). (c) La même anecdote sert trois fois dans le corpus, dont deux cours voisins.
- **Correction proposée** : question — « Un logiciel fournissait des livres-force seconde, l'autre attendait des newtons seconde. » ; harmoniser les deux cours sur « cent vingt-cinq millions de dollars pour la sonde » ; et ne garder l'anecdote que dans `pc3-mesure-quantite`, en la remplaçant dans `pc-mesures-unites` par la dérive du prototype du kilogramme, déjà évoquée juste avant.

### [MOYEN] Micro-ondes : rapport de longueurs d'onde faux d'un facteur quatre
- **Où** : `cours/physique-chimie.ts` — `pc3-ondes-communication`, § « Chauffer, bloquer »
- **Texte** : « Ses trous, bien plus petits que la longueur d'onde de douze centimètres, sont opaques aux micro-ondes tout en laissant passer la lumière visible dont la longueur d'onde est un million de fois plus courte. »
- **Problème** : 12 cm rapporté à 500 nm donne **240 000**, pas un million. L'argument tient toujours, mais le chiffre est faux et il est mémorisable.
- **Correction proposée** : « … dont la longueur d'onde est quelques centaines de milliers de fois plus courte. »

### [MOYEN] Nombre de composés synthétisés : chiffre daté présenté comme actuel
- **Où** : `physique-chimie-3.ts` — `pc3-histoire-chimie`, question « Qu'est-ce que la chimie de synthèse a apporté au XXe siècle ? »
- **Texte** : « Plus de vingt millions de composés ont été synthétisés et décrits à ce jour. »
- **Problème** : le registre CAS a dépassé cent millions de substances dès 2015 et en compte aujourd'hui plus de deux cents millions. « Plus de vingt millions » n'est pas faux au sens littéral, mais c'est un chiffre d'une autre époque donné comme un état des lieux — exactement le cas « exact mais trompeur » que la consigne demande de signaler.
- **Correction proposée** : « Plus de deux cents millions de composés sont aujourd'hui enregistrés et décrits. »

### [MOYEN] Ordre de grandeur d'un atome : un distracteur trop proche de la bonne réponse
- **Où** : `physique-chimie-3.ts` — `pc3-mesure-quantite`, « Quel est l'ordre de grandeur de la taille d'un atome ? »
- **Texte** : bonne réponse « Environ un dixième de nanomètre » ; distracteur « Environ un nanomètre ».
- **Problème** : dans une notion qui définit l'ordre de grandeur comme « la puissance de dix la plus proche », proposer deux valeurs séparées par un seul facteur dix rend le distracteur défendable — les plus gros atomes approchent 0,5 nm de diamètre. La question se mord la queue.
- **Correction proposée** : remplacer le distracteur « Environ un nanomètre » par « Environ un millionième de millimètre » (soit un nanomètre exprimé autrement, donc écarté comme doublon) — ou mieux, par « Environ un femtomètre », qui est la taille du noyau et fait un leurre instructif.

### [MOYEN] Sievert : énoncé ambigu et distracteur mal formé
- **Où** : `physique-chimie.ts` — `pc-nucleaire-radioactivite`, « Quelle unité mesure la dose de rayonnement reçue par un organisme ? »
- **Texte** : bonne réponse « Le sievert » ; distracteur « Le gray seul ».
- **Problème** : deux choses. La « dose reçue » désigne en toute rigueur la dose **absorbée**, qui se mesure en grays ; c'est la dose **équivalente**, pondérée par la nocivité du rayonnement, qui se mesure en sieverts. L'énoncé laisse donc le gray défendable. Et le distracteur « Le gray seul » trahit l'embarras du rédacteur : l'ajout de « seul » est un artifice pour rendre fausse une proposition qui ne l'est pas tout à fait — le même procédé se retrouve ailleurs (« Le nickel seul », « L'étain seul », « La vapeur d'eau seule », « L'énergie du vide intergalactique connue et mesurée ») et signale au candidat attentif la proposition à écarter.
- **Correction proposée** : énoncé — « Quelle unité mesure l'effet biologique d'une dose de rayonnement ? » ; distracteur — « Le gray ».

### [MOYEN] Boussole : le cahier affirme ce que le seed donne pour faux
- **Où** : `heritage/culture-g/data/physique-chimie.json`, question « Que se passe-t-il quand on approche deux pôles nord de deux aimants ? » ; à comparer à `physique-chimie-2.ts` — `pc2-magnetisme`, « Où pointe l'aiguille d'une boussole ? »
- **Texte** : cahier — « C'est pourquoi l'aiguille aimantée d'une boussole s'oriente vers le nord géographique, qui correspond en réalité à un pôle sud magnétique. » ; seed — bonne réponse « Vers le pôle nord magnétique, distinct du pôle géographique », distracteur explicitement faux « Exactement vers le pôle Nord géographique ».
- **Problème** : la phrase du cahier est, telle quelle, ce que le seed enseigne comme erreur. Le cours du cahier (`Électricité, magnétisme et ondes`, § « Aimants et champ magnétique ») écrit d'ailleurs « s'oriente **approximativement** vers le nord géographique » — l'adverbe manque dans la question.
- **Correction proposée** : cahier — « C'est pourquoi l'aiguille aimantée d'une boussole s'oriente vers le pôle nord magnétique, voisin mais distinct du nord géographique, et qui est en réalité un pôle sud magnétique. »

### [MOYEN] Redite — la relativité générale comme courbure de l'espace-temps, deux fois
- **Où** : `physique-chimie.ts` — `pc-forces-mouvement` ; et `physique-chimie-2.ts` — `pc2-relativite`
- **Texte** : (1) « Qu'apporte la relativité générale d'Einstein en 1915 ? » → « La gravitation devient une déformation de l'espace-temps » — (2) « Que dit la relativité générale de la gravitation ? » → « Elle résulte de la courbure de l'espace-temps par la masse »
- **Problème** : « déformation » contre « courbure », c'est la seule différence. Moins flagrant que les doublons ci-dessus parce que la première clôt une notion sur Newton et sert de pont, mais l'apprenant répond deux fois la même chose.
- **Correction proposée** : dans `pc-forces-mouvement`, déplacer l'accent sur ce que Newton conserve : « Que deviennent les lois de Newton après 1915 ? » → « Elles restent une excellente approximation à faible vitesse et faible champ ».

### [MOYEN] Redite — le thermoplastique défini deux fois
- **Où** : `physique-chimie.ts` — `pc-chimie-quotidien` ; et `physique-chimie-2.ts` — `pc2-polymeres-plastiques`
- **Texte** : (1) « Qu'est-ce qu'un plastique thermoplastique ? » → « Un plastique qui ramollit à la chaleur et peut être refondu » / « Il est donc recyclable par fusion, contrairement aux thermodurcissables » — (2) « Quelle différence sépare un thermoplastique d'un thermodurcissable ? » → « Le premier peut être refondu, le second durcit définitivement » / « Seuls les thermoplastiques sont recyclables par fusion. »
- **Problème** : même contenu, même conclusion, formulations jumelles.
- **Correction proposée** : supprimer celle de `pc-chimie-quotidien` (la notion « chimie du quotidien » n'a pas besoin de la taxinomie des polymères, traitée en propre ailleurs) et la remplacer par une question sur les tensioactifs ou le bicarbonate, sujets déjà présents et sous-exploités dans cette notion.

### [MOYEN] Nombre de cellules du corps humain : la réponse et son explication ne donnent pas le même chiffre
- **Où** : `physique-chimie-3.ts` — `pc3-mesure-quantite` ; à rapprocher de `cours/physique-chimie.ts` — `pc3-mesure-quantite`, § « Quelques repères à connaître »
- **Texte** : réponse retenue « Environ dix mille milliards » ; explication « Les estimations récentes situent le nombre autour de trente mille milliards. » ; cours « de l'ordre de dix mille milliards de cellules ».
- **Problème** : l'explication corrige la réponse qu'elle est censée justifier. Les deux valeurs partagent le même ordre de grandeur (10¹³), ce qui sauve la question sur le fond, mais l'apprenant lit un chiffre et en mémorise un autre.
- **Correction proposée** : aligner sur l'estimation courante — réponse « Environ trente mille milliards », explication « Les travaux de référence donnent près de trois fois dix puissance treize cellules humaines, à peu près autant que de bactéries hébergées. », et corriger le cours de même.

### [MOYEN] Huit notions du domaine n'ont pas de cours
- **Où** : `prisma/seed/culture-g/cours/physique-chimie.ts` — 44 cours pour 52 notions
- **Texte** : sans cours — `pc-etats-matiere`, `pc-electricite`, `pc-forces-mouvement`, `pc-reactions-chimiques`, `pc-nucleaire-radioactivite`, `pc-chimie-quotidien`, `pc2-quantique`, `pc2-chimie-organique`.
- **Problème** : l'en-tête de `commun.ts` présente cet état comme délibéré et provisoire, ce n'est donc pas une faute. Je le consigne parce que le manque porte sur des notions centrales — l'électricité, les forces, les réactions chimiques, la quantique — et que six des huit sont dans le premier lot, le plus ancien. Les questions de ces notions ne peuvent être révisées qu'à partir de leurs explications.
- **Correction proposée** : rien à corriger ; à prioriser dans la rédaction des cours restants, en commençant par `pc2-quantique`, dont les questions (inégalités de Bell, décohérence, effet tunnel) sont les plus difficiles à tenir sans cours.

### [MINEUR] Fautes de langue relevées dans les cours
- **Où** : `cours/physique-chimie.ts`
- **Texte et corrections** :
  - `pc2-air-atmosphere`, § « Ce que respire une ville » : « des précipitations acidifiées par les oxydes de soufre et d'azote issus des combustions, **qui ont dépérir** des forêts entières » → « qui ont fait dépérir des forêts entières ».
  - `pc2-polymeres-plastiques`, § « Le mot « bio » et ses pièges » : « **Ce dit** ce qu'il devient, et rien sur son origine. » → « Cela dit ce qu'il devient, et rien sur son origine. »
  - `pc3-materiaux-nouveaux`, § « Des matériaux qui réagissent » : « avec une consommation quasi nulle une fois **le** état atteint » → « une fois l'état atteint ».

### [MINEUR] Deux énoncés mal construits
- **Où** : `physique-chimie-2.ts` — `pc2-optique` ; et `physique-chimie-3.ts` — `pc3-chimie-industrielle`
- **Texte** : « Qu'est-ce que la fibre optique exploite-t-elle ? » ; « Qu'est-ce que la chimie du chlore pose comme problème ? »
- **Problème** : double marque d'interrogation dans les deux cas — « qu'est-ce que » et l'inversion du sujet ne se cumulent pas.
- **Correction proposée** : « Quel phénomène la fibre optique exploite-t-elle ? » ; « Quel problème la chimie du chlore pose-t-elle ? »

### [MINEUR] Un `statement` qui n'est que la paraphrase de son titre
- **Où** : `physique-chimie-3.ts` — notion `pc3-mesure-quantite`
- **Texte** : titre « Estimer avant de calculer », statement « Savoir estimer avant de calculer. »
- **Problème** : la phrase de présentation ne dit rien de plus que le titre, alors que toutes les autres notions du lot annoncent un contenu (« Constellations, mouvements apparents, repérage », « Composants, semi-conducteurs, circuits »).
- **Correction proposée** : « Ordres de grandeur, problèmes de Fermi, analyse dimensionnelle : vérifier un résultat avant de le croire. »

### [MINEUR] Typographie et détails
- `cours/physique-chimie.ts` écrit tantôt `CO2` (`pc-astronomie-systeme`, `pc2-air-atmosphere`), tantôt `CO₂` (`pc2-chimie-verte`, `pc3-chimie-industrielle`, `pc3-energie-transport`). À unifier.
- Le visible est borné à « 400 à 800 nanomètres » dans `heritage/.../physique-chimie.json` (questions 40 et cours « Électricité, magnétisme et ondes ») et dans la leçon `02.json` ; la borne haute usuelle est 780 nm. Sans gravité, mais répété quatre fois.
- Le problème de Fermi canonique est situé à Chicago dans la question (`pc3-mesure-quantite`, « l'exemple canonique attribué à Enrico Fermi ») et à Paris dans le cours (« L'exemple classique : combien d'accordeurs de piano à Paris ? »). L'adaptation est légitime, mais le cours ne devrait pas l'appeler « classique » sans dire qu'il l'a transposé.
- `heritage/.../physique-chimie.json`, question sur Mendeleïev : « L'élément 101, le mendélévium, porte le nom de son inventeur. » — Mendeleïev n'a pas inventé l'élément 101. Écrire « porte son nom ».

## Ce que la seconde passe a ajouté

Rien : **la passe 2 n'a pas été effectuée**, la session ayant été interrompue en cours de première lecture. Tous les constats ci-dessus proviennent de la passe 1. Il faut considérer ce rapport comme incomplet, en particulier sur la fin des fichiers, là où la consigne prévient que l'attention baisse — j'ai lu `physique-chimie-3.ts` et la fin de `cours/physique-chimie.ts` d'une seule traite et sans relecture.

**Restent entièrement à auditer** : les quatorze leçons `heritage/culture-g/data/lecons/physique-chimie/04.json` à `17.json` (radioactivité, son, fluides, chimie organique, métaux, mélanges, machines simples, relativité, quantique, gravitation, électricité domestique, histoire des sciences, lasers), soit 70 sections de cours et environ 70 questions de quiz — le tiers du volume du domaine. Plusieurs de ces leçons recouvrent des notions du seed déjà auditées (relativité, quantique, métaux, électricité domestique, son, fluides) : c'est là qu'il faut s'attendre à trouver d'autres doublons et d'autres contradictions de chiffres, du type de ceux relevés ci-dessus.

## Ce qui est sain

Le cahier d'origine est la partie la plus solide : les 57 questions de `heritage/.../physique-chimie.json` et les trois cours généraux sont justes, bien dosés, avec des explications qui apprennent réellement quelque chose au-delà de la réponse (la convention du sens du courant fixée avant la découverte de l'électron, le mot de Lagrange sur Lavoisier, la maladie de Minamata pour le mercure), et leurs bonnes réponses sont réparties sur les quatre rangs. Les trois leçons lues (forces et mouvement, lumière et optique, changements d'état) sont d'un niveau homogène et j'y ai vérifié sans faute les chiffres testables : G, la constante des gaz parfaits, le point triple de l'eau, les chaleurs latentes, la prédiction de Neptune en 1846. Côté seed, les cours de `pc2-atome-structure`, `pc2-thermodynamique`, `pc2-metaux`, `pc2-chimie-analytique`, `pc2-air-atmosphere` et `pc3-physique-terre` sont franchement bons : ils expliquent un mécanisme au lieu de le nommer, ils écartent explicitement les fausses explications courantes (la portance par « la distance plus longue au-dessus », la fusion sous pression des patins, le pont de Tacoma prudemment qualifié de « mécanisme apparenté »), et j'ai contrôlé sans erreur une trentaine de dates et de valeurs — Abbe 1873, Pound-Rebka sur vingt-deux mètres, Curie du fer à 770 °C, Moho en 1909, période du carbone 14, angle de l'arc-en-ciel à quarante-deux degrés, halo à vingt-deux degrés.
