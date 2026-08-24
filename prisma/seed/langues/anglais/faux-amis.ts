/**
 * Anglais — faux amis et pièges du français.
 *
 * C'est le lot le plus rentable : ce sont des fautes qu'on fait avec assurance,
 * donc qu'on ne corrige jamais tout seul. Chaque carte porte une note, parce
 * qu'un faux ami sans explication se réapprend à l'envers la semaine suivante.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_FAUX_AMIS: LotCartes[] = [
  {
    slug: "en-faux-amis-1",
    category: "Faux amis",
    title: "Les faux amis les plus coûteux",
    statement:
      "Dix mots anglais qui ressemblent à un mot français et veulent dire autre chose. Ce sont ceux qui font le plus de dégâts, parce qu'on les emploie sans hésiter.",
    tip: "Quand un mot anglais ressemble trop au français, méfie-toi : la ressemblance est souvent un piège hérité du latin.",
    difficulty: 2,
    niveau: "B1",
    cartes: [
      {
        etranger: "actually",
        francais: "en fait",
        aussi: ["à vrai dire", "en réalité"],
        note: "« Actuellement » se dit currently ou at the moment. Actually corrige ou nuance : « Actually, it's cheaper. »",
      },
      {
        etranger: "eventually",
        francais: "finalement",
        aussi: ["à terme", "au bout du compte"],
        note: "« Éventuellement » se dit possibly ou if need be. Eventually annonce une certitude qui met du temps, pas une hypothèse.",
      },
      {
        etranger: "sensible",
        francais: "raisonnable",
        aussi: ["sensé", "pragmatique"],
        note: "« Sensible » au sens français se dit sensitive. A sensible decision est une décision sage ; a sensitive person est quelqu'un qui se froisse.",
      },
      {
        etranger: "a library",
        francais: "une bibliothèque",
        note: "Une librairie est a bookshop, ou a bookstore aux États-Unis.",
      },
      {
        etranger: "to attend a meeting",
        francais: "assister à une réunion",
        note: "Attend, c'est être présent. « Attendre » se dit to wait. Et to assist veut dire aider.",
      },
      {
        etranger: "deception",
        francais: "tromperie",
        aussi: ["duperie"],
        note: "Une déception se dit a disappointment. Deception accuse quelqu'un ; disappointment décrit ce qu'on ressent.",
      },
      {
        etranger: "to resume",
        francais: "reprendre",
        aussi: ["recommencer"],
        note: "Résumer se dit to sum up ou to summarise. Et a resume, aux États-Unis, c'est un CV.",
      },
      {
        etranger: "an issue",
        francais: "un problème",
        aussi: ["une question", "un sujet"],
        note: "Une issue, la sortie, se dit an exit ; l'issue d'une histoire, its outcome.",
      },
      {
        etranger: "to achieve",
        francais: "accomplir",
        aussi: ["atteindre", "réussir"],
        note: "Achever se dit to finish, ou to finish off quand on veut dire mettre à mort.",
      },
      {
        etranger: "comprehensive",
        francais: "complet",
        aussi: ["exhaustif"],
        note: "Compréhensif se dit understanding. A comprehensive report ne laisse rien de côté ; an understanding boss te pardonne.",
      },
    ],
  },

  {
    slug: "en-faux-amis-2",
    category: "Faux amis",
    title: "Faux amis du bureau",
    statement:
      "Ceux qui traînent dans les courriels professionnels. Les employer de travers ne fait pas seulement une faute : cela change ce qu'on annonce.",
    tip: "Dans un courriel, relis les mots qui ressemblent au français : ce sont eux qui font dire le contraire de ce qu'on pense.",
    difficulty: 2,
    niveau: "B2",
    cartes: [
      {
        etranger: "to demand",
        francais: "exiger",
        aussi: ["réclamer"],
        note: "Demander se dit to ask ou to request. To demand a raise, c'est l'exiger — le ton n'est pas le même.",
      },
      {
        etranger: "to support",
        francais: "soutenir",
        aussi: ["appuyer"],
        note: "Supporter au sens d'endurer se dit to put up with ou to bear.",
      },
      {
        etranger: "to control",
        francais: "maîtriser",
        aussi: ["diriger", "piloter"],
        note: "Contrôler au sens de vérifier se dit to check. To control the budget, c'est le piloter ; to check the budget, c'est le relire.",
      },
      {
        etranger: "an agenda",
        francais: "un ordre du jour",
        note: "Un agenda où l'on note ses rendez-vous est a diary, ou a planner aux États-Unis.",
      },
      {
        etranger: "actual figures",
        francais: "les chiffres réels",
        aussi: ["les chiffres effectifs"],
        note: "Par opposition aux prévisions. Les chiffres actuels, ceux d'aujourd'hui, sont the current figures.",
      },
      {
        etranger: "eventual",
        francais: "final",
        aussi: ["ultime"],
        note: "The eventual cost, c'est ce que ça aura coûté au bout du compte. Un coût éventuel est a possible cost.",
      },
      {
        etranger: "to advertise",
        francais: "faire de la publicité",
        aussi: ["promouvoir"],
        note: "Avertir se dit to warn. Et an advertisement, souvent abrégé en ad, est une publicité.",
      },
      {
        etranger: "a formation",
        francais: "une formation géologique",
        aussi: ["une formation militaire"],
        note: "Une formation professionnelle se dit training ou a course. « I did a formation » ne veut rien dire pour un anglophone.",
      },
      {
        etranger: "a delay",
        francais: "un retard",
        note: "Un délai se dit a deadline quand c'est une échéance, a time frame quand c'est une durée.",
      },
      {
        etranger: "eventually deliver",
        francais: "finir par livrer",
        note: "Le mot annonce que ça finira par arriver. Pour dire « on livrera peut-être », il faut we may deliver.",
      },
    ],
  },

  {
    slug: "en-pieges-verbes",
    category: "Pièges du français",
    title: "Les tournures qu'on calque du français",
    statement:
      "Des phrases entières qu'un francophone construit mot à mot depuis le français, et qui ne se disent pas ainsi. Elles se repèrent à l'oreille d'un anglophone en une seconde.",
    tip: "Si une phrase anglaise se traduit trop bien mot à mot, il y a une chance sur deux qu'elle soit calquée.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      {
        etranger: "I am thirty years old.",
        francais: "J'ai trente ans.",
        note: "L'âge se dit avec to be, jamais avec to have. « I have thirty years » est la faute la plus répandue chez les francophones.",
      },
      {
        etranger: "I agree.",
        francais: "Je suis d'accord.",
        note: "Agree est un verbe à lui tout seul. « I am agree » n'existe pas.",
      },
      {
        etranger: "I am hungry.",
        francais: "J'ai faim.",
        aussi: ["Je suis affamé."],
        note: "Comme pour l'âge : la faim, la soif, le froid, la peur se disent avec to be.",
      },
      {
        etranger: "It depends on the weather.",
        francais: "Ça dépend du temps.",
        note: "Depend est toujours suivi de on. « It depends of » est un calque du français.",
      },
      {
        etranger: "I look forward to hearing from you.",
        francais: "Dans l'attente de votre réponse.",
        note: "Après to, ici une préposition et non un infinitif, le verbe prend -ing. « I look forward to hear » est fautif.",
      },
      {
        etranger: "I have been living here for three years.",
        francais: "J'habite ici depuis trois ans.",
        note: "Le français emploie le présent, l'anglais le present perfect. « I live here since three years » cumule deux fautes.",
      },
      {
        etranger: "Let me know if you need anything.",
        francais: "Dis-moi si tu as besoin de quelque chose.",
        note: "Anything et non something dans une phrase conditionnelle ou négative.",
      },
      {
        etranger: "I miss you.",
        francais: "Tu me manques.",
        note: "Le sujet s'inverse par rapport au français : c'est celui qui ressent le manque qui est sujet.",
      },
      {
        etranger: "She made me laugh.",
        francais: "Elle m'a fait rire.",
        note: "Après make au sens de faire faire, l'infinitif est sans to.",
      },
      {
        etranger: "I'm used to working late.",
        francais: "J'ai l'habitude de travailler tard.",
        note: "Ne pas confondre avec I used to work late, qui veut dire « je travaillais tard, avant ».",
      },
    ],
  },

  {
    slug: "en-pieges-anglicismes",
    category: "Pièges du français",
    title: "Les faux anglicismes",
    statement:
      "Des mots anglais employés en français… qui ne veulent pas dire cela en anglais, ou n'y existent pas du tout. Les employer tels quels ne se comprend pas.",
    tip: "Un mot anglais entré en français a souvent changé de sens en route. Vérifie-le avant de le réemployer en anglais.",
    difficulty: 2,
    niveau: "B1",
    cartes: [
      {
        etranger: "jogging",
        francais: "le fait de courir",
        note: "En français, « un footing ». Le mot footing n'existe pas en anglais dans ce sens ; il désigne une prise d'appui.",
      },
      {
        etranger: "a tuxedo",
        francais: "un smoking",
        aussi: ["un costume de soirée"],
        note: "Dinner jacket au Royaume-Uni. Smoking, en anglais, veut dire « en train de fumer ».",
      },
      {
        etranger: "a data projector",
        francais: "un vidéoprojecteur",
        note: "Video projector se dit aussi ; le rétroprojecteur, lui, est l'appareil à transparents. Un beamer, en anglais courant, est une BMW.",
      },
      {
        etranger: "table football",
        francais: "un baby-foot",
        aussi: ["le baby-foot"],
        note: "Foosball aux États-Unis. « Baby-foot » ne se comprend nulle part en anglais.",
      },
      {
        etranger: "a petrol station",
        francais: "une station-service",
        note: "Gas station aux États-Unis. Un « parking » se dit a car park ou a parking lot, jamais a parking tout court.",
      },
      {
        etranger: "a sweatshirt",
        francais: "un sweat",
        aussi: ["un pull"],
        note: "Dire « a sweat » signifie « une sueur ».",
      },
      {
        etranger: "hair gel",
        francais: "du gel coiffant",
        note: "Le brushing français se dit a blow-dry ; brushing en anglais désigne le brossage des dents ou des cheveux.",
      },
      {
        etranger: "a mobile phone",
        francais: "un téléphone portable",
        aussi: ["un portable"],
        note: "Cell phone aux États-Unis. « A portable » désigne un objet transportable, pas un téléphone.",
      },
      {
        etranger: "a smart outfit",
        francais: "une tenue élégante",
        note: "En français, « un look ». A look en anglais est un regard ; on dit a style ou an outfit.",
      },
      {
        etranger: "a talent show",
        francais: "un télécrochet",
        note: "Le « relooking » français se dit a makeover. Beaucoup de mots en -ing sont des inventions françaises.",
      },
    ],
  },
];
