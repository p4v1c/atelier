import { describe, expect, it } from "vitest";
import { GEO_SKILLS } from "../prisma/seed/geographie";
import { drapeauDe, EUROPE, AFRIQUE, ASIE, AMERIQUES, MONDE_SEUL, type Fiche } from "../prisma/seed/geographie/pays";
import type { QcmPayload } from "@/modules/kinds/qcm";

/**
 * Le contenu de géographie n'est pas écrit exercice par exercice : il se déduit
 * d'une table de pays. C'est ce qui le rend cohérent — et ce qui rend une
 * erreur de fabrique invisible à la relecture, puisqu'elle se répète cinq cent
 * fois sans que rien ne dépasse. Ces contrôles portent donc sur la fabrique.
 */

const FICHES: Fiche[] = [...EUROPE, ...AFRIQUE, ...ASIE, ...AMERIQUES, ...MONDE_SEUL];
const quiz = GEO_SKILLS.flatMap((s) =>
  s.exercises.filter((e) => e.kind === "qcm").map((e) => ({ slug: s.slug, p: e.payload as QcmPayload }))
);

describe("la table des pays", () => {
  it("n'a ni fiche vide ni code à deux lettres douteux", () => {
    for (const f of FICHES) {
      expect(/^\d+$/.test(f.id), f.nom).toBe(true);
      expect(/^[A-Z]{2}$/.test(f.a2), `${f.nom} : ${f.a2}`).toBe(true);
      expect(f.capitale.trim().length, f.nom).toBeGreaterThan(1);
      expect(f.ou.trim().length, f.nom).toBeGreaterThan(15);
    }
  });

  /* Deux fiches du même identifiant se contrediraient sans bruit : le quiz
     dirait une capitale, la carte en annoncerait une autre. */
  it("ne décrit chaque pays qu'une fois par continent", () => {
    for (const lot of [EUROPE, AFRIQUE, ASIE, AMERIQUES, MONDE_SEUL]) {
      const ids = lot.map((f) => f.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it("déduit le drapeau du code à deux lettres", () => {
    expect(drapeauDe("PT")).toBe("🇵🇹");
    expect(drapeauDe("JP")).toBe("🇯🇵");
    /* Deux points de code, et c'est ce qui permet à la vue de reconnaître une
       proposition « symbole » et de l'afficher en grand. */
    expect([...drapeauDe("FR")].length).toBe(2);
  });
});

describe("les quiz", () => {
  it("posent tous quatre propositions, toutes distinctes", () => {
    for (const { slug, p } of quiz) {
      expect(p.choices.length, `${slug} : ${p.question}`).toBe(4);
      expect(new Set(p.choices).size, `${slug} : ${p.question}`).toBe(4);
    }
  });

  it("désignent une bonne réponse qui existe", () => {
    for (const { slug, p } of quiz) {
      expect(p.answerIndex, `${slug} : ${p.question}`).toBeGreaterThanOrEqual(0);
      expect(p.answerIndex, `${slug} : ${p.question}`).toBeLessThan(p.choices.length);
      expect(p.choices[p.answerIndex]!.trim().length).toBeGreaterThan(0);
    }
  });

  it("ne nomment jamais la réponse dans la question", () => {
    for (const { slug, p } of quiz) {
      const bonne = p.choices[p.answerIndex]!;
      if ([...bonne].length <= 2) continue; // un drapeau ne peut pas être écrit dans la question
      expect(p.question.includes(bonne), `${slug} : ${p.question}`).toBe(false);
    }
  });

  /* Une bonne réponse toujours au même rang se devine sans rien savoir. Le
     tirage est stable — dérivé du nom du pays — mais il doit rester réparti. */
  it("répartissent la bonne réponse sur les quatre rangs", () => {
    const rangs = [0, 0, 0, 0];
    for (const { p } of quiz) rangs[p.answerIndex]!++;
    for (const [rang, compte] of rangs.entries()) {
      expect(compte / quiz.length, `rang ${rang} : ${compte}/${quiz.length}`).toBeGreaterThan(0.15);
    }
  });

  it("tirent leurs leurres dans le même continent que la cible", () => {
    const parLot: Record<string, Fiche[]> = { europe: [...EUROPE], afrique: [...AFRIQUE], asie: [...ASIE], ameriques: [...AMERIQUES] };
    for (const { slug, p } of quiz) {
      const cle = slug.split("-").pop()!;
      const lot = parLot[cle];
      if (!lot) continue;
      const connus = new Set(
        slug.startsWith("geo-drapeaux") ? lot.map((f) => drapeauDe(f.a2)) : lot.map((f) => f.capitale)
      );
      for (const c of p.choices) expect(connus.has(c), `${slug} : « ${c} » hors du lot`).toBe(true);
    }
  });

  it("donnent une correction à chaque question", () => {
    for (const { slug, p } of quiz) {
      expect(p.explanation?.trim().length ?? 0, `${slug} : ${p.question}`).toBeGreaterThan(20);
    }
  });
});

describe("la grille des séries", () => {
  it("offre les quatre jeux sur chaque continent, et la carte sur le monde", () => {
    const slugs = new Set(GEO_SKILLS.map((s) => s.slug));
    for (const cle of ["europe", "afrique", "asie", "ameriques"]) {
      for (const jeu of ["drapeaux", "capitales", "situer", "mers"]) {
        expect(slugs.has(`geo-${jeu}-${cle}`), `geo-${jeu}-${cle}`).toBe(true);
      }
    }
    expect(slugs.has("geo-situer-monde")).toBe(true);
  });

  /* Une série mélangée serait illisible : « Drapeaux — Europe » doit être un
     quiz de bout en bout, « Situer » une carte de bout en bout. */
  it("ne mélange jamais deux types d'exercices dans une série", () => {
    for (const s of GEO_SKILLS) {
      expect(new Set(s.exercises.map((e) => e.kind)).size, s.slug).toBe(1);
    }
  });
});
