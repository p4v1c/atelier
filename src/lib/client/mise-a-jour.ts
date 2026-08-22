/**
 * La mise à jour du contenu depuis GitHub.
 *
 * L'idée tenait de l'impossible tant qu'on imaginait un serveur : il en
 * faudrait un, à tenir et à payer, pour distribuer des fichiers qui ne
 * changent pas d'un utilisateur à l'autre. Or GitHub distribue déjà des
 * fichiers — les pièces jointes d'une publication — et sait les servir à un
 * navigateur. L'application n'a donc rien à interroger d'autre.
 *
 * Le protocole tient en trois temps :
 *
 *   1. lire `manifeste.json` de la dernière publication : il donne une version
 *      et la liste des fichiers, chacun avec sa taille ;
 *   2. comparer cette version à celle qui est installée ;
 *   3. télécharger les fichiers un à un et les ranger dans le dépôt.
 *
 * Ce qui n'est PAS fait ici, et volontairement : remplacer l'application
 * elle-même. Android n'autorise pas une application à se réinstaller sans
 * l'accord explicite de la personne, et c'est heureux. Quand une version neuve
 * de l'APK paraît, l'écran le dit et ouvre la page de publication ; le reste
 * appartient à la personne qui tient le téléphone.
 */
import { ecrireFichier, poserVersion, versionInstallee } from "./depot-hors-ligne";

/** Le dépôt qui publie le contenu. */
export const DEPOT = "p4v1c/atelier";

export type FichierManifeste = {
  /** La clé sous laquelle ranger le fichier, telle que l'API la demandera. */
  chemin: string;
  /** Le nom de la pièce jointe sur GitHub. */
  nom: string;
  octets: number;
  /**
   * Fichier groupé : son contenu est un objet dont chaque clé donne un chemin
   * à ranger séparément. Les 1033 cours voyagent ainsi en UN téléchargement,
   * puis se rangent en 1033 entrées — sans quoi il faudrait mille requêtes à
   * l'aller, ou relire quinze mégaoctets à chaque cours ouvert.
   */
  eclater?: string;
};

export type Manifeste = {
  /** Version du contenu, au format « 2026-08-23 ». */
  version: string;
  /** Version de l'APK que ce contenu accompagne. */
  application: string;
  fichiers: FichierManifeste[];
};

export type EtatMiseAJour =
  | { etat: "inconnu" }
  | { etat: "recherche" }
  | { etat: "a-jour"; version: string }
  | { etat: "disponible"; manifeste: Manifeste; octets: number }
  | { etat: "telechargement"; fait: number; total: number }
  | { etat: "installe"; version: string }
  | { etat: "echec"; message: string };

/**
 * L'adresse d'une pièce jointe de la dernière publication.
 *
 * GitHub redirige `releases/latest/download/<nom>` vers le fichier lui-même,
 * et sert la réponse avec un en-tête d'origine permissive : un navigateur peut
 * la lire depuis n'importe où, y compris depuis le `https://localhost` d'une
 * application Android.
 */
export function urlPiece(nom: string, depot = DEPOT): string {
  return `${BASE_PUBLICATION ?? `https://github.com/${depot}/releases/latest/download`}/${nom}`;
}

/**
 * De quoi pointer ailleurs que GitHub : un miroir, ou un serveur local le
 * temps de vérifier que la mise à jour fonctionne. Vide en temps normal.
 */
const BASE_PUBLICATION = process.env.NEXT_PUBLIC_BASE_PUBLICATION || null;

/** La page où l'on va chercher un APK plus récent. */
export function urlPublications(depot = DEPOT): string {
  return `https://github.com/${depot}/releases/latest`;
}

/** Version du contenu embarqué dans l'APK, écrite à la construction. */
export const VERSION_EMBARQUEE = process.env.NEXT_PUBLIC_VERSION_CONTENU ?? "inconnue";

/** Version de l'application, écrite à la construction. */
export const VERSION_APPLICATION = process.env.NEXT_PUBLIC_VERSION_APP ?? "inconnue";

/** La version du contenu réellement en service : celle du dépôt, sinon l'APK. */
export async function versionCourante(): Promise<string> {
  return (await versionInstallee()) ?? VERSION_EMBARQUEE;
}

/** Interroge GitHub. Ne télécharge rien. */
export async function chercher(depot = DEPOT): Promise<EtatMiseAJour> {
  let manifeste: Manifeste;
  try {
    const r = await fetch(urlPiece("manifeste.json", depot), { cache: "no-store" });
    if (!r.ok) {
      return {
        etat: "echec",
        message:
          r.status === 404
            ? "Aucune mise à jour n’a encore été publiée."
            : `GitHub a répondu ${r.status}.`,
      };
    }
    manifeste = (await r.json()) as Manifeste;
  } catch {
    return { etat: "echec", message: "Pas de connexion, ou GitHub injoignable." };
  }

  const courante = await versionCourante();
  if (manifeste.version <= courante) return { etat: "a-jour", version: courante };

  const octets = manifeste.fichiers.reduce((n, f) => n + f.octets, 0);
  return { etat: "disponible", manifeste, octets };
}

/**
 * Télécharge et installe. La version n'est posée qu'À LA FIN : si le
 * téléchargement s'interrompt, l'application reste sur l'ancienne version et
 * proposera de recommencer, plutôt que de se croire à jour avec un contenu
 * incomplet.
 */
export async function installer(
  manifeste: Manifeste,
  avancement: (fait: number, total: number) => void,
  depot = DEPOT
): Promise<EtatMiseAJour> {
  const total = manifeste.fichiers.length;
  for (let i = 0; i < total; i++) {
    const f = manifeste.fichiers[i]!;
    try {
      const r = await fetch(urlPiece(f.nom, depot), { cache: "no-store" });
      if (!r.ok) return { etat: "echec", message: `${f.nom} : GitHub a répondu ${r.status}.` };
      if (f.eclater) {
        const groupe = (await r.json()) as Record<string, unknown>;
        for (const [cle, valeur] of Object.entries(groupe)) {
          await ecrireFichier(`${f.eclater}${cle}.json`, JSON.stringify(valeur));
        }
      } else {
        await ecrireFichier(f.chemin, await r.text());
      }
    } catch {
      return { etat: "echec", message: `Téléchargement interrompu sur ${f.nom}.` };
    }
    avancement(i + 1, total);
  }
  await poserVersion(manifeste.version);
  return { etat: "installe", version: manifeste.version };
}
