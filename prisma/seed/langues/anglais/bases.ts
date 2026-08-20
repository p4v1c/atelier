/**
 * Anglais — les bases et la vie quotidienne.
 *
 * Des phrases entières plutôt que des mots isolés : une phrase s'entend, se
 * répète et se réemploie, un mot nu se recase mal. Ces lots sont donc marqués
 * `oral`.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_BASES: LotCartes[] = [
  {
    slug: "en-presentation",
    category: "Les bases",
    title: "Se présenter",
    statement:
      "Ce qu'on dit dans les deux premières minutes d'une rencontre. À savoir sans réfléchir, parce qu'on n'a pas le temps d'y penser sur le moment.",
    tip: "L'anglais présente son métier avec l'article : « I'm a teacher », jamais « I'm teacher ».",
    difficulty: 1,
    niveau: "A1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Nice to meet you.", francais: "Enchanté.", aussi: ["Ravi de vous rencontrer."], aussiEtranger: ["Pleased to meet you.", "Good to meet you."] },
      {
        etranger: "I'm a teacher.",
        francais: "Je suis professeur.",
        note: "L'article indéfini est obligatoire devant un métier : a teacher, an engineer.",
      },
      { etranger: "I'm from Nantes.", francais: "Je viens de Nantes.", aussi: ["Je suis de Nantes."] },
      {
        etranger: "What do you do for a living?",
        francais: "Qu'est-ce que tu fais dans la vie ?",
        aussi: ["Que faites-vous dans la vie ?"],
      },
      {
        etranger: "How long have you been here?",
        francais: "Tu es ici depuis combien de temps ?",
        note: "Present perfect continu : l'action a commencé avant et dure encore.",
      },
      { etranger: "I've been studying English for two years.", francais: "J'apprends l'anglais depuis deux ans." },
      {
        etranger: "Sorry, could you say that again?",
        francais: "Pardon, tu peux répéter ?",
        aussi: ["Excusez-moi, pouvez-vous répéter ?"],
        note: "Plus naturel que « Repeat, please », qui sonne comme un ordre.",
      },
      { etranger: "I don't quite follow.", francais: "Je ne suis pas bien.", aussi: ["Je ne comprends pas tout."] },
      {
        etranger: "How do you spell that?",
        francais: "Ça s'écrit comment ?",
        aussi: ["Comment ça s'épelle ?"],
      },
      { etranger: "It was nice talking to you.", francais: "C'était sympa de discuter.", aussi: ["Content d'avoir parlé avec toi."] },
    ],
  },

  {
    slug: "en-questions",
    category: "Les bases",
    title: "Poser une question sans se tromper",
    statement:
      "L'ordre des mots dans une question anglaise ne suit pas le français. C'est mécanique une fois compris, et cela s'entend immédiatement quand c'est faux.",
    tip: "Question directe : l'auxiliaire passe devant. Question rapportée : l'ordre redevient celui d'une phrase normale.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      {
        etranger: "Where does she work?",
        francais: "Où est-ce qu'elle travaille ?",
        note: "L'auxiliaire does porte la marque du présent, donc work reste nu : jamais « does she works ».",
      },
      {
        etranger: "Do you know where she works?",
        francais: "Tu sais où elle travaille ?",
        note: "Question rapportée : plus d'inversion, on retrouve l'ordre sujet-verbe.",
      },
      { etranger: "What time does it start?", francais: "Ça commence à quelle heure ?" },
      {
        etranger: "How much does it cost?",
        francais: "Ça coûte combien ?",
        note: "How much pour ce qui ne se compte pas, how many pour ce qui se compte.",
      },
      { etranger: "How many people are coming?", francais: "Combien de personnes viennent ?" },
      {
        etranger: "What's it like?",
        francais: "C'est comment ?",
        aussi: ["Comment c'est ?"],
        note: "Ne pas dire « How is it? », qui demande si ça va bien, pas à quoi ça ressemble.",
      },
      { etranger: "Have you ever been to London?", francais: "Tu es déjà allé à Londres ?" },
      {
        etranger: "Why didn't you tell me?",
        francais: "Pourquoi tu ne me l'as pas dit ?",
        note: "Après didn't, le verbe reste à l'infinitif : jamais « didn't told ».",
      },
      { etranger: "Whose is this?", francais: "C'est à qui ?", aussi: ["À qui c'est ?"] },
      { etranger: "Could you help me with something?", francais: "Tu peux m'aider pour un truc ?", aussi: ["Pourriez-vous m'aider ?"] },
    ],
  },

  {
    slug: "en-quotidien",
    category: "Vie quotidienne",
    title: "La journée ordinaire",
    statement:
      "Les phrases d'une journée banale : se lever, faire les courses, rentrer. Sans elles, on sait parler de politique et pas de son petit-déjeuner.",
    tip: "L'anglais quotidien va droit au but : les tournures longues sonnent scolaires.",
    difficulty: 1,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "I overslept.", francais: "J'ai dormi trop longtemps.", aussi: ["Je me suis réveillé en retard."] },
      { etranger: "I'm running late.", francais: "Je suis en retard.", aussi: ["Je vais être en retard."], aussiEtranger: ["I'm late."] },
      {
        etranger: "I'll grab something on the way.",
        francais: "Je prendrai quelque chose en chemin.",
        note: "Grab, très courant à l'oral, remplace take ou get.",
      },
      { etranger: "Can you pick up some bread?", francais: "Tu peux prendre du pain ?", aussi: ["Tu peux acheter du pain ?"] },
      { etranger: "I need to do the laundry.", francais: "Il faut que je fasse une lessive." },
      { etranger: "The bin needs taking out.", francais: "Il faut sortir la poubelle." },
      {
        etranger: "I'm just popping out.",
        francais: "Je sors deux minutes.",
        note: "To pop out, très britannique, dit qu'on revient vite.",
      },
      { etranger: "It's freezing outside.", francais: "Il gèle dehors.", aussi: ["Il fait un froid glacial."] },
      { etranger: "I'm shattered.", francais: "Je suis épuisé.", aussi: ["Je suis crevé."], aussiEtranger: ["I'm exhausted.", "I'm beat."], note: "Britannique. Aux États-Unis : I'm beat." },
      { etranger: "Let's call it a day.", francais: "On s'arrête là pour aujourd'hui.", aussi: ["On arrête là."] },
    ],
  },

  {
    slug: "en-voyage",
    category: "Voyage",
    title: "Aéroport, train, hôtel",
    statement:
      "Ce qu'on dit et ce qu'on entend en voyage. Les formules sont figées : on les reconnaît plus qu'on ne les invente.",
    tip: "Les annonces de gare et d'aéroport emploient un vocabulaire très étroit : le connaître suffit à s'en sortir partout.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "I'd like an aisle seat, please.", francais: "Je voudrais un siège côté couloir.", note: "Côté hublot : a window seat." },
      { etranger: "Do I need to check in my bag?", francais: "Je dois enregistrer mon bagage ?" },
      {
        etranger: "The flight has been delayed.",
        francais: "Le vol a été retardé.",
        note: "Annulé : cancelled. Britannique avec deux L, américain avec un seul.",
      },
      { etranger: "Which platform does it leave from?", francais: "Il part de quel quai ?", note: "Track aux États-Unis." },
      { etranger: "Is this seat taken?", francais: "Cette place est prise ?", aussi: ["Cette place est libre ?"] },
      { etranger: "I have a reservation under Dupont.", francais: "J'ai une réservation au nom de Dupont." },
      { etranger: "What time is check-out?", francais: "Le départ est à quelle heure ?", aussi: ["À quelle heure faut-il libérer la chambre ?"] },
      { etranger: "Could I have a wake-up call at seven?", francais: "Pourriez-vous me réveiller à sept heures ?" },
      {
        etranger: "How do I get to the city centre?",
        francais: "Comment vais-je au centre-ville ?",
        aussi: ["Comment on va au centre-ville ?"],
        note: "Downtown aux États-Unis, et center s'y écrit sans inversion.",
      },
      { etranger: "Is it within walking distance?", francais: "C'est accessible à pied ?", aussi: ["On peut y aller à pied ?"] },
    ],
  },
];
