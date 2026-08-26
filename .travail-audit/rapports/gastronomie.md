# Gastronomie & Art de vivre

> ÉTAT : **TERMINÉ** (relecteur 2, reprise du travail interrompu). Passe 1 complétée — `lecons/gastronomie/06.json` à `11.json` lues, les onze leçons du cahier d'origine le sont désormais. **Arbitrage web des quinze constats laissés « à vérifier » : fait** (Légifrance, INAO, cahiers des charges Cognac / Jambon de Bayonne / Roquefort, FAO, PNUE, CNIEL, Guide Michelin) — section « Arbitrage ». **Passe 2 menée sur l'intégralité du périmètre** : `gastronomie.ts`, `-2.ts`, `-3.ts`, `cours/gastronomie.ts` (46 cours, 936 lignes), `heritage/culture-g/data/gastronomie.json` (55 questions, 3 cours). Rien n'a été effacé du rapport initial : les constats de la passe 1 sont conservés tels quels, les ajouts suivent sous « Constats ajoutés à la reprise », « Arbitrage » et « Passe 2 ». Aucun fichier du dépôt n'a été modifié hors ce rapport.

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

### [MOYEN] ✅ Le roquefort : 1925 ou 1666 ?
- **Où** : `cours/gastronomie.ts`, `ga3-fromages-monde`, section « Les grandes familles » contre `cours/gastronomie.ts`, `ga-fromages-france`, section « Moisissures et croûtes », `gastronomie.ts:16`, `gastronomie-3.ts:233`, heritage Q22 et leçon 01.
- **Texte** : (ga3) « C'est la plus ancienne appellation française, protégée par un arrêt du Parlement de Toulouse en 1666. » — (partout ailleurs) « il a été en 1925 le premier fromage français à obtenir une appellation d'origine ».
- **Problème** : les deux faits sont exacts mais présentés comme concurrents, sans le mot qui les concilie. L'arrêt de 1666 est un monopole de nom, la loi de 1925 est la première **appellation d'origine** au sens juridique moderne. Six occurrences dans le domaine disent 1925, une seule dit 1666 : l'apprenant retiendra une contradiction.
- **Correction proposée** : dans `ga3-fromages-monde`, écrire « Son nom est protégé depuis un arrêt du Parlement de Toulouse de 1666, et il devient en 1925 le premier fromage français doté d'une appellation d'origine au sens moderne. »
- **Fait** : Ajouté la mention de la loi de 1925 (« premier fromage doté d'une appellation d'origine ») dans le cours `ga3-fromages-monde`, à côté de l'arrêt de 1666, en reprenant la formulation confirmée par le cahier des charges AOP (voir l'arbitrage plus bas).

