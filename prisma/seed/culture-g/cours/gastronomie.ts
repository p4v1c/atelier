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
};
