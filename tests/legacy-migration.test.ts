/**
 * Garde-fou de l'étape A : les 243 règles d'origine doivent traverser la
 * migration sans perte. Ce test lit legacy.json ET le fichier HTML source,
 * puis vérifie que chaque phrase reste jouable après passage en base.
 */
import { describe, expect, it } from "vitest";
import { loadLegacyBatch } from "../prisma/seed/legacy";
import { PATCHES } from "../prisma/seed/patches";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";
import { validateModule } from "../src/lib/validate-content";
import { francais } from "../src/modules/francais";
import { convertirLot } from "../src/modules/francais/contenu";

const batch = loadLegacyBatch();

describe("lot legacy", () => {
  it("compte 243 règles, 621 phrases et 24 dictées", () => {
    expect(batch.rules).toHaveLength(243);
    expect(batch.rules.reduce((n, r) => n + r.sentences.length, 0)).toBe(621);
    expect(batch.dictations).toHaveLength(24);
  });

  it("ne comporte aucune erreur bloquante", () => {
    const report = validateModule(francais, [convertirLot(batch)]);
    const errors = report.findings.filter((f) => f.severity === "error");
    expect(errors).toEqual([]);
  });

  it("applique exactement les patchs déclarés, et rien d'autre", () => {
    const all = batch.rules.flatMap((r) => r.sentences.map((s) => s.marked));
    const fixes = new Map(batch.rules.flatMap((r) => r.sentences.map((s) => [s.marked, s.fix])));
    for (const p of PATCHES) {
      expect(all).toContain(p.to);
      // Un patch peut ne corriger que la correction : la phrase est alors
      // inchangée, et c'est le fix qu'il faut retrouver.
      if (p.to !== p.from) expect(all).not.toContain(p.from);
      expect(fixes.get(p.to)).toBe(p.fix);
    }
  });

  it("garde chaque phrase jouable : le token désigné existe et porte bien la faute", () => {
    for (const rule of batch.rules) {
      for (const s of rule.sentences) {
        const parsed = parseMarkedSentence(s.marked);
        if (parsed.faultyTokenIndex === -1) {
          expect(s.fix, `${rule.slug} — ${s.marked}`).toBeNull();
          continue;
        }
        const token = tokenize(parsed.text)[parsed.faultyTokenIndex];
        expect(token, `${rule.slug} — ${s.marked}`).toBeDefined();
        expect(s.fix, `${rule.slug} — ${s.marked}`).not.toBeNull();
        // La correction ne peut pas valoir le mot marqué : l'exercice serait vide.
        expect(token!.word).not.toBe(s.fix);
      }
    }
  });

  it("donne à chaque règle au moins une phrase sans faute", () => {
    for (const rule of batch.rules) {
      expect(rule.sentences.some((s) => s.fix === null), rule.slug).toBe(true);
    }
  });

  it("associe chaque dictée à des règles qui existent", () => {
    const slugs = new Set(batch.rules.map((r) => r.slug));
    for (const d of batch.dictations ?? []) {
      for (const s of d.ruleSlugs) expect(slugs.has(s), `${s} (dictée « ${d.text.slice(0, 30)}… »)`).toBe(true);
    }
  });
});
