/**
 * L'astuce d'une notion donne-t-elle la réponse d'une de ses questions ?
 *
 * Chaque notion porte un `tip` affiché à côté de ses questions. Deux relecteurs
 * indépendants — gastronomie et physique-chimie — ont trouvé la même chose :
 * dans une notion sur trois, cette astuce contient littéralement la bonne
 * réponse. Voici la mesure sur tout le corpus.
 */
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";
import { normalizeForDedupe } from "../src/lib/tokenize";

for (const m of MODULES) {
  let notions = 0, notionsTouchees = 0, questions = 0, questionsTrahies = 0;
  const exemples: string[] = [];
  for (const b of contenuDe(m))
    for (const s of b.skills) {
      const astuce = normalizeForDedupe(s.tip ?? "");
      if (!astuce) continue;
      notions++;
      let touchee = false;
      for (const e of s.exercises) {
        const p = e.payload as { choices?: string[]; answerIndex?: number; question?: string };
        if (!p.choices || typeof p.answerIndex !== "number") continue;
        questions++;
        const bonne = normalizeForDedupe(p.choices[p.answerIndex] ?? "");
        // La réponse doit être assez longue pour que la coïncidence ne soit pas fortuite.
        if (bonne.length < 12) continue;
        if (astuce.includes(bonne)) {
          questionsTrahies++;
          touchee = true;
          if (exemples.length < 3) exemples.push(`     [${s.slug}] « ${p.question} » → « ${p.choices[p.answerIndex]} »`);
        }
      }
      if (touchee) notionsTouchees++;
    }
  if (!notions) continue;
  console.log(
    `${m.id.padEnd(12)} ${String(notionsTouchees).padStart(4)}/${String(notions).padEnd(5)} notions dont l'astuce trahit une réponse ` +
      `(${((notionsTouchees / notions) * 100).toFixed(1)} %) · ${questionsTrahies} question(s) sur ${questions}`
  );
  for (const e of exemples) console.log(e);
}
