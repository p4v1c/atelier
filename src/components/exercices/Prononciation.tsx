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
  type Voix,
  type EtatServeur,
} from "@/lib/client/speech";
import {
  ecouter,
  reconnaissancePossible,
  reconnaissanceUtilisable,
  type Ecoute,
} from "@/lib/client/reconnaissance";
import { NATIF } from "@/lib/client/voix-native";
import type { VueExercice, VueExerciceProps } from "./types";

type Reveal = { recto: string; verso: string; note: string | null; entendu: string };

function PrononciationVue({ question, verdict, repondre, exerciceId }: VueExerciceProps) {
  const q = question as CarteQuestion;
  const reveal = verdict?.reveal as Reveal | undefined;
  const langue = q.langue ?? "en-GB";

  const [ecoute, setEcoute] = useState<Ecoute | null>(null);
  const [partiel, setPartiel] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [panne, setPanne] = useState(false);
  /** Vérification différée : sur le téléphone, la réponse vient du système. */
  const [supporte, setSupporte] = useState<boolean | null>(null);
  const [modele, setModele] = useState<Voix | null>(null);
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
    let vivant = true;
    void reconnaissanceUtilisable().then((ok) => vivant && setSupporte(ok));
    return () => {
      vivant = false;
    };
  }, []);

  useEffect(() => {
    setPartiel("");
    setErreur(null);
  }, [question]);

  /**
   * La reconnaissance est-elle utilisable ICI ?
   *
   * L'API peut exister et ne pas marcher : un Chromium compilé sans les clés
   * de Google expose bien `webkitSpeechRecognition`, mais chaque tentative
   * échoue sur le réseau. On bascule alors sur l'auto-évaluation, plutôt que
   * de laisser l'utilisateur devant un bouton qui ne fait rien.
   */
  const possible = reconnaissancePossible() && supporte !== false && !panne;

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
      onErreur: (m) => {
        setErreur(m);
        // Une panne de réseau ou de service ne se réglera pas au coup suivant.
        if (/réseau|échoué/i.test(m)) setPanne(true);
      },
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
      setPanne(true);
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

        {/* Sans reconnaissance vocale, l'exercice ne s'arrête pas là : on écoute
            le modèle, on répète, et on se juge — le même pacte que la carte
            mémoire. Un écran mort n'apprend rien ; une auto-évaluation, si. */}
        {!possible ? (
          verdict ? null : (
            <>
              <div className="micro">
                <button className="creux" onClick={() => repondre("")}>
                  Je n’y arrive pas
                </button>
                <button className="plein" onClick={() => repondre(q.recto ?? "")}>
                  Je l’ai bien dit
                </button>
              </div>
              <p className="sans-voix">
                {NATIF
                  ? "La reconnaissance vocale n’a pas répondu sur ce téléphone."
                  : "Ce navigateur ne transcrit pas la parole — la reconnaissance vocale demande Chrome ou Edge, et le réseau."}{" "}
                Écoute le modèle, répète à voix haute, et juge-toi honnêtement : c’est le même pacte
                que la carte mémoire.
              </p>
            </>
          )
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
