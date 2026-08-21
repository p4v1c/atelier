/**
 * Géographie — climats, milieux, villes et populations.
 *
 * La géographie physique et la géographie humaine se répondent : un climat
 * décide d'un milieu, un milieu décide d'un peuplement. Ces trois notions
 * suivent cet enchaînement.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_MILIEUX: SeedSkill[] = [
  {
    slug: "geo-climats",
    category: "Climats et milieux",
    title: "Les grands climats",
    statement:
      "Chaud et humide toute l'année, chaud et sec l'été, froid et sec l'hiver : trois combinaisons de température et de précipitations suffisent à décrire l'essentiel de la planète.",
    tip: "Un climat se lit sur deux axes seulement : la température moyenne et la répartition des pluies dans l'année. Le reste en découle.",
    difficulty: 2,
    exercises: [
      q(
        "Qu'est-ce qui caractérise un climat méditerranéen ?",
        [
          "Des pluies réparties toute l'année",
          "Un été sec et chaud, un hiver doux et pluvieux",
          "Un hiver sec et un été pluvieux",
          "Une absence de saisons marquées",
        ],
        1,
        "L'été sec est le trait décisif : c'est lui qui explique la végétation coriace, le maquis, l'olivier. On le trouve aussi en Californie, au Chili central, au Cap et en Australie du Sud-Ouest."
      ),
      q(
        "Quel climat règne dans le bassin du Congo ?",
        ["Équatorial", "Tropical à saison sèche", "Désertique", "Océanique"],
        0,
        "Équatorial : chaud et humide toute l'année, sans véritable saison sèche. C'est ce climat qui permet la forêt dense, la deuxième du monde après l'Amazonie."
      ),
      q(
        "Qu'est-ce qu'un climat continental ?",
        [
          "Un climat sans hiver",
          "Un climat aux écarts de température très marqués entre été et hiver",
          "Un climat toujours humide",
          "Un climat de haute altitude",
        ],
        1,
        "L'éloignement de la mer supprime l'effet régulateur de l'océan : l'été est chaud, l'hiver rigoureux. Moscou et Winnipeg en sont des exemples."
      ),
      q(
        "Pourquoi les déserts se trouvent-ils souvent vers le trentième parallèle ?",
        [
          "Parce que le soleil y est le plus fort",
          "À cause de la descente d'air sec des cellules de Hadley",
          "Parce que les vents y sont absents",
          "À cause de la proximité des pôles",
        ],
        1,
        "L'air monte à l'équateur, se déleste de son humidité en pluies, puis redescend sec vers les trentièmes parallèles. Sahara, Arabie, Kalahari, Atacama et déserts australiens s'alignent tous sur ces bandes."
      ),
      q(
        "Quel courant marin adoucit le climat de l'Europe de l'Ouest ?",
        ["Le courant de Humboldt", "La dérive nord-atlantique", "Le courant du Labrador", "Le Kuroshio"],
        1,
        "La dérive nord-atlantique, prolongement du Gulf Stream. Elle explique qu'Oslo, à la latitude du sud du Groenland, ait un port libre de glace toute l'année."
      ),
      q(
        "Qu'appelle-t-on la mousson ?",
        [
          "Un vent qui change de sens selon la saison",
          "Une tempête tropicale",
          "Une pluie continue toute l'année",
          "Un courant marin chaud",
        ],
        0,
        "Un renversement saisonnier des vents : ils soufflent de la mer vers la terre l'été, apportant les pluies, et de la terre vers la mer l'hiver. L'agriculture de l'Asie du Sud en dépend entièrement."
      ),
      relie(
        "Relie chaque climat au milieu qu'il produit.",
        [
          ["Équatorial", "forêt dense"],
          ["Tropical à saison sèche", "savane"],
          ["Aride", "désert"],
          ["Continental froid", "taïga"],
          ["Polaire", "toundra"],
        ],
        "La taïga, forêt de conifères qui ceinture l'hémisphère nord, est le plus vaste biome terrestre — devant la forêt équatoriale."
      ),
      relie(
        "Relie chaque ville au climat qui la caractérise.",
        [
          ["Marseille", "méditerranéen"],
          ["Brest", "océanique"],
          ["Moscou", "continental"],
          ["Singapour", "équatorial"],
          ["Le Caire", "aride"],
        ],
        "Brest et Marseille sont à moins de six cents kilomètres l'une de l'autre à vol d'oiseau, et n'ont ni les mêmes pluies, ni les mêmes arbres.",
        3
      ),
    ],
  },

  {
    slug: "geo-villes-populations",
    category: "Villes et populations",
    title: "Les villes et le peuplement",
    statement:
      "Plus de la moitié de l'humanité vit en ville depuis 2007. Les plus grandes agglomérations ne sont pas là où on les attend, et les pays les plus peuplés changent de rang.",
    tip: "Une ville, une agglomération et une aire urbaine ne se comptent pas de la même façon : un même lieu peut passer du simple au triple selon la définition retenue.",
    difficulty: 2,
    exercises: [
      q(
        "Quelle est l'agglomération la plus peuplée du monde ?",
        ["Delhi", "Tokyo", "Shanghai", "São Paulo"],
        1,
        "Tokyo, environ trente-sept millions d'habitants dans son aire urbaine — davantage que la population du Canada. Delhi la talonne et la dépassera sans doute."
      ),
      q(
        "Quels sont les deux pays les plus peuplés du monde ?",
        [
          "Chine et États-Unis",
          "Inde et Chine",
          "Chine et Indonésie",
          "Inde et Indonésie",
        ],
        1,
        "L'Inde a dépassé la Chine en 2023 : chacune compte plus d'un milliard quatre cents millions d'habitants. Les États-Unis, troisièmes, en comptent environ un quart."
      ),
      q(
        "Quel continent connaît la plus forte croissance démographique ?",
        ["L'Asie", "L'Afrique", "L'Amérique du Sud", "L'Europe"],
        1,
        "L'Afrique, dont la population devrait doubler d'ici 2050. L'Europe, elle, décroît ou stagne dans la plupart de ses pays."
      ),
      q(
        "Qu'appelle-t-on une mégapole ?",
        [
          "Une capitale",
          "Une agglomération de plus de dix millions d'habitants",
          "Une ville avec un métro",
          "La plus grande ville d'un pays",
        ],
        1,
        "Le seuil communément retenu est dix millions d'habitants. Il y en avait deux en 1950 — New York et Tokyo — et plus d'une trentaine aujourd'hui."
      ),
      q(
        "Quel pays a la plus forte densité de population parmi ceux-ci ?",
        ["Le Bangladesh", "Les Pays-Bas", "Le Japon", "L'Inde"],
        0,
        "Le Bangladesh, plus de mille habitants au kilomètre carré — sur un delta inondable. Les Pays-Bas, les plus denses d'Europe, sont à environ cinq cents."
      ),
      q(
        "Quelle part de l'humanité vit en ville aujourd'hui, approximativement ?",
        ["Un tiers", "La moitié", "Plus de la moitié", "Neuf sur dix"],
        2,
        "Un peu plus de la moitié, et le seuil a été franchi vers 2007. La part devrait atteindre les deux tiers vers 2050."
      ),
      relie(
        "Relie chaque mégapole à son pays.",
        [
          ["Lagos", "Nigeria"],
          ["Karachi", "Pakistan"],
          ["Dacca", "Bangladesh"],
          ["Le Caire", "Égypte"],
          ["Mexico", "Mexique"],
        ],
        "Mexico est bâtie sur un ancien lac asséché : la ville s'enfonce de plusieurs centimètres par an, et certains quartiers ont perdu plus de dix mètres depuis un siècle."
      ),
      relie(
        "Relie chaque pays à son ordre de grandeur de population.",
        [
          ["Inde", "environ 1,4 milliard"],
          ["États-Unis", "environ 340 millions"],
          ["Brésil", "environ 215 millions"],
          ["France", "environ 68 millions"],
          ["Islande", "environ 400 000"],
        ],
        "L'Islande compte moins d'habitants que la ville de Nice. C'est l'État européen le moins densément peuplé, et de très loin.",
        3
      ),
    ],
  },
];
