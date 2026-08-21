"use client";

/**
 * L'accueil d'un module de langue.
 *
 * Il répond à trois questions dans cet ordre : où j'en suis (le niveau), qu'est-ce
 * que je fais maintenant (le bouton), et par quoi je peux travailler (les modes).
 *
 * Ce n'est pas une liste de leçons : apprendre une langue, c'est alterner les
 * façons de la pratiquer. D'où les six modes, qui tapent tous dans le même
 * contenu par des angles différents.
 */
import { useEffect, useState } from "react";
import type { DictationsPayload, ProgressPayload } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import { complementDe } from "@/lib/elision";
import { SENS_NIVEAU, type Niveau } from "@/modules/langues/commun";
import type { ScreenProps } from "../../App";

type Props = ScreenProps & { accents: { etiquette: string; nom: string }[] };

const MODES: {
  cle: string;
  pictogramme: string;
  nom: string;
  quoi: string;
  categorie?: string;
}[] = [
  {
    cle: "vocabulaire",
    pictogramme: "📇",
    nom: "Vocabulaire",
    quoi: "Cartes à retourner et traductions à écrire, choisies par le planificateur.",
  },
  {
    cle: "conjugaison",
    pictogramme: "🔀",
    nom: "Conjugaison",
    quoi: "Un cours rédigé, puis les formes en situation.",
    categorie: "Conjugaison",
  },
  {
    cle: "grammaire",
    pictogramme: "📐",
    nom: "Grammaire",
    quoi: "Articles, modaux, conditionnelles, pronoms — chaque série a son chapitre.",
    categorie: "Grammaire en contexte",
  },
  {
    cle: "prononciation",
    pictogramme: "🗣️",
    nom: "Prononciation",
    quoi: "Accent tonique et sons qui piègent. On lit à voix haute, le navigateur écoute.",
    categorie: "Prononciation",
  },
  {
    cle: "faux-amis",
    pictogramme: "⚠️",
    nom: "Faux amis",
    quoi: "Les mots qui ressemblent au français et disent autre chose.",
    categorie: "Faux amis",
  },
  {
    cle: "expressions",
    pictogramme: "💬",
    nom: "Expressions",
    quoi: "Les tournures qu'on entend partout et qu'aucun cours n'enseigne.",
    categorie: "Expressions",
  },
  {
    cle: "faiblesses",
    pictogramme: "🎯",
    nom: "Mes lacunes",
    quoi: "Uniquement ce que tu rates. C'est là qu'on progresse le plus vite.",
  },
];

