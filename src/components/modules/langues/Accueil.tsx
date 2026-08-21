"use client";

/**
 * L'accueil d'un module de langue.
 *
 * Il répond à trois questions dans cet ordre : où j'en suis (le niveau du
 * cadre européen), comment travailler (les quatre façons de réviser la même
 * carte), et par quoi commencer (le programme, série par série).
 */
import { useEffect, useState } from "react";
import type { ProgressPayload } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import { SENS_NIVEAU, type Niveau } from "@/modules/langues/commun";
import type { ScreenProps } from "../../App";

type Props = ScreenProps & { accents: { etiquette: string; nom: string }[] };

/** Les quatre façons de réviser la même carte. */
const FACONS = [
  { cle: "flashcard", nom: "Reconnaître", quoi: "La carte à l’endroit : tu te juges toi-même." },
  { cle: "traduction", nom: "Produire", quoi: "Écrire le mot, sans le voir d’abord." },
  { cle: "ecoute", nom: "Entendre", quoi: "La carte est lue, tu écris ce que tu entends." },
  {
    cle: "prononciation",
    nom: "Dire",
    quoi: "Mesure si un logiciel te comprend, pas ton accent.",
  },
];

/** L'ordre du cadre européen, pour ranger les blocs du programme. */
const ORDRE: Niveau[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function AccueilLangue({ engine, moduleId, accents, setScreen, setChrome }: Props) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [occupe, setOccupe] = useState(false);
  /** Le niveau ouvert dans le programme. Null tant que la progression n'est pas là. */
  const [ouvert, setOuvert] = useState<string | null>(null);

  useEffect(() => {
    setChrome({ fil: "", accroche: "" });
    setProgress(null);
    void engine
      .progress(moduleId)
      .then(setProgress)
      .catch(() => setMessage("Progression indisponible."));
  }, [engine, moduleId, setChrome]);

  const lancer = async (options: { mode: "training" | "weakness"; categorie?: string }) => {
    setOccupe(true);
    setMessage(null);
    try {
      const session = await engine.start({
        mode: options.categorie ? "targeted" : options.mode,
        size: 20,
        category: options.categorie ?? null,
        moduleId,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
      setOccupe(false);
    }
  };

  /** S'entraîner sur une seule série, comme au programme. */
  const travailler = async (slug: string) => {
    setOccupe(true);
    setMessage(null);
    try {
      const session = await engine.start({ mode: "skill", size: 10, category: null, skill: slug, moduleId });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Série impossible.");
      setOccupe(false);
    }
  };

  if (!progress) {
    return (
      <div className="plateau">
        <p className="lg-muted">Chargement…</p>
      </div>
    );
  }

  const niveaux = progress.niveaux ?? [];
  const enCours = progress.niveauEstime;
  const tenu = progress.niveauAcquis;

  /* Le programme, rangé par niveau du cadre européen.
     Il l'était par catégorie, avec pour étiquette le niveau de la PREMIÈRE
     série trouvée dedans — un tirage au sort, puisqu'une catégorie va souvent
     de A1 à C1. « Vocabulaire » s'affichait donc A1 et le C1 n'apparaissait
     nulle part, alors qu'il existe. Et douze lignes de catégories ne sont pas
     un programme quand le module compte soixante-dix séries.

     Le niveau est l'axe du module — c'est lui qui situe l'apprenant. Il devient
     donc l'axe du programme, et chaque série y figure une fois, la sienne. */
  const parNiveau = ORDRE.map((niveau) => {
    const dedans = progress.skills.filter((s) => s.level === niveau);
    return {
      niveau,
      series: dedans,
      acquises: dedans.filter((s) => s.mastered).length,
      part: dedans.length ? (dedans.filter((s) => s.mastered).length / dedans.length) * 100 : 0,
    };
  }).filter((g) => g.series.length > 0);

  /* Les séries sans niveau ne devraient pas exister — le validateur les
     refuse — mais si l'une passait, mieux vaut la voir que la perdre. */
  const sansNiveau = progress.skills.filter((s) => !s.level);

  /* Les domaines gardent leur place : c'est par eux qu'on lance une série
     ciblée. Sans étiquette de niveau, cette fois : une catégorie n'en a pas. */
  const domaines = progress.categories.map((c) => ({
    ...c,
    part: c.skills ? (c.mastered / c.skills) * 100 : 0,
  }));

  /* Le niveau en cours est ouvert d'office : c'est celui qu'on travaille. */
  const niveauOuvert = ouvert ?? enCours ?? parNiveau[0]?.niveau ?? null;

  return (
    <div className="plateau">
      <div className="lg-niveau">
        <span className="lg-badge">{enCours ?? "—"}</span>
        <span className="lg-niveau-texte">
          <b>Cadre européen</b>
          <span>
            {enCours
              ? `Niveau ${enCours} : ${tenu ? `le ${tenu} est tenu, le ${enCours} est en cours.` : "premières séries."} ${SENS_NIVEAU[enCours as Niveau] ?? ""}`
              : "Fais une première série pour te situer."}
          </span>
        </span>
        <span className="lg-echelle">
          {niveaux.map((n) => (
            <span
              key={n.niveau}
              className={`lg-echelon ${n.part >= 80 ? "tenu" : n.niveau === enCours ? "encours" : ""}`}
            >
              <span className="n">{n.niveau}</span>
              <span className="piste">
                <i style={{ width: `${Math.max(1, n.part)}%` }} />
              </span>
              <span className="p">{n.part} %</span>
            </span>
          ))}
        </span>
      </div>

      {message && <p className="lg-alerte">{message}</p>}

      <p className="mono-titre">Quatre façons de réviser la même carte</p>
      <div className="lg-modes">
        {FACONS.map((f) => (
          <button key={f.cle} className="lg-mode" disabled={occupe} onClick={() => lancer({ mode: "training" })}>
            <span className="pictogramme">{f.cle}</span>
            <span className="nom">{f.nom}</span>
            <span className="quoi">{f.quoi}</span>
          </button>
        ))}
      </div>

      <h2 className="lg-section" style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span>Le programme</span>
        <span className="mono-titre" style={{ margin: 0 }}>
          {progress.skillCount} séries · {progress.mastered} acquises
        </span>
      </h2>
      <div className="lg-paliers">
        {parNiveau.map((g) => {
          const estOuvert = g.niveau === niveauOuvert;
          return (
            <section key={g.niveau} className={`lg-palier ${estOuvert ? "ouvert" : ""}`}>
              <button
                className="lg-palier-tete"
                aria-expanded={estOuvert}
                onClick={() => setOuvert(estOuvert ? "" : g.niveau)}
              >
                <span className="niveau">{g.niveau}</span>
                <span className="quoi">
                  <b>{SENS_NIVEAU[g.niveau]}</b>
                  <span className="piste">
                    <i
                      className={g.part >= 80 ? "tenu" : ""}
                      style={{ width: `${Math.max(1, g.part)}%` }}
                    />
                  </span>
                </span>
                <span className="part">
                  {g.acquises}/{g.series.length}
                </span>
              </button>

              {estOuvert && (
                <div className="lg-palier-series">
                  {g.series.map((s) => (
                    <button
                      key={s.slug}
                      className="lg-serie-ligne"
                      disabled={occupe}
                      onClick={() => travailler(s.slug)}
                      title={s.isNew ? `${s.category} · jamais vue` : `${s.category} · ${s.correctCount}/${s.seenCount}`}
                    >
                      <span className="domaine">{s.category}</span>
                      <span
                        className="titre"
                        style={{ "--part": `${(s.box / 5) * 100}%` } as React.CSSProperties}
                      >
                        {s.title}
                        {s.hasLesson && <em className="a-cours">cours</em>}
                        <i />
                      </span>
                      <span className={`part ${s.mastered ? "acquise" : s.due ? "due" : ""}`}>
                        {s.isNew ? "—" : `${s.box}/5`}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </section>
          );
        })}
        {sansNiveau.length > 0 && (
          <p className="lg-muted lg-small">
            {sansNiveau.length} série(s) sans niveau déclaré : {sansNiveau.map((s) => s.title).join(", ")}
          </p>
        )}
      </div>

      <p className="mono-titre" style={{ marginTop: 30, display: "flex", justifyContent: "space-between" }}>
        <span>Par domaine</span>
        <span>Cliquer pour une série ciblée</span>
      </p>
      <div className="lg-programme">
        {domaines.map((d) => (
          <button
            key={d.category}
            className="lg-serie-ligne sans-niveau"
            disabled={occupe}
            onClick={() => lancer({ mode: "training", categorie: d.category })}
          >
            <span className="titre" style={{ "--part": `${d.part}%` } as React.CSSProperties}>
              {d.category}
              <i />
            </span>
            <span className="part">
              {d.mastered}/{d.skills}
            </span>
          </button>
        ))}
      </div>

      {accents.length > 1 && (
        <>
          <p className="mono-titre" style={{ marginTop: 30 }}>
            Les accents que tu entendras
          </p>
          <div className="lg-accents">
            {accents.map((a) => (
              <span key={a.etiquette} className="lg-accent-puce">
                {a.nom} · {a.etiquette}
              </span>
            ))}
          </div>
          <p className="lg-muted lg-small">
            Ils alternent d’une carte à l’autre. Une oreille habituée à un seul accent ne comprend
            que celui-là.
          </p>
        </>
      )}
    </div>
  );
}
