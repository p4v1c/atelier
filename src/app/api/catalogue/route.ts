/**
 * GET /api/catalogue?module=francais&category=Homophones
 *
 * Le catalogue consultable d'un module. Contient l'énoncé et l'astuce — pas les
 * exercices, qu'on ne veut pas donner à lire d'avance.
 *
 * Les compétences des catégories non notées (« Cas discutés » en français)
 * figurent ici, marquées comme telles : c'est leur seul lieu d'apparition,
 * puisqu'elles ne sont jamais servies en exercice.
 */
import { fail, json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { moduleIdSchema } from "@/lib/study/schemas";
import { MODULE_PAR_DEFAUT } from "@/lib/study/service";
import { MODULE_BY_ID } from "@/modules";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const url = new URL(request.url);
  const parsed = moduleIdSchema.safeParse(url.searchParams.get("module") ?? undefined);
  if (!parsed.success) return fail(400, "invalid_input", "Identifiant de module invalide.");
  const moduleId = parsed.data || MODULE_PAR_DEFAUT;

  const category = url.searchParams.get("category");
  const includeDisputed = url.searchParams.get("disputed") !== "0";

  const skills = await prisma.skill.findMany({
    where: {
      moduleId,
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
      _count: { select: { exercises: true } },
      progress: {
        where: { userId: auth.user.id },
        select: { box: true, isNew: true, seenCount: true, correctCount: true },
      },
    },
    orderBy: [{ category: { position: "asc" } }, { difficulty: "asc" }, { slug: "asc" }],
  });

  const categories = await prisma.category.findMany({
    where: { moduleId },
    orderBy: { position: "asc" },
    select: { name: true, _count: { select: { skills: true } } },
  });

  // Le vocabulaire vient du module, pas de la base : « règle » en français,
  // « notion » en culture générale.
  const vocabulaire = MODULE_BY_ID.get(moduleId)?.vocabulaire ?? {
    skill: "point",
    skillPluriel: "points",
    exercise: "exercice",
    exercisePluriel: "exercices",
    catalogue: "Le catalogue",
  };

  return withCookie(
    json({
      moduleId,
      vocabulaire,
      categories: categories
        .filter((c) => c._count.skills > 0)
        .map((c) => ({ name: c.name, skills: c._count.skills })),
      skills: skills.map((r) => {
        const p = r.progress[0];
        return {
          slug: r.slug,
          title: r.title,
          statement: r.statement,
          tip: r.tip,
          difficulty: r.difficulty,
          category: r.category.name,
          disputed: r.status === "disputed",
          exerciseCount: r._count.exercises,
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
