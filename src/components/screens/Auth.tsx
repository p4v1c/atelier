"use client";

/**
 * Les trois écrans que le fichier d'origine n'avait pas : connexion,
 * inscription, et l'espace « mon compte ».
 *
 * Ils réutilisent les classes existantes (.carte, .plein, .creux, .legende) —
 * seuls les champs de formulaire ont demandé quelques lignes de CSS, écrites
 * dans le même idiome que le reste.
 */
import { useEffect, useState, type FormEvent } from "react";
import type { PublicUser } from "@/lib/api-types";
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
    <div className="carte">
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
    <div className="carte">
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
          <label className="champ" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <input
              type="checkbox"
              checked={transferer}
              onChange={(e) => setTransferer(e.target.checked)}
              style={{ width: "auto", marginTop: 3 }}
            />
            <span style={{ letterSpacing: 0, textTransform: "none", fontWeight: 400, color: "var(--craie)" }}>
              Transférer ma progression d’invité vers ce compte
            </span>
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
    </div>
  );
}

/* ─────────────────────────── mon compte ─────────────────────────── */

export function Compte({ user, setScreen, setChrome, seDeconnecter }: ScreenProps) {
  const [actuel, setActuel] = useState("");
  const [nouveau, setNouveau] = useState("");
  const [erreur, setErreur] = useState<string | null>(null);
  const [succes, setSucces] = useState<string | null>(null);
  const [champs, setChamps] = useState<Champs>({});
  const [occupe, setOccupe] = useState(false);

  useEffect(() => {
    setChrome({ fil: "Mon compte", accroche: "Tes identifiants et tes données." });
  }, [setChrome]);

  if (!user) {
    return (
      <div className="carte">
        <p className="legende">Tu n’es pas connecté.</p>
        <div className="bas">
          <button className="plein" onClick={() => setScreen({ name: "connexion" })}>
            Se connecter
          </button>
        </div>
      </div>
    );
  }

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
    const data = await apiGet<unknown>("/api/account/export");
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `la-regle-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="carte">
        <p className="etiquette">Compte</p>
        <div className="compte-ligne">
          <span>Pseudo</span>
          <span>{user.pseudo}</span>
        </div>
        <div className="compte-ligne">
          <span>Adresse</span>
          <span>{user.email}</span>
        </div>
        <div className="compte-ligne">
          <span>Inscription</span>
          <span>{new Date(user.createdAt).toLocaleDateString("fr-FR")}</span>
        </div>
        <div className="compte-ligne">
          <span>Phrases traitées</span>
          <span>{user.answerCounter}</span>
        </div>
      </div>

      <div className="carte">
        <p className="etiquette">Changer de mot de passe</p>
        {erreur && <p className="alerte">{erreur}</p>}
        {succes && <p className="alerte bonne">{succes}</p>}
        <form onSubmit={changer}>
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
            <span className="aide">Les autres appareils seront déconnectés.</span>
            <Erreurs champs={champs} nom="newPassword" />
          </label>
          <button className="plein" type="submit" disabled={occupe}>
            Changer
          </button>
        </form>
      </div>

      <div className="carte">
        <p className="etiquette">Mes données</p>
        <p className="legende">
          Tout ce que l’application sait de toi : progression, tentatives, séries, dictées. Ni mot de passe ni jeton
          de session — ce sont des secrets, pas des données.
        </p>
        <div className="bas">
          <button className="creux" onClick={exporter}>
            Exporter en JSON
          </button>
        </div>
      </div>

      <div className="bas">
        <button className="creux" onClick={() => setScreen({ name: "accueil" })}>
          Accueil
        </button>
        <button className="lien" onClick={seDeconnecter}>
          Se déconnecter
        </button>
      </div>
    </>
  );
}
