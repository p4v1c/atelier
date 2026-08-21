"use client";

/**
 * Ossature de l'application.
 *
 * Elle tient la coque — flanc, en-tête, scène, pied — et le module courant.
 * Elle ne connaît aucune matière par son nom : elle garde un identifiant, le
 * passe au moteur, et laisse chaque module dire comment il veut se présenter.
 *
 * Les écrans, eux, ne dessinent que leur contenu. La navigation, la liste des
 * matières et les compteurs vivent ici, une fois pour toutes.
 */
import { useCallback, useEffect, useMemo, useState } from "react";
import type { ModuleSummary, PublicUser, SessionSummary, StartedSession } from "@/lib/api-types";
import { ApiError, apiGet, apiPost } from "@/lib/client/api";
import {
  GuestEngine,
  ServerEngine,
  loadPublicContent,
  loadPublicModules,
  type Engine,
} from "@/lib/client/engine";
import { INTERVALS, MASTERY_BOX } from "@/lib/study/scheduler";
import { Coque, type Onglet } from "./Coque";
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

export type Screen =
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
 * On garde le procédé : le nom change, la main reste.
 */
function titreModule(nom: string): [string, string] {
  const mots = nom.trim().split(" ");
  if (mots.length === 1) return ["", mots[0]!];
  // L'espace fait partie du début : sans lui, « Culture générale » se rendrait
  // « Culturegénérale », les deux fragments étant des nœuds JSX voisins.
  return [`${mots.slice(0, -1).join(" ")} `, mots[mots.length - 1]!];
}

/** De quoi nommer un écran quand aucun onglet ne le fait. */
const NOMS_ECRAN: Record<string, string> = {
  serie: "Série",
  bilan: "Bilan",
  stats: "Progression",
  catalogue: "Catalogue",
  dictees: "Dictées",
  dictee: "Dictée",
  lecon: "Leçon",
  connexion: "Connexion",
  inscription: "Inscription",
  compte: "Mon compte",
};

/** Les onglets par défaut. Un module peut fournir les siens. */
const ONGLETS_BASE: Onglet[] = [
  { cle: "accueil", libelle: "Accueil" },
  { cle: "serie", libelle: "Série" },
  { cle: "catalogue", libelle: "Catalogue" },
  { cle: "stats", libelle: "Progression" },
];

