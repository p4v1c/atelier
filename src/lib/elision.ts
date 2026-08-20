/**
 * L'élision, pour les textes qui insèrent un nom propre.
 *
 * « Le carnet de Essai » se lit mal et se remarque. Un pseudo commençant par
 * une voyelle ou un h muet demande « d' » ; les autres gardent « de ».
 *
 * Le h aspiré n'est pas détectable sans dictionnaire : on élide donc devant
 * tout h, ce qui donne « d'Hugo » (juste) mais aussi « d'Henri » (juste) et
 * « d'Hollande » (fautif). Le cas est rare pour un pseudo, et l'erreur inverse
 * — « de Alice » — serait bien plus fréquente et plus voyante.
 */
const VOYELLES = /^[aàâäeéèêëiîïoôöuùûüyhAÀÂÄEÉÈÊËIÎÏOÔÖUÙÛÜYH]/;

/** « de » ou « d' » selon ce qui suit. */
export function de(nom: string): string {
  const propre = nom.trim();
  if (!propre) return "de ";
  return VOYELLES.test(propre) ? "d’" : "de ";
}

/** « le carnet de Claire », « le carnet d'Alice ». */
export function complementDe(prefixe: string, nom: string): string {
  return `${prefixe} ${de(nom)}${nom.trim()}`;
}
