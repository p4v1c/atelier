"use client";

/**
 * La coque : flanc, en-tête, scène, pied.
 *
 * Ce qui sert à toute heure — les matières, ce qui est dû, l'onglet courant —
 * reste visible en permanence, au lieu de se gagner par des allers-retours.
 *
 * Elle est la même pour toutes les matières. Ce qui change d'un module à
 * l'autre, c'est la marque en haut du flanc, les onglets, et la couleur
 * d'accent — trois choses que le module déclare, sans avoir à redessiner une
 * page entière.
 */
import type { ModuleSummary, PublicUser } from "@/lib/api-types";

export type Onglet = { cle: string; libelle: string };

type Props = {
  /** La marque du module : « L'Atelier », « Le Cahier de culture G »… */
  marque: React.ReactNode;
  /** Sous la marque : la nature de la matière, en petites capitales. */
  sousMarque?: string;
  modules: ModuleSummary[];
  moduleCourant: string | null;
  onModule: (id: string) => void;
  user: PublicUser | null;
  onCompte: () => void;
  /** Le fil d'Ariane : « FRANÇAIS / CATALOGUE ». */
  fil: string[];
  onglets: Onglet[];
  ongletActif: string;
  onOnglet: (cle: string) => void;
  /** À droite de l'en-tête : ce qui est dû, ce qui est acquis. */
  compteur?: React.ReactNode;
  /** Le pied : à gauche l'état, à droite le rappel du planificateur. */
  piedGauche?: React.ReactNode;
  piedDroite?: React.ReactNode;
  children: React.ReactNode;
};

/** « quatorze » plutôt que « 14 » quand rien n'a encore été vu. */
function marqueModule(m: ModuleSummary): { texte: string; classe: string } {
  if (m.seen === 0) return { texte: "neuf", classe: "neuf" };
  if (m.due > 0) return { texte: String(m.due), classe: "" };
  return { texte: `${Math.round((m.mastered / Math.max(1, m.skillCount)) * 100)} %`, classe: "" };
}

export function Coque({
  marque,
  sousMarque,
  modules,
  moduleCourant,
  onModule,
  user,
  onCompte,
  fil,
  onglets,
  ongletActif,
  onOnglet,
  compteur,
  piedGauche,
  piedDroite,
  children,
}: Props) {
  return (
    <div className="coque">
      <aside className="flanc">
        <div className="flanc-marque">
          <h1>{marque}</h1>
          {sousMarque && <p className="sous">{sousMarque}</p>}
        </div>

        <p className="flanc-titre">Matières</p>
        <nav className="flanc-matieres">
          {modules.map((m) => {
            const marque = marqueModule(m);
            const part = m.skillCount ? (m.mastered / m.skillCount) * 100 : 0;
            return (
              <button
                key={m.id}
                className={`matiere-lien ${m.id === moduleCourant ? "active" : ""}`}
                onClick={() => onModule(m.id)}
              >
                <span className="nom" style={{ "--part": `${part}%` } as React.CSSProperties}>
                  {m.name}
                </span>
                <span className={`marque ${marque.classe}`}>{marque.texte}</span>
              </button>
            );
          })}
        </nav>

        <div className="flanc-pied">
          {user ? (
            <>
              <span className="qui">{user.pseudo}</span>
              <button onClick={onCompte}>Mon compte</button>
            </>
          ) : (
            <button onClick={onCompte}>Créer un compte</button>
          )}
        </div>
      </aside>

      <div className="scene">
        <header className="coque-barre">
          <span className="fil-ariane">
            {fil.map((mot, i) => (
              <span key={i}>
                {i > 0 && " / "}
                {i === fil.length - 1 ? <b>{mot}</b> : mot}
              </span>
            ))}
          </span>

          {onglets.length > 0 && (
            <nav className="onglets">
              {onglets.map((o) => (
                <button
                  key={o.cle}
                  className={`onglet ${o.cle === ongletActif ? "actif" : ""}`}
                  onClick={() => onOnglet(o.cle)}
                >
                  {o.libelle}
                </button>
              ))}
            </nav>
          )}

          {compteur && <span className="barre-fin">{compteur}</span>}
        </header>

        {children}

        <footer className="pied-coque">
          <span>{piedGauche}</span>
          <span className="droite">{piedDroite}</span>
        </footer>
      </div>
    </div>
  );
}
