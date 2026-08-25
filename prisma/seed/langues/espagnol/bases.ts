/**
 * Espagnol — les bases, la vie courante, le voyage.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_BASES: LotCartes[] = [
  {
    slug: "es-presentation",
    category: "Les bases",
    title: "Se présenter",
    statement:
      "Les premières phrases d'une rencontre. En espagnol, le tutoiement s'installe beaucoup plus vite qu'en français, surtout en Espagne.",
    tip: "Le sujet se dit rarement : la terminaison du verbe le porte déjà. « Yo soy » insiste, « soy » suffit.",
    difficulty: 1,
    niveau: "A1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Mucho gusto.", francais: "Enchanté.", aussi: ["Ravi de vous rencontrer."], aussiEtranger: ["Encantado.", "Un placer."] },
      { etranger: "¿Cómo te llamas?", francais: "Comment tu t'appelles ?", note: "Vouvoiement : ¿Cómo se llama usted?" },
      { etranger: "Soy de Nantes.", francais: "Je viens de Nantes.", aussi: ["Je suis de Nantes."] },
      { etranger: "¿A qué te dedicas?", francais: "Qu'est-ce que tu fais dans la vie ?", note: "Plus naturel que ¿Cuál es tu trabajo?" },
      { etranger: "Estoy aprendiendo español.", francais: "J'apprends l'espagnol.", note: "Le gérondif marque l'action en cours, comme l'anglais." },
      { etranger: "¿Puedes hablar más despacio?", francais: "Tu peux parler plus lentement ?", aussi: ["Pouvez-vous parler plus lentement ?"] },
      { etranger: "No te entiendo.", francais: "Je ne te comprends pas." },
      { etranger: "¿Cómo se dice… en español?", francais: "Comment on dit… en espagnol ?" },
      { etranger: "¿Me lo puedes repetir?", francais: "Tu peux me le répéter ?" },
      { etranger: "Encantado de conocerte.", francais: "Content de te connaître.", note: "Encantada si c'est une femme qui parle : l'accord se fait sur le locuteur." },
    ],
  },

  {
    slug: "es-quotidien",
    category: "Vie quotidienne",
    title: "La journée ordinaire",
    statement:
      "Les phrases d'une journée banale. L'espagnol du quotidien emploie beaucoup de verbes pronominaux là où le français n'en met pas.",
    tip: "Beaucoup de verbes changent de sens en devenant pronominaux : ir, aller, et irse, s'en aller.",
    difficulty: 1,
    niveau: "A1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Me he dormido.", francais: "Je me suis rendormi.", aussi: ["J'ai trop dormi."], note: "Dormirse, c'est s'endormir ; dormir, c'est dormir." },
      { etranger: "Voy con retraso.", francais: "Je suis en retard.", aussi: ["J'ai du retard."], aussiEtranger: ["Llego tarde.", "Voy tarde."] },
      { etranger: "Tengo que hacer la compra.", francais: "Je dois faire les courses.", note: "Tener que + infinitif : l'obligation la plus courante." },
      { etranger: "¿Puedes comprar pan?", francais: "Tu peux acheter du pain ?" },
      { etranger: "Voy a poner una lavadora.", francais: "Je vais faire une lessive.", note: "Poner una lavadora, littéralement mettre une machine." },
      { etranger: "Hay que sacar la basura.", francais: "Il faut sortir la poubelle.", note: "Hay que : obligation impersonnelle, sans sujet." },
      { etranger: "Salgo un momento.", francais: "Je sors un instant." },
      { etranger: "Hace mucho frío.", francais: "Il fait très froid.", note: "La météo se dit avec hacer, comme en français avec « faire »." },
      { etranger: "Estoy agotado.", francais: "Je suis épuisé.", aussi: ["Je suis crevé."], aussiEtranger: ["Estoy hecho polvo."] },
      { etranger: "Lo dejamos por hoy.", francais: "On s'arrête là pour aujourd'hui." },
    ],
  },

  {
    slug: "es-voyage",
    category: "Voyage",
    title: "Se déplacer et se loger",
    statement:
      "Ce qu'on dit au guichet, à l'hôtel et dans la rue. Les formules sont courtes et reviennent partout dans le monde hispanophone.",
    tip: "Pour demander poliment, l'espagnol emploie le conditionnel ou l'imparfait : « quería » sonne plus doux que « quiero ».",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Quería un billete para Sevilla.", francais: "Je voudrais un billet pour Séville.", note: "L'imparfait de politesse, très courant en Espagne." },
      { etranger: "¿De qué andén sale?", francais: "Il part de quel quai ?" },
      { etranger: "El vuelo lleva retraso.", francais: "Le vol a du retard.", note: "Annulé : cancelado." },
      { etranger: "Tengo una reserva a nombre de Dupont.", francais: "J'ai une réservation au nom de Dupont." },
      { etranger: "¿A qué hora hay que dejar la habitación?", francais: "À quelle heure faut-il libérer la chambre ?" },
      { etranger: "¿Está incluido el desayuno?", francais: "Le petit-déjeuner est compris ?" },
      { etranger: "¿Cómo se llega al centro?", francais: "Comment on va au centre-ville ?" },
      { etranger: "¿Hay que hacer transbordo?", francais: "Il faut changer ?", aussi: ["Il y a une correspondance ?"], note: "hacer transbordo : changer de train ou de ligne." },
      { etranger: "Se puede ir andando.", francais: "On peut y aller à pied.", aussi: ["C'est accessible à pied."], note: "En Amérique latine : caminando." },
      { etranger: "¿Me lo puede apuntar?", francais: "Vous pouvez me l'écrire ?", note: "Apuntar : noter. Escribir marcherait aussi." },
    ],
  },

  {
    slug: "es-restaurant",
    category: "Vie quotidienne",
    title: "Au bar et au restaurant",
    statement:
      "Commander, demander l'addition, refuser poliment. En Espagne, le bar est le lieu social par excellence : ces phrases servent tous les jours.",
    tip: "On commande avec « me pones » ou « me trae », rarement avec « quiero », qui sonne abrupt.",
    difficulty: 1,
    niveau: "A1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "¿Me pones una caña?", francais: "Tu me sers une bière pression ?", note: "Una caña : petit verre de bière pression, l'unité de base du bar espagnol." },
      { etranger: "La cuenta, por favor.", francais: "L'addition, s'il vous plaît." },
      { etranger: "¿Qué me recomienda?", francais: "Qu'est-ce que vous me conseillez ?" },
      { etranger: "Para mí, lo mismo.", francais: "Pour moi, la même chose." },
      { etranger: "Soy alérgico a los frutos secos.", francais: "Je suis allergique aux fruits à coque.", note: "Frutos secos couvre noix, amandes et cacahuètes." },
      { etranger: "¿Tienen algo sin gluten?", francais: "Vous avez quelque chose sans gluten ?" },
      { etranger: "Estaba buenísimo.", francais: "C'était excellent.", note: "Le suffixe -ísimo est le superlatif le plus employé à l'oral." },
      { etranger: "¿Se puede pagar con tarjeta?", francais: "On peut payer par carte ?" },
      { etranger: "Es para llevar.", francais: "C'est à emporter.", note: "Para llevar seul suffit au comptoir. Estar para veut dire tout autre chose : no está para bromas." },
      { etranger: "Otra ronda, por favor.", francais: "Une autre tournée, s'il vous plaît." },
    ],
  },
];
