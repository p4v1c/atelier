/**
 * API de session : la série est composée côté serveur, la réponse est notée
 * côté serveur, et rien de ce que le client renvoie n'est cru sur parole.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { POST as register } from "@/app/api/auth/register/route";
import { GET as nextSession } from "@/app/api/session/next/route";
import { POST as answer } from "@/app/api/session/answer/route";
import { POST as finish } from "@/app/api/session/finish/route";
import { GET as progress } from "@/app/api/progress/route";
import { GET as rulesRoute } from "@/app/api/catalogue/route";
import { GET as dictationsRoute } from "@/app/api/dictations/route";
import { GET as dictationRoute } from "@/app/api/dictations/[id]/route";
import { POST as dictationAttempt } from "@/app/api/dictations/[id]/attempt/route";
import { INTERVALS } from "@/lib/study/scheduler";
import { cleanupTestData, get, post, prisma, sessionCookie, uniqueEmail } from "./helpers/api.js";

const PASSWORD = "brouette-lilas-42";

let cookie: string;
let userId: string;

beforeAll(async () => {
  await cleanupTestData();
  const response = await register(
    post("/api/auth/register", { email: uniqueEmail("session"), password: PASSWORD, pseudo: "Joueur" })
  );
  cookie = sessionCookie(response)!;
  userId = (await response.json()).user.id;
});

afterAll(async () => {
  await cleanupTestData();
  await prisma.$disconnect();
});

async function startSeries(query = "?size=10&mode=training") {
  const r = await nextSession(get(`/api/session/next${query}`, { cookie }));
  expect(r.status).toBe(200);
  return (await r.json()) as {
    studySessionId: string;
    questions: {
      position: number;
      exerciseId: string;
      skillId: string;
      category: string;
      kind: string;
      question: { text: string; tokens: { word: string }[] };
    }[];
  };
}

/** Répond à une question en trichant… autant qu'un client puisse tricher. */
async function reply(studySessionId: string, exerciseId: string, answerIndex: number) {
  const r = await answer(
    post("/api/session/answer", { studySessionId, exerciseId, answer: answerIndex }, { cookie })
  );
  return { status: r.status, body: await r.json() };
}

/** L'index attendu, lu directement en base : le test le sait, le client non. */
async function faultyIndexOf(exerciseId: string): Promise<number> {
  const s = await prisma.exercise.findUniqueOrThrow({ where: { id: exerciseId } });
  return (s.payload as { faultyTokenIndex: number }).faultyTokenIndex;
}

describe("GET /api/session/next", () => {
  it("compose une série de la bonne longueur", async () => {
    const series = await startSeries("?size=10&mode=training");
    expect(series.questions).toHaveLength(10);
    expect(series.studySessionId).toBeTruthy();
  });

  it("ne laisse jamais filtrer le mot fautif dans la charge utile", async () => {
    const series = await startSeries();
    const raw = JSON.stringify(series);
    expect(raw).not.toContain("faultyTokenIndex");
    expect(raw).not.toContain("correction");
    expect(raw).not.toContain("isCorrect");
    // Ni les tokens ni quoi que ce soit d'autre ne marquent la cible.
    for (const q of series.questions) {
      for (const token of q.question.tokens) expect(Object.keys(token).sort()).toEqual(["after", "before", "word"]);
    }
  });

  it("ne sert jamais deux fois la même règle dans une série", async () => {
    const series = await startSeries("?size=20&mode=training");
    expect(new Set(series.questions.map((q) => q.skillId)).size).toBe(series.questions.length);
  });

  it("respecte le filtre par catégorie", async () => {
    const series = await startSeries("?size=10&mode=targeted&category=Homophones");
    expect(series.questions.every((q) => q.category === "Homophones")).toBe(true);
  });

  it("refuse une longueur de série non prévue", async () => {
    const r = await nextSession(get("/api/session/next?size=999&mode=training", { cookie }));
    expect(r.status).toBe(400);
  });

  it("répond 409, pas 500, quand la sélection est vide", async () => {
    const r = await nextSession(get("/api/session/next?size=10&mode=weakness", { cookie }));
    expect([200, 409]).toContain(r.status);
    if (r.status === 409) expect((await r.json()).error.code).toBe("no_content");
  });

  it("refuse sans session", async () => {
    expect((await nextSession(get("/api/session/next?size=10&mode=training"))).status).toBe(401);
  });

  it("le test de positionnement fait 25 questions et couvre les catégories", async () => {
    const r = await nextSession(get("/api/session/next?mode=test", { cookie }));
    const series = await r.json();
    expect(series.questions).toHaveLength(25);
    expect(new Set(series.questions.map((q: { category: string }) => q.category)).size).toBeGreaterThanOrEqual(4);
  });
});

