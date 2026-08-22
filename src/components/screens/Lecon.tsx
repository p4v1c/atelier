"use client";

/**
 * Un cours à lire, puis un bouton pour se tester dessus.
 *
 * L'écran est générique : il rend n'importe quelle `LessonDocument`, d'où
 * qu'elle vienne. Le module Culture générale y range ses leçons ; un futur
 * module de cours personnels y rangera les siennes sans écrire une ligne
 * d'écran.
 *
 * Depuis la refonte, il ne rend plus un article sur le fond sombre de la
 * coque : il rend une PAGE DE MANUEL. Les codes du manuel scolaire sont peu
 * nombreux et connus de tout le monde — encre sur papier, parties numérotées,
 * lettrine d'ouverture, documents appelés « Doc. 1 », « Doc. 2 », repères en
 * tête de chapitre, encadré de fin. On les reprend tous, mais un par un et
 * sans les empiler : la critique la mieux documentée des manuels réels est
 * qu'ils multiplient tant les signaux de distinction que la page redevient
 * illisible. Ici, un seul chemin de lecture, du haut vers le bas.
 *
 * Le papier n'est pas une couleur inventée pour l'occasion : ce sont les
 * jetons `--exo-*`, ceux de la surface d'exercice. Le cours et l'exercice se
 * tiennent donc sur le même papier, ce qui est exactement le rapport qu'ont
 * un manuel et son cahier.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import type { LessonPayload, LessonVisuel } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import type { ScreenProps } from "../App";

type Props = ScreenProps & { slug: string; moduleId: string };

/* ────────────────────────────── visuels ────────────────────────────── */

/**
 * Un visuel de manuel est un DOCUMENT : il porte un numéro, un titre, et se
 * cite depuis le texte. Le numéro court sur toute la leçon, sans repartir à
 * un à chaque partie — c'est la convention des manuels d'histoire.
 */
