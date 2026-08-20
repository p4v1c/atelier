/**
 * Garde-fous du moteur modulaire.
 *
 * Ce que ces tests protègent, c'est la promesse : ajouter une matière ne doit
 * demander qu'un fichier et une ligne de registre. Chaque vérification ici
 * correspond à une façon de casser cette promesse sans s'en apercevoir.
 */
import { describe, expect, it } from "vitest";
import { KINDS, MODULES, kind, kindOf, module as moduleParId } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { PRESENTATIONS } from "../src/components/modules";
import { qcm } from "../src/modules/kinds/qcm";
import { prononciation } from "../src/modules/kinds/prononciation";
import { flashcard, memeReponse, traduction } from "../src/modules/kinds/flashcard";
import { spotError } from "../src/modules/kinds/spot-error";
import { NIVEAUX } from "../src/modules/langues/commun";

describe("le registre des modules", () => {
  it("n'a pas deux modules du même identifiant", () => {
    const ids = MODULES.map((m) => m.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("donne à chaque module un vocabulaire complet", () => {
    for (const m of MODULES) {
      for (const champ of ["skill", "skillPluriel", "exercise", "exercisePluriel", "catalogue"] as const) {
        expect(m.vocabulaire[champ], `${m.id}.${champ}`).toBeTruthy();
      }
    }
  });

  it("n'a pas deux catégories du même nom dans un module", () => {
    for (const m of MODULES) {
      const noms = m.categories.map((c) => c.name);
      expect(new Set(noms).size, m.id).toBe(noms.length);
      const slugs = m.categories.map((c) => c.slug);
      expect(new Set(slugs).size, m.id).toBe(slugs.length);
    }
  });

  it("déclare pour chaque module au moins un type d'exercice, tous connus", () => {
    for (const m of MODULES) {
      expect(m.kinds.length, m.id).toBeGreaterThan(0);
      for (const k of m.kinds) expect(kind(k.id)).toBe(k);
    }
  });

  it("refuse un module ou un type inconnu, plutôt que de rendre undefined", () => {
    expect(() => moduleParId("matiere-qui-nexiste-pas")).toThrow();
    expect(() => kind("type-qui-nexiste-pas")).toThrow();
    expect(() => kindOf(MODULES[0]!, "type-qui-nexiste-pas")).toThrow();
  });

  it("emploie dans le contenu uniquement des types déclarés par le module", () => {
    for (const m of MODULES) {
      for (const lot of contenuDe(m)) {
        for (const s of lot.skills) {
          for (const e of s.exercises) {
            expect(() => kindOf(m, e.kind), `${m.id}/${s.slug}`).not.toThrow();
          }
        }
      }
    }
  });

  it("ne fait référence qu'à des catégories déclarées", () => {
    for (const m of MODULES) {
      const connues = new Set(m.categories.map((c) => c.name));
      for (const lot of contenuDe(m)) {
        for (const s of lot.skills) expect(connues.has(s.category), `${m.id}/${s.slug}`).toBe(true);
      }
    }
  });

  it("ne présente que des modules qui existent", () => {
    const ids = new Set(MODULES.map((m) => m.id));
    for (const id of Object.keys(PRESENTATIONS)) expect(ids.has(id), id).toBe(true);
  });
});

describe("les types d'exercices", () => {
  it("ne laissent jamais la réponse dans la question", () => {
    // La règle d'or, testée type par type. Deux exceptions documentées : la
    // carte mémoire, où l'on se juge soi-même après avoir vu le verso, et
    // l'écoute, dont le texte doit atteindre le navigateur pour être prononcé.
    const question = spotError.toQuestion({ text: "Il commence a comprendre.", faultyTokenIndex: 2, correction: "à" });
    expect(JSON.stringify(question)).not.toContain("faultyTokenIndex");
    expect(JSON.stringify(question)).not.toContain("correction");

    const q = qcm.toQuestion({ question: "Capitale de la Suisse ?", choices: ["Berne", "Zurich"], answerIndex: 0 });
    expect(JSON.stringify(q)).not.toContain("answerIndex");
  });

  it("produisent des empreintes distinctes pour un même contenu", () => {
    const carte = { recto: "the weather", verso: "le temps", langue: "en-GB" };
    const empreintes = [flashcard, traduction, prononciation].map((k) => k.fingerprint(carte));
    expect(new Set(empreintes).size).toBe(3);
  });

  it("corrigent la traduction avec tolérance, mais pas au point d'accepter n'importe quoi", () => {
    const p = { recto: "Cordialement,", verso: "Kind regards,", variantes: ["Best regards,"], langue: "en-GB" };
    expect(traduction.grade(p, "kind regards").correct).toBe(true);
    expect(traduction.grade(p, "Best regards").correct).toBe(true);
    expect(traduction.grade(p, "Bien à vous").correct).toBe(false);
    expect(traduction.grade(p, "").correct).toBe(false);
  });

  it("ignorent casse, accents et articles dans une réponse écrite", () => {
    expect(memeReponse("la maison", "maison")).toBe(true);
    expect(memeReponse("élève", "eleve")).toBe(true);
    expect(memeReponse("to eat", "eat")).toBe(true);
    expect(memeReponse("chien", "chat")).toBe(false);
    expect(memeReponse("", "")).toBe(false);
  });

  it("refusent un QCM dont deux propositions ne diffèrent que par la casse… non", () => {
    // Justement : la casse DOIT distinguer, sinon aucune question d'orthographe
    // ne serait possible.
    const majuscules = {
      question: "Quelle phrase emploie correctement les majuscules ?",
      choices: ["Un Belge néerlandophone", "Un belge néerlandophone"],
      answerIndex: 0,
    };
    expect(qcm.validate?.(majuscules)).toEqual([]);

    const vraiDoublon = { question: "Deux fois pareil ?", choices: ["oui", "oui"], answerIndex: 0 };
    expect(qcm.validate?.(vraiDoublon)).toContain("deux propositions identiques");
  });

  it("refusent une prononciation sur un mot isolé", () => {
    const unMot = { recto: "hello", verso: "bonjour", langue: "en-GB" };
    expect(prononciation.validate?.(unMot)?.join(" ")).toMatch(/un seul mot/);
    const phrase = { recto: "How are you today?", verso: "Comment vas-tu ?", langue: "en-GB" };
    expect(prononciation.validate?.(phrase)).toEqual([]);
  });

  it("exposent tous les types employés par au moins un module", () => {
    for (const id of ["spot-error", "qcm", "flashcard", "traduction", "ecoute", "prononciation"]) {
      expect(KINDS.has(id), id).toBe(true);
    }
  });
});

describe("les niveaux du cadre européen", () => {
  it("n'apparaissent que dans les langues, et toujours dans le cadre", () => {
    const cadre = new Set<string>(NIVEAUX);
    for (const m of MODULES) {
      for (const lot of contenuDe(m)) {
        for (const s of lot.skills) {
          if (s.level === undefined) continue;
          expect(cadre.has(s.level), `${m.id}/${s.slug} : ${s.level}`).toBe(true);
        }
      }
    }
  });

  it("couvrent le A1 dans chaque langue : un débutant doit avoir de quoi commencer", () => {
    for (const m of MODULES.filter((x) => x.kinds.some((k) => k.id === "flashcard"))) {
      const a1 = contenuDe(m)
        .flatMap((l) => l.skills)
        .filter((s) => s.level === "A1");
      expect(a1.length, `${m.id} n'a que ${a1.length} série(s) A1`).toBeGreaterThanOrEqual(5);
    }
  });

  it("donnent un accent à chaque dictée de langue", () => {
    for (const m of MODULES.filter((x) => x.kinds.some((k) => k.id === "ecoute"))) {
      const dictees = contenuDe(m).flatMap((l) => l.dictations ?? []);
      expect(dictees.length, m.id).toBeGreaterThan(0);
      for (const d of dictees) {
        expect(d.voice, `${m.id} : « ${d.text.slice(0, 30)} »`).toBeTruthy();
        expect(d.level, `${m.id} : « ${d.text.slice(0, 30)} »`).toBeTruthy();
      }
      // Une seule voix pour toutes les dictées reviendrait à n'entraîner
      // l'oreille qu'à un seul accent.
      expect(new Set(dictees.map((d) => d.voice)).size, m.id).toBeGreaterThan(1);
    }
  });
});
