/**
 * Espagnol — six champs lexicaux qui manquaient.
 *
 * Le module couvrait la cuisine, les vêtements, la nature, la ville, l'argent,
 * la technologie, les émotions, la médecine, la politique, les métiers, le
 * bricolage, l'environnement et l'art. Restaient six domaines dont on parle
 * tous les jours et dont aucun mot n'était enseigné : le sport, les
 * transports, les études supérieures, la famille, les démarches et les médias.
 *
 * Ce sont des séries de phrases, pas de mots isolés. « Coger el autobús » et
 * « tomar el autobús » disent la même chose de part et d'autre de
 * l'Atlantique, et aucune liste de mots ne le signale.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VOCABULARIO_VIDA: LotCartes[] = [
  {
    slug: "es-voc-deporte",
    category: "Vocabulaire",
    title: "Le sport et l'effort",
    statement:
      "Jugar a, hacer, practicar. L'espagnol choisit le verbe selon le sport, et jugar exige la préposition a — jugar al fútbol, jamais « jugar fútbol » en Espagne.",
    tip: "En Amérique latine, jugar fútbol sans préposition est courant. En Espagne, l'omettre s'entend immédiatement.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Juego al baloncesto los martes.",
        francais: "Je joue au basket le mardi.",
        note: "Jugar a + article en Espagne. Les Latino-Américains disent souvent jugar básquetbol.",
      },
      {
        etranger: "Hago natación dos veces por semana.",
        francais: "Je fais de la natation deux fois par semaine.",
        aussi: ["Je nage deux fois par semaine."],
        note: "Hacer + sport sans article. Practicar est plus soutenu et s'emploie de même.",
      },
      {
        etranger: "Tengo que calentar antes de entrenar.",
        francais: "Je dois m'échauffer avant l'entraînement.",
        note: "Calentar, s'échauffer. El calentamiento, l'échauffement — le mot dit aussi le réchauffement climatique.",
      },
      {
        etranger: "Perdimos tres a cero.",
        francais: "Nous avons perdu trois à zéro.",
        note: "L'espagnol dit tres a cero, avec la préposition a. Un score nul est un empate.",
      },
      {
        etranger: "El partido terminó en empate.",
        francais: "Le match s'est terminé par un match nul.",
        aussi: ["Le match s'est soldé par un nul."],
        note: "Un empate, un nul. Empatar, égaliser. El partido, le match — jamais « el match ».",
      },
      {
        etranger: "Me he dado un tirón en el gemelo.",
        francais: "Je me suis froissé un muscle au mollet.",
        aussi: ["Je me suis fait un claquage au mollet."],
        note: "Un tirón, un claquage. El gemelo, le mollet — le mot dit aussi jumeau.",
      },
      {
        etranger: "Se está entrenando para un maratón.",
        francais: "Il s'entraîne pour un marathon.",
        note: "Entrenarse, pronominal en Espagne ; entrenar seul en Amérique latine.",
      },
      {
        etranger: "Batió el récord por dos segundos.",
        francais: "Elle a battu le record de deux secondes.",
        note: "Batir un récord. L'accent de récord se garde au pluriel : récords.",
      },
      {
        etranger: "El árbitro lo expulsó del campo.",
        francais: "L'arbitre l'a expulsé du terrain.",
        note: "El árbitro, l'arbitre. El campo est le terrain en Espagne, la cancha en Amérique.",
      },
      {
        etranger: "Estoy agotado después del partido.",
        francais: "Je suis épuisé après le match.",
        aussi: ["Je suis vidé après le match."],
        note: "Agotado, épuisé. Cansado dit seulement la fatigue ordinaire.",
      },
    ],
  },

  {
    slug: "es-voc-transportes",
    category: "Vocabulaire",
    title: "Se déplacer",
    statement:
      "Coger, tomar, perder, bajarse. Le verbe change selon qu'on prend, qu'on rate ou qu'on descend — et coger, parfaitement banal en Espagne, est à proscrire dans la moitié de l'Amérique latine.",
    tip: "Coger el autobús se dit partout en Espagne. En Argentine, au Mexique et dans plusieurs pays voisins, le verbe a un sens sexuel : on y dit tomar.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Cojo el autobús para ir al trabajo.",
        francais: "Je prends le bus pour aller au travail.",
        aussiEtranger: ["Tomo el autobús para ir al trabajo."],
        note: "Coger en Espagne, tomar en Amérique latine — où coger est franchement vulgaire.",
      },
      {
        etranger: "Perdí el último tren por un minuto.",
        francais: "J'ai raté le dernier train d'une minute.",
        aussi: ["J'ai loupé le dernier train à une minute près."],
        note: "Perder el tren, rater. Por un minuto pour l'écart.",
      },
      {
        etranger: "Bájate en la tercera parada.",
        francais: "Descends au troisième arrêt.",
        note: "Bajarse d'un transport, pronominal. Bajar seul voudrait dire descendre quelque chose.",
      },
      {
        etranger: "Perdimos el tren por dos minutos.",
        francais: "Nous avons raté le train à deux minutes près.",
        note: "Perder el tren, rater le train. Coger el tren en Espagne, tomar en Amérique latine.",
      },
      {
        etranger: "Estoy atrapado en un atasco.",
        francais: "Je suis coincé dans un embouteillage.",
        aussi: ["Je suis pris dans les bouchons."],
        note: "Un atasco en Espagne, un trancón en Colombie, un taco au Chili.",
      },
      {
        etranger: "Me bajo en la próxima parada.",
        francais: "Je descends au prochain arrêt.",
        aussi: ["Je descends à la prochaine."],
        note: "Bajarse de pour descendre d'un véhicule ; subirse a pour y monter.",
      },
      {
        etranger: "La calle está cortada por obras.",
        francais: "La rue est barrée pour travaux.",
        note: "Cortada, barrée. Las obras, les travaux — toujours au pluriel dans ce sens.",
      },
      {
        etranger: "Había un atasco de tres kilómetros.",
        francais: "Il y avait trois kilomètres de bouchon.",
        aussi: ["Il y avait un embouteillage de trois kilomètres."],
        note: "Un atasco, un bouchon. La calle cortada, la rue barrée.",
      },
      {
        etranger: "Me acercó a la estación en coche.",
        francais: "Il m'a déposé à la gare.",
        aussi: ["Il m'a emmené à la gare en voiture."],
        note: "Acercar a alguien, déposer quelqu'un. Le verbe dit littéralement « rapprocher ».",
      },
      {
        etranger: "Saqué el billete por internet.",
        francais: "J'ai pris le billet sur internet.",
        aussi: ["J'ai acheté le billet en ligne."],
        note: "Sacar un billete en Espagne, comprar un boleto ou un pasaje en Amérique latine.",
      },
    ],
  },

  {
    slug: "es-voc-estudios-superiores",
    category: "Travail et études",
    title: "Passer, réussir, obtenir",
    statement:
      "Aprobar, suspender, matricularse, la carrera. Le champ universitaire espagnol a ses mots à lui, et une carrera n'est pas une carrière.",
    tip: "Una carrera est un cursus universitaire, pas un parcours professionnel. Suspender veut dire échouer à un examen, pas suspendre.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Se presentó a la convocatoria de septiembre.",
        francais: "Il s'est présenté à la session de septembre.",
        note: "Una convocatoria, une session d'examen. Presentarse a, se présenter à.",
      },
      {
        etranger: "Tiene dos asignaturas pendientes.",
        francais: "Il lui reste deux matières à rattraper.",
        note: "Una asignatura pendiente, une matière non validée — et, au figuré, une chose qu'on n'a jamais réglée.",
      },
      {
        etranger: "Dejó la carrera en segundo curso.",
        francais: "Il a abandonné ses études en deuxième année.",
        aussi: ["Il a arrêté son cursus en deuxième année."],
        note: "La carrera est le cursus universitaire. El curso, l'année d'études.",
      },
      {
        etranger: "Me matriculé en Historia.",
        francais: "Je me suis inscrit en histoire.",
        note: "Matricularse en, s'inscrire. La matrícula est l'inscription comme les frais.",
      },
      {
        etranger: "La fecha de entrega es el viernes.",
        francais: "La date de rendu est vendredi.",
        aussi: ["Le devoir est à rendre vendredi."],
        note: "La entrega, la remise d'un travail. Un trabajo est un devoir écrit.",
      },
      {
        etranger: "Está haciendo el doctorado en lingüística.",
        francais: "Elle fait un doctorat en linguistique.",
        note: "Hacer el doctorado. Un doctorando est le doctorant, une tesis la thèse.",
      },
      {
        etranger: "Tengo clase a las nueve.",
        francais: "J'ai cours à neuf heures.",
        note: "Tener clase, sans article. Una clase magistral est le cours en amphi.",
      },
      {
        etranger: "Se presenta a la convocatoria de septiembre.",
        francais: "Il se présente à la session de septembre.",
        aussi: ["Il repasse l'examen à la session de septembre."],
        note: "Una convocatoria, une session d'examens. Le mot dit aussi un appel à candidatures.",
      },
      {
        etranger: "La asistencia es obligatoria.",
        francais: "La présence est obligatoire.",
        aussi: ["L'assiduité est obligatoire."],
        note: "La asistencia, la présence. Asistir a, assister à — jamais aider, qui se dit ayudar.",
      },
      {
        etranger: "Solicité una beca para el máster.",
        francais: "J'ai demandé une bourse pour le master.",
        aussi: ["J'ai fait une demande de bourse pour le master."],
        note: "Solicitar, demander formellement. Una beca, une bourse d'études.",
      },
    ],
  },

  {
    slug: "es-voc-familia",
    category: "Vocabulaire",
    title: "La famille et les liens",
    statement:
      "Cuñado, suegra, sobrino, yerno. L'espagnol a un mot simple pour chaque lien d'alliance là où le français compose avec « beau- » et laisse deviner.",
    tip: "Là où le français dit « beau-père » pour deux liens différents, l'espagnol distingue el suegro, père du conjoint, et el padrastro, compagnon de la mère.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Mi cuñada es enfermera.",
        francais: "Ma belle-sœur est infirmière.",
        note: "El cuñado, la cuñada : frère ou sœur du conjoint, ou conjoint du frère ou de la sœur.",
      },
      {
        etranger: "Se lleva bien con su padrastro.",
        francais: "Il s'entend bien avec son beau-père.",
        note: "El padrastro est le compagnon de la mère ; el suegro, le père du conjoint.",
      },
      {
        etranger: "Tiene un hermanastro en Canadá.",
        francais: "Elle a un demi-frère au Canada.",
        note: "Hermanastro sans lien de sang, medio hermano quand un parent est commun.",
      },
      {
        etranger: "Mi bisabuela nació en 1910.",
        francais: "Mon arrière-grand-mère est née en 1910.",
        note: "Bis- pour l'arrière, tatara- pour l'arrière-arrière : la tatarabuela.",
      },
      {
        etranger: "Están esperando su primer hijo.",
        francais: "Ils attendent leur premier enfant.",
        note: "Esperar un hijo. Estar embarazada, être enceinte — jamais embarrassée.",
      },
      {
        etranger: "Somos parientes lejanos.",
        francais: "Nous sommes parents éloignés.",
        aussi: ["Nous avons un lien de parenté lointain."],
        note: "Los parientes sont la parenté ; les parents au sens français sont los padres.",
      },
      {
        etranger: "Ha salido a su madre.",
        francais: "Elle tient de sa mère.",
        aussi: ["Elle ressemble à sa mère."],
        note: "Salir a alguien, tenir de quelqu'un. Parecerse a dit la seule ressemblance.",
      },
      {
        etranger: "Se separaron el año pasado.",
        francais: "Ils se sont séparés l'an dernier.",
        aussi: ["Ils ont rompu l'an dernier."],
        note: "Separarse pour une séparation de fait ; divorciarse suppose la procédure.",
      },
      {
        etranger: "Lo criaron sus abuelos.",
        francais: "Il a été élevé par ses grands-parents.",
        note: "Criar, élever un enfant. Educar ne concerne que l'instruction et les manières.",
      },
      {
        etranger: "Mi primo se casa en mayo.",
        francais: "Mon cousin se marie en mai.",
        note: "Casarse con alguien, avec la préposition con — jamais casarse a.",
      },
    ],
  },

  {
    slug: "es-voc-tramites",
    category: "Vocabulaire",
    title: "Contrats et démarches",
    statement:
      "El contrato de alquiler, la fianza, dar de baja, poner una denuncia. Les mots dont on a besoin en vivant en Espagne, et qu'aucun manuel de conversation ne donne.",
    tip: "Dar de alta, c'est ouvrir un service ; dar de baja, c'est le résilier. Les deux formules reviennent partout : électricité, téléphone, sécurité sociale, salle de sport.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Firmé un contrato de alquiler de un año.",
        francais: "J'ai signé un bail d'un an.",
        note: "El alquiler, la location comme le loyer. El arrendamiento appartient au registre juridique.",
      },
      {
        etranger: "Quiero dar de baja el contrato.",
        francais: "Je veux résilier le contrat.",
        aussi: ["Je souhaite mettre fin au contrat."],
        note: "Dar de baja, résilier. Dar de alta, souscrire. Les deux se disent de tout service.",
      },
      {
        etranger: "Voy a poner una denuncia.",
        francais: "Je vais porter plainte.",
        aussi: ["Je vais déposer une plainte."],
        note: "Poner una denuncia. Denunciar a alguien, porter plainte contre quelqu'un.",
      },
      {
        etranger: "El casero se quedó con la fianza.",
        francais: "Le propriétaire a gardé la caution.",
        aussi: ["Le bailleur a conservé le dépôt de garantie."],
        note: "El casero, le propriétaire qui loue. La fianza, la caution versée.",
      },
      {
        etranger: "Amenazaron con demandar a la empresa.",
        francais: "Ils ont menacé de poursuivre l'entreprise en justice.",
        aussi: ["Ils ont menacé d'attaquer l'entreprise en justice."],
        note: "Demandar, poursuivre au civil. Rien à voir avec demander, qui se dit pedir.",
      },
      {
        etranger: "Di parte al seguro.",
        francais: "J'ai fait une déclaration de sinistre.",
        aussi: ["J'ai déclaré le sinistre à mon assurance."],
        note: "Dar parte, déclarer un sinistre. El parte, le constat — nom masculin, à distinguer de la parte.",
      },
      {
        etranger: "La multa hay que pagarla en treinta días.",
        francais: "L'amende est à payer sous trente jours.",
        note: "Una multa, une amende. Una tasa est une taxe, un recargo une majoration.",
      },
      {
        etranger: "Lee la letra pequeña antes de firmar.",
        francais: "Lis les clauses en petits caractères avant de signer.",
        note: "La letra pequeña, littéralement « la petite lettre ». La formule est figée au singulier.",
      },
      {
        etranger: "Lo declararon inocente.",
        francais: "Il a été déclaré non coupable.",
        aussi: ["Il a été acquitté."],
        note: "Declarar inocente ou culpable. Absolver est le terme technique de l'acquittement.",
      },
      {
        etranger: "Hay que avisar con un mes de antelación.",
        francais: "Il faut prévenir un mois à l'avance.",
        aussi: ["Il faut donner un préavis d'un mois."],
        note: "Con antelación, à l'avance. El preaviso existe mais reste administratif.",
      },
    ],
  },

  {
    slug: "es-voc-medios",
    category: "Vocabulaire",
    title: "Informations et réseaux",
    statement:
      "El titular, la portada, el bulo, silenciar. L'espagnol a forgé ses propres mots pour le web plutôt que d'emprunter à l'anglais, et un bulo n'est pas une fake news traduite.",
    tip: "Los medios est le pluriel de comunicación sous-entendu. Un medio est un organe de presse, pas un moyen.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Las noticias son a las ocho.",
        francais: "Le journal est à vingt heures.",
        aussi: ["Les informations sont à vingt heures."],
        note: "Las noticias au pluriel pour le journal télévisé. Una noticia est une information isolée.",
      },
      {
        etranger: "El caso tuvo mucha repercusión.",
        francais: "L'affaire a été largement reprise.",
        aussi: ["L'affaire a eu un grand retentissement."],
        note: "La repercusión, l'écho médiatique. La cobertura dit la couverture d'un événement.",
      },
      {
        etranger: "Trabaja en un medio independiente.",
        francais: "Elle travaille pour un média indépendant.",
        note: "Un medio de comunicación, souvent abrégé en un medio. Le pluriel los medios est collectif.",
      },
      {
        etranger: "La publicación se hizo viral.",
        francais: "La publication est devenue virale.",
        note: "Hacerse viral. Una publicación, un post — le mot anglais reste courant à l'oral.",
      },
      {
        etranger: "He silenciado el hilo.",
        francais: "J'ai coupé les notifications du fil.",
        aussi: ["J'ai mis le fil en sourdine."],
        note: "Silenciar, mettre en sourdine. Un hilo, un fil de discussion.",
      },
      {
        etranger: "Era un bulo desde el principio.",
        francais: "C'était une intox depuis le début.",
        aussi: ["C'était une fausse information depuis le début."],
        note: "Un bulo, une fausse nouvelle qui circule. Le mot est ancien et bien antérieur au web.",
      },
      {
        etranger: "El periódico lo llevó a portada.",
        francais: "Le journal en a fait sa une.",
        aussi: ["Le journal l'a publié en première page."],
        note: "La portada, la une. El titular, le titre principal.",
      },
      {
        etranger: "Se borró la cuenta.",
        francais: "Il a supprimé son compte.",
        note: "Borrar una cuenta, l'effacer. Desactivar la désactive sans la perdre.",
      },
      {
        etranger: "La entrevista era extraoficial.",
        francais: "L'entretien était officieux.",
        aussi: ["L'entretien n'était pas destiné à être publié."],
        note: "Extraoficial, hors du cadre officiel. L'anglais off the record s'emploie aussi.",
      },
      {
        etranger: "El artículo era solo para suscriptores.",
        francais: "L'article était réservé aux abonnés.",
        aussi: ["L'article était payant."],
        note: "Un suscriptor, un abonné. El muro de pago traduit paywall, mais reste rare à l'oral.",
      },
    ],
  },
];
