"use client";

/**
 * « Clique sur le pays ».
 *
 * Le fond de carte n'est pas dans ce fichier : il est chargé à la demande,
 * région par région, par un `import()` dynamique. Les cinq fonds pèsent
 * ensemble quatre cents kilo-octets, et il n'y a aucune raison qu'un écran de
 * français les transporte. Next découpe donc un morceau par région, et seul
 * celui de la carte affichée traverse le réseau.
 *
 * L'accessibilité demande une seconde route : une carte ne se clique pas au
 * clavier, et un lecteur d'écran n'y voit rien. Chaque pays porte donc son nom
 * en aria-label, et un repli replié — « répondre sans la carte » — permet de
 * choisir dans une liste. C'est une liste de quarante entrées, pas un QCM à
 * quatre : elle ne rend pas l'exercice trivial.
 */
import { useEffect, useState } from "react";
import type { FondDeCarte, Trace } from "@/lib/cartes/types";
import { FONDS } from "@/lib/cartes/charger";
import { regionCarte } from "@/lib/cartes/regions";
import type { VueExercice, VueExerciceProps } from "./types";

type Question = { region: string; couche: "pays" | "mer"; consigne: string; amorce: string | null };
type Reveal = { cible: string; cibleNom: string; explication: string | null };

function CarteMondeVue({ question, verdict, choix, repondre }: VueExerciceProps) {
  const q = question as Question;
  const reveal = verdict?.reveal as Reveal | undefined;

  const [fond, setFond] = useState<FondDeCarte | null>(null);
  const [erreur, setErreur] = useState(false);
  const [survole, setSurvole] = useState<string | null>(null);

  useEffect(() => {
    let vivant = true;
    setFond(null);
    setErreur(false);
    const charger = FONDS[q.region];
    if (!charger) {
      setErreur(true);
      return;
    }
    void charger()
      .then((f) => vivant && setFond(f))
      .catch(() => vivant && setErreur(true));
    return () => {
      vivant = false;
    };
  }, [q.region]);

  const fige = verdict !== null;
  const clique = typeof choix === "string" ? choix : null;

  /* Une seule couche répond au clic. L'autre reste dessinée — c'est la carte —
     mais sourde : cliquer l'Italie quand on cherche la Méditerranée ne doit
     pas valider une réponse qui n'était pas posée. */
  const cibles = q.couche === "mer" ? fond?.mers : fond?.pays;
  const vivante = (couche: "pays" | "mer") => couche === q.couche;

  /* La carte réserve sa place avant d'être chargée : sans cela, l'écran saute
     au moment où le fond arrive, et le clic part sur le mauvais pays. Le
     rapport vient du catalogue des régions, qui ne pèse rien — le fond, lui,
     arrive plus tard. */
  const gabarit = regionCarte(q.region);
  const ratio = gabarit ? `${gabarit.largeur} / ${gabarit.hauteur}` : "3 / 2";
  /* Le même rapport, en nombre : `aspect-ratio` accepte la fraction, `calc()`
     non, et c'est `calc()` qui borne la largeur pour que la carte tienne dans
     l'écran sans se retrouver bordée de mer vide. */
  const ratioNum = gabarit ? gabarit.largeur / gabarit.hauteur : 1.5;

  const classe = (base: "pays" | "mer", id: string) => {
    if (!reveal) return survole === id ? `${base} survole` : base;
    if (id === reveal.cible) return `${base} juste`;
    if (id === clique) return `${base} rate`;
    return base;
  };

  /* Les traits d'une couche sourde ne doivent pas non plus intercepter le
     survol du dessous : « inerte » coupe les événements de pointeur. */
  const couche = (base: "pays" | "mer", traces: Trace[]) =>
    traces.map((t) => (
      <path
        key={t.id}
        d={t.d}
        className={`${classe(base, t.id)} ${vivante(base) ? "" : "inerte"}`}
        aria-label={vivante(base) ? t.nom : undefined}
        aria-hidden={vivante(base) ? undefined : true}
        onMouseEnter={() => vivante(base) && !fige && setSurvole(t.id)}
        onMouseLeave={() => vivante(base) && !fige && setSurvole(null)}
        onClick={() => vivante(base) && !fige && repondre(t.id)}
      />
    ));

  return (
    <>
      <div className={`cahier ${fige ? "fige" : ""}`}>
        <div className="marge" />

        {/* L'amorce est tantôt un drapeau, tantôt un nom de pays. Un émoji de
            drapeau tient en deux points de code ; au-delà, c'est du texte, et
            du texte à cinquante pixels ne tiendrait pas sur la ligne. */}
        {q.amorce && (
          <p className={`carte-amorce ${[...q.amorce].length > 2 ? "mot" : ""}`}>{q.amorce}</p>
        )}
        <p className="enonce">{q.consigne}</p>

        <div
          className="carte-cadre"
          style={{ "--carte-ratio": ratio, "--carte-ratio-num": ratioNum } as React.CSSProperties}
        >
          {erreur && <p className="legende carte-etat">Ce fond de carte n’a pas pu être chargé.</p>}
          {!erreur && !fond && <p className="legende carte-etat attente">Chargement de la carte…</p>}

          {fond && (
            <svg
              /* Écrit en toutes lettres, et non composé par interpolation :
                 une classe fabriquée à la volée est invisible au script qui
                 traque les règles CSS que plus rien ne rend. */
              className={`carte-monde ${q.couche === "mer" ? "vise-mer" : "vise-pays"}`}
              viewBox={`0 0 ${fond.largeur} ${fond.hauteur}`}
              role="group"
              aria-label={`${fond.titre} — ${(cibles ?? []).length} réponses possibles`}
            >
              {/* Sous tout le reste, l'eau libre. Sans elle, un clic tombé
                  à côté ne ferait rien du tout : on cliquerait, l'écran ne
                  bougerait pas, et l'on croirait l'application bloquée. Là,
                  toute la carte répond — à côté, c'est une réponse fausse. */}
              <rect
                className="ailleurs"
                x={0}
                y={0}
                width={fond.largeur}
                height={fond.hauteur}
                aria-hidden
                onClick={() => !fige && repondre("ailleurs")}
              />

              {/* Les mers ensuite : les terres se posent par-dessus, si bien
                  qu'une zone marine un peu large ne déborde jamais sur un
                  continent — c'est le dessin qui la rogne. */}
              {couche("mer", fond.mers)}
              {couche("pays", fond.pays)}
            </svg>
          )}
        </div>

        {cibles && !fige && (
          <details className="carte-repli">
            <summary>Répondre sans la carte</summary>
            <div className="puces">
              {cibles.map((t) => (
                <button key={t.id} className="puce" onClick={() => repondre(t.id)}>
                  {t.nom}
                </button>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* Pas d'article devant le nom du pays : il faudrait connaître son genre
          et son initiale — « le Chili », « la Chine », « l'Iran », « les
          Pays-Bas ». Les deux points évitent la question et se lisent bien
          pour les cent soixante-seize noms du fond. */}
      {reveal && (
        <p className={`carte-verdict ${verdict?.correct ? "juste" : "rate"}`}>
          {verdict?.correct ? (
            <>
              Trouvé : <b>{reveal.cibleNom}</b>.
            </>
          ) : (
            <>
              La bonne réponse : <b>{reveal.cibleNom}</b>
              {clique && cibles && clique !== reveal.cible && (
                <> · ton clic : {cibles.find((t) => t.id === clique)?.nom ?? "en pleine eau"}</>
              )}
              .
            </>
          )}
        </p>
      )}

      {reveal?.explication && <p className="explication">{reveal.explication}</p>}
    </>
  );
}

export const carteMondeVue: VueExercice = {
  Vue: CarteMondeVue,
  consigne: "Réponds en cliquant directement sur la carte.",
};
