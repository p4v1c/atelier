# L'Atelier

Une plateforme d'apprentissage à modules : un compte, un planificateur de
répétition espacée, et autant de matières qu'on veut y mettre.

| Module           | Contenu                                                      | Apparence          |
| ---------------- | ------------------------------------------------------------ | ------------------ |
| Français         | 618 règles · 4 336 phrases · 310 dictées                      | cahier d'écolier   |
| Culture générale | 949 notions · 9 921 questions · 907 cours                      | carnet de révision |
| Anglais          | 182 séries · 7 040 cartes · 10 dictées · 64 cours · A1→C2       | signalétique       |
| Espagnol         | 180 séries · 6 970 cartes · 10 dictées · 62 cours · A1→C2       | signalétique       |
| Géographie       | 20 séries · 613 questions · 5 cartes × 4 jeux                 | atlas              |

Le moteur ne sait pas ce qu'est une faute d'orthographe ni une capitale : il
connaît des modules, des compétences et des exercices. Ce qu'un exercice veut
dire regarde son **type**, déclaré par le module qui l'emploie.

## Où ça tourne

**L'Atelier n'est pas hébergé.** Il tourne sur la machine de son auteur, en
local :

```bash
npm run db:up && npm run dev     # http://localhost:3000
```

C'est un choix, pas un oubli : l'application a besoin de Node et de PostgreSQL,
que GitHub Pages ne sait pas servir. L'héberger demanderait Vercel avec une base
distante, ou un serveur — voir `docker-compose.yml` et le `Dockerfile`, qui sont
prêts pour le jour où.

**En revanche <https://p4v1c.github.io/atelier/> est bien en ligne — et c'est
l'ANCIEN cahier**, celui de `heritage/culture-g/`, pas la plateforme. Il reste
publié à dessein : c'est l'application de révision qui marche depuis n'importe
quel navigateur, et elle continue d'être reconstruite à chaque changement de son
contenu.

Deux applications, deux progressions, deux adresses. Celle de l'Atelier est
`localhost`.

---

Le dépôt réunit deux projets : l'application (issue de « La Règle ») et le
cahier de culture générale, fusionné en sous-arbre avec tout son historique.
Les commits des deux restent atteignables — voir `heritage/README.md` pour
savoir comment les interroger.

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

### Le mode invité

Sans compte, TOUTES les matières sont accessibles — le flanc les liste, on
passe de l'une à l'autre, la progression est gardée par matière dans
localStorage. Le planificateur qui tourne alors dans le navigateur est le même
fichier que celui du serveur, et les exercices sont corrigés par le même
registre de types : les deux modes ne peuvent pas diverger sur ce qui est juste.

Deux routes publiques y pourvoient :

| Route                                | Ce qu'elle sert                                      |
| ------------------------------------ | ---------------------------------------------------- |
| `/api/public/modules`                | le catalogue des matières — noms et volumes, léger    |
| `/api/public/content?module=…`       | le contenu d'UNE matière, téléchargé à son ouverture  |
| `/api/public/lessons/<slug>`         | un cours, servi à l'unité                             |

La séparation compte : afficher « Espagnol » dans une liste ne doit pas coûter
le téléchargement des 4 336 phrases du français.

### La coque

Toutes les matières partagent une même ossature — flanc, en-tête, scène, pied.
Ce qui sert à toute heure y reste visible : les matières et ce qu'elles
réclament dans le flanc, l'onglet courant et les compteurs dans l'en-tête, le
rappel du planificateur dans le pied.

```
src/components/Coque.tsx   l'ossature
src/app/coque.css          sa mise en page
```

Un écran ne dessine donc que son contenu. `.plateau` pour une page simple,
`.plateau.avec-rail` pour un contenu et son commentaire — la série met sa
correction dans le rail, l'accueil y met les points faibles.

### Les quatre thèmes

Une pastille de vingt-deux pixels, partagée en quatre quartiers, en haut à
droite de la barre. On clique, quatre thèmes s'affichent — celui qui est actif
compris —, on en choisit un. **Nuit** et **Charbon** sont sombres, **Jour** et
**Sépia** sont clairs.

