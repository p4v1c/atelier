"use client";

/**
 * L'atlas de référence — ce qu'on consulte, par opposition à ce qu'on passe.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI IL N'Y A PAS DE PROGRESSION ICI
 *
 * Un exercice se compte : on l'a vu, on l'a réussi, il revient dans trois
 * jours. Une page de référence ne se compte pas. Afficher « 12 % lu » sur une
 * liste de capitales n'informerait de rien — on ne lit pas une table de
 * référence du début à la fin, on y cherche ce qu'on ne sait pas.
 *
 * C'est aussi ce qui manquait à la matière : on pouvait s'entraîner sans
 * jamais pouvoir CONSULTER. Or on n'apprend pas les capitales du monde en se
 * trompant dix fois de suite ; on les lit d'abord.
 *
 * Quatre pages, une par jeu, et la quatrième est une carte muette : on promène
 * la souris, le nom s'affiche. C'est l'inverse exact de l'exercice, et c'est ce
 * qui le prépare.
 */
import { useEffect, useState } from "react";
import type { AtlasPayload } from "@/lib/api-types";
import { apiGet } from "@/lib/client/api";
import { FONDS } from "@/lib/cartes/charger";
import { REGIONS_CARTE } from "@/lib/cartes/regions";
import type { FondDeCarte } from "@/lib/cartes/types";

export type PageFiche = "capitales" | "drapeaux" | "mers" | "carte";

export const PAGES: { cle: PageFiche; nom: string; quoi: string }[] = [
  { cle: "capitales", nom: "Capitales", quoi: "Chaque pays et sa capitale, continent par continent." },
  { cle: "drapeaux", nom: "Drapeaux", quoi: "Tous les drapeaux, avec le nom du pays sous chacun." },
  { cle: "mers", nom: "Mers et océans", quoi: "Les vingt-neuf étendues d'eau, et ce qui les caractérise." },
  { cle: "carte", nom: "Cartes muettes", quoi: "Une carte par continent. La souris passe, le nom s'affiche." },
];

/** Le drapeau d'un pays, déduit de son code à deux lettres. */
const drapeauDe = (a2: string) =>
  String.fromCodePoint(...[...a2.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));

export function Fiches({ page, ouvrir, revenir }: {
  page: PageFiche;
  ouvrir: (p: PageFiche) => void;
  revenir: () => void;
}) {
  const [atlas, setAtlas] = useState<AtlasPayload | null>(null);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    let vivant = true;
    void apiGet<AtlasPayload>("/api/public/atlas")
      .then((r) => vivant && setAtlas(r))
      .catch(() => vivant && setErreur(true));
    return () => {
      vivant = false;
    };
  }, []);

  const courante = PAGES.find((p) => p.cle === page)!;

  return (
    <div className="plateau fiches">
      <header className="fiches-tete">
        <button className="retour" onClick={revenir}>
          ← Revenir aux jeux
        </button>
        <h2>{courante.nom}</h2>
        <p>{courante.quoi}</p>
      </header>

      <nav className="fiches-onglets" aria-label="Page de référence">
        {PAGES.map((p) => (
          <button
            key={p.cle}
            className={`fiche-onglet ${p.cle === page ? "actif" : ""}`}
            aria-current={p.cle === page ? "true" : undefined}
            onClick={() => ouvrir(p.cle)}
          >
            {p.nom}
          </button>
        ))}
      </nav>

      {erreur && <p className="alerte">L’atlas n’a pas pu être chargé.</p>}
      {!erreur && !atlas && page !== "carte" && <p className="legende attente">Chargement…</p>}

      {page === "capitales" && atlas && <Capitales atlas={atlas} />}
      {page === "drapeaux" && atlas && <Drapeaux atlas={atlas} />}
      {page === "mers" && atlas && <Mers atlas={atlas} />}
      {page === "carte" && <CarteMuette />}
    </div>
  );
}

