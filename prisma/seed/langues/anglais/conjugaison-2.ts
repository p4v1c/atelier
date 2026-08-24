/**
 * Anglais — huit chapitres de conjugaison de plus.
 *
 * Le module n'en comptait que trois : le présent, les passés, le futur. Or
 * l'anglais ne se conjugue presque pas — sa difficulté est ailleurs, dans le
 * choix de la forme. Ces huit séries couvrent ce choix, du socle A1 jusqu'au
 * C1 : les trois auxiliaires, l'impératif, les irréguliers par familles de
 * sons, le passé habituel, les verbes qui refusent le -ing, les modaux du
 * passé, les conditionnelles mixtes et ce qu'il reste du subjonctif.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_CONJUGAISON_2: LotCartes[] = [
  {
    slug: "en-conj-be-have-do",
    category: "Conjugaison",
    title: "Be, have, do : les trois auxiliaires",
    statement:
      "Trois verbes portent toute la conjugaison anglaise : ils forment les questions, les négations, les temps composés — et ils sont les seuls à être vraiment irréguliers.",
    tip: "Do n'apparaît que si aucun autre auxiliaire n'est là. Dès qu'il y a be, have ou un modal, do disparaît.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les trois piliers",
      sections: [
        {
          titre: "La règle du seul auxiliaire",
          texte:
            "L'anglais construit ses questions et ses négations avec un auxiliaire, et il n'en admet qu'un à la fois. C'est la règle qui explique presque tout.\n\nSi la phrase contient déjà be, have ou un modal, c'est lui qui monte en tête pour la question et qui reçoit le not pour la négation. She is late donne Is she late ? et She isn't late. You can swim donne Can you swim ? et You can't swim.\n\nSi la phrase n'en contient aucun, l'anglais en fabrique un : do au présent, does à la troisième personne, did au passé. You like tea donne Do you like tea ? et You don't like tea. She came donne Did she come ? et She didn't come.\n\nLa conséquence la plus utile est celle-ci : dès que do apparaît, le verbe principal repasse à l'infinitif nu. Did she come, jamais « did she came ». C'est la faute la plus fréquente au début, et elle disparaît dès qu'on a compris que le temps est déjà porté par did.",
          visuels: [
            {
              type: "tableau",
              titre: "Qui porte la question et la négation",
              colonnes: ["La phrase", "L'auxiliaire", "La question", "La négation"],
              lignes: [
                ["She is late.", "is", "Is she late?", "She isn't late."],
                ["They have finished.", "have", "Have they finished?", "They haven't finished."],
                ["You can swim.", "can", "Can you swim?", "You can't swim."],
                ["You like tea.", "aucun → do", "Do you like tea?", "You don't like tea."],
                ["She works here.", "aucun → does", "Does she work here?", "She doesn't work here."],
                ["He came late.", "aucun → did", "Did he come late?", "He didn't come late."],
              ],
              note: "Après do, does ou did, le verbe revient à l'infinitif nu : did he come, jamais « came ».",
            },
          ],
        },
        {
          titre: "Be : le verbe le plus irrégulier de la langue",
          texte:
            "Be est le seul verbe anglais qui change de forme à presque chaque personne, et le seul qui garde deux formes au passé.\n\nAu présent : I am, you are, he is, we are, they are. Contracté : I'm, you're, he's, we're, they're. Au passé : I was, you were, he was, we were, they were. Au participe : been.\n\nIl sert de copule — she is a doctor —, d'auxiliaire du progressif — she is working — et d'auxiliaire du passif — the letter was written.\n\nDeux emplois piègent le francophone. Le premier : l'âge, la faim, la soif, la peur, le froid et le chaud se disent avec be et non avec have. I am twenty, I am hungry, I am cold. Dire « I have twenty years » est le calque le plus reconnaissable qui soit.\n\nLe second : there is et there are, la tournure existentielle. Le verbe s'accorde avec ce qui suit : there is a problem, there are two problems. Le français dit « il y a » pour les deux.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le français a, l'anglais est",
              colonnes: [
                {
                  titre: "En français : avoir",
                  points: [
                    "J'ai vingt ans.",
                    "J'ai faim.",
                    "J'ai froid.",
                    "J'ai raison.",
                  ],
                },
                {
                  titre: "En anglais : be",
                  points: [
                    "I'm twenty.",
                    "I'm hungry.",
                    "I'm cold.",
                    "I'm right.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Have et do, chacun avec deux vies",
          texte:
            "Have et do ont la particularité d'être à la fois auxiliaires et verbes ordinaires, et les deux emplois ne se conjuguent pas pareil.\n\nHave auxiliaire forme les temps composés : I have finished, she had left. Il monte alors en tête de la question : Have you finished ?\n\nHave verbe ordinaire veut dire posséder, ou prendre : I have a car, I have breakfast. Dans ce sens, l'anglais moderne lui applique la règle générale et fabrique do : Do you have a car ? L'ancienne forme Have you a car ? est britannique et vieillie.\n\nS'y ajoute have got, très courant au Royaume-Uni pour la possession : I've got a car, Have you got a car ? La forme est un présent, jamais un passé, malgré le got.\n\nDo verbe ordinaire veut dire faire : I do the washing-up. Et l'on obtient alors des phrases à deux do, parfaitement correctes : Do you do the washing-up ? Le premier est l'auxiliaire, le second le verbe.\n\nEnfin, do sert d'emphatique : I do like it, insiste sur la réalité du fait. C'est la seule façon de mettre du gras à l'oral sans changer un mot.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Do you have a car?",
        francais: "As-tu une voiture ?",
        note: "Have verbe ordinaire prend do. Have got, très britannique, dirait : have you got a car?",
      },
      {
        etranger: "Have you finished already?",
        francais: "Tu as déjà fini ?",
        note: "Have auxiliaire monte lui-même en tête : pas de do devant lui.",
      },
      {
        etranger: "She didn't come yesterday.",
        francais: "Elle n'est pas venue hier.",
        note: "Après did, le verbe revient à l'infinitif nu : come, jamais came.",
      },
      {
        etranger: "I'm twenty-three years old.",
        francais: "J'ai vingt-trois ans.",
        note: "L'âge se dit avec be. « I have twenty-three years » est le calque le plus reconnaissable.",
      },
      {
        etranger: "There are two problems here.",
        francais: "Il y a deux problèmes ici.",
        note: "There is au singulier, there are au pluriel. Le français dit « il y a » pour les deux.",
      },
      {
        etranger: "Does she work on Saturdays?",
        francais: "Est-ce qu'elle travaille le samedi ?",
        note: "Does porte le s de la troisième personne, donc work le perd.",
      },
      {
        etranger: "I do like this one.",
        francais: "Celui-ci me plaît vraiment.",
        note: "Do emphatique : il insiste sur la réalité du fait, sans changer un mot.",
      },
      {
        etranger: "We aren't ready yet.",
        francais: "Nous ne sommes pas encore prêts.",
        note: "Be reçoit le not directement : pas de do avec lui.",
      },
      {
        etranger: "He's got two brothers.",
        francais: "Il a deux frères.",
        note: "Have got est un présent malgré le got. Très courant en anglais britannique.",
      },
      {
        etranger: "Do you do the cooking at home?",
        francais: "C'est toi qui fais la cuisine chez vous ?",
        note: "Deux do : le premier est l'auxiliaire, le second le verbe. La phrase est correcte.",
      },
    ],
  },

  {
    slug: "en-conj-imperatif",
    category: "Conjugaison",
    title: "Ordres, consignes et recettes : l'impératif",
    statement:
      "L'impératif anglais est la forme la plus simple de la langue — le verbe nu — et la plus brutale. Toute la difficulté est de l'adoucir sans le perdre.",
    tip: "Un impératif nu passe pour sec en anglais. Please, could you et le tag will you sont les trois façons de le rendre acceptable.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Donner un ordre en anglais",
      sections: [
        {
          titre: "La forme, et ce qu'elle coûte",
          texte:
            "L'impératif anglais est le verbe à l'infinitif sans to, sans sujet : Come in. Sit down. Wait. La négation ajoute don't : Don't move. Don't be late — remarquer que be prend don't lui aussi, contrairement à toutes ses autres constructions.\n\nÀ la première personne du pluriel, l'anglais emploie let's : Let's go, let's not argue. La négation moderne est let's not ; don't let's est britannique et vieilli.\n\nCette simplicité a un prix. Là où le français dispose du vouvoiement et du conditionnel pour amortir un ordre, l'anglais n'a rien : Give me the salt est grammaticalement parfait et socialement rude. C'est la raison pour laquelle un francophone qui traduit littéralement passe souvent pour brusque sans s'en rendre compte.\n\nTrois amortisseurs existent, et ils s'apprennent avec l'impératif lui-même, jamais après.",
          visuels: [
            {
              type: "etapes",
              titre: "Du plus sec au plus courtois",
              etapes: [
                { titre: "Open the window.", texte: "L'ordre nu. Réservé aux consignes écrites, aux recettes, aux panneaux." },
                { titre: "Open the window, please.", texte: "Please en fin de phrase : le minimum acceptable entre adultes." },
                { titre: "Open the window, will you?", texte: "Le question tag transforme l'ordre en demande." },
                { titre: "Could you open the window?", texte: "La forme interrogative : la plus courante à l'oral." },
                { titre: "Would you mind opening the window?", texte: "La plus courtoise — et noter le -ing après mind." },
              ],
            },
          ],
        },
        {
          titre: "Où l'impératif nu est normal",
          texte:
            "L'impératif sans amortisseur n'est pas toujours rude : il y a des contextes où il est la forme attendue, et où l'adoucir serait bizarre.\n\nLes recettes de cuisine : Preheat the oven. Add the flour. Stir gently. Personne n'écrit « could you add the flour ».\n\nLes modes d'emploi et les consignes techniques : Press and hold. Insert the card. Do not remove.\n\nLes panneaux et la signalétique : Keep left. Mind the gap. Do not lean out of the window.\n\nLes conseils entre proches : Take an umbrella. Get some sleep. Ici, l'absence de please est même une marque de familiarité.\n\nLes encouragements : Go on. Have a seat. Help yourself. Enjoy your meal.\n\nEt les avertissements urgents, où l'amortissement serait absurde : Look out. Watch your step. Get down.\n\nLa règle sous-jacente est simple : l'impératif nu convient quand il n'y a pas de relation sociale en jeu — un texte, une machine, une urgence — et devient impoli dès qu'il y en a une.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même verbe, deux effets",
              colonnes: [
                {
                  titre: "Normal — pas de relation en jeu",
                  points: [
                    "Add two eggs. — une recette.",
                    "Mind the gap. — un panneau.",
                    "Look out! — une urgence.",
                  ],
                },
                {
                  titre: "Rude — une personne en face",
                  points: [
                    "Give me that.",
                    "Answer me.",
                    "Wait here.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'ordre indirect et les verbes de consigne",
          texte:
            "Rapporter un ordre ne se fait pas avec l'impératif mais avec un infinitif, et c'est là que le francophone bute.\n\nLa structure est verbe + complément + to + infinitif. He told me to wait. She asked us to be quiet. They advised him not to go — remarquer la négation, not devant to.\n\nLes verbes de cette famille sont peu nombreux et valent d'être sus ensemble : tell, ask, advise, warn, order, remind, encourage, persuade, allow, forbid.\n\nDeux d'entre eux ont un piège de construction. Say ne s'emploie jamais ainsi : on dit he told me to wait, jamais « he said me to wait ». Say prend that + proposition : he said that I should wait.\n\nEt suggest ne prend pas d'infinitif non plus : she suggested waiting, ou she suggested that we wait. Dire « she suggested me to wait » est une faute très répandue chez les francophones.\n\nEnfin, deux verbes se construisent sans to : let et make. Let me go, make him wait. Ils rejoignent en cela les modaux.",
        },
      ],
    },
    cartes: [
      {
        etranger: "Don't be late tomorrow.",
        francais: "Ne sois pas en retard demain.",
        note: "Be prend don't à l'impératif, alors qu'ailleurs il refuse tout auxiliaire.",
      },
      {
        etranger: "Let's not argue about this.",
        francais: "Ne nous disputons pas là-dessus.",
        note: "Let's not est la négation moderne. « Don't let's » est britannique et vieilli.",
      },
      {
        etranger: "Preheat the oven to two hundred degrees.",
        francais: "Préchauffe le four à deux cents degrés.",
        note: "L'impératif nu est la forme normale des recettes : aucune relation sociale en jeu.",
      },
      {
        etranger: "Mind the gap between train and platform.",
        francais: "Attention à l'espace entre le train et le quai.",
        note: "Le panneau le plus célèbre du métro londonien. Mind, faire attention à.",
      },
      {
        etranger: "Would you mind closing the door?",
        francais: "Cela vous ennuierait-il de fermer la porte ?",
        note: "Mind est suivi d'un -ing, jamais d'un infinitif. La forme la plus courtoise.",
      },
      {
        etranger: "He told me to wait outside.",
        francais: "Il m'a dit d'attendre dehors.",
        note: "Tell someone TO do. Say ne se construit jamais ainsi.",
      },
      {
        etranger: "She asked us not to touch anything.",
        francais: "Elle nous a demandé de ne rien toucher.",
        note: "La négation se place devant to : not to touch.",
      },
      {
        etranger: "They suggested waiting until Monday.",
        francais: "Ils ont suggéré d'attendre jusqu'à lundi.",
        note: "Suggest + -ing. « Suggest me to wait » est une faute très répandue.",
      },
      {
        etranger: "Let me help you with that.",
        francais: "Laisse-moi t'aider avec ça.",
        note: "Let et make se construisent sans to, comme les modaux.",
      },
      {
        etranger: "Help yourself, there's plenty.",
        francais: "Sers-toi, il y en a largement.",
        note: "L'impératif nu comme marque de convivialité : ici, please serait distant.",
      },
    ],
  },

  {
    slug: "en-conj-irreguliers-familles",
    category: "Conjugaison",
    title: "Les irréguliers par familles de sons",
    statement:
      "Deux cents verbes irréguliers ne s'apprennent pas en liste alphabétique. Ils se rangent en une dizaine de familles qui suivent chacune une transformation régulière.",
    tip: "Sing, sang, sung ; ring, rang, rung ; drink, drank, drunk. Une famille apprise vaut vingt verbes appris.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Ranger les verbes irréguliers",
      sections: [
        {
          titre: "Pourquoi la liste alphabétique ne marche pas",
          texte:
            "La liste des verbes irréguliers, apprise de A à Z, est le pire exercice de mémoire qu'on puisse s'infliger : elle place côte à côte des verbes qui n'ont rien en commun, et sépare ceux qui se ressemblent.\n\nOr ces verbes ne sont pas irréguliers au hasard. Ce sont les restes d'un système ancien, dit ablaut, qui marquait le temps par un changement de voyelle interne plutôt que par une terminaison. Le même mécanisme fonctionne encore en allemand — singen, sang, gesungen — et il explique la parenté entre sing, sang, sung.\n\nRangés par famille, deux cents verbes se réduisent à une dizaine de schémas, plus une trentaine de véritables exceptions. La charge de mémoire tombe des trois quarts.\n\nMieux : la famille se retient à l'oreille, pas à l'œil. C'est un motif sonore, et c'est ce qui le rend robuste — on reconnaît un verbe nouveau comme appartenant à une famille connue, et l'on devine ses formes.",
          visuels: [
            {
              type: "tableau",
              titre: "Les grandes familles",
              colonnes: ["Le schéma", "Exemple", "Autres membres"],
              lignes: [
                ["i - a - u", "sing, sang, sung", "ring, drink, swim, begin, sink"],
                ["i - o - i(dd)en", "ride, rode, ridden", "drive, write, rise, hide"],
                ["ea - o - o", "speak, spoke, spoken", "break, steal, freeze, choose"],
                ["ow - ew - own", "know, knew, known", "grow, throw, blow, fly"],
                ["ight (les trois)", "fight, fought, fought", "buy, bring, think, catch, teach"],
                ["e - t - t", "keep, kept, kept", "sleep, feel, mean, leave, sweep"],
                ["identiques", "cut, cut, cut", "put, let, hit, cost, shut, set"],
                ["d → t", "send, sent, sent", "spend, build, lend, bend"],
              ],
              note: "Les trois formes identiques sont la famille la plus rentable : rien à retenir.",
            },
          ],
        },
        {
          titre: "Les faux irréguliers et les vrais pièges",
          texte:
            "Trois catégories méritent d'être signalées à part, parce qu'elles produisent des fautes chez des apprenants avancés.\n\nLes verbes à double forme, réguliers ou irréguliers selon la rive. Learn donne learned ou learnt, dream donne dreamed ou dreamt, burn donne burned ou burnt, spell donne spelled ou spelt. Les formes en -t sont britanniques, celles en -ed américaines. Aucune n'est fautive.\n\nLes verbes où le sens change avec la forme. Hang donne hung pour un objet suspendu et hanged pour une pendaison. Lie donne lay, lain quand il veut dire être allongé, et lied quand il veut dire mentir. Ce sont deux verbes différents devenus homographes.\n\nEnfin la paire lie et lay, qui piège même les anglophones. Lie est intransitif : I lie down, I lay down yesterday. Lay est transitif : I lay the book on the table, I laid it there. Le passé de lie est identique au présent de lay, ce qui garantit la confusion.\n\nLe conseil pratique : apprendre par famille, mais vérifier ces trois catégories au cas par cas.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux rives, deux participes",
              colonnes: [
                {
                  titre: "Britannique — en -t",
                  points: [
                    "learnt, dreamt, burnt",
                    "spelt, spoilt, leapt",
                    "got (participe : got)",
                  ],
                },
                {
                  titre: "Américain — en -ed",
                  points: [
                    "learned, dreamed, burned",
                    "spelled, spoiled, leaped",
                    "gotten (participe distinct)",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "La méthode, en trois habitudes",
          texte:
            "Une fois les familles connues, trois habitudes ancrent les formes durablement.\n\nLa première : apprendre les trois formes ensemble, à voix haute, dans le rythme. Speak, spoke, spoken se retient comme une mesure musicale. Séparer le prétérit du participe double le travail.\n\nLa deuxième : apprendre le verbe dans une phrase, pas dans une colonne. I've never broken a bone se retient mieux que break, broke, broken — et se réemploie directement.\n\nLa troisième : viser les cinquante verbes qui comptent avant les deux cents qui existent. Une poignée de verbes irréguliers représente l'écrasante majorité des occurrences réelles : be, have, do, go, get, make, say, take, come, see, know, give, find, think, tell, become, leave, feel, put, bring, keep, hold, write, stand, hear, let, mean, set, meet, run, pay, sit, speak, lie, lead, grow, lose, fall, send, build.\n\nLe reste s'attrape en lisant, sans jamais être appris.",
        },
      ],
    },
    cartes: [
      {
        etranger: "She sang, then he rang the bell.",
        francais: "Elle a chanté, puis il a sonné la cloche.",
        note: "Famille i - a - u : sing, sang, sung ; ring, rang, rung ; drink, drank, drunk.",
      },
      {
        etranger: "I've never broken a bone.",
        francais: "Je ne me suis jamais cassé un os.",
        note: "Famille ea - o - o : break, broke, broken ; speak, steal, freeze.",
      },
      {
        etranger: "They had already flown home.",
        francais: "Ils étaient déjà rentrés en avion.",
        note: "Famille ow - ew - own : fly, flew, flown ; know, grow, throw, blow.",
      },
      {
        etranger: "He thought he had caught it.",
        francais: "Il croyait l'avoir attrapé.",
        note: "Famille en -ought et -aught : think, buy, bring, catch, teach, fight.",
      },
      {
        etranger: "We kept the receipts and slept badly.",
        francais: "Nous avons gardé les tickets et mal dormi.",
        note: "Famille e - t - t : keep, sleep, feel, mean, leave, sweep.",
      },
      {
        etranger: "It cost more than we had put aside.",
        francais: "Ça a coûté plus que ce que nous avions mis de côté.",
        note: "Famille invariable : cut, put, let, hit, cost, shut, set. La plus rentable.",
      },
      {
        etranger: "She sent the parcel and spent the change.",
        francais: "Elle a envoyé le colis et dépensé la monnaie.",
        note: "Famille d → t : send, spend, build, lend, bend.",
      },
      {
        etranger: "I learnt it by heart.",
        francais: "Je l'ai appris par cœur.",
        note: "Learnt au Royaume-Uni, learned aux États-Unis. Ni l'un ni l'autre n'est fautif.",
      },
      {
        etranger: "He lay down for an hour.",
        francais: "Il s'est allongé une heure.",
        note: "Lie, lay, lain pour s'allonger. Lay, laid, laid pour poser un objet. Le piège des anglophones eux-mêmes.",
      },
      {
        etranger: "The picture had hung there for years.",
        francais: "Le tableau était accroché là depuis des années.",
        note: "Hung pour un objet suspendu ; hanged pour une pendaison. Le sens choisit la forme.",
      },
    ],
  },

  {
    slug: "en-conj-used-to",
    category: "Conjugaison",
    title: "Used to, would, be used to",
    statement:
      "Trois formes très proches disent trois choses différentes : l'habitude passée révolue, l'habitude racontée, et l'accoutumance présente. Une lettre les sépare.",
    tip: "I used to swim, c'était mon habitude autrefois. I'm used to swimming, j'y suis habitué maintenant. Le be change tout, et impose le -ing.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Dire l'habitude passée",
      sections: [
        {
          titre: "Used to : ce qui n'est plus",
          texte:
            "Used to + infinitif décrit une habitude ou un état passé qui a cessé. I used to smoke, je fumais autrefois — et je ne fume plus. La rupture est comprise dans la forme : c'est ce qui la distingue de l'imparfait français, qui ne dit rien de la suite.\n\nLa forme est figée. Used to n'existe qu'au passé : il n'y a pas de « use to » au présent. La question et la négation se font avec did, et le d disparaît alors : Did you use to smoke ? I didn't use to smoke. Beaucoup d'anglophones écrivent didn't used to, mais la forme soignée est sans d.\n\nUsed to convient aux états comme aux actions : I used to live in Leeds, I used to play the piano. C'est ce qui le sépare de would, on va le voir.\n\nEt il ne s'emploie jamais avec une durée précise. On ne dit pas « I used to live there for three years » : on dit I lived there for three years. Used to dit l'habitude, pas la période.",
          visuels: [
            {
              type: "tableau",
              titre: "Les trois formes, et ce qu'elles disent",
              colonnes: ["La forme", "Le sens", "La suite", "Exemple"],
              lignes: [
                ["used to + infinitif", "habitude passée révolue", "infinitif nu", "I used to swim."],
                ["would + infinitif", "habitude racontée", "infinitif nu", "He would swim every day."],
                ["be used to + -ing", "accoutumance actuelle", "-ing ou nom", "I'm used to swimming."],
                ["get used to + -ing", "accoutumance en cours", "-ing ou nom", "I'm getting used to it."],
              ],
              note: "Seules les deux dernières prennent be ou get — et donc le -ing.",
            },
          ],
        },
        {
          titre: "Would : l'habitude du récit",
          texte:
            "Would + infinitif dit aussi l'habitude passée, mais avec une couleur différente : celle du souvenir raconté. Every summer we would drive to the coast. My grandfather would sit by the window for hours.\n\nDeux différences avec used to comptent.\n\nLa première : would ne s'emploie qu'avec des actions répétées, jamais avec des états. On dit I used to live in Leeds ; on ne dit pas « I would live in Leeds ». Les verbes d'état — be, have, know, like, live — refusent would dans cet emploi.\n\nLa seconde : would a besoin d'un cadre temporel déjà posé. On ne commence pas un récit par « He would get up at six » sans avoir dit de quelle époque on parle. Used to peut ouvrir seul ; would s'appuie sur ce qui précède.\n\nEn pratique, un récit d'enfance ouvre par used to et enchaîne par would. We used to spend the summer at my aunt's. Every morning she would make pancakes. C'est le mouvement naturel, et il sonne juste.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce que would refuse",
              colonnes: [
                {
                  titre: "Actions — would passe",
                  points: [
                    "He would walk to school.",
                    "We would meet on Fridays.",
                    "She would sing while cooking.",
                  ],
                },
                {
                  titre: "États — would ne passe pas",
                  points: [
                    "I used to live there. (pas « I would live »)",
                    "She used to have a dog.",
                    "They used to be neighbours.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Be used to : la faute qui change le temps",
          texte:
            "Be used to est un tout autre objet, et c'est celui qui produit le plus de contresens.\n\nIci, used est un adjectif signifiant « habitué », et to est une préposition, non la marque de l'infinitif. Il est donc suivi d'un nom ou d'un gérondif : I'm used to the noise, I'm used to working late.\n\nLa différence de temps est totale. I used to work late parle du passé et sous-entend que ce n'est plus le cas. I'm used to working late parle du présent et dit que cela ne me pèse pas. Un francophone qui confond les deux inverse la temporalité de sa phrase.\n\nGet used to décrit l'accoutumance en cours : I'm getting used to it, je commence à m'y faire. Et la forme se conjugue à tous les temps : you'll get used to it, she got used to it quickly.\n\nLe test qui tranche : si l'on peut remplacer used par accustomed, c'est la construction avec be — et donc le -ing. I'm accustomed to working late fonctionne ; « I accustomed to work late » non.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I used to smoke, but I stopped.",
        francais: "Je fumais autrefois, mais j'ai arrêté.",
        note: "Used to dit l'habitude révolue : la rupture est comprise dans la forme.",
      },
      {
        etranger: "Did you use to live in Leeds?",
        francais: "Tu habitais à Leeds, avant ?",
        note: "À la question, le d disparaît : did you USE to. La forme soignée est sans d.",
      },
      {
        etranger: "She's used to getting up early.",
        francais: "Elle est habituée à se lever tôt.",
        note: "Be used TO + -ing : ici to est une préposition, pas la marque de l'infinitif.",
      },
      {
        etranger: "You'll get used to it.",
        francais: "Tu t'y feras.",
        note: "Get used to décrit l'accoutumance en cours, et se conjugue à tous les temps.",
      },
      {
        etranger: "Every summer we would drive to the coast.",
        francais: "Chaque été, nous partions en voiture sur la côte.",
        note: "Would pour l'habitude racontée. Il a besoin d'un cadre temporel déjà posé.",
      },
      {
        etranger: "She used to have a small dog.",
        francais: "Elle avait un petit chien, autrefois.",
        note: "Have est un état : would ne conviendrait pas ici.",
      },
      {
        etranger: "He didn't use to be so quiet.",
        francais: "Il n'était pas si silencieux, avant.",
        note: "La négation aussi perd le d : didn't USE to.",
      },
      {
        etranger: "I'm not used to this cold.",
        francais: "Je ne suis pas habitué à ce froid.",
        note: "Be used to accepte un nom autant qu'un gérondif : to this cold, to working.",
      },
      {
        etranger: "We lived there for three years.",
        francais: "Nous y avons vécu trois ans.",
        note: "Avec une durée précise, on emploie le prétérit, jamais used to.",
      },
      {
        etranger: "My father would read to us every night.",
        francais: "Mon père nous faisait la lecture tous les soirs.",
        note: "Would dans un récit de souvenir : l'action se répète, l'époque est déjà posée.",
      },
    ],
  },

  {
    slug: "en-conj-verbes-etat",
    category: "Conjugaison",
    title: "Les verbes d'état, qui refusent le -ing",
    statement:
      "Know, believe, belong, seem. Une trentaine de verbes n'acceptent pas la forme progressive — et certains l'acceptent en changeant complètement de sens.",
    tip: "I'm thinking about it parle d'une activité mentale en cours ; I think it's true donne une opinion. Le même verbe, deux emplois disjoints.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Ce qui ne se met pas au progressif",
      sections: [
        {
          titre: "Pourquoi certains verbes refusent le -ing",
          texte:
            "La forme progressive — be + -ing — décrit un processus en cours, quelque chose qui se déroule et qui a un début et une fin. Or certains verbes ne décrivent pas un processus mais un état : ils ne se déroulent pas, ils sont.\n\nSavoir n'est pas une activité : on ne s'y met pas, on ne s'y applique pas, on ne l'interrompt pas. D'où l'impossibilité de « I am knowing ». Il en va de même pour appartenir, contenir, ressembler, sembler, mériter, dépendre.\n\nLes familles concernées sont au nombre de cinq.\n\nLa perception involontaire : see, hear, smell, taste, feel — quand ils ne sont pas volontaires.\n\nL'opinion et la pensée : know, believe, think au sens d'estimer, understand, remember, forget, mean, doubt, suppose.\n\nLe sentiment : like, love, hate, prefer, want, need, wish, mind.\n\nLa possession et la relation : have au sens de posséder, own, belong, contain, include, consist of.\n\nL'apparence : seem, appear, look au sens de paraître, resemble, sound.",
          visuels: [
            {
              type: "tableau",
              titre: "Les cinq familles d'états",
              colonnes: ["Famille", "Verbes", "Ce qu'on dit à la place"],
              lignes: [
                ["perception", "see, hear, smell, taste", "I can see it. / I can hear you."],
                ["opinion", "know, believe, understand, mean", "I know. / I don't understand."],
                ["sentiment", "like, love, hate, want, need", "I want it. / I need help."],
                ["possession", "have, own, belong, contain", "I have a car. / It belongs to me."],
                ["apparence", "seem, appear, resemble, sound", "It seems fine. / That sounds good."],
              ],
              note: "Pour la perception, l'anglais emploie can : I can see, I can hear — jamais « I am seeing » au sens de percevoir.",
            },
          ],
        },
        {
          titre: "Les verbes à double vie",
          texte:
            "Une dizaine de verbes acceptent le progressif — mais en changeant de sens. Ce sont les plus intéressants, parce que la forme y est porteuse d'information.\n\nThink : I think it's true, j'estime. I'm thinking about it, j'y réfléchis en ce moment. Le premier est un état, le second une activité.\n\nHave : I have a car, je possède. I'm having lunch, je prends. Have progressif ne signifie jamais posséder.\n\nSee : I see what you mean, je comprends. I'm seeing the doctor at four, j'ai rendez-vous. I'm seeing someone, je sors avec quelqu'un.\n\nTaste et smell : the soup tastes good, elle a bon goût. She's tasting the soup, elle la goûte. L'état contre le geste.\n\nFeel : I feel it's wrong, j'ai l'intuition. I'm feeling better, je vais mieux — celui-là est admis dans les deux formes sans grand écart.\n\nBe : he is rude, c'est sa nature. He's being rude, il se comporte mal en ce moment. La forme progressive rend le trait temporaire.\n\nExpect, look, weigh, measure fonctionnent de la même façon : état d'un côté, geste de l'autre.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même verbe, deux vies",
              colonnes: [
                {
                  titre: "État — pas de -ing",
                  points: [
                    "I think it's a good idea.",
                    "I have two brothers.",
                    "The soup tastes salty.",
                    "He is very generous.",
                  ],
                },
                {
                  titre: "Activité — le -ing revient",
                  points: [
                    "I'm thinking about your offer.",
                    "I'm having lunch.",
                    "She's tasting the soup.",
                    "He's being generous today.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les exceptions vivantes, et la publicité",
          texte:
            "La règle a des fissures, et elles sont instructives.\n\nLa plus célèbre est le slogan de McDonald's, I'm lovin' it. Grammaticalement, love est un verbe d'état et devrait refuser le -ing. La forme progressive y est employée précisément pour son effet : elle rend le sentiment momentané, vif, en train de se produire. C'est une infraction volontaire, et elle marche.\n\nLe même glissement s'observe ailleurs. I'm loving this weather et I'm hating this sont aujourd'hui courants à l'oral, surtout chez les jeunes locuteurs, avec toujours cette valeur d'intensité passagère.\n\nDeuxième fissure : want et need commencent à se rencontrer au progressif dans l'anglais parlé, sans être admis à l'écrit.\n\nTroisième : la perception avec look. She's looking well est parfaitement standard, alors que look y est un verbe d'apparence.\n\nLa position raisonnable pour un apprenant : appliquer la règle à l'écrit, reconnaître les infractions à l'oral sans les imiter tant que l'oreille n'est pas sûre. C'est ainsi que fonctionnent toutes les libertés stylistiques : on ne les prend pas avant de maîtriser la contrainte.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I know the answer already.",
        francais: "Je connais déjà la réponse.",
        note: "Know est un état : « I am knowing » n'existe pas.",
      },
      {
        etranger: "This book belongs to my sister.",
        francais: "Ce livre appartient à ma sœur.",
        note: "Belong to est un état, et prend toujours to.",
      },
      {
        etranger: "I'm thinking about your offer.",
        francais: "Je réfléchis à votre proposition.",
        note: "Think progressif décrit l'activité mentale. Think simple donne une opinion.",
      },
      {
        etranger: "I think it's a good idea.",
        francais: "Je trouve que c'est une bonne idée.",
        note: "L'autre moitié du couple : ici c'est un état, donc pas de -ing.",
      },
      {
        etranger: "We're having lunch right now.",
        francais: "Nous sommes en train de déjeuner.",
        note: "Have progressif ne veut jamais dire posséder : il veut dire prendre.",
      },
      {
        etranger: "I can hear something outside.",
        francais: "J'entends quelque chose dehors.",
        note: "La perception involontaire passe par can, jamais par le progressif.",
      },
      {
        etranger: "He's being rude this evening.",
        francais: "Il se comporte mal ce soir.",
        note: "Be progressif rend le trait temporaire : he is rude serait sa nature.",
      },
      {
        etranger: "That sounds like a good plan.",
        francais: "Ça a l'air d'un bon plan.",
        note: "Sound, verbe d'apparence, refuse le -ing dans ce sens.",
      },
      {
        etranger: "I'm seeing the dentist at four.",
        francais: "J'ai rendez-vous chez le dentiste à seize heures.",
        note: "See progressif veut dire avoir rendez-vous, jamais percevoir.",
      },
      {
        etranger: "The soup tastes too salty.",
        francais: "La soupe est trop salée.",
        note: "État : la soupe a ce goût. She's tasting the soup serait le geste.",
      },
    ],
  },

  {
    slug: "en-conj-modaux-passe",
    category: "Conjugaison",
    title: "Les modaux du passé : must have, might have",
    statement:
      "Les modaux n'ont pas de passé. Pour parler d'hier, ils empruntent have + participe — et chacun y prend une valeur que le français rend par un adverbe.",
    tip: "Must have dit la déduction quasi certaine ; can't have dit l'impossibilité déduite. Jamais mustn't have, qui n'existe pas dans ce sens.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Parler du passé avec un modal",
      sections: [
        {
          titre: "Pourquoi il faut emprunter",
          texte:
            "Les modaux anglais — can, may, must, shall, will — sont des verbes défectifs : ils n'ont ni infinitif, ni participe, ni temps composés. On ne peut donc pas les conjuguer au passé comme un verbe ordinaire.\n\nLa langue a contourné l'obstacle de deux façons.\n\nLa première : certains modaux ont une forme passée héritée, mais qui a pris un autre emploi. Could est historiquement le passé de can, et il l'est encore dans un récit — when I was young I could run fast — mais dans la plupart des contextes, could exprime la politesse ou l'hypothèse au présent.\n\nLa seconde, et c'est celle qui compte : le modal reste au présent et c'est l'infinitif qui passe au perfect. Must have gone, might have seen, should have called. La structure est invariable : modal + have + participe passé, quelle que soit la personne. She must have left, they must have left.\n\nÀ l'oral, have se réduit à /əv/, ce qui explique la faute d'orthographe très répandue « must of » — y compris chez des anglophones.",
          visuels: [
            {
              type: "tableau",
              titre: "Chaque modal, sa valeur au passé",
              colonnes: ["La forme", "Ce qu'elle dit", "Exemple", "En français"],
              lignes: [
                ["must have", "déduction quasi certaine", "She must have left.", "elle a dû partir"],
                ["can't have", "impossibilité déduite", "He can't have known.", "ce n'est pas possible qu'il ait su"],
                ["might / may have", "possibilité", "It might have rained.", "il a peut-être plu"],
                ["could have", "possibilité, ou reproche", "You could have called.", "tu aurais pu appeler"],
                ["should have", "reproche, attente déçue", "I should have asked.", "j'aurais dû demander"],
                ["would have", "hypothèse non réalisée", "I would have come.", "je serais venu"],
                ["needn't have", "effort inutile, mais fait", "You needn't have paid.", "ce n'était pas la peine"],
              ],
              note: "Mustn't have n'existe pas au sens de déduction : la négation de must have est can't have.",
            },
          ],
        },
        {
          titre: "La déduction : must have et can't have",
          texte:
            "C'est l'emploi le plus fréquent, et celui où la négation piège.\n\nMust have exprime la conclusion logique la plus probable, tirée d'indices présents. The lights are off — they must have gone to bed. Le locuteur n'a pas vu ; il déduit.\n\nSa négation n'est pas mustn't have mais can't have. He can't have finished already — it's only been ten minutes. Dire « he mustn't have finished » s'entend dans l'anglais américain familier, mais reste hors norme en britannique.\n\nEntre les deux se placent may have et might have, qui n'affirment rien : She may have missed the train. Might est un peu plus faible que may, mais l'écart est mince au passé.\n\nUne quatrième forme complète la série : couldn't have, qui dit l'impossibilité comme can't have mais avec un recul narratif — he couldn't have known at the time.\n\nEt une cinquième, plus rare et très utile : must have been + -ing, pour une déduction sur une action en cours. She must have been sleeping when I called.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le degré de certitude",
              colonnes: [
                {
                  titre: "Du plus sûr au moins sûr",
                  points: [
                    "must have — j'en suis presque certain.",
                    "may have — c'est possible.",
                    "might have — c'est possible, un peu moins.",
                    "can't have — c'est exclu.",
                  ],
                },
                {
                  titre: "Le reproche, à part",
                  points: [
                    "should have — tu aurais dû.",
                    "could have — tu aurais pu.",
                    "needn't have — ce n'était pas la peine.",
                    "Ces trois-là ne déduisent rien.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le reproche, et la nuance qu'un francophone rate",
          texte:
            "Trois formes servent au regret et au reproche, et elles ne disent pas la même chose.\n\nShould have + participe dit que l'action attendue n'a pas eu lieu, et qu'elle aurait dû. I should have asked, j'aurais dû demander — je ne l'ai pas fait. C'est le regret standard. Sa négation, shouldn't have, dit l'inverse : l'action a eu lieu et n'aurait pas dû.\n\nCould have dit la possibilité non saisie, sans toujours de blâme. We could have taken the train, on aurait pu prendre le train — et c'est parfois un simple constat, parfois un reproche selon le ton.\n\nNeedn't have + participe est le plus subtil, et le plus mal connu. Il dit que l'action a eu lieu, et qu'elle était inutile : You needn't have paid, tu as payé pour rien.\n\nIl faut le distinguer de didn't need to, qui dit que l'action n'était pas nécessaire — sans préciser si elle a eu lieu, et souvent en sous-entendant qu'elle n'a pas eu lieu. I didn't need to pay, je n'ai pas eu à payer.\n\nLa différence est réelle et le français ne la marque pas : les deux se traduisent par « je n'avais pas besoin de payer ».",
        },
      ],
    },
    cartes: [
      {
        etranger: "She must have left already.",
        francais: "Elle a dû partir déjà.",
        note: "Déduction quasi certaine à partir d'indices. Modal + have + participe.",
      },
      {
        etranger: "He can't have known about it.",
        francais: "Ce n'est pas possible qu'il ait été au courant.",
        note: "Déduction, non incapacité : « il ne pouvait pas » se dirait couldn't. La négation de must have est can't have. « Mustn't have » n'existe pas ici.",
      },
      {
        etranger: "It might have rained during the night.",
        francais: "Il a peut-être plu pendant la nuit.",
        note: "Might have et may have n'affirment rien : ils ouvrent une possibilité.",
      },
      {
        etranger: "We could have taken the train.",
        francais: "Nous aurions pu prendre le train.",
        note: "Could have dit la possibilité non saisie. Le ton décide s'il y a reproche.",
      },
      {
        etranger: "I shouldn't have said anything.",
        francais: "Je n'aurais rien dû dire.",
        note: "Shouldn't have : l'action a eu lieu et n'aurait pas dû.",
      },
      {
        etranger: "You needn't have waited for me.",
        francais: "Tu n'avais pas besoin de m'attendre.",
        note: "Needn't have : tu as attendu, et c'était inutile. Didn't need to dirait autre chose.",
      },
      {
        etranger: "They would have come if we had asked.",
        francais: "Ils seraient venus si nous avions demandé.",
        note: "Would have pour l'hypothèse non réalisée. La suite passe au plus-que-parfait.",
      },
      {
        etranger: "She must have been sleeping.",
        francais: "Elle devait être en train de dormir.",
        note: "Must have been + -ing : déduction sur une action en cours dans le passé.",
      },
      {
        etranger: "He may have missed the last bus.",
        francais: "Il a peut-être raté le dernier bus.",
        note: "May have, un cran plus assuré que might have — l'écart est mince au passé.",
      },
      {
        etranger: "I didn't need to pay in the end.",
        francais: "Finalement, je n'ai pas eu à payer.",
        note: "Didn't need to : l'obligation n'existait pas. Needn't have supposerait que j'aie payé.",
      },
    ],
  },

  {
    slug: "en-conj-conditionnelles-mixtes",
    category: "Conjugaison",
    title: "Conditionnelles mixtes et inversion",
    statement:
      "Une cause passée, une conséquence présente : si j'avais accepté, je serais riche aujourd'hui. Et la forme littéraire qui supprime le si en inversant le verbe.",
    tip: "Had I known, were I you, should you need : l'inversion remplace le if dans l'écrit soutenu. Le sens ne change pas, le registre monte.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Au-delà des trois conditionnelles",
      sections: [
        {
          titre: "Les trois types, rappelés en une page",
          texte:
            "Les manuels enseignent trois conditionnelles, et elles suffisent à la conversation courante.\n\nLa première parle du réel possible : if it rains, we'll stay in. Présent après if, futur ensuite. Jamais de will après if — c'est la faute la plus tenace.\n\nLa deuxième parle de l'irréel du présent : if I had more time, I would help you. Prétérit après if, would ensuite. Avec be, l'anglais soigné écrit were à toutes les personnes : if I were you.\n\nLa troisième parle de l'irréel du passé : if you had asked, I would have helped. Plus-que-parfait après if, would have ensuite.\n\nS'y ajoute la conditionnelle zéro, pour les vérités générales : if you heat water, it boils. Présent des deux côtés.\n\nCe système est cohérent, mais il suppose que la cause et la conséquence appartiennent au même temps. Or ce n'est pas toujours le cas — et c'est là que commencent les conditionnelles mixtes.",
          visuels: [
            {
              type: "tableau",
              titre: "Le système complet",
              colonnes: ["Type", "Après if", "Dans l'autre moitié", "Exemple"],
              lignes: [
                ["zéro", "présent", "présent", "If you heat ice, it melts."],
                ["première", "présent", "will + infinitif", "If it rains, we'll stay in."],
                ["deuxième", "prétérit", "would + infinitif", "If I had time, I would help."],
                ["troisième", "plus-que-parfait", "would have + participe", "If you had asked, I would have helped."],
                ["mixte A", "plus-que-parfait", "would + infinitif", "If I had studied, I would be a doctor."],
                ["mixte B", "prétérit", "would have + participe", "If I were braver, I would have said so."],
              ],
              note: "Jamais de will ni de would juste après if. La règle n'a pas d'exception courante.",
            },
          ],
        },
        {
          titre: "Les conditionnelles mixtes",
          texte:
            "Une conditionnelle mixte relie deux temps différents : la cause est dans un temps, la conséquence dans un autre. Le français les emploie sans y penser ; l'anglais aussi, mais les manuels les enseignent rarement, si bien qu'un apprenant avancé les construit mal.\n\nLe premier type est le plus fréquent : cause passée, conséquence présente. If I had studied medicine, I would be a doctor now. Le si porte le plus-que-parfait — la cause est révolue — et l'autre moitié porte un simple would — la conséquence dure encore. L'adverbe now ou today accompagne souvent la seconde moitié et aide à repérer la structure.\n\nLe second type est plus rare : cause présente permanente, conséquence passée. If I were more patient, I wouldn't have shouted. Le si porte un prétérit — un trait de caractère qui vaut toujours — et l'autre moitié un would have — l'événement, lui, appartient au passé.\n\nLa règle sous-jacente est simple et libère de la mémorisation : chaque moitié prend le temps qui correspond à SA propre temporalité. Il n'y a pas de type à retenir, seulement une cohérence à respecter.",
          visuels: [
            {
              type: "comparaison",
              titre: "Où se situe chaque moitié",
              colonnes: [
                {
                  titre: "Cause passée → effet présent",
                  points: [
                    "If I had saved more, I'd be richer now.",
                    "If she hadn't left, we would still be friends.",
                    "Repère : now, today, still.",
                  ],
                },
                {
                  titre: "Cause permanente → effet passé",
                  points: [
                    "If I were taller, I would have been picked.",
                    "If he weren't so proud, he would have apologised.",
                    "Repère : un trait de caractère.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'inversion : supprimer le si",
          texte:
            "Dans l'écrit soutenu et dans la langue formelle, l'anglais peut supprimer if et inverser le sujet et l'auxiliaire. Le sens reste identique ; le registre monte d'un cran.\n\nTrois formes seulement admettent l'inversion.\n\nHad, pour la troisième conditionnelle : Had I known, I would have come. Équivaut à if I had known.\n\nWere, pour la deuxième : Were I in your position, I would refuse. Équivaut à if I were. On rencontre aussi were to pour une hypothèse plus distante : Were the company to fail, jobs would be lost.\n\nShould, pour une éventualité polie : Should you need any help, please let me know. Équivaut à if you need. C'est la formule standard des courriels professionnels, et sans doute l'inversion la plus utile à connaître.\n\nDeux points à retenir. La négation ne se contracte jamais dans une inversion : on écrit Had it not been for her, jamais « Hadn't it been for her ». Et l'inversion appartient à l'écrit : l'employer dans une conversation ordinaire sonne théâtral.",
        },
      ],
    },
    cartes: [
      {
        etranger: "If I had studied medicine, I would be a doctor now.",
        francais: "Si j'avais fait médecine, je serais médecin aujourd'hui.",
        note: "Conditionnelle mixte : cause passée, conséquence présente. Le now est le repère.",
      },
      {
        etranger: "If she hadn't left, we would still be friends.",
        francais: "Si elle n'était pas partie, nous serions encore amis.",
        note: "Même structure. Chaque moitié prend le temps de sa propre temporalité.",
      },
      {
        etranger: "If I were more patient, I wouldn't have shouted.",
        francais: "Si j'étais plus patient, je n'aurais pas crié.",
        note: "L'autre mixte : trait permanent d'un côté, événement passé de l'autre.",
      },
      {
        etranger: "Had I known, I would have come earlier.",
        francais: "Si j'avais su, je serais venu plus tôt.",
        note: "Inversion de had : équivaut à if I had known. Registre écrit.",
      },
      {
        etranger: "Should you need anything, let me know.",
        francais: "Si vous avez besoin de quoi que ce soit, dites-le-moi.",
        note: "L'inversion la plus utile : la formule standard du courriel professionnel.",
      },
      {
        etranger: "Were I in your position, I would refuse.",
        francais: "Si j'étais à votre place, je refuserais.",
        note: "Inversion de were. L'anglais soigné emploie were à toutes les personnes.",
      },
      {
        etranger: "Had it not been for her, we would have failed.",
        francais: "Sans elle, nous aurions échoué.",
        note: "La négation ne se contracte jamais dans une inversion : jamais « hadn't it been ».",
      },
      {
        etranger: "If you heat ice, it melts.",
        francais: "Si on chauffe la glace, elle fond.",
        note: "Conditionnelle zéro : présent des deux côtés, pour une vérité générale.",
      },
      {
        etranger: "Were the company to fail, jobs would be lost.",
        francais: "Si l'entreprise venait à faire faillite, des emplois seraient perdus.",
        note: "Were to marque une hypothèse plus distante, presque théorique.",
      },
      {
        etranger: "I wish I had listened to you.",
        francais: "J'aurais aimé t'écouter.",
        note: "Wish + plus-que-parfait pour le regret. Même mécanique que la troisième conditionnelle.",
      },
    ],
  },

  {
    slug: "en-conj-subjonctif",
    category: "Conjugaison",
    title: "Ce qu'il reste du subjonctif anglais",
    statement:
      "I insist that he be present. God save the King. If I were you. Trois vestiges d'un mode presque disparu — et qui reste obligatoire dans l'écrit formel américain.",
    tip: "Après insist, demand, suggest, recommend, require, le verbe reste à l'infinitif nu : that he be, that she go, that it not happen.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le subjonctif en anglais moderne",
      sections: [
        {
          titre: "Trois survivances",
          texte:
            "L'anglais a eu un subjonctif complet ; il n'en reste que des îlots, mais ils sont visibles et normés.\n\nLe premier est le subjonctif présent, dit mandative. Il apparaît après un verbe ou un nom de volonté, de recommandation ou d'exigence, et il prend la forme de l'infinitif nu — donc sans -s à la troisième personne, et sans do à la négation. I insist that he be present. They recommended that she apply immediately. It is essential that this not happen again.\n\nLe deuxième est le subjonctif passé, réduit à la seule forme were, employée à toutes les personnes après if, wish, as if et suppose. If I were you. She wishes she were taller. He talks as if he were the manager.\n\nLe troisième est un ensemble de formules figées, restes de souhaits anciens : God save the King, long live the Queen, be that as it may, so be it, far be it from me, come what may. Aucune ne se construit plus ; elles se citent.",
          visuels: [
            {
              type: "tableau",
              titre: "Où le subjonctif survit",
              colonnes: ["Le déclencheur", "La forme", "Exemple"],
              lignes: [
                ["insist, demand, require", "infinitif nu", "I insist that he be there."],
                ["suggest, recommend, propose", "infinitif nu", "She suggested that he apply."],
                ["it is essential / vital that", "infinitif nu", "It is vital that she attend."],
                ["if, wish, as if, suppose", "were à toutes personnes", "If I were you…"],
                ["formules figées", "verbe en tête", "God save the King."],
              ],
              note: "Pas de -s à la troisième personne, et pas de do à la négation : that he not go.",
            },
          ],
        },
        {
          titre: "Le partage entre les deux rives",
          texte:
            "C'est le point qui compte le plus en pratique, parce qu'il décide de ce qu'on écrit.\n\nL'anglais américain emploie le subjonctif mandative sans hésiter, et le considère comme la forme correcte : the board demanded that he resign, the policy requires that each employee sign the form.\n\nL'anglais britannique le trouve raide et lui préfère should : the board demanded that he should resign. Ou, plus simplement encore, l'indicatif ordinaire : the board demanded that he resigned.\n\nLes trois formes sont donc en usage, et le choix relève du registre autant que de la géographie. Dans un texte destiné à un lectorat international — un article scientifique, un rapport — la forme au subjonctif est la plus sûre : elle est comprise partout et jugée correcte partout.\n\nUn piège subsiste. Suggest et insist ont deux sens, et un seul déclenche le subjonctif. She insisted that he be there exprime une exigence. She insisted that he was there rapporte une affirmation — elle soutenait qu'il y était. La différence de forme porte toute la différence de sens.",
          visuels: [
            {
              type: "comparaison",
              titre: "Exigence ou constat",
              colonnes: [
                {
                  titre: "Subjonctif — on exige",
                  points: [
                    "She insisted that he be present.",
                    "He suggested that she leave early.",
                    "Le verbe reste à l'infinitif nu.",
                  ],
                },
                {
                  titre: "Indicatif — on rapporte",
                  points: [
                    "She insisted that he was present.",
                    "He suggested that she left early.",
                    "Le verbe se conjugue normalement.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Were, et pourquoi il résiste",
          texte:
            "Le subjonctif passé n'a plus qu'une forme, were, mais elle est solidement installée dans l'écrit soigné et dans quelques formules orales.\n\nElle s'emploie à toutes les personnes après if quand l'hypothèse est contraire aux faits : if I were rich, if he were here, if it were possible. La forme was est très courante à l'oral — if I was you — et systématiquement corrigée à l'écrit.\n\nElle s'emploie de même après wish : I wish I were somewhere else ; après as if et as though : he behaves as if he were in charge ; et après suppose ou imagine dans une hypothèse : suppose she were to refuse.\n\nDeux formules figées la portent aussi : if I were you, qui est la façon standard de donner un conseil, et as it were, qui veut dire « pour ainsi dire ».\n\nEnfin, une distinction utile : after if, were marque l'irréel, was marque le réel possible. If he was at the meeting, he heard the news — il y était peut-être. If he were at the meeting, he would hear the news — il n'y est pas. Un seul mot sépare l'hypothèse de la supposition.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I insist that he be present.",
        francais: "J'exige qu'il soit présent.",
        note: "Subjonctif mandative : infinitif nu, donc be et non is.",
      },
      {
        etranger: "They recommended that she apply immediately.",
        francais: "Ils ont recommandé qu'elle postule immédiatement.",
        note: "Pas de -s à la troisième personne : that she apply, jamais applies.",
      },
      {
        etranger: "It is essential that this not happen again.",
        francais: "Il est essentiel que cela ne se reproduise pas.",
        note: "La négation se fait sans do : that this NOT happen.",
      },
      {
        etranger: "She insisted that he was there.",
        francais: "Elle soutenait qu'il était là.",
        note: "Indicatif : ici insist rapporte une affirmation, il n'exige rien.",
      },
      {
        etranger: "If I were you, I would refuse.",
        francais: "Si j'étais toi, je refuserais.",
        note: "Were à toutes les personnes. Was s'entend à l'oral, se corrige à l'écrit.",
      },
      {
        etranger: "He talks as if he were the manager.",
        francais: "Il parle comme s'il était le directeur.",
        note: "As if et as though appellent le subjonctif passé.",
      },
      {
        etranger: "I wish I were somewhere else.",
        francais: "Je voudrais être ailleurs.",
        note: "Wish + were pour un souhait irréel au présent.",
      },
      {
        etranger: "Be that as it may, we must decide.",
        francais: "Quoi qu'il en soit, nous devons décider.",
        note: "Formule figée, reste d'un subjonctif ancien. Elle se cite, elle ne se construit plus.",
      },
      {
        etranger: "The board demanded that he resign.",
        francais: "Le conseil a exigé qu'il démissionne.",
        note: "Forme américaine. Le britannique dirait plutôt that he should resign.",
      },
      {
        etranger: "Suppose she were to refuse.",
        francais: "Supposons qu'elle refuse.",
        note: "Were to pour une hypothèse théorique, après suppose ou imagine.",
      },
    ],
  },
];
