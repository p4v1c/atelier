/**
 * Le dépôt de contenu mis à jour, dans IndexedDB.
 *
 * L'APK embarque une photographie du contenu, prise le jour où il a été
 * construit. Quand une nouvelle version paraît, l'application la télécharge et
 * la range ICI ; les fichiers de l'APK ne bougent pas, ils restent le repli.
 *
 * Pourquoi IndexedDB et non localStorage : le contenu pèse vingt-cinq
 * mégaoctets, localStorage en tolère cinq. Pourquoi pas le système de fichiers
 * du téléphone : il demanderait un greffon natif, et une permission, pour
 * ranger des données qui n'ont rien à faire hors de l'application.
 *
 * La progression, elle, reste dans localStorage — voir `guest-store`. Elle est
 * petite, elle change à chaque réponse, et elle ne doit surtout PAS être
 * effacée par une mise à jour du contenu : les deux vivent séparément pour
 * cette raison.
 */
const BASE = "atelier-hors-ligne";
const MAGASIN = "fichiers";
/** La clé où l'on note quelle version est installée. */
const CLE_VERSION = "@version";

function ouvrir(): Promise<IDBDatabase> {
  return new Promise((resoudre, rejeter) => {
    const demande = indexedDB.open(BASE, 1);
    demande.onupgradeneeded = () => {
      if (!demande.result.objectStoreNames.contains(MAGASIN)) {
        demande.result.createObjectStore(MAGASIN);
      }
    };
    demande.onsuccess = () => resoudre(demande.result);
    demande.onerror = () => rejeter(demande.error);
  });
}

function transiger<T>(mode: IDBTransactionMode, action: (m: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return ouvrir().then(
    (base) =>
      new Promise<T>((resoudre, rejeter) => {
        const t = base.transaction(MAGASIN, mode);
        const r = action(t.objectStore(MAGASIN));
        r.onsuccess = () => resoudre(r.result);
        r.onerror = () => rejeter(r.error);
        t.oncomplete = () => base.close();
      })
  );
}

/** Le contenu mis à jour pour ce chemin, ou `null` si l'APK fait foi. */
export async function lireFichier(chemin: string): Promise<string | null> {
  if (typeof indexedDB === "undefined") return null;
  try {
    return (await transiger<string | undefined>("readonly", (m) => m.get(chemin))) ?? null;
  } catch {
    // Navigation privée, quota refusé, base corrompue : on retombe sur l'APK.
    return null;
  }
}

export async function ecrireFichier(chemin: string, contenu: string): Promise<void> {
  await transiger("readwrite", (m) => m.put(contenu, chemin));
}

export async function versionInstallee(): Promise<string | null> {
  return lireFichier(CLE_VERSION);
}

export async function poserVersion(version: string): Promise<void> {
  await ecrireFichier(CLE_VERSION, version);
}

/** Efface tout le contenu téléchargé : l'application repart sur celui de l'APK. */
export async function viderDepot(): Promise<void> {
  await transiger("readwrite", (m) => m.clear());
}
