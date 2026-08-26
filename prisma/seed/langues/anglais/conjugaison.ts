/**
 * Anglais — la conjugaison, en cours suivis.
 *
 * Chaque série porte un vrai chapitre, lisible avant de s'exercer : un tableau
 * de formes, des exemples, et les fautes que fait un francophone. Les cartes
 * qui suivent mettent le chapitre en pratique.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_CONJUGAISON: LotCartes[] = [
  {
    slug: "en-conj-present",
    category: "Conjugaison",
    title: "Le présent : simple ou continu",
    statement:
      "Deux présents là où le français n'en a qu'un. Le simple dit ce qui est vrai en général ; le continu dit ce qui se passe maintenant.",
    tip: "« Je travaille ici » se dit I work here si c'est ton métier, I'm working here si c'est ce que tu fais à cet instant.",
    difficulty: 2,
    niveau: "A1",
    oral: true,
    parle: true,
    cours: {
      titre: "Le présent simple et le présent continu",
      sections: [
        {
          titre: "Deux présents, deux emplois",
          texte:
            "Le français dit « je mange » aussi bien pour une habitude que pour l'instant présent. L'anglais sépare les deux, et cette séparation est obligatoire : se tromper ne fait pas seulement une faute de style, cela change le sens.\n\nLe présent simple — I eat — dit ce qui est vrai en général : une habitude, un fait permanent, une vérité. Il répond à la question « en général, quoi ? ». On le reconnaît aux adverbes qui l'accompagnent : always, usually, often, sometimes, never, every day.\n\nLe présent continu — I am eating — dit ce qui est en train de se passer, maintenant ou dans une période qui n'est pas finie. Il répond à « là, tout de suite, quoi ? ». Ses adverbes sont now, at the moment, today, this week.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le même verbe, deux sens",
              colonnes: [
                {
                  titre: "Présent simple",
                  points: [
                    "I work in Nantes. — c'est là que je travaille, en général.",
                    "She drinks coffee. — elle en boit, c'est son habitude.",
                    "The train leaves at eight. — horaire, fait permanent.",
                    "Adverbes : always, usually, often, never, every day.",
                  ],
                },
                {
                  titre: "Présent continu",
                  points: [
                    "I'm working in Nantes. — en ce moment, provisoirement.",
                    "She's drinking coffee. — elle en boit là, maintenant.",
                    "The train is leaving. — il démarre à l'instant.",
                    "Adverbes : now, at the moment, today, this week.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les formes, et le -s qui piège tout le monde",
          texte:
            "Le présent simple est presque invariable : c'est la troisième personne du singulier qui fait exception, avec son -s. He works, she eats, it costs. Cette seule lettre est la faute la plus fréquente chez les francophones, parce que le français ne l'entend pas.\n\nÀ la forme négative et interrogative, l'auxiliaire do porte la marque, et le verbe redevient nu : he doesn't work, does he work? Écrire « does he works » revient à marquer deux fois la même chose.\n\nLe présent continu, lui, se construit toujours pareil : be conjugué, puis le verbe en -ing. I am, you are, he is — working.",
          visuels: [
            {
              type: "tableau",
              titre: "Les deux présents, à toutes les personnes",
              colonnes: ["Personne", "Simple", "Continu"],
              lignes: [
                ["I", "I work", "I am working"],
                ["you", "you work", "you are working"],
                ["he / she / it", "he works", "he is working"],
                ["we", "we work", "we are working"],
                ["they", "they work", "they are working"],
                ["négation", "he doesn't work", "he isn't working"],
                ["question", "does he work?", "is he working?"],
              ],
              note: "Le -s de la troisième personne disparaît dès qu'un auxiliaire entre en jeu.",
            },
          ],
        },
        {
          titre: "Ce que le continu ne dit jamais",
          texte:
            "Le continu dit ce qui se déroule ou ce qui est passager ; le présent simple dit ce qui est vrai en général, et ce qui est réglé — horaires, habitudes, vérités.\n\nUne famille entière de verbes échappe donc au continu : ceux qui décrivent un état plutôt qu'une action. On dit I know the answer, jamais « I am knowing ». Ils sont assez nombreux, et quelques-uns changent de sens quand on les met au continu : la série « Les verbes d'état, qui refusent le -ing » leur est consacrée tout entière.",
        },
      ],
    },
    cartes: [
      {
        etranger: "I work in Nantes.",
        francais: "Je travaille à Nantes.",
        note: "Présent simple : c'est là que tu travailles, en général.",
      },
      {
        etranger: "I'm working from home today.",
        francais: "Je travaille de chez moi aujourd'hui.",
        note: "Présent continu : today n'est pas fini, et la situation est provisoire.",
      },
      {
        etranger: "She works at the hospital.",
        francais: "Elle travaille à l'hôpital.",
        note: "Le -s de la troisième personne. C'est la faute la plus fréquente des francophones.",
      },
      {
        etranger: "He doesn't understand.",
        francais: "Il ne comprend pas.",
        note: "Après doesn't, le verbe reste nu : jamais « doesn't understands ».",
      },
      {
        etranger: "Do you speak Spanish?",
        francais: "Tu parles espagnol ?",
        aussi: ["Vous parlez espagnol ?"],
        note: "L'auxiliaire do ouvre la question ; le verbe ne change pas.",
      },
      {
        etranger: "What are you doing?",
        francais: "Qu'est-ce que tu fais ?",
        note: "Ce qui se passe à l'instant : continu. « What do you do? » demande ton métier.",
      },
      {
        etranger: "She's staying with friends this week.",
        francais: "Elle loge chez des amis cette semaine.",
        note: "Une situation passagère prend le continu, même si rien ne se passe à l'instant.",
      },
      {
        etranger: "Water boils at a hundred degrees.",
        francais: "L'eau bout à cent degrés.",
        note: "Une vérité générale reste au présent simple.",
      },
      {
        etranger: "The shop opens at nine.",
        francais: "Le magasin ouvre à neuf heures.",
        note: "Un horaire est un fait permanent : présent simple.",
      },
      {
        etranger: "It's getting late.",
        francais: "Il se fait tard.",
        note: "Un changement en cours : continu.",
      },
    ],
  },

  {
    slug: "en-conj-passe",
    category: "Conjugaison",
    title: "Les trois passés",
    statement:
      "Prétérit, present perfect, past perfect. Le français en a d'autres, qui ne se superposent pas : c'est la source d'erreur numéro un après le -s de la troisième personne.",
    tip: "Trois passés, trois distances : le prétérit ferme, le present perfect relie à maintenant, le past perfect recule d'un cran.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Prétérit, present perfect, past perfect",
      sections: [
        {
          titre: "Le prétérit : le passé fermé",
          texte:
            "Le prétérit raconte ce qui s'est passé à un moment précis, et fini. Dès qu'une phrase contient yesterday, last week, in 2019, two hours ago, ou dès qu'on demande when, le prétérit est obligatoire.\n\nSa forme est simple pour les verbes réguliers : le verbe plus -ed, à toutes les personnes sans exception. I worked, she worked, they worked. Les irréguliers ont leur propre forme, qu'il faut connaître : go donne went, take donne took, think donne thought.\n\nÀ la négation et à la question, c'est did qui porte le passé, et le verbe redevient nu : she didn't go, did she go? Écrire « didn't went » est la faute classique.",
          visuels: [
            {
              type: "frise",
              titre: "Quel passé pour quel moment",
              evenements: [
                {
                  date: "avant",
                  label: "Past perfect — had done",
                  texte: "Une action antérieure à une autre action passée. When I arrived, they had already left.",
                },
                {
                  date: "fini",
                  label: "Prétérit — did",
                  texte: "Un moment précis et clos. I saw him yesterday.",
                },
                {
                  date: "encore",
                  label: "Present perfect — have done",
                  texte: "Relié au présent : bilan, expérience, période non close. I've seen him twice this week.",
                },
              ],
            },
          ],
        },
        {
          titre: "Le present perfect : le passé qui compte encore",
          texte:
            "Le present perfect — have ou has plus le participe passé — ne raconte pas quand : il dresse un bilan valable maintenant. C'est pour cela qu'il est incompatible avec une date.\n\nTrois emplois couvrent presque tout. Le bilan : I've finished, donc c'est fait, on peut passer à la suite. L'expérience : Have you ever been to London? peu importe quand. La période non close : this week, today, this year — tant qu'elle dure, on est au present perfect.\n\nDeux mots à retenir : since introduit un point de départ — since 2019, since Monday — et for une durée — for three years. Le français dit « depuis » pour les deux, l'anglais non.",
          visuels: [
            {
              type: "tableau",
              titre: "La même idée, deux temps",
              colonnes: ["Français", "Prétérit", "Present perfect"],
              lignes: [
                ["Je l'ai vu hier.", "I saw him yesterday.", "— impossible avec yesterday"],
                ["J'ai lu ce livre trois fois.", "—", "I've read this book three times."],
                ["Le colis est arrivé ?", "—", "Has the parcel arrived?"],
                ["Il est arrivé quand ?", "When did it arrive?", "— impossible avec when"],
                ["Il travaille ici depuis mars.", "—", "He has worked here since March."],
                ["Il y a travaillé six mois.", "He worked there for six months.", "— il n'y travaille plus"],
              ],
            },
          ],
        },
        {
          titre: "Le past perfect : le passé du passé",
          texte:
            "Quand un récit au passé doit remonter encore plus loin, l'anglais emploie had plus le participe passé. C'est l'équivalent du plus-que-parfait français, et il s'emploie de la même façon.\n\nWhen I arrived, they had already left. Deux moments : mon arrivée au prétérit, leur départ, antérieur, au past perfect. L'ordre des mots ne dit pas l'ordre des faits — c'est le temps qui le dit.\n\nOn le rencontre surtout dans le récit et dans le discours rapporté : He said he had finished, alors qu'il avait dit I have finished.",
        },
      ],
    },
    cartes: [
      { etranger: "I saw him yesterday.", francais: "Je l'ai vu hier.", note: "Yesterday ferme le passé : prétérit obligatoire." },
      { etranger: "I've finished.", francais: "J'ai fini.", note: "Un bilan valable maintenant : present perfect." },
      { etranger: "When did you arrive?", francais: "Tu es arrivé quand ?", note: "Dès qu'on demande quand, c'est le prétérit." },
      { etranger: "She had already gone when I called.", francais: "Elle était déjà partie quand j'ai appelé.", note: "Past perfect pour ce qui précède, prétérit pour le repère : l'ordre des deux actions est dans les temps." },
      { etranger: "Have you ever tried it?", francais: "Tu as déjà essayé ?", note: "Une expérience, sans date : present perfect." },
      { etranger: "They had already left.", francais: "Ils étaient déjà partis.", note: "Past perfect : antérieur à un autre passé." },
      { etranger: "I've known her for ten years.", francais: "Je la connais depuis dix ans.", note: "For introduit une durée ; since, un point de départ." },
      { etranger: "He worked there in 2019.", francais: "Il y a travaillé en 2019.", note: "Une date : prétérit." },
      { etranger: "We haven't decided yet.", francais: "On n'a pas encore décidé.", note: "Avec un verbe, yet appelle le present perfect en britannique : we haven't decided yet. Avec be ou un impératif, il s'emploie librement : it isn't ready yet." },
      { etranger: "It happened two hours ago.", francais: "C'est arrivé il y a deux heures.", note: "Ago impose le prétérit, sans exception." },
    ],
  },

  {
    slug: "en-conj-futur",
    category: "Conjugaison",
    title: "Dire le futur",
    statement:
      "L'anglais n'a pas de temps futur : il a cinq façons de parler de l'avenir, et le choix dit ce qu'on pense de cet avenir.",
    tip: "will pour ce qu'on décide à l'instant, going to pour ce qui est prévu, le continu pour ce qui est calé dans l'agenda.",
    difficulty: 3,
    niveau: "B1",
    oral: true,
    parle: true,
    cours: {
      titre: "Les cinq futurs de l'anglais",
      sections: [
        {
          titre: "Il n'y a pas de temps futur",
          texte:
            "Le français conjugue : je ferai. L'anglais n'a rien de tel — il emploie des auxiliaires et des présents, et chacun porte une nuance différente. Traduire « je ferai » par I will do dans tous les cas est compréhensible, mais sonne systématiquement faux.\n\nCe qui décide, ce n'est pas le moment de l'action : c'est la façon dont on l'envisage. Une décision prise à l'instant, une intention déjà formée, un rendez-vous inscrit à l'agenda, un horaire officiel — quatre situations, quatre tournures.",
          visuels: [
            {
              type: "etapes",
              titre: "Du plus spontané au plus figé",
              etapes: [
                {
                  titre: "will — la décision à l'instant",
                  texte: "Elle se prend en parlant. « The phone's ringing. » « I'll get it. » Sert aussi aux promesses et aux prédictions : It will rain tomorrow.",
                },
                {
                  titre: "going to — l'intention déjà là",
                  texte: "La décision est antérieure à la phrase. I'm going to look for a new job. Sert aussi quand les indices sont visibles : Look at those clouds — it's going to rain.",
                },
                {
                  titre: "présent continu — le rendez-vous pris",
                  texte: "C'est dans l'agenda, avec quelqu'un d'autre. I'm meeting Sarah at six. Le plus courant à l'oral pour les projets.",
                },
                {
                  titre: "présent simple — l'horaire officiel",
                  texte: "Trains, avions, programmes. The train leaves at 8:15. Impersonnel : ce n'est pas toi qui décides.",
                },
                {
                  titre: "be about to — l'imminence",
                  texte: "Dans la seconde qui vient. I'm about to leave.",
                },
              ],
            },
          ],
        },
        {
          titre: "Le piège des subordonnées de temps",
          texte:
            "Après when, as soon as, until, before, after, once, l'anglais met le PRÉSENT là où le français met le futur. C'est une règle sans exception, et c'est une faute que les francophones font pendant des années.\n\nOn dit I'll call you when I arrive, et jamais « when I will arrive ». Le futur est déjà porté par la principale ; le répéter serait redondant.\n\nAttention à ne pas confondre avec when interrogatif, qui accepte le futur : I don't know when he will arrive — ici when introduit une question rapportée, pas un moment.",
        },
      ],
    },
    cartes: [
      { etranger: "The phone's ringing. — I'll get it.", francais: "Je réponds.", aussi: ["J'y vais.", "J'y vais, moi."], note: "Décision prise à l'instant : will." },
      { etranger: "I'm going to look for a new job.", francais: "Je vais chercher un nouveau travail.", note: "Intention déjà formée avant de parler : going to." },
      { etranger: "I'm meeting Sarah at six.", francais: "Je vois Sarah à six heures.", aussiEtranger: ["I'm seeing Sarah at six."], note: "C'est dans l'agenda : présent continu." },
      { etranger: "The train leaves at eight.", francais: "Le train part à huit heures.", note: "Horaire officiel : présent simple." },
      { etranger: "I'm about to leave.", francais: "Je suis sur le point de partir.", note: "Imminence immédiate." },
      { etranger: "I'll call you when I arrive.", francais: "Je t'appelle en arrivant.", aussi: ["Je t'appellerai quand j'arriverai."], note: "Après when, présent — jamais « when I will arrive »." },
      { etranger: "It's going to rain.", francais: "Il va pleuvoir.", note: "Les indices sont visibles : going to, pas will." },
      { etranger: "She won't agree.", francais: "Elle ne sera pas d'accord.", note: "Won't est la contraction de will not." },
      { etranger: "We'll see.", francais: "On verra.", note: "Formule figée, très courante." },
      { etranger: "Wait until I get back.", francais: "Attends que je revienne.", note: "Après until, présent aussi." },
    ],
  },
];
