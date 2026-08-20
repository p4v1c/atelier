/**
 * POST /api/auth/login
 *
 * Adresse inconnue et mot de passe faux répondent exactement la même chose,
 * avec le même temps de calcul : dans les deux cas argon2 travaille une fois.
 */
import { AuthAction } from "@prisma/client";
import { fail, json, readJson, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { toPublicUser } from "@/lib/auth/guard";
import { burnVerification, verifyPassword } from "@/lib/auth/password";
import { checkRateLimit, clearAttempts, purgeOldAttempts, recordAttempt } from "@/lib/auth/rate-limit";
import { emailKey, fieldErrors, loginSchema } from "@/lib/auth/schemas";
import { createSession, requestContext } from "@/lib/auth/session";

const REFUSAL = "Adresse ou mot de passe incorrect.";

export async function POST(request: Request): Promise<Response> {
  const context = requestContext(request);

  const limit = await checkRateLimit(context.ip, AuthAction.login);
  if (!limit.allowed) {
    return fail(
      429,
      "rate_limited",
      "Trop de tentatives. Réessaie dans quelques minutes.",
      undefined,
      { headers: { "retry-after": String(limit.retryAfterSeconds) } }
    );
  }
  await recordAttempt(context.ip, AuthAction.login);
  void purgeOldAttempts().catch(() => undefined);

  const parsed = loginSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Formulaire incomplet ou invalide.", fieldErrors(parsed.error));
  }
  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({ where: { emailKey: emailKey(email) } });
  if (!user) {
    await burnVerification(password);
    return fail(401, "bad_credentials", REFUSAL);
  }

  if (!(await verifyPassword(user.passwordHash, password))) {
    return fail(401, "bad_credentials", REFUSAL);
  }

  await clearAttempts(context.ip, AuthAction.login);
  const [fresh, session] = await Promise.all([
    prisma.user.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } }),
    createSession(user.id, context),
  ]);

  return withCookie(json({ user: toPublicUser(fresh) }), session.cookie);
}
