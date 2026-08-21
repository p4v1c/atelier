/**
 * GET /api/public/modules
 *
 * La liste des matières, sans authentification.
 *
 * Elle existe pour le MODE INVITÉ : sans compte, le flanc doit pouvoir
 * afficher toutes les matières et leurs volumes avant même d'en charger une.
 * Le contenu lui-même — les exercices — ne vient qu'à l'ouverture du module,
 * par /api/public/content, parce qu'il pèse des centaines de kilo-octets.
 *
 * Rien de personnel ici : ce sont les mêmes chiffres pour tout le monde, donc
 * la réponse se met en cache.
 */
import { json } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { MODULE_BY_ID } from "@/modules";

export const revalidate = 300;

export async function GET(): Promise<Response> {
  const modules = await prisma.module.findMany({
    where: { status: "active" },
    orderBy: { position: "asc" },
    select: { id: true, name: true, tagline: true, progression: true },
  });

  const resume = await Promise.all(
    modules.map(async (m) => {
      const [skillCount, dictationCount] = await Promise.all([
        prisma.skill.count({ where: { moduleId: m.id, status: "active" } }),
        prisma.dictation.count({ where: { moduleId: m.id, status: "active" } }),
      ]);
      return {
        ...m,
        skillCount,
        dictationCount,
        vocabulaire: MODULE_BY_ID.get(m.id)?.vocabulaire ?? null,
      };
    })
  );

  const reponse = json({ modules: resume });
  reponse.headers.set("cache-control", "public, max-age=300, stale-while-revalidate=3600");
  return reponse;
}
