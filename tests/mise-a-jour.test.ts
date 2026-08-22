/**
 * La mise à jour du contenu par GitHub.
 *
 * Ce qui est vérifié ici, ce n'est pas que GitHub réponde — c'est que
 * l'application ne se croie JAMAIS à jour avec un contenu incomplet. Un
 * téléchargement coupé au milieu doit laisser l'ancienne version en place :
 * c'est la seule garantie qui compte quand personne n'est là pour réparer.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";

const ecrits = new Map<string, string>();
let versionPosee: string | null = null;

vi.mock("../src/lib/client/depot-hors-ligne", () => ({
  ecrireFichier: async (chemin: string, contenu: string) => {
    ecrits.set(chemin, contenu);
  },
  poserVersion: async (v: string) => {
    versionPosee = v;
  },
  versionInstallee: async () => versionPosee,
  lireFichier: async () => null,
  viderDepot: async () => undefined,
}));

const { installer, chercher, urlPiece } = await import("../src/lib/client/mise-a-jour");

const MANIFESTE = {
  version: "2026-09-01",
  application: "1.0.0",
  fichiers: [
    { chemin: "hors-ligne/modules.json", nom: "modules.json", octets: 10 },
    { chemin: "hors-ligne/lecons.json", nom: "lecons.json", octets: 20, eclater: "hors-ligne/lecons/" },
  ],
};

beforeEach(() => {
  ecrits.clear();
  versionPosee = null;
});

describe("mise à jour du contenu", () => {
  it("range chaque pièce sous le chemin que l'API demandera", async () => {
    vi.stubGlobal("fetch", async (url: string) =>
      url.endsWith("modules.json")
        ? new Response('{"modules":[]}')
        : new Response(JSON.stringify({ "cg-neuf-hf2-1789": { titre: "1789" } }))
    );

    const fin = await installer(MANIFESTE, () => undefined);

    expect(fin).toEqual({ etat: "installe", version: "2026-09-01" });
    expect(ecrits.get("hors-ligne/modules.json")).toBe('{"modules":[]}');
    // Le fichier groupé s'est éclaté : un cours, une entrée.
    expect(JSON.parse(ecrits.get("hors-ligne/lecons/cg-neuf-hf2-1789.json")!)).toEqual({
      titre: "1789",
    });
    expect(ecrits.has("hors-ligne/lecons.json")).toBe(false);
  });

  it("ne pose pas la version si un téléchargement échoue", async () => {
    vi.stubGlobal("fetch", async (url: string) =>
      url.endsWith("modules.json") ? new Response('{"modules":[]}') : new Response("", { status: 502 })
    );

    const fin = await installer(MANIFESTE, () => undefined);

    expect(fin.etat).toBe("echec");
    // L'ancienne version reste en service : mieux vaut un contenu daté qu'un
    // contenu à trous que l'application croirait complet.
    expect(versionPosee).toBeNull();
  });

  it("ne propose rien quand la version publiée n'est pas plus récente", async () => {
    versionPosee = "2026-09-01";
    vi.stubGlobal("fetch", async () => new Response(JSON.stringify(MANIFESTE)));

    expect(await chercher()).toEqual({ etat: "a-jour", version: "2026-09-01" });
  });

  it("dit clairement qu'aucune mise à jour n'a été publiée", async () => {
    vi.stubGlobal("fetch", async () => new Response("", { status: 404 }));

    const r = await chercher();
    expect(r.etat).toBe("echec");
    expect(r).toMatchObject({ message: expect.stringContaining("publiée") });
  });

  it("vise la dernière publication du dépôt", () => {
    expect(urlPiece("manifeste.json", "p4v1c/atelier")).toBe(
      "https://github.com/p4v1c/atelier/releases/latest/download/manifeste.json"
    );
  });
});
