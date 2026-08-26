# Sciences de la vie & Terre

> ÉTAT (reprise, relecteur 2) : **passe 1 terminée sur tout le périmètre.**
> Les cinq constats « à confirmer » sont tranchés (section dédiée en fin de rapport).
> **Passe 2 faite sur tout le périmètre.** Rapport complet.
> Fichiers lus : `prisma/seed/culture-g/sciences-vie.ts`,
> `prisma/seed/culture-g/sciences-vie-2.ts`, `prisma/seed/culture-g/sciences-vie-3.ts`,
> `prisma/seed/culture-g/cours/sciences-vie.ts` (les 49 cours, intégralement),
> `heritage/culture-g/data/sciences-vie.json` (57 questions + les 3 cours du cahier),
> `heritage/culture-g/data/lecons/sciences-vie/01.json` à `23.json` — **les 23 leçons sont lues**.
>
> *(ligne d'état d'origine, laissée pour mémoire : lecture arrêtée après `04.json`,
> passe 1 seulement.)*

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

### [MOYEN] ✅ Le microbiote intestinal ne pèse pas deux kilos
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
- **Fait** : chiffre confirmé par la section « tranchés » du rapport. Appliqué dans
  `sciences-vie.ts` (accroche `sv-microbiote`) et `cours/sciences-vie.ts` (cours `sv-microbiote`).

### [MOYEN] ✅ La surface alvéolaire : « un court de tennis » contre soixante-dix mètres carrés
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
- **Fait** : appliqué dans `sciences-vie-2.ts` (`sv2-respiration-circulation`) et dans le
  cours du cahier (`heritage/culture-g/data/sciences-vie.json`, section « La digestion et
  la respiration »).

### [MOYEN] ✅ Les espèces invasives sur les îles : deuxième cause, ou première ?
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
- **Fait** : confirmé par la section « tranchés » (IPBES 2023, 90 % des extinctions sur
  les îles). Appliqué dans `sciences-vie.ts` (`sv-especes-menacees`).

### [MOYEN] ✅ Le cœur de la baleine bleue : près de six cents kilos ?
- **Où** : `heritage/culture-g/data/sciences-vie.json` — question 7, « Quel est le plus grand animal ayant jamais vécu sur Terre ? »
- **Texte** : « Son cœur pèse à lui seul près de 600 kg, et sa langue autant qu'un
  éléphant. »
