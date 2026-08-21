Reprends le projet **l'Atelier** dans `~/Downloads/la-regle` (dépôt
`github.com/p4v1c/atelier`, branche `main`). Lis d'abord le `README.md` : il
décrit le moteur modulaire, la coque, le mode invité et la marche à suivre pour
ajouter une matière. Respecte les conventions qui y sont établies — noms
français, commentaires qui expliquent le POURQUOI, validateur de contenu qui
bloque le seed.

Travaille en deux temps, dans cet ordre, et **commite entre les deux**.

---

## Temps 1 — corriger les bugs

### Contraste (mesuré, pas supposé)

Un audit WCAG sur la coque relève quatre textes sous le seuil. Corrige-les et
**vérifie au ratio**, pas à l'œil :

| Élément                           | Actuel  | Minimum |
| --------------------------------- | ------- | ------- |
| `.matiere-lien .nom` (inactif)     | 2,8:1   | 4,5:1   |
| `.matiere-lien .marque.neuf`       | 1,6:1   | 4,5:1   |
| `.onglet` (inactif)                | 2,8:1   | 4,5:1   |
| `.table-domaines td.rien` (« — »)  | 2,1:1   | 3:1     |

La couleur fautive est `#6f6790`, employée comme « texte discret » un peu
partout dans `src/app/coque.css`. Choisis une valeur qui passe sur `--encre-2`
(#211A44) **et** sur `--encre` (#16112E), et remplace-la partout — ne corrige
pas au cas par cas.

### L'onglet actif se confond avec le survol

`.onglet.actif` et `.onglet:hover` se ressemblent trop : sur l'écran des
dictées, deux onglets paraissent actifs en même temps. Donne à l'actif un
marqueur qui ne peut pas être confondu (un filet, un fond franc), et adoucis le
survol.

### Trois écrans n'ont jamais été repris dans la coque

`Stats.tsx`, `Dictees.tsx`, `Dictee.tsx`, `Bilan.tsx`, `Auth.tsx` et `Lecon.tsx`
datent d'avant la refonte : ils empilent encore des `.carte` dans une colonne,
alors que le reste emploie `.plateau`, `.plateau.avec-rail`, `.mono-titre`, les
tableaux denses et le rail de droite (voir `Accueil.tsx` et `Catalogue.tsx`,
qui sont les modèles à suivre).

Le plus criant est **la liste des dictées** : 310 entrées appelées « Dictée 1,
Dictée 2… » sur deux colonnes très aérées, sans regroupement par thème ni par
niveau, illisible dès la deuxième page. Traite-la comme le catalogue : liste
dense à gauche, fiche de la dictée choisie à droite.

Pour **Progression**, la même logique : le tableau des domaines existe déjà
dans `Accueil.tsx`, réutilise-le plutôt que d'en écrire un second.

### Cohérence des surfaces d'exercice

Les exercices de langue sont passés sur fond sombre (`[data-langue] .cahier`),
ceux de culture générale sont restés sur le papier crème. Tranche : soit le
papier seyès reste réservé au **français** — dont c'est l'identité — et la
culture G bascule sur une surface sombre comme les langues, soit l'inverse.
Mais ne laisse pas trois matières faire trois choses.

### Ménage

`src/app/globals.css` garde `.entete`, `.sub` et `.eyebrow`, qui ne sont plus
rendus depuis que la coque existe. Vérifie (`grep`) avant de supprimer.

### Méthode

- Après chaque correction visuelle, **vérifie en navigateur** avec Playwright
  (`/home/pavic/.cache/ms-playwright/chromium-1148/chrome-linux/chrome`), dans
  les deux modes — connecté et invité, ce dernier sans cookie.
- Mesure les contrastes par script, ne te fie pas à la capture.
- `npm run build && npx vitest run` doivent rester au vert (183 tests).

---

## Temps 2 — enrichir l'anglais et l'espagnol

État actuel :

| Module   | Séries | Exercices | Cours | A1 | A2 | B1 | B2 |
| -------- | ------ | --------- | ----- | -- | -- | -- | -- |
| Anglais  | 36     | 1 340     | 14    | 8  | 10 | 12 | 6  |
| Espagnol | 34     | 1 270     | 12    | 13 | 7  | 10 | 4  |

**Objectif : au moins 12 séries de plus par langue, dont 6 avec un cours
rédigé.** Vise l'équilibre des niveaux — l'espagnol manque de A2 et de B2,
l'anglais de A1.

### Sujets qui manquent réellement

*Anglais* — le passif des verbes à deux compléments existe déjà, ne le refais
pas. En revanche : les question tags, les verbes à double construction
(remember doing / remember to do), le discours indirect libre de l'oral, les
collocations (make/do/take/have), l'anglais des chiffres et des graphiques,
les faux amis scientifiques et juridiques, l'humour et l'euphémisme
britanniques, l'e-mail de mauvaise nouvelle.

*Espagnol* — le subjonctif imparfait et le conditionnel passé, la concordance
des temps, `se` impersonnel contre passif réfléchi, les diminutifs et leur
valeur affective, les régionalismes qui piègent (coger, plata, camión), les
connecteurs de l'oral, l'espagnol du travail en Amérique latine, les nombres et
les dates à l'écrit.

### Règles de rédaction — non négociables

Elles viennent du `README.md` et de l'histoire du projet ; le validateur en
applique une partie, mais pas toutes.

1. **Dix cartes par série**, jamais moins de cinq.
2. **Une note sur les séries de « Faux amis », « Pièges du français »,
   « Grammaire en contexte » et « Conjugaison »** : une carte sans explication
   fait mémoriser sans faire comprendre.
3. **`aussi` contient des variantes FRANÇAISES, `aussiEtranger` des variantes
   dans la langue étudiée.** Les confondre fait accepter « Bien à vous » comme
   traduction de « Kind regards » — c'est un bug réel, déjà commis.
4. **Pas de doublon**, même partiel : le validateur compare les empreintes de
   toutes les cartes du module. Une même phrase dans deux séries est une erreur
   bloquante.
5. **Deux traductions différentes du même français dans une série** sont une
   erreur : l'apprenant en apprend une et se trompe sur l'autre sans avoir tort.
6. **`parle: true` seulement sur des phrases de 2 à 14 mots** — un mot isolé se
   reconnaît mal et n'apprend pas la prosodie.
7. **`oral: true` seulement sur des lots de phrases**, pas de mots nus.
8. Un cours (`cours: { titre, sections }`) fait **trois sections rédigées**,
   avec au moins un visuel — `tableau`, `comparaison`, `frise` ou `etapes`.
   Écris-le comme un chapitre de manuel, pas comme une liste.
9. **Choisis les sujets pour un francophone** : ce sont les points où le
   français induit en erreur qui rapportent, pas ceux qu'un manuel généraliste
   mettrait en tête.
10. Chaque série porte son `niveau` du cadre européen.

### Après chaque fichier

```bash
npm run validate:content -- --module=anglais    # doit finir à 0 erreur
npm run seed -- --prune
npm run tts:prepare                             # l'audio des nouvelles cartes
npx vitest run
```

Le validateur **bloque le seed** : ne contourne jamais une de ses erreurs en
désactivant un contrôle. S'il signale quelque chose, ou bien le contenu est
fautif, ou bien le contrôle est trop strict — et dans ce second cas, dis-le et
corrige le contrôle en expliquant pourquoi.

---

## Ce qu'il ne faut pas faire

- **Ne reconstruis jamais la base.** Toutes les migrations sont additives ; un
  `prisma migrate reset` détruirait 618 règles, 4 336 phrases et la progression.
  Fais un `pg_dump` dans `sauvegardes/` avant toute migration.
- Ne touche pas au contenu du français ni de la culture générale.
- Ne déploie rien : l'Atelier tourne en local, et l'adresse publique sert
  l'ancien cahier — c'est voulu.
