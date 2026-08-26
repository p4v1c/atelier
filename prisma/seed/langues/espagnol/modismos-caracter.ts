/**
 * Espagnol — les idiotismes, et les mots du jugement.
 *
 * Fin de la quatrième passe. Les idiotismes sont ce qui reste incompréhensible
 * quand on connaît tous les mots d'une phrase. Ils s'apprennent par familles
 * d'images — le corps, les animaux, l'argent et le temps — parce que l'image
 * aide à retenir ce que la logique ne prédit pas.
 *
 * Les trois dernières séries portent sur le jugement : décrire un caractère,
 * porter une appréciation, nommer une notion abstraite. C'est ce qu'on demande
 * à un C1 et que le vocabulaire concret ne permet jamais.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_MODISMOS_CARACTER: LotCartes[] = [
  {
    slug: "es-verbos-habla",
    category: "Verbes",
    title: "Toutes les façons de dire",
    statement:
      "Mascullar, susurrar, espetar, balbucear. Un roman espagnol ne dit presque jamais « dijo » : le verbe porte le ton, et le ton porte le personnage.",
    tip: "Ces verbes remplacent decir tout en le qualifiant. Les traduire par « dire » plus un adverbe fait perdre exactement ce qu'ils apportent.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Masculló algo entre dientes.",
        francais: "Il a marmonné quelque chose entre ses dents.",
        note: "Mascullar, parler bas et de mauvaise humeur. Entre dientes, à mi-voix.",
      },
      {
        etranger: "Susurró una respuesta.",
        francais: "Elle a murmuré une réponse.",
        note: "Susurrar est doux, mascullar maussade. La différence est de ton, pas de volume.",
      },
      {
        etranger: "No me contestes de mala manera.",
        francais: "Ne me réponds pas si sèchement.",
        note: "De mala manera, sèchement. Espetar dit la réplique cinglante en un mot.",
      },
      {
        etranger: "Soltó toda la historia de golpe.",
        francais: "Il a lâché toute l'histoire d'un coup.",
        note: "Soltar, lâcher une information qu'on aurait dû taire.",
      },
      {
        etranger: "Balbuceó una disculpa.",
        francais: "Elle a bredouillé une excuse.",
        note: "Balbucear, bredouiller d'émotion. Tartamudear désigne le bégaiement permanent.",
      },
      {
        etranger: "Estuvo divagando una hora.",
        francais: "Il a divagué pendant une heure.",
        note: "Divagar, parler sans suite. Estar + gérondif au passé simple borne la durée.",
      },
      {
        etranger: "Charlaban animadamente.",
        francais: "Ils bavardaient avec entrain.",
        note: "Charlar, bavarder. Animadamente, avec animation.",
      },
      {
        etranger: "Replicó sin pensarlo.",
        francais: "Elle a répliqué sans réfléchir.",
        note: "Replicar, riposter. Le verbe suppose qu'on répond à une attaque.",
      },
      {
        etranger: "Se quedó a media frase.",
        francais: "Il s'est interrompu au milieu de sa phrase.",
        note: "Quedarse a media frase : la phrase reste en suspens, sans être coupée.",
      },
      {
        etranger: "Me lo dijo al oído.",
        francais: "Elle me l'a dit à l'oreille.",
        note: "Al oído, à l'oreille. Susurrar al oído se dit aussi.",
      },
      {
        etranger: "Le espetó que se callara de una vez.",
        francais: "Il lui a lancé sèchement de se taire.",
        note: "Espetar, la réplique cinglante en un mot — souvent suivi de que + subjonctif.",
      },
    ],
  },

  {
    slug: "es-adjetivos-caracter",
    category: "Vocabulaire",
    title: "Décrire quelqu'un",
    statement:
      "Campechano, con los pies en la tierra, detallista, pesado. L'espagnol décrit le caractère par des adjectifs très imagés, et le français doit souvent faire une phrase.",
    tip: "Pesado ne veut pas dire lourd au sens physique quand il qualifie une personne : c'est celui dont on se lasse. C'est l'un des reproches les plus courants.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Es muy campechana.",
        francais: "Elle est très simple et accessible.",
        aussi: ["Elle est très abordable."],
        note: "Campechano, sans façon malgré son rang. Toujours un compliment.",
      },
      {
        etranger: "Es un cabezota.",
        francais: "Il est très têtu.",
        note: "Cabezota, littéralement grosse tête : l'entêtement personnifié.",
      },
      {
        etranger: "Es un chico muy entrañable.",
        francais: "C'est un garçon très attachant.",
        note: "Entrañable, qui inspire une affection profonde — plus chaleureux que simplement sympathique.",
      },
      {
        etranger: "Puede ser un poco pesado.",
        francais: "Il peut être un peu lourd.",
        aussi: ["Il peut être un peu collant."],
        note: "Pesado d'une personne : celui dont on se lasse. Le sens physique ne s'applique pas.",
      },
      {
        etranger: "Es un poco seco con la gente.",
        francais: "Il est un peu sec avec les gens.",
        note: "Seco d'une personne, distant et peu expansif — pas le sens physique de sec.",
      },
      {
        etranger: "Está muy apegado a sus costumbres.",
        francais: "Il tient beaucoup à ses habitudes.",
        note: "Apegado a, attaché à. Le mot dit l'attachement qui empêche de changer.",
      },
      {
        etranger: "Va siempre de frente.",
        francais: "Elle est toujours directe.",
        aussi: ["Elle joue franc jeu."],
        note: "Ir de frente, agir sans détour. L'image est celle de l'affrontement assumé.",
      },
      {
        etranger: "Es bastante discreto.",
        francais: "Il est plutôt discret.",
        note: "Discreto loue la réserve. Reservado dit plutôt la distance.",
      },
      {
        etranger: "Son una familia muy unida.",
        francais: "C'est une famille très soudée.",
        note: "Unido, uni : une famille, un couple, une équipe. L'inverse est desunido.",
      },
      {
        etranger: "Es muy echada para adelante.",
        francais: "Elle est très entreprenante.",
        note: "Echado/a para adelante, qui va de l'avant sans hésiter.",
      },
    ],
  },

  {
    slug: "es-adjetivos-juicio",
    category: "Expressions",
    title: "Porter une appréciation",
    statement:
      "Sólido, desigual, endeble, irrefutable. L'espagnol juge une idée ou un texte avec des adjectifs empruntés à la construction et à la mécanique.",
    tip: "Endeble ne veut pas dire faible mais fragile : un raisonnement endeble s'écroule au premier examen. Le mot est très employé dans la critique.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "El razonamiento es sólido.",
        francais: "Le raisonnement est solide.",
        note: "Sólido, l'adjectif d'éloge le plus courant pour un argument.",
      },
      {
        etranger: "Las pruebas son desiguales.",
        francais: "Les preuves sont inégales.",
        aussi: ["Les éléments sont hétérogènes."],
        note: "Desigual, qui varie en qualité selon les endroits.",
      },
      {
        etranger: "Es una idea a medio cocer.",
        francais: "C'est une idée mal ficelée.",
        note: "A medio cocer, à moitié cuite. La série est productive : a medio hacer, a medio camino, a medias.",
      },
      {
        etranger: "El argumento es irrefutable.",
        francais: "L'argument est irréfutable.",
        note: "Irrefutable, qu'on ne peut réfuter. Le mot est plus fort que sólido.",
      },
      {
        etranger: "El plan es descabellado.",
        francais: "Le projet est insensé.",
        aussi: ["Le plan est tiré par les cheveux."],
        note: "Descabellado, littéralement décoiffé. L'image rejoint celle du français.",
      },
      {
        etranger: "Es una generalización abusiva.",
        francais: "C'est une généralisation abusive.",
        note: "Abusivo, qui va au-delà de ce que les faits permettent.",
      },
      {
        etranger: "El informe es escaso en detalles.",
        francais: "Le rapport manque de précisions.",
        note: "Escaso en, pauvre en. Formule très employée dans les critiques.",
      },
      {
        etranger: "Es un punto discutible.",
        francais: "C'est un point discutable.",
        note: "Discutible, qui prête à discussion. Le mot n'est pas un rejet.",
      },
      {
        etranger: "Los resultados no son concluyentes.",
        francais: "Les résultats ne permettent pas de conclure.",
        note: "No concluyente, qui ne tranche pas. Le mot ne dit pas que le résultat est négatif.",
      },
      {
        etranger: "Eso no viene al caso.",
        francais: "C'est hors sujet.",
        aussi: ["Ça n'a rien à voir."],
        note: "Venir al caso, être pertinent. La négation est l'emploi habituel.",
      },
    ],
  },

  {
    slug: "es-nombres-abstractos-2",
    category: "Vocabulaire",
    title: "Nommer une notion",
    statement:
      "Alcance, medida, postura, planteamiento. Les noms abstraits de l'écrit espagnol sont peu nombreux et reviennent partout, et le français en traduit plusieurs par le même mot.",
    tip: "El alcance est l'étendue de ce qu'on couvre, la medida le degré auquel une chose est vraie. Le premier délimite, le second mesure.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Eso excede el alcance de este estudio.",
        francais: "Cela dépasse le cadre de cette étude.",
        note: "El alcance, le périmètre couvert. Exceder el alcance de est une formule figée.",
      },
      {
        etranger: "¿En qué medida es esto cierto?",
        francais: "Dans quelle mesure est-ce vrai ?",
        note: "En qué medida, dans quelle mesure. La question type d'une dissertation.",
      },
      {
        etranger: "¿Cuál es su postura al respecto?",
        francais: "Quelle est leur position là-dessus ?",
        note: "Una postura, une position prise publiquement. Al respecto, à ce sujet.",
      },
      {
        etranger: "El planteamiento no se explica.",
        francais: "La façon de poser le problème n'est pas expliquée.",
        note: "Un planteamiento, la manière dont on pose une question. Sans équivalent français simple.",
      },
      {
        etranger: "La literatura sobre el tema no deja de crecer.",
        francais: "Les travaux sur le sujet se multiplient.",
        note: "La literatura, au singulier, désigne l'ensemble des travaux publiés sur un sujet — pas la littérature au sens artistique.",
      },
      {
        etranger: "El meollo del asunto es simple.",
        francais: "Le cœur du sujet est simple.",
        aussi: ["En substance, c'est simple."],
        note: "El meollo, la moelle et donc l'essentiel. Ir al meollo, aller à l'essentiel.",
      },
      {
        etranger: "Tiene consecuencias graves.",
        francais: "Cela a de graves conséquences.",
        note: "Las consecuencias, directes ; las repercusiones, indirectes et différées.",
      },
      {
        etranger: "Hay una contrapartida.",
        francais: "Il y a une contrepartie.",
        aussi: ["Cela suppose un arbitrage."],
        note: "Una contrapartida, ce qu'on perd d'un côté pour gagner de l'autre.",
      },
      {
        etranger: "La premisa es cuestionable.",
        francais: "Le postulat est discutable.",
        note: "Una premisa, une prémisse. Partir de una premisa falsa est la collocation usuelle.",
      },
      {
        etranger: "Es cuestión de énfasis.",
        francais: "C'est une question d'accent.",
        aussi: ["C'est affaire de priorité.", "Tout est dans ce qu'on met en avant."],
        note: "El énfasis, l'insistance. Poner énfasis en, mettre l'accent sur.",
      },
    ],
  },

  {
    slug: "es-modismos-cuerpo",
    category: "Expressions",
    title: "Idiotismes du corps",
    statement:
      "Echar un ojo, costar un riñón, hacer la vista gorda. Le corps fournit les images les plus fréquentes de l'espagnol, et presque aucune ne se traduit mot à mot.",
    tip: "Quand une phrase mentionne une partie du corps sans raison apparente, c'est presque toujours un idiotisme. Le sens littéral n'a alors aucune valeur.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Echa un ojo a la olla.",
        francais: "Surveille la casserole.",
        note: "Echar un ojo, surveiller. Echar un vistazo dit plutôt jeter un coup d'œil.",
      },
      {
        etranger: "Se echó atrás en el último momento.",
        francais: "Il s'est dégonflé au dernier moment.",
        note: "Echarse atrás, renoncer, reculer devant un engagement pris.",
      },
      {
        etranger: "Le tiene manía desde entonces.",
        francais: "Il lui en veut depuis ce jour.",
        note: "Tener manía a alguien, avoir une dent contre. Le mot manía ne dit pas la folie ici.",
      },
      {
        etranger: "Le costó un riñón.",
        francais: "Ça lui a coûté les yeux de la tête.",
        note: "Costar un riñón, familier ; costar un ojo de la cara existe aussi et calque le français.",
      },
      {
        etranger: "Me está tomando el pelo.",
        francais: "Il me fait marcher.",
        note: "Tomar el pelo a alguien, se moquer. L'image est celle du cheveu qu'on tire.",
      },
      {
        etranger: "Te echo una mano.",
        francais: "Je te donne un coup de main.",
        note: "Echar una mano, la même image qu'en français avec un autre verbe.",
      },
      {
        etranger: "Tiene los pies en la tierra.",
        francais: "Il a les pieds sur terre.",
        note: "L'image est identique dans les deux langues, ce qui est rare.",
      },
      {
        etranger: "Hizo la vista gorda.",
        francais: "Elle a fermé les yeux là-dessus.",
        note: "Hacer la vista gorda, ignorer volontairement. L'image est celle du regard épaissi.",
      },
      {
        etranger: "Tiene mucho morro.",
        francais: "Il a un sacré culot.",
        aussi: ["Il ne manque pas de toupet."],
        note: "Tener morro, littéralement avoir du museau. Familier et très espagnol.",
      },
      {
        etranger: "No dio su brazo a torcer.",
        francais: "Il n'a pas cédé d'un pouce.",
        note: "Dar el brazo a torcer, céder. La négation est l'emploi le plus fréquent.",
      },
    ],
  },

  {
    slug: "es-modismos-animales",
    category: "Expressions",
    title: "Idiotismes animaliers",
    statement:
      "Irse de la lengua, ser un gallina, meter la pata. Les animaux fournissent la deuxième famille d'images de l'espagnol, et le français choisit d'autres bêtes.",
    tip: "Traduire l'animal donne presque toujours faux. Il faut retenir l'expression entière, et se rappeler que la même idée change de bête d'une langue à l'autre.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Se fue de la lengua.",
        francais: "Il a vendu la mèche.",
        note: "Irse de la lengua, révéler un secret par mégarde.",
      },
      {
        etranger: "Es un gallina.",
        francais: "C'est un dégonflé.",
        aussi: ["C'est une poule mouillée."],
        note: "Un gallina : le nom reste féminin, seul l'article s'accorde à la personne désignée.",
      },
      {
        etranger: "Tiene vista de lince.",
        francais: "Il a des yeux de lynx.",
        note: "Vista de lince, une vue perçante — l'un des rares idiotismes animaliers qui se traduit presque mot pour mot.",
      },
      {
        etranger: "No vendas la piel del oso.",
        francais: "Ne vends pas la peau de l'ours.",
        note: "L'une des rares images identiques dans les deux langues.",
      },
      {
        etranger: "Metí la pata hasta el fondo.",
        francais: "J'ai mis les pieds dans le plat.",
        note: "Meter la pata, faire une gaffe. La pata est la patte d'un animal.",
      },
      {
        etranger: "Es la oveja negra de la familia.",
        francais: "C'est le mouton noir de la famille.",
        note: "Une des rares images communes. L'espagnol met la brebis au féminin.",
      },
      {
        etranger: "Aquí hay gato encerrado.",
        francais: "Il y a anguille sous roche.",
        note: "Gato encerrado, littéralement un chat enfermé : quelque chose qu'on cache.",
      },
      {
        etranger: "Se adaptó como pez en el agua.",
        francais: "Elle s'y est adaptée comme un poisson dans l'eau.",
        note: "Como pez en el agua, l'aisance immédiate. Sans article devant pez.",
      },
      {
        etranger: "Está como una cabra.",
        francais: "Il est complètement fou.",
        note: "Estar como una cabra, être fou — familier et très courant.",
      },
      {
        etranger: "Mataron dos pájaros de un tiro.",
        francais: "Ils ont fait d'une pierre deux coups.",
        note: "Matar dos pájaros de un tiro, littéralement tuer deux oiseaux d'un coup : l'animal change d'une langue à l'autre.",
      },
    ],
  },

  {
    slug: "es-modismos-dinero-tiempo",
    category: "Expressions",
    title: "Idiotismes de l'argent et du temps",
    statement:
      "Salir a mano, apretarse el cinturón, en el último momento, ganar tiempo. L'argent et le temps se disent avec les mêmes verbes, et l'un sert souvent d'image à l'autre.",
    tip: "Gastar, ahorrar, perder, quedarse sin : quatre verbes qui s'emploient indifféremment pour l'argent et le temps, comme en anglais.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Salimos justo a mano.",
        francais: "Nous rentrons tout juste dans nos frais.",
        aussiEtranger: ["Salimos justo en tablas."],
        note: "Salir a mano, être à l'équilibre — Argentine et Uruguay. En Espagne : salir en tablas, cubrir gastos.",
      },
      {
        etranger: "Todos se están apretando el cinturón.",
        francais: "Tout le monde se serre la ceinture.",
        note: "L'image est identique dans les deux langues.",
      },
      {
        etranger: "Llegó en el último momento.",
        francais: "Il est arrivé au dernier moment.",
        note: "En el último momento. En el último suspiro se dit aussi, plus dramatique.",
      },
      {
        etranger: "Están intentando ganar tiempo.",
        francais: "Ils cherchent à gagner du temps.",
        note: "Ganar tiempo, littéralement gagner du temps, exactement comme en français.",
      },
      {
        etranger: "Nos estamos quedando sin tiempo.",
        francais: "Le temps nous manque.",
        note: "Quedarse sin s'emploie pour le temps comme pour l'argent ou l'essence.",
      },
      {
        etranger: "Fue dinero bien invertido.",
        francais: "C'était de l'argent bien employé.",
        note: "Bien invertido, bien investi. Tiempo bien invertido se dit de même.",
      },
      {
        etranger: "Me costó un dineral.",
        francais: "Ça m'a coûté une fortune.",
        note: "Un dineral, une somme énorme. Le suffixe -al fabrique l'augmentatif.",
      },
      {
        etranger: "Vamos a dejarlo por hoy.",
        francais: "On va s'arrêter là pour aujourd'hui.",
        note: "Dejarlo por hoy, en rester là. La formule clôt une journée de travail.",
      },
      {
        etranger: "Vive por encima de sus posibilidades.",
        francais: "Il vit au-dessus de ses moyens.",
        note: "Por encima de sus posibilidades. L'espagnol dit possibilités là où le français dit moyens.",
      },
      {
        etranger: "Ese tren ya pasó.",
        francais: "C'est trop tard, l'occasion est passée.",
        aussi: ["Le train est passé."],
        note: "Ese tren ya pasó : l'occasion manquée, définitivement.",
      },
    ],
  },

  {
    slug: "es-voc-humor",
    category: "Expressions",
    title: "Le rire et la moquerie",
    statement:
      "Guasa, vacilar, cachondeo, socarrón. L'humour espagnol a un vocabulaire propre, et confondre l'amical et le méchant coûte cher en société.",
    tip: "La guasa est une taquinerie entre égaux qui suppose l'affection. Burlarse blesse. Le même geste, deux mots, deux relations.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Lo dice de guasa.",
        francais: "Il dit ça pour rire.",
        note: "De guasa, sur le ton de la plaisanterie. Le mot suppose la complicité.",
      },
      {
        etranger: "Le estaban vacilando.",
        francais: "Ils le taquinaient.",
        note: "Vacilar a alguien, taquiner, en Espagne. Le verbe veut aussi dire hésiter.",
      },
      {
        etranger: "¿Va en serio o es coña?",
        francais: "C'est sérieux ou c'est une blague ?",
        note: "Ir en serio, être sérieux. Coña est familier et très espagnol.",
      },
      {
        etranger: "Lo soltó con toda la seriedad.",
        francais: "Il l'a dit avec le plus grand sérieux.",
        note: "Le pince-sans-rire espagnol se dit socarrón : moqueur sous des dehors sérieux.",
      },
      {
        etranger: "El chiste no hizo gracia.",
        francais: "La blague n'a pas fait rire.",
        note: "Hacer gracia, faire rire. La négation est l'emploi le plus fréquent.",
      },
      {
        etranger: "Tiene un humor muy socarrón.",
        francais: "Il a un humour très pince-sans-rire.",
        note: "Socarrón, moqueur sans en avoir l'air. C'est le compliment de l'humour espagnol.",
      },
      {
        etranger: "No sabe encajar una broma.",
        francais: "Il ne supporte pas qu'on le taquine.",
        note: "Encajar una broma, encaisser la plaisanterie. L'image vient de la boxe.",
      },
      {
        etranger: "Se reían del acento.",
        francais: "Ils se moquaient de l'accent.",
        note: "Reírse de, se moquer de. Burlarse de est plus dur et franchement hostile.",
      },
      {
        etranger: "Aquí es el cachondeo de siempre.",
        francais: "Ici, c'est la rigolade habituelle.",
        note: "El cachondeo, l'ambiance de plaisanterie continue. Familier et très espagnol.",
      },
      {
        etranger: "Era broma, nada más.",
        francais: "C'était une blague, rien de plus.",
        note: "Era broma, la formule qui désamorce. Nada más, rien de plus.",
      },
    ],
  },
];
