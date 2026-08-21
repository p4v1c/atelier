"use client";

/**
 * Progression.
 *
 * L'écran empilait trois .carte et des domaines dépliables — la mise en page
 * d'avant la coque. Il emploie désormais le même vocabulaire que l'accueil et
 * le catalogue : un plateau à rail, un grand nombre en tête, un tableau dense
 * pour les domaines, et le détail d'un domaine ouvert dans ce même tableau.
 *
 * Le rail ne redit pas ce que l'accueil montre déjà. Il porte les deux
 * mesures qui n'ont leur place nulle part ailleurs : la répartition des
 * paliers — la forme réelle de l'avancement, qu'un pourcentage écrase — et
 * les dernières séries.
 */
import { useEffect, useMemo, useState } from "react";
import type { ProgressPayload } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { loadGuestState } from "@/lib/client/guest-store";
import { NoContentError } from "@/lib/client/engine";
import { MASTERY_BOX } from "@/lib/study/scheduler";

type Tri = "parcours" | "faible";

export function Stats({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [tri, setTri] = useState<Tri>("parcours");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setChrome({
      fil: "Progression",
      accroche: "Un palier se gagne à chaque bonne réponse et se perd de deux crans en cas d’erreur.",
    });
    setProgress(null);
    void engine.progress(moduleId).then(setProgress);
  }, [engine, moduleId, setChrome]);

  /** Les domaines, avec leur taux de réussite sur ce qui a déjà été vu. */
  const domaines = useMemo(() => {
    if (!progress) return [];
    const liste = progress.categories.map((c) => {
      const dedans = progress.skills.filter((s) => s.category === c.category);
      const vus = dedans.filter((s) => !s.isNew);
      const reussite = vus.length
        ? vus.reduce((n, s) => n + s.correctCount, 0) /
          Math.max(1, vus.reduce((n, s) => n + s.seenCount, 0))
        : 0;
      return { ...c, part: c.skills ? (c.mastered / c.skills) * 100 : 0, reussite, vus: vus.length };
    });
    if (tri === "faible") liste.sort((a, b) => a.part - b.part);
    return liste;
  }, [progress, tri]);

  /** La répartition des paliers : six colonnes, de « jamais vu » à « acquis ». */
  const paliers = useMemo(() => {
    const n = new Array<number>(6).fill(0);
    for (const s of progress?.skills ?? []) n[Math.min(5, Math.max(0, s.box))]! += 1;
    return n;
  }, [progress]);

  if (!progress) {
    return (
      <div className="plateau">
        <p className="legende attente">Calcul en cours…</p>
      </div>
    );
  }

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

  const series = progress.recentSessions;
  const questions = series.reduce((n, s) => n + s.questionCount, 0);
  const reussite = questions
    ? Math.round(
        (series.reduce((n, s) => n + ((s.score ?? 0) * s.questionCount) / 100, 0) / questions) * 100
      )
    : null;
  const maxPalier = Math.max(...paliers, 1);
  const enCours = progress.skillCount - progress.mastered - progress.unseen;

  return (
    <div className="plateau avec-rail">
      <div className="principal">
        <p className="mono-titre">Acquis dans cette matière</p>
        <div className="compte-du">
          <span className="nombre">{progress.mastered}</span>
          <span className="quoi">
            sur {progress.skillCount} points · niveau <b>{progress.level}</b>
            <br />
            {enCours} en cours, {progress.unseen} jamais ouverts.
          </span>
        </div>

        <div className="reglages-serie">
          <span className="mono-titre" style={{ margin: 0 }}>
            Ordre
          </span>
          <span className="segments">
            <button
              className={`segment ${tri === "parcours" ? "actif" : ""}`}
              onClick={() => setTri("parcours")}
            >
              du parcours
            </button>
            <button className={`segment ${tri === "faible" ? "actif" : ""}`} onClick={() => setTri("faible")}>
              les plus faibles
            </button>
          </span>
          <span className="fin">
            {reussite !== null
              ? `${reussite} % de réussite sur ${series.length} séries`
              : "aucune série terminée"}
          </span>
        </div>

        {message && <p className="alerte">{message}</p>}

        <p className="mono-titre" style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Les {domaines.length} domaines</span>
          <span>Cliquer pour ouvrir le détail</span>
        </p>

        <table className="table-domaines">
          <thead>
            <tr>
              <th>Domaine</th>
              <th>Acquis</th>
              <th>Revoir</th>
              <th>Inédits</th>
              <th>Réussite</th>
              <th className="avancement">Avancement</th>
            </tr>
          </thead>
          <tbody>
            {domaines.map((d) => {
              const estOuvert = ouvert === d.category;
              const points = estOuvert
                ? progress.skills.filter((s) => s.category === d.category)
                : [];
              return [
                <tr
                  key={d.category}
                  className={estOuvert ? "ouverte" : ""}
                  onClick={() => setOuvert(estOuvert ? null : d.category)}
                >
                  <td>
                    <span className={`chevron ${estOuvert ? "ouvert" : ""}`} aria-hidden="true" />
                    {d.category}
                  </td>
                  <td>
                    {d.mastered}/{d.skills}
                  </td>
                  <td className={d.due > 0 ? "du" : "rien"}>{d.due > 0 ? d.due : "—"}</td>
                  <td className={d.unseen > 0 ? "" : "rien"}>{d.unseen > 0 ? d.unseen : "—"}</td>
                  <td className={d.vus === 0 ? "rien" : ""}>
                    {d.vus === 0 ? "—" : `${Math.round(d.reussite * 100)} %`}
                  </td>
                  <td className="avancement">
                    <span className="piste">
                      <i
                        className={
                          d.vus === 0 ? "" : d.reussite >= 0.8 ? "bien" : d.reussite < 0.5 ? "mal" : ""
                        }
                        style={{ width: `${Math.max(2, d.part)}%` }}
                      />
                    </span>
                  </td>
                </tr>,
                ...points.map((s) => (
                  <tr key={`${d.category}/${s.slug}`} className="detail">
                    <td>{s.title}</td>
                    <td className={s.isNew ? "rien" : ""}>{s.isNew ? "—" : `${s.box}/5`}</td>
                    <td className={s.due ? "du" : "rien"}>{s.due ? "oui" : "—"}</td>
                    <td className={s.isNew ? "" : "rien"}>{s.isNew ? "inédit" : "—"}</td>
                    <td className={s.seenCount === 0 ? "rien" : ""}>
                      {s.seenCount === 0 ? "—" : `${s.correctCount}/${s.seenCount}`}
                    </td>
                    <td className="avancement">
                      <span className="piste">
                        <i
                          className={s.box >= MASTERY_BOX ? "bien" : s.box <= 1 && !s.isNew ? "mal" : ""}
                          style={{ width: `${Math.max(2, (s.box / 5) * 100)}%` }}
                        />
                      </span>
                    </td>
                  </tr>
                )),
                ...(estOuvert
                  ? [
                      <tr key={`${d.category}/action`} className="detail action">
                        <td colSpan={6}>
                          <button className="creux" onClick={() => lancer("targeted", d.category)}>
                            S’entraîner sur ce domaine
                          </button>
                        </td>
                      </tr>,
                    ]
                  : []),
              ];
            })}
          </tbody>
        </table>
      </div>

      <aside className="rail">
        <p className="mono-titre">Répartition des paliers</p>
        <div className="paliers">
          {paliers.map((n, i) => (
            <span key={i} className={i >= MASTERY_BOX ? "acquis" : i === 0 ? "neuf" : ""}>
              <i style={{ height: `${Math.max(2, (n / maxPalier) * 100)}%` }} />
              <b>{n}</b>
              <em>{i}</em>
            </span>
          ))}
        </div>
        <p className="legende">
          Palier 0 à gauche, {MASTERY_BOX} et au-delà comptent pour acquis.
        </p>

        {progress.weakest.length > 0 && (
          <>
            <p className="mono-titre" style={{ marginTop: 30 }}>
              Points faibles du moment
            </p>
            <div className="faiblesse">
              {progress.weakest.slice(0, 5).map((r) => (
                <div key={r.slug} className="faiblesse-ligne">
                  <span className="nom">{r.title}</span>
                  <span className="taux">{r.box}/5</span>
                  <span className="piste">
                    <i className={r.box <= 1 ? "faible" : ""} style={{ width: `${(r.box / 5) * 100}%` }} />
                  </span>
                </div>
              ))}
            </div>
            <button
              className="plein"
              style={{ width: "100%" }}
              onClick={() => lancer("weakness", null)}
            >
              S’entraîner là-dessus
            </button>
          </>
        )}

        <p className="mono-titre" style={{ marginTop: 30 }}>
          Dernières séries
        </p>
        {series.length === 0 ? (
          <p className="legende">Aucune série terminée pour le moment.</p>
        ) : (
          <div className="fiche-faits" style={{ borderTop: 0, paddingTop: 0 }}>
            {series.slice(0, 6).map((s, i) => (
              <p className="fiche-fait" key={i}>
                <span>
                  {new Date(s.startedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })} ·{" "}
                  {s.questionCount} questions
                </span>
                <b>{s.score === null ? "en cours" : `${s.score} %`}</b>
              </p>
            ))}
          </div>
        )}

        <p className="rail-bas">{progress.answerCounter} réponses enregistrées en tout.</p>
      </aside>
    </div>
  );
}
