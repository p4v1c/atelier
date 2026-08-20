/**
 * GET /api/progress
 *
 * Progression complète : règle par règle et catégorie par catégorie, plus les
 * points faibles du moment et les dernières séries. C'est ce qui alimente
 * l'écran Statistiques.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { estimateLevel, isMastered, MASTERY_BOX } from "@/lib/study/scheduler";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;
  const userId = auth.user.id;

  const [rules, progressRows, recentSessions] = await Promise.all([
    prisma.rule.findMany({
      where: { status: "active" },
      select: { id: true, slug: true, title: true, difficulty: true, category: { select: { name: true, position: true } } },
      orderBy: [{ category: { position: "asc" } }, { difficulty: "asc" }, { slug: "asc" }],
    }),
    prisma.ruleProgress.findMany({
      where: { userId },
      select: { ruleId: true, box: true, seenCount: true, correctCount: true, isNew: true, dueAtCounter: true, lastReviewedAt: true },
    }),
    prisma.studySession.findMany({
      where: { userId, NOT: { finishedAt: null } },
      orderBy: { startedAt: "desc" },
      take: 12,
      select: { type: true, questionCount: true, score: true, startedAt: true, finishedAt: true },
    }),
  ]);

  const byRuleId = new Map(progressRows.map((p) => [p.ruleId, p]));
  const counter = auth.user.answerCounter;

  const ruleProgress = rules.map((rule) => {
    const p = byRuleId.get(rule.id);
    const box = p?.box ?? 0;
    const isNew = p?.isNew ?? true;
    return {
      slug: rule.slug,
      title: rule.title,
      category: rule.category.name,
      difficulty: rule.difficulty,
      box,
      isNew,
      mastered: !isNew && isMastered(box),
      due: !isNew && (p?.dueAtCounter ?? 0) <= counter,
      seenCount: p?.seenCount ?? 0,
      correctCount: p?.correctCount ?? 0,
      lastReviewedAt: p?.lastReviewedAt?.toISOString() ?? null,
    };
  });

  const categories = new Map<string, { category: string; rules: number; mastered: number; due: number; unseen: number }>();
  for (const r of ruleProgress) {
    const bucket = categories.get(r.category) ?? { category: r.category, rules: 0, mastered: 0, due: 0, unseen: 0 };
    bucket.rules++;
    if (r.mastered) bucket.mastered++;
    if (r.due) bucket.due++;
    if (r.isNew) bucket.unseen++;
    categories.set(r.category, bucket);
  }

  const mastered = ruleProgress.filter((r) => r.mastered).length;

  // Les pires d'abord : palier le plus bas, puis le plus mauvais taux de réussite.
  const weakest = ruleProgress
    .filter((r) => !r.isNew)
    .sort((a, b) => a.box - b.box || a.correctCount / a.seenCount - b.correctCount / b.seenCount)
    .slice(0, 8);

  return withCookie(
    json({
      level: estimateLevel(mastered, rules.length),
      masteryBox: MASTERY_BOX,
      answerCounter: counter,
      ruleCount: rules.length,
      mastered,
      due: ruleProgress.filter((r) => r.due).length,
      unseen: ruleProgress.filter((r) => r.isNew).length,
      categories: [...categories.values()],
      rules: ruleProgress,
      weakest,
      recentSessions: recentSessions.map((s) => ({
        type: s.type,
        questionCount: s.questionCount,
        score: s.score,
        startedAt: s.startedAt.toISOString(),
        finishedAt: s.finishedAt?.toISOString() ?? null,
      })),
    }),
    auth.refreshedCookie
  );
}
