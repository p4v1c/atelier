"use client";

/**
 * Le catalogue, en deux volets : la liste à gauche, la fiche à droite.
 *
 * Six cents points ne se parcourent pas en cartes dépliantes. La liste tient
 * en une colonne dense qu'on balaie à l'œil ou aux flèches ; la fiche du point
 * choisi reste à la même place, ce qui permet de comparer sans rien perdre.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import type { CataloguePayload, CatalogueSkill } from "@/lib/api-types";
import { MASTERY_BOX } from "@/lib/study/scheduler";
import { NoContentError } from "@/lib/client/engine";
import type { ScreenProps } from "../App";

/** Recherche insensible aux accents : « eleve » doit trouver « élève ». */
function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function Catalogue({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [data, setData] = useState<CataloguePayload | null>(null);
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState<string | null>(null);
  const [niveau, setNiveau] = useState<string | null>(null);
  const [choisi, setChoisi] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const listeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setData(null);
    setChoisi(null);
    void engine.catalogue(moduleId).then((d) => {
      setData(d);
      setChrome({ fil: "", accroche: "" });
    });
  }, [engine, moduleId, setChrome]);

  const liste = useMemo(() => {
    if (!data) return [];
    const q = normaliser(recherche.trim());
    return data.skills.filter((s) => {
      if (categorie && s.category !== categorie) return false;
      if (niveau && s.level !== niveau) return false;
      if (!q) return true;
      return (
        normaliser(s.title).includes(q) ||
        normaliser(s.statement).includes(q) ||
        normaliser(s.tip).includes(q)
      );
    });
  }, [data, recherche, categorie, niveau]);

  /* Le premier point de la liste est choisi d'office : la fiche n'est jamais
     vide, et la liste ne se lit pas sans son commentaire. */
  useEffect(() => {
    if (liste.length === 0) {
      setChoisi(null);
      return;
    }
    if (!choisi || !liste.some((s) => s.slug === choisi)) setChoisi(liste[0]!.slug);
  }, [liste, choisi]);

  const fiche: CatalogueSkill | null = liste.find((s) => s.slug === choisi) ?? null;

  const travailler = async (slug: string) => {
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
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Entraînement impossible.");
    }
  };

  /** Les flèches parcourent la liste, Entrée lance la série. */
  const auClavier = (e: React.KeyboardEvent) => {
    if (!fiche) return;
    const i = liste.findIndex((s) => s.slug === fiche.slug);
    if (e.key === "ArrowDown" && i < liste.length - 1) {
      e.preventDefault();
      setChoisi(liste[i + 1]!.slug);
    } else if (e.key === "ArrowUp" && i > 0) {
      e.preventDefault();
      setChoisi(liste[i - 1]!.slug);
    } else if (e.key === "Enter" && !fiche.disputed) {
      e.preventDefault();
      void travailler(fiche.slug);
    }
  };

  if (!data) {
    return (
      <div className="plateau">
        <p className="legende attente">Chargement du catalogue…</p>
      </div>
    );
  }

  const voc = data.vocabulaire;

  return (
    <div className="deux-volets" onKeyDown={auClavier} tabIndex={-1} ref={listeRef}>
      <div className="volet-liste">
        <div className="chercher-barre">
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder={`Chercher ${voc.skill === "règle" ? "une règle" : `un${voc.skill === "notion" ? "e" : ""} ${voc.skill}`}, un énoncé, une astuce…`}
            autoComplete="off"
          />
          <span className="combien">
            {liste.length} {liste.length > 1 ? voc.skillPluriel : voc.skill} sur {data.skills.length}
          </span>
        </div>

        {(data.niveaux?.length ?? 0) > 1 && (
          <div className="puces" style={{ marginBottom: 10 }}>
            <button className={`puce ${niveau === null ? "active" : ""}`} onClick={() => setNiveau(null)}>
              tous niveaux
            </button>
            {data.niveaux!.map((n) => (
              <button
                key={n}
                className={`puce ${niveau === n ? "active" : ""}`}
                onClick={() => setNiveau(niveau === n ? null : n)}
              >
                {n}
              </button>
            ))}
          </div>
        )}

        <div className="puces" style={{ marginBottom: 14 }}>
          <button className={`puce ${categorie === null ? "active" : ""}`} onClick={() => setCategorie(null)}>
            tout
          </button>
          {data.categories.map((c) => (
            <button
              key={c.name}
              className={`puce ${categorie === c.name ? "active" : ""}`}
              onClick={() => setCategorie(categorie === c.name ? null : c.name)}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="liste-points">
          {liste.map((s) => (
            <button
              key={s.slug}
              className={`point-ligne ${s.slug === choisi ? "choisi" : ""}`}
              onClick={() => setChoisi(s.slug)}
              onDoubleClick={() => !s.disputed && travailler(s.slug)}
            >
              <span className="titre">
                {s.level && <span className="niveau-puce">{s.level}</span>}
                {s.title}
              </span>
              <span className="diff">{"●".repeat(s.difficulty)}</span>
              <span
                className={`palier ${
                  s.disputed ? "debat" : s.isNew ? "" : s.box >= MASTERY_BOX ? "haut" : s.box <= 1 ? "bas" : ""
                }`}
              >
                {s.disputed ? "débat" : s.isNew ? "—" : `${s.box}/5`}
              </span>
            </button>
          ))}
          {liste.length === 0 && <p className="legende">Rien ne correspond à cette recherche.</p>}
        </div>
      </div>

      <aside className="volet-fiche">
        {fiche ? (
          <>
            <p className="mono-titre">
              {fiche.category} · difficulté {"●".repeat(fiche.difficulty)}
            </p>
            <h2 className="fiche-entete-titre">{fiche.title}</h2>
            <p className="fiche-enonce" dangerouslySetInnerHTML={{ __html: fiche.statement }} />
            <p className="fiche-astuce">{fiche.tip}</p>

            <div className="fiche-faits">
              <p className="fiche-fait">
                <span>Palier</span>
                <b>{fiche.isNew ? "jamais vu" : `${fiche.box}/5`}</b>
              </p>
              <p className="fiche-fait">
                <span>Domaine</span>
                <b>{fiche.category}</b>
              </p>
              {fiche.level && (
                <p className="fiche-fait">
                  <span>Niveau</span>
                  <b>{fiche.level}</b>
                </p>
              )}
              <p className="fiche-fait">
                <span>{voc.exercisePluriel} disponibles</span>
                <b>{fiche.exerciseCount}</b>
              </p>
              {!fiche.isNew && (
                <p className="fiche-fait">
                  <span>Réussite</span>
                  <b>
                    {fiche.correctCount}/{fiche.seenCount}
                  </b>
                </p>
              )}
            </div>

            {message && <p className="alerte">{message}</p>}

            {fiche.disputed ? (
              <p className="legende">
                Usage partagé : ce point est consultable, jamais servi en exercice et jamais compté
                comme une faute.
              </p>
            ) : (
              <>
                {fiche.hasLesson && (
                  <button
                    className="creux"
                    style={{ width: "100%", marginBottom: 10 }}
                    onClick={() => setScreen({ name: "lecon", slug: fiche.slug })}
                  >
                    Lire le cours
                  </button>
                )}
                <button className="plein" style={{ width: "100%" }} onClick={() => travailler(fiche.slug)}>
                  S’entraîner sur ce point
                </button>
              </>
            )}

            <p className="rail-bas">↑ ↓ pour parcourir · ⏎ pour s’entraîner</p>
          </>
        ) : (
          <p className="legende">Choisis un point dans la liste.</p>
        )}
      </aside>
    </div>
  );
}
