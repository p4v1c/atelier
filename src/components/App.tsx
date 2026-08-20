"use client";

/**
 * Ossature de l'application.
 *
 * Même squelette que le fichier d'origine — .app > .entete + #scene — pour que
 * le CSS repris tel quel s'applique sans une seule retouche. `fil` et
 * `accroche` sont pilotés par l'écran affiché, comme le faisaient les
 * `textContent` de l'ancien code.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import type { PublicUser, SessionSummary, StartedSession } from "@/lib/api-types";
import { ApiError, apiGet, apiPost } from "@/lib/client/api";
import { GuestEngine, ServerEngine, loadPublicContent, type Engine } from "@/lib/client/engine";
import { Accueil } from "./screens/Accueil";
import { Serie } from "./screens/Serie";
import { Bilan } from "./screens/Bilan";
import { Stats } from "./screens/Stats";
import { Catalogue } from "./screens/Catalogue";
import { Dictees } from "./screens/Dictees";
import { Dictee } from "./screens/Dictee";
import { Connexion, Inscription, Compte } from "./screens/Auth";

export type Screen =
  | { name: "accueil" }
  | { name: "serie"; session: StartedSession }
  | { name: "bilan"; summary: SessionSummary; category: string | null }
  | { name: "stats" }
  | { name: "catalogue" }
  | { name: "dictees" }
  | { name: "dictee"; id: string }
  | { name: "connexion" }
  | { name: "inscription" }
  | { name: "compte" };

export type Chrome = { fil: string; accroche: string };

export function App() {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [screen, setScreen] = useState<Screen>({ name: "accueil" });
  const [chrome, setChrome] = useState<Chrome>({
    fil: "Entraînement personnel",
    accroche: "Repérer la faute, comprendre pourquoi, ne plus la refaire.",
  });
  const [erreur, setErreur] = useState<string | null>(null);

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
    () => ({ engine: engine!, user, setScreen, setChrome, seConnecter, seDeconnecter }),
    [engine, user, seConnecter, seDeconnecter]
  );

  return (
    <div className="app">
      <div className="entete">
        <p className="eyebrow">{chrome.fil}</p>
        <h1>
          La <em>Règle</em>
        </h1>
        <p className="sub">{chrome.accroche}</p>
      </div>
      <div id="scene">
        {erreur ? (
          <div className="carte">
            <p className="alerte">{erreur}</p>
          </div>
        ) : !engine ? (
          <p className="legende attente">Chargement de ta progression…</p>
        ) : screen.name === "accueil" ? (
          <Accueil {...props} />
        ) : screen.name === "serie" ? (
          <Serie {...props} session={screen.session} />
        ) : screen.name === "bilan" ? (
          <Bilan {...props} summary={screen.summary} category={screen.category} />
        ) : screen.name === "stats" ? (
          <Stats {...props} />
        ) : screen.name === "catalogue" ? (
          <Catalogue {...props} />
        ) : screen.name === "dictees" ? (
          <Dictees {...props} />
        ) : screen.name === "dictee" ? (
          <Dictee {...props} id={screen.id} />
        ) : screen.name === "connexion" ? (
          <Connexion {...props} />
        ) : screen.name === "inscription" ? (
          <Inscription {...props} />
        ) : (
          <Compte {...props} />
        )}
      </div>
    </div>
  );
}

/** Ce que reçoit chaque écran. */
export type ScreenProps = {
  engine: Engine;
  user: PublicUser | null;
  setScreen: (screen: Screen) => void;
  setChrome: (chrome: Chrome) => void;
  seConnecter: (user: PublicUser) => void;
  seDeconnecter: () => Promise<void>;
};
