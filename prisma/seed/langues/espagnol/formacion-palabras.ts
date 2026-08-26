/**
 * Espagnol — fabriquer un mot, et les structures qui vont avec.
 *
 * Cinquième passe. Un C1 ne connaît pas seulement plus de mots : il sait en
 * FABRIQUER. À partir de cuidar il tire cuidado, cuidadoso, descuidado,
 * cuidador, descuido — cinq mots dont un seul figure dans une liste.
 *
 * C'est le levier le plus rentable de tout l'apprentissage, et le plus absent
 * des manuels parce qu'il ne fait pas une leçon. Les quatre dernières séries
 * portent sur les structures que le vocabulaire ne suffit pas à porter.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_FORMACION_PALABRAS: LotCartes[] = [
  {
    slug: "es-prefijos",
    category: "Grammaire en contexte",
    title: "Les préfixes",
    statement:
      "Des-, in-, re-, sobre-, sub-. Cinq préfixes qui fabriquent des centaines de mots, et dont le sens est parfaitement régulier.",
    tip: "Des- est le préfixe négatif le plus productif de l'espagnol : hacer et deshacer, cuidado et descuidado. Il est bien plus employé que in-.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Hay que deshacer el nudo.",
        francais: "Il faut défaire le nœud.",
        note: "Des- inverse l'action : hacer, deshacer ; montar, desmontar ; cubrir, descubrir.",
      },
      {
        etranger: "El informe sobrestima el riesgo.",
        francais: "Le rapport surestime le risque.",
        note: "Sobre- dit l'excès : sobrestimar, sobrecargar, sobrepasar.",
      },
      {
        etranger: "El servicio está infrautilizado.",
        francais: "Le service est sous-utilisé.",
        note: "Infra- dit l'insuffisance : infradotado, infrautilizado, infravalorar.",
      },
      {
        etranger: "Me has malinterpretado.",
        francais: "Tu m'as mal compris.",
        note: "Mal- dit l'erreur : malinterpretar, malentender, malgastar.",
      },
      {
        etranger: "Hay que rehacer el archivo.",
        francais: "Le fichier est à refaire.",
        note: "Re- dit la reprise, et se colle librement : rehacer, releer, reescribir.",
      },
      {
        etranger: "La acusación es infundada.",
        francais: "L'accusation est sans fondement.",
        note: "In- devient im- devant p et b, i- devant l et r ; devant les autres consonnes, il reste inchangé : imposible, ilegal, irreal, incoherente.",
      },
      {
        etranger: "Es una decisión prematura.",
        francais: "C'est une décision prématurée.",
        note: "Pre- dit l'antériorité ; pos- la postériorité : preguerra, posguerra.",
      },
      {
        etranger: "Entreabrió la puerta con cuidado.",
        francais: "Il entrouvrit la porte avec précaution.",
        note: "Entre- dit l'action à demi : entreabrir, entrever, entreoír.",
      },
      {
        etranger: "El subsuelo está contaminado.",
        francais: "Le sous-sol est contaminé.",
        note: "Sub- dit ce qui est en dessous : subsuelo, subtítulo, subestimar.",
      },
      {
        etranger: "Es un material antideslizante.",
        francais: "C'est un matériau antidérapant.",
        note: "Anti- se soude sans trait d'union : antideslizante, antirrobo, antiarrugas.",
      },
    ],
  },

  {
    slug: "es-sufijos-nombres",
    category: "Grammaire en contexte",
    title: "Fabriquer un nom",
    statement:
      "-ción, -dad, -miento, -eza, -ura. Cinq suffixes qui transforment un verbe ou un adjectif en nom, et le choix n'est pas libre.",
    tip: "Tous les noms en -ción, -dad et -tad sont féminins, sans exception. C'est l'une des rares règles de genre parfaitement fiables.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "La formación duró tres meses.",
        francais: "La formation a duré trois mois.",
        note: "-ción sur un verbe. Tous ces noms sont féminins, sans exception.",
      },
      {
        etranger: "La claridad importa más que la rapidez.",
        francais: "La clarté compte plus que la rapidité.",
        note: "-dad sur un adjectif : claro devient claridad. Toujours féminin.",
      },
      {
        etranger: "El planteamiento no convence.",
        francais: "La façon de poser le problème ne convainc pas.",
        note: "-miento sur un verbe : plantear, planteamiento. Toujours masculin.",
      },
      {
        etranger: "Su tristeza era evidente.",
        francais: "Sa tristesse était évidente.",
        note: "-eza sur un adjectif : triste, tristeza ; pobre, pobreza. Toujours féminin.",
      },
      {
        etranger: "La altura del techo sorprende.",
        francais: "La hauteur du plafond surprend.",
        note: "-ura sur un adjectif : alto, altura ; ancho, anchura ; dulce, dulzura.",
      },
      {
        etranger: "El rechazo fue una sorpresa.",
        francais: "Le refus a été une surprise.",
        note: "Certains noms se forment sans suffixe : rechazar donne rechazo, cambiar cambio.",
      },
      {
        etranger: "Su actuación fue impecable.",
        francais: "Sa prestation était impeccable.",
        note: "Actuación, la prestation d'un artiste. Le mot ne dit pas l'actualité.",
      },
      {
        etranger: "El edificio no tiene calefacción.",
        francais: "Le bâtiment n'a pas de chauffage.",
        note: "Calefacción, chauffage. Le mot vient de calor et facere, faire chaud.",
      },
      {
        etranger: "Trabaja como cuidador.",
        francais: "Il travaille comme auxiliaire de vie.",
        aussi: ["Il est aide à domicile."],
        note: "-dor désigne celui qui fait : cuidar, cuidador ; trabajar, trabajador.",
      },
      {
        etranger: "El empleado presentó una queja.",
        francais: "L'employé a formulé une plainte.",
        note: "-ado peut désigner celui qui subit : empleador et empleado.",
      },
    ],
  },

  {
    slug: "es-sufijos-verbos",
    category: "Grammaire en contexte",
    title: "Fabriquer un verbe ou un adjectif",
    statement:
      "-izar, -ificar, -ecer, -able, -ivo. L'espagnol transforme un nom en verbe sans effort, et ce sont ces dérivés qui font l'écrit savant.",
    tip: "-ecer fabrique des verbes de changement d'état : oscurecer, envejecer, fortalecer. Ils sont tous irréguliers au présent : oscurezco, envejezco.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Hay que priorizar estos casos.",
        francais: "Il faut hiérarchiser ces dossiers.",
        note: "-izar fabrique un verbe à partir d'un nom : prioridad devient priorizar.",
      },
      {
        etranger: "¿Puedes clarificar el punto?",
        francais: "Peux-tu préciser ce point ?",
        note: "-ificar sur un adjectif : claro, clarificar ; simple, simplificar.",
      },
      {
        etranger: "Las normas se endurecieron.",
        francais: "Les règles ont été durcies.",
        note: "-ecer sur un adjectif : duro, endurecer. Le verbe est irrégulier : endurezco.",
      },
      {
        etranger: "Los resultados no son comparables.",
        francais: "Les résultats ne sont pas comparables.",
        note: "-able et -ible disent ce qui peut être fait : comparable, comprensible.",
      },
      {
        etranger: "La medida resultó efectiva.",
        francais: "La mesure s'est révélée efficace.",
        note: "-ivo se greffe sur le radical du participe latin : efecto → efectivo, selección → selectivo, comprender → comprensivo.",
      },
      {
        etranger: "El proceso está automatizado.",
        francais: "Le processus est automatisé.",
        note: "Automatizar, verbe en -izar. Le participe sert d'adjectif.",
      },
      {
        etranger: "Es una acusación infundada.",
        francais: "C'est une accusation sans fondement.",
        note: "Le préfixe in- avec le participe fabrique l'adjectif privatif.",
      },
      {
        etranger: "Fue extraordinariamente atenta.",
        francais: "Elle a été extraordinairement attentionnée.",
        note: "-mente s'ajoute au féminin de l'adjectif : atenta, atentamente.",
      },
      {
        etranger: "Es un error costoso.",
        francais: "C'est une erreur coûteuse.",
        note: "-oso dit l'abondance : costoso, peligroso, ruidoso, cariñoso.",
      },
      {
        etranger: "La película es pasable, sin más.",
        francais: "Le film est passable, sans plus.",
        note: "-able ajouté librement produit des mots de circonstance, courants à l'oral.",
      },
    ],
  },

  {
    slug: "es-verbos-informe",
    category: "Verbes",
    title: "Rapporter des propos",
    statement:
      "Afirmar, sostener, negar, reconocer. Chaque verbe de rapport porte un jugement sur ce qu'on rapporte, et certains imposent le subjonctif.",
    tip: "Negar que et no creer que demandent le subjonctif ; afirmar que et creer que prennent l'indicatif. La négation du verbe principal change le mode de la subordonnée.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Afirma haberlo visto.",
        francais: "Il affirme l'avoir vu.",
        note: "Afirmar + infinitif quand le sujet est le même. Sinon afirmar que + indicatif.",
      },
      {
        etranger: "Sostuvo que los datos eran erróneos.",
        francais: "Elle a soutenu que les données étaient fausses.",
        note: "Sostener que + indicatif. Le verbe dit l'argumentation, pas la dispute.",
      },
      {
        etranger: "Insistieron en ver el expediente.",
        francais: "Ils ont insisté pour voir le dossier.",
        note: "Insistir en + infinitif ; insistir en que + subjonctif si c'est une demande.",
      },
      {
        etranger: "Negó que hubiera participado.",
        francais: "Il a nié avoir participé.",
        note: "Negar que + subjonctif. Mais no negar que admet l'indicatif quand le fait est admis : no niego que es cierto.",
      },
      {
        etranger: "Reconoció haberse equivocado.",
        francais: "Elle a reconnu s'être trompée.",
        note: "Reconocer + infinitif composé. Admitir se dit aussi.",
      },
      {
        etranger: "El autor propone otra lectura.",
        francais: "L'auteur propose une autre lecture.",
        note: "Proponer + nom ou que + subjonctif. Jamais proponer a alguien de.",
      },
      {
        etranger: "Los acusó de ocultarlo.",
        francais: "Il les a accusés de le cacher.",
        note: "Acusar a alguien de + infinitif. La préposition ne s'omet pas.",
      },
      {
        etranger: "Nos advirtió que no esperáramos.",
        francais: "Elle nous a prévenus de ne pas attendre.",
        note: "Advertir que + subjonctif quand c'est un avertissement à suivre.",
      },
      {
        etranger: "Admitió el punto a regañadientes.",
        francais: "Il a concédé le point à contrecœur.",
        note: "A regañadientes, à contrecœur. La formule est figée.",
      },
      {
        etranger: "El ministro declinó hacer comentarios.",
        francais: "Le ministre n'a pas souhaité commenter.",
        note: "Declinar + infinitif, la formule des dépêches. Negarse a serait plus abrupt.",
      },
    ],
  },

  {
    slug: "es-infinitivo-subjuntivo",
    category: "Grammaire en contexte",
    title: "Infinitif ou subjonctif",
    statement:
      "Quiero salir. Quiero que salgas. Le même verbe demande l'infinitif ou le subjonctif selon que le sujet change ou non.",
    tip: "La règle est mécanique : même sujet, infinitif ; sujet différent, que + subjonctif. Le français emploie souvent l'infinitif dans les deux cas.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Quiero salir temprano.",
        francais: "Je veux partir tôt.",
        note: "Même sujet : infinitif, sans que.",
      },
      {
        etranger: "Quiero que salgas temprano.",
        francais: "Je veux que tu partes tôt.",
        note: "Sujet différent : que + subjonctif. Le contraste avec la carte précédente est net.",
      },
      {
        etranger: "Espero llegar a tiempo.",
        francais: "J'espère arriver à temps.",
        note: "Esperar + infinitif quand le sujet ne change pas.",
      },
      {
        etranger: "Espero que llegues a tiempo.",
        francais: "J'espère que tu arriveras à temps.",
        note: "Esperar que + subjonctif, là où le français met un indicatif futur.",
      },
      {
        etranger: "Le pedí que viniera.",
        francais: "Je lui ai demandé de venir.",
        note: "Pedir que + subjonctif, toujours. Le français emploie ici un infinitif.",
      },
      {
        etranger: "Me alegro de verte.",
        francais: "Je suis content de te voir.",
        note: "Alegrarse de + infinitif quand le sujet est le même.",
      },
      {
        etranger: "Me alegro de que hayas venido.",
        francais: "Je suis content que tu sois venu.",
        note: "De que + subjonctif quand le sujet change. La préposition de reste.",
      },
      {
        etranger: "Es importante llegar puntual.",
        francais: "Il est important d'arriver à l'heure.",
        note: "Sans sujet exprimé, l'infinitif suffit après une tournure impersonnelle.",
      },
      {
        etranger: "Es importante que llegues puntual.",
        francais: "Il est important que tu arrives à l'heure.",
        note: "Avec un sujet, que + subjonctif. La règle vaut pour toutes les impersonnelles.",
      },
      {
        etranger: "Antes de salir, apaga la luz.",
        francais: "Avant de partir, éteins la lumière.",
        note: "Antes de + infinitif si le sujet est le même ; antes de que + subjonctif sinon.",
      },
    ],
  },

  {
    slug: "es-pasiva-avanzada",
    category: "Grammaire en contexte",
    title: "Les passifs de l'espagnol",
    statement:
      "Se dice que, se vendió la casa, mandó hacer una copia. L'espagnol évite le passif en être et emploie trois autres tours à sa place.",
    tip: "La pasiva refleja — se vendió la casa — est bien plus fréquente que fue vendida. Le passif en ser sonne traduit de l'anglais.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Se vendieron todas las entradas.",
        francais: "Toutes les places ont été vendues.",
        note: "La pasiva refleja : le verbe s'accorde avec le sujet grammatical, ici pluriel.",
      },
      {
        etranger: "Mandé hacer una copia.",
        francais: "J'ai fait faire une copie.",
        note: "Mandar ou hacer + infinitif : faire faire. Deux verbes possibles, sens identique.",
      },
      {
        etranger: "Se dice que se marchó anoche.",
        francais: "On dit qu'il est parti hier soir.",
        note: "Se dice que, la tournure impersonnelle. Personne ne s'engage nommément.",
      },
      {
        etranger: "Se cree que la cifra es mayor.",
        francais: "On pense que le chiffre est plus élevé.",
        note: "Se cree que + indicatif. Le se impersonnel évite de nommer qui croit.",
      },
      {
        etranger: "Le dieron una segunda oportunidad.",
        francais: "On lui a donné une seconde chance.",
        note: "La troisième personne du pluriel sans sujet vaut impersonnel : dieron, dicen.",
      },
      {
        etranger: "Se está reconstruyendo la casa.",
        francais: "La maison est en cours de reconstruction.",
        note: "Se + estar + gérondif : le passif au continu, très naturel en espagnol.",
      },
      {
        etranger: "La propuesta fue rechazada.",
        francais: "La proposition a été rejetée.",
        note: "Le passif en ser existe mais reste réservé à l'écrit formel.",
      },
      {
        etranger: "Le robaron el bolso.",
        francais: "On lui a volé son sac.",
        note: "La troisième personne du pluriel dit ce qu'on subit sans nommer l'auteur.",
      },
      {
        etranger: "El asunto se está investigando.",
        francais: "L'affaire est à l'étude.",
        note: "Se + estar + gérondif, la forme la plus courante pour une procédure en cours.",
      },
      {
        etranger: "Se rumorea que ha dimitido.",
        francais: "Le bruit court qu'il a démissionné.",
        note: "Se rumorea que, la formule de la presse pour une information non confirmée.",
      },
    ],
  },

  {
    slug: "es-comparativos-avanzados",
    category: "Grammaire en contexte",
    title: "Comparer finement",
    statement:
      "Cuanto más, mejor. Tanto más cuanto que. El doble de. Les comparatifs avancés espagnols ont des moules figés qu'on ne peut pas improviser.",
    tip: "Cuanto más… más… : le premier membre prend cuanto, le second non. « Cuanto más leo, más entiendo » — et jamais « cuanto más… cuanto más ».",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Cuanto antes empecemos, mejor.",
        francais: "Plus tôt on commence, mieux c'est.",
        note: "Cuanto ouvre le premier membre seulement. Le second se réduit souvent à mejor.",
      },
      {
        etranger: "Cuanto más explica, menos entiendo.",
        francais: "Plus il explique, moins je comprends.",
        note: "Le moule accepte más et menos indifféremment dans chaque membre.",
      },
      {
        etranger: "Eso lo hace aún más urgente.",
        francais: "Cela le rend d'autant plus urgent.",
        note: "Aún más, encore plus. Tanto más se dit aussi, plus soutenu.",
      },
      {
        etranger: "Había el doble de lo previsto.",
        francais: "Il y en avait deux fois plus que prévu.",
        note: "El doble de, deux fois plus. La mitad de dit la moitié.",
      },
      {
        etranger: "Ni de lejos es suficiente.",
        francais: "C'est très loin d'être suffisant.",
        note: "Ni de lejos, loin de là. Beaucoup plus fort que no del todo.",
      },
      {
        etranger: "Es con diferencia la mejor candidata.",
        francais: "C'est de loin la meilleure candidate.",
        note: "Con diferencia renforce un superlatif. Con mucho se dit aussi.",
      },
      {
        etranger: "No es tan sencillo como parece.",
        francais: "Ce n'est pas aussi simple qu'il y paraît.",
        note: "Tan… como. Tanto s'apocope en tan devant un adjectif.",
      },
      {
        etranger: "Tiene menos experiencia que ella.",
        francais: "Il a moins d'expérience qu'elle.",
        note: "Que + pronom sujet : que ella, jamais « que la ». L'espagnol garde le nominatif.",
      },
      {
        etranger: "Los resultados son prácticamente iguales.",
        francais: "Les résultats sont pratiquement identiques.",
        note: "Prácticamente, casi, poco menos que : trois façons d'approcher l'égalité sans l'affirmer.",
      },
      {
        etranger: "Cada vez cuesta más.",
        francais: "Ça devient de plus en plus difficile.",
        note: "Cada vez más, de plus en plus. L'espagnol ne redouble pas le comparatif.",
      },
    ],
  },

  {
    slug: "es-condicionales-avanzadas",
    category: "Grammaire en contexte",
    title: "Les conditionnelles au-delà de si",
    statement:
      "A no ser que, siempre que, como, con tal de que. L'espagnol a une demi-douzaine de façons de poser une condition, et si n'est que la plus simple.",
    tip: "Toutes ces conjonctions demandent le subjonctif, sauf si. C'est la seule à prendre l'indicatif — et jamais le conditionnel après elle.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Iremos a no ser que llueva.",
        francais: "Nous irons à moins qu'il ne pleuve.",
        note: "A no ser que + subjonctif, toujours. Salvo que se dit aussi.",
      },
      {
        etranger: "Siempre que estés de acuerdo, empezamos.",
        francais: "À condition que tu sois d'accord, nous commençons.",
        note: "Siempre que + subjonctif pose une condition ; + indicatif, une habitude.",
      },
      {
        etranger: "Con tal de que funcione, me da igual.",
        francais: "Du moment que ça marche, ça m'est égal.",
        note: "Con tal de que + subjonctif. La condition est minimale et suffisante.",
      },
      {
        etranger: "Como no llegues a tiempo, nos vamos.",
        francais: "Si jamais tu n'arrives pas à l'heure, nous partons.",
        note: "Como + subjonctif porte une menace ou un avertissement. Sens très différent de si.",
      },
      {
        etranger: "De haberlo sabido, te habría llamado.",
        francais: "Si j'avais su, je t'aurais appelé.",
        note: "De + infinitif composé remplace si dans le registre soutenu.",
      },
      {
        etranger: "Si no fuera por ti, habríamos fracasado.",
        francais: "Sans toi, nous aurions échoué.",
        note: "Si no fuera por, sans. La formule est figée à l'imparfait du subjonctif.",
      },
      {
        etranger: "En caso de que llueva, coge paraguas.",
        francais: "Au cas où il pleuvrait, prends un parapluie.",
        note: "En caso de que + subjonctif dit la précaution, pas la condition.",
      },
      {
        etranger: "Si hubiera salido antes, ya estaría en casa.",
        francais: "Si j'étais parti plus tôt, je serais déjà chez moi.",
        note: "Conditionnelle mixte : plus-que-parfait du subjonctif, puis conditionnel simple.",
      },
      {
        etranger: "Aunque acepte, no servirá de nada.",
        francais: "Même si elle accepte, cela ne servira à rien.",
        note: "Aunque + subjonctif écarte la condition d'avance. Avec l'indicatif, elle serait admise.",
      },
      {
        etranger: "Mientras no digas nada, todo irá bien.",
        francais: "Tant que tu ne dis rien, tout ira bien.",
        note: "Mientras + subjonctif pose une condition ; + indicatif, une simultanéité.",
      },
    ],
  },
];
