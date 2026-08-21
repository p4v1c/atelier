"use client";

/**
 * Un cours à lire, puis un bouton pour se tester dessus.
 *
 * L'écran est générique : il rend n'importe quelle `LessonDocument`, d'où
 * qu'elle vienne. Le module Culture générale y range ses 238 leçons ; un futur
 * module de cours personnels y rangera les siens sans écrire une ligne d'écran.
 *
 * Il s'ouvrait en pleine largeur, avec ses actions tout en bas, hors de vue
 * après trois écrans de lecture. Il prend maintenant le plateau à rail : le
 * texte à gauche, borné à sa mesure de lecture, et à droite le sommaire des
 * sections, les faits du point et les deux boutons — visibles où qu'on en soit
 * dans le cours.
 */
import { useEffect, useState } from "react";
import type { LessonPayload, LessonVisuel } from "@/lib/api-types";
import { NoContentError } from "@/lib/client/engine";
import type { ScreenProps } from "../App";

type Props = ScreenProps & { slug: string; moduleId: string };

/* ────────────────────────────── visuels ────────────────────────────── */

function Visuel({ v }: { v: LessonVisuel }) {
  switch (v.type) {
    case "frise":
      return (
        <figure className="visuel frise">
          <figcaption>{v.titre}</figcaption>
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
          <figcaption>{v.titre}</figcaption>
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
          <figcaption>{v.titre}</figcaption>
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
          <figcaption>{v.titre}</figcaption>
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
          {v.note && <p className="note">{v.note}</p>}
        </figure>
      );

    case "barres": {
      const max = Math.max(...v.donnees.map((d) => d.valeur), 1);
      return (
        <figure className="visuel barres">
          <figcaption>{v.titre}</figcaption>
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
          <figcaption>{v.titre}</figcaption>
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
          {v.legende && <figcaption>{v.legende}</figcaption>}
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
    <div className="plateau avec-rail">
      <article className="principal lecon">
        <header>
          <p className="mono-titre">{data.category}</p>
          <h2>{data.lesson.titre}</h2>
        </header>

        {data.lesson.sections.map((section, i) => (
          <section key={i} id={`section-${i}`}>
            <h3>{section.titre}</h3>
            {section.texte.split(/\n{2,}/).map((paragraphe, j) => (
              <p key={j}>{paragraphe}</p>
            ))}
            {section.visuels?.map((v, j) => (
              <Visuel key={j} v={v} />
            ))}
          </section>
        ))}

        {data.lesson.sources && data.lesson.sources.length > 0 && (
          <section className="sources">
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
      </article>

      <aside className="rail">
        <p className="mono-titre">Dans ce cours</p>
        <nav className="sommaire">
          {data.lesson.sections.map((section, i) => (
            <a key={i} href={`#section-${i}`}>
              {section.titre}
            </a>
          ))}
        </nav>

        <div className="fiche-faits">
          <p className="fiche-fait">
            <span>Domaine</span>
            <b>{data.category}</b>
          </p>
          <p className="fiche-fait">
            <span>Difficulté</span>
            <b>{"\u25cf".repeat(Math.max(1, data.difficulty))}</b>
          </p>
          <p className="fiche-fait">
            <span>Palier</span>
            <b>{data.isNew ? "jamais travaillé" : `${data.box}/5`}</b>
          </p>
          <p className="fiche-fait">
            <span>Questions</span>
            <b>{data.exerciseCount}</b>
          </p>
        </div>

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
