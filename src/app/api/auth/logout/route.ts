/**
 * POST /api/auth/logout
 *
 * Supprime la session en base et vide le cookie. Sans session valide, répond
 * quand même 200 : se déconnecter deux fois n'est pas une erreur.
 */
import { json, withCookie } from "@/lib/http";
import { buildClearedSessionCookie, destroySession } from "@/lib/auth/session";

export async function POST(request: Request): Promise<Response> {
  await destroySession(request);
  return withCookie(json({ ok: true }), buildClearedSessionCookie());
}
