"use client";

/**
 * Boîte de confirmation.
 *
 * Sert à ne pas quitter une série ou une dictée d'un coup de pouce malheureux.
 * Le message dit exactement ce qui sera perdu et ce qui ne le sera pas : mentir
 * pour dissuader ferait perdre confiance dans tous les autres avertissements.
 */
import { useEffect, useRef } from "react";

export type Action = { libelle: string; onClick: () => void; style?: "plein" | "creux" | "lien" };

type Props = {
  titre: string;
  texte: string;
  actions: Action[];
  /** Appelée sur Échap et au clic hors de la boîte. */
  onFermer: () => void;
};

export function Confirmation({ titre, texte, actions, onFermer }: Props) {
  const boite = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const auClavier = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
    };
    document.addEventListener("keydown", auClavier);
    // Le premier bouton reçoit le focus : la boîte est utilisable sans souris.
    boite.current?.querySelector("button")?.focus();
    return () => document.removeEventListener("keydown", auClavier);
  }, [onFermer]);

  return (
    <div className="voile" onClick={onFermer} role="presentation">
      <div
        className="boite"
        ref={boite}
        role="dialog"
        aria-modal="true"
        aria-label={titre}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{titre}</h2>
        <p className="legende">{texte}</p>
        <div className="bas">
          {actions.map((a) => (
            <button key={a.libelle} className={a.style ?? "creux"} onClick={a.onClick}>
              {a.libelle}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
