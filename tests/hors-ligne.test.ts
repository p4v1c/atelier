/**
 * L'aiguillage hors ligne.
 *
 * Une seule règle à tenir : les trois routes publiques ont un fichier, et TOUT
 * le reste n'en a pas. Si une route authentifiée trouvait un fichier, elle
 * servirait des données périmées sans le dire ; si une route publique n'en
 * trouvait pas, l'application partirait chercher un serveur absent.
 */
import { describe, expect, it } from "vitest";
import { fichierStatique } from "../src/lib/hors-ligne";

describe("fichiers hors ligne", () => {
  it("détourne les trois routes publiques", () => {
    expect(fichierStatique("/api/public/modules")).toBe("hors-ligne/modules.json");
    expect(fichierStatique("/api/public/content?module=culture-g")).toBe(
      "hors-ligne/contenu/culture-g.json"
    );
    expect(fichierStatique("/api/public/lessons/cg-neuf-hf2-1789")).toBe(
      "hors-ligne/lecons/cg-neuf-hf2-1789.json"
    );
  });

  it("ne détourne rien d'autre", () => {
    for (const route of [
      "/api/auth/me",
      "/api/auth/login",
      "/api/session/next?size=10",
      "/api/progress",
      "/api/catalogue",
      "/api/lessons/cg-neuf-hf2-1789",
      "/api/tts/exercice/abc",
    ]) {
      expect(fichierStatique(route), route).toBeNull();
    }
  });

  it("refuse un identifiant de module qui n'en est pas un", () => {
    expect(fichierStatique("/api/public/content?module=../../etc/passwd")).toBeNull();
  });
});
