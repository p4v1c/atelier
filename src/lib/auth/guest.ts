/**
 * Reprise de la progression d'un invité au moment de l'inscription.
 *
 * Le mode invité garde tout dans le navigateur. À l'inscription, le client
 * envoie ce qu'il a ; on le recopie en base après l'avoir borné (voir
 * guestProgressSchema) et après avoir écarté les règles inconnues.
 *
 * Volontairement non rejouable : la reprise n'a lieu qu'à la création du compte,
 * jamais sur un compte existant, sinon un import mal fait écrase une vraie
 * progression.
 */
import type { Prisma, PrismaClient } from "@prisma/client";
import type { GuestProgress } from "./schemas";

type Db = PrismaClient | Prisma.TransactionClient;

export type GuestImportReport = {
  imported: number;
  /** Slugs envoyés mais absents du catalogue : contenu supprimé ou renommé. */
  unknownSlugs: string[];
  answerCounter: number;
};

export async function importGuestProgress(
  db: Db,
  userId: string,
  guest: GuestProgress
): Promise<GuestImportReport> {
  if (guest.rules.length === 0) {
    return { imported: 0, unknownSlugs: [], answerCounter: 0 };
  }

  const slugs = [...new Set(guest.rules.map((r) => r.slug))];
  const rules = await db.rule.findMany({ where: { slug: { in: slugs } }, select: { id: true, slug: true } });
  const idBySlug = new Map(rules.map((r) => [r.slug, r.id]));
  const unknownSlugs = slugs.filter((s) => !idBySlug.has(s));

  // Une même règle envoyée deux fois : on garde la meilleure progression.
  const best = new Map<string, (typeof guest.rules)[number]>();
  for (const r of guest.rules) {
    const current = best.get(r.slug);
    if (!current || r.box > current.box || (r.box === current.box && r.seenCount > current.seenCount)) {
      best.set(r.slug, r);
    }
  }

  const rows = [...best.values()]
    .filter((r) => idBySlug.has(r.slug))
    .map((r) => ({
      userId,
      ruleId: idBySlug.get(r.slug)!,
      box: r.box,
      dueAtCounter: r.dueAtCounter,
      seenCount: r.seenCount,
      // Une progression bricolée pourrait annoncer plus de réussites que de vues.
      correctCount: Math.min(r.correctCount, r.seenCount),
      isNew: r.seenCount === 0,
      lastReviewedAt: r.seenCount > 0 ? new Date() : null,
    }));

  if (rows.length > 0) {
    await db.ruleProgress.createMany({ data: rows, skipDuplicates: true });
  }

  return { imported: rows.length, unknownSlugs, answerCounter: guest.answerCounter };
}
