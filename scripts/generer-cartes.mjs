/**
 * node scripts/generer-cartes.mjs
 *
 * Fabrique les fonds de carte de l'Atlas : src/lib/cartes/<région>.ts.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * D'OÙ VIENNENT LES TRACÉS
 *
 * De Natural Earth, qui est dans le DOMAINE PUBLIC, redistribué en TopoJSON
 * par le paquet world-atlas. Rien n'est dessiné à la main ici : dessiner des
 * frontières de mémoire produirait une carte fausse, et une carte fausse est
 * pire que pas de carte du tout dans un module de géographie.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI UN FICHIER GÉNÉRÉ PLUTÔT QU'UNE DÉPENDANCE
 *
 * world-atlas, topojson-client et d3-geo sont des dépendances de DÉVELOPPEMENT.
 * Elles ne servent qu'ici. Ce script projette une bonne fois pour toutes et
 * n'écrit que des chemins SVG : le navigateur reçoit des `d="M…"` et rien
 * d'autre — pas de projection à recalculer, pas de bibliothèque à charger,
 * pas de TopoJSON à décompresser.
 *
 * Le résultat est versionné. Un clone du dépôt a ses cartes sans installer
 * quoi que ce soit, et sans réseau.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { geoMercator, geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import countries from "i18n-iso-countries";
import fr from "i18n-iso-countries/langs/fr.json" with { type: "json" };

countries.registerLocale(fr);

/* Trois territoires n'ont pas de code ISO numérique : ils sont nommés ici. */
const SANS_ISO = {
  "-99": null, // plusieurs entités partagent ce code dans Natural Earth
};
const PAR_NOM_ANGLAIS = {
  "N. Cyprus": "Chypre du Nord",
  Somaliland: "Somaliland",
  Kosovo: "Kosovo",
};

/* Quelques noms de la table ISO sont exacts mais peu usités : on prend celui
   qu'un francophone emploierait devant une carte. */
const NOMS_COURANTS = {
  840: "États-Unis",
  826: "Royaume-Uni",
  410: "Corée du Sud",
  408: "Corée du Nord",
  203: "Tchéquie",
  807: "Macédoine du Nord",
  384: "Côte d'Ivoire",
  180: "République démocratique du Congo",
  178: "République du Congo",
  834: "Tanzanie",
  626: "Timor oriental",
  516: "Namibie",
  760: "Syrie",
  418: "Laos",
  498: "Moldavie",
  643: "Russie",
  392: "Japon",
  156: "Chine",
  356: "Inde",
  364: "Iran",
  368: "Irak",
  704: "Viêt Nam",
  116: "Cambodge",
  784: "Émirats arabes unis",
  36: "Australie",
  554: "Nouvelle-Zélande",
  598: "Papouasie-Nouvelle-Guinée",
  76: "Brésil",
  152: "Chili",
  862: "Venezuela",
  591: "Panama",
  68: "Bolivie",
};

/**
 * Ce que chaque carte montre.
 *
 * Le découpage est éditorial, pas géographique : la Russie est retirée de la
 * carte d'Europe parce qu'elle en écrase l'échelle à elle seule, et la Turquie
 * y figure parce qu'on l'y cherche. Ces choix se discutent ; ils sont ici.
 *
 * `cadre` est la FENÊTRE en longitude/latitude, et non la liste des pays.
 * Cadrer sur les pays retenus donnait une carte minuscule au milieu d'une mer
 * vide : les Açores, les Canaries et le Svalbard appartiennent au tracé du
 * Portugal, de l'Espagne et de la Norvège, et trois confettis à deux mille
 * kilomètres suffisaient à faire reculer toute l'Europe. La fenêtre est donc
 * choisie à la main, et ce qui déborde est rogné — comme dans n'importe quel
 * atlas imprimé.
 */
