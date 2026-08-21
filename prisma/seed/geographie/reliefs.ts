/**
 * Géographie — le relief, l'eau douce, l'eau salée.
 *
 * Trois notions qui se tiennent : un fleuve naît d'un relief et finit dans une
 * mer. Les questions suivent ce fil plutôt que de traiter chaque objet
 * séparément.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_RELIEFS: SeedSkill[] = [
  {
    slug: "geo-fleuves",
    category: "Reliefs et fleuves",
    title: "Les grands fleuves et leurs embouchures",
    statement:
      "Un fleuve se jette dans la mer, une rivière dans un autre cours d'eau. Savoir où finit un fleuve en dit plus long sur un continent que sa longueur.",
    tip: "Le Nil et l'Amazone se disputent le titre du plus long : la mesure dépend de la source qu'on retient, et l'écart est de quelques dizaines de kilomètres.",
    difficulty: 2,
    exercises: [
      q(
        "Dans quelle mer le Danube se jette-t-il ?",
        ["La mer Noire", "La mer Adriatique", "La mer Baltique", "La mer Égée"],
        0,
        "La mer Noire, par un vaste delta partagé entre la Roumanie et l'Ukraine. Le Danube traverse ou borde dix pays — davantage qu'aucun autre fleuve au monde."
      ),
      q(
        "Quel fleuve traverse le plus grand nombre de capitales ?",
        ["Le Rhin", "Le Danube", "Le Nil", "Le Mississippi"],
        1,
        "Le Danube, qui passe par Vienne, Bratislava, Budapest et Belgrade. Aucun autre fleuve n'en traverse autant."
      ),
      q(
        "Quel fleuve a le plus fort débit du monde ?",
        ["Le Nil", "L'Amazone", "Le Congo", "Le Yangzi Jiang"],
        1,
        "L'Amazone, et de très loin : elle déverse à elle seule environ un cinquième de l'eau douce qui rejoint les océans. Le Congo, deuxième, en déverse cinq fois moins."
      ),
      q(
        "Où le Rhône prend-il sa source ?",
        ["Dans les Cévennes", "Dans le Jura", "Dans les Alpes suisses", "Au lac du Bourget"],
        2,
        "Au glacier du Rhône, dans le canton du Valais. Il traverse le lac Léman avant d'entrer en France à Genève, puis se jette en Méditerranée par la Camargue."
      ),
      q(
        "Quel fleuve sépare en grande partie les États-Unis du Mexique ?",
        ["Le Colorado", "Le Rio Grande", "Le Mississippi", "Le Missouri"],
        1,
        "Le Rio Grande, appelé Río Bravo côté mexicain. Il forme la frontière sur près de deux mille kilomètres, du Texas au golfe du Mexique."
      ),
      q(
        "Le Volga se jette dans une mer qui n'a aucun accès à l'océan. Laquelle ?",
        ["La mer Noire", "La mer d'Aral", "La mer Caspienne", "La mer Morte"],
        2,
        "La Caspienne, le plus grand lac du monde — on l'appelle mer à cause de sa taille et de sa salinité. Le Volga est le plus long fleuve d'Europe."
      ),
      relie(
        "Relie chaque fleuve à la mer ou à l'océan où il se jette.",
        [
          ["Le Nil", "La Méditerranée"],
          ["L'Amazone", "L'Atlantique"],
          ["Le Gange", "Le golfe du Bengale"],
          ["Le Mississippi", "Le golfe du Mexique"],
          ["Le Rhin", "La mer du Nord"],
        ],
        "Le Nil est l'un des rares grands fleuves à couler du sud vers le nord — d'où la confusion entre Haute-Égypte, au sud, et Basse-Égypte, au nord."
      ),
      relie(
        "Relie chaque fleuve français à son embouchure.",
        [
          ["La Seine", "Le Havre"],
          ["La Loire", "Saint-Nazaire"],
          ["La Garonne", "L'estuaire de la Gironde"],
          ["Le Rhône", "La Camargue"],
          ["La Somme", "La baie de Somme"],
        ],
        "La Garonne ne se jette pas directement dans l'Atlantique : elle rejoint la Dordogne au bec d'Ambès et forme avec elle la Gironde, plus grand estuaire d'Europe occidentale.",
        3
      ),
    ],
  },

  {
    slug: "geo-montagnes",
    category: "Reliefs et fleuves",
    title: "Les massifs et les sommets",
    statement:
      "Le point culminant d'un continent n'est presque jamais celui qu'on croit — et le plus haut sommet du monde n'est pas le plus éloigné du centre de la Terre.",
    tip: "L'Everest est le plus haut au-dessus du niveau de la mer. Mesuré depuis le centre de la Terre, c'est le Chimborazo, en Équateur, qui gagne : le globe est renflé à l'équateur.",
    difficulty: 2,
    exercises: [
      q(
        "Quel est le point culminant de l'Afrique ?",
        ["Le mont Kenya", "Le Kilimandjaro", "Le Ruwenzori", "L'Atlas"],
        1,
        "Le Kilimandjaro, 5 895 mètres, en Tanzanie. C'est un volcan isolé et non un massif : il s'élève de près de cinq mille mètres au-dessus de la plaine qui l'entoure."
      ),
      q(
        "Quelle chaîne sépare l'Europe de l'Asie ?",
        ["Le Caucase", "L'Oural", "Les Carpates", "L'Altaï"],
        1,
        "L'Oural, qui court du nord au sud sur deux mille cinq cents kilomètres. La limite se prolonge ensuite par le fleuve Oural, la Caspienne et le Caucase."
      ),
      q(
        "Quel est le plus haut sommet des Andes ?",
        ["Le Chimborazo", "L'Aconcagua", "L'Huascarán", "L'Ojos del Salado"],
        1,
        "L'Aconcagua, 6 961 mètres, en Argentine. C'est aussi le plus haut sommet de l'hémisphère sud et de tout le continent américain."
      ),
      q(
        "Le mont Blanc culmine à quelle altitude, à quelques mètres près ?",
        ["4 302 m", "4 810 m", "5 140 m", "3 970 m"],
        1,
        "Environ 4 810 mètres — la mesure varie de quelques mètres d'une année à l'autre, car le sommet est une calotte de glace dont l'épaisseur change."
      ),
      q(
        "Quel massif sépare la France de l'Espagne ?",
        ["Les Alpes", "Les Pyrénées", "Le Jura", "Les Vosges"],
        1,
        "Les Pyrénées, sur quatre cent trente kilomètres de l'Atlantique à la Méditerranée. L'Andorre est entièrement comprise dans le massif."
      ),
      q(
        "Sur quelle frontière se dresse l'Everest ?",
        ["Népal et Inde", "Népal et Chine", "Inde et Chine", "Bhoutan et Chine"],
        1,
        "Entre le Népal et la région autonome du Tibet, en Chine. Son nom népalais est Sagarmatha, son nom tibétain Chomolungma."
      ),
      relie(
        "Relie chaque continent à son point culminant.",
        [
          ["Europe", "Elbrouz"],
          ["Afrique", "Kilimandjaro"],
          ["Amérique du Nord", "Denali"],
          ["Amérique du Sud", "Aconcagua"],
          ["Océanie", "Puncak Jaya"],
        ],
        "L'Elbrouz, dans le Caucase russe, est le point culminant d'Europe si l'on place la limite au Caucase. Si on la place à sa crête nord, c'est le mont Blanc — le débat n'est pas tranché."
      ),
      relie(
        "Relie chaque massif à l'endroit où il se trouve.",
        [
          ["Himalaya", "Asie du Sud"],
          ["Rocheuses", "Amérique du Nord"],
          ["Atlas", "Afrique du Nord"],
          ["Carpates", "Europe centrale"],
          ["Drakensberg", "Afrique australe"],
        ],
        "L'Himalaya continue de s'élever de quelques millimètres par an : la plaque indienne s'enfonce sous la plaque eurasienne depuis cinquante millions d'années.",
        3
      ),
    ],
  },

  {
    slug: "geo-mers-detroits",
    category: "Mers et océans",
    title: "Mers, détroits et passages",
    statement:
      "Cinq océans, une centaine de mers, et une poignée de détroits par lesquels passe l'essentiel du commerce mondial. Ce sont les goulets qui font la géopolitique.",
    tip: "Un détroit relie deux mers, un isthme relie deux terres. Panama et Suez sont des canaux creusés à travers un isthme.",
    difficulty: 2,
    exercises: [
      q(
        "Quel détroit sépare l'Europe de l'Afrique ?",
        ["Le Bosphore", "Le détroit de Gibraltar", "Le détroit de Messine", "Le canal d'Otrante"],
        1,
        "Gibraltar, quatorze kilomètres au plus étroit. Il est le seul passage naturel entre la Méditerranée et l'Atlantique, et la Méditerranée s'évaporerait sans lui."
      ),
      q(
        "Quel détroit sépare l'Europe de l'Asie en Turquie ?",
        ["Les Dardanelles", "Le Bosphore", "Le détroit d'Ormuz", "Le détroit de Kertch"],
        1,
        "Le Bosphore, qui traverse Istanbul. Les Dardanelles sont plus au sud et relient la mer de Marmara à la mer Égée : les deux détroits encadrent la mer de Marmara."
      ),
      q(
        "Par quel détroit passe une grande partie du pétrole mondial ?",
        ["Le détroit de Malacca", "Le détroit d'Ormuz", "Le détroit de Béring", "Le Skagerrak"],
        1,
        "Ormuz, entre l'Iran et Oman, seule sortie du golfe Persique. Sa fermeture est régulièrement brandie comme une menace, précisément parce qu'aucun contournement n'existe."
      ),
      q(
        "Quel est le plus grand océan du monde ?",
        ["L'Atlantique", "Le Pacifique", "L'océan Indien", "L'océan Austral"],
        1,
        "Le Pacifique, qui couvre à lui seul un tiers de la surface du globe — davantage que toutes les terres émergées réunies."
      ),
      q(
        "La mer Morte est célèbre pour une raison précise. Laquelle ?",
        [
          "C'est la mer la plus froide",
          "C'est le point émergé le plus bas du globe",
          "C'est la plus grande mer fermée",
          "C'est la seule mer sans marée",
        ],
        1,
        "Sa surface est à environ 430 mètres sous le niveau de la mer, et elle continue de baisser. Sa salinité, près de dix fois celle d'un océan, empêche toute vie de poisson."
      ),
      q(
        "Le canal de Suez relie la Méditerranée à quelle mer ?",
        ["La mer Noire", "La mer Rouge", "Le golfe Persique", "La mer d'Arabie"],
        1,
        "La mer Rouge, et par elle l'océan Indien. Ouvert en 1869, il épargne le contournement de l'Afrique — environ six mille kilomètres."
      ),
      relie(
        "Relie chaque détroit aux deux espaces qu'il fait communiquer.",
        [
          ["Gibraltar", "Atlantique et Méditerranée"],
          ["Bosphore", "mer Noire et mer de Marmara"],
          ["Malacca", "océan Indien et mer de Chine"],
          ["Béring", "Pacifique et océan Arctique"],
          ["Pas de Calais", "Manche et mer du Nord"],
        ],
        "Le détroit de Béring ne fait que quatre-vingts kilomètres, et deux îles y appartiennent l'une aux États-Unis, l'autre à la Russie : quatre kilomètres les séparent."
      ),
      relie(
        "Relie chaque mer à la région qu'elle borde.",
        [
          ["mer Baltique", "Europe du Nord"],
          ["mer d'Arabie", "Inde et péninsule Arabique"],
          ["mer de Corail", "Australie"],
          ["mer des Caraïbes", "Antilles"],
          ["mer d'Okhotsk", "Extrême-Orient russe"],
        ],
        "La Baltique est presque douce : les fleuves y déversent plus d'eau qu'il n'en sort, et sa salinité est trois à cinq fois inférieure à celle d'un océan.",
        3
      ),
    ],
  },
];
