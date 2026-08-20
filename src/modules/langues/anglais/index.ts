import { moduleLangue } from "../commun";

/**
 * Anglais.
 *
 * Les accents ne sont pas un ornement : un apprenant qui n'a entendu que la
 * BBC ne comprend pas un Américain, et réciproquement. Les dictées alternent,
 * délibérément.
 */
export const anglais = moduleLangue({
  id: "anglais",
  name: "Anglais",
  tagline: "Du A1 au B2 — vocabulaire, écoute, dictée, prononciation",
  position: 3,
  langue: "en-GB",
  accents: [
    { etiquette: "en-GB", nom: "Britannique" },
    { etiquette: "en-US", nom: "Américain" },
  ],
});
