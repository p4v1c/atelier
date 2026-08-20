/**
 * Authentification de bout en bout : inscription, connexion, session, sortie,
 * changement de mot de passe, export, limitation de débit, reprise de la
 * progression invitée.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { POST as register } from "@/app/api/auth/register/route";
import { POST as login } from "@/app/api/auth/login/route";
import { POST as logout } from "@/app/api/auth/logout/route";
import { GET as me } from "@/app/api/auth/me/route";
import { POST as changePassword } from "@/app/api/auth/password/route";
import { GET as exportData } from "@/app/api/account/export/route";
import { hashToken, SESSION_COOKIE } from "@/lib/auth/session";
import { MAX_ATTEMPTS } from "@/lib/auth/rate-limit";
import {
  cleanupTestData,
  get,
  post,
  prisma,
  sessionCookie,
  sessionCookieAttributes,
  sessionToken,
  uniqueEmail,
  uniqueIp,
} from "./helpers/api";

const PASSWORD = "brouette-lilas-42";

beforeAll(cleanupTestData);
afterAll(async () => {
  await cleanupTestData();
  await prisma.$disconnect();
});

async function createAccount(overrides: Record<string, unknown> = {}) {
  const email = uniqueEmail();
  const response = await register(
    post("/api/auth/register", { email, password: PASSWORD, pseudo: "Testeur", ...overrides })
  );
  return { email, response, cookie: sessionCookie(response) };
}

describe("POST /api/auth/register", () => {
  it("crée le compte, ouvre la session et ne renvoie jamais l'empreinte", async () => {
    const { email, response } = await createAccount();
    expect(response.status).toBe(201);

    const body = (await response.json()) as { user: Record<string, unknown> };
    expect(body.user.email).toBe(email);
    expect(body.user.pseudo).toBe("Testeur");
    expect(JSON.stringify(body)).not.toContain("argon2");
    expect(body.user).not.toHaveProperty("passwordHash");
    expect(body.user).not.toHaveProperty("emailKey");
  });

  it("pose un cookie httpOnly, SameSite=Lax, valable 30 jours", async () => {
    const { response } = await createAccount();
    const cookie = sessionCookieAttributes(response)!;
    expect(cookie).toContain("HttpOnly");
    expect(cookie).toContain("SameSite=Lax");
    expect(cookie).toContain("Path=/");
    // Secure seulement en production : en développement, tout passe en HTTP.
    expect(cookie).not.toContain("Secure");

    const maxAge = Number(cookie.match(/Max-Age=(\d+)/)![1]);
    expect(maxAge).toBeGreaterThan(29 * 86_400);
    expect(maxAge).toBeLessThanOrEqual(30 * 86_400);
  });

  it("ne stocke que l'empreinte du token, jamais le token", async () => {
    const { response } = await createAccount();
    const token = sessionToken(response)!;
    expect(token.length).toBeGreaterThan(30);

    const stored = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) } });
    expect(stored).not.toBeNull();
    expect(await prisma.session.findFirst({ where: { tokenHash: token } })).toBeNull();
  });

  it("refuse une adresse déjà prise, quelle qu'en soit la casse", async () => {
    const { email } = await createAccount();
    const again = await register(
      post("/api/auth/register", { email: email.toUpperCase(), password: PASSWORD, pseudo: "Doublon" })
    );
    expect(again.status).toBe(409);
    expect((await again.json()).error.code).toBe("email_taken");
  });

  it("refuse un mot de passe de moins de 10 caractères", async () => {
    const r = await register(post("/api/auth/register", { email: uniqueEmail(), password: "court123", pseudo: "X" }));
    expect(r.status).toBe(400);
    expect((await r.json()).error.details.password).toBeDefined();
  });

  it("refuse un mot de passe des listes de fuite", async () => {
    const r = await register(
      post("/api/auth/register", { email: uniqueEmail(), password: "motdepasse123", pseudo: "X" })
    );
    expect(r.status).toBe(400);
    expect((await r.json()).error.code).toBe("weak_password");
  });

  it("refuse un mot de passe égal à l'adresse", async () => {
    const email = uniqueEmail();
    const r = await register(post("/api/auth/register", { email, password: email, pseudo: "X" }));
    expect(r.status).toBe(400);
    expect((await r.json()).error.code).toBe("weak_password");
  });

  it("refuse une adresse mal formée et un corps vide", async () => {
    expect((await register(post("/api/auth/register", { email: "pas-une-adresse", password: PASSWORD, pseudo: "X" }))).status).toBe(400);
    expect((await register(post("/api/auth/register", undefined))).status).toBe(400);
  });
});

describe("POST /api/auth/login", () => {
  it("ouvre une session sur les bons identifiants", async () => {
    const { email } = await createAccount();
    const r = await login(post("/api/auth/login", { email, password: PASSWORD }));
    expect(r.status).toBe(200);
    expect(sessionCookie(r)).not.toBeNull();
    expect((await r.json()).user.email).toBe(email);
  });

  it("accepte l'adresse dans une autre casse", async () => {
    const { email } = await createAccount();
    const r = await login(post("/api/auth/login", { email: email.toUpperCase(), password: PASSWORD }));
    expect(r.status).toBe(200);
  });

  it("répond exactement la même chose sur adresse inconnue et sur mot de passe faux", async () => {
    const { email } = await createAccount();
    const wrongPassword = await login(post("/api/auth/login", { email, password: "un-autre-mot-de-passe" }));
    const unknownEmail = await login(post("/api/auth/login", { email: uniqueEmail("fantome"), password: PASSWORD }));

    expect(wrongPassword.status).toBe(401);
    expect(unknownEmail.status).toBe(401);
    expect(await wrongPassword.json()).toEqual(await unknownEmail.json());
    expect(sessionCookie(wrongPassword)).toBeNull();
  });

  it("met à jour la date de dernière connexion", async () => {
    const { email } = await createAccount();
    await login(post("/api/auth/login", { email, password: PASSWORD }));
    const user = await prisma.user.findUniqueOrThrow({ where: { emailKey: email.toLowerCase() } });
    expect(user.lastLoginAt).not.toBeNull();
  });
});

describe("GET /api/auth/me", () => {
  it("renvoie l'utilisateur connecté et ses réglages", async () => {
    const { email, cookie } = await createAccount();
    const r = await me(get("/api/auth/me", { cookie }));
    expect(r.status).toBe(200);
    const body = await r.json();
    expect(body.user.email).toBe(email);
    expect(body.settings.seriesLength).toBe(20);
  });

  it("refuse sans cookie, avec un cookie inventé, ou avec une session expirée", async () => {
    expect((await me(get("/api/auth/me"))).status).toBe(401);
    expect((await me(get("/api/auth/me", { cookie: `${SESSION_COOKIE}=inventé` }))).status).toBe(401);

    const { cookie } = await createAccount();
    const token = cookie!.slice(SESSION_COOKIE.length + 1);
    await prisma.session.update({
      where: { tokenHash: hashToken(token) },
      data: { expiresAt: new Date(Date.now() - 1000) },
    });
    expect((await me(get("/api/auth/me", { cookie }))).status).toBe(401);
    // La session périmée est retirée au passage.
    expect(await prisma.session.findUnique({ where: { tokenHash: hashToken(token) } })).toBeNull();
  });

  it("fait glisser la session quand elle entre dans sa dernière journée", async () => {
    const { cookie } = await createAccount();
    const token = cookie!.slice(SESSION_COOKIE.length + 1);
    const hash = hashToken(token);

    // Pas de glissement tant qu'il reste plus de 29 jours.
    expect(sessionCookie(await me(get("/api/auth/me", { cookie })))).toBeNull();

    await prisma.session.update({
      where: { tokenHash: hash },
      data: { expiresAt: new Date(Date.now() + 2 * 86_400_000) },
    });
    const refreshed = await me(get("/api/auth/me", { cookie }));
    expect(refreshed.status).toBe(200);
    expect(sessionCookie(refreshed)).toBe(cookie); // même token, nouvelle échéance

    const after = await prisma.session.findUniqueOrThrow({ where: { tokenHash: hash } });
    expect(after.expiresAt.getTime()).toBeGreaterThan(Date.now() + 29 * 86_400_000);
  });
});

describe("POST /api/auth/logout", () => {
  it("supprime la session en base et vide le cookie", async () => {
    const { cookie } = await createAccount();
    const token = cookie!.slice(SESSION_COOKIE.length + 1);

    const r = await logout(post("/api/auth/logout", {}, { cookie }));
    expect(r.status).toBe(200);
    expect(sessionCookieAttributes(r)).toContain("Max-Age=0");
    expect(await prisma.session.findUnique({ where: { tokenHash: hashToken(token) } })).toBeNull();
    expect((await me(get("/api/auth/me", { cookie }))).status).toBe(401);
  });

  it("ne se plaint pas d'une déconnexion sans session", async () => {
    expect((await logout(post("/api/auth/logout", {}))).status).toBe(200);
  });
});

describe("POST /api/auth/password", () => {
  it("change le mot de passe et fait tomber les autres sessions", async () => {
    const { email, cookie } = await createAccount();
    const otherCookie = sessionCookie(await login(post("/api/auth/login", { email, password: PASSWORD })))!;

    const r = await changePassword(
      post("/api/auth/password", { currentPassword: PASSWORD, newPassword: "nouveau-mot-tambour" }, { cookie })
    );
    expect(r.status).toBe(200);
    expect((await r.json()).revokedSessions).toBeGreaterThanOrEqual(1);

    expect((await me(get("/api/auth/me", { cookie }))).status).toBe(200); // la session courante survit
    expect((await me(get("/api/auth/me", { cookie: otherCookie }))).status).toBe(401);

    expect((await login(post("/api/auth/login", { email, password: PASSWORD }))).status).toBe(401);
    expect((await login(post("/api/auth/login", { email, password: "nouveau-mot-tambour" }))).status).toBe(200);
  });

  it("exige le mot de passe actuel", async () => {
    const { cookie } = await createAccount();
    const r = await changePassword(
      post("/api/auth/password", { currentPassword: "pas-le-bon-du-tout", newPassword: "encore-un-autre-mot" }, { cookie })
    );
    expect(r.status).toBe(401);
  });

  it("refuse un nouveau mot de passe courant ou identique à l'ancien", async () => {
    const { cookie } = await createAccount();
    expect(
      (await changePassword(post("/api/auth/password", { currentPassword: PASSWORD, newPassword: "motdepasse123" }, { cookie }))).status
    ).toBe(400);
    expect(
      (await changePassword(post("/api/auth/password", { currentPassword: PASSWORD, newPassword: PASSWORD }, { cookie }))).status
    ).toBe(400);
  });

  it("refuse sans session", async () => {
    expect(
      (await changePassword(post("/api/auth/password", { currentPassword: PASSWORD, newPassword: "autre-mot-de-passe" }))).status
    ).toBe(401);
  });
});

describe("limitation de débit", () => {
  it("bloque après 5 tentatives ratées depuis la même IP", async () => {
    const { email } = await createAccount();
    const ip = uniqueIp();

    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      const r = await login(post("/api/auth/login", { email, password: `faux-mot-de-passe-${i}` }, { ip }));
      expect(r.status).toBe(401);
    }

    const blocked = await login(post("/api/auth/login", { email, password: PASSWORD }, { ip }));
    expect(blocked.status).toBe(429);
    expect((await blocked.json()).error.code).toBe("rate_limited");
    expect(Number(blocked.headers.get("retry-after"))).toBeGreaterThan(0);

    // Une autre IP n'est pas concernée.
    expect((await login(post("/api/auth/login", { email, password: PASSWORD }, { ip: uniqueIp() }))).status).toBe(200);
  });

  it("remet le compteur à zéro après une connexion réussie", async () => {
    const { email } = await createAccount();
    const ip = uniqueIp();

    for (let i = 0; i < MAX_ATTEMPTS - 1; i++) {
      await login(post("/api/auth/login", { email, password: "toujours-faux-celui-la" }, { ip }));
    }
    expect((await login(post("/api/auth/login", { email, password: PASSWORD }, { ip }))).status).toBe(200);
    expect(await prisma.authAttempt.count({ where: { ip, action: "login" } })).toBe(0);

    // Le quota est de nouveau entier.
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      expect((await login(post("/api/auth/login", { email, password: "encore-faux-celui-ci" }, { ip }))).status).toBe(401);
    }
  });

  it("compte séparément les inscriptions et les connexions", async () => {
    const ip = uniqueIp();
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
      await register(post("/api/auth/register", { email: uniqueEmail(), password: "court", pseudo: "X" }, { ip }));
    }
    expect((await register(post("/api/auth/register", { email: uniqueEmail(), password: PASSWORD, pseudo: "X" }, { ip }))).status).toBe(429);
    // La connexion, elle, reste ouverte depuis cette même IP.
    const { email } = await createAccount();
    expect((await login(post("/api/auth/login", { email, password: PASSWORD }, { ip }))).status).toBe(200);
  });
});

describe("reprise de la progression invitée", () => {
  it("recopie la progression locale dans le compte tout juste créé", async () => {
    const rules = await prisma.skill.findMany({ take: 3, select: { slug: true, id: true }, orderBy: { slug: "asc" } });
    const guestProgress = {
      answerCounter: 42,
      placementDone: true,
      rules: [
        { slug: rules[0]!.slug, box: 3, dueAtCounter: 60, seenCount: 8, correctCount: 6 },
        { slug: rules[1]!.slug, box: 5, dueAtCounter: 500, seenCount: 12, correctCount: 12 },
        { slug: "règle-qui-nexiste-pas", box: 2, dueAtCounter: 10, seenCount: 3, correctCount: 1 },
      ],
    };

    const { response } = await createAccount({ guestProgress });
    expect(response.status).toBe(201);
    const body = await response.json();
    expect(body.guestProgress.imported).toBe(2);
    expect(body.guestProgress.unknownSlugs).toEqual(["règle-qui-nexiste-pas"]);
    expect(body.user.answerCounter).toBe(42);
    expect(body.user.placementDone).toBe(true);

    const stored = await prisma.skillProgress.findMany({ where: { userId: body.user.id } });
    expect(stored).toHaveLength(2);
    expect(stored.find((p) => p.skillId === rules[1]!.id)!.box).toBe(5);
  });

  it("borne les valeurs fantaisistes plutôt que de les accepter", async () => {
    const rule = await prisma.skill.findFirstOrThrow({ select: { slug: true } });

    const tooHigh = await register(
      post("/api/auth/register", {
        email: uniqueEmail(),
        password: PASSWORD,
        pseudo: "Tricheur",
        guestProgress: { rules: [{ slug: rule.slug, box: 99, dueAtCounter: 0, seenCount: 1, correctCount: 1 }] },
      })
    );
    expect(tooHigh.status).toBe(400); // palier hors de 0-5 : rejeté par Zod

    const { response } = await createAccount({
      guestProgress: { rules: [{ slug: rule.slug, box: 4, dueAtCounter: 0, seenCount: 2, correctCount: 900 }] },
    });
    const body = await response.json();
    const stored = await prisma.skillProgress.findFirstOrThrow({ where: { userId: body.user.id } });
    expect(stored.correctCount).toBe(2); // ramené au nombre de vues
  });

  it("ne reprend rien quand le client n'envoie rien", async () => {
    const { response } = await createAccount();
    const body = await response.json();
    expect(body.guestProgress).toBeNull();
    expect(await prisma.skillProgress.count({ where: { userId: body.user.id } })).toBe(0);
  });
});

describe("GET /api/account/export", () => {
  it("rend toutes les données de l'utilisateur, sans aucun secret", async () => {
    const rule = await prisma.skill.findFirstOrThrow({ select: { slug: true } });
    const { email, cookie } = await createAccount({
      guestProgress: { answerCounter: 5, rules: [{ slug: rule.slug, box: 2, dueAtCounter: 12, seenCount: 3, correctCount: 2 }] },
    });

    const r = await exportData(get("/api/account/export", { cookie }));
    expect(r.status).toBe(200);
    expect(r.headers.get("content-disposition")).toContain("attachment");

    const raw = await r.text();
    expect(raw).not.toContain("argon2");
    expect(raw).not.toContain("tokenHash");
    expect(raw).not.toContain(cookie!.split("=")[1]);

    const data = JSON.parse(raw);
    expect(data.user.email).toBe(email);
    expect(data.progress).toHaveLength(1);
    expect(data.progress[0].skill).toBe(rule.slug);
    expect(data.sessions).toHaveLength(1);
    expect(data.attempts).toEqual([]);
  });

  it("refuse sans session", async () => {
    expect((await exportData(get("/api/account/export"))).status).toBe(401);
  });
});
