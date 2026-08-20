"use client";

/**
 * L'enveloppe des modules de langue : leur barre de navigation, leur largeur
 * de page, leur pied de page. Partagée par l'anglais et l'espagnol — ils ne
 * diffèrent que par la couleur d'accent, posée en CSS.
 */
import type { EcranModule } from "../types";

type Props = {
  children: React.ReactNode;
  onde: (destination: EcranModule) => void;
  actif: EcranModule;
  nom: string;
};

const LIENS: { cle: EcranModule; libelle: string }[] = [
  { cle: "accueil", libelle: "Accueil" },
  { cle: "serie", libelle: "S’entraîner" },
  { cle: "catalogue", libelle: "Programme" },
  { cle: "stats", libelle: "Progression" },
];

export function EnveloppeLangue({ children, onde, actif, nom }: Props) {
  const [debut, ...reste] = nom.split(" ");
  return (
    <div className="lg-wrap">
      <header className="lg-topbar">
        <button className="lg-brand" onClick={() => onde("accueil")}>
          {reste.length ? (
            <>
              {debut} <span className="accent">{reste.join(" ")}</span>
            </>
          ) : (
            <span className="accent">{debut}</span>
          )}
        </button>
        <nav className="lg-nav">
          {LIENS.map((l) => (
            <button
              key={l.cle}
              className={`lg-navbtn ${actif === l.cle ? "on" : ""}`}
              onClick={() => onde(l.cle)}
            >
              {l.libelle}
            </button>
          ))}
          <button className="lg-navbtn" onClick={() => onde("atelier")}>
            ← Atelier
          </button>
        </nav>
      </header>

      {children}

      <p className="lg-footer">
        Les niveaux suivent le cadre européen commun de référence. Un niveau est
        compté acquis quand 80 % de ses séries sont maîtrisées — être « A2 » veut
        donc dire qu'on tient le A1 et qu'on travaille le A2.
      </p>
    </div>
  );
}
