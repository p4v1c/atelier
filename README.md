# L'Atelier

Une plateforme d'apprentissage à modules : un compte, un planificateur de
répétition espacée, et autant de matières qu'on veut y mettre.

| Module           | Contenu                                                    |
| ---------------- | ---------------------------------------------------------- |
| Français         | 618 règles · 4 336 phrases · 310 dictées                    |
| Culture générale | 322 notions · 2 209 questions · 280 leçons                  |
| Anglais          | 16 séries · 430 cartes                                      |
| Espagnol         | 12 séries · 320 cartes                                      |

Le moteur ne sait pas ce qu'est une faute d'orthographe ni une capitale : il
connaît des modules, des compétences et des exercices. Ce qu'un exercice veut
dire regarde son **type**, déclaré par le module qui l'emploie.

Le dépôt réunit deux projets : l'application (issue de « La Règle ») et le
cahier de culture générale, fusionné avec son historique. Les commits des deux
restent atteignables, et `git log --follow` suit un fichier à travers le
déplacement.

```
src/ prisma/ tests/        l'application
heritage/la-regle/         le fichier autonome d'origine : source du lot
                           « legacy » et référence visuelle du projet
heritage/culture-g/        le cahier d'origine — scripts Python, gabarit HTML,
                           et data/ qui reste la SOURCE du module Culture
                           générale : le loader y lit directement, il n'y a
                           pas de seconde copie à entretenir
sauvegardes/               dumps Postgres et paquets git, hors dépôt
```

## Ajouter un module

Trois fichiers et deux lignes de registre. Ni migration, ni table, ni route, ni
écran de série — le planificateur, les comptes, le catalogue, les statistiques
et le tableau de bord s'appliquent d'office.

```
src/modules/<nom>/index.ts     le module : identité, vocabulaire, catégories,
                               types d'exercices, contrôles de contenu
src/modules/<nom>/contenu.ts   le chargeur, qui rend des ModuleBatch[]
prisma/seed/<nom>/             le contenu lui-même
```

Puis :

```ts
// src/modules/index.ts
export const MODULES = [francais, cultureGenerale, anglais, espagnol, geographie];

// src/modules/contenu.ts
export const CONTENU = { …, geographie: chargerContenuGeographie };
```

```bash
npm run validate:content -- --module=geographie   # avant tout
npm run seed -- --module=geographie
```

Le contenu vit à part du registre pour une raison précise : `src/modules/index.ts`
est importé par les routes **et par le navigateur**, alors que le contenu pèse
des centaines de kilo-octets et ne sert qu'au seed et au validateur.

### Le vocabulaire

Chaque module nomme ses objets. Le moteur dit « compétence » et « exercice » ;
l'écran dit « règle » et « phrase » en français, « notion » et « question » en
culture générale, « série » et « carte » en langues. Une plateforme
multi-matières qui parle comme sa base de données n'est agréable pour personne.

### Ajouter un type d'exercice

Un type sait quatre choses, et seulement quatre : fabriquer la question **sans
la réponse**, corriger une réponse, produire une empreinte de dédoublonnage, et
se relire. Le serveur ne sait jamais ce que veut dire « repérer la faute » ou
« cocher la bonne case » : il délègue.

```
src/modules/kinds/<type>.ts          la logique — pure, testable, partagée
                                     par le mode connecté et le mode invité
src/components/exercices/<Type>.tsx  la vue
src/components/exercices/index.tsx   une ligne de registre
```

Types existants : `spot-error`, `qcm`, `flashcard`, `traduction`, `ecoute`.

### Un module qui ne relève pas de la répétition espacée

Un jeu cérébral n'a ni palier ni échéance : il a un score qui monte et
redescend. Il déclare `progression: "scores"`, et le planificateur l'ignore —
c'est voulu. Lui imposer des paliers reviendrait à tordre le modèle jusqu'à le
casser.

## Démarrer

```bash
npm install
npm run db:up                 # Postgres 16 dans Docker, port 55432
npm run prisma:migrate        # applique les migrations
npm run extract:legacy        # relit heritage/la-regle/ -> prisma/seed/legacy.json
npm run validate:content      # compte-rendu + anomalies
npm run seed                  # remplit la base
npm test                      # 163 tests
npm run dev                   # http://localhost:3000
```

