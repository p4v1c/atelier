/** Inventions et technologie, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_SCIENCES_TECH: LotCours = {
  "st-informatique-fondements": [
    ["Deux états, et tout le reste", `Un ordinateur ne calcule qu'avec deux états, notés zéro et un : toute l'informatique en découle. Le binaire n'a pas été choisi par élégance mathématique mais par nécessité physique — il est bien plus simple de distinguer deux niveaux de tension que dix. Un octet regroupe huit bits, soit deux cent cinquante-six valeurs possibles, ce qui suffisait à coder un caractère dans les premiers systèmes.

Les fondations théoriques précèdent les machines. Ada Lovelace écrit dans les années 1840, pour la machine analytique de Babbage jamais construite, ce qui est tenu pour le premier programme : elle est aussi la première à comprendre qu'une telle machine pourrait manipuler autre chose que des nombres.`],
    ["Les modèles fondateurs", `En 1936, Alan Turing formalise un modèle théorique de calcul — une machine abstraite lisant et écrivant sur un ruban — qui définit ce qui est calculable et ce qui ne l'est pas. Le résultat est négatif autant que fondateur : certains problèmes n'admettent aucun algorithme.

En 1945, l'architecture décrite par von Neumann stocke le programme et les données dans la même mémoire : c'est ce qui permet à un ordinateur d'être polyvalent, puisqu'il suffit de changer le contenu de la mémoire pour changer de tâche. Trois ans plus tard, Claude Shannon fonde la théorie de l'information en donnant une mesure mathématique de la quantité d'information, indépendante de son sens.`],
    ["Faire tourner les machines", `Un compilateur traduit un code source, écrit dans un langage lisible par un humain, en langage machine exécutable par le processeur. Un système d'exploitation gère le matériel — mémoire, disques, périphériques — et permet aux autres programmes de s'exécuter sans connaître les détails de la machine.

La complexité algorithmique mesure les ressources consommées par un algorithme selon la taille des données : c'est elle qui décide si un programme reste utilisable quand le volume grandit. Un algorithme deux fois plus rapide sur de petites données peut être inutilisable sur de grandes. Quant à la loi de Moore, formulée en 1965, elle observait que le nombre de transistors d'une puce doublait environ tous les deux ans : ce n'est pas une loi physique mais une prévision d'industriel, longtemps auto-réalisatrice, aujourd'hui essoufflée.`],
  ],

  "st-internet-reseaux": [
    ["Le réseau et ses services", `Internet est le réseau ; le Web n'est qu'un des services qui circulent dessus, au même titre que le courrier électronique ou la messagerie instantanée. La confusion est si répandue qu'elle brouille la compréhension du reste.

Internet descend d'ARPANET, réseau financé par l'agence de recherche du département américain de la Défense à la fin des années 1960, conçu pour relier des centres de recherche. Le Web, lui, est inventé en 1989 par Tim Berners-Lee au CERN : il combine des adresses uniformes, un protocole de transfert et un langage de description de pages, et il le publie sans brevet.`],
    ["Comment circule une donnée", `L'information est découpée en paquets. Le protocole IP les achemine entre machines identifiées par une adresse IP, identifiant numérique attribué à chaque équipement connecté. Chaque paquet peut emprunter une route différente et être réassemblé à l'arrivée : c'est ce qui rend le réseau robuste.

Comme les adresses numériques sont impraticables pour un humain, le système DNS traduit un nom de domaine en adresse IP : c'est l'annuaire du réseau, et sa panne suffit à rendre Internet apparemment inaccessible. Le s de https signifie que la connexion est chiffrée, ce qui empêche un tiers de lire ou de modifier ce qui transite.`],
    ["Protéger et gouverner", `Un VPN établit un tunnel chiffré entre un appareil et un serveur distant : le fournisseur d'accès ne voit plus la destination, mais l'opérateur du VPN, lui, la voit — la protection déplace la confiance, elle ne la supprime pas. Le chiffrement de bout en bout va plus loin : seuls l'expéditeur et le destinataire peuvent lire le message, le service qui l'achemine ne le peut pas.

La neutralité du net est un principe de gouvernance : les opérateurs ne doivent pas discriminer les flux selon leur origine, leur destination ou leur contenu. Inscrite dans le droit européen en 2015, elle vise à empêcher qu'un fournisseur d'accès favorise ses propres services ou ceux qui le rémunèrent.`],
  ],

  "st-transports": [
    ["La vapeur et le rail", `James Watt met au point dans les années 1760 une machine à vapeur réellement efficace, en ajoutant un condenseur séparé qui évite de refroidir le cylindre à chaque cycle. Le rendement change d'ordre de grandeur, et la machine cesse d'être cantonnée au pompage des mines.

Le chemin de fer qui en découle impose une transformation inattendue : l'unification de l'heure. Avant lui, chaque ville vivait à son heure solaire, et un horaire de train n'aurait eu aucun sens. C'est le besoin ferroviaire qui a imposé une heure commune sur un même réseau, puis les fuseaux horaires à l'échelle du globe.`],
    ["La route et l'air", `Nicolas-Joseph Cugnot construit en 1769 le premier véhicule automobile à vapeur, un fardier destiné à tirer des canons, lent et difficile à diriger. Il faut attendre 1886 pour que Karl Benz dépose le brevet de la première automobile à moteur à essence. En 1913, Henry Ford généralise la chaîne de montage mobile : la voiture vient à l'ouvrier au lieu de l'inverse, le temps d'assemblage s'effondre, et le prix avec lui.

Dans les airs, les frères Wright réalisent en 1903 le premier vol motorisé contrôlé : leur apport décisif n'est pas le moteur mais le contrôle en roulis par gauchissement des ailes. Un demi-siècle plus tard, le Concorde franchit le mur du son en transport de passagers ; exploité de 1976 à 2003, il n'a jamais été rentable.`],
    ["L'espace et la boîte", `La conquête spatiale commence en 1957 avec Spoutnik 1, premier satellite artificiel, dont le simple bip radio suffit à provoquer une crise politique aux États-Unis. Quatre ans plus tard, Iouri Gagarine devient le premier homme dans l'espace.

Mais l'innovation de transport qui a le plus transformé l'économie mondiale est bien moins spectaculaire : le conteneur normalisé, généralisé à partir des années 1960. En permettant de charger, transporter et décharger sans manipuler la marchandise, il a divisé le coût du fret maritime dans des proportions telles que la localisation des usines a cessé d'être contrainte par la distance.`],
  ],

  "st-energie-technologies": [
    ["Produire de l'électricité", `L'essentiel de l'électricité mondiale est produit de la même façon, quelle que soit la source : un alternateur, où un aimant tournant devant des bobines induit un courant. Charbon, gaz, nucléaire, hydraulique, éolien font tourner cet aimant par des moyens différents — l'éolienne convertit ainsi le vent en faisant entraîner par ses pales un rotor relié à un alternateur.

Le photovoltaïque est l'exception : la lumière y libère directement des électrons dans un semi-conducteur, sans pièce en mouvement. À ne pas confondre avec le solaire thermique, qui concentre le rayonnement pour produire de la chaleur, utilisée telle quelle ou pour faire de la vapeur.`],
    ["Stocker", `Le vrai verrou des énergies renouvelables n'est pas la production mais le stockage : il faut consommer l'électricité au moment où elle est produite, ou la conserver. Le moyen le plus massif reste mécanique : une centrale de pompage-turbinage remonte de l'eau vers un réservoir haut quand l'électricité est abondante, et la turbine quand elle manque.

À plus petite échelle, une batterie lithium-ion stocke l'énergie par déplacement d'ions entre deux électrodes, réversible sur des centaines à des milliers de cycles. La pile à combustible, elle, ne stocke rien : elle produit de l'électricité à partir d'hydrogène et d'oxygène, en rejetant de l'eau — l'hydrogène jouant alors le rôle de vecteur, qu'il faut avoir produit auparavant.`],
    ["Piloter et évaluer", `Un réseau électrique intelligent ajuste production et consommation grâce à des échanges d'information en temps réel : c'est la réponse à l'intermittence, qui consiste à déplacer la demande plutôt qu'à seulement ajouter de l'offre. Le compteur communicant, qui transmet à distance les données de consommation, en est le point d'entrée chez le particulier.

Toute évaluation sérieuse d'une technologie énergétique passe enfin par l'analyse du cycle de vie : un bilan des impacts de l'extraction des matériaux jusqu'au recyclage, en passant par la fabrication, le transport et l'usage. C'est la seule façon de comparer honnêtement des filières dont les impacts ne surviennent pas au même moment.`],
  ],

  "st-medecine-technologies": [
    ["Voir sans ouvrir", `L'imagerie a rendu visible l'intérieur du corps sans l'ouvrir : c'est la rupture du XXe siècle en médecine. Elle commence en 1895, quand Wilhelm Röntgen découvre les rayons X en observant une fluorescence inexpliquée ; il refusera de breveter sa découverte.

Trois techniques se sont ajoutées. Le scanner, ou tomodensitométrie, reconstruit des coupes à partir de multiples radiographies prises sous différents angles. L'échographie repose sur la réflexion d'ultrasons par les tissus, sans rayonnement ionisant, ce qui la rend sûre pour le suivi de grossesse. L'imagerie par résonance magnétique aligne les noyaux d'hydrogène du corps dans un champ magnétique intense, puis mesure leur retour à l'équilibre : elle distingue finement les tissus mous, là où les rayons X voient surtout les os.`],
    ["Réparer et remplacer", `Le stimulateur cardiaque est un appareil implanté qui régule le rythme du cœur par impulsions électriques ; les premiers modèles implantables datent de la fin des années 1950. En 1967, le chirurgien sud-africain Christiaan Barnard réalise la première greffe de cœur humain : le patient survit dix-huit jours, mais la faisabilité est démontrée. Le verrou n'était pas chirurgical mais immunologique, et ce sont les traitements antirejet qui ont rendu la greffe routinière.

La chirurgie assistée par robot transmet le geste du praticien à des instruments articulés introduits par de petites incisions : le robot n'opère pas seul, il filtre les tremblements et démultiplie la précision.`],
    ["Lire et fabriquer le vivant", `La PCR est une technique d'amplification de fragments d'ADN : à partir de quelques molécules, elle en produit des milliards de copies en quelques heures, rendant détectable ce qui ne l'était pas. Elle est devenue familière au grand public avec le dépistage du Covid-19.

Le vaccin à ARN messager applique une autre logique : au lieu d'injecter un agent pathogène atténué ou un antigène, il fournit aux cellules l'instruction de produire elles-mêmes cet antigène. La technologie était en développement depuis des décennies, ce qui explique la rapidité de son déploiement en 2020. La médecine personnalisée, enfin, adapte le traitement aux caractéristiques biologiques du patient — profil génétique d'une tumeur, métabolisme d'un médicament — plutôt qu'à une moyenne de population.`],
  ],

  "st-materiaux-fabrication": [
    ["L'invention qui compte", `L'interchangeabilité des pièces a rendu possible l'industrie moderne, plus encore que la machine à vapeur. Tant que chaque pièce devait être ajustée à la main à son voisine, aucune production en série n'était concevable : la réparation supposait un artisan, et non un magasin de pièces détachées. Rendre les pièces identiques dans une tolérance donnée, c'est rendre possible l'assemblage rapide, la maintenance et la division du travail.

Cette exigence a fait naître la métrologie industrielle, puis les normes. La norme ISO 9001, aujourd'hui, ne certifie pas la qualité d'un produit mais l'existence d'un système de management de la qualité : elle atteste d'une organisation, non d'un résultat.`],
    ["Machines et robots", `Une machine-outil à commande numérique voit ses mouvements pilotés par un programme plutôt que par la main de l'opérateur : la pièce est décrite numériquement, la machine l'exécute à l'identique autant de fois qu'on veut. Un robot industriel est, lui, un manipulateur programmable multi-axes, capable de tâches variées selon son programme et son outil.

L'impression tridimensionnelle par dépôt de matière procède à l'inverse de l'usinage : elle construit couche par couche à partir d'un modèle numérique au lieu d'enlever de la matière. Cela autorise des géométries impossibles à usiner, mais avec des cadences et des propriétés mécaniques encore souvent inférieures.`],
    ["Organiser et durer", `Le lean manufacturing, formalisé chez Toyota, vise à éliminer les gaspillages de production : attentes, stocks, déplacements, défauts. Le juste-à-temps en est la composante la plus connue — approvisionner au moment précis du besoin, sans stock tampon — dont les crises logistiques récentes ont rappelé la fragilité.

Trois notions cadrent aujourd'hui la conception. L'éco-conception intègre dès le départ les impacts sur tout le cycle de vie du produit. L'économie circulaire vise à maintenir les matières en usage le plus longtemps possible, par la réparation, le réemploi et le recyclage. L'obsolescence logicielle, enfin, désigne l'arrêt des mises à jour qui rend un appareil inutilisable ou vulnérable alors qu'il fonctionne encore : c'est devenu le principal facteur de mise au rebut des équipements numériques.`],
  ],

  "st-mathematiques": [
    ["Les nombres", `Un nombre premier est un entier supérieur à un divisible seulement par un et par lui-même. Euclide a démontré il y a plus de deux mille ans qu'il en existe une infinité ; leur répartition reste l'un des sujets les plus actifs des mathématiques, et leur difficulté de factorisation fonde la cryptographie moderne.

Un nombre irrationnel ne peut s'écrire comme quotient de deux entiers : sa découverte, attribuée à l'école pythagoricienne pour la racine de deux, a été un choc philosophique. Pi est le rapport entre la circonférence d'un cercle et son diamètre — irrationnel et même transcendant. Le nombre d'or, environ 1,618, est solution d'une équation du second degré et apparaît dans la suite de Fibonacci ; les propriétés esthétiques qu'on lui prête relèvent souvent de la légende plus que de la mesure.`],
    ["Démontrer", `Le théorème de Pythagore énonce que dans un triangle rectangle, le carré de l'hypoténuse égale la somme des carrés des deux autres côtés. Connu empiriquement de plusieurs civilisations, il doit aux Grecs sa démonstration.

Une conjecture n'est pas un théorème : elle attend une démonstration, parfois pendant des siècles. Le dernier théorème de Fermat, énoncé en 1637 dans une marge, n'a été démontré qu'en 1994 par Andrew Wiles, au terme de sept ans de travail solitaire et par des moyens que Fermat ne pouvait pas connaître. La conjecture de Poincaré, qui portait sur la topologie de l'espace en trois dimensions, a été démontrée en 2003 par Grigori Perelman, qui a refusé la médaille Fields et le million de dollars associés.`],
    ["Reconnaître et buter", `La médaille Fields est la plus haute distinction en mathématiques, remise tous les quatre ans à des chercheurs de moins de quarante ans — il n'existe pas de prix Nobel de mathématiques. Les problèmes du prix du millénaire sont sept problèmes majeurs identifiés en 2000, dotés chacun d'un million de dollars ; un seul, la conjecture de Poincaré, a été résolu.

Les mathématiques connaissent enfin leurs propres limites internes. Les théorèmes d'incomplétude de Gödel, établis en 1931, montrent que tout système formel suffisamment riche contient des énoncés vrais qu'il ne peut pas démontrer en son sein. Le résultat a mis fin au projet de fonder définitivement les mathématiques sur un socle complet et cohérent.`],
  ],

  "st-statistiques-donnees": [
    ["Résumer une population", `La moyenne et la médiane ne disent pas la même chose. La médiane partage la population en deux moitiés égales ; la moyenne, elle, dépend des valeurs extrêmes. Sur des revenus, quelques très hauts salaires tirent la moyenne vers le haut sans déplacer la médiane : c'est pourquoi la médiane est plus parlante pour décrire une situation typique.

L'écart type mesure la dispersion des valeurs autour de la moyenne : deux populations de même moyenne peuvent être radicalement différentes selon qu'elles sont resserrées ou étalées. En économie, un indice rapporte une valeur à une base de référence, souvent fixée à cent : il permet de comparer des évolutions, non des niveaux.`],
    ["Interroger sans tout interroger", `Un échantillon représentatif reproduit la structure de la population étudiée sur les critères pertinents : âge, sexe, catégorie sociale, région. Sa taille compte moins que sa construction — un échantillon mal constitué de dix mille personnes vaut moins qu'un bon échantillon de mille.

La marge d'erreur indique l'intervalle dans lequel se situe probablement la valeur réelle : annoncer un score sans elle est une faute d'interprétation. Deux biais guettent. Le biais de sélection tient à la façon dont l'échantillon a été constitué : un sondage en ligne n'interroge que des gens connectés et volontaires. Le biais du survivant consiste à n'observer que les cas ayant subsisté — étudier les entreprises qui ont réussi sans regarder celles qui ont disparu conduit à des conclusions inversées.`],
    ["Ne pas conclure trop vite", `Une corrélation n'établit jamais une causalité : c'est l'erreur d'interprétation la plus répandue. Deux variables peuvent évoluer ensemble parce que l'une cause l'autre, parce que l'autre cause l'une, parce qu'un facteur tiers les cause toutes deux, ou par pure coïncidence sur un jeu de données assez large.

L'expression toutes choses égales par ailleurs désigne précisément l'effort pour isoler l'effet d'une variable en neutralisant les autres : c'est le geste central de l'analyse statistique, et sa difficulté principale. Enfin, l'anonymisation d'un jeu de données est un traitement rendant impossible la réidentification des personnes ; elle est nettement plus exigeante que la simple suppression des noms, car le croisement de quelques attributs suffit souvent à réidentifier un individu.`],
  ],

  "st-inventions-quotidien": [
    ["L'observation et le hasard", `Beaucoup d'inventions quotidiennes viennent d'une observation faite ailleurs. Georges de Mestral invente le velcro après avoir examiné au microscope les fruits de bardane accrochés au poil de son chien : un système de crochets et de boucles, qu'il reproduit en textile.

Le hasard fait le reste. En 1928, Alexander Fleming remarque qu'une moisissure ayant contaminé une boîte de Petri empêche les bactéries de pousser autour d'elle : c'est la pénicilline, dont l'exploitation industrielle prendra encore quinze ans. En 1945, un ingénieur constate qu'une barre chocolatée a fondu dans sa poche près d'un magnétron de radar : le four à micro-ondes en sort. En 1968, une colle jugée trop faible mise au point chez 3M trouve sa fonction des années plus tard, dans les notes repositionnables.`],
    ["Écrire et voir", `Lewis Waterman met au point à la fin du XIXe siècle le premier stylo-plume à réservoir vraiment fiable, en résolvant le problème de l'alimentation en encre par un conduit à capillarité. Dans les années 1930, le Hongrois László Bíró conçoit le stylo à bille moderne, avec une encre visqueuse à séchage rapide inspirée de l'imprimerie — dans plusieurs langues, le stylo porte encore son nom.

Louis Braille, aveugle depuis l'enfance, invente à seize ans le système de lecture tactile qui porte son nom : six points en relief, combinables, qui permettent de lire mais aussi d'écrire. En 1888, l'appareil Kodak à pellicule souple rend la photographie accessible aux amateurs, avec un slogan qui dit tout du basculement : vous pressez le bouton, nous faisons le reste.`],
    ["Copier et calculer", `En 1938, Chester Carlson met au point la photocopie électrostatique, procédé si peu compris à l'époque qu'une vingtaine d'entreprises le refusent avant qu'une petite société n'en fasse Xerox.

L'invention la plus déterminante de la liste reste sans doute le circuit intégré, mis au point en 1958 : graver plusieurs composants sur une même plaquette de semi-conducteur au lieu de les assembler séparément. Toute l'électronique moderne en découle, et avec elle les ordinateurs, les téléphones et l'essentiel des objets qui nous entourent.`],
  ],

  "st-espace-exploration": [
    ["Aller sur la Lune", `Apollo 11 dépose les premiers hommes sur la Lune en juillet 1969. Six missions Apollo au total y ont posé des équipages, entre 1969 et 1972 — Apollo 13, victime d'une explosion en vol, a dû renoncer et revenir. Douze hommes ont marché sur la Lune, et personne n'y est retourné depuis.

En orbite basse, la Station spatiale internationale est occupée en continu depuis novembre 2000 : c'est le plus long séjour humain ininterrompu hors de la Terre, et l'un des rares programmes de coopération à avoir survécu aux crises diplomatiques entre ses partenaires.`],
    ["Voir loin", `Le télescope spatial Hubble, lancé en 1990, a transformé l'astronomie en s'affranchissant de l'atmosphère terrestre. Son miroir présentait à l'origine un défaut de forme, corrigé lors d'une mission de maintenance en 1993. Le télescope James Webb, lancé en 2021, observe principalement dans l'infrarouge, ce qui lui permet de voir à travers les nuages de poussière et de détecter les objets les plus anciens et les plus lointains.

Les sondes vont plus loin encore. Voyager 1, lancée en 1977, est l'objet humain le plus éloigné de la Terre. Elle est sortie de l'héliosphère, la bulle de vent solaire, mais n'a nullement quitté le système solaire au sens gravitationnel : il lui faudrait des dizaines de milliers d'années pour dépasser le nuage d'Oort.`],
    ["L'Europe et les débris", `L'Agence spatiale européenne coordonne les programmes du continent, avec une répartition industrielle entre États membres. Ses lanceurs de la famille Ariane décollent depuis Kourou, en Guyane, site choisi pour sa proximité de l'équateur — la rotation terrestre y donne un surcroît de vitesse gratuit.

L'Europe a aussi réussi l'une des manœuvres les plus délicates de l'histoire spatiale : la mission Rosetta, après dix ans de voyage, a posé en 2014 le module Philae sur une comète. Reste un problème croissant en orbite basse : le syndrome de Kessler décrit une réaction en chaîne où les collisions de débris engendrent d'autres débris, jusqu'à rendre certaines orbites inexploitables.`],
  ],

  "st-securite-numerique": [
    ["Tromper l'humain", `La faille la plus fréquente n'est pas technique : c'est l'humain qu'on trompe. L'hameçonnage consiste à obtenir des informations — identifiants, coordonnées bancaires — en se faisant passer pour un tiers de confiance : banque, administration, service informatique interne. Aucune protection technique ne suffit si l'utilisateur communique lui-même ses accès.

Le rançongiciel est devenu la menace la plus coûteuse pour les organisations : le logiciel chiffre les données et exige un paiement pour la clé de déchiffrement. La seule parade réellement efficace reste la sauvegarde régulière et déconnectée, testée pour sa capacité effective à restaurer.`],
    ["Se protéger", `Ce qui rend un mot de passe robuste, c'est sa longueur et son imprévisibilité, non la présence obligatoire de caractères spéciaux : une longue phrase aléatoire vaut mieux qu'un mot court truffé de substitutions prévisibles. Un gestionnaire de mots de passe est un coffre chiffré qui stocke et génère des mots de passe uniques pour chaque service, ce qui règle le vrai problème — la réutilisation.

L'authentification à deux facteurs combine deux éléments de nature différente : quelque chose que l'on sait, quelque chose que l'on possède, quelque chose que l'on est. Elle protège même lorsque le mot de passe a fuité.`],
    ["Les techniques et le cadre", `Le chiffrement asymétrique repose sur deux clés : une clé publique, diffusable, qui chiffre, et une clé privée, gardée secrète, qui déchiffre. C'est ce qui permet de communiquer en sécurité avec un inconnu sans lui avoir jamais transmis de secret. La signature électronique en dérive : un procédé cryptographique qui garantit l'origine et l'intégrité d'un document.

Deux menaces plus techniques complètent le tableau. Une faille dite zero-day est une vulnérabilité exploitée avant qu'un correctif n'existe : le défenseur n'a par définition aucun délai. Une attaque par déni de service sature volontairement un service pour le rendre indisponible, souvent depuis des milliers de machines compromises. En France, l'ANSSI, agence nationale de la sécurité des systèmes d'information, accompagne l'État et les opérateurs d'importance vitale.`],
  ],

  "st-histoire-sciences": [
    ["Ce qui fait une science", `Selon Karl Popper, une théorie scientifique doit pouvoir être réfutée : il faut qu'une observation puisse, en principe, la contredire. C'est ce critère de réfutabilité qui distingue une théorie scientifique d'une croyance — une affirmation compatible avec tous les résultats possibles n'apprend rien.

La production du savoir s'organise autour de la relecture par les pairs : avant publication, un article est examiné par des chercheurs du domaine, qui en évaluent la méthode et les conclusions. Le dispositif n'est pas infaillible, comme l'a montré la crise de la reproductibilité : le constat qu'une part importante d'études publiées, notamment en psychologie et en biomédecine, ne se reproduit pas lorsqu'on refait l'expérience.`],
    ["Éprouver un traitement", `Claude Bernard formule en 1865, dans son Introduction à l'étude de la médecine expérimentale, les principes de la méthode expérimentale appliquée au vivant : hypothèse, expérience, contrôle.

L'essai clinique en double aveugle en est l'héritier direct : ni le patient ni le soignant ne savent qui reçoit le traitement et qui reçoit le placebo, ce qui neutralise les attentes des deux côtés. Cette précaution est nécessaire à cause de l'effet placebo, amélioration réelle due à l'attente du patient plutôt qu'au produit administré — effet mesurable, parfois important, et qui rend toute évaluation sans comparateur trompeuse.`],
    ["Ceux qui l'ont faite, et à quel prix", `Galilée est condamné en 1633 pour avoir défendu l'héliocentrisme : l'affaire est devenue le symbole du conflit entre autorité religieuse et démarche scientifique, même si son déroulement réel fut plus politique et plus personnel que ce résumé.

Marie Curie est la seule personne à avoir reçu deux prix Nobel dans deux disciplines scientifiques différentes, en physique puis en chimie. Rosalind Franklin, elle, produit les clichés de diffraction aux rayons X qui permettent d'établir la structure en double hélice de l'ADN ; sa contribution fut longtemps minorée, et elle mourut avant l'attribution du Nobel à ses collègues. Sur le plan des décisions publiques, enfin, le principe de précaution inscrit en droit français impose de prendre des mesures proportionnées face à un risque incertain mais grave : il n'ordonne pas l'abstention, il oblige à agir malgré l'incertitude.`],
  ],
};
