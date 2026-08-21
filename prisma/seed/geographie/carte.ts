/**
 * Géographie — les séries qui se jouent sur la carte.
 *
 * Six notions, et c'est la partie du module qui apprend ce qu'aucune autre ne
 * peut apprendre : la position. Savoir que Lima est la capitale du Pérou sans
 * savoir où est le Pérou, c'est connaître une liste, pas une carte.
 *
 * La dernière série ferme la boucle des drapeaux : on voit le drapeau, on
 * clique le pays. Le nom n'apparaît nulle part — ni dans la consigne, ni sur
 * la carte —, et c'est le contrôle du type qui l'impose.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { relie, surCarte } from "./commun";

export const GEO_CARTE: SeedSkill[] = [
  {
    slug: "geo-carte-europe",
    category: "Sur la carte",
    title: "L'Europe sur la carte",
    statement:
      "Quarante-deux pays sur une carte muette. Les nommer est une chose ; les trouver du premier coup en est une autre, et c'est celle qui reste.",
    tip: "Deux repères tiennent la carte d'Europe : la botte italienne au sud, la Scandinavie au nord. Tout le reste se situe par rapport à eux.",
    difficulty: 2,
    exercises: [
      surCarte(
        "europe",
        "620",
        "Portugal",
        "Clique sur le Portugal.",
        "À l'ouest de l'Espagne, sur l'Atlantique. C'est le pays continental le plus occidental d'Europe, et sa frontière avec l'Espagne est l'une des plus anciennes du continent — fixée pour l'essentiel au XIIIᵉ siècle.",
        { difficulty: 1 }
      ),
      surCarte(
        "europe",
        "616",
        "Pologne",
        "Clique sur la Pologne.",
        "Entre l'Allemagne et la Biélorussie, sur la plaine d'Europe du Nord. Cette plaine sans relief explique une grande partie de son histoire : rien n'y arrête une armée, et ses frontières ont bougé une dizaine de fois en trois siècles."
      ),
      surCarte(
        "europe",
        "300",
        "Grèce",
        "Clique sur la Grèce.",
        "À la pointe sud des Balkans, avec des milliers d'îles en mer Égée. Aucun point du pays n'est à plus de cent kilomètres de la mer."
      ),
      surCarte(
        "europe",
        "578",
        "Norvège",
        "Clique sur la Norvège.",
        "Sur la façade atlantique de la Scandinavie. Ses fjords lui donnent un littoral de plus de vingt-cinq mille kilomètres — pour un pays qui en fait mille sept cents du nord au sud."
      ),
      surCarte(
        "europe",
        "203",
        "Tchéquie",
        "Clique sur la Tchéquie.",
        "Au cœur du continent, sans littoral, entourée par l'Allemagne, la Pologne, la Slovaquie et l'Autriche. La Bohême, sa partie occidentale, est un bassin encadré de montagnes sur ses quatre côtés."
      ),
      surCarte(
        "europe",
        "804",
        "Ukraine",
        "Clique sur l'Ukraine.",
        "Le plus grand pays entièrement européen, sur la mer Noire. Ses terres noires, le tchernoziom, comptent parmi les sols les plus fertiles du monde.",
        { difficulty: 3 }
      ),
      surCarte(
        "europe",
        "191",
        "Croatie",
        "Clique sur la Croatie.",
        "Sa forme en croissant enserre la Bosnie-Herzégovine et court le long de l'Adriatique. C'est ce tracé qui explique qu'on la reconnaisse instantanément sur une carte muette.",
        { difficulty: 3 }
      ),
      relie(
        "Relie chaque pays à la mer qui le borde.",
        [
          ["Portugal", "l'Atlantique"],
          ["Grèce", "la mer Égée"],
          ["Pologne", "la Baltique"],
          ["Roumanie", "la mer Noire"],
          ["Italie", "l'Adriatique"],
        ],
        "L'Italie borde aussi la Tyrrhénienne et l'Ionienne : l'Adriatique n'est que sa façade orientale."
      ),
    ],
  },

  {
    slug: "geo-carte-afrique",
    category: "Sur la carte",
    title: "L'Afrique sur la carte",
    statement:
      "Cinquante-quatre États, et des frontières souvent tracées à la règle. C'est le continent où la carte muette est la plus difficile — et la plus instructive.",
    tip: "Les frontières rectilignes du Sahara datent du partage colonial : elles suivent des méridiens, pas des reliefs ni des peuples.",
    difficulty: 3,
    exercises: [
      surCarte(
        "afrique",
        "818",
        "Égypte",
        "Clique sur l'Égypte.",
        "À l'angle nord-est du continent, sur la Méditerranée et la mer Rouge. Quasiment toute sa population vit sur les rives du Nil et dans son delta — soit moins de cinq pour cent du territoire.",
        { difficulty: 1 }
      ),
      surCarte(
        "afrique",
        "710",
        "Afrique du Sud",
        "Clique sur l'Afrique du Sud.",
        "À la pointe australe, bordée par l'Atlantique et l'océan Indien. Elle entoure complètement le Lesotho, l'un des trois États au monde enclavés dans un seul autre.",
        { difficulty: 1 }
      ),
      surCarte(
        "afrique",
        "566",
        "Nigéria",
        "Clique sur le Nigéria.",
        "Sur le golfe de Guinée. C'est le pays le plus peuplé d'Afrique, avec plus de deux cents millions d'habitants, et Lagos en est la plus grande ville."
      ),
      surCarte(
        "afrique",
        "231",
        "Éthiopie",
        "Clique sur l'Éthiopie.",
        "Dans la Corne de l'Afrique, sans littoral depuis l'indépendance de l'Érythrée en 1993. C'est un haut plateau, et cette altitude explique son climat tempéré malgré la latitude."
      ),
      surCarte(
        "afrique",
        "180",
        "République démocratique du Congo",
        "Clique sur la République démocratique du Congo.",
        "Au centre du continent, traversée par l'équateur. C'est le deuxième pays d'Afrique par la superficie, et il abrite la deuxième forêt tropicale du monde après l'Amazonie."
      ),
      surCarte(
        "afrique",
        "450",
        "Madagascar",
        "Clique sur Madagascar.",
        "Dans l'océan Indien, séparée du continent par le canal du Mozambique. Son isolement depuis quatre-vingts millions d'années explique qu'une grande part de sa faune n'existe nulle part ailleurs."
      ),
      surCarte(
        "afrique",
        "504",
        "Maroc",
        "Clique sur le Maroc.",
        "À l'angle nord-ouest, face à l'Espagne. C'est l'un des rares pays à border à la fois l'Atlantique et la Méditerranée."
      ),
      relie(
        "Relie chaque pays africain à ce qui le borde.",
        [
          ["Égypte", "la mer Rouge"],
          ["Sénégal", "l'Atlantique"],
          ["Kenya", "l'océan Indien"],
          ["Tchad", "aucun littoral"],
          ["Tunisie", "la Méditerranée"],
        ],
        "Le Tchad est l'un des seize États africains sans accès à la mer — le continent en compte davantage que tout autre.",
        3
      ),
    ],
  },

  {
    slug: "geo-carte-asie",
    category: "Sur la carte",
    title: "L'Asie sur la carte",
    statement:
      "Le continent le plus vaste et le plus peuplé. Ses États vont du plus grand du monde à des cités-États, et la carte muette y réserve des surprises d'échelle.",
    tip: "Un repère utile : la péninsule indienne au sud, la Chine au centre-est, la péninsule arabique à l'ouest. Le reste se place entre les trois.",
    difficulty: 3,
    exercises: [
      surCarte(
        "asie",
        "392",
        "Japon",
        "Clique sur le Japon.",
        "Un archipel de quatre grandes îles à l'est du continent. Il compte plus de six mille îles au total, et son territoire s'étend sur près de trois mille kilomètres du nord au sud.",
        { difficulty: 1 }
      ),
      surCarte(
        "asie",
        "356",
        "Inde",
        "Clique sur l'Inde.",
        "La péninsule qui s'avance dans l'océan Indien. Sa plaque continentale s'enfonce sous l'Eurasie depuis cinquante millions d'années, ce qui soulève l'Himalaya de quelques millimètres par an.",
        { difficulty: 1 }
      ),
      surCarte(
        "asie",
        "398",
        "Kazakhstan",
        "Clique sur le Kazakhstan.",
        "Le plus grand pays sans littoral du monde, entre la Russie et la Chine. Il est plus vaste que toute l'Europe de l'Ouest réunie, pour vingt millions d'habitants."
      ),
      surCarte(
        "asie",
        "704",
        "Viêt Nam",
        "Clique sur le Viêt Nam.",
        "Une longue bande côtière à l'est de la péninsule indochinoise. Il fait plus de mille six cents kilomètres du nord au sud, et moins de cinquante en son point le plus étroit."
      ),
      surCarte(
        "asie",
        "364",
        "Iran",
        "Clique sur l'Iran.",
        "Entre le golfe Persique et la Caspienne. C'est un haut plateau encadré de montagnes, ce qui explique que son intérieur soit désertique malgré deux façades maritimes."
      ),
      surCarte(
        "asie",
        "360",
        "Indonésie",
        "Clique sur l'Indonésie.",
        "Le plus grand archipel du monde : plus de dix-sept mille îles réparties sur cinq mille kilomètres, à cheval sur l'équateur. C'est aussi le quatrième pays le plus peuplé.",
        { difficulty: 3 }
      ),
      surCarte(
        "asie",
        "496",
        "Mongolie",
        "Clique sur la Mongolie.",
        "Coincée entre la Russie et la Chine, sans autre voisin. C'est le pays souverain le moins densément peuplé du monde, avec environ deux habitants au kilomètre carré.",
        { difficulty: 3 }
      ),
      relie(
        "Relie chaque pays d'Asie à sa capitale.",
        [
          ["Corée du Sud", "Séoul"],
          ["Népal", "Katmandou"],
          ["Iran", "Téhéran"],
          ["Mongolie", "Oulan-Bator"],
          ["Malaisie", "Kuala Lumpur"],
        ],
        "Oulan-Bator est la capitale la plus froide du monde : la moyenne annuelle y avoisine zéro degré.",
        3
      ),
    ],
  },

  {
    slug: "geo-carte-ameriques",
    category: "Sur la carte",
    title: "Les Amériques sur la carte",
    statement:
      "Un continent long de quinze mille kilomètres, de l'Arctique au cap Horn. Les grands pays s'y repèrent vite, l'Amérique centrale beaucoup moins.",
    tip: "L'Amérique centrale se lit du nord au sud comme une chaîne : Guatemala, Belize, Honduras, Salvador, Nicaragua, Costa Rica, Panama.",
    difficulty: 2,
    exercises: [
      surCarte(
        "ameriques",
        "76",
        "Brésil",
        "Clique sur le Brésil.",
        "Il occupe près de la moitié de l'Amérique du Sud et touche tous les pays du sous-continent sauf deux : le Chili et l'Équateur.",
        { difficulty: 1 }
      ),
      surCarte(
        "ameriques",
        "152",
        "Chili",
        "Clique sur le Chili.",
        "Une bande de quatre mille trois cents kilomètres de long pour moins de deux cents de large en moyenne, coincée entre les Andes et le Pacifique. Sa forme le rend reconnaissable entre tous.",
        { difficulty: 1 }
      ),
      surCarte(
        "ameriques",
        "484",
        "Mexique",
        "Clique sur le Mexique.",
        "Entre les États-Unis et l'Amérique centrale, avec deux façades maritimes. Géologiquement et culturellement, il appartient à l'Amérique du Nord."
      ),
      surCarte(
        "ameriques",
        "604",
        "Pérou",
        "Clique sur le Pérou.",
        "Sur la côte pacifique, traversé par les Andes. Il réunit trois milieux très différents : le désert côtier, la sierra andine et la forêt amazonienne."
      ),
      surCarte(
        "ameriques",
        "591",
        "Panama",
        "Clique sur le Panama.",
        "L'isthme qui relie les deux Amériques. Son canal, ouvert en 1914, épargne le contournement du cap Horn — environ treize mille kilomètres."
      ),
      surCarte(
        "ameriques",
        "192",
        "Cuba",
        "Clique sur Cuba.",
        "La plus grande île des Antilles, à l'entrée du golfe du Mexique. Elle est plus longue que l'Angleterre du nord au sud."
      ),
      surCarte(
        "ameriques",
        "68",
        "Bolivie",
        "Clique sur la Bolivie.",
        "Sans littoral depuis 1884, où elle a perdu sa façade pacifique face au Chili. Elle entretient toujours une marine militaire, sur le lac Titicaca et les fleuves amazoniens.",
        { difficulty: 3 }
      ),
      relie(
        "Relie chaque pays d'Amérique à son océan ou sa mer.",
        [
          ["Chili", "le Pacifique"],
          ["Brésil", "l'Atlantique"],
          ["Cuba", "la mer des Caraïbes"],
          ["Bolivie", "aucun littoral"],
          ["Canada", "l'océan Arctique"],
        ],
        "Le Canada borde trois océans : l'Atlantique, le Pacifique et l'Arctique. C'est le seul pays du continent dans ce cas.",
        3
      ),
    ],
  },

  {
    slug: "geo-carte-monde",
    category: "Sur la carte",
    title: "Le planisphère : les grands repères",
    statement:
      "Sur un planisphère, les proportions mentent — Mercator ou non. Ces questions portent sur les pays qu'on croit situer et qu'on place de travers.",
    tip: "La projection employée ici est la Natural Earth : elle déforme un peu les formes pour ne pas trop déformer les surfaces. Aucune carte plane ne peut faire les deux.",
    difficulty: 2,
    exercises: [
      surCarte(
        "monde",
        "643",
        "Russie",
        "Clique sur la Russie.",
        "Le plus vaste pays du monde, à cheval sur onze fuseaux horaires et deux continents. Elle couvre à elle seule un neuvième des terres émergées.",
        { difficulty: 1 }
      ),
      surCarte(
        "monde",
        "36",
        "Australie",
        "Clique sur l'Australie.",
        "Le seul pays qui occupe un continent entier. Il fait à peu près la taille des États-Unis contigus, pour vingt-six millions d'habitants concentrés sur les côtes.",
        { difficulty: 1 }
      ),
      surCarte(
        "monde",
        "304",
        "Groenland",
        "Clique sur le Groenland.",
        "Territoire autonome danois, et l'endroit où toute projection se trahit : sur une carte de Mercator il paraît aussi vaste que l'Afrique, qui est quatorze fois plus grande."
      ),
      surCarte(
        "monde",
        "156",
        "Chine",
        "Clique sur la Chine.",
        "Quatorze voisins terrestres, autant que la Russie. Elle s'étend sur soixante degrés de longitude et n'emploie pourtant qu'une seule heure officielle."
      ),
      surCarte(
        "monde",
        "554",
        "Nouvelle-Zélande",
        "Clique sur la Nouvelle-Zélande.",
        "Deux grandes îles à mille huit cents kilomètres au sud-est de l'Australie. Elle est si souvent oubliée des planisphères que l'omission est devenue une plaisanterie locale.",
        { difficulty: 3 }
      ),
      surCarte(
        "monde",
        "352",
        "Islande",
        "Clique sur l'Islande.",
        "Dans l'Atlantique Nord, juste sous le cercle polaire. Elle est posée sur la dorsale médio-atlantique, ce qui explique ses volcans et ses sources chaudes.",
        { difficulty: 3 }
      ),
      surCarte(
        "monde",
        "586",
        "Pakistan",
        "Clique sur le Pakistan.",
        "Entre l'Iran, l'Afghanistan, la Chine et l'Inde. C'est le cinquième pays le plus peuplé du monde, ce que sa place sur une carte ne laisse pas deviner."
      ),
      relie(
        "Relie chaque pays à son ordre de grandeur en superficie.",
        [
          ["Russie", "17 millions de km²"],
          ["Canada", "10 millions de km²"],
          ["Inde", "3,3 millions de km²"],
          ["France métropolitaine", "550 000 km²"],
          ["Islande", "103 000 km²"],
        ],
        "La Russie est presque deux fois plus vaste que le Canada, et le Canada trente fois plus que la France métropolitaine.",
        3
      ),
    ],
  },

  {
    slug: "geo-carte-drapeaux",
    category: "Sur la carte",
    title: "Du drapeau au pays, sur la carte",
    statement:
      "Un drapeau, une carte muette, et rien d'autre. Il faut reconnaître le pays puis le situer — les deux moitiés du même savoir, enfin réunies.",
    tip: "Le nom n'apparaît nulle part : ni dans la consigne, ni sur la carte. C'est le seul exercice du module où les deux compétences se travaillent d'un coup.",
    difficulty: 3,
    exercises: [
      surCarte(
        "monde",
        "620",
        "Portugal",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Le vert et le rouge encadrent une sphère armillaire, instrument de navigation qui rappelle les grandes découvertes. Le pays est à l'ouest de la péninsule Ibérique.",
        { amorce: "🇵🇹", difficulty: 2 }
      ),
      surCarte(
        "monde",
        "392",
        "Japon",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Le disque rouge est le soleil : le pays se nomme lui-même « origine du soleil ». C'est l'archipel à l'est du continent asiatique.",
        { amorce: "🇯🇵", difficulty: 2 }
      ),
      surCarte(
        "monde",
        "76",
        "Brésil",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Les vingt-sept étoiles reproduisent le ciel austral au-dessus de Rio le matin de la proclamation de la République, en 1889.",
        { amorce: "🇧🇷", difficulty: 2 }
      ),
      surCarte(
        "monde",
        "231",
        "Éthiopie",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Vert, jaune, rouge : ces couleurs sont devenues panafricaines parce que ce pays fut le seul du continent jamais durablement colonisé. Il se trouve dans la Corne de l'Afrique.",
        { amorce: "🇪🇹" }
      ),
      surCarte(
        "monde",
        "410",
        "Corée du Sud",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Le disque central est le taegeuk, symbole du yin et du yang, entouré de quatre trigrammes tirés du Livre des mutations. Le pays occupe la moitié sud d'une péninsule.",
        { amorce: "🇰🇷" }
      ),
      surCarte(
        "monde",
        "124",
        "Canada",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "La feuille d'érable à onze pointes a été adoptée en 1965, après un débat parlementaire de six mois. C'est le deuxième pays du monde par la superficie.",
        { amorce: "🇨🇦", difficulty: 2 }
      ),
      surCarte(
        "monde",
        "32",
        "Argentine",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Le soleil de Mai rappelle la révolution de 1810 ; l'Uruguay voisin porte le même astre, pour la même raison. Le pays occupe le sud-est du sous-continent.",
        { amorce: "🇦🇷" }
      ),
      surCarte(
        "monde",
        "704",
        "Viêt Nam",
        "Quel pays porte ce drapeau ? Clique dessus sur la carte.",
        "Une étoile jaune à cinq branches sur fond rouge. Le pays forme une longue bande côtière à l'est de la péninsule indochinoise.",
        { amorce: "🇻🇳" }
      ),
    ],
  },
];
