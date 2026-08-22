/** Littérature, premier lot — les cours. */
import type { LotCours } from "../commun";

export const COURS_LITTERATURE: LotCours = {
  "li-genres-litteraires": [
    ["Les formes du récit", `Un genre se définit par sa forme et son mode d'énonciation, non par son sujet : un même sujet peut donner un roman, une pièce ou un poème. Le roman est le genre le plus souple, et se décline en sous-formes selon son dispositif. Le roman épistolaire est composé de lettres échangées, ce qui supprime le narrateur extérieur et multiplie les points de vue — Les Liaisons dangereuses en est le sommet français.

La nouvelle se distingue du roman par la brièveté et par le resserrement : une intrigue unique, peu de personnages, une chute souvent. La fable est un court récit à visée morale, mettant fréquemment en scène des animaux, dont l'origine remonte à Ésope et que La Fontaine a porté à sa perfection française.`],
    ["Écrire sur soi", `L'essai est un texte de réflexion personnelle sur un sujet, sans prétention à l'exhaustivité ni à la démonstration systématique. Montaigne invente le mot et la chose au XVIe siècle : essayer, c'est mettre à l'épreuve sa propre pensée.

L'autobiographie est le récit de sa propre vie par son auteur, avec un pacte implicite : ce qui est raconté est présenté comme vrai. L'autofiction, terme forgé en 1977 par Serge Doubrovsky, rompt ce pacte en assumant une part de fiction dans un récit de soi : l'auteur porte son nom, mais ne garantit plus l'exactitude. La distinction n'est pas seulement théorique, elle a donné lieu à des procès.`],
    ["Théâtre et poésie", `La tragédie classique obéit à des contraintes strictes : cinq actes, en vers, un héros de rang noble qui court à sa perte, et le respect des unités de temps, de lieu et d'action. Le drame romantique, deux siècles plus tard, rejette ces règles et revendique le mélange des registres et des milieux sociaux, sur le modèle revendiqué de Shakespeare.

En poésie, le sonnet est une forme fixe importée d'Italie : quatorze vers répartis en deux quatrains et deux tercets, avec un jeu de rimes contraint. Le poème en prose, apparu au XIXe siècle avec Aloysius Bertrand puis Baudelaire, abandonne vers et rimes tout en revendiquant la densité et le rythme de la poésie : c'est une définition par la tension plutôt que par la forme.`],
  ],

  "li-versification": [
    ["Compter les syllabes", `Le vers français se mesure en syllabes, non en accents. L'alexandrin, vers de douze syllabes, tire son nom du Roman d'Alexandre, poème du XIIe siècle écrit dans ce mètre. Le décasyllabe en compte dix, l'octosyllabe huit.

La difficulté du décompte tient au e muet : il compte comme une syllabe devant une consonne, s'élide devant une voyelle, et ne compte jamais en fin de vers. Une diérèse ajoute encore une possibilité : prononcer en deux syllabes ce qui s'en dit une dans la langue courante, comme dans un vers où le mot lion est compté pour deux. La synérèse fait l'inverse.`],
    ["Couper et enjamber", `L'alexandrin classique porte une césure après la sixième syllabe, qui le divise en deux hémistiches équilibrés. Le romantisme brisera cet équilibre en déplaçant la coupe, ce qui suffisait à faire scandale.

L'enjambement fait déborder une phrase sur le vers suivant : le sens et le mètre cessent de coïncider, ce qui crée une tension expressive. Le rejet et le contre-rejet en sont des variantes plus précises, selon que l'élément déborde en début ou en fin de vers. Ces procédés font partie de la ressource ordinaire du poète depuis le XIXe siècle ; ils étaient bannis par la doctrine classique.`],
    ["Les rimes, et leur abandon", `Les rimes se disposent selon trois schémas principaux : plates ou suivies en AABB, croisées en ABAB, embrassées en ABBA. Leur qualité se mesure au nombre de sons communs : une rime pauvre en partage un, une rime suffisante deux, une rime riche au moins trois.

La poésie classique impose en outre l'alternance des rimes féminines, terminées par un e muet, et des rimes masculines. Tout cet édifice est démonté à la fin du XIXe siècle : le vers libre abandonne mètre et rime réguliers, gardant du vers la seule disposition en lignes. Apollinaire ira plus loin avec le calligramme, poème dont la disposition sur la page dessine une figure — la forme visible devenant elle-même porteuse de sens.`],
  ],

  "li-figures-style": [
    ["Rapprocher", `La comparaison et la métaphore font le même geste, rapprocher deux réalités, mais pas de la même façon : la comparaison montre l'outil de comparaison — comme, tel, semblable à — quand la métaphore le supprime et pose l'identité. Cette suppression est ce qui fait sa force : elle n'illustre pas, elle affirme.

Deux autres figures procèdent par contiguïté et non par ressemblance. La métonymie désigne une chose par un terme qui lui est logiquement lié : boire un verre, lire un Zola. La synecdoque, cas particulier, désigne le tout par la partie ou l'inverse : une voile pour un navire, cent têtes pour cent bêtes.`],
    ["Amplifier, atténuer", `L'hyperbole exagère volontairement : mourir de faim, des siècles d'attente. Elle est si répandue dans la langue courante qu'on ne la perçoit plus comme figure.

À l'opposé, la litote dit moins pour faire entendre plus — l'exemple canonique étant le va, je ne te hais point de Chimène, qui signifie exactement le contraire de sa lettre. L'euphémisme atténue lui aussi, mais dans une autre intention : adoucir une réalité désagréable plutôt que renforcer par la retenue. L'oxymore, enfin, associe deux termes contradictoires — obscure clarté, silence assourdissant — et produit du sens par le heurt même.`],
    ["Répéter, feindre", `L'anaphore répète un mot en tête de plusieurs propositions successives : c'est la figure du discours politique par excellence, parce qu'elle martèle et structure à la fois. L'allitération répète un même son consonantique à l'intérieur d'un vers ou d'une phrase, l'assonance faisant de même avec les voyelles.

La prétérition relève d'une autre logique, celle de la feinte : annoncer qu'on ne dira pas ce qu'on dit malgré tout — je ne mentionnerai pas ses échecs répétés. Elle permet de formuler une accusation tout en affichant la délicatesse de s'en abstenir, ce qui la rend redoutable en rhétorique judiciaire et politique.`],
  ],

  "li-theatre-francais": [
    ["Une institution", `La Comédie-Française est fondée en 1680 par une décision de Louis XIV, qui fusionne les troupes parisiennes existantes en une seule compagnie dotée d'un monopole. Elle est aujourd'hui la plus ancienne troupe de théâtre permanente au monde encore en activité.

Son surnom, la Maison de Molière, tient à ce que la troupe issue de celle de Molière, mort sept ans plus tôt, en constituait le noyau. Son organisation en société d'acteurs — sociétaires et pensionnaires — remonte à cette origine et n'a pas d'équivalent.`],
    ["Les scandales", `Le théâtre français a ses batailles. Le Mariage de Figaro, de Beaumarchais, est écrit en 1778 mais interdit pendant six ans par la censure royale, qui y voit avec raison une charge contre les privilèges : sa création en 1784 est un triomphe et un présage.

En 1830, la première d'Hernani, de Victor Hugo, tourne à l'affrontement organisé entre partisans du romantisme et défenseurs des règles classiques : ce que la salle défendait, ce n'était pas une pièce, c'était une conception de la littérature. La bataille dure plusieurs représentations et devient le symbole du basculement romantique.`],
    ["Le XXe siècle", `Après-guerre, le théâtre se réinvente sur deux fronts. Samuel Beckett écrit En attendant Godot, créée en 1953 : deux vagabonds attendent quelqu'un qui ne viendra pas, l'intrigue est abolie et l'attente devient le sujet. Eugène Ionesco pousse l'absurde vers la mécanique du langage ; sa Cantatrice chauve, créée en 1950, est jouée sans interruption depuis 1957 dans le même petit théâtre parisien.

Sur le plan des idées, Antonin Artaud avait appelé dès 1938, dans Le Théâtre et son double, à un théâtre de la cruauté agissant physiquement sur le spectateur. Bertolt Brecht propose une voie inverse avec la distanciation : empêcher l'identification, rappeler au spectateur qu'il est au théâtre, pour qu'il juge au lieu de s'émouvoir. Côté institutions, Jean Vilar donne au Théâtre national populaire sa forme d'après-guerre et crée en 1947 le Festival d'Avignon, avec l'ambition d'un théâtre exigeant pour un public large.`],
  ],

  "li-litterature-anglaise": [
    ["Shakespeare", `Shakespeare a écrit environ trente-sept pièces et cent cinquante-quatre sonnets, sur une carrière d'une vingtaine d'années. L'ampleur de son influence sur l'anglais est telle qu'on lui attribue l'introduction de milliers de mots et d'expressions dans la langue courante.

Hamlet, sa pièce la plus longue, se déroule au Danemark : un prince apprend par un spectre que son père a été assassiné par son oncle, et diffère indéfiniment sa vengeance. L'hésitation y devient un caractère, ce qui était inédit au théâtre.`],
    ["Le roman britannique", `Jane Austen ouvre Orgueil et Préjugés sur une phrase devenue proverbiale, à propos de la vérité universellement reconnue qu'un homme fortuné doit chercher une épouse : l'ironie du narrateur y est un instrument d'analyse sociale. En 1816, au bord du lac Léman, un défi littéraire entre amis conduit Mary Shelley, âgée de dix-huit ans, à écrire Frankenstein — souvent tenu pour le premier roman de science-fiction.

Charles Dickens fait du roman une machine à décrire la misère industrielle : Oliver Twist s'ouvre sur un orphelin réclamant du rab de gruau, scène devenue emblématique. Emily Brontë, l'une des trois sœurs écrivaines, publie Les Hauts de Hurlevent, roman d'une violence passionnelle qui déconcerta ses contemporains.`],
    ["Modernisme et après", `Le XXe siècle apporte la rupture formelle. James Joyce raconte dans Ulysse une seule journée à Dublin, le 16 juin 1904, en épousant le flux de conscience de ses personnages et en pastichant tous les styles de la prose anglaise. Virginia Woolf explore la même voie dans Mrs Dalloway et Les Vagues, en dissolvant l'intrigue dans la perception.

George Orwell, en 1949, publie 1984 : une société de surveillance totale où le langage lui-même est réduit pour rendre la dissidence impensable. De l'autre côté de l'Atlantique, Ernest Hemingway impose une prose dépouillée, dont Le Vieil Homme et la Mer est l'aboutissement — un récit de quelques dizaines de pages qui lui vaut le Pulitzer puis le Nobel.`],
  ],

  "li-litteratures-monde": [
    ["Le roman russe", `Le XIXe siècle russe produit deux monuments. Guerre et Paix, de Tolstoï, se déroule pendant les guerres napoléoniennes et mêle des centaines de personnages à une réflexion sur les causes de l'histoire : l'auteur y conteste que les grands hommes la fassent.

Dostoïevski travaille à l'échelle inverse, celle de la conscience. Crime et Châtiment raconte le meurtre d'une vieille usurière par un étudiant persuadé d'être au-dessus de la loi commune, et les six cents pages qui suivent examinent ce que cet acte fait à celui qui l'a commis.`],
    ["L'Amérique latine", `Gabriel García Márquez publie en 1967 Cent Ans de solitude, histoire d'une famille et d'un village imaginaire sur plusieurs générations, où le prodige est raconté du même ton que le quotidien : c'est le réalisme magique, qui donnera son identité au boom latino-américain.

Jorge Luis Borges, Argentin, travaille au format court : les nouvelles réunies dans Fictions construisent des labyrinthes, des bibliothèques infinies et des livres qui se réécrivent, avec une économie de moyens qui a influencé toute la littérature contemporaine. Isabel Allende, Chilienne, prolonge la veine familiale et politique avec La Maison aux esprits.`],
    ["L'Asie, l'Afrique, et les origines", `Le Dit du Genji, écrit vers l'an mille par Murasaki Shikibu, femme de la cour japonaise, est souvent tenu pour le premier roman du monde : plus de mille pages, une psychologie fine, une construction qui n'a pas d'équivalent à cette date. Yasunari Kawabata obtient en 1968 le premier prix Nobel de littérature japonais.

En Afrique, Chinua Achebe publie en 1958 Le Monde s'effondre, qui raconte l'arrivée des colons britanniques du point de vue d'un village igbo : le roman inaugure une littérature africaine de langue anglaise écrite depuis l'intérieur. Wole Soyinka, Nigérian lui aussi, reçoit en 1986 le premier prix Nobel de littérature décerné à un écrivain africain. Bien avant tout cela, L'Épopée de Gilgamesh, écrite en Mésopotamie, reste l'un des plus anciens textes littéraires connus.`],
  ],

  "li-critique-lecture": [
    ["Qui raconte", `Le narrateur n'est pas l'auteur : c'est une voix construite à l'intérieur du récit, dont l'auteur peut se distinguer entièrement. Confondre les deux est l'erreur d'analyse la plus fréquente.

Cette voix peut adopter différentes positions. Un narrateur interne raconte depuis le point de vue d'un personnage, avec les limites de sa connaissance. Un narrateur omniscient connaît les pensées de tous les personnages et peut anticiper les événements. La focalisation externe fait l'inverse : le récit ne rapporte que ce qui est visible, comme une caméra, sans accès à aucune intériorité — technique du roman behavioriste et du polar américain.`],
    ["Sur quel ton", `Le registre qualifie l'effet visé par un texte. Le registre pathétique cherche à émouvoir et à susciter la compassion, en insistant sur la souffrance. Le registre épique amplifie : il grandit l'action et les personnages, multiplie les hyperboles et les pluriels, et transforme un combat individuel en affrontement de forces.

L'ironie relève d'un autre mécanisme : faire entendre le contraire de ce que l'on dit, en comptant sur la complicité du lecteur pour rétablir le sens. Elle échoue dès que cette complicité manque — d'où les malentendus fréquents lorsqu'un texte ironique est cité hors contexte.`],
    ["Comment c'est construit", `Le récit organise librement le temps. Une analepse est un retour en arrière ; une prolepse, une anticipation ; une ellipse narrative passe une période sous silence, laissant au lecteur le soin de combler. Ces écarts entre le temps de l'histoire et celui du récit sont l'un des principaux moyens d'expression du romancier.

Deux autres notions servent à décrire les emboîtements. La mise en abyme est le procédé par lequel une œuvre contient une reproduction d'elle-même — une pièce jouée dans la pièce, un tableau représentant le tableau. L'intertextualité désigne la présence d'un texte dans un autre, par citation, allusion, pastiche ou parodie : aucun texte n'est écrit dans le vide, et repérer ses dettes fait partie de la lecture.`],
  ],

  "li-langues-traduction": [
    ["Le traducteur est un auteur", `La loi française reconnaît au traducteur littéraire le statut d'auteur : sa traduction est une œuvre dérivée, protégée à part entière, et il perçoit des droits sur les ventes. Ce n'est pas une subtilité juridique — cela signifie qu'une traduction est une création, avec ses choix, son style et sa date, et non un décalque neutre.

C'est ce qui justifie les retraductions : traduire à nouveau une œuvre déjà traduite n'est pas corriger une erreur, c'est proposer une autre lecture, dans une langue d'arrivée qui a elle-même changé. Les grands textes sont retraduits toutes les deux ou trois générations.`],
    ["Deux fidélités", `L'histoire de la traduction oscille entre deux exigences contradictoires. Au XVIIe siècle, on appelait les belles infidèles ces traductions élégantes mais éloignées de l'original, qui adaptaient les Anciens au goût du temps quitte à les réécrire.

La tension subsiste sous d'autres noms. Une traduction cibliste privilégie la fluidité dans la langue d'arrivée : le lecteur ne doit pas sentir qu'il lit une traduction. Une traduction sourcière conserve au contraire les aspérités de l'original, quitte à malmener le français. Aucune des deux positions n'est absurde, et le choix engage tout le texte. Le piège technique le plus banal reste le faux ami : un mot qui ressemble à un autre dans une autre langue mais n'en a pas le sens.`],
    ["Les traductions qui ont fait des langues", `Certaines traductions ont eu plus d'effet que des œuvres originales. La Septante est la traduction en grec de la Bible hébraïque, réalisée à Alexandrie à partir du IIIe siècle avant notre ère : elle rend le texte accessible au monde hellénistique et servira de base aux premiers chrétiens. Au IVe siècle, saint Jérôme traduit la Bible en latin — la Vulgate — qui restera la référence occidentale pendant mille ans.

La traduction de la Bible par Martin Luther, au XVIe siècle, a contribué à fixer l'allemand moderne en imposant une norme écrite commune. Aujourd'hui, la traduction automatique neuronale produit des résultats convaincants à partir de modèles statistiques entraînés sur d'immenses corpus, mais bute précisément sur ce que la théorie appelle l'intraduisible : ce qui résiste au passage d'une langue à l'autre et oblige à choisir plutôt qu'à rendre.`],
  ],

  "li2-moliere": [
    ["Un fils de tapissier", `Jean-Baptiste Poquelin naît en 1622 dans une famille de tapissiers aisés. Son père détient la charge de tapissier ordinaire du roi, transmissible, qui lui assure une position confortable et un avenir tracé. Il l'abandonne à vingt et un ans pour fonder une troupe de théâtre — l'Illustre Théâtre — qui fait faillite en deux ans et le conduit brièvement en prison pour dettes.

Suivent treize années de tournées en province, où il apprend le métier, écrit ses premières farces et constitue une troupe soudée. Quand il revient à Paris en 1658, il a trente-six ans et une expérience de la scène que peu d'auteurs de son temps possèdent : il joue lui-même presque tous ses rôles principaux. C'est cette double position d'auteur et de comédien qui explique la théâtralité de son écriture.`,
      { image: "lit-moliere", legende: "Molière en costume de scène. Auteur, directeur de troupe et comédien, il jouait lui-même la plupart de ses grands rôles — Harpagon, Argan, Alceste." }],
    ["Le scandale et la censure", `Tartuffe est interdite pendant cinq ans. La pièce met en scène un faux dévot qui s'introduit dans une famille et manque de la ruiner ; le parti dévot y voit une attaque contre la religion elle-même, et obtient l'interdiction dès la première représentation en 1664. Molière remanie, plaide, écrit des placets au roi, et n'obtient l'autorisation définitive qu'en 1669.

Dom Juan, écrit dans l'intervalle pour compenser le manque à gagner, aggrave la situation : le séducteur impie y raisonne avec une force que sa punition finale — foudroyé par la statue du Commandeur — n'annule pas vraiment. La pièce est retirée après quelques semaines et ne sera plus jouée dans son texte intégral avant le XIXe siècle.`],
    ["Une galerie de caractères", `Molière ne peint pas des individus mais des travers, poussés jusqu'à l'obsession. Alceste, dans Le Misanthrope, exige une sincérité absolue de ses contemporains tout en aimant Célimène, la plus coquette et la plus mondaine des femmes : le comique naît de cette contradiction, et la pièce touche à autre chose que le rire.

Harpagon, dans L'Avare, est obsédé par sa cassette au point de préférer son argent à ses enfants — et de s'adresser au public pour lui demander s'il n'a pas vu son voleur. Monsieur Jourdain, dans Le Bourgeois gentilhomme, veut acquérir les manières de la noblesse et découvre avec ravissement qu'il fait de la prose depuis quarante ans sans le savoir. Chaque personnage est un mécanisme monté sur un seul ressort, ce qui les rend à la fois drôles et inquiétants.`],
    ["Musique, danse et brouille", `La comédie-ballet est un genre que Molière invente avec le compositeur Jean-Baptiste Lully : une pièce mêlant texte parlé, musique et danse, où les intermèdes chantés font partie de l'action au lieu de l'interrompre. Le Bourgeois gentilhomme en est l'exemple le plus abouti, avec sa cérémonie turque finale.

La collaboration se termine mal. Lully obtient du roi un privilège sur l'opéra qui restreint drastiquement le nombre de musiciens et de chanteurs autorisés dans les autres théâtres — dont celui de Molière. La brouille est totale et durable : c'est un conflit d'intérêts commerciaux autant qu'artistiques, dans un monde du spectacle où les monopoles royaux décidaient de tout.`],
    ["Les règles, et la fin", `La règle des trois unités — unité de temps, de lieu et d'action — s'impose au théâtre classique. Molière la respecte inégalement : rigoureusement dans ses grandes comédies en cinq actes, beaucoup plus librement dans ses pièces à machines et ses farces. Il s'en explique avec ironie dans La Critique de l'École des femmes : la grande règle, écrit-il, est de plaire.

Le 17 février 1673, il joue Le Malade imaginaire, où il tient le rôle d'Argan, malade imaginaire pris de convulsions. Il est réellement souffrant, achève la représentation et meurt quelques heures plus tard chez lui — non sur scène, contrairement à la légende. Comédien non repenti, il n'obtient une sépulture chrétienne que par intervention royale, de nuit et sans cérémonie.`],
  ],

  "li2-racine-corneille": [
    ["Deux générations, deux tragédies", `Corneille et Racine sont séparés par une génération et par une conception opposée de la tragédie. Chez Corneille, le héros choisit son destin : il est déchiré entre des exigences contradictoires, mais il tranche, et sa grandeur tient à ce choix. Chez Racine, la passion détruit le personnage sans qu'il puisse rien y opposer ; il sait ce qu'il fait, il le déplore, et il le fait quand même.

Cette différence a des conséquences sur tout : la longueur des pièces, le nombre de personnages, la place de l'action. Corneille bâtit des intrigues politiques complexes ; Racine élague jusqu'à ne garder qu'une situation et quatre ou cinq personnages enfermés ensemble.`],
    ["Corneille et la querelle du Cid", `Le Cid, créé en 1637, remporte un immense succès public et déclenche aussitôt une querelle littéraire. On reproche à Corneille d'avoir violé les règles — la pièce enchaîne trop d'événements en vingt-quatre heures — et surtout d'avoir montré une héroïne qui accepte d'épouser le meurtrier de son père. L'Académie française, sollicitée par Richelieu, rend des Sentiments partagés qui condamnent poliment la pièce.

Le dilemme du Cid est resté le modèle du genre : Rodrigue doit choisir entre son amour pour Chimène et l'honneur de sa famille, offensée par le père de celle-ci. Horace pousse la logique plus loin en opposant trois frères à trois frères, dont l'un est le beau-frère de l'autre camp : le devoir civique y écrase les liens de famille. Cinna, enfin, tourne autour de la clémence du souverain, qui pardonne à ceux qui conspiraient contre lui — sujet politique dans un régime en construction.`],
    ["Racine et l'enfermement", `Racine a été élevé à Port-Royal, foyer du jansénisme, courant religieux qui insiste sur la faiblesse de l'homme et sur la nécessité de la grâce : on ne se sauve pas par sa volonté. Sa formation explique en partie ses personnages, incapables de vouloir leur bien.

Andromaque repose sur une chaîne d'amours non réciproques : Oreste aime Hermione, qui aime Pyrrhus, qui aime Andromaque, qui aime son mari mort. Aucun de ces quatre ne peut être heureux, et chacun le sait dès le premier acte. Phèdre met en scène une reine dévorée d'amour pour le fils de son mari, consciente de l'horreur de sa passion et incapable de s'en défaire. Bérénice, enfin, se résume à une séparation sans mort ni sang : un empereur renvoie la femme qu'il aime parce que Rome ne veut pas d'une reine étrangère — Racine y démontre qu'une tragédie n'a besoin d'aucun cadavre.`],
    ["Le retrait et le retour", `Après l'échec relatif de Phèdre en 1677, Racine cesse d'écrire pour le théâtre public, devient historiographe du roi et se rapproche de la cour. Il ne reviendra à la scène que douze ans plus tard, à la demande de Madame de Maintenon, pour écrire deux tragédies bibliques destinées aux jeunes filles de la maison de Saint-Cyr : Esther et Athalie.

Ces pièces, écrites pour des élèves et sans destination commerciale, comptent parmi ses plus abouties, notamment Athalie avec ses chœurs chantés. Elles rappellent une réalité rarement soulignée : les deux plus grands tragédiens français ont écrit dans un système où le succès dépendait d'une cour, d'un ministre et d'une cabale autant que du public.`],
  ],
  "li2-conte-philosophique": [
    ["Raconter pour démontrer", `Le conte philosophique est un genre du XVIIIe siècle : un récit bref qui met une thèse à l'épreuve d'une fiction. Il n'illustre pas une idée déjà admise, il la soumet à des situations qui la mettent en difficulté — et la conclusion tient souvent dans une formule que le lecteur emporte.

Sa forme n'est pas un choix esthétique gratuit. Le conte déguise l'argumentation en récit pour échapper à la censure : un traité contre l'Église ou la monarchie est saisi, un conte oriental amusant circule. Voltaire n'a d'ailleurs jamais reconnu la paternité de la plupart des siens, publiés sous pseudonyme et à l'étranger.`,
      { image: "lit-voltaire", legende: "Voltaire, qui publiait ses contes anonymement ou sous pseudonyme, souvent à l'étranger, et niait ensuite les avoir écrits — précaution nécessaire dans un pays où l'on était embastillé pour moins que cela." }],
    ["Candide contre l'optimisme", `Candide est dirigé contre l'optimisme, doctrine philosophique selon laquelle nous vivons dans le meilleur des mondes possibles et tout y est pour le mieux. Voltaire l'écrit après le tremblement de terre de Lisbonne de 1755, qui fit des dizaines de milliers de morts un jour de Toussaint : comment soutenir devant cela que tout est bien ?

Le procédé est implacable. Candide et son précepteur Pangloss traversent guerre, viol, esclavage, autodafé et naufrage, et Pangloss continue imperturbablement de démontrer que tout va pour le mieux. Le récit s'achève sur une formule devenue proverbe : il faut cultiver notre jardin. Ce n'est ni un appel au repli ni une conclusion optimiste, mais un renoncement à la métaphysique au profit de l'action limitée et concrète.`],
    ["Trois autres contes de Voltaire", `Micromégas met en scène un géant venu de l'étoile Sirius, haut de plusieurs lieues, qui visite la Terre accompagné d'un habitant de Saturne : le changement d'échelle réduit les hommes à des animalcules dont les guerres et les prétentions philosophiques paraissent dérisoires. C'est l'un des premiers récits de science-fiction philosophique.

Zadig suit les épreuves d'un sage babylonien que sa vertu même précipite dans le malheur, et pose la question de la providence. L'Ingénu prend un chemin inverse : un Huron arrive en France, découvre les institutions, la religion et la Bastille avec un regard neuf, et sa naïveté fait apparaître l'absurdité de ce qui nous semble naturel. C'est le procédé du regard étranger, dont Montesquieu avait donné le modèle dans Les Lettres persanes, roman épistolaire où deux Persans en voyage commentent la société française.`],
    ["Diderot, autrement", `Diderot pratique le genre avec plus de liberté formelle encore. Le Neveu de Rameau est un dialogue entre un philosophe et un parasite cynique, neveu du compositeur : ce dernier tient les propos les plus immoraux avec une lucidité qui désarme son interlocuteur. Le texte, resté inédit du vivant de l'auteur, fascinera Goethe puis Hegel.

Jacques le Fataliste joue avec les conventions du récit : le narrateur interrompt son histoire, prend le lecteur à partie, propose plusieurs suites possibles et refuse de conclure. Deux siècles avant le Nouveau Roman, c'est une machine à démonter le roman de l'intérieur. La Religieuse, enfin, quitte le jeu pour la dénonciation : le récit d'une jeune fille contrainte au couvent contre sa volonté est une charge directe contre les vocations forcées, dans un pays où l'on plaçait couramment ses filles au couvent pour éviter de doter plusieurs héritières.`],
  ],

  "li2-balzac-realisme": [
    ["Un projet d'ampleur inédite", `Balzac ne veut pas écrire des romans, mais faire concurrence à l'état civil : décrire une société entière, ses métiers, ses classes, ses provinces et ses passions. La Comédie humaine réunira près de cent œuvres, avec un plan raisonné — études de mœurs, études philosophiques, études analytiques.

Pour tenir cet ensemble, il invente un procédé que tout le roman moderne lui reprendra : le retour des personnages d'un livre à l'autre. Un comparse d'un roman devient le héros du suivant, un banquier croisé en passant réapparaît vingt ans plus tard, ruiné. Le lecteur qui suit l'ensemble finit par connaître ce monde comme une société réelle, avec ses réputations et ses souvenirs.`],
    ["Paris, la province, l'argent", `Le Père Goriot met en scène un ancien commerçant qui se dépouille de tout pour ses deux filles, lesquelles le laissent mourir seul dans une pension de famille. C'est dans ce roman que Rastignac, jeune provincial ambitieux, lance depuis le cimetière du Père-Lachaise son défi à Paris étendu sous ses pieds — scène devenue l'emblème de l'ambition sociale.

Illusions perdues raconte l'échec de ce parcours : un jeune poète d'Angoulême monte à Paris, découvre le journalisme, la corruption de la critique littéraire et la loi du marché, et rentre ruiné. Eugénie Grandet reste au contraire en province, avec un père avare dont l'obsession détruit la vie de sa fille. Partout, l'argent est le moteur, et Balzac en donne les chiffres exacts — rentes, dots, dettes — avec une précision de notaire.`],
    ["Le fantastique et le pacte", `La Peau de chagrin ajoute une dimension inattendue à cet édifice réaliste. Un jeune homme désespéré acquiert une peau magique qui exauce chacun de ses désirs, mais rétrécit à chaque vœu — et sa vie avec elle. Vouloir, c'est se consumer.

Le récit est fantastique, mais son sujet est celui de toute La Comédie humaine : l'énergie vitale se dépense, et le désir tue celui qui s'y livre. Balzac lui-même écrivait quinze heures par jour, soutenu par des quantités de café dont ses biographes ont fait un motif ; il est mort à cinquante et un ans.`],
    ["Autour de Balzac", `Stendhal, son aîné, publie Le Rouge et le Noir en 1830 : l'ascension d'un fils de charpentier qui, faute de pouvoir faire carrière dans l'armée sous la Restauration, choisit la soutane. Le titre oppose les deux voies. Son écriture sèche et rapide est à l'opposé de la profusion balzacienne, et il prédisait n'être compris qu'en 1935.

Flaubert défend un principe contraire à celui de Balzac : l'impersonnalité, l'auteur devant être dans son œuvre comme Dieu dans la création, présent partout et visible nulle part. Madame Bovary, roman d'une femme lassée de la vie provinciale et de son mari, lui vaut un procès en 1857 dont il sort acquitté. Maupassant, formé par Flaubert, publie Boule de Suif en 1880 et portera la nouvelle à sa perfection française.`],
  ],
  "li2-zola-naturalisme": [
    ["Un programme scientifique", `Zola ne se contente pas d'écrire des romans réalistes : il théorise. Dans Le Roman expérimental, publié en 1880, il propose d'appliquer au roman la méthode expérimentale que Claude Bernard venait de formuler pour la médecine — placer des personnages dans un milieu donné, avec une hérédité donnée, et observer ce qui se produit.

Le programme est intenable au sens strict, puisque le romancier décide de tout ce qu'il prétend observer, et Zola le savait. Mais il fonde une méthode de travail réelle : avant chaque roman, il mène de véritables enquêtes de terrain, descend dans une mine, suit les Halles la nuit, monte sur une locomotive, remplit des carnets de vocabulaire technique et de plans. C'est ce travail documentaire qui donne à ses livres leur densité.`,
      { image: "lit-zola", legende: "Émile Zola. Avant d'écrire « Germinal », il descendit dans une fosse d'Anzin et remplit des carnets entiers de notes techniques, de plans et de mots de métier." }],
    ["Vingt volumes, une famille", `Le cycle des Rougon-Macquart compte vingt romans, sous-titrés Histoire naturelle et sociale d'une famille sous le Second Empire. Chaque volume suit un membre de la famille dans un milieu différent, et l'ensemble balaie la société entière — paysans, ouvriers, boutiquiers, financiers, artistes, prêtres, prostituées.

L'hérédité y tient une place explicite : Zola dresse un arbre généalogique où se transmettent une tare nerveuse et l'alcoolisme, censés expliquer en partie les destins. C'est la part la plus datée de son projet, appuyée sur une science de son temps aujourd'hui abandonnée. Elle n'entame pas la force des romans, où le milieu social pèse en réalité bien davantage que le sang.`],
    ["Quatre mondes", `Germinal est consacré au monde de la mine : conditions de travail, grève, répression, et une lucidité rare sur la difficulté d'une action collective. Le titre annonce une germination — quelque chose lève sous la terre.

L'Assommoir décrit la déchéance d'une blanchisseuse par l'alcool, dans un langage qui emprunte au parler populaire jusque dans la narration : le procédé fit scandale des deux côtés, la bourgeoisie y voyant de la vulgarité et la gauche une insulte au peuple. Au Bonheur des Dames met en scène l'essor des grands magasins et la destruction du petit commerce, avec une fascination assumée pour la machine commerciale. La Bête humaine se déroule dans le monde des chemins de fer, où la locomotive devient un personnage. Le Ventre de Paris, enfin, est un roman des Halles, saturé de nourriture et d'odeurs.`],
    ["Le groupe, et sa dissolution", `Le naturalisme fut aussi une école. Les Soirées de Médan, recueil collectif de six nouvelles paru en 1880, en marque l'acte de naissance : Zola y publie aux côtés de cinq jeunes écrivains, dont Maupassant, qui y donne Boule de Suif — la meilleure du lot, et de loin.

Le groupe se défait rapidement. Dès 1884, Huysmans publie À rebours, roman sans intrigue où un aristocrate neurasthénique se retire du monde pour vivre parmi ses objets, ses parfums et ses lectures. C'est le contraire exact du programme naturaliste : ni milieu social, ni enquête, ni action. Le livre devient la bible du courant décadent, et Zola, qui l'avait accueilli avec inquiétude, y vit à juste titre la fin de son école.`],
  ],

  "li2-proust": [
    ["Sept volumes et une phrase", `À la recherche du temps perdu compte sept volumes, publiés de 1913 à 1927, les trois derniers après la mort de l'auteur. Le premier, Du côté de chez Swann, est refusé par plusieurs éditeurs — dont Gide pour la NRF, qui reconnaîtra plus tard son erreur — et paraît à compte d'auteur. Le deuxième, À l'ombre des jeunes filles en fleurs, obtient le prix Goncourt en 1919 et fait basculer la réputation de Proust.

La Recherche n'est pas un récit chronologique : elle suit le mouvement de la mémoire, avec ses retours, ses arrêts et ses dilatations. Une soirée peut occuper deux cents pages, plusieurs années tenir en une phrase. La longueur des périodes n'est pas une coquetterie : elle épouse le rythme d'une pensée qui se corrige et se précise en avançant.`,
      { image: "lit-proust", legende: "Marcel Proust. Reclus dans une chambre tapissée de liège, il a passé les quinze dernières années de sa vie à écrire et à réécrire un seul livre." }],
    ["La mémoire involontaire", `L'épisode le plus célèbre du livre tient en quelques pages : le narrateur trempe une madeleine dans du thé, et la sensation ressuscite intact un pan de son enfance à Combray, qu'aucun effort volontaire n'avait pu retrouver.

C'est ce que Proust appelle la mémoire involontaire : un souvenir ressuscité par une sensation, hors de tout effort et souvent contre lui. Elle s'oppose à la mémoire volontaire, qui ne restitue que des faits secs, sans la saveur du moment vécu. Le motif revient plusieurs fois dans l'œuvre — pavés inégaux, serviette empesée, bruit d'une cuillère — et fournit la clé de sa construction : ces expériences isolées finiront par révéler au narrateur ce qu'il doit écrire.`],
    ["L'art comme réponse", `Deux œuvres fictives traversent la Recherche. La sonate de Vinteuil, avec sa petite phrase musicale, accompagne l'amour de Swann pour Odette puis revient tout au long du livre. Elstir, peintre imaginaire inspiré des impressionnistes, apprend au narrateur à voir autrement : à peindre la mer comme si elle était terre et la terre comme si elle était mer, c'est-à-dire à restituer la sensation avant que l'intelligence ne la corrige.

Ces figures ne sont pas décoratives. Elles portent la thèse du livre : seul l'art permet de retrouver le temps perdu, parce qu'il fixe ce que la vie ne fait que traverser. Le dernier volume s'achève d'ailleurs sur la décision d'écrire l'œuvre que le lecteur vient de terminer — construction circulaire dont le lecteur ne mesure la portée qu'au tout dernier moment.`],
    ["Le monde et la fabrique", `L'affaire Dreyfus traverse la Recherche et sert de révélateur social : elle divise les salons, redistribue les fréquentations et fait apparaître les antisémitismes ordinaires derrière les politesses. Proust, dont la mère était juive, fut lui-même dreyfusard actif.

Sa méthode de travail est indissociable de l'œuvre. Il écrivait dans une chambre tapissée de liège, largement de nuit, et ne cessait d'ajouter à ses manuscrits des feuillets collés bout à bout, les paperoles, qui pouvaient atteindre plusieurs mètres dépliés. Le livre a grossi sans arrêt jusqu'à sa mort : la version de 1913 n'annonçait que trois volumes. C'est cette croissance ininterrompue, plus qu'un plan initial, qui explique la forme de l'ensemble.`],
  ],

  "li2-existentialisme": [
    ["Une formule et ses conséquences", `L'existentialisme sartrien tient dans une formule : l'existence précède l'essence. Il n'y a pas de nature humaine donnée d'avance, dont chacun serait une réalisation ; on existe d'abord, et l'on se définit ensuite par ce qu'on fait. Il en découle une liberté totale et, avec elle, une responsabilité écrasante — Sartre parle d'être condamné à être libre.

La Nausée, publié en 1938, met cette philosophie en fiction : un homme seul, dans une ville de province, éprouve devant les objets et son propre corps un dégoût qui est la découverte de la contingence — rien n'a de raison d'être là, pas même lui. Huis clos, pièce de 1944, enferme trois morts dans un salon et conclut que l'enfer, c'est les autres : non que les autres soient odieux, mais que notre existence est jugée par leur regard, dont rien ne nous délivre.`],
    ["Simone de Beauvoir", `Le Deuxième Sexe paraît en 1949 et applique cette philosophie à la condition féminine : on ne naît pas femme, on le devient. Ce que l'on prend pour une nature est le produit d'une éducation, d'institutions et d'attentes sociales. Le livre est violemment attaqué à sa sortie, y compris à gauche, et devient l'un des textes fondateurs du féminisme du siècle.

Les Mandarins, roman à clés sur les milieux intellectuels de l'après-guerre, obtient le Goncourt en 1954. Beauvoir y met en scène, sous des noms d'emprunt, les débats et les compromissions de son propre milieu — engagement politique, rapport au Parti communiste, place des femmes dans un cercle d'hommes qui se croient émancipés.`],
    ["Camus, l'absurde et la révolte", `Camus a toujours refusé l'étiquette d'existentialiste que la presse lui accolait. Sa réflexion part d'ailleurs : Le Mythe de Sisyphe, publié en 1942, pose la question du suicide comme seul problème philosophique sérieux, et répond par la conscience lucide de l'absurde — il faut imaginer Sisyphe heureux.

La Peste, en 1947, décrit une ville d'Oran frappée par une épidémie et fermée sur elle-même : chronique d'une catastrophe, roman sur l'occupation et sur toutes les formes de fléau, il vaut d'abord par ses personnages qui font leur métier sans héroïsme. Camus reçoit le prix Nobel de littérature en 1957, à quarante-quatre ans — l'un des plus jeunes lauréats.`],
    ["Écrire, est-ce agir", `L'Homme révolté, publié en 1951, provoque la rupture avec Sartre. Camus y critique les révolutions qui sacrifient des vies présentes à un avenir promis, et met en cause le totalitarisme soviétique que Sartre refusait alors de condamner frontalement. La polémique, publiée dans Les Temps modernes, met fin à leur amitié.

Le débat portait sur la littérature engagée, que Sartre définissait comme une écriture assumant sa responsabilité politique : l'écrivain est en situation, son silence même est une prise de position. Camus ne contestait pas l'engagement mais la subordination de la morale à l'efficacité historique. Soixante-dix ans plus tard, la question qu'ils s'opposaient n'a rien perdu : au nom de quoi accepte-t-on que des moyens injustes servent une fin juste ?`],
  ],
};
