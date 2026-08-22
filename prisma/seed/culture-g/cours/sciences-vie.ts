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
};