Le nom des variables vient du thème d'origine et décrit une matière — l'encre,
le papier, la craie. Il faut les lire comme des **rôles** : `--encre` est le
fond de la page, `--papier` le texte le plus marqué. En thème clair, `--encre`
devient donc presque blanc et `--papier` presque noir, et les boutons pleins
tiennent parce qu'ils s'écrivent toujours `background: var(--papier); color:
var(--encre)` — les deux basculent ensemble.

Trois choses ne changent jamais de couleur. Le papier du cahier, parce que le
cahier est une feuille posée sur un bureau : on change le bureau, pas la
feuille. Le bleu bic du carnet de culture générale. Et les couleurs de la
carte — un atlas ne change pas de teintes parce qu'on allume la lumière.

Chaque matière garde en revanche un **accent de coque**, et celui-là suit le
thème. Le bleu bic à 2,9:1 sur un fond clair, l'or de l'atlas à 2,1:1 : les
accents avaient été choisis pour un fond de nuit, et il a fallu leur donner une
valeur claire. Les langues font exception dans l'autre sens — leur surface
d'exercice est faite du fond de la coque, si bien que c'est l'accent lui-même
qui bascule, cahier compris.

L'attribut est posé sur `<html>`, pas sur `.app` : le fond de page est peint
sur `body`, et un thème posé plus bas laisserait une bande de l'ancien tout
autour. Conséquence, le choix ne peut pas être rendu côté serveur, et un script
inline dans `layout.tsx` l'applique avant la première peinture — sans lui, la
page clignote une fraction de seconde.

```bash
THEME=tous node scripts/mesurer-contraste.mjs
```

Les quatre thèmes sont mesurés, pas choisis à l'œil : six mille cinq cents
textes par thème, zéro sous le seuil.

### L'apparence

Un module n'est pas qu'un jeu de données : c'est une identité. Le français a son
cahier d'écolier, la culture générale son carnet bleu bic, les langues leur
signalétique. Rien n'oblige deux matières à se ressembler — c'est même le
contraire qu'on veut.

```
src/components/modules/<nom>/     ses écrans
src/app/modules/<nom>.css         son CSS, accroché à [data-module="<nom>"]
src/components/modules/index.tsx  une ligne de registre
```

Une présentation déclare quatre choses, toutes facultatives :

| Champ            | Ce que ça fait                                                        |
| ---------------- | --------------------------------------------------------------------- |
| `theme`      | pose `data-module` sur la racine ; le CSS du module s'y accroche |
| `marque`     | son nom, en haut du flanc                                        |
| `sousMarque` | sa nature, en petites capitales sous la marque                   |
| `onglets`    | ses onglets ; sans eux, les onglets génériques                   |
| `ecrans`     | ses propres écrans ; ce qui manque retombe sur les génériques    |

Un module absent du registre garde l'apparence par défaut. C'est le cas normal,
pas un défaut : une matière peut vivre sans une ligne de CSS.

`onglets: []` supprime la barre de navigation. Un seul module s'en sert — la
géographie, qui tient sur un écran.

### Les langues

Une **carte** donne jusqu'à quatre exercices — reconnaître, produire, entendre,
prononcer — et c'est pourquoi le tableau ci-dessus compte quatre fois plus
d'exercices que de cartes. Le chiffre qui compte pour un apprenant est celui
des cartes : **1 795 en anglais, 1 778 en espagnol**, réparties du A1 au C2 avec
le B2 et le C1 pour niveaux les mieux fournis. Les niveaux vont de A1 à **C2**, avec neuf séries
par langue à ce dernier — le C2 n'y est pas « du C1 en plus dur » : la langue y
cesse d'être un instrument pour devenir un objet, et l'on y apprend ce qu'une
phrase fait en plus de ce qu'elle dit.

Elles partagent une fabrique — `moduleLangue()` — et ne diffèrent que par leur
nom, leurs accents et leur couleur. Ajouter le thaï demandera un fichier de
vocabulaire, pas un module.

Chaque série porte son **niveau du cadre européen**. Un niveau est compté acquis
à 80 % ; le niveau annoncé est le premier qui ne l'est pas encore. Être « A2 »
veut donc dire qu'on tient le A1 et qu'on travaille le A2.

