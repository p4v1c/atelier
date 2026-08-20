/**
 * GET /api/public/content
 *
 * Tout le contenu jouable, en une fois — la seule route non authentifiée en
 * dehors de /api/auth.
 *
 * Elle existe pour le MODE INVITÉ : sans compte, la progression reste dans le
 * navigateur, donc le planificateur doit tourner dans le navigateur, donc le
 * navigateur a besoin du contenu, index du mot fautif compris.
 *
 * Oui, un invité peut lire les réponses dans l'onglet réseau. Il n'a rien à y
 * gagner : sa progression n'est ni partagée ni classée, et dès qu'il crée un
 * compte, tout repasse par le serveur, qui ne divulgue plus rien à l'avance.
 */
import { gzipSync } from "node:zlib";
import { prisma } from "@/lib/prisma";

export const revalidate = 300;

/**
 * Compresse la réponse si le client sait la lire.
 *
 * Avec 618 règles, la charge utile dépasse 750 Ko : Next ne compresse pas les
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
  const [categories, rules, dictations] = await Promise.all([
    prisma.category.findMany({ orderBy: { position: "asc" }, select: { name: true, position: true } }),
    prisma.rule.findMany({
      where: { status: { in: ["active", "disputed"] } },
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
        sentences: {
          where: { status: "active" },
          select: { id: true, text: true, faultyTokenIndex: true, correction: true },
        },
      },
    }),
    prisma.dictation.findMany({
      where: { status: "active" },
      orderBy: [{ difficulty: "asc" }, { theme: "asc" }, { id: "asc" }],
      select: { id: true, text: true, theme: true, difficulty: true, rules: { select: { slug: true } } },
    }),
  ]);

  const payload = {
    categories: categories.filter((c) => rules.some((r) => r.category.name === c.name)).map((c) => c.name),
    rules: rules.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      statement: r.statement,
      tip: r.tip,
      difficulty: r.difficulty,
      category: r.category.name,
      disputed: r.status === "disputed",
      sentences: r.sentences,
    })),
    dictations: dictations.map((d, i) => ({
      id: d.id,
      number: i + 1,
      text: d.text,
      theme: d.theme,
      difficulty: d.difficulty,
      rules: d.rules.map((x) => x.slug),
    })),
  };
  // Contenu public et identique pour tout le monde : il peut être mis en cache.
  return maybeGzip(JSON.stringify(payload), request);
}
