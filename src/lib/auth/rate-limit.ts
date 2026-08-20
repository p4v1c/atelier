/**
 * Limitation de débit sur /api/auth/login et /api/auth/register.
 *
 * 5 tentatives par IP et par tranche de 15 minutes, comptées en base plutôt
 * qu'en mémoire : un compteur en mémoire ne survit ni à un redémarrage ni à
 * plusieurs instances (Vercel), et le cahier des charges exclut Redis.
 *
 * Une tentative réussie efface le compteur de l'IP pour cette action : se
 * connecter six fois depuis six appareils ne doit pas verrouiller l'accès.
 * Seules les tentatives qui échouent s'accumulent.
 */
import type { AuthAction, Prisma, PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../prisma";

type Db = PrismaClient | Prisma.TransactionClient;

export const MAX_ATTEMPTS = 5;
export const WINDOW_MINUTES = 15;
const WINDOW_MS = WINDOW_MINUTES * 60 * 1000;

/** Sans IP identifiable, on ne compte rien : mieux vaut ne pas limiter que limiter tout le monde ensemble. */
export type RateLimitVerdict = { allowed: boolean; remaining: number; retryAfterSeconds: number };

export async function checkRateLimit(
  ip: string | null,
  action: AuthAction,
  db: Db = defaultPrisma
): Promise<RateLimitVerdict> {
  if (!ip) return { allowed: true, remaining: MAX_ATTEMPTS, retryAfterSeconds: 0 };

  const since = new Date(Date.now() - WINDOW_MS);
  const attempts = await db.authAttempt.findMany({
    where: { ip, action, createdAt: { gte: since } },
    orderBy: { createdAt: "asc" },
    select: { createdAt: true },
  });

  if (attempts.length < MAX_ATTEMPTS) {
    return { allowed: true, remaining: MAX_ATTEMPTS - attempts.length, retryAfterSeconds: 0 };
  }

  // La fenêtre se libère quand la plus ancienne tentative en sort.
  const oldest = attempts[0]!.createdAt.getTime();
  const retryAfterSeconds = Math.max(1, Math.ceil((oldest + WINDOW_MS - Date.now()) / 1000));
  return { allowed: false, remaining: 0, retryAfterSeconds };
}

export async function recordAttempt(
  ip: string | null,
  action: AuthAction,
  db: Db = defaultPrisma
): Promise<void> {
  if (!ip) return;
  await db.authAttempt.create({ data: { ip, action } });
}

export async function clearAttempts(
  ip: string | null,
  action: AuthAction,
  db: Db = defaultPrisma
): Promise<void> {
  if (!ip) return;
  await db.authAttempt.deleteMany({ where: { ip, action } });
}

/** Ménage des tentatives sorties de la fenêtre. Appelé au fil de l'eau, sans bloquer. */
export async function purgeOldAttempts(db: Db = defaultPrisma): Promise<number> {
  const { count } = await db.authAttempt.deleteMany({
    where: { createdAt: { lt: new Date(Date.now() - WINDOW_MS) } },
  });
  return count;
}
