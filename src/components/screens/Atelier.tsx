"use client";

/**
 * L'Atelier : le choix de la matière.
 *
 * Il répond à une seule question — qu'est-ce que je travaille maintenant ? —
 * et il y répond deux fois : par un bouton en haut, qui compose une révision de
 * tout ce qui est dû, et par la liste des modules en dessous, pour ceux qui
 * savent déjà ce qu'ils veulent.
 *
 * L'écran est bâti sur le registre : il n'énumère aucune matière en dur.
 */
import { useEffect, useState } from "react";
import type { ModuleSummary, ProgressPayload } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import type { ScreenProps } from "../App";

type Props = ScreenProps & { choisirModule: (id: string) => void };

export function Atelier({ engine, user, setScreen, setChrome, choisirModule }: Props) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setChrome({
      fil: "Atelier",
      accroche: user
        ? `Bonjour ${user.pseudo}. Choisis ce que tu travailles aujourd’hui.`
        : "Choisis ce que tu travailles aujourd’hui.",
    });
  }, [user, setChrome]);

  useEffect(() => {
    let vivant = true;
    engine
      .progress()
      .then((p) => vivant && setProgress(p))
      .catch(() => vivant && setMessage("Progression indisponible."));
    return () => {
      vivant = false;
    };
  }, [engine]);

  const modules = progress?.modules ?? [];
  const duTotal = modules.reduce((n, m) => n + m.due, 0);
  const acquisTotal = modules.reduce((n, m) => n + m.mastered, 0);
  const pointsTotal = modules.reduce((n, m) => n + m.skillCount, 0);

  /** Le module le plus en retard : c'est par lui que « réviser » commence. */
  const leplusDu = modules.reduce<ModuleSummary | null>(
    (meilleur, m) => (!meilleur || m.due > meilleur.due ? m : meilleur),
    null
  );

  const reviser = async (moduleId: string) => {
    setMessage(null);
    try {
      const session = await engine.start({ mode: "training", size: 20, category: null, moduleId });
      choisirModule(moduleId);
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
    }
  };

  if (!progress) return <p className="legende attente">Chargement de ton atelier…</p>;

  return (
    <>
      <div className="carte bandeau">
        <div className="chiffres-atelier">
          <div>
            <b>{duTotal}</b>
            <span>à réviser aujourd’hui</span>
          </div>
          <div>
            <b>{acquisTotal}</b>
            <span>points acquis</span>
          </div>
          <div>
            <b>{pointsTotal}</b>
            <span>points au total</span>
          </div>
        </div>
        {leplusDu && duTotal > 0 ? (
          <button className="plein" onClick={() => reviser(leplusDu.id)}>
            Réviser maintenant — {leplusDu.name}
          </button>
        ) : (
          <p className="legende">
            Rien n’est dû pour l’instant. Ouvre une matière et prends de l’avance.
          </p>
        )}
      </div>

      {message && <p className="alerte">{message}</p>}

      <div className="modules">
        {modules.map((m) => (
          <button key={m.id} className="module" onClick={() => choisirModule(m.id)}>
            <span className="titre">{m.name}</span>
            <span className="tagline">{m.tagline}</span>
            <span className="jauge-module">
              <i style={{ width: `${m.skillCount ? (m.mastered / m.skillCount) * 100 : 0}%` }} />
            </span>
            <span className="detail">
              {m.mastered} / {m.skillCount} acquis
              {m.due > 0 && <b> · {m.due} à revoir</b>}
              {m.seen === 0 && <em> · jamais ouvert</em>}
            </span>
            <span className="niveau">{m.level}</span>
          </button>
        ))}
      </div>

      {!user && (
        <p className="legende centre">
          Tu travailles sans compte : ta progression reste dans ce navigateur, et une seule matière
          est chargée à la fois.{" "}
          <button className="lien" onClick={() => setScreen({ name: "inscription" })}>
            Créer un compte
          </button>{" "}
          les réunit toutes.
        </p>
      )}
    </>
  );
}
