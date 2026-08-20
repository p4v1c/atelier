/**
 * Garde d'authentification des routes.
 *
 * Toutes les routes sont authentifiées, sauf /api/auth/register et
 * /api/auth/login. Le motif est toujours le même :
 *
 *   const auth = await requireUser(request);
 *   if (auth instanceof Response) return auth;
 *   ... withCookie(json(...), auth.refreshedCookie)
 *
 * `refreshedCookie` porte le glissement de la session : l'oublier ne casse rien
 * tout de suite, mais la session finit par expirer au bout de 30 jours fixes.
 */
import type { User } from "@prisma/client";
import { fail } from "../http";
import { resolveSession } from "./session";

export type AuthenticatedRequest = { user: User; sessionId: string; refreshedCookie: string | null };

export async function requireUser(request: Request): Promise<AuthenticatedRequest | Response> {
  const session = await resolveSession(request);
  if (!session) {
    return fail(401, "unauthenticated", "Tu dois être connecté pour accéder à cette ressource.");
  }
  return session;
}

export type PublicUser = {
  id: string;
  email: string;
  pseudo: string;
  createdAt: string;
  lastLoginAt: string | null;
  answerCounter: number;
  placementDone: boolean;
};

/** Vue publique d'un utilisateur : ni empreinte de mot de passe, ni clé d'unicité. */
export function toPublicUser(user: User): PublicUser {
  return {
    id: user.id,
    email: user.email,
    pseudo: user.pseudo,
    createdAt: user.createdAt.toISOString(),
    lastLoginAt: user.lastLoginAt?.toISOString() ?? null,
    answerCounter: user.answerCounter,
    placementDone: user.placementDoneAt !== null,
  };
}
