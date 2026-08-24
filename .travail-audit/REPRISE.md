# L'Atelier — où en est le travail, et ce qu'il reste à faire

Écrit le 23 août 2026, à la fin d'une longue session. À lire en entier avant de
reprendre : une session neuve n'a aucun souvenir de ce qui suit.

Le dépôt est à **`~/Downloads/la-regle`** (github.com/p4v1c/atelier, branche
`main`). Tout est commité, l'arbre est propre. Les constats de l'audit sont dans
**`~/Downloads/atelier-audit/`** — commence par son `LISEZ-MOI.md`.

---

## Ce qu'est l'application

Une plateforme d'apprentissage à répétition espacée, en français, cinq matières :
français (618 règles, 4 336 phrases, 310 dictées), culture générale (949 notions,
9 921 questions, 907 cours), anglais (182 séries, 7 040 cartes), espagnol (180
séries, 6 970 cartes), géographie (20 séries, 613 questions). Next.js 16 +
Postgres dans Docker (port 55432). Tourne en local, plus une application Android
hors ligne.

---

## Règles à ne jamais enfreindre

- **Ne reconstruis jamais la base.** Les migrations sont additives ; un
  `prisma migrate reset` détruirait 618 règles, 4 336 phrases et la progression
  de trois comptes. Sauvegarde avant toute migration :
  `docker exec la-regle-db pg_dump -U laregle laregle > sauvegardes/<nom>.sql`
  (`pg_dump` n'existe pas sur l'hôte, il faut passer par le conteneur).
- **Le contenu du module français : interdiction LEVÉE le 23 août 2026.** Elle
  a tenu jusque-là, et le propriétaire l'a levée explicitement pour que les
  90 constats graves de `francais.md` puissent être appliqués. La clause qui
  couvrait la culture générale avait été levée plus tôt. Plus aucun module
  n'est en lecture seule — ce qui rend la sauvegarde avant seed d'autant plus
  nécessaire.
- **Ne déploie rien.**
- **Le validateur bloque le seed : ne contourne jamais une erreur en désactivant
  un contrôle.** S'il signale quelque chose, ou le contenu est fautif, ou le
  contrôle est trop strict — le dire et corriger le contrôle en expliquant.
- Comptes de la base : `p4v1c` et `Essai` portent de la vraie progression, jamais
  de bac à sable dessus. Pour les vérifications navigateur en mode connecté,
  utiliser `verif@atelier.test` / `correct-cheval-batterie-92` (permanent).

## La porte à passer avant tout commit

```
npx tsc --noEmit
npm run validate:content          # doit rester à 0 erreur, 0 avertissement
npx vitest run                    # 236 tests
npm run build
node scripts/classes-mortes.mjs   # 0 classe CSS morte
THEME=tous node scripts/mesurer-contraste.mjs   # 0 contraste sous le seuil (npm run dev doit tourner)
```

---

## Ce qui a été fait dans la session du 22-23 août

1. **Passe doublons et redites** sur la culture générale : 91 questions
   redondantes retirées, 23 notions fusionnées, 29 paragraphes de cours
   réécrits.
2. **Refonte du lecteur de cours en page de manuel** : encre sur papier crème,
   ouverture de chapitre, parties numérotées, lettrine, documents « Doc. N »,
   colophon. Au passage, deux régressions de la coque sur téléphone corrigées —
   la page ne défilait pas du tout, et les matières se chevauchaient.
3. **Application Android hors ligne** : `atelier-1.0.0.apk`, 21 Mo, tout le
   contenu embarqué, progression en `localStorage`, sauvegarde vers un fichier,
   mise à jour du contenu depuis une publication GitHub. `npm run apk`.
   Voir la section « L'application Android » du README.
4. **Le mélange des propositions** : personne ne mélangeait, ni l'écran ni le
   seed, alors que deux commentaires se renvoyaient la responsabilité. 83,6 %
   des questions avaient leur bonne réponse au rang 0 ; répondre « toujours la
   première » donnait 55 % à l'écran. Corrigé par `src/modules/kinds/melange.ts`.
5. **La voix de l'APK** : la vue web d'Android n'implémente pas l'API vocale du
   web. L'application accusait le téléphone à tort, et écoute, prononciation et
   dictées étaient mortes dans l'APK. Corrigé par deux greffons Capacitor,
   enveloppés dans `src/lib/client/voix-native.ts`.
6. **L'audit de contenu** — voir ci-dessous.

## L'audit

Vingt relecteurs indépendants, sans contexte hérité, un par domaine, deux passes
chacun. **1 227 constats : 320 graves, 563 moyens, 344 mineurs.** Tous les
rapports sont dans `~/Downloads/atelier-audit/` et dans
`~/Downloads/la-regle/.travail-audit/rapports/` (versionnés).

Huit domaines ont terminé leurs deux passes ; douze ont été coupés en cours,
faute de quota. Chaque rapport commence par une ligne d'état qui dit exactement
ce qui a été lu et ce qui reste.

---

## Ce qu'il reste à faire, dans l'ordre

### 1. Appliquer les constats (le gros du travail)

Prendre les rapports domaine par domaine, en commençant par les GRAVES. Chaque
constat porte sa correction rédigée. **Trier d'abord** : écarter les deux faux
positifs connus (voir le `LISEZ-MOI.md` du dossier d'audit), et vérifier les
constats marqués « à confirmer ».

Une correction déjà appliquée, à ne pas refaire — commit `082e3e6` :
onze faits (zone euro à 21 États, deux motions de censure abouties, commission
de déontologie, Nobel de Kahneman, Véronèse, amendement Pelchat, moai, César du
casting, Sciamma, plan moyen) et la fusion du Sahara occidental dans le tracé du
Maroc, qui faisait compter faux un clic au bon endroit.

**Le propriétaire n'avait pas demandé ces corrections-là** : il voulait d'abord
finir l'audit. Lui demander avant d'en appliquer d'autres.

### 2. Finir l'audit des douze domaines interrompus

Relancer des relecteurs neufs avec `CONSIGNE.md`, en leur donnant la ligne
d'état de leur rapport pour qu'ils reprennent où l'autre s'est arrêté. **Par
groupes de trois ou quatre, jamais vingt d'un coup** : un audit complet coûte
environ 370 000 jetons par domaine, un simple vidage de notes 270 000.

Un vingt et unième relecteur n'a jamais été lancé : celui qui cherche les
doublons et les contradictions **entre** domaines — la même question dans deux
matières, deux domaines qui donnent deux chiffres différents pour un même fait.
Son cahier des charges est dans `.travail-audit/PLAN.md`.

### 3. Le biais de longueur

Le plus gros défaut trouvé, et le plus long à réparer : réécrire les leurres
pour qu'ils fassent le poids de la bonne réponse. À mener notion par notion.
Mesurer l'avancement avec `mesure-longueur.ts`. Ajouter ensuite au validateur du
module un contrôle de longueur, à côté du contrôle de position qui existe déjà,
pour que le défaut ne revienne pas.

### 4. Le filtre de dédoublonnage

`dedoublonner()` dans `src/modules/culture-g/contenu.ts` laisse passer les
reformulations. Ses seuils sont calibrés dans le fichier même, avec l'explication
du pourquoi. À reprendre en s'appuyant sur les paires que les rapports citent —
elles forment un jeu d'essai tout prêt.

### 5. Vérifier sur téléphone

L'APK n'a jamais été essayé sur un vrai appareil : aucun n'était branché. La
voix native, la reconnaissance vocale et les dictées sont justes au niveau du
code. À confirmer.