- **Problème** : à vérifier. Le seul cœur de baleine bleue qui ait jamais été pesé (Musée
  royal de l'Ontario, 2015) faisait environ 180 kg. Les chiffres de 400 à 600 kg
  circulent largement mais reposent sur des extrapolations anciennes.
- **Correction proposée** : « Son cœur pèse près de 200 kg, et sa langue autant qu'un
  éléphant. » — à confirmer avant application.
- **Fait** : déjà appliqué dans `heritage/culture-g/data/sciences-vie.json` (question 7 :
  « près de 180 kg »), en cohérence avec le constat GRAVE tranché sur la leçon 10. Rien à
  changer de plus.

### [MOYEN] ✅ Espérance de vie en France : un chiffre daté, présenté sans date
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
- **Fait** : appliqué tel quel dans `sciences-vie-3.ts` (`sv3-vieillissement`) et dans
  `cours/sciences-vie.ts` (cours `sv3-vieillissement`).

### [MOYEN] ✅ L'écart espérance de vie / espérance de vie en bonne santé : « une dizaine d'années »
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
- **Fait** : la version plus précise donnée dans la section « tranchés » (seize à
  vingt et un ans, chiffres 2023) a été appliquée dans `sciences-vie-3.ts`
  (`sv3-vieillissement`) plutôt que la première estimation.

### [MOYEN] ✅ Réchauffement déjà constaté : « 1,1 à 1,2 °C », sans date
- **Où** : `heritage/culture-g/data/sciences-vie.json` — cours « La Terre et le système
  solaire », section « Atmosphère, climat et environnement »
- **Texte** : « Le GIEC, groupe d'experts créé en 1988, établit que la planète s'est
  déjà réchauffée d'environ 1,1 à 1,2 °C par rapport à la fin du XIXe siècle »
- **Problème** : chiffre du sixième rapport, arrêté en 2021. Il a augmenté depuis. Sans
  date, il sera lu comme la valeur actuelle et deviendra faux sans que rien ne le signale.
- **Correction proposée** : « […] s'était réchauffée d'environ 1,1 °C sur la période
  2011-2020 par rapport à la fin du XIXe siècle, et le réchauffement se poursuit. »
- **Fait** : appliqué mot pour mot dans `heritage/culture-g/data/sciences-vie.json`
  (texte du cours et note du visuel « barres »).

### [MOYEN] ✅ Assainissement : « environ un tiers » de la population mondiale
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
- **Fait** : confirmé par la section « tranchés » (JMP 2023 : 3,4 milliards de
  personnes, deux sur cinq). Appliqué dans `sciences-vie-2.ts` (`sv2-eau-potable`, bonne
  réponse et explication) et dans `cours/sciences-vie.ts` (cours `sv2-eau-potable`).

### [MOYEN] ✅ La lignine et les champignons du Carbonifère : la question affirme ce que son cours nuance
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
- **Fait** : appliqué dans `sciences-vie-3.ts` (`sv3-terre-atmosphere-histoire`) — la
  question reprend maintenant la nuance déjà présente dans son cours.

### [MOYEN] ✅ Contradiction interne au cours du sommeil : sept à huit, ou sept à neuf heures ?
- **Où** : `cours/sciences-vie.ts` — cours `sv2-sommeil-rythmes`
- **Texte** : section « Ce qui se passe pendant la nuit » — « un nourrisson dort seize
  heures, un adolescent en réclame neuf, un adulte sept à huit » ; section « La dette » —
  « Un adulte a besoin en moyenne de sept à neuf heures de sommeil. »
- **Problème** : deux fourchettes différentes pour le même besoin, à deux sections
  d'écart dans le même cours. La question de la notion retient « Entre sept et neuf
  heures » : c'est la première section qui est isolée.
- **Correction proposée** : dans la section « Ce qui se passe pendant la nuit »,
  « un adulte sept à neuf ».
- **Fait** : appliqué dans `cours/sciences-vie.ts` (cours `sv2-sommeil-rythmes`).

### [MOYEN] ✅ Chaîne hercynienne : trois cents ou trois cent cinquante millions d'années ?
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
- **Fait** : appliqué dans `sciences-vie-3.ts` (`sv3-geologie-france`) ; le cours
  correspondant disait déjà « trois cent cinquante millions d'années ».

### [MOYEN] ✅ Trisomie 21 : une attribution contestée présentée comme acquise
- **Où** : `sciences-vie-2.ts` — `sv2-genetique-maladies`, question « Qu'est-ce que la trisomie 21 ? »
- **Texte** : « Décrite par Jérôme Lejeune en 1959. Le risque augmente avec l'âge maternel. »
- **Problème** : la paternité de la découverte est disputée de longue date, le rôle de
  Marthe Gautier, qui a réalisé les cultures cellulaires et le comptage, étant
  aujourd'hui largement reconnu. Le module cite pourtant Rosalind Franklin dans une
  question voisine sur l'ADN : il applique deux standards à deux attributions
  comparables.
- **Correction proposée** : « Mise en évidence en 1959 dans l'équipe de Raymond Turpin,
  à partir des cultures cellulaires de Marthe Gautier, et publiée avec Jérôme Lejeune. »
- **Fait** : appliqué mot pour mot dans `sciences-vie-2.ts` (`sv2-genetique-maladies`).

### [MOYEN] ✅ Redites d'une notion à l'autre : quatre paires de questions très proches
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
- **Fait** : les quatre paires ont été resserrées. `sv-immunite` porte maintenant sur la
  protection des personnes non vaccinables, `sv3-immunologie-avancee` sur le calcul du
  seuil par le R₀ (en cohérence avec la leçon 07, laissée inchangée). `sv3-hormones-reproduction`
  porte maintenant sur les fenêtres d'exposition plutôt que sur la dose faible déjà
  couverte par `sv2-toxicologie`. Dans `sv3-microbiote-sante`, la question sur le
  prébiotique porte maintenant sur ses sources alimentaires, et celle sur l'axe
  intestin-cerveau sur ses voies de communication (nerf vague), distincte de l'angle
  comportemental de `sv-microbiote`.

### [MOYEN] ✅ Trois notions de `sciences-vie-2.ts` n'ont aucun cours
- **Où** : `prisma/seed/culture-g/cours/sciences-vie.ts` — clés manquantes
- **Texte** : les notions `sv2-nutrition-digestion`, `sv2-oceans-vie` et
  `sv2-neurosciences` existent dans le fichier de questions mais n'ont pas d'entrée dans
  `COURS_SCIENCES_VIE`. Les 49 autres notions en ont une.
- **Problème** : trente questions sans cours attaché, dans un lot qui est par ailleurs
  intégralement couvert. Rien ne signale ce trou — `attacherCours()` n'échoue que dans
  l'autre sens, quand un cours n'a pas de notion.
- **Correction proposée** : écrire les trois cours manquants, ou consigner
  explicitement le reste à faire dans `prisma/seed/culture-g/RESUME.md`.
- **Fait** : les trois cours ont été écrits directement dans `cours/sciences-vie.ts`
  (`sv2-nutrition-digestion`, `sv2-oceans-vie`, `sv2-neurosciences`), avec des chiffres
  déjà corrects (surface intestinale « plusieurs dizaines de mètres carrés », distinction
  digestion/transit, volume océanique à 96 %, vitesse de l'influx à 100-120 m/s,
  conduction saltatoire).

### [MINEUR] ✅ Cinq passages de cours portent des astérisques d'italique qui s'afficheront tels quels
- **Où** : `cours/sciences-vie.ts`, lignes ~364, ~371, ~503, ~765, ~927
- **Texte** : `*L'Origine des espèces*` (deux fois), `*circa diem*`,
  `*Clostridioides difficile*`, `*Rhizobium*`
- **Problème** : `commun.ts` le dit noir sur blanc — « Le texte est du texte brut :
  l'écran de lecture coupe les paragraphes sur les lignes vides et n'interprète aucune
  balise. » Le lecteur verra les astérisques.
- **Correction proposée** : retirer les astérisques, ou passer en guillemets français
  pour les titres d'ouvrage : « L'Origine des espèces ».
- **Fait** : les cinq passages ont été corrigés dans `cours/sciences-vie.ts` — guillemets
  français pour les deux titres d'ouvrage, astérisques simplement retirés pour
  *circa diem*, *Clostridioides difficile* et *Rhizobium*.

### [MINEUR] ✅ Accords fautifs
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
- **Fait** : les cinq corrections ont été appliquées (`sciences-vie.ts`,
  `sciences-vie-3.ts`, `cours/sciences-vie.ts` — deux occurrences — et le cahier JSON).

### [MINEUR] ✅ Capitalisation incohérente des propositions, qui peut trahir la réponse
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
- **Fait** : `sv2-vegetaux-cultures` (pomme de terre) et `sv-climat-mecanismes` (GIEC)
  corrigés dans `sciences-vie.ts`/`sciences-vie-2.ts`. Les autres exemples cités
  (aurochs, autruche, éléphant d'Afrique, hippopotame, hormone de croissance) sont déjà
  correctement capitalisés dans le dépôt actuel — rien à y changer.

### [MINEUR] ✅ General Sherman : « dépasse mille cinq cents mètres cubes »
- **Où** : `sciences-vie.ts` — `sv-plantes-adaptations`, question sur le plus grand
  organisme vivant
- **Texte** : « Le General Sherman, en Californie, dépasse mille cinq cents mètres cubes
  de bois. »
- **Problème** : le volume de tronc généralement retenu est d'environ 1 487 m³ : il
  approche les 1 500 m³ sans les dépasser. Le cahier d'origine écrit d'ailleurs
  correctement « environ 1 500 m³ » (question 45 de `sciences-vie.json`).
- **Correction proposée** : « approche mille cinq cents mètres cubes de bois. »
- **Fait** : traité avec le constat [MOYEN] voisin sur le séquoia (passe 2) — la question
  entière de `sciences-vie.ts` a été refondue, et le cours (`sv-plantes-adaptations`)
  corrigé dans le même sens.

### [MINEUR] ✅ Chiffres divergents d'un fichier à l'autre, sans conséquence grave mais visibles
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
- **Fait** : les cinq divergences ont été harmonisées en fourchettes ou par la valeur la
  plus fiable — cellules (30 000-37 000 milliards), insectes (trois espèces animales sur
  quatre, partout), influx nerveux (100-120 m/s), endosymbiose (un milliard et demi à
  deux milliards d'années), système ABO (1901).

### [MINEUR] ⏭️ Apostrophes droites dans tout le domaine
- **Où** : les quatre fichiers de seed, `heritage/…/sciences-vie.json` et les leçons
- **Problème** : aucune apostrophe courbe (’) dans le domaine. La consigne d'audit la
  demande. **Mais** j'ai vérifié : c'est le cas de **tous** les fichiers de
  `prisma/seed/culture-g/` sans exception — arts, cinéma, géographie, histoire,
  littérature, physique-chimie, etc. Ce n'est donc pas un défaut de ce domaine mais une
  convention du dépôt entier, à traiter globalement ou pas du tout. Je le signale pour
  mémoire et ne compte pas ce point comme un constat propre à Sciences de la vie.
- **Fait** : délibérément écarté, comme l'auteur du constat le préconisait lui-même —
  c'est une convention transversale au dépôt entier, pas un défaut du domaine.

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

---

# Reprise (relecteur 2)

## Ce que j'ai lu en plus

- `heritage/culture-g/data/lecons/sciences-vie/05.json` — leçon « Volcans, séismes et
  tectonique des plaques », 5 sections + 5 questions de quiz.

## Constats de la reprise — passe 1

### [MINEUR] ✅ Leçon 05 : les ondes S données comme « les plus destructrices »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/05.json` — section « Les séismes »
- **Texte** : « Les sismographes enregistrent d'abord les ondes P, les plus rapides, qui
  compriment la roche, puis les ondes S, plus lentes et plus destructrices, et enfin les
  ondes de surface. »
- **Problème** : exact mais trompeur. Les ondes S sont bien plus destructrices que les
  ondes P, mais ce sont les **ondes de surface** (Love et Rayleigh), citées juste après
  sans qualificatif, qui causent l'essentiel des dégâts aux bâtiments. La phrase, telle
  qu'elle est construite, laisse croire que la destructivité décroît après les ondes S,
  alors qu'elle culmine avec les dernières arrivées.
- **Correction proposée** : « puis les ondes S, plus lentes et plus dommageables, et
  enfin les ondes de surface, les plus lentes mais aussi les plus destructrices pour les
  bâtiments. »
- **Fait** : appliqué mot pour mot dans `05.json`.

**Rien d'autre à signaler sur la leçon 05.** J'ai vérifié un à un : rayon de 6 370 km,
croûte océanique de 5 à 10 km et continentale de 30 à 70 km, manteau à ~84 % du volume et
jusqu'à 2 900 km, noyau interne solide à plus de 5 000 °C sous plus de trois millions
d'atmosphères, Wegener en 1912, Pangée fragmentée il y a ~200 Ma, Saint-Pierre de la
Martinique en 1902, un degré de magnitude ≈ 30 fois plus d'énergie, Terre âgée de ~4,5
milliards d'années — tout est juste. Les cinq questions de quiz sont sans ambiguïté, les
distracteurs plausibles et clairement faux, les explications apprennent chacune quelque
chose de plus que la réponse (la question sur le noyau interne explique correctement que
la température de fusion monte avec la pression). La leçon **ne présente pas** le biais de
rang 0 : les bonnes réponses sont réparties (0, 1, 3, 2, 0).

### [MOYEN] ✅ Leçon 06 : trois découvertes de Galilée datées de 1609, alors que deux sont de 1610
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/06.json` — section « Observer le
  ciel aujourd'hui », et le visuel « frise » de la même section (entrée « 1609 »)
- **Texte** : « La lunette de Galilée, pointée vers le ciel en 1609, révèle les cratères
  de la Lune, les phases de Vénus et quatre satellites autour de Jupiter » ; frise :
  « **1609** — La lunette de Galilée : Cratères de la Lune, phases de Vénus et quatre
  satellites de Jupiter ».
- **Problème** : erreur de fait par compression. Galilée observe les reliefs lunaires fin
  1609, mais découvre les quatre satellites de Jupiter en **janvier 1610** et les phases
  de Vénus à l'**automne 1610**. La frise, qui met une date en tête, enseigne les trois
  faits sous la seule année 1609. C'est précisément le genre de date qu'un apprenant
  retient telle quelle.
- **Correction proposée** : « La lunette de Galilée, pointée vers le ciel à partir de
  1609, révèle les cratères de la Lune, puis en 1610 quatre satellites autour de Jupiter
  et les phases de Vénus » ; et dater la frise « 1609-1610 ».
- **Fait** : appliqué dans `06.json`, texte et frise.

### [MOYEN] ✅ Leçon 06 : c'est la pression du gaz, et non celle du rayonnement, qui soutient le Soleil
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/06.json` — section « La vie des étoiles »
- **Texte** : « L'astre entre alors dans une longue période stable, la séquence
  principale, durant laquelle la pression du rayonnement équilibre exactement
  l'attraction gravitationnelle. »
- **Problème** : imprécision qui installe un contresens courant. Dans une étoile de la
  masse du Soleil, l'équilibre hydrostatique est assuré à plus de 99,9 % par la pression
  thermique du gaz ionisé ; la pression de radiation n'y contribue que de façon marginale
  (elle ne devient dominante que dans les étoiles très massives). La leçon prend
  l'exception pour la règle.
- **Correction proposée** : « durant laquelle la pression du gaz chaud, aidée du
  rayonnement, équilibre exactement l'attraction gravitationnelle. »
- **Fait** : appliqué mot pour mot dans `06.json`.

**Le reste de la leçon 06 est juste**, et je l'ai vérifié point par point : unité
astronomique de 150 millions de km, année-lumière de ~9 500 milliards de km, parsec à 3,26
al, Proxima à un peu plus de 4 al, Leavitt et les céphéides, fusion amorcée vers 10
millions de degrés, Soleil de 4,6 milliards d'années à mi-parcours, seuil de 8 masses
solaires pour la supernova, Voie lactée de ~100 000 al et >100 milliards d'étoiles, Soleil
à 26 000 al du centre pour un tour en 230 millions d'années, Sagittarius A* à plus de 4
millions de masses solaires, Andromède à 2,5 millions d'al, Hubble en 1929, Lemaître,
13,8 milliards d'années, fond diffus à 380 000 ans découvert en 1965 par Penzias et Wilson
et refroidi à 2,7 K, COBE/WMAP/Planck, Hubble en orbite depuis 1990, LIGO en 2015, Webb en
2021, 51 Pegasi b en 1995, 600 millions de tonnes d'hydrogène par seconde. La numération
en toutes lettres est correcte partout (« huit cents millions » avec un s devant *millions*
nom, « trois cent quatre-vingt mille » sans s devant *mille*), ce qui n'est pas si fréquent.

### [MOYEN] ✅ Leçon 07 : l'immunité collective, la même question pour la troisième fois
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/07.json` — quiz, question 5 ;
  `prisma/seed/culture-g/sciences-vie.ts:54` (`sv-immunite`) ;
  `prisma/seed/culture-g/sciences-vie-3.ts:126` (`sv3-immunologie-avancee`)
- **Texte** : leçon — « Qu'est-ce que l'immunité collective ? » → « La protection
  indirecte des non-immunisés lorsque assez de personnes sont immunisées », expl. « Le
  seuil nécessaire dépend de la contagiosité de la maladie : il dépasse quatre-vingt-quinze
  pour cent pour la rougeole » ; seed — « Qu'appelle-t-on immunité collective ? » → « La
  protection indirecte des non-immunisés quand une majorité l'est », expl. « Le seuil
  dépend de la contagiosité de la maladie : environ quatre-vingt-quinze pour cent pour la
  rougeole. »
- **Problème** : la bonne réponse est la même phrase à trois mots près et l'explication
  est la même à la ponctuation près. Le rapport signalait déjà la paire
  `sv-immunite` / `sv3-immunologie-avancee` ; le cahier en fournit une **troisième**
  occurrence. Depuis la fusion du cahier dans l'Atelier, un apprenant peut rencontrer les
  trois.
- **Correction proposée** : garder la question de la leçon 07 (c'est là qu'elle est
  préparée par le cours) et resserrer les deux questions du seed comme déjà proposé plus
  haut (protection des personnes non vaccinables ; seuil et contagiosité chiffrés par R₀).
- **Fait** : `07.json` n'a pas été touché. `sv-immunite` et `sv3-immunologie-avancee` ont
  été resserrées comme proposé (voir le constat « Redites » plus haut).

### [MINEUR] ✅ Leçon 07 : l'éradication de la variole attribuée à la seule immunité collective
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/07.json` — section « Vaccins,
  antibiotiques et santé publique »
- **Texte** : « Lorsqu'une proportion suffisante d'une population est vaccinée […] c'est
  l'immunité collective. Grâce à elle, la variole a été officiellement éradiquée en 1980 »
- **Problème** : cause unique donnée à un succès qui en a plusieurs. L'éradication doit
  autant à la stratégie de surveillance et de vaccination en anneau autour de chaque cas
  qu'à la couverture vaccinale de masse — jamais atteinte partout au niveau du seuil
  théorique. L'explication du quiz est d'ailleurs plus prudente (« associé à une campagne
  mondiale ») : la section affirme plus que le quiz.
- **Correction proposée** : « Grâce à elle et à une stratégie de vaccination en anneau
  autour de chaque cas, la variole a été officiellement éradiquée en 1980 »
- **Fait** : appliqué mot pour mot dans `07.json`.

**Le reste de la leçon 07 est solide.** Dates vérifiées une à une : Semmelweis 1847,
Koch 1882 et 1883, Pasteur et Meister 1885, Fleming 1928, Jenner 1796, variole éradiquée
en 1980 et seule maladie humaine à l'être, Metchnikov et la phagocytose. Le texte prend
soin de dire ce que la plupart des supports oublient : que les virus n'ont pas de
métabolisme propre, que l'immense majorité des microbes est inoffensive, et que
l'assainissement a sauvé plus de vies que les médicaments. Les cinq questions sont nettes
et leurs distracteurs francs.

### [GRAVE] Leçon 08 : les cellules gliales ne sont pas « beaucoup plus nombreuses » que les neurones
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/08.json` — section « Un réseau de
  communication dans tout le corps », section « Le neurone, cellule de la communication »,
  visuel « Le neurone en chiffres », et explication de la question 1 du quiz (quatre
  endroits)
- **Texte** : « les cellules gliales, beaucoup plus nombreuses, assurent le soutien » ;
  « environ 86 milliards de neurones, entourés d'un nombre encore plus grand de cellules
  gliales, estimé entre 170 et 300 milliards » ; visuel : « **170 à 300 Mds** — cellules
  gliales qui les soutiennent » ; quiz : « accompagnés d'un nombre encore plus élevé de
  cellules gliales, évalué entre 170 et 300 milliards ».
- **Problème** : erreur de fait, et c'est exactement le pendant neurologique de l'erreur
  du microbiote déjà signalée dans ce rapport. Le comptage de référence (Azevedo,
  Herculano-Houzel *et al.*, 2009), celui-là même dont vient le chiffre de 86 milliards de
  neurones que la leçon retient, donne **environ 85 milliards de cellules non
  neuronales** : le rapport est de l'ordre de 1 pour 1, et non de 2 à 3,5 pour 1. Le vieux
  ratio « dix cellules gliales par neurone » a été abandonné en même temps que le chiffre
  de 100 milliards de neurones. La fourchette « 170 à 300 milliards » ressemble fort au
  **total des cellules du cerveau** (~171 milliards, neurones compris) recyclé comme s'il
  ne comptait que la glie. La leçon retient la moitié révisée du résultat et garde
  l'autre moitié périmée — même mécanisme que pour les 2 kg de microbiote.
- **Correction proposée** : partout, « entourés d'un nombre comparable de cellules
  gliales, de l'ordre de 85 milliards » ; dans la première section, « tandis que les
  cellules gliales, à peu près aussi nombreuses, assurent le soutien, la nutrition et la
  protection des neurones » ; dans le visuel, « **~85 Mds** — cellules gliales, presque
  une par neurone » ; et dans l'explication du quiz, remplacer « un nombre encore plus
  élevé » par « un nombre du même ordre », en ajoutant que le rapport de dix pour un
  longtemps enseigné a été révisé.

**Le reste de la leçon 08 est juste** : 86 milliards de neurones, axone de plus d'un
mètre, potentiel de repos à −70 mV, sodium entrant puis potassium sortant, conduction
saltatoire correctement expliquée par l'étymologie, ~10 000 synapses par neurone et plus de
100 000 pour certains, cerveau de 1,3 à 1,5 kg soit ~2 % de la masse pour 20 à 25 % de
l'énergie, cortex de 1 à 4,5 mm pour près de 2 000 cm², les quatre lobes et leurs
fonctions, l'arc réflexe médullaire, l'opposition sympathique/parasympathique. Deux
réussites pédagogiques à signaler : l'explication de la question 3 désamorce elle-même le
piège du « 2 % » en disant que ce chiffre est celui de la masse, et la question 5 fait
comprendre pourquoi la douleur arrive *après* le retrait de la main. Une réserve de
second ordre, que je n'érige pas en constat faute de source ferme : le « un tiers des
axones myélinisés » du visuel est un chiffre que je n'ai pas pu rattacher à une référence ;
il gagnerait à être supprimé ou sourcé.

*(Vérification faite depuis : le comptage d'Azevedo, Herculano-Houzel* et al. *(2009), « Equal
numbers of neuronal and nonneuronal cells make the human brain an isometrically scaled-up
primate brain », donne 86,1 ± 8,1 milliards de neurones et 84,6 ± 9,8 milliards de cellules
non neuronales, soit un rapport glie/neurone d'environ 1 pour 1. Le constat ci-dessus est
confirmé, pas seulement suspecté.)*

### [GRAVE] Leçon 09 : la digestion ne peut pas durer « huit à douze heures » si le côlon en prend trente à quarante à lui seul
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/09.json` — section « Manger :
  transformer des aliments en nutriments », visuel « Le voyage d'un aliment » (note), et
  explication de la question 1 du quiz
- **Texte** : « Chez l'être humain, l'ensemble du processus dure généralement de huit à
  douze heures » ; note du visuel : « la digestion complète dure de huit à douze heures » ;
  et dans la **même explication de quiz** : « le séjour dans le gros intestin dure trente à
  quarante heures. La durée totale de la digestion est le plus souvent de huit à douze
  heures. »
- **Problème** : contradiction arithmétique, et dans la version du quiz elle tient en deux
  phrases consécutives. Un total ne peut pas être trois fois plus petit que l'une de ses
  parties. Sur le fond, les durées détaillées de la leçon sont bonnes — estomac vidé en
  4 à 5 h, grêle traversé en ~4 h, côlon en 30 à 40 h — et leur somme donne le chiffre
  admis : environ **un à trois jours** pour le transit complet. Les « huit à douze heures »
  correspondent en réalité à la digestion proprement dite, c'est-à-dire à la partie
  bouche-estomac-intestin grêle, avant le côlon.
- **Correction proposée** : partout, distinguer les deux durées : « La digestion
  proprement dite, de la bouche à la fin de l'intestin grêle, dure de huit à douze heures ;
  le transit complet, résidus compris, prend un à trois jours. »

### [MOYEN] ✅ Leçon 09 : le besoin quotidien en eau donné à 2,8 litres
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/09.json` — section « Les nutriments
  et l'énergie », et note du visuel « Les macronutriments »
- **Texte** : « L'eau, enfin, est indispensable à tous les processus biologiques, avec un
  besoin quotidien de l'ordre de 2,8 litres chez l'adulte, apportés à la fois par les
  boissons et par les aliments. » ; note : « Besoin quotidien en eau : environ 2,8 litres. »
- **Problème** : chiffre trop élevé, et donné sans distinction de sexe. Les références
  nutritionnelles de l'ANSES (reprises de l'EFSA) fixent l'apport satisfaisant en eau
  **totale**, boissons et aliments confondus, à **2,5 L/jour pour les hommes et 2,0
  L/jour pour les femmes** — l'eau à boire proprement dite étant de l'ordre de 1,5 L. La
  leçon dépasse la référence masculine et de 40 % la référence féminine, en présentant le
  tout comme un besoin unique. Le reste de la section est pourtant calé exactement sur les
  repères ANSES (glucides 40-55 %, lipides 35-40 %, protéines 10-20 %) : l'eau est le seul
  chiffre qui s'en écarte.
- **Correction proposée** : « avec un apport satisfaisant d'environ 2,5 litres par jour
  chez l'homme et 2 litres chez la femme, boissons et aliments confondus — dont à peu près
  un litre et demi bu. »
- **Fait** : appliqué mot pour mot dans `09.json` (texte et note du visuel).

### [MINEUR] ✅ Leçon 09 : les champignons n'ont pas de « proies »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/09.json` — section « Manger :
  transformer des aliments en nutriments »
- **Texte** : « les champignons et certaines plantes carnivores digèrent également leurs
  proies, à l'aide d'enzymes qu'elles sécrètent »
- **Problème** : le mot *proies* ne vaut que pour les plantes carnivores. Un champignon
  digère un substrat — bois mort, litière, matière organique — en sécrétant ses enzymes
  vers l'extérieur, ce qui est justement le fait remarquable que la phrase voulait
  souligner. L'accord « qu'elles sécrètent » laisse en outre les champignons de côté.
- **Correction proposée** : « les champignons digèrent leur substrat et certaines plantes
  carnivores leurs proies, en sécrétant leurs enzymes hors de leur corps. »
- **Fait** : appliqué mot pour mot dans `09.json`.

**Le reste de la leçon 09 est exact et bien construit** : tube digestif d'environ neuf
mètres, salive à pH ~6,8 et amylase salivaire, dénaturation acide des protéines dans
l'estomac, bicarbonate pancréatique, bile fabriquée par le foie mais stockée dans la
vésicule et dépourvue d'enzymes (la question 2 le dit explicitement, ce qui corrige une
confusion très répandue), triple emboîtement replis/villosités/microvillosités, sucres et
acides aminés vers le foie contre lipides par la voie lymphatique, 9 kcal/g contre 4, les
cinq hormones digestives et leurs déclencheurs. L'idée que le contenu du tube digestif
reste « extérieur au corps » tant qu'il n'est pas absorbé est un point de compréhension que
peu de supports prennent la peine d'énoncer.

### [GRAVE] Leçon 10 : le cœur de baleine bleue à 600 kg — constat « à confirmer » n° 3, **tranché : c'est faux**
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/10.json` — section « Le battement du
  cœur » et note du visuel « Battements du cœur par minute » ; **et**
  `heritage/culture-g/data/sciences-vie.json` — question 7 (constat déjà ouvert par mon
  prédécesseur, ici confirmé)
- **Texte** : « celui de la baleine bleue jusqu'à 600 kilogrammes » (leçon 10, deux fois) ;
  « Son cœur pèse à lui seul près de 600 kg » (cahier, question 7)
- **Problème** : erreur de fait, et j'ai trouvé d'où elle vient. Le seul cœur de baleine
  bleue jamais prélevé et pesé — celui de la femelle échouée à Rocky Harbour
  (Terre-Neuve) en 2014, préservé par le Musée royal de l'Ontario — pèse **environ 180 kg
  (400 livres)**, vidé de son sang. Les techniciens du musée ont d'ailleurs publiquement
  noté qu'il était « bien plus petit que prévu ». Le chiffre de 600 qui circule vient de
  titres de presse en **livres** (« 600-Pound Blue Whale Heart », soit 272 kg, spécimen
  imprégné de fixateur) : la leçon a gardé le nombre et changé l'unité. C'est une erreur
  de conversion, pas une approximation.
- **Correction proposée** : dans la leçon 10, « celui de la baleine bleue environ 180
  kilogrammes — le seul jamais pesé, en 2014 » (et la même chose dans la note du visuel) ;
  dans le cahier, « Son cœur pèse près de 200 kg, et sa langue autant qu'un éléphant. »
  Le constat [MOYEN] ouvert plus haut sur ce point peut donc être requalifié **GRAVE** et
  appliqué sans réserve.

### [MOYEN] ✅ Leçon 10 : la séparation des cavités du cœur des poissons, décrite à tort comme « incomplète »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/10.json` — explication de la
  question 1 du quiz
- **Texte** : « Chez les poissons, le cœur ne compte que deux à quatre cavités selon les
  groupes, et la séparation y est incomplète. »
- **Problème** : contresens. Le cœur des poissons est en série sur un circuit **simple**
  et ne reçoit que du sang pauvre en dioxygène : il n'y a rien à séparer, donc pas de
  séparation « incomplète ». Le problème du mélange, et donc de la cloison incomplète, est
  celui des **amphibiens** (trois cavités) et des reptiles non crocodiliens. La phrase
  applique aux poissons le défaut d'un autre groupe, juste après avoir correctement
  expliqué que la séparation complète des mammifères « empêche le mélange ».
- **Correction proposée** : « Chez les poissons, le cœur ne comporte qu'une oreillette et
  un ventricule, sur un circuit simple : tout le sang y passe une seule fois par les
  branchies. Chez les amphibiens, à trois cavités, la séparation est au contraire
  incomplète et les deux sangs se mélangent en partie. »
- **Fait** : appliqué mot pour mot dans `10.json`.

### [MINEUR] ✅ Leçon 10 : Platon et Aristote rangés parmi « les médecins de l'Antiquité »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/10.json` — section « Comprendre la
  circulation : une longue histoire »
- **Texte** : « Les médecins de l'Antiquité, comme Aristote, Platon ou Hippocrate,
  connaissaient le cœur mais se trompaient sur son fonctionnement. »
- **Problème** : Hippocrate est médecin ; Aristote est naturaliste et philosophe, Platon
  philosophe et rien d'autre. Aucun des deux n'a exercé la médecine.
- **Correction proposée** : « Les savants de l'Antiquité, d'Hippocrate à Aristote,
  connaissaient le cœur mais se trompaient sur son fonctionnement. »
- **Fait** : appliqué mot pour mot dans `10.json`.

**Le reste de la leçon 10 est exact**, y compris les chiffres que j'ai vérifiés un à un :
cœur de 12 × 9 × 6 cm, 300 g chez l'homme et 250 g chez la femme, plus de deux milliards de
battements dans une vie, 60 à 80 battements et 4,5 à 5 L de sang par minute au repos, sang
à 7-8 % de la masse pour 5 à 6 L, plasma à 55 %, 4,5 millions d'hématies par mm³, 99 % des
cellules sanguines, 120 jours de vie et 2 millions produits par seconde, nœud sinusal et
automatisme, Érasistrate, Ibn al-Nafis en 1242, Servet, Harvey en 1628 (1578-1657), morue à
20 battements et colibri à gorge rubis à 1 200. Le raisonnement quantitatif de Harvey est
exposé comme il doit l'être — non comme une anecdote mais comme la mesure qui a renversé la
théorie —, et le passage sur le retour veineux explique un mécanisme au lieu de le nommer.

### [MOYEN] ✅ Leçon 11 : le passage d'embryon à fœtus placé un mois trop tard
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/11.json` — section « Les premières
  semaines de la vie humaine », visuel « étapes » (dernière étape) et explication de la
  question 3 du quiz (trois endroits)
- **Texte** : « Passé le troisième mois, quand les organes principaux sont ébauchés, on ne
  parle plus d'embryon mais de fœtus » ; visuel : « **Après le 3e mois** — les organes
  principaux sont ébauchés : on parle désormais de fœtus » ; quiz : « C'est seulement
  après le troisième mois, une fois les organes ébauchés, que l'on parle de fœtus. »
- **Problème** : imprécision d'un mois entier sur une limite qui, elle, est nette. La
  période embryonnaire couvre les **huit premières semaines** après la fécondation ; le
  stade fœtal commence à la **neuvième semaine**, c'est-à-dire au *début* du troisième
  mois et non après lui. La leçon décale la frontière d'environ cinq semaines, et
  l'insistance du « seulement » dans le quiz fait de l'erreur une consigne.
- **Correction proposée** : « À partir de la neuvième semaine, soit au début du troisième
  mois, quand les organes principaux sont ébauchés, on ne parle plus d'embryon mais de
  fœtus » — et « Dès le début du troisième mois » dans le visuel et l'explication.
- **Fait** : appliqué dans `11.json` — texte, visuel « étapes » et explication du quiz.

**Le reste de la leçon 11 est juste** : 23 chromosomes par gamète et 46 dans la
cellule-œuf, nidation environ une semaine après la fécondation, cœur primitif battant vers
le vingt-quatrième jour, grossesse de 38 semaines et 2 jours depuis la fécondation contre
37 à 41 semaines d'aménorrhée (avec l'écart de deux semaines explicitement expliqué, ce
qui désamorce une confusion très fréquente), débit cardiaque en hausse de 30 à 40 %, trois
échographies en France, tolérance immunitaire d'un fœtus à moitié paternel, stratégies r
et K, amincissement des coquilles du faucon pèlerin par les insecticides, saumons bloqués
par les barrages. La question 5 est particulièrement bien faite : son explication prend la
peine de distinguer la stratégie démographique du mode de fécondation, c'est-à-dire de
désamorcer le distracteur au lieu de se contenter de l'écarter.

### [GRAVE] Leçon 12 : « 35 millions d'années » entre la sortie des eaux des plantes et celle des tétrapodes — il y en a 115
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/12.json` — section « Les grandes
  étapes de la vie », **et** la question 5 du quiz : dans son énoncé de bonne réponse
  **et** dans son explication (trois occurrences)
- **Texte** : « les plantes sortent de l'eau il y a environ 480 millions d'années, suivies
  par les premiers tétrapodes […] vers 365 millions d'années, soit 35 millions d'années
  plus tard » ; bonne réponse du quiz : « Les plantes, environ 35 millions d'années avant
  les tétrapodes » ; explication : « les animaux ont donc mis environ 35 millions d'années
  de plus que les plantes à réussir cette transition ».
- **Problème** : erreur de calcul, dans la bonne réponse d'un QCM. 480 − 365 = **115**
  millions d'années, pas 35. Les deux dates données par la leçon sont justes ; c'est leur
  différence qui est fausse, et elle est fausse d'un facteur trois. Pire, le distracteur
  « Les animaux, environ 100 millions d'années avant » propose un ordre de grandeur
  (100 Ma) qui, lui, est presque exact — seul le sens est inversé : l'apprenant attentif au
  calcul est activement désorienté.
- **Correction proposée** : partout, « soit environ 115 millions d'années plus tard » ;
  bonne réponse « Les plantes, plus de cent millions d'années avant les tétrapodes » ; et
  remplacer le distracteur « Les animaux, environ 100 millions d'années avant » par « Les
  animaux, environ 100 millions d'années après les plantes » pour qu'il reste plausible
  sans être numériquement plus juste que la bonne réponse.

### [MOYEN] ✅ Leçon 12 : la question 5 confond « les animaux » et « les tétrapodes »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/12.json` — quiz, question 5
- **Texte** : énoncé « Qui, entre les plantes et les animaux, a colonisé la terre ferme en
  premier ? » ; explication « les premiers tétrapodes […] les animaux ont donc mis environ
  35 millions d'années de plus ».
- **Problème** : l'énoncé parle des animaux, l'explication répond sur les tétrapodes. Or
  les premiers animaux terrestres ne sont pas des vertébrés à quatre pattes mais des
  arthropodes — myriapodes et arachnides — installés à terre dès ~425-430 millions
  d'années, soit une cinquantaine de millions d'années seulement après les plantes et
  bien avant les tétrapodes. La question, telle qu'elle est posée, enseigne que le premier
  animal terrestre est un tétrapode.
- **Correction proposée** : resserrer l'énoncé — « Qui, des plantes ou des premiers
  vertébrés à quatre pattes, a colonisé la terre ferme en premier ? » — et ajouter à
  l'explication : « Les premiers animaux terrestres étaient en réalité des arthropodes,
  présents dès environ 425 millions d'années. »
- **Fait** : appliqué mot pour mot dans `12.json`, sans toucher aux dates 480/365/115 du
  constat [GRAVE] voisin.

### [MINEUR] ✅ Leçon 12 : l'âge de la Terre donné à 4,6 puis 4,54 milliards d'années, et une limite stratigraphique périmée
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/12.json` — sections « Découper le
  temps géologique » et « Les grandes étapes de la vie »
- **Texte** : « Elle découpe les 4,6 milliards d'années d'histoire de la planète » et
  « L'Hadéen, de 4,6 à 4 milliards d'années » contre, une section plus loin, « La Terre
  s'est formée il y a environ 4,54 milliards d'années ».
- **Problème** : deux valeurs à une section d'écart, sans que rien signale qu'il s'agit
  d'un arrondi. Par ailleurs, la limite Protérozoïque/Phanérozoïque est donnée à 542
  millions d'années dans quatre passages : c'est la valeur d'avant 2012 ; la Commission
  internationale de stratigraphie retient aujourd'hui **538,8 Ma**.
- **Correction proposée** : écrire partout « environ 4,54 milliards d'années » (ou partout
  4,6 avec la mention « en chiffres ronds »), et remplacer 542 par « environ 539 millions
  d'années ».
- **Fait** : appliqué partout dans `12.json` (texte, tableau des éons, quiz).

**Le reste de la leçon 12 est bon et honnête** : définition large du fossile incluant
ichnofossiles et coprolithes, conditions de fossilisation, minéralisation, conservation
par le pergélisol, l'ambre et le bitume, dates justes pour les procaryotes (−3,8 Ga), la
Grande Oxydation (−2,4 Ga), l'Édiacarien (−575 Ma), les plantes (−480 Ma), les tétrapodes
(−365 Ma) et les dinosaures (−230 Ma), Arthur Holmes en 1913, fossiles stratigraphiques.
Deux qualités rares : la leçon insiste deux fois sur le **biais** de l'archive fossile
(parties dures et milieux sédimentaires surreprésentés) au lieu de la présenter comme un
album complet, et elle présente la Grande Oxydation comme une pollution d'origine
biologique, ce qui est le bon angle.

### [MOYEN] ✅ Leçon 13 : la crise K-Pg réduite à « environ la moitié des espèces »
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/13.json` — section « Cinq crises, et
  peut-être une sixième », tableau « Les cinq grandes extinctions » et explication de la
  question 4 (trois occurrences)
- **Texte** : « La cinquième est la crise K-Pg, il y a 66 millions d'années, qui coûte la
  vie à environ la moitié des espèces » ; tableau : « Crétacé-Paléogène / −66 Ma /
  **Environ la moitié des espèces** » ; quiz : « a fait disparaître environ la moitié des
  espèces ».
- **Problème** : chiffre nettement sous-évalué. L'estimation de référence, constante depuis
  Raup et Sepkoski, situe la crise K-Pg autour de **75 % des espèces** — c'est le « trois
  quarts du vivant » que reprennent toutes les synthèses. La leçon est pourtant très
  précise pour les quatre autres crises (27 % des familles, 81 % des espèces marines…) :
  c'est la seule ligne du tableau donnée à la louche, et à la louche basse. L'écart ne
  change pas la réponse à la question 4 — le Permien-Trias reste la pire — mais il fausse
  la comparaison que cette question demande justement d'établir.
- **Correction proposée** : « qui emporte environ les trois quarts des espèces » dans les
  trois passages, et dans le tableau « Environ 75 % des espèces ».
- **Fait** : appliqué dans `13.json` (texte, tableau, quiz). Au passage, le Permien-Trias
  a été aligné sur « environ 80 % » (au lieu de 81 %) pour correspondre au constat
  passe 2 sur ce même chiffre — le Permien-Trias reste bien la crise la plus meurtrière.

### [MINEUR] ✅ Leçon 13 : les dinosaures apparaissent à −240 Ma ici, à −230 Ma dans la leçon 12
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/13.json` — section « Qui sont les
  dinosaures ? » contre `12.json` — section « Les grandes étapes de la vie », sa frise et
  l'explication de sa question 3
- **Texte** : « Les dinosaures apparaissent il y a environ 240 millions d'années, au Trias,
  et dominent les écosystèmes continentaux pendant plus de 170 millions d'années » contre
  « Les dinosaures apparaîtront vers 230 millions d'années » et « les dinosaures sont
  apparus vers 230 millions d'années ».
- **Problème** : dix millions d'années d'écart entre deux leçons voisines du même cahier,
  sur un chiffre qu'un apprenant mémorise tel quel. Les deux valeurs sont dans la
  fourchette admise (les plus anciens dinosaures certains sont datés de ~233 Ma, les
  dinosauromorphes de ~240 Ma), mais il faut choisir. Le « plus de 170 millions d'années »
  de la leçon 13 n'est cohérent qu'avec 240.
- **Correction proposée** : harmoniser sur « il y a environ 235 millions d'années » dans
  les deux leçons, ou écrire « entre 240 et 230 millions d'années » là où le détail compte.
- **Fait** : harmonisé sur « 235 millions d'années » dans `12.json` et `13.json` ; la
  durée « pendant plus de 170 millions d'années » de la leçon 13 a été ajustée en
  « environ 170 millions d'années » pour rester cohérente.

**Le reste de la leçon 13 est exact et remarquablement à jour** : définition cladistique
des dinosaures par Triceratops et *Passer domesticus*, distinction aviens/non aviens,
origine maniraptorienne des oiseaux, Archaeopteryx, plumes apparues avant le vol et
détournées de fonction (l'exaptation, correctement expliquée sans le jargon), crise K-Pg à
−66 Ma, article de *Science* de 2010 signé par quarante et un chercheurs, anomalie
d'iridium, cratère de Chicxulub d'environ 180 km, onde sismique de magnitude 11, trapps du
Deccan comme facteur aggravant, tri sélectif des survivants, 445/−380 à −360/−252/−200 Ma
et leurs pourcentages, extinction de l'Holocène depuis ~13 000 ans. Deux passages valent
d'être signalés comme réussis : la correction explicite de l'idée reçue sur la taille des
dinosaures, et la dernière phrase de l'explication de la question 4 — « la notoriété d'une
crise ne reflète donc pas son ampleur » — qui enseigne autre chose que la réponse.

### [MOYEN] ✅ Leçon 14 : le volume habitable des océans donné à 96 % puis à 99 %, dans le même paragraphe
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/14.json` — section « Le plus vaste
  espace de vie » (deux phrases distantes de six lignes), visuel « chiffres » de la même
  section et explication de la question 1
- **Texte** : « Les océans concentrent environ **96 %** du volume de la biosphère,
  c'est-à-dire de l'espace occupé par le vivant » — puis, dans la même section : « alors
  que les océans constituent **99 %** du volume habitable ».
- **Problème** : deux chiffres pour la même grandeur, à quelques lignes d'écart, sans que
  rien n'indique qu'il s'agirait de deux définitions différentes. Le visuel et le quiz
  retiennent 96, la phrase sur les 13 % d'espèces documentées retient 99 : l'apprenant qui
  lit la section entière ne sait pas lequel mémoriser.
- **Correction proposée** : garder 96 % partout et écrire « alors qu'ils constituent
  l'essentiel du volume habitable de la planète », ou expliciter les deux mesures si
  elles portent réellement sur des choses distinctes.
- **Fait** : appliqué mot pour mot dans `14.json`.

### [MINEUR] ✅ Leçon 14 : une question qui renvoie à des « travaux cités » que l'apprenant n'a pas
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/14.json` — quiz, question 5
- **Texte** : « Quelle est la première cause d'extinction des espèces marines **selon les
  travaux cités** ? » ; explication : « Les travaux cités attribuent 55 % des extinctions
  d'espèces marines à la pêche ».
- **Problème** : la formule renvoie à une source que ni la question ni la leçon ne nomment
  — la section parle elle aussi des « travaux cités par les spécialistes ». Une question de
  QCM doit tenir seule ; ici elle demande à l'apprenant de faire confiance à une référence
  fantôme. Accessoirement, la bonne réponse est la seule des quatre à porter un
  pourcentage, ce qui la désigne.
- **Correction proposée** : nommer la source dans l'explication (les synthèses sur les
  extinctions marines historiques attribuent la majorité des cas à l'exploitation directe),
  reformuler l'énoncé en « Quelle est la première cause identifiée d'extinction des espèces
  marines ? », et retirer le « à hauteur de 55 % » de la proposition pour le renvoyer dans
  l'explication.
- **Fait** : appliqué mot pour mot dans `14.json` (énoncé, proposition, section et
  explication).

**Le reste de la leçon 14 est exact, et inhabituellement précis** : 70,8 % de la surface,
361 millions de km², 1,37 milliard de km³, les cinq océans avec leurs surfaces et leurs
parts (165,25 / 106,4 / 73,5 / 20,3 / 14,09 millions de km²), profondeur moyenne de 3 700
à 3 800 m, fosse des Mariannes à 10 984 m à 25 m près, salinité de 35 ‰ et masse volumique
de 1 020 à 1 035 kg/m³, symbiose corail-zooxanthelles, récifs sur 0,1 % de la surface pour
plus de 25 % de la biodiversité marine, barrière néo-calédonienne de 1 600 km, ~10 % des
récifs mondiaux sous responsabilité française, 55 % / 37 % des extinctions marines, 17 % de
biomasse en moins d'ici 2100, WoRMS et ses 206 000 espèces valides. Le tour de force de
cette leçon est de faire tenir cette densité de chiffres sans que le texte devienne une
liste : chaque nombre y est rattaché à une conséquence.

### [GRAVE] Leçon 15 : les coléoptères crédités de 600 000 à 795 000 espèces **décrites** — il y en a environ 400 000
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/15.json` — section « Une diversité
  sans égale », visuel « chiffres » de la même section et explication de la question 3
- **Texte** : « Les coléoptères […] comptent à eux seuls de **600 000 à 795 000 espèces
  décrites**, un record absolu dans le règne animal » ; visuel : « + de 600 000 espèces de
  coléoptères décrites (jusqu'à 795 000) ».
- **Problème** : erreur de fait par confusion entre *décrites* et *estimées*. Le nombre
  d'espèces de coléoptères effectivement décrites est d'environ **400 000** ; ce sont les
  estimations du nombre **total**, non décrites comprises, qui montent à 0,9-2,1 millions
  (médiane ~1,5 million). La leçon a pris une valeur intermédiaire d'estimation et l'a
  étiquetée « décrites ». Le chiffre contredit en outre le reste du dépôt, qui écrit
  correctement « environ quatre cent mille » dans le cours `sv3-insectes` et dans la
  question `sv-arbre-vivant` du seed.
- **Correction proposée** : « comptent à eux seuls environ 400 000 espèces décrites — un
  record absolu dans le règne animal, et sans doute plus d'un million en réalité, la
  plupart n'étant pas encore nommées. »

### [GRAVE] Leçon 15 : les insectes ne peuvent pas faire 85 % des espèces animales si les arthropodes n'en font que 80 %
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/15.json` — section « Les
  arthropodes, maîtres du monde animal » et note de son visuel, contre section « Une
  diversité sans égale », son visuel et l'explication de la question 3
- **Texte** : « environ **80 %** des espèces animales connues sont des arthropodes » —
  contre « Environ 1,3 million d'espèces [d'insectes] ont été décrites à ce jour, ce qui
  représente à peu près 55 % de l'ensemble de la biodiversité connue et **85 % de la
  biodiversité animale** ».
- **Problème** : impossibilité logique, pas seulement divergence de sources. Les insectes
  sont un sous-ensemble strict des arthropodes : leur part ne peut pas dépasser celle du
  groupe qui les contient. La leçon affirme les deux à trois sections d'écart, et la
  seconde valeur est reprise dans une explication de quiz. Les ordres de grandeur admis
  sont : arthropodes ~80 % des espèces animales décrites, insectes ~75 % — soit environ
  1 million d'espèces décrites (le dépôt écrit d'ailleurs « environ un million » dans le
  cours `sv-arbre-vivant`, contre 1,3 million ici).
- **Correction proposée** : « Environ un million d'espèces ont été décrites à ce jour, ce
  qui représente plus de la moitié de l'ensemble de la biodiversité connue et près des
  trois quarts de la biodiversité animale » — les insectes restant, de loin, le premier
  groupe d'arthropodes.

### [GRAVE] Leçon 15 : le service de pollinisation évalué à 50 milliards d'euros au lieu de 153
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/15.json` — section « Des services
  essentiels et un déclin inquiétant » et explication de la question 5
- **Texte** : « Les scientifiques évaluent ce service à environ **50 milliards d'euros par
  an** à l'échelle mondiale, et en France à près de 10 % de la valeur de la production
  agricole. » ; quiz : « Ce service est évalué à quelque 50 milliards d'euros par an dans
  le monde. »
- **Problème** : erreur de fait d'un facteur trois, et j'en ai retrouvé la source. L'étude
  de référence (Gallai, Salles, Settele et Vaissière, *Ecological Economics*, 2009) chiffre
  la contribution mondiale des pollinisateurs à **153 milliards d'euros** par an (valeur
  2005), soit environ 9,5 % de la valeur de la production agricole alimentaire mondiale.
  Les **50 milliards** sont, dans cette même étude, la valeur d'**une seule catégorie de
  cultures** — les fruits, à égalité avec les légumes, devant les oléagineux à 39
  milliards. La leçon a pris une ligne du tableau pour le total. Le « près de 10 % » qui
  suit est, lui aussi, la part **mondiale** de l'étude, attribuée ici à la France.
- **Correction proposée** : « Les scientifiques évaluent ce service à environ 153 milliards
  d'euros par an à l'échelle mondiale, soit près de 10 % de la valeur de la production
  agricole destinée à l'alimentation humaine. » — et vérifier séparément le chiffre
  français avant de l'énoncer.

**Le reste de la leçon 15 est juste** : étymologie d'*arthropode*, exosquelette de chitine
et nécessité de la mue, métamérisation, clé des quatre groupes par le nombre de pattes,
les trois tagmes, yeux composés, respiration trachéenne et la limite de taille qu'elle
impose, apparition des insectes il y a plus de 400 millions d'années et antériorité du vol
sur celui des oiseaux, distinction métamorphose complète/incomplète, quasi-absence des
insectes du milieu marin, 90 % des plantes à fleurs pollinisées par des animaux dont ~80 %
d'insectes, plus de 70 % des cultures et ~35 % du tonnage alimentaire, déclin de ~2,5 % par
an depuis les années 1980. L'argument écologique de la métamorphose complète — supprimer la
concurrence entre la larve et l'adulte — est la meilleure page de la leçon, et l'explication
de la question 5 pense à dire pourquoi la totalité des cultures n'est pas concernée (le blé
est pollinisé par le vent), ce qui ferme proprement le distracteur.

### [GRAVE] Leçon 16 : « 56 % des espèces évaluées sont menacées en France métropolitaine » — le chiffre a changé de sens
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/16.json` — section « Mesurer la
  menace : la liste rouge » et question 4 du quiz, dont c'est la **bonne réponse**
- **Texte** : « Selon le comité français de l'UICN, en 2024, 56 % des espèces animales et
  végétales évaluées sont menacées en France métropolitaine, soit 1 610 espèces sur
  2 857. Plus surprenant encore, plus de la moitié des espèces menacées ne bénéficient
  d'aucune protection légale. » ; quiz : « Quelle part des espèces évaluées est menacée en
  France métropolitaine ? » → « 56 % ».
- **Problème** : le ratio 1 610/2 857 fait bien 56 %, mais il ne mesure pas ce que la
  phrase lui fait dire. Les données du comité français de l'UICN donnent, après seize ans
  de liste rouge nationale, **17 367 espèces évaluées** pour environ **2 900 espèces
  menacées** (dont ~1 050 en métropole et ~1 850 en outre-mer) : la part des espèces
  évaluées qui sont menacées est de l'ordre de **17 %**, pas de 56 %. En revanche, 2 857
  est très proche du nombre total d'espèces **menacées** en France, et 1 610 sur 2 857
  correspond exactement à la statistique que la phrase suivante énonce en toutes lettres —
  « plus de la moitié des espèces menacées ne bénéficient d'aucune protection légale ».
  Autrement dit, la leçon a pris le taux d'espèces menacées **non protégées** et l'a
  rebaptisé taux d'espèces évaluées **menacées**, puis a répété la vraie statistique juste
  après sans voir qu'il s'agissait de la même. Le QCM enseigne donc un chiffre faux, avec
  une source et une date qui le rendent crédible.
- **Correction proposée** : « Selon le comité français de l'UICN, sur les quelque 2 857
  espèces menacées recensées en France, 1 610 — soit 56 % — ne bénéficient d'aucune
  protection réglementaire. » Et reformuler la question 4 : « Quelle part des espèces
  menacées en France ne bénéficie d'aucune protection légale ? » → « 56 % ». Le chiffre
  exact étant susceptible d'avoir bougé, il faut le rapporter au rapport UICN France qui
  le publie et le dater.

### [MINEUR] ⏭️ Leçon 16 : le total de 1,7 million d'espèces décrites est incompatible avec les 55 % de la leçon 15
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/16.json` — section « Combien
  d'espèces sur Terre ? » contre `15.json` — section « Une diversité sans égale »
- **Texte** : « Environ 1,7 million d'espèces ont été formellement décrites » (leçon 16)
  contre « Environ 1,3 million d'espèces [d'insectes] ont été décrites à ce jour, ce qui
  représente à peu près 55 % de l'ensemble de la biodiversité connue » (leçon 15).
