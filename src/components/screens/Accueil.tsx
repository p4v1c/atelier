"use client";

/**
 * Écran d'accueil — même structure que l'original : bandeau de niveau, carte du
 * test de positionnement, choix du domaine et de la longueur, quatre tuiles.
 */
import { useEffect, useState } from "react";
import type { ScreenProps } from "../App";
import type { ProgressPayload } from "@/lib/api-types";
import { SERIES_SIZES, TEST_SIZE } from "@/lib/study/scheduler";
import { NoContentError } from "@/lib/client/engine";
import { loadGuestState, saveGuestState } from "@/lib/client/guest-store";

export function Accueil({ engine, user, setScreen, setChrome }: ScreenProps) {
  const [progress, setProgress] = useState<ProgressPayload | null>(null);
  const [categorie, setCategorie] = useState<string | null>(null);
  const [taille, setTaille] = useState<number>(() => (engine.isGuest ? loadGuestState().seriesLength : 20));
  const [message, setMessage] = useState<string | null>(null);
  const [occupe, setOccupe] = useState(false);

  useEffect(() => {
    setChrome({
      fil: "Entraînement personnel",
      accroche: "Repérer la faute, comprendre pourquoi, ne plus la refaire.",
    });
    void engine.progress().then(setProgress);
  }, [engine, setChrome]);

  const lancer = async (mode: "training" | "targeted" | "weakness" | "test") => {
    setOccupe(true);
    setMessage(null);
    try {
      const session = await engine.start({
        mode,
        size: mode === "test" ? TEST_SIZE : taille,
        category: mode === "targeted" ? categorie : null,
      });
      setScreen({ name: "serie", session });
    } catch (e) {
      setMessage(
        e instanceof NoContentError || e instanceof Error
          ? e.message
          : "Impossible de composer une série pour l'instant."
      );
      setOccupe(false);
    }
  };

  const changerTaille = (n: number) => {
    setTaille(n);
    if (engine.isGuest) saveGuestState({ ...loadGuestState(), seriesLength: n });
  };

  if (!progress) return <p className="legende attente">Chargement de ta progression…</p>;

  const { mastered, skillCount, due, unseen, level } = progress;

  return (
    <>
      <div className="carte">
        <p className="niveau">
          <b>{level}</b>
          <span>Niveau estimé</span>
        </p>
        <div className="anneau">
          <i style={{ width: `${skillCount ? (mastered / skillCount) * 100 : 0}%` }} />
        </div>
        <p className="legende">
          {mastered} règle{mastered > 1 ? "s" : ""} maîtrisée{mastered > 1 ? "s" : ""} sur {skillCount} · {due} à
          réviser
          {unseen > 0 ? ` · ${unseen} jamais vue${unseen > 1 ? "s" : ""}` : ""}
        </p>
      </div>

      {user === null && (
        <div className="carte" style={{ borderLeft: "3px solid var(--mauve)" }}>
          <p className="legende" style={{ color: "var(--craie)" }}>
            Tu t’entraînes en invité : ta progression reste sur cet appareil. Crée un compte pour la retrouver
            ailleurs — elle sera transférée telle quelle.
          </p>
          <div className="bas">
            <button className="plein" onClick={() => setScreen({ name: "inscription" })}>
              Créer un compte
            </button>
            <button className="creux" onClick={() => setScreen({ name: "connexion" })}>
              J’ai déjà un compte
            </button>
          </div>
        </div>
      )}

      {!progress.skills.some((r) => !r.isNew) && (
        <div className="carte" style={{ borderLeft: "3px solid var(--or)" }}>
          <p className="legende" style={{ color: "var(--craie)" }}>
            Commence par le test de positionnement : {TEST_SIZE} phrases pour situer ton niveau dans chaque domaine
            et calibrer le parcours.
          </p>
          <button className="plein" style={{ marginTop: 16 }} disabled={occupe} onClick={() => lancer("test")}>
            Passer le test
          </button>
        </div>
      )}

      <div className="carte">
        <p className="etiquette">Cibler un domaine</p>
        <div className="puces">
          <button className={`puce ${categorie === null ? "active" : ""}`} onClick={() => setCategorie(null)}>
            Tout mélanger
          </button>
          {progress.categories.map((c) => (
            <button
              key={c.category}
              className={`puce ${categorie === c.category ? "active" : ""}`}
              onClick={() => setCategorie(c.category)}
            >
              {c.category}
              <i>
                {c.mastered}/{c.skills}
              </i>
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Longueur de la série
        </p>
        <div className="puces">
          {SERIES_SIZES.map((n) => (
            <button key={n} className={`puce ${taille === n ? "active" : ""}`} onClick={() => changerTaille(n)}>
              {n} phrases
            </button>
          ))}
        </div>

        <button
          className="plein"
          style={{ marginTop: 22 }}
          disabled={occupe}
          onClick={() => lancer(categorie ? "targeted" : "training")}
        >
          Commencer l’entraînement
        </button>
        {message && <p className="alerte" style={{ marginTop: 18, marginBottom: 0 }}>{message}</p>}
      </div>

      <div className="menu">
        <button className="tuile" onClick={() => setScreen({ name: "dictees" })}>
          <b>Dictée audio</b>
          <span>Des phrases lues à voix haute, corrigées mot à mot.</span>
        </button>
        <button className="tuile" onClick={() => setScreen({ name: "stats" })}>
          <b>Statistiques</b>
          <span>Ton palier règle par règle et tes lacunes en tête de liste.</span>
        </button>
        <button className="tuile" onClick={() => setScreen({ name: "catalogue" })}>
          <b>Les règles</b>
          <span>
            Chercher parmi les {skillCount} difficultés, et s’entraîner sur l’une d’elles.
          </span>
        </button>
        <button className="tuile" disabled={occupe} onClick={() => lancer("weakness")}>
          <b>Mes points faibles</b>
          <span>Une série composée uniquement de ce que tu rates.</span>
        </button>
      </div>

      <div className="bas">
        {user ? (
          <button className="lien" onClick={() => setScreen({ name: "compte" })}>
            Mon compte
          </button>
        ) : (
          <button
            className="lien"
            onClick={async () => {
              if (!engine.reset) return;
              await engine.reset();
              setProgress(await engine.progress());
            }}
          >
            Effacer ma progression
          </button>
        )}
      </div>
    </>
  );
}
