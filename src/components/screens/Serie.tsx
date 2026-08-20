"use client";

/**
 * Une question : la page de cahier, les mots cliquables, le cercle rouge tracé
 * autour de la faute et la correction manuscrite au-dessus.
 *
 * Le tracé est repris trait pour trait du fichier d'origine : quatre courbes de
 * Bézier fermant une ellipse légèrement débordante, inclinée de deux degrés,
 * animée par stroke-dashoffset. Le calcul dépend de la position réelle du mot à
 * l'écran, donc il a lieu après le rendu, dans un effet.
 */
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { AnswerVerdict, StartedSession } from "@/lib/api-types";
import type { ScreenProps } from "../App";
import { Confirmation } from "../Confirmation";

type Props = ScreenProps & { session: StartedSession };

export function Serie({ engine, session, setScreen, setChrome }: Props) {
  const [curseur, setCurseur] = useState(0);
  const [verdict, setVerdict] = useState<AnswerVerdict | null>(null);
  const [choix, setChoix] = useState<number | null>(null);
  const [occupe, setOccupe] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  /** Nombre de questions déjà notées : c'est ce qui décide du message affiché. */
  const [repondues, setRepondues] = useState(0);

  const cahierRef = useRef<HTMLDivElement>(null);
  const phraseRef = useRef<HTMLParagraphElement>(null);
  const calqueRef = useRef<SVGSVGElement>(null);
  const suiteRef = useRef<HTMLButtonElement>(null);

  const test = session.mode === "test";
  const question = session.questions[curseur];

  useEffect(() => {
    // Une série sur une seule règle annonce laquelle : c'est la seule où
    // l'utilisateur sait déjà ce qu'il travaille, et il faut le lui confirmer.
    setChrome({
      fil: test ? "Test de positionnement" : session.rule ? session.rule.title : "Entraînement",
      accroche: test
        ? "Ne devine pas : si tu hésites, réponds au mieux, ça sert à te situer."
        : session.rule
          ? `${session.questions.length} phrases sur cette règle, dans le désordre.`
          : "Clique sur le mot fautif, ou déclare la phrase correcte.",
    });
  }, [test, session.rule, session.questions.length, setChrome]);

  const repondre = useCallback(
    async (index: number) => {
      if (!question || verdict || occupe) return;
      setOccupe(true);
      setChoix(index);
      try {
        const result = await engine.answer({
          studySessionId: session.studySessionId,
          sentenceId: question.sentenceId,
          answerIndex: index,
        });
        setVerdict(result);
        if (!result.alreadyAnswered) setRepondues((n) => n + 1);
      } finally {
        setOccupe(false);
      }
    },
    [engine, question, session.studySessionId, verdict, occupe]
  );

  /* Le cercle : mesuré après le rendu du verdict, effacé à chaque question. */
  useLayoutEffect(() => {
    const calque = calqueRef.current;
    const cahier = cahierRef.current;
    if (!calque || !cahier) return;
    calque.replaceChildren();
    cahier.querySelectorAll(".annote").forEach((n) => n.remove());
    if (!verdict || verdict.faultyTokenIndex < 0) return;

    const cible = phraseRef.current?.querySelector<HTMLElement>(`[data-i="${verdict.faultyTokenIndex}"]`);
    if (!cible) return;

    const b = cible.getBoundingClientRect();
    const c = cahier.getBoundingClientRect();
    const x = b.left - c.left;
    const y = b.top - c.top;
    const cx = x + b.width / 2;
    const cy = y + b.height / 2;
    const rx = b.width / 2 + 11;
    const ry = b.height / 2 + 3;
    const k = 0.5523;

    const d = `M ${cx} ${cy - ry}
    C ${cx + rx * k} ${cy - ry} ${cx + rx} ${cy - ry * k} ${cx + rx} ${cy}
    C ${cx + rx} ${cy + ry * k} ${cx + rx * k} ${cy + ry} ${cx} ${cy + ry}
    C ${cx - rx * k} ${cy + ry} ${cx - rx} ${cy + ry * k} ${cx - rx} ${cy}
    C ${cx - rx} ${cy - ry * k} ${cx - rx * k} ${cy - ry * 1.08} ${cx + rx * 0.3} ${cy - ry * 0.98}`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("class", "trait");
    path.setAttribute("transform", `rotate(-2 ${cx} ${cy})`);
    calque.append(path);

    const longueur = path.getTotalLength();
    path.style.strokeDasharray = String(longueur);
    path.style.strokeDashoffset = String(longueur);

    if (verdict.correction) {
      const annotation = document.createElement("span");
      annotation.className = "annote";
      annotation.textContent = verdict.correction;
      annotation.style.left = `${cx}px`;
      annotation.style.top = `${y - 4}px`;
      cahier.append(annotation);
    }
  }, [verdict]);

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

  const palier = test
    ? ""
    : verdict
      ? verdict.box.justMastered
        ? "Règle maîtrisée"
        : verdict.box.after > verdict.box.before
          ? `Palier ${verdict.box.after} / 5`
          : `Retour au palier ${verdict.box.after} / 5`
      : "";

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

      <div className={`cahier ${verdict ? "fige" : ""}`} ref={cahierRef}>
        <div className="marge" />
        <p className="categorie">{question.category}</p>
        <p className="phrase" ref={phraseRef}>
          {question.tokens.map((token, i) => (
            <span key={i}>
              {token.before}
              <button
                className={`mot ${verdict && !verdict.correct && choix === i ? "rate" : ""}`}
                data-i={i}
                disabled={verdict !== null}
                onClick={() => repondre(i)}
              >
                {token.word}
              </button>
              {token.after}{" "}
            </span>
          ))}
        </p>
        <svg className="calque" ref={calqueRef} />
      </div>

      <div className="consigne">
        <p className="indice">Clique sur le mot qui te semble fautif.</p>
        <button className="creux" disabled={verdict !== null} onClick={() => repondre(-1)}>
          Aucune faute
        </button>
      </div>

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
            <span>
              {verdict.correct
                ? "Juste"
                : verdict.faultyTokenIndex < 0
                  ? "La phrase était correcte"
                  : "Ce n’était pas ça"}
            </span>
            <span className="palier">{palier}</span>
          </p>
          <h2>{verdict.rule.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: verdict.rule.statement }} />
          <p className="astuce">{verdict.rule.tip}</p>
          <button className="plein suite" ref={suiteRef} onClick={suivante}>
            {curseur + 1 < session.questions.length ? "Phrase suivante" : "Voir le bilan"}
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
