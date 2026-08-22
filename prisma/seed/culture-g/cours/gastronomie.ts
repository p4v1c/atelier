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

Le caféier est originaire d'Éthiopie, d'où il gagne le Yémen puis le monde. Deux espèces dominent la production : l'arabica, plus aromatique, plus fragile et moins riche en caféine, qui représente environ soixante pour cent du marché ; et le robusta, plus rustique, plus amer et plus caféiné. Le grain vert n'a presque aucun arôme : tout se joue à la torréfaction.`],
    ["La bière", `La loi allemande de pureté de 1516 limite les ingrédients de la bière à l'eau, l'orge et le houblon. La levure n'y figure pas, pour une raison simple : son rôle était alors inconnu, la fermentation étant tenue pour spontanée.

Le houblon apporte l'amertume, une part des arômes et un pouvoir conservateur — c'est cette dernière propriété qui a d'abord justifié son emploi. La distinction majeure entre bières tient à la levure et à la température : la fermentation haute, autour de vingt degrés, donne les ales, plus aromatiques ; la fermentation basse, autour de dix degrés, donne les lagers, dont la pilsner, style né en 1842 qui représente aujourd'hui l'essentiel de la production mondiale.`],
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

Le voyage de masse naît un siècle plus tard. En 1841, le Britannique Thomas Cook affrète un train pour conduire un groupe à un meeting antialcoolique : c'est le premier voyage organisé, et l'acte de naissance de l'agence de voyages. Le luxe suit avec l'Orient-Express, qui relie Paris à Constantinople à partir de 1883 et devient le symbole du voyage élégant. En France, la démocratisation vient de la loi : les congés payés, institués en 1936, ouvrent les vacances à des millions de salariés qui n'en avaient jamais pris.`],
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
    ["Conserver par le sel", `La salaison est la conservation par le sel, qui abaisse l'activité de l'eau et rend le milieu inhospitalier aux micro-organismes. Combinée au séchage, elle produit les jambons secs, dont le jambon de Bayonne, jambon du Sud-Ouest bénéficiant d'une indication géographique protégée, salé au sel de Salies-de-Béarn et affiné plusieurs mois.

L'andouille de Guémené se distingue par une technique visible à la coupe : elle est faite de chaudins — segments du gros intestin — enfilés les uns dans les autres, ce qui dessine à la tranche des cercles concentriques caractéristiques. C'est un exemple de charcuterie dont l'identité tient à un geste plus qu'à une recette.

Le nitrite est un additif conservateur qui joue deux rôles : il inhibe la bactérie responsable du botulisme, toxine la plus puissante connue, et il fixe la couleur rose des charcuteries. Il fait l'objet d'un débat sérieux, car il participe à la formation de composés nitrosés associés au risque de cancer colorectal. Sa réduction est engagée en France, avec une difficulté réelle : supprimer le nitrite sans compromettre la sécurité microbiologique suppose d'autres barrières — froid strict, acidification, durée de conservation raccourcie.`,
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
};
