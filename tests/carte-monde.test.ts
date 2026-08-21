import { describe, expect, it } from "vitest";
import { carteMonde, type CarteMondePayload } from "@/modules/kinds/carte-monde";
import { CLES_REGION, regionCarte } from "@/lib/cartes/regions";
import { GEO_SKILLS } from "../prisma/seed/geographie";
import { MONDE } from "@/lib/cartes/monde";
import { EUROPE } from "@/lib/cartes/europe";
import { AFRIQUE } from "@/lib/cartes/afrique";
import { ASIE } from "@/lib/cartes/asie";
import { AMERIQUES } from "@/lib/cartes/ameriques";
import type { FondDeCarte } from "@/lib/cartes/types";

/**
 * Deux choses cassent en silence dans un exercice de carte.
 *
 * La première : la réponse qui part au client. Rien ne planterait — l'écran
 * s'afficherait normalement, et l'exercice ne vaudrait plus rien.
 *
 * La seconde : une cible absente du fond. Régénérer les cartes avec une liste
 * de pays différente suffit à faire disparaître un pays, et l'exercice devient
 * insoluble sans qu'aucun contrôle ne s'en aperçoive — le validateur de
 * contenu ne peut pas voir les tracés, puisque le type ne les importe pas.
 */

const FONDS: Record<string, FondDeCarte> = {
  monde: MONDE,
  europe: EUROPE,
  afrique: AFRIQUE,
  asie: ASIE,
  ameriques: AMERIQUES,
};

const portugal: CarteMondePayload = {
  region: "europe",
  cible: "620",
  cibleNom: "Portugal",
  consigne: "Clique sur le Portugal.",
  explication: "À l'ouest de l'Espagne.",
};

describe("la question posée", () => {
  it("ne laisse partir ni la cible ni son nom", () => {
    const question = carteMonde.toQuestion(portugal) as Record<string, unknown>;
    expect(Object.keys(question).sort()).toEqual(["amorce", "consigne", "region"]);
    const brut = JSON.stringify(question);
    expect(brut).not.toContain("620");
    expect(brut).not.toContain("cible");
  });

  it("transmet l'amorce quand il y en a une, null sinon", () => {
    expect((carteMonde.toQuestion(portugal) as { amorce: unknown }).amorce).toBeNull();
    const avec = carteMonde.toQuestion({ ...portugal, amorce: "🇵🇹" }) as { amorce: unknown };
    expect(avec.amorce).toBe("🇵🇹");
  });
});

describe("la correction", () => {
  it("accepte l'identifiant attendu", () => {
    expect(carteMonde.grade(portugal, "620").correct).toBe(true);
  });

  it("refuse un voisin", () => {
    expect(carteMonde.grade(portugal, "724").correct).toBe(false);
  });

  it("rend le nom de la cible, pour que la correction puisse le dire", () => {
    const reveal = carteMonde.grade(portugal, "724").reveal as { cibleNom: string };
    expect(reveal.cibleNom).toBe("Portugal");
  });

  it("ne plante pas sur une réponse absente ou mal formée", () => {
    expect(carteMonde.grade(portugal, undefined as never).correct).toBe(false);
    expect(carteMonde.grade(portugal, 620 as never).correct).toBe(false);
  });
});

describe("les contrôles de contenu", () => {
  const valider = (p: Partial<CarteMondePayload>) =>
    carteMonde.validate!({ ...portugal, ...p } as CarteMondePayload);

  it("laisse passer un exercice sain", () => {
    expect(valider({})).toEqual([]);
  });

  it("refuse une région qui n'existe pas", () => {
    expect(valider({ region: "atlantide" })[0]).toContain("région inconnue");
  });

  it("refuse une consigne qui nomme la cible quand une amorce la fait deviner", () => {
    const erreurs = valider({ amorce: "🇵🇹", consigne: "Clique sur le Portugal." });
    expect(erreurs.some((e) => e.includes("nomme"))).toBe(true);
  });

  it("laisse passer une amorce dont la consigne ne nomme rien", () => {
    expect(valider({ amorce: "🇵🇹", consigne: "Quel pays porte ce drapeau ?" })).toEqual([]);
  });
});

describe("l'empreinte", () => {
  it("réunit deux façons de demander le même pays sur la même carte", () => {
    const autre = { ...portugal, consigne: "Où est le Portugal ?", explication: "Autre note." };
    expect(carteMonde.fingerprint(autre)).toBe(carteMonde.fingerprint(portugal));
  });

  it("sépare le même pays sur deux cartes différentes", () => {
    expect(carteMonde.fingerprint({ ...portugal, region: "monde" })).not.toBe(
      carteMonde.fingerprint(portugal)
    );
  });
});

describe("les fonds de carte", () => {
  it("déclare exactement les régions qui ont un fond", () => {
    expect([...CLES_REGION].sort()).toEqual(Object.keys(FONDS).sort());
  });

  it("donne à chaque fond les dimensions annoncées dans le catalogue", () => {
    for (const [cle, fond] of Object.entries(FONDS)) {
      const region = regionCarte(cle);
      expect(region).not.toBeNull();
      expect([region!.largeur, region!.hauteur]).toEqual([fond.largeur, fond.hauteur]);
    }
  });

  it("n'a ni pays sans tracé ni identifiant en double", () => {
    for (const [cle, fond] of Object.entries(FONDS)) {
      expect(fond.pays.length, cle).toBeGreaterThan(20);
      for (const p of fond.pays) {
        expect(p.d.startsWith("M"), `${cle}/${p.nom}`).toBe(true);
        expect(p.nom.trim().length, `${cle}/${p.id}`).toBeGreaterThan(0);
      }
      const ids = fond.pays.map((p) => p.id);
      expect(new Set(ids).size, cle).toBe(ids.length);
    }
  });
});

describe("le contenu de géographie", () => {
  const cartes = GEO_SKILLS.flatMap((s) =>
    s.exercises
      .filter((e) => e.kind === carteMonde.id)
      .map((e) => ({ slug: s.slug, payload: e.payload as CarteMondePayload }))
  );

  it("pose au moins une trentaine de questions de carte", () => {
    expect(cartes.length).toBeGreaterThanOrEqual(30);
  });

  it("vise un pays qui existe vraiment sur le fond employé", () => {
    for (const { slug, payload } of cartes) {
      const fond = FONDS[payload.region];
      expect(fond, `${slug} : région ${payload.region}`).toBeDefined();
      const pays = fond!.pays.find((p) => p.id === payload.cible);
      expect(pays, `${slug} : ${payload.cibleNom} (${payload.cible}) absent de ${payload.region}`).toBeDefined();
    }
  });

  it("annonce le même nom que celui inscrit sur la carte", () => {
    for (const { slug, payload } of cartes) {
      const pays = FONDS[payload.region]!.pays.find((p) => p.id === payload.cible);
      expect(pays!.nom, `${slug} : ${payload.cible}`).toBe(payload.cibleNom);
    }
  });
});
