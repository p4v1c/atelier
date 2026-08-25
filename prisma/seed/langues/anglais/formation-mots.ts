/**
 * Anglais — fabriquer un mot, et les structures qui vont avec.
 *
 * Cinquième passe. Un C1 ne connaît pas seulement plus de mots : il sait en
 * FABRIQUER. À partir de care il tire careful, careless, carefree, caring,
 * uncaring, carer — six mots dont un seul figure dans une liste de vocabulaire.
 *
 * C'est le levier le plus rentable de tout l'apprentissage : une trentaine
 * d'affixes multiplie par trois ou quatre ce qu'on peut comprendre et produire.
 * Il est aussi le plus absent des manuels, parce qu'il ne fait pas une leçon.
 *
 * Les quatre dernières séries portent sur les structures que le vocabulaire ne
 * suffit pas à porter : rapporter des propos, choisir entre gérondif et
 * infinitif, employer un passif que le français n'a pas, comparer finement.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_FORMATION_MOTS: LotCartes[] = [
  {
    slug: "en-prefixes",
    category: "Grammaire en contexte",
    title: "Les préfixes",
    statement:
      "Over-, under-, mis-, dis-, re-. Cinq préfixes qui fabriquent des centaines de mots, et dont le sens est parfaitement régulier.",
    tip: "Over- dit l'excès, under- l'insuffisance, mis- l'erreur. Un mot inconnu formé sur l'un d'eux se devine presque toujours.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The report overstates the risk.",
        francais: "Le rapport exagère le risque.",
        note: "Over- dit l'excès : overstate, overestimate, overreact, overcharge.",
      },
      {
        etranger: "The team is understaffed.",
        francais: "L'équipe manque de personnel.",
        note: "Under- dit l'insuffisance : understaffed, underfunded, underused.",
      },
      {
        etranger: "You've misunderstood me.",
        francais: "Tu m'as mal compris.",
        note: "Mis- dit l'erreur : misunderstand, misjudge, misplace, mislead.",
      },
      {
        etranger: "I disagree with the premise.",
        francais: "Je conteste le postulat.",
        note: "Dis- inverse : agree, disagree ; approve, disapprove ; like, dislike.",
      },
      {
        etranger: "The file needs renaming.",
        francais: "Le fichier est à renommer.",
        note: "Re- dit la reprise, et se colle très librement : rename, rethink, rewrite.",
      },
      {
        etranger: "The claim is unfounded.",
        francais: "L'affirmation est sans fondement.",
        note: "Un- est le préfixe négatif le plus courant. Il ne se combine pas avec tout.",
      },
      {
        etranger: "The decision was premature.",
        francais: "La décision était prématurée.",
        note: "Pre- dit l'antériorité ; post- la postériorité : prewar, postwar.",
      },
      {
        etranger: "The two accounts are inconsistent.",
        francais: "Les deux versions se contredisent.",
        note: "In- devient im- devant p et b, ir- devant r, il- devant l : impossible, irregular.",
      },
      {
        etranger: "He outgrew his old habits.",
        francais: "Il a fini par se défaire de ses vieilles habitudes.",
        note: "Out- dit le dépassement : outgrow, outlive, outnumber, outperform.",
      },
      {
        etranger: "The building is fireproof.",
        francais: "Le bâtiment est ignifugé.",
        note: "-proof en suffixe dit la résistance : waterproof, soundproof, foolproof.",
      },
    ],
  },

  {
    slug: "en-suffixes-noms",
    category: "Grammaire en contexte",
    title: "Fabriquer un nom",
    statement:
      "-ness, -ity, -ment, -ship, -hood. Cinq suffixes qui transforment un adjectif ou un verbe en nom, et le choix n'est pas libre.",
    tip: "-ness s'ajoute aux adjectifs germaniques courts, -ity aux adjectifs latins. Happy donne happiness, mais able donne ability.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The darkness was total.",
        francais: "L'obscurité était totale.",
        note: "-ness sur un adjectif court d'origine germanique : darkness, kindness, weakness.",
      },
      {
        etranger: "Clarity matters more than speed.",
        francais: "La clarté compte plus que la vitesse.",
        note: "-ity sur les adjectifs latins : clear devient clarity, not « clearity ».",
      },
      {
        etranger: "The agreement took months.",
        francais: "L'accord a pris des mois.",
        note: "-ment sur un verbe : agree, agreement ; develop, development.",
      },
      {
        etranger: "Their friendship goes back years.",
        francais: "Leur amitié remonte à des années.",
        note: "-ship dit un état ou une relation : friendship, leadership, hardship.",
      },
      {
        etranger: "He spent his childhood abroad.",
        francais: "Il a passé son enfance à l'étranger.",
        note: "-hood dit une période ou une condition : childhood, adulthood, likelihood.",
      },
      {
        etranger: "The refusal came as a surprise.",
        francais: "Le refus a surpris.",
        note: "-al sur un verbe : refuse, refusal ; arrive, arrival ; propose, proposal.",
      },
      {
        etranger: "Her performance was flawless.",
        francais: "Sa prestation était sans faute.",
        note: "-ance et -ence sur les verbes latins : perform, performance ; prefer, preference.",
      },
      {
        etranger: "The building has no heating.",
        francais: "Le bâtiment n'a pas de chauffage.",
        note: "-ing nominalise n'importe quel verbe. C'est le procédé le plus productif de l'anglais.",
      },
      {
        etranger: "He works as a carer.",
        francais: "Il travaille comme aidant.",
        note: "-er sur un verbe désigne celui qui fait. Care donne carer, pas « carist ».",
      },
      {
        etranger: "The employee raised a concern.",
        francais: "L'employé a signalé un problème.",
        note: "-ee désigne celui qui subit : employer et employee, trainer et trainee.",
      },
    ],
  },

  {
    slug: "en-suffixes-verbes",
    category: "Grammaire en contexte",
    title: "Fabriquer un verbe ou un adjectif",
    statement:
      "-ise, -ify, -en, -able, -ive. L'anglais transforme un nom en verbe sans effort, et ce sont ces dérivés qui font l'écrit savant.",
    tip: "-ise s'écrit -ize aux États-Unis, et les deux graphies sont admises en Grande-Bretagne. Quelques verbes n'acceptent que -ise : advise, surprise.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We need to prioritise these.",
        francais: "Il faut les hiérarchiser.",
        note: "-ise fabrique un verbe à partir d'un nom. Priority devient prioritise.",
      },
      {
        etranger: "Can you clarify the point?",
        francais: "Peux-tu préciser ce point ?",
        note: "-ify sur un adjectif : clear devient clarify ; simple, simplify.",
      },
      {
        etranger: "The rules were tightened.",
        francais: "Les règles ont été durcies.",
        note: "-en sur un adjectif court : tight, tighten ; short, shorten ; wide, widen.",
      },
      {
        etranger: "The results are not comparable.",
        francais: "Les résultats ne sont pas comparables.",
        note: "-able dit ce qui peut être fait. Le e final du verbe tombe : compare, comparable.",
      },
      {
        etranger: "The measure proved effective.",
        francais: "La mesure s'est révélée efficace.",
        note: "-ive sur un verbe latin : effect, effective ; select, selective.",
      },
      {
        etranger: "The process is fully automated.",
        francais: "Le processus est entièrement automatisé.",
        note: "-ate fabrique un verbe : automate, activate, validate. Le participe sert d'adjectif.",
      },
      {
        etranger: "That's a groundless accusation.",
        francais: "C'est une accusation sans fondement.",
        note: "-less dit l'absence : groundless, useless, endless, priceless.",
      },
      {
        etranger: "She was remarkably thoughtful.",
        francais: "Elle a été remarquablement attentionnée.",
        note: "-ful dit la présence, -less l'absence. Thoughtful et thoughtless s'opposent.",
      },
      {
        etranger: "It's a costly mistake.",
        francais: "C'est une erreur coûteuse.",
        note: "-ly fabrique aussi des adjectifs : costly, friendly, likely. Tous ne sont pas des adverbes.",
      },
      {
        etranger: "The film is watchable at best.",
        francais: "Le film est regardable, sans plus.",
        note: "-able ajouté librement produit des mots de circonstance, courants à l'oral.",
      },
    ],
  },

  {
    slug: "en-verbes-rapport",
    category: "Verbes",
    title: "Rapporter des propos",
    statement:
      "Claim, argue, insist, deny, admit. Chaque verbe de rapport porte un jugement sur ce qu'on rapporte, et impose sa propre construction.",
    tip: "Claim signale qu'on ne cautionne pas ce qu'on rapporte ; state est neutre. Choisir l'un ou l'autre prend parti sans le dire.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He claims to have seen it.",
        francais: "Il prétend l'avoir vu.",
        note: "Claim to + infinitif. Le verbe signale qu'on ne cautionne pas.",
      },
      {
        etranger: "She argued that the data were flawed.",
        francais: "Elle a soutenu que les données étaient faussées.",
        note: "Argue that, soutenir. Le verbe ne dit pas la dispute mais l'argumentation.",
      },
      {
        etranger: "They insisted on seeing the file.",
        francais: "Ils ont exigé de voir le dossier.",
        note: "Insist on + gérondif ; insist that + proposition. Jamais insist to.",
      },
      {
        etranger: "He denied any involvement.",
        francais: "Il a nié toute implication.",
        note: "Deny + nom ou gérondif, jamais + infinitif. Deny doing, pas « deny to do ».",
      },
      {
        etranger: "She admitted making a mistake.",
        francais: "Elle a reconnu s'être trompée.",
        note: "Admit + gérondif. Admit to est possible avec un nom.",
      },
      {
        etranger: "The author suggests a different reading.",
        francais: "L'auteur propose une autre lecture.",
        note: "Suggest + nom ou that. Jamais suggest someone to do : la faute est fréquente.",
      },
      {
        etranger: "He accused them of hiding it.",
        francais: "Il les a accusés de le cacher.",
        note: "Accuse someone of + gérondif. La préposition ne s'omet pas.",
      },
      {
        etranger: "She warned us not to wait.",
        francais: "Elle nous a prévenus de ne pas attendre.",
        note: "Warn someone not to + infinitif. La négation se place avant to.",
      },
      {
        etranger: "They conceded the point.",
        francais: "Ils ont concédé le point.",
        note: "Concede, admettre à contrecœur. Le verbe suppose une résistance préalable.",
      },
      {
        etranger: "The minister declined to comment.",
        francais: "Le ministre n'a pas souhaité commenter.",
        note: "Decline to + infinitif, la formule des dépêches. Refuse serait plus abrupt.",
      },
    ],
  },

  {
    slug: "en-patterns-verbaux",
    category: "Grammaire en contexte",
    title: "Gérondif ou infinitif",
    statement:
      "Stop doing, stop to do. Remember doing, remember to do. Certains verbes acceptent les deux formes, et le sens change du tout au tout.",
    tip: "Le gérondif regarde en arrière, l'infinitif en avant. I remember locking the door : je l'ai fait. I remembered to lock it : j'y ai pensé.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He stopped smoking last year.",
        francais: "Il a arrêté de fumer l'an dernier.",
        note: "Stop + gérondif : cesser l'activité elle-même.",
      },
      {
        etranger: "He stopped to smoke.",
        francais: "Il s'est arrêté pour fumer.",
        note: "Stop + infinitif : s'interrompre dans un but. Le contraste est total.",
      },
      {
        etranger: "I regret telling him.",
        francais: "Je regrette de le lui avoir dit.",
        note: "Regret + gérondif : regretter ce qu'on a fait.",
      },
      {
        etranger: "We regret to inform you.",
        francais: "Nous avons le regret de vous informer.",
        note: "Regret + infinitif : regretter ce qu'on s'apprête à dire. Formule de lettre.",
      },
      {
        etranger: "She tried opening the window.",
        francais: "Elle a essayé d'ouvrir la fenêtre, pour voir.",
        note: "Try + gérondif : tenter une méthode pour voir si elle marche.",
      },
      {
        etranger: "She tried to open the window.",
        francais: "Elle a tenté d'ouvrir la fenêtre, sans y parvenir.",
        note: "Try + infinitif : faire l'effort, souvent en vain.",
      },
      {
        etranger: "I mean to finish it tonight.",
        francais: "J'ai l'intention de le finir ce soir.",
        note: "Mean to, avoir l'intention. Mean + gérondif dit ce que cela implique.",
      },
      {
        etranger: "It means starting over.",
        francais: "Cela veut dire tout recommencer.",
        note: "Mean + gérondif : impliquer. Le sujet est la chose, pas la personne.",
      },
      {
        etranger: "He went on talking for an hour.",
        francais: "Il a continué de parler pendant une heure.",
        note: "Go on + gérondif : poursuivre la même chose.",
      },
      {
        etranger: "He went on to become a judge.",
        francais: "Il est ensuite devenu juge.",
        note: "Go on + infinitif : passer à autre chose. Le sens n'a plus rien de commun.",
      },
    ],
  },

  {
    slug: "en-passif-avance",
    category: "Grammaire en contexte",
    title: "Les passifs que le français n'a pas",
    statement:
      "Have something done. He is said to be. It is thought that. Trois structures très fréquentes, et le français doit tourner autrement pour chacune.",
    tip: "Have something done ne veut pas dire faire soi-même : c'est faire faire. I had my hair cut, je me suis fait couper les cheveux.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I had the car serviced.",
        francais: "J'ai fait réviser la voiture.",
        note: "Have + complément + participe : faire faire. La structure est très fréquente.",
      },
      {
        etranger: "She got her passport renewed.",
        francais: "Elle a fait renouveler son passeport.",
        note: "Get remplace have à l'oral, avec la même structure.",
      },
      {
        etranger: "He is said to be difficult.",
        francais: "On le dit difficile.",
        note: "Be said to + infinitif. Le français emploie « on » là où l'anglais met un passif.",
      },
      {
        etranger: "It is thought that she left early.",
        francais: "On pense qu'elle est partie tôt.",
        note: "It is thought that, la formule impersonnelle. Personne ne s'engage nommément.",
      },
      {
        etranger: "It is widely believed that the figures are wrong.",
        francais: "On pense généralement que les chiffres sont faux.",
        note: "It is believed that…, la tournure impersonnelle de l'écrit : elle dit une opinion sans en nommer l'auteur.",
      },
      {
        etranger: "The meeting was called off at short notice.",
        francais: "La réunion a été annulée au dernier moment.",
        note: "Un verbe à particule se met au passif comme un autre : la particule reste collée au participe.",
      },
      {
        etranger: "The proposal was turned down.",
        francais: "La proposition a été rejetée.",
        note: "Un verbe à particule se met au passif sans perdre sa particule.",
      },
      {
        etranger: "She had her bag stolen.",
        francais: "On lui a volé son sac.",
        note: "Have + participe dit aussi ce qu'on subit. Le contexte sépare les deux sens.",
      },
      {
        etranger: "The matter is being looked into.",
        francais: "L'affaire est à l'étude.",
        note: "Deux particules survivent au passif : look into devient be looked into.",
      },
      {
        etranger: "He is believed to have left the country.",
        francais: "On pense qu'il a quitté le pays.",
        note: "Be believed to have + participe : le passé dans cette structure.",
      },
    ],
  },

  {
    slug: "en-comparatifs-avances",
    category: "Grammaire en contexte",
    title: "Comparer finement",
    statement:
      "The more, the better. All the more so. Twice as many. Les comparatifs avancés de l'anglais ont des moules figés qu'on ne peut pas improviser.",
    tip: "The more… the more… : les deux the sont obligatoires, et chacun ouvre sa proposition. Ce n'est pas l'article défini.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The sooner we start, the better.",
        francais: "Plus tôt on commence, mieux c'est.",
        note: "The + comparatif, deux fois. Le second membre peut se réduire à the better.",
      },
      {
        etranger: "The more he explains, the less I understand.",
        francais: "Plus il explique, moins je comprends.",
        note: "Le moule accepte more et less indifféremment dans chaque membre.",
      },
      {
        etranger: "That makes it all the more urgent.",
        francais: "Cela le rend d'autant plus urgent.",
        note: "All the more, d'autant plus. La formule renforce ce qui précède.",
      },
      {
        etranger: "There were twice as many as expected.",
        francais: "Il y en avait deux fois plus que prévu.",
        note: "Twice as many as pour les dénombrables, twice as much as pour le reste.",
      },
      {
        etranger: "It's nowhere near enough.",
        francais: "C'est très loin d'être suffisant.",
        note: "Nowhere near, très loin de. Beaucoup plus fort que not quite.",
      },
      {
        etranger: "She's by far the best candidate.",
        francais: "C'est de loin la meilleure candidate.",
        note: "By far renforce un superlatif. Easily se dit aussi, plus familier.",
      },
      {
        etranger: "It's not as simple as it looks.",
        francais: "Ce n'est pas aussi simple qu'il y paraît.",
        note: "Not as… as. So peut remplacer le premier as dans une négation.",
      },
      {
        etranger: "He's less experienced than she is.",
        francais: "Il a moins d'expérience qu'elle.",
        note: "Than she is, avec le verbe repris. Than her est courant mais critiqué.",
      },
      {
        etranger: "The results are much the same.",
        francais: "Les résultats sont sensiblement les mêmes.",
        note: "Much the same, à peu près identiques. La formule est figée.",
      },
      {
        etranger: "It's getting harder and harder.",
        francais: "Ça devient de plus en plus difficile.",
        note: "Le comparatif redoublé dit la progression : bigger and bigger, more and more.",
      },
    ],
  },

  {
    slug: "en-conditionnels-avances",
    category: "Grammaire en contexte",
    title: "Les conditionnelles au-delà de if",
    statement:
      "Unless, provided that, as long as, had I known. L'anglais a une demi-douzaine de façons de poser une condition, et if n'est que la plus simple.",
    tip: "Unless veut dire « sauf si », pas « si… ne… pas ». La nuance compte : unless it rains n'est pas exactement if it doesn't rain.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We'll go unless it rains.",
        francais: "Nous irons sauf s'il pleut.",
        note: "Unless, sauf si. La proposition reste affirmative après unless.",
      },
      {
        etranger: "Provided that you agree, we'll start.",
        francais: "À condition que tu sois d'accord, nous commençons.",
        note: "Provided that ou providing that. Plus formel que if.",
      },
      {
        etranger: "As long as it works, I don't mind.",
        francais: "Du moment que ça marche, ça m'est égal.",
        note: "As long as pose une condition minimale. So long as se dit aussi.",
      },
      {
        etranger: "Had I known, I'd have called.",
        francais: "Si j'avais su, j'aurais appelé.",
        note: "L'inversion remplace if dans le registre soutenu. Had, were et should seuls le permettent.",
      },
      {
        etranger: "Were it not for you, we'd have failed.",
        francais: "Sans toi, nous aurions échoué.",
        note: "Were it not for, sans. Formule très écrite, équivalente à if it weren't for.",
      },
      {
        etranger: "Should you need help, call me.",
        francais: "Si vous aviez besoin d'aide, appelez-moi.",
        note: "Should en tête dit une éventualité polie. Fréquent dans les courriels professionnels.",
      },
      {
        etranger: "In case it rains, take an umbrella.",
        francais: "Au cas où il pleuvrait, prends un parapluie.",
        note: "In case dit la précaution, pas la condition. Il ne se traduit jamais par « si ».",
      },
      {
        etranger: "But for the delay, we'd be there.",
        francais: "Sans le retard, nous y serions.",
        note: "But for + nom, sans. Registre soutenu, très employé à l'écrit.",
      },
      {
        etranger: "If I'd left earlier, I'd be home now.",
        francais: "Si j'étais parti plus tôt, je serais chez moi.",
        note: "Conditionnelle mixte : passé dans la condition, présent dans la conséquence.",
      },
      {
        etranger: "Even if she agrees, it won't help.",
        francais: "Même si elle accepte, cela ne servira à rien.",
        note: "Even if pose une condition qu'on écarte d'avance. Even though parlerait d'un fait.",
      },
    ],
  },
];