describe("POST /api/session/answer", () => {
  it("note la bonne réponse, fait monter le palier et révèle la règle", async () => {
    const series = await startSeries();
    const q = series.questions[0]!;
    const expected = await faultyIndexOf(q.exerciseId);

    const { status, body } = await reply(series.studySessionId, q.exerciseId, expected);
    expect(status).toBe(200);
    expect(body.correct).toBe(true);
    expect(body.reveal.faultyTokenIndex).toBe(expected);
    expect(body.box).toEqual({ before: 0, after: 1, mastered: false, justMastered: false });
    expect(body.skill.title).toBeTruthy();
    expect(body.skill.tip).toBeTruthy();
  });

  it("note la mauvaise réponse et révèle quand même la correction", async () => {
    const series = await startSeries();
    const q = series.questions[0]!;
    const expected = await faultyIndexOf(q.exerciseId);
    const wrong = expected === 0 ? 1 : 0;

    const { body } = await reply(series.studySessionId, q.exerciseId, wrong);
    expect(body.correct).toBe(false);
    expect(body.reveal.faultyTokenIndex).toBe(expected);
  });

  it("« Aucune faute » vaut juste sur une phrase correcte, faux sinon", async () => {
    // On interroge la charge utile JSON : c'est elle qui porte désormais le
    // rang du mot fautif, et -1 y désigne toujours une phrase sans faute.
    const correctSentence = await prisma.exercise.findFirstOrThrow({
      where: { status: "active", payload: { path: ["faultyTokenIndex"], equals: -1 } },
    });
    const faultySentence = await prisma.exercise.findFirstOrThrow({
      where: { status: "active", NOT: { payload: { path: ["faultyTokenIndex"], equals: -1 } } },
    });
    const series = await startSeries();

    expect((await reply(series.studySessionId, correctSentence.id, -1)).body.correct).toBe(true);
    expect((await reply(series.studySessionId, faultySentence.id, -1)).body.correct).toBe(false);
  });

  it("fait avancer le compteur et calcule l'échéance dessus", async () => {
    const before = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
    const series = await startSeries();
    const q = series.questions[0]!;
    const expected = await faultyIndexOf(q.exerciseId);
    await reply(series.studySessionId, q.exerciseId, expected);

    const after = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
    expect(after.answerCounter).toBe(before.answerCounter + 1);

    const p = await prisma.skillProgress.findUniqueOrThrow({
      where: { userId_skillId: { userId, skillId: q.skillId } },
    });
    expect(p.dueAtCounter).toBe(after.answerCounter + INTERVALS[p.box]!);
    expect(p.isNew).toBe(false);
  });

  it("ne rapporte rien à répondre deux fois à la même question", async () => {
    const series = await startSeries();
    const q = series.questions[0]!;
    const expected = await faultyIndexOf(q.exerciseId);

    const first = await reply(series.studySessionId, q.exerciseId, expected);
    const second = await reply(series.studySessionId, q.exerciseId, expected);

    expect(first.body.alreadyAnswered).toBe(false);
    expect(second.body.alreadyAnswered).toBe(true);
    expect(second.body.box.after).toBe(first.body.box.after);

    const attempts = await prisma.attempt.count({
      where: { userId, studySessionId: series.studySessionId, exerciseId: q.exerciseId },
    });
    expect(attempts).toBe(1);
  });

  it("refuse une série qui n'appartient pas à l'utilisateur", async () => {
    const other = await register(
      post("/api/auth/register", { email: uniqueEmail("intrus"), password: PASSWORD, pseudo: "Intrus" })
    );
    const otherCookie = sessionCookie(other)!;
    const series = await startSeries();

    const r = await answer(
      post(
        "/api/session/answer",
        { studySessionId: series.studySessionId, exerciseId: series.questions[0]!.exerciseId, answer: 0 },
        { cookie: otherCookie }
      )
    );
    expect(r.status).toBe(404);
  });

  it("refuse une phrase inventée et une série close", async () => {
    const series = await startSeries();
    expect((await reply(series.studySessionId, "phrase-qui-nexiste-pas", 0)).status).toBe(404);

    await finish(post("/api/session/finish", { studySessionId: series.studySessionId }, { cookie }));
    expect((await reply(series.studySessionId, series.questions[0]!.exerciseId, 0)).status).toBe(404);
  });
});

