/** Cinéma et médias, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_CINEMA_MEDIAS: LotCours = {
  "cm-langage-cinematographique": [
    ["Cadrer", `L'échelle des plans se définit par la place du corps humain dans le cadre. Le plan d'ensemble montre un décor entier et les personnages en pied, situant l'action. Le plan moyen coupe à mi-cuisses, le plan rapproché à la poitrine, et le gros plan isole un visage ou un détail — c'est le plan de l'émotion et de l'information cachée.

L'angle compte autant que la distance. Une contre-plongée cadre de bas en haut et grandit le sujet, lui donnant puissance ou menace ; une plongée fait l'inverse et écrase. Ces effets ne sont pas des lois — un réalisateur peut les prendre à contre-emploi — mais des conventions que le spectateur a intégrées sans jamais les avoir apprises.`],
    ["Bouger et couper", `Un travelling est un déplacement de la caméra elle-même, sur rails, sur épaule ou sur véhicule : le point de vue se déplace dans l'espace. Un panoramique est une simple rotation de la caméra sur son axe : elle balaie sans se déplacer. La différence est perceptible, un travelling faisant varier les rapports entre les plans du décor.

Le montage impose ses figures. Le champ-contrechamp alterne deux plans opposés, typiquement pendant un dialogue. Le raccord dans l'axe change l'échelle du plan sans changer d'angle, procédé qui appuie une révélation. Le plan-séquence, à l'inverse, filme une séquence entière sans coupe : il affiche sa virtuosité et impose au spectateur la durée réelle.`],
    ["Entendre", `La bande-son se répartit en deux catégories qui gouvernent tout. Un son diégétique a sa source dans le monde du film : une radio que les personnages entendent, un bruit de pas. Un son extradiégétique n'existe que pour le spectateur, comme la musique d'accompagnement. Jouer sur la frontière — une musique qu'on croyait extérieure et qui sort en fait d'un poste dans la pièce — est un ressort courant.

Presque tous les sons d'un film sont recréés en studio : le bruitage, ou foley, du nom de son inventeur, consiste à refabriquer pas, froissements et chocs en synchronisation avec l'image, avec des objets qui n'ont souvent aucun rapport avec ce qu'on voit. Le son direct capté au tournage est le plus souvent inutilisable tel quel.`],
  ],

  "cm-hollywood-industrie": [
    ["Pourquoi la Californie", `Les studios se sont installés en Californie au début du XXe siècle pour trois raisons cumulées : un climat permettant de tourner en extérieur toute l'année, une lumière abondante à une époque où la pellicule était peu sensible, et l'éloignement de la côte Est, où Edison faisait valoir ses brevets avec agressivité. La distance rendait les poursuites judiciaires plus difficiles.

De là naît le système des studios : quelques majors contrôlent à la fois la production, la distribution et les salles, et tiennent acteurs, réalisateurs et techniciens sous contrat exclusif. Cette intégration verticale, très rentable, sera démantelée par la justice antitrust américaine à la fin des années 1940.`],
    ["Ce qu'on peut montrer", `De 1934 à 1968, le code Hays régit le contenu des films américains. Ce n'est pas une censure d'État mais une autocensure de la profession, adoptée pour devancer une réglementation publique : il proscrit la nudité, encadre la représentation du crime, interdit qu'un coupable prospère. Les scénaristes ont appris à contourner ses interdits par l'ellipse et le sous-entendu, ce qui a paradoxalement enrichi l'écriture.

La censure politique s'y ajoute après-guerre avec la liste noire : des artistes soupçonnés de sympathies communistes sont exclus des studios, certains travaillant sous pseudonyme pendant des années. Dans ce contexte naît le film noir, croisement des romans policiers américains et de l'esthétique expressionniste apportée par les cinéastes européens exilés.`],
    ["L'industrie contemporaine", `En 1975, Les Dents de la mer invente le blockbuster estival moderne : sortie simultanée dans des centaines de salles, campagne télévisée nationale, exploitation dérivée. Le modèle domine depuis, avec ses franchises et ses suites.

L'animation suit sa propre trajectoire : Walt Disney fonde son studio avec son frère Roy en 1923, et l'entreprise devient un empire ; Pixar produit en 1995 Toy Story, premier long métrage entièrement en images de synthèse. Quant aux récompenses, l'Oscar du meilleur film est remis aux producteurs, non au réalisateur — une distinction qui dit à qui appartient l'œuvre dans le système américain. En 2020, Parasite est devenu le premier film non anglophone à le remporter.`],
  ],

  "cm-television": [
    ["Le monopole et sa fin", `En France, la télévision a été un monopole d'État jusqu'en 1982. L'ORTF, créé en 1964, détient à lui seul la radio et la télévision publiques ; il est dissous en 1974 et éclaté en sociétés distinctes. La publicité de marque n'apparaît à l'antenne qu'en 1968, après de longs débats sur le financement.

La libéralisation transforme le paysage dans les années 1980 : création de chaînes privées, puis privatisation de TF1 en 1987, opération inédite d'une chaîne publique vendue au secteur privé. En 1992 naît Arte, chaîne culturelle franco-allemande à capitaux publics, diffusée dans les deux pays.`],
    ["Diffuser et mesurer", `La TNT, télévision numérique terrestre, a remplacé la diffusion analogique à la fin des années 2000 : le numérique permettant de faire passer davantage de chaînes dans la même bande de fréquences, l'offre gratuite est passée de six à une trentaine de chaînes.

L'audience est mesurée par Médiamétrie, à partir d'un panel de foyers équipés d'un boîtier. Ces chiffres déterminent les tarifs publicitaires, donc l'équilibre économique des chaînes privées : ils orientent la programmation bien plus que les jugements critiques. La conservation, elle, revient à l'INA, l'Institut national de l'audiovisuel, qui archive la radio et la télévision françaises et assure le dépôt légal des programmes.`],
    ["Formats et plateformes", `La téléréalité, apparue en France en 2001, filme des personnes non professionnelles dans un dispositif entièrement construit : le réel y est le matériau, non le résultat. Le format s'est décliné en dizaines de variantes et a durablement modifié l'économie des chaînes, ces programmes coûtant peu et fidélisant beaucoup.

Le streaming a ensuite fragmenté l'audience. Un service de vidéo à la demande par abonnement donne accès à un catalogue contre un paiement mensuel, sans grille ni horaire. L'Union européenne a réagi en imposant à ces plateformes une part minimale d'œuvres européennes dans leur catalogue, et une contribution au financement de la production dans les pays où elles opèrent.`],
  ],

  "cm-presse-journalisme": [
    ["Les agences", `Une agence de presse vend de l'information brute aux rédactions abonnées : elle n'a pas de lecteurs directs. L'Agence France-Presse, héritière de l'agence Havas fondée en 1835, est la plus ancienne agence mondiale encore en activité, aux côtés de Reuters et d'Associated Press.

Son produit est la dépêche : une information vérifiée, datée, sourcée, diffusée en continu, que chaque rédaction reprend, complète ou ignore. Ce système explique qu'un même fait apparaisse le même jour, dans les mêmes termes, dans des dizaines de médias : ils partagent la même source primaire.`],
    ["Écrire l'information", `Deux règles de métier structurent l'écriture. Les cinq W — qui, quoi, où, quand, pourquoi — listent les questions auxquelles une information doit répondre. La pyramide inversée place l'essentiel en tête d'article, les détails ensuite : le lecteur qui s'arrête après deux paragraphes a l'information principale, et le secrétaire de rédaction peut couper par la fin sans dénaturer.

Une source anonyme protégée est un informateur dont le journaliste connaît l'identité mais ne la révèle pas ; le secret des sources est protégé par la loi française. Le fact-checking, développé à partir des années 2000, consiste à vérifier systématiquement des déclarations publiques et des informations en circulation, et constitue désormais un genre à part entière.`],
    ["Le cadre", `En France, la carte de presse est un titre attestant l'exercice professionnel du journalisme, délivré par une commission paritaire : elle ne donne pas le droit d'exercer, mais atteste que le journalisme est l'activité principale et rémunérée du titulaire.

Deux enjeux dominent le débat contemporain. Le droit à l'oubli numérique permet à une personne de demander le déréférencement d'informations obsolètes la concernant, sans que le contenu soit effacé à la source : il met en tension vie privée et droit à l'information. La concentration des médias, c'est-à-dire le contrôle de plusieurs titres ou chaînes par un même groupe, pose la question du pluralisme. En face, les médias de service public sont financés par des fonds publics avec des missions définies par la loi, ce qui les protège du marché mais les expose au pouvoir politique.`],
  ],

  "cm-numerique-reseaux": [
    ["Comment un flux est trié", `Un flux de réseau social n'est pas chronologique : il est ordonné par un algorithme qui optimise l'engagement, c'est-à-dire le temps passé et les interactions. Ce critère n'est pas la véracité ni l'intérêt public : un contenu qui indigne engage souvent plus qu'un contenu mesuré, ce qui lui donne mécaniquement plus de visibilité.

Il en résulte des chambres d'écho : des espaces où l'on n'entend que des opinions semblables aux siennes, l'algorithme proposant ce qui a déjà retenu l'attention. Le phénomène est amplifié par un biais psychologique antérieur à internet, le biais de confirmation, qui pousse chacun à privilégier l'information confirmant ce qu'il croit déjà.`],
    ["Le faux et sa fabrication", `Une infox est une information fabriquée présentée comme vraie, souvent conçue pour circuler : titre saisissant, indignation, apparence de source. Sa vitesse de propagation dépasse en général celle des démentis.

L'hypertrucage, ou deepfake, franchit une étape : une vidéo ou un son synthétisés imitent une personne réelle avec un réalisme croissant. La détection technique existe mais court derrière la génération. Vérifier reste possible : recherche d'image inversée, examen des métadonnées, recoupement des sources primaires. C'est précisément l'objet de l'éducation aux médias et à l'information, enseignement qui vise à former des usagers capables d'évaluer ce qu'ils reçoivent plutôt que de leur dire quoi croire.`],
    ["L'économie de l'attention", `Le modèle dominant consiste à vendre l'attention des utilisateurs aux annonceurs, en exploitant les données collectées pour cibler la publicité. C'est ce qui explique la gratuité apparente de la plupart des services : le produit vendu n'est pas le service, c'est l'audience qualifiée.

Techniquement, un cookie est un petit fichier déposé sur l'appareil pour mémoriser une information — connexion, préférences, mais aussi suivi de navigation entre sites. Le référencement naturel désigne la position d'une page dans les résultats d'un moteur de recherche obtenue sans achat publicitaire, par opposition aux liens sponsorisés. Enfin, le cyberharcèlement — propos ou comportements répétés visant à nuire à une personne en ligne — est un délit en France, avec des circonstances aggravantes lorsque la victime est mineure.`],
  ],

  "cm-radio-podcast": [
    ["La TSF", `La télégraphie sans fil est mise au point à la fin du XIXe siècle par l'Italien Guglielmo Marconi, à partir des travaux de Hertz sur les ondes électromagnétiques. Il s'agit d'abord de transmettre du morse sans câble, notamment vers les navires ; la voix et la musique viendront ensuite.

En France, Radio Tour Eiffel émet régulièrement à partir du début des années 1920, suivie de stations privées et publiques. La radio devient en vingt ans un média de masse, et un instrument politique : le 18 juin 1940, l'appel du général de Gaulle est diffusé depuis Londres sur les ondes de la BBC. Très peu entendu ce soir-là, il doit son statut à sa reprise et à sa réécriture ultérieures.`],
    ["Ondes et normes", `La modulation d'amplitude fait varier l'intensité de l'onde porteuse ; la modulation de fréquence, la FM, fait varier sa fréquence. Cette dernière offre une bien meilleure qualité sonore et une plus grande résistance aux parasites, au prix d'une portée plus courte.

En France, la loi de 1981 met fin au monopole d'État sur la radiodiffusion et autorise les radios privées locales, longtemps appelées radios libres parce qu'elles émettaient auparavant dans l'illégalité. Depuis, le RDS transmet en parallèle du son des données comme le nom de la station et permet le suivi automatique de fréquence, et la DAB+ propose une diffusion numérique terrestre offrant plus de stations pour une même ressource hertzienne.`],
    ["Le son à la demande", `Le format MP3, mis au point dans les années 1990, compresse un fichier audio en supprimant ce que l'oreille perçoit mal : il divise le poids par dix environ et rend possible la diffusion de musique sur des connexions lentes. Il a autant bouleversé l'industrie musicale qu'aucune décision commerciale.

Le podcast natif désigne un programme sonore conçu pour l'écoute à la demande, sans diffusion hertzienne préalable — à distinguer du replay d'émissions de radio. Le son binaural, enfin, enregistre avec deux micros placés comme deux oreilles humaines, sur une tête artificielle : à l'écoute au casque, il restitue une spatialisation saisissante. La radio reste par ailleurs le média le plus accessible du monde : elle n'exige ni électricité stable, ni écran, ni lecture.`],
  ],

  "cm-jeu-video": [
    ["Des bornes aux consoles", `Pong, jeu d'arcade sorti en 1972, lance l'industrie du jeu vidéo grand public : deux raquettes, une balle, et un succès qui crée un marché. Des prototypes plus anciens existaient dans les laboratoires, mais c'est là que commence l'exploitation commerciale de masse.

L'expansion est brutalement interrompue en 1983 par un krach de l'industrie américaine : surproduction de titres médiocres, saturation des rayons, effondrement de la confiance. Le relais est pris par le Japon, où Nintendo relance le marché ; son plombier moustachu, Mario, était déjà apparu en 1981 dans Donkey Kong. En Union soviétique, un chercheur conçoit en 1984 Tetris, jeu d'assemblage de pièces qui tombent, dont les droits feront l'objet d'une bataille juridique restée célèbre.`],
    ["Ce que le médium a inventé", `Le jeu vidéo a développé des formes qui n'appartiennent qu'à lui. Le monde ouvert laisse le joueur explorer librement l'espace sans progression imposée, déplaçant la narration vers ce que le joueur choisit de faire. L'esport, pratique compétitive du jeu vidéo, remplit des salles et distribue des dotations comparables à celles de sports traditionnels.

Économiquement, deux évolutions structurent le secteur. Le jeu indépendant, développé sans le financement d'un grand éditeur, a été rendu viable par la distribution numérique. La microtransaction, achat de faible montant à l'intérieur d'un jeu, a créé des modèles où le jeu est gratuit et la monétisation continue — modèle très rentable et régulièrement critiqué pour sa proximité avec les mécaniques de jeu d'argent.`],
    ["Encadrer", `En Europe, le système PEGI classe les jeux par âge conseillé et signale par des pictogrammes la présence de violence, de langage grossier, de peur ou de jeu d'argent. C'est une autorégulation de la profession, reconnue par les autorités de plusieurs pays.

En France, le jeu vidéo a un statut juridique singulier : la Cour de cassation l'a qualifié d'œuvre complexe, à la fois logiciel et création audiovisuelle, ce qui lui applique un régime distributif selon les composantes. La question n'est pas théorique : elle détermine la rémunération des auteurs, le régime fiscal et les droits attachés à chaque contribution. L'industrie pèse aujourd'hui plus lourd que le cinéma et la musique enregistrée réunis.`],
  ],

  "cm-photographie-presse": [
    ["Photographier l'événement", `Le photojournalisme est le récit d'un événement par l'image, soumis aux règles de l'information : exactitude, contexte, absence de mise en scène. Il se distingue en cela de la photographie d'art, à qui rien n'est demandé de tel.

En 1947, des photographes fondent Magnum Photos, agence coopérative détenue par ses membres, pour garder la maîtrise de leurs droits et du choix de leurs sujets. Robert Capa, l'un de ses fondateurs, est célèbre pour ses images du débarquement de Normandie, dont la plupart furent perdues au développement — les rares survivantes, floues, doivent leur force autant à l'accident qu'au geste.`],
    ["Reconnaître et récompenser", `Le World Press Photo est le prix international de photojournalisme le plus connu, décerné chaque année à Amsterdam ; ses lauréats font l'objet d'expositions itinérantes mondiales. En France, le festival Visa pour l'image, à Perpignan, est le rendez-vous annuel de la profession.

Ces distinctions ont un rôle documentaire autant que professionnel : elles constituent, année après année, une mémoire visuelle des conflits et des crises, et elles rappellent le coût de ce travail — le photojournalisme est l'un des métiers de presse les plus dangereux.`],
    ["Ce qu'une image fait dire", `Une photographie d'actualité est un point de vue cadré, jamais un enregistrement neutre : ce qui est hors champ compte autant que ce qui est dedans. Le recadrage, coupe opérée après la prise de vue, peut modifier le sens d'une image sans rien y ajouter — resserrer sur un visage change une foule en individu isolé.

La légende sert de garde-fou : elle indique qui, quoi, où et quand, et crédite l'auteur. Une image sans légende vérifiable est une image dont on ne sait rien. Pour une image circulant en ligne, la vérification passe par la recherche d'image inversée, qui retrouve ses apparitions antérieures, et par l'examen des métadonnées, qui portent parfois date et appareil. Enfin, le droit encadre la diffusion : en France, le droit à l'image permet à chacun de s'opposer à la publication de son image, et l'architecte détient un droit d'auteur sur un bâtiment récent, ce qui limite la libre publication de ses photographies.`],
  ],

  "cm-publicite": [
    ["Ce que la loi encadre", `En France, la déontologie publicitaire relève de l'ARPP, l'Autorité de régulation professionnelle de la publicité : une autorégulation de la profession, qui édicte des recommandations et examine les campagnes avant diffusion télévisée.

La loi impose par ailleurs des limites. La loi Évin de 1991 encadre strictement la publicité pour l'alcool et interdit celle pour le tabac. La publicité comparative, qui cite explicitement un concurrent ou son produit, est légale depuis 1992 mais très encadrée : elle doit porter sur des caractéristiques vérifiables et ne pas dénigrer. Une pratique commerciale trompeuse — reposant sur des allégations fausses ou de nature à induire en erreur — est un délit.`],
    ["Les formes contemporaines", `Le placement de produit est l'intégration payante d'une marque dans une fiction ; il est autorisé en France depuis 2010 sous condition de signalement au téléspectateur.

Le marketing d'influence a fait l'objet d'une loi spécifique en 2023, qui définit l'influenceur comme une personne mobilisant son audience pour promouvoir des biens ou services contre rémunération, et lui impose de signaler tout contenu commercial. Le greenwashing, communication qui surestime l'engagement écologique d'un produit, relève lui de la pratique trompeuse lorsque l'allégation n'est pas justifiée.`],
    ["Mesurer et protéger un nom", `En ligne, l'efficacité se mesure au taux de conversion : la part des personnes exposées à une publicité qui accomplissent réellement l'action visée — achat, inscription, clic. C'est ce chiffre, et non l'audience brute, qui détermine la valeur d'un espace publicitaire.

Une marque déposée est un signe enregistré qui confère un monopole d'exploitation dans des classes de produits déterminées, pour dix ans renouvelables. Elle peut se perdre : la dégénérescence survient quand le nom devient le terme courant du produit et cesse d'être perçu comme une marque. Frigidaire, Thermos ou Escalator en ont fait les frais, ce qui explique la vigilance des titulaires à faire corriger les usages génériques de leur nom.`],
  ],

  "cm2-genres-cinema": [
    ["Un contrat implicite", `Un genre est un contrat implicite entre le film et son spectateur : en achetant son billet, celui-ci accepte un ensemble de conventions et attend qu'elles soient tenues — ou déjouées avec habileté. C'est pourquoi les genres évoluent par cycles, où l'imitation succède à l'invention avant qu'une parodie ne signale l'épuisement.

Le western est le genre le plus spécifiquement américain : il met en scène le mythe fondateur d'une nation, la frontière, la loi qui s'installe et la violence qui la précède. John Ford en est le réalisateur emblématique, avec ses paysages de Monument Valley et ses héros solitaires ; son œuvre a aussi accompagné, puis interrogé, la représentation des Amérindiens.`],
    ["Détourner et chanter", `Le western spaghetti est produit en Europe, principalement en Italie et en Espagne, dans les années 1960 : budgets réduits, décors andalous, héros ambigus et musiques de Morricone. Il désacralise le genre au moment même où le western américain s'essouffle, et son influence sur le cinéma d'action mondial est considérable.

La comédie musicale, à l'autre extrême, assume la convention la plus improbable du cinéma : des personnages se mettent à chanter et à danser au milieu du récit. Le genre culmine à Hollywood dans les années 1950. En France, Jacques Demy pousse le principe à sa limite en 1964 avec Les Parapluies de Cherbourg, film intégralement chanté, y compris les dialogues les plus ordinaires — et dont le sujet, la guerre d'Algérie et une grossesse non désirée, contraste violemment avec la forme.`],
    ["L'ombre et le suspense", `Le film noir se reconnaît à son fatalisme, sa ville nocturne, sa corruption généralisée et ses femmes dangereuses. Il naît du croisement entre le roman policier américain et les cinéastes européens exilés, qui apportent l'éclairage expressionniste. Ce n'est pas un genre revendiqué à l'époque : c'est la critique française qui l'a nommé après-coup, en découvrant les films américains bloqués par la guerre.

Hitchcock a formulé la distinction la plus utile de tout le cinéma de tension : le suspense suppose que le spectateur en sache plus que le personnage. Une bombe qui explose sans prévenir donne quinze secondes de surprise ; une bombe dont le spectateur connaît l'existence sous une table donne dix minutes de suspense. La différence ne tient pas à l'événement mais à la distribution de l'information.`],
    ["Filmer le réel", `Le documentaire est un film construit à partir du réel, avec un point de vue assumé — la formule importe, car l'idée d'un documentaire neutre est une illusion : cadrer, monter et sonoriser sont autant de décisions.

Nanouk l'Esquimau, de Robert Flaherty en 1922, est souvent cité comme le premier documentaire de long métrage ; il est aussi le premier à poser le problème, puisque plusieurs scènes y sont reconstituées et que le chasseur inuit y utilise des techniques déjà abandonnées. Quarante ans plus tard, le cinéma direct — ou cinéma vérité — tire parti des caméras légères et du son synchrone pour tourner sans éclairage ni mise en scène apparente, en pariant que la présence de la caméra finit par s'oublier. Le débat entre les deux écoles n'a jamais cessé.`],
  ],

  "cm2-economie-cinema": [
    ["Où va le prix d'un billet", `En France, le prix d'un billet de cinéma se répartit entre plusieurs acteurs : la salle en conserve une part, le distributeur une autre, le producteur touche le solde après remontée des recettes, et des taxes affectées sont prélevées — dont celle qui alimente le fonds de soutien géré par le CNC.

Ce dernier point est la singularité française : chaque entrée finance les films à venir. Le système est mutualiste et redistributif, puisqu'un blockbuster américain contribue au financement du cinéma d'auteur français. C'est ce mécanisme, plus qu'aucune subvention directe, qui explique le maintien d'une production nationale abondante.`],
    ["Financer avant de tourner", `Un film se finance largement avant d'exister. Le distributeur, intermédiaire qui met le film sur le marché et organise sa sortie, verse souvent un minimum garanti : une avance au producteur, qu'il récupérera sur les recettes. Le préachat par une chaîne de télévision fonctionne de même — la chaîne acquiert les droits de diffusion avant le tournage, et sa participation devient un pilier du budget.

En France, ces préachats sont en partie obligatoires : les diffuseurs doivent consacrer une part de leur chiffre d'affaires à la production d'œuvres, obligation étendue aux plateformes de streaming depuis 2021. Le crédit d'impôt cinéma complète le dispositif en encourageant les tournages sur le territoire, ce qui explique la concurrence entre pays et régions pour attirer les productions.`],
    ["Vendre, et compter", `Le marché du film de Cannes, qui se tient parallèlement au festival, est le principal lieu mondial où s'achètent et se vendent les droits territoire par territoire. Un film peut y être vendu sur la foi d'un scénario, d'un casting et de quelques minutes montées.

Le box-office classe les films selon leurs recettes ou leurs entrées ; les deux mesures diffèrent, puisque le prix des places varie. Un film ne devient rentable que bien après son passage en salles : les recettes de la vidéo à la demande, des ventes internationales, des diffusions télévisées et des produits dérivés s'étalent sur des années. C'est pourquoi un film peut faire un mauvais démarrage et gagner de l'argent, ou l'inverse.`],
    ["Le risque et la franchise", `Les studios misent sur les franchises parce qu'elles réduisent le risque : un univers déjà connu, un public acquis, une notoriété qui économise une part du budget marketing — lequel peut égaler le budget de production. Ce calcul explique la domination des suites et des adaptations dans les sorties à gros budget.

À l'autre bout, un film à budget indépendant est financé hors des grands studios, avec les contraintes et la liberté que cela suppose. Entre les deux, la chronologie des médias — qui fixe en France les délais entre la sortie en salle et les différentes exploitations — est régulièrement contestée par les plateformes, qui pratiquent ailleurs la sortie simultanée en salle et en streaming. Le conflit oppose deux modèles : l'exclusivité de la salle contre l'accès immédiat.`],
  ],
  "cm2-critique-cinema": [
    ["Décrire avant d'interpréter", `Analyser un film, c'est décrire ce qu'il fait avant d'expliquer ce qu'il signifie. La tentation inverse — partir du sens supposé et chercher ce qui le confirme — produit des commentaires qui pourraient s'appliquer à n'importe quel film.

La mise en scène désigne l'organisation de tout ce qui apparaît dans le cadre et de sa durée : placement des acteurs, décor, lumière, mouvements, choix du moment où l'on coupe. C'est le niveau où se décide l'essentiel, et il est presque toujours invisible au premier visionnage — ce qui explique qu'on ne commence à voir un film qu'à la deuxième vision.`],
    ["Ce qu'on ne voit pas", `Le hors-champ est ce qui existe dans l'univers du film sans être visible à l'écran. C'est l'un des outils les plus puissants du cinéma : un cri, une ombre, un regard dirigé hors du cadre suffisent à faire exister ce qu'on ne montre pas — et souvent avec plus de force. Les films d'horreur les plus efficaces reposent sur ce principe, et sur le renoncement à montrer.

La profondeur de champ, étendue de netteté dans l'image, sert elle aussi la hiérarchie du regard : une grande profondeur laisse plusieurs plans nets et permet au spectateur de choisir où regarder, une faible profondeur impose le sujet en isolant le reste dans le flou. Citizen Kane a rendu célèbre le premier usage, en composant des scènes où le premier plan et l'arrière-plan comptent également.`],
    ["Qui voit, qui raconte", `La focalisation narrative désigne le point de vue depuis lequel l'histoire est racontée : à quelles informations le spectateur a-t-il accès, et au su de quel personnage ? Le plan subjectif en est la forme la plus littérale — la caméra montre ce que voit un personnage — mais un film peut adopter le point de vue de quelqu'un sans jamais épouser son regard physique.

Le regard caméra, où un personnage fixe directement l'objectif, brise la convention : il désigne la présence du spectateur et rompt l'illusion. Longtemps proscrit dans le cinéma classique, il est devenu courant dans la comédie et la série contemporaine.`],
    ["Le temps et le montage", `Le rythme d'un film résulte de la combinaison de la durée des plans, des mouvements internes et du son. Un film aux plans longs n'est pas nécessairement lent, et un montage rapide peut produire de la monotonie : le rythme est une affaire de variation, pas de vitesse.

Deux figures de montage sont régulièrement confondues. Le montage alterné entretient deux actions simultanées en des lieux différents — la victime et les secours qui approchent — et fabrique le suspense. Le montage parallèle alterne deux actions sans simultanéité nécessaire, pour les mettre en rapport : deux époques, deux destins, deux milieux, dont la juxtaposition produit un sens que ni l'un ni l'autre ne contient. L'analyse universitaire cherche précisément à éviter de confondre le récit du film avec un jugement de valeur : résumer l'intrigue et dire qu'on a aimé ne constitue pas une analyse.`],
  ],

  "cm2-television-formats": [
    ["La grille", `Une grille de programmes est la planification hebdomadaire des émissions d'une chaîne. C'est un objet économique autant qu'éditorial : chaque case a un coût, une cible et un prix publicitaire, et la logique de la grille consiste à conduire le spectateur d'une émission à l'autre sans qu'il change de chaîne.

Le prime time désigne la tranche horaire de plus forte audience en soirée — en France autour de vingt-et-une heures, plus tard que dans la plupart des pays européens. C'est là que se placent les programmes les plus chers, financés par les tarifs publicitaires les plus élevés. La part d'audience, indicateur central, mesure la proportion des téléspectateurs présents devant leur poste qui regardent une chaîne donnée : elle ne dit donc rien du nombre absolu de spectateurs, ce qui explique qu'une part élevée puisse correspondre à peu de monde.`],
    ["Fabriquer une série", `Un pilote est le premier épisode d'une série, tourné pour tester le concept ou le vendre à un diffuseur ; dans le système américain, des dizaines de pilotes sont produits chaque année pour quelques séries retenues. Le showrunner en est le responsable créatif et exécutif : il tient l'écriture, la production et les arbitrages budgétaires — fonction née à la télévision américaine, où l'auteur, et non le réalisateur, est la figure centrale.

Une série feuilletonnante poursuit son intrigue d'un épisode à l'autre, par opposition à la série à épisodes bouclés. Le premier modèle fidélise mais interdit de prendre le train en marche ; le second se rediffuse dans n'importe quel ordre. Le streaming a fait basculer la production vers le feuilleton, puisqu'il supprime la contrainte de l'ordre de diffusion.`],
    ["Vendre des concepts", `Un format, en télévision, est un concept d'émission vendu et adapté d'un pays à l'autre : la mécanique, les règles, la scénographie et jusqu'au minutage sont codifiés dans une bible que l'acheteur doit respecter. Les grands jeux et télé-crochets internationaux fonctionnent ainsi, ce qui explique qu'une émission paraisse familière d'un pays à l'autre.

Ce commerce représente une part importante des revenus des groupes de production, et il inverse un rapport ancien : ce ne sont plus les programmes finis qui s'exportent, mais leurs plans de fabrication.`],
    ["Le direct et son contraire", `Le direct — diffusion simultanée à l'événement — reste la spécificité irremplaçable de la télévision : sport, élections, catastrophes, cérémonies. C'est le seul territoire que le visionnage à la demande n'a pas entamé, et c'est pourquoi les droits sportifs atteignent des montants sans rapport avec les autres programmes.

Tout le reste a basculé. La télévision de rattrapage met un programme à disposition après sa diffusion, et le binge-watching — regarder plusieurs épisodes à la suite — est devenu le mode de consommation dominant des séries. Ces usages ont désarmé la grille : quand le spectateur choisit son heure, l'enchaînement soigneusement construit d'une soirée ne détermine plus rien.`],
  ],

  "cm2-radio-formats": [
    ["Construire une antenne", `Une antenne radio se construit par tranches, autour d'un public et d'un moment d'écoute. La matinale, tranche d'information et de débat du début de matinée, est la plus stratégique : elle concentre la plus forte audience, fixe l'agenda de la journée et sert de vitrine à la station.

Une radio de format musical est bâtie autour d'une programmation ciblée, définie par un âge, un style et une époque. La rotation musicale — fréquence de repassage d'un titre à l'antenne — y est calculée avec précision : trop faible, l'auditeur ne reconnaît rien ; trop élevée, il sature. L'habillage d'antenne, ensemble des jingles, indicatifs et voix off, assure l'identification immédiate de la station, ce qui compte dans un média où l'on arrive toujours en cours de route.`],
    ["Informer en continu", `Le flash d'information est un bref bulletin d'actualité diffusé à heure fixe, généralement toutes les quinze ou trente minutes : c'est le format le plus contraint de la radio, où l'essentiel doit tenir en une minute. La revue de presse propose au contraire une sélection commentée d'articles parus le jour même, exercice où le choix des extraits vaut éditorial.

Ces formats reposent sur une contrainte propre au média : l'auditeur ne peut ni revenir en arrière ni parcourir des yeux. Tout doit être compréhensible immédiatement, à la première écoute, ce qui impose des phrases courtes, une information par phrase et des répétitions que l'écrit ne tolérerait pas.`],
    ["Les formes longues", `Le documentaire radiophonique construit un récit sonore à partir de témoignages, d'ambiances et de silences, sans images ni commentaire surplombant. La fiction radiophonique, elle, est une œuvre dramatique conçue pour l'écoute seule : elle a produit dans l'entre-deux-guerres et l'après-guerre des chefs-d'œuvre, et connaît aujourd'hui un regain avec le podcast.

Le podcast de conversation, format long fondé sur l'échange entre plusieurs voix, occupe une place croissante — il repose sur une durée qu'aucune grille de radio n'accepterait, et sur la fidélité d'un public restreint plutôt que sur l'audience de masse.`],
    ["Pourquoi la radio résiste", `La radio conserve une audience importante pour une raison simple et décisive : elle s'écoute en faisant autre chose. Conduire, cuisiner, travailler, marcher — aucun autre média ne s'accommode d'une attention partagée, et c'est ce qui la rend irremplaçable dans les temps morts de la journée.

Elle reste par ailleurs le média le plus accessible du monde : elle n'exige ni écran, ni lecture, ni connexion, ni électricité stable pour l'auditeur. Dans les situations de crise — catastrophe, coupure de réseau, zone isolée — c'est encore par elle que l'information passe.`],
  ],

  "cm2-desinformation": [
    ["Trois mots à distinguer", `La différence entre mésinformation et désinformation tient à l'intention. La mésinformation est une information fausse diffusée sans volonté de tromper — quelqu'un partage de bonne foi ce qu'il croit vrai. La désinformation est délibérée : celui qui la produit sait qu'elle est fausse et la diffuse pour obtenir un effet.

Une troisième catégorie complète le tableau : la malinformation, qui consiste à diffuser des informations vraies dans le but de nuire — publication de documents privés, révélation d'une orientation sexuelle, sortie d'un propos exact de son contexte. Elle est la plus difficile à combattre, puisqu'on ne peut pas la démentir.`],
    ["Pourquoi le faux circule mieux", `Une fausse information circule plus vite qu'un démenti : les travaux menés sur des millions de messages ont montré qu'elle se propage plus loin, plus vite et plus profondément, parce qu'elle est en moyenne plus surprenante et plus indignante — donc plus partagée.

Le démenti lui-même pose problème. L'effet de rebond décrit le fait qu'un démenti peut renforcer la mémorisation de la fausse information : à force de répéter l'énoncé pour le corriger, on le grave. Le biais d'ancrage aggrave le mécanisme, puisque la première information reçue influence durablement le jugement, même après correction. Les praticiens de la vérification recommandent donc de commencer par le fait exact, et de ne mentionner la rumeur qu'ensuite et brièvement.`],
    ["Les acteurs de la manipulation", `Une ferme à trolls est une organisation produisant massivement des contenus manipulatoires, avec des employés payés pour animer de faux comptes. Les bots — comptes automatisés publiant ou relayant des contenus — amplifient mécaniquement ces messages et fabriquent une apparence de popularité.

L'astroturfing en est l'objectif : simuler un mouvement populaire spontané là où il n'y a qu'une campagne organisée. Le terme vient d'une marque de gazon synthétique — de la fausse herbe pour un faux mouvement de terrain. La difficulté, pour l'observateur, est qu'un mouvement authentique et une campagne coordonnée produisent en surface les mêmes signaux.`],
    ["Vérifier, et légiférer", `Vérifier une image trouvée en ligne commence par une recherche d'image inversée, qui retrouve ses apparitions antérieures : la plupart des fausses images ne sont pas truquées, elles sont authentiques mais anciennes ou prises ailleurs. L'examen du contexte — ombres, panneaux, plaques, végétation, météo — permet de confirmer ou d'infirmer la localisation. Une source primaire, document ou témoin direct de l'événement, reste le seul socle solide.

Le droit français prévoit des sanctions contre la diffusion de fausses nouvelles, mais dans des cas précis et limités, notamment en période électorale avec la loi de 2018. La prudence du législateur s'explique : une définition large de la fausse information donnerait à une autorité le pouvoir de trancher ce qui est vrai, ce que peu de démocraties acceptent.`],
  ],

  "cm2-cinema-francais-2": [
    ["Le look, puis la banlieue", `Le cinéma français des années 1980 est marqué par ce que la critique a nommé le cinéma du look : images très travaillées, couleurs saturées, influence de la publicité et du clip, intrigues souvent secondaires. Beineix, Besson et Carax en sont les figures ; le terme fut d'abord péjoratif, ces films étant accusés de préférer la surface au propos.

En 1995, La Haine de Mathieu Kassovitz met en scène vingt-quatre heures dans une cité de banlieue après une bavure policière, en noir et blanc. Le film impose au cinéma français un sujet et des visages qu'il ignorait largement, et son succès ouvre une veine que trois décennies n'ont pas épuisée.`],
    ["Les grands succès populaires", `Le Fabuleux Destin d'Amélie Poulain, de Jean-Pierre Jeunet, sort en 2001 et connaît un succès mondial considérable, tout en suscitant en France un débat sur l'image de Paris qu'il donne — un quartier populaire nettoyé de sa diversité réelle.

Dix ans plus tard, Intouchables dépasse dix-neuf millions d'entrées en France, ce qui en fait l'un des plus grands succès de l'histoire du cinéma français, et le film français le plus vu à l'étranger. Ces réussites entretiennent un écosystème : leurs recettes alimentent, par la taxe sur les entrées, le fonds qui finance des films sans public garanti.`],
    ["Le cinéma d'auteur en prises avec le réel", `Entre les murs, de Laurent Cantet, obtient la Palme d'or en 2008 : tourné dans un collège avec des élèves jouant leur propre rôle, il montre une année de français dans une classe difficile, sans thèse ni résolution. C'est la première Palme française depuis vingt ans.

Robert Guédiguian filme depuis quarante ans les quartiers nord de Marseille avec la même troupe d'acteurs, dans un cinéma politique et populaire. Céline Sciamma a construit une œuvre sur l'adolescence et le regard, de Naissance des pieuvres à Portrait de la jeune fille en feu. En 2021, Julia Ducournau reçoit la Palme d'or pour Titane : elle est la deuxième femme à l'obtenir, vingt-huit ans après Jane Campion.`],
    ["Une exception qui tient", `Le cinéma français est l'un des rares en Europe à conserver une part de marché nationale élevée — les films français y font régulièrement autour de quarante pour cent des entrées, là où la plupart des pays européens sont sous quinze pour cent. Il produit également deux à trois cents films par an, chiffre sans équivalent sur le continent.

Cette situation ne tient pas au génie national mais à un dispositif : compte de soutien alimenté par les entrées, obligations d'investissement des diffuseurs, avance sur recettes, crédits d'impôt, réseau de salles art et essai. Des opérations comme la Fête du cinéma, qui propose chaque été un tarif réduit dans toutes les salles pendant plusieurs jours, complètent l'édifice du côté du public.`],
  ],
  "cm2-acteurs-jeu": [
    ["Plusieurs traditions, pas une méthode", `Il n'existe pas une méthode de jeu mais plusieurs traditions concurrentes, souvent incompatibles. La plus influente est le système élaboré par Constantin Stanislavski au Théâtre d'art de Moscou au début du XXe siècle : il propose à l'acteur de construire son personnage de l'intérieur, en travaillant sur la mémoire affective, les objectifs de la scène et la vérité du comportement.

Son influence est mondiale, mais elle a été transformée en route. L'Actors Studio, école new-yorkaise fondée en 1947 et dirigée par Lee Strasberg, en tire une méthode qui insiste sur la mobilisation des émotions personnelles de l'acteur. Elle a formé Brando, Dean, De Niro, Pacino, et durablement marqué le cinéma américain — au prix de dérives que plusieurs de ses élèves les plus célèbres ont critiquées.`],
    ["Montrer, ou devenir", `Brecht propose l'inverse exact. Dans son théâtre, l'acteur montre son personnage au lieu de s'y fondre : il garde une distance visible, comme s'il citait quelqu'un. Le spectateur n'est pas invité à s'identifier mais à juger. Cette distanciation appliquée au jeu produit une présence scénique très différente, où l'on perçoit simultanément l'interprète et le rôle.

Au cinéma, le jeu naturaliste cherche au contraire à reproduire les comportements ordinaires : hésitations, chevauchements de parole, gestes parasites. Ce qui passe pour du non-jeu est en réalité une technique, et l'échelle du gros plan y impose une retenue qu'aucune scène de théâtre ne demanderait.`],
    ["Ceux qui ne sont pas acteurs", `De nombreux cinéastes engagent des acteurs non professionnels : des personnes sans formation ni carrière, choisies pour ce qu'elles sont. Le néoréalisme italien en a fait un principe, et le procédé revient régulièrement — chez Bresson, qui appelait ses interprètes des modèles et leur demandait de ne surtout pas jouer, comme dans le cinéma social contemporain.

Le travail du réalisateur change alors de nature. La direction d'acteurs consiste à orienter le jeu — par l'indication, le nombre de prises, l'information donnée ou retenue, parfois la manipulation. Certains réalisateurs discutent des motivations, d'autres ne donnent que des consignes physiques ; les deux écoles produisent des résultats, et les acteurs n'ont pas tous les mêmes besoins.`],
    ["Les voix et les corps de remplacement", `Le doublage remplace les voix originales par des voix dans une autre langue. La France est l'un des pays où il est le plus systématique et le plus abouti, avec une tradition et des comédiens spécialisés attachés à des acteurs. La postsynchronisation est autre chose : l'acteur réenregistre lui-même ses propres dialogues après le tournage, pour corriger un son défectueux ou modifier une intention.

Une doublure remplace l'acteur pour certaines scènes — cascades, nu, plans lointains, mains. Depuis quelques années s'est ajoutée une fonction nouvelle : le coordinateur d'intimité, professionnel qui encadre le tournage des scènes intimes, en négocie les limites avec les interprètes et chorégraphie les gestes. Née après les affaires de harcèlement révélées à partir de 2017, la fonction est devenue courante sur les tournages internationaux.`],
  ],

  "cm2-histoire-presse": [
    ["Les commencements", `La Gazette, créée en 1631 par Théophraste Renaudot, médecin protégé de Richelieu, est le premier périodique français durable. Elle bénéficie d'un privilège royal et publie ce que le pouvoir souhaite voir publié — le roi et Richelieu y écrivaient parfois eux-mêmes. La presse naît donc en France sous tutelle, ce qui pèsera longtemps sur son histoire.

Il faut attendre le XIXe siècle pour qu'elle devienne un média de masse. La presse à un sou, apparue dans les années 1830, invente le modèle qui domine encore : baisser le prix de vente très en dessous du coût, élargir massivement le lectorat, et se financer par la publicité. Le roman-feuilleton, publié par épisodes en bas de page, sert d'appât — Dumas, Sue et Balzac y ont écrit, et le suspense de fin d'épisode était une nécessité commerciale.`],
    ["L'apogée et la chute", `La presse quotidienne française atteint son apogée de diffusion avant la Première Guerre mondiale : Paris compte alors des dizaines de quotidiens, et certains tirent à plus d'un million d'exemplaires. C'est le sommet, jamais retrouvé depuis.

La suite est une longue érosion, accélérée par chaque nouveau média — radio, télévision, internet. À la Libération, la presse est refondée : les titres ayant paru sous l'Occupation sont interdits, et de nouveaux journaux naissent. Le Monde est fondé en 1944 à la demande du général de Gaulle, qui voulait un quotidien de référence internationale. Libération, en 1973, naît d'un tout autre contexte, autour de Jean-Paul Sartre et Serge July, dans l'héritage de Mai 68.`],
    ["Le modèle qui se défait", `La crise du modèle économique de la presse combine deux chutes simultanées : celle des recettes publicitaires, captées par les plateformes numériques, et celle des ventes papier. Les petites annonces, longtemps très rentables, ont entièrement migré vers des sites spécialisés.

La réponse dominante est le modèle payant en ligne, qui conditionne l'accès aux articles à un abonnement. Il fonctionne pour un petit nombre de titres à forte identité et échoue pour les autres, ce qui accélère la concentration. Les agences de presse photographique, structures vendant des images d'actualité aux rédactions, ont subi une crise parallèle : la baisse des budgets et la disponibilité d'images amateurs ont laminé le métier de photojournaliste.`],
    ["L'argent public", `La France soutient sa presse par des aides publiques directes et indirectes : tarifs postaux réduits, taux de TVA super-réduit, aides au pluralisme pour les titres à faibles ressources publicitaires, aide au portage. L'ensemble représente plusieurs centaines de millions d'euros par an.

Ce soutien fait l'objet d'un débat permanent. Ses défenseurs y voient la condition du pluralisme dans un marché qui ne finance plus l'information. Ses critiques relèvent qu'il bénéficie majoritairement à des groupes détenus par de grandes fortunes, et qu'un financement public de la presse crée une dépendance dont l'indépendance éditoriale pourrait souffrir. Les deux arguments sont solides, ce qui explique que le dispositif soit réformé sans jamais être supprimé.`],
  ],

  "cm2-deontologie-journalisme": [
    ["Des règles sans loi", `La déontologie journalistique repose sur des chartes professionnelles, non sur la loi. La charte de Munich de 1971 énonce dix devoirs et cinq droits, et sert de référence européenne ; plusieurs rédactions y ajoutent la leur. Aucune n'a force contraignante : la sanction est professionnelle et réputationnelle, pas juridique.

Cette autorégulation est un choix, et une conséquence de la liberté de la presse : confier à une autorité publique le pouvoir de juger la qualité du travail journalistique reviendrait à lui donner un pouvoir de contrôle. Les conseils de déontologie journalistique, instances paritaires réunissant journalistes, éditeurs et représentants du public, examinent les manquements signalés et rendent des avis publics — sans pouvoir de sanction.`],
    ["Établir un fait", `La vérification croisée est la règle de base : une information n'est établie que confirmée par plusieurs sources indépendantes les unes des autres. Deux sources qui tiennent leur information de la même origine n'en font qu'une, difficulté fréquente et souvent sous-estimée.

Le off désigne un échange convenu avec une source comme non publiable en l'état. La pratique est nécessaire — elle permet de comprendre un dossier — et dangereuse, puisqu'elle laisse des acteurs orienter le traitement sans en assumer la responsabilité. Les termes doivent en être fixés avant l'entretien, et non après coup.`],
    ["Les tentations", `Un conflit d'intérêts survient lorsqu'un intérêt personnel du journaliste — financier, familial, politique — peut altérer son indépendance. La règle est la transparence et le retrait du sujet concerné. Le plagiat, reprise du travail d'un confrère sans citation, relève d'une autre faute : il s'est banalisé avec la vitesse du web et la reprise en cascade des mêmes dépêches.

L'indépendance éditoriale d'une rédaction est sa capacité à décider du contenu sans pression de l'actionnaire ou des annonceurs. Dans un paysage où la plupart des grands titres appartiennent à des groupes industriels, elle repose sur des dispositifs formels — sociétés de journalistes, clauses de conscience, chartes d'indépendance — dont l'efficacité dépend surtout du rapport de force réel.`],
    ["Ce qu'on doit aux personnes", `La présomption d'innocence impose de ne pas présenter un mis en cause comme coupable avant jugement : usage du conditionnel, mention de la présomption, prudence sur les images. Elle est régulièrement malmenée par la concurrence et par la pression du direct.

Le respect de la dignité interdit d'exposer une personne dans une situation dégradante sans nécessité informative : victimes, blessés, personnes en détresse ou en état de faiblesse. Le critère n'est pas l'existence de l'image mais sa nécessité pour comprendre. Enfin, le droit de suite, moins connu, veut qu'un média qui a relaté une mise en cause informe ses lecteurs de la suite donnée à l'affaire — un non-lieu ou une relaxe méritent la même visibilité que l'accusation, principe rarement respecté.`],
  ],

  "cm2-documentaire": [
    ["Un point de vue assumé", `Un documentaire construit un point de vue : la neutralité totale n'existe pas. Choisir où placer la caméra, quand la lancer, qui filmer et surtout que garder au montage sont autant de décisions qui orientent le sens. Les documentaristes les plus rigoureux ne prétendent pas à l'objectivité mais à l'honnêteté — annoncer d'où l'on parle.

Le documentaire de création désigne les films à écriture et point de vue affirmés, par opposition au reportage informatif. En France, la distinction a des effets concrets : elle conditionne l'accès à certains financements et à certaines cases de diffusion.`],
    ["Les outils du genre", `La voix off documentaire est un commentaire extérieur qui guide la lecture des images. C'est l'outil le plus puissant et le plus discuté : elle peut expliquer ce que l'image ne montre pas, ou imposer une interprétation à des images qui en admettraient d'autres. Toute une école du documentaire s'en passe volontairement.

La reconstitution rejoue une scène pour illustrer un fait passé dont il n'existe pas d'images. Elle est légitime si elle est signalée, trompeuse sinon. Le documentaire d'archives, lui, se construit entièrement à partir d'images existantes : le travail y est celui du montage et de la recherche, et pose la question du contexte d'origine des images réemployées.`],
    ["L'éthique du tournage", `La question éthique centrale du documentaire est le consentement éclairé des personnes filmées : comprennent-elles ce qu'elles acceptent, savent-elles où le film sera vu, mesurent-elles ce qu'un montage peut faire dire ? Un accord signé avant le tournage ne garantit pas que la personne ait compris ce à quoi elle s'engageait.

Le cas d'Être et avoir, documentaire de Nicolas Philibert sorti en 2002 sur une classe unique rurale, l'a illustré publiquement : après le succès du film, l'instituteur filmé a engagé une procédure contre le réalisateur, estimant avoir droit à une part des recettes. Il a été débouté, mais l'affaire a durablement marqué la profession et conduit à revoir les pratiques contractuelles.`],
    ["Les formes et leur diffusion", `Le documentaire animalier constitue un genre à part, avec ses contraintes propres : mois d'attente, matériel spécialisé, et une tentation permanente de la narration anthropomorphe. Le film ethnographique naît d'une démarche d'anthropologie, avec l'exigence scientifique correspondante. Le webdocumentaire propose une navigation non linéaire conçue pour internet, où le spectateur choisit son parcours — forme qui a beaucoup promis dans les années 2010 et peu tenu.

La diffusion en salle reste difficile : le public y est plus restreint, les budgets de promotion faibles, et les exploitants réservent peu de séances. La télévision et les plateformes constituent donc le débouché principal, ce qui pèse sur les formats — durée standardisée, structure imposée, voix off souvent exigée.`],
  ],

  "cm2-education-medias": [
    ["Chercher plutôt que retenir", `Savoir chercher une information est devenu aussi important que la mémoriser. Le déplacement est considérable pour l'école : quand tout est accessible, la compétence rare n'est plus l'accès mais l'évaluation — distinguer une source fiable d'une source qui ne l'est pas, et repérer ce qui manque.

En France, le CLEMI, centre de liaison de l'enseignement et des médias d'information, est l'organisme chargé de l'éducation aux médias dans l'enseignement public. Il forme les enseignants, produit des ressources et organise chaque année la Semaine de la presse à l'école, opération qui met des milliers de titres à disposition des classes et fait entrer des journalistes dans les établissements.`],
    ["Faire pour comprendre", `Le journal scolaire — média réalisé par les élèves d'un établissement — reste l'outil le plus efficace de cette éducation, parce qu'il fait éprouver les contraintes du métier : vérifier avant d'écrire, choisir un angle, tenir un délai, assumer publiquement ce qu'on publie. Un élève qui a dû corriger une information fausse dans son propre journal comprend mieux qu'un cours ne l'explique.

Le fact-checking pédagogique fonctionne sur le même principe : la classe vérifie ensemble une information réellement circulante, avec les outils du métier. L'objectif n'est pas d'apprendre à repérer les fausses nouvelles — la liste change chaque semaine — mais d'acquérir un réflexe : d'où vient cela, qui le dit, comment le sait-il ?`],
    ["Les compétences visées", `La compétence prioritaire est l'esprit critique face aux informations reçues, à ne pas confondre avec le scepticisme généralisé : douter de tout revient au même que tout croire, puisque cela empêche de hiérarchiser. Une source fiable est identifiable, compétente sur le sujet et vérifiable — trois critères qui se contrôlent en quelques minutes.

S'y ajoutent des compétences pratiques : reconnaître un contenu sponsorisé, qui doit porter une mention obligatoire de partenariat ou de publicité, et comprendre son identité numérique, c'est-à-dire l'ensemble des traces laissées en ligne, dont beaucoup sont involontaires et durables. Le droit à l'image d'un mineur est renforcé et exige l'accord des titulaires de l'autorité parentale, y compris quand ce sont eux qui publient.`],
    ["Pas seulement à l'école", `L'éducation aux médias concerne aussi les adultes, et pas par condescendance envers les jeunes : les compétences requises évoluent avec les technologies et les usages, et rien ne garantit qu'une formation reçue à quinze ans reste opérante à cinquante. Les études sur le partage de fausses informations montrent d'ailleurs que les publics les plus âgés y sont souvent plus exposés.

La difficulté commune tient à ce que l'obstacle n'est presque jamais l'ignorance mais l'adhésion : on partage ce qui confirme ce que l'on pense déjà. Aucune formation technique ne suffit à contrer ce mécanisme — d'où l'insistance actuelle sur la connaissance de ses propres biais plutôt que sur les seules méthodes de vérification.`],
  ],
  "cm2-cinema-technique-projection": [
    ["Vingt-quatre images", `La vitesse de vingt-quatre images par seconde s'est imposée avec le parlant, pour une raison technique : il fallait une vitesse de défilement suffisante et surtout constante pour que le son enregistré sur la pellicule soit restitué correctement. Le muet tournait à des cadences variables, souvent plus basses — ce qui explique l'accéléré caractéristique des vieux films projetés à vitesse moderne.

Le format d'image est le rapport entre la largeur et la hauteur de l'image projetée. Le cinéma en a changé plusieurs fois, notamment dans les années 1950 pour se distinguer de la télévision : le CinemaScope, procédé anamorphique, comprime l'image à la prise de vue et la rétablit à la projection avec une lentille, ce qui permet un écran très large sans changer la pellicule.`],
    ["La bascule numérique", `Le passage au numérique a fait disparaître la copie physique en pellicule en quelques années : en France, la conversion des salles s'est faite pour l'essentiel entre 2011 et 2013. Une transition d'une rapidité rare, financée en partie par une contribution des distributeurs, qui économisaient le coût des copies.

Le DCP est le fichier numérique standardisé servant à la projection en salle : il arrive sur un disque dur ou par satellite, accompagné d'une clé de déchiffrement limitée dans le temps et à une salle donnée. Cette mécanique a supprimé le transport des bobines, mais aussi la possibilité, pour un exploitant, de garder une copie et de la projeter quand il veut.`],
    ["Les salles françaises", `Une salle art et essai est classée par le CNC pour la qualité de sa programmation — proportion de films recommandés, travail d'animation, séances scolaires — et perçoit à ce titre un soutien financier. Le dispositif, unique en Europe par son ampleur, explique la survie d'un réseau de petites salles dans des villes moyennes.

À l'autre bout se trouvent les multiplexes, complexes de nombreuses salles sur un même site, apparus en France dans les années 1990. Ils ont fait remonter la fréquentation en offrant confort et choix, tout en concentrant les entrées sur un petit nombre de films : les deux effets sont réels et rendent leur bilan difficile à trancher.`],
    ["Entendre et voir autrement", `Le son multicanal répartit la diffusion sur plusieurs enceintes disposées autour et au-dessus du public, ce qui permet de placer un son dans l'espace de la salle. Les formats immersifs les plus récents traitent chaque son comme un objet dont la position est calculée par le processeur en fonction de la salle.

Deux dispositifs d'accessibilité se sont généralisés. L'audiodescription ajoute une piste sonore qui décrit l'action, les décors et les gestes aux spectateurs déficients visuels, dans les silences des dialogues. Le sous-titrage pour sourds et malentendants ne se contente pas de transcrire les dialogues : il identifie les locuteurs par des couleurs et signale les bruits significatifs. Les deux sont obligatoires pour bénéficier de certains financements publics, ce qui a fait passer leur présence de l'exception à la règle.`],
  ],

  "cm3-cinema-italien": [
    ["Le néoréalisme", `À la sortie de la guerre, l'Italie n'a plus de studios utilisables, plus de pellicule et plus d'argent. De cette pénurie naît une esthétique : tourner dans la rue, en lumière naturelle, avec des acteurs non professionnels et des histoires ordinaires.

Rossellini tourne Rome ville ouverte dans une capitale à peine libérée, parfois avec des chutes de pellicule achetées au marché noir. De Sica réalise Le Voleur de bicyclette, où un ouvrier cherche dans Rome le vélo volé sans lequel il perdra son emploi : rien de plus, et c'est l'un des plus grands films de l'histoire. Le rôle principal est tenu par un ouvrier réel, choisi pour sa démarche.`],
    ["Rire des choses graves", `La comédie à l'italienne traite les problèmes sociaux sur un mode comique et amer : divorce impossible, mafia, misère, arrivisme, conformisme. Elle ne console pas — ses fins sont souvent cruelles — et sa force tient à ce mélange que peu de cinémas ont su tenir.

Le Fanfaron, de Dino Risi, en est le sommet : un road movie où un jeune homme timide se laisse entraîner par un vantard exubérant pendant deux jours, et qui s'achève par une brutalité que rien n'annonçait. Le genre a fourni à l'Italie ses plus grands acteurs — Gassman, Sordi, Mastroianni, Tognazzi — et une manière de parler de son pays sans jamais faire la leçon.`],
    ["Les grands auteurs", `Michelangelo Antonioni filme dans les années 1960 l'incommunicabilité : des personnages aisés qui n'arrivent ni à se parler ni à se quitter, dans des architectures modernes où l'espace vide occupe l'écran. Ses films déroutent parce qu'il n'y arrive presque rien, et c'est le sujet.

Luchino Visconti, aristocrate et communiste, adapte Le Guépard de Lampedusa avec des moyens considérables, pour raconter la fin d'un monde auquel il appartenait. Pier Paolo Pasolini, lui, est autant poète, romancier et essayiste que cinéaste : ses films mêlent sacré, sous-prolétariat romain et provocation politique. Son assassinat en 1975 n'a jamais été entièrement élucidé.`],
    ["La musique et la nostalgie", `Ennio Morricone a signé les musiques de plus de quatre cents films, du western spaghetti au cinéma d'auteur : sifflements, guimbardes, voix de soprano, instruments détournés. Son travail a fait de la musique de film un élément narratif à part entière, au point que certains thèmes sont plus connus que les films.

Deux films récents ont porté l'image du cinéma italien à l'étranger. Cinema Paradiso, de Giuseppe Tornatore, raconte la nostalgie d'un cinéma de village et de son projectionniste ; La vie est belle, de Roberto Benigni, traite la déportation sur le mode du conte, un père inventant un jeu pour protéger son fils. Le second a suscité un débat sérieux sur les limites de la fiction face à la Shoah — débat qui n'a pas de réponse consensuelle.`],
  ],

  "cm3-cinema-asiatique": [
    ["Le Japon", `Yasujirō Ozu filme la famille japonaise avec une grammaire propre : caméra fixe posée très bas, à hauteur d'un homme assis sur un tatami, refus des mouvements d'appareil, plans de transition sur des couloirs vides ou des toits. Ses films racontent presque toujours la même chose — des parents et des enfants qui s'éloignent — et cette répétition assumée fait leur profondeur.

Akira Kurosawa occupe l'autre pôle : ampleur, mouvement, influence occidentale revendiquée. Rashômon raconte un même événement selon quatre versions incompatibles, et a donné son nom à un effet étudié en psychologie. Les Sept Samouraïs a inspiré Les Sept Mercenaires, western américain, dans un aller-retour éclairant puisque Kurosawa s'inspirait lui-même de John Ford.`],
    ["La Corée et Taïwan", `Le cinéma sud-coréen s'est imposé mondialement en deux décennies. Bong Joon-ho remporte la Palme d'or en 2019 avec Parasite, puis l'Oscar du meilleur film l'année suivante — premier film non anglophone à l'obtenir. Son cinéma mêle genre populaire et critique sociale frontale, avec des ruptures de ton que le cinéma occidental s'autorise rarement.

À Taïwan, Hou Hsiao-hsien filme l'histoire de son île en longs plans fixes et en ellipses, avec une exigence qui lui a valu une reconnaissance critique plus qu'un large public. Ces deux cinémas ont en commun d'avoir émergé au moment de démocratisations politiques, ce qui n'est pas une coïncidence.`],
    ["La Chine et l'Inde", `Zhang Yimou appartient à ce qu'on appelle la cinquième génération chinoise, celle formée après la Révolution culturelle. Épouses et Concubines, avec ses couleurs saturées et sa structure implacable, décrit l'enfermement des femmes dans une maison de maître — et fut interdit un temps en Chine.

En Inde, Satyajit Ray est reconnu internationalement pour la trilogie d'Apu, qui suit un garçon bengali de l'enfance à l'âge adulte, dans une veine proche du néoréalisme. Il est resté longtemps l'exception face au cinéma commercial indien, dont la caractéristique la plus visible est l'intégration systématique de séquences chantées et dansées — non comme intermèdes, mais comme éléments du récit, souvent chargés de dire ce que les personnages ne peuvent pas exprimer autrement.`],
    ["L'Iran", `Abbas Kiarostami filme souvent des enfants et brouille délibérément la frontière entre documentaire et fiction : ses films montrent des acteurs non professionnels jouant leur propre rôle, des tournages dans le tournage, des scènes réelles insérées dans la fiction. Cette économie de moyens répondait aussi à la censure — filmer des enfants et des routes de campagne attirait moins l'attention.

Jafar Panahi, son ancien assistant, a été condamné à ne plus tourner ni écrire de scénarios, ni quitter le pays. Il a continué malgré tout, tournant chez lui, dans un taxi, sur un téléphone, et faisant sortir ses films clandestinement — l'un d'eux, dit-on, sur une clé cachée dans un gâteau. Son cas illustre une réalité du cinéma iranien : une créativité formelle largement née de la contrainte politique.`],
  ],
};
