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
    prisma.skillProgress.findMany({
      where: { userId },
      include: {
        skill: {
          select: { slug: true, title: true, moduleId: true, category: { select: { name: true } } },
        },
      },
      orderBy: { skillId: "asc" },
    }),
    prisma.attempt.findMany({
      where: { userId },
      include: {
        exercise: {
          select: { kind: true, payload: true, skill: { select: { slug: true, moduleId: true } } },
        },
      },
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
    format: 2,
    user: toPublicUser(auth.user),
    settings: settings && {
      seriesLength: settings.seriesLength,
      defaultCategory: settings.defaultCategory?.name ?? null,
      options: settings.options,
    },
    progress: progress.map((p) => ({
      module: p.skill.moduleId,
      skill: p.skill.slug,
      title: p.skill.title,
      category: p.skill.category.name,
      box: p.box,
      dueAtCounter: p.dueAtCounter,
      seenCount: p.seenCount,
      correctCount: p.correctCount,
      isNew: p.isNew,
      lastReviewedAt: p.lastReviewedAt?.toISOString() ?? null,
    })),
    attempts: attempts.map((a) => ({
      module: a.exercise.skill.moduleId,
      skill: a.exercise.skill.slug,
      kind: a.exercise.kind,
      // L'exercice complet, réponse incluse : c'est TON export, il n'a pas à
      // te cacher ce sur quoi tu as travaillé.
      exercise: a.exercise.payload,
      answer: a.answer,
      isCorrect: a.isCorrect,
      at: a.createdAt.toISOString(),
    })),
    studySessions: studySessions.map((s) => ({
      module: s.moduleId,
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