export function App() {
  const [user, setUser] = useState<PublicUser | null>(null);
  const [engine, setEngine] = useState<Engine | null>(null);
  const [moduleId, setModuleId] = useState<string>("francais");
  const [modules, setModules] = useState<ModuleSummary[]>([]);
  const [screen, setScreen] = useState<Screen>({ name: "accueil" });
  const [chrome, setChrome] = useState<Chrome>({ fil: "", accroche: "" });
  const [erreur, setErreur] = useState<string | null>(null);

  useEffect(() => setModuleId(moduleMemorise()), []);

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
      // Pas de compte : mode invité, tout reste dans le navigateur. Toutes
      // les matières sont listées ; seule celle qu'on ouvre est téléchargée.
      setUser(null);
      const depart = moduleMemorise();
      const [contenu, matieres] = await Promise.all([
        loadPublicContent(depart),
        loadPublicModules().catch(() => []),
      ]);
      setEngine(new GuestEngine(contenu, matieres));
    }
  }, []);

  useEffect(() => {
    void boot();
  }, [boot]);

  /** Le récapitulatif des matières : il alimente le flanc et les compteurs. */
  const rafraichirModules = useCallback(async () => {
    if (!engine) return;
    try {
      const p = await engine.progress(moduleId);
      setModules(p.modules);
    } catch {
      /* le flanc se contentera de ce qu'il a */
    }
  }, [engine, moduleId]);

  useEffect(() => {
    void rafraichirModules();
  }, [rafraichirModules, screen.name]);

  const seConnecter = useCallback((u: PublicUser) => {
    setUser(u);
    setEngine(new ServerEngine());
    setScreen({ name: "accueil" });
  }, []);

  const seDeconnecter = useCallback(async () => {
    await apiPost("/api/auth/logout").catch(() => undefined);
    setUser(null);
    const [contenu, matieres] = await Promise.all([
      loadPublicContent(moduleMemorise()),
      loadPublicModules().catch(() => []),
    ]);
    setEngine(new GuestEngine(contenu, matieres));
    setScreen({ name: "accueil" });
  }, []);

  const choisirModule = useCallback((id: string) => {
    setModuleId(id);
    try {
      window.localStorage.setItem(CLE_MODULE, id);
    } catch {
      /* navigation privée : on continue sans mémoire */
    }
    setScreen({ name: "accueil" });
  }, []);

  /** Lance une série dans le module courant, depuis l'onglet « Série ». */
  const demarrerSerie = useCallback(async () => {
    if (!engine) return;
    try {
      const session = await engine.start({ mode: "training", size: 20, category: null, moduleId });
      setScreen({ name: "serie", session });
    } catch {
      setScreen({ name: "accueil" });
    }
  }, [engine, moduleId]);

  const props = useMemo(
    () => ({ engine: engine!, user, moduleId, setScreen, setChrome, seConnecter, seDeconnecter }),
    [engine, user, moduleId, seConnecter, seDeconnecter]
  );

  const look = presentation(moduleId);
  const courant = modules.find((m) => m.id === moduleId);
  const nomModule = courant?.name ?? "La Règle";
  const [debut, fin] = titreModule(nomModule);

  /** L'onglet actif, traduit depuis l'écran courant. */
  const ongletActif =
    screen.name === "serie" || screen.name === "bilan"
      ? "serie"
      : screen.name === "catalogue" || screen.name === "lecon"
        ? "catalogue"
        : screen.name === "dictees" || screen.name === "dictee"
          ? "dictee"
          : screen.name === "stats"
            ? "stats"
            : "accueil";

  /** Les onglets : ceux du module s'il en fournit, sinon les génériques.
   *  L'entrée « Dictée » ne s'affiche que si la matière en a. */
  const aDesDictees = (courant?.dictationCount ?? 0) > 0;
  const onglets: Onglet[] = (
    look.onglets ??
    (aDesDictees
      ? [...ONGLETS_BASE.slice(0, 3), { cle: "dictee", libelle: "Dictée" }, ...ONGLETS_BASE.slice(3)]
      : ONGLETS_BASE)
  ).filter((o: Onglet) => o.cle !== "dictee" || aDesDictees);

  const allerA = (cle: string) => {
    if (cle === "serie") {
      void demarrerSerie();
      return;
    }
    if (cle === "dictee") {
      setScreen({ name: "dictees" });
      return;
    }
    setScreen({ name: cle } as Screen);
  };

  /* Le fil d'Ariane emprunte d'ordinaire son dernier mot à l'onglet courant.
     Un module qui n'a pas d'onglets n'a rien à lui emprunter : ces noms-là
     prennent le relais, faute de quoi tous ses écrans s'annonceraient pareil. */
  const nomEcran =
    ongletActif === "accueil"
      ? screen.name === "accueil"
        ? (look.nomAccueil ?? "Aujourd’hui")
        : (NOMS_ECRAN[screen.name] ?? "Aujourd’hui")
      : (onglets.find((o) => o.cle === ongletActif)?.libelle ??
        NOMS_ECRAN[screen.name] ??
        "Aujourd’hui");

  const contenu = erreur ? (
    <div className="plateau">
      <p className="alerte">{erreur}</p>
    </div>
  ) : !engine ? (
    <div className="plateau">
      <p className="legende attente">Chargement de ta progression…</p>
    </div>
  ) : screen.name === "accueil" ? (
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
  );

  return (
    <div className="app" data-module={look.theme ?? undefined} data-langue={look.langue ? moduleId : undefined}>
      <Coque
        marque={
          look.marque ?? (
            <>
              {debut}
              <em>{fin}</em>
            </>
          )
        }
        sousMarque={look.sousMarque ?? chrome.accroche}
        modules={modules}
        moduleCourant={moduleId}
        onModule={choisirModule}
        user={user}
        onCompte={() => setScreen(user ? { name: "compte" } : { name: "inscription" })}
        fil={[nomModule, nomEcran]}
        onglets={onglets}
        ongletActif={ongletActif}
        onOnglet={allerA}
        compteur={
          courant && (
            <>
              <b>{courant.due}</b> à réviser · {courant.mastered}/{courant.skillCount} acquis
            </>
          )
        }
        piedGauche={
          courant &&
          `${courant.name} · ${user ? "progression synchronisée" : "progression sur cet appareil"} · niveau ${courant.level}`
        }
        piedDroite={`Maîtrise au palier ${MASTERY_BOX} · intervalles ${INTERVALS.join(" · ")}`}
      >
        {contenu}
      </Coque>
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
