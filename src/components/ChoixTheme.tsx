"use client";

/**
 * Le sélecteur de thème.
 *
 * Un rond de vingt-deux pixels partagé en quatre quartiers, dans la barre
 * d'en-tête. On clique, quatre thèmes s'affichent — celui qui est actif
 * compris —, on en choisit un, la page change.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * POURQUOI L'ATTRIBUT EST SUR <html> ET NON SUR .app
 *
 * Le fond de page est peint sur `body`, qui est au-dessus de `.app` dans
 * l'arbre. Poser le thème sur `.app` laisserait donc une bande du thème
 * précédent autour de l'application — visible dès qu'on redimensionne.
 *
 * Conséquence : le choix ne peut pas être rendu côté serveur, et un script
 * inline dans layout.tsx pose l'attribut avant la première peinture. Sans
 * lui, la page clignote une fraction de seconde dans le thème par défaut.
 */
import { useEffect, useRef, useState } from "react";

export type Theme = "nuit" | "charbon" | "jour" | "sepia";

/**
 * Les quatre quartiers de chaque pastille : le fond, l'accent, l'or, le texte.
 *
 * Ce sont les vraies valeurs du thème, recopiées ici plutôt que lues dans le
 * CSS : la pastille d'une ligne doit montrer SON thème, pas celui qui est
 * actif, et une variable CSS ne dit que la valeur courante.
 */
const THEMES: { cle: Theme; nom: string; rond: [string, string, string, string] }[] = [
  { cle: "nuit", nom: "Nuit", rond: ["#211A44", "#9084C9", "#E3B04B", "#EDE8F5"] },
  { cle: "charbon", nom: "Charbon", rond: ["#141417", "#9EA6F0", "#E9B950", "#F2F2F4"] },
  { cle: "jour", nom: "Jour", rond: ["#DCD9D2", "#493E88", "#6D5008", "#14111F"] },
  { cle: "sepia", nom: "Sépia", rond: ["#D8CBB2", "#4F3568", "#63430A", "#241B10"] },
];

const CLE = "atelier:theme";

const quartiers = ([t1, t2, t3, t4]: [string, string, string, string]) =>
  ({ "--t1": t1, "--t2": t2, "--t3": t3, "--t4": t4 }) as React.CSSProperties;

export function ChoixTheme() {
  const [theme, setTheme] = useState<Theme>("nuit");
  const [ouvert, setOuvert] = useState(false);
  const boite = useRef<HTMLDivElement>(null);

  /* L'attribut est déjà posé par le script inline : on ne fait que relire ce
     qu'il a écrit, pour que le bouton montre le bon thème. */
  useEffect(() => {
    const pose = document.documentElement.dataset.theme as Theme | undefined;
    if (pose && THEMES.some((t) => t.cle === pose)) setTheme(pose);
  }, []);

  /* Un menu qui ne se ferme qu'en cliquant sur son propre bouton est un
     piège : on clique ailleurs, il reste. Échap ferme aussi, parce qu'un
     menu ouvert au clavier doit pouvoir se fermer au clavier. */
  useEffect(() => {
    if (!ouvert) return;
    const dehors = (e: MouseEvent) => {
      if (!boite.current?.contains(e.target as Node)) setOuvert(false);
    };
    const echap = (e: KeyboardEvent) => e.key === "Escape" && setOuvert(false);
    document.addEventListener("mousedown", dehors);
    document.addEventListener("keydown", echap);
    return () => {
      document.removeEventListener("mousedown", dehors);
      document.removeEventListener("keydown", echap);
    };
  }, [ouvert]);

  const choisir = (cle: Theme) => {
    setTheme(cle);
    setOuvert(false);
    document.documentElement.dataset.theme = cle;
    try {
      window.localStorage.setItem(CLE, cle);
    } catch {
      /* navigation privée : le thème vaut pour la session, pas au-delà */
    }
  };

  const courant = THEMES.find((t) => t.cle === theme) ?? THEMES[0]!;

  return (
    <div className="choix-theme" ref={boite}>
      <button
        className="pastille"
        style={quartiers(courant.rond)}
        aria-haspopup="menu"
        aria-expanded={ouvert}
        aria-label={`Thème : ${courant.nom}. Changer de thème.`}
        title={`Thème : ${courant.nom}`}
        onClick={() => setOuvert((o) => !o)}
      />

      {ouvert && (
        <div className="menu-theme" role="menu">
          {THEMES.map((t) => (
            <button
              key={t.cle}
              role="menuitemradio"
              aria-checked={t.cle === theme}
              onClick={() => choisir(t.cle)}
            >
              <span className="rond" style={quartiers(t.rond)} aria-hidden />
              {t.nom}
              {t.cle === theme && (
                <span className="coche" aria-hidden>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
