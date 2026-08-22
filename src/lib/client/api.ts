/**
 * Client HTTP. Une seule fonction, un seul endroit où traiter les erreurs.
 *
 * C'est aussi le seul endroit qui sait que l'application Android n'a pas de
 * serveur : hors ligne, les trois routes publiques sont détournées vers les
 * fichiers embarqués dans l'APK, et toute autre route échoue tout de suite,
 * sans requête réseau. Le reste du code ignore la distinction.
 */
import { HORS_LIGNE, fichierStatique } from "../hors-ligne";
import { lireFichier } from "./depot-hors-ligne";
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly details?: Record<string, string[]>
  ) {
    super(message);
  }
}

export async function api<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (HORS_LIGNE) {
    const fichier = fichierStatique(path);
    if (!fichier) {
      throw new ApiError(0, "hors_ligne", "Cette fonction demande une connexion au serveur.");
    }
    // Le contenu téléchargé depuis GitHub prime sur celui de l'APK. Rien
    // n'écrase les fichiers du paquet : ils restent le repli si le dépôt est
    // vide, illisible, ou volontairement effacé.
    const majour = await lireFichier(fichier);
    if (majour !== null) return JSON.parse(majour) as T;

    const r = await fetch(fichier);
    if (!r.ok) {
      // 404 sur un cours sans leçon : le code appelant attend déjà ce cas.
      throw new ApiError(r.status, r.status === 404 ? "not_found" : "hors_ligne", "Contenu absent de l’application.");
    }
    return (await r.json()) as T;
  }

  const response = await fetch(path, {
    ...init,
    headers: {
      ...(init.body ? { "content-type": "application/json" } : {}),
      ...init.headers,
    },
    credentials: "same-origin",
  });

  const text = await response.text();
  const body = text ? (JSON.parse(text) as unknown) : null;

  if (!response.ok) {
    const error = (body as { error?: { code: string; message: string; details?: Record<string, string[]> } })?.error;
    throw new ApiError(
      response.status,
      error?.code ?? "unknown",
      error?.message ?? "Quelque chose s'est mal passé.",
      error?.details
    );
  }
  return body as T;
}

export const apiGet = <T>(path: string) => api<T>(path);
export const apiPost = <T>(path: string, body?: unknown) =>
  api<T>(path, { method: "POST", body: body === undefined ? undefined : JSON.stringify(body) });
