/**
 * GET /api/dictations/:id
 *
 * Le texte de la dictée, pour la lecture à voix haute. Il transite forcément
 * jusqu'au navigateur — la synthèse vocale s'y trouve. La correction, elle,
 * reste côté serveur.
 */
import { fail, json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";

export async function GET(request: Request, context: { params: Promise<{ id: string }> }): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;
  const { id } = await context.params;

  const dictation = await prisma.dictation.findFirst({
    where: { id, status: "active" },
    select: {
      id: true,
      text: true,
      theme: true,
      difficulty: true,
      rules: { select: { slug: true, title: true } },
      attempts: { where: { userId: auth.user.id }, orderBy: { score: "desc" }, take: 1, select: { score: true } },
    },
  });
  if (!dictation) return fail(404, "not_found", "Dictée introuvable.");

  return withCookie(
    json({
      id: dictation.id,
      text: dictation.text,
      theme: dictation.theme,
      difficulty: dictation.difficulty,
      rules: dictation.rules,
      bestScore: dictation.attempts[0]?.score ?? null,
    }),
    auth.refreshedCookie
  );
}
