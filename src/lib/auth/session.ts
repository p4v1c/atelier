/**
 * Sessions par cookie.
 *
 * Le token brut est un secret de 32 octets qui ne vit que dans le cookie.
 * La base ne stocke que son SHA-256 : une fuite de la table Session ne permet
 * pas de se connecter. Le token n'est ni journalisé ni renvoyé par l'API.
 *
 * Ces fonctions lisent et écrivent les en-têtes HTTP directement, sans passer
 * par `next/headers` : les gestionnaires de route restent de simples fonctions
 * Request → Response, donc testables sans monter Next.
 */
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { Prisma, PrismaClient, User } from "@prisma/client";
import { prisma as defaultPrisma } from "../prisma";

export const SESSION_COOKIE = "la_regle_session";
export const SESSION_TTL_DAYS = 30;
/** En deçà, le cookie est prolongé : glissement, sans réécrire à chaque requête. */
const REFRESH_WHEN_REMAINING_DAYS = 29;

const DAY_MS = 24 * 60 * 60 * 1000;

type Db = PrismaClient | Prisma.TransactionClient;

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function newToken(): string {
  return randomBytes(32).toString("base64url");
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

export function buildSessionCookie(token: string, expiresAt: Date): string {
  const parts = [
    `${SESSION_COOKIE}=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Expires=${expiresAt.toUTCString()}`,
    `Max-Age=${Math.max(0, Math.floor((expiresAt.getTime() - Date.now()) / 1000))}`,
  ];
  if (isProduction()) parts.push("Secure");
  return parts.join("; ");
}

export function buildClearedSessionCookie(): string {
  const parts = [`${SESSION_COOKIE}=`, "Path=/", "HttpOnly", "SameSite=Lax", "Max-Age=0", "Expires=Thu, 01 Jan 1970 00:00:00 GMT"];
  if (isProduction()) parts.push("Secure");
  return parts.join("; ");
}

export function readSessionToken(request: Request): string | null {
  const header = request.headers.get("cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    if (part.slice(0, eq).trim() !== SESSION_COOKIE) continue;
    const value = part.slice(eq + 1).trim();
    return value.length > 0 ? decodeURIComponent(value) : null;
  }
  return null;
}

export type RequestContext = { userAgent: string | null; ip: string | null };

export function requestContext(request: Request): RequestContext {
  return { userAgent: request.headers.get("user-agent"), ip: clientIp(request) };
}

/**
 * Adresse du client. Derrière un reverse proxy, X-Forwarded-For est renseigné ;
 * on prend la première adresse, celle du client d'origine. Cet en-tête est
 * falsifiable si l'application est exposée en direct : ne l'utiliser que pour la
 * limitation de débit, jamais comme preuve d'identité.
 */
export function clientIp(request: Request): string | null {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip") ?? null;
}

export async function createSession(
  userId: string,
  context: RequestContext,
  db: Db = defaultPrisma
): Promise<{ token: string; expiresAt: Date; cookie: string }> {
  const token = newToken();
  const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * DAY_MS);
  await db.session.create({
    data: {
      userId,
      tokenHash: hashToken(token),
      expiresAt,
      userAgent: context.userAgent?.slice(0, 500) ?? null,
      ip: context.ip,
    },
  });
  return { token, expiresAt, cookie: buildSessionCookie(token, expiresAt) };
}

export type ResolvedSession = {
  user: User;
  sessionId: string;
  /** Cookie à réémettre si la session a glissé, sinon null. */
  refreshedCookie: string | null;
};

/**
 * Retrouve l'utilisateur derrière le cookie, ou null.
 * Prolonge la session si elle arrive dans sa dernière journée utile.
 */
export async function resolveSession(
  request: Request,
  db: Db = defaultPrisma
): Promise<ResolvedSession | null> {
  const token = readSessionToken(request);
  if (!token) return null;

  const session = await db.session.findUnique({
    where: { tokenHash: hashToken(token) },
    include: { user: true },
  });
  if (!session) return null;

  if (session.expiresAt.getTime() <= Date.now()) {
    await db.session.delete({ where: { id: session.id } }).catch(() => undefined);
    return null;
  }

  let refreshedCookie: string | null = null;
  const remainingDays = (session.expiresAt.getTime() - Date.now()) / DAY_MS;
  if (remainingDays < REFRESH_WHEN_REMAINING_DAYS) {
    const expiresAt = new Date(Date.now() + SESSION_TTL_DAYS * DAY_MS);
    await db.session.update({ where: { id: session.id }, data: { expiresAt } });
    refreshedCookie = buildSessionCookie(token, expiresAt);
  }

  return { user: session.user, sessionId: session.id, refreshedCookie };
}

export async function destroySession(request: Request, db: Db = defaultPrisma): Promise<void> {
  const token = readSessionToken(request);
  if (!token) return;
  await db.session.deleteMany({ where: { tokenHash: hashToken(token) } });
}

/** Déconnexion de tous les appareils — utilisé après un changement de mot de passe. */
export async function destroyAllSessions(
  userId: string,
  except: string | null = null,
  db: Db = defaultPrisma
): Promise<number> {
  const { count } = await db.session.deleteMany({
    where: { userId, ...(except ? { NOT: { id: except } } : {}) },
  });
  return count;
}

/** Ménage des sessions expirées, à appeler depuis une tâche périodique. */
export async function purgeExpiredSessions(db: Db = defaultPrisma): Promise<number> {
  const { count } = await db.session.deleteMany({ where: { expiresAt: { lte: new Date() } } });
  return count;
}

/** Comparaison à temps constant, pour les secrets comparés hors base. */
export function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  if (x.length !== y.length) return false;
  return timingSafeEqual(x, y);
}
