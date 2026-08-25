# Journal des corrections issues de l'audit

Écrit au fur et à mesure : une session peut être coupée à tout moment.
Chaque entrée dit ce qui a été appliqué, ce qui a été écarté, et pourquoi.

## Outil de vérification

`npx tsx .travail-audit/voir.ts <motif de slug>...` affiche, pour chaque règle
du module français, l'énoncé, l'astuce, et **le résultat de chaque correction
appliquée en place**. C'est le seul moyen de voir le défaut dominant du module —
la correction bien formée qui produit une phrase impossible.

## Contraintes du format, à ne pas oublier

- Le marqueur `[...]` ne peut contenir **aucune espace** (`parseMarkedSentence`
  lève une `ParseError`). Le `fix`, lui, peut compter plusieurs mots.
- Chaque règle doit garder **au moins une phrase sans faute** (`fix: null`),
  sinon `no-correct-sentence` (erreur).
- Les phrases fautives ne peuvent pas avoir **toutes** la faute au même rang
  (`same-position`, erreur dès 3 phrases).
- Minimum 2 exercices par règle (erreur), 5 pour éviter l'avertissement
  `thin-skill`.
- La variété des adjectifs peut se loger dans les phrases **correctes** : elles
  n'ont pas de marqueur, donc pas de contrainte d'accord avec un mot remplacé.

---

## Français — constats GRAVES

(en cours)
### Lot 1 — écrits professionnels, accords, ponctuation (batch 001/003/004/006 + densify3)

**Piège découvert, à retenir pour toute la suite** : la ponctuation collée au mot
marqué est réinjectée après la correction (`before + fix + after` dans
`tokenize`). **Retirer une virgule de trop est donc impossible** dans ce format :
une règle de ponctuation ne peut exercer que la virgule *manquante*.

Appliqués :

- `pro-agreer-salutations` — « salutations » est féminin, les adjectifs restaient
  au masculin après correction. Les phrases fautives se terminent maintenant sur
  un adjectif épicène (« sincères »), et la variété des formules
  (« distinguées », « les meilleures ») est passée dans les phrases correctes,
  qui n'ont pas de contrainte d'accord.
- `pro-revenir-vers` — « vers vous » restait en place et la phrase corrigée le
  répétait. Les six phrases exercent maintenant « je vous reviens », qui se
  corrige en un mot ; l'énoncé mentionne les deux calques.
- `pro-objet-message` — le nom de remplacement se juxtaposait au verbe resté en
  place. Les phrases partent maintenant d'un infinitif (« Objet : postuler… »)
  qui se remplace par un nom seul. La phrase déclarée correcte gardait un verbe
  conjugué : remplacée.
- `pro-pieces-jointes-accord` — « la les pièces », « pièces jointe ».
- `pro-suite-entretien` — **règle supprimée**. Elle enseignait « Suite à » comme
  une faute, quand `discute-suite-a` (catégorie non notée) l'enseigne comme un
  tour critiqué mais admis : deux verdicts opposés sur le même tour. La règle
  disputée couvre déjà le sujet, et correctement. La dictée qui s'y rattachait
  pointe désormais sur `discute-suite-a`. **Choix réversible** : c'est la seule
  suppression de règle de ce lot.
- `accord-le-peu-de` — « l'a » et « n'ont » sont un seul token : la correction
  emportait le pronom ou la négation. Et une phrase exigeait le pluriel là où
  l'énoncé demande le singulier.
- `accord-collectif-groupe` — l'énoncé annonce que les deux accords sont
  possibles « selon l'idée dominante », et les phrases en sanctionnaient un.
  Chaque phrase porte maintenant l'indice qui impose son accord (« encadré par
  deux professeurs », « à lui seul », « les uns derrière les autres ») ; celle
  qui n'en portait aucune est devenue une phrase correcte.
- `accord-moins-de-deux` — « ont été retenu ».
- `impropriete-avoir-lair` (règle sur « s'avérer ») — le fix remplaçait le verbe
  au lieu de l'attribut : « Le remède s'est efficace ». C'est l'attribut qui est
  marqué maintenant.
- `virgule-enumeration` — l'astuce (« une virgule de moins que d'éléments »)
  faisait ajouter une virgule de trop ; elle en compte deux de moins.
- `virgule-donc-intercale` — « donc » n'était jamais entre le sujet et le verbe,
  et la correction ajoutait une virgule là où la faute était d'en avoir mis une.
  Règle refaite sur de vraies incises.
- `virgule-lieu-date` — hors de la formule figée « Fait à …, le … », la virgule
  n'est pas obligatoire : trois phrases fabriquaient une faute qui n'en était pas.
- `pro-formule-appel-virgule` — son exemple employait « je reviens vers vous »,
  le calque qu'une autre règle condamne.

Écartés / laissés :

- Le slug `impropriete-avoir-lair` ne décrit pas son contenu (la règle porte sur
  « s'avérer ») et frôle `discute-avoir-lair` du lot 005. Renommer un slug efface
  la progression des comptes sur cette règle : **à traiter avec le propriétaire**.

Porte : `tsc` ✓ · `validate:content` 0 erreur / 634 avertissements (inchangé) ·
236 tests ✓ · `build` ✓.
