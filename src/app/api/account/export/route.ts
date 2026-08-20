/**
 * GET /api/account/export
 *
 * Export complet des données de l'utilisateur, en JSON, téléchargeable.
 * Tout ce qui le concerne y figure : progression, tentatives, séries, dictées,
 * réglages. Ni l'empreinte du mot de passe ni les tokens de session, qui ne
 * sont pas des données personnelles mais des secrets d'authentification.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser, toPublicUser } from "@/lib/auth/guard";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;
  const userId = auth.user.id;

  const [progress, attempts, studySessions, dictationAttempts, settings, sessions] = await Promise.all([
    prisma.ruleProgress.findMany({
      where: { userId },
      include: { rule: { select: { slug: true, title: true, category: { select: { name: true } } } } },
      orderBy: { ruleId: "asc" },
    }),
    prisma.attempt.findMany({
      where: { userId },
      include: { sentence: { select: { text: true, rule: { select: { slug: true } } } } },
      orderBy: { createdAt: "asc" },
    }),
    prisma.studySession.findMany({ where: { userId }, orderBy: { startedAt: "asc" } }),
    prisma.dictationAttempt.findMany({
      where: { userId },
      include: { dictation: { select: { text: true, theme: true } } },
      orderBy: { createdAt: "asc" },
    }),
    prisma.userSettings.findUnique({
      where: { userId },
      include: { defaultCategory: { select: { name: true } } },
    }),
    // Les appareils connectés, sans le moindre élément de token.
    prisma.session.findMany({
      where: { userId },
      select: { createdAt: true, expiresAt: true, userAgent: true },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const payload = {
    exportedAt: new Date().toISOString(),
    format: 1,
    user: toPublicUser(auth.user),
    settings: settings && {
      seriesLength: settings.seriesLength,
      defaultCategory: settings.defaultCategory?.name ?? null,
      options: settings.options,
    },
    progress: progress.map((p) => ({
      rule: p.rule.slug,
      title: p.rule.title,
      category: p.rule.category.name,
      box: p.box,
      dueAtCounter: p.dueAtCounter,
      seenCount: p.seenCount,
      correctCount: p.correctCount,
      isNew: p.isNew,
      lastReviewedAt: p.lastReviewedAt?.toISOString() ?? null,
    })),
    attempts: attempts.map((a) => ({
      rule: a.sentence.rule.slug,
      sentence: a.sentence.text,
      answerIndex: a.answerIndex,
      isCorrect: a.isCorrect,
      at: a.createdAt.toISOString(),
    })),
    studySessions: studySessions.map((s) => ({
      type: s.type,
      category: s.category,
      questionCount: s.questionCount,
      score: s.score,
      startedAt: s.startedAt.toISOString(),
      finishedAt: s.finishedAt?.toISOString() ?? null,
    })),
    dictationAttempts: dictationAttempts.map((d) => ({
      dictation: d.dictation.text,
      theme: d.dictation.theme,
      text: d.text,
      score: d.score,
      at: d.createdAt.toISOString(),
    })),
    sessions: sessions.map((s) => ({
      createdAt: s.createdAt.toISOString(),
      expiresAt: s.expiresAt.toISOString(),
      userAgent: s.userAgent,
    })),
  };

  const stamp = new Date().toISOString().slice(0, 10);
  return withCookie(
    json(payload, {
      headers: { "content-disposition": `attachment; filename="la-regle-${stamp}.json"` },
    }),
    auth.refreshedCookie
  );
}
