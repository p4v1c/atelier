import { describe, expect, it } from "vitest";
import { GEO_SKILLS } from "../prisma/seed/geographie";
import {
  de,
  drapeauDe,
  EUROPE,
  AFRIQUE,
  ASIE,
  AMERIQUES,
  MONDE_SEUL,
  MONDE_RESTE,
  type Fiche,
} from "../prisma/seed/geographie/pays";
import type { QcmPayload } from "@/modules/kinds/qcm";

/**
 * Le contenu de géographie n'est pas écrit exercice par exercice : il se déduit
 * d'une table de pays. C'est ce qui le rend cohérent — et ce qui rend une
 * erreur de fabrique invisible à la relecture, puisqu'elle se répète cinq cent
 * fois sans que rien ne dépasse. Ces contrôles portent donc sur la fabrique.
 */

const FICHES: Fiche[] = [...EUROPE, ...AFRIQUE, ...ASIE, ...AMERIQUES, ...MONDE_SEUL, ...MONDE_RESTE];
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
    for (const lot of [EUROPE, AFRIQUE, ASIE, AMERIQUES, MONDE_SEUL, MONDE_RESTE]) {
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

/**
 * Les cent quatre-vingt-treize États membres de l'ONU, par leur code ISO à
 * deux lettres. La liste est écrite ici plutôt que déduite d'un paquet : les
 * tables ISO comptent aussi les territoires — la Réunion, Porto Rico, les
 * Malouines — et « tous les pays » n'aurait alors plus de sens vérifiable.
 */
const ONU = `AF ZA AL DZ DE AD AO AG SA AR AM AU AT AZ BS BH BD BB BE BZ BJ BT BY BO BA BW BR
BN BG BF BI KH CM CA CV CF CL CN CY CO KM CG CD KR KP CR CI HR CU DK DJ DO DM EG AE EC ER ES
EE US ET FJ FI FR GA GM GE GH GR GD GT GN GQ GW GY HT HN HU IN ID IQ IR IE IS IL IT JM JP JO
KZ KE KG KI KW LA LS LV LB LR LY LI LT LU MK MG MY MW MV ML MT MA MH MU MR MX FM MD MC MN ME
MZ MM NA NR NP NI NE NG NO NZ OM UG UZ PK PW PA PG PY NL PE PH PL PT QA RO GB RU RW KN SM VC
LC SB WS ST SN RS SC SL SG SK SI SB SO SD SS LK SE CH SR SZ SY TJ TZ TD CZ TH TL TG TO TT TN
TM TR TV UA UY VU VE VN YE ZM ZW SV`
  .trim()
  .split(/\s+/);

describe("la couverture", () => {
  it("connaît les cent quatre-vingt-treize États membres de l'ONU", () => {
    const connus = new Set(FICHES.map((f) => f.a2));
    const manquants = [...new Set(ONU)].filter((c) => !connus.has(c));
    expect(manquants, `manquants : ${manquants.join(", ")}`).toEqual([]);
  });

  /* Un pays présent dans la table mais dans aucune série n'existerait que sur
     le papier : personne ne le verrait jamais passer. */
  it("interroge chaque pays de la table au moins une fois", () => {
    /* La reconnaissance est EXACTE, pas par sous-chaîne : « Guinée » se lit
       dans « Guinée-Bissau », et un pays jamais interrogé passerait alors pour
       couvert par son voisin. */
    const attendus = new Map<string, string>();
    for (const f of FICHES) {
      attendus.set(`Quel est le drapeau ${de(f)} ?`, f.nom);
      attendus.set(`Quelle est la capitale ${de(f)} ?`, f.nom);
    }

    const vus = new Set<string>();
    for (const s of GEO_SKILLS) {
      for (const e of s.exercises) {
        const p = e.payload as { question?: string; cibleNom?: string };
        const parQuestion = p.question ? attendus.get(p.question) : undefined;
        if (parQuestion) vus.add(parQuestion);
        if (p.cibleNom) vus.add(p.cibleNom);
      }
    }
    const oublies = FICHES.filter((f) => !vus.has(f.nom)).map((f) => f.nom);
    expect(oublies, `jamais interrogés : ${oublies.join(", ")}`).toEqual([]);
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
