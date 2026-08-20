/**
 * Hachage des mots de passe — argon2id.
 *
 * Paramètres : 19 Mio de mémoire, 2 passes, parallélisme 1. C'est le profil
 * recommandé par l'OWASP pour argon2id ; il tient sans peine sur un petit VPS
 * (19 Mio par vérification, quelques dizaines de millisecondes).
 *
 * Le mot de passe en clair ne quitte jamais cette fonction : ni journal, ni
 * message d'erreur, ni retour d'API.
 */
import { hash, verify } from "@node-rs/argon2";

/**
 * `Algorithm.Argon2id` de @node-rs/argon2 est un `const enum` : inutilisable
 * sous `isolatedModules`, que Next impose. On reprend donc sa valeur (0 = d,
 * 1 = i, 2 = id), verrouillée par un test.
 */
const ARGON2ID = 2;

const OPTIONS = {
  algorithm: ARGON2ID,
  memoryCost: 19456, // 19 Mio
  timeCost: 2,
  parallelism: 1,
} as const;

/** Longueur minimale imposée. Pas d'autre contrainte : ni chiffre, ni majuscule. */
export const MIN_PASSWORD_LENGTH = 10;
/** Plafond de garde : au-delà, on refuse plutôt que de faire travailler argon2 pour rien. */
export const MAX_PASSWORD_LENGTH = 200;

export async function hashPassword(password: string): Promise<string> {
  return hash(password, OPTIONS);
}

export async function verifyPassword(storedHash: string, password: string): Promise<boolean> {
  try {
    return await verify(storedHash, password, OPTIONS);
  } catch {
    // Empreinte illisible (corrompue, autre algorithme) : refus, jamais d'exception.
    return false;
  }
}

/**
 * Empreinte d'un mot de passe qui n'existe pas, calculée une fois au démarrage.
 *
 * Sert à faire travailler argon2 même quand l'adresse est inconnue : sans cela,
 * une adresse inexistante répondrait beaucoup plus vite qu'un mot de passe faux,
 * et le message d'erreur identique ne servirait plus à rien.
 */
let decoyHash: Promise<string> | null = null;
export function getDecoyHash(): Promise<string> {
  decoyHash ??= hashPassword("mot de passe qui n'existe pas — leurre anti-chronométrage");
  return decoyHash;
}

/** Brûle le même temps de calcul qu'une vérification réelle, sans rien révéler. */
export async function burnVerification(password: string): Promise<void> {
  await verifyPassword(await getDecoyHash(), password);
}
