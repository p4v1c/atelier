"use client";

/**
 * Statistiques.
 *
 * L'écran d'origine affichait les six cent dix-huit règles à la suite, en
 * barres : un mur de trois mètres où l'on ne trouvait rien. Chaque domaine est
 * désormais replié sur une seule ligne — nom, avancement, barre — et ne
 * s'ouvre que si on le demande.
 */
import { useEffect, useMemo, useState } from "react";
import type { ProgressPayload } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { loadGuestState } from "@/lib/client/guest-store";
import { NoContentError } from "@/lib/client/engine";
import { MASTERY_BOX } from "@/lib/study/scheduler";

type Tri = "domaine" | "faible";

export function Stats({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [tri, setTri] = useState<Tri>("domaine");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setChrome({
      fil: "Statistiques",
      accroche: "Un palier se gagne à chaque bonne réponse et se perd de deux crans en cas d’erreur.",
    });
    void engine.progress(moduleId).then(setProgress);
  }, [engine, moduleId, setChrome]);

  const domaines = useMemo(() => {
    if (!progress) return [];
    const liste = [...progress.categories];
    if (tri === "faible") {
      liste.sort((a, b) => a.mastered / (a.skills || 1) - b.mastered / (b.skills || 1));
    }
    return liste;
  }, [progress, tri]);

  if (!progress) return <p className="legende attente">Calcul en cours…</p>;

  const series = progress.recentSessions;
  const questions = series.reduce((n, s) => n + s.questionCount, 0);
  const reussite = questions
    ? Math.round((series.reduce((n, s) => n + ((s.score ?? 0) * s.questionCount) / 100, 0) / questions) * 100)
    : 0;

  const lancer = async (mode: "weakness" | "targeted", category: string | null) => {
    setMessage(null);
    try {
      const taille = engine.isGuest ? loadGuestState().seriesLength : 20;
      const session = await engine.start({ mode, size: taille, category, moduleId });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
    }
  };

  return (
    <>
      <div className="carte">
        <p className="niveau">
          <b>{progress.level}</b>
          <span>
            {progress.mastered} / {progress.skillCount} maîtrisées
          </span>
        </p>
        <div className="anneau">
          <i style={{ width: `${progress.skillCount ? (progress.mastered / progress.skillCount) * 100 : 0}%` }} />
        </div>
        <p className="legende" style={{ marginTop: 10 }}>
          {questions > 0
            ? `${reussite} % de réussite sur tes ${series.length} dernières séries · ${progress.answerCounter} phrases traitées en tout.`
            : "Aucune série terminée pour le moment."}
        </p>

        <div className="chiffres">
          <span>
            <b>{progress.due}</b>à réviser
          </span>
          <span>
            <b>{progress.unseen}</b>jamais vues
          </span>
          <span>
            <b>{progress.skillCount - progress.mastered - progress.unseen}</b>en cours
          </span>
        </div>
      </div>

      {message && (
        <div className="carte">
          <p className="alerte" style={{ marginBottom: 0 }}>
            {message}
          </p>
        </div>
      )}

      {progress.weakest.length > 0 && (
        <div className="carte">
          <h3>Tes points faibles du moment</h3>
          {progress.weakest.map((r) => (
            <div className="ligne" key={r.slug}>
              <div className="tete">
                <span>{r.title}</span>
                <span>
                  {r.category} · palier {r.box}/5
                </span>
              </div>
              <div className="piste">
                <i className={r.box <= 1 ? "faible" : ""} style={{ width: `${(r.box / 5) * 100}%` }} />
              </div>
            </div>
          ))}
          <button className="plein" style={{ marginTop: 18 }} onClick={() => lancer("weakness", null)}>
            S’entraîner là-dessus
          </button>
        </div>
      )}

      <div className="carte">
        <p className="etiquette groupe-tete">
          Par domaine
          <span>
            <button className={`mini ${tri === "domaine" ? "active" : ""}`} onClick={() => setTri("domaine")}>
              ordre du parcours
            </button>
            <button className={`mini ${tri === "faible" ? "active" : ""}`} onClick={() => setTri("faible")}>
              les plus faibles
            </button>
          </span>
        </p>

        {domaines.map((cat) => {
          const estOuvert = ouvert === cat.category;
          const part = cat.skills ? (cat.mastered / cat.skills) * 100 : 0;
          return (
            <div className={`domaine ${estOuvert ? "ouvert" : ""}`} key={cat.category}>
              <button
                className={`domaine-tete ${estOuvert ? "ouvert" : ""}`}
                onClick={() => setOuvert(estOuvert ? null : cat.category)}
              >
                <span className="domaine-nom">
                  <span className="chevron" aria-hidden="true" />
                  {cat.category}
                </span>
                <span className="domaine-compte">
                  {cat.mastered}/{cat.skills}
                </span>
              </button>
              <div className="piste">
                <i
                  className={part >= 75 ? "fort" : part < 25 ? "faible" : ""}
                  style={{ width: `${part}%` }}
                />
              </div>
              <p className="domaine-detail">
                {cat.due} à réviser · {cat.unseen} jamais vues
              </p>

              {estOuvert && (
                <div className="fiche-corps" style={{ marginTop: 16 }}>
                  {progress.skills
                    .filter((r) => r.category === cat.category)
                    .map((r) => (
                      <div className="ligne" key={r.slug}>
                        <div className="tete">
                          <span>{r.title}</span>
                          <span>
                            {r.isNew ? "jamais vue" : `palier ${r.box}/5 · ${r.correctCount}/${r.seenCount}`}
                          </span>
                        </div>
                        <div className="piste">
                          <i
                            className={r.box >= MASTERY_BOX ? "fort" : r.box <= 1 && !r.isNew ? "faible" : ""}
                            style={{ width: `${(r.box / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  <button className="creux" style={{ marginTop: 8 }} onClick={() => lancer("targeted", cat.category)}>
                    S’entraîner sur ce domaine
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bas">
        <button className="creux" onClick={() => setScreen({ name: "accueil" })}>
          Accueil
        </button>
      </div>
    </>
  );
}
