/**
 * Anglais — cinq séries de plus au niveau A1.
 *
 * Le module montait vite : dix séries A2 pour huit A1. Or c'est au tout début
 * qu'on abandonne, faute de pouvoir dire les choses de la journée — sa maison,
 * son mal de dos, un appel, ce qu'on fait le dimanche. Ces cinq séries
 * comblent ce trou.
 *
 * Tout y est en phrases, jamais en mots isolés : c'est ce qui permet l'écoute
 * et la prononciation, et un mot appris hors contexte ne se replace pas.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_QUOTIDIEN_A1: LotCartes[] = [
  {
    slug: "en-maison",
    category: "Vie quotidienne",
    title: "Chez soi : la maison et les objets",
    statement:
      "Parler de son logement, de ce qui marche et de ce qui ne marche plus. C'est le premier sujet quand on loge chez quelqu'un, et le premier problème quand on loue.",
    tip: "On allume et on éteint avec turn on / turn off — jamais « open the light », qui est un calque du français.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "The kettle is in the kitchen.",
        francais: "La bouilloire est dans la cuisine.",
        note: "Kettle : l'objet le plus britannique qui soit, et le premier qu'on cherche le matin.",
      },
      {
        etranger: "Could you turn the light off?",
        francais: "Tu peux éteindre la lumière ?",
        aussi: ["Pourrais-tu éteindre la lumière ?"],
        note: "Turn off, turn on. « Close the light » et « open the light » sont des calques du français.",
      },
      {
        etranger: "I live on the second floor.",
        francais: "J'habite au deuxième étage.",
        note: "On + étage. Et attention : le second floor britannique est notre deuxième, l'américain notre premier.",
      },
      {
        etranger: "The washing machine is broken.",
        francais: "La machine à laver est en panne.",
        note: "Broken couvre tout ce qui ne marche plus. Out of order appartient surtout aux machines et aux services publics.",
      },
      {
        etranger: "There's no hot water.",
        francais: "Il n'y a pas d'eau chaude.",
        note: "There's no + nom : la façon la plus courte de dire une absence.",
      },
      {
        etranger: "I'm doing the washing-up.",
        francais: "Je fais la vaisselle.",
        note: "Washing-up, la vaisselle ; washing, le linge — c'est le up qui fait la différence.",
      },
      {
        etranger: "Shall I open the window?",
        francais: "J'ouvre la fenêtre ?",
        aussi: ["Est-ce que j'ouvre la fenêtre ?"],
        note: "Shall I…? propose un service. Le français emploie le présent tout court : « j'ouvre ? »",
      },
      {
        etranger: "The bins go out on Thursday.",
        francais: "Les poubelles sortent le jeudi.",
        note: "Bin au Royaume-Uni, trash can aux États-Unis. Et on devant le jour de la semaine.",
      },
      {
        etranger: "Make yourself at home.",
        francais: "Fais comme chez toi.",
        aussi: ["Faites comme chez vous."],
      },
      {
        etranger: "My flat is small but bright.",
        francais: "Mon appartement est petit mais lumineux.",
        note: "Flat au Royaume-Uni, apartment aux États-Unis. Bright dit la lumière vive ; light dit aussi la clarté d'une pièce, et le poids léger — c'est le contexte qui tranche.",
      },
    ],
  },

  {
    slug: "en-corps-sante",
    category: "Vie quotidienne",
    title: "Le corps, la santé, le médecin",
    statement:
      "Dire où l'on a mal et comprendre une ordonnance. Un vocabulaire qu'on espère ne pas employer, et qu'on regrette amèrement de ne pas avoir le jour venu.",
    tip: "Le français a mal À quelque chose ; l'anglais a un nom tout fait — headache, toothache — ou met la partie du corps en sujet : my back hurts.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I've got a headache.",
        francais: "J'ai mal à la tête.",
        aussi: ["J'ai un mal de tête."],
        note: "Chaque douleur a son mot composé : headache, stomachache, toothache, backache.",
      },
      {
        etranger: "My back hurts.",
        francais: "J'ai mal au dos.",
        note: "Hurt met la partie du corps en sujet : c'est le dos qui fait mal, pas moi qui l'ai.",
      },
      {
        etranger: "I don't feel well.",
        francais: "Je ne me sens pas bien.",
        note: "Feel well parle de santé ; feel good parle d'humeur. Les deux ne sont pas interchangeables.",
      },
      {
        etranger: "I need to see a doctor.",
        francais: "J'ai besoin de voir un médecin.",
        aussi: ["Il faut que je voie un médecin."],
      },
      {
        etranger: "Where does it hurt?",
        francais: "Où est-ce que ça fait mal ?",
        aussi: ["Où avez-vous mal ?"],
      },
      {
        etranger: "I'm allergic to peanuts.",
        francais: "Je suis allergique aux cacahuètes.",
        note: "Allergic TO. La phrase à savoir dire par cœur avant de commander quoi que ce soit.",
      },
      {
        etranger: "Take one tablet twice a day.",
        francais: "Prenez un comprimé deux fois par jour.",
        note: "Twice a day : dans une fréquence, « a » vaut « par ». Once, twice, puis three times.",
      },
      {
        etranger: "I've had a temperature since yesterday.",
        francais: "J'ai de la fièvre depuis hier.",
        note: "A temperature suffit pour dire la fièvre. Since marque le point de départ, for la durée.",
      },
      {
        etranger: "Get well soon.",
        francais: "Bon rétablissement.",
        aussi: ["Remets-toi vite."],
      },
      {
        etranger: "It's nothing serious.",
        francais: "Ce n'est rien de grave.",
        note: "Nothing serious, sans article ni de. Le français glisse un « de » que l'anglais ignore.",
      },
    ],
  },

  {
    slug: "en-telephone-messages",
    category: "Vie quotidienne",
    title: "Au téléphone et par messages",
    statement:
      "Le téléphone est l'épreuve la plus dure d'une langue étrangère : plus de visage, plus de contexte, et une ligne qui grésille. Ses formules sont fixes — et c'est une chance.",
    tip: "Is that…? au téléphone en britannique, is this…? en américain. Jamais is it pour identifier la personne au bout du fil.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "Hello, is that Sarah?",
        francais: "Allô, c'est Sarah ?",
        note: "Is that…? au téléphone en britannique. L'anglais américain dit plutôt Is this Sarah?",
      },
      {
        etranger: "Who's calling, please?",
        francais: "C'est de la part de qui ?",
        note: "Formule figée. Le calque mot à mot du français ne donne rien d'anglais.",
      },
      {
        etranger: "Sorry, could you speak up?",
        francais: "Pardon, tu peux parler plus fort ?",
        note: "Speak up, parler plus fort ; slow down, parler plus lentement.",
      },
      {
        etranger: "I'll call you back in ten minutes.",
        francais: "Je te rappelle dans dix minutes.",
        note: "Call back en deux mots. In + durée dit le délai au bout duquel : in ten minutes, dans dix minutes. Within dit avant la fin du délai : within ten minutes, en moins de dix minutes.",
      },
      {
        etranger: "Can you hear me?",
        francais: "Tu m'entends ?",
        note: "Hear, entendre sans le vouloir ; listen, écouter volontairement.",
      },
      {
        etranger: "Sorry, I can't hear you very well.",
        francais: "Désolé, je t'entends mal.",
        note: "L'anglais nie le verbe là où le français qualifie l'action.",
      },
      {
        etranger: "Text me when you arrive.",
        francais: "Envoie-moi un message quand tu arrives.",
        note: "Text est verbe et nom. Après when, l'anglais met le présent pour parler du futur.",
      },
      {
        etranger: "I'll send you the address.",
        francais: "Je t'envoie l'adresse.",
        note: "Send someone something : quand le destinataire vient d'abord, pas de préposition.",
      },
      {
        etranger: "Sorry, wrong number.",
        francais: "Désolé, mauvais numéro.",
      },
      {
        etranger: "I'll be there in five.",
        francais: "J'arrive dans cinq minutes.",
        note: "In five suffit à l'oral : minutes se sous-entend.",
      },
    ],
  },

  {
    slug: "en-petits-mots",
    category: "Les bases",
    title: "Les petits mots qui tiennent la phrase",
    statement:
      "And, but, so, because, too, very. Six mots de rien qui font la différence entre une suite de mots et une phrase — et dont trois (too, so, because) sont des pièges pour un francophone.",
    tip: "Too veut dire trop, et jamais très. Very good est un compliment, too expensive un reproche.",
    difficulty: 1,
    niveau: "A1",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "I'm tired but I'm happy.",
        francais: "Je suis fatigué mais content.",
        note: "But relie deux propositions complètes. L'anglais répète le sujet là où le français l'économise.",
      },
      {
        etranger: "We stayed home because it was raining.",
        francais: "On est restés à la maison parce qu'il pleuvait.",
        note: "Because introduit une proposition ; because of introduit un nom : because of the rain.",
      },
      {
        etranger: "It was cold, so we went inside.",
        francais: "Il faisait froid, alors on est rentrés.",
        note: "So relie une cause à sa conséquence. Attention, il a un autre emploi : devant un adjectif, so veut dire « tellement » — it's so cold.",
      },
      {
        etranger: "She speaks English and Spanish.",
        francais: "Elle parle anglais et espagnol.",
        note: "Pas d'article devant une langue : speak English, jamais « speak the English ».",
      },
      {
        etranger: "It's too expensive for me.",
        francais: "C'est trop cher pour moi.",
        note: "Too, trop ; very, très. Too porte toujours un reproche ou une limite.",
      },
      {
        etranger: "The film was very good.",
        francais: "Le film était très bien.",
        note: "Very good qualifie une chose ; very well qualifie une action : she sings very well.",
      },
      {
        etranger: "Let's go now.",
        francais: "Allons-y maintenant.",
        note: "Let's + verbe nu, jamais « let's to go ».",
      },
      {
        etranger: "Me too.",
        francais: "Moi aussi.",
        note: "Me too répond à une affirmation ; me neither répond à une négation.",
      },
      {
        etranger: "Not yet.",
        francais: "Pas encore.",
        note: "Not yet, la réponse standard à une question sur ce qui n'est pas encore arrivé : Have you finished? — Not yet. Are you ready? — Not yet.",
      },
      {
        etranger: "Of course.",
        francais: "Bien sûr.",
        aussi: ["Évidemment.", "Bien entendu."],
      },
    ],
  },

  {
    slug: "en-temps-libre",
    category: "Vie quotidienne",
    title: "Le temps libre : sport, sorties, loisirs",
    statement:
      "Ce qu'on fait le week-end, et comment le proposer à quelqu'un. Le sujet qui vient juste après « comment tu t'appelles », et celui qui fait durer une conversation.",
    tip: "Play the guitar avec l'article, play football sans. L'instrument prend the, le sport jamais.",
    difficulty: 1,
    niveau: "A2",
    oral: true,
    parle: true,
    cartes: [
      {
        etranger: "What do you do at the weekend?",
        francais: "Qu'est-ce que tu fais le week-end ?",
        aussi: ["Que fais-tu le week-end ?"],
        note: "At the weekend au Royaume-Uni, on the weekend aux États-Unis.",
      },
      {
        etranger: "I play the guitar.",
        francais: "Je joue de la guitare.",
        note: "Play THE + instrument. Sans article, c'est un sport : play tennis.",
      },
      {
        etranger: "I go swimming on Mondays.",
        francais: "Je vais nager le lundi.",
        aussi: ["Je nage le lundi."],
        note: "Go + -ing pour les loisirs : go swimming, go running, go shopping.",
      },
      {
        etranger: "Do you fancy going out tonight?",
        francais: "Ça te dit de sortir ce soir ?",
        note: "Fancy + -ing : l'invitation la plus courante en anglais britannique.",
      },
      {
        etranger: "I'm not very good at chess.",
        francais: "Je ne suis pas très fort aux échecs.",
        note: "Good AT quelque chose. « Good in » est un calque qui s'entend tout de suite.",
      },
      {
        etranger: "We watched a film last night.",
        francais: "On a regardé un film hier soir.",
        note: "Watch chez soi — a film, TV ; see au cinéma ou au théâtre ; look at une image fixe.",
      },
      {
        etranger: "I read before going to sleep.",
        francais: "Je lis avant de m'endormir.",
        note: "Before + -ing quand le sujet est le même. Le français met un infinitif.",
      },
      {
        etranger: "The concert starts at eight.",
        francais: "Le concert commence à huit heures.",
        note: "At + heure. Et l'anglais dit at eight tout court : on ne dit pas « hours ».",
      },
      {
        etranger: "She's really into photography.",
        francais: "Elle est passionnée de photo.",
        note: "Be into something : être passionné par. Très courant à l'oral, jamais à l'écrit formel.",
      },
      {
        etranger: "Let's meet outside the cinema.",
        francais: "Retrouvons-nous devant le cinéma.",
        note: "Meet outside pour un rendez-vous devant un lieu : plus naturel que in front of.",
      },
    ],
  },
];