function Capitales({ atlas }: { atlas: AtlasPayload }) {
  return (
    <div className="fiches-corps">
      {atlas.continents.map((c) => (
        <section key={c.cle}>
          <p className="mono-titre">
            {c.nom} · {c.pays.length}
          </p>
          <table className="table-atlas">
            <thead>
              <tr>
                <th scope="col">Pays</th>
                <th scope="col">Capitale</th>
                <th scope="col">Où</th>
              </tr>
            </thead>
            <tbody>
              {c.pays.map((f) => (
                <tr key={f.id}>
                  <th scope="row">
                    <span className="drapeau" aria-hidden>
                      {drapeauDe(f.a2)}
                    </span>
                    {f.nom}
                  </th>
                  <td className="valeur">{f.capitale}</td>
                  <td className="ou">{f.ou}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

function Drapeaux({ atlas }: { atlas: AtlasPayload }) {
  return (
    <div className="fiches-corps">
      {atlas.continents.map((c) => (
        <section key={c.cle}>
          <p className="mono-titre">
            {c.nom} · {c.pays.length}
          </p>
          {/* Les drapeaux sont des caractères, pas des images : rien à charger,
              rien à mettre en cache, et ils suivent la police du système. */}
          <ul className="mur-drapeaux">
            {c.pays.map((f) => (
              <li key={f.id}>
                <span className="embleme" aria-hidden>
                  {drapeauDe(f.a2)}
                </span>
                <span className="nom">{f.nom}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Mers({ atlas }: { atlas: AtlasPayload }) {
  return (
    <div className="fiches-corps">
      <p className="avertissement">
        Les limites d’une mer sont une <b>convention</b>, pas un relevé : l’Organisation hydrographique
        internationale les fixe par des lignes entre des caps, et les cartes ne s’accordent pas toutes.
      </p>
      <ul className="liste-mers">
        {atlas.mers.map((m) => (
          <li key={m.id}>
            <b>{m.nom}</b>
            <span>{m.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * La carte muette.
 *
 * Elle ne demande rien et ne note rien : on promène la souris, le nom
 * s'affiche. C'est exactement l'inverse de l'exercice — et c'est ce qui le
 * prépare, puisqu'on ne peut pas retrouver un pays qu'on n'a jamais vu situé.
 */
function CarteMuette() {
  const [region, setRegion] = useState("europe");
  const [fond, setFond] = useState<FondDeCarte | null>(null);
  const [survole, setSurvole] = useState<{ nom: string; mer: boolean } | null>(null);

  useEffect(() => {
    let vivant = true;
    setFond(null);
    setSurvole(null);
    void FONDS[region]?.().then((f) => vivant && setFond(f));
    return () => {
      vivant = false;
    };
  }, [region]);

  const gabarit = REGIONS_CARTE.find((r) => r.cle === region);
  const ratio = gabarit ? `${gabarit.largeur} / ${gabarit.hauteur}` : "3 / 2";
  const ratioNum = gabarit ? gabarit.largeur / gabarit.hauteur : 1.5;

  /* Le nom se réserve sa ligne, même vide. Sans cela, la carte monte et
     descend d'un cran chaque fois que la souris entre ou sort d'un pays. */
  const etiquette = survole?.nom ?? "Passe la souris sur la carte";

  return (
    <div className="fiches-corps">
      <nav className="continents" aria-label="Carte">
        {REGIONS_CARTE.map((r) => (
          <button
            key={r.cle}
            className={`continent ${r.cle === region ? "actif" : ""}`}
            aria-current={r.cle === region ? "true" : undefined}
            onClick={() => setRegion(r.cle)}
          >
            {r.titre}
          </button>
        ))}
      </nav>

      <p className={`carte-etiquette ${survole ? "" : "vide"} ${survole?.mer ? "eau" : ""}`}>
        {etiquette}
      </p>

      <div
        className="carte-cadre"
        style={{ "--carte-ratio": ratio, "--carte-ratio-num": ratioNum } as React.CSSProperties}
        onMouseLeave={() => setSurvole(null)}
      >
        {!fond && <p className="legende carte-etat attente">Chargement de la carte…</p>}

        {fond && (
          <svg
            className="carte-monde muette"
            viewBox={`0 0 ${fond.largeur} ${fond.hauteur}`}
            role="group"
            aria-label={`${fond.titre} — ${fond.pays.length} pays, ${fond.mers.length} étendues d’eau`}
          >
            {fond.mers.map((t) => (
              <path
                key={t.id}
                d={t.d}
                className={`mer ${survole?.nom === t.nom ? "survole" : ""}`}
                aria-label={t.nom}
                onMouseEnter={() => setSurvole({ nom: t.nom, mer: true })}
              />
            ))}
            {fond.pays.map((t) => (
              <path
                key={t.id}
                d={t.d}
                className={`pays ${survole?.nom === t.nom ? "survole" : ""}`}
                aria-label={t.nom}
                onMouseEnter={() => setSurvole({ nom: t.nom, mer: false })}
              />
            ))}
          </svg>
        )}
      </div>

      {/* Une carte ne se survole pas au clavier. La liste dit le même contenu,
          et sert aussi à qui cherche un nom précis. */}
      {fond && (
        <details className="carte-repli">
          <summary>Lire la liste</summary>
          <div className="puces">
            {[...fond.mers, ...fond.pays].map((t) => (
              <span key={t.id} className="puce">
                {t.nom}
              </span>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}
