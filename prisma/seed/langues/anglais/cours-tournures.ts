/**
 * Anglais — trois chapitres sur des tournures que le français n'a pas.
 *
 * Le point commun des trois : ce ne sont pas des mots à apprendre mais des
 * mécaniques. Le question tag se calcule, les collocations se choisissent, et
 * le couple gérondif / infinitif change le sens du verbe qui le précède. Un
 * francophone qui les ignore parle un anglais correct et faux.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_COURS_TOURNURES: LotCartes[] = [
  {
    slug: "en-question-tags",
    category: "Grammaire en contexte",
    title: "Les question tags : …, isn't it ?",
    statement:
      "Le français a « n'est-ce pas » et s'arrête là. L'anglais recalcule la fin de sa phrase à chaque fois, à partir de l'auxiliaire et du signe de la proposition.",
    tip: "Phrase affirmative, tag négatif ; phrase négative, tag affirmatif. Le tag reprend l'auxiliaire — et do quand il n'y en a pas.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les question tags",
      sections: [
        {
          titre: "Une machine à trois rouages",
          texte:
            "Un question tag n'est pas une formule à retenir : c'est un calcul, et il tient en trois questions posées dans l'ordre.\n\nPremièrement, quel est l'auxiliaire de la phrase ? S'il y en a un — be, have, un modal — c'est lui qui revient. She is French → …, isn't she ? You can swim → …, can't you ? S'il n'y en a pas, l'anglais en fabrique un avec do, au temps de la phrase : you like tea → …, don't you ? He came → …, didn't he ?\n\nDeuxièmement, quel est le signe de la phrase ? Le tag prend l'autre. Affirmative, le tag est négatif ; négative, le tag est affirmatif. C'est la règle du contraire, et elle n'a pas d'exception courante.\n\nTroisièmement, quel est le sujet ? Le tag le reprend sous forme de pronom, jamais sous forme de nom. Your brother is late → …, isn't he ?\n\nUne fois ces trois questions posées, le tag tombe tout seul. Le débutant apprend des tags par cœur ; celui qui progresse les calcule en une demi-seconde.",
          visuels: [
            {
              type: "etapes",
              titre: "Le calcul, dans l'ordre",
              etapes: [
                {
                  titre: "L'auxiliaire",
                  texte:
                    "Est-il déjà là ? On le reprend. Sinon, on prend do, does ou did selon le temps de la phrase.",
                },
                {
                  titre: "Le signe",
                  texte:
                    "La phrase est affirmative ? Le tag sera négatif, et contracté : isn't, don't, won't. Elle est négative ? Le tag sera affirmatif.",
                },
                {
                  titre: "Le sujet",
                  texte:
                    "Toujours un pronom. Your sister → she. The keys → they. Nobody → they, même au singulier.",
                },
              ],
            },
          ],
        },
        {
          titre: "Les quatre irrégularités qu'il faut connaître",
          texte:
            "Quatre cas sortent du calcul, et ce sont ceux qu'on entend le plus.\n\nI am fait aren't I ? — parce que « amn't I » n'existe pas en anglais standard. C'est une bizarrerie assumée, et elle est obligatoire : I'm late, aren't I ?\n\nAprès let's, le tag est toujours shall we ? Le sens n'est plus une question mais une proposition : let's start, shall we ?\n\nAprès un impératif, le tag est will you ? ou, plus doux, would you ? Open the window, will you ? Il transforme l'ordre en demande.\n\nEnfin, there is et there are reprennent there, qui joue ici le rôle de sujet : there's a problem, isn't there ? Dire « isn't it » serait la faute la plus naturelle, et elle s'entend.",
          visuels: [
            {
              type: "tableau",
              titre: "Le tag, phrase par phrase",
              colonnes: ["Phrase", "Auxiliaire repris", "Tag", "Pourquoi"],
              lignes: [
                ["You're French", "are", "aren't you?", "affirmatif → tag négatif"],
                ["She doesn't smoke", "does", "does she?", "négatif → tag affirmatif"],
                ["He came late", "aucun → did", "didn't he?", "do fabriqué au prétérit"],
                ["I'm late", "am", "aren't I?", "« amn't I » n'existe pas"],
                ["Let's start", "—", "shall we?", "après let's, toujours shall we"],
                ["Open the window", "—", "will you?", "après un impératif"],
                ["There's a problem", "is", "isn't there?", "there fait office de sujet"],
                ["Nobody called", "aucun → did", "did they?", "nobody reprend they"],
              ],
            },
          ],
        },
        {
          titre: "Ce que le tag veut vraiment dire",
          texte:
            "Le tag n'est presque jamais une question. Il sert à trois choses, et c'est l'intonation qui tranche entre elles.\n\nAvec une intonation descendante, il cherche l'accord : lovely weather, isn't it ? n'attend pas de réponse, il ouvre une conversation. C'est le lubrifiant social de l'anglais britannique, et l'absence de tag y passe pour de la froideur.\n\nAvec une intonation montante, c'est une vraie question, et le locuteur n'est pas sûr : you haven't seen my keys, have you ? Cette forme-là — phrase négative, tag positif — est aussi la façon polie de demander un service, parce qu'elle offre à l'interlocuteur une porte de sortie toute prête.\n\nEnfin, après un impératif ou après let's, le tag adoucit : ce n'est plus un ordre mais une invitation.\n\nUn francophone qui n'emploie jamais de tag ne fait aucune faute et sonne pourtant sec. C'est l'un des rares points où la grammaire fait de la politesse.",
          visuels: [
            {
              type: "comparaison",
              titre: "La même phrase, deux intonations",
              colonnes: [
                {
                  titre: "Descendante — je cherche l'accord",
                  points: [
                    "It's cold today, isn't it? — dit en frissonnant.",
                    "That was a good film, wasn't it? — on partage.",
                    "Réponse attendue : yes, un hochement, rien du tout.",
                  ],
                },
                {
                  titre: "Montante — je ne sais pas",
                  points: [
                    "You haven't seen my keys, have you? — je demande vraiment.",
                    "You will be there, won't you? — je veux être sûr.",
                    "Réponse attendue : une information.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    cartes: [
      {
        etranger: "You're French, aren't you?",
        francais: "Tu es français, n'est-ce pas ?",
        note: "Phrase affirmative, tag négatif. L'auxiliaire are revient, contracté avec not.",
      },
      {
        etranger: "She doesn't smoke, does she?",
        francais: "Elle ne fume pas, si ?",
        note: "Phrase négative, tag affirmatif. Le français répond par « si », l'anglais reprend l'auxiliaire.",
      },
      {
        etranger: "It's cold today, isn't it?",
        francais: "Il fait froid aujourd'hui, non ?",
        note: "Le tag de politesse par excellence : il n'attend pas de réponse, il ouvre la conversation.",
      },
      {
        etranger: "You haven't seen my keys, have you?",
        francais: "Tu n'aurais pas vu mes clés ?",
        note: "Négatif puis positif : la demande polie, qui laisse une porte de sortie.",
      },
      {
        etranger: "Let's start, shall we?",
        francais: "Commençons, d'accord ?",
        note: "Après let's, le tag est toujours shall we. Jamais don't we.",
      },
      {
        etranger: "Open the window, will you?",
        francais: "Ouvre la fenêtre, tu veux bien ?",
        note: "Après un impératif, le tag est will you — et l'ordre devient une demande.",
      },
      {
        etranger: "I'm late, aren't I?",
        francais: "Je suis en retard, non ?",
        note: "Le tag de I am est aren't I : « amn't I » n'existe pas en anglais standard.",
      },
      {
        etranger: "Nobody called, did they?",
        francais: "Personne n'a appelé, si ?",
        note: "Nobody, everyone, someone reprennent they au tag, même au singulier.",
      },
      {
        etranger: "There's a problem, isn't there?",
        francais: "Il y a un problème, non ?",
        note: "Avec there is, le tag reprend there. Dire « isn't it » est la faute naturelle.",
      },
      {
        etranger: "You will be there, won't you?",
        francais: "Tu seras bien là ?",
        note: "Intonation montante : ici on veut vraiment une réponse.",
      },
    ],
  },

  {
    slug: "en-collocations",
    category: "Pièges du français",
    title: "Make, do, take, have : le bon verbe",
    statement:
      "Le français fait tout avec « faire » et prend tout avec « prendre ». L'anglais répartit la même besogne entre quatre verbes, et le choix ne se déduit pas : il se sait.",
    tip: "Make ce qui se produit, do ce qui se travaille, take ce qui se saisit ou se subit, have ce qui se vit.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les collocations de make, do, take et have",
      sections: [
        {
          titre: "Pourquoi le dictionnaire ne suffit pas",
          texte:
            "Une collocation est un mariage de mots que l'usage a fixé et que la logique n'explique pas. Make a decision est juste ; « do a decision » est faux, et pourtant rien dans le sens de decision ne l'interdit. C'est de l'habitude figée, comme « prendre une décision » en français : on ne la saisit pas plus qu'on ne la fabrique.\n\nLe problème du francophone est double. D'abord « faire » couvre à lui seul make et do, et il faut trancher à chaque emploi. Ensuite « prendre » et « avoir » ne se répartissent pas comme take et have — l'anglais britannique dit have a shower là où le français prend une douche, et l'américain take a shower.\n\nIl n'y a pas de règle sans exception, mais il y a une tendance forte, et elle sauve la moitié des cas.",
          visuels: [
            {
              type: "comparaison",
              titre: "La tendance, en deux colonnes",
              colonnes: [
                {
                  titre: "MAKE — ce qui n'existait pas avant",
                  points: [
                    "make a decision, make a mistake, make a noise",
                    "make an effort, make a suggestion, make progress",
                    "Il y a production : quelque chose apparaît.",
                  ],
                },
                {
                  titre: "DO — ce qui est une tâche",
                  points: [
                    "do your homework, do the washing-up, do business",
                    "do a favour, do the shopping, do research",
                    "Il y a besogne : quelque chose est accompli.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Take et have : saisir ou vivre",
          texte:
            "Take porte ce qu'on saisit, ce qu'on emprunte et ce qu'on subit. On prend une photo (take a photo), un bus (take the bus), un examen (take an exam), un risque (take a risk), son temps (take your time). Le point commun est le geste : quelque chose passe de dehors à dedans, ou dure le temps qu'il faut.\n\nHave porte ce qu'on vit. Have a conversation, have a look, have a good time, have a problem, have a shower. Le sujet ne fabrique rien et ne saisit rien : il traverse une expérience.\n\nLa frontière entre les deux est parfois régionale plus que logique : la douche et les vacances se have au Royaume-Uni et se take aux États-Unis. Le reste ne bouge pas.\n\nDeux fautes coûtent particulièrement cher, parce qu'elles trahissent immédiatement : « do a mistake » pour make a mistake, et « make a photo » pour take a photo.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce que le français fait, et ce que l'anglais choisit",
              colonnes: ["En français", "En anglais", "Le verbe", "La faute fréquente"],
              lignes: [
                ["prendre une décision", "make a decision", "make", "take a decision"],
                ["faire une erreur", "make a mistake", "make", "do a mistake"],
                ["faire du bruit", "make a noise", "make", "do a noise"],
                ["faire ses devoirs", "do your homework", "do", "make your homework"],
                ["rendre un service", "do a favour", "do", "make a favour"],
                ["prendre une photo", "take a photo", "take", "make a photo"],
                ["prendre son temps", "take your time", "take", "take the time"],
                ["jeter un œil", "have a look", "have", "make a look"],
                ["prendre une douche", "have a shower", "have (GB)", "make a shower"],
                ["passer un examen", "take an exam", "take", "pass an exam"],
              ],
              note: "Pass an exam existe, mais veut dire réussir l'examen. Le passer se dit take.",
            },
          ],
        },
        {
          titre: "Comment les apprendre sans les apprendre",
          texte:
            "Une collocation ne se retient pas isolée. Elle se retient dans une phrase courte qu'on a envie de dire, et qu'on répète jusqu'à ce qu'elle sorte sans réfléchir. C'est la raison d'être des dix cartes de cette série : ce ne sont pas des paires de mots mais des phrases entières.\n\nDeuxième conseil : quand on hésite, on contourne. Plutôt que de risquer « do a decision », on dit I'll decide tomorrow. Le verbe simple existe presque toujours et ne se trompe pas de compagnon.\n\nTroisième conseil : lire beaucoup et remarquer. Les collocations sont partout et n'attirent l'œil que si l'on sait qu'elles existent. Une fois qu'on le sait, on ne voit plus qu'elles — et c'est à ce moment-là qu'on les apprend vraiment.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I need to make a decision.",
        francais: "Je dois prendre une décision.",
        note: "Le français prend la décision, l'anglais la fabrique : make a decision.",
      },
      {
        etranger: "She's doing her homework.",
        francais: "Elle fait ses devoirs.",
        note: "Do pour la tâche à accomplir. Homework est indénombrable : jamais « homeworks ».",
      },
      {
        etranger: "Let me take a photo.",
        francais: "Laisse-moi prendre une photo.",
        note: "Take a photo. « Make a photo » est un calque qui s'entend immédiatement.",
      },
      {
        etranger: "We had a long conversation.",
        francais: "Nous avons eu une longue conversation.",
        aussi: ["On a eu une longue conversation."],
        note: "Have porte l'expérience vécue : have a conversation, have a look, have a good time.",
      },
      {
        etranger: "He made a mistake.",
        francais: "Il a fait une erreur.",
        note: "Make a mistake. « Do a mistake » est la faute de collocation la plus fréquente chez un francophone.",
      },
      {
        etranger: "Can I have a look?",
        francais: "Je peux jeter un œil ?",
        note: "Have a look ou take a look, les deux se disent. « Make a look » n'existe pas.",
      },
      {
        etranger: "Take your time.",
        francais: "Prends ton temps.",
        note: "Take porte la durée et le trajet : take your time, take the bus, take an exam.",
      },
      {
        etranger: "Do me a favour.",
        francais: "Rends-moi un service.",
        note: "Ici c'est do, pas make. Et le français ne fait pas la faveur, il la rend.",
      },
      {
        etranger: "They made a lot of noise.",
        francais: "Ils ont fait beaucoup de bruit.",
        note: "Make a noise : tout ce qui se produit dans le monde se fait avec make.",
      },
      {
        etranger: "I'm having a shower.",
        francais: "Je prends une douche.",
        note: "Have a shower au Royaume-Uni, take a shower aux États-Unis. Jamais make.",
      },
    ],
  },

  {
    slug: "en-remember-doing",
    category: "Verbes",
    title: "Remember doing ou remember to do",
    statement:
      "Sept verbes anglais changent de sens selon qu'ils sont suivis d'un gérondif ou d'un infinitif. Ce n'est pas une nuance de style : stop smoking et stop to smoke disent le contraire.",
    tip: "Le -ing regarde en arrière, vers ce qui est déjà fait ; le to regarde en avant, vers ce qui reste à faire.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Gérondif ou infinitif : quand le verbe change de sens",
      sections: [
        {
          titre: "Le principe, en une image",
          texte:
            "La plupart des verbes anglais imposent l'une ou l'autre forme sans que le sens bouge : enjoy veut toujours un -ing, want veut toujours un to. Ceux-là s'apprennent par cœur et ne posent pas de problème de compréhension.\n\nUne poignée de verbes, en revanche, acceptent les deux — et changent de sens. Ce sont ceux-là qui comptent, parce qu'un francophone qui choisit au hasard dit une fois sur deux l'inverse de ce qu'il pense.\n\nLa règle qui les gouverne tous tient en une image. Le gérondif en -ing désigne une action déjà là, déjà commencée, déjà vécue : il regarde en arrière. L'infinitif avec to désigne une action encore à venir, un but, une intention : il regarde en avant.\n\nI remember locking the door : je revois le geste, il a eu lieu. Remember to lock the door : le geste est devant toi, ne l'oublie pas. Une syllabe sépare le souvenir de la consigne.",
          visuels: [
            {
              type: "comparaison",
              titre: "Les deux directions",
              colonnes: [
                {
                  titre: "-ing — l'action a eu lieu",
                  points: [
                    "I remember meeting her. — le souvenir existe.",
                    "I stopped smoking. — j'ai cessé cette activité.",
                    "I regret telling him. — c'est dit, et je le regrette.",
                  ],
                },
                {
                  titre: "to — l'action est à venir",
                  points: [
                    "Remember to call her. — c'est encore à faire.",
                    "I stopped to smoke. — je me suis arrêté afin de fumer.",
                    "We regret to inform you… — l'annonce vient après.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les sept verbes, un par un",
          texte:
            "Remember et forget suivent la règle à la lettre. Remember + -ing, c'est le souvenir ; remember + to, c'est la consigne. Forget + to, c'est l'oubli d'une tâche — le cas courant. Forget + -ing est rare et presque toujours au futur négatif : I'll never forget living there.\n\nStop est le plus tranchant des sept. Stop + -ing cesse l'activité. Stop + to s'interrompt afin d'en faire une autre. He stopped smoking, il a arrêté de fumer ; he stopped to smoke, il s'est arrêté pour fumer une cigarette. La même personne, deux vies différentes.\n\nTry + -ing, c'est essayer une méthode pour voir si elle marche : try turning it off and on again. Try + to, c'est faire un effort, souvent vain : I tried to open the window, but it was stuck.\n\nRegret + -ing exprime le remords d'une chose faite. Regret + to est une formule figée d'annonce, presque toujours écrite : we regret to inform you.\n\nGo on + -ing continue la même chose ; go on + to passe à la suivante. Mean + -ing implique une conséquence — this means working late ; mean + to exprime l'intention : I meant to call you.",
          visuels: [
            {
              type: "tableau",
              titre: "Le même verbe, deux sens",
              colonnes: ["Verbe", "+ -ing", "+ to", "L'écart"],
              lignes: [
                ["remember", "I remember locking it.", "Remember to lock it.", "souvenir / consigne"],
                ["forget", "I'll never forget living there.", "I forgot to call.", "souvenir / oubli d'une tâche"],
                ["stop", "He stopped smoking.", "He stopped to smoke.", "cesser / s'interrompre pour"],
                ["try", "Try turning it off.", "I tried to open it.", "méthode / effort"],
                ["regret", "I regret telling him.", "We regret to inform you.", "remords / annonce"],
                ["go on", "She went on talking.", "She went on to explain.", "continuer / enchaîner"],
                ["mean", "This means working late.", "I meant to call you.", "impliquer / avoir l'intention"],
              ],
            },
          ],
        },
        {
          titre: "Le réflexe à installer",
          texte:
            "Devant l'un de ces sept verbes, il faut se poser une seule question : est-ce que l'action qui suit est déjà arrivée, ou reste-t-elle à faire ? La réponse donne la forme, sans avoir à retenir sept paires.\n\nDeux pièges viennent se greffer là-dessus. Le premier : après to, en anglais, ce n'est pas toujours un infinitif. Look forward to, be used to, object to sont suivis d'un -ing, parce que ce to-là est une préposition et non la marque de l'infinitif. I look forward to hearing from you, jamais « to hear ».\n\nLe second : le français traduit souvent les deux formes de la même façon, et l'oreille ne prévient donc pas. « J'ai arrêté de fumer » et « je me suis arrêté pour fumer » se ressemblent en français bien plus qu'en anglais. C'est un point où il faut penser en anglais, pas traduire.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I remember meeting her in Lisbon.",
        francais: "Je me souviens de l'avoir rencontrée à Lisbonne.",
        note: "Remember + -ing : le souvenir d'une chose déjà faite. Le -ing regarde en arrière.",
      },
      {
        etranger: "Remember to lock the door.",
        francais: "N'oublie pas de fermer la porte à clé.",
        note: "Remember + to : la chose reste à faire. Le sens bascule complètement.",
      },
      {
        etranger: "I stopped smoking last year.",
        francais: "J'ai arrêté de fumer l'an dernier.",
        note: "Stop + -ing : on cesse l'activité elle-même.",
      },
      {
        etranger: "We stopped to have a coffee.",
        francais: "On s'est arrêtés pour prendre un café.",
        note: "Stop + to : on s'interrompt AFIN DE faire autre chose. Le contraire du précédent.",
      },
      {
        etranger: "She forgot to call the office.",
        francais: "Elle a oublié d'appeler le bureau.",
        note: "Forget + to : la tâche n'a pas été faite. C'est le cas courant.",
      },
      {
        etranger: "I'll never forget living there.",
        francais: "Je n'oublierai jamais ces années là-bas.",
        note: "Forget + -ing : on n'oublie pas un souvenir. Presque toujours au futur négatif.",
      },
      {
        etranger: "Try turning it off and on again.",
        francais: "Tu n'as qu'à l'éteindre et le rallumer.",
        note: "Try + -ing : on tente une méthode pour voir si elle marche.",
      },
      {
        etranger: "I tried to open the window.",
        francais: "J'ai tenté d'ouvrir la fenêtre.",
        note: "Try + to : on fait un effort, souvent vain. Le français distingue mal les deux.",
      },
      {
        etranger: "I regret telling him the truth.",
        francais: "Je regrette de lui avoir dit la vérité.",
        note: "Regret + -ing : le remords d'une chose faite.",
      },
      {
        etranger: "We regret to inform you of the delay.",
        francais: "Nous avons le regret de vous informer du retard.",
        note: "Regret + to : formule figée d'annonce, presque toujours écrite.",
      },
    ],
  },
];