`npm run extract:legacy -- /autre/chemin/la-regle.html` pour repartir d'un autre
fichier. Le résultat est versionné : un clone suffit à tout reconstruire, sans
dépendre d'un fichier posé à côté du dépôt. Les tests d'API parlent au vrai Postgres : `npm run db:up` doit
tourner. Ils créent des comptes préfixés `vitest-` et les effacent en sortant.

## Variables d'environnement

| Variable                | Rôle                                                     | Exemple                                                              |
| ----------------------- | -------------------------------------------------------- | -------------------------------------------------------------------- |
| `DATABASE_URL`          | connexion Postgres (Prisma)                              | `postgresql://laregle:laregle@localhost:55432/laregle?schema=public` |
| `NODE_ENV`              | `production` ajoute `Secure` au cookie de session         | `production`                                                          |
| `COMMON_PASSWORDS_FILE` | *(facultatif)* liste de fuite, un mot de passe par ligne | `/srv/rockyou-top100k.txt`                                            |

## Déploiement

```bash
docker compose --profile prod up -d --build
docker compose exec app npx prisma migrate deploy
docker compose exec app npx tsx prisma/seed.ts
```

L'image de production est autonome (`output: "standalone"`) : elle n'embarque
ni les sources ni les dépendances de développement. Derrière un reverse proxy,
vérifier que `X-Forwarded-For` est bien renseigné par le proxy — c'est lui qui
alimente la limitation de débit.

## Postgres partout, y compris en développement

Le cahier des charges laissait la porte ouverte à SQLite en développement.
Écarté : Prisma ne sait pas servir deux `provider` depuis un même schéma, et les
différences (types natifs, `enum` absents de SQLite, sémantique des index)
finissent par produire deux schémas qui divergent — exactement ce que le
« schéma identique » cherchait à éviter. `npm run db:up` lance un Postgres
jetable en trois secondes.

## Authentification

| Route                      | Auth | Effet                                                            |
| -------------------------- | :--: | ---------------------------------------------------------------- |
| `POST /api/auth/register`  |  —   | crée le compte, ouvre la session, reprend la progression invitée  |
| `POST /api/auth/login`     |  —   | ouvre une session                                                 |
| `POST /api/auth/logout`    |  —   | supprime la session et vide le cookie                             |
| `GET  /api/auth/me`        |  ✓   | utilisateur courant + réglages                                    |
| `POST /api/auth/password`  |  ✓   | change le mot de passe, révoque les autres sessions               |
| `GET  /api/account/export` |  ✓   | export JSON complet, en pièce jointe                              |

- **argon2id**, profil OWASP (19 Mio, 2 passes, parallélisme 1).
- **Cookie** `la_regle_session`, `HttpOnly`, `SameSite=Lax`, `Secure` en
  production, 30 jours **glissants**.
- La base ne stocke que le **SHA-256** du token de session.
- **Zod** sur toutes les entrées. Aucune route ne lit un champ brut.
- **5 tentatives par IP et par quart d'heure** sur `login` et `register`,
  comptées dans la table `AuthAttempt` — pas de Redis. Une connexion réussie
  remet le compteur à zéro : seuls les échecs s'accumulent.
- Mot de passe : **10 caractères minimum**, refusé s'il figure dans la liste des
  plus courants ou s'il vaut l'adresse.
- Adresse inconnue et mot de passe faux renvoient le **même message** et font
  travailler argon2 **le même temps** (empreinte leurre).
- Pas d'OAuth, pas de 2FA, pas de réinitialisation par courriel :
  **un mot de passe perdu est un compte perdu**, sauf intervention en base.

## Séries, planificateur et progression

