# Sciences de la vie & Terre

> ÉTAT : interrompu. Fichiers lus : `prisma/seed/culture-g/sciences-vie.ts`,
> `prisma/seed/culture-g/sciences-vie-2.ts`, `prisma/seed/culture-g/sciences-vie-3.ts`,
> `prisma/seed/culture-g/cours/sciences-vie.ts` (les 49 cours, intégralement),
> `heritage/culture-g/data/sciences-vie.json` (57 questions + les 3 cours du cahier),
> `heritage/culture-g/data/lecons/sciences-vie/01.json` à `04.json`.
> Reste à lire : `heritage/culture-g/data/lecons/sciences-vie/05.json` à `23.json`
> (19 leçons, soit 95 sections et 95 questions de quiz non auditées).
> **Passe 1 seulement** — la seconde passe n'a pas été faite.

## Ce que j'ai lu

- `prisma/seed/culture-g/sciences-vie.ts` — 13 notions, 128 questions, lues une à une.
- `prisma/seed/culture-g/sciences-vie-2.ts` — 20 notions, 198 questions.
- `prisma/seed/culture-g/sciences-vie-3.ts` — 19 notions, 189 questions.
  (l'en-tête du fichier annonce « vingt notions » : il y en a 19.)
- `prisma/seed/culture-g/cours/sciences-vie.ts` — 49 cours, 3 à 4 sections chacun,
  soit ~170 sections, lus intégralement.
- `heritage/culture-g/data/sciences-vie.json` — 57 questions du cahier + 3 cours
  (15 sections, 15 questions de quiz).
- `heritage/culture-g/data/lecons/sciences-vie/01–04.json` — 4 leçons sur 23,
  soit 20 sections et 20 questions de quiz.

**Total effectivement lu : 617 questions et 75 cours/leçons.**

Vérification préalable : les 515 questions des trois fichiers de seed portent toutes
`answerIndex = 0`. Ce n'est **pas** un défaut : `src/modules/contenu.ts` applique
`melangerPropositions()` au seed, avec une graine tirée du texte de la question. Le
rang 0 n'est donc jamais visible par l'apprenant. Je le note pour qu'un auditeur
suivant ne le signale pas à tort.

## Constats

### [GRAVE] L'hémoglobine fixe quatre O₂ par molécule, pas par atome de fer
- **Où** : `prisma/seed/culture-g/cours/sciences-vie.ts` — cours `sv2-respiration-circulation`, section « Le transport de l'oxygène »
- **Texte** : « Contenue dans les globules rouges, elle fixe quatre molécules d'oxygène par atome de fer »
- **Problème** : erreur de fait, et contradiction directe avec la question de la même
  notion, qui dit correctement : « Chaque molécule peut fixer quatre molécules de
  dioxygène grâce à ses atomes de fer. » Une hémoglobine porte quatre hèmes, donc
  quatre atomes de fer, et chaque atome de fer fixe **une** molécule de dioxygène :
  quatre au total par hémoglobine. Le cours multiplie le chiffre par quatre.
- **Correction proposée** : « elle fixe une molécule d'oxygène par atome de fer, soit
  quatre par molécule d'hémoglobine »

### [GRAVE] La carotte de Vostok ne remonte pas à huit cent mille ans
- **Où** : `prisma/seed/culture-g/sciences-vie-3.ts` — notion `sv3-terre-atmosphere-histoire`, question « Qu'est-ce qu'une carotte de glace ? »
- **Texte** : « Celle de Vostok, en Antarctique, remonte à plus de huit cent mille ans. »
- **Problème** : erreur de fait. La carotte de Vostok couvre environ 420 000 ans.
  C'est la carotte EPICA Dome C qui atteint ~800 000 ans. Le cours de la même notion
  dit d'ailleurs correctement « Les carottes antarctiques les plus profondes remontent
  à environ huit cent mille ans », sans nommer Vostok : la question contredit son cours.
- **Correction proposée** : « Les carottes antarctiques les plus profondes, comme celle
  d'EPICA Dome C, remontent à plus de huit cent mille ans. »

### [GRAVE] Le papillon de l'orchidée de Darwin : « quarante ans après sa mort »
- **Où** : `prisma/seed/culture-g/cours/sciences-vie.ts` — cours `sv2-evolution-mecanismes`, section « Comment naissent les espèces »
- **Texte** : « L'orchidée de Madagascar à long éperon, dont Darwin prédit qu'un
  papillon à trompe démesurée devait exister, en donne le cas le plus célèbre — le
  papillon fut découvert quarante ans après sa mort. »
- **Problème** : erreur de fait par glissement. Darwin formule la prédiction en 1862,
  meurt en 1882, et *Xanthopan morganii praedicta* est décrit en 1903 : soit quarante
  et un ans après la **prédiction**, mais seulement vingt et un ans après sa **mort**.
- **Correction proposée** : « le papillon fut découvert quarante ans après sa
  prédiction, et vingt ans après sa mort. »

### [GRAVE] Doublon franc : la question sur le dépistage organisé, deux fois à l'identique
- **Où** : `prisma/seed/culture-g/sciences-vie.ts` (`sv-sante-publique`) et
  `prisma/seed/culture-g/sciences-vie-3.ts` (`sv3-cancer`)
- **Texte** : « Qu'est-ce qu'un dépistage organisé ? » / « Un programme systématique
  proposé à une population cible » / « En France, il concerne notamment les cancers du
  sein, colorectal et du col de l'utérus. »
  contre « Qu'est-ce qu'un dépistage organisé du cancer ? » / « Un programme
  systématique proposé à une population cible » / « En France, il concerne les cancers
  du sein, colorectal et du col de l'utérus. »
- **Problème** : la bonne réponse est mot pour mot identique, l'explication l'est à un
  « notamment » près. Le validateur ne l'attrape pas parce que l'énoncé diffère de trois
  mots. C'est la même question posée deux fois.
- **Correction proposée** : supprimer la question de `sv3-cancer` et la remplacer par
  une question propre au dépistage du cancer, par exemple sur l'âge des populations
  cibles ou sur la double lecture des mammographies (le cours `sv3-cancer` la mentionne
  et aucune question ne l'exploite).

### [GRAVE] Doublon franc : le rétrocontrôle hormonal, deux fois
- **Où** : `sciences-vie.ts` (`sv-hormones`) et `sciences-vie-3.ts` (`sv3-hormones-reproduction`)
- **Texte** : « Qu'est-ce qu'un rétrocontrôle négatif ? » → « Le produit final freine sa
  propre production » contre « Qu'est-ce que le rétrocontrôle hormonal ? » → « Un
  mécanisme où l'hormone produite freine sa propre commande ».
- **Problème** : même notion, même définition, reformulée. Les deux cours répètent aussi
  la formule (« le produit final freine sa propre production » / « l'hormone produite
  freine sa propre commande »).
- **Correction proposée** : garder la question de `sv-hormones` et remplacer celle de
  `sv3-hormones-reproduction` par une question sur les tests dynamiques de stimulation
  ou de freinage, que son cours développe et qu'aucune question ne couvre.

### [GRAVE] Doublon franc : l'eutrophisation, deux fois
- **Où** : `sciences-vie-2.ts` (`sv2-ecosystemes`) et `sciences-vie-3.ts` (`sv3-eau-milieux`)
- **Texte** : « Qu'est-ce que l'eutrophisation ? » → « Un enrichissement excessif d'un
  milieu aquatique en nutriments » (expl. : « Nitrates et phosphates provoquent une
  prolifération d'algues, dont la décomposition asphyxie le milieu. ») contre
  « Qu'est-ce que l'eutrophisation d'un lac ? » → « Un enrichissement en nutriments
  provoquant proliférations d'algues et asphyxie » (expl. : « Les nitrates et phosphates
  d'origine agricole et domestique en sont les principaux moteurs. »)
- **Problème** : la restriction « d'un lac » ne change rien au contenu enseigné.
- **Correction proposée** : dans `sv3-eau-milieux`, remplacer par une question sur ce
  que son propre cours dit de spécifique et qui manque : le phosphore stocké dans les
  sédiments, qui rend l'eutrophisation d'un lac très difficile à inverser.

### [GRAVE] Doublon franc : la coévolution, deux fois
- **Où** : `sciences-vie-2.ts` (`sv2-evolution-mecanismes`) et `sciences-vie-3.ts` (`sv3-symbioses`)
- **Texte** : « Qu'est-ce que la coévolution ? » → « L'évolution réciproque de deux
  espèces en interaction » contre « Qu'est-ce que la coévolution dans une symbiose ? » →
  « Une évolution réciproque des partenaires au fil des générations ».
- **Correction proposée** : dans `sv3-symbioses`, remplacer par une question sur la
  spécificité figuier/guêpe du figuier, ou sur le passage de la symbiose à l'organite
  (mitochondries, chloroplastes) — deux points que son cours développe.

### [GRAVE] Doublon franc : la levure du pain, deux fois
- **Où** : `sciences-vie.ts` (`sv-microbiote`) et `sciences-vie-2.ts` (`sv2-champignons`)
- **Texte** : « Quel micro-organisme permet la fabrication du pain et de la bière ? » →
  « Une levure » contre « Quel champignon microscopique permet la fabrication du pain et
  du vin ? » → « La levure de boulanger ». Les deux explications nomment
  *Saccharomyces cerevisiae*.
- **Problème** : seule la boisson citée change. Le validateur passe à côté pour cette
  seule raison.
- **Correction proposée** : supprimer la question de `sv-microbiote` (la notion
  champignons est le lieu naturel de cette question) et la remplacer, dans
  `sv-microbiote`, par une question sur le rôle barrière du microbiote face aux
  pathogènes, absent des questions.

### [GRAVE] Doublon franc : l'orientation des oiseaux migrateurs, deux fois
- **Où** : `sciences-vie-2.ts` (`sv2-comportement-animal`) et `sciences-vie-3.ts` (`sv3-oiseaux`)
- **Texte** : « Comment les oiseaux migrateurs s'orientent-ils ? » → « Par une
  combinaison de repères solaires, stellaires et magnétiques » contre « Comment les
  oiseaux migrateurs s'orientent-ils la nuit ? » → « Notamment grâce aux étoiles et au
  champ magnétique ».
- **Correction proposée** : dans `sv3-oiseaux`, remplacer par une question sur la part
  innée de l'itinéraire (le cours `sv2-comportement-animal` cite le jeune coucou parti
  seul), ou sur la désorientation par l'éclairage artificiel, que le cours `sv3-oiseaux`
  développe et qu'aucune question n'exploite.

### [GRAVE] Doublon franc : la danse des abeilles, deux fois
- **Où** : `sciences-vie-2.ts` (`sv2-comportement-animal`) et `sciences-vie-3.ts` (`sv3-insectes`)
- **Texte** : « Que découvre Karl von Frisch sur les abeilles ? » → « Elles communiquent
  la position des fleurs par une danse » (expl. : « La direction et la durée de la danse
  codent l'angle par rapport au soleil et la distance. ») contre « Comment une abeille
  indique-t-elle la position d'une source de nourriture ? » → « Par une danse codant
  direction et distance » (expl. : « L'angle de la danse par rapport à la verticale code
  l'angle par rapport au soleil. »)
- **Problème** : même fait, même explication, deux formulations.
- **Correction proposée** : garder la version `sv2` (elle porte l'attribution
  historique) et remplacer celle de `sv3-insectes` par une question sur l'eusocialité ou
  sur la limite de taille imposée par la respiration trachéenne.

### [GRAVE] « Quel mammifère est le plus menacé en France métropolitaine ? » : deux réponses défendables
- **Où** : `prisma/seed/culture-g/sciences-vie-3.ts` — notion `sv3-mammiferes`
- **Texte** : énoncé « Quel mammifère est le plus menacé en France métropolitaine ? » ;
  bonne réponse « Le vison d'Europe, parmi les plus critiques » ; distracteurs « Le
  loup », « Le lynx », « L'ours brun » ; explication « L'ours des Pyrénées et le vison
  d'Europe figurent parmi les populations les plus réduites. »
- **Problème** : l'énoncé demande un superlatif, mais la réponse et l'explication
  refusent toutes deux de le trancher — et l'explication nomme explicitement l'ours,
  qui est proposé comme distracteur. Un apprenant qui coche « L'ours brun » a pour lui
  le texte même de l'explication. La question est insoluble telle quelle. S'y ajoute un
  indice de forme : la bonne réponse est la seule à porter une réserve (« parmi les plus
  critiques »), ce qui la signale.
- **Correction proposée** : reformuler l'énoncé en « Quel mammifère de France
  métropolitaine ne subsiste plus qu'à quelques dizaines d'individus, dans le
  Sud-Ouest ? », réponse « Le vison d'Europe », explication « Destruction des zones
  humides, mortalité routière et concurrence du vison d'Amérique échappé des élevages se
  cumulent. »

### [GRAVE] Contradiction interne : la part des coléoptères
- **Où** : `cours/sciences-vie.ts` — cours `sv-arbre-vivant` (« Compter et redessiner »)
  contre cours `sv3-insectes` (« Le groupe le plus divers ») et question
  `sv-arbre-vivant`
- **Texte** : « Le groupe qui compte le plus d'espèces décrites est de loin celui des
  insectes, avec environ un million d'espèces nommées […] Les coléoptères en forment à
  eux seuls le quart. » — contre « environ un million d'espèces décrites […] Les
  coléoptères […] avec près de quatre cent mille décrites » (cours `sv3-insectes`) et
  « Plus d'un million d'espèces décrites, dont environ quatre cent mille coléoptères »
  (question `sv-arbre-vivant`).
- **Problème** : 400 000 sur 1 000 000, ce sont deux cinquièmes, pas un quart. Le
  « quart » n'est juste que rapporté à l'ensemble des espèces **animales** décrites
  (~1,5 million), ce que dit d'ailleurs la question `sv3-insectes` (« près d'un quart de
  toutes les espèces animales connues »). Le cours `sv-arbre-vivant` applique le
  dénominateur de l'un au numérateur de l'autre.
- **Correction proposée** : « Les coléoptères en forment à eux seuls près de la moitié,
  soit environ quatre cent mille espèces — près d'un quart de toutes les espèces
  animales décrites. »

### [MOYEN] Le microbiote intestinal ne pèse pas deux kilos
- **Où** : `sciences-vie.ts` — `sv-microbiote` (accroche de la notion) et
  `cours/sciences-vie.ts` — cours `sv-microbiote`, section « Un organe de plus »
- **Texte** : « Le microbiote intestinal pèse environ deux kilos et compte autant de
  cellules que le corps entier. » / « Il pèse environ deux kilos et compte autant de
  cellules que le corps entier — le rapport longtemps cité de dix pour un a été révisé
  à la baisse »
- **Problème** : chiffre à vérifier, mais je le crois faux. La révision de Sender, Fuchs
  et Milo (2016) qui a fait passer le rapport de 10:1 à ~1:1 — celle-là même que le
  texte invoque — estime la masse des bactéries intestinales à environ 0,2 kg, pas 2 kg.
  Le texte retient la moitié révisée de l'estimation et garde l'autre moitié périmée
  dans la même phrase.
- **Correction proposée** : « Le microbiote intestinal pèse environ deux cents grammes
  et compte autant de cellules que le corps entier. » — à confirmer avant application.

### [MOYEN] La surface alvéolaire : « un court de tennis » contre soixante-dix mètres carrés
- **Où** : `sciences-vie-2.ts` — `sv2-respiration-circulation`, question « Où ont lieu
  les échanges gazeux dans les poumons ? » ; `cours/sciences-vie.ts` — même notion ;
  `heritage/culture-g/data/sciences-vie.json` — cours « Le corps humain »
- **Texte** : « Environ trois cents millions d'alvéoles offrent une surface d'échange
  comparable à un court de tennis. » — contre, dans le cours de la même notion :
  « donne une surface d'échange d'environ soixante-dix mètres carrés ».
- **Problème** : un court de tennis en simple fait environ 195 m², en double environ
  260 m². L'image, très répandue, contredit d'un facteur trois à quatre le chiffre que
  donne le cours attaché à la même notion. C'est le cas typique de l'approximation
  présentée comme un fait.
- **Correction proposée** : dans la question, « offrent une surface d'échange d'environ
  soixante-dix mètres carrés, celle d'un grand appartement. » — et aligner le cours du
  cahier, qui reprend la même image du terrain de tennis.

### [MOYEN] Les espèces invasives sur les îles : deuxième cause, ou première ?
- **Où** : `sciences-vie.ts` — `sv-especes-menacees`, question « Qu'est-ce qu'une espèce invasive ? »
- **Texte** : « Le frelon asiatique et la jussie en France en sont des exemples. Elles
  constituent la deuxième cause d'extinction sur les îles. »
- **Problème** : à vérifier, mais l'affirmation me paraît inversée. Sur les îles
  précisément — c'est le cadre que la phrase pose elle-même — les espèces introduites
  sont généralement données comme la **première** cause d'extinction documentée,
  notamment pour les oiseaux et les vertébrés terrestres. Le rang « deuxième » vaut à
  l'échelle mondiale, tous milieux confondus, derrière la destruction des habitats.
- **Correction proposée** : « Elles sont la première cause d'extinction documentée sur
  les îles, où la faune n'a pas évolué face à ces prédateurs ou concurrents. » — à
  confirmer avant application.

### [MOYEN] Le cœur de la baleine bleue : près de six cents kilos ?
- **Où** : `heritage/culture-g/data/sciences-vie.json` — question 7, « Quel est le plus grand animal ayant jamais vécu sur Terre ? »
- **Texte** : « Son cœur pèse à lui seul près de 600 kg, et sa langue autant qu'un
  éléphant. »
- **Problème** : à vérifier. Le seul cœur de baleine bleue qui ait jamais été pesé (Musée
  royal de l'Ontario, 2015) faisait environ 180 kg. Les chiffres de 400 à 600 kg
  circulent largement mais reposent sur des extrapolations anciennes.
- **Correction proposée** : « Son cœur pèse près de 200 kg, et sa langue autant qu'un
  éléphant. » — à confirmer avant application.

### [MOYEN] Espérance de vie en France : un chiffre daté, présenté sans date
- **Où** : `sciences-vie-3.ts` — `sv3-vieillissement`, question « Quelle est l'espérance
  de vie à la naissance en France ? » ; repris tel quel dans `cours/sciences-vie.ts`,
  cours `sv3-vieillissement`
- **Texte** : « Environ quatre-vingt-cinq ans pour les femmes et soixante-dix-neuf pour
  les hommes »
- **Problème** : le chiffre masculin correspond au milieu des années 2010 ; il a franchi
  les 80 ans depuis. Un chiffre qui bouge d'année en année et qui sert de bonne réponse
  à un QCM devrait porter sa date.
- **Correction proposée** : « Environ quatre-vingt-cinq ans et demi pour les femmes et
  quatre-vingts pour les hommes » et, dans l'explication, « chiffres 2023 ; l'écart entre
  les sexes se réduit lentement depuis les années 1990. »

### [MOYEN] L'écart espérance de vie / espérance de vie en bonne santé : « une dizaine d'années »
- **Où** : `sciences-vie-3.ts` — `sv3-vieillissement`, question « Pourquoi l'écart entre
  espérance de vie et espérance de vie en bonne santé se creuse-t-il ? »
- **Texte** : « En France, l'écart approche une dizaine d'années, ce qui pèse sur les
  politiques du grand âge. »
- **Problème** : à vérifier, mais l'ordre de grandeur me paraît trop bas. Avec
  l'indicateur européen d'années de vie en bonne santé (~64 ans à la naissance contre une
  espérance de vie de ~85 ans pour les femmes), l'écart est plutôt d'une vingtaine
  d'années. « Une dizaine » ne correspond à aucun des deux sexes.
- **Correction proposée** : « En France, l'écart dépasse quinze ans, et approche vingt
  ans chez les femmes. » — à confirmer avant application.

### [MOYEN] Réchauffement déjà constaté : « 1,1 à 1,2 °C », sans date
- **Où** : `heritage/culture-g/data/sciences-vie.json` — cours « La Terre et le système
  solaire », section « Atmosphère, climat et environnement »
- **Texte** : « Le GIEC, groupe d'experts créé en 1988, établit que la planète s'est
  déjà réchauffée d'environ 1,1 à 1,2 °C par rapport à la fin du XIXe siècle »
- **Problème** : chiffre du sixième rapport, arrêté en 2021. Il a augmenté depuis. Sans
  date, il sera lu comme la valeur actuelle et deviendra faux sans que rien ne le signale.
- **Correction proposée** : « […] s'était réchauffée d'environ 1,1 °C sur la période
  2011-2020 par rapport à la fin du XIXe siècle, et le réchauffement se poursuit. »

### [MOYEN] Assainissement : « environ un tiers » de la population mondiale
- **Où** : `sciences-vie-2.ts` — `sv2-eau-potable`, question « Quelle part de la
  population mondiale n'a pas accès à un assainissement géré en toute sécurité ? » ;
  repris dans le cours `sv2-eau-potable` (« Environ un tiers de la population mondiale »)
- **Problème** : à vérifier. Les suivis OMS/UNICEF donnent plutôt un chiffre autour de
  40-45 % (de l'ordre de 3,5 milliards de personnes) pour l'assainissement
  « géré en toute sécurité ». Le tiers correspondrait à un indicateur plus large. Comme
  c'est la bonne réponse d'un QCM, l'écart compte.
- **Correction proposée** : vérifier la définition retenue, puis soit corriger en
  « Environ quatre personnes sur dix », soit préciser l'indicateur exact dans
  l'explication. Il faudra ajuster les distracteurs en conséquence.

### [MOYEN] La lignine et les champignons du Carbonifère : la question affirme ce que son cours nuance
- **Où** : `sciences-vie-3.ts` — `sv3-terre-atmosphere-histoire`, question « Qu'est-ce
  que le charbon révèle sur le Carbonifère ? » contre `cours/sciences-vie.ts`, même
  notion, section « Sortir de l'eau, et enfouir du carbone »
- **Texte** : question — « Les champignons capables de dégrader la lignine n'étaient
  alors pas encore répandus. » ; cours — « Une explication longtemps avancée voulait que
  les champignons capables de dégrader la lignine n'aient pas encore existé ; les travaux
  récents nuancent, en attribuant un rôle majeur aux conditions géologiques »
- **Problème** : la question enseigne comme un fait ce que le cours de la même notion
  présente comme une hypothèse dépassée. L'apprenant qui lit les deux ne sait pas lequel
  croire ; celui qui ne lit que la question apprend une explication contestée.
- **Correction proposée** : « L'enfouissement massif tient surtout à des bassins
  s'affaissant sous un climat humide ; l'hypothèse d'une absence de champignons
  dégradeurs de lignine est aujourd'hui nuancée. »

### [MOYEN] Contradiction interne au cours du sommeil : sept à huit, ou sept à neuf heures ?
- **Où** : `cours/sciences-vie.ts` — cours `sv2-sommeil-rythmes`
- **Texte** : section « Ce qui se passe pendant la nuit » — « un nourrisson dort seize
  heures, un adolescent en réclame neuf, un adulte sept à huit » ; section « La dette » —
  « Un adulte a besoin en moyenne de sept à neuf heures de sommeil. »
- **Problème** : deux fourchettes différentes pour le même besoin, à deux sections
  d'écart dans le même cours. La question de la notion retient « Entre sept et neuf
  heures » : c'est la première section qui est isolée.
- **Correction proposée** : dans la section « Ce qui se passe pendant la nuit »,
  « un adulte sept à neuf ».

### [MOYEN] Chaîne hercynienne : trois cents ou trois cent cinquante millions d'années ?
- **Où** : `sciences-vie-3.ts` — `sv3-geologie-france`, question « Quelle chaîne de
  montagnes ancienne a laissé le Massif central et l'Armorique ? » contre
  `cours/sciences-vie.ts`, même notion, section « Des montagnes disparues »
- **Texte** : question — « Formée il y a environ trois cents millions d'années » ;
  cours — « La chaîne hercynienne, formée il y a environ trois cent cinquante millions
  d'années »
- **Problème** : les deux chiffres sont dans la fourchette de l'orogenèse hercynienne,
  mais l'apprenant qui révise la question puis lit le cours voit deux dates. Il faut
  choisir.
- **Correction proposée** : harmoniser sur « il y a environ trois cent cinquante
  millions d'années » des deux côtés, ou écrire « entre 360 et 300 millions d'années ».

### [MOYEN] Trisomie 21 : une attribution contestée présentée comme acquise
- **Où** : `sciences-vie-2.ts` — `sv2-genetique-maladies`, question « Qu'est-ce que la trisomie 21 ? »
- **Texte** : « Décrite par Jérôme Lejeune en 1959. Le risque augmente avec l'âge maternel. »
- **Problème** : la paternité de la découverte est disputée de longue date, le rôle de
  Marthe Gautier, qui a réalisé les cultures cellulaires et le comptage, étant
  aujourd'hui largement reconnu. Le module cite pourtant Rosalind Franklin dans une
  question voisine sur l'ADN : il applique deux standards à deux attributions
  comparables.
- **Correction proposée** : « Mise en évidence en 1959 dans l'équipe de Raymond Turpin,
  à partir des cultures cellulaires de Marthe Gautier, et publiée avec Jérôme Lejeune. »

### [MOYEN] Redites d'une notion à l'autre : quatre paires de questions très proches
- **Où** : `sciences-vie.ts`, `sciences-vie-2.ts`, `sciences-vie-3.ts`
- **Texte** :
  - `sv-microbiote` « Qu'est-ce qu'un probiotique ? » / `sv3-microbiote-sante`
    « Qu'est-ce qu'un prébiotique ? » — les deux explications sont l'image miroir l'une
    de l'autre (« Les prébiotiques, eux, sont les fibres qui nourrissent… » / « Le
    probiotique, lui, apporte des micro-organismes vivants. ») ;
  - `sv-immunite` « Qu'appelle-t-on immunité collective ? » / `sv3-immunologie-avancee`
    « Pourquoi le seuil d'immunité collective varie-t-il ? » — les deux explications
    donnent le même « environ quatre-vingt-quinze pour cent pour la rougeole » ;
  - `sv2-toxicologie` « Qu'est-ce qu'un perturbateur endocrinien ? » /
    `sv3-hormones-reproduction` « Pourquoi les perturbateurs endocriniens échappent-ils
    au raisonnement toxicologique classique ? » — même contenu, même formulation
    « agissent à très faibles doses » ;
  - `sv-microbiote` « Que suggèrent les recherches récentes sur l'axe intestin-cerveau ? »
    / `sv3-microbiote-sante` « Qu'est-ce que l'axe intestin-cerveau ? ».
- **Problème** : ce ne sont pas des doublons stricts — l'angle diffère à chaque fois —
  mais l'apprenant révise quatre fois le même contenu en croyant progresser.
- **Correction proposée** : dans chaque paire, resserrer la seconde question sur ce que
  son cours apporte en propre (pour le microbiote : la transplantation fécale et son
  unique indication validée ; pour l'immunité collective : la protection des personnes
  non vaccinables).

### [MOYEN] Trois notions de `sciences-vie-2.ts` n'ont aucun cours
- **Où** : `prisma/seed/culture-g/cours/sciences-vie.ts` — clés manquantes
- **Texte** : les notions `sv2-nutrition-digestion`, `sv2-oceans-vie` et
  `sv2-neurosciences` existent dans le fichier de questions mais n'ont pas d'entrée dans
  `COURS_SCIENCES_VIE`. Les 49 autres notions en ont une.
- **Problème** : trente questions sans cours attaché, dans un lot qui est par ailleurs
  intégralement couvert. Rien ne signale ce trou — `attacherCours()` n'échoue que dans
  l'autre sens, quand un cours n'a pas de notion.
- **Correction proposée** : écrire les trois cours manquants, ou consigner
  explicitement le reste à faire dans `prisma/seed/culture-g/RESUME.md`.

### [MINEUR] Cinq passages de cours portent des astérisques d'italique qui s'afficheront tels quels
- **Où** : `cours/sciences-vie.ts`, lignes ~364, ~371, ~503, ~765, ~927
- **Texte** : `*L'Origine des espèces*` (deux fois), `*circa diem*`,
  `*Clostridioides difficile*`, `*Rhizobium*`
- **Problème** : `commun.ts` le dit noir sur blanc — « Le texte est du texte brut :
  l'écran de lecture coupe les paragraphes sur les lignes vides et n'interprète aucune
  balise. » Le lecteur verra les astérisques.
- **Correction proposée** : retirer les astérisques, ou passer en guillemets français
  pour les titres d'ouvrage : « L'Origine des espèces ».

### [MINEUR] Accords fautifs
- **Où et texte** :
  - `sciences-vie.ts`, `sv-adn-heredite` : « Combien de bases différentes **compose**
    l'ADN ? » → *composent*.
  - `sciences-vie-3.ts`, `sv3-eau-milieux` : « Un cours d'eau où **domine** la truite et
    les salmonidés » → *dominent* (le cours de la même notion écrit correctement « où
    dominent la truite et les salmonidés »).
  - `cours/sciences-vie.ts`, `sv2-evolution-mecanismes` : « sans que cela **traduit** le
    moindre avantage » → *traduise* (« sans que » appelle le subjonctif).
  - `cours/sciences-vie.ts`, `sv2-ecosystemes` : « **Le** loutre de mer, le castor, le
    loup » → *La loutre de mer*.
  - `heritage/culture-g/data/sciences-vie.json`, question 3 : « **Dérulé**, l'ADN
    contenu dans une seule cellule humaine mesurerait environ deux mètres » → *Déroulé*.

### [MINEUR] Capitalisation incohérente des propositions, qui peut trahir la réponse
- **Où** : plusieurs questions des trois fichiers de seed
- **Texte** : `sv2-vegetaux-cultures` « D'où la pomme de terre est-elle originaire ? » →
  `["Des Andes", "d'Irlande", "d'Europe centrale", "d'Asie centrale"]` : la bonne réponse
  est la seule à commencer par une majuscule. Inversement `sv2-domestication` « Quel
  animal sauvage est l'ancêtre du bœuf domestique ? » → `["l'aurochs", "Le bison", "Le
  buffle", "Le yak"]` : la bonne réponse est la seule en minuscule. Même motif dans
  `sv3-oiseaux` (« l'autruche »), `sv3-mammiferes` (« l'éléphant d'Afrique »,
  « l'hippopotame »), `sv3-hormones-reproduction` (« l'hormone de croissance »),
  `sv-climat-mecanismes` (« Le GIEC » seul capitalisé face à « l'OMM seule », « le PNUE
  seul »).
- **Problème** : les propositions sont mélangées à l'affichage, donc la position ne
  trahit rien — mais la casse, elle, voyage avec le texte. Une proposition typographiée
  autrement que ses trois voisines se repère sans rien savoir du sujet.
- **Correction proposée** : capitaliser toutes les propositions de la même façon dans
  chaque question. Un test de cohérence typographique dans le validateur éviterait la
  récidive.

### [MINEUR] General Sherman : « dépasse mille cinq cents mètres cubes »
- **Où** : `sciences-vie.ts` — `sv-plantes-adaptations`, question sur le plus grand
  organisme vivant
- **Texte** : « Le General Sherman, en Californie, dépasse mille cinq cents mètres cubes
  de bois. »
- **Problème** : le volume de tronc généralement retenu est d'environ 1 487 m³ : il
  approche les 1 500 m³ sans les dépasser. Le cahier d'origine écrit d'ailleurs
  correctement « environ 1 500 m³ » (question 45 de `sciences-vie.json`).
- **Correction proposée** : « approche mille cinq cents mètres cubes de bois. »

### [MINEUR] Chiffres divergents d'un fichier à l'autre, sans conséquence grave mais visibles
- **Où et texte** :
  - Nombre de cellules du corps humain : « environ 30 000 milliards » (question 17 de
    `sciences-vie.json`) contre « environ trente-sept mille milliards » (leçon 01).
  - Part des insectes parmi les espèces animales : « environ deux espèces animales
    connues sur trois » (question 36 de `sciences-vie.json`) contre « Trois espèces
    animales connues sur quatre sont des insectes » (cours `sv3-insectes`).
  - Vitesse de l'influx nerveux : « environ 100 mètres par seconde » (cours du cahier
    « Le corps humain ») contre « Environ cent vingt mètres par seconde »
    (`sv2-neurosciences`).
  - Âge de l'endosymbiose : « environ deux milliards d'années » (leçon 01) contre
    « depuis un milliard et demi d'années » (cours `sv2-cellule`).
  - Découverte du système ABO : « en 1900 » (question 20 de `sciences-vie.json`) contre
    « Karl Landsteiner l'identifie en 1901 » (cours `sv2-respiration-circulation`).
- **Correction proposée** : harmoniser, en gardant partout la valeur la plus récente et
  en indiquant la fourchette quand elle est réelle (30 000 à 37 000 milliards de
  cellules ; 100 à 120 m/s).

### [MINEUR] Apostrophes droites dans tout le domaine
- **Où** : les quatre fichiers de seed, `heritage/…/sciences-vie.json` et les leçons
- **Problème** : aucune apostrophe courbe (’) dans le domaine. La consigne d'audit la
  demande. **Mais** j'ai vérifié : c'est le cas de **tous** les fichiers de
  `prisma/seed/culture-g/` sans exception — arts, cinéma, géographie, histoire,
  littérature, physique-chimie, etc. Ce n'est donc pas un défaut de ce domaine mais une
  convention du dépôt entier, à traiter globalement ou pas du tout. Je le signale pour
  mémoire et ne compte pas ce point comme un constat propre à Sciences de la vie.

## Ce que la seconde passe a ajouté

**Rien : la seconde passe n'a pas eu lieu.** J'ai été interrompu au milieu de la passe 1,
pendant la lecture des leçons du cahier (arrêté après la leçon 04 sur 23). Tous les
constats ci-dessus proviennent d'une lecture unique. L'expérience veut que la seconde
passe trouve surtout des choses en fin de corpus — c'est-à-dire précisément dans la
partie que je n'ai pas lue.

## Ce qui reste à faire

1. Lire les leçons `05.json` à `23.json` (19 fichiers, 95 sections, 95 questions de
   quiz) : volcans et tectonique, Univers, microbes, cerveau, nutrition, circulation,
   reproduction, fossiles, dinosaures, océans, insectes, biodiversité, biotechnologies,
   oiseaux, champignons, atmosphère, sommeil, sens, roches.
2. Vérifier sur le web les cinq constats que j'ai marqués « à confirmer » : masse du
   microbiote (2 kg), rang des espèces invasives sur les îles, masse du cœur de baleine
   bleue, écart espérance de vie / en bonne santé, part de la population sans
   assainissement sûr.
3. Faire la passe 2 sur l'ensemble.

## Ce qui est sain

Les 49 cours du seed sont, de loin, la meilleure part du domaine : ils expliquent des
mécanismes au lieu de réciter des définitions, ils préviennent activement les
contresens courants (l'artère définie par le sens du flux et non par l'oxygénation, le
mythe de l'acide lactique dans les courbatures, la classification du CIRC qui porte sur
la preuve et non sur l'ampleur du risque, le biais d'avance au diagnostic dans les taux
de survie à cinq ans), et ils osent dire ce qu'on ne sait pas — le cours
`sv3-microbiote-sante` sur les limites des études animales et le cours
`sv3-mesures-biologie` sur le biais de publication sont d'une honnêteté rare pour du
contenu de révision. Les 57 questions du cahier d'origine sont solides et bien datées.
Les erreurs de fait franches que j'ai trouvées sont peu nombreuses au regard du volume ;
le vrai problème du domaine est la redondance entre les trois lots, qui ont
manifestement été écrits sans que le suivant relise le précédent.