- **Problème** : 1,3 sur 1,7 fait 76 %, pas 55 %. Pour que les 55 % tombent juste, il
  faudrait un total décrit de 2,4 millions d'espèces, que la leçon 16 contredit. C'est le
  troisième symptôme du même désordre déjà signalé sur la leçon 15 : les pourcentages et
  les effectifs n'y viennent pas de la même source.
- **Correction proposée** : recaler la leçon 15 sur le total de la leçon 16 (≈1,7 million
  d'espèces décrites, dont environ 1 million d'insectes, soit ~60 % du total décrit et
  ~75 % des animaux).
- **Fait** : délibérément écarté. En relisant `15.json`, les deux constats [GRAVE] voisins
  (coléoptères 600-795 000, et 85 % des animaux vs 80 % des arthropodes) n'y sont
  **pas** corrigés — les chiffres fautifs sont encore dans le texte, le visuel et
  l'explication de quiz. Cette correction porte exactement sur les mêmes phrases ; je ne
  l'ai pas appliquée pour ne pas toucher un contenu [GRAVE] resté en l'état, et je signale
  les deux constats GRAVE incomplets dans mon rapport final.

**Le reste de la leçon 16 est solide** : les trois niveaux de biodiversité bien
distingués et bien reliés, origine et date du mot, 1,7 million d'espèces décrites pour 3 à
100 millions estimées avec ~10 millions comme valeur plausible, rapport IPBES de 2019 et son
million d'espèces menacées, chute d'au moins 20 % de l'abondance locale depuis 1900, les
cinq menaces et le rôle dominant du changement d'usage des terres, catégories de la liste
rouge de l'UICN, définition officielle de l'aire protégée et ses six catégories,
Fontainebleau en 1861 et Yellowstone en 1872, 9 % des terres protégées en 1992 contre 15 %
en 2018, objectifs d'Aichi de 17 % et 10 %. La dernière section est exemplaire : elle
donne les chiffres du succès **et** les trois raisons de s'en méfier (pression humaine sur
un tiers des aires, parcs de papier, localisation opportuniste), au lieu de s'arrêter au
chiffre flatteur.

