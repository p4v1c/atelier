/**
 * GET /api/dictations?module=anglais&difficulty=2
 *
 * Liste des dictées avec le meilleur score de l'utilisateur. Le TEXTE N'EST PAS
 * renvoyé : c'est le texte à écrire. Il n'arrive qu'au lancement de la dictée,
 * pour la synthèse vocale.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { dictationWords } from "@/lib/study/dictation";
import { moduleIdSchema } from "@/lib/study/schemas";
import { MODULE_PAR_DEFAUT } from "@/lib/study/service";
import { fail } from "@/lib/http";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const url = new URL(request.url);
  const parsed = moduleIdSchema.safeParse(url.searchParams.get("module") ?? undefined);
  if (!parsed.success) return fail(400, "invalid_input", "Identifiant de module invalide.");
  // Sans filtre par module, l'écran d'anglais annonçait 330 dictées : les 310
  // françaises comprises.
  const moduleId = parsed.data || MODULE_PAR_DEFAUT;
  const difficulty = Number(url.searchParams.get("difficulty"));
  const theme = url.searchParams.get("theme");

  const dictations = await prisma.dictation.findMany({
    where: {
      moduleId,
      status: "active",
      ...([1, 2, 3].includes(difficulty) ? { difficulty } : {}),
      ...(theme ? { theme } : {}),
    },
    // Par niveau puis par difficulté : une liste de dictées de langue se lit
    // comme une progression, pas comme un catalogue.
    orderBy: [{ level: "asc" }, { difficulty: "asc" }, { theme: "asc" }, { id: "asc" }],
    select: {
      id: true,
      text: true,
      theme: true,
      difficulty: true,
      voice: true,
      level: true,
      skills: { select: { slug: true, title: true } },
      attempts: {
        where: { userId: auth.user.id },
        orderBy: { score: "desc" },
        take: 1,
        select: { score: true, createdAt: true },
      },
    },
  });

  const themes = [...new Set(dictations.map((d) => d.theme))].sort();

  return withCookie(
    json({
      themes,
      dictations: dictations.map((d, index) => ({
        id: d.id,
        number: index + 1,
        theme: d.theme,
        difficulty: d.difficulty,
        voice: d.voice,
        level: d.level,
        wordCount: dictationWords(d.text).length,
        skills: d.skills.map((r) => ({ slug: r.slug, title: r.title })),
        bestScore: d.attempts[0]?.score ?? null,
        lastAttemptAt: d.attempts[0]?.createdAt.toISOString() ?? null,
      })),
    }),
    auth.refreshedCookie
  );
}
