/**
 * Géographie — de la capitale au pays.
 *
 * Savoir que Lima est la capitale du Pérou sans savoir où est le Pérou, c'est
 * connaître une liste, pas une carte. La série pose donc la question dans ce
 * sens-là : on donne la ville, on clique le pays.
 *
 * Ici la consigne PEUT nommer le pays — elle ne le fait pas, mais rien ne
 * l'interdirait, puisqu'il n'y a pas d'amorce. C'est la formulation qui tient
 * l'exigence : « Lima est la capitale de quel pays ? » et non « clique sur le
 * Pérou ».
 */
import type { SeedSkill } from "../../../src/modules/types";
import { pays } from "./commun";

/** [carte, code ISO numérique, nom sur le fond, capitale, ce qu'on apprend] */
type Ligne = [string, string, string, string, string, (1 | 2 | 3)?];

const CAPITALES: Ligne[] = [
  ["europe", "620", "Portugal", "Lisbonne", "Sur l'estuaire du Tage, face à l'Atlantique. Le tremblement de terre de 1755 l'a détruite aux trois quarts et a fait reconstruire son centre en damier.", 1],
  ["europe", "616", "Pologne", "Varsovie", "Sur la Vistule. Rasée à plus de quatre-vingts pour cent en 1944, sa vieille ville a été rebâtie à l'identique d'après des tableaux du XVIIIᵉ siècle.", 2],
  ["europe", "300", "Grèce", "Athènes", "Habitée sans interruption depuis plus de trois mille ans. Elle n'est capitale que depuis 1834 : la première capitale du royaume grec fut Nauplie.", 1],
  ["europe", "40", "Autriche", "Vienne", "Sur le Danube, au débouché des Alpes. Elle a été assiégée deux fois par les Ottomans, en 1529 et en 1683 — c'est la limite de leur avancée en Europe.", 2],
  ["europe", "756", "Suisse", "Berne", "Ni la plus grande ville, ni la plus riche : choisie en 1848 comme compromis entre Zurich l'alémanique et Genève la francophone.", 2],
  ["europe", "578", "Norvège", "Oslo", "Au fond d'un fjord de cent kilomètres. Elle s'est appelée Christiania pendant trois siècles, du nom d'un roi danois, avant de reprendre son nom en 1925.", 2],
  ["europe", "246", "Finlande", "Helsinki", "Sur le golfe de Finlande, en face de Tallinn. Sa rade gèle chaque hiver, et des brise-glaces y tiennent le port ouvert toute l'année.", 2],
  ["europe", "642", "Roumanie", "Bucarest", "Sur la plaine du Danube. Son palais du Parlement, bâti par Ceaușescu, est le bâtiment administratif le plus lourd du monde.", 2],
  ["europe", "191", "Croatie", "Zagreb", "À l'intérieur des terres, loin de la côte dalmate à laquelle on associe le pays — deux Croaties que trois heures de route séparent.", 3],
  ["europe", "372", "Irlande", "Dublin", "Sur la mer d'Irlande, fondée par les Vikings au IXᵉ siècle. Son nom irlandais, Baile Átha Cliath, n'a rien à voir avec le nom anglais.", 2],
  ["europe", "203", "Tchéquie", "Prague", "Sur la Vltava, au centre du bassin de Bohême. Capitale du Saint-Empire sous Charles IV, elle en garde une université fondée en 1348.", 2],
  ["europe", "100", "Bulgarie", "Sofia", "Au pied du mont Vitocha, à cinq cents mètres d'altitude. C'est l'une des plus anciennes villes d'Europe encore habitées.", 3],
  ["europe", "428", "Lettonie", "Riga", "Sur la Baltique, à l'embouchure de la Daugava. La plus grande ville des trois États baltes, et la plus grande concentration d'Art nouveau d'Europe.", 3],
  ["europe", "792", "Turquie", "Ankara", "En Anatolie centrale, loin de la mer. Atatürk l'a préférée à Istanbul en 1923 : trop exposée, trop ottomane, trop tournée vers l'Europe.", 2],
  ["europe", "56", "Belgique", "Bruxelles", "Officiellement bilingue, dans une enclave néerlandophone. Elle abrite la Commission européenne et le Conseil, ce qui lui vaut son autre titre.", 1],

  ["afrique", "818", "Égypte", "Le Caire", "Sur le Nil, à la pointe du delta. La plus grande agglomération d'Afrique, et l'une des plus denses du monde.", 1],
  ["afrique", "404", "Kenya", "Nairobi", "À mille sept cents mètres d'altitude, ce qui lui donne un climat tempéré à deux degrés de l'équateur. Un parc national commence à sept kilomètres du centre.", 2],
  ["afrique", "504", "Maroc", "Rabat", "Sur l'Atlantique, à l'embouchure du Bouregreg. Ni Casablanca la plus peuplée, ni Marrakech la plus visitée : le protectorat français l'a choisie en 1912.", 2],
  ["afrique", "566", "Nigéria", "Abuja", "Construite de toutes pièces à partir de 1980, au centre géographique du pays, pour remplacer Lagos — trop au sud, trop peuplée, trop marquée.", 3],
  ["afrique", "231", "Éthiopie", "Addis-Abeba", "À deux mille cinq cents mètres, la troisième capitale la plus haute du monde. Siège de l'Union africaine.", 2],
  ["afrique", "686", "Sénégal", "Dakar", "Sur la presqu'île du Cap-Vert, le point le plus occidental du continent africain. En face, l'île de Gorée.", 2],
  ["afrique", "288", "Ghana", "Accra", "Sur le golfe de Guinée. Le méridien de Greenwich passe à quelques kilomètres à l'est : la ville est presque à longitude zéro.", 3],
  ["afrique", "12", "Algérie", "Alger", "Sur la Méditerranée, adossée aux collines du Sahel algérois. Sa casbah, bâtie en amphithéâtre, domine la baie.", 1],
  ["afrique", "710", "Afrique du Sud", "Pretoria", "Capitale administrative seulement : Le Cap est capitale législative, Bloemfontein capitale judiciaire. Le pays en compte trois, ce qui est unique.", 3],
  ["afrique", "450", "Madagascar", "Antananarivo", "Sur les hautes terres centrales, à mille deux cents mètres, loin des côtes — ce qui a longtemps protégé le royaume merina.", 3],

  ["asie", "392", "Japon", "Tokyo", "Sur la baie du même nom. Elle s'appelait Edo jusqu'en 1868 ; l'empereur y a transféré sa cour depuis Kyoto, et le nom signifie « capitale de l'est ».", 1],
  ["asie", "410", "Corée du Sud", "Séoul", "Sur le fleuve Han, à quarante kilomètres de la frontière nord — une capitale à portée d'artillerie de son voisin.", 1],
  ["asie", "156", "Chine", "Pékin", "Son nom signifie « capitale du nord », par opposition à Nankin, « capitale du sud ». La Cité interdite en occupe le centre.", 1],
  ["asie", "356", "Inde", "New Delhi", "Construite par les Britanniques à partir de 1911 à côté de la vieille Delhi, dont elle est aujourd'hui un district.", 2],
  ["asie", "704", "Viêt Nam", "Hanoï", "Sur le fleuve Rouge, dans le nord. Le sud a Hô Chi Minh-Ville, plus peuplée : la capitale politique n'est pas la capitale économique.", 2],
  ["asie", "764", "Thaïlande", "Bangkok", "Sur le Chao Phraya. Son nom cérémoniel complet, en thaï, est le plus long nom de lieu du monde.", 1],
  ["asie", "364", "Iran", "Téhéran", "Au pied de l'Elbourz, à mille deux cents mètres. Elle n'est capitale que depuis 1786 : Ispahan et Chiraz l'ont précédée.", 2],
  ["asie", "682", "Arabie Saoudite", "Riyad", "Au centre du plateau du Nedjd, en plein désert, à sept cents kilomètres de toute côte. Son nom signifie « les jardins ».", 2],
  ["asie", "524", "Népal", "Katmandou", "Dans une vallée himalayenne à mille trois cents mètres. Le séisme de 2015 y a détruit une partie des temples classés.", 3],
  ["asie", "360", "Indonésie", "Jakarta", "Sur l'île de Java. Elle s'enfonce de plusieurs centimètres par an, ce qui a décidé le pays à bâtir une nouvelle capitale à Bornéo.", 2],
  ["asie", "398", "Kazakhstan", "Astana", "Sortie de la steppe en 1997, à la place d'Akmola. L'une des capitales les plus froides du monde, avec des hivers à moins quarante.", 3],
  ["asie", "496", "Mongolie", "Oulan-Bator", "La capitale la plus froide du monde en moyenne annuelle. Près de la moitié de la population du pays y vit.", 3],

  ["ameriques", "76", "Brésil", "Brasília", "Bâtie en quarante et un mois au milieu du plateau central, inaugurée en 1960, pour tirer le pays vers l'intérieur. Son plan a la forme d'un avion.", 2],
  ["ameriques", "32", "Argentine", "Buenos Aires", "Sur le Río de la Plata, un estuaire si large qu'on ne voit pas l'autre rive. Un tiers de la population du pays vit dans son agglomération.", 1],
  ["ameriques", "124", "Canada", "Ottawa", "Choisie par la reine Victoria en 1857, entre Toronto l'anglophone et Montréal la francophone — et à bonne distance de la frontière américaine.", 2],
  ["ameriques", "604", "Pérou", "Lima", "Sur la côte désertique du Pacifique. Il n'y pleut presque jamais : quelques millimètres par an, compensés par un brouillard permanent l'hiver.", 1],
  ["ameriques", "170", "Colombie", "Bogota", "Sur un plateau andin à deux mille six cents mètres, à quatre degrés de l'équateur : quinze degrés toute l'année, sans saison chaude.", 2],
  ["ameriques", "152", "Chili", "Santiago", "Dans une cuvette entre la cordillère des Andes et la cordillère de la Côte — d'où une pollution hivernale que le relief empêche d'évacuer.", 2],
  ["ameriques", "68", "Bolivie", "La Paz", "Siège du gouvernement à trois mille six cents mètres, la plus haute du monde à ce titre. Sucre reste la capitale constitutionnelle.", 3],
  ["ameriques", "858", "Uruguay", "Montevideo", "Sur le Río de la Plata, en face de Buenos Aires. Plus de la moitié des habitants du pays y vivent.", 3],
];

export const GEO_CAPITALES: SeedSkill[] = [
  {
    slug: "geo-capitales",
    category: "Capitales",
    title: "Les capitales, sur la carte",
    statement:
      "Quarante-cinq capitales, posées dans l'autre sens : on donne la ville, on cherche le pays. C'est la question que les listes n'apprennent pas à traiter.",
    tip: "Beaucoup de capitales ne sont pas la plus grande ville du pays. Quand une ville vous surprend, c'est souvent qu'elle a été choisie pour arbitrer entre deux autres.",
    difficulty: 2,
    exercises: CAPITALES.map(([region, cible, nom, ville, explication, difficulty]) =>
      pays(region, cible, nom, `${ville} est la capitale de quel pays ? Clique dessus.`, explication, {
        difficulty,
      })
    ),
  },
];