Les deux modules vont de A1 à **C1**. Le C1 n'est pas « du B2 en plus dur » :
c'est le niveau où deux formulations sont justes et où il faut choisir. Ses
séries portent donc sur le degré, le registre, l'idiome et la presse — ce qui
ne se devine pas et qu'aucun exercice de grammaire n'enseigne.

Une catégorie **Vocabulaire** tient les champs lexicaux — la cuisine, la
nature, l'argent, la médecine, la vie publique. Elle existe à part parce qu'on
la cherche à part : « je veux les mots de la cuisine » n'est pas la même
demande que « je veux le présent simple ». Chacune de ses séries porte un
cours, parce qu'un champ lexical a presque toujours une règle qui l'organise —
un suffixe, une famille de sons, un partage entre deux continents.

Quatre façons de réviser la même carte : la reconnaître (`flashcard`), la
produire (`traduction`), l'entendre (`ecoute`), la dire (`prononciation`).

Tout ce qui se lit à voix haute — dictées, cartes, écoute, modèle de
prononciation — passe par les voix neuronales de Piper, en local et sans
réseau. La voix du navigateur ne sert que de secours : sous Linux c'est
espeak, un synthétiseur à formants qui apprend une mauvaise prononciation.

`npm run tts:prepare` synthétise tout à l'avance. Sans lui, la première écoute
attend quatre secondes le temps que Piper charge son modèle ; avec, c'est
immédiat. La préparation groupe les textes par langue — un chargement de modèle
au lieu de huit cents, dix minutes au lieu de quarante.

La catégorie **Prononciation** compte sept séries par langue, toutes avec un
cours : les voyelles, le TH, les terminaisons, l'accent de mot, le schwa et les
lettres muettes côté anglais ; les cinq voyelles, la jota et le R, le seseo,
l'enchaînement, les diphtongues et l'intonation côté espagnol. C'est le domaine
où l'on ne se corrige pas tout seul — personne ne signale qu'il n'a pas
compris, il répète simplement sa phrase.

**La prononciation mesure si un logiciel te comprend, pas la qualité de ton
accent.** C'est un révélateur honnête — dire « sheep » quand on visait « ship »
se voit — mais ce n'est pas un professeur. Elle n'existe que sur Chrome et Edge,
et Chrome envoie l'audio à ses serveurs pour le transcrire. L'écran le dit.

### La géographie : une grille

Le module a porté onze familles hétéroclites — capitales, drapeaux, fleuves,
climats, projections, outre-mer. Il y avait de quoi réviser, et pourtant on s'y
perdait : rien ne disait où l'on en était, et la carte, qui est tout l'intérêt
de la matière, se trouvait au bout du chemin le plus long.

Il tient maintenant sur deux axes, et c'est littéralement un tableau : **cinq
cartes** en colonnes — Europe, Afrique, Asie, Amériques, le monde — et **quatre
jeux** en lignes. Chaque case est une partie, qui commence au clic.

La première version mettait les cartes en onglets et redessinait les quatre
mêmes cartouches à chaque changement : mêmes titres, mêmes phrases, seuls les
nombres bougeaient. Vingt cases décrites cinq fois, et jamais plus du cinquième
de la matière sous les yeux. Un produit se montre en tableau — le jeu s'explique
une fois, sur sa ligne ; la carte est une colonne. Il n'y a plus d'onglet, plus
d'état à retenir entre deux visites, et l'atlas entier se lit d'un coup d'œil.

Les jeux ne sont pas de même nature, et l'écran le dit sur chaque cartouche.
**Drapeaux** et **Capitales** sont des quiz : le pays est donné, la bonne
réponse est à départager de trois voisines du même continent. **Situer** et
**Mers et océans** se jouent sur la carte, et n'apprennent pas la même chose —
savoir que Lima est la capitale du Pérou sans savoir où est le Pérou, c'est
connaître une liste, pas une carte.

C'est aussi le seul module sans onglets : un tableau au bout d'un couloir de
quatre onglets ne se voit pas. `onglets: []` supprime la barre, et l'écran
unique pose la grille.

