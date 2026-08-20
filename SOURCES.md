# Sources de questions libres — enquête du 20 août 2026

Objectif : enrichir la banque de questions avec du contenu **légalement réutilisable**.

## Exploitables, par ordre de rentabilité

| Source | Licence | Volume FR | Format | Travail à faire |
|---|---|---|---|---|
| **Global-MMLU** (Cohere) | Apache 2.0 | 14 042, dont ~3 000-5 000 pertinents | QCM 4 choix **déjà prêt** | filtrer les matières, relire (erreurs d'étiquetage connues), rédiger les explications |
| **Wikidata** | **CC0** (domaine public) | illimité | à générer | script SPARQL + moteur de distracteurs + filtre de notoriété |
| **Mintaka** (Amazon) | CC BY 4.0 | 20 000 | question ouverte + QID | convertir en QCM via les QID, écarter les questions datées |
| **Examen civique** (data.gouv.fr) | Licence Ouverte 2.0 | ~650 | question + bonnes réponses | fabriquer les distracteurs |

Potentiel total : **20 000 à 25 000 questions**, toutes redistribuables.

## Écartés, et pourquoi

- **Jeux télévisés** (TLMVPSP, Questions pour un champion, Qui veut gagner des millions) : banques
  propriétaires, protégées par le droit d'auteur **et** par le droit sui generis du producteur de
  bases de données (art. L341-1 CPI). Aucune licence de réutilisation n'existe.
- **Sites de quiz communautaires** (quizz.biz, quizity…) : CGU protectrices, aucune licence libre.
- **The Trivia API** : CC BY-**NC**, usage non commercial seulement — bloquant.
- **PIAF, FQuAD, frenchQA, SQuAD_fr, Belebele** : ce sont des jeux de *question-réponse
  extractive* (la question suppose qu'on lise un paragraphe donné), pas des QCM autoportants.
  C'est le principal malentendu sur les « datasets QA français ».
- **OpenTDB / OpenTriviaQA** : 0 question en français. Traduisibles (CC BY-SA autorise l'œuvre
  dérivée) mais impose le partage à l'identique sur la partie traduite, et le contenu est très
  anglo-saxon.

## Wikidata : test réel effectué

Requête validée sur l'endpoint public — 173 pays et leurs capitales, libellés français :

```sparql
SELECT ?paysLabel ?capitaleLabel WHERE {
  ?pays wdt:P31 wd:Q3624078 ; wdt:P36 ?capitale .
  FILTER NOT EXISTS { ?pays wdt:P31 wd:Q3024240 }   # exclut les États historiques
  FILTER NOT EXISTS { ?pays p:P36 [ pq:P582 [] ] }  # exclut les capitales périmées
  SERVICE wikibase:label { bd:serviceParam wikibase:language "fr". }
}
```

Gisements mesurés (couples avec libellés français) :

| Patron de question | Couples disponibles |
|---|---|
| Qui a peint X ? | 113 598 |
| Qui a réalisé le film X ? | 90 096 |
| Qui a écrit X ? | 84 331 |
| Dans quel pays se trouve le monument X ? | 346 821 |
| Quel artiste a sorti l'album X ? | 215 729 |
| Préfecture d'un département français | 167 (exhaustif) |
| Symbole chimique d'un élément | 174 (exhaustif) |

### Test de génération réelle : six défauts constatés

Un essai sur 8 patrons et 24 questions générées a révélé des problèmes que la seule
lecture des volumes ne laissait pas voir. **À traiter avant toute génération de masse.**

1. **Viviers de réponses trop étroits.** Le patron « sport » n'a que 17 réponses distinctes :
   les mêmes reviennent sans cesse. → Rejeter tout patron sous ~100 réponses distinctes.
2. **Propriétés à valeurs multiples = questions fausses.** « Quelle est la langue officielle
   de Taïwan ? » a été générée deux fois avec deux bonnes réponses différentes (Taïwan en a 20).
   Si un distracteur est lui aussi correct, la question est cassée.
   → N'utiliser que les propriétés à valeur unique (`COUNT(?valeur) = 1`).
3. **Notoriété insuffisante.** « Dans quel pays se trouve la tombe de John Ludwig ? » est
   insoluble. L'existence d'un article fr.wikipedia ne suffit pas.
   → Exiger un seuil de pages vues ou de versions linguistiques.
4. **Données aberrantes.** Wikidata contient des erreurs (Barbara Hepworth rattachée au
   « modernisme catalan ») et des entités de type incohérent (des « pays » qui sont en fait
   *Cité de Sydney*). → Contraindre le type des distracteurs (`P31 = pays souverain`).
5. **Réponses devinables par leur forme.** « Symbole de l'unbiseptium ? » → *Ubs*, seule
   option à trois lettres parmi *Np*, *Re*, *Si*. Et cet élément est hypothétique.
   → Distracteurs de longueur homogène ; exclure les entités non confirmées.
6. **Grammaire française cassée.** « la monnaie officielle **de** Canada », « **de** Inde ».
   → Table de contraction par entité (du Canada, de l'Inde, des Îles Marshall) : Wikidata
   ne fournit pas le genre des noms de pays de façon exploitable.

### Varier les tournures sans nouvelles données

Un même couple (tableau ↔ peintre) donne cinq questions perçues comme différentes :

- direct — « Qui a peint *Les Nymphéas* ? »
- inversé — « Lequel de ces tableaux est de Claude Monet ? »
- exclusion — « Lequel de ces peintres n'est **pas** impressionniste ? »
- comparaison — « Lequel de ces sommets est le plus haut ? »
- chronologie — « Lequel de ces événements est le plus ancien ? »

Règle d'ordonnancement à appliquer à l'exécution : **jamais deux fois le même patron
d'affilée**, et **aucun patron au-delà de 4 % du total**. Pour 10 000 questions générées,
il faut donc 25 à 30 patrons distincts, pas 8.

### Les deux règles à respecter

1. **Filtrer par notoriété.** Sans filtre, on génère « Qui a peint 1024 Farben (350-3) ? » — la
   bonne réponse se devine parce qu'elle est la seule célèbre. Restreindre aux œuvres des grands
   musées ou aux entités ayant un article sur fr.wikipedia.
2. **Tirer les distracteurs dans la même bande de notoriété** que la bonne réponse, sinon la
   question se résout sans savoir.

### Note technique
L'endpoint public WDQS tombe en 504 sur les requêtes larges. Utiliser **QLever**
(`https://qlever.dev/api/wikidata`) pour la génération de masse : mêmes requêtes en 200-550 ms.

## Ordre de priorité révisé après le test

Le générateur Wikidata reste le seul gisement infini et sans contrainte de licence, mais
c'est **plusieurs jours de travail**, pas quelques heures : 25 à 30 patrons à écrire et
valider un par un, plus les six garde-fous. Priorité revue en conséquence :

1. **Global-MMLU curé** — les questions sont déjà rédigées par des humains, distracteurs
   compris. Aucun des six défauts ne s'y applique. Le meilleur volume pour le moindre effort.
2. **Mintaka** — vraies questions humaines, variété de tournures naturelle.
3. **Wikidata** — en complément **thème par thème**, en visant la qualité : mieux vaut
   3 000 questions générées irréprochables que 20 000 dont une sur cinq est absurde.

**Garde-fou commun aux trois** : taguer chaque question par son origine dans le JSON
(`"source": "wikidata:P36"`, `"source": "global-mmlu"`). Cela permet d'appliquer les quotas
à l'exécution, de mesurer quelles origines produisent le plus d'erreurs, et de retirer un
patron entier d'un coup s'il se révèle mauvais.

## Intégration dans le projet

Format cible : `{"q", "choix"[4], "bonne", "difficulte", "explication"}`.
Points d'attention :
- Ni Global-MMLU ni Mintaka ne fournissent d'**explication** — c'est pourtant ce qui fait la
  valeur de l'appli. Wikidata permet de la dériver automatiquement (description de l'entité,
  dates, musée de conservation) : argument fort en sa faveur.
- Prévoir une **déduplication** contre les 1 911 questions existantes (« Qui a peint La
  Joconde ? » est déjà dans `arts-musique.json`).
- Garder les questions importées **identifiées par leur source**, pour respecter les obligations
  d'attribution et isoler ce qui est en partage à l'identique.
