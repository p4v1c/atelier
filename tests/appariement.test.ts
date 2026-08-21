import { describe, expect, it } from "vitest";
import { appariement, ordreDroite, type AppariementPayload } from "@/modules/kinds/appariement";

/**
 * L'appariement repose entièrement sur une permutation dérivée du contenu.
 * C'est le genre de mécanique qui casse en silence : si le mélange redevenait
 * l'identité, la réponse s'afficherait à l'écran sans qu'aucune page ne
 * plante ; s'il cessait d'être déterministe, la correction jugerait une autre
 * question que celle qui a été posée.
 */

const pays: AppariementPayload = {
  consigne: "Relie chaque pays à sa capitale.",
  paires: [
    { gauche: "France", droite: "Paris" },
    { gauche: "Italie", droite: "Rome" },
    { gauche: "Espagne", droite: "Madrid" },
    { gauche: "Portugal", droite: "Lisbonne" },
    { gauche: "Grèce", droite: "Athènes" },
  ],
  explication: "Cinq capitales du sud de l'Europe.",
};

/** La réponse juste, reconstruite depuis la seule question — comme le ferait
 *  quelqu'un qui sait, et non depuis la charge utile. */
function bonneReponse(p: AppariementPayload): number[] {
  const question = appariement.toQuestion(p) as { gauche: string[]; droite: string[] };
  return p.paires.map((paire) => question.droite.indexOf(paire.droite));
}

describe("le mélange de la colonne de droite", () => {
  it("est déterministe : deux appels donnent le même ordre", () => {
    expect(ordreDroite(pays.paires)).toEqual(ordreDroite(pays.paires));
  });

  it("n'est jamais l'identité, sans quoi la réponse serait à l'écran", () => {
    const contenus: AppariementPayload["paires"][] = [
      pays.paires,
      [
        { gauche: "a", droite: "1" },
        { gauche: "b", droite: "2" },
        { gauche: "c", droite: "3" },
      ],
      [
        { gauche: "Nil", droite: "Méditerranée" },
        { gauche: "Rhin", droite: "mer du Nord" },
        { gauche: "Danube", droite: "mer Noire" },
        { gauche: "Gange", droite: "golfe du Bengale" },
      ],
    ];
    for (const paires of contenus) {
      expect(ordreDroite(paires).every((valeur, rang) => valeur === rang)).toBe(false);
    }
  });

  it("est une permutation complète : chaque droite apparaît une fois", () => {
    const ordre = ordreDroite(pays.paires);
    expect([...ordre].sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4]);
  });

  it("change quand le contenu change", () => {
    const autre = {
      ...pays,
      paires: [...pays.paires.slice(0, 4), { gauche: "Suisse", droite: "Berne" }],
    };
    expect(ordreDroite(autre.paires)).not.toEqual(ordreDroite(pays.paires));
  });
});

describe("la question posée", () => {
  it("ne laisse pas passer la correspondance", () => {
    const question = appariement.toQuestion(pays) as Record<string, unknown>;
    expect(Object.keys(question).sort()).toEqual(["consigne", "droite", "gauche"]);
    expect(JSON.stringify(question)).not.toContain("paires");
  });

  it("garde la colonne de gauche dans l'ordre écrit", () => {
    const question = appariement.toQuestion(pays) as { gauche: string[] };
    expect(question.gauche).toEqual(["France", "Italie", "Espagne", "Portugal", "Grèce"]);
  });
});

describe("la correction", () => {
  it("accepte la réponse juste", () => {
    const r = appariement.grade(pays, bonneReponse(pays));
    expect(r.correct).toBe(true);
  });

  it("refuse l'appariement positionnel, puisque la droite est mélangée", () => {
    const r = appariement.grade(pays, [0, 1, 2, 3, 4]);
    expect(r.correct).toBe(false);
  });

  it("dit quelles paires sont justes, pas seulement le total", () => {
    const juste = bonneReponse(pays);
    const presque = [...juste];
    [presque[0], presque[1]] = [presque[1]!, presque[0]!];
    const r = appariement.grade(pays, presque);
    expect(r.correct).toBe(false);
    expect((r.reveal as { justes: boolean[] }).justes.filter(Boolean)).toHaveLength(3);
  });

  it("refuse une réponse incomplète", () => {
    const juste = bonneReponse(pays);
    expect(appariement.grade(pays, juste.slice(0, 3)).correct).toBe(false);
  });

  it("ne plante pas sur une réponse absente ou mal formée", () => {
    expect(appariement.grade(pays, undefined as never).correct).toBe(false);
    expect(appariement.grade(pays, "oui" as never).correct).toBe(false);
  });
});

describe("les contrôles de contenu", () => {
  const valider = (p: Partial<AppariementPayload>) =>
    appariement.validate!({ ...pays, ...p } as AppariementPayload);

  it("laisse passer un appariement sain", () => {
    expect(valider({})).toEqual([]);
  });

  it("refuse deux éléments identiques à droite : la paire devient indécidable", () => {
    const erreurs = valider({
      paires: [
        { gauche: "Groenland", droite: "Danemark" },
        { gauche: "Féroé", droite: "Danemark" },
        { gauche: "Gibraltar", droite: "Royaume-Uni" },
      ],
    });
    expect(erreurs).toContain("deux éléments identiques à droite");
  });

  it("refuse moins de trois paires et plus de six", () => {
    expect(valider({ paires: pays.paires.slice(0, 2) })).toContain("2 paire(s), minimum 3");
    expect(
      valider({
        paires: [...pays.paires, { gauche: "Suisse", droite: "Berne" }, { gauche: "Autriche", droite: "Vienne" }],
      })
    ).toContain("7 paires, maximum 6");
  });

  it("refuse une consigne vide", () => {
    expect(valider({ consigne: "  " })).toContain("consigne vide");
  });
});

describe("l'empreinte de dédoublonnage", () => {
  it("réunit deux exercices qui posent la même question", () => {
    const autreExplication = { ...pays, explication: "Une autre note." };
    expect(appariement.fingerprint(autreExplication)).toBe(appariement.fingerprint(pays));
  });

  it("ne dépend pas de l'ordre d'écriture des paires", () => {
    const melange = { ...pays, paires: [...pays.paires].reverse() };
    expect(appariement.fingerprint(melange)).toBe(appariement.fingerprint(pays));
  });

  it("sépare deux consignes différentes sur le même contenu", () => {
    const autre = { ...pays, consigne: "Relie chaque capitale à son pays." };
    expect(appariement.fingerprint(autre)).not.toBe(appariement.fingerprint(pays));
  });
});
