/**
 * POST /api/session/finish { studySessionId }
 *
 * Clôt la série et rend le bilan : score, détail par catégorie, niveau estimé,
 * règles à retravailler.
 */
import { fail, json, readJson, withCookie } from "@/lib/http";
import { requireUser } from "@/lib/auth/guard";
import { fieldErrors } from "@/lib/auth/schemas";
import { finishSchema } from "@/lib/study/schemas";
import { finishStudySession, SessionError } from "@/lib/study/service";

export async function POST(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const parsed = finishSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Série invalide.", fieldErrors(parsed.error));
  }

  try {
    const summary = await finishStudySession(auth.user.id, parsed.data.studySessionId);
    return withCookie(json(summary), auth.refreshedCookie);
  } catch (e) {
    if (e instanceof SessionError) return fail(404, "session_error", e.message);
    throw e;
  }
}