describe("progression des paliers dans la durée", () => {
  it("quatre bonnes réponses mènent à la maîtrise, une erreur la retire", async () => {
    // Une règle que cet utilisateur n'a jamais vue : sinon on repart d'un palier
    // laissé par un test précédent et la séquence attendue ne veut plus rien dire.
    const rule = await prisma.skill.findFirstOrThrow({
      where: {
        status: "active",
        exercises: { some: { status: "active" } },
        progress: { none: { userId } },
      },
      select: { id: true, exercises: { where: { status: "active" }, select: { id: true, payload: true } } },
    });

    const boxes: number[] = [];
    for (let i = 0; i < 4; i++) {
      const series = await startSeries();
      const sentence = rule.exercises[i % rule.exercises.length]!;
      const attendu = (sentence.payload as { faultyTokenIndex: number }).faultyTokenIndex;
      const { body } = await reply(series.studySessionId, sentence.id, attendu);
      boxes.push(body.box.after);
      if (body.box.justMastered) expect(body.box.after).toBe(4);
    }
    expect(boxes).toEqual([1, 2, 3, 4]);

    const series = await startSeries();
    const sentence = rule.exercises[0]!;
    const attendu = (sentence.payload as { faultyTokenIndex: number }).faultyTokenIndex;
    const wrong = attendu === 0 ? 1 : 0;
    const { body } = await reply(series.studySessionId, sentence.id, wrong);
    expect(body.box).toMatchObject({ before: 4, after: 2, mastered: false });
  });
});

describe("POST /api/session/finish", () => {
  it("rend le bilan et clôt la série", async () => {
    const series = await startSeries("?size=10&mode=training");
    let correct = 0;
    for (const q of series.questions.slice(0, 4)) {
      const expected = await faultyIndexOf(q.exerciseId);
      const wrong = expected === 0 ? 1 : 0;
      const useCorrect = correct < 3;
      await reply(series.studySessionId, q.exerciseId, useCorrect ? expected : wrong);
      if (useCorrect) correct++;
    }

    const r = await finish(post("/api/session/finish", { studySessionId: series.studySessionId }, { cookie }));
    expect(r.status).toBe(200);
    const summary = await r.json();
    expect(summary.total).toBe(4);
    expect(summary.correct).toBe(3);
    expect(summary.score).toBe(75);
    expect(summary.byCategory.reduce((n: number, c: { total: number }) => n + c.total, 0)).toBe(4);
    expect(typeof summary.level).toBe("string");

    const stored = await prisma.studySession.findUniqueOrThrow({ where: { id: series.studySessionId } });
    expect(stored.finishedAt).not.toBeNull();
    expect(stored.score).toBe(75);
  });

  it("marque le test de positionnement comme passé", async () => {
    const r = await nextSession(get("/api/session/next?mode=test", { cookie }));
    const series = await r.json();
    await finish(post("/api/session/finish", { studySessionId: series.studySessionId }, { cookie }));
    const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });
    expect(user.placementDoneAt).not.toBeNull();
  });
});

describe("GET /api/progress", () => {
  it("rend la progression par règle et par catégorie", async () => {
    const r = await progress(get("/api/progress", { cookie }));
    expect(r.status).toBe(200);
    const body = await r.json();
    expect(body.skillCount).toBeGreaterThan(200);
    expect(body.skills.length).toBe(body.skillCount);
    expect(body.categories.reduce((n: number, c: { skills: number }) => n + c.skills, 0)).toBe(
      body.skillCount
    );
    expect(body.skills.some((x: { seenCount: number }) => x.seenCount > 0)).toBe(true);
    // Le tableau de bord se sert de ce récapitulatif : il doit citer le module.
    expect(body.modules.map((m: { id: string }) => m.id)).toContain("francais");
    expect(body.weakest.every((w: { isNew: boolean }) => !w.isNew)).toBe(true);
    expect(typeof body.level).toBe("string");
  });
});

describe("GET /api/catalogue", () => {
  it("rend le catalogue sans jamais donner les phrases d'exercice", async () => {
    const r = await rulesRoute(get("/api/catalogue", { cookie }));
    const body = await r.json();
    expect(body.skills.length).toBeGreaterThan(200);
    expect(body.skills[0]).toHaveProperty("tip");
    expect(body.skills[0]).not.toHaveProperty("exercises");
    expect(JSON.stringify(body)).not.toContain("faultyTokenIndex");
    // Le vocabulaire vient du module : l'écran dit « règle », pas « compétence ».
    expect(body.vocabulaire.skill).toBe("règle");
  });

  it("filtre par catégorie", async () => {
    const r = await rulesRoute(get("/api/catalogue?category=Accords", { cookie }));
    const body = await r.json();
    expect(body.skills.every((x: { category: string }) => x.category === "Accords")).toBe(true);
  });
});