const REGIONS = {
  monde: {
    titre: "Le monde",
    projection: "naturalEarth",
    largeur: 980,
    hauteur: 500,
    // Tout, sauf l'Antarctique : il occupe un quart de la carte pour rien.
    garder: (f) => f.properties.name !== "Antarctica",
  },
  europe: {
    titre: "L'Europe",
    projection: "mercator",
    largeur: 820,
    hauteur: 790,
    cadre: [[-25, 34], [45, 71.5]],
    codes: `PT ES FR IE GB BE NL LU DE CH AT IT MT SI HR BA RS ME AL MK GR BG RO HU SK CZ PL
            LT LV EE FI SE NO DK IS UA BY MD CY TR AD LI`,
  },
  afrique: {
    titre: "L'Afrique",
    projection: "mercator",
    largeur: 700,
    hauteur: 765,
    cadre: [[-20, -36], [53, 38]],
    codes: `MA DZ TN LY EG MR ML NE TD SD SS ER DJ SO ET KE UG RW BI TZ MZ MW ZM ZW BW NA ZA
            LS SZ AO CD CG GA GQ CM CF NG BJ TG GH CI LR SL GN GW SN GM BF MG EH`,
  },
  asie: {
    titre: "L'Asie",
    projection: "mercator",
    largeur: 940,
    hauteur: 608,
    cadre: [[25, -11], [147, 56]],
    codes: `TR SY LB IL JO IQ IR SA YE OM AE QA KW GE AM AZ KZ UZ TM TJ KG AF PK IN NP BT BD
            LK MM TH LA KH VN MY ID PH CN MN KP KR JP TW BN`,
  },
  ameriques: {
    titre: "Les Amériques",
    projection: "mercator",
    largeur: 640,
    hauteur: 816,
    cadre: [[-170, -56], [-34, 72]],
    codes: `CA US MX GT BZ SV HN NI CR PA CU DO HT JM TT CO VE GY SR EC PE BR BO PY UY AR CL`,
  },
};

/**
 * Les mers et les océans.
 *
 * Ils ne viennent PAS de Natural Earth : le paquet ne distribue que les
 * terres, et aucun paquet npm ne redistribue ses polygones marins. Ces zones
 * sont donc écrites ici, à la main, et c'est un choix qu'il faut assumer à
 * voix haute.
 *
 * Une frontière terrestre inventée serait un mensonge : le tracé du Portugal
 * est un fait. Les limites d'une mer, non. Elles sont CONVENTIONNELLES —
 * l'Organisation hydrographique internationale les fixe par des lignes droites
 * entre des caps, et les cartes ne s'accordent pas toutes. Ce que ces zones
 * approchent est une convention, pas un contour ; l'exercice ne demande donc
 * pas de suivre un rivage au pixel, mais de savoir OÙ se trouve une mer.
 *
 * Deux règles tiennent l'ensemble honnête. Les zones ne se chevauchent jamais,
 * sans quoi un clic aurait deux bonnes réponses. Et elles passent SOUS les
 * terres : le dessin des pays les recouvre, si bien qu'une zone un peu large
 * ne déborde jamais visiblement sur un continent.
 */
