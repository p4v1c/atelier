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
      <div className="principal">
        <div className="colonne-formulaire">
          <p className="mono-titre">Changer de mot de passe</p>
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
      </div>

      <aside className="rail">
        <p className="mono-titre">Compte</p>
        <div className="fiche-faits" style={{ borderTop: 0, paddingTop: 0 }}>
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
            <b>{user.answerCounter}</b>
          </p>
        </div>

        <p className="mono-titre" style={{ marginTop: 26 }}>
          Mes données
        </p>
        <p className="legende" style={{ marginBottom: 14 }}>
          Tout ce que l’application sait de toi : progression, tentatives, séries, dictées. Ni mot de passe
          ni jeton de session — ce sont des secrets, pas des données.
        </p>
        <button className="creux" style={{ width: "100%", marginBottom: 10 }} onClick={exporter}>
          Exporter en JSON
        </button>
        <button className="creux" style={{ width: "100%" }} onClick={seDeconnecter}>
          Se déconnecter
        </button>

        <p className="rail-bas">Un mot de passe perdu est un compte perdu : il n’y a pas de courriel de reprise.</p>
      </aside>
    </div>
  );
}
