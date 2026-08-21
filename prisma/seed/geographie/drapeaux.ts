/**
 * Géographie — du drapeau au pays.
 *
 * Reconnaître un drapeau et savoir où est le pays sont deux savoirs, et le
 * second manque presque toujours. La série ne pose donc qu'une question :
 * le drapeau s'affiche, et l'on clique le pays sur la carte.
 *
 * Le nom n'apparaît nulle part — ni dans la consigne, ni sur le dessin. C'est
 * le contrôle du type d'exercice qui l'impose, pas la bonne volonté de
 * l'auteur : une consigne qui nommerait la cible sous une amorce est refusée.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { pays } from "./commun";

const CONSIGNE = "Quel pays porte ce drapeau ? Clique dessus sur la carte.";

/** [carte, code ISO numérique, nom sur le fond, drapeau, ce qu'on apprend] */
type Ligne = [string, string, string, string, string, (1 | 2 | 3)?];

const DRAPEAUX: Ligne[] = [
  ["europe", "250", "France", "🇫🇷", "Le bleu et le rouge sont les couleurs de Paris, le blanc celui de la monarchie : le drapeau de 1794 place la ville de part et d'autre du roi.", 1],
  ["europe", "276", "Allemagne", "🇩🇪", "Noir, rouge, or : les couleurs des volontaires de 1813, reprises par la révolution de 1848, puis par la République fédérale en 1949.", 1],
  ["europe", "380", "Italie", "🇮🇹", "Vert, blanc, rouge, adoptés en 1797 sur le modèle du tricolore français — la disposition verticale vient de là.", 1],
  ["europe", "724", "Espagne", "🇪🇸", "Rouge et jaune choisis en 1785 par Charles III pour une raison pratique : reconnaître ses navires de loin, en mer, sans confusion possible.", 1],
  ["europe", "620", "Portugal", "🇵🇹", "La sphère armillaire, au centre, est l'instrument des navigateurs : le pays a mis sur son drapeau l'outil qui l'a fait connaître le monde.", 2],
  ["europe", "300", "Grèce", "🇬🇷", "Neuf bandes pour les neuf syllabes de « Eleftheria i thanatos » — la liberté ou la mort, mot d'ordre de la guerre d'indépendance.", 2],
  ["europe", "752", "Suède", "🇸🇪", "La croix scandinave est décalée vers la hampe. Tous les drapeaux nordiques la portent ainsi : c'est ce décalage qui fait la famille.", 2],
  ["europe", "756", "Suisse", "🇨🇭", "Carré, ce qui n'arrive qu'à deux États au monde — l'autre est le Vatican. Le pavillon maritime, lui, est rectangulaire.", 1],
  ["europe", "616", "Pologne", "🇵🇱", "Blanc au-dessus, rouge en dessous. Retourné, c'est celui de Monaco et de l'Indonésie : l'ordre des bandes est tout ce qui les sépare.", 2],
  ["europe", "528", "Pays-Bas", "🇳🇱", "La bande du haut était orange, couleur de la maison régnante. Le pigment virait au rouge en mer, et l'usage a fini par l'emporter.", 2],
  ["europe", "372", "Irlande", "🇮🇪", "Vert pour les catholiques, orange pour les protestants, blanc pour la paix entre les deux. Le drapeau dit un programme, pas un paysage.", 2],
  ["europe", "578", "Norvège", "🇳🇴", "Une croix scandinave bleue bordée de blanc sur fond rouge : les trois couleurs de la France, dans la grammaire du Nord.", 2],
  ["europe", "40", "Autriche", "🇦🇹", "Rouge, blanc, rouge : l'un des plus anciens d'Europe, attesté au XIIIᵉ siècle. La légende veut qu'il vienne d'une tunique ensanglantée sauf sous la ceinture.", 2],
  ["europe", "191", "Croatie", "🇭🇷", "Le damier rouge et blanc, la šahovnica, est l'emblème du pays depuis le Moyen Âge — bien avant l'État moderne.", 2],
  ["europe", "792", "Turquie", "🇹🇷", "Croissant et étoile hérités de l'Empire ottoman. Le motif a essaimé de là vers une bonne partie du monde musulman.", 2],

  ["afrique", "504", "Maroc", "🇲🇦", "L'étoile verte à cinq branches, ajoutée en 1915, est un sceau de Salomon : le fond rouge, lui, est celui des chérifs depuis le XVIIᵉ siècle.", 2],
  ["afrique", "818", "Égypte", "🇪🇬", "Rouge, blanc, noir : les couleurs panarabes. L'aigle de Saladin au centre distingue le pays de la Syrie, du Yémen et de l'Irak, qui partagent les mêmes bandes.", 2],
  ["afrique", "404", "Kenya", "🇰🇪", "Un bouclier et deux lances masaï au centre — le seul drapeau national à porter une arme traditionnelle plutôt qu'un symbole abstrait.", 2],
  ["afrique", "710", "Afrique du Sud", "🇿🇦", "Six couleurs et un Y couché, adoptés en 1994 : le motif dit deux histoires qui convergent, et c'est le seul drapeau à six couleurs sans blason.", 2],
  ["afrique", "566", "Nigéria", "🇳🇬", "Vert, blanc, vert. Le vert dit les terres cultivées d'un pays qui compte le plus grand nombre d'habitants du continent.", 2],
  ["afrique", "686", "Sénégal", "🇸🇳", "Vert, jaune, rouge — les couleurs panafricaines — avec une étoile verte au centre, qui le sépare du Mali et de la Guinée.", 3],
  ["afrique", "231", "Éthiopie", "🇪🇹", "C'est de lui que viennent les couleurs panafricaines : seul État du continent à n'avoir jamais été durablement colonisé, il a servi de modèle aux autres.", 2],
  ["afrique", "288", "Ghana", "🇬🇭", "Rouge, jaune, vert avec une étoile noire : premier pays d'Afrique subsaharienne indépendant, en 1957, il a repris les couleurs éthiopiennes.", 3],
  ["afrique", "788", "Tunisie", "🇹🇳", "Croissant et étoile rouges dans un disque blanc sur fond rouge — un dessin ottoman, adopté dès 1831.", 2],

  ["asie", "392", "Japon", "🇯🇵", "Le Hinomaru : un disque rouge, rien d'autre. Le nom du pays s'écrit « origine du soleil », et le drapeau ne dit que cela.", 1],
  ["asie", "410", "Corée du Sud", "🇰🇷", "Le taegeuk au centre, quatre trigrammes du Yi King aux angles : le ciel, la terre, l'eau et le feu.", 2],
  ["asie", "156", "Chine", "🇨🇳", "Une grande étoile et quatre petites, disposées en arc. Les quatre représentent les classes sociales rassemblées autour du Parti.", 1],
  ["asie", "356", "Inde", "🇮🇳", "La roue d'Ashoka, au centre, compte vingt-quatre rayons. Elle a remplacé le rouet de Gandhi à l'indépendance, en 1947.", 2],
  ["asie", "704", "Viêt Nam", "🇻🇳", "Une étoile jaune à cinq branches sur fond rouge, adoptée en 1945 — les cinq branches pour les cinq groupes sociaux.", 2],
  ["asie", "764", "Thaïlande", "🇹🇭", "Cinq bandes, dont la bleue centrale est deux fois plus large : elle représente la monarchie, entre la nation et la religion.", 2],
  ["asie", "376", "Israël", "🇮🇱", "Les deux bandes bleues rappellent le talit, le châle de prière ; l'étoile de David au centre date du XIXᵉ siècle comme emblème national.", 2],
  ["asie", "422", "Liban", "🇱🇧", "Le cèdre, arbre du pays, cité dans la Bible et exploité depuis l'Antiquité pour la marine phénicienne puis égyptienne.", 2],
  ["asie", "682", "Arabie Saoudite", "🇸🇦", "Il porte la profession de foi musulmane et un sabre. Parce qu'il porte un texte sacré, il n'est jamais mis en berne.", 2],
  ["asie", "524", "Népal", "🇳🇵", "Le seul drapeau national qui ne soit pas rectangulaire : deux fanions superposés, avec un soleil et une lune.", 2],
  ["asie", "360", "Indonésie", "🇮🇩", "Rouge sur blanc — presque exactement celui de Monaco, à quelques centimètres de proportion près. Les deux États s'en accommodent depuis 1945.", 2],

  ["ameriques", "76", "Brésil", "🇧🇷", "Le ciel de Rio le 15 novembre 1889, au moment de la proclamation de la République : vingt-sept étoiles, une par État, à leur position réelle.", 1],
  ["ameriques", "32", "Argentine", "🇦🇷", "Le soleil de Mai, au centre, rappelle le soulèvement de mai 1810 contre l'Espagne. Le bleu ciel serait celui du ciel de Buenos Aires ce jour-là.", 2],
  ["ameriques", "124", "Canada", "🇨🇦", "La feuille d'érable date de 1965 seulement : avant, le pays arborait un pavillon britannique. Elle compte onze pointes, sans signification particulière.", 1],
  ["ameriques", "484", "Mexique", "🇲🇽", "Un aigle dévorant un serpent sur un cactus : la vision qui, selon la légende aztèque, désignait l'emplacement de Tenochtitlán.", 2],
  ["ameriques", "192", "Cuba", "🇨🇺", "Trois bandes bleues, deux blanches, un triangle rouge à l'étoile solitaire. Le dessin date de 1849, bien avant l'indépendance.", 2],
  ["ameriques", "604", "Pérou", "🇵🇪", "Rouge, blanc, rouge en bandes verticales. La tradition veut que San Martín ait choisi ces couleurs après avoir vu des flamants roses.", 2],
  ["ameriques", "170", "Colombie", "🇨🇴", "La bande jaune occupe la moitié du drapeau. Les couleurs viennent de la Grande Colombie, que le pays a partagée avec le Venezuela et l'Équateur.", 3],
  ["ameriques", "152", "Chili", "🇨🇱", "Une étoile blanche dans un carré bleu, une bande blanche, une bande rouge. Il précède de trente ans le drapeau du Texas, qui lui ressemble.", 2],

  ["monde", "36", "Australie", "🇦🇺", "L'Union Jack au canton, la Croix du Sud à droite, et sous le drapeau britannique une étoile à sept branches : six États et les territoires.", 2],
  ["monde", "643", "Russie", "🇷🇺", "Blanc, bleu, rouge, repris de Pierre le Grand en 1699 et rétabli en 1991. Ces couleurs ont essaimé dans presque tout le monde slave.", 1],
];

export const GEO_DRAPEAUX: SeedSkill[] = [
  {
    slug: "geo-drapeaux",
    category: "Drapeaux",
    title: "Les drapeaux, sur la carte",
    statement:
      "Quarante-cinq drapeaux. Reconnaître celui du Ghana est une chose ; savoir où poser le doigt en est une autre, et c'est celle qui reste.",
    tip: "Les familles aident plus que la mémoire : croix décalée au nord de l'Europe, vert-jaune-rouge en Afrique, croissant et étoile dans l'ancien monde ottoman.",
    difficulty: 2,
    exercises: DRAPEAUX.map(([region, cible, nom, drapeau, explication, difficulty]) =>
      pays(region, cible, nom, CONSIGNE, explication, { amorce: drapeau, difficulty })
    ),
  },
];