const MERS = [
  {
    id: "mediterranee",
    nom: "Mer Méditerranée",
    regions: ["europe", "afrique", "asie", "monde"],
    zone: [[[-6, 35], [-6, 44], [4, 44], [13, 46], [19, 46], [26, 41], [30, 37], [36, 37], [36, 31], [20, 31], [10, 32]]],
  },
  {
    id: "mer-du-nord",
    nom: "Mer du Nord",
    regions: ["europe"],
    zone: [[[-4, 51], [-4, 61], [8, 61], [9, 57], [8, 53.5], [1, 51]]],
  },
  {
    id: "mer-baltique",
    nom: "Mer Baltique",
    regions: ["europe"],
    zone: [[[10, 54], [10, 60], [16, 66], [25, 66], [30, 60], [21, 53.5]]],
  },
  {
    id: "la-manche",
    nom: "La Manche",
    regions: ["europe"],
    zone: [[[-6, 48.2], [-6, 51], [2, 51.8], [2, 49.2]]],
  },
  {
    id: "mer-noire",
    nom: "Mer Noire",
    regions: ["europe", "asie"],
    zone: [[[27, 40.5], [27, 47], [42, 47], [42, 40.5]]],
  },
  {
    id: "mer-de-norvege",
    nom: "Mer de Norvège",
    regions: ["europe"],
    zone: [[[-6, 63], [-6, 71.5], [22, 71.5], [18, 68], [8, 63]]],
  },
  {
    id: "mer-rouge",
    nom: "Mer Rouge",
    regions: ["afrique", "asie"],
    zone: [[[32.2, 29.5], [35.5, 29.5], [44, 12.8], [43, 11.5], [37, 13.5], [32.2, 26]]],
  },
  {
    id: "golfe-de-guinee",
    nom: "Golfe de Guinée",
    regions: ["afrique"],
    zone: [[[-5, -6], [-5, 6], [9, 6], [9, -6]]],
  },
  {
    id: "canal-du-mozambique",
    nom: "Canal du Mozambique",
    regions: ["afrique"],
    zone: [[[34, -26], [34, -11], [46, -11], [46, -26]]],
  },
  {
    id: "golfe-persique",
    nom: "Golfe Persique",
    regions: ["asie"],
    zone: [[[47.5, 29], [51, 31], [57, 26], [56, 23.5], [50, 26.5]]],
  },
  {
    id: "mer-caspienne",
    nom: "Mer Caspienne",
    regions: ["asie"],
    zone: [[[46.5, 36.5], [46.5, 47], [55, 47], [55, 36.5]]],
  },
  {
    id: "mer-d-arabie",
    nom: "Mer d'Arabie",
    regions: ["asie"],
    zone: [[[52, 3], [52, 21], [57, 22], [70, 25], [76, 8], [62, 2]]],
  },
  {
    id: "golfe-du-bengale",
    nom: "Golfe du Bengale",
    regions: ["asie"],
    zone: [[[78, 3], [80, 22], [92, 22], [92, 5]]],
  },
  {
    id: "mer-de-chine-meridionale",
    nom: "Mer de Chine méridionale",
    regions: ["asie"],
    zone: [[[105, -3], [105, 22], [122, 22], [120, 4], [112, -3]]],
  },
  {
    id: "mer-de-chine-orientale",
    nom: "Mer de Chine orientale",
    regions: ["asie"],
    zone: [[[118, 24], [120, 32.5], [131, 32.5], [129, 24]]],
  },
  {
    id: "mer-jaune",
    nom: "Mer Jaune",
    regions: ["asie"],
    zone: [[[118, 33.5], [118, 41], [126, 41], [126, 33.5]]],
  },
  {
    id: "mer-du-japon",
    nom: "Mer du Japon",
    regions: ["asie"],
    zone: [[[128, 34], [128, 46], [142, 46], [141, 34]]],
  },
  {
    id: "mer-des-caraibes",
    nom: "Mer des Caraïbes",
    regions: ["ameriques"],
    zone: [[[-88, 9], [-88, 21], [-60, 19], [-60, 9]]],
  },
  {
    id: "golfe-du-mexique",
    nom: "Golfe du Mexique",
    regions: ["ameriques"],
    zone: [[[-97, 18], [-97, 30.5], [-81, 30.5], [-81, 22], [-90, 18]]],
  },
  {
    id: "baie-d-hudson",
    nom: "Baie d'Hudson",
    regions: ["ameriques"],
    zone: [[[-95, 51], [-95, 66], [-76, 66], [-76, 51]]],
  },
  {
    id: "mer-de-bering",
    nom: "Mer de Béring",
    regions: ["ameriques"],
    zone: [[[-169.5, 52.5], [-169.5, 65], [-158, 65], [-162, 52.5]]],
  },
  {
    id: "mer-d-irlande",
    nom: "Mer d'Irlande",
    regions: ["europe"],
    zone: [[[-6.6, 51.7], [-6.6, 55], [-2.6, 55], [-2.6, 51.7]]],
  },
  {
    id: "golfe-de-gascogne",
    nom: "Golfe de Gascogne",
    regions: ["europe"],
    zone: [[[-8, 43.4], [-8, 48], [-1.2, 48], [-1.2, 43.4]]],
  },
  {
    id: "golfe-d-aden",
    nom: "Golfe d'Aden",
    regions: ["afrique", "asie"],
    zone: [[[44, 10.5], [44, 15], [52, 15], [52, 10.5]]],
  },
  {
    id: "mer-d-andaman",
    nom: "Mer d'Andaman",
    regions: ["asie"],
    zone: [[[92.5, 5], [92.5, 17], [99, 17], [99, 5]]],
  },
  {
    id: "ocean-arctique",
    nom: "Océan Arctique",
    regions: ["ameriques", "monde"],
    parRegion: {
      ameriques: [[[-169, 67], [-169, 72], [-60, 72], [-60, 67]]],
      monde: [[[-170, 68], [170, 68], [170, 84], [-170, 84]]],
    },
  },
  {
    id: "ocean-atlantique",
    nom: "Océan Atlantique",
    regions: ["europe", "afrique", "ameriques", "monde"],
    parRegion: {
      europe: [[[-25, 34], [-25, 63], [-14, 63], [-13, 55], [-10, 52], [-10, 44], [-9, 36], [-16, 34]]],
      afrique: [[[-20, -36], [-20, -4], [-8, -4], [5, -24], [14, -36]]],
      ameriques: [[[-58, -56], [-58, 2], [-50, 10], [-58, 20], [-70, 33], [-70, 44], [-56, 48], [-44, 58], [-34, 62], [-34, -56]]],
      monde: [[[-65, -55], [-65, 8], [-80, 25], [-70, 45], [-45, 58], [-10, 58], [-10, 36], [-18, 15], [12, -5], [18, -35], [15, -55]]],
    },
  },
  {
    id: "ocean-indien",
    nom: "Océan Indien",
    regions: ["afrique", "asie", "monde"],
    parRegion: {
      afrique: [[[20, -36], [53, -36], [53, -8], [48, -12], [47, -26], [40, -31], [30, -35]]],
      asie: [[[55, -11], [55, -1], [80, 0], [100, -3], [110, -11]]],
      monde: [[[22, -55], [22, -30], [40, -10], [52, 10], [75, 20], [95, 10], [115, -10], [115, -55]]],
    },
  },
  {
    id: "ocean-pacifique",
    nom: "Océan Pacifique",
    regions: ["ameriques", "monde"],
    parRegion: {
      ameriques: [[[-169.5, -56], [-169.5, 52], [-140, 52], [-126, 40], [-116, 25], [-100, 12], [-84, 2], [-78, -18], [-72, -56]]],
      /* Le Pacifique est coupé en deux par le bord de la carte : une seule
         boucle ne peut pas l'entourer. Deux anneaux, un de chaque côté. */
      monde: [
        [[-179.9, -55], [-179.9, 60], [-125, 50], [-105, 15], [-80, 0], [-72, -30], [-70, -55]],
        [[120, -10], [120, 50], [179.9, 60], [179.9, -55], [150, -50], [135, -10]],
      ],
    },
  },
];