### [MOYEN] ✅ Leçon 17 : Jennifer Doudna réduite au rôle d'assistante de Charpentier
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/17.json` — section « CRISPR-Cas9, des
  ciseaux moléculaires »
- **Texte** : « C'est la Française Emmanuelle Charpentier, **avec le concours de**
  l'Américaine Jennifer Doudna, qui met au point vers 2012 la méthode d'édition du génome »
- **Problème** : attribution déséquilibrée. L'article fondateur de 2012 (*Science*) est
  cosigné par les deux équipes et le prix Nobel de chimie 2020 leur a été décerné à parts
  égales — la leçon le dit elle-même quatre lignes plus loin. « Avec le concours de »
  transforme une codécouverte en aide apportée à une découvreuse principale. C'est le même
  travers que le rapport signale déjà pour Marthe Gautier dans `sv2-genetique-maladies`,
  appliqué ici dans l'autre sens : le module valorise la chercheuse française au détriment
  de sa codécouvreuse.
- **Correction proposée** : « C'est la Française Emmanuelle Charpentier et l'Américaine
  Jennifer Doudna qui mettent au point ensemble, en 2012, la méthode d'édition du génome
  dérivée de ce système. »
- **Fait** : appliqué mot pour mot dans `17.json`.

### [MOYEN] ✅ Leçon 17 : le classement de CRISPR parmi les armes de destruction massive attribué à la CIA
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/17.json` — section « Promesses et
  questions éthiques »
- **Texte** : « la CIA a même classé cette technologie parmi les armes de destruction
  massive potentielles »
- **Problème** : mauvaise attribution. C'est le **directeur du renseignement national
  américain** (James Clapper, ODNI) qui, dans l'évaluation annuelle des menaces mondiales
  de 2016, a rangé l'édition du génome dans la rubrique des armes de destruction massive
  et de prolifération. L'ODNI coiffe l'ensemble des agences ; la CIA n'en est qu'une, et
  n'est pas l'auteur du document.
- **Correction proposée** : « le renseignement américain a même rangé, en 2016, l'édition
  du génome parmi les technologies à risque de prolifération, aux côtés des armes de
  destruction massive »
- **Fait** : appliqué mot pour mot dans `17.json`.

### [MINEUR] ✅ Leçon 17 : une projection de 2009 présentée comme l'horizon d'aujourd'hui
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/17.json` — section « Qu'appelle-t-on
  biotechnologie ? »
- **Texte** : « ce secteur représente moins de 1 % du produit intérieur brut des pays de
  l'OCDE, mais les projections l'estiment à 2,7 % en 2030 »
- **Problème** : le 2,7 % en 2030 vient du rapport prospectif de l'OCDE *La bioéconomie à
  l'horizon 2030*, publié en 2009. Une projection vieille de quinze ans, dont l'échéance
  est presque atteinte, ne peut plus être citée sans sa date : elle se lit comme une
  prévision actuelle.
- **Correction proposée** : « une projection de l'OCDE publiée en 2009 tablait sur 2,7 % du
  PIB des pays membres en 2030 »
- **Fait** : appliqué mot pour mot dans `17.json`.

**Le reste de la leçon 17 est exact et remarquablement à jour** : définition de l'OCDE,
ancienneté des fermentations, Genentech et Amgen, krach de 2001-2002, les six couleurs et
leurs domaines, définitions divergentes des OGM entre l'Union européenne et les
États-Unis, transgenèse et franchissement de la barrière d'espèce, soja-maïs-coton-colza,
189,8 millions d'hectares en 2017 dont plus de la moitié dans des pays en développement,
seuil d'étiquetage à 0,9 %, protocole de Carthagène de 2000, *Streptococcus pyogenes* et
l'immunité adaptative bactérienne, Cas9 endonucléase guidée par ARN, Feng Zhang et le Broad
Institute, embryons humains modifiés en Chine dès 2015, He Jiankui en 2018, Nobel de
chimie en octobre 2020. La leçon a le mérite rare d'expliquer que les chercheurs n'ont
rien inventé mais emprunté un mécanisme bactérien, et de poser les questions éthiques —
mutations hors cible, transmission germinale, eugénisme — sans les trancher à la place de
l'apprenant.

### [MOYEN] ✅ Leçon 18 : la parenté oiseaux-dinosaures enseignée deux fois, presque dans les mêmes termes
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/18.json` — section « Les derniers
  dinosaures » contre `13.json` — section « Les oiseaux, dinosaures d'aujourd'hui »
