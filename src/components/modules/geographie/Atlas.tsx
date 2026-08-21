"use client";

/**
 * L'Atlas — l'écran unique du module de géographie.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI IL NE RESSEMBLE PAS AUX AUTRES
 *
 * Les autres matières ont quatre onglets : accueil, série, catalogue,
 * progression. C'est la bonne forme quand il y a soixante séries à parcourir
 * et un cours à lire avant de s'exercer. La géographie n'a rien de tout cela.
 * Elle a trois façons de lire la même carte, et une seule chose à faire :
 * cliquer sur l'une et jouer.
 *
 * Reprendre la coque à quatre onglets ici, c'était mettre trois portes
 * derrière un couloir. On s'y perdait — et l'on s'y perdait d'autant plus que
 * la carte, qui est tout l'intérêt du module, se trouvait au bout du chemin le
 * plus long. Elle est maintenant à un clic.
 *
 * Le module ne déclare donc AUCUN onglet : l'en-tête n'en affiche pas, et cet
 * écran est le seul. Ce qu'un onglet « progression » aurait montré tient sur
 * les cartes elles-mêmes.
 */
import { useEffect, useState } from "react";
import type { CatalogueSkill, SkillProgressView } from "@/lib/api-types";
import { SERIES_SIZES } from "@/lib/study/scheduler";
import type { ScreenProps } from "../../App";

/** Les trois modes, dans l'ordre où on les propose. */
const MODES = [
  {
    slug: "geo-drapeaux",
    nom: "Drapeaux",
    phrase: "Un drapeau s’affiche. Clique le pays.",
    emblème: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M6 3v18" />
        <path d="M6 4h12l-2.5 4L18 12H6z" />
      </svg>
    ),
  },
  {
    slug: "geo-capitales",
    nom: "Capitales",
    phrase: "Une ville est donnée. Clique son pays.",
    emblème: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.5" className="noyau" />
      </svg>
    ),
  },
  {
    slug: "geo-mers",
    nom: "Mers et océans",
    phrase: "Rien n’est dessiné. Clique quand même.",
    emblème: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M2 8c3-3 5 3 8 0s5 3 8 0" />
        <path d="M2 14c3-3 5 3 8 0s5 3 8 0" />
        <path d="M2 20c3-3 5 3 8 0s5 3 8 0" />
      </svg>
    ),
  },
];

export function Atlas({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [series, setSeries] = useState<CatalogueSkill[]>([]);
  const [avancement, setAvancement] = useState<SkillProgressView[]>([]);
  const [attente, setAttente] = useState<string | null>(null);

  useEffect(() => {
    setChrome({ fil: "", accroche: "cartes · drapeaux · mers" });
  }, [setChrome]);

  useEffect(() => {
    let vivant = true;
    void Promise.all([engine.catalogue(moduleId), engine.progress(moduleId)])
      .then(([cat, prog]) => {
        if (!vivant) return;
        setSeries(cat.skills);
        setAvancement(prog.skills);
      })
      .catch(() => undefined);
    return () => {
      vivant = false;
    };
  }, [engine, moduleId]);

  /* Une seule série part à la fois : sans ce verrou, deux clics rapides
     ouvrent deux parties et la première se perd sans rien enregistrer. */
  const jouer = async (slug: string) => {
    if (attente) return;
    setAttente(slug);
    try {
      /* La plus courte des longueurs offertes. Elle est LUE et non écrite en
         dur : le serveur n'accepte que celles-ci, et un nombre choisi à la
         main passait en mode invité — qui ne vérifie rien — pour échouer une
         fois connecté. Une carte se joue en deux minutes ; c'est le format. */
      const session = await engine.start({
        mode: "skill",
        size: SERIES_SIZES[0]!,
        skill: slug,
        category: null,
        moduleId,
      });
      setScreen({ name: "serie", session });
    } catch {
      setAttente(null);
    }
  };

  const vues = avancement.reduce((n, s) => n + s.seenCount, 0);
  const questions = series.reduce((n, s) => n + s.exerciseCount, 0);

  return (
    <div className="plateau atlas">
      <header className="atlas-tete">
        <h2>Trois façons de lire la même carte</h2>
        <p>
          Tout se joue au clic, sur un fond muet. Choisis une série : elle commence tout de suite.
        </p>
      </header>

      <div className="atlas-modes">
        {MODES.map((mode) => {
          const serie = series.find((s) => s.slug === mode.slug);
          const suivi = avancement.find((s) => s.slug === mode.slug);
          const total = serie?.exerciseCount ?? 0;
          const vu = Math.min(suivi?.seenCount ?? 0, total);
          const part = total ? Math.round((vu / total) * 100) : 0;

          return (
            <article key={mode.slug} className={`mode-carte ${suivi?.due ? "due" : ""}`}>
              <span className="embleme">{mode.emblème}</span>

              <h3>{mode.nom}</h3>
              <p className="dit">{mode.phrase}</p>

              <p className="chiffre">
                <b>{total || "—"}</b> questions
                {suivi?.due && <span className="fanion">à revoir</span>}
              </p>

              <span className="piste" aria-hidden>
                <i style={{ width: `${Math.max(part, 2)}%` }} />
              </span>
              <p className="legende">
                {suivi?.isNew ? "jamais ouverte" : `${vu} sur ${total} déjà vues · palier ${suivi?.box ?? 0}`}
              </p>

              <button
                className="plein"
                disabled={!serie || attente !== null}
                onClick={() => void jouer(mode.slug)}
              >
                {attente === mode.slug ? "Un instant…" : "Jouer"}
              </button>

              {serie && <p className="astuce">{serie.tip}</p>}
            </article>
          );
        })}
      </div>

      <footer className="atlas-pied">
        <span>
          <b>{vues}</b> réponses posées sur {questions} questions
        </span>
        <span className="source">
          Tracés : Natural Earth, domaine public. Les limites des mers sont conventionnelles.
        </span>
      </footer>
    </div>
  );
}
