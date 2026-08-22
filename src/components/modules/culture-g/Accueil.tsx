"use client";

/**
 * L'accueil du Cahier de culture G.
 *
 * Il garde ce qui faisait son identité — les quatre chiffres, les trois modes,
 * la grille des matières à emoji — et l'installe dans la coque commune. Sous
 * le capot, rien de propre au cahier : même planificateur, même compte.
 */
import { useEffect, useState } from "react";
import type { ProgressPayload } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import { complementDe } from "@/lib/elision";
import { SUJETS } from "@/modules/culture-g";
import type { ScreenProps } from "../../App";

export function AccueilCultureG({ engine, user, moduleId, setScreen, setChrome }: ScreenProps) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [occupe, setOccupe] = useState(false);

  useEffect(() => {
    setChrome({ fil: "", accroche: "" });
    setProgress(null);
    void engine
      .progress(moduleId)
      .then(setProgress)
      .catch(() => setMessage("Progression indisponible."));
  }, [engine, moduleId, setChrome]);

  const lancer = async (mode: "training" | "weakness", category: string | null = null) => {
    setOccupe(true);
    setMessage(null);
    try {
      const session = await engine.start({
        mode: category ? "targeted" : mode,
        size: 20,
        category,
        moduleId,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
      setOccupe(false);
    }
  };

  if (!progress) {
    return (
      <div className="plateau">
        <p className="cg-muted">Chargement de ton cahier…</p>
      </div>
    );
  }

  const total = progress.skills.length;
  const avecCours = progress.skills.filter((s) => s.hasLesson).length;
  const vues = progress.skills.filter((s) => !s.isNew);
  const reussite = vues.length
    ? Math.round(
        (vues.reduce((n, s) => n + s.correctCount, 0) /
          Math.max(1, vues.reduce((n, s) => n + s.seenCount, 0))) *
          100
      )
    : 0;
  const couverture = total ? Math.round((vues.length / total) * 100) : 0;
  const aRevoir = progress.due;

  const matieres = SUJETS.map((sujet) => {
    const notions = progress.skills.filter((s) => s.category === sujet.name);
    const acquises = notions.filter((s) => s.mastered).length;
    return {
      ...sujet,
      notions: notions.length,
      part: notions.length ? Math.round((acquises / notions.length) * 100) : 0,
    };
  }).filter((m) => m.notions > 0);

  return (
    <div className="plateau">
      <p className="cg-eyebrow">
        {user ? complementDe("Le carnet", user.pseudo) : "Ton carnet de révision"}
      </p>
      <h1 className="cg-titre">Toute la culture générale, un cahier à la fois.</h1>

      <div className="cg-statrow">
        <div className="cg-stat">
          <span className="n">{total.toLocaleString("fr-FR")}</span>
          <span className="l">notions au programme</span>
        </div>
        <div className="cg-stat">
          <span className="n">{progress.mastered}</span>
          <span className="l">notions acquises</span>
        </div>
        <div className="cg-stat">
          <span className="n">{reussite} %</span>
          <span className="l">taux de bonnes réponses</span>
        </div>
        <div className="cg-stat">
          <span className="n">{couverture} %</span>
          <span className="l">du programme couvert</span>
        </div>
      </div>

      {message && <p className="cg-alerte">{message}</p>}

      <div className="cg-modes">
        <button className="cg-modecard" disabled={occupe} onClick={() => lancer("training")}>
          <span className="cg-eyebrow">Mode quiz</span>
          <h2>Interro surprise</h2>
          <p>Une question, quatre réponses — et un mini-cours après chaque réponse.</p>
          <span className="go">Commencer →</span>
        </button>

        <button className="cg-modecard cours" onClick={() => setScreen({ name: "catalogue" })}>
          <span className="cg-eyebrow">Mode cours</span>
          <h2>Les leçons</h2>
          <p>
            {avecCours.toLocaleString("fr-FR")} chapitres rédigés comme un manuel, avec un mini-quiz à la
            fin.
          </p>
          <span className="go">Ouvrir le manuel →</span>
        </button>

        <button
          className="cg-modecard revision"
          disabled={occupe || aRevoir === 0}
          onClick={() => lancer("weakness")}
        >
          <span className="cg-eyebrow">Révision</span>
          <h2>Mes erreurs</h2>
          <p>
            {aRevoir > 0
              ? `${aRevoir} notion${aRevoir > 1 ? "s" : ""} à revoir. C'est là que tu progresses le plus vite.`
              : "Rien à revoir. Fais une interro pour alimenter cette pile."}
          </p>
          <span className="go">Repasser dessus →</span>
        </button>
      </div>

      <h2 className="cg-section">Les matières</h2>
      <div className="cg-catgrid">
        {matieres.map((m) => (
          <button key={m.slug} className="cg-catcard" onClick={() => lancer("training", m.name)}>
            <span className="tete">
              <span className="emoji" aria-hidden="true">
                {m.emoji}
              </span>
              <span className="nom">{m.name}</span>
            </span>
            <span className="meta">
              {m.notions} notions · {m.part} %
            </span>
            <span className="cg-bar">
              <i style={{ width: `${Math.max(1, m.part)}%` }} />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
