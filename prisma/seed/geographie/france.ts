/**
 * Géographie — la France et l'outre-mer.
 *
 * La matière la plus proche, et celle qu'on connaît le plus mal : les treize
 * régions métropolitaines ont changé de nom et de contour en 2016, et l'outre-mer
 * est ce qui fait de la France un pays présent sur trois océans.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_FRANCE: SeedSkill[] = [
  {
    slug: "geo-france-regions",
    category: "France et outre-mer",
    title: "Les régions et leurs préfectures",
    statement:
      "Treize régions métropolitaines depuis 2016, contre vingt-deux auparavant. Les fusions ont produit des noms neufs, et des chefs-lieux qu'on cherche encore.",
    tip: "Le chef-lieu d'une région n'est pas toujours sa plus grande ville : en Normandie, Rouen est chef-lieu, mais Le Havre et Caen la talonnent.",
    difficulty: 2,
    exercises: [
      q(
        "Combien de régions compte la France métropolitaine depuis 2016 ?",
        ["Douze", "Treize", "Vingt-deux", "Dix-huit"],
        1,
        "Treize, contre vingt-deux avant la réforme. En comptant les cinq régions d'outre-mer, la France en compte dix-huit au total."
      ),
      q(
        "Quel est le chef-lieu de la région Grand Est ?",
        ["Metz", "Nancy", "Strasbourg", "Reims"],
        2,
        "Strasbourg, qui était déjà celui de l'Alsace. La région réunit l'Alsace, la Lorraine et la Champagne-Ardenne."
      ),
      q(
        "Quel est le chef-lieu de la Nouvelle-Aquitaine ?",
        ["Poitiers", "Limoges", "Bordeaux", "Pau"],
        2,
        "Bordeaux. La région est la plus vaste de France métropolitaine — plus étendue que l'Autriche — et réunit l'Aquitaine, le Limousin et le Poitou-Charentes."
      ),
      q(
        "Quelle région porte le nom d'Occitanie ?",
        [
          "L'ancienne Provence",
          "La fusion du Languedoc-Roussillon et de Midi-Pyrénées",
          "L'ancienne Aquitaine",
          "La fusion de l'Auvergne et du Limousin",
        ],
        1,
        "Languedoc-Roussillon et Midi-Pyrénées, avec Toulouse pour chef-lieu. Le nom renvoie à la langue d'oc, parlée historiquement sur un territoire bien plus large."
      ),
      q(
        "Quel est le plus haut sommet de France ?",
        ["Le pic du Midi", "Le mont Blanc", "La Barre des Écrins", "Le Vignemale"],
        1,
        "Le mont Blanc, environ 4 810 mètres, entre Haute-Savoie et Val d'Aoste italien. La Barre des Écrins, 4 102 mètres, est le plus haut sommet entièrement français."
      ),
      q(
        "Quel fleuve traverse Toulouse ?",
        ["La Garonne", "Le Tarn", "L'Adour", "L'Aude"],
        0,
        "La Garonne, qui prend sa source dans les Pyrénées espagnoles et rejoint la Dordogne pour former l'estuaire de la Gironde."
      ),
      relie(
        "Relie chaque région à son chef-lieu.",
        [
          ["Bretagne", "Rennes"],
          ["Normandie", "Rouen"],
          ["Hauts-de-France", "Lille"],
          ["Pays de la Loire", "Nantes"],
          ["Centre-Val de Loire", "Orléans"],
        ],
        "Nantes est le chef-lieu des Pays de la Loire et non de la Bretagne, alors qu'elle fut la capitale historique du duché : le découpage de 1956 l'a rattachée à l'autre région."
      ),
      relie(
        "Relie chaque région à son chef-lieu.",
        [
          ["Auvergne-Rhône-Alpes", "Lyon"],
          ["Bourgogne-Franche-Comté", "Dijon"],
          ["Provence-Alpes-Côte d'Azur", "Marseille"],
          ["Occitanie", "Toulouse"],
          ["Corse", "Ajaccio"],
        ],
        "La Corse n'est pas une région mais une collectivité territoriale unique depuis 2018, avec des compétences propres.",
        3
      ),
    ],
  },

  {
    slug: "geo-france-outremer",
    category: "France et outre-mer",
    title: "L'outre-mer",
    statement:
      "Trois océans, douze territoires, et le deuxième domaine maritime du monde. L'outre-mer est ce qui fait de la France une puissance présente partout.",
    tip: "La France a une frontière terrestre avec le Brésil — la plus longue de toutes ses frontières —, grâce à la Guyane.",
    difficulty: 2,
    exercises: [
      q(
        "Quel territoire donne à la France sa plus longue frontière terrestre ?",
        ["La Nouvelle-Calédonie", "La Guyane", "Mayotte", "La Réunion"],
        1,
        "La Guyane, dont la frontière avec le Brésil dépasse sept cents kilomètres — plus du double de la frontière avec l'Espagne."
      ),
      q(
        "Dans quel océan se trouve La Réunion ?",
        ["L'Atlantique", "L'océan Indien", "Le Pacifique", "L'océan Austral"],
        1,
        "L'océan Indien, à l'est de Madagascar, avec Maurice pour proche voisine. Son volcan, le piton de la Fournaise, est l'un des plus actifs du monde."
      ),
      q(
        "Quel rang occupe la France pour l'étendue de son domaine maritime ?",
        ["Premier", "Deuxième", "Cinquième", "Dixième"],
        1,
        "Deuxième, derrière les États-Unis : plus de dix millions de kilomètres carrés de zone économique exclusive, dont l'immense majorité vient de l'outre-mer."
      ),
      q(
        "Mayotte est devenue département français en quelle année ?",
        ["1946", "1976", "2011", "1999"],
        2,
        "2011, à l'issue d'un référendum. C'est le plus récent département français, et le cent unième."
      ),
      q(
        "Quelle collectivité française se trouve au large de Terre-Neuve ?",
        [
          "La Guadeloupe",
          "Saint-Pierre-et-Miquelon",
          "Saint-Martin",
          "Wallis-et-Futuna",
        ],
        1,
        "Saint-Pierre-et-Miquelon, dernier vestige de la Nouvelle-France en Amérique du Nord, à vingt-cinq kilomètres des côtes canadiennes."
      ),
      q(
        "Quel territoire français est le plus peuplé d'outre-mer ?",
        ["La Guadeloupe", "La Réunion", "La Martinique", "La Nouvelle-Calédonie"],
        1,
        "La Réunion, plus de huit cent mille habitants — davantage que les trois autres départements américains réunis pris séparément."
      ),
      relie(
        "Relie chaque territoire à la mer ou à l'océan qui le borde.",
        [
          ["Guadeloupe", "mer des Caraïbes"],
          ["La Réunion", "océan Indien"],
          ["Polynésie française", "Pacifique sud"],
          ["Guyane", "Atlantique équatorial"],
          ["Saint-Pierre-et-Miquelon", "Atlantique nord"],
        ],
        "La Polynésie française s'étend sur une surface aussi vaste que l'Europe, pour une terre émergée de quatre mille kilomètres carrés — l'essentiel est de l'eau."
      ),
      relie(
        "Relie chaque territoire à son voisin le plus proche.",
        [
          ["Guyane", "Brésil"],
          ["Mayotte", "Comores"],
          ["Saint-Martin", "Sint Maarten"],
          ["Saint-Pierre-et-Miquelon", "Canada"],
          ["La Réunion", "Maurice"],
        ],
        "L'île de Saint-Martin est partagée entre la France et les Pays-Bas depuis 1648 : c'est la plus petite île du monde divisée entre deux États.",
        3
      ),
    ],
  },
];
