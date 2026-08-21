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
    expect(Object.keys(question).sort()).toEqual(["amorce", "consigne", "couche", "region"]);
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
  it("ignore ce qui ne fait pas la question : la note de correction", () => {
    const autre = { ...portugal, explication: "Une autre note, la même question." };
    expect(carteMonde.fingerprint(autre)).toBe(carteMonde.fingerprint(portugal));
  });

  it("sépare le même pays sur deux cartes différentes", () => {
    expect(carteMonde.fingerprint({ ...portugal, region: "monde" })).not.toBe(
      carteMonde.fingerprint(portugal)
    );
  });

  /* Le cœur du contrôle : deux questions peuvent viser le même pays sans être
     un doublon. Un drapeau et une capitale partagent une réponse, pas une
     question — l'empreinte doit les séparer, sinon la matière ne pourrait
     parler d'un pays qu'une seule fois. */
  it("sépare deux questions différentes qui visent le même pays", () => {
    const drapeau = { ...portugal, amorce: "🇵🇹", consigne: "Quel pays porte ce drapeau ?" };
    const capitale = { ...portugal, consigne: "Lisbonne est la capitale de quel pays ?" };
    expect(carteMonde.fingerprint(drapeau)).not.toBe(carteMonde.fingerprint(capitale));
  });

  it("réunit deux fois la même question sur le même fond", () => {
    const a = { ...portugal, amorce: "🇵🇹", consigne: "Quel pays porte ce drapeau ?" };
    const b = { ...a, consigne: "À qui est ce drapeau ?", explication: "Autre note." };
    expect(carteMonde.fingerprint(a)).toBe(carteMonde.fingerprint(b));
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

  /**
   * Le garde-fou de l'enroulement.
   *
   * Sur une sphère, un anneau fermé délimite deux régions : la zone et tout le
   * reste du globe. Seul le sens de parcours dit laquelle, et d3-geo attend le
   * sens horaire — l'inverse de la norme GeoJSON. À l'envers, rien ne plante :
   * la zone couvre la carte entière, les mers s'empilent, et chaque clic tombe
   * sur celle du dessus. C'est arrivé, et seul l'œil l'a vu.
   */
  it("n'a aucune zone marine qui avale la carte", () => {
    for (const [cle, fond] of Object.entries(FONDS)) {
      for (const m of fond.mers) {
        const points = [...m.d.matchAll(/(-?\d+),(-?\d+)/g)].map((c) => [+c[1]!, +c[2]!]);
        const large = Math.max(...points.map((c) => c[0]!)) - Math.min(...points.map((c) => c[0]!));
        const haut = Math.max(...points.map((c) => c[1]!)) - Math.min(...points.map((c) => c[1]!));
        const part = (large * haut) / (fond.largeur * fond.hauteur);
        expect(part, `${cle}/${m.nom} : ${Math.round(part * 100)} % du cadre`).toBeLessThan(0.9);
      }
    }
  });

  it("n'a ni tracé vide ni identifiant en double, terres comme mers", () => {
    for (const [cle, fond] of Object.entries(FONDS)) {
      expect(fond.pays.length, cle).toBeGreaterThan(20);
      expect(fond.mers.length, cle).toBeGreaterThan(3);
      for (const t of [...fond.pays, ...fond.mers]) {
        expect(t.d.startsWith("M"), `${cle}/${t.nom}`).toBe(true);
        expect(t.nom.trim().length, `${cle}/${t.id}`).toBeGreaterThan(0);
      }
      /* Les deux couches partagent l'espace des identifiants : le clic ne
         renvoie qu'une chaîne, et deux tracés homonymes seraient impossibles
         à départager à la correction. */
      const ids = [...fond.pays, ...fond.mers].map((t) => t.id);
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

  const traces = ({ region, couche }: CarteMondePayload) =>
    couche === "mer" ? FONDS[region]?.mers : FONDS[region]?.pays;

  it("joue une bonne part de la matière sur la carte", () => {
    expect(cartes.length).toBeGreaterThanOrEqual(150);
  });

  /* Le nom du pays s'affiche en amorce : c'est le principe du jeu. Il ne doit
     donc surtout pas se retrouver AUSSI dans la consigne, sans quoi la carte
     ne servirait plus qu'à confirmer ce qui est déjà écrit deux fois. */
  it("ne redit jamais dans la consigne ce que l'amorce montre déjà", () => {
    for (const { slug, payload } of cartes) {
      if (!payload.amorce) continue;
      expect(
        payload.consigne.toLowerCase().includes(payload.cibleNom.toLowerCase()),
        `${slug} : « ${payload.consigne} »`
      ).toBe(false);
    }
  });

  it("vise une cible qui existe vraiment sur la couche employée", () => {
    for (const { slug, payload } of cartes) {
      expect(FONDS[payload.region], `${slug} : région ${payload.region}`).toBeDefined();
      const cible = traces(payload)?.find((t) => t.id === payload.cible);
      const ou = `${payload.region}/${payload.couche ?? "pays"}`;
      expect(cible, `${slug} : ${payload.cibleNom} (${payload.cible}) absent de ${ou}`).toBeDefined();
    }
  });

  it("annonce le même nom que celui inscrit sur la carte", () => {
    for (const { slug, payload } of cartes) {
      const cible = traces(payload)!.find((t) => t.id === payload.cible);
      expect(cible!.nom, `${slug} : ${payload.cible}`).toBe(payload.cibleNom);
    }
  });

  /* Une question de mer déclarée sur la couche des pays viserait un
     identifiant que le composant n'écoute pas : la carte resterait sourde au
     clic, sans qu'aucune erreur ne soit levée. */
  it("range chaque question dans la couche où sa cible se trouve", () => {
    for (const { slug, payload } of cartes) {
      const fond = FONDS[payload.region]!;
      const dansMers = fond.mers.some((t) => t.id === payload.cible);
      const dansPays = fond.pays.some((t) => t.id === payload.cible);
      expect(dansMers !== dansPays, `${slug} : ${payload.cible} dans les deux couches`).toBe(true);
      expect(payload.couche, `${slug} : ${payload.cible}`).toBe(dansMers ? "mer" : "pays");
    }
  });
});
