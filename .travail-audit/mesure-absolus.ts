/**
 * Les mots absolus dans les propositions : « seul », « toujours », « jamais »,
 * « uniquement », « aucun ». Un candidat aguerri sait qu'une proposition qui
 * affirme une exclusivité est presque toujours fausse. Si le corpus confirme ce
 * réflexe, il enseigne à répondre sans savoir.
 */
import { MODULES } from "../src/modules";
import { contenuDe } from "../src/modules/contenu";

const ABSOLU = /\b(seul|seule|seuls|seules|uniquement|toujours|jamais|aucun|aucune|exclusivement|tous les|toutes les)\b/i;

for (const m of MODULES) {
  let avec = 0, bonnes = 0, total = 0;
  const exemples: string[] = [];
  for (const b of contenuDe(m))
    for (const s of b.skills)
      for (const e of s.exercises) {
        const p = e.payload as { choices?: string[]; answerIndex?: number; question?: string };
        if (!p.choices || typeof p.answerIndex !== "number") continue;
        p.choices.forEach((c, i) => {
          if (!ABSOLU.test(c)) return;
          total++;
          if (i === p.answerIndex) {
            bonnes++;
            if (exemples.length < 2) exemples.push(`     bonne réponse absolue : « ${c} »`);
          }
        });
        if (p.choices.some((c) => ABSOLU.test(c))) avec++;
      }
  if (!total) continue;
  const part = (bonnes / total) * 100;
  console.log(
    `${m.id.padEnd(12)} ${String(total).padStart(5)} propositions absolues, dont ${String(bonnes).padStart(4)} justes (${part.toFixed(1)} %) · ` +
      `${avec} questions concernées · écarter les absolues fait gagner ${(100 - part).toFixed(0)} % du temps`
  );
  for (const e of exemples) console.log(e);
}
