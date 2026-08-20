/**
 * GET /api/rules?category=Homophones&status=active
 *
 * Le catalogue consultable. Contient l'énoncé et l'astuce — pas les phrases
 * d'exercice, qu'on ne veut pas donner à lire d'avance.
 *
 * Les règles « Cas discutés » figurent ici, marquées comme telles : c'est leur
 * seul lieu d'apparition, puisqu'elles ne sont jamais servies en exercice.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const includeDisputed = url.searchParams.get("disputed") !== "0";

  const rules = await prisma.rule.findMany({
    where: {
      status: includeDisputed ? { in: ["active", "disputed"] } : "active",
      ...(category ? { category: { name: category } } : {}),
    },
    select: {
      slug: true,
      title: true,
      statement: true,
      tip: true,
      difficulty: true,
      status: true,
      category: { select: { name: true, position: true } },
      _count: { select: { sentences: true } },
      progress: { where: { userId: auth.user.id }, select: { box: true, isNew: true, seenCount: true, correctCount: true } },
    },
    orderBy: [{ category: { position: "asc" } }, { difficulty: "asc" }, { slug: "asc" }],
  });

  const categories = await prisma.category.findMany({
    orderBy: { position: "asc" },
    select: { name: true, _count: { select: { rules: true } } },
  });

  return withCookie(
    json({
      categories: categories.filter((c) => c._count.rules > 0).map((c) => ({ name: c.name, rules: c._count.rules })),
      rules: rules.map((r) => {
        const p = r.progress[0];
        return {
          slug: r.slug,
          title: r.title,
          statement: r.statement,
          tip: r.tip,
          difficulty: r.difficulty,
          category: r.category.name,
          disputed: r.status === "disputed",
          sentenceCount: r._count.sentences,
          box: p?.box ?? 0,
          isNew: p?.isNew ?? true,
          seenCount: p?.seenCount ?? 0,
          correctCount: p?.correctCount ?? 0,
        };
      }),
    }),
    auth.refreshedCookie
  );
}
