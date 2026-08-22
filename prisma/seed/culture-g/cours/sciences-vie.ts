/** Sciences de la vie et de la Terre, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_SCIENCES_VIE: LotCours = {
  "sv-adn-heredite": [
    ["La molécule", `En 1953, James Watson et Francis Crick publient la structure en double hélice de l'ADN, à partir notamment des clichés de diffraction de Rosalind Franklin. La molécule n'emploie que quatre bases — adénine, thymine, guanine, cytosine — dont l'appariement deux à deux explique immédiatement comment l'information peut être copiée : chaque brin sert de modèle pour reconstituer l'autre.

Une cellule humaine ordinaire contient quarante-six chromosomes, soit vingt-trois paires. Le génome humain compte environ vingt mille gènes, chiffre bien plus faible que ce qui était attendu avant son séquençage — la complexité tient à la régulation plus qu'au nombre.`],
    ["Gène, allèle, expression", `Un gène est une portion d'ADN ; un allèle est l'une de ses versions. La confusion entre les deux est la plus fréquente en génétique. Un allèle est dit dominant lorsqu'il s'exprime même présent en un seul exemplaire, récessif lorsqu'il ne s'exprime qu'en double.

C'est Gregor Mendel, moine morave, qui établit les lois de l'hérédité au XIXe siècle en croisant des pois : ses résultats, publiés en 1866, resteront ignorés trente-cinq ans. Entre l'ADN et les protéines, l'ARN messager sert d'intermédiaire : il transcrit la séquence du gène et la porte hors du noyau, où elle est traduite en une chaîne d'acides aminés.`],
    ["Modifier et moduler", `Depuis 2012, la technique CRISPR-Cas9 permet de modifier une séquence d'ADN avec une précision et un coût sans précédent : dérivée d'un mécanisme de défense bactérien, elle a valu le prix Nobel de chimie 2020 à Emmanuelle Charpentier et Jennifer Doudna. Elle ouvre des perspectives thérapeutiques et des questions éthiques, notamment sur les modifications transmissibles à la descendance.

L'épigénétique étudie les modifications de l'expression des gènes sans changement de la séquence elle-même : des marques chimiques posées sur l'ADN ou sur les protéines qui l'entourent activent ou éteignent des gènes. Certaines de ces marques sont sensibles à l'environnement et peuvent, dans une mesure encore débattue, se transmettre sur une ou deux générations.`],
  ],

  "sv-immunite": [
    ["Deux lignes de défense", `La première barrière du système immunitaire est physique : la peau et les muqueuses, dont l'intégrité arrête l'essentiel des agresseurs. Vient ensuite l'immunité innée, immédiate et non spécifique, qui réagit de la même façon quel que soit l'intrus.

L'immunité adaptative fonctionne autrement : lente à la première rencontre, elle est spécifique et garde mémoire. Un antigène est une molécule reconnue comme étrangère : c'est lui que le système apprend à identifier. Le lymphocyte B activé se différencie en plasmocyte, usine à anticorps ; le lymphocyte T cytotoxique, lui, détruit directement les cellules infectées.`],
    ["Vacciner", `La vaccination repose sur un principe simple : provoquer une réponse immunitaire mémoire sans provoquer la maladie. L'organisme conserve ensuite des cellules capables de réagir vite lors d'une exposition réelle.

Louis Pasteur met au point le vaccin contre la rage en 1885, en atténuant l'agent infectieux — Edward Jenner avait, un siècle plus tôt, ouvert la voie avec la variole. L'immunité collective désigne la protection indirecte dont bénéficient les non-immunisés lorsqu'une proportion suffisante de la population l'est : la transmission ne trouve plus assez d'hôtes réceptifs. Le seuil dépend de la contagiosité de la maladie.`],
    ["Quand le système se trompe", `Une maladie auto-immune survient lorsque le système immunitaire attaque les propres cellules du corps, faute d'avoir correctement distingué le soi du non-soi : diabète de type 1, sclérose en plaques, polyarthrite rhumatoïde en relèvent.

Une allergie est une réaction excessive à une substance en elle-même inoffensive — pollen, arachide, acarien. Ce n'est pas un défaut de puissance mais un défaut de calibrage. À l'inverse, le VIH détruit précisément les lymphocytes T CD4, cellules chefs d'orchestre de la réponse adaptative : c'est cette destruction ciblée qui explique l'effondrement progressif des défenses et les infections opportunistes.`],
  ],

  "sv-hormones": [
    ["Des messagers du sang", `Une hormone est un messager chimique transporté par le sang, qui agit à distance et à très faible dose sur des cellules porteuses du récepteur correspondant. C'est ce qui la distingue d'un neurotransmetteur, qui agit localement dans une synapse.

L'hypophyse, petite glande située à la base du cerveau, est souvent appelée le chef d'orchestre hormonal : ses sécrétions commandent celles d'autres glandes. La thyroïde produit des hormones qui règlent le métabolisme de base ; leur fabrication exige de l'iode, dont la carence provoque un goitre — d'où l'iodation du sel de table, l'une des mesures de santé publique les plus efficaces du XXe siècle.`],
    ["Sucre, stress, sommeil", `L'insuline, sécrétée par le pancréas, fait baisser la glycémie en faisant entrer le glucose dans les cellules ; le glucagon fait l'inverse. Le diabète résulte d'un défaut de production ou d'une résistance à son action.

L'adrénaline est sécrétée en situation de stress aigu : accélération cardiaque, dilatation des bronches, mobilisation du glucose — la réponse de fuite ou de combat. La mélatonine, produite en l'absence de lumière, régule le rythme veille-sommeil : c'est pourquoi l'exposition aux écrans le soir en retarde la sécrétion. La leptine, enfin, est produite par le tissu adipeux et signale la satiété au cerveau : sa découverte a montré que la graisse n'est pas un tissu inerte mais un organe endocrine.`],
    ["Reproduction et régulation", `L'ocytocine déclenche les contractions de l'accouchement et intervient aussi dans l'éjection du lait et dans les comportements d'attachement. La prolactine favorise la production de lait ; les deux hormones agissent de concert pendant l'allaitement.

Le principe qui gouverne l'ensemble du système est le rétrocontrôle négatif : le produit final freine sa propre production. Quand la concentration d'une hormone monte, elle inhibe la glande qui commande sa sécrétion, ce qui stabilise le niveau. Ce mécanisme est si général qu'on le retrouve dans la régulation de la température, de la glycémie et de la pression artérielle — et c'est son dérèglement qui produit l'essentiel des pathologies endocriniennes.`],
  ],

  "sv-arbre-vivant": [
    ["Trois domaines", `La classification moderne distingue trois domaines : les bactéries, les archées et les eucaryotes. La grande césure ne passe pas entre plantes et animaux mais entre cellules procaryotes, dépourvues de noyau, et cellules eucaryotes, dont le matériel génétique est enfermé dans un noyau délimité par une membrane.

Carl von Linné a créé au XVIIIe siècle la nomenclature binomiale, qui attribue à chaque espèce un nom de genre suivi d'un nom d'espèce, en latin : c'est ce qui permet à un chercheur de n'importe quel pays de désigner sans ambiguïté le même organisme.`],
    ["Classer par parenté", `La classification n'est plus fondée sur la ressemblance mais sur la parenté : elle est phylogénétique. Un groupe monophylétique réunit un ancêtre et tous ses descendants, sans exception — c'est le seul type de groupe accepté aujourd'hui.

Cette exigence a des conséquences déroutantes. Les oiseaux rejoignent ainsi les dinosaures théropodes, dont ils descendent : dire que les dinosaures ont disparu est inexact, une lignée est devant votre fenêtre. Un caractère homologue est hérité d'un ancêtre commun, et sert donc à établir la parenté. La convergence évolutive désigne au contraire l'apparition indépendante d'un même caractère dans des lignées éloignées — l'aile de l'oiseau et celle de la chauve-souris — et constitue un piège classique pour le classificateur.`],
    ["Compter et redessiner", `Le groupe qui compte le plus d'espèces décrites est de loin celui des insectes, avec environ un million d'espèces nommées et une estimation bien supérieure pour celles qui restent à décrire. Les coléoptères en forment à eux seuls le quart.

L'espèce, au sens biologique classique, désigne un ensemble d'individus pouvant se reproduire entre eux avec une descendance féconde. La définition fonctionne mal pour les organismes asexués et pour les fossiles, d'où la coexistence de plusieurs définitions. Le grand bouleversement récent vient de la comparaison des séquences d'ADN : elle a redessiné des pans entiers de l'arbre du vivant, en révélant des parentés que la morphologie ne laissait pas soupçonner.`],
  ],

  "sv-microbiote": [
    ["Un organe de plus", `L'essentiel du microbiote humain se trouve dans l'intestin, principalement dans le côlon. Il pèse environ deux kilos et compte autant de cellules que le corps entier — le rapport longtemps cité de dix pour un a été révisé à la baisse, mais l'ordre de grandeur reste vertigineux.

Son premier rôle est digestif : il dégrade des fibres que nos propres enzymes ne savent pas attaquer, et en tire des acides gras à chaîne courte qui nourrissent les cellules intestinales. Il contribue aussi à produire la vitamine K et plusieurs vitamines du groupe B.`],
    ["Le déranger", `Un traitement antibiotique réduit fortement la diversité du microbiote, et pas seulement les bactéries visées : la reconstitution prend des semaines, parfois davantage, et n'est pas toujours complète. C'est l'une des raisons de ne pas y recourir sans nécessité.

L'autre raison est collective : l'antibiorésistance, capacité de bactéries à survivre à un antibiotique, se développe d'autant plus vite que l'exposition est fréquente. L'Organisation mondiale de la santé la classe parmi les principales menaces sanitaires mondiales. Un probiotique, à l'inverse, est un micro-organisme vivant apportant un bénéfice documenté pour la santé — les preuves d'efficacité variant fortement selon les souches et les indications.`],
    ["Virus, phages et levures", `La différence essentielle entre un virus et une bactérie est de nature : une bactérie est une cellule, capable de se nourrir et de se diviser seule ; un virus n'est pas une cellule et ne se reproduit qu'en parasitant une cellule hôte, dont il détourne la machinerie.

Un bactériophage est un virus qui infecte les bactéries : la phagothérapie, longtemps délaissée en Occident au profit des antibiotiques, suscite un regain d'intérêt face aux résistances. Enfin, tous les micro-organismes ne sont pas des menaces : une levure, champignon unicellulaire, permet la fabrication du pain, de la bière et du vin. Les recherches récentes sur l'axe intestin-cerveau suggèrent par ailleurs que le microbiote influence l'humeur et le comportement, résultats prometteurs mais encore largement issus de modèles animaux.`],
  ],

  "sv-plantes-adaptations": [
    ["Se nourrir de lumière", `La photosynthèse absorbe du dioxyde de carbone et de l'eau et, grâce à l'énergie lumineuse, produit des sucres en rejetant de l'oxygène. La chlorophylle est le pigment qui capte cette lumière, principalement dans le rouge et le bleu — d'où la couleur verte des feuilles, qui reflètent le vert qu'elles n'utilisent pas.

En automne, la chlorophylle se dégrade et cesse d'être renouvelée : les pigments jaunes et orangés, présents toute l'année mais masqués, deviennent visibles, tandis que d'autres pigments rouges sont parfois synthétisés à ce moment. Le phototropisme, croissance orientée vers la lumière, permet à la plante d'optimiser cette captation malgré son immobilité.`],
    ["Coopérer", `Une plante ne fuit pas : elle coopère ou elle se défend. La mycorhize est une association entre les racines et un champignon : le champignon élargit considérablement la surface d'absorption de l'eau et des minéraux, la plante lui fournit des sucres. Cette symbiose concerne la grande majorité des plantes terrestres et a probablement rendu possible la colonisation des continents.

Les légumineuses — pois, lentilles, luzerne, trèfle — hébergent dans leurs racines des bactéries capables de fixer l'azote de l'air. C'est ce qui explique leur place centrale dans les rotations agricoles : elles enrichissent le sol au lieu de l'épuiser.`],
    ["Se défendre, se reproduire, durer", `Faute de pouvoir s'enfuir, les plantes se défendent par la chimie : composés amers, toxiques ou irritants, parfois libérés seulement après une morsure. Certaines émettent des signaux volatils qui attirent les prédateurs de leurs propres herbivores.

La fleur assure la reproduction sexuée : elle attire les pollinisateurs, protège les gamètes et deviendra le fruit. Une annuelle accomplit tout son cycle en un an et meurt après avoir produit ses graines, tandis qu'une vivace repart chaque saison. Aux extrêmes de la longévité et de la taille, le séquoia géant est considéré comme le plus grand organisme vivant du monde par la masse, avec des individus dépassant mille tonnes et deux mille ans.`],
  ],

  "sv-evolution-humaine": [
    ["Un buisson, pas une marche", `L'évolution humaine n'est pas une ligne droite mais un buisson : plusieurs espèces d'hommes ont vécu en même temps, et l'image de la marche du singe vers l'homme est fausse à tous égards. Les plus anciens fossiles d'hominidés ont été trouvés en Afrique, où la lignée se sépare de celle des chimpanzés il y a environ sept millions d'années.

Le premier caractère à apparaître dans la lignée n'est pas le gros cerveau mais la bipédie : elle précède de plusieurs millions d'années l'augmentation du volume crânien. Lucy, australopithèque découverte en Éthiopie en 1974, en apporte la démonstration — bipède, avec un cerveau de la taille de celui d'un chimpanzé.`],
    ["Les cousins", `Homo neanderthalensis a vécu en Europe et au Proche-Orient jusqu'à environ quarante mille ans : robuste, doté d'un cerveau au moins aussi volumineux que le nôtre, il enterrait ses morts et fabriquait des outils élaborés. La génétique a établi que Néandertaliens et Homo sapiens se sont croisés : la plupart des humains actuels non africains portent quelques pour cent d'ADN néandertalien.

Deux autres découvertes ont élargi le tableau. Homo floresiensis, espèce naine d'un mètre de haut, a vécu sur l'île de Florès jusqu'à environ cinquante mille ans. Les Dénisoviens, eux, ont été identifiés en 2010 uniquement par leur ADN, extrait d'un fragment d'os de doigt : une espèce reconnue avant même qu'on dispose de son squelette.`],
    ["Sapiens et le tournant néolithique", `Homo sapiens apparaît, selon les fossiles les plus anciens actuellement datés, il y a environ trois cent mille ans, au Maroc. La date a été considérablement reculée par cette découverte de 2017.

Le mécanisme qui gouverne l'ensemble reste la sélection naturelle : le tri des variations selon l'avantage reproductif qu'elles confèrent dans un environnement donné. Elle ne poursuit aucun but et ne produit aucun progrès en soi. Le Néolithique marque enfin une rupture d'un autre ordre, culturelle celle-là : l'invention de l'agriculture et de l'élevage, il y a une dizaine de milliers d'années, dans plusieurs foyers indépendants. Sédentarité, croissance démographique, inégalités et maladies infectieuses en découlent.`],
  ],

  "sv-eau-cycle": [
    ["Un circuit fermé", `Le cycle de l'eau comprend quatre grandes étapes : évaporation, condensation, précipitation, ruissellement. Toute l'eau de la Terre est là depuis des milliards d'années : elle change d'état et de lieu, jamais de quantité — ce qui rend l'expression consommer de l'eau impropre au sens strict, et signifie que la question est toujours celle de sa disponibilité locale et de sa qualité.

Environ quatre-vingt-dix-sept pour cent de l'eau terrestre est salée. Le reste est très majoritairement immobilisé dans les glaces ou trop profond pour être exploité, ce qui laisse une fraction minime réellement accessible.`],
    ["Sous terre et dans l'air", `Une nappe phréatique est une réserve d'eau souterraine contenue dans un sol perméable : elle alimente puits et sources, et se recharge lentement par infiltration. Un bassin versant est la zone dont toutes les eaux convergent vers un même cours d'eau : c'est l'unité pertinente pour gérer la ressource, ce qui explique la création d'agences de l'eau organisées par bassin plutôt que par département.

L'évapotranspiration réunit l'évaporation depuis le sol et la transpiration des plantes : elle représente une part considérable du retour de l'eau vers l'atmosphère, et explique qu'une forêt entretienne en partie ses propres pluies.`],
    ["Propriétés et usages", `La glace flotte parce qu'elle est moins dense que l'eau liquide : cette anomalie, rare parmi les corps purs, tient à la structure ouverte des liaisons hydrogène dans le cristal. Elle a une conséquence majeure — les lacs gèlent en surface et non en profondeur, ce qui permet à la vie d'y subsister. La sublimation désigne le passage direct de la glace à la vapeur, sans phase liquide.

Une eau dure est riche en calcium et magnésium : sans danger pour la santé, elle entartre les canalisations. Côté usages, l'agriculture consomme environ soixante-dix pour cent des prélèvements d'eau douce mondiaux. L'eau virtuelle désigne enfin l'eau nécessaire à la production d'un bien, comptabilisée dans les échanges internationaux : importer du blé, c'est importer l'eau qui a servi à le produire.`],
  ],

  "sv-cerveau-memoire": [
    ["L'organe", `Un cerveau humain compte environ quatre-vingt-six milliards de neurones, et au moins autant de cellules gliales, longtemps considérées comme un simple support et dont on connaît aujourd'hui le rôle actif. La synapse est la zone de contact entre deux neurones, où le signal électrique se convertit en signal chimique.

Plusieurs structures ont des fonctions bien identifiées. L'hippocampe est essentiel à la formation de souvenirs nouveaux : sa lésion bilatérale empêche d'enregistrer, sans effacer le passé. L'amygdale traite les émotions, notamment la peur. Le cortex préfrontal est associé à la planification, à l'inhibition et au contrôle de soi — c'est aussi la région dont la maturation s'achève le plus tard, vers vingt-cinq ans.`],
    ["Plusieurs mémoires", `Il n'y a pas une mémoire mais plusieurs, dissociables par les lésions comme par l'imagerie. La mémoire de travail retient et manipule une information quelques secondes — un numéro de téléphone le temps de le composer. La mémoire épisodique conserve les souvenirs situés dans le temps et l'espace, la mémoire sémantique les connaissances générales détachées de leur contexte d'acquisition.

La mémoire procédurale, elle, retient les savoir-faire : faire du vélo, taper au clavier. Elle repose sur d'autres circuits, ce qui explique qu'un patient amnésique puisse apprendre un geste tout en niant l'avoir jamais pratiqué.`],
    ["Apprendre", `La plasticité cérébrale est la capacité du cerveau à modifier ses connexions en fonction de l'expérience. Longtemps jugée réservée à l'enfance, elle est aujourd'hui documentée à tout âge, même si son ampleur diminue.

Deux facteurs comptent particulièrement pour apprendre. Le sommeil consolide les apprentissages de la journée : certaines phases rejouent les séquences neuronales de l'éveil, et une nuit écourtée dégrade la rétention bien plus que la fatigue ressentie ne le laisse croire. La répétition espacée renforce durablement la mémorisation : réviser plusieurs fois à intervalles croissants produit une rétention nettement supérieure au même temps passé d'un seul tenant. C'est le principe sur lequel reposent les systèmes de révision par paliers.`],
  ],

  "sv-climat-mecanismes": [
    ["L'effet de serre", `L'effet de serre naturel est indispensable : certains gaz atmosphériques laissent passer le rayonnement solaire mais piègent le rayonnement infrarouge réémis par la surface, ce qui maintient la Terre à une température vivable. Sans lui, la moyenne serait d'environ moins dix-huit degrés.

C'est son renforcement qui pose problème. Le principal gaz à effet de serre émis par les activités humaines est le dioxyde de carbone, issu de la combustion des énergies fossiles et de la déforestation ; le méthane, moins abondant, a un pouvoir réchauffant bien supérieur à court terme. L'état des connaissances est évalué et synthétisé par le GIEC, qui ne conduit pas de recherches propres mais compile et hiérarchise la littérature scientifique.`],
    ["Amplifications", `Un puits de carbone est un réservoir qui absorbe plus de carbone qu'il n'en émet : océans, forêts et sols en sont les principaux. Leur capacité n'est pas illimitée, et certains basculent de puits à source lorsqu'ils se dégradent.

Une rétroaction positive amplifie le réchauffement initial. L'albédo en donne l'exemple le plus clair : c'est la part de rayonnement solaire réfléchie par une surface. La glace, très réfléchissante, renvoie l'essentiel du rayonnement ; quand elle fond, elle découvre un océan sombre qui l'absorbe, ce qui accélère le réchauffement et donc la fonte. L'absorption du CO2 par les océans, de son côté, provoque leur acidification, qui menace les organismes à squelette calcaire.`],
    ["Mesurer et négocier", `Il faut distinguer météo et climat : la météo décrit l'état de l'atmosphère à un moment donné, le climat les statistiques sur une période de référence de trente ans. Un hiver froid ne dit rien du climat, de même qu'un jour de pluie ne dit rien de la pluviométrie annuelle.

Deux accords internationaux servent de repères. Le protocole de Montréal, adopté en 1987, a permis de réduire le trou dans la couche d'ozone en éliminant les chlorofluorocarbures : c'est le traité environnemental le plus efficace jamais conclu, et il concerne un problème distinct du climat. L'accord de Paris de 2015 fixe l'objectif de contenir le réchauffement nettement en dessous de deux degrés par rapport à l'ère préindustrielle, en s'efforçant de le limiter à un degré et demi.`],
  ],

  "sv-especes-menacees": [
    ["Mesurer la perte", `L'Union internationale pour la conservation de la nature publie la liste rouge des espèces menacées, référence mondiale qui classe les espèces selon leur risque d'extinction, de préoccupation mineure à éteinte.

La principale cause de disparition n'est pas la chasse mais la destruction des habitats : défrichement, urbanisation, drainage, fragmentation. Viennent ensuite la surexploitation, les espèces invasives, la pollution et le changement climatique. La Terre a connu cinq extinctions de masse majeures, dont celle qui a emporté les dinosaures non aviens il y a soixante-six millions d'années ; les biologistes parlent aujourd'hui d'une sixième extinction, dont la cause est humaine.`],
    ["Le vocabulaire de la conservation", `Une espèce endémique est présente naturellement dans une seule région : les îles en concentrent beaucoup, ce qui les rend particulièrement vulnérables. Une espèce invasive est au contraire introduite hors de son aire et y prolifère au détriment des espèces locales, faute de prédateurs ou de concurrents.

Une espèce parapluie est choisie parce que sa protection profite à tout son écosystème : préserver le territoire d'un grand prédateur revient à protéger l'ensemble des espèces qui y vivent. Le raisonnement est autant stratégique qu'écologique, ces espèces étant souvent charismatiques et faciles à défendre auprès du public.`],
    ["Les disparitions et les outils", `Deux extinctions sont devenues emblématiques. Le dodo, oiseau incapable de voler, a disparu de l'île Maurice au XVIIe siècle en quelques décennies, victime des marins et surtout des animaux qu'ils avaient introduits. La tourte voyageuse, autrefois l'oiseau le plus abondant du monde avec des vols de plusieurs milliards d'individus, s'est éteinte en 1914 : l'abondance ne protège de rien.

Deux outils encadrent la protection. Une réserve intégrale est un milieu où toute activité humaine est interdite ou très limitée, y compris la fréquentation. La CITES, convention signée en 1973, réglemente le commerce international des espèces menacées par un système de permis et d'annexes selon le degré de protection.`],
  ],

  "sv-geologie-terre": [
    ["La structure", `La Terre a environ quatre milliards et demi d'années. Elle se compose de couches concentriques : une croûte fine et fragmentée, un manteau qui représente l'essentiel du volume et qui flue lentement, un noyau externe liquide et un noyau interne solide, tous deux principalement composés de fer.

Ce sont les mouvements du fer liquide dans le noyau externe qui produisent le champ magnétique terrestre, par effet dynamo. Ce champ dévie une grande partie du vent solaire et constitue une condition de l'habitabilité de la planète ; il s'est inversé de nombreuses fois au cours de l'histoire géologique, ce que les roches volcaniques ont enregistré.`],
    ["Les plaques", `Alfred Wegener formule en 1912 la théorie de la dérive des continents, en s'appuyant sur la complémentarité des côtes, la répartition des fossiles et les formations géologiques. Faute de mécanisme plausible, elle est rejetée pendant un demi-siècle, jusqu'à la découverte de l'expansion des fonds océaniques dans les années 1960.

Le supercontinent qui existait il y a environ deux cent cinquante millions d'années s'appelle la Pangée ; d'autres l'avaient précédé. Aujourd'hui, une zone de subduction est un endroit où une plaque océanique, plus dense, plonge sous une autre plaque : c'est là que se produisent les séismes les plus puissants et que se forment les grands arcs volcaniques.`],
    ["Lire le temps", `La datation relative repose sur la superposition des couches : dans une série non perturbée, une strate est plus récente que celle qui la porte. La datation absolue repose sur la radioactivité : la décroissance d'isotopes à demi-vie connue fournit une horloge. Le carbone 14 sert pour les périodes récentes, jusqu'à environ cinquante mille ans ; d'autres couples isotopiques permettent de dater des roches de plusieurs milliards d'années.

L'échelle des temps géologiques s'organise en unités emboîtées, dont l'éon est la plus longue, devant l'ère, la période et l'époque. Une roche métamorphique est une roche transformée par la pression et la chaleur sans avoir fondu — le marbre, issu du calcaire, en est l'exemple courant. L'Anthropocène, enfin, est une époque géologique proposée pour désigner la période marquée par l'empreinte humaine ; sa reconnaissance formelle a été rejetée en 2024 par l'instance compétente, sans que le terme cesse d'être employé.`],
  ],

  "sv-sante-publique": [
    ["Les grandes épidémies", `La peste noire tue environ un tiers des Européens au milieu du XIVe siècle, en quelques années : c'est la plus grave catastrophe démographique documentée du continent. La grippe dite espagnole de 1918-1919 fait des dizaines de millions de morts dans le monde, davantage que la Première Guerre mondiale — son nom vient de ce que l'Espagne, non belligérante, ne censurait pas l'information sur l'épidémie.

Une seule maladie humaine a été officiellement éradiquée : la variole, déclarée éliminée en 1980 après une campagne mondiale de vaccination. Le paludisme, transmis par le moustique anophèle, tue encore plusieurs centaines de milliers de personnes par an, principalement des enfants africains.`],
    ["Trois découvertes décisives", `L'assainissement de l'eau et les vaccins ont fait plus pour l'espérance de vie que n'importe quel médicament. En 1854, le médecin britannique John Snow établit l'origine hydrique du choléra à Londres en cartographiant les cas autour d'une pompe : c'est l'acte de naissance de l'épidémiologie moderne, obtenu sans connaître l'agent responsable.

Sept ans plus tôt, à Vienne, Ignace Semmelweis impose le lavage des mains en maternité et fait chuter la mortalité par fièvre puerpérale — sans être cru de ses confrères, qui refusaient d'admettre qu'ils transportaient la maladie. En 1928 enfin, Alexander Fleming découvre la pénicilline en observant une moisissure contaminant une culture bactérienne.`],
    ["La santé publique aujourd'hui", `La première cause de mortalité dans le monde n'est pas infectieuse : ce sont les maladies cardiovasculaires, devant les cancers. Ce basculement, appelé transition épidémiologique, accompagne l'allongement de la vie et la modification des modes de vie.

Deux notions structurent l'action contemporaine. Le dépistage organisé est un programme systématique proposé à une population cible, selon des critères d'âge et de risque : il ne se justifie que si le test est fiable et le traitement précoce plus efficace. L'espérance de vie en bonne santé mesure le nombre d'années vécues sans incapacité : elle progresse moins vite que l'espérance de vie totale, ce qui constitue l'un des grands enjeux des politiques de santé.`],
  ],

  "sv2-cellule": [
    ["Une découverte due au liège", `Robert Hooke observe et nomme les cellules pour la première fois en 1665, en examinant au microscope une fine lamelle de liège. Il y voit des compartiments réguliers qui lui rappellent les cellules d'un monastère — d'où le nom. Il ne voit en réalité que des parois vides de cellules mortes, mais le mot est resté.

Il faudra près de deux siècles pour en tirer une théorie. La théorie cellulaire, formulée par Schleiden et Schwann puis complétée par Virchow, tient en trois propositions : tout être vivant est fait de cellules, la cellule est l'unité de base du vivant, et toute cellule provient d'une autre cellule. Ce troisième principe est le plus lourd de conséquences — il enterre la génération spontanée et implique une continuité ininterrompue depuis les premières cellules, il y a près de quatre milliards d'années, jusqu'à chacune de celles qui nous composent.`],
    ["Des organites, et d'anciennes bactéries", `La mitochondrie produit l'essentiel de l'énergie de la cellule, sous forme d'ATP, en oxydant les nutriments. Elle possède des caractéristiques déroutantes : son propre ADN circulaire, sa propre machinerie de traduction, une double membrane, et elle se divise indépendamment de la cellule.

La théorie de l'endosymbiose explique ces anomalies : la mitochondrie descend d'une bactérie ingérée par une cellule ancestrale et jamais digérée, l'association s'étant révélée avantageuse pour les deux. Le même scénario vaut pour les chloroplastes des végétaux, issus de cyanobactéries. Proposée par Lynn Margulis en 1967, l'idée fut d'abord ridiculisée avant d'être confirmée par le séquençage — l'ADN mitochondrial ressemble bel et bien à celui de bactéries actuelles. Ce sont donc des cellules qui vivent en nous depuis un milliard et demi d'années.`],
    ["La chaîne de production", `Un ribosome assemble les protéines à partir de l'information portée par l'ARN messager, en enchaînant les acides aminés dans l'ordre dicté par le code génétique. C'est la machine la plus universelle du vivant : bactéries, plantes et humains possèdent des ribosomes remarquablement semblables, ce qui en fait d'ailleurs une cible privilégiée des antibiotiques, lesquels exploitent les différences entre ribosomes bactériens et humains.

L'appareil de Golgi prend le relais : il trie, modifie et expédie les protéines vers leur destination, comme un centre de tri postal qui étiquette et achemine. Le lysosome, lui, contient des enzymes digestives capables de dégrader molécules usées et corps étrangers ; sa membrane isole ces enzymes du reste de la cellule, et sa rupture entraîne l'autodestruction.`],
    ["Se diviser, se spécialiser, mourir", `Deux divisions coexistent. La mitose donne deux cellules identiques à la cellule mère, avec le même nombre de chromosomes : c'est la division de la croissance et du renouvellement. La méiose donne quatre cellules à moitié moins de chromosomes, destinées à la reproduction sexuée ; elle brasse en outre les allèles par recombinaison, ce qui fait de chaque gamète une combinaison inédite.

Une cellule souche est capable à la fois de se diviser en se maintenant et de se différencier en plusieurs types cellulaires. Elle assure le renouvellement des tissus — peau, sang, intestin — et fonde les espoirs de la médecine régénérative. La découverte que des cellules adultes peuvent être reprogrammées en cellules souches, récompensée par le Nobel en 2012, a levé une bonne partie des obstacles éthiques liés aux cellules embryonnaires.

L'apoptose enfin est une mort cellulaire programmée et contrôlée : la cellule se démonte proprement, sans libérer son contenu ni déclencher d'inflammation. Ce suicide organisé n'est pas un accident mais un mécanisme de développement — c'est lui qui sépare les doigts d'un embryon en éliminant les cellules entre eux, et son dérèglement, dans un sens comme dans l'autre, est au cœur des cancers et des maladies dégénératives.`],
  ],

  "sv2-respiration-circulation": [
    ["Deux circuits, pas un", `Le cœur humain compte quatre cavités : deux oreillettes qui reçoivent, deux ventricules qui expulsent. Cette architecture n'est pas une redondance mais la séparation stricte de deux circuits.

La petite circulation, ou circulation pulmonaire, va du ventricule droit aux poumons puis revient à l'oreillette gauche : elle sert exclusivement à charger le sang en oxygène et à le débarrasser du dioxyde de carbone. La grande circulation part du ventricule gauche vers tout l'organisme et revient à l'oreillette droite.

L'intérêt de cette séparation est la pression. Les poumons, fragiles, exigent une pression basse ; les organes, éloignés, exigent une pression élevée. Un cœur à quatre cavités permet les deux régimes, ce que ne permet pas le cœur à trois cavités des amphibiens. C'est cette innovation qui a rendu possible le métabolisme élevé des oiseaux et des mammifères.

Une convention de vocabulaire complète le tableau : une artère est un vaisseau qui part du cœur, une veine un vaisseau qui y revient. La définition porte sur la direction, non sur l'oxygénation — l'artère pulmonaire transporte du sang pauvre en oxygène, et c'est bien une artère.`],
    ["Le transport de l'oxygène", `Les échanges gazeux ont lieu dans les alvéoles pulmonaires, minuscules sacs entourés de capillaires. Leur nombre — plusieurs centaines de millions — donne une surface d'échange d'environ soixante-dix mètres carrés, repliée dans le volume de la cage thoracique. Toute la physiologie respiratoire tient dans ce rapport entre une grande surface et un petit volume.

L'hémoglobine transporte l'oxygène. Contenue dans les globules rouges, elle fixe quatre molécules d'oxygène par atome de fer, et sa particularité est de le faire de manière coopérative : plus elle en a fixé, plus elle fixe facilement la suivante, et inversement pour la libération. Cette courbe en S lui permet de se charger presque complètement dans les poumons et de se décharger efficacement dans les tissus actifs, plus chauds et plus acides. Sans elle, le sang transporterait environ soixante-dix fois moins d'oxygène.`],
    ["Quand la circulation s'interrompt", `La tension artérielle est la pression exercée par le sang sur la paroi des artères, mesurée à deux instants : la systole, quand le cœur éjecte, et la diastole, quand il se remplit. Son élévation chronique est le premier facteur de risque cardiovasculaire mondial, et elle est le plus souvent totalement asymptomatique — d'où l'intérêt du dépistage.

Un infarctus du myocarde est la destruction d'une partie du muscle cardiaque privée de sang, généralement par l'obstruction d'une artère coronaire. Le muscle cardiaque ne se régénère pas : ce qui est détruit est remplacé par une cicatrice fibreuse, d'où l'urgence absolue de rétablir le flux — chaque minute compte, littéralement.

Un accident vasculaire cérébral procède du même mécanisme dans le cerveau, par obstruction dans quatre cas sur cinq, par rupture dans le reste. La reconnaissance des signes — déformation du visage, faiblesse d'un bras, trouble de la parole — et l'appel immédiat au 15 conditionnent le pronostic, les traitements de désobstruction n'étant efficaces que dans les premières heures.`],
    ["Groupes sanguins et respiration nocturne", `Le système ABO distingue quatre groupes sanguins — A, B, AB et O — selon la présence de sucres particuliers à la surface des globules rouges. Karl Landsteiner l'identifie en 1901, et cette découverte transforme la transfusion d'une loterie mortelle en acte médical courant. Le groupe O est donneur universel pour les globules rouges, faute de porter ces marqueurs ; le groupe AB est receveur universel. Le système Rhésus s'y superpose et pose un problème distinct, celui de l'incompatibilité entre une mère négative et un fœtus positif.

L'apnée du sommeil est un tout autre sujet, souvent négligé : des arrêts respiratoires répétés pendant le sommeil, dus le plus souvent à un relâchement des voies aériennes supérieures. Chaque arrêt provoque un micro-éveil dont le dormeur n'a pas conscience, d'où une fragmentation du sommeil, une somnolence diurne, et un surrisque cardiovasculaire important. Elle est fréquente, largement sous-diagnostiquée, et son traitement par pression positive continue est efficace.`],
  ],

  "sv2-squelette-muscles": [
    ["Un tissu vivant", `Un squelette humain adulte compte environ deux cent six os — environ, parce que le nombre varie légèrement d'un individu à l'autre et que certains os fusionnent avec l'âge. Un nouveau-né en possède près de trois cents, dont beaucoup se souderont.

L'os n'est pas une charpente inerte : c'est un tissu vivant, sans cesse détruit et reconstruit. Des ostéoclastes résorbent la matrice, des ostéoblastes en déposent de la neuve, et le squelette entier se renouvelle en une dizaine d'années. Ce remodelage permanent lui permet de s'adapter aux contraintes — un os sollicité s'épaissit, un os déchargé s'affaiblit, ce qui explique la perte osseuse rapide des astronautes et des patients alités.

Les extrêmes de taille sont parlants : le fémur, plus long os du corps, mesure environ un quart de la stature ; l'étrier, dans l'oreille moyenne, mesure trois millimètres et transmet les vibrations du tympan à l'oreille interne.`],
    ["Les jonctions", `Le cartilage articulaire est un tissu lisse et élastique qui recouvre les extrémités osseuses. Son coefficient de frottement est inférieur à celui de la glace sur la glace, ce qui fait de l'articulation l'une des liaisons mécaniques les plus performantes connues. Sa faiblesse est qu'il n'est ni vascularisé ni innervé : il se nourrit par diffusion à travers le liquide synovial, se régénère très mal, et son usure — l'arthrose — est irréversible.

Un ligament relie deux os entre eux et stabilise l'articulation en limitant les mouvements excessifs. Il ne faut pas le confondre avec le tendon, qui relie un muscle à un os. La distinction est utile en pratique : une entorse est une lésion ligamentaire, une tendinite une souffrance tendineuse, et les prises en charge diffèrent.`],
    ["Comment on bouge", `Le corps humain compte plus de six cents muscles squelettiques, soumis au contrôle volontaire, auxquels s'ajoutent les muscles lisses des viscères et le muscle cardiaque, involontaires.

Un muscle ne peut que tirer : il se raccourcit ou résiste, jamais il ne pousse. Tout mouvement exige donc une paire. Un muscle antagoniste produit le mouvement inverse d'un autre — le biceps fléchit le coude, le triceps l'étend —, et leur alternance coordonnée par le système nerveux permet non seulement le déplacement mais son contrôle fin : la précision d'un geste vient de la contraction simultanée dosée des deux, non de l'action isolée de l'un.

La contraction elle-même repose sur le glissement de filaments d'actine et de myosine les uns sur les autres, alimenté par l'ATP. La rigidité cadavérique s'explique par ce mécanisme : sans ATP, les têtes de myosine restent accrochées à l'actine et le muscle ne peut plus se relâcher.`],
    ["Le vieillissement des deux tissus", `L'ostéoporose est une fragilisation osseuse par perte de densité, lorsque la résorption l'emporte durablement sur la reconstruction. Elle progresse sans symptôme jusqu'à la première fracture, souvent du poignet, des vertèbres ou du col du fémur — cette dernière ayant des conséquences graves sur l'autonomie. La masse osseuse maximale se constitue avant trente ans, ce qui fait de l'activité physique et des apports en calcium et vitamine D de la jeunesse un investissement dont le bénéfice se manifeste cinquante ans plus tard.

La sarcopénie est la perte progressive de masse et de force musculaires avec l'âge, qui débute dès la quarantaine et s'accélère ensuite. Elle contribue directement aux chutes et à la perte d'autonomie, et le renforcement musculaire est l'une des rares interventions dont l'efficacité est démontrée à tout âge, y compris très avancé.

Une courbature, enfin, est une douleur musculaire due à des microlésions apparaissant un à deux jours après un effort inhabituel, en particulier excentrique. L'explication par l'acide lactique, encore très répandue, est fausse : celui-ci est éliminé en moins d'une heure.`],
  ],

  "sv2-reproduction": [
    ["Où tout commence", `La fécondation a lieu dans la trompe utérine, non dans l'utérus — précision qui a des conséquences pratiques directes. C'est dans le tiers externe de la trompe que le spermatozoïde rencontre l'ovocyte, et l'œuf fécondé met ensuite plusieurs jours à descendre vers l'utérus tout en se divisant. Une grossesse extra-utérine survient lorsque cette migration échoue et que l'embryon s'implante dans la trompe : c'est une urgence chirurgicale.

Un gamète humain porte vingt-trois chromosomes, la moitié du patrimoine de la cellule mère, produite par méiose. La fécondation en restaure quarante-six. Ce mécanisme garantit à la fois la stabilité du nombre de chromosomes d'une génération à l'autre et un brassage considérable : le nombre de combinaisons possibles dépasse les huit millions par parent, avant même de compter les recombinaisons.

L'ovulation est la libération d'un ovocyte par l'ovaire, vers le milieu du cycle. La nidation, six à dix jours après la fécondation, est l'implantation de l'embryon dans la paroi utérine préparée par les hormones du cycle.`],
    ["Neuf mois, et un organe provisoire", `La durée moyenne d'une grossesse humaine est d'environ quarante semaines d'aménorrhée, c'est-à-dire comptées depuis le premier jour des dernières règles — soit environ trente-huit semaines après la fécondation. Ce décalage de deux semaines entre les deux comptes est une source constante de malentendus.

Le placenta assure les échanges entre la mère et le fœtus : oxygène et nutriments dans un sens, déchets dans l'autre, sans que les deux sangs ne se mélangent jamais. Il produit en outre les hormones qui maintiennent la grossesse, et fait office de barrière partielle — partielle, car alcool, nicotine, de nombreux médicaments et certains virus la franchissent. C'est un organe complet, à durée de vie déterminée, dont le fonctionnement conditionne la croissance du fœtus.`],
    ["Un capital fixé avant la naissance", `Une femme possède environ un à deux millions d'ovocytes à la naissance, constitués pendant sa propre vie fœtale. Ce stock ne se renouvelle jamais : il décroît continûment, tombant à quelques centaines de milliers à la puberté, et quelques centaines seulement seront ovulés au cours de la vie.

Cette particularité distingue radicalement les deux sexes — la spermatogenèse est continue et produit des cellules neuves toute la vie. Elle explique aussi l'effet de l'âge maternel sur le risque d'anomalies chromosomiques : les ovocytes ont l'âge de la femme, et leur mécanisme de séparation des chromosomes se dégrade avec le temps.

La ménopause est l'arrêt définitif des cycles ovulatoires, survenant vers cinquante ans en moyenne lorsque le stock est épuisé. C'est une singularité biologique : très peu d'espèces présentent une longue survie post-reproductive, ce qui a fait naître l'hypothèse dite de la grand-mère, selon laquelle cette longévité aurait été sélectionnée pour son bénéfice sur la survie des petits-enfants.`],
    ["Assister et dépister", `La fécondation in vitro consiste à réaliser la fécondation en laboratoire avant de transférer l'embryon dans l'utérus. Le premier bébé ainsi conçu naît en 1978, et la technique a depuis donné naissance à plus de dix millions de personnes. Elle a été suivie de variantes plus poussées, comme l'injection directe d'un spermatozoïde dans l'ovocyte, qui traite les infertilités masculines sévères.

Le diagnostic prénatal recherche des anomalies chez le fœtus pendant la grossesse : échographies, dosages sanguins, analyse de l'ADN fœtal circulant dans le sang maternel, et si nécessaire prélèvements invasifs. Le dépistage de la trisomie 21 par ADN circulant a réduit considérablement le recours à l'amniocentèse, geste comportant un risque de fausse couche.

Ces techniques posent des questions qui ne sont pas médicales : ce que l'on cherche, ce que l'on fait de l'information, et où passe la limite entre prévenir une maladie et sélectionner un profil. Le droit français encadre strictement ce qui peut être recherché, et le débat se rouvre à chaque progrès technique.`],
  ],

  "sv2-genetique-maladies": [
    ["Dominant, récessif", `Chacun porte deux exemplaires de la plupart de ses gènes, un de chaque parent. Une maladie autosomique récessive ne s'exprime que si les deux allèles sont atteints : un porteur hétérozygote est parfaitement sain, et l'ignore généralement. Deux porteurs ont un risque sur quatre à chaque grossesse d'avoir un enfant atteint.

D'où le constat qui fonde tout le raisonnement : une maladie récessive peut sauter des générations sans jamais disparaître. Elle circule silencieusement dans une population, et ne se manifeste que lorsque deux porteurs se rencontrent — ce qui explique la fréquence accrue de ces maladies dans les unions consanguines et dans les populations isolées.

La mucoviscidose, la plus fréquente de ces maladies en Europe, épaissit les sécrétions et atteint les poumons et le pancréas ; environ une personne sur trente en est porteuse sans le savoir. La drépanocytose déforme les globules rouges en faucille, ce qui obstrue les petits vaisseaux et provoque des crises douloureuses ; elle est la maladie génétique la plus répandue au monde. Sa fréquence élevée dans les régions autrefois impaludées n'est pas un hasard : le porteur sain résiste mieux au paludisme, avantage qui a maintenu l'allèle par sélection naturelle.`],
    ["Les gènes du chromosome X", `L'hémophilie touche surtout les garçons parce que le gène en cause est porté par le chromosome X. Une fille possède deux X : si l'un est défectueux, l'autre compense, et elle est porteuse saine. Un garçon n'a qu'un seul X, hérité de sa mère, sans second exemplaire pour compenser — le moindre défaut s'exprime.

Cette transmission dite récessive liée à l'X produit un schéma familial caractéristique : la maladie passe des grands-pères aux petits-fils par l'intermédiaire de femmes indemnes. L'histoire européenne en offre l'illustration la plus célèbre, l'hémophilie transmise par la descendance de la reine Victoria aux familles royales russe et espagnole. Le daltonisme et la myopathie de Duchenne suivent le même mode.`],
    ["Quand ce sont les chromosomes", `La trisomie 21 n'est pas une mutation d'un gène mais la présence de trois exemplaires du chromosome 21, due le plus souvent à une mauvaise séparation lors de la méiose. Le risque augmente avec l'âge maternel, pour des raisons liées à l'ancienneté des ovocytes.

Une mutation, elle, est une modification de la séquence de l'ADN : substitution d'une base, insertion, délétion. La plupart sont neutres, certaines délétères, quelques-unes avantageuses — et c'est précisément ce flux permanent qui fournit à l'évolution sa matière première. Une mutation n'est donc pas par nature une anomalie, elle est le régime ordinaire du vivant.

La pénétrance nuance enfin le déterminisme génétique : c'est la proportion de porteurs d'un gène qui développent effectivement le caractère. Une pénétrance incomplète signifie qu'un individu peut porter une mutation associée à une maladie sans jamais la déclarer, l'expression dépendant d'autres gènes, de l'environnement ou du hasard. Cette notion est décisive pour interpréter un test génétique : porter un variant à risque n'équivaut jamais à une prédiction.`],
    ["Prévoir, dépister, corriger", `Un conseil génétique est une consultation qui évalue le risque de transmission d'une maladie dans une famille, à partir de l'arbre généalogique et, si nécessaire, de tests. Son rôle est autant informatif que décisionnel : expliquer des probabilités, les rendre compréhensibles, et accompagner un choix qui n'appartient qu'aux personnes concernées.

Le dépistage néonatal en France teste systématiquement chaque nouveau-né, à partir de quelques gouttes de sang prélevées au talon, pour un ensemble de maladies rares dont la prise en charge précoce change radicalement le pronostic — phénylcétonurie, hypothyroïdie congénitale, drépanocytose, mucoviscidose et plusieurs autres depuis l'extension du programme. C'est l'un des dispositifs de santé publique les plus efficaces qui soient, pour un coût dérisoire.

La thérapie génique introduit un gène fonctionnel pour corriger une maladie, généralement au moyen d'un virus modifié servant de vecteur. Longtemps décevante, avec des accidents graves dans les premiers essais, elle a produit depuis quelques années des succès réels sur des maladies jusque-là sans recours — déficits immunitaires, amyotrophie spinale, certaines cécités héréditaires. Son obstacle actuel n'est plus tant scientifique qu'économique : les traitements comptent parmi les plus chers jamais commercialisés.`],
  ],

  "sv2-ecosystemes": [
    ["Un milieu et ses habitants", `Un écosystème est l'ensemble d'un milieu physique et des êtres vivants qui l'occupent, avec toutes leurs interactions. Le mot insiste sur la relation : une mare n'est pas une collection d'espèces posées dans de l'eau, c'est un système où chaque élément dépend des autres et du support minéral.

Sa base est constituée par les producteurs primaires, organismes qui fabriquent leur matière organique à partir de minéraux et d'énergie — presque toujours par photosynthèse. Toute la matière et l'énergie qui circulent ensuite dans l'écosystème sont passées par eux. À l'autre extrémité, les décomposeurs — bactéries, champignons, invertébrés du sol — recyclent la matière organique morte en minéraux réutilisables. Sans eux, les nutriments resteraient piégés dans les cadavres et la production s'arrêterait en quelques saisons : ce sont les organismes les moins visibles et les plus indispensables.`],
    ["Pourquoi les chaînes sont courtes", `Environ dix pour cent seulement de l'énergie passe d'un niveau trophique au suivant. Le reste est dissipé en chaleur, dépensé en respiration, ou contenu dans des parties non consommées. Cette déperdition explique un fait observable partout : les chaînes alimentaires comptent rarement plus de quatre ou cinq maillons, faute d'énergie disponible au-delà.

Elle explique aussi pourquoi les grands prédateurs sont peu nombreux et exigent de vastes territoires, et pourquoi produire un kilogramme de viande mobilise beaucoup plus de surface qu'un kilogramme de céréales. Une pyramide écologique n'est pas une métaphore : c'est la traduction quantitative d'une perte à chaque étage.

Le même trajet concentre les polluants. La bioaccumulation est la concentration croissante d'un polluant persistant le long d'une chaîne alimentaire : chaque prédateur reçoit ce que contenaient toutes ses proies, si bien qu'un composé indétectable dans l'eau atteint des taux considérables chez un rapace ou un cétacé. C'est ce mécanisme qui a fait s'effondrer les populations de faucons pèlerins à l'époque du DDT.`],
    ["Des rôles inégaux", `Toutes les espèces ne pèsent pas le même poids. Une espèce clé de voûte est une espèce dont la disparition bouleverse tout l'écosystème, sans rapport avec son abondance. Le cas fondateur est celui d'une étoile de mer prédatrice dont le retrait expérimental d'un estran a conduit à l'élimination de la plupart des autres espèces par une seule moule devenue dominante. Le loutre de mer, le castor, le loup relèvent de la même catégorie.

Une niche écologique désigne l'ensemble des conditions et ressources qu'une espèce exploite : son alimentation, son habitat, son rythme, ses tolérances. Ce n'est pas un lieu mais un métier. Deux espèces occupant exactement la même niche ne peuvent coexister durablement — l'une élimine l'autre —, principe qui explique la spécialisation observée entre espèces voisines partageant un même milieu.

Une succession écologique décrit l'évolution progressive d'un milieu vers un état plus stable : une friche devient prairie, puis fourré, puis forêt, chaque étape modifiant les conditions au bénéfice de la suivante. L'idée d'un état final immuable est aujourd'hui nuancée, les perturbations faisant partie du fonctionnement normal.`],
    ["Déséquilibres et bénéfices", `L'eutrophisation est l'enrichissement excessif d'un milieu aquatique en nutriments, azote et phosphore surtout, venus des engrais, des rejets domestiques ou de l'élevage. La séquence est mécanique : prolifération d'algues, eau opaque, mort des végétaux du fond, décomposition consommant l'oxygène, asphyxie de la faune. Les marées vertes bretonnes et les zones mortes des grands estuaires en sont les manifestations les plus visibles.

À l'inverse, un service écosystémique désigne un bénéfice que les humains tirent du fonctionnement d'un écosystème : pollinisation, épuration de l'eau par les zones humides, régulation des crues, stockage du carbone, fertilité des sols, régulation du climat local. La notion a été forgée pour rendre visible ce qui était considéré comme gratuit et donc ignoré dans les décisions. Elle a réussi à donner des ordres de grandeur économiques frappants, tout en suscitant une critique légitime : réduire une forêt à la somme de ses services rendus revient à accepter par avance qu'on puisse la remplacer par un équivalent moins cher.`],
  ],

  "sv2-comportement-animal": [
    ["Étudier ce que font les animaux", `L'éthologie est l'étude scientifique du comportement animal, de préférence dans son milieu naturel. Elle s'est constituée en discipline au milieu du XXe siècle, avec un prix Nobel de médecine décerné en 1973 à Lorenz, Tinbergen et von Frisch — reconnaissance rare pour l'observation d'animaux.

Sa difficulté méthodologique tient à un double biais. L'anthropomorphisme attribue abusivement aux animaux des traits humains : intentions, culpabilité, vengeance. Mais l'excès inverse, longtemps dominant sous l'influence du behaviorisme, consiste à leur refuser toute vie mentale et à ne décrire que des mécanismes. Attribuer des intentions humaines aux animaux est un biais, leur en refuser toutes en est un autre — et l'éthologie contemporaine avance en cherchant des protocoles capables de trancher plutôt qu'en choisissant un présupposé.`],
    ["Trois expériences fondatrices", `Konrad Lorenz étudie l'empreinte : dans les heures qui suivent l'éclosion, un oison s'attache au premier objet mobile qu'il perçoit et le suit ensuite comme sa mère. Lorenz s'étant lui-même prêté à l'expérience, ses oies le suivaient partout. La leçon dépasse l'anecdote : il existe des périodes sensibles pendant lesquelles un apprentissage se fixe presque irréversiblement, et qui n'ont pas d'équivalent plus tard.

Karl von Frisch découvre que les abeilles communiquent la position des fleurs par une danse : l'angle du parcours en huit par rapport à la verticale indique la direction par rapport au soleil, et la durée de la phase frétillante indique la distance. C'est un langage symbolique chez un insecte, résultat si inattendu qu'il fut contesté pendant des décennies avant d'être confirmé.

Ivan Pavlov, enfin, décrit le réflexe conditionné : une réponse apprise par association répétée entre deux stimuli, le chien salivant au son associé à la nourriture. Skinner y ajoutera le conditionnement opérant, apprentissage par les conséquences de ses propres actions — récompense ou punition —, qui fonde toutes les méthodes modernes de dressage et une part de la pédagogie.`],
    ["Se reconnaître, s'entraider", `Le test du miroir évalue la reconnaissance de soi : on marque discrètement l'animal à un endroit qu'il ne peut voir que dans un miroir, et l'on observe s'il touche la marque sur son propre corps. Grands singes, éléphants, dauphins, pies et quelques autres le réussissent. Son interprétation est discutée — il privilégie les espèces visuelles, et un chien qui échoue reconnaît parfaitement sa propre odeur — mais il reste l'un des rares protocoles opérationnels sur la conscience de soi.

L'altruisme de parentèle explique un comportement qui semblait contredire la sélection naturelle : pourquoi un individu se sacrifierait-il pour d'autres ? La réponse, formalisée par Hamilton, tient à ce que les apparentés partagent des gènes : aider un frère à survivre transmet indirectement une partie de son propre patrimoine. La formule est célèbre sous une boutade attribuée à Haldane — il donnerait sa vie pour deux frères ou huit cousins. C'est ce mécanisme qui rend compte des sociétés d'insectes où les ouvrières stériles élèvent la descendance de leur mère.`],
    ["Partir et revenir", `La migration animale est un déplacement saisonnier régulier entre deux zones, généralement entre un site de reproduction et un site d'hivernage. Elle concerne des oiseaux, des poissons, des insectes, des mammifères, et met en jeu des trajets qui atteignent des dizaines de milliers de kilomètres par an pour la sterne arctique.

Les oiseaux migrateurs s'orientent par une combinaison de repères : la position du soleil corrigée par une horloge interne, les constellations pour les migrateurs nocturnes, le champ magnétique terrestre perçu par des mécanismes encore débattus, et pour la navigation fine des repères visuels et olfactifs. Aucun de ces systèmes n'est suffisant seul, et leur redondance explique la robustesse du trajet.

Le plus troublant est la part innée : un jeune coucou, élevé par des parents adoptifs d'une autre espèce et parti seul après eux, rejoint une aire d'hivernage qu'il n'a jamais vue. L'itinéraire est inscrit, non appris — ce qui rend d'autant plus préoccupante la vitesse à laquelle le climat déplace les conditions auxquelles ces programmes sont ajustés.`],
  ],

  "sv2-vegetaux-cultures": [
    ["Des plantes que la nature n'a pas faites", `Presque toutes nos plantes cultivées ont été profondément transformées par des millénaires de sélection, au point que beaucoup n'existent pas à l'état sauvage et ne survivraient pas sans nous.

Le maïs descend de la téosinte, une graminée mexicaine dont l'épi mesure quelques centimètres et porte une douzaine de grains durs enfermés dans des enveloppes. Le passage de l'une à l'autre a demandé des millénaires et implique un petit nombre de gènes clés ; la ressemblance est si faible que la parenté a été longtemps contestée avant d'être établie génétiquement.

Le chou sauvage a donné, par sélection de parties différentes de la même plante, le chou pommé, le brocoli, le chou-fleur, le chou de Bruxelles, le chou-rave et le chou frisé. Toutes ces plantes appartiennent à la même espèce — sélectionner les bourgeons, les fleurs, la tige ou les feuilles a produit des légumes que rien ne rapproche visuellement.

La pomme de terre, originaire des Andes, y compte des milliers de variétés locales quand l'Europe n'en a longtemps cultivé qu'une poignée.`],
    ["Le prix de l'uniformité", `L'Irlande de 1845 offre la démonstration la plus tragique de ce que coûte l'uniformité génétique. La population dépendait presque exclusivement de la pomme de terre, et de très peu de variétés, toutes sensibles au même parasite. Quand le mildiou arrive d'Amérique, les récoltes sont anéanties plusieurs années de suite : la grande famine fait environ un million de morts et pousse autant de personnes à l'émigration, réduisant durablement la population de l'île.

Le principe vaut au-delà du cas irlandais : une culture génétiquement homogène est une culture où un pathogène adapté trouve partout les mêmes défenses. La diversité n'est pas un supplément esthétique, c'est une assurance.`],
    ["Deux façons de faire une variété", `Une variété hybride F1 résulte du croisement de deux lignées pures. Elle est très homogène et souvent très productive, par un effet de vigueur hybride. Mais elle n'est pas reproductible : les graines qu'elle produit donnent une descendance dispersée et décevante, ce qui oblige le cultivateur à racheter des semences chaque année. Ce n'est pas un piège commercial mais une conséquence génétique, dont l'industrie semencière a évidemment tiré parti.

Une variété population est génétiquement diverse : ses individus diffèrent, et le cultivateur peut ressemer sa propre récolte en la sélectionnant. Moins régulière, elle est plus adaptable et évolue avec le terroir.

En France comme dans l'Union, le catalogue officiel des espèces et variétés conditionne la commercialisation des semences : une variété doit y être inscrite, ce qui suppose de satisfaire des critères de distinction, d'homogénéité et de stabilité. Ces critères, conçus pour les variétés modernes, écartaient de fait les variétés population, ce qui a nourri un long conflit ; des assouplissements ont depuis été introduits pour les variétés anciennes et les semences destinées aux jardiniers amateurs.

La banque de semences du Svalbard, creusée dans le permafrost d'une île arctique norvégienne, conserve des duplicatas de collections du monde entier — une assurance ultime contre la perte de diversité cultivée, déjà sollicitée après la destruction de la banque syrienne d'Alep.`],
    ["Ceux qui pollinisent", `La pollinisation par les insectes conditionne une part importante des rendements de nombreuses cultures : arbres fruitiers, colza, tournesol, courges, café, cacao. Les céréales, pollinisées par le vent, y échappent — ce qui explique que la production calorique mondiale ne s'effondrerait pas sans pollinisateurs, mais que la diversité et la qualité nutritionnelle de l'alimentation, elles, s'effondreraient.

Les populations d'insectes pollinisateurs déclinent sous l'effet combiné de plusieurs pressions : pesticides, en particulier les insecticides neurotoxiques qui affectent l'orientation et la mémoire des abeilles à doses non létales ; perte d'habitat et disparition des ressources florales continues dans les paysages de grandes cultures ; parasites et pathogènes, dont le varroa pour l'abeille domestique ; et changement climatique, qui décale les floraisons par rapport aux cycles des insectes.

Aucune de ces causes n'explique seule le phénomène, et c'est précisément ce qui rend la réponse difficile : une mesure isolée sur un seul facteur ne produit que des effets partiels.`],
  ],

  "sv2-champignons": [
    ["Ni plantes, ni animaux", `Les champignons constituent un règne distinct, séparé aussi bien des plantes que des animaux. Longtemps classés parmi les végétaux parce qu'ils ne se déplacent pas, ils ont été reclassés dans les années 1960, puis la génétique a livré un résultat contre-intuitif : ils sont plus proches des animaux que des plantes. Le dernier ancêtre commun des champignons et des animaux est postérieur à la séparation d'avec la lignée végétale.

Plusieurs traits le confirment. Ils ne font pas de photosynthèse, faute de chlorophylle, et se nourrissent donc de matière organique préexistante, comme les animaux. Ils stockent leurs réserves sous forme de glycogène, comme les animaux, et non d'amidon. Et la paroi de leurs cellules est faite de chitine — le même polymère que la carapace des insectes — et non de cellulose.`],
    ["Le vrai corps du champignon", `Ce qu'on appelle couramment un champignon n'est que l'organe reproducteur, éphémère et visible. Le corps réel est le mycélium : un réseau de filaments microscopiques, les hyphes, qui explore le sol ou le bois sur des surfaces considérables.

L'échelle de ces réseaux dépasse l'intuition. Un mycélium d'armillaire découvert dans l'Oregon s'étend sur près de dix kilomètres carrés et pourrait avoir plusieurs milliers d'années : c'est l'un des plus grands et des plus vieux organismes vivants connus. Le champignon se nourrit en sécrétant des enzymes qui digèrent la matière à l'extérieur de lui, puis en absorbant les molécules libérées — une digestion externe, à l'inverse de la nôtre.

Un lichen n'est pas un organisme mais une association durable entre un champignon et une algue ou une cyanobactérie : le premier fournit l'abri et les minéraux, la seconde la photosynthèse. Dépourvus de racines, les lichens tirent tout de l'air et absorbent donc directement les polluants atmosphériques — ce qui en fait d'excellents indicateurs de la qualité de l'air, leur composition en espèces variant nettement avec la pollution soufrée et azotée.`],
    ["Ceux qui travaillent pour nous", `La levure de boulanger, champignon unicellulaire, permet à la fois le pain, la bière et le vin : elle transforme les sucres en dioxyde de carbone et en éthanol. C'est le gaz qui fait lever la pâte et l'alcool qui fait le vin — une même réaction, deux produits recherchés selon l'usage. Elle est aussi l'organisme eucaryote modèle par excellence en biologie moléculaire.

Penicillium roqueforti confère au roquefort ses veines bleues et une part décisive de son goût, en dégradant les matières grasses en composés aromatiques. Sa culture dans les caves de Roquefort-sur-Soulzon, ventilées par des fissures naturelles, est le fondement de l'une des plus anciennes appellations protégées.

Botrytis cinerea est responsable de la pourriture noble du raisin : dans des conditions précises d'humidité matinale et de sécheresse l'après-midi, il perce la peau du grain, l'eau s'évapore et les sucres se concentrent, donnant les grands vins liquoreux du Sauternais ou de Tokaj. Dans des conditions plus humides, le même champignon donne la pourriture grise, qui ruine la récolte. Un seul organisme, deux issues opposées selon la météo.`],
    ["Ceux dont il faut se méfier", `Une mycotoxine est une substance toxique produite par certains champignons, souvent des moisissures qui se développent sur des denrées mal conservées. Les aflatoxines, présentes sur les arachides et les céréales stockées humides, comptent parmi les cancérogènes naturels les plus puissants connus, et font l'objet de contrôles stricts. L'ergot de seigle, autre champignon parasite, a provoqué au Moyen Âge les épidémies de « feu de Saint-Antoine », avec convulsions, hallucinations et gangrène.

L'amanite phalloïde est responsable de la grande majorité des intoxications mortelles par champignons. Sa toxicité tient à des amatoxines qui bloquent la synthèse des protéines dans le foie. Deux caractéristiques la rendent particulièrement dangereuse : elle ressemble à des espèces comestibles, et surtout les symptômes n'apparaissent qu'après six à douze heures, quand les toxines ont déjà été absorbées. Ce délai est le piège — un trouble digestif tardif après un repas de champignons doit toujours conduire aux urgences, la précocité des symptômes étant au contraire plutôt rassurante.

Aucun test domestique ne permet de distinguer un champignon comestible d'un toxique : ni la cuillère en argent, ni la couleur, ni le fait que les limaces l'aient entamé. La seule méthode fiable reste la détermination par une personne compétente, pharmacien ou mycologue.`,
      { image: "svt-amanite-phalloide", legende: "L'amanite phalloïde : ressemblante, et dont les premiers symptômes n'apparaissent qu'après plusieurs heures.", alt: "Champignon amanite phalloïde" }],
  ],

  "sv2-paleontologie": [
    ["Une archive très incomplète", `Un fossile est un reste ou une trace d'un organisme conservé dans les roches : coquille, os, empreinte de pas, terrier, excrément. Le mot recouvre donc aussi bien les corps que les activités.

La fossilisation est rare parce qu'elle exige un enfouissement rapide dans des conditions particulières — sédimentation abondante, absence d'oxygène, absence de charognards. Dans la quasi-totalité des cas, un organisme mort est consommé, décomposé et dispersé en quelques semaines. Il en résulte que seule une fraction infime des êtres vivants a été fossilisée, et que cette fraction est biaisée : les organismes à parties dures et les milieux aquatiques sédimentaires sont surreprésentés, les animaux à corps mou et les milieux forestiers presque absents.

Lire l'histoire de la vie dans les roches revient donc à reconstituer un film à partir de quelques images abîmées, et une bonne part du travail des paléontologues consiste à évaluer ce que l'absence d'un fossile prouve — c'est-à-dire souvent rien.`],
    ["Dater les couches", `Un fossile stratigraphique, ou fossile guide, est une espèce très répandue géographiquement mais de courte durée d'existence : sa présence dans une couche la date avec précision, et permet de corréler des terrains situés à des milliers de kilomètres. C'est la base de la géologie du XIXe siècle, qui a établi l'échelle des temps bien avant de pouvoir en donner les âges absolus.

L'ammonite, mollusque marin à coquille en spirale, est le fossile guide par excellence du Mésozoïque : abondante, largement répartie, et évoluant rapidement en formes reconnaissables. Elle disparaît en même temps que les dinosaures.

Les âges absolus viennent d'une autre méthode : la datation par la désintégration d'isotopes radioactifs à longue période. Uranium-plomb, potassium-argon, rubidium-strontium permettent de dater des roches de plusieurs milliards d'années — le carbone 14, limité à quelques dizaines de milliers d'années, n'a aucun usage en paléontologie profonde, contrairement à une confusion répandue.`,
      { image: "svt-fossile-ammonite", legende: "Une ammonite : abondante, largement répartie, à durée d'existence brève — le fossile guide idéal.", alt: "Fossile d'ammonite en spirale" }],
    ["Deux moments décisifs", `L'explosion cambrienne désigne la diversification rapide des formes animales survenue il y a environ cinq cent quarante millions d'années. En quelques dizaines de millions d'années — bref à l'échelle géologique — apparaissent la plupart des grands plans d'organisation animaux encore existants. Les causes en sont débattues : montée de l'oxygène, apparition de la prédation et donc de la course aux armements, ou simple effet d'archive, les parties dures se fossilisant enfin.

Les schistes de Burgess, en Colombie-Britannique, en donnent l'image la plus complète : un gisement exceptionnel où des animaux à corps mou ont été conservés dans le détail, révélant des formes si étranges que leur classification a occupé les paléontologues pendant un siècle.

À l'autre bout, les dinosaures non aviens disparaissent il y a environ soixante-six millions d'années. La cause principale retenue est l'impact d'un astéroïde dans la péninsule du Yucatán, dont le cratère de Chicxulub a été identifié et daté ; la découverte d'une couche mondiale enrichie en iridium, élément rare sur Terre et abondant dans les météorites, avait mis sur la piste dès 1980. Un volcanisme massif contemporain en Inde a probablement aggravé la crise.`],
    ["Les formes intermédiaires", `L'Archaeopteryx, découvert en Bavière deux ans après la publication de *L'Origine des espèces*, présente à la fois des plumes et des dents, ainsi qu'une longue queue osseuse et des griffes aux ailes. Il arrivait au moment exact où Darwin déplorait l'absence de formes intermédiaires dans le registre fossile, et il en fournissait une spectaculaire.

Les découvertes chinoises des trente dernières années ont depuis transformé le tableau : des dizaines d'espèces de dinosaures à plumes ont été mises au jour, montrant que le plumage précède le vol et servait probablement d'abord à l'isolation ou à la parade. La conclusion est désormais consensuelle et vaut d'être formulée sans détour : les oiseaux ne descendent pas des dinosaures, ils sont des dinosaures — le seul groupe à avoir traversé la crise du Crétacé.`,
      { image: "svt-archaeopteryx", legende: "L'Archaeopteryx : plumes, dents, queue osseuse et griffes — la forme intermédiaire arrivée au moment opportun.", alt: "Fossile d'Archaeopteryx" }],
  ],

  "sv2-sommeil-rythmes": [
    ["Une horloge qui retarde", `Un rythme circadien est un cycle biologique d'environ vingt-quatre heures — le mot vient du latin *circa diem*, « environ un jour », et cette approximation est essentielle. Isolé de tout repère temporel, un être humain adopte spontanément un rythme légèrement supérieur à vingt-quatre heures, généralement autour de vingt-quatre heures et quart. L'horloge biologique tourne donc un peu trop lentement, et se recale chaque jour sur la lumière.

Cette horloge principale se situe dans l'hypothalamus, dans un noyau de quelques milliers de neurones qui reçoit directement l'information lumineuse de la rétine par une voie distincte de celle de la vision. Elle synchronise ensuite des horloges secondaires présentes dans presque tous les organes — foie, intestin, muscles —, ce qui explique que le décalage horaire ne perturbe pas seulement le sommeil mais aussi la digestion et la température corporelle, chaque organe se recalant à son propre rythme.

La lumière est donc le signal maître. La lumière bleue des écrans en soirée retarde la sécrétion de mélatonine, l'hormone qui signale la nuit : le cerveau reçoit l'information qu'il fait encore jour, et l'endormissement se décale.`],
    ["Ce qui se passe pendant la nuit", `Le sommeil s'organise en cycles d'environ quatre-vingt-dix minutes, répétés quatre à six fois par nuit. Chaque cycle traverse des stades de sommeil lent de plus en plus profond, puis une phase de sommeil paradoxal.

Le sommeil lent profond est le plus réparateur physiquement : c'est là que se produit l'essentiel de la sécrétion d'hormone de croissance, de la réparation tissulaire et du nettoyage cérébral par le système glymphatique. Il domine les premiers cycles de la nuit, ce qui explique qu'un coucher tardif ampute d'abord cette phase.

Le sommeil paradoxal se caractérise par une activité cérébrale intense, proche de l'éveil, associée à une atonie musculaire complète — d'où son nom. C'est la phase des rêves les plus élaborés, et l'atonie est un mécanisme de protection qui empêche de les mettre en acte. Il occupe une part croissante des cycles de fin de nuit, et joue un rôle majeur dans la consolidation de la mémoire et la régulation émotionnelle.`],
    ["La dette", `Un adulte a besoin en moyenne de sept à neuf heures de sommeil. La moyenne masque des variations individuelles réelles, mais les personnes réellement capables de bien fonctionner avec cinq heures sont rarissimes — bien plus rares que celles qui le croient, les tests objectifs montrant chez ces dernières des performances dégradées qu'elles ne perçoivent plus.

C'est là l'effet le plus insidieux d'une dette de sommeil chronique : elle dégrade l'attention, le temps de réaction, la mémorisation et l'humeur, tout en altérant la capacité à s'en rendre compte. S'y ajoutent des effets métaboliques bien documentés — dérèglement des hormones de l'appétit, résistance à l'insuline, augmentation du risque cardiovasculaire — et un affaiblissement de la réponse immunitaire.

Le sommeil de récupération ne compense que partiellement : on rattrape assez bien le sommeil lent profond, beaucoup moins le reste, et une nuit longue le samedi n'annule pas cinq nuits courtes.`],
    ["Vivre à contretemps", `Le décalage horaire social désigne l'écart entre les horaires imposés en semaine et le rythme naturel du corps. Un adolescent, dont l'horloge se décale physiologiquement vers le tard à la puberté, est réveillé à sept heures pour un organisme qui en est au milieu de sa nuit ; il compense le week-end en dormant tard, ce qui décale encore l'horloge, et la semaine recommence. Le phénomène équivaut à traverser un ou deux fuseaux horaires chaque week-end, et il est associé à de moins bons résultats scolaires et à un risque accru de troubles de l'humeur. Plusieurs pays ont expérimenté un décalage des horaires scolaires du secondaire, avec des résultats favorables.

Le travail posté, et surtout le travail de nuit, pousse cette désynchronisation à l'extrême : l'horloge interne ne se recale jamais complètement, l'alternance des postes empêchant toute stabilisation. Il augmente les risques cardiovasculaires et métaboliques, et le travail de nuit a été classé cancérogène probable par le Centre international de recherche sur le cancer. Cela ne signifie pas qu'il faille le supprimer — beaucoup d'activités l'exigent — mais qu'il relève d'une surveillance médicale et d'une organisation des rotations qui ne sont pas partout appliquées.`],
  ],

  "sv2-agriculture-sols": [
    ["Un milieu vivant, pas un support", `Un sol est composé de minéraux issus de la roche mère, de matière organique, d'eau, d'air et d'organismes vivants. Cette dernière catégorie est décisive : une poignée de sol fertile contient plus d'organismes que la planète ne compte d'humains — bactéries, champignons, protozoaires, nématodes, acariens, vers.

Un sol n'est donc pas un support inerte où l'on plante, mais un écosystème complet dont la fertilité résulte d'une activité biologique. C'est ce qui distingue radicalement un sol d'un substrat, et ce qui explique qu'on ne le fabrique pas.

Sa formation est extraordinairement lente : il faut plusieurs centaines d'années pour former un centimètre de sol fertile, par altération de la roche et accumulation de matière organique. À l'échelle d'une vie humaine, un sol est une ressource non renouvelable — rapide à perdre, impossible à reconstituer.`],
    ["Ce qui retient la fertilité", `L'humus est la matière organique décomposée et stabilisée d'un sol : ce qui reste des débris végétaux et animaux après que les décomposeurs ont fait leur travail, sous forme de molécules complexes très résistantes.

Son rôle devient décisif lorsqu'il s'associe à l'argile pour former le complexe argilo-humique. Argile et humus portent tous deux des charges négatives, qui retiennent les ions nutritifs positifs — calcium, magnésium, potassium, ammonium — et les empêchent d'être emportés par la pluie tout en les laissant disponibles pour les racines. C'est ce complexe qui fait la différence entre un sol qui garde ce qu'on lui apporte et un sable qui laisse tout filer.

Il structure aussi le sol en agrégats, ménageant une porosité où circulent l'eau et l'air. La fertilité est donc autant une affaire de structure que de composition chimique — un sol riche mais compact nourrit mal.`],
    ["Comment on perd un sol", `L'érosion entraîne les particules par l'eau ou par le vent. Elle est massivement accélérée par le sol nu : une parcelle couverte de végétation perd des quantités négligeables, la même parcelle laissée nue en perd des tonnes par hectare et par an. C'est pourquoi les couverts végétaux intermédiaires et les haies sont devenus des enjeux agronomiques et non seulement paysagers.

Le tassement est une compaction qui réduit la porosité, donc la circulation de l'eau et de l'air : les racines ne descendent plus, l'eau stagne en surface et ruisselle. Il résulte du passage d'engins lourds, particulièrement sur sol humide, et se corrige mal — les couches profondes tassées peuvent le rester des décennies.

La salinisation accumule des sels jusqu'à rendre la terre stérile. Elle frappe surtout les zones irriguées en climat sec : l'eau d'irrigation contient toujours un peu de sel, elle s'évapore, le sel reste. Elle a ruiné des civilisations entières, en Mésopotamie notamment, et affecte aujourd'hui des surfaces considérables.

La désertification enfin désigne la dégradation des terres en zones sèches, souvent d'origine humaine — surpâturage, déboisement, mise en culture de terres fragiles. Le mot ne désigne pas l'avancée d'un désert existant mais l'apparition de conditions désertiques là où elles n'étaient pas.`],
    ["Un stock de carbone considérable", `Le ver de terre est l'indicateur le plus commode de la qualité biologique d'un sol : il ne survit ni au tassement excessif, ni à l'absence de matière organique, ni à certains traitements. Sa présence en nombre signale un sol fonctionnel. Son action est en outre directe — il ingère la terre, la mélange à la matière organique, creuse des galeries qui structurent et drainent. Darwin y a consacré son dernier livre, estimant que ces animaux avaient retourné toute la couche superficielle des terres britanniques.

Le fait le plus lourd de conséquences climatiques est ailleurs : les sols stockent environ deux à trois fois plus de carbone que l'atmosphère n'en contient, sous forme de matière organique. La conséquence est à double tranchant. Une pratique qui dégrade ce stock relâche du CO₂ en quantités considérables — le labour intensif et la mise en culture de prairies ont ainsi émis, historiquement, autant que certaines industries. Inversement, des pratiques qui l'augmentent séquestrent du carbone : c'est le fondement de l'initiative internationale visant une hausse annuelle de quatre pour mille du stock des sols agricoles, ordre de grandeur qui suffirait à compenser une part notable des émissions.`],
  ],

  "sv2-virus": [
    ["Vivant ou non ?", `Un virus est constitué au minimum d'un matériel génétique — ADN ou ARN — entouré d'une capside protéique, parfois d'une enveloppe lipidique empruntée à la cellule hôte. Il n'a ni métabolisme, ni ribosomes, ni moyen de produire de l'énergie.

Il ne se reproduit qu'en détournant la machinerie d'une cellule hôte : il y injecte son génome, qui fait fabriquer par la cellule ses propres protéines et ses copies. C'est ce qui le place à la frontière du vivant — il possède un patrimoine génétique et évolue par sélection naturelle, mais il ne fait rien tout seul.

Cette absence de métabolisme propre explique pourquoi les antibiotiques sont inefficaces contre les virus : ils ciblent des structures bactériennes — paroi, ribosome bactérien, synthèse de l'acide folique — que les virus ne possèdent pas. Prescrire un antibiotique pour une grippe ou un rhume n'apporte donc aucun bénéfice et entretient les résistances bactériennes. C'est l'un des messages de santé publique les plus répétés et les moins intégrés.`],
    ["Pourquoi certains mutent si vite", `Un virus à ARN a un génome fait d'ARN et non d'ADN. La différence est décisive : les enzymes qui copient l'ARN ne disposent pas des mécanismes de correction d'erreurs qui accompagnent la réplication de l'ADN. Le taux de mutation est donc des milliers de fois supérieur.

Il en résulte une évolution extrêmement rapide : le VIH, la grippe, les coronavirus et les entérovirus sont tous des virus à ARN, et tous posent le même problème — un vaccin ou un traitement ciblé peut être contourné en quelques saisons.

Un variant est une version du virus portant des mutations distinctives. La plupart n'ont aucune conséquence ; certaines modifient la transmissibilité, la sévérité ou la reconnaissance par les anticorps. Le suivi des variants par séquençage systématique, devenu routinier depuis 2020, est une capacité de surveillance entièrement nouvelle à cette échelle.`],
    ["D'où viennent les épidémies", `Une zoonose est une maladie transmissible de l'animal à l'humain. La majorité des maladies infectieuses émergentes en relèvent — grippes, VIH, Ebola, coronavirus, rage. Le mécanisme suppose un contact suffisant et une adaptation du virus à un nouvel hôte, ce que favorisent la déforestation, l'élargissement des zones d'élevage et le commerce d'animaux sauvages.

Un réservoir est une espèce hébergeant durablement un virus sans en être gravement affectée. Les chauves-souris jouent ce rôle pour de nombreux virus, en raison de particularités de leur système immunitaire liées au vol. Un réservoir rend l'éradication d'une maladie pratiquement impossible : on ne peut éliminer que les maladies strictement humaines, ce qui explique que la variole ait pu être éradiquée et pas la fièvre jaune.`],
    ["Les chiffres d'une épidémie", `Le taux de reproduction de base mesure le nombre moyen de personnes infectées par un malade dans une population entièrement non immunisée. En dessous de un, l'épidémie s'éteint ; au-dessus, elle croît. Ce n'est pas une constante du virus mais le produit d'une biologie et d'un comportement social — densité, contacts, ventilation —, ce qui explique qu'il varie d'un pays à l'autre et qu'on puisse agir dessus.

La période d'incubation est le délai entre l'infection et l'apparition des symptômes. Elle détermine la durée des quarantaines et la difficulté du traçage : plus elle est longue, plus le virus circule avant qu'on ne le sache.

Un porteur asymptomatique est infecté et parfois contagieux sans présenter de symptômes. C'est le facteur qui rend certaines épidémies impossibles à contenir par le seul isolement des malades — on ne peut isoler que ceux qu'on repère.

Le virus influenza, responsable de la grippe saisonnière, illustre ces mécanismes : ses mutations progressives imposent une révision annuelle du vaccin, et ses réassortiments entre souches humaines et animales, plus rares et plus brutaux, sont à l'origine des pandémies grippales du XXe siècle.`],
  ],

  "sv2-eau-potable": [
    ["La mesure de santé publique la plus efficace", `L'accès à l'eau potable et à l'assainissement a sauvé plus de vies que n'importe quel médicament. La chute de la mortalité infantile dans les villes européennes du XIXe siècle doit davantage aux réseaux d'égouts et à la filtration de l'eau qu'à toute la pharmacopée de l'époque — et l'épisode fondateur est l'enquête de John Snow à Londres en 1854, qui, en cartographiant les cas de choléra autour d'une pompe de Broad Street, établit la transmission hydrique avant même qu'on ne connaisse le vibrion responsable.

La chaîne de traitement commence par le dégrillage et la clarification : on retire les gros débris, puis les matières en suspension. Vient la coagulation-floculation, qui agglomère les particules fines — trop légères pour décanter seules — en flocons assez lourds pour tomber, grâce à un réactif qui neutralise leurs charges répulsives. Filtration sur sable et parfois sur charbon actif achèvent la clarification.`],
    ["Désinfecter, et le rester", `L'eau du robinet contient du chlore résiduel non pour désinfecter au moment du traitement — l'ozone ou les ultraviolets le font parfois mieux — mais pour maintenir une désinfection tout au long du réseau. Entre l'usine et le robinet, l'eau parcourt parfois des dizaines de kilomètres de canalisations pendant plusieurs jours, avec des risques de contamination par une fuite ou un retour d'eau. Le chlore garantit qu'aucune bactérie ne s'y développe.

C'est un arbitrage assumé : un léger goût contre une sécurité microbiologique continue. Les pays qui distribuent une eau sans résiduel désinfectant, comme les Pays-Bas, y parviennent au prix d'une exigence extrême sur l'étanchéité et le renouvellement des réseaux.`],
    ["Ce que devient l'eau usée", `Une station d'épuration traite les eaux usées avant leur rejet dans le milieu naturel. Après des étapes physiques — dégrillage, dessablage, déshuilage, décantation —, le cœur du traitement est biologique : des bactéries dégradent la matière organique dissoute, dans un bassin brassé et aéré où on les maintient en population dense.

Ce sont donc des bactéries qui font le travail, et la station n'est en réalité qu'un dispositif pour les héberger dans de bonnes conditions. D'où sa vulnérabilité : un rejet toxique en amont — solvant, biocide, métal — tue la flore et met la station hors service pendant des semaines. Des traitements complémentaires éliminent ensuite l'azote et le phosphore, responsables de l'eutrophisation.

Environ un tiers de la population mondiale n'a toujours pas accès à un assainissement géré en toute sécurité. C'est la statistique la plus lourde du domaine, et elle explique une part majeure de la mortalité infantile par diarrhées dans les pays à faible revenu.`],
    ["Produire de l'eau, protéger les ressources", `Le dessalement retire le sel de l'eau de mer pour produire de l'eau douce, principalement par osmose inverse : on force l'eau à traverser une membrane semi-perméable qui retient les sels, en appliquant une pression supérieure à la pression osmotique. Le procédé est énergivore et produit une saumure concentrée dont le rejet pose des problèmes locaux, mais il alimente désormais des pays entiers du Golfe et des régions méditerranéennes.

Un périmètre de protection de captage est une zone où les activités sont réglementées autour d'un point de prélèvement — épandage, stockage de produits, construction. C'est la mesure la plus économique de toute la filière : protéger la ressource coûte infiniment moins cher que traiter une eau dégradée, et la ville de New York a fait l'économie d'une usine de plusieurs milliards en achetant et protégeant les bassins versants qui l'alimentent.

Un polluant émergent est une substance récemment détectée dont les effets sont encore mal connus : résidus médicamenteux, hormones, composés perfluorés, microplastiques. Le mot « émergent » est trompeur — beaucoup étaient présents depuis longtemps, ce sont les instruments d'analyse qui les révèlent. Leur traitement exige des procédés complémentaires que la plupart des stations ne possèdent pas encore.`],
  ],

  "sv2-toxicologie": [
    ["La dose fait le poison", `Paracelse énonce au XVIe siècle le principe fondateur de la toxicologie : toute substance est un poison, seule la dose fait qu'une chose n'est pas un poison. L'eau, l'oxygène et le sel tuent à dose suffisante ; le venin de serpent et l'arsenic sont sans effet à dose assez faible.

La conséquence pratique est qu'aucune substance n'est « toxique » ou « inoffensive » dans l'absolu : la question est toujours celle de la dose et de l'exposition. C'est ce qui rend absurde tout raisonnement fondé sur la seule présence d'une substance, la chimie analytique détectant aujourd'hui des concentrations qui étaient invisibles hier.

La dose journalière admissible traduit ce principe en réglementation : c'est la quantité qu'une personne peut ingérer chaque jour toute sa vie sans risque appréciable. Elle est établie à partir de la plus forte dose sans effet observé chez l'animal, divisée par un facteur de sécurité important — typiquement cent — pour couvrir les différences entre espèces et entre individus.`],
    ["Là où le principe se complique", `Certains effets ne suivent pas une relation dose-réponse simple, et c'est là que la toxicologie classique atteint ses limites.

Un perturbateur endocrinien interfère avec le système hormonal, en imitant une hormone, en bloquant son récepteur ou en modifiant sa production. Or les hormones agissent à des concentrations infimes, et leur système de régulation est non linéaire : une faible dose peut produire un effet qu'une forte dose ne produit pas, ce qui contredit le postulat « plus la dose est élevée, plus l'effet l'est ». S'y ajoutent des fenêtres de vulnérabilité — vie fœtale, puberté — où une exposition brève a des conséquences durables.

L'effet cocktail désigne l'interaction entre plusieurs substances, dont les effets combinés diffèrent de la somme des effets isolés. L'évaluation réglementaire, conduite substance par substance, ne le capture pas — et une personne réelle est exposée à des centaines de composés simultanément. C'est l'une des principales critiques adressées au dispositif actuel, et l'un des chantiers ouverts.`],
    ["Classer le risque", `Le Centre international de recherche sur le cancer classe des agents selon le niveau de preuve de leur caractère cancérogène : groupe 1 pour les cancérogènes avérés, 2A pour les probables, 2B pour les possibles, 3 pour les non classables.

Cette classification est massivement mal comprise. Elle porte sur la force des preuves, non sur l'ampleur du risque. Le tabac et la charcuterie figurent tous deux au groupe 1 : cela signifie qu'il est établi que les deux causent des cancers, pas qu'ils en causent autant. Le risque attribuable au tabac est sans commune mesure. Confondre les deux dimensions conduit à des titres de presse absurdes et, plus grave, à une banalisation du risque réel.

Le principe ALARA, venu de la radioprotection, propose une réponse pragmatique : réduire l'exposition au niveau le plus bas raisonnablement possible, compte tenu des contraintes techniques et économiques. Il évite à la fois l'inaction et l'exigence irréaliste du risque nul.`],
    ["Ce que l'histoire a enseigné", `Le saturnisme est une intoxication au plomb, qui atteint le système nerveux et provoque chez l'enfant des troubles cognitifs irréversibles. Longtemps banalisé — canalisations, peintures, essence plombée, vaisselle —, il illustre la lenteur avec laquelle une exposition massive a été reconnue puis supprimée. Le retrait du plomb des carburants a produit une baisse mesurable de la plombémie de populations entières.

La maladie de Minamata révèle au Japon, à partir des années 1950, la toxicité du mercure : une usine chimique rejette du méthylmercure dans la baie, il se bioaccumule dans les poissons, et des milliers d'habitants développent des atteintes neurologiques sévères, y compris des enfants exposés pendant la grossesse. La reconnaissance officielle a demandé des décennies de lutte, et la convention internationale sur le mercure porte aujourd'hui ce nom.

L'amiante est un minéral fibreux dont les qualités d'isolation et de résistance au feu ont conduit à un usage massif. L'inhalation de ses fibres provoque des cancers, dont le mésothéliome, avec un délai de latence pouvant dépasser quarante ans. Sa dangerosité était documentée dès les années 1950 ; son interdiction en France date de 1997, et les décès continueront pendant des décennies. C'est le cas de référence du décalage entre le savoir scientifique et la décision publique.

Un polluant persistant, enfin, se dégrade très lentement dans l'environnement : le temps devient alors un facteur du risque, indépendamment de la dose émise. Une substance peu toxique mais éternelle finit par poser un problème qu'une substance très toxique et fugace ne pose pas.`],
  ],
};
