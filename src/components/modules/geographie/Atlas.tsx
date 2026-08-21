"use client";

/**
 * L'Atlas — l'écran unique du module de géographie.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI IL NE RESSEMBLE PAS AUX AUTRES
 *
 * Les autres matières ont quatre onglets : accueil, série, catalogue,
 * progression. C'est la bonne forme quand il y a soixante séries à parcourir
 * et un cours à lire avant de s'exercer. La géographie n'a pas cette forme :
 * elle a une GRILLE — un continent, puis un jeu.
 *
 * Reprendre la coque à quatre onglets ici, c'était mettre la grille au bout
 * d'un couloir. On s'y perdait, et l'on s'y perdait d'autant plus que la
 * carte, qui est tout l'intérêt du module, se trouvait au bout du chemin le
 * plus long. Le module ne déclare donc aucun onglet, et cet écran est le seul.
 *
 * Les deux natures de jeu sont annoncées sur les cartouches, parce qu'elles
 * n'apprennent pas la même chose : un QUIZ fait reconnaître et départager,
 * une CARTE fait situer. Confondre les deux, c'est croire qu'on connaît un
 * pays parce qu'on sait le nom de sa capitale.
 */
import { useEffect, useState } from "react";
import type { CatalogueSkill, SkillProgressView } from "@/lib/api-types";
import { SERIES_SIZES } from "@/lib/study/scheduler";
import type { ScreenProps } from "../../App";

const CONTINENTS = [
  { cle: "europe", nom: "Europe" },
  { cle: "afrique", nom: "Afrique" },
  { cle: "asie", nom: "Asie" },
  { cle: "ameriques", nom: "Amériques" },
  { cle: "monde", nom: "Le monde" },
];

type Jeu = { cle: string; nom: string; phrase: string; genre: "Quiz" | "Carte"; embleme: React.ReactNode };

const JEUX: Jeu[] = [
  {
    cle: "drapeaux",
    nom: "Drapeaux",
    phrase: "Le pays est donné. Retrouve son drapeau parmi quatre.",
    genre: "Quiz",
    embleme: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M6 3v18" />
        <path d="M6 4h12l-2.5 4L18 12H6z" />
      </svg>
    ),
  },
  {
    cle: "capitales",
    nom: "Capitales",
    phrase: "Le pays est donné. Retrouve sa capitale parmi quatre.",
    genre: "Quiz",
    embleme: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.5" className="noyau" />
      </svg>
    ),
  },
  {
    cle: "situer",
    nom: "Situer sur la carte",
    phrase: "Le nom s’affiche. Clique le pays sur une carte muette.",
    genre: "Carte",
    embleme: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M12 21s6.5-6.2 6.5-11a6.5 6.5 0 0 0-13 0C5.5 14.8 12 21 12 21z" />
        <circle cx="12" cy="10" r="2.3" className="noyau" />
      </svg>
    ),
  },
  {
    cle: "mers",
    nom: "Mers et océans",
    phrase: "Rien n’est dessiné. Clique quand même au bon endroit.",
    genre: "Carte",
    embleme: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path d="M2 8c3-3 5 3 8 0s5 3 8 0" />
        <path d="M2 14c3-3 5 3 8 0s5 3 8 0" />
        <path d="M2 20c3-3 5 3 8 0s5 3 8 0" />
      </svg>
    ),
  },
];

/** Le continent ouvert la dernière fois. Revenir sur l'Europe à chaque visite
 *  serait rageant quand on travaille l'Afrique depuis trois jours. */
const CLE_CONTINENT = "atelier:geo:continent";

function continentMemorise(): string {
  if (typeof window === "undefined") return "europe";
  try {
    return window.localStorage.getItem(CLE_CONTINENT) ?? "europe";
  } catch {
    return "europe";
  }
}

