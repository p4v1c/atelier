/**
 * Géographie — frontières, États et territoires.
 *
 * La carte politique est celle qui bouge : elle change à chaque traité, à
 * chaque indépendance. Ces notions portent sur ce qui la structure — voisins,
 * enclaves, États sans littoral, territoires qui ne sont pas des États.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_POLITIQUE: SeedSkill[] = [
  {
    slug: "geo-frontieres",
    category: "Frontières et voisins",
    title: "Qui touche qui",
    statement:
      "Connaître les voisins d'un pays, c'est comprendre ses guerres, ses routes et ses langues. C'est aussi la question qu'on rate le plus souvent sur une carte muette.",
    tip: "La France métropolitaine a huit voisins terrestres. Avec la Guyane, il faut y ajouter le Brésil et le Suriname : dix en tout.",
    difficulty: 2,
    exercises: [
      q(
        "Combien de pays la France métropolitaine touche-t-elle ?",
        ["Six", "Sept", "Huit", "Neuf"],
        2,
        "Huit : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre. En comptant la Guyane, s'ajoutent le Brésil et le Suriname — la France a donc une frontière avec le Brésil, sa plus longue."
      ),
      q(
        "Quel pays a le plus grand nombre de voisins terrestres ?",
        ["La Russie", "La Chine", "Le Brésil", "L'Allemagne"],
        0,
        "La Russie et la Chine en comptent quatorze chacune, selon les frontières retenues. La Russie s'étend sur onze fuseaux horaires, ce qu'aucun autre État ne fait."
      ),
      q(
        "Quel est le seul pays qui borde à la fois l'Atlantique et la Méditerranée ?",
        ["L'Espagne", "Le Maroc", "Les deux", "La France"],
        2,
        "L'Espagne et le Maroc bordent les deux, de part et d'autre du détroit de Gibraltar. La France aussi, si l'on compte la Manche comme atlantique — ce que fait la convention."
      ),
      q(
        "Quel pays est entièrement entouré par un seul autre pays ?",
        ["Le Portugal", "Le Lesotho", "Le Népal", "La Moldavie"],
        1,
        "Le Lesotho, enclavé dans l'Afrique du Sud. Deux autres États sont dans ce cas : Saint-Marin et le Vatican, tous deux entourés par l'Italie."
      ),
      q(
        "Quelle est la plus longue frontière terrestre entre deux pays ?",
        [
          "États-Unis et Mexique",
          "Canada et États-Unis",
          "Russie et Kazakhstan",
          "Chine et Mongolie",
        ],
        1,
        "Canada et États-Unis, environ 8 900 kilomètres en comptant l'Alaska. Elle suit en partie le 49ᵉ parallèle, tracé à la règle en 1818."
      ),
      q(
        "Quel pays européen ne touche que l'Espagne et la France ?",
        ["Monaco", "Andorre", "Saint-Marin", "Le Liechtenstein"],
        1,
        "Andorre, dans les Pyrénées. C'est une coprincipauté : ses chefs d'État sont l'évêque d'Urgell et le président de la République française."
      ),
      relie(
        "Relie chaque pays à un de ses voisins terrestres.",
        [
          ["Portugal", "Espagne"],
          ["Danemark", "Allemagne"],
          ["Corée du Sud", "Corée du Nord"],
          ["Bangladesh", "Inde"],
          ["Uruguay", "Brésil"],
        ],
        "Le Danemark n'a qu'un seul voisin terrestre, l'Allemagne — mais le Groenland, territoire danois, est bien plus vaste que le royaume lui-même."
      ),
      relie(
        "Relie chaque pays sans littoral à la région où il se trouve.",
        [
          ["Bolivie", "Amérique du Sud"],
          ["Tchad", "Afrique centrale"],
          ["Mongolie", "Asie de l'Est"],
          ["Autriche", "Europe centrale"],
          ["Népal", "Asie du Sud"],
        ],
        "La Bolivie a perdu son accès à la mer face au Chili en 1884 et entretient toujours une marine militaire, sur le lac Titicaca et les fleuves.",
        3
      ),
    ],
  },

  {
    slug: "geo-etats-territoires",
    category: "États et territoires",
    title: "États, micro-États et territoires",
    statement:
      "Tout ce qui a un drapeau n'est pas un État, et tout ce qui est reconnu n'a pas de siège à l'ONU. La carte politique a des degrés.",
    tip: "Un État souverain a un territoire, une population et un gouvernement effectif. La reconnaissance internationale est une quatrième condition, et c'est la plus disputée.",
    difficulty: 3,
    exercises: [
      q(
        "Quel est le plus petit État souverain du monde ?",
        ["Monaco", "Nauru", "Le Vatican", "Saint-Marin"],
        2,
        "Le Vatican, 0,44 km² et quelques centaines d'habitants. Monaco, deuxième, fait environ deux kilomètres carrés — cinq fois plus."
      ),
      q(
        "Combien d'États membres compte l'Organisation des Nations unies ?",
        ["Cent quatre-vingt-treize", "Cent quatre-vingt-seize", "Deux cents", "Deux cent six"],
        0,
        "Cent quatre-vingt-treize depuis l'entrée du Soudan du Sud en 2011. Le Vatican et la Palestine y ont un statut d'observateur, sans droit de vote."
      ),
      q(
        "Le Groenland appartient à quel État ?",
        ["La Norvège", "Le Danemark", "L'Islande", "Le Canada"],
        1,
        "Au Danemark, avec un très large statut d'autonomie depuis 2009. Il a quitté la Communauté européenne en 1985, alors que le Danemark y est resté."
      ),
      q(
        "Quel territoire est le plus vaste sans être un État souverain ?",
        ["Le Groenland", "La Sibérie", "Le Sahara occidental", "La Guyane"],
        0,
        "Le Groenland, plus de deux millions de kilomètres carrés — plus vaste que tous les pays d'Europe sauf la Russie, pour environ cinquante-six mille habitants."
      ),
      q(
        "Quel continent n'appartient à aucun État ?",
        ["L'Océanie", "L'Antarctique", "L'Arctique", "L'Amérique du Sud"],
        1,
        "L'Antarctique. Le traité de 1959 y gèle toutes les revendications territoriales et réserve le continent à la recherche scientifique. L'Arctique, lui, n'est pas un continent mais un océan."
      ),
      q(
        "Quel pays est à la fois en Europe et en Asie, avec sa capitale du côté asiatique ?",
        ["La Russie", "La Turquie", "Le Kazakhstan", "La Géorgie"],
        1,
        "La Turquie : Ankara est en Anatolie, donc en Asie, et Istanbul est à cheval sur les deux. La Russie et le Kazakhstan sont aussi transcontinentaux, mais leurs capitales sont du côté européen pour l'une, asiatique pour l'autre."
      ),
      relie(
        "Relie chaque territoire à l'État dont il dépend.",
        [
          ["Groenland", "Danemark"],
          ["Porto Rico", "États-Unis"],
          ["Nouvelle-Calédonie", "France"],
          ["Aruba", "Pays-Bas"],
          ["Gibraltar", "Royaume-Uni"],
        ],
        "Aucun de ces cinq territoires n'est dans l'Union européenne, alors que trois des États dont ils dépendent y sont. Le Groenland en est même sorti en 1985, sans que le Danemark le suive."
      ),
      relie(
        "Relie chaque micro-État européen à ce qui l'entoure.",
        [
          ["Vatican", "Rome"],
          ["Saint-Marin", "Italie"],
          ["Monaco", "France et la mer"],
          ["Liechtenstein", "Suisse et Autriche"],
          ["Andorre", "France et Espagne"],
        ],
        "Le Liechtenstein est doublement enclavé : il faut traverser deux frontières pour atteindre la mer. Seul l'Ouzbékistan est dans le même cas.",
        3
      ),
    ],
  },
];
