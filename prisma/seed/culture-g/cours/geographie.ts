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

  "geo2-climats-monde": [
    ["La latitude, et le reste", `La latitude explique les grandes zones climatiques, mais l'altitude, la proximité de la mer et les courants font le reste — au point que deux villes situées sur le même parallèle peuvent connaître des climats sans rapport.

Près de l'équateur règne le climat équatorial : chaud et humide toute l'année, sans saison sèche marquée, avec des précipitations quotidiennes. Le climat méditerranéen, lui, se caractérise par des étés chauds et secs et des hivers doux et pluvieux ; il se rencontre autour de la Méditerranée mais aussi en Californie, au Chili central, en Afrique du Sud et en Australie méridionale — toujours sur les façades occidentales des continents, aux latitudes moyennes.`],
    ["Pourquoi les déserts sont là où ils sont", `Les grands déserts se situent souvent vers trente degrés de latitude, au nord comme au sud. La raison tient à la circulation atmosphérique : l'air chaud et humide s'élève à l'équateur, se déleste de son humidité en pluies, puis redescend vers ces latitudes, sec et réchauffé par la compression. Ce sont les cellules de Hadley, et elles expliquent l'alignement du Sahara, de l'Arabie, du Kalahari et des déserts australiens.

D'autres déserts ont d'autres causes : l'éloignement de toute mer pour les déserts continentaux d'Asie centrale, un courant froid côtier pour l'Atacama, ou l'effet d'abri d'une chaîne pour les déserts situés sous le vent des montagnes.`],
    ["Les mécanismes régionaux", `La mousson est un renversement saisonnier des vents : en été, le continent surchauffé aspire l'air humide de l'océan et déclenche des pluies massives ; en hiver, le flux s'inverse. Plus d'un milliard de personnes dépendent de sa régularité pour leur agriculture, ce qui rend sa variabilité redoutable.

La dérive nord-atlantique, prolongement du Gulf Stream, adoucit considérablement le climat de l'Europe de l'Ouest : Paris et Montréal sont à des latitudes comparables pour des hivers sans commune mesure. El Niño et son inverse La Niña désignent deux phases d'une oscillation du Pacifique équatorial qui déplace pluies et sécheresses sur plusieurs continents. L'effet de fœhn, enfin, est un vent chaud et sec descendant sous le vent d'une montagne, après que l'air s'est délesté de son humidité au passage du relief.`],
    ["Les échelles fines et le classement", `Un îlot de chaleur urbain désigne l'élévation de température des villes par rapport aux campagnes voisines : bitume et béton stockent la chaleur, la végétation manque, et l'écart peut dépasser plusieurs degrés la nuit. Il transforme les canicules en risque sanitaire majeur, ce qui explique la place prise par la végétalisation dans les politiques urbaines.

Le permafrost est un sol gelé en permanence depuis au moins deux ans consécutifs ; il couvre un quart des terres émergées de l'hémisphère nord. Son dégel libère du méthane et déstabilise les infrastructures bâties dessus. Pour ordonner tout cela, la classification de Köppen, établie au début du XXe siècle et plusieurs fois révisée, répartit les climats selon les températures et les précipitations : c'est elle qu'on lit derrière les couleurs des cartes climatiques.`],
  ],

  "geo2-montagnes-monde": [
    ["Des collisions en cours", `Les plus hautes chaînes du monde sont toutes le résultat de collisions de plaques encore actives : elles continuent de s'élever, de quelques millimètres par an, tandis que l'érosion les rabote.

L'Himalaya naît de la collision de la plaque indienne contre la plaque eurasiatique, engagée il y a une cinquantaine de millions d'années et toujours en cours — l'Inde continue d'avancer vers le nord. Les Andes longent toute la côte ouest de l'Amérique du Sud et résultent d'une subduction : la plaque océanique plonge sous le continent, ce qui soulève le relief et alimente un volcanisme intense.`],
    ["Les sommets et les records", `L'Everest culmine à 8 849 mètres selon la mesure conjointe sino-népalaise publiée en 2020, qui a mis fin à un désaccord de plusieurs décennies entre les deux pays sur la prise en compte de la calotte de neige.

Le plus haut sommet d'Amérique est l'Aconcagua, en Argentine ; celui d'Afrique le Kilimandjaro, volcan isolé dont les glaciers reculent rapidement. Le Chimborazo, en Équateur, détient un titre différent : bien qu'il culmine à environ six mille trois cents mètres, il est le point de la surface terrestre le plus éloigné du centre de la Terre, parce que notre planète est aplatie aux pôles et renflée à l'équateur. Quatorze sommets dépassent huit mille mètres, tous situés dans l'Himalaya et le Karakoram.`],
    ["Le volcanisme", `La ceinture de feu du Pacifique est un alignement de volcans et de zones sismiques qui encercle l'océan sur plus de quarante mille kilomètres : elle concentre la majorité des volcans actifs et des séismes les plus puissants, et correspond aux limites de subduction du Pacifique.

Un point chaud fonctionne autrement : c'est une remontée de magma indépendante des limites de plaques, fixe dans le manteau, au-dessus de laquelle la plaque défile. Il en résulte des chaînes d'îles volcaniques dont l'âge croît régulièrement avec la distance — Hawaï en est l'exemple canonique, et la Réunion en France en relève également.`],
    ["Les massifs anciens", `Toutes les montagnes ne sont pas jeunes. L'Oural, qui sépare traditionnellement l'Europe de l'Asie, est une chaîne ancienne, formée il y a près de trois cents millions d'années et depuis longtemps érodée : ses sommets dépassent à peine mille neuf cents mètres.

Cette distinction entre chaînes jeunes et massifs anciens se lit dans les formes : les premières présentent des arêtes vives, des vallées en auge et des sommets aigus ; les seconds, des reliefs arrondis et des altitudes modestes. La frontière Europe-Asie sur l'Oural, elle, relève d'une convention géographique et non d'une réalité géologique — les deux ensembles appartiennent à la même plaque.`],
  ],
  "geo2-oceans-mers": [
    ["Cinq océans, dont un récent", `L'océan Austral n'a été officiellement reconnu comme cinquième océan qu'en 2000 par l'Organisation hydrographique internationale, et son adoption reste inégale selon les pays. Il se définit non par des côtes mais par un courant : le courant circumpolaire antarctique, seul à faire le tour du globe sans obstacle continental.

Le Pacifique est de loin le plus vaste : il couvre à lui seul près d'un tiers de la surface du globe, davantage que toutes les terres émergées réunies. C'est aussi là que se trouve la fosse des Mariannes, point le plus profond des océans, à près de onze kilomètres — davantage que la hauteur de l'Everest.`],
    ["Le relief sous-marin", `Une dorsale océanique est une chaîne de montagnes sous-marine où remonte du magma et où se forme en permanence une nouvelle croûte : la dorsale médio-atlantique s'étend sur plus de quinze mille kilomètres et écarte l'Amérique de l'Europe de quelques centimètres par an.

Le plateau continental est le prolongement immergé et peu profond d'un continent, avant la rupture de pente vers les grands fonds. Sa faible profondeur et sa richesse biologique en font la zone de pêche et d'exploitation la plus convoitée — et le fondement juridique des revendications maritimes, une zone économique exclusive s'étendant sur deux cents milles marins où l'État côtier détient les droits d'exploitation des ressources.`],
    ["Ce qui fait circuler l'eau", `La circulation thermohaline est un mouvement océanique global entraîné par les différences de température et de salinité : les eaux froides et salées, plus denses, plongent aux hautes latitudes et alimentent un lent circuit profond qui met un millier d'années à faire le tour du globe. Son ralentissement figure parmi les points de bascule climatiques étudiés.

Un upwelling est une remontée locale d'eaux profondes froides et riches en nutriments le long de certaines côtes : il alimente les pêcheries les plus productives du monde, notamment au large du Pérou, de la Namibie et de la Mauritanie. Sa perturbation par El Niño effondre périodiquement ces pêcheries.`],
    ["Les mers en danger", `La mer Morte est la plus salée des grandes étendues d'eau — près de dix fois la salinité océanique — ce qui interdit toute vie animale ; son niveau baisse d'environ un mètre par an, le Jourdain qui l'alimente étant largement prélevé.

La mer d'Aral offre le cas le plus documenté d'une catastrophe environnementale d'origine humaine : le détournement de ses fleuves d'alimentation pour irriguer le coton, à partir des années 1960, l'a réduite à une fraction de sa surface, laissant des bateaux échoués dans un désert salé. Enfin, ce qu'on appelle le septième continent de plastique n'est pas une île mais une concentration de microplastiques en suspension dans un gyre océanique : invisible sur les images satellites, et d'autant plus difficile à nettoyer.`],
  ],

  "geo2-energie-ressources": [
    ["Produire n'est pas détenir", `La localisation des ressources ne coïncide presque jamais avec celle de la consommation, ce qui fait de leur transport et de leur contrôle un enjeu géopolitique permanent.

Il faut par ailleurs distinguer réserves et production. Les États-Unis sont depuis quelques années le premier producteur mondial de pétrole, grâce aux hydrocarbures de schiste, alors que les plus grandes réserves prouvées se trouvent au Venezuela. La Russie détient les plus grandes réserves de gaz naturel. L'OPEP, organisation de pays exportateurs de pétrole fondée en 1960, coordonne les niveaux de production de ses membres pour peser sur les prix — pouvoir démontré lors du choc de 1973 et depuis partiellement érodé par les producteurs extérieurs.`],
    ["Les métaux de la transition", `Une terre rare est l'un des dix-sept métaux d'un groupe chimique essentiel aux technologies modernes : aimants permanents des éoliennes et des moteurs électriques, écrans, catalyseurs. Leur nom est trompeur — ils ne sont pas rares dans la croûte terrestre, mais dispersés et coûteux à séparer.

La Chine domine largement leur raffinage, étape polluante que les pays occidentaux ont laissé partir. C'est cette concentration industrielle, plus que la géologie, qui crée la dépendance. Le lithium, indispensable aux batteries des véhicules électriques, est extrait principalement en Australie et en Amérique du Sud ; le cobalt vient majoritairement de République démocratique du Congo, dans des conditions sociales et environnementales régulièrement dénoncées.`],
    ["Épuiser ou pas", `Une ressource non renouvelable est une ressource dont le stock ne se reconstitue pas à l'échelle des temps humains : hydrocarbures, minerais. La question n'est pas seulement leur épuisement physique mais leur coût croissant d'extraction, les gisements les plus accessibles étant exploités en premier.

Le pic pétrolier désigne le moment où la production mondiale atteindrait son maximum avant de décliner. Annoncé plusieurs fois et repoussé à chaque nouvelle technique d'extraction, il reste un concept discuté — d'autant que la contrainte climatique pourrait imposer de laisser des réserves inexploitées bien avant qu'elles ne s'épuisent.`],
    ["La rente et ses effets", `La malédiction des ressources désigne un constat statistique : les pays richement dotés en ressources naturelles connaissent souvent une croissance plus faible et des institutions plus fragiles que les autres.

Trois mécanismes sont avancés. La rente surévalue la monnaie et handicape les autres secteurs exportateurs — c'est le syndrome hollandais. Elle rend les recettes publiques dépendantes de cours volatils, donc les budgets instables. Et elle affaiblit le lien fiscal entre l'État et les citoyens : un gouvernement qui vit du pétrole n'a pas besoin de lever l'impôt, donc pas besoin de rendre des comptes. La Norvège fait figure de contre-exemple, en ayant placé sa rente dans un fonds souverain et maintenu une fiscalité ordinaire.`],
  ],

  "geo2-transports-mondialisation": [
    ["La mer, d'abord", `Environ quatre-vingts pour cent du commerce mondial en volume passe par la mer. Ce chiffre, souvent cité et rarement mesuré, dit l'essentiel : l'économie mondiale repose sur une infrastructure maritime que presque personne ne voit.

L'innovation décisive n'est ni un navire ni un moteur, mais une boîte. Le conteneur normalisé, généralisé à partir des années 1960, a supprimé la manutention pièce par pièce : le chargement d'un navire est passé de plusieurs jours à quelques heures, et le coût du fret s'est effondré. C'est ce qui a rendu rentable la fragmentation de la production entre continents.`],
    ["Les points de passage", `Quelques passages étroits concentrent l'essentiel des flux. Le détroit de Gibraltar relie la Méditerranée à l'Atlantique. Le canal de Suez relie la Méditerranée à la mer Rouge et évite le contournement de l'Afrique — son blocage accidentel par un porte-conteneurs en 2021 a désorganisé le commerce mondial en quelques jours.

Le détroit d'Ormuz contrôle la sortie du golfe Persique et voit passer une part majeure du pétrole mondial. Le détroit de Malacca, entre la péninsule malaise et Sumatra, concentre le trafic entre l'océan Indien et l'Asie orientale. Ces goulets sont les points de vulnérabilité les plus commentés de l'économie mondiale, et la raison d'être de plusieurs dispositifs militaires permanents.`],
    ["Concentrer pour distribuer", `Un hub est une plateforme de correspondance qui concentre les flux pour les redistribuer : au lieu de relier chaque point à tous les autres, on fait converger vers un nœud. Le principe vaut pour le transport aérien de passagers comme pour le fret maritime.

Shanghai est le premier port mondial pour le trafic de conteneurs, devant plusieurs autres ports chinois — l'Asie orientale concentre la quasi-totalité du classement. Rotterdam reste le premier port européen, grâce à sa position à l'embouchure du Rhin et à son accès direct à l'arrière-pays industriel allemand.`],
    ["L'air, et les nouvelles routes", `Le fret aérien représente une très faible part du volume du commerce mondial — moins d'un pour cent — mais une part importante de sa valeur, autour du tiers. Il transporte ce qui est urgent, périssable ou coûteux : composants électroniques, médicaments, pièces détachées critiques, fleurs coupées.

La Chine a lancé en 2013 un vaste programme d'infrastructures reliant l'Asie à l'Europe et à l'Afrique, souvent appelé nouvelle route de la soie : ports, voies ferrées, routes, financés par des prêts chinois. Son ampleur est considérable et son évaluation contestée — outil de développement pour les uns, instrument d'influence et piège d'endettement pour les autres.`],
  ],

  "geo2-frontieres-conflits": [
    ["Aucune frontière n'est naturelle", `Une frontière n'est jamais naturelle : même un fleuve suppose une convention sur la ligne exacte — rive, milieu du lit, chenal navigable — et le lit d'un fleuve se déplace. L'expression frontière naturelle relève de la rhétorique politique, non de la géographie.

Une frontière artificielle, tracée sans suivre un élément du relief, est simplement plus visible sur une carte : les lignes droites des frontières africaines et proche-orientales trahissent leur origine coloniale. Elles ont été négociées entre puissances européennes, souvent sans connaissance du terrain ni des peuples concernés.`],
    ["Les cas particuliers", `Une enclave est un territoire entièrement entouré par un autre État. Un couloir territorial est à l'inverse une bande de territoire donnant accès à la mer ou reliant deux parties d'un même État — le couloir de Dantzig, le corridor de Wakhan afghan, l'accès bolivien à la mer perdu au XIXe siècle et toujours revendiqué.

Le statut d'État non reconnu désigne un territoire disposant d'un pouvoir effectif, d'une population et de frontières, mais sans reconnaissance internationale large. Ces entités existent de fait sans exister en droit, ce qui les prive d'accès aux organisations internationales, aux financements et souvent au commerce légal.`],
    ["Les grands contentieux", `Le Cachemire est disputé entre l'Inde, le Pakistan et la Chine depuis 1947 : trois guerres et une ligne de contrôle qui n'est pas une frontière reconnue, dans une zone où deux puissances nucléaires se font face. Le Sahara occidental est administré par le Maroc et revendiqué par un mouvement indépendantiste, dans un conflit gelé depuis un cessez-le-feu de 1991.

Taïwan est revendiquée par la Chine comme partie de son territoire ; l'île dispose d'un gouvernement, d'une armée et d'élections, mais d'une reconnaissance diplomatique très limitée. La mer de Chine méridionale voit s'affronter plusieurs revendications sur des îlots et des récifs, dont l'enjeu réel est le contrôle des ressources et des voies maritimes — la Chine y a construit des îles artificielles militarisées.`],
    ["Les zones à statut particulier", `La zone démilitarisée qui sépare les deux Corées depuis l'armistice de 1953 n'est pas une frontière internationale mais une ligne de cessez-le-feu : la guerre n'a jamais été formellement close par un traité de paix. Paradoxalement, l'absence humaine y a créé une réserve écologique involontaire.

L'Antarctique relève d'un régime unique : le traité de 1959 gèle les revendications territoriales, interdit toute activité militaire et réserve le continent à la recherche scientifique. Personne n'y exerce de souveraineté, et sept États maintiennent des revendications suspendues — modèle souvent cité comme précédent pour la gouvernance des espaces communs.`],
  ],
  "geo2-tourisme-mondial": [
    ["Des flux très concentrés", `Le tourisme international reste très concentré : une poignée de pays capte la majorité des flux. L'Europe reçoit à elle seule environ la moitié des arrivées mondiales, grâce à sa densité de sites, à la proximité des marchés émetteurs et à la facilité de circulation intracontinentale.

Le tourisme balnéaire, centré sur les littoraux et la baignade, constitue le premier segment mondial ; il concentre les flux sur des bandes côtières étroites et saisonnières, avec les conséquences que cela suppose sur l'artificialisation et la ressource en eau. En France, les sites les plus visités varient selon les années et les modes de comptage — Notre-Dame de Paris dominait avant l'incendie de 2019, le Louvre reste en tête des musées.`],
    ["Trop de monde", `La capacité de charge d'un site est le nombre de visiteurs qu'il peut accueillir sans dégradation — physique pour le site, et acceptable pour les habitants. Sa mesure est délicate et son dépassement visible : sentiers érodés, files d'attente, saturation des transports.

Venise a instauré un droit d'entrée pour les visiteurs à la journée, mesure inédite pour une ville habitée, afin de limiter les flux d'excursionnistes qui consomment l'espace sans rien dépenser sur place. D'autres sites ont opté pour des quotas ou la réservation obligatoire. Le tourisme de croisière concentre les critiques : il débarque plusieurs milliers de personnes en quelques heures, avec des retombées locales faibles puisque les passagers dorment et mangent à bord.`],
    ["Ce que le tourisme fait aux lieux", `Les effets économiques locaux sont ambivalents. Le tourisme crée des emplois, mais souvent saisonniers, peu qualifiés et mal rémunérés ; il fait monter les prix, notamment immobiliers, ce qui peut chasser les habitants permanents.

L'effet le plus documenté concerne le logement : dans les villes très visitées, la location de courte durée réduit l'offre de logements permanents et renchérit les loyers. Plusieurs métropoles ont réglementé — quotas de nuitées, autorisation de changement d'usage, compensation obligatoire — avec des résultats inégaux.`],
    ["Se souvenir, et compter le carbone", `Le tourisme mémoriel désigne la visite de lieux liés à des événements historiques douloureux : camps de concentration, champs de bataille, sites de catastrophes. Il pose des questions propres — respect dû aux victimes, tenue et comportement des visiteurs, frontière avec le voyeurisme — que les gestionnaires de ces lieux traitent par une médiation étroitement encadrée.

Enfin, le tourisme représente environ huit pour cent des émissions mondiales de gaz à effet de serre, dont l'essentiel provient du transport aérien longue distance. Le rapport est très inégal : une minorité de voyageurs effectuant des vols longs produit une part disproportionnée du total. C'est ce constat qui oriente les débats actuels vers la distance et la fréquence des voyages plutôt que vers le comportement sur place.`],
  ],

  "geo2-biomes": [
    ["Le climat, puis le sol", `Un biome est un grand ensemble écologique défini par son climat et sa végétation dominante. Leur répartition suit d'abord le climat, ensuite les sols et le relief : c'est pourquoi les cartes des biomes et des climats se ressemblent, avec des nuances locales importantes.

Aux hautes latitudes de l'hémisphère nord s'étend la taïga, immense forêt de conifères qui forme la plus vaste étendue forestière continue du monde. Au-delà, là où les arbres ne poussent plus, la toundra couvre le sol de mousses, de lichens et d'arbustes nains sur un substrat gelé en profondeur.`],
    ["Les zones chaudes", `L'Amazonie est la plus étendue des forêts tropicales humides : elle abrite une part considérable de la biodiversité mondiale et joue un rôle majeur dans les cycles de l'eau et du carbone. Sa déforestation, mesurée annuellement par satellite, varie fortement selon les politiques publiques en vigueur.

La savane est une formation herbacée parsemée d'arbres, caractéristique des climats à saison sèche marquée ; le feu y joue un rôle écologique structurant, en empêchant la forêt de s'installer. La garrigue méditerranéenne, formation basse sur sol calcaire, résulte au contraire largement de l'action humaine : défrichement, pâturage et incendies répétés ont remplacé la forêt de chênes d'origine.`],
    ["Les milieux de l'interface", `La mangrove est une forêt littorale tropicale adaptée à l'eau salée, dont les racines aériennes retiennent les sédiments. Elle protège les côtes de l'érosion et des tempêtes, sert de nurserie à de nombreuses espèces marines et stocke des quantités de carbone considérables ; elle a été massivement détruite pour l'aquaculture crevettière.

Un récif corallien est une structure calcaire construite par des animaux vivant en symbiose avec des algues microscopiques. Cette symbiose est sa force et sa fragilité : au-delà d'un certain seuil de température, l'animal expulse l'algue et blanchit, puis meurt si l'épisode se prolonge. Une zone humide, enfin, est un milieu saturé d'eau au moins une partie de l'année — marais, tourbière, prairie inondable — longtemps considérée comme insalubre et asséchée, et dont on a redécouvert les fonctions d'épuration, de régulation des crues et de stockage de carbone.`],
    ["Où se concentre la vie", `Un point chaud de biodiversité est une région qui combine deux critères : une richesse exceptionnelle en espèces endémiques, et une perte déjà considérable de son habitat d'origine. Le concept, formulé en 1988, sert à orienter les priorités de conservation avec des moyens limités.

Une trentaine de ces points chauds ont été identifiés — bassin méditerranéen, Madagascar, forêts atlantiques du Brésil, Sundaland, Caucase. Ils couvrent une fraction minime des terres émergées et abritent une proportion considérable des espèces de plantes et de vertébrés terrestres. C'est cette disproportion qui fonde la stratégie : protéger peu de surface pour sauver beaucoup d'espèces.`],
  ],
};
