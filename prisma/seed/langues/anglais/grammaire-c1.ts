/**
 * Anglais — la grammaire du haut niveau, et trois domaines de plus.
 *
 * Ce qui sépare un bon B2 d'un C1 n'est presque jamais du vocabulaire : c'est
 * l'ORDRE DES MOTS. L'anglais avancé déplace, inverse, découpe la phrase pour
 * mettre en relief — et deux de ces trois procédés, l'inversion et la phrase
 * clivée, ne s'enseignent presque nulle part dans les manuels courants parce
 * qu'ils ne sont jamais obligatoires. Les temps du récit, eux, sont un B2
 * classique : on les regroupe ici parce qu'ils relèvent du même principe
 * (l'ordre plutôt que le mot).
 *
 * On peut parler anglais toute sa vie sans les employer. On ne peut pas écrire
 * un texte qui sonne juste sans eux.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_GRAMMAIRE_C1: LotCartes[] = [
  {
    slug: "en-cours-inversion",
    category: "Grammaire en contexte",
    title: "L'inversion après un négatif en tête",
    statement:
      "Never have I seen such a mess. Quand un mot négatif ouvre la phrase, l'anglais inverse le sujet et l'auxiliaire — et l'oublier fait immédiatement étranger à l'écrit soutenu.",
    tip: "La règle est mécanique : élément négatif ou restrictif en tête, puis auxiliaire, puis sujet. S'il n'y a pas d'auxiliaire, on en fabrique un avec do.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "Mettre en tête, et payer le prix",
      sections: [
        {
          titre: "Pourquoi l'anglais inverse",
          texte:
            "L'ordre normal de l'anglais est sujet-verbe-complément, et il est beaucoup plus rigide qu'en français. « Jamais je n'ai vu cela » se dit sans effort ; l'anglais, lui, ne peut pas déplacer un élément en tête sans compenser.\n\nCette compensation est l'inversion. Never have I seen such a mess : le never passe devant, et l'auxiliaire have prend la place du sujet. Sans inversion, « Never I have seen » est agrammatical, pas seulement maladroit.\n\nLa raison est fonctionnelle. La position de tête est la plus forte de la phrase anglaise ; y placer autre chose que le sujet est un acte de mise en relief. L'inversion signale que cet acte a eu lieu — c'est un marqueur, pas un ornement.\n\nPour un francophone, la difficulté n'est pas de comprendre la règle mais de se rappeler qu'elle est obligatoire. Le français déplace librement et sans conséquence grammaticale ; l'anglais fait payer chaque déplacement.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce que le déplacement coûte",
              colonnes: [
                {
                  titre: "Français",
                  points: [
                    "Jamais je n'ai vu cela.",
                    "À aucun moment il n'a hésité.",
                    "Ce n'est qu'alors qu'elle a compris.",
                  ],
                },
                {
                  titre: "Anglais",
                  points: [
                    "Never have I seen that.",
                    "At no point did he hesitate.",
                    "Only then did she understand.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Quels mots déclenchent l'inversion",
          texte:
            "Trois familles la déclenchent, et elles se reconnaissent facilement.\n\nLes négatifs purs : never, nowhere, nor, neither, not once, at no time, under no circumstances. Under no circumstances should you sign this.\n\nLes restrictifs : only, hardly, scarcely, barely, seldom, rarely, little. Attention, only n'inverse que s'il porte sur un complément placé en tête : Only in Britain do they do that. Placé devant un sujet — Only Mary knew — il n'inverse pas, parce que rien n'a bougé.\n\nLes corrélatifs : no sooner… than, hardly… when, not only… but also. No sooner had we arrived than it began to rain. Ces structures sont figées : la seconde partie ne s'invente pas, no sooner appelle than et hardly appelle when.\n\nUn quatrième cas, plus rare, concerne les compléments de lieu : Down the hill came a lorry. Ici l'inversion porte sur le verbe entier, pas sur un auxiliaire, et elle appartient au récit littéraire.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce qui inverse, ce qui n'inverse pas",
              colonnes: ["Tête de phrase", "Inversion ?", "Exemple"],
              lignes: [
                ["Never, at no time", "oui", "Never have I seen that."],
                ["Only + complément", "oui", "Only then did she agree."],
                ["Only + sujet", "non", "Only Mary knew."],
                ["No sooner… than", "oui", "No sooner had he left than…"],
                ["Not only… but also", "oui", "Not only did he lie, but…"],
              ],
              note: "Le critère est simple : quelque chose a-t-il quitté sa place normale ?",
            },
          ],
        },
        {
          titre: "Quand s'en servir, et quand s'abstenir",
          texte:
            "L'inversion appartient à l'écrit soutenu et au discours public. Dans une conversation ordinaire, elle sonne apprêtée, voire comique — personne ne dit « Never have I been so tired » en rentrant du travail.\n\nSes emplois naturels sont l'argumentation écrite, le compte rendu, le discours, le journalisme d'analyse. Under no circumstances should the data be shared est une phrase de note interne, pas de conversation.\n\nLa faute la plus fréquente du francophone n'est pas de l'employer à tort mais de la commencer sans la finir : mettre never en tête, puis continuer en ordre normal. La phrase devient alors franchement fautive, alors que la version sans déplacement — I have never seen that — était parfaitement correcte.\n\nLa règle de prudence est donc : dans le doute, ne pas déplacer. Une phrase en ordre normal n'est jamais fausse ; une inversion à moitié faite l'est toujours.",
          visuels: [
            {
              type: "etapes",
              titre: "Le réflexe en trois temps",
              etapes: [
                {
                  titre: "Un négatif ou un restrictif est-il en tête ?",
                  texte: "Never, only, hardly, no sooner, under no circumstances : si oui, l'inversion est obligatoire.",
                },
                {
                  titre: "Y a-t-il un auxiliaire ?",
                  texte: "S'il y en a un, il passe devant le sujet. Sinon, on en fabrique un avec do, does ou did.",
                },
                {
                  titre: "Le registre s'y prête-t-il ?",
                  texte: "À l'oral courant, préférer l'ordre normal : l'inversion y sonne théâtrale.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "Never have I seen such a mess.",
        francais: "Jamais je n'ai vu un tel désordre.",
        note: "Never en tête impose l'inversion. « Never I have seen » est agrammatical, pas maladroit.",
      },
      {
        etranger: "Rarely does he arrive on time.",
        francais: "Il arrive rarement à l'heure.",
        note: "Sans auxiliaire, on en fabrique un : does + base verbale.",
      },
      {
        etranger: "No sooner had we left than it rained.",
        francais: "À peine étions-nous partis qu'il s'est mis à pleuvoir.",
        note: "No sooner appelle than, jamais when. La structure est figée.",
      },
      {
        etranger: "Not only did he lie, but he also stole.",
        francais: "Non seulement il a menti, mais il a volé.",
        note: "Not only en tête inverse. La seconde proposition, elle, reste en ordre normal.",
      },
      {
        etranger: "Under no circumstances should you sign.",
        francais: "En aucun cas vous ne devez signer.",
        note: "Under no circumstances est la formule la plus employée des consignes écrites.",
      },
      {
        etranger: "Only then did she understand.",
        francais: "Ce n'est qu'alors qu'elle a compris.",
        note: "Only porte ici sur un complément déplacé : l'inversion suit.",
      },
      {
        etranger: "Only Mary knew the answer.",
        francais: "Seule Mary connaissait la réponse.",
        note: "Only porte sur le sujet, rien n'a bougé : pas d'inversion. Le contre-exemple utile.",
      },
      {
        etranger: "Hardly had he spoken when the lights went out.",
        francais: "À peine avait-il parlé que la lumière s'est éteinte.",
        note: "Hardly appelle when, à la différence de no sooner qui appelle than.",
      },
      {
        etranger: "At no point did she raise her voice.",
        francais: "À aucun moment elle n'a élevé la voix.",
        note: "At no point, formule de compte rendu. Did + base verbale après l'inversion.",
      },
      {
        etranger: "So convincing was the argument that nobody objected.",
        francais: "L'argument était si convaincant que personne n'a objecté.",
        note: "So + adjectif en tête inverse aussi. Registre nettement littéraire.",
      },
    ],
  },

  {
    slug: "en-cours-cleft",
    category: "Grammaire en contexte",
    title: "Découper la phrase pour insister",
    statement:
      "It was John who broke it. What I need is time. L'anglais n'a pas la souplesse d'intonation du français : pour insister, il découpe la phrase en deux.",
    tip: "Le français insiste avec la voix ou avec « c'est… que ». L'anglais fait pareil, mais la structure est obligatoire et beaucoup plus fréquente à l'écrit.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cours: {
      titre: "La phrase clivée",
      sections: [
        {
          titre: "Pourquoi découper",
          texte:
            "L'anglais parlé insiste par l'accent tonique : I saw JOHN. Mais l'écrit n'a pas d'accent tonique, et l'ordre des mots y est trop rigide pour déplacer librement. D'où le clivage — couper la phrase en deux pour mettre un élément dans le projecteur.\n\nDeux moules existent. Le clivage en it : It was John who broke it. Le clivage en what, dit pseudo-clivé : What I need is time.\n\nLe français connaît le premier — « C'est John qui l'a cassé » — et l'emploie même davantage. Il ne connaît pas vraiment le second : « Ce dont j'ai besoin, c'est du temps » existe mais reste lourd, là où l'anglais l'emploie couramment, y compris à l'oral.\n\nL'enjeu n'est donc pas la compréhension : un francophone comprend ces phrases sans effort. L'enjeu est la production. Ne jamais cliver donne un anglais plat, où rien n'est mis en avant, et où le lecteur doit deviner ce qui compte.",
          visuels: [
            {
              type: "tableau",
              titre: "Deux moules, deux effets",
              colonnes: ["Structure", "Ce qu'elle met en avant", "Exemple"],
              lignes: [
                ["It is/was… who/that…", "un élément précis", "It was the rain that stopped us."],
                ["What… is/was…", "l'action ou le besoin", "What we need is more time."],
                ["All… is/was…", "la restriction", "All I want is an answer."],
                ["The reason… is that…", "la cause", "The reason it failed is that…"],
              ],
              note: "Who pour une personne, that pour tout le reste — et that reste possible pour une personne.",
            },
          ],
        },
        {
          titre: "Le clivage en it",
          texte:
            "La formule est It + be + élément mis en avant + who ou that + le reste.\n\nOn peut y mettre presque tout : le sujet — It was John who called ; le complément — It was the car that he sold ; un circonstanciel — It was on Tuesday that we met. Le verbe seul fait exception : on ne clive pas un verbe avec ce moule.\n\nLe temps de be s'accorde avec celui de la phrase d'origine : It is John who calls every day, It was John who called yesterday. Un francophone laisse souvent is par inadvertance, ce qui casse la concordance.\n\nDeux emplois dominent. Corriger : It wasn't me who said that. Et opposer : It was the delay, not the price, that killed the deal.\n\nLa négation se place sur be : It wasn't John who broke it. Mettre la négation sur le verbe de la relative — It was John who didn't break it — est correct mais dit tout autre chose : c'est lui, et lui seul, qui ne l'a pas cassé.",
          visuels: [
            {
              type: "comparaison",
              titre: "La négation change de place",
              colonnes: [
                {
                  titre: "Ce qu'on veut dire",
                  points: [
                    "Ce n'est pas John qui l'a cassé.",
                    "C'est John qui ne l'a pas cassé.",
                  ],
                },
                {
                  titre: "En anglais",
                  points: [
                    "It wasn't John who broke it.",
                    "It was John who didn't break it.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Le clivage en what, et ses variantes",
          texte:
            "Le pseudo-clivé suit le moule What + proposition + be + élément mis en avant. What I need is time. What surprised me was the silence.\n\nSa force est de préparer le lecteur : la première moitié annonce qu'une information importante arrive, la seconde la livre. C'est pour cela qu'il est si employé à l'écrit argumenté et dans les présentations.\n\nIl accepte aussi de mettre en avant une action entière, ce que le clivage en it ne sait pas faire : What he did was call the police. Noter l'infinitif sans to après was — la forme surprend, elle est pourtant standard.\n\nDeux variantes valent d'être connues. All I want is an answer restreint : c'est un what avec une nuance de « rien d'autre que ». The reason… is that… explicite une cause, et c'est la charpente de bien des paragraphes d'analyse.\n\nEnfin, le verbe be s'accorde avec ce qui suit, pas avec what : What we need is time, mais What we need are answers.",
          visuels: [
            {
              type: "etapes",
              titre: "Construire un pseudo-clivé",
              etapes: [
                {
                  titre: "Isoler ce qu'on veut mettre en avant",
                  texte: "Un besoin, une action, une cause. Si c'est un simple nom précis, le clivage en it convient mieux.",
                },
                {
                  titre: "Ouvrir par what, all ou the reason",
                  texte: "What I need, All I want, The reason it failed — la première moitié annonce sans livrer.",
                },
                {
                  titre: "Accorder be avec ce qui suit",
                  texte: "What we need is time. What we need are answers. L'accord ne se fait jamais sur what.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "It was John who broke it.",
        francais: "C'est John qui l'a cassé.",
        note: "Who pour une personne, that pour le reste. Le temps de be suit celui de la phrase.",
      },
      {
        etranger: "It wasn't me who said that.",
        francais: "Ce n'est pas moi qui ai dit ça.",
        note: "La négation porte sur be, jamais sur le verbe de la subordonnée.",
      },
      {
        etranger: "What I need is time.",
        francais: "Ce dont j'ai besoin, c'est du temps.",
        note: "Le pseudo-clivé, bien plus courant en anglais qu'en français.",
      },
      {
        etranger: "What surprised me was the silence.",
        francais: "Ce qui m'a surpris, c'est le silence.",
        note: "What sujet de la subordonnée. Be s'accorde avec ce qui suit, pas avec what.",
      },
      {
        etranger: "What he did was call the police.",
        francais: "Ce qu'il a fait, c'est appeler la police.",
        note: "Infinitif sans to après was. La forme surprend et reste standard.",
      },
      {
        etranger: "All I want is an answer.",
        francais: "Tout ce que je veux, c'est une réponse.",
        note: "All ajoute la restriction : rien d'autre que cela.",
      },
      {
        etranger: "The reason it failed is that nobody tested it.",
        francais: "La raison de l'échec, c'est que personne ne l'a testé.",
        note: "The reason… is that…, jamais « is because » dans l'écrit soigné.",
      },
      {
        etranger: "It was on Tuesday that we met.",
        francais: "C'est mardi que nous nous sommes rencontrés.",
        note: "Un circonstanciel se clive aussi, avec that et jamais who.",
      },
      {
        etranger: "What we need are answers.",
        francais: "Ce qu'il nous faut, ce sont des réponses.",
        note: "Are, parce que le pluriel suit. L'accord ne se fait jamais sur what.",
      },
      {
        etranger: "It was the delay that killed the deal.",
        francais: "C'est le retard qui a fait échouer l'accord.",
        note: "Emploi d'opposition : on désigne la vraie cause contre une autre supposée.",
      },
    ],
  },

  {
    slug: "en-cours-narratif",
    category: "Grammaire en contexte",
    title: "Raconter : les temps du récit",
    statement:
      "I was walking when I saw. I had left before she arrived. Un récit anglais empile trois temps, et se tromper d'étage brouille l'ordre des événements.",
    tip: "Le prétérit fait avancer le récit, le past continuous plante le décor, le past perfect remonte en arrière. Trois fonctions, jamais interchangeables.",
    difficulty: 2,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Trois temps, trois fonctions",
      sections: [
        {
          titre: "Ce que chaque temps fait",
          texte:
            "Un récit anglais n'est pas une suite de verbes au passé : c'est une architecture à trois étages, et chaque étage a un rôle.\n\nLe prétérit simple fait avancer. Chaque verbe au prétérit est un événement qui arrive après le précédent. She opened the door, walked in and sat down : trois actions, dans cet ordre.\n\nLe past continuous plante le décor. Il décrit ce qui était déjà en cours quand l'action est survenue. It was raining when I left : la pluie n'est pas un événement du récit, c'est son arrière-plan.\n\nLe past perfect remonte en arrière. Il dit qu'une chose est antérieure à un moment déjà passé. When I arrived, she had left : le départ précède l'arrivée, et sans le past perfect on comprendrait l'inverse.\n\nLe francophone dispose des mêmes distinctions — passé simple, imparfait, plus-que-parfait — mais les répartit autrement, notamment parce que l'imparfait français couvre l'habitude en plus du décor.",
          visuels: [
            {
              type: "tableau",
              titre: "Chaque temps à sa place",
              colonnes: ["Temps", "Rôle", "Exemple"],
              lignes: [
                ["prétérit", "fait avancer", "She opened the door."],
                ["past continuous", "plante le décor", "It was raining outside."],
                ["past perfect", "remonte en arrière", "She had already left."],
                ["used to / would", "dit l'habitude", "We would meet on Fridays."],
              ],
              note: "L'imparfait français couvre les lignes 2 et 4 à lui seul : c'est là que naît la confusion.",
            },
          ],
        },
        {
          titre: "L'erreur du plus-que-parfait partout",
          texte:
            "La faute la plus répandue chez les francophones avancés est l'excès de past perfect. Ayant compris qu'il traduit le plus-que-parfait, on l'emploie chaque fois que le français l'emploierait — et le récit anglais devient illisible.\n\nLa règle est plus étroite : le past perfect ne sert qu'à SIGNALER UNE RUPTURE D'ORDRE. Si les événements sont racontés dans l'ordre où ils se sont produits, le prétérit suffit, même pour le premier. He finished his coffee and left est parfait ; « He had finished his coffee and left » suggère à tort qu'on remonte le temps.\n\nÀ l'inverse, l'omettre là où il faut crée une ambiguïté réelle. When I arrived, she left signifie qu'elle est partie après mon arrivée — probablement à cause d'elle. When I arrived, she had left dit qu'elle était déjà partie. Les deux phrases sont correctes et racontent des histoires opposées.\n\nRepère pratique : after et before rendent souvent le past perfect inutile, puisqu'ils disent déjà l'ordre. After he finished, he left se passe très bien du plus-que-parfait.",
          visuels: [
            {
              type: "comparaison",
              titre: "Deux histoires, un auxiliaire d'écart",
              colonnes: [
                {
                  titre: "When I arrived, she left.",
                  points: [
                    "J'arrive.",
                    "Elle part ensuite.",
                    "Peut-être à cause de moi.",
                  ],
                },
                {
                  titre: "When I arrived, she had left.",
                  points: [
                    "Elle part.",
                    "J'arrive après.",
                    "Je ne l'ai pas vue.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "L'habitude, et le piège de would",
          texte:
            "Le troisième usage de l'imparfait français est l'habitude : « nous allions à la mer chaque été ». L'anglais ne l'exprime ni par le prétérit seul ni par le past continuous, mais par used to ou par would.\n\nUsed to convient toujours : We used to go to the sea every summer. Il porte en plus l'idée que la chose a cessé.\n\nWould convient aux actions répétées, jamais aux états. We would go to the sea every summer est correct ; « We would live in Paris » ne l'est pas — il faut used to live. La frontière est celle du verbe d'état : be, have, know, live, like n'acceptent pas would.\n\nUn dernier piège tient à la forme. Used to au passé n'a rien à voir avec be used to, qui signifie être habitué à, et se construit avec un gérondif : I'm used to working late. Les deux se ressemblent à s'y méprendre et disent des choses différentes.",
          visuels: [
            {
              type: "etapes",
              titre: "Choisir son temps",
              etapes: [
                {
                  titre: "L'action fait-elle avancer le récit ?",
                  texte: "Si oui, prétérit simple. C'est le cas par défaut, et il couvre la majorité des verbes d'un récit.",
                },
                {
                  titre: "Décrit-elle ce qui était déjà en cours ?",
                  texte: "Alors past continuous : il pose le décor sans faire avancer l'histoire.",
                },
                {
                  titre: "Remonte-t-elle avant un moment déjà passé ?",
                  texte: "Past perfect, mais seulement si l'ordre du récit est rompu. Sinon le prétérit suffit.",
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "I was walking home when I saw her.",
        francais: "Je rentrais à pied quand je l'ai vue.",
        note: "Le continuous plante le décor, le prétérit apporte l'événement.",
      },
      {
        etranger: "When I arrived, she had already left.",
        francais: "Quand je suis arrivé, elle était déjà partie.",
        note: "Sans le past perfect, on comprendrait qu'elle est partie après mon arrivée.",
      },
      {
        etranger: "He finished his coffee and left.",
        francais: "Il a fini son café et il est parti.",
        note: "Deux prétérits suffisent : l'ordre du récit suit l'ordre des faits.",
      },
      {
        etranger: "We used to go there every summer.",
        francais: "Nous y allions chaque été.",
        note: "Used to dit l'habitude passée et suggère qu'elle a cessé.",
      },
      {
        etranger: "We would meet on Fridays.",
        francais: "Nous nous retrouvions le vendredi.",
        note: "Would pour une action répétée. Impossible avec un verbe d'état : « we would live » est fautif.",
      },
      {
        etranger: "The sun was setting as we drove.",
        francais: "Le soleil se couchait pendant que nous roulions.",
        note: "Deux continuous : deux décors simultanés, aucun événement.",
      },
      {
        etranger: "She had been waiting for an hour.",
        francais: "Elle attendait depuis une heure.",
        note: "Past perfect continuous : une durée qui court jusqu'au moment du récit.",
      },
      {
        etranger: "By the time we got there, it was over.",
        francais: "Le temps qu'on arrive, c'était fini.",
        note: "By the time + prétérit. La principale peut rester au prétérit si l'ordre est clair.",
      },
      {
        etranger: "He would sit there for hours.",
        francais: "Il restait assis là des heures.",
        note: "Would pour une action répétée. Un verbe d'état comme be ne l'accepterait pas.",
      },
      {
        etranger: "No one knew what had happened.",
        francais: "Personne ne savait ce qui s'était passé.",
        note: "Le past perfect dans une subordonnée : l'événement précède le moment du récit.",
      },
    ],
  },

  {
    slug: "en-c1-diplomatie",
    category: "Vocabulaire",
    title: "Relations internationales",
    statement:
      "Deplore, urge, call on, condemn. Le langage diplomatique anglophone est une échelle de gravité codifiée, et chaque verbe y occupe un barreau précis.",
    tip: "Du plus faible au plus fort : note, regret, deplore, condemn. Un communiqué qui passe de regret à deplore vient de durcir sa position, sans changer un autre mot.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The council deplored the attack.",
        francais: "Le conseil a déploré l'attaque.",
        note: "Deplore est plus fort que regret, plus faible que condemn. L'échelle est codifiée.",
      },
      {
        etranger: "They urged both sides to show restraint.",
        francais: "Ils ont exhorté les deux parties à la retenue.",
        note: "Urge someone to do, exhorter. Restraint, la retenue — pas une contrainte.",
      },
      {
        etranger: "Talks broke down over borders.",
        francais: "Les négociations ont échoué sur la question des frontières.",
        aussi: ["Les pourparlers ont achoppé sur les frontières."],
        note: "Break down, échouer. Talks est toujours au pluriel dans ce sens.",
      },
      {
        etranger: "Sanctions were lifted in March.",
        francais: "Les sanctions ont été levées en mars.",
        note: "Lift sanctions, lever. Impose sanctions, les instaurer. Ease, les alléger.",
      },
      {
        etranger: "The envoy was recalled for consultations.",
        francais: "L'émissaire a été rappelé pour consultations.",
        note: "Recall for consultations est la formule qui signale une crise sans rompre.",
      },
      {
        etranger: "The two states resumed diplomatic ties.",
        francais: "Les deux États ont rétabli leurs relations diplomatiques.",
        note: "Ties, les liens. Sever ties, les rompre. Resume, les reprendre.",
      },
      {
        etranger: "The vote passed with three abstentions.",
        francais: "La motion a été adoptée avec trois abstentions.",
        note: "A vote passes ou fails. An abstention est un vote qui ne compte ni pour ni contre.",
      },
      {
        etranger: "The agreement is non-binding.",
        francais: "L'accord n'a pas de valeur contraignante.",
        note: "Binding, contraignant en droit. Un texte non-binding engage la parole, pas les tribunaux.",
      },
      {
        etranger: "The summit ended without a communiqué.",
        francais: "Le sommet s'est achevé sans communiqué.",
        note: "L'absence de communiqué final est en soi une information : elle dit le désaccord.",
      },
      {
        etranger: "They called on the regime to step down.",
        francais: "Ils ont appelé le régime à se retirer.",
        note: "Call on someone to do, appeler à. Step down, quitter le pouvoir de son plein gré.",
      },
    ],
  },

  {
    slug: "en-c1-marketing",
    category: "Travail et études",
    title: "Marque et audience",
    statement:
      "Reach, engagement, funnel, churn. Le vocabulaire du marketing anglophone est passé tel quel dans le français des entreprises, souvent sans que personne n'en connaisse le sens exact.",
    tip: "Reach est le nombre de personnes touchées, engagement celui de celles qui ont réagi. Confondre les deux fausse toute lecture d'un tableau de bord.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The campaign had limited reach.",
        francais: "La campagne a touché peu de monde.",
        aussi: ["La campagne a eu une portée limitée."],
        note: "Reach, le nombre de personnes touchées au moins une fois.",
      },
      {
        etranger: "Engagement dropped after the redesign.",
        francais: "L'interaction a chuté après la refonte.",
        aussi: ["Le taux d'engagement a baissé après la refonte."],
        note: "Engagement mesure les réactions, pas l'exposition. Ce n'est pas un engagement au sens français.",
      },
      {
        etranger: "We lose users at the second step.",
        francais: "Nous perdons des utilisateurs à la deuxième étape.",
        note: "The funnel décrit ce parcours par étapes ; chaque étape a son taux d'abandon.",
      },
      {
        etranger: "Churn is running at five per cent.",
        francais: "Le taux de résiliation est de cinq pour cent.",
        aussi: ["L'attrition atteint cinq pour cent."],
        note: "Churn, la proportion de clients qui partent sur une période.",
      },
      {
        etranger: "The brand repositioned itself upmarket.",
        francais: "La marque s'est repositionnée sur le haut de gamme.",
        note: "Upmarket en anglais britannique, upscale en américain. Downmarket dit l'inverse.",
      },
      {
        etranger: "We're A/B testing the headline.",
        francais: "Nous testons deux versions du titre.",
        note: "A/B testing n'a pas d'équivalent français fixé. Le titre est the headline.",
      },
      {
        etranger: "Word of mouth did the rest.",
        francais: "Le bouche-à-oreille a fait le reste.",
        note: "Word of mouth, sans article. La formule est figée.",
      },
      {
        etranger: "The launch was pushed back a quarter.",
        francais: "Le lancement a été repoussé d'un trimestre.",
        note: "Push back, repousser dans le temps. Bring forward dit l'inverse.",
      },
      {
        etranger: "Their pitch fell flat.",
        francais: "Leur argumentaire est tombé à plat.",
        note: "A pitch, une présentation commerciale courte. Fall flat, ne produire aucun effet.",
      },
      {
        etranger: "We track this weekly.",
        francais: "Nous suivons cet indicateur chaque semaine.",
        note: "Track, suivre dans le temps. Monitor dit plutôt la surveillance continue.",
      },
    ],
  },

  {
    slug: "en-c1-philosophie",
    category: "Vocabulaire",
    title: "Idées, croyances et morale",
    statement:
      "Claim, entail, warrant, hold. Les verbes du raisonnement philosophique anglophone ont un sens technique strict, et leur sens courant induit en erreur.",
    tip: "A claim est une thèse avancée, pas une réclamation. To hold that, c'est soutenir une position. Entail, c'est impliquer logiquement — pas entraîner au sens de causer.",
    difficulty: 3,
    niveau: "C1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "He holds that freedom requires equality.",
        francais: "Il soutient que la liberté suppose l'égalité.",
        note: "Hold that, soutenir une thèse. Le verbe est courant dans tout l'écrit philosophique.",
      },
      {
        etranger: "The claim is hard to defend.",
        francais: "La thèse est difficile à défendre.",
        note: "A claim, une affirmation avancée comme vraie. Rien à voir avec une réclamation.",
      },
      {
        etranger: "That doesn't entail what you think.",
        francais: "Cela n'implique pas ce que vous croyez.",
        note: "Entail, impliquer logiquement. Cause dirait la causalité, ce qui est autre chose.",
      },
      {
        etranger: "The evidence does not warrant that conclusion.",
        francais: "Les preuves ne justifient pas cette conclusion.",
        note: "Warrant, justifier suffisamment. Le nom a warrant est un mandat judiciaire.",
      },
      {
        etranger: "The distinction collapses on closer inspection.",
        francais: "La distinction s'effondre à l'examen.",
        note: "Collapse, s'effondrer. On closer inspection, en y regardant de plus près.",
      },
      {
        etranger: "This begs the question.",
        francais: "C'est une pétition de principe.",
        aussi: ["Le raisonnement est circulaire."],
        note: "Le sens strict est la pétition de principe. L'usage courant l'a élargi à « soulève la question ».",
      },
      {
        etranger: "The argument rests on a false premise.",
        francais: "L'argument repose sur une prémisse fausse.",
        note: "Rest on, reposer sur. A premise, une prémisse — le pluriel premises désigne des locaux.",
      },
      {
        etranger: "He drew a sharp distinction between the two.",
        francais: "Il a nettement distingué les deux.",
        note: "Draw a distinction, établir une distinction. Sharp dit la netteté du partage.",
      },
      {
        etranger: "It is a matter of degree, not of kind.",
        francais: "C'est une différence de degré, non de nature.",
        note: "Of degree contre of kind : l'opposition classique de tout raisonnement philosophique.",
      },
      {
        etranger: "The objection misses the point.",
        francais: "L'objection passe à côté du problème.",
        note: "Miss the point, ne pas saisir l'essentiel. La formule est fréquente en discussion.",
      },
    ],
  },

  {
    slug: "en-c2-registre",
    category: "Expressions",
    title: "Choisir son registre à l'écrit",
    statement:
      "Get, obtain, acquire, procure. L'anglais superpose un fonds germanique court et un fonds latin long, et le choix entre les deux fait tout le registre d'un texte.",
    tip: "Le mot germanique est le mot juste dans neuf textes sur dix. Le latin ne se justifie que par la précision technique — jamais par le seul désir de faire savant.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "We need to get more data.",
        francais: "Il nous faut plus de données.",
        note: "Get est neutre et convient partout. Obtain, dans le même contexte, sonne administratif.",
      },
      {
        etranger: "The company acquired three rivals.",
        francais: "L'entreprise a racheté trois concurrents.",
        note: "Acquire est ici le mot juste : il dit la prise de contrôle, pas le simple achat.",
      },
      {
        etranger: "Please find the report attached.",
        francais: "Veuillez trouver le rapport ci-joint.",
        note: "Please find attached reste la formule figée des courriers formels ; the report is attached et here's the report sont les formes courantes du courriel de travail.",
      },
      {
        etranger: "The decision was subsequently reversed.",
        francais: "La décision a par la suite été annulée.",
        note: "Subsequently appartient à l'écrit formel. À l'oral, on dirait later ou after that.",
      },
      {
        etranger: "Let's sort it out tomorrow.",
        francais: "On règle ça demain.",
        note: "Sort out est familier et parfaitement idiomatique. Resolve serait raide entre collègues.",
      },
      {
        etranger: "The findings are set out below.",
        francais: "Les résultats sont exposés ci-dessous.",
        note: "Set out, exposer méthodiquement. Le verbe est germanique et pourtant très formel.",
      },
      {
        etranger: "Any thoughts would be welcome.",
        francais: "Toute remarque sera la bienvenue.",
        aussi: ["Vos retours seront les bienvenus."],
        note: "Formule de courriel professionnel : polie sans être guindée, et neutre en hiérarchie.",
      },
      {
        etranger: "The matter has been dealt with.",
        francais: "L'affaire a été traitée.",
        note: "Deal with, traiter. La préposition reste en fin de phrase, y compris à l'écrit soigné.",
      },
      {
        etranger: "This is not a big deal.",
        francais: "Ce n'est pas bien grave.",
        note: "Familier. Dans une note écrite, on écrirait this is not a significant issue.",
      },
      {
        etranger: "Kindly refrain from smoking here.",
        francais: "Merci de vous abstenir de fumer ici.",
        note: "Kindly + refrain appartient à l'écriteau. Employé à l'oral, il sonne franchement sec.",
      },
    ],
  },

  {
    slug: "en-c2-ambiguite",
    category: "Pièges du français",
    title: "Les phrases qui disent deux choses",
    statement:
      "L'anglais accumule les ambiguïtés que l'ordre des mots ne lève pas. Un adverbe mal placé, un « only » qui glisse, un complément qui peut se rattacher à deux endroits : la phrase reste correcte et change de sens.",
    tip: "La règle de survie : placer only juste devant ce sur quoi il porte, et rapprocher chaque complément du mot qu'il complète. L'anglais n'a pas d'accord pour rattraper l'ordre.",
    difficulty: 3,
    niveau: "C2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I only saw her on Tuesday.",
        francais: "Je ne l'ai vue que mardi.",
        aussiEtranger: ["I saw her only on Tuesday."],
        note: "Only devant le verbe porte sur toute la phrase et reste ambigu ; placé juste devant on Tuesday, il ne porte plus que sur le jour.",
      },
      {
        etranger: "I saw only her on Tuesday.",
        francais: "Mardi, je n'ai vu qu'elle.",
        note: "Only devant her ne porte plus que sur elle. Un seul mot déplacé, un sens neuf.",
      },
      {
        etranger: "She told him she was leaving on Friday.",
        francais: "Elle lui a dit vendredi qu'elle partait.",
        aussi: ["Elle lui a dit qu'elle partait vendredi."],
        note: "On Friday peut se rattacher à told ou à leaving. L'anglais ne tranche pas.",
      },
      {
        etranger: "The man saw the woman with a telescope.",
        francais: "L'homme a vu la femme au télescope.",
        aussi: ["L'homme a vu la femme qui tenait un télescope."],
        note: "Le complément peut porter sur le verbe ou sur le nom. Ambiguïté classique.",
      },
      {
        etranger: "The old men and women left.",
        francais: "Les vieux hommes et les femmes sont partis.",
        aussi: ["Les hommes et les femmes âgés sont partis."],
        note: "Old porte sur men seul, ou sur l'ensemble men and women. L'ambiguïté ne se résout pas non plus à l'oral.",
      },
      {
        etranger: "Flying planes can be dangerous.",
        francais: "Piloter un avion peut être dangereux.",
        aussi: ["Les avions en vol peuvent être dangereux."],
        note: "Flying est participe ou gérondif. Les deux lectures sont grammaticales.",
      },
      {
        etranger: "He didn't leave because he was angry.",
        francais: "Il n'est pas parti parce qu'il était en colère.",
        note: "La négation porte sur le verbe ou sur la cause. À l'écrit, on lève le doute par une virgule.",
      },
      {
        etranger: "I saw her duck.",
        francais: "Je l'ai vue se baisser.",
        aussi: ["J'ai vu son canard."],
        note: "Duck est un verbe (se baisser) ou un nom (le canard). L'ambiguïté est lexicale, pas grammaticale comme flying planes.",
      },
      {
        etranger: "We must review all the data carefully.",
        francais: "Nous devons examiner soigneusement toutes les données.",
        note: "Carefully en fin de phrase peut se rattacher au seul review ou à tout le groupe review all the data ; devant le verbe, il ne porte plus que sur l'acte de relire.",
      },
      {
        etranger: "The chicken is ready to eat.",
        francais: "Le poulet est prêt à être mangé.",
        aussi: ["Le poulet est prêt à manger."],
        note: "Ready to eat : le sujet peut être l'agent ou le patient. Le contexte tranche toujours.",
      },
    ],
  },
];
