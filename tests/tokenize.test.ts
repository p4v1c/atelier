import { describe, expect, it } from "vitest";
import {
  normalizeForDedupe,
  parseMarkedSentence,
  ParseError,
  toMarkedSentence,
  tokenize,
  wordCount,
} from "../src/lib/tokenize";

describe("tokenize", () => {
  it("détache la ponctuation fermante du mot", () => {
    expect(tokenize("Il part, puis revient.")).toEqual([
      { before: "", word: "Il", after: "" },
      { before: "", word: "part", after: "," },
      { before: "", word: "puis", after: "" },
      { before: "", word: "revient", after: "." },
    ]);
  });

  it("détache les guillemets ouvrants", () => {
    expect(tokenize("Il dit «bonjour».")[2]).toEqual({ before: "«", word: "bonjour", after: "»." });
  });

  it("garde l'apostrophe interne dans le mot", () => {
    expect(tokenize("L'orthographe compte.")[0]).toEqual({ before: "", word: "L'orthographe", after: "" });
  });

  it("garde les points de suspension collés", () => {
    expect(tokenize("Des poires, etc...")[2]).toEqual({ before: "", word: "etc", after: "..." });
  });

  it("ne vide jamais un token fait de ponctuation seule", () => {
    expect(tokenize("Il dit : bonjour")[2]).toEqual({ before: "", word: ":", after: "" });
  });

  it("produit autant de tokens que d'espaces + 1", () => {
    const t = "Les élèves que j'ai rencontrés hier m'ont paru très motivés.";
    expect(tokenize(t)).toHaveLength(t.split(" ").length);
  });
});

describe("parseMarkedSentence", () => {
  it("retire les crochets et repère l'index du token fautif", () => {
    const r = parseMarkedSentence("Il commence [a] comprendre la règle.");
    expect(r.text).toBe("Il commence a comprendre la règle.");
    expect(r.faultyTokenIndex).toBe(2);
    expect(r.faultyWord).toBe("a");
  });

  it("gère un marqueur en tête de phrase", () => {
    const r = parseMarkedSentence("[Se] livre est passionnant.");
    expect(r.faultyTokenIndex).toBe(0);
    expect(r.faultyWord).toBe("Se");
  });

  it("gère un marqueur collé à une apostrophe", () => {
    const r = parseMarkedSentence("L'[ortographe] française décourage bien des élèves.");
    expect(r.text).toBe("L'ortographe française décourage bien des élèves.");
    expect(r.faultyTokenIndex).toBe(0);
    expect(r.faultyWord).toBe("L'ortographe");
  });

  it("gère un marqueur suivi de ponctuation", () => {
    const r = parseMarkedSentence("Tous les soirs, elles se sont [téléphonées].");
    expect(r.faultyTokenIndex).toBe(6);
    expect(r.faultyWord).toBe("téléphonées");
  });

  it("rend -1 pour une phrase sans marqueur", () => {
    const r = parseMarkedSentence("Il a promis à sa sœur de venir demain.");
    expect(r.faultyTokenIndex).toBe(-1);
    expect(r.faultyWord).toBeNull();
    expect(r.text).toBe("Il a promis à sa sœur de venir demain.");
  });

  it("refuse un marqueur contenant une espace", () => {
    expect(() => parseMarkedSentence("Il viendra [plus tôt] que prévu.")).toThrow(ParseError);
  });

  it("refuse des crochets en double", () => {
    expect(() => parseMarkedSentence("Il [a] mangé [a] midi.")).toThrow(ParseError);
  });

  it("refuse un crochet orphelin", () => {
    expect(() => parseMarkedSentence("Il [a mangé à midi.")).toThrow(ParseError);
  });

  it("refuse un marqueur vide", () => {
    expect(() => parseMarkedSentence("Il [] mangé à midi.")).toThrow(ParseError);
  });
});

describe("aller-retour import → stockage → import", () => {
  const cases = [
    "Il commence [a] comprendre la règle.",
    "[Se] livre est vraiment passionnant.",
    "Tous les soirs, elles se sont [téléphonées].",
    "L'[ortographe] française décourage bien des élèves.",
    "Il a promis à sa sœur de venir demain.",
  ];

  // La propriété qui compte : repasser par le format d'import ne bouge ni le
  // texte stocké ni l'index du token fautif.
  it.each(cases)("stockage stable — %s", (marked) => {
    const first = parseMarkedSentence(marked);
    const second = parseMarkedSentence(toMarkedSentence(first.text, first.faultyTokenIndex));
    expect(second.text).toBe(first.text);
    expect(second.faultyTokenIndex).toBe(first.faultyTokenIndex);
    expect(second.faultyWord).toBe(first.faultyWord);
  });

  it("place les crochets autour du mot, ponctuation exclue", () => {
    const p = parseMarkedSentence("Tous les soirs, elles se sont [téléphonées].");
    expect(toMarkedSentence(p.text, p.faultyTokenIndex)).toBe("Tous les soirs, elles se sont [téléphonées].");
  });

  it("normalise la position du crochet dans un mot élidé", () => {
    const p = parseMarkedSentence("L'[ortographe] française décourage bien des élèves.");
    expect(toMarkedSentence(p.text, p.faultyTokenIndex)).toBe("[L'ortographe] française décourage bien des élèves.");
  });
});

describe("normalizeForDedupe", () => {
  it("ignore la casse et la ponctuation", () => {
    expect(normalizeForDedupe("Élève, où es-tu ?")).toBe(normalizeForDedupe("élève où es tu"));
  });
  it("conserve les accents : « a » et « à » ne sont pas la même phrase", () => {
    expect(normalizeForDedupe("Il a mangé.")).not.toBe(normalizeForDedupe("Il à mangé."));
  });
  it("rapproche deux phrases qui ne diffèrent que par la ponctuation finale", () => {
    expect(normalizeForDedupe("Il a mangé.")).toBe(normalizeForDedupe("Il a mangé !"));
  });
});

describe("wordCount", () => {
  it("compte les mots séparés par des espaces", () => {
    expect(wordCount("Il commence a comprendre la règle.")).toBe(6);
  });
});
