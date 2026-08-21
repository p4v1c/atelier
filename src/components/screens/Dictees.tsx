"use client";

/**
 * Les dictées, en deux volets — la liste à gauche, la fiche à droite.
 *
 * Trois cent dix dictées ne se parcourent pas en tuiles de deux lignes : à
 * deux par rangée, la liste faisait cent cinquante rangs et l'on ne retrouvait
 * jamais celle qu'on avait laissée. C'est exactement le problème du catalogue,
 * et il se règle de la même façon : une colonne dense qu'on balaie à l'œil ou
 * aux flèches, et la fiche de la dictée choisie qui reste à la même place.
 */
import { useEffect, useMemo, useState } from "react";
import type { DictationsPayload, DictationSummary } from "@/lib/api-types";
import type { ScreenProps } from "../App";

const NIVEAUX: Record<number, string> = { 1: "Abordable", 2: "Intermédiaire", 3: "Coriace" };

/** Au-delà de vingt-cinq mots, le texte compte plusieurs phrases. */
const SEUIL_LONGUE = 25;
type Longueur = "toutes" | "courtes" | "longues";

/** Recherche insensible aux accents : « eleve » doit trouver « élève ». */
function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function Dictees({ engine, moduleId, setScreen, setChrome }: ScreenProps) {
  const [data, setData] = useState<DictationsPayload | null>(null);
  const [recherche, setRecherche] = useState("");
  const [niveau, setNiveau] = useState<number | null>(null);
  const [longueur, setLongueur] = useState<Longueur>("toutes");
  const [choisie, setChoisie] = useState<string | null>(null);

  useEffect(() => {
    setChrome({
      fil: "Dictée audio",
      accroche: "Écoute, écris, puis compare mot à mot. Les accents comptent.",
    });
    setData(null);
    setChoisie(null);
    void engine.dictations(moduleId).then(setData);
  }, [engine, moduleId, setChrome]);

  const liste = useMemo(() => {
    if (!data) return [];
    const q = normaliser(recherche.trim());
    return data.dictations.filter((d) => {
      if (niveau !== null && d.difficulty !== niveau) return false;
      if (longueur === "courtes" && d.wordCount > SEUIL_LONGUE) return false;
      if (longueur === "longues" && d.wordCount <= SEUIL_LONGUE) return false;
      if (!q) return true;
      return (
        normaliser(d.theme).includes(q) ||
        String(d.number).includes(q) ||
        d.skills.some((s) => normaliser(s.title).includes(q))
      );
    });
  }, [data, recherche, niveau, longueur]);

  /* La fiche n'est jamais vide : la première dictée de la liste est choisie
     d'office, comme au catalogue. */
  useEffect(() => {
    if (liste.length === 0) {
      setChoisie(null);
      return;
    }
    if (!choisie || !liste.some((d) => d.id === choisie)) setChoisie(liste[0]!.id);
  }, [liste, choisie]);

  const fiche: DictationSummary | null = liste.find((d) => d.id === choisie) ?? null;

  /** Les flèches parcourent la liste, Entrée ouvre la dictée. */
  const auClavier = (e: React.KeyboardEvent) => {
    if (!fiche) return;
    const i = liste.findIndex((d) => d.id === fiche.id);
    if (e.key === "ArrowDown" && i < liste.length - 1) {
      e.preventDefault();
      setChoisie(liste[i + 1]!.id);
    } else if (e.key === "ArrowUp" && i > 0) {
      e.preventDefault();
      setChoisie(liste[i - 1]!.id);
    } else if (e.key === "Enter") {
      e.preventDefault();
      setScreen({ name: "dictee", id: fiche.id });
    }
  };

  if (!data) {
    return (
      <div className="plateau">
        <p className="legende attente">Chargement des dictées…</p>
      </div>
    );
  }

  const faites = data.dictations.filter((d) => d.bestScore !== null).length;
  const parfaites = data.dictations.filter((d) => d.bestScore === 100).length;

  return (
    <div className="deux-volets" onKeyDown={auClavier} tabIndex={-1}>
      <div className="volet-liste">
        <div className="chercher-barre">
          <input
            type="search"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Chercher un thème, un numéro, une règle…"
            autoComplete="off"
          />
          <span className="combien">
            {liste.length} sur {data.dictations.length}
          </span>
        </div>

        <div className="puces" style={{ marginBottom: 10 }}>
          <button className={`puce ${niveau === null ? "active" : ""}`} onClick={() => setNiveau(null)}>
            tous niveaux
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`puce ${niveau === n ? "active" : ""}`}
              onClick={() => setNiveau(niveau === n ? null : n)}
            >
              {NIVEAUX[n]}
            </button>
          ))}
        </div>

        <div className="puces" style={{ marginBottom: 14 }}>
          <button
            className={`puce ${longueur === "toutes" ? "active" : ""}`}
            onClick={() => setLongueur("toutes")}
          >
            toute longueur
          </button>
          <button
            className={`puce ${longueur === "courtes" ? "active" : ""}`}
            onClick={() => setLongueur("courtes")}
          >
            une phrase
          </button>
          <button
            className={`puce ${longueur === "longues" ? "active" : ""}`}
            onClick={() => setLongueur("longues")}
          >
            texte suivi
          </button>
        </div>

        <div className="liste-points">
          {liste.map((d) => (
            <button
              key={d.id}
              className={`point-ligne ${d.id === choisie ? "choisi" : ""}`}
              onClick={() => setChoisie(d.id)}
              onDoubleClick={() => setScreen({ name: "dictee", id: d.id })}
            >
              <span className="titre">
                <span className="niveau-puce">{d.number}</span>
                {d.theme}
              </span>
              <span className="diff">{d.wordCount} m.</span>
              <span
                className={`palier ${
                  d.bestScore === null ? "" : d.bestScore === 100 ? "haut" : d.bestScore < 60 ? "bas" : ""
                }`}
              >
                {d.bestScore === null ? "—" : `${d.bestScore} %`}
              </span>
            </button>
          ))}
          {liste.length === 0 && <p className="legende">Aucune dictée ne correspond.</p>}
        </div>
      </div>

      <aside className="volet-fiche">
        {fiche ? (
          <>
            <p className="mono-titre">
              Dictée {fiche.number} · {NIVEAUX[fiche.difficulty] ?? "—"}
            </p>
            <h2 className="fiche-entete-titre">{fiche.theme}</h2>
            <p className="fiche-enonce">
              {fiche.wordCount > SEUIL_LONGUE
                ? "Un texte suivi : plusieurs phrases, lues d’un trait puis relues à la demande."
                : "Une phrase à écrire sous la dictée, accents et ponctuation compris."}
            </p>

            <div className="fiche-faits">
              <p className="fiche-fait">
                <span>Longueur</span>
                <b>{fiche.wordCount} mots</b>
              </p>
              <p className="fiche-fait">
                <span>Difficulté</span>
                <b>{NIVEAUX[fiche.difficulty] ?? fiche.difficulty}</b>
              </p>
              <p className="fiche-fait">
                <span>Voix</span>
                <b>{fiche.voice}</b>
              </p>
              {fiche.level && (
                <p className="fiche-fait">
                  <span>Niveau</span>
                  <b>{fiche.level}</b>
                </p>
              )}
              <p className="fiche-fait">
                <span>Meilleur score</span>
                <b>{fiche.bestScore === null ? "jamais tentée" : `${fiche.bestScore} %`}</b>
              </p>
              {fiche.lastAttemptAt && (
                <p className="fiche-fait">
                  <span>Dernière tentative</span>
                  <b>{new Date(fiche.lastAttemptAt).toLocaleDateString("fr-FR")}</b>
                </p>
              )}
            </div>

            {fiche.skills.length > 0 && (
              <>
                <p className="mono-titre">Ce qu’elle travaille</p>
                <p className="fiche-astuce">{fiche.skills.map((s) => s.title).join(" · ")}</p>
              </>
            )}

            <button
              className="plein"
              style={{ width: "100%" }}
              onClick={() => setScreen({ name: "dictee", id: fiche.id })}
            >
              {fiche.bestScore === null ? "Faire cette dictée" : "Refaire cette dictée"}
            </button>

            <p className="rail-bas">
              {faites} travaillée{faites > 1 ? "s" : ""} sur {data.dictations.length}
              {parfaites > 0 ? ` · ${parfaites} sans faute` : ""} · ↑ ↓ pour parcourir · ⏎ pour ouvrir
            </p>
          </>
        ) : (
          <p className="legende">Choisis une dictée dans la liste.</p>
        )}
      </aside>
    </div>
  );
}
