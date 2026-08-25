/**
 * Anglais — choisir le mot exact.
 *
 * La seconde moitié de la troisième passe. Ce qui reste après le vocabulaire
 * et les collocations, c'est la PRÉCISION : savoir lequel de quatre synonymes
 * convient, quelle préposition suit quel verbe, ce qui se compte et ce qui ne
 * se compte pas, et ce qu'un mot fait entendre en plus de ce qu'il dit.
 *
 * Ce sont les séries qui séparent un anglais correct d'un anglais juste. Elles
 * ne s'apprennent pas en lisant : elles s'apprennent en comparant deux phrases
 * qui ne diffèrent que d'un mot.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_PRECISION: LotCartes[] = [
  {
    slug: "en-synonymes-dire",
    category: "Verbes",
    title: "Say, tell, speak, talk",
    statement:
      "Quatre verbes pour ce que le français dit avec « dire » et « parler ». Ils ne se distinguent pas par le sens mais par ce qui les suit.",
    tip: "Say quelque chose, tell quelqu'un, speak une langue, talk about un sujet. La construction est le seul critère fiable.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She said she would come.",
        francais: "Elle a dit qu'elle viendrait.",
        note: "Say + ce qui est dit. Say me est impossible : il faut say to me.",
      },
      {
        etranger: "Tell me what happened.",
        francais: "Dis-moi ce qui s'est passé.",
        note: "Tell + la personne, sans préposition. Tell to me est fautif.",
      },
      {
        etranger: "He speaks four languages.",
        francais: "Il parle quatre langues.",
        note: "Speak + langue. Talk ne s'emploie jamais avec un nom de langue.",
      },
      {
        etranger: "We talked about it for hours.",
        francais: "Nous en avons parlé pendant des heures.",
        note: "Talk about, discuter d'un sujet. Speak about existe, plus formel.",
      },
      {
        etranger: "Could I speak to the manager?",
        francais: "Pourrais-je parler au responsable ?",
        note: "Speak to someone, formule polie. Talk to serait plus familier.",
      },
      {
        etranger: "She told me a story.",
        francais: "Elle m'a raconté une histoire.",
        note: "Tell a story, a joke, a lie, the truth. Say ne convient dans aucun de ces cas.",
      },
      {
        etranger: "Say it again, please.",
        francais: "Répète, s'il te plaît.",
        note: "Say something again. Tell exigerait un destinataire.",
      },
      {
        etranger: "He never talks about his work.",
        francais: "Il ne parle jamais de son travail.",
        note: "Talk about pour un sujet régulier. Discuss ferait plus formel et sans about.",
      },
      {
        etranger: "Tell the difference between the two.",
        francais: "Distingue les deux.",
        aussi: ["Fais la différence entre les deux."],
        note: "Tell the difference, distinguer. Ce sens de tell n'a rien à voir avec dire.",
      },
      {
        etranger: "The report says otherwise.",
        francais: "Le rapport dit le contraire.",
        note: "Say s'emploie pour un texte : the sign says, the law says.",
      },
    ],
  },

  {
    slug: "en-synonymes-changer",
    category: "Verbes",
    title: "Change, alter, amend, adjust",
    statement:
      "Quatre verbes pour « changer », et le choix dit ce qu'on change, de combien, et si l'on en avait le droit.",
    tip: "Alter est un changement partiel, amend un changement de texte officiel, adjust un réglage fin. Change couvre tout mais dit le moins.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We altered the design slightly.",
        francais: "Nous avons légèrement modifié le dessin.",
        note: "Alter, modifier partiellement sans changer la nature. Souvent avec slightly.",
      },
      {
        etranger: "The law was amended in 2019.",
        francais: "La loi a été modifiée en 2019.",
        note: "Amend ne s'emploie que pour un texte officiel : loi, contrat, statuts.",
      },
      {
        etranger: "Adjust the settings if needed.",
        francais: "Ajustez les réglages si besoin.",
        note: "Adjust, régler finement. Le complément est presque toujours technique.",
      },
      {
        etranger: "Nothing has changed since then.",
        francais: "Rien n'a changé depuis.",
        note: "Change à l'intransitif : le sujet subit le changement.",
      },
      {
        etranger: "The figures were revised upwards.",
        francais: "Les chiffres ont été révisés à la hausse.",
        note: "Revise, réviser un chiffre ou un texte. Upwards ou downwards suit toujours.",
      },
      {
        etranger: "They swapped places.",
        francais: "Ils ont échangé leurs places.",
        note: "Swap, échanger l'un contre l'autre. Exchange est plus formel.",
      },
      {
        etranger: "The plan was scrapped entirely.",
        francais: "Le projet a été purement et simplement abandonné.",
        note: "Scrap, mettre au rebut. Bien plus fort que cancel.",
      },
      {
        etranger: "We need to overhaul the process.",
        francais: "Il faut refondre entièrement le processus.",
        note: "Overhaul, refondre de fond en comble. Le mot vient de la mécanique navale.",
      },
      {
        etranger: "The wording was tweaked.",
        francais: "La formulation a été retouchée.",
        note: "Tweak, retoucher légèrement. Familier mais très employé en entreprise.",
      },
      {
        etranger: "Circumstances have shifted.",
        francais: "Les circonstances ont évolué.",
        note: "Shift, se déplacer par degrés. Moins brutal que change, plus lent.",
      },
    ],
  },

  {
    slug: "en-prepositions-2",
    category: "Pièges du français",
    title: "La préposition qu'exige le verbe",
    statement:
      "Depend on, consist of, result in, comply with. Chaque verbe impose sa préposition, elle ne se déduit pas du sens, et le français en met souvent une autre.",
    tip: "Ces couples s'apprennent avec le verbe, comme le genre d'un nom. Traduire la préposition française donne faux presque à chaque fois.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The outcome depends on funding.",
        francais: "L'issue dépend du financement.",
        note: "Depend on, jamais « depend of ». La faute est la plus fréquente des francophones.",
      },
      {
        etranger: "The course consists of five modules.",
        francais: "Le cours comporte cinq modules.",
        note: "Consist of, se composer de. Consist in existe et veut dire consister en.",
      },
      {
        etranger: "The delay resulted in extra costs.",
        francais: "Le retard a entraîné des coûts supplémentaires.",
        note: "Result in pour la conséquence, result from pour la cause.",
      },
      {
        etranger: "You must comply with the rules.",
        francais: "Vous devez respecter le règlement.",
        note: "Comply with. Le verbe ne prend jamais de complément direct.",
      },
      {
        etranger: "She's married to a doctor.",
        francais: "Elle est mariée à un médecin.",
        note: "Married to, jamais « married with ». La faute est calquée du français parlé.",
      },
      {
        etranger: "He apologised for the delay.",
        francais: "Il s'est excusé du retard.",
        note: "Apologise for something, to someone. Les deux prépositions coexistent.",
      },
      {
        etranger: "This accounts for the difference.",
        francais: "Cela explique la différence.",
        note: "Account for, expliquer. Sans for, le verbe ne veut rien dire de tel.",
      },
      {
        etranger: "They insisted on paying.",
        francais: "Ils ont insisté pour payer.",
        note: "Insist on + gérondif. Insist to do n'existe pas.",
      },
      {
        etranger: "I'm not familiar with that name.",
        francais: "Ce nom ne me dit rien.",
        note: "Familiar with, connaître ; familiar to, être connu de. Les deux existent et s'opposent.",
      },
      {
        etranger: "The decision rests with the board.",
        francais: "La décision revient au conseil.",
        note: "Rest with someone, incomber à. Formule de règlement intérieur.",
      },
    ],
  },

  {
    slug: "en-nombrable",
    category: "Pièges du français",
    title: "Ce qui se compte et ce qui ne se compte pas",
    statement:
      "Advice, information, research, evidence. Ces mots n'ont pas de pluriel en anglais, et le français les compte tous.",
    tip: "Pour compter un indénombrable, on l'encadre : a piece of advice, an item of information, a body of research. Le mot lui-même ne bouge jamais.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "That's good advice.",
        francais: "C'est un bon conseil.",
        note: "Advice est indénombrable : jamais « an advice », jamais « advices ».",
      },
      {
        etranger: "I need more information.",
        francais: "J'ai besoin de plus d'informations.",
        note: "Information ne prend jamais de s. Le pluriel français n'a pas d'équivalent.",
      },
      {
        etranger: "The research is still ongoing.",
        francais: "Les recherches sont toujours en cours.",
        note: "Research est indénombrable et prend un verbe singulier.",
      },
      {
        etranger: "There is little evidence for this.",
        francais: "Les preuves sont minces.",
        note: "Evidence est indénombrable : little evidence, pas « few evidences ».",
      },
      {
        etranger: "He gave me two pieces of advice.",
        francais: "Il m'a donné deux conseils.",
        note: "A piece of advice est la seule façon de compter. Le mot advice reste au singulier.",
      },
      {
        etranger: "The furniture was already there.",
        francais: "Les meubles étaient déjà là.",
        note: "Furniture est indénombrable. Un meuble se dit a piece of furniture.",
      },
      {
        etranger: "We made good progress.",
        francais: "Nous avons bien avancé.",
        aussi: ["Nous avons fait de bons progrès."],
        note: "Progress est indénombrable : jamais « progresses ».",
      },
      {
        etranger: "The news was worse than expected.",
        francais: "Les nouvelles étaient pires que prévu.",
        note: "News se termine par un s mais reste singulier : the news is, jamais are.",
      },
      {
        etranger: "There were three staff on duty.",
        francais: "Il y avait trois employés de service.",
        note: "Staff est collectif et prend un verbe pluriel en anglais britannique.",
      },
      {
        etranger: "Two coffees, please.",
        francais: "Deux cafés, s'il vous plaît.",
        note: "Un indénombrable se compte quand il désigne une portion : two coffees, deux tasses.",
      },
    ],
  },

  {
    slug: "en-articles-pieges",
    category: "Pièges du français",
    title: "Quand l'anglais n'a pas d'article",
    statement:
      "Life is short. She goes to school. Il joue du piano. L'anglais supprime l'article là où le français l'exige, et l'ajouter change le sens.",
    tip: "Sans article, le nom désigne l'institution ou la catégorie ; avec, un lieu ou un objet précis. Go to school, aller étudier ; go to the school, se rendre au bâtiment.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Patience is a virtue.",
        francais: "La patience est une vertu.",
        note: "Pas d'article devant un nom abstrait pris en général.",
      },
      {
        etranger: "She goes to school by bus.",
        francais: "Elle va à l'école en bus.",
        note: "To school sans article : l'institution. To the school désignerait le bâtiment.",
      },
      {
        etranger: "He's in hospital.",
        francais: "Il est à l'hôpital.",
        note: "In hospital en anglais britannique dit qu'on y est soigné ; in the hospital, qu'on s'y trouve.",
      },
      {
        etranger: "I play the piano.",
        francais: "Je joue du piano.",
        note: "L'article revient devant un instrument, et disparaît devant un sport.",
      },
      {
        etranger: "Cats are independent.",
        francais: "Les chats sont indépendants.",
        note: "Pluriel sans article pour une généralité. The cats désignerait des chats précis.",
      },
      {
        etranger: "We had dinner at eight.",
        francais: "Nous avons dîné à vingt heures.",
        note: "Pas d'article devant les repas : have breakfast, lunch, dinner.",
      },
      {
        etranger: "He went to prison for it.",
        francais: "Il est allé en prison pour ça.",
        note: "To prison, y être détenu. To the prison, s'y rendre en visiteur.",
      },
      {
        etranger: "The rich get richer.",
        francais: "Les riches s'enrichissent.",
        note: "The + adjectif désigne un groupe entier et prend un verbe pluriel.",
      },
      {
        etranger: "She plays tennis on Sundays.",
        francais: "Elle joue au tennis le dimanche.",
        note: "Pas d'article devant un sport. On Sundays, le pluriel dit l'habitude.",
      },
      {
        etranger: "Man is a social animal.",
        francais: "L'homme est un animal social.",
        note: "Man sans article pour l'espèce. L'emploi appartient à l'écrit soutenu.",
      },
    ],
  },

  {
    slug: "en-adverbes-place",
    category: "Grammaire en contexte",
    title: "Où se met l'adverbe",
    statement:
      "I only saw her. I saw only her. La place de l'adverbe change ce sur quoi il porte, et l'anglais n'a pas d'accord pour rattraper l'ordre.",
    tip: "Les adverbes de fréquence se mettent avant le verbe principal, mais après be. She always arrives late, mais she is always late.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She always arrives early.",
        francais: "Elle arrive toujours en avance.",
        note: "L'adverbe de fréquence précède le verbe principal.",
      },
      {
        etranger: "She is always early.",
        francais: "Elle est toujours en avance.",
        note: "Avec be, l'adverbe passe après. La règle s'inverse pour ce seul verbe.",
      },
      {
        etranger: "He has never been there.",
        francais: "Il n'y est jamais allé.",
        note: "Avec un auxiliaire, l'adverbe se glisse entre l'auxiliaire et le participe.",
      },
      {
        etranger: "I hardly know him.",
        francais: "Je le connais à peine.",
        note: "Hardly est un négatif : il ne se combine pas avec not.",
      },
      {
        etranger: "Frankly, I don't care.",
        francais: "Franchement, ça m'est égal.",
        note: "En tête, l'adverbe commente toute la phrase et non le verbe.",
      },
      {
        etranger: "He speaks English well.",
        francais: "Il parle bien anglais.",
        note: "L'adverbe de manière suit le complément. « Speaks well English » est fautif.",
      },
      {
        etranger: "We nearly missed the train.",
        francais: "Nous avons failli rater le train.",
        note: "Nearly et almost précèdent le verbe et traduisent souvent « faillir ».",
      },
      {
        etranger: "She works here occasionally.",
        francais: "Elle travaille ici de temps en temps.",
        note: "Les adverbes de fréquence longs se placent volontiers en fin de phrase.",
      },
      {
        etranger: "Even he didn't know.",
        francais: "Même lui ne le savait pas.",
        note: "Even porte sur ce qui suit immédiatement. Le déplacer change la cible.",
      },
      {
        etranger: "He didn't even know.",
        francais: "Il ne le savait même pas.",
        note: "Même mot, autre place, autre sens : ici c'est l'ignorance qui surprend.",
      },
    ],
  },

  {
    slug: "en-c2-connotation",
    category: "Expressions",
    title: "Ce qu'un mot fait entendre",
    statement:
      "Slim, thin, skinny, scrawny. Quatre mots pour la même silhouette, du compliment à l'insulte. Le sens est identique ; la connotation ne l'est pas.",
    tip: "Un dictionnaire bilingue donne le sens, jamais la charge. C'est elle qui décide si une phrase est aimable ou blessante.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "She's very slim.",
        francais: "Elle est très mince.",
        note: "Slim est flatteur, thin neutre, skinny péjoratif, scrawny franchement méchant.",
      },
      {
        etranger: "He's quite stubborn.",
        francais: "Il est plutôt têtu.",
        note: "Stubborn condamne ; determined loue la même qualité, resolute la relève.",
      },
      {
        etranger: "That's a cheap solution.",
        francais: "C'est une solution au rabais.",
        aussi: ["C'est une solution bon marché."],
        note: "Cheap dit souvent la piètre qualité. Inexpensive ne dit que le prix.",
      },
      {
        etranger: "The report is thorough.",
        francais: "Le rapport est complet.",
        note: "Thorough loue ; exhaustive est neutre ; long, en parlant d'un rapport, condamne.",
      },
      {
        etranger: "He's a shrewd negotiator.",
        francais: "C'est un négociateur habile.",
        note: "Shrewd loue l'astuce ; cunning dit la ruse et devient un reproche.",
      },
      {
        etranger: "It's a modest improvement.",
        francais: "C'est une amélioration modeste.",
        note: "Modest atténue avec égard ; marginal atténue avec dédain.",
      },
      {
        etranger: "They're an ambitious team.",
        francais: "C'est une équipe ambitieuse.",
        note: "Ambitious loue en anglais, plus systématiquement qu'ambitieux en français.",
      },
      {
        etranger: "The response was measured.",
        francais: "La réponse a été mesurée.",
        note: "Measured loue la retenue ; timid dirait la même retenue en la condamnant.",
      },
      {
        etranger: "That's an interesting choice.",
        francais: "C'est un choix intéressant.",
        note: "Selon le ton, éloge ou réserve polie. C'est l'ambiguïté la plus employée de l'anglais.",
      },
      {
        etranger: "It's a bold claim.",
        francais: "C'est une affirmation audacieuse.",
        note: "Bold loue le courage et signale en même temps qu'on n'est pas convaincu.",
      },
    ],
  },

  {
    slug: "en-c2-modal",
    category: "Grammaire en contexte",
    title: "Le degré exact d'un modal",
    statement:
      "Must, should, ought to, might well. Les modaux anglais forment une échelle continue, du soupçon à la certitude, et chaque barreau porte un degré précis.",
    tip: "Must au passé — must have — dit une déduction, pas une obligation. C'est le seul emploi de must qui ne commande rien.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He must have left already.",
        francais: "Il a dû partir déjà.",
        note: "Must + have + participe : une déduction, jamais une obligation passée.",
      },
      {
        etranger: "She can't have known.",
        francais: "Elle ne peut pas avoir été au courant.",
        aussi: ["Ce n'est pas possible qu'elle ait été au courant."],
        note: "Déduction, non incapacité : « elle ne pouvait pas » se dirait couldn't. Can't have est la négation de must have. Mustn't have ne se dit pas.",
      },
      {
        etranger: "You might well be right.",
        francais: "Il se pourrait bien que tu aies raison.",
        note: "Might well renforce might. La probabilité monte d'un cran sans atteindre la certitude.",
      },
      {
        etranger: "They should have told us.",
        francais: "Ils auraient dû nous le dire.",
        note: "Should have exprime le reproche : l'action attendue n'a pas eu lieu.",
      },
      {
        etranger: "It ought to work.",
        francais: "Ça devrait marcher.",
        note: "Ought to est proche de should, un peu plus formel et un peu plus objectif.",
      },
      {
        etranger: "You needn't have bothered.",
        francais: "Tu n'avais pas besoin de te déranger.",
        note: "Needn't have : la chose a été faite pour rien. Didn't need to dirait qu'elle ne l'a pas été.",
      },
      {
        etranger: "He may well object.",
        francais: "Il pourrait bien s'y opposer.",
        note: "May well, comme might well, monte d'un cran. May seul serait plus faible.",
      },
      {
        etranger: "That would explain it.",
        francais: "Cela expliquerait la chose.",
        note: "Would pour une hypothèse qui s'ajuste aux faits. Will serait une prédiction.",
      },
      {
        etranger: "You could have warned me.",
        francais: "Tu aurais pu me prévenir.",
        note: "Could have est un reproche plus doux que should have : la possibilité, pas le devoir.",
      },
      {
        etranger: "It can be difficult at first.",
        francais: "Ça peut être difficile au début.",
        note: "Can pour une possibilité générale ; may dirait une permission ou un cas particulier.",
      },
    ],
  },
];
