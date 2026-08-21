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
import type { FondDeCarte } from "@/lib/cartes/types";
import { regionCarte } from "@/lib/cartes/regions";
import type { VueExercice, VueExerciceProps } from "./types";

type Question = { region: string; consigne: string; amorce: string | null };
type Reveal = { cible: string; cibleNom: string; explication: string | null };

/**
 * Un morceau par région.
 *
 * Le tableau est écrit à la main plutôt que calculé : un `import()` dont le
 * chemin est une variable empêche l'empaqueteur de découper quoi que ce soit,
 * et le gain disparaît.
 */
const FONDS: Record<string, () => Promise<FondDeCarte>> = {
  monde: () => import("@/lib/cartes/monde").then((m) => m.MONDE),
  europe: () => import("@/lib/cartes/europe").then((m) => m.EUROPE),
  afrique: () => import("@/lib/cartes/afrique").then((m) => m.AFRIQUE),
  asie: () => import("@/lib/cartes/asie").then((m) => m.ASIE),
  ameriques: () => import("@/lib/cartes/ameriques").then((m) => m.AMERIQUES),
};

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

  /* La carte réserve sa place avant d'être chargée : sans cela, l'écran saute
     au moment où le fond arrive, et le clic part sur le mauvais pays. Le
     rapport vient du catalogue des régions, qui ne pèse rien — le fond, lui,
     arrive plus tard. */
  const gabarit = regionCarte(q.region);
  const ratio = gabarit ? `${gabarit.largeur} / ${gabarit.hauteur}` : "3 / 2";

  const classePays = (id: string) => {
    if (!reveal) return survole === id ? "pays survole" : "pays";
    if (id === reveal.cible) return "pays juste";
    if (id === clique) return "pays rate";
    return "pays";
  };

  return (
    <>
      <div className={`cahier ${fige ? "fige" : ""}`}>
        <div className="marge" />

        {q.amorce && <p className="carte-amorce">{q.amorce}</p>}
        <p className="enonce">{q.consigne}</p>

        <div className="carte-cadre" style={{ "--carte-ratio": ratio } as React.CSSProperties}>
          {erreur && <p className="legende carte-etat">Ce fond de carte n’a pas pu être chargé.</p>}
          {!erreur && !fond && <p className="legende carte-etat attente">Chargement de la carte…</p>}

          {fond && (
            <svg
              className="carte-monde"
              viewBox={`0 0 ${fond.largeur} ${fond.hauteur}`}
              role="group"
              aria-label={`${fond.titre} — ${fond.pays.length} pays`}
            >
              {fond.pays.map((p) => (
                <path
                  key={p.id}
                  d={p.d}
                  className={classePays(p.id)}
                  aria-label={p.nom}
                  onMouseEnter={() => !fige && setSurvole(p.id)}
                  onMouseLeave={() => !fige && setSurvole(null)}
                  onClick={() => !fige && repondre(p.id)}
                />
              ))}
            </svg>
          )}
        </div>

        {fond && !fige && (
          <details className="carte-repli">
            <summary>Répondre sans la carte</summary>
            <div className="puces">
              {fond.pays.map((p) => (
                <button key={p.id} className="puce" onClick={() => repondre(p.id)}>
                  {p.nom}
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
              {clique && fond && clique !== reveal.cible && (
                <>
                  {" "}
                  · ton clic : {fond.pays.find((p) => p.id === clique)?.nom ?? "un autre pays"}
                </>
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
  consigne: "Clique sur le pays, directement sur la carte.",
};
