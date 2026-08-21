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
  if (region.cadre) projection.clipExtent([[0, 0], [region.largeur, region.hauteur]]);

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

  const lignes = pays.map((p) => `  { id: "${p.id}", nom: ${JSON.stringify(p.nom)}, d: "${p.d}" },`);

  const fichier = `/**
 * ${region.titre} — fond de carte.
 *
 * FICHIER GÉNÉRÉ : ne pas modifier à la main.
 *   node scripts/generer-cartes.mjs
 *
 * Tracés : Natural Earth (domaine public), via world-atlas.
 * Projection : ${region.projection === "naturalEarth" ? "Natural Earth I" : "Mercator"}, ajustée à la région.
 * ${pays.length} pays · viewBox 0 0 ${region.largeur} ${region.hauteur}
 */
import type { FondDeCarte } from "./types";

export const ${cle.toUpperCase()}: FondDeCarte = {
  cle: "${cle}",
  titre: ${JSON.stringify(region.titre)},
  largeur: ${region.largeur},
  hauteur: ${region.hauteur},
  pays: [
${lignes.join("\n")}
  ],
};
`;

  writeFileSync(`src/lib/cartes/${cle}.ts`, fichier);
  const poids = Math.round(Buffer.byteLength(fichier) / 1024);
  console.log(`${cle.padEnd(10)} ${String(pays.length).padStart(3)} pays · ${String(poids).padStart(4)} Ko`);
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

/** Un pays sur la carte : son identifiant, son nom, son tracé. */
export type PaysTrace = {
  /** Code ISO 3166-1 numérique, en chaîne. Les territoires sans code ont un id « x-… ». */
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
  pays: PaysTrace[];
};
`
);

console.log("\nsrc/lib/cartes/ — écrit.");
