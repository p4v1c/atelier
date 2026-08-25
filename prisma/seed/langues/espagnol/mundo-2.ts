/**
 * Espagnol — huit domaines qu'un manuel ne traite jamais.
 *
 * Suite de la quatrième passe. Des champs qu'on rencontre en lisant, en
 * regardant un film ou en vivant à l'étranger, et qu'aucune méthode n'aborde
 * parce qu'ils ne correspondent à aucune « situation » : la ferme, le bateau,
 * la catastrophe, l'église, l'armée, la mode, l'enfance, la fin de vie.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_MUNDO_2: LotCartes[] = [
  {
    slug: "es-voc-agricultura",
    category: "Vocabulaire",
    title: "La terre et l'élevage",
    statement:
      "Cosecha, ganado, barbecho, rendimiento. Le vocabulaire agricole revient dans toute la presse économique et environnementale, et personne ne l'enseigne.",
    tip: "El ganado est un collectif singulier : el ganado pasta, jamais « los ganados ». Une bête se dit una cabeza de ganado.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La cosecha se perdió este año.",
        francais: "La récolte a été perdue cette année.",
        note: "La cosecha, la récolte comme le moment de la faire. Cosechar est le verbe.",
      },
      {
        etranger: "Siegan el trigo en julio.",
        francais: "Ils moissonnent le blé en juillet.",
        note: "Segar, moissonner. La siega, la moisson. Le verbe diphtongue : siego, siegas.",
      },
      {
        etranger: "El campo está en barbecho.",
        francais: "Le champ est en jachère.",
        note: "El barbecho, la jachère. La formule s'emploie au figuré pour un projet en sommeil.",
      },
      {
        etranger: "El ganado está pastando.",
        francais: "Le bétail pâture.",
        note: "El ganado est un collectif singulier. Pastar, paître.",
      },
      {
        etranger: "La tierra es pobre por aquí.",
        francais: "La terre est pauvre par ici.",
        note: "La tierra pour la terre cultivable ; el suelo, le sol qu'on foule.",
      },
      {
        etranger: "Rotan los cultivos cada año.",
        francais: "Ils font tourner les cultures chaque année.",
        aussi: ["Ils pratiquent la rotation des cultures."],
        note: "La rotación de cultivos. Un cultivo est une culture, pas une culture au sens savant.",
      },
      {
        etranger: "Subieron el rebaño a los pastos altos.",
        francais: "Ils ont monté le troupeau aux pâturages d'altitude.",
        note: "Un rebaño pour les moutons, una manada pour les bovins et les fauves.",
      },
      {
        etranger: "La sequía arruinó el rendimiento.",
        francais: "La sécheresse a ruiné le rendement.",
        note: "El rendimiento, le rendement. La sequía, la sécheresse.",
      },
      {
        etranger: "Crían gallinas camperas.",
        francais: "Ils élèvent des poules en plein air.",
        note: "Campero, de plein champ. Criar pour élever des animaux comme des enfants.",
      },
      {
        etranger: "Hay que rehacer el tejado del granero.",
        francais: "La toiture de la grange est à refaire.",
        note: "Un granero, une grange à grain. El pajar est celle à foin.",
      },
    ],
  },

  {
    slug: "es-voc-navegacion",
    category: "Vocabulaire",
    title: "La mer et les bateaux",
    statement:
      "A bordo, a la deriva, encallar, zarpar. L'espagnol maritime a donné à la langue courante des dizaines d'images, et il vaut mieux savoir d'où elles viennent.",
    tip: "A la deriva s'emploie au figuré comme au propre : un proyecto a la deriva, un projet qui part à vau-l'eau.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Todos están a bordo, sanos y salvos.",
        francais: "Tout le monde est à bord, sain et sauf.",
        note: "A bordo, sans article. Sano y salvo s'accorde avec la personne.",
      },
      {
        etranger: "Desembarcamos al amanecer.",
        francais: "Nous avons débarqué à l'aube.",
        note: "Desembarcar, débarquer. Le contraire est embarcar ou zarpar, appareiller.",
      },
      {
        etranger: "El barco quedó a la deriva.",
        francais: "Le bateau est resté à la dérive.",
        note: "A la deriva, au propre comme au figuré. Quedar dit l'état où l'on reste.",
      },
      {
        etranger: "¡Hombre al agua!",
        francais: "Un homme à la mer !",
        note: "La formule est figée. L'espagnol dit al agua là où le français dit à la mer.",
      },
      {
        etranger: "La marea está subiendo.",
        francais: "La marée monte.",
        note: "Subir pour la marée montante, bajar pour la descendante.",
      },
      {
        etranger: "Navegamos contra el viento.",
        francais: "Nous naviguons contre le vent.",
        note: "Navegar se dit même sans voile, et aussi sur internet.",
      },
      {
        etranger: "El buque encalló en la arena.",
        francais: "Le navire s'est échoué dans le sable.",
        note: "Encallar, s'échouer. Un buque est un grand navire, un barco tout bateau.",
      },
      {
        etranger: "La tripulación abandonó el barco.",
        francais: "L'équipage a abandonné le navire.",
        note: "La tripulación, l'équipage. Un tripulante, un membre d'équipage.",
      },
      {
        etranger: "El puerto estaba lleno de pesqueros.",
        francais: "Le port était plein de bateaux de pêche.",
        note: "Un pesquero, un bateau de pêche. Un puerto est le port aménagé.",
      },
      {
        etranger: "Zarpamos al amanecer.",
        francais: "Nous avons appareillé à l'aube.",
        note: "Zarpar, lever l'ancre. Le verbe n'a pas d'équivalent d'un seul mot en français courant.",
      },
    ],
  },

  {
    slug: "es-voc-catastrofes",
    category: "Vocabulaire",
    title: "Catastrophes et secours",
    statement:
      "Incendio forestal, inundación, damnificado, balance. Ce sont les mots de la une, et « damnificado » n'a pas d'équivalent français d'un seul mot.",
    tip: "Un damnificado est une personne touchée par une catastrophe, sinistrée sans être forcément blessée. Le mot revient dans chaque dépêche.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Los incendios forestales arrasaron la comarca.",
        francais: "Les incendies ont ravagé la région.",
        note: "Arrasar, raser et ravager. Una comarca, une région administrative espagnole.",
      },
      {
        etranger: "Las inundaciones aislaron tres pueblos.",
        francais: "Les inondations ont isolé trois villages.",
        note: "Aislar, isoler. Le mot s'emploie pour un village comme pour une personne.",
      },
      {
        etranger: "Tras la catástrofe, los precios se dispararon.",
        francais: "Après la catastrophe, les prix se sont envolés.",
        note: "Dispararse, s'envoler. Le verbe vient de disparar, tirer un coup de feu.",
      },
      {
        etranger: "Las labores de rescate empezaron enseguida.",
        francais: "Les opérations de secours ont commencé aussitôt.",
        note: "Las labores de rescate. El socorro est l'aide immédiate, la ayuda l'aide en général.",
      },
      {
        etranger: "El balance subió a cuarenta muertos.",
        francais: "Le bilan est monté à quarante morts.",
        note: "El balance, le bilan. Le mot dit aussi le bilan comptable.",
      },
      {
        etranger: "Miles de personas se quedaron sin hogar.",
        francais: "Des milliers de personnes se sont retrouvées sans abri.",
        note: "Quedarse sin, se retrouver privé de. El hogar, le foyer.",
      },
      {
        etranger: "La zona fue declarada catastrófica.",
        francais: "La zone a été déclarée sinistrée.",
        note: "Declarar zona catastrófica est la formule administrative espagnole.",
      },
      {
        etranger: "Los bomberos trabajaron toda la noche.",
        francais: "Les pompiers ont travaillé toute la nuit.",
        note: "Un bombero, un pompier. Un superviviente, un rescapé.",
      },
      {
        etranger: "La ayuda llega con cuentagotas.",
        francais: "L'aide arrive au compte-gouttes.",
        note: "Con cuentagotas, au compte-gouttes. L'image est identique en français.",
      },
      {
        etranger: "El puente cedió bajo el peso.",
        francais: "Le pont a cédé sous le poids.",
        note: "Ceder, céder. Le verbe s'emploie aussi pour laisser la priorité : ceda el paso.",
      },
    ],
  },

  {
    slug: "es-voc-religion",
    category: "Vocabulaire",
    title: "Croyances et rites",
    statement:
      "Fe, culto, feligreses, laico. Le champ religieux traverse l'histoire et la littérature hispanophones, et son vocabulaire est très codifié.",
    tip: "Laico désigne ce qui n'est pas religieux ; seglar désigne un croyant qui n'est pas prêtre. Les deux se traduisent par « laïque » en français.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Perdió la fe a los treinta.",
        francais: "Il a perdu la foi à trente ans.",
        note: "La fe, la foi. Le mot désigne aussi une confession : la fe judía.",
      },
      {
        etranger: "Los feligreses se pusieron de pie.",
        francais: "Les fidèles se sont levés.",
        note: "Los feligreses, les paroissiens. Los fieles est plus général.",
      },
      {
        etranger: "Francia es un Estado laico.",
        francais: "La France est un État laïque.",
        note: "Laico, non confessionnel. La laicidad se dit du principe.",
      },
      {
        etranger: "Acuden al mismo templo.",
        francais: "Ils fréquentent le même lieu de culte.",
        note: "Acudir a, se rendre régulièrement. Un templo vaut pour toute confession.",
      },
      {
        etranger: "La misa dura una hora escasa.",
        francais: "La messe dure à peine une heure.",
        note: "Una hora escasa, une heure tout juste. La misa n'est que le rite catholique.",
      },
      {
        etranger: "Lo ordenaron la primavera pasada.",
        francais: "Il a été ordonné au printemps dernier.",
        note: "Ordenar, ordonner prêtre — et aussi ranger. Le contexte tranche.",
      },
      {
        etranger: "El texto se presta a interpretación.",
        francais: "Le texte prête à interprétation.",
        note: "Prestarse a, prêter à. La formule sert bien au-delà du champ religieux.",
      },
      {
        etranger: "Vienen peregrinos de todas partes.",
        francais: "Des pèlerins viennent de partout.",
        note: "Un peregrino, un pèlerin ; una peregrinación, un pèlerinage.",
      },
      {
        etranger: "El monasterio se desamortizó en 1836.",
        francais: "Le monastère a été confisqué en 1836.",
        note: "La desamortización, la confiscation des biens ecclésiastiques : épisode central de l'histoire espagnole.",
      },
      {
        etranger: "Lo da por cierto sin más.",
        francais: "Il le tient pour vrai sans plus de preuve.",
        note: "Dar algo por cierto, tenir pour acquis. Sin más, sans autre forme de procès.",
      },
    ],
  },

  {
    slug: "es-voc-militar",
    category: "Vocabulaire",
    title: "Armée et conflits",
    statement:
      "Desplegar, replegarse, alto el fuego, bajas. Le vocabulaire militaire est celui de l'histoire et des dépêches, et « bajas » ne veut pas dire ce qu'on croit.",
    tip: "Las bajas ne sont pas des « baisses » : ce sont les pertes humaines, morts et blessés confondus. Le mot revient dans chaque bilan.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Desplegaron tropas durante la noche.",
        francais: "Des troupes ont été déployées dans la nuit.",
        note: "Desplegar, déployer. Las tropas est toujours pluriel dans ce sens.",
      },
      {
        etranger: "El ejército se replegó hacia la frontera.",
        francais: "L'armée s'est repliée vers la frontière.",
        note: "Replegarse, se replier. Retirarse est plus neutre, huir suppose la déroute.",
      },
      {
        etranger: "El alto el fuego entró en vigor a mediodía.",
        francais: "Le cessez-le-feu est entré en vigueur à midi.",
        note: "El alto el fuego, en trois mots. Entrar en vigor, entrer en vigueur.",
      },
      {
        etranger: "Hubo bajas en ambos bandos.",
        francais: "Il y a eu des pertes des deux côtés.",
        note: "Las bajas, les pertes humaines. Un bando, un camp dans un conflit.",
      },
      {
        etranger: "El asedio duró ocho meses.",
        francais: "Le siège a duré huit mois.",
        note: "El asedio ou el sitio. Poner sitio a, mettre le siège devant.",
      },
      {
        etranger: "Los hicieron prisioneros.",
        francais: "Ils ont été faits prisonniers.",
        note: "Hacer prisionero a alguien, sans article. La formule est figée.",
      },
      {
        etranger: "Los víveres empezaban a escasear.",
        francais: "Les vivres commençaient à manquer.",
        note: "Escasear, se raréfier. Los víveres est toujours pluriel.",
      },
      {
        etranger: "El regimiento se disolvió en 1946.",
        francais: "Le régiment a été dissous en 1946.",
        note: "Disolverse, se dissoudre. Le participe est disuelto, irrégulier.",
      },
      {
        etranger: "Cumplió dos misiones en el extranjero.",
        francais: "Il a effectué deux missions à l'étranger.",
        note: "Cumplir una misión, l'accomplir. Le verbe dit aussi tenir une promesse.",
      },
      {
        etranger: "El frente apenas se movió.",
        francais: "Le front n'a presque pas bougé.",
        note: "El frente est masculin ; la frente, le front du visage. L'article tranche.",
      },
    ],
  },

  {
    slug: "es-voc-moda",
    category: "Vocabulaire",
    title: "Vêtements et apparence",
    statement:
      "Quedar bien, sentar bien, pegar, ir con. Quatre tournures que le français rend toutes par « aller », et qui ne disent pas la même chose.",
    tip: "Quedar bien parle de la taille et de la coupe, sentar bien de ce qui vous avantage, pegar con de l'accord entre deux pièces.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Ese bolso no pega con el vestido.",
        francais: "Ce sac ne va pas avec la robe.",
        note: "Pegar con, aller avec, s'accorder. Rien à voir avec pegar, frapper ou coller.",
      },
      {
        etranger: "Me lo quiero probar antes de comprarlo.",
        francais: "Je veux l'essayer avant de l'acheter.",
        note: "Probarse, essayer un vêtement. El probador, la cabine d'essayage.",
      },
      {
        etranger: "Los zapatos no pegan con el cinturón.",
        francais: "Les chaussures ne vont pas avec la ceinture.",
        note: "Pegar con, s'accorder. Ir con se dit aussi, plus neutre.",
      },
      {
        etranger: "Se arregló para la ocasión.",
        francais: "Elle s'est apprêtée pour l'occasion.",
        aussi: ["Elle s'est mise sur son trente et un."],
        note: "Arreglarse, se préparer et s'habiller. Le verbe est très courant.",
      },
      {
        etranger: "Hay que meterle el bajo al pantalón.",
        francais: "Il faut raccourcir le pantalon.",
        note: "Meter el bajo, raccourcir ; sacar el bajo, rallonger. El bajo est l'ourlet.",
      },
      {
        etranger: "Me aprieta un poco en la cintura.",
        francais: "Ça me serre un peu à la taille.",
        note: "Apretar, serrer. Holgado dit l'inverse : ample.",
      },
      {
        etranger: "Compra casi todo de segunda mano.",
        francais: "Il achète presque tout d'occasion.",
        note: "De segunda mano, d'occasion. Una prenda, un vêtement pris un par un.",
      },
      {
        etranger: "Se cortó el pelo muy corto.",
        francais: "Elle s'est fait couper les cheveux très court.",
        note: "Cortarse el pelo : le pronominal suffit, l'espagnol n'a pas besoin de « faire faire ».",
      },
      {
        etranger: "Ese estilo ha vuelto a ponerse de moda.",
        francais: "Ce style est revenu à la mode.",
        note: "Ponerse de moda, devenir à la mode. Pasarse de moda dit l'inverse.",
      },
      {
        etranger: "Hoy va bastante desaliñado.",
        francais: "Il a l'air assez négligé aujourd'hui.",
        note: "Desaliñado, mal soigné sans être sale. Arreglado dit l'inverse.",
      },
    ],
  },

  {
    slug: "es-voc-infancia",
    category: "Vocabulaire",
    title: "L'enfance et l'école",
    statement:
      "Criarse, regañar, malcriar, berrinche. Le vocabulaire de l'enfance est celui des conversations familiales, et l'espagnol y emploie beaucoup de pronominaux.",
    tip: "Crecer veut dire grandir en taille ; criarse veut dire grandir quelque part. Me crié en Lyon, jamais « crecí en Lyon ».",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Me crié en el campo.",
        francais: "J'ai grandi à la campagne.",
        note: "Criarse pour l'enfance passée quelque part. Crecer ne dit que la taille.",
      },
      {
        etranger: "Ya empieza a andar.",
        francais: "Il commence à marcher.",
        note: "Andar pour les premiers pas. Un bebé qui marche devient un niño pequeño.",
      },
      {
        etranger: "Lo regañaron en el colegio.",
        francais: "Il s'est fait gronder à l'école.",
        note: "Regañar en Espagne, retar en Argentine, regañar aussi au Mexique.",
      },
      {
        etranger: "Malcrían a sus nietos.",
        francais: "Ils gâtent trop leurs petits-enfants.",
        note: "Malcriar, mal élever en gâtant. Mimar est plus doux : câliner.",
      },
      {
        etranger: "Le están saliendo los dientes.",
        francais: "Il fait ses dents.",
        note: "Salirle los dientes a alguien : la construction dit que ça arrive sans qu'on y soit pour rien.",
      },
      {
        etranger: "Le dio un berrinche tremendo.",
        francais: "Il a piqué une colère terrible.",
        note: "Un berrinche, une colère d'enfant. Una rabieta se dit aussi.",
      },
      {
        etranger: "Ha salido a su padre.",
        francais: "Elle tient de son père.",
        note: "Salir a alguien, tenir de. Ne se dit que pour la parenté.",
      },
      {
        etranger: "Es muy tiquismiquis con la comida.",
        francais: "Il fait le difficile à table.",
        note: "Tiquismiquis, invariable et familier. Melindroso se dit aussi.",
      },
      {
        etranger: "Límpiate los pies antes de entrar.",
        francais: "Essuie-toi les pieds avant d'entrer.",
        note: "Limpiarse los pies. L'article défini remplace le possessif français.",
      },
      {
        etranger: "Se le ha quedado pequeña toda la ropa.",
        francais: "Tous ses vêtements sont devenus trop petits.",
        note: "Quedarse pequeño a alguien : le vêtement est sujet, l'enfant complément.",
      },
    ],
  },

  {
    slug: "es-voc-fin-de-vida",
    category: "Vocabulaire",
    title: "Vieillir, mourir, hériter",
    statement:
      "Fallecer, el difunto, el luto, la herencia. L'espagnol entoure la mort d'euphémismes obligatoires, et employer le mot cru là où il faut le voilé est une faute sociale.",
    tip: "Morir est neutre à l'écrit et brutal en conversation avec un proche. Fallecer est le registre attendu ; perder a alguien est le plus doux.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Su madre falleció el año pasado.",
        francais: "Sa mère est décédée l'an dernier.",
        note: "Fallecer, le registre attendu en conversation. Morir serait brutal ici.",
      },
      {
        etranger: "El difunto no dejó testamento.",
        francais: "Le défunt n'a pas laissé de testament.",
        note: "El difunto, le défunt. Un testamento, un testament.",
      },
      {
        etranger: "Lo perdimos en primavera.",
        francais: "Nous l'avons perdu au printemps.",
        note: "Perder a alguien, le registre le plus doux, et celui de la famille.",
      },
      {
        etranger: "La familia está de luto.",
        francais: "La famille est en deuil.",
        note: "Estar de luto, être en deuil. El luto désigne aussi la tenue noire.",
      },
      {
        etranger: "La herencia se repartió a partes iguales.",
        francais: "L'héritage a été partagé à parts égales.",
        note: "La herencia, l'héritage. A partes iguales, à parts égales.",
      },
      {
        etranger: "Ya está entrado en años.",
        francais: "Il prend de l'âge.",
        aussi: ["Il n'est plus tout jeune."],
        note: "Entrado en años, l'euphémisme le plus courant pour dire le grand âge.",
      },
      {
        etranger: "Está en una residencia desde marzo.",
        francais: "Il est en maison de retraite depuis mars.",
        note: "Una residencia de mayores. Le mot asilo est vieilli et péjoratif.",
      },
      {
        etranger: "El entierro es el jueves.",
        francais: "L'enterrement a lieu jeudi.",
        note: "El entierro, la mise en terre ; el funeral, la cérémonie ; la incineración, l'incinération.",
      },
      {
        etranger: "Heredó la casa de una tía.",
        francais: "Il a hérité la maison d'une tante.",
        note: "Heredar algo de alguien. L'espagnol ne met pas de préposition devant l'objet.",
      },
      {
        etranger: "Todavía lo están asimilando.",
        francais: "Ils sont encore en train de l'accepter.",
        aussi: ["Ils font encore leur deuil."],
        note: "Asimilar algo, accepter au terme d'un travail intérieur.",
      },
    ],
  },
];
