/**
 * Géographie — les drapeaux.
 *
 * Les drapeaux sont ici des caractères Unicode, pas des images : ils ne pèsent
 * rien, ne demandent aucun fichier et suivent la police du système. Le revers
 * est qu'ils se ressemblent à petite taille — raison de plus pour les
 * travailler par contraste, en appariement, plutôt qu'un par un.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_DRAPEAUX: SeedSkill[] = [
  {
    slug: "geo-drapeaux-europe",
    category: "Drapeaux",
    title: "Drapeaux d'Europe",
    statement:
      "Trois bandes verticales, trois bandes horizontales, une croix scandinave : l'Europe a peu de motifs et beaucoup de pays. Tout se joue sur l'ordre des couleurs.",
    tip: "Cinq pays nordiques portent la même croix décalée vers la hampe : Danemark, Suède, Norvège, Finlande, Islande. Seules les couleurs les séparent.",
    difficulty: 2,
    exercises: [
      q(
        "Quel pays porte un drapeau à trois bandes verticales verte, blanche et orange ?",
        ["Italie", "Irlande", "Côte d'Ivoire", "Inde"],
        1,
        "L'Irlande. Le vert y désigne les catholiques, l'orange les protestants, et le blanc la paix entre eux. La Côte d'Ivoire porte les mêmes couleurs dans l'ordre inverse : orange, blanc, vert."
      ),
      q(
        "Quel drapeau européen ne comporte ni bande ni croix ?",
        ["🇨🇭 la Suisse", "🇦🇹 l'Autriche", "🇧🇪 la Belgique", "🇱🇺 le Luxembourg"],
        0,
        "La Suisse, dont le drapeau est carré — le seul avec celui du Vatican — et porte une croix blanche centrée, sans déport vers la hampe."
      ),
      q(
        "Qu'est-ce qui distingue le drapeau des Pays-Bas de celui du Luxembourg ?",
        [
          "L'ordre des bandes",
          "La nuance du bleu et les proportions",
          "Le sens des bandes",
          "Rien, ils sont identiques",
        ],
        1,
        "Les deux sont rouge, blanc, bleu en bandes horizontales. Le bleu néerlandais est plus foncé, et le drapeau luxembourgeois est plus allongé. La ressemblance a valu au Luxembourg un long débat parlementaire."
      ),
      q(
        "Le drapeau 🇵🇱 de la Pologne se lit blanc en haut, rouge en bas. Quel pays porte l'inverse ?",
        ["🇦🇹 l'Autriche", "🇲🇨 Monaco", "🇭🇺 la Hongrie", "🇱🇻 la Lettonie"],
        1,
        "Monaco — et l'Indonésie, dont le drapeau est identique à celui de Monaco aux proportions près. L'Autriche ajoute une seconde bande rouge en bas."
      ),
      q(
        "Combien d'étoiles porte le drapeau de l'Union européenne ?",
        ["Autant que d'États membres", "Douze, quel que soit le nombre d'États", "Quinze", "Vingt-sept"],
        1,
        "Douze, et ce nombre n'a jamais bougé depuis 1955 : il n'a jamais désigné les États membres mais la perfection et la plénitude. L'élargissement ne le change pas."
      ),
      relie(
        "Relie chaque drapeau nordique à son pays.",
        [
          ["🇩🇰", "Danemark"],
          ["🇸🇪", "Suède"],
          ["🇳🇴", "Norvège"],
          ["🇫🇮", "Finlande"],
          ["🇮🇸", "Islande"],
        ],
        "Le Dannebrog danois est le plus ancien drapeau national encore en usage. Les quatre autres croix scandinaves en dérivent toutes."
      ),
      relie(
        "Relie chaque drapeau à trois bandes à son pays.",
        [
          ["🇫🇷", "France"],
          ["🇮🇹", "Italie"],
          ["🇩🇪", "Allemagne"],
          ["🇧🇪", "Belgique"],
          ["🇷🇴", "Roumanie"],
        ],
        "Belgique et Allemagne portent noir, jaune et rouge : la première en bandes verticales, la seconde en bandes horizontales."
      ),
      relie(
        "Relie chaque drapeau d'Europe centrale à son pays.",
        [
          ["🇵🇱", "Pologne"],
          ["🇨🇿", "Tchéquie"],
          ["🇸🇰", "Slovaquie"],
          ["🇭🇺", "Hongrie"],
          ["🇦🇹", "Autriche"],
        ],
        "Tchéquie et Slovaquie ont partagé le même drapeau jusqu'en 1993. La Tchéquie l'a gardé tel quel, la Slovaquie a ajouté ses armes.",
        3
      ),
    ],
  },

  {
    slug: "geo-drapeaux-monde",
    category: "Drapeaux",
    title: "Drapeaux du monde : les cas remarquables",
    statement:
      "Le seul drapeau non rectangulaire, le seul à deux faces différentes, celui qui porte une arme, celui qui porte un arbre. Les exceptions se retiennent mieux que les règles.",
    tip: "Un drapeau raconte presque toujours une histoire tenue en trois éléments : une couleur héritée, un symbole religieux ou dynastique, et une date.",
    difficulty: 2,
    exercises: [
      q(
        "Quel est le seul drapeau national qui ne soit pas rectangulaire ?",
        ["🇨🇭 la Suisse", "🇳🇵 le Népal", "🇻🇦 le Vatican", "🇶🇦 le Qatar"],
        1,
        "Le Népal, formé de deux fanions triangulaires superposés. La Suisse et le Vatican sont carrés, ce qui est rare mais reste rectangulaire au sens strict."
      ),
      q(
        "Quel drapeau porte un arbre en son centre ?",
        ["🇱🇧 le Liban", "🇨🇦 le Canada", "🇬🇭 le Ghana", "🇧🇷 le Brésil"],
        0,
        "Le Liban, dont le cèdre est mentionné dans la Bible et figure sur le drapeau depuis 1943. Le Canada porte une feuille d'érable, pas un arbre."
      ),
      q(
        "Quel drapeau national porte une arme à feu ?",
        ["🇿🇼 le Zimbabwe", "🇲🇿 le Mozambique", "🇦🇴 l'Angola", "🇨🇺 Cuba"],
        1,
        "Le Mozambique, dont le drapeau porte un fusil d'assaut croisé avec une houe et posé sur un livre — les trois symboles de la lutte, du travail et de l'éducation."
      ),
      q(
        "Que représentent les vingt-sept étoiles du drapeau brésilien ?",
        [
          "Les vingt-sept présidents de la République",
          "Le ciel de Rio le 15 novembre 1889",
          "Les vingt-sept langues parlées dans le pays",
          "Les vingt-sept premiers États fondateurs",
        ],
        1,
        "Le ciel austral tel qu'il se présentait au-dessus de Rio le matin de la proclamation de la République. Chaque étoile correspond à un État, mais leur disposition est celle des constellations."
      ),
      q(
        "Le drapeau du Japon 🇯🇵 porte un disque rouge. Que représente-t-il ?",
        ["La lune", "Le soleil", "Un sceau impérial", "Une fleur de cerisier"],
        1,
        "Le soleil — le pays s'appelle en japonais Nihon, l'origine du soleil. Le disque se dit hinomaru, littéralement « le cercle du soleil »."
      ),
      relie(
        "Relie chaque drapeau d'Amérique à son pays.",
        [
          ["🇨🇦", "Canada"],
          ["🇲🇽", "Mexique"],
          ["🇧🇷", "Brésil"],
          ["🇦🇷", "Argentine"],
          ["🇨🇱", "Chili"],
        ],
        "Le drapeau argentin porte un soleil de Mai, celui de l'Uruguay aussi : les deux pays sont nés de la même révolution de 1810."
      ),
      relie(
        "Relie chaque drapeau d'Asie à son pays.",
        [
          ["🇯🇵", "Japon"],
          ["🇰🇷", "Corée du Sud"],
          ["🇮🇳", "Inde"],
          ["🇹🇭", "Thaïlande"],
          ["🇻🇳", "Viêt Nam"],
        ],
        "Le drapeau sud-coréen porte le taegeuk, symbole du yin et du yang, entouré de quatre trigrammes tirés du Livre des mutations."
      ),
      relie(
        "Relie chaque drapeau d'Afrique à son pays.",
        [
          ["🇿🇦", "Afrique du Sud"],
          ["🇪🇬", "Égypte"],
          ["🇰🇪", "Kenya"],
          ["🇳🇬", "Nigeria"],
          ["🇪🇹", "Éthiopie"],
        ],
        "Le vert, le jaune et le rouge éthiopiens sont devenus les couleurs panafricaines : l'Éthiopie était le seul État africain jamais durablement colonisé.",
        3
      ),
    ],
  },

  {
    slug: "geo-drapeaux-pieges",
    category: "Drapeaux",
    title: "Les drapeaux qu'on confond",
    statement:
      "Roumanie et Tchad, Monaco et Indonésie, Irlande et Côte d'Ivoire, Australie et Nouvelle-Zélande. Des paires si proches qu'un détail seul les sépare.",
    tip: "Quand deux drapeaux se ressemblent, cherche le détail : une nuance de bleu, un nombre d'étoiles, le sens des bandes.",
    difficulty: 3,
    exercises: [
      q(
        "Quelle différence sépare le drapeau de la Roumanie de celui du Tchad ?",
        [
          "Le sens des bandes",
          "La nuance du bleu, presque rien d'autre",
          "Le nombre de bandes",
          "Une étoile centrale",
        ],
        1,
        "Les deux portent bleu, jaune et rouge en bandes verticales. Le bleu tchadien est plus foncé. Le Tchad a saisi l'ONU en 2004 pour faire changer le drapeau roumain, sans succès."
      ),
      q(
        "Qu'est-ce qui distingue le drapeau australien de celui de la Nouvelle-Zélande ?",
        [
          "Le nombre et la couleur des étoiles",
          "La présence de l'Union Jack",
          "La couleur du fond",
          "Le sens de la Croix du Sud",
        ],
        0,
        "L'Australie porte six étoiles blanches, dont une grande à sept branches sous l'Union Jack. La Nouvelle-Zélande n'en porte que quatre, rouges bordées de blanc."
      ),
      q(
        "Quel pays porte un drapeau identique à celui de Monaco, aux proportions près ?",
        ["🇵🇱 la Pologne", "🇮🇩 l'Indonésie", "🇦🇹 l'Autriche", "🇸🇬 Singapour"],
        1,
        "L'Indonésie. Rouge en haut, blanc en bas dans les deux cas ; le drapeau indonésien est simplement plus allongé. Monaco l'emploie depuis 1881, l'Indonésie depuis 1945."
      ),
      q(
        "Les drapeaux du Sénégal, du Mali et de la Guinée portent les mêmes couleurs. Comment se distinguent-ils ?",
        [
          "Par l'ordre des bandes et une étoile",
          "Par la forme",
          "Par la nuance du vert",
          "Ils sont identiques",
        ],
        0,
        "Les trois portent vert, jaune et rouge en bandes verticales. La Guinée les met dans l'ordre inverse du Mali, et le Sénégal ajoute une étoile verte au centre."
      ),
      q(
        "Quelle différence sépare le drapeau de l'Indonésie de celui de la Pologne ?",
        [
          "Les couleurs sont inversées",
          "La Pologne ajoute un aigle",
          "Le rouge n'est pas le même",
          "Les proportions seulement",
        ],
        0,
        "L'Indonésie porte le rouge en haut, la Pologne le blanc. Une inversion, et deux pays que rien d'autre ne rapproche."
      ),
      relie(
        "Relie chaque drapeau à son pays : attention aux voisins.",
        [
          ["🇮🇪", "Irlande"],
          ["🇨🇮", "Côte d'Ivoire"],
          ["🇮🇹", "Italie"],
          ["🇲🇽", "Mexique"],
          ["🇮🇳", "Inde"],
        ],
        "Irlande et Côte d'Ivoire portent les mêmes trois couleurs dans l'ordre inverse. Italie et Mexique partagent le vert, blanc, rouge — le Mexique y ajoute ses armes.",
        3
      ),
      relie(
        "Relie chaque drapeau à croix ou à bandes à son pays.",
        [
          ["🇬🇧", "Royaume-Uni"],
          ["🇬🇷", "Grèce"],
          ["🇵🇹", "Portugal"],
          ["🇪🇸", "Espagne"],
          ["🇹🇷", "Turquie"],
        ],
        "Le drapeau grec porte neuf bandes, une par syllabe de la devise de l'indépendance. Le portugais est l'un des rares à porter une sphère armillaire, instrument de navigation.",
        3
      ),
      relie(
        "Relie chaque drapeau du Moyen-Orient à son pays.",
        [
          ["🇮🇱", "Israël"],
          ["🇸🇦", "Arabie saoudite"],
          ["🇦🇪", "Émirats arabes unis"],
          ["🇯🇴", "Jordanie"],
          ["🇮🇷", "Iran"],
        ],
        "Le drapeau saoudien porte la profession de foi musulmane : il ne se met jamais en berne, et il est imprimé sur ses deux faces pour rester lisible dans le bon sens.",
        3
      ),
    ],
  },
];
