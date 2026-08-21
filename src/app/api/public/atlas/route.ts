/**
 * GET /api/public/atlas
 *
 * La matière de géographie sous sa forme de RÉFÉRENCE : la liste des pays avec
 * leur capitale, et celle des étendues d'eau avec ce qu'on en dit.
 *
 * Ce n'est pas le contenu des exercices — celui-là ne doit jamais partir au
 * client, puisqu'il porte les réponses. C'est l'atlas qu'on consulte avant de
 * jouer : un tableau qu'on lit, pas une série qu'on passe.
 *
 * La route est publique et mise en cache : ce sont les mêmes pays pour tout le
 * monde, connecté ou non.
 *
 * Elle lit la table des fiches côté serveur plutôt que de la livrer au
 * navigateur en entier. Les fiches portent aussi des notes d'auteur sur les
 * drapeaux et les capitales, qui servent à composer les corrections des
 * exercices : les envoyer ici reviendrait à publier une moitié des réponses.
 */
import { json } from "@/lib/http";
import { GEO_SKILLS } from "../../../../../prisma/seed/geographie";
import {
  AMERIQUES,
  AFRIQUE,
  ASIE,
  EUROPE,
  MONDE_RESTE,
  MONDE_SEUL,
  type Fiche,
} from "../../../../../prisma/seed/geographie/pays";
import type { CarteMondePayload } from "@/modules/kinds/carte-monde";

export const revalidate = 3600;

const CONTINENTS: { cle: string; nom: string; pays: readonly Fiche[] }[] = [
  { cle: "europe", nom: "Europe", pays: EUROPE },
  { cle: "afrique", nom: "Afrique", pays: AFRIQUE },
  { cle: "asie", nom: "Asie", pays: ASIE },
  { cle: "ameriques", nom: "Amériques", pays: AMERIQUES },
  { cle: "monde", nom: "Le reste du monde", pays: [...MONDE_SEUL, ...MONDE_RESTE] },
];

export async function GET(): Promise<Response> {
  /* Ce qu'on dit d'une mer est déjà écrit : c'est la correction de l'exercice
     qui la vise. La reprendre ici évite d'entretenir deux textes qui finiraient
     par se contredire — et une correction n'est pas une réponse, puisque le
     nom de la mer est le titre de la ligne. */
  const notesMer = new Map<string, string>();
  for (const skill of GEO_SKILLS) {
    for (const ex of skill.exercises) {
      if (ex.kind !== "carte-monde") continue;
      const p = ex.payload as CarteMondePayload;
      if (p.couche !== "mer" || notesMer.has(p.cible)) continue;
      if (p.explication) notesMer.set(p.cible, p.explication);
    }
  }

  const mers = [...notesMer.entries()]
    .map(([id, note]) => {
      const nom =
        GEO_SKILLS.flatMap((s) => s.exercises)
          .map((e) => e.payload as CarteMondePayload)
          .find((p) => p.couche === "mer" && p.cible === id)?.cibleNom ?? id;
      return { id, nom, note };
    })
    .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));

  return json({
    continents: CONTINENTS.map((c) => ({
      cle: c.cle,
      nom: c.nom,
      pays: c.pays
        .map((f) => ({ id: f.id, a2: f.a2, nom: f.nom, capitale: f.capitale, ou: f.ou }))
        .sort((a, b) => a.nom.localeCompare(b.nom, "fr")),
    })),
    mers,
  });
}
