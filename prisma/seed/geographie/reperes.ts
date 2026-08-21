/**
 * Géographie — les repères et la lecture de carte.
 *
 * Les deux notions les plus utiles du module, et les seules qui portent un
 * cours : savoir ce qu'est une projection évite de croire tout ce qu'une carte
 * montre, et savoir lire des coordonnées permet de se situer partout.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_REPERES: SeedSkill[] = [
  {
    slug: "geo-coordonnees",
    category: "Repères et cartographie",
    title: "Latitude, longitude, fuseaux",
    statement:
      "Deux nombres suffisent à désigner n'importe quel point du globe. Encore faut-il savoir lequel se compte depuis l'équateur et lequel depuis Greenwich.",
    tip: "La latitude vient toujours en premier, et elle se compte de 0 à 90. La longitude va de 0 à 180. Un nombre supérieur à 90 en première position est donc forcément une erreur.",
    difficulty: 2,
    lesson: {
      titre: "Se repérer sur le globe",
      sections: [
        {
          titre: "Deux nombres, deux origines",
          texte:
            "Un point de la surface terrestre se désigne par deux angles, et il suffit de savoir d'où chacun se compte.\n\nLa latitude mesure l'écart au nord ou au sud de l'équateur. Elle va de 0° à l'équateur à 90° aux pôles, et se note N ou S. Elle est la coordonnée facile : un degré de latitude vaut toujours environ 111 kilomètres, partout.\n\nLa longitude mesure l'écart à l'est ou à l'ouest du méridien de Greenwich. Elle va de 0° à 180°, et se note E ou W. Elle est la coordonnée difficile : un degré de longitude vaut 111 kilomètres à l'équateur et zéro au pôle, puisque les méridiens s'y rejoignent.\n\nL'ordre est fixe : latitude d'abord, longitude ensuite. Paris est à 48,85° N et 2,35° E. Un premier nombre supérieur à 90 trahit donc une inversion.\n\nLe choix de Greenwich comme origine est une convention de 1884, adoptée parce que la majorité des cartes marines de l'époque l'employaient déjà. Rien de physique ne le justifie — contrairement à l'équateur, qui est bien un fait.",
          visuels: [
            {
              type: "tableau",
              titre: "Les deux coordonnées",
              colonnes: ["", "Latitude", "Longitude"],
              lignes: [
                ["se compte depuis", "l'équateur", "Greenwich"],
                ["étendue", "0° à 90°", "0° à 180°"],
                ["lettres", "N ou S", "E ou W"],
                ["lignes", "parallèles", "méridiens"],
                ["un degré vaut", "toujours ~111 km", "111 km à l'équateur, 0 au pôle"],
                ["origine", "physique", "conventionnelle"],
              ],
              note: "La latitude s'écrit toujours en premier : 48,85° N, 2,35° E.",
            },
          ],
        },
        {
          titre: "Les parallèles qui comptent",
          texte:
            "Cinq parallèles portent un nom, et chacun correspond à un fait astronomique, non à une décision.\n\nL'équateur, 0°, est le seul grand cercle parmi les parallèles : c'est le seul qui coupe la Terre en deux moitiés égales.\n\nLes deux tropiques, à environ 23,4° nord et sud, marquent les latitudes extrêmes où le soleil peut passer au zénith. Le tropique du Cancer au nord, celui du Capricorne au sud — les noms viennent des constellations où se trouvait le soleil au solstice il y a deux mille ans, et le décalage des équinoxes a depuis rendu ces noms inexacts.\n\nLes deux cercles polaires, à environ 66,6° nord et sud, marquent les latitudes à partir desquelles le soleil ne se couche pas au solstice d'été ni ne se lève au solstice d'hiver.\n\nL'inclinaison de l'axe terrestre, 23,4°, explique les quatre à la fois : les tropiques valent cette inclinaison, les cercles polaires valent 90° moins cette inclinaison. Un seul nombre commande toute la zonation du globe — et donc les saisons, les climats et la répartition des déserts.",
          visuels: [
            {
              type: "etapes",
              titre: "Du pôle à l'équateur",
              etapes: [
                { titre: "90° — le pôle", texte: "Six mois de jour, six mois de nuit." },
                { titre: "66,6° — le cercle polaire", texte: "Le soleil ne se couche pas au solstice d'été." },
                { titre: "23,4° — le tropique", texte: "Le soleil passe au zénith une fois par an." },
                { titre: "0° — l'équateur", texte: "Douze heures de jour toute l'année, et le soleil au zénith deux fois." },
              ],
            },
          ],
        },
        {
          titre: "Les fuseaux, et la ligne de changement de date",
          texte:
            "La Terre tourne de 360° en vingt-quatre heures, soit 15° par heure : c'est la largeur théorique d'un fuseau horaire.\n\nEn pratique, presque aucun fuseau ne suit ce découpage. Les frontières politiques l'emportent : la Chine, large de plus de soixante degrés, n'emploie qu'une seule heure officielle. L'Inde et l'Iran ont adopté des décalages d'une demi-heure, le Népal de quarante-cinq minutes.\n\nLa France détient un record dû à l'outre-mer : douze fuseaux horaires, davantage que tout autre État — la Russie, pourtant plus large, n'en a que onze.\n\nÀ l'opposé de Greenwich court la ligne de changement de date, autour du 180ᵉ méridien. Elle zigzague pour éviter de couper un pays en deux. La franchir vers l'ouest fait perdre un jour, vers l'est en fait gagner un — c'est ce détail qui a coûté une journée à l'expédition de Magellan, revenue avec un jour de retard sur son propre journal de bord.",
        },
      ],
    },
    exercises: [
      q(
        "Que mesure la latitude ?",
        [
          "L'écart au méridien de Greenwich",
          "L'écart à l'équateur",
          "L'altitude",
          "La distance au pôle Nord",
        ],
        1,
        "L'écart au nord ou au sud de l'équateur, de 0° à 90°. La longitude, elle, se compte depuis Greenwich."
      ),
      q(
        "Paris se situe à environ 48° N et 2° E. Que signifie le E ?",
        ["À l'est de l'équateur", "À l'est de Greenwich", "En Europe", "Au nord de l'équateur"],
        1,
        "À l'est du méridien de Greenwich. L'équateur ne sert qu'à la latitude, et il ne se compte ni en est ni en ouest."
      ),
      q(
        "À combien de degrés se trouvent les tropiques ?",
        ["Environ 15°", "Environ 23,4°", "Environ 45°", "Environ 66,6°"],
        1,
        "Environ 23,4° nord et sud — exactement l'inclinaison de l'axe terrestre. Les cercles polaires, eux, valent 90° moins cette même inclinaison."
      ),
      q(
        "Combien de temps le soleil met-il à parcourir un fuseau horaire théorique ?",
        ["Une demi-heure", "Une heure", "Deux heures", "Quinze minutes"],
        1,
        "Une heure, pour quinze degrés de longitude : 360° divisés par 24 heures. En pratique, les fuseaux suivent les frontières bien plus que les méridiens."
      ),
      q(
        "Quel État compte le plus de fuseaux horaires ?",
        ["La Russie", "Les États-Unis", "La France", "La Chine"],
        2,
        "La France, avec douze fuseaux grâce à l'outre-mer. La Russie, plus large d'un seul tenant, en compte onze. La Chine n'en emploie qu'un."
      ),
      q(
        "Que se passe-t-il quand on franchit la ligne de changement de date vers l'ouest ?",
        ["On perd un jour", "On gagne un jour", "Rien", "On change d'heure seulement"],
        0,
        "On avance d'un jour dans le calendrier, donc on en perd un. L'expédition de Magellan est revenue avec un jour de retard sur son propre journal, sans comprendre pourquoi."
      ),
      relie(
        "Relie chaque ligne remarquable à sa latitude.",
        [
          ["Équateur", "0°"],
          ["Tropique du Cancer", "23,4° N"],
          ["Tropique du Capricorne", "23,4° S"],
          ["Cercle polaire arctique", "66,6° N"],
          ["Pôle Sud", "90° S"],
        ],
        "Un seul nombre commande les quatre : l'inclinaison de l'axe terrestre, 23,4°. Les tropiques la valent, les cercles polaires valent son complément à 90°."
      ),
      relie(
        "Relie chaque ville à sa latitude approximative.",
        [
          ["Oslo", "60° N"],
          ["Paris", "49° N"],
          ["Le Caire", "30° N"],
          ["Singapour", "1° N"],
          ["Le Cap", "34° S"],
        ],
        "Paris est à la latitude de Vancouver et du sud du lac Baïkal. Le Gulf Stream explique que les hivers n'y aient rien de comparable.",
        3
      ),
    ],
  },

  {
    slug: "geo-projections",
    category: "Repères et cartographie",
    title: "Les projections : pourquoi toute carte ment",
    statement:
      "On ne peut pas aplatir une sphère sans la déformer. Chaque carte choisit donc ce qu'elle fausse — et ce choix a des conséquences politiques.",
    tip: "Aucune projection ne conserve à la fois les surfaces, les angles et les distances. Choisir une carte, c'est choisir ce qu'on accepte de perdre.",
    difficulty: 3,
    lesson: {
      titre: "Aplatir une sphère",
      sections: [
        {
          titre: "Le théorème qui commande tout",
          texte:
            "Une sphère n'est pas développable : on ne peut pas l'aplatir sans l'étirer ou la déchirer. Gauss l'a démontré en 1827, et c'est de là que découle toute la cartographie.\n\nLa conséquence est qu'aucune carte plane ne peut être fidèle sur tous les plans à la fois. Il faut choisir ce qu'on conserve.\n\nUne projection conforme conserve les angles : deux routes qui se croisent à quarante-cinq degrés sur le terrain se croisent à quarante-cinq degrés sur la carte. C'est ce qu'il faut pour naviguer. Elle déforme en revanche les surfaces, et de plus en plus vers les pôles.\n\nUne projection équivalente conserve les surfaces : deux pays de même superficie occupent la même place sur le papier. C'est ce qu'il faut pour comparer. Elle déforme en revanche les formes, parfois beaucoup.\n\nUne projection aphylactique ne conserve ni l'un ni l'autre, mais répartit l'erreur pour qu'aucune ne soit criante. C'est le compromis des atlas.\n\nAucune ne conserve les distances partout : c'est impossible, même en théorie.",
          visuels: [
            {
              type: "comparaison",
              titre: "Ce qu'on garde, ce qu'on perd",
              colonnes: [
                {
                  titre: "Conforme — les angles",
                  points: [
                    "Mercator, Lambert.",
                    "Pour naviguer et pour cadastrer.",
                    "Les surfaces enflent vers les pôles.",
                  ],
                },
                {
                  titre: "Équivalente — les surfaces",
                  points: [
                    "Peters, Mollweide, Eckert IV.",
                    "Pour comparer des pays.",
                    "Les formes s'étirent.",
                  ],
                },
              ],
            },
          ],
        },
        {
          titre: "Mercator, et pourquoi elle dérange",
          texte:
            "La projection de Mercator date de 1569 et répond à un problème précis : tracer une route à cap constant comme une ligne droite. Pour un navigateur, c'est décisif, et c'est pourquoi elle a régné sur les cartes marines pendant quatre siècles.\n\nLe prix à payer est une inflation des surfaces qui croît avec la latitude. Le Groenland y paraît aussi grand que l'Afrique alors qu'il est quatorze fois plus petit. L'Europe y paraît plus grande que l'Amérique du Sud, alors qu'elle en fait environ la moitié. L'Alaska y paraît aussi vaste que le Brésil, qui est cinq fois plus grand.\n\nÀ partir des années 1970, cette distorsion a été lue politiquement : une carte qui grossit l'Europe du Nord et rétrécit l'Afrique n'est pas neutre dans une salle de classe. Arno Peters a promu en 1973 une projection équivalente pour cette raison, et le débat qui a suivi a été vif — les cartographes lui reprochant de présenter comme une découverte une projection connue depuis 1855, et de déformer les formes au point de rendre les continents méconnaissables.\n\nLe fond du débat reste valable : Mercator survit surtout parce que les services de cartographie en ligne l'ont reprise, non parce qu'elle serait la meilleure carte du monde.",
          visuels: [
            {
              type: "tableau",
              titre: "Ce que Mercator fausse",
              colonnes: ["Ce qu'on voit", "La réalité", "Le rapport"],
              lignes: [
                ["Groenland ≈ Afrique", "Afrique 14 fois plus vaste", "×14"],
                ["Europe > Amérique du Sud", "Amérique du Sud ≈ 2 fois l'Europe", "×2"],
                ["Alaska ≈ Brésil", "Brésil ≈ 5 fois l'Alaska", "×5"],
                ["Scandinavie ≈ Inde", "Inde ≈ 3 fois la Scandinavie", "×3"],
              ],
              note: "L'erreur croît avec la latitude, et devient infinie aux pôles — que Mercator ne peut pas représenter.",
            },
          ],
        },
        {
          titre: "Choisir une carte selon ce qu'on en fait",
          texte:
            "Il n'y a pas de meilleure projection dans l'absolu, seulement une projection adaptée à un usage.\n\nPour naviguer ou pour un cadastre, il faut une conforme : Mercator en mer, Lambert conique pour la France, UTM pour le découpage universel en soixante fuseaux.\n\nPour comparer des grandeurs — populations, superficies, émissions —, il faut une équivalente : Mollweide, Eckert IV, Gall-Peters. Une carte thématique sur une Mercator ment sur ce qu'elle prétend montrer.\n\nPour un atlas général, un compromis : Robinson, Winkel-Tripel — celle qu'a retenue la National Geographic Society en 1998.\n\nPour une région polaire ou pour un trajet aérien, une azimutale centrée sur le point de départ : les grands cercles y sont des droites, ce qui explique pourquoi un vol Paris-Tokyo passe par la Sibérie et non par la Chine.\n\nLa règle pratique tient en une question : qu'est-ce que cette carte veut me faire voir, et qu'a-t-elle accepté de déformer pour ça ?",
        },
      ],
    },
    exercises: [
      q(
        "Pourquoi aucune carte plane ne peut-elle être exacte ?",
        [
          "Parce que la Terre est trop grande",
          "Parce qu'une sphère ne s'aplatit pas sans se déformer",
          "Parce que les instruments sont imprécis",
          "Parce que les frontières changent",
        ],
        1,
        "Une sphère n'est pas développable : Gauss l'a démontré en 1827. Toute carte plane doit donc choisir ce qu'elle fausse."
      ),
      q(
        "Que conserve la projection de Mercator ?",
        ["Les surfaces", "Les angles", "Les distances", "Tout, sauf les pôles"],
        1,
        "Les angles — elle est conforme. C'est ce qui permet de tracer une route à cap constant comme une ligne droite, et c'est pourquoi elle a servi quatre siècles en mer."
      ),
      q(
        "Sur une carte de Mercator, le Groenland paraît aussi vaste que l'Afrique. Quel est le rapport réel ?",
        ["Ils sont équivalents", "L'Afrique est 3 fois plus vaste", "L'Afrique est 14 fois plus vaste", "Le Groenland est plus vaste"],
        2,
        "L'Afrique fait environ trente millions de kilomètres carrés, le Groenland deux. L'inflation de Mercator croît avec la latitude et devient infinie aux pôles."
      ),
      q(
        "Qu'est-ce qu'une projection équivalente ?",
        [
          "Elle conserve les surfaces",
          "Elle conserve les angles",
          "Elle conserve les distances",
          "Elle ne déforme rien",
        ],
        0,
        "Elle conserve les rapports de surface : deux pays de même superficie occupent la même place. Elle déforme en revanche les formes."
      ),
      q(
        "Pourquoi un vol Paris-Tokyo passe-t-il par la Sibérie ?",
        [
          "Pour éviter les zones de conflit",
          "Parce que c'est le trajet le plus court sur une sphère",
          "À cause des vents",
          "Pour des raisons de carburant",
        ],
        1,
        "Le plus court chemin entre deux points d'une sphère est l'arc de grand cercle, et il passe très au nord. Il paraît absurde sur une Mercator, où il se courbe."
      ),
      q(
        "Pour une carte comparant les superficies des pays, quelle projection choisir ?",
        ["Mercator", "Une projection équivalente", "Une projection conforme", "Peu importe"],
        1,
        "Une équivalente — Mollweide, Eckert IV, Gall-Peters. Une carte thématique posée sur une Mercator ment sur ce qu'elle prétend montrer."
      ),
      relie(
        "Relie chaque projection à ce qu'elle conserve.",
        [
          ["Mercator", "les angles"],
          ["Gall-Peters", "les surfaces"],
          ["Winkel-Tripel", "un compromis, rien exactement"],
          ["Azimutale équidistante", "les distances depuis un point"],
          ["Gnomonique", "les grands cercles, rendus droits"],
        ],
        "La Winkel-Tripel ne conserve rien exactement, mais répartit l'erreur : la National Geographic Society l'a adoptée en 1998 pour ses cartes du monde."
      ),
      relie(
        "Relie chaque usage à la projection qui lui convient.",
        [
          ["Naviguer en mer", "une conforme"],
          ["Comparer des superficies", "une équivalente"],
          ["Un atlas général", "un compromis"],
          ["Un trajet aérien", "une azimutale"],
          ["Le cadastre français", "Lambert conique"],
        ],
        "Il n'y a pas de meilleure projection dans l'absolu : la bonne question est ce que la carte veut faire voir, et ce qu'elle a accepté de déformer pour ça.",
        3
      ),
    ],
  },
];
