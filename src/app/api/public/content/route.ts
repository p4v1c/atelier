/**
 * GET /api/public/content?module=francais
 *
 * Tout le contenu jouable d'un module, en une fois — la seule route non
 * authentifiée en dehors de /api/auth.
 *
 * Elle existe pour le MODE INVITÉ : sans compte, la progression reste dans le
 * navigateur, donc le planificateur doit tourner dans le navigateur, donc le
 * navigateur a besoin du contenu, réponses comprises.
 *
 * Oui, un invité peut lire les réponses dans l'onglet réseau. Il n'a rien à y
 * gagner : sa progression n'est ni partagée ni classée, et dès qu'il crée un
 * compte, tout repasse par le serveur, qui ne divulgue plus rien à l'avance.
 */
import { gzipSync } from "node:zlib";
import { prisma } from "@/lib/prisma";
import { MODULE_BY_ID } from "@/modules";

export const revalidate = 300;

/**
 * Compresse la réponse si le client sait la lire.
 *
 * Avec 618 compétences, la charge utile dépasse 750 Ko : Next ne compresse pas les
 * réponses construites à la main dans un gestionnaire de route, il faut donc
 * le faire ici. Le gain est d'un facteur cinq environ.
 */
function maybeGzip(body: string, request: Request): Response {
  const accepts = request.headers.get("accept-encoding") ?? "";
  const headers = new Headers({
    "content-type": "application/json; charset=utf-8",
    "cache-control": "public, max-age=300, stale-while-revalidate=3600",
    vary: "accept-encoding",
  });
  if (!accepts.includes("gzip")) return new Response(body, { headers });

  const compressed = gzipSync(Buffer.from(body, "utf8"));
  headers.set("content-encoding", "gzip");
  headers.set("content-length", String(compressed.byteLength));
  return new Response(compressed, { headers });
}

export async function GET(request: Request): Promise<Response> {
  const demande = new URL(request.url).searchParams.get("module");
  const moduleId = /^[a-z0-9-]{1,40}$/.test(demande ?? "") ? demande! : "francais";

  const [categories, skills, dictations] = await Promise.all([
    prisma.category.findMany({
      where: { moduleId },
      orderBy: { position: "asc" },
      select: { name: true, position: true },
    }),
    prisma.skill.findMany({
      where: { moduleId, status: { in: ["active", "disputed"] } },
      orderBy: [{ category: { position: "asc" } }, { difficulty: "asc" }, { slug: "asc" }],
      select: {
        id: true,
        slug: true,
        title: true,
        statement: true,
        tip: true,
        difficulty: true,
        status: true,
        category: { select: { name: true } },
        exercises: {
          where: { status: "active" },
          select: { id: true, kind: true, payload: true },
        },
      },
    }),
    prisma.dictation.findMany({
      where: { moduleId, status: "active" },
      orderBy: [{ difficulty: "asc" }, { theme: "asc" }, { id: "asc" }],
      select: { id: true, text: true, theme: true, difficulty: true, skills: { select: { slug: true } } },
    }),
  ]);

  const mod = MODULE_BY_ID.get(moduleId);
  const payload = {
    moduleId,
    moduleName: mod?.name ?? moduleId,
    moduleTagline: mod?.tagline ?? "",
    vocabulaire: mod?.vocabulaire ?? null,
    categories: categories
      .filter((c) => skills.some((r) => r.category.name === c.name))
      .map((c) => c.name),
    skills: skills.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      statement: r.statement,
      tip: r.tip,
      difficulty: r.difficulty,
      category: r.category.name,
      disputed: r.status === "disputed",
      exercises: r.exercises,
    })),
    dictations: dictations.map((d, i) => ({
      id: d.id,
      number: i + 1,
      text: d.text,
      theme: d.theme,
      difficulty: d.difficulty,
      skills: d.skills.map((x) => x.slug),
    })),
  };
  // Contenu public et identique pour tout le monde : il peut être mis en cache.
  return maybeGzip(JSON.stringify(payload), request);
}
