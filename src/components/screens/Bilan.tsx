"use client";

/** Bilan de fin de série : note, détail par catégorie, points faibles. */
import { useEffect, useState } from "react";
import type { SessionSummary } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { loadGuestState } from "@/lib/client/guest-store";
import { NoContentError } from "@/lib/client/engine";

type Props = ScreenProps & { summary: SessionSummary; category: string | null };

export function Bilan({ engine, summary, category, setScreen, setChrome }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const test = summary.mode === "test";

  useEffect(() => {
    setChrome({
      fil: test ? "Test de positionnement" : "Entraînement",
      accroche: "Ce qui est raté aujourd’hui revient plus vite que ce qui est su.",
    });
  }, [test, setChrome]);

  const relancer = async () => {
    try {
      const taille = engine.isGuest ? loadGuestState().seriesLength : 20;
      const session = await engine.start({
        mode: category ? "targeted" : "training",
        size: taille,
        category,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
    }
  };

  return (
    <div className="carte">
      <p className="note">
        {summary.correct}
        <small> / {summary.total}</small>
      </p>
      <p className="legende" style={{ margin: "6px 0 26px" }}>
        {test ? (
          <>
            Ton parcours est calibré. Niveau estimé : <b style={{ color: "var(--papier)" }}>{summary.level}</b>.
          </>
        ) : (
          <>
            Niveau estimé : <b style={{ color: "var(--papier)" }}>{summary.level}</b> · {summary.mastered} /{" "}
            {summary.skillCount} points acquis.
          </>
        )}
      </p>

      {summary.byCategory.map((c) => (
        <div className="ligne" key={c.category}>
          <div className="tete">
            <span>{c.category}</span>
            <span>
              {c.correct} / {c.total}
            </span>
          </div>
          <div className="piste">
            <i
              className={c.correct / c.total >= 0.75 ? "fort" : c.correct / c.total < 0.5 ? "faible" : ""}
              style={{ width: `${(c.correct / c.total) * 100}%` }}
            />
          </div>
        </div>
      ))}

      {summary.weakest.length > 0 && (
        <>
          <h3>À retravailler en priorité</h3>
          <p className="legende">{summary.weakest.map((w) => w.title).join(" · ")}</p>
        </>
      )}

      {message && <p className="alerte" style={{ marginTop: 18 }}>{message}</p>}

      <div className="bas">
        <button className="plein" onClick={relancer}>
          {test ? "Commencer l’entraînement" : "Nouvelle série"}
        </button>
        <button className="creux" onClick={() => setScreen({ name: "accueil" })}>
          Accueil
        </button>
      </div>
    </div>
  );
}
