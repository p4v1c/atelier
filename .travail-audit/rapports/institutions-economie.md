# Institutions & Économie

> ÉTAT : passes 1 et 2 terminées sur l'intégralité du périmètre.

## Ce que j'ai lu

| Fichier | Contenu | État |
|---|---|---|
| `prisma/seed/culture-g/institutions-economie.ts` | 13 notions, 127 questions | lu |
| `prisma/seed/culture-g/institutions-economie-2.ts` | 20 notions, 199 questions | lu |
| `prisma/seed/culture-g/institutions-economie-3.ts` | 19 notions, 189 questions | lu |
| `prisma/seed/culture-g/cours/institutions-economie.ts` | 42 cours, 158 sections | lu |
| `heritage/culture-g/data/institutions-economie.json` | 56 questions + 3 cours (14 sections) | lu |
| `heritage/.../lecons/institutions-economie/01..17.json` | 17 leçons, 85 sections, 85 questions de quiz | lu |

Total lu : **515 questions de seed + 56 questions du cahier + 85 questions de quiz
des leçons = 656 questions**, et **62 cours ou leçons, soit 257 sections**.

---

## Constats

### [GRAVE] ✅ Dans 86 % des questions du seed, la bonne réponse est la plus longue — répondre sans rien savoir donne 87 %

- **Où** : `prisma/seed/culture-g/institutions-economie.ts`, `-2.ts`, `-3.ts` — les 515 questions, toutes notions confondues
- **Texte (un exemple parmi 444)** : `["Qu'est-ce que le chômage partiel, ou activité partielle ?", ["Une réduction d'activité indemnisée par l'État pour éviter les licenciements", "Un temps partiel imposé", "Une rupture de contrat progressive", "Un congé sans solde"], 0, …]` — la bonne réponse fait 42 caractères de plus que le plus long des trois leurres.
- **Problème** : mesuré sur les 515 questions, la bonne réponse est **strictement la plus longue dans 444 cas, soit 86,2 %** (attendu au hasard : 25 %), et la plus courte dans 8 cas seulement. Elle dépasse la moyenne des distracteurs de **28 caractères** en moyenne. Une stratégie « je coche toujours la plus longue, je ne lis même pas » obtient **87,3 %** sur tout le domaine. Vingt et une notions sur cinquante-deux sont à dix sur dix. Le mécanisme est connu : on écrit la vraie réponse, complète et nuancée, puis on invente trois leurres courts. Le domaine n'entraîne donc pas à savoir, il entraîne à repérer la réponse longue — et l'apprenant qui réussit croit avoir appris.
  Ce n'est pas une hypothèse théorique : le dépôt a **déjà** traité exactement ce défaut sous sa forme positionnelle. `src/modules/kinds/melange.ts` explique en tête que la bonne réponse était au rang 0 dans 100 % des questions de culture générale, que cliquer « la première » donnait 55 %, et met en place une permutation déterministe pour y remédier. Le biais de longueur est le même défaut, non traité, et il est **plus fort ici** (87 %) que ne l'était le biais de position sur l'ensemble du module (83,6 % de réponses au rang 0). La permutation ne le corrige en rien : elle déplace la bonne réponse, elle ne la raccourcit pas.
- **Correction proposée** : régler les distracteurs sur la longueur de la bonne réponse, notion par notion. Sur l'exemple ci-dessus : `["Une réduction d'activité indemnisée par l'État pour éviter les licenciements", "Un passage à temps partiel imposé par l'employeur sans compensation", "Une rupture progressive du contrat étalée sur plusieurs mois", "Un congé sans solde accordé à la demande du salarié"]`. Et ajouter au validateur du module, à côté du contrôle de position déjà existant, un contrôle de longueur : refuser le seed si, sur une notion, la bonne réponse est la plus longue dans plus de la moitié des questions. C'est le seul constat de ce rapport qui se corrige mécaniquement à l'échelle du domaine, et le seul dont l'effet se mesure.
- **Fait** : déjà corrigé — mesuré à nouveau sur les 515 questions des trois fichiers seed, la bonne réponse n'est plus strictement la plus longue que dans 5,6 % des cas (29/514), et aucune notion ne dépasse le seuil de moitié. Le contrôle de longueur dans le validateur (`src/modules/kinds/melange.ts`) est hors périmètre de cette relecture et n'a pas été vérifié.

### [GRAVE] ✅ La zone euro compte vingt et un États, pas vingt (Bulgarie, 1er janvier 2026)

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:98` — `ie-monnaie-banques`
  et `prisma/seed/culture-g/cours/institutions-economie.ts:26` (section « Prix, changes et fragilités »)
- **Texte (question)** : « Combien de pays utilisent l'euro comme monnaie officielle dans la zone euro ? » → réponse « Vingt », explication « La Croatie l'a adopté en 2023, portant la zone euro à vingt États membres de l'Union. »
- **Texte (cours)** : « Vingt pays utilisent l'euro comme monnaie officielle au sein de la zone euro. »
- **Problème** : la Bulgarie a adopté l'euro le 1er janvier 2026. La bonne réponse est aujourd'hui **vingt et un**. La question est donc fausse, et le distracteur « Dix-neuf » (état d'avant 2023) devient un second piège inutile. Un apprenant retient un chiffre faux.
- **Correction proposée** : question — « Combien de pays utilisent l'euro comme monnaie officielle dans la zone euro ? » / choix `["Vingt et un", "Vingt-sept", "Dix-neuf", "Quinze"]` / explication « La Croatie l'a adopté en 2023 et la Bulgarie en 2026, portant la zone euro à vingt et un États membres de l'Union. » Cours : « Vingt et un pays utilisent l'euro comme monnaie officielle au sein de la zone euro (la Bulgarie depuis 2026). »
- **Fait** : déjà corrigé, à l'identique dans le seed et dans le cours.

### [GRAVE] ✅ « Aucune motion de censure n'a abouti … en dehors de celle du 5 octobre 1962 » — faux depuis décembre 2024

- **Où** : `heritage/culture-g/data/institutions-economie.json` — question 7 (article 49.3)
- **Texte** : « Aucune motion de censure n'a abouti sous la Ve République en dehors de celle du 5 octobre 1962. »
- **Où (seconde occurrence)** : même fichier, question 49 (suffrage universel direct) — « Elle provoqua le vote de **la seule motion de censure adoptée sous la Ve République**, le 5 octobre 1962. »
- **Problème** : la motion de censure du **4 décembre 2024** a renversé le gouvernement de Michel Barnier (331 voix). L'affirmation est devenue fausse, et c'est exactement le genre de « fait remarquable » qu'un apprenant retient et ressort. Elle figure **deux fois** dans le cahier, ce qui double le risque de l'ancrer.
- **Correction proposée** : Q7 — « Deux motions de censure seulement ont abouti sous la Ve République : celle du 5 octobre 1962 contre le gouvernement Pompidou, et celle du 4 décembre 2024 contre le gouvernement Barnier. » Q49 — « Elle provoqua le vote de la première des deux seules motions de censure adoptées sous la Ve République, le 5 octobre 1962. »
- **Fait** : déjà corrigé mot pour mot dans les deux questions du cahier.

### [GRAVE] ✅ La commission de déontologie de la fonction publique n'existe plus depuis 2020 — et le cours dit le contraire

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:85` — `ie2-fonction-publique`
  (contredit par `prisma/seed/culture-g/cours/institutions-economie.ts:147`)
- **Texte (question, explication du pantouflage)** : « Une commission de déontologie examine les risques de conflit d'intérêts avant d'autoriser le départ. »
- **Texte (cours, même notion)** : « la Haute Autorité pour la transparence de la vie publique examine les projets de départ, peut les assortir de réserves ou les refuser… »
- **Problème** : double faute. (1) Erreur de fait : la commission de déontologie de la fonction publique a été supprimée le 1er février 2020, ses missions étant transférées à la HATVP. (2) Contradiction frontale entre le cours et l'explication de la question de la même notion : l'apprenant qui lit les deux ne sait plus quoi retenir.
- **Correction proposée** : « La Haute Autorité pour la transparence de la vie publique examine les risques de conflit d'intérêts avant d'autoriser le départ, depuis qu'elle a repris en 2020 les missions de l'ancienne commission de déontologie. »
- **Fait** : déjà corrigé mot pour mot dans la question ; le cours n'a jamais été contradictoire ailleurs.

### [GRAVE] ✅ Le prix Nobel 2002 attribué à Tversky, mort en 1996

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:275` — `ie3-economie-comportementale`
- **Texte** : « Kahneman et Tversky en sont les fondateurs, avec un Nobel d'économie en 2002. »
- **Problème** : Amos Tversky est mort en 1996 et n'a jamais reçu le prix ; celui-ci n'est pas décerné à titre posthume. Seul Daniel Kahneman l'a obtenu en 2002 (conjointement avec Vernon Smith). La formulation attribue le prix aux deux. À noter que le cours correspondant (`cours/institutions-economie.ts`, section « L'agent économique réel ») est, lui, correctement prudent : « consacré par plusieurs prix Nobel d'économie ».
- **Correction proposée** : « Daniel Kahneman et Amos Tversky en sont les fondateurs ; Kahneman a reçu le prix Nobel d'économie en 2002, Tversky étant mort en 1996. »
- **Fait** : déjà corrigé mot pour mot.

### [GRAVE] ✅ Doublon franc : la présomption d'innocence, deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:48` (`ie-justice-france`) et
  `prisma/seed/culture-g/institutions-economie-2.ts:102` (`ie2-droits-libertes`)
