/**
 * Espagnol — verbes et travail.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_VERBES: LotCartes[] = [
  {
    slug: "es-irreguliers",
    category: "Verbes",
    title: "Verbes irréguliers au présent",
    statement:
      "Les irrégularités les plus fréquentes, données en phrase. La plupart suivent des schémas : la diphtongue e→ie, o→ue, et la première personne en -go.",
    tip: "L'irrégularité touche souvent toutes les personnes sauf nosotros et vosotros : pensar donne pienso mais pensamos.",
    difficulty: 2,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Tengo que irme.", francais: "Je dois y aller.", note: "tener → tengo. Première personne en -go, comme hacer → hago." },
      { etranger: "Duermo poco entre semana.", francais: "Je dors peu en semaine.", note: "dormir → duermo. Diphtongue o→ue, comme poder et volver." },
      { etranger: "Quiero verlo.", francais: "Je veux le voir.", note: "querer → quiero. Diphtongue e→ie." },
      { etranger: "¿Qué piensas?", francais: "Qu'est-ce que tu en penses ?", note: "pensar → piensas, mais pensamos reste régulier." },
      { etranger: "Vengo enseguida.", francais: "J'arrive tout de suite.", note: "venir → vengo. Enseguida : tout de suite." },
      { etranger: "Digo la verdad.", francais: "Je dis la vérité.", note: "decir → digo, avec e→i en plus du -go." },
      { etranger: "Salgo a las ocho.", francais: "Je sors à huit heures.", note: "salir → salgo." },
      { etranger: "Conozco a su hermana.", francais: "Je connais sa sœur.", note: "conocer → conozco. Le a devant une personne est obligatoire." },
      { etranger: "Juego al fútbol.", francais: "Je joue au football.", note: "jugar → juego, seul verbe à diphtonguer u→ue." },
      { etranger: "Doy un paseo.", francais: "Je fais une promenade.", note: "dar → doy, comme estar → estoy et ir → voy." },
    ],
  },

  {
    slug: "es-passe",
    category: "Grammaire en contexte",
    title: "Imparfait ou passé simple",
    statement:
      "Le choix entre imperfecto et indefinido ne dépend pas de la durée, mais du rôle : l'un plante le décor, l'autre fait avancer le récit.",
    tip: "L'imparfait décrit et dure ; le passé simple survient et fait avancer. Dans un récit, les deux alternent phrase après phrase.",
    difficulty: 3,
    niveau: "B1",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Llovía cuando salimos.", francais: "Il pleuvait quand nous sommes sortis.", note: "Le décor à l'imparfait, l'événement au passé simple : c'est le schéma le plus fréquent." },
      { etranger: "Mientras cocinaba, sonó el teléfono.", francais: "Pendant que je cuisinais, le téléphone a sonné.", note: "Mientras appelle l'imparfait ; ce qui interrompt prend le passé simple." },
      { etranger: "La casa era grande y tenía un jardín.", francais: "La maison était grande et avait un jardin.", note: "Une description ne fait pas avancer le récit : imparfait." },
      { etranger: "El año pasado fui a México.", francais: "L'an dernier je suis allé au Mexique.", note: "ir et ser ont la même forme au passé simple : fui." },
      { etranger: "Estaba cansado, así que me acosté.", francais: "J'étais fatigué, alors je me suis couché.", note: "L'état à l'imparfait, la décision au passé simple." },
      { etranger: "Lo supe ayer.", francais: "Je l'ai appris hier.", note: "Saber au passé simple veut dire apprendre ; à l'imparfait, sabía, il veut dire savoir." },
      { etranger: "Se lo dije la semana pasada.", francais: "Je le lui ai dit la semaine dernière." },
      { etranger: "No quiso venir.", francais: "Il a refusé de venir.", note: "Querer au passé simple dit l'acte ; no quería aurait dit l'envie qui manquait." },
      { etranger: "Cuando llegué, ya se habían ido.", francais: "Quand je suis arrivé, ils étaient déjà partis." },
      { etranger: "De niño iba mucho al campo.", francais: "Enfant, j'allais souvent à la campagne.", note: "L'habitude dans le passé prend l'imparfait ; ir → iba, l'un des trois seuls irréguliers." },
    ],
  },

  {
    slug: "es-travail",
    category: "Travail et études",
    title: "Écrire et travailler en espagnol",
    statement:
      "Le courriel espagnol est moins formel que le français, mais plus que l'anglais. Les formules de clôture sont codifiées.",
    tip: "« Un saludo » suffit dans la plupart des cas ; « Atentamente » est réservé à ce qui est vraiment officiel.",
    difficulty: 2,
    niveau: "B1",
    parle: true,
    cartes: [
      { etranger: "Estimada señora Ruiz:", francais: "Madame Ruiz,", note: "Deux points et non une virgule après l'appel : c'est la norme espagnole." },
      { etranger: "Le escribo en relación con…", francais: "Je vous écris au sujet de…" },
      { etranger: "Adjunto el informe.", francais: "Je joins le rapport.", aussi: ["Ci-joint le rapport."] },
      { etranger: "Quedo a su disposición.", francais: "Je reste à votre disposition." },
      { etranger: "¿Podría confirmarme la fecha?", francais: "Pourriez-vous me confirmer la date ?" },
      { etranger: "Disculpe la demora.", francais: "Veuillez excuser le retard.", note: "La demora : le délai, le retard." },
      { etranger: "Un saludo,", francais: "Cordialement,", aussiEtranger: ["Un cordial saludo,", "Saludos,"], note: "Un cordial saludo est un cran au-dessus, Atentamente le plus formel." },
      { etranger: "Tenemos una reunión el martes.", francais: "Nous avons une réunion mardi.", note: "El martes, avec l'article : « mardi » sans article se dirait autrement." },
      { etranger: "¿Cuál es el plazo?", francais: "Quelle est l'échéance ?", aussi: ["C'est pour quand ?"] },
      { etranger: "Me encargo yo.", francais: "Je m'en charge.", aussiEtranger: ["Yo me encargo.", "Me encargo."], note: "Le yo final insiste : c'est moi qui m'en occupe." },
    ],
  },

  {
    slug: "es-expressions",
    category: "Expressions",
    title: "Expressions du quotidien",
    statement:
      "Des tournures figées qu'on entend dans toutes les conversations et qui ne se devinent pas depuis le français.",
    tip: "Retiens l'expression entière : la traduire mot à mot ne donne jamais rien de compréhensible.",
    difficulty: 3,
    niveau: "B2",
    oral: true,
    cartes: [
      // « Vale. » seul était le seul mot isolé d'un lot déclaré oral : à la
      // dictée, un mot de quatre lettres sans contexte se joue à pile ou face.
      // Remis dans une phrase, il s'entend et s'apprend.
      { etranger: "Vale, quedamos así.", francais: "D'accord, on fait comme ça.", aussi: ["Entendu, on fait comme ça."], note: "Vale est le mot le plus employé d'Espagne. En Amérique latine, on dira plutôt bueno ou listo." },
      { etranger: "No pasa nada.", francais: "Ce n'est pas grave.", aussi: ["Pas de souci."] },
      { etranger: "Ni idea.", francais: "Aucune idée." },
      { etranger: "Me da igual.", francais: "Ça m'est égal.", aussi: ["Peu importe."] },
      { etranger: "Qué va.", francais: "Mais non.", aussi: ["Pas du tout."], note: "Dément vivement ce qui vient d'être dit." },
      { etranger: "Estoy hasta las narices.", francais: "J'en ai par-dessus la tête.", aussi: ["J'en ai marre."] },
      { etranger: "Menos mal.", francais: "Heureusement.", aussi: ["Encore heureux."] },
      { etranger: "Da lo mismo.", francais: "C'est pareil.", aussi: ["Ça revient au même."] },
      { etranger: "En seguida vuelvo.", francais: "Je reviens tout de suite." },
      { etranger: "Poco a poco.", francais: "Petit à petit.", note: "Se dit aussi de quelqu'un qui progresse lentement mais sûrement." },
    ],
  },
];
