/**
 * Espagnol — les pronominaux, les périphrases et les collocations.
 *
 * Troisième passe. Les deux premières ont ajouté des DOMAINES ; celle-ci
 * ajoute de la PROFONDEUR, et c'est ce qui manque le plus pour passer du B2 au
 * C1.
 *
 * L'espagnol n'a pas de verbes à particule ; il a deux mécanismes qui jouent
 * le même rôle et posent la même difficulté. Le PRONOM, qui change le sens du
 * verbe sans changer le verbe — ir et irse ne disent pas la même chose. Et la
 * PÉRIPHRASE, qui ajoute un aspect que la conjugaison seule ne porte pas :
 * llevar dos horas esperando dit une durée que « j'attends » ne dit pas.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_PERIFRASIS_COLOCACIONES: LotCartes[] = [
  {
    slug: "es-verbos-pronominales",
    category: "Verbes",
    title: "Le pronom qui change tout",
    statement:
      "Ir et irse, dormir et dormirse, quedar et quedarse. Le pronom ne rend pas le verbe réfléchi : il en fait un autre verbe.",
    tip: "La règle générale : le pronom marque souvent le passage d'un état à un autre. Dormir, c'est dormir ; dormirse, c'est s'endormir.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Me voy, ya es tarde.",
        francais: "Je m'en vais, il est tard.",
        note: "Irse, partir. Ir dirait seulement la destination : voy a casa.",
      },
      {
        etranger: "Se durmió en el sofá.",
        francais: "Il s'est endormi sur le canapé.",
        note: "Dormirse, s'endormir. Durmió dirait qu'il a dormi, sans le basculement.",
      },
      {
        etranger: "Quedamos a las ocho.",
        francais: "On se donne rendez-vous à huit heures.",
        note: "Quedar, convenir d'un rendez-vous. Quedarse voudrait dire rester.",
      },
      {
        etranger: "Me quedé en casa todo el día.",
        francais: "Je suis resté à la maison toute la journée.",
        note: "Quedarse, rester. Le pronom sépare nettement les deux verbes.",
      },
      {
        etranger: "Se bebió el vaso de un trago.",
        francais: "Il a bu le verre d'un trait.",
        note: "Beberse insiste sur l'achèvement : tout y est passé. Beber serait neutre.",
      },
      {
        etranger: "No me acuerdo de su nombre.",
        francais: "Je ne me souviens pas de son nom.",
        note: "Acordarse de, se souvenir. Acordar sans pronom veut dire convenir de.",
      },
      {
        etranger: "Acordaron subir los precios.",
        francais: "Ils ont convenu d'augmenter les prix.",
        note: "Acordar, décider ensemble. Le contraste avec la carte précédente est net.",
      },
      {
        etranger: "Se llevó el libro sin decir nada.",
        francais: "Il a emporté le livre sans rien dire.",
        note: "Llevarse, emporter. Llevar seul dit porter ou emmener.",
      },
      {
        etranger: "Ocúpate tú de la reserva.",
        francais: "Occupe-toi de la réservation.",
        note: "Ocuparse de, prendre en charge. Ocupar veut dire occuper un espace ou un poste.",
      },
      {
        etranger: "Se puso muy nervioso.",
        francais: "Il est devenu très nerveux.",
        note: "Ponerse + adjectif, devenir par changement rapide. Poner seul veut dire poser.",
      },
    ],
  },

  {
    slug: "es-perifrasis-gerundio",
    category: "Conjugaison",
    title: "Les périphrases avec le gérondif",
    statement:
      "Llevar, seguir, andar, venir + gérondif. Quatre verbes qui ajoutent une durée, une insistance ou un agacement que la conjugaison seule ne porte pas.",
    tip: "Llevar + durée + gérondif traduit « depuis » : llevo dos horas esperando, j'attends depuis deux heures. Aucun temps espagnol ne le dit aussi bien.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Llevaba tres días sin comer.",
        francais: "Cela faisait trois jours qu'il n'avait pas mangé.",
        note: "Llevar + durée + sin + infinitif. C'est la façon normale de dire « depuis » en espagnol.",
      },
      {
        etranger: "Sigue trabajando en el mismo sitio.",
        francais: "Elle travaille toujours au même endroit.",
        aussi: ["Elle continue de travailler au même endroit."],
        note: "Seguir + gérondif, continuer à. Seguir a + infinitif n'existe pas.",
      },
      {
        etranger: "Anda diciendo que se va.",
        francais: "Il raconte partout qu'il s'en va.",
        note: "Andar + gérondif ajoute une nuance d'agacement ou de dispersion.",
      },
      {
        etranger: "Vengo notando un cambio.",
        francais: "Je remarque un changement depuis quelque temps.",
        note: "Venir + gérondif dit une évolution qui court jusqu'au présent.",
      },
      {
        etranger: "Se fue corriendo.",
        francais: "Il est parti en courant.",
        note: "Ir + gérondif au passé décrit la manière du départ.",
      },
      {
        etranger: "Va mejorando poco a poco.",
        francais: "Il s'améliore peu à peu.",
        note: "Ir + gérondif dit le progrès graduel. Très employé pour la santé.",
      },
      {
        etranger: "Estuvo trabajando toda la noche.",
        francais: "Il a travaillé toute la nuit.",
        note: "Estar + gérondif au passé simple : une durée close, bornée aux deux bouts.",
      },
      {
        etranger: "Acabó aceptando la oferta.",
        francais: "Il a fini par accepter l'offre.",
        note: "Acabar + gérondif, finir par. Acabar de + infinitif dit tout autre chose.",
      },
      {
        etranger: "Llevamos años sin vernos.",
        francais: "Nous ne nous sommes pas vus depuis des années.",
        note: "Llevar + durée + sin + infinitif : la forme négative de la même périphrase.",
      },
      {
        etranger: "Seguimos sin noticias.",
        francais: "Nous restons sans nouvelles.",
        note: "Seguir sin, continuer à ne pas. Tournure très espagnole, sans calque français.",
      },
    ],
  },

  {
    slug: "es-perifrasis-infinitivo",
    category: "Conjugaison",
    title: "Les périphrases avec l'infinitif",
    statement:
      "Ponerse a, echarse a, dejar de, acabar de. Chaque périphrase découpe l'action autrement : son début brusque, son arrêt, son achèvement récent.",
    tip: "Acabar de + infinitif ne veut pas dire finir de : c'est le passé récent. Acabo de llegar, je viens d'arriver.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Acaban de anunciarlo.",
        francais: "Ils viennent de l'annoncer.",
        note: "Acabar de + infinitif, passé récent. Rien à voir avec finir de, qui se dit terminar de.",
      },
      {
        etranger: "Nos pusimos a trabajar en cuanto llegamos.",
        francais: "Nous nous sommes mis au travail dès notre arrivée.",
        note: "Ponerse a, se mettre à. Le début est volontaire ou soudain.",
      },
      {
        etranger: "Se echó a reír.",
        francais: "Il a éclaté de rire.",
        note: "Echarse a ne s'emploie qu'avec quelques verbes : reír, llorar, correr, volar.",
      },
      {
        etranger: "Dejaron de responder al teléfono.",
        francais: "Ils ont cessé de répondre au téléphone.",
        note: "Dejar de, cesser. Dejar seul veut dire laisser ou prêter.",
      },
      {
        etranger: "Volvió a insistir.",
        francais: "Il a insisté de nouveau.",
        note: "Volver a + infinitif traduit le préfixe re- du français : refaire, redire, redemander.",
      },
      {
        etranger: "Tengo que salir ahora.",
        francais: "Je dois sortir maintenant.",
        note: "Tener que, obligation concrète. Deber dit plutôt le devoir moral.",
      },
      {
        etranger: "Hay que avisarles cuanto antes.",
        francais: "Il faut les prévenir au plus vite.",
        note: "Hay que + infinitif, obligation impersonnelle. Aucun sujet n'est nommé.",
      },
      {
        etranger: "Está por decidir.",
        francais: "Cela reste à décider.",
        note: "Estar por + infinitif, ce qui n'est pas encore fait. Estar para dirait l'imminence.",
      },
      {
        etranger: "Llegó a ser director.",
        francais: "Il est parvenu à devenir directeur.",
        note: "Llegar a + infinitif, atteindre un point après un parcours.",
      },
      {
        etranger: "Vengo a proponerles algo.",
        francais: "Je viens vous proposer quelque chose.",
        note: "Venir a + infinitif dit le but de la venue, comme en français.",
      },
    ],
  },

  {
    slug: "es-colocaciones-verbos",
    category: "Vocabulaire",
    title: "Dar, hacer, tener, poner, echar",
    statement:
      "Dar un paseo, hacer caso, tener razón, echar de menos. Cinq verbes vides qui portent la moitié de l'espagnol courant, et dont le choix ne se déduit d'aucune règle.",
    tip: "Ces couples s'apprennent tels quels. Tener razón et non « ser razón », hacer caso et non « dar caso » : le français ne prédit rien ici.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Vamos a dar un paseo.",
        francais: "Allons faire un tour.",
        aussi: ["Allons nous promener."],
        note: "Dar un paseo, une vuelta, un salto. Le français fait là où l'espagnol donne.",
      },
      {
        etranger: "No me hizo caso.",
        francais: "Il ne m'a pas écouté.",
        aussi: ["Il n'a pas tenu compte de moi."],
        note: "Hacer caso a alguien, prêter attention. Dar caso n'existe pas.",
      },
      {
        etranger: "Tienes toda la razón.",
        francais: "Tu as entièrement raison.",
        note: "Tener razón, avoir raison. Estar en lo cierto se dit aussi, plus formel.",
      },
      {
        etranger: "Te echo de menos.",
        francais: "Tu me manques.",
        note: "Echar de menos, regretter l'absence. En Amérique latine on dit extrañar.",
      },
      {
        etranger: "Pon atención a lo que digo.",
        francais: "Fais attention à ce que je dis.",
        aussi: ["Sois attentif à ce que je dis."],
        note: "Poner atención ou prestar atención. Hacer atención n'existe pas.",
      },
      {
        etranger: "Le echaron la culpa a él.",
        francais: "On lui a mis la faute sur le dos.",
        aussi: ["On l'a rendu responsable."],
        note: "Echar la culpa a alguien. Le pronom le double le complément, obligatoirement.",
      },
      {
        etranger: "Hicimos las paces.",
        francais: "Nous nous sommes réconciliés.",
        note: "Hacer las paces, au pluriel. Le singulier hacer la paz appartient à la diplomatie.",
      },
      {
        etranger: "Dio la vuelta al mundo.",
        francais: "Il a fait le tour du monde.",
        note: "Dar la vuelta a algo, faire le tour. Dar una vuelta serait une simple promenade.",
      },
      {
        etranger: "No tengo ganas de discutir.",
        francais: "Je n'ai pas envie de discuter.",
        note: "Tener ganas de, avoir envie. Le mot ganas ne s'emploie qu'au pluriel dans ce sens.",
      },
      {
        etranger: "Me puse a ello enseguida.",
        francais: "Je m'y suis mis tout de suite.",
        note: "Ponerse a ello, s'y mettre. Ello est un neutre qui reprend toute une situation.",
      },
    ],
  },

  {
    slug: "es-colocaciones-adjetivos",
    category: "Vocabulaire",
    title: "L'adjectif qui va avec",
    statement:
      "Lluvia torrencial, viento fuerte, honda preocupación. L'espagnol a soudé certains adjectifs à certains noms, et le synonyme le plus proche sonne faux.",
    tip: "Il n'y a pas de règle : une pluie est torrencial, un vent est fuerte, et l'inverse ne se dit pas. Ces couples se retiennent ensemble ou pas du tout.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Cayó una lluvia torrencial.",
        francais: "Il est tombé une pluie battante.",
        note: "Lluvia torrencial, viento fuerte. L'inverse se remarque immédiatement.",
      },
      {
        etranger: "Hay honda preocupación en el sector.",
        francais: "Le secteur est profondément inquiet.",
        note: "Honda preocupación, la collocation des communiqués. Gran serait plus banal.",
      },
      {
        etranger: "Se recuperó por completo.",
        francais: "Il s'est complètement rétabli.",
        note: "Recuperarse por completo. Totalmente se dit aussi, entero jamais.",
      },
      {
        etranger: "Se libró por los pelos.",
        francais: "Il l'a échappé belle.",
        aussi: ["C'était juste."],
        note: "Por los pelos, littéralement par les cheveux. L'image diffère du français.",
      },
      {
        etranger: "Las pruebas son contundentes.",
        francais: "Les preuves sont accablantes.",
        note: "Pruebas contundentes, la collocation savante. Fuertes serait plat.",
      },
      {
        etranger: "Se enfrentan a una competencia feroz.",
        francais: "Ils affrontent une concurrence féroce.",
        note: "Competencia feroz ou dura. Fuerte competencia se dit moins.",
      },
      {
        etranger: "Tiene un interés personal en esto.",
        francais: "Elle y a un intérêt personnel.",
        note: "Un interés personal qui compromet l'impartialité. Le mot conflicto de intereses suit souvent.",
      },
      {
        etranger: "El plan topó con una férrea oposición.",
        francais: "Le projet s'est heurté à une opposition farouche.",
        note: "Férrea, de fer. Topar con, se heurter à.",
      },
      {
        etranger: "Es una idea muy extendida.",
        francais: "C'est une idée très répandue.",
        note: "Extendida pour une idée reçue. Común dirait la banalité, pas la diffusion.",
      },
      {
        etranger: "Las conversaciones llegaron a un punto delicado.",
        francais: "Les négociations ont atteint un point délicat.",
        note: "Delicado dit ici le sensible, pas le fragile. Le mot sensible existe et dit l'émotif.",
      },
    ],
  },

  {
    slug: "es-colocaciones-academicas",
    category: "Expressions",
    title: "Les couples de l'écrit savant",
    statement:
      "Sacar una conclusión, plantear una cuestión, cumplir un criterio, arrojar luz. L'écrit universitaire espagnol tient sur une trentaine de couples, toujours les mêmes.",
    tip: "Ces verbes ne s'échangent pas même quand leur sens semble proche. On saca une conclusion et on llega a un accord — jamais l'inverse.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Se pueden sacar dos conclusiones.",
        francais: "On peut en tirer deux conclusions.",
        note: "Sacar una conclusión, tirer. Hacer una conclusión ne se dit pas.",
      },
      {
        etranger: "Esto plantea una cuestión más.",
        francais: "Cela soulève une question de plus.",
        note: "Plantear, poser un problème. Levantar une question serait un calque de l'anglais.",
      },
      {
        etranger: "El artículo aborda tres cuestiones.",
        francais: "L'article traite trois questions.",
        note: "Abordar una cuestión, l'aborder frontalement. Le verbe est celui du navire.",
      },
      {
        etranger: "La muestra cumple los criterios.",
        francais: "L'échantillon satisfait aux critères.",
        aussi: ["L'échantillon remplit les critères."],
        note: "Cumplir un criterio, satisfaire. Le verbe dit aussi tenir une promesse.",
      },
      {
        etranger: "Llegaron a un acuerdo.",
        francais: "Ils sont parvenus à un accord.",
        note: "Llegar a un acuerdo. Sacar serait fautif ici, comme llegar pour une conclusion.",
      },
      {
        etranger: "El estudio respalda la teoría.",
        francais: "L'étude appuie la théorie.",
        aussi: ["L'étude vient étayer la théorie."],
        note: "Respaldar, soutenir par-derrière. L'image est celle du dossier de chaise.",
      },
      {
        etranger: "Esto pone en tela de juicio el método.",
        francais: "Cela remet en cause la méthode.",
        note: "Poner en tela de juicio, formule figée. Cuestionar dit la même chose plus brièvement.",
      },
      {
        etranger: "Los resultados arrojan luz sobre el proceso.",
        francais: "Les résultats éclairent le processus.",
        note: "Arrojar luz sobre, jeter de la lumière. Le verbe arrojar sert aussi pour un résultat.",
      },
      {
        etranger: "Discrepamos de esa afirmación.",
        francais: "Nous contestons cette affirmation.",
        note: "Discrepar de, être en désaccord avec. Le verbe est neutre, pas agressif.",
      },
      {
        etranger: "El argumento tiene poco peso.",
        francais: "L'argument a peu de poids.",
        note: "Tener peso, avoir du poids. Le sujet est l'argument, jamais la personne.",
      },
    ],
  },

  {
    slug: "es-verbos-soporte",
    category: "Grammaire en contexte",
    title: "Le verbe qui ne dit rien",
    statement:
      "Echar un vistazo, dar un paso, pegar un grito. L'espagnol transforme volontiers un verbe en nom, puis le fait porter par un verbe vide — et le résultat n'a pas le même sens.",
    tip: "Echar un vistazo n'est pas mirar : la forme nominale dit une occurrence unique et brève. C'est une nuance d'aspect que le français rend mal.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Échale un vistazo a esto.",
        francais: "Jette un œil à ça.",
        note: "Echar un vistazo, un regard bref. Mirar dirait l'action sans la borner.",
      },
      {
        etranger: "Voy a darme un baño.",
        francais: "Je vais prendre un bain.",
        note: "Darse un baño, une ducha, una vuelta. Le pronom marque que c'est pour soi.",
      },
      {
        etranger: "Pegó un grito tremendo.",
        francais: "Il a poussé un cri terrible.",
        note: "Pegar un grito, un salto, un susto. Le verbe pegar dit ici la brusquerie.",
      },
      {
        etranger: "Vamos a hacer una pausa.",
        francais: "Faisons une pause.",
        note: "Hacer una pausa. Tomar un descanso se dit aussi, un peu plus long.",
      },
      {
        etranger: "Dio un paso atrás.",
        francais: "Il a fait un pas en arrière.",
        note: "Dar un paso, au propre comme au figuré : dar un paso adelante, avancer.",
      },
      {
        etranger: "Tuvimos una charla sobre eso.",
        francais: "Nous en avons discuté un moment.",
        note: "Tener una charla, une conversation informelle et brève.",
      },
      {
        etranger: "Hizo un intento y lo dejó.",
        francais: "Il a fait une tentative puis a laissé tomber.",
        note: "Hacer un intento, une tentative unique. Intentar dirait l'effort sans le borner.",
      },
      {
        etranger: "Toma asiento, por favor.",
        francais: "Assieds-toi, je t'en prie.",
        note: "Tomar asiento est plus poli que siéntate, qui sonne comme un ordre.",
      },
      {
        etranger: "Se dieron un abrazo.",
        francais: "Ils se sont pris dans les bras.",
        note: "Darse un abrazo, un beso. Le réciproque passe par le pronom pluriel.",
      },
      {
        etranger: "Le dio un empujón a la puerta.",
        francais: "Il a poussé un coup la porte.",
        aussi: ["Il a donné une poussée à la porte."],
        note: "Dar un empujón : une poussée brève, moins insistante qu'empujar.",
      },
    ],
  },

  {
    slug: "es-sinonimos-decir",
    category: "Verbes",
    title: "Decir, contar, hablar, comentar",
    statement:
      "Quatre verbes pour ce que le français dit avec « dire » et « raconter ». Ils se distinguent par ce qui les suit et par le degré de développement.",
    tip: "Decir une chose, contar une histoire, hablar de un sujet, comentar une nouvelle. La construction est le critère le plus fiable.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Dijo que vendría el jueves.",
        francais: "Il a dit qu'il viendrait jeudi.",
        note: "Decir + ce qui est dit. Le complément de personne se met au datif : me dijo.",
      },
      {
        etranger: "Cuéntame qué pasó.",
        francais: "Raconte-moi ce qui s'est passé.",
        note: "Contar suppose un récit développé. Decir serait trop bref pour cela.",
      },
      {
        etranger: "Habla cuatro idiomas.",
        francais: "Il parle quatre langues.",
        note: "Hablar + langue, sans préposition ni article.",
      },
      {
        etranger: "Hablamos de ello durante horas.",
        francais: "Nous en avons parlé pendant des heures.",
        note: "Hablar de, discuter d'un sujet. Hablar sobre est plus formel.",
      },
      {
        etranger: "Comentó la noticia en voz baja.",
        francais: "Il a commenté la nouvelle à voix basse.",
        note: "Comentar, dire un mot à propos de. Le verbe suppose un sujet déjà connu.",
      },
      {
        etranger: "Me contó un chiste malísimo.",
        francais: "Il m'a raconté une blague épouvantable.",
        note: "Contar un chiste, un cuento, una historia. Decir ne convient dans aucun cas.",
      },
      {
        etranger: "Dilo otra vez, por favor.",
        francais: "Répète, s'il te plaît.",
        note: "Decir algo otra vez. Repetir existe et sonne plus scolaire.",
      },
      {
        etranger: "Nunca habla de su trabajo.",
        francais: "Il ne parle jamais de son travail.",
        note: "Hablar de pour un sujet récurrent. Contar supposerait un récit unique.",
      },
      {
        etranger: "Se nota la diferencia.",
        francais: "La différence se remarque.",
        aussi: ["On voit la différence."],
        note: "Notarse, se remarquer. La tournure pronominale évite de nommer qui remarque.",
      },
      {
        etranger: "El informe dice lo contrario.",
        francais: "Le rapport dit le contraire.",
        note: "Decir s'emploie pour un texte : el cartel dice, la ley dice.",
      },
    ],
  },
];
