/**
 * Le mélange des propositions.
 *
 * Ce qui est vérifié ici n'est pas « les propositions sont dans le désordre »
 * — c'est que le désordre soit REPRODUCTIBLE, que la bonne réponse suive sa
 * proposition, et qu'aucune proposition ne se perde en route. Un mélange qui
 * décalerait `answerIndex` d'un rang rendrait faux tout le contenu d'un coup,
 * sans qu'aucun écran ne s'en aperçoive.
 */
import { describe, expect, it } from "vitest";
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { aDesPropositions, graineDe, melangerPropositions } from "../src/modules/kinds/melange";

const Q = {
  question: "Qui a peint Le Sacre de Napoléon ?",
  choices: ["Jacques-Louis David", "Eugène Delacroix", "Théodore Géricault", "Jean-Auguste Ingres"],
  answerIndex: 0,
  explanation: "David, peintre officiel de l'Empire.",
};

describe("mélange des propositions", () => {
  it("garde la bonne réponse en face de son rang", () => {
    const m = melangerPropositions(Q, graineDe(Q));
    expect(m.choices[m.answerIndex]).toBe("Jacques-Louis David");
  });

  it("ne perd ni n'invente aucune proposition", () => {
    const m = melangerPropositions(Q, graineDe(Q));
    expect([...m.choices].sort()).toEqual([...Q.choices].sort());
    expect(m.explanation).toBe(Q.explanation);
  });

  it("rend toujours le même ordre pour la même question", () => {
    const a = melangerPropositions(Q, graineDe(Q));
    const b = melangerPropositions(Q, graineDe(Q));
    expect(a.choices).toEqual(b.choices);
    // Idempotent : repasser le résultat dans la moulinette ne le rebrasse pas,
    // puisque la graine vient de l'énoncé et non de l'ordre courant.
    expect(melangerPropositions(a, graineDe(a)).choices).toEqual(a.choices);
  });

  it("ne touche pas à la charge utile d'origine", () => {
    melangerPropositions(Q, graineDe(Q));
    expect(Q.answerIndex).toBe(0);
    expect(Q.choices[0]).toBe("Jacques-Louis David");
  });

  it("respecte une suite de nombres déjà rangée", () => {
    const dates = { question: "Quand ?", choices: ["1789", "1792", "1804", "1815"], answerIndex: 2 };
    expect(melangerPropositions(dates, graineDe(dates))).toBe(dates);
  });

  it("laisse le contenu à hauteur du hasard, et non de la première case", () => {
    // Le contrôle qui compte : avant ce mélange, 83,6 % des questions de
    // culture générale avaient leur bonne réponse au rang 0, et répondre
    // « la première » donnait 55 % de réussite à l'écran.
    for (const mod of MODULES) {
      let total = 0;
      let rang0 = 0;
      for (const lot of contenuDe(mod))
        for (const skill of lot.skills)
          for (const ex of skill.exercises) {
            if (!aDesPropositions(ex.payload)) continue;
            total++;
            if (ex.payload.answerIndex === 0) rang0++;
          }
      if (total < 100) continue;
      const part = rang0 / total;
      expect(part, `${mod.id} : ${(part * 100).toFixed(1)} % au rang 0`).toBeLessThan(0.32);
    }
  });
});
