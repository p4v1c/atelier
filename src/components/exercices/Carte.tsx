"use client";

/**
 * Les trois exercices de langue : carte mémoire, traduction écrite, écoute.
 *
 * Ils partagent la même charge utile — un recto, un verso, des variantes — et
 * ne diffèrent que par ce qu'on montre et ce qu'on demande. Les écrire dans un
 * seul fichier évite de recopier trois fois la même mécanique de saisie.
 */
import { useEffect, useRef, useState } from "react";
import type { AnswerVerdict, CarteQuestion } from "@/lib/api-types";
import {
  arreterLecture,
  chargerVoix,
  choisirVoix,
  etatVoixServeur,
  lire,
  lireExerciceParServeur,
  messageVoixAbsente,
  synthesePossible,
  type Voix,
  type EtatServeur,
  type LectureServeur,
} from "@/lib/client/speech";
import type { VueExercice, VueExerciceProps } from "./types";

type Reveal = { recto?: string; verso: string; variantes?: string[]; note: string | null };

/* ─────────────────────────── lecture à voix haute ─────────────────────── */

/**
 * Un bouton qui lit un texte dans sa langue.
 *
 * La voix neuronale du serveur passe AVANT celle du navigateur : sous Linux,
 * cette dernière est espeak, un synthétiseur à formants qui apprend une
 * mauvaise prononciation. Les dictées passaient déjà par le serveur ; les
 * cartes et l'écoute restaient au robot, et ça s'entendait.
 *
 * Si aucune voix de cette langue n'existe nulle part, on le dit au lieu de
 * lire le texte avec l'accent d'à côté : entendre « the weather » prononcé à
 * la française est pire que le silence.
 */
