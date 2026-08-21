"use client";

/**
 * Les trois écrans que le fichier d'origine n'avait pas : connexion,
 * inscription, et l'espace « mon compte ».
 *
 * Ils empilaient des .carte, la mise en page d'avant la coque. Ils emploient
 * maintenant le vocabulaire commun : un plateau, un titre en petites capitales
 * par bloc, une colonne de formulaire à la mesure d'un champ — un formulaire
 * de deux champs étalé sur douze cents pixels ne se remplit pas plus vite — et
 * les faits du compte en lignes denses, comme la fiche du catalogue.
 */
import { useCallback, useEffect, useState, type FormEvent } from "react";
import type { PublicUser, SessionOuverte } from "@/lib/api-types";
import { ApiError, apiGet, apiPost } from "@/lib/client/api";
import { clearGuestState, hasGuestProgress, loadGuestState, toTransferPayload } from "@/lib/client/guest-store";
import type { ScreenProps } from "../App";

type Champs = Record<string, string[]>;

function Erreurs({ champs, nom }: { champs: Champs; nom: string }) {
  const messages = champs[nom];
  if (!messages?.length) return null;
  return <span className="erreur">{messages.join(" ")}</span>;
}

/* ─────────────────────────── connexion ─────────────────────────── */

export function Connexion({ setScreen, setChrome, seConnecter }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [champs, setChamps] = useState<Champs>({});
  const [occupe, setOccupe] = useState(false);

  useEffect(() => {
    setChrome({ fil: "Connexion", accroche: "Retrouve ta progression, quel que soit l’appareil." });
  }, [setChrome]);

  const envoyer = async (e: FormEvent) => {
    e.preventDefault();
    setOccupe(true);
    setErreur(null);
    setChamps({});
    try {
      const { user } = await apiPost<{ user: PublicUser }>("/api/auth/login", { email, password: motDePasse });
      seConnecter(user);
    } catch (e) {
      if (e instanceof ApiError) {
        setErreur(e.message);
        setChamps(e.details ?? {});
      } else setErreur("Impossible de joindre le serveur.");
      setOccupe(false);
    }
  };

  return (
    <div className="plateau">
      <div className="colonne-formulaire">
        <p className="mono-titre">Se connecter</p>
        <h2 className="fiche-entete-titre">Reprendre où tu en étais</h2>
        {erreur && <p className="alerte">{erreur}</p>}
        <form onSubmit={envoyer}>
          <label className="champ">
            <span>Adresse électronique</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            <Erreurs champs={champs} nom="email" />
          </label>
          <label className="champ">
            <span>Mot de passe</span>
            <input
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              autoComplete="current-password"
              required
            />
            <Erreurs champs={champs} nom="password" />
          </label>
          <div className="bas">
            <button className="plein" type="submit" disabled={occupe}>
              Se connecter
            </button>
            <button className="creux" type="button" onClick={() => setScreen({ name: "inscription" })}>
              Créer un compte
            </button>
            <button className="lien" type="button" onClick={() => setScreen({ name: "accueil" })}>
              Continuer en invité
            </button>
          </div>
        </form>
        <p className="rail-bas">
          Pas de réinitialisation par courriel : un mot de passe perdu est un compte perdu.
        </p>
      </div>
    </div>
  );
}

/* ────────────────────────── inscription ────────────────────────── */