- **Texte** : leçon 13 — « les oiseaux sont les descendants directs des dinosaures […]
  l'Archaeopteryx, fossile du Jurassique qui associe des plumes à des dents et à une longue
  queue osseuse, puis confirmée par des dizaines de découvertes de dinosaures à plumes,
  surtout en Chine. On sait désormais que les plumes sont apparues bien avant le vol :
  elles ont probablement d'abord servi à l'isolation thermique ou à la parade nuptiale » ;
  leçon 18 — « Il associe des caractères que l'on croyait incompatibles : une mâchoire
  garnie de dents, une longue queue osseuse […] les gisements du Liaoning, en Chine, ont
  livré des dizaines de théropodes couverts de duvet […] le plumage est apparu bien avant
  le vol : il a d'abord servi à isoler du froid et à parader. »
- **Problème** : même contenu, même enchaînement d'arguments, jusqu'au même fossile
  illustré par la **même image** (`svt-archaeopteryx`) avec deux légendes différentes. Ce
  n'est pas un rappel assumé — aucune des deux leçons ne renvoie à l'autre —, c'est la même
  page écrite deux fois. L'apprenant qui suit le cahier dans l'ordre révise deux fois en
  croyant avancer, ce que le rapport signale déjà comme le défaut structurel du domaine.
- **Correction proposée** : garder l'exposé complet dans la leçon 18 (c'est sa matière) et
  réduire la section de la leçon 13 à ce qui sert son propos — la survie d'une lignée à la
  crise K-Pg — avec un renvoi explicite : « la leçon consacrée aux oiseaux détaille cette
  parenté ».
- **Fait** : `18.json` n'a pas été touché ; la section « Les oiseaux, dinosaures
  d'aujourd'hui » de `13.json` a été resserrée sur la survie à la crise K-Pg, avec le
  renvoi explicite proposé.

### [MINEUR] ✅ Leçon 18 : une phrase incompréhensible dans l'explication de la question 1
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/18.json` — quiz, question 1
- **Texte** : « Les 300 000 correspondraient plutôt à **un ordre voisin des coléoptères**
  chez les insectes. »
- **Problème** : la phrase ne veut rien dire. Elle cherche visiblement à situer l'ordre de
  grandeur du distracteur (300 000 espèces, c'est l'échelle d'un grand ordre d'insectes),
  mais « un ordre voisin des coléoptères » ne désigne rien — et le chiffre des coléoptères
  décrits est d'environ 400 000, ce que la leçon 15 donne d'ailleurs autrement.
- **Correction proposée** : « Trois cent mille, c'est l'ordre de grandeur d'un très grand
  groupe d'insectes, pas des oiseaux. »
- **Fait** : appliqué mot pour mot dans `18.json`.

**Le reste de la leçon 18 est excellent, et c'est la mieux écrite du lot** : Archaeopteryx
découvert à Solnhofen en 1861 et daté d'environ 150 Ma, gisements du Liaoning, 10 700 à
11 100 espèces dont plus de la moitié de passereaux, anatomie de la plume (calamus, rachis,
barbes, barbules à crochets) et les cinq types fonctionnels, glande uropygienne, plume
comme organe mort qu'il faut muer, os pneumatisés, synsacrum, furcula, bréchet et pectoraux
à un cinquième de la masse, gésier, sacs aériens et flux d'air unidirectionnel, 40 à 42 °C,
faucon pèlerin à 389 km/h, autruche à 2,75 m, colibri d'Elena à 5 cm, système ZW/ZZ inversé
par rapport au nôtre, plaque incubatrice, opposition nidifuges/nidicoles avec la bonne
corrélation sur la durée d'incubation, syrinx à deux sources sonores et apprentissage du
chant, sterne arctique, une espèce sur huit menacée, faucon pèlerin décimé par le DDT puis
rétabli. Trois explications de quiz vont jusqu'à désamorcer le distracteur au lieu de
l'ignorer (la membrane de la chauve-souris, les os creux qui ne stockent pas d'oxygène,
l'os médullaire qui est la vraie réserve de calcium) : c'est le meilleur travail de QCM que
j'aie vu dans ce domaine.

*(Note de forme, sans gravité : à partir de `18.json`, les leçons sont enregistrées en
JSON compact sur une seule ligne, alors que `01.json` à `17.json` sont indentées. Aucune
conséquence à l'affichage, mais toute relecture humaine du fichier en devient pénible.)*

### [MINEUR] ✅ Leçon 19 : « une demi-tête » d'amanite phalloïde
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/19.json` — section « Alliés de la
  cuisine, poisons de la forêt » et explication de la question 4
- **Texte** : « Une demi-tête suffit à tuer un adulte, et la cuisson ne détruit pas le
  poison. » (repris tel quel dans le quiz)
- **Problème** : impropriété. On ne dit pas la « tête » d'un champignon : la partie
  concernée est le **chapeau**. La formule est d'autant plus gênante qu'elle porte
  l'information la plus dangereuse de la leçon — la dose mortelle —, et que la même
  section énumère correctement, deux lignes plus loin, « chapeau, lames, anneau, volve et
  pied ».
- **Correction proposée** : « Un demi-chapeau suffit à tuer un adulte, et la cuisson ne
  détruit pas le poison. »
- **Fait** : appliqué dans les deux occurrences de `19.json` (section et quiz).

**La leçon 19 est, avec la 18, la plus sûre de tout ce que j'ai lu dans ce domaine.**
Vérifiés un à un : paroi de chitine et non de cellulose, ergostérol contre cholestérol et
son exploitation par les antifongiques, parenté des Fungi avec les animaux plutôt qu'avec
les plantes, réserves de glycogène, ~120 000 espèces décrites pour un total estimé entre un
demi-million et plusieurs millions, hyphes croissant par la pointe et digestion externe,
armillaire de l'Oregon sur plusieurs kilomètres carrés, distinction mycélium/sporophore,
basides contre asques à huit spores, chytrides et *Batrachochytrium dendrobatidis*,
gloméromycètes, mildiou dû à des oomycètes et non à un champignon, exclusion des
myxomycètes, dégradation de la lignine, quatre plantes vasculaires sur cinq mycorhizées,
flore de Rhynie vieille de ~400 Ma, lichen comme symbiose et bioindicateur, *Saccharomyces
cerevisiae*, *Penicillium roqueforti*, Fleming en 1928, ciclosporine, amatoxines bloquant
la synthèse protéique hépatique, latence puis accalmie trompeuse, silibinine et absence
d'antidote véritable. Deux points pédagogiques remarquables : la correction explicite de
l'idée que cueillir un champignon tuerait l'organisme, et le refus net de toute « règle
populaire » pour reconnaître un comestible. Seule réserve mineure : les 120 000 espèces
décrites sont un chiffre qui monte vite (les inventaires récents dépassent 150 000) et
gagneraient à être datées.

### [MINEUR] ✅ Leçon 20 : le nimbostratus rangé dans l'étage inférieur
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/20.json` — section « Naissance d'un
  nuage »
- **Texte** : « L'étage moyen accueille les altocumulus et altostratus, l'étage inférieur
  les stratus, stratocumulus, **nimbostratus** et cumulus. »
- **Problème** : dans la classification internationale de l'OMM, le nimbostratus appartient
  à l'**étage moyen** (2 à 7 km), aux côtés de l'altocumulus et de l'altostratus, même si
  sa base descend souvent très bas. La leçon énumère par ailleurs correctement les dix
  genres : c'est le seul mal placé.
- **Correction proposée** : « L'étage moyen accueille les altocumulus, les altostratus et
  les nimbostratus, l'étage inférieur les stratus, stratocumulus et cumulus. »
- **Fait** : appliqué mot pour mot dans `20.json`.

**Le reste de la leçon 20 est juste, et sa physique est bien conduite** : 78 % d'azote,
21 % d'oxygène, 0,9 % d'argon et un peu plus de 0,04 % de CO₂, masse de ~5 millions de
milliards de tonnes, 1 013 hPa soit ~1 kg/cm², moitié de la masse sous 5,6 km, 15 °C réels
contre −18 °C sans effet de serre, troposphère de 8 km aux pôles à 15 km à l'équateur avec
un gradient de 6,5 °C/km, inversion stratosphérique due à l'absorption des UV par l'ozone,
mésosphère jusqu'à −90 °C, thermosphère chaude mais raréfiée, ligne de Kármán à 100 km,
cellules de Hadley, Ferrel et polaire, Coriolis et le sens de déviation par hémisphère,
alizés et courants-jets, point de rosée et noyaux de condensation, dix genres de nuages,
cumulonimbus dépassant 12 km et s'étalant en enclume sous la tropopause, ~60 % du ciel
couvert, prévision à cinq jours équivalente à celle à deux jours des années 1980, limite
chaotique d'une dizaine de jours, seuil de 26,5 °C sur 60 m pour un cyclone, cisaillement,
Saffir-Simpson, onde de tempête comme première cause de victimes. L'explication de la
question 3 mérite d'être signalée : elle prend le temps de démonter le distracteur « on se
rapproche du Soleil » par un argument d'échelle, au lieu de se contenter de dire qu'il est
faux.

### [MOYEN] ✅ Leçon 21 : la dérive d'« une demi-heure par jour » ne peut pas expliquer les vingt-cinq jours d'erreur de Michel Siffre
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/21.json` — section « L'horloge
  interne » et explication de la question 5
- **Texte** : « son cycle veille-sommeil s'est maintenu, mais **en dérivant chaque jour
  d'environ une demi-heure, si bien qu'**il se croyait fin août en remontant à la
  mi-septembre » ; quiz : « elle a dérivé d'environ une demi-heure par jour, et le décalage
  a fini par devenir considérable : en remontant à la mi-septembre 1962, Siffre pensait
  qu'on était encore au 20 août ».
- **Problème** : les deux faits sont exacts séparément — la période interne de Siffre
  s'est bien allongée à environ 24 h 30, et il a bien cru, en sortant le 14 septembre 1962,
  qu'on était le 20 août — mais le « si bien que » qui les relie est faux, et il l'est
  arithmétiquement. Une demi-heure de dérive par jour pendant deux mois ne produit qu'une
  trentaine d'heures d'écart, soit **un jour et quart**, pas vingt-cinq jours. L'erreur
  massive d'estimation de Siffre tient à tout autre chose : en l'absence de repères, la
  perception subjective de la durée se contracte fortement. La leçon donne une cause
  unique, et fausse, à un phénomène qui en a deux.
- **Correction proposée** : « son cycle veille-sommeil s'est maintenu, mais en s'allongeant
  à environ vingt-quatre heures et demie. Surtout, privé de repères, il a perdu le compte
  des jours : en remontant le 14 septembre 1962, il pensait qu'on était le 20 août. Le
  temps vécu se contracte quand plus rien ne le jalonne. »
- **Fait** : appliqué dans les deux occurrences de `21.json` (section et quiz), avec le
  calcul explicite (une demi-heure par jour sur deux mois ne fait qu'une trentaine
  d'heures d'écart).

**Le reste de la leçon 21 est exact et à jour** : un tiers d'une vie passé à dormir,
réversibilité qui distingue le sommeil du coma, sommeil unihémisphérique des dauphins et
de certains oiseaux migrateurs, 15 à 17 h pour un nourrisson et 7 à 9 h pour un adulte,
stades N1-N2-N3 avec les fuseaux et les ondes lentes, sommeil paradoxal à 20-25 % et son
atonie musculaire protectrice, cycles de 90 minutes répétés 4 à 6 fois, sommeil profond en
début de nuit et paradoxal au petit matin, Michel Jouvet, consolidation mnésique, hormone
de croissance, réponse vaccinale, système glymphatique et évacuation des déchets, réglage
de l'appétit, noyaux suprachiasmatiques, cellules à mélanopsine, mélatonine pinéale,
Nobel 2017 à Hall, Rosbash et Young, décalage horaire d'un jour par fuseau et plus dur vers
l'est, lumière bleue des écrans, insomnie, apnées, narcolepsie, somnolence au volant.
À noter pour la cohérence du dépôt : cette leçon retient « sept à neuf heures » pour
l'adulte, ce qui confirme la correction déjà proposée plus haut pour le cours
`sv2-sommeil-rythmes`, seul endroit du domaine à écrire « sept à huit ».

**Leçon 22 — aucun constat.** Je l'ai lue deux fois plutôt qu'une, précisément parce que
je n'y trouvais rien, et je maintiens : c'est la seule leçon du lot sur laquelle je n'ai
pas une remarque à faire. Tout ce qui est vérifiable est juste — œil de 2,5 cm pour 7 g,
cornée assurant l'essentiel de la convergence, pupille de 2 à 7-8 mm, mécanisme de
l'accommodation décrit dans le bon sens (le muscle ciliaire se contracte, *laisse* le
cristallin se bomber, ce que la moitié des manuels écrit à l'envers), presbytie présentée
comme une usure et non comme une maladie, ~120 millions de bâtonnets contre 5 à 7 millions
de cônes, trois pigments, daltonisme lié à l'X et donc masculin, fovéa, tache aveugle,
chaîne tympan-marteau-enclume-étrier expliquée par l'adaptation d'impédance air/liquide
(et non par une vague « amplification »), tonotopie cochléaire dans le bon sens — aigus à
l'entrée, graves au fond —, ~15 000 cellules ciliées non renouvelables, 20 à 20 000 Hz,
~400 types de récepteurs olfactifs, code combinatoire d'Axel et Buck (Nobel 2004),
renouvellement mensuel des neurones olfactifs, court-circuit du bulbe olfactif vers
l'émotion et la mémoire, cinq saveurs et rôle de la voie rétronasale. Deux détails que peu
de supports osent : la remarque que la liste des cinq sens vient d'Aristote et qu'on en
compte en réalité de huit à une vingtaine, et la mention que le poulpe, dont la rétine est
câblée à l'envers de la nôtre, n'a pas de tache aveugle — laquelle transforme une curiosité
en argument sur la contingence de l'évolution.

