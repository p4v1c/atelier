/**
 * POST /api/auth/register
 *
 * Crée un compte, ouvre une session, et reprend au passage la progression
 * accumulée en mode invité si le client en envoie une.
 */
import { AuthAction } from "@prisma/client";
import { fail, json, readJson, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { toPublicUser } from "@/lib/auth/guard";
import { importGuestProgress } from "@/lib/auth/guest";
import { isCommonPassword } from "@/lib/auth/common-passwords";
import { hashPassword } from "@/lib/auth/password";
import { checkRateLimit, clearAttempts, purgeOldAttempts, recordAttempt } from "@/lib/auth/rate-limit";
import { emailKey, fieldErrors, registerSchema } from "@/lib/auth/schemas";
import { createSession, requestContext } from "@/lib/auth/session";

export async function POST(request: Request): Promise<Response> {
  const context = requestContext(request);

  const limit = await checkRateLimit(context.ip, AuthAction.register);
  if (!limit.allowed) {
    return fail(
      429,
      "rate_limited",
      "Trop de tentatives. Réessaie dans quelques minutes.",
      undefined,
      { headers: { "retry-after": String(limit.retryAfterSeconds) } }
    );
  }
  await recordAttempt(context.ip, AuthAction.register);
  void purgeOldAttempts().catch(() => undefined);

  const parsed = registerSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Formulaire incomplet ou invalide.", fieldErrors(parsed.error));
  }
  const { email, password, pseudo, guestProgress } = parsed.data;

  if (isCommonPassword(password)) {
    return fail(400, "weak_password", "Ce mot de passe figure parmi les plus courants. Choisis-en un autre.", {
      password: ["Mot de passe trop courant."],
    });
  }
  const key = emailKey(email);
  if (password.toLowerCase() === key) {
    return fail(400, "weak_password", "Le mot de passe ne peut pas être ton adresse électronique.", {
      password: ["Mot de passe trop proche de l'adresse."],
    });
  }

  const existing = await prisma.user.findUnique({ where: { emailKey: key }, select: { id: true } });
  if (existing) {
    // L'inscription révèle nécessairement l'existence d'un compte : sans cela,
    // on ne peut pas dire à l'utilisateur pourquoi ça échoue. La connexion, elle,
    // ne révèle rien.
    return fail(409, "email_taken", "Un compte existe déjà avec cette adresse.", {
      email: ["Adresse déjà utilisée."],
    });
  }

  const passwordHash = await hashPassword(password);

  const { user, guestReport } = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: email.trim(),
        emailKey: key,
        passwordHash,
        pseudo,
        lastLoginAt: new Date(),
        answerCounter: 0,
        settings: { create: {} },
      },
    });

    let guestReport = null;
    if (guestProgress) {
      guestReport = await importGuestProgress(tx, user.id, guestProgress);
      if (guestReport.imported > 0 || guestProgress.placementDone) {
        await tx.user.update({
          where: { id: user.id },
          data: {
            answerCounter: guestReport.answerCounter,
            placementDoneAt: guestProgress.placementDone ? new Date() : null,
          },
        });
      }
    }
    return { user, guestReport };
  });

  await clearAttempts(context.ip, AuthAction.register);
  const session = await createSession(user.id, context);

  const fresh = await prisma.user.findUniqueOrThrow({ where: { id: user.id } });
  return withCookie(
    json({ user: toPublicUser(fresh), guestProgress: guestReport }, { status: 201 }),
    session.cookie
  );
}
