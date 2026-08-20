"use client";

/**
 * Catalogue des règles.
 *
 * Avec plus de six cents règles, la liste plate d'origine était inutilisable :
 * quatre-vingt-dix-huit homophones à la suite, sans repère. Trois outils la
 * rendent navigable, sans toucher à l'identité visuelle :
 *
 *   - une recherche qui porte sur le titre, l'énoncé et l'astuce ;
 *   - des filtres par catégorie, par difficulté et par état d'avancement ;
 *   - des fiches repliées, qui ne montrent que le titre tant qu'on ne clique pas.
 *
 * S'y ajoute le bouton qui manquait : s'entraîner sur UNE règle, depuis sa fiche.
 * C'est ici et seulement ici qu'apparaissent les « cas discutés ».
 */
import { useEffect, useMemo, useState } from "react";
import type { CatalogueSkill, CataloguePayload } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { NoContentError } from "@/lib/client/engine";
import { MASTERY_BOX } from "@/lib/study/scheduler";

type Etat = "tous" | "jamais" | "en-cours" | "maitrisee";
type Tri = "difficulte" | "alpha";

const ETATS: { cle: Etat; libelle: string }[] = [
  { cle: "tous", libelle: "Tous" },
  { cle: "jamais", libelle: "Jamais vues" },
  { cle: "en-cours", libelle: "En cours" },
  { cle: "maitrisee", libelle: "Maîtrisées" },
];

const NIVEAUX: Record<number, string> = { 1: "Abordable", 2: "Intermédiaire", 3: "Coriace" };

