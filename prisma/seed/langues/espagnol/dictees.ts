/**
 * Espagnol — les dictées.
 *
 * L'accent alterne entre l'Espagne et l'Amérique latine. Ce n'est pas
 * cosmétique : le seseo, le vocabulaire et le vouvoiement pluriel diffèrent
 * assez pour qu'une oreille habituée à un seul des deux soit perdue devant
 * l'autre.
 */
import type { DicteeLangue } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_DICTEES: DicteeLangue[] = [
  {
    texte: "Me llamo Clara y tengo veintiocho años. Vivo en Nantes, en el oeste de Francia. Trabajo en una librería pequeña, cerca del río. Me gusta mi trabajo porque conozco a gente interesante.",
    theme: "Se présenter",
    niveau: "A1",
    difficulte: 1,
    accent: "es-ES",
    series: ["es-presentation"],
  },
  {
    texte: "Es lunes por la mañana y otra vez voy con retraso. Me levanto a las siete, desayuno rápido y cojo el autobús. A esa hora siempre está lleno.",
    theme: "La journée ordinaire",
    niveau: "A1",
    difficulte: 1,
    accent: "es-ES",
    series: ["es-quotidien"],
  },
  {
    texte: "Perdone, ¿me puede decir dónde está la estación? Tengo un tren a las cuatro y media y no quiero perderlo. ¿Está lejos de aquí o se puede ir andando?",
    theme: "Demander son chemin",
    niveau: "A1",
    difficulte: 1,
    accent: "es-MX",
    series: ["es-voyage"],
  },
  {
    texte: "El fin de semana pasado fuimos a la costa. Hacía frío pero el cielo estaba despejado, y caminamos durante horas por la playa. Por la noche encontramos un restaurante pequeño y cenamos pescado.",
    theme: "Raconter un week-end",
    niveau: "A2",
    difficulte: 2,
    accent: "es-ES",
    series: ["es-conj-passes"],
  },
  {
    texte: "Llevo tres años estudiando español, pero todavía me cuesta entender las películas sin subtítulos. La gente habla mucho más rápido que en clase y usa expresiones que ningún libro me enseñó.",
    theme: "Apprendre une langue",
    niveau: "A2",
    difficulte: 2,
    accent: "es-MX",
    series: ["es-conj-passes"],
  },
  {
    texte: "Estimada señora Ruiz: le escribo en relación con el puesto anunciado en su página web. Adjunto mi currículum y una carta de presentación. Quedo a su disposición para cualquier información. Un saludo, Clara Dupont.",
    theme: "Écrire un courriel",
    niveau: "B1",
    difficulte: 2,
    accent: "es-ES",
    series: ["es-travail"],
  },
  {
    texte: "La reunión no salió como esperábamos. La mitad del equipo ya se había ido cuando por fin llegó el cliente, y nadie había preparado las cifras que pedía. Quedamos en vernos otra vez el jueves.",
    theme: "Au bureau",
    niveau: "B1",
    difficulte: 2,
    accent: "es-MX",
    series: ["es-travail", "es-conj-passes"],
  },
  {
    texte: "Lo que más sorprende al visitante de Madrid no es su tamaño, sino sus rincones tranquilos. Detrás de las calles llenas hay plazas donde nadie tiene prisa, donde un señor mayor lee el periódico y el tráfico suena como una tormenta lejana.",
    theme: "Décrire un lieu",
    niveau: "B2",
    difficulte: 3,
    accent: "es-ES",
    series: ["es-ser-estar"],
  },
  {
    texte: "Cuando llegues, avísame para que vaya a buscarte. No creo que haya mucho tráfico a esa hora, pero es posible que el tren llegue con retraso. Ojalá tengas razón y salga todo bien.",
    theme: "Le subjonctif en situation",
    niveau: "B1",
    difficulte: 3,
    accent: "es-MX",
    series: ["es-conj-subjonctif"],
  },
  {
    texte: "Antes pensaba que hablar con soltura era hablar sin pararse. No lo es. Es que te entiendan y entender tú, sin que ninguno de los dos tenga que esforzarse demasiado. Las pausas siguen ahí; simplemente dejas de notarlas.",
    theme: "Réflexion",
    niveau: "B2",
    difficulte: 3,
    accent: "es-ES",
    series: ["es-por-para"],
  },
];
