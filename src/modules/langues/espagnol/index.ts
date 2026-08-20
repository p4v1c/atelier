import { moduleLangue } from "../commun";

/**
 * Espagnol.
 *
 * L'espagnol d'Espagne et celui d'Amérique latine diffèrent par la
 * prononciation (le seseo), le vocabulaire et le tutoiement pluriel. Les
 * dictées alternent entre les deux : c'est la seule façon d'être à l'aise des
 * deux côtés de l'Atlantique.
 */
export const espagnol = moduleLangue({
  id: "espagnol",
  name: "Espagnol",
  tagline: "Du A1 au B2 — Espagne et Amérique latine",
  position: 4,
  langue: "es-ES",
  accents: [
    { etiquette: "es-ES", nom: "Espagne" },
    { etiquette: "es-MX", nom: "Amérique latine" },
  ],
});
