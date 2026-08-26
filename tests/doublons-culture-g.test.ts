/**
 * Le dédoublonnage de la culture générale.
 *
 * Trois sources alimentent le module — les quiz des leçons du cahier
 * d'origine, ses questions libres, et les notions écrites depuis — et rien
 * n'empêche la même question d'apparaître dans deux d'entre elles. Le filtre
 * qui vit dans `contenu.ts` en retire une trentaine.
 *
 * Ce test tient les DEUX bords. Trop lâche, le filtre laisse la même question
 * tomber deux fois dans une série. Trop serré, il supprime des questions
 * différentes qui se ressemblent — et personne ne s'en aperçoit, puisqu'une
 * question disparue ne fait rien d'anormal à l'écran.
 */
import { describe, expect, it } from "vitest";
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

const mod = MODULES.find((m) => m.id === "culture-g")!;
const questions = contenuDe(mod)
  .flatMap((b) => b.skills)
  .flatMap((s) => s.exercises.map((e) => e.payload as { question: string; choices: string[]; answerIndex: number }));

describe("dédoublonnage de la culture générale", () => {
  it("ne pose jamais deux fois le même énoncé", () => {
    const vus = new Map<string, string>();
    const doubles: string[] = [];
    for (const q of questions) {
      const n = normalizeForDedupe(q.question);
      if (vus.has(n)) doubles.push(q.question);
      vus.set(n, q.question);
    }
    expect(doubles).toEqual([]);
  });

  it("ne pose jamais deux fois la même question reformulée", () => {
    // Un échantillon des reformulations qui existaient : la même question à un
    // mot près, dans deux chapitres différents.
    const disparues = [
      "Quel événement marque le point de départ du calendrier musulman ?",
      "Quelle offensive de 1917 provoque des mutineries dans l'armée française ?",
      "Qu'est-ce que le tie-break ?",
      "Qu'est-ce que le boccia ?",
    ];
    for (const d of disparues) {
      expect(questions.filter((q) => q.question === d), d).toHaveLength(0);
    }
  });

  it("garde les questions qui se ressemblent sans se confondre", () => {
    // Le piège du dédoublonnage : ces paires n'ont presque aucun mot long qui
    // les distingue. Les confondre effacerait du contenu juste, en silence.
    const gardees = [
      "Quand l'ONU est-elle fondée ?",
      "Sous quel nom la NBA a-t-elle été fondée en 1946 ?",
      "Quel élément porte le symbole Fe ?",
      "Quel élément porte le symbole Au ?",
      "Qu'est-ce que le circuit court ?",
      "Qu'est-ce qu'un court-circuit ?",
    ];
    for (const g of gardees) {
      expect(questions.filter((q) => q.question === g), g).toHaveLength(1);
    }
  });
});
