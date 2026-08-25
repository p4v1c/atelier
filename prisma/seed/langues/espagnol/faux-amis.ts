/**
 * Espagnol — faux amis et pièges du français.
 *
 * L'espagnol ressemble tellement au français que la confiance y est plus
 * dangereuse qu'en anglais : on invente un mot en changeant la terminaison, et
 * une fois sur trois il existe avec un autre sens.
 */
import type { LotCartes } from "../../../../src/modules/langues/commun";

export const ESPAGNOL_FAUX_AMIS: LotCartes[] = [
  {
    slug: "es-faux-amis-1",
    category: "Faux amis",
    title: "Les faux amis qui font rire",
    statement:
      "Des mots espagnols qui ressemblent trait pour trait à un mot français et disent tout autre chose. Certains sont seulement faux, d'autres sont franchement gênants.",
    tip: "En espagnol, la ressemblance avec le français est la règle : c'est justement pour ça que les exceptions se retiennent mal.",
    difficulty: 2,
    niveau: "B1",
    cartes: [
      {
        etranger: "embarazada",
        francais: "enceinte",
        note: "Et non « embarrassée », qui se dit avergonzada ou incómoda. Le contresens est classique et mémorable.",
      },
      {
        etranger: "constipado",
        francais: "enrhumé",
        note: "« Constipé » se dit estreñido. Estoy constipado veut dire qu'on a attrapé froid.",
      },
      {
        etranger: "largo",
        francais: "long",
        note: "« Large » se dit ancho. Un río largo est un fleuve long, un río ancho un fleuve large.",
      },
      {
        etranger: "la ropa",
        francais: "les vêtements",
        note: "Une corde se dit la cuerda. Tendre la ropa, c'est étendre le linge.",
      },
      {
        etranger: "el éxito",
        francais: "le succès",
        aussi: ["la réussite"],
        note: "La sortie se dit la salida. Tener éxito, c'est réussir.",
      },
      {
        etranger: "sensato",
        francais: "raisonnable",
        aussi: ["sensé"],
        note: "L'espagnol sensible, lui, est un vrai ami : il veut bien dire sensible. C'est l'inverse exact du piège anglais, où sensible veut dire raisonnable.",
      },
      {
        etranger: "el bufete",
        francais: "le cabinet d'avocats",
        note: "Un buffet où l'on mange est un bufé, et le meuble un aparador.",
      },
      {
        etranger: "quitar",
        francais: "enlever",
        aussi: ["retirer", "ôter"],
        note: "« Quitter » se dit dejar ou salir de. Quitar la mesa, c'est débarrasser la table.",
      },
      {
        etranger: "el suceso",
        francais: "l'événement",
        aussi: ["le fait divers"],
        note: "Le succès se dit el éxito. Un suceso de presse est souvent un fait divers, plutôt tragique.",
      },
      {
        etranger: "discutir",
        francais: "se disputer",
        aussi: ["débattre"],
        note: "Discuter tranquillement se dit hablar ou charlar. Discutir suppose un désaccord.",
      },
    ],
  },

  {
    slug: "es-faux-amis-2",
    category: "Faux amis",
    title: "Faux amis de la vie courante",
    statement:
      "Moins spectaculaires que les premiers, mais plus fréquents : ceux-là passent inaperçus et faussent la phrase entière.",
    tip: "Devant un mot transparent, demande-toi s'il est trop transparent : c'est souvent le signe.",
    difficulty: 2,
    niveau: "B1",
    cartes: [
      { etranger: "el equipaje", francais: "les bagages", note: "L'équipement se dit el equipo, qui veut aussi dire l'équipe." },
      { etranger: "la carta", francais: "la lettre", note: "Aussi le menu au restaurant. Une carte routière est un mapa." },
      { etranger: "el vaso", francais: "le verre", note: "Un vase se dit un jarrón. Et el vidrio est le verre comme matière." },
      { etranger: "la entrada", francais: "le billet d'entrée", aussi: ["l'entrée"], note: "L'entrée d'un repas se dit el primer plato." },
      { etranger: "el compromiso", francais: "l'engagement", note: "Un compromis au sens de concession se dit un acuerdo. Sin compromiso : sans engagement." },
      { etranger: "asistir a", francais: "assister à", note: "Vrai ami, contrairement à l'anglais to assist. Aider se dit ayudar." },
      { etranger: "actualmente", francais: "actuellement", note: "Vrai ami aussi : c'est l'anglais actually qui est le traître." },
      { etranger: "la fábrica", francais: "l'usine", note: "Un tissu se dit una tela ; la fabrique française vient du même mot latin." },
      { etranger: "sano", francais: "en bonne santé", aussi: ["sain"], note: "Sain d'esprit se dit cuerdo. Et sano y salvo : sain et sauf." },
      { etranger: "gracioso", francais: "drôle", aussi: ["amusant"], note: "Gracieux au sens élégant se dit elegante ; gratuit se dit gratis." },
    ],
  },

  {
    slug: "es-ser-estar",
    category: "Grammaire en contexte",
    title: "Ser ou estar",
    statement:
      "Deux verbes pour « être », et le choix change le sens de la phrase. C'est la difficulté centrale de l'espagnol pour un francophone.",
    tip: "Ser dit ce qu'une chose est, estar dit où elle est et comment elle va. Ce qui dure prend ser, ce qui passe prend estar.",
    difficulty: 3,
    niveau: "A2",
    parle: true,
    oral: true,
    cartes: [
      { etranger: "Soy francés.", francais: "Je suis français.", note: "L'origine ne change pas : ser." },
      { etranger: "Estoy cansado.", francais: "Je suis fatigué.", note: "Un état passager : estar." },
      { etranger: "Es médica.", francais: "Elle est médecin.", note: "La profession relève de l'identité : ser, et sans article." },
      { etranger: "Está en casa.", francais: "Il est à la maison.", note: "Une personne ou une chose se situe avec estar. Un événement, lui, se situe avec ser : ¿dónde es la fiesta?" },
      {
        etranger: "La sopa es buena.",
        francais: "La soupe est bonne.",
        note: "En général, c'est une bonne soupe. Está buena voudrait dire qu'elle est bonne maintenant, à cette table.",
      },
      {
        etranger: "El café está frío.",
        francais: "Le café est froid.",
        note: "Il a refroidi : estar. Es frío décrirait un café servi froid par nature.",
      },
      { etranger: "Es la una.", francais: "Il est une heure.", note: "L'heure prend toujours ser." },
      { etranger: "Estoy de acuerdo.", francais: "Je suis d'accord.", note: "Expression figée avec estar." },
      {
        etranger: "Es aburrido.",
        francais: "Il est ennuyeux.",
        note: "C'est quelqu'un d'ennuyeux. Está aburrido veut dire qu'il s'ennuie.",
      },
      { etranger: "¿Dónde está el baño?", francais: "Où sont les toilettes ?", note: "Localisation : estar, sans hésiter." },
    ],
  },

  {
    slug: "es-por-para",
    category: "Grammaire en contexte",
    title: "Por ou para",
    statement:
      "Le français dit « pour » dans les deux cas. L'espagnol distingue la cause du but, et le passage de la destination.",
    tip: "Para regarde devant : le but, le destinataire, l'échéance. Por regarde derrière ou autour : la cause, le moyen, le passage.",
    difficulty: 3,
    niveau: "B1",
    parle: true,
    cartes: [
      { etranger: "Es para ti.", francais: "C'est pour toi.", note: "Destinataire : para." },
      { etranger: "Gracias por todo.", francais: "Merci pour tout.", note: "La cause du remerciement : por." },
      { etranger: "Salgo para Madrid.", francais: "Je pars pour Madrid.", note: "Destination : para." },
      { etranger: "Paso por Madrid.", francais: "Je passe par Madrid.", note: "Passage : por." },
      { etranger: "Lo hice por ti.", francais: "Je l'ai fait à cause de toi.", aussi: ["Je l'ai fait pour toi."], note: "Por ti : à cause de toi, en ton honneur. Para ti : pour te le donner." },
      { etranger: "Para mañana.", francais: "Pour demain.", note: "Échéance : para." },
      { etranger: "Por la mañana.", francais: "Le matin.", note: "Une période approximative : por." },
      { etranger: "Estudio para ser médico.", francais: "J'étudie pour devenir médecin.", note: "But : para suivi de l'infinitif." },
      { etranger: "Lo compré por veinte euros.", francais: "Je l'ai acheté vingt euros.", note: "L'échange, le prix : por." },
      { etranger: "Para mí, es un error.", francais: "Pour moi, c'est une erreur.", note: "Point de vue : para." },
    ],
  },
];
