/**
 * Espagnol — les niveaux A2 et B2.
 *
 * Le A2 comble ce qui manque entre les premières phrases et la conversation
 * suivie ; le B2 aborde ce qui distingue un espagnol correct d'un espagnol
 * qui sonne juste — les nuances de temps, les tournures idiomatiques, la
 * langue de la presse.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_AVANCE: LotCartes[] = [
  {
    slug: "es-sante-corps",
    category: "Vie quotidienne",
    title: "Le corps, la santé, le médecin",
    statement:
      "Décrire une douleur, prendre rendez-vous, comprendre une ordonnance. Le vocabulaire qu'on regrette de ne pas avoir au moment où il sert.",
    tip: "La douleur se dit avec doler, construit comme gustar : me duele la cabeza, me duelen los pies.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Me duele la garganta.", francais: "J'ai mal à la gorge.", note: "doler se construit comme gustar : c'est la gorge qui fait mal." },
      { etranger: "Me duelen los pies.", francais: "J'ai mal aux pieds.", note: "Pluriel : duelen, parce que ce sont les pieds qui font mal." },
      { etranger: "Tengo fiebre desde ayer.", francais: "J'ai de la fièvre depuis hier.", note: "Desde pour un point de départ ; desde hace pour une durée." },
      { etranger: "Quería pedir cita con el médico.", francais: "Je voudrais prendre rendez-vous avec le médecin.", note: "Pedir cita : l'expression consacrée." },
      { etranger: "¿Tiene algo para el dolor de cabeza?", francais: "Vous avez quelque chose contre le mal de tête ?", note: "Algo para + le mal : la formule standard à la pharmacie." },
      { etranger: "Soy alérgico a la penicilina.", francais: "Je suis allergique à la pénicilline.", note: "Ser alérgico a, avec ser : c'est une caractéristique durable, pas un état passager." },
      { etranger: "Me encuentro mal.", francais: "Je ne me sens pas bien.", aussiEtranger: ["Me siento mal."], note: "Encontrarse pour l'état ; sentirse est aussi correct." },
      { etranger: "Tómese una pastilla cada ocho horas.", francais: "Prenez un comprimé toutes les huit heures.", note: "Impératif de vouvoiement, courant dans une consigne médicale." },
      { etranger: "¿Dónde está la farmacia de guardia?", francais: "Où est la pharmacie de garde ?", note: "La farmacia de guardia, celle ouverte la nuit ou le dimanche : une institution espagnole." },
      { etranger: "Que te mejores.", francais: "Remets-toi bien.", aussi: ["Bon rétablissement."], note: "Subjonctif figé : la formule de politesse standard." },
    ],
  },

  {
    slug: "es-maison-ville",
    category: "Vie quotidienne",
    title: "Le logement et la ville",
    statement:
      "Chercher un appartement, décrire un quartier, régler un problème. Le vocabulaire de qui s'installe plutôt que de qui visite.",
    tip: "Le verbe haber impersonnel se dit hay au présent, et ne se met jamais au pluriel : hay un coche, hay tres coches.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Busco un piso de dos habitaciones.", francais: "Je cherche un trois-pièces.", aussi: ["Je cherche un appartement avec deux chambres."], aussiEtranger: ["Busco un departamento de dos habitaciones."], note: "Habitación, la chambre : deux chambres plus le séjour font un trois-pièces en français. Piso en Espagne, departamento en Amérique latine — et piso veut aussi dire étage." },
      { etranger: "¿Cuánto es el alquiler?", francais: "Le loyer est de combien ?", aussiEtranger: ["¿Cuánto es la renta?"], note: "Alquiler dans la vie courante en Espagne, renta au Mexique — et renta aussi en Espagne dans le vocabulaire juridique du bail." },
      { etranger: "Está en el tercer piso, sin ascensor.", francais: "C'est au troisième étage, sans ascenseur.", note: "tercero devient tercer devant un nom masculin." },
      { etranger: "Hay tres bares en la misma calle.", francais: "Il y a trois bars dans la même rue.", note: "Hay reste invariable, même devant un pluriel : jamais « han tres bares »." },
      { etranger: "El barrio está muy bien comunicado.", francais: "Le quartier est très bien desservi.", note: "Bien comunicado : bien relié par les transports." },
      { etranger: "No funciona la calefacción.", francais: "Le chauffage ne marche pas.", note: "Funcionar pour un appareil qui marche ou non ; trabajar, calqué du français « travailler », ne convient pas ici." },
      { etranger: "¿Los gastos están incluidos?", francais: "Les charges sont comprises ?", note: "Los gastos, les charges — faux ami de « les frais », qui se dirait plutôt los costes." },
      { etranger: "Hay que firmar el contrato.", francais: "Il faut signer le contrat.", note: "Hay que : obligation impersonnelle." },
      { etranger: "Me mudo el mes que viene.", francais: "Je déménage le mois prochain.", note: "Mudarse. El mes que viene, littéralement le mois qui vient." },
      { etranger: "El casero no contesta.", francais: "Le propriétaire ne répond pas.", aussiEtranger: ["El propietario no contesta."], note: "Casero, le bailleur ; propietario est plus neutre." },
    ],
  },

  {
    slug: "es-nuances-temps",
    category: "Grammaire en contexte",
    title: "Llevar, seguir, acabar : dire la durée autrement",
    statement:
      "L'espagnol dispose de périphrases que le français rend par des adverbes. Les employer change radicalement le naturel d'une phrase.",
    tip: "Llevo tres años aquí vaut mieux que estoy aquí desde hace tres años — c'est la tournure que les hispanophones emploient d'abord.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les périphrases verbales",
      sections: [
        {
          titre: "Dire depuis combien de temps",
          texte:
            "Trois façons coexistent, et elles ne sont pas interchangeables en fréquence.\n\nLlevar + durée + gérondif est la plus courante et la plus naturelle : llevo tres años estudiando español. Elle n'a pas d'équivalent structurel en français, ce qui explique qu'un francophone ne la produise jamais spontanément.\n\nDesde hace + durée est correcte et proche du français : estudio español desde hace tres años. Elle sonne un peu plus scolaire.\n\nHace + durée + que + verbe est également juste : hace tres años que estudio español.\n\nLes trois disent la même chose. Savoir produire la première est ce qui fait la différence.",
          visuels: [
            {
              type: "tableau",
              titre: "Les périphrases les plus employées",
              colonnes: ["Structure", "Sens", "Exemple"],
              lignes: [
                ["llevar + gérondif", "depuis combien de temps", "llevo dos horas esperando"],
                ["seguir + gérondif", "continuer à", "sigue lloviendo"],
                ["acabar de + infinitif", "venir de", "acabo de llegar"],
                ["volver a + infinitif", "refaire", "volvió a llamar"],
                ["ponerse a + infinitif", "se mettre à", "se puso a llover"],
                ["dejar de + infinitif", "arrêter de", "dejé de fumar"],
                ["ir a + infinitif", "aller faire", "voy a salir"],
                ["estar a punto de", "être sur le point de", "está a punto de salir"],
              ],
            },
          ],
        },
        {
          titre: "Continuer, cesser, recommencer",
          texte:
            "Seguir et continuar suivis du gérondif disent la continuation : sigue lloviendo, il pleut toujours. Le français emploie un adverbe là où l'espagnol emploie un verbe.\n\nDejar de dit l'arrêt : dejé de fumar, j'ai arrêté de fumer. Attention à la négation, qui inverse le sens de façon surprenante : no dejes de llamarme veut dire « ne manque pas de m'appeler », donc appelle-moi.\n\nVolver a dit la répétition : volvió a llamar, il a rappelé. Le français dit « re- », l'espagnol dit volver a.\n\nPonerse a dit le début soudain : se puso a llover, il s'est mis à pleuvoir.",
        },
        {
          titre: "Le gérondif, et ce qu'il ne fait pas",
          texte:
            "Le gérondif espagnol se forme en -ando pour les verbes en -ar, en -iendo pour les autres : hablando, comiendo, viviendo.\n\nIl marque l'action en cours, jamais un état : estoy comiendo, je suis en train de manger. On ne dit pas « estoy siendo cansado » pour « je suis fatigué » — mais estar siendo existe avec un attribut d'attitude : estás siendo injusto.\n\nSurtout, il ne s'emploie jamais comme un nom : « fumer est mauvais » se dit fumar es malo, avec l'infinitif comme en français, jamais « fumando es malo ». C'est l'anglais qui met ici un gérondif.\n\nEt il ne s'emploie pas après une préposition : antes de salir, avant de sortir, avec l'infinitif là encore.",
        },
      ],
    },
    cartes: [
      { etranger: "Llevo tres años estudiando español.", francais: "J'étudie l'espagnol depuis trois ans.", note: "La tournure la plus naturelle, et celle qu'un francophone ne produit jamais seul." },
      { etranger: "Llevo dos horas esperando.", francais: "J'attends depuis deux heures.", note: "Llevar + durée + gérondif : la tournure la plus naturelle pour dire depuis combien de temps." },
      { etranger: "Sigue lloviendo.", francais: "Il pleut toujours.", note: "Seguir + gérondif là où le français met un adverbe." },
      { etranger: "Acabo de hablar con ella.", francais: "Je viens de lui parler.", note: "Acabar de + infinitif, venir de faire quelque chose à l'instant." },
      { etranger: "Dejé de fumar hace un año.", francais: "J'ai arrêté de fumer il y a un an.", note: "Dejar de + infinitif, arrêter de faire quelque chose." },
      { etranger: "No dejes de avisarme.", francais: "Ne manque pas de me prévenir.", note: "La négation de dejar de inverse le sens : cela veut dire préviens-moi." },
      { etranger: "Se puso a llover de repente.", francais: "Il s'est mis à pleuvoir d'un coup.", note: "Ponerse a marque le début soudain." },
      { etranger: "Está a punto de salir.", francais: "Il est sur le point de sortir.", note: "Estar a punto de + infinitif, être sur le point de." },
      { etranger: "Fumar es malo para la salud.", francais: "Fumer est mauvais pour la santé.", note: "Infinitif comme sujet, jamais le gérondif." },
      { etranger: "Antes de salir, cierra la ventana.", francais: "Avant de sortir, ferme la fenêtre.", note: "Après une préposition, l'infinitif — jamais le gérondif." },
    ],
  },

  {
    slug: "es-presse",
    category: "Travail et études",
    title: "Lire la presse et écouter les informations",
    statement:
      "Le vocabulaire des titres et des journaux télévisés. Il est étroit, très répétitif, et le connaître ouvre d'un coup une grande partie des médias.",
    tip: "Les titres de presse suppriment articles et verbes : « Detenido el responsable » pour « Le responsable a été arrêté ».",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Según fuentes oficiales, el acuerdo está cerrado.", francais: "Selon des sources officielles, l'accord est conclu.", note: "Formule omniprésente dans la presse." },
      { etranger: "El Gobierno anunció nuevas medidas.", francais: "Le gouvernement a annoncé de nouvelles mesures.", note: "Gobierno prend une majuscule quand il désigne l'institution." },
      { etranger: "La huelga afecta al transporte público.", francais: "La grève touche les transports publics.", note: "Afectar a : la préposition est obligatoire." },
      { etranger: "El paro bajó dos puntos.", francais: "Le chômage a baissé de deux points.", note: "El paro en Espagne, el desempleo en Amérique latine." },
      { etranger: "Según los últimos datos, el paro ha bajado.", francais: "D'après les derniers chiffres, le chômage a baissé.", note: "Datos, les données ou les chiffres ; jamais fechas, qui sont des dates." },
      { etranger: "Se prevé un aumento de precios.", francais: "Une hausse des prix est prévue.", note: "Le se impersonnel, très employé dans la presse." },
      { etranger: "El acuerdo entró en vigor el lunes.", francais: "L'accord est entré en vigueur lundi.", note: "Entrar en vigor, entrer en vigueur — sans article, comme une locution figée." },
      { etranger: "La cifra supera las previsiones.", francais: "Le chiffre dépasse les prévisions.", note: "Superar, dépasser. Las previsiones, les prévisions." },
      { etranger: "El juicio se celebrará en marzo.", francais: "Le procès se tiendra en mars.", note: "Celebrarse pour un événement qui a lieu, sans connotation festive." },
      { etranger: "Los sindicatos convocaron una manifestación.", francais: "Les syndicats ont appelé à une manifestation.", note: "Convocar una manifestación, appeler à manifester. Le mot ne se termine pas en -tion comme en français." },
    ],
  },

  {
    slug: "es-nuances-b2",
    category: "Expressions",
    title: "Nuancer, concéder, reprendre la parole",
    statement:
      "Les tournures qui permettent de discuter plutôt que d'énoncer : concéder avant d'objecter, relancer, se reprendre. C'est ce qui fait une conversation.",
    tip: "Concéder avant d'objecter est un réflexe espagnol : sí, pero… ou tienes razón, aunque…",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      { etranger: "Tienes razón, aunque yo lo veo distinto.", francais: "Tu as raison, même si je le vois autrement.", note: "Aunque + indicatif quand le fait est admis ; + subjonctif quand il est hypothétique." },
      { etranger: "Ahora que lo dices…", francais: "Maintenant que tu le dis…", note: "Sert à relancer en reprenant l'idée de l'autre." },
      { etranger: "No es que no quiera, es que no puedo.", francais: "Ce n'est pas que je ne veuille pas, c'est que je ne peux pas.", note: "No es que appelle le subjonctif ; es que reste à l'indicatif." },
      { etranger: "Por cierto, se me olvidaba.", francais: "Au fait, j'allais oublier.", note: "Se me olvidaba : la construction rejette la faute sur l'oubli, pas sur soi." },
      { etranger: "O sea, que no vienes.", francais: "C'est-à-dire que tu ne viens pas.", note: "O sea reformule ; c'est le tic de langage le plus répandu d'Espagne." },
      { etranger: "En realidad no me importa.", francais: "En fait, ça m'est égal.", note: "Importar se construit comme gustar." },
      { etranger: "Depende de cómo lo mires.", francais: "Ça dépend de comment tu le regardes.", note: "Après depende de, l'interrogatif cómo garde son accent écrit même sans point d'interrogation." },
      { etranger: "Ni mucho menos.", francais: "Loin de là.", aussi: ["Absolument pas."], note: "Dément fortement une affirmation entière — à la différence de ni de lejos, qui porte sur une quantité ou un degré." },
      { etranger: "Dicho esto, hay que reconocerlo.", francais: "Cela dit, il faut le reconnaître.", note: "Dicho esto : la charnière entre concession et objection." },
      { etranger: "A ver si nos vemos pronto.", francais: "On se voit bientôt, j'espère.", note: "A ver si introduit un souhait, pas une question." },
    ],
  },
];