| Route                                | Effet                                                       |
| ------------------------------------ | ----------------------------------------------------------- |
| `GET  /api/session/next`             | compose une série (`mode`, `size`, `category`, `rule`)       |
| `POST /api/session/answer`           | note une réponse, met à jour le palier, rend la règle        |
| `POST /api/session/finish`           | clôt la série et rend le bilan                               |
| `GET  /api/progress`                 | progression par règle et par catégorie                       |
| `GET  /api/rules`                    | catalogue                                                    |
| `GET  /api/dictations`               | liste des dictées, **sans leur texte**                       |
| `POST /api/dictations/:id/attempt`   | correction mot à mot, meilleur score conservé                |
| `GET  /api/public/content`           | contenu complet — **seule route publique**, pour le mode invité (gzip : 900 Ko → 250 Ko environ) |

**Le planificateur vit côté serveur** (`src/lib/study/scheduler.ts`, pur et
testé). Paliers 0 à 5, +1 par bonne réponse, −2 par erreur, intervalles
`[3, 12, 35, 90, 220, 500]` comptés en **questions répondues** (pas en jours,
comme dans le fichier d'origine), maîtrise au palier 4.

`/api/session/next` renvoie les mots à afficher et **jamais lequel est fautif** ;
l'index n'arrive qu'avec le verdict. Répondre deux fois à la même question dans
une série ne fait plus bouger le palier.

**Le plafond de six règles inédites par série est souple** : il cède quand rien
d'autre ne peut compléter la série, sinon le premier jour donnerait des séries
de six questions. C'est le comportement du fichier d'origine.

## Front

### Navigation dans six cents règles

Le catalogue et les statistiques d'origine affichaient toutes les règles à la
suite : avec 618 entrées, quatre-vingt-dix-huit homophones défilaient sans le
moindre repère. Trois principes les rendent navigables, sans toucher à
l'identité visuelle :

- **rien n'est déplié par défaut.** Le catalogue montre dix domaines, les
  statistiques dix lignes. Tout le reste s'ouvre au clic ;
- **on cherche avant de parcourir.** Recherche sur le titre, l'énoncé et
  l'astuce, insensible aux accents, plus des filtres par domaine, par difficulté
  et par état d'avancement (jamais vue / en cours / maîtrisée) ;
- **chaque fiche est actionnable.** Le bouton « s'entraîner sur cette règle »
  lance une série composée uniquement des sept phrases de cette règle
  (`GET /api/session/next?mode=rule&rule=<slug>`). C'est le chaînon qui manquait
  entre « je repère ma faiblesse » et « je la travaille ».

Le mode `rule` est le seul qui tire plusieurs phrases de la même règle ; tous
les autres en servent une par règle. Le palier bouge normalement à chaque
réponse.

Le CSS des deux blocs `<style>` d'origine est repris **tel quel** dans
`src/app/globals.css` : mêmes variables, mêmes classes, mêmes valeurs. Les
polices sont chargées par `<link>` dans `layout.tsx` — un `@import` serait retiré
par l'optimiseur CSS de Next et Bodoni Moda retomberait sur un serif générique.

Un même jeu d'écrans sert les deux modes, via une interface commune
(`src/lib/client/engine.ts`) : `ServerEngine` passe par l'API, `GuestEngine`
fait tourner le **même** planificateur dans le navigateur sur le contenu de
`/api/public/content`, avec la progression en `localStorage`. À l'inscription,
`guestProgress` recopie le tout dans le compte — une seule fois, à la création.

## Contenu

Le contenu vit dans des **lots** (`prisma/seed/batches/`) :

| Lot                    | Contenu                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `legacy`               | les 243 règles et 24 dictées d'origine                         |
| `batch-001` à `007`    | 175 règles : ponctuation, typographie, registre, écrits professionnels, cas discutés, accords, conjugaison |
| `batch-008` à `015`    | 200 règles : homophones lexicaux, paronymes, conjugaisons irrégulières, accords fins, orthographe d'usage, expressions figées |
| `densify-*`            | 594 phrases ajoutées aux règles d'origine (5 par règle)         |
| `densify2-*`           | 486 phrases de plus sur ces mêmes règles (7 par règle)          |
| `densify3-*`           | 750 phrases portant les 375 règles récentes à 7 elles aussi     |
| `dictations-001/002`   | 226 dictées d'une phrase                                       |
| `dictations-longues`   | 60 dictées de plusieurs phrases, 35 à 90 mots                  |

Répartition : Homophones 98 · Vocabulaire 114 · Accords 91 · Conjugaison 87 ·
Orthographe d'usage 65 · Ponctuation 38 · Typographie 37 · Registre et style 38 ·
Écrits professionnels 38 · Cas discutés 12.

**Chaque règle a exactement sept phrases**, sans exception — 618 × 7 = 4 326.
Un test le vérifie à chaque exécution de la suite. À vingt questions par jour,
il faut plus de sept mois pour voir chaque phrase une seule fois.

- `patches.ts` — les sept corrections apportées au contenu d'origine, chacune
  avec son motif. Vider ce tableau restitue le contenu d'origine à l'identique.
- `dictations-legacy.ts` — thème, difficulté et règles associées des 24 dictées
  d'origine (absents du fichier source).

### Format d'import et format de stockage

À l'import, le mot fautif est entre crochets : `Il commence [a] comprendre.`
En base, **jamais de crochets** : texte propre, index du token fautif (`-1` si
la phrase est correcte) et correction attendue.

La conversion passe par `src/lib/tokenize.ts`, seule référence. Le client ne
tokenise jamais. Modifier ce fichier invalide les index déjà stockés.

**Trois limites du format, à connaître avant d'écrire une règle :**

1. Le mot marqué est **un seul token** : une correction portant sur deux mots
   impose d'inverser l'exercice (on marque la forme écrite d'un tenant).
2. La correction doit différer du **mot** (ponctuation détachée). Retirer une
   virgule ou un point donnerait un mot identique à lui-même : les règles de
   virgule portent donc toutes sur une virgule **manquante**.
3. Une faute qui consiste à **supprimer** un mot se corrige par la convention du
   fichier d'origine : `fix: "à supprimer"`, qui s'affiche en annotation
   manuscrite au-dessus du mot entouré.

Conséquence assumée : les **pléonasmes** (« monter en haut », « au jour
d'aujourd'hui ») ne sont pas exercés — ils demanderaient un autre type
d'exercice.

### Validateur

```bash
npm run validate:content              # erreurs bloquantes + avertissements
npm run validate:content -- --strict  # les avertissements bloquent aussi
npm run validate:content -- --json    # sortie machine
```

Contrôles : identifiants dupliqués, règle sans phrase correcte, moins de deux
phrases, marqueurs mal formés, marqueur contenant une espace, correction vide ou
identique au mot marqué, **correction qui dupliquerait le mot voisin**, longueur
hors de 5-25 mots, doublons de phrases et de dictées, énoncé ou astuce vide,
position du mot fautif identique sur toutes les phrases d'une règle, statut
`disputed` hors de sa catégorie.

### Relecture des corrections

```bash
npm run relire
```

Le validateur vérifie la forme ; il ne sait pas lire le français. Or une
correction peut être bien formée et produire une phrase absurde : « dans
l'attente **que** vous me répondiez » corrigé en « de » donnait « dans l'attente
**de** vous me répondiez ». Ce script applique la correction à chacune des
3 600 phrases fautives et met en évidence les ~180 dont le résultat mérite une
relecture humaine — celles où un mot outil est remplacé, ou une locution de
plusieurs mots. Le cas objectivement détectable — la correction qui répète le mot
suivant ou précédent — est passé dans le validateur et bloque désormais le seed.

Pré-commit : `git config core.hooksPath .githooks`.

### Cas discutés

Les 12 règles de la catégorie **Cas discutés** portent `status: "disputed"` :
elles n'entrent jamais dans une série et ne comptent jamais comme des fautes.
Elles vivent dans le catalogue, où elles exposent les deux usages — d'où leurs
phrases toutes marquées correctes.

Comptes exacts : **4 326 phrases en base, dont 4 242 jouables** (les 84 autres
appartiennent aux douze règles « cas discutés »).

## Commandes

| Commande                    | Effet                                             |
| --------------------------- | ------------------------------------------------- |
| `npm run dev` / `build`     | serveur de développement / build de production     |
| `npm run db:up` / `db:down` | Postgres de développement                          |
| `npm run prisma:migrate`    | crée et applique une migration                     |
| `npm run prisma:studio`     | inspecteur de base                                 |
| `npm run extract:legacy`    | HTML d'origine → `legacy.json`                     |
| `npm run validate:content`  | contrôle du contenu                                |
| `npm run seed`              | remplit la base (idempotent, ne supprime rien)     |
| `npm run seed -- --prune`   | supprime en plus les phrases et dictées orphelines |
| `npm run typecheck`         | `tsc --noEmit`                                     |
| `npm test`                  | suite de tests                                     |

## Tests

163 tests, concentrés sur ce qui casse en silence : calcul des paliers et
composition des séries, tokenisation, vérification des réponses, hachage des
mots de passe et sessions, correction des dictées, intégrité du contenu. Les
composants d'affichage ne sont pas testés — leur conformité visuelle a été
vérifiée par comparaison de captures avec le fichier d'origine.

## Dictée audio

La lecture passe par `src/lib/client/speech.ts`, qui contourne quatre travers de
l'API Web Speech :

1. **`getVoices()` renvoie une liste vide au premier appel.** Les voix arrivent
   de façon asynchrone. Le code d'origine cherchait donc une voix française dans
   un tableau vide, n'en trouvait jamais, et laissait le navigateur lire avec sa
   voix par défaut — souvent anglaise, parfois muette. C'était la cause du
   « on n'entend rien ». On attend désormais que la liste soit remplie, et l'on
   n'accepte une liste vide qu'au bout de trois secondes.
2. **`cancel()` suivi de `speak()` avale l'énoncé** sous Chromium : on laisse
   passer un tour de boucle.
3. **Chromium coupe les énoncés de plus d'une quinzaine de secondes.** Les
   textes suivis sont découpés phrase par phrase, puis aux virgules.
4. **La file s'endort.** Un pause/resume toutes les huit secondes la maintient.

Le choix de la voix compte aussi : espeak-ng publie **13 362 voix**, dont des
milliers de variantes « French (France)+Alex ». On retient la voix de base
`fr-FR`, sans variante, installée localement.

### Voix neuronale locale (recommandée)

espeak-ng reste un synthétiseur à formants : intelligible, jamais naturel. Pour
une dictée, où il faut distinguer « les » de « le » et entendre les liaisons,
ça ne suffit pas. **Piper** produit une voix neuronale, tourne en local, ne
demande ni réseau ni clé :

```bash
python3 -m venv .venv-tts && .venv-tts/bin/pip install piper-tts
mkdir -p .voices && cd .voices
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/fr/fr_FR/siwis/medium/fr_FR-siwis-medium.onnx
curl -LO https://huggingface.co/rhasspy/piper-voices/resolve/main/fr/fr_FR/siwis/medium/fr_FR-siwis-medium.onnx.json
npm run tts:check      # vérifie et produit un échantillon
npm run tts:prepare    # synthétise à l'avance les dictées longues
```

L'application la détecte toute seule (`GET /api/tts`) et s'en sert en priorité ;
sans elle, elle retombe sur la voix du navigateur en le disant. Le WAV est mis
en cache sur disque et côté navigateur : **2,6 s la première écoute, 12 ms
ensuite**. `PIPER_BIN`, `PIPER_VOICE` et `TTS_CACHE_DIR` permettent de pointer
ailleurs.

`GET /api/tts/:dictationId` n'accepte **pas de texte arbitraire** : elle prend
l'identifiant d'une dictée et lit le texte en base, pour ne pas devenir un
service de synthèse ouvert à tout venant.

Réglages exposés : trois vitesses (0,55 / 0,75 / 0,95) et un volume, conservés
d'une dictée à l'autre. L'écran affiche la voix réellement utilisée, et donne la
commande d'installation quand aucune voix française n'est disponible :

```bash
sudo apt install speech-dispatcher speech-dispatcher-espeak-ng espeak-ng-data
```

### Correction par alignement

La comparaison position par position ne tient pas sur un texte de soixante mots :
un seul mot oublié décale tout ce qui suit et fait tomber le score à zéro alors
que la copie est presque juste. La correction repose donc sur une **plus longue
sous-suite commune**, qui distingue quatre cas : mot juste, faute
d'orthographe, mot manquant, mot en trop.
