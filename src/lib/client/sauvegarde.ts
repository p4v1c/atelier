/**
 * Sauvegarder la progression dans un fichier, et la relire.
 *
 * Sans compte, la progression n'existe qu'à un exemplaire, dans le stockage du
 * navigateur du téléphone. Effacer les données de l'application, changer
 * d'appareil, ou simplement casser le téléphone, et deux ans de révisions
 * disparaissent. Un fichier que la personne range où elle veut est le seul
 * filet possible quand il n'y a pas de serveur.
 *
 * Deux chemins, parce que les deux mondes ne rendent pas la main de la même
 * façon :
 *
 *   — dans un navigateur, un lien `download` suffit, le fichier tombe dans les
 *     téléchargements ;
 *   — dans l'application Android, ce lien ne fait rien : la vue web n'a pas de
 *     gestionnaire de téléchargement. Le fichier est donc écrit par le greffon
 *     de système de fichiers, dans les Documents, puis proposé au partage —
 *     ce qui permet de l'envoyer dans un nuage, une messagerie, ailleurs que
 *     dans le téléphone. Une sauvegarde qui reste sur l'appareil qu'elle est
 *     censée protéger ne protège pas de grand-chose.
 *
 * La relecture, elle, passe par `<input type="file">` dans les deux cas : la
 * vue web de Capacitor sait ouvrir le sélecteur de fichiers du système.
 */
import { Capacitor } from "@capacitor/core";
import { Directory, Encoding, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

export type Sauvegarde = { ou: "telechargements" } | { ou: "documents"; chemin: string };

export async function ecrireSauvegarde(nom: string, contenu: string): Promise<Sauvegarde> {
  if (!Capacitor.isNativePlatform()) {
    const url = URL.createObjectURL(new Blob([contenu], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = nom;
    a.click();
    URL.revokeObjectURL(url);
    return { ou: "telechargements" };
  }

  const { uri } = await Filesystem.writeFile({
    path: nom,
    data: contenu,
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
    recursive: true,
  });

  // Le partage est un confort, pas une condition : si l'appareil n'a rien à
  // proposer, le fichier est déjà écrit et la sauvegarde a réussi.
  try {
    await Share.share({ title: "Sauvegarde de l’Atelier", url: uri });
  } catch {
    /* rien à faire */
  }

  return { ou: "documents", chemin: uri.replace(/^file:\/\//, "") };
}