/**
 * Une arête de deux degrés au plus.
 *
 * d3 relie deux sommets par une géodésique, qui bombe vers le pôle en
 * Mercator : un rectangle en longitude/latitude s'y déformerait, et deux zones
 * voisines finiraient par se chevaucher. En posant soi-même les points
 * intermédiaires, il ne reste rien à interpoler.
 */
function densifier(anneau, pas = 2) {
  const points = [];
  for (let i = 0; i < anneau.length; i++) {
    const [x1, y1] = anneau[i];
    const [x2, y2] = anneau[(i + 1) % anneau.length];
    const n = Math.max(1, Math.ceil(Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1)) / pas));
    for (let k = 0; k < n; k++) points.push([x1 + ((x2 - x1) * k) / n, y1 + ((y2 - y1) * k) / n]);
  }
  points.push(points[0]);
  return points;
}

/**
 * L'enroulement, et le piège qu'il tend.
 *
 * Sur une sphère, un anneau fermé délimite DEUX régions : la zone et tout le
 * reste du globe. Seul le sens de parcours dit laquelle. d3-geo attend le sens
 * HORAIRE en longitude/latitude — l'inverse de ce que prescrit la norme
 * GeoJSON, et l'inverse de l'intuition. Les tracés de Natural Earth arrivent
 * déjà dans ce sens ; les zones écrites à la main, non.
 *
 * À l'envers, rien ne plante : la zone remplit toute la carte. Les mers
 * s'empilaient alors les unes sur les autres, chaque clic tombait sur celle du
 * dessus, et la correction annonçait l'océan Pacifique où qu'on ait cliqué.
 */
