"use client";

/**
 * L'enveloppe du Cahier : sa barre de navigation et son pied de page, posées
 * autour de n'importe quel écran — y compris les écrans génériques.
 *
 * C'est ce qui fait qu'on reste « dans le cahier » quand on passe du quiz aux
 * leçons, au lieu de traverser trois mises en page différentes.
 */
import type { EcranModule } from "../types";

type Props = {
  children: React.ReactNode;
  onde: (destination: EcranModule) => void;
  actif: EcranModule;
};

const LIENS: { cle: EcranModule; libelle: string }[] = [
  { cle: "accueil", libelle: "Accueil" },
  { cle: "serie", libelle: "Quiz" },
  { cle: "catalogue", libelle: "Cours" },
  { cle: "stats", libelle: "Progression" },
];

export function EnveloppeCultureG({ children, onde, actif }: Props) {
  return (
    <div className="cg-wrap">
      <header className="cg-topbar">
        <button className="cg-brand" onClick={() => onde("accueil")}>
          Le Cahier <span className="rouge">de culture G</span>
        </button>
        <span className="cg-tag">réviser · apprendre · retenir</span>
        <nav className="cg-nav">
          {LIENS.map((l) => (
            <button
              key={l.cle}
              className={`cg-navbtn ${actif === l.cle ? "on" : ""}`}
              onClick={() => onde(l.cle)}
            >
              {l.libelle}
            </button>
          ))}
          <button className="cg-navbtn" onClick={() => onde("atelier")}>
            ← Atelier
          </button>
        </nav>
      </header>

      {children}

      <p className="cg-footer">
        Contenu rédigé à partir de connaissances encyclopédiques établies. En cas de doute sur un
        fait, vérifie la source primaire.
      </p>
    </div>
  );
}
