/**
 * Anglais — verbes et grammaire en contexte.
 *
 * Les verbes irréguliers sont donnés en phrase et non en liste : « I went »
 * s'ancre, « go, went, gone » se récite et s'oublie.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_VERBES: LotCartes[] = [
  {
    slug: "en-irreguliers-1",
    category: "Verbes",
    title: "Verbes irréguliers, les incontournables",
    statement:
      "Les vingt verbes irréguliers qui reviennent sans arrêt, donnés au passé dans une phrase. Les apprendre en liste les fait oublier ; les apprendre en contexte les fixe.",
    tip: "Le prétérit et le participe passé se ressemblent souvent, mais pas toujours : go / went / gone est le contre-exemple à retenir.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "I went there yesterday.", francais: "J'y suis allé hier.", note: "go → went → gone." },
      { etranger: "She took the train.", francais: "Elle a pris le train.", note: "take → took → taken." },
      { etranger: "They brought the documents.", francais: "Ils ont apporté les documents.", note: "bring → brought → brought." },
      { etranger: "He thought it was easy.", francais: "Il pensait que c'était facile.", note: "think → thought → thought. Même son que brought." },
      { etranger: "We caught the last bus.", francais: "On a attrapé le dernier bus.", note: "catch → caught → caught." },
      { etranger: "I've already written to them.", francais: "Je leur ai déjà écrit.", note: "write → wrote → written." },
      { etranger: "She has chosen the blue one.", francais: "Elle a choisi le bleu.", note: "choose → chose → chosen." },
      { etranger: "The glass broke.", francais: "Le verre s'est cassé.", note: "break → broke → broken." },
      { etranger: "He left without saying goodbye.", francais: "Il est parti sans dire au revoir.", note: "leave → left → left." },
      { etranger: "I've never met her.", francais: "Je ne l'ai jamais rencontrée.", note: "meet → met → met." },
    ],
  },

  {
    slug: "en-irreguliers-2",
    category: "Verbes",
    title: "Verbes irréguliers, la deuxième série",
    statement:
      "Ceux qu'on croise dès qu'on sort du vocabulaire scolaire : dire, comprendre, garder, sentir, tenir.",
    tip: "Certains ne changent pas du tout : cut, put, let, cost, hit. Ce sont les seuls qu'on peut apprendre en liste sans risque.",
    difficulty: 2,
    niveau: "B1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "She told me the truth.", francais: "Elle m'a dit la vérité.", note: "tell → told → told. Tell demande un destinataire ; say n'en demande pas." },
      { etranger: "I didn't understand a word.", francais: "Je n'ai pas compris un mot.", note: "understand → understood → understood." },
      { etranger: "He kept the receipt.", francais: "Il a gardé le reçu.", note: "keep → kept → kept." },
      { etranger: "I felt tired all day.", francais: "Je me suis senti fatigué toute la journée.", note: "feel → felt → felt." },
      { etranger: "She held the door open.", francais: "Elle a tenu la porte ouverte.", note: "hold → held → held." },
      { etranger: "It cost twenty pounds.", francais: "Ça a coûté vingt livres.", note: "cost ne change jamais : cost → cost → cost." },
      { etranger: "He put it on the table.", francais: "Il l'a posé sur la table.", note: "put ne change jamais non plus." },
      { etranger: "They sold the house.", francais: "Ils ont vendu la maison.", note: "sell → sold → sold." },
      { etranger: "I've spent too much.", francais: "J'ai trop dépensé.", note: "spend → spent → spent." },
      { etranger: "The sun rose at six.", francais: "Le soleil s'est levé à six heures.", note: "rise → rose → risen, intransitif. Raise, régulier, veut un complément." },
    ],
  },

  {
    slug: "en-phrasal-1",
    category: "Verbes",
    title: "Phrasal verbs de tous les jours",
    statement:
      "Un verbe court plus une particule, et le sens change du tout au tout. C'est ce qui sépare l'anglais scolaire de l'anglais parlé.",
    tip: "La particule porte le sens, pas le verbe : look up, look after et look for n'ont rien à voir entre eux.",
    difficulty: 2,
    niveau: "B1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "to look after someone", francais: "s'occuper de quelqu'un", note: "À ne pas confondre avec look for, chercher, ni look up, chercher dans un dictionnaire." },
      { etranger: "to give up", francais: "abandonner", aussi: ["renoncer", "laisser tomber"] },
      { etranger: "to find out", francais: "découvrir", aussi: ["apprendre", "se renseigner"], note: "Découvrir une information, pas un lieu." },
      { etranger: "to work out", francais: "se passer bien", aussi: ["marcher", "s'arranger"], note: "Aussi : faire du sport. « It worked out » veut dire que ça a marché." },
      { etranger: "to turn down an offer", francais: "refuser une offre", aussi: ["décliner une offre"], note: "Turn down veut aussi dire baisser le son." },
      { etranger: "to put off a meeting", francais: "reporter une réunion", aussi: ["repousser une réunion"] },
      { etranger: "to run out of milk", francais: "être à court de lait", aussi: ["ne plus avoir de lait"] },
      { etranger: "to come across something", francais: "tomber sur quelque chose", aussi: ["trouver par hasard"] },
      { etranger: "to make up for it", francais: "se rattraper", aussi: ["compenser"] },
      { etranger: "to get on with someone", francais: "bien s'entendre avec quelqu'un", note: "Get on with something veut dire s'y mettre." },
    ],
  },

  {
    slug: "en-temps",
    category: "Grammaire en contexte",
    title: "Prétérit ou present perfect",
    statement:
      "La distinction qui n'existe pas en français, et qui décide de la moitié des phrases au passé. Le prétérit range dans le passé fini ; le present perfect relie au présent.",
    tip: "Une date, une heure ou un « hier » exigent le prétérit. Un lien avec maintenant appelle le present perfect.",
    difficulty: 3,
    niveau: "B1",
    parle: true,
    oral: true,
    cartes: [
      {
        etranger: "I met her last summer.",
        francais: "Je l'ai rencontrée l'été dernier.",
        note: "Last summer ferme le passé : prétérit obligatoire. « I have met her last summer » est fautif.",
      },
      {
        etranger: "I've seen him twice this week.",
        francais: "Je l'ai vu deux fois cette semaine.",
        note: "This week n'est pas fini : present perfect.",
      },
      {
        etranger: "Have you finished?",
        francais: "Tu as fini ?",
        note: "Le résultat compte maintenant, pas le moment où c'est arrivé.",
      },
      {
        etranger: "When did you finish?",
        francais: "Tu as fini quand ?",
        note: "Dès qu'on demande quand, on est dans le passé fini : prétérit.",
      },
      { etranger: "She has lived here since 2019.", francais: "Elle habite ici depuis 2019.", note: "Since suivi d'un point de départ, for suivi d'une durée." },
      { etranger: "She lived there for ten years.", francais: "Elle y a habité pendant dix ans.", note: "Prétérit : elle n'y habite plus." },
      { etranger: "I've just got back.", francais: "Je viens de rentrer.", note: "« Venir de » se rend par just au present perfect." },
      { etranger: "The train left five minutes ago.", francais: "Le train est parti il y a cinq minutes.", note: "Ago impose toujours le prétérit." },
      { etranger: "I haven't seen her since Monday.", francais: "Je ne l'ai pas vue depuis lundi." },
      { etranger: "Did you go out last night?", francais: "Tu es sorti hier soir ?" },
    ],
  },

  {
    slug: "en-prepositions",
    category: "Grammaire en contexte",
    title: "In, on, at : le temps et le lieu",
    statement:
      "Trois prépositions pour ce que le français règle avec « à » et « en ». Il n'y a pas de logique parfaite, mais il y a une règle qui couvre l'essentiel.",
    tip: "Du plus large au plus précis : in pour un espace ou une longue durée, on pour une surface ou un jour, at pour un point ou une heure.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    cartes: [
      { etranger: "at six o'clock", francais: "à six heures", note: "At pour un point précis dans le temps." },
      { etranger: "on Monday", francais: "lundi", note: "On devant un jour ou une date." },
      { etranger: "in March", francais: "en mars", note: "In devant un mois, une saison, une année." },
      { etranger: "at the station", francais: "à la gare", note: "At pour un point sur une carte ; in the station veut dire à l'intérieur du bâtiment." },
      { etranger: "in the car", francais: "dans la voiture", note: "Mais on the bus, on the train, on the plane : on monte dessus." },
      { etranger: "on the second floor", francais: "au deuxième étage", note: "Attention : le second floor britannique est le deuxième, l'américain le premier." },
      { etranger: "at the weekend", francais: "le week-end", note: "Britannique. Les Américains disent on the weekend." },
      { etranger: "in time", francais: "à temps", note: "In time, c'est avant qu'il ne soit trop tard. On time, c'est à l'heure pile." },
      { etranger: "on time", francais: "à l'heure", note: "Le train est on time s'il part à l'heure prévue." },
      { etranger: "at home", francais: "à la maison", aussi: ["chez moi"], note: "Sans article : jamais « at the home »." },
    ],
  },
];