describe("dictées", () => {
  it("liste les dictées sans en livrer le texte", async () => {
    const r = await dictationsRoute(get("/api/dictations", { cookie }));
    const body = await r.json();
    expect(body.dictations.length).toBeGreaterThan(0);
    expect(body.dictations[0]).not.toHaveProperty("text");
    expect(body.dictations[0].wordCount).toBeGreaterThan(3);
  });

  it("corrige mot à mot et retient le meilleur score", async () => {
    const dictation = await prisma.dictation.findFirstOrThrow({ where: { status: "active" } });
    const params = Promise.resolve({ id: dictation.id });

    const detail = await (await dictationRoute(get(`/api/dictations/${dictation.id}`, { cookie }), { params })).json();
    expect(detail.text).toBe(dictation.text);

    const perfect = await dictationAttempt(
      post(`/api/dictations/${dictation.id}/attempt`, { text: dictation.text }, { cookie }),
      { params }
    );
    const perfectBody = await perfect.json();
    expect(perfectBody.score).toBe(100);

    const poor = await dictationAttempt(
      post(`/api/dictations/${dictation.id}/attempt`, { text: "n'importe quoi" }, { cookie }),
      { params }
    );
    const poorBody = await poor.json();
    expect(poorBody.score).toBeLessThan(50);
    expect(poorBody.bestScore).toBe(100); // le meilleur, pas le dernier
  });

  it("refuse une dictée inconnue", async () => {
    const r = await dictationRoute(get("/api/dictations/inexistante", { cookie }), {
      params: Promise.resolve({ id: "inexistante" }),
    });
    expect(r.status).toBe(404);
  });
});

describe("série sur une seule règle", () => {
  it("tire plusieurs phrases de la même règle, et les siennes seulement", async () => {
    const rule = await prisma.skill.findFirstOrThrow({
      where: { status: "active" },
      select: { slug: true, id: true, _count: { select: { exercises: true } } },
    });

    const r = await nextSession(get(`/api/session/next?mode=skill&size=10&skill=${encodeURIComponent(rule.slug)}`, { cookie }));
    expect(r.status).toBe(200);
    const series = await r.json();

    expect(series.mode).toBe("skill");
    expect(series.skill.slug).toBe(rule.slug);
    expect(series.questions.length).toBeGreaterThan(1);
    expect(series.questions.every((q: { skillId: string }) => q.skillId === rule.id)).toBe(true);
    // Chaque phrase n'apparaît qu'une fois dans la série.
    expect(new Set(series.questions.map((q: { exerciseId: string }) => q.exerciseId)).size).toBe(
      series.questions.length
    );
    // Le mot fautif reste caché, comme dans tous les autres modes.
    expect(JSON.stringify(series)).not.toContain("faultyTokenIndex");
  });

  it("note les réponses et fait bouger le palier de la règle travaillée", async () => {
    const rule = await prisma.skill.findFirstOrThrow({
      where: { status: "active", progress: { none: { userId } } },
      select: { slug: true, id: true },
    });
    const series = await (
      await nextSession(get(`/api/session/next?mode=skill&size=10&skill=${encodeURIComponent(rule.slug)}`, { cookie }))
    ).json();

    for (const q of series.questions.slice(0, 3)) {
      const expected = await faultyIndexOf(q.exerciseId);
      const { body } = await reply(series.studySessionId, q.exerciseId, expected);
      expect(body.correct).toBe(true);
    }
    const p = await prisma.skillProgress.findUniqueOrThrow({
      where: { userId_skillId: { userId, skillId: rule.id } },
    });
    expect(p.box).toBe(3);
    expect(p.seenCount).toBe(3);
  });

  it("refuse le mode sans slug, et un slug inconnu", async () => {
    expect((await nextSession(get("/api/session/next?mode=rule&size=10", { cookie }))).status).toBe(400);
    const r = await nextSession(get("/api/session/next?mode=skill&size=10&skill=regle-inexistante", { cookie }));
    expect(r.status).toBe(409);
    expect((await r.json()).error.code).toBe("no_content");
  });

  it("ne sert jamais une règle « cas discutés »", async () => {
    const disputed = await prisma.skill.findFirst({ where: { status: "disputed" }, select: { slug: true } });
    if (!disputed) return;
    const r = await nextSession(get(`/api/session/next?mode=skill&size=10&skill=${disputed.slug}`, { cookie }));
    expect(r.status).toBe(409);
  });
});
