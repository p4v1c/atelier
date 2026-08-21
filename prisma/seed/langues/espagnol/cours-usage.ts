/**
 * Espagnol — prononciation, registres, prépositions et écrit.
 *
 * Ce qui ne relève pas de la grammaire mais décide de l'aisance : savoir où
 * tombe l'accent, quand tutoyer, quelle préposition employer, et comment
 * écrire sans calquer le français.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_COURS_USAGE: LotCartes[] = [
  {
    slug: "es-cours-accent",
    category: "Prononciation",
    title: "L'accent tonique, et l'accent écrit",
    statement:
      "Le français accentue toujours la dernière syllabe. L'espagnol, non — et déplacer l'accent change parfois le sens du mot.",
    tip: "Mot finissant par voyelle, -n ou -s : avant-dernière syllabe. Autre consonne : dernière. L'accent écrit signale l'exception.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Où tombe l'accent",
      sections: [
        {
          titre: "La règle en deux lignes",
          texte:
            "Le français accentue mécaniquement la dernière syllabe, et c'est ce réflexe qui rend un francophone reconnaissable dès trois mots d'espagnol.\n\nL'espagnol suit deux règles simples. Si le mot finit par une voyelle, par -n ou par -s, l'accent tombe sur l'AVANT-DERNIÈRE syllabe : casa, hablan, lunes. Si le mot finit par toute autre consonne, il tombe sur la DERNIÈRE : hablar, feliz, papel.\n\nToute exception à ces deux règles porte un accent écrit. L'accent n'est donc pas décoratif : il dit précisément « ici, la règle ne s'applique pas ». Café, porque le mot finit par une voyelle mais s'accentue à la fin ; árbol, parce qu'il finit par une consonne mais s'accentue avant.",
          visuels: [
            {
              type: "tableau",
              titre: "La règle, et ce qui la signale",
              colonnes: ["Fin du mot", "Accent attendu", "Exemple", "Exception écrite"],
              lignes: [
                ["voyelle", "avant-dernière", "casa, libro", "café, sofá"],
                ["-n", "avant-dernière", "hablan, joven", "también, jamón"],
                ["-s", "avant-dernière", "lunes, casas", "inglés, después"],
                ["autre consonne", "dernière", "hablar, feliz", "árbol, fácil"],
                ["antépénultième", "toujours écrit", "—", "música, rápido"],
              ],
            },
          ],
        },
        {
          titre: "Quand l'accent change le mot",
          texte:
            "Déplacer l'accent ne fait pas seulement un accent étranger : cela produit parfois un autre mot.\n\nHablo, je parle, contre habló, il parla. Trabajo, je travaille, contre trabajó, il travailla. Toute la première personne du présent s'oppose ainsi à la troisième du passé simple, et la seule différence est l'accent.\n\nAilleurs, l'accent écrit distingue des homonymes : el, le, contre él, lui ; tu, ton, contre tú, toi ; si, si, contre sí, oui ; mas, mais, contre más, plus ; se, pronom, contre sé, je sais ; que, que, contre qué, quoi.\n\nEt un cas resté célèbre : término, le terme ; termino, je termine ; terminó, il termina.",
        },
        {
          titre: "Les sons qui piègent un francophone",
          texte:
            "Le j et le g devant e ou i se prononcent comme une jota, un raclement de gorge : jamón, gente. Rien à voir avec le j français.\n\nLe h ne se prononce jamais : hola se dit « ola », hombre se dit « ombre ».\n\nLe v et le b se prononcent identiquement, entre les deux sons français : vaca et baca sont homophones.\n\nLe r initial et le rr sont roulés fortement : perro, le chien, contre pero, mais. La différence est audible et sémantique.\n\nEnfin, le ñ vaut notre gn : España se dit « Espagna ».",
        },
      ],
    },
    cartes: [
      { etranger: "Trabajo los sábados.", francais: "Je travaille le samedi.", note: "Accent sur tra-BA-jo, avant-dernière syllabe : le mot finit par une voyelle." },
      { etranger: "Ella trabajó todo el día.", francais: "Elle a travaillé toute la journée.", note: "trabajó, accent écrit à la fin : c'est le passé simple, pas le présent." },
      { etranger: "El árbol es alto.", francais: "L'arbre est grand.", note: "árbol finit par une consonne mais s'accentue avant : d'où l'accent écrit." },
      { etranger: "¿Tú qué piensas?", francais: "Toi, qu'est-ce que tu en penses ?", note: "tú avec accent, le pronom ; tu sans accent, le possessif." },
      { etranger: "Sí, sé la respuesta.", francais: "Oui, je connais la réponse.", note: "sí, oui, et sé, je sais : deux accents qui distinguent des homonymes." },
      { etranger: "Quiero más café.", francais: "Je veux plus de café.", note: "más, plus ; mas sans accent voudrait dire mais." },
      { etranger: "La música es rápida.", francais: "La musique est rapide.", note: "Accent sur l'antépénultième : toujours écrit, sans exception." },
      { etranger: "El perro corre.", francais: "Le chien court.", note: "perro, r roulé fort ; pero, mais, avec un r simple." },
      { etranger: "Hola, ¿cómo estás?", francais: "Salut, comment ça va ?", note: "Le h ne se prononce jamais. cómo interrogatif prend l'accent." },
      { etranger: "La gente de aquí es amable.", francais: "Les gens d'ici sont aimables.", note: "gente : le g devant e se racle comme une jota. Et gente est singulier." },
    ],
  },

  {
    slug: "es-cours-registres",
    category: "Les bases",
    title: "Tutoyer, vouvoyer, et le vosotros",
    statement:
      "L'espagnol tutoie beaucoup plus que le français, et le pluriel change selon les continents. Se tromper de registre est plus visible qu'une faute de grammaire.",
    tip: "En Espagne, vosotros pour un groupe qu'on tutoie. En Amérique latine, ustedes pour tous les groupes, sans exception.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les registres d'adresse",
      sections: [
        {
          titre: "Quatre formes, pas deux",
          texte:
            "Le français a tu et vous. L'espagnol en a quatre, parce qu'il distingue le nombre en plus du registre.\n\nTú, tutoiement singulier. Usted, vouvoiement singulier. Vosotros, tutoiement pluriel — en Espagne seulement. Ustedes, vouvoiement pluriel, et en Amérique latine, pluriel unique pour tout le monde.\n\nParticularité qui surprend : usted et ustedes se conjuguent à la troisième personne. Usted habla, littéralement « votre grâce parle ». C'est un reste de l'ancien vuestra merced, dont usted est la contraction.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même groupe, deux continents",
              colonnes: [
                {
                  titre: "Espagne",
                  points: [
                    "tú hablas — tutoiement singulier",
                    "usted habla — vouvoiement singulier",
                    "vosotros habláis — tutoiement pluriel",
                    "ustedes hablan — vouvoiement pluriel",
                  ],
                },
                {
                  titre: "Amérique latine",
                  points: [
                    "tú hablas — ou vos hablás en Argentine",
                    "usted habla — vouvoiement singulier",
                    "vosotros — n'existe pas",
                    "ustedes hablan — TOUS les pluriels",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quand tutoyer",
          texte:
            "Beaucoup plus vite qu'en français. En Espagne, on tutoie les collègues dès le premier jour, les commerçants, les inconnus de son âge, et souvent les gens plus âgés dans un cadre détendu. Vouvoyer quelqu'un de trente ans peut même créer une distance vexante.\n\nUsted reste de mise avec une personne nettement plus âgée qu'on ne connaît pas, dans un cadre administratif ou médical, et dans un service haut de gamme.\n\nEn Amérique latine, l'usage est plus formel, et varie beaucoup selon les pays : la Colombie vouvoie largement, l'Argentine tutoie avec vos, le Mexique se situe entre les deux. Dans le doute, on suit ce que l'autre emploie.",
        },
        {
          titre: "Le voseo",
          texte:
            "En Argentine, en Uruguay, au Paraguay et dans une partie de l'Amérique centrale, tú est remplacé par vos, avec sa conjugaison propre : vos hablás, vos tenés, vos sos.\n\nL'accent se déplace sur la dernière syllabe, et l'impératif suit : hablá, vení, tené. C'est parfaitement standard là-bas, et enseigné comme tel.\n\nCe n'est pas indispensable à apprendre, mais il faut le reconnaître : un Argentin ne dira jamais tú tienes, il dira vos tenés.",
        },
      ],
    },
    cartes: [
      { etranger: "¿De dónde eres?", francais: "Tu viens d'où ?", note: "Tutoiement, la forme la plus courante entre inconnus du même âge." },
      { etranger: "¿De dónde es usted?", francais: "D'où venez-vous ?", note: "Usted se conjugue à la troisième personne : es, et non eres." },
      { etranger: "¿Vosotros qué opináis?", francais: "Et vous, qu'en pensez-vous ?", note: "Vosotros, tutoiement pluriel — Espagne uniquement. Terminaison en -áis." },
      { etranger: "¿Ustedes vienen mañana?", francais: "Vous venez demain ?", note: "En Amérique latine, ustedes couvre tous les pluriels, tutoiement compris." },
      { etranger: "Perdone, ¿me puede ayudar?", francais: "Excusez-moi, pouvez-vous m'aider ?", note: "Vouvoiement : perdone et non perdona." },
      { etranger: "Perdona, ¿me puedes ayudar?", francais: "Excuse-moi, tu peux m'aider ?", note: "La même demande, au tutoiement." },
      { etranger: "Podemos tutearnos.", francais: "On peut se tutoyer.", note: "La formule pour passer au tutoiement, si le besoin s'en fait sentir." },
      { etranger: "Vos tenés razón.", francais: "Tu as raison.", note: "Le voseo argentin : vos au lieu de tú, avec sa conjugaison propre." },
      { etranger: "Siéntese, por favor.", francais: "Asseyez-vous, je vous prie.", note: "Impératif de vouvoiement, formé sur le subjonctif." },
      { etranger: "Buenos días, señora.", francais: "Bonjour, madame.", note: "Buenos días jusqu'au déjeuner, buenas tardes ensuite, buenas noches après la tombée du jour." },
    ],
  },

  {
    slug: "es-cours-prepositions",
    category: "Grammaire en contexte",
    title: "A, de, en : les prépositions qui piègent",
    statement:
      "Elles ne se superposent pas au français. Le a devant une personne complément d'objet n'a même pas d'équivalent chez nous.",
    tip: "Un complément d'objet direct qui est une personne prend a : veo a Juan. C'est obligatoire, et c'est propre à l'espagnol.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les prépositions espagnoles",
      sections: [
        {
          titre: "Le a personnel, sans équivalent français",
          texte:
            "Quand le complément d'objet direct d'un verbe est une personne déterminée, l'espagnol place un a devant. Veo a Juan, je vois Juan. Busco a mi hermana, je cherche ma sœur.\n\nLe français n'a rien de tel, et c'est pourquoi l'omettre est la faute la plus commune. Elle ne gêne pas la compréhension, mais elle s'entend immédiatement.\n\nLa règle s'étend aux animaux familiers — busco a mi perro — et disparaît devant une personne indéterminée : busco un médico, je cherche un médecin, n'importe lequel.\n\nEt elle ne s'applique jamais après tener : tengo dos hermanos, sans a.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce que chaque préposition couvre",
              colonnes: ["Préposition", "Emploi", "Exemple"],
              lignes: [
                ["a", "direction, heure, COD personnel", "voy a Madrid · a las tres · veo a Juan"],
                ["de", "origine, possession, matière", "soy de Nantes · el coche de Ana"],
                ["en", "lieu où l'on est, moyen, mois", "estoy en casa · en tren · en mayo"],
                ["por", "cause, moyen, passage, durée", "gracias por todo · paso por Madrid"],
                ["para", "but, destinataire, échéance", "es para ti · para mañana"],
                ["desde", "point de départ", "desde 2019 · desde aquí"],
                ["hasta", "point d'arrivée", "hasta mañana · hasta la plaza"],
              ],
            },
          ],
        },
        {
          titre: "En, là où le français dit « à » ou « dans »",
          texte:
            "En couvre le lieu où l'on se trouve : estoy en casa, en Madrid, en el trabajo. Le français hésite entre « à », « dans » et « chez » ; l'espagnol emploie en dans les trois cas.\n\nA marque le mouvement vers : voy a casa, voy a Madrid. La différence entre estoy en Madrid et voy a Madrid est nette et systématique.\n\nEn sert aussi au moyen de transport — en tren, en coche, en avión — sauf à pied, qui se dit a pie. Et aux mois et saisons : en mayo, en verano.",
        },
        {
          titre: "Les verbes qui imposent leur préposition",
          texte:
            "Comme en français, certains verbes exigent une préposition, mais pas la même.\n\nAvec a : empezar a, aprender a, ayudar a, invitar a, volver a — ce dernier voulant dire « refaire quelque chose », volver a llamar, rappeler.\n\nAvec de : acabar de, qui veut dire « venir de » — acabo de llegar, je viens d'arriver ; tratar de, essayer ; dejar de, arrêter de ; olvidarse de, oublier.\n\nAvec en : pensar en, penser à ; confiar en, faire confiance à ; insistir en.\n\nEt quelques-uns se passent de préposition là où le français en met une : buscar, chercher ; escuchar, écouter ; mirar, regarder ; esperar, attendre. On dit escucho la radio, jamais « escucho a la radio ».",
        },
      ],
    },
    cartes: [
      { etranger: "Veo a Juan todos los días.", francais: "Je vois Juan tous les jours.", note: "Le a personnel devant un complément d'objet qui est une personne." },
      { etranger: "Busco un médico.", francais: "Je cherche un médecin.", note: "Indéterminé : pas de a. Busco a mi médico en prendrait un." },
      { etranger: "Estoy en casa.", francais: "Je suis à la maison.", note: "En pour le lieu où l'on est." },
      { etranger: "Voy a casa.", francais: "Je rentre à la maison.", note: "A pour le mouvement vers." },
      { etranger: "Acabo de llegar.", francais: "Je viens d'arriver.", note: "Acabar de rend exactement notre « venir de »." },
      { etranger: "Empecé a estudiar en mayo.", francais: "J'ai commencé à étudier en mai.", note: "empezar a, et en devant un mois." },
      { etranger: "Estoy pensando en ti.", francais: "Je pense à toi.", note: "pensar en, jamais pensar a." },
      { etranger: "Escucho la radio.", francais: "J'écoute la radio.", note: "Escuchar se passe de préposition, contrairement au français." },
      { etranger: "Volvió a llamar.", francais: "Il a rappelé.", note: "volver a + infinitif veut dire refaire quelque chose." },
      { etranger: "Voy en tren, no a pie.", francais: "J'y vais en train, pas à pied.", note: "En pour les transports, mais a pie pour la marche." },
    ],
  },

  {
    slug: "es-cours-ecrire",
    category: "Travail et études",
    title: "Écrire en espagnol sans calquer le français",
    statement:
      "Ponctuation, majuscules, connecteurs : l'écrit espagnol suit des conventions propres, et les ignorer se voit dès la première ligne.",
    tip: "Les questions et exclamations s'ouvrent par un signe inversé : ¿ y ! Ce n'est pas facultatif.",
    difficulty: 2,
    niveau: "B1",
    cartes: [
      { etranger: "¿Cuándo llegas?", francais: "Tu arrives quand ?", note: "Le point d'interrogation inversé ouvre la question : il n'est pas décoratif." },
      { etranger: "¡Qué sorpresa!", francais: "Quelle surprise !", note: "Même chose pour l'exclamation. Et pas d'espace avant le signe final." },
      { etranger: "Muy señores míos:", francais: "Madame, Monsieur,", note: "Formule d'appel quand on ignore à qui l'on écrit. Deux points, jamais une virgule." },
      { etranger: "el lunes tres de mayo", francais: "le lundi trois mai", note: "Jours et mois sans majuscule, contrairement à l'anglais." },
      { etranger: "Hablo español y francés.", francais: "Je parle espagnol et français.", note: "Les langues et les nationalités ne prennent pas de majuscule." },
      { etranger: "Sin embargo, no estoy de acuerdo.", francais: "Cependant, je ne suis pas d'accord.", note: "Sin embargo, le connecteur d'opposition standard à l'écrit." },
      { etranger: "Por lo tanto, hay que cambiarlo.", francais: "Par conséquent, il faut le changer.", note: "Por lo tanto pour la conséquence ; por eso, plus oral." },
      { etranger: "En primer lugar, conviene recordar que…", francais: "En premier lieu, il convient de rappeler que…", note: "En primer lugar, en segundo lugar : la charpente d'un texte argumenté." },
      { etranger: "A modo de conclusión,", francais: "En guise de conclusion,", note: "Plus élégant que en conclusión, qui est correct mais plat." },
      { etranger: "Quedo a la espera de su respuesta.", francais: "Dans l'attente de votre réponse.", note: "Formule de clôture standard d'une lettre formelle." },
    ],
  },
];
