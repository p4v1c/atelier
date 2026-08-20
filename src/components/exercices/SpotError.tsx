"use client";

/**
 * « Repère la faute » : la page de cahier, les mots cliquables, le cercle rouge
 * tracé autour de la faute et la correction manuscrite au-dessus.
 *
 * Le tracé est repris trait pour trait du fichier d'origine : quatre courbes de
 * Bézier fermant une ellipse légèrement débordante, inclinée de deux degrés,
 * animée par stroke-dashoffset. Le calcul dépend de la position réelle du mot à
 * l'écran, donc il a lieu après le rendu, dans un effet.
 */
import { useLayoutEffect, useRef } from "react";
import type { SpotErrorQuestion, SpotErrorReveal } from "@/lib/api-types";
import type { VueExercice, VueExerciceProps } from "./types";

function SpotErrorVue({ question, verdict, choix, repondre }: VueExerciceProps) {
  const q = question as SpotErrorQuestion;
  const reveal = verdict?.reveal as SpotErrorReveal | undefined;
  const cahierRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const calqueRef = useRef<SVGSVGElement>(null);

  /* Le cercle : mesuré après le rendu du verdict, effacé à chaque question. */
  useLayoutEffect(() => {
    const calque = calqueRef.current;
    const cahier = cahierRef.current;
    if (!calque || !cahier) return;
    calque.replaceChildren();
    cahier.querySelectorAll(".annote").forEach((n) => n.remove());
    if (!reveal || reveal.faultyTokenIndex < 0) return;

    const cible = phraseRef.current?.querySelector<HTMLElement>(`[data-i="${reveal.faultyTokenIndex}"]`);
    if (!cible) return;

    const b = cible.getBoundingClientRect();
    const c = cahier.getBoundingClientRect();
    const x = b.left - c.left;
    const y = b.top - c.top;
    const cx = x + b.width / 2;
    const cy = y + b.height / 2;
    const rx = b.width / 2 + 11;
    const ry = b.height / 2 + 3;
    const k = 0.5523;

    const d = `M ${cx} ${cy - ry}
    C ${cx + rx * k} ${cy - ry} ${cx + rx} ${cy - ry * k} ${cx + rx} ${cy}
    C ${cx + rx} ${cy + ry * k} ${cx + rx * k} ${cy + ry} ${cx} ${cy + ry}
    C ${cx - rx * k} ${cy + ry} ${cx - rx} ${cy + ry * k} ${cx - rx} ${cy}
    C ${cx - rx} ${cy - ry * k} ${cx - rx * k} ${cy - ry * 1.08} ${cx + rx * 0.3} ${cy - ry * 0.98}`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "trait");
    path.setAttribute("transform", `rotate(-2 ${cx} ${cy})`);
    calque.append(path);

    const longueur = path.getTotalLength();
    path.style.strokeDasharray = String(longueur);
    path.style.strokeDashoffset = String(longueur);

    if (reveal.correction) {
      const annotation = document.createElement("span");
      annotation.className = "annote";
      annotation.textContent = reveal.correction;
      annotation.style.left = `${cx}px`;
      annotation.style.top = `${y - 4}px`;
      cahier.append(annotation);
    }
  }, [reveal]);

  return (
    <>
      <div className={`cahier ${verdict ? "fige" : ""}`} ref={cahierRef}>
        <div className="marge" />
        <p className="phrase" ref={phraseRef}>
          {q.tokens.map((token, i) => (
            <span key={i}>
              {token.before}
              <button
                className={`mot ${verdict && !verdict.correct && choix === i ? "rate" : ""}`}
                data-i={i}
                disabled={verdict !== null}
                onClick={() => repondre(i)}
              >
                {token.word}
              </button>
              {token.after}{" "}
            </span>
          ))}
        </p>
        <svg className="calque" ref={calqueRef} />
      </div>

      <div className="consigne">
        <p className="indice">Clique sur le mot qui te semble fautif.</p>
        <button className="creux" disabled={verdict !== null} onClick={() => repondre(-1)}>
          Aucune faute
        </button>
      </div>
    </>
  );
}

export const spotErrorVue: VueExercice = {
  Vue: SpotErrorVue,
  consigne: "Clique sur le mot fautif, ou déclare la phrase correcte.",
  titreVerdict: (verdict) => {
    const reveal = verdict.reveal as SpotErrorReveal | undefined;
    return reveal && reveal.faultyTokenIndex < 0 ? "La phrase était correcte" : null;
  },
};