export function Inscription({ setScreen, setChrome, seConnecter }: ScreenProps) {
  const [email, setEmail] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [transferer, setTransferer] = useState(true);
  const [erreur, setErreur] = useState<string | null>(null);
  const [champs, setChamps] = useState<Champs>({});
  const [occupe, setOccupe] = useState(false);
  const [invite, setInvite] = useState(false);

  useEffect(() => {
    setChrome({ fil: "Créer un compte", accroche: "Ta progression te suivra d’un appareil à l’autre." });
    setInvite(hasGuestProgress(loadGuestState()));
  }, [setChrome]);

  const envoyer = async (e: FormEvent) => {
    e.preventDefault();
    setOccupe(true);
    setErreur(null);
    setChamps({});
    try {
      const guest = loadGuestState();
      const { user } = await apiPost<{ user: PublicUser }>("/api/auth/register", {
        email,
        pseudo,
        password: motDePasse,
        ...(invite && transferer ? { guestProgress: toTransferPayload(guest) } : {}),
      });
      // La progression locale a été recopiée : la garder ferait deux vérités.
      if (invite && transferer) clearGuestState();
      seConnecter(user);
    } catch (e) {
      if (e instanceof ApiError) {
        setErreur(e.message);
        setChamps(e.details ?? {});
      } else setErreur("Impossible de joindre le serveur.");
      setOccupe(false);
    }
  };

  return (
    <div className="plateau">
      <div className="colonne-formulaire">
        <p className="mono-titre">Créer un compte</p>
        <h2 className="fiche-entete-titre">Une progression qui suit l’appareil</h2>
        {erreur && <p className="alerte">{erreur}</p>}
        <form onSubmit={envoyer}>
          <label className="champ">
            <span>Adresse électronique</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            <Erreurs champs={champs} nom="email" />
          </label>
          <label className="champ">
            <span>Pseudo</span>
            <input value={pseudo} onChange={(e) => setPseudo(e.target.value)} autoComplete="nickname" required />
            <Erreurs champs={champs} nom="pseudo" />
          </label>
          <label className="champ">
            <span>Mot de passe</span>
            <input
              type="password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              autoComplete="new-password"
              required
            />
            <span className="aide">Dix caractères au minimum. Rien d’autre à respecter.</span>
            <Erreurs champs={champs} nom="password" />
          </label>

          {invite && (
            <label className="champ case">
              <input
                type="checkbox"
                checked={transferer}
                onChange={(e) => setTransferer(e.target.checked)}
              />
              <span>Transférer ma progression d’invité vers ce compte</span>
            </label>
          )}

          <div className="bas">
            <button className="plein" type="submit" disabled={occupe}>
              Créer le compte
            </button>
            <button className="creux" type="button" onClick={() => setScreen({ name: "connexion" })}>
              J’ai déjà un compte
            </button>
            <button className="lien" type="button" onClick={() => setScreen({ name: "accueil" })}>
              Continuer en invité
            </button>
          </div>
        </form>
        <p className="rail-bas">
          Sans compte, tout marche aussi : la progression reste dans ce navigateur.
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────── mon compte ─────────────────────────── */

/**
 * Depuis quand, en français et sans dépendance.
 *
 * `Intl.RelativeTimeFormat` existe dans tous les navigateurs visés et sait
 * dire « il y a 3 jours » ; il ne sait pas dire « maintenant », qu'il rend
 * « il y a 0 seconde ». Le premier palier est donc écrit à la main.
 */
function depuis(iso: string): string {
  const secondes = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 1000));
  if (secondes < 90) return "maintenant";
  const fmt = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
  const paliers: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, "minute"],
    [3600, "hour"],
    [86400, "day"],
  ];
  for (const [taille, unite] of paliers) {
    const suivant = taille === 60 ? 3600 : taille === 3600 ? 86400 : Infinity;
    if (secondes < suivant) return fmt.format(-Math.round(secondes / taille), unite);
  }
  return fmt.format(-Math.round(secondes / 86400), "day");
}

/**
 * Mon compte.
 *
 * Deux volets, et le partage n'est pas décoratif. À gauche ce qu'on peut
 * CHANGER : son identité, son mot de passe, sa présence. À droite ce qu'on
 * peut SAVOIR : ses données, ses sessions ouvertes, ce que l'application ne
 * fera pas pour lui. Un écran de compte qui mélange les deux se lit deux fois.
 */