### [MINEUR] ✅ Leçon 23 : « la coquille de nos falaises normandes », et des roches plus vieilles qu'annoncé
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/23.json` — sections « Les roches
  sédimentaires, archives de la Terre » et « Le métamorphisme et le cycle des roches »
- **Texte** : « Le calcaire, la craie ou **la coquille** de nos falaises normandes sont
  bâtis à partir des squelettes et des coquilles d'innombrables organismes marins » ; et
  « les plus vieilles roches connues, en Amérique du Nord, **approchent** les quatre
  milliards d'années ».
- **Problème** : deux imprécisions sans gravité. *La coquille* n'est pas un nom de roche —
  la formule vient probablement d'un « calcaire coquillier » tronqué, et elle est d'autant
  plus confuse que la fin de la même phrase parle des coquilles des organismes. Quant aux
  roches d'Amérique du Nord, le gneiss d'Acasta est daté d'environ 4,03 milliards d'années
  et la ceinture de Nuvvuagittuq de davantage encore : elles ne s'approchent pas des quatre
  milliards, elles les dépassent.
- **Correction proposée** : « Le calcaire, la craie de nos falaises normandes ou les
  calcaires coquilliers sont bâtis à partir des squelettes et des coquilles d'innombrables
  organismes marins » ; et « les plus vieilles roches connues, au Canada, dépassent quatre
  milliards d'années ».
- **Fait** : appliqué mot pour mot dans `23.json`.

**Le reste de la leçon 23 est juste** : double définition du minéral (composition + réseau
cristallin), graphite et diamant comme démonstration, registre de l'Association
internationale de minéralogie et ses ~5 800 espèces, classes chimiques, domination des
silicates et feldspaths à ~la moitié du volume de la croûte, échelle de Mohs proposée en
1812 avec ses dix termes dans le bon ordre, avertissement — trop rare — que l'échelle est
**ordinale et non proportionnelle**, repères de terrain (ongle, cuivre, acier à 5,5),
distinction dureté/ténacité illustrée par le diamant cassant selon un plan de clivage,
trait de rayure sur porcelaine plus fiable que la couleur, effervescence des carbonates,
opposition plutonique/volcanique par la vitesse de refroidissement, obsidienne, basalte
majoritaire sur les fonds océaniques, roches détritiques nommées par la taille des grains,
sédimentaires à moins d'un dixième du volume de la croûte mais trois quarts de sa surface
et seules porteuses de fossiles, principe de superposition, métamorphisme sans fusion,
foliation perpendiculaire à la contrainte, cycle des roches bouclé jusqu'à la refusion.
L'explication de la question 5 relie le test à l'acide à la formation des grottes
calcaires : c'est exactement ce qu'on attend d'une explication de QCM.

---

## Les cinq constats « à confirmer » : vérifiés et tranchés

Mon prédécesseur avait laissé cinq constats en suspens faute d'avoir pu vérifier sur le
web. Je les ai tous vérifiés. **Les cinq sont confirmés**, dont deux avec une correction
plus précise que celle qu'il proposait.

**1. Le microbiote ne pèse pas deux kilos — CONFIRMÉ, à appliquer.**
L'étude de Sender, Fuchs et Milo (*PLOS Biology*, 2016), celle-là même que le texte
invoque pour le rapport révisé de 1:1, estime la masse bactérienne totale portée par un
homme de 70 kg à **environ 200 grammes**, l'essentiel dans le côlon. Les 1,5 à 2 kg
souvent cités viennent des anciennes estimations de volume colique, révisées en même temps
que le fameux ratio de dix pour un. Le texte garde donc bien la moitié périmée de
l'estimation. Correction à appliquer : « pèse environ deux cents grammes ». La même erreur
existe deux fois (accroche de `sv-microbiote` et cours `sv-microbiote`).

**2. Les espèces invasives sur les îles — CONFIRMÉ, et plus fort qu'annoncé.**
L'évaluation mondiale de l'IPBES consacrée aux espèces exotiques envahissantes (septembre
2023) établit qu'elles jouent un rôle majeur dans **60 % des extinctions documentées**, et
que **90 % de ces extinctions ont eu lieu sur des îles**. Sur les îles, elles ne sont donc
pas la deuxième cause : elles sont impliquées dans la majorité des cas documentés.
Correction à appliquer telle que proposée : « Elles sont la première cause d'extinction
documentée sur les îles, où la faune n'a pas évolué face à ces prédateurs ou concurrents. »

**3. Le cœur de la baleine bleue — CONFIRMÉ, et requalifié GRAVE.**
Voir le constat détaillé plus haut (leçon 10) : le seul cœur jamais pesé fait ~180 kg, et
le « 600 » vient d'un chiffre en livres. L'erreur figure à deux endroits du dépôt.

**4. L'écart espérance de vie / espérance de vie en bonne santé — CONFIRMÉ, mais la cause
de l'erreur n'est pas celle qu'on croit.**
Le chiffre « une dizaine d'années » ne correspond à **aucun** des deux indicateurs
français, parce que le texte ne dit pas lequel il utilise. Données 2023 (DREES/Insee) :
espérance de vie à la naissance de **80,0 ans** pour les hommes et **85,7 ans** pour les
femmes ; espérance de vie **sans incapacité** (l'indicateur européen) de **63,6** et
**64,2 ans** — soit un écart de **16 ans chez les hommes et 21 ans chez les femmes** ;
espérance de vie **sans incapacité forte**, elle, inférieure de 6 ans (hommes) et 8 ans
(femmes) à l'espérance de vie. « Une dizaine » tombe entre les deux et ne vaut ni pour
l'un ni pour l'autre. Correction proposée, plus sûre que la précédente : « Avec
l'indicateur européen d'espérance de vie sans incapacité (63,6 ans pour les hommes et
64,2 ans pour les femmes en 2023, contre 80,0 et 85,7 ans d'espérance de vie), l'écart
atteint seize à vingt et un ans — chiffres 2023, à redater à chaque mise à jour. »
Cette vérification confirme au passage le constat voisin sur l'espérance de vie donnée à
« soixante-dix-neuf ans pour les hommes » : la valeur 2023 est bien de 80,0 ans.

**5. L'assainissement géré en toute sécurité — CONFIRMÉ.**
Le suivi conjoint OMS/UNICEF (JMP, rapport 2023 portant sur 2000-2022) chiffre à **3,4
milliards de personnes, soit deux personnes sur cinq**, celles qui ne disposent pas de
services d'assainissement gérés en toute sécurité. « Environ un tiers » sous-estime donc
d'une dizaine de points. Correction à appliquer dans la question `sv2-eau-potable` et dans
son cours : « Environ deux personnes sur cinq », en ajustant les distracteurs, et en
précisant dans l'explication qu'il s'agit de l'assainissement *géré en toute sécurité*,
indicateur plus exigeant que le simple accès à des toilettes.

---

## Passe 2

Mon prédécesseur avait lu une fois les fichiers de seed, les cours, le cahier et les
leçons 01-04 ; je ne les avais pas lus. Ma passe 2 sur ces fichiers est donc une vraie
seconde lecture indépendante, faite sans reprendre ses notes en main d'abord. Je note ici
**uniquement ce qu'elle ajoute**, fichier par fichier.

### Passe 2 sur `prisma/seed/culture-g/sciences-vie.ts` (13 notions, 128 questions)

#### [MOYEN] ✅ La crise du Permien : 90 % des espèces marines ici, 81 % dans la leçon 13
- **Où** : `sciences-vie.ts` — `sv-especes-menacees`, question « Combien d'extinctions de
  masse la Terre a-t-elle connues ? » ; contre `heritage/…/lecons/sciences-vie/13.json`
- **Texte** : « La plus sévère, à la fin du Permien il y a 252 millions d'années, a fait
  disparaître environ **quatre-vingt-dix pour cent** des espèces marines. » contre
  « environ **81 %** des espèces marines et 70 % des espèces terrestres disparaissent ».
- **Problème** : la date (252 Ma) est identique, le pourcentage non. Les 90 à 96 %
  correspondent aux estimations anciennes, révisées à la baisse ; la valeur de 81 % est
  celle que retiennent les synthèses récentes, et c'est déjà celle du cahier. Il faut
  choisir, d'autant que la question 4 de la leçon 13 demande précisément de comparer
  l'ampleur des crises.
- **Correction proposée** : harmoniser sur « environ quatre-vingts pour cent des espèces
  marines » dans les deux fichiers.
- **Fait** : appliqué dans `sciences-vie.ts` (`sv-especes-menacees`, 90 % → 80 %) et dans
  `13.json` (81 % → 80 %, dans les trois occurrences).

#### [MOYEN] ✅ Le séquoia « plus grand organisme vivant par la masse », que sa propre explication contredit
- **Où** : `sciences-vie.ts` — `sv-plantes-adaptations`, dernière question
- **Texte** : énoncé « Quel arbre est considéré comme l'organisme vivant le plus grand du
  monde ? » ; bonne réponse « Le séquoia géant, par la masse » ; distracteurs « Le
  baobab », « Le chêne pédonculé », « Le manguier » ; explication « Le General Sherman, en
  Californie, dépasse mille cinq cents mètres cubes de bois. Certains réseaux de
  champignons couvrent des surfaces plus vastes encore. »
- **Problème** : deux défauts qui se cumulent. D'abord la qualification « par la masse »
  est contestable : le peuplier clonal Pando, dans l'Utah, est couramment évalué à environ
  6 000 tonnes, soit près de trois fois la masse du General Sherman, et c'est lui que la
  plupart des sources désignent comme le plus lourd organisme vivant. Ensuite l'énoncé
  demande « quel **arbre** » et propose quatre arbres : la question se répond sans rien
  savoir, par la seule notoriété du séquoia. L'explication ajoute enfin une réserve sur les
  champignons qui affaiblit la réponse au lieu de l'asseoir.
- **Correction proposée** : « Quel arbre détient le record de volume de bois sur pied ? »,
  réponse « Le séquoia géant », explication « Le General Sherman, en Californie, approche
  mille cinq cents mètres cubes de bois. Il n'est pourtant pas l'organisme le plus lourd :
  le peuplier clonal Pando, dans l'Utah, atteindrait six mille tonnes, et certains réseaux
  de champignons couvrent plusieurs kilomètres carrés. »
- **Fait** : appliqué mot pour mot dans `sciences-vie.ts` (`sv-plantes-adaptations`) ; le
  cours correspondant (`sv-plantes-adaptations` dans `cours/sciences-vie.ts`), qui
  affirmait la même chose, a été corrigé dans le même sens.

#### [MINEUR] ✅ L'en-tête du fichier annonce « treize notions sans cours » — les treize ont un cours
- **Où** : `prisma/seed/culture-g/sciences-vie.ts`, ligne 2 ; contre
  `prisma/seed/culture-g/cours/sciences-vie.ts`, qui définit bien les treize clés
  `sv-adn-heredite` … `sv-sante-publique`
- **Problème** : commentaire périmé, du même genre que le « vingt notions » de
  `sciences-vie-3.ts` alors qu'il y en a 19 (déjà signalé). Un commentaire faux en tête de
  fichier est ce qui trompe le plus sûrement le prochain contributeur — c'est d'ailleurs
  exactement l'endroit où l'on irait chercher la liste des notions dépourvues de cours,
  qui sont en réalité `sv2-nutrition-digestion`, `sv2-oceans-vie` et `sv2-neurosciences`.
- **Correction proposée** : « Sciences de la vie & Terre — treize notions, premier lot. »
- **Fait** : appliqué mot pour mot. Au passage, l'en-tête de `sciences-vie-2.ts`
  (« vingt notions sans cours ») a aussi été corrigé, puisque les trois cours manquants
  ont été écrits (voir le constat [MOYEN] correspondant).

**Ce que la passe 2 confirme sur ce fichier** : les 128 questions sont solides et souvent
mieux datées que la moyenne du dépôt (Toumaï à 7 Ma, Lucy en 1974, Jebel Irhoud repoussant
*Homo sapiens* à 300 000 ans en 2017, la phalange dénisovienne de 2008, le carbone 14 et
sa demi-vie de 5 700 ans, l'accord de Paris en 2015, le protocole de Montréal en 1987,
Ebbinghaus en 1885, et surtout l'Anthropocène écarté comme unité formelle en 2024, ce qui
est d'une fraîcheur inhabituelle). Trois questions désamorcent activement un contresens
courant : « dominant ne veut pas dire répandu », « la sélection naturelle ne suppose ni but
ni progrès », « une vague de froid ne dit rien du climat ». Le chiffre de 86 milliards de
neurones y est juste, ce qui rend d'autant plus isolée l'erreur sur les cellules gliales de
la leçon 08.

### Passe 2 sur `prisma/seed/culture-g/sciences-vie-2.ts` (20 notions, 198 questions)

#### [MINEUR] ✅ « Conduction sautatoire » : le mot n'existe pas
- **Où** : `sciences-vie-2.ts` — `sv2-neurosciences`, question « À quelle vitesse l'influx
  nerveux se propage-t-il au maximum ? »
- **Texte** : « La gaine de myéline accélère considérablement la conduction en la rendant
  **sautatoire**. »
- **Problème** : le terme consacré est **saltatoire** (du latin *saltare*, sauter), et
  c'est celui qu'emploie correctement la leçon 08 du cahier, qui prend même la peine d'en
  donner l'étymologie. *Sautatoire* est une francisation fautive.
- **Correction proposée** : « en la rendant saltatoire ».
- **Fait** : appliqué dans `sciences-vie-2.ts` (`sv2-neurosciences`).

#### [MOYEN] ✅ Les trois notions sans cours ont déjà leur cours, dans le cahier
- **Où** : `prisma/seed/culture-g/cours/sciences-vie.ts` (clés absentes) ;
  `heritage/culture-g/data/lecons/sciences-vie/08.json`, `09.json` et `14.json`
- **Problème** : mon prédécesseur signalait que `sv2-nutrition-digestion`,
  `sv2-oceans-vie` et `sv2-neurosciences` sont les trois seules notions du domaine
  dépourvues de cours, soit trente questions orphelines. Je complète le constat par ce qui
  le rend réparable en une heure : **le cahier d'origine contient déjà, pour ces trois
  notions exactement, une leçon complète et de bonne facture** — la leçon 09 « La
  nutrition et la digestion », la leçon 14 « Les océans et la vie marine » et la leçon 08
  « Le cerveau et le système nerveux ». Les trente questions orphelines y trouvent toutes
  leur réponse ; j'ai vérifié les recoupements (amylase salivaire, bile hépatique,
  villosités, glycogène pour la première ; phytoplancton, zone abyssale, acidification
  pour la deuxième ; arc réflexe, myéline, sympathique/parasympathique, neurotransmetteurs
  pour la troisième).
- **Correction proposée** : écrire les trois cours manquants en condensant les leçons 08,
  09 et 14 — en corrigeant au passage les erreurs que je signale sur ces leçons (cellules
  gliales, durée de la digestion, besoin en eau, volume habitable des océans), faute de
  quoi le seed héritera de trois erreurs neuves.
- **Fait** : les trois cours ont été rédigés à neuf (pas recopiés depuis le cahier), avec
  partout les valeurs déjà correctes : ~85 milliards de cellules gliales, distinction
  digestion (8-12 h) / transit complet (1-3 jours), 96 % du volume de la biosphère pour
  les océans, conduction saltatoire à 100-120 m/s. Ils n'héritent donc d'aucune des
  erreurs des leçons 08, 09 et 14.

**Ce que la passe 2 confirme sur ce fichier** : c'est le lot le mieux tenu des trois. Les
198 questions sont exactes sur tout ce que j'ai pu vérifier — Hooke en 1665, Margulis et
l'endosymbiose, Yamanaka et les cellules souches induites de 2006, 206 os, plus de 600
muscles, ovulation située « quatorze jours avant les règles suivantes, non au quatorzième
jour du cycle », Louise Brown en 1978, ménopause vers 51 ans, mucoviscidose à une naissance
sur 4 000, Tansley en 1935, transfert trophique de 10 %, Nobel d'éthologie 1973, téosinte
et maïs il y a 9 000 ans, famine irlandaise de 1845, Svalbard en 2008, requin baleine à 18
mètres, Burgess en 1909, Archaeopteryx en 1861 « deux ans après *L'Origine des espèces* »,
explosion cambrienne vers 540 Ma, influx à 120 m/s, CIRC et le travail de nuit, sols
stockant deux à trois fois le carbone de l'atmosphère, désertification et sa convention de
1994, amiante interdite en France en 1997, Minamata, aurochs éteint en Pologne en 1627,
renards de Beliaev, cheval domestiqué dans la steppe pontique, Eldredge et Gould en 1972.
Plusieurs questions démontent activement une idée reçue — l'acide lactique des courbatures,
l'artère définie par le sens du flux, la surface intestinale ramenée à « plusieurs dizaines
de mètres carrés » et non aux 200 m² des vieux manuels, la classification du CIRC qui
mesure la preuve et non le risque, le loup de Yellowstone « parfois surinterprété ». Les
deux seules erreurs de fond de ce fichier restent celles déjà identifiées : le « court de
tennis » alvéolaire et le « tiers » de la population sans assainissement sûr.

### Passe 2 sur `prisma/seed/culture-g/sciences-vie-3.ts` (19 notions, 189 questions)

#### [MOYEN] ✅ « Les siréniens seuls » : un distracteur qui n'est faux que par un adverbe
- **Où** : `sciences-vie-3.ts` — `sv3-mammiferes`, question « Quel groupe de mammifères est
  retourné vivre entièrement dans l'eau ? »
- **Texte** : propositions `["Les cétacés", "Les pinnipèdes", "Les siréniens seuls", "Les
  loutres"]`, bonne réponse « Les cétacés ».
- **Problème** : les siréniens — lamantins et dugongs — sont, tout autant que les cétacés,
  des mammifères entièrement aquatiques qui ne reviennent jamais à terre. La proposition
  n'est fausse que par le mot « seuls », qui la transforme en affirmation d'exclusivité.
  L'apprenant qui sait ce qu'est un lamantin est puni de le savoir ; celui qui ne le sait
  pas répond correctement. Le procédé se répète ailleurs dans le lot (« La nosémose
  seule », « Le peroxysome seul », « l'OMM seule », « le PNUE seul ») : l'ajout de *seul*
  sert de rustine pour rendre faux un distracteur vrai, et il finit par signaler
  mécaniquement la mauvaise réponse.
- **Correction proposée** : remplacer « Les siréniens seuls » par « Les phoques », et
  ajouter à l'explication : « Les siréniens, lamantins et dugongs, sont eux aussi
  entièrement aquatiques, mais d'une lignée distincte, proche des éléphants. » De façon
  générale, remplacer les distracteurs rendus faux par un « seul » par des propositions
  franchement fausses.
- **Fait** : le distracteur a été remplacé par « Les ours polaires » plutôt que
  « Les phoques » — la proposition voisine « Les pinnipèdes » couvre déjà les phoques, et
  les deux auraient fait doublon. L'explication précise maintenant le cas des siréniens
  et celui des pinnipèdes. Les autres « seul(e) » du domaine (nosémose, peroxysome, OMM,
  PNUE) n'ont pas été repris : ce sont des distracteurs dans des questions différentes,
  hors du périmètre strict de ce constat, et je ne les ai pas jugés faux au même titre —
  à revoir si le propriétaire souhaite généraliser la correction.

#### [MINEUR] ✅ « Le syrinx » ici, « la syrinx » dans la leçon 18
- **Où** : `sciences-vie-3.ts` — `sv3-oiseaux`, question « Quel organe permet aux oiseaux
  de chanter ? » ; contre `heritage/…/lecons/sciences-vie/18.json`
- **Texte** : « **Le** syrinx » (bonne réponse et explication) contre « Le chant est
  produit par **la** syrinx » (leçon 18).
- **Problème** : *syrinx* est un nom **féminin** en français. La forme du seed est fautive,
  et elle contredit le cahier.
- **Correction proposée** : « La syrinx », et accorder l'explication : « Située à la base
  de la trachée, elle permet parfois d'émettre deux sons simultanément. »
- **Fait** : appliqué mot pour mot dans `sciences-vie-3.ts` (`sv3-oiseaux`).

#### [MINEUR] ✅ La sortie des eaux des plantes : 450 Ma ici, 480 Ma dans la leçon 12
- **Où** : `sciences-vie-3.ts` — `sv3-terre-atmosphere-histoire`, question « Quand les
  plantes ont-elles colonisé les continents ? » ; contre `12.json`
- **Texte** : « Il y a environ quatre cent cinquante millions d'années » contre « les
  plantes sortent de l'eau il y a environ 480 millions d'années ».
- **Problème** : trente millions d'années d'écart entre les deux fichiers, sur un fait que
  les deux présentent comme la bonne réponse d'un QCM. Les deux valeurs sont défendables
  (spores dès ~470-480 Ma, premières plantes vasculaires vers 430 Ma), mais il faut
  trancher — d'autant que la leçon 12 en tire un calcul, lui-même faux (voir plus haut).
- **Correction proposée** : retenir partout « il y a environ 470 millions d'années », et
  recalculer en conséquence l'écart avec les tétrapodes.
- **Fait** : harmonisé à 470 Ma dans `sciences-vie-3.ts` (`sv3-terre-atmosphere-histoire`),
  `03.json` (déjà à 470) et `cours/sciences-vie.ts` (`sv3-terre-atmosphere-histoire`).
  Je n'ai **pas** touché `12.json`, qui reste à 480 Ma : ce chiffre y est imbriqué dans le
  calcul « 480 − 365 = 115 millions d'années » du constat [GRAVE] voisin, déjà corrigé —
  le changer aurait rouvert ce calcul. La leçon 12 reste donc l'unique endroit du dépôt à
  480 Ma ; à recaler sciemment si le propriétaire retouche un jour ce passage.

**Ce que la passe 2 confirme sur ce fichier, et un renfort pour un constat antérieur** :
`sv3-eau-corps` demande « Combien d'eau un adulte perd-il en moyenne par jour ? » et répond
« Environ **deux litres et demi** », ce qui est la valeur de référence de l'ANSES. Le
domaine se contredit donc lui-même sur ce point : la leçon 09 annonce un besoin de 2,8
litres là où le seed retient 2,5. Cela renforce la correction que je propose sur la leçon
09. Pour le reste, ce lot est exact sur tout ce que j'ai vérifié : onze vaccins obligatoires
depuis 2018, polio en baisse de plus de 99 % depuis 1988, Ramsar en 1971 et ses ~2 500
sites, empreinte génétique de 1984, Nobel de Pääbo en 2022, retour du loup en 1992 par le
Mercantour, ours slovènes lâchés à partir de 1996, vautours des Grands Causses depuis 1981,
Natura 2000 sur ~13 % du territoire, onze parcs nationaux dont trois en outre-mer, plus de
80 % de la biodiversité française en outre-mer, Alpes depuis ~60 Ma, chaîne des Puys
inscrite en 2018 et endormie depuis ~7 000 ans, dernière mine de charbon fermée à
Creutzwald en 2004, séismes de Bâle en 1356 et de Lambesc en 1909, cinq portions et 400 g
de fruits et légumes, 5 g de sel, dix verres d'alcool par semaine, limite de Hayflick de
1961, rein filtrant 180 litres de plasma par jour. La notion `sv3-mesures-biologie` est,
à elle seule, un petit cours d'esprit critique (témoin, double aveugle, randomisation,
facteur de confusion, puissance, biais de publication, préenregistrement) : c'est la
meilleure notion du domaine et je n'y ai pas trouvé une ligne à reprendre.

### Passe 2 sur `prisma/seed/culture-g/cours/sciences-vie.ts` (49 cours)

*(Lecture en cours, notes prises au fil de l'eau. Les deux premiers apports sont des
**renforts** pour des constats déjà ouverts : dans les deux cas, la formulation correcte
existe déjà ailleurs dans le dépôt, ce qui rend la correction indiscutable.)*

#### Renfort au constat [GRAVE] sur les cellules gliales de la leçon 08
- **Où** : `cours/sciences-vie.ts` — cours `sv-cerveau-memoire`, section « L'organe »
- **Texte** : « Un cerveau humain compte environ quatre-vingt-six milliards de neurones,
  **et au moins autant de cellules gliales**, longtemps considérées comme un simple support
  et dont on connaît aujourd'hui le rôle actif. »
- **Ce que cela change** : le seed dit juste — un rapport de l'ordre de 1 pour 1 — là où la
  leçon 08 du cahier annonce « 170 à 300 milliards » et « beaucoup plus nombreuses ». Il
  n'y a donc pas à arbitrer entre deux sources : il suffit d'aligner la leçon 08 sur la
  formulation du cours, qui est à la fois exacte et déjà écrite.

#### Renfort au constat [MOYEN] sur le cœur des poissons de la leçon 10
- **Où** : `cours/sciences-vie.ts` — cours `sv2-respiration-circulation`, section « Deux
  circuits, pas un »
- **Texte** : « Un cœur à quatre cavités permet les deux régimes, ce que ne permet pas le
  **cœur à trois cavités des amphibiens**. »
- **Ce que cela change** : le seed attribue correctement aux **amphibiens** le cœur à trois
  cavités et la séparation incomplète, quand la leçon 10 attribue ce défaut aux
  **poissons**. Là encore, la bonne formulation existe déjà dans le dépôt.

*(Suite et fin de la passe 2 sur les 49 cours.)*

#### [GRAVE] Le cancer du poumon donné comme le plus meurtrier « dans les deux sexes » en France
- **Où** : `cours/sciences-vie.ts` — cours `sv3-cancer`, section « Ce qui augmente le
  risque »
- **Texte** : « En France, le cancer du sein est le plus fréquent chez la femme, celui de
  la prostate chez l'homme. **Le cancer du poumon reste le plus meurtrier dans les deux
  sexes**, sa fréquence chez les femmes augmentant depuis des décennies avec le décalage de
  la diffusion du tabagisme féminin. »
- **Problème** : erreur de fait pour les femmes. En France, le cancer du **sein** reste la
  première cause de décès par cancer chez la femme : environ **12 800 décès en 2023**,
  contre **10 700** pour le poumon. Le poumon est bien le plus meurtrier chez l'homme, et
  il progresse rapidement chez la femme — c'est la tendance que la phrase voulait décrire —
  mais il n'a pas encore dépassé le sein. La question correspondante du seed est, elle,
  correctement prudente (« Le cancer du poumon en est en revanche devenu une cause majeure
  de décès ») : c'est le cours qui va plus loin que ses données.
- **Correction proposée** : « Le cancer du poumon est le plus meurtrier chez l'homme, et il
  progresse rapidement chez la femme, où il talonne désormais le cancer du sein — encore
  première cause de décès par cancer féminin — sous l'effet retardé de la diffusion du
  tabagisme féminin. »

#### [MINEUR] ✅ Deux divergences numériques mineures entre le seed et le cahier
- **Où et texte** :
  - Taille de l'autruche : « atteint deux mètres cinquante » (cours `sv3-oiseaux`) contre
    « 2,75 m » (leçon 18, visuel « Records du monde aviaire »).
  - Période de l'horloge interne : « autour de vingt-quatre heures et quart » (cours
    `sv2-sommeil-rythmes`) contre « en dérivant chaque jour d'environ une demi-heure »
    (leçon 21, qui parle du cas particulier de Siffre).
