/**
 * Géographie — les mers et les océans sur la carte.
 *
 * C'est la partie du module où l'on clique sur du vide, et c'est le contraire
 * d'un défaut : la mer n'a pas de contour dessiné sur la carte. Rien ne
 * signale la Méditerranée, il faut savoir que c'est là.
 *
 * Les limites employées sont CONVENTIONNELLES : l'Organisation hydrographique
 * internationale les fixe par des lignes entre des caps, et les cartes ne
 * s'accordent pas toutes. L'exercice ne demande donc pas de suivre un rivage
 * au pixel, mais de savoir où se trouve une étendue d'eau — voir l'en-tête de
 * scripts/generer-cartes.mjs.
 *
 * Les grands océans reviennent sur plusieurs cartes, et ce ne sont pas des
 * doublons : reconnaître l'Atlantique sur le planisphère, où il n'est qu'une
 * moitié de l'image, n'est pas le même geste que le désigner au large du
 * Portugal.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { mer } from "./commun";

/** [carte, mot-clé de la zone, nom sur le fond, consigne, ce qu'on apprend] */
type Ligne = [string, string, string, string, string, (1 | 2 | 3)?];

const MERS: Ligne[] = [
  ["europe", "mediterranee", "Mer Méditerranée", "Clique sur la mer Méditerranée.", "Presque fermée : elle ne communique avec l'Atlantique que par les quinze kilomètres du détroit de Gibraltar. Sans ce goulet, elle s'assécherait en un millier d'années.", 1],
  ["europe", "mer-du-nord", "Mer du Nord", "Clique sur la mer du Nord.", "Peu profonde — une centaine de mètres en moyenne — parce qu'elle recouvre un plateau continental qui était une plaine à l'époque glaciaire. D'où ses champs de pétrole et ses parcs éoliens.", 2],
  ["europe", "mer-baltique", "Mer Baltique", "Clique sur la mer Baltique.", "L'eau la moins salée du monde à cette taille : les fleuves y déversent plus qu'elle n'en évapore, et son unique sortie est étroite. Elle gèle chaque hiver dans sa partie nord.", 2],
  ["europe", "la-manche", "La Manche", "Clique sur la Manche.", "Trente-quatre kilomètres au plus étroit, au pas de Calais. C'est le détroit le plus fréquenté du monde : quelque cinq cents navires par jour.", 2],
  ["europe", "mer-noire", "Mer Noire", "Clique sur la mer Noire.", "Sous cent cinquante mètres, ses eaux sont privées d'oxygène : c'est le plus grand volume d'eau anoxique de la planète, et rien n'y vit hors des bactéries.", 2],
  ["europe", "mer-de-norvege", "Mer de Norvège", "Clique sur la mer de Norvège.", "Elle ne gèle pas, malgré la latitude : la dérive nord-atlantique y pousse des eaux tempérées, ce qui rend habitables des côtes situées au-delà du cercle polaire.", 3],
  ["europe", "ocean-atlantique", "Océan Atlantique", "Clique sur l'océan Atlantique.", "Il s'élargit d'environ deux centimètres par an : la dorsale médio-atlantique écarte l'Europe de l'Amérique, et l'Islande est posée dessus.", 1],

  ["afrique", "mer-rouge", "Mer Rouge", "Clique sur la mer Rouge.", "Une mer en train de naître : l'Afrique et l'Arabie s'écartent, et ce fossé sera un océan dans quelques millions d'années. C'est l'une des plus chaudes et des plus salées du globe.", 2],
  ["afrique", "golfe-de-guinee", "Golfe de Guinée", "Clique sur le golfe de Guinée.", "Le point du globe où le méridien de Greenwich croise l'équateur y tombe : les coordonnées zéro-zéro sont en pleine eau, au large du Ghana.", 2],
  ["afrique", "canal-du-mozambique", "Canal du Mozambique", "Clique sur le canal du Mozambique.", "Il sépare Madagascar du continent sur quatre cents kilomètres au plus étroit — assez pour que l'île ait développé une faune qu'on ne trouve nulle part ailleurs.", 3],
  ["afrique", "ocean-indien", "Océan Indien", "Clique sur l'océan Indien.", "Le seul océan dont la circulation s'inverse deux fois par an : la mousson renverse les vents, et avec eux les courants de surface. La navigation à voile en dépendait.", 2],
  ["afrique", "mediterranee", "Mer Méditerranée", "Clique sur la mer Méditerranée.", "Vue depuis l'Afrique, elle borde le Maghreb, la Libye et l'Égypte sur près de quatre mille kilomètres. Le canal de Suez la relie à la mer Rouge depuis 1869.", 2],
  ["afrique", "ocean-atlantique", "Océan Atlantique", "Clique sur l'océan Atlantique.", "C'est par cette façade que l'Afrique de l'Ouest a été reliée aux Amériques, et le golfe de Guinée en est le fond. Le courant de Benguela, froid, longe la Namibie et lui vaut son désert.", 2],

  ["asie", "golfe-persique", "Golfe Persique", "Clique sur le golfe Persique.", "Peu profond — cinquante mètres en moyenne — et bordé par les plus grandes réserves de pétrole du monde. Le détroit d'Ormuz, à sa sortie, voit passer un cinquième du pétrole mondial.", 2],
  ["asie", "mer-caspienne", "Mer Caspienne", "Clique sur la mer Caspienne.", "Le plus grand lac du monde, sans communication avec l'océan. On l'appelle mer parce que son eau est salée et sa taille immense — son statut juridique a occupé cinq États pendant vingt ans.", 2],
  ["asie", "mer-d-arabie", "Mer d'Arabie", "Clique sur la mer d'Arabie.", "Entre la corne de l'Afrique et l'Inde. La mousson d'été y lève des vents si réguliers que les navigateurs arabes les utilisaient pour faire l'aller-retour dans l'année.", 3],
  ["asie", "golfe-du-bengale", "Golfe du Bengale", "Clique sur le golfe du Bengale.", "Le plus grand golfe du monde. Sa forme en entonnoir amplifie les ondes de tempête, ce qui en fait la région la plus meurtrière du globe pour les cyclones.", 2],
  ["asie", "mer-de-chine-meridionale", "Mer de Chine méridionale", "Clique sur la mer de Chine méridionale.", "Un tiers du trafic maritime mondial y passe. Ses îlots, souvent minuscules, sont revendiqués par six États à la fois.", 2],
  ["asie", "mer-de-chine-orientale", "Mer de Chine orientale", "Clique sur la mer de Chine orientale.", "Entre la Chine, la Corée et le Japon. Le Kuroshio, courant chaud venu des tropiques, la traverse et réchauffe l'archipel japonais.", 3],
  ["asie", "mer-jaune", "Mer Jaune", "Clique sur la mer Jaune.", "Elle doit son nom aux limons que le fleuve Jaune y déverse : l'eau en prend la couleur sur des dizaines de kilomètres au large.", 3],
  ["asie", "mer-du-japon", "Mer du Japon", "Clique sur la mer du Japon.", "Presque fermée par l'archipel japonais. L'air froid de Sibérie s'y charge d'humidité et donne à la côte ouest du Japon l'un des enneigements les plus lourds du monde.", 3],
  ["asie", "mer-rouge", "Mer Rouge", "Clique sur la mer Rouge.", "Vue depuis l'Asie, elle borde l'Arabie sur toute sa longueur. Le détroit de Bab el-Mandeb, à son extrémité sud, ne fait que trente kilomètres.", 3],
  ["asie", "mer-noire", "Mer Noire", "Clique sur la mer Noire.", "Elle ne communique avec la Méditerranée que par le Bosphore et les Dardanelles, deux détroits turcs qui commandent tout l'accès maritime de la région.", 2],
  ["asie", "ocean-indien", "Océan Indien", "Clique sur l'océan Indien.", "Il baigne l'Asie du Sud par le sud. Le séisme de 2004, au large de Sumatra, y a déclenché un tsunami qui a traversé l'océan entier en quelques heures.", 2],

  ["ameriques", "mer-des-caraibes", "Mer des Caraïbes", "Clique sur la mer des Caraïbes.", "Fermée par un arc d'îles qui va de Cuba à Trinité. Le Gulf Stream y prend naissance avant de contourner la Floride et de traverser l'Atlantique.", 1],
  ["ameriques", "golfe-du-mexique", "Golfe du Mexique", "Clique sur le golfe du Mexique.", "Un cratère d'impact de cent quatre-vingts kilomètres en borde le sud, à Chicxulub : celui de l'astéroïde qui a mis fin au Crétacé.", 2],
  ["ameriques", "baie-d-hudson", "Baie d'Hudson", "Clique sur la baie d'Hudson.", "Assez vaste pour que le poids des glaces de la dernière ère glaciaire y ait creusé la croûte terrestre : la gravité y est mesurablement plus faible qu'ailleurs.", 3],
  ["ameriques", "mer-de-bering", "Mer de Béring", "Clique sur la mer de Béring.", "Son détroit sépare l'Asie de l'Amérique par quatre-vingts kilomètres. Au dernier maximum glaciaire, c'était une plaine, et les premiers Américains l'ont franchie à pied.", 3],
  ["ameriques", "ocean-pacifique", "Océan Pacifique", "Clique sur l'océan Pacifique.", "Plus vaste que toutes les terres émergées réunies. Sa bordure américaine fait partie de la ceinture de feu : c'est là que se produisent la plupart des séismes du globe.", 1],
  ["ameriques", "ocean-atlantique", "Océan Atlantique", "Clique sur l'océan Atlantique.", "Côté américain, il reçoit l'Amazone, qui déverse assez d'eau douce pour dessaler la mer à cent cinquante kilomètres au large.", 2],

  ["monde", "ocean-pacifique", "Océan Pacifique", "Clique sur l'océan Pacifique.", "Sur un planisphère centré sur l'Europe, il est coupé en deux et apparaît des deux côtés de l'image : c'est le premier piège des cartes, et la meilleure façon de comprendre qu'une projection découpe.", 2],
  ["monde", "ocean-atlantique", "Océan Atlantique", "Clique sur l'océan Atlantique.", "Le seul océan qui s'étende d'un pôle à l'autre en une seule pièce, entre deux continents qui se sont séparés il y a cent quatre-vingts millions d'années.", 1],
  ["monde", "ocean-indien", "Océan Indien", "Clique sur l'océan Indien.", "Presque entièrement dans l'hémisphère sud, fermé au nord par l'Asie : c'est cette fermeture qui empêche ses eaux chaudes de s'échapper et qui gouverne la mousson.", 2],
  ["monde", "mediterranee", "Mer Méditerranée", "Clique sur la mer Méditerranée.", "À l'échelle du planisphère, elle n'est plus qu'un trait entre l'Europe et l'Afrique — et c'est pourtant la mer intérieure la plus grande du monde.", 2],
];

export const GEO_MERS: SeedSkill[] = [
  {
    slug: "geo-mers",
    category: "Mers et océans",
    title: "Les mers et les océans",
    statement:
      "Trente-quatre étendues d'eau, et rien pour les signaler : la carte ne dessine pas les limites d'une mer. Il faut savoir que c'est là.",
    tip: "Repérez d'abord ce qui ferme : un golfe se lit par ses deux caps, une mer intérieure par son détroit. Le nom vient presque toujours de la terre qui la borde.",
    difficulty: 2,
    exercises: MERS.map(([region, cible, nom, consigne, explication, difficulty]) =>
      mer(region, cible, nom, consigne, explication, { difficulty })
    ),
  },
];
