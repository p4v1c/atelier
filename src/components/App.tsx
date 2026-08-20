"use client";

/**
 * Ossature de l'application.
 *
 * Même squelette que le fichier d'origine — .app > .entete + #scene — pour que
 * le CSS repris tel quel s'applique sans une seule retouche. `fil` et
 * `accroche` sont pilotés par l'écran affiché, comme le faisaient les
 * `textContent` de l'ancien code.
 *
 * L'ossature tient aussi le MODULE COURANT. Elle n'en connaît aucun par son
 * nom : elle garde un identifiant, le passe au moteur, et laisse l'Atelier
 * présenter ce que le serveur déclare.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import type { PublicUser, SessionSummary, StartedSession } from "@/lib/api-types";
import { ApiError, apiGet, apiPost } from "@/lib/client/api";
import { GuestEngine, ServerEngine, loadPublicContent, type Engine } from "@/lib/client/engine";
import { Atelier } from "./screens/Atelier";
import { Accueil } from "./screens/Accueil";
import { Lecon } from "./screens/Lecon";
import { Serie } from "./screens/Serie";
import { Bilan } from "./screens/Bilan";
import { Stats } from "./screens/Stats";
import { Catalogue } from "./screens/Catalogue";
import { Dictees } from "./screens/Dictees";
import { Dictee } from "./screens/Dictee";
import { Connexion, Inscription, Compte } from "./screens/Auth";
import { presentation } from "./modules";
import type { EcranModule } from "./modules/types";

export type Screen =
  | { name: "atelier" }
  | { name: "accueil" }
  | { name: "serie"; session: StartedSession }
  | { name: "bilan"; summary: SessionSummary; category: string | null }
  | { name: "stats" }
  | { name: "catalogue" }
  | { name: "dictees" }
  | { name: "dictee"; id: string }
  | { name: "lecon"; slug: string }
  | { name: "connexion" }
  | { name: "inscription" }
  | { name: "compte" };

export type Chrome = { fil: string; accroche: string };

/** Le module ouvert la dernière fois : on y revient plutôt qu'à zéro. */
const CLE_MODULE = "atelier:module";

function moduleMemorise(): string {
  if (typeof window === "undefined") return "francais";
  try {
    return window.localStorage.getItem(CLE_MODULE) ?? "francais";
  } catch {
    return "francais";
  }
}

/**
 * « Culture générale » → « Culture <em>générale</em> ».
 *
 * Le fichier d'origine composait son titre ainsi, le dernier mot en italique.
 * On garde le procédé pour tous les modules : le nom change, la main reste.
 */
function titreModule(nom: string): [string, string] {
  const mots = nom.trim().split(" ");
  if (mots.length === 1) return ["", mots[0]!];
  // L'espace fait partie du début : sans lui, « Culture générale » se rendrait
  // « Culturegénérale », les deux fragments étant des nœuds JSX voisins.
  return [`${mots.slice(0, -1).join(" ")} `, mots[mots.length - 1]!];
}

