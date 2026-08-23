/**
 * GET /api/lessons/<slug>
 *
 * Le support de cours d'une compétence, quand elle en a un.
 *
 * Servi à part et non avec le catalogue : une leçon pèse une vingtaine de
 * kilo-octets, et les 907 du module Culture générale n'ont rien à faire dans
 * une réponse de catalogue qu'on charge à chaque ouverture d'écran.
 */
import { fail, json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const { slug } = await params;
  const skill = await prisma.skill.findFirst({
    where: { slug, status: { in: ["active", "disputed"] } },
    select: {
      slug: true,
      title: true,
      moduleId: true,
      difficulty: true,
      lesson: true,
      category: { select: { name: true } },
      _count: { select: { exercises: true } },
      progress: { where: { userId: auth.user.id }, select: { box: true, isNew: true } },
    },
  });

  if (!skill) return fail(404, "not_found", "Point introuvable.");
  if (!skill.lesson) return fail(404, "no_lesson", "Ce point n’a pas de cours attaché.");

  const p = skill.progress[0];
  return withCookie(
    json({
      slug: skill.slug,
      title: skill.title,
      moduleId: skill.moduleId,
      category: skill.category.name,
      difficulty: skill.difficulty,
      exerciseCount: skill._count.exercises,
      box: p?.box ?? 0,
      isNew: p?.isNew ?? true,
      lesson: skill.lesson,
    }),
    auth.refreshedCookie
  );
}
