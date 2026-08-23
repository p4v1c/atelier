"use client";

/**
 * Bilan de fin de série : la note, le détail par domaine, ce qu'il faut
 * reprendre.
 *
 * Il tenait dans une .carte, avec une note de soixante-quatre pixels posée sur
 * rien. Il emploie maintenant le plateau à rail comme le reste : le grand
 * nombre de la coque à gauche, au-dessus du tableau dense des domaines, et à
 * droite ce qui se décide — reprendre, ou passer à la suite.
 */
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
        // La série suivante reste dans la matière qu'on vient de travailler.
        moduleId: summary.moduleId,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
    }
  };

  return (
    <div className="plateau avec-rail">
      <div className="principal">
        <p className="mono-titre">{test ? "Test de positionnement" : "Série terminée"}</p>
        <div className="compte-du">
          <span className="nombre">{summary.correct}</span>
          <span className="quoi">
            sur {summary.total} · {summary.score} %
            <br />
            {test
              ? "Ton parcours est calibré."
              : `${summary.mastered} / ${summary.skillCount} points acquis.`}
          </span>
        </div>

        <p className="mono-titre">Par domaine</p>
        <div className="tableau-defilant">
          <table className="table-domaines">
            <thead>
              <tr>
                <th>Domaine</th>
                <th>Juste</th>
                <th>Posées</th>
                <th className="avancement">Réussite</th>
              </tr>
            </thead>
            <tbody>
              {summary.byCategory.map((c) => {
                const part = c.total ? c.correct / c.total : 0;
                return (
                  <tr key={c.category}>
                    <td>{c.category}</td>
                    <td className={c.correct === 0 ? "rien" : ""}>{c.correct}</td>
                    <td>{c.total}</td>
                    <td className="avancement">
                      <span className="piste">
                        <i
                          className={part >= 0.75 ? "bien" : part < 0.5 ? "mal" : ""}
                          style={{ width: `${Math.max(2, part * 100)}%` }}
                        />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <aside className="rail">
        <p className="mono-titre">Niveau estimé</p>
        <p className="fiche-entete-titre" style={{ marginBottom: 20 }}>
          {summary.level}
        </p>

        {summary.weakest.length > 0 && (
          <>
            <p className="mono-titre">À retravailler en priorité</p>
            <div className="faiblesse">
              {summary.weakest.map((w) => (
                <div key={w.slug} className="faiblesse-ligne">
                  <span className="nom">{w.title}</span>
                  <span className="taux">{w.box}/5</span>
                  <span className="piste">
                    <i className={w.box <= 1 ? "faible" : ""} style={{ width: `${(w.box / 5) * 100}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {message && <p className="alerte">{message}</p>}

        <button className="plein" style={{ width: "100%", marginBottom: 10 }} onClick={relancer}>
          {test ? "Commencer l’entraînement" : "Nouvelle série"}
        </button>
        <button
          className="creux"
          style={{ width: "100%" }}
          onClick={() => setScreen({ name: "accueil" })}
        >
          Revenir à l’accueil
        </button>

        <p className="rail-bas">
          Une erreur fait reculer de deux paliers : ce qui vient d’être raté reviendra vite.
        </p>
      </aside>
    </div>
  );
}