Sous les jeux, **l'atlas de référence** : quatre pages qu'on lit au lieu de les
passer. Les capitales par continent, le mur des drapeaux, les vingt-neuf
étendues d'eau, et une carte muette par région où la souris fait apparaître le
nom. Rien n'y est compté, et c'est délibéré : on ne lit pas une table de
capitales du début à la fin, on y cherche ce qu'on ne sait pas. Les cases de
jeu, elles non plus, ne portent plus de barre d'avancement — un entraînement
n'a pas de bout, et « 12 % » laissait croire le contraire.

`GET /api/public/atlas` sert cette table. Elle est lue côté serveur plutôt que
livrée au navigateur : les fiches portent aussi les notes d'auteur qui composent
les corrections d'exercices, et les envoyer reviendrait à publier une moitié des
réponses. Ce qu'on dit d'une mer, en revanche, est repris de la correction
elle-même — deux textes séparés finiraient par se contredire.

Six cent treize questions, et pas une écrite à la main. Elles se déduisent
d'une **table de cent quatre-vingt-quatorze pays** — code ISO, capitale, une
phrase de situation — et ajouter un pays ajoute trois questions dans les trois
jeux de son continent. Le drapeau lui-même n'est pas recopié : un émoji de
drapeau est le code à deux lettres écrit en symboles indicateurs régionaux,
donc `PT` donne 🇵🇹.

**Les cent quatre-vingt-treize États membres de l'ONU y sont**, et un test le
vérifie contre une liste écrite à la main — les tables ISO comptent aussi les
territoires, et « tous les pays » n'aurait plus de sens vérifiable. Trente
d'entre eux ne se laissent pas dessiner : Nauru fait vingt et un kilomètres
carrés, Monaco deux, et Natural Earth ne trace pas tous les atolls. On ne peut
donc pas demander de cliquer dessus — mais le drapeau des Seychelles et la
capitale de Tuvalu se demandent très bien sans fond de carte. C'est ce que
portent les quiz du **monde** : ce qu'aucune carte régionale ne montre.

Les eaux, elles, sont **vingt-neuf** : les océans, les grandes mers fermées,
les golfes et les détroits qu'un francophone rencontre. Ce n'est pas « toutes
les mers » — l'Organisation hydrographique internationale en nomme une centaine
— et le nombre est celui qu'une carte à cette échelle peut rendre cliquable
sans que deux zones se marchent dessus.

La table porte aussi l'**article** de chaque pays. « Quel est le drapeau de… ? »
demande une préposition contractée — du Portugal, de la France, de l'Iran, des
Pays-Bas, de Cuba — et il n'y a pas de règle : le genre ne se déduit pas de la
terminaison, et une trentaine d'États insulaires n'en prennent aucun. Une
version précédente contournait la difficulté en mettant le nom en tête,
« Kiribati — quel est son drapeau ? » : ça marchait pour toutes les fiches et
ça ne ressemblait à rien. Cent quatre-vingt-quatorze entrées écrites à la main
coûtent moins qu'une question qui sonne faux à chaque passage.

Une fabrique se relit mal : une erreur s'y répète cinq cents fois sans que rien
ne dépasse. Les contrôles portent donc sur elle, et trois choses valent d'être
dites. Les leurres d'un quiz sont **tirés du contenu**, par un hachage du nom du
pays : le même exercice se présente toujours pareil, sans qu'aucune permutation
n'ait à être écrite ni transportée. La bonne réponse ne reste pas au même rang,
et un test vérifie qu'elle se répartit sur les quatre. Enfin, un pays dont la
capitale se lit dans le nom sort du quiz — Tunis dans Tunisie, Bissau dans
Guinée-Bissau : ce n'est pas une question, c'est une ligne à cocher.

```bash
npm run cartes     # régénère src/lib/cartes/ depuis Natural Earth
```

Les tracés viennent de **Natural Earth**, qui est dans le domaine public, via
le paquet `world-atlas`. Rien n'est dessiné à la main : une frontière inventée
de mémoire serait pire que pas de carte du tout.

**Les mers font exception, et le fichier le dit.** Aucun paquet npm ne
redistribue les polygones marins de Natural Earth ; les zones sont donc écrites
à la main. Ce n'est pas le même geste que d'inventer une frontière : le tracé
du Portugal est un fait, les limites d'une mer sont une **convention** — fixées
par l'Organisation hydrographique internationale à coups de lignes droites
entre des caps, et les cartes ne s'accordent pas toutes. Deux règles tiennent
l'ensemble honnête : les zones ne se chevauchent jamais, et elles passent
**sous** les terres, si bien qu'une zone un peu large est rognée par le dessin
des pays.

