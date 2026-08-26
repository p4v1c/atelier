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
      "Les dix verbes irréguliers qui reviennent sans arrêt, donnés au passé dans une phrase. Les apprendre en liste les fait oublier ; les apprendre en contexte les fixe.",
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
      "Ceux qu'on croise dès qu'on sort du vocabulaire scolaire : dire, comprendre, garder, sentir, tenir, coûter, vendre, dépenser, se lever, poser.",
    tip: "Beaucoup de ces verbes se ressemblent par paires de sons : tell/told, sell/sold. L'oreille retient ce que l'œil oublie.",
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
      { etranger: "He forgot her birthday.", francais: "Il a oublié son anniversaire.", note: "forget → forgot → forgotten." },
      { etranger: "They found a solution.", francais: "Ils ont trouvé une solution.", note: "find → found → found." },
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
      { etranger: "Can you look after the cat while I'm away?", francais: "Tu peux t'occuper du chat pendant mon absence ?", note: "À ne pas confondre avec look for, chercher, ni look up, chercher dans un dictionnaire." },
      { etranger: "Don't give up now.", francais: "N'abandonne pas maintenant.", aussi: ["Ne renonce pas maintenant.", "Ne laisse pas tomber maintenant."] },
      { etranger: "I found out the truth.", francais: "J'ai découvert la vérité.", aussi: ["J'ai appris la vérité."], note: "Découvrir une information, pas un lieu." },
      { etranger: "It worked out in the end.", francais: "Ça s'est arrangé, finalement.", aussi: ["Ça a marché, finalement."], note: "Aussi : faire du sport, to work out. « It worked out » veut dire que ça a marché." },
      { etranger: "She turned down the offer.", francais: "Elle a refusé l'offre.", aussi: ["Elle a décliné l'offre."], note: "Turn down veut aussi dire baisser le son." },
      { etranger: "We had to put off the meeting.", francais: "Nous avons dû reporter la réunion.", aussi: ["Nous avons dû repousser la réunion."] },
      { etranger: "We've run out of milk.", francais: "On n'a plus de lait.", aussi: ["On est à court de lait."] },
      { etranger: "I came across an old photo.", francais: "Je suis tombé sur une vieille photo.", aussi: ["J'ai trouvé une vieille photo par hasard."] },
      { etranger: "I'll make up for it.", francais: "Je me rattraperai.", aussi: ["Je compenserai."] },
      { etranger: "He gets on well with everyone.", francais: "Il s'entend bien avec tout le monde.", note: "Get on with something veut dire s'y mettre." },
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
        etranger: "I've never been to Rome.",
        francais: "Je ne suis jamais allé à Rome.",
        note: "Une expérience, sans date : present perfect.",
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
    title: "In, on, at : dire le temps",
    statement:
      "Trois prépositions pour ce que le français règle avec « à », « en » et « le ». Il n'y a pas de logique parfaite, mais il y a une règle qui couvre l'essentiel.",
    tip: "Du plus large au plus précis : in pour un mois, une saison ou un moment de la journée, on pour un jour, at pour une heure précise.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    cartes: [
      { etranger: "The meeting starts at six o'clock.", francais: "La réunion commence à six heures.", note: "At pour un point précis dans le temps." },
      { etranger: "I'll see you on Monday.", francais: "Je te vois lundi.", note: "On devant un jour ou une date." },
      { etranger: "She was born in March.", francais: "Elle est née en mars.", note: "In devant un mois, une saison, une année." },
      { etranger: "I always go for a run in the morning.", francais: "Je vais toujours courir le matin.", note: "In the morning, in the afternoon, in the evening — mais at night." },
      { etranger: "It's quiet here at night.", francais: "C'est calme ici la nuit.", note: "At night est la seule exception à in + moment de la journée." },
      { etranger: "We arrived in time for dinner.", francais: "Nous sommes arrivés à temps pour le dîner.", note: "In time, c'est avant qu'il ne soit trop tard." },
      { etranger: "The train arrived on time.", francais: "Le train est arrivé à l'heure.", note: "On time, c'est à l'heure pile — à ne pas confondre avec in time." },
      { etranger: "I'll be back in ten minutes.", francais: "Je serai de retour dans dix minutes.", note: "In + durée pour dire le délai au bout duquel : in ten minutes." },
    ],
  },
];