export function Compte({ user, setScreen, setChrome, seDeconnecter }: ScreenProps) {
  const [actuel, setActuel] = useState("");
  const [nouveau, setNouveau] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [succes, setSucces] = useState<string | null>(null);
  const [champs, setChamps] = useState<Champs>({});
  const [occupe, setOccupe] = useState(false);
  const [sessions, setSessions] = useState<SessionOuverte[] | null>(null);
  /* Le compteur de réponses date du chargement de l'application : il peut
     avoir trois séries de retard. On le relit en ouvrant l'écran. */
  const [compteur, setCompteur] = useState<number | null>(null);
  const [exporte, setExporte] = useState(false);

  useEffect(() => {
    setChrome({ fil: "Mon compte", accroche: "Tes identifiants et tes données." });
  }, [setChrome]);

  /* Les sessions se rechargent après un changement de mot de passe : il en
     ferme toutes les autres, et une liste qui les montrerait encore ferait
     douter que la serrure ait vraiment changé. */
  const chargerSessions = useCallback(() => {
    if (!user) return;
    void apiGet<{ sessions: SessionOuverte[] }>("/api/account/sessions")
      .then((r) => setSessions(r.sessions))
      .catch(() => setSessions([]));
    void apiGet<{ user: PublicUser }>("/api/auth/me")
      .then((r) => setCompteur(r.user.answerCounter))
      .catch(() => undefined);
  }, [user]);

  useEffect(chargerSessions, [chargerSessions]);

  const changer = async (e: FormEvent) => {
    e.preventDefault();
    setOccupe(true);
    setErreur(null);
    setSucces(null);
    setChamps({});
    try {
      const r = await apiPost<{ revokedSessions: number }>("/api/auth/password", {
        currentPassword: actuel,
        newPassword: nouveau,
      });
      setActuel("");
      setNouveau("");
      setSucces(
        r.revokedSessions > 0
          ? `Mot de passe changé. ${r.revokedSessions} autre(s) session(s) déconnectée(s).`
          : "Mot de passe changé."
      );
      chargerSessions();
    } catch (e) {
      if (e instanceof ApiError) {
        setErreur(e.message);
        setChamps(e.details ?? {});
      } else setErreur("Impossible de joindre le serveur.");
    } finally {
      setOccupe(false);
    }
  };

  const exporter = async () => {
    setExporte(false);
    const data = await apiGet<unknown>("/api/account/export");
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `la-regle-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExporte(true);
  };

  if (!user) {
    return (
      <div className="plateau">
        <div className="colonne-formulaire">
          <p className="mono-titre">Mon compte</p>
          <p className="legende">Tu n’es pas connecté.</p>
          <div className="bas">
            <button className="plein" onClick={() => setScreen({ name: "connexion" })}>
              Se connecter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="plateau avec-rail">
      <div className="principal ecran-compte">
        <p className="mono-titre">Compte</p>
        <div className="fiche-faits">
          <p className="fiche-fait">
            <span>Pseudo</span>
            <b>{user.pseudo}</b>
          </p>
          <p className="fiche-fait">
            <span>Adresse</span>
            <b>{user.email}</b>
          </p>
          <p className="fiche-fait">
            <span>Inscription</span>
            <b>{new Date(user.createdAt).toLocaleDateString("fr-FR")}</b>
          </p>
          <p className="fiche-fait">
            <span>Réponses traitées</span>
            <b>{compteur ?? user.answerCounter}</b>
          </p>
        </div>

        <p className="mono-titre">Changer de mot de passe</p>
        {erreur && <p className="alerte">{erreur}</p>}
        {succes && <p className="alerte bonne">{succes}</p>}

        <form onSubmit={changer}>
          {/* Les deux champs côte à côte : ils se remplissent d'un même geste,
              et un formulaire de deux lignes n'a pas à occuper un écran. */}
          <div className="duo-champs">
            <label className="champ">
              <span>Mot de passe actuel</span>
              <input
                type="password"
                value={actuel}
                onChange={(e) => setActuel(e.target.value)}
                autoComplete="current-password"
                required
              />
              <Erreurs champs={champs} nom="currentPassword" />
            </label>
            <label className="champ">
              <span>Nouveau mot de passe</span>
              <input
                type="password"
                value={nouveau}
                onChange={(e) => setNouveau(e.target.value)}
                autoComplete="new-password"
                required
              />
              <Erreurs champs={champs} nom="newPassword" />
            </label>
          </div>

          <div className="rang-action">
            <button className="plein" type="submit" disabled={occupe}>
              {occupe ? "Un instant…" : "Changer"}
            </button>
            <span className="aide">Les autres appareils seront déconnectés.</span>
          </div>
        </form>

        {/* La déconnexion ferme la page : elle va tout en bas, là où l'on ne
            clique pas par accident en cherchant autre chose. */}
        <div className="rang-action sortie">
          <button className="creux" onClick={seDeconnecter}>
            Se déconnecter
          </button>
          <span className="aide">La session est supprimée côté serveur, le cookie est vidé.</span>
        </div>
      </div>

      <aside className="rail">
        <p className="mono-titre">Mes données</p>
        <p className="legende">
          Tout ce que l’application sait de toi : progression, tentatives, séries, dictées. Ni mot de
          passe ni jeton de session — ce sont des secrets, pas des données.
        </p>
        <button className="creux large" onClick={exporter}>
          {exporte ? "Exporté" : "Exporter en JSON"}
        </button>

        <p className="mono-titre">Sessions ouvertes</p>
        {sessions === null && <p className="legende attente">Chargement…</p>}
        {sessions?.length === 0 && <p className="legende">Aucune, ce qui ne devrait pas arriver ici.</p>}
        <ul className="sessions">
          {sessions?.map((s) => (
            <li key={s.id}>
              <span className="quoi">
                <b>{s.courante ? "Ce navigateur" : s.appareil}</b> · {s.logiciel}
              </span>
              <span className={`quand ${s.courante ? "ici" : ""}`}>{depuis(s.ouverteLe)}</span>
            </li>
          ))}
        </ul>
        <p className="note-technique">
          Cookie de session · 30 jours glissants
          <br />
          La base ne stocke que le SHA-256 du jeton
        </p>

        <div className="rail-fin">
          <p className="mono-titre">À savoir</p>
          <p className="legende">
            Pas de réinitialisation par courriel : un mot de passe perdu est un compte perdu, sauf
            intervention en base.
          </p>
        </div>
      </aside>
    </div>
  );
}
