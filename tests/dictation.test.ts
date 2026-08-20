import { describe, expect, it } from "vitest";
import { dictationWords, gradeDictation, normalizeDictationText } from "@/lib/study/dictation";

describe("dictationWords", () => {
  it("unifie les apostrophes et retire les guillemets", () => {
    expect(normalizeDictationText("Il a dit «bonjour» à l’élève")).toBe("Il a dit bonjour à l'élève");
  });

  it("détache la ponctuation des mots", () => {
    expect(dictationWords("Bonjour, madame ; ça va ?")).toEqual(["Bonjour", "madame", "ça", "va"]);
  });
});

describe("gradeDictation", () => {
  const texte = "Les élèves que j'ai rencontrés hier m'ont paru très motivés.";

  it("donne 100 % sur une copie exacte", () => {
    const r = gradeDictation(texte, texte);
    expect(r.score).toBe(100);
    expect(r.words.every((w) => w.status === "ok")).toBe(true);
  });

  it("ignore la casse et la ponctuation finale", () => {
    expect(gradeDictation(texte, texte.toUpperCase().replace(".", "")).score).toBe(100);
  });

  it("ne pardonne pas les accents — c'est le sujet même de l'exercice", () => {
    const r = gradeDictation("Il a mangé", "Il a mange");
    expect(r.score).toBe(67);
    expect(r.words[2]).toEqual({ status: "wrong", expected: "mangé", given: "mange" });
  });

  it("accepte l'apostrophe courbe comme l'apostrophe droite", () => {
    expect(gradeDictation("Il n'a rien dit", "Il n’a rien dit").score).toBe(100);
  });

  it("signale les mots manquants sans décaler le reste", () => {
    const r = gradeDictation("un deux trois", "un deux");
    expect(r.words[2]).toEqual({ status: "missing", expected: "trois" });
    expect(r.score).toBe(67);
  });

  it("relève les mots écrits en trop", () => {
    const r = gradeDictation("un deux", "un deux trois quatre");
    expect(r.extra).toEqual(["trois", "quatre"]);
    expect(r.score).toBe(100);
  });

  it("rend 0 sur une copie vide plutôt que de diviser par zéro", () => {
    expect(gradeDictation("un deux trois", "").score).toBe(0);
    expect(gradeDictation("", "").score).toBe(0);
  });
});

describe("alignement sur les textes longs", () => {
  const texte = "Les élèves que j'ai rencontrés hier m'ont paru très motivés par ce projet.";

  it("ne fait pas tout dérailler quand un mot manque au milieu", () => {
    const sansUnMot = "Les élèves que j'ai rencontrés m'ont paru très motivés par ce projet.";
    const r = gradeDictation(texte, sansUnMot);
    // Douze mots sur treize restent justes : le décalage ne doit rien casser.
    expect(r.score).toBeGreaterThanOrEqual(90);
    expect(r.words.filter((w) => w.status === "missing")).toHaveLength(1);
    expect(r.words.find((w) => w.status === "missing")).toEqual({ status: "missing", expected: "hier" });
  });

  it("repère un mot ajouté sans pénaliser la suite", () => {
    const avecUnMot = "Les élèves que j'ai rencontrés hier soir m'ont paru très motivés par ce projet.";
    const r = gradeDictation(texte, avecUnMot);
    expect(r.score).toBe(100);
    expect(r.extra).toEqual(["soir"]);
    expect(r.words.filter((w) => w.status === "extra")).toHaveLength(1);
  });

  it("appelle faute d'orthographe ce qui est une substitution", () => {
    const r = gradeDictation("Il a mangé une pomme", "Il a manger une pomme");
    expect(r.words[2]).toEqual({ status: "wrong", expected: "mangé", given: "manger" });
    expect(r.score).toBe(80);
  });

  it("tient sur une dictée de plusieurs phrases", () => {
    const long =
      "Le vent soufflait fort ce matin-là. Les volets claquaient contre la façade. " +
      "Personne n'osait sortir avant que la tempête ne se calme enfin.";
    const copie =
      "Le vent soufflait fort ce matin-là. Les volet claquait contre la façade. " +
      "Personne n'osait sortir avant que la tempête se calme enfin.";
    const r = gradeDictation(long, copie);
    expect(r.totalWords).toBe(23);
    expect(r.score).toBeGreaterThanOrEqual(84);
    expect(r.words.filter((w) => w.status === "wrong")).toHaveLength(2);
    expect(r.words.filter((w) => w.status === "missing")).toHaveLength(1);
  });

  it("rend une copie vide sans exploser", () => {
    const r = gradeDictation(texte, "");
    expect(r.score).toBe(0);
    expect(r.words.every((w) => w.status === "missing")).toBe(true);
  });
});
