/**
 * Outillage des tests d'API.
 *
 * Les gestionnaires de route de Next sont de simples fonctions Request →
 * Response : on les appelle directement, sans serveur. Le trajet complet est
 * couvert — en-têtes, cookies, Zod, argon2, Postgres — moins le navigateur.
 */
import { randomBytes } from "node:crypto";
import { PrismaClient } from "@prisma/client";
import { SESSION_COOKIE } from "@/lib/auth/session";

export const prisma = new PrismaClient();

/** Préfixe commun à tous les comptes de test, pour un nettoyage sans risque. */
export const TEST_EMAIL_PREFIX = "vitest-";

export function uniqueEmail(label = "user"): string {
  return `${TEST_EMAIL_PREFIX}${label}-${randomBytes(6).toString("hex")}@exemple.test`;
}

let compteurIp = 0;

/**
 * Une adresse différente à chaque appel.
 *
 * Un tirage au hasard dans 250 adresses paraissait suffisant ; il ne l'est pas.
 * Une dizaine d'appels dans la même exécution suffisent à faire collisionner
 * deux tests, et celui de la limitation de débit échoue alors : il trouve une
 * adresse déjà à court de tentatives. Un compteur supprime le problème au lieu
 * de le rendre rare.
 *
 * TEST-NET-1 et TEST-NET-2, deux plages de documentation jamais routables :
 * 508 adresses, largement de quoi tenir une suite.
 */
export function uniqueIp(): string {
  const n = compteurIp++;
  const plage = n < 254 ? "192.0.2" : "198.51.100";
  return `${plage}.${(n % 254) + 1}`;
}

export type RequestOptions = { ip?: string | null; cookie?: string | null; userAgent?: string };

export function post(url: string, body: unknown, options: RequestOptions = {}): Request {
  const headers = new Headers({ "content-type": "application/json" });
  if (options.ip !== null) headers.set("x-forwarded-for", options.ip ?? uniqueIp());
  if (options.cookie) headers.set("cookie", options.cookie);
  if (options.userAgent) headers.set("user-agent", options.userAgent);
  return new Request(`http://localhost${url}`, {
    method: "POST",
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

export function get(url: string, options: RequestOptions = {}): Request {
  const headers = new Headers();
  if (options.ip !== null) headers.set("x-forwarded-for", options.ip ?? uniqueIp());
  if (options.cookie) headers.set("cookie", options.cookie);
  return new Request(`http://localhost${url}`, { method: "GET", headers });
}

/** Toutes les valeurs Set-Cookie de la réponse. */
export function setCookies(response: Response): string[] {
  const getAll = (response.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie;
  if (typeof getAll === "function") return getAll.call(response.headers);
  const single = response.headers.get("set-cookie");
  return single ? [single] : [];
}

/** Le cookie de session au format « nom=valeur », prêt à être renvoyé. */
export function sessionCookie(response: Response): string | null {
  for (const raw of setCookies(response)) {
    const first = raw.split(";")[0] ?? "";
    if (first.startsWith(`${SESSION_COOKIE}=`)) return first;
  }
  return null;
}

export function sessionToken(response: Response): string | null {
  const cookie = sessionCookie(response);
  if (!cookie) return null;
  const value = cookie.slice(SESSION_COOKIE.length + 1);
  return value.length > 0 ? value : null;
}

/** Ligne Set-Cookie complète, attributs compris (HttpOnly, SameSite…). */
export function sessionCookieAttributes(response: Response): string | null {
  return setCookies(response).find((c) => c.startsWith(`${SESSION_COOKIE}=`)) ?? null;
}

/** Efface tout ce qu'un test a pu créer. Les comptes tombent en cascade. */
/**
 * Efface ce que les tests ont laissé : comptes de test et tentatives de
 * connexion depuis la plage de documentation.
 *
 * À appeler AVANT la suite autant qu'après. Une exécution interrompue —
 * ctrl-C, processus tué — laisse sinon des tentatives derrière elle, et comme
 * les adresses sont tirées dans une plage de 250, la suivante finit par
 * retomber sur une adresse déjà bloquée. Le test de limitation de débit
 * échouait alors sans que rien n'ait changé dans le code.
 */
export async function cleanupTestData(): Promise<void> {
  await prisma.user.deleteMany({ where: { emailKey: { startsWith: TEST_EMAIL_PREFIX } } });
  await prisma.authAttempt.deleteMany({
    where: { OR: [{ ip: { startsWith: "192.0.2." } }, { ip: { startsWith: "198.51.100." } }] },
  });
}
