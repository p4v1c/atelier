/**
 * POST /api/auth/password
 *
 * Changement de mot de passe. Le mot de passe actuel est exigé, et toutes les
 * autres sessions tombent : si quelqu'un s'était installé sur un autre
 * appareil, il perd l'accès au moment même où on change la serrure.
 */
import { fail, json, readJson, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { isCommonPassword } from "@/lib/auth/common-passwords";
import { hashPassword, verifyPassword } from "@/lib/auth/password";
import { changePasswordSchema, fieldErrors } from "@/lib/auth/schemas";
import { destroyAllSessions } from "@/lib/auth/session";

export async function POST(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const parsed = changePasswordSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Formulaire incomplet ou invalide.", fieldErrors(parsed.error));
  }
  const { currentPassword, newPassword } = parsed.data;

  if (!(await verifyPassword(auth.user.passwordHash, currentPassword))) {
    return fail(401, "bad_credentials", "Mot de passe actuel incorrect.", {
      currentPassword: ["Mot de passe incorrect."],
    });
  }
  if (isCommonPassword(newPassword)) {
    return fail(400, "weak_password", "Ce mot de passe figure parmi les plus courants. Choisis-en un autre.", {
      newPassword: ["Mot de passe trop courant."],
    });
  }
  if (newPassword === currentPassword) {
    return fail(400, "same_password", "Le nouveau mot de passe est identique à l'ancien.", {
      newPassword: ["Choisis un mot de passe différent."],
    });
  }

  await prisma.user.update({
    where: { id: auth.user.id },
    data: { passwordHash: await hashPassword(newPassword) },
  });
  const revoked = await destroyAllSessions(auth.user.id, auth.sessionId);

  return withCookie(json({ ok: true, revokedSessions: revoked }), auth.refreshedCookie);
}