- **Texte 1** : « Que signifie la présomption d'innocence ? » → « Toute personne est réputée innocente tant qu'elle n'a pas été jugée coupable »
- **Texte 2** : « Qu'est-ce que la présomption d'innocence ? » → « Toute personne est réputée innocente jusqu'à condamnation définitive »
- **Problème** : même question, même réponse, à la reformulation près. Pire, le distracteur de l'une (« Le doute profite toujours à l'accusé au procès ») est présenté comme *une conséquence vraie* dans l'explication de l'autre et dans le cours (« le doute profite à l'accusé »), ce qui rend le distracteur défendable.
- **Correction proposée** : supprimer la question de `ie2-droits-libertes` et la remplacer par une question sur les **conséquences** de la présomption d'innocence (« Sur qui pèse la charge de la preuve au pénal ? »), ou reformuler le distracteur en « Le doute profite à l'accusation ».
- **Fait** : déjà corrigé — `ie2-droits-libertes` ne pose plus cette question ; elle a été remplacée par une question sur la détention provisoire. Le doublon franc est résorbé.

### [GRAVE] ✅ Doublon franc : la crise de la dette souveraine européenne, deux fois, avec la même réponse mot pour mot

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:340` (`ie2-histoire-economique`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:488` (`ie3-crises-contemporaines`)
- **Texte 1** : « Qu'est-ce que la crise de la dette souveraine européenne de 2010 ? » → « Une crise de confiance sur la dette de plusieurs États de la zone euro »
- **Texte 2** : « Qu'est-ce que la crise de la dette souveraine européenne ? » → « Une crise de confiance sur la dette de plusieurs États de la zone euro à partir de 2010 »
- **Problème** : la bonne réponse est la même chaîne de caractères à quatre mots près. Deux notions distinctes posent identiquement la même question.
- **Correction proposée** : conserver la question dans `ie3-crises-contemporaines` (dont c'est le sujet) et remplacer celle de `ie2-histoire-economique` par une question sur ce que la crise a *révélé* (« Quel défaut de construction de la zone euro la crise de 2010 a-t-elle révélé ? » → « Une monnaie unique sans budget commun ni prêteur en dernier ressort pour les États »).
- **Fait** : déjà corrigé à l'identique — `ie2-histoire-economique` pose désormais exactement cette question sur le défaut de construction, `ie3-crises-contemporaines` a gardé la sienne.

### [GRAVE] 🔧 Doublon franc : le règlement européen sur les marchés numériques (DMA), deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:358` (`ie2-numerique-economie`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:390` (`ie3-droit-numerique`)
- **Texte 1** : « Que vise le règlement européen sur les marchés numériques ? » → « Encadrer les pratiques des très grandes plateformes contrôlant l'accès aux marchés » ; explication : « Il impose des obligations aux contrôleurs d'accès, comme l'interopérabilité ou l'interdiction de l'auto-préférence. »
- **Texte 2** : « Qu'est-ce que le règlement sur les marchés numériques ? » → « Un texte encadrant les pratiques des contrôleurs d'accès » ; explication : « Il interdit notamment l'auto-préférence et impose l'interopérabilité de certains services. »
- **Problème** : question, réponse et explication sont la même chose reformulée. Idem, dans une moindre mesure, pour le **DSA**, posé en `institutions-economie.ts:260` (`ie-medias-information`) et en `institutions-economie-3.ts:388` (`ie3-droit-numerique`).
- **Correction proposée** : garder le DMA dans `ie3-droit-numerique` et le DSA dans `ie-medias-information` ; dans les deux notions dépossédées, remplacer par une question non couverte (par ex. « Qu'est-ce qu'un contrôleur d'accès au sens du DMA ? » vs « Que doit faire un hébergeur informé d'un contenu manifestement illicite ? »).
- **Fait** : partiellement corrigé seulement. Le doublon littéral sur « les marchés numériques » avait bien été résorbé (`ie3-droit-numerique` posait déjà, à la place, la question sur le contrôleur d'accès), mais en le faisant, la question voisine avait été reformulée en doublon du **DSA** (« Qu'est-ce que le règlement européen sur les services numériques ? », quasi identique à la question de `ie-medias-information`, jusqu'à l'idée des audits dans l'explication). Corrigé maintenant : cette question de `ie3-droit-numerique` est remplacée par « Que risque un contrôleur d'accès en cas de manquements graves et répétés au DMA ? » (sanctions financières, mesures structurelles), qui ne recoupe ni la question sur le contrôleur d'accès déjà présente ni celle du DSA restée dans `ie-medias-information`. Longueur des distracteurs vérifiée (73-84 caractères, pas de biais), pas de doublon créé ailleurs dans le domaine, `npx tsc --noEmit` sans erreur.

### [GRAVE] ✅ Doublon franc : la sobriété énergétique, question et explication quasi identiques

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:310` (`ie-energie-transition`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:444` (`ie3-transition-economie`)
- **Texte 1** : « Qu'est-ce que la sobriété énergétique ? » → « La réduction de la consommation par les usages et l'organisation » ; expl. « Elle se distingue de l'efficacité, qui vise à consommer moins pour un même service sans changer l'usage. »
- **Texte 2** : « Qu'est-ce que la sobriété énergétique du point de vue économique ? » → « Une réduction de la demande par les usages et l'organisation » ; expl. « Elle se distingue de l'efficacité, qui vise le même service avec moins d'énergie. »
- **Problème** : la précision « du point de vue économique » ne change strictement rien au contenu. C'est la même question et la même explication.
- **Correction proposée** : supprimer la question de `ie3-transition-economie` (la notion a déjà taxe carbone, quotas, actifs échoués) et la remplacer par « Pourquoi une politique de sobriété est-elle plus difficile à mettre en œuvre qu'une politique d'efficacité ? ».
- **Fait** : déjà corrigé — `ie3-transition-economie` ne pose plus de question sur la sobriété énergétique ; ses huit questions couvrent d'autres angles (taxe carbone, quotas, actifs échoués, finance verte, taxonomie, transition juste, découplage).

### [GRAVE] ✅ Doublon franc : la CSG, deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:70` (`ie-securite-sociale`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:266` (`ie3-securite-sociale-branches`)
- **Texte 1** : « Qu'est-ce que la CSG ? » → « Un impôt affecté au financement de la protection sociale » ; expl. « Créée en 1991, elle a progressivement remplacé une partie des cotisations salariales. »
- **Texte 2** : « Qu'est-ce que la CSG dans le financement social ? » → « Un impôt affecté portant sur l'ensemble des revenus » ; expl. « Elle a progressivement remplacé une partie des cotisations, élargissant l'assiette du financement. »
- **Problème** : même définition, même explication. Plus largement, `ie3-securite-sociale-branches` recouvre `ie-securite-sociale` : branches, autonomie 2020, APA (mentionnée dans une explication de l'une, objet d'une question entière de l'autre).
- **Correction proposée** : fusionner les deux notions, ou réserver à `ie3` les questions de *financement* (LFSS, ONDAM, CADES) et à `ie` les questions d'*histoire et de périmètre* — en ne gardant la CSG qu'une seule fois.
- **Fait** : déjà corrigé selon la seconde option — `ie3-securite-sociale-branches` ne pose plus de question sur la CSG ; elle est recentrée sur les branches, l'ONDAM, la LFSS, le déficit et la CADES. La CSG et l'APA ne sont plus posées qu'une fois chacune.

### [GRAVE] ✅ Doublon franc : le chômage partiel de 2020, deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:128` (`ie-entreprise-travail`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:492` (`ie3-crises-contemporaines`)
- **Texte 1** : « Qu'est-ce que le chômage partiel, ou activité partielle ? » → « Une réduction d'activité indemnisée par l'État pour éviter les licenciements » ; expl. « Massivement utilisé en 2020… »
- **Texte 2** : « Qu'est-ce que le chômage partiel massif de 2020 ? » → « Un dispositif prenant en charge les salaires pour éviter les licenciements »
- **Problème** : même dispositif, même définition, même exemple.
- **Correction proposée** : dans `ie3-crises-contemporaines`, remplacer par « Pourquoi la réponse à la crise de 2020 a-t-elle relevé d'une logique d'assurance plutôt que de relance ? » — angle qui figure dans le cours et n'est posé nulle part.
- **Fait** : déjà corrigé mot pour mot — la question figure désormais dans `ie3-crises-contemporaines`.

### [GRAVE] ✅ Doublon franc : l'indice de Gini, deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:168` (`ie-croissance-inegalites`) et
  `prisma/seed/culture-g/institutions-economie-2.ts:390` (`ie2-inegalites-mondiales`)
- **Texte 1** : « Que mesure l'indice de Gini ? » → « L'inégalité de répartition des revenus »
- **Texte 2** : « Que mesure le coefficient de Gini au sein d'un pays ? » → « La concentration des revenus ou des patrimoines »
- **Problème** : indice / coefficient de Gini, même chose. La seconde question est même *meilleure* (elle inclut le patrimoine), ce qui rend la première partiellement fausse par omission.
- **Correction proposée** : garder la version « revenus ou patrimoines », supprimer l'autre ou la remplacer par « Que vaut l'indice de Gini dans une société d'égalité parfaite ? ».
- **Fait** : déjà corrigé — `ie-croissance-inegalites` pose désormais la question sur l'égalité parfaite, `ie2-inegalites-mondiales` a gardé la version « revenus ou patrimoines ».

### [GRAVE] ✅ Doublon franc : le vice caché, deux fois — et deux notions jumelles sur le droit de la consommation

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:326` (`ie-consommation-droit`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:100` (`ie3-protection-consommateur`)
- **Texte 1** : « Qu'est-ce qu'un vice caché ? » → « Un défaut non apparent qui rend le bien impropre à son usage »
- **Texte 2** : « Qu'est-ce que la garantie légale des vices cachés ? » → « Une protection contre un défaut non apparent rendant le bien impropre »
- **Problème** : au-delà de ce doublon mot pour mot, les deux notions `ie-consommation-droit` et `ie3-protection-consommateur` traitent le même sujet (garanties, rétractation quatorze jours, vices cachés, clause abusive) et leurs deux cours se répètent : comparez `cours:90-98` et `cours` section « Quand le produit est défectueux ». C'est le cas de doublon de cours le plus net du domaine.
- **Correction proposée** : fusionner les deux notions en une seule, ou spécialiser `ie3-protection-consommateur` sur le *litige* (médiation, surendettement, FICP, droit au compte — qui lui sont propres) en lui retirant garanties et rétractation.
- **Fait** : déjà corrigé selon la seconde option — `ie3-protection-consommateur` ne pose plus la définition du vice caché (remplacée par une question sur le délai d'action) et se concentre sur le contrat d'adhésion, l'information précontractuelle, le démarchage, la médiation, le surendettement, le FICP et le droit au compte.

### [GRAVE] 🔧 Doublon franc : la mobilité sociale, deux fois

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:392` (`ie2-inegalites-mondiales`) et
  `prisma/seed/culture-g/institutions-economie-3.ts:414` (`ie3-inegalites-france`)
- **Texte 1** : « Qu'est-ce que la mobilité sociale intergénérationnelle ? » → « La capacité à occuper une position différente de celle de ses parents »
- **Texte 2** : « Qu'est-ce que la mobilité sociale en France ? » → « La capacité à changer de position sociale par rapport à ses parents »
- **Problème** : même définition. Le « en France » de la seconde ne porte que sur l'explication.
- **Correction proposée** : dans `ie3-inegalites-france`, remplacer par la distinction que le cours développe et qu'aucune question ne teste : « Qu'est-ce que la mobilité structurelle, par opposition à la mobilité nette ? ».
- **Fait** : non corrigé — la question « Qu'est-ce que la mobilité sociale en France ? » de `ie3-inegalites-france` était restée identique en substance à celle de `ie2-inegalites-mondiales`. Corrigée maintenant : remplacée par « Qu'est-ce que la mobilité structurelle, par opposition à la mobilité nette ? » avec quatre distracteurs de longueur équilibrée (69-70 caractères), sans doublon ailleurs dans le domaine. `npx tsc --noEmit` sans erreur.

### [MOYEN] ✅ « La cour d'assises juge les crimes » — incomplet depuis la généralisation des cours criminelles départementales (2023)

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:44` — `ie-justice-france` ;
  cours correspondant `cours/institutions-economie.ts:11`
- **Texte (question)** : « Quelle juridiction juge les crimes en France ? » → « La cour d'assises »
- **Texte (cours)** : « la cour d'assises juge les crimes — les infractions les plus graves — avec un jury populaire »
- **Où (troisième occurrence)** : `heritage/culture-g/data/lecons/institutions-economie/01.json` — section « L'ordre judiciaire », tableau « Quelle juridiction pour quel litige ? » et quiz question 1 : « les crimes, tels que le meurtre **ou le viol**, relèvent de la cour d'assises »
- **Problème** : depuis le 1er janvier 2023, les **cours criminelles départementales**, sans jury, jugent en première instance les crimes punis de quinze à vingt ans de réclusion — soit la majorité des viols, précisément l'exemple donné. Le cours de `ie2-justice-penale` le dit d'ailleurs correctement (« relèvent de la cour d'assises **ou de la cour criminelle départementale** ») : deux textes du même domaine se contredisent, et la leçon patrimoniale prend l'exemple qui est justement passé à l'autre juridiction.
- **Correction proposée** : question — « Quelle juridiction juge les crimes les plus graves en France ? » → « La cour d'assises » ; explication « Depuis 2023, les crimes punis de quinze à vingt ans de réclusion, dont le viol, sont jugés en première instance par la cour criminelle départementale, sans jury populaire. » Ajouter la même précision dans le cours de `ie-justice-france` et dans la leçon 01, et y changer l'exemple du viol.
- **Fait** : question et explication corrigées dans le seed, précision ajoutée au cours `ie-justice-france`, et la leçon 01 (section, tableau et quiz) mise à jour pour ne plus donner le viol comme exemple simple de cour d'assises.

### [MOYEN] ✅ La notion « Les retraites » ne dit jamais l'âge légal ni la réforme de 2023

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:140-164` — `ie3-retraites` ;
  cours `cours/institutions-economie.ts`, sections « La répartition », « Comment se calcule une pension », « Les correctifs », « Les termes du débat »
- **Texte (cours)** : « Il ne faut pas la confondre avec l'âge légal de départ, qui est l'âge à partir duquel on peut liquider sa retraite »
- **Problème** : dix questions et quatre sections de cours sur les retraites françaises sans jamais donner le chiffre — 62 ans, porté progressivement à **64 ans par la réforme de 2023** — ni citer la réforme la plus commentée de la décennie. C'est le fait le plus demandé sur le sujet, et il est absent. Une question sur l'âge légal est actuellement insoluble avec le cours.
- **Correction proposée** : ajouter une question — « À quel âge légal de départ à la retraite la réforme de 2023 conduit-elle progressivement ? » / `["Soixante-quatre ans", "Soixante-deux ans", "Soixante-cinq ans", "Soixante-sept ans"]` / 0 / « L'âge légal passe de soixante-deux à soixante-quatre ans par paliers, et la durée de cotisation requise est portée à quarante-trois ans. L'âge d'annulation de la décote reste fixé à soixante-sept ans. » Et nommer la réforme dans le cours.
- **Fait** : question ajoutée à `ie3-retraites` et réforme nommée dans le cours, avec sa date (loi du 14 avril 2023). Vérification faite (recherche web) : le calendrier de relèvement est gelé à 62 ans et 9 mois à partir de septembre 2026 par la LFSS 2026 — suspension temporaire, pas abrogation. L'explication de la question et le cours mentionnent ce gel pour rester à jour.

### [MOYEN] ✅ « Le premier poste de la dépense publique … représente à elle seule plus de la moitié »

- **Où** : `prisma/seed/culture-g/cours/institutions-economie.ts:48` — `ie-budget-etat`, section « Contrôler »
- **Texte** : « c'est la protection sociale, qui en représente à elle seule plus de la moitié lorsqu'on considère l'ensemble des administrations publiques. »
- **Problème** : à confirmer, mais selon la classification fonctionnelle des dépenses publiques (COFOG/INSEE), la fonction « protection sociale » pèse environ **41-42 %** de la dépense publique ; on ne dépasse la moitié qu'en y agrégeant la santé (~14 %). « Plus de la moitié » présenté comme un fait est donc surestimé, ou au minimum donné sans dire ce qu'on y range.
- **Correction proposée** : « c'est la protection sociale, qui en représente plus de quatre dixièmes — et plus de la moitié si l'on y ajoute la santé. »
- **Fait** : correction appliquée telle quelle dans le cours `ie-budget-etat`.

### [MOYEN] ✅ La charte des Nations unies n'a pas été signée par cinquante et un États en juin 1945

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:217` — `ie-onu-organisations`
- **Texte** : « En juin 1945, par cinquante et un États fondateurs, quelques semaines après la capitulation allemande. »
- **Où (seconde occurrence)** : `heritage/culture-g/data/lecons/institutions-economie/13.json` — quiz, question 1 : « La Charte des Nations unies a été signée le 26 juin 1945 à San Francisco **par cinquante et un États** »
- **Problème** : **cinquante** États ont signé la charte à San Francisco le 26 juin 1945 ; la Pologne, absente de la conférence, a signé le 15 octobre 1945, ce qui porte à cinquante et un le nombre de **membres originaires** — mais pas de signataires en juin. Exact sur le total, faux sur la date. Détail révélateur : le corps de la leçon 13 est, lui, parfaitement exact (« Sa Charte est signée le 26 juin 1945 […] Cinquante et un États en sont membres fondateurs » — deux phrases séparées) ; c'est son propre quiz qui les recolle et fabrique l'erreur.
- **Correction proposée** : « En juin 1945, par cinquante États ; la Pologne, absente de la conférence, signe en octobre et porte à cinquante et un le nombre de membres fondateurs. » Même correction dans le quiz de la leçon 13, dont le corps de texte donne déjà la bonne formulation.
- **Fait** : correction appliquée mot pour mot dans le seed et dans l'explication du quiz de la leçon 13.

### [MOYEN] ✅ Ambroise Croizat n'était pas ministre lors des ordonnances d'octobre 1945

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:66` — `ie-securite-sociale`
- **Texte** : « Quel ministre communiste porte la création de la Sécurité sociale ? » → « Ambroise Croizat » ; l'explication de la question précédente date la création des « ordonnances d'octobre 1945 ».
- **Problème** : les ordonnances des 4 et 19 octobre 1945 ont été prises alors qu'**Alexandre Parodi** était ministre du Travail ; Croizat lui succède le 21 novembre 1945 et met en place le système. La juxtaposition des deux questions crée une incohérence chronologique interne, et l'attribution exclusive à Croizat est une simplification militante répandue mais contestée.
- **Correction proposée** : explication — « Nommé ministre du Travail en novembre 1945, il met en place le système créé par les ordonnances d'octobre, prises sous son prédécesseur Alexandre Parodi. Pierre Laroque, haut fonctionnaire, en est l'architecte technique. »
- **Fait** : explication remplacée telle quelle dans le seed.

### [MOYEN] ✅ Délai de réflexion du crédit immobilier : dix jours dans la question, onze dans le cours

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:97` (`ie3-protection-consommateur`) contre
  `cours/institutions-economie.ts` section « Les délais »
- **Texte (question)** : « Le crédit immobilier impose ainsi un délai de réflexion de dix jours. »
- **Texte (cours)** : « c'est le cas du crédit immobilier, où l'offre ne peut être acceptée avant onze jours. »
- **Problème** : les deux formulations décrivent la même règle (l'emprunteur ne peut accepter qu'à compter du onzième jour suivant la réception, soit dix jours de réflexion), mais elles se lisent comme une contradiction. L'apprenant qui lit le cours répondra « onze » à une question qui attend « dix ».
- **Correction proposée** : aligner sur le cours — « L'offre ne peut être acceptée qu'à partir du onzième jour suivant sa réception, soit dix jours pleins de réflexion. »
- **Fait** : explication de la question alignée mot pour mot sur le cours.

### [MOYEN] ✅ La PAC présentée comme le premier poste budgétaire et le « seul domaine » aux moyens substantiels

- **Où** : `cours/institutions-economie.ts` — `ie2-agriculture-politique` section « Conditionner les aides » et `ie3-europe-politiques` section « Comment l'Union agit »
- **Texte 1** : « Elle est le seul domaine où l'Union dispose de moyens financiers réellement substantiels. »
- **Texte 2** : « part en baisse continue mais qui reste la première. Elle est le domaine où l'Union dispose des moyens financiers les plus substantiels »
- **Problème** : deux difficultés. (1) La **politique de cohésion** représente une masse comparable, voire supérieure selon le périmètre retenu, dans le cadre financier 2021-2027 : dire « seul » et « la première » est au mieux discutable. (2) C'est la même phrase réemployée d'un cours à l'autre, à trois mots près — exactement le type de redite que la consigne demande de signaler.
- **Correction proposée** : « Elle reste, avec la politique de cohésion, l'un des deux seuls domaines où l'Union dispose de moyens financiers substantiels. » Et ne le dire qu'une fois.
- **Fait** : `ie2-agriculture-politique` reformulé avec la politique de cohésion citée comme second domaine ; `ie3-europe-politiques` ne répète plus l'affirmation « seul domaine », remplacée par une mention de la politique de cohésion sans la comparaison contestable.

### [MOYEN] ✅ Nombre d'associations : « plus d'un million » dans un cours, « plus d'un million et demi » dans l'autre

- **Où** : `cours/institutions-economie.ts` — `ie2-associations-economie-sociale` section « Les autres familles » (« La France en compte plus d'un million en activité ») contre `ie3-associations-democratie` section « Un tissu considérable » (« plus d'un million et demi d'associations actives ») et la question `institutions-economie-3.ts:456`.
- **Problème** : deux ordres de grandeur différents pour la même réalité, dans le même domaine. Par ailleurs l'estimation courante est d'**environ** 1,5 million d'associations actives : « plus d'un million et demi » force légèrement le chiffre.
- **Correction proposée** : retenir partout « environ un million et demi d'associations actives », et ajuster le choix de la question en conséquence.
- **Fait** : les cours `ie2-associations-economie-sociale` et `ie3-associations-democratie`, ainsi que le choix de la question `ie3-associations-democratie` (institutions-economie-3.ts:456), harmonisés sur « environ un million et demi ».

### [MOYEN] ✅ Taux de pauvreté « environ quatorze pour cent » — chiffre daté

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:409` — `ie3-inegalites-france`
- **Texte** : « Il concerne environ quatorze pour cent de la population. »
- **Problème** : vérifié auprès de l'INSEE — le taux est passé de 14,4 % en 2022 à **15,4 % en 2023**, plus haut niveau depuis la création de l'indicateur en 1996, soit 9,8 millions de personnes et 650 000 de plus en un an. « Environ quatorze pour cent », donné **sans année**, enseigne donc un chiffre d'avant-dernière génération sur une grandeur qui vient de connaître sa plus forte hausse depuis trente ans. La notion voisine est en revanche juste : le taux des familles monoparentales, annoncé comme dépassant « largement la moyenne nationale », est de 34,3 % en 2023.
- **Correction proposée** : « Il concerne quinze virgule quatre pour cent de la population en 2023, soit près de dix millions de personnes — le niveau le plus élevé depuis le début de la série en 1996. » Et dater systématiquement ce type de chiffre.
- **Fait** : vérifié (recherche web) que l'INSEE a confirmé 15,4 % stable en 2024 (dernière donnée publiée, pas seulement 2023) ; explication mise à jour avec ce chiffre et ce millésime.

### [MOYEN] ✅ « Environ un salarié sur huit est rémunéré au SMIC » — chiffre daté

- **Où** : `cours/institutions-economie.ts` — `ie2-emploi-chomage` section « Les instruments »
- **Texte** : « Environ un salarié sur huit en France est rémunéré à son niveau. »
- **Problème** : vérification faite, le chiffre n'est pas faux — il est **instable et non daté**, ce qui revient au même pour qui l'apprend. Les relevés de la DARES donnent 17,3 % au 1er janvier 2023 (soit un salarié sur six), 14,6 % au 1er janvier 2024, puis 12,4 % au 1er novembre 2024 — soit très exactement « un sur huit ». La proportion a donc varié de moitié en deux ans, au gré des revalorisations automatiques déclenchées par l'inflation. Énoncer « environ un salarié sur huit » sans millésime, c'est présenter comme une constante ce qui est un point d'une courbe très mobile, et c'est le cas d'école visé par la consigne.
- **Correction proposée** : dater et donner l'amplitude — « La proportion varie fortement avec l'inflation : elle est montée à un salarié sur six début 2023, au plus fort des revalorisations automatiques, avant de redescendre à un sur huit fin 2024. »
- **Fait** : cours corrigé avec l'amplitude datée ; vérifié (recherche web) que 12,4 % tient toujours en 2025.

### [MOYEN] ✅ Protection sociale « environ trente pour cent du PIB », sans date

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:80` — `ie-securite-sociale`
- **Texte** : « Que représente environ la protection sociale dans le PIB français ? » → « Environ trente pour cent »
- **Problème** : l'ordre de grandeur réel tourne autour de 32-33 % et varie d'une année à l'autre ; « environ trente » est le distracteur le plus bas d'une échelle où les autres sont 10, 20 et 50 %, donc la question reste soluble — mais le chiffre appris est légèrement faux et sans millésime.
- **Correction proposée** : explication — « Environ trente-deux pour cent ces dernières années, l'un des niveaux les plus élevés de l'OCDE, retraites et santé en constituant l'essentiel. »
- **Fait** : explication remplacée telle quelle ; les choix de réponse (dix/vingt/trente/cinquante) restent inchangés, « trente » restant le plus proche.

### [MOYEN] ✅ Une explication livre la réponse de la question suivante (deux cas)

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:18-21` — `ie-collectivites` ;
  `prisma/seed/culture-g/institutions-economie-3.ts:76-79` — `ie3-fiscalite`
- **Texte 1** : Q3 « Quelle collectivité gère les collèges ? » → explication « **La région gère les lycées**, la commune les écoles primaires. » puis Q4 « Quelle collectivité est chargée des lycées et des transports régionaux ? »
- **Texte 2** : Q6 « Qu'est-ce qu'un impôt proportionnel ? » → explication « La TVA est proportionnelle, mais **son effet est régressif rapporté au revenu**. » puis Q7 « Pourquoi la TVA est-elle jugée régressive ? »
- **Problème** : la question suivante n'évalue plus rien, elle restitue la phrase qu'on vient de lire. C'est une redite déguisée en progression.
- **Correction proposée** : retirer la mention des lycées de l'explication de Q3 (« La commune gère les écoles primaires ») et celle de la régressivité de l'explication de Q6 (« Un même taux frappe donc tous les contribuables, quel que soit leur revenu. »).
- **Fait** : les deux explications remplacées mot pour mot par le texte proposé.

### [MOYEN] ✅ L'état d'urgence : applications passées sous silence

- **Où** : `cours/institutions-economie.ts` — `ie2-droits-libertes` section « Les régimes d'exception et les gardiens »
- **Texte** : « Créé en 1955 pendant la guerre d'Algérie, il a été appliqué en 2005 puis de 2015 à 2017. »
- **Problème** : la phrase se lit comme un inventaire complet, alors qu'elle omet les applications de 1958 et 1961 (Algérie) et de 1984-1985 (Nouvelle-Calédonie). Or la question associée dit « il a été appliqué plusieurs fois depuis » : le cours restreint ce que la question ouvrait.
- **Correction proposée** : « Créé en 1955 pendant la guerre d'Algérie, il a été appliqué à plusieurs reprises depuis — en Nouvelle-Calédonie en 1984, lors des émeutes urbaines de 2005, et de 2015 à 2017 après les attentats. »
- **Fait** : phrase remplacée telle quelle dans le cours `ie2-droits-libertes`.

### [MOYEN] ✅ L'index de l'égalité professionnelle : date et nombre d'indicateurs approximatifs

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:423` (`ie3-inegalites-france`) et
  `cours/institutions-economie.ts` — `ie3-inegalites-france` section « Femmes et hommes »
- **Texte** : « obligatoire pour les entreprises d'au moins cinquante salariés depuis 2019 » ; « note sur cent points cinq indicateurs : écart de rémunération, écart de répartition des augmentations et des promotions, augmentation au retour de congé maternité, et parité parmi les dix plus hautes rémunérations. »
- **Problème** : (1) pour les entreprises de 50 à 250 salariés, l'obligation court depuis le **1er mars 2020**, 2019 ne valant que pour les plus grandes ; (2) le texte annonce « cinq indicateurs » puis en énumère quatre, et ce sont justement les entreprises de 50 à 250 salariés qui n'en ont que quatre. La phrase est fausse pour la catégorie dont elle parle.
- **Correction proposée** : « obligatoire depuis 2019 pour les entreprises de plus de deux cent cinquante salariés et depuis 2020 pour celles d'au moins cinquante » ; puis énumérer les cinq indicateurs séparément (écart de rémunération ; écart de taux d'augmentations ; écart de taux de promotions ; augmentation au retour de congé maternité ; parité parmi les dix plus hautes rémunérations), en précisant que les entreprises de moins de deux cent cinquante salariés n'en calculent que quatre.
- **Fait** : question et cours corrigés avec les deux seuils et leurs dates ; le cours énumère désormais les cinq indicateurs séparément et précise que les entreprises de moins de 250 salariés n'en calculent que quatre.

### [MOYEN] ✅ Le démantèlement du plateau d'Albion daté de 1996

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:307` — `ie2-defense-securite`
- **Texte** : « La composante terrestre du plateau d'Albion a été démantelée en 1996. »
- **Problème** : 1996 est l'année de la **décision** (annoncée par Jacques Chirac en février 1996) ; le démantèlement effectif s'échelonne ensuite. La leçon patrimoniale correspondante est d'ailleurs plus juste : `heritage/.../lecons/institutions-economie/14.json` écrit « La composante terrestre, installée sur le plateau d'Albion et complétée par les missiles Hadès, a été démantelée **en 1996 et 1997** ». Le seed a donc perdu une précision que le cahier possédait.
- **Correction proposée** : reprendre la formulation de la leçon 14 — « La composante terrestre du plateau d'Albion, ainsi que les missiles Hadès, ont été démantelés en 1996 et 1997. »
- **Fait** : explication du seed remplacée mot pour mot par la formulation de la leçon 14.

### [MOYEN] ✅ Recoupements de notions au-delà des doublons de questions

- **Où** : `ie-monnaie-banques` (`institutions-economie.ts`) contre `ie3-banque-credit` (`institutions-economie-3.ts`) ;
  `ie-entreprise-travail` contre `ie3-monde-travail` ; `ie2-marche-concurrence` contre `ie3-transition-economie`
- **Texte** : « Qui crée l'essentiel de la monnaie en circulation ? » → « Les banques commerciales, par le crédit » / « Que signifie la formule les crédits font les dépôts ? » → « La monnaie est créée par l'octroi du crédit ». Idem : « Quelle est la forme de contrat de droit commun en France ? » (expl. « Le CDD est l'exception et doit reposer sur un motif prévu par la loi ») / « Qu'est-ce qu'un contrat à durée déterminée ? » → « Un contrat conclu pour une durée limitée et un motif prévu par la loi ». Idem : « Qu'est-ce qu'une externalité négative ? » / « Qu'est-ce qu'une externalité environnementale négative ? ».
- **Problème** : ce ne sont pas des doublons stricts — l'angle diffère de peu — mais l'apprenant rencontrera trois fois le même fait sous trois libellés. Cumulés aux huit doublons francs ci-dessus, c'est un problème de conception du domaine, pas d'accident isolé.
- **Correction proposée** : arbitrer notion par notion quel fait appartient à quelle notion, et remplacer les redites par les angles absents (création monétaire : ses **limites** ; CDD : sa **requalification** ; externalité : son **internalisation**).
- **Fait** : les trois questions de `ie3-banque-credit`, `ie3-monde-travail` (contrat) et `ie3-transition-economie` réécrites sur l'angle proposé — limites de la création monétaire, requalification du CDD, internalisation de l'externalité — au lieu de reformuler le fait déjà posé dans l'autre notion.

### [MOYEN] ✅ La loi du 27 janvier 2014 créditée d'avoir supprimé la clause de compétence générale, alors qu'elle l'avait rétablie

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/04.json` — section « Compétences, intercommunalité et principes »
- **Texte** : « Depuis la loi du 27 janvier 2014 et la loi portant nouvelle organisation territoriale de la République de 2015, la clause générale de compétence a été supprimée pour les départements et les régions »
- **Problème** : erreur d'attribution. La loi MAPTAM du 27 janvier 2014 a **rétabli** la clause de compétence générale des départements et des régions, que la réforme de 2010 prévoyait de supprimer à partir de 2015 ; c'est la seule loi NOTRe du 7 août 2015 qui l'a effectivement supprimée. La leçon crédite donc une loi d'avoir fait l'inverse de ce qu'elle a fait. Le fond (clause supprimée pour départements et régions, conservée pour les communes) est juste, et concorde avec l'encart du seed (`institutions-economie.ts:12`).
- **Correction proposée** : « La loi du 27 janvier 2014 avait rétabli la clause générale de compétence des départements et des régions ; la loi portant nouvelle organisation territoriale de la République de 2015 l'a supprimée pour ces deux échelons, dont les interventions sont désormais énumérées par la loi, tandis que les communes la conservent. »
- **Fait** : phrase remplacée mot pour mot dans la leçon 04.

### [MOYEN] ✅ Les accords de Matignon crédités des congés payés et des quarante heures

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/06.json` — section « Les sources et la construction du droit du travail » et quiz, question 2
- **Texte (section)** : « Les accords de Matignon de juin 1936 instaurent les congés payés et la semaine de quarante heures »
- **Texte (quiz)** : « Que prévoient les accords de Matignon de juin 1936 ? » → « Les congés payés et la semaine de quarante heures »
- **Texte (explication du même quiz)** : « les accords de Matignon **débouchent sur des lois instituant** deux semaines de congés payés et la semaine de quarante heures, ainsi que sur la reconnaissance des délégués ouvriers et des conventions collectives »
- **Problème** : les accords Matignon du 7 juin 1936 portent sur les salaires, les conventions collectives, les délégués ouvriers et la liberté syndicale. Les congés payés et les quarante heures résultent des **lois des 20 et 21 juin 1936**, votées dans la foulée. L'explication le dit correctement (« débouchent sur des lois instituant »), mais l'énoncé de la question, lui, demande ce que les accords « prévoient » — et attend une réponse que les accords ne contenaient pas. Le texte de la section entérine la version fausse.
- **Correction proposée** : question — « Que déclenchent les accords de Matignon de juin 1936 ? » → « Les lois instaurant les congés payés et la semaine de quarante heures ». Section — « Les accords de Matignon du 7 juin 1936 portent sur les salaires, les conventions collectives et les délégués ouvriers ; ils débouchent aussitôt sur les lois des 20 et 21 juin 1936, qui instaurent deux semaines de congés payés et la semaine de quarante heures. »
- **Fait** : question, texte de section et frise chronologique de la leçon 06 corrigés selon la proposition ; l'explication du quiz était déjà exacte et n'a pas été touchée.

### [MOYEN] ✅ L'OMC donnée à cent soixante-quatre membres « depuis juillet 2016 »

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/09.json` — section « Du GATT à l'Organisation mondiale du commerce »
- **Texte** : « Elle comptait cent soixante-quatre membres depuis juillet 2016. »
- **Problème** : chiffre périmé. Les Comores et le Timor-Oriental ont adhéré en 2024, portant l'organisation à cent soixante-six membres. La date est certes indiquée, ce qui vaut mieux que rien, mais la tournure « comptait … depuis juillet 2016 » se lit comme un état encore courant.
- **Correction proposée** : « Elle comptait cent soixante-quatre membres de 2016 à 2024, et cent soixante-six depuis l'adhésion des Comores et du Timor-Oriental. »
- **Fait** : phrase remplacée mot pour mot dans la leçon 09.

### [MOYEN] ✅ Une centaine de faillites bancaires attribuées à l'Europe

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/11.json` — section « La crise financière de 2007-2008 »
- **Texte** : « Les banques européennes sont touchées à leur tour et plus d'une centaine d'établissements cessent leurs activités entre 2008 et 2009. »
- **Problème** : à vérifier avant correction, mais l'ordre de grandeur d'« une centaine d'établissements » disparus en 2008-2009 correspond aux **faillites bancaires américaines** recensées par la garantie fédérale des dépôts (vingt-cinq en 2008, cent quarante en 2009). En Europe, les grands établissements en difficulté ont très majoritairement été recapitalisés, absorbés ou nationalisés plutôt que liquidés. La phrase semble transporter un chiffre américain sur le continent européen.
- **Correction proposée** : vérifier la source ; à défaut, « Les banques européennes sont touchées à leur tour : plusieurs grands établissements sont recapitalisés, absorbés ou nationalisés, tandis qu'aux États-Unis plus de cent soixante banques font faillite en 2008 et 2009. »
- **Fait** : vérifié (recherche web) — aucune source ne confirme une centaine de faillites bancaires européennes ; les recoupements disponibles confirment au contraire des sauvetages massifs en Europe et des chiffres de faillites bancaires américaines proches de ceux cités (25 en 2008, ~140 en 2009). Correction de repli appliquée telle quelle, dans le texte et dans la frise chronologique de la leçon 11.

### [MOYEN] ✅ Le financement de la santé : reste à charge surestimé, part de l'assurance maladie sous-estimée

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/16.json` — section « Comment le système est financé » et quiz, question 1
- **Texte** : « L'assurance maladie […] en couvre la plus grande part, de l'ordre des trois quarts. Les organismes complémentaires […] environ un huitième. Les ménages assument directement le reste à charge […] autour d'un dixième »
- **Problème** : deux difficultés. (1) Les chiffres usuels sont d'environ quatre-vingts pour cent pour la Sécurité sociale et **moins de sept pour cent** de reste à charge — le plus bas des pays comparables. « Autour d'un dixième » gonfle donc sensiblement ce que paie le ménage. (2) Le cours du seed dit tout autre chose au même sujet : « l'assurance maladie obligatoire, qui couvre en moyenne **près de huit euros sur dix** de la dépense de santé » et « Le reste à charge des ménages est **l'un des plus faibles au monde** ». Deux textes du même domaine donnent deux répartitions différentes.
- **Correction proposée** : aligner sur le cours du seed — « L'assurance maladie en couvre près de quatre cinquièmes, les organismes complémentaires environ un huitième, et le reste à charge des ménages, inférieur à sept pour cent, est l'un des plus faibles des pays comparables. »
- **Fait** : texte de section, tableau et quiz (choix + explication) de la leçon 16 alignés sur le cours du seed.

### [MOYEN] ⏭️ La question prioritaire de constitutionnalité expliquée six fois dans le domaine

- **Où** : `heritage/.../lecons/institutions-economie/01.json` (section « Justice constitutionnelle et juridictions européennes » + quiz question 3), `08.json` (section « Le contrôle du respect des droits » + quiz question 4), `heritage/culture-g/data/institutions-economie.json` (question 9 et cours « Les institutions de la Ve République »), `prisma/seed/culture-g/institutions-economie.ts:54` et le cours `ie-justice-france`.
- **Texte** : quatre formulations quasi interchangeables de « contester, au cours d'un procès, une disposition législative déjà en vigueur ».
- **Problème** : six exposés du même mécanisme, dont deux questions de quiz qui portent toutes deux sur la date d'entrée en vigueur (2010). Ce n'est pas une erreur, c'est du volume : l'apprenant croise six fois la même chose pendant que d'autres pans du droit constitutionnel ne sont jamais abordés. Le même phénomène frappe la définition du chômeur au sens du Bureau international du travail (leçon 06, cahier question 22, cours du cahier, seed `ie2-emploi-chomage` question et cours) et la dualité des ordres de juridiction.
- **Correction proposée** : garder l'exposé long dans la leçon 08 (le plus précis : loi organique du 10 décembre 2009, filtre à trois mois, abrogation) et réduire les autres à un renvoi d'une phrase. Ne conserver qu'**une** question de quiz sur la QPC, portant sur ce que le filtre change plutôt que sur la date.
- **Fait** : écarté délibérément. Le problème est réel mais c'est une redite entre plusieurs leçons et fichiers *indépendants*, chacun destiné à être lu séparément : retirer ou raccourcir le contenu dans cinq des six endroits risquait de rendre ces sections auto-suffisantes moins complètes, sans bénéfice pour l'apprenant qui ne les lit pas toutes à la suite. Restructurer proprement (fusionner des questions de quiz, couper des sections entières dans des fichiers de leçons distincts) dépasse une correction de contenu ponctuelle et mériterait un second regard du propriétaire avant d'être fait.

### [MOYEN] ✅ « Qu'est-ce qui caractérise juridiquement un contrat de travail ? » : deux réponses défendables

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:112` — `ie-entreprise-travail`
- **Texte** : « Qu'est-ce qui caractérise juridiquement un contrat de travail ? » → `["Le lien de subordination", "Le versement d'un salaire", "L'existence d'un écrit", "La durée déterminée"]`, bonne réponse 0
- **Problème** : le contrat de travail est défini par **trois** éléments cumulatifs — une prestation de travail, une rémunération et un lien de subordination. La leçon patrimoniale du domaine le dit noir sur blanc : « Trois éléments le caractérisent : une prestation de travail, une rémunération et un lien de subordination juridique » (`lecons/institutions-economie/06.json`). Le distracteur « Le versement d'un salaire » est donc **vrai lui aussi** : il caractérise bien juridiquement le contrat. Seul le lien de subordination le *distingue* du travail indépendant — et c'est précisément le mot qui manque à l'énoncé. Le quiz de la leçon 06 pose la même question et l'a, lui : « Quel élément caractérise juridiquement le contrat de travail **et distingue le salarié de l'indépendant** ? ». Le seed a perdu le qualificatif qui rendait la question soluble.
- **Correction proposée** : reprendre l'énoncé de la leçon 06 — « Quel élément du contrat de travail distingue le salarié du travailleur indépendant ? » → « Le lien de subordination », explication « Prestation de travail, rémunération et lien de subordination définissent ensemble le contrat ; seul le troisième sépare le salarié de l'indépendant, et c'est lui qui permet de requalifier certaines prestations. »
- **Fait** : question et explication remplacées mot pour mot dans le seed.

### [MOYEN] ✅ Une question sur « le cumul des mandats » dont la réponse porte sur son interdiction

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:56` — `ie2-parlement-francais`
- **Texte** : « Qu'est-ce que le cumul des mandats en France depuis 2017 ? » → « Un mandat parlementaire est incompatible avec un exécutif local »
- **Problème** : l'énoncé demande ce qu'*est* le cumul des mandats ; la réponse décrit la règle qui l'*interdit*. Un apprenant qui sait parfaitement ce qu'est le cumul des mandats — exercer plusieurs mandats à la fois — ne reconnaît pas sa définition dans la bonne réponse. La question est mal construite plutôt que fausse, mais elle se répond par élimination et non par compréhension.
- **Correction proposée** : « Qu'a changé la fin du cumul des mandats, entrée en vigueur en 2017 ? » → « Un mandat parlementaire est devenu incompatible avec une fonction exécutive locale », explication « Un député ne peut plus être en même temps maire, adjoint ou président de conseil départemental ou régional. La réforme a considérablement modifié le profil et le travail des parlementaires. »
- **Fait** : question et explication remplacées mot pour mot dans le seed.

### [MOYEN] ✅ L'action de groupe donnée comme réservée aux associations agréées

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:336` — `ie-consommation-droit` ; même lacune dans le cours (`cours/institutions-economie.ts`, section « Les protections collectives »)
- **Texte** : « Introduite en France en 2014, elle est ouverte aux associations agréées. »
- **Problème** : périmé. La loi du 30 avril 2025, qui transpose la directive européenne sur les actions représentatives, a **unifié les cinq régimes** d'action de groupe qui coexistaient (consommation, concurrence, santé, discrimination, données personnelles, environnement) et **élargi la qualité pour agir** : au-delà des associations agréées, l'action est désormais ouverte au ministère public et, pour les actions tendant seulement à la cessation d'un manquement, aux associations régulièrement déclarées depuis plus de deux ans. Le nouveau régime s'applique aux actions introduites depuis le 2 mai 2025. C'est exactement le genre de règle que le domaine doit suivre.
- **Correction proposée** : « Introduite en France en 2014, elle a été refondue par la loi du 30 avril 2025, qui a unifié les régimes sectoriels et ouvert l'action au-delà des seules associations agréées. »
- **Fait** : vérifié (recherche web) — la loi DDADUE 5 du 30 avril 2025 confirmée. Explication du seed et cours `ie-consommation-droit` corrigés en conséquence.

### [MINEUR] ✅ La leçon 17 sort des conventions typographiques du corpus

- **Où** : `heritage/culture-g/data/lecons/institutions-economie/17.json`
- **Texte** : « une réduction d'au moins 5 % de leurs émissions », « nettement en dessous de 2 °C », « environ 17,9 % de la consommation finale mondiale », « la mise en oeuvre conjointe », « L'accord met en oeuvre la convention-cadre »
- **Problème** : deux écarts vérifiés sur l'ensemble des dix-sept leçons. (1) C'est **la seule** à employer le signe « % » dans le corps du texte et dans le quiz (cinq occurrences) ; les seize autres écrivent « pour cent » en toutes lettres, et elle contient de loin le plus de chiffres arabes (cent soixante-dix contre cinquante à cent trente ailleurs). (2) C'est **la seule** où « œuvre » est écrit « oeuvre », sans ligature, et cela trois fois — la ligature est correctement employée partout ailleurs dans le corpus, y compris dans cette même leçon (« mise en oeuvre » à côté d'un « œ » correct).
- **Correction proposée** : remplacer les trois « oeuvre » par « œuvre » ; écrire « cinq pour cent », « deux degrés », « dix-sept virgule neuf pour cent » comme dans les seize autres leçons.
- **Fait** : les trois « oeuvre » corrigés en « œuvre » — défaut confirmé, unique à cette leçon. En revanche, vérification faite : le signe « % » n'est pas propre à la leçon 17, il apparaît aussi en prose dans les leçons 05, 15 et 16 (« 2 % », « 17 % », « 97 % », « 12 % ») ; la prémisse du constat sur ce point est fausse, donc les pourcentages de la leçon 17 n'ont pas été convertis en toutes lettres.

### [MINEUR] ✅ La seule explication qui n'explique rien

- **Où** : `prisma/seed/culture-g/institutions-economie-2.ts:18` — `ie2-union-europeenne`
- **Texte** : « Comment les députés européens sont-ils désignés ? » → « Élus au suffrage universel direct dans chaque État » ; explication : « Depuis 1979. Le mandat est de cinq ans. »
- **Problème** : trente-neuf caractères, et c'est la seule des 515 explications du seed à passer sous le seuil des quarante — toutes les autres apprennent quelque chose de plus. Celle-ci ajoute deux dates et ne dit rien du mécanisme : ni que chaque État conserve son propre mode de scrutin, ni que le nombre de sièges est réparti selon une proportionnalité dégressive qui surreprésente les petits États. Or c'est justement là que se trouve ce qu'on ne devine pas.
- **Correction proposée** : « Au suffrage universel direct depuis 1979, pour cinq ans, mais selon un mode de scrutin que chaque État fixe lui-même. Les sièges sont répartis selon une proportionnalité dégressive : un député allemand représente bien plus d'habitants qu'un député maltais. »
- **Fait** : explication remplacée mot pour mot dans le seed.

### [MINEUR] ✅ La décision de 1971 : ce qu'elle a exactement constitutionnalisé

- **Où** : `heritage/culture-g/data/institutions-economie.json` — cours « Les institutions de la Ve République », section « Le Conseil constitutionnel et la justice » (et question 8, même formulation)
- **Texte** : « Sa décision du 16 juillet 1971 sur la liberté d'association a considérablement élargi son rôle en donnant valeur constitutionnelle au préambule de 1946 et à la Déclaration de 1789 »
- **Problème** : la décision de 1971 donne valeur constitutionnelle au **préambule de la Constitution de 1958**, lequel renvoie au préambule de 1946 et à la Déclaration de 1789 ; la valeur de la Déclaration elle-même est consacrée par les décisions de 1973 et 1974. Le cours du seed est d'ailleurs plus exact (`cours/institutions-economie.ts`, `ie2-droits-libertes` : « Le Conseil constitutionnel a reconnu en 1971 la valeur juridique de ce préambule »). Raccourci répandu, mais deux formulations différentes coexistent dans le domaine.
- **Correction proposée** : « … en reconnaissant la valeur constitutionnelle du préambule de 1958, et par lui du préambule de 1946 et de la Déclaration de 1789 — ce qu'on appelle depuis le bloc de constitutionnalité. »
- **Fait** : formulation appliquée à la fois dans le cours (section citée) et dans l'explication de la question 8, qui portait la même erreur mais n'était pas explicitement listée dans « Où ».

### [MINEUR] ⏭️ Aucune apostrophe typographique dans tout le domaine

- **Où** : les quatre fichiers `prisma/seed/culture-g/…`
- **Texte** : « L'ordre judiciaire juge les litiges… », « qu'une affaire puisse être rejugée… »
- **Problème** : 3 271 apostrophes droites (`'`) et **zéro** apostrophe courbe (`’`) sur l'ensemble du domaine, alors que la consigne typographique demande l'apostrophe courbe. Les guillemets français sont en revanche utilisés (8 occurrences dans le fichier de cours). À vérifier : si tout le dépôt suit cette convention, c'est un choix de projet à traiter globalement plutôt qu'un défaut de ce domaine.
- **Correction proposée** : conversion globale `'` → `’` dans les chaînes de contenu, à faire en une passe sur tout le corpus, pas domaine par domaine.
- **Fait** : écarté. Vérifié sur plusieurs autres matières (`histoire-monde.ts`, `litterature.ts`, `geographie.ts`) : elles n'ont elles non plus aucune apostrophe courbe. C'est bien une convention de tout le projet, pas un défaut de ce domaine — la corriger uniquement ici créerait une incohérence avec le reste du dépôt. Décision à prendre par le propriétaire à l'échelle du projet entier.

### [MINEUR] ✅ Capitalisation incohérente des choix de réponse, parfois révélatrice

- **Où** : `prisma/seed/culture-g/institutions-economie.ts` (une quarantaine de cas), `-2.ts` (une dizaine)
- **Texte** : ligne 40 — `["l'ordre judiciaire et l'ordre administratif", "Le civil et le pénal", "Le droit privé et le droit constitutionnel", "Les juridictions ordinaires et d'exception"]` ; ligne 168 — `["l'inégalité de répartition des revenus", "Le niveau de pauvreté absolue", "Le pouvoir d'achat moyen", "Le taux de chômage structurel"]`
- **Problème** : certains choix commencent par « l' » minuscule, d'autres par « L' » majuscule, sans règle. Dans les deux cas cités, **la bonne réponse est le seul choix en minuscule** : la mise en forme trahit la réponse à qui remarque le motif. Ailleurs (ligne 244, ligne 294) le motif s'inverse, ce qui exclut une intention, mais l'incohérence reste.
- **Correction proposée** : capitaliser tous les choix (« L'ordre judiciaire et l'ordre administratif », « L'inégalité de répartition des revenus », etc.).
- **Fait** : les deux exemples cités (lignes 40 et 168) étaient déjà corrigés au moment de mon passage — probablement lors du traitement du biais de longueur [GRAVE]. Vérification faite sur les trois fichiers : `institutions-economie.ts` et `-3.ts` n'avaient plus aucun choix en « l' » minuscule ; `-2.ts` en gardait six (deux questions, « l'ENA »/« l'École polytechnique »/« l'ENS » et « l'AMF »/« l'ACPR seule »/« l'Autorité de la concurrence »), désormais capitalisés.

### [MINEUR] ✅ « Qu'est-ce que la formule prononcée par Mario Draghi en 2012 ? »

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:490` — `ie3-crises-contemporaines`
- **Texte** : « Qu'est-ce que la formule prononcée par Mario Draghi en 2012 ? »
- **Problème** : construction fautive — « qu'est-ce que » ne s'accroche pas à « la formule prononcée ».
- **Correction proposée** : « Quelle formule Mario Draghi prononce-t-il en 2012 pour préserver l'euro ? »
- **Fait** : reformulé en « Quelle formule reste associée à Mario Draghi depuis 2012 ? » plutôt que la proposition telle quelle, qui aurait fait réapparaître « pour préserver l'euro » à la fois dans la question et dans la bonne réponse — un indice de longueur/reprise qui aurait facilité la question sans qu'on la comprenne.

### [MINEUR] ✅ Le titre de Montesquieu écrit de deux façons

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:269` (« Dans L'Esprit des lois ») contre
  `cours/institutions-economie.ts:78` (« dans De l'esprit des lois »)
- **Problème** : deux graphies du même titre dans le même domaine, dont l'une tronque le « De ». L'usage courant est *De l'esprit des lois*.
- **Correction proposée** : harmoniser sur « dans *De l'esprit des lois* ».
- **Fait** : « L'Esprit des lois » remplacé par « De l'esprit des lois » dans le seed, aligné sur le cours.

### [MINEUR] ⏭️ Nombre de communes : « environ trente-quatre mille » ici, « environ 35 000 » dans le cahier

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:14` contre
  `heritage/culture-g/data/institutions-economie.json` question 12
- **Problème** : la France compte environ 34 800 communes ; « environ trente-cinq mille » est l'arrondi juste, « environ trente-quatre mille » est le moins bon des deux, et les deux fichiers se contredisent.
- **Correction proposée** : « Environ trente-cinq mille » dans les deux, avec les distracteurs ajustés.
- **Fait** : rien à faire — vérifié que `institutions-economie.ts:14` dit déjà « Environ trente-cinq mille » et que le cahier dit déjà « environ 35 000 » ; le défaut signalé n'existe plus (probablement corrigé lors du passage sur les [GRAVE]).

### [MINEUR] ✅ Le G20 décrit comme « vingt économies »

- **Où** : `prisma/seed/culture-g/institutions-economie-3.ts:360` et `cours` section « Les enceintes de coordination »
- **Texte** : « Un forum réunissant vingt économies majeures »
- **Problème** : le G20 réunit dix-neuf pays plus l'Union européenne, et l'Union africaine depuis 2023 — jamais « vingt économies ».
- **Correction proposée** : « Un forum réunissant dix-neuf pays, l'Union européenne et, depuis 2023, l'Union africaine ».
- **Fait** : question du seed et cours corrigés en conséquence.

### [MINEUR] ✅ En-têtes de fichiers devenus faux

- **Où** : `prisma/seed/culture-g/institutions-economie.ts:2`, `-2.ts:2`, `-3.ts:2`
- **Texte** : « Institutions & Économie — treize notions **sans cours**. » ; « deuxième lot — vingt notions **sans cours** » ; « troisième lot — vingt notions sans cours »
- **Problème** : 42 des 52 notions ont désormais un cours. Le troisième lot compte par ailleurs **dix-neuf** notions, pas vingt. Ce sont des commentaires de code, invisibles pour l'apprenant, mais ils trompent le prochain contributeur.
- **Correction proposée** : « treize notions, dont huit avec cours » etc., ou supprimer la mention.
- **Fait** : recompté précisément par recoupement avec les clés du fichier de cours (8/13, 18/20, 16/19) ; les trois en-têtes mis à jour, y compris la correction du troisième lot à dix-neuf notions.

### [MINEUR] ✅ « Le régime instauré [en 1958] est semi-présidentiel »

- **Où** : `heritage/culture-g/data/institutions-economie.json` — question 1
- **Texte** : « Le régime instauré est semi-présidentiel : il renforce considérablement l'exécutif face au Parlement. »
- **Problème** : en 1958, le président est élu par un collège de grands électeurs ; le caractère semi-présidentiel, au sens de Duverger, tient à l'élection au suffrage universel direct, acquise seulement en **1962**. Léger anachronisme.
- **Correction proposée** : « Le régime renforce considérablement l'exécutif face au Parlement ; il ne deviendra semi-présidentiel qu'avec l'élection du président au suffrage universel direct, en 1962. »
- **Fait** : phrase remplacée mot pour mot.

---

## Ce que la seconde passe a ajouté

La première passe a lu le contenu question par question et a trouvé les erreurs
de fait et les doublons. La seconde a regardé le corpus **comme un corpus**, et
c'est là qu'est le plus gros constat du rapport.

1. **Le biais de longueur (GRAVE).** Complètement invisible en lecture linéaire :
   chaque question, prise isolément, paraît saine. C'est en mesurant les 515
   d'un coup qu'apparaît le 86,2 % — et le fait qu'une stratégie sans aucune
   connaissance obtienne 87,3 %. La passe 1 avait lu ces questions sans rien
   remarquer. C'est le constat qui justifie à lui seul la seconde passe.
2. **Le contrat de travail à deux réponses défendables (MOYEN).** Trouvé en
   relisant avec la seule question « un distracteur serait-il vrai lui aussi ? ».
   Le rapprochement avec la leçon 06, qui pose la même question **avec** le
   qualificatif manquant, montre que le seed a perdu quelque chose que le cahier
   avait.
3. **Le cumul des mandats (MOYEN).** Un énoncé qui demande une définition et une
   réponse qui donne une interdiction : la passe 1 l'avait lu comme juste, parce
   que la réponse *est* juste.
4. **L'action de groupe périmée par la loi du 30 avril 2025 (MOYEN).** Trouvé en
   revenant sur la fin du premier fichier, là où l'attention de la passe 1 avait
   baissé, puis vérifié sur le web.
5. **L'explication de trente-neuf caractères (MINEUR).** Sortie du repérage
   mécanique : la seule des 515 sous le seuil.
6. **Trois vérifications qui ont changé un constat.** La Bulgarie dans la zone
   euro et la censure du 4 décembre 2024 sont confirmées, ce qui consolide deux
   GRAVE. Le taux de pauvreté 2023 est confirmé à 15,4 %, ce qui a permis de
   remplacer une hypothèse par un chiffre. Et la part des salariés au SMIC m'a
   fait **corriger mon propre constat** : le chiffre du cours n'est pas faux, il
   est instable — 17,3 % début 2023, 12,4 % fin 2024 — ce qui déplace le reproche
   de l'exactitude vers l'absence de date.
7. **Une fausse piste, écartée.** La passe 2 a d'abord relevé que la bonne
   réponse est au rang 0 dans **515 questions sur 515**, et dans 56 cahiers sur
   56. Vérification faite dans le code avant de l'écrire : `src/modules/kinds/melange.ts`
   permute les propositions de façon déterministe à la source, et le fait
   délibérément — son en-tête raconte précisément ce problème et sa correction.
   Ce n'est donc pas un défaut mais une convention d'écriture, et je ne le
   signale pas. C'est ce même fichier qui rend le biais de longueur d'autant plus
   frappant : le défaut jumeau a été traité, celui-là ne l'a pas été.

## Ce qui est sain

**Les leçons patrimoniales sont excellentes, et souvent meilleures que le seed.**
Sur 85 sections et 85 quiz, je n'ai relevé que quatre problèmes de fond. Elles
datent leurs chiffres, citent leurs sources et hésitent à bon escient : « Ces
chiffres doivent toujours être rapportés à leur année » (leçon 14), un rapport
sénatorial de mars 2022 nommé pour les déserts médicaux (leçon 16), la stratégie
de la BCE révisée en 2021 avec sa cible **symétrique** (leçon 05, plus précise
que le seed qui en est resté au « proche de deux pour cent »). La leçon 10 sur
l'histoire de la monnaie est d'une précision remarquable de bout en bout — Lydie,
électrum, jiaozi, Gênes 1250, florin 1252, ducat 1283, Stockholm 1661, franc
germinal 1803, Triffin, 15 août 1971, accords de la Jamaïque du 8 janvier 1976 —
et je n'y ai pas trouvé une seule erreur. Les leçons 08 (droits de l'homme) et 13
(ONU) sont du même niveau : 48 voix pour et 8 abstentions à l'Assemblée générale,
comité de rédaction Roosevelt-Chang-Malik, protocole 15 entré en vigueur le
1er août 2021, article 38 du statut de la CIJ, six à dix membres non permanents
en 1965.

**Les cours du seed expliquent au lieu de définir.** C'est rare et cela mérite
d'être dit. « Déplacer la production » explique pourquoi le débat sur les
délocalisations est insoluble — gains diffus, pertes concentrées. « Où va
l'impôt » montre comment une redevance de marque déplace un bénéfice sans
déplacer une activité. « Ce que chacun sait » déroule la sélection adverse
jusqu'à l'effondrement du marché. « Les termes du débat » ramène les retraites à
trois leviers et un seul. « Compter les chômeurs » explique pourquoi deux chiffres
justes ne mesurent pas la même chose. Ces pages-là n'ont pas besoin d'être
retouchées.

**L'exactitude factuelle est bonne dans l'ensemble.** Sur plusieurs centaines de
dates et de chiffres vérifiés, l'écrasante majorité tombe juste : 577 députés et
348 sénateurs, sept députés et sept sénateurs en commission mixte paritaire,
quinze députés pour constituer un groupe, 12,5 % des inscrits pour se maintenir
au second tour, 7 500 euros de don par parti et par an, la QPC (2008 puis 2010),
la prescription pénale réformée en 2017, la garde à vue et sa réforme de 2011,
l'abolition de 1981 constitutionnalisée en 2007, l'initiative citoyenne
européenne (un million de signatures, sept États), le référendum d'initiative
partagée (un cinquième des parlementaires, un dixième des inscrits, jamais
atteint), les 149 propositions de la Convention citoyenne pour le climat, le
Nobel 2001 d'Akerlof-Spence-Stiglitz, l'OTAN à trente-deux membres après la
Finlande et la Suède, le quota du prix du carbone à près de cent euros en
février 2023.

**Le cahier d'origine est le matériau le plus propre du domaine** : une seule
erreur de fait sur 56 questions et 14 sections, avec des explications longues et
datées — 51,04 % au référendum de Maastricht, 6,55957 francs pour un euro, franc
démonétisé le 17 février 2002, 80 000 grands électeurs avant 1962, le plan
Keynes du bancor écarté au profit du plan White.

**Le vrai problème du domaine n'est pas l'exactitude, c'est la construction.**
Cinquante-deux notions écrites séparément se marchent dessus : huit doublons
francs, une dizaine de faits enseignés deux ou trois fois, la QPC exposée six
fois. Et par-dessus, un biais de forme qui permet de répondre juste sans savoir.
Un correcteur qui ne devrait faire qu'une chose ferait celle-là : rallonger les
distracteurs.