export function AccueilLangue({
  engine,
  user,
  moduleId,
  accents,
  setScreen,
  setChrome,
}: Props) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [dictees, setDictees] = useState<DictationsPayload | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [occupe, setOccupe] = useState(false);

  useEffect(() => setChrome({ fil: "", accroche: "" }), [setChrome]);

  useEffect(() => {
    let vivant = true;
    engine
      .progress(moduleId)
      .then((p) => vivant && setProgress(p))
      .catch(() => vivant && setMessage("Progression indisponible."));
    engine
      .dictations(moduleId)
      .then((d) => vivant && setDictees(d))
      .catch(() => undefined);
    return () => {
      vivant = false;
    };
  }, [engine, moduleId]);

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

  if (!progress) return <p className="lg-muted">Chargement…</p>;

  const niveaux = progress.niveaux ?? [];
  const enCours = progress.niveauEstime;
  const tenu = progress.niveauAcquis;
  const aRevoir = progress.due;
  const jamaisVues = progress.unseen;

  const avecCours = progress.skills.filter((s) => s.hasLesson).length;

  /* Combien de séries par catégorie, pour ne proposer que ce qui existe. */
  const parCategorie = new Map<string, number>();
  for (const s of progress.skills) {
    parCategorie.set(s.category, (parCategorie.get(s.category) ?? 0) + 1);
  }

  return (
    <>
      <p className="lg-eyebrow">{user ? complementDe("Le carnet", user.pseudo) : "Sans compte"}</p>
      <h1>
        {aRevoir > 0
          ? `${aRevoir} série${aRevoir > 1 ? "s" : ""} à revoir aujourd’hui.`
          : jamaisVues > 0
            ? "Rien à revoir : prends de l’avance."
            : "Tout est à jour."}
      </h1>

      <div className="lg-niveau-bandeau">
        <span className="lg-badge">{enCours ?? "—"}</span>
        <span className="lg-niveau-texte">
          <b>
            {tenu
              ? `${tenu} tenu, ${enCours} en cours`
              : enCours
                ? `${enCours} en cours`
                : "Niveau pas encore établi"}
          </b>
          <span>{enCours ? SENS_NIVEAU[enCours as Niveau] : "Fais une première série pour te situer."}</span>
        </span>
        <button
          className="lg-btn"
          disabled={occupe}
          onClick={() => lancer({ mode: aRevoir > 0 ? "training" : "training" })}
        >
          {aRevoir > 0 ? "Réviser maintenant" : "Commencer"}
        </button>
      </div>

      {message && <p className="lg-alerte">{message}</p>}

      {niveaux.length > 0 && (
        <>
          <h2>Où tu en es</h2>
          <div className="lg-echelle">
            {niveaux.map((n) => (
              <div
                key={n.niveau}
                className={`lg-echelon ${n.part >= 80 ? "tenu" : n.niveau === enCours ? "encours" : ""}`}
              >
                <span className="n">{n.niveau}</span>
                <span className="p">
                  {n.acquis} / {n.total} séries
                </span>
                <span className="piste">
                  <i style={{ width: `${n.part}%` }} />
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>Comment travailler</h2>
      <div className="lg-modes">
        {MODES.filter((m) => !m.categorie || (parCategorie.get(m.categorie) ?? 0) > 0).map((m) => {
          const compte = m.categorie ? parCategorie.get(m.categorie) : progress.skills.length;
          const inactif = m.cle === "faiblesses" && aRevoir === 0;
          return (
            <button
              key={m.cle}
              className="lg-mode"
              disabled={occupe || inactif}
              onClick={() =>
                lancer(
                  m.cle === "faiblesses"
                    ? { mode: "weakness" }
                    : { mode: "training", categorie: m.categorie }
                )
              }
            >
              <span className="pictogramme" aria-hidden="true">
                {m.pictogramme}
              </span>
              <span className="nom">{m.nom}</span>
              <span className="quoi">{m.quoi}</span>
              <span className="compte">
                {m.cle === "faiblesses"
                  ? aRevoir > 0
                    ? `${aRevoir} en attente`
                    : "rien en attente"
                  : `${compte} série${(compte ?? 0) > 1 ? "s" : ""}`}
              </span>
            </button>
          );
        })}

        {dictees && dictees.dictations.length > 0 && (
          <button className="lg-mode" onClick={() => setScreen({ name: "dictees" })}>
            <span className="pictogramme" aria-hidden="true">
              🎧
            </span>
            <span className="nom">Dictées</span>
            <span className="quoi">
              Un texte lu à voix haute, à retranscrire. L’accent change d’une dictée à l’autre.
            </span>
            <span className="compte">{dictees.dictations.length} dictées</span>
          </button>
        )}

        <button className="lg-mode" onClick={() => setScreen({ name: "catalogue" })}>
          <span className="pictogramme" aria-hidden="true">
            📖
          </span>
          <span className="nom">Les cours</span>
          <span className="quoi">
            Des chapitres rédigés — conjugaison, grammaire, écrit — puis les formes en situation.
          </span>
          <span className="compte">{avecCours} cours</span>
        </button>

        <button className="lg-mode" onClick={() => setScreen({ name: "catalogue" })}>
          <span className="pictogramme" aria-hidden="true">
            📚
          </span>
          <span className="nom">Le programme</span>
          <span className="quoi">
            Toutes les séries, par niveau et par thème, avec les cours qui vont avec.
          </span>
          <span className="compte">{progress.skills.length} séries</span>
        </button>
      </div>

      {accents.length > 1 && (
        <>
          <h2>Les accents que tu entendras</h2>
          <div className="lg-accents">
            {accents.map((a) => (
              <span key={a.etiquette} className="lg-accent-puce actif">
                {a.nom} · {a.etiquette}
              </span>
            ))}
          </div>
          <p className="lg-muted lg-small">
            Les dictées alternent délibérément. Une oreille habituée à un seul accent ne comprend
            que celui-là.
          </p>
        </>
      )}
    </>
  );
}
