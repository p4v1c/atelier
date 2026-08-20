/**
 * GET /api/auth/me
 *
 * Renvoie l'utilisateur connecté et ses réglages. 401 sinon — c'est ce que le
 * client interroge au chargement pour savoir s'il affiche le mode invité.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser, toPublicUser } from "@/lib/auth/guard";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;

  const settings = await prisma.userSettings.findUnique({
    where: { userId: auth.user.id },
    include: { defaultCategory: { select: { slug: true, name: true } } },
  });

  return withCookie(
    json({
      user: toPublicUser(auth.user),
      settings: settings
        ? {
            seriesLength: settings.seriesLength,
            defaultCategory: settings.defaultCategory?.name ?? null,
            options: settings.options,
          }
        : null,
    }),
    auth.refreshedCookie
  );
}
