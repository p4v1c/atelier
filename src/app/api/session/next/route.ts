/**
 * GET /api/session/next?size=20&category=Homophones&mode=training&module=francais
 *
 * Ouvre une série et renvoie ses questions. Chacune est fabriquée par son type
 * d'exercice, qui en retire tout ce qui trahirait la réponse : le client ne
 * peut pas tricher, même en lisant la réponse réseau.
 */
import { fail, json, withCookie } from "@/lib/http";
import { requireUser } from "@/lib/auth/guard";
import { fieldErrors } from "@/lib/auth/schemas";
import { nextSessionQuerySchema } from "@/lib/study/schemas";
import { NoContentError, startStudySession } from "@/lib/study/service";
import { TEST_SIZE } from "@/lib/study/scheduler";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const url = new URL(request.url);
  const mode = url.searchParams.get("mode") ?? undefined;
  const parsed = nextSessionQuerySchema.safeParse({
    size: url.searchParams.get("size") ?? (mode === "test" ? TEST_SIZE : 20),
    category: url.searchParams.get("category"),
    skill: url.searchParams.get("skill"),
    mode,
    moduleId: url.searchParams.get("module") ?? undefined,
  });
  if (!parsed.success) {
    return fail(400, "invalid_input", "Paramètres de série invalides.", fieldErrors(parsed.error));
  }

  try {
    const session = await startStudySession(auth.user.id, parsed.data);
    return withCookie(json(session), auth.refreshedCookie);
  } catch (e) {
    if (e instanceof NoContentError) return fail(409, "no_content", e.message);
    throw e;
  }
}
