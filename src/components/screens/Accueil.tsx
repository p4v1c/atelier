"use client";

/**
 * L'accueil d'une matière : ce qui est dû aujourd'hui, et tout le module d'un
 * coup d'œil.
 *
 * Le tableau des domaines remplace la liste de tuiles : on y voit d'un regard
 * ce qui est acquis, ce qui revient, ce qui n'a jamais été ouvert. Cliquer sur
 * une ligne lance une série dessus.
 *
 * Le rail de droite dit ce qu'on rate le plus et à quelle fréquence on
 * travaille. Ce sont les deux questions qu'on se pose vraiment.
 */
import { useEffect, useMemo, useState } from "react";
import type { ProgressPayload } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import { SERIES_SIZES, TEST_SIZE } from "@/lib/study/scheduler";
import type { ScreenProps } from "../App";

export function Accueil({ engine, user, moduleId, setScreen, setChrome }: ScreenProps) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [taille, setTaille] = useState(20);
  const [occupe, setOccupe] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setChrome({ fil: "", accroche: "cahier d’écolier" });
    setProgress(null);
    void engine
      .progress(moduleId)
      .then(setProgress)
      .catch(() => setMessage("Progression indisponible."));
  }, [engine, moduleId, setChrome]);

  const lancer = async (options: {
    mode: "training" | "targeted" | "weakness" | "test";
    categorie?: string | null;
  }) => {
    setOccupe(true);
    setMessage(null);
    try {
      const session = await engine.start({
        mode: options.categorie ? "targeted" : options.mode,
        size: options.mode === "test" ? TEST_SIZE : taille,
        category: options.categorie ?? null,
        moduleId,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(
        e instanceof NoContentError || e instanceof Error
          ? e.message
          : "Impossible de composer une série pour l’instant."
      );
      setOccupe(false);
    }
  };

  /** Les domaines, triés par ce qui réclame le plus d'attention. */
  const domaines = useMemo(() => {
    if (!progress) return [];
    return progress.categories.map((c) => {
      const dedans = progress.skills.filter((s) => s.category === c.category);
      const vus = dedans.filter((s) => !s.isNew);
      const reussite = vus.length
        ? vus.reduce((n, s) => n + s.correctCount, 0) /
          Math.max(1, vus.reduce((n, s) => n + s.seenCount, 0))
        : 0;
      return { ...c, part: c.skills ? (c.mastered / c.skills) * 100 : 0, reussite, vus: vus.length };
    });
  }, [progress]);

  /** Ce qu'on rate le plus : les domaines déjà vus, au plus mauvais taux. */
  const faibles = useMemo(
    () =>
      [...domaines]
        .filter((d) => d.vus > 0)
        .sort((a, b) => a.reussite - b.reussite)
        .slice(0, 4),
    [domaines]
  );

  /** Sept jours d'assiduité, à partir des dernières séries. */
  const semaine = useMemo(() => {
    if (!progress) return [];
    const jours = new Array<number>(7).fill(0);
    const maintenant = Date.now();
    for (const s of progress.recentSessions) {
      const ecart = Math.floor((maintenant - new Date(s.startedAt).getTime()) / 86_400_000);
      if (ecart >= 0 && ecart < 7) jours[6 - ecart]! += s.questionCount;
    }
    return jours;
  }, [progress]);

  if (!progress) {
    return (
      <div className="plateau">
        <p className="legende attente">Chargement de ta progression…</p>
      </div>
    );
  }

  const maxJour = Math.max(...semaine, 1);
  const derniers = progress.recentSessions.slice(0, 5);
  const moyenne = derniers.length
    ? Math.round(derniers.reduce((n, s) => n + (s.score ?? 0), 0) / derniers.length)
    : null;

  return (
    <div className="plateau avec-rail">
      <div className="principal">
        <p className="mono-titre">À réviser aujourd’hui</p>
        <div className="compte-du">
          <span className="nombre">{progress.due}</span>
          <span className="quoi">
            {progress.due > 0
              ? "Repérer la faute, comprendre pourquoi, ne plus la refaire."
              : progress.unseen > 0
                ? `Rien n’est dû. ${progress.unseen} points n’ont jamais été ouverts.`
                : "Tout est à jour. Reviens demain, ou prends de l’avance."}
          </span>
          <button
            className="plein"
            disabled={occupe}
            onClick={() => lancer({ mode: progress.due > 0 ? "training" : "training" })}
          >
            Réviser maintenant
          </button>
        </div>

        <div className="reglages-serie">
          <span className="mono-titre" style={{ margin: 0 }}>
            Longueur
          </span>
          <span className="segments">
            {SERIES_SIZES.map((n) => (
              <button
                key={n}
                className={`segment ${taille === n ? "actif" : ""}`}
                onClick={() => setTaille(n)}
              >
                {n}
              </button>
            ))}
          </span>
          <span className="fin">
            {user?.placementDone === false ? (
              <button className="lien" disabled={occupe} onClick={() => lancer({ mode: "test" })}>
                Passer le test de positionnement
              </button>
            ) : (
              "repérage de faute"
            )}
          </span>
        </div>

        {message && <p className="alerte">{message}</p>}

        <p className="mono-titre" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Les {domaines.length} domaines</span>
          <span>Cliquer pour s’entraîner dessus</span>
        </p>

        <div className="tableau-defilant">
          <table className="table-domaines">
            <thead>
              <tr>
                <th>Domaine</th>
                <th>Acquis</th>
                <th>Revoir</th>
                <th>Inédits</th>
                <th className="avancement">Avancement</th>
              </tr>
            </thead>
            <tbody>
              {domaines.map((d) => (
                <tr key={d.category} onClick={() => !occupe && lancer({ mode: "targeted", categorie: d.category })}>
                  <td>{d.category}</td>
                  <td>
                    {d.mastered}/{d.skills}
                  </td>
                  <td className={d.due > 0 ? "du" : "rien"}>{d.due > 0 ? d.due : "—"}</td>
                  <td className={d.unseen > 0 ? "" : "rien"}>{d.unseen > 0 ? d.unseen : "—"}</td>
                  <td className="avancement">
                    <span className="piste">
                      <i
                        className={d.vus === 0 ? "" : d.reussite >= 0.8 ? "bien" : d.reussite < 0.5 ? "mal" : ""}
                        style={{ width: `${Math.max(2, d.part)}%` }}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside className="rail">
        <p className="mono-titre">Points faibles</p>
        {faibles.length === 0 ? (
          <p className="legende">Rien encore : fais une première série.</p>
        ) : (
          <>
            <div className="faiblesse">
              {faibles.map((d) => (
                <div key={d.category} className="faiblesse-ligne">
                  <span className="nom">{d.category}</span>
                  <span className="taux">{Math.round(d.reussite * 100)} %</span>
                  <span className="piste">
                    <i
                      className={d.reussite < 0.5 ? "faible" : ""}
                      style={{ width: `${Math.max(2, d.reussite * 100)}%` }}
                    />
                  </span>
                </div>
              ))}
            </div>
            <button
              className="plein"
              style={{ width: "100%" }}
              disabled={occupe || progress.due === 0}
              onClick={() => lancer({ mode: "weakness" })}
            >
              S’entraîner là-dessus
            </button>
          </>
        )}

        <p className="mono-titre" style={{ marginTop: 30 }}>
          Sept derniers jours
        </p>
        <div className="assiduite">
          {semaine.map((n, i) => (
            <span
              key={i}
              className={i === 6 ? "aujourdhui" : ""}
              style={{ height: `${Math.max(4, (n / maxJour) * 100)}%` }}
            />
          ))}
        </div>
        <p className="legende">
          {moyenne !== null
            ? `${moyenne} % de réussite sur tes ${derniers.length} dernières séries.`
            : "Aucune série terminée pour l’instant."}
        </p>

        <p className="rail-bas">
          {progress.skillCount} points · {progress.mastered} acquis · {progress.unseen} jamais vus
        </p>
      </aside>
    </div>
  );
}
