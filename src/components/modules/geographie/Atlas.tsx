"use client";

/**
 * L'Atlas — l'écran unique du module de géographie.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI UNE GRILLE, ET PAS DES ONGLETS
 *
 * Le contenu est un produit : quatre jeux × cinq cartes. La première version
 * mettait les cartes en onglets et redessinait les quatre mêmes cartouches à
 * chaque changement — mêmes titres, mêmes phrases, seuls les nombres
 * bougeaient. Vingt cases décrites cinq fois, et l'on ne voyait jamais plus du
 * cinquième de la matière.
 *
 * Un produit se montre en tableau. Chaque jeu s'explique UNE fois, sur sa
 * ligne ; chaque carte est une colonne ; chaque case est une partie. On voit
 * l'atlas entier, on voit où l'on en est partout, et il n'y a plus d'état à
 * retenir entre deux visites.
 *
 * Les deux natures de jeu restent annoncées, parce qu'elles n'apprennent pas
 * la même chose : un QUIZ fait reconnaître et départager, une CARTE fait
 * situer. Confondre les deux, c'est croire qu'on connaît un pays parce qu'on
 * sait le nom de sa capitale.
 */
import { useEffect, useState } from "react";
import type { CatalogueSkill, SkillProgressView } from "@/lib/api-types";
import { SERIES_SIZES } from "@/lib/study/scheduler";
import type { ScreenProps } from "../../App";
import { Fiches, PAGES, type PageFiche } from "./Fiches";

const CARTES = [
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

export function Atlas({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [series, setSeries] = useState<CatalogueSkill[]>([]);
  const [avancement, setAvancement] = useState<SkillProgressView[]>([]);
  const [attente, setAttente] = useState<string | null>(null);
  /* La page de référence ouverte, s'il y en a une. Elle n'est pas un écran de
     l'application : elle ne se retient pas, ne s'enregistre pas, et se ferme
     par un bouton. C'est de la consultation, pas de la navigation. */
  const [fiche, setFiche] = useState<PageFiche | null>(null);

  useEffect(() => {
    setChrome({ fil: "", accroche: "drapeaux · capitales · cartes" });
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

  if (fiche) return <Fiches page={fiche} ouvrir={setFiche} revenir={() => setFiche(null)} />;

  const posees = avancement.reduce((n, s) => n + s.seenCount, 0);
  const aRevoir = avancement.filter((s) => s.due).length;

  return (
    <div className="plateau atlas">
      <header className="atlas-tete">
        <h2>Quatre jeux, cinq cartes</h2>
        <p>
          Chaque case est une partie : le nombre est celui des questions, le trait sous lui ce qui a
          déjà été vu. Deux jeux se répondent en reconnaissant, deux se jouent en cliquant sur la carte.
        </p>
      </header>

      <div className="atlas-defile">
        <table className="atlas-grille">
          <thead>
            <tr>
              <th scope="col">
                <span className="visuellement-cache">Jeu</span>
              </th>
              {CARTES.map((c) => (
                <th key={c.cle} scope="col">
                  {c.nom}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {JEUX.map((jeu) => (
              <tr key={jeu.cle} className={jeu.genre === "Carte" ? "sur-carte" : ""}>
                {/* Le drapeau et le texte sont dans une boîte À L'INTÉRIEUR de la
                    cellule : un `display: flex` posé sur le <th> lui-même le
                    sortirait du tableau, et les colonnes cesseraient de
                    s'aligner d'une ligne à l'autre. */}
                <th scope="row">
                  <span className="ligne-jeu">
                    <span className="embleme">{jeu.embleme}</span>
                    <span className="quoi">
                      <span className="genre">{jeu.genre}</span>
                      <b>{jeu.nom}</b>
                      <span className="dit">{jeu.phrase}</span>
                    </span>
                  </span>
                </th>

                {CARTES.map((carte) => {
                  const serie = series.find((s) => s.slug === `geo-${jeu.cle}-${carte.cle}`);
                  if (!serie) {
                    return (
                      <td key={carte.cle} className="vide">
                        <span aria-hidden>—</span>
                        <span className="visuellement-cache">
                          {jeu.nom} : rien sur {carte.nom}
                        </span>
                      </td>
                    );
                  }

                  const suivi = avancement.find((s) => s.slug === serie.slug);

                  /* Pas de barre d'avancement ici. Un jeu ne se termine pas :
                     on y revient, et « 12 % » sur une série d'entraînement
                     laisserait croire qu'il y a un bout. Ce qui informe, c'est
                     le nombre de questions, et le fait qu'une série soit due. */
                  return (
                    <td key={carte.cle}>
                      <button
                        className={`case ${suivi?.due ? "due" : ""} ${suivi && !suivi.isNew ? "entamee" : ""}`}
                        disabled={attente !== null}
                        onClick={() => void jouer(serie.slug)}
                        title={`${serie.exerciseCount} questions${suivi?.due ? " · à revoir" : ""}`}
                        aria-label={`${jeu.nom} sur ${carte.nom} — ${serie.exerciseCount} questions${
                          suivi?.due ? ", à revoir" : ""
                        }`}
                      >
                        <b>{serie.exerciseCount}</b>
                        {suivi?.due && (
                          <span className="fanion" aria-hidden>
                            à revoir
                          </span>
                        )}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* La consultation, sous les jeux : on lit avant de jouer, et rien ici
          ne se compte. */}
      <section className="atlas-fiches">
        <p className="mono-titre">Consulter l’atlas</p>
        <p className="legende">
          Quatre pages à lire, sans exercice ni progression. On ne retient pas les capitales du monde
          en se trompant dix fois : on les lit d’abord.
        </p>
        <div className="rangee-fiches">
          {PAGES.map((f) => (
            <button key={f.cle} className="lien-fiche" onClick={() => setFiche(f.cle)}>
              <b>{f.nom}</b>
              <span>{f.quoi}</span>
            </button>
          ))}
        </div>
      </section>

      <footer className="atlas-pied">
        <span>
          <b>{posees}</b> réponses posées
          {aRevoir > 0 && (
            <>
              {" · "}
              <b>{aRevoir}</b> série{aRevoir > 1 ? "s" : ""} à revoir
            </>
          )}
        </span>
        <span className="source">
          Tracés : Natural Earth, domaine public. Les limites des mers sont conventionnelles.
        </span>
      </footer>
    </div>
  );
}
