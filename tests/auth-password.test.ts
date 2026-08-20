/**
 * Hachage des mots de passe. Ce qui casse en silence ici, ce sont les
 * propriétés qu'on ne voit pas à l'œil : le sel, le refus des empreintes
 * corrompues, le temps constant sur adresse inconnue.
 */
import { describe, expect, it } from "vitest";
import { hashPassword, verifyPassword, burnVerification, MIN_PASSWORD_LENGTH } from "@/lib/auth/password";
import { isCommonPassword } from "@/lib/auth/common-passwords";

describe("hashPassword", () => {
  // Verrouille la constante ARGON2ID : le const enum de @node-rs/argon2 étant
  // inutilisable sous isolatedModules, sa valeur est recopiée à la main.
  it("produit bien une empreinte argon2id, et pas argon2i ou argon2d", async () => {
    const h = await hashPassword("un mot de passe correct");
    expect(h.startsWith("$argon2id$")).toBe(true);
  });

  it("ne contient jamais le mot de passe en clair", async () => {
    const h = await hashPassword("cheval-batterie-agrafe");
    expect(h).not.toContain("cheval");
  });

  it("sale : deux fois le même mot de passe donne deux empreintes différentes", async () => {
    const [a, b] = await Promise.all([hashPassword("identique-identique"), hashPassword("identique-identique")]);
    expect(a).not.toBe(b);
    expect(await verifyPassword(a, "identique-identique")).toBe(true);
    expect(await verifyPassword(b, "identique-identique")).toBe(true);
  });
});

describe("verifyPassword", () => {
  it("accepte le bon mot de passe", async () => {
    const h = await hashPassword("le bon mot de passe");
    expect(await verifyPassword(h, "le bon mot de passe")).toBe(true);
  });

  it("refuse un mot de passe faux, même d'un caractère", async () => {
    const h = await hashPassword("le bon mot de passe");
    expect(await verifyPassword(h, "le bon mot de passE")).toBe(false);
  });

  it("refuse sans lever d'exception sur une empreinte illisible", async () => {
    expect(await verifyPassword("pas-une-empreinte", "peu importe")).toBe(false);
    expect(await verifyPassword("", "peu importe")).toBe(false);
  });

  it("le leurre anti-chronométrage ne valide jamais rien", async () => {
    await expect(burnVerification("n'importe quoi")).resolves.toBeUndefined();
  });
});

describe("liste des mots de passe éventés", () => {
  it("refuse un classique d'au moins 10 caractères", () => {
    expect(isCommonPassword("motdepasse123")).toBe(true);
    expect(isCommonPassword("MotDePasse123")).toBe(true); // insensible à la casse
    expect(isCommonPassword("azertyuiop")).toBe(true);
  });

  it("laisse passer un mot de passe quelconque", () => {
    expect(isCommonPassword("brouette-lilas-42-tambour")).toBe(false);
  });

  it("ne contient que des entrées atteignables, c'est-à-dire assez longues", async () => {
    const { commonPasswords } = await import("@/lib/auth/common-passwords");
    for (const p of commonPasswords()) expect(p.length).toBeGreaterThanOrEqual(MIN_PASSWORD_LENGTH);
  });
});
