"use client";

/**
 * « Choisis la bonne réponse ».
 *
 * Les propositions sont mélangées à l'affichage, avec un tirage stable pour la
 * durée de la question : sans mélange, la bonne réponse se retrouverait toujours
 * au même rang, et on apprendrait la position plutôt que la réponse. Le rang
 * renvoyé au serveur reste celui du stockage — le mélange n'est qu'un affichage.
 */
import { useMemo } from "react";
import type { QcmQuestion, QcmReveal } from "@/lib/api-types";
import type { VueExercice, VueExerciceProps } from "./types";

/** Mélange déterministe : la même question donne toujours le même ordre. */
function ordreStable(n: number, graine: string): number[] {
  const rangs = Array.from({ length: n }, (_, i) => i);
  let h = 2166136261;
  for (let i = 0; i < graine.length; i++) {
    h = Math.imul(h ^ graine.charCodeAt(i), 16777619) >>> 0;
  }
  for (let i = rangs.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    const j = h % (i + 1);
    [rangs[i], rangs[j]] = [rangs[j]!, rangs[i]!];
  }
  return rangs;
}

function QcmVue({ question, verdict, choix, repondre }: VueExerciceProps) {
  const q = question as QcmQuestion;
  const reveal = verdict?.reveal as QcmReveal | undefined;
  const ordre = useMemo(() => ordreStable(q.choices.length, q.question), [q]);

  return (
    <>
      <div className={`cahier ${verdict ? "fige" : ""}`}>
        <div className="marge" />
        <p className="enonce">{q.question}</p>
        <ul className="propositions">
          {ordre.map((rang) => {
            const juste = reveal !== undefined && rang === reveal.answerIndex;
            const rate = verdict !== null && choix === rang && !verdict.correct;
            return (
              <li key={rang}>
                <button
                  className={`proposition ${juste ? "juste" : ""} ${rate ? "rate" : ""}`}
                  disabled={verdict !== null}
                  onClick={() => repondre(rang)}
                >
                  {q.choices[rang]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {reveal?.explanation && <p className="explication">{reveal.explanation}</p>}
    </>
  );
}

export const qcmVue: VueExercice = {
  Vue: QcmVue,
  consigne: "Choisis la bonne réponse.",
};
