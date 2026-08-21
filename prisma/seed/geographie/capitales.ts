/**
 * Géographie — les capitales, continent par continent.
 *
 * Une capitale se retient mal seule et bien par contraste : c'est en
 * départageant Ljubljana de Bratislava, Nairobi de Kampala, qu'on les fixe.
 * D'où la place de l'appariement dans ces notions.
 */
import type { SeedSkill } from "../../../src/modules/types";
import { q, relie } from "./commun";

export const GEO_CAPITALES: SeedSkill[] = [
  {
    slug: "geo-capitales-europe",
    category: "Capitales",
    title: "Capitales d'Europe",
    statement:
      "Les capitales qu'on confond : celles des pays baltes, des Balkans, et les quelques États où la plus grande ville n'est pas le siège du pouvoir.",
    tip: "Quand un pays a une grande ville célèbre, méfie-toi : ce n'est pas toujours elle la capitale. Berne, Ankara, Ottawa, Canberra suivent toutes cette règle.",
    difficulty: 2,
    exercises: [
      q(
        "Quelle est la capitale de la Suisse ?",
        ["Zurich", "Genève", "Berne", "Bâle"],
        2,
        "Berne. Zurich est la plus grande ville et Genève la plus internationale, mais le siège fédéral est à Berne depuis 1848. La Suisse n'a d'ailleurs pas de capitale au sens constitutionnel : Berne est officiellement la ville fédérale."
      ),
      q(
        "Quelle est la capitale de la Turquie ?",
        ["Istanbul", "Ankara", "Izmir", "Bursa"],
        1,
        "Ankara, choisie par Mustafa Kemal en 1923 pour marquer la rupture avec l'Empire ottoman et pour son emplacement au centre de l'Anatolie. Istanbul reste de très loin la plus peuplée."
      ),
      q(
        "Quelle est la capitale de la Slovénie ?",
        ["Zagreb", "Bratislava", "Ljubljana", "Sarajevo"],
        2,
        "Ljubljana. Zagreb est croate, Bratislava slovaque : la confusion entre Slovénie et Slovaquie est si tenace que leurs ambassades ont longtemps réexpédié le courrier de l'autre."
      ),
      q(
        "Quelle est la capitale des Pays-Bas ?",
        ["La Haye", "Rotterdam", "Amsterdam", "Utrecht"],
        2,
        "Amsterdam est la capitale inscrite dans la Constitution, mais le gouvernement, les États généraux, la Cour suprême et le roi siègent à La Haye. Le cas est unique en Europe."
      ),
      q(
        "Quelle est la capitale de la Lettonie ?",
        ["Vilnius", "Riga", "Tallinn", "Kaunas"],
        1,
        "Riga, et c'est aussi la plus grande ville de la Baltique. Du nord au sud : Tallinn en Estonie, Riga en Lettonie, Vilnius en Lituanie — l'ordre alphabétique inverse aide à s'en souvenir."
      ),
      q(
        "Quelle est la capitale de la Bosnie-Herzégovine ?",
        ["Belgrade", "Podgorica", "Sarajevo", "Skopje"],
        2,
        "Sarajevo. Belgrade est serbe, Podgorica monténégrine, Skopje macédonienne. Les quatre capitales tiennent dans un rayon de trois cents kilomètres."
      ),
      relie(
        "Relie chaque pays balte ou nordique à sa capitale.",
        [
          ["Estonie", "Tallinn"],
          ["Lituanie", "Vilnius"],
          ["Finlande", "Helsinki"],
          ["Norvège", "Oslo"],
          ["Danemark", "Copenhague"],
        ],
        "Helsinki et Tallinn se font face de part et d'autre du golfe de Finlande : quatre-vingts kilomètres, deux heures de ferry."
      ),
      relie(
        "Relie chaque pays des Balkans à sa capitale.",
        [
          ["Croatie", "Zagreb"],
          ["Serbie", "Belgrade"],
          ["Albanie", "Tirana"],
          ["Bulgarie", "Sofia"],
          ["Roumanie", "Bucarest"],
        ],
        "Belgrade et Bucarest sont toutes deux sur le Danube ou tout près : le fleuve traverse ou borde dix pays, plus qu'aucun autre au monde.",
        3
      ),
    ],
  },

  {
    slug: "geo-capitales-afrique",
    category: "Capitales",
    title: "Capitales d'Afrique",
    statement:
      "Le continent où la capitale est le plus souvent une ville créée pour l'être — et où la plus grande ville est le plus souvent une autre.",
    tip: "Plusieurs pays africains ont déplacé leur capitale vers l'intérieur : Abuja, Dodoma, Yamoussoukro. La ville côtière historique reste la plus peuplée.",
    difficulty: 2,
    exercises: [
      q(
        "Quelle est la capitale du Nigeria ?",
        ["Lagos", "Abuja", "Kano", "Ibadan"],
        1,
        "Abuja, capitale depuis 1991. Elle a été bâtie au centre du pays, sur un site neutre entre le nord musulman et le sud chrétien. Lagos, sur la côte, reste la plus grande ville d'Afrique."
      ),
      q(
        "Quelle est la capitale de la Tanzanie ?",
        ["Dar es Salaam", "Dodoma", "Arusha", "Zanzibar"],
        1,
        "Dodoma, désignée en 1974 et effectivement siège du gouvernement depuis 1996. Dar es Salaam, sur l'océan Indien, garde l'activité économique et la population."
      ),
      q(
        "Quelle est la capitale de l'Afrique du Sud ?",
        ["Le Cap", "Johannesburg", "Pretoria", "Les trois se partagent le rôle"],
        3,
        "Le pays a trois capitales : Pretoria pour l'exécutif, Le Cap pour le Parlement, Bloemfontein pour la Cour suprême d'appel. Johannesburg, la plus grande ville, n'en est aucune."
      ),
      q(
        "Quelle est la capitale du Maroc ?",
        ["Casablanca", "Marrakech", "Rabat", "Fès"],
        2,
        "Rabat. Casablanca est le poumon économique et la plus peuplée, Marrakech la plus visitée, Fès l'ancienne capitale impériale."
      ),
      q(
        "Quelle est la capitale du Kenya ?",
        ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
        1,
        "Nairobi, née d'un dépôt ferroviaire en 1899 sur la ligne Mombasa-Kampala. Elle est aujourd'hui l'un des sièges africains des Nations unies."
      ),
      q(
        "Quelle est la capitale du Sénégal ?",
        ["Saint-Louis", "Thiès", "Dakar", "Touba"],
        2,
        "Dakar, sur la presqu'île du Cap-Vert — le point le plus occidental du continent africain. Saint-Louis fut la capitale de l'Afrique-Occidentale française jusqu'en 1902."
      ),
      relie(
        "Relie chaque pays d'Afrique de l'Est à sa capitale.",
        [
          ["Éthiopie", "Addis-Abeba"],
          ["Ouganda", "Kampala"],
          ["Rwanda", "Kigali"],
          ["Soudan", "Khartoum"],
          ["Érythrée", "Asmara"],
        ],
        "Addis-Abeba abrite le siège de l'Union africaine. Khartoum est bâtie au confluent du Nil Blanc et du Nil Bleu — son nom viendrait de la trompe d'éléphant que dessine la langue de terre."
      ),
      relie(
        "Relie chaque pays d'Afrique de l'Ouest à sa capitale.",
        [
          ["Ghana", "Accra"],
          ["Mali", "Bamako"],
          ["Côte d'Ivoire", "Yamoussoukro"],
          ["Burkina Faso", "Ouagadougou"],
          ["Guinée", "Conakry"],
        ],
        "Yamoussoukro est capitale depuis 1983, mais Abidjan garde le gouvernement et les ambassades : le déplacement n'a jamais été mené à son terme.",
        3
      ),
    ],
  },

  {
    slug: "geo-capitales-asie",
    category: "Capitales",
    title: "Capitales d'Asie",
    statement:
      "Le continent le plus peuplé, et celui où plusieurs capitales ont été déplacées récemment — parfois avec un nom neuf, parfois avant même d'être construites.",
    tip: "Une capitale peut changer : le Kazakhstan a rebaptisé la sienne deux fois en vingt ans, le Myanmar a bâti la sienne de toutes pièces, l'Indonésie déplace la sienne.",
    difficulty: 2,
    exercises: [
      q(
        "Quelle est la capitale du Kazakhstan ?",
        ["Almaty", "Astana", "Chymkent", "Karaganda"],
        1,
        "Astana, capitale depuis 1997. Elle s'est appelée Astana, puis Noursoultan de 2019 à 2022, puis de nouveau Astana. Almaty, l'ancienne capitale, reste la plus grande ville."
      ),
      q(
        "Quelle est la capitale du Myanmar ?",
        ["Rangoun", "Naypyidaw", "Mandalay", "Bago"],
        1,
        "Naypyidaw, bâtie ex nihilo et proclamée capitale en 2005. Ses avenues à vingt voies restent presque vides ; Rangoun garde la population et l'activité."
      ),
      q(
        "Quelle est la capitale du Sri Lanka ?",
        ["Colombo", "Kandy", "Sri Jayawardenepura Kotte", "Galle"],
        2,
        "Sri Jayawardenepura Kotte, siège du Parlement depuis 1985. Colombo reste la capitale économique et le siège de la plupart des ministères — le partage est plus théorique que réel."
      ),
      q(
        "Quelle est la capitale du Viêt Nam ?",
        ["Hô Chi Minh-Ville", "Hanoï", "Da Nang", "Hué"],
        1,
        "Hanoï, au nord. Hô Chi Minh-Ville, l'ancienne Saïgon, est plus peuplée et plus active économiquement. Hué fut la capitale impériale jusqu'en 1945."
      ),
      q(
        "Quelle est la capitale des Philippines ?",
        ["Quezon City", "Manille", "Cebu", "Davao"],
        1,
        "Manille. Quezon City, voisine et plus peuplée, fut capitale de 1948 à 1976 — les deux appartiennent aujourd'hui à la même agglomération, Metro Manila."
      ),
      q(
        "Quelle est la capitale de l'Ouzbékistan ?",
        ["Samarcande", "Boukhara", "Tachkent", "Khiva"],
        2,
        "Tachkent. Samarcande et Boukhara sont les villes de la route de la soie, bien plus célèbres, mais le pouvoir est à Tachkent depuis l'époque russe."
      ),
      relie(
        "Relie chaque pays d'Asie du Sud-Est à sa capitale.",
        [
          ["Thaïlande", "Bangkok"],
          ["Malaisie", "Kuala Lumpur"],
          ["Cambodge", "Phnom Penh"],
          ["Laos", "Vientiane"],
          ["Indonésie", "Jakarta"],
        ],
        "L'Indonésie a voté en 2022 le transfert de sa capitale vers Nusantara, à Bornéo : Jakarta s'enfonce de plusieurs centimètres par an sous le poids de ses immeubles et du pompage de sa nappe."
      ),
      relie(
        "Relie chaque pays d'Asie centrale ou du Caucase à sa capitale.",
        [
          ["Géorgie", "Tbilissi"],
          ["Arménie", "Erevan"],
          ["Azerbaïdjan", "Bakou"],
          ["Kirghizistan", "Bichkek"],
          ["Tadjikistan", "Douchanbé"],
        ],
        "Bakou est la plus grande ville de la Caspienne, et son centre historique est à vingt-huit mètres sous le niveau de la mer.",
        3
      ),
    ],
  },

  {
    slug: "geo-capitales-ameriques",
    category: "Capitales",
    title: "Capitales des Amériques et d'Océanie",
    statement:
      "Deux continents où la capitale est presque toujours un compromis entre deux grandes villes rivales — Ottawa, Canberra, Brasília, Washington.",
    tip: "Quand deux villes se disputaient le rôle, on en a souvent choisi une troisième, plus petite et neutre. C'est la règle des jeunes fédérations.",
    difficulty: 2,
    exercises: [
      q(
        "Quelle est la capitale du Canada ?",
        ["Toronto", "Montréal", "Ottawa", "Vancouver"],
        2,
        "Ottawa, choisie par la reine Victoria en 1857 précisément parce qu'elle n'était ni Toronto ni Montréal, et parce qu'elle se tenait sur la frontière entre le Haut et le Bas-Canada."
      ),
      q(
        "Quelle est la capitale de l'Australie ?",
        ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        2,
        "Canberra, dessinée à partir de rien entre 1913 et 1927, à mi-chemin de Sydney et Melbourne, qui se disputaient le titre. Le compromis a coûté vingt ans de construction."
      ),
      q(
        "Quelle est la capitale du Brésil ?",
        ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        2,
        "Brasília, inaugurée en 1960 sur un plateau vide du centre du pays pour tirer le peuplement vers l'intérieur. Rio fut capitale jusque-là, São Paulo reste la plus peuplée."
      ),
      q(
        "Quelle est la capitale de la Bolivie ?",
        ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"],
        1,
        "Sucre est la capitale constitutionnelle et le siège de la Cour suprême. La Paz abrite le gouvernement et le Parlement, et se trouve à 3 640 mètres — le siège de gouvernement le plus haut du monde."
      ),
      q(
        "Quelle est la capitale de la Nouvelle-Zélande ?",
        ["Auckland", "Wellington", "Christchurch", "Dunedin"],
        1,
        "Wellington, à la pointe sud de l'île du Nord, choisie en 1865 pour son emplacement plus central. Auckland, qui fut capitale avant elle, reste trois fois plus peuplée."
      ),
      q(
        "Quelle est la capitale de l'Équateur ?",
        ["Guayaquil", "Quito", "Cuenca", "Manta"],
        1,
        "Quito, à 2 850 mètres et à vingt-cinq kilomètres de l'équateur. Guayaquil, sur la côte, est le premier port et la ville la plus peuplée."
      ),
      relie(
        "Relie chaque pays d'Amérique centrale à sa capitale.",
        [
          ["Guatemala", "Guatemala"],
          ["Costa Rica", "San José"],
          ["Panama", "Panama"],
          ["Nicaragua", "Managua"],
          ["Honduras", "Tegucigalpa"],
        ],
        "Deux de ces pays donnent leur nom à leur capitale — Guatemala et Panama. Le cas est fréquent en Amérique centrale et rare ailleurs."
      ),
      relie(
        "Relie chaque pays d'Amérique du Sud à sa capitale.",
        [
          ["Pérou", "Lima"],
          ["Chili", "Santiago"],
          ["Colombie", "Bogota"],
          ["Uruguay", "Montevideo"],
          ["Paraguay", "Asuncion"],
        ],
        "Lima, Santiago et Bogota sont toutes trois des fondations espagnoles du XVIᵉ siècle. Bogota culmine à 2 640 mètres, Lima est au niveau de la mer.",
        3
      ),
    ],
  },
];
