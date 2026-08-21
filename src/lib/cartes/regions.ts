/**
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
  { cle: "monde", titre: "Le monde", largeur: 980, hauteur: 500 },
  { cle: "europe", titre: "L'Europe", largeur: 820, hauteur: 790 },
  { cle: "afrique", titre: "L'Afrique", largeur: 700, hauteur: 765 },
  { cle: "asie", titre: "L'Asie", largeur: 940, hauteur: 608 },
  { cle: "ameriques", titre: "Les Amériques", largeur: 640, hauteur: 816 },
];

export const CLES_REGION: string[] = REGIONS_CARTE.map((r) => r.cle);

export function regionCarte(cle: string): RegionCarte | null {
  return REGIONS_CARTE.find((r) => r.cle === cle) ?? null;
}