function sensHoraire(anneau) {
  let aire = 0;
  for (let i = 0; i < anneau.length - 1; i++) {
    aire += anneau[i][0] * anneau[i + 1][1] - anneau[i + 1][0] * anneau[i][1];
  }
  return aire < 0 ? anneau : [...anneau].reverse();
}

function geometrieMer(mer, cle) {
  const anneaux = mer.parRegion?.[cle] ?? mer.zone;
  if (!anneaux) return null;
  const polygones = anneaux.map((a) => [sensHoraire(densifier(a))]);
  return polygones.length === 1
    ? { type: "Polygon", coordinates: polygones[0] }
    : { type: "MultiPolygon", coordinates: polygones };
}

const A2_VERS_NUM = {};
for (const a2 of Object.keys(countries.getAlpha2Codes())) {
  A2_VERS_NUM[a2] = String(Number(countries.alpha2ToNumeric(a2)));
}

function nomFrancais(f) {
  const parNom = PAR_NOM_ANGLAIS[f.properties.name];
  if (parNom) return parNom;
  const num = Number(f.id);
  if (NOMS_COURANTS[num]) return NOMS_COURANTS[num];
  const a2 = countries.numericToAlpha2(f.id);
  return (a2 && countries.getName(a2, "fr")) || f.properties.name;
}

/** Un identifiant stable, même pour les trois territoires sans code ISO. */
function identifiant(f) {
  if (f.id && f.id !== "-99") return String(Number(f.id));
  return `x-${f.properties.name.toLowerCase().replace(/[^a-z]+/g, "-")}`;
}

/* Le 50 m donne des côtes lisibles à l'échelle d'un continent ; le 110 m
   suffit au planisphère et pèse cinq fois moins. */
const source = (resolution) =>
  JSON.parse(readFileSync(`node_modules/world-atlas/countries-${resolution}.json`, "utf8"));

mkdirSync("src/lib/cartes", { recursive: true });

const index = [];

