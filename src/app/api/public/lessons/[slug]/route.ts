/**
 * GET /api/public/lessons/<slug>
 *
 * Le support de cours d'une compétence, sans authentification.
 *
 * Elle existe pour le MODE INVITÉ, au même titre que /api/public/content : un
 * cours se lit, il ne se corrige pas — il n'y a rien à protéger dedans. Ce qui
 * manque par rapport à la route authentifiée, c'est la progression : un invité
 * ne voit pas son palier, puisqu'il est dans son navigateur et non en base.
 *
 * Servie à part du contenu public : les 907 cours de la culture générale
 * pèsent plusieurs mégaoctets, et personne ne les lit toutes.
 */
import { fail, json } from "@/lib/http";
import { prisma } from "@/lib/prisma";

export const revalidate = 300;

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> }
): Promise<Response> {
  const { slug } = await context.params;

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
    },
  });

  if (!skill) return fail(404, "not_found", "Point introuvable.");
  if (!skill.lesson) return fail(404, "no_lesson", "Ce point n’a pas de cours attaché.");

  const reponse = json({
    slug: skill.slug,
    title: skill.title,
    moduleId: skill.moduleId,
    category: skill.category.name,
    difficulty: skill.difficulty,
    exerciseCount: skill._count.exercises,
    // Un invité n'a pas de palier en base : la progression vit dans son
    // navigateur, et l'écran s'en passe.
    box: 0,
    isNew: true,
    lesson: skill.lesson,
  });
  reponse.headers.set("cache-control", "public, max-age=300, stale-while-revalidate=3600");
  return reponse;
}
