/**
 * GET /api/progress?module=francais
 *
 * Progression complète dans un module : compétence par compétence et catégorie
 * par catégorie, plus les points faibles du moment et les dernières séries.
 * C'est ce qui alimente l'écran Statistiques.
 *
 * Sans paramètre `module`, la réponse porte sur le module par défaut ; le
 * champ `modules` récapitule TOUS les modules, et c'est lui qui alimente le
 * tableau de bord.
 */
import { json, withCookie } from "@/lib/http";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth/guard";
import { estimateLevel, isMastered, MASTERY_BOX } from "@/lib/study/scheduler";
import { MODULE_PAR_DEFAUT } from "@/lib/study/service";
import { moduleIdSchema } from "@/lib/study/schemas";
import { fail } from "@/lib/http";

export async function GET(request: Request): Promise<Response> {
  const auth = await requireUser(request);
  if (auth instanceof Response) return auth;
  const userId = auth.user.id;

  const demande = new URL(request.url).searchParams.get("module");
  const parsed = moduleIdSchema.safeParse(demande ?? undefined);
  if (!parsed.success) return fail(400, "invalid_input", "Identifiant de module invalide.");
  const moduleId = parsed.data || MODULE_PAR_DEFAUT;

  const [skills, progressRows, recentSessions, modules] = await Promise.all([
    prisma.skill.findMany({
      where: { moduleId, status: "active" },
      select: {
        id: true,
        slug: true,
        title: true,
        difficulty: true,
        level: true,
        lesson: true,
        category: { select: { name: true, position: true } },
      },
      orderBy: [{ category: { position: "asc" } }, { difficulty: "asc" }, { slug: "asc" }],
    }),
    prisma.skillProgress.findMany({
      where: { userId, skill: { moduleId } },
      select: {
        skillId: true,
        box: true,
        seenCount: true,
        correctCount: true,
        isNew: true,
        dueAtCounter: true,
        lastReviewedAt: true,
      },
    }),
    prisma.studySession.findMany({
      where: { userId, moduleId, NOT: { finishedAt: null } },
      orderBy: { startedAt: "desc" },
      take: 12,
      select: { type: true, questionCount: true, score: true, startedAt: true, finishedAt: true },
    }),
    prisma.module.findMany({
      where: { status: "active" },
      orderBy: { position: "asc" },
      select: { id: true, name: true, tagline: true, progression: true },
    }),
  ]);

  const bySkillId = new Map(progressRows.map((p) => [p.skillId, p]));
  const counter = auth.user.answerCounter;

  const skillProgress = skills.map((skill) => {
    const p = bySkillId.get(skill.id);
    const box = p?.box ?? 0;
    const isNew = p?.isNew ?? true;
    return {
      slug: skill.slug,
      title: skill.title,
      category: skill.category.name,
      difficulty: skill.difficulty,
      level: skill.level,
      hasLesson: skill.lesson !== null,
      box,
      isNew,
      mastered: !isNew && isMastered(box),
      due: !isNew && (p?.dueAtCounter ?? 0) <= counter,
      seenCount: p?.seenCount ?? 0,
      correctCount: p?.correctCount ?? 0,
      lastReviewedAt: p?.lastReviewedAt?.toISOString() ?? null,
    };
  });

  const categories = new Map<
    string,
    { category: string; skills: number; mastered: number; due: number; unseen: number }
  >();
  for (const r of skillProgress) {
    const bucket =
      categories.get(r.category) ?? { category: r.category, skills: 0, mastered: 0, due: 0, unseen: 0 };
    bucket.skills++;
    if (r.mastered) bucket.mastered++;
    if (r.due) bucket.due++;
    if (r.isNew) bucket.unseen++;
    categories.set(r.category, bucket);
  }

  const mastered = skillProgress.filter((r) => r.mastered).length;

  /**
   * Le niveau du cadre européen, par palier.
   *
   * On ne se déclare pas d'un niveau parce qu'on y a touché : on l'est quand on
   * le tient. La règle retenue est simple et défendable — un niveau est acquis
   * à 80 %, et le niveau annoncé est le premier qui ne l'est pas encore. Un
   * apprenant qui maîtrise tout le A1 et un tiers du A2 est donc « A2 en
   * cours », ce qui est la vérité.
   */
  const parNiveau = new Map<string, { total: number; acquis: number; vus: number }>();
  for (const s of skillProgress) {
    if (!s.level) continue;
    const bucket = parNiveau.get(s.level) ?? { total: 0, acquis: 0, vus: 0 };
    bucket.total++;
    if (s.mastered) bucket.acquis++;
    if (!s.isNew) bucket.vus++;
    parNiveau.set(s.level, bucket);
  }
  const ORDRE = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const niveaux = ORDRE.filter((n) => parNiveau.has(n)).map((n) => {
    const b = parNiveau.get(n)!;
    return {
      niveau: n,
      total: b.total,
      acquis: b.acquis,
      vus: b.vus,
      part: b.total ? Math.round((b.acquis / b.total) * 100) : 0,
    };
  });
  const SEUIL = 80;
  const acquisJusqua = niveaux.filter((n) => n.part >= SEUIL);
  const niveauEstime =
    niveaux.length === 0
      ? null
      : (niveaux.find((n) => n.part < SEUIL)?.niveau ?? niveaux[niveaux.length - 1]!.niveau);
  const niveauAcquis = acquisJusqua.length ? acquisJusqua[acquisJusqua.length - 1]!.niveau : null;

  // Les pires d'abord : palier le plus bas, puis le plus mauvais taux de réussite.
  const weakest = skillProgress
    .filter((r) => !r.isNew)
    .sort((a, b) => a.box - b.box || a.correctCount / a.seenCount - b.correctCount / b.seenCount)
    .slice(0, 8);

  /* ── récapitulatif de tous les modules : la matière du tableau de bord ── */
  const resume = await Promise.all(
    modules.map(async (m) => {
      const [total, progres, dictees] = await Promise.all([
        prisma.skill.count({ where: { moduleId: m.id, status: "active" } }),
        prisma.skillProgress.findMany({
          where: { userId, skill: { moduleId: m.id, status: "active" } },
          select: { box: true, isNew: true, dueAtCounter: true },
        }),
        prisma.dictation.count({ where: { moduleId: m.id, status: "active" } }),
      ]);
      const acquises = progres.filter((p) => !p.isNew && isMastered(p.box)).length;
      const aRevoir = progres.filter((p) => !p.isNew && p.dueAtCounter <= counter).length;
      const vues = progres.filter((p) => !p.isNew).length;
      return {
        id: m.id,
        name: m.name,
        tagline: m.tagline,
        progression: m.progression,
        skillCount: total,
        // Les dictées ne concernent pas toutes les matières : l'accueil masque
        // l'entrée plutôt que de proposer un écran vide.
        dictationCount: dictees,
        seen: vues,
        mastered: acquises,
        due: aRevoir,
        unseen: total - vues,
        level: estimateLevel(acquises, total),
      };
    })
  );

  return withCookie(
    json({
      moduleId,
      modules: resume,
      level: estimateLevel(mastered, skills.length),
      /** Le cadre européen, quand la matière en relève. */
      niveaux,
      niveauEstime,
      niveauAcquis,
      masteryBox: MASTERY_BOX,
      answerCounter: counter,
      skillCount: skills.length,
      mastered,
      due: skillProgress.filter((r) => r.due).length,
      unseen: skillProgress.filter((r) => r.isNew).length,
      categories: [...categories.values()],
      skills: skillProgress,
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