/** Minuscules, sans accents : pour que « eleve » trouve « élève ». */
function normaliser(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function etatDe(r: CatalogueSkill): Etat {
  if (r.isNew) return "jamais";
  return r.box >= MASTERY_BOX ? "maitrisee" : "en-cours";
}

export function Catalogue({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [data, setData] = useState<CataloguePayload | null>(null);
  const [categorie, setCategorie] = useState<string | null>(null);
  const [difficulte, setDifficulte] = useState<number | null>(null);
  /** Niveau du cadre européen. Ne s'affiche que dans les matières qui en ont. */
  const [niveau, setNiveau] = useState<string | null>(null);
  const [etat, setEtat] = useState<Etat>("tous");
  const [recherche, setRecherche] = useState("");
  const [ouverte, setOuverte] = useState<string | null>(null);
  const [groupesOuverts, setGroupesOuverts] = useState<Set<string>>(new Set());
  const [tri, setTri] = useState<Tri>("difficulte");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Le catalogue est rechargé quand on change de matière : son titre et son
    // vocabulaire viennent du module, pas de cet écran.
    setData(null);
    void engine.catalogue(moduleId).then((d) => {
      setData(d);
      setChrome({
        fil: d.vocabulaire.catalogue,
        accroche: `Cherche un point, ouvre sa fiche, entraîne-toi dessus.`,
      });
    });
  }, [engine, moduleId, setChrome]);

  const liste = useMemo(() => {
    if (!data) return [];
    const q = normaliser(recherche.trim());
    return data.skills.filter((r) => {
      if (categorie && r.category !== categorie) return false;
      if (difficulte && r.difficulty !== difficulte) return false;
      if (niveau && r.level !== niveau) return false;
      if (etat !== "tous" && etatDe(r) !== etat) return false;
      if (!q) return true;
      return normaliser(`${r.title} ${r.statement} ${r.tip}`).includes(q);
    });
  }, [data, categorie, difficulte, niveau, etat, recherche]);

  /**
   * Regroupement par catégorie : le seul repère qui tienne sur six cents règles.
   * À l'intérieur, deux tris au choix — par difficulté croissante pour
   * progresser, par ordre alphabétique pour retrouver une règle qu'on connaît.
   */
  const groupes = useMemo(() => {
    const map = new Map<string, CatalogueSkill[]>();
    for (const r of liste) {
      const bucket = map.get(r.category) ?? [];
      bucket.push(r);
      map.set(r.category, bucket);
    }
    const compare = (a: CatalogueSkill, b: CatalogueSkill) =>
      tri === "alpha"
        ? a.title.localeCompare(b.title, "fr")
        : a.difficulty - b.difficulty || a.title.localeCompare(b.title, "fr");
    for (const bucket of map.values()) bucket.sort(compare);
    return [...map.entries()];
  }, [liste, tri]);

  /**
   * Un domaine s'ouvre tout seul quand il est le seul affiché — filtre par
   * catégorie — ou quand une recherche est en cours : dans les deux cas,
   * l'utilisateur a déjà réduit la liste et veut voir les résultats.
   */
  const rechercheActive = recherche.trim() !== "";
  const estOuvert = (nom: string) =>
    rechercheActive || groupes.length === 1 || groupesOuverts.has(nom);

  const basculerGroupe = (nom: string) => {
    setGroupesOuverts((actuels) => {
      const suivant = new Set(actuels);
      if (suivant.has(nom)) suivant.delete(nom);
      else suivant.add(nom);
      return suivant;
    });
  };

  /** Le niveau, affiché sur chaque fiche quand la matière en a. */
  const travailler = async (slug: string) => {
    setMessage(null);
    try {
      const session = await engine.start({ mode: "skill", size: 10, category: null, skill: slug, moduleId });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Entraînement impossible.");
    }
  };

  const travaillerDomaine = async (nom: string) => {
    setMessage(null);
    try {
      const session = await engine.start({ mode: "targeted", size: 20, category: nom, moduleId });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(e instanceof NoContentError || e instanceof Error ? e.message : "Entraînement impossible.");
    }
  };

  if (!data) return <p className="legende attente">Chargement du catalogue…</p>;

  // Le vocabulaire du module : « règle » en français, « notion » ailleurs.
  const voc = data.vocabulaire;

  /**
   * Le champ de recherche s'illustre avec le contenu du module lui-même.
   * Proposer « participe » et « virgule » dans un module d'anglais donnait
   * l'impression d'un écran recyclé — parce qu'il l'était.
   */
  const exemples = (() => {
    const titres = data.skills.slice(0, 400).map((s) => s.title);
    const pris = [titres[1], titres[Math.floor(titres.length / 2)], titres[titres.length - 2]]
      .filter((t): t is string => Boolean(t))
      .map((t) => t.split(/[:,—(]/)[0]!.trim().toLowerCase())
      .filter((t) => t.length > 3 && t.length < 34);
    return pris.length
      ? `Chercher : « ${pris.join(" », « ")} »…`
      : `Chercher parmi les ${voc.skillPluriel}…`;
  })();

  const filtre =
    categorie !== null || difficulte !== null || niveau !== null || etat !== "tous" || recherche.trim() !== "";

  return (
    <>
      <div className="carte">
        <label className="chercher">
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder={exemples}
            autoComplete="off"
          />
        </label>

        {(data.niveaux?.length ?? 0) > 1 && (
          <>
            <p className="etiquette" style={{ marginTop: 22 }}>
              Niveau
            </p>
            <div className="puces">
              <button className={`puce ${niveau === null ? "active" : ""}`} onClick={() => setNiveau(null)}>
                Tous
              </button>
              {data.niveaux!.map((n) => (
                <button
                  key={n}
                  className={`puce ${niveau === n ? "active" : ""}`}
                  onClick={() => setNiveau(niveau === n ? null : n)}
                >
                  {n}
                  <i>{data.skills.filter((s) => s.level === n).length}</i>
                </button>
              ))}
            </div>
          </>
        )}

        <p className="etiquette" style={{ marginTop: 22 }}>
          Domaine
        </p>
        <div className="puces">
          <button className={`puce ${categorie === null ? "active" : ""}`} onClick={() => setCategorie(null)}>
            Toutes<i>{data.skills.length}</i>
          </button>
          {data.categories.map((c) => (
            <button
              key={c.name}
              className={`puce ${categorie === c.name ? "active" : ""}`}
              onClick={() => setCategorie(categorie === c.name ? null : c.name)}
            >
              {c.name}
              <i>{c.skills}</i>
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Difficulté
        </p>
        <div className="puces">
          <button className={`puce ${difficulte === null ? "active" : ""}`} onClick={() => setDifficulte(null)}>
            Toutes
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`puce ${difficulte === n ? "active" : ""}`}
              onClick={() => setDifficulte(difficulte === n ? null : n)}
            >
              {NIVEAUX[n]}
              <i>{"●".repeat(n)}</i>
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Où j’en suis
        </p>
        <div className="puces">
          {ETATS.map((e) => (
            <button key={e.cle} className={`puce ${etat === e.cle ? "active" : ""}`} onClick={() => setEtat(e.cle)}>
              {e.libelle}
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Trier
        </p>
        <div className="puces">
          <button className={`puce ${tri === "difficulte" ? "active" : ""}`} onClick={() => setTri("difficulte")}>
            Par difficulté
          </button>
          <button className={`puce ${tri === "alpha" ? "active" : ""}`} onClick={() => setTri("alpha")}>
            Ordre alphabétique
          </button>
        </div>

        <p className="compte-resultats">
          {liste.length === 0
            ? "Aucune règle ne correspond."
            : `${liste.length} ${liste.length > 1 ? voc.skillPluriel : voc.skill} sur ${data.skills.length}`}
          {filtre && (
            <button
              className="lien"
              style={{ marginLeft: 12 }}
              onClick={() => {
                setCategorie(null);
                setDifficulte(null);
                setEtat("tous");
                setRecherche("");
              }}
            >
              Tout réafficher
            </button>
          )}
        </p>
      </div>

      {message && (
        <div className="carte">
          <p className="alerte" style={{ marginBottom: 0 }}>
            {message}
          </p>
        </div>
      )}

      {groupes.map(([nom, regles]) => {
        const ouvertGroupe = estOuvert(nom);
        const acquises = regles.filter((r) => !r.isNew && !r.disputed && r.box >= MASTERY_BOX).length;
        return (
          <div className="carte" key={nom}>
            <button
              className={`groupe-bouton ${ouvertGroupe ? "ouvert" : ""}`}
              onClick={() => basculerGroupe(nom)}
              disabled={rechercheActive || groupes.length === 1}
            >
              <span className="domaine-nom">
                {!rechercheActive && groupes.length > 1 && <span className="chevron" aria-hidden="true" />}
                {nom}
              </span>
              <span className="domaine-compte">
                {acquises}/{regles.length} maîtrisées
              </span>
            </button>
            <div className="piste">
              <i
                className={acquises / regles.length >= 0.75 ? "fort" : acquises === 0 ? "" : ""}
                style={{ width: `${regles.length ? (acquises / regles.length) * 100 : 0}%` }}
              />
            </div>

            {ouvertGroupe && regles.length > 1 && (
              <button className="creux domaine-action" onClick={() => travaillerDomaine(nom)}>
                S’entraîner sur tout ce domaine
              </button>
            )}

            {ouvertGroupe &&
              regles.map((r) => {
                const fiche = ouverte === r.slug;
                return (
                  <div className={`fiche ${fiche ? "ouverte" : ""}`} key={r.slug}>
                    <button className="fiche-entete" onClick={() => setOuverte(fiche ? null : r.slug)}>
                      <span className="fiche-t">
                        {r.level && <span className="niveau-puce">{r.level}</span>}
                        {r.title} <em>{"●".repeat(r.difficulty)}</em>
                        {r.disputed && <span className="discute">usage partagé</span>}
                        {r.hasLesson && <span className="a-cours">cours</span>}
                      </span>
                      <span
                        className={`jalon ${r.disputed ? "debat" : r.isNew ? "" : r.box >= MASTERY_BOX ? "acquis" : "cours"}`}
                      >
                        {r.disputed ? "débat" : r.isNew ? "—" : `${r.box}/5`}
                      </span>
                    </button>

                    {fiche && (
                      <div className="fiche-corps">
                        <p
                          className="legende"
                          style={{ lineHeight: 1.6 }}
                          dangerouslySetInnerHTML={{ __html: r.statement }}
                        />
                        <p className="legende astuce">{r.tip}</p>
                        <p className="fiche-e">
                          {r.disputed
                            ? "point de débat, jamais noté"
                            : r.isNew
                              ? `jamais travaillé · ${r.exerciseCount} ${voc.exercisePluriel} disponibles`
                              : `palier ${r.box}/5 · ${r.correctCount} bonnes réponses sur ${r.seenCount}`}
                        </p>
                        {!r.disputed && (
                          <div className="actions-fiche">
                            {r.hasLesson && (
                              <button
                                className="creux"
                                onClick={() => setScreen({ name: "lecon", slug: r.slug })}
                              >
                                Lire le cours
                              </button>
                            )}
                            <button className="plein" onClick={() => travailler(r.slug)}>
                              S’entraîner sur ce point
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        );
      })}

      <div className="bas">
        <button className="creux" onClick={() => setScreen({ name: "accueil" })}>
          Accueil
        </button>
      </div>
    </>
  );
}
