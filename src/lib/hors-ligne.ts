/**
 * Le mode hors ligne.
 *
 * L'application de bureau parle à un serveur : Postgres tient le contenu, les
 * comptes et la progression. L'application Android ne parle à personne. Tout
 * ce qu'elle sait tient dans l'APK, et tout ce qu'elle apprend tient dans le
 * stockage du téléphone.
 *
 * Ce n'était pas une réécriture : le MODE INVITÉ faisait déjà tourner le
 * planificateur dans le navigateur, avec la progression en `localStorage` et
 * le contenu chargé en un bloc par `/api/public/content`. Il ne restait qu'à
 * remplacer ce bloc — servi par une route — par un fichier posé à côté de la
 * page. D'où la petitesse de ce fichier : le mode hors ligne n'ajoute pas un
 * moteur, il change une adresse.
 *
 * Le drapeau est figé à la compilation par `NEXT_PUBLIC_HORS_LIGNE=1`, et non
 * deviné à l'exécution : une application qui hésiterait entre deux origines
 * chercherait un serveur au premier écran, et échouerait dans un avion.
 */
export const HORS_LIGNE = process.env.NEXT_PUBLIC_HORS_LIGNE === "1";

/** Le dossier des fichiers de contenu, relatif à la page. */
export const DOSSIER_HORS_LIGNE = "hors-ligne";

/**
 * L'adresse statique qui répond à la place d'une route publique.
 *
 * Renvoie `null` pour tout le reste : en hors ligne, `/api/auth`,
 * `/api/session` et les autres n'ont pas d'équivalent — il faut que l'appel
 * échoue franchement plutôt que de partir chercher un serveur absent.
 */
export function fichierStatique(chemin: string): string | null {
  if (chemin === "/api/public/modules") return `${DOSSIER_HORS_LIGNE}/modules.json`;

  const contenu = chemin.match(/^\/api\/public\/content\?module=([a-z0-9-]+)$/);
  if (contenu) return `${DOSSIER_HORS_LIGNE}/contenu/${contenu[1]}.json`;

  const lecon = chemin.match(/^\/api\/public\/lessons\/(.+)$/);
  if (lecon) return `${DOSSIER_HORS_LIGNE}/lecons/${lecon[1]}.json`;

  return null;
}
