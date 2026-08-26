/**
 * Anglais — les verbes à particule en série, et les collocations.
 *
 * Troisième passe. Les deux premières ont ajouté des DOMAINES ; celle-ci
 * ajoute de la PROFONDEUR, et c'est ce qui manque le plus pour passer du B2 au
 * C1. Un apprenant avancé connaît des milliers de mots et continue de dire
 * « make a decision » là où il faut, mais « do an effort » là où il ne faut pas.
 *
 * Deux familles y répondent. Les verbes à particule, qui sont le cœur de
 * l'anglais courant et qu'aucun dictionnaire bilingue ne rend correctement :
 * on les apprend par famille de verbe pour réviser, par particule pour deviner —
 * jamais un par un. Et les collocations,
 * ces couples de mots que l'usage a soudés sans raison — heavy rain mais strong
 * wind, et jamais l'inverse.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_PHRASAL_COLLOCATIONS: LotCartes[] = [
  {
    slug: "en-phrasal-get",
    category: "Verbes",
    title: "Get et ses particules",
    statement:
      "Get by, get over, get through, get at. Un seul verbe, quinze sens, et c'est le plus fréquent de l'anglais parlé. La particule fait tout le travail.",
    tip: "Get seul veut dire obtenir ou devenir ; avec une particule, c'est elle qui porte le sens. Cette série regroupe par verbe pour réviser — pour deviner un sens inconnu, c'est la particule qu'il faut regarder.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The meeting got called off.",
        francais: "La réunion a été annulée.",
        note: "Get + participe remplace be au passif, à l'oral surtout : got called off, got cancelled.",
      },
      {
        etranger: "She never got over it.",
        francais: "Elle ne s'en est jamais remise.",
        note: "Get over something, se remettre d'une épreuve ou d'une maladie.",
      },
      {
        etranger: "What are you getting at?",
        francais: "Où veux-tu en venir ?",
        note: "Get at, sous-entendre. Le verbe seul ne dit rien de tel.",
      },
      {
        etranger: "I couldn't get through to her.",
        francais: "Je n'ai pas réussi à la joindre.",
        aussi: ["Je n'ai pas pu la contacter."],
        note: "Get through to, joindre au téléphone — ou se faire comprendre de quelqu'un.",
      },
      {
        etranger: "I'm getting used to it.",
        francais: "Je commence à m'y habituer.",
        note: "Get used to + gérondif : le passage à l'habitude. Be used to dirait l'habitude acquise.",
      },
      {
        etranger: "They get on well together.",
        francais: "Ils s'entendent bien.",
        note: "Get on with someone en anglais britannique, get along with en américain.",
      },
      {
        etranger: "Let's get down to business.",
        francais: "Passons aux choses sérieuses.",
        note: "Get down to something, s'y mettre pour de bon.",
      },
      {
        etranger: "I need to get rid of this.",
        francais: "Je dois me débarrasser de ça.",
        note: "Get rid of, se débarrasser. Rid seul ne s'emploie pratiquement plus.",
      },
      {
        etranger: "The message didn't get across.",
        francais: "Le message n'est pas passé.",
        note: "Get across, être compris. Le sujet est le message, pas la personne.",
      },
      {
        etranger: "She's getting on a bit.",
        francais: "Elle prend de l'âge.",
        aussi: ["Elle se fait vieille."],
        note: "Get on sans complément, vieillir. Le même verbe qu'à la carte des relations, autre sens.",
      },
    ],
  },

  {
    slug: "en-phrasal-take-put",
    category: "Verbes",
    title: "Take et put",
    statement:
      "Take on, take off, take up, put off, put up with. Deux verbes très ordinaires qui, avec une particule, disent des choses qu'aucun mot simple ne dit.",
    tip: "La particule off dit souvent la séparation ou le départ ; up, l'achèvement ou la prise en charge. Ce n'est pas systématique, mais ça oriente.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She took on too much work.",
        francais: "Elle a pris trop de travail sur elle.",
        aussi: ["Elle s'est chargée de trop de travail."],
        note: "Take on, se charger de. Le même verbe dit aussi embaucher : take on staff.",
      },
      {
        etranger: "The business really took off.",
        francais: "L'affaire a vraiment décollé.",
        note: "Take off pour un avion comme pour une activité qui démarre fort.",
      },
      {
        etranger: "He took up running last year.",
        francais: "Il s'est mis à la course l'an dernier.",
        note: "Take up an activity, commencer une pratique régulière.",
      },
      {
        etranger: "They put off the meeting again.",
        francais: "Ils ont encore reporté la réunion.",
        aussi: ["Ils ont de nouveau repoussé la réunion."],
        note: "Put off, reporter. Le même verbe dit aussi dégoûter : the smell put me off.",
      },
      {
        etranger: "I can't put up with this noise.",
        francais: "Je ne supporte pas ce bruit.",
        note: "Put up with, supporter. Trois mots, un seul sens : la particule ne se sépare pas.",
      },
      {
        etranger: "Take it up with your manager.",
        francais: "Voyez cela avec votre responsable.",
        aussi: ["Soulevez la question auprès de votre chef."],
        note: "Take something up with someone, porter une question devant quelqu'un.",
      },
      {
        etranger: "They put forward a new proposal.",
        francais: "Ils ont avancé une nouvelle proposition.",
        note: "Put forward, soumettre une idée. Formel, très employé à l'écrit.",
      },
      {
        etranger: "The story was taken up by the press.",
        francais: "L'affaire a été reprise par la presse.",
        note: "Take up a story, s'en emparer. Le passif est la forme habituelle ici.",
      },
      {
        etranger: "Put the fire out before you leave.",
        francais: "Éteins le feu avant de partir.",
        note: "Put out, éteindre. La particule se sépare : put it out, jamais « put out it ».",
      },
      {
        etranger: "He was taken aback by the question.",
        francais: "La question l'a décontenancé.",
        aussi: ["Il a été pris de court par la question."],
        note: "Be taken aback, être décontenancé. Ne s'emploie qu'au passif.",
      },
    ],
  },

  {
    slug: "en-phrasal-come-go",
    category: "Verbes",
    title: "Come et go",
    statement:
      "Come up, come across, go through, go off. Deux verbes de mouvement qui, avec une particule, ne parlent plus du tout de déplacement.",
    tip: "Come across a deux sens qu'un seul contexte sépare : tomber sur quelque chose, et donner une certaine impression. Le second se construit avec as.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Something has come up.",
        francais: "Un imprévu est survenu.",
        aussi: ["Il y a eu un contretemps."],
        note: "Come up, survenir. La formule sert d'excuse toute faite pour annuler.",
      },
      {
        etranger: "I came across an old letter.",
        francais: "Je suis tombé sur une vieille lettre.",
        note: "Come across something, trouver par hasard. Sans as, c'est toujours ce sens.",
      },
      {
        etranger: "He comes across as arrogant.",
        francais: "Il donne l'impression d'être arrogant.",
        note: "Come across as, donner telle impression. C'est le as qui change tout.",
      },
      {
        etranger: "We went through the figures twice.",
        francais: "Nous avons examiné les chiffres deux fois.",
        aussi: ["Nous avons passé les chiffres en revue deux fois."],
        note: "Go through, examiner méthodiquement — ou traverser une épreuve.",
      },
      {
        etranger: "The deal fell through, so we went back.",
        francais: "L'accord a échoué, alors nous sommes revenus en arrière.",
        note: "Go back, revenir. Fall through, échouer avant conclusion.",
      },
      {
        etranger: "The milk has gone off.",
        francais: "Le lait a tourné.",
        note: "Go off, s'avarier — ou se déclencher, pour une alarme. Deux sens sans rapport.",
      },
      {
        etranger: "How did the interview go?",
        francais: "Comment s'est passé l'entretien ?",
        note: "Go seul, se passer. La question la plus fréquente de l'anglais quotidien.",
      },
      {
        etranger: "She went along with the plan.",
        francais: "Elle s'est ralliée au projet.",
        aussi: ["Elle a accepté de suivre le plan."],
        note: "Go along with, se ranger à un avis sans enthousiasme particulier.",
      },
      {
        etranger: "The name doesn't come to mind.",
        francais: "Le nom ne me revient pas.",
        note: "Come to mind, venir à l'esprit. Le sujet est la chose, pas la personne.",
      },
      {
        etranger: "We're going over the plan tomorrow.",
        francais: "Nous revoyons le plan demain.",
        note: "Go over, revoir en détail. Go through insisterait sur l'exhaustivité.",
      },
    ],
  },

  {
    slug: "en-phrasal-ecrit",
    category: "Verbes",
    title: "Les verbes à particule de l'écrit",
    statement:
      "Set out, carry out, point out, rule out. On croit les verbes à particule familiers : ceux-là sont ceux de l'article scientifique et du rapport.",
    tip: "L'idée reçue veut qu'on remplace un verbe à particule par un verbe latin pour faire savant. C'est souvent l'inverse : carry out research est standard — research est indénombrable, jamais « a research ».",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The findings are set out in section three.",
        francais: "Les résultats sont exposés à la section trois.",
        note: "Set out, exposer méthodiquement. Germanique et pourtant très formel.",
      },
      {
        etranger: "They carried out a survey.",
        francais: "Ils ont mené une enquête.",
        aussi: ["Ils ont réalisé une étude."],
        note: "Carry out, mener à bien. C'est le verbe standard de la méthode, pas un familier.",
      },
      {
        etranger: "The author points out a contradiction.",
        francais: "L'auteur relève une contradiction.",
        note: "Point out, signaler. Plus neutre que note ou observe.",
      },
      {
        etranger: "The delay stems from a supplier issue.",
        francais: "Le retard découle d'un problème fournisseur.",
        note: "Stem from, découler de. Verbe à particule de l'écrit savant, au sens propre : la tige d'où vient la cause.",
      },
      {
        etranger: "The results bear out the hypothesis.",
        francais: "Les résultats confirment l'hypothèse.",
        aussi: ["Les résultats corroborent l'hypothèse."],
        note: "Bear out, corroborer. Le sujet est la preuve, jamais l'auteur.",
      },
      {
        etranger: "The study builds on earlier work.",
        francais: "L'étude prolonge des travaux antérieurs.",
        aussi: ["L'étude s'appuie sur des travaux antérieurs."],
        note: "Build on, prolonger en s'appuyant. Formule d'introduction d'article.",
      },
      {
        etranger: "The difference evens out over time.",
        francais: "L'écart s'estompe avec le temps.",
        aussi: ["La différence se lisse à la longue."],
        note: "Even out, se niveler. Employé pour des séries de données.",
      },
      {
        etranger: "The argument breaks down here.",
        francais: "Le raisonnement s'effondre ici.",
        note: "Break down se dit d'un argument comme d'une machine, et l'image est la même.",
      },
      {
        etranger: "The paper sets forth three claims.",
        francais: "L'article avance trois thèses.",
        note: "Set forth, avancer formellement. Plus solennel que set out, presque juridique.",
      },
      {
        etranger: "The figures have borne out his prediction.",
        francais: "La tendance s'est confirmée depuis.",
        note: "Bear out est transitif : des chiffres confirment une prévision. Le participe passé est borne, jamais « beared ».",
      },
    ],
  },

  {
    slug: "en-collocations-verbes",
    category: "Vocabulaire",
    title: "Give et have : les collocations qui restent",
    statement:
      "Give a talk, have a word, do the dishes. La série « Make, do, take, have : le bon verbe » installe le principe ; celle-ci couvre ce qu'elle ne dit pas.",
    tip: "Give porte ce qu'on offre à quelqu'un d'autre — a talk, a hand, a miss. Have porte l'échange bref — a word, a chat.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Give me a hand with this.",
        francais: "Donne-moi un coup de main.",
        note: "Give a hand, aider. Help with the same idea marche aussi, en plus neutre.",
      },
      {
        etranger: "He did his best.",
        francais: "Il a fait de son mieux.",
        note: "Do one's best. Make dirait qu'on fabrique un « meilleur », ce qui ne veut rien dire.",
      },
      {
        etranger: "Let's have a chat about it.",
        francais: "Discutons-en un peu.",
        note: "Have a chat, discuter brièvement et sans façon. Plus informel que have a conversation.",
      },
      {
        etranger: "She gave a talk on climate.",
        francais: "Elle a donné une conférence sur le climat.",
        note: "Give a talk, a speech, a presentation. Do a talk existe mais est familier.",
      },
      {
        etranger: "They made an effort.",
        francais: "Ils ont fait un effort.",
        note: "Make an effort. « Do an effort » est la faute la plus courante des francophones.",
      },
      {
        etranger: "I'll have a word with him.",
        francais: "Je vais lui toucher un mot.",
        note: "Have a word with, parler brièvement. Le singulier est obligatoire.",
      },
      {
        etranger: "Do you take sugar?",
        francais: "Vous prenez du sucre ?",
        note: "Take pour ce qu'on absorbe. Have marcherait aussi, make jamais.",
      },
      {
        etranger: "That doesn't make sense.",
        francais: "Ça n'a aucun sens.",
        note: "Make sense, avoir du sens. La formule est figée et très employée.",
      },
      {
        etranger: "I'll give the gym a miss today.",
        francais: "Je vais faire l'impasse sur la salle de sport aujourd'hui.",
        note: "Give something a miss, familier : renoncer à une chose prévue.",
      },
      {
        etranger: "We did the dishes together.",
        francais: "Nous avons fait la vaisselle ensemble.",
        note: "Do pour les corvées domestiques : do the dishes, the laundry, the cleaning.",
      },
    ],
  },

  {
    slug: "en-collocations-adjectifs",
    category: "Vocabulaire",
    title: "L'adjectif qui va avec",
    statement:
      "Heavy rain, strong wind, deep concern. L'anglais a soudé certains adjectifs à certains noms, et employer le synonyme le plus proche sonne immédiatement faux.",
    tip: "Il n'y a pas de règle : heavy rain mais strong wind, alors que les deux disent l'intensité. Ces couples se retiennent ensemble ou pas du tout.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We had heavy rain all week.",
        francais: "Il a beaucoup plu toute la semaine.",
        aussi: ["Nous avons eu de fortes pluies toute la semaine."],
        note: "Heavy rain, strong wind. L'inverse — « strong rain » — se remarque immédiatement.",
      },
      {
        etranger: "There is deep concern in the sector.",
        francais: "Le secteur est profondément inquiet.",
        note: "Deep concern, la collocation consacrée des communiqués. Big concern serait familier.",
      },
      {
        etranger: "He made a full recovery.",
        francais: "Il s'est complètement rétabli.",
        note: "Make a full recovery : full est la collocation attendue. Complete passe, total se remarque.",
      },
      {
        etranger: "It was a narrow escape.",
        francais: "Il l'a échappé belle.",
        aussi: ["C'était juste."],
        note: "A narrow escape ou a close call. Narrow dit l'étroitesse de la marge.",
      },
      {
        etranger: "The evidence is compelling.",
        francais: "Les preuves sont convaincantes.",
        note: "Compelling evidence, la collocation savante. Convincing est plus courant et plus faible.",
      },
      {
        etranger: "They face stiff competition.",
        francais: "Ils affrontent une rude concurrence.",
        note: "Stiff competition, fierce competition. Hard competition ne se dit pas.",
      },
      {
        etranger: "She has a vested interest in this.",
        francais: "Elle est personnellement intéressée à l'affaire.",
        note: "A vested interest, un intérêt personnel qui compromet l'impartialité.",
      },
      {
        etranger: "The plan met with fierce opposition.",
        francais: "Le projet s'est heurté à une vive opposition.",
        note: "Meet with opposition, se heurter. Fierce est la collocation attendue.",
      },
      {
        etranger: "It's a common misconception.",
        francais: "C'est une idée reçue répandue.",
        note: "A common misconception, la formule qui ouvre une mise au point.",
      },
      {
        etranger: "The talks reached a sensitive stage.",
        francais: "Les négociations ont atteint un stade délicat.",
        note: "Sensitive dit ici le délicat, pas l'émotif. Le faux ami guette.",
      },
    ],
  },

  {
    slug: "en-collocations-academiques",
    category: "Expressions",
    title: "Les couples de l'écrit savant",
    statement:
      "Draw a conclusion, raise a question, address an issue, meet a criterion. L'écrit académique anglophone tient sur une trentaine de couples verbe-nom, toujours les mêmes.",
    tip: "Ces verbes ne sont pas interchangeables même quand leur sens semble proche. On draws a conclusion et on reaches an agreement — jamais l'inverse.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We can draw two conclusions.",
        francais: "On peut en tirer deux conclusions.",
        note: "Draw a conclusion, tirer. Make a conclusion se rencontre mais reste critiqué.",
      },
      {
        etranger: "This raises a further question.",
        francais: "Cela soulève une question de plus.",
        note: "Raise a question, soulever. Pose a question dit plutôt qu'on la formule.",
      },
      {
        etranger: "The study meets a long-standing need.",
        francais: "L'étude répond à un besoin ancien.",
        note: "Meet a need, meet a deadline, meet a standard : meet dit ce à quoi on satisfait.",
      },
      {
        etranger: "The sample meets the criteria.",
        francais: "L'échantillon satisfait aux critères.",
        aussi: ["L'échantillon remplit les critères."],
        note: "Meet a criterion. Le pluriel est criteria, jamais « criterias ».",
      },
      {
        etranger: "They reached an agreement.",
        francais: "Ils sont parvenus à un accord.",
        note: "Reach an agreement. Draw serait fautif ici, et draw a conclusion l'inverse.",
      },
      {
        etranger: "The study lends support to the theory.",
        francais: "L'étude appuie la théorie.",
        aussi: ["L'étude vient étayer la théorie."],
        note: "Lend support to, apporter un appui. Give support est plus faible et moins écrit.",
      },
      {
        etranger: "This calls the method into question.",
        francais: "Cela remet la méthode en cause.",
        note: "Le complément se glisse entre call et into. La forme soudée, call into question the method, existe mais pèse plus lourd.",
      },
      {
        etranger: "The results shed light on the process.",
        francais: "Les résultats éclairent le processus.",
        note: "Shed light on, éclairer. Le participe passé est shed, invariable.",
      },
      {
        etranger: "We take issue with that claim.",
        francais: "Nous contestons cette affirmation.",
        note: "Take issue with, contester poliment mais fermement.",
      },
      {
        etranger: "The argument carries little weight.",
        francais: "L'argument a peu de poids.",
        note: "Carry weight, avoir du poids. Le sujet est l'argument, jamais la personne.",
      },
    ],
  },

  {
    slug: "en-verbes-support",
    category: "Grammaire en contexte",
    title: "Le verbe qui ne dit rien",
    statement:
      "Have a look, take a walk, give a shout. L'anglais transforme volontiers un verbe en nom, puis le fait porter par un verbe vide — et le résultat n'a pas le même sens que le verbe seul.",
    tip: "Have a swim n'est pas swim : la forme nominale dit une occurrence brève et délimitée. C'est une nuance d'aspect que le français rend mal.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Let's have a swim before lunch.",
        francais: "Allons nous baigner avant le déjeuner.",
        note: "Have a swim dit une baignade délimitée ; swim seul dit l'activité en général.",
      },
      {
        etranger: "I'll give it a try.",
        francais: "Je vais tenter le coup.",
        aussi: ["Je vais essayer."],
        note: "Give something a try, une tentative unique. Try seul serait plus vague.",
      },
      {
        etranger: "She took a nap after lunch.",
        francais: "Elle a fait une sieste après le déjeuner.",
        note: "Take a nap. Le verbe nap existe mais s'emploie beaucoup moins.",
      },
      {
        etranger: "Give me a call when you land.",
        francais: "Appelle-moi quand tu atterris.",
        note: "Give a call, pour le téléphone. Give a shout est l'équivalent informel, en personne.",
      },
      {
        etranger: "We had a chat about it.",
        francais: "Nous en avons discuté un moment.",
        note: "Have a chat, une conversation informelle et brève. Chat seul est plus vague.",
      },
      {
        etranger: "He made a start on the report.",
        francais: "Il a commencé le rapport.",
        aussi: ["Il s'est attelé au rapport."],
        note: "Make a start, entamer. La forme nominale insiste sur le franchissement du seuil.",
      },
      {
        etranger: "Take a seat, please.",
        francais: "Asseyez-vous, je vous en prie.",
        note: "Take a seat est plus poli que sit down, qui sonne comme un ordre.",
      },
      {
        etranger: "Let's take a break.",
        francais: "Faisons une pause.",
        note: "Take a break, have a break. Do a break n'existe pas.",
      },
      {
        etranger: "They had an argument.",
        francais: "Ils se sont disputés.",
        note: "Have an argument, une dispute unique. Argue dirait le fait de discuter en général.",
      },
      {
        etranger: "Give the door a push.",
        francais: "Pousse un peu la porte.",
        note: "Give something a push : une poussée brève, moins insistante que push seul.",
      },
    ],
  },
];
