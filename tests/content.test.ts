/**
 * Garde-fou de tout le contenu, lots compris.
 *
 * Le validateur tourne déjà en pré-commit ; ce test le rend inévitable dans la
 * suite de tests, et vérifie en plus les objectifs chiffrés du projet.
 */
import { describe, expect, it } from "vitest";
// Chemin explicite : « ../prisma/seed » désignerait le SCRIPT de seed, qui
// s'exécuterait à l'import et écrirait en base pendant les tests.
import { loadAllBatches } from "../prisma/seed/index";
import { validateModule } from "../src/lib/validate-content";
import { francais } from "../src/modules/francais";
import { contenuDe } from "../src/modules/contenu";
import { parseMarkedSentence, tokenize } from "../src/lib/tokenize";

/** Les lots au format de rédaction : c'est là que vivent les règles écrites. */
const batches = loadAllBatches();
/** Les mêmes, traduits pour le moteur : c'est ce que le validateur juge. */
const report = validateModule(francais, contenuDe(francais));

describe("contenu complet", () => {
  it("ne comporte aucune erreur bloquante", () => {
    expect(report.findings.filter((f) => f.severity === "error")).toEqual([]);
  });

  it("atteint les volumes visés", () => {
    expect(report.skillCount).toBeGreaterThanOrEqual(600);
    expect(report.exerciseCount).toBeGreaterThanOrEqual(4000);
    expect(report.dictationCount).toBeGreaterThanOrEqual(200);
  });

  it("ne laisse aucun avertissement en suspens", () => {
    expect(report.findings).toEqual([]);
  });

  it("donne sept phrases à chaque règle, sans exception", () => {
    for (const batch of batches) {
      for (const rule of batch.rules) {
        expect(rule.sentences.length, rule.slug).toBeGreaterThanOrEqual(7);
      }
    }
  });

  it("donne à chaque règle au moins cinq phrases", () => {
    expect(report.thinSkills).toEqual([]);
  });

  it("donne à chaque règle au moins une phrase sans faute", () => {
    for (const batch of batches) {
      for (const rule of batch.rules) {
        expect(rule.sentences.some((s) => s.fix === null), rule.slug).toBe(true);
      }
    }
  });

  it("place le mot fautif sur un token réel, jamais sur un groupe de mots", () => {
    for (const batch of batches) {
      for (const rule of batch.rules) {
        for (const s of rule.sentences) {
          if (s.fix === null) continue;
          const parsed = parseMarkedSentence(s.marked);
          const token = tokenize(parsed.text)[parsed.faultyTokenIndex];
          expect(token, `${rule.slug} — ${s.marked}`).toBeDefined();
          expect(token!.word).not.toContain(" ");
        }
      }
    }
  });

  it("réserve le statut disputed à la catégorie « Cas discutés »", () => {
    for (const batch of batches) {
      for (const rule of batch.rules) {
        const disputed = rule.status === "disputed";
        expect(disputed, rule.slug).toBe(rule.category === "Cas discutés");
        // Un cas discuté n'a pas de forme fautive : les deux usages se défendent.
        if (disputed) expect(rule.sentences.every((s) => s.fix === null), rule.slug).toBe(true);
      }
    }
  });

  it("couvre les dix catégories prévues", () => {
    expect(Object.keys(report.byCategory).sort()).toEqual(
      [
        "Accords",
        "Cas discutés",
        "Conjugaison",
        "Écrits professionnels",
        "Homophones",
        "Orthographe d'usage",
        "Ponctuation",
        "Registre et style",
        "Typographie",
        "Vocabulaire",
      ].sort()
    );
  });
});
