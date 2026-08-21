"use client";

/**
 * Une série de questions.
 *
 * Cet écran ne sait pas ce qu'est une faute d'orthographe, ni une bonne
 * réponse : il tient la barre de progression, le panneau de correction et les
 * boutons, et confie l'affichage de la question au type d'exercice. C'est ce
 * qui permet à un module de culture générale ou de géographie de réutiliser
 * exactement le même écran.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import type { AnswerVerdict, StartedSession } from "@/lib/api-types";
import { vuePour } from "../exercices";
import type { ScreenProps } from "../App";
import { Confirmation } from "../Confirmation";

type Props = ScreenProps & { session: StartedSession };

export function Serie({ engine, session, setScreen, setChrome }: Props) {
  const [curseur, setCurseur] = useState(0);
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const [choix, setChoix] = useState<unknown>(null);
  const [occupe, setOccupe] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  /** Nombre de questions déjà notées : c'est ce qui décide du message affiché. */
  const [repondues, setRepondues] = useState(0);

  const suiteRef = useRef<HTMLButtonElement>(null);

  const test = session.mode === "test";
  const question = session.questions[curseur];
  const vue = question ? vuePour(question.kind) : null;

  useEffect(() => {
    // Une série sur une seule compétence annonce laquelle : c'est la seule où
    // l'utilisateur sait déjà ce qu'il travaille, et il faut le lui confirmer.
    setChrome({
      fil: test ? "Test de positionnement" : session.skill ? session.skill.title : "Entraînement",
      accroche: test
        ? "Ne devine pas : si tu hésites, réponds au mieux, ça sert à te situer."
        : session.skill
          ? `${session.questions.length} questions sur ce point, dans le désordre.`
          : (vue?.consigne ?? "Réponds au mieux."),
    });
  }, [test, session.skill, session.questions.length, vue, setChrome]);

  const repondre = useCallback(
    async (answer: unknown) => {
      if (!question || verdict || occupe) return;
      setOccupe(true);
      setChoix(answer);
      try {
        const result = await engine.answer({
          studySessionId: session.studySessionId,
          exerciseId: question.exerciseId,
          answer,
        });
        setVerdict(result);
        if (!result.alreadyAnswered) setRepondues((n) => n + 1);
      } finally {
        setOccupe(false);
      }
    },
    [engine, question, session.studySessionId, verdict, occupe]
  );

  useEffect(() => {
    if (verdict) suiteRef.current?.focus();
  }, [verdict]);

  /**
   * Quitter la série.
   *
   * Les réponses déjà données sont enregistrées au fur et à mesure : les paliers
   * ne bougeront pas. Ce qu'on perd en partant, c'est le bilan de fin — d'où le
   * troisième choix, qui le montre tout de suite.
   */
  const quitter = () => {
    if (repondues === 0) {
      setScreen({ name: "accueil" });
      return;
    }
    setConfirmation(true);
  };

  const terminerMaintenant = async () => {
    setConfirmation(false);
    const summary = await engine.finish(session.studySessionId);
    setScreen({ name: "bilan", summary, category: session.category });
  };

  const suivante = async () => {
    if (curseur + 1 < session.questions.length) {
      setCurseur(curseur + 1);
      setVerdict(null);
      setChoix(null);
      return;
    }
    const summary = await engine.finish(session.studySessionId);
    setScreen({ name: "bilan", summary, category: session.category });
  };

  if (!question) return null;

  // Un exercice qu'aucune vue ne sait afficher : on le dit plutôt que de rendre
  // une page vide. C'est le signe d'un module installé à moitié.
  if (!vue) {
    return (
      <div className="cahier">
        <div className="marge" />
        <p className="phrase">Ce type d’exercice ({question.kind}) n’est pas affichable ici.</p>
        <div className="bas">
          <button className="lien" onClick={() => setScreen({ name: "accueil" })}>
            Retour à l’accueil
          </button>
        </div>
      </div>
    );
  }

  const palier = test
    ? ""
    : verdict
      ? verdict.box.justMastered
        ? "Point maîtrisé"
        : verdict.box.after > verdict.box.before
          ? `Palier ${verdict.box.after} / 5`
          : `Retour au palier ${verdict.box.after} / 5`
      : "";

  const titreVerdict = verdict
    ? verdict.correct
      ? "Juste"
      : (vue.titreVerdict?.(verdict) ?? "Ce n’était pas ça")
    : "";

  const { Vue } = vue;

  return (
    <>
      <div className="jauge">
        <div className="barre">
          <span style={{ width: `${(curseur / session.questions.length) * 100}%` }} />
        </div>
        <p className="compte">
          <b>{curseur}</b> / {session.questions.length}
        </p>
      </div>

      <p className="categorie">{question.category}</p>

      <Vue
        exerciceId={question.exerciseId}
        question={question.question}
        verdict={verdict}
        choix={choix}
        repondre={repondre}
      />

      {confirmation && (
        <Confirmation
          titre="Arrêter la série ?"
          texte={
            `Tu as répondu à ${repondues} question${repondues > 1 ? "s" : ""} sur ${session.questions.length}. ` +
            "Ces réponses sont déjà enregistrées : tes paliers ne bougeront pas. " +
            "En partant maintenant, tu perds seulement le bilan de fin de série."
          }
          onFermer={() => setConfirmation(false)}
          actions={[
            { libelle: "Reprendre", onClick: () => setConfirmation(false), style: "plein" },
            { libelle: "Voir le bilan", onClick: terminerMaintenant },
            { libelle: "Quitter", onClick: () => setScreen({ name: "accueil" }), style: "lien" },
          ]}
        />
      )}

      {verdict && (
        <div className={`regle ${verdict.correct ? "juste" : ""}`}>
          <p className="verdict">
            <span>{titreVerdict}</span>
            <span className="palier">{palier}</span>
          </p>
          <h2>{verdict.skill.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: verdict.skill.statement }} />
          <p className="astuce">{verdict.skill.tip}</p>
          <button className="plein suite" ref={suiteRef} onClick={suivante}>
            {curseur + 1 < session.questions.length ? "Question suivante" : "Voir le bilan"}
          </button>
        </div>
      )}

      <div className="bas">
        <button className="lien" onClick={quitter}>
          Arrêter la série
        </button>
      </div>
    </>
  );
}