for (const [cle, region] of Object.entries(REGIONS)) {
  const topo = source(cle === "monde" ? "110m" : "50m");
  const toutes = feature(topo, topo.objects.countries).features;

  const codes = region.codes
    ? new Set(region.codes.trim().split(/\s+/).map((a2) => A2_VERS_NUM[a2]))
    : null;

  const retenues = toutes.filter((f) => {
    if (region.garder && !region.garder(f)) return false;
    if (!codes) return true;
    return codes.has(String(Number(f.id)));
  });

  /* Sur quoi la projection se cale.
     Un cadre est donné en quatre POINTS, pas en polygone : d3 relierait les
     sommets d'un polygone par des géodésiques, qui bombent en Mercator et
     décaleraient la fenêtre. Quatre points isolés ne s'interpolent pas, et en
     Mercator leur boîte englobante est exactement le rectangle voulu. */
  const [[ouest, sud], [est, nord]] = region.cadre ?? [[0, 0], [0, 0]];
  const repere = region.cadre
    ? { type: "MultiPoint", coordinates: [[ouest, sud], [est, sud], [est, nord], [ouest, nord]] }
    : { type: "FeatureCollection", features: retenues };
  const marge = region.cadre ? 0 : 12;
  const projection = (region.projection === "naturalEarth" ? geoNaturalEarth1() : geoMercator()).fitExtent(
    [
      [marge, marge],
      [region.largeur - marge, region.hauteur - marge],
    ],
    repere
  );

  /* Le rognage se pose APRÈS l'ajustement, que d3 fait à cadre libre. Sans
     lui, le Svalbard et les Açores restent dans le tracé de la Norvège et du
     Portugal : invisibles hors du viewBox, mais bien présents dans le fichier
     — et à cette échelle, en Mercator, leurs coordonnées pèsent lourd. */
  projection.clipExtent([[0, 0], [region.largeur, region.hauteur]]);

  /* Le pixel entier suffit : le viewBox fait moins de mille unités de large,
     et une carte rendue à cette taille ne montre pas le dixième de pixel.
     L'arrondi divise le poids du fichier par quatre — et un fond de carte
     versionné qui pèse trois cents kilo-octets finirait dans le paquet de
     chaque page, ce qui n'est pas acceptable pour un dessin.

     On retire aussi les segments devenus nuls après arrondi : deux points
     confondus produisent un « l0,0 » que le navigateur trace pour rien. */
  const tracer = geoPath(projection).pointRadius(1);
  const arrondir = (d) =>
    d
      .replace(/-?\d+\.\d+/g, (n) => String(Math.round(Number(n))))
      .replace(/L(-?\d+),(-?\d+)(?=L\1,\2(?:[LZ]|$))/g, "")
      .replace(/M(-?\d+),(-?\d+)Z/g, "");

  const tous = retenues
    .map((f) => ({ id: identifiant(f), nom: nomFrancais(f), d: arrondir(tracer(f) ?? "") }))
    .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));

  /* Un pays que le rognage a fait disparaître ne doit surtout pas rester dans
     la liste : il serait invisible sur la carte et pourtant cliquable dans le
     repli d'accessibilité — un exercice injouable. On le retire, et on le dit,
     parce qu'un pays perdu en silence est un cadre à revoir. */
  const pays = tous.filter((p) => p.d.length > 0);
  const perdus = tous.filter((p) => p.d.length === 0).map((p) => p.nom);
  if (perdus.length) console.log(`  ⚠ hors cadre, retirés : ${perdus.join(", ")}`);

  /* Les mers passent par le même chemin que les terres : projetées, rognées,
     arrondies. Elles sortent AVANT les pays dans le fichier, et le composant
     les dessine dans cet ordre — les terres par-dessus. */
  const mers = MERS.filter((m) => m.regions.includes(cle))
    .map((m) => ({ id: m.id, nom: m.nom, d: arrondir(tracer(geometrieMer(m, cle)) ?? "") }))
    .filter((m) => m.d.length > 0)
    .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));

  /* Le garde-fou de l'enroulement : une zone retournée couvre exactement le
     cadre. On mesure la surface projetée, et on refuse de livrer une carte où
     une mer avale la carte entière. */
  const aire = geoPath(projection).area;
  const cadreAire = region.largeur * region.hauteur;
  for (const m of MERS.filter((m) => m.regions.includes(cle))) {
    const part = aire(geometrieMer(m, cle)) / cadreAire;
    if (part > 0.85) {
      throw new Error(
        `${cle} : « ${m.nom} » couvre ${Math.round(part * 100)} % de la carte — anneau à l'envers ?`
      );
    }
  }

  const attendues = MERS.filter((m) => m.regions.includes(cle)).length;
  if (mers.length !== attendues) {
    console.log(`  ⚠ ${attendues - mers.length} mer(s) hors cadre, retirée(s)`);
  }

  const ligne = (t) => `  { id: "${t.id}", nom: ${JSON.stringify(t.nom)}, d: "${t.d}" },`;
  const lignes = pays.map(ligne);
  const lignesMers = mers.map(ligne);

  const fichier = `/**
 * ${region.titre} — fond de carte.
 *
 * FICHIER GÉNÉRÉ : ne pas modifier à la main.
 *   node scripts/generer-cartes.mjs
 *
 * Tracés : Natural Earth (domaine public), via world-atlas.
 * Projection : ${region.projection === "naturalEarth" ? "Natural Earth I" : "Mercator"}, ajustée à la région.
 * ${pays.length} pays · ${mers.length} mers · viewBox 0 0 ${region.largeur} ${region.hauteur}
 */
import type { FondDeCarte } from "./types";

export const ${cle.toUpperCase()}: FondDeCarte = {
  cle: "${cle}",
  titre: ${JSON.stringify(region.titre)},
  largeur: ${region.largeur},
  hauteur: ${region.hauteur},
  mers: [
${lignesMers.join("\n")}
  ],
  pays: [
${lignes.join("\n")}
  ],
};
`;

  writeFileSync(`src/lib/cartes/${cle}.ts`, fichier);
  const poids = Math.round(Buffer.byteLength(fichier) / 1024);
  console.log(
    `${cle.padEnd(10)} ${String(pays.length).padStart(3)} pays · ${String(mers.length).padStart(2)} mers · ${String(poids).padStart(4)} Ko`
  );
  index.push({ cle, titre: region.titre, largeur: region.largeur, hauteur: region.hauteur });
}

