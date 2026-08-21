/**
 * Anglais — les cours de grammaire.
 *
 * Chaque série porte un chapitre rédigé, lisible avant de s'exercer, et dix
 * cartes qui le mettent en pratique. Les sujets sont choisis pour un
 * francophone : ce sont les points où le français induit en erreur, pas ceux
 * qu'un manuel généraliste mettrait en tête.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_COURS_GRAMMAIRE: LotCartes[] = [
  {
    slug: "en-cours-modaux",
    category: "Grammaire en contexte",
    title: "Les modaux : pouvoir, devoir, oser dire",
    statement:
      "Can, could, must, should, may, might. Neuf petits verbes qui portent toute la nuance d'une phrase anglaise — la politesse, la certitude, l'obligation.",
    tip: "Un modal ne prend jamais de -s, jamais de to après lui, et se nie en collant not : he can't, she mustn't.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les auxiliaires de modalité",
      sections: [
        {
          titre: "Ce qu'ils ont tous en commun",
          texte:
            "Les modaux ne se conjuguent pas. Pas de -s à la troisième personne — he can, jamais « he cans ». Pas de to derrière — I must go, jamais « I must to go ». Pas d'auxiliaire pour la question ni la négation : ils s'en chargent eux-mêmes. Can you ? I can't.\n\nCette rigidité a un revers : ils n'ont pas d'infinitif ni de participe, donc pas de temps composés. Pour dire « j'ai pu », l'anglais emprunte à un autre verbe : I was able to. Pour « il faudra », I will have to.\n\nEnfin, ils ne portent pas le temps comme les autres verbes. Could n'est pas seulement le passé de can : c'est souvent un présent plus poli, ou une hypothèse.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qu'ils disent, et à quel degré",
              colonnes: ["Modal", "Sens", "Exemple", "Force"],
              lignes: [
                ["can", "capacité, permission", "I can swim.", "neutre"],
                ["could", "politesse, hypothèse", "Could you help me?", "adouci"],
                ["may", "permission formelle, possibilité", "It may rain.", "50 %"],
                ["might", "possibilité plus faible", "It might rain.", "30 %"],
                ["must", "obligation, quasi-certitude", "You must stop.", "fort"],
                ["should", "conseil, attente", "You should rest.", "conseil"],
                ["will", "volonté, futur", "I'll do it.", "décision"],
                ["would", "hypothèse, politesse", "I would say so.", "adouci"],
              ],
            },
          ],
        },
        {
          titre: "L'obligation et son absence : le piège le plus coûteux",
          texte:
            "Must et have to disent tous deux l'obligation, mais pas d'où elle vient. Must vient de celui qui parle : I must stop smoking, je me l'impose. Have to vient de l'extérieur : I have to wear a uniform, c'est le règlement. La nuance est réelle, et les anglophones l'entendent.\n\nLa vraie difficulté est ailleurs, et elle coûte cher : à la forme négative, les deux se séparent complètement. Mustn't est une interdiction — you mustn't tell anyone, c'est défendu. Don't have to est une absence d'obligation — you don't have to tell anyone, tu peux te taire ou parler, comme tu veux.\n\nConfondre les deux fait dire exactement le contraire de ce qu'on pense.",
          visuels: [
            {
              type: "comparaison",
              titre: "La négation qui retourne le sens",
              colonnes: [
                {
                  titre: "mustn't — c'est interdit",
                  points: [
                    "You mustn't be late. — surtout pas.",
                    "You mustn't tell her. — c'est un secret.",
                    "Passengers mustn't smoke. — défendu.",
                  ],
                },
                {
                  titre: "don't have to — c'est facultatif",
                  points: [
                    "You don't have to be early. — rien ne t'y oblige.",
                    "You don't have to tell her. — libre à toi.",
                    "You don't have to pay. — c'est offert.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Deviner, supposer, déduire",
          texte:
            "Là où le français emploie « devoir » et « pouvoir » au sens de la probabilité, l'anglais emploie ses modaux avec la même souplesse — et c'est là qu'on gagne en naturel.\n\nMust marque la quasi-certitude déduite : the lights are on, she must be home. Can't marque l'impossibilité déduite : she can't be home, her car isn't here. Attention, ce n'est pas mustn't : la déduction négative se dit can't.\n\nEntre les deux, may et might disent la possibilité, might étant la plus faible. She may be home. She might be home.\n\nPour parler du passé, on ajoute have plus le participe : she must have left, elle a dû partir ; you should have told me, tu aurais dû me le dire.",
        },
      ],
    },
    cartes: [
      { etranger: "Could you help me for a second?", francais: "Tu peux m'aider une seconde ?", note: "Could adoucit : plus poli que can, sans être guindé." },
      { etranger: "You mustn't tell anyone.", francais: "Il ne faut surtout le dire à personne.", note: "Mustn't est une interdiction, pas une absence d'obligation." },
      { etranger: "You don't have to come.", francais: "Tu n'es pas obligé de venir.", note: "Absence d'obligation. Confondre avec mustn't dit exactement le contraire." },
      { etranger: "She must be home.", francais: "Elle doit être chez elle.", note: "Déduction quasi certaine : must." },
      { etranger: "He can't be serious.", francais: "Il ne peut pas être sérieux.", note: "La déduction NÉGATIVE se dit can't, jamais mustn't." },
      { etranger: "It might rain later.", francais: "Il pleuvra peut-être plus tard.", note: "Might, plus faible que may. Ni l'un ni l'autre ne prend de to." },
      { etranger: "You should get some sleep.", francais: "Tu devrais dormir un peu.", note: "Should conseille ; must ordonne." },
      { etranger: "I was able to finish it.", francais: "J'ai pu le finir.", note: "Can n'a pas de participe : au passé composé, on emprunte à be able to." },
      { etranger: "You should have told me.", francais: "Tu aurais dû me le dire.", note: "Modal + have + participe : le reproche rétrospectif." },
      { etranger: "We'll have to leave early.", francais: "On devra partir tôt.", note: "Must n'a pas de futur : on emploie will have to." },
    ],
  },

  {
    slug: "en-cours-articles",
    category: "Grammaire en contexte",
    title: "A, an, the, et rien du tout",
    statement:
      "Le français met un article presque partout. L'anglais l'omet souvent — et cet article de trop est le marqueur le plus reconnaissable d'un francophone.",
    tip: "Pas d'article devant une généralité au pluriel ni devant un abstrait : cats are independent, love is complicated.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les articles anglais",
      sections: [
        {
          titre: "A ou an : une affaire de son, pas de lettre",
          texte:
            "L'article indéfini s'écrit a devant une consonne prononcée, an devant une voyelle prononcée. Le mot compte moins que le son : a university, parce qu'on entend « you » ; an hour, parce que le h est muet ; a European country, parce qu'on entend « you » là aussi.\n\nOn l'emploie devant un métier — she's a doctor — là où le français dit « elle est médecin » sans article. C'est une faute très fréquente et très visible.\n\nEt il n'existe pas de pluriel : le pluriel de a book est books, tout simplement.",
          visuels: [
            {
              type: "etapes",
              titre: "Quel article, en trois questions",
              etapes: [
                {
                  titre: "Est-ce un dénombrable au singulier ?",
                  texte: "Si oui, il lui faut un article : a book, the book. Jamais « I have book ».",
                },
                {
                  titre: "Mon interlocuteur sait-il de quoi je parle ?",
                  texte: "Oui → the. Non → a. « I bought a book. The book was expensive. » On introduit avec a, on reprend avec the.",
                },
                {
                  titre: "Est-ce une généralité ?",
                  texte: "Alors rien du tout, au pluriel ou avec un indénombrable : dogs bark, water is wet, I like music.",
                },
              ],
            },
          ],
        },
        {
          titre: "L'article zéro : là où le français en met un",
          texte:
            "C'est le point qui trahit le plus vite. Le français dit « les chiens aboient », « la vie est courte », « j'aime la musique ». L'anglais ne met rien : dogs bark, life is short, I like music.\n\nLa règle est nette : pas d'article devant une généralité, qu'elle soit au pluriel ou indénombrable. Dès qu'on parle d'un cas précis, the revient : the dogs next door bark all night.\n\nMême logique pour les repas — I had lunch —, les matières scolaires — she teaches history —, les langues — I speak Spanish —, et beaucoup de lieux pris dans leur fonction : go to school pour étudier, mais go to the school pour se rendre au bâtiment.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le français met, l'anglais omet",
              colonnes: [
                {
                  titre: "Généralité — rien",
                  points: [
                    "Dogs bark. — les chiens aboient.",
                    "Life is short. — la vie est courte.",
                    "I like music. — j'aime la musique.",
                    "He teaches history. — il enseigne l'histoire.",
                  ],
                },
                {
                  titre: "Cas précis — the",
                  points: [
                    "The dogs next door bark.",
                    "The life he chose was hard.",
                    "I like the music in this film.",
                    "The history of Rome.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quelques cas figés",
          texte:
            "Certains emplois ne se déduisent d'aucune règle et se retiennent tels quels.\n\nAvec the : les fleuves et les mers (the Thames, the Atlantic), les pays au pluriel ou composés (the Netherlands, the United States), les superlatifs (the best), les instruments joués (play the piano), et les repères uniques (the sun, the internet).\n\nSans article : les noms de pays simples (France, Spain), les villes, les jours et les mois, les repas, et next et last devant un temps (see you next week, jamais « the next week »).",
        },
      ],
    },
    cartes: [
      { etranger: "She's a doctor.", francais: "Elle est médecin.", note: "L'article est obligatoire devant un métier, là où le français n'en met pas." },
      { etranger: "Dogs bark.", francais: "Les chiens aboient.", note: "Généralité au pluriel : aucun article. « The dogs bark » désignerait des chiens précis." },
      { etranger: "I like music.", francais: "J'aime la musique.", note: "Un indénombrable pris en général ne prend rien." },
      { etranger: "It took an hour.", francais: "Ça a pris une heure.", note: "An devant un h muet : c'est le son qui décide, pas la lettre." },
      { etranger: "He went to university.", francais: "Il est allé à l'université.", note: "Le lieu pris dans sa fonction se passe d'article. A university se dirait pour le bâtiment." },
      { etranger: "Life is short.", francais: "La vie est courte." },
      { etranger: "See you next week.", francais: "À la semaine prochaine.", note: "Next et last ne prennent jamais the." },
      { etranger: "She plays the piano.", francais: "Elle joue du piano.", note: "Un instrument joué prend the ; un sport pratiqué ne prend rien : she plays tennis." },
      { etranger: "I had lunch at noon.", francais: "J'ai déjeuné à midi.", note: "Les repas se passent d'article." },
      { etranger: "The book I lent you.", francais: "Le livre que je t'ai prêté.", note: "Précisé par une relative : the s'impose." },
    ],
  },

  {
    slug: "en-cours-quantifieurs",
    category: "Grammaire en contexte",
    title: "Combien : much, many, few, little",
    statement:
      "L'anglais compte ou pèse, et choisit ses mots en conséquence. Le français dit « beaucoup » dans les deux cas — d'où les erreurs.",
    tip: "Ce qui se compte prend many et few ; ce qui se pèse prend much et little. Water, money, advice, information ne se comptent pas.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Dénombrables et indénombrables",
      sections: [
        {
          titre: "La frontière, et ses surprises",
          texte:
            "Un dénombrable se compte : one book, two books. Un indénombrable ne se compte pas directement : on ne dit pas « two waters », on dit two glasses of water.\n\nJusque-là, le français fait pareil. Le piège est que la frontière n'est pas au même endroit dans les deux langues. Information, advice, news, furniture, luggage, homework, bread, money sont indénombrables en anglais alors que le français les compte volontiers.\n\nD'où : an information n'existe pas — on dit a piece of information ou some information. Advice non plus : a piece of advice. Et news, malgré son -s, est singulier : the news is good.",
          visuels: [
            {
              type: "tableau",
              titre: "Le mot juste selon ce qu'on compte",
              colonnes: ["", "Dénombrables", "Indénombrables"],
              lignes: [
                ["beaucoup", "many books", "much water"],
                ["peu (négatif)", "few books", "little water"],
                ["un peu (positif)", "a few books", "a little water"],
                ["combien", "how many?", "how much?"],
                ["question / négation", "any books", "any water"],
                ["affirmation", "some books", "some water"],
              ],
              note: "À l'oral, a lot of remplace much et many partout et passe toujours.",
            },
          ],
        },
        {
          titre: "Few ou a few : l'article change le sens",
          texte:
            "C'est une subtilité que le français ne marque pas, et qui change le ton de la phrase.\n\nFew et little, sans article, sont négatifs : ils soulignent le manque. Few people came veut dire que la salle était vide, et que c'est décevant.\n\nA few et a little, avec article, sont positifs : ils soulignent qu'il y en a. A few people came veut dire qu'il y avait du monde, un petit noyau, et c'est plutôt une bonne nouvelle.\n\nLa même phrase, à un article près, dit donc la déception ou la satisfaction.",
        },
        {
          titre: "Some et any",
          texte:
            "Some s'emploie à l'affirmative, any à la question et à la négation. I have some money ; do you have any money ? ; I don't have any money.\n\nDeux exceptions utiles. Some apparaît dans une question quand on propose ou qu'on attend un oui : would you like some tea ? Et any à l'affirmative prend le sens de « n'importe lequel » : any bus will do, n'importe quel bus fera l'affaire.",
        },
      ],
    },
    cartes: [
      { etranger: "How many chairs do we need?", francais: "Il nous faut combien de chaises ?", note: "Chair se compte : many. Furniture, non : how much furniture." },
      { etranger: "I don't have much time.", francais: "Je n'ai pas beaucoup de temps.", note: "Time ne se compte pas : much." },
      { etranger: "Few people came.", francais: "Peu de gens sont venus.", note: "Sans article : négatif, la salle était vide." },
      { etranger: "A few people came.", francais: "Quelques personnes sont venues.", note: "Avec article : positif, il y avait un petit monde." },
      { etranger: "Can I give you a piece of advice?", francais: "Je peux te donner un conseil ?", note: "Advice est indénombrable : jamais « an advice »." },
      { etranger: "The news is good.", francais: "La nouvelle est bonne.", note: "News prend un -s mais reste singulier." },
      { etranger: "Do you have any questions?", francais: "Tu as des questions ?", note: "Any à la question ; some à l'affirmative." },
      { etranger: "Would you like some tea?", francais: "Tu veux du thé ?", note: "Some dans une question quand on propose : on attend un oui." },
      { etranger: "Any bus will do.", francais: "N'importe quel bus fera l'affaire.", note: "Any à l'affirmative prend le sens de « n'importe lequel »." },
      { etranger: "I need a little help.", francais: "J'ai besoin d'un peu d'aide.", note: "Help est indénombrable : a little, jamais « a few »." },
    ],
  },

  {
    slug: "en-cours-comparatifs",
    category: "Grammaire en contexte",
    title: "Comparer et classer",
    statement:
      "Plus, moins, aussi, le plus. La règle anglaise dépend de la longueur du mot — une mécanique simple, appliquée sans exception ou presque.",
    tip: "Un ou deux syllabes : -er et -est. Trois ou plus : more et most. Big → bigger, expensive → more expensive.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Le comparatif et le superlatif",
      sections: [
        {
          titre: "Court ou long : la règle des syllabes",
          texte:
            "Les adjectifs d'une syllabe prennent -er au comparatif et -est au superlatif : tall, taller, the tallest. Ceux de deux syllabes finissant par -y font pareil, en changeant le y en i : happy, happier, the happiest.\n\nLes adjectifs de trois syllabes ou plus, et la plupart de ceux de deux syllabes, emploient more et most : expensive, more expensive, the most expensive.\n\nDeux ajustements orthographiques : une consonne finale unique précédée d'une voyelle double — big, bigger — et un e final ne se répète pas — nice, nicer.\n\nQuatre irréguliers reviennent sans arrêt : good/better/best, bad/worse/worst, far/further/furthest, little/less/least.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois degrés",
              colonnes: ["Adjectif", "Comparatif", "Superlatif"],
              lignes: [
                ["tall", "taller than", "the tallest"],
                ["big", "bigger than", "the biggest"],
                ["happy", "happier than", "the happiest"],
                ["expensive", "more expensive than", "the most expensive"],
                ["good", "better than", "the best"],
                ["bad", "worse than", "the worst"],
                ["far", "further than", "the furthest"],
              ],
            },
          ],
        },
        {
          titre: "Than, as, the : les mots qui accompagnent",
          texte:
            "Le comparatif de supériorité et d'infériorité s'accompagne de than : she's taller than me. En anglais courant, me est correct après than ; than I est plus formel et sonne guindé à l'oral.\n\nL'égalité se dit as… as : as tall as me. Sa négation, not as… as, exprime l'infériorité, et c'est de loin la tournure la plus courante pour dire « moins que » : it's not as expensive as I thought, littéralement pas aussi cher que je pensais.\n\nLe superlatif prend the : the tallest, the most expensive. Et il se complète souvent par in pour un lieu — the tallest building in Paris — jamais par of dans ce cas.",
        },
        {
          titre: "Deux tournures qui font naturel",
          texte:
            "La progression se dit en répétant le comparatif : it's getting colder and colder, de plus en plus froid. Avec un adjectif long : more and more expensive.\n\nLa proportion se dit avec deux the : the sooner, the better — le plus tôt sera le mieux. The more you practise, the easier it gets. C'est une structure figée, très employée, et qui n'a pas d'équivalent mot à mot en français.",
        },
      ],
    },
    cartes: [
      { etranger: "She's taller than me.", francais: "Elle est plus grande que moi.", note: "Than me à l'oral ; than I est formel et rare." },
      { etranger: "This one is more expensive.", francais: "Celui-ci est plus cher.", note: "Trois syllabes : more, jamais « expensiver »." },
      { etranger: "It's the best film I've seen.", francais: "C'est le meilleur film que j'aie vu.", note: "good, better, best. Irrégulier." },
      { etranger: "It's not as cold as yesterday.", francais: "Il fait moins froid qu'hier.", note: "Not as… as est la façon courante de dire « moins que »." },
      { etranger: "He's as tall as his brother.", francais: "Il est aussi grand que son frère." },
      { etranger: "That was worse than I expected.", francais: "C'était pire que ce que j'attendais.", note: "bad, worse, worst." },
      { etranger: "It's getting colder and colder.", francais: "Il fait de plus en plus froid.", note: "Le comparatif répété marque la progression." },
      { etranger: "The sooner, the better.", francais: "Le plus tôt sera le mieux.", note: "Structure figée à deux the, sans équivalent mot à mot." },
      { etranger: "It's the tallest building in Paris.", francais: "C'est le plus haut bâtiment de Paris.", note: "In après un superlatif de lieu, jamais of." },
      { etranger: "She works harder than anyone.", francais: "Elle travaille plus dur que quiconque.", note: "Hard est adjectif et adverbe ; hardly veut dire à peine." },
    ],
  },
];
