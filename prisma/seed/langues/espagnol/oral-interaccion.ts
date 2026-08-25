/**
 * Espagnol — parler, pas seulement écrire.
 *
 * Suite de la cinquième passe. Ce qui fait qu'une conversation tient : les mots
 * qui n'apportent aucune information mais règlent le tour de parole, la manière
 * de se reprendre, celle de nuancer un refus, celle de lancer une anecdote.
 *
 * Un apprenant qui les ignore parle un espagnol correct et froid. Ils
 * s'apprennent tard parce qu'ils ne se traduisent pas : « o sea » n'a pas
 * d'équivalent, il a une fonction.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_ORAL_INTERACCION: LotCartes[] = [
  {
    slug: "es-marcadores-orales",
    category: "Expressions",
    title: "Les petits mots qui règlent la parole",
    statement:
      "Pues, o sea, bueno, en fin, hombre. Ils ne veulent rien dire et ils font tout : ils annoncent un désaccord, une reprise, une réserve.",
    tip: "Hombre en fin de phrase ne s'adresse pas à un homme : c'est un marqueur d'insistance ou de reproche, employé avec tout le monde.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Pues depende.",
        francais: "Eh bien, ça dépend.",
        note: "Pues en tête annonce une réponse nuancée, jamais un oui franc.",
      },
      {
        etranger: "En realidad era al revés.",
        francais: "En fait, c'était l'inverse.",
        note: "En realidad corrige poliment. Actualmente veut dire en ce moment.",
      },
      {
        etranger: "O sea, no es tan sencillo.",
        francais: "Je veux dire, ce n'est pas si simple.",
        aussi: ["C'est-à-dire que ce n'est pas si simple."],
        note: "O sea annonce une reformulation de ce qu'on vient de dire.",
      },
      {
        etranger: "Eso sí, nos avisó.",
        francais: "Cela dit, il nous avait prévenus.",
        note: "Eso sí introduit une réserve qui nuance ce qu'on vient d'affirmer.",
      },
      {
        etranger: "Aunque bueno, quizá tenga razón.",
        francais: "Ceci dit, elle a peut-être raison.",
        note: "Aunque bueno annonce un retournement de son propre point de vue.",
      },
      {
        etranger: "En fin, ¿por dónde íbamos?",
        francais: "Bref, où en étions-nous ?",
        note: "En fin clôt une digression et ramène au sujet.",
      },
      {
        etranger: "Da la casualidad de que yo estaba allí.",
        francais: "Il se trouve que j'y étais.",
        note: "Dar la casualidad de que introduit une coïncidence utile à l'argument.",
      },
      {
        etranger: "Todo hay que decirlo, no tenía opción.",
        francais: "Pour être juste, il n'avait pas le choix.",
        note: "Todo hay que decirlo concède un point avant de poursuivre.",
      },
      {
        etranger: "Venga, empezamos.",
        francais: "Bon, on s'y met.",
        note: "Venga ouvre une séquence d'action. Très espagnol, peu employé en Amérique.",
      },
      {
        etranger: "¿Me entiendes?",
        francais: "Tu vois ce que je veux dire ?",
        note: "Vérification du contact, pas une vraie question. On n'attend pas de réponse.",
      },
    ],
  },

  {
    slug: "es-vacilacion",
    category: "Expressions",
    title: "Hésiter et se reprendre",
    statement:
      "Como que, más bien, lo que quiero decir es, no sé. Un locuteur natif se reprend sans arrêt, et ces formules rendent l'hésitation acceptable.",
    tip: "Como que atténue tout ce qui suit : está como que complicado. À l'écrit c'est à proscrire, à l'oral c'est partout.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Está como que complicado.",
        francais: "C'est un peu compliqué.",
        note: "Como que atténue. La tournure est familière et très employée.",
      },
      {
        etranger: "O más bien dos, debería decir.",
        francais: "Ou plutôt deux, je devrais dire.",
        note: "Más bien corrige ce qu'on vient de dire, sans le renier.",
      },
      {
        etranger: "Lo que quiero decir es esto.",
        francais: "Ce que je veux dire, c'est ceci.",
        note: "La formule gagne du temps et annonce une reformulation.",
      },
      {
        etranger: "Déjame decirlo de otra manera.",
        francais: "Je vais le dire autrement.",
        note: "De otra manera, autrement. Dicho de otro modo se dit aussi, plus écrit.",
      },
      {
        etranger: "¿Cómo te lo diría?",
        francais: "Comment dire ?",
        note: "La question est rhétorique : on n'attend aucune réponse.",
      },
      {
        etranger: "Lo tengo en la punta de la lengua.",
        francais: "Je l'ai sur le bout de la langue.",
        note: "L'image est identique dans les deux langues.",
      },
      {
        etranger: "Dame un segundo.",
        francais: "Laisse-moi une seconde.",
        note: "La formule pour prendre le temps de réfléchir sans céder la parole.",
      },
      {
        etranger: "He perdido el hilo.",
        francais: "J'ai perdu le fil.",
        note: "El hilo, le fil. L'espagnol et le français emploient la même image.",
      },
      {
        etranger: "¿Por dónde iba?",
        francais: "Où en étais-je ?",
        note: "La formule pour reprendre après une interruption.",
      },
      {
        etranger: "No es exactamente lo que quería decir.",
        francais: "Ce n'est pas exactement ce que je voulais dire.",
        note: "No exactamente atténue le désaveu. Para nada serait beaucoup plus sec.",
      },
    ],
  },

  {
    slug: "es-telefono-atencion",
    category: "Vie quotidienne",
    title: "Au téléphone et au guichet",
    statement:
      "No cuelgue, le paso, un momentito, le devuelvo la llamada. Le service client hispanophone parle une langue à lui, faite de formules qu'on entend cent fois.",
    tip: "Le paso veut dire « je vous passe le service ». Le verbe pasar seul suffit, sans complément d'objet exprimé.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "No cuelgue, por favor.",
        francais: "Ne quittez pas, s'il vous plaît.",
        note: "Colgar, raccrocher. La formule est celle de tout standard téléphonique.",
      },
      {
        etranger: "Ahora mismo le paso.",
        francais: "Je vous passe le service tout de suite.",
        note: "Pasar a alguien, transférer un appel. Le complément reste implicite.",
      },
      {
        etranger: "Un momentito, por favor.",
        francais: "Un instant, s'il vous plaît.",
        note: "Le diminutif adoucit l'attente : il ne dit rien de sa durée réelle.",
      },
      {
        etranger: "Le devuelvo la llamada mañana.",
        francais: "Je vous rappelle demain.",
        note: "Devolver la llamada, rappeler. Llamar de vuelta se dit en Amérique latine.",
      },
      {
        etranger: "¿Me lo puede deletrear?",
        francais: "Pouvez-vous me l'épeler ?",
        note: "Deletrear, épeler. La question revient dès qu'un nom est en jeu.",
      },
      {
        etranger: "Se ha equivocado de departamento.",
        francais: "Vous n'êtes pas au bon service.",
        note: "Equivocarse de, se tromper de. La préposition de ne s'omet pas.",
      },
      {
        etranger: "¿Quiere dejar un recado?",
        francais: "Voulez-vous laisser un message ?",
        note: "Un recado en Espagne, un mensaje partout. Dejar recado, laisser un mot.",
      },
      {
        etranger: "Está comunicando.",
        francais: "La ligne est occupée.",
        note: "Comunicar au sens de sonner occupé. Ocupado se dit en Amérique latine.",
      },
      {
        etranger: "Llamo por mi pedido.",
        francais: "J'appelle au sujet de ma commande.",
        note: "Llamar por algo. La formule ouvre presque tout appel de service.",
      },
      {
        etranger: "Perdone, no le he entendido.",
        francais: "Pardon, je n'ai pas compris.",
        note: "Perdone au vouvoiement. No le he entendido, plus poli que ¿qué?",
      },
    ],
  },

  {
    slug: "es-desacuerdo-cortes",
    category: "Expressions",
    title: "Dire non sans le dire",
    statement:
      "Entiendo tu punto, pero. No lo veo claro. Todo depende. L'espagnol professionnel refuse rarement par un « no » sec : le refus passe par une concession, une réserve ou un regret.",
    tip: "« No lo veo claro » est un refus ferme sous une forme douce. Le traduire par « je ne vois pas clairement » manque tout le sens.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Entiendo tu punto, pero hay un problema.",
        francais: "Je comprends, mais il y a un problème.",
        note: "Entender el punto concède la forme sans céder le fond.",
      },
      {
        etranger: "No lo veo claro.",
        francais: "Ça ne me convainc pas.",
        aussi: ["Je n'y crois pas trop."],
        note: "No verlo claro est un refus ferme sous une forme douce.",
      },
      {
        etranger: "Yo sería prudente con eso.",
        francais: "Je serais prudent là-dessus.",
        note: "Ser prudente con, formule de réserve. Elle signale un désaccord sans le nommer.",
      },
      {
        etranger: "Puede ser, pero.",
        francais: "C'est possible, mais.",
        note: "Puede ser concède l'hypothèse pour mieux la contourner.",
      },
      {
        etranger: "Te entiendo, pero no es el momento.",
        francais: "J'entends bien, mais ce n'est pas le moment.",
        note: "Te entiendo accuse réception sans accord. Ce n'est jamais un oui.",
      },
      {
        etranger: "Quedamos en que no estamos de acuerdo.",
        francais: "Convenons que nous ne sommes pas d'accord.",
        note: "Quedar en que, convenir de. La formule clôt poliment un désaccord.",
      },
      {
        etranger: "Preferiría no hacerlo, si no te importa.",
        francais: "Je préférerais éviter, si cela ne te dérange pas.",
        note: "Preferiría no est le refus poli standard. Le si adoucit encore.",
      },
      {
        etranger: "Eso no me corresponde a mí.",
        francais: "Ce n'est pas à moi d'en décider.",
        note: "Corresponder a alguien, relever de quelqu'un. Refuser sans dire non.",
      },
      {
        etranger: "Me temo que no va a poder ser.",
        francais: "Je crains que ce ne soit pas possible.",
        note: "Me temo que annonce une mauvaise nouvelle. Il ne dit aucune peur.",
      },
      {
        etranger: "¿Lo dejamos para otro momento?",
        francais: "On peut y revenir plus tard ?",
        note: "Dejar algo para otro momento : souvent une façon de ne jamais y revenir.",
      },
    ],
  },

  {
    slug: "es-charla-social",
    category: "Vie quotidienne",
    title: "La conversation de politesse",
    statement:
      "¿Qué tal? Bien, ¿y tú? ¡Cuánto tiempo! La conversation de politesse hispanophone a des formules obligatoires, et y répondre longuement met mal à l'aise.",
    tip: "« ¿Qué tal? » n'est pas une question sur votre santé : c'est une salutation. La réponse attendue est brève, positive, et renvoie la question.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "¿Qué tal todo?",
        francais: "Comment ça va ?",
        note: "Salutation, pas question. La réponse attendue tient en trois mots.",
      },
      {
        etranger: "Bien, gracias. ¿Y tú?",
        francais: "Bien, merci. Et toi ?",
        note: "La réponse type : brève, positive, et on renvoie la question.",
      },
      {
        etranger: "¡Cuánto tiempo!",
        francais: "Ça fait un bail !",
        note: "Formule figée. Cuánto tiempo sin verte se dit aussi, en entier.",
      },
      {
        etranger: "¿Qué tal el fin de semana?",
        francais: "Ton week-end s'est bien passé ?",
        note: "La question rituelle du lundi matin dans tout bureau hispanophone.",
      },
      {
        etranger: "Vaya calor que hace, ¿eh?",
        francais: "Quelle chaleur, hein ?",
        note: "Vaya + nom exprime la surprise. La météo ouvre bien des conversations.",
      },
      {
        etranger: "No te entretengo más.",
        francais: "Je ne vais pas te retenir plus longtemps.",
        note: "Entretener, retenir quelqu'un. La formule annonce la fin de la conversation.",
      },
      {
        etranger: "Dale recuerdos a tu familia.",
        francais: "Transmets mes amitiés à ta famille.",
        note: "Dar recuerdos a alguien, formule de clôture polie.",
      },
      {
        etranger: "Ya quedamos otro día.",
        francais: "On se cale ça un autre jour.",
        aussi: ["On se revoit une prochaine fois."],
        note: "Quedar otro día : l'engagement reste volontairement flou.",
      },
      {
        etranger: "Perdona, que tengo prisa.",
        francais: "Excuse-moi, je suis pressé.",
        note: "Tener prisa, être pressé. Le que explicatif est très espagnol.",
      },
      {
        etranger: "Me alegro de verte otra vez.",
        francais: "Content de te revoir.",
        note: "Alegrarse de verte pour quelqu'un qu'on connaît ; encantado la première fois.",
      },
    ],
  },

  {
    slug: "es-contar-anecdota",
    category: "Expressions",
    title: "Raconter une anecdote",
    statement:
      "Resulta que, total que, y ahí me tienes. Une histoire orale a une charpente, et ces formules en sont les poutres.",
    tip: "Le présent narratif est très employé à l'oral espagnol : « y va y me dice ». Il rend le récit vivant, même pour des faits anciens.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Y ahí me tienes, en medio de la nada.",
        francais: "Me voilà donc au milieu de nulle part.",
        note: "Y ahí me tienes ouvre une anecdote. La formule est presque rituelle.",
      },
      {
        etranger: "Resulta que nadie me había avisado.",
        francais: "Il se trouve que personne ne m'avait prévenu.",
        note: "Resulta que annonce le nœud de l'histoire.",
      },
      {
        etranger: "Total, que lo perdimos.",
        francais: "Résultat, on l'a raté.",
        note: "Total que abrège et conclut. La formule est familière et très courante.",
      },
      {
        etranger: "No te vas a creer lo que pasó.",
        francais: "Tu ne vas pas croire ce qui s'est passé.",
        note: "L'amorce qui garantit l'attention. Elle n'attend aucune réponse.",
      },
      {
        etranger: "Y va y me dice que no.",
        francais: "Et là, il me dit que non.",
        note: "Ir y + verbe au présent : le récit bascule au présent pour l'effet.",
      },
      {
        etranger: "Resultó ser un error.",
        francais: "Il s'est avéré que c'était une erreur.",
        note: "Resultar ser, se révéler être. Formule de dénouement.",
      },
      {
        etranger: "Bueno, ahí fue cuando lo entendí.",
        francais: "Bon, c'est là que j'ai compris.",
        note: "Ahí fue cuando, c'est alors que. La structure clive le moment.",
      },
      {
        etranger: "Y hasta ahí llegó la cosa.",
        francais: "Et voilà, l'affaire s'est arrêtée là.",
        note: "Hasta ahí llegó la cosa clôt un récit sans commentaire.",
      },
      {
        etranger: "Aunque no te lo creas, funcionó.",
        francais: "Crois-le ou non, ça a marché.",
        note: "Aunque no te lo creas + subjonctif annonce l'invraisemblable.",
      },
      {
        etranger: "Todavía no me lo explico.",
        francais: "Je n'en reviens toujours pas.",
        note: "No explicarse algo, ne pas s'expliquer une chose. L'étonnement dure.",
      },
    ],
  },

  {
    slug: "es-instrucciones",
    category: "Vie quotidienne",
    title: "Expliquer comment faire",
    statement:
      "Asegúrate de, ten cuidado de no, sobre todo no. Donner une consigne en espagnol demande de choisir entre l'ordre, le conseil et l'avertissement.",
    tip: "Asegurarse de + infinitif quand le sujet est le même, de que + subjonctif sinon. La règle est celle de toutes les subordonnées.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Asegúrate de cerrar con llave.",
        francais: "N'oublie pas de fermer à clé.",
        note: "Asegurarse de + infinitif, même sujet. Avec un autre sujet : de que + subjonctif.",
      },
      {
        etranger: "Ten cuidado de no pulsar eso.",
        francais: "Attention à ne pas appuyer là-dessus.",
        note: "Tener cuidado de no + infinitif. La négation se place avant l'infinitif.",
      },
      {
        etranger: "Sobre todo, no recargues la página.",
        francais: "Surtout, ne recharge pas la page.",
        note: "Sobre todo renforce l'interdiction. L'impératif négatif prend le subjonctif.",
      },
      {
        etranger: "Lo primero, corta la corriente.",
        francais: "D'abord, coupe le courant.",
        note: "Lo primero, la première chose. La formule ouvre toute instruction.",
      },
      {
        etranger: "Dale un buen meneo.",
        francais: "Secoue-le bien.",
        note: "Dar un meneo, secouer. Le verbe support adoucit l'instruction.",
      },
      {
        etranger: "Déjalo enfriar diez minutos.",
        francais: "Laisse refroidir dix minutes.",
        note: "Dejar + infinitif : laisser faire. Le pronom se soude à l'impératif.",
      },
      {
        etranger: "Quizá deberías guardar primero.",
        francais: "Tu ferais peut-être bien d'enregistrer d'abord.",
        note: "Quizá deberías est un conseil déguisé. Très employé au travail.",
      },
      {
        etranger: "No te molestes con ese paso.",
        francais: "Ne t'embête pas avec cette étape.",
        note: "Molestarse con, se donner la peine. Familier et courant.",
      },
      {
        etranger: "En cuanto pite, ya está.",
        francais: "Dès que ça sonne, c'est fini.",
        note: "En cuanto + subjonctif pour une action à venir. Pitar, siffler ou biper.",
      },
      {
        etranger: "Sigue las indicaciones de la pantalla.",
        francais: "Suis les indications à l'écran.",
        note: "Las indicaciones, les instructions affichées. Seguir, suivre.",
      },
    ],
  },

  {
    slug: "es-pedir-reclamar",
    category: "Vie quotidienne",
    title: "Demander, obtenir, réclamer",
    statement:
      "¿Te importaría? ¿Habría alguna forma de? Me preguntaba si. Obtenir quelque chose en espagnol demande une politesse indirecte.",
    tip: "Plus la demande est indirecte, plus elle est polie. « Me preguntaba si podrías » est le degré le plus élevé de la vie courante.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "¿Te importaría correrte un poco?",
        francais: "Cela t'ennuierait de te décaler un peu ?",
        note: "Importar a alguien, déranger. Répondre « sí » veut dire refuser : le piège est réel.",
      },
      {
        etranger: "¿No podrías echarme una mano?",
        francais: "Tu ne pourrais pas me donner un coup de main ?",
        note: "La question négative adoucit la demande, comme en français.",
      },
      {
        etranger: "Me preguntaba si podrías echarle un ojo.",
        francais: "Je me demandais si tu pourrais y jeter un œil.",
        note: "Me preguntaba si : le degré de politesse le plus élevé de la vie courante.",
      },
      {
        etranger: "¿Habría alguna forma de cambiar la cita?",
        francais: "Y aurait-il moyen de déplacer le rendez-vous ?",
        note: "Habría alguna forma de, formule d'ouverture d'une demande difficile.",
      },
      {
        etranger: "Le agradecería que me lo confirmara.",
        francais: "Je vous saurais gré de me le confirmer.",
        note: "Agradecer que + subjonctif imparfait. Registre du courriel professionnel.",
      },
      {
        etranger: "¿Crees que podrás apañártelas?",
        francais: "Penses-tu pouvoir te débrouiller ?",
        note: "Apañárselas, se débrouiller. Le verbe suppose un obstacle.",
      },
      {
        etranger: "Quisiera poner una reclamación.",
        francais: "Je voudrais faire une réclamation.",
        note: "Poner una reclamación. Le formulaire officiel s'appelle la hoja de reclamaciones.",
      },
      {
        etranger: "¿Me pueden devolver el dinero?",
        francais: "Puis-je être remboursé ?",
        note: "Devolver el dinero, rembourser. La devolución est le remboursement.",
      },
      {
        etranger: "Esto no es lo que pedí.",
        francais: "Ce n'est pas ce que j'ai commandé.",
        note: "La formule est directe sans être impolie : elle constate un fait.",
      },
      {
        etranger: "¿Me haría un descuento?",
        francais: "Pourriez-vous me faire une remise ?",
        note: "Hacer un descuento, faire une remise. Le conditionnel adoucit la demande.",
      },
    ],
  },
];
