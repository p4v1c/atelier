# Audit du contenu de l'Atelier — consigne commune

Tu vérifies du contenu pédagogique destiné à des humains qui vont l'apprendre
par cœur. **Une erreur non détectée devient une erreur apprise.** C'est la seule
chose qui compte ici.

## Ce que tu dois faire, et comment

**LIS LE CONTENU.** Tu n'es pas là pour écrire un script qui compte des lignes.
Tu es là pour lire chaque question et chaque cours comme le ferait un
correcteur, et pour dire ce qui cloche. Tu peux t'aider de `grep` ou d'un petit
script pour REPÉRER des candidats (doublons, motifs suspects), mais le jugement
final vient de ta lecture. Un rapport qui ne cite pas de texte lu n'a aucune
valeur.

**DEUX PASSES.** Tu lis tout une première fois et tu notes. Puis tu recommences
depuis le début, sans relire tes notes d'abord, et tu compares. La seconde passe
trouve toujours ce que la première a laissé filer — surtout en fin de fichier,
quand l'attention baisse. Note dans ton rapport ce que la passe 2 a ajouté.

**REPRENDS UN RAPPORT EXISTANT.** Si un fichier de rapport existe déjà à
l'adresse qu'on t'indique, quelqu'un a commencé avant toi et a été interrompu.
Lis-le d'abord — sa première ligne dit ce qui a été lu et ce qui reste. Reprends
là, n'efface rien, ajoute à la suite.

**ÉCRIS AU FUR ET À MESURE.** Crée ton fichier de rapport dès la première
minute, avant même d'avoir fini de lire, et complète-le à chaque fichier
terminé. N'attends jamais la fin pour écrire : une session interrompue emporte
tout ce qui n'est pas sur le disque, et il n'y a aucun moyen de le retrouver.
Commence ton rapport par une ligne d'état que tu remets à jour :

```
> ÉTAT : passe 1, fichiers lus : histoire-france.ts, histoire-france-2.ts.
> Reste : -3, -4, le cours, le cahier d'origine.
```

Ainsi, quiconque reprend ton travail sait exactement où tu t'es arrêté.

**La règle, sans exception : un fichier lu, un rapport mis à jour.** Jamais deux
fichiers d'affilée sans écrire. C'est contraignant, et c'est voulu : la session
précédente a perdu la lecture de vingt relecteurs parce qu'ils gardaient leurs
constats pour la fin. Écrire coûte quelques secondes ; relire tout un domaine en
coûte des centaines de milliers de jetons. Si tu hésites entre continuer à lire
et écrire ce que tu as, écris.

**NE MODIFIE AUCUN AUTRE FICHIER.** Tu rapportes, tu ne corriges pas. Quelqu'un
d'autre appliquera les corrections après relecture.

## Ce que tu cherches

### 1. Erreurs de fait
Dates, noms, chiffres, attributions, causalités. C'est le plus grave. Vérifie ce
dont tu n'es pas certain — tu as accès au web. Signale aussi ce qui est
**exact mais trompeur** : une approximation présentée comme un fait, une cause
unique donnée à un événement qui en a plusieurs, un chiffre sans date alors
qu'il a changé.

### 2. Faux cours
Un cours qui ne dit rien : paraphrase de son titre, généralités
interchangeables, remplissage pour atteindre une longueur. Un cours dont le
contenu ne correspond pas à son titre. Une section vide de substance. Un cours
qui répète trois fois la même idée sous trois titres différents.

### 3. Cohérence cours ↔ questions
Les questions d'une notion doivent pouvoir se répondre après avoir lu son cours.
Signale : une question dont la réponse n'est nulle part dans le cours ; une
question qui contredit le cours ; un cours qui affirme le contraire d'une
explication de question.

### 4. Doublons
- deux questions qui posent la même chose, même reformulées ;
- deux cours (ou deux sections) qui traitent le même sujet ;
- un même fait répété dans plusieurs sections d'un même cours ;
- une phrase ou un paragraphe réemployé d'un cours à l'autre.

### 5. Qualité des QCM
- l'énoncé est-il sans ambiguïté ? une seule réponse est-elle défendable ?
- les distracteurs sont-ils plausibles, et clairement faux à qui sait ?
- un distracteur est-il en fait vrai lui aussi ?
- la formulation trahit-elle la réponse (la bonne est la plus longue, la seule
  précise, la seule grammaticalement accordée à l'énoncé) ?
- l'explication est-elle présente, juste, et apprend-elle quelque chose de plus
  que la réponse ?

### 6. Langue
Orthographe, grammaire, accords, conjugaison. Typographie française :
apostrophe courbe (’), guillemets français (« »), espace insécable avant : ; ! ?
et à l'intérieur des guillemets, tirets cadratins. Registre : le contenu tutoie
l'apprenant et évite le jargon inutile. Signale les phrases mal construites ou
inutilement lourdes.

## Format du rapport

Écris ton rapport dans le fichier qu'on t'indique, en Markdown, ainsi :

```
# <ton domaine>

## Ce que j'ai lu
<les fichiers, le nombre de questions et de cours réellement parcourus>

## Constats

### [GRAVE] <titre court>
- **Où** : `fichier:ligne` — slug de la notion
- **Texte** : « la citation exacte »
- **Problème** : ce qui ne va pas, et pourquoi
- **Correction proposée** : la formulation exacte à mettre à la place

### [MOYEN] ...
### [MINEUR] ...

## Ce que la seconde passe a ajouté
<liste>

## Ce qui est sain
<une phrase honnête : ce qui t'a paru solide, pour qu'on sache que tu l'as lu>
```

Gravités : **GRAVE** = une erreur de fait, un doublon franc, une question
insoluble ou à deux réponses. **MOYEN** = une imprécision, une formulation
trompeuse, une redite. **MINEUR** = orthographe, typographie, style.

N'invente pas de constats pour remplir. Un domaine sain donne un rapport court,
et c'est un bon rapport. Mais ne conclus « sain » qu'après avoir vraiment lu.

## Format des données

Questions (`prisma/seed/culture-g/*.ts`) :
```ts
["énoncé de la question", ["choix 1", "choix 2", "choix 3", "choix 4"], 2, "explication"],
```
Le nombre est le rang (base 0) de la bonne réponse dans le tableau des choix.

Cours (`prisma/seed/culture-g/cours/*.ts`) : indexés par slug, chaque cours a un
titre et des sections `[titre, texte, visuels?]`.

Cahier d'origine (`heritage/culture-g/data/*.json`) : `{questions: [{q, choix,
bonne, difficulte, explication}], cours: [...]}`, et les leçons détaillées dans
`heritage/culture-g/data/lecons/<matière>/NN.json`.

Le dépôt est à `/home/pavic/Downloads/la-regle`. Tout le contenu est en français.
