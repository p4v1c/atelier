/**
 * Refus des mots de passe les plus éventés.
 *
 * Le plancher de 10 caractères élimine déjà l'essentiel des classiques
 * (« 123456 », « password », « azerty »). Ne restent donc ici que des entrées
 * d'au moins 10 caractères, seules à pouvoir passer la longueur.
 *
 * La liste embarquée est courte et assumée comme telle. Pour une vraie liste de
 * fuite, pointer COMMON_PASSWORDS_FILE vers un fichier texte (un mot de passe
 * par ligne, par exemple les 100 000 premiers de rockyou ou de
 * SecLists/Passwords) : il est chargé au démarrage, en plus de celle-ci.
 */
import fs from "node:fs";
import { MIN_PASSWORD_LENGTH } from "./password";

const BUNDLED = `
1234567890 12345678910 123456789a 1234567891 1234512345 0123456789 9876543210
11111111111 00000000000 1234567890a 123456789abc 147258369 1122334455
qwertyuiop qwertyuiop1 qwerty123456 azertyuiop azertyuiop1 azerty123456
asdfghjkl123 1q2w3e4r5t 1qaz2wsx3edc zaq12wsxcde3 q1w2e3r4t5 123qweasdzxc
password123 password1234 passw0rd123 motdepasse motdepasse1 motdepasse123
motdepasse2024 motdepasse2025 monmotdepasse changeme123 adminadmin1
administrator root1234567 secret12345 utilisateur bienvenue123 bienvenue1
letmein123 welcome123 welcome1234 trustno1234 whatever123 nothing1234
jetaime123 jetaimemonamour coucou1234 bonjour123 bonjour1234 salutlesamis
soleil1234 chocolat123 chocolate1 doudou1234 chouchou12 amourdemavie
princess123 princesse1 sunshine123 iloveyou123 ilovemyself butterfly1
dragon12345 monkey12345 superman123 batman1234 spiderman1 starwars123
pokemon123 minecraft12 fortnite123 playstation nintendo123 hellokitty1
harrypotter football123 baseball123 basketball1 liverpool1 marseille13
barcelona1 juventus12 realmadrid1 parissaintgermain
computer123 internet123 telephone12 ordinateur1 google12345 facebook123
instagram12 myspace1234 liberty1234 freedom1234 motherfucker
michael123 jennifer123 jessica123 nicolas123 alexandre1 sebastien1
christophe stephanie1 catherine1 elizabeth1 samantha123 charlotte1
alexandra1 benjamin123 angelique1 valentine1 anthony123 veronique1
sandrine12 emmanuel12 francois123 dominique1
`
  .split(/\s+/)
  .filter(Boolean);

function loadExternal(): string[] {
  const path = process.env.COMMON_PASSWORDS_FILE;
  if (!path) return [];
  try {
    return fs.readFileSync(path, "utf8").split(/\r?\n/);
  } catch (e) {
    console.warn(`COMMON_PASSWORDS_FILE illisible (${path}) : ${e instanceof Error ? e.message : e}`);
    return [];
  }
}

let cache: Set<string> | null = null;

export function commonPasswords(): Set<string> {
  if (cache) return cache;
  cache = new Set(
    [...BUNDLED, ...loadExternal()]
      .map((p) => p.trim().toLowerCase())
      .filter((p) => p.length >= MIN_PASSWORD_LENGTH)
  );
  return cache;
}

/** Pour les tests : force un rechargement après changement d'environnement. */
export function resetCommonPasswords(): void {
  cache = null;
}

export function isCommonPassword(password: string): boolean {
  return commonPasswords().has(password.toLowerCase());
}
