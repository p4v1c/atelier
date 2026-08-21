/**
 * Anglais — prononciation, écrit, et les phrasal verbs en cours.
 *
 * Ce qui ne relève pas de la grammaire mais décide de l'aisance : se faire
 * comprendre à l'oral, écrire sans calquer, et cesser de traduire les phrasal
 * verbs mot à mot.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_COURS_USAGE: LotCartes[] = [
  {
    slug: "en-cours-prononciation",
    category: "Prononciation",
    title: "Se faire comprendre : les pièges du francophone",
    statement:
      "Quatre difficultés reviennent sans cesse — le th, l'accent tonique, le -ed final, et le h. Les corriger change plus qu'un long travail de vocabulaire.",
    tip: "L'anglais accentue une syllabe et écrase les autres. Le français les dit toutes à égalité : c'est ce qui rend un francophone difficile à suivre.",
    difficulty: 2,
    niveau: "A2",
    oral: true,
    parle: true,
    cours: {
      titre: "Quatre pièges de prononciation",
      sections: [
        {
          titre: "L'accent tonique, avant tout le reste",
          texte:
            "Le français donne à chaque syllabe la même valeur. L'anglais en accentue une et réduit les autres jusqu'à les rendre presque inaudibles : dans comfortable, on entend « COMF-ta-bl », trois syllabes et non quatre.\n\nC'est le point qui gêne le plus la compréhension. Un mot bien prononcé mais mal accentué passe souvent moins bien qu'un mot approximatif correctement accentué.\n\nLa syllabe non accentuée se réduit vers un son neutre, le schwa : le a de about, le e de taken, le o de police se prononcent tous pareil, un vague « e » sourd.\n\nEt l'accent distingue parfois deux mots : REcord, le disque, contre reCORD, enregistrer. Même chose pour present, object, increase, permit — nom accentué devant, verbe accentué derrière.",
          visuels: [
            {
              type: "tableau",
              titre: "Là où l'accent tombe, et où le francophone le met",
              colonnes: ["Mot", "Prononciation", "Erreur fréquente"],
              lignes: [
                ["comfortable", "COMF-ta-ble", "com-for-TA-ble"],
                ["vegetable", "VEDGE-ta-ble", "ve-ge-TA-ble"],
                ["interesting", "IN-tres-ting", "in-te-RES-ting"],
                ["development", "de-VEL-op-ment", "de-ve-lop-MENT"],
                ["photograph", "PHO-to-graph", "pho-to-GRAPH"],
                ["photography", "pho-TO-graphy", "pho-to-gra-PHY"],
              ],
              note: "Photograph et photography changent d'accent : le suffixe déplace tout.",
            },
          ],
        },
        {
          titre: "Le th, et le h",
          texte:
            "Le th n'existe pas en français, et se remplace souvent par un s ou un z, ce qui crée de vraies confusions : think devient sink, they devient day.\n\nIl a deux valeurs. Sourde dans think, thanks, three, both : la langue touche les dents, l'air passe, les cordes vocales restent muettes. Sonore dans this, that, they, mother : même position, mais les cordes vibrent.\n\nLe h, lui, se prononce toujours en anglais quand il est écrit — sauf dans hour, honest, honour, heir. Un francophone l'omet volontiers, et « I ate » à la place de « I hate » change beaucoup la phrase.\n\nSymétriquement, il ne faut pas en ajouter là où il n'y en a pas : « I'm 'appy » et « I'm hangry » sont deux erreurs miroir.",
        },
        {
          titre: "Le -ed final, trois sons pour une orthographe",
          texte:
            "La terminaison du prétérit régulier ne se prononce pas toujours pareil, et jamais « -ède ».\n\nElle se dit /t/ après un son sourd : worked, watched, helped, passed. Elle se dit /d/ après un son sonore ou une voyelle : played, opened, lived, called. Et elle forme une syllabe entière /ɪd/ seulement après t ou d : wanted, needed, decided.\n\nDire « want-ed » là où il faut « workt » est immédiatement audible. La règle est mécanique : ce qui précède décide.\n\nDernier écueil, les mots courts qui se confondent : ship et sheep, live et leave, full et fool. La différence n'est pas seulement la longueur mais la tension de la voyelle.",
        },
      ],
    },
    cartes: [
      { etranger: "I think this is the third one.", francais: "Je crois que c'est le troisième.", note: "Trois th : think et third sont sourds, this est sonore." },
      { etranger: "They both worked hard.", francais: "Ils ont tous les deux travaillé dur.", note: "worked se dit « workt » : /t/ après un son sourd." },
      { etranger: "She wanted to leave.", francais: "Elle voulait partir.", note: "wanted forme une syllabe : /ɪd/ après un t. Et leave, voyelle longue." },
      { etranger: "It's a comfortable chair.", francais: "C'est une chaise confortable.", note: "COMF-ta-ble, trois syllabes. Le francophone en dit quatre." },
      { etranger: "That's an interesting idea.", francais: "C'est une idée intéressante.", note: "IN-tres-ting, accent sur la première syllabe." },
      { etranger: "I hate waiting an hour.", francais: "Je déteste attendre une heure.", note: "Le h de hate se prononce, celui de hour non." },
      { etranger: "The ship is full.", francais: "Le bateau est plein.", note: "ship et sheep, full et fool : la voyelle courte est aussi plus relâchée." },
      { etranger: "We opened it yesterday.", francais: "On l'a ouvert hier.", note: "opened se dit « opend » : /d/ après un son sonore." },
      { etranger: "He played and she watched.", francais: "Il a joué et elle a regardé.", note: "played en /d/, watched en /t/ : c'est le son précédent qui décide." },
      { etranger: "Where's the nearest chemist?", francais: "Où est la pharmacie la plus proche ?", note: "chemist se dit avec un k : « KEM-ist »." },
    ],
  },

  {
    slug: "en-cours-ecrire",
    category: "Travail et études",
    title: "Bien écrire en anglais",
    statement:
      "L'anglais écrit est plus court, plus direct et plus concret que le français. Traduire une phrase française donne presque toujours quelque chose de trop lourd.",
    tip: "Verbe fort plutôt que nom abstrait : « we decided » vaut mieux que « we took the decision ».",
    difficulty: 2,
    niveau: "B1",
    cours: {
      titre: "Écrire un anglais qui ne sente pas la traduction",
      sections: [
        {
          titre: "Plus court, presque toujours",
          texte:
            "Le français valorise la période longue et la nominalisation. L'anglais valorise la phrase courte et le verbe. Une phrase française bien tournée, traduite fidèlement, produit un anglais qu'un lecteur natif trouve pesant sans savoir pourquoi.\n\nLe remède le plus efficace tient en une habitude : chercher le verbe. « Nous avons procédé à l'analyse des données » devient we analysed the data. Trois mots au lieu de sept, et c'est mieux.\n\nMême logique pour les tournures de politesse. « Je me permets de vous écrire afin de solliciter » devient I'm writing to ask. Ce n'est pas moins poli : c'est le registre normal.",
          visuels: [
            {
              type: "comparaison",
              titre: "Le réflexe français, et l'anglais qui va",
              colonnes: [
                {
                  titre: "Calqué — trop lourd",
                  points: [
                    "We took the decision to…",
                    "We proceeded to the analysis of…",
                    "In order to be able to…",
                    "Due to the fact that…",
                    "At the present time…",
                  ],
                },
                {
                  titre: "Naturel",
                  points: [
                    "We decided to…",
                    "We analysed…",
                    "To…",
                    "Because…",
                    "Now…",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Les connecteurs, et leur registre",
          texte:
            "Tous les connecteurs ne se valent pas. However est neutre et convient partout. Nevertheless est un cran au-dessus. Nonetheless est littéraire. But convient très bien à l'écrit ordinaire, contrairement à ce qu'on enseigne parfois.\n\nPour la conséquence : so à l'oral et dans un courriel, therefore à l'écrit soutenu, hence rare et technique.\n\nPour ajouter : also en début ou milieu de phrase, in addition à l'écrit, moreover assez formel. Furthermore est de plus en plus perçu comme pompeux.\n\nUn conseil qui vaut pour tous : un connecteur par paragraphe suffit. L'anglais lie par l'ordre des idées plus que par les mots.",
        },
        {
          titre: "La ponctuation, qui n'est pas la nôtre",
          texte:
            "Pas d'espace avant les deux-points, le point-virgule, le point d'interrogation ni le point d'exclamation. C'est le marqueur le plus visible d'un texte tapé par un francophone.\n\nLes guillemets sont doubles et droits : \"like this\", pas « comme ceci ».\n\nLes millésimes et les nombres emploient la virgule pour les milliers et le point pour les décimales : 1,500.75. L'inverse exact du français.\n\nEnfin, les titres et sous-titres prennent souvent une majuscule à chaque mot important — c'est le title case — alors que le français n'en met qu'au premier.",
        },
      ],
    },
    cartes: [
      { etranger: "We decided to postpone it.", francais: "Nous avons pris la décision de le reporter.", note: "Le verbe plutôt que le nom : decided, pas « took the decision »." },
      { etranger: "I'm writing to ask about the position.", francais: "Je me permets de vous écrire au sujet du poste.", note: "L'anglais professionnel va droit au but sans être impoli." },
      { etranger: "Because the deadline moved,", francais: "En raison du report de l'échéance,", note: "Because vaut mieux que « due to the fact that »." },
      { etranger: "Please let me know if anything's unclear.", francais: "N'hésitez pas si quelque chose n'est pas clair.", note: "« Don't hesitate » existe mais sonne traduit." },
      { etranger: "However, the figures tell another story.", francais: "Cependant, les chiffres racontent autre chose.", note: "However est neutre ; nevertheless est un cran au-dessus." },
      { etranger: "So we'll need another meeting.", francais: "Il nous faudra donc une autre réunion.", note: "So dans un courriel, therefore à l'écrit soutenu." },
      { etranger: "The report is attached.", francais: "Le rapport est joint.", note: "Plus court que « please find attached », et parfaitement courant." },
      { etranger: "I'll get back to you by Thursday.", francais: "Je reviens vers vous d'ici jeudi." },
      { etranger: "Thanks for your patience.", francais: "Merci de votre patience.", note: "Thanks est courant à l'écrit professionnel ; thank you est plus formel." },
      { etranger: "Let's keep it short.", francais: "Faisons court.", note: "Le conseil que l'anglais écrit s'applique à lui-même." },
    ],
  },

  {
    slug: "en-cours-phrasal",
    category: "Verbes",
    title: "Les phrasal verbs, méthode",
    statement:
      "Un verbe court plus une particule, et le sens n'a plus rien à voir. Ils ne s'apprennent pas par liste : ils s'apprennent par particule.",
    tip: "La particule porte le sens. Up dit l'achèvement, out l'extérieur ou l'épuisement, off la séparation, on la continuation.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    parle: true,
    cours: {
      titre: "Comprendre les phrasal verbs plutôt que les mémoriser",
      sections: [
        {
          titre: "La particule a un sens",
          texte:
            "On enseigne souvent les phrasal verbs comme une liste arbitraire à apprendre par cœur. C'est décourageant et inexact : les particules ont des sens assez stables, et les reconnaître rend une grande partie du vocabulaire déductible.\n\nUp marque l'achèvement ou l'intensification : eat up, finir son assiette ; use up, épuiser ; speak up, parler plus fort.\n\nOut marque la sortie, la distribution ou l'épuisement : go out, sortir ; hand out, distribuer ; run out, être à court.\n\nOff marque la séparation ou l'arrêt : take off, décoller ou retirer ; call off, annuler ; put off, remettre à plus tard.\n\nOn marque la continuation ou le contact : go on, continuer ; put on, enfiler ; get on, monter dans.\n\nDown marque la baisse ou la mise par écrit : turn down, baisser ou refuser ; write down, noter.",
          visuels: [
            {
              type: "tableau",
              titre: "Un même verbe, quatre particules",
              colonnes: ["Phrasal", "Sens", "Exemple"],
              lignes: [
                ["get up", "se lever", "I get up at seven."],
                ["get on", "monter dans, s'entendre", "We get on well."],
                ["get over", "se remettre de", "She got over it."],
                ["get by", "s'en sortir", "We'll get by."],
                ["get through", "traverser, joindre", "I couldn't get through."],
                ["get away with", "s'en tirer", "He got away with it."],
              ],
            },
          ],
        },
        {
          titre: "Séparables ou non",
          texte:
            "Certains phrasal verbs acceptent que le complément se glisse entre le verbe et la particule : turn the light off, ou turn off the light. Les deux sont corrects.\n\nMais si le complément est un pronom, il DOIT se placer au milieu : turn it off. Dire « turn off it » est fautif, sans exception.\n\nD'autres sont inséparables, en général ceux à deux particules : look after the children, jamais « look the children after ». On les reconnaît à l'usage plus qu'à une règle.\n\nUn moyen simple de trancher : essayer avec it. Si turn it off sonne juste, le verbe est séparable.",
        },
        {
          titre: "Registre",
          texte:
            "Les phrasal verbs sont le registre courant. Leur équivalent d'origine latine est plus formel : find out contre discover, put off contre postpone, give up contre abandon, look into contre investigate.\n\nÀ l'oral et dans un courriel ordinaire, le phrasal verb est le choix naturel — l'équivalent latin sonne guindé. Dans un rapport ou un texte officiel, c'est l'inverse.\n\nSavoir les deux registres et choisir selon le contexte est un des marqueurs les plus nets d'un bon niveau.",
        },
      ],
    },
    cartes: [
      { etranger: "Turn it off, please.", francais: "Éteins-le, s'il te plaît.", note: "Avec un pronom, il DOIT se placer au milieu : jamais « turn off it »." },
      { etranger: "We ran out of coffee.", francais: "On n'a plus de café.", note: "Out marque l'épuisement." },
      { etranger: "They called off the meeting.", francais: "Ils ont annulé la réunion.", note: "Off marque l'arrêt. Registre courant ; cancel est plus neutre." },
      { etranger: "Go on, I'm listening.", francais: "Continue, je t'écoute.", note: "On marque la continuation." },
      { etranger: "She got over it quickly.", francais: "Elle s'en est vite remise.", note: "Over : franchir, dépasser." },
      { etranger: "Write it down before you forget.", francais: "Note-le avant d'oublier.", note: "Down pour la mise par écrit." },
      { etranger: "I'll look into it tomorrow.", francais: "Je regarderai ça demain.", note: "Look into, examiner. Équivalent formel : investigate." },
      { etranger: "He got away with it.", francais: "Il s'en est tiré.", note: "Trois éléments, inséparables : jamais « got it away with »." },
      { etranger: "Speak up, I can't hear you.", francais: "Parle plus fort, je ne t'entends pas.", note: "Up intensifie." },
      { etranger: "We'll get by somehow.", francais: "On s'en sortira d'une façon ou d'une autre." },
    ],
  },
];
