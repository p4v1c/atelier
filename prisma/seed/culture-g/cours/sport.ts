/** Sport, premier lot — les cours des treize notions. */
import type { LotCours } from "../commun";

export const COURS_SPORT: LotCours = {
  "sp-jeux-olympiques": [
    ["Olympie, puis Coubertin", `Les Jeux antiques se tenaient à Olympie, sanctuaire dédié à Zeus dans le Péloponnèse, tous les quatre ans. Ils réservaient la compétition aux hommes libres de langue grecque et duraient près de mille ans avant d'être interdits à la fin du IVe siècle. Une trêve sacrée devait suspendre les conflits entre cités le temps que les athlètes et les pèlerins voyagent : c'est l'ancêtre de la trêve olympique, que l'ONU rappelle encore avant chaque édition sans qu'elle ait jamais eu force contraignante.

Les Jeux modernes ne sont pas la continuation de ceux-là. Ce sont une reconstitution, imaginée à la fin du XIXe siècle par Pierre de Coubertin, pédagogue français convaincu que le sport formait le caractère. Le Comité international olympique naît en 1894, les premiers Jeux se tiennent à Athènes en 1896. Entre les deux, quinze siècles de rien : l'idée d'une continuité ininterrompue est une reconstruction de la fin du XIXe siècle.`],
    ["Les symboles et le calendrier", `Les cinq anneaux, dessinés par Coubertin en 1913, figurent les cinq continents unis par l'olympisme ; leurs couleurs, avec le fond blanc, permettaient alors de composer tous les drapeaux du monde. La devise traditionnelle, plus vite, plus haut, plus fort, vient d'un religieux dominicain ami de Coubertin ; un quatrième terme, ensemble, lui a été ajouté en 2021.

Les femmes participent dès 1900 à Paris, mais dans quelques disciplines seulement, et il aura fallu attendre 2012 pour que toutes les délégations comptent des athlètes féminines, puis 2024 pour une stricte parité des quotas. Les Jeux d'hiver naissent en 1924 à Chamonix, sous le nom de Semaine internationale des sports d'hiver, reconnue après coup. Trois éditions ont été annulées, en 1916, 1940 et 1944, à cause des deux guerres mondiales.`],
    ["Un théâtre du monde", `Les Jeux ont très tôt servi de scène politique. À Berlin en 1936, dans une édition mise en scène par le régime nazi, l'Américain Jesse Owens remporte quatre médailles d'or, démentant par les faits la propagande raciale de ses hôtes. Boycotts, protestations sur les podiums et attentats ont ensuite ponctué presque chaque décennie.

Les Jeux paralympiques constituent le second grand rendez-vous du mouvement. Nés de la rééducation de blessés de guerre à l'hôpital britannique de Stoke Mandeville, ils prennent leur forme actuelle à Rome en 1960 et se tiennent depuis 1988 dans la même ville que les Jeux olympiques, quelques semaines après eux.`,
      { type: "frise", titre: "Quelques repères", evenements: [
        { date: "776 av. J.-C.", label: "Premiers Jeux à Olympie", texte: "Selon la tradition antique." },
        { date: "1894", label: "Création du CIO", texte: "À l'initiative de Pierre de Coubertin." },
        { date: "1896", label: "Athènes", texte: "Premiers Jeux modernes." },
        { date: "1900", label: "Paris", texte: "Premières participantes féminines." },
        { date: "1924", label: "Chamonix", texte: "Premiers Jeux d'hiver." },
        { date: "1960", label: "Rome", texte: "Premiers Jeux paralympiques." },
        { date: "2024", label: "Paris", texte: "Parité des quotas de participation." },
      ] }],
  ],

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

  "sp-dopage-ethique": [
    ["Qui décide de ce qui est interdit", `L'Agence mondiale antidopage, créée en 1999 et financée à parts égales par le mouvement sportif et les États, harmonise les règles et publie chaque année la liste des substances et méthodes interdites. Une substance y est inscrite si elle remplit au moins deux critères parmi trois : améliorer la performance, présenter un risque pour la santé, contrevenir à l'esprit sportif.

Ce mécanisme explique qu'un produit puisse être interdit sans être dangereux, et qu'un autre, dangereux mais sans effet sur la performance, ne le soit pas. Une autorisation d'usage à des fins thérapeutiques permet à un athlète réellement malade d'utiliser une substance interdite, après examen d'un dossier médical documenté.`],
    ["Contrôler", `Les contrôles les plus efficaces ne sont pas ceux des jours de compétition, mais les contrôles inopinés, réalisés à l'entraînement et sans préavis. Ils supposent que les athlètes du groupe cible indiquent en permanence où ils seront joignables : c'est l'obligation de localisation, ou whereabouts, dont trois manquements en un an valent sanction.

En cas de contrôle positif, l'athlète peut demander l'analyse du second échantillon prélevé, dit échantillon B, qui confirme ou infirme le premier. Les litiges internationaux sont jugés en dernier ressort par le Tribunal arbitral du sport, installé à Lausanne, dont les décisions s'imposent aux fédérations.`],
    ["Quand c'est l'État qui triche", `Le dopage d'État désigne un dopage organisé par des institutions publiques, avec la complicité des laboratoires chargés des contrôles. La République démocratique allemande l'a pratiqué à grande échelle dans les années 1970 et 1980 ; la Russie a été sanctionnée collectivement après le rapport McLaren de 2016, ses athlètes ayant dû concourir sous drapeau neutre pendant plusieurs éditions.

L'éthique sportive ne se limite pas au dopage. Le fair-play financier, introduit par l'UEFA en 2011, encadre les dépenses des clubs par rapport à leurs recettes, au nom d'une équité de la compétition : là encore, il s'agit d'empêcher qu'un avantage extérieur au terrain ne décide du résultat.`],
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

  "sp-sport-economie": [
    ["D'où vient l'argent", `La première source de revenus des grandes ligues sportives n'est ni la billetterie ni le maillot, mais les droits de retransmission télévisée, qui représentent souvent près de la moitié des recettes d'un club européen de football et davantage encore en Amérique du Nord. Ce basculement date des années 1990 et de l'arrivée des chaînes payantes.

Le sponsoring et le naming complètent le tableau. Le naming consiste à vendre le nom d'une enceinte à un annonceur pour une durée déterminée : la pratique est ancienne et généralisée en Amérique du Nord, plus récente et plus discutée en Europe, où les stades portent souvent des noms chargés d'histoire locale. Du côté des dépenses, la masse salariale constitue de loin le premier poste d'un club professionnel.`],
    ["Le marché des joueurs", `Une indemnité de transfert n'achète pas un joueur : elle rémunère la rupture anticipée de son contrat avec son club. C'est ce qui explique qu'un joueur en fin de contrat puisse partir librement, sans qu'aucune somme soit versée.

Cette liberté date de l'arrêt Bosman, rendu par la Cour de justice des Communautés européennes en 1995 : il consacre la libre circulation des joueurs européens en fin de contrat et supprime les quotas de joueurs communautaires. Il a bouleversé l'équilibre économique du football européen, en déplaçant le pouvoir de négociation vers les joueurs et leurs agents. En France, un club formateur est un club disposant d'un centre de formation agréé par l'État, ce qui lui donne des droits particuliers sur les jeunes qu'il forme.`],
    ["Deux modèles de compétition", `Les ligues nord-américaines fonctionnent en circuit fermé : ni promotion ni relégation, un nombre d'équipes fixe, et des mécanismes destinés à maintenir l'incertitude du résultat. Le plafond salarial limite le total des salaires qu'une franchise peut verser, et la draft attribue les meilleurs jeunes joueurs en priorité aux équipes les moins bien classées.

Le modèle européen repose au contraire sur l'ouverture : toute équipe peut théoriquement monter des divisions inférieures jusqu'à l'élite. Le projet de Superligue de football, lancé et abandonné en 2021, proposait d'importer le modèle fermé en Europe, ce qui explique l'ampleur du rejet qu'il a suscité. Enfin, les paris sportifs en ligne, autorisés en France depuis 2010, sont soumis à l'agrément d'une autorité de régulation, qui encadre à la fois les opérateurs et la publicité.`],
  ],
};