/* Le catalogue des régions, et RIEN d'autre.
   Aucun tracé ici : ce fichier est importé par le registre des types
   d'exercices, donc par le navigateur, sur toutes les pages. Y agréger les
   cinq fonds ferait entrer quatre cents kilo-octets de dessin dans le paquet
   de chaque écran — les tracés se chargent à la demande, région par région,
   depuis le composant de carte. */
const regionsFichier = `/**
 * Les régions cartographiées, sans leurs tracés.
 *
 * FICHIER GÉNÉRÉ : ne pas modifier à la main.
 *   node scripts/generer-cartes.mjs
 *
 * Ce fichier est volontairement minuscule : il est importé par le registre
 * des types d'exercices, donc par le navigateur sur toutes les pages. Les
 * tracés vivent dans src/lib/cartes/<région>.ts et ne se chargent qu'à
 * l'ouverture d'une carte.
 */

export type RegionCarte = { cle: string; titre: string; largeur: number; hauteur: number };

export const REGIONS_CARTE: RegionCarte[] = [
${index.map((r) => `  { cle: "${r.cle}", titre: ${JSON.stringify(r.titre)}, largeur: ${r.largeur}, hauteur: ${r.hauteur} },`).join("\n")}
];

export const CLES_REGION: string[] = REGIONS_CARTE.map((r) => r.cle);

export function regionCarte(cle: string): RegionCarte | null {
  return REGIONS_CARTE.find((r) => r.cle === cle) ?? null;
}
`;
writeFileSync("src/lib/cartes/regions.ts", regionsFichier);

writeFileSync(
  "src/lib/cartes/types.ts",
  `/**
 * Un fond de carte : des chemins SVG déjà projetés, et rien d'autre.
 *
 * Le navigateur ne projette rien et ne charge aucune bibliothèque de
 * cartographie : tout le calcul a eu lieu dans scripts/generer-cartes.mjs.
 */

/** Un pays ou une mer sur la carte : son identifiant, son nom, son tracé. */
export type Trace = {
  /**
   * Pour un pays : le code ISO 3166-1 numérique, en chaîne — ou « x-… » pour
   * les territoires qui n'en ont pas. Pour une mer : un mot-clé.
   */
  id: string;
  nom: string;
  /** L'attribut d d'un <path>, déjà projeté dans le viewBox du fond. */
  d: string;
};

export type FondDeCarte = {
  cle: string;
  titre: string;
  largeur: number;
  hauteur: number;
  /**
   * Les zones marines, dessinées SOUS les terres.
   *
   * Elles n'ont pas la même nature que les pays, et le code ne doit pas
   * l'oublier : un tracé de côte est un fait, les limites d'une mer sont une
   * convention. L'en-tête de scripts/generer-cartes.mjs dit laquelle.
   */
  mers: Trace[];
  pays: Trace[];
};
`
);

console.log("\nsrc/lib/cartes/ — écrit.");
