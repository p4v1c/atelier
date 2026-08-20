"use client";

/** Liste des dictées, groupées par difficulté. */
import { useEffect, useMemo, useState } from "react";
import type { DictationsPayload } from "@/lib/api-types";
import type { ScreenProps } from "../App";

const NIVEAUX: Record<number, string> = { 1: "Abordable", 2: "Intermédiaire", 3: "Coriace" };

/** Au-delà de vingt-cinq mots, le texte compte plusieurs phrases. */
const SEUIL_LONGUE = 25;
type Longueur = "toutes" | "courtes" | "longues";

export function Dictees({ engine, setScreen, setChrome }: ScreenProps) {
  const [data, setData] = useState<DictationsPayload | null>(null);
  const [niveau, setNiveau] = useState<number | null>(null);
  const [longueur, setLongueur] = useState<Longueur>("toutes");

  useEffect(() => {
    setChrome({
      fil: "Dictée audio",
      accroche: "Écoute, écris, puis compare mot à mot. Les accents comptent.",
    });
    void engine.dictations().then(setData);
  }, [engine, setChrome]);

  const liste = useMemo(() => {
    if (!data) return [];
    return data.dictations.filter((d) => {
      if (niveau !== null && d.difficulty !== niveau) return false;
      if (longueur === "courtes" && d.wordCount > SEUIL_LONGUE) return false;
      if (longueur === "longues" && d.wordCount <= SEUIL_LONGUE) return false;
      return true;
    });
  }, [data, niveau, longueur]);

  if (!data) return <p className="legende attente">Chargement des dictées…</p>;

  const faites = data.dictations.filter((d) => d.bestScore !== null).length;
  const parfaites = data.dictations.filter((d) => d.bestScore === 100).length;

  return (
    <>
      <div className="carte">
        <p className="legende">
          {faites} dictée{faites > 1 ? "s" : ""} travaillée{faites > 1 ? "s" : ""} sur {data.dictations.length}
          {parfaites > 0 ? ` · ${parfaites} sans faute` : ""}.
        </p>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Niveau
        </p>
        <div className="puces">
          <button className={`puce ${niveau === null ? "active" : ""}`} onClick={() => setNiveau(null)}>
            Toutes<i>{data.dictations.length}</i>
          </button>
          {[1, 2, 3].map((n) => (
            <button key={n} className={`puce ${niveau === n ? "active" : ""}`} onClick={() => setNiveau(n)}>
              {NIVEAUX[n]}
              <i>{data.dictations.filter((d) => d.difficulty === n).length}</i>
            </button>
          ))}
        </div>

        <p className="etiquette" style={{ marginTop: 22 }}>
          Longueur
        </p>
        <div className="puces">
          <button className={`puce ${longueur === "toutes" ? "active" : ""}`} onClick={() => setLongueur("toutes")}>
            Toutes<i>{data.dictations.length}</i>
          </button>
          <button className={`puce ${longueur === "courtes" ? "active" : ""}`} onClick={() => setLongueur("courtes")}>
            Une phrase<i>{data.dictations.filter((d) => d.wordCount <= SEUIL_LONGUE).length}</i>
          </button>
          <button className={`puce ${longueur === "longues" ? "active" : ""}`} onClick={() => setLongueur("longues")}>
            Texte suivi<i>{data.dictations.filter((d) => d.wordCount > SEUIL_LONGUE).length}</i>
          </button>
        </div>

        <p className="compte-resultats">
          {liste.length === 0
            ? "Aucune dictée ne correspond."
            : `${liste.length} dictée${liste.length > 1 ? "s" : ""} sur ${data.dictations.length}`}
        </p>

        <div className="menu" style={{ marginTop: 18 }}>
          {liste.map((d) => (
            <button key={d.id} className="tuile" onClick={() => setScreen({ name: "dictee", id: d.id })}>
              <b>Dictée {d.number}</b>
              <span>
                {d.theme} · {d.wordCount} mots{d.wordCount > SEUIL_LONGUE ? " · texte suivi" : ""}
                <br />
                {d.bestScore !== null ? `Meilleur score : ${d.bestScore} %` : "Jamais tentée"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="bas">
        <button className="creux" onClick={() => setScreen({ name: "accueil" })}>
          Accueil
        </button>
      </div>
    </>
  );
}