- **Problème** : sans gravité, mais ce sont deux chiffres qu'un apprenant peut rencontrer
  côte à côte. Le premier gagnerait à être donné sous forme de fourchette (« jusqu'à 2,75 m
  pour les plus grands mâles »), le second à distinguer explicitement la période moyenne de
  l'espèce (~24 h 15) du cas mesuré chez Siffre (~24 h 30).
- **Fait** : les deux corrections suggérées ont été appliquées. L'autruche est maintenant
  « jusqu'à deux mètres soixante-quinze chez les plus grands mâles » dans
  `cours/sciences-vie.ts` (`sv3-oiseaux`). Pour l'horloge interne, le cours
  `sv2-sommeil-rythmes` (~24 h 15, moyenne de l'espèce) et la leçon 21 (~24 h 30, cas
  mesuré chez Siffre) étaient déjà distincts après la correction du constat [MOYEN]
  Leçon 21 ci-dessus ; rien à ajouter.

**Ce que la passe 2 confirme sur les 49 cours : mon prédécesseur avait raison, c'est la
meilleure part du domaine, et de loin.** J'ai relu les 49 cours en entier et je n'y ai
trouvé, en dehors des erreurs déjà consignées (hémoglobine, papillon de Darwin, coléoptères
au quart, microbiote à deux kilos, sommeil sept à huit, « Le loutre de mer », astérisques
d'italique), qu'un seul fait faux — celui ci-dessus. Le reste est non seulement exact mais
souvent d'une qualité que je n'attendais pas dans du contenu de révision : le cours
`sv3-mesures-biologie` explique le biais de publication et le préenregistrement avec
l'exemple des vingt équipes ; `sv3-cancer` démonte le biais d'avance au diagnostic dans les
survies à cinq ans ; `sv2-toxicologie` explique pourquoi la classification du CIRC mesure la
preuve et non le risque ; `sv3-microbiote-sante` dit franchement que « le marketing devance
les preuves » ; `sv2-eau-potable` explique le chlore résiduel par un arbitrage assumé ;
`sv3-eau-corps` démolit le mythe du litre et demi ; `sv2-domestication` expose l'hypothèse
de la crête neurale ; `sv3-symbioses` termine sur l'idée que la symbiose « a produit les
organismes eux-mêmes ». Plusieurs cours prennent explicitement la peine de désamorcer une
idée fausse — l'acide lactique, le dédoublement de personnalité de la schizophrénie, le
« se secouer » de la dépression, la rumeur du loup réintroduit, le carbone 14 inutilisable
en paléontologie profonde, « naturel ne signifie pas sans effet » à propos du cuivre.

### Passe 2 sur `heritage/culture-g/data/sciences-vie.json` (57 questions + 3 cours)

#### Deux renforts pour des constats ouverts sur les leçons
- **Galilée (renfort au constat [MOYEN] de la leçon 06)** : la question 27 du cahier écrit
  correctement « Jupiter possède plus de 90 lunes connues, dont les quatre plus grandes,
  Io, Europe, Ganymède et Callisto, ont été **découvertes par Galilée en 1610** ». Le
  cahier date donc juste ce que la leçon 06 range sous 1609 : là encore, la correction
  consiste à aligner la leçon sur ce que le dépôt écrit déjà ailleurs.
- **Crise K-Pg (renfort au constat [MOYEN] de la leçon 13)** : la question 40 du cahier
  écrit « l'extinction de masse de la fin du Crétacé, qui a éliminé environ **trois quarts
  des espèces** de la planète ». C'est la valeur de référence, et elle contredit
  frontalement les « environ la moitié des espèces » de la leçon 13. La correction que je
  proposais est donc confirmée par le dépôt lui-même.

#### [MINEUR] ✅ Six divergences numériques entre le cahier et le reste du domaine
- **Où et texte** :
  - Volume du manteau terrestre : « près de **80 %** du volume terrestre » (cours « La Terre
    et le système solaire », et question 54) contre « environ **84 %** » (leçon 05, texte et
    tableau).
  - Nombre de plaques lithosphériques : « une **quinzaine** de grandes plaques » (cours du
    cahier) contre « une **douzaine** de grandes plaques » (leçon 05, texte et légende).
  - Os du nouveau-né : « environ **270** » (question 1 et cours « Le corps humain ») contre
    « près de **trois cents** » (cours `sv2-squelette-muscles`).
  - Globules rouges : « environ **5 millions** par mm³ » (question 6) contre « à peu près
    **4,5 millions** » (leçon 10, texte et visuel).
  - Premiers vertébrés terrestres : « il y a environ **370 millions d'années** » (cours
    « Génétique et évolution ») contre « vers **365 millions d'années** » (leçon 12).
  - Crise du Permien : « plus de **90 %** des espèces marines » (cours du cahier **et**
    `sv-especes-menacees`) contre « environ **81 %** » (leçon 13).
- **Problème** : aucune de ces valeurs n'est absurde, toutes sont dans les fourchettes
  publiées, mais elles se contredisent deux à deux dans un même domaine que le même
  apprenant parcourt. Le cas du Permien est le plus significatif : deux fichiers sur trois
  portent l'ancienne estimation (90-96 %), un seul la valeur révisée (81 %).