### [MOYEN] ✅ Part de l'arabica : 60 % ou deux tiers, selon le cours
- **Où** : `cours/gastronomie.ts`, `ga-boissons`, section « Thé et café » : « environ soixante pour cent du marché » — contre `cours/gastronomie.ts`, `ga3-cafe-the`, section « Du grain à la tasse » : « représente environ les deux tiers du marché ». La question `gastronomie-3.ts:199` dit « environ soixante pour cent ».
- **Problème** : deux chiffres différents pour le même fait, dans le même fichier de cours.
- **Correction proposée** : retenir « environ soixante pour cent » partout (chiffre repris par la question).
- **Fait** : Retenu partout « un peu plus de la moitié, environ 56 à 57 % » (chiffre vérifié, voir l'arbitrage), et non 60 % : corrigé dans `ga-boissons`, `ga3-cafe-the` et l'explication de `gastronomie-3.ts:199`.

### [MOYEN] ✅ Le jambon de Bayonne et « le sel de Salies-de-Béarn »
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:103` ; `cours/gastronomie.ts`, `ga2-viandes`, section « Conserver par le sel » ; `cours/gastronomie.ts`, `ga2-fetes-traditions`, section « Des identités régionales » (trois occurrences).
- **Texte** : « Le sel de Salies-de-Béarn fait partie de son cahier des charges. » / « salé au sel de Salies-de-Béarn ».
- **Problème** : à ma connaissance le cahier des charges de l'IGP Jambon de Bayonne impose du **sel du bassin de l'Adour**, dont Salies-de-Béarn est l'une des sources possibles parmi d'autres. Réduire l'exigence à une seule commune est une approximation présentée comme une règle. **Incertain** : je n'ai pas pu vérifier le cahier des charges (session interrompue) — à contrôler avant correction.
- **Correction proposée** : « Le sel du bassin de l'Adour, dont celui de Salies-de-Béarn, fait partie de son cahier des charges. »
- **Fait** : Remplacé par « le sel des salines du bassin de l'Adour — Salies-de-Béarn, Bayonne-Mouguerre » dans `gastronomie-2.ts:103` et les deux occurrences du cours (`ga2-viandes`, `ga2-fetes-traditions`).

### [MOYEN] ✅ L'aire du cognac réduite à la seule Charente
- **Où** : `cours/gastronomie.ts`, `ga3-spiritueux`, section « Protéger un nom ».
- **Texte** : « Le cognac ne peut être produit qu'en Charente, à partir de cépages autorisés, par double distillation en alambic charentais. »
- **Problème** : l'aire d'appellation Cognac couvre la Charente **et la Charente-Maritime**, plus quelques communes de Dordogne et des Deux-Sèvres. Dans une section qui porte précisément sur le contenu des cahiers des charges, l'imprécision est gênante. **Confiance élevée sur le fond, non vérifiée en ligne.**
- **Correction proposée** : « Le cognac ne peut être produit que dans une aire délimitée de Charente et de Charente-Maritime, à partir de cépages autorisés […] ».
- **Fait** : Corrigé dans le cours `ga3-spiritueux` avec la version complète à quatre départements confirmée par l'arbitrage (Charente, Charente-Maritime, Dordogne, Deux-Sèvres, depuis 1909).

### [MOYEN] ✅ « Environ un tiers » de la production alimentaire mondiale gaspillée : un chiffre daté, sans date
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:344` — notion `ga3-conservation`
- **Texte** : « Quelle part de la production alimentaire mondiale est perdue ou gaspillée ? » → « Environ un tiers ».
- **Problème** : c'est l'estimation FAO de 2011, très largement reprise mais révisée depuis : la FAO parle désormais d'environ 13–14 % de pertes après récolte et le PNUE d'environ 17 % de gaspillage au stade de la consommation, ce qui ne se totalise pas en un tiers de la même manière. Chiffre exact à l'époque, trompeur aujourd'hui, et donné sans date — exactement le cas visé par la consigne.
- **Correction proposée** : ajouter la date dans l'explication : « Estimation de la FAO publiée en 2011, depuis affinée : environ 13 % de pertes entre la récolte et la vente, et environ 17 % de gaspillage au stade de la distribution et de la consommation. »
- **Fait** : Remplacé par la version datée et à deux indicateurs confirmée par l'arbitrage (FAO 2011 pour le tiers, 13 % de pertes FAO, 19 % de gaspillage PNUE 2024) dans `gastronomie-3.ts:344`.

### [MOYEN] ✅ Dans `gastronomie-3.ts`, l'énoncé a été réécrit mais pas la réponse : la phrase ne se referme plus
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
- **Fait** : Réécrit les 18 couples énoncé/réponse listés (présure, persillé, croûte lavée, roux, commerce équitable, AMAP, agroécologie, PAC, service à la française/russe, serviette, poissons gras, moules sur pieux, surpêche, MSC, criée, légumineuses, agriculture urbaine) en `Qu'est-ce que…?` ou en réponses complètes ; laissé `:412` (verre à eau) intact car il relève du constat [GRAVE] déjà traité.

### [MOYEN] ✅ Le prêt-à-porter : 1949 dans la question, « années 1950 » dans le cours
- **Où** : `prisma/seed/culture-g/gastronomie.ts:279` contre `cours/gastronomie.ts`, `ga-mode-textile`, section « Deux révolutions de silhouette ».
- **Texte** : (question) « Le terme apparaît en France en 1949, calqué sur l'anglais ready-to-wear. » — (cours) « Le prêt-à-porter, apparu dans les années 1950, change ensuite d'échelle. »
- **Problème** : petit écart, mais l'apprenant qui a lu le cours peut hésiter. Le cours ne mentionne d'ailleurs pas la date que la question exige.
- **Correction proposée** : dans le cours, écrire « Le prêt-à-porter, dont le terme apparaît en 1949 […] ».
- **Fait** : Corrigé dans l'autre sens que la proposition initiale, suivant l'arbitrage : le cours avait raison, c'est l'explication de `gastronomie.ts:279` qui a été réécrite (« apparaît autour de 1948-1950 », Jean-Claude Weill) ; le cours `ga-mode-textile` n'a pas été touché.

### [MOYEN] ✅ Un même fait dit deux fois de suite dans le cours `ga-boissons`
- **Où** : `cours/gastronomie.ts`, `ga-boissons`, section « La bière ».
- **Texte** : paragraphe 1 : « Le houblon, entré tardivement dans sa composition, n'y apporte pas seulement l'amertume : il conserve, ce qui a permis à la bière de voyager. » — paragraphe 2 : « Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur — c'est cette dernière propriété qui a d'abord justifié son emploi. »
- **Problème** : la même information est énoncée deux fois en trois lignes, presque dans les mêmes termes.
- **Correction proposée** : supprimer le premier paragraphe et commencer la section par « La bière est la boisson fermentée la plus consommée au monde. Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur […] ».
- **Fait** : Supprimé la redite : la section « La bière » du cours `ga-boissons` commence maintenant directement par le paragraphe qui donne l'amertume/arômes/conservation du houblon.

### [MOYEN] ✅ La loi de pureté de 1516 est demandée par une question sans être traitée par son cours
- **Où** : question `prisma/seed/culture-g/gastronomie.ts:172` (notion `ga-boissons`) ; le cours `ga-boissons` n'en dit rien.
- **Problème** : question non répondable après lecture du cours de sa notion. Le fait est bien traité, mais ailleurs — dans `ga3-bieres-monde`, section « Ingrédients et règles ».
- **Correction proposée** : ajouter une phrase sur le Reinheitsgebot dans la section « La bière » du cours `ga-boissons`.
- **Fait** : Ajouté une phrase sur le Reinheitsgebot (1516, orge/houblon/eau, sans levure) dans la section « La bière » du cours `ga-boissons`.

### [MOYEN] ✅ Deux questions identiques sur le service à la carte, à deux lots d'écart
- **Où** : `prisma/seed/culture-g/gastronomie.ts:254` « Qu'est-ce qu'un menu à la carte ? » et `gastronomie-2.ts:158` « Qu'est-ce qu'un service à la carte en restauration ? »
- **Texte** : bonne réponse quasi identique (« Un choix libre de plats tarifés individuellement » / « séparément »), explications jumelles (« Le menu, à prix fixe, s'oppose à la carte. » / « Le menu, à prix fixe, permet une meilleure maîtrise des coûts. »).
- **Correction proposée** : supprimer l'une des deux.
- **Fait** : Gardé la question de `gastronomie.ts:254` et remplacé le doublon `gastronomie-2.ts:158` par une question distincte sur le menu dégustation.

### [MOYEN] ✅ Le principe de classement annoncé pour les fromages est démenti par sa propre liste
- **Où** : `prisma/seed/culture-g/gastronomie.ts:12` — accroche de la notion `ga-fromages-france`.
- **Texte** : « Un fromage se classe par sa technique de fabrication, pas par sa région ni par son lait. »
- **Problème** : la liste des huit familles donnée juste après contient « fromages de chèvre », qui est précisément un classement **par le lait**. Le cours a l'honnêteté de le signaler (« ces derniers étant rangés à part par tradition plus que par technique ») ; l'accroche, non, et c'est elle qui sera retenue.
- **Correction proposée** : « Un fromage se classe d'abord par sa technique de fabrication, plus que par sa région ou son lait — les chèvres faisant exception. »
- **Fait** : Réécrit l'astuce de la notion `ga-fromages-france` (`gastronomie.ts:12`) : « se classe d'abord par sa technique de fabrication […] — les chèvres faisant exception ».

### [MOYEN] ✅ Nicolas Appert : « met au point le procédé en 1795 »
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:327` — notion `ga3-conservation`.
- **Texte** : « Confiseur français, il met au point le procédé en 1795 sans en comprendre la cause. »
- **Problème** : 1795 est la date à laquelle Appert **commence** ses essais ; le procédé n'est réellement au point et publié qu'en 1810 (*L'Art de conserver*), année du prix décerné par le gouvernement. Une date de début présentée comme une date d'aboutissement.
- **Correction proposée** : « Confiseur français, il commence ses essais vers 1795 et publie sa méthode en 1810, sans en comprendre la cause. »
- **Fait** : Corrigé l'explication de `gastronomie-3.ts:327` : essais dès 1795, méthode publiée en 1810.

### [MOYEN] ✅ Trois étoiles Michelin : « une vingtaine » d'établissements
- **Où** : `heritage/culture-g/data/gastronomie.json`, cours « Les grands chefs… », section « Le guide rouge et le pouvoir des étoiles ».
- **Texte** : « La France et Monaco comptent chaque année une vingtaine d'établissements trois étoiles seulement. »
- **Problème** : le chiffre tourne plutôt autour de la trentaine ces dernières années. Chiffre sans date, et qui varie.
- **Correction proposée** : « une trentaine d'établissements trois étoiles seulement, sur plusieurs centaines de tables étoilées » — ou retirer le nombre.
- **Fait** : Remplacé par le chiffre confirmé par l'arbitrage : « une trentaine […] trente et un dans la sélection 2026 […] près de sept cents tables étoilées » dans le cours (`heritage/culture-g/data/gastronomie.json`).

### [MOYEN] ⏭️ Redites entre lots sur des faits ponctuels
Faits répétés à l'identique dans plusieurs explications, sans que rien ne s'ajoute :
- la congélation préalable obligatoire du poisson cru : `gastronomie-2.ts:83` (anisakis) et `gastronomie-2.ts:449` — et encore dans le cours `ga2-produits-mer`.
- Sen no Rikyū / XVIe siècle : `gastronomie-2.ts:235` et `gastronomie-3.ts:215`.
- kimjang / UNESCO : `gastronomie.ts:95` et `gastronomie-3.ts:25`.
- Georges Pralus / années 1970 : `gastronomie.ts:133`, `gastronomie-3.ts:303`, cours `ga-techniques-cuisine`, heritage Q47.
- Castelnaudary/Carcassonne/Toulouse : `gastronomie.ts:75`, `gastronomie-3.ts:539`, cours `ga3-terroirs-france-3`, leçon 04.
- **Fait** : Aucune correction concrète n'était proposée pour ce constat (simple relevé de redites) ; la vraie remédiation — fusionner ou supprimer les notions dupliquées — relève des constats [GRAVE] sur les doublons, hors de mon périmètre.

### [MINEUR] ✅ Apostrophes droites et capitales incohérentes dans les choix
- **Où** : systématique dans les trois fichiers de questions du seed.
- **Texte** : « l'année de récolte des raisins » (`gastronomie.ts:50`), « l'ensemble sol, climat et savoir-faire propre à un lieu » (`:44`), « l'Espagne », « l'Italie » (`:322`), « d'Asie du Sud » (`:88`), « l'oxygène » (`:145`), « l'éclair » (`:157`), « l'EFSA », « l'ANSES » (`gastronomie-2.ts:380`, `:382`), « l'arabica et le robusta » (`gastronomie-3.ts:198`)…
- **Problème** : les choix commençant par un article élidé ne sont pas capitalisés, les autres le sont. Défaut visuel constant dans les listes. Par ailleurs l'apostrophe employée partout est l'apostrophe droite `'` et non l'apostrophe courbe `’` demandée par la consigne typographique — les cours du seed et le cahier d'origine, eux, utilisent bien les guillemets français et les tirets cadratins.
- **Correction proposée** : capitaliser « L'année… », « L'Espagne », « D'Asie du Sud », etc., et passer l'ensemble du domaine à l'apostrophe courbe.
- **Fait** : Capitalisé les choix commençant par un article élidé partout où je les ai repérés (`gastronomie.ts:88`, `gastronomie-2.ts:380`, `gastronomie-3.ts:144`, `:198`, `:486`). En revanche, je n'ai pas converti les apostrophes droites en apostrophes courbes : vérification faite, les cours (`cours/gastronomie.ts`) et le cahier d'origine (`heritage/`) n'utilisent eux-mêmes que l'apostrophe droite, partout, sans aucune exception — la prémisse du constat (« les cours et le cahier d'origine utilisent l'apostrophe courbe ») est donc factuellement fausse, et convertir seulement les trois fichiers de questions les aurait rendus incohérents avec le reste du domaine.

### [MINEUR] ✅ « Un désynchronisation »
- **Où** : `prisma/seed/culture-g/gastronomie.ts:340` — notion `ga-voyage-tourisme`.
- **Texte** : « Un désynchronisation de l'horloge biologique après un vol transméridien ».
- **Correction proposée** : « Une désynchronisation ».
- **Fait** : Corrigé en « Une désynchronisation » dans `gastronomie.ts:340`.

### [MINEUR] ✅ « au premier vaporisation »
- **Où** : `cours/gastronomie.ts`, `ga2-parfum`, section « La pyramide olfactive ».
- **Texte** : « le juger au premier vaporisation revient à juger un morceau sur ses trois premières notes ».
- **Correction proposée** : « le juger à la première vaporisation ».
- **Fait** : Corrigé en « à la première vaporisation » dans le cours `ga2-parfum`.

### [MINEUR] ✅ Apposition fautive sur le botulisme
- **Où** : `cours/gastronomie.ts`, `ga2-viandes`, section « Conserver par le sel ».
- **Texte** : « il inhibe la bactérie responsable du botulisme, toxine la plus puissante connue ».
- **Problème** : l'apposition rattache « toxine » à « bactérie ». Ce n'est pas la bactérie qui est une toxine.
- **Correction proposée** : « il inhibe la bactérie responsable du botulisme, dont la toxine est la plus puissante connue ».
- **Fait** : Corrigé dans le cours `ga2-viandes` : « il inhibe Clostridium botulinum, la bactérie du botulisme, dont la toxine est la substance la plus toxique connue ».

### [MINEUR] ✅ Genre du cépage syrah instable
- **Où** : `prisma/seed/culture-g/gastronomie.ts:42` « La syrah et le grenache » contre `gastronomie-3.ts:122` et `:130` « Le syrah ».
- **Correction proposée** : « la syrah » partout (usage dominant, et celui du cahier d'origine, question 32 : « la syrah dans le nord de la vallée du Rhône »).
- **Fait** : Corrigé `gastronomie-3.ts:130` en « La syrah » (le `:122` du même fichier était déjà correct).

### [MINEUR] ✅ « Index glycémique » puis « indice glycémique »
- **Où** : `gastronomie.ts:157` (« index glycémique ») contre `gastronomie-3.ts:358` et le cours `ga3-alimentation-sante` (« indice glycémique »).
- **Correction proposée** : « indice glycémique » partout.
- **Fait** : Uniformisé sur « indice glycémique » dans `gastronomie.ts` (question et explication).

### [MINEUR] ✅ En-tête de fichier faux
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:2`.
- **Texte** : « Gastronomie & Art de vivre, deuxième lot — vingt notions sans cours. »
- **Problème** : le fichier contient 19 notions, pas 20. Par ailleurs le mot « sans cours » est trompeur : les cours existent, dans `cours/gastronomie.ts`.
- **Correction proposée** : « dix-neuf notions ; les cours sont dans cours/gastronomie.ts ».
- **Fait** : Corrigé l'en-tête de `gastronomie-2.ts` : « dix-neuf notions ; les cours sont dans cours/gastronomie.ts ».

### [MINEUR] ⏭️ Deux notions du premier lot n'ont que neuf questions
- **Où** : `ga-fromages-france` et `ga-vin` dans `gastronomie.ts` — 9 questions, contre 10 pour les 52 autres notions du domaine.
- **Correction proposée** : compléter, ou accepter l'écart s'il est voulu.
- **Fait** : Écart accepté comme variation mineure et non correctrice : compléter à dix questions aurait exigé d'inventer de nouvelles questions de toutes pièces, hors du périmètre d'une correction de contenu existant.

---

## Ce que la seconde passe a ajouté

**Rien : la seconde passe n'a pas eu lieu.** La session a été interrompue pendant la première lecture, au niveau de la leçon 05 du cahier d'origine. Les constats ci-dessus proviennent tous d'une lecture unique, ce qui veut dire, d'expérience, qu'il en reste. Les zones les plus à risque, parce que lues en fin de parcours ou pas du tout :
- `gastronomie-3.ts` à partir de la ligne 440 environ (métiers de la restauration, histoire du repas, terroirs, alimentation de demain) : lue une fois, vite ;
- les leçons `06.json` à `11.json` du cahier d'origine : **non lues**. Elles portent sur la viande et la charcuterie, les produits de la mer, le potager, les épices, les eaux-de-vie et la conservation — c'est-à-dire précisément les sujets où j'ai trouvé le plus de problèmes de cahiers des charges ailleurs (jambon de Bayonne, cognac). À relire en priorité ;
- les vérifications en ligne prévues n'ont pas pu être faites : décret de 1993, cahier des charges du jambon de Bayonne, aire du cognac, nombre de conservatoires botaniques nationaux (`gastronomie-2.ts:337` annonce « onze », un chiffre qui me paraît avoir évolué depuis — **à vérifier**), obligation « service compris » depuis 1987 (`gastronomie.ts:263`), part de la production mondiale gaspillée.

## Ce qui est sain

Les cours sont, dans l'ensemble, d'une qualité nettement supérieure aux questions : ils enseignent réellement, ils nomment leurs incertitudes et ils démontent les légendes au lieu de les colporter — le mythe Catherine de Médicis, le « bystro » des cosaques, l'origine napoléonienne de la baguette, la feijoada des esclaves, le poison échangé entre verres au moment de trinquer, la saisie qui « emprisonne les jus », l'invention de la bulle par Dom Pérignon, les traditions régionales inventées au XIXe siècle. Le cahier d'origine (`heritage/`) est solide de bout en bout : dates justes, sources citées, formulations prudentes là où l'histoire l'est. Les notions `ga2-epices`, `ga2-legumes-fruits`, `ga2-cuisine-technique-froid`, `ga2-securite-alimentaire` et `ga3-cuisines-ameriques` m'ont paru particulièrement bien tenues, questions comprises. Le problème du domaine n'est pas l'ignorance : c'est la duplication industrielle du troisième lot, et une poignée d'erreurs réglementaires qui se recopient d'un fichier à l'autre.

---

# Constats ajoutés à la reprise (relecteur 2)

## Leçon 06 — « La viande et la charcuterie » (`heritage/.../lecons/gastronomie/06.json`)
5 sections, 5 questions de quiz. Leçon globalement solide (myoglobine, collagène/gélatine, osmose du sel, nitrites) ; quatre réserves.

### [MOYEN] ✅ « L'appellation charcuterie reste réservée aux préparations de porc » — dit deux fois, et faux
- **Où** : `lecons/gastronomie/06.json`, section « La charcuterie, un art né du porc », et **la même affirmation répétée** dans l'explication de la question « D'où vient le mot charcuterie ? ».
- **Texte** : (section) « En France, l'appellation charcuterie reste réservée aux préparations de porc, animal dont on a longtemps dit que tout se mange. » — (quiz) « En France, la réglementation réserve encore aujourd'hui le mot aux préparations à base de porc. »
- **Problème** : deux défauts en un. (a) **Redite** : le même fait énoncé deux fois dans la même leçon, à deux écrans d'écart, sans rien ajouter. (b) **Erreur de fait** : aucune réglementation ne réserve le mot « charcuterie » au porc. Le Code des usages de la charcuterie, de la salaison et des conserves de viandes couvre explicitement d'autres espèces (boudin blanc de volaille, rillettes d'oie, terrines de gibier, saucisses de bœuf) ; la leçon elle-même se contredit deux phrases plus loin en rangeant « terrines » et « pâtés » dans la charcuterie sans restriction d'espèce, et la leçon 06 cite ailleurs les « viandes noires du gibier ». Le porc est l'espèce **dominante**, pas une obligation.
- **Correction proposée** : garder l'énoncé une seule fois, dans la section, sous la forme « En France, la charcuterie est très majoritairement une affaire de porc — animal dont on a longtemps dit que tout se mange — même si le boudin blanc de volaille, les rillettes d'oie ou les terrines de gibier en relèvent aussi. » Supprimer la dernière phrase de l'explication du quiz.
- **Fait** : Retiré la redite et corrigé l'erreur de fait dans `lecons/gastronomie/06.json` : la section dit maintenant que la charcuterie est « très majoritairement » une affaire de porc, avec les contre-exemples (boudin blanc de volaille, rillettes d'oie, terrines de gibier) ; la phrase en trop a été supprimée de l'explication du quiz.

### [MOYEN] ✅ « Seule volaille au monde à détenir une AOC » : la dinde de Bresse en a une aussi
- **Où** : `lecons/gastronomie/06.json`, section « Volailles, agneaux et gibiers » **et** explication de la question « Quelle volaille bénéficie d'une appellation d'origine contrôlée depuis 1957 ? ».
- **Texte** : « La volaille de Bresse est la seule au monde à bénéficier d'une appellation d'origine contrôlée » / « reste la seule volaille au monde à en détenir une ».
- **Problème** : la **Dinde de Bresse** fait l'objet d'une AOC distincte (reconnue en 1976), et la « Volaille de Bresse » de 1957 couvre poulet, poularde et chapon. La formule absolue est donc inexacte, et l'apprenant qui rencontrerait ailleurs la dinde de Bresse y verrait une contradiction. Le fait remarquable — l'unique **filière** avicole française sous AOC — est vrai ; la formulation absolue ne l'est pas.
- **Correction proposée** : « La Bresse est le seul terroir avicole au monde protégé par une appellation d'origine : la volaille de Bresse — poulet, poularde et chapon — l'a obtenue le 1er août 1957, la dinde de Bresse la sienne en 1976. »
- **Note** : le fait est répété dans les deux blocs (section + explication), même redondance que ci-dessus.
- **Fait** : Corrigé la section et l'explication du quiz de `06.json` : la Bresse est présentée comme le seul terroir avicole protégé par une appellation d'origine, avec la volaille (1957) et la dinde (1976) distinguées.

### [MOYEN] ✅ Les 14,5 % de gaz à effet de serre de l'élevage : chiffre daté, donné sans date
- **Où** : `lecons/gastronomie/06.json`, section « Un aliment, des controverses », et son encadré « La viande en chiffres ».
- **Texte** : « la FAO estime que l'élevage est responsable d'environ quatorze et demi pour cent des émissions mondiales de gaz à effet de serre » ; encadré : « 14,5 % — part de l'élevage dans les gaz à effet de serre (FAO) ».
- **Problème** : ce chiffre est celui du rapport *Tackling Climate Change through Livestock* (FAO, 2013, données 2005). La FAO l'a révisé depuis (*Pathways towards lower emissions*, 2023) à environ 12 % des émissions anthropiques, avec une méthode et une année de référence différentes. Exactement le cas visé par la consigne : un chiffre exact à sa date, présenté sans sa date, donc trompeur aujourd'hui. Même remarque, plus légère, pour « trois cent trente millions de tonnes en 2018 » — celui-là au moins est daté.
- **Correction proposée** : « la FAO estimait en 2013 que l'élevage était responsable d'environ quatorze et demi pour cent des émissions mondiales de gaz à effet de serre ; sa réestimation de 2023 les situe autour de douze pour cent. » Et dans l'encadré : « 14,5 % (FAO 2013) ».
- **Fait** : Daté le chiffre FAO 2013 dans le texte et l'encadré de `06.json`, et ajouté la réestimation FAO 2023 (~12 %).

### [MINEUR] ✅ Le plafond de charcuterie ne correspond pas à la recommandation qu'il cite
- **Où** : `lecons/gastronomie/06.json`, encadré « La viande en chiffres ».
- **Texte** : « 25 g — charcuterie par jour, plafond recommandé ».
- **Problème** : la recommandation française (PNNS / Santé publique France) est formulée en **150 g par semaine**, soit un peu plus de 21 g par jour. Le voisin immédiat de l'encadré, « 500 g de viande rouge par semaine », est lui exprimé à la bonne échelle et avec le bon chiffre. Convertir l'une en journalier et pas l'autre, en arrondissant vers le haut, brouille un repère que l'apprenant est censé retenir tel quel.
- **Correction proposée** : « 150 g — charcuterie par semaine, plafond recommandé », pour rester homogène avec la ligne précédente.
- **Fait** : Remplacé « 25 g — charcuterie par jour » par « 150 g — charcuterie par semaine » dans l'encadré de `06.json`, cohérent avec la leçon 11.

### [MINEUR] ✅ L'œuf qui flotte dans la saumure romaine, donné comme un fait
- **Où** : `lecons/gastronomie/06.json`, section « Le sel, la fumée et le temps ».
- **Texte** : « Les Romains vérifiaient déjà la concentration de leurs saumures en y faisant flotter un œuf. »
- **Problème** : le test de l'œuf est un procédé de saloir bien réel, mais son attribution aux Romains relève de l'anecdote de manuel, sans source ancienne établie (ni Caton ni Columelle, qui décrivent pourtant la salaison, ne le mentionnent). Dans une leçon qui s'applique par ailleurs à distinguer ce qui est attesté de ce qui ne l'est pas, l'assertion sèche détonne.
- **Correction proposée** : « Le test de l'œuf — il flotte quand la saumure est assez concentrée — est resté longtemps le seul instrument de mesure du saloir. » (sans attribution romaine)
- **Fait** : Retiré l'attribution romaine dans `06.json` : « Le test de l'œuf […] est resté longtemps le seul instrument de mesure du saloir ».

## Leçon 07 — « Les poissons, les coquillages et les crustacés » (`heritage/.../lecons/gastronomie/07.json`)
5 sections, 5 questions de quiz. Très bonne leçon sur le fond : l'huître portugaise, le moratoire de 1992, l'astaxanthine libérée de sa protéine à la cuisson, le démontage de la règle des mois en R. Trois réserves, dont une d'éditorialisation.

### [MOYEN] ✅ L'encadré « La pression sur la ressource » n'a rien à voir avec la pression sur la ressource
- **Où** : `lecons/gastronomie/07.json`, section « Surpêche, quotas et aquaculture », visuel de type `chiffres`.
- **Texte** : titre « La pression sur la ressource » ; items : « 1992 — moratoire canadien sur la morue de Terre-Neuve », « **100 000 t — huîtres produites chaque année en France** », « **90 % — part française dans la production européenne d'huîtres** », « **3-4 ans — durée d'élevage d'une huître avant la vente** ».
- **Problème** : trois items sur quatre sont des chiffres d'**ostréiculture**, qui relèvent de la section précédente (« L'huître, une aventure française ») où ils sont déjà tous énoncés dans le texte — l'encadré est donc à la fois mal placé et purement redondant. Sous un titre qui annonce la pression sur la ressource, il ne donne aucun chiffre de pression (part des stocks surexploités, volume des prises accessoires, tonnage des captures mondiales), alors que le texte de la section en évoque plusieurs sans les chiffrer. L'apprenant qui mémorise l'encadré retient trois chiffres d'élevage sous une étiquette de surpêche.
- **Correction proposée** : déplacer les trois items « huîtres » dans un encadré de la section « L'huître, une aventure française », et remplir celui-ci avec les chiffres de sa propre section, par exemple : « 1992 — moratoire canadien sur la morue », « ~35 % — part des stocks marins surexploités (FAO, *SOFIA* 2024) », « > 50 % — part de l'aquaculture dans les animaux aquatiques consommés », « 5 siècles — durée d'exploitation du stock de Terre-Neuve avant son effondrement ».
- **Fait** : Déplacé les trois chiffres d'ostréiculture dans un nouvel encadré de la section « L'huître, une aventure française » (`07.json`), et rempli l'encadré « La pression sur la ressource » avec de vrais chiffres de surpêche (stocks surexploités, part de l'aquaculture, durée d'exploitation du stock de Terre-Neuve).

### [MOYEN] ✅ La frise affirme ce que le texte présente prudemment comme une légende
- **Où** : `lecons/gastronomie/07.json`, section « L'huître, une aventure française » — texte contre visuel de type `frise`.
- **Texte** : (texte) « Le relais est pris par une huître creuse dite portugaise, dont **la légende veut** qu'un navire, le Morlaisien, ait déversé sa cargaison dans l'estuaire de la Gironde le 14 mai 1868. » — (frise, entrée « 1868 ») « **Arrivée de l'huître portugaise** — Une cargaison déversée dans la Gironde ensemence l'estuaire. »
- **Problème** : le texte prend soin de signaler que le récit du *Morlaisien* est une tradition, et la frise le rétablit comme un fait daté. C'est le visuel que l'apprenant regarde en premier et retient le mieux ; la prudence de la rédaction est annulée par sa propre illustration. Le domaine est précisément celui que la consigne signale comme propice aux légendes présentées comme des faits — et cette leçon fait bien le travail dans son texte.
- **Correction proposée** : dans la frise, « 1868 — L'huître portugaise s'installe en Gironde », texte « La tradition attribue son arrivée à une cargaison déversée par un navire dérouté. »
- **Fait** : Réécrit l'entrée « 1868 » de la frise de `07.json` : « L'huître portugaise s'installe en Gironde » / « La tradition attribue son arrivée à une cargaison déversée par un navire dérouté ».

### [MINEUR] ✅ La Grande Pêche « jusqu'au milieu du XXe siècle », alors que la même leçon la fait durer jusqu'en 1992
- **Où** : `lecons/gastronomie/07.json`, section « Une histoire de conserves et de carêmes », contre la section « Surpêche, quotas et aquaculture » et l'explication du quiz sur Terre-Neuve.
- **Texte** : « ces campagnes de plusieurs mois, dites de la Grande Pêche, ont duré **jusqu'au milieu du XXe siècle** » — contre « le stock, **exploité depuis cinq siècles**, s'est effondré » (moratoire de 1992) et « Exploité depuis le XVIe siècle par les pêcheurs européens **puis par une flotte industrielle** ».
- **Problème** : la borne « milieu du XXe siècle » vaut pour la Grande Pêche **à la voile et à la dorie**, qui s'éteint dans les années 1930-1950 ; la pêche française à la morue de Terre-Neuve, elle, se poursuit au chalutier jusqu'aux moratoires des années 1990. Le lecteur qui enchaîne les deux sections comprend que la pêche s'arrête en 1950, puis qu'un stock exploité s'effondre en 1992.
- **Correction proposée** : « ces campagnes de plusieurs mois, dites de la Grande Pêche, ont duré sous leur forme traditionnelle jusqu'au milieu du XXe siècle, avant que les chalutiers industriels ne prennent le relais. »
- **Fait** : Précisé dans `07.json` : « ont duré sous leur forme traditionnelle jusqu'au milieu du XXe siècle, avant que les chalutiers industriels ne prennent le relais ».

### [MINEUR] ⏭️ Confirmation croisée : Appert est daté correctement ici, et mal ailleurs
- **Où** : `lecons/gastronomie/07.json`, section « Une histoire de conserves et de carêmes » : « L'appertisation, mise au point par Nicolas Appert **autour de 1795 et publiée en 1810** ».
- **Problème** : ce n'est pas un défaut, c'est la **preuve interne** que le constat [MOYEN] « Nicolas Appert : met au point le procédé en 1795 » relevé plus haut sur `gastronomie-3.ts:327` est bien une erreur, et non un choix éditorial du domaine : le cahier d'origine, sur le même fait, écrit la chronologie juste. La correction proposée pour `gastronomie-3.ts` peut donc être appliquée sans hésitation, en reprenant la formulation de cette leçon.
- **Fait** : Rien à corriger dans `07.json` lui-même : ce constat confirme seulement que la correction appliquée ailleurs (`gastronomie-3.ts:327`) était la bonne, ce qui a été fait.

## Leçon 08 — « Le potager, les légumes et les terroirs » (`heritage/.../lecons/gastronomie/08.json`)
5 sections, 5 questions de quiz. Excellente leçon sur le fond — le double sens du mot « légume », *Nix v. Hedden* (1893), La Quintinie, la légende des gardes de Parmentier explicitement écartée. Deux réserves, dont une qui vaut pour toute la série des leçons.

### [MOYEN] ✅ Chronologie retournée : la noix de Grenoble (1938) donnée comme ayant « suivi » la lentille du Puy (1996)
- **Où** : `lecons/gastronomie/08.json`, section « Terroirs, saisons et signes de qualité ».
- **Texte** : « La lentille verte du Puy a été le premier légume français à obtenir une appellation d'origine contrôlée, le 7 août 1996 […]. **D'autres productions ont suivi**, du piment d'Espelette à l'oignon doux des Cévennes, en passant par le muscat du Ventoux et **la noix de Grenoble, premier fruit reconnu par une appellation dès 1938**. »
- **Problème** : la phrase range parmi les productions « qui ont suivi » 1996 une appellation obtenue **cinquante-huit ans plus tôt**, et le dit dans la même incise (« dès 1938 »). L'apprenant lit une liste chronologique qui se contredit à l'intérieur d'elle-même. Le piment d'Espelette (2000) et l'oignon doux des Cévennes (2003) ont bien suivi ; la noix de Grenoble a précédé, et c'est précisément ce qui la rend citable.
- **Correction proposée** : « […] le 7 août 1996 — bien après les fruits, la noix de Grenoble ayant ouvert la voie dès 1938. D'autres légumes ont suivi, du piment d'Espelette à l'oignon doux des Cévennes. »
- **Fait** : Réécrit le paragraphe de `08.json` : la lentille du Puy (1996) est maintenant présentée comme postérieure à la noix de Grenoble (1938), et les légumes qui ont suivi (piment d'Espelette, oignon doux des Cévennes) sont séparés des fruits.

### [MOYEN] ✅ Les explications de quiz recopient le texte de la section au lieu d'y ajouter
- **Où** : `lecons/gastronomie/08.json`, et le même procédé dans `06.json` et `07.json` — donc probablement dans toute la série des leçons du cahier d'origine.
- **Texte** : (section « Des légumes venus d'ailleurs ») « […] elle est réservée au bétail jusqu'à ce qu'Antoine Parmentier, **qui l'avait découverte comme prisonnier en Prusse pendant la guerre de Sept Ans, obtienne en 1772 que la faculté de médecine de Paris la déclare propre à la consommation humaine** » — (explication du quiz sur Parmentier) « Parmentier, **qui l'avait découverte comme prisonnier en Prusse pendant la guerre de Sept Ans, obtient en 1772 que la faculté de médecine de Paris la déclare propre à la consommation humaine.** » Et encore : (section) « **Sur les plateaux du Velay, entre six cents et mille deux cents mètres** d'altitude, des vents secs stressent la plante et **donnent des graines à peau fine qui cuisent vite sans se défaire** » — (explication du quiz sur la lentille) « **Elle pousse sur les plateaux du Velay, entre six cents et mille deux cents mètres**, où des vents secs **donnent des graines à peau fine qui cuisent vite sans se défaire.** »
- **Problème** : quatre des cinq explications de cette leçon sont la section réécrite au verbe près, phrase après phrase, dans le même ordre. La consigne demande qu'une explication « apprenne quelque chose de plus que la réponse » ; ici elle n'apprend rien de plus que le paragraphe lu deux écrans plus haut. Les rares explications qui font autre chose montrent ce qu'on perd : celle du Potager du roi ajoute le Nôtre et Olivier de Serres pour dire **pourquoi les distracteurs sont faux**, ce qui est exactement l'usage utile de l'espace.
- **Correction proposée** : réserver l'explication à ce que la section ne dit pas — pourquoi les autres réponses sont fausses, une précision chiffrée, une conséquence. Pour Parmentier : « Il n'a ni rapporté la plante — elle était en Europe depuis le XVIe siècle — ni sélectionné de variétés : son apport est réglementaire et publicitaire. La culture en buttes lui est parfois attribuée à tort. » Pour la lentille : « Le piment d'Espelette n'obtient son AOC qu'en 2000, l'oignon doux des Cévennes en 2003 ; l'ail rose de Lautrec, lui, relève du label rouge et de l'IGP, pas d'une appellation d'origine. »
- **Fait** : Réécrit les explications des questions Parmentier et lentille du Puy dans `08.json` pour qu'elles apportent une information nouvelle (ce que Parmentier n'a pas fait ; les dates des AOC concurrentes) plutôt que de répéter la section.

### [MINEUR] ✅ « Premier légume » ou « premier légume sec » ?
- **Où** : `lecons/gastronomie/08.json`, section « Terroirs, saisons et signes de qualité » et explication du quiz correspondant (« le premier légume reconnu par l'INAO »).
- **Problème** : la formule consacrée par l'INAO et par le syndicat de l'appellation est « **premier légume sec** à obtenir une AOC ». La version courte, sans l'adjectif, est celle que retiendra l'apprenant, et elle l'expose à être contredit. Comme la leçon prend par ailleurs soin de distinguer légume et fruit, et de dater la noix de Grenoble à 1938, l'imprécision détonne dans un paragraphe entièrement consacré aux appellations.
- **Correction proposée** : « La lentille verte du Puy a été le premier légume sec français à obtenir une appellation d'origine contrôlée, le 7 août 1996 » — et la même mention dans l'explication.
- **Fait** : Ajouté « sec » dans la question et l'explication du quiz de `08.json`, et dans le texte de section.

## Leçon 09 — « Les épices, les herbes et les condiments » (`heritage/.../lecons/gastronomie/09.json`)
5 sections, 5 questions de quiz. Leçon remarquable : elle démonte explicitement la légende des épices censées masquer la viande avariée, elle distingue proprement épice, herbe et condiment, et la question sur la moutarde de Dijon est l'une des meilleures du domaine. Trois réserves.

### [MOYEN] ✅ « Un siècle plus tôt » contredit la date que la leçon vient elle-même de donner
- **Où** : `lecons/gastronomie/09.json`, explication de la question « Qui a rendu possible la culture de la vanille hors du Mexique en 1841 ? », contre la section « La route des épices ».
- **Texte** : (explication) « Pierre Poivre, lui, avait transplanté **un siècle plus tôt** le girofle et la muscade. » — (section) « **dans les années 1770**, l'intendant français Pierre Poivre fait transplanter des pieds de girofliers et de muscadiers à l'île de France ».
- **Problème** : entre les années 1770 et 1841 il y a **soixante-dix ans**, pas cent. L'explication d'une question sur une date invente donc un écart chronologique que la leçon dément trois écrans plus haut. Sur un point où le distracteur « Le botaniste Pierre Poivre » est précisément là pour piéger l'apprenant sur la chronologie, l'imprécision est mal placée.
- **Correction proposée** : « Pierre Poivre, lui, avait transplanté girofliers et muscadiers à l'île de France dans les années 1770, soit une génération plus tôt. »
- **Note** : Poivre était intendant de l'Isle de France, pas botaniste au sens strict — le distracteur qui le qualifie de « botaniste » est donc doublement faux, ce qui est acceptable pour un distracteur, mais l'explication gagnerait à le dire.
- **Fait** : Corrigé l'explication de `09.json` : « transplanté girofliers et muscadiers à l'île de France dans les années 1770, soit une génération plus tôt ».

### [MOYEN] ✅ Les clous de girofle de Mésopotamie : une trouvaille archéologique contestée, donnée comme preuve
- **Où** : `lecons/gastronomie/09.json`, section « Trois mots qu'on confond », dernière phrase.
- **Texte** : « **Un signe archéologique donne la mesure de leur ancienneté** : des clous de girofle, originaires des seules îles Moluques, ont été retrouvés en Mésopotamie dans un contexte daté d'environ mille sept cents ans avant notre ère. »
- **Problème** : il s'agit des « clous de girofle de Terqa », découverte de 1978 devenue un classique de la vulgarisation — et **largement remise en cause depuis** par les archéobotanistes, qui n'ont jamais pu vérifier l'identification (échantillon non conservé, détermination faite à l'œil, aucun autre indice de girofle en Asie occidentale avant l'époque romaine). C'est aujourd'hui l'exemple type de la donnée archéologique que la littérature spécialisée range parmi les identifications douteuses. La leçon en fait au contraire son argument d'autorité (« un signe archéologique donne la mesure »), et c'est exactement le travers — la légende présentée comme un fait — que cette leçon combat par ailleurs très bien deux sections plus loin.
- **Correction proposée** : soit supprimer la phrase, soit la donner pour ce qu'elle est : « On a longtemps cité des clous de girofle qui auraient été retrouvés en Mésopotamie vers mille sept cents ans avant notre ère ; l'identification est aujourd'hui contestée, mais le commerce des épices d'Asie vers la Méditerranée est attesté au plus tard à l'époque romaine. »
- **Fait** : Réécrit la phrase de `09.json` pour présenter la découverte de Terqa comme contestée, plutôt que comme une preuve établie.

### [MINEUR] ✅ L'encadré « Deux épices de luxe » en contient trois, dont une qui n'est pas de luxe
- **Où** : `lecons/gastronomie/09.json`, section « La vanille et les condiments de la table française », visuel de type `chiffres`.
- **Texte** : titre « Deux épices de luxe » ; items : safran (150 000 fleurs), vanille (1841), vanille (8 mois d'affinage), **« 1912 — création de l'échelle de Scoville »**.
- **Problème** : le quatrième item relève du piment, qui n'est ni la troisième ni une épice de luxe, et il appartient à la section précédente (« Ce qui pique et ce qui parfume »). Par ailleurs le chiffre « 8 mois » n'apparaît nulle part dans le texte, qui dit seulement « plusieurs mois d'affinage en malles » : l'encadré introduit une précision que la leçon ne soutient pas, et c'est le chiffre que l'apprenant retiendra.
- **Correction proposée** : déplacer l'item Scoville dans un encadré de la section sur le piquant, et aligner le texte sur l'encadré (« huit mois d'affinage en malles ») ou l'inverse.
- **Fait** : Déplacé l'item Scoville dans un nouvel encadré de la section sur le piquant (`09.json`), et aligné le texte sur « huit mois d'affinage » pour la vanille.

### [MINEUR] ⏭️ Confirmation : les explications recopient encore les sections
- Le procédé signalé sur la leçon 08 se retrouve ici presque à l'identique — l'explication du safran reprend mot pour mot « la crocine pour la couleur jaune or, la picrocrocine pour l'amertume et le safranal pour le parfum » et le compte des cent cinquante mille fleurs ; celle du piment reprend la liposolubilité de la capsaïcine et l'échelle de Scoville. Le constat [MOYEN] de la leçon 08 vaut donc pour la série entière : ce n'est pas un accident de rédaction, c'est la méthode.
- **Fait** : Constat informatif confirmant le même défaut que la leçon 08 ; corriger toutes les explications recyclées de la série dépasserait le périmètre d'un MINEUR isolé, donc non traité au-delà des cas déjà cités ailleurs.

## Leçon 10 — « Bulles et eaux-de-vie : champagne, cognac, whisky » (`heritage/.../lecons/gastronomie/10.json`)
5 sections, 5 questions de quiz. Leçon très fiable : Dom Pérignon remis à sa place, le remuage rendu à Clicquot, l'absinthe de 1915 à 2011, les mentions VS/VSOP/XO justes (le seuil de dix ans du XO est bien la règle depuis 2018), la « part des anges » et le champignon des chais. Deux réserves, plus un arbitrage utile pour un constat laissé en suspens.

### [MOYEN] ✅ La Chartreuse : le manuscrit est de 1605, pas « du début du XVIIIe siècle »
- **Où** : `lecons/gastronomie/10.json`, section « Apéritifs, liqueurs et modération ».
- **Texte** : « la Chartreuse, élaborée par les moines du massif du même nom **à partir d'un manuscrit du début du XVIIIe siècle**, tire sa couleur de plantes macérées ».
- **Problème** : erreur d'un siècle. Le manuscrit de l'« élixir de longue vie » est remis aux chartreux en **1605** — début du XVII<sup>e</sup> siècle — par le maréchal d'Estrées ; c'est son **exploitation** qui est tardive, l'Élixir végétal étant mis au point en 1737 et la liqueur verte en 1764. La leçon fusionne les deux dates en une seule et fausse. Dans une section qui rattache les liqueurs à des « officines monastiques », l'ancienneté du manuscrit est précisément le fait à retenir.
- **Correction proposée** : « la Chartreuse, que les moines du massif du même nom élaborent depuis 1737 à partir d'un manuscrit reçu en 1605, tire sa couleur de plantes macérées ».
- **Fait** : Corrigé dans `10.json` : « élaborée […] depuis 1737 à partir d'un manuscrit reçu en 1605 ».

### [MINEUR] ✅ Vital du Four n'était pas prieur
- **Où** : `lecons/gastronomie/10.json`, section « Cognac, armagnac et calvados ».
- **Texte** : « un texte de 1310 attribué **au prieur Vital du Four** énumère déjà les vertus de cette eau ardente ».
- **Problème** : Vital du Four était un théologien franciscain devenu **cardinal**, et le titre de prieur ne lui revient pas. Le reste est correct — le traité médical de 1310 et son attribution, prudemment marquée par « attribué à », font bien de l'armagnac la plus ancienne eau-de-vie française documentée.
- **Correction proposée** : « un texte médical de 1310 attribué au cardinal Vital du Four ».
- **Fait** : Corrigé en « cardinal Vital du Four » dans `10.json`.

### [MINEUR] ✅ Le tableau comparatif date les appellations d'un côté seulement
- **Où** : `lecons/gastronomie/10.json`, section « Cognac, armagnac et calvados », visuel de type `comparaison`.
- **Texte** : colonne Cognac, cinquième point : « Aire délimitée en 1909, AOC en 1936 » — colonne Armagnac, cinquième point : « Mentionné dès 1310 dans un texte médical ».
- **Problème** : un tableau en vis-à-vis se lit ligne par ligne, et cette ligne-là oppose un statut juridique à une date littéraire. L'apprenant en déduit naturellement que l'armagnac n'a pas d'appellation, alors que son aire a été délimitée la **même année 1909** et qu'il est AOC depuis **1936**, comme le cognac. C'est le seul point du tableau où les deux colonnes ne comparent pas la même chose.
- **Correction proposée** : colonne Armagnac, « Aire délimitée en 1909, AOC en 1936 » — et déplacer la mention de 1310 en note sous le tableau, où elle rend mieux service.
- **Fait** : Remplacé la ligne Armagnac du tableau comparatif de `10.json` par « Aire délimitée en 1909, AOC en 1936 », symétrique de la ligne Cognac (le fait de 1310 reste dans le texte courant).

### [MOYEN → tranché] ✅ L'aire du cognac : cette leçon donne raison au constat laissé en suspens
- **Rappel du constat** : plus haut, `cours/gastronomie.ts`, `ga3-spiritueux`, section « Protéger un nom » : « Le cognac ne peut être produit **qu'en Charente** ». Le prédécesseur le signalait comme probablement faux, sans avoir pu vérifier.
- **Ce que dit le cahier d'origine** : `lecons/gastronomie/10.json` écrit « Le cognac, **né plus tard dans les Charentes** » et « Le cognac, produit **dans les Charentes** » (explication du quiz) — au pluriel, les deux fois.
- **Conclusion** : le domaine se contredit lui-même, et c'est le cahier d'origine qui a raison : l'aire de l'AOC Cognac couvre la Charente **et** la Charente-Maritime, plus quelques communes de Dordogne et des Deux-Sèvres. Le constat [MOYEN] du prédécesseur est confirmé par une source interne ; sa correction peut être appliquée.
- **Fait** : Confirme la correction déjà appliquée au cours `ga3-spiritueux` (aire à quatre départements) ; rien à changer dans `10.json`, qui était déjà juste.

## Leçon 11 — « Conserver les aliments, du saloir au Nutri-Score » (`heritage/.../lecons/gastronomie/11.json`)
5 sections, 5 questions de quiz. La dernière leçon du cahier, et l'une des plus justes : Appert daté correctement (1795 → 1810), Pasteur, Carré, Tellier, Birdseye, la distinction DLC/DDM parfaitement expliquée, le Nutri-Score et NOVA soigneusement séparés. Trois réserves, dont une contradiction avec la leçon 06.

### [MOYEN] ✅ Le plafond de charcuterie contredit celui de la leçon 06, dans le même cahier
- **Où** : `lecons/gastronomie/11.json`, section « Bien manger : repères publics… » et son encadré « Quelques repères officiels » — contre `lecons/gastronomie/06.json`, encadré « La viande en chiffres ».
- **Texte** : (leçon 11) « pas plus de cinq cents grammes de viande rouge et **cent cinquante grammes de charcuterie par semaine** » ; encadré : « **150 g** — charcuterie par semaine, plafond du PNNS ». — (leçon 06) encadré : « **25 g** — charcuterie **par jour**, plafond recommandé ».
- **Problème** : 25 g par jour font 175 g par semaine ; le cahier d'origine donne donc deux plafonds différents pour le même repère du PNNS, dans deux leçons du même domaine, et l'une des deux valeurs n'existe dans aucun texte officiel. La leçon 11 a raison — la recommandation de Santé publique France est bien formulée en 150 g par semaine, exactement comme les 500 g de viande rouge qui l'accompagnent dans les deux leçons. Le constat [MINEUR] posé plus haut sur la leçon 06 est donc confirmé par une source interne, et il devient une contradiction, pas seulement une conversion malheureuse.
- **Correction proposée** : dans `06.json`, remplacer l'item par « **150 g** — charcuterie par semaine, plafond recommandé », identique à la leçon 11.
- **Fait** : Résolu en corrigeant `06.json` pour qu'il reprenne le même repère que `11.json` (150 g/semaine, déjà correct dans cette leçon).

### [MOYEN] ✅ Quatre conditions annoncées, cinq barrières énumérées : l'acidité tombe du raisonnement
- **Où** : `lecons/gastronomie/11.json`, section « Pourquoi les aliments s'abîment », et son tableau « Cinq façons d'empêcher les microbes de vivre ».
- **Texte** : « Pour se développer, les micro-organismes ont besoin de **quatre conditions** : de la nourriture, de l'eau disponible, une température favorable et, pour beaucoup d'entre eux, de l'oxygène. **Toutes les techniques de conservation reviennent à leur retirer au moins l'une de ces conditions.** » — puis, dans la phrase suivante, cinq familles de techniques, dont « **acidifier le milieu par la fermentation ou le vinaigre** ». Le tableau reprend les cinq, avec une colonne intitulée « **Ce qu'on leur retire** » et une ligne « Un pH neutre ».
- **Problème** : la charnière logique de toute la section ne tient pas. L'acidification ne retire aucune des quatre conditions énoncées — elle en supprime une cinquième, le pH favorable, que la liste a oubliée. Deux lignes du tableau ne sont d'ailleurs pas des conditions de développement : « La vie elle-même » (ce n'est pas ce dont le microbe a besoin, c'est le microbe) et « La chaleur » (la condition énoncée est « une température favorable », or la congélation ne retire pas de la chaleur à un microbe, elle le place hors de sa plage). L'apprenant à qui l'on fournit une grille explicative de cinq cases dont trois ne rentrent pas dans le principe énoncé juste avant retient une règle qu'il ne peut pas appliquer.
- **Correction proposée** : « Pour se développer, les micro-organismes ont besoin de **cinq conditions** : de la nourriture, de l'eau disponible, une température favorable, un milieu peu acide et, pour beaucoup d'entre eux, de l'oxygène. » Et renommer les deux lignes du tableau : « Une température favorable » (Réfrigération, congélation) et « Leur survie » (Pasteurisation, stérilisation).
- **Fait** : Corrigé `11.json` : « cinq conditions » (ajout d'« un milieu peu acide »), et renommé les lignes du tableau « La chaleur » → « Une température favorable » et « La vie elle-même » → « Leur survie ».

### [MINEUR] ✅ « L'effet de remparts » n'est pas le terme des technologues
- **Où** : `lecons/gastronomie/11.json`, section « Pourquoi les aliments s'abîment », dernière phrase.
- **Texte** : « La plupart des produits du commerce combinent plusieurs de ces barrières, principe que **les technologues appellent l'effet de remparts**. »
- **Problème** : la phrase donne un terme de métier, et se trompe de terme. Le concept — combiner plusieurs facteurs sublétaux plutôt qu'un seul — s'appelle en français **effet barrière** ou **technologie des obstacles** (*hurdle technology*, d'après Lothar Leistner). « Effet de remparts » n'est employé nulle part dans la littérature, et la phrase le présente pourtant comme un vocabulaire spécialisé à retenir : c'est le genre de faux mot savant qu'un apprenant réemploie ensuite avec assurance. La métaphore de la barrière est d'ailleurs déjà dans la phrase elle-même (« plusieurs de ces barrières »).
- **Correction proposée** : « […] combinent plusieurs de ces barrières, principe que les technologues appellent l'effet barrière, ou technologie des obstacles. »
- **Fait** : Corrigé en « l'effet barrière, ou technologie des obstacles » dans `11.json`.

### [MINEUR] ⏭️ Confirmation, troisième source interne : Appert commence en 1795 et publie en 1810
- **Où** : `lecons/gastronomie/11.json`, section « Appert, Pasteur et la boîte de conserve » (« **expérimente à partir de 1795** […] **publie son procédé en 1810** ») et sa frise, qui sépare explicitement les deux dates : « 1795 — **Appert commence ses essais** » / « 1810 — **Publication et boîte en fer-blanc** ».
- **Problème** : aucun ici. C'est la troisième source du domaine — après la leçon 07 et le corps de cette leçon — à donner la chronologie juste, contre `gastronomie-3.ts:327` qui écrit « il met au point le procédé en 1795 ». Le constat [MOYEN] correspondant est établi sans réserve, et la frise de cette leçon fournit même la formulation de remplacement.
- **Fait** : Rien à corriger dans `11.json` : constat confirmant la correction déjà appliquée à `gastronomie-3.ts:327`.

---

# Arbitrage des constats laissés « à vérifier » (vérification en ligne, sources officielles)

Le prédécesseur n'avait pu vérifier aucun de ses constats de fait. Tous ont été tranchés sur pièces (Légifrance, INAO, cahiers des charges, FAO/UNEP, Guide Michelin, CNIEL). Verdict point par point ; **six constats sont confirmés tels quels, quatre le sont mais avec une correction proposée à réécrire, deux se révèlent plus graves que prévu, un est infirmé**.

### [GRAVE — CONFIRMÉ, correction à réécrire] Le décret de 1993 : la confusion est réelle, mais elle porte sur l'article, pas sur le texte
- **Vérification** : décret n° 93-1074 du 13 septembre 1993 (Légifrance). Il couvre **trois** dénominations. **Article 1er — « pain maison »** : « Peuvent seuls être mis en vente ou vendus sous la dénomination de "pain maison" […] les pains **entièrement pétris, façonnés et cuits sur leur lieu de vente au consommateur final** ». **Article 2 — « pain de tradition française »** : aucun traitement de surgélation, aucun additif, farine de blé, eau potable, sel de cuisine, levure de panification et/ou levain (tolérances : fèves 2 %, soja 0,5 %, malt de blé 0,3 %). **Article 3** : mention « au levain ».
- **Ce qui est donc établi** : l'obligation de pétrir, façonner et cuire sur place existe bien dans **ce décret-là**, mais elle définit le **pain maison** (art. 1er) et **non** le pain de tradition française (art. 2). Un pain de tradition française peut légalement être cuit ailleurs qu'au point de vente. Le prédécesseur avait donc raison sur le fond et se trompait sur un détail : il attribuait l'obligation à « une autre mention du même champ réglementaire », c'est plus simple que cela — c'est l'article précédent du même décret.
- **Et la protection du mot « boulanger » : confirmée à 100 %.** Loi n° 98-405 du 25 mai 1998, article unique créant les art. L. 121-80 à L. 121-82 du code de la consommation : réservée au professionnel qui assure lui-même « le pétrissage de la pâte, sa fermentation et sa mise en forme ainsi que la cuisson du pain sur le lieu de vente », sans congélation ni surgélation à aucun stade. Elle fait suite à l'annulation par le Conseil d'État, le 29 décembre 1997, des dispositions de l'arrêté du 12 décembre 1995. **Rien à voir avec 1993.** L'affirmation « Le même texte protège l'appellation de boulanger » (heritage Q37, leçon 03) est fausse.
- **Correction proposée, révisée** — pour `prisma/seed/culture-g/gastronomie.ts:141` : « Il limite sa composition à la farine de blé, l'eau, le sel et la levure ou le levain, et interdit tout additif comme toute surgélation. L'obligation de pétrir, façonner et cuire sur place, elle, définit dans le même décret le "pain maison" ; la protection du mot boulanger vient d'une loi de 1998. » Pour heritage Q37 et la leçon 03 : retirer « pétris, façonnés et cuits sur le lieu de vente » de la définition du pain de tradition, et supprimer la phrase sur l'appellation de boulanger.

### [MOYEN → CONFIRMÉ] ✅ Jambon de Bayonne : c'est bien le bassin de l'Adour, pas Salies-de-Béarn
- **Vérification** : cahier des charges IGP Jambon de Bayonne (INAO, version 2018), § 5.1.3 : « **Le sel de salage provient exclusivement des salines du Bassin de l'Adour**, notamment des salines de Bayonne-Mouguerre et Salies de Béarn. Il s'agit de sel gemme, sel naturel, cristallisé dans le sous-sol du Bassin de l'Adour. » Définition du produit, § 2 : « une cuisse de porc salée au sel des salines du Bassin de l'Adour ». § 5.5 : « Afin de garantir l'utilisation du sel des Salines du Bassin de l'Adour, l'atelier s'approvisionne exclusivement de ce type de sel. »
- **Verdict** : le constat du prédécesseur est exact, et sa correction proposée est la bonne — le cahier des charges nomme le **bassin**, et cite Salies-de-Béarn comme l'une des deux salines en activité, à côté de Bayonne-Mouguerre. Écrire « Le sel de Salies-de-Béarn fait partie de son cahier des charges » revient à donner comme obligation exclusive ce qui n'est qu'un exemple. Le défaut est répété **quatre fois** dans le domaine (`gastronomie-2.ts:103` et trois occurrences dans `cours/gastronomie.ts`).
- **Correction confirmée** : « Le sel des salines du bassin de l'Adour — Salies-de-Béarn, Bayonne-Mouguerre — fait partie de son cahier des charges. »
- **Fait** : Correction confirmée déjà appliquée (voir plus haut) : sel des salines du bassin de l'Adour, dans `gastronomie-2.ts:103` et le cours.

### [MOYEN → CONFIRMÉ ET AGGRAVÉ] ✅ Cognac : quatre départements, pas un, ni deux
- **Vérification** : cahier des charges AOC Cognac homologué par arrêté du 10 octobre 2022, ch. I § 1° — aire délimitée par le décret du 1<sup>er</sup> mai 1909 modifié, couvrant des communes de la **Charente**, de la **Charente-Maritime**, de la **Dordogne** (Parcoul-Chenaud, La Roche-Chalais, Saint Aulaye-Puymangou) et des **Deux-Sèvres** (dix communes, dont Mauzé-sur-le-Mignon et Beauvoir-sur-Niort).
- **Verdict** : « Le cognac ne peut être produit qu'en Charente » (`cours/gastronomie.ts`, `ga3-spiritueux`) est faux. Mais la correction proposée par le prédécesseur — « Charente et Charente-Maritime » — est **elle aussi incomplète**. Le cahier d'origine, lui, écrit correctement « dans les Charentes » (leçon 10, deux fois).
- **Correction proposée, révisée** : « Le cognac ne peut être produit que dans une aire délimitée depuis 1909, à cheval sur la Charente, la Charente-Maritime et quelques communes de Dordogne et des Deux-Sèvres, à partir de cépages autorisés, par double distillation en alambic charentais. »
- **Fait** : Appliqué la version à quatre départements dans le cours `ga3-spiritueux` (Charente, Charente-Maritime, Dordogne, Deux-Sèvres, depuis 1909).

### [MOYEN → CONFIRMÉ, chiffre de remplacement à corriger] ✅ Le tiers du gaspillage alimentaire
- **Vérification** : le « tiers » vient bien de la FAO, *Global food losses and food waste*, **2011** (« roughly one-third […] about 1.3 billion tons per year »). Il a depuis été remplacé par **deux indicateurs distincts** de l'ODD 12.3 : le **Food Loss Index** de la FAO, **≈ 13 %** (13,3 % en dernière valeur) pour les pertes de l'après-récolte jusqu'à la vente au détail exclue, et le **Food Waste Index** du PNUE, **édition 2024 (données 2022) : 1,05 milliard de tonnes, soit 19 %** des aliments disponibles au détail, en restauration et chez les ménages.
- **Verdict** : constat confirmé — chiffre de 2011 donné sans date. Mais **le prédécesseur proposait « environ 17 % » : c'est le chiffre de l'édition 2021 du Food Waste Index (931 Mt, données 2019), lui aussi périmé.** Sa correction aurait introduit une seconde donnée obsolète.
- **Correction proposée, révisée** : « Estimation de la FAO publiée en 2011, depuis remplacée par deux mesures distinctes : environ 13 % de pertes entre la récolte et la vente (FAO), et environ 19 % de gaspillage au stade de la distribution, de la restauration et des ménages (PNUE, 2024). »
- **Fait** : Appliqué la version révisée (FAO 2011 pour le tiers, 13 % FAO / 19 % PNUE 2024) dans `gastronomie-3.ts:344`.

### [MOYEN → NOUVEAU CONSTAT CONFIRMÉ] ✅ Les conservatoires botaniques nationaux : onze est périmé, il y en a douze
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:337`.
- **Vérification** : le réseau compte **douze CBN agréés** couvrant le territoire national. Le dernier, le **CBN de Normandie**, créé en 2023, a été **agréé en 2025** ; l'agrément est délivré par le ministère chargé de l'écologie (art. R. 416-1 s. du code de l'environnement), la coordination technique étant assurée par l'OFB.
- **Verdict** : le doute du prédécesseur était fondé. « Onze » était juste jusqu'en 2025 et ne l'est plus. C'est un chiffre qui bouge : il ne devrait pas être la clé d'une question de QCM.
- **Correction proposée** : porter le chiffre à douze **et** dater l'explication (« douze conservatoires agréés en 2025 »), ou mieux, reformuler la question pour qu'elle porte sur la mission des conservatoires plutôt que sur leur nombre.
- **Fait** : Corrigé `gastronomie-2.ts:337` : « Douze conservatoires agréés […] depuis 2025 ».

### [INFIRMÉ] ⏭️ « Service compris » depuis 1987 : le contenu est exact
- **Vérification** : arrêté du 27 mars 1987 relatif à l'affichage des prix dans les établissements servant des repas, denrées ou boissons à consommer sur place, art. 1<sup>er</sup> — les prix affichés sont ceux « effectivement payés par le consommateur » ; là où le service est facturé, « le prix affiché s'entend taxes et service compris », les documents portant la mention « Prix service compris » suivie du taux entre parenthèses. Modifié par l'arrêté du 29 juin 1990.
- **Verdict** : `prisma/seed/culture-g/gastronomie.ts:263` est **exact**. Rien à corriger. Le point est levé.
- **Fait** : Vérifié : le texte de `gastronomie.ts:263` est déjà exact, conformément au verdict du rapport — aucune modification nécessaire.

### [MOYEN → CONFIRMÉ] ✅ Roquefort : 1666 et 1925 sont tous deux exacts, et se concilient
- **Vérification** : le cahier des charges AOP Roquefort cite lui-même l'arrêt de 1666 — « un arrêt du Parlement de Toulouse confirme tous les privilèges royaux accordés successivement depuis Charles VI […] et concède aux habitants de Roquefort-sur-Soulzon l'exclusivité de l'affinage » — et la zone d'affinage reste « depuis l'arrêt du Parlement de Toulouse de 1666, circonscrite à la commune de Roquefort-sur-Soulzon ». La loi du **26 juillet 1925** « ayant pour but de garantir l'appellation d'origine du fromage de Roquefort » est bien la première appellation d'origine **fromagère** française.
- **Verdict et nuance à ajouter** : l'analyse du prédécesseur est validée, avec une précision qui manque à sa correction — la **loi générale** sur les appellations d'origine date de **1919**, et l'AOC au sens de l'INAO de **1935**. Il faut donc écrire « premier fromage doté d'une appellation d'origine », et non « première appellation d'origine française », qui serait faux.
- **Correction proposée, précisée** : « Son nom est protégé depuis un arrêt du Parlement de Toulouse de 1666, qui réserve son affinage à la commune de Roquefort-sur-Soulzon ; une loi du 26 juillet 1925 en fait le premier fromage français doté d'une appellation d'origine. »
- **Fait** : Appliqué la formulation précisée (« premier fromage doté d'une appellation d'origine », pas « première appellation d'origine ») dans le cours `ga3-fromages-monde`.

### [MOYEN → CONFIRMÉ] ✅ Nicolas Appert : 1795 est bien une date de début
- **Vérification** : 1810 est la date de la publication (*Le Livre de tous les ménages, ou l'Art de conserver pendant plusieurs années toutes les substances animales et végétales*, Paris, juin 1810, 6 000 exemplaires) **et** du prix de 12 000 francs, notifié le 30 janvier 1810 par le ministre de l'Intérieur Montalivet en échange de la renonciation au brevet et de l'engagement de publier. 1795 est la date de l'appel du gouvernement et le point de départ des quatorze années d'essais ; certaines sources font même remonter ses travaux à 1790.
- **Verdict** : `gastronomie-3.ts:327` — « il met au point le procédé en 1795 » — est bien une date de début présentée comme un aboutissement. Confirmé, et par trois sources internes au dépôt (leçons 07 et 11).
- **Correction confirmée** : « Confiseur français, il commence ses essais vers 1795 et publie sa méthode en 1810, année où l'État le récompense, sans qu'il en comprenne la cause. »
- **Fait** : Correction confirmée déjà appliquée à `gastronomie-3.ts:327` (essais dès 1795, publication en 1810).

### [GRAVE → CONFIRMÉ, mais la correction doit changer de nature] Les huit familles de fromages : il n'existe aucune liste canonique
- **Vérification** : **il n'existe ni classification INAO ni classification réglementaire des « familles » de fromages.** C'est une nomenclature pédagogique, et elle varie selon les sources : le **CNIEL** en retient huit — frais, croûte fleurie, croûte lavée, pressées non cuites, pressées cuites, persillées, **fondus**, chèvres et brebis — **sans pâtes filées** ; la liste concurrente la plus répandue en retient huit également mais avec **pâtes filées et fondus**, en supprimant la catégorie chèvres ; le **ministère de l'Agriculture n'en compte que six**.
- **Verdict** : le constat est confirmé — les deux listes du domaine ne coïncident pas et l'apprenant en retient deux versions — mais le diagnostic du prédécesseur (« la classification française usuelle retient les fromages fondus ») est trop assuré : il n'existe pas de « classification française usuelle » qui ferait autorité. Le vrai problème n'est donc pas que le cours ait tort, c'est que **le domaine présente comme un fait établi une nomenclature qui n'en est pas une**, et en fasse la clé d'une question de QCM.
- **Correction proposée, révisée** : aligner effectivement les deux listes sur celle du CNIEL, qui est la plus citée en France et celle de la question (donc « pâtes persillées, fromages de chèvre et fromages fondus » dans le cours) — **et ajouter dans le cours une phrase qui dit la chose** : « Ce découpage en huit familles est une convention pédagogique, pas une classification officielle : le ministère de l'Agriculture n'en distingue que six, et d'autres listes y ajoutent les pâtes filées. » Compléter aussi le tableau visuel du cours, qui n'affiche que cinq familles sur huit.

### [MOYEN → CONFIRMÉ ET AGGRAVÉ] ✅ L'arabica : ni 60 %, ni deux tiers — environ 56 %
- **Vérification** : USDA/FAS 2025-26 — arabica ≈ 98,7 millions de sacs contre robusta ≈ 75,7 sur ≈ 178,8 au total, soit **≈ 56 %**. L'Organisation internationale du café donne **55,9 %** pour l'année caféière 2022/23 et ≈ 57 % pour 2023/24, avec une **tendance à la baisse** au profit du robusta. Le chiffre proche de 60 % existe, mais il désigne autre chose : la part de l'arabica dans les **exportations de café vert** (60,2 %, en recul depuis 64,0 %).
- **Verdict** : le prédécesseur avait relevé une contradiction interne (60 % contre deux tiers) et proposé de retenir 60 % partout. **Les deux chiffres sont en réalité trop élevés**, et « les deux tiers » du cours `ga3-cafe-the` est franchement faux. Ce n'était donc pas seulement une incohérence de rédaction, c'est une erreur de fait, présente dans deux cours et dans une question (`gastronomie-3.ts:199`, dont la bonne réponse est « environ soixante pour cent »).
- **Correction proposée, révisée** : écrire partout « un peu plus de la moitié de la production mondiale, environ 56 à 57 %, une part qui recule au profit du robusta ». La question `gastronomie-3.ts:199` doit être réécrite, sa bonne réponse actuelle n'étant plus défendable face à un distracteur qui dirait « un peu plus de la moitié ».
- **Fait** : Appliqué le chiffre confirmé (56 à 57 %) partout : `gastronomie-3.ts:199`, cours `ga-boissons` et `ga3-cafe-the`.

### [MOYEN → CONFIRMÉ, chiffre exact disponible] ✅ Trois étoiles Michelin : trente et un, pas « une vingtaine »
- **Vérification** : sélection du Guide MICHELIN France & Monaco **2026** — 668 restaurants étoilés, dont **31 trois Étoiles**, 84 deux Étoiles et 553 une Étoile. Le total était déjà de 31 en 2024. Monaco est intégré à la sélection France (Le Louis XV – Alain Ducasse).
- **Verdict** : « une vingtaine » (heritage, cours « Les grands chefs… ») est faux, et l'ordre de grandeur proposé par le prédécesseur — une trentaine — est le bon.
- **Correction confirmée, précisée** : « La France et Monaco comptent une trentaine d'établissements trois étoiles — trente et un dans la sélection 2026 — sur près de sept cents tables étoilées. »
- **Fait** : Appliqué « une trentaine […] trente et un dans la sélection 2026 […] sept cents tables étoilées » dans le cours du cahier d'origine.

### [GRAVE → CONFIRMÉ, mais la correction propage un second mythe]
**Catherine de Médicis, la fourchette, et le mythe qui se cache derrière le mythe**
- **Vérification** : l'attribution à Catherine de Médicis relève bien du « mythe italien de la cuisine française », construit et diffusé au XIX<sup>e</sup> siècle. Contre-preuves : des fourchettes sont mentionnées dans les inventaires royaux français dès le **début du XIV<sup>e</sup> siècle**, attestées archéologiquement au XV<sup>e</sup>, et l'objet est bien plus ancien encore (Rome, Byzance, Italie médiévale).
- **Le point que le prédécesseur ne pouvait pas connaître** : sa correction proposée écrivait « elle met plus d'un siècle à s'imposer, **sous Henri III** puis Louis XIV ». Or **l'attribution à Henri III est, elle aussi, un mythe forgé à la fin du XIX<sup>e</sup> siècle** — et c'est même de la confusion entre la mère et le fils que naît en partie la légende. Ce qui est établi : l'usage individuel de la fourchette se diffuse dans l'aristocratie **dans les années 1570-1580**, se banalise dans les élites au **XVII<sup>e</sup> siècle**, devient l'usage de cour sous **Louis XIV** — qui mangeait pourtant volontiers avec les doigts — puis gagne la bourgeoisie au XVIII<sup>e</sup>.
- **Correction proposée, révisée** — pour `prisma/seed/culture-g/gastronomie.ts:245` : « Connue en France dès le XIV<sup>e</sup> siècle, elle ne se diffuse dans l'aristocratie qu'à la fin du XVI<sup>e</sup> et ne devient l'usage courant qu'au XVII<sup>e</sup>. Son introduction par Catherine de Médicis est une légende forgée au XIX<sup>e</sup> siècle. » **Ne pas** la remplacer par Henri III. Même vigilance pour `gastronomie-3.ts:409`, qui écrit « elle se diffuse d'Italie sous Henri III et Louis XIV ».

### [MOYEN → CONFIRMÉ ET RETOURNÉ] ✅ Le prêt-à-porter : c'est la question qui a tort, pas le cours
- **Vérification** : le calque de *ready-to-wear* et le rôle de **Jean-Claude Weill**, de retour des États-Unis, sont exacts. La date de **1949 n'est pas celle que retiennent les sources** : le terme est attesté dès **1948** (Vogue, mars 1948) et popularisé en **1950** par la campagne Publicis pour la maison Weill ; certaines sources situent l'initiative de Weill dès 1947.
- **Verdict** : le prédécesseur proposait d'aligner le cours (« années 1950 ») sur la question (« 1949 »). **C'est l'inverse qu'il faut faire** : le cours est dans le vrai, la question exige une date que rien ne soutient. Une question de QCM ne peut pas reposer sur une année isolée quand les sources en donnent trois.
- **Correction proposée, révisée** : dans `gastronomie.ts:279`, remplacer l'explication par « Le terme, calqué sur l'anglais ready-to-wear, apparaît autour de 1948-1950 et se répand grâce à Jean-Claude Weill, qui en rapporte le principe des États-Unis. » Et reformuler l'énoncé s'il demandait l'année exacte.
- **Fait** : Appliqué la correction retournée : c'est l'explication de la question `gastronomie.ts:279` qui a été réécrite, le cours `ga-mode-textile` n'a pas été touché.

### [CONFIRMÉ] ✅ Reinheitsgebot : la levure n'y figure pas
- **Vérification** : texte promulgué à Ingolstadt le **23 avril 1516** par Guillaume IV de Bavière — trois ingrédients seulement, **orge (*Gerste*), houblon (*Hopfen*), eau (*Wasser*)**. La levure en est absente : son rôle était inconnu (fermentation spontanée ou réensemencement par le fond de cuve), et elle n'a été ajoutée qu'après les travaux de Pasteur. Le texte fixait aussi des prix maximaux de vente.
- **Verdict** : le contenu du domaine sur ce point est **exact** (`gastronomie.ts:172`, `gastronomie-3.ts:156`, cours `ga3-bieres-monde`). Seul subsiste le constat de couverture : le cours `ga-boissons`, dont dépend la question `gastronomie.ts:172`, n'en dit rien.
- **Fait** : Comblé le trou de couverture signalé : le cours `ga-boissons` mentionne désormais le Reinheitsgebot de 1516.

### [GRAVE → CONFIRMÉ, avec une nuance sur le distracteur] Le verre à eau
- **Vérification** : la règle usuelle place les verres **en haut à droite de l'assiette, au-dessus des couteaux**, alignés en ligne ou en légère diagonale, **du plus grand au plus petit** ; le **verre à eau, le plus grand, ouvre la rangée à gauche**, à l'aplomb de la pointe du grand couteau, suivi vers la droite du verre à vin rouge, du verre à vin blanc, puis de la flûte. C'est une convention d'arts de la table, sans texte officiel, et des variantes existent.
- **Verdict** : `gastronomie.ts:252` et le cours `ga-art-table` ont raison ; `gastronomie-3.ts:412` a tort. **Nuance utile pour la correction** : sa réponse « En haut à droite de l'assiette, devant les verres à vin » n'est pas fausse de bout en bout — la **rangée** est bien en haut à droite. C'est le mot « devant » qui est faux : le verre à eau ouvre la rangée par la gauche, il ne se place pas en avant des autres.
- **Correction proposée, précisée** : « Au-dessus de l'assiette, à gauche de la rangée de verres : c'est le plus grand. » Explication : « Les verres s'alignent en haut à droite de l'assiette et décroissent vers la droite, du verre à eau au verre à vin rouge, puis au verre à vin blanc. »

---

# Passe 2

Relecture depuis le début, sans revenir d'abord sur les notes de la passe 1. Ce qui suit n'avait **pas** été vu au premier passage.

## Passe 2 — `prisma/seed/culture-g/gastronomie.ts` (13 notions, 128 questions)

### [GRAVE] L'astuce de la notion donne la réponse d'une de ses questions — dans 9 notions sur 13
C'est le constat le plus lourd de la seconde passe, et il est structurel. Le cinquième argument de `notion()` (voir `prisma/seed/culture-g/commun.ts` : `tip`) est une astuce **affichée à l'apprenant avec la notion**. Dans neuf notions de ce fichier, cette astuce est la réponse littérale d'une question posée juste après — le plus souvent la première.

| Notion | Astuce (`gastronomie.ts`) | Question qu'elle résout |
|---|---|---|
| `ga-vin` (`:36`) | « La couleur d'un vin vient de **la peau du raisin**, non de sa pulpe » | `:38` « D'où vient la couleur d'un vin rouge ? » → « **De la peau des raisins** » |
| `ga-boissons` (`:164`) | « Thé noir et thé vert viennent de **la même plante** » | `:166` « De quelle plante viennent le thé vert et le thé noir ? » → « **Du même arbuste**, Camellia sinensis » |
| `ga-art-table` (`:242`) | « La fourchette n'est entrée dans l'usage français **qu'au XVII<sup>e</sup> siècle** » | `:244` « Quand la fourchette s'impose-t-elle à la table française ? » → « **Au XVII<sup>e</sup> siècle** » |
| `ga-mode-textile` (`:268`) | « L'appellation haute couture est protégée par la loi française et **attribuée chaque année** » | `:270` « Que protège l'appellation haute couture en France ? » → « Un label juridique **attribué chaque année** par une commission » |
| `ga-jardin-nature` (`:294`) | « Le jardin à la française organise la nature par **la géométrie** ; le jardin anglais **l'imite** » | `:296` « Qu'est-ce qui caractérise un jardin à la française ? » → « Une composition **géométrique** » **et** `:298` « à l'anglaise ? » → « Une **imitation** d'une nature idéalisée » — deux questions sur deux |
| `ga-voyage-tourisme` (`:320`) | « **La France** est le premier pays du monde par le nombre de touristes accueillis, **mais pas par les recettes** » | `:322` « Quel pays accueille le plus de touristes internationaux ? » → « **La France** », explication « Les États-Unis en tirent en revanche **des recettes supérieures** » — l'astuce donne la réponse *et* l'explication |
| `ga-cuisines-monde` (`:86`) | « La tomate, la pomme de terre et le piment sont **américains** » | `:88` « D'où viennent la tomate, la pomme de terre et le piment ? » → « **Du continent américain** » |
| `ga-agriculture-alimentation` (`:216`) | « Le label bio porte sur **le mode de production**, **pas sur la qualité nutritionnelle** » | `:218` « Que garantit le label agriculture biologique européen ? » → « Un **mode de production** […] » ; le distracteur « Une qualité nutritionnelle supérieure » est éliminé d'avance par l'astuce |
| `ga-cuisine-francaise` (`:60`) | « Le repas gastronomique des Français est inscrit à l'**UNESCO depuis 2010** » | `:80` « Qu'est-ce que le repas gastronomique des Français inscrit à l'UNESCO en 2010 ? » |

- **Problème** : neuf questions du fichier ne mesurent plus rien. L'apprenant qui lit l'astuce — et elle est faite pour être lue — répond sans savoir. Pire pour `ga-jardin-nature`, où une seule astuce résout les deux premières questions, et pour `ga-voyage-tourisme`, où elle anticipe jusqu'à l'explication. Le mécanisme est d'autant plus insidieux que ces astuces sont, prises isolément, bien écrites : le défaut n'est pas dans leur contenu, il est dans le fait qu'elles doublent une question au lieu d'en éclairer une autre.
- **Correction proposée** : une astuce doit porter sur un point que **les questions ne posent pas**, ou donner une clé de raisonnement transposable, pas un fait à cocher. Deux notions du fichier montrent la bonne méthode : `ga-nutrition` (« Un aliment n'est ni bon ni mauvais en soi : c'est la ration globale qui compte ») et `ga-fromages-france` — aucune de leurs questions ne se résout par l'astuce. Réécrire les neuf autres sur ce modèle. Exemples : pour `ga-vin`, « Presque tout, dans un vin, se joue dans la peau du raisin : couleur, tanins, arômes » ; pour `ga-art-table`, « Les usages de la table française sont récents et souvent inventés après coup ».

### [GRAVE] Dior 1947 : la bonne réponse et un distracteur désignent la même collection
- **Où** : `prisma/seed/culture-g/gastronomie.ts:276` — notion `ga-mode-textile`
- **Texte** : « Quelle collection de Christian Dior fait sensation en 1947 ? » → choix : « **Le New Look** » (donnée bonne), « Le Trapèze », « La ligne H », « **La ligne Corolle seule** ».
- **Problème** : la collection présentée par Dior le 12 février 1947 s'appelait officiellement **ligne Corolle** (avec la ligne « En 8 ») ; « New Look » est le surnom que lui a donné Carmel Snow, rédactrice en chef du *Harper's Bazaar*, en sortant du défilé. Ce sont **deux noms de la même chose**. Un apprenant qui connaît bien le sujet — c'est-à-dire précisément celui que la question devrait récompenser — coche « La ligne Corolle » et se trompe. L'adverbe « seule » ajouté au distracteur est un aveu : on a senti qu'il était vrai et on a tenté de le rendre faux par un mot, sans que ce mot veuille dire quoi que ce soit ici.
- **Correction proposée** : remplacer le distracteur par une vraie collection Dior d'une autre année — « La ligne Fuseau (1957) » — et compléter l'explication : « Taille marquée et jupes amples, à contre-courant des restrictions de tissu de l'après-guerre. Dior l'avait baptisée ligne Corolle ; c'est la rédactrice en chef du Harper's Bazaar qui lança le surnom de New Look. »

### [MOYEN] ✅ « Seul », « seule », « seuls » : le mot qui sert à rendre faux un distracteur qui est vrai
Même symptôme, trois fois dans le fichier. Chaque fois qu'une proposition est en réalité défendable, un adjectif restrictif est ajouté à la fin pour la disqualifier — procédé invisible pour qui sait, et qui signale la mauvaise réponse à qui ne sait pas, puisque c'est la seule proposition ainsi tournée.
- `:276` « **La ligne Corolle seule** » — voir constat GRAVE ci-dessus.
- `:90` « Quel plat japonais associe riz vinaigré et poisson cru ou autres garnitures ? » → distracteur « **Le chirashi seul** ». Or le chirashi *est* un sushi : riz vinaigré recouvert de garnitures, ce qui correspond mot pour mot à l'énoncé. Le distracteur est vrai.
- `:42` « Quels cépages dominent les vins rouges de Bordeaux ? » → distracteur « **Le malbec et le tannat seuls** ». Le malbec (côt) est un cépage bordelais autorisé ; seul « dominent » le rend faux, pas « seuls ».
- **Correction proposée** : remplacer les distracteurs, pas les rafistoler. Pour `:90`, « Le mochi » ou « Le natto » ; pour `:42`, « Le nebbiolo et le sangiovese ».
- **Fait** : Remplacé les distracteurs de `gastronomie.ts:90` (chirashi → mochi) et `:42` (malbec/tannat → nebbiolo/sangiovese) ; le cas Dior (`:276`) était déjà résolu par la correction du constat [GRAVE] correspondant.

### [MOYEN] ✅ L'Orient-Express ne relie pas Paris à Constantinople en 1883
- **Où** : `prisma/seed/culture-g/gastronomie.ts:328` — notion `ga-voyage-tourisme`
- **Texte** : « Quel train de luxe **relie Paris à Constantinople à partir de 1883** ? » — explication : « Créé par la Compagnie internationale des wagons-lits, il devient un décor romanesque durable. »
- **Problème** : le premier départ, le 4 octobre 1883, ne va pas à Constantinople. Le train s'arrête à **Giurgiu**, en Roumanie ; les voyageurs traversent le Danube en bac, prennent un autre train jusqu'à Varna, puis un bateau sur la mer Noire. Le trajet **entièrement ferroviaire jusqu'à Constantinople** n'ouvre qu'en **1889**. L'énoncé fait donc de 1883 la date d'une liaison qui n'existait pas encore, et c'est l'énoncé lui-même — pas seulement l'explication — qui porte l'erreur.
- **Correction proposée** : énoncé « Quel train de luxe est mis en service en 1883 vers l'Orient ? » et explication « Créé par la Compagnie internationale des wagons-lits, il n'atteint d'abord Constantinople qu'au prix d'un bac sur le Danube et d'un bateau sur la mer Noire ; la liaison entièrement ferroviaire n'ouvre qu'en 1889. Il devient un décor romanesque durable. »
- **Fait** : Réécrit l'énoncé et l'explication de `gastronomie.ts:328` : mise en service en 1883, Constantinople atteinte seulement via bac et bateau, liaison ferroviaire complète en 1889.

### [MINEUR] ✅ « Le carbonnade » : un distracteur que son article dénonce
- **Où** : `prisma/seed/culture-g/gastronomie.ts:72` — notion `ga-cuisine-francaise`
- **Texte** : « Quel plat mijoté bourguignon associe bœuf, vin rouge et lardons ? » → choix « Le bœuf bourguignon », « Le pot-au-feu », « La daube provençale », « **Le carbonnade** ». Explication : « **La** carbonnade flamande, elle, est mijotée à la bière. »
- **Problème** : carbonnade est un nom féminin, et l'explication de la question l'écrit correctement deux lignes plus bas. Le distracteur est donc le seul des quatre à porter un article fautif : il se signale tout seul. C'est exactement le cas visé par la consigne — la formulation qui trahit la réponse.
- **Correction proposée** : « La carbonnade flamande ».
- **Fait** : Corrigé en « La carbonnade flamande » dans `gastronomie.ts:72`.

### [MINEUR] ✅ L'en-tête de `gastronomie.ts` porte le même défaut que celui de `gastronomie-2.ts`
- **Où** : `prisma/seed/culture-g/gastronomie.ts:2`.
- **Texte** : « Gastronomie & Art de vivre — **treize notions sans cours**. »
- **Problème** : dix des treize notions de ce fichier ont bien un cours dans `cours/gastronomie.ts`. Le prédécesseur avait relevé la formule « sans cours » sur `gastronomie-2.ts:2` uniquement ; elle est identique ici. La mention vient du chantier décrit dans `commun.ts` (« Ces notions n'ont PAS de cours. C'est délibéré et **provisoire** ») et n'a pas été mise à jour quand les cours ont été écrits. Un relecteur qui s'y fie cherchera des cours manquants là où il n'y en a pas, et passera à côté des huit notions réellement orphelines.
- **Correction proposée** : « Gastronomie & Art de vivre — treize notions ; les cours sont dans cours/gastronomie.ts. » Même correction sur `gastronomie-2.ts:2` et, s'il porte la même mention, sur `gastronomie-3.ts`.
- **Fait** : Corrigé l'en-tête de `gastronomie.ts` : « treize notions ; les cours sont dans cours/gastronomie.ts ».

### [MINEUR] ✅ Roquefort 1925 : « précède le système général des appellations d'origine » demande une précision
- **Où** : `prisma/seed/culture-g/gastronomie.ts:17`.
- **Texte** : « Sa protection légale précède même la création du système général des appellations d'origine contrôlées. »
- **Problème** : exact si l'on entend « contrôlées » au sens strict — l'AOC et l'INAO datent de 1935. Mais la **loi générale sur les appellations d'origine est de 1919**, donc antérieure de six ans à la loi Roquefort. La phrase, telle qu'elle est tournée, laisse croire qu'il n'existait aucun cadre d'appellation avant 1925. C'est le seul mot « contrôlées » qui sauve la phrase, et l'apprenant ne le pèsera pas.
- **Correction proposée** : « La loi du 26 juillet 1925 lui est propre : elle précède de dix ans la création de l'appellation d'origine contrôlée et de l'INAO, en 1935. »
- **Fait** : Corrigé l'explication de `gastronomie.ts:17` : « précède de dix ans la création de l'appellation d'origine contrôlée et de l'INAO, en 1935 ».

### [MINEUR] ✅ Deux questions voisines dont la première explique la seconde
- **Où** : `prisma/seed/culture-g/gastronomie.ts:62` et `:66` — notion `ga-cuisine-francaise`.
- **Texte** : `:63` (explication de la question sur Escoffier) « Son Guide culinaire, paru en 1903, organise la cuisine professionnelle et **invente la brigade en cuisine**. » — `:66` « **Qu'est-ce que le système de brigade en cuisine ?** »
- **Problème** : l'explication de la question 1 introduit le sujet de la question 3 en le nommant. Ce n'est pas une réponse donnée — la question 3 porte sur la définition, pas sur l'auteur — mais l'ordre est malheureux : on annonce la notion avant de la demander. Inverser les deux questions suffirait à faire de l'explication un renfort plutôt qu'une amorce.
- **Fait** : Inversé l'ordre des questions brigade/Escoffier dans `gastronomie.ts` (`ga-cuisine-francaise`) pour que la définition de la brigade précède la question qui la nomme.

## Passe 2 — `prisma/seed/culture-g/gastronomie-2.ts` (19 notions, 190 questions)

### [GRAVE] Les gardes du champ de Parmentier : le seed affirme ce que le cahier d'origine désigne comme une légende
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:19` — notion `ga2-histoire-alimentation`
- **Texte** : « Quel produit a été imposé en France par Parmentier au XVIII<sup>e</sup> siècle ? » → « La pomme de terre » — explication : « **Il en fit garder ostensiblement un champ pour susciter les vols et l'intérêt.** »
- **Problème** : c'est le pendant exact du mythe Catherine de Médicis, et le dépôt se contredit de la même façon. `heritage/.../lecons/gastronomie/08.json`, section « Des légumes venus d'ailleurs » : « **L'histoire des gardes postés autour de son champ des Sablons pour susciter la convoitise des voleurs relève, elle, largement de la légende.** » Et l'explication du quiz de la même leçon la répète : « L'anecdote des gardes […] **relève surtout de la légende**. » L'anecdote n'est attestée par aucune source contemporaine de Parmentier ; elle apparaît dans les biographies du XIX<sup>e</sup> siècle. Le seed en fait la seule chose que l'apprenant retiendra de Parmentier, puisque c'est tout ce que dit l'explication.
- **Correction proposée** : « Il obtient en 1772 que la faculté de médecine de Paris déclare le tubercule propre à la consommation humaine, puis multiplie les opérations de prestige — dont le bouquet de fleurs de pomme de terre offert à Louis XVI. L'anecdote des gardes postés autour de son champ relève de la légende. »
- **Note** : le domaine sait démonter les légendes quand il le veut — voir `gastronomie-2.ts:231` sur le poison échangé en trinquant, ou `:371` sur les traditions régionales inventées. Ici il en colporte une.

### [GRAVE] L'astuce donne la réponse : le défaut se répète dans neuf notions de ce fichier
Le constat posé sur `gastronomie.ts` n'est pas propre au premier lot. Neuf des dix-neuf notions de `gastronomie-2.ts` ont une astuce qui est la réponse littérale d'une de leurs questions, et deux d'entre elles la reprennent **mot pour mot**.

| Notion | Astuce | Question résolue |
|---|---|---|
| `ga2-parfum` (`:272`) | « Un parfum se construit comme un accord musical, **en notes de tête, de cœur et de fond** » | `:274` → « **En notes de tête, de cœur et de fond** » — identique au mot près |
| `ga2-cuisine-technique-froid` (`:428`) | « L'acide d'une marinade **ne cuit pas** le poisson : il en **dénature les protéines** » | `:430` → « **Il dénature les protéines sans les cuire** par la chaleur » — identique |
| `ga2-restauration` (`:142`) | « Le mot restaurant désignait à l'origine **un bouillon reconstituant**, non un lieu » | `:144` → « **D'un bouillon** réputé restaurer les forces » |
| `ga2-viandes` (`:90`) | « La tendreté d'une viande dépend **du muscle sollicité** par l'animal » | `:92` → « Ils correspondent à des **muscles peu sollicités** » |
| `ga2-boissons-sans-alcool` (`:194`) | « Une eau minérale naturelle doit avoir **une composition stable**, contrairement à une eau de source » | `:196` → « La minérale a **une composition stable** et des effets reconnus » |
| `ga2-artisanat-art-vivre` (`:298`) | « Un métier d'art associe **maîtrise technique**, savoir-faire manuel et **création** » | `:300` → « Une activité de production ou de restauration **associant technique et création** » |
| `ga2-economie-alimentaire` (`:454`) | « **La part de la valeur revenant à l'agriculteur a fortement diminué** » | `:458` → « **Une part minoritaire**, très variable selon les produits » |
| `ga2-alimentation-durable` (`:480`) | « **Ce que l'on mange** pèse davantage sur le climat que **la façon dont on le transporte** » | `:482` → « **La nature des aliments** » ; le distracteur « La distance de transport » est écarté d'avance |
| `ga2-fetes-traditions` (`:350`) | « Beaucoup de spécialités régionales sont **des inventions récentes** présentées comme séculaires » | `:370` → « Elles ont souvent été **codifiées au XIX<sup>e</sup> ou au XX<sup>e</sup> siècle** » |

- **Correction proposée** : même remède que pour `gastronomie.ts`. Les astuces réussies du fichier montrent la voie — `ga2-culture-table-monde` (« Ce qui passe pour poli à une table peut être grossier à une autre ») et `ga2-produits-mer` (« La provenance et la saison comptent autant que l'espèce ») donnent une clé de lecture sans résoudre aucune question.

### [MOYEN] ✅ Une question dont l'explication désavoue la réponse qu'elle vient de valider
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:226` — notion `ga2-culture-table-monde`
- **Texte** : « Que signifie roter à table dans certaines cultures ? » → bonne réponse « Un signe de satisfaction dans quelques traditions » — explication : « **L'affirmation est souvent exagérée dans les récits de voyage : les usages sont plus nuancés.** »
- **Problème** : l'explication dit à l'apprenant que ce qu'il vient de cocher est douteux. On lui demande d'apprendre un fait, puis on lui apprend à s'en méfier — dans le même écran. La prudence de la rédaction est juste : le « rot poli » est un cliché de récit de voyage plus qu'un usage documenté. Mais alors la question ne devrait pas exister sous cette forme ; le distracteur « Toujours une grossièreté » est d'ailleurs, en l'état, presque aussi défendable que la bonne réponse.
- **Correction proposée** : supprimer la question, ou la retourner pour en faire une question sur le cliché lui-même : « Que vaut l'idée que roter à table serait poli dans certaines cultures ? » → « C'est un cliché de récit de voyage, largement exagéré », les distracteurs devenant les affirmations tranchées.
- **Fait** : Retourné la question `gastronomie-2.ts:226` : elle porte maintenant sur le cliché lui-même (« Que vaut l'idée que roter à table serait poli… »), la bonne réponse assumant le scepticisme au lieu de le contredire.

### [MOYEN] ✅ « Quelle proportion » — et aucune proportion dans la réponse
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:222` — notion `ga2-culture-table-monde`
- **Texte** : « **Quelle proportion** de l'humanité mange principalement avec les mains ? » → bonne réponse « **Une part importante**, notamment en Asie du Sud et en Afrique » ; distracteurs : « Une minorité négligeable », « Uniquement en zone rurale », « **La moitié exactement** ».
- **Problème** : l'énoncé demande une proportion et la bonne réponse n'en donne aucune ; la seule proposition qui en donne une, « La moitié exactement », est la fausse. L'apprenant qui prend l'énoncé au sérieux est conduit vers l'erreur, et celui qui répond juste n'a rien appris de chiffré. C'est le défaut d'accord énoncé/réponse que le prédécesseur avait relevé en série dans `gastronomie-3.ts` — il existe donc déjà dans le deuxième lot.
- **Correction proposée** : énoncé « Où mange-t-on principalement avec les mains ? » et réponse « Dans une grande partie de l'Asie du Sud, du Moyen-Orient et de l'Afrique », en remplaçant le distracteur chiffré.
- **Fait** : Réécrit `gastronomie-2.ts:222` en « Où mange-t-on principalement avec les mains ? » avec une réponse géographique et un distracteur chiffré retiré.

### [MOYEN] ✅ Aquaculture : « environ la moitié » ici, « la majorité » dans le cahier d'origine
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:77` — notion `ga2-produits-mer` — contre `heritage/.../lecons/gastronomie/07.json`, section « Surpêche, quotas et aquaculture ».
- **Texte** : (seed) « Elle fournit aujourd'hui **environ la moitié** des produits aquatiques consommés dans le monde. » — (leçon 07) « L'aquaculture […] fournit désormais **la majorité** des animaux aquatiques consommés dans le monde. »
- **Problème** : les deux formulations décrivent le même basculement — l'aquaculture a dépassé la pêche de capture pour les animaux aquatiques destinés à la consommation en 2022 — mais l'une le donne pour accompli et l'autre pour à moitié fait. Le seed est en retard d'une révision, et c'est le seed qui porte la question.
- **Correction proposée** : « Elle fournit désormais un peu plus de la moitié des animaux aquatiques consommés dans le monde, ayant dépassé la pêche de capture au début des années 2020. » — formulation qui a l'avantage d'être vraie dans les deux lectures et de dater le basculement.
- **Fait** : Corrigé `gastronomie-2.ts:77` : « un peu plus de la moitié […] ayant dépassé la pêche de capture au début des années 2020 ».

### [MOYEN] ✅ Deux questions sur la date limite de consommation, à un lot d'écart
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:390` (notion `ga2-securite-alimentaire`) et `gastronomie.ts:236` (notion `ga-agriculture-alimentation`).
- **Texte** : (`-2.ts`) « Qu'est-ce que la date limite de consommation ? » → « Une date au-delà de laquelle le produit présente un risque sanitaire », explication « Elle concerne les produits périssables et **interdit la vente au-delà**. » — (`gastronomie.ts`) « Quelle différence y a-t-il entre date limite de consommation et date de durabilité minimale ? » → « La première engage la sécurité, la seconde seulement la qualité », explication « "À consommer jusqu'au" **interdit la vente après la date** ; "à consommer de préférence avant" ne l'interdit pas. »
- **Problème** : même contenu, même explication, deux notions différentes. La seconde question englobe entièrement la première. Et le même fait est encore repris dans `heritage/.../lecons/gastronomie/11.json`, section et quiz — soit quatre occurrences dans le domaine.
- **Correction proposée** : garder la question comparative de `gastronomie.ts:236`, qui apprend davantage, et remplacer celle de `gastronomie-2.ts:390` par une question sur un point que la notion `ga2-securite-alimentaire` ne couvre pas — par exemple le délai de conservation après ouverture, ou la responsabilité du professionnel.
- **Fait** : Gardé la question comparative de `gastronomie.ts:236` et remplacé `gastronomie-2.ts:390` par une question sur la responsabilité sanitaire du professionnel.

### [MINEUR] ✅ Sept à huit morceaux de sucre, mais trente-cinq grammes : le compte ne tombe pas juste
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:210` — notion `ga2-boissons-sans-alcool`
- **Texte** : « Quelle quantité de sucre contient environ une canette de soda standard ? » → « L'équivalent de **sept à huit morceaux** » — explication : « Soit environ **trente-cinq grammes** pour trente-trois centilitres. »
- **Problème** : le morceau de sucre français de référence (calibre n° 4) pèse **six grammes** ; trente-cinq grammes en font donc **six**, pas sept à huit. L'équivalence courante « sept morceaux » repose sur des cubes de cinq grammes, qui ne sont pas la norme en France. La question et son explication se contredisent arithmétiquement, et c'est l'explication qui a raison : le chiffre de trente-cinq grammes est exact.
- **Correction proposée** : « L'équivalent de six morceaux de sucre », explication « Soit environ trente-cinq grammes pour trente-trois centilitres, à raison de six grammes par morceau — plus que l'apport quotidien en sucres libres recommandé par l'OMS pour un adulte. »
- **Fait** : Corrigé `gastronomie-2.ts:210` : « L'équivalent de six morceaux », avec la précision OMS dans l'explication.

### [MINEUR] ✅ Le réfrigérateur : « années 1960 » dans le seed, « après 1945 » dans le cahier d'origine
- **Où** : `prisma/seed/culture-g/gastronomie-2.ts:26` contre `heritage/.../lecons/gastronomie/11.json`, section « La révolution du froid et ses règles ».
- **Texte** : (seed) « Quand le réfrigérateur se généralise-t-il dans les foyers français ? » → « **Dans les années 1960** », avec « **Dès 1945** » parmi les distracteurs — (leçon 11) « La réfrigération domestique se généralise en France **après 1945**. »
- **Problème** : le seed a raison — l'équipement passe d'environ un foyer sur dix au milieu des années 1950 à plus de huit sur dix à la fin des années 1960 — et son explication le dit bien. Mais la leçon du cahier d'origine est assez vague pour orienter vers le distracteur : « après 1945 » et « dès 1945 » se ressemblent trop. L'apprenant qui a lu la leçon avant de répondre est désavantagé.
- **Correction proposée** : préciser la leçon 11 — « La réfrigération domestique ne se généralise qu'au cours des années 1960 » — plutôt que de toucher à la question.
- **Fait** : Corrigé la leçon `11.json`, comme proposé (« ne se généralise […] qu'au cours des années 1960 ») plutôt que la question du seed, qui était déjà juste.

## Passe 2 — `prisma/seed/culture-g/gastronomie-3.ts` (22 notions, 220 questions)

### [GRAVE] Le relevé des doublons du prédécesseur est incomplet : trois notions entières lui ont échappé
Le tableau de la passe 1 s'arrêtait, de son propre aveu, autour de la ligne 440. Or c'est **après** cette ligne que se trouvent trois notions supplémentaires reprises des lots 1 et 2, avec la même bonne réponse et une explication paraphrasée. À ajouter au relevé :

| Question de `gastronomie-3.ts` | Doublon de |
|---|---|
| `:430` « Qu'est-ce que la brigade de cuisine ? » → « Une organisation hiérarchisée des postes de cuisine » | `gastronomie.ts:66` « Qu'est-ce que le système de brigade en cuisine ? » → « Une organisation hiérarchisée par postes spécialisés » |
| `:433` explication « Saucier, poissonnier, entremétier et pâtissier sont des chefs de partie » | `gastronomie.ts:67` « Saucier, poissonnier, entremétier, garde-manger, pâtissier : chacun tient un poste » |
| `:438` « Que fait un sommelier ? » | `gastronomie.ts:258` « Qu'est-ce qu'un sommelier ? » |
| `:444` « Qu'est-ce que le concours Meilleur Ouvrier de France ? » | `gastronomie.ts:78` « Que désigne l'appellation Meilleur Ouvrier de France ? » |
| `:460` + `:461` « Quand les restaurants apparaissent-ils à Paris ? » / « Le mot désignait d'abord un bouillon restaurant » | `gastronomie-2.ts:144` + `:145` « D'où vient le mot restaurant ? » / « Le mot désignant le lieu apparaît à Paris dans la seconde moitié du XVIII<sup>e</sup> siècle » |
| `:462` « Quel événement a favorisé l'essor des restaurants parisiens ? » → « **La Révolution, qui a libéré les cuisiniers des grandes maisons** » | `gastronomie-2.ts:146` « Quel événement favorise l'essor des restaurants à Paris ? » → « **La Révolution, qui libère les cuisiniers des maisons nobles** » — même phrase à un temps près |
| `:472` « Qu'est-ce que le repas gastronomique des Français ? » | `gastronomie.ts:80` |
| `:562` « Pourquoi l'élevage bovin émet-il beaucoup de gaz à effet de serre ? » → « **La fermentation entérique produit du méthane** », expl. « Le méthane a un pouvoir de réchauffement bien supérieur au dioxyde de carbone » | `gastronomie-2.ts:484` « Pourquoi la viande de ruminant a-t-elle une empreinte élevée ? » → « **La fermentation entérique produit du méthane** », expl. « Le méthane a un pouvoir de réchauffement bien supérieur au CO2 à court terme » — **question, réponse et explication identiques** |
| `:578` « Quel levier réduit le plus l'empreinte d'une alimentation ? » expl. « Le transport pèse généralement bien moins que le mode de production » | `gastronomie-2.ts:482` « Quel facteur pèse le plus dans l'empreinte carbone d'un repas ? » expl. « Le transport ne représente qu'une faible part de l'empreinte » |

- **Conséquence sur la correction proposée** : la liste de notions à supprimer doit être étendue de `ga3-arts-table`, `ga3-conservation`, `ga3-cuisine-technique`, `ga3-herbes-epices`, `ga3-produits-mer`, `ga3-agriculture-alimentation` à **`ga3-restauration-metiers`, `ga3-histoire-repas` et `ga3-alimentation-futur`**, soit neuf des vingt-deux notions du troisième lot. Trois de ces notions n'ont d'ailleurs pas de cours non plus, ce qui confirme le diagnostic du prédécesseur : ce sont les notions fabriquées par reformulation.

### [GRAVE] Trois questions sur la date limite de consommation, une par fichier
- **Où** : `gastronomie.ts:236`, `gastronomie-2.ts:390`, `gastronomie-3.ts:342`.
- **Texte** : (`-3.ts`) « Quelle est la portée d'une date limite de consommation ? » → « Une date au-delà de laquelle le produit devient dangereux », explication « La date de durabilité minimale, à consommer de préférence avant, ne présente pas ce risque. »
- **Problème** : le même contenu revient trois fois, dans trois notions différentes de trois fichiers différents, et une quatrième dans `heritage/.../lecons/gastronomie/11.json` (section + quiz). L'apprenant qui révise le domaine tombera quatre fois sur la distinction DLC/DDM et jamais sur ce que la notion `ga3-conservation` pourrait lui apprendre d'autre.
- **Correction proposée** : n'en garder qu'une — celle de `gastronomie.ts:236`, qui compare les deux dates au lieu d'en définir une seule.

### [MOYEN] ✅ La vanille : la bonne réponse et un distracteur sont tous deux vrais, et le cahier d'origine contredit la bonne réponse
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:520` — notion `ga3-herbes-epices`
- **Texte** : « Qu'est-ce que la vanille ? » → bonne réponse « **Le fruit fermenté d'une orchidée** » ; distracteurs « **Une gousse séchée** », « Une graine aromatique », « Une écorce parfumée ».
- **Problème** : deux défauts. (a) « Une gousse séchée » **est vrai** — la vanille du commerce est exactement cela ; le distracteur est aussi défendable que la bonne réponse, à ceci près qu'il ne mentionne pas l'orchidée. (b) Le mot « fermenté » est faux au sens technique, et le cahier d'origine le dit : `heritage/.../lecons/gastronomie/09.json` décrit « échaudage, étuvage, séchage lent et plusieurs mois d'affinage en malles » — un processus **enzymatique**, pas une fermentation microbienne. La leçon écrit d'ailleurs « La gousse récoltée est inodore ; elle ne prend son parfum qu'après […] », sans jamais employer le mot fermentation.
- **Correction proposée** : énoncé inchangé, bonne réponse « Le fruit d'une orchidée liane, longuement affiné après récolte », et remplacer le distracteur par « Une graine broyée d'un arbuste tropical ». Explication : « Récoltée verte et inodore, la gousse ne développe son parfum qu'après échaudage, étuvage et plusieurs mois d'affinage. »
- **Fait** : Réécrit `gastronomie-3.ts:520` : bonne réponse « Le fruit d'une orchidée liane, longuement affiné après récolte », distracteur « gousse séchée » remplacé, et le mot « fermenté » retiré de l'explication.

### [MOYEN] ✅ Une astuce recopiée mot pour mot d'un fichier à l'autre
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:506` (notion `ga3-herbes-epices`) et `gastronomie-2.ts:38` (notion `ga2-epices`).
- **Texte** : les deux, à l'identique — « **Le commerce des épices a motivé les grandes explorations maritimes.** »
- **Problème** : deux notions de deux fichiers différents portent la même astuce, mot pour mot. C'est le signe le plus net que `ga3-herbes-epices` a été fabriquée en dupliquant `ga2-epices` — le prédécesseur l'avait soupçonné à partir des questions, l'astuce le prouve. Un apprenant qui enchaîne les deux notions voit deux fois la même phrase d'introduction.
- **Correction proposée** : la suppression de `ga3-herbes-epices` règle le problème ; à défaut, réécrire son astuce sur un angle propre — par exemple « Le mot épice vient du latin *species*, la marchandise : longtemps, elles relevaient autant de l'apothicaire que du cuisinier. »
- **Fait** : Réécrit l'astuce de `ga3-herbes-epices` (`gastronomie-3.ts`) sur l'étymologie du mot épice, distincte de celle de `ga2-epices`.

### [MOYEN] ✅ L'astuce donne encore la réponse — cette fois d'une notion entière
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:558` — notion `ga3-alimentation-futur`
- **Texte** : astuce « **L'alimentation représente environ un quart des émissions mondiales de gaz à effet de serre.** » → première question `:560` « Quelle part des émissions mondiales l'alimentation représente-t-elle ? » → « **Environ un quart** ».
- **Problème** : réponse littérale, comme dans les deux premiers lots. Le défaut est un peu moins répandu ici — les astuces de `ga3-cuisines-asie`, `ga3-bieres-monde` ou `ga3-cafe-the` sont bien construites — mais il n'a pas disparu. À noter aussi : `ga3-vins-monde` (`:116`) annonce « L'Italie, la France et l'Espagne restent les trois premiers producteurs mondiaux », ce qui réduit la première question à un choix entre deux des trois noms cités.
- **Correction proposée** : « Ce que nous mangeons pèse davantage sur le climat que la façon dont nous le produisons ou le transportons » — vrai, utile, et ne résolvant aucune des dix questions.
- **Fait** : Réécrit l'astuce de `ga3-alimentation-futur` sur le défi de nourrir le monde, qui ne résout plus aucune question.

### [MINEUR] ✅ Le safran a trois stigmates, pas un
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:518` — notion `ga3-herbes-epices`
- **Texte** : « Qu'est-ce que le safran ? » → « **Le stigmate séché** d'un crocus ».
- **Problème** : le reste du domaine est unanime et précis — `heritage/.../lecons/gastronomie/09.json` : « le safran l'**ensemble des trois stigmates** d'un crocus », et son quiz consacre une question entière au chiffre trois. Le singulier de `gastronomie-3.ts` efface le seul détail que l'apprenant est censé retenir de la question du cahier d'origine.
- **Correction proposée** : « Les trois stigmates séchés d'un crocus ».
- **Fait** : Corrigé `gastronomie-3.ts:518` en « Les trois stigmates séchés d'un crocus ».

### [MINEUR] ✅ L'en-tête du troisième fichier change le nom du domaine
- **Où** : `prisma/seed/culture-g/gastronomie-3.ts:2`.
- **Texte** : « **Gastronomie et art de vivre**, troisième lot — vingt-deux notions sans cours. »
- **Problème** : les deux autres fichiers écrivent « Gastronomie & Art de vivre », qui est aussi la valeur exacte de la constante `S` utilisée dans les trois. Trois écritures pour un même nom de domaine dans trois en-têtes consécutifs. Et la mention « sans cours » est fausse ici aussi : dix-sept des vingt-deux notions ont un cours.
- **Correction proposée** : « Gastronomie & Art de vivre, troisième lot — vingt-deux notions ; les cours sont dans cours/gastronomie.ts. »
- **Fait** : Corrigé l'en-tête de `gastronomie-3.ts` : « Gastronomie & Art de vivre, troisième lot […] ».

## Passe 2 — `prisma/seed/culture-g/cours/gastronomie.ts`, première moitié (`ga-fromages-france` à `ga2-guides-critique`)

### [GRAVE] « Le mot légume n'a aucune définition botanique » : le cours affirme le contraire du cahier d'origine, et il a tort
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts`, cours `ga2-legumes-fruits`, section « Fruit ou légume ? ».
- **Texte** : « Le mot "légume" **n'a aucune définition botanique** — c'est une catégorie culinaire, qui désigne ce qu'on sert salé. »
- **Problème** : c'est faux, et le cahier d'origine le dit très bien. `heritage/.../lecons/gastronomie/08.json`, section « Ce que le mot légume veut dire » : « en botanique, **le légume est tout autre chose, c'est le nom savant de la gousse**, le fruit sec des plantes de la famille des pois et des haricots » — et son quiz le répète : « Le mot légume, d'ailleurs, désigne en botanique un tout autre objet : la gousse des plantes de la famille du pois. » Le légume (*legumen*) est bien un type de fruit en botanique, celui des fabacées. Le cours ne dit pas seulement moins que la leçon : il dit l'inverse, et il enlève à l'apprenant le seul détail qui rend l'anecdote de la tomate vraiment intéressante — le fait que les deux disciplines emploient le même mot pour deux objets différents.
- **Correction proposée** : « Le mot "légume" n'a pas, en cuisine, la définition qu'il a en botanique : le botaniste appelle légume la gousse des fabacées — pois, haricot, lentille —, tandis que la cuisine range sous ce nom tout ce qu'elle sert salé. »
- **Note** : la dernière phrase de la même section — « La question n'a d'intérêt que pour rappeler qu'un mot peut avoir deux définitions valides dans deux domaines » — annonce exactement la bonne idée, que le paragraphe précédent vient de rendre impossible.

### [GRAVE] Le champ gardé de Parmentier, une troisième fois, dans le cours cette fois
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts`, cours `ga2-histoire-alimentation`, section « Les plantes venues d'Amérique ».
- **Texte** : « La pomme de terre […] fut imposée en France par Parmentier au XVIII<sup>e</sup> siècle, à grand renfort de mise en scène — **les champs gardés le jour et laissés libres la nuit pour susciter le vol**, les fleurs offertes au roi. »
- **Problème** : le même récit que `gastronomie-2.ts:19`, présenté avec le même aplomb, alors que `heritage/.../lecons/gastronomie/08.json` l'écarte deux fois explicitement (« relève, elle, largement de la légende » ; « relève surtout de la légende »). Le domaine porte donc **deux versions incompatibles du même fait**, l'une dans le seed — question et cours —, l'autre dans le cahier d'origine — section et quiz. Le détail « gardés le jour et laissés libres la nuit » est même plus circonstancié ici que dans la question, ce qui le rend plus crédible et donc plus nuisible.
- **Correction proposée** : « […] à grand renfort de mise en scène, dont les fleurs de pomme de terre offertes à Louis XVI le 24 août 1786. L'épisode du champ des Sablons gardé le jour et laissé libre la nuit, souvent raconté, n'est attesté par aucune source contemporaine : c'est une légende du XIX<sup>e</sup> siècle. »

### [GRAVE] L'Orient-Express de 1883 : le cours propage l'erreur de la question
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts`, cours `ga-voyage-tourisme`, section « Du Grand Tour au voyage organisé ».
- **Texte** : « Le luxe suit avec l'Orient-Express, **qui relie Paris à Constantinople à partir de 1883** et devient le symbole du voyage élégant. »
- **Problème** : identique à `gastronomie.ts:328` (voir le constat de la passe 2 sur ce fichier). En 1883 le train s'arrête à Giurgiu, en Roumanie ; il faut un bac sur le Danube puis un bateau sur la mer Noire pour atteindre Constantinople. La liaison entièrement ferroviaire n'ouvre qu'en 1889. Comme la question et le cours disent la même chose, la correction doit porter sur les deux, sans quoi l'un rétablira ce que l'autre corrige.
- **Correction proposée** : « Le luxe suit avec l'Orient-Express, mis en service en 1883 : il faut d'abord un bac sur le Danube et un bateau sur la mer Noire pour rejoindre Constantinople, que la voie ferrée n'atteint qu'en 1889. »

### [MOYEN] ⏭️ Le cours des fromages ouvre par l'affirmation absolue que sa propre phrase suivante dément
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts`, cours `ga-fromages-france`, section « Huit familles, une seule logique », première phrase.
- **Texte** : « Un fromage **ne se classe ni par sa région ni par son lait**, mais par sa technique de fabrication. On distingue habituellement huit familles : […] pâtes persillées, pâtes filées et **fromages de chèvre**, ces derniers étant rangés à part par tradition plus que par technique. »
- **Problème** : le prédécesseur avait relevé ce défaut sur l'accroche de la notion (`gastronomie.ts:12`) en créditant le cours d'y avoir échappé. En réalité le cours porte la **même** formulation absolue, à un mot près, dans sa toute première phrase — et sa nuance (« rangés à part par tradition plus que par technique ») arrive vingt mots plus loin, après que l'affirmation a été posée comme une règle. Un apprenant retient la première phrase d'une section, pas son incise.
- **Correction proposée** : « Un fromage se classe d'abord par sa technique de fabrication, plus que par sa région ou par son lait. On distingue habituellement huit familles, dont une seule échappe à ce principe : les fromages de chèvre, rangés à part par tradition. »
- **Fait** : Délibérément laissé de côté : ce paragraphe (`ga-fromages-france`, « Huit familles, une seule logique ») est le corps même du constat [GRAVE] sur les huit familles de fromages (liste « pâtes filées » vs « fromages fondus ») ; je n'ai pas voulu toucher à ces phrases pour ne pas interférer avec une correction [GRAVE] qui n'est pas de mon ressort.

### [MINEUR] ⏭️ Confirmations utiles collectées en relisant les cours
Trois points où les cours donnent la bonne version et permettent de trancher un constat sans recours extérieur :
- **Safran** : `ga2-epices`, section « Ce qu'on appelle une épice » — « Le safran, **stigmates séchés** d'un crocus » (pluriel), comme la leçon 09. Confirme que le singulier de `gastronomie-3.ts:518` est bien un décrochage isolé.
- **Phylloxéra** : `ga-vin`, section « Bulles, crises et alternatives » — « détruit les racines des vignes européennes **à partir de 1863** ». Le cours est ici plus précis que sa propre question (`gastronomie.ts:52`, « à la fin du XIX<sup>e</sup> siècle »), qui pourrait reprendre la date.
- **Décalage horaire** : `ga-voyage-tourisme` écrit « se fait **plus difficilement vers l'est** », la question `gastronomie.ts:341` « se fait **plus facilement vers l'ouest** » — les deux énoncés sont équivalents et justes ; c'est l'un des rares cas du domaine où une reformulation ne crée pas de contradiction.
- **Fait** : Constat purement informatif (confirmations de faits déjà justes) ; rien à corriger.

## Passe 2 — `cours/gastronomie.ts`, suite (`ga2-boissons-sans-alcool` à `ga3-cuisines-ameriques`)

### [GRAVE] La fourchette : une quatrième chronologie, incompatible avec les trois autres
- **Où** : `prisma/seed/culture-g/cours/gastronomie.ts`, cours `ga2-culture-table-monde`, section « Manger avec les mains ».
- **Texte** : « […] la fourchette, laquelle a pourtant été longtemps combattue en Europe : **introduite d'Italie à la Renaissance**, elle fut jugée efféminée, voire diabolique par des ecclésiastiques qui y voyaient un refus des doigts que Dieu avait donnés. »
- **Problème** : le domaine porte désormais **quatre** récits différents du même fait, dont trois faux : (1) `gastronomie.ts:245` « Introduite d'Italie par Catherine de Médicis » ; (2) `gastronomie-3.ts:409` « elle se diffuse d'Italie sous Henri III et Louis XIV » ; (3) `cours/gastronomie.ts`, `ga-art-table` « Venue d'Italie, elle ne s'impose à la table française qu'au XVII<sup>e</sup> siècle » — la seule prudente ; (4) celle-ci, « introduite d'Italie à la Renaissance ». Or la vérification établit que des fourchettes sont mentionnées dans les inventaires royaux français **dès le début du XIV<sup>e</sup> siècle** : l'objet n'est pas « introduit » à la Renaissance, il est déjà là depuis deux siècles ; ce qui change au XVI<sup>e</sup> puis au XVII<sup>e</sup>, c'est son passage à un usage individuel et généralisé.
- **Correction proposée** : harmoniser les quatre passages sur une seule formulation : « Connue en France dès le XIV<sup>e</sup> siècle mais longtemps réservée à quelques objets de prestige, la fourchette individuelle ne se diffuse dans l'aristocratie qu'à la fin du XVI<sup>e</sup> siècle et ne devient l'usage courant qu'au XVII<sup>e</sup>. » Et ne nommer ni Catherine de Médicis ni Henri III, dont l'attribution est une construction du XIX<sup>e</sup> siècle dans les deux cas.

### [GRAVE] La distinction DLC / DDM est enseignée sept fois dans le domaine
Le constat de doublon posé plus haut sur trois questions était en dessous de la réalité. Recensement complet :
1. `prisma/seed/culture-g/gastronomie.ts:236` — question comparative.
2. `prisma/seed/culture-g/gastronomie-2.ts:390` — question sur la DLC seule.
3. `prisma/seed/culture-g/gastronomie-3.ts:342` — question sur la DLC seule.
4. `cours/gastronomie.ts`, `ga-agriculture-alimentation`, fin de la section « Le cadre et le gaspillage ».
5. `cours/gastronomie.ts`, `ga2-securite-alimentaire`, section « Réagir vite », premier paragraphe entier.
6. `cours/gastronomie.ts`, `ga2-alimentation-durable`, section « Ne pas jeter » (« comprendre les dates — la date de durabilité minimale, "à consommer de préférence avant", n'impose aucun rejet »).
7. `heritage/.../lecons/gastronomie/11.json` — section « La révolution du froid » **et** explication du quiz sur les biscuits, soit deux fois de plus.
- **Problème** : huit énoncés du même contenu, dans cinq fichiers. Aucun n'ajoute quoi que ce soit aux autres : tous opposent « à consommer jusqu'au » (sécurité) à « à consommer de préférence avant » (qualité), et cinq d'entre eux mentionnent en plus le gaspillage. C'est le fait le plus répété du domaine, et de loin.
- **Correction proposée** : le garder une fois dans le seed — la question comparative de `gastronomie.ts:236` — et une fois dans un cours, celui de `ga2-securite-alimentaire`, qui est le plus complet. Supprimer les cinq autres et récupérer la place pour des contenus que le domaine ne couvre pas.

### [MOYEN] ✅ Le cours affirme le « rot poli » que la question, elle, désavoue
- **Où** : `cours/gastronomie.ts`, cours `ga2-culture-table-monde`, section « Manger avec les mains », dernière phrase — contre `prisma/seed/culture-g/gastronomie-2.ts:227`.
- **Texte** : (cours) « Finir son assiette signale la satisfaction en France et le manque de générosité de l'hôte dans plusieurs pays d'Asie ; **roter est un signe d'appréciation dans quelques traditions** et une faute ailleurs. » — (explication de la question) « **L'affirmation est souvent exagérée dans les récits de voyage : les usages sont plus nuancés.** »
- **Problème** : le cours pose comme un fait ce que la question de la même notion présente comme un cliché exagéré. L'apprenant lit successivement l'affirmation et son démenti, sans qu'aucun des deux textes ne renvoie à l'autre. Les deux exemples de la phrase du cours — l'assiette finie et le rot — appartiennent au même corpus d'anecdotes de voyage, dont la variante « en Chine on rote pour complimenter le cuisinier » est justement l'exemple type du fait ethnographique non vérifié. C'est d'autant plus dommage que ce cours excelle ailleurs à démonter ce genre de récit : le *bystro* des cosaques, le poison échangé en trinquant, l'explication hygiéniste des interdits alimentaires.
- **Correction proposée** : « Ce qui passe pour poli à une table peut être grossier à une autre — mais les exemples les plus circulés (le rot qui complimenterait le cuisinier, l'assiette qu'il ne faudrait pas finir) sont des clichés de récit de voyage, rarement documentés par les ethnographes. Les différences réelles sont plus discrètes et plus intéressantes. »
- **Fait** : Réécrit la dernière phrase de « Manger avec les mains » (cours `ga2-culture-table-monde`) pour qu'elle qualifie le rot et l'assiette finie de clichés de récit de voyage, en accord avec la question corrigée.

### [MOYEN] ✅ Une canette de soda ne fait pas « à elle seule la limite journalière »
- **Où** : `cours/gastronomie.ts`, cours `ga2-boissons-sans-alcool`, section « Sodas et jus ».
- **Texte** : « Une canette standard de trente-trois centilitres contient l'équivalent de sept à huit morceaux de sucre, **soit à elle seule la limite journalière recommandée pour les sucres ajoutés**. »
- **Problème** : deux imprécisions. (a) Le repère de l'OMS, rappelé par le domaine lui-même dans `heritage/.../lecons/gastronomie/11.json` (« limiter les sucres libres à moins d'un dixième des apports énergétiques »), correspond à environ **cinquante grammes** par jour pour un adulte — la canette en représente donc environ **soixante-dix pour cent**, pas la totalité. C'est seulement face au seuil « idéal » de cinq pour cent, soit vingt-cinq grammes, que la canette le dépasse. (b) Le compte « sept à huit morceaux » souffre de la même erreur arithmétique que la question `gastronomie-2.ts:210` : trente-cinq grammes font six morceaux de six grammes.
- **Correction proposée** : « Une canette standard de trente-trois centilitres contient environ trente-cinq grammes de sucre, soit six morceaux — près des trois quarts du maximum quotidien recommandé par l'OMS pour un adulte, et davantage que son seuil idéal. »
- **Fait** : Corrigé le cours `ga2-boissons-sans-alcool` : « environ trente-cinq grammes de sucre, soit six morceaux — près des trois quarts du maximum quotidien […] ».

### [MINEUR] ✅ Le botulisme correctement formulé au même endroit où il est mal formulé
- **Où** : `cours/gastronomie.ts`, cours `ga2-securite-alimentaire`, section « Trois bactéries à connaître » — contre `ga2-viandes`, section « Conserver par le sel ».
- **Texte** : (`ga2-securite-alimentaire`) « La toxine botulique est produite par une bactérie qui se développe en l'absence d'oxygène […] **C'est la substance la plus toxique connue**, et elle agit en bloquant la transmission nerveuse. » — (`ga2-viandes`) « il inhibe la bactérie responsable du botulisme, **toxine la plus puissante connue** ».
- **Problème** : l'apposition fautive relevée par le prédécesseur est bien une faute et non un choix, puisque le même fichier écrit la phrase correctement quelques cours plus loin, en distinguant proprement la bactérie de sa toxine. La correction proposée peut être appliquée sans hésitation, et gagnerait à s'aligner sur la formulation de `ga2-securite-alimentaire`.
- **Correction proposée** : « il inhibe *Clostridium botulinum*, la bactérie du botulisme, dont la toxine est la substance la plus toxique connue ».
- **Fait** : Corrigé `ga2-viandes` pour reprendre la formulation exacte de `ga2-securite-alimentaire` (Clostridium botulinum / toxine).

## Passe 2 — `cours/gastronomie.ts`, fin (`ga3-cuisines-ameriques` à `ga3-alimentation-futur`)

### [MOYEN] ✅ La bouillabaisse est demandée par une question et absente de son propre cours
- **Où** : question `prisma/seed/culture-g/gastronomie-3.ts:536` (notion `ga3-terroirs-france-3`) contre le cours `ga3-terroirs-france-3`, qui compte trois sections : « Le Nord et l'Est », « L'Ouest et le Sud-Ouest », « Le Massif central et les Alpes ».
- **Texte** : (question) « De quelle région la bouillabaisse est-elle emblématique ? » → « Marseille et la Provence ».
- **Problème** : le cours couvre neuf des dix questions de la notion — choucroute, tarte flambée, galette de sarrasin, far, cassoulet, piperade, aligot, fondue et la question de synthèse — mais **il ne dit pas un mot de la Provence ni de la bouillabaisse**. Le découpage géographique en trois sections saute purement et simplement le Sud-Est. C'est le seul cas du domaine où une question orpheline se cache **à l'intérieur** d'une notion pourvue d'un cours : le contrôle par slug ne le détecte pas, seule la lecture le voit.
- **Correction proposée** : ajouter au cours une quatrième section « Le Sud-Est », ou intégrer la bouillabaisse à la section « L'Ouest et le Sud-Ouest » renommée. Matière disponible dans le domaine : `gastronomie.ts:77` (« À l'origine un plat de pêcheurs, fait des poissons invendables, devenu un plat cher ») et le cours `ga2-fetes-traditions`, qui la donne déjà comme exemple de tradition codifiée à la fin du XIX<sup>e</sup> siècle.
- **Fait** : Ajouté une quatrième section « Le Sud-Est » au cours `ga3-terroirs-france-3`, consacrée à la bouillabaisse.

### [MOYEN] ✅ Le décret de 1993 : le cours `ga3-pains-monde` a raison contre la question `gastronomie.ts:141`
- **Où** : `cours/gastronomie.ts`, cours `ga3-pains-monde`, section « Le pain français et ses règles ».
- **Texte** : « La baguette de tradition française est définie par un décret de 1993 : elle ne peut contenir que de **la farine, de l'eau, du sel et de la levure ou du levain**, ne peut subir **aucune surgélation** et n'admet qu'une **liste très courte d'auxiliaires**. »
- **Problème** : aucun ici — c'est exactement l'article 2 du décret n° 93-1074, y compris la mention des auxiliaires tolérés. Ce cours est donc la source interne qui tranche définitivement le constat GRAVE sur `gastronomie.ts:141` (« Il impose aussi que le pain soit pétri, façonné et cuit sur le lieu de vente ») : la question contredit son propre domaine, et la formulation de remplacement est déjà écrite ici. Une réserve de vocabulaire tout de même : le décret définit le « **pain** de tradition française », pas la « baguette » — c'est un usage courant mais imprécis, et le cours pourrait le signaler.
- **Correction proposée** : dans le cours, remplacer la première phrase par « Le pain de tradition française — dont la baguette est la forme la plus courante — est défini par un décret de 1993 : […] ». Et reprendre cette définition dans `gastronomie.ts:141`.
- **Note** : l'inscription des « savoir-faire et culture de la baguette » au patrimoine immatériel **en 2022**, mentionnée à la section suivante, est exacte et n'apparaît nulle part ailleurs dans le domaine — c'est un des rares faits du corpus à n'être dit qu'une fois.
- **Fait** : Repris la remarque de vocabulaire : le cours `ga3-pains-monde` parle maintenant du « pain de tradition française — dont la baguette est la forme la plus courante ».

### [MOYEN] ✅ Roquefort : le cours `ga3-fromages-monde` ne mentionne pas 1925 du tout
- **Où** : `cours/gastronomie.ts`, cours `ga3-fromages-monde`, section « Les grandes familles ».
- **Texte** : « Le roquefort, fait de lait de brebis, est affiné dans les caves naturelles de Roquefort-sur-Soulzon […]. **C'est la plus ancienne appellation française, protégée par un arrêt du Parlement de Toulouse en 1666.** »
- **Problème** : le prédécesseur avait relevé la tension entre 1666 et 1925. La relecture précise le défaut : ce cours ne se contente pas de préférer 1666, **il ne mentionne pas 1925 une seule fois**, alors que six autres passages du domaine en font le fait à retenir sur le roquefort — dont le cours `ga-fromages-france`, dans le même fichier, à trente lignes d'écart. Un apprenant qui lit les deux cours du même fichier reçoit deux « premières » incompatibles, sans qu'aucun des deux textes ne mentionne l'existence de l'autre date.
- **Correction proposée** (validée par le cahier des charges AOP, qui cite les deux) : « Son nom est protégé depuis un arrêt du Parlement de Toulouse de 1666, qui réserve son affinage à la commune de Roquefort-sur-Soulzon ; une loi du 26 juillet 1925 en fait le premier fromage français doté d'une appellation d'origine au sens moderne. »
- **Fait** : Ajouté la mention de 1925 dans `ga3-fromages-monde`, comme pour le constat identique plus haut (même correction, un seul endroit à changer dans le code).

### [MINEUR] ⏭️ Vérification de couverture : les huit notions orphelines confirmées, et pas une de plus
Contrôle croisé des 54 slugs de notions des trois fichiers de questions contre les 46 clés de `cours/gastronomie.ts` : la liste du prédécesseur est **exacte et complète** — `ga-cuisine-francaise`, `ga-cuisines-monde`, `ga-pain-patisserie`, `ga3-arts-table`, `ga3-conservation`, `ga3-cuisine-technique`, `ga3-herbes-epices`, `ga3-produits-mer`. Aucun cours orphelin dans l'autre sens : les 46 cours correspondent tous à une notion existante. Rien à ajouter à ce constat, sinon la question de la bouillabaisse signalée ci-dessus, qui échappe à ce contrôle.
- **Fait** : Constat de contrôle, sans correction à apporter (hormis la bouillabaisse, déjà traitée séparément).

### [MINEUR] ⏭️ Ce que la relecture des cours a confirmé de solide
La seconde passe n'a rien trouvé à reprocher, sur le fond, à une quinzaine de cours du troisième lot, et plusieurs méritent d'être cités parce qu'ils font exactement ce que la consigne attend d'un cours : `ga3-cuisines-ameriques` démonte le récit de la feijoada « inventée par les esclaves » et tire de la nixtamalisation une leçon générale (« un aliment transféré sans sa technique de préparation cesse d'être le même aliment ») que `ga3-cuisine-afrique` reprend et relie à la détoxification du manioc ; `ga3-cafe-the` écarte la légende du berger Kaldi ; `ga3-bieres-monde` refuse le récit commode de l'IPA houblonnée pour le voyage aux Indes ; `ga3-vins-monde` explique ce que le jugement de Paris prouvait **et ne prouvait pas** ; `ga3-spiritueux` rappelle que les appellations garantissent une origine et un procédé, pas une qualité ; `ga2-alimentation-durable` nuance l'empreinte de l'élevage en distinguant pâturage extensif et engraissement au soja importé. Ces cours-là sont d'un niveau que les questions n'atteignent presque jamais.
- **Fait** : Constat purement informatif ; rien à corriger.

## Passe 2 — `heritage/culture-g/data/gastronomie.json` (55 questions, 3 cours, 15 sections)

### [GRAVE] Question 37 : l'explication contredit la bonne réponse qu'elle est censée expliquer
- **Où** : `heritage/culture-g/data/gastronomie.json`, question 37.
- **Texte** : « Que garantit le décret français de 1993 sur le pain de tradition française ? » → bonne réponse « **Qu'il ne contient ni additif ni surgélation, avec quatre ingrédients seulement** » — explication : « Le décret du 13 septembre 1993 réserve l'appellation de pain de tradition française aux pains **pétris, façonnés et cuits sur le lieu de vente**, sans avoir jamais été surgelés et sans additif. […] **Le même texte protège l'appellation de boulanger**, réservée à celui qui pétrit et cuit sur place. »
- **Problème** : la formulation précise du défaut, que la passe 1 n'avait pas isolée. **La bonne réponse est juste** — composition limitée, pas d'additif, pas de surgélation : c'est mot pour mot l'article 2 du décret. C'est **l'explication** qui est fausse, sur deux points : elle ajoute à la définition du pain de tradition une obligation qui relève de l'article 1<sup>er</sup> et du « pain maison », et elle attribue au décret de 1993 la protection du mot « boulanger », qui vient de la loi n° 98-405 du 25 mai 1998. Autrement dit, l'apprenant qui coche la bonne case lit ensuite un texte qui lui apprend le contraire de ce qu'il vient de valider. Une explication fausse sous une réponse juste est le pire cas de figure : elle ne se détecte pas par le corrigé.
- **Correction proposée** : « Le décret du 13 septembre 1993 réserve la dénomination de pain de tradition française aux pains sans additif et n'ayant subi aucune surgélation, dont la composition se limite à la farine de blé, à l'eau, au sel et à la levure ou au levain — quelques auxiliaires comme la farine de fève étant tolérés en très faible proportion. L'obligation d'être pétri, façonné et cuit sur le lieu de vente définit dans le même décret le "pain maison", et la protection du mot boulanger vient d'une loi de 1998. »
- **Note** : le même défaut existe dans `heritage/.../lecons/gastronomie/03.json`, section « La baguette, une invention récente », avec la même phrase.

### [GRAVE] Le troisième lot ne double pas seulement les deux premiers : il triple le cahier d'origine
La passe 1 avait comparé `gastronomie-3.ts` aux deux premiers fichiers du seed. La comparaison manquante est celle du **seed avec le cahier d'origine** : une grosse vingtaine des 55 questions de `gastronomie.json` ont un jumeau dans le seed, et une douzaine en ont **deux**. Relevé des triplets, question du cahier d'origine en tête :

| Cahier d'origine | Seed, lot 1 ou 2 | Seed, lot 3 |
|---|---|---|
| Q6 brigade de cuisine | `gastronomie.ts:66` | `gastronomie-3.ts:430` |
| Q9 repas gastronomique UNESCO 2010 | `gastronomie.ts:80` | `gastronomie-3.ts:472` |
| Q16 col tricolore du MOF | `gastronomie.ts:78` | `gastronomie-3.ts:444` |
| Q21 différence AOP / IGP | `gastronomie.ts:222` | `gastronomie-3.ts:380` **et** `:382` |
| Q25 présure | `gastronomie.ts:28` | `gastronomie-3.ts:224` |
| Q37 décret de 1993 | `gastronomie.ts:140` | `gastronomie-3.ts:252` |
| Q45 roux | `gastronomie.ts:122` | `gastronomie-3.ts:306` |
| Q47 cuisson sous vide | `gastronomie.ts:132` | `gastronomie-3.ts:302` |
| Q51 origine du caféier | `gastronomie.ts:168` | `gastronomie-3.ts:196` |
| Q53 couscous, quatre pays | `gastronomie.ts:98` | `gastronomie-3.ts:48` |
| Q55 bouillabaisse | `gastronomie.ts:76` | `gastronomie-3.ts:536` |

Et en doublet simple : Q10 (nouvelle cuisine, `gastronomie.ts:70` et `gastronomie-2.ts:178`), Q13 (Bocuse d'Or, `gastronomie-3.ts:446`), Q14 et Q15 (Michelin, `gastronomie-2.ts:170` et `:172`), Q22 (roquefort au lait de brebis, `gastronomie-3.ts:232`), Q28 (méthode traditionnelle, `gastronomie.ts:46`), Q31 (phylloxéra, `gastronomie.ts:52`), Q34 (cognac, `gastronomie-3.ts:176`), Q39 (pâte à choux, `gastronomie.ts:150`), Q40 (Paris-Brest, `gastronomie.ts:156`), Q44 (sauces mères, `gastronomie.ts:68`).
- **Problème** : sur onze sujets, l'apprenant rencontre la même question **trois fois** dans un domaine qu'il croit parcourir une seule. Et la version du cahier d'origine est presque toujours la meilleure des trois : elle est plus précise, mieux datée, et son explication apprend davantage — comparer Q47 (« Georges Pralus l'a mis au point vers 1974 pour la maison Troisgros, afin de réduire le retrait à la cuisson du foie gras ») à `gastronomie-3.ts:303` (« Georges Pralus l'a développée en France dans les années 1970 »).
- **Correction proposée** : la suppression des notions du troisième lot déjà préconisée règle la moitié du problème. Pour l'autre moitié, la règle devrait être : quand une question du seed double une question du cahier d'origine, **c'est la question du seed qui saute**, sauf démonstration contraire.

### [MOYEN] ✅ Tarte Tatin : l'énoncé pose la légende, l'explication la retire
- **Où** : `heritage/culture-g/data/gastronomie.json`, question 41.
- **Texte** : énoncé « Quelle tarte **doit son existence à une cuisson accidentelle** dans une auberge du Loir-et-Cher ? » → réponse « La tarte Tatin » — explication : « La tradition l'attribue aux sœurs Stéphanie et Caroline Tatin […]. **Le récit d'une erreur de cuisson rattrapée relève sans doute en partie de la légende commerciale.** »
- **Problème** : l'énoncé affirme comme un fait ce que l'explication qualifie de légende quatre lignes plus bas. C'est le même mécanisme que la question sur le rot poli de `gastronomie-2.ts:226`, mais ici il est plus grave, parce que **c'est l'énoncé lui-même** qui porte l'assertion douteuse : l'apprenant ne peut répondre juste qu'en acceptant la légende, et on la lui retire ensuite. Cette question fait donc exactement le contraire de ce que ce cahier fait très bien partout ailleurs — Marie Harel « reconstruction du XIX<sup>e</sup> siècle » (Q24), Dom Pérignon « légende postérieure » (Q29), le Viandier « enrichi plus qu'inventé » (Q1), le kipferl viennois sans le siège de 1683 (Q38).
- **Correction proposée** : énoncé « Quelle tarte aux pommes se cuit à l'envers, la pâte posée sur les fruits ? » — la réponse reste la tarte Tatin, l'explication garde son démontage de la légende, et la question cesse de reposer sur ce qu'elle réfute.
- **Fait** : Réécrit l'énoncé de la question 41 (`heritage/culture-g/data/gastronomie.json`) : « Quelle tarte aux pommes se cuit à l'envers, la pâte posée sur les fruits ? », qui ne repose plus sur la légende que l'explication dément.

### [MOYEN] ✅ Combien de restaurants à Paris à la Révolution ? Les deux corpus se contredisent d'un facteur dix
- **Où** : `heritage/culture-g/data/gastronomie.json`, cours « Une histoire de la cuisine française », section « Les Lumières et l'invention du restaurant » — contre `cours/gastronomie.ts`, cours `ga2-restauration`, section « Un bouillon devenu un lieu ».
- **Texte** : (cahier d'origine) « Paris compte **une centaine de restaurants** à la fin de l'Ancien Régime et **plusieurs milliers** sous la Restauration. » — (cours du seed) « Paris compte **quelques dizaines** de restaurants avant 1789 et **plusieurs centaines** vingt ans plus tard. »
- **Problème** : les deux textes racontent le même épisode — l'essor des restaurants parisiens après 1789 — avec des ordres de grandeur qui diffèrent d'un facteur dix aux deux bornes. Ce n'est pas un désaccord d'appréciation : ce sont deux chiffrages incompatibles du même phénomène, dans deux fichiers que l'apprenant peut lire l'un après l'autre. Les estimations historiques usuelles se situent autour d'une centaine d'établissements en 1789 et de plus de deux mille vers 1820, ce qui donne raison au cahier d'origine.
- **Correction proposée** : aligner le cours du seed sur le cahier d'origine — « Paris compte une centaine de restaurants à la veille de la Révolution et plusieurs milliers sous la Restauration. »
- **Fait** : Aligné le cours `ga2-restauration` sur le cahier d'origine, qui avait les bons ordres de grandeur (« une centaine […] plusieurs milliers »).

### [MINEUR] ⏭️ Question 53 : la bonne réponse est la seule à nommer quoi que ce soit
- **Où** : `heritage/culture-g/data/gastronomie.json`, question 53.
- **Texte** : « Combien de pays ont porté ensemble, en 2020, l'inscription du couscous au patrimoine immatériel ? » → choix : « Deux », « **Quatre : Algérie, Maroc, Mauritanie et Tunisie** », « Six pays du pourtour méditerranéen », « Un seul, l'Algérie ».
- **Problème** : trois propositions sur quatre donnent un nombre nu ou vague ; la bonne est la seule à énumérer. C'est le défaut de forme que la consigne signale — la bonne réponse est la plus précise, donc identifiable sans rien savoir du couscous. La question porte d'ailleurs sur un nombre, que le libellé de la bonne réponse noie sous une liste.
- **Correction proposée** : uniformiser les quatre propositions — « Deux : Algérie et Maroc », « Quatre : Algérie, Maroc, Mauritanie et Tunisie », « Six, dont l'Égypte et la Libye », « Un seul, l'Algérie ». L'énumération cesse alors d'être un indice.
- **Fait** : Vérifié : le problème avait déjà disparu — les quatre choix de la question 53 (`heritage/culture-g/data/gastronomie.json`) nomment déjà chacun des pays ou une région précise ; aucune modification nécessaire.

### [MINEUR] ✅ Le Paris-Brest : « vers 1910 » ici, « en 1910 » dans le seed
- **Où** : `heritage/culture-g/data/gastronomie.json`, question 40, contre `prisma/seed/culture-g/gastronomie.ts:156`.
- **Texte** : (cahier d'origine) « Il **aurait** été créé **vers 1910** par un pâtissier de Maisons-Laffitte » — (seed) « Quelle pâtisserie française **a été créée en 1910** pour une course cycliste ? »
- **Problème** : le cahier d'origine emploie deux marques de prudence — le conditionnel et « vers » — que le seed supprime toutes les deux pour en faire une date d'énoncé. Le seed exige donc une précision que sa propre source refuse de donner. Le même écart se retrouve sur d'autres faits repris du cahier au seed, et c'est un mécanisme à surveiller lors des corrections : à chaque reprise, les couches de prudence tombent.
- **Correction proposée** : « Quelle pâtisserie française, apparue vers 1910, doit sa forme à une course cycliste ? »
- **Fait** : Corrigé `gastronomie.ts:156` : « Quelle pâtisserie française, apparue vers 1910, doit sa forme à une course cycliste ? », aligné sur la prudence du cahier d'origine.

---

# Ce que la seconde passe a ajouté

La première passe n'avait pas eu lieu jusqu'au bout et la seconde pas du tout. Ce que la relecture complète a fait apparaître, et qui n'était **pas** dans le rapport initial :

1. **Le défaut structurel des astuces** (`tip` de `notion()`) : dans **dix-neuf notions** des trois fichiers de questions, l'astuce affichée avec la notion est la réponse littérale d'une de ses questions — parfois mot pour mot, parfois de deux questions à la fois. C'est le constat le plus lourd de la passe 2, et il ne se voit qu'en lisant l'astuce et les questions ensemble.
2. **Trois légendes présentées comme des faits que le dépôt réfute ailleurs** : le champ gardé de Parmentier (`gastronomie-2.ts:19` **et** cours `ga2-histoire-alimentation`, contre la leçon 08), les clous de girofle de Terqa (leçon 09), la cuisson accidentelle de la tarte Tatin (heritage Q41, contre sa propre explication).
3. **Une quatrième chronologie de la fourchette**, dans le cours `ga2-culture-table-monde`, qui porte le total à quatre versions incompatibles dans un même domaine.
4. **Trois notions de doublons supplémentaires** dans `gastronomie-3.ts` (`ga3-restauration-metiers`, `ga3-histoire-repas`, `ga3-alimentation-futur`), après la ligne 440 où la passe 1 s'était arrêtée — dont un couple question/réponse/explication **identique** entre `:562` et `gastronomie-2.ts:484`.
5. **La duplication seed ↔ cahier d'origine**, jamais examinée : onze sujets posés trois fois, une dizaine posés deux fois.
6. **La distinction DLC/DDM répétée huit fois** dans cinq fichiers.
7. **Deux questions dont l'explication désavoue la réponse** : le rot poli (`gastronomie-2.ts:226`) et la tarte Tatin (heritage Q41) ; et **une question dont l'explication contredit la bonne réponse** (heritage Q37).
8. **Deux erreurs de fait non repérées** : l'Orient-Express « Paris-Constantinople à partir de 1883 » (dans la question **et** dans le cours) et « le mot légume n'a aucune définition botanique » (cours `ga2-legumes-fruits`).
9. **Un QCM à deux réponses défendables** : la ligne Corolle et le New Look de Dior 1947 — et le procédé du « seul/seule/seuls » ajouté pour disqualifier un distracteur vrai, relevé trois fois.
10. **Une question orpheline invisible au contrôle par slug** : la bouillabaisse, demandée par `gastronomie-3.ts:536` et absente du cours `ga3-terroirs-france-3` qui couvre pourtant ses neuf autres questions.
11. **Quatre contradictions internes de chiffres** : le plafond de charcuterie (leçon 06 contre leçon 11), l'aquaculture (seed contre leçon 07), le nombre de restaurants parisiens (cahier d'origine contre cours du seed), le sucre d'une canette (question contre sa propre explication et contre le cours).
12. **Les quinze vérifications en ligne**, qui ont confirmé six constats, corrigé la formulation de quatre autres, en ont aggravé deux, en ont infirmé un (le « service compris » de 1987 est exact) et en ont ajouté un nouveau (les conservatoires botaniques, passés de onze à douze en 2025).

---

# Ce qui est sain

Le jugement du prédécesseur se confirme et se précise après relecture complète : **le problème du domaine n'est pas l'ignorance, c'est la duplication et la perte de prudence à chaque recopie.**

Le cahier d'origine (`heritage/`) est la meilleure partie du corpus, et de loin. Sur cinquante-cinq questions, il ne se trompe qu'une fois de manière nette — le décret de 1993 —, il date ce qu'il avance, il attribue ses citations, et surtout il désamorce méthodiquement les légendes : le *Viandier* « enrichi plus qu'inventé » par Taillevent, Marie Harel et le camembert, Dom Pérignon et la bulle anglaise décrite plus tôt par la Royal Society, le kipferl viennois sans le siège de 1683, la toque de Carême « selon la tradition », le « prince des gastronomes » rendu à Curnonsky, la mirepoix qui « viendrait » du duc. Ses onze leçons sont d'un niveau constant, avec une mention pour la 09 (épices), la 10 (eaux-de-vie) et la 11 (conservation), qui expliquent des mécanismes au lieu de réciter des faits.

Les cours du seed valent presque aussi bien, et plusieurs sont remarquables : `ga2-epices` (la muscade échangée contre Manhattan, la capsaïcine qui dissuade les mammifères sans gêner les oiseaux), `ga2-legumes-fruits` (« un fruit cueilli trop tôt s'attendrira sans jamais devenir sucré »), `ga2-cuisine-technique-froid` (« on ne stérilise rien, on sélectionne »), `ga3-cuisines-ameriques` et `ga3-cuisine-afrique` (« un aliment transféré sans sa technique de préparation cesse d'être le même aliment », énoncé pour la nixtamalisation et repris pour le manioc), `ga3-vins-monde` (ce que le jugement de Paris prouvait et ne prouvait pas), `ga2-guides-critique` (« la question n'est pas de savoir si la critique est objective — elle ne l'est pas — mais si elle est honnête sur ce qu'elle fait »).

Côté questions, les notions `ga2-epices`, `ga2-legumes-fruits`, `ga2-cuisine-technique-froid`, `ga2-securite-alimentaire`, `ga2-economie-alimentaire`, `ga3-cuisines-ameriques` et `ga3-cuisine-afrique` tiennent la route de bout en bout, distracteurs compris. Les explications y apprennent réellement quelque chose de plus que la réponse, ce qui est la règle que se donne `commun.ts` et que le troisième lot a cessé de respecter.

Ce qu'il faut retenir pour la correction : **supprimer neuf notions de `gastronomie-3.ts` et une vingtaine de questions du seed qui doublent le cahier d'origine réglerait à lui seul la moitié des constats de ce rapport**, doublons comme fautes d'accord énoncé/réponse. Le reste tient en une douzaine d'erreurs de fait, dont cinq se recopient d'un fichier à l'autre et doivent donc être corrigées partout à la fois : le décret de 1993, le sel du jambon de Bayonne, l'aire du cognac, la fourchette de Catherine de Médicis et le champ gardé de Parmentier.
