/**
 * Anglais — les dictées.
 *
 * Progressives : quelques phrases simples au A1, un paragraphe entier au B2.
 * L'accent alterne d'une dictée à l'autre, britannique puis américain — un
 * apprenant qui n'a entendu qu'un accent ne comprend que celui-là.
 */
import type { DicteeLangue } from "../../../../src/modules/langues/commun";

export const ANGLAIS_DICTEES: DicteeLangue[] = [
  {
    texte: "My name is Claire. I am twenty-eight years old and I live in Nantes. I work in a small bookshop near the river. I like my job because I meet interesting people every day.",
    theme: "Se présenter",
    niveau: "A1",
    difficulte: 1,
    accent: "en-GB",
    series: ["en-presentation"],
  },
  {
    texte: "It is Monday morning and I am late again. I get up at seven, I have a quick breakfast, and I take the bus to work. The bus is always full at that time.",
    theme: "La journée ordinaire",
    niveau: "A1",
    difficulte: 1,
    accent: "en-US",
    series: ["en-quotidien"],
  },
  {
    texte: "Excuse me, could you tell me where the station is? I have a train at half past four and I do not want to miss it. Is it far from here, or can I walk?",
    theme: "Demander son chemin",
    niveau: "A1",
    difficulte: 1,
    accent: "en-GB",
    series: ["en-voyage"],
  },
  {
    texte: "Last weekend we went to the coast. The weather was cold but the sky was clear, and we walked for hours along the beach. In the evening we found a small restaurant and ate fish and chips. I had not felt so relaxed for months.",
    theme: "Raconter un week-end",
    niveau: "A2",
    difficulte: 2,
    accent: "en-GB",
    series: ["en-irreguliers-1", "en-conj-passe"],
  },
  {
    texte: "I have been studying English for three years, but I still find it hard to understand films without subtitles. People speak much faster than in my lessons, and they use expressions that no textbook ever taught me.",
    theme: "Apprendre une langue",
    niveau: "A2",
    difficulte: 2,
    accent: "en-US",
    series: ["en-temps"],
  },
  {
    texte: "Dear Ms Clarke, I am writing to ask about the position advertised on your website. I have attached my CV and a short covering letter. I would be grateful for a quick reply, as the deadline is next Friday. Kind regards, Claire Dupont.",
    theme: "Écrire un courriel",
    niveau: "B1",
    difficulte: 2,
    accent: "en-GB",
    series: ["en-courriel"],
  },
  {
    texte: "The meeting did not go as planned. Half the team had already left when the client finally arrived, and nobody had prepared the figures he asked for. We agreed to meet again on Thursday, and this time somebody will actually read the report beforehand.",
    theme: "Au bureau",
    niveau: "B1",
    difficulte: 2,
    accent: "en-US",
    series: ["en-reunion", "en-conj-passe"],
  },
  {
    texte: "What surprises visitors most about London is not its size but its quiet corners. Behind the crowded streets there are squares where nobody hurries, where an old man reads a newspaper and the traffic sounds like distant weather. You could walk past them for years without noticing.",
    theme: "Décrire un lieu",
    niveau: "B2",
    difficulte: 3,
    accent: "en-GB",
    series: ["en-prepositions", "en-expressions"],
  },
  {
    texte: "Nobody eventually agreed on the cause, but everyone accepted that something had to change. The report was comprehensive, the figures were actual rather than estimated, and the recommendations were sensible. What it lacked was anyone willing to put them into practice.",
    theme: "Faux amis en contexte",
    niveau: "B2",
    difficulte: 3,
    accent: "en-US",
    series: ["en-faux-amis-1", "en-faux-amis-2"],
  },
  {
    texte: "I used to think that fluency meant speaking without pausing. It does not. It means being understood, and understanding, without either side working too hard. The pauses are still there — you simply stop noticing them, and so does everyone else.",
    theme: "Réflexion",
    niveau: "B2",
    difficulte: 3,
    accent: "en-GB",
    series: ["en-pieges-verbes"],
  },
];
