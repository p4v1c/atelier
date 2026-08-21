/**
 * Anglais — six chapitres de prononciation.
 *
 * Le module n'en comptait qu'un. Or c'est le domaine où un francophone perd le
 * plus : sa grammaire peut être irréprochable, si ses voyelles ne distinguent
 * pas ship de sheep, il n'est pas compris. Et la prononciation est le seul
 * domaine où l'on ne se corrige pas tout seul — personne ne signale qu'il n'a
 * pas compris, on répète simplement la phrase.
 *
 * Toutes ces séries portent `parle`, et c'est le point : l'exercice de
 * prononciation mesure si un logiciel reconnaît ce qu'on dit. C'est un
 * révélateur honnête, pas un professeur.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_PRONONCIATION: LotCartes[] = [
  {
    slug: "en-pron-voyelles",
    category: "Prononciation",
    title: "Les voyelles courtes et longues",
    statement:
      "Le français a des voyelles de durée à peu près égale. L'anglais oppose des paires où seule la longueur distingue deux mots — et ces paires reviennent tous les jours.",
    tip: "Ship et sheep ne diffèrent pas par une lettre mais par une durée et un timbre : /ɪ/ bref et relâché, /iː/ long et tendu.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les voyelles que le français n'a pas",
      sections: [
        {
          titre: "Trois paires qui font tout",
          texte:
            "L'anglais compte une douzaine de voyelles simples, le français environ autant — mais elles ne se recouvrent pas. Trois oppositions sont responsables de la plupart des malentendus.\n\nLa première est /ɪ/ contre /iː/. Le premier son est bref, relâché, la langue plus basse : ship, sit, live, bin. Le second est long et tendu : sheep, seat, leave, bean. Un francophone qui prononce les deux comme un « i » français dit toujours le second, ce qui produit des phrases surprenantes.\n\nLa deuxième est /æ/ contre /e/. Le /æ/ n'existe pas en français : c'est un « a » très antérieur, bouche largement ouverte — bad, cat, man. Le /e/ est plus fermé, proche de notre « è » : bed, met, men. Confondre bad et bed, man et men, est extrêmement fréquent.\n\nLa troisième est /ʊ/ contre /uː/. Full, book, could ont un « ou » bref et relâché ; fool, boot, cooed ont un « ou » long. Le français n'a que le second.\n\nS'y ajoute le /ʌ/ de cup, but, love : un son central, ni « a » ni « eu », qu'un francophone rend souvent par « eu » — ce qui passe, faute de mieux.",
          visuels: [
            {
              type: "tableau",
              titre: "Les paires à travailler en premier",
              colonnes: ["Bref", "Long", "Ce que le francophone dit", "Le risque"],
              lignes: [
                ["ship /ɪ/", "sheep /iː/", "toujours sheep", "le mouton au lieu du bateau"],
                ["sit /ɪ/", "seat /iː/", "toujours seat", "—"],
                ["live /ɪ/", "leave /iː/", "toujours leave", "partir au lieu de vivre"],
                ["bad /æ/", "bed /e/", "les deux comme bed", "le lit au lieu du mauvais"],
                ["man /æ/", "men /e/", "confusion singulier-pluriel", "réel"],
                ["full /ʊ/", "fool /uː/", "toujours fool", "l'idiot au lieu du plein"],
                ["pull /ʊ/", "pool /uː/", "toujours pool", "—"],
              ],
              note: "Un dictionnaire en ligne donne l'API et l'audio de chaque mot : c'est l'outil le plus rentable de tout l'apprentissage.",
            },
          ],
        },
        {
          titre: "Comment les produire",
          texte:
            "Trois gestes suffisent, et ils s'apprennent devant un miroir.\n\nPour /iː/, étirez les lèvres comme pour sourire, langue haute et en avant, et tenez le son. Pour /ɪ/, relâchez tout : la langue redescend légèrement, les lèvres se détendent, le son est bref. L'erreur du francophone est de ne jamais relâcher.\n\nPour /æ/, ouvrez la bouche nettement plus que pour un « a » français, comme si le médecin regardait votre gorge, et avancez la langue. Le son doit paraître exagéré : s'il vous semble ridicule, il est probablement correct.\n\nPour /ʊ/, arrondissez à peine les lèvres et gardez le son court ; pour /uː/, arrondissez fermement et tenez.\n\nUn exercice fonctionne mieux que tous les autres : les paires minimales. On dit les deux mots l'un après l'autre — ship, sheep, ship, sheep — jusqu'à ce que la différence s'entende à l'oreille comme sous la langue. Dix minutes par jour pendant une semaine suffisent à installer une paire.",
          visuels: [
            {
              type: "etapes",
              titre: "Travailler une paire minimale",
              etapes: [
                { titre: "Écouter", texte: "Les deux mots dans un dictionnaire audio, cinq fois chacun." },
                { titre: "Distinguer", texte: "Se faire dire l'un des deux au hasard, et deviner lequel." },
                { titre: "Produire", texte: "Dire les deux en alternance, en exagérant l'écart." },
                { titre: "Vérifier", texte: "L'exercice de prononciation de l'Atelier : la machine reconnaît, ou non." },
              ],
            },
          ],
        },
        {
          titre: "Ce que la reconnaissance vocale mesure vraiment",
          texte:
            "L'exercice de prononciation de cette application demande à un moteur de reconnaissance de transcrire ce que vous dites, et compare avec la phrase attendue.\n\nCela mesure une chose précise : est-ce qu'un logiciel entraîné sur des voix anglophones reconnaît votre production. C'est un révélateur honnête — dire ship quand on visait sheep se voit immédiatement — mais ce n'est pas un professeur. Il ne dira pas pourquoi, ni comment corriger.\n\nDeux limites méritent d'être connues. La reconnaissance tolère un accent étranger fort tant que les phonèmes sont distincts : on peut donc « réussir » avec une prononciation qu'un anglophone jugerait laborieuse. À l'inverse, elle échoue parfois sur un mot parfaitement dit, à cause du bruit ou du débit.\n\nLa bonne façon de s'en servir est donc statistique : un mot raté une fois ne prouve rien, un mot raté cinq fois de suite désigne un phonème à travailler. C'est le seul verdict qu'il faut prendre au sérieux.",
        },
      ],
    },
    cartes: [
      {
        etranger: "The ship is full of sheep.",
        francais: "Le bateau est plein de moutons.",
        note: "La phrase contient les deux voyelles : /ɪ/ bref dans ship, /iː/ long dans sheep.",
      },
      {
        etranger: "I live here, I don't leave.",
        francais: "J'habite ici, je ne pars pas.",
        note: "Live /lɪv/ contre leave /liːv/. La confusion change complètement la phrase.",
      },
      {
        etranger: "This bed is bad.",
        francais: "Ce lit est mauvais.",
        note: "Bed /e/ et bad /æ/. Le /æ/ demande une bouche nettement plus ouverte.",
      },
      {
        etranger: "One man, ten men.",
        francais: "Un homme, dix hommes.",
        note: "Man /mæn/ et men /men/. Ici, la voyelle porte à elle seule le nombre.",
      },
      {
        etranger: "Please sit on this seat.",
        francais: "Assieds-toi sur ce siège, s'il te plaît.",
        note: "Sit bref, seat long. La paire minimale la plus utile du quotidien.",
      },
      {
        etranger: "The pool is full.",
        francais: "La piscine est pleine.",
        note: "Pool /uː/ long, full /ʊ/ bref. Le français n'a que le premier.",
      },
      {
        etranger: "Don't be a fool.",
        francais: "Ne fais pas l'idiot.",
        note: "Fool avec un /uː/ tenu. Prononcé bref, il devient full.",
      },
      {
        etranger: "I've got a cup of tea.",
        francais: "J'ai une tasse de thé.",
        note: "Cup porte le /ʌ/, son central que le français rend faute de mieux par « eu ».",
      },
      {
        etranger: "He can catch the cat.",
        francais: "Il peut attraper le chat.",
        note: "Trois /æ/ dans une phrase courte : de quoi installer le son.",
      },
      {
        etranger: "Look at this book.",
        francais: "Regarde ce livre.",
        note: "Deux /ʊ/ brefs. Allongés, ils donneraient Luke et boo.",
      },
    ],
  },

  {
    slug: "en-pron-th",
    category: "Prononciation",
    title: "Le TH et ses deux sons",
    statement:
      "Deux lettres, deux sons, et aucun des deux n'existe en français. C'est le trait le plus reconnaissable d'un accent francophone — et l'un des plus faciles à corriger.",
    tip: "Le TH sonore est celui des mots grammaticaux : the, this, that, they, there. Le TH sourd est celui des mots pleins : think, three, thank, north.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Les deux TH",
      sections: [
        {
          titre: "Un geste, deux sons",
          texte:
            "Le TH anglais se produit d'une seule façon : la pointe de la langue vient toucher légèrement le bord des dents du haut, et l'air passe entre les deux. Ce n'est ni un « z », ni un « s », ni un « d », ni un « f » — ce sont les quatre substitutions qu'un francophone tente spontanément.\n\nÀ partir de ce geste unique, deux sons.\n\nLe TH sourd, noté /θ/ : les cordes vocales ne vibrent pas. On le trouve dans think, three, thank, thin, month, north, both, path.\n\nLe TH sonore, noté /ð/ : les cordes vibrent. On le trouve dans the, this, that, these, those, they, there, then, mother, weather, with.\n\nLa répartition n'est pas aléatoire, et une règle empirique couvre l'essentiel : les mots grammaticaux — articles, démonstratifs, pronoms, conjonctions — portent le sonore ; les mots pleins — noms, verbes, adjectifs, nombres — portent le sourd. Ce n'est pas absolu, mais cela règle neuf cas sur dix.",
          visuels: [
            {
              type: "comparaison",
              titre: "Où tombe chaque son",
              colonnes: [
                {
                  titre: "/ð/ sonore — les mots grammaticaux",
                  points: [
                    "the, this, that, these, those",
                    "they, them, there, then, though",
                    "mother, father, brother, weather",
                  ],
                },
                {
                  titre: "/θ/ sourd — les mots pleins",
                  points: [
                    "think, thank, thing, throw",
                    "three, thirty, thousand",
                    "month, north, both, path, health",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les quatre substitutions et ce qu'elles coûtent",
          texte:
            "Chaque substitution produit une confusion, et il vaut la peine de savoir laquelle.\n\nRemplacer /θ/ par « s » transforme think en sink, thing en sing, thick en sick, mouth en mouse. C'est la substitution française la plus courante.\n\nRemplacer /ð/ par « z » transforme they en Zay, breathe en breeze, with en wizz. Elle est moins coûteuse en compréhension, mais elle s'entend immédiatement.\n\nRemplacer /θ/ par « f » — three devient free, thought devient fought — est la substitution de certains accents anglais eux-mêmes, notamment londoniens. Elle passe donc mieux, mais elle marque socialement.\n\nRemplacer /ð/ par « d » — this devient dis, the devient de — est courante chez les locuteurs de plusieurs langues, et parfaitement compréhensible.\n\nLa conclusion pratique est nuancée : aucune de ces substitutions n'empêche vraiment d'être compris, sauf think et sink dans un contexte technique. Le TH est donc moins urgent que les voyelles — mais il est ce qui fait qu'un accent s'entend dès la première phrase.",
          visuels: [
            {
              type: "tableau",
              titre: "La substitution, et le mot qu'elle produit",
              colonnes: ["Le mot visé", "Substitué en", "Ce qu'on entend"],
              lignes: [
                ["think /θ/", "s", "sink — couler"],
                ["thing /θ/", "s", "sing — chanter"],
                ["thick /θ/", "s", "sick — malade"],
                ["mouth /θ/", "s", "mouse — souris"],
                ["three /θ/", "f", "free — libre"],
                ["they /ð/", "z", "aucun mot, mais l'accent s'entend"],
                ["breathe /ð/", "z", "breeze — brise"],
                ["this /ð/", "d", "aucun mot, très reconnaissable"],
              ],
            },
          ],
        },
        {
          titre: "Installer le geste",
          texte:
            "Le TH est l'un des rares sons qu'on peut installer mécaniquement, parce qu'il est visible.\n\nPremière étape : exagérer. Mettez la langue franchement entre les dents, au point de la voir dans un miroir, et soufflez. Le son sort tout seul. Cette position exagérée n'est pas celle des anglophones — chez eux la langue touche à peine — mais elle installe le geste.\n\nDeuxième étape : allonger. Tenez le son trois secondes, comme un sifflement doux : thhhh. Puis ajoutez la voyelle : thhhhink.\n\nTroisième étape : réduire. Rapprochez progressivement la langue jusqu'à ne plus la sortir. Le son doit rester distinct d'un « s ».\n\nQuatrième étape : les groupes difficiles. Les months, the sixth, clothes, strengths cumulent le TH avec d'autres consonnes. Les anglophones eux-mêmes y simplifient : clothes se dit souvent comme close, sixth se réduit. Ne pas s'acharner sur ces cas-là avant que le son simple soit acquis.\n\nEt un repère utile : le mot the change de voyelle selon ce qui suit — /ðə/ devant consonne, /ðiː/ devant voyelle. The book, mais the apple.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I thought they were thirsty.",
        francais: "Je pensais qu'ils avaient soif.",
        note: "Thought et thirsty sont sourds, they est sonore. Les deux TH dans une phrase.",
      },
      {
        etranger: "Thank you for the three books.",
        francais: "Merci pour les trois livres.",
        note: "Thank et three sont sourds. Prononcés en « s » ou « f », ils donnent sank et free.",
      },
      {
        etranger: "They live over there.",
        francais: "Ils habitent là-bas.",
        note: "Deux TH sonores. La langue touche les dents, les cordes vibrent.",
      },
      {
        etranger: "My mother and my brother.",
        francais: "Ma mère et mon frère.",
        note: "Le TH sonore au milieu du mot : les cordes ne s'arrêtent pas.",
      },
      {
        etranger: "The weather is better this month.",
        francais: "Le temps est meilleur ce mois-ci.",
        note: "Weather et this sont sonores, month est sourd. La règle des mots pleins tient.",
      },
      {
        etranger: "Both paths lead north.",
        francais: "Les deux chemins mènent vers le nord.",
        note: "Trois TH sourds à la suite. Paths cumule le TH et le s : les anglophones y simplifient aussi.",
      },
      {
        etranger: "Is this thing yours?",
        francais: "Cette chose est à toi ?",
        note: "This sonore, thing sourd. Prononcé sing, le second change de sens.",
      },
      {
        etranger: "There's nothing to say.",
        francais: "Il n'y a rien à dire.",
        note: "There sonore, nothing sourd. Le mot nothing est un excellent exercice à lui seul.",
      },
      {
        etranger: "The apple, not the book.",
        francais: "La pomme, pas le livre.",
        note: "The change de voyelle selon ce qui suit : /ðiː/ devant apple, /ðə/ devant book.",
      },
      {
        etranger: "Thirty-three thousand.",
        francais: "Trente-trois mille.",
        note: "Trois TH sourds. Les nombres sont le meilleur terrain d'entraînement du son.",
      },
    ],
  },

  {
    slug: "en-pron-terminaisons",
    category: "Prononciation",
    title: "Les terminaisons -ed et -s",
    statement:
      "Deux terminaisons parmi les plus fréquentes de la langue, et chacune se prononce de trois façons. La règle est mécanique, et personne ne l'enseigne.",
    tip: "La consonne qui précède décide : sourde appelle sourd, sonore appelle sonore. C'est le principe de l'assimilation, et il vaut pour les deux terminaisons.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Trois sons pour une seule graphie",
      sections: [
        {
          titre: "Le -ed du prétérit",
          texte:
            "La terminaison -ed s'écrit toujours pareil et se prononce de trois façons. La règle ne souffre aucune exception, et se décide sur le dernier son du verbe — le son, pas la lettre.\n\nSi le verbe finit par un /t/ ou un /d/, -ed se prononce /ɪd/ et ajoute une syllabe : wanted, needed, started, decided. C'est le seul cas où le mot s'allonge.\n\nSi le verbe finit par une consonne sourde — /p, k, f, s, ʃ, tʃ/ —, -ed se prononce /t/ : worked, stopped, watched, finished, laughed. Aucune syllabe ajoutée.\n\nSinon — voyelle ou consonne sonore —, -ed se prononce /d/ : played, lived, called, opened, arrived.\n\nL'erreur du francophone est double : il ajoute une syllabe partout — « work-ed », « play-ed » — parce que la lettre e est écrite, et il prononce /d/ dans tous les cas. Résultat : des verbes qui gagnent une syllabe qu'ils n'ont pas, et un rythme faussé sur toute la phrase.\n\nLe repère mnémotechnique : placez la main sur la gorge. Si le dernier son du verbe fait vibrer, c'est /d/ ; sinon c'est /t/ ; sauf si c'est déjà un /t/ ou un /d/, auquel cas c'est /ɪd/.",
          visuels: [
            {
              type: "tableau",
              titre: "La règle du -ed",
              colonnes: ["Le verbe finit par", "-ed se dit", "Exemples", "Syllabe ajoutée ?"],
              lignes: [
                ["/t/ ou /d/", "/ɪd/", "wanted, needed, started", "oui"],
                ["consonne sourde", "/t/", "worked, stopped, watched", "non"],
                ["consonne sonore", "/d/", "played, called, opened", "non"],
                ["voyelle", "/d/", "played, tried, agreed", "non"],
              ],
              note: "La main sur la gorge tranche : si le dernier son vibre, c'est /d/.",
            },
          ],
        },
        {
          titre: "Le -s du pluriel et de la troisième personne",
          texte:
            "La terminaison -s suit exactement la même logique, avec trois réalisations.\n\nAprès une sifflante — /s, z, ʃ, ʒ, tʃ, dʒ/ —, elle se prononce /ɪz/ et ajoute une syllabe : buses, watches, boxes, changes, judges. Là encore, c'est le seul cas où le mot s'allonge.\n\nAprès une consonne sourde, elle se prononce /s/ : cats, books, stops, laughs.\n\nAprès une consonne sonore ou une voyelle, elle se prononce /z/ : dogs, cars, plays, tables, goes.\n\nLa plupart des -s anglais sont donc des /z/, ce qui surprend un francophone habitué à un s final muet ou sourd. Dire « catss » et « dogss » avec le même son est l'un des marqueurs les plus constants d'un accent français.\n\nDeux irrégularités valent d'être notées. Les mots en -f font souvent -ves : knife donne knives, leaf donne leaves, half donne halves — et la prononciation suit, en /vz/. Et houses est irrégulier : le s du singulier, sourd, devient sonore au pluriel.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même s, trois sons",
              colonnes: [
                {
                  titre: "Après sourde — /s/",
                  points: [
                    "cats, books, stops",
                    "laughs, months, kicks",
                    "Le s reste sourd.",
                  ],
                },
                {
                  titre: "Après sonore — /z/",
                  points: [
                    "dogs, cars, plays",
                    "tables, goes, lives",
                    "C'est le cas le plus fréquent.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Pourquoi cela compte",
          texte:
            "On pourrait croire ces règles cosmétiques. Elles ne le sont pas, pour trois raisons.\n\nLa première est le rythme. L'anglais est une langue accentuelle : ses syllabes accentuées reviennent à intervalles à peu près réguliers, et les autres se compriment. Ajouter une syllabe parasite à chaque verbe au prétérit désorganise ce rythme, et c'est le rythme, plus que les sons isolés, qui rend un discours difficile à suivre.\n\nLa deuxième est la compréhension du prétérit. Un anglophone qui entend worked sans le /t/ final peut comprendre work : le temps de la phrase change. Dans un récit, l'effet s'accumule.\n\nLa troisième est l'écoute. Savoir que -ed se réduit à un /t/ permet de l'entendre. Un apprenant qui attend une syllabe entière ne perçoit rien et croit que l'anglophone « avale » les fins de mots — alors qu'il les prononce exactement comme la règle le prévoit.\n\nC'est le principe général de la prononciation : ce qu'on ne sait pas produire, on ne l'entend pas non plus.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I wanted to help, so I worked late.",
        francais: "Je voulais aider, alors j'ai travaillé tard.",
        note: "Wanted en /ɪd/, une syllabe de plus. Worked en /t/, aucune syllabe ajoutée.",
      },
      {
        etranger: "She played and then she stopped.",
        francais: "Elle a joué, puis elle s'est arrêtée.",
        note: "Played en /d/, stopped en /t/. Le dernier son du verbe décide.",
      },
      {
        etranger: "They decided and started at once.",
        francais: "Ils ont décidé et commencé aussitôt.",
        note: "Les deux finissent par /d/ ou /t/ : les deux -ed se disent /ɪd/.",
      },
      {
        etranger: "He watched and laughed.",
        francais: "Il a regardé et il a ri.",
        note: "Watched en /t/ malgré le ch, laughed en /t/ malgré le gh. C'est le son qui compte, pas la lettre.",
      },
      {
        etranger: "The cats and the dogs.",
        francais: "Les chats et les chiens.",
        note: "Cats en /s/, dogs en /z/. La plupart des -s anglais sont des /z/.",
      },
      {
        etranger: "He watches three buses.",
        francais: "Il regarde trois bus.",
        note: "Watches et buses en /ɪz/ : après une sifflante, la terminaison ajoute une syllabe.",
      },
      {
        etranger: "She opened the boxes.",
        francais: "Elle a ouvert les boîtes.",
        note: "Opened en /d/, boxes en /ɪz/. Les deux règles dans une phrase.",
      },
      {
        etranger: "Two knives and four leaves.",
        francais: "Deux couteaux et quatre feuilles.",
        note: "Les mots en -f font -ves, et la prononciation suit : /vz/.",
      },
      {
        etranger: "He finished, then he called.",
        francais: "Il a fini, puis il a appelé.",
        note: "Finished en /t/, called en /d/. Aucun des deux n'ajoute de syllabe.",
      },
      {
        etranger: "It costs less than it looks.",
        francais: "Ça coûte moins cher que ça n'en a l'air.",
        note: "Costs et looks en /s/. Trois consonnes de suite dans costs : les anglophones y simplifient aussi.",
      },
    ],
  },

  {
    slug: "en-pron-accent-mot",
    category: "Prononciation",
    title: "L'accent de mot, qui change le sens",
    statement:
      "En anglais, l'accent tombe sur une syllabe et pas sur une autre — et ce choix distingue un nom d'un verbe, un pays d'un adjectif, une erreur d'une phrase compréhensible.",
    tip: "Une trentaine de mots changent de sens selon l'accent : REcord le disque, reCORD enregistrer. Le nom prend l'accent devant, le verbe derrière.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Où tombe l'accent",
      sections: [
        {
          titre: "Une langue à accent libre, et ce que ça implique",
          texte:
            "Le français a un accent fixe : il tombe sur la dernière syllabe du groupe, toujours. On n'y pense donc jamais.\n\nL'anglais a un accent libre : il peut tomber n'importe où dans le mot, et sa place fait partie du mot au même titre que ses lettres. Se tromper d'accent ne produit pas un mot mal dit avec un accent étranger — cela produit un mot que l'auditeur ne reconnaît pas.\n\nC'est le point le plus difficile à admettre pour un francophone : un mot dont tous les sons sont corrects mais dont l'accent est mal placé est souvent moins compris qu'un mot aux sons approximatifs mais correctement accentué.\n\nLa syllabe accentuée est plus longue, plus haute et plus forte. Les autres se réduisent, souvent jusqu'au schwa /ə/ — ce son neutre, le plus fréquent de l'anglais, qu'aucune lettre ne représente en propre.\n\nD'où une conséquence pratique : apprendre un mot anglais, c'est apprendre sa place d'accent en même temps que son sens. Les dictionnaires la notent par une apostrophe haute devant la syllabe.",
          visuels: [
            {
              type: "tableau",
              titre: "Le nom devant, le verbe derrière",
              colonnes: ["Écrit", "Nom", "Verbe", "Sens"],
              lignes: [
                ["record", "REcord", "reCORD", "un disque / enregistrer"],
                ["present", "PREsent", "preSENT", "un cadeau / présenter"],
                ["object", "OBject", "obJECT", "un objet / objecter"],
                ["contract", "CONtract", "conTRACT", "un contrat / se contracter"],
                ["increase", "INcrease", "inCREASE", "une hausse / augmenter"],
                ["export", "EXport", "exPORT", "une exportation / exporter"],
                ["permit", "PERmit", "perMIT", "un permis / permettre"],
                ["conflict", "CONflict", "conFLICT", "un conflit / s'opposer"],
              ],
              note: "La règle couvre une trentaine de paires, et elle est régulière : nom devant, verbe derrière.",
            },
          ],
        },
        {
          titre: "Les régularités qui aident",
          texte:
            "L'accent anglais n'est pas prévisible en général, mais plusieurs terminaisons le fixent, et les connaître règle des centaines de mots.\n\nLes suffixes qui attirent l'accent sur la syllabe qui les précède : -ic, -ion, -ity, -ial, -ious, -ify, -ical. Photograph mais phoTOgraphy et photoGRAPHic ; ecoNOmic ; posiTION ; posSIbility.\n\nLes suffixes qui portent eux-mêmes l'accent : -ee, -eer, -ese, -ette. EmployEE, engiNEER, JapanESE, cigaRETTE.\n\nLes suffixes qui ne changent rien : -ing, -ed, -ly, -ness, -ful, -less, -er. Le mot garde l'accent de sa base.\n\nEt une règle pour les mots composés : l'accent tombe sur le premier élément. A GREENhouse est une serre ; a green HOUSE est une maison verte. Un BLACKbird est un merle ; a black BIRD est un oiseau noir. Cette opposition est vivante et sert tous les jours.\n\nEnfin, un piège très fréquent : les mots empruntés au français gardent souvent leur graphie et changent d'accent. HOtel se dit hoTEL, GArage se dit GAragé au Royaume-Uni, BALlet se dit BALlet — chacun a sa règle, et il faut les vérifier un par un.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le composé et le groupe",
              colonnes: [
                {
                  titre: "Composé — accent devant",
                  points: [
                    "a GREENhouse — une serre.",
                    "a BLACKbird — un merle.",
                    "a DARKroom — une chambre noire.",
                  ],
                },
                {
                  titre: "Groupe libre — accent sur le nom",
                  points: [
                    "a green HOUSE — une maison verte.",
                    "a black BIRD — un oiseau noir.",
                    "a dark ROOM — une pièce sombre.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Travailler l'accent",
          texte:
            "Trois habitudes suffisent, et aucune ne demande de matériel.\n\nLa première : noter l'accent en même temps que le mot. Un carnet de vocabulaire sans accent noté est un carnet à moitié faux. Écrivez la syllabe accentuée en capitales — comFORtable, VEgetable, TEMperature — c'est laid et c'est efficace.\n\nLa deuxième : compter les syllabes. Les francophones en ajoutent, parce qu'ils prononcent les voyelles écrites. Comfortable en a trois à l'oral et non quatre ; vegetable trois et non quatre ; chocolate deux et non trois ; interesting trois et non quatre. Compter sur les doigts en disant le mot corrige plus vite que n'importe quelle explication.\n\nLa troisième : frapper dans les mains sur la syllabe forte. Le geste ancre l'accent bien mieux que la lecture, parce qu'il engage le rythme.\n\nUn dernier conseil : quand un mot résiste, cherchez-le dans un dictionnaire audio et répétez-le dix fois d'affilée, en exagérant l'écart entre la syllabe forte et les autres. Un mot correctement accentué s'entend de loin ; un mot aux syllabes égales est du français déguisé.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I want to record this record.",
        francais: "Je veux enregistrer ce disque.",
        note: "Le premier record est un verbe, accent derrière ; le second un nom, accent devant.",
      },
      {
        etranger: "They present a present.",
        francais: "Ils offrent un cadeau.",
        note: "PreSENT le verbe, PREsent le nom. La règle vaut pour une trentaine de paires.",
      },
      {
        etranger: "Exports increase every year.",
        francais: "Les exportations augmentent chaque année.",
        note: "EXports nom, inCREASE verbe. Les deux accents dans une phrase.",
      },
      {
        etranger: "It's a greenhouse, not a green house.",
        francais: "C'est une serre, pas une maison verte.",
        note: "Le composé porte l'accent devant, le groupe libre sur le nom.",
      },
      {
        etranger: "I saw a blackbird, not a black bird.",
        francais: "J'ai vu un merle, pas un oiseau noir.",
        note: "Même opposition. Elle est vivante et sert tous les jours.",
      },
      {
        etranger: "That's very comfortable.",
        francais: "C'est très confortable.",
        note: "Comfortable a trois syllabes à l'oral, pas quatre : KUMF-ta-bl.",
      },
      {
        etranger: "The photograph is interesting.",
        francais: "La photographie est intéressante.",
        note: "PHOtograph, mais phoTOgraphy : le suffixe déplace l'accent.",
      },
      {
        etranger: "We booked a hotel room.",
        francais: "Nous avons réservé une chambre d'hôtel.",
        note: "HoTEL, accent derrière — contrairement au français, qui accentue la fin du groupe.",
      },
      {
        etranger: "She works for a Japanese company.",
        francais: "Elle travaille pour une entreprise japonaise.",
        note: "JapanESE : le suffixe -ese porte lui-même l'accent.",
      },
      {
        etranger: "There is a conflict of interest.",
        francais: "Il y a un conflit d'intérêts.",
        note: "CONflict, nom, accent devant. Le verbe conFLICT s'accentue derrière.",
      },
    ],
  },

  {
    slug: "en-pron-formes-faibles",
    category: "Prononciation",
    title: "Le schwa, les formes faibles et le rythme",
    statement:
      "L'anglais réduit tout ce qui n'est pas accentué. C'est ce qui donne son rythme à la langue — et ce qui rend l'anglais parlé si difficile à découper pour un francophone.",
    tip: "Le schwa /ə/ est le son le plus fréquent de l'anglais, et aucune lettre ne lui appartient. Il apparaît partout où l'accent ne tombe pas.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Ce qui se réduit, et pourquoi",
      sections: [
        {
          titre: "Une langue à rythme accentuel",
          texte:
            "Les langues se répartissent grossièrement en deux familles rythmiques.\n\nLe français est à rythme syllabique : ses syllabes durent à peu près le même temps, et le débit se mesure en syllabes par seconde. C'est ce qui donne son égalité au français parlé.\n\nL'anglais est à rythme accentuel : ce sont les syllabes accentuées qui reviennent à intervalles réguliers, et tout ce qui se trouve entre elles se comprime pour tenir dans l'intervalle. Une phrase de dix syllabes dont trois sont accentuées prend à peu près le même temps qu'une phrase de six syllabes dont trois sont accentuées.\n\nLa conséquence est massive. Les mots pleins — noms, verbes, adjectifs, adverbes — portent l'accent et gardent leur forme entière. Les mots grammaticaux — articles, prépositions, auxiliaires, pronoms, conjonctions — se réduisent, souvent jusqu'à devenir méconnaissables.\n\nC'est pourquoi un francophone qui comprend chaque mot lu ne comprend rien à l'oral : il cherche des mots entiers là où il n'y a que des fragments, et il découpe la chaîne au mauvais endroit.",
          visuels: [
            {
              type: "tableau",
              titre: "La forme forte, la forme faible",
              colonnes: ["Le mot", "Forme forte", "Forme faible", "Dans une phrase"],
              lignes: [
                ["and", "/ænd/", "/ən/ ou /n/", "fish 'n' chips"],
                ["to", "/tuː/", "/tə/", "I want tə go"],
                ["of", "/ɒv/", "/əv/ ou /ə/", "a cup ə tea"],
                ["for", "/fɔː/", "/fə/", "It's fə you"],
                ["can", "/kæn/", "/kən/", "I kən swim"],
                ["are", "/ɑː/", "/ə/", "They ə here"],
                ["you", "/juː/", "/jə/", "See yə later"],
                ["have", "/hæv/", "/əv/", "I could əv gone"],
              ],
              note: "La forme forte revient quand le mot est accentué : « I CAN swim » pour insister, ou en fin de phrase.",
            },
          ],
        },
        {
          titre: "Le schwa, son le plus fréquent",
          texte:
            "Le schwa, noté /ə/, est une voyelle centrale, courte et neutre — un son qu'on produit en relâchant complètement la bouche. C'est le son le plus fréquent de l'anglais, et il n'a aucune lettre attitrée : il peut s'écrire a, e, i, o, u ou n'importe quelle combinaison.\n\nDans about, la première syllabe est un schwa écrit a. Dans problem, la seconde est un schwa écrit e. Dans pencil, un schwa écrit i. Dans confess, un schwa écrit o. Dans support, un schwa écrit u.\n\nUn francophone lit ces lettres et les prononce distinctement : PRO-BLÈME, PEN-CIL. Cela produit des mots à syllabes égales, c'est-à-dire du français avec des mots anglais.\n\nLe geste correct est presque paresseux : ne rien faire. Relâcher la mâchoire, ne pas arrondir, ne pas étirer, émettre le son le plus court possible.\n\nUn exercice fonctionne bien : prendre un mot de trois syllabes et le dire en marmonnant tout sauf la syllabe accentuée. Le résultat sonne souvent plus juste que la version soignée.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qu'un francophone dit, ce qu'un anglophone dit",
              colonnes: [
                {
                  titre: "Syllabes égales — du français",
                  points: [
                    "PRO-BLÈME · PEN-SIL · A-BAOUT",
                    "I OUANT TOU GO",
                    "A CUP OF TI",
                  ],
                },
                {
                  titre: "Réduit — de l'anglais",
                  points: [
                    "PROB-ləm · PEN-səl · ə-BOUT",
                    "I WANT tə go",
                    "ə CUP ə TEA",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les enchaînements",
          texte:
            "Trois phénomènes soudent les mots entre eux, et ce sont eux qui rendent l'anglais parlé si dense.\n\nLa liaison consonne-voyelle : une consonne finale s'attache à la voyelle suivante. Pick it up se dit pi-ki-tup. An apple se dit a-napple. C'est exactement la liaison française, et c'est le phénomène le plus facile à reproduire.\n\nL'intrusion : une consonne apparaît entre deux voyelles. Go on donne go-w-on ; I am donne I-y-am ; law and order donne law-r-and order en anglais britannique — ce r intrusif choque certains puristes et se dit tout de même partout.\n\nL'assimilation : un son se transforme sous l'influence du suivant. Ten pounds tend vers tem pounds ; good boy vers gub boy ; don't you vers dontcha ; would you vers wouldja.\n\nCes formes ne sont pas du relâchement ni de l'argot : elles sont la prononciation normale, y compris chez un présentateur de journal télévisé. Les ignorer, c'est se condamner à ne comprendre que la lecture à voix haute.\n\nLe conseil pratique : écouter en lisant la transcription. C'est le seul exercice qui montre l'écart entre ce qui est écrit et ce qui est dit — et cet écart est bien plus grand qu'on ne l'imagine.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I want to go to the shop.",
        francais: "Je veux aller au magasin.",
        note: "Les deux to se réduisent en /tə/. Prononcés /tuː/, ils cassent le rythme.",
      },
      {
        etranger: "Would you like a cup of tea?",
        francais: "Voulez-vous une tasse de thé ?",
        note: "Of se réduit à /ə/, would you s'assimile en wouldja. C'est la forme normale.",
      },
      {
        etranger: "They are waiting for us.",
        francais: "Ils nous attendent.",
        note: "Are en /ə/, for en /fə/. Deux formes faibles dans une phrase courte.",
      },
      {
        etranger: "Pick it up and put it down.",
        francais: "Ramasse-le et repose-le.",
        note: "Enchaînement consonne-voyelle : pi-ki-tup, pu-ti-town.",
      },
      {
        etranger: "I can swim, but I can't dive.",
        francais: "Je sais nager, mais je ne sais pas plonger.",
        note: "Can se réduit en /kən/, can't garde sa voyelle pleine. C'est ce qui les distingue à l'oral.",
      },
      {
        etranger: "It's a problem for the whole team.",
        francais: "C'est un problème pour toute l'équipe.",
        note: "Problem a un schwa en seconde syllabe : PROB-ləm, pas pro-BLÈME.",
      },
      {
        etranger: "Fish and chips for lunch.",
        francais: "Poisson-frites pour le déjeuner.",
        note: "And se réduit jusqu'à /n/. L'expression s'écrit couramment fish 'n' chips.",
      },
      {
        etranger: "I should have called you.",
        francais: "J'aurais dû t'appeler.",
        note: "Have se réduit à /əv/, d'où la faute d'orthographe « should of » chez les anglophones.",
      },
      {
        etranger: "See you later, take care.",
        francais: "À plus tard, prends soin de toi.",
        note: "You en /jə/. Se-yə-later est la forme courante, pas une négligence.",
      },
      {
        etranger: "There are ten pounds left.",
        francais: "Il reste dix livres.",
        note: "Ten pounds tend vers tem pounds : le n s'assimile au p qui suit.",
      },
    ],
  },

  {
    slug: "en-pron-muettes",
    category: "Prononciation",
    title: "Les lettres muettes et l'orthographe trompeuse",
    statement:
      "Knight, island, subtle, colonel. L'orthographe anglaise garde des lettres que personne ne prononce depuis cinq siècles — et quelques mots où elle ment franchement.",
    tip: "Une lettre muette anglaise est presque toujours un fossile : elle se prononçait autrefois, ou elle a été ajoutée par des érudits pour faire savant.",
    difficulty: 2,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Ce qui ne se prononce pas",
      sections: [
        {
          titre: "Les familles de lettres muettes",
          texte:
            "Les lettres muettes anglaises se rangent en familles, et connaître la famille suffit à traiter des dizaines de mots.\n\nLe K devant N ne se prononce plus : know, knee, knife, knock, knight, knot. Il se prononçait au Moyen Âge, et l'orthographe a figé l'ancienne forme.\n\nLe W devant R est muet : write, wrong, wrist, wrap. Et dans quelques mots isolés : two, sword, answer.\n\nLe B après M est muet : climb, lamb, thumb, comb, tomb, bomb. De même le B avant T dans debt, doubt, subtle — ces trois-là n'ont même jamais eu de B prononcé : il a été ajouté au XVIᵉ siècle par des lettrés soucieux de rappeler l'origine latine.\n\nLe L devant certaines consonnes : half, calm, walk, talk, should, could, would, salmon.\n\nLe T dans castle, listen, whistle, often — ce dernier admet aujourd'hui les deux prononciations.\n\nLe H initial dans hour, honest, honour, heir. Et le GH, qui ne se prononce plus du tout dans night, light, though, through — ou se prononce /f/ dans laugh, enough, cough, tough.",
          visuels: [
            {
              type: "tableau",
              titre: "Les familles",
              colonnes: ["La lettre", "Le contexte", "Exemples"],
              lignes: [
                ["K", "devant N", "know, knee, knife, knight"],
                ["W", "devant R", "write, wrong, wrist"],
                ["B", "après M", "climb, lamb, thumb, comb"],
                ["B", "avant T", "debt, doubt, subtle"],
                ["L", "devant certaines consonnes", "half, calm, walk, should"],
                ["T", "entre S et L", "castle, listen, whistle"],
                ["H", "à l'initiale de certains mots", "hour, honest, heir"],
                ["GH", "après une voyelle", "night, though, through"],
              ],
              note: "Le GH se prononce /f/ dans une poignée de mots : laugh, enough, cough, tough, rough.",
            },
          ],
        },
        {
          titre: "Les mots qui mentent franchement",
          texte:
            "Au-delà des familles régulières, une trentaine de mots courants ont une prononciation que leur graphie ne laisse pas deviner. Ce sont ceux qu'il faut apprendre un par un.\n\nColonel se dit comme kernel — le mot a hérité de la graphie italienne et de la prononciation française ancienne, qui avait un r.\n\nWednesday a perdu sa première syllabe : WENZ-day. Le mot vient de « jour de Woden ».\n\nBusiness a deux syllabes : BIZ-ness, et non trois. Vegetable en a trois : VEJ-tə-bl. Comfortable en a trois : KUMF-tə-bl. Chocolate en a deux : CHOK-lət.\n\nRecipe a trois syllabes et un e final prononcé : RES-i-pee. Receipt, lui, a un p muet : ri-SEET.\n\nSalmon, almond et palm perdent leur L. Iron se dit AI-ərn, avec le r déplacé. Choir se dit KWY-er.\n\nEt les toponymes britanniques sont un chapitre à eux seuls : Leicester se dit LES-ter, Worcester WUS-ter, Greenwich GREN-ich, Edinburgh ED-in-bruh. La règle générale y est la compression : plus le nom est ancien, plus il s'est raccourci.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le nombre de syllabes",
              colonnes: [
                {
                  titre: "Ce qu'on lit",
                  points: [
                    "com-for-ta-ble — quatre",
                    "ve-ge-ta-ble — quatre",
                    "cho-co-late — trois",
                    "bu-si-ness — trois",
                  ],
                },
                {
                  titre: "Ce qu'on dit",
                  points: [
                    "KUMF-tə-bl — trois",
                    "VEJ-tə-bl — trois",
                    "CHOK-lət — deux",
                    "BIZ-nəs — deux",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Pourquoi l'orthographe anglaise est ainsi",
          texte:
            "Trois causes expliquent l'écart, et les connaître rend l'irrégularité moins arbitraire.\n\nLa première est le grand changement vocalique, entre le XVᵉ et le XVIIᵉ siècle : toutes les voyelles longues se sont déplacées, alors que l'orthographe venait d'être fixée par l'imprimerie. Le mot name se prononçait « nah-me » ; l'écriture est restée, le son a bougé.\n\nLa deuxième est l'étymologie savante. Au XVIᵉ siècle, des lettrés ont ajouté des lettres pour rappeler l'origine latine des mots : le b de debt et doubt, le c de scissors, le p de receipt. Aucune n'a jamais été prononcée en anglais.\n\nLa troisième est l'emprunt massif. L'anglais a pris au vieux norrois, au normand, au latin, au grec, au français moderne — et chaque strate a gardé ses habitudes graphiques. Le même son /iː/ s'écrit ee, ea, ie, ei, e, i selon l'origine du mot.\n\nLa conclusion pratique est simple, et elle vaut pour tout l'apprentissage : ne jamais déduire la prononciation d'un mot anglais de son orthographe. Il faut l'entendre. Un dictionnaire audio est, pour l'anglais plus que pour toute autre langue, un outil de première nécessité.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I know the knight's name.",
        francais: "Je connais le nom du chevalier.",
        note: "Le K de know et knight est muet, comme dans knee, knife, knock.",
      },
      {
        etranger: "Write it on your wrist.",
        francais: "Écris-le sur ton poignet.",
        note: "Le W devant R est muet : write, wrong, wrist, wrap.",
      },
      {
        etranger: "The lamb climbed the hill.",
        francais: "L'agneau a gravi la colline.",
        note: "Le B après M est muet : lamb, climb, thumb, comb.",
      },
      {
        etranger: "I doubt he paid the debt.",
        francais: "Je doute qu'il ait payé la dette.",
        note: "Ces deux B n'ont jamais été prononcés : ajoutés au XVIᵉ siècle pour rappeler le latin.",
      },
      {
        etranger: "Let's walk and talk for half an hour.",
        francais: "Marchons et parlons une demi-heure.",
        note: "Trois L muets, et le H de hour l'est aussi.",
      },
      {
        etranger: "Listen to the castle guide.",
        francais: "Écoute le guide du château.",
        note: "Le T entre S et L est muet : listen, castle, whistle.",
      },
      {
        etranger: "The vegetable soup was excellent.",
        francais: "La soupe de légumes était excellente.",
        note: "Vegetable a trois syllabes à l'oral : VEJ-tə-bl. Le francophone en met quatre.",
      },
      {
        etranger: "She works in the business district.",
        francais: "Elle travaille dans le quartier des affaires.",
        note: "Business a deux syllabes : BIZ-nəs, pas trois.",
      },
      {
        etranger: "We meet on Wednesday.",
        francais: "Nous nous voyons mercredi.",
        note: "Wednesday a perdu sa première syllabe : WENZ-day.",
      },
      {
        etranger: "Keep the receipt for the recipe book.",
        francais: "Garde le ticket du livre de recettes.",
        note: "Receipt a un p muet ; recipe a trois syllabes et un e final prononcé.",
      },
    ],
  },
];