export function Atlas({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [series, setSeries] = useState<CatalogueSkill[]>([]);
  const [avancement, setAvancement] = useState<SkillProgressView[]>([]);
  const [continent, setContinent] = useState("europe");
  const [attente, setAttente] = useState<string | null>(null);

  useEffect(() => {
    setChrome({ fil: "", accroche: "drapeaux · capitales · cartes" });
    setContinent(continentMemorise());
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

  const choisirContinent = (cle: string) => {
    setContinent(cle);
    try {
      window.localStorage.setItem(CLE_CONTINENT, cle);
    } catch {
      /* navigation privée : on continue sans mémoire */
    }
  };

  /* Une seule série part à la fois : sans ce verrou, deux clics rapides
     ouvrent deux parties et la première se perd sans rien enregistrer. */
  const jouer = async (slug: string) => {
    if (attente) return;
    setAttente(slug);
    try {
      /* La plus courte des longueurs offertes, LUE et non écrite en dur : le
         serveur n'accepte que celles-ci, et un nombre choisi à la main passait
         en mode invité — qui ne vérifie rien — pour échouer une fois connecté. */
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

  const nomContinent = CONTINENTS.find((c) => c.cle === continent)?.nom ?? "";
  const cartes = JEUX.map((jeu) => ({ jeu, serie: series.find((s) => s.slug === `geo-${jeu.cle}-${continent}`) }))
    /* Le planisphère n'a ni quiz de drapeaux ni quiz de capitales : à cette
       échelle, ils ne demanderaient rien de plus qu'à celle d'un continent. */
    .filter((c) => c.serie);

  const total = series.reduce((n, s) => n + s.exerciseCount, 0);
  const posees = avancement.reduce((n, s) => n + s.seenCount, 0);

  return (
    <div className="plateau atlas">
      <header className="atlas-tete">
        <h2>Choisis un continent, puis un jeu</h2>
        <p>
          Deux jeux se répondent en reconnaissant, deux se jouent en cliquant sur la carte. La partie
          commence tout de suite.
        </p>
      </header>

      <nav className="continents" aria-label="Continent">
        {CONTINENTS.map((c) => (
          <button
            key={c.cle}
            className={`continent ${c.cle === continent ? "actif" : ""}`}
            aria-current={c.cle === continent ? "true" : undefined}
            onClick={() => choisirContinent(c.cle)}
          >
            {c.nom}
          </button>
        ))}
      </nav>

      <div className="atlas-jeux">
        {cartes.length === 0 && <p className="legende attente">Chargement de l’atlas…</p>}

        {cartes.map(({ jeu, serie }) => {
          const suivi = avancement.find((s) => s.slug === serie!.slug);
          const questions = serie!.exerciseCount;
          const vu = Math.min(suivi?.seenCount ?? 0, questions);
          const part = questions ? Math.round((vu / questions) * 100) : 0;

          return (
            <article key={jeu.cle} className={`jeu-carte ${jeu.genre === "Carte" ? "sur-carte" : ""}`}>
              <span className="embleme">{jeu.embleme}</span>
              <span className="genre">{jeu.genre}</span>

              <h3>{jeu.nom}</h3>
              <p className="dit">{jeu.phrase}</p>

              <p className="chiffre">
                <b>{questions}</b> questions
                {suivi?.due && <span className="fanion">à revoir</span>}
              </p>

              <span className="piste" aria-hidden>
                <i style={{ width: `${Math.max(part, 2)}%` }} />
              </span>
              <p className="legende">
                {suivi?.isNew ? "jamais ouverte" : `${vu} sur ${questions} déjà vues · palier ${suivi?.box ?? 0}`}
              </p>

              <button className="plein" disabled={attente !== null} onClick={() => void jouer(serie!.slug)}>
                {attente === serie!.slug ? "Un instant…" : "Jouer"}
              </button>
            </article>
          );
        })}
      </div>

      <footer className="atlas-pied">
        <span>
          <b>{nomContinent}</b> · {posees} réponses posées sur {total} questions dans l’atlas
        </span>
        <span className="source">
          Tracés : Natural Earth, domaine public. Les limites des mers sont conventionnelles.
        </span>
      </footer>
    </div>
  );
}
