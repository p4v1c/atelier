/** Sport, premier lot — les cours des treize notions. */
import type { LotCours } from "../commun";

export const COURS_SPORT: LotCours = {
  "sp-football": [
    ["Une codification anglaise", `Le football moderne naît en Angleterre en 1863, quand des clubs londoniens fondent la Football Association et se mettent d'accord sur un jeu commun : le ballon au pied, sans porter la balle à la main. Ceux qui refusent cette règle partiront fonder le rugby. La FIFA, créée en 1904 à Paris, fédère aujourd'hui plus de deux cents associations nationales et organise la Coupe du monde.

Une équipe aligne onze joueurs ; en dessous de sept, le match ne peut pas se poursuivre et est arrêté. Le hors-jeu, la règle la plus discutée du jeu, s'apprécie au moment où le ballon est joué par le partenaire, non au moment où l'attaquant le reçoit : c'est cette photographie instantanée, prise à la passe, qui rend certaines décisions si difficiles à trancher à l'œil nu.`],
    ["Les grandes compétitions", `La première Coupe du monde se tient en 1930 en Uruguay, à l'initiative du Français Jules Rimet, alors président de la FIFA ; le pays hôte l'emporte. Le Brésil en détient le record avec cinq titres. La France l'a remportée pour la première fois en 1998, chez elle, puis en 2018 en Russie.

Côté clubs, la Coupe des clubs champions européens est créée en 1955 sur une idée du journal L'Équipe ; devenue Ligue des champions en 1992, elle est aujourd'hui la compétition de clubs la plus riche du monde. Le Real Madrid en domine largement le palmarès.`],
    ["L'arbitrage assisté", `Deux technologies ont modifié l'arbitrage. La technologie sur la ligne de but, adoptée après un but non accordé à l'Angleterre en 2010, détermine automatiquement si le ballon a entièrement franchi la ligne et prévient l'arbitre en une seconde. L'assistance vidéo, elle, permet de revoir certaines décisions à l'image ; elle a été utilisée pour la première fois en Coupe du monde en 2018.

Son périmètre est volontairement étroit : buts, penaltys, cartons rouges directs et erreurs d'identité. Elle ne réexamine pas tout le match, et son usage reste discuté, autant pour la précision qu'elle apporte que pour les interruptions qu'elle impose au jeu.`],
  ],

  "sp-athletisme": [
    ["Courir", `Le marathon mesure quarante-deux kilomètres cent quatre-vingt-quinze mètres : cette distance étrange a été fixée aux Jeux de Londres en 1908, le parcours partant du château de Windsor pour s'achever devant la loge royale. Elle a ensuite été adoptée définitivement.

Sur les courses courtes, un record du monde n'est homologué que si le vent favorable ne dépasse pas deux mètres par seconde : au-delà, la poussée fausse la comparaison. Un faux départ est un départ pris avant le signal, ou dans un délai que la physiologie juge impossible — moins d'un dixième de seconde après le coup de pistolet. Le relais quatre fois cent mètres fait circuler un témoin entre quatre coureurs, dans une zone de transmission délimitée : la plupart des disqualifications viennent de là. Le trois mille mètres steeple ajoute à la course des barrières fixes et une rivière.`],
    ["Sauter et lancer", `Le saut en hauteur a changé de technique en une seule soirée : à Mexico en 1968, l'Américain Dick Fosbury franchit la barre sur le dos et remporte l'or. Le rouleau dorsal, ou Fosbury flop, s'est imposé partout en quelques années, parce qu'il permet au centre de gravité du sauteur de passer sous la barre pendant que son corps passe dessus.

Les lancers sont normalisés au gramme près : le poids masculin pèse sept kilos deux cent soixante en compétition internationale, contre quatre kilos chez les femmes. Le décathlon réunit dix épreuves de course, de saut et de lancer réparties sur deux jours, avec un barème qui convertit chaque performance en points ; l'heptathlon en est l'équivalent féminin, avec sept épreuves.`],
    ["Records et soupçons", `Usain Bolt détient depuis 2009 les records du monde du cent et du deux cents mètres, respectivement en neuf secondes cinquante-huit et dix-neuf secondes dix-neuf. Aucun sprinteur ne s'en est approché depuis, ce qui est rare dans l'histoire de la discipline.

L'athlétisme a aussi été l'un des sports les plus touchés par le dopage, au point d'avoir inventé un outil de détection indirect : le passeport biologique. Plutôt que de chercher une substance, il suit dans le temps les paramètres sanguins d'un athlète et signale les variations physiologiquement improbables. Il permet de sanctionner sans avoir identifié le produit employé.`],
  ],

  "sp-cyclisme": [
    ["Le Tour et ses maillots", `Le Tour de France est créé en 1903 par le journal L'Auto, pour concurrencer un titre rival : l'épreuve est d'abord un instrument commercial de presse. Le maillot du leader est jaune parce que c'était la couleur du papier sur lequel L'Auto était imprimé — la marque d'origine est restée quand le journal a disparu.

Trois autres maillots complètent le classement général : le vert récompense le classement par points, souvent remporté par un sprinteur ; le blanc à pois rouges désigne le meilleur grimpeur ; le blanc, le meilleur jeune coureur, âgé de moins de vingt-six ans. Un coureur peut en porter plusieurs, mais il n'en revêt qu'un, le plus prestigieux, et cède les autres au suivant du classement.`],
    ["Grands tours et classiques", `Trois épreuves de trois semaines forment les grands tours : le Tour de France, le Tour d'Italie, ou Giro, et le Tour d'Espagne, ou Vuelta. Peu de coureurs en ont remporté les trois dans une carrière, et aucun les trois la même année.

Les classiques sont des courses d'un jour, souvent plus anciennes que les grands tours. Paris-Roubaix, surnommée l'Enfer du Nord, traverse une trentaine de secteurs pavés et se dispute par tous les temps. Un contre-la-montre, à l'inverse des courses en ligne, fait partir les coureurs séparément contre le chronomètre : aucune aspiration, aucune tactique de groupe. Le peloton désigne le groupe principal, l'échappée le ou les coureurs partis devant, dont le sort dépend de la volonté du peloton de les reprendre.`],
    ["Le poids de la triche", `Aucun sport n'a été autant marqué par le dopage. Lance Armstrong, vainqueur de sept Tours de France consécutifs entre 1999 et 2005, a été déchu de la totalité de ses titres en 2012 après une enquête de l'agence antidopage américaine ; ces éditions n'ont pas été réattribuées.

Une seconde forme de triche est apparue depuis : le dopage mécanique, c'est-à-dire la dissimulation d'un petit moteur d'assistance dans le cadre ou la roue. Un premier cas a été sanctionné en cyclo-cross en 2016. Les vélos sont désormais contrôlés par balayage magnétique et imagerie sur les grandes épreuves.`],
  ],

  "sp-tennis-raquettes": [
    ["Compter les points", `Le comptage du tennis est un héritage sans logique apparente : quinze, trente, quarante, jeu. L'explication la plus répandue le fait remonter à un cadran d'horloge médiévale divisé en quarts, le quarante-cinq ayant été raccourci en quarante à l'usage. Six jeux gagnés avec deux d'écart donnent le set ; à six jeux partout, un tie-break, ou jeu décisif, départage les joueurs et évite les sets interminables.

Au service, le joueur dispose de deux tentatives : une première faute ne coûte rien, la seconde donne le point à l'adversaire. Un ace est un service gagnant que le receveur ne touche pas.`],
    ["Les quatre tournois majeurs", `Le Grand Chelem réunit quatre tournois : l'Open d'Australie en janvier, Roland-Garros au printemps, Wimbledon en été et l'US Open à la fin de l'été. Ils se disputent sur trois surfaces différentes, ce qui explique que peu de joueurs les dominent tous : Roland-Garros est le seul disputé sur terre battue, surface lente qui favorise les longs échanges, quand Wimbledon se joue sur gazon, plus rapide.

La Coupe Davis, créée en 1900, oppose des sélections nationales masculines ; elle a changé plusieurs fois de format depuis 2019. Côté droits, l'Américaine Billie Jean King a mené dans les années 1970 le combat pour l'égalité des primes entre femmes et hommes : l'US Open a cédé dès 1973, Wimbledon seulement en 2007.`],
    ["Les cousins du tennis", `Le badminton se joue avec un volant, dont la traînée aérodynamique interdit tout rebond : la balle ne touche jamais le sol en jeu, ce qui produit les échanges les plus rapides de tous les sports de raquette.

Le padel se joue à quatre sur un court clos par des parois vitrées, qui font partie du jeu : la balle peut être reprise après avoir rebondi sur un mur, comme à la pelote. Né au Mexique dans les années 1960, il connaît depuis les années 2010 une croissance rapide en Espagne puis en France. Le tennis de table, le squash et la pelote basque complètent une famille où le geste change autant que l'espace de jeu.`],
  ],

  "sp-sports-collectifs": [
    ["Le basket, une invention datée", `Le basket-ball a une date et un auteur : James Naismith, professeur d'éducation physique dans le Massachusetts, l'invente en décembre 1891 pour occuper des étudiants pendant l'hiver, avec deux paniers de pêches cloués à une coursive. Le sport passe de treize règles écrites en une soirée à une pratique mondiale en moins d'un siècle.

Une équipe aligne cinq joueurs sur le terrain. Un panier vaut deux points, ou trois s'il est marqué au-delà d'une ligne courbe adoptée en NBA en 1979 : cette ligne a transformé la tactique du jeu bien plus que toute autre règle, en donnant une prime au tir lointain.`],
    ["Le rugby et la passe en arrière", `Le rugby à quinze aligne quinze joueurs, huit avants et sept trois-quarts. Un essai vaut cinq points, la transformation qui le suit en ajoute deux. Le rugby à treize est un code distinct, né d'une scission de 1895 sur la question du remboursement des joueurs.

La règle qui structure tout le jeu est l'interdiction de la passe en avant : le ballon ne peut jamais être transmis vers la ligne d'en-but adverse. Le porteur doit donc avancer seul, ses soutiens restant derrière lui, ce qui explique la forme des lignes d'attaque en diagonale et l'importance du contact.`],
    ["Volley et handball", `Le volley-ball est inventé en 1895 par William Morgan, un collègue de Naismith, pour offrir un jeu moins heurté aux hommes d'affaires de sa salle. Une équipe compte six joueurs et ne peut enchaîner que trois touches avant de renvoyer le ballon, le contre au filet ne comptant pas dans ce total : réception, passe, attaque, la séquence est écrite dans la règle.

Le handball se joue à sept, dont un gardien, seul autorisé dans la zone de six mètres. La France y domine le handball international depuis les années 1990, avec plusieurs générations titrées aux championnats du monde, d'Europe et aux Jeux.`],
  ],

  "sp-sports-hiver-nautiques": [
    ["Dans l'eau", `La natation de compétition reconnaît quatre nages : la nage libre, où la technique est libre mais où tous choisissent le crawl, le dos, la brasse et le papillon. Les records sont homologués séparément en bassin de vingt-cinq et de cinquante mètres, parce que les virages, deux fois plus nombreux en petit bassin, font gagner un temps considérable : une poussée sur le mur est plus rapide que la nage.

L'Américain Michael Phelps détient le record de médailles olympiques toutes disciplines confondues, avec vingt-huit médailles dont vingt-trois en or. Le triathlon olympique enchaîne sans interruption natation, cyclisme et course à pied, les temps de transition étant comptés dans le résultat.`],
    ["Sur la neige et la glace", `Le ski alpin descend une pente balisée le plus vite possible ; le ski de fond progresse en terrain varié, avec des montées, sur des skis fixés seulement à l'avant du pied. Ce sont deux familles distinctes, avec leur matériel et leurs fédérations.

Le combiné nordique associe le saut à ski et le ski de fond dans une même épreuve. Le biathlon, lui, alterne ski de fond et tir à la carabine : hériter d'un entraînement militaire scandinave, il demande de faire chuter son rythme cardiaque en quelques secondes pour viser juste, ce qui en fait l'un des sports les plus exigeants mentalement. Le patinage artistique combine éléments techniques imposés et interprétation musicale, notés séparément.`],
    ["À la voile", `Le Vendée Globe est la principale course à la voile en solitaire autour du monde, sans escale et sans assistance. Partie des Sables-d'Olonne tous les quatre ans, elle dure entre deux et trois mois selon les éditions et les bateaux.

La Coupe de l'America est plus ancienne encore : disputée pour la première fois en 1851, elle est la plus ancienne compétition sportive internationale encore courue aujourd'hui. Son format singulier veut que le détenteur choisisse en partie les règles et le lieu de la défense de son titre, ce qui en fait autant un affrontement juridique et technologique que sportif.`],
  ],

  "sp-corps-performance": [
    ["Ce que consomme l'effort", `La VO2 max mesure la consommation maximale d'oxygène d'un organisme à l'effort : c'est un plafond, exprimé en millilitres par kilo et par minute. Élevée chez les athlètes d'endurance, elle ne suffit pas à prédire la performance, car l'économie de course, c'est-à-dire l'énergie dépensée pour une vitesse donnée, compte au moins autant.

Le seuil anaérobie désigne l'intensité au-delà de laquelle le lactate s'accumule dans le sang plus vite qu'il n'est éliminé : au-dessus, l'effort ne peut être maintenu longtemps. Les fibres musculaires de type I, dites lentes, sont endurantes et peu puissantes ; les fibres de type II, rapides, produisent beaucoup de force sur peu de temps. Leur proportion varie selon les individus et se modifie peu à l'entraînement.`],
    ["S'entraîner, c'est récupérer", `L'entraînement ne rend pas plus fort pendant l'effort : il crée une fatigue, et c'est pendant la récupération que l'organisme reconstruit un peu au-delà du niveau initial. Ce phénomène s'appelle la surcompensation, et il donne son rythme à toute planification sérieuse : sans récupération suffisante, l'effet s'inverse.

Le surentraînement est précisément cet effet inversé : un état de fatigue durable, avec baisse des performances, troubles du sommeil et parfois de l'humeur, dont la sortie demande des semaines, voire des mois d'arrêt. Le sommeil conditionne à la fois la récupération physique et la consolidation de l'apprentissage moteur : c'est la variable la plus souvent négligée par les sportifs amateurs.`],
    ["Les pièges du corps", `L'entraînement en altitude est utilisé pour stimuler la production de globules rouges, la raréfaction de l'oxygène poussant l'organisme à s'adapter. La formule la plus répandue consiste à vivre en altitude et à s'entraîner plus bas, pour ne pas dégrader la qualité des séances.

L'échauffement élève progressivement la température musculaire et la vigilance neuromusculaire ; on le distingue aujourd'hui nettement des étirements passifs, qui, tenus longtemps avant l'effort, peuvent au contraire réduire la puissance disponible. La déshydratation dégrade la performance dès une perte de quelques pour cent du poids corporel. Enfin, le RED-S, ou déficit énergétique relatif dans le sport, désigne les conséquences d'apports alimentaires durablement inférieurs à la dépense : troubles hormonaux, fragilité osseuse, blessures à répétition.`],
  ],

  "sp-sport-societe": [
    ["Une tribune politique", `Le sport a servi de vitrine politique bien avant d'être une industrie. Aux Jeux de Mexico en 1968, deux athlètes américains, Tommie Smith et John Carlos, lèvent sur le podium un poing ganté de noir pour dénoncer la ségrégation ; ils sont exclus des Jeux dans les heures qui suivent. À Munich en 1972, un commando palestinien prend en otage puis tue onze membres de la délégation israélienne. En 1980, les États-Unis et une soixantaine de pays boycottent les Jeux de Moscou après l'invasion soviétique de l'Afghanistan ; le bloc de l'Est rendra la pareille à Los Angeles en 1984.

À l'inverse, le sport a parfois servi la réconciliation : en 1995, la Coupe du monde de rugby remportée par l'Afrique du Sud, avec Nelson Mandela remettant le trophée vêtu du maillot des Springboks, est devenue le symbole d'une nation cherchant à sortir de l'apartheid.`],
    ["Le sport comme image", `Le sportwashing désigne l'usage d'événements ou de clubs sportifs par un État ou une organisation pour améliorer son image et détourner l'attention de critiques qui lui sont adressées. Le terme s'est répandu autour de l'attribution de grandes compétitions et du rachat de clubs européens dans les années 2010.

Il faut le distinguer de la simple diplomatie sportive, plus ancienne : la rencontre de tennis de table entre les États-Unis et la Chine en 1971 a précédé et préparé le rapprochement diplomatique entre les deux pays.`],
    ["L'organisation française", `En France, le sport est organisé par la loi Avice de 1984, qui fixe les rapports entre l'État et le mouvement sportif. Chaque discipline est confiée à une fédération, à laquelle l'État accorde une délégation : le monopole d'organisation des compétitions officielles et de délivrance des titres nationaux, en échange d'obligations de service public.

Deux dispositifs récents visent l'accès et la santé. Le pass'Sport, créé en 2022, est une aide financière à la prise de licence pour les enfants de familles modestes. Le sport-santé sur ordonnance permet à un médecin de prescrire une activité physique adaptée à un patient atteint d'une affection de longue durée. Aux Jeux de Paris en 2024, le CIO a par ailleurs atteint pour la première fois la parité stricte dans les quotas d'athlètes.`],
  ],

  "sp-arbitrage-regles": [
    ["Qui écrit la règle", `Une règle du jeu n'est pas une loi : elle est édictée par la fédération internationale de la discipline, non par un État. Au football, c'est même un organisme distinct, l'International Football Association Board, qui détient ce pouvoir depuis 1886. Une fédération peut donc modifier son sport d'une saison à l'autre, ce qu'aucun législateur ne ferait avec un code.

L'arbitre applique cette règle sur le terrain. Au football, il est assisté de deux officiels placés sur la touche, chargés notamment de signaler le hors-jeu, et d'un quatrième arbitre. La règle de l'avantage lui permet de ne pas siffler une faute lorsque l'équipe victime tire un bénéfice à poursuivre le jeu : sanctionner reviendrait alors à punir l'attaquant. Le temps additionnel compense les arrêts de jeu, sans les compenser exactement.`],
    ["La machine entre dans le jeu", `Plusieurs sports ont confié à la technique ce que l'œil ne peut trancher. L'escrime a été la première, dès le XXe siècle : un circuit électrique signale les touches valables par un signal lumineux, et les juges humains n'ont plus à départager des actions séparées par quelques millièmes de seconde.

La photo-finish enregistre en continu, dans une fente placée sur la ligne d'arrivée, une image qui n'est pas une photographie instantanée mais un défilement : c'est ce qui permet de départager des athlètes séparés par un centième. Le hawk-eye, au tennis, reconstitue la trajectoire de la balle à partir de plusieurs caméras et affiche son point d'impact ; plusieurs tournois ont depuis remplacé entièrement les juges de ligne. Le challenge, enfin, donne aux équipes un nombre limité de demandes de révision vidéo, ce qui déplace une part de l'arbitrage vers les compétiteurs eux-mêmes.`],
    ["L'égalité des armes", `Toutes ces règles servent un même principe : l'égalité des armes, c'est-à-dire l'idée que tous les concurrents disputent l'épreuve dans des conditions comparables, afin que le résultat dépende de la performance et non des circonstances.

C'est aussi la raison pour laquelle le matériel est homologué. Une perche, une combinaison de natation, une semelle de chaussure ou un vélo doivent respecter des spécifications précises, car un avantage technique disponible pour quelques-uns seulement fausserait la comparaison. L'histoire récente en donne deux exemples : les combinaisons en polyuréthane, interdites en 2010 après une avalanche de records, et les chaussures à plaque de carbone, dont l'épaisseur de semelle est désormais plafonnée.`],
  ],

  "sp-sports-precision": [
    ["Le judo et l'escrime", `Le judo est fondé en 1882 par le Japonais Jigorō Kanō, qui réorganise les techniques des anciennes écoles de combat autour d'un principe : le meilleur emploi de l'énergie, c'est-à-dire utiliser la force de l'adversaire plutôt que d'y opposer la sienne. L'ippon récompense une action décisive — projection sur le dos avec contrôle, immobilisation tenue — et met immédiatement fin au combat.

L'escrime se pratique avec trois armes aux règles distinctes. Au fleuret, seul le tronc compte et une convention de priorité détermine qui marque en cas de touches simultanées. Au sabre, les coups peuvent être portés du tranchant, au-dessus de la ceinture. À l'épée, la touche est valable sur tout le corps et sans priorité : les deux tireurs peuvent marquer en même temps, ce qui en fait l'arme la plus proche du duel.`],
    ["Frapper et viser", `Le taekwondo, art martial coréen devenu olympique en 2000, privilégie les techniques de jambes, ce qui explique la hauteur inhabituelle de ses frappes. La boxe anglaise n'autorise que les coups de poing, quand la boxe française, ou savate, admet aussi les coups de pied portés avec la chaussure.

Le tir sportif à dix mètres se dispute à la carabine ou au pistolet à air comprimé, sur une cible dont le centre fait quelques millimètres : c'est une épreuve de précision pure, où le contrôle de la respiration et du rythme cardiaque décide du résultat. Le curling, lui, se joue sur une piste de glace avec des pierres de granit poli, deux équipiers balayant devant la pierre pour en modifier la trajectoire et la distance.`],
    ["Les disciplines de l'esprit", `Les échecs se jouent sur un échiquier de soixante-quatre cases, huit sur huit. La partie a longtemps servi de mesure de l'intelligence humaine, jusqu'à ce qu'une machine s'en mêle : en 1997, le champion du monde Garry Kasparov perd un match contre l'ordinateur Deep Blue d'IBM. L'événement a marqué une bascule symbolique, même si les programmes de l'époque procédaient par calcul massif et non par compréhension du jeu.

Aujourd'hui, aucun humain ne bat plus les meilleurs programmes, et les joueurs les utilisent comme outils d'analyse et d'entraînement. Le débat sur le statut sportif des échecs, du bridge ou du sport électronique reste ouvert : leur point commun est de reposer sur la codification et la compétition plus que sur la dépense physique.`],
  ],

  "sp2-gymnastique": [
    ["Deux programmes distincts", `La gymnastique artistique ne comporte pas les mêmes agrès pour les hommes et pour les femmes, particularité qui n'a pas d'équivalent dans les autres sports olympiques. Les hommes concourent sur six agrès — sol, cheval d'arçons, anneaux, saut, barres parallèles, barre fixe — les femmes sur quatre : saut, barres asymétriques, poutre et sol.

Cette répartition, héritée du XIXe siècle, oppose deux logiques : force et suspension du côté masculin, équilibre et expression du côté féminin, le sol féminin étant seul à se dérouler sur musique. Elle est régulièrement discutée, sans que la fédération internationale l'ait modifiée.`],
    ["Dix centimètres", `La poutre mesure dix centimètres de large, cinq mètres de long, et se situe à un mètre vingt-cinq du sol. Sur cette bande plus étroite qu'un pied, les gymnastes enchaînent sauts, retournements et acrobaties avec réception à l'aveugle.

C'est l'agrès le plus redouté, parce que la moindre hésitation se paie immédiatement : une chute coûte un point complet, sanction énorme dans un sport où les écarts se jouent au dixième. Le temps d'exercice est limité, ce qui interdit de reprendre longuement son équilibre après un déséquilibre.`],
    ["Comment on note", `Une performance est notée par la somme de deux composantes indépendantes. La note de difficulté, dite note D, additionne la valeur des éléments exécutés selon le code de pointage — elle n'a pas de plafond. La note d'exécution, dite note E, part de dix points et décompte les fautes : jambes fléchies, pieds non tendus, pas de réception, chute.

Cette architecture a remplacé en 2006 le fameux dix parfait, dont Nadia Comăneci avait obtenu le premier exemplaire olympique à Montréal en 1976 — l'affichage électronique, prévu pour trois chiffres, avait indiqué 1,00. Le changement répondait à un problème réel : avec un plafond fixe, les meilleurs se retrouvaient à égalité et la difficulté cessait d'être récompensée.`],
    ["Les disciplines voisines", `La gymnastique rythmique associe mouvements et engins — cerceau, ballon, massues, ruban — sur musique, dans une discipline exclusivement féminine au niveau olympique. Le trampoline est devenu olympique en 2000 : des sauts acrobatiques enchaînés à plus de huit mètres de hauteur, jugés sur la difficulté, l'exécution et le temps de vol mesuré électroniquement.

À l'école, la gymnastique aux agrès poursuit un tout autre objectif : la maîtrise du corps, la prise de risque mesurée et la coopération, non la performance. La confusion entre les deux est fréquente et fait obstacle — beaucoup d'élèves croient devoir réussir un salto quand on leur demande de contrôler un appui.`],
    ["Un élément à son nom", `Un élément nommé porte le nom du gymnaste qui l'a réalisé le premier en compétition internationale et l'a fait valider par la fédération. C'est la reconnaissance la plus recherchée du sport : quelques dizaines de gymnastes seulement figurent au code de pointage, et certains y ont plusieurs éléments.

Le revers de cette course à la difficulté est connu : le risque principal de la gymnastique de haut niveau tient aux blessures liées aux impacts répétés et à la spécialisation précoce, souvent dès sept ou huit ans. Les affaires de maltraitance révélées depuis 2016 dans plusieurs pays ont ajouté une dimension supplémentaire, et conduit les fédérations à revoir l'encadrement des jeunes athlètes.`],
  ],

  "sp2-rugby": [
    ["Une scission fondatrice", `Le rugby à quinze et le rugby à treize sont deux sports distincts, issus d'une scission survenue en Angleterre en 1895. Le conflit portait sur l'indemnisation des joueurs : les clubs du nord industriel, dont les joueurs étaient ouvriers, voulaient compenser les journées de travail perdues ; les clubs du sud, aux joueurs plus aisés, s'y opposaient au nom de l'amateurisme.

Les clubs du nord font sécession et modifient les règles pour rendre le jeu plus rapide et plus spectaculaire : treize joueurs au lieu de quinze, suppression des mêlées disputées, limitation des plaquages successifs. La division sociale à l'origine de la rupture explique encore aujourd'hui la géographie des deux codes.`],
    ["Les phases de jeu", `La mêlée est une phase de reprise du jeu où les avants des deux équipes s'opposent en poussée après une faute mineure. Elle est propre au rugby à quinze, hautement technique et dangereuse : son encadrement réglementaire a été plusieurs fois révisé pour limiter les blessures cervicales.

La touche remet le ballon en jeu après une sortie sur le côté : le lanceur vise un sauteur soulevé par deux coéquipiers. Le ruck est un regroupement au sol autour du ballon après un plaquage, où les joueurs doivent entrer par l'arrière et rester debout. Ces trois phases structurent le jeu et constituent l'essentiel de sa technicité — un match se gagne souvent sur la conquête plus que dans les espaces.`],
    ["La sécurité, priorité récente", `Le plaquage haut — au-dessus de la ligne des épaules — est sanctionné par une pénalité, avec un risque de carton jaune ou rouge selon la force du contact et les circonstances. Cette sévérité est récente : elle répond aux données accumulées sur les commotions cérébrales et leurs conséquences neurologiques à long terme.

Le rugby professionnel a vu plusieurs anciens joueurs développer des maladies neurodégénératives précoces, ce qui a conduit à des actions collectives contre les fédérations. Protocoles commotion obligatoires, retrait immédiat du joueur suspecté, abaissement de la hauteur de plaquage autorisée : le sport modifie ses règles plus vite qu'à aucun moment de son histoire.`],
    ["Les compétitions et la culture", `Le Tournoi des Six Nations oppose chaque année l'Angleterre, l'Écosse, le pays de Galles, l'Irlande, la France et l'Italie, cette dernière l'ayant rejoint en 2000. Réaliser le Grand Chelem, c'est battre les cinq autres équipes la même année.

La Coupe du monde a été créée en 1987, tardivement pour un sport aussi ancien — l'amateurisme officiel, maintenu jusqu'en 1995, y faisait obstacle. La troisième mi-temps, moment de convivialité entre les deux équipes après le match, est présentée comme une singularité culturelle du rugby ; elle est réelle, quoique largement idéalisée, et tient à ce qu'un sport de contact violent a besoin de rituels qui rappellent que l'affrontement s'arrête au coup de sifflet.`],
  ],
  "sp2-natation-eau": [
    ["Quatre nages, quatre vitesses", `Le crawl est la nage la plus rapide : la propulsion y est continue, les bras alternant sans temps mort, et le corps reste dans l'axe. C'est pourquoi tous les nageurs le choisissent en nage libre, où la technique n'est pas imposée.

La brasse est la plus lente des quatre nages de compétition, en raison de la résistance créée par la position et de la phase de glisse. Elle est aussi la plus réglementée : en brasse comme en papillon, les mouvements des deux bras doivent être simultanés et symétriques, sous peine de disqualification. En quatre nages individuel, l'ordre est fixé : papillon, dos, brasse, nage libre — ordre inverse de celui du relais, qui commence par le dos.`],
    ["Le bassin et l'invisible", `Un bassin olympique mesure cinquante mètres, avec dix couloirs dont huit utilisés en compétition, les deux extérieurs servant à absorber les vagues. Les records en petit bassin de vingt-cinq mètres sont homologués séparément, les virages deux fois plus nombreux faisant gagner un temps considérable.

La coulée est la phase immergée après le départ ou le virage, où le nageur ondule sous l'eau : elle est plus rapide que la nage en surface, ce qui a conduit à la limiter réglementairement à quinze mètres. Sans cette règle, certaines épreuves de dos se disputeraient presque entièrement sous l'eau — plusieurs nageurs l'avaient démontré dans les années 1980.`],
    ["Les disciplines associées", `La natation artistique, appelée natation synchronisée jusqu'en 2017, associe nage, figures et musique, en solo, duo ou équipe, avec une exigence d'apnée et de gainage rarement mesurée par le public. Le water-polo se joue à sept par équipe en eau profonde : les joueurs ne touchent jamais le fond, ce qui en fait l'un des sports collectifs les plus éprouvants physiquement.

La nage en eau libre se dispute en milieu naturel sur de longues distances — dix kilomètres au programme olympique — avec les aléas du courant, de la température et de la navigation. Le plongeon de haut vol, discipline distincte du plongeon olympique, s'effectue depuis vingt à vingt-sept mètres, avec une entrée dans l'eau à près de quatre-vingt-dix kilomètres à l'heure, les pieds en avant obligatoirement.`],
    ["Retenir son souffle", `L'apnée statique consiste à retenir sa respiration immobile, le visage dans l'eau, le plus longtemps possible. Les records dépassent onze minutes après hyperventilation à l'oxygène pur, et huit minutes en air ambiant — performances qui reposent sur l'entraînement mais aussi sur le réflexe d'immersion, réaction physiologique qui ralentit le cœur au contact de l'eau froide.

L'apnée est aussi l'un des rares sports où la sécurité impose une règle absolue : ne jamais pratiquer seul. La syncope hypoxique survient sans signe avant-coureur, et l'apnéiste ne peut pas la prévoir. C'est également pourquoi l'hyperventilation avant une apnée en piscine est formellement déconseillée aux nageurs non encadrés.`],
  ],

  "sp2-sports-glisse": [
    ["Le surf et ses origines", `Le surf moderne est originaire de Polynésie, et particulièrement d'Hawaï, où il était pratiqué depuis des siècles avec une dimension rituelle et sociale — certaines vagues et certaines planches étaient réservées aux chefs. Les missionnaires du XIXe siècle ont failli le faire disparaître, y voyant une pratique païenne et oisive.

C'est le Hawaïen Duke Kahanamoku, champion olympique de natation, qui l'a diffusé au XXe siècle lors de ses tournées en Australie et en Californie. Côté matériel, le shortboard est une planche courte, plus maniable et plus radicale, qui a supplanté le longboard dans les années 1960 — les deux coexistent aujourd'hui comme deux styles distincts. Le surf est devenu olympique à Tokyo en 2021, et l'épreuve de Paris 2024 s'est disputée à Teahupo'o, en Polynésie française.`],
    ["Grimper", `L'escalade sportive est devenue olympique en 2021, avec trois disciplines regroupées en un seul classement : la vitesse, sur une voie standardisée mondiale ; le bloc, escalade sans corde à faible hauteur sur tapis ; et la difficulté, où l'on grimpe le plus haut possible sur une longue voie. Ce regroupement, très critiqué par les grimpeurs, a été abandonné à Paris 2024 où la vitesse a été séparée.

L'escalade en libre désigne une pratique où le matériel — corde, dégaines — ne sert qu'à la sécurité et jamais à progresser : à ne pas confondre avec le solo intégral, qui se pratique sans aucune assurance. La cotation évalue la difficulté d'une voie selon des échelles nationales, dont la française, en chiffres et lettres, est l'une des plus répandues.`],
    ["L'altitude", `L'Everest a été gravi pour la première fois en 1953 par Edmund Hillary et Tenzing Norgay. La montagne est aujourd'hui l'objet d'une fréquentation commerciale considérable, avec des files d'attente documentées près du sommet et des accidents liés à l'attente en altitude.

La zone de la mort désigne l'altitude au-delà d'environ huit mille mètres, où la pression d'oxygène est trop faible pour que l'organisme s'acclimate : le corps se dégrade en continu, quel que soit l'entraînement. Le temps y est compté en heures, et la plupart des décès en haute montagne surviennent à la descente, quand l'épuisement s'ajoute à l'hypoxie.`],
    ["La ville et la neige", `Le skateboard olympique comporte deux épreuves : le street, sur un parcours imitant du mobilier urbain, et le park, dans une cuvette. Le parkour, autre pratique urbaine, consiste à se déplacer en franchissant les obstacles de la ville ; sa sportivisation fait débat parmi ses pratiquants, dont une partie refuse la compétition par principe. Le breaking, danse issue du hip-hop jugée en confrontations directes, a été olympique en 2024 sans être reconduit pour 2028.

Sur la neige et l'eau, le snowboard freestyle juge des figures acrobatiques en halfpipe, slopestyle et big air, tandis que le kitesurf, glisse tractée par une aile, est devenu olympique en voile à Paris 2024. Cette intégration de sports urbains et de glisse répond à un objectif explicite du CIO : attirer un public plus jeune, dont les enquêtes montrent le désintérêt croissant pour les disciplines traditionnelles.`],
  ],
  "sp2-handisport": [
    ["De la rééducation au sport", `Les premiers jeux pour athlètes handicapés sont organisés en 1948 à Stoke Mandeville, en Angleterre, par le neurologue Ludwig Guttmann, le jour même de l'ouverture des Jeux de Londres. Il s'agissait d'abord d'un outil de rééducation pour des blessés médullaires de guerre, dont on découvrait que l'activité physique améliorait considérablement le pronostic.

Douze ans plus tard, en 1960, les premiers Jeux paralympiques d'été se tiennent à Rome, avec quatre cents athlètes de vingt-trois pays. Depuis 1988, ils se déroulent dans la même ville et sur les mêmes installations que les Jeux olympiques, quelques semaines après eux.`],
    ["Classer pour rendre la compétition possible", `La classification en para-sport regroupe les athlètes selon l'impact de leur handicap sur la performance dans la discipline considérée — et non selon un diagnostic médical. L'objectif est que le résultat dépende de l'entraînement, du talent et de la tactique, non du degré de limitation.

Le système est complexe, propre à chaque sport, et régulièrement contesté : une classification mal ajustée peut fausser une compétition entière, et les recours sont fréquents. En France, une distinction institutionnelle s'ajoute : le handisport concerne les handicaps physiques et sensoriels, tandis que le sport adapté s'adresse au handicap mental et psychique, avec deux fédérations distinctes.`],
    ["Des sports qui n'existent que là", `Plusieurs disciplines paralympiques n'ont aucun équivalent olympique. Le cécifoot est un football pour déficients visuels, joué avec un ballon sonore, tous les joueurs de champ portant un masque opaque pour égaliser les visions résiduelles ; le silence du public est exigé pendant le jeu. Le goalball, également pour déficients visuels, se joue à trois contre trois : il faut faire rouler un ballon sonore dans le but adverse, large de neuf mètres.

La boccia, proche de la pétanque, s'adresse aux athlètes en situation de handicap moteur sévère, y compris ceux qui utilisent une rampe et un assistant. Le rugby-fauteuil est un sport de contact mixte pour tétraplégiques, dont la violence des chocs entre fauteuils lui a valu le surnom de murderball.`],
    ["À part, et ensemble", `Le sport pour sourds constitue un cas particulier : les Deaflympics sont organisés séparément depuis 1924, et la communauté sourde a toujours refusé l'intégration au mouvement paralympique, au motif que la surdité relève d'une culture et d'une langue plutôt que d'un handicap à compenser.

La montée en visibilité du para-sport pose enfin une question que les athlètes eux-mêmes soulèvent : la sportification du handicap interroge le rapport entre performance, spectacle et représentation. Le récit du dépassement héroïque, dominant dans la couverture médiatique, agace nombre de para-athlètes qui demandent qu'on juge leur performance sportive plutôt que leur courage supposé.`],
  ],

  "sp2-sport-education": [
    ["Une discipline, pas une récréation", `L'éducation physique et sportive est une discipline d'enseignement, non une simple pratique de loisir : elle a ses programmes, ses objectifs d'apprentissage, ses évaluations et des professeurs recrutés par concours au même titre que ceux de mathématiques. Elle est obligatoire de la maternelle au lycée, avec un horaire hebdomadaire défini.

Cette distinction est mal comprise, y compris par les élèves. L'EPS ne vise pas la performance sportive mais des compétences : maîtrise du corps, gestion d'un effort, coopération, sécurité, autonomie. C'est pourquoi la gymnastique aux agrès scolaire ne prépare pas à la compétition, et pourquoi la note ne récompense pas le plus rapide.`],
    ["Le sport scolaire", `À côté de l'EPS obligatoire existe le sport scolaire, volontaire et associatif. L'USEP anime le sport scolaire dans le premier degré, l'UNSS dans le second degré : cette dernière est l'une des plus grandes fédérations sportives de France par le nombre de licenciés, avec des compétitions du niveau district au niveau international.

L'association sportive d'un établissement est présidée de droit par le chef d'établissement et animée par les professeurs d'EPS, qui y consacrent des heures inscrites dans leur service. Ce dispositif, propre à la France, assure une pratique encadrée le mercredi après-midi pour des élèves dont beaucoup n'iraient pas en club.`],
    ["Le cadre des clubs", `Un club sportif amateur est une association loi 1901 affiliée à une fédération. La licence sportive est le titre d'adhésion à cette fédération : elle inclut une assurance, permet la participation aux compétitions officielles et alimente les statistiques nationales de pratique.

L'encadrement contre rémunération est réglementé : il exige un diplôme d'État — anciennement brevet d'État d'éducateur sportif, aujourd'hui décliné en plusieurs certifications professionnelles. Le certificat médical de non-contre-indication, longtemps exigé chaque année, a été progressivement allégé et remplacé pour les mineurs par un questionnaire de santé, l'obligation systématique n'ayant pas démontré son efficacité.`],
    ["Concilier, et retenir", `Le sport-études, aujourd'hui organisé en sections sportives et pôles espoirs, aménage la scolarité pour concilier études et entraînement intensif : horaires décalés, effectifs réduits, suivi médical. Le dispositif protège les jeunes athlètes d'un choix précoce entre carrière sportive et diplôme, choix dont on sait qu'il tourne mal dans l'immense majorité des cas — très peu de sportifs de haut niveau vivent durablement de leur discipline.

Reste un constat massif : la pratique sportive baisse fortement à l'adolescence, particulièrement chez les filles. Les causes se combinent — charge scolaire, concurrence des écrans, rapport au corps et au regard des autres, offre inadaptée, coût. Le savoir nager, attestation validant des compétences aquatiques de sécurité, illustre l'enjeu inverse : c'est une compétence de survie que l'école cherche à garantir à tous, et que tous les élèves ne maîtrisent pas en sortant du collège.`],
  ],

  "sp2-records-performance": [
    ["Ce qui a fait progresser les records", `L'amélioration des records au XXe siècle tient d'abord à un facteur démographique et social : l'élargissement du bassin de pratiquants. Quand un sport passe de quelques milliers de pratiquants dans deux pays à des millions sur cinq continents, la probabilité de trouver des morphologies et des talents exceptionnels augmente mécaniquement.

S'y ajoute la professionnalisation : un athlète qui vit de son sport s'entraîne deux fois par jour, dispose d'un encadrement médical, technique et nutritionnel, et récupère au lieu de travailler. L'écart avec l'amateur du début du siècle, qui s'entraînait après sa journée, explique une part considérable des progrès — sans qu'aucune capacité physiologique nouvelle soit apparue.`],
    ["Le ralentissement", `Depuis les années 1990, la progression des records ralentit nettement dans la plupart des disciplines, et plusieurs semblent avoir atteint un plateau. Des travaux de physiologie ont modélisé des asymptotes, c'est-à-dire des limites théoriques dont on s'approcherait par paliers de plus en plus petits.

Ce constat est brouillé par une question gênante : certains records d'athlétisme des années 1980, notamment féminins, tiennent toujours et n'ont jamais été approchés. Le contexte de contrôle antidopage de l'époque est ouvertement mis en cause par les fédérations elles-mêmes, sans que ces records aient été annulés — les preuves manquent, la prescription joue, et la question reste ouverte.`],
    ["Le matériel et les conditions", `Le matériel joue un rôle déterminant dans certaines disciplines, ce qui impose des règles d'homologation strictes. Les combinaisons de natation en polyuréthane ont été interdites en 2010 après que quarante-trois records du monde furent battus en une seule année : elles amélioraient la flottabilité et réduisaient la traînée, transformant la performance en question d'équipement. Le même débat s'est rouvert avec les chaussures à plaque de carbone en course à pied.

Les conditions comptent autant. L'altitude améliore les sprints, la résistance de l'air étant réduite, et dégrade les épreuves d'endurance, l'oxygène disponible étant moindre — c'est pourquoi les records établis à Mexico en 1968 restent commentés. Un record homologué suppose donc des conditions réglementaires vérifiées : vent inférieur à deux mètres par seconde, piste conforme, chronométrage électronique, contrôle antidopage immédiat.`],
    ["Les auxiliaires et les limites", `Un lièvre est un coureur payé pour imposer un rythme régulier sur les premiers kilomètres, puis abandonner. La pratique est admise et organisée : sans elle, très peu de records de fond seraient tombés, la gestion de l'allure en solitaire coûtant trop cher.

Quant à la performance humaine maximale théorique, elle reste une estimation débattue : les modèles physiologiques donnent des fourchettes, régulièrement démenties par les faits. L'histoire du sport est faite de limites annoncées puis franchies — la barre des quatre minutes au mile, longtemps jugée physiologiquement impossible, a été battue en 1954, puis par des milliers de coureurs depuis.`],
  ],

  "sp2-sport-sante": [
    ["Les recommandations", `L'OMS recommande à l'adulte cent cinquante à trois cents minutes d'activité physique d'intensité modérée par semaine, ou la moitié en intensité soutenue, avec deux séances de renforcement musculaire. L'inactivité physique figure parmi les principaux facteurs de risque de mortalité évitable dans le monde.

Deux notions doivent être distinguées. L'inactivité physique est un manque d'activité au regard de ces recommandations. La sédentarité désigne le temps passé assis ou allongé en éveil, avec une dépense énergétique minimale. Elles sont indépendantes : on peut courir une heure le matin et rester sédentaire dix heures ensuite, et les études montrent que ce cumul reste défavorable.`],
    ["Ce que cela change", `L'activité physique régulière réduit le risque cardiovasculaire, métabolique, et celui de plusieurs cancers — côlon et sein notamment. Elle améliore aussi le sommeil, l'humeur et les fonctions cognitives, avec des effets mesurables sur la dépression légère à modérée comparables à ceux de certains traitements.

Dans le diabète de type 2, elle améliore directement la sensibilité à l'insuline : le muscle en activité capte le glucose sans avoir besoin d'autant d'insuline. C'est l'un des rares domaines où l'activité physique agit sur le mécanisme même de la maladie, et non seulement sur ses conséquences.`],
    ["À tout âge", `Les bénéfices existent à tout âge, y compris très avancé, et c'est chez les plus âgés que le rapport bénéfice-effort est le plus élevé. La sarcopénie — perte de masse et de force musculaires liée au vieillissement — commence dès la quarantaine et s'accélère ensuite ; elle conditionne l'autonomie, puisque c'est la force des jambes qui permet de se relever d'une chaise et de ne pas chuter.

L'activité physique adaptée désigne une pratique encadrée par des professionnels formés, conçue pour des personnes atteintes de pathologies chroniques ou en perte d'autonomie. Le sport sur ordonnance en est le prolongement : depuis 2016, un médecin peut prescrire une activité physique adaptée à un patient en affection de longue durée.`],
    ["Les risques réels", `La mort subite du sportif est un événement rare, le plus souvent lié à une anomalie cardiaque préexistante non détectée — cardiomyopathie, anomalie coronaire, trouble du rythme. Elle frappe davantage les hommes et survient souvent lors d'une reprise intense après une période d'inactivité. Le risque global de l'activité physique reste très inférieur à celui de l'inactivité.

Le syndrome de surentraînement constitue l'autre écueil, à l'opposé : un état de fatigue durable avec baisse des performances, troubles du sommeil et de l'humeur, qui peut demander des mois d'arrêt. Il rappelle que la progression vient de l'alternance entre charge et récupération, et non de l'accumulation de séances.`],
  ],
  "sp2-sport-collectif-tactique": [
    ["Le système n'est qu'un point de départ", `Un système de jeu au football désigne la répartition initiale des joueurs sur le terrain — quatre-quatre-deux, quatre-trois-trois, trois-cinq-deux. Il ne décrit qu'une position de départ : dès le coup d'envoi, les joueurs se déplacent, et la même équipe adopte des formes différentes selon qu'elle attaque ou défend.

C'est pourquoi les analystes ont largement abandonné la lecture par systèmes au profit des principes de jeu : comment l'équipe cherche à progresser, où elle veut récupérer le ballon, quelles zones elle protège. Un système n'est qu'un point de départ ; c'est le mouvement qui compte.`],
    ["Les principes défensifs et offensifs", `Le pressing est une pression collective et coordonnée sur le porteur du ballon, destinée à le récupérer haut sur le terrain, près du but adverse. Il exige une synchronisation totale : un seul joueur qui ne suit pas ouvre un espace et rend le dispositif contre-productif.

La défense de zone attribue à chaque joueur un espace à protéger plutôt qu'un adversaire à suivre, par opposition à la défense individuelle. La contre-attaque, elle, est une attaque rapide lancée immédiatement après récupération, en exploitant le déséquilibre de l'adversaire encore engagé. Certaines équipes en font leur identité, et la statistique montre qu'elle reste l'une des séquences les plus efficaces du football.`],
    ["Ce que les chiffres disent, et ne disent pas", `La possession de balle est l'indicateur le plus cité et l'un des moins prédictifs : sa corrélation avec la victoire est faible, et des équipes construisent leur jeu sur une possession volontairement basse. Elle mesure une quantité, pas une menace.

Les statistiques utiles sont ailleurs : qualité des occasions créées, zones de récupération, distances parcourues à haute intensité. Les données de suivi des joueurs — position, vitesse, accélérations, charge — sont désormais collectées par capteurs et vidéo à chaque match et chaque entraînement. Elles servent autant à la tactique qu'à la prévention des blessures, la charge d'entraînement mal dosée étant l'un des premiers facteurs de blessure musculaire.`],
    ["Les limites du modèle", `L'analyse vidéo est devenue un métier à part entière : étude des adversaires, des schémas sur coups de pied arrêtés, des comportements individuels répétés. Un club professionnel emploie plusieurs analystes à plein temps.

Le sport collectif résiste pourtant à la modélisation statistique bien mieux que le baseball ou le basket, où l'analyse chiffrée a bouleversé les stratégies. La raison est structurelle : les interactions entre joueurs y sont trop nombreuses, trop simultanées et trop dépendantes du contexte pour être isolées. Une passe réussie dépend de vingt-deux positions, d'une trajectoire, d'un état de fatigue et d'une intention — que les données décrivent mal. Une précision utile au passage : il n'existe pas de hors-jeu au handball, contrairement à une confusion fréquente avec le football.`],
  ],

  "sp2-jeux-traditionnels": [
    ["Ce que le sport moderne n'a pas effacé", `De nombreux jeux traditionnels ont survécu à la standardisation sportive du XIXe siècle, souvent en se dotant à leur tour de fédérations et de règles écrites. Ils ont en commun d'être antérieurs au sport moderne, liés à un territoire, et longtemps transmis sans codification uniforme.

La pétanque fait exception par sa jeunesse : née à La Ciotat au début du XXe siècle, elle dérive du jeu provençal en supprimant l'élan — pieds tanqués, c'est-à-dire ancrés. Elle compte aujourd'hui des centaines de milliers de licenciés et prétend régulièrement à une reconnaissance olympique.`],
    ["Le Sud-Ouest et la Bretagne", `La pelote basque désigne une famille de jeux de balle contre un mur ou un fronton, avec des variantes utilisant la main nue, un gant d'osier, une raquette ou un chistera. Certaines de ses formes comptent parmi les jeux de balle les plus rapides du monde.

En Bretagne, le gouren est une lutte traditionnelle dont la règle interdit les prises brutales et impose de porter l'adversaire sur les deux omoplates ; les lutteurs prêtent serment avant le combat. Le palet breton, jeu d'adresse où l'on lance des disques métalliques sur une planche, et le jeu de quilles au maillet du Sud-Ouest relèvent de la même famille de jeux d'estaminet devenus disciplines fédérées.`],
    ["Ailleurs", `La course landaise est un spectacle taurin sans mise à mort : l'homme y évite la vache par des écarts et des sauts codifiés, jugés par un jury. Elle se distingue radicalement de la corrida, tant par l'absence de mise à mort que par l'animal utilisé.

En Irlande, le hurling est un sport de crosse d'origine gaélique, réputé pour être l'un des jeux de balle les plus rapides ; il est resté strictement amateur, les joueurs des équipes de comté n'étant pas rémunérés. Au Japon, le sumo garde une forte dimension rituelle héritée du shintoïsme : jet de sel purificateur, tenue et gestes codifiés, hiérarchie stricte des lutteurs.`],
    ["Pourquoi ils ont reculé", `Les jeux traditionnels ont reculé sous l'effet conjugué de deux mouvements. La standardisation des sports modernes, portée par les fédérations internationales, l'école et la presse, a imposé des règles uniformes et des compétitions hiérarchisées auxquelles les jeux locaux ne pouvaient pas prétendre. L'exode rural a ensuite vidé les villages où ils se pratiquaient.

Leur survie tient souvent à un travail associatif de conservation, parfois soutenu au titre du patrimoine culturel immatériel. Ce statut change leur nature : d'une pratique ordinaire, ils deviennent un héritage à préserver — ce qui les sauve et les fige à la fois.`],
  ],

  "sp2-organisation-competitions": [
    ["Le format décide", `Le format d'une compétition détermine largement les chances des participants, bien avant que le jeu ne commence. Le tournoi à élimination directe est le plus spectaculaire et le plus injuste : une défaite élimine, et un mauvais jour suffit à sortir le meilleur. Le championnat en poules, où chaque équipe rencontre toutes les autres, est plus fiable statistiquement mais plus long et moins tendu.

Le système suisse offre un compromis employé aux échecs et dans plusieurs sports : personne n'est éliminé, et chaque ronde apparie des concurrents de niveau proche selon leurs résultats précédents. Il permet de classer un grand nombre de participants en peu de rondes, sans que chacun ait à affronter tous les autres.`],
    ["Aménager le tableau", `Une tête de série est un concurrent placé dans le tableau de façon à ne pas affronter les autres favoris avant les tours avancés. Le mécanisme protège le spectacle et l'équité perçue, mais il avantage objectivement les mieux classés — deux joueurs de même niveau n'ont pas le même parcours selon leur position au tirage.

Une wild card est une invitation accordée à un concurrent non qualifié, à la discrétion de l'organisateur. Elle sert à réintégrer un joueur revenant de blessure, à honorer une figure locale ou à garantir la présence d'une vedette — pouvoir discrétionnaire régulièrement critiqué. Le calendrier international, enfin, coordonne les dates entre fédérations, ligues et compétitions continentales : c'est l'un des terrains de conflit les plus âpres du sport professionnel, chaque acteur voulant ses dates.`],
    ["Faire tenir l'événement", `L'organisation d'une grande compétition mobilise sécurité, transports, hébergement, accréditations, diffusion et bénévoles — ces derniers constituant souvent la moitié des effectifs. La billetterie nominative, qui associe chaque billet à l'identité de son détenteur, s'est généralisée après les drames de stade et vise à lutter contre la revente et à permettre l'identification en cas d'incident.

Le fair-play, ensemble de comportements respectant l'adversaire et l'esprit du jeu, fait l'objet de dispositifs formels — prix, chartes, protocoles d'avant-match. Sa promotion institutionnelle coexiste avec une pression à la performance qui le contredit régulièrement.`],
    ["L'après", `L'héritage olympique désigne les effets durables d'un événement sur la ville hôte : équipements, transports, logements, image, pratique sportive. Les bilans réels sont très inférieurs aux promesses initiales, avec des équipements coûteux à entretenir et parfois abandonnés — Athènes 2004 et Rio 2016 en fournissent les exemples les plus documentés.

C'est ce qui explique la raréfaction des candidatures : le coût et les dépassements budgétaires, systématiques dans l'histoire des Jeux, ont dissuadé de nombreuses villes, plusieurs ayant renoncé après un référendum local négatif. Le CIO a réagi en assouplissant ses exigences, en encourageant l'usage d'équipements existants et en attribuant deux éditions à la fois pour sécuriser le calendrier.`],
  ],

  "sp2-nutrition-sportive": [
    ["Le carburant", `Le principal carburant de l'effort intense est le glycogène musculaire, forme de stockage du glucose dans le muscle et le foie. Les réserves sont limitées : environ quatre-vingt-dix minutes d'effort soutenu, ce qui explique la défaillance brutale des coureurs de marathon vers le trentième kilomètre.

La recharge glucidique consiste à augmenter fortement les apports en glucides dans les jours précédant une épreuve d'endurance, afin de saturer ces réserves. Les protocoles anciens, qui associaient une phase de privation à une phase de charge, ont été abandonnés : une simple augmentation des glucides sur deux à trois jours suffit, sans l'inconfort de la privation préalable.`],
    ["Boire, ni trop ni trop peu", `La déshydratation dégrade la performance dès une perte de deux pour cent du poids corporel et augmente le risque de coup de chaleur, urgence vitale. Mais l'excès inverse est tout aussi dangereux : l'hyponatrémie d'effort est une chute du sodium sanguin liée à une consommation excessive d'eau pure, qui provoque nausées, confusion et, dans les cas graves, un œdème cérébral.

Plusieurs décès de marathoniens lui sont attribués, souvent chez des coureurs lents et prudents qui buvaient à chaque ravitaillement. C'est la raison d'être des boissons de l'effort, qui apportent eau, glucides et sodium dans des proportions adaptées : le sodium n'y est pas un détail, il conditionne la rétention de l'eau ingérée.`],
    ["Ce qui ne change pas", `L'alimentation du sportif diffère surtout par les quantités, non par la nature des aliments. Un sportif d'endurance a des besoins accrus en protéines, mais ces besoins sont couverts par une alimentation variée et suffisante : la supplémentation systématique n'apporte rien de démontré chez la plupart des pratiquants.

La fenêtre métabolique — période courte après l'effort supposée optimale pour la récupération — a été largement relativisée par les travaux récents : ce qui compte est l'apport total sur la journée, bien plus que le timing précis. Pour la grande majorité des pratiquants, la base reste une alimentation variée et suffisante, ajustée en quantité à la dépense.`],
    ["Les compléments", `Très peu de compléments alimentaires ont une efficacité démontrée dans le sport. La liste courte tient en quelques produits — caféine, créatine, nitrates, bicarbonate — avec des effets modestes et dépendants de la discipline. Tout le reste relève au mieux d'un effet placebo, au pire d'une dépense inutile.

Un risque spécifique s'y ajoute pour les athlètes soumis au contrôle antidopage : la contamination. Des analyses menées sur des compléments du commerce ont trouvé des substances interdites non mentionnées sur l'étiquette, dans des proportions non négligeables. La responsabilité étant objective en matière de dopage — l'athlète répond de ce qu'on trouve dans ses urines, quelle qu'en soit l'origine —, plusieurs carrières ont été détruites par un produit acheté en pharmacie.`],
  ],

  "sp2-violence-sport": [
    ["Une culture, pas seulement un problème", `Le supporterisme n'est pas réductible à la violence : il constitue une culture organisée, avec ses codes, ses chants, ses productions visuelles et ses réseaux. Un groupe ultra est un collectif structuré, qui anime la tribune, prépare les déplacements et entretient une identité — souvent avec une conception exigeante du soutien, hostile au football-spectacle et à la commercialisation.

Le tifo en est la production la plus visible : une animation visuelle collective, préparée pendant des semaines, déployée sur toute une tribune à l'entrée des joueurs. Ces réalisations mobilisent des dizaines de bénévoles et des budgets financés par les groupes eux-mêmes.`],
    ["Deux drames fondateurs", `Le 29 mai 1985, au stade du Heysel à Bruxelles, avant la finale de la Coupe d'Europe, une charge de supporters provoque un mouvement de foule contre un mur qui s'effondre : trente-neuf morts. La rencontre est jouée malgré tout, et les clubs anglais sont exclus des compétitions européennes pendant cinq ans.

Le 15 avril 1989, à Hillsborough, quatre-vingt-seize personnes meurent écrasées dans des tribunes debout surchargées, à la suite d'une ouverture mal gérée des accès. La police accuse d'abord les supporters ; il faudra vingt-sept ans d'enquêtes et de mobilisation des familles pour établir la responsabilité de l'organisation. Le rapport Taylor qui suit impose la suppression des places debout dans l'élite anglaise, mesure qui a transformé les stades britanniques.`],
    ["Réprimer ou dialoguer", `L'interdiction administrative de stade est une mesure préfectorale qui interdit à un individu l'accès aux enceintes sportives, sans passer par un juge. Rapide et efficace, elle est critiquée pour sa nature administrative et pour les recours limités qu'elle laisse.

Une autre approche s'est développée à partir des expériences allemandes et scandinaves : le dialogue avec les supporters, qui privilégie la médiation, la présence de référents et l'association des groupes à l'organisation. Les pays qui l'ont adoptée constatent une baisse durable des incidents. La lutte contre le racisme dans les stades relève des mêmes tensions : les dispositifs existent — protocoles d'interruption de match, sanctions, campagnes — et sont jugés insuffisants par les joueurs concernés, faute d'application systématique.`],
    ["Le terrain ordinaire", `La violence dans le sport amateur ne ressemble pas à celle des tribunes professionnelles : elle concerne surtout les rapports avec les arbitres et entre joueurs, lors de matchs de district sans public.

Ses effets sont mesurables. L'arbitrage amateur connaît une crise de recrutement dans plusieurs fédérations : les incivilités, insultes et agressions découragent les vocations, et les jeunes arbitres abandonnent en majorité dans leurs premières saisons. Sans arbitres, les championnats amateurs ne peuvent pas se tenir — ce qui fait de ce phénomène un problème structurel et non anecdotique.`],
  ],
  "sp2-sport-environnement": [
    ["D'où viennent les émissions", `Le poste qui domine l'empreinte carbone d'un grand événement sportif n'est ni la construction ni l'énergie des stades : c'est le déplacement des spectateurs, et particulièrement les vols internationaux. Il peut représenter les trois quarts du total.

Ce constat oriente les leviers d'action. Réduire l'empreinte d'un événement suppose d'abord de limiter les déplacements longs — en concentrant les sites, en favorisant le train, en renonçant aux compétitions éclatées sur plusieurs continents. La sobriété appliquée aux événements consiste précisément à réduire la taille, les déplacements et les constructions neuves, en utilisant des équipements existants ou temporaires.`],
    ["Les sports d'hiver menacés", `Le réchauffement climatique remet en cause la tenue de certaines compétitions historiques. Il réduit l'enneigement naturel et menace directement les stations de basse et moyenne altitude, dont plusieurs ont déjà fermé leurs remontées. Des travaux estiment qu'une minorité seulement des villes ayant accueilli les Jeux d'hiver disposera encore de conditions fiables à la fin du siècle.

La neige de culture — produite à partir d'eau et d'air comprimé à basse température — permet de compenser partiellement, au prix d'une consommation d'eau et d'énergie considérable, et à condition qu'il fasse assez froid. Elle repousse l'échéance sans la supprimer, et déplace le problème vers la ressource en eau, elle-même sous tension.`],
    ["La chaleur, l'autre contrainte", `Les épreuves d'endurance estivales sont menacées par les vagues de chaleur, avec un risque sanitaire réel pour les concurrents comme pour le public. Plusieurs marathons olympiques ont été déplacés ou avancés de plusieurs heures ; certaines compétitions ont été délocalisées vers des villes plus fraîches.

Cette contrainte modifie les calendriers internationaux, avec des conséquences en cascade sur les saisons, les diffusions télévisées et les contrats. Elle illustre une réalité que le sport découvre : sa dépendance aux conditions naturelles n'est pas négociable, contrairement à ses formats.`],
    ["Les sports de nature", `L'érosion des sentiers par la fréquentation sportive dégrade les sols, notamment en montagne où la végétation se reconstitue très lentement. Le dérangement de la faune est plus insidieux : la seule présence humaine perturbe le repos et la reproduction des animaux sauvages, avec des effets mesurables sur la survie hivernale.

Les zones de quiétude répondent à ce problème en limitant la fréquentation de certains secteurs à certaines périodes, sur une base souvent volontaire. Quant à la compensation carbone — financement de projets censés compenser les émissions produites —, elle est de plus en plus critiquée : les projets de compensation tiennent rarement leurs promesses, et l'argument sert souvent à éviter la réduction. Le sport reste néanmoins un porte-voix efficace, par sa visibilité et par le fait que ses pratiquants constatent eux-mêmes les changements sur le terrain.`],
  ],

  "sp3-paralympiques": [
    ["De l'hôpital au stade", `Les Jeux paralympiques sont nés de la rééducation de blessés de guerre. Ludwig Guttmann, neurologue allemand réfugié au Royaume-Uni, dirige l'unité des blessés médullaires de l'hôpital de Stoke Mandeville et fait du sport un outil thérapeutique, à une époque où l'espérance de vie après une lésion de la moelle se comptait en mois.

Les premiers jeux de Stoke Mandeville se tiennent en 1948, le jour de l'ouverture des Jeux de Londres. Douze ans plus tard, en 1960, les premiers Jeux paralympiques ont lieu à Rome. Depuis Séoul en 1988, ils se déroulent dans la même ville et sur les mêmes installations que les Jeux olympiques, en vertu d'un accord entre les deux comités.`],
    ["Classer", `La classification en sport paralympique regroupe les athlètes selon l'impact de leur déficience sur la performance dans une discipline donnée. Elle est propre à chaque sport et repose sur des évaluations conduites par des classificateurs formés — médicales, techniques et parfois en situation de compétition.

Son objectif est que le résultat dépende de l'entraînement et du talent plutôt que du degré de déficience. Elle est aussi le point le plus contesté du mouvement : un changement de classe peut anéantir une carrière, et les soupçons de sous-évaluation volontaire, comme les contestations de classement, alimentent des contentieux réguliers.`],
    ["Des disciplines spécifiques", `Plusieurs sports paralympiques n'ont pas d'équivalent olympique. Le goalball oppose deux équipes de trois joueurs déficients visuels qui font rouler un ballon sonore vers un but de neuf mètres ; tous portent un masque opaque et le silence du public est requis. Le boccia, sport de précision proche de la pétanque, s'adresse aux athlètes présentant un handicap moteur sévère, y compris ceux qui jouent à l'aide d'une rampe et d'un assistant.

Le rugby-fauteuil est un sport de contact mixte destiné aux tétraplégiques, où les chocs entre fauteuils font partie du jeu. En cyclisme, le tandem associe un pilote voyant et un athlète déficient visuel : les deux forment une équipe, et le pilote est un athlète à part entière, non un accompagnateur.`],
    ["Les figures et les limites", `En France, Marie-Amélie Le Fur a marqué l'athlétisme paralympique avec plusieurs titres et records du monde, avant de présider le Comité paralympique et sportif français. Sa trajectoire illustre un mouvement plus large : les athlètes prennent la direction des institutions qui les représentent.

L'enjeu principal reste économique et médiatique. Malgré les progrès considérables enregistrés lors des Jeux de Paris 2024, la médiatisation et le financement du sport paralympique restent inférieurs à ceux du sport olympique, ce qui se traduit par des différences de primes, de contrats et d'accès aux structures d'entraînement.`],
  ],

  "sp3-athletisme-fond": [
    ["Une distance née d'un hasard", `Le marathon mesure 42,195 kilomètres depuis les Jeux de Londres de 1908, où le parcours fut tracé du château de Windsor à la loge royale du stade. La distance fut officialisée en 1921 et n'a plus bougé : elle ne correspond donc à aucune réalité antique, la course de Marathon à Athènes faisant une quarantaine de kilomètres selon les itinéraires.

En 2019, à Vienne, Eliud Kipchoge est devenu le premier homme à courir cette distance en moins de deux heures — hors compétition officielle, avec des relais de lièvres, une voiture pilote et un tracé optimisé, ce qui interdit l'homologation. La performance reste un jalon physiologique, même si le record officiel demeure supérieur.`],
    ["Pourquoi le Kenya", `Le Kenya domine les courses de fond depuis les années 1990, avec l'Éthiopie pour principale rivale. Les explications avancées se cumulent sans qu'aucune ne suffise : altitude d'entraînement autour de deux mille mètres, morphologies longilignes économiques en course, marche ou course quotidienne dès l'enfance, et surtout une organisation sociale où la réussite en athlétisme représente une voie de mobilité économique majeure, avec des groupes d'entraînement structurés.

Les explications purement génétiques sont contestées : elles n'expliquent pas la concentration des champions dans quelques districts précis, ni le rôle des filières d'entraînement et des agents internationaux.`],
    ["Ce que mesure le corps", `La VO2 max mesure la consommation maximale d'oxygène d'un individu, exprimée en millilitres par kilo et par minute. Elle constitue un plafond mais ne suffit pas à prédire la performance : l'économie de course — l'énergie dépensée pour une vitesse donnée — et le seuil auquel le lactate s'accumule comptent au moins autant.

L'entraînement en altitude vise à stimuler la production de globules rouges par l'exposition à un air pauvre en oxygène. La formule la plus documentée consiste à vivre en altitude et à s'entraîner plus bas, afin de conserver l'intensité des séances. Le mur du marathon, effondrement brutal survenant généralement après trente kilomètres, correspond à l'épuisement des réserves de glycogène : le corps bascule sur les lipides, moins efficaces, et l'allure s'effondre.`],
    ["Les figures et le matériel", `L'Éthiopien Abebe Bikila remporte le marathon olympique de Rome en 1960 pieds nus, faute de chaussures à sa taille, et récidive quatre ans plus tard à Tokyo, chaussé. Le Tchèque Emil Zátopek réalise en 1952 un exploit jamais égalé : trois titres olympiques dans la même édition sur cinq mille mètres, dix mille mètres et marathon — ce dernier couru pour la première fois de sa vie.

Le steeple, course de trois mille mètres avec barrières fixes et rivière, complète le tableau des épreuves de fond sur piste. Le débat le plus vif du moment porte sur les chaussures à plaque de carbone, dont le gain de performance mesuré — plusieurs pour cent d'économie d'énergie — a conduit la fédération internationale à réglementer l'épaisseur des semelles, sans clore la discussion sur l'équité.`],
  ],

  "sp3-natation": [
    ["Quatre nages, un ordre", `La natation olympique comprend quatre nages et de nombreuses distances, du cinquante mètres au mille cinq cents. La nage libre autorise toute technique, mais tous les nageurs y choisissent le crawl, le plus rapide ; s'y ajoutent le dos, la brasse et le papillon.

En quatre nages individuel, l'ordre est imposé : papillon, dos, brasse, nage libre. Il diffère de celui du relais quatre nages, qui commence par le dos — parce que le départ du dos se fait dans l'eau, ce qui interdit de le placer après un relais. Un bassin olympique mesure cinquante mètres ; les performances en petit bassin de vingt-cinq mètres font l'objet de records distincts, les virages y étant deux fois plus nombreux.`],
    ["Les grandes carrières", `Michael Phelps détient le record de médailles olympiques toutes disciplines confondues : vingt-huit, dont vingt-trois en or, sur quatre olympiades. Son total dépasse celui de la plupart des pays participants.

Il a battu à Pékin en 2008 le record de Mark Spitz, qui avait remporté sept titres en une seule édition à Munich en 1972 — performance restée insurpassée pendant trente-six ans. Côté français, Laure Manaudou devient championne olympique du quatre cents mètres nage libre à Athènes en 2004, et Camille Muffat remporte cette même épreuve à Londres en 2012, avant sa disparition accidentelle en 2015.`],
    ["Quand le matériel décide", `En 2008 et 2009, les combinaisons en polyuréthane provoquent une avalanche de records : quarante-trois lors des seuls championnats du monde de Rome. Elles apportaient une flottabilité et une réduction de traînée jugées déloyales, transformant la performance en question d'équipement.

La fédération internationale les a interdites à partir de 2010, en imposant des matériaux textiles et en limitant la surface couverte. Une partie des records établis avec ces combinaisons tient encore aujourd'hui, ce qui fausse durablement la comparaison entre générations — c'est le principal argument de ceux qui réclamaient leur annulation.`],
    ["Au-delà du bassin", `La nage artistique — appelée natation synchronisée jusqu'en 2017 — combine natation, chorégraphie et musique, en solo, duo ou équipe. Sa difficulté principale est invisible : les figures s'exécutent en apnée, tête en bas, sans appui, avec une dépense énergétique comparable à celle d'un demi-fond.

La natation en eau libre est entrée au programme olympique en 2008 : une épreuve de dix kilomètres en milieu naturel, avec courants, température variable et contacts entre nageurs. Elle exige une gestion tactique — se placer dans le sillage d'un concurrent, choisir sa trajectoire aux bouées — absente des courses en bassin.`],
  ],

  "sp3-tennis-3": [
    ["1968, l'année charnière", `L'ère open, ouverte aux professionnels, commence en 1968. Avant elle, les tournois du Grand Chelem étaient réservés aux amateurs : les joueurs qui passaient professionnels en étaient exclus et disputaient un circuit parallèle. Plusieurs des meilleurs joueurs mondiaux n'ont ainsi jamais pu jouer Wimbledon pendant leurs années de sommet.

Cette césure explique la prudence avec laquelle il faut lire les palmarès : comparer des totaux de titres d'avant et d'après 1968 revient à comparer deux compétitions différentes.`],
    ["Trois surfaces, quatre tournois", `Le Grand Chelem réunit quatre tournois sur trois surfaces. Roland-Garros est le seul disputé sur terre battue, surface lente qui ralentit la balle, élève les rebonds et favorise les échanges longs et les défenseurs. Wimbledon se joue sur gazon, surface rapide aux rebonds bas qui récompense le service et la prise d'initiative. L'Open d'Australie et l'US Open se disputent sur dur, aux caractéristiques intermédiaires.

Cette diversité explique la rareté du Grand Chelem calendaire — remporter les quatre tournois la même année — réussi par très peu de joueurs. Rafael Nadal détient à Roland-Garros un record sans équivalent dans le sport avec quatorze titres, et Serena Williams détient le record de titres du Grand Chelem en simple à l'ère open avec vingt-trois.`],
    ["Les règles du jeu", `Le tie-break, jeu décisif disputé à six jeux partout, a été introduit dans les années 1970 pour éviter les sets interminables — un match de Wimbledon s'était achevé en 2010 sur un score de soixante-dix jeux à soixante-huit dans le dernier set, après onze heures de jeu réparties sur trois jours.

Le Hawk-Eye est un dispositif de traçage vidéo qui reconstitue la trajectoire de la balle à partir de plusieurs caméras et détermine son point d'impact. D'abord utilisé comme recours limité à la contestation d'un joueur, il a remplacé entièrement les juges de ligne dans plusieurs tournois majeurs — l'un des rares cas où une technologie d'arbitrage a supprimé des postes plutôt que de les assister.`],
    ["Les compétitions par équipes et les Françaises", `La Coupe Davis oppose des sélections nationales masculines depuis 1900 ; son équivalent féminin, la Billie Jean King Cup, porte le nom de la joueuse qui a mené le combat pour l'égalité des primes. Le format de la Coupe Davis, longtemps fondé sur des rencontres à domicile et à l'extérieur réparties sur l'année, a été réformé en 2019 vers une phase finale groupée, changement très contesté par les joueurs et les fédérations.

Côté français, Mary Pierce remporte Roland-Garros en 2000 : elle reste à ce jour la dernière Française titrée en simple dans son tournoi national, ce qui, un quart de siècle plus tard, en dit long sur la difficulté de la transformation d'un vivier en champions.`],
  ],
  "sp3-basket-3": [
    ["Une ligue devenue mondiale", `La NBA a été fondée en 1946 sous le nom de Basketball Association of America, et prend son nom actuel en 1949 après la fusion avec une ligue concurrente. Elle est devenue la ligue de basket la plus suivie au monde, avec une audience internationale qui dépasse largement son marché national.

Son palmarès est dominé par deux franchises, les Boston Celtics et les Los Angeles Lakers, au coude à coude en tête. Parmi les exploits individuels, celui de Wilt Chamberlain reste hors d'atteinte : cent points en un match, en 1962, sans qu'aucune image télévisée n'en subsiste — seul un enregistrement radio partiel témoigne de la performance.`],
    ["Le basket olympique", `La sélection américaine de 1992, surnommée la Dream Team, fut la première à aligner des joueurs NBA aux Jeux, l'olympisme s'étant ouvert aux professionnels. L'équipe — Jordan, Magic Johnson, Bird, Barkley — a remporté ses matchs avec des écarts moyens supérieurs à quarante points, sans jamais demander de temps mort.

Les États-Unis dominent le basket olympique depuis l'origine, avec pour principale interruption la finale contestée de 1972 contre l'Union soviétique, dont les trois dernières secondes furent rejouées deux fois. L'écart s'est réduit depuis, l'Espagne, la France et la Serbie ayant produit des générations capables de rivaliser.`],
    ["L'Europe et la France", `L'EuroLeague est la compétition européenne de clubs la plus prestigieuse : elle réunit les meilleures équipes du continent selon un système de licences pluriannuelles, qui garantit la participation de grands clubs indépendamment de leurs résultats nationaux — modèle plus proche des ligues fermées américaines que du football européen.

Le basket français connaît une visibilité inédite depuis que Victor Wembanyama a été choisi en première position de la draft NBA en 2023. Il n'est pas le premier Français premier choix — Joakim Noah avait été sélectionné en neuvième position en 2007 — mais l'attente créée par son profil, plus de deux mètres vingt avec des qualités de meneur, était sans précédent.`],
    ["Les règles qui ont changé le jeu", `La ligne à trois points, adoptée en NBA en 1979, a transformé la tactique plus qu'aucune autre règle : elle a rendu le tir lointain plus rentable que le tir à mi-distance, et l'analyse statistique des années 2010 en a tiré toutes les conséquences, jusqu'à modifier la morphologie des équipes.

Le pick and roll — un joueur pose un écran sur le défenseur du porteur, puis se dirige vers le panier — reste le système d'attaque le plus utilisé du basket moderne, parce qu'il crée une situation de supériorité momentanée impossible à défendre parfaitement. Le trois contre trois, disputé sur un demi-terrain avec un seul panier, est entré aux Jeux en 2021 : issu du basket de rue, il a été codifié par la FIBA et se joue en dix minutes ou vingt et un points.`],
  ],

  "sp3-rugby-3": [
    ["Quinze, et sept", `Une équipe de rugby à quinze aligne quinze joueurs : huit avants, chargés de la conquête, et sept trois-quarts, chargés du mouvement. Le rugby à sept, ou rugby seven, en est une variante disputée sur le même terrain avec sept joueurs et deux mi-temps de sept minutes — ce qui produit un jeu d'espaces, très rapide, où la moindre erreur se paie immédiatement.

Le sept est entré au programme olympique à Rio en 2016, ce qui a considérablement accéléré son développement mondial, notamment dans des pays sans tradition de rugby : les circuits mondiaux masculins et féminins ont ouvert la voie à des sélections africaines et asiatiques.`],
    ["Les compétitions", `La première Coupe du monde de rugby n'a eu lieu qu'en 1987, organisée conjointement par la Nouvelle-Zélande et l'Australie. Ce retard s'explique par l'attachement des fédérations à l'amateurisme, qui n'a pris fin officiellement qu'en 1995. L'Afrique du Sud et la Nouvelle-Zélande dominent le palmarès à égalité de titres.

Le Tournoi des Six Nations oppose chaque hiver l'Angleterre, l'Écosse, le pays de Galles, l'Irlande, la France et l'Italie. Réussir le Grand Chelem consiste à battre les cinq autres équipes la même année. Les All Blacks, eux, exécutent avant chaque match un haka, danse rituelle maorie dont le Ka Mate est la version la plus connue ; ils en ont plusieurs, et son exécution fait l'objet d'un protocole précis avec l'adversaire.`],
    ["Les phases et les points", `Un essai vaut cinq points au rugby à quinze, la transformation qui le suit deux points supplémentaires, la pénalité et le drop trois points. Cette hiérarchie a évolué au fil du temps : l'essai valait trois points jusqu'en 1971, et sa valorisation progressive a visé à encourager le jeu d'attaque plutôt que le jeu au pied.

La mêlée est une phase de reprise du jeu qui oppose les avants des deux équipes en poussée après une faute mineure. C'est la phase la plus technique et la plus surveillée du jeu : la séquence d'engagement a été modifiée plusieurs fois pour réduire les blessures cervicales, les forces en jeu dépassant plusieurs tonnes.`],
    ["Le sujet qui domine tout", `L'évolution la plus préoccupante du rugby contemporain concerne les conséquences neurologiques des chocs à la tête. Plusieurs anciens joueurs internationaux ont développé des maladies neurodégénératives précoces, et des actions collectives ont été engagées contre les fédérations pour manquement à la protection des joueurs.

Les réponses réglementaires s'accélèrent : abaissement de la hauteur de plaquage autorisée, protocole commotion imposant le retrait immédiat et un délai de retour, limitation du nombre de contacts à l'entraînement, suivi longitudinal des joueurs. Le sport professionnel modifie ses règles plus vite qu'à aucun moment de son histoire, et la question posée est de savoir si un rugby de haut niveau peut rester à la fois spectaculaire et sûr.`],
  ],

  "sp3-cyclisme-3": [
    ["Trois semaines, trois fois par an", `Les trois grands tours sont le Tour de France, le Tour d'Italie — le Giro — et le Tour d'Espagne — la Vuelta. Chacun dure environ trois semaines et alterne étapes de plaine, de montagne et contre-la-montre. Réaliser les trois dans une même saison est théoriquement possible et pratiquement jamais tenté par les leaders, tant l'effort est destructeur.

Le contre-la-montre fait partir les coureurs séparément contre le chronomètre, sans aspiration ni tactique de groupe : c'est la vérité de l'effort individuel, et souvent le terrain où se décide un classement général. Miguel Indurain, cinq fois vainqueur du Tour entre 1991 et 1995, y construisait l'essentiel de son avance avant de contrôler la montagne.`],
    ["Les maillots et les classiques", `Le maillot à pois du Tour de France récompense le meilleur grimpeur, classé selon les points attribués au sommet des cols. Le maillot vert distingue le classement par points, souvent remporté par un sprinteur, et le maillot blanc le meilleur jeune coureur.

Les classiques sont des courses d'un jour, souvent plus anciennes que les grands tours. Paris-Roubaix, surnommée l'Enfer du Nord, se dispute en partie sur une trentaine de secteurs pavés, avec un taux d'abandon et de crevaison sans équivalent. Les cinq courses les plus prestigieuses — Milan-San Remo, le Tour des Flandres, Paris-Roubaix, Liège-Bastogne-Liège et le Tour de Lombardie — sont appelées les monuments du cyclisme.`],
    ["Les géants", `Deux Français ont remporté cinq Tours de France : Jacques Anquetil et Bernard Hinault. Le Belge Eddy Merckx, surnommé le Cannibale pour son appétit de victoires, domine toutes les statistiques du sport : cinq Tours, cinq Giros, une Vuelta, dix-neuf monuments, plus de cinq cents victoires professionnelles. Aucun coureur moderne, spécialisé sur un objectif, ne s'en approche.

Cette différence d'époque n'est pas anodine : la spécialisation extrême du cyclisme contemporain, où un coureur prépare deux ou trois objectifs dans l'année, rend les palmarès incomparables entre générations.`],
    ["Les tricheries", `Aucun sport n'a été autant marqué par le dopage. De 1998 à 2012, l'affaire Festina, puis les enquêtes sur l'EPO, puis la déchéance de Lance Armstrong de ses sept Tours de France ont installé le soupçon comme grille de lecture par défaut. Les éditions concernées n'ont pas été réattribuées, faute de vainqueur crédible dans les classements.

Le dopage mécanique est une tricherie d'une autre nature : la dissimulation d'un petit moteur d'assistance dans le cadre ou dans une roue. Un premier cas a été sanctionné en cyclo-cross en 2016, et les vélos font désormais l'objet de contrôles par balayage magnétique et imagerie sur les grandes épreuves. La fréquence réelle du phénomène reste inconnue, ce qui alimente les rumeurs autant que les démentis.`],
  ],

  "sp3-sport-femmes": [
    ["Une exclusion organisée", `Les femmes ont longtemps été exclues de la plupart des compétitions officielles, non par accident mais par décision. Pierre de Coubertin, rénovateur des Jeux, y était explicitement opposé : il jugeait la participation féminine inesthétique, inintéressante et contraire à sa conception de l'olympisme, dont il voulait faire l'exaltation de l'athlétisme masculin avec l'applaudissement féminin pour récompense.

Les femmes participent malgré tout dès 1900 à Paris, dans quelques disciplines seulement — tennis, golf, croquet, voile. Il faudra attendre 2012 pour que toutes les délégations comptent des athlètes féminines, et 2024 à Paris pour que la parité stricte des quotas de participation soit atteinte.`],
    ["Le contrôle des corps", `Les tests de féminité ont été imposés aux athlètes féminines à partir des années 1960 : examens gynécologiques imposés, puis tests chromosomiques. Humiliants et scientifiquement infondés — le sexe biologique ne se réduit ni aux chromosomes ni à une frontière nette — ils ont été abandonnés comme dépistage systématique dans les années 1990.

Ils ont été remplacés par des règles portant sur les taux hormonaux, appliquées à des athlètes présentant des variations du développement sexuel. Ces règles ont écarté de la compétition des championnes qui n'avaient jamais trichée, et font l'objet de contentieux devant les juridictions sportives et les cours des droits humains. La question n'est pas tranchée : elle oppose l'équité de la compétition, la non-discrimination et la définition même des catégories.`],
    ["Les leviers qui ont marché", `Le titre IX, loi américaine de 1972, interdit toute discrimination fondée sur le sexe dans les programmes éducatifs recevant des fonds fédéraux — donc dans le sport universitaire. Son effet a été spectaculaire : le nombre de sportives universitaires a été multiplié par plus de dix en une génération, et c'est de ce vivier que sont sorties les équipes américaines qui dominent le football et le basket féminins.

La première Coupe du monde féminine de football se tient en 1991 en Chine, avec douze équipes. Les États-Unis en détiennent le record de titres. En France, Marie-José Pérec a marqué les années 1990 avec trois titres olympiques, dont le doublé quatre cents et deux cents mètres à Atlanta en 1996.`],
    ["Ce qui reste", `L'écart de rémunération et de médiatisation demeure important dans presque tous les sports professionnels. Il se justifie souvent par les recettes générées, argument circulaire puisque ces recettes dépendent de l'exposition, elle-même longtemps refusée.

Les évolutions récentes le montrent : la Coupe du monde féminine de football de 2019, puis celle de 2023, ont battu des records d'audience, et les droits télévisés du sport féminin ont fortement progressé là où ils ont été négociés séparément plutôt que bradés en complément des droits masculins. Le tennis fait figure d'exception ancienne : les quatre tournois du Grand Chelem versent des primes égales depuis 2007, à l'issue d'un combat mené depuis les années 1970 par Billie Jean King.`],
  ],

  "sp3-economie-sport": [
    ["D'où vient l'argent", `Les droits de diffusion constituent la première ressource des grands sports : pour un club européen de football de premier plan, ils représentent souvent près de la moitié des recettes, devant la billetterie et le sponsoring. C'est la raison pour laquelle les calendriers, les horaires et les formats de compétition sont ajustés aux exigences des diffuseurs plutôt qu'à celles des spectateurs présents.

La Coupe du monde de football rapporte plusieurs milliards d'euros à la FIFA par édition, dont l'essentiel provient des droits télévisés et du marketing. Le naming, vente du nom d'une enceinte à un sponsor, complète ces revenus : ancien et généralisé en Amérique du Nord, il progresse en Europe malgré les résistances liées à l'attachement aux noms historiques.`],
    ["Encadrer les dépenses", `Deux mécanismes tentent de limiter la course aux dépenses. Le plafond salarial, employé dans les ligues nord-américaines, limite le total des salaires qu'une franchise peut verser : il maintient une incertitude sportive et empêche qu'une équipe achète durablement la victoire.

Le fair-play financier, introduit par l'UEFA en 2011, procède autrement : il limite les dépenses d'un club à ses recettes propres, afin d'éviter l'endettement et le dopage financier par un propriétaire. Plusieurs fois réformé, il est critiqué pour un effet secondaire : en interdisant d'investir au-delà de ses revenus, il fige la hiérarchie au profit des clubs déjà riches.`],
    ["Le marché des joueurs", `L'arrêt Bosman, rendu en 1995 par la Cour de justice des Communautés européennes, a libéré les joueurs en fin de contrat : ils peuvent depuis changer de club sans indemnité de transfert. La décision a aussi supprimé les quotas de joueurs communautaires.

Ses effets ont été considérables et durables : hausse des salaires, pouvoir accru des agents, concentration des meilleurs joueurs dans un petit nombre de clubs. Elle rappelle qu'une décision juridique portant sur la libre circulation des travailleurs a transformé l'économie d'un sport plus profondément qu'aucune réforme sportive.`],
    ["L'image et le coût", `Le sportwashing désigne l'usage du sport pour améliorer l'image d'un État ou d'une entreprise et détourner l'attention de critiques. Le terme s'est répandu autour de l'attribution de grandes compétitions et du rachat de clubs européens ; il pose une question difficile, puisque tout investissement dans le sport comporte une dimension d'image.

Côté villes hôtes, l'héritage d'un grand événement — effets durables sur les équipements, l'économie et la pratique — se révèle presque toujours inférieur aux promesses. Les surcoûts sont systématiques dans l'histoire des Jeux, et plusieurs équipements construits pour une quinzaine de jours sont restés sous-utilisés. C'est ce constat qui a raréfié les candidatures et poussé le CIO à assouplir ses exigences.`],
  ],
  "sp3-dopage": [
    ["Une organisation mondiale", `La lutte antidopage s'est structurée mondialement à partir de 1999 avec la création de l'Agence mondiale antidopage, financée à parts égales par le mouvement sportif et les États. Elle publie chaque année la liste des substances et méthodes interdites, harmonise les procédures et coordonne les laboratoires accrédités.

Avant elle, chaque fédération appliquait ses propres règles, avec des sanctions incohérentes et des conflits d'intérêts évidents — une fédération étant peu encline à sanctionner ses propres champions. C'est l'affaire Festina, en 1998 sur le Tour de France, qui a rendu cette réforme politiquement possible.`],
    ["Les produits et les méthodes", `L'EPO est une hormone qui stimule la production de globules rouges et augmente donc le transport d'oxygène : elle a bouleversé les sports d'endurance dans les années 1990, avant qu'un test ne soit disponible en 2000. Les stéroïdes anabolisants favorisent le développement musculaire, avec des effets secondaires lourds et durables.

L'autotransfusion sanguine ne fait appel à aucune substance étrangère : l'athlète se fait prélever son propre sang, le conserve, puis se le réinjecte avant l'épreuve pour augmenter sa masse de globules rouges. Indétectable par les tests classiques, elle a été l'une des raisons de développer le passeport biologique — un suivi longitudinal des paramètres sanguins qui détecte les variations physiologiquement improbables sans identifier de substance.`],
    ["Contrôler", `Le contrôle inopiné, réalisé hors compétition et sans préavis, est l'outil le plus efficace : le dopage se pratique à l'entraînement, pas la veille d'une course. Il suppose que les athlètes du groupe cible déclarent en permanence leur localisation, obligation contraignante dont trois manquements en un an valent sanction.

L'autorisation d'usage à des fins thérapeutiques permet à un athlète réellement malade d'utiliser une substance interdite, après examen d'un dossier médical. Le dispositif est nécessaire — un asthmatique doit pouvoir se soigner — et a été détourné, comme l'ont montré des fuites de dossiers médicaux d'athlètes de premier plan.`],
    ["Les grandes affaires", `L'affaire Balco, révélée au début des années 2000, portait sur un laboratoire californien fournissant à des athlètes de haut niveau un stéroïde conçu pour être indétectable. Elle a touché l'athlétisme et le baseball américains, et n'a été résolue qu'après qu'un entraîneur eut envoyé anonymement une seringue au laboratoire antidopage.

En 2015 et 2016, les rapports Pound puis McLaren établissent l'existence d'un dopage d'État russe, organisé avec la complicité du laboratoire antidopage de Moscou et des services de sécurité, y compris pendant les Jeux de Sotchi. La Russie a été sanctionnée collectivement, ses athlètes concourant sous drapeau neutre pendant plusieurs éditions. La difficulté de fond demeure : les méthodes de dopage évoluent plus vite que les tests, ce qui a conduit à conserver les échantillons dix ans pour permettre des réanalyses rétroactives.`],
  ],

  "sp3-sport-sante": [
    ["Ce que recommande la santé publique", `L'activité physique régulière est l'un des principaux déterminants de santé. L'OMS recommande au moins cent cinquante minutes hebdomadaires d'activité modérée, ou soixante-quinze minutes d'activité soutenue, complétées par du renforcement musculaire.

La sédentarité — temps prolongé passé assis ou allongé en éveil — constitue un facteur de risque distinct : elle n'est pas compensée par une séance de sport quotidienne. Les recommandations récentes insistent donc sur deux objectifs indépendants : bouger davantage, et rester assis moins longtemps d'affilée.`],
    ["Les régimes d'effort", `L'endurance fondamentale est un effort prolongé à intensité modérée, où la conversation reste possible. Elle constitue la base de la préparation dans tous les sports d'endurance, et représente l'essentiel du volume d'entraînement des athlètes de haut niveau — contrairement à l'intuition, qui pousse les amateurs à courir trop vite trop souvent.

L'entraînement fractionné alterne efforts intenses et récupérations : il développe efficacement les qualités cardiovasculaires en peu de temps, mais coûte cher en fatigue. L'équilibre entre les deux est l'objet central de la planification.`],
    ["Progresser, ou s'épuiser", `La surcompensation désigne l'amélioration des capacités qui survient après la récupération d'un effort : le corps ne se contente pas de revenir à son niveau initial, il le dépasse légèrement. C'est le mécanisme fondamental de l'entraînement, et il implique que le repos fait partie du travail.

Sans récupération suffisante, l'effet s'inverse. Le surentraînement est un état de fatigue durable avec baisse des performances, troubles du sommeil, de l'humeur et de l'appétit, dont la sortie demande des semaines ou des mois. Il touche particulièrement les athlètes motivés qui interprètent la baisse de performance comme un signal d'en faire davantage.`],
    ["Se blesser, et se préparer", `La rupture du ligament croisé antérieur est une lésion grave du genou, fréquente dans les sports de pivot — football, handball, ski. Elle touche significativement plus les femmes que les hommes, pour des raisons anatomiques, hormonales et neuromusculaires encore débattues, et impose environ neuf mois d'arrêt.

La commotion cérébrale est un traumatisme crânien qui perturbe temporairement le fonctionnement du cerveau, sans lésion visible à l'imagerie : elle ne suppose pas de perte de connaissance. Les commotions répétées sont associées à des lésions neurologiques durables, ce qui a conduit à imposer des protocoles de retrait immédiat. Côté préparation, l'échauffement élève progressivement la température musculaire et la vigilance ; en revanche, les étirements passifs prolongés juste avant l'effort peuvent réduire la puissance disponible — un échauffement dynamique leur est préféré.`],
  ],

  "sp3-sports-mecaniques": [
    ["La Formule 1", `Le championnat du monde de Formule 1 a été créé en 1950, avec une première course à Silverstone. Michael Schumacher et Lewis Hamilton détiennent à égalité le record de titres mondiaux, avec sept couronnes chacun. Côté français, Alain Prost a été quadruple champion du monde entre 1985 et 1993, dans une rivalité avec Ayrton Senna devenue légendaire.

Le Grand Prix de Monaco, disputé depuis 1929 dans les rues de la principauté, reste l'épreuve la plus emblématique : circuit étroit, sans dégagement, où le dépassement est presque impossible et où la qualification décide de la course. Il illustre une tension permanente du sport automobile entre patrimoine et spectacle.`],
    ["L'endurance et le hors-piste", `Les Vingt-Quatre Heures du Mans, créées en 1923, opposent des équipages qui se relaient au volant pendant une journée entière. La course a fait progresser la technique automobile de série — freins à disque, phares, aérodynamique, hybridation — bien plus que la Formule 1, précisément parce que la fiabilité y compte autant que la vitesse.

Le championnat du monde des rallyes se dispute sur routes fermées, en spéciales chronométrées, sur terre, asphalte, neige et gravier. Les Français Sébastien Loeb et Sébastien Ogier en ont dominé le palmarès pendant deux décennies. Le Dakar, rallye-raid longue distance largement hors-piste, s'est déroulé en Afrique jusqu'en 2007, puis en Amérique du Sud, et se tient depuis 2020 en Arabie saoudite.`],
    ["Deux roues, et l'électrique", `Le MotoGP est la catégorie reine du championnat du monde de vitesse moto, qui a succédé en 2002 à la catégorie cinq cents centimètres cubes. Les pilotes y atteignent des angles d'inclinaison supérieurs à soixante degrés, avec le genou et le coude au sol.

La Formule E, créée en 2014, est un championnat de monoplaces entièrement électriques, disputé essentiellement sur des circuits urbains. Son intérêt sportif a été discuté à ses débuts — les voitures manquaient d'autonomie au point d'imposer un changement de véhicule en course — mais elle a servi de laboratoire pour les batteries et la gestion d'énergie, et l'autonomie a doublé en quelques saisons.`],
    ["La sécurité, transformation majeure", `Le progrès qui a le plus réduit la mortalité en Formule 1 n'est pas une invention unique mais un ensemble : cellule de survie en fibre de carbone, structures déformables, crash-tests obligatoires, dégagements et barrières absorbantes, extraction rapide, présence médicale immédiate.

Dans les années 1960 et 1970, les pilotes mouraient à un rythme qui serait aujourd'hui inconcevable — plusieurs par saison. La dernière étape marquante est le halo, arceau de protection au-dessus du cockpit introduit en 2018 malgré les critiques esthétiques : il a depuis évité plusieurs accidents mortels, ce qui a clos le débat.`],
  ],
};