Quatre choix méritent d'être expliqués.

`world-atlas`, `d3-geo`, `topojson-client` et `i18n-iso-countries` sont des
dépendances de **développement**. Le script projette une fois pour toutes et
n'écrit que des chemins SVG : le navigateur reçoit des `d="M…"`, pas une
bibliothèque de cartographie. Le résultat est versionné — un clone a ses cartes
sans réseau et sans installation.

Les cinq fonds pèsent ensemble un demi-méga-octet, et ils ne sont **jamais**
dans le paquet d'un écran de français : le catalogue des régions, lui, tient en
vingt lignes et c'est le seul fichier que le registre des types importe. Les
tracés se chargent par `import()` dynamique, un morceau par région, à
l'ouverture d'une carte.

Le cadrage est une **fenêtre** en longitude et latitude, pas la boîte des pays
retenus. Les Açores, les Canaries et le Svalbard appartiennent au tracé du
Portugal, de l'Espagne et de la Norvège : cadrer sur les pays laissait l'Europe
minuscule au milieu d'une mer vide, trois confettis ayant fait reculer tout le
continent. Ce qui déborde est rogné, comme dans n'importe quel atlas imprimé.

La cible ne quitte jamais le serveur. Le fond de carte, lui, est bien dans le
navigateur : c'est le plateau de jeu, pas la réponse. Le lire revient à
regarder un atlas — ce qui est précisément l'exercice.

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

Types existants : `spot-error`, `qcm`, `flashcard`, `traduction`, `ecoute`,
`prononciation`, `carte-monde`.

Le QCM sait afficher des propositions qui ne sont pas du texte. Quand aucune ne
dépasse deux points de code — un émoji de drapeau en compte exactement deux —
la liste se signale par `data-forme="symboles"`, et le module décide quoi en
faire : la géographie les met en grille et en grand, parce qu'à la taille du
texte deux tricolores se ressemblent.

`carte-monde` est le seul dont la réponse soit un endroit. Le fond porte deux
couches — les terres et les mers — et `couche` dit laquelle répond au clic :
sans elle, cliquer la Méditerranée quand on cherche l'Italie compterait comme
une réponse. Ce n'est pas divulguer la solution, la consigne annonçant déjà
« clique sur la mer ».

Son empreinte est instructive. Elle a d'abord porté la région et la cible
seules, et le validateur a bloqué trente-deux exercices d'un coup : il tenait
« 🇵🇹 » et « Lisbonne est la capitale de quel pays ? » pour le même exercice,
au motif qu'on y clique le même pays. Ce sont deux questions qui partagent une
réponse, et un contrôle qui l'interdit empêche de parler d'un pays plus d'une
fois. L'empreinte porte donc aussi la question. Ce qui reste interdit — et doit
l'être — c'est de poser deux fois la même question sur le même fond.

Deux exceptions documentées à la règle « la question ne contient jamais la
réponse » : la carte mémoire, où l'on se juge soi-même après avoir vu le verso,
et l'écoute, dont le texte doit atteindre le navigateur pour être prononcé. Dans
les deux cas, aller chercher la réponse dans l'onglet réseau ne trompe que soi.

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
npm test                      # 236 tests
npm run tts:voices            # voix neuronales locales (facultatif, ~460 Mo)
npm run tts:prepare           # pré-génère l'audio : sans ça, la 1re écoute attend
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
| `GET  /api/account/sessions` | ✓ | les sessions ouvertes : appareil, navigateur, depuis quand      |
| `GET  /api/public/atlas`   |  —   | l'atlas de référence : pays, capitales, mers                      |

- **argon2id**, profil OWASP (19 Mio, 2 passes, parallélisme 1).
- **Cookie** `la_regle_session`, `HttpOnly`, `SameSite=Lax`, `Secure` en
  production, 30 jours **glissants**.
