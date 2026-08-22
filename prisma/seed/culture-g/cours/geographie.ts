/** Géographie, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_GEOGRAPHIE: LotCours = {
  "geo-detroits": [
    ["Naturels et creusés", `Un détroit est naturel, un canal est creusé. Les deux créent la même dépendance : quelques kilomètres d'eau par où passe une part considérable du commerce mondial, et qu'un conflit régional suffit à menacer.

Le détroit de Gibraltar sépare l'Europe de l'Afrique sur quatorze kilomètres au plus étroit, entre l'Espagne et le Maroc — c'est aussi là que se trouve l'enclave espagnole de Ceuta. Le Bosphore relie la mer Noire à la mer de Marmara et, au-delà, à la Méditerranée : il commande l'accès maritime de la Russie et de l'Ukraine, et son régime est fixé depuis 1936 par la convention de Montreux.`],
    ["Les points de passage du pétrole et du fret", `Le détroit d'Ormuz, entre l'Iran et la péninsule Arabique, voit passer environ un cinquième du pétrole mondial : c'est le point de vulnérabilité le plus commenté de l'économie énergétique. Le détroit de Malacca, entre la Malaisie et Sumatra, relie l'océan Indien à la mer de Chine méridionale et concentre l'essentiel du commerce entre l'Asie orientale et le reste du monde.

En Europe, le pas de Calais sépare la France de l'Angleterre sur trente-quatre kilomètres et compte parmi les couloirs maritimes les plus fréquentés du globe. Le détroit de Béring, lui, sépare l'Asie de l'Amérique sur environ quatre-vingt-cinq kilomètres — il fut une terre émergée lors des périodes glaciaires, ce qui explique le peuplement des Amériques.`],
    ["Les canaux", `Le canal de Suez relie la mer Rouge à la Méditerranée depuis 1869 : il évite le contournement de l'Afrique et raccourcit de plusieurs semaines la liaison Europe-Asie. Creusé au niveau de la mer, il n'a pas d'écluses.

Le canal de Panama en a, et pour une raison précise : le lac Gatún, qu'il emprunte, se situe à vingt-six mètres au-dessus du niveau des mers. Les navires y sont donc élevés puis redescendus, ce qui limite le débit et rend le canal sensible à la sécheresse — les restrictions de tirant d'eau imposées lors des étiages récents l'ont rappelé. Plus au sud, le passage de Drake sépare l'Amérique du Sud de l'Antarctique : le plus redouté des marins, et le seul endroit où le courant circumpolaire n'est freiné par aucune terre.`],
  ],

  "geo-capitales-monde": [
    ["Des capitales d'arbitrage", `Beaucoup de capitales ont été choisies pour trancher une rivalité. Canberra a été bâtie de toutes pièces à partir de 1913 parce que Sydney et Melbourne se disputaient le titre : la ville nouvelle a été implantée à mi-chemin. Au Canada, c'est la reine Victoria qui désigne Ottawa en 1857, pour départager les prétentions concurrentes et pour éloigner la capitale de la frontière américaine.

Aux États-Unis comme dans plusieurs pays fédéraux, la capitale n'est pas la plus grande ville : le choix vise à séparer le pouvoir politique du pouvoir économique.`],
    ["Déplacer le centre de gravité", `D'autres capitales ont été déplacées pour attirer le peuplement ou affirmer une rupture. Le Brésil inaugure Brasília en 1960, en pleine forêt de plateau, pour tirer le développement vers l'intérieur d'un pays entièrement littoral. Le Nigeria fait de même avec Abuja, choisie pour sa position centrale et sa neutralité ethnique face à Lagos. Le Kazakhstan a transféré sa capitale à Astana, dans le nord, en 1997. Le Myanmar a inauguré Naypyidaw en 2006, ville administrative surdimensionnée et peu peuplée.

En Turquie, Mustafa Kemal préfère en 1923 Ankara à Istanbul : au centre de l'Anatolie, loin des côtes et des puissances étrangères, elle symbolise la République contre l'Empire.`],
    ["Les cas pluriels", `Certains pays n'ont pas une seule capitale. L'Afrique du Sud en compte trois, chacune abritant un pouvoir : Pretoria pour l'exécutif, Le Cap pour le législatif, Bloemfontein pour le judiciaire — héritage du compromis de 1910 entre républiques et colonies.

La Bolivie distingue Sucre, capitale constitutionnelle et siège de la Cour suprême, de La Paz, où siègent le gouvernement et le Parlement. Les Pays-Bas ont pour capitale Amsterdam, inscrite dans la Constitution, alors que le gouvernement, le Parlement et la Cour siègent à La Haye. Dans chacun de ces cas, la question posée n'est pas géographique mais politique : où se tient le pouvoir, et lequel.`],
  ],

  "geo-frontieres": [
    ["Enclaves et enfermements", `Une enclave au sens strict est un territoire entièrement entouré par un seul autre État. Trois pays sont dans ce cas : Saint-Marin et le Vatican, entourés par l'Italie, et le Lesotho, entouré par l'Afrique du Sud.

Il faut distinguer ce cas d'un pays sans littoral, qu'on dit enclavé au sens large : Andorre, par exemple, n'a pas d'accès à la mer et n'a que deux voisins, la France et l'Espagne, sans être une enclave. Deux pays sont doublement enclavés, c'est-à-dire entourés uniquement de pays eux-mêmes sans littoral : l'Ouzbékistan et le Liechtenstein. Kaliningrad, enfin, est une exclave russe : un morceau de Russie séparé du reste du pays par la Lituanie et la Pologne.`],
    ["Les frontières records", `La plus longue frontière terrestre du monde sépare le Canada et les États-Unis, sur près de neuf mille kilomètres en comptant l'Alaska. La Chine et la Russie détiennent le record du nombre de voisins terrestres, quatorze chacune.

À l'opposé du continu, la frontière la plus militarisée du monde sépare les deux Corées : une zone démilitarisée large de quatre kilomètres, hérissée de fortifications de part et d'autre, qui n'est pas une frontière juridique puisque la guerre s'est achevée par un armistice et non par un traité de paix.`],
    ["Tracés à la règle", `Beaucoup de frontières africaines et proche-orientales ont été tracées à la table de négociation, sans considération du terrain. L'Égypte présente ainsi une frontière parfaitement rectiligne sur la majeure partie de son tracé, alignée sur des parallèles et des méridiens.

La ligne Durand, tracée en 1893 entre l'Empire britannique et l'Afghanistan, sépare aujourd'hui l'Afghanistan du Pakistan en coupant en deux l'aire de peuplement pachtoune : l'Afghanistan ne l'a jamais reconnue. La bande de Caprivi, corridor namibien étroit s'étirant vers le Zambèze, résulte d'une négociation coloniale de 1890 par laquelle l'Allemagne cherchait un accès fluvial vers l'océan Indien — accès rendu illusoire par les chutes Victoria, situées en aval.`],
  ],

  "geo-iles": [
    ["Les plus grandes, les plus peuplées", `Le Groenland est la plus grande île du monde — l'Australie, plus vaste, est classée comme continent, ce qui relève d'une convention et non d'un critère physique. La Nouvelle-Guinée vient en deuxième position, partagée entre l'Indonésie et la Papouasie-Nouvelle-Guinée.

L'île la plus peuplée n'est aucune des deux : c'est Java, en Indonésie, avec plus de cent cinquante millions d'habitants sur une superficie comparable à celle de la Grèce — l'une des densités les plus fortes du monde à cette échelle. Hispaniola, aux Antilles, présente un autre cas remarquable : une île partagée entre deux États, Haïti et la République dominicaine, aux trajectoires économiques radicalement divergentes.`],
    ["Comment naît une île", `Une île continentale s'est détachée d'un continent, dont elle prolonge le socle géologique ; une île volcanique est sortie de la mer. La formation d'une île volcanique a même été observée en direct : Surtsey a émergé au large de l'Islande en 1963, et son étude, sur un territoire interdit au public, a permis de documenter la colonisation d'une terre vierge par le vivant.

Un atoll résulte d'un troisième processus, décrit par Darwin : un récif corallien s'établit autour d'un volcan qui s'affaisse ensuite, laissant un anneau de corail entourant un lagon. C'est aussi lors de son voyage que Darwin observe aux Galápagos les variations des espèces d'une île à l'autre, observation qui nourrira la théorie de l'évolution.`],
    ["Isolement et volcans", `L'archipel de Tristan da Cunha, dans l'Atlantique sud, est le lieu habité en permanence le plus isolé du monde : plus de deux mille kilomètres le séparent de la terre habitée la plus proche, et il n'a ni aéroport ni port en eau profonde.

Le pays comptant le plus d'îles n'est pas un archipel tropical mais la Suède, dont les côtes découpées et les lacs comptent des centaines de milliers d'îlots. En France, La Réunion, dans l'océan Indien, abrite le piton de la Fournaise, l'un des volcans les plus actifs du monde, dont les éruptions sont fréquentes et généralement peu dangereuses.`],
  ],

  "geo-climats-extremes": [
    ["Le chaud et le froid", `La température la plus élevée officiellement reconnue a été relevée à Furnace Creek, dans la Vallée de la Mort en Californie : cinquante-six degrés et sept dixièmes en 1913, chiffre contesté par plusieurs climatologues. Des records antérieurs, en Libye, ont été invalidés après réexamen.

À l'autre extrême, la station Vostok, en Antarctique, a mesuré moins quatre-vingt-neuf degrés en 1983, record pour une station de surface. Ces chiffres appellent une réserve générale : les records officiels dépendent de la présence de stations de mesure, et les lieux les plus extrêmes sont précisément ceux où l'on n'installe pas d'instruments.`],
    ["Le sec, l'humide, le profond", `Le désert d'Atacama, au Chili, est l'endroit habité le plus sec du monde : certaines stations n'y ont jamais enregistré de précipitations mesurables. À l'inverse, Mawsynram, dans le nord-est de l'Inde, reçoit les précipitations les plus abondantes du globe, plus de onze mètres d'eau par an, sous l'effet de la mousson bloquée par le relief.

Le point le plus profond des océans est la fosse des Mariannes, à près de onze kilomètres sous la surface. Le point émergé le plus bas se trouve sur les rives de la mer Morte, à plus de quatre cents mètres sous le niveau de la mer. Et le désert le plus vaste du monde n'est pas le Sahara mais l'Antarctique : un désert se définit par ses précipitations, non par sa température.`],
    ["Eaux remarquables", `Le lac Baïkal, en Sibérie, contient environ un cinquième de l'eau douce de surface non gelée du globe : il est aussi le plus profond, et abrite une faune endémique unique.

La mer Caspienne pose un problème différent, juridique celui-là : mer ou lac, le partage de ses ressources n'obéit pas aux mêmes règles internationales — le statut a fait l'objet d'un contentieux de trente ans entre les cinq États riverains, réglé par un accord de compromis en 2018. Les chutes Victoria, sur le Zambèze, portent enfin le nom local de fumée qui gronde, description exacte du panache de vapeur visible à des dizaines de kilomètres.`],
  ],

  "geo-villes-monde": [
    ["Le basculement urbain", `Depuis 2007, plus de la moitié de l'humanité vit en ville. La croissance urbaine ne se produit plus en Europe ni en Amérique du Nord, mais en Afrique et en Asie : c'est là que se joue l'urbanisation du siècle.

La plus grande agglomération du monde reste Tokyo, avec environ trente-sept millions d'habitants, même si sa population a cessé de croître. Lagos, au Nigeria, est la ville la plus peuplée d'Afrique et l'une des plus dynamiques démographiquement. Shenzhen, en Chine, illustre l'urbanisation ultra-rapide : village de pêcheurs devenu métropole de plus de dix millions d'habitants en quarante ans, à la faveur de son statut de zone économique spéciale.`],
    ["Sites remarquables", `Certaines villes doivent leur singularité à leur site. La Paz, en Bolivie, est le siège de gouvernement le plus haut du monde, à près de quatre mille mètres. Istanbul s'étend sur deux continents, de part et d'autre du Bosphore. Mexico a été bâtie sur un ancien lac asséché, ce qui explique qu'elle s'enfonce de plusieurs centimètres par an et qu'elle amplifie fortement les ondes sismiques.

Moscou est la ville européenne la plus peuplée intra-muros. Singapour, à l'autre bout du continent, est à la fois une ville et un État souverain, cas rare qui lui donne une capacité de planification sans équivalent.`],
    ["Statuts particuliers", `La Mecque est interdite aux non-musulmans, disposition inscrite dans le droit saoudien et signalée sur les routes qui y mènent : c'est l'une des rares villes au monde dont l'accès est conditionné par l'appartenance religieuse.

Genève illustre un autre cas : elle accueille le siège européen des Nations unies, l'Organisation mondiale de la santé, l'Organisation internationale du travail et des dizaines d'autres institutions, sans être la capitale de la Suisse — qui est Berne. Le statut international d'une ville ne dépend donc ni de sa taille ni de son rang administratif.`],
  ],

  "geo-ressources": [
    ["Hydrocarbures", `Il faut distinguer les réserves prouvées de la production. Le Venezuela détient les plus grandes réserves prouvées de pétrole au monde, mais sa production s'est effondrée faute d'investissement ; les États-Unis, eux, sont devenus le premier producteur mondial grâce à l'exploitation des huiles de schiste à partir des années 2010.

La Russie possède les plus grandes réserves de gaz naturel. Elle est aussi devenue, ces dernières années, le premier exportateur mondial de blé — ce qui donne à ses décisions commerciales un poids direct sur la sécurité alimentaire de plusieurs pays d'Afrique et du Proche-Orient.`],
    ["Les métaux de la transition", `La Chine domine la production de terres rares, groupe de dix-sept éléments indispensables aux aimants permanents, aux écrans et à l'électronique. Sa domination tient moins aux gisements, assez répandus, qu'au raffinage, très polluant et concentré chez elle.

La République démocratique du Congo produit l'essentiel du cobalt mondial, dans des conditions sociales et environnementales régulièrement dénoncées. L'Australie est le premier producteur de lithium, devant le Chili. Ces trois exemples dessinent une géopolitique nouvelle : la transition énergétique ne supprime pas la dépendance aux ressources, elle en change la nature.`],
    ["L'eau et la malédiction", `Moins de un pour cent de l'eau terrestre est de l'eau douce liquide et accessible : le reste est salé, gelé ou trop profond. Cette rareté relative explique la multiplication des tensions autour des bassins partagés. Le Nil en est l'exemple le plus tendu : la construction par l'Éthiopie d'un grand barrage sur le Nil Bleu a ouvert un contentieux durable avec l'Égypte, qui dépend du fleuve pour presque toute son eau.

Enfin, la rente minière ne fait pas la prospérité. La malédiction des ressources désigne le constat qu'une richesse minière ou pétrolière freine souvent le développement : elle surévalue la monnaie et handicape les autres secteurs, alimente la corruption et rend les recettes publiques dépendantes de cours volatils.`],
  ],

  "geo-france-regions": [
    ["Un découpage récent", `La France métropolitaine compte treize régions depuis 2016. La réforme a procédé par fusion et non par redécoupage : les anciennes régions ont été regroupées sans que leurs limites internes soient modifiées, ce qui explique des ensembles très étendus et parfois peu cohérents.

La Nouvelle-Aquitaine est la plus vaste région métropolitaine, plus grande que l'Autriche. Lyon est la préfecture d'Auvergne-Rhône-Alpes, Strasbourg le chef-lieu du Grand Est. Le Nord reste le département le plus peuplé de France, héritage de son industrialisation ancienne.`],
    ["Le relief et l'eau", `Les Pyrénées séparent la France de l'Espagne sur environ quatre cents kilomètres, avec une continuité de crête qui a longtemps limité les passages — d'où la persistance d'Andorre entre les deux versants. À l'est, le mont Blanc culmine à plus de quatre mille huit cents mètres et constitue le point culminant de la France métropolitaine ; son altitude exacte varie de quelques mètres selon l'enneigement du sommet, mesuré tous les deux ans.

La Loire est le plus long fleuve de France, avec un régime très irrégulier qui l'a rendue difficile à aménager : c'est l'un des rares grands fleuves européens dont le cours reste largement non canalisé.`],
    ["Économies et statuts", `L'Occitanie produit le plus grand volume de vin de France, devant la Nouvelle-Aquitaine : la hiérarchie change si l'on raisonne en valeur plutôt qu'en volume, les vignobles bordelais et champenois dominant alors.

La Corse dispose depuis 2018 d'un statut particulier : ses deux départements et sa région ont fusionné en une collectivité unique, dotée de compétences propres. Outre-mer, cinq départements et régions — Guadeloupe, Martinique, Guyane, La Réunion, Mayotte — relèvent du droit commun avec des adaptations, tandis que d'autres territoires, comme la Polynésie française ou la Nouvelle-Calédonie, obéissent à des statuts distincts.`],
  ],

  "geo-mers-oceans": [
    ["Les courants", `L'océan mondial fonctionne comme un système. Le Gulf Stream est un courant chaud qui remonte l'Atlantique nord et adoucit le climat de l'Europe occidentale ; il fait partie d'une circulation thermohaline globale, parfois appelée tapis roulant océanique, entraînée par les différences de température et de salinité. Son affaiblissement possible sous l'effet du réchauffement est l'un des points de bascule climatiques étudiés.

Le courant de Humboldt, froid, longe les côtes du Pérou et du Chili et remonte des eaux profondes riches en nutriments : il explique la richesse halieutique exceptionnelle de cette côte. El Niño désigne un réchauffement périodique du Pacifique équatorial est qui interrompt cette remontée, effondre la pêche et bouleverse les régimes de pluies sur plusieurs continents.`],
    ["Les marées", `Les marées résultent principalement de l'attraction de la Lune, et du Soleil dans une moindre mesure : quand les deux s'alignent, les marées sont plus fortes. Mais l'amplitude locale dépend surtout de la géométrie des côtes et des fonds.

C'est pourquoi la baie de Fundy, au Canada, observe les plus fortes marées du monde, jusqu'à seize mètres : l'entonnoir de la baie amplifie l'onde. À l'inverse, la Méditerranée a des marées très faibles, de l'ordre de quelques dizaines de centimètres : presque fermée, elle communique trop peu avec l'océan pour que l'onde de marée s'y développe.`],
    ["Mers particulières et dégradations", `La mer Morte est la plus salée du monde parmi les grandes étendues d'eau — près de dix fois la salinité océanique — ce qui interdit toute vie animale et explique la flottaison des baigneurs. La mer d'Aral, elle, a presque disparu depuis les années 1960, ses fleuves d'alimentation ayant été détournés pour l'irrigation du coton : c'est la catastrophe environnementale d'origine humaine la plus visible depuis l'espace.

Les zones mortes océaniques sont des secteurs privés d'oxygène où la vie animale disparaît, généralement dus à l'excès de nutriments agricoles qui provoque des proliférations d'algues. Leur surface augmente. Enfin, l'océan Arctique est le plus petit et le moins profond des océans, et celui dont la banquise estivale recule le plus rapidement.`],
  ],

  "geo-population": [
    ["Huit milliards", `La population mondiale a atteint huit milliards d'habitants en 2022. Sa croissance ralentit nettement : le taux d'accroissement a été divisé par deux depuis son pic des années 1960, et les projections situent le maximum vers la fin du siècle.

Ce ralentissement s'explique par la transition démographique : le passage d'un régime de forte natalité et forte mortalité à un régime de faibles taux, avec une phase intermédiaire de croissance rapide quand la mortalité a déjà baissé et la natalité pas encore. L'indice de fécondité, nombre moyen d'enfants par femme, mesure cette évolution ; il est passé sous le seuil de renouvellement dans plus de la moitié des pays. L'Inde est devenue en 2023 le pays le plus peuplé du monde, devant la Chine.`],
    ["Vieillir, s'urbaniser", `Le vieillissement est très inégal selon les continents. Le Japon a la population la plus âgée du monde, avec près d'un tiers de personnes de plus de soixante-cinq ans ; l'Afrique connaîtra à l'inverse la plus forte croissance démographique d'ici 2050 et concentre les populations les plus jeunes.

La pyramide des âges représente graphiquement la population par âge et par sexe : sa forme raconte l'histoire d'un pays, les guerres, les baby-booms et les crises y laissant des entailles durables. L'urbanisation, enfin, désigne le passage d'une population majoritairement rurale à majoritairement urbaine : elle est achevée en Europe, en cours en Afrique.`],
    ["Les migrations, sans idées reçues", `L'essentiel des migrations internationales est régional : la majorité des migrants s'installent dans un pays proche de leur pays d'origine, souvent limitrophe. L'image d'un flux massif du Sud vers le Nord ne correspond pas aux données.

De même, les pays qui accueillent le plus de réfugiés ne sont pas les plus riches mais les voisins des zones de crise : la Turquie figure depuis plusieurs années en tête, devant l'Iran, la Colombie ou le Pakistan. Enfin, la part des migrants internationaux dans la population mondiale reste remarquablement stable sur le long terme, autour de trois à quatre pour cent.`],
  ],

  "geo-cartographie-outils": [
    ["Toute carte ment", `Aucune projection ne peut représenter une sphère sur un plan sans déformation : c'est un théorème de géométrie, démontré par Gauss, et non une limite technique qu'un jour on dépassera. Une projection conserve donc soit les angles, soit les surfaces, jamais les deux.

La projection de Mercator conserve les angles, donc les caps : une route de cap constant y est une droite, ce qui en faisait un outil de navigation irremplaçable. Le prix à payer est une déformation croissante des surfaces vers les pôles — le Groenland y paraît aussi grand que l'Afrique, alors qu'il est quatorze fois plus petit. Une projection équivalente, comme celle de Peters, conserve au contraire les surfaces, au prix d'une déformation des formes.`],
    ["Se repérer", `La latitude est l'angle par rapport à l'équateur, de zéro à quatre-vingt-dix degrés vers chaque pôle : elle a un point de départ naturel. La longitude n'en a pas, ce qui explique qu'il ait fallu en choisir un par convention : le méridien d'origine passe à Greenwich depuis une conférence internationale de 1884, après des siècles de méridiens nationaux concurrents.

L'échelle d'une carte exprime le rapport entre la distance sur le papier et la distance réelle : au 1/25 000, un centimètre vaut deux cent cinquante mètres. Les courbes de niveau relient des points de même altitude : leur resserrement indique une pente forte, leur espacement un terrain plat.`],
    ["Les outils modernes, et l'histoire", `Le GPS est le système satellitaire américain de positionnement ; d'autres constellations existent, dont l'européenne Galileo et la chinoise Beidou. Un SIG, ou système d'information géographique, est un outil qui superpose des couches de données localisées et permet de les croiser : c'est devenu l'instrument central de l'aménagement, de l'épidémiologie et de la logistique.

Un dernier détail rappelle que l'orientation est une convention : les cartes médiévales européennes placent souvent l'est en haut, parce qu'elles étaient orientées vers Jérusalem ou le Levant — le mot orienter en vient. Le nord en haut n'est devenu la norme qu'avec la diffusion de la boussole et des cartes marines.`],
  ],

  "geo-tourisme-patrimoine": [
    ["Une liste et ses critères", `La liste du patrimoine mondial est gérée par l'UNESCO, en application de la convention de 1972. Un bien peut être culturel, naturel ou mixte, et doit démontrer une valeur universelle exceptionnelle au regard de critères précis, ainsi qu'un plan de gestion crédible.

L'inscription n'est pas un label touristique mais un engagement de protection pris par l'État. La liste compte plus de mille biens, très inégalement répartis : l'Italie en compte le plus grand nombre, suivie de la Chine, l'Europe restant globalement surreprésentée — biais que le Comité du patrimoine mondial reconnaît et tente de corriger.`],
    ["Quelques biens emblématiques", `Le Machu Picchu, cité inca d'altitude, est inscrit depuis 1983 ; le Taj Mahal, monument funéraire édifié au XVIIe siècle par un empereur moghol pour son épouse, l'est depuis la même période. Angkor, au Cambodge, constitue le plus vaste ensemble religieux du monde, d'abord hindou puis bouddhiste. Pétra, en Jordanie, est taillée dans la roche rose par les Nabatéens.

En France, la vallée de la Vézère est inscrite pour ses grottes ornées, dont Lascaux. Dans la catégorie naturelle, la Grande Barrière de corail australienne figure sur la liste depuis 1981 — et fait aujourd'hui l'objet d'une surveillance renforcée en raison des épisodes de blanchissement.`],
    ["Protéger, déplacer, déclasser", `L'exemple le plus spectaculaire de sauvetage précède la convention elle-même : les temples d'Abou Simbel, en Égypte, ont été découpés et remontés soixante mètres plus haut dans les années 1960 pour échapper aux eaux du barrage d'Assouan. L'opération, coordonnée par l'UNESCO, a servi de matrice à la convention de 1972.

Un site mal protégé risque son inscription sur la liste du patrimoine mondial en péril, puis, dans les cas extrêmes, son retrait pur et simple. Cela est arrivé deux fois : à une réserve d'oryx d'Oman, dont le périmètre avait été réduit, et à la vallée de l'Elbe à Dresde, après la construction d'un pont contesté.`],
  ],
};
