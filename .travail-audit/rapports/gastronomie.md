# Gastronomie & Art de vivre

> ÉTAT : interrompu. Fichiers lus : `prisma/seed/culture-g/gastronomie.ts` (intégral), `gastronomie-2.ts` (intégral), `gastronomie-3.ts` (intégral), `prisma/seed/culture-g/cours/gastronomie.ts` (intégral, 46 cours), `heritage/culture-g/data/gastronomie.json` (55 questions + 3 cours, intégral), `heritage/.../lecons/gastronomie/01–05.json` (intégral). Reste à lire : `lecons/gastronomie/06.json` à `11.json` (viandes, produits de la mer, potager, épices, bulles et eaux-de-vie, conservation) — leurs quiz et sections n'ont pas été relus. **Passe 1 seulement** : la seconde passe prescrite par la consigne n'a pas pu être menée.

## Ce que j'ai lu

- `prisma/seed/culture-g/gastronomie.ts` — 13 notions, **128 questions** (ga-fromages-france et ga-vin n'en ont que 9, les autres 10).
- `prisma/seed/culture-g/gastronomie-2.ts` — 19 notions, **190 questions** (l'en-tête du fichier annonce « vingt notions » : il y en a 19).
- `prisma/seed/culture-g/gastronomie-3.ts` — 22 notions, **220 questions**.
- `prisma/seed/culture-g/cours/gastronomie.ts` — **46 cours** (167 sections), soit 8 notions sur 54 sans aucun cours.
- `heritage/culture-g/data/gastronomie.json` — **55 questions**, **3 cours** (15 sections).
- `heritage/.../lecons/gastronomie/01.json` à `05.json` — 5 leçons, 25 sections, **25 questions de quiz**.

Total effectivement lu : **618 questions** et **64 cours/leçons**.

---

## Constats

### [GRAVE] La fourchette « introduite par Catherine de Médicis » : légende que le dépôt lui-même réfute ailleurs
- **Où** : `prisma/seed/culture-g/gastronomie.ts:245` — notion `ga-art-table`
- **Texte** : « Introduite d'Italie par Catherine de Médicis, elle mit plus d'un siècle à s'imposer réellement. »
- **Problème** : c'est le mythe le plus documenté de l'histoire de l'alimentation française, et le cahier d'origine du **même domaine** le démonte explicitement : `heritage/culture-g/data/gastronomie.json`, cours « Une histoire de la cuisine française », section « La Renaissance et le mythe italien » : « Une idée très répandue veut que Catherine de Médicis […] ait apporté dans ses bagages les cuisiniers, les fourchettes et les sorbets qui auraient civilisé la table française. Les historiens de l'alimentation ont largement démonté ce récit. […] Le mythe s'est construit au XIXe siècle. » Le cours du seed `cours/gastronomie.ts` (`ga-art-table`, section « Une histoire du couvert ») dit prudemment « Venue d'Italie, elle ne s'impose à la table française qu'au XVIIe siècle » sans nommer Catherine. Et `gastronomie-3.ts:409` donne une troisième version : « elle se diffuse d'Italie sous Henri III et Louis XIV ». Trois versions, dont une fausse, dans un même domaine.
- **Correction proposée** : remplacer l'explication par « Venue d'Italie, elle met plus d'un siècle à s'imposer, sous Henri III puis Louis XIV. L'attribution à Catherine de Médicis est une légende forgée au XIXe siècle. »

### [GRAVE] Le décret de 1993 sur le pain de tradition française : confusion avec le « pain maison » et avec la loi de 1998
- **Où** : `prisma/seed/culture-g/gastronomie.ts:141` (notion `ga-pain-patisserie`) ; `heritage/culture-g/data/gastronomie.json` question 37 ; `heritage/.../lecons/gastronomie/03.json`, section « La baguette, une invention récente ».
- **Texte** : (seed) « Il impose aussi que le pain soit pétri, façonné et cuit sur le lieu de vente. » — (heritage Q37) « Le décret du 13 septembre 1993 réserve l'appellation de pain de tradition française aux pains pétris, façonnés et cuits sur le lieu de vente […]. Le même texte protège l'appellation de boulanger, réservée à celui qui pétrit et cuit sur place. » — (leçon 03) même formulation.
- **Problème** : le décret n° 93-1074 du 13 septembre 1993 définit le **pain de tradition française** par sa composition (farine de blé, eau, sel, levure ou levain, liste très courte d'auxiliaires), l'absence d'additif et l'absence de surgélation. L'obligation d'être « pétri, façonné et cuit sur le lieu de vente » relève d'une **autre** mention du même champ réglementaire, le « pain maison », et surtout la protection de l'appellation **boulanger / boulangerie** vient de la **loi n° 98-405 du 25 mai 1998**, pas du décret de 1993. Trois fichiers propagent la même conflation. À vérifier au texte avant correction (je n'ai pas pu faire la vérification web, la session ayant été interrompue) — mais l'attribution de l'appellation « boulanger » au décret de 1993 est, elle, certainement fausse.
- **Correction proposée** : (seed) « Il limite aussi sa composition à la farine, l'eau, le sel et la levure ou le levain. La protection du mot boulanger, elle, vient d'une loi de 1998. » (heritage Q37 et leçon 03) supprimer « pétris, façonnés et cuits sur le lieu de vente » de la définition du pain de tradition et la phrase sur l'appellation de boulanger.
- **Note** : le cours seed `ga3-pains-monde`, section « Le pain français et ses règles », donne lui la bonne définition (composition + surgélation, sans cuisson sur place). La question contredit donc son propre cours.

### [GRAVE] Le verre à eau : deux questions du même domaine se contredisent, et l'une contredit le cours
- **Où** : `prisma/seed/culture-g/gastronomie.ts:252` (`ga-art-table`) contre `prisma/seed/culture-g/gastronomie-3.ts:412` (`ga3-arts-table`)
- **Texte** : (gastronomie.ts) « Où place-t-on le verre à eau par rapport aux verres à vin ? » → « **Le plus à gauche, le plus grand** », explication « Les verres s'alignent par ordre décroissant de taille, du verre à eau vers le verre à vin blanc. » — (gastronomie-3.ts) « Où le verre à eau se place-t-il ? » → « **En haut à droite de l'assiette, devant les verres à vin** », explication « Les verres à vin s'alignent ensuite en diagonale vers la droite. »
- **Problème** : contradiction frontale. Le cours `ga-art-table`, section « Dresser une table », tranche dans le sens du premier : « Les verres s'alignent au-dessus et à droite de l'assiette, du plus grand au plus petit. Le verre à eau, le plus grand, se place le plus à gauche de la rangée. » La version de `gastronomie-3.ts` est donc fausse et contredit le cours.
- **Correction proposée** : dans `gastronomie-3.ts:412`, remplacer la bonne réponse par « Le plus à gauche de la rangée, au-dessus de l'assiette : c'est le plus grand » et l'explication par « Les verres décroissent ensuite vers la droite, du verre à vin rouge au verre à vin blanc. »

### [GRAVE] `gastronomie-3.ts` est en grande partie une reprise de `gastronomie.ts` et de `gastronomie-2.ts`
C'est le constat le plus lourd du domaine. Une majorité des notions du troisième lot reprennent les questions des lots 1 et 2, souvent avec la **même bonne réponse mot pour mot** et une explication paraphrasée. Relevé (non exhaustif, passe 1 seulement) :

| Question de `gastronomie-3.ts` | Doublon de |
|---|---|
| `:24` kimchi (+ explication kimjang quasi identique) | `gastronomie.ts:94` |
| `:22` miso | `gastronomie.ts:92` |
| `:48` couscous (+ inscription UNESCO à quatre pays) | `gastronomie.ts:98` |
| `:50` tajine (+ « couvercle conique / vapeur condensée ») | `gastronomie.ts:96` |
| `:66` nixtamalisation (+ « libère la vitamine B3 ») | `gastronomie.ts:103` (explication tortilla) |
| `:72` ceviche | `gastronomie-2.ts:430` |
| `:156` loi de pureté de 1516 (+ « la levure n'y figure pas ») | `gastronomie.ts:172` |
| `:162` houblon — **réponse identique caractère pour caractère** : « Il apporte amertume, arômes et conservation » | `gastronomie.ts:174` |
| `:148` fermentation haute / basse | `gastronomie.ts:176` |
| `:170` distillation | `gastronomie.ts:178` |
| `:187` part des anges | `gastronomie.ts:180` (explication) |
| `:196` origine du café (+ Yémen / port de Moka) | `gastronomie.ts:168` |
| `:198` arabica / robusta | `gastronomie.ts:170` |
| `:206`+`:208` thé vert / thé noir | `gastronomie.ts:166` |
| `:214` cérémonie du thé (+ Sen no Rikyū, XVIe siècle) | `gastronomie-2.ts:234` |
| `:224` présure | `gastronomie.ts:28` |
| `:226` pâte pressée cuite | `gastronomie.ts:22` |
| `:228` pâte persillée (+ Penicillium roqueforti et piquage) | `gastronomie.ts:18` |
| `:238` croûte lavée (+ munster/époisses/maroilles) | `gastronomie.ts:20` |
| `:233` roquefort AOP 1925 | `gastronomie.ts:16` |
| `:253` décret de 1993 | `gastronomie.ts:140` |
| `:300` cuisson à basse température | `gastronomie.ts:118` |
| `:302` cuisson sous vide (+ Georges Pralus, années 1970) | `gastronomie.ts:132` |
| `:306` roux | `gastronomie.ts:121` |
| `:308` émulsion (+ mayonnaise / lécithine) | `gastronomie.ts:119` **et** `gastronomie-2.ts:446` — trois fois |
| `:312` repos de la viande | `gastronomie.ts:129` |
| `:314` blanchir un légume | `gastronomie.ts:123` **et** `gastronomie-2.ts:132` |
| `:316` déglacer | `gastronomie.ts:125` |
| `:266` réaction de Maillard | `gastronomie.ts:114` |
| `:352` macronutriments | `gastronomie.ts:191` |
| `:354` acide aminé essentiel (+ « il en existe neuf chez l'adulte ») | `gastronomie.ts:195` |
| `:356` oméga-3 | `gastronomie.ts:197` |
| `:360` fibres | `gastronomie.ts:205` |
| `:368` classification NOVA | `gastronomie.ts:203` |
| `:370` Nutri-Score | `gastronomie.ts:201` |
| toute la notion `ga3-agriculture-alimentation` (`:378`–`:397`) : bio, AOP, IGP, Label rouge, circuit court, AMAP, agroécologie, PAC | notion `ga-agriculture-alimentation` de `gastronomie.ts` **et**, pour le circuit court, `gastronomie-2.ts:468` |
| toute la notion `ga3-arts-table` (`:404`–`:413`) | notion `ga-art-table` **et** `gastronomie-2.ts:228` |
| notion `ga3-produits-mer` (`:482`, `:484`, `:496`, `:500`) : poisson gras, aquaculture, MSC, criée | notion `ga2-produits-mer` |
| notion `ga3-herbes-epices` (`:514` girofle, `:518` safran, `:520` vanille, `:526` curcuma) | notion `ga2-epices` |
| `:536` bouillabaisse et `:538` cassoulet (+ « Castelnaudary, Carcassonne et Toulouse en revendiquent chacune ») | `gastronomie.ts:76` et `:74` |

- **Problème** : un apprenant qui révise le domaine tombe deux ou trois fois sur la même question. Cela fausse aussi la mesure de sa progression.
- **Correction proposée** : supprimer purement et simplement les notions `ga3-arts-table`, `ga3-conservation` (partiel), `ga3-cuisine-technique`, `ga3-herbes-epices`, `ga3-produits-mer` et `ga3-agriculture-alimentation`, ou les remplacer par des questions réellement nouvelles. Indice qui confirme le diagnostic : **ce sont exactement ces notions-là (à une près) qui n'ont pas de cours**, ce qui est cohérent avec un lot fabriqué par reformulation.

### [GRAVE] Huit notions n'ont aucun cours — dont trois notions phares du premier lot
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts` (46 cours) contre 54 notions dans les trois fichiers de questions.
- **Notions orphelines** : `ga-cuisine-francaise`, `ga-cuisines-monde`, `ga-pain-patisserie`, `ga3-arts-table`, `ga3-conservation`, `ga3-cuisine-technique`, `ga3-herbes-epices`, `ga3-produits-mer`.
- **Problème** : 80 questions dont la réponse n'est nulle part dans un cours du domaine. C'est particulièrement grave pour `ga-cuisine-francaise` (Escoffier, Carême, sauces mères, brigade, cassoulet, bouillabaisse, MOF, UNESCO 2010) et `ga-pain-patisserie` (décret 1993, levain, gluten, feuilletage, pâte à choux, tempérage, Paris-Brest), qui sont le cœur du domaine.
- **Correction proposée** : écrire les trois cours manquants du premier lot ; pour les cinq du troisième lot, la suppression des notions règle le problème.

### [GRAVE] La question sur les huit familles de fromages contredit son propre cours
- **Où** : `prisma/seed/culture-g/gastronomie.ts:15` contre `prisma/seed/culture-g/cours/gastronomie.ts`, `ga-fromages-france`, section « Huit familles, une seule logique ».
- **Texte** : (question) « Pâtes fraîches, molles à croûte fleurie, molles à croûte lavée, pressées non cuites, pressées cuites, persillées, **de chèvre et fondues**. » — (cours) « […] pâtes persillées, **pâtes filées et fromages de chèvre**, ces derniers étant rangés à part par tradition plus que par technique. »
- **Problème** : les deux listes de huit familles ne coïncident pas. La classification française usuelle retient les **fromages fondus** comme huitième famille (la version de la question) ; le cours a substitué les pâtes filées. Un apprenant qui lit le cours puis répond à la question apprend deux listes différentes. À noter aussi : le tableau visuel du même cours ne présente que **cinq** familles.
- **Correction proposée** : aligner le cours sur la question — « pâtes persillées, fromages de chèvre et fromages fondus » — ou l'inverse, mais une seule liste.

### [MOYEN] Le roquefort : 1925 ou 1666 ?
- **Où** : `cours/gastronomie.ts`, `ga3-fromages-monde`, section « Les grandes familles » contre `cours/gastronomie.ts`, `ga-fromages-france`, section « Moisissures et croûtes », `gastronomie.ts:16`, `gastronomie-3.ts:233`, heritage Q22 et leçon 01.
- **Texte** : (ga3) « C'est la plus ancienne appellation française, protégée par un arrêt du Parlement de Toulouse en 1666. » — (partout ailleurs) « il a été en 1925 le premier fromage français à obtenir une appellation d'origine ».
- **Problème** : les deux faits sont exacts mais présentés comme concurrents, sans le mot qui les concilie. L'arrêt de 1666 est un monopole de nom, la loi de 1925 est la première **appellation d'origine** au sens juridique moderne. Six occurrences dans le domaine disent 1925, une seule dit 1666 : l'apprenant retiendra une contradiction.
- **Correction proposée** : dans `ga3-fromages-monde`, écrire « Son nom est protégé depuis un arrêt du Parlement de Toulouse de 1666, et il devient en 1925 le premier fromage français doté d'une appellation d'origine au sens moderne. »

### [MOYEN] Part de l'arabica : 60 % ou deux tiers, selon le cours
- **Où** : `cours/gastronomie.ts`, `ga-boissons`, section « Thé et café » : « environ soixante pour cent du marché » — contre `cours/gastronomie.ts`, `ga3-cafe-the`, section « Du grain à la tasse » : « représente environ les deux tiers du marché ». La question `gastronomie-3.ts:199` dit « environ soixante pour cent ».
- **Problème** : deux chiffres différents pour le même fait, dans le même fichier de cours.
- **Correction proposée** : retenir « environ soixante pour cent » partout (chiffre repris par la question).

### [MOYEN] Le jambon de Bayonne et « le sel de Salies-de-Béarn »
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:103` ; `cours/gastronomie.ts`, `ga2-viandes`, section « Conserver par le sel » ; `cours/gastronomie.ts`, `ga2-fetes-traditions`, section « Des identités régionales » (trois occurrences).
- **Texte** : « Le sel de Salies-de-Béarn fait partie de son cahier des charges. » / « salé au sel de Salies-de-Béarn ».
- **Problème** : à ma connaissance le cahier des charges de l'IGP Jambon de Bayonne impose du **sel du bassin de l'Adour**, dont Salies-de-Béarn est l'une des sources possibles parmi d'autres. Réduire l'exigence à une seule commune est une approximation présentée comme une règle. **Incertain** : je n'ai pas pu vérifier le cahier des charges (session interrompue) — à contrôler avant correction.
- **Correction proposée** : « Le sel du bassin de l'Adour, dont celui de Salies-de-Béarn, fait partie de son cahier des charges. »

### [MOYEN] L'aire du cognac réduite à la seule Charente
- **Où** : `cours/gastronomie.ts`, `ga3-spiritueux`, section « Protéger un nom ».
- **Texte** : « Le cognac ne peut être produit qu'en Charente, à partir de cépages autorisés, par double distillation en alambic charentais. »
- **Problème** : l'aire d'appellation Cognac couvre la Charente **et la Charente-Maritime**, plus quelques communes de Dordogne et des Deux-Sèvres. Dans une section qui porte précisément sur le contenu des cahiers des charges, l'imprécision est gênante. **Confiance élevée sur le fond, non vérifiée en ligne.**
- **Correction proposée** : « Le cognac ne peut être produit que dans une aire délimitée de Charente et de Charente-Maritime, à partir de cépages autorisés […] ».

### [MOYEN] « Environ un tiers » de la production alimentaire mondiale gaspillée : un chiffre daté, sans date
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:344` — notion `ga3-conservation`
- **Texte** : « Quelle part de la production alimentaire mondiale est perdue ou gaspillée ? » → « Environ un tiers ».
- **Problème** : c'est l'estimation FAO de 2011, très largement reprise mais révisée depuis : la FAO parle désormais d'environ 13–14 % de pertes après récolte et le PNUE d'environ 17 % de gaspillage au stade de la consommation, ce qui ne se totalise pas en un tiers de la même manière. Chiffre exact à l'époque, trompeur aujourd'hui, et donné sans date — exactement le cas visé par la consigne.
- **Correction proposée** : ajouter la date dans l'explication : « Estimation de la FAO publiée en 2011, depuis affinée : environ 13 % de pertes entre la récolte et la vente, et environ 17 % de gaspillage au stade de la distribution et de la consommation. »

### [MOYEN] Dans `gastronomie-3.ts`, l'énoncé a été réécrit mais pas la réponse : la phrase ne se referme plus
Symptôme mécanique de la duplication signalée plus haut : les intitulés ont été reformulés pour ne plus ressembler aux questions du lot 1, mais le tableau de choix a été conservé tel quel. Il en résulte des couples énoncé/réponse grammaticalement incohérents. Relevé (passe 1) :
- `:224` « **Quelle substance** fait coaguler le lait dans la plupart des fromages ? » → « Une enzyme d'origine animale coagulant le lait » — la réponse ne nomme même pas la présure et reformule l'énoncé.
- `:228` « **Comment reconnaît-on** un fromage à pâte persillée ? » → « Un fromage veiné de moisissures bleues ».
- `:238` « **Comment obtient-on** un fromage à croûte lavée ? » → « Un fromage régulièrement frotté à la saumure ».
- `:306` « **Comment prépare-t-on** un roux ? » → « Un mélange de farine et de matière grasse cuit ensemble ».
- `:386` « **Que garantit** le commerce équitable aux producteurs ? » → « Un système garantissant un prix minimum aux producteurs ».
- `:390` « **Sur quel engagement** une AMAP repose-t-elle ? » → « Une association liant consommateurs et producteur par un engagement ».
- `:392` « **Sur quoi** l'agroécologie s'appuie-t-elle ? » → « Une approche mobilisant les processus écologiques ».
- `:394` « **Quel espace** la politique agricole commune couvre-t-elle ? » → « La politique agricole de l'Union européenne ».
- `:404` « **Comment les plats sont-ils présentés** dans le service à la française ? » → « Un service où tous les plats d'un même service sont posés ensemble ».
- `:406` idem pour le service à la russe.
- `:412` « **Où** le verre à eau se place-t-il ? » (voir constat GRAVE ci-dessus).
- `:416` « **Qu'est-ce que la serviette de table indique** une fois posée ? » → « Sur la chaise en cas d'absence temporaire, sur la table en partant » — l'énoncé est mal construit et la réponse n'y répond pas.
- `:482` « **Quels poissons** qualifie-t-on de poissons gras ? » (pluriel) → « **Un** poisson riche en lipides » (singulier).
- `:488` « **Qu'est-ce que l'élevage des moules sur pieux s'appelle ?** » — phrase agrammaticale.
- `:490` « **À partir de quand** parle-t-on de surpêche ? » → « Une exploitation supérieure à la capacité de renouvellement » — définition, pas une date.
- `:496` « **Que certifie** le label MSC ? » → « Une certification de pêche durable ».
- `:500` « **Comment** le poisson est-il vendu à la criée ? » → « Une vente aux enchères du poisson au débarquement ».
- `:568` « **Quel avantage** les légumineuses présentent-elles ? » → réponse correcte mais le distracteur « Elles se conservent mal » n'est pas un avantage : il ne joue pas son rôle.
- `:570` « **Où** se pratique l'agriculture urbaine ? » → « Une production alimentaire en ville ou à sa périphérie ».
- **Correction proposée** : rétablir des énoncés en « Qu'est-ce que… ? » cohérents avec des réponses nominales, ou réécrire les réponses en verbes. Mais la vraie correction est la suppression de ces notions (voir constat GRAVE sur les doublons).

### [MOYEN] Le prêt-à-porter : 1949 dans la question, « années 1950 » dans le cours
- **Où** : `prisma/seed/culture-g/gastronomie.ts:279` contre `cours/gastronomie.ts`, `ga-mode-textile`, section « Deux révolutions de silhouette ».
- **Texte** : (question) « Le terme apparaît en France en 1949, calqué sur l'anglais ready-to-wear. » — (cours) « Le prêt-à-porter, apparu dans les années 1950, change ensuite d'échelle. »
- **Problème** : petit écart, mais l'apprenant qui a lu le cours peut hésiter. Le cours ne mentionne d'ailleurs pas la date que la question exige.
- **Correction proposée** : dans le cours, écrire « Le prêt-à-porter, dont le terme apparaît en 1949 […] ».

### [MOYEN] Un même fait dit deux fois de suite dans le cours `ga-boissons`
- **Où** : `cours/gastronomie.ts`, `ga-boissons`, section « La bière ».
- **Texte** : paragraphe 1 : « Le houblon, entré tardivement dans sa composition, n'y apporte pas seulement l'amertume : il conserve, ce qui a permis à la bière de voyager. » — paragraphe 2 : « Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur — c'est cette dernière propriété qui a d'abord justifié son emploi. »
- **Problème** : la même information est énoncée deux fois en trois lignes, presque dans les mêmes termes.
- **Correction proposée** : supprimer le premier paragraphe et commencer la section par « La bière est la boisson fermentée la plus consommée au monde. Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur […] ».

### [MOYEN] La loi de pureté de 1516 est demandée par une question sans être traitée par son cours
- **Où** : question `prisma/seed/culture-g/gastronomie.ts:172` (notion `ga-boissons`) ; le cours `ga-boissons` n'en dit rien.
- **Problème** : question non répondable après lecture du cours de sa notion. Le fait est bien traité, mais ailleurs — dans `ga3-bieres-monde`, section « Ingrédients et règles ».
- **Correction proposée** : ajouter une phrase sur le Reinheitsgebot dans la section « La bière » du cours `ga-boissons`.

### [MOYEN] Deux questions identiques sur le service à la carte, à deux lots d'écart
- **Où** : `prisma/seed/culture-g/gastronomie.ts:254` « Qu'est-ce qu'un menu à la carte ? » et `gastronomie-2.ts:158` « Qu'est-ce qu'un service à la carte en restauration ? »
- **Texte** : bonne réponse quasi identique (« Un choix libre de plats tarifés individuellement » / « séparément »), explications jumelles (« Le menu, à prix fixe, s'oppose à la carte. » / « Le menu, à prix fixe, permet une meilleure maîtrise des coûts. »).
- **Correction proposée** : supprimer l'une des deux.

### [MOYEN] Le principe de classement annoncé pour les fromages est démenti par sa propre liste
- **Où** : `prisma/seed/culture-g/gastronomie.ts:12` — accroche de la notion `ga-fromages-france`.
- **Texte** : « Un fromage se classe par sa technique de fabrication, pas par sa région ni par son lait. »
- **Problème** : la liste des huit familles donnée juste après contient « fromages de chèvre », qui est précisément un classement **par le lait**. Le cours a l'honnêteté de le signaler (« ces derniers étant rangés à part par tradition plus que par technique ») ; l'accroche, non, et c'est elle qui sera retenue.
- **Correction proposée** : « Un fromage se classe d'abord par sa technique de fabrication, plus que par sa région ou son lait — les chèvres faisant exception. »

### [MOYEN] Nicolas Appert : « met au point le procédé en 1795 »
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:327` — notion `ga3-conservation`.
- **Texte** : « Confiseur français, il met au point le procédé en 1795 sans en comprendre la cause. »
- **Problème** : 1795 est la date à laquelle Appert **commence** ses essais ; le procédé n'est réellement au point et publié qu'en 1810 (*L'Art de conserver*), année du prix décerné par le gouvernement. Une date de début présentée comme une date d'aboutissement.
- **Correction proposée** : « Confiseur français, il commence ses essais vers 1795 et publie sa méthode en 1810, sans en comprendre la cause. »

### [MOYEN] Trois étoiles Michelin : « une vingtaine » d'établissements
- **Où** : `heritage/culture-g/data/gastronomie.json`, cours « Les grands chefs… », section « Le guide rouge et le pouvoir des étoiles ».
- **Texte** : « La France et Monaco comptent chaque année une vingtaine d'établissements trois étoiles seulement. »
- **Problème** : le chiffre tourne plutôt autour de la trentaine ces dernières années. Chiffre sans date, et qui varie.
- **Correction proposée** : « une trentaine d'établissements trois étoiles seulement, sur plusieurs centaines de tables étoilées » — ou retirer le nombre.

### [MOYEN] Redites entre lots sur des faits ponctuels
Faits répétés à l'identique dans plusieurs explications, sans que rien ne s'ajoute :
- la congélation préalable obligatoire du poisson cru : `gastronomie-2.ts:83` (anisakis) et `gastronomie-2.ts:449` — et encore dans le cours `ga2-produits-mer`.
- Sen no Rikyū / XVIe siècle : `gastronomie-2.ts:235` et `gastronomie-3.ts:215`.
- kimjang / UNESCO : `gastronomie.ts:95` et `gastronomie-3.ts:25`.
- Georges Pralus / années 1970 : `gastronomie.ts:133`, `gastronomie-3.ts:303`, cours `ga-techniques-cuisine`, heritage Q47.
- Castelnaudary/Carcassonne/Toulouse : `gastronomie.ts:75`, `gastronomie-3.ts:539`, cours `ga3-terroirs-france-3`, leçon 04.

### [MINEUR] Apostrophes droites et capitales incohérentes dans les choix
- **Où** : systématique dans les trois fichiers de questions du seed.
- **Texte** : « l'année de récolte des raisins » (`gastronomie.ts:50`), « l'ensemble sol, climat et savoir-faire propre à un lieu » (`:44`), « l'Espagne », « l'Italie » (`:322`), « d'Asie du Sud » (`:88`), « l'oxygène » (`:145`), « l'éclair » (`:157`), « l'EFSA », « l'ANSES » (`gastronomie-2.ts:380`, `:382`), « l'arabica et le robusta » (`gastronomie-3.ts:198`)…
- **Problème** : les choix commençant par un article élidé ne sont pas capitalisés, les autres le sont. Défaut visuel constant dans les listes. Par ailleurs l'apostrophe employée partout est l'apostrophe droite `'` et non l'apostrophe courbe `’` demandée par la consigne typographique — les cours du seed et le cahier d'origine, eux, utilisent bien les guillemets français et les tirets cadratins.
- **Correction proposée** : capitaliser « L'année… », « L'Espagne », « D'Asie du Sud », etc., et passer l'ensemble du domaine à l'apostrophe courbe.

### [MINEUR] « Un désynchronisation »
- **Où** : `prisma/seed/culture-g/gastronomie.ts:340` — notion `ga-voyage-tourisme`.
- **Texte** : « Un désynchronisation de l'horloge biologique après un vol transméridien ».
- **Correction proposée** : « Une désynchronisation ».

### [MINEUR] « au premier vaporisation »
- **Où** : `cours/gastronomie.ts`, `ga2-parfum`, section « La pyramide olfactive ».
- **Texte** : « le juger au premier vaporisation revient à juger un morceau sur ses trois premières notes ».
- **Correction proposée** : « le juger à la première vaporisation ».

### [MINEUR] Apposition fautive sur le botulisme
- **Où** : `cours/gastronomie.ts`, `ga2-viandes`, section « Conserver par le sel ».
- **Texte** : « il inhibe la bactérie responsable du botulisme, toxine la plus puissante connue ».
- **Problème** : l'apposition rattache « toxine » à « bactérie ». Ce n'est pas la bactérie qui est une toxine.
- **Correction proposée** : « il inhibe la bactérie responsable du botulisme, dont la toxine est la plus puissante connue ».

### [MINEUR] Genre du cépage syrah instable
- **Où** : `prisma/seed/culture-g/gastronomie.ts:42` « La syrah et le grenache » contre `gastronomie-3.ts:122` et `:130` « Le syrah ».
- **Correction proposée** : « la syrah » partout (usage dominant, et celui du cahier d'origine, question 32 : « la syrah dans le nord de la vallée du Rhône »).

### [MINEUR] « Index glycémique » puis « indice glycémique »
- **Où** : `gastronomie.ts:157` (« index glycémique ») contre `gastronomie-3.ts:358` et le cours `ga3-alimentation-sante` (« indice glycémique »).
- **Correction proposée** : « indice glycémique » partout.

### [MINEUR] En-tête de fichier faux
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:2`.
- **Texte** : « Gastronomie & Art de vivre, deuxième lot — vingt notions sans cours. »
- **Problème** : le fichier contient 19 notions, pas 20. Par ailleurs le mot « sans cours » est trompeur : les cours existent, dans `cours/gastronomie.ts`.
- **Correction proposée** : « dix-neuf notions ; les cours sont dans cours/gastronomie.ts ».

### [MINEUR] Deux notions du premier lot n'ont que neuf questions
- **Où** : `ga-fromages-france` et `ga-vin` dans `gastronomie.ts` — 9 questions, contre 10 pour les 52 autres notions du domaine.
- **Correction proposée** : compléter, ou accepter l'écart s'il est voulu.

---

## Ce que la seconde passe a ajouté

**Rien : la seconde passe n'a pas eu lieu.** La session a été interrompue pendant la première lecture, au niveau de la leçon 05 du cahier d'origine. Les constats ci-dessus proviennent tous d'une lecture unique, ce qui veut dire, d'expérience, qu'il en reste. Les zones les plus à risque, parce que lues en fin de parcours ou pas du tout :
- `gastronomie-3.ts` à partir de la ligne 440 environ (métiers de la restauration, histoire du repas, terroirs, alimentation de demain) : lue une fois, vite ;
- les leçons `06.json` à `11.json` du cahier d'origine : **non lues**. Elles portent sur la viande et la charcuterie, les produits de la mer, le potager, les épices, les eaux-de-vie et la conservation — c'est-à-dire précisément les sujets où j'ai trouvé le plus de problèmes de cahiers des charges ailleurs (jambon de Bayonne, cognac). À relire en priorité ;
- les vérifications en ligne prévues n'ont pas pu être faites : décret de 1993, cahier des charges du jambon de Bayonne, aire du cognac, nombre de conservatoires botaniques nationaux (`gastronomie-2.ts:337` annonce « onze », un chiffre qui me paraît avoir évolué depuis — **à vérifier**), obligation « service compris » depuis 1987 (`gastronomie.ts:263`), part de la production mondiale gaspillée.

## Ce qui est sain

Les cours sont, dans l'ensemble, d'une qualité nettement supérieure aux questions : ils enseignent réellement, ils nomment leurs incertitudes et ils démontent les légendes au lieu de les colporter — le mythe Catherine de Médicis, le « bystro » des cosaques, l'origine napoléonienne de la baguette, la feijoada des esclaves, le poison échangé entre verres au moment de trinquer, la saisie qui « emprisonne les jus », l'invention de la bulle par Dom Pérignon, les traditions régionales inventées au XIXe siècle. Le cahier d'origine (`heritage/`) est solide de bout en bout : dates justes, sources citées, formulations prudentes là où l'histoire l'est. Les notions `ga2-epices`, `ga2-legumes-fruits`, `ga2-cuisine-technique-froid`, `ga2-securite-alimentaire` et `ga3-cuisines-ameriques` m'ont paru particulièrement bien tenues, questions comprises. Le problème du domaine n'est pas l'ignorance : c'est la duplication industrielle du troisième lot, et une poignée d'erreurs réglementaires qui se recopient d'un fichier à l'autre.
