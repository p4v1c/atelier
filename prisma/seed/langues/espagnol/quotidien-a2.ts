/**
 * Espagnol — cinq séries de plus au niveau A2.
 *
 * Le module comptait treize séries A1 pour sept A2 : le palier où l'on cesse
 * de répéter des formules et où l'on commence à composer était le plus mince.
 * Ces cinq-là le renforcent, et deux d'entre elles portent un cours — les
 * nombres écrits et les diminutifs, deux mécaniques que le français n'a pas.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_QUOTIDIEN_A2: LotCartes[] = [
  {
    slug: "es-numeros-fechas",
    category: "Les bases",
    title: "Les nombres et les dates à l'écrit",
    statement:
      "Vingt et un s'accorde, deux cents aussi, mille jamais. Et la date change de forme selon qu'on écrit à Madrid ou à Mexico. Rien de tout cela ne s'improvise.",
    tip: "Les centaines s'accordent en genre — doscientas personas — mais mil ne bouge jamais et ne prend pas d'article : mil quinientos, jamais « un mil ».",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Écrire les nombres et les dates en espagnol",
      sections: [
        {
          titre: "Ce qui s'accorde et ce qui ne bouge pas",
          texte:
            "L'espagnol accorde ses nombres bien plus que le français, et l'oubli s'entend tout de suite.\n\nUno et ses composés s'accordent en genre et perdent leur o devant un nom masculin : un alumno, veintiún alumnos, una alumna, veintiuna alumnas. C'est vrai jusqu'à l'infini : treinta y un días, cuarenta y una páginas.\n\nLes centaines s'accordent à partir de deux cents : doscientos euros mais doscientas personas, quinientos hombres mais quinientas mujeres. Cien et ciento, eux, ne bougent pas.\n\nMil est invariable et ne prend jamais d'article indéfini. On écrit mil quinientos, jamais « un mil quinientos ». Millón, en revanche, est un nom : un millón de habitantes, avec de obligatoire.\n\nDernière irrégularité utile : jusqu'à trente, les nombres s'écrivent en un seul mot — veintiuno, veintidós, veintitrés — et à partir de trente-et-un, en trois : treinta y uno, cuarenta y dos.",
          visuels: [
            {
              type: "tableau",
              titre: "Les formes à ne pas confondre",
              colonnes: ["Ce qu'on veut dire", "En espagnol", "Le piège"],
              lignes: [
                ["vingt et un élèves", "veintiún alumnos", "uno perd son o devant un masculin"],
                ["vingt et une élèves", "veintiuna alumnas", "et s'accorde au féminin"],
                ["deux cents personnes", "doscientas personas", "les centaines s'accordent"],
                ["deux cents euros", "doscientos euros", "masculin, donc -os"],
                ["cent pages", "cien páginas", "cien devant un nom, invariable"],
                ["mille cinq cents", "mil quinientos", "« un mil » n'existe pas"],
                ["un million d'habitants", "un millón de habitantes", "millón est un nom : de obligatoire"],
                ["trente et un jours", "treinta y un días", "trois mots à partir de trente"],
              ],
            },
          ],
        },
        {
          titre: "La date : deux usages, deux continents",
          texte:
            "La date espagnole s'écrit avec un cardinal, contrairement au français qui dit « le premier » : el dos de mayo, el trece de marzo, el treinta y uno de diciembre.\n\nLa seule exception est le premier du mois, et elle partage le monde hispanophone en deux. En Espagne on dit el uno de enero ; en Amérique latine, el primero de enero. Les deux sont corrects, mais pas au même endroit — et c'est l'un des marqueurs les plus sûrs de l'origine d'un locuteur.\n\nLe mois ne prend pas de majuscule et n'a pas d'article : el diez de abril, jamais « el diez del Abril ». Le jour de la semaine, lui, prend l'article et rien d'autre : el lunes, los lunes pour l'habitude.\n\nEnfin les années se lisent en entier, comme en français : dos mil veinticinco. L'anglais les lit par paires ; l'espagnol jamais.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le premier du mois",
              colonnes: [
                {
                  titre: "Espagne",
                  points: [
                    "el uno de enero",
                    "el uno de mayo",
                    "Le cardinal, comme pour tous les autres jours.",
                  ],
                },
                {
                  titre: "Amérique latine",
                  points: [
                    "el primero de enero",
                    "el primero de mayo",
                    "L'ordinal, comme en français.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les ordinaux, et jusqu'où ils vont",
          texte:
            "Les ordinaux espagnols sont vivants jusqu'à dix, et meurent au-delà. Primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo : ceux-là s'emploient tous les jours.\n\nÀ partir de onze, la langue courante repasse au cardinal. On dit el piso doce, la fila quince, el capítulo veinte. Les formes undécimo et duodécimo existent, mais sentent l'écrit administratif, et au-delà elles ne se disent plus du tout.\n\nDeux ordinaux perdent leur o devant un nom masculin singulier, exactement comme uno : primero devient primer, tercero devient tercer. El primer día, el tercer piso — mais la primera vez, la tercera planta.\n\nEnfin, l'espagnol partage avec le français la ponctuation des nombres : virgule pour les décimales, point pour les milliers. C'est l'anglais qui fait l'inverse, et c'est de là que viennent les erreurs de facture.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Somos veintiún alumnos.",
        francais: "Nous sommes vingt et un élèves.",
        note: "Veintiuno perd son o devant un nom masculin. Au féminin : veintiuna alumnas.",
      },
      {
        etranger: "Hay doscientas personas en la sala.",
        francais: "Il y a deux cents personnes dans la salle.",
        note: "Les centaines s'accordent en genre : doscientas personas, doscientos euros.",
      },
      {
        etranger: "El libro cuesta mil quinientos pesos.",
        francais: "Le livre coûte mille cinq cents pesos.",
        note: "Mil ne prend jamais d'article : « un mil » n'existe pas. Un millón, si.",
      },
      {
        etranger: "Nací el trece de marzo.",
        francais: "Je suis né le treize mars.",
        note: "Cardinal pour la date, et de devant le mois, sans article ni majuscule.",
      },
      {
        etranger: "Hoy es uno de enero.",
        francais: "Aujourd'hui, nous sommes le premier janvier.",
        note: "El uno en Espagne, el primero en Amérique latine. Les deux sont justes, ailleurs.",
      },
      {
        etranger: "La reunión es el once de abril.",
        francais: "La réunion est le onze avril.",
        note: "Abril sans majuscule : les mois n'en prennent pas en espagnol.",
      },
      {
        etranger: "Estamos en el año dos mil veinticinco.",
        francais: "Nous sommes en l'an deux mille vingt-cinq.",
        note: "Les années se lisent en entier. L'anglais les lit par paires, l'espagnol jamais.",
      },
      {
        etranger: "Vivo en el piso tercero.",
        francais: "J'habite au troisième étage.",
        note: "Ordinal jusqu'à dix, cardinal au-delà : el piso doce, pas « duodécimo ».",
      },
      {
        etranger: "El plazo vence el treinta y uno.",
        francais: "Le délai expire le trente et un.",
        note: "Trois mots à partir de trente : treinta y uno. Mais veintiuno en un seul.",
      },
      {
        etranger: "Mide un metro con setenta y cinco.",
        francais: "Il mesure un mètre soixante-quinze.",
        note: "Con relie les deux parties d'une mesure. Et por ciento s'écrit en deux mots.",
      },
    ],
  },

  {
    slug: "es-diminutivos",
    category: "Expressions",
    title: "Les diminutifs, et ce qu'ils disent vraiment",
    statement:
      "Un cafecito n'est pas un petit café, un momentito n'est pas plus court qu'un moment, et calentito est plus chaud que caliente. Le diminutif espagnol ne mesure presque jamais.",
    tip: "Le -ito porte de l'affection, de la politesse ou de l'intensité. La taille n'est que son sens de départ, et le plus rare à l'usage.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le diminutif espagnol",
      sections: [
        {
          titre: "Ce que le suffixe ajoute",
          texte:
            "Un francophone lit -ito et comprend « petit ». C'est le contresens le plus répandu, parce que le diminutif espagnol a quitté ce sens depuis longtemps dans la plupart de ses emplois.\n\nIl porte d'abord de l'affection. Abuelita ne dit pas que la grand-mère est menue : il dit qu'on l'aime. Mi hermanito peut désigner un frère d'un mètre quatre-vingt-dix.\n\nIl porte ensuite de la politesse, et c'est son emploi le plus utile. ¿Me esperas un momentito ? adoucit la demande ; hazme un favorcito la rend presque irrésistible. Sans le suffixe, la même phrase paraît sèche.\n\nIl porte enfin de l'intensité, ce qui prend tout le monde à contre-pied. Sur un adjectif, -ito renforce souvent au lieu d'atténuer : calentito est bien chaud, cerquita est tout près, ahorita est tout de suite — ou dans trois heures, selon le pays.\n\nEt il diminue vraiment, parfois : una casita est une petite maison. Mais c'est devenu le sens minoritaire.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce que -ito veut dire ici",
              colonnes: [
                {
                  titre: "Affection et politesse",
                  points: [
                    "abuelita — la grand-mère qu'on aime.",
                    "un momentito — une demande adoucie.",
                    "un favorcito — un service qu'on n'ose pas demander.",
                  ],
                },
                {
                  titre: "Intensité, pas diminution",
                  points: [
                    "calentito — bien chaud, plus que caliente.",
                    "cerquita — tout près.",
                    "ahorita — tout de suite, ou pas.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Comment le former sans se tromper",
          texte:
            "La forme du suffixe dépend de la fin du mot, et la règle tient en trois lignes.\n\nMots de deux syllabes terminés par -a ou -o : on remplace la voyelle par -ito ou -ita. Casa donne casita, momento donne momentito, gato donne gatito.\n\nMots terminés par -e, -n ou -r : on ajoute -cito. Café donne cafecito, favor donne favorcito, joven donne jovencito. C'est la règle qu'on oublie le plus, et « cafeíto » s'entend immédiatement comme une faute.\n\nMots d'une syllabe : on ajoute -ecito. Pan donne panecito, flor donne florecita.\n\nRestent les ajustements orthographiques, qui protègent la prononciation. Le c devient qu : poco donne poquito. Le g devient gu : amigo donne amiguito. Le z devient c : lápiz donne lapicito.\n\nEnfin, le suffixe varie selon les régions. -ito domine partout, mais -illo est andalou, -ico aragonais et costaricien — au point que les Costariciens s'appellent eux-mêmes ticos.",
          visuels: [
            {
              type: "tableau",
              titre: "Former le diminutif",
              colonnes: ["Le mot", "Sa fin", "Le diminutif", "La raison"],
              lignes: [
                ["casa", "-a", "casita", "on remplace la voyelle"],
                ["momento", "-o", "momentito", "idem"],
                ["café", "-e", "cafecito", "-e, -n, -r → -cito"],
                ["favor", "-r", "favorcito", "idem"],
                ["pan", "une syllabe", "panecito", "-ecito"],
                ["poco", "c devant o", "poquito", "c → qu pour garder le son"],
                ["amigo", "g devant o", "amiguito", "g → gu"],
                ["lápiz", "-z", "lapicito", "z → c"],
              ],
            },
          ],
        },
        {
          titre: "Quand ne pas s'en servir",
          texte:
            "Le diminutif est chaleureux, donc il n'est pas neutre — et un francophone qui le découvre a tendance à en mettre partout.\n\nÀ l'écrit professionnel, il est déplacé. Un courriel qui parle d'un problemita ou d'un retrasito minimise là où il faudrait être clair, et le lecteur l'entend comme une dérobade.\n\nAvec un supérieur qu'on ne connaît pas, il est trop familier. La politesse passe alors par le vouvoiement et par les formules, pas par le suffixe.\n\nEt sur certains mots, il change carrément de sens. Un bolsillo n'est pas un petit sac mais une poche ; una manzanilla n'est pas une petite pomme mais de la camomille ; un bombilla n'est pas une petite bombe mais une ampoule. Ces lexicalisations s'apprennent comme des mots à part entière.\n\nLe réflexe sûr : imiter, ne pas inventer. Le diminutif s'attrape à l'oreille, dans les phrases où on l'a entendu.",
        },
      ],
    },
    cartes: [
      {
        etranger: "¿Me esperas un momentito?",
        francais: "Tu m'attends un petit instant ?",
        note: "Momentito ne raccourcit pas le moment : il adoucit la demande.",
      },
      {
        etranger: "Vamos a tomar un cafecito.",
        francais: "On va prendre un petit café.",
        note: "Café finit par -e, donc -cito. Et le diminutif dit la convivialité, pas la taille.",
      },
      {
        etranger: "Está calentito, no te quemes.",
        francais: "C'est bien chaud, ne te brûle pas.",
        note: "Sur un adjectif, -ito intensifie : calentito est plus chaud que caliente.",
      },
      {
        etranger: "Ahorita lo hago.",
        francais: "Je le fais tout de suite.",
        note: "Très mexicain — et ahorita peut vouloir dire cinq minutes comme trois heures.",
      },
      {
        etranger: "Dame un besito.",
        francais: "Fais-moi un bisou.",
        note: "Beso donne besito : mot de deux syllabes en -o, on remplace la voyelle.",
      },
      {
        etranger: "Espera un poquito más.",
        francais: "Attends encore un tout petit peu.",
        note: "Poco donne poquito : le c devient qu pour garder le son.",
      },
      {
        etranger: "Mi abuelita vive en Salamanca.",
        francais: "Ma grand-mère habite à Salamanque.",
        note: "Abuelita est affectueux, jamais moqueur, et ne dit rien de sa taille.",
      },
      {
        etranger: "Se puso malito el fin de semana.",
        francais: "Il a été un peu souffrant ce week-end.",
        note: "L'un des rares cas où le diminutif atténue vraiment.",
      },
      {
        etranger: "Hazme un favorcito.",
        francais: "Rends-moi un petit service.",
        note: "Favor finit par -r, donc -cito. « Favorito » voudrait dire tout autre chose.",
      },
      {
        etranger: "Está lloviendo despacito.",
        francais: "Il pleut tout doucement.",
        note: "Le suffixe s'attache aussi aux adverbes : despacito, cerquita, prontito.",
      },
    ],
  },

  {
    slug: "es-tiempo-libre",
    category: "Vie quotidienne",
    title: "Le temps libre : sport, sorties, loisirs",
    statement:
      "Proposer, accepter, raconter son week-end. Le sujet qui fait durer une conversation — et celui où trois verbes espagnols se partagent notre unique « jouer ».",
    tip: "Tocar pour un instrument, jugar a pour un sport, hacer pour une activité : hacer deporte, hacer yoga.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "¿Qué haces los fines de semana?",
        francais: "Qu'est-ce que tu fais le week-end ?",
        note: "Los fines de semana au pluriel pour l'habitude ; el fin de semana pour un seul.",
      },
      {
        etranger: "Juego al fútbol los jueves.",
        francais: "Je joue au football le jeudi.",
        note: "Jugar A + article : jugar al fútbol, jugar a las cartas. Sans a, c'est une faute.",
      },
      {
        etranger: "Toco la guitarra desde niño.",
        francais: "Je joue de la guitare depuis l'enfance.",
        note: "Tocar pour l'instrument, jugar pour le sport. Deux verbes pour un seul « jouer ».",
      },
      {
        etranger: "Me encanta salir a caminar.",
        francais: "J'adore aller marcher.",
        note: "Encantar se construit comme gustar : c'est la promenade qui enchante, pas moi.",
      },
      {
        etranger: "¿Te apetece ir al cine?",
        francais: "Ça te dit d'aller au cinéma ?",
        note: "Apetecer en Espagne, provocar en Colombie, antojarse au Mexique.",
      },
      {
        etranger: "Quedamos a las ocho en la plaza.",
        francais: "On se retrouve à huit heures sur la place.",
        note: "Quedar, se donner rendez-vous ; quedarse, rester. Le pronom change tout.",
      },
      {
        etranger: "Vi una película buenísima.",
        francais: "J'ai vu un film excellent.",
        note: "Le suffixe -ísimo remplace « très » : buenísima, carísimo, facilísimo.",
      },
      {
        etranger: "Los domingos suelo leer.",
        francais: "Le dimanche, j'ai l'habitude de lire.",
        note: "Soler + infinitif dit l'habitude en un mot. Le français n'a pas d'équivalent.",
      },
      {
        etranger: "No se me da bien bailar.",
        francais: "Je ne suis pas doué pour danser.",
        note: "Dársele bien a alguien : la personne passe au complément, comme avec gustar.",
      },
      {
        etranger: "Nos vemos el sábado por la tarde.",
        francais: "On se voit samedi après-midi.",
        note: "Por la tarde en Espagne, en la tarde en Amérique latine.",
      },
    ],
  },

  {
    slug: "es-estudios",
    category: "Travail et études",
    title: "L'école, la fac, les examens",
    statement:
      "Réussir se dit aprobar, échouer suspender, et un « cours » n'est pas un curso. Le vocabulaire scolaire est celui où les faux amis sont les plus denses.",
    tip: "Curso, c'est l'année scolaire ; clase, c'est le cours. Dire « voy a curso » ne veut rien dire.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Estudio Derecho en la universidad.",
        francais: "J'étudie le droit à l'université.",
        note: "Pas d'article devant la matière : estudio Derecho, estudio Medicina.",
      },
      {
        etranger: "Tengo un examen el lunes.",
        francais: "J'ai un examen lundi.",
        note: "El lunes, sans préposition : l'article suffit à dire « lundi prochain ».",
      },
      {
        etranger: "Aprobé con un siete.",
        francais: "J'ai eu la moyenne avec un sept.",
        note: "En Espagne on note sur dix, et l'on approuve à partir de cinq.",
      },
      {
        etranger: "Suspendí el examen de física.",
        francais: "J'ai raté l'examen de physique.",
        note: "Suspender veut dire échouer à un examen. Le faux ami « suspendre » n'a rien à voir.",
      },
      {
        etranger: "Tengo que entregar el trabajo mañana.",
        francais: "Je dois rendre le devoir demain.",
        note: "Entregar, remettre. Trabajo désigne ici le devoir écrit, pas l'emploi.",
      },
      {
        etranger: "Voy a clase de español los martes.",
        francais: "Je vais au cours d'espagnol le mardi.",
        note: "Ir a clase sans article : c'est l'activité, pas la salle.",
      },
      {
        etranger: "El profesor nos puso muchos deberes.",
        francais: "Le professeur nous a donné beaucoup de devoirs.",
        note: "Poner deberes en Espagne, dejar tarea au Mexique. Deberes est toujours pluriel.",
      },
      {
        etranger: "Estoy repasando para el examen.",
        francais: "Je révise pour l'examen.",
        note: "Repasar, réviser ; revisar, vérifier. Une lettre sépare deux sens.",
      },
      {
        etranger: "Me matriculé en el segundo curso.",
        francais: "Je me suis inscrit en deuxième année.",
        note: "Curso, l'année scolaire. Le cours lui-même se dit clase.",
      },
      {
        etranger: "Saqué buenas notas este trimestre.",
        francais: "J'ai eu de bonnes notes ce trimestre.",
        note: "Sacar una nota : l'espagnol tire la note, le français l'a.",
      },
    ],
  },

  {
    slug: "es-telefono-mensajes",
    category: "Vie quotidienne",
    title: "Au téléphone et par messages",
    statement:
      "On décroche par ¿diga? à Madrid, par bueno à Mexico, par aló à Bogota. Et l'on y bute sur le subjonctif, que « cuando » impose dès qu'on parle du futur.",
    tip: "Cuando au sens du futur demande le subjonctif : llámame cuando puedas, jamais « cuando puedes ».",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "¿Diga? ¿Quién es?",
        francais: "Allô ? Qui est-ce ?",
        note: "Diga ou dígame en Espagne, bueno au Mexique, aló en Colombie et au Pérou.",
      },
      {
        etranger: "¿De parte de quién?",
        francais: "C'est de la part de qui ?",
        note: "Formule figée, et la question la plus prévisible d'un standard espagnol.",
      },
      {
        etranger: "Te llamo luego, ¿vale?",
        francais: "Je te rappelle plus tard, d'accord ?",
        note: "Vale en Espagne. En Amérique latine, on finirait par ¿bueno? ou ¿listo?",
      },
      {
        etranger: "No te oigo bien.",
        francais: "Je t'entends mal.",
        note: "Oír, entendre sans le vouloir ; escuchar, écouter volontairement.",
      },
      {
        etranger: "Se me acabó la batería.",
        francais: "Je n'ai plus de batterie.",
        note: "La tournure met la personne en victime : « la batterie s'est finie sur moi ».",
      },
      {
        etranger: "Mándame un mensaje cuando llegues.",
        francais: "Envoie-moi un message quand tu arriveras.",
        note: "Cuando au sens du futur impose le subjonctif : llegues, jamais llegarás.",
      },
      {
        etranger: "Te paso la dirección por mensaje.",
        francais: "Je t'envoie l'adresse par message.",
        note: "Pasar, faire passer une information. Plus courant qu'enviar à l'oral.",
      },
      {
        etranger: "Perdona, me he equivocado de número.",
        francais: "Pardon, je me suis trompé de numéro.",
        note: "Equivocarse DE : de número, de puerta, de tren. La préposition est fixe.",
      },
      {
        etranger: "¿Me oyes ahora?",
        francais: "Tu m'entends maintenant ?",
        note: "Oír est irrégulier au présent : oigo, oyes, oye, oímos, oís, oyen.",
      },
      {
        etranger: "Llámame cuando puedas.",
        francais: "Appelle-moi quand tu pourras.",
        note: "Encore le subjonctif après cuando : puedas, jamais puedes.",
      },
    ],
  },
];
