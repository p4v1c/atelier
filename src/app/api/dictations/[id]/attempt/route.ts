/**
 * POST /api/dictations/:id/attempt { text }
 *
 * La correction est faite ici, mot à mot : le client envoie ce qu'il a écrit et
 * reçoit le relevé. Le score conservé est le meilleur, jamais le dernier.
 */
import { fail, json, readJson, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { fieldErrors } from "@/lib/auth/schemas";
import { dictationAttemptSchema } from "@/lib/study/schemas";
import { gradeDictation } from "@/lib/study/dictation";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;
  const { id } = await context.params;

  const parsed = dictationAttemptSchema.safeParse(await readJson(request));
  if (!parsed.success) {
    return fail(400, "invalid_input", "Texte invalide.", fieldErrors(parsed.error));
  }

  const dictation = await prisma.dictation.findFirst({
    where: { id, status: "active" },
    select: { id: true, text: true },
  });
  if (!dictation) return fail(404, "not_found", "Dictée introuvable.");

  const result = gradeDictation(dictation.text, parsed.data.text);

  const [, best] = await Promise.all([
    prisma.dictationAttempt.create({
      data: { userId: auth.user.id, dictationId: dictation.id, text: parsed.data.text, score: result.score },
    }),
    prisma.dictationAttempt.aggregate({
      where: { userId: auth.user.id, dictationId: dictation.id },
      _max: { score: true },
    }),
  ]);

  return withCookie(
    json({
      score: result.score,
      correctWords: result.correctWords,
      totalWords: result.totalWords,
      words: result.words,
      extra: result.extra,
      expected: dictation.text,
      bestScore: Math.max(best._max.score ?? 0, result.score),
    }),
    auth.refreshedCookie
  );
}
