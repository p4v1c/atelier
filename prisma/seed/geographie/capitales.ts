/**
 * Géographie — un module d'essai, écrit pour vérifier que la promesse tient :
 * ajouter une matière ne demande qu'un fichier de contenu et deux lignes.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { qcm } from "../../../src/modules/kinds/qcm";

const q = (question: string, choices: string[], answerIndex: number, explanation: string) => ({
  kind: qcm.id,
  payload: { question, choices, answerIndex, explanation },
  difficulty: 2 as const,
  batch: "geo-essai",
});

export const GEO_SKILLS: SeedSkill[] = [
  {
    slug: "geo-capitales-europe",
    category: "Capitales",
    title: "Capitales d'Europe, les moins évidentes",
    statement:
      "Les capitales qu'on confond : celles des pays baltes, des Balkans et de quelques États où la plus grande ville n'est pas la capitale.",
    tip: "Quand un pays a une grande ville célèbre, méfie-toi : ce n'est pas toujours elle la capitale.",
    difficulty: 2,
    exercises: [
      q("Quelle est la capitale de la Suisse ?", ["Zurich", "Genève", "Berne", "Bâle"], 2,
        "Berne. Zurich est la plus grande ville et Genève la plus internationale, mais le siège fédéral est à Berne depuis 1848."),
      q("Quelle est la capitale de la Turquie ?", ["Istanbul", "Ankara", "Izmir", "Bursa"], 1,
        "Ankara, choisie par Mustafa Kemal en 1923 pour marquer la rupture avec l'Empire ottoman. Istanbul reste la plus peuplée."),
      q("Quelle est la capitale de la Slovénie ?", ["Zagreb", "Bratislava", "Ljubljana", "Sarajevo"], 2,
        "Ljubljana. Zagreb est croate, Bratislava slovaque — la confusion entre Slovénie et Slovaquie est si fréquente que leurs ambassades s'échangeaient le courrier."),
      q("Quelle est la capitale du Portugal ?", ["Porto", "Lisbonne", "Coimbra", "Braga"], 1,
        "Lisbonne, sur le Tage. Porto, au nord, a donné son nom au pays et au vin."),
      q("Quelle est la capitale de la Lettonie ?", ["Vilnius", "Riga", "Tallinn", "Kaunas"], 1,
        "Riga. Du nord au sud : Tallinn en Estonie, Riga en Lettonie, Vilnius en Lituanie."),
      q("Quelle est la capitale des Pays-Bas ?", ["La Haye", "Rotterdam", "Amsterdam", "Utrecht"], 2,
        "Amsterdam est la capitale constitutionnelle, mais le gouvernement, le Parlement et le roi siègent à La Haye. Le cas est unique en Europe."),
      q("Quelle est la capitale de la Bosnie-Herzégovine ?", ["Belgrade", "Podgorica", "Sarajevo", "Skopje"], 2,
        "Sarajevo. Belgrade est serbe, Podgorica monténégrine, Skopje macédonienne."),
    ],
  },
  {
    slug: "geo-fleuves",
    category: "Reliefs et fleuves",
    title: "Fleuves : où se jettent-ils ?",
    statement:
      "L'embouchure d'un fleuve dit beaucoup de l'histoire des régions qu'il traverse. Ces sept-là reviennent sans arrêt.",
    tip: "Un fleuve se jette dans la mer, une rivière dans un autre cours d'eau. La Moselle est une rivière, le Rhin un fleuve.",
    difficulty: 2,
    exercises: [
      q("Dans quelle mer le Danube se jette-t-il ?", ["la mer Noire", "la mer Adriatique", "la mer Égée", "la mer Baltique"], 0,
        "La mer Noire, par un vaste delta partagé entre la Roumanie et l'Ukraine. Le Danube traverse dix pays, record mondial."),
      q("Dans quel océan la Volga se jette-t-elle ?", ["l'océan Arctique", "aucun", "l'océan Atlantique", "l'océan Pacifique"], 1,
        "Aucun : la Volga finit dans la mer Caspienne, qui est un lac fermé. C'est le plus long fleuve d'Europe."),
      q("Où le Rhône se jette-t-il ?", ["dans l'Atlantique", "dans la Méditerranée", "dans la mer du Nord", "dans le Rhin"], 1,
        "Dans la Méditerranée, par la Camargue. Il naît pourtant en Suisse, dans les Alpes, comme le Rhin — qui part, lui, vers le nord."),
      q("Quel fleuve traverse Vienne, Budapest et Belgrade ?", ["l'Elbe", "le Danube", "la Vistule", "l'Oder"], 1,
        "Le Danube, seule capitale européenne triplement reliée par un même fleuve. Bratislava s'y ajoute, ce qui en fait quatre."),
      q("Dans quelle mer la Seine se jette-t-elle ?", ["la Manche", "la mer du Nord", "l'Atlantique", "la mer Celtique"], 0,
        "La Manche, par l'estuaire du Havre. La Loire et la Garonne, elles, rejoignent l'Atlantique."),
      q("Quel est le plus long fleuve du monde ?", ["l'Amazone", "le Nil", "le Yangzi Jiang", "le Mississippi"], 1,
        "Le Nil, environ 6 650 km, même si la mesure est disputée : selon la source retenue pour l'Amazone, celle-ci pourrait le dépasser."),
      q("Quel fleuve sépare le Texas du Mexique ?", ["le Colorado", "le Rio Grande", "le Missouri", "le Pecos"], 1,
        "Le Rio Grande, appelé Río Bravo côté mexicain. Il sert de frontière sur plus de 2 000 kilomètres."),
    ],
  },
];
