"use client";

/**
 * « Relie chaque élément à son correspondant ».
 *
 * On clique à gauche, puis à droite : la paire se forme. Recliquer sur un
 * élément déjà relié défait la paire. Tant qu'une ligne n'est pas reliée, le
 * bouton de validation reste inerte — un appariement à moitié fait n'est pas
 * une réponse, c'est un abandon.
 *
 * L'ordre de la colonne de droite vient du serveur, qui l'a tiré du contenu :
 * l'écran ne mélange rien et n'a donc rien à recalculer.
 */
import { useState } from "react";
import type { AnswerVerdict } from "@/lib/api-types";
import type { VueExercice, VueExerciceProps } from "./types";

type Question = { consigne: string; gauche: string[]; droite: string[] };
type Reveal = {
  attendu: number[];
  justes: boolean[];
  paires: { gauche: string; droite: string }[];
  explication: string | null;
};

function AppariementVue({ question, verdict, choix, repondre }: VueExerciceProps) {
  const q = question as Question;
  const reveal = verdict?.reveal as Reveal | undefined;

  /** Pour chaque ligne de gauche, le rang choisi à droite. -1 = pas encore reliée. */
  const [liens, setLiens] = useState<number[]>(() => q.gauche.map(() => -1));
  /** La ligne de gauche en attente de sa droite. */
  const [enAttente, setEnAttente] = useState<number | null>(null);

  /* Une fois répondu, c'est le choix envoyé qui s'affiche, plus l'état local :
     revenir en arrière sur une réponse notée n'aurait pas de sens. */
  const poses = verdict !== null && Array.isArray(choix) ? (choix as number[]) : liens;
  const fige = verdict !== null;

  const droiteDe = (i: number) => poses[i] ?? -1;
  const gaucheDe = (j: number) => poses.findIndex((rang) => rang === j);

  const cliquerGauche = (i: number) => {
    if (fige) return;
    if (droiteDe(i) !== -1) {
      // Défaire la paire, et reprendre la ligne en attente.
      setLiens((avant) => avant.map((rang, k) => (k === i ? -1 : rang)));
      setEnAttente(i);
      return;
    }
    setEnAttente(enAttente === i ? null : i);
  };

  const cliquerDroite = (j: number) => {
    if (fige) return;
    const dejaPris = gaucheDe(j);
    if (dejaPris !== -1) {
      // Cette droite est prise : on la libère, et on met sa gauche en attente.
      setLiens((avant) => avant.map((rang, k) => (k === dejaPris ? -1 : rang)));
      setEnAttente(dejaPris);
      return;
    }
    if (enAttente === null) return;
    setLiens((avant) => avant.map((rang, k) => (k === enAttente ? j : rang)));
    setEnAttente(null);
  };

  const tout = poses.every((rang) => rang !== -1);

  /** Le numéro affiché dans la pastille : le rang de la paire, pas l'indice. */
  const etiquette = (i: number) => String.fromCharCode(65 + i);

  return (
    <>
      <div className={`cahier ${fige ? "fige" : ""}`}>
        <div className="marge" />
        <p className="enonce">{q.consigne}</p>

        <div className="appariement">
          <ul className="colonne gauche">
            {q.gauche.map((texte, i) => {
              const rang = droiteDe(i);
              const juste = reveal?.justes[i] === true;
              const rate = reveal !== undefined && reveal.justes[i] === false;
              return (
                <li key={i}>
                  <button
                    className={`paire ${enAttente === i ? "attente" : ""} ${rang !== -1 ? "reliee" : ""} ${juste ? "juste" : ""} ${rate ? "rate" : ""}`}
                    disabled={fige}
                    onClick={() => cliquerGauche(i)}
                  >
                    <span className="texte">{texte}</span>
                    {rang !== -1 && <span className="jeton">{etiquette(i)}</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="colonne droite">
            {q.droite.map((texte, j) => {
              const i = gaucheDe(j);
              const juste = i !== -1 && reveal?.justes[i] === true;
              const rate = i !== -1 && reveal !== undefined && reveal.justes[i] === false;
              return (
                <li key={j}>
                  <button
                    className={`paire ${i !== -1 ? "reliee" : ""} ${juste ? "juste" : ""} ${rate ? "rate" : ""}`}
                    disabled={fige}
                    onClick={() => cliquerDroite(j)}
                  >
                    {i !== -1 && <span className="jeton">{etiquette(i)}</span>}
                    <span className="texte">{texte}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {!fige && (
          <div className="consigne">
            <p className="indice">
              {enAttente !== null
                ? "Choisis maintenant sa correspondance à droite."
                : tout
                  ? "Tout est relié. Vérifie, ou reclique pour défaire une paire."
                  : "Clique à gauche, puis à droite."}
            </p>
            <button className="plein" disabled={!tout} onClick={() => repondre(poses)}>
              Vérifier
            </button>
          </div>
        )}
      </div>

      {reveal && (
        <div className="correction-paires">
          {reveal.paires.map((paire, i) => (
            <p key={i} className={`ligne-paire ${reveal.justes[i] ? "juste" : "rate"}`}>
              <span>{paire.gauche}</span>
              <b>{paire.droite}</b>
            </p>
          ))}
        </div>
      )}

      {reveal?.explication && <p className="explication">{reveal.explication}</p>}
    </>
  );
}

export const appariementVue: VueExercice = {
  Vue: AppariementVue,
  consigne: "Relie chaque élément à son correspondant.",
  titreVerdict: (verdict: AnswerVerdict) => {
    const reveal = verdict.reveal as Reveal | undefined;
    if (!reveal || verdict.correct) return null;
    const bons = reveal.justes.filter(Boolean).length;
    return `${bons} paire${bons > 1 ? "s" : ""} sur ${reveal.justes.length}`;
  },
};