function Visuel({ v, numero }: { v: LessonVisuel; numero: number }) {
  const appel = (titre: string) => (
    <figcaption>
      <span className="doc-num">Doc. {numero}</span>
      <span className="doc-titre">{titre}</span>
    </figcaption>
  );

  switch (v.type) {
    case "frise":
      return (
        <figure className="visuel frise">
          {appel(v.titre)}
          <ol>
            {v.evenements.map((e, i) => (
              <li key={i}>
                <span className="date">{e.date}</span>
                <span className="label">{e.label}</span>
                {e.texte && <span className="detail">{e.texte}</span>}
              </li>
            ))}
          </ol>
        </figure>
      );

    case "chiffres":
      return (
        <figure className="visuel chiffres">
          {appel(v.titre)}
          <ul>
            {v.items.map((c, i) => (
              <li key={i}>
                <b>{c.valeur}</b>
                <span className="label">{c.label}</span>
                {c.texte && <span className="detail">{c.texte}</span>}
              </li>
            ))}
          </ul>
        </figure>
      );

    case "etapes":
      return (
        <figure className="visuel etapes">
          {appel(v.titre)}
          <ol>
            {v.etapes.map((e, i) => (
              <li key={i}>
                <span className="label">{e.titre}</span>
                <span className="detail">{e.texte}</span>
              </li>
            ))}
          </ol>
        </figure>
      );

    case "tableau":
      return (
        <figure className="visuel tableau">
          {appel(v.titre)}
          {/* Un tableau large défile dans son cadre : la page, jamais. */}
          <div className="defilant">
            <table>
              <thead>
                <tr>
                  {v.colonnes.map((c, i) => (
                    <th key={i}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {v.lignes.map((ligne, i) => (
                  <tr key={i}>
                    {ligne.map((cellule, j) => (
                      <td key={j}>{cellule}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Sur un écran étroit, le tableau déborde de son cadre et défile :
              rien ne le dit à l'œil, il faut donc l'écrire. La ligne ne
              paraît que là où le débordement est possible. */}
          <p className="defilant-indice">Tableau large — faire glisser pour lire la suite.</p>
          {v.note && <p className="note">{v.note}</p>}
        </figure>
      );

    case "barres": {
      const max = Math.max(...v.donnees.map((d) => d.valeur), 1);
      return (
        <figure className="visuel barres">
          {appel(v.titre)}
          <ul>
            {v.donnees.map((d, i) => (
              <li key={i}>
                <span className="label">{d.label}</span>
                <span className="piste">
                  <span className="remplissage" style={{ width: `${(d.valeur / max) * 100}%` }} />
                </span>
                <span className="valeur">{d.affichage ?? d.valeur}</span>
              </li>
            ))}
          </ul>
          {v.note && <p className="note">{v.note}</p>}
        </figure>
      );
    }

    case "comparaison":
      return (
        <figure className="visuel comparaison">
          {appel(v.titre)}
          <div className="colonnes">
            {v.colonnes.map((c, i) => (
              <div key={i}>
                <h4>{c.titre}</h4>
                <ul>
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </figure>
      );

    case "image":
      return (
        <figure className="visuel image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={v.src} alt={v.alt ?? v.legende ?? ""} />
          <figcaption>
            <span className="doc-num">Doc. {numero}</span>
            {v.legende && <span className="doc-titre">{v.legende}</span>}
          </figcaption>
        </figure>
      );

    default:
      return null;
  }
}

/* ────────────────────────────── l'écran ────────────────────────────── */

export function Lecon({ engine, slug, moduleId, setScreen, setChrome }: Props) {
  const [data, setData] = useState<LessonPayload | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  /** Partie en cours de lecture : elle s'allume dans le sommaire. */
  const [partieActive, setPartieActive] = useState(0);
  /** Part du cours parcourue, pour le filet de progression en tête de page. */
  const [avancee, setAvancee] = useState(0);
  const page = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let vivant = true;
    // Par le moteur, et non par l'API : c'est lui qui sait si l'on est
    // connecté, et donc quelle route interroger.
    engine
      .lesson(slug)
      .then((d) => vivant && setData(d))
      .catch(() => vivant && setMessage("Ce cours n’a pas pu être chargé."));
    return () => {
      vivant = false;
    };
  }, [engine, slug]);

  useEffect(() => {
    setChrome({
      fil: data?.category ?? "Leçon",
      accroche: data
        ? `Lis le cours, puis teste-toi sur ${data.exerciseCount} questions.`
        : "Chargement du cours…",
    });
  }, [data, setChrome]);

  /*
   * Numérotation continue des documents : la partie i commence au numéro
   * cumulé des visuels des parties précédentes. Calculé une fois, pas à
   * chaque rendu de figure.
   */
  const docs = useMemo(() => {
    const offsets: number[] = [];
    let n = 0;
    for (const s of data?.lesson.sections ?? []) {
      offsets.push(n);
      n += s.visuels?.length ?? 0;
    }
    return { offsets, total: n };
  }, [data]);

  /*
   * Où en est-on ? Deux repères tenus par le même écouteur de défilement :
   * la partie visible en haut de l'écran, et la part de page parcourue. Un
   * IntersectionObserver ne donnerait que la première, et se tromperait sur
   * les parties plus hautes que la fenêtre.
   */
  useEffect(() => {
    if (!data) return;
    const el = page.current;
    if (!el) return;

    /*
     * Ce n'est pas la fenêtre qui défile au large : la coque tient la hauteur
     * de l'écran et confie le défilement à la colonne. On remonte donc
     * jusqu'au premier ancêtre qui déborde, et on l'écoute lui. Sous 780px la
     * coque rend la main à la page, et la recherche retombe sur window : le
     * même code sert les deux cas.
     */
    let boite: HTMLElement | Window = window;
    for (let p = el.parentElement; p; p = p.parentElement) {
      const flux = getComputedStyle(p).overflowY;
      if (flux === "auto" || flux === "scroll") {
        boite = p;
        break;
      }
    }

    const suivre = () => {
      const fenetre = boite === window ? window.innerHeight : (boite as HTMLElement).clientHeight;
      const repere = boite === window ? 0 : (boite as HTMLElement).getBoundingClientRect().top;
      const haut = el.getBoundingClientRect().top - repere;
      const hauteur = el.offsetHeight - fenetre;
      setAvancee(hauteur > 0 ? Math.min(1, Math.max(0, -haut / hauteur)) : 1);

      let courante = 0;
      el.querySelectorAll<HTMLElement>("[data-partie]").forEach((t) => {
        // 140px sous le haut de la zone lue : le titre est alors « passé ».
        if (t.getBoundingClientRect().top - repere < 140) courante = Number(t.dataset.partie);
      });
      setPartieActive(courante);
    };

    suivre();
    boite.addEventListener("scroll", suivre, { passive: true });
    window.addEventListener("resize", suivre);
    return () => {
      boite.removeEventListener("scroll", suivre);
      window.removeEventListener("resize", suivre);
    };
  }, [data]);

  const seTester = async () => {
    setMessage(null);
    try {
      const session = await engine.start({
        mode: "skill",
        size: 10,
        category: null,
        skill: slug,
        moduleId,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Test impossible.");
    }
  };

  if (message && !data) {
    return (
      <div className="plateau">
        <p className="alerte">{message}</p>
        <button className="lien" onClick={() => setScreen({ name: "catalogue" })}>
          Retour au catalogue
        </button>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="plateau">
        <p className="legende attente">Chargement du cours…</p>
      </div>
    );
  }

  return (
    <div className="plateau avec-rail lecon-plateau">
      <div className="manuel-colonne">
        <div className="manuel-progression" aria-hidden="true">
          <i style={{ transform: `scaleX(${avancee})` }} />
        </div>

        <article className="principal manuel" ref={page}>
          <header className="manuel-ouverture">
            <p className="manuel-eyebrow">
              Chapitre <span className="sep">·</span> {data.category}
            </p>
            <h2>{data.lesson.titre}</h2>

            {/* Les repères de tête de chapitre : ce que la page contient, en
                un coup d'œil, avant d'y entrer. */}
            <dl className="manuel-reperes">
              <div>
                <dt>Parties</dt>
                <dd>{data.lesson.sections.length}</dd>
              </div>
              {docs.total > 0 && (
                <div>
                  <dt>Documents</dt>
                  <dd>{docs.total}</dd>
                </div>
              )}
              <div>
                <dt>Questions</dt>
                <dd>{data.exerciseCount}</dd>
              </div>
              <div>
                <dt>Difficulté</dt>
                <dd className="pastilles">{"●".repeat(Math.max(1, data.difficulty))}</dd>
              </div>
              <div>
                <dt>Palier</dt>
                <dd>{data.isNew ? "neuf" : `${data.box}/5`}</dd>
              </div>
            </dl>
            {/* Le plan du chapitre, replié. Il ne paraît que là où le rail a
                disparu — sur téléphone, et sur les fenêtres étroites. */}
            <details className="manuel-plan">
              <summary>Plan du chapitre</summary>
              <ol>
                {data.lesson.sections.map((section, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`}>{section.titre}</a>
                  </li>
                ))}
              </ol>
            </details>
          </header>

          {data.lesson.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="manuel-partie">
              <h3 data-partie={i}>
                <span className="manuel-num" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="manuel-titre-partie">{section.titre}</span>
              </h3>
              {section.texte.split(/\n{2,}/).map((paragraphe, j) => (
                <p key={j} className={i === 0 && j === 0 ? "lettrine" : undefined}>
                  {paragraphe}
                </p>
              ))}
              {section.visuels?.map((v, j) => (
                <Visuel key={j} v={v} numero={(docs.offsets[i] ?? 0) + j + 1} />
              ))}
            </section>
          ))}

          {data.lesson.sources && data.lesson.sources.length > 0 && (
            <section className="manuel-encadre sources">
              <h3>Pour aller voir plus loin</h3>
              <ul>
                {data.lesson.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <p className="manuel-colophon">Fin du chapitre</p>

          {/* Sous la page, à portée de pouce : le manuel se referme sur son
              exercice. Le rail dit la même chose, mais il n'existe pas sur
              téléphone. */}
          <div className="manuel-fin">
            {message && <p className="alerte">{message}</p>}
            <button className="plein" onClick={seTester}>
              Me tester sur ce cours
            </button>
            <button className="creux" onClick={() => setScreen({ name: "catalogue" })}>
              Retour au catalogue
            </button>
          </div>
        </article>
      </div>

      <aside className="rail">
        <p className="mono-titre">Sommaire</p>
        <nav className="sommaire manuel-sommaire">
          {data.lesson.sections.map((section, i) => (
            <a key={i} href={`#section-${i}`} className={i === partieActive ? "actif" : undefined}>
              <span className="n">{i + 1}</span>
              <span className="t">{section.titre}</span>
            </a>
          ))}
        </nav>

        {message && <p className="alerte">{message}</p>}

        <button className="plein" style={{ width: "100%", marginBottom: 10 }} onClick={seTester}>
          Me tester sur ce cours
        </button>
        <button
          className="creux"
          style={{ width: "100%" }}
          onClick={() => setScreen({ name: "catalogue" })}
        >
          Retour au catalogue
        </button>

        <p className="rail-bas">Le cours se relit autant de fois qu’on veut : il ne compte pas de palier.</p>
      </aside>
    </div>
  );
}