export function App() {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [moduleId, setModuleId] = useState<string>("francais");
  const [modules, setModules] = useState<{ id: string; name: string }[]>([]);
  const [screen, setScreen] = useState<Screen>({ name: "atelier" });
  const [chrome, setChrome] = useState<Chrome>({
    fil: "Entraînement personnel",
    accroche: "Repérer la faute, comprendre pourquoi, ne plus la refaire.",
  });
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => setModuleId(moduleMemorise()), []);

  /** Le catalogue des modules, pour le titre et le sélecteur. */
  useEffect(() => {
    if (!engine) return;
    let vivant = true;
    engine
      .progress()
      .then((p) => vivant && setModules(p.modules.map((m) => ({ id: m.id, name: m.name }))))
      .catch(() => undefined);
    return () => {
      vivant = false;
    };
  }, [engine]);

  /** Lance une série dans le module courant, depuis la navigation du module. */
  const demarrerSerie = useCallback(async () => {
    if (!engine) return;
    try {
      const session = await engine.start({ mode: "training", size: 20, category: null, moduleId });
      setScreen({ name: "serie", session });
    } catch {
      setScreen({ name: "accueil" });
    }
  }, [engine, moduleId]);

  const choisirModule = useCallback((id: string) => {
    setModuleId(id);
    try {
      window.localStorage.setItem(CLE_MODULE, id);
    } catch {
      /* navigation privée : on continue sans mémoire */
    }
    setScreen({ name: "accueil" });
  }, []);

  /** Bascule vers le moteur qui correspond à l'état de connexion. */
  const boot = useCallback(async () => {
    try {
      const me = await apiGet<{ user: PublicUser }>("/api/auth/me");
      setUser(me.user);
      setEngine(new ServerEngine());
    } catch (e) {
      if (!(e instanceof ApiError) || e.status !== 401) {
        setErreur("Impossible de joindre le serveur.");
        return;
      }
      // Pas de compte : mode invité, tout reste dans le navigateur.
      setUser(null);
      setEngine(new GuestEngine(await loadPublicContent()));
    }
  }, []);

  useEffect(() => {
    void boot();
  }, [boot]);

  const seConnecter = useCallback(
    (u: PublicUser) => {
      setUser(u);
      setEngine(new ServerEngine());
      setScreen({ name: "accueil" });
    },
    []
  );

  const seDeconnecter = useCallback(async () => {
    await apiPost("/api/auth/logout").catch(() => undefined);
    setUser(null);
    setEngine(new GuestEngine(await loadPublicContent()));
    setScreen({ name: "accueil" });
  }, []);

  const props = useMemo(
    () => ({ engine: engine!, user, moduleId, setScreen, setChrome, seConnecter, seDeconnecter }),
    [engine, user, moduleId, seConnecter, seDeconnecter]
  );

  const surAtelier = screen.name === "atelier";
  const nomModule = modules.find((m) => m.id === moduleId)?.name ?? "La Règle";
  const [debut, fin] = surAtelier ? ["L’", "Atelier"] : titreModule(nomModule);

  /**
   * L'apparence du module ouvert.
   *
   * L'Atelier lui-même n'en a pas : c'est le vestibule, il garde le sien.
   * Un module qui dessine son propre en-tête fait taire celui de l'ossature —
   * c'est ce qui lui permet de ressembler à un autre site plutôt qu'à une
   * page de plus.
   */
  const look = surAtelier ? {} : presentation(moduleId);
  const enteteCachee = Boolean(look.enteteAutonome) && !surAtelier;

  /**
   * Où la navigation du module doit-elle se croire ?
   *
   * On traduit l'écran courant vers le vocabulaire du module, pour que son
   * onglet actif reste juste même sur un écran générique.
   */
  const ongletActif: EcranModule =
    screen.name === "serie" || screen.name === "bilan"
      ? "serie"
      : screen.name === "catalogue" || screen.name === "lecon"
        ? "catalogue"
        : screen.name === "stats"
          ? "stats"
          : "accueil";

  /** Pose l'enveloppe du module autour de l'écran, quand il en fournit une. */
  const enveloppe = (contenu: React.ReactNode): React.ReactNode => {
    const Enveloppe = surAtelier ? undefined : look.enveloppe;
    if (!Enveloppe) return contenu;
    return (
      <Enveloppe
        actif={ongletActif}
        onde={(destination) => {
          if (destination === "serie") {
            void demarrerSerie();
            return;
          }
          setScreen({ name: destination } as Screen);
        }}
      >
        {contenu}
      </Enveloppe>
    );
  };

  return (
    <div className="app" data-module={surAtelier ? undefined : (look.theme ?? undefined)}>
      {!enteteCachee && (
      <div className="entete">
        <p className="eyebrow">{chrome.fil}</p>
        <h1>
          {debut}
          <em>{fin}</em>
        </h1>
        <p className="sub">{chrome.accroche}</p>
        {!surAtelier && (
          <button className="lien retour-atelier" onClick={() => setScreen({ name: "atelier" })}>
            ← Atelier
          </button>
        )}
      </div>
      )}
      <div id="scene">
        {enveloppe(erreur ? (
          <div className="carte">
            <p className="alerte">{erreur}</p>
          </div>
        ) : !engine ? (
          <p className="legende attente">Chargement de ta progression…</p>
        ) : screen.name === "atelier" ? (
          <Atelier {...props} choisirModule={choisirModule} />
        ) : screen.name === "accueil" ? (
          // L'écran du module s'il en fournit un, sinon le générique.
          look.ecrans?.accueil ? (
            <look.ecrans.accueil {...props} />
          ) : (
            <Accueil {...props} />
          )
        ) : screen.name === "serie" ? (
          <Serie {...props} session={screen.session} />
        ) : screen.name === "bilan" ? (
          <Bilan {...props} summary={screen.summary} category={screen.category} />
        ) : screen.name === "stats" ? (
          look.ecrans?.stats ? (
            <look.ecrans.stats {...props} />
          ) : (
            <Stats {...props} />
          )
        ) : screen.name === "catalogue" ? (
          look.ecrans?.catalogue ? (
            <look.ecrans.catalogue {...props} />
          ) : (
            <Catalogue {...props} />
          )
        ) : screen.name === "dictees" ? (
          <Dictees {...props} />
        ) : screen.name === "dictee" ? (
          <Dictee {...props} id={screen.id} />
        ) : screen.name === "lecon" ? (
          look.ecrans?.lecon ? (
            <look.ecrans.lecon {...props} slug={screen.slug} />
          ) : (
            <Lecon {...props} slug={screen.slug} />
          )
        ) : screen.name === "connexion" ? (
          <Connexion {...props} />
        ) : screen.name === "inscription" ? (
          <Inscription {...props} />
        ) : (
          <Compte {...props} />
        ))}
      </div>
    </div>
  );
}

/** Ce que reçoit chaque écran. */
export type ScreenProps = {
  engine: Engine;
  user: PublicUser | null;
  /** La matière ouverte. Les écrans la transmettent au moteur, sans l'interpréter. */
  moduleId: string;
  setScreen: (screen: Screen) => void;
  setChrome: (chrome: Chrome) => void;
  seConnecter: (user: PublicUser) => void;
  seDeconnecter: () => Promise<void>;
};
