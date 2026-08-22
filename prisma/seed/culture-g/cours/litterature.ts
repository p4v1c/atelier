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

  "li-mouvements-litteraires": [
    ["De l'humanisme au classicisme", `Un mouvement littéraire se reconnaît généralement à un texte programmatique : manifeste, préface, revue. L'humanisme du XVIe siècle replace l'homme et les textes antiques au centre du savoir, à la faveur de l'imprimerie et de la redécouverte des sources grecques. La Pléiade, groupe de poètes mené par Ronsard et Du Bellay, veut illustrer la langue française et lui donner la dignité du latin.

Le classicisme du XVIIe siècle impose au contraire la règle : au théâtre, la règle des trois unités — un jour, un lieu, une action — et un idéal de mesure, de clarté et de vraisemblance. Il ne s'agit pas d'un carcan subi, mais d'une contrainte revendiquée comme condition de l'intensité.`],
    ["Lumières et romantisme", `Le siècle des Lumières place la raison et l'esprit critique au premier plan, et fait de la littérature un instrument : conte philosophique, dictionnaire, lettres fictives servent à mettre en cause l'autorité, la religion et les institutions.

Le romantisme, au début du XIXe siècle, opère le renversement : c'est le moi et ses émotions qui passent au centre, avec le goût de la nature, du passé médiéval et de l'exception. La préface de Cromwell, écrite par Hugo en 1827, en fixe le programme théâtral, et la bataille d'Hernani en 1830 en marque la victoire bruyante.`],
    ["Voir le réel, ou s'en affranchir", `Le réalisme veut peindre la société telle qu'elle est, avec ses milieux, ses métiers et ses conditionnements. Émile Zola pousse le programme plus loin en théorisant le naturalisme : appliquer au roman la méthode expérimentale des sciences, en étudiant l'effet du milieu et de l'hérédité sur des personnages traités comme des cas.

À l'inverse, le Parnasse résume sa doctrine par la formule l'art pour l'art : la poésie ne doit servir ni la morale, ni la politique, ni l'émotion personnelle, mais viser la perfection formelle. Au XXe siècle, André Breton publie en 1924 le Manifeste du surréalisme et donne à l'écriture automatique, au rêve et au hasard une valeur de méthode. Les années 1950 voient enfin le Nouveau Roman rompre avec l'intrigue et le personnage traditionnels, jugés conventions périmées.`],
  ],

  "li-theatre-francais": [
    ["Une institution", `La Comédie-Française est fondée en 1680 par une décision de Louis XIV, qui fusionne les troupes parisiennes existantes en une seule compagnie dotée d'un monopole. Elle est aujourd'hui la plus ancienne troupe de théâtre permanente au monde encore en activité.

Son surnom, la Maison de Molière, tient à ce que la troupe issue de celle de Molière, mort sept ans plus tôt, en constituait le noyau. Son organisation en société d'acteurs — sociétaires et pensionnaires — remonte à cette origine et n'a pas d'équivalent.`],
    ["Les scandales", `Le théâtre français a ses batailles. Le Mariage de Figaro, de Beaumarchais, est écrit en 1778 mais interdit pendant six ans par la censure royale, qui y voit avec raison une charge contre les privilèges : sa création en 1784 est un triomphe et un présage.

En 1830, la première d'Hernani, de Victor Hugo, tourne à l'affrontement organisé entre partisans du romantisme et défenseurs des règles classiques : ce que la salle défendait, ce n'était pas une pièce, c'était une conception de la littérature. La bataille dure plusieurs représentations et devient le symbole du basculement romantique.`],
    ["Le XXe siècle", `Après-guerre, le théâtre se réinvente sur deux fronts. Samuel Beckett écrit En attendant Godot, créée en 1953 : deux vagabonds attendent quelqu'un qui ne viendra pas, l'intrigue est abolie et l'attente devient le sujet. Eugène Ionesco pousse l'absurde vers la mécanique du langage ; sa Cantatrice chauve, créée en 1950, est jouée sans interruption depuis 1957 dans le même petit théâtre parisien.

Sur le plan des idées, Antonin Artaud avait appelé dès 1938, dans Le Théâtre et son double, à un théâtre de la cruauté agissant physiquement sur le spectateur. Bertolt Brecht propose une voie inverse avec la distanciation : empêcher l'identification, rappeler au spectateur qu'il est au théâtre, pour qu'il juge au lieu de s'émouvoir. Côté institutions, Jean Vilar donne au Théâtre national populaire sa forme d'après-guerre et crée en 1947 le Festival d'Avignon, avec l'ambition d'un théâtre exigeant pour un public large.`],
  ],

  "li-roman-francais": [
    ["Naissance et ambition", `La Princesse de Clèves, publiée anonymement en 1678 par Madame de La Fayette, est souvent tenue pour le premier roman d'analyse psychologique français : l'intrigue y compte moins que le mouvement intérieur d'une femme qui renonce.

Au XIXe siècle, le roman devient une entreprise de connaissance sociale. Balzac construit à partir de 1830 La Comédie humaine, ensemble de près de cent romans reliés par le retour des personnages, qui prétend décrire une société entière. Zola reprend le projet avec Les Rougon-Macquart, histoire naturelle et sociale d'une famille sous le Second Empire, en vingt volumes.`],
    ["Le scandale et la forme", `En 1857, Flaubert est poursuivi pour outrage à la morale publique après la parution de Madame Bovary : il est acquitté, la même année que Les Fleurs du mal de Baudelaire sont condamnées. Le procès a fait la fortune du livre, mais c'est le travail sur le style indirect libre qui a fait sa postérité.

Marcel Proust publie à partir de 1913 À la recherche du temps perdu, sept volumes où la mémoire involontaire et la durée deviennent le sujet même du roman. Refusé par plusieurs éditeurs, le premier volume paraît à compte d'auteur.`],
    ["Le XXe siècle et après", `L'Étranger, d'Albert Camus, s'ouvre en 1942 sur la mort d'une mère et l'indifférence apparente du narrateur : la neutralité du ton fait toute la charge du livre. Jean-Paul Sartre, en 1964, refuse le prix Nobel de littérature, estimant qu'un écrivain ne doit pas se laisser transformer en institution — il est à ce jour le seul à l'avoir refusé volontairement.

Marguerite Duras obtient le Goncourt en 1984 pour L'Amant, récit d'une adolescence en Indochine. Annie Ernaux reçoit le prix Nobel de littérature en 2022 pour une œuvre qui fait du récit de soi un instrument d'analyse sociale. Le Goncourt, décerné chez Drouant depuis 1903, reste le prix le plus suivi : sa dotation est symbolique, son effet sur les ventes considérable.`],
  ],

  "li-poesie-francaise": [
    ["Avant le XIXe siècle", `François Villon, poète du XVe siècle dont la biographie est faite de vols, de rixes et de condamnations, écrit la Ballade des pendus alors qu'il attend la potence : la voix qui parle est celle des cadavres s'adressant aux vivants. C'est la première grande voix personnelle de la poésie française.

Le XIXe siècle produit la rupture. Les Fleurs du mal, publiées par Baudelaire en 1857, sont condamnées pour outrage aux bonnes mœurs et six pièces en sont retirées — la même année où Flaubert est acquitté. Baudelaire y invente une poésie de la ville moderne, de l'ennui et de la beauté trouvée dans le laid.`],
    ["Les modernes", `Arthur Rimbaud écrit Le Bateau ivre à seize ans et cesse toute activité littéraire avant vingt et un ans, partant pour l'Afrique où il finira négociant : une œuvre entière tient en quatre ans. Verlaine, son compagnon de dérive, cherche au contraire une musique de la langue, dans des poèmes comme les Ariettes oubliées, qui s'ouvre sur il pleure dans mon cœur.

Mallarmé pousse la recherche formelle à son terme avec Un coup de dés jamais n'abolira le hasard, poème disposé librement sur la double page, en corps et en polices variables : la page devient un espace, non une ligne. Apollinaire, au début du XXe siècle, mêle vers libre et lyrisme dans Le Pont Mirabeau, où la Seine et l'amour passé se confondent.`],
    ["Engagements et matières", `Sous l'Occupation, Paul Éluard écrit un poème d'une vingtaine de strophes qui s'achève sur un seul mot, Liberté : parachuté par la Royal Air Force au-dessus de la France, il devient un texte de résistance.

La même période voit naître la négritude, mouvement porté par des écrivains noirs francophones. Aimé Césaire, poète martiniquais, en est l'un des fondateurs avec le Cahier d'un retour au pays natal ; Léopold Sédar Senghor, poète sénégalais, en est l'autre, et devient président de son pays en 1960. Dans un tout autre registre, Francis Ponge consacre Le Parti pris des choses aux objets les plus ordinaires — un cageot, une huître, un galet — traités avec la précision d'un naturaliste et l'attention d'un poète.`],
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

  "li-contes-jeunesse": [
    ["Fixer les contes", `Charles Perrault publie en 1697 les Histoires ou contes du temps passé, qui rassemblent Cendrillon, Le Petit Chaperon rouge, La Belle au bois dormant. Il ne les invente pas : il fixe par écrit des contes populaires bien plus anciens, en les adaptant au goût de la cour — moralités en vers, détails adoucis, style poli.

Un siècle plus tard, en Allemagne, les frères Grimm mènent une entreprise d'un autre esprit : philologues, ils recueillent Blanche-Neige, Hansel et Gretel et des centaines d'autres récits avec une intention de conservation. Leurs premières éditions sont nettement plus rudes que les suivantes, qu'ils adouciront eux aussi. Hans Christian Andersen, Danois, fait un pas de plus en écrivant des contes originaux — La Petite Sirène, Le Vilain Petit Canard — dont les fins malheureuses tranchent avec la tradition.`],
    ["Venus d'ailleurs", `Les Mille et Une Nuits sont un ensemble de contes arabes, persans et indiens agrégés au fil des siècles, que le français Antoine Galland traduit et fait connaître à l'Europe au début du XVIIIe siècle. Il y ajoute des récits recueillis oralement, dont Aladin et Ali Baba, qui ne figuraient dans aucun manuscrit connu : la version européenne a en partie créé son objet.

Rudyard Kipling, né en Inde, écrit Le Livre de la jungle en 1894 : le recueil mêle récits animaliers et réflexion sur la loi et l'appartenance, dans un contexte colonial dont l'œuvre porte la marque.`],
    ["Les classiques modernes", `Carlo Collodi crée en 1881 Pinocchio, pantin de bois dont le nez s'allonge quand il ment : le conte italien est autant un roman d'apprentissage qu'une fable morale. Lewis Carroll, mathématicien anglais, publie Alice au pays des merveilles, où une fillette suit un lapin pressé dans un monde régi par la logique du non-sens.

Antoine de Saint-Exupéry écrit Le Petit Prince, publié en 1943 à New York alors qu'il est en exil : c'est l'un des livres les plus traduits au monde. Astrid Lindgren crée en Suède le personnage de Fifi Brindacier, fillette libre, forte et sans parents, qui bouscule l'idée même de littérature enfantine sage. Maurice Sendak, enfin, publie en 1963 Max et les Maximonstres, album où un enfant puni voyage chez les monstres : longtemps jugé trop inquiétant, il est devenu un classique de l'album illustré.`],
  ],

  "li-edition-livre": [
    ["Fabriquer le livre", `Johannes Gutenberg met au point vers 1450 l'imprimerie à caractères mobiles en Europe : l'innovation ne tient pas à un seul élément mais à leur combinaison — alliage de fonte, moule à caractères, presse à vis, encre grasse. Les livres imprimés avant 1501 sont appelés incunables, du latin désignant le berceau : on en connaît quelques dizaines de milliers d'éditions.

En France, le dépôt légal date de 1537 : l'obligation de déposer un exemplaire de tout ouvrage publié, à l'origine pour surveiller la production, aujourd'hui pour la conserver. Il est aujourd'hui géré par la Bibliothèque nationale de France et étendu aux sites web. L'ISBN, plus récent, est un numéro international identifiant une édition précise d'un livre — une réédition en poche a le sien.`],
    ["Les droits", `L'auteur ne vend pas son œuvre : il cède des droits d'exploitation, pour une durée, un territoire et des usages définis par contrat. Un à-valoir est une avance sur les droits d'auteur à venir, versée à la signature et récupérée sur les ventes.

En France, les droits patrimoniaux durent soixante-dix ans après la mort de l'auteur, après quoi l'œuvre entre dans le domaine public. Le droit moral, lui, est perpétuel, incessible et imprescriptible : il protège la paternité de l'œuvre et son intégrité, et se transmet aux héritiers. C'est ce qui permet de s'opposer à une adaptation dénaturante longtemps après la mort d'un auteur. Certains auteurs choisissent à l'inverse le domaine public volontaire, en renonçant par avance à leurs droits patrimoniaux.`],
    ["Le marché", `La loi Lang de 1981 instaure en France le prix unique du livre : l'éditeur fixe le prix, et tout détaillant doit le respecter à cinq pour cent de remise près. L'objectif est de protéger les librairies indépendantes d'une guerre des prix que seuls les grands distributeurs pourraient soutenir, et de maintenir la diversité éditoriale. Le dispositif a été étendu au livre numérique en 2011.

Le format de poche est une réédition à bas prix d'un titre déjà paru en grand format, généralement un à deux ans plus tard, sur un papier et une fabrication moins coûteux. Ce délai n'est pas un hasard : il permet d'exploiter successivement deux publics et deux niveaux de prix pour le même texte.`],
  ],

  "li-critique-lecture": [
    ["Qui raconte", `Le narrateur n'est pas l'auteur : c'est une voix construite à l'intérieur du récit, dont l'auteur peut se distinguer entièrement. Confondre les deux est l'erreur d'analyse la plus fréquente.

Cette voix peut adopter différentes positions. Un narrateur interne raconte depuis le point de vue d'un personnage, avec les limites de sa connaissance. Un narrateur omniscient connaît les pensées de tous les personnages et peut anticiper les événements. La focalisation externe fait l'inverse : le récit ne rapporte que ce qui est visible, comme une caméra, sans accès à aucune intériorité — technique du roman behavioriste et du polar américain.`],
    ["Sur quel ton", `Le registre qualifie l'effet visé par un texte. Le registre pathétique cherche à émouvoir et à susciter la compassion, en insistant sur la souffrance. Le registre épique amplifie : il grandit l'action et les personnages, multiplie les hyperboles et les pluriels, et transforme un combat individuel en affrontement de forces.

L'ironie relève d'un autre mécanisme : faire entendre le contraire de ce que l'on dit, en comptant sur la complicité du lecteur pour rétablir le sens. Elle échoue dès que cette complicité manque — d'où les malentendus fréquents lorsqu'un texte ironique est cité hors contexte.`],
    ["Comment c'est construit", `Le récit organise librement le temps. Une analepse est un retour en arrière ; une prolepse, une anticipation ; une ellipse narrative passe une période sous silence, laissant au lecteur le soin de combler. Ces écarts entre le temps de l'histoire et celui du récit sont l'un des principaux moyens d'expression du romancier.

Deux autres notions servent à décrire les emboîtements. La mise en abyme est le procédé par lequel une œuvre contient une reproduction d'elle-même — une pièce jouée dans la pièce, un tableau représentant le tableau. L'intertextualité désigne la présence d'un texte dans un autre, par citation, allusion, pastiche ou parodie : aucun texte n'est écrit dans le vide, et repérer ses dettes fait partie de la lecture.`],
  ],
};