- La base ne stocke que le **SHA-256** du token de session. La liste des
  sessions ne le renvoie pas — même haché, c'est le secret qui ouvre la
  session — ni l'adresse IP, qui ne dit rien d'utile à qui lit sa propre liste
  et beaucoup à qui lirait son écran par-dessus l'épaule. L'agent utilisateur
  est réduit à « Téléphone · Chrome, Android » par une lecture volontairement
  sommaire : on veut « est-ce bien moi ? », pas une empreinte de navigateur.
  Un agent inconnu se dit inconnu plutôt que de se faire passer pour Chrome.
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

### Contraste et classes mortes

Deux contrôles se lancent à la main, parce qu'ils demandent un navigateur ou
une lecture croisée des sources :

```bash
npm run db:up && npm run dev            # les deux veulent l'application debout
npm run contraste                       # mode invité
MODE_CONNECTE=1 npm run contraste       # invité ET connecté
npm run classes-mortes
```

`contraste` ouvre quinze écrans dans Chromium, recompose le fond **effectif**
de chaque texte — les `rgba` empilés compris, c'est là que se cachaient les
vrais écarts — et rend le ratio WCAG. Il vise 4,5:1, sauf pour deux rôles
purement accessoires (le tiret « rien à revoir », les points de difficulté)
qui visent 3:1 et sont nommés dans le script. Le contraste **se mesure** : à
l'œil, `#6f6790` sur `#211A44` paraissait passer, il était à 3,1:1.

Les deux tons secondaires sont des jetons, `--mauve-2` et `--mauve-3`. À ce
niveau de contraste il n'y a plus de marge en clarté sous `--mauve` : la
hiérarchie se lit à la **saturation**, de plus en plus grise.

`classes-mortes` compare les sélecteurs de classe des quatre feuilles aux
`className` réellement écrits — y compris ceux posés par un ternaire. Le CSS
ne se plaint jamais d'une règle inutile.

### La surface d'exercice

Le français a son papier crème réglé seyès, la culture générale son carnet au
bic, les langues leur surface sombre. Ces trois apparences ne sont **pas**
trois mises en œuvre : la surface est décrite par les jetons `--exo-*` posés
sur `.app` (fond, encre, accent, réglure, bouton plein…), et chaque matière
n'en redéclare que ce qui change. Une matière qui n'en déclare aucun hérite du
papier, sans hériter par accident de la réglure d'une autre.

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

**Sept phrases par règle au minimum**, et c'est un plancher tenu par un test :
613 règles en ont exactement sept, cinq règles d'écrits professionnels en ont
neuf — 4 336 phrases en tout. Le README annonçait longtemps « exactement sept,
sans exception » et le test s'appelait ainsi, alors qu'il vérifiait « au
moins ». À vingt questions par jour, il faut plus de sept mois pour voir chaque
phrase une seule fois.

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

## L'application Android

L'APK ne parle à aucun serveur. Tout le contenu y est embarqué, la progression
reste dans le téléphone, et l'application fonctionne en avion. Ce n'était pas
une réécriture : le **mode invité** faisait déjà tourner le planificateur dans
le navigateur, avec la progression en `localStorage` et le contenu chargé en un
bloc par `/api/public/content`. Il ne restait qu'à remplacer ce bloc — servi par
une route — par un fichier posé à côté de la page.

```
npm run apk          contenu → site statique → APK
npm run apk:site     s'arrête après le site statique (pour vérifier au navigateur)
```

L'APK sort dans `atelier-<version>.apk`, environ 21 Mo.

### Ce qui change hors ligne

| | En ligne | Dans l'APK |
| --- | --- | --- |
| Contenu | Postgres, par `/api/public/*` | fichiers de `public/hors-ligne/` |
| Progression | en base, par compte | `localStorage` du téléphone |
| Comptes | inscription, connexion | aucun — l'écran « Mon application » prend la place |
| Mise à jour | déploiement | publication GitHub, téléchargée depuis l'application |

Le drapeau `NEXT_PUBLIC_HORS_LIGNE=1` est figé à la compilation, et non deviné à
l'exécution : une application qui hésiterait entre deux origines chercherait un
serveur au premier écran, et échouerait dans un avion. Tout tient en trois
fichiers — `src/lib/hors-ligne.ts` dit quelle route a un fichier,
`src/lib/client/api.ts` fait l'aiguillage, `src/lib/client/depot-hors-ligne.ts`
range le contenu téléchargé. Le reste du code ignore la distinction.

