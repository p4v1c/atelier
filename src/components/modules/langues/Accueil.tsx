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

export function AccueilLangue({ engine, moduleId, accents, setScreen, setChrome }: Props) {
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

  /* Les catégories, avec leur avancement : c'est le programme. */
  const series = progress.categories
    .map((c) => {
      const dedans = progress.skills.filter((s) => s.category === c.category);
      const niveau = dedans.find((s) => s.level)?.level ?? null;
      return {
        ...c,
        niveau,
        part: c.skills ? (c.mastered / c.skills) * 100 : 0,
      };
    })
    .sort((a, b) => (a.niveau ?? "Z").localeCompare(b.niveau ?? "Z"));

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
          Cliquer pour réviser la série
        </span>
      </h2>
      <div className="lg-programme">
        {series.map((s) => (
          <button
            key={s.category}
            className="lg-serie-ligne"
            disabled={occupe}
            onClick={() => lancer({ mode: "training", categorie: s.category })}
          >
            {s.niveau ? <span className="niveau">{s.niveau}</span> : <span />}
            <span className="titre" style={{ "--part": `${s.part}%` } as React.CSSProperties}>
              {s.category}
              <i />
            </span>
            <span className="part">
              {s.mastered}/{s.skills}
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
