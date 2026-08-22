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

  "geo2-europe-geographie": [
    ["La mer, partout", `Aucun point de l'Europe de l'Ouest n'est très éloigné de la mer : c'est une clé de son histoire. Un continent morcelé en péninsules, îles et mers intérieures, avec un développement côtier considérable rapporté à sa surface — l'inverse exact de l'Asie ou de l'Afrique, massives et continentales.

Cette configuration a favorisé la navigation, le commerce, la pêche et la fragmentation politique : les mers y relient plus qu'elles ne séparent, et aucune puissance continentale n'a jamais réussi à unifier durablement l'ensemble. La mer Baltique sépare la Suède du Danemark et de l'Allemagne ; la Méditerranée, la mer du Nord et l'Atlantique bordent le reste.`],
    ["Les reliefs", `Les Alpes séparent la France de l'Italie et forment la principale barrière du continent, avec les plus hauts sommets d'Europe occidentale. Les Apennins parcourent l'Italie du nord au sud comme une épine dorsale, ce qui explique le morcellement historique de la péninsule et la localisation des voies de communication.

Les Pyrénées ferment la péninsule Ibérique, les Carpates arquent l'Europe centrale, la Scandinavie porte ses propres chaînes. Entre ces massifs s'étendent de grandes plaines — la plaine germano-polonaise, le bassin parisien, la plaine du Pô — qui ont été à la fois les greniers et les couloirs d'invasion du continent.`],
    ["Les hommes", `L'Allemagne est le pays européen le plus peuplé hors Russie ; l'Ukraine en est le plus vaste, toujours hors Russie. Les Pays-Bas figurent parmi les plus fortes densités des grands pays européens, ce qui tient autant à leur petite taille qu'à une occupation dense et ancienne.

La dorsale européenne désigne un axe fortement urbanisé et industrialisé courant de Londres à Milan, en passant par les Pays-Bas, la vallée du Rhin et la Suisse. Longtemps appelée banane bleue, cette concentration de population, de richesse et d'activité structure l'économie du continent et explique la géographie des grands réseaux de transport.`],
    ["Deux singularités", `Le Danube traverse ou borde dix pays et quatre capitales — Vienne, Bratislava, Budapest et Belgrade — ce qu'aucun autre fleuve au monde ne fait. Il relie l'Europe centrale à la mer Noire et a servi d'axe de circulation et de limite d'empire depuis l'Antiquité.

Aux latitudes extrêmes, la Finlande est traversée par le cercle polaire arctique, comme la Suède et la Norvège. À l'autre bout, les Pays-Bas ont inventé le polder : une terre gagnée sur la mer, asséchée et protégée par des digues. Un quart du pays se situe sous le niveau de la mer, ce qui en fait le territoire européen le plus directement exposé à l'élévation du niveau marin.`],
  ],

  "geo2-asie-geographie": [
    ["Les extrêmes", `L'Asie réunit à la fois le point le plus haut et le point émergé le plus bas de la planète : l'Everest à près de huit mille neuf cents mètres, et les rives de la mer Morte à plus de quatre cents mètres sous le niveau des mers. Aucun autre continent ne présente une telle amplitude.

Le plateau tibétain, surnommé le toit du monde, s'étend sur plus de deux millions de kilomètres carrés à une altitude moyenne supérieure à quatre mille mètres. Il joue un rôle climatique majeur : il détourne la circulation atmosphérique et alimente en eau, par ses glaciers, plusieurs des plus grands fleuves d'Asie — Indus, Gange, Brahmapoutre, Mékong, Yangzi, Fleuve Jaune.`],
    ["Les milieux", `Le désert de Gobi couvre une grande partie de la Mongolie et du nord de la Chine : désert froid, continental, où les températures descendent très bas en hiver. Le Népal est enclavé entre la Chine et l'Inde dans l'Himalaya, et concentre huit des quatorze sommets de plus de huit mille mètres.

La mer Caspienne, plus grande étendue d'eau fermée du monde, sépare l'Europe de l'Asie au sud du Caucase ; son statut juridique — mer ou lac — a fait l'objet d'un contentieux de trente ans entre riverains. Le bassin de la mer d'Aral, plus à l'est, a subi le désastre écologique le plus documenté du siècle, provoqué par le détournement de ses fleuves pour irriguer le coton.`],
    ["Les eaux et les îles", `L'Indonésie est composée de plus de dix-sept mille îles, réparties sur cinq mille kilomètres d'est en ouest — un État-archipel dont la seule administration constitue un défi. Le détroit de Corée sépare la péninsule coréenne du Japon.

La ligne de mousson en Asie du Sud désigne la limite qu'atteignent les pluies de mousson : sa position et sa date d'arrivée varient fortement d'une année à l'autre, et de cette variabilité dépendent les récoltes de centaines de millions de personnes. Un retard de deux semaines ou un déficit de vingt pour cent suffisent à provoquer une crise alimentaire.`],
    ["Les hommes", `La mégalopole du Tokaido s'étend le long de la côte pacifique du Japon, de Tokyo à Osaka : plusieurs dizaines de millions d'habitants sur une bande étroite coincée entre montagne et mer, reliée par le premier train à grande vitesse du monde.

Sur le plan démographique, l'Asie connaît des trajectoires opposées : le Japon et la Corée du Sud vieillissent et voient leur population décliner, tandis que le Pakistan figure parmi les grands pays à la plus forte croissance récente. L'Inde est devenue en 2023 le pays le plus peuplé du monde, dépassant la Chine dont la population a commencé à décroître.`],
  ],
  "geo2-afrique-geographie": [
    ["Un continent qu'on sous-estime", `L'Afrique est trois fois plus vaste que l'Europe, ce que les cartes usuelles masquent. La projection de Mercator, qui conserve les angles au prix des surfaces, y étire les hautes latitudes : le Groenland y paraît aussi grand que l'Afrique alors qu'il est quatorze fois plus petit. Cette déformation, purement mathématique, a durablement faussé les représentations mentales.

Le continent porte le plus vaste désert chaud du monde, le Sahara, qui couvre à lui seul une surface comparable à celle des États-Unis. Au sud s'étend le Sahel, bande semi-aride de transition entre le désert et les savanes, exposée à une variabilité pluviométrique extrême et à une forte pression démographique.`],
    ["Les grandes structures", `Le grand rift traverse l'Afrique de l'Est du nord au sud sur plusieurs milliers de kilomètres : c'est une zone où la croûte terrestre s'étire et se fracture, jalonnée de volcans et de lacs profonds. À terme géologique, elle séparera une partie de l'Afrique orientale du reste du continent.

Le lac Victoria est le plus vaste lac d'Afrique en superficie et l'un des plus grands du monde. Le lac Tchad offre à l'inverse un cas d'école de dégradation : il a perdu la majeure partie de sa surface depuis les années 1960, sous l'effet combiné de la sécheresse et des prélèvements pour l'irrigation, avec des conséquences majeures sur les populations riveraines de quatre pays.`],
    ["L'eau et les villes", `Le Niger décrit une grande boucle vers le nord, jusqu'aux abords du Sahara, avant de redescendre vers le golfe de Guinée — trajectoire déroutante qui s'explique par la capture de deux anciens fleuves distincts.

Le Nigeria est le pays africain le plus peuplé, avec plus de deux cents millions d'habitants. La ville la plus peuplée du continent est Le Caire ou Lagos selon les définitions retenues — agglomération, aire urbaine ou limites administratives — ce qui illustre la difficulté des comparaisons urbaines internationales. La corne de l'Afrique présente enfin une singularité climatique : une aridité marquée malgré sa position équatoriale, due à la configuration des vents et des reliefs.`],
    ["Réparer", `La grande muraille verte africaine est un projet de restauration des terres à travers le Sahel, lancé en 2007 par l'Union africaine : il ne s'agit plus, comme dans la version initiale, de planter une bande d'arbres continue de l'Atlantique à la mer Rouge, mais d'une mosaïque d'actions de reforestation, d'agroforesterie et de gestion des sols.

Son avancement est très en retard sur les objectifs annoncés, pour des raisons de financement, de coordination entre onze pays et d'instabilité sécuritaire dans plusieurs zones concernées. Les réussites documentées viennent souvent d'initiatives locales antérieures au programme, fondées sur la régénération naturelle assistée plutôt que sur la plantation.`],
  ],

  "geo2-ameriques-geographie": [
    ["Quinze mille kilomètres", `Le continent américain s'étend sur plus de quinze mille kilomètres du nord au sud, du cercle polaire arctique au cap Horn : il traverse toutes les zones climatiques de la planète, ce qu'aucun autre continent ne fait dans cette continuité.

Deux sous-continents sont reliés par l'isthme de Panama, étroit passage formé il y a environ trois millions d'années. Sa fermeture a eu des conséquences considérables : elle a séparé deux océans, modifié les courants marins et le climat mondial, et permis un immense échange d'espèces entre les deux Amériques, jusque-là isolées.`],
    ["L'Amérique du Nord", `Les montagnes Rocheuses parcourent l'ouest de l'Amérique du Nord et constituent la ligne de partage des eaux du continent. À l'est s'étendent les Grandes Plaines, immense plaine céréalière traversant le centre des États-Unis, dont la mise en culture au XIXe siècle a provoqué dans les années 1930 les tempêtes de poussière du Dust Bowl.

Le système Mississippi-Missouri est le plus long fleuve du continent, et draine une grande part du territoire américain. Les Grands Lacs forment la plus grande réserve d'eau douce de surface d'Amérique du Nord, partagée entre les États-Unis et le Canada, et ont servi d'axe majeur à l'industrialisation des deux pays.`],
    ["L'Amérique du Sud", `Le désert d'Atacama, au Chili, est le plus aride du monde : certaines stations n'y ont jamais enregistré de précipitations mesurables, en raison d'une double barrière — l'anticyclone du Pacifique et le courant froid de Humboldt d'un côté, la cordillère de l'autre.

Le plateau brésilien occupe une grande partie du Brésil et porte l'essentiel de sa population et de ses villes ; la pampa argentine, plaine herbeuse fertile, constitue le cœur agricole du pays et la base de son économie d'exportation. Au sud, le détroit de Magellan sépare le continent de la Terre de Feu : longtemps unique passage maritime avant le canal de Panama, il reste l'une des routes les plus difficiles du monde.`],
    ["Un périmètre administratif", `L'Amazonie légale est un découpage administratif brésilien qui couvre plus de la moitié du territoire national : il a été créé pour appliquer des politiques spécifiques de développement et de protection, et ne correspond pas exactement à l'étendue de la forêt.

Cette distinction a des conséquences pratiques : les chiffres de déforestation publiés portent sur ce périmètre, qui inclut des zones de savane et des régions déjà largement défrichées. Les comparaisons internationales exigent donc de savoir de quel périmètre on parle — Amazonie légale brésilienne, bassin amazonien complet réparti sur neuf pays, ou couvert forestier mesuré par satellite.`],
  ],

  "geo2-relief-france": [
    ["Trois âges de montagnes", `Le relief français se lit comme un empilement d'époques. Les massifs anciens — Massif central, Massif armoricain, Vosges, Ardennes — datent de l'orogenèse hercynienne, il y a plus de trois cents millions d'années : ils ont été de hautes chaînes, puis l'érosion les a rabotés. Ils se reconnaissent à leurs sommets arrondis, leurs plateaux et leurs roches cristallines.

Les chaînes récentes — Alpes et Pyrénées — sont nées de la collision entre l'Afrique et l'Europe au Tertiaire, il y a quelques dizaines de millions d'années seulement. Trop jeunes pour avoir été usées, elles culminent haut et présentent des versants abrupts, des crêtes découpées et des vallées glaciaires en auge. Les Pyrénées séparent la France de l'Espagne sur près de quatre cents kilomètres.`,
      { type: "tableau", titre: "Reconnaître un massif à son allure", colonnes: ["Type", "Âge de la formation", "Silhouette", "Exemples"], lignes: [
        ["Massif ancien", "Ère primaire (hercynien)", "Sommets ronds, plateaux, roches cristallines", "Massif central, Armoricain, Vosges"],
        ["Chaîne récente", "Ère tertiaire (alpin)", "Sommets aigus, forte dénivelée, glaciers", "Alpes, Pyrénées"],
        ["Chaîne plissée moyenne", "Tertiaire, calcaire", "Plis réguliers en lanières parallèles", "Jura"],
        ["Bassin sédimentaire", "Comblement continu depuis le Secondaire", "Plaines et plateaux étagés", "Bassin parisien, Bassin aquitain"],
      ] }],
    ["Entre les massifs, les bassins", `Un bassin sédimentaire est une vaste dépression comblée par des couches déposées au fil des ères géologiques. Le Bassin parisien en est l'exemple le plus lisible : les couches y sont disposées en assiettes emboîtées, les plus récentes au centre. Comme elles n'ont pas toutes la même résistance, l'érosion dégage des reliefs dissymétriques appelés cuestas — un front abrupt tourné vers l'extérieur, un revers en pente douce. La côte de Meuse et la côte d'Île-de-France en sont les exemples classiques.

Le Jura, lui, appartient à un troisième type : une chaîne de plis calcaires réguliers, formée en même temps que les Alpes mais bien moins soulevée. Ses crêtes parallèles et ses combles internes lui donnent une géométrie presque dessinée.`],
    ["Le volcanisme endormi", `Le Massif central occupe le centre de la France et porte le plus grand champ volcanique du pays. La chaîne des Puys aligne quelque quatre-vingts édifices sur une trentaine de kilomètres, dominés par le puy de Dôme. Le volcanisme y est récent à l'échelle géologique : certaines éruptions remontent à moins de dix mille ans, ce qui range ces volcans parmi les endormis plutôt que les éteints.

Un détail illustre la difficulté de la mesure en montagne : l'altitude officielle du mont Blanc varie d'une campagne à l'autre. Ce n'est pas la roche qui bouge, mais l'épaisseur de la calotte glaciaire qui coiffe le sommet ; les relevés au GPS différentiel, réalisés tous les deux ans, donnent des valeurs oscillant de plus d'un mètre.`,
      { image: "mont-blanc", legende: "Le mont Blanc : le sommet rocheux est fixe, la neige qui le coiffe ne l'est pas.", alt: "Le massif du Mont-Blanc enneigé" }],
    ["L'eau descend", `Le réseau hydrographique découle directement de cette architecture. La Loire naît au mont Gerbier-de-Jonc, en Ardèche, sur le flanc est du Massif central, puis part vers le nord avant de tourner brutalement à l'ouest : c'est le plus long fleuve de France.

Le Rhône, lui, détient le débit le plus élevé. La différence tient à l'alimentation : la Loire dépend surtout des pluies océaniques, capricieuses, quand le Rhône reçoit la fonte des neiges et des glaciers alpins, plus régulière et bien plus abondante. Longueur et puissance sont deux choses distinctes — une confusion fréquente que la géographie physique tranche sans ambiguïté.`],
  ],

  "geo2-oceanie-poles": [
    ["Deux pôles opposés", `La symétrie apparente des pôles est trompeuse. L'Arctique est un océan gelé entouré de continents ; l'Antarctique est un continent entouré d'océans. Toute la suite en découle.

Une banquise arctique flotte : sa fonte ne fait pas monter le niveau des mers, puisqu'elle déplace déjà son propre poids d'eau. L'Antarctique, lui, porte une calotte posée sur de la roche, épaisse de plusieurs kilomètres et contenant environ quatre-vingt-dix pour cent des glaces mondiales — soit, si elle fondait entièrement, plusieurs dizaines de mètres de hausse du niveau marin. C'est la raison pour laquelle les climatologues surveillent en priorité les glaciers de l'Antarctique occidental.`,
      { image: "geo-antarctique-calotte", legende: "La calotte antarctique repose sur un continent : c'est ce qui rend sa fonte irréversible à échelle humaine.", alt: "Vue de la calotte glaciaire antarctique" }],
    ["Habiter le froid", `L'Arctique est habité depuis des millénaires. Les Inuits occupent l'Arctique nord-américain, du Groenland à l'Alaska, avec une continuité culturelle et linguistique remarquable sur plusieurs milliers de kilomètres. L'Antarctique, à l'inverse, n'a jamais eu de population autochtone : il n'accueille que des bases scientifiques, sous un régime international qui gèle les revendications territoriales.

Le réchauffement rouvre un vieux rêve de navigateurs : le passage du Nord-Ouest, route maritime arctique reliant l'Atlantique au Pacifique par le nord du Canada. Longtemps mortel — l'expédition Franklin y disparut au XIXe siècle —, il devient praticable quelques semaines par an, ce qui soulève des questions de souveraineté, d'environnement et de sécurité maritime encore largement ouvertes.`],
    ["Le Pacifique en trois noms", `L'Océanie se divise traditionnellement en trois ensembles culturels : la Mélanésie, la Micronésie et la Polynésie — respectivement les « îles noires », les « petites îles » et les « nombreuses îles ». Ce découpage, forgé par un navigateur français au XIXe siècle, mêle critères géographiques et jugements sur les populations ; il reste employé, mais il est aujourd'hui discuté.

L'Australie est de loin le plus grand pays d'Océanie. Elle est aussi le territoire habité en continuité depuis le plus longtemps : les Aborigènes y vivent depuis au moins soixante-cinq mille ans, ce qui en fait la plus ancienne culture vivante documentée. Sa côte nord-est est longée par la Grande Barrière de corail, plus vaste structure d'origine biologique de la planète, visible depuis l'orbite.`],
    ["Des îles à hauteur d'eau", `Un atoll est un anneau corallien entourant un lagon. Sa formation, comprise dès Darwin, tient en trois temps : un récif se développe autour d'une île volcanique, l'île s'affaisse lentement, le corail continue de croître vers la lumière — jusqu'à ce qu'il ne reste qu'une couronne et une lagune centrale.

C'est une architecture magnifique et fragile : un atoll culmine à quelques mètres au-dessus du niveau de la mer. Tuvalu, État polynésien entièrement bâti sur ce modèle, figure parmi les pays les plus directement menacés par la montée des eaux — non par une submersion spectaculaire, mais par la salinisation des nappes, les submersions de tempête et la perte des terres cultivables, qui rendent une île inhabitable bien avant qu'elle ne disparaisse.`],
  ],

  "geo2-cartographie": [
    ["Le problème de départ", `On ne peut pas aplatir une sphère sans la déformer : c'est un théorème, démontré par Gauss, et non une limite technique qu'un progrès viendrait lever. Toute carte plane ment donc nécessairement, et la seule question est de savoir sur quoi.

Une projection choisit ce qu'elle conserve. Une projection conforme préserve les angles, donc les formes locales, au prix des surfaces. Une projection équivalente préserve les rapports de surface, au prix des formes. Aucune ne conserve simultanément les formes, les surfaces et les distances. Choisir une projection, c'est donc décider ce que l'on accepte de fausser — un arbitrage cartographique, parfois politique.`],
    ["Mercator et ses conséquences", `La projection de Mercator, publiée en 1569, est conforme : une route à cap constant y est une ligne droite, ce qui en fit pendant quatre siècles l'outil de la navigation. Sa contrepartie est un étirement croissant vers les pôles. Le Groenland y est le cas le plus spectaculaire : il paraît aussi vaste que l'Afrique alors qu'il est quatorze fois plus petit.

Comme cette projection a longtemps illustré les manuels scolaires, les atlas et les murs des classes, elle a durablement gonflé l'Europe et l'Amérique du Nord dans les représentations mentales, et rétréci les régions équatoriales. Les projections équivalentes proposées depuis en réponse déforment franchement les formes, ce qui les rend impopulaires : le débat n'est pas clos.`,
      { image: "geo-projection-mercator", legende: "Sur Mercator, le Groenland égale l'Afrique. En surface réelle, il en fait un quatorzième.", alt: "Planisphère en projection de Mercator" }],
    ["Se repérer, se mesurer", `Un point du globe se repère par deux angles. La latitude se compte depuis l'équateur et monte jusqu'à quatre-vingt-dix degrés vers chaque pôle ; la longitude se compte depuis un méridien de référence, fixé à Greenwich par une conférence internationale en 1884 — un choix de convention, non de nature.

L'échelle d'une carte exprime le rapport entre une distance sur la carte et la distance réelle : au 1/25 000, un centimètre vaut deux cent cinquante mètres. Le relief, lui, se rend par des courbes de niveau, lignes joignant les points de même altitude : leur resserrement signale une pente forte, leur écartement un terrain plat. Lire une carte topographique, c'est d'abord lire cet espacement.`],
    ["La carte devient base de données", `Un système d'information géographique est un outil de gestion et d'analyse de données localisées : il superpose des couches — réseau routier, bâti, relief, population, pollution — et permet de les interroger ensemble. La carte cesse d'être une image pour devenir une base de données consultable, ce qui a transformé l'urbanisme, l'épidémiologie et la logistique.

Le positionnement par satellite repose sur un principe simple : chaque satellite émet un signal horodaté, le récepteur mesure le temps de trajet, en déduit une distance, et croise quatre mesures pour obtenir position et heure. Le GPS américain a longtemps été seul opérationnel ; l'Union européenne a déployé Galileo pour ne pas dépendre d'un système militaire étranger, aux côtés du russe GLONASS et du chinois BeiDou.`],
  ],

  "geo3-departements-france": [
    ["Un découpage de 1790", `Les départements naissent en 1790 d'une volonté de table rase : remplacer les provinces d'Ancien Régime, d'étendue et de statuts très inégaux, par des circonscriptions comparables où l'on puisse rejoindre le chef-lieu dans la journée à cheval. Leurs noms sont pris à la géographie physique — fleuves, montagnes, côtes — précisément pour effacer les héritages féodaux.

De là vient leur numérotation, qui déroute au premier abord : elle suit l'ordre alphabétique des noms d'origine. C'est pourquoi l'Ain porte le numéro un et l'Yonne le numéro quatre-vingt-neuf. Les renommages ultérieurs — la Seine-Inférieure devenue Seine-Maritime, les Basses-Alpes devenues Alpes-de-Haute-Provence — ont brouillé la logique sans que les numéros ne bougent.`],
    ["Un découpage retouché", `La carte n'a pas été figée pour autant. En 1964, les départements de la Seine et de la Seine-et-Oise, devenus ingérables avec la croissance de l'agglomération parisienne, sont divisés : les départements d'Île-de-France actuels en sortent. En 1976, la Corse est scindée en Corse-du-Sud et Haute-Corse. En 2011, Mayotte devient le cent unième département, à l'issue d'un référendum local.

La France compte donc aujourd'hui cent un départements, dont cinq outre-mer. La Gironde est le plus vaste des départements métropolitains ; le Nord, le plus peuplé, approche les deux millions six cent mille habitants — davantage que plusieurs États membres de l'Union européenne.`,
      { image: "carte-france-regions", legende: "Le maillage départemental, redécoupé en régions successives, reste la trame administrative de base.", alt: "Carte administrative de la France" }],
    ["Curiosités de frontières", `Aucun département français n'est entièrement enclavé dans un autre, mais le Vaucluse possède une enclave : le canton de Valréas, séparé du reste du département et entouré par la Drôme. Cette anomalie remonte au Comtat Venaissin, territoire pontifical rattaché à la France en 1791 dont on a conservé les contours.

D'autres irrégularités racontent la même histoire de compromis : des limites qui suivent d'anciens diocèses plutôt que des cours d'eau, des chefs-lieux choisis par arbitrage entre villes rivales, des communes coupées en deux. Le découpage rationnel de 1790 s'est heurté partout au terrain, et la carte porte encore les cicatrices de ces négociations.`],
    ["À quoi sert un département", `La principale compétence du département est l'action sociale : revenu de solidarité active, allocation personnalisée d'autonomie pour les personnes âgées, prestation de compensation du handicap, protection de l'enfance. Ce bloc représente l'essentiel de son budget de fonctionnement.

S'y ajoutent la gestion des collèges, l'entretien d'une grande part du réseau routier et le service départemental d'incendie et de secours. Les lois de décentralisation successives, et la montée en puissance des régions comme des intercommunalités, ont plusieurs fois relancé le débat sur la suppression de l'échelon. Il a chaque fois survécu, porté par son ancrage électoral et par la difficulté pratique de transférer ces missions ailleurs.`],
  ],

  "geo3-littoraux": [
    ["Une ligne qui bouge", `Un littoral est la zone de contact entre la terre et la mer — non une ligne, mais une bande où alternent submersion et émersion. Le trait de côte en est la limite conventionnelle, et il n'est jamais figé : il recule ici, avance là, au rythme des tempêtes, des apports sédimentaires et des marées.

L'énergie qui l'entretient vient de la houle. Là où elle frappe une côte rocheuse, elle sape le pied de la paroi jusqu'à l'effondrement : une falaise vive est une falaise activement érodée par la mer, reconnaissable à son profil abrupt et à ses éboulis frais. Les falaises crayeuses du pays de Caux reculent ainsi de plusieurs dizaines de centimètres par an en moyenne.`],
    ["Le sable en transit", `Sur les côtes meubles, le mécanisme central est la dérive littorale : les vagues abordant la plage en biais transportent les sédiments parallèlement à la côte, par une succession de trajets en dents de scie. Une plage n'est donc pas un stock immobile mais un flux — du sable arrive d'un côté, repart de l'autre.

Toute construction qui intercepte ce flux — épi, digue, port — engraisse l'amont et affame l'aval, déplaçant le problème plutôt que le résolvant. En arrière, un cordon dunaire protège l'arrière-pays : réservoir de sable mobilisable pendant les tempêtes, il n'assure ce rôle que si sa végétation fixatrice reste intacte, ce que le piétinement suffit à compromettre.`],
    ["Là où l'eau douce rencontre l'eau salée", `Un estuaire est une embouchure élargie où la marée pénètre dans le fleuve : eaux douce et salée s'y mélangent en un gradient mobile qui se déplace deux fois par jour. Cette instabilité en fait des milieux d'une productivité biologique exceptionnelle, nurseries pour de nombreuses espèces marines.

Une lagune littorale relève d'une autre logique : c'est une étendue d'eau séparée de la mer par un cordon, communiquant avec elle par des passes étroites. Les étangs du Languedoc en offrent la série la plus complète. Leur salinité, leur température et leur oxygénation varient fortement, ce qui y sélectionne une faune spécialisée — et les rend très sensibles aux apports de nutriments venus des bassins versants.`],
    ["Protéger un espace convoité", `La pression humaine sur les littoraux est sans commune mesure avec leur surface. La loi Littoral de 1986 encadre l'urbanisation des communes côtières : elle interdit en principe les constructions dans une bande de cent mètres à partir du rivage hors espaces déjà urbanisés, et impose l'extension en continuité de l'existant. Contestée, contournée, elle a néanmoins évité le mitage complet des côtes françaises.

Le Conservatoire du littoral suit une voie différente : établissement public, il acquiert des terrains côtiers pour les soustraire définitivement au marché et les confie en gestion aux collectivités. La montée du niveau marin, qui accélère l'érosion et la submersion des zones basses, ajoute aujourd'hui une question que ni l'une ni l'autre n'avait anticipée : celle du repli, c'est-à-dire du déplacement organisé des activités et des habitations vers l'intérieur.`],
  ],

  "geo3-glaciers-cryosphere": [
    ["Ce que recouvre le mot cryosphère", `La cryosphère désigne l'ensemble des eaux gelées de la planète : calottes polaires, glaciers de montagne, banquise, neige saisonnière, permafrost. Les distinguer n'est pas un raffinement de vocabulaire, car leurs effets diffèrent radicalement.

La banquise flotte. Elle déplace déjà son propre volume d'eau, si bien que sa fonte n'élève pas le niveau de la mer — c'est le principe d'Archimède, vérifiable avec un glaçon dans un verre. Les glaciers et les calottes, eux, reposent sur de la roche : leur fonte ajoute de l'eau à l'océan. La calotte antarctique, la plus vaste du monde, constitue à ce titre le premier enjeu, devant celle du Groenland.`],
    ["Comment vit un glacier", `Un glacier de vallée s'écoule dans une vallée depuis un cirque d'accumulation, à la manière d'un fleuve très lent. En amont, la neige s'accumule et se transforme en glace ; en aval, elle fond. Entre les deux passe la ligne d'équilibre glaciaire, altitude où accumulation et fonte se compensent exactement.

Cette ligne est le meilleur indicateur de santé d'un glacier. Si elle monte, la zone d'accumulation se réduit, le bilan devient négatif et le front recule. Le recul général observé aujourd'hui sur les glaciers de montagne n'a pas pour seul effet un paysage modifié : il change le régime des cours d'eau alimentés par la fonte, avec une phase transitoire d'abondance suivie d'une baisse durable des débits d'été — précisément lorsque l'irrigation et le refroidissement industriel en ont le plus besoin.`],
    ["Les traces laissées", `Un glacier travaille comme une lime chargée de débris. Ce qu'il transporte puis abandonne forme une moraine, dépôt de blocs et de sédiments non triés reconnaissable à son désordre — un cours d'eau, lui, classe toujours ses dépôts par taille.

Ce qu'il creuse persiste bien après sa disparition. Une vallée glaciaire envahie par la mer donne un fjord, profil en auge aux parois verticales et à la profondeur souvent supérieure à celle du plateau continental voisin. Une cuvette surcreusée dans le fond de vallée, une fois remplie, donne un lac de surcreusement : les grands lacs alpins et les lacs finlandais en sont issus. Les paysages du nord de l'Europe sont ainsi la signature d'une glaciation achevée depuis dix mille ans.`],
    ["Le sol gelé qui se réveille", `Le permafrost est un sol gelé en permanence depuis au moins deux années consécutives. Il couvre environ un quart des terres émergées de l'hémisphère nord, en Sibérie, au Canada et en Alaska.

Son dégel pose deux problèmes distincts. D'abord une question de génie civil : bâtiments, pipelines, routes et pistes d'aéroport y sont fondés sur un sol dont la portance disparaît en fondant, et des villes entières y font face. Ensuite une question climatique : ces sols contiennent d'énormes quantités de matière organique gelée, dont la décomposition libère du dioxyde de carbone et du méthane. Ce dernier est un gaz à effet de serre bien plus puissant que le CO₂ à court terme, ce qui fait du permafrost l'une des rétroactions les plus surveillées — et les plus difficiles à quantifier — du système climatique.`],
  ],

  "geo3-deserts": [
    ["Sec, pas forcément chaud", `Un désert se définit en géographie par une aridité marquée, c'est-à-dire des précipitations très faibles — usuellement moins de deux cents millimètres par an — et une évaporation potentielle très supérieure aux apports. La température n'entre pas dans la définition.

D'où un résultat qui surprend : le plus grand désert du monde, toutes catégories confondues, est l'Antarctique. Il y tombe l'équivalent de quelques dizaines de millimètres d'eau par an au cœur du continent, moins qu'au Sahara. La glace qui le couvre n'est pas le produit de fortes chutes de neige mais de leur accumulation sans fonte pendant des centaines de milliers d'années.`],
    ["Pourquoi les déserts sont là où ils sont", `Trois mécanismes principaux se combinent. Les grandes ceintures désertiques des tropiques — Sahara, Arabie, Australie centrale — se situent sous les zones de subsidence de la circulation atmosphérique, où l'air descend, se réchauffe et assèche. Un désert d'abri, lui, résulte d'une barrière montagneuse bloquant les pluies : l'air se délestant de son humidité au vent de la chaîne redescend sec sous le vent. Un courant marin froid, enfin, refroidit l'air en surface et empêche la convection.

Le désert d'Atacama cumule ces contraintes : la cordillère des Andes d'un côté, le courant froid de Humboldt et l'anticyclone du Pacifique de l'autre. Certaines de ses stations n'ont jamais enregistré de précipitation mesurable, ce qui en fait le lieu le plus aride de la planète et un terrain d'essai pour les instruments destinés à Mars.`],
    ["Lire un paysage désertique", `Le sable ne couvre qu'une fraction minoritaire des déserts chauds. Un erg est une étendue de dunes de sable ; un reg, bien plus fréquent, est une surface couverte de graviers et de cailloux, le vent ayant emporté les particules fines. S'y ajoutent des hamadas, plateaux rocheux nus.

L'eau n'est pas absente, seulement rare et brutale. Un oued est un cours d'eau temporaire de région aride : à sec l'essentiel de l'année, il peut charrier une crue violente après un orage, et ses lits offrent des pièges mortels à qui y campe. Ces écoulements épisodiques, en rechargeant les nappes, rendent possible l'implantation humaine.`],
    ["Vivre au désert", `Une oasis est un espace cultivé rendu possible par un accès à l'eau en milieu aride. Sa structure est étagée : palmiers dattiers en haut, arbres fruitiers en dessous, cultures maraîchères au sol — trois niveaux qui se protègent mutuellement de l'évaporation.

L'alimentation en eau tient parfois du chef-d'œuvre. Une foggara — qanat en Iran, khettara au Maroc — est une galerie souterraine drainant l'eau d'une nappe vers l'oasis par simple gravité, sur des kilomètres, avec une pente d'une précision extrême et des puits d'aération réguliers. Creusées et entretenues collectivement pendant des siècles, beaucoup ont été abandonnées au profit du pompage motorisé, plus commode mais qui épuise les nappes. Au Sahel, la grande muraille verte est un programme de restauration des terres réparti sur plusieurs pays africains, destiné à freiner cette dégradation par l'agroforesterie et la régénération des sols.`],
  ],

  "geo3-volcanisme": [
    ["Tout tient à la viscosité", `Le type d'éruption dépend principalement de la viscosité du magma et de sa teneur en gaz. Un magma pauvre en silice est fluide : les gaz s'en échappent facilement, la lave s'écoule. Un magma riche en silice est visqueux : les gaz restent piégés sous pression jusqu'à la rupture.

De là deux familles. Un volcan effusif émet des coulées de lave fluide, construit des édifices larges et peu pentus, et tue rarement — on peut souvent marcher plus vite que sa coulée. Un volcan explosif, à magma visqueux, produit des nuées ardentes et des panaches de cendres ; ses édifices sont raides et ses éruptions meurtrières. La Réunion et la Sicile relèvent du premier cas, les Antilles et l'Indonésie du second.`],
    ["Les formes et les dangers", `Une caldeira est une vaste dépression formée par l'effondrement d'un édifice volcanique, lorsque la chambre magmatique se vide plus vite qu'elle ne se remplit. Elle peut atteindre plusieurs dizaines de kilomètres et témoigne d'éruptions sans équivalent historique.

Le danger le plus meurtrier n'est pourtant pas la lave. Un lahar est une coulée de boue volcanique, mélange de cendres et d'eau — pluie, lac de cratère ou fonte d'un glacier sommital — qui dévale les vallées à grande vitesse et se comporte comme du béton liquide. C'est un lahar qui a fait plus de vingt mille morts à Armero, en Colombie, en 1985, à cinquante kilomètres d'un volcan pourtant peu explosif.`],
    ["Mesurer, se souvenir", `L'indice d'explosivité volcanique est une échelle mesurant la puissance d'une éruption d'après le volume de matériaux émis et la hauteur du panache. Comme l'échelle des magnitudes sismiques, elle est logarithmique : chaque degré correspond à un volume dix fois supérieur.

Deux éruptions rappellent la portée planétaire du phénomène. Le Tambora, en Indonésie, entre en éruption en 1815 et injecte assez d'aérosols dans la stratosphère pour provoquer l'année suivante une « année sans été » en Europe et en Amérique du Nord : récoltes perdues, famines, migrations. Bien plus modeste, l'Eyjafjallajökull islandais paralyse en 2010 le trafic aérien européen pendant plusieurs jours, non par sa violence mais parce que ses cendres fines endommagent les réacteurs — démonstration que la vulnérabilité d'une société compte autant que l'intensité de l'aléa.`],
    ["Surveiller, et cohabiter", `On surveille un volcan actif par trois familles d'indices : la sismicité, qui trahit la remontée du magma en fracturant la roche ; la déformation du sol, mesurée au GPS et par interférométrie radar, qui traduit le gonflement de l'édifice ; les émissions de gaz, dont la composition change à l'approche d'une éruption. Croisés, ces signaux permettent des évacuations réussies — comme au Pinatubo en 1991, où des dizaines de milliers de vies ont été sauvées.

Reste que des centaines de millions de personnes vivent à proximité de volcans actifs, et pas par imprévoyance. Le volcanisme apporte des sols volcaniques d'une fertilité exceptionnelle, de l'énergie géothermique et des ressources minérales concentrées. L'installation en zone à risque est un arbitrage, renouvelé à chaque génération entre un danger rare et un avantage quotidien.`],
  ],

  "geo3-seismes": [
    ["Une rupture, pas une secousse", `Un séisme est une libération brutale d'énergie accumulée le long d'une faille. Les plaques se déplacent de quelques centimètres par an ; là où elles frottent, le mouvement se bloque, la roche se déforme élastiquement, et la contrainte s'accumule parfois pendant des siècles avant que la faille ne cède d'un coup.

Deux points se distinguent : le foyer, où la rupture s'amorce en profondeur, et l'épicentre, situé à la verticale du foyer en surface. Cette distinction n'est pas formelle — un séisme profond de forte magnitude fait souvent moins de dégâts qu'un séisme superficiel plus faible, parce que l'énergie se dissipe en chemin. Après la rupture principale, la faille se réajuste par des répliques, secousses ultérieures sur le même segment, parfois destructrices pour des bâtiments déjà fragilisés.`],
    ["Magnitude et intensité", `Deux échelles coexistent, et les confondre fausse toute lecture. Une échelle de magnitude mesure l'énergie libérée par le séisme : elle donne un nombre unique, propre à l'événement, indépendant du lieu d'observation. Une échelle d'intensité comme Mercalli ou l'échelle macrosismique européenne mesure les effets ressentis et les dégâts en un lieu donné : elle donne une valeur différente pour chaque commune.

Un même séisme a donc une magnitude et autant d'intensités que de points d'observation. L'intensité dépend de la distance, de la nature du sol et de la qualité du bâti. La liquéfaction illustre ce rôle du terrain : un sol saturé d'eau perd sa cohésion sous l'effet des secousses, se comporte transitoirement comme un liquide, et les bâtiments s'y enfoncent ou basculent intacts.`,
      { type: "tableau", titre: "Deux mesures qu'on confond souvent", colonnes: ["", "Magnitude", "Intensité"], lignes: [
        ["Ce qu'elle mesure", "L'énergie libérée à la source", "Les effets ressentis en un lieu"],
        ["Combien de valeurs", "Une seule par séisme", "Une par point d'observation"],
        ["Comment on l'obtient", "Enregistrements sismographiques", "Observation des dégâts, enquêtes"],
        ["Échelles usuelles", "Magnitude de moment (Mw)", "Mercalli modifiée, EMS-98"],
      ] }],
    ["Où, et pourquoi pas quand", `La majorité des séismes se produisent aux limites de plaques tectoniques : ceinture de feu du Pacifique, chaîne alpine-himalayenne, dorsales océaniques. La carte des épicentres dessine si nettement ces frontières qu'elle a servi, dans les années 1960, à confirmer la tectonique des plaques.

On ne sait pas prédire un séisme, et rien n'indique qu'on le saura : aucun précurseur fiable n'a été identifié malgré des décennies de recherches. Ce qu'on sait faire est différent — évaluer un aléa probabiliste, c'est-à-dire la probabilité qu'une secousse d'une certaine intensité survienne en un lieu sur une période donnée. Cette information est suffisante pour dimensionner des règles de construction, mais pas pour évacuer une ville.`],
    ["Gagner des secondes, ou des vies", `Un système d'alerte précoce exploite le décalage entre les ondes rapides et peu destructrices, dites P, et les ondes lentes et dévastatrices, dites S. Détectant les premières près de l'épicentre, il transmet l'alerte par voie électronique — plus rapide que les ondes sismiques — et offre de quelques secondes à une minute selon la distance. C'est assez pour arrêter des trains, fermer des vannes de gaz et couper des chaînes de production ; le Japon et le Mexique en sont équipés.

Mais la meilleure protection reste la construction parasismique : structures capables de se déformer sans rompre, murs porteurs correctement chaînés, fondations adaptées au sol. La comparaison est cruelle et constante — à magnitude comparable, un séisme fait quelques dizaines de victimes dans un pays au bâti réglementé et des dizaines de milliers ailleurs. Le séisme ne tue presque jamais directement ; ce sont les bâtiments qui tuent.`],
  ],

  "geo3-energie-territoires": [
    ["L'énergie prend de la place", `Toute installation énergétique occupe de l'espace, et cette contrainte dessine la carte. Les centrales nucléaires françaises sont implantées le long des fleuves ou du littoral, car elles ont besoin d'eau pour évacuer la chaleur du circuit de refroidissement : Loire, Rhône, Garonne, Rhin, Manche. Cette dépendance devient visible lors des canicules, quand les débits baissent et que les rejets thermiques doivent être limités.

L'éolien terrestre suit une autre logique : il privilégie les départements du nord et du nord-est, ventés, plats et peu boisés, où les couloirs de vent sont réguliers. L'éolien en mer, lui, implante des machines au large, où le vent est plus fort et plus constant, au prix d'un raccordement électrique coûteux et de conflits avec la pêche et la navigation.`],
    ["Des ressources locales", `Plusieurs filières exploitent des caractéristiques propres à un site. L'énergie marémotrice utilise le marnage, c'est-à-dire l'écart entre marée haute et marée basse : elle n'a de sens que là où il est exceptionnel, comme dans l'estuaire de la Rance. L'énergie géothermique exploite la chaleur du sous-sol, pour chauffer des réseaux urbains en bassin sédimentaire ou produire de l'électricité en contexte volcanique. La biomasse énergie est produite à partir de matière organique — bois, résidus agricoles, déchets —, ce qui la lie à la ressource forestière ou agricole disponible dans un rayon économiquement transportable.

Aucune n'est délocalisable : contrairement à une usine, une centrale se construit là où la ressource se trouve, ce qui donne à ces filières un ancrage territorial très fort.`],
    ["Transporter et stocker", `Le réseau de transport d'électricité est le réseau à haute et très haute tension reliant les lieux de production aux points de distribution. Il est le maillon dont on ne parle qu'en cas de panne, alors qu'il conditionne tout : sans lui, un parc éolien en mer ne vaut rien, et sa construction soulève autant d'oppositions que celle des centrales.

Le stockage est l'autre verrou, à mesure que les productions variables augmentent. La station de transfert d'énergie par pompage en est aujourd'hui la solution la plus éprouvée : quand l'électricité est abondante, on remonte de l'eau vers un bassin d'altitude ; quand elle manque, on la turbine en redescendant. Le rendement dépasse les trois quarts, mais l'implantation exige deux retenues à des altitudes différentes — ce qui limite fortement les sites disponibles.`],
    ["Qui décide, et contre qui", `L'acceptabilité sociale d'un projet énergétique désigne le degré d'adhésion des populations concernées. Elle n'est pas un supplément de communication : un projet refusé localement se heurte à des recours qui peuvent l'ajourner de dix ans, et cette durée est devenue le principal facteur de retard des programmes énergétiques en Europe.

Ce que ces oppositions expriment est souvent un conflit d'usage du sol : une concurrence entre production énergétique et autres usages du territoire — agriculture, paysage, tourisme, biodiversité, pêche. Le photovoltaïque au sol contre les terres cultivables, l'éolien contre les vues et les oiseaux, la biomasse contre le bois d'œuvre : chaque filière a le sien. Les dispositifs de participation financière des riverains et des collectivités visent à transformer un projet subi en projet partagé ; les résultats sont réels mais inégaux.`],
  ],
};