- **Correction proposée** : harmoniser en retenant partout la valeur la plus récente ou la
  fourchette réelle — 84 % pour le manteau, « une douzaine de grandes plaques et une
  cinquantaine de petites », « environ 270 à 300 os » à la naissance, « 4,5 à 5 millions »
  d'hématies par mm³, « vers 365-370 millions d'années », et « environ 80 % des espèces
  marines » pour le Permien.
- **Fait** : les six harmonisations ont été appliquées mot pour mot dans
  `heritage/culture-g/data/sciences-vie.json` (manteau 84 %, douzaine de grandes plaques
  et cinquantaine de petites, 270 à 300 os, 4,5 à 5 millions d'hématies, 365 à 370 millions
  d'années, crise du Permien à 80 % — cette dernière déjà traitée avec le constat passe 2
  sur le même sujet).

**Ce que la passe 2 confirme sur le cahier : c'est la partie la plus sûre du domaine avec
les cours du seed.** J'ai relu les 57 questions et les 3 cours, et vérifié tout ce qui est
vérifiable : 206 os, peau de 1,5 à 2 m², 46 chromosomes, 100 000 battements par jour et
plus de 2,5 milliards dans une vie, Mercure à 58 M km avec 430 °C le jour, Vénus à 465 °C,
Olympus Mons à 22 km, Pluton reclassée en 2006, Jupiter à 143 000 km et 1 300 fois le
volume terrestre, Huygens et les anneaux en 1655, Proxima à 4,24 al et Proxima b en 2016,
Voie lactée de 100 000 al et 100 à 400 milliards d'étoiles, lumière solaire en 8 min 20 s,
Armstrong le 21 juillet 1969 (heure française), guépard à 110-120 km/h, faucon pèlerin à
plus de 300 km/h, pieuvre à trois cœurs et hémocyanine, cœlacanthe redécouvert en 1938 par
Courtenay-Latimer et identifié par Smith en 1939, Hyperion à 116 m découvert en 2006,
General Sherman à « environ 1 500 m³ », 32 dents, insuline isolée en 1921 par Banting et
Best, glycémie à 1 g/L, pH 7,4 du sang, 280 → 420 ppm de CO₂, Kola à 12 km soit 0,2 % du
rayon, graine de 1 200 km de rayon, Lune à 27 jours et 3,8 cm/an, face cachée photographiée
en 1959, Nobel de la paix 2007 du GIEC avec Al Gore, Mendel à Brno et le mot « génétique »
créé en 1905, Morgan et la drosophile, Toumaï découvert en 2001 par l'équipe de Michel
Brunet, genre *Homo* vers 2,8 Ma, feu maîtrisé vers 400 000 ans, Pääbo et son Nobel 2022,
tardigrade et cryptobiose, parthénogenèse des faux-bourdons. Les explications suivent
presque toutes la même structure — la réponse, son mécanisme, un chiffre, puis la raison
pour laquelle les distracteurs sont faux —, ce qui en fait le lot le plus régulier du
domaine. Les seules erreurs restent celles déjà consignées : le cœur de baleine à 600 kg,
le « terrain de tennis » alvéolaire, le « Dérulé » de la question 4, et le réchauffement
de 1,1 à 1,2 °C sans date.

### Passe 2 sur les leçons 01 à 04 du cahier

**Leçon 01 (« La cellule, unité du vivant ») — aucun constat nouveau.** Dates et faits
vérifiés : Hooke en 1665, van Leeuwenhoek et ses lentilles taillées à la main,
Schleiden et Schwann en 1838-1839, Virchow en 1855 et sa phrase décisive, microscope
électronique dans les années 1930, procaryotes de 1 à quelques micromètres contre des
eucaryotes dix à cent fois plus volumineuses, endosymbiose de Lynn Margulis et ses trois
indices (ADN circulaire propre, ribosomes propres, division autonome), 46 et 23
chromosomes, mitose en cinq étapes correctement ordonnées. Les deux divergences déjà
consignées par mon prédécesseur se confirment ici et sont bien dans cette leçon : les
« trente-sept mille milliards » de cellules (contre 30 000 milliards dans le cahier) et
les « environ deux milliards d'années » de l'endosymbiose (contre « un milliard et demi »
dans le cours `sv2-cellule`). Une réserve de détail, trop mince pour un constat : le
visuel de comparaison affirme qu'un procaryote est « **toujours** unicellulaire », ce qui
est vrai en pratique mais faux au sens strict — cyanobactéries filamenteuses et
actinobactéries forment des assemblages différenciés. « Presque toujours unicellulaire »
suffirait.

**Leçon 02 (« Le règne animal et sa classification ») — aucun constat propre, mais un
troisième chiffre pour le dossier des insectes.** La leçon est exacte : Linné et la
nomenclature binominale, *Canis lupus*, groupes emboîtés, bascule phylogénétique après
1859, caractères dérivés partagés, l'exemple du cœlacanthe plus proche d'une vache que
d'un requin, la trentaine d'embranchements, les vertébrés à ~5 % des espèces animales pour
environ 70 000 espèces, les poissons apparus il y a ~500 Ma, la définition d'Ernst Mayr et
le contre-exemple du mulet, le barcoding, l'ADN environnemental, les ~18 000 espèces
animales décrites chaque année, et la conclusion — juste et bien expliquée — que les
oiseaux sont des reptiles au sens phylogénétique. **Le point à retenir pour le constat
[GRAVE] sur la leçon 15** : cette leçon-ci écrit « plus d'un million et demi d'espèces
animales décrites » pour **l'ensemble du règne animal**, quand la leçon 15 attribue « plus
d'un million et demi d'espèces actuelles » aux **seuls arthropodes** et 1,3 million aux
seuls insectes. Les trois chiffres ne peuvent pas être vrais ensemble. La correction de la
leçon 15 doit donc se caler sur ce total de 1,5 million d'espèces animales décrites (dont
~1 million d'insectes, soit ~70 %), qui est cohérent avec la leçon 16 et avec le seed.

#### [MINEUR] ✅ Leçon 03 : Jan Ingenhousz n'était pas physicien
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/03.json` — section « La photosynthèse,
  une réaction fondamentale »
- **Texte** : « **Le physicien** Jan Ingenhousz démontre dès 1779 que seules les parties
  vertes exposées à la lumière purifient l'air, posant les bases de notre compréhension. »
- **Problème** : Ingenhousz (1730-1799) était **médecin**, physiologiste et chimiste — il
  est notamment connu pour avoir variolisé la famille impériale d'Autriche. La qualité de
  « physicien » vient très probablement du faux ami anglais *physician*, qui signifie
  précisément *médecin*. La date de 1779 et le contenu de la découverte, eux, sont exacts.
- **Correction proposée** : « Le médecin et physiologiste Jan Ingenhousz démontre dès 1779
  que seules les parties vertes exposées à la lumière purifient l'air. »
- **Fait** : appliqué mot pour mot dans `03.json`.

**Le reste de la leçon 03 est exact** : autotrophie et paroi cellulosique, sortie des eaux
depuis des algues vertes d'eau douce, cuticule, xylème et phloème, rôle de la lignine,
~350 000 espèces végétales décrites, bilan de la photosynthèse en 6 CO₂ + 6 H₂O, phase
claire dans les thylakoïdes et cycle de Calvin dans le stroma, origine de l'oxygène dans la
molécule d'eau, stomates et cellules de garde, mycorhizes, angiospermes du Crétacé,
pollinisation animale depuis plus de cent millions d'années, Grande Oxydation à −2,4 Ga,
aspirine et écorce de saule. Deux explications de quiz sont remarquables : celle qui
rappelle que la plante **respire aussi**, jour et nuit (contresens scolaire classique), et
celle qui conclut que « la couleur d'un objet correspond toujours à la lumière qu'il
renvoie, et non à celle qu'il absorbe ». **Un apport pour le constat sur la sortie des eaux
des plantes** : cette leçon donne une **troisième** valeur, « environ 470 millions
d'années », après les 480 de la leçon 12 et les 450 du seed. C'est précisément la valeur
que je proposais de retenir partout — elle est déjà écrite ici.

#### [MOYEN] ✅ Leçon 04 : la cascade trophique de Yellowstone donnée pour acquise, alors que le seed la dit surinterprétée
- **Où** : `heritage/culture-g/data/lecons/sciences-vie/04.json` — section « Espèces clés et
  services écosystémiques » et explication de la question 5 ; contre
  `prisma/seed/culture-g/sciences-vie-2.ts`, `sv2-ecosystemes`
- **Texte** : leçon 04 — « La réintroduction du loup dans le parc de Yellowstone en 1995 a
  de même modifié le comportement des wapitis, permis la repousse des saules le long des
  rivières et favorisé le retour des castors et des oiseaux » ; seed — « La réintroduction
  du loup à Yellowstone a fourni un cas d'école, **quoique parfois surinterprété**. »
- **Problème** : le même dépôt tient deux discours sur le même exemple. La chaîne
  loup → wapitis → saules → castors est le récit popularisé, mais elle est contestée depuis
  une quinzaine d'années : les travaux ultérieurs montrent que la repousse des saules
  dépend surtout de l'hydrologie et du retour des castors eux-mêmes, que le déclin des
  wapitis doit beaucoup à la sécheresse et à la chasse, et que l'effet du seul loup est
  bien plus modeste qu'annoncé. La leçon enseigne comme un fait établi ce que le seed
  signale prudemment comme surinterprété — exactement le même travers que celui déjà
  relevé sur la lignine du Carbonifère, dans l'autre sens.
- **Correction proposée** : « La réintroduction du loup à Yellowstone en 1995 est le cas
  le plus cité : elle a modifié le comportement des wapitis, et l'on a longtemps attribué
  au loup seul la repousse des saules et le retour des castors. Les travaux récents
  nuancent cette lecture — sécheresse, hydrologie et castors y ont leur part —, ce qui ne
  retire rien au principe de la cascade trophique, mais rappelle qu'un écosystème a rarement
  une cause unique. »
- **Fait** : appliqué dans `04.json`, dans la section et dans l'explication du quiz.

**Le reste de la leçon 04 est exact** : Tansley en 1935, couple biotope/biocénose, écotones,
niche écologique et principe d'exclusion compétitive de Gause dans les années 1930, chaîne
d'exemple correctement fléchée « est mangé par », règle des dix pour cent avec sa
justification (chaleur, respiration, déplacements, parties non consommées), pyramide
écologique, oscillations lynx-lièvre reconstituées à partir des registres de fourrures,
cycles du carbone, de l'azote et de l'eau, nodosités des légumineuses, succession
écologique, loutre de mer et forêts de laminaires. Le visuel en barres (100 / 10 / 1 /
0,1 %) est la meilleure illustration du domaine : il rend visible en un coup d'œil pourquoi
les chaînes sont courtes.

---

## Ce que la seconde passe a ajouté (relecteur 2)

La passe 2 a porté sur les fichiers que mon prédécesseur avait lus une fois et que je
n'avais pas lus : les trois lots de questions, les 49 cours, le cahier et ses trois cours,
les leçons 01 à 04. Elle a ajouté **neuf constats** et **cinq renforts**.

Constats nouveaux, du plus grave au plus léger :

1. [GRAVE] Le cancer du poumon donné comme le plus meurtrier « dans les deux sexes »
   (cours `sv3-cancer`) — faux pour les femmes en France.
2. [MOYEN] La crise du Permien à 90 % des espèces marines dans deux fichiers, 81 % dans un
   troisième.
3. [MOYEN] Le séquoia « plus grand organisme vivant par la masse », que sa propre
   explication contredit, dans une question à quatre distracteurs tous arbres.
4. [MOYEN] Les trois notions sans cours ont déjà leur matière dans les leçons 08, 09 et 14.
5. [MOYEN] « Les siréniens seuls », distracteur vrai rendu faux par un adverbe — et le
   procédé se répète cinq fois dans le domaine.
6. [MOYEN] La cascade trophique de Yellowstone donnée pour acquise dans la leçon 04, alors
   que le seed la dit surinterprétée.
7. [MINEUR] « Conduction sautatoire » pour *saltatoire*.
8. [MINEUR] « Le syrinx » au masculin, « la syrinx » dans le cahier.
9. [MINEUR] Jan Ingenhousz qualifié de « physicien » — faux ami de l'anglais *physician*.
   S'y ajoutent l'en-tête « treize notions sans cours » qui est faux, la sortie des eaux des
   plantes datée de 450, 470 ou 480 Ma selon le fichier, et six divergences numériques entre
   le cahier et le reste du domaine.

Renforts — dans les cinq cas, **la formulation correcte existe déjà ailleurs dans le
dépôt**, ce qui rend la correction mécanique :

- le cours `sv-cerveau-memoire` écrit « au moins autant de cellules gliales » (contre les
  170-300 milliards de la leçon 08) ;
- le cours `sv2-respiration-circulation` attribue correctement le cœur à trois cavités aux
  **amphibiens** (contre les poissons de la leçon 10) ;
- la question 27 du cahier date de **1610** les satellites de Jupiter (contre 1609 dans la
  leçon 06) ;
- la question 40 du cahier donne **trois quarts des espèces** pour la crise K-Pg (contre
  « la moitié » dans la leçon 13) ;
- la question `sv3-eau-corps` retient **2,5 litres** d'eau par jour (contre 2,8 dans la
  leçon 09), et le cours correspondant démolit explicitement le mythe du litre et demi.

## Bilan de la reprise

**Ce que j'ai lu** : les 19 leçons restantes (`05.json` à `23.json`, soit 95 sections et
95 questions de quiz), puis, en passe 2, l'intégralité du périmètre — 515 questions de
seed, 49 cours, 57 questions et 3 cours du cahier, 4 leçons. Total effectivement lu par les
deux relecteurs réunis : **712 questions et 98 cours ou leçons**, chacun lu au moins une
fois, et les quatre cinquièmes du corpus lus deux fois.

**Ce qui est sain.** Mon prédécesseur avait raison sur l'essentiel et je le confirme après
une lecture indépendante : les 49 cours du seed et les 57 questions du cahier sont d'un
niveau que l'on rencontre rarement dans du contenu de révision, parce qu'ils expliquent des
mécanismes, datent leurs chiffres, et désamorcent activement les contresens courants. Les
leçons du cahier sont plus inégales, mais deux d'entre elles — la 18 sur les oiseaux et la
19 sur les champignons — sont irréprochables, et la 22 sur les sens est la seule page du
domaine sur laquelle je n'ai pas une remarque à faire. Les explications de quiz qui prennent
la peine de dire *pourquoi* un distracteur est faux (la chauve-souris et sa membrane, les os
creux qui ne stockent pas d'oxygène, le blé pollinisé par le vent, le rapprochement du Soleil
qui ne veut rien dire à cette échelle) sont ce que le domaine fait de mieux.

**Ce qui ne l'est pas.** Trois défauts structurels ressortent de la seconde lecture, et
aucun ne se corrige question par question :

1. **Les chiffres ne viennent pas d'une source unique.** La quasi-totalité des erreurs que
   nous avons trouvées à deux sont des collisions entre deux fichiers qui ont raison
   séparément : gliales, cœur de baleine, coléoptères, part des insectes, Permien, plantes
   sorties des eaux, besoin en eau, K-Pg, manteau terrestre, plaques, hématies. Un tableau
   de valeurs de référence, partagé par le seed et le cahier, supprimerait d'un coup la
   moitié de ce rapport.
2. **Les leçons du cahier n'ont pas été relues à l'aune du seed.** Chaque fois que les deux
   se contredisent, c'est le seed qui a raison — sans exception dans les cinq cas que j'ai
   pu trancher. La correction la plus économique consiste donc à aligner les leçons sur les
   cours, et non l'inverse.
3. **La redondance entre les quatre corpus reste le premier problème pédagogique**, comme
   mon prédécesseur l'avait vu. J'y ajoute qu'elle traverse aussi la frontière seed/cahier :
   l'immunité collective est enseignée trois fois, la parenté oiseaux-dinosaures deux fois
   dans deux leçons voisines avec la même image, Fleming et 1928 apparaissent dans trois
   fichiers.