function BoutonEcoute({
  exerciceId,
  texte,
  langue,
  auto,
  libelle = "Écouter",
  essentiel = false,
}: {
  /** Identifiant de l'exercice : le serveur lit son texte en base. */
  exerciceId?: string;
  texte: string;
  langue: string;
  auto?: boolean;
  libelle?: string;
  /** true quand l'exercice REPOSE sur le son : l'absence de voix se dit alors. */
  essentiel?: boolean;
}) {
  const [voix, setVoix] = useState<Voix | null>(null);
  const [disponible, setDisponible] = useState<boolean | null>(null);
  const [serveur, setServeur] = useState<EtatServeur | null>(null);
  const [enCours, setEnCours] = useState(false);
  const deja = useRef(false);
  const lecture = useRef<LectureServeur | null>(null);

  useEffect(() => {
    let vivant = true;
    void etatVoixServeur().then((e) => vivant && setServeur(e));
    if (!synthesePossible()) {
      setDisponible(false);
      return () => {
        vivant = false;
      };
    }
    void chargerVoix().then((liste) => {
      if (!vivant) return;
      const info = choisirVoix(liste, langue);
      setVoix(info.voix);
      setDisponible(info.francaise && info.voix !== null);
    });
    return () => {
      vivant = false;
      arreterLecture();
      lecture.current?.arreter();
    };
  }, [langue]);

  /** Le serveur sait-il lire CETTE langue ? */
  const serveurSaitLire =
    serveur?.disponible === true &&
    exerciceId !== undefined &&
    (serveur.langues === undefined ||
      serveur.langues.some((l) => l.toLowerCase().startsWith(langue.split("-")[0]!.toLowerCase())));

  const jouer = () => {
    setEnCours(true);
    if (serveurSaitLire) {
      lecture.current?.arreter();
      const l = lireExerciceParServeur(exerciceId!, "moyen", 1, () => setEnCours(false));
      lecture.current = l;
      // Le serveur peut échouer — voix absente, synthèse en erreur : on
      // retombe sur le navigateur sans rien dire à l'utilisateur.
      l.finie.catch(() => {
        lecture.current = null;
        if (voix) lire(texte, { voix, vitesse: 0.92, volume: 1, onFin: () => setEnCours(false) });
        else setEnCours(false);
      });
      return;
    }
    if (!voix) {
      setEnCours(false);
      return;
    }
    lire(texte, { voix, vitesse: 0.92, volume: 1, onFin: () => setEnCours(false) });
  };

  // Lecture automatique à l'arrivée, une seule fois : c'est le cœur de
  // l'exercice d'écoute, l'utilisateur ne devrait pas avoir à la réclamer.
  useEffect(() => {
    if (!auto || deja.current || !voix) return;
    deja.current = true;
    const t = setTimeout(jouer, 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auto, voix]);

  // Sur une carte mémoire, le son est un bonus : l'absence de voix se tait.
  // Sur un exercice d'écoute, elle change tout, et il faut le dire.
  if (disponible === false) {
    if (!essentiel) return null;
    return (
      <p className="sans-voix">
        {messageVoixAbsente(langue)} Le texte s’affiche donc à la place : l’exercice reste jouable,
        mais il ne fait plus travailler l’oreille.
      </p>
    );
  }

  return (
    <button
      className="creux ecouter"
      onClick={jouer}
      disabled={enCours || (!serveurSaitLire && !voix)}
    >
      {enCours ? "Lecture…" : libelle}
    </button>
  );
}

/* ─────────────────────────── carte mémoire ─────────────────────────── */

function FlashcardVue({ question, verdict, repondre, exerciceId }: VueExerciceProps) {
  const q = question as CarteQuestion;
  const reveal = verdict?.reveal as Reveal | undefined;
  const [retournee, setRetournee] = useState(false);

  useEffect(() => setRetournee(false), [question]);

  return (
    <>
      <div className={`cahier carte-memoire ${verdict ? "fige" : ""}`}>
        <div className="marge" />
        <p className="recto">{q.recto}</p>
        {q.langue && <BoutonEcoute exerciceId={exerciceId} texte={q.recto ?? ""} langue={q.langue} />}
        {(retournee || reveal) && <p className="verso">{q.verso ?? reveal?.verso ?? "…"}</p>}
      </div>

      {!verdict && !retournee && (
        <div className="consigne">
          <p className="indice">Essaie de te rappeler, puis retourne la carte.</p>
          <button className="plein" onClick={() => setRetournee(true)}>
            Retourner
          </button>
        </div>
      )}

      {!verdict && retournee && (
        <div className="consigne jugement">
          <p className="indice">Tu le savais&nbsp;?</p>
          <button className="creux" onClick={() => repondre(false)}>
            Non
          </button>
          <button className="plein" onClick={() => repondre(true)}>
            Oui, je le savais
          </button>
        </div>
      )}

      {(retournee || reveal) && (reveal?.note ?? q.note) && (
        <p className="explication">{reveal?.note ?? q.note}</p>
      )}
    </>
  );
}

/* ─────────────────────────── saisie écrite ─────────────────────────── */

function Saisie({
  question,
  verdict,
  choix,
  repondre,
  exerciceId,
  ecoute,
}: VueExerciceProps & { ecoute: boolean }) {
  const q = question as CarteQuestion;
  const reveal = verdict?.reveal as Reveal | undefined;
  const [texte, setTexte] = useState("");
  const [muetteFaute, setMuetteFaute] = useState(false);
  const champ = useRef<HTMLInputElement>(null);

  // Sans voix installée, l'exercice d'écoute deviendrait insoluble : on montre
  // alors le texte, pour qu'il reste au moins un exercice de copie.
  useEffect(() => {
    if (!ecoute) return;
    let vivant = true;
    if (!synthesePossible()) {
      setMuetteFaute(true);
      return;
    }
    void chargerVoix().then((liste) => {
      if (!vivant) return;
      const info = choisirVoix(liste, q.langue ?? "en-GB");
      setMuetteFaute(!info.francaise || info.voix === null);
    });
    return () => {
      vivant = false;
    };
  }, [ecoute, q.langue]);

  useEffect(() => {
    setTexte("");
    champ.current?.focus();
  }, [question]);

  const envoyer = (e: React.FormEvent) => {
    e.preventDefault();
    if (verdict) return;
    repondre(texte.trim());
  };

  const attendu = reveal ? (ecoute ? reveal.recto : reveal.verso) : null;

  return (
    <>
      <div className={`cahier ${verdict ? "fige" : ""}`}>
        <div className="marge" />
        {ecoute ? (
          <div className="ecoute-zone">
            <p className="recto muet">
              {muetteFaute ? "Recopie ce texte :" : "Écoute, puis écris ce que tu entends."}
            </p>
            {muetteFaute && <p className="recto">{q.aLire}</p>}
            {q.langue && (
              <BoutonEcoute
                exerciceId={exerciceId}
                texte={q.aLire ?? ""}
                langue={q.langue}
                auto
                libelle="Réécouter"
                essentiel
              />
            )}
          </div>
        ) : (
          <p className="recto">{q.recto}</p>
        )}

        <form onSubmit={envoyer} className="saisie">
          <input
            ref={champ}
            type="text"
            value={verdict ? String(choix ?? "") : texte}
            onChange={(e) => setTexte(e.target.value)}
            disabled={verdict !== null}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="Ta réponse"
            aria-label="Ta réponse"
          />
          {!verdict && (
            <button className="plein" type="submit">
              Valider
            </button>
          )}
        </form>

        {attendu && (
          <p className={`attendu ${verdict?.correct ? "juste" : "rate"}`}>
            {verdict?.correct ? "C’était bien " : "On attendait "}
            <b>{attendu}</b>
            {reveal?.variantes && reveal.variantes.length > 0 && (
              <span className="variantes"> — aussi accepté : {reveal.variantes.join(", ")}</span>
            )}
          </p>
        )}
      </div>

      {reveal?.note && <p className="explication">{reveal.note}</p>}
    </>
  );
}

/* ─────────────────────────── le registre ─────────────────────────── */

export const flashcardVue: VueExercice = {
  Vue: FlashcardVue,
  consigne: "Retourne la carte, puis dis honnêtement si tu savais.",
  titreVerdict: (v) => (v.correct ? null : "Tu ne savais pas"),
};

export const traductionVue: VueExercice = {
  Vue: (p) => <Saisie {...p} ecoute={false} />,
  consigne: "Écris la traduction. L’accent et la casse ne comptent pas.",
};

export const ecouteVue: VueExercice = {
  Vue: (p) => <Saisie {...p} ecoute />,
  consigne: "Écoute, puis écris ce que tu entends.",
};
