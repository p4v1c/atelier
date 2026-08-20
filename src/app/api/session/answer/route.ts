/**
 * POST /api/session/answer { studySessionId, sentenceId, answerIndex }
 *
 * Le serveur décide si c'est juste, met à jour le palier, et renvoie le verdict
 * avec la règle et l'astuce. Le client n'envoie que l'index cliqué.
 */
import { fail, json, readJson, withCookie } from "@/lib/http";
import { requireUser } from "@/lib/auth/guard";
import { fieldErrors } from "@/lib/auth/schemas";
import { answerSchema } from "@/lib/study/schemas";
import { answerQuestion, SessionError } from "@/lib/study/service";

export async function POST(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const parsed = answerSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Réponse invalide.", fieldErrors(parsed.error));
  }

  try {
    const verdict = await answerQuestion(auth.user.id, parsed.data);
    return withCookie(json(verdict), auth.refreshedCookie);
  } catch (e) {
    if (e instanceof SessionError) return fail(404, "session_error", e.message);
    throw e;
  }
}
