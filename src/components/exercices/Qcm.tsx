"use client";

/**
 * « Choisis la bonne réponse ».
 *
 * Les propositions sont affichées dans l'ordre stocké, et c'est voulu : cet
 * ordre est déjà mélangé au moment du seed, une bonne fois, pour que les
 * données soient saines quel que soit ce qui les lit. Mélanger une seconde
 * fois ici ne ferait que rendre l'ordre affiché différent de l'ordre stocké,
 * sans rien gagner.
 */
import type { QcmQuestion, QcmReveal } from "@/lib/api-types";
import type { VueExercice, VueExerciceProps } from "./types";

/** Aucune proposition ne dépasse deux points de code : ce sont des symboles.
 *  Un émoji de drapeau en compte exactement deux. */
const symboles = (choix: string[]) => choix.every((c) => [...c].length <= 2);

function QcmVue({ question, verdict, choix, repondre }: VueExerciceProps) {
  const q = question as QcmQuestion;
  const reveal = verdict?.reveal as QcmReveal | undefined;

  return (
    <>
      <div className={`cahier ${verdict ? "fige" : ""}`}>
        <div className="marge" />
        <p className="enonce">{q.question}</p>
        {/* Une proposition peut n'être qu'un symbole — un drapeau, un signe.
            À la taille du texte, deux tricolores ne se distinguent pas. La
            liste le signale, et le module décide quoi en faire. */}
        <ul className="propositions" data-forme={symboles(q.choices) ? "symboles" : undefined}>
          {q.choices.map((texte, rang) => {
            const juste = reveal !== undefined && rang === reveal.answerIndex;
            const rate = verdict !== null && choix === rang && !verdict.correct;
            return (
              <li key={rang}>
                <button
                  className={`proposition ${juste ? "juste" : ""} ${rate ? "rate" : ""}`}
                  disabled={verdict !== null}
                  onClick={() => repondre(rang)}
                >
                  {texte}
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
