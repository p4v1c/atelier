/**
 * GET /api/account/sessions
 *
 * Les sessions ouvertes de l'utilisateur : où il est connecté, depuis quand,
 * jusqu'à quand. C'est une information de sécurité — une session qu'on ne
 * reconnaît pas est le premier signe d'un compte partagé ou volé —, et elle
 * ne coûte rien puisque la table existait déjà pour faire tenir les cookies.
 *
 * Ce qui n'est PAS renvoyé : l'empreinte du jeton. Elle est le secret qui
 * ouvre la session ; une liste des sessions n'a aucune raison de la porter,
 * même hachée.
 *
 * L'adresse IP est stockée mais reste ici aussi : elle ne dit rien d'utile à
 * qui lit sa propre liste — on ne reconnaît pas ses appareils à leur IP — et
 * elle en dit beaucoup à quiconque lirait l'écran par-dessus l'épaule.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";

/**
 * Un agent utilisateur, réduit à ce qu'on y cherche.
 *
 * Ce n'est pas une bibliothèque de détection et ça n'a pas à l'être : on veut
 * seulement « c'est bien mon téléphone » ou « ce n'est pas moi ». Un agent
 * inconnu se dit inconnu plutôt que de se faire passer pour Chrome.
 */
function lireAgent(agent: string | null): { appareil: string; logiciel: string } {
  if (!agent) return { appareil: "Appareil inconnu", logiciel: "agent non transmis" };

  const mobile = /Mobile|iPhone|Android(?!.*Tablet)/.test(agent);
  const tablette = /iPad|Tablet/.test(agent);
  const appareil = tablette ? "Tablette" : mobile ? "Téléphone" : "Ordinateur";

  /* L'ordre compte : Edge et Chrome se déclarent tous deux « Chrome », et
     Chrome se déclare aussi « Safari ». On teste du plus précis au plus
     général, sans quoi tout le monde est Safari. */
  const navigateur =
    /Edg\//.test(agent) ? "Edge"
    : /OPR\//.test(agent) ? "Opera"
    : /Firefox\//.test(agent) ? "Firefox"
    : /Chrome\//.test(agent) ? "Chrome"
    : /Safari\//.test(agent) ? "Safari"
    : "navigateur inconnu";

  const systeme =
    /Windows/.test(agent) ? "Windows"
    : /Android/.test(agent) ? "Android"
    : /iPhone|iPad|iPod/.test(agent) ? "iOS"
    : /Mac OS X/.test(agent) ? "macOS"
    : /Linux/.test(agent) ? "Linux"
    : "système inconnu";

  return { appareil, logiciel: `${navigateur}, ${systeme}` };
}

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const sessions = await prisma.session.findMany({
    where: { userId: auth.user.id, expiresAt: { gt: new Date() } },
    select: { id: true, userAgent: true, createdAt: true, expiresAt: true },
    orderBy: { createdAt: "desc" },
  });

  return withCookie(
    json({
      sessions: sessions.map((s) => ({
        id: s.id,
        courante: s.id === auth.sessionId,
        ...lireAgent(s.userAgent),
        ouverteLe: s.createdAt.toISOString(),
        expireLe: s.expiresAt.toISOString(),
      })),
    }),
    auth.refreshedCookie
  );
}
