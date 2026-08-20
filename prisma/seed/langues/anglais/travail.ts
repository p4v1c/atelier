/**
 * Anglais — travail, études et expressions.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ANGLAIS_TRAVAIL: LotCartes[] = [
  {
    slug: "en-courriel",
    category: "Travail et études",
    title: "Écrire un courriel professionnel",
    statement:
      "Les formules d'un courriel anglais sont figées, et le registre se joue sur trois mots. Traduire les formules françaises mot à mot donne un ton systématiquement trop lourd.",
    tip: "L'anglais professionnel est plus direct que le français : « Please find attached » suffit là où le français déroule une phrase entière.",
    difficulty: 2,
    niveau: "B1",
    parle: true,
    cartes: [
      { etranger: "Dear Ms Clarke,", francais: "Madame Clarke,", note: "Ms est neutre et sûr. Mrs suppose mariée, Miss suppose non mariée : les deux sont datés." },
      { etranger: "I hope this email finds you well.", francais: "J'espère que vous allez bien.", note: "Formule d'ouverture standard, un peu convenue mais attendue." },
      { etranger: "I'm writing to ask about…", francais: "Je vous écris au sujet de…", aussi: ["Je me permets de vous écrire concernant…"] },
      { etranger: "Please find attached the report.", francais: "Veuillez trouver ci-joint le rapport.", note: "Attached et non « in attachment »." },
      { etranger: "Could you let me know by Friday?", francais: "Pourriez-vous me répondre d'ici vendredi ?" },
      { etranger: "Apologies for the late reply.", francais: "Désolé pour la réponse tardive.", aussi: ["Veuillez m'excuser pour ce retard."] },
      { etranger: "Thanks in advance.", francais: "Merci d'avance.", aussiEtranger: ["Thank you in advance."], note: "Plus léger que Thank you in advance, qui peut sonner insistant." },
      { etranger: "I'd appreciate a quick reply.", francais: "Une réponse rapide me rendrait service.", aussi: ["Je vous serais reconnaissant d'une réponse rapide."], note: "Plus direct que la formule d'attente, et parfaitement poli en anglais." },
      { etranger: "Kind regards,", francais: "Cordialement,", aussi: ["Bien à vous,"], aussiEtranger: ["Best regards,", "Regards,"], note: "Best regards est un cran plus chaleureux, Regards un cran plus sec." },
      { etranger: "Just a quick reminder about…", francais: "Petit rappel concernant…", aussi: ["Pour rappel,"] },
    ],
  },

  {
    slug: "en-reunion",
    category: "Travail et études",
    title: "Prendre la parole en réunion",
    statement:
      "Interrompre, nuancer, gagner du temps : ce sont ces phrases-là qui manquent en réunion, pas le vocabulaire technique.",
    tip: "Pour ne pas paraître brutal, l'anglais atténue avec un modal : « I'd say » plutôt que « I say ».",
    difficulty: 2,
    niveau: "B2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Sorry, could I just jump in here?", francais: "Excusez-moi, je peux intervenir ?", aussi: ["Je peux dire un mot ?"] },
      { etranger: "That's a fair point.", francais: "C'est un bon argument.", aussi: ["C'est juste."], aussiEtranger: ["Fair point."], note: "Sert à concéder avant de nuancer." },
      { etranger: "I see what you mean, but…", francais: "Je vois ce que tu veux dire, mais…" },
      { etranger: "Let me get back to you on that.", francais: "Je te réponds là-dessus plus tard.", aussi: ["Je reviens vers toi là-dessus."] },
      { etranger: "Can we park that for now?", francais: "On peut mettre ça de côté pour l'instant ?" },
      { etranger: "Just to be clear…", francais: "Pour être clair…", aussi: ["Que ce soit clair,"] },
      { etranger: "What's the deadline?", francais: "C'est pour quand ?", aussi: ["Quelle est l'échéance ?"] },
      { etranger: "I'll take that on.", francais: "Je m'en charge.", aussi: ["Je le prends."], aussiEtranger: ["I'll handle it.", "I'll take care of it."] },
      { etranger: "Are we all on the same page?", francais: "Tout le monde est d'accord ?", aussi: ["On est bien d'accord ?"] },
      { etranger: "Let's circle back next week.", francais: "On y revient la semaine prochaine.", note: "Très employé en entreprise, parfois moqué : à doser." },
    ],
  },

  {
    slug: "en-expressions",
    category: "Expressions",
    title: "Expressions qu'on entend partout",
    statement:
      "Des tournures figées qu'on ne devine pas depuis le français, et qui reviennent dans toutes les conversations et toutes les séries.",
    tip: "Une expression ne se traduit pas mot à mot : retiens l'image entière, pas les mots qui la composent.",
    difficulty: 3,
    niveau: "B2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "It's not rocket science.", francais: "Ce n'est pas sorcier.", aussi: ["Ce n'est pas compliqué."] },
      { etranger: "It rings a bell.", francais: "Ça me dit quelque chose." },
      { etranger: "Let's play it by ear.", francais: "On verra sur le moment.", aussi: ["On improvisera."] },
      { etranger: "I'm on the fence.", francais: "Je suis partagé.", aussi: ["Je n'arrive pas à me décider."] },
      { etranger: "That's a long shot.", francais: "C'est très peu probable.", aussi: ["Il y a peu de chances."] },
      { etranger: "It's a bit of a stretch.", francais: "C'est un peu tiré par les cheveux." },
      { etranger: "Bear with me.", francais: "Un instant, s'il te plaît.", aussi: ["Patiente un peu."], note: "Bear, supporter, et non beer." },
      { etranger: "It's up to you.", francais: "C'est comme tu veux.", aussi: ["À toi de voir."] },
      { etranger: "I can't be bothered.", francais: "Je n'ai pas le courage.", aussi: ["Ça me saoule."], note: "Très britannique, familier." },
      { etranger: "Fair enough.", francais: "D'accord, ça se tient.", aussi: ["Soit."], note: "Concède sans forcément approuver." },
    ],
  },
];
