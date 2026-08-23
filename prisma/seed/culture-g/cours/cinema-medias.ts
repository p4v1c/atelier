/** Cinéma et médias, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_CINEMA_MEDIAS: LotCours = {
  "cm-langage-cinematographique": [
    ["Cadrer", `L'échelle des plans se définit par la place du corps humain dans le cadre. Le plan d'ensemble montre un décor entier et les personnages en pied, situant l'action. Le plan moyen cadre le personnage en entier, le plan américain le coupe à mi-cuisses, le plan rapproché à la poitrine, et le gros plan isole un visage ou un détail — c'est le plan de l'émotion et de l'information cachée.

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

  "cm3-television-histoire-monde": [
    ["Deux modèles fondateurs", `Les modèles télévisuels nationaux ont longtemps opposé service public et modèle commercial. Le premier est incarné par la BBC britannique, financée par une redevance payée par les foyers équipés : indépendance vis-à-vis des annonceurs, obligations de qualité, contrôle par une charte. Le modèle a été copié dans toute l'Europe.

Le second domine historiquement la télévision américaine : financement par la publicité, concurrence entre réseaux, programmes conçus pour maximiser l'audience. Un network américain est un réseau national qui diffuse via des stations affiliées locales, chacune insérant ses propres écrans publicitaires — structure qui explique le découpage des programmes américains en segments réguliers.`],
    ["Le câble change la donne", `La télévision par câble, diffusion par réseau filaire souvent payante, a brisé le monopole des trois grands réseaux américains à partir des années 1980. Financée par abonnement plutôt que par publicité, elle n'a plus besoin de plaire à tout le monde : elle peut viser un public restreint et exigeant.

C'est ce qui a permis à HBO de transformer la fiction télévisée dans les années 2000, avec des séries longues, adultes et coûteuses, sans coupures publicitaires ni contrainte de format. Le slogan de la chaîne — ce n'est pas de la télévision — résumait le pari. La même logique a produit CNN en 1980, première chaîne d'information continue, qui a imposé le direct permanent et changé le rythme de l'information mondiale.`],
    ["D'autres voix", `Al Jazeera, lancée en 1996 depuis le Qatar, a introduit une couverture du monde arabe qui ne dépendait ni des chaînes occidentales ni des télévisions d'État de la région. Sa version anglophone a élargi son audience, et son statut ambigu — chaîne influente financée par un émirat — nourrit un débat permanent sur son indépendance.

En Europe, les télévisions publiques partagent un financement public assorti d'obligations de service public : information, culture, éducation, représentation de la diversité. Elles coopèrent au sein de l'Eurovision, qui n'est pas d'abord un concours de chansons mais un réseau d'échange de programmes et d'images entre télévisions publiques européennes — ce sont ses infrastructures qui permettent à un journal télévisé de diffuser des images tournées ailleurs.`],
    ["La concurrence mondiale", `Les plateformes mondiales ont bouleversé cet équilibre : elles concurrencent les chaînes nationales sur les audiences, sur les talents et sur les droits, avec des budgets sans commune mesure. Un scénariste ou un acteur national peut désormais travailler pour un diffuseur mondial sans quitter son pays.

Les réponses publiques ont été réglementaires : obligations d'investissement dans la production locale, quotas d'œuvres européennes dans les catalogues, contribution au financement de la création. Elles ont partiellement fonctionné — les plateformes produisent aujourd'hui beaucoup en Europe — sans résoudre la question de fond : qui décide de ce qui est produit, et selon quels critères.`],
  ],

  "cm3-photographie-mode": [
    ["Une image entièrement fabriquée", `L'image de mode est entièrement construite, du casting à la retouche. Rien n'y est laissé au hasard : le choix du mannequin, le lieu, la lumière, la posture, le stylisme, et enfin le traitement numérique. Elle ne documente pas un vêtement, elle fabrique un imaginaire auquel le vêtement sera associé.

C'est ce qui la distingue radicalement de la photographie documentaire, et ce qui explique qu'elle emploie des moyens considérables pour une image destinée à être vue quelques secondes. Une campagne publicitaire visuelle est un ensemble cohérent d'images diffusées sur plusieurs supports — presse, affichage, réseaux — avec une déclinaison calculée pour chaque format.`],
    ["Trois regards", `Richard Avedon a marqué à la fois la mode et le portrait au XXe siècle : il sort les mannequins du studio, les met en mouvement, puis revient à des fonds blancs implacables pour ses portraits, où le moindre défaut devient un trait de caractère.

Helmut Newton impose dans les années 1970 des mises en scène provocantes, souvent en noir et blanc, où le rapport de pouvoir et le regard sont le sujet — travail admiré et durement critiqué, et qui continue de faire débat. Peter Lindbergh, à l'inverse, contribue dans les années 1990 à imposer un style plus naturel : peu de maquillage, noir et blanc, refus de la retouche lourde, mannequins photographiées de près et sans artifice.`],
    ["Retoucher, et le dire", `La retouche numérique est devenue systématique dans la photographie de mode : correction de peau, modification de silhouette, recomposition de l'image à partir de plusieurs prises. Le débat porte moins sur son existence — la retouche argentique existait déjà — que sur son ampleur et sur son effet.

La France a légiféré : depuis 2017, une mention photographie retouchée est obligatoire sur les images publicitaires dont la silhouette du mannequin a été modifiée, sous peine d'amende. La mesure vise les troubles du comportement alimentaire chez les adolescentes ; son efficacité réelle est discutée, mais elle a installé l'idée que ces images relèvent d'une information du public.`],
    ["Les droits sur l'image", `Le droit à l'image du mannequin est encadré par un contrat qui définit précisément la durée d'exploitation, le territoire et les supports autorisés : une image achetée pour une campagne presse en France pendant un an ne peut pas être réutilisée cinq ans plus tard sur un affichage mondial sans nouvel accord et nouvelle rémunération.

Une banque d'images est un catalogue de photographies sous licence pour un usage commercial, avec des tarifs selon l'usage. Elle a transformé le métier : beaucoup d'images publicitaires ne sont plus commandées mais achetées sur catalogue, ce qui pèse sur les revenus des photographes. Le placement de marque, intégration visible d'un produit dans un contenu, prolonge cette logique en insérant la publicité dans ce qui n'en a pas l'air.`],
  ],
  "cm3-radio-france": [
    ["Trois familles de stations", `La radio française combine service public, réseaux privés et radios associatives — répartition héritée de la loi de 1981 qui a mis fin au monopole d'État.

Radio France, l'entreprise publique, compte sept chaînes nationales aux identités très distinctes : France Inter, généraliste ; France Info, information continue ; France Culture, consacrée à la création et au savoir ; France Musique ; Fip, qui diffuse de la musique sans animation parlée, avec une programmation éclectique devenue culte ; Mouv' ; et le réseau ici, anciennement France Bleu, composé de stations locales de service public implantées dans les régions.`],
    ["Le secteur privé et ses origines", `RTL est la plus ancienne des grandes stations généralistes privées françaises. Comme Europe 1 et RMC, c'est historiquement une radio dite périphérique : elle émettait depuis l'étranger — Luxembourg, Sarre, Monaco — précisément pour contourner le monopole d'État français sur la radiodiffusion, qui interdisait toute station privée sur le territoire.

Cette situation a duré jusqu'en 1981. Elle explique une singularité du paysage français : les grandes stations privées se sont construites hors du pays, avec des capitaux et des implantations étrangères, avant de devenir des acteurs centraux de la vie médiatique nationale.`],
    ["Les radios associatives", `Une radio associative de catégorie A est une radio locale non commerciale, dont les ressources publicitaires sont plafonnées et qui bénéficie en contrepartie d'un fonds de soutien à l'expression radiophonique, alimenté par une taxe sur la publicité des autres médias.

Ce dispositif fait vivre plusieurs centaines de radios en France : radios de quartier, radios communautaires, radios scolaires, radios thématiques. Leur audience individuelle est faible, leur fonction sociale considérable — elles constituent souvent le seul média de proximité dans des territoires que la presse locale a quittés.`],
    ["Écouter, et mesurer", `La radio se distingue en France par un usage très spécifique : une écoute majoritairement en direct, et souvent en voiture. C'est ce qui explique la survie du direct dans un paysage où tout le reste est passé à la demande — l'auditeur qui conduit ne choisit pas un programme, il allume.

Le podcast natif, conçu directement pour l'écoute à la demande, s'est développé en parallèle sans cannibaliser cette écoute. La mesure d'audience, elle, repose sur une enquête déclarative : des dizaines de milliers d'entretiens où les personnes reconstituent leur écoute de la veille. La méthode a ses limites — la mémoire est faillible, les stations très écoutées sont surdéclarées — mais aucune alternative technique n'a réussi à s'imposer.`],
  ],

  "cm3-medias-numeriques": [
    ["Des médias sans papier", `Un média pure player existe uniquement en ligne, sans édition imprimée. Le modèle a permis l'apparition de titres nouveaux avec des coûts de lancement bien plus faibles, mais il les prive aussi des revenus stables de l'abonnement papier.

Certains ont choisi un modèle sans publicité, reposant sur les seuls abonnements et dons : le pari est qu'un nombre restreint de lecteurs payant réellement vaut mieux qu'une large audience mal monétisée. Il impose une exigence — offrir ce qu'on ne trouve pas gratuitement ailleurs — et fonctionne pour les titres à forte identité éditoriale. Le paywall, dispositif qui conditionne l'accès aux articles à un paiement, en est l'outil, avec des variantes : accès total, quota d'articles gratuits, ou sélection payante.`],
    ["Des formats nés du numérique", `La newsletter éditoriale est revenue au premier plan : un contenu envoyé directement par courrier électronique, sans dépendre d'un algorithme de recommandation. Sa force tient précisément à ce contournement — l'auteur touche son lecteur sans intermédiaire, et connaît son audience.

À l'opposé du texte long, la vidéo verticale est conçue pour un écran de téléphone tenu à la verticale, et la vidéo courte, de quelques secondes à quelques minutes, est pensée pour la boucle et le défilement. Ces formats imposent une grammaire propre : accroche dans les deux premières secondes, sous-titres systématiques puisque le son est souvent coupé, et information condensée. Les médias traditionnels s'y adaptent difficilement.`],
    ["Des approches nouvelles", `Le data journalisme fonde l'enquête sur l'analyse et la visualisation de données : bases publiques, fichiers obtenus, documents fuités. Il a permis des enquêtes internationales de grande ampleur, où des centaines de journalistes exploitent des millions de documents.

Le journalisme de solutions rend compte des réponses apportées à un problème, et non seulement du problème : ce n'est pas du journalisme positif, mais une exigence supplémentaire — enquêter aussi rigoureusement sur ce qui fonctionne que sur ce qui échoue. Le journalisme automatisé, enfin, produit des textes courts par algorithme à partir de données structurées : résultats sportifs, résultats électoraux, publications financières. Il traite en quelques secondes des volumes qu'aucune rédaction ne couvrirait.`],
    ["Le défi de fond", `Le principal défi économique des médias en ligne est de capter une part suffisante de la valeur face aux plateformes. L'essentiel des recettes publicitaires numériques est capté par quelques acteurs mondiaux, qui distribuent les contenus des médias sans les produire.

Les réponses tentées sont juridiques — droits voisins obligeant les plateformes à rémunérer la reprise de contenus de presse — et éditoriales, avec le retour à la relation directe : abonnements, newsletters, applications, événements. La leçon des vingt dernières années est claire : un média dont l'audience dépend entièrement d'un intermédiaire est à la merci d'un changement d'algorithme.`],
  ],
  "cm3-cinema-technique-image": [
    ["L'objectif décide de l'espace", `Le choix de l'objectif conditionne la perception de l'espace autant que le cadrage. Une focale courte, ou grand angle, élargit le champ et accentue les perspectives : les distances paraissent plus grandes, les mouvements vers la caméra plus rapides, et les visages proches se déforment. Elle donne une sensation d'espace et d'immersion.

Un téléobjectif fait l'inverse : il écrase les plans les uns sur les autres, isole le sujet et supprime la profondeur. Un personnage qui court vers la caméra semble ne pas avancer, effet régulièrement employé pour figurer l'impuissance. Deux objectifs différents filmant le même acteur au même endroit racontent deux choses distinctes.`],
    ["La netteté comme outil", `La profondeur de champ est l'étendue de netteté dans l'image. Faible, elle isole un visage dans un fond flou et impose au spectateur où regarder ; grande, elle laisse plusieurs plans nets et permet de hiérarchiser autrement, par la composition et le mouvement.

La mise au point suivie déplace la zone de netteté en accompagnant un déplacement : c'est un métier à part entière sur un plateau, l'assistant opérateur devant anticiper le mouvement de l'acteur au centimètre, sans voir l'image. Les mises au point ratées comptent parmi les premières causes de reprise d'un plan.`],
    ["Bouger la caméra", `Une grue permet des mouvements verticaux amples : s'élever au-dessus d'une foule, plonger d'un toit vers la rue. Le stabilisateur d'image porté isole la caméra des mouvements du corps de l'opérateur, ce qui autorise des travellings fluides sans rails, y compris dans des escaliers.

La caméra portée à l'épaule fait le choix inverse : elle assume l'instabilité pour renforcer l'impression de réel et d'urgence. Devenue une convention du documentaire, puis de la fiction réaliste, elle est aujourd'hui si répandue qu'elle a perdu une part de son effet — le spectateur y lit un code plutôt qu'une captation.`],
    ["Jouer avec le temps", `Le ralenti s'obtient en enregistrant à cadence élevée — cent, mille images par seconde ou davantage — puis en restituant à vitesse normale : plus la cadence de prise est haute, plus le mouvement paraît lent et fluide. Le time-lapse procède à l'inverse, avec une cadence très lente, une image toutes les quelques secondes ou minutes, restituée à vitesse normale : nuages qui défilent, chantier qui s'élève, fleur qui s'ouvre.

Aujourd'hui, le format d'acquisition est un fichier numérique brut, qui conserve un maximum d'information issue du capteur et laisse un large travail en postproduction : la colorimétrie, l'exposition et une part du cadrage se décident après le tournage. Cette souplesse a modifié l'équilibre du métier, en déplaçant vers la salle de montage des décisions autrefois prises sur le plateau.`],
  ],

  "cm3-fiction-serie": [
    ["Un système, pas un film long", `Une série se conçoit comme un système, non comme un film long. Il ne s'agit pas d'étirer une histoire mais de construire une mécanique capable de produire des épisodes pendant des années : des personnages dont les conflits ne se résolvent pas, un lieu qui autorise des situations variées, et une logique de renouvellement.

La bible de série est le document qui fixe cet univers : personnages, décors, règles narratives, ton, ce qui peut arriver et ce qui ne peut pas. Elle sert à vendre le projet, puis à coordonner une équipe qui écrira sans le créateur à ses côtés en permanence.`],
    ["Écrire à plusieurs", `L'atelier d'écriture, ou writers' room, réunit une équipe d'auteurs travaillant collectivement sous la direction d'un responsable. On y construit ensemble l'architecture de la saison, on répartit les épisodes, puis chacun écrit le sien avant retour du groupe. Le modèle, né aux États-Unis, a longtemps été inexistant en France, où la tradition d'auteur unique dominait ; il s'y est largement implanté depuis quinze ans.

C'est cette organisation qui permet de produire vingt épisodes par an avec une cohérence de ton. Elle suppose des professionnels capables d'écrire dans la voix d'une série plutôt que dans la leur — compétence qui ne va pas de soi et qui s'apprend.`],
    ["Les outils narratifs", `Un arc narratif de saison est une trame se déployant sur l'ensemble des épisodes, par-dessus les intrigues propres à chacun. La combinaison des deux — une affaire résolue par épisode, un fil qui court sur la saison — est la structure la plus répandue, parce qu'elle satisfait à la fois le spectateur occasionnel et le fidèle.

Le cliffhanger suspend l'épisode sur une situation non résolue, pour relancer l'attente. Efficace, il s'use vite s'il devient systématique. Une série anthologique échappe à ces contraintes : chaque saison ou chaque épisode raconte une histoire indépendante, ce qui permet de changer d'acteurs et de ton. La mini-série, elle, est une fiction en un nombre limité d'épisodes formant un tout, sans suite prévue — format qui attire les acteurs et réalisateurs de cinéma, puisqu'il n'engage pas des années.`],
    ["L'économie et le prestige", `Le spin-off dérive une nouvelle série d'un personnage ou d'un univers existant : il réduit le risque en s'appuyant sur un public acquis. La co-production internationale partage le financement entre diffuseurs de plusieurs pays, ce qui permet des budgets élevés au prix de compromis sur le casting et les lieux de tournage.

Les séries ont gagné en prestige depuis vingt ans pour trois raisons cumulées : des budgets rapprochés de ceux du cinéma, l'arrivée d'auteurs et d'acteurs reconnus, et surtout une liberté narrative que la durée autorise — quarante heures permettent une complexité qu'aucun film ne peut atteindre. Le format court, séries d'épisodes de quelques minutes, occupe l'autre extrémité et a trouvé son public sur le web et les réseaux.`],
  ],

  "cm3-image-verite": [
    ["Une image ne prouve rien seule", `Une photographie ne prouve rien par elle-même : elle exige un contexte. Elle dépend du cadrage — ce qui a été laissé dehors —, du moment choisi dans une séquence, et des conditions de sa production. Une même scène produit des images contradictoires selon l'endroit où se tient le photographe.

Cette fragilité est ancienne. La photographie mise en scène présentée comme spontanée est documentée dès les débuts du photojournalisme : cadavres déplacés sur les champs de bataille du XIXe siècle pour composer une meilleure image, drapeaux rejoués pour la caméra. Le procédé n'a jamais cessé, et la distinction entre reconstitution avouée et tricherie tient à ce qu'on dit au public.`],
    ["Effacer et détourner", `La photographie de propagande est produite pour servir un pouvoir ou une cause, ce qui n'implique pas nécessairement le truquage : le choix du sujet, de l'angle et de la légende suffit souvent. L'Union soviétique a poussé la technique plus loin en effaçant systématiquement des photographies les dirigeants tombés en disgrâce — des clichés officiels étaient republiés, année après année, avec un personnage de moins.

La manipulation la plus courante aujourd'hui ne truque rien : c'est l'image sortie de son contexte, authentique mais réutilisée pour illustrer un autre événement, un autre pays ou une autre époque. Elle résiste à toute analyse technique du fichier, puisque l'image est vraie. L'hypertrucage vidéo, qui synthétise une personne réelle, ajoute une menace différente et plus récente.`],
    ["Les outils de vérification", `Établir la provenance d'une image consiste à identifier sa première publication et son auteur : c'est le geste fondamental, car il date l'image et permet de la rattacher à un événement. La recherche inversée y suffit dans une majorité de cas.

La géolocalisation identifie le lieu en comparant les repères visibles — relief, bâtiments, panneaux, végétation, ombres — avec des images satellites et des vues de rue. L'enquête en sources ouvertes généralise cette méthode : une investigation menée entièrement à partir de données publiquement accessibles, qui a produit des résultats considérables sur des conflits où aucun journaliste ne pouvait se rendre.`],
    ["Certifier plutôt que détecter", `Face aux images générées, la détection après coup est une course perdue d'avance : chaque progrès des détecteurs entraîne un progrès des générateurs. C'est pourquoi l'industrie s'oriente vers la certification d'origine — un procédé technique attestant la provenance d'un fichier et enregistrant les modifications successives, inscrit dans le fichier dès la prise de vue.

Le principe déplace la charge de la preuve : au lieu de démontrer qu'une image est fausse, il s'agit d'établir qu'elle est authentique et de traiter comme suspect ce qui ne porte aucune signature. Le dispositif ne fonctionnera que s'il est largement adopté par les fabricants d'appareils, les logiciels et les plateformes — condition qui reste incertaine.`],
  ],

  "cm3-metiers-medias": [
    ["La rédaction", `Un journal ou une chaîne repose sur des dizaines de métiers distincts, dont la plupart ne signent jamais. Le rédacteur en chef dirige la ligne éditoriale et coordonne la rédaction : il arbitre les sujets, hiérarchise, tranche les conflits et assume les choix devant la direction.

Le secrétaire de rédaction relit, titre et met en forme les articles : c'est lui qui corrige les erreurs, harmonise le style, coupe aux dimensions et écrit les titres — souvent la partie la plus lue d'un article, et rarement l'œuvre de son auteur. Le documentaliste recherche, vérifie et archive l'information et les documents : dans les rédactions qui en ont conservé, il constitue le premier rempart contre l'erreur factuelle.`],
    ["L'image et le son", `L'iconographe recherche et sélectionne les images d'une publication, négocie les droits et vérifie les crédits. Son travail détermine largement ce que le lecteur retiendra, l'image étant vue avant le texte.

Le journaliste reporter d'images filme, monte et parfois commente ses propres sujets — figure née de l'allègement du matériel, qui a fusionné des métiers autrefois séparés. Le monteur assemble images et sons pour construire le sujet : c'est au montage que se décide le sens, par l'ordre, la durée et ce qu'on retire. En direct, le réalisateur de télévision choisit en temps réel les images diffusées parmi plusieurs caméras, décision prise en une fraction de seconde et sans retour possible.`],
    ["Produire et publier", `Le producteur audiovisuel monte le financement et porte la responsabilité du projet : il réunit les diffuseurs, les aides et les partenaires, engage les équipes et assume les dépassements. Sans lui, aucun documentaire ni aucune série n'existe, et son rôle est presque toujours invisible au public.

Le community manager anime la présence et les échanges d'un média sur les réseaux sociaux : il ne se contente pas de relayer, il reformule pour chaque plateforme et modère les discussions. Le métier, apparu il y a une quinzaine d'années, est devenu un poste éditorial à part entière, puisqu'une large part de l'audience arrive désormais par là.`],
    ["Celui qui répond devant la loi", `Le directeur de la publication assume la responsabilité juridique de ce qui est publié. En droit français de la presse, c'est lui qui est poursuivi en premier en cas de diffamation ou d'injure, avant même l'auteur de l'article — mécanisme dit de responsabilité en cascade, institué par la loi de 1881.

Cette règle a une conséquence pratique : la fonction ne peut être occupée par n'importe qui, et elle donne à son titulaire un pouvoir de dernier recours sur ce qui paraît. Elle explique aussi pourquoi tout site d'information doit mentionner un directeur de publication identifiable — l'anonymat éditorial n'est pas admis.`],
  ],
  "cm3-censure-liberte": [
    ["Avant, ou après", `La censure préalable contrôle les contenus avant leur publication. Elle a disparu en France pour la presse avec la loi de 1881, qui a fait le choix inverse : on publie librement, et l'on répond ensuite de ce qu'on a publié. Cette distinction gouverne tout le droit français de l'expression.

Le cinéma fait exception partielle : un film ne peut sortir en salle sans visa d'exploitation délivré par le ministère de la Culture, assorti d'une classification par âge — tous publics, moins de douze ans, moins de seize ans, moins de dix-huit ans. Le visa peut être refusé, ce qui reste rarissime. La classification, elle, a des effets économiques considérables, une interdiction aux moins de seize ans fermant l'accès à la télévision aux heures de grande écoute.`],
    ["Les limites légales", `La loi française pose des limites précises à la liberté d'expression : la diffamation, l'injure, l'incitation à la haine et l'apologie de certains crimes. Ces infractions sont définies strictement, et leur poursuite obéit à des délais courts.

La diffamation est l'allégation d'un fait précis portant atteinte à l'honneur ou à la considération d'une personne : elle suppose un fait vérifiable, et son auteur peut s'exonérer en prouvant sa véracité ou sa bonne foi. L'injure est une expression outrageante qui ne contient l'imputation d'aucun fait : traiter quelqu'un d'incompétent relève de l'injure, dire qu'il a détourné des fonds relève de la diffamation. La distinction est technique et décide de la procédure.`],
    ["Faire taire autrement", `Un procès-bâillon est une action en justice engagée non pour gagner mais pour intimider : les frais, la durée et la charge psychologique suffisent à décourager un journaliste indépendant ou une petite rédaction, même quand l'action est vouée à l'échec. L'Union européenne a adopté en 2024 une directive visant à permettre le rejet rapide de ces procédures.

À l'inverse, la protection des sources journalistiques garantit le droit de ne pas révéler l'identité de ses informateurs. Renforcée en France en 2010, elle admet des exceptions en matière de sécurité, ce qui en limite la portée. Sans elle, aucune enquête reposant sur des témoignages internes ne serait possible.`],
    ["Ce qu'on ne dit pas", `L'autocensure est une restriction que l'on s'impose par anticipation d'une sanction ou d'une réaction — juridique, économique, professionnelle ou sociale. Elle est par nature invisible et donc impossible à mesurer : on ne peut pas recenser les articles non écrits.

Elle rappelle que la liberté d'expression ne se réduit pas à l'absence d'interdiction. Le code Hays américain, qui a régi le contenu des films de 1934 à 1968, était précisément une autocensure de la profession, adoptée pour devancer une réglementation publique : la contrainte la plus efficace est souvent celle que l'on s'applique soi-même.`],
  ],

  "cm3-archives-audiovisuelles": [
    ["Ce qui a disparu", `Une part importante du patrimoine audiovisuel du XXe siècle a été perdue, et pour une raison prosaïque : les bandes coûtaient cher, on les effaçait et on les réutilisait. Des émissions entières, des directs, des interviews uniques ont ainsi été enregistrés par-dessus. Des chaînes majeures ont perdu de cette façon des années de programmes.

Le cinéma a subi d'autres pertes, matérielles celles-là. Les pellicules nitrate, utilisées jusqu'aux années 1950, sont extrêmement inflammables — elles brûlent même sous l'eau — et se dégradent en dégageant des gaz : de nombreux incendies d'archives ont détruit des collections entières. Les pellicules acétate qui leur ont succédé souffrent du syndrome du vinaigre, dégradation chimique reconnaissable à son odeur, qui rend le film cassant et illisible.`],
    ["Conserver aujourd'hui", `En France, l'INA conserve les archives de la radio et de la télévision et assure le dépôt légal de l'audiovisuel, étendu depuis 2006 au dépôt légal du web : une collecte automatisée de sites internet à des fins patrimoniales, qui archive des milliards de pages.

La conservation numérique pose un problème inattendu : un fichier ne se dégrade pas comme une pellicule, il devient illisible d'un coup quand le format ou le support disparaît. D'où la migration périodique — transfert régulier des données vers des formats et supports actuels — et la préférence donnée aux formats ouverts, dont la spécification est publique et documentée, seuls à garantir qu'on pourra encore les lire dans trente ans.`],
    ["Restaurer", `La restauration numérique d'un film consiste à le numériser à très haute définition, puis à corriger image par image les rayures, les taches, les instabilités et la colorimétrie. Le travail est considérable — un long métrage compte plus de cent trente mille images — et pose les mêmes questions déontologiques que la restauration d'un tableau : jusqu'où corriger, et vers quel état revenir.

Les cinémathèques, institutions qui collectent, conservent et projettent les films, sont au cœur de ce travail. La Cinémathèque française, fondée par Henri Langlois, a sauvé pendant la guerre des centaines de films que leur destruction menaçait, parfois en les cachant.`],
    ["Le verrou des droits", `L'accès aux archives audiovisuelles est souvent limité, et rarement pour des raisons techniques : ce sont les droits d'auteur et les droits voisins qui restreignent la diffusion. Une émission ancienne mobilise des dizaines d'ayants droit — auteurs, réalisateurs, interprètes, musiciens, agences d'images — dont l'accord est nécessaire pour toute rediffusion.

Le résultat est paradoxal : des documents conservés, numérisés et parfaitement accessibles techniquement restent invisibles au public. C'est l'un des arguments avancés en faveur d'exceptions patrimoniales élargies, qui autoriseraient au moins la consultation sur place à des fins de recherche.`],
  ],
  "cm3-cinema-documentaire-france": [
    ["Qui paie", `Le documentaire français est largement soutenu par les diffuseurs télévisés : leurs obligations d'investissement dans la production, combinées aux aides du CNC et des régions, constituent l'essentiel du financement. Peu de documentaires se montent sans qu'une chaîne s'engage.

Cette dépendance a un effet direct sur les formats : durée calibrée sur la case de diffusion, structure attendue, commentaire souvent exigé. Elle explique aussi la vitalité du secteur — la France produit chaque année plusieurs centaines de documentaires, volume sans équivalent en Europe — et sa fragilité, puisqu'un recul des obligations des diffuseurs assèche immédiatement la production.`],
    ["Filmer la France", `Raymond Depardon a filmé les paysans, les hôpitaux psychiatriques, les tribunaux et les commissariats, avec une méthode constante : rester longtemps, ne pas intervenir, laisser venir. Sa trilogie sur le monde paysan s'étend sur dix ans. Nicolas Philibert, avec Être et avoir, filme une année dans une classe unique rurale et obtient un succès considérable en salle, rare pour le genre.

Agnès Varda a mêlé toute sa vie documentaire et fiction, jusqu'aux Glaneurs et la Glaneuse, où elle filme ceux qui récupèrent ce que les autres jettent, et s'inclut elle-même dans le sujet en filmant ses propres mains vieillissantes.`],
    ["Regarder le siècle", `Trois films ont changé le rapport français à son histoire. Nuit et brouillard, d'Alain Resnais, sorti en 1956, confronte des images d'archives des camps à des vues en couleur des lieux vides ; le film fut menacé de censure pour un plan montrant un gendarme français dans un camp de transit.

Le Chagrin et la Pitié, de Marcel Ophuls, sorti en 1969, démonte par des témoignages le récit d'une France unanimement résistante : il resta interdit d'antenne à la télévision française pendant douze ans. Shoah, de Claude Lanzmann, interroge pendant plus de neuf heures des témoins — survivants, bourreaux, riverains — sans utiliser une seule image d'archive : il n'y a que des visages, des lieux d'aujourd'hui et de la parole.`],
    ["Où le voir", `La case documentaire est un créneau de programmation dédié dans une grille : elle garantit une exposition régulière, souvent à des horaires tardifs. Sa position dans la soirée en dit long sur la place accordée au genre par les chaînes généralistes.

En salle, la diffusion reste difficile, mais les festivals compensent partiellement : le Festival international du documentaire de Marseille est le principal rendez-vous français du genre, aux côtés du Cinéma du réel à Paris et des États généraux du documentaire de Lussas, village ardéchois de mille habitants qui accueille chaque été des milliers de professionnels.`],
  ],

  "cm3-publicite-medias": [
    ["Ce qui finance le gratuit", `La publicité finance une part majeure des médias gratuits : télévision hertzienne, radio commerciale, sites d'information en accès libre. Le modèle est ancien et son principe simple — le média rassemble une audience, l'annonceur achète l'accès à cette audience.

Un spot publicitaire télévisé est diffusé dans un écran, à des tarifs qui varient selon l'heure : le prime time publicitaire correspond aux tranches où les tarifs sont les plus élevés, c'est-à-dire aux plus fortes audiences. Le parrainage fonctionne autrement : une marque finance un programme et y est associée par une mention, sans message commercial direct — formule qui contourne partiellement la saturation publicitaire.`],
    ["Compter l'audience", `Le coût pour mille mesure ce qu'il en coûte pour atteindre mille personnes ou obtenir mille affichages. C'est l'unité de comparaison entre supports : elle permet de mettre en regard une page de magazine, un spot radio et une bannière web.

La publicité programmatique a bouleversé cette économie : l'achat d'espaces y est automatisé et ciblé en temps réel, une enchère se déroulant en quelques millisecondes pendant le chargement d'une page pour déterminer quelle annonce sera montrée à quel internaute. L'annonceur n'achète plus un support mais un profil, ce qui a fait chuter la valeur des espaces des médias au profit des plateformes qui détiennent les données.`],
    ["Suivre, et ses limites", `Le ciblage comportemental fonde la publicité sur l'historique de navigation de l'utilisateur. En Europe, il est soumis au consentement aux cookies : une autorisation préalable, libre et informée, est requise pour tout suivi à des fins publicitaires — d'où les bandeaux omniprésents, dont la conception a fait l'objet de nombreuses mises en demeure pour non-respect de la liberté du choix.

Deux phénomènes érodent le modèle. Les bloqueurs de publicité empêchent l'affichage des annonces, avec des taux d'utilisation élevés chez les publics jeunes et technophiles. La fraude publicitaire, affichages ou clics générés artificiellement par des robots sur des sites fantômes, détourne une part significative des budgets — plusieurs milliards par an à l'échelle mondiale, selon les estimations.`],
    ["Protéger les publics", `L'encadrement de la publicité pour les enfants limite certains messages dans les programmes jeunesse : en France, la publicité est interdite dans et autour des programmes jeunesse des chaînes publiques, et des règles restreignent les messages sur les aliments trop gras, sucrés ou salés.

D'autres pays sont allés plus loin — la Suède et la Norvège interdisent toute publicité télévisée destinée aux moins de douze ans. Le débat s'est déplacé vers le numérique, où l'exposition est moins encadrée et où la frontière entre contenu et publicité est brouillée par les recommandations d'influenceurs, ce qui a justifié la loi française de 2023 sur le marketing d'influence.`],
  ],

  "cm2-scenario": [
    ["Un document qui doit disparaître", `Un scénario n'est pas une œuvre littéraire mais un document de travail destiné à disparaître : personne ne le lira une fois le film terminé. Il doit être lisible, précis et utilisable par des dizaines de professionnels — d'où sa forme normalisée, avec ses indications de lieu, ses actions au présent et ses dialogues centrés.

Le développement passe par plusieurs états. Le synopsis résume l'histoire en une à deux pages. Le traitement en fait un récit détaillé en prose, sans dialogues, qui permet de juger la construction. Vient ensuite la continuité dialoguée, puis le découpage technique, qui transcrit le scénario en plans avec les indications de mise en scène — c'est le passage de l'histoire au tournage. Le storyboard en donne la version dessinée, indispensable pour les scènes complexes ou à effets.`],
    ["La charpente", `La structure en trois actes — exposition, confrontation, résolution — n'est ni une loi ni une invention hollywoodienne : on la trouve chez Aristote. Sa force est pratique : elle indique où placer les ruptures pour que l'attention ne retombe pas.

Un point de bascule est un événement qui fait basculer l'action dans une nouvelle direction et interdit le retour en arrière : le héros accepte la mission, découvre la trahison, perd ce qu'il protégeait. Les manuels en placent deux, à la fin du premier et du deuxième acte. Ces recettes ont produit autant de bons films que de films interchangeables — elles décrivent une mécanique, elles ne fournissent pas un sujet.`],
    ["Le prétexte et la transformation", `Un MacGuffin est un objet ou un enjeu qui motive l'intrigue sans importer en lui-même : les documents secrets, la valise, le microfilm. Hitchcock, qui a popularisé le terme, insistait sur le fait que le contenu de la valise n'a aucune importance — seule compte l'énergie que sa poursuite donne au récit.

L'arc narratif de personnage désigne au contraire ce qui compte vraiment : la transformation intérieure du personnage au fil du récit. Un personnage qui traverse l'histoire sans changer laisse un film plat, quelle que soit l'ingéniosité de l'intrigue. La règle admet des exceptions notables — certains héros de série sont précisément définis par leur incapacité à changer.`],
    ["Adapter, et réécrire", `Une adaptation transpose une œuvre préexistante à l'écran : roman, pièce, bande dessinée, fait divers. La difficulté n'est pas de condenser mais de traduire — un roman dispose de l'intériorité, le cinéma doit la rendre visible. Les adaptations les plus fidèles à la lettre sont souvent les plus infidèles à l'effet.

Le doctorat de script, ou script doctoring, est une réécriture confiée à un scénariste extérieur, le plus souvent non crédité au générique. La pratique est courante et largement invisible : des films à gros budget passent entre les mains de cinq ou six auteurs successifs. Elle explique en partie l'homogénéité de certaines productions, et la difficulté d'y identifier une voix.`],
  ],

  "cm3-medias-societe": [
    ["Ce dont on parle", `Les médias ne dictent pas les opinions, mais ils orientent ce dont on parle : c'est la théorie de l'agenda, formulée dans les années 1970. Ils ne réussissent pas à dire aux gens quoi penser, mais très bien à leur dire à quoi penser. Un sujet absent des médias n'existe pas dans le débat public, quelle que soit son importance objective.

Le cadrage médiatique complète cet effet : la manière dont un sujet est présenté oriente son interprétation. Une même mesure économique décrite comme un effort ou comme une ponction produit deux réceptions différentes, sans qu'aucune information ne soit fausse dans l'un ou l'autre cas.`],
    ["Ce qu'on n'ose plus dire", `La spirale du silence décrit la tendance à taire une opinion que l'on perçoit comme minoritaire, par crainte de l'isolement. L'effet est cumulatif : moins l'opinion s'exprime, plus elle paraît minoritaire, moins elle s'exprime. Il en résulte que le climat d'opinion perçu peut différer sensiblement de l'opinion réelle.

À l'inverse, le modèle de la réception active rappelle que le public n'absorbe pas passivement les messages : il les interprète, les discute, les détourne, en fonction de son milieu et de son expérience. Les études d'audience ont montré qu'un même programme est compris de façons opposées selon les groupes sociaux. L'exposition sélective ajoute un filtre en amont : chacun choisit majoritairement des contenus conformes à ses convictions.`],
    ["Qui apparaît, et comment", `La question de la représentation des minorités dans les médias ne se réduit pas à un décompte : elle porte autant sur la visibilité que sur la qualité des rôles attribués — protagoniste ou figurant, sujet ou décor, individu ou type.

Le test de Bechdel propose un critère volontairement minimal pour les personnages féminins d'une fiction : deux personnages féminins nommés, qui se parlent, d'autre chose que d'un homme. Il n'évalue pas la qualité d'une œuvre et son auteure ne l'a jamais prétendu ; sa force est de montrer combien d'œuvres échouent à un test aussi rudimentaire. La parité dans le cinéma français reste elle aussi loin d'être atteinte parmi les réalisateurs, malgré des dispositifs incitatifs mis en place ces dernières années.`],
    ["Les effets, et leur mesure", `Le mouvement MeToo, à partir de 2017, a produit dans l'audiovisuel une vague de témoignages sur les violences sexuelles et les abus de pouvoir. Ses effets institutionnels sont concrets : conditionnement de certaines aides publiques à des formations, cellules d'écoute, coordinateurs d'intimité sur les tournages, réforme des instances professionnelles.

Sur la question plus ancienne de l'influence des médias sur les comportements — violence, consommation, opinions — la recherche conclut à un effet réel mais indirect, médiatisé par de nombreux facteurs : milieu, entourage, prédispositions, contexte d'exposition. Les modèles d'influence directe, du type message reçu égale comportement adopté, ont été abandonnés depuis longtemps, sans que le débat public en tienne toujours compte.`],
  ],
  "cm3-son-cinema": [
    ["Un univers fabriqué", `Le son représente une part considérable de l'expérience du spectateur, souvent inconsciente. La conception sonore d'un film consiste à construire un univers complet et cohérent : chaque lieu a sa signature, chaque objet son grain, et l'ensemble doit sembler naturel alors que tout a été fabriqué.

Le son direct est celui enregistré pendant la prise de vue. Il capte les voix et l'énergie du jeu, mais aussi les avions, les groupes électrogènes et les bruits de plateau : sur un film de fiction, une part importante en sera remplacée. L'ambiance sonore, fond continu qui situe le lieu et l'époque, est presque toujours construite en postproduction à partir de sons enregistrés ailleurs.`],
    ["Recréer chaque geste", `Le bruitage recrée en studio les sons d'action synchronisés avec l'image : pas, vêtements, portes, vaisselle, coups. Les bruiteurs travaillent avec un stock d'objets sans rapport avec ce qu'on voit — des noix de coco pour des sabots, du cuir froissé pour des ailes, de la fécule pour la neige.

Ce travail n'est pas un supplément de réalisme : c'est une nécessité technique. Les sons captés au tournage sont inutilisables séparément, et le mixage international exige de pouvoir remplacer les dialogues sans perdre le reste. Chaque film doit donc exister sous forme d'une bande sans paroles, où tout le reste est présent.`],
    ["Où est la source", `Un son hors champ a sa source dans l'univers du film mais hors de l'image : c'est l'un des outils dramatiques les plus économiques, puisqu'il fait exister sans montrer. Une voix off est extérieure à l'espace de la scène — narrateur, pensée, commentaire — et n'est entendue que du spectateur.

Un son subjectif restitue la perception d'un personnage : assourdissement après une explosion, acouphène, battement de cœur amplifié, disparition de tous les bruits sauf un. Il fait basculer le spectateur dans une tête, plus efficacement qu'aucun plan subjectif ne le ferait à l'image.`],
    ["Le silence, et l'espace", `Le silence au cinéma est un élément de dramaturgie aussi construit que le bruit : le silence absolu n'existe pas dans un film, il est composé — on retire les ambiances, on garde un souffle, une respiration. Placé après une saturation sonore, il produit un effet physique immédiat.

La spatialisation en salle répartit les sons entre des enceintes multiples, autour et au-dessus du public, ce qui permet de placer une source à un endroit précis de l'espace. Toute cette architecture agit largement en dessous du seuil de l'attention consciente : le spectateur croit regarder un film, et une part considérable de ce qu'il ressent lui vient par les oreilles. C'est pourquoi les professionnels disent que le son fait la moitié de l'image.`],
  ],

  "cm3-cinema-economie-mondiale": [
    ["Produire n'est pas dominer", `Le cinéma américain domine le marché mondial mais ne produit pas le plus de films : c'est l'Inde qui détient ce record, avec plus de mille cinq cents à deux mille longs métrages par an dans une douzaine de langues. La domination américaine tient à la distribution, au marketing et à l'accès aux écrans, non au volume.

Le Nigeria constitue le troisième pôle mondial en nombre de films, avec une industrie surnommée Nollywood : production très rapide, budgets minimes, diffusion d'abord en vidéo puis en ligne. Le modèle, longtemps ignoré des statistiques officielles, fait vivre des centaines de milliers de personnes. La Chine, elle, a connu la croissance la plus rapide du siècle : de quelques centaines de salles à plus de quatre-vingt mille écrans en vingt ans.`],
    ["Protéger sa production", `Un quota d'écran oblige les salles à projeter une part minimale de films nationaux. Plusieurs pays l'appliquent — la Corée du Sud lui doit en partie la vitalité de son cinéma — et le dispositif est régulièrement contesté par les États-Unis dans les négociations commerciales.

C'est le sens de l'exception culturelle défendue par la France : le refus de traiter les biens culturels comme des marchandises ordinaires dans les accords de libre-échange. L'argument est qu'un film n'est pas un produit interchangeable et qu'un pays doit pouvoir soutenir sa production sans que cela soit qualifié d'entrave à la concurrence. Le principe a été inscrit dans une convention de l'UNESCO en 2005.`],
    ["Circuler", `Un accord de coproduction permet à un film de bénéficier des aides de plusieurs pays s'il respecte des critères de participation artistique et technique. La France en a signé des dizaines, ce qui explique la fréquence des mentions de plusieurs pays au générique.

La vente traditionnelle se fait par territoire : un distributeur achète les droits pour un pays donné. Ce marché de droits territoire par territoire est aujourd'hui concurrencé par les plateformes mondiales, qui achètent des droits globaux et court-circuitent les distributeurs locaux. La sortie mondiale simultanée, coordonnée le même jour dans des dizaines de pays, répond à une autre logique : limiter le piratage en supprimant le délai d'attente.`],
    ["Voir ailleurs", `Un festival de catégorie A est un festival international compétitif reconnu par la fédération internationale des associations de producteurs : Cannes, Berlin, Venise, Locarno, Karlovy Vary et quelques autres. Le label impose des règles — première mondiale des films en compétition, jury international — et confère une visibilité déterminante pour les cinématographies peu distribuées.

Le streaming a eu sur ce point un effet positif rarement souligné : il a élargi l'accès à des cinématographies jusque-là quasi invisibles hors des festivals. Un spectateur français peut voir des films coréens, argentins ou sénégalais qui n'auraient jamais atteint sa salle de quartier — même si la mise en avant algorithmique tend, en sens inverse, à concentrer l'attention sur un petit nombre de titres.`],
  ],

  "cm3-education-image": [
    ["Lire une image", `Savoir lire une image s'apprend autant que savoir lire un texte : rien dans une photographie n'est évident, et la sensation d'immédiateté qu'elle produit est précisément ce qui la rend trompeuse. L'éducation à l'image est un apprentissage double — analyser les images reçues, et fabriquer les siennes pour comprendre de l'intérieur les choix qu'elles supposent.

L'analyse de plan en est l'exercice de base : examiner le cadrage, l'échelle, la lumière, la composition, le mouvement et la durée, avant toute interprétation. Le point de vue — la position depuis laquelle l'image est prise — n'est jamais neutre : filmer une manifestation depuis les forces de l'ordre ou depuis le cortège produit deux récits.`],
    ["Voir ensemble", `École et cinéma, avec ses équivalents pour les collèges et les lycées, fait découvrir aux élèves des films en salle, choisis dans un catalogue exigeant, avec une préparation et un travail en classe. Le dispositif touche chaque année des centaines de milliers d'élèves, et repose sur un principe qui n'est pas négociable pour ses concepteurs : la projection en salle, et non en classe sur un écran.

Le Prix Jean Renoir des lycéens fonctionne autrement : des classes voient les sorties de l'année et décernent un prix, ce qui suppose de débattre, d'argumenter et de choisir collectivement. Un atelier de pratique audiovisuelle complète le dispositif par le geste : réaliser soi-même un film, même très court, apprend en une semaine ce qu'un cours n'obtient pas.`],
    ["Décoder ce qui nous entoure", `L'analyse ne se limite pas au cinéma. Lire une affiche de film revient à examiner des choix graphiques entièrement stratégiques : ce qui est montré, la taille relative des noms, les couleurs, le genre suggéré. Analyser une une de journal, de même, met au jour une hiérarchie — ce qui occupe la moitié de la page, ce qui est relégué en bas, ce qui est absent.

La manipulation par le cadrage est le procédé le plus simple et le plus répandu : inclure ou exclure des éléments suffit à changer le sens sans rien truquer. Une foule cadrée serrée paraît nombreuse ; la même, cadrée large, paraît clairsemée. Aucune retouche n'a eu lieu.`],
    ["À tout âge", `L'éducation à l'image concerne tous les âges, parce que la production et la circulation des images évoluent constamment. Les compétences acquises devant la télévision des années 1990 ne suffisent pas devant un flux vertical algorithmique, et celles d'aujourd'hui ne suffiront pas devant les images générées.

Cela déplace l'objectif : il ne s'agit pas d'apprendre une liste de pièges, qui sera périmée, mais d'acquérir des réflexes durables — d'où vient cette image, qui l'a produite, pour quel usage, que ne montre-t-elle pas. Ces quatre questions valent pour une gravure du XVIIe siècle comme pour une vidéo publiée ce matin.`],
  ],
};