`output: "export"` refuse tout gestionnaire de route. Plutôt que de déplacer
`src/app/api` le temps de la construction — un ctrl-C au mauvais moment
laisserait le dépôt amputé —, `scripts/construire-apk.sh` bâtit dans une COPIE,
qui n'a pas ces routes. Le dépôt n'est jamais modifié.

### La progression

Elle vit dans `localStorage`, comme en mode invité, et **elle n'est nulle part
ailleurs**. L'écran « Mon application » porte donc une sauvegarde vers un
fichier et une restauration depuis un fichier : c'est le seul filet quand il n'y
a pas de serveur. Sur Android, le fichier passe par le greffon de système de
fichiers puis par le partage — une sauvegarde qui reste sur l'appareil qu'elle
est censée protéger ne protège pas de grand-chose.

### La mise à jour du contenu par GitHub

L'idée tenait de l'impossible tant qu'on imaginait un serveur. Or GitHub
distribue déjà des fichiers — les pièces jointes d'une publication — et sait les
servir à un navigateur.

```
npm run contenu:hors-ligne    fige le contenu depuis la base
npm run contenu:publier       prépare publication/ et imprime la commande gh
```

Sept pièces : `manifeste.json`, la liste des matières, un fichier par matière, et
les 1033 cours groupés en un seul. L'application lit le manifeste de la dernière
publication, compare sa version, télécharge, puis **éclate** le fichier groupé en
1033 entrées d'IndexedDB — un téléchargement au lieu de mille, une lecture ciblée
au lieu de quinze mégaoctets relus à chaque cours ouvert. La version n'est posée
qu'à la fin : un téléchargement coupé laisse l'ancienne en service, plutôt qu'un
contenu à trous que l'application croirait complet.

`publier-contenu.ts` **ne publie rien** : il imprime la commande `gh release`.
Publier est une décision, pas un effet de bord.

L'APK, lui, ne se remplace pas tout seul : Android ne l'autorise pas sans un
geste explicite, et c'est heureux. L'écran renvoie vers la page des publications.

### La voix et l'oreille dans l'APK

La vue web d'Android **n'implémente pas l'API vocale du web** — ni
`speechSynthesis`, ni la reconnaissance : ce sont des fonctions de Chrome, pas
de la vue web qu'un APK embarque. L'application annonçait donc « Aucune voix
en-GB n'est installée sur cet appareil », ce qui accusait le téléphone à tort,
et la moitié des exercices de langue plus les 310 dictées ne fonctionnaient pas.

`src/lib/client/voix-native.ts` enveloppe deux greffons —
`@capacitor-community/text-to-speech` et `.../speech-recognition` — derrière la
même forme que l'API du navigateur. `speech.ts` et `reconnaissance.ts`
aiguillent ; les écrans ignorent sur quoi ils tournent. Le type `Voix` masque la
différence entre un `SpeechSynthesisVoice` et une simple étiquette de langue.

Reste à la charge de la personne : installer la langue dans le moteur de
synthèse d'Android. Le message le dit maintenant, avec le chemin exact.

### Outillage

JDK 21, et le SDK Android (`platforms;android-36`, `build-tools;36.0.0`).
Sans `ANDROID_HOME`, Gradle ne trouve rien :

```
export ANDROID_HOME=$HOME/Android/sdk
```

L'APK produit est signé avec la clé de débogage : il s'installe en autorisant les
sources inconnues. Pour une distribution large, il faudrait une clé de
publication — ce n'est pas fait ici.

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
| `npm run contraste`         | mesure les contrastes dans un vrai navigateur      |
| `npm run classes-mortes`    | les règles CSS que plus aucun composant ne rend    |
| `npm run cartes`            | régénère les fonds de carte depuis Natural Earth   |
| `npm test`                  | suite de tests                                     |
| `npm run apk`               | construit l'application Android hors ligne         |
| `npm run apk:site`          | seulement le site statique de l'APK                |
| `npm run contenu:publier`   | prépare les pièces jointes de mise à jour          |

## Tests

227 tests, concentrés sur ce qui casse en silence : calcul des paliers et
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
