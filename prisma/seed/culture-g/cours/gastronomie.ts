/** Gastronomie et art de vivre, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_GASTRONOMIE: LotCours = {
  "ga-fromages-france": [
    ["Huit familles, une seule logique", `Un fromage ne se classe ni par sa région ni par son lait, mais par sa technique de fabrication. On distingue habituellement huit familles : pâtes fraîches, pâtes molles à croûte fleurie, pâtes molles à croûte lavée, pâtes pressées non cuites, pâtes pressées cuites, pâtes persillées, pâtes filées et fromages de chèvre, ces derniers étant rangés à part par tradition plus que par technique.

Deux critères font l'essentiel du classement. La pâte est-elle pressée pour en extraire le petit-lait, et le caillé est-il chauffé au-delà de cinquante degrés ? Une pâte pressée cuite, comme le comté ou le beaufort, supporte de longs affinages et se conserve des mois ; une pâte pressée non cuite, comme le saint-nectaire ou la tomme, reste plus souple et plus courte en garde.`],
    ["Moisissures et croûtes", `Un fromage à pâte persillée est ensemencé d'une moisissure du genre Penicillium, qui forme les veines bleues caractéristiques. Elle a besoin d'air pour se développer : c'est pourquoi la meule est perforée d'aiguilles pendant l'affinage. Le roquefort, fabriqué au lait de brebis et affiné dans les caves naturelles de Roquefort-sur-Soulzon, en est l'exemple le plus connu ; il a été en 1925 le premier fromage français à obtenir une appellation d'origine.

Un fromage à croûte lavée est frotté régulièrement à l'eau salée, parfois additionnée d'alcool ou de marc, pendant l'affinage. Ce lavage favorise une flore de surface, le ferment du rouge, qui donne à ces fromages leur couleur orangée et leur odeur puissante : munster, époisses, maroilles, livarot.`],
    ["De la présure à la cave", `Tout commence par la coagulation du lait. La présure, enzyme extraite de la caillette des jeunes ruminants, fait passer la caséine de l'état dispersé à l'état de gel. Des présures microbiennes ou d'origine végétale permettent aujourd'hui de fabriquer des fromages sans produit animal.

L'affinage est la maturation contrôlée en cave, où température, humidité et flores font évoluer la pâte pendant des semaines ou des années. L'appellation d'origine protégée, ou AOP, est le signe européen qui lie un fromage à une aire délimitée et à un cahier des charges : toutes les étapes doivent y avoir lieu. Une réserve sanitaire enfin : les fromages au lait cru sont déconseillés aux femmes enceintes, en raison du risque de listériose, la bactérie survivant au froid.`,
      { type: "tableau", titre: "Reconnaître les familles", colonnes: ["Famille", "Ce qui la définit", "Exemples"], lignes: [
        ["Pâte molle à croûte fleurie", "Fleur blanche de Penicillium en surface", "Camembert, brie"],
        ["Pâte molle à croûte lavée", "Croûte frottée à la saumure", "Munster, époisses"],
        ["Pâte pressée non cuite", "Caillé pressé, non chauffé", "Saint-nectaire, tomme"],
        ["Pâte pressée cuite", "Caillé chauffé au-delà de 50 °C", "Comté, beaufort"],
        ["Pâte persillée", "Ensemencée de moisissures bleues", "Roquefort, bleu d'Auvergne"],
      ] }],
  ],

  "ga-vin": [
    ["Du raisin au vin", `La couleur d'un vin ne vient pas de la pulpe du raisin, presque toujours incolore, mais de la peau. C'est la macération du jus avec les peaux qui donne le rouge ; sans elle, un raisin noir donne un vin blanc. Le champagne, majoritairement issu de cépages noirs, en est la démonstration quotidienne.

La fermentation alcoolique transforme le sucre du raisin en alcool sous l'action de levures, avec dégagement de gaz carbonique. Les tanins, eux, sont des composés phénoliques extraits des peaux, des pépins et parfois du bois du fût : ils donnent au vin sa structure, cette sensation d'astringence qui assèche la bouche, et lui permettent de vieillir.`],
    ["Cépages et terroirs", `Le pinot noir domine les grands rouges de Bourgogne : cépage exigeant, sensible au climat, il donne des vins plus légers de couleur mais très aromatiques. À Bordeaux, la tradition est à l'assemblage, autour du cabernet sauvignon et du merlot, auxquels s'ajoutent le cabernet franc et quelques autres.

Le terroir désigne l'ensemble formé par un sol, un climat et le savoir-faire attaché à un lieu. C'est la notion qui fonde le système français des appellations : elle affirme qu'un même cépage ne donne pas le même vin selon l'endroit où il pousse et la main qui le travaille. Le millésime, lui, désigne simplement l'année de récolte des raisins.`],
    ["Bulles, crises et alternatives", `Le champagne doit ses bulles à la méthode traditionnelle : après une première fermentation, le vin est mis en bouteille avec du sucre et des levures, et une seconde fermentation s'y produit, emprisonnant le gaz carbonique. Cette méthode se pratique aussi ailleurs, mais le nom de champagne est réservé à l'appellation.

Le vignoble européen a failli disparaître à la fin du XIXe siècle : le phylloxéra, un puceron venu d'Amérique du Nord, détruit les racines des vignes européennes à partir de 1863. La solution a été de greffer les cépages européens sur des porte-greffes américains résistants — c'est encore ainsi qu'on plante aujourd'hui. Plus récemment, la biodynamie propose une viticulture suivant un cahier des charges qui ajoute au bio des préparations spécifiques et un calendrier lunaire ; ses résultats agronomiques font débat, sa diffusion est réelle.`],
  ],

  "ga-techniques-cuisine": [
    ["Ce qui donne le goût", `Saisir une viande ne scelle aucun jus : l'idée, popularisée au XIXe siècle, a été démentie par l'expérience. Ce que la saisie produit, c'est la réaction de Maillard, une réaction entre les sucres et les acides aminés qui se déclenche vers cent quarante degrés et engendre des centaines de composés aromatiques en même temps qu'un brunissement. C'est elle qui donne son goût à la croûte du pain, au café torréfié, à la viande grillée.

Il ne faut pas la confondre avec la caramélisation, qui est la dégradation des sucres seuls sous l'effet de la chaleur, sans intervention de protéines. Les deux se produisent souvent ensemble et à des températures voisines.`],
    ["Maîtriser la chaleur", `La cuisson à basse température consiste à cuire longtemps à une température maîtrisée, proche de celle visée à cœur. Les fibres se contractent moins, la viande perd moins d'eau et reste tendre. La cuisson sous vide en est la forme la plus précise : l'aliment est enfermé dans un sachet hermétique et plongé dans un bain régulé au demi-degré ; elle a été mise au point en France dans les années 1970 par Georges Pralus.

Blanchir un légume, c'est le plonger brièvement dans l'eau bouillante puis le refroidir aussitôt : l'opération fixe la couleur en désactivant les enzymes responsables du brunissement. Et laisser reposer une viande après cuisson permet aux jus, chassés vers le centre par la chaleur, de se redistribuer au lieu de s'écouler à la découpe.`],
    ["Lier, émulsionner, récupérer", `Un roux est un mélange cuit de farine et de matière grasse, servant à lier une sauce ; sa couleur, blanche, blonde ou brune, dépend du temps de cuisson et détermine son goût autant que son pouvoir épaississant.

Une émulsion est la dispersion stable d'un liquide dans un autre qui ne se mélange pas à lui : l'huile dans l'eau du jaune d'œuf pour la mayonnaise, où la lécithine sert d'agent stabilisant. Monter une sauce au beurre consiste à incorporer du beurre froid en fouettant hors du feu : c'est encore une émulsion, que la chaleur ferait retomber. Déglacer, enfin, c'est verser un liquide dans une poêle chaude pour dissoudre les sucs caramélisés collés au fond — c'est là que se trouve l'essentiel des arômes développés pendant la cuisson.`],
  ],

  "ga-boissons": [
    ["Thé et café", `Le thé vert et le thé noir viennent du même arbuste, Camellia sinensis : seule l'oxydation des feuilles les distingue. Le thé vert est chauffé rapidement après la cueillette pour l'empêcher, le thé noir est au contraire complètement oxydé, l'oolong ne l'est que partiellement.

Le caféier est originaire d'Éthiopie, d'où il gagne le Yémen puis le monde. Deux espèces dominent la production : l'arabica, plus aromatique, plus fragile et moins riche en caféine, qui représente un peu plus de la moitié du marché, environ 56 à 57 %, une part qui recule au profit du robusta, plus rustique, plus amer et plus caféiné. Le grain vert n'a presque aucun arôme : tout se joue à la torréfaction.`],
    ["La bière", `La bière est la boisson fermentée la plus consommée au monde. Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur — c'est cette dernière propriété qui a d'abord justifié son emploi. En Bavière, l'édit de pureté (Reinheitsgebot) de 1516 limitait déjà la bière à l'orge, au houblon et à l'eau ; la levure, dont le rôle dans la fermentation était encore inconnu, n'y figure pas.

La distinction majeure entre bières tient à la levure et à la température : la fermentation haute, autour de vingt degrés, donne les ales, plus aromatiques ; la fermentation basse, autour de dix degrés, donne les lagers, dont la pilsner, style né en 1842 qui représente aujourd'hui l'essentiel de la production mondiale.`],
    ["Les spiritueux", `Un spiritueux naît d'un liquide déjà fermenté, que la distillation concentre : l'alcool s'évaporant avant l'eau, on le sépare par évaporation puis condensation. La matière première change tout. Le whisky écossais est fait d'orge maltée, éventuellement mêlée d'autres céréales ; le cognac vient du vin blanc, le calvados du cidre, le rhum de la canne à sucre — de sa mélasse le plus souvent, de son jus frais pour le rhum agricole.

Le vieillissement en fût modifie couleur et arômes par échange avec le bois. Une partie du volume s'évapore chaque année à travers les douelles : c'est la part des anges, qui représente couramment deux pour cent par an et explique le prix des vieilles bouteilles.`],
  ],

  "ga-nutrition": [
    ["Les macronutriments", `Trois familles fournissent l'énergie : les glucides, les lipides et les protéines. Un gramme de glucides ou de protéines apporte environ quatre kilocalories, un gramme de lipides neuf — plus du double, ce qui explique la densité énergétique des aliments gras.

Les protéines sont faites d'acides aminés, dont neuf sont dits essentiels chez l'adulte : l'organisme ne sait pas les fabriquer et doit les trouver dans l'alimentation. Côté lipides, les acides gras oméga-3 sont des polyinsaturés essentiels, apportés notamment par les poissons gras, les noix et l'huile de colza. À l'inverse, les acides gras trans industriels, produits par hydrogénation partielle des huiles végétales, sont associés à un risque cardiovasculaire accru et ont été fortement restreints dans plusieurs pays.`],
    ["Fibres, vitamines et le reste", `Les fibres alimentaires sont des glucides que l'intestin grêle ne digère pas. Elles régulent le transit, ralentissent l'absorption des sucres et nourrissent le microbiote du côlon. La plupart des populations occidentales en consomment nettement moins que les apports recommandés.

Les vitamines sont indispensables en très petites quantités. La vitamine D fait exception à la règle de l'apport alimentaire : la peau la synthétise sous l'effet du rayonnement ultraviolet, ce qui explique que les carences soient plus fréquentes en hiver et aux latitudes élevées.`],
    ["Lire une étiquette", `Deux outils tentent d'éclairer le consommateur, sur deux axes différents. Le Nutri-Score classe les aliments de A à E selon leur qualité nutritionnelle, en combinant nutriments à limiter et éléments favorables. La classification NOVA, elle, ne juge pas la composition mais le degré de transformation, et isole en particulier les aliments ultra-transformés, issus de procédés industriels et de nombreux additifs. Un produit peut être bien noté par l'un et mal par l'autre.

Attention enfin aux allégations réglementées, dont le sens juridique est plus étroit que le sens courant : sans sucres ajoutés signifie qu'aucun sucre n'a été ajouté au cours de la fabrication, mais le produit peut contenir des sucres naturellement présents, parfois en quantité importante. Aucun aliment n'est bon ou mauvais en soi : c'est la ration globale, sur la durée, qui compte.`],
  ],

  "ga-agriculture-alimentation": [
    ["Les signes de qualité", `Le label agriculture biologique européen garantit un mode de production : sans pesticides de synthèse, sans engrais chimiques de synthèse, sans OGM, avec des règles précises sur l'élevage. Il porte sur la façon de produire, non sur la qualité nutritionnelle du produit fini — c'est la confusion la plus répandue à son sujet.

Le Label rouge français atteste au contraire une qualité gustative supérieure, établie par comparaison avec un produit courant de référence. L'indication géographique protégée, ou IGP, garantit un lien avec un territoire pour au moins une étape de production, ce qui la rend moins exigeante que l'AOP, qui impose que toutes les étapes aient lieu dans l'aire délimitée.`],
    ["Cultiver autrement", `La rotation des cultures consiste à alterner des espèces différentes sur une même parcelle d'une année sur l'autre. Elle casse les cycles des parasites, équilibre les prélèvements dans le sol et, lorsqu'elle inclut des légumineuses, enrichit la terre en azote sans engrais de synthèse.

L'agroécologie va plus loin : elle cherche à s'appuyer sur les régulations naturelles des écosystèmes — auxiliaires prédateurs des ravageurs, couverts végétaux, haies — plutôt que sur des intrants. Côté distribution, une AMAP lie des consommateurs à un producteur par un engagement pris à l'avance sur toute une saison : les adhérents partagent ainsi avec lui le risque climatique, ce qui distingue le dispositif d'un simple abonnement à des paniers.`],
    ["Le cadre et le gaspillage", `La politique agricole commune est le cadre européen de soutien et de régulation de l'agriculture. Lancée en 1962 pour garantir l'autosuffisance alimentaire du continent, elle représente encore une part importante du budget de l'Union et oriente fortement les choix des exploitations.

Le gaspillage se situe à des étapes très différentes selon les pays. Dans les pays à faible revenu, l'essentiel des pertes survient après la récolte, faute de stockage, de chaîne du froid et de transport ; dans les pays riches, elles se concentrent à la distribution et surtout à la consommation. En France, la loi Garot de 2016 interdit aux grandes surfaces de jeter les invendus alimentaires encore consommables et les oblige à proposer une convention de don. Encore faut-il lire les dates : la date limite de consommation engage la sécurité sanitaire, la date de durabilité minimale — à consommer de préférence avant — ne concerne que la qualité.`],
  ],

  "ga-art-table": [
    ["Une histoire du couvert", `La fourchette n'a rien d'évident. Venue d'Italie, elle ne s'impose à la table française qu'au XVIIe siècle, après avoir été longtemps jugée efféminée et affectée : on mangeait avec les doigts et avec son propre couteau, que chacun apportait.

Le service lui-même a changé de forme. Le service à la française disposait simultanément tous les plats d'un même service sur la table, dans une mise en scène de l'abondance qui laissait les mets refroidir. Le service à la russe, adopté au XIXe siècle et devenu la norme, apporte les plats les uns après les autres, à bonne température, dans l'ordre voulu par le cuisinier.`],
    ["Dresser une table", `Le couvert classique français place la fourchette à gauche de l'assiette, le couteau et la cuillère à droite, la lame du couteau tournée vers l'assiette. Particularité nationale : les dents de la fourchette sont tournées vers la nappe, à l'inverse de l'usage anglais — la tradition veut que les armoiries gravées au dos du manche soient ainsi visibles.

Les verres s'alignent au-dessus et à droite de l'assiette, du plus grand au plus petit. Le verre à eau, le plus grand, se place le plus à gauche de la rangée, suivi des verres à vin dans l'ordre du service. Quand plusieurs couverts sont dressés, on les utilise de l'extérieur vers l'intérieur, en suivant l'ordre des plats.`],
    ["Recevoir et servir", `Le protocole du placement à table obéit à des règles précises : alternance des femmes et des hommes, séparation des couples, attribution des places d'honneur à la droite des maîtres de maison, et respect des préséances de rang dans les repas officiels. La diplomatie en a fait une science.

Au restaurant, le menu à la carte laisse un choix libre de plats tarifés individuellement, par opposition au menu à prix fixe. Le sommelier est le professionnel chargé de la cave, du conseil et du service du vin ; il peut proposer une carafe de décantation, récipient qui sert à séparer un vin âgé de son dépôt et, accessoirement, à l'aérer. Quant au pourboire, il est en France une gratification entièrement facultative : le service est compris dans le prix affiché depuis 1987.`],
  ],

  "ga-mode-textile": [
    ["La haute couture, un statut juridique", `L'appellation haute couture n'est pas un compliment mais un label juridique, protégé par la loi française et attribué chaque année par une commission auprès du ministère de l'Industrie. Une maison doit satisfaire des critères précis : atelier à Paris, effectif minimal, présentation de deux collections par an, réalisation sur mesure pour la clientèle. Une poignée de maisons seulement y ont droit.

Le fondateur du système est Charles Frederick Worth, couturier anglais installé à Paris au XIXe siècle : il est le premier à imposer ses créations plutôt qu'à exécuter les commandes, à signer ses modèles et à les présenter sur des mannequins vivants.`],
    ["Deux révolutions de silhouette", `Gabrielle Chanel libère la silhouette féminine dans les années 1920 : abandon du corset, taille basse, jersey emprunté aux sous-vêtements masculins, jupes raccourcies, noir sorti du deuil. Le vêtement suit un mouvement social plus large, celui de femmes qui travaillent et se déplacent.

Christian Dior prend le contre-pied en 1947 avec la collection surnommée New Look par la presse américaine : taille marquée, épaules arrondies, jupes amples consommant plusieurs mètres de tissu. Dans une Europe encore rationnée, l'opulence fait scandale autant qu'elle séduit. Le prêt-à-porter, apparu dans les années 1950, change ensuite d'échelle : des vêtements produits en série selon des tailles standardisées, qui démocratisent la mode.`],
    ["L'industrie et ses coûts", `La fast fashion pousse la logique à l'extrême : renouvellement très rapide des collections, prix très bas, production délocalisée. Le modèle a été brutalement mis en cause le 24 avril 2013 par l'effondrement du Rana Plaza au Bangladesh, immeuble abritant des ateliers de confection, qui a fait plus de mille cent morts.

Les matières posent leur propre question. Le coton, fibre naturelle la plus utilisée au monde, demande beaucoup d'eau et de pesticides. La viscose est une fibre artificielle, c'est-à-dire fabriquée par transformation chimique d'une matière naturelle, la cellulose de bois. Les fibres synthétiques, elles, issues du pétrole, libèrent au lavage des microplastiques que les stations d'épuration retiennent mal et qui se retrouvent dans les milieux aquatiques.`],
  ],

  "ga-jardin-nature": [
    ["Deux idées du jardin", `Le jardin à la française organise la nature par la géométrie : composition symétrique, broderies de buis taillé, bassins, et surtout une perspective qui structure tout l'espace depuis la façade du château. André Le Nôtre en porte l'expression la plus aboutie à Versailles. L'intention est explicite : montrer la maîtrise de l'homme sur la nature.

Le jardin à l'anglaise, apparu au XVIIIe siècle, prend le contre-pied. Il imite une nature idéalisée, avec des tracés irréguliers, des bosquets, des étendues d'eau aux rives sinueuses et des fabriques disséminées. La nature y paraît libre, alors qu'elle est composée avec autant de soin que dans l'autre modèle.`],
    ["Nourrir le sol", `Le compost est un amendement obtenu par décomposition contrôlée de matières organiques sous l'action de micro-organismes. Il apporte de l'humus, améliore la structure du sol et sa capacité de rétention d'eau, plus qu'il n'apporte d'éléments nutritifs.

Le paillage consiste à couvrir le sol d'une couche de matière — paille, broyat, tontes, feuilles — pour limiter l'évaporation, freiner la levée des herbes indésirables et protéger la vie du sol. Côté plantes, une vivace vit plusieurs années et repousse chaque saison à partir de ses organes souterrains, contrairement à une annuelle qui meurt après avoir produit ses graines. La rusticité désigne la capacité d'une plante à supporter le froid, exprimée par une température minimale.`],
    ["Multiplier et faire système", `Le greffage assemble un porte-greffe, qui fournit les racines, et un greffon, qui donnera la partie aérienne : les deux fusionnent en une seule plante. La technique permet de reproduire fidèlement une variété fruitière, de maîtriser la vigueur et de contourner des maladies du sol — c'est elle qui a sauvé le vignoble européen du phylloxéra.

La pollinisation croisée est le transport du pollen d'une plante vers une autre de la même espèce ; elle assure le brassage génétique et, chez beaucoup d'arbres fruitiers, conditionne la fructification. Une plante mellifère fournit aux abeilles nectar et pollen. La permaculture, enfin, n'est pas une technique mais une méthode de conception : elle vise des systèmes cultivés durables et autonomes, en organisant les interactions entre éléments plutôt qu'en optimisant chacun séparément.`],
  ],

  "ga-voyage-tourisme": [
    ["Du Grand Tour au voyage organisé", `Le tourisme moderne descend d'une pratique aristocratique : le Grand Tour, voyage de formation à travers l'Europe — Italie surtout — que les jeunes nobles britanniques accomplissaient au XVIIIe siècle pour parfaire leur éducation. Le mot tourisme en vient directement.

Le voyage de masse naît un siècle plus tard. En 1841, le Britannique Thomas Cook affrète un train pour conduire un groupe à un meeting antialcoolique : c'est le premier voyage organisé, et l'acte de naissance de l'agence de voyages. Le luxe suit avec l'Orient-Express, mis en service en 1883 : il faut d'abord un bac sur le Danube et un bateau sur la mer Noire pour rejoindre Constantinople, que la voie ferrée n'atteint qu'en 1889. Il devient le symbole du voyage élégant. En France, la démocratisation vient de la loi : les congés payés, institués en 1936, ouvrent les vacances à des millions de salariés qui n'en avaient jamais pris.`],
    ["Un phénomène de masse", `La France est le premier pays du monde par le nombre de touristes internationaux accueillis — près de cent millions par an — mais pas par les recettes, où les États-Unis devancent largement : beaucoup de visiteurs traversent la France ou n'y séjournent que brièvement. Le classement par fréquentation et le classement par revenus ne disent donc pas la même chose.

Cette masse a ses effets. Le surtourisme désigne une fréquentation qui dépasse la capacité d'accueil d'un lieu : logements confisqués par la location de courte durée, commerces de proximité remplacés, sites dégradés. Venise, Barcelone ou Dubrovnik ont mis en place des mesures de régulation — quotas, taxes d'entrée, encadrement des locations.`],
    ["Voyager autrement, et les formalités", `L'écotourisme propose un tourisme centré sur la nature, qui limite ses impacts et fait bénéficier les populations locales des retombées. Le terme est souvent utilisé abusivement à des fins commerciales : le critère du bénéfice local est celui qui distingue un projet sérieux d'un simple argument de vente.

Côté formalités, un visa est une autorisation d'entrée délivrée par le pays de destination, distincte du passeport, qui est un document d'identité délivré par le pays d'origine. L'espace Schengen est une zone de libre circulation sans contrôle aux frontières intérieures, qui regroupe la plupart des pays de l'Union européenne et quelques autres. Enfin, le décalage horaire, au sens physiologique, est une désynchronisation de l'horloge biologique après un vol transméridien : l'adaptation demande environ un jour par fuseau franchi, et se fait plus difficilement vers l'est.`],
  ],

  "ga2-histoire-alimentation": [
    ["Ce que mangeaient les paysans", `L'image d'une France médiévale nourrie de pain blanc est fausse. La base de l'alimentation paysanne était le seigle et les céréales secondaires — orge, avoine, épeautre, millet — bien plus que le froment, réservé aux tables aisées et aux villes. Le pain noir, dense et lourd, fournissait l'essentiel des calories, complété par des bouillies, des légumes secs et très peu de viande.

Cette alimentation était monotone et vulnérable. Une mauvaise récolte suffisait à provoquer une disette — pénurie alimentaire grave mais sans mortalité massive — et deux ou trois mauvaises récoltes consécutives une famine. Le seigle apportait en outre un danger particulier : parasité par l'ergot, il provoquait des intoxications collectives avec convulsions et gangrène, le « mal des ardents » du Moyen Âge.

L'alimentation quotidienne européenne a plus changé en cent cinquante ans qu'en mille ans auparavant. C'est le fait central de cette histoire, et il tient à la conjonction de nouvelles plantes, de nouveaux transports et de nouvelles techniques de conservation.`],
    ["Les plantes venues d'Amérique", `L'échange colombien a apporté à l'Europe la pomme de terre, la tomate, le maïs, le haricot, le piment, le cacao et la dinde. Leur adoption fut lente, et souvent méfiante.

La tomate a longtemps été cultivée en Europe comme plante ornementale : appartenant à la famille des solanacées, comme la belladone et la mandragore, elle était soupçonnée d'être toxique. Il a fallu près de deux siècles pour qu'elle entre dans les cuisines, d'abord en Italie et en Espagne.

La pomme de terre a suivi le même parcours et fut imposée en France par Parmentier au XVIIIe siècle, à grand renfort de mise en scène — les champs gardés le jour et laissés libres la nuit pour susciter le vol, les fleurs offertes au roi. Elle a transformé l'alimentation européenne : bon rendement, culture possible sur des sols médiocres, récolte échelonnée, et surtout une plante qui reste en terre à l'abri des armées de passage, quand les greniers étaient pillés.

Le sucre, produit colonial longtemps réservé à la pharmacie et aux tables princières, devient une denrée de masse au XIXe siècle avec le développement du sucre de betterave et l'industrialisation. Sa consommation par habitant a été multipliée par plusieurs dizaines en deux siècles.`],
    ["Transporter, conserver, refroidir", `Le chemin de fer et la conserve transforment le commerce alimentaire au XIXe siècle. Le premier permet d'acheminer en quelques heures des denrées périssables vers les villes — le lait, les légumes frais, le poisson de mer cessent d'être des produits strictement locaux. La seconde rend l'aliment indépendant de la saison et du lieu.

Le réfrigérateur ne se généralise dans les foyers français que dans les années 1960, avec la vague d'équipement des Trente Glorieuses. C'est très tardif, et cela rappelle que la conservation domestique du froid est une nouveauté à l'échelle historique : avant lui, on salait, on fumait, on confisait, on séchait, et l'on faisait les courses tous les jours.

Ces trois innovations ont ensemble détaché l'alimentation du calendrier et du terroir — libération considérable, et perte que la cuisine contemporaine cherche par endroits à réparer.`],
    ["La transition nutritionnelle", `La transition nutritionnelle désigne le passage d'une alimentation céréalière, pauvre en produits animaux, à une alimentation riche en produits animaux, en sucres et en produits transformés. Elle accompagne l'élévation du niveau de vie, et s'observe successivement dans toutes les régions du monde.

La consommation de viande a explosé au XXe siècle sous l'effet de l'élevage intensif et de la baisse des prix relatifs : ce qui était un aliment de fête est devenu quotidien. En France, elle a environ triplé par habitant entre 1900 et son pic des années 1990, et décroît légèrement depuis.

Cette transition apporte des bénéfices réels — disparition des carences protéiques et de plusieurs carences en micronutriments, croissance staturale — et des inconvénients désormais bien documentés : obésité, diabète de type 2, maladies cardiovasculaires.

C'est dans ce contexte qu'a été étudié après-guerre le régime crétois, modèle alimentaire méditerranéen associé à une bonne santé cardiovasculaire : abondance de végétaux, légumineuses, huile d'olive, poisson, peu de viande rouge. L'étude des Sept Pays qui l'a fait connaître a été critiquée pour sa méthodologie, et le régime observé correspondait aussi à une pauvreté relative et à une activité physique élevée. Il n'en reste pas moins l'un des modèles alimentaires les mieux soutenus par les données ultérieures.`],
  ],

  "ga2-epices": [
    ["Ce qu'on appelle une épice", `Une épice est une partie de plante utilisée pour son goût ou son parfum, et le mot recouvre des organes très différents — ce qui explique la diversité de leurs propriétés et de leurs prix.

Le poivre provient du fruit d'une liane tropicale : poivre vert cueilli immature, noir cueilli immature puis séché, blanc cueilli mûr et débarrassé de son enveloppe. Un seul fruit, trois produits distincts. La cannelle est faite de l'écorce interne d'un arbre, prélevée puis roulée en tuyaux en séchant. Le clou de girofle est un bouton floral séché, cueilli avant l'ouverture. Le gingembre et le curcuma utilisent le rhizome, tige souterraine — c'est le curcuma qui donne au curry sa couleur jaune caractéristique.

La vanille provient d'une orchidée, seule de sa famille à produire un fruit comestible. Sa culture hors de son aire d'origine mexicaine fut longtemps impossible, faute de l'abeille qui la pollinise ; c'est un jeune esclave de La Réunion, Edmond Albius, qui mit au point en 1841 la pollinisation manuelle encore pratiquée aujourd'hui. Le safran, stigmates séchés d'un crocus qu'il faut cueillir à la main — environ cent cinquante fleurs pour un gramme —, est l'épice la plus chère au poids.`],
    ["La chimie du piquant", `La capsaïcine donne au piment sa sensation de brûlure. Son mécanisme est remarquable : elle ne brûle rien, elle active le récepteur nerveux qui détecte la chaleur. Le cerveau reçoit un signal de brûlure sans qu'aucune lésion ne se produise — le piment trompe le système d'alarme.

Cette molécule étant liposoluble, l'eau ne la dissout pas et ne fait qu'étaler la sensation. Un corps gras ou un produit laitier, dont la caséine capte la capsaïcine, sont bien plus efficaces — d'où le lassi indien et la crème fraîche des cuisines pimentées.

L'échelle de Scoville mesure la force piquante des piments. Établie à l'origine par dilution jusqu'à disparition de la sensation pour un panel de goûteurs, elle est aujourd'hui déterminée par dosage chimique. Le poivron y vaut zéro, le piment d'Espelette quelques milliers, le habanero plusieurs centaines de milliers, et les variétés extrêmes sélectionnées pour les concours dépassent le million.

Pourquoi une plante produit-elle une telle molécule ? Probablement pour dissuader les mammifères, qui broient les graines, sans gêner les oiseaux, insensibles à la capsaïcine et qui les dispersent intactes.`],
    ["Une richesse qui déplace le monde", `Le commerce des épices a motivé les grandes explorations maritimes, et cette phrase mérite d'être prise au pied de la lettre. Poivre, cannelle, girofle, muscade venaient d'Asie du Sud-Est et transitaient par une longue chaîne d'intermédiaires — marchands indiens, arabes, vénitiens — dont chacun prélevait sa marge. Le prix final en Europe était sans rapport avec le coût de production.

Les Européens cherchaient donc une route maritime contournant les intermédiaires du Levant. Vasco de Gama y parvient en 1498 en doublant l'Afrique ; Colomb, parti dans l'autre sens six ans plus tôt pour la même raison, tombe sur un continent qu'il n'attendait pas et meurt convaincu d'avoir atteint les Indes.

La suite est moins glorieuse. Le contrôle des sources fut brutal : les Portugais puis les Néerlandais s'assurèrent le monopole de la muscade et du girofle en détruisant les plantations concurrentes et en massacrant les populations des îles Banda. Un traité de 1667 échangea même une île à muscade contre Manhattan — l'épice paraissait alors la meilleure affaire.

L'ironie finale est banale : la mondialisation des cultures a fait s'effondrer les prix, et le poivre, jadis compté en grains et accepté comme paiement, se vend aujourd'hui au kilo dans n'importe quelle épicerie.`,
      { image: "gas-epices-bazar", legende: "Les épices ont valu des guerres et des empires ; leur banalisation moderne fait oublier ce qu'elles ont coûté.", alt: "Étal d'épices dans un bazar" }],
    ["Les employer", `Deux principes gouvernent l'usage culinaire des épices. Le premier tient à la solubilité : la plupart de leurs molécules aromatiques sont liposolubles, d'où l'intérêt de les faire revenir brièvement dans un corps gras — le fameux tempérage des cuisines indiennes, qui libère bien davantage d'arôme qu'un ajout en fin de cuisson.

Le second tient à la volatilité. Les épices entières conservent leurs arômes des mois, les épices moulues les perdent en quelques semaines : la surface exposée à l'air est sans commune mesure. Moudre au moment de l'emploi n'est pas un raffinement, c'est la différence entre une épice et une poudre grise.

Les aromates — thym, laurier, romarin, persil — se distinguent des épices par leur origine généralement locale et par l'usage de feuilles fraîches ou séchées. Leur règle d'emploi est inverse : les aromates coriaces supportent la cuisson longue, les tendres se ruinent à la chaleur et s'ajoutent au dernier moment.`],
  ],

  "ga2-produits-mer": [
    ["Gras, maigre, et frais", `Un poisson gras est riche en lipides — maquereau, sardine, hareng, saumon, thon —, par opposition aux poissons maigres comme le cabillaud, la sole ou le merlan, qui stockent leur graisse dans le foie. Cette distinction n'est pas seulement culinaire : les poissons gras sont la principale source alimentaire d'acides gras oméga-3 à longue chaîne, ce qui fonde la recommandation d'en consommer régulièrement.

La fraîcheur se juge à des critères concrets : œil bombé et brillant, branchies rouge vif et humides, chair ferme qui reprend sa forme, odeur d'iode et non d'ammoniaque. Un poisson doit être vidé rapidement parce que ses enzymes digestives, très actives, attaquent la paroi abdominale après la mort et accélèrent la dégradation — d'où le geste, systématique à bord des bateaux, d'éviscérer dès la capture.

La provenance et la saison comptent autant que l'espèce : un poisson pêché en période de reproduction est amaigri et de moindre qualité, en plus de poser un problème de renouvellement du stock.`],
    ["Comment le poisson arrive", `La criée est une vente aux enchères de poisson au débarquement, dans un port. Les lots y sont vendus par enchère descendante — le prix baisse jusqu'à ce qu'un acheteur se manifeste —, ce qui règle très vite un marché où la marchandise ne peut pas attendre. C'est là que se forment les prix, avant la distribution.

Un quota de pêche est une quantité maximale autorisée pour une espèce et une zone, fixée dans l'Union européenne chaque année d'après les avis scientifiques puis négociée politiquement — l'écart entre les deux étant l'un des points de friction récurrents de la politique commune de la pêche. La taille minimale de capture complète le dispositif : un seuil en dessous duquel un poisson ne peut être conservé, calé sur la taille de première reproduction, pour qu'un individu ait au moins pondu une fois avant d'être pêché.

Le label MSC certifie une pêche jugée durable, selon un référentiel privé portant sur l'état du stock, l'impact sur l'écosystème et la gestion. Il est le plus répandu, et le plus critiqué — plusieurs pêcheries certifiées ont été contestées par des scientifiques. Un label est une information utile, pas une garantie absolue.`],
    ["Élever plutôt que pêcher", `L'aquaculture est l'élevage d'organismes aquatiques. Elle fournit désormais environ la moitié du poisson consommé dans le monde, la pêche sauvage ayant plafonné depuis les années 1990 faute de stocks supplémentaires.

Son bilan est contrasté et dépend entièrement de l'espèce. L'élevage de carnivores comme le saumon exige de nourrir les poissons avec d'autres poissons — le ratio s'est beaucoup amélioré mais reste un prélèvement sur les ressources marines. L'élevage d'herbivores et d'omnivores, largement majoritaire en Asie, n'a pas ce défaut.

La conchyliculture, élevage des coquillages, se distingue nettement : huîtres et moules se nourrissent en filtrant le plancton, sans aucun apport alimentaire, et améliorent la qualité de l'eau en la filtrant. C'est l'une des rares productions animales à empreinte environnementale très faible. Elle est en revanche extrêmement dépendante de la qualité du milieu, ce qui en fait un secteur en première ligne face aux pollutions et au réchauffement.`,
      { image: "gas-parc-huitres", legende: "Un parc à huîtres : l'animal se nourrit en filtrant l'eau, sans apport extérieur.", alt: "Parc ostréicole à marée basse" }],
    ["Deux dangers à connaître", `L'anisakis est un ver parasite présent dans de nombreux poissons de mer, dont la larve peut provoquer chez l'humain des douleurs abdominales sévères et des réactions allergiques. Il est détruit par la cuisson à cœur ou par la congélation à basse température pendant plusieurs jours — obligation réglementaire pour tout poisson destiné à être consommé cru ou mariné. C'est la raison technique pour laquelle un sushi correctement préparé n'est pas fait de poisson strictement frais mais de poisson congelé puis décongelé.

La ciguatera est une intoxication liée à des toxines produites par des micro-algues, concentrées le long de la chaîne alimentaire dans certains grands poissons de récifs tropicaux. Elle provoque des troubles digestifs et neurologiques parfois persistants, notamment une inversion de la perception du chaud et du froid. Aucune cuisson ne détruit ces toxines, et aucun signe ne permet de reconnaître un poisson contaminé — la seule prévention est de suivre les recommandations locales sur les espèces et les zones à éviter.`],
  ],

  "ga2-viandes": [
    ["Pourquoi certains morceaux sont tendres", `La tendreté d'une viande dépend du muscle sollicité par l'animal. Un muscle beaucoup utilisé — collier, jarret, paleron — développe un tissu conjonctif riche en collagène qui le rend ferme. Un muscle peu sollicité, comme le filet situé le long de la colonne, reste tendre.

Cette différence commande la cuisson, et c'est la règle la plus utile de la cuisine des viandes. Les morceaux tendres se cuisent vite et à feu vif : une cuisson longue les dessécherait sans rien améliorer. Les morceaux fermes exigent au contraire une cuisson longue et humide, à basse température, qui transforme le collagène en gélatine et rend la viande fondante. Un bourguignon fait avec du filet serait un gâchis coûteux et décevant.

Le persillé désigne le gras infiltré entre les fibres musculaires, visible en fines marbrures. Il fond à la cuisson, lubrifie les fibres et porte les arômes — c'est le principal critère de qualité gustative d'une pièce à griller, et ce que recherche l'engraissement des races à viande.`],
    ["Faire vieillir", `La maturation est un vieillissement contrôlé de la viande, en chambre froide, pendant plusieurs jours à plusieurs semaines. Deux phénomènes s'y produisent : les enzymes naturelles du muscle dégradent progressivement les protéines de structure, ce qui attendrit ; et l'évaporation concentre les saveurs tandis que des réactions développent des arômes complexes.

Une viande consommée immédiatement après l'abattage est dure : la rigidité cadavérique bloque les fibres, et il faut attendre qu'elle se lève. Le bœuf gagne à maturer deux à quatre semaines, parfois davantage ; le porc et la volaille beaucoup moins, leur graisse s'oxydant plus vite.

Un abat est une partie comestible autre que le muscle — foie, rognon, cœur, langue, ris, tripes. Longtemps centraux dans la cuisine populaire française, les abats ont largement disparu des tables depuis les crises sanitaires des années 1990 et un changement de goût. Leur intérêt nutritionnel est pourtant considérable, le foie étant l'un des aliments les plus riches en fer et en vitamine A, et leur abandon représente un gaspillage : ils constituent une part importante de la carcasse.`],
    ["Conserver par le sel", `La salaison est la conservation par le sel, qui abaisse l'activité de l'eau et rend le milieu inhospitalier aux micro-organismes. Combinée au séchage, elle produit les jambons secs, dont le jambon de Bayonne, jambon du Sud-Ouest bénéficiant d'une indication géographique protégée, salé au sel des salines du bassin de l'Adour — Salies-de-Béarn, Bayonne-Mouguerre — et affiné plusieurs mois.

L'andouille de Guémené se distingue par une technique visible à la coupe : elle est faite de chaudins — segments du gros intestin — enfilés les uns dans les autres, ce qui dessine à la tranche des cercles concentriques caractéristiques. C'est un exemple de charcuterie dont l'identité tient à un geste plus qu'à une recette.

Le nitrite est un additif conservateur qui joue deux rôles : il inhibe Clostridium botulinum, la bactérie du botulisme, dont la toxine est la substance la plus toxique connue, et il fixe la couleur rose des charcuteries. Il fait l'objet d'un débat sérieux, car il participe à la formation de composés nitrosés associés au risque de cancer colorectal. Sa réduction est engagée en France, avec une difficulté réelle : supprimer le nitrite sans compromettre la sécurité microbiologique suppose d'autres barrières — froid strict, acidification, durée de conservation raccourcie.`,
      { image: "gas-jambon-bayonne", legende: "Un jambon sec : sel, temps et air, trois moyens de retirer à l'eau sa disponibilité.", alt: "Jambons secs suspendus dans un séchoir" }],
    ["Classer et tracer", `Le classement européen des carcasses de bœuf apprécie deux critères : la conformation, c'est-à-dire le développement des masses musculaires, notée de E à P ; et l'état d'engraissement, noté de 1 à 5. Il sert à fixer les prix entre éleveurs et abatteurs, et n'est pas un indicateur de qualité gustative — une carcasse très bien classée peut donner une viande médiocre à la dégustation, ce qui est l'une des critiques de fond adressées au système.

La traçabilité de la viande bovine en Europe permet de remonter de l'étal à l'animal, grâce à un identifiant unique porté par chaque bovin et suivi à chaque étape. Elle a été mise en place dans l'urgence après la crise de la vache folle, qui avait révélé l'incapacité à savoir d'où venait un morceau de viande.

C'est un cas rare où une crise sanitaire a produit un dispositif durable et efficace, aujourd'hui étendu à d'autres filières. Il a montré ses limites lors du scandale de la viande de cheval en 2013 : la traçabilité fonctionnait pour les pièces entières, beaucoup moins pour les préparations transformées passant par de multiples intermédiaires.`],
  ],

  "ga2-legumes-fruits": [
    ["Fruit ou légume ?", `Botaniquement, la tomate est un fruit : elle est l'organe issu de la fleur et contenant les graines. Il en va de même du concombre, de la courgette, de l'aubergine, du poivron et de l'avocat. Le mot « légume » n'a aucune définition botanique — c'est une catégorie culinaire, qui désigne ce qu'on sert salé.

L'affaire a même occupé la Cour suprême des États-Unis en 1893 : les tomates importées étant taxées comme légumes et non comme fruits, un importateur contesta. La Cour lui donna tort, jugeant que le langage courant devait primer sur la botanique en matière douanière — décision de bon sens qui illustre que les classifications servent des usages différents.

À l'inverse, la rhubarbe et la betterave sont des tiges et des racines qu'on accommode parfois en dessert. La question n'a d'intérêt que pour rappeler qu'un mot peut avoir deux définitions valides dans deux domaines.`],
    ["Mûrir après la récolte", `Un fruit climactérique continue de mûrir après la récolte : banane, pomme, poire, avocat, tomate, pêche, kiwi. Un fruit non climactérique ne mûrit plus une fois cueilli — raisin, agrumes, fraise, cerise, ananas : cueillis verts, ils resteront acides.

Le gaz qui déclenche cette maturation est l'éthylène, hormone végétale produite par le fruit lui-même en quantité croissante. Il agit à l'échelle du voisinage, ce qui a des conséquences pratiques immédiates : une pomme mûre placée près d'avocats durs accélère leur mûrissement, et une pomme oubliée dans un bac à légumes fait vieillir tout ce qui l'entoure. C'est aussi ce que met à profit le transport international, les bananes voyageant vertes puis étant mûries en chambre par apport d'éthylène.

Une distinction s'impose : mûrir n'est pas seulement ramollir. La conversion de l'amidon en sucres se poursuit après la récolte, mais l'accumulation des sucres depuis la plante s'arrête à la cueillette. Un fruit cueilli trop tôt s'attendrira sans jamais devenir sucré — d'où la médiocrité des fruits récoltés verts pour supporter le transport.`],
    ["Conserver sans abîmer", `Il ne faut pas conserver les tomates au réfrigérateur : en dessous d'une douzaine de degrés, leur texture se dégrade — la membrane des cellules s'altère et la chair devient farineuse — et la production des composés aromatiques s'interrompt sans reprendre au réchauffement. Le même conseil vaut pour les fruits tropicaux, sensibles au froid.

Un légume perd après plusieurs jours de stockage une partie de ses vitamines les plus fragiles, la vitamine C et les folates en premier lieu, dégradées par l'oxygène et la lumière. C'est ce qui explique un résultat souvent jugé contre-intuitif : un légume surgelé n'est pas nécessairement moins nutritif qu'un légume frais. La surgélation intervient dans les heures suivant la récolte et fige la teneur en nutriments, quand un légume « frais » a pu voyager et attendre une semaine.

Le blanchiment qui précède la congélation est un passage bref à l'eau bouillante destiné à désactiver les enzymes du végétal. Sans lui, ces enzymes continuent de travailler lentement même à basse température et dégradent couleur, goût et texture pendant les mois de stockage. Il détruit au passage un peu de vitamine C, ce qui reste largement compensé par la préservation ultérieure.`],
    ["Variétés et associations", `Une variété ancienne est une variété antérieure à la sélection industrielle moderne, généralement sélectionnée localement pour le goût et l'adaptation au terroir plutôt que pour le rendement, l'homogénéité et la tenue au transport. Elle est souvent moins productive et plus irrégulière, ce qui explique sa disparition des circuits industriels et son retour dans les circuits courts.

Une légumineuse est une plante de la famille des fabacées dont on consomme les graines : lentille, pois chiche, haricot sec, fève, pois. Elle a la double particularité d'être riche en protéines et de fixer l'azote de l'air grâce à ses bactéries symbiotiques, ce qui en fait un pilier à la fois nutritionnel et agronomique.

Associer légumineuses et céréales dans un repas répond à une complémentarité précise : les céréales sont pauvres en lysine et riches en acides aminés soufrés, les légumineuses l'inverse. Ensemble, elles fournissent un profil protéique complet. Toutes les cuisines traditionnelles du monde ont trouvé cette combinaison sans connaître les acides aminés — riz et soja, maïs et haricot, semoule et pois chiche, pain et lentilles. C'est l'un des plus beaux exemples de savoir empirique validé longtemps après par la biochimie.`],
  ],

  "ga2-restauration": [
    ["Un bouillon devenu un lieu", `Le mot restaurant désignait à l'origine un bouillon réputé restaurer les forces, et non un établissement. Au XVIIIe siècle, des marchands parisiens vendent ces consommés fortifiants à une clientèle soucieuse de sa santé ; l'enseigne annonce des « restaurants », et le mot glisse peu à peu du plat au lieu qui le sert.

L'essor du restaurant tel qu'on l'entend doit beaucoup à la Révolution, qui libère les cuisiniers des maisons nobles : privés d'employeurs émigrés ou guillotinés, ils s'établissent à leur compte. Paris compte une centaine de restaurants à la veille de la Révolution et plusieurs milliers sous la Restauration.

L'innovation est autant sociale que culinaire. Avant eux, l'auberge servait à heure fixe un menu unique à une tablée commune. Le restaurant apporte trois nouveautés qui nous paraissent évidentes : une table individuelle, un horaire libre, et une carte permettant de choisir — le service à la carte, avec des plats tarifés séparément.`],
    ["Des établissements aux noms précis", `Un bistrot est un petit établissement servant boissons et plats simples, à l'origine tenu souvent par des Auvergnats montés à Paris, qui cumulaient charbon et vin. L'étymologie populaire le fait venir du russe *bystro*, « vite », lancé par les cosaques occupant Paris en 1814 — jolie histoire, mais le mot n'apparaît par écrit que dans les années 1880, ce qui la rend improbable.

Une brasserie était à l'origine un établissement servant de la bière produite sur place, d'où son nom. Les brasseries parisiennes ouvertes après 1870 par des Alsaciens et des Lorrains ayant quitté les territoires annexés ont fixé le genre : bière, choucroute, huîtres, service continu et grandes salles.

La bistronomie, apparue dans les années 1990, désigne une cuisine soignée servie dans un cadre de bistrot, à prix modéré. Elle est née de chefs formés dans la haute gastronomie qui ont voulu s'affranchir des coûts du luxe — nappage, argenterie, brigade nombreuse — pour ne garder que l'assiette. Elle a durablement modifié le paysage de la restauration française.`],
    ["Ce que garantissent les mentions", `La mention « fait maison » est réservée aux plats élaborés sur place à partir de produits bruts. Rendue obligatoire depuis 2014 pour les plats concernés, elle répond à un constat que le public découvrait : une part importante des restaurants sert des préparations industrielles réchauffées, sans que rien ne l'indique. Ses exemptions — certains produits sont réputés bruts même transformés — ont été critiquées, et son affichage reste inégalement contrôlé.

Le titre de maître restaurateur va plus loin : c'est un titre d'État, délivré après audit, qui atteste que l'essentiel de la carte est cuisiné sur place à partir de produits frais, et impose aussi des critères de qualification du chef et de qualité de l'accueil. Il est valable quatre ans et renouvelable.

Ces deux dispositifs répondent à la même question — comment distinguer un cuisinier d'un assembleur — et illustrent la difficulté de réglementer une qualité que le client ne peut pas vérifier lui-même.`],
    ["Le métier vu de la salle des comptes", `Le taux de rotation des tables est le nombre de fois qu'une table est occupée par service. C'est l'indicateur central de l'économie d'un restaurant : avec une salle de dix tables et deux services par soir, on sert quarante couverts si l'on tourne deux fois, vingt si l'on tourne une fois. La marge dépend donc autant de la durée des repas que du prix des plats — ce qui explique les stratégies de réservation par créneaux, mal vécues par la clientèle française.

Le principe HACCP est une méthode d'analyse et de maîtrise des risques sanitaires, obligatoire en restauration : elle identifie les points où un danger peut survenir — rupture de la chaîne du froid, cuisson insuffisante, contamination croisée — et impose pour chacun une mesure de maîtrise et un enregistrement. Elle vient de l'agroalimentaire et, plus anciennement, des programmes spatiaux américains, où l'on ne pouvait pas se permettre d'intoxiquer un équipage.

Le secteur cumule enfin des difficultés structurelles qu'aucune mention ne résout : marges faibles, horaires décalés, pénibilité, et une crise de recrutement devenue chronique après 2020.`],
  ],

  "ga2-guides-critique": [
    ["Un guide vendu par un fabricant de pneus", `Le guide Michelin est né en 1900 d'un calcul commercial simple : encourager les automobilistes à voyager, donc à user leurs pneumatiques. Distribué gratuitement, il recensait d'abord garagistes, médecins et hôtels, la table n'y venant qu'ensuite. Les frères Michelin le firent payer à partir de 1920 après avoir vu un exemplaire caler un établi — jugeant qu'on ne respecte que ce qu'on paie.

Les étoiles apparaissent progressivement dans les années 1920 et 1930, avec une hiérarchie restée inchangée : une étoile signale une cuisine de grande qualité qui vaut l'étape ; deux, une cuisine excellente valant le détour ; trois, une cuisine exceptionnelle valant le voyage. Le vocabulaire trahit encore l'origine automobile du guide.

Le Bib Gourmand, créé plus tard, récompense un bon rapport qualité-prix : c'est la distinction la plus utile au quotidien, et la moins commentée.

Les inspecteurs travaillent anonymement et payent leurs repas — règle qui distingue le guide de la plupart des classements et qui coûte cher à maintenir. Leur anonymat est réputé absolu, ce qui n'empêche pas les cuisines de guetter les indices : un client seul, qui commande beaucoup et prend des notes discrètes.`],
    ["Les autres juges", `Le Gault et Millau, fondé en 1969 par deux critiques, a introduit une notation sur vingt et un ton éditorial assumé, là où Michelin se contentait de symboles. Il a surtout accompagné et théorisé la nouvelle cuisine, dont il a publié le manifeste en 1973 : cuissons plus courtes, sauces allégées, produits de saison, créativité du chef. Un guide n'a jamais aussi directement influencé un mouvement culinaire.

Le classement des cinquante meilleurs restaurants du monde, publié depuis 2002, procède tout autrement : il repose sur les votes d'un collège de chefs, journalistes et gastronomes du monde entier, sans inspection ni critère explicite. Il a considérablement gagné en influence internationale, et il est critiqué pour l'opacité de ses votes, la surreprésentation de certaines régions et l'effet de mode qu'il amplifie.

Les avis d'utilisateurs publiés sur les plateformes constituent aujourd'hui la troisième force, et de loin la plus consultée. Leur défaut est connu : la fraude aux avis, c'est-à-dire la publication d'avis rémunérés ou fictifs, à charge comme à décharge, contre laquelle les plateformes luttent avec des résultats inégaux.`],
    ["Ce que pèse une étoile", `Une étoile Michelin peut transformer l'économie d'un restaurant du jour au lendemain : réservations saturées pour des mois, hausse du ticket moyen, notoriété internationale. Elle impose en retour des coûts considérables — produits plus chers, personnel plus nombreux, cadre à la hauteur — qui rendent la position difficile à tenir.

La perte d'une étoile provoque une chute de fréquentation et, parfois, de graves conséquences personnelles. Le cas de Bernard Loiseau, qui s'est donné la mort en 2003 dans un contexte de rumeurs de rétrogradation, a durablement marqué la profession et ouvert un débat sur la responsabilité des guides. Plusieurs chefs ont depuis demandé le retrait volontaire de leurs étoiles, geste rare mais devenu concevable, invoquant la pression et la liberté de cuisiner autrement.

Le guide a répondu en assouplissant sa communication, sans renoncer au principe d'un classement — car c'est précisément le caractère tranchant du jugement qui fait sa valeur et son danger.`],
    ["Un jugement qui se présente comme une mesure", `La critique gastronomique est contestée pour une raison de fond : elle repose sur un jugement subjectif présenté sous la forme d'une évaluation objective. Une étoile ou une note sur vingt ont l'apparence d'une mesure, alors qu'aucun instrument ne mesure le plaisir d'un repas.

Les guides se défendent par la méthode : critères explicites, pluralité des inspecteurs, visites répétées, anonymat. C'est une réponse sérieuse, qui rapproche la critique d'une évaluation reproductible sans jamais l'y réduire.

Restent deux biais structurels. Les guides jugent presque exclusivement une certaine idée de la haute cuisine, longtemps française, ce qui a marginalisé des traditions entières — un excellent restaurant populaire n'entre dans aucune grille. Et la critique influence ce qu'elle mesure : les chefs cuisinent en connaissant les critères, ce qui uniformise. La question n'est donc pas de savoir si la critique gastronomique est objective — elle ne l'est pas — mais si elle est honnête sur ce qu'elle fait.`],
  ],

  "ga2-boissons-sans-alcool": [
    ["Trois eaux, trois statuts", `Une eau minérale naturelle doit avoir une composition stable dans le temps et provenir d'une source protégée ; elle est reconnue comme ayant des propriétés favorables à la santé, et cette reconnaissance suit une procédure officielle. Elle ne peut subir aucun traitement de désinfection.

Une eau de source répond aux mêmes exigences de pureté originelle et d'absence de traitement, mais sa composition minérale n'a pas à être constante et aucune propriété particulière ne lui est reconnue. C'est la seule différence, et elle est de nature réglementaire plus que qualitative.

L'eau du robinet est une eau traitée, désinfectée et contrôlée, soumise aux normes sanitaires les plus strictes de toutes les denrées alimentaires — plusieurs dizaines de paramètres analysés régulièrement, avec des résultats publics commune par commune. Elle coûte environ cent à trois cents fois moins cher que l'eau embouteillée, et son empreinte environnementale est sans commune mesure, l'essentiel de celle des bouteilles venant du contenant et du transport.`],
    ["Infusions et théine", `Une infusion verse l'eau chaude sur la plante et laisse extraire ; une décoction fait bouillir la plante dans l'eau. La distinction n'est pas cosmétique : les feuilles et les fleurs, fragiles, s'infusent ; les racines, écorces et graines, dures, exigent la décoction pour libérer leurs composés.

La théine est exactement la même molécule que la caféine — le mot ne subsiste que par tradition, les chimistes du XIXe siècle ayant cru isoler deux substances distinctes avant de reconnaître leur identité. Ses effets diffèrent pourtant dans le vécu : les tanins du thé ralentissent son absorption, ce qui donne un effet plus progressif et plus long qu'un café.

Le thé vert se prépare à température modérée — soixante-dix à quatre-vingts degrés selon les crus — parce qu'une eau trop chaude en extrait rapidement les tanins et les catéchines les plus amères, écrasant les arômes délicats. Le thé noir, oxydé, supporte l'eau frémissante.

Un rooibos est une infusion sud-africaine issue d'un arbuste sans aucun lien avec le théier, et naturellement dépourvue de théine — ce qui explique son succès pour la soirée.`],
    ["Sodas et jus", `Un soda est une boisson gazeuse sucrée aromatisée. Une canette standard de trente-trois centilitres contient environ trente-cinq grammes de sucre, soit six morceaux — près des trois quarts du maximum quotidien recommandé par l'OMS pour un adulte, et davantage que son seuil idéal. Sa consommation sous forme liquide pose un problème particulier : les calories liquides rassasient beaucoup moins que les mêmes calories solides, si bien qu'elles s'ajoutent aux apports au lieu de s'y substituer.

Un jus de fruit « pur jus » est un jus sans sucre ni eau ajoutés, obtenu directement par pressage. Il se distingue du jus à base de concentré, reconstitué par ajout d'eau, et du nectar, qui contient de l'eau et du sucre. Le pur jus n'est pas pour autant équivalent au fruit : le pressage supprime les fibres, ce qui accélère l'absorption des sucres, et sa teneur en sucres naturels reste proche de celle d'un soda. Les recommandations nutritionnelles ne comptent d'ailleurs qu'un verre de jus par jour comme portion de fruit, et pas davantage.

Le kombucha est une boisson fermentée à base de thé sucré, obtenue grâce à une culture symbiotique de levures et de bactéries. La fermentation consomme une partie du sucre et produit acides organiques et un peu de gaz — et une trace d'alcool, qui impose un contrôle pour rester sous le seuil des boissons non alcoolisées.`],
  ],

  "ga2-culture-table-monde": [
    ["Manger avec les mains", `Une part importante de l'humanité mange principalement avec les mains, notamment en Asie du Sud, au Moyen-Orient et en Afrique. Ce n'est pas une absence d'usages mais un code précis : on mange de la main droite, la gauche étant réservée à d'autres tâches ; on n'utilise que le bout des doigts ; on se lave avant et après, ce qui explique les aiguières et les bassines apportées à table.

Le monde se partage grossièrement en trois aires — la main, les baguettes, les couverts —, et chacune juge volontiers les autres. Manger avec les mains est perçu comme rustre par les usagers de la fourchette, laquelle a pourtant été longtemps combattue en Europe : introduite d'Italie à la Renaissance, elle fut jugée efféminée, voire diabolique par des ecclésiastiques qui y voyaient un refus des doigts que Dieu avait donnés.

Ce qui passe pour poli à une table peut être grossier à une autre — mais les exemples les plus circulés, comme le rot qui complimenterait le cuisinier ou l'assiette qu'il ne faudrait pas finir, sont des clichés de récit de voyage, rarement documentés par les ethnographes. Les différences réelles sont plus discrètes et plus intéressantes.`],
    ["Gestes chargés de sens", `Au Japon, on ne plante pas ses baguettes verticalement dans le riz : le geste reproduit l'offrande de riz déposée devant l'autel des défunts lors des rites funéraires. Passer un aliment de baguettes à baguettes est également proscrit pour la même raison, ce geste évoquant le transfert des ossements après la crémation. Ces interdits ne sont pas des règles d'étiquette mais des évitements funéraires — d'où la gêne réelle qu'ils provoquent.

Trinquer avant de boire est un geste de convivialité aux origines multiples et incertaines. L'explication répandue selon laquelle on faisait déborder les verres l'un dans l'autre pour prouver l'absence de poison est une reconstruction tardive, sans appui documentaire. Le geste tient plus probablement à une pratique d'offrande partagée et à la volonté d'associer l'ouïe aux quatre autres sens déjà sollicités par le vin.

Le pourboire aux États-Unis relève d'une autre logique encore : ce n'est pas un supplément facultatif mais une part essentielle du revenu du personnel, le salaire minimum des serveurs pouvant être légalement inférieur au minimum général. Ne pas laisser quinze à vingt pour cent n'est pas une économie, c'est une amputation de salaire.`],
    ["Servir et partager", `Le service à la russe présente les plats l'un après l'autre, dans un ordre fixé, chacun étant servi chaud à son moment. Il s'est imposé en Europe au XIXe siècle contre le service à la française, où tous les plats d'un même service étaient disposés simultanément sur la table dans une composition symétrique — spectaculaire, mais où l'on mangeait tiède et où l'on ne goûtait que ce qui se trouvait à portée. Le menu séquentiel qui nous paraît naturel est donc un usage récent et importé.

À l'inverse, les cuisines d'Asie de l'Est pratiquent le repas partagé : les plats sont disposés au centre et chacun se sert au fil du repas, avec le riz comme base individuelle. Il n'y a pas de succession d'assiettes personnelles, et la notion même de « plat principal » y perd son sens.

Le thé se prend au Maghreb versé de haut pour former une mousse en surface — le geste aère le thé et refroidit légèrement — et se sert traditionnellement en trois verres, dont un proverbe maghrébin dit qu'ils sont doux comme la vie, fort comme l'amour et amer comme la mort. La cérémonie du thé japonaise pousse la codification à l'extrême : un rituel où chaque geste, chaque objet et chaque disposition de la pièce relèvent d'une esthétique et d'une éthique de l'hospitalité, l'ensemble demandant des années d'apprentissage.`],
    ["Les interdits alimentaires", `Presque toutes les religions comportent des règles alimentaires : interdits sur certaines espèces, sur des associations, sur des périodes. Le porc est prohibé dans le judaïsme et l'islam, le bœuf l'est dans l'hindouisme, le mélange lait-viande est séparé dans la cacherout, et le carême, le ramadan ou le jeûne du Yom Kippour imposent des périodes d'abstinence.

Les explications par l'hygiène — le porc porterait des parasites sous climat chaud — sont séduisantes et insuffisantes : elles n'expliquent ni pourquoi d'autres viandes également risquées restent permises, ni pourquoi ces règles ont survécu à la disparition du risque. Des raisons rituelles, symboliques et parfois pratiques s'y mêlent, et l'anthropologie a montré que ces classifications organisent surtout un ordre du monde : est impur ce qui brouille les catégories.

Leur fonction sociale est en tout cas manifeste. Partager ou refuser un aliment marque une appartenance, et manger ensemble scelle une relation. C'est pourquoi les règles alimentaires résistent bien mieux que d'autres pratiques religieuses à la sécularisation : elles se pratiquent quotidiennement, en famille, et disent qui l'on est.`],
  ],

  "ga2-hotellerie": [
    ["Compter les étoiles", `Le classement hôtelier français compte cinq étoiles, auxquelles s'ajoute la distinction de palace, créée en 2010 pour un très petit nombre d'établissements cinq étoiles présentant un caractère d'exception.

Il est attribué par Atout France, l'agence de développement touristique, sur la base d'un audit réalisé par un organisme accrédité et payé par l'hôtelier. Le référentiel porte sur des critères objectifs — surface des chambres, équipements, services, accessibilité, développement durable —, ce qui en fait un classement de confort et non de qualité perçue : un deux étoiles impeccablement tenu peut satisfaire davantage qu'un quatre étoiles négligé.

Sa révision est quinquennale, ce qui oblige à maintenir le niveau et distingue le système français de classifications étrangères parfois attribuées à vie. Le classement est en outre volontaire : un hôtel peut choisir de ne pas être classé, ce que font certains établissements haut de gamme qui préfèrent une identité propre.`],
    ["Les métiers et les chiffres", `Le concierge d'hôtel est chargé des services et des demandes des clients : réservations, transports, recommandations, résolution de l'imprévu. Le métier a sa confrérie internationale, les Clefs d'Or, dont l'insigne se porte au revers et signale un professionnel reconnu par ses pairs. Sa valeur tient à un réseau local que rien ne remplace, et la comparaison avec les applications de recommandation tourne souvent à son avantage sur les demandes complexes.

Le revenu par chambre disponible est l'indicateur central de l'hôtellerie : il combine le taux d'occupation et le prix moyen, et se calcule sur l'ensemble des chambres, occupées ou non. Sa supériorité sur les deux mesures prises isolément est évidente — remplir à cent pour cent en cassant les prix ou vendre très cher trois chambres sur vingt donnent tous deux un mauvais résultat, que seul cet indicateur révèle.`],
    ["Indépendants et chaînes", `Un hôtel indépendant n'appartient à aucune chaîne et assume seul sa commercialisation, sa marque et ses standards. Il représente encore la majorité du parc français en nombre d'établissements, avec une taille moyenne bien plus faible.

Un contrat de franchise hôtelière permet à un exploitant d'utiliser une marque et ses méthodes contre une redevance, tout en restant propriétaire de son fonds. Il apporte visibilité, système de réservation et clientèle d'affaires, au prix d'une redevance et de contraintes de standards. Les grands groupes hôteliers sont ainsi devenus, pour l'essentiel, des gestionnaires de marques plutôt que des propriétaires de murs.

La taxe de séjour est une taxe locale perçue sur les nuitées touristiques, reversée à la commune ou à l'intercommunalité pour financer l'accueil touristique. Elle est payée par le client et collectée par l'hébergeur, y compris désormais par les plateformes de location, ce qui a nettement augmenté son rendement.`],
    ["Ce que les plateformes ont changé", `Les plateformes de réservation ont apporté à l'hôtellerie une visibilité considérable, notamment aux indépendants qui n'auraient jamais atteint une clientèle internationale. Elles prélèvent en contrepartie des commissions élevées, de l'ordre de quinze à vingt-cinq pour cent, et concentrent la relation client entre leurs mains — l'hôtelier ne sait plus toujours qui vient chez lui ni pourquoi. Les clauses de parité tarifaire, qui interdisaient de proposer un prix inférieur en direct, ont été partiellement invalidées en France et en Europe.

La location meublée touristique — hébergement loué à une clientèle de passage pour de courtes durées — a constitué la seconde rupture. Son essor a fait sortir des dizaines de milliers de logements du marché locatif ordinaire dans les villes touristiques, ce qui a conduit plusieurs municipalités à instaurer autorisations, quotas et limitation à cent vingt jours par an pour les résidences principales.

Une chambre d'hôtes relève d'un régime distinct : un hébergement chez l'habitant, limité à cinq chambres et quinze personnes, avec petit-déjeuner compris et présence de l'hôte. Ce plafond est ce qui la sépare juridiquement d'un hôtel, et il conditionne son régime fiscal comme ses obligations.`],
  ],

  "ga2-parfum": [
    ["La pyramide olfactive", `Un parfum se construit comme un accord musical, en trois étages qui se révèlent successivement. Les notes de tête s'évaporent en quelques minutes : ce sont les molécules les plus volatiles, agrumes et aromatiques, qui font la première impression. Les notes de cœur tiennent quelques heures et donnent son caractère au parfum : florales, épicées, fruitées. Les notes de fond persistent une journée entière et parfois davantage : bois, résines, musc, ambre.

Cette architecture n'est pas une convention poétique mais une conséquence physique — les molécules ne s'évaporent pas à la même vitesse selon leur masse et leur volatilité. Un parfum change donc sur la peau, et le juger à la première vaporisation revient à juger un morceau sur ses trois premières notes.

Le vocabulaire du domaine emprunte massivement à la musique : accord, note, harmonie, et le compositeur lui-même se nomme un nez. C'est une profession rare, exigeant des années de formation à la mémoire olfactive, et qui compte quelques centaines de praticiens dans le monde.`],
    ["Grasse, des peaux aux fleurs", `Grasse est la capitale historique du parfum, et son histoire commence par une odeur qu'il fallait masquer. La ville vivait de la tannerie, activité pestilentielle qui traitait les peaux ; la mode italienne des gants parfumés au XVIe siècle amena les gantiers-parfumeurs à cultiver dans l'arrière-pays les fleurs nécessaires. Quand la tannerie déclina, la parfumerie resta.

Le climat et les sols y permettaient la rose centifolia, le jasmin, la tubéreuse, la lavande et la fleur d'oranger. La ville concentre encore aujourd'hui une grande part du savoir-faire mondial de la composition, même si l'essentiel des matières premières vient désormais d'ailleurs. Ses savoir-faire liés au parfum sont inscrits au patrimoine culturel immatériel de l'humanité.`],
    ["Extraire l'odeur d'une fleur", `Toutes les fleurs ne supportent pas la chaleur de la distillation. L'enfleurage répondait à ce problème : on déposait les pétales sur une couche de graisse froide qui absorbait leurs composés odorants, en renouvelant les fleurs jusqu'à saturation. Le procédé, employé pour le jasmin et la tubéreuse, exigeait des quantités de fleurs et un travail considérables ; il a disparu de la production industrielle, remplacé par l'extraction aux solvants volatils.

Celle-ci donne d'abord une concrète, cireuse, puis une absolue : un extrait très concentré obtenu en reprenant la concrète à l'alcool. C'est la forme la plus fidèle et la plus coûteuse des matières florales — il faut des centaines de kilos de fleurs pour un kilo d'absolue.

Les concentrations du produit fini se distinguent de la même façon. Un extrait ou parfum contient le plus de matières odorantes, une eau de parfum moins, une eau de toilette moins encore, une eau de Cologne moins que tout. La différence n'est pas une question de qualité mais de tenue et de puissance — et de prix, la matière odorante étant l'essentiel du coût.`],
    ["L'industrie et ses molécules", `Chanel numéro cinq, lancé en 1921, est devenu emblématique pour une raison technique autant que commerciale : il fut l'un des premiers grands parfums à employer massivement des aldéhydes de synthèse, qui lui donnent son caractère abstrait — il ne sent aucune fleur identifiable, il sent le parfum. Cette rupture avec les soliflores du XIXe siècle a ouvert la parfumerie moderne.

La parfumerie utilise des molécules de synthèse pour trois raisons. Le coût, d'abord : certaines matières naturelles valent des milliers d'euros le kilo. La constance, ensuite : une récolte varie d'une année à l'autre, une molécule de synthèse est identique. La préservation des ressources, enfin — le musc était extrait d'une glande de chevrotain tué pour cela, l'ambre gris vient du cachalot, et plusieurs bois précieux sont menacés. La synthèse a sauvé des espèces autant qu'elle a servi les marges.

Les parfums se classent enfin en familles olfactives — hespéridée, florale, fougère, chyprée, boisée, orientale — qui regroupent des compositions aux caractères voisins. Cette classification aide à s'orienter, sans rien dire de la qualité : elle décrit un genre, pas une réussite.`],
  ],

  "ga2-artisanat-art-vivre": [
    ["Un métier d'art, c'est quoi", `Un métier d'art est une activité de production, de création ou de restauration qui associe maîtrise technique, savoir-faire manuel et dimension créative. La liste officielle française en recense près de trois cents, réparties en une quinzaine de domaines — céramique, verre, métal, textile, bois, cuir, pierre, restauration du patrimoine.

Ce qui distingue un métier d'art d'un artisanat ordinaire est cette part de création et le caractère unique ou en très petite série de la production. Ce qui le distingue de l'art est la maîtrise d'un savoir-faire technique transmissible et l'existence d'un usage.

Le titre d'artisan, lui, est réglementé : il est conditionné à un diplôme professionnel ou à une expérience de plusieurs années, et son usage abusif est sanctionné. Les titres de maître artisan et de meilleur ouvrier de France couronnent des niveaux supérieurs, ce dernier étant un concours d'État dont le col bleu-blanc-rouge est l'une des distinctions professionnelles les plus reconnues en France.`],
    ["Transmettre", `Le compagnonnage est un système de formation par le voyage et la transmission entre pairs, dont les origines remontent au moins au Moyen Âge et qui est inscrit au patrimoine culturel immatériel de l'humanité. Il ne relève ni de l'école ni de l'entreprise : c'est une communauté qui forme, héberge et évalue.

Le tour de France des compagnons est un parcours itinérant de plusieurs années : l'aspirant change de ville tous les six mois à un an, travaille chez un employeur différent, loge dans une maison de compagnons et suit des cours le soir. Il apprend ainsi des tours de main régionaux qu'aucun programme ne pourrait rassembler.

Le chef-d'œuvre est la pièce réalisée pour prouver sa maîtrise et être reçu compagnon. Le mot a pris en français le sens d'œuvre admirable, mais son sens d'origine est celui-ci : la preuve technique par laquelle un ouvrier accède au rang supérieur. Les chefs-d'œuvre conservés dans les maisons compagnonniques — escaliers miniatures, charpentes complexes, serrures — sont autant des démonstrations de géométrie que des objets.`],
    ["Quelques savoir-faire", `L'ébénisterie se distingue de la menuiserie par son objet et sa technique : elle fabrique des meubles fins, avec placages et bois précieux collés sur un bâti, quand la menuiserie travaille le bois massif pour l'agencement et les ouvrages du bâtiment. Le mot vient de l'ébène, bois exotique dont le placage fit la mode au XVIIe siècle.

La marqueterie de paille compose des décors avec des brins de paille de seigle fendus, aplatis et assemblés. Le matériau, d'une pauvreté absolue, produit par sa surface soyeuse des jeux de lumière que ni le bois ni le métal ne donnent. Redécouverte dans les années 1920 par les décorateurs Art déco, la technique est aujourd'hui pratiquée par une poignée d'ateliers.

Les dentelles du Puy et d'Alençon relèvent de deux familles techniques distinctes : la première est une dentelle aux fuseaux, où des fils tendus sur un carreau sont croisés et tordus ; la seconde est une dentelle à l'aiguille, brodée point par point sur un tracé. La dentelle d'Alençon demande sept étapes successives réalisées par des mains différentes, et plusieurs heures pour un centimètre carré.`],
    ["Ce qui menace ces métiers", `De nombreux savoir-faire artisanaux sont menacés pour une raison arithmétique avant d'être économique : le nombre de praticiens formés devient trop faible pour assurer la transmission. Un métier qui compte cinq praticiens de plus de soixante ans et aucun apprenti disparaîtra, quelle que soit la demande.

La transmission de ces savoirs est essentiellement gestuelle et tacite. Elle ne se consigne pas dans un manuel : elle passe par des années d'observation et de correction côte à côte, ce qui rend la rupture définitive. Un savoir-faire perdu ne se retrouve pas dans les archives, il se réinvente au prix d'un travail considérable — les chantiers de restauration du patrimoine en font régulièrement l'expérience.

Le label Entreprise du patrimoine vivant est une distinction d'État qui reconnaît un savoir-faire rare, ancien ou d'excellence, attribuée pour cinq ans et assortie d'avantages fiscaux. Il concerne plus d'un millier d'entreprises françaises, de l'atelier d'une personne à la manufacture. Son mérite principal est de rendre visible un tissu productif que la statistique économique classe mal, et qui repose souvent sur quelques individus.`],
  ],

  "ga2-jardins-remarquables": [
    ["Une œuvre qui ne s'achève jamais", `Un jardin est une œuvre qui change tous les jours et qu'il faut recommencer sans cesse. C'est ce qui le distingue de toutes les autres formes d'art : abandonné un an, il disparaît ; conservé à l'identique, il meurt. Les jardins historiques que l'on visite ne sont donc jamais l'œuvre d'origine mais une restitution constamment refaite.

Le label Jardin remarquable, créé par le ministère de la Culture, distingue des jardins ouverts au public présentant un intérêt de composition, d'histoire, de collection botanique ou d'entretien. Il concerne quelques centaines de sites en France et est attribué pour cinq ans, renouvelables — durée qui traduit précisément cette fragilité.`],
    ["Deux idées opposées du jardin", `Les jardins de Versailles, dessinés par André Le Nôtre, sont l'expression la plus achevée du jardin à la française : symétrie, perspectives, parterres géométriques, eaux contraintes, végétal taillé. Leur principe est intellectuel avant d'être esthétique — la nature y est soumise à une composition qui se comprend depuis un point de vue unique, celui du château, c'est-à-dire du roi. Le jardin est une démonstration d'ordre.

Le jardin japonais sec, ou jardin de pierres, procède exactement à l'inverse : un espace de gravier ratissé où quelques rochers sont disposés, sans eau, sans fleurs, sans symétrie. Il ne se parcourt pas mais se contemple depuis une véranda, et sa composition asymétrique refuse d'être embrassée d'un seul coup — au Ryōan-ji de Kyoto, on ne peut jamais voir les quinze pierres à la fois. L'un met en scène la maîtrise, l'autre suggère l'incomplétude.

Entre les deux, le jardin de curé est un jardin clos et modeste, mêlant sans hiérarchie légumes, fleurs et plantes médicinales, souvent près d'une église. Sa logique est l'usage : on y cultivait ce dont on avait besoin, et son charme actuel vient précisément de cette absence de composition savante.`],
    ["Conserver le végétal", `Un arboretum est une collection d'arbres cultivés à des fins scientifiques ou pédagogiques, chaque sujet étant identifié et suivi. Il permet d'observer sur des décennies le comportement d'espèces exotiques sous un climat donné, question devenue centrale avec le réchauffement : les gestionnaires forestiers y cherchent aujourd'hui les essences capables de remplacer celles qui dépérissent.

Un conservatoire botanique national est chargé de la connaissance et de la protection de la flore sauvage sur un territoire agréé : inventaire, suivi des espèces menacées, conservation de graines, expertise auprès des collectivités. Il travaille sur la flore spontanée et non sur les plantes ornementales — distinction importante, la protection de la biodiversité végétale ne passant pas par les jardins.

Une plante invasive dans un jardin est une espèce introduite qui se propage au détriment de la flore locale. Renouée du Japon, buddleia, herbe de la pampa, jussie ont souvent été plantés pour leur agrément avant de s'échapper. Le jardin est l'une des principales portes d'entrée des espèces envahissantes, ce qui donne au choix des plantations une portée qui dépasse la clôture.`],
    ["Laisser faire, et le paysage", `Le jardin en mouvement, conçu par Gilles Clément, laisse une large part à la dynamique spontanée du végétal : le jardinier observe où les plantes s'installent d'elles-mêmes et intervient en conséquence, déplaçant les allées plutôt que les plantes. La formule qui le résume — faire le plus possible avec, le moins possible contre — inverse le rapport de force du jardin classique.

Cette conception a durablement influencé le paysagisme public, où l'entretien intensif recule au profit d'une gestion différenciée : tonte rase seulement là où l'usage l'exige, fauche tardive ailleurs.

À l'échelle du paysage, la haie bocagère est une haie champêtre qui structure l'espace agricole en délimitant les parcelles. Ses rôles écologiques sont multiples et bien documentés : abri et nourriture pour la faune, brise-vent qui réduit l'évapotranspiration des cultures, frein au ruissellement et à l'érosion, filtre à nitrates, et corridor biologique reliant des habitats isolés. Des centaines de milliers de kilomètres de haies ont été arrachées en France lors des remembrements, et les programmes de replantation actuels peinent à compenser les destructions qui se poursuivent.`],
  ],

  "ga2-fetes-traditions": [
    ["Le calendrier des gourmandises", `La galette des rois se consomme à l'Épiphanie, le 6 janvier ou le dimanche voisin. Elle prolonge des fêtes romaines de tirage au sort d'un roi éphémère, christianisées ensuite ; la fève était à l'origine une véritable graine, remplacée par une figurine de porcelaine au XIXe siècle. Le partage suit un rituel : le plus jeune se glisse sous la table et attribue les parts, pour garantir que personne ne choisit.

La Chandeleur, le 2 février, est une fête chrétienne — la présentation de Jésus au Temple — à laquelle sont associées les crêpes. Leur forme ronde et dorée a été rapprochée du soleil qui revient, et la date correspond à des fêtes de mi-hiver bien antérieures. La tradition de faire sauter la crêpe en tenant une pièce d'or promettait la prospérité pour l'année.

Le Nouvel An alsacien associe la carpe frite ou le foie gras selon les familles, et les treize desserts provençaux clôturent le repas de Noël : leur nombre évoque le Christ et les douze apôtres, et l'assortiment — fruits secs, nougats, fruits confits, pompe à l'huile — devait rester sur la table trois jours.`],
    ["Des identités régionales", `Chaque région a construit un répertoire dont quelques éléments sont devenus des emblèmes. Bayonne est associée au jambon, salé au sel des salines du bassin de l'Adour, et au chocolat, dont la ville fut la première place française — les chocolatiers juifs chassés de la péninsule ibérique s'y étaient installés au XVIIe siècle.

Le camembert est un fromage normand à croûte fleurie, dont la version moderne doit autant à la boîte en bois inventée à la fin du XIXe siècle, qui permit son transport par chemin de fer, qu'à la fabrication elle-même.

Le bouchon désigne à Lyon un petit restaurant traditionnel servant une cuisine de cochonnailles et d'abats. Le piment d'Espelette est un piment doux du Pays basque protégé par une appellation d'origine, l'une des rares en France pour une épice. Le cidre est traditionnellement associé à la Normandie et à la Bretagne, où le pommier prospère là où la vigne échoue — la géographie des boissons suit celle du climat avec une fidélité remarquable.`,
      { image: "gas-plateau-fromages", legende: "Les fromages régionaux : des produits d'usage local devenus emblèmes identitaires.", alt: "Plateau de fromages français" }],
    ["Des traditions plus jeunes qu'elles n'en ont l'air", `Beaucoup de spécialités régionales sont des inventions récentes présentées comme séculaires. Elles ont souvent été codifiées au XIXe ou au XXe siècle, à un moment précis : celui où le chemin de fer, le tourisme et la construction des identités régionales ont donné un intérêt à posséder un plat reconnaissable.

Les exemples sont nombreux. La bouillabaisse marseillaise, soupe de pêcheurs faite des poissons invendables, devient un plat de restaurant codifié à la fin du XIXe siècle. La fondue savoyarde telle qu'on la connaît doit beaucoup à la promotion touristique des sports d'hiver et à un office suisse du fromage. Le kouign-amann, la tartiflette — créée dans les années 1980 pour écouler du reblochon — ou le vin chaud des marchés de Noël relèvent du même processus.

Ce constat n'enlève rien à leur valeur : une tradition inventée reste une tradition dès lors qu'elle est vécue, transmise et partagée. Il invite seulement à la prudence devant l'argument d'ancienneté, souvent brandi dans les querelles de recette. L'historien Eric Hobsbawm a fait de ces « traditions inventées » un objet d'étude à part entière, et la cuisine en offre l'un des terrains les plus riches.`],
  ],

  "ga2-securite-alimentaire": [
    ["Une réglementation née des crises", `Les grandes crises alimentaires européennes ont façonné la réglementation actuelle, et l'ordre chronologique importe : c'est l'échec qui a produit les dispositifs, non l'anticipation.

La crise de la vache folle en est le pivot. L'encéphalopathie spongiforme bovine, maladie neurodégénérative provoquée par un prion et propagée par des farines animales incorporées à l'alimentation des bovins, s'est révélée transmissible à l'homme sous une forme variante mortelle. Découverte au Royaume-Uni dans les années 1980, longtemps minimisée, elle a provoqué l'effondrement de la confiance et l'embargo sur le bœuf britannique.

Ses conséquences institutionnelles sont considérables : interdiction des farines animales, traçabilité obligatoire de chaque bovin, et surtout séparation de l'évaluation scientifique du risque et de sa gestion politique. Cette séparation est le principe fondateur du dispositif actuel — l'expertise ne décide pas, et le décideur ne choisit pas ses résultats.`],
    ["Qui évalue quoi", `L'EFSA, autorité européenne de sécurité des aliments, évalue les risques à l'échelle de l'Union : elle rend des avis scientifiques sur les substances, les procédés et les dangers, sans pouvoir réglementaire. La décision appartient à la Commission et aux États.

L'ANSES joue le même rôle en France, avec un champ élargi à l'environnement et au travail. Elle évalue, délivre les autorisations de mise sur le marché des produits phytosanitaires et alerte ; les décisions de police sanitaire relèvent des ministères.

Cette architecture est régulièrement mise à l'épreuve sur deux points : l'indépendance des experts, ce qui a conduit à des règles strictes de déclaration des liens d'intérêts, et l'écart entre l'avis scientifique et la décision politique, chacune des deux étant parfois reprochée à l'autre.`],
    ["Trois bactéries à connaître", `La listériose est due à une bactérie qui se développe même au froid, ce qui la rend redoutable : la réfrigération, barrière habituelle, ne l'arrête pas. Elle est rare mais grave, avec une mortalité élevée, et vise particulièrement les femmes enceintes — chez qui elle peut provoquer une fausse couche —, les nourrissons, les personnes âgées et immunodéprimées. D'où les recommandations d'éviter fromages au lait cru, charcuteries de coupe et poissons fumés pendant la grossesse.

La salmonellose est bien plus fréquente, liée aux œufs, aux volailles et aux produits contaminés. Elle provoque une gastro-entérite généralement bénigne chez l'adulte sain, sévère chez les personnes fragiles. Elle est détruite par la cuisson, ce qui explique la prudence sur les préparations à base d'œufs crus insuffisamment refroidies.

La toxine botulique est produite par une bactérie qui se développe en l'absence d'oxygène, notamment dans les conserves mal stérilisées et les charcuteries artisanales. C'est la substance la plus toxique connue, et elle agit en bloquant la transmission nerveuse. Un couvercle bombé, une odeur suspecte doivent conduire à jeter sans goûter. Elle est détruite par un chauffage à cent degrés pendant plusieurs minutes, ce qui justifie de faire bouillir une conserve familiale douteuse.`],
    ["Réagir vite", `La date limite de consommation, formulée « à consommer jusqu'au », marque une date au-delà de laquelle le produit présente un risque sanitaire : elle concerne les denrées périssables et ne se dépasse pas. Elle diffère de la date de durabilité minimale, formulée « à consommer de préférence avant », qui ne signale qu'une perte possible de qualité — un paquet de pâtes ou une boîte de conserve restent parfaitement consommables au-delà. La confusion entre les deux mentions représente une part significative du gaspillage alimentaire domestique.

Le système d'alerte rapide européen pour les denrées permet à un État qui détecte un produit dangereux d'en informer immédiatement tous les autres, avec la nature du danger et la traçabilité des lots. Il déclenche les retraits et les rappels à l'échelle du continent en quelques heures.

Un rappel de produit demande aux consommateurs de rapporter ou détruire un article déjà vendu — mesure plus lourde qu'un simple retrait des rayons. La France a créé un site public unique recensant tous les rappels, après que l'affaire des laits infantiles contaminés eut montré que l'information n'atteignait pas les familles. L'efficacité réelle reste limitée : une fraction seulement des produits rappelés revient.`],
  ],

  "ga2-cuisines-europe": [
    ["L'Italie, une somme de régions", `La cuisine italienne est avant tout une somme de cuisines régionales, et l'idée d'une cuisine nationale y est aussi récente que l'unité politique du pays. Le beurre et le riz au nord, l'huile d'olive et le blé dur au sud ; les pâtes fraîches aux œufs en Émilie, les pâtes sèches en Campanie. Un Italien parle de cuisine sicilienne ou piémontaise bien avant de parler de cuisine italienne.

Son principe le plus constant est la retenue : un petit nombre d'ingrédients de qualité par plat, préparés simplement. Une sauce tomate n'a pas besoin de dix composants, un plat de pâtes en compte souvent trois. Cette économie de moyens exige en retour une exigence absolue sur le produit — elle ne pardonne rien.

Le risotto illustre une technique plus qu'une recette : un riz rond, riche en amidon, cuit progressivement par ajouts successifs de bouillon en remuant, ce qui libère l'amidon et lie le plat sans crème. La pizza napolitaine traditionnelle repose sur une pâte fine à bord épais, longuement levée, cuite très brièvement — une minute environ — dans un four à bois à plus de quatre cents degrés, ce qui produit ses cloques caractéristiques.`],
    ["L'Espagne", `La paella est un plat valencien de riz cuit dans une poêle large et peu profonde, dont elle tire son nom — *paella* désigne l'ustensile. Sa cuisson sans remuer permet la formation d'une couche de riz caramélisé au fond, le *socarrat*, considérée localement comme la meilleure partie. La recette valencienne d'origine associe lapin, poulet, haricots et escargots, non les fruits de mer que le tourisme a imposés.

Le gaspacho est une soupe froide andalouse de légumes crus mixés — tomate, concombre, poivron, ail, pain, huile d'olive, vinaigre. Sa forme d'origine, antérieure à la tomate, était une simple émulsion de pain, d'ail, d'huile et d'eau, nourriture de journaliers agricoles adaptée à la chaleur.

Le jambon ibérique de bellota provient de porcs de race ibérique nourris de glands pendant la période d'engraissement, dans les pâturages de chênes de l'ouest péninsulaire. Le régime aux glands modifie la composition de la graisse, riche en acide oléique, ce qui donne au jambon sa texture fondante et son goût de noisette. L'affinage dure plusieurs années.`],
    ["Le Nord et l'Est", `La cuisine des rivages de la Baltique et de Scandinavie a un dénominateur commun imposé par le climat : un usage important de la conservation par le sel, le fumage et la fermentation. Six mois sans récolte fraîche obligeaient à traiter tout ce qui pouvait l'être, et ces techniques ont produit un répertoire de goûts puissants qui subsiste bien après que la nécessité a disparu.

Le hareng en est l'emblème : conservé par salaison, marinade ou fumage, décliné en dizaines de préparations, il a nourri l'Europe du Nord et fait la fortune des villes hanséatiques. Sa pêche et son commerce ont structuré des économies entières.

Le smørrebrød danois est une tartine ouverte sur pain de seigle dense, garnie et composée avec un soin qui en fait un plat à part entière — hareng, saumon, rôti froid, œuf, crevettes, avec une grammaire précise des accompagnements.

Le goulasch hongrois est une soupe ou un ragoût de viande au paprika, plat de bergers à l'origine. Il rappelle que le piment, arrivé d'Amérique via les Ottomans, est devenu en quelques siècles l'ingrédient identitaire d'une cuisine d'Europe centrale — les traditions culinaires les plus affirmées reposent souvent sur des emprunts.`],
  ],

  "ga2-cuisine-technique-froid": [
    ["Ce que fait l'acide", `L'acide d'une marinade ne cuit pas le poisson : il en dénature les protéines. Le résultat visuel est comparable — la chair blanchit et raffermit — parce que la dénaturation, c'est-à-dire le dépliement des protéines et leur agrégation, est exactement ce que produit la chaleur. Mais le mécanisme diffère, et surtout les conséquences.

La chaleur détruit les micro-organismes et les parasites ; l'acidité, non. Un ceviche n'est pas un poisson cuit du point de vue sanitaire : il exige un poisson d'une fraîcheur irréprochable et, pour les espèces concernées, une congélation préalable contre l'anisakis.

Cette distinction vaut pour toutes les préparations sans cuisson, et elle commande la prudence. Un tartare est une préparation de viande ou de poisson cru haché et assaisonné ; un carpaccio, de fines tranches crues assaisonnées, servi pour la première fois à Venise en 1950 et nommé d'après le peintre pour ses rouges. Dans les deux cas, le hachage ou la découpe multiplient les surfaces exposées, ce qui rend la fraîcheur et l'hygiène d'autant plus critiques.`],
    ["Le sel et la fumée", `Le gravlax est un saumon mariné au sel, au sucre et à l'aneth, pressé pendant un à trois jours. Son nom scandinave signifie « saumon enterré » : on l'enfouissait autrefois dans le sable pour le laisser fermenter légèrement. Le sel déshydrate en surface et modifie la texture, le sucre équilibre et retient un peu d'eau, l'aneth parfume.

Le fumage à froid se pratique à basse température, généralement sous trente degrés, et ne cuit pas le produit : il l'imprègne des composés aromatiques et antimicrobiens de la fumée tout en le déshydratant lentement. C'est la technique du saumon fumé et de nombreuses charcuteries. Le fumage à chaud, au contraire, cuit — un maquereau fumé à chaud est cuit, un saumon fumé à froid ne l'est pas.

Le confisage à froid conserve dans le sucre ou dans le sel sur une longue durée, par déplacement progressif de l'eau du produit. Les fruits confits d'Apt subissent ainsi des bains successifs de sirops de plus en plus concentrés pendant des semaines, une immersion trop brutale faisant éclater les cellules.`],
    ["Faire travailler les bactéries", `La lactofermentation est une fermentation conduite par des bactéries lactiques en milieu salé. Le principe est d'une élégance remarquable : on ne stérilise rien, on sélectionne. Le sel, à une concentration de deux à trois pour cent, inhibe la plupart des micro-organismes mais pas les lactobacilles présents naturellement sur les légumes ; ceux-ci se développent et transforment les sucres en acide lactique.

C'est cette acidité qui conserve, en abaissant le pH sous le seuil auquel la plupart des micro-organismes indésirables peuvent se développer, y compris la bactérie du botulisme. Le milieu se protège donc lui-même, sans chaleur ni conservateur.

Choucroute, cornichons, kimchi, olives, pain au levain, yaourt et une bonne part des fromages relèvent de cette famille. La lactofermentation présente en outre l'avantage d'améliorer la valeur nutritionnelle — elle produit des vitamines, dégrade certains anti-nutriments et rend les aliments plus digestes.`],
    ["Émulsionner sans chauffer", `Une émulsion froide est une dispersion stable de deux liquides qui ne se mélangent pas, obtenue sans chauffage. La mayonnaise en est le cas d'école : de l'huile dispersée en gouttelettes minuscules dans une phase aqueuse, stabilisée par la lécithine du jaune d'œuf, dont les molécules se placent à l'interface.

Sa réussite tient à deux gestes : verser l'huile lentement au départ, pour que chaque goutte soit dispersée avant l'arrivée de la suivante, et fouetter assez énergiquement pour réduire la taille des gouttelettes. Une mayonnaise qui « tranche » n'est pas ratée mais inversée — on la rattrape en repartant d'un peu de moutarde et en y réincorporant progressivement le mélange raté.

Toutes ces préparations sans cuisson imposent les mêmes précautions : une chaîne du froid stricte, des produits d'une fraîcheur irréprochable, un matériel et des mains d'une hygiène rigoureuse, et une consommation rapide. La cuisson est une barrière sanitaire ; s'en passer suppose d'en dresser d'autres.`],
  ],

  "ga2-economie-alimentaire": [
    ["Qui touche quoi", `Une filière alimentaire rassemble l'ensemble des acteurs qui interviennent de la production à la consommation d'un produit : agriculteurs, collecteurs, transformateurs, distributeurs, restaurateurs.

La part du prix payé par le consommateur qui revient à l'agriculteur est minoritaire et très variable selon les produits — élevée pour un œuf ou un légume brut, faible pour un produit très transformé où l'agriculture ne fournit qu'une matière première parmi d'autres. Pour une baguette, le blé représente quelques centimes ; pour un plat cuisiné, la part agricole se compte en pourcents.

Cette part a fortement diminué au cours du dernier siècle, non par captation malveillante mais par allongement de la chaîne : le consommateur achète de plus en plus de service — transformation, conditionnement, logistique, mise en rayon — et de moins en moins de matière première. Ce constat structurel ne dispense pas d'examiner la répartition à l'intérieur de la chaîne, qui dépend des rapports de force.`],
    ["Le poids de la distribution", `La grande distribution rassemble les enseignes de vente au détail à grande surface, qui écoulent en France les deux tiers environ de l'alimentation. Sa force tient à sa concentration : quelques centrales d'achat — structures qui négocient les achats pour l'ensemble des magasins d'un groupe, voire de plusieurs alliés — font face à des milliers de fournisseurs.

Ce déséquilibre a motivé plusieurs lois françaises successives visant à encadrer les négociations commerciales et à protéger le revenu agricole, avec des résultats limités. La difficulté est réelle : imposer un prix minimum d'achat se répercute sur le prix de vente, ce qui pèse sur les ménages modestes.

Un produit d'appel est vendu à très faible marge pour attirer la clientèle, la marge étant reconstituée sur le reste du panier. Une marque de distributeur est un produit vendu sous la marque de l'enseigne, fabriqué le plus souvent par un industriel tiers : elle offre au distributeur une marge supérieure et un levier de négociation face aux grandes marques.`],
    ["Vendre autrement", `Un circuit court est une vente comportant au plus un intermédiaire entre le producteur et le consommateur. La définition est officielle et porte sur le nombre d'intermédiaires, non sur la distance — un produit vendu directement à cinq cents kilomètres relève du circuit court, un produit local passant par trois grossistes n'en relève pas.

Ses formes sont nombreuses : vente à la ferme, marchés, associations pour le maintien d'une agriculture paysanne, magasins de producteurs, vente en ligne directe. Le producteur y capte une part bien plus grande de la valeur, mais il assume aussi le conditionnement, la logistique et la commercialisation — c'est-à-dire un travail qui n'est pas gratuit et qui n'est pas son métier d'origine.

Son bilan environnemental n'est pas automatiquement meilleur : une multiplication de trajets en camionnette peu remplie peut peser davantage, par kilogramme transporté, qu'un camion complet. Le circuit court se justifie par la répartition de la valeur et le lien social plus sûrement que par le seul argument carbone.`],
    ["Des prix qui bougent", `La volatilité des prix agricoles désigne des variations fortes et rapides des cours. Elle s'explique par trois caractéristiques du secteur : l'offre dépend du climat et ne s'ajuste pas en cours de saison ; la demande alimentaire est peu élastique, on ne mange pas deux fois plus parce que le blé baisse ; et les stocks mondiaux sont limités. Un déficit de quelques pour cent de la récolte mondiale peut donc doubler un cours.

Un marché à terme agricole permet de s'engager aujourd'hui sur un prix pour une livraison future. Son rôle premier est la couverture : un agriculteur ou un meunier sécurise son prix et supprime l'incertitude. Il attire aussi des intervenants purement financiers, dont le rôle est débattu — ils apportent de la liquidité, et sont accusés d'amplifier les mouvements lors des crises, comme en 2008.

La valeur ajoutée est la richesse créée à chaque étape de transformation, c'est-à-dire la différence entre la valeur du produit sortant et celle des intrants consommés. Suivre sa répartition le long d'une filière est le seul moyen de savoir où va l'argent — et c'est précisément ce que fait l'Observatoire de la formation des prix et des marges, créé en France pour objectiver un débat qui se menait auparavant sur des impressions.`],
  ],

  "ga2-alimentation-durable": [
    ["Ce qui pèse vraiment", `Ce que l'on mange pèse davantage sur le climat que la façon dont on le transporte. Le constat surprend, car le transport est visible et l'élevage ne l'est pas. Les analyses de cycle de vie convergent pourtant : le transport ne représente en moyenne qu'une faible part de l'empreinte d'un aliment, la production agricole en concentrant l'essentiel.

Le facteur dominant est la nature des aliments, et particulièrement la part de produits animaux. L'écart entre un kilogramme de bœuf et un kilogramme de légumineuses se compte en dizaines de fois, quand l'écart entre local et importé par bateau se compte en pourcents. Un produit importé par avion fait exception — les denrées très périssables transportées par voie aérienne ont une empreinte considérable — mais elles restent une part minime des volumes.

La viande de ruminant a l'empreinte la plus élevée parce que la fermentation entérique de leur rumen produit du méthane, gaz à effet de serre très puissant à court terme. S'y ajoutent la surface mobilisée et la déforestation liée aux cultures fourragères. Ce constat est robuste, et il n'annule pas les différences entre systèmes d'élevage : un pâturage extensif sur des prairies non cultivables stocke du carbone dans le sol et entretient des milieux ouverts, ce qu'un engraissement au soja importé ne fait pas.`],
    ["Les régimes et leurs noms", `Un régime flexitarien réduit la consommation de viande sans l'exclure. C'est, en pratique, le levier le plus efficace à l'échelle d'une population : diviser par deux la consommation de viande d'un grand nombre de personnes produit un effet bien supérieur à la suppression totale par une minorité.

Le végétarisme exclut la chair animale, avec des variantes selon qu'il accepte œufs et produits laitiers. Le véganisme va plus loin et exclut tout produit d'origine animale, y compris hors alimentation — cuir, laine, cosmétiques testés, miel. La différence n'est pas de degré mais de nature : le premier est un choix alimentaire, le second une position éthique sur l'usage des animaux.

L'empreinte eau d'un aliment est la quantité d'eau mobilisée tout au long de sa production. Elle se décompose utilement en eau de pluie, eau prélevée dans les nappes et rivières, et eau polluée. Cette distinction évite les comparaisons absurdes : un aliment gourmand en eau de pluie dans une région humide ne pose pas le même problème qu'un aliment irrigué dans une région en stress hydrique.

La saisonnalité, enfin, est la période de production naturelle d'un produit sans forçage. Une tomate de serre chauffée en hiver peut avoir une empreinte supérieure à une tomate importée d'Espagne en pleine terre — la saison compte souvent davantage que la distance.`],
    ["Ne pas jeter", `Le gaspillage alimentaire domestique désigne les aliments achetés puis jetés sans avoir été consommés. Il représente en France plusieurs dizaines de kilogrammes par personne et par an, dont une part importante de produits encore emballés. Son coût climatique est double : on a produit pour rien, et le déchet organique émet en se décomposant.

Les leviers domestiques sont simples et documentés : planifier ses achats et faire une liste, ce qui réduit les achats impulsifs ; comprendre les dates — la date de durabilité minimale, « à consommer de préférence avant », n'impose aucun rejet ; ranger le réfrigérateur de façon à voir ce qui doit partir ; et accommoder les restes, savoir-faire que la cuisine bourgeoise a longtemps cultivé et que l'abondance a fait perdre.

À l'échelle de la filière, les pertes se situent surtout au champ, au stockage et à la distribution, avec des causes très différentes selon les pays — pertes post-récolte faute d'infrastructures dans les pays à faible revenu, gaspillage au stade de la consommation dans les pays riches.`],
    ["L'emballage", `Un emballage recyclable est un emballage effectivement pris en charge par une filière de recyclage — précision qui compte, car un matériau techniquement recyclable sans filière ni débouché ne l'est pas en pratique. Le verre, l'acier, l'aluminium et le carton se recyclent bien ; les plastiques inégalement, et les emballages multicouches presque pas.

La consigne pour réemploi suit une autre logique, souvent confondue avec la consigne pour recyclage : l'emballage est repris, lavé et réutilisé tel quel, sans être refondu. Une bouteille de verre réemployée une dizaine de fois présente un bilan nettement meilleur qu'une bouteille recyclée à chaque usage, à condition que les distances de collecte restent raisonnables — le verre est lourd, et le transport peut annuler le gain.

Le système a existé partout en France jusqu'aux années 1980 et fonctionne encore en Allemagne. Sa reconstitution suppose une standardisation des contenants, un réseau de collecte et des laveries industrielles — c'est-à-dire une infrastructure qu'il avait fallu des décennies à bâtir et quelques années à démanteler.`],
  ],

  "ga3-cuisines-asie": [
    ["La Chine au pluriel", `La cuisine chinoise réunit des traditions régionales très différentes entre elles, à la mesure d'un pays continent. On distingue classiquement huit grandes écoles, dont deux dominent la représentation qu'on en a.

La cuisine cantonaise, du sud, est celle qui a le plus influencé les restaurants chinois d'Occident, parce que l'émigration chinoise des XIXe et XXe siècles est partie majoritairement du Guangdong. Elle privilégie la vapeur, les cuissons courtes, les sauces légères et une recherche de la fraîcheur du produit. Le dim sum en est l'expression la plus connue : un ensemble de petites préparations servies à la vapeur ou frites, consommées le matin ou à midi avec du thé.

La cuisine sichuanaise, de l'ouest, est réputée pour son usage du piment et du poivre du Sichuan. Ce dernier n'est pas un poivre et ne pique pas : il produit une sensation d'engourdissement et de picotement électrique, due à une molécule qui stimule les récepteurs tactiles. L'association du piquant du piment et de cet engourdissement porte un nom propre, *málà*, et constitue une catégorie de sensation à part entière que le français ne sait pas nommer.`],
    ["Le Japon et le goût fondamental", `Le dashi est le bouillon de base de la cuisine japonaise, préparé à partir d'algue kombu et de copeaux de bonite séchée. Sa préparation prend quelques minutes et il est présent partout — soupes, sauces, cuissons, marinades.

Son importance dépasse la cuisine japonaise : c'est en cherchant à comprendre pourquoi le dashi avait ce goût si particulier qu'un chimiste japonais isola en 1908 le glutamate et identifia l'umami comme cinquième saveur fondamentale, aux côtés du sucré, du salé, de l'acide et de l'amer. Il fallut près d'un siècle pour que l'existence de récepteurs spécifiques soit confirmée et que la découverte soit universellement acceptée.

Le miso est une pâte fermentée de soja, obtenue avec un ferment de riz ou d'orge, dont les variétés vont du blanc doux et jeune au rouge puissant longuement affiné. C'est un condiment, un assaisonnement et une source d'umami. Une règle de cuisine s'y attache : on ne fait pas bouillir une soupe après y avoir dissous le miso, la chaleur détruisant ses arômes et ses ferments.`],
    ["Corée et Asie du Sud-Est", `Le kimchi coréen est un légume fermenté, le plus souvent du chou chinois salé puis enrobé d'une pâte de piment, d'ail, de gingembre et de saumure de poisson. Il en existe des centaines de variantes, et il accompagne pratiquement tous les repas. Sa préparation collective à l'automne, le *kimjang*, est inscrite au patrimoine culturel immatériel de l'humanité — ce qui est reconnu n'est pas la recette mais le moment social de partage entre voisines et familles.

Le nuoc-mâm est une sauce de poisson fermenté vietnamienne, obtenue par salaison longue d'anchois dont on recueille le liquide. Elle joue le rôle du sel et de l'umami dans toute la cuisine du Sud-Est asiatique, et son ancêtre romain, le *garum*, occupait exactement la même fonction dans l'Antiquité méditerranéenne — deux inventions indépendantes du même principe.

Le pho vietnamien est une soupe de nouilles de riz au bouillon longuement mijoté, parfumé d'épices grillées — badiane, cannelle, gingembre —, servie avec des herbes fraîches ajoutées au dernier moment. Le curry thaï vert repose sur une pâte d'épices fraîches pilées — piments verts, citronnelle, galanga, coriandre — délayée dans du lait de coco.`],
    ["Le principe de l'équilibre", `De nombreuses cuisines d'Asie du Sud-Est sont structurées par la recherche d'un équilibre entre l'acide, le sucré, le salé et le pimenté, parfois complété par l'amer. Ce n'est pas une préférence esthétique mais une méthode de composition : chaque plat s'ajuste en fin de préparation en corrigeant l'une des dimensions, comme on accorde un instrument.

En cuisine thaïe, la salade de papaye verte se règle ainsi au moment du service — un trait de citron vert pour l'acide, de la sauce de poisson pour le salé, du sucre de palme pour le sucré, du piment pilé pour le feu. Le cuisinier goûte et ajuste, et deux versions du même plat diffèrent selon le mangeur.

Cette logique se retrouve dans la disposition des condiments sur la table, où chacun rectifie son bol. Elle contraste avec la tradition française, où l'assaisonnement est arrêté en cuisine et où corriger dans l'assiette est presque une critique du cuisinier. Deux conceptions du plat achevé, l'une close, l'autre ouverte.`],
  ],

  "ga3-cuisines-moyen-orient": [
    ["Le repas qui se partage", `Le partage des mezzés structure le repas dans une grande partie du Levant : une succession de petits plats disposés ensemble sur la table, dont chacun se sert au fil de la conversation. Il n'y a pas d'entrée ni de plat principal au sens français, mais un ensemble qui s'étale dans le temps.

Le houmous en est le pilier : une purée de pois chiches au tahini — pâte de sésame —, relevée de citron et d'ail, servie avec un filet d'huile d'olive et du pain. Sa paternité fait l'objet d'une rivalité régionale sérieuse entre Liban, Israël, Syrie et Palestine, qui a donné lieu à des records du monde du plus grand plat et à des demandes de protection commerciale.

Le taboulé libanais est une salade dominée par le persil finement ciselé, avec très peu de boulgour, de la tomate, de la menthe, du citron et de l'huile d'olive. La version française, où la semoule domine et le persil se réduit à quelques brins, en est une transformation complète — utile à connaître pour éviter un malentendu à table.`],
    ["Les épices du Levant", `Le za'atar désigne à la fois une plante — une origanée sauvage — et un mélange d'herbes séchées, de sumac et de sésame grillé, parfois additionné de sel. Il se consomme mêlé à l'huile d'olive sur du pain, au petit-déjeuner. Sa cueillette sauvage est réglementée dans plusieurs pays en raison de la surexploitation.

Le sumac est une épice acidulée obtenue en broyant les baies séchées d'un arbuste. Il apporte une acidité fruitée sans liquide, ce qui le rend précieux là où le citron détremperait — sur une salade, une viande grillée, un houmous. Il tenait, avant l'arrivée du citron, le rôle acidifiant principal de la cuisine du Levant.

Ces mélanges appartiennent à une famille plus vaste, où chaque région a le sien : baharat, dukkah, ras el-hanout au Maghreb — mélange dont le nom signifie « le meilleur de la boutique » et dont la composition varie selon le marchand, de quelques épices à plus de vingt.`],
    ["Le Maghreb", `Le couscous est une semoule de blé dur roulée à la main, cuite à la vapeur au-dessus du bouillon dans un couscoussier. La cuisson à la vapeur en plusieurs passages, avec un égrenage entre chacun, est ce qui donne des grains séparés et gonflés ; la semoule instantanée réhydratée à l'eau chaude en est une simplification qui ne donne ni la texture ni le goût. Ses savoir-faire ont été inscrits au patrimoine culturel immatériel de l'humanité en 2020, par une candidature commune de l'Algérie, du Maroc, de la Tunisie et de la Mauritanie — geste diplomatique remarquable après des années de revendications concurrentes.

Le tajine désigne à la fois un plat mijoté et le récipient conique en terre qui lui donne son nom. La forme du couvercle n'est pas décorative : elle condense la vapeur, qui retombe sur les aliments, permettant une cuisson longue avec très peu de liquide — technique adaptée à un pays sec et à un combustible rare.

La harissa est une pâte de piment tunisienne, relevée d'ail, de carvi et de coriandre. Le citron confit au sel, laissé plusieurs semaines jusqu'à ce que l'écorce s'attendrisse, apporte aux tajines une amertume parfumée que le citron frais ne donne pas.`],
    ["La pâtisserie", `La pâtisserie orientale au miel rassemble un ensemble de préparations construites sur trois éléments : une pâte très fine — feuilles de brick, pâte filo, ou pâte travaillée à la main —, des fruits secs pilés — amandes, pistaches, noix — et un sirop de sucre ou de miel dont on imbibe la pièce après cuisson.

Baklava, cornes de gazelle, makrout, ktaïef relèvent de cette famille, avec des frontières régionales qui suivent moins les États actuels que l'ancienne aire ottomane. La finesse de la pâte est le critère de maîtrise : une pâte filo étirée à la main jusqu'à la transparence sur une table entière est un geste d'artisan, et son remplacement par des feuilles industrielles a uniformisé le résultat.

Ces pâtisseries sont associées aux fêtes et à l'hospitalité, et se servent avec un café ou un thé dont l'amertume compense la puissance du sirop. Leur logique gustative n'est pas celle du dessert français, où le sucre est modéré au profit du fondant : elle assume une intensité franche, et se consomme en très petites quantités.`],
  ],

  "ga3-cuisines-ameriques": [
    ["Le maïs et sa chimie", `La cuisine mexicaine traditionnelle est inscrite au patrimoine culturel immatériel de l'humanité — la première cuisine à l'avoir été, en 2010 —, et ce qui a été reconnu est un système complet, du champ à la table, autour du maïs, du haricot et du piment.

La nixtamalisation est le traitement du maïs à l'eau alcaline, additionnée de chaux ou de cendres, avant mouture. Le procédé, mis au point en Mésoamérique il y a plus de trois mille ans, ramollit l'enveloppe des grains, permet de faire une pâte qui se travaille, et surtout libère la niacine — vitamine B3 — que le maïs contient sous une forme non assimilable.

Sa portée est considérable et son ignorance a coûté cher : le maïs a été diffusé en Europe et en Amérique du Nord sans le procédé qui l'accompagnait, provoquant des épidémies de pellagre, maladie de carence en niacine, chez les populations qui en dépendaient. Un aliment transféré sans sa technique de préparation cesse d'être le même aliment.`],
    ["Mexique et Pérou", `Le mole est une sauce mexicaine complexe mêlant piments, épices, fruits secs, graines et parfois chocolat, mijotée longuement. Le mole poblano peut compter plus de vingt ingrédients, et le chocolat n'y apporte ni sucre ni goût de dessert mais de l'amertume et du liant. Le chipotle, autre pilier de cette cuisine, est un jalapeño mûri puis fumé, ce qui lui donne une saveur profonde absente du piment frais.

Le ceviche péruvien est du poisson cru mariné dans du jus d'agrume — traditionnellement du citron vert —, avec oignon rouge, piment et coriandre. La marinade y est brève, quelques minutes, à la différence des versions prolongées qui rendent la chair cotonneuse.

Le Pérou cultive plusieurs milliers de variétés de pommes de terre, patrimoine génétique sans équivalent conservé par les communautés andines et par un centre international dédié. Cette diversité est une assurance contre les maladies et le climat — exactement ce qui manquait à l'Irlande de 1845. Le pisco, eau-de-vie de raisin, fait par ailleurs l'objet d'un litige d'appellation ancien entre le Pérou et le Chili, qui le revendiquent tous deux.`],
    ["Brésil et États-Unis", `La feijoada brésilienne est un ragoût de haricots noirs et de morceaux de porc, mijoté longuement et servi avec riz, farine de manioc, chou et orange. Le récit qui en fait un plat inventé par les esclaves à partir des bas morceaux dédaignés par les maîtres est largement une reconstruction du XXe siècle : le plat descend plutôt des ragoûts de légumineuses portugais, et son statut de plat national a été construit à l'époque où le Brésil cherchait à célébrer son métissage.

Le barbecue du sud des États-Unis est une cuisson lente à basse température et à la fumée, pendant de nombreuses heures. Il n'a rien à voir avec la grillade rapide que le mot désigne en français : le principe est exactement celui appliqué aux morceaux fermes — transformer le collagène en gélatine par une cuisson longue et douce. Chaque État en revendique une variante, différant par la viande, le bois et la sauce.

Le Coca-Cola, inventé à Atlanta en 1886 par un pharmacien qui cherchait un tonique, est devenu le produit alimentaire le plus distribué de la planète et l'un des symboles les plus contestés de la mondialisation alimentaire.`],
    ["Ce que les Amériques ont donné", `L'apport des Amériques à la cuisine mondiale est probablement le plus important de toute l'histoire alimentaire : tomate, pomme de terre, maïs, cacao, piment, vanille, haricot, courge, avocat, arachide, ananas, dinde.

Il suffit d'imaginer les conséquences de leur absence pour en mesurer la portée. Pas de sauce tomate en Italie, pas de paprika en Hongrie, pas de piment en Inde ni en Thaïlande, pas de frites en Belgique, pas de chocolat en Suisse. Les cuisines qui nous paraissent les plus enracinées reposent sur des plantes arrivées il y a moins de cinq siècles.

L'échange fut réciproque et non moins lourd de conséquences : blé, riz, canne à sucre, café, bovins, porcs et chevaux traversèrent en sens inverse, transformant les paysages et les sociétés américaines — et l'introduction de maladies européennes y provoqua l'effondrement démographique le plus massif de l'histoire connue. L'échange colombien a redistribué les plantes du monde entier, et cette redistribution est la base de presque toutes les cuisines nationales actuelles.`],
  ],

  "ga3-cuisine-afrique": [
    ["Les bases céréalières", `Le mil, le sorgho et l'igname sont des bases alimentaires anciennes en Afrique subsaharienne, domestiquées sur le continent bien avant l'arrivée des cultures importées. Le mil et le sorgho supportent la sécheresse et des sols pauvres là où le maïs et le riz échouent, ce qui leur donne un rôle stratégique dans les régions sahéliennes.

Le teff, céréale à très petits grains cultivée sur les hauts plateaux éthiopiens, en est un autre exemple : ses grains, à peine plus gros qu'une tête d'épingle, se moulent entiers, ce qui en fait une farine complète riche en fer et sans gluten.

L'injera éthiopienne en est faite : une galette spongieuse obtenue par fermentation de la pâte de teff pendant plusieurs jours, cuite sur une plaque. Sa surface criblée d'alvéoles retient les sauces, et elle sert à la fois d'assiette, de pain et de couvert — on déchire un morceau pour saisir la nourriture disposée dessus. Un repas éthiopien se partage à plusieurs autour d'une même injera, ce qui en fait un objet social autant qu'alimentaire.`],
    ["Manioc et tubercules", `Le fufu, en Afrique de l'Ouest et centrale, est une pâte obtenue en pilant longuement des tubercules cuits — igname, manioc, plantain — jusqu'à obtenir une masse lisse et élastique. Il se consomme en prélevant une boulette entre les doigts, qu'on creuse et qu'on trempe dans la sauce, sans mâcher.

L'attiéké ivoirien est une semoule de manioc fermenté : le tuber est râpé, ensemencé, fermenté, pressé, granulé puis cuit à la vapeur. Cette fermentation n'est pas seulement gustative — elle réduit la teneur en composés cyanogènes naturellement présents dans le manioc amer, qui sont toxiques. Toutes les préparations traditionnelles du manioc comportent une étape de détoxification, par trempage, fermentation ou cuisson prolongée, et son introduction sans ces techniques a provoqué des intoxications collectives.

C'est le même enseignement que la nixtamalisation du maïs, dans une autre partie du monde : une plante et sa technique de préparation forment un ensemble indissociable, patiemment mis au point, et l'une ne voyage pas sans l'autre.`],
    ["Les sauces", `La cuisine ouest-africaine s'organise très largement autour du couple féculent-sauce, la sauce concentrant le goût et le féculent apportant les calories.

Le maafe est un ragoût à la pâte d'arachide, épais et onctueux, préparé avec viande ou poisson et des légumes. L'arachide, arrivée d'Amérique du Sud, est devenue en Afrique de l'Ouest une culture alimentaire et d'exportation majeure — au point d'avoir structuré des économies coloniales entières, le « bassin arachidier » sénégalais en gardant l'empreinte.

La sauce gombo est liée par la texture mucilagineuse du gombo, légume dont les mucilages s'échappent à la cuisson et donnent une consistance filante caractéristique, recherchée ici et déconcertante ailleurs. C'est un bon exemple de propriété texturale valorisée dans une culture et rejetée dans une autre — comme le natto japonais ou certains fromages coulants.`],
    ["Les plats emblèmes", `Le thiéboudienne sénégalais est un plat de riz cuit dans un bouillon de poisson et de légumes, souvent considéré comme le plat national du pays. Son nom signifie littéralement « riz au poisson » en wolof. La cuisson du riz dans le bouillon, après retrait du poisson et des légumes, lui donne sa couleur et sa profondeur. Ses savoir-faire sont inscrits au patrimoine culturel immatériel de l'humanité.

Le jollof rice est un riz cuit dans une base tomatée épicée, populaire dans toute l'Afrique de l'Ouest anglophone et au-delà. Il fait l'objet d'une rivalité amicale et durable entre le Nigeria, le Ghana et le Sénégal, chacun revendiquant la meilleure version — la « jollof war » est devenue un phénomène culturel en ligne, avec ses concours et ses provocations.

Ces rivalités culinaires méritent d'être notées : elles signalent que la cuisine sert partout de marqueur identitaire, et que la question de l'origine d'un plat est rarement une question historique innocente.`],
  ],

  "ga3-vins-monde": [
    ["Qui produit quoi", `L'Italie, la France et l'Espagne restent les trois premiers producteurs mondiaux de vin, le classement des deux premiers changeant d'une année à l'autre selon les millésimes et les aléas climatiques. L'Espagne domine en surface plantée, avec des rendements plus faibles.

Le nouveau monde viticole — Amériques, Océanie, Afrique du Sud — a bouleversé le marché à partir des années 1980, en imposant une logique différente : des vins identifiés par leur cépage plutôt que par leur origine géographique. Un consommateur qui sait ce qu'est un cabernet-sauvignon n'a pas besoin d'apprendre la hiérarchie des appellations bordelaises.

Cette lisibilité a longtemps désarçonné la France, dont le système repose sur l'idée inverse : c'est le lieu qui fait le vin, et le cépage n'en est qu'un des facteurs, aux côtés du sol, du climat et des usages. Les deux approches ont depuis convergé, les étiquettes françaises mentionnant plus volontiers les cépages et le nouveau monde revendiquant ses terroirs.`],
    ["Les cépages emblèmes", `Chaque pays s'est identifié à un cépage. Le malbec a fait la réputation de l'Argentine, dont les vignobles d'altitude de Mendoza lui donnent une concentration que sa région d'origine, Cahors, produit différemment.

Le carménère, cépage bordelais disparu d'Europe après le phylloxéra, a été redécouvert au Chili en 1994 : on y cultivait sous le nom de merlot des vignes qui n'en étaient pas, l'erreur ayant duré plus d'un siècle. C'est l'une des plus belles résurrections de l'histoire de la vigne, permise par l'ampélographie puis confirmée par la génétique.

Le sauvignon blanc néo-zélandais, en particulier celui de Marlborough, a créé en une génération un style reconnaissable entre tous — intensément aromatique, sur le fruit exotique et le buis. Le pinotage sud-africain est un croisement créé en 1925 entre pinot noir et cinsault, cas rare de cépage inventé de toutes pièces devenu emblème national.

La Chine est aujourd'hui le premier producteur de vin d'Asie et figure parmi les tout premiers vignobles mondiaux en surface, réalité encore peu perçue en Europe.`],
    ["Le jugement de Paris", `En 1976, un marchand de vin britannique installé à Paris organise une dégustation à l'aveugle opposant des vins californiens à des grands crus français, devant un jury exclusivement français composé de sommeliers et de critiques réputés.

Les vins californiens l'emportent dans les deux catégories, rouge et blanc. Le résultat, rapporté par un unique journaliste présent, fait scandale et met plusieurs années à être admis. Il ne prouvait pas que la Californie faisait de meilleurs vins que la France ; il prouvait qu'à l'aveugle, des experts français plaçaient en tête des vins qu'ils n'auraient pas défendus en connaissance de cause.

Sa portée est double. Commercialement, il a ouvert le marché mondial aux vins du nouveau monde et brisé un présupposé de supériorité. Méthodologiquement, il a fait entrer la dégustation à l'aveugle dans les habitudes, et ouvert une réflexion durable sur les biais du jugement gustatif — la connaissance de l'étiquette modifiant démontrablement la perception.

Un vin de garage désigne, dans un tout autre registre, un vin produit en très petite quantité, souvent à Bordeaux, avec des méthodes très interventionnistes et vendu à prix élevé. Le phénomène des années 1990 a suscité un débat sur le rôle de la rareté et de la note des critiques dans la formation des prix.`,
      { image: "gas-vignoble-bourgogne", legende: "Le vignoble bourguignon : un système fondé sur le lieu, quand le nouveau monde a construit le sien sur le cépage.", alt: "Rangs de vigne en Bourgogne" }],
    ["Une viticulture qui se déplace", `Le réchauffement climatique modifie la viticulture plus vite que presque toute autre production agricole, parce que la vigne est extrêmement sensible aux températures et que les appellations figent des pratiques et des lieux.

Ses effets sont déjà mesurés : les vendanges ont avancé de deux à trois semaines en un demi-siècle dans la plupart des vignobles français ; les degrés d'alcool ont augmenté, le raisin accumulant plus de sucre ; l'acidité baisse, ce qui modifie l'équilibre et la capacité de garde ; et les gelées tardives font davantage de dégâts, le débourrement précoce exposant les bourgeons.

Les zones favorables se déplacent vers le nord et vers l'altitude : l'Angleterre produit désormais des vins effervescents de qualité sur les mêmes sols crayeux que la Champagne, et des plantations apparaissent en Belgique et en Scandinavie méridionale.

Les réponses de la filière sont de trois ordres : agronomiques — hauteur de taille, ombrage, gestion de l'eau —, variétales, avec l'autorisation de cépages plus tardifs ou plus résistants dans certaines appellations, et géographiques, avec le déplacement progressif des parcelles. La difficulté est qu'une appellation est un cadre juridique fondé sur la stabilité, confronté à un climat qui ne l'est plus.`],
  ],

  "ga3-bieres-monde": [
    ["La boisson la plus bue", `La bière est la boisson alcoolisée la plus consommée au monde, loin devant le vin et les spiritueux. Elle est aussi l'une des plus anciennes : des traces de brassage remontent à plusieurs millénaires en Mésopotamie et en Égypte, où elle était à la fois aliment, salaire et offrande.

La République tchèque détient le record de consommation par habitant, position qu'elle occupe sans interruption depuis des décennies. Ce n'est pas un hasard géographique : c'est à Plzeň qu'est née en 1842 la pilsner, bière blonde de fermentation basse dont la limpidité dorée a supplanté en quelques décennies les bières troubles et sombres qui dominaient jusque-là.

Cette révolution doit autant à la technique qu'au goût : elle a supposé la maîtrise du froid, la sélection de levures adaptées, et la généralisation du verre transparent, qui a rendu l'apparence du breuvage soudain visible et donc importante.`],
    ["Trois façons de fermenter", `La fermentation basse se conduit à basse température, autour de dix degrés, avec des levures qui sédimentent au fond. Elle donne des bières nettes, sobres en arômes de fermentation, dont la pilsner et l'ensemble des lagers — c'est-à-dire l'écrasante majorité de la production mondiale.

La fermentation haute se conduit à température plus élevée, autour de vingt degrés, avec des levures qui remontent en surface. Elle produit des esters et des phénols qui donnent des bières plus aromatiques, sur le fruit, l'épice ou la banane selon les souches : ales britanniques, bières d'abbaye, blanches allemandes.

La fermentation spontanée renonce à ensemencer : le moût est laissé à l'air libre dans un bac peu profond, et fermente grâce aux levures et bactéries présentes dans l'air et dans les poutres de la brasserie. C'est le lambic belge, produit dans une aire géographique restreinte autour de Bruxelles, dont le microbiote local fait toute la spécificité. La gueuze est un assemblage de lambics d'âges différents, refermenté en bouteille : le jeune apporte les sucres et le gaz, le vieux la complexité.`],
    ["Ingrédients et règles", `Le houblon joue trois rôles dans la bière : il apporte l'amertume qui équilibre le sucre du malt, des arômes très variés selon les variétés, et une action antiseptique qui améliore la conservation. Ce dernier point explique son adoption historique — il a supplanté les mélanges d'herbes antérieurs parce qu'il faisait tenir la bière plus longtemps.

La loi de pureté allemande de 1516 limitait les ingrédients de la bière à l'eau, l'orge et le houblon — la levure n'y figure pas, son existence étant alors inconnue. Souvent présentée comme une exigence de qualité, elle avait aussi des motifs économiques et sanitaires : réserver le blé et le seigle à la boulangerie, et interdire des additifs douteux voire toxiques employés par certains brasseurs. Elle a durablement façonné le paysage brassicole allemand, en interdisant des styles pratiqués ailleurs.

Une bière trappiste est brassée dans un monastère trappiste, sous le contrôle des moines et au bénéfice de la communauté et d'œuvres caritatives. L'appellation est protégée et ne concerne qu'une poignée d'abbayes dans le monde ; elle ne désigne pas un style mais une origine et un mode de production.`],
    ["La vague artisanale", `Une IPA — India Pale Ale — est une bière fortement houblonnée d'origine britannique. Le récit selon lequel le houblon aurait été augmenté pour conserver la bière pendant le voyage vers l'Inde est une simplification : des bières houblonnées existaient déjà, et d'autres styles voyageaient aussi bien. Le style a en tout cas été réinventé aux États-Unis à la fin du XXe siècle, avec des houblons aromatiques américains aux notes d'agrumes et de résine, très éloignés des originaux.

La bière artisanale désigne une production indépendante, en petite quantité, aux styles variés. Son essor depuis les années 2000 a transformé le paysage : la France est passée de quelques dizaines de brasseries dans les années 1980 à plusieurs milliers aujourd'hui, ce qui en fait le pays européen comptant le plus de brasseries.

Ce mouvement a rouvert des styles oubliés, réintroduit des ingrédients locaux, et remis en cause l'uniformisation produite par un siècle de concentration industrielle. Il rencontre aujourd'hui ses limites économiques — saturation du marché, coûts des matières, concurrence des grands groupes rachetant des marques artisanales tout en conservant leur image d'indépendance.`],
  ],

  "ga3-spiritueux": [
    ["Concentrer l'alcool", `Un spiritueux est obtenu par distillation d'un liquide déjà fermenté : aucun appareil ne fabrique de l'alcool, il ne fait que le séparer de l'eau. Le plafond vient donc de la fermentation, qui s'arrête vers une quinzaine de degrés, les levures mourant dans leur propre production.

Le principe physique est une séparation par évaporation puis condensation, fondée sur la différence de volatilité : l'alcool bout à soixante-dix-huit degrés, l'eau à cent. En chauffant le liquide fermenté, les vapeurs produites sont plus riches en alcool ; refroidies, elles donnent un distillat concentré.

Le distillateur doit trier ce qui sort de l'alambic en trois parties. Les têtes contiennent les composés les plus volatils, dont le méthanol, toxique ; les queues, les plus lourds et souvent désagréables. Seul le cœur est conservé. Cette coupe est le geste décisif du métier, et les accidents mortels de distillation clandestine viennent presque toujours de sa négligence.`],
    ["Une matière première, un nom", `Chaque spiritueux se définit par ce qu'on distille. Le whisky vient de céréales — orge, maïs, seigle, blé selon les traditions. Un single malt est un whisky issu d'une seule distillerie et de la seule orge maltée : le mot « single » désigne l'unicité du lieu de production, non celle du fût ni du millésime.

Le cognac est distillé de vin blanc, issu de cépages peu alcooliques et très acides qui donneraient de médiocres vins de table mais d'excellentes eaux-de-vie. Le calvados est distillé de cidre, le rhum agricole de jus de canne frais — par opposition au rhum de mélasse, produit à partir du résidu de la fabrication du sucre, qui représente l'essentiel de la production mondiale. La tequila est distillée de l'agave bleu, plante qui met de sept à dix ans à mûrir et dont on cuit le cœur avant de le presser.

L'absinthe fait exception : c'est un spiritueux aromatisé aux plantes, dont la grande absinthe, l'anis et le fenouil, macérées puis redistillées. Interdite en France en 1915 après une campagne où se mêlaient inquiétudes sanitaires et intérêts du lobby viticole, elle fut accusée de méfaits en réalité imputables à son degré d'alcool très élevé et à des falsifications ; elle est de nouveau autorisée depuis 2011.`],
    ["Le bois et le temps", `Le vieillissement en fût est un échange entre l'alcool et le bois qui modifie profondément couleur et arômes. Un distillat sort incolore de l'alambic ; toute la couleur d'un whisky, d'un cognac ou d'un rhum vieux vient du fût.

Trois phénomènes s'y produisent. Le bois cède des composés — tanins, vanilline, lactones donnant les notes de noix de coco, composés grillés issus de la chauffe du fût. Il retient et absorbe certaines molécules indésirables. Et il laisse respirer : l'oxygène pénètre lentement et transforme les arômes, tandis qu'une part s'évapore chaque année — la « part des anges », qui peut atteindre plusieurs pour cent par an sous climat chaud.

C'est pourquoi un rhum vieilli cinq ans aux Antilles a subi une évolution comparable à un whisky vieilli quinze ans en Écosse. L'âge en années n'est pas une mesure comparable d'une région à l'autre, et le premier fût cède bien plus que le troisième.`],
    ["Protéger un nom", `Certains spiritueux portent une appellation protégée afin de lier le produit à une origine géographique et à un mode de production défini. Le cognac ne peut être produit que dans une aire délimitée depuis 1909, à cheval sur la Charente, la Charente-Maritime et quelques communes de Dordogne et des Deux-Sèvres, à partir de cépages autorisés, par double distillation en alambic charentais, avec une durée de vieillissement minimale. Le scotch whisky doit être distillé et vieilli au moins trois ans en Écosse. La tequila ne peut venir que de zones définies du Mexique.

Ces protections ont deux fonctions. Elles évitent l'usurpation d'une réputation construite sur des décennies, et elles fixent un cahier des charges qui garantit un mode de production. Elles sont aussi un enjeu commercial de premier ordre, et les accords de libre-échange comportent systématiquement des listes d'appellations reconnues réciproquement.

Leur limite est connue : elles garantissent une origine et un procédé, pas une qualité. Un cognac médiocre reste un cognac, et d'excellentes eaux-de-vie n'ont droit à aucune appellation.`],
  ],

  "ga3-cafe-the": [
    ["Deux boissons, deux origines", `Le café et le thé sont les deux boissons chaudes les plus consommées au monde, après l'eau elle-même. Toutes deux doivent leur diffusion à la caféine, et toutes deux ont été des enjeux commerciaux et politiques majeurs.

Le café est originaire de l'actuelle Éthiopie, où le caféier pousse spontanément dans les forêts d'altitude. La légende du berger Kaldi observant ses chèvres excitées après avoir brouté des baies rouges est tardive et invérifiable ; la culture est en revanche attestée au Yémen dès le XVe siècle, d'où le nom de la variété moka, du port par lequel il s'exportait.

Le thé est originaire du sud-ouest de la Chine, où le théier est également un arbre forestier. Son usage y est attesté depuis plus de deux millénaires, d'abord médicinal puis quotidien, et sa diffusion vers le Japon, puis l'Europe au XVIIe siècle, a suivi des routes commerciales et religieuses distinctes.`],
    ["Du grain à la tasse", `Deux espèces de café dominent la production. L'arabica, cultivé en altitude, plus délicat et plus aromatique, moins riche en caféine, représente un peu plus de la moitié du marché, environ 56 à 57 %, une part qui recule au profit du robusta. Celui-ci, cultivé en plaine, plus résistant aux maladies et à la chaleur, plus amer et plus caféiné, fournit le reste et l'essentiel du café soluble. Le Brésil est de loin le premier producteur mondial, devant le Vietnam.

Ce qu'on appelle un grain de café est en réalité la graine d'un fruit rouge, la cerise, dont il faut séparer la pulpe — par voie humide ou par séchage — avant d'obtenir le café vert, inodore et sans goût.

Tout se joue ensuite à la torréfaction : la cuisson des grains verts, entre deux cents et deux cent trente degrés, développe par réaction de Maillard et par pyrolyse les centaines de composés aromatiques du café. Une torréfaction claire préserve l'acidité et les notes florales, une torréfaction foncée développe l'amertume et les notes de cacao grillé en effaçant les caractères d'origine.

Un espresso est un café extrait sous forte pression — environ neuf bars — en vingt-cinq à trente secondes. La pression extrait des composés que l'infusion ne mobilise pas et émulsionne les huiles, ce qui donne la crème en surface. Ce n'est pas un café plus fort : une tasse d'espresso contient moins de caféine qu'un grand café filtre, la quantité de boisson étant bien moindre.`],
    ["Une plante, tous les thés", `Thé vert, thé noir, oolong et pu-erh proviennent tous du même arbuste. Ce qui les distingue n'est ni la variété ni l'origine, mais le traitement de la feuille après cueillette — et principalement le degré d'oxydation.

Le thé vert est chauffé rapidement après la cueillette, à la vapeur au Japon ou à la poêle en Chine, ce qui détruit les enzymes et bloque l'oxydation : la feuille reste verte. Le thé noir est au contraire laissé s'oxyder complètement, ce qui brunit la feuille et transforme ses composés — les Chinois l'appellent d'ailleurs thé rouge, d'après la couleur de l'infusion.

Le thé oolong est partiellement oxydé, avec une palette allant de dix à quatre-vingts pour cent selon les crus, ce qui en fait la famille la plus variée. Le pu-erh est à part : c'est un thé fermenté par des micro-organismes puis vieilli, parfois pendant des décennies, dont la valeur augmente avec l'âge comme celle d'un vin.

La cérémonie du thé japonaise est organisée autour du matcha, thé vert réduit en poudre fine et fouetté dans l'eau plutôt qu'infusé — on consomme la feuille entière. Le rituel codifie chaque geste, chaque objet et chaque déplacement, et son apprentissage occupe des années.`],
  ],

  "ga3-fromages-monde": [
    ["Séparer le solide du liquide", `Faire du fromage consiste à concentrer les protéines et la matière grasse du lait en éliminant l'eau. La coagulation est la première étape : la transformation du lait liquide en un caillé solide.

Elle s'obtient de deux façons. Par acidification, lorsque des bactéries lactiques transforment le lactose en acide lactique et font floculer les caséines — c'est la voie des fromages frais et des fromages lactiques comme le chèvre. Par action enzymatique, grâce à la présure, enzyme d'origine animale extraite de la caillette des jeunes ruminants, qui coupe une protéine de surface et fait s'agréger les caséines — c'est la voie de la plupart des fromages affinés. Des coagulants microbiens ou végétaux existent, employés notamment pour les fromages destinés aux végétariens.

Le caillé est ensuite tranché, brassé, éventuellement chauffé, moulé, pressé et salé. Chacune de ces opérations modifie l'humidité résiduelle, et l'humidité détermine la famille du fromage : plus on retire d'eau, plus la pâte est dure et plus la conservation est longue.`],
    ["Les grandes familles", `Un fromage à pâte pressée cuite voit son caillé chauffé au-delà de cinquante degrés puis fortement pressé : très peu d'eau, très longue conservation, meules de grande taille. Comté, beaufort, gruyère et parmigiano reggiano en relèvent — ce dernier, affiné de douze à trente-six mois et davantage, développe des cristaux de tyrosine qui craquent sous la dent et signalent un long affinage.

Un fromage à pâte persillée est veiné de moisissures bleues, ensemencées puis développées grâce à un piquage qui laisse entrer l'air dans la pâte — sans oxygène, le champignon ne pousse pas. Le roquefort, fait de lait de brebis, est affiné dans les caves naturelles de Roquefort-sur-Soulzon, dont les fissures, les fleurines, assurent une ventilation, une température et une humidité constantes. Son nom est protégé depuis un arrêt du Parlement de Toulouse de 1666, qui réserve son affinage à la commune de Roquefort-sur-Soulzon ; une loi du 26 juillet 1925 en fait le premier fromage français doté d'une appellation d'origine au sens moderne.

Un fromage à croûte lavée est régulièrement frotté à la saumure pendant l'affinage, ce qui favorise une flore de surface donnant une croûte orangée et un parfum puissant : munster, époisses, maroilles. Une pâte filée, comme la mozzarella di bufala au lait de bufflonne, est obtenue en étirant le caillé dans l'eau chaude jusqu'à obtenir une texture fibreuse et élastique.`,
      { image: "gas-plateau-fromages", legende: "Les familles de fromages se lisent d'abord à l'humidité de la pâte, conséquence directe du traitement du caillé.", alt: "Plateau de fromages variés" }],
    ["Le lait, l'affinage, le nom", `La France, l'Italie et la Suisse comptent parmi les grandes traditions fromagères, avec des logiques différentes : la France cultive la diversité des petits formats et des laits crus, l'Italie associe de très grandes meules d'affinage long et des fromages frais, la Suisse s'est spécialisée dans les pâtes pressées cuites de montagne.

Une cinquantaine de fromages français bénéficient d'une appellation d'origine protégée, qui définit une zone, des races laitières, une alimentation du troupeau, une technique et une durée d'affinage. Le lait cru y tient une place importante et disputée : il conserve une flore microbienne qui donne au fromage sa complexité et son lien au terroir, et il présente un risque sanitaire réel pour les populations fragiles.

L'affinage est un métier distinct de la fabrication. L'affineur reçoit des fromages jeunes et conduit leur maturation en jouant sur la température, l'humidité, la ventilation, les frottages et les retournements. Deux meules issues de la même fabrication peuvent devenir très différentes selon la cave où elles ont mûri — ce qui explique que certaines maisons d'affinage aient une réputation propre.`],
  ],

  "ga3-pains-monde": [
    ["Ce qui fait lever une pâte", `Le pain existe sous des formes très différentes sur tous les continents, mais tous les pains levés reposent sur le même principe : un gaz produit à l'intérieur de la pâte, retenu par un réseau élastique.

Le gluten est ce réseau : deux protéines du blé, la gliadine et la gluténine, s'associent au contact de l'eau et sous l'effet du pétrissage pour former une trame à la fois extensible et résistante. Elle emprisonne le dioxyde de carbone produit par la fermentation, ce qui fait gonfler la pâte et donne l'alvéolage de la mie. Les céréales pauvres en gluten — seigle, maïs, riz, teff — donnent des pains denses ou plats, ce qui explique la géographie des formes.

Un levain naturel est une culture de levures et de bactéries lactiques entretenue par le boulanger, obtenue simplement en laissant fermenter un mélange de farine et d'eau. Les levures produisent le gaz, les bactéries l'acidité qui donne le goût, améliore la conservation et rend le pain plus digeste. La levure de boulanger, sélectionnée et vendue pure, fait lever plus vite mais n'apporte pas cette acidité ni cette complexité.`],
    ["Le pain français et ses règles", `Le pain de tradition française — dont la baguette est la forme la plus courante — est défini par un décret de 1993 : il ne peut contenir que de la farine, de l'eau, du sel et de la levure ou du levain, ne peut subir aucune surgélation et n'admet qu'une liste très courte d'auxiliaires. Le texte a été pris en réaction à une dégradation généralisée de la qualité, due à des pétrissages intensifiés et à des fermentations raccourcies.

Cette réglementation a produit un effet rare : elle a fait remonter la qualité moyenne d'un produit de consommation courante. Les savoir-faire et la culture de la baguette ont été inscrits en 2022 au patrimoine culturel immatériel de l'humanité.

Le pain au levain de seigle, typique d'Europe du Nord et de l'Est, illustre la voie inverse : peu de gluten, mie serrée et dense, acidité marquée, conservation de plusieurs semaines. Sa fermentation au levain n'est pas un choix esthétique mais une nécessité technique — l'acidité est indispensable pour que la pâte de seigle se tienne.`],
    ["Les pains plats", `Une grande partie de l'humanité mange des pains plats, plus anciens que les pains levés et cuits en quelques minutes.

Le naan indien est cuit collé contre la paroi brûlante d'un four tandoor, cylindre d'argile chauffé au charbon, ce qui lui donne sa forme allongée et ses cloques. Le pita gonfle en cuisson à très haute température : la vapeur produite à l'intérieur sépare brutalement les deux faces et forme une poche, qui se referme en refroidissant — d'où sa fonction de contenant.

La tortilla mexicaine est une galette de maïs nixtamalisé, ou de blé dans le nord du pays, cuite sur une plaque. Le mantou chinois, enfin, échappe à la cuisson au four : c'est un pain cuit à la vapeur, à la mie très blanche et sans croûte, dont la texture moelleuse est sans équivalent occidental. La cuisson à la vapeur est la norme dans une grande partie de l'Asie de l'Est, où le four domestique était absent.`],
    ["Ce qui se passe au four", `La cuisson d'un pain de tradition suppose une injection de vapeur en début de cuisson. Son rôle est précis : elle maintient la surface humide et souple pendant les premières minutes, ce qui retarde la formation de la croûte et laisse au pain le temps de se développer sous la poussée du gaz. Sans vapeur, la croûte se fixe trop tôt et le pain reste petit, avec des déchirures.

La croûte se forme ensuite par déshydratation de surface, et sa couleur vient de la réaction de Maillard : une réaction entre les sucres et les acides aminés, au-delà de cent quarante degrés, qui produit des centaines de composés colorés et aromatiques. C'est la même réaction qui donne la croûte d'une viande saisie, la couleur du café torréfié et celle d'une bière brune.

Une part importante du goût du pain se trouve donc dans la croûte, et c'est ce qui rend l'épaisseur et la coloration de celle-ci décisives. Un boulanger qui cuit un peu plus longtemps ne fait pas seulement un pain plus foncé : il fait un pain différent.`,
      { image: "gas-baguette", legende: "La croûte n'est pas une enveloppe : c'est là que la réaction de Maillard produit l'essentiel des arômes du pain.", alt: "Baguettes de pain" }],
  ],

  "ga3-desserts-monde": [
    ["Le sucre, du luxe à l'ordinaire", `Le sucre a longtemps été un produit de luxe avant de devenir un ingrédient courant. Vendu en pharmacie au Moyen Âge, dosé en grammes, il servait de médicament et de marque de richesse. La pâtisserie médiévale européenne était donc rare, épicée, et réservée aux tables princières.

Deux ruptures ont changé cela. La première est l'économie de plantation aux Amériques, fondée sur l'esclavage, qui a fait chuter les prix aux XVIIe et XVIIIe siècles — l'essor du goût sucré européen est indissociable de cette histoire. La seconde est le sucre de betterave : développé sous le blocus continental, industrialisé au XIXe siècle, il a rendu le sucre accessible à tous et affranchi l'Europe de l'importation.

La pâtisserie moderne naît de cette abondance, en même temps que la maîtrise du froid, du four à température réglée et de la levure chimique. Presque tous les grands classiques que nous connaissons datent de cette période ou lui sont postérieurs.`],
    ["L'Europe", `Le tiramisu est un entremets italien à base de mascarpone, d'œufs et de biscuits imbibés de café. Son ancienneté est souvent exagérée : il apparaît en Vénétie dans les années 1960 ou 1970, ce qui en fait l'un des desserts les plus récents parmi les plus célèbres — nouvelle illustration des traditions plus jeunes qu'elles n'en ont l'air.

Le pastel de nata est une tartelette portugaise à la crème, sur pâte feuilletée, dont la surface est caramélisée par une cuisson à très haute température. Il aurait été créé par les moines du monastère des Hiéronymites de Belém, qui utilisaient les blancs d'œufs pour amidonner les habits religieux et cherchaient un emploi aux jaunes.

La Sachertorte est un gâteau au chocolat viennois, dense, comportant une couche d'abricot sous un glaçage. Sa recette exacte a fait l'objet d'un procès de sept ans entre l'hôtel Sacher et la pâtisserie Demel, tranché sur la question de savoir si la couche d'abricot devait se trouver au milieu ou seulement sous le glaçage.

Le kouign-amann breton est un feuilletage au beurre et au sucre, dont le nom signifie littéralement « gâteau au beurre ». Sa caractéristique est le caramel formé par le sucre inclus dans le feuilletage, qui fond et se recristallise à la cuisson.`],
    ["Le reste du monde", `Le mochi japonais est une pâte de riz gluant cuit puis longuement pilé, jusqu'à obtenir une masse extrêmement élastique. Sa préparation traditionnelle au maillet, à deux personnes travaillant en alternance rapide, est un spectacle de Nouvel An. Sa texture collante en fait chaque année une cause d'étouffement chez les personnes âgées, au point que les autorités japonaises publient des recommandations avant les fêtes.

Le baklava est une pâtisserie de pâte filo, de fruits secs pilés et de sirop, commune à toute l'ancienne aire ottomane et revendiquée par plusieurs pays. Le gulab jamun indien consiste en boulettes de lait réduit, frites puis imbibées d'un sirop parfumé à la cardamome et à l'eau de rose.

Le dulce de leche est une confiture de lait sud-américaine, obtenue en chauffant longuement du lait sucré : la couleur et le goût viennent d'une réaction de Maillard lente, la même que celle de la croûte du pain, mais conduite en milieu humide pendant des heures.

La pavlova, meringue croustillante à cœur moelleux garnie de crème et de fruits, oppose depuis un siècle l'Australie et la Nouvelle-Zélande, qui en revendiquent chacune l'invention en l'honneur de la ballerine russe. La recherche a tranché en faveur de la Nouvelle-Zélande, sans que le débat s'apaise.`],
  ],

  "ga3-alimentation-sante": [
    ["De quoi se compose un aliment", `Les macronutriments sont les glucides, les lipides et les protéines : les trois familles qui apportent l'énergie et la matière de construction. Les micronutriments — vitamines, minéraux, oligoéléments — n'apportent pas d'énergie mais sont indispensables au fonctionnement.

Un acide aminé essentiel est un acide aminé que l'organisme ne peut pas synthétiser et qu'il doit donc trouver dans l'alimentation. Ils sont neuf chez l'humain adulte. Une protéine est dite complète lorsqu'elle les contient tous en proportions suffisantes — ce qui est le cas des protéines animales, du soja et du quinoa, et non de la plupart des protéines végétales prises isolément, d'où l'intérêt d'associer céréales et légumineuses.

Un acide gras oméga-3 est un acide gras insaturé essentiel, lui aussi non synthétisable. Les formes à longue chaîne, les plus actives, se trouvent principalement dans les poissons gras ; la forme végétale, présente dans les noix, le colza et le lin, n'est convertie qu'en faible proportion.

Une fibre alimentaire est un glucide non digéré par l'intestin grêle, qui parvient donc intact au côlon où il nourrit le microbiote intestinal — l'ensemble des micro-organismes du tube digestif. Les fibres ne sont pas un simple lest : elles ralentissent l'absorption des sucres, régulent le transit et fournissent le substrat d'une flore dont le rôle sur l'immunité et le métabolisme est de mieux en mieux documenté.`],
    ["Des repères plutôt que des règles", `Les besoins nutritionnels varient selon l'âge, l'activité et l'état de santé : un adolescent en croissance, une femme enceinte, un sportif d'endurance et une personne âgée n'ont ni les mêmes apports recommandés ni les mêmes risques de carence. Toute recommandation générale est donc une moyenne, utile pour orienter et insuffisante pour prescrire.

L'indice glycémique mesure la vitesse d'élévation de la glycémie après consommation d'un aliment, par rapport à une référence. Il nuance la vieille opposition entre sucres lents et sucres rapides, qui reposait sur la longueur des molécules et s'est révélée fausse : une purée de pomme de terre élève la glycémie plus vite que du sucre de table. Il ne s'applique cependant pas à un aliment isolé de son repas, la présence de fibres, de graisses et de protéines ralentissant considérablement l'absorption.

Le régime méditerranéen — abondance de végétaux, légumineuses, huile d'olive, poisson, peu de viande rouge et de produits transformés — reste le mode alimentaire le mieux soutenu par les données épidémiologiques, avec des bénéfices cardiovasculaires confirmés par au moins un grand essai contrôlé.`],
    ["Le degré de transformation", `Le degré de transformation se lit dans la liste des ingrédients plus que dans le tableau nutritionnel : la présence de composants qu'aucune cuisine domestique ne possède — isolats, amidons modifiés, émulsifiants — signale un produit reconstruit à partir de fractions, et non préparé à partir d'aliments.

La classification NOVA range les aliments selon leur degré de transformation, en quatre groupes, et non selon leur composition nutritionnelle. C'est ce qui la rend originale et discutée : deux produits de composition analogue peuvent être classés différemment, et l'on a reproché à cette approche son imprécision. Les données épidémiologiques accumulées depuis dix ans lui ont néanmoins donné une utilité prédictive réelle, une consommation élevée d'ultra-transformés étant associée à plusieurs pathologies chroniques indépendamment de la composition nutritionnelle.

Le Nutri-Score, lui, est un étiquetage nutritionnel simplifié à cinq classes, de A à E, calculé à partir de la composition pour cent grammes : il pénalise énergie, sucres, graisses saturées et sel, et valorise fibres, protéines, fruits et légumes. Il est efficace pour comparer deux produits d'une même catégorie et sert mal à comparer des catégories différentes. Les deux outils sont donc complémentaires et répondent à des questions distinctes : l'un dit ce que contient l'aliment, l'autre comment il a été fabriqué.`],
  ],

  "ga3-agriculture-alimentation": [
    ["Ce qui se décide avant l'assiette", `Le contenu de l'assiette dépend de choix agricoles faits en amont : la variété semée, le mode de culture, le calibre exigé par l'acheteur, la race élevée. Le consommateur choisit dans un ensemble déjà largement déterminé par des décisions prises des mois ou des années plus tôt.

L'agriculture biologique est un mode de production excluant les produits chimiques de synthèse — engrais et pesticides — ainsi que les organismes génétiquement modifiés, avec un cahier des charges européen et une certification par organisme tiers. Elle n'est pas définie par des objectifs de résultat mais par des moyens autorisés ou interdits, ce qui explique certains débats — le cuivre, minéral naturel mais persistant dans les sols, y reste autorisé.

L'agroécologie procède d'une autre logique : elle mobilise les processus écologiques dans la production elle-même — fertilité biologique du sol, régulation naturelle des ravageurs, diversité des cultures, associations végétales. Ce n'est pas un label mais une démarche, qui peut être conduite en bio comme en conventionnel.`],
    ["Les signes de qualité", `Une AOP, appellation d'origine protégée, lie un produit à un terroir et à un savoir-faire : toutes les étapes de production, de transformation et d'élaboration doivent avoir lieu dans l'aire délimitée, et les qualités du produit doivent être dues à ce milieu. C'est le signe le plus exigeant.

Une IGP, indication géographique protégée, est moins contraignante : il suffit qu'une seule étape ait lieu dans l'aire, et le lien au territoire peut reposer sur une réputation plutôt que sur des caractéristiques du milieu. Un jambon peut ainsi être séché sous IGP dans une région à partir de porcs élevés ailleurs.

Le Label rouge est un signe français d'un ordre différent : il n'atteste aucune origine mais une qualité gustative supérieure, établie par comparaison à un produit courant et vérifiée par des tests. Un poulet Label rouge se définit par une souche à croissance lente, une durée d'élevage minimale et un accès au plein air.

Le commerce équitable garantit aux producteurs un prix minimum couvrant les coûts de production, une prime de développement collective et des relations contractuelles durables. Il concerne surtout les filières d'importation — café, cacao, banane — où le rapport de force est le plus défavorable.`],
    ["Vendre autrement, et le cadre commun", `Vente à la ferme, marchés, paniers hebdomadaires, magasins de producteurs : ces formes de commercialisation redonnent au producteur la marge captée par la distribution, mais lui transfèrent aussi le travail de vente, de logistique et de relation client, qui n'est pas son métier.

Une AMAP, association pour le maintien d'une agriculture paysanne, repose sur un engagement réciproque : les consommateurs souscrivent à l'avance pour une saison entière et reçoivent chaque semaine une part de la récolte, quelle qu'elle soit. Le producteur obtient une trésorerie et une visibilité qui le libèrent du marché ; les consommateurs partagent le risque climatique. C'est une inversion complète de la relation commerciale ordinaire.

La politique agricole commune couvre l'agriculture de l'Union européenne. Créée en 1962 pour garantir l'autosuffisance alimentaire d'un continent qui sortait des pénuries, elle a atteint cet objectif au point de produire des excédents, puis s'est réorientée vers le soutien au revenu et, plus récemment, vers des conditions environnementales. Elle représente encore une part majeure du budget européen, et chaque réforme est un arbitrage entre revenu agricole, prix pour le consommateur et exigences écologiques.

L'enjeu majeur reste celui que la FAO formule depuis des décennies : nourrir tous les humains sans épuiser les ressources qui permettront de nourrir les suivants.`],
  ],

  "ga3-restauration-metiers": [
    ["La brigade d'Escoffier", `Auguste Escoffier a organisé la cuisine professionnelle en brigade hiérarchisée, à la fin du XIXe siècle, en s'inspirant explicitement de l'organisation militaire qu'il avait connue. Avant lui, une cuisine de grande maison était un ensemble bruyant où chacun préparait un plat de bout en bout, avec des redondances et des à-coups.

La brigade répartit le travail non par plat mais par technique et par famille de préparations. Chaque chef de partie dirige un poste spécifique : le saucier prépare les sauces et souvent les plats mijotés — poste le plus prestigieux de la brigade classique ; le garde-manger s'occupe des préparations froides, des découpes et des entrées ; l'entremétier des légumes et des potages ; le poissonnier, le rôtisseur, le pâtissier tiennent leur domaine.

Le gain est celui de toute division du travail : spécialisation, parallélisation, régularité. Un plat traverse plusieurs postes qui travaillent simultanément, ce qui permet de servir cent couverts en une heure. Escoffier a aussi imposé la discipline, la sobriété et le silence dans des cuisines qui en manquaient — la profession lui doit une part de sa respectabilité.`],
    ["La salle", `Le service en salle constitue une hiérarchie parallèle, dirigée par le maître d'hôtel. Son rôle dépasse l'accueil : il organise le rang des tables, cadence l'envoi des plats en liaison avec la cuisine, gère les incidents et forme le personnel. Un service se juge autant à sa fluidité invisible qu'à sa courtoisie.

Le sommelier conseille et sert les vins, construit la carte, gère la cave et les achats. Le métier suppose une connaissance des vins mais aussi des accords, du budget du client et de la carte du chef — un sommelier qui impose ses préférences échoue.

Ces métiers de salle ont longtemps souffert d'un déficit de reconnaissance face à la cuisine, dont la médiatisation a fait la vedette. Le déséquilibre s'est accentué avec les émissions culinaires, qui montrent presque exclusivement les cuisines, et il pèse sur le recrutement.`],
    ["Se former, se distinguer", `Le CAP cuisine est le diplôme professionnel de niveau initial, préparé en deux ans après la troisième ou en un an après un autre diplôme, souvent en apprentissage. Il reste la porte d'entrée principale du métier, complétée par des bacs professionnels, des brevets professionnels et des mentions complémentaires.

Le concours Meilleur Ouvrier de France distingue l'excellence dans les métiers manuels, tous domaines confondus. Ce n'est pas un classement mais un examen : tous les candidats atteignant le niveau exigé sont reçus, et il arrive qu'aucun ne le soit. Le col bleu-blanc-rouge qui en résulte est protégé, et son usurpation sanctionnée.

Le Bocuse d'Or, créé en 1987 par Paul Bocuse, est un concours international de cuisine organisé tous les deux ans à Lyon, après des sélections continentales. Sa singularité est d'avoir donné à la cuisine le format d'une compétition sportive — équipes nationales, entraînement de plusieurs mois, épreuve chronométrée devant un public.

Le secteur connaît malgré ces attraits des tensions durables de recrutement, liées aux conditions de travail : horaires en coupure, travail le soir et le week-end, pénibilité physique, rémunérations d'entrée modestes. La crise sanitaire a accéléré des départs et obligé une partie de la profession à revoir l'organisation du travail.`],
  ],

  "ga3-histoire-repas": [
    ["Des mots qui ont glissé", `Le nombre et l'heure des repas ont changé plusieurs fois au cours de l'histoire, et le vocabulaire en garde la trace.

Le déjeuner désignait à l'origine le repas rompant le jeûne de la nuit — le mot le dit littéralement, comme l'anglais *breakfast*. Le dîner désignait quant à lui le repas du milieu de journée, et ce jusqu'au XIXe siècle en France ; le souper fermait la journée. Le glissement de tous ces repas vers des heures plus tardives, avec l'éclairage et le travail urbain, a décalé les mots d'un cran — et la Belgique, la Suisse et le Québec ont conservé l'usage ancien, ce qui explique bien des malentendus.

Le nombre de repas a lui aussi varié : deux repas quotidiens étaient la norme dans une grande partie de l'Europe médiévale, le troisième s'ajoutant à mesure que la journée de travail s'allongeait et que le petit-déjeuner s'installait.`],
    ["Manger dehors", `Le banquet grec, ou symposion, mêlait boisson, conversation et divertissement : les convives, allongés, buvaient du vin coupé d'eau selon des proportions décidées collectivement, écoutaient de la musique et discutaient. C'était une institution masculine et codifiée, dont Platon a fait le cadre d'un de ses dialogues — la sociabilité y comptait autant que la nourriture, servie plus tôt et à part.

Les restaurants apparaissent à Paris à la fin du XVIIIe siècle, et la Révolution favorise leur essor en libérant les cuisiniers des grandes maisons. Le café, installé plus tôt, est devenu au XVIIIe siècle un lieu de sociabilité et de discussion intellectuelle : on y lisait les gazettes, on y débattait, et la police y plaçait des indicateurs — le Procope a vu passer Voltaire, Diderot et les révolutionnaires.

Un bouillon parisien est un restaurant populaire du XIXe siècle servant une cuisine simple à bas prix, avec un service rapide et une salle immense. Né pour nourrir les ouvriers et les employés des Halles, le genre a laissé des salles Art nouveau remarquables, et connaît depuis quelques années une renaissance commerciale.`],
    ["Le repas comme lien", `La commensalité est le fait de partager un repas, envisagé comme un lien social. Le mot dit l'essentiel : *cum mensa*, avec la table. Toutes les sociétés connues ritualisent le repas partagé, et le refus de manger avec quelqu'un est partout un signal fort.

Le repas gastronomique des Français a été inscrit en 2010 au patrimoine culturel immatériel de l'humanité. Ce qui est reconnu n'est ni une cuisine ni une liste de plats, mais une pratique sociale : le choix des mets, l'accord des vins, la mise en table, la succession codifiée apéritif, entrée, plat, fromage, dessert, et la conversation qui l'accompagne. C'est le rituel qui est protégé, non la recette.

L'évolution récente va pourtant dans un autre sens : une déstructuration partielle du repas au profit de prises alimentaires plus courtes, plus individuelles et plus dispersées dans la journée. La France y résiste mieux que la plupart des pays comparables — la synchronisation des repas y reste remarquable, avec un pic de population attablée à des heures très concentrées — mais le mouvement est réel, particulièrement chez les jeunes actifs urbains.`],
  ],

  "ga3-terroirs-france-3": [
    ["Le Nord et l'Est", `Chaque région française revendique des produits et des plats identitaires, et l'Alsace en offre le répertoire le plus reconnaissable. La choucroute y associe le chou fermenté — technique de conservation venue d'Europe centrale — aux salaisons et pommes de terre. La tarte flambée, ou *flammekueche*, est une pâte très fine garnie de crème, d'oignons et de lardons, cuite quelques minutes dans un four à pain très chaud : elle utilisait à l'origine la chaleur résiduelle du four et servait à en tester la température.

Ces deux plats illustrent une constante des cuisines régionales : ce sont des préparations d'économie devenues emblèmes. Le chou fermenté conservait la seule verdure disponible en hiver ; la tarte flambée utilisait ce qui restait de pâte et une chaleur qui serait perdue.`],
    ["L'Ouest et le Sud-Ouest", `La Bretagne se reconnaît à la galette de sarrasin et au far. Le sarrasin n'est pas une céréale mais une polygonacée, cultivable sur des sols pauvres et acides où le blé échouait, ce qui explique son implantation bretonne ; sa farine sans gluten donne une pâte non levée, d'où la galette. Le far est un flan épais, à l'origine sans pruneaux, dont le nom vient du latin désignant une bouillie de céréales.

Le cassoulet est emblématique du Languedoc, avec une rivalité durable entre Castelnaudary, Carcassonne et Toulouse, chacune revendiquant sa version et son ordre d'ingrédients. Sa base commune est le haricot blanc mijoté longuement avec des viandes de porc et de volaille, et la croûte qu'on enfonce plusieurs fois pendant la cuisson.

La piperade basque associe piment doux, poivrons, tomates et oignons, souvent liés à l'œuf. Le piment d'Espelette y joue le rôle que le poivre tient ailleurs — le Pays basque n'ayant jamais eu accès facilement au poivre importé, il a adopté un piment américain devenu son signe distinctif.`],
    ["Le Massif central et les Alpes", `L'aligot vient de l'Aubrac, à cheval sur l'Aveyron et la Lozère : une purée de pomme de terre travaillée avec de la tomme fraîche jusqu'à obtenir une masse filante qu'on tire à la spatule. Il était servi aux pèlerins par les moines de l'Aubrac, à l'origine à base de pain, la pomme de terre l'ayant remplacé plus tard.

La fondue savoyarde associe fromages fondus, vin blanc et pain. Sa version actuelle doit beaucoup à la promotion des sports d'hiver et à des campagnes de l'union suisse du fromage dans les années 1930 — plat de partage idéal pour une clientèle touristique, il a été codifié bien après ses ancêtres paysans.

Ce que ces exemples ont en commun mérite d'être formulé : la diversité des cuisines régionales françaises s'explique par la variété des climats, des sols et des histoires locales, mais aussi par le fait que la France est restée longtemps un pays de terroirs mal reliés. Chaque bassin devait vivre de ce qu'il produisait, ce qui a figé des répertoires distincts que le chemin de fer, puis le tourisme, ont ensuite transformés en identités revendiquées.`],
    ["Le Sud-Est", `La bouillabaisse est emblématique de Marseille et de la Provence : à l'origine un plat de pêcheurs, fait des poissons invendables au marché, elle devient à la fin du XIXe siècle un plat de restaurant codifié, servi en deux temps — le bouillon safrané, puis les poissons. Rascasse, vive, congre et rouget en forment la base traditionnelle, avec le fenouil et l'écorce d'orange.`],
  ],

  "ga3-alimentation-futur": [
    ["Le poids de l'assiette", `L'alimentation représente environ un quart des émissions mondiales de gaz à effet de serre, si l'on comptabilise l'ensemble du système : production agricole, changement d'usage des sols, transformation, transport, distribution et déchets. C'est comparable au secteur de l'énergie domestique, et davantage que l'ensemble du transport de personnes.

L'élevage bovin y occupe une place particulière : la fermentation entérique de leur rumen produit du méthane, gaz à effet de serre dont le pouvoir de réchauffement à vingt ans est plusieurs dizaines de fois supérieur à celui du CO₂. Sa durée de vie atmosphérique est en revanche courte — une douzaine d'années —, ce qui a une conséquence importante : stabiliser les effectifs de ruminants stabilise leur contribution au réchauffement, quand le CO₂ s'accumule indéfiniment.

Le levier qui réduit le plus l'empreinte d'une alimentation est la réduction de la part des produits animaux, en particulier de la viande de ruminant. Les autres leviers — saisonnalité, réduction du gaspillage, limitation des produits transportés par avion — comptent, mais d'un ordre de grandeur inférieur.`],
    ["D'autres sources de protéines", `Une protéine alternative est une source de protéines destinée à remplacer tout ou partie de la viande.

Les légumineuses en constituent la voie la plus immédiate et la mieux établie : riches en protéines, elles fixent en outre l'azote de l'air grâce à leurs bactéries symbiotiques, ce qui réduit les besoins en engrais et améliore le sol pour la culture suivante. Elles cumulent donc l'intérêt nutritionnel et l'intérêt agronomique, et leur consommation a fortement baissé en France au XXe siècle — le potentiel de progression est là.

Les insectes comestibles d'élevage sont autorisés en Europe depuis 2021 pour quelques espèces. Leur efficacité de conversion alimentaire est excellente et leur empreinte faible, mais l'acceptabilité culturelle reste le principal obstacle en Europe, et les usages actuels portent surtout sur l'alimentation animale.

La viande cultivée est produite à partir de cellules animales multipliées en bioréacteur, sans abattage. Autorisée à la vente dans quelques pays, elle reste au stade des volumes anecdotiques et des coûts très élevés ; son bilan environnemental dépendra entièrement de l'énergie utilisée pour les cultures cellulaires, point encore incertain.`],
    ["Produire autrement, et pour tous", `L'agriculture urbaine désigne la production alimentaire en ville ou à sa périphérie : toitures, friches, fermes verticales, jardins partagés. Elle raccourcit les circuits, recrée un lien alimentaire et participe à la végétalisation, sans pouvoir couvrir les besoins d'une métropole — les surfaces disponibles sont sans commune mesure avec les surfaces agricoles nécessaires.

La culture hors sol se pratique sur substrat inerte ou en solution nutritive, avec un contrôle précis de l'eau et des nutriments. Elle économise l'eau et l'espace et permet de produire hors saison, au prix d'une consommation énergétique importante si elle est chauffée et éclairée. Son bilan dépend donc entièrement du mix énergétique et de la culture concernée.

La FAO définit enfin la sécurité alimentaire comme l'accès de tous, à tout moment, à une nourriture suffisante, saine et adaptée à leurs besoins et à leurs préférences culturelles, pour mener une vie active et saine. Cette définition, adoptée en 1996, mérite d'être lue en entier : elle ne parle pas seulement de calories mais aussi de qualité sanitaire, de régularité de l'accès et d'acceptabilité culturelle. C'est ce qui la rend exigeante — et c'est à cette aune, plutôt qu'au tonnage produit, que se mesure la réussite d'un système alimentaire.`],
  ],
};
