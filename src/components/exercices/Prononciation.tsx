"use client";

/**
 * « Dis-le à voix haute ».
 *
 * On montre la phrase — c'est le principe, on lit — on écoute la lecture, et on
 * compare la transcription au texte attendu. L'écran dit franchement ce que
 * l'exercice mesure : si un logiciel te comprend, pas si ton accent est bon.
 */
import { useEffect, useRef, useState } from "react";
import type { CarteQuestion } from "@/lib/api-types";
import {
  arreterLecture,
  chargerVoix,
  choisirVoix,
  etatVoixServeur,
  lire,
  lireExerciceParServeur,
  synthesePossible,
  type EtatServeur,
} from "@/lib/client/speech";
import { ecouter, reconnaissancePossible, type Ecoute } from "@/lib/client/reconnaissance";
import type { VueExercice, VueExerciceProps } from "./types";

type Reveal = { recto: string; verso: string; note: string | null; entendu: string };

function PrononciationVue({ question, verdict, repondre, exerciceId }: VueExerciceProps) {
  const q = question as CarteQuestion;
  const reveal = verdict?.reveal as Reveal | undefined;
  const langue = q.langue ?? "en-GB";

  const [ecoute, setEcoute] = useState<Ecoute | null>(null);
  const [partiel, setPartiel] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [modele, setModele] = useState<SpeechSynthesisVoice | null>(null);
  const [serveur, setServeur] = useState<EtatServeur | null>(null);
  const enCours = useRef(false);

  /* Une voix pour le modèle : on doit pouvoir entendre avant de répéter. */
  useEffect(() => {
    let vivant = true;
    void etatVoixServeur().then((e) => vivant && setServeur(e));
    if (!synthesePossible()) {
      return () => {
        vivant = false;
      };
    }
    void chargerVoix().then((liste) => {
      if (!vivant) return;
      const info = choisirVoix(liste, langue);
      setModele(info.francaise ? info.voix : null);
    });
    return () => {
      vivant = false;
      arreterLecture();
    };
  }, [langue]);

  useEffect(() => {
    setPartiel("");
    setErreur(null);
  }, [question]);

  const possible = reconnaissancePossible();

  /** Le serveur sait-il lire cette langue ? */
  const modeleServeur =
    serveur?.disponible === true &&
    (serveur.langues === undefined ||
      serveur.langues.some((l) => l.toLowerCase().startsWith(langue.split("-")[0]!.toLowerCase())));

  const parler = () => {
    if (enCours.current || verdict) return;
    setErreur(null);
    setPartiel("");
    enCours.current = true;
    const session = ecouter({
      langue,
      onPartiel: setPartiel,
      onErreur: setErreur,
      onFinal: (texte) => {
        enCours.current = false;
        setEcoute(null);
        // Rien entendu : on ne note pas une tentative qui n'a pas eu lieu.
        if (texte.trim()) repondre(texte);
      },
    });
    if (!session) {
      enCours.current = false;
      setErreur("La reconnaissance n’a pas pu démarrer.");
      return;
    }
    setEcoute(session);
  };

  return (
    <>
      <div className={`cahier prononce ${verdict ? "fige" : ""}`}>
        <div className="marge" />
        <p className="recto">{q.recto}</p>
        <p className="traduction-aide">{q.verso}</p>

        {(modeleServeur || modele) && (
          <button
            className="creux ecouter"
            onClick={() => {
              // La voix neuronale d'abord : c'est un MODÈLE de prononciation,
              // le robot du navigateur ferait exactement l'inverse du but.
              if (modeleServeur) {
                lireExerciceParServeur(exerciceId, "moyen", 1).finie.catch(() => {
                  if (modele) lire(q.recto ?? "", { voix: modele, vitesse: 0.9, volume: 1 });
                });
                return;
              }
              if (modele) lire(q.recto ?? "", { voix: modele, vitesse: 0.9, volume: 1 });
            }}
          >
            Écouter le modèle
          </button>
        )}

        {!possible ? (
          <p className="sans-voix">
            Ce navigateur ne sait pas écouter. La reconnaissance vocale n’existe que sur Chrome et
            Edge — sur les autres, cet exercice reste consultable mais ne peut pas être noté.
          </p>
        ) : verdict ? null : (
          <div className="micro">
            <button className="plein" onClick={ecoute ? () => ecoute.arreter() : parler}>
              {ecoute ? "J’ai fini" : "Parler"}
            </button>
            {ecoute && <span className="onde" aria-hidden="true" />}
            {partiel && <p className="partiel">« {partiel} »</p>}
          </div>
        )}

        {erreur && <p className="sans-voix">{erreur}</p>}

        {reveal && (
          <p className={`attendu ${verdict?.correct ? "juste" : "rate"}`}>
            {verdict?.correct ? "Compris du premier coup : " : "Ce qui a été entendu : "}
            <b>{reveal.entendu || "— rien —"}</b>
          </p>
        )}
      </div>

      {reveal?.note && <p className="explication">{reveal.note}</p>}

      {!verdict && possible && (
        <p className="legende avertissement-micro">
          Cet exercice mesure si un logiciel te comprend, pas la qualité de ton accent. Sur Chrome,
          l’audio est envoyé aux serveurs de Google pour être transcrit.
        </p>
      )}
    </>
  );
}

export const prononciationVue: VueExercice = {
  Vue: PrononciationVue,
  consigne: "Lis la phrase à voix haute, distinctement.",
  titreVerdict: (v) => (v.correct ? null : "Pas tout à fait compris"),
};
