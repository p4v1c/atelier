# Espagnol — la moitié avancée

> ÉTAT : **terminé — passe 1 et passe 2 faites sur les 18 fichiers du périmètre.**
> Lus : `dictees.ts`, `avance.ts`, `registres.ts`, `cours-usage.ts`, `avance-b2.ts`,
> `gramatica-c1.ts`, `vocabulaire-c1.ts`, `vocabulaire-ideas.ts`, `vocabulaire-oficios.ts`,
> `vocabulario-sociedad.ts`, `avanzado-c2.ts`, `modismos-caracter.ts`,
> `perifrasis-colocaciones.ts`, `formacion-palabras.ts`, `precision.ts`, `sensaciones.ts`,
> `oral-interaccion.ts`, `dominios-3.ts`. Les constats de la passe 2 sont regroupés sous
> « Constats — passe 2 ». Reste : rien pour ce périmètre ; les fichiers débutants du dossier
> `espagnol/` (bases, verbes, conjugaison, quotidien-a2, expresiones, pronunciacion,
> vocabulario-vida, vocabulaire-mundo, mundo-2, faux-amis, debutant, cours-grammaire,
> conjugacion-2) relèvent d'un autre rapport, même si ce rapport les cite quand ils
> contredisent la moitié avancée.

## Ce que j'ai lu

Les **dix-huit fichiers du périmètre**, deux fois : **112 séries, 1 120 cartes**,
et les cours qui les accompagnent (28 cours, environ 85 sections et
40 visuels — tableaux, comparaisons, étapes), plus les 10 dictées.

J'ai en outre ouvert, pour vérifier des contradictions, quinze fichiers hors
périmètre du même dossier `espagnol/` (`conjugaison.ts`, `conjugacion-2.ts`,
`faux-amis.ts`, `expresiones.ts`, `vocabulario-vida.ts`, `vocabulaire-mundo.ts`,
`mundo-2.ts`, `quotidien-a2.ts`, `verbes.ts`…) : les constats qui les concernent
sont signalés comme tels, parce que la contradiction traverse le périmètre.

Chiffres de référence établis à la machine puis vérifiés à la lecture :
**1 120 cartes, 1 seul `aussiEtranger`, 111 `aussi`, 11 cartes sans note (toutes
dans `avance.ts`), 84 « jamais », 49 « toujours / sans exception », 81 mentions de
l'anglais, 16 séries dont l'énoncé annonce un mot absent des cartes.**

---

## Constats

### [GRAVE] Une note de préposition fausse : « escuchar se passe de préposition, contrairement au français »
- **Où** : `cours-usage.ts` — `es-cours-prepositions`, section « Les verbes qui imposent leur préposition », et carte « Escucho la radio. »
- **Texte** : « quelques-uns se passent de préposition là où le français en met une : buscar, chercher ; escuchar, écouter ; mirar, regarder ; esperar, attendre. On dit escucho la radio, jamais “escucho a la radio”. » / note de carte : « Escuchar se passe de préposition, contrairement au français. »
- **Problème** : le français ne met AUCUNE préposition non plus — « j'écoute la radio », « je regarde la télé », « je cherche mon livre », « j'attends le bus » sont tous transitifs directs. Le contraste énoncé n'existe pas ; c'est le contraste avec l'ANGLAIS (listen to, look at, wait for, look for). La règle est donnée à un francophone comme si elle le concernait, alors qu'elle décrit un piège anglais. Une remarque fausse sur l'usage, au cœur d'un cours de prépositions.
- **Correction proposée** : « quelques-uns se passent de préposition, comme en français mais contrairement à l'anglais : buscar, escuchar, mirar, esperar. On dit escucho la radio, jamais “escucho a la radio”. » — et pour la note de carte : « Escuchar est transitif direct, comme “écouter” en français ; c'est l'anglais qui met une préposition. »

### [GRAVE] Un discours rapporté qui change de verbe : « Ven mañana » → « Dijo que fuera »
- **Où** : `avance-b2.ts` — `es-concordancia`, visuel « Ce qui a été dit, ce qu'on rapporte »
- **Texte** : colonne direct « “Ven mañana.” » ; colonne rapporté « Dijo que fuera al día siguiente. »
- **Problème** : *ven* est l'impératif de **venir**. Son rapporté est *viniera*, pas *fuera* (qui est ir/ser). Le tableau enseigne « viens demain » → « il a dit d'ALLER le lendemain ». Erreur de conjugaison et de sens dans le visuel censé fixer la règle.
- **Correction proposée** : « Dijo que viniera al día siguiente. »

### [GRAVE] « Sostener una tesis » présenté comme un calque fautif — alors que c'est de l'espagnol standard, employé ailleurs dans le module
- **Où** : `vocabulaire-c1.ts` — `es-c1-academico`, tableau « Le calque, et le verbe attendu »
- **Texte** : ligne `["étayer une thèse", "sostener una tesis", "sustentar una tesis"]`, colonne intitulée « Le calque ».
- **Problème** : *sostener una tesis* est parfaitement idiomatique et fréquent (RAE : sostener = « afirmar, defender una opinión »). Le module lui-même l'emploie sans réserve : `gramatica-c1.ts` carte « Sostiene que la libertad exige igualdad » (note : « Sostener que, soutenir une thèse. Le verbe est courant dans tout l'écrit philosophique »), et `vocabulaire-ideas.ts` cours « sostener que, soutenir ». L'apprenant apprend donc à éviter une tournure que le module lui enseigne par ailleurs. Règle donnée puis démentie.
- **Correction proposée** : remplacer la ligne par `["étayer une thèse", "soportar una tesis", "sustentar / respaldar una tesis"]`, et ajouter dans la note du tableau : « Sostener una tesis est correct aussi ; sustentar insiste sur les preuves. »

### [GRAVE] Le tableau des registres contredit son propre cours et déclare familiers des mots neutres
- **Où** : `vocabulaire-c1.ts` — `es-c1-registro`, visuel « La même idée, trois étages » (colonnes Familier / Neutre / Soutenu)
- **Texte** : lignes `["pedir", "solicitar", "requerir"]`, `["empezar", "comenzar", "iniciar"]`, `["decir", "afirmar", "manifestar"]`, `["ver", "observar", "constatar"]`, `["acabar", "terminar", "concluir"]`
- **Problème** : le texte de la même section dit exactement l'inverse — « Pedir est neutre, solicitar est administratif, requerir est technique. Empezar est neutre, comenzar un peu plus soigné, iniciar administratif. » Le tableau les range en colonne « Familier ». Et *decir*, *ver*, *acabar* ne sont pas familiers : ce sont les verbes neutres de la langue. Un apprenant qui suit le tableau évitera *decir* dans une conversation ordinaire. La note de la carte « Manifestó su desacuerdo por escrito » répète la faute : « decir serait familier ici ».
- **Correction proposée** : décaler ces lignes d'une colonne — Familier vide (ou : *soltar*, *pillar*, *currar*, *echar*), Neutre = pedir / empezar / decir / ver / acabar, Soutenu = solicitar / comenzar / afirmar / observar / terminar ; et créer une quatrième colonne « administratif » pour requerir / iniciar / manifestar / constatar / concluir. Corriger la note de carte en « decir serait neutre ici, afirmar plus posé ».

### [GRAVE] « Eventualmente veut dire finalement »
- **Où** : `vocabulaire-oficios.ts` — `es-voc-trabajo-oficios`, section « Candidater, et les faux amis du bureau »
- **Texte** : « eventualmente veut dire finalement ou occasionnellement, jamais éventuellement, qui se dit posiblemente. »
- **Problème** : deux erreurs. (1) Le sens « finalement » est un anglicisme (*eventually*) que Fundéu et la RAE déconseillent expressément ; ce n'est pas le sens de l'espagnol. Le DLE donne : « 1. Incierta o casualmente. 2. En cualquier caso o circunstancia. » (2) Le français « éventuellement » signifie précisément « le cas échéant, possiblement » — c'est-à-dire à peu près le sens espagnol. Le faux ami annoncé n'en est pas un, et la traduction enseignée est celle qu'il faut fuir.
- **Correction proposée** : « eventualmente veut dire occasionnellement, le cas échéant — assez proche du français “éventuellement”. Le sens “finalement” est un anglicisme (eventually) à éviter : on dit finalmente. »

### [GRAVE] Doublon franc : la carte du chômage, deux fois, avec la même note
- **Où** : `avance.ts:es-presse` — « El paro bajó dos puntos. » (note : « El paro en Espagne, el desempleo en Amérique latine ») ; et `vocabulaire-ideas.ts:es-voc-politica` — « El paro subió el mes pasado. » (note : « El paro en Espagne ; en Amérique latine, el desempleo — et el paro y veut dire la grève »). Le même point est encore le `tip` de `vocabulaire-oficios.ts:es-voc-trabajo-oficios` : « El paro est le chômage en Espagne et la grève en Amérique latine. »
- **Problème** : trois occurrences du même contenu lexical, deux cartes quasi identiques (même verbe de variation, même note), à travers trois fichiers. Même chose pour « Los sindicatos convocaron una manifestación » (`avance.ts`) contre « Los sindicatos convocaron una huelga » (`vocabulaire-ideas.ts`), avec la même glose de *convocar*.
- **Correction proposée** : garder la carte de `es-voc-politica` (la plus complète, elle ajoute *paro* = grève) et retirer celle de `es-presse` ; fusionner de même les deux cartes *convocar*.

### [GRAVE] Doublon franc : la série santé existe deux fois, en A2 et en B2
- **Où** : `avance.ts` — `es-sante-corps` (A2) et `vocabulaire-ideas.ts` — `es-voc-medicina` (B2)
- **Texte** : A2 « Me duele la garganta. » / « Me duelen los pies. » / « Quería pedir cita con el médico. » / « Me encuentro mal. » — B2 « Me duele mucho la espalda. » / « Tengo que pedir cita con el médico. » / « No me encuentro bien hoy. » Les notes se recouvrent presque mot pour mot (« doler se construit comme gustar », « Encontrarse pour l'état »).
- **Problème** : quatre des dix cartes du B2 refont le A2 ; la partie neuve du B2 (le parcours de soins, les faux amis) est noyée. C'est l'équivalent espagnol des « séries entières présentes deux fois à deux niveaux » relevées côté anglais.
- **Correction proposée** : retirer de `es-voc-medicina` les cartes *doler*, *pedir cita* et *encontrarse* (déjà acquises en A2) et les remplacer par des cartes sur *el alta*, *la revisión*, *el quirófano*, *urgencias*, *la UCI*.

### [GRAVE] Le seseo confondu avec le ceceo, et le mot lui-même mal orthographié
- **Où** : `registres.ts` — `es-regionalismos`, cours, section « Reconnaître d'où vient celui qui parle »
- **Texte** : « En Espagne, cinco se prononce avec un th anglais ; partout ailleurs, comme un s. C'est le seso contre le ceceo, et il s'entend au premier mot. »
- **Problème** : trois erreurs enchaînées. (1) *seso* signifie « cervelle » ; le terme est **seseo**. (2) L'opposition décrite est celle de la **distinción** (Espagne du centre et du nord : /θ/ pour c, z) contre le **seseo** (le reste, dont Canaries et une partie de l'Andalousie : /s/). (3) Le **ceceo** est tout autre chose : prononcer les *s* comme /θ/, phénomène minoritaire d'Andalousie — il est ici placé du côté de l'Amérique, ce qui est faux. Une notion de phonétique enseignée à l'envers.
- **Correction proposée** : « En Espagne — sauf les Canaries et une bonne partie de l'Andalousie —, cinco se prononce avec un th anglais ; partout ailleurs, comme un s. C'est la distinción contre le seseo, et il s'entend au premier mot. Le ceceo, lui, est autre chose : prononcer aussi les s comme un th, trait andalou minoritaire. »

### [GRAVE] `aussiEtranger` : 1 carte sur 1120. L'exercice de production sanctionnera massivement des bonnes réponses
- **Où** : tout le périmètre. Compté à la machine puis vérifié à la lecture.
- **Chiffres** : 104 séries, **1120 cartes** dans les dix-sept fichiers de cartes du périmètre. Le champ `aussiEtranger` y apparaît **une seule fois** — `avanzado-c2.ts:53`, carte « El banco subió los tipos de interés. », `aussiEtranger: ["El banco subió las tasas de interés."]`. Sur tout le dossier `espagnol/` (33 fichiers), on en compte huit en tout : `bases.ts` ×3, `verbes.ts` ×2, `vocabulario-vida.ts` ×2, `avanzado-c2.ts` ×1 — c'est-à-dire dans les séries débutantes, pas dans la moitié avancée. Le champ `aussi` (variantes **françaises**, qui n'aident pas la production) est en revanche renseigné 111 fois. Le défaut est donc nettement plus grave qu'en anglais (une vingtaine sur 540) : ici, **0,09 % des cartes**.
- **Problème** : l'exercice « produire » demande d'écrire l'espagnol à partir du français. Toute carte dont le français admet plusieurs espagnols légitimes fait sanctionner une bonne réponse. La carte unique qui porte le champ montre exactement le bon usage (variante d'Amérique) — et prouve que le reste du module aurait dû l'avoir. Les cas les plus coûteux relevés :
  - **Le doublet -ra / -se du subjonctif imparfait.** `avance-b2.ts:es-subjuntivo-imperfecto` affirme en toutes lettres : « Les deux séries sont interchangeables dans tous leurs emplois, sans la moindre nuance de sens », et la note de la carte « No creí que fuera tan difícil » précise « Fuera ou fuese : les deux sont corrects ». Or **six cartes au moins** n'acceptent que la forme en -ra : `Si tuviera tiempo, iría contigo` (*tuviese*), `Ojalá hubiera venido` (*hubiese*), `Me pidió que le ayudara` (*ayudase*), `No creí que fuera tan difícil` (*fuese*), `Como si nada hubiera pasado` (*hubiese*), `Si hubiéramos salido antes` (*hubiésemos*), plus `Habría venido si me lo hubieras dicho` (*hubieses*), `Aunque lloviera, saldríamos igual` (*lloviese*), `Era posible que ya lo supiera` (*supiese*), `Quería que vinieras ayer` (*vinieses*). Le cours autorise, l'exercice refuse : c'est le cas le plus coûteux du module.
  - **Les couples régionaux de `registres.ts:es-regionalismos`.** Toute la série enseigne que deux ou trois formes sont également justes, et n'en accepte qu'une : « Passe-moi le portable » → `celular` seul (pas *móvil*) ; « La voiture est au garage » → `carro` seul (pas *coche*, *auto*) ; « J'aime le jus d'orange » → `jugo` seul (pas *zumo*) ; « On va à la piscine » → `pileta` seul (pas *alberca*, *piscina*) ; « Je n'ai pas d'argent » → `plata` seul (pas *dinero*). Une série entière dont le sujet même est la pluralité des réponses justes.
  - **`avance.ts:es-nuances-temps`** : « J'attends depuis deux heures. » → `Llevo dos horas esperando.` Le cours de la même série donne les trois tournures pour équivalentes (« Les trois disent la même chose ») : *Hace dos horas que espero*, *Espero desde hace dos horas*.
  - **`registres.ts:es-conectores-orales`** : « De toute façon, on verra bien. » → `De todas formas, ya veremos.` ; la note dit « de todas formas, de todas maneras, de todos modos : trois variantes équivalentes ». Deux sur trois comptées fausses.
  - **`vocabulaire-ideas.ts:es-voc-tecnologia`** : « Clique sur le lien ci-dessous. » → `Pincha en el enlace` ; la note dit « Pinchar en Espagne, hacer clic partout ». « Change le mot de passe » → `contraseña` ; la note dit « la clave s'emploie aussi ».
  - **`vocabulaire-ideas.ts:es-voc-dinero`** : « Combien vaut ce tableau ? » → `¿Cuánto vale…?` ; la note dit « aussi courant que ¿cuánto cuesta? ».
  - **`vocabulaire-ideas.ts:es-voc-medicina`** : « Je dois prendre rendez-vous » → `pedir cita` ; la note dit « pedir hora dans certaines régions ».
  - **`avance-b2.ts:es-trabajo-latam`** : « Le délai a expiré » → `El plazo se venció` ; la forme non pronominale *venció* est celle qu'emploie `vocabulaire-oficios.ts` (« El plazo vence el treinta de junio »).
  - **`vocabulaire-c1.ts:es-c1-modismos`** : « Il faut prendre le taureau par les cornes » → `coger el toro por los cuernos` ; la note dit « En Amérique, on dirait agarrar el toro ».
  - **`vocabulario-sociedad.ts:es-voc-cine`** : « Le scénario ne tient pas debout » → `El guion…` ; la note dit elle-même que « l'ancienne graphie guión reste courante ».
- **Correction proposée** : renseigner `aussiEtranger` par lots, en trois passes mécanisables. (1) Toute carte contenant un subjonctif imparfait ou plus-que-parfait en -ra → ajouter la forme en -se. (2) Toute carte dont la `note` nomme une variante avec « ou », « aussi », « s'emploie aussi », « les deux sont corrects », « en Amérique », « en Espagne » → y remonter la variante nommée. (3) Les séries `es-regionalismos`, `es-trabajo-latam`, `es-conectores-orales` → lister systématiquement les deux ou trois normes. Sans cela, l'exercice de production est inutilisable sur la moitié avancée.

### [MOYEN] Deux séries « Choisir son registre » quasi jumelles, à deux niveaux
- **Où** : `gramatica-c1.ts` — `es-c2-registro` « Choisir son registre à l'écrit » (C2) et `vocabulaire-c1.ts` — `es-c1-registro` « Choisir son registre » (C1)
- **Problème** : même sujet, titres presque identiques, et cartes qui se recouvrent : `Se ruega abstenerse de fumar` contre `Se ruega no fumar en la sala` (notes jumelles sur la formule des écriteaux) ; `La empresa adquirió tres competidores` contre `La empresa adquirió el edificio` ; `Adjunto el informe solicitado` contre `Adjunto el archivo solicitado` (`avance-b2.ts:es-trabajo-latam`). Pire, les deux notes sur *adquirir* se contredisent : C2 « Adquirir dit la prise de contrôle, pas le simple achat » / C1 « Adquirir est soutenu ; comprar est neutre ».
- **Correction proposée** : fusionner les deux séries en une, ou spécialiser le C2 sur les seuls quatre verbes annoncés par son `statement` (voir constat suivant).

### [MOYEN] Une série qui ne tient pas la promesse de son énoncé
- **Où** : `gramatica-c1.ts` — `es-c2-registro`
- **Texte** : statement « Conseguir, obtener, lograr, alcanzar. L'espagnol a quatre verbes pour ce que le français dit avec “obtenir”, et le choix entre eux fait tout le registre. » ; tip « Conseguir est neutre… Obtener sonne administratif, lograr souligne l'effort, alcanzar suppose une cible chiffrée. »
- **Problème** : aucune des dix cartes ne contraste ces quatre verbes. *Lograr* et *alcanzar* n'apparaissent nulle part ; *obtener* seulement en note. Les cartes portent sur *adquirir*, *adjunto*, *revocar*, *arreglar*, *exponerse*, *tramitar*, *se ruega* — un tout autre sujet. La question annoncée n'est jamais posée.
- **Correction proposée** : soit remplacer quatre cartes par des cartes contrastant conseguir / obtener / lograr / alcanzar, soit réécrire le statement pour annoncer ce que la série enseigne réellement (« le mot savant et le mot ordinaire à l'écrit professionnel »).

### [MOYEN] Trois traductions différentes de la même phrase espagnole dans trois fichiers
- **Où** : `gramatica-c1.ts:es-cours-subjuntivo-avanzado` (tableau et carte), `vocabulaire-c1.ts:es-c1-academico` (cours)
- **Texte** : carte « Aunque llueva, iré. » = « Même s'il pleut, j'irai. » ; tableau du même cours = « même s'il pleuvait, j'irais » ; cours de `vocabulaire-c1` = « aunque llueva, il pleuvra peut-être ».
- **Problème** : la deuxième glose correspond en fait à *aunque lloviera, iría* (imparfait du subjonctif + conditionnel), pas à *llueva, iré*. La troisième déplace le sens sur la pluie au lieu de la concession. Trois équivalences pour un même exemple, dont deux fausses.
- **Correction proposée** : uniformiser sur « Même s'il pleut, j'irai » partout ; réserver « même s'il pleuvait, j'irais » à *Aunque lloviera, iría* (qui existe déjà comme carte dans `avance-b2.ts`).

### [MOYEN] « Busco a alguien que sabe ruso » donné comme exemple d'antécédent connu
- **Où** : `gramatica-c1.ts` — `es-cours-subjuntivo-avanzado`, tableau « Le même mot, deux modes, deux sens »
- **Texte** : `["Busco a alguien que sabe ruso.", "indicatif", "je sais qui c'est"]`
- **Problème** : *alguien* est par définition indéterminé ; on ne peut pas gloser « je sais qui c'est ». L'exemple choisi détruit la règle qu'il illustre. Le visuel de la section suivante fait d'ailleurs le bon choix (« Busco la casa que tiene jardín ») — et le texte de cette même section, lui, écrit « Busco una casa que tiene jardín : cette maison-là, je l'ai vue », avec un article indéfini qui rend la phrase bancale, en contradiction avec son propre visuel.
- **Correction proposée** : tableau → `["Busco a la traductora que sabe ruso.", "indicatif", "je sais qui c'est"]` ; texte → « Busco **la** casa que tiene jardín : cette maison-là, je l'ai vue. »

### [MOYEN] « Amortizar ne veut pas dire amortir au sens comptable »
- **Où** : `vocabulaire-ideas.ts` — `es-voc-dinero`, section « Les papiers et les comptes »
- **Texte** : « amortizar veut dire rembourser un capital, pas amortir au sens comptable français. »
- **Problème** : faux. *Amortizar* couvre aussi l'amortissement comptable (*la amortización del inmovilizado* est le terme du Plan General de Contabilidad espagnol). Le mot a les deux sens, exactement comme en français.
- **Correction proposée** : « amortizar veut dire rembourser un capital — et aussi amortir au sens comptable, comme en français. »

### [MOYEN] « Sensible » interdit pour un milieu fragile
- **Où** : `vocabulaire-oficios.ts` — `es-voc-medioambiente`, section « L'énergie, et les faux amis de la nature »
- **Texte** : « Sensible veut dire sensible au sens émotionnel : un milieu fragile se dit frágil ou vulnerable, jamais “sensible”. »
- **Problème** : *especie sensible*, *zona sensible*, *ecosistema sensible* sont des termes courants et même officiels du droit environnemental espagnol (« especies sensibles a la alteración de su hábitat », catégorie légale). Le « jamais » est faux. Le point *sensible / sensato* est de plus déjà traité dans `vocabulaire-ideas.ts:es-voc-emociones` — redite.
- **Correction proposée** : « Sensible dit d'abord la sensibilité émotionnelle ; pour un milieu, frágil et vulnerable sont plus courants, mais sensible existe en langue technique (especies sensibles). »

### [MOYEN] « Votar por, jamais en Espagne »
- **Où** : `vocabulaire-ideas.ts` — `es-voc-politica`, section « Le vocabulaire électoral »
- **Texte** : « Votar a alguien, voter pour quelqu'un — la préposition est a, jamais por en Espagne, alors que votar por s'entend en Amérique latine. »
- **Problème** : *votar por* est correct et employé en Espagne aussi (le DPD donne les deux : « votar a/por alguien »). Le « jamais » fabrique une faute là où il n'y en a pas.
- **Correction proposée** : « Votar a alguien est la construction la plus fréquente en Espagne, votar por en Amérique latine ; les deux sont corrects partout. »

### [MOYEN] « Agradezco por » déclaré impossible, dans la série même de l'espagnol d'Amérique
- **Où** : `avance-b2.ts` — `es-trabajo-latam`, carte « Le agradezco su pronta respuesta. »
- **Texte** : « Agradecer se construit sans préposition : agradezco su respuesta, jamais “agradezco por”. »
- **Problème** : *agradecer por* est courant et admis en Amérique latine (« le agradezco por su tiempo »), et la série est explicitement consacrée à l'espagnol du travail latino-américain. La règle est donnée à l'endroit précis où elle ne tient pas.
- **Correction proposée** : « Agradecer prend la chose sans préposition : agradezco su respuesta. En Amérique latine, agradecer por s'entend aussi. »

### [MOYEN] Le se involontaire traduit par un aveu
- **Où** : `vocabulaire-oficios.ts` — `es-voc-arreglos`, carte « Se me rompió el enchufe. »
- **Texte** : etranger « Se me rompió el enchufe. » / francais « J'ai cassé la prise. » / note « Le se involontaire : c'est la façon normale de rapporter un dégât domestique. »
- **Problème** : le cours de la même série oppose formellement « He roto el vaso » (« l'aveu — le locuteur s'accuse ») et « Se me rompió el vaso » (« le locuteur est victime »). La carte traduit la seconde par la première. En exercice de production, « J'ai cassé la prise » appellera naturellement *He roto el enchufe*, qui sera compté faux.
- **Correction proposée** : francais → « La prise s'est cassée. » avec `aussi: ["La prise m'a lâché."]`.

### [MOYEN] Une phrase qui n'est pas une phrase : « ¿Manejas o conduces tú? »
- **Où** : `registres.ts` — `es-regionalismos`
- **Texte** : etranger « ¿Manejas o conduces tú? » / francais « C'est toi qui conduis ? » / note « Manejar en Amérique, conducir en Espagne. »
- **Problème** : la phrase juxtapose deux synonymes régionaux comme s'ils s'opposaient ; aucun hispanophone ne la dirait, et elle ne correspond pas au français proposé (qui demande qui conduit, pas quel verbe on emploie). L'apprenant mémorise une phrase inutilisable.
- **Correction proposée** : etranger « ¿Manejas tú o manejo yo? » (accent latino-américain assumé) / francais « C'est toi qui conduis ou c'est moi ? », note inchangée ; ou deux cartes séparées, *conduzco yo* (ES) et *manejo yo* (AL).

### [MOYEN] « Un piso de dos habitaciones » = « un deux-pièces »
- **Où** : `avance.ts` — `es-maison-ville`
- **Texte** : « Busco un piso de dos habitaciones. » / « Je cherche un deux-pièces. »
- **Problème** : *habitación* désigne la chambre. Un logement à deux chambres est un trois-pièces (T3) en français, le séjour étant compté. Un deux-pièces se dit *un piso de una habitación*. La carte enseigne un décalage d'une pièce.
- **Correction proposée** : francais « Je cherche un trois-pièces. » avec `aussi: ["Je cherche un appartement avec deux chambres."]`. À noter aussi que *piso* est employé dans la même série au sens d'« étage » (« Está en el tercer piso ») sans que la double valeur soit signalée.

### [MOYEN] Titre du module contre carte : vingt pays ou vingt et un ?
- **Où** : `avance-b2.ts:es-se-impersonal` carte « Se habla español en veinte países. » ; `registres.ts` cours titre « L'espagnol et ses vingt et un pays » ; `vocabulaire-c1.ts:es-c1-modismos` « L'espagnol est parlé dans vingt et un pays » ; `vocabulaire-ideas.ts:es-voc-politica` statement « Vingt et un pays, vingt et un systèmes ».
- **Problème** : trois occurrences à 21 contre une à 20. Le chiffre dépend de ce qu'on compte (20 États souverains où l'espagnol est officiel, 21 avec Porto Rico). Ce n'est pas une faute en soi, mais l'incohérence interne se remarque.
- **Correction proposée** : harmoniser sur « vingt et un » et ajouter une fois la précision : « vingt États souverains, plus Porto Rico ».

### [MOYEN] « Se investiga a tres empresas » classé passif réfléchi, contre la règle du module
- **Où** : `vocabulaire-c1.ts` — `es-c1-prensa`, tableau « Le titre, et ce qu'il dit vraiment »
- **Texte** : `["Se investiga a tres empresas", "Tres empresas están siendo investigadas.", "présent, passif réfléchi"]`
- **Problème** : `avance-b2.ts:es-se-impersonal` pose explicitement la règle inverse : « dès que le complément porte un a, il ne peut plus jouer le rôle de sujet » → c'est l'impersonnel, pas le passif réfléchi ; le verbe reste au singulier précisément pour cette raison. Le tableau de presse range l'exemple dans la mauvaise catégorie. Règle donnée puis démentie.
- **Correction proposée** : troisième colonne → « présent, se impersonnel (le a bloque le sujet) ».

### [MOYEN] « L'infinitif seul annonce une intention » — l'exemple ne contient pas d'infinitif seul
- **Où** : `vocabulaire-c1.ts` — `es-c1-prensa`, section « La grammaire des titres »
- **Texte** : « Et l'infinitif seul annonce parfois une intention : El Gobierno, a punto de dimitir. »
- **Problème** : *a punto de dimitir* est une locution prépositive suivie d'un infinitif, pas un infinitif seul ; et la convention réelle du titre est l'ellipse du verbe conjugué, marquée par la virgule. La règle et son exemple ne se rejoignent pas.
- **Correction proposée** : « Et la virgule remplace le verbe : El Gobierno, a punto de dimitir — pour “El Gobierno está a punto de dimitir”. »

### [MOYEN] Une dictée rangée sous « por / para » sans un seul por ni para
- **Où** : `dictees.ts` — dernière dictée, `series: ["es-por-para"]`
- **Texte** : « Antes pensaba que hablar con soltura era hablar sin pararse. No lo es. Es que te entiendan y entender tú, sin que ninguno de los dos tenga que esforzarse demasiado. Las pausas siguen ahí; simplemente dejas de notarlas. »
- **Problème** : le texte ne contient ni *por* ni *para*. L'apprenant qui révise cette série ne s'entraînera sur rien. De plus « Es que te entiendan y entender tú » est bancal : la coordination d'une subordonnée au subjonctif et d'un infinitif à sujet postposé ne se dit pas ainsi.
- **Correction proposée** : réécrire « Es que te entiendan y que entiendas tú » et rattacher la dictée à `es-conj-subjonctif` (elle contient *entiendan*, *tenga*), ou ajouter un por/para réel : « …sin que ninguno de los dos tenga que esforzarse demasiado **por entenderse**. »

### [MOYEN] La dictée « Décrire un lieu » rangée sous ser/estar n'illustre presque rien
- **Où** : `dictees.ts` — dictée Madrid, `series: ["es-ser-estar"]`
- **Problème** : la seule occurrence est « no es su tamaño ». Aucun *estar*, donc aucune opposition. La série promise n'est pas travaillée.
- **Correction proposée** : rattacher à `es-voc-ciudad` ou insérer un couple : « …hay plazas donde nadie tiene prisa, donde todo **está** tranquilo aunque la ciudad **sea** enorme. »

### [MOYEN] Les périphrases verbales enseignées deux fois, en A2/B2 et de nouveau en cours de prépositions
- **Où** : `avance.ts` — `es-nuances-temps` (cours entier sur llevar / seguir / acabar de / volver a / dejar de / ponerse a) et `cours-usage.ts` — `es-cours-prepositions`, section « Les verbes qui imposent leur préposition » (acabar de, volver a, dejar de, empezar a)
- **Problème** : les mêmes verbes, les mêmes gloses (« volver a llamar, rappeler » ; « acabo de llegar, je viens d'arriver »), et deux cartes jumelles : « Volvió a llamar. » figure dans le tableau de `avance.ts` et comme carte de `cours-usage.ts`. Idem « Acabo de hablar con ella » / « Acabo de llegar ».
- **Correction proposée** : dans `es-cours-prepositions`, renvoyer à `es-nuances-temps` et ne garder que la dimension prépositionnelle (empezar a, pensar en, confiar en, insistir en).

### [MOYEN] Le voseo exposé deux fois, presque mot pour mot
- **Où** : `cours-usage.ts` — `es-cours-registres`, section « Le voseo » ; et `registres.ts` — `es-regionalismos`, section « Reconnaître d'où vient celui qui parle »
- **Texte** : « En Argentine, en Uruguay, au Paraguay et dans une partie de l'Amérique centrale, tú est remplacé par vos, avec sa conjugaison propre : vos hablás, vos tenés, vos sos. L'accent se déplace sur la dernière syllabe, et l'impératif suit » / « En Argentine, en Uruguay, au Paraguay et en Amérique centrale, tú devient vos, avec sa propre conjugaison : vos hablás, vos tenés, vos podés. L'accent tombe sur la dernière syllabe, et l'impératif change aussi ».
- **Problème** : paragraphe réemployé d'un cours à l'autre. La distinction vosotros / ustedes est elle aussi traitée intégralement dans les deux fichiers.
- **Correction proposée** : garder l'exposé dans `cours-usage.ts` (série A1, où il est à sa place) et le réduire dans `registres.ts` à une ligne de rappel.

### [MOYEN] « ¿Pudiera usted ayudarme? » donné pour la politesse ordinaire
- **Où** : `avance-b2.ts` — `es-subjuntivo-imperfecto`, section « Les deux emplois qu'on oublie »
- **Texte** : « De même, ¿pudiera usted ayudarme? adoucit une demande. »
- **Problème** : la forme existe mais est rare et très marquée (juridique, ou régionale) ; la demande courante est *¿podría usted ayudarme?*. Présentée à côté de *quisiera* — qui, lui, est bien la formule vivante —, elle laisse croire à un usage ordinaire.
- **Correction proposée** : « De même, quisiera pedirle un favor. La forme ¿pudiera usted…? existe mais reste rare : on dit ¿podría usted ayudarme? »

### [MOYEN] « Muy horrible » déclaré impossible
- **Où** : `vocabulaire-ideas.ts` — `es-voc-emociones`, section « L'intensité »
- **Texte** : « Pour les adjectifs déjà extrêmes, muy est exclu comme en anglais : on ne dit pas “muy horrible” ni “muy estupendo”. »
- **Problème** : *muy horrible* et *muy estupendo* s'entendent couramment en espagnol parlé ; l'analogie avec l'anglais (« very horrible » est également dit) ne tient pas non plus. La règle est trop absolue.
- **Correction proposée** : « Sur les adjectifs déjà extrêmes, muy est superflu et sonne redondant : on préfère absolutamente horrible, verdaderamente estupendo, ou l'adjectif seul. »

### [MOYEN] « Un poco inteligente » présenté comme la façon de dire « un peu intelligent »
- **Où** : `vocabulaire-c1.ts` — `es-c1-matices`, section « Les degrés de l'adjectif »
- **Texte** : « poco inteligente veut dire “peu intelligent”, et non “un peu intelligent”, qui se dirait un poco inteligente. La présence de l'article change le sens du tout au tout. »
- **Problème** : *un poco* + adjectif positif n'est pas idiomatique en espagnol (*un poco tonto* oui, *un poco inteligente* non) ; l'exemple choisi est le seul qui ne marche pas. Et *un* n'est pas ici un article mais un quantifieur.
- **Correction proposée** : « poco amable veut dire “peu aimable”, un poco tonto “un peu bête”. Poco nie, un poco atténue. »

### [MOYEN] Vocabulaire juridique douteux : « Pidieron al régimen que dimitiera » et « La votación salió adelante »
- **Où** : `gramatica-c1.ts` — `es-c1-diplomacia`
- **Texte** : « Pidieron al régimen que dimitiera. » / « La votación salió adelante con tres abstenciones. » ; et « Las negociaciones se rompieron por las fronteras. » (note : « Le pluriel est la règle dans ce sens »)
- **Problème** : (1) *dimitir* se dit d'une personne quittant une fonction, pas d'un régime — on demande *la dimisión del Gobierno* ou on demande à un dirigeant de *dimitir*. (2) *Salir adelante* se dit d'un texte, d'une proposition, d'une loi — pas du vote lui-même : *la propuesta salió adelante*, et le français « le vote a été adopté » est également bancal. (3) *Se rompieron por las fronteras* se lit « à cause des frontières », pas « sur la question des frontières » ; il faut *por la cuestión fronteriza*. La note sur « le pluriel » est par ailleurs incompréhensible, *negociaciones* étant pluriel par nature.
- **Correction proposée** : « Pidieron la dimisión del Gobierno. » / « La reforma salió adelante con tres abstenciones. » / « Las negociaciones se rompieron por la cuestión fronteriza. » (note : « Romperse unas negociaciones, échouer ; el escollo, l'achoppement »).

### [MOYEN] « Cuadro veut d'abord dire cadre » — contredit par sa propre carte
- **Où** : `vocabulaire-oficios.ts` — `es-voc-arte-cultura`, cours et note de tableau
- **Texte** : « un cuadro, la toile — le mot veut d'abord dire cadre » ; note « Un cuadro veut d'abord dire cadre, puis tableau, puis schéma. » Carte : « Un cuadro veut d'abord dire cadre, puis tableau. Un marco est le cadre matériel. »
- **Problème** : *cuadro* ne signifie pas « cadre » au sens du bord d'un tableau — c'est *marco*, comme la carte le dit elle-même une ligne plus loin. Le premier sens du DLE est « rectangle », puis « peinture ». La formule « veut d'abord dire cadre » induit exactement l'erreur que la ligne du tableau (« cadre → un marco ») cherche à prévenir.
- **Correction proposée** : « un cuadro, la toile — le mot dit d'abord un rectangle, d'où aussi le tableau et le schéma (cuadro sinóptico). Le cadre matériel, lui, est un marco. »

### [MOYEN] « Asistir : le a change tout »
- **Où** : `vocabulaire-oficios.ts` — `es-voc-trabajo-oficios`, section « Candidater, et les faux amis du bureau »
- **Texte** : « Asistir a veut dire assister à, mais asistir a alguien veut dire l'assister au sens d'aider : le a change tout. »
- **Problème** : les deux constructions ont un *a*. Ce n'est pas la préposition qui distingue mais la nature du complément (événement contre personne). L'explication donnée est fausse telle qu'elle est formulée.
- **Correction proposée** : « Asistir a un acto, c'est y assister ; asistir a alguien, c'est l'aider. C'est le complément qui tranche, pas la préposition. »

### [MOYEN] « Muy señores míos » traduit « Madame, Monsieur »
- **Où** : `cours-usage.ts` — `es-cours-ecrire`
- **Texte** : « Muy señores míos: » / « Madame, Monsieur, » / note « Formule d'appel quand on ignore à qui l'on écrit. »
- **Problème** : la formule est au masculin pluriel et s'adresse à plusieurs hommes (ou, par convention ancienne, à une entreprise) — elle exclut le « Madame ». Elle est en outre nettement datée ; l'usage courant est *Estimados señores*, ou *Estimado/a Sr./Sra.* quand on ignore le destinataire.
- **Correction proposée** : etranger « Estimados señores: » / francais « Madame, Monsieur, » / note « Formule d'appel quand on ignore à qui l'on écrit. Muy señores míos est plus ancien et strictement masculin. »

### [MOYEN] « Desempeñar » donné comme le registre soutenu de « trabajar »
- **Où** : `vocabulaire-c1.ts` — `es-c1-registro`, tableau, ligne `["currar", "trabajar", "desempeñar"]`
- **Problème** : *desempeñar* n'est pas un synonyme de *trabajar* : il est transitif et prend un objet (*desempeñar un cargo, una función*). « Desempeño en una empresa » ne se dit pas. Le fichier `vocabulaire-oficios.ts` le confirme d'ailleurs : « el desempeño, l'exercice d'une fonction ».
- **Correction proposée** : `["currar", "trabajar", "ejercer / desempeñar un cargo"]`.

### [MOYEN] « La LOPD » donnée comme la loi espagnole en vigueur
- **Où** : `vocabulaire-ideas.ts` — `es-voc-tecnologia`, section « Sécurité et vie privée »
- **Texte** : « Le RGPD s'y appelle el RGPD, et la loi espagnole la LOPD. »
- **Problème** : la LOPD (1999) a été remplacée en 2018 par la **LOPDGDD** (Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales). Le sigle enseigné n'est plus celui de la loi applicable.
- **Correction proposée** : « …et la loi espagnole la LOPDGDD, souvent abrégée LOPD dans l'usage courant. »

### [MOYEN] « En ese caso, no lo sé » donné comme exemple de reprise pronominale
- **Où** : `gramatica-c1.ts` — `es-cours-orden-palabras`, section « Le complément placé en tête »
- **Texte** : « L'effet produit est celui d'un cadre : on annonce de quoi on va parler, puis on en parle. A María no la he visto. En ese caso, no lo sé. »
- **Problème** : *en ese caso* est un circonstanciel, et le *lo* de *no lo sé* ne le reprend pas — il renvoie à autre chose. L'exemple n'illustre pas la règle de reprise obligatoire ; la section dit d'ailleurs elle-même, deux lignes plus bas, qu'un circonstanciel « ne demande aucune reprise ». La comparaison avec le français est également fautive : « Le livre que j'ai acheté hier » est une relative, pas une dislocation, et n'a rien à voir.
- **Correction proposée** : remplacer par « Eso no lo sabía. » (déjà carte de la série) et supprimer la phrase sur « Le livre que j'ai acheté hier ».

### [MINEUR] Un mot d'espagnol au milieu d'une phrase française
- **Où** : `cours-usage.ts` — `es-cours-accent`, section « La règle en deux lignes »
- **Texte** : « Café, **porque** le mot finit par une voyelle mais s'accentue à la fin »
- **Correction proposée** : « Café, parce que le mot finit par une voyelle mais s'accentue à la fin ».

### [MINEUR] Une note bilingue incompréhensible
- **Où** : `gramatica-c1.ts` — `es-c2-ambiguedad`, carte « Le dijo a su hermano que su coche estaba roto. »
- **Texte** : note « Su renvoie à l'un ou à l'autre. Pour lever le doute : el coche de este dernier. »
- **Correction proposée** : « Su renvoie à l'un ou à l'autre. Pour lever le doute : el coche de este, la voiture de ce dernier. »

### [MINEUR] Phrase française amputée
- **Où** : `vocabulaire-oficios.ts` — `es-c1-derecho`, section « Lire une clause sans se tromper »
- **Texte** : « Trois habitudes suffisent à ne pas contresens un contrat espagnol. »
- **Correction proposée** : « Trois habitudes suffisent à ne pas faire de contresens sur un contrat espagnol. »

### [MINEUR] Phrase française bancale dans un statement
- **Où** : `avance-b2.ts` — `es-trabajo-latam`
- **Texte** : « Un devis se dit cotización, un fichier archivo, et l'on ne quedo a la espera mais quedo atento. »
- **Correction proposée** : « …et l'on n'écrit pas quedo a la espera mais quedo atento. »

### [MINEUR] Typographie française appliquée à l'espagnol
- **Où** : `vocabulaire-ideas.ts` — `es-voc-dinero`, section « Dire un prix, et négocier » ; `vocabulaire-oficios.ts` — `es-voc-arreglos`, section « Faire faire »
- **Texte** : « ¿Me hace un descuento ? », « ¿cuál es su último precio ? », « ¿me puede pasar un presupuesto ? », « ¿cuándo puede venir ? »
- **Problème** : l'espagnol ne met pas d'espace avant le point d'interrogation fermant. La règle typographique française a été appliquée à des phrases espagnoles — dans un module qui enseigne par ailleurs (`es-cours-ecrire`) « pas d'espace avant le signe final ».
- **Correction proposée** : supprimer les espaces : « ¿Me hace un descuento? », etc.

### [MINEUR] « Bicho change de sens selon les Caraïbes »
- **Où** : `registres.ts` — `es-regionalismos`, section « Le cas coger »
- **Problème** : phrase mal construite, et l'information manque (à Porto Rico, *bicho* est vulgaire).
- **Correction proposée** : « Bicho, banal ailleurs, est vulgaire à Porto Rico. »

### [MINEUR] « Saco » glosé « la veste »
- **Où** : `registres.ts` — carte « Ponte el saco, hace frío. »
- **Problème** : *saco* désigne en Amérique la veste de costume, pas un vêtement chaud ; « Ponte el saco, hace frío » sonne étrange (on dirait *la campera*, *la chamarra*). Le tableau de la même série donne d'ailleurs « campera / saco » pour le Cône Sud.
- **Correction proposée** : etranger « Ponte la campera, hace frío. » (note : « Campera en Argentine, chamarra au Mexique, chaqueta ou cazadora en Espagne. Saco est la veste de costume. »)

### [MINEUR] « Alicates et tijeras sont toujours au pluriel »
- **Où** : `vocabulaire-oficios.ts` — `es-voc-arreglos`
- **Problème** : le DLE admet *un alicate* et *una tijera*. « Toujours » est trop fort, même si le pluriel domine.
- **Correction proposée** : « Alicates et tijeras s'emploient presque toujours au pluriel, comme les ciseaux en français. »

### [MINEUR] Le conditionnel de conjecture : le cours et la carte ne traduisent pas pareil
- **Où** : `avance-b2.ts` — `es-subjuntivo-imperfecto`
- **Texte** : cours « ya lo habrían terminado ayer — ils avaient sans doute fini hier. Le français emploie exactement la même tournure » ; carte « Ils l'avaient sans doute déjà fini hier. »
- **Problème** : le français employé n'est justement pas « la même tournure » (plus-que-parfait + adverbe, au lieu du conditionnel passé). Le cours affirme une équivalence que sa propre traduction ne montre pas.
- **Correction proposée** : carte → « Ils l'auraient déjà fini hier. » avec `aussi: ["Ils l'avaient sans doute déjà fini hier."]`.

### [MINEUR] Faux amis fabriqués
- **Où** : `vocabulaire-ideas.ts` — `es-voc-dinero`, visuel « Faux amis de la caisse » ; `vocabulaire-oficios.ts` — `es-c1-abstracto`, fin de la troisième section ; `es-c1-derecho`, tableau
- **Texte** : « el sueldo → le sou », « la nómina → le nom », « “desempeño” n'est pas “dépannage” », « “vigencia” n'a rien à voir avec la vigie », « el plazo | le délai | place → el sitio »
- **Problème** : aucun francophone ne fait ces rapprochements. Les colonnes « ce qu'un francophone croit » sont remplies avec des confusions inventées, ce qui affaiblit les vrais faux amis qui les entourent.
- **Correction proposée** : remplacer par des pièges réels — *la renta* (revenu, pas rente), *el salario* (registre), *la factura* / *la facture* ; pour le droit, *la fianza* / *la confiance*, déjà présent.

### [MINEUR] « Estar por las nubes » glosé « être dans les nuages »
- **Où** : `vocabulaire-ideas.ts` — `es-voc-dinero`, carte « Los pisos están por las nubes. »
- **Problème** : la glose littérale entre en collision avec *estar en las nubes* (« être dans la lune »), enseignée dans `vocabulaire-c1.ts:es-c1-modismos`. Deux expressions voisines, deux sens opposés, et aucune des deux notes ne prévient de l'autre.
- **Correction proposée** : « Estar por las nubes se dit des prix. À ne pas confondre avec estar en las nubes, être distrait. »

### [MINEUR] « Le dieron el alta » traduit par « son bulletin de sortie »
- **Où** : `vocabulaire-ideas.ts` — `es-voc-medicina`
- **Problème** : « bulletin de sortie » n'est pas la formule française usuelle.
- **Correction proposée** : « Il a eu son bon de sortie ce matin. » avec `aussi: ["Il est sorti de l'hôpital ce matin."]`.

### [MINEUR] « Estar tirado » glosé « ne rien coûter »
- **Où** : `vocabulaire-ideas.ts` — `es-voc-dinero`
- **Problème** : *estar tirado (de precio)* veut dire « être donné, très bon marché », pas gratuit.
- **Correction proposée** : « estar tirado, être donné, coûter trois fois rien ».

### [MINEUR] « Ecopostureo » présenté comme la traduction espagnole de greenwashing
- **Où** : `vocabulaire-oficios.ts` — `es-voc-medioambiente`
- **Problème** : le mot existe mais la forme recommandée par Fundéu est *ecoblanqueo* (ou *lavado de imagen verde*) ; *ecopostureo* est plus familier et surtout péninsulaire.
- **Correction proposée** : « El ecoblanqueo est la forme recommandée pour greenwashing ; ecopostureo, plus familier, s'entend surtout en Espagne. »

### [MINEUR] Une lettre formelle à l'appel et à la clôture désaccordés
- **Où** : `dictees.ts` — dictée « Écrire un courriel »
- **Texte** : « Estimada señora Ruiz: … Un saludo, Clara Dupont. »
- **Problème** : *Estimada señora* ouvre une lettre formelle, *Un saludo* la referme sur un registre nettement plus léger. La clôture attendue est *Atentamente* ou *Un cordial saludo*.
- **Correction proposée** : « … Quedo a su disposición. Atentamente, Clara Dupont. »

### [MINEUR] « Imputar » présenté comme le terme courant de la presse judiciaire
- **Où** : `vocabulaire-c1.ts` — `es-c1-prensa`, section « Le lexique de la une »
- **Problème** : la réforme espagnole de 2015 a remplacé *imputado* par *investigado* dans la procédure ; la presse suit largement. Le mot reste compris mais n'est plus le terme actuel.
- **Correction proposée** : « imputar (aujourd'hui investigar dans la procédure espagnole) et procesar, mettre en examen ».

### [MINEUR] « Trabajar ne s'emploie que pour les personnes »
- **Où** : `avance.ts` — `es-maison-ville`, carte « No funciona la calefacción. »
- **Problème** : *el motor trabaja*, *la máquina trabaja a pleno rendimiento* existent. Le « ne… que » est trop absolu, même si le conseil pratique est bon.
- **Correction proposée** : « Funcionar pour un appareil qui marche ou non ; trabajar, calqué du français “travailler”, ne convient pas ici. »

### [MINEUR] « Manifestación, sans e à la fin »
- **Où** : `avance.ts` — `es-presse`
- **Problème** : la note est obscure — l'espagnol écrit *-ción*, la remarque sur le « e » ne correspond à aucune erreur prévisible.
- **Correction proposée** : « Convocar una manifestación, appeler à manifester. Le mot ne se termine pas en -tion comme en français. »

### [MINEUR] Le gérondif : « on ne dit pas estar siendo »
- **Où** : `avance.ts` — `es-nuances-temps`, section « Le gérondif, et ce qu'il ne fait pas »
- **Problème** : *estás siendo injusto*, *está siendo investigado* sont corrects et courants. La formulation « On ne dit pas “estoy siendo” » est trop absolue, même si l'intention (ne pas calquer « je suis » par *estoy siendo*) est juste.
- **Correction proposée** : « On ne dit pas “estoy siendo cansado” pour “je suis fatigué” — mais estar siendo existe avec un attribut d'attitude : estás siendo injusto. »

### [MINEUR] « Le a ne se met jamais après tener »
- **Où** : `cours-usage.ts` — `es-cours-prepositions`
- **Problème** : *tengo a mi madre enferma*, *tengo a un amigo trabajando allí* prennent le a. La règle vaut pour la possession simple (*tengo dos hermanos*), pas absolument.
- **Correction proposée** : « Et elle ne s'applique pas après tener au sens de posséder : tengo dos hermanos, sans a. »

---

## Constats (suite — `vocabulario-sociedad.ts`, `avanzado-c2.ts`)

### [GRAVE] « La oferta y la demanda, dans l'ordre inverse de l'anglais »
- **Où** : `avanzado-c2.ts` — `es-c1-economia`, carte « La demanda superó a la oferta. »
- **Texte** : note « L'espagnol dit la oferta y la demanda, dans l'ordre inverse de l'anglais. »
- **Problème** : faux. L'anglais dit *supply and demand* — *supply* = **oferta**, *demand* = **demanda**. L'ordre est donc exactement le même, en anglais, en espagnol et en français (« l'offre et la demande »). La note invente une différence là où il n'y en a aucune, et l'apprenant qui la croit inversera l'ordre.
- **Correction proposée** : supprimer la remarque, ou la remplacer par « La oferta y la demanda, dans le même ordre qu'en français. *Superar a* prend le a personnel devant un nom personnifié. »

### [GRAVE] Doublon franc : « sensato / sensible » enseigné deux fois, même carte, même note
- **Où** : `vocabulaire-ideas.ts:es-voc-emociones` — « Es una persona muy sensata. » / « C'est quelqu'un de très raisonnable. » (note : « Sensato veut dire raisonnable ; sensible veut dire sensible. L'inverse de l'anglais. ») et `avanzado-c2.ts:es-c1-psicologia` — « Es una decisión muy sensata. » / « C'est une décision très raisonnable. » (note : « Sensato, raisonnable ; sensible, sensible. Le couple reproduit le faux ami anglais. »)
- **Problème** : la même carte, à un nom près, avec la même note, dans deux séries de niveaux différents (B1 et C1). Le point est en outre repris une troisième fois dans le cours de `vocabulaire-oficios.ts:es-voc-medioambiente` (« Sensible veut dire sensible au sens émotionnel »).
- **Correction proposée** : garder la carte B1 (`es-voc-emociones`, où le champ des adjectifs de caractère est le sujet) et remplacer la carte C1 par un vrai item de psychologie (*llevarlo bien*, *pasarlo mal*, *hacerse a la idea*).

### [GRAVE] Doublon franc : « una filtración de datos », deux fois, mot pour mot
- **Où** : `vocabulaire-ideas.ts:es-voc-tecnologia` — « Fue una filtración de datos grave. » (note : « Una filtración, la fuite ; una brecha de seguridad, la faille. ») et `vocabulario-sociedad.ts:es-voc-seguridad` — « Hubo una filtración grave de datos. » (note : « Una filtración, une fuite d'information. Una fuga se dit plutôt d'un liquide ou d'un gaz. »)
- **Problème** : la même phrase avec deux mots permutés, la même glose, dans deux fichiers. La seconde ajoute seulement l'opposition *filtración / fuga*, qui pourrait tenir dans une note.
- **Correction proposée** : fusionner en une carte unique dans `es-voc-tecnologia`, avec la note complète : « Una filtración pour une fuite d'information, una fuga pour un liquide ou un gaz ; una brecha de seguridad, la faille. »

### [MOYEN] Doublon : « Dicho esto », carte deux fois, à deux niveaux
- **Où** : `avance.ts:es-nuances-b2` — « Dicho esto, hay que reconocerlo. » (note : « Dicho esto : la charnière entre concession et objection. ») et `avanzado-c2.ts:es-c2-retorica` — « Dicho esto, los resultados se sostienen. » (note : « Dicho esto articule la concession et la reprise. »)
- **Correction proposée** : retirer la carte C2, ou la remplacer par une articulation propre à ce niveau (*con todo*, *si bien es cierto que*, *no por ello*).

### [MOYEN] Doublons de glose entre séries C1 et C2
- **Où** : plusieurs paires, toutes avec la même définition recopiée :
  - *zanjar* : `vocabulaire-c1.ts:es-c1-prensa` « El tribunal zanjó el asunto ayer. » (« Zanjar, trancher définitivement ») contre `avanzado-c2.ts:es-c2-retorica` « Lejos de zanjar el asunto, lo reabre. » (« Zanjar, trancher définitivement »).
  - *plantear* : `vocabulaire-c1.ts:es-c1-academico` « Este artículo plantea tres preguntas. » contre `avanzado-c2.ts:es-c2-retorica` « Esto plantea una nueva pregunta. »
  - *quisiera* de politesse : `avance-b2.ts:es-subjuntivo-imperfecto` « Quisiera hacerle una pregunta. » contre `avanzado-c2.ts:es-c1-negociacion` « Quisiera objetar en ese punto. »
  - *como si* + subjonctif : `avance-b2.ts` « Como si nada hubiera pasado. » contre `avanzado-c2.ts:es-c2-ironia` « Como si eso lo hubiera parado alguna vez. »
  - *la muestra* : glosée trois fois — `vocabulario-sociedad.ts:es-voc-demografia`, `avanzado-c2.ts:es-c2-retorica`, `avanzado-c2.ts:es-c2-cientifico`.
  - *ahorita* : `vocabulario-sociedad.ts:es-voc-seguridad` (« ahorita, qui peut dire bien plus tard ») contre le cours de `avanzado-c2.ts:es-c2-ironia` (« Ahorita … au Mexique, il peut vouloir dire dans deux heures »).
  - la baisse en pourcentage : `vocabulaire-oficios.ts:es-voc-medioambiente` « Las emisiones bajaron un diez por ciento » (« l'espagnol met l'article là où le français met “de” ») contre `vocabulario-sociedad.ts:es-voc-industria` « La producción cayó un doce por ciento » (« Caer un + pourcentage, sans préposition de »).
  - *la brecha* : `vocabulaire-ideas.ts:es-voc-politica` « Se debatió la brecha salarial. » contre `vocabulario-sociedad.ts:es-voc-demografia` « La brecha se ha reducido desde 2010. » — même glose *brecha salarial / brecha digital*.
- **Correction proposée** : une passe de déduplication par glose : quand deux notes définissent le même mot, garder la carte du niveau le plus bas et réécrire l'autre pour qu'elle apporte une collocation neuve.

### [MOYEN] « Escalarlo » traduit par la montée en charge dans une série sur la panne
- **Où** : `avanzado-c2.ts` — `es-c1-tecnologia`, carte « Hay que escalarlo. »
- **Texte** : francais « Il faut passer à l'échelle supérieure. » ; `aussi` « Il faut monter en charge. » ; note « Escalar dit aussi bien la montée en charge que l'escalade d'un incident : le contexte tranche. »
- **Problème** : la série s'intitule « Technique et défaillance », son `tip` porte sur *fallo* / *incidencia*, et la carte voisine parle du serveur tombé. Dans ce contexte, *escalarlo* signifie escalader l'incident vers le niveau supérieur — sens que la note reconnaît mais que ni la traduction principale ni la variante ne donnent. L'apprenant retient la mauvaise moitié.
- **Correction proposée** : francais « Il faut le faire remonter au niveau supérieur. » avec `aussi: ["Il faut escalader l'incident."]`, et garder la note telle quelle.

### [MOYEN] « Un interruptor de función » pour feature flag
- **Où** : `avanzado-c2.ts` — `es-c1-tecnologia`, carte « La función está detrás de un interruptor. »
- **Problème** : la tournure est un calque mot à mot qui ne s'emploie pas ; les équipes hispanophones disent *feature flag*, *bandera de característica* ou *un flag*. La note le concède à demi (« l'anglais reste plus courant à l'oral ») mais la carte à apprendre est la forme inventée.
- **Correction proposée** : etranger « La función está detrás de un feature flag. » / note « L'emprunt domine ; bandera de característica est la forme hispanisée, rare. »

### [MOYEN] « Ojeó el reloj de reojo »
- **Où** : `avanzado-c2.ts` — `es-c2-literario`
- **Problème** : *ojear* s'emploie pour parcourir des yeux un texte ou un lieu, pas pour consulter une montre ; et *ojear de reojo* accumule deux dérivés d'*ojo*, ce qui sonne redondant. La phrase attendue est *miró el reloj de reojo*. La carte est censée illustrer le contraste *ojear / hojear* annoncé par le `tip` — elle l'illustre par un emploi douteux.
- **Correction proposée** : etranger « Ojeó el periódico mientras miraba el reloj de reojo. » / francais « Elle parcourut le journal en jetant un coup d'œil furtif à sa montre. »

### [MOYEN] « La deuda — le d se prononce, contrairement à l'anglais »
- **Où** : `avanzado-c2.ts` — `es-c1-economia`, carte « Están fuertemente endeudados. »
- **Problème** : la lettre muette de l'anglais *debt* est le **b**, pas le d ; il n'existe aucun d muet dans ce mot. La remarque ne correspond à rien, et elle s'adresse de toute façon à l'anglais dans un module français.
- **Correction proposée** : « Endeudarse, s'endetter. La deuda, la dette ; el endeudamiento, l'endettement. »

### [MINEUR] Deuxième mot espagnol au milieu d'une phrase française
- **Où** : `avanzado-c2.ts` — `es-c2-cientifico`, note de « El modelo da cuenta de la mayor parte de la varianza. »
- **Texte** : « Dar cuenta de, expliquer une part. **La expresión** est figée dans l'écrit savant. »
- **Correction proposée** : « L'expression est figée dans l'écrit savant. » (même défaut que « Café, **porque** le mot finit… » dans `cours-usage.ts`)

### [MINEUR] Négation française incomplète
- **Où** : `avanzado-c2.ts` — `es-c2-ironia`, carte « Como si eso lo hubiera parado alguna vez. »
- **Texte** : francais « Comme si ça l'avait jamais arrêté. »
- **Correction proposée** : « Comme si ça l'avait jamais arrêté » → « Comme si ça l'avait un jour arrêté. » ou « Comme si ça l'avait jamais arrêté » avec le ne : « Comme si ça ne l'avait jamais arrêté. »

### [MINEUR] « To table a le sens inverse » — sans dire dans quel anglais
- **Où** : `avanzado-c2.ts` — `es-c1-negociacion`, carte « ¿Podemos dejarlo encima de la mesa? »
- **Problème** : *to table* signifie « soumettre à la discussion » en anglais britannique et « ajourner » en anglais américain. Dire « le sens inverse » sans préciser laisse l'apprenant avec une information à moitié fausse — et le rapprochement avec l'anglais n'a pas grand-chose à faire dans un module français.
- **Correction proposée** : « Dejar algo encima de la mesa, le laisser ouvert — l'inverse de dejarlo zanjado. »

### [MINEUR] « Un ingreso n'est pas un ingrédient »
- **Où** : `avanzado-c2.ts` — `es-c1-economia`, `tip`
- **Problème** : personne ne confond *ingreso* et « ingrédient ». Le vrai piège de ce mot est qu'il signifie à la fois la recette, le versement bancaire et l'admission à l'hôpital — trois sens que le module enseigne ailleurs séparément (`vocabulaire-ideas.ts:es-voc-dinero` et `es-voc-medicina`) sans jamais les relier.
- **Correction proposée** : « Un ingreso est une recette, un versement bancaire ou une admission à l'hôpital selon le contexte ; una renta est un revenu. »

### [MINEUR] « Una década, jamais une décennie au sens vague »
- **Où** : `vocabulario-sociedad.ts` — `es-voc-historia`, carte « El imperio se derrumbó en una década. »
- **Problème** : le français « décennie » désigne lui aussi dix ans exactement. La mise en garde ne correspond à aucun écart réel entre les deux langues.
- **Correction proposée** : « Derrumbarse, s'effondrer. Una década, une décennie ; los años veinte, les années vingt. »

### [MINEUR] « La renta — jamais la rente au sens français »
- **Où** : `vocabulario-sociedad.ts` — `es-voc-demografia`, carte « La renta per cápita lleva años estancada. »
- **Problème** : *una renta vitalicia* est précisément une rente viagère ; le sens existe. Et le module donne ailleurs à *renta* un troisième sens : « Alquiler en Espagne, **renta** au Mexique » (`avance.ts:es-maison-ville`), « la renta → le revenu, ou le loyer en Amérique » (`vocabulaire-ideas.ts`). Le « jamais » est donc doublement contredit à l'intérieur du module.
- **Correction proposée** : « La renta, le revenu — et le loyer en Amérique latine. Une rente viagère est una renta vitalicia. »

---

## Constats (suite — `modismos-caracter.ts`, `perifrasis-colocaciones.ts`)

### [GRAVE] Doublon franc : les périphrases verbales sont enseignées trois fois
- **Où** : `avance.ts:es-nuances-temps` (B2, avec un cours complet), `cours-usage.ts:es-cours-prepositions` (A2, section « Les verbes qui imposent leur préposition »), `perifrasis-colocaciones.ts:es-perifrasis-gerundio` (B2) et `es-perifrasis-infinitivo` (C1).
- **Texte** : le même exemple sert de `tip` à deux séries — `avance.ts` : « Llevo tres años aquí vaut mieux que… » et carte « Llevo dos horas esperando » ; `es-perifrasis-gerundio` : « llevo dos horas esperando, j'attends depuis deux heures ». Et les six périphrases reviennent partout : *acabar de* (`avance.ts` « Acabo de hablar con ella », `cours-usage.ts` « Acabo de llegar », `es-perifrasis-infinitivo` « Acaban de anunciarlo »), *volver a* (`avance.ts` tableau « volvió a llamar », `cours-usage.ts` carte « Volvió a llamar », `es-perifrasis-infinitivo` « Volvió a insistir »), *dejar de* (« Dejé de fumar hace un año » / « Dejaron de responder al teléfono »), *ponerse a* (« Se puso a llover de repente » / « Nos pusimos a trabajar »), *seguir* + gérondif (« Sigue lloviendo » / « Sigue trabajando en el mismo sitio »), *estar a punto de / estar por*.
- **Problème** : c'est le doublon le plus large du module — quatre séries, trois fichiers, un cours entier redondant. L'apprenant refait trois fois le même chemin en croyant progresser.
- **Correction proposée** : garder `es-perifrasis-gerundio` + `es-perifrasis-infinitivo` (les plus complètes et les mieux découpées), transformer `avance.ts:es-nuances-temps` en série sur *llevar* seul ou la supprimer, et retirer de `cours-usage.ts:es-cours-prepositions` tout ce qui n'est pas strictement prépositionnel.

### [GRAVE] Doublon franc : `tomar el pelo` et `meter la pata`, deux fois chacun — et les deux notes se contredisent
- **Où** : `vocabulaire-c1.ts:es-c1-modismos` (C1) et `modismos-caracter.ts:es-modismos-cuerpo` (B2)
- **Texte** : « Me estás tomando el pelo. » / « Tu te moques de moi. » — note : « Tomar el pelo, faire marcher quelqu'un. **L'image du cheveu n'a aucun rapport.** » contre « Me está tomando el pelo. » / « Il me fait marcher. » — note : « Tomar el pelo a alguien, se moquer. **L'image est celle du cheveu qu'on tire.** » Et « Metí la pata delante de todos. » / « J'ai fait une gaffe devant tout le monde. » contre « Metí la pata hasta el fondo. » / « J'ai mis les pieds dans le plat. »
- **Problème** : deux cartes identiques à un pronom près, et deux notes qui s'annulent — l'image du cheveu « n'a aucun rapport » d'un côté, « est celle du cheveu qu'on tire » de l'autre. Sur *meter la pata*, les deux traductions françaises ne disent pas la même chose : « faire une gaffe » (une bourde involontaire, le sens juste) contre « mettre les pieds dans le plat » (aborder brutalement un sujet gênant, autre chose). La série C1 et la série B2 ont en outre trois autres cartes communes (*dar en el clavo*, *costar un riñón*, *echar una mano*).
- **Correction proposée** : garder `es-modismos-cuerpo` (B2), supprimer de `es-c1-modismos` les cartes redoublées, et harmoniser : *meter la pata* = « faire une gaffe » partout ; sur *tomar el pelo*, garder l'explication étymologique (le cheveu qu'on tire) et supprimer l'affirmation contraire.

### [GRAVE] Doublon franc : deux séries C1 sur les mêmes noms abstraits
- **Où** : `vocabulaire-oficios.ts:es-c1-abstracto` « Les mots de la pensée abstraite » et `modismos-caracter.ts:es-nombres-abstractos-2` « Nommer une notion » — le nom de la seconde dit lui-même qu'elle refait la première.
- **Texte** : *el planteamiento* — « El planteamiento del artículo es discutible. » (« ni “position” ni “approche” n'en rendent la précision ») contre « El planteamiento no se explica. » (« la manière dont on pose une question. Sans équivalent français simple ») ; *el alcance* — « Hay que ampliar el alcance del estudio. » contre « Eso excede el alcance de este estudio. ». Les deux `statement` s'ouvrent d'ailleurs sur les mêmes mots (« Planteamiento, alcance, matiz, sesgo » / « Alcance, medida, postura, planteamiento »).
- **Correction proposée** : fusionner les deux séries en une seule, en gardant de la seconde les apports réels (*postura*, *meollo*, *contrapartida*, *énfasis*) et en supprimant *planteamiento* et *alcance*, déjà traités.

### [MOYEN] Une série « Idiotismes animaliers » dont quatre cartes sur dix n'ont pas d'animal — et dont les notes le disent
- **Où** : `modismos-caracter.ts` — `es-modismos-animales`
- **Texte** : « Lo sé de buena tinta. » — note : « **L'espagnol quitte l'animal** pour l'écriture. » ; « Eso es una cortina de humo. » — note : « **L'espagnol quitte l'animal.** » ; « Para el carro. » ; « Están lloviendo chuzos de punta. »
- **Problème** : la série est définie par sa famille d'images (« Les animaux fournissent la deuxième famille d'images de l'espagnol ») et son `tip` insiste (« Traduire l'animal donne presque toujours faux »). Quatre cartes n'ont aucun animal, et deux notes l'admettent explicitement au lieu de corriger le tir. C'est du remplissage pour atteindre dix cartes. Le même défaut, plus léger, touche `es-modismos-cuerpo` : « Lo digo de memoria » et « Es goloso desde pequeño » n'ont pas de partie du corps.
- **Correction proposée** : remplacer les quatre par de vrais idiotismes animaliers — *estar como una cabra*, *tener vista de lince*, *buscarle tres pies al gato*, *aquí hay gato encerrado*, *ser un rata*, *matar dos pájaros de un tiro*.

### [MOYEN] Une note qui parle d'un mot absent de sa carte
- **Où** : `modismos-caracter.ts` — `es-nombres-abstractos-2`, carte « La premisa es cuestionable. »
- **Texte** : note « Una premisa, une prémisse. **Un local se dit un local : pas de faux ami ici.** »
- **Problème** : rien dans la carte ne mentionne *local*. La seconde phrase est un résidu d'une autre fiche, et elle n'apprend rien (« un local se dit un local »). La glose de *premisa* est par ailleurs déjà donnée dans `gramatica-c1.ts:es-c1-filosofia` (« El argumento parte de una premisa falsa. » — « Una premisa, une prémisse »).
- **Correction proposée** : « Una premisa, une prémisse. Partir de una premisa falsa est la collocation usuelle. »

### [MOYEN] Une traduction française agrammaticale
- **Où** : `perifrasis-colocaciones.ts` — `es-verbos-soporte`, carte « Le dio un empujón a la puerta. »
- **Texte** : francais « **Il a poussé un coup la porte.** » ; `aussi` « Il a donné une poussée à la porte. »
- **Problème** : la phrase principale n'est pas du français. C'est elle que l'apprenant lit en exercice de production.
- **Correction proposée** : francais « Il a poussé la porte d'un coup. » avec `aussi: ["Il a donné un coup dans la porte."]`.

### [MOYEN] « Ir + gérondif » étiqueté deux fois pour deux constructions différentes
- **Où** : `perifrasis-colocaciones.ts` — `es-perifrasis-gerundio`, cartes « Se fue corriendo. » et « Va mejorando poco a poco. »
- **Texte** : « Ir + gérondif au passé décrit la manière du départ. » et « Ir + gérondif dit le progrès graduel. »
- **Problème** : *se fue corriendo* est **irse** + gérondif de manière — un tout autre mécanisme que *ir* + gérondif d'aspect progressif. Deux cartes voisines portent la même étiquette pour deux valeurs incompatibles, et l'apprenant qui applique la seconde à la première comprend « il partait peu à peu en courant ».
- **Correction proposée** : note de la première → « Irse + gérondif : le gérondif dit la manière du départ, pas une progression. À ne pas confondre avec ir + gérondif de la carte suivante. »

### [MOYEN] « Estar por + infinitif » : la valeur d'Espagne donnée sans dire que l'Amérique en a une autre
- **Où** : `perifrasis-colocaciones.ts` — `es-perifrasis-infinitivo`, carte « Está por decidir. »
- **Texte** : note « Estar por + infinitif, ce qui n'est pas encore fait. Estar para dirait l'imminence. »
- **Problème** : c'est la répartition péninsulaire. En Amérique latine, *estar por + infinitif* dit précisément l'imminence — *estoy por salir*, je suis sur le point de sortir — et *estar para* y est rare. Une forme régionale donnée sans le dire, dans un module qui consacre par ailleurs une série entière (`registres.ts`) à ce genre d'écart.
- **Correction proposée** : « Estar por + infinitif, ce qui reste à faire — en Espagne. En Amérique latine, la même tournure dit l'imminence : estoy por salir. Estar para marque l'imminence en Espagne. »

### [MOYEN] « Salir a mano » donné comme neutre dans une série par ailleurs très péninsulaire
- **Où** : `modismos-caracter.ts` — `es-modismos-dinero-tiempo`, carte « Salimos justo a mano. »
- **Problème** : *salir a mano* au sens de rentrer dans ses frais est du Río de la Plata ; en Espagne on dit *salir en tablas*, *quedar en paz* ou *cubrir gastos*. La série mélange donc deux normes sans le signaler, alors que ses voisines (`es-voc-humor` : *guasa*, *coña*, *cachondeo*, *vacilar*) sont ouvertement d'Espagne.
- **Correction proposée** : ajouter la marque régionale à la note — « Salir a mano, être à l'équilibre — Argentine et Uruguay. En Espagne : salir en tablas, cubrir gastos. » — et renseigner `aussiEtranger`.

### [MOYEN] Un module français dont les notes comparent l'espagnol à l'anglais
- **Où** : partout. **72 mentions de l'anglais** dans le périmètre, dont **32 dans des notes de cartes**. Concentration maximale dans `vocabulaire-oficios.ts` (19), `vocabulaire-ideas.ts` (13), `vocabulaire-c1.ts` (7), `avanzado-c2.ts` (7), `modismos-caracter.ts` (6), `precision.ts` (5).
- **Texte** : « Encogerse de hombros : l'espagnol nomme les épaules là où l'anglais les sous-entend. » ; « Unido, uni. L'espagnol n'a pas d'image de tricot comme l'anglais. » ; « Parar el carro… l'espagnol emploie le véhicule, l'anglais les chevaux. » ; « Ganar tiempo, comme en français. L'anglais achète là où les deux gagnent. » ; « A medio cocer… L'image culinaire est la même qu'en anglais. » ; « La deuda — le d se prononce, contrairement à l'anglais. » ; « Echarse atrás… l'espagnol emploie le corps entier là où l'anglais met les pieds. »
- **Problème** : l'apprenant est francophone. Une remarque comme « l'espagnol nomme les épaules là où l'anglais les sous-entend » ne lui apprend rien (le français les nomme aussi), et plusieurs de ces comparaisons masquent le vrai contraste — c'est le mécanisme exact de la note fausse sur *escuchar* signalée plus haut, où un piège anglais est présenté à un francophone comme un piège pour lui. Quelques-unes sont légitimes (les calques *evidencia*, *dar seguimiento*, *aplicar para*, qui sont bien des anglicismes de l'espagnol) ; la majorité ne l'est pas.
- **Correction proposée** : passer les 32 notes en revue et ne garder la comparaison anglaise que dans deux cas — quand l'espagnol a emprunté ou calqué l'anglais, et quand le mot est un faux ami à trois voies (*sensible*, *actualmente*, *evidencia*). Partout ailleurs, remplacer par le contraste avec le français, ou supprimer la seconde phrase de la note.

### [MOYEN] « Costar un riñón : le français choisit les yeux, l'espagnol un organe interne »
- **Où** : `modismos-caracter.ts` — `es-modismos-cuerpo`, carte « Le costó un riñón. »
- **Problème** : l'espagnol dit aussi *costar un ojo de la cara*, et le module l'enseigne dans le cours de `vocabulaire-c1.ts:es-c1-modismos` (« costar un ojo de la cara », rangé dans la famille du corps). Le contraste affirmé n'existe donc pas : les deux langues ont l'œil, l'espagnol a en plus le rein.
- **Correction proposée** : « Costar un riñón, familier ; costar un ojo de la cara existe aussi et calque le français. »

### [MINEUR] « Espetar » annoncé, jamais enseigné
- **Où** : `modismos-caracter.ts` — `es-verbos-habla`
- **Texte** : statement « Mascullar, susurrar, **espetar**, balbucear. » ; le verbe n'apparaît dans aucune carte, seulement en fin de note d'une carte qui porte sur autre chose (« Espetar dit la réplique cinglante en un mot »).
- **Correction proposée** : ajouter une carte « Le espetó que se callara. » / « Il lui a lancé sèchement de se taire. », ou retirer le mot du statement. (Même défaut que `gramatica-c1.ts:es-c2-registro`, dont le statement annonce quatre verbes qu'aucune carte ne traite.)

### [MINEUR] « Están lloviendo chuzos de punta »
- **Où** : `modismos-caracter.ts` — `es-modismos-animales`
- **Problème** : la forme consacrée est *caen chuzos de punta* (Fundéu) ; *llover* est impersonnel et se construit mal avec *chuzos* pour sujet et un progressif. La carte est en outre dans la série animalière sans animal.
- **Correction proposée** : « Caen chuzos de punta. »

### [MINEUR] « Un gallina reste masculin »
- **Où** : `modismos-caracter.ts` — `es-modismos-animales`, carte « Es un gallina. »
- **Texte** : note « Un gallina, une poule au sens de lâche. **Le mot reste masculin pour un homme.** »
- **Problème** : *gallina* est un nom féminin ; ce qui devient masculin, c'est le déterminant, qui s'accorde avec la personne désignée. La formulation dit l'inverse.
- **Correction proposée** : « Un gallina : le nom reste féminin, seul l'article s'accorde à la personne. »

### [MINEUR] « Por los pelos : l'image diffère du français »
- **Où** : `perifrasis-colocaciones.ts` — `es-colocaciones-adjetivos`, carte « Se libró por los pelos. »
- **Problème** : le français dit « à un cheveu près », « il s'en est fallu d'un cheveu ». L'image est la même.
- **Correction proposée** : « Por los pelos, comme le “à un cheveu près” français. »

### [MINEUR] Une carte hors sujet dans `es-sinonimos-decir`
- **Où** : `perifrasis-colocaciones.ts` — `es-sinonimos-decir`, carte « Se nota la diferencia. »
- **Problème** : la série contraste *decir / contar / hablar / comentar* ; *notarse* n'appartient pas à cette famille et n'est pas un verbe de parole.
- **Correction proposée** : remplacer par « Me comentó que se iba. » ou « No dijo ni una palabra. »

### [MINEUR] « Es cuestión de énfasis »
- **Où** : `modismos-caracter.ts` — `es-nombres-abstractos-2`
- **Texte** : francais « C'est une question d'accent mis sur les choses. »
- **Problème** : le français est lourd et peu naturel ; la variante `aussi` (« C'est affaire de priorité ») est meilleure que la principale.
- **Correction proposée** : francais « C'est une question d'accent. » avec `aussi: ["C'est affaire de priorité.", "Tout est dans ce qu'on met en avant."]`.

### [MINEUR] « Hay un corpus creciente de trabajos »
- **Où** : `modismos-caracter.ts` — `es-nombres-abstractos-2`
- **Problème** : calque de l'anglais *a growing body of work* ; l'espagnol dirait *cada vez hay más trabajos sobre el tema* ou *la literatura sobre el tema no deja de crecer*. La traduction française donnée (« Les travaux se multiplient ») le montre : elle ne traduit pas la structure, elle la contourne.
- **Correction proposée** : etranger « La literatura sobre el tema no deja de crecer. » / francais « Les travaux sur le sujet se multiplient. »

---

## Constats (suite — `formacion-palabras.ts`)

### [GRAVE] Doublon franc à l'intérieur d'un même fichier : « acusación infundada », deux fois
- **Où** : `formacion-palabras.ts` — `es-prefijos` et `es-sufijos-verbos`
- **Texte** : « La acusación es infundada. » / « L'accusation est sans fondement. » (note : « In- devient im- devant p et b, i- devant l et r ») contre « Es una acusación infundada. » / « C'est une accusation sans fondement. » (note : « Le préfixe in- avec le participe fabrique l'adjectif privatif. »)
- **Problème** : la même phrase, le même mot, la même traduction, à quinze cartes d'écart dans le même fichier. Deux notes différentes sur le même préfixe, dont l'une (les allomorphes im-/i-) est en outre déjà répétée par une troisième carte de `es-prefijos` (« Las dos versiones son incoherentes », note : « In- devant une consonne autre que p, b, l, r reste inchangé »).
- **Correction proposée** : garder la carte de `es-prefijos` avec la note complète sur les allomorphes ; remplacer celle de `es-sufijos-verbos` par un vrai dérivé suffixal (« Es un argumento rebatible. », « Una medida revocable. »).

### [GRAVE] Doublon franc : `es-pasiva-avanzada` (C1) refait `es-se-impersonal` (B2)
- **Où** : `formacion-palabras.ts:es-pasiva-avanzada` et `avance-b2.ts:es-se-impersonal`
- **Texte** : « Se vendieron todas las entradas. » (« la pasiva refleja : le verbe s'accorde avec le sujet grammatical ») contre « Se venden pisos en esta calle. » (« Venden au pluriel : pisos est le sujet ») ; « Se dice que se marchó anoche. » contre « Se dice que va a llover. » (mêmes notes sur la tournure impersonnelle) ; « Le dieron una segunda oportunidad. » / « Le robaron el bolso. » contre la section « Les autres façons de dire “on” » du cours B2 (« La troisième personne du pluriel, sans sujet exprimé… me llamaron ayer »).
- **Problème** : la série C1 ne fait qu'appliquer, carte par carte, le cours B2 — sans rien ajouter que *se rumorea que* et *se está reconstruyendo*. Une série entière présente deux fois à deux niveaux.
- **Correction proposée** : réduire `es-pasiva-avanzada` à ce qui manque au B2 : *se + estar + gérondif*, *se rumorea*, le passif en *ser* et sa rareté, et le *hacer/mandar + infinitif* — et supprimer les quatre cartes qui redoublent le B2.

### [GRAVE] Doublon franc : `es-infinitivo-subjuntivo` refait la troisième section du cours de `es-concordancia`
- **Où** : `formacion-palabras.ts:es-infinitivo-subjuntivo` (B2) et `avance-b2.ts:es-concordancia` (B2), section « Là où le français lâche prise »
- **Texte** : le cours B2 pose déjà la règle entière — « L'espagnol garde la subordonnée là où le français passe à l'infinitif. “Je lui ai demandé de m'appeler” devient le pedí que me llamara… La tournure infinitive n'est possible que si les deux sujets sont les mêmes : quiero ir, je veux partir. » — et la série `es-infinitivo-subjuntivo` n'énonce rien d'autre sur dix cartes. Cartes jumelles : « Le pedí que viniera. » contre « Le pedí que me llamara. » ; « Espero que llegues a tiempo. » contre « Espero que hayas dormido bien. »
- **Problème** : et la carte « Me alegro de verte. » est en plus la copie exacte de `vocabulaire-ideas.ts:es-voc-emociones` — « Me alegro mucho de verte. » / « Je suis très content de te voir. » / note « Alegrarse DE. »
- **Correction proposée** : garder `es-infinitivo-subjuntivo` (le format en paires contrastées est bon) et retirer la section correspondante du cours de `es-concordancia`, qui doit se limiter à la concordance des temps.

### [MOYEN] « -ivo sur un verbe latin », suivi de deux noms
- **Où** : `formacion-palabras.ts` — `es-sufijos-verbos`, carte « La medida resultó efectiva. »
- **Texte** : note « -ivo sur un verbe latin : **efecto, efectivo ; selección, selectivo.** »
- **Problème** : *efecto* et *selección* sont des noms, pas des verbes. La note s'annule elle-même dans sa propre illustration.
- **Correction proposée** : « -ivo se greffe sur le radical du participe latin : *efecto → efectivo*, *selección → selectivo*, *comprender → comprensivo*. »

### [MOYEN] `plantear` : cinq cartes, cinq fois la même glose
- **Où** : `vocabulaire-c1.ts:es-c1-academico` « Este artículo plantea tres preguntas. » ; `vocabulaire-ideas.ts:es-voc-politica` (cours) ; `avanzado-c2.ts:es-c2-retorica` « Esto plantea una nueva pregunta. » ; `perifrasis-colocaciones.ts:es-colocaciones-academicas` « Esto plantea una cuestión más. » ; `formacion-palabras.ts:es-sufijos-nombres` « El planteamiento no convence. » — auxquelles s'ajoutent les deux cartes *planteamiento* de `vocabulaire-oficios.ts:es-c1-abstracto` et `modismos-caracter.ts:es-nombres-abstractos-2`.
- **Problème** : sept cartes pour un seul verbe et son dérivé, réparties sur cinq fichiers, avec à chaque fois la même explication (« poser, soulever, formuler », « sans équivalent français simple »). C'est le mot le plus redondant du module.
- **Correction proposée** : une carte pour *plantear* (verbe), une pour *planteamiento* (nom), et remplacer les cinq autres.

### [MOYEN] `negar que` : trois fois la même règle
- **Où** : `vocabulaire-ideas.ts:es-voc-politica` « Niego que eso sea cierto. » (« Negar que appelle le subjonctif : sea, jamais es ») ; `vocabulaire-c1.ts:es-c1-academico` (cours : « niego que exista tal relación ») ; `formacion-palabras.ts:es-verbos-informe` « Negó que hubiera participado. » (« Negar que + subjonctif, toujours. C'est la règle la plus oubliée du champ. »)
- **Problème** : outre la redite, le « toujours » est trop absolu : *no niego que es cierto*, avec l'indicatif, se dit quand le locuteur admet le fait — c'est précisément le cas où la négation du verbe négatif rétablit l'assertion.
- **Correction proposée** : garder la carte de `es-verbos-informe` (la mieux construite, avec le plus-que-parfait du subjonctif) et nuancer : « Negar que + subjonctif. Mais no negar que admet l'indicatif quand le fait est admis : no niego que es cierto. »

### [MOYEN] « Plantear una queja »
- **Où** : `formacion-palabras.ts` — `es-sufijos-nombres`, carte « El empleado planteó una queja. »
- **Problème** : la collocation usuelle est *presentar una queja* ou *poner una queja* ; *plantear* s'emploie pour une question, un problème, une hypothèse — pas pour une réclamation. La carte est censée illustrer le suffixe -ado (*empleado*), et introduit au passage une collocation douteuse que sa note ne signale pas.
- **Correction proposée** : « El empleado presentó una queja. » — note inchangée.

### [MINEUR] « El equipo está infradotado »
- **Où** : `formacion-palabras.ts` — `es-prefijos`
- **Problème** : *infradotado* employé seul se comprend d'abord au sens de la personne mal pourvue, sens familier et moqueur ; pour une équipe on dit *infradotada de medios*, *falta de recursos*, ou plus simplement *el equipo está infrafinanciado*. L'exemple choisi expose l'apprenant à un contresens gênant.
- **Correction proposée** : « El servicio está infrautilizado. » / « Le service est sous-utilisé. » — le préfixe est illustré aussi bien, sans le risque.

### [MINEUR] « Insistieron en ver el expediente » traduit « ils ont exigé »
- **Où** : `formacion-palabras.ts` — `es-verbos-informe`
- **Problème** : *insistir en* dit l'insistance, pas l'exigence — le module traduit ailleurs *exigir* par exiger. La série est précisément consacrée aux nuances des verbes de rapport ; celle-ci est effacée.
- **Correction proposée** : francais « Ils ont insisté pour voir le dossier. »

### [MINEUR] « Le français dit sensiblement, l'espagnol pratiquement »
- **Où** : `formacion-palabras.ts` — `es-comparativos-avanzados`, carte « Los resultados son prácticamente iguales. »
- **Problème** : « pratiquement identiques » est du français parfaitement courant. Le contraste affirmé n'existe pas.
- **Correction proposée** : « Prácticamente, casi, poco menos que : trois façons d'approcher l'égalité sans l'affirmer. »

### [MINEUR] « Trabaja como cuidador » → « aidant »
- **Où** : `formacion-palabras.ts` — `es-sufijos-nombres`
- **Problème** : « aidant » désigne en français l'aidant familial, non rémunéré — l'inverse de « travailler comme ». *Cuidador* rémunéré, c'est un auxiliaire de vie ou un aide-soignant.
- **Correction proposée** : francais « Il travaille comme auxiliaire de vie. » avec `aussi: ["Il est aide à domicile."]`.

### [MINEUR] « Ni de lejos » et « ni mucho menos », glosés tous deux « loin de là »
- **Où** : `avance.ts:es-nuances-b2` « Ni mucho menos. » et `formacion-palabras.ts:es-comparativos-avanzados` « Ni de lejos es suficiente. »
- **Problème** : deux cartes, la même traduction française, et aucune des deux notes ne dit ce qui les sépare — ce qui serait pourtant l'apport utile à ce niveau.
- **Correction proposée** : ajouter à l'une des deux : « Ni de lejos porte sur une quantité ou un degré ; ni mucho menos dément une affirmation entière. »

---

## Constats (suite — `precision.ts`)

### [GRAVE] Règle donnée puis démentie : « barato n'a pas de nuance péjorative » / « barato dit la piètre qualité »
- **Où** : `vocabulaire-ideas.ts:es-voc-dinero` (B1) contre `precision.ts:es-c2-connotacion` (C2)
- **Texte** : cours B1 — « une nuance à connaître : **barato veut dire bon marché, et n'a pas la nuance péjorative de “cheap” en anglais.** Pour dire de mauvaise qualité, on dit de mala calidad ou, familièrement, cutre » ; carte B1 — « Barato veut dire bon marché, **sans nuance péjorative**. » Contre carte C2 — « Es una solución barata. » / « C'est une solution au rabais. » — note : « **Barato dit souvent la piètre qualité.** Económico ne dit que le prix. »
- **Problème** : les deux affirmations sont exactement contraires, et la seconde est la bonne : *una solución barata*, *un truco barato*, *ropa barata* portent bien la dépréciation, et c'est précisément pourquoi *económico* existe. Le cours B1 enseigne donc une fausse règle, et l'apprenant qui suivra les deux séries dans l'ordre apprendra l'erreur d'abord.
- **Correction proposée** : corriger le B1 — « barato dit d'abord le prix bas, mais il glisse facilement vers la piètre qualité, comme “bon marché” en français. Económico ne dit que le prix ; de mala calidad et cutre disent la qualité. »

### [GRAVE] Doublon franc : ser / estar enseigné en B1 puis refait à l'identique en C1
- **Où** : `vocabulaire-ideas.ts:es-voc-emociones` (B1) et `precision.ts:es-c1-aspecto` (C1)
- **Texte** : B1 — « Estoy aburrido, no hay nada que hacer. » (note : « Estar aburrido, s'ennuyer ; ser aburrido, être ennuyeux. L'auxiliaire inverse le sens. ») contre C1 — « Es aburrido, no habla nunca. » (note : « Ser aburrido, être ennuyeux ; estar aburrido, s'ennuyer. L'adjectif change de sens. ») ; et B1 tableau `["listo", "malin", "prêt"]` contre C1 carte « Está listo para salir. » (note : « Estar listo, être prêt ; ser listo, être malin. »).
- **Problème** : la note C1 est la note B1 avec les deux membres permutés. Le seul apport réel de la série C1 est la famille des verbes de devenir (*ponerse*, *volverse*, *hacerse*, *quedarse*, *llegar a ser*) — excellente, et noyée sous quatre cartes qui refont le B1. *Ponerse* + adjectif est en outre enseigné une troisième fois par `perifrasis-colocaciones.ts:es-verbos-pronominales` (« Se puso muy nervioso. »).
- **Correction proposée** : réserver `es-c1-aspecto` aux cinq verbes de devenir et à l'opposition *ser/estar* de localisation (« La reunión es en la sala grande » / « La sala está al fondo », qui est le vrai point neuf), et supprimer les cartes *aburrido* et *listo*, déjà acquises en B1.

### [MOYEN] Deux séries classées « Pièges du français » où la moitié des cartes ne piègent qu'un anglophone
- **Où** : `precision.ts` — `es-contables` et `es-articulos-trampa`, toutes deux `category: "Pièges du français"`
- **Texte** : « Es un buen consejo. » — note : « Un consejo se compte, contrairement à l'anglais advice. **Le français aussi.** » ; « Hemos hecho grandes progresos. » — « à la différence de l'anglais progress » ; « Las noticias eran peores de lo previsto. » — « contrairement à l'anglais news » ; « Las pruebas son escasas. » — « L'anglais evidence, non : les trois langues diffèrent » ; « Los gatos son independientes. » — « à la différence de l'anglais » ; « Soy profesor de historia. » — « Pas d'article devant une profession après ser, **comme en français** ».
- **Problème** : six cartes sur vingt, dans deux séries dont la catégorie annonce le contraire, ne décrivent aucun écart entre l'espagnol et le français — plusieurs notes l'écrivent noir sur blanc (« Le français aussi », « comme en français »). Ces cartes n'enseignent rien à leur public et occupent la place de vrais pièges (l'article devant les jours — *el lunes voy*, l'absence d'article partitif — *quiero pan* pour « je veux du pain », *la mitad de*, *cada dos días*).
- **Correction proposée** : soit reclasser ces cartes hors de « Pièges du français », soit les remplacer. Le partitif absent (*bebo agua*, *quiero pan*) est le piège français numéro un et n'est traité nulle part dans le périmètre.

### [MOYEN] « Revisar al alza » : ce n'est pas la préposition qui change
- **Où** : `precision.ts` — `es-sinonimos-cambiar`, carte « Las cifras se revisaron al alza. »
- **Texte** : note « Revisar al alza ou a la baja. **La préposition change avec le sens.** »
- **Problème** : la préposition est *a* dans les deux cas ; c'est l'article qui varie (*al* = a + el, devant *alza* ; *a la* devant *baja*) — et il varie pour une raison de genre, pas de sens.
- **Correction proposée** : « Revisar al alza ou a la baja. Alza est féminin mais prend el au singulier, comme agua. »

### [MOYEN] `insistir en` enseigné deux fois, presque avec la même phrase
- **Où** : `formacion-palabras.ts:es-verbos-informe` « Insistieron en ver el expediente. » (« Insistir en + infinitif ; insistir en que + subjonctif si c'est une demande ») et `precision.ts:es-regimen-preposicional` « Insistieron en pagar ellos. » (« Insistir en + infinitif. Insistir para est fautif. »)
- **Correction proposée** : fusionner en une carte avec la note complète, et libérer une place dans `es-regimen-preposicional` pour un régime non traité (*confiar en*, *fijarse en*, *tardar en*, *quedar en*).

### [MINEUR] `consistir en` annoncé, jamais enseigné
- **Où** : `precision.ts` — `es-regimen-preposicional`
- **Texte** : statement « Depender de, **consistir en**, contar con, soñar con » ; aucune carte n'emploie *consistir en*, seulement une note qui le mentionne en passant.
- **Correction proposée** : ajouter « El trabajo consiste en revisar textos. », ou retirer le verbe du statement. (Troisième occurrence de ce défaut, après *espetar* et les quatre verbes de `es-c2-registro`.)

### [MINEUR] « Se hizo mucho daño » : la variante vaut mieux que la traduction principale
- **Où** : `precision.ts` — `es-contables`
- **Texte** : francais « Il s'est beaucoup blessé. » ; `aussi` « Il s'est fait très mal. »
- **Problème** : « il s'est beaucoup blessé » n'est pas du français courant ; la variante l'est. Or c'est la principale qui sert d'énoncé en production. Le même renversement touche `modismos-caracter.ts:es-nombres-abstractos-2` (« C'est une question d'accent mis sur les choses » / « C'est affaire de priorité ») et `perifrasis-colocaciones.ts:es-verbos-soporte` (« Il a poussé un coup la porte » / « Il a donné une poussée à la porte »).
- **Correction proposée** : intervertir — francais « Il s'est fait très mal. », `aussi: ["Il s'est sérieusement blessé."]`.

### [MINEUR] « Desechar est bien plus fort qu'anular »
- **Où** : `precision.ts` — `es-sinonimos-cambiar`, carte « El plan se desechó por completo. »
- **Problème** : les deux verbes ne sont pas sur la même échelle — *desechar* écarte une option, *anular* annule un acte déjà pris (un contrat, une élection, une réservation). Les comparer en force n'a pas de sens ; l'opposition utile serait *desechar / descartar*, très proches.
- **Correction proposée** : « Desechar, écarter définitivement une option. Descartar dit la même chose plus froidement ; anular annule un acte déjà pris. »

### [MINEUR] Troisième carte sur `aún más`
- **Où** : `formacion-palabras.ts:es-comparativos-avanzados` « Eso lo hace aún más urgente. » et `precision.ts:es-adverbios-matiz` « Aún más importante es el coste. » (français : « Plus important encore, il y a le coût. »)
- **Problème** : redite, et la traduction française de la seconde est bancale (« Plus important encore, il y a le coût » — le sujet grammatical se perd).
- **Correction proposée** : francais « Le coût est plus important encore. »

### [MINEUR] `notarse` glosé deux fois
- **Où** : `perifrasis-colocaciones.ts:es-sinonimos-decir` « Se nota la diferencia. » et `precision.ts:es-adverbios-matiz` « Apenas se nota. » — dans la première, la carte est en plus hors sujet (voir plus haut).

---
## Constats (suite — `sensaciones.ts`)

### [GRAVE] Une série sur les suffixes de couleur dont l'énoncé et l'astuce nomment les mauvais suffixes
- **Où** : `sensaciones.ts:17-19` — `es-voc-colores-materias`
- **Texte** : statement « Azul marino, verdoso, curtido, desgastado. L'espagnol fabrique ses nuances avec **-oso et -uzco**, et nomme les autres par des objets. » ; tip « Le suffixe **-oso** dit « tirant sur » : **verdoso, rojizo, azulado**. Chaque couleur a son suffixe favori, et ils ne s'échangent pas. »
- **Problème** : trois défauts qui se cumulent. (1) *-uzco* (blancuzco, negruzco) n'apparaît **dans aucune des dix cartes** : le suffixe annoncé n'est jamais enseigné. (2) L'astuce donne trois exemples du suffixe *-oso* dont **deux n'en sont pas** : *rojizo* est en *-izo*, *azulado* en *-ado*. (3) La phrase « ils ne s'échangent pas » est juste, mais elle est illustrée par des mots qu'on vient précisément d'échanger. La carte 2 de la même série dit d'ailleurs la chose correctement : « Grisáceo, rojizo, verdoso, azulado : chaque couleur a son suffixe d'approximation » — quatre suffixes différents, correctement nommés « suffixes » au pluriel. L'astuce, qui est ce que l'apprenant relit avant l'exercice, contredit la carte.
- **Correction proposée** : statement « …L'espagnol fabrique ses nuances avec toute une famille de suffixes — *-oso*, *-izo*, *-áceo*, *-ado* — et nomme les autres par des objets. » ; tip « Chaque couleur a son suffixe d'approximation, et ils ne s'échangent pas : verd**oso**, roj**izo**, gris**áceo**, azul**ado**. On ne dit ni “verdizo” ni “rojoso”. »

### [MOYEN] « Le préfixe -ecer », alors que le module dit correctement « le préfixe en- » ailleurs
- **Où** : `sensaciones.ts:68` — `es-voc-colores-materias`, carte « La madera se ha oscurecido con el tiempo. »
- **Texte** : note « Oscurecerse, foncer. Le **préfixe** -ecer fabrique des verbes de changement d'état. »
- **Problème** : *-ecer* est un **suffixe**. Le fichier emploie pourtant le mot « préfixe » correctement deux fois ailleurs (`:174` « le préfixe re- dit ce qui revient », `:294` « le préfixe des- »), et `avanzado-c2.ts:582` écrit, pour le même type de verbe, « Le **préfixe en-** fabrique des verbes de changement d'état » — qui est juste. La formation productive est d'ailleurs le couple en-…-ecer (ennegrecer, enrojecer, envejecer), c'est-à-dire un préfixe **et** un suffixe. Un apprenant qui note « -ecer = préfixe » retiendra une fausse notion de morphologie dans un module qui consacre un fichier entier (`formacion-palabras.ts`) à la dérivation.
- **Correction proposée** : « Oscurecerse, foncer. Le suffixe -ecer fabrique des verbes de changement d'état, souvent avec le préfixe en- : ennegrecer, envejecer. »

### [GRAVE] Doublon franc : « La sala enmudeció », la même carte en B2 et en C2, avec la même glose
- **Où** : `sensaciones.ts:247` — `es-voc-sonidos` (B2) et `avanzado-c2.ts:579` — `es-c2-literario` (C2)
- **Texte** : B2 « La sala enmudeció de golpe. » / « La salle s'est tue d'un coup. » (note : « **Enmudecer, devenir muet.** De golpe, d'un coup. ») ; C2 « La sala enmudeció. » / « La pièce se tut. » (note : « **Enmudecer, devenir muet.** Le préfixe en- fabrique des verbes de changement d'état. »)
- **Problème** : même sujet, même verbe, même glose recopiée mot pour mot, à deux niveaux séparés par deux paliers. Et les deux traductions françaises divergent sans raison (« la salle » / « la pièce ») : en production, l'apprenant qui a appris la carte C2 et voit « La salle s'est tue d'un coup » ne sait pas s'il doit ajouter *de golpe*. C'est le cas de figure des « séries entières présentes deux fois à deux niveaux » relevé côté anglais, ici sur une carte isolée.
- **Correction proposée** : garder la carte C2 (*es-c2-literario*, où le registre narratif est le sujet) et remplacer la carte B2 par un vrai item de bruit absent de la série : « Se hizo un silencio incómodo. » (note : « Hacerse un silencio, un silence tombe. »)

### [MOYEN] Doublon à l'intérieur d'une même série : *pegajoso* deux fois sur dix cartes, et la note l'admet
- **Où** : `sensaciones.ts:352-356` et `:392-396` — `es-voc-texturas`
- **Texte** : carte 1 « Tengo las manos pegajosas. » / « J'ai les mains collantes. » (note : « Pegajoso, formé sur pegar, coller. Le suffixe -oso est très productif. ») ; carte 9 « La pintura todavía está pegajosa. » / « La peinture est encore poisseuse. » (note : « **Le même adjectif qu'à la première carte, dans un autre contexte.** »)
- **Problème** : deux des dix cartes d'une série de vocabulaire portent sur le même mot, et la note de la seconde n'enseigne rien — elle se borne à constater le doublon. Une série de dix cartes qui en gaspille une est une série de neuf. Pire pour la production : le même espagnol y a deux français (« collantes », « poisseuse »), et aucune des deux cartes n'accepte l'autre. La série laisse par ailleurs de côté des textures usuelles (*rugoso*, *blando*, *viscoso*, *mullido*) qui auraient rempli la place.
- **Correction proposée** : remplacer la carte 9 par « La superficie es rugosa al tacto. » (note : « Rugoso s'oppose à liso ; áspero insiste sur ce qui râpe. »)

### [MOYEN] « Retumbar » : la carte traduit « trembler », sa propre note dit « résonner »
- **Où** : `sensaciones.ts:226-230` — `es-voc-sonidos`
- **Texte** : etranger « Las ventanas retumbaban con el viento. » / francais « Les fenêtres **tremblaient** dans le vent. » / note « **Retumbar, résonner sourdement.** Le verbe suppose du volume. »
- **Problème** : la carte et sa note ne disent pas la même chose. *Retumbar* est un verbe de son (gronder, retentir sourdement — DLE : « resonar mucho o hacer gran ruido »), pas de mouvement ; des fenêtres qui tremblent, c'est *temblar* ou *vibrar*. La phrase espagnole elle-même est douteuse : ce sont les vitres qui *vibran* et l'orage qui *retumba*. En exercice de production, « Les fenêtres tremblaient dans le vent » appellera *Las ventanas temblaban*, qui sera compté faux ; en reconnaissance, l'apprenant apprend que *retumbar* veut dire trembler.
- **Correction proposée** : etranger « El trueno retumbaba a lo lejos. » / francais « Le tonnerre grondait au loin. » / note inchangée. Ou, si l'on tient aux fenêtres : francais « Les fenêtres vibraient dans le vent. » avec la note « Retumbar, résonner sourdement — le bruit, pas le mouvement. »

### [MOYEN] « No es del todo lo bastante grande » : une phrase que personne ne dit
- **Où** : `sensaciones.ts:120-124` — `es-voc-formas-medidas`
- **Texte** : etranger « No es del todo lo bastante grande. » / francais « Ce n'est pas tout à fait assez grand. » / note « Lo bastante + adjectif, assez. No del todo, pas tout à fait. »
- **Problème** : la carte empile deux atténuations qui ne se cumulent pas. *Lo bastante grande* est un seuil : on est au-dessus ou en dessous ; « pas tout à fait au-dessus d'un seuil » ne veut rien dire de plus que « en dessous ». Aucun hispanophone ne construit *no es del todo lo bastante* : on dit *no es lo bastante grande*, ou *se queda un poco corto*, ou *no es del todo grande*. La carte a visiblement été fabriquée pour caser les deux tournures de la note dans une seule phrase, au prix de l'idiomatisme — et c'est justement la phrase que l'apprenant apprendra par cœur.
- **Correction proposée** : deux cartes. « No es lo bastante grande. » / « Ce n'est pas assez grand. » (note : « Lo bastante + adjectif, assez. ») et « No estoy del todo convencido. » / « Je ne suis pas tout à fait convaincu. » (note : « No del todo, pas tout à fait — sur un adjectif graduable. »)

### [MOYEN] « La masa está demasiado desmenuzable » : un adjectif de dictionnaire, pas de cuisine
- **Où** : `sensaciones.ts:377-381` — `es-voc-texturas`
- **Texte** : etranger « La masa está demasiado desmenuzable. » / francais « La pâte est trop friable. » / note « Desmenuzable, friable. Le verbe desmenuzar veut dire émietter. »
- **Problème** : *desmenuzable* existe mais ne s'emploie pratiquement pas ; en cuisine on dit *la masa se desmiga*, *se desmorona*, ou *está muy quebradiza*. Le statement de la série promet pourtant « le vocabulaire qu'on emploie le plus dans une cuisine et un atelier » : c'est exactement le contraire qui est enseigné ici. La série contient de plus déjà *quebradizo* (carte 4, « Los huesos se vuelven quebradizos »), qui est le mot réel pour « friable » — deux cartes pour une notion, dont une avec le mot que personne n'emploie.
- **Correction proposée** : etranger « La masa se desmigaja demasiado. » / francais « La pâte s'émiette trop. » / note « Desmigajarse ou desmoronarse pour une pâte ; quebradizo pour ce qui casse net. »

### [MOYEN] Le *se* involontaire traduit par un ordre volontaire — deuxième occurrence
- **Où** : `sensaciones.ts:517-521` — `es-verbos-manipulacion`
- **Texte** : etranger « No se te caiga. » / francais « **Ne le fais pas tomber.** » / note « Caérsele algo a alguien : la construction dit que c'est **involontaire**. »
- **Problème** : même défaut que « Se me rompió el enchufe » / « J'ai cassé la prise » (constat plus haut, `vocabulaire-oficios.ts`), et cette fois la note se contredit dans la même carte : elle explique que la construction dit l'involontaire, et la traduction française donne un ordre volontaire (« ne le fais pas tomber » = *no lo tires*, *no lo dejes caer*). Le français proposé appellera en production *No lo dejes caer*, qui est juste et sera compté faux. Deux occurrences du même piège sur un point de grammaire central de l'espagnol : ce n'est plus un accident.
- **Correction proposée** : francais « Attention, ne le laisse pas tomber. » avec `aussi: ["Fais attention à ne pas le laisser tomber."]` et `aussiEtranger: ["No lo dejes caer."]` — ou, mieux, francais « Ne va pas le laisser tomber. » (note : « Caérsele algo a alguien dit la maladresse ; no lo tires dirait le geste voulu. »)

### [MOYEN] `aussiEtranger` : zéro sur les 80 cartes du fichier, et six notes qui nomment elles-mêmes la variante refusée
- **Où** : `sensaciones.ts`, tout le fichier — 8 séries, 80 cartes, **0 `aussiEtranger`**, 2 `aussi`
- **Problème** : le fichier confirme le chiffre global du constat précédent (1 sur 1120) et fournit six cas où la note **nomme** la bonne réponse alternative sans l'accepter :
  - `:418-420` « Nous nous sommes promenés au bord de la rivière. » → `Paseamos junto al río` seul ; la note dit « **Dar un paseo se dit de même** ». *Dimos un paseo junto al río* sera compté faux.
  - `:482-485` « Il a attrapé son manteau et il est parti. » → `Agarró el abrigo` seul ; la note dit « **Coger se dit en Espagne** ». *Cogió el abrigo* — que le module enseigne partout ailleurs comme le verbe normal d'Espagne — sera compté faux.
  - `:301-304` « Peux-tu baisser les lumières ? » → `¿Puedes bajar las luces?` ; la note dit « **Atenuar est le terme technique** ».
  - `:130-133` « L'écart fait quelques centimètres. » → `un par de centímetros` seul ; *unos centímetros* est la traduction directe de « quelques » et sera refusée — la note dit elle-même que *un par de* vaut « deux ou trois ».
  - `:100-103` et `:105-108` « à peu près » → `más o menos` seul, alors que *aproximadamente* et *poco más o menos* sont les équivalents évidents ; le tip de la série ne les mentionne pas.
  - `:166-169` « Le pain est rassis. » → `El pan está duro` ; *el pan está reseco* est au moins aussi courant.
- **Correction proposée** : appliquer ici la règle (2) déjà proposée — toute note qui contient « se dit de même », « se dit en Espagne », « est le terme technique » remonte la variante nommée dans `aussiEtranger`.

### [MINEUR] Trois cartes dont le français ne traduit pas le verbe que la note enseigne
- **Où** : `sensaciones.ts:231-234`, `:286-289`, `:331-335`
- **Texte** : « La nevera zumba toda la noche. » / « Le réfrigérateur **ronronne** toute la nuit. » (note : « **Zumbar, bourdonner.** ») ; « Las brasas brillaban en la oscuridad. » / « Les braises **rougeoyaient** dans le noir. » (note : « **Brillar, luire.** ») ; « Habían salido las estrellas. » / « **Les étoiles étaient sorties.** »
- **Problème** : dans les deux premières, la traduction française choisit un verbe imagé (*ronronner*, *rougeoyer*) que la note ne donne pas, et la note donne un verbe (*bourdonner*, *luire*) que la traduction n'emploie pas ; l'apprenant qui produit depuis le français cherchera *ronronear* et *rojear*. La troisième est un calque : « les étoiles étaient sorties » ne se dit pas en français — le `aussi` (« Le ciel était étoilé ») porte la seule formulation naturelle, mais c'est la principale qui sert de consigne.
- **Correction proposée** : « Le réfrigérateur bourdonne toute la nuit. » ; « Les braises luisaient dans le noir. » ; principale et variante à permuter sur la carte des étoiles.

### [MINEUR] « Penosamente, l'adverbe est formé sur pena »
- **Où** : `sensaciones.ts:428-430` — `es-verbos-movimiento-2`
- **Problème** : les adverbes en *-mente* se forment sur le **féminin de l'adjectif**, jamais sur le nom : *pena* → *penoso* → *penosa* → *penosamente*. Dit ainsi, le procédé laisse croire qu'on peut fabriquer un adverbe à partir de n'importe quel nom.
- **Correction proposée** : « Penosamente, avec peine. L'adverbe se forme sur le féminin de l'adjectif : penosa + -mente. »

### [MINEUR] « Suéltame » : la note passe à côté de l'accent écrit, qui est tout l'intérêt de la carte
- **Où** : `sensaciones.ts:502-506` — `es-verbos-manipulacion`
- **Texte** : « Suéltame el brazo. » / note « Soltar, lâcher. L'impératif soltar + pronom **soude les deux mots**. »
- **Problème** : « soude les deux mots » ne dit rien de ce que l'apprenant doit écrire. Le point à retenir est que la soudure **déplace la syllabe accentuée et impose un accent écrit** : *suelta* + *me* → *suéltame*, exactement la règle du cours `es-cours-accent`. Dans un module qui compte l'orthographe accentuée parmi ses exigences, la carte manque son objet.
- **Correction proposée** : « Soltar, lâcher. Le pronom se soude à l'impératif et force l'accent écrit : suelta + me → suéltame. »

### [MINEUR] « Ir + gérondif dit le progrès lent » : la même glose huit fois, dans six fichiers
- **Où** : `sensaciones.ts:38`, `avanzado-c2.ts:134` et `:570`, `perifrasis-colocaciones.ts:118` et `:123`, `conjugacion-2.ts:178` et `:245`, `vocabulaire-mundo.ts:582` et `:630`
- **Texte** : « Ir + gérondif dit le progrès lent. » / « Ir + gérondif dit le progrès. » / « Ir + gérondif dit le progrès graduel. » / « Ir + gérondif marque la progression graduelle. » / « Ir + gérondif marque une progression. »
- **Problème** : cinq formulations d'une même phrase, deux cours entiers (`conjugacion-2.ts`, `vocabulaire-mundo.ts`) qui exposent la périphrase de la même façon, et quatre cartes qui la re-glosent. Le constat « Les périphrases verbales enseignées deux fois » plus haut sous-estimait donc le compte : c'est huit occurrences, du A2 au C2.
- **Correction proposée** : conserver l'exposé de `conjugacion-2.ts` (le cours de référence) et réduire les notes de carte à ce que la carte apporte en propre (*curtirse*, *apagarse*, *asumir*), sans re-définir la périphrase.

### [MINEUR] `coger el autobús` employé sans réserve, deux séries avant la mise en garde contre *coger*
- **Où** : `sensaciones.ts:437-440` — `es-verbos-movimiento-2`, carte « Salí corriendo para coger el autobús. » ; et `sensaciones.ts:485` — `es-verbos-manipulacion`, note « Coger se dit en Espagne, à éviter en Amérique latine. »
- **Problème** : le même fichier emploie *coger el autobús* comme phrase modèle, puis avertit soixante lignes plus loin que le verbe est à proscrire en Amérique. C'est précisément l'exemple que `vocabulario-vida.ts:92` cite comme dangereux (« Coger el autobús se dit partout en Espagne. En Argentine, au Mexique… le verbe a un sens sexuel ») et que `registres.ts:54` développe (« Dire “voy a coger el autobús” à Buenos Aires provoque au mieux un fou rire »). La carte n'en dit rien, alors que sa note avait la place.
- **Correction proposée** : ajouter à la note : « Salir corriendo, partir en courant. Coger el autobús en Espagne ; tomar el autobús en Amérique. »

---

## Constats (suite — `oral-interaccion.ts`)

### [GRAVE] « L'espagnol professionnel refuse sans jamais employer le mot no » — six des dix cartes de la série contiennent *no*
- **Où** : `oral-interaccion.ts:214-215` — `es-desacuerdo-cortes`, statement
- **Texte** : « Entiendo tu punto, pero. No lo veo claro. Todo depende. L'espagnol professionnel refuse **sans jamais employer le mot no**. »
- **Problème** : l'énoncé est démenti par la série qu'il annonce, et dès l'exemple qu'il cite lui-même — « **No** lo veo claro ». Les dix cartes donnent : « **No** lo veo claro », « Te entiendo, pero **no** es el momento », « Quedamos en que **no** estamos de acuerdo », « Preferiría **no** hacerlo, si **no** te importa », « Eso **no** me corresponde a mí », « Me temo que **no** va a poder ser ». Six cartes sur dix, sept occurrences du mot. La règle est fausse et l'apprenant l'a sous les yeux en même temps que sa réfutation. Ce que la série enseigne réellement — et bien — c'est que le refus ne se dit pas par un *no* **seul et nu**, en réponse directe.
- **Correction proposée** : « Entiendo tu punto, pero. No lo veo claro. Todo depende. L'espagnol professionnel refuse rarement par un « no » sec : le refus passe par une concession, une réserve ou un regret. »

### [GRAVE] Trois marqueurs espagnols différents traduits « Bref » dans le même fichier, plus un quatrième traduit « Enfin »
- **Où** : `oral-interaccion.ts:53-54`, `:365-366`, `:385-386`, `:38-39`
- **Texte** : « En fin, ¿por dónde íbamos? » / « **Bref**, où en étions-nous ? » ; « Total, que lo perdimos. » / « **Bref**, on l'a raté. » ; « Bueno, ahí fue cuando lo entendí. » / « **Bref**, c'est là que j'ai compris. » ; « O sea, no es tan sencillo. » / « **Enfin**, ce n'est pas si simple. »
- **Problème** : trois marqueurs distincts — *en fin*, *total que*, *bueno* — reçoivent le même français, sans qu'aucune carte n'accepte les autres (`aussiEtranger` absent partout). En exercice de production, « Bref, … » a trois réponses justes et une seule comptée bonne, tirée au sort selon la carte. Et la troisième traduction est en outre fautive : *bueno* en tête de phrase n'est pas « bref » mais « bon, alors » — il ne clôt pas une digression, il relance. Le quatrième cas est le plus gênant : « Enfin, ce n'est pas si simple » appellera naturellement *En fin, no es tan sencillo* — qui existe comme carte quatre lignes plus bas, avec un tout autre sens. Le fichier commence pourtant par affirmer, en commentaire d'en-tête, que ces mots « ne se traduisent pas : “o sea” n'a pas d'équivalent, il a une fonction » — et il leur donne à tous un équivalent français d'un mot.
- **Correction proposée** : distinguer les français — *en fin* → « Bref, » ; *total que* → « Résultat, on l'a raté. » ; *bueno* → « Bon, c'est là que j'ai compris. » ; *o sea* → « Je veux dire, ce n'est pas si simple. » (avec `aussi: ["C'est-à-dire que ce n'est pas si simple."]`) — et renseigner `aussiEtranger` sur chacune avec les concurrents réellement recevables.

### [MOYEN] L'astuce de la série recopiée mot pour mot dans la note de sa première carte — six séries sur huit
- **Où** : `oral-interaccion.ts` — `es-vacilacion`, `es-telefono-atencion`, `es-desacuerdo-cortes`, `es-charla-social`, `es-instrucciones`, `es-pedir-reclamar`
- **Texte** :
  - tip « **Como que atténue tout ce qui suit : está como que complicado.** » → carte 1 : etranger « Está como que complicado. », note « Como que atténue. »
  - tip « **“No lo veo claro” est un refus ferme sous une forme douce.** » → note « No verlo claro est un refus ferme sous une forme douce. »
  - tip « **La réponse attendue est brève, positive, et renvoie la question.** » → note « La réponse type : brève, positive, et on renvoie la question. »
  - tip « **Asegurarse de + infinitif quand le sujet est le même, de que + subjonctif sinon.** » → note « Asegurarse de + infinitif, même sujet. Avec un autre sujet : de que + subjonctif. »
  - tip « **“Me preguntaba si podrías” est le degré le plus élevé de la vie courante.** » → note « Me preguntaba si : le degré de politesse le plus élevé de la vie courante. »
  - tip « **Le verbe pasar seul suffit, sans complément d'objet exprimé.** » → note « Pasar a alguien, transférer un appel. Le complément reste implicite. »
- **Problème** : l'astuce est ce que l'apprenant lit avant la série, la note ce qu'il lit après avoir répondu. Quand les deux disent la même phrase, la seconde n'apprend rien et la carte perd son commentaire. Dans `es-vacilacion`, c'est même l'exemple du tip qui est repris tel quel comme carte : la « question » est donnée avec sa réponse. Six séries sur huit fonctionnent ainsi dans ce fichier — c'est un procédé de fabrication, pas un accident.
- **Correction proposée** : réserver l'astuce à la règle générale et la note au détail propre à la carte. Pour `es-vacilacion` : changer la carte en « Es como que no me apetece. » et la note en « Como que devant un verbe atténue de la même façon ; à l'écrit, à proscrire. »

### [MOYEN] Doublon interne : « où en étions-nous ? » et « où en étais-je ? », deux cartes, deux séries, le même fichier
- **Où** : `oral-interaccion.ts:52-56` — `es-marcadores-orales` et `:132-136` — `es-vacilacion`
- **Texte** : « En fin, ¿por dónde íbamos? » / « Bref, où en étions-nous ? » (note : « En fin clôt une digression et ramène au sujet. ») ; « ¿Por dónde iba? » / « Où en étais-je ? » (note : « La formule pour reprendre après une interruption. »)
- **Problème** : la même formule à une personne près, avec la même fonction — clore une digression et revenir au sujet — dans deux séries voisines du même fichier, présentées comme deux points distincts. La série `es-vacilacion` contient d'ailleurs déjà « He perdido el hilo », qui fait le même travail.
- **Correction proposée** : retirer « ¿Por dónde iba? » de `es-vacilacion` et la remplacer par une vraie amorce d'hésitation absente du lot : « No sé cómo decirlo. » ou « Es que… no sé. »

### [MOYEN] Un faux ami anglais servi à un francophone : « Actualmente veut dire en ce moment »
- **Où** : `oral-interaccion.ts:33-35` — `es-marcadores-orales`, carte « En realidad era al revés. »
- **Texte** : note « En realidad corrige poliment. **Actualmente veut dire en ce moment.** »
- **Problème** : le français « actuellement » veut dire exactement « en ce moment », comme *actualmente*. Il n'y a donc aucun piège pour un francophone : la mise en garde est celle de l'anglais *actually*, greffée sur un module français. C'est le même défaut que la note sur *escuchar* relevée plus haut dans `cours-usage.ts`, et il occupe ici la moitié d'une note de dix mots. Ce qu'il faudrait dire à un francophone, c'est que *en realidad* ne se rend pas par « en réalité » dans cet emploi : c'est un correcteur de tour de parole (« en fait »), pas un mot de vérité.
- **Correction proposée** : « En realidad corrige poliment ce qu'on vient d'entendre : “en fait”, plutôt que “en réalité”. »

### [MOYEN] Deux cartes dont le français ne déclenche pas la construction que la note enseigne
- **Où** : `oral-interaccion.ts:419-422` — `es-instrucciones` ; `:107-111` — `es-vacilacion`
- **Texte** : « Asegúrate de cerrar con llave. » / « **N'oublie pas** de fermer à clé. » (note : « **Asegurarse de** + infinitif, même sujet. Avec un autre sujet : de que + subjonctif. ») ; « Déjame decirlo de otra manera. » / « **Je vais le dire** autrement. » (note : « De otra manera, autrement. Dicho de otro modo se dit aussi, plus écrit. »)
- **Problème** : dans la première, la note fait de *asegurarse de* le point à retenir, mais le français dit « n'oublie pas de », qui appelle *No te olvides de cerrar con llave* — réponse juste, comptée fausse, et qui n'exerce pas la règle annoncée par le tip. Dans la seconde, *déjame decirlo* est « laisse-moi le dire » ; « je vais le dire autrement » se rend par *Lo voy a decir de otra manera*. *Déjame decirlo de otra manera* est du reste un calque de l'anglais *let me put it another way* : l'espagnol spontané dit *Te lo digo de otra manera* ou *Dicho de otro modo*, que la note nomme sans l'accepter.
- **Correction proposée** : « Asegúrate de cerrar con llave. » / « Assure-toi de fermer à clé. » ; « Déjame decirlo de otra manera. » / « Laisse-moi le dire autrement. » avec `aussiEtranger: ["Te lo digo de otra manera.", "Dicho de otro modo."]`.

### [MOYEN] `aussiEtranger` : zéro sur 80 cartes, et une série entière dont quatre notes nomment la variante d'Amérique sans l'accepter
- **Où** : `oral-interaccion.ts`, tout le fichier — 8 séries, 80 cartes, **0 `aussiEtranger`**, 2 `aussi`
- **Problème** : `es-telefono-atencion` est le cas le plus net rencontré jusqu'ici. Quatre de ses dix cartes portent une note qui **nomme** l'autre norme, et aucune ne l'admet :
  - `:173-175` « Je vous rappelle demain. » → `Le devuelvo la llamada mañana` ; note : « **Llamar de vuelta se dit en Amérique latine.** »
  - `:187-190` « Voulez-vous laisser un message ? » → `¿Quiere dejar un recado?` ; note : « Un recado en Espagne, **un mensaje partout**. » — la carte refuse donc la forme que sa propre note déclare universelle.
  - `:192-195` « La ligne est occupée. » → `Está comunicando` ; note : « **Ocupado se dit en Amérique latine.** »
  - `:68-70` (`es-marcadores-orales`) « Bon, on s'y met. » → `Venga, empezamos` ; note : « Très espagnol, **peu employé en Amérique** » — sans donner l'équivalent américain (*dale*, *listo*, *va*), que l'apprenant produira légitimement.
  S'y ajoutent `:107-111` (*dicho de otro modo*), `:298-301` « Ça fait un bail ! » → `¡Cuánto tiempo!` ; note : « **Cuánto tiempo sin verte se dit aussi, en entier** », et `:529-532` « Pourriez-vous me faire une remise ? » → `¿Me haría un descuento?`, alors que `vocabulaire-ideas.ts:es-voc-dinero` enseigne *¿Me hace un descuento?* pour la même demande : deux cartes du module se contredisent sur la même phrase française.
- **Correction proposée** : `es-telefono-atencion` est la série à traiter en premier : elle est bâtie sur l'opposition Espagne / Amérique et n'accepte que l'Espagne. Renseigner `aussiEtranger` sur les quatre cartes citées, et harmoniser la carte du *descuento* avec `vocabulaire-ideas.ts`.

### [MOYEN] « Cela dit » et « Ceci dit » pour deux marqueurs différents dans la même série
- **Où** : `oral-interaccion.ts:42-46` et `:47-51` — `es-marcadores-orales`
- **Texte** : « Eso sí, nos avisó. » / « **Cela dit**, il nous avait prévenus. » ; « Aunque bueno, quizá tenga razón. » / « **Ceci dit**, elle a peut-être raison. »
- **Problème** : deux cartes consécutives, deux formules françaises que l'usage tient pour la même (« ceci dit » est la variante critiquée de « cela dit »), pour deux marqueurs espagnols différents. Rien ne permet à l'apprenant de savoir laquelle appelle *eso sí* et laquelle *aunque bueno* : la distinction n'est pas dans le français, elle est dans le hasard de la rédaction. La typographie du module recommande par ailleurs la forme « cela dit ».
- **Correction proposée** : « Eso sí, nos avisó. » / « Cela dit, il nous avait prévenus. » (réserve) ; « Aunque bueno, quizá tenga razón. » / « Encore que, oui, elle a peut-être raison. » (retournement) — la note d'`aunque bueno` disant déjà « un retournement de son propre point de vue ».

### [MINEUR] « Puede ser, pero. » : une phrase qui s'arrête au milieu, sans points de suspension
- **Où** : `oral-interaccion.ts:238-241` — `es-desacuerdo-cortes`
- **Texte** : etranger « Puede ser, pero. » / francais « C'est possible, mais. »
- **Problème** : la suspension est bien le procédé enseigné, mais elle s'écrit avec des points de suspension : *Puede ser, pero…* La carte sert de dictée et d'exercice de prononciation ; telle quelle, elle demande de lire un point final là où il faut une intonation en suspens. Le statement de la même série écrit d'ailleurs « Entiendo tu punto, pero. » avec la même ponctuation fautive.
- **Correction proposée** : « Puede ser, pero… » / « C'est possible, mais… » — et de même dans le statement.

### [MINEUR] Registre français décalé dans deux cartes de politesse
- **Où** : `oral-interaccion.ts:298-301` et `:323-328` — `es-charla-social`
- **Texte** : « ¡Cuánto tiempo! » / « **Ça fait un bail !** » ; « Ya quedamos otro día. » / « **On se cale ça un autre jour.** »
- **Problème** : *¡Cuánto tiempo!* et *ya quedamos otro día* sont des formules neutres, employables avec un collègue comme avec une tante. Les français choisis sont nettement familiers, et « se caler ça » est du parler de bureau récent. L'apprenant croira que l'espagnol est du même registre et l'emploiera là où il ne faut pas. La série s'intitule pourtant « La conversation de politesse ».
- **Correction proposée** : « Ça fait longtemps ! » avec `aussi: ["Ça fait un bail !"]` ; « On se refait ça un autre jour. » avec `aussi: ["On se revoit une prochaine fois."]`.

### [MINEUR] « Aunque no te lo creas + subjonctif » : la formule citée contient déjà le subjonctif
- **Où** : `oral-interaccion.ts:394-398` — `es-contar-anecdota`
- **Texte** : note « Aunque no te lo creas + subjonctif annonce l'invraisemblable. »
- **Problème** : *creas* **est** le subjonctif. Écrite ainsi, la note laisse attendre un second subjonctif dans la suite de la phrase — alors que la carte enchaîne sur un passé simple, *funcionó*. Ce qu'il faut dire est que c'est *aunque* qui impose le subjonctif à *creer*.
- **Correction proposée** : « Aunque impose ici le subjonctif : no te lo creas. La formule annonce l'invraisemblable. »

### [MINEUR] « Total, que » dans la carte, « Total que » dans sa note et dans l'énoncé
- **Où** : `oral-interaccion.ts:346-347` et `:364-367` — `es-contar-anecdota`
- **Texte** : statement « Resulta que, **total que**, y ahí me tienes » ; carte « **Total, que** lo perdimos. » ; note « **Total que** abrège et conclut. »
- **Problème** : trois occurrences, deux ponctuations. La carte est ce que l'apprenant écrit sous dictée : la virgule y est ou n'y est pas, il faut trancher une fois.
- **Correction proposée** : retenir « Total, que lo perdimos. » (la virgule marque la pause réelle) et aligner statement et note sur cette graphie.

### [MINEUR] Le pronom « soudé à l'impératif », deux fois, sans jamais dire qu'il impose un accent écrit
- **Où** : `oral-interaccion.ts:444-447` — `es-instrucciones`, carte « Déjalo enfriar diez minutos. » (note : « Le pronom **se soude** à l'impératif. ») ; et `sensaciones.ts:505`, carte « Suéltame el brazo. » (note : « L'impératif soltar + pronom **soude les deux mots**. »)
- **Problème** : deux cartes, deux notes, et dans les deux cas la conséquence orthographique — *deja* + *lo* → *déjalo*, *suelta* + *me* → *suéltame* — n'est pas dite. C'est pourtant la seule chose que l'apprenant doit écrire, et la règle est enseignée par ailleurs dans `cours-usage.ts:es-cours-accent`. Même la carte « Asegúrate de cerrar con llave » (`:420`) porte l'accent sans un mot d'explication.
- **Correction proposée** : ajouter partout la mécanique : « Le pronom se soude et déplace l'accent tonique : deja + lo → déjalo. »

---

## Constats (suite — `dominios-3.ts`) — fin de la passe 1

### [GRAVE] « Afectar sans préposition en Espagne, afectar a aussi » — la géographie est inversée
- **Où** : `dominios-3.ts:201-205` — `es-voc-astronomia`, carte « Las erupciones solares afectan las comunicaciones. »
- **Texte** : note « Una erupción solar. **Afectar sans préposition en Espagne, afectar a aussi.** »
- **Problème** : c'est exactement l'inverse. Le *Diccionario panhispánico de dudas* est explicite : au sens de « produire un effet sur », le complément de *afectar* « suele ir precedido de la preposición a » — *la crisis afecta a los jóvenes*, *el temporal afecta a media España* —, et c'est la norme péninsulaire ; la construction sans *a* est surtout américaine, et souvent tenue pour un calque de l'anglais. La note enseigne donc le contraire de l'usage, et la carte elle-même — *afectan las comunicaciones*, sans *a* — donne pour espagnol d'Espagne la forme qui ne l'est pas. Un apprenant qui écrit *afecta a las comunicaciones*, qui est la forme la plus sûre, croira s'être trompé.
- **Correction proposée** : etranger « Las erupciones solares afectan a las comunicaciones. » / note « Una erupción solar. Afectar **a** est la construction courante en Espagne ; en Amérique, on entend aussi afectar sans préposition. » — avec `aussiEtranger: ["Las erupciones solares afectan las comunicaciones."]`.

### [MOYEN] Trois séries dont l'énoncé annonce un mot-vedette qui n'apparaît dans aucune carte
- **Où** : `dominios-3.ts:18-20` (`es-voc-jardineria`), `:343-345` (`es-voc-cocina-tecnica`), `:408-410` (`es-voc-burocracia`)
- **Texte** :
  - « Sembrar, podar, **desbrozar**, acolchar » — *desbrozar* n'est dans aucune des dix cartes (le désherbage y est rendu par *quitar malas hierbas*), et *acolchar* n'y figure que sous forme de nom (*acolchado*). Le tip oppose par ailleurs *sembrar* et *plantar* en concluant « **les deux ne s'échangent jamais** » — mais *plantar* n'apparaît pas non plus, si bien que l'opposition annoncée n'est jamais exercée.
  - « **Sofreír**, batir, incorporar, salpimentar » avec un tip entièrement consacré à *sofreír* (« Sofreír n'est ni freír ni saltear : c'est faire revenir doucement dans un peu d'huile, base de presque toute la cuisine espagnole ») — et **aucune carte ne contient *sofreír***, ni *freír*, ni *saltear*. Le point le mieux expliqué de la série est le seul qu'on ne peut pas réviser.
  - « Solicitar, rellenar, justificante, tener derecho a » avec un tip sur *justificante* / **comprobante** — *comprobante* n'apparaît dans aucune carte, et le mot est surtout américain : au guichet espagnol, le reçu est *el resguardo* ou *el recibo*, jamais cité. Le tip affirme pourtant que « les deux mots se rencontrent dans **tous** les guichets ».
- **Problème** : c'est le troisième cas du même défaut après `gramatica-c1.ts:es-c2-registro` (« conseguir, obtener, lograr, alcanzar », aucune carte). L'énoncé et l'astuce sont ce que l'apprenant lit et retient ; quand ils portent sur des mots que les exercices ne contiennent pas, la série promet une leçon qu'elle ne donne pas, et les quatre exercices (reconnaître, produire, écouter, prononcer) ne portent jamais sur le point annoncé.
- **Correction proposée** : ajouter dans chaque série la carte qui manque — « Hay que desbrozar el camino. » ; « Sofríe la cebolla a fuego lento. » (note : « Sofreír, faire revenir doucement — ni freír ni saltear. ») ; « Guarde el resguardo del pago. » (note : « El resguardo en Espagne, el comprobante en Amérique. ») — ou aligner les énoncés sur ce que les séries enseignent réellement.

### [MOYEN] « Un eclipse est masculin malgré le e final » : la raison donnée est fausse
- **Où** : `dominios-3.ts:161-165` — `es-voc-astronomia`
- **Texte** : note « Un eclipse est masculin, **malgré le e final**. Eclipsar s'emploie au figuré. »
- **Problème** : en espagnol, la finale *-e* ne prédit aucun genre — *el coche*, *el nombre*, *el parque*, *el diente* sont masculins, *la clase*, *la noche*, *la llave* féminines. Il n'y a donc rien à concéder : « malgré » suppose une règle qui n'existe pas. Le vrai piège est **français** : « une éclipse » est féminin, et c'est cela qui fait écrire « la eclipse ». Le fichier sait pourtant formuler correctement ce genre de note, dix cartes plus loin : « El estigma, masculin **malgré le a final**, comme tous les mots grecs en -ma » — où la concession est justifiée, puisque *-a* prédit bien le féminin.
- **Correction proposée** : « Un eclipse est masculin, alors que le français dit “une éclipse”. Eclipsar s'emploie au figuré. »

### [MOYEN] « El sedimento reste singulier en espagnol » : une règle inventée
- **Où** : `dominios-3.ts:236-240` — `es-voc-geologia`, carte « El sedimento se depositó durante la noche. » / « **Les sédiments** se sont déposés pendant la nuit. »
- **Texte** : note « Depositarse, se déposer. **El sedimento reste singulier en espagnol.** »
- **Problème** : *los sedimentos* est parfaitement courant et constitue même le terme technique usuel — *sedimentos marinos*, *sedimentos fluviales*, *cuenca de sedimentos*. Rien n'oblige le singulier. La carte fabrique la même règle que la note sur *negociaciones* relevée plus haut dans `gramatica-c1.ts` (« Le pluriel est la règle dans ce sens »), avec la même absence de fondement — mais dans l'autre sens. Et la carte est doublement piégeuse : le français dit « les sédiments » au pluriel, si bien qu'un apprenant qui produit *Los sedimentos se depositaron* — juste — sera compté faux au nom d'une règle qui n'existe pas.
- **Correction proposée** : francais « Le sédiment s'est déposé pendant la nuit. » et note « Depositarse, se déposer. El sedimento au singulier pour la matière, los sedimentos pour les couches. » avec `aussiEtranger: ["Los sedimentos se depositaron durante la noche."]`.

### [MOYEN] « Ir al psicólogo : le verbe ir suffit, sans complément » — alors que la carte en a un
- **Où** : `dominios-3.ts:301-305` — `es-voc-salud-mental`
- **Texte** : etranger « Va al psicólogo desde enero. » / francais « Il consulte un psychologue depuis janvier. » / note « Ir al psicólogo, consulter. **Le verbe ir suffit, sans complément.** »
- **Problème** : *al psicólogo* **est** le complément. La note dit donc le contraire de ce que la carte montre, et l'apprenant ne peut pas comprendre de quoi elle parle. Ce que la remarque veut dire — que l'espagnol emploie *ir a* + spécialiste là où le français dit « consulter » — n'est pas dit. En production, « Il consulte un psychologue » appellera d'ailleurs *Consulta a un psicólogo*, qui est correct et sera compté faux.
- **Correction proposée** : francais « Il va chez le psychologue depuis janvier. » / note « Là où le français dit “consulter”, l'espagnol dit ir al psicólogo, ir al médico, ir al dentista. » avec `aussiEtranger: ["Consulta a un psicólogo desde enero."]`.

### [MOYEN] « Un empadronamiento » donné pour le justificatif de domicile
- **Où** : `dominios-3.ts:426-430` — `es-voc-burocracia`
- **Texte** : note « Un justificante, un justificatif. **Un empadronamiento en est le plus courant.** »
- **Problème** : *el empadronamiento* est l'inscription au registre municipal — la démarche, pas la pièce. Le document qu'on présente au guichet est **el certificado de empadronamiento**, ou son équivalent allégé, **el volante de empadronamiento** ; c'est ce mot-là qu'on demande, et la distinction certificado / volante est la première chose qu'un étranger doit savoir en Espagne. Le fichier annonce pourtant dans son en-tête que l'administration est un domaine « où un mot mal choisi coûte un rendez-vous », et le statement de la série que « chaque mot y compte ».
- **Correction proposée** : « Un justificante, un justificatif. Le plus demandé est el certificado de empadronamiento — el volante en est la version simplifiée. »

### [MOYEN] Quatre notes qui nomment la variante juste sans l'accepter, dont une qui la déclare meilleure
- **Où** : `dominios-3.ts` — 8 séries, **80 cartes, 0 `aussiEtranger`, 0 `aussi`** : le seul fichier du périmètre où aucune carte n'accepte la moindre variante, ni espagnole ni française.
- **Texte** :
  - `:291-295` « Je me sens débordé ces temps-ci. » → `Últimamente me siento sobrepasado.` ; note : « Sobrepasado, dépassé. **Desbordado se dit aussi et se comprend partout.** » — la note déclare la variante refusée plus universelle que la réponse attendue. C'est le cas le plus net du module : la carte sanctionne la meilleure réponse.
  - `:521-525` « La campagne a servi à sensibiliser. » → `concienciar` ; note : « **Concienciar en Espagne, concientizar en Amérique latine.** »
  - `:196-200` « La mission a dépassé son budget. » → `superó` ; note : « **Rebasar se dit aussi.** »
  - `:186-190` « Le robot s'est posé à l'aube. » → `aterrizó` ; note : « **Amartizar existe pour Mars, alunizar pour la Lune** » — et la carte parle d'un robot, c'est-à-dire du seul cas où *amartizar* ou *alunizar* seraient attendus.
  S'y ajoute `:36-40` « J'ai passé la matinée à désherber. » → `quitando malas hierbas`, dont la note dit « **Desherbar existe, moins courant** », et `:71-75` « Il faut retondre la pelouse. » → `cortar el césped`, alors que l'Amérique dit *cortar el pasto* — non signalé, dans un fichier qui signale ailleurs les couples Espagne / Amérique.
- **Correction proposée** : les six variantes sont déjà écrites dans les notes ; il suffit de les remonter dans `aussiEtranger`. La carte de *sobrepasado* devrait même être retournée : réponse principale *desbordado*, variante *sobrepasado*.

### [MINEUR] Deux cartes qui comparent l'espagnol à l'anglais dans un module français
- **Où** : `dominios-3.ts:280` — `es-voc-salud-mental`, tip ; `:474-475` — `es-voc-social`, statement et tip
- **Texte** : « On dit una persona con depresión plutôt que un depresivo : l'espagnol met la personne avant le diagnostic, **comme l'anglais**. » ; « **“caridad” ne s'y emploie presque plus** […] On dit una ONG ou una asociación, pas una caridad. »
- **Problème** : dans le premier cas, la mention de l'anglais n'apprend rien à un francophone — le français applique la même convention (« une personne souffrant de dépression »), et c'est à lui qu'il faudrait comparer. Dans le second, l'erreur combattue est un calque de l'anglais *a charity* : aucun francophone n'appellerait une association « une charité ». Ces deux notes rejoignent le constat « Un module français dont les notes comparent l'espagnol à l'anglais » relevé dans `modismos-caracter.ts` — le procédé est régulier.
- **Correction proposée** : « …l'espagnol met la personne avant le diagnostic, comme le français administratif. » ; et pour la seconde : « Une association se dit una asociación ou una ONG. Caridad garde une couleur religieuse : la caridad, la charité comme vertu, pas comme organisme. »

### [MINEUR] Deux calques discrets dans les séries associative et administrative
- **Où** : `dominios-3.ts:501-505` et `:516-520` — `es-voc-social`
- **Texte** : « La ayuda está sujeta a ingresos. » / « L'aide est soumise à conditions de ressources. » ; « Cuentan con apoyo de base. » / « Ils comptent sur un soutien de terrain. »
- **Problème** : *sujeta a ingresos* décalque *subject to income* ; l'espagnol dit *está condicionada al nivel de ingresos* ou *sujeta a un límite de ingresos* — sans complément de niveau, la phrase reste en l'air. *Apoyo de base* décalque *grassroots support* ; l'espagnol dit *apoyo popular*, ou *el apoyo de las bases* avec l'article et le pluriel. Deux cartes destinées à être apprises par cœur dans une série C1.
- **Correction proposée** : « La ayuda está condicionada al nivel de ingresos. » ; « Cuentan con el apoyo de las bases. »

### [MINEUR] « Tirar a alguien, désarçonner » : la glose est trop large
- **Où** : `dominios-3.ts:116-120` — `es-voc-animales`
- **Texte** : « El caballo tiró al jinete. » / « Le cheval a désarçonné son cavalier. » / note « **Tirar a alguien, désarçonner.** Una yegua, la jument ; un potro, le poulain. »
- **Problème** : *tirar a alguien* ne veut pas dire « désarçonner » ; il veut dire « jeter quelqu'un à terre », et hors contexte équestre il peut même se comprendre « tirer sur quelqu'un » ou « jeter quelque chose à quelqu'un ». Le verbe précis existe : *derribar al jinete*, ou *desmontar*. Donné tel quel, l'apprenant retiendra une équivalence qu'il réemploiera à contresens.
- **Correction proposée** : etranger « El caballo derribó al jinete. » / note « Derribar a alguien, le jeter à terre — c'est le verbe du cheval qui désarçonne. Una yegua, la jument ; un potro, le poulain. »

### [MINEUR] Chiffres en chiffres dans des cartes destinées à la dictée et à la prononciation
- **Où** : `dominios-3.ts:181-183` (« El cometa vuelve cada **76** años. ») et `:381-383` (« Precalienta el horno a **180** grados. »)
- **Problème** : les deux séries sont marquées `oral: true, parle: true` : ces phrases sont dictées et prononcées. Écrits en chiffres, *76* et *180* n'apprennent ni *setenta y seis* ni *ciento ochenta*, et à la dictée on ne sait pas ce qu'il faut écrire. Le module tranche pourtant dans l'autre sens partout ailleurs — « Se habla español en veinte países », « El plazo vence el treinta de junio », « El banco subió los tipos de interés ».
- **Correction proposée** : « El cometa vuelve cada setenta y seis años. » ; « Precalienta el horno a ciento ochenta grados. »

### [MINEUR] Trois collocations douteuses
- **Où** : `dominios-3.ts:61-65`, `:356-359`, `:41-45`
- **Texte** : « El seto se está **desmadrando**. » (note : « Desmadrarse, échapper à tout contrôle. Familier et très expressif. ») ; « Bate los huevos hasta que **espumen**. » ; « El suelo necesita acolchado. » (note : « Le mot vient de **colcha, la couverture**. »)
- **Problème** : (1) *desmadrarse* se dit de personnes et de situations — une fête, un débat, un enfant —, le DLE le définit par « conducirse desconsideradamente » ; d'une haie on dit *se está descontrolando* ou *se ha disparado*. (2) *hasta que espumen* n'est pas la formule des recettes : on écrit *hasta que blanqueen*, *hasta que estén espumosos*, ou *a punto de nieve* pour les blancs. (3) *colcha* est le couvre-lit, pas la couverture — celle-ci est *una manta* ; l'image du paillis y perd sa justesse.
- **Correction proposée** : « El seto se está descontrolando. » ; « Bate los huevos hasta que blanqueen. » ; « Le mot vient de colcha, le couvre-lit. »

### [MINEUR] « Orbitar est verbe aussi »
- **Où** : `dominios-3.ts:156-160` — `es-voc-astronomia`
- **Texte** : note « Entrar en órbita. **Orbitar est verbe aussi.** »
- **Problème** : la phrase française est agrammaticale ; il manque l'article. Le module tutoie et écrit clairement partout ailleurs.
- **Correction proposée** : « Entrar en órbita, se placer en orbite. Le verbe orbitar existe aussi : orbita alrededor de Marte. »

---

## Constats — passe 2

*Relecture depuis le début, après la passe 1. Ce qui suit n'était pas dans les
constats ci-dessus. J'ai commencé par un relevé mécanique des cartes voisines à
travers les 33 fichiers du dossier `espagnol/`, puis relu.*

### [GRAVE] La règle « estar pour le lieu, toujours » est démentie par une carte du module
- **Où** : `conjugaison.ts:88` — carte « Están en casa. » ; `faux-amis.ts:117` — carte « Está en casa. » ; contre `precision.ts:516` — `es-c1-aspecto`, carte « La reunión es en la sala grande. »
- **Texte** : « Están en casa. » / « Ils sont à la maison. » / note « **estar pour le lieu, toujours.** » ; « Está en casa. » / « Il est à la maison. » / note « **Un lieu, toujours estar.** » — contre « La reunión es en la sala grande. » / « La réunion a lieu dans la grande salle. » / note « **Ser pour un événement qui se tient quelque part.** Estar dirait où se trouve un objet. »
- **Problème** : la règle est donnée deux fois, dans deux fichiers différents, avec le mot « toujours », et elle est fausse : l'espagnol emploie *ser* pour situer un **événement** — *la reunión es en la sala*, *la fiesta es en mi casa*, *el examen es en el aula tres*. C'est l'une des trois ou quatre exceptions que tout manuel signale, et c'est précisément celle que `precision.ts` enseigne correctement, avec sa carte de contraste immédiatement après (« La sala está al fondo », note : « Le contraste avec la carte précédente est net »). L'apprenant rencontre donc la règle absolue en A1, sa réfutation en C1, et rien ne lui dit que la première était incomplète. C'est l'équivalent exact de la contradiction cherchée : une règle posée avec « toujours », puis démentie par le module lui-même.
- **Correction proposée** : `conjugaison.ts` → « estar pour situer une chose ou une personne. Un événement, lui, prend ser : la fiesta es en mi casa. » ; `faux-amis.ts` → même note ; et ajouter dans la note de `precision.ts:516` un renvoi explicite : « C'est la seule exception à “un lieu, toujours estar”. »

### [GRAVE] Le *se* involontaire mal traduit deux fois, dans deux fichiers, avec la même traduction fautive
- **Où** : `conjugacion-2.ts:594-597` — `es-conj-reflexivos` et `vocabulaire-oficios.ts:243-246` — `es-voc-arreglos`
- **Texte** : « Se me rompió el vaso. » / « **J'ai cassé le verre.** » (note : « Le se involontaire : **le locuteur devient victime**. C'est la façon normale de rapporter un accident. ») ; « Se me rompió el enchufe. » / « **J'ai cassé la prise.** » (note : « Le se involontaire : c'est la façon normale de rapporter un dégât domestique. »)
- **Problème** : la passe 1 avait relevé la seconde carte ; la première est identique, et sa note se contredit **dans la même ligne** — « le locuteur devient victime », et le français dit « j'ai cassé », c'est-à-dire l'aveu. Le cours de `vocabulaire-oficios.ts` oppose pourtant formellement les deux (« He roto el vaso : l'aveu, le locuteur s'accuse » / « Se me rompió el vaso : le locuteur est victime ») — sur le **même exemple**, *el vaso*. Le module contient donc, sur une seule phrase, la bonne analyse dans un cours et sa traduction inverse dans deux cartes. Avec « No se te caiga » / « Ne le fais pas tomber » (`sensaciones.ts`, relevé plus haut), cela fait trois cartes sur trois qui traduisent l'involontaire par du volontaire : le point n'est jamais correctement rendu dans tout le module.
- **Correction proposée** : traduire partout par une tournure française non agentive — « Le verre s'est cassé. » / « La prise a lâché. » / « Attention, ne le laisse pas tomber. » — et réserver « j'ai cassé le verre » à une carte *He roto el vaso* qui montrerait le contraste.

### [MOYEN] Cinq nouvelles paires de cartes jumelles à deux niveaux, relevées à la machine puis vérifiées
- **Où** :
  - « No creo que sea buena idea. » (`expresiones.ts:213` — `es-expr-acuerdo`, note : « La négation appelle le subjonctif : sea, jamais es. ») contre « No creo que sea la mejor solución. » (`vocabulaire-c1.ts:253` — `es-c1-academico`, C1, note : « La négation appelle le subjonctif. “No creo que es” s'entend comme une faute. ») — même construction, même règle, même glose.
  - « Me alegro de verte. » (`formacion-palabras.ts:313` — `es-infinitivo-subjuntivo`) contre « Me alegro de verte otra vez. » (`oral-interaccion.ts:335` — `es-charla-social`) — deux fichiers du périmètre.
  - « ¿Lo dejamos para otro día? » (`expresiones.ts:121` — `es-expr-cortesia`) contre « ¿Lo dejamos para otro momento? » (`oral-interaccion.ts:269` — `es-desacuerdo-cortes`, C1) — et les deux notes disent la même chose (« la contre-proposition » / « souvent une façon de ne jamais y revenir »).
  - « Llegaron a un acuerdo. » (`perifrasis-colocaciones.ts:382` — `es-colocaciones-academicas`) contre « Llegaron a un acuerdo extrajudicial. » (`vocabulaire-oficios.ts:618` — `es-c1-derecho`) — deux fichiers du périmètre, même collocation enseignée deux fois.
  - « Hay que rehacer el tejado. » (`vocabulario-sociedad.ts:261` — `es-voc-arquitectura`, périmètre) contre « Hay que rehacer el tejado del granero. » (`mundo-2.ts:71` — `es-voc-agricultura`) — la même phrase à un complément près, avec deux notes sans rapport.
  S'ajoutent deux cartes quasi identiques hors périmètre qui portent la règle du lieu citée plus haut : « Están en casa. » (`conjugaison.ts:88`) / « Está en casa. » (`faux-amis.ts:117`), même phrase, même note.
- **Problème** : le module n'a aucun garde-fou contre la reprise d'une carte d'un niveau à l'autre. Avec les doublons déjà relevés en passe 1 (santé A2/B2, registre C1/C2, *sensato*, *filtración*, *Dicho esto*, *enmudecer*, *plantear*, *zanjar*, *quisiera*, *como si*, *la muestra*, *ahorita*, *tomar el pelo*, *meter la pata*, périphrases verbales, ser/estar B1-C1, *acusación infundada*, `es-pasiva-avanzada`/`es-se-impersonal`, `es-infinitivo-subjuntivo`/`es-concordancia`), on arrive à **une trentaine de reprises identifiées**, dont quatre séries entières. L'ordre de grandeur est celui relevé en anglais avancé (huit séries entières) et en espagnol débutant (quatre).
- **Correction proposée** : passer le dossier `espagnol/` à un contrôle automatique sur les quatre premiers mots de chaque `etranger` — c'est ce qui a produit cette liste en une seconde — et statuer sur chaque paire avant d'ajouter de nouvelles séries.

### [MOYEN] Deux dictées étiquetées « accent mexicain » sont écrites en espagnol d'Espagne
- **Où** : `dictees.ts:28-35` (thème « Demander son chemin », `accent: "es-MX"`) et `:60-67` (thème « Au bureau », `accent: "es-MX"`)
- **Texte** : « Perdone, ¿me puede decir dónde está la estación? […] ¿Está lejos de aquí o se puede ir **andando**? » ; « La reunión no salió como esperábamos. […] **Quedamos en** vernos otra vez el jueves. »
- **Problème** : le fichier s'ouvre sur cet avertissement — « L'accent alterne entre l'Espagne et l'Amérique latine. **Ce n'est pas cosmétique** : le seseo, le vocabulaire et le vouvoiement pluriel diffèrent assez pour qu'une oreille habituée à un seul des deux soit perdue devant l'autre. » Il annonce donc que le lexique suit l'accent — et deux textes sur quatre le démentent. *Ir andando* est péninsulaire : au Mexique on dit *ir caminando*, et le module l'enseigne lui-même (`registres.ts` donne le couple *caminar / andar*). *Quedar en + infinitif* pour convenir d'un rendez-vous est également d'Espagne ; le Mexique dit *quedar de vernos*. L'apprenant entend une voix mexicaine prononcer des tournures qu'un Mexicain n'emploierait pas — exactement le mélange que le module s'interdit ailleurs.
- **Correction proposée** : « …¿Está lejos de aquí o se puede ir caminando? » ; « …Quedamos de vernos otra vez el jueves. » — ou basculer les deux dictées en `accent: "es-ES"`.

### [MOYEN] Aucune dictée au-dessus de B2 : la moitié avancée du module n'en a aucune
- **Où** : `dictees.ts`, les dix dictées
- **Problème** : les niveaux vont de A1 à B2, et les séries visées sont `es-presentation`, `es-quotidien`, `es-voyage`, `es-conj-passes`, `es-travail`, `es-ser-estar`, `es-conj-subjonctif`, `es-por-para` — toutes des séries de base. **Aucune des quelque soixante séries C1 et C2 du périmètre** n'a de dictée : ni la presse, ni le droit, ni l'écrit académique, ni l'ironie, ni les registres, ni le subjonctif imparfait, qui est pourtant le point le plus difficile à écrire de tout le module (accents de *hubiéramos*, *supiera*, *lloviera*). L'exercice de dictée s'arrête là où la difficulté orthographique commence.
- **Correction proposée** : ajouter au moins trois dictées C1/C2 — une de presse (titres elliptiques et *se* impersonnel), une d'écrit académique (subjonctif et concordance), une de récit littéraire (passé simple et imparfait du subjonctif) — et les rattacher à `es-c1-prensa`, `es-c1-academico`, `es-subjuntivo-imperfecto`.

### [MINEUR] La seule dictée qui contient un *para* n'est pas celle qui est rangée sous « por / para »
- **Où** : `dictees.ts:76-83` (thème « Le subjonctif en situation », `series: ["es-conj-subjonctif"]`) et `:84-91` (`series: ["es-por-para"]`)
- **Texte** : « Cuando llegues, avísame **para que** vaya a buscarte. » — contre le texte rangé sous *por / para*, qui n'en contient aucun.
- **Problème** : complément au constat de la passe 1. Le texte étiqueté *por/para* n'a ni *por* ni *para* ; celui qui en a un est étiqueté subjonctif. Il aurait suffi d'ajouter la seconde série à la dictée du subjonctif pour que le point soit travaillé.
- **Correction proposée** : `series: ["es-conj-subjonctif", "es-por-para"]` sur la dictée « Cuando llegues », et rattacher la dernière dictée à `es-conj-subjonctif`.

### [MINEUR] Virgule manquante devant *pero* dans une dictée
- **Où** : `dictees.ts:36-43` — « Raconter un week-end »
- **Texte** : « Hacía frío **pero** el cielo estaba despejado, y caminamos durante horas por la playa. »
- **Problème** : dans un exercice où l'apprenant écrit sous la dictée, la ponctuation est notée. L'usage espagnol met une virgule devant *pero* coordonnant deux propositions — et le texte en met une, à tort, devant le *y* qui suit. Les deux virgules sont inversées.
- **Correction proposée** : « Hacía frío, pero el cielo estaba despejado y caminamos durante horas por la playa. »

### [GRAVE] Le module se contredit sur *afectar* : « la préposition est obligatoire » contre « sans préposition en Espagne »
- **Où** : `avance.ts:138` — `es-presse`, carte « La huelga afecta al transporte público. » ; contre `dominios-3.ts:202-204` — `es-voc-astronomia`, carte « Las erupciones solares afectan las comunicaciones. »
- **Texte** : « La huelga afecta **al** transporte público. » / note « **Afectar a : la préposition est obligatoire.** » — contre « Las erupciones solares afectan las comunicaciones. » / note « **Afectar sans préposition en Espagne**, afectar a aussi. »
- **Problème** : complément direct au constat de la passe 1 sur `dominios-3.ts`. Les deux cartes ne se contentent pas de diverger : elles énoncent la règle inverse l'une de l'autre, avec le même verbe et la même construction. L'une dit « obligatoire », l'autre « sans préposition en Espagne ». La première a raison pour l'usage péninsulaire ; la seconde est fausse et, de surcroît, écrit sa phrase sans le *a* qu'elle prétend décrire. Un apprenant qui révise les deux séries ne peut qu'en conclure qu'il n'y a pas de règle.
- **Correction proposée** : aligner sur la formulation d'`avance.ts` — « Afectar **a** : la préposition est la règle en Espagne. En Amérique, on entend aussi afectar sans préposition. » — et corriger la carte de `dominios-3.ts` en conséquence.

### [MOYEN] Une série de dix cartes où trois notes nomment la variante régionale sans l'accepter
- **Où** : `avance.ts:48-59` — `es-maison-ville` (A2), et `:30` — `es-sante-corps`
- **Texte** : « Busco un piso de dos habitaciones. » / note « **Piso en Espagne, departamento en Amérique latine.** » ; « ¿Cuánto es el alquiler? » / note « **Alquiler en Espagne, renta au Mexique.** » ; « El casero no contesta. » / note « Casero, le bailleur ; **propietario est plus neutre**. » ; et « Me encuentro mal. » / note « Encontrarse pour l'état ; **sentirse est aussi correct**. »
- **Problème** : quatre cartes, quatre variantes nommées, zéro `aussiEtranger`. La dernière est la plus nette : la note écrit « sentirse est aussi correct », et *No me siento bien* — la traduction la plus directe de « Je ne me sens pas bien » — sera comptée fausse. C'est le motif que l'audit de l'espagnol débutant a chiffré à 24 cartes ; sur la moitié avancée, j'en ai maintenant relevé **dix-huit** (quatre ici, six dans `sensaciones.ts`, sept dans `oral-interaccion.ts` dont quatre dans la seule série du téléphone, six dans `dominios-3.ts`, plus celles de `registres.ts`, `vocabulaire-ideas.ts` et `vocabulaire-c1.ts` déjà citées en passe 1) — et **trois** qui refusent une réponse que leur propre note déclare correcte ou meilleure : *sentirse* ici, *desbordado* dans `dominios-3.ts`, *un mensaje* dans `oral-interaccion.ts`. Le compte est le même que côté débutant, à l'unité près.
- **Correction proposée** : traiter ces dix-huit cartes en priorité — la variante à mettre dans `aussiEtranger` est déjà écrite dans la note, il n'y a rien à chercher.

### [MOYEN] Les onze seules cartes sans note de tout le périmètre sont dans le même fichier
- **Où** : `avance.ts` — `:28`, `:29`, `:32`, `:55`, `:112`, `:114`, `:115`, `:118`, `:142`, `:143`, `:167`
- **Texte** : « ¿Tiene algo para el dolor de cabeza? », « Soy alérgico a la penicilina. », « ¿Dónde está la farmacia de guardia? », « ¿Los gastos están incluidos? », « Llevo dos horas esperando. », « Acabo de hablar con ella. », « Dejé de fumar hace un año. », « Está a punto de salir. », « El acuerdo entró en vigor el lunes. », « La cifra supera las previsiones. », « Depende de cómo lo mires. »
- **Problème** : sur les 1 120 cartes du périmètre, **1 109 ont une note et 11 n'en ont pas** — les onze sont dans `avance.ts`, soit 22 % de ce fichier. Ce n'est pas une omission dispersée mais un fichier écrit selon une autre convention. Or plusieurs de ces cartes portent justement un point à expliquer : *soy alérgico* (ser et non estar pour une allergie), *farmacia de guardia* (l'institution espagnole), *los gastos* (les charges, faux ami de « les frais »), *entrar en vigor* (sans article), *depende de cómo* (l'interrogatif accentué après préposition).
- **Correction proposée** : compléter les onze notes ; ce sont les seules manquantes du périmètre, l'effort est borné.

### [MOYEN] « Le gérondif ne s'emploie pas comme un nom, contrairement à l'anglais et parfois au français »
- **Où** : `avance.ts:104-106` — `es-nuances-temps`, cours, section « Le gérondif, et ce qu'il ne fait pas »
- **Texte** : « Surtout, il ne s'emploie jamais comme un nom, contrairement à **l'anglais et parfois au français** : “fumer est mauvais” se dit fumar es malo, avec l'infinitif, jamais “fumando es malo”. »
- **Problème** : le français ne le fait **jamais** — « fumant est mauvais » est impossible, et le français emploie exactement le même infinitif que l'espagnol (« fumer est mauvais » / *fumar es malo*), comme l'exemple donné le montre lui-même. La seule langue concernée est l'anglais (*smoking is bad*). Le « parfois au français » invente une faute que l'apprenant ne peut pas commettre, et brouille la seule chose utile à retenir : sur ce point, français et espagnol font pareil. C'est le troisième cours du module où un piège anglais est présenté comme un piège français, après *escuchar* (`cours-usage.ts`) et *actualmente* (`oral-interaccion.ts`).
- **Correction proposée** : « Surtout, il ne s'emploie jamais comme un nom : “fumer est mauvais” se dit fumar es malo, avec l'infinitif comme en français, jamais “fumando es malo”. C'est l'anglais qui met ici un gérondif. »

### [MINEUR] Un quatrième français pour *o sea*, et un troisième « loin de là »
- **Où** : `avance.ts:165` et `:168` — `es-nuances-b2`
- **Texte** : « O sea, que no vienes. » / « **Donc**, tu ne viens pas. » — contre `oral-interaccion.ts:38` « O sea, no es tan sencillo. » / « **Enfin**, ce n'est pas si simple. » ; et « Ni mucho menos. » / « **Loin de là.** » — contre `formacion-palabras.ts`, où *ni de lejos* et *ni mucho menos* reçoivent déjà tous deux la même glose.
- **Problème** : *o sea* reçoit maintenant trois traductions françaises dans le module (« Enfin », « Donc », et la reformulation annoncée par la note), et « Loin de là » traduit trois expressions espagnoles différentes. En production, aucune de ces cartes n'accepte les autres.
- **Correction proposée** : fixer un français par marqueur — *o sea* → « Je veux dire / C'est-à-dire » ; *ni mucho menos* → « Loin de là » ; *ni de lejos* → « Pas même de loin » — et renseigner `aussiEtranger` en croisé.

### [MINEUR] Deux cartes qui ne sont pas des phrases dans une série marquée pour la dictée et la prononciation
- **Où** : `avance.ts:136` et `:140` — `es-presse` (`oral: true, parle: true`)
- **Texte** : « según fuentes oficiales » / « selon des sources officielles » ; « según los últimos datos » / « d'après les derniers chiffres »
- **Problème** : ce sont des syntagmes, sans verbe, sans majuscule et sans ponctuation finale, au milieu de huit cartes qui sont des phrases complètes. À la dictée, l'apprenant ne sait pas s'il doit mettre une majuscule ni un point ; à la prononciation, l'intonation d'un fragment n'a pas de modèle. Les deux formules méritent d'être enseignées — dans une phrase.
- **Correction proposée** : « Según fuentes oficiales, el acuerdo está cerrado. » ; « Según los últimos datos, el paro ha bajado. »

### [MINEUR] Une note qui répète l'astuce, sur une carte qui n'illustre pas la règle
- **Où** : `avance.ts:43` (tip) et `:52` (carte) — `es-maison-ville`
- **Texte** : tip « Le verbe haber impersonnel se dit hay au présent, et **ne se met jamais au pluriel** : hay un coche, hay tres coches. » → carte « Hay mucho ruido por la noche. » / note « **Hay ne se met jamais au pluriel.** »
- **Problème** : la note recopie l'astuce — même défaut que les six séries d'`oral-interaccion.ts` relevées plus haut — et la carte choisie ne montre pas la règle : *mucho ruido* est un singulier, si bien que rien n'y contredit le pluriel. La seule phrase qui prouverait le point (*hay tres coches*) est dans l'astuce, pas dans les cartes.
- **Correction proposée** : carte « Hay tres bares en la misma calle. » / note « Hay reste invariable, même devant un pluriel : jamais “han tres bares”. »

### [GRAVE] Cinq cartes du module traduisent « Bref » par cinq marqueurs espagnols différents — et *o sea* en reçoit quatre
- **Où** : `registres.ts:179` et `:190` — `es-conectores-orales` ; `oral-interaccion.ts:53`, `:365`, `:385` ; et pour *o sea* : `registres.ts:154`, `avance.ts:165`, `oral-interaccion.ts:38`
- **Texte** : « Vamos, que no vale la pena. » / « **Bref**, ça n'en vaut pas la peine. » ; « Total, que al final no fuimos. » / « **Bref**, finalement on n'y est pas allés. » ; « En fin, ¿por dónde íbamos? » / « **Bref**, où en étions-nous ? » ; « Total, que lo perdimos. » / « **Bref**, on l'a raté. » ; « Bueno, ahí fue cuando lo entendí. » / « **Bref**, c'est là que j'ai compris. » — et pour *o sea* : « **C'est-à-dire que** je ne suis pas d'accord. », « **Donc**, tu ne viens pas. », « **Enfin**, ce n'est pas si simple. »
- **Problème** : la passe 1 avait trouvé trois « Bref » dans un seul fichier ; il y en a **cinq** dans le module, pour quatre marqueurs distincts (*vamos que*, *total que*, *en fin*, *bueno*), et *total que* est en outre enseigné **deux fois**, dans deux fichiers, avec la même structure de phrase. Symétriquement, *o sea* reçoit trois françaises différentes sur trois cartes réparties dans trois fichiers. L'exercice de production devient un tirage au sort : « Bref, … » a cinq réponses justes dont une seule est acceptée, et laquelle dépend de la carte tirée. Aucune de ces huit cartes ne porte d'`aussiEtranger`. C'est le défaut central du module ramené à un seul mot français.
- **Correction proposée** : un français distinct par marqueur — *o sea* « C'est-à-dire », *en fin* « Bref », *total que* « Résultat », *vamos que* « En somme », *bueno* « Bon » — et un `aussiEtranger` croisé sur chacune, puisque les cinq restent interchangeables dans beaucoup de contextes. Supprimer par ailleurs l'un des deux *total que*.

### [MOYEN] Le tableau des régionalismes et les notes de ses propres cartes ne disent pas la même chose
- **Où** : `registres.ts:35-47` (tableau du cours) contre `:99-101`, `:128-132`
- **Texte** : tableau — `["l'argent", "dinero", "dinero / lana", "plata"]`, `["la veste", "chaqueta", "saco", "campera / saco"]` ; notes de cartes — « **Plata dans presque toute l'Amérique** ; dinero partout ; pasta, familier, en Espagne. » et « Saco, la veste en Amérique ; chaqueta en Espagne, **où saco veut dire sac**. »
- **Problème** : (1) le tableau donne *lana* et *dinero* pour le Mexique et réserve *plata* au Cône Sud ; la note de carte étend *plata* à « presque toute l'Amérique ». L'apprenant a les deux sous les yeux dans la même série. (2) *saco* signifie « sac » **partout**, en Amérique comme en Espagne — *un saco de patatas*, *un saco de dormir* ; la note en fait une particularité péninsulaire, ce qui est faux et laisse croire qu'en Amérique le mot n'a plus ce sens. (3) Le troisième visuel du cours ajoute une troisième version : « plata — naturel en Amérique, **familier en Espagne** », alors que la note de carte range en Espagne *pasta*, pas *plata*.
- **Correction proposée** : aligner sur le tableau — note de carte « Plata dans le Cône Sud et une bonne partie de l'Amérique ; lana au Mexique ; dinero partout ; pasta, familier, en Espagne. » ; et « Saco, la veste de costume en Amérique ; chaqueta en Espagne. Le sens “sac” (un saco de patatas) existe partout. »

### [MOYEN] Le cours sait que l'Andalousie et les Canaries font exception, puis l'oublie deux paragraphes plus loin
- **Où** : `registres.ts:83` — `es-regionalismos`, cours, section « Reconnaître d'où vient celui qui parle »
- **Texte** : « Vosotros habláis marque l'Espagne, **sauf les Canaries et l'Andalousie occidentale**. […] Le troisième est la prononciation du c et du z. **En Espagne**, cinco se prononce avec un th anglais ; partout ailleurs, comme un s. »
- **Problème** : complément au constat de la passe 1 sur le *seseo*. La même section, trois paragraphes plus haut, sait parfaitement que les Canaries et l'Andalousie occidentale ne suivent pas la norme péninsulaire — et elle l'écrit. Puis elle donne la prononciation du *c* comme un trait de « l'Espagne » sans exception, alors que la zone qui ne distingue pas est exactement la même. L'incohérence est interne à un seul paragraphe de texte.
- **Correction proposée** : « En Espagne — sauf, là encore, les Canaries et une bonne partie de l'Andalousie —, cinco se prononce avec un th anglais. »

### [MOYEN] La règle sur *coger* est donnée avec précision dans un fichier et généralisée à tort dans deux autres
- **Où** : `registres.ts:18` et `:54` ; contre `vocabulario-vida.ts:102` et `sensaciones.ts:485`
- **Texte** : `registres.ts` — « Coger est neutre en Espagne et vulgaire **dans le Cône Sud et au Mexique** » / « En Argentine, en Uruguay, au Mexique **et dans plusieurs pays voisins** » ; contre « Coger en Espagne, tomar **en Amérique latine** — où coger est franchement vulgaire. » et « Coger se dit en Espagne, **à éviter en Amérique latine**. »
- **Problème** : le module possède la bonne formulation — le tabou est régional, pas continental ; *coger* reste banal au Pérou, en Bolivie, en Colombie et dans une bonne partie des Caraïbes — et il la donne dans la série dont c'est le sujet. Deux autres fichiers le remplacent par « en Amérique latine », qui est faux et fabrique une prudence inutile sur la moitié du continent. Le visuel du même cours dit d'ailleurs plus grossièrement encore : « coger — neutre en Espagne, **obscène ailleurs** ».
- **Correction proposée** : reprendre partout la formulation du cours (« en Argentine, en Uruguay, au Mexique et dans plusieurs pays voisins »), y compris dans le visuel « Ce qu'on dit, ce qu'on évite ».

### [MINEUR] Une note recopiée d'un fichier à l'autre, avec un désaccord de genre au passage
- **Où** : `registres.ts:169-171` — `es-conectores-orales` et `expresiones.ts:118` — `es-expr-cortesia`
- **Texte** : « Es que introduit une justification. **Sans lui**, la phrase paraît sèche. » contre « Es que introduit la justification et adoucit le refus. **Sans elle**, il paraît sec. »
- **Problème** : la même note à deux endroits, avec deux pronoms de reprise différents pour le même *es que* — et dans la seconde, « elle » et « il » ne renvoient à rien de clair. Le point *es que* est en outre enseigné une troisième fois dans `oral-interaccion.ts` (« Es que… no sé »).
- **Correction proposée** : garder une seule carte et une seule note : « Es que introduit la justification et adoucit le refus. Sans ce mot, la phrase paraît sèche. »

### [MINEUR] « On est sortis genre tranquillement »
- **Où** : `registres.ts:163-167` — `es-conectores-orales`
- **Texte** : « Salimos en plan tranquilo. » / « On est sortis **genre tranquillement**. » / note « En plan, très espagnol et très jeune : l'équivalent exact du “genre” français. »
- **Problème** : la traduction n'est pas du français. « Genre » s'emploie devant un groupe nominal ou en incise (« on est sortis, genre, tranquille »), pas comme modifieur d'un adverbe. Et *en plan tranquilo* veut dire « sans se prendre la tête », « peinard » — l'idée est celle du mode, pas de la manière.
- **Correction proposée** : « On est sortis peinards. » avec `aussi: ["On est sortis, genre, tranquille."]`.

### [MINEUR] Deux cartes dont le français se recouvre presque, pour deux marqueurs différents
- **Où** : `registres.ts:200` — « Ya, pero no es tan fácil. » / « Oui, mais **ce n'est pas si simple**. » ; et `oral-interaccion.ts:38` — « O sea, no es tan sencillo. » / « Enfin, **ce n'est pas si simple**. »
- **Problème** : la même proposition française sert de traduction à deux cartes de deux fichiers, avec deux marqueurs différents en tête et deux adjectifs espagnols différents (*fácil* / *sencillo*), aucun des deux n'étant accepté par l'autre carte.
- **Correction proposée** : « Ya, pero no es tan fácil. » / « Oui, mais ce n'est pas si facile. » — et laisser « si simple » à *sencillo*.

### [MOYEN] « Jours et mois sans majuscule, contrairement à l'anglais » — la traduction française placée à côté écrit déjà tout en minuscules
- **Où** : `cours-usage.ts:215-216` — `es-cours-ecrire`
- **Texte** : « el lunes tres de mayo » / « **le lundi trois mai** » / note « Jours et mois sans majuscule, **contrairement à l'anglais**. » ; puis « Hablo español y francés. » / note « Les langues et les nationalités ne prennent pas de majuscule. »
- **Problème** : quatrième cas du même défaut, et le plus visible : la note oppose l'espagnol à l'anglais, et la traduction française imprimée sur la même ligne — « le lundi trois mai » — montre que le français fait exactement comme l'espagnol. La remarque n'apprend donc rien et détourne l'attention du seul point où le français **diffère** vraiment, qui est dans la carte suivante : le nom de nationalité prend la majuscule en français (« un Espagnol ») et pas en espagnol (*un español*), tandis que le nom de langue est minuscule dans les deux. C'est la seule règle de majuscule qu'un francophone risque de calquer, et c'est celle qui n'est pas dite.
- **Correction proposée** : « Jours et mois sans majuscule, comme en français. » ; et pour la seconde carte : « Les langues ne prennent pas de majuscule, comme en français — mais les noms de nationalité non plus : un español, là où le français écrit “un Espagnol”. »

### [MOYEN] « Quedo a la espera » : formule standard dans un fichier, formule proscrite dans un autre
- **Où** : `cours-usage.ts:221` — `es-cours-ecrire` ; contre `avance-b2.ts:407` — `es-trabajo-latam`, statement
- **Texte** : « Quedo a la espera de su respuesta. » / note « **Formule de clôture standard d'une lettre formelle.** » — contre « Un devis se dit cotización, un fichier archivo, et **l'on ne quedo a la espera mais quedo atento**. »
- **Problème** : la passe 1 avait relevé la phrase française amputée du statement ; l'ennui est plus profond. Telle qu'elle est écrite, elle interdit *quedo a la espera*, que l'autre fichier donne pour la formule standard — et la note de la carte voisine (`avance-b2.ts:422`) rétablit pourtant la vérité : « Formule de clôture latino-américaine. **En Espagne : quedo a la espera** de sus comentarios. » Le module a donc, sur trois lignes, la bonne analyse dans une note, son contraire dans un statement, et la formule interdite comme modèle dans un autre fichier. L'apprenant qui lit le statement apprendra à éviter une formule parfaitement correcte.
- **Correction proposée** : statement → « …et l'on n'écrit pas quedo a la espera, courant en Espagne, mais quedo atento. » ; et ajouter à la note de `cours-usage.ts` : « Formule de clôture standard en Espagne ; en Amérique, quedo atento a sus comentarios. »

### [MOYEN] Le cours de prononciation omet le son le plus caractéristique de l'espagnol d'Espagne
- **Où** : `cours-usage.ts:50-52` — `es-cours-accent`, section « Les sons qui piègent un francophone »
- **Texte** : la section traite la jota, le *h* muet, le couple *b/v*, le *r* roulé et le *ñ*. Elle ne dit **rien du c et du z**.
- **Problème** : *gracias*, *cinco*, *zapato*, *plaza* — le /θ/ péninsulaire est le premier son qu'un francophone entend et le premier qu'il ne sait pas produire, et c'est aussi celui qui partage le monde hispanophone en deux. Il est traité une seule fois dans tout le module, dans `registres.ts`, et de façon fautive (le *seseo* confondu avec le *ceceo*, constat de la passe 1). Le seul cours de prononciation du module n'en parle pas. Symétriquement, la jota y est donnée comme « un raclement de gorge » sans dire qu'elle s'adoucit en une simple aspiration dans les Caraïbes et une bonne partie de l'Amérique centrale — dans un module dont le cours voisin affirme que « le castillan de Madrid n'est pas la norme ».
- **Correction proposée** : ajouter au cours un paragraphe : « Le c devant e ou i, et le z partout, se prononcent en Espagne comme le th anglais de think : cinco, gracias, zapato. Dans toute l'Amérique, aux Canaries et dans une bonne partie de l'Andalousie, ils se prononcent comme un s — c'est le seseo. Les deux sont corrects ; il faut en choisir un et s'y tenir. »

### [MINEUR] Une ligne de tableau qui ne répond pas à la colonne
- **Où** : `cours-usage.ts:33-40` — `es-cours-accent`, tableau « La règle, et ce qui la signale »
- **Texte** : colonnes `["Fin du mot", "Accent attendu", "Exemple", "Exception écrite"]` ; dernière ligne `["antépénultième", "toujours écrit", "—", "música, rápido"]`
- **Problème** : « antépénultième » n'est pas une fin de mot, et « toujours écrit » n'est pas un accent attendu : la ligne décrit la position de l'accent, pas la terminaison. Elle rompt la logique des quatre lignes précédentes et met un tiret dans la colonne « Exemple » — la seule case vide du tableau — alors que ses exemples sont rangés sous « Exception écrite ». Le lecteur doit reconstruire la ligne pour la comprendre.
- **Correction proposée** : sortir la ligne du tableau et la mettre en note dessous : « Et tout accent porté sur l'antépénultième syllabe s'écrit, sans exception : música, rápido, teléfono. »

### [MINEUR] « Vosotros — Espagne uniquement », sans l'exception que le module connaît
- **Où** : `cours-usage.ts:76` (tip), `:87` (cours) et `:130` (carte) ; contre `registres.ts:83`
- **Texte** : « Vosotros, tutoiement pluriel — **en Espagne seulement** » / « Vosotros, tutoiement pluriel — **Espagne uniquement** » — contre « Vosotros habláis marque l'Espagne, **sauf les Canaries et l'Andalousie occidentale**. »
- **Problème** : même schéma que pour le *coger* et le *seseo* : le module détient la formulation exacte dans un fichier et la simplifie à l'excès dans un autre, trois fois de suite (tip, cours, carte). Aux Canaries et dans l'Andalousie occidentale, *ustedes* couvre tous les pluriels comme en Amérique — c'est le seul point où la carte « Ustedes vienen mañana » vaut aussi pour l'Espagne.
- **Correction proposée** : ajouter partout « (sauf les Canaries et l'Andalousie occidentale) », ou au moins dans le cours, qui est le lieu de la nuance.

### [GRAVE] « L'adjectif “informe” du français se dit deforme » — c'est *informe* qui le dit
- **Où** : `avance-b2.ts:524-528` — `es-falsos-amigos-tecnicos`, carte « El informe es muy extenso. »
- **Texte** : note « Informe, le rapport. **L'adjectif “informe” du français se dit deforme.** »
- **Problème** : faux, et dans une série dont le sujet même est de ne pas se tromper de mot. L'espagnol possède l'adjectif *informe* avec exactement le sens du français : le DLE donne « informe : de forma vaga e indeterminada » — *una masa informe*, *un bulto informe*. *Deforme* veut dire tout autre chose : difforme, déformé. La carte enseigne donc, dans une série sur les faux amis « où le contresens engage », un faux ami qui n'existe pas, et fournit à sa place une traduction erronée. Le point réellement intéressant est que *informe* est en espagnol à la fois un nom (le rapport) et un adjectif (informe), et que c'est le **nom** qui est le faux ami.
- **Correction proposée** : « Informe, le rapport — c'est le nom qui piège. L'adjectif informe existe aussi en espagnol, avec le même sens qu'en français : una masa informe. »

### [MOYEN] « Le a ne se met que devant une personne », démenti par la dernière carte de la même série
- **Où** : `avance-b2.ts:337` (note du tableau) contre `:394-398` (carte 10) — `es-se-impersonal`
- **Texte** : note du tableau « “Se venden a los pisos” n'existe pas : **le a ne se met que devant une personne.** » — contre la carte « En Chile se le dice palta **al aguacate**. » / note « Impersonnel avec pronom indirect, **parce que le complément est introduit par a**. »
- **Problème** : l'apprenant lit dans le tableau que le *a* est réservé aux personnes, puis rencontre huit lignes plus loin *al aguacate*, qui est un fruit. Les deux *a* n'ont rien à voir : celui de la carte est un datif (*decirle X a algo*, *llamarle X a algo*), pas le *a* personnel. Rien ne le dit, et la note de la carte entretient la confusion en invoquant précisément « le complément est introduit par a » comme s'il s'agissait de la même règle. C'est le point le plus fin de toute la série, et il est expliqué à l'envers.
- **Correction proposée** : note de la carte → « Le a de al aguacate n'est pas le a personnel mais celui de decirle algo a algo : le complément passe au datif, d'où le le et le singulier. » ; et note du tableau → « Le a personnel ne se met que devant une personne — le a du datif, lui, se met devant n'importe quoi. »

### [MOYEN] `es-trabajo-latam` : quatre cartes sur dix nomment la variante d'Espagne et n'en acceptent aucune
- **Où** : `avance-b2.ts:419-458` — `es-trabajo-latam`
- **Texte** : « Quedo atento a sus comentarios. » / note « **En Espagne : quedo a la espera de sus comentarios.** » ; « Adjunto el archivo solicitado. » / note « Archivo, le fichier ; **fichero surtout en Espagne. Anexo dans certains pays.** » ; « Coordinemos una reunión para el jueves. » / note « **En Espagne, on dit convocar.** » ; « ¿Me puede pasar la cotización? » / note « Cotización, le devis en Amérique latine ; **presupuesto en Espagne**. »
- **Problème** : c'est la deuxième série entière du module bâtie sur l'opposition Espagne / Amérique qui n'accepte qu'un seul des deux termes, après `es-telefono-atencion` — et ici le déséquilibre est inversé : seul l'usage américain est admis. Un apprenant qui a révisé le reste du module en espagnol péninsulaire — ce que fait la quasi-totalité des séries — produira *presupuesto*, *fichero*, *convocar*, *quedo a la espera*, et sera compté faux quatre fois sur dix. Le français des cartes ne donne aucun indice de continent.
- **Correction proposée** : renseigner `aussiEtranger` sur les quatre cartes, ou faire figurer le continent dans la consigne française (« Pouvez-vous m'envoyer le devis ? *(Amérique)* »).

### [MOYEN] « Le français tolère “si j'aurais” »
- **Où** : `avance-b2.ts:52-55` — `es-subjuntivo-imperfecto`, cours, section « L'hypothèse et le regret »
- **Texte** : « La règle qui sauve tient en une ligne : après si, jamais de conditionnel ni de futur. Ni “si tendría”, ni “si tendré”. **L'espagnol y est plus strict que le français, qui tolère “si j'aurais” dans la bouche de certains.** »
- **Problème** : le français ne le tolère pas : « si j'aurais » est la faute de français la plus notoire qui soit, celle qu'on cite en exemple, et aucune norme ne l'admet. Présenter le français comme plus permissif sur ce point désoriente exactement l'apprenant qu'on veut aider : sa langue lui donne ici le bon réflexe, et le cours lui dit le contraire. La comparaison utile est l'inverse — français et espagnol interdisent tous deux le conditionnel après *si*, ce qui rend la règle espagnole facile à installer.
- **Correction proposée** : « La règle qui sauve tient en une ligne : après si, jamais de conditionnel ni de futur. Ni “si tendría”, ni “si tendré”. Le français a exactement la même règle — “si j'aurais” y est aussi fautif —, ce qui rend celle-ci facile à retenir. »

### [MOYEN] « La règle n'a pas d'exception » — elle en a une, et le module ne la donne nulle part
- **Où** : `avance-b2.ts:83` — `es-subjuntivo-imperfecto`, note du tableau « Les deux moitiés de l'hypothèse »
- **Texte** : « Après si, ni conditionnel ni futur. **La règle n'a pas d'exception en espagnol.** »
- **Problème** : elle vaut pour le *si* de condition, pas pour le *si* interrogatif indirect — celui qui traduit « si » au sens de « oui ou non ». *No sé si vendrá*, *Me preguntó si vendría*, *Pregúntale si podrá venir* : futur et conditionnel y sont non seulement possibles mais obligatoires. C'est une confusion classique et coûteuse, puisque les deux *si* s'écrivent pareil. Le module n'enseigne ce second *si* nulle part — aucune carte du dossier `espagnol/` n'en contient — si bien que l'apprenant sort avec une règle absolue et sans l'exception.
- **Correction proposée** : note → « Après le si de condition, ni conditionnel ni futur. Le si qui veut dire “oui ou non” est un autre mot : No sé si vendrá, Me preguntó si vendría — là, futur et conditionnel sont normaux. » ; et ajouter une carte au lot.

### [MOYEN] Quatre-vingt-quatre « jamais » et quarante-neuf « toujours » : un module qui interdit plus qu'il n'explique
- **Où** : tout le périmètre — 84 occurrences de « jamais », 49 de « toujours » ou « sans exception » dans les notes et les cours des dix-sept fichiers de cartes
- **Texte** : parmi celles que j'ai vérifiées et qui sont fausses ou trop fortes : « trabajar ne s'emploie **que** pour les personnes » (`avance.ts`), « on ne dit **jamais** estoy siendo » (`avance.ts`), « le a ne se met **jamais** après tener » (`cours-usage.ts`), « votar por, **jamais** en Espagne » (`vocabulaire-ideas.ts`), « **jamais** éventuellement » (`vocabulaire-oficios.ts`), « un milieu fragile, **jamais** sensible » (`vocabulaire-oficios.ts`), « agradezco por, **jamais** » (`avance-b2.ts`), « muy horrible est exclu » (`vocabulaire-ideas.ts`), « alicates et tijeras sont **toujours** au pluriel » (`vocabulaire-oficios.ts`), « le a ne se met **que** devant une personne » (`avance-b2.ts`), « la règle n'a pas d'exception » (`avance-b2.ts`), « une phrase se dit frase, **jamais** sentencia » (`avance-b2.ts` — or *una sentencia de Séneca* est une maxime), « les deux ne s'échangent **jamais** » pour sembrar/plantar (`dominios-3.ts`), « **toujours** estar » pour le lieu (`faux-amis.ts`), « resonar : la préposition est con, **jamais** de » (`sensaciones.ts`).
- **Problème** : ce n'est plus une série d'accidents mais une habitude de rédaction. Chaque « jamais » vérifié à la source s'est révélé soit faux, soit vrai à 90 %. Le coût est double : l'apprenant apprend une interdiction fausse, et il perd confiance dans les « jamais » qui, eux, sont justes — celui du *a* après *si*, celui du gérondif après préposition, celui de l'accord de *hay*. Un module qui interdit quinze fois à tort décrédibilise ses vraies règles.
- **Correction proposée** : passer les 133 occurrences en revue et ne garder « jamais » et « toujours » que là où la règle est réellement sans exception ; ailleurs, écrire « presque toujours », « dans l'usage courant », « à éviter ». C'est une relecture mécanisable, et c'est probablement la plus rentable du lot.

### [MINEUR] Un caractère parasite dans le visuel qui enseigne la conjugaison
- **Où** : `avance-b2.ts:44` — `es-subjuntivo-imperfecto`, visuel « Former le subjonctif imparfait, en trois gestes »
- **Texte** : titre de la troisième étape — « Ajouter -ra, -ras, -ra, **-´ramos**, -rais, -ran »
- **Problème** : le `-´ramos` est une notation d'auteur (l'accent écrit signalé par une apostrophe) qui s'affiche telle quelle à l'apprenant, au milieu d'une liste de terminaisons à recopier. Le texte de l'étape donne pourtant la forme correcte deux lignes plus bas : *habláramos*. Le titre, lui, apprend une terminaison qui n'existe pas.
- **Correction proposée** : « Ajouter -ra, -ras, -ra, -ramos, -rais, -ran — la première personne du pluriel prend l'accent écrit : habláramos. »

### [MINEUR] Un sixième « comme en anglais », et la carte d'ouverture qui n'illustre pas sa règle
- **Où** : `avance-b2.ts:512` — `es-falsos-amigos-tecnicos` ; et `:349-352` — `es-se-impersonal`
- **Texte** : « Experimento, l'expérience scientifique ; experiencia, le vécu. **Comme en anglais.** » ; « Se habla español en veinte países. » / note « Passif réfléchi : **le verbe s'accorde avec español**, sujet grammatical. »
- **Problème** : (1) le français confond exactement les deux sens sous « expérience » — c'est *pour cela* que le couple est un faux ami pour un francophone. Renvoyer à l'anglais, qui fait la distinction comme l'espagnol, désigne la seule langue où il n'y a pas de piège. Sixième occurrence du procédé après *escuchar*, *actualmente*, le gérondif nominal, les majuscules de jours et mois, et *sensato / sensible*. (2) La carte d'ouverture de la série sur l'accord donne un sujet singulier et un verbe singulier : rien ne s'y accorde visiblement, et l'apprenant ne peut pas voir la règle à l'œuvre. La deuxième carte (*se venden pisos*) la montre, elle.
- **Correction proposée** : « Experimento, l'expérience scientifique ; experiencia, le vécu. Le français dit “expérience” pour les deux : c'est là qu'est le piège. » ; et permuter les deux premières cartes de `es-se-impersonal`.

### [GRAVE] Seize séries annoncent en tête un mot qu'aucune de leurs cartes ne contient
- **Où** : relevé automatique sur les quinze fichiers de cartes du périmètre, puis vérifié mot par mot dans le dossier `espagnol/` entier
- **Texte** : le `statement` de chaque série s'ouvre sur la liste des mots qu'elle promet d'enseigner. Ceux qui n'apparaissent dans **aucune** carte de la série :
  - `gramatica-c1.ts:es-c2-registro` — « Conseguir, **obtener, lograr, alcanzar** » : trois des quatre (déjà relevé en passe 1).
  - `gramatica-c1.ts:es-c1-diplomacia` — « **Lamentar**, deplorar, **condenar**, instar » : deux des quatre, et ce sont les deux barreaux extrêmes de l'échelle que le tip décrit (« du plus faible au plus fort : tomar nota, lamentar, deplorar, condenar »). *Tomar nota* et *condenar* n'existent nulle part ; la série enseigne donc une échelle dont on ne connaîtra jamais les extrémités.
  - `gramatica-c1.ts:es-c1-marketing` — « Alcance, interacción, **embudo**, fuga » : *embudo* n'est que dans une note, sur une carte qui ne le contient pas (« Perdemos usuarios en el segundo paso »).
  - `dominios-3.ts:es-voc-jardineria` — **desbrozar** (et *plantar*, promis par le tip) ; `es-voc-cocina-tecnica` — **sofreír**, à qui le tip consacre pourtant sa seule explication ; `es-voc-animales` — **manada** ; `es-voc-social` — **voluntariado**, **recaudación** et **acompañamiento** ; `es-voc-salud-mental` — **acompañamiento**.
  - `avanzado-c2.ts:es-c1-economia` — **cotizar** ; `vocabulaire-c1.ts:es-c1-academico` — **esbozar** ; `vocabulario-sociedad.ts:es-voc-musica` — **ensayar** ; `es-voc-seguridad` — **siniestro** ; `modismos-caracter.ts:es-verbos-habla` — **espetar** (relevé en passe 1) ; `es-adjetivos-caracter` — **detallista** ; `es-adjetivos-juicio` — **endeble** ; `precision.ts:es-regimen-preposicional` — **consistir en** (relevé en passe 1).
- **Problème** : la passe 1 avait pris ces cas pour des accidents isolés — trois séries. Le relevé systématique en donne **seize**, réparties sur huit fichiers. Six de ces mots (*cotizar*, *desbrozar*, *sofreír*, *detallista*, *esbozar*, *ensayar*) n'apparaissent **nulle part dans les trente-trois fichiers du dossier espagnol** : ils ont été écrits dans un titre et jamais enseignés. *Acompañamiento* est même la vedette de deux séries différentes et ne figure dans aucune carte du module. Or l'énoncé est ce que l'apprenant lit avant de commencer et ce qui décide s'il ouvre la série : la promesse est systématiquement plus large que le contenu.
- **Correction proposée** : le contrôle est mécanique — pour chaque série, vérifier que chaque mot du `statement` apparaît dans au moins une carte. Deux issues au choix, série par série : ajouter la carte manquante (c'est la meilleure : ces mots sont précisément ceux qui manquent au lot), ou réécrire l'énoncé sur ce que la série contient vraiment.

### [MOYEN] Un visuel annonce « deux emplois que le français ne fait pas », en donne trois, et le français les fait
- **Où** : `gramatica-c1.ts:359-378` — `es-cours-narrativo`, visuel « Deux emplois que le français ne fait pas »
- **Texte** : colonne Espagnol — « Quería preguntarte algo. » / « Creía que venías mañana. » / « ¿Qué querías? » ; colonne Français — « **Je voudrais** te demander quelque chose. » / « **Je croyais** que tu venais demain. » / « **Tu voulais** quoi ? »
- **Problème** : trois défauts empilés. (1) Le titre annonce deux emplois, la colonne en donne trois. (2) Les deuxième et troisième lignes montrent le français faisant **exactement** ce que l'espagnol fait : « je croyais que tu venais » et « tu voulais quoi ? » sont des imparfaits français aux mêmes valeurs. Le visuel prouve donc le contraire de ce qu'il annonce. (3) La seule ligne où les deux langues divergent — l'imparfait de politesse — est traduite par un conditionnel (« je voudrais ») alors que le français dit tout aussi bien « je voulais te demander quelque chose », comme la carte de la série le traduit elle-même (`:405-407` : « Quería preguntarte algo. » / « **Je voulais** te demander quelque chose. »). Le visuel et la carte ne donnent donc pas la même traduction du même exemple.
- **Correction proposée** : ramener le visuel à un seul contraste réel — l'imparfait espagnol du résumé de film (*en la película, el protagonista era un espía*, là où le français passe au présent) — et aligner la traduction de *quería preguntarte* sur celle de la carte.

### [MOYEN] Le tableau des trois ordres contredit la règle qu'il illustre
- **Où** : `gramatica-c1.ts:167-179` — `es-cours-orden-palabras`, tableau « La même phrase, trois ordres »
- **Texte** : règle énoncée juste au-dessus — « **l'information nouvelle va à la fin** » ; tableau — `["Juan llegó ayer.", "ayer", "Quand Juan est-il arrivé ?"]`, `["Ayer llegó Juan.", "Juan", "Qui est arrivé hier ?"]`, `["Llegó Juan ayer.", "Juan puis ayer", "Que s'est-il passé ?"]` ; note « Les trois sont correctes. »
- **Problème** : la troisième ligne casse la règle des deux premières. Dans *Llegó Juan ayer*, le dernier élément est *ayer* ; par la règle qu'on vient de lire, c'est donc *ayer* qui serait neuf, pas « Juan puis ayer ». Et l'ordre lui-même est marginal en espagnol : pour une phrase « thétique » qui répond à « que s'est-il passé ? », on dit *Ayer llegó Juan* ou *Llegó ayer Juan*. La ligne fabrique une troisième possibilité pour remplir le tableau, au prix de la règle. Le visuel suivant, lui, contient un autre défaut du même ordre : sa colonne « Fautif » comporte trois entrées dont la dernière est « — (le complément de temps n'a pas besoin de reprise) », c'est-à-dire une case explicative rangée sous « Fautif ».
- **Correction proposée** : supprimer la troisième ligne, ou la remplacer par un vrai cas — `["Llegó ayer Juan.", "Juan", "annonce d'un fait entier"]` ; et laisser la troisième case de la colonne « Fautif » vide plutôt que d'y mettre un commentaire.

### [MOYEN] Une phrase espagnole avec du français dedans, dans un cours de conjugaison
- **Où** : `gramatica-c1.ts:329` — `es-cours-narrativo`, section « L'imparfait fait plus de choses qu'en français »
- **Texte** : « La faute symétrique du francophone est d'employer l'imperfecto pour ce qui fait avancer le récit. **Ayer llovía toute la journée** ne se dit pas si l'on veut dire qu'il a plu et que c'est fini : il faut llovió. »
- **Problème** : la phrase espagnole censée illustrer la faute est à moitié en français. L'apprenant doit deviner qu'il faut lire *ayer llovía todo el día*. C'est la deuxième occurrence du mélange après « Café, **porque** le mot finit par une voyelle » relevé en passe 1 dans `cours-usage.ts` — dans les deux cas au cœur de la phrase qui porte la démonstration. Le même paragraphe contient par ailleurs un « **Comme en anglais**, la faute la plus répandue chez les francophones avancés est d'en mettre partout » qui ne se laisse pas analyser : on ne sait pas si l'anglais partage la faute ou la règle.
- **Correction proposée** : « Ayer llovía todo el día ne se dit pas si l'on veut dire qu'il a plu et que c'est fini : il faut llovió. » ; et « La faute la plus répandue chez les francophones avancés est d'en mettre partout. »

### [MINEUR] « Du moment qu'elle ait un jardin »
- **Où** : `gramatica-c1.ts:51-54` — `es-cours-subjuntivo-avanzado`, section « La relative : connu ou cherché »
- **Texte** : « Busco una casa que tenga jardín : je cherche une maison, n'importe laquelle, **du moment qu'elle ait** un jardin. »
- **Problème** : « du moment que » se construit avec l'indicatif en français — « du moment qu'elle **a** un jardin » ; c'est « pourvu que » qui appelle le subjonctif. Dans un cours dont le sujet est précisément le choix du mode, une faute de mode française sur la phrase de démonstration se remarque.
- **Correction proposée** : « …n'importe laquelle, pourvu qu'elle ait un jardin. »

### [MINEUR] Deux gloses divergentes pour *cierta noticia*, à quinze lignes d'intervalle
- **Où** : `gramatica-c1.ts:239` (texte) et `:252` (tableau) — `es-cours-orden-palabras`
- **Texte** : texte du cours — « Una cierta noticia est une nouvelle **vague** » ; tableau — `["cierta noticia — une **certaine** nouvelle", "una noticia cierta — une nouvelle avérée"]`
- **Problème** : « une certaine nouvelle » est en français exactement aussi ambigu que l'espagnol, et n'apprend donc rien ; c'est la glose du texte (« vague, imprécise ») qui est utile. La ligne du tableau est de plus la seule des quatre à supprimer l'article (*cierta noticia* contre *un gran hombre*, *un pobre hombre*, *un viejo amigo*).
- **Correction proposée** : `["una cierta noticia — une nouvelle vague, mal établie", "una noticia cierta — une nouvelle avérée"]`.

### [GRAVE] Quatre-vingt-une comparaisons avec l'anglais dans un module français — et une série entière bâtie sur un contraste qui ne concerne pas le français
- **Où** : tout le périmètre — **81 mentions de « anglais », « anglophone » ou « anglicisme »** dans les dix-sept fichiers de cartes ; concentration maximale dans `vocabulaire-ideas.ts` (13), `vocabulaire-oficios.ts` (16), `precision.ts` (5), `vocabulaire-c1.ts` (8)
- **Texte** : l'origine est écrite en clair dans l'en-tête de `vocabulaire-oficios.ts` — « Les mêmes champs que **côté anglais**, parce que ce sont les mêmes trous — mais les pièges n'y sont pas les mêmes : ici, c'est la ressemblance avec le français qui trompe. » L'intention est juste ; l'exécution ne l'a pas suivie. Cas les plus nets :
  - `precision.ts:es-contables` — la série entière oppose le comptable espagnol à l'anglais : « Un consejo se compte, **contrairement à l'anglais advice. Le français aussi.** » (le français est mentionné en troisième, après coup, et il fait comme l'espagnol) ; « Los progresos se comptent, **à la différence de l'anglais progress** » (le français dit « des progrès ») ; « Las noticias au pluriel prend un verbe pluriel, **contrairement à l'anglais news** » (le français dit « les nouvelles sont »). Sur les dix cartes, **trois notes opposent l'espagnol à l'anglais sur un point où le français se comporte exactement comme l'espagnol**. La série n'enseigne donc rien à son lecteur, sauf sur *información* et *pruebas*.
  - Les six cas déjà relevés un à un : *escuchar* (`cours-usage.ts`), *actualmente* (`oral-interaccion.ts`), le gérondif nominal (`avance.ts`), les majuscules de jours et mois (`cours-usage.ts`), *experimento / experiencia* (`avance-b2.ts`), *sensato / sensible* et « muy horrible » (`vocabulaire-ideas.ts`), *una persona con depresión* et *caridad* (`dominios-3.ts`).
  - Et quatre formules de cours qui ne s'analysent pas : « **Comme en anglais**, trois conséquences en découlent » (`vocabulaire-c1.ts:538`), « **Comme en anglais**, la faute la plus répandue chez les francophones avancés » (`gramatica-c1.ts:359`), « **Comme en anglais**, les connecteurs espagnols portent chacun un registre » (`vocabulaire-c1.ts:178`), « la tradition rhétorique hispanique tolère des périodes plus longues que **l'anglaise** » (`vocabulaire-c1.ts:207`) — dans les quatre, l'anglais n'apporte rien et remplace la comparaison utile.
- **Problème** : une bonne moitié des 81 mentions est légitime — les anglicismes réels de l'espagnol technique (*dar seguimiento*, *aplicar para*, *evidencia*, *feature flag*) doivent être signalés comme tels. L'autre moitié est le résidu d'un module conçu pour des anglophones : elle occupe la place de la comparaison avec le français, qui est la seule dont l'apprenant a besoin, et elle lui fait manquer les pièges qui le concernent vraiment. Un francophone n'a jamais écrit « escucho a la radio » ni appelé une association « une charité » ; il écrit en revanche *la eclipse*, *un Español*, *sensible* pour raisonnable, et *asistir* pour aider.
- **Correction proposée** : relire les 81 occurrences avec une question unique — « le français fait-il comme l'espagnol ou comme l'anglais ? ». Si comme l'espagnol, supprimer la remarque ou la retourner (« ici l'espagnol suit le français »). Si comme l'anglais, la garder. Refondre `precision.ts:es-contables` sur les vrais indénombrables qui piègent un francophone : *la información*, *el consejo* face à « des conseils », *la gente* face à « les gens sont », *el mobiliario*, *el dinero*.

### [MOYEN] Le tableau des trois registres : les cinq premières lignes sont justes, les cinq dernières décalées d'une colonne
- **Où** : `vocabulaire-c1.ts:436-451` — `es-c1-registro`, visuel « La même idée, trois étages »
- **Texte** : lignes 1 à 5 — `["hacerse con", "comprar", "adquirir"]`, `["pillar", "coger / tomar", "obtener"]`, `["currar", "trabajar", "desempeñar"]`, `["dar el sí", "aceptar", "acceder a"]`, `["echar", "despedir", "cesar"]` ; lignes 6 à 10 — `["pedir", "solicitar", "requerir"]`, `["empezar", "comenzar", "iniciar"]`, `["acabar", "terminar", "concluir"]`, `["decir", "afirmar", "manifestar"]`, `["ver", "observar", "constatar"]`
- **Problème** : la passe 1 avait signalé que le tableau contredit son cours ; la passe 2 en donne le mécanisme exact, et il rend la correction triviale. Les **cinq premières lignes** sont justes : *hacerse con*, *pillar*, *currar*, *dar el sí*, *echar* sont bien familiers. Les **cinq dernières** sont décalées d'une colonne vers la gauche : *pedir*, *empezar*, *acabar*, *decir*, *ver* sont les verbes neutres de la langue, et le cours de la même section l'écrit noir sur blanc (« Pedir est neutre, solicitar est administratif, requerir est technique. Empezar est neutre, comenzar un peu plus soigné, iniciar administratif »). Le tableau a visiblement été complété en deux temps, la seconde moitié sans reprendre la convention de la première. Deux détails s'y ajoutent : *coger / tomar* est donné comme « neutre » sans un mot du tabou américain que `registres.ts` développe sur une page entière, et *desempeñar* n'est pas un synonyme de *trabajar* (relevé en passe 1).
- **Correction proposée** : décaler les cinq dernières lignes d'une colonne vers la droite et remplir la case « Familier » laissée vide — `["soltar", "decir", "afirmar"]`, `["cascar", "empezar", "comenzar"]`, `["liquidar", "acabar", "terminar"]`, `["echar un ojo", "ver", "observar"]`, `["pedir", —, —]` devenant `[—, "pedir", "solicitar"]`. Et pour la deuxième ligne : `["pillar", "coger (Espagne) / tomar", "obtener"]`.

### [MOYEN] Une « échelle de la certitude » dont les barreaux ne sont pas dans l'ordre
- **Où** : `vocabulaire-c1.ts:37-51` — `es-c1-matices`, tableau « L'échelle de la certitude »
- **Texte** : dans l'ordre du tableau — « quasi certain », « très probable », « **probable** » (*a lo mejor*), « **assez probable** » (*quizá* + indicatif), « **peu probable** » (*quizá* + subjonctif), « **possible** » (*puede que*), « improbable », « exclu »
- **Problème** : le tableau se lit de haut en bas comme une échelle décroissante, et deux barreaux sont mal placés. « Possible » (*puede que venga*) est rangé **sous** « peu probable » (*quizá venga*), alors que « possible » dit une probabilité plus haute, pas plus basse ; et *a lo mejor*, qui est en espagnol la formule la plus optimiste des trois (« il se peut bien que »), est placé sous *seguramente* mais au-dessus de *quizá* + indicatif avec l'étiquette plus faible « probable » contre « assez probable ». L'apprenant qui apprend ce tableau par cœur — c'est un tableau fait pour cela — apprendra une hiérarchie fausse. Le cours, lui, ne classe pas : il dit seulement que l'indicatif marque la probabilité haute et le subjonctif la basse, ce qui est juste.
- **Correction proposée** : ne garder que ce que le cours défend, en deux blocs — indicatif (seguro que, seguramente, a lo mejor, quizá viene) et subjonctif (quizá venga, puede que venga, dudo que venga, es imposible que venga) — sans prétendre ordonner à l'intérieur de chaque bloc, ce que l'usage ne permet pas.

### [MOYEN] Le tableau des calques mélange des calques inventés et de l'espagnol correct
- **Où** : `vocabulaire-c1.ts:163-175` — `es-c1-academico`, visuel « Le calque, et le verbe attendu »
- **Texte** : colonne « Le calque » — `levantar una pregunta`, `tratar un sujeto`, `rendir cuenta de`, **`sostener una tesis`**, `poner en causa`, **`sale que`**, **`tener a dos factores`**, `poner en evidencia`
- **Problème** : trois entrées sur huit ne tiennent pas. *Sostener una tesis* est de l'espagnol standard, employé sans réserve ailleurs dans le module (relevé en passe 1). *Sale que* n'est le calque de rien : un francophone qui veut dire « il ressort que » écrit *resulta que* ou *se saca que*, jamais *sale que* — la ligne fabrique une faute pour remplir la colonne. *Tener a dos factores* est du même ordre : « tenir à » ne se calque pas ainsi. C'est le même défaut que les « faux amis fabriqués » relevés en passe 1 dans `vocabulaire-ideas.ts` et `vocabulaire-oficios.ts`, et il a le même effet : il affaiblit les cinq lignes du tableau qui, elles, sont justes et utiles (*levantar una pregunta*, *tratar un sujeto*, *poner en causa*, *poner en evidencia* — celle-ci excellente, avec sa note sur le sens « ridiculiser »).
- **Correction proposée** : supprimer les trois lignes fabriquées et les remplacer par des calques que les francophones produisent réellement : `["mettre l'accent sur", "poner el acento en", "hacer hincapié en"]`, `["à travers cette étude", "a través de este estudio", "mediante este estudio"]`, `["développer un argument", "desarrollar un argumento", "argumentar / desarrollar una idea"]`.

### [MINEUR] « Un poco probable », deuxième version d'une note déjà fausse
- **Où** : `vocabulaire-c1.ts:139-142` — `es-c1-matices`, carte « Es poco probable, aunque no imposible. »
- **Texte** : note « Poco sans article veut dire « peu » ; **un poco voudrait dire « un peu »**. »
- **Problème** : *un poco probable* ne se dit pas plus que *un poco inteligente* (relevé en passe 1 sur la même série, section « Les degrés de l'adjectif »). *Un poco* ne s'emploie qu'avec des adjectifs à valeur négative ou déplaisante : *un poco caro*, *un poco tonto*, *un poco raro*. Le module donne donc deux fois la même règle avec, les deux fois, le seul exemple qui ne marche pas.
- **Correction proposée** : « Poco probable veut dire “peu probable”. Un poco ne se combine qu'avec un adjectif déplaisant : un poco caro, un poco raro. »

### [MINEUR] Le cours des titres de presse se contredit sur l'anglais en deux phrases
- **Où** : `vocabulaire-c1.ts:282` — `es-c1-prensa`, section « La grammaire des titres »
- **Texte** : « Le titular espagnol obéit à des conventions fixes, **différentes de celles de l'anglais** et tout aussi tranchées. […] Le présent raconte le passé : El Congreso aprueba la reforma veut dire que le Congrès a adopté la réforme. **C'est le même piège qu'en anglais.** »
- **Problème** : le paragraphe annonce des conventions différentes de l'anglais, puis présente la principale d'entre elles comme identique à l'anglais — et ne dit jamais ce qu'il en est en français, où le titre de presse emploie lui aussi le présent (« Le Congrès adopte la réforme »). Ce que l'apprenant francophone doit retenir, c'est justement que cette convention-là lui est familière, et que les deux autres — la troisième personne du pluriel sans sujet, l'ordre verbe-sujet — ne le sont pas.
- **Correction proposée** : « Le présent raconte le passé, exactement comme dans un titre français. En revanche, deux conventions n'ont pas d'équivalent chez nous : la troisième personne du pluriel sans sujet, et l'ordre verbe-sujet. »

### [MOYEN] *Adjuntar* enseigné cinq fois, *cabe* + infinitif trois fois, *negar que* quatre fois
- **Où** :
  - *adjuntar* — `verbes.ts:70` « Adjunto el informe. » (A2) ; `avance-b2.ts:425` « Adjunto el archivo solicitado. » (B2) ; `gramatica-c1.ts:661` « Adjunto el informe solicitado. » (C2) ; `vocabulaire-ideas.ts:256` « Te adjunto el documento en el correo. » (B1) ; `dominios-3.ts:452` « Adjunte una copia, no el original. » (B2) — cinq cartes, cinq fichiers, quatre niveaux, et deux d'entre elles (`verbes.ts` et `gramatica-c1.ts`) sont la **même phrase**, *Adjunto el informe*.
  - *cabe* + infinitif — `vocabulaire-c1.ts:248` « Cabe destacar dos puntos aquí. » (note : « Cabe + infinitif : la formule impersonnelle standard de l'écrit académique. ») ; `:509` « Cabe recordar que el plazo terminó. » (note : « Cabe + infinitif : la tournure impersonnelle du registre soutenu. ») — deux cartes du **même fichier**, deux séries voisines, avec la même note reformulée ; plus `vocabulaire-ideas.ts:630` « Cabe señalar que el texto cambió. » (note : « la formule de nuance de l'écrit soutenu »).
  - *negar que* + subjonctif — `formacion-palabras.ts` (tip, note de carte, et cours : trois fois, relevé en passe 1) ; plus `vocabulaire-ideas.ts:627` « Niego que eso sea cierto. » (note : « Negar que appelle le subjonctif : sea, jamais es. ») et le cours de la même série (« negar que — suivi du subjonctif : niego que sea cierto »).
- **Problème** : ces trois points ne sont pas des points de vocabulaire mais des tournures uniques, et le module les fait réviser trois, quatre et cinq fois, à des niveaux différents, sans jamais que la carte suivante ajoute quoi que ce soit à la précédente. Le coût est direct : cinq créneaux de révision consommés par *adjuntar* sont cinq mots que l'apprenant n'a pas vus.
- **Correction proposée** : garder *adjuntar* au niveau où le mot sert d'abord (`vocabulaire-ideas.ts:es-voc-tecnologia`, le courriel) ; garder un seul *cabe* + infinitif dans `es-c1-academico` ; garder *negar que* dans `formacion-palabras.ts:es-verbos-informe`, dont c'est le sujet, et retirer la carte de `es-voc-politica`.

### [MOYEN] « Estar por las nubes, être dans les nuages » : la note contredit la traduction de sa propre carte
- **Où** : `vocabulaire-ideas.ts:117-120` — `es-voc-dinero`
- **Texte** : etranger « Los pisos están por las nubes. » / francais « Les appartements sont **hors de prix**. » / note « Estar por las nubes, **être dans les nuages** : l'image du prix qui monte. »
- **Problème** : la passe 1 avait signalé la collision avec *estar en las nubes* (« être dans la lune », `vocabulaire-c1.ts:es-c1-modismos`). La passe 2 voit que le défaut est interne à la carte : la traduction dit « hors de prix », la note dit « être dans les nuages », et « être dans les nuages » est en français l'expression de la distraction — exactement le sens de l'**autre** locution espagnole, enseignée deux fichiers plus loin. L'apprenant qui lit la note apprend donc le contraire de ce que la carte lui montre, et se prépare à confondre les deux tournures.
- **Correction proposée** : note → « Estar por las nubes se dit des prix : littéralement “être dans les nuages”, au sens de “monté très haut”. À ne pas confondre avec estar EN las nubes, être dans la lune. »

### [MOYEN] Le module traduit correctement le *se* involontaire une fois sur quatre — et c'est dans le même fichier que l'une des trois fautes
- **Où** : `vocabulaire-ideas.ts:216-218` — `es-voc-tecnologia`, contre `vocabulaire-oficios.ts:243`, `conjugacion-2.ts:594` et `sensaciones.ts:517`
- **Texte** : la carte juste — « Se me ha bloqueado el ordenador. » / « **Mon ordinateur s'est figé.** » / note « …Et la tournure met la personne en victime. » ; les trois fautives — « Se me rompió el vaso. » / « **J'ai cassé** le verre. », « Se me rompió el enchufe. » / « **J'ai cassé** la prise. », « No se te caiga. » / « **Ne le fais pas tomber.** »
- **Problème** : la carte de `vocabulaire-ideas.ts` montre exactement ce qu'il fallait faire — un français non agentif (« s'est figé »), une note qui nomme la valeur (« met la personne en victime ») — et elle prouve que la traduction correcte était à portée. Les trois autres cartes du même point font l'inverse. Ce n'est donc pas une difficulté de traduction mais une inconstance de rédaction, et c'est le point de grammaire que le module tient pour le plus caractéristique de l'espagnol.
- **Correction proposée** : aligner les trois cartes fautives sur le modèle de celle-ci — « Le verre s'est cassé (tout seul). » / « La prise a lâché. » / « Attention, il va tomber. » — et ajouter partout `aussiEtranger` avec la version agentive quand elle existe.

### [MINEUR] Une note dont tout le contenu est une comparaison avec l'anglais
- **Où** : `vocabulaire-ideas.ts:492-494` — `es-voc-medicina`, carte « Fue una intoxicación alimentaria. »
- **Texte** : francais « C'était une intoxication alimentaire. » / note « **Ici l'espagnol suit le français, contrairement à l'anglais, qui dit food poisoning.** »
- **Problème** : la note ne dit rien de l'espagnol. Elle constate qu'il n'y a pas de piège — pour un anglophone — et occupe la place du commentaire utile : *intoxicación* se construit avec *por* (*intoxicación por alimentos en mal estado*), et le mot courant en Espagne pour l'épisode bénin est *un corte de digestión* ou *me sentó mal la comida*. Sur une carte à quatre exercices, la note est le seul apport pédagogique ; ici elle est vide.
- **Correction proposée** : « Una intoxicación alimentaria. Dans la conversation, on dit plutôt me sentó mal la comida. »

### [MOYEN] « Alquiler en Espagne, renta au Mexique » — et la série de droit espagnol écrit *renta*
- **Où** : `avance.ts:50` — `es-maison-ville` ; contre `vocabulaire-oficios.ts:633` — `es-c1-derecho`
- **Texte** : « ¿Cuánto es el alquiler? » / note « **Alquiler en Espagne, renta au Mexique.** » — contre « El arrendatario abonará **la renta** mensualmente. » / « Le locataire s'acquittera du loyer chaque mois. »
- **Problème** : la carte de droit est un contrat de bail espagnol — *arrendatario*, *abonar*, futur d'obligation —, et elle emploie *la renta* au sens de loyer. C'est correct : en droit espagnol, le *contrato de arrendamiento* fixe une *renta*, et *alquiler* est le mot de la vie courante. La note de `avance.ts` fait donc de *renta* un mexicanisme alors que c'est le terme juridique péninsulaire, et l'apprenant qui a révisé les deux séries n'a aucun moyen de comprendre pourquoi le mot « mexicain » apparaît dans un bail de Madrid. Le module contient par ailleurs une troisième note sur ce mot (`avanzado-c2.ts` : « La renta — jamais la rente au sens français », relevée en passe 1), qui n'évoque ni l'un ni l'autre de ces deux emplois.
- **Correction proposée** : « Alquiler dans la vie courante en Espagne, renta au Mexique — et renta aussi en Espagne dans le vocabulaire juridique du bail. »

### [MOYEN] Un visuel affirme qu'aucun de ces mots ne se traduit d'un seul mot, et ses dix cartes les traduisent d'un seul mot
- **Où** : `vocabulaire-oficios.ts:685` (note du visuel) contre `:725-772` (cartes) — `es-c1-abstracto`
- **Texte** : note du visuel « **Aucun ne se traduit par un seul mot : c'est pourquoi il faut les penser en espagnol.** » ; notes des cartes — « El ámbito, **le domaine** couvert », « Un sesgo, **statistique ou cognitif**. Sesgado, **biaisé** », « Un enfoque, **l'angle d'approche** », « Un desfase, **le décalage** », « El arraigo, **l'enracinement** », « La vigencia, **le fait d'être en vigueur** »
- **Problème** : sur les dix mots de la série, sept reçoivent une traduction française d'un seul mot dans leur propre note, et les traductions sont bonnes. Seuls *planteamiento* et *matiz* résistent vraiment — et la carte de *planteamiento* le dit très bien (« ni “position” ni “approche” n'en rendent la précision »). La note du visuel généralise donc à dix ce qui vaut pour deux, et décourage l'apprenant d'utiliser des équivalents parfaitement fiables.
- **Correction proposée** : « Deux d'entre eux ne se traduisent pas d'un seul mot — planteamiento et matiz — et c'est pour eux qu'il faut penser en espagnol. Les autres ont un équivalent français fiable. »

### [MOYEN] Une note qui juxtapose deux mots sans dire ce qui les lie
- **Où** : `vocabulaire-oficios.ts:122-124` — `es-voc-trabajo-oficios`, carte « Tengo una entrevista el jueves. »
- **Texte** : note « Una entrevista, l'entretien. **Mantenimiento désigne la maintenance.** »
- **Problème** : rien dans la carte n'appelle *mantenimiento*, et la note ne dit pas pourquoi elle en parle. Le point visé est pourtant excellent et propre au français : « entretien » y désigne **à la fois** la conversation d'embauche et l'entretien d'un bâtiment, alors que l'espagnol a deux mots — *entrevista* et *mantenimiento*. C'est un vrai faux ami de structure, et la note le laisse deviner.
- **Correction proposée** : « Una entrevista, l'entretien d'embauche. Le français dit “entretien” aussi pour la maintenance : en espagnol, c'est el mantenimiento — deux mots pour un seul chez nous. »

### [MINEUR] « Pas de divulgâchage »
- **Où** : `vocabulaire-oficios.ts:513-516` — `es-voc-arte-cultura`
- **Texte** : etranger « Sin spoilers, todavía no la he visto. » / francais « **Pas de divulgâchage**, je ne l'ai pas encore vue. » / note « Spoiler est passé tel quel. La RAE propose destripe, sans grand succès. »
- **Problème** : *divulgâchage* est une proposition québécoise que l'usage français n'a pas retenue ; la quasi-totalité des francophones d'Europe dit « spoiler » ou « pas de spoiler ». La carte demande donc à l'apprenant de partir d'un mot français qu'il ne connaît pas pour produire un mot espagnol qui est… le mot anglais. En production, personne ne retrouvera *sin spoilers* à partir de « divulgâchage ». La note explique bien la situation espagnole ; c'est la traduction qui manque son but.
- **Correction proposée** : francais « Pas de spoilers, je ne l'ai pas encore vue. » avec `aussi: ["Sans divulgâcher, je ne l'ai pas encore vue."]`.

### [MINEUR] Deux notes sans contenu de langue
- **Où** : `vocabulaire-oficios.ts:366-368` — `es-voc-medioambiente` ; `:509-511` — `es-voc-arte-cultura`
- **Texte** : « La sequía duró todo el verano. » / note « **La sequía est au débat espagnol ce que la canicule est au débat français.** » ; « La exposición dura hasta marzo. » / francais « L'exposition **se tient** jusqu'en mars. »
- **Problème** : la première note est une comparaison sociologique qui n'apprend aucun mot — ni *la sequía* elle-même (qui n'est pas glosée), ni ses collocations (*sequía prolongada*, *estar en sequía*, *el embalse*). La seconde carte traduit *durar* par « se tenir », si bien que la production depuis le français appellera *se celebra hasta marzo* : la note explique pourtant bien *durar*, mais la traduction ne le déclenche pas.
- **Correction proposée** : « La sequía, la sécheresse ; el embalse, la retenue d'eau ; las restricciones, les restrictions. Le champ est central en Espagne. » ; et « L'exposition dure jusqu'en mars. »

### [MOYEN] Deux cartes du module donnent des verdicts opposés sur *destripar* / *destripe*
- **Où** : `vocabulario-sociedad.ts:108-111` — `es-voc-cine` ; contre `vocabulaire-oficios.ts:513-516` — `es-voc-arte-cultura`
- **Texte** : « No me destripes el final. » / note « Destripar, éventer une intrigue. **Familier et très employé** ; spoilear existe aussi. » — contre « Sin spoilers, todavía no la he visto. » / note « Spoiler est passé tel quel. La RAE propose **destripe, sans grand succès**. »
- **Problème** : le même mot est donné comme « très employé » dans un fichier et comme une proposition académique restée lettre morte dans l'autre. Les deux cartes appartiennent à des séries voisines sur le cinéma et les arts, et l'apprenant qui les révise l'une après l'autre ne sait pas s'il doit dire *no me destripes el final* ou *sin spoilers*. Dans les faits, le verbe *destripar* est bien vivant et courant en Espagne, tandis que le **nom** *destripe*, proposé pour remplacer *spoiler*, ne s'est pas imposé : les deux notes disent chacune une moitié de la vérité et se contredisent parce qu'elles confondent le verbe et le nom.
- **Correction proposée** : « Destripar el final est courant en Espagne ; c'est le nom destripe, proposé pour remplacer spoiler, qui n'a pas pris. » — et retirer la seconde moitié de la note de `vocabulaire-oficios.ts`.

### [MOYEN] Le pourcentage sans « de » enseigné deux fois, et la règle des siècles jamais exercée
- **Où** : `vocabulario-sociedad.ts:397-399` (`es-voc-industria`) et `vocabulaire-oficios.ts:341-343` (`es-voc-medioambiente`) ; `vocabulario-sociedad.ts:160` (`es-voc-historia`, tip)
- **Texte** : « La producción cayó un doce por ciento. » / note « Caer un + pourcentage, **sans préposition de**. La formule surprend les francophones. » — et « Las emisiones bajaron un diez por ciento. » / note « Bajar UN diez por ciento : **l'espagnol met l'article là où le français met “de”**. » ; tip de `es-voc-historia` — « Les siècles s'écrivent en chiffres romains : el siglo XIX se lit el siglo diecinueve. Écrire “el siglo 19” est fautif à l'écrit soigné. »
- **Problème** : (1) la même règle de pourcentage occupe une carte dans deux séries différentes, avec deux verbes voisins (*caer* / *bajar*) et deux formulations de la même note — une seule suffisait. (2) Le tip de la série d'histoire enseigne l'écriture des siècles, et **aucune des dix cartes ne contient de siècle** : ni *el siglo XIX*, ni *el siglo de Oro*, alors que c'est la convention typographique la plus utile de tout le champ historique et que la série contient par ailleurs une date en chiffres (« en 1974 ») qui aurait pu porter la règle.
- **Correction proposée** : retirer l'une des deux cartes de pourcentage ; et ajouter à `es-voc-historia` une carte « Se construyó en el siglo XVIII. » / « Il fut construit au XVIIIᵉ siècle. » (note : « Chiffres romains, et on lit el siglo dieciocho. »)

### [MINEUR] « Un solar : rien à voir avec le soleil » — alors que l'adjectif *solar*, lui, en vient
- **Où** : `vocabulario-sociedad.ts:239-242` — `es-voc-arquitectura`
- **Texte** : « Compraron un solar en las afueras. » / note « Un solar, un terrain à bâtir. **Rien à voir avec le soleil malgré l'apparence.** »
- **Problème** : l'affirmation est vraie du **nom** (*solar* vient de *suelo*) et fausse de l'**adjectif**, qui est le mot courant de l'énergie : *placas solares*, *energía solar*, *un panel solar* — vocabulaire que le module enseigne deux séries plus loin dans `es-voc-energia`. Écrite sans distinguer les deux, la note laisse penser que *solar* ne peut pas signifier « solaire », ce qui est l'inverse de ce qu'il faut retenir.
- **Correction proposée** : « Un solar, un terrain à bâtir : le nom vient de suelo, pas de sol. L'adjectif solar, lui, veut bien dire solaire — energía solar. »

### [MINEUR] La note anticipe la réponse pluriel et ne l'accepte pas
- **Où** : `vocabulario-sociedad.ts:214-216` — `es-voc-historia`
- **Texte** : etranger « El archivo se destruyó en el incendio. » / francais « **Les archives** furent détruites dans l'incendie. » / note « El archivo au singulier pour le fonds entier. Los archivos dit plutôt les documents. »
- **Problème** : la note voit venir la difficulté — le français pluralise, l'espagnol non — et n'en tire pas la conséquence : en production, « Les archives furent détruites » appellera *Los archivos se destruyeron*, qui est une phrase espagnole correcte, et sera compté faux. C'est le cas type où `aussiEtranger` doit trancher plutôt que la note.
- **Correction proposée** : ajouter `aussiEtranger: ["Los archivos se destruyeron en el incendio."]`, en gardant la note telle quelle pour expliquer la nuance.

### [GRAVE] « Te entiendo, pero… » : la même carte et la même note dans deux fichiers, au même niveau
- **Où** : `avanzado-c2.ts:174-178` — `es-c1-negociacion` (C1) et `oral-interaccion.ts:243-247` — `es-desacuerdo-cortes` (C1)
- **Texte** : « Te entiendo, pero el presupuesto está cerrado. » / « J'entends bien, mais le budget est arrêté. » / note « **Te entiendo accuse réception sans concéder. Ce n'est jamais un accord.** » — contre « Te entiendo, pero no es el momento. » / « J'entends bien, mais ce n'est pas le moment. » / note « **Te entiendo accuse réception sans accord. Ce n'est jamais un oui.** »
- **Problème** : même amorce, même structure, même traduction française de la première moitié, et une note recopiée à deux mots près. Les deux séries sont C1 et portent sur le même objet — refuser sans le dire. Le tip d'`es-c1-negociacion` reprend d'ailleurs une troisième fois la formule (« “Te entiendo” n'est pas un accord : c'est un accusé de réception »). Trois énoncés du même point pour une seule chose à retenir.
- **Correction proposée** : garder la carte de `es-c1-negociacion` (dont le tip porte déjà le point) et remplacer celle d'`oral-interaccion.ts` par une amorce de refus que le lot n'a pas : « Lo veo complicado, la verdad. » (note : « Verlo complicado : le refus le plus doux du répertoire professionnel. »)

### [MOYEN] Six cartes traduites « Bref » — le compte définitif
- **Où** : `avanzado-c2.ts:517-520` — `es-c2-retorica`, s'ajoutant aux cinq déjà relevées
- **Texte** : « En suma, el asunto dista de estar cerrado. » / « **Bref**, l'affaire est loin d'être close. » avec `aussi: ["En somme, le dossier est loin d'être clos."]`
- **Problème** : *en suma* devient le cinquième marqueur espagnol traduit « Bref », après *en fin*, *total que*, *bueno* et *vamos que*. Ici le champ `aussi` porte pourtant la bonne traduction — « En somme » — en seconde position seulement : la consigne affichée à l'apprenant reste « Bref ». Six cartes réparties sur trois fichiers présentent donc à l'apprenant la même amorce française pour cinq espagnols différents, dont aucun n'accepte les autres.
- **Correction proposée** : promouvoir « En somme » en traduction principale sur cette carte, et appliquer aux cinq autres la répartition proposée plus haut.

### [MOYEN] « Coupons la poire en deux » : la traduction et la note de la même carte ne sont pas du même registre
- **Où** : `avanzado-c2.ts:181-184` — `es-c1-negociacion`
- **Texte** : etranger « Busquemos un punto medio. » / francais « **Coupons la poire en deux.** » / note « **Un punto medio, un terrain d'entente.** Un término medio se dit aussi. »
- **Problème** : *busquemos un punto medio* est neutre et s'écrit dans un compte rendu de réunion ; « couper la poire en deux » est une image familière qu'on ne met pas dans un courriel professionnel. La note donne d'ailleurs la bonne traduction — « un terrain d'entente » — deux lignes plus bas, et la carte ne la retient pas. En production, « Coupons la poire en deux » n'appellera jamais *busquemos un punto medio*, et la variante *un término medio*, que la note déclare équivalente, sera comptée fausse.
- **Correction proposée** : francais « Cherchons un terrain d'entente. » avec `aussi: ["Coupons la poire en deux."]` et `aussiEtranger: ["Busquemos un término medio."]`.

### [MINEUR] Trois notes qui ne parlent pas d'espagnol
- **Où** : `avanzado-c2.ts:193-195` et `:279-281` — `es-c1-negociacion`, `es-c1-tecnologia` ; `vocabulaire-oficios.ts:368` (déjà cité)
- **Texte** : « Es nuestra última oferta. » / note « **L'annoncer sans y tenir détruit la crédibilité, en espagnol comme ailleurs.** » ; « En mi máquina funciona. » / note « **La phrase la plus célèbre du métier, et rarement un argument recevable.** »
- **Problème** : la note est la seule chose qu'une carte apporte au-delà de sa traduction, et ces deux-là n'apportent rien qui concerne la langue — l'une est un conseil de négociation, l'autre une plaisanterie de métier. Les deux cartes avaient pourtant matière : *la última oferta* appelle *la oferta final*, *tomarlo o dejarlo* et le verbe *mantenerse en sus trece* ; *en mi máquina funciona* appelle *el entorno*, *la máquina* au sens de poste de travail, et l'opposition *funciona / anda* selon les pays.
- **Correction proposée** : « Es nuestra última oferta. Tomarlo o dejarlo est la suite attendue ; mantenerse en sus trece, ne pas bouger d'un pouce. » ; « En mi máquina funciona. El entorno, l'environnement technique ; en Amérique, on dirait plutôt en mi compu anda bien. »

### [MOYEN] « Ir + gérondif » colle la même étiquette à deux constructions, sur deux cartes voisines
- **Où** : `perifrasis-colocaciones.ts:116-118` et `:121-123` — `es-perifrasis-gerundio`
- **Texte** : « Se fue corriendo. » / « Il est parti en courant. » / note « **Ir + gérondif au passé décrit la manière du départ.** » — puis, la carte suivante : « Va mejorando poco a poco. » / « Il s'améliore peu à peu. » / note « **Ir + gérondif dit le progrès graduel.** »
- **Problème** : les deux notes se suivent immédiatement et donnent à la même étiquette deux définitions incompatibles. Elles ne décrivent d'ailleurs pas la même chose : *se fue corriendo* n'est pas la périphrase *ir + gérondif*, c'est *irse* accompagné d'un gérondif de manière — le gérondif y répond à « comment ? », et la construction fonctionne pareillement avec d'autres verbes (*salió corriendo*, *vino andando*). La vraie périphrase est celle de la carte suivante, où *ir* a perdu tout sens de déplacement. `vocabulaire-mundo.ts:582` propose encore une troisième analyse du premier cas (« Salir + gérondif marque une sortie brusque »). Un apprenant qui révise la série apprend donc que « ir + gérondif » veut dire deux choses opposées.
- **Correction proposée** : note de la première carte → « Le gérondif de manière après un verbe de mouvement : se fue corriendo, salió corriendo, vino andando. Ce n'est pas la périphrase ir + gérondif de la carte suivante. »

### [MOYEN] Une série d'adjectifs de caractère dont quatre cartes sur dix n'ont pas d'adjectif
- **Où** : `modismos-caracter.ts:82-146` — `es-adjetivos-caracter`
- **Texte** : « Tiene los pies en la tierra. » (locution), « Qué detalle has tenido. » (nom), « Sabe escuchar. » (verbe), « Tiene mucho morro. » (nom)
- **Problème** : c'est le même défaut que la série « Idiotismes animaliers » relevée en passe 1, où quatre cartes sur dix n'ont pas d'animal — et cette fois il touche une série dont le titre, l'énoncé et l'astuce portent tous sur l'adjectif (« Pesado ne veut pas dire lourd au sens physique **quand il qualifie une personne** »). L'exercice de reconnaissance porte sur des cartes qui n'illustrent pas la catégorie annoncée, et l'apprenant qui cherche à réviser les adjectifs de caractère en révise six.
- **Correction proposée** : déplacer les quatre cartes vers `es-modismos-cuerpo` (où *tener morro* et *los pies en la tierra* sont à leur place) et les remplacer par des adjectifs manquants : *cabezota*, *majo* (déjà ailleurs), *entrañable*, *seco*, *echado para delante*.

### [MOYEN] Deux notes dont tout le contenu est une comparaison avec l'anglais, dans une série de caractère
- **Où** : `modismos-caracter.ts:137-139` et `:174-176`
- **Texte** : « Son una familia muy unida. » / note « Unido, uni. **L'espagnol n'a pas d'image de tricot comme l'anglais.** » ; « Es una idea a medio cocer. » / note « A medio cocer, à moitié cuite. **L'image culinaire est la même qu'en anglais.** »
- **Problème** : dans les deux cas, le français fait comme l'espagnol — « une famille unie », « une idée à moitié cuite » ou « mal ficelée » — et la note ne parle que de l'anglais (*close-knit*, *half-baked*). Ce sont deux des dix notes de la série ; elles laissent de côté ce qui aurait servi : *unido* s'oppose à *desunido* et se dit aussi d'un couple ou d'une équipe ; *a medio cocer* a pour voisins *a medias*, *a medio hacer*, *a medio camino*, série productive que la carte aurait pu installer.
- **Correction proposée** : « Unido, uni : une famille, un couple, une équipe. L'inverse est desunido. » ; « A medio cocer, à moitié cuite. La série est productive : a medio hacer, a medio camino, a medias. »

### [MINEUR] Trois autres variantes nommées et refusées, et deux « jamais » de plus
- **Où** : `perifrasis-colocaciones.ts:243-245`, `:238-240`, `:305-307`, `:341-343`
- **Texte** : « Te echo de menos. » / note « Echar de menos, regretter l'absence. **En Amérique latine on dit extrañar.** » ; « Tienes toda la razón. » / note « Tener razón, avoir raison. **Estar en lo cierto se dit aussi, plus formel.** » ; « Se recuperó por completo. » / note « Totalmente se dit aussi, **entero jamais**. » ; « …llegaron a un punto delicado. » / note « **Le mot sensible existe et dit l'émotif.** »
- **Problème** : les deux premières ajoutent au compte des variantes nommées sans être acceptées — *Te extraño* est la traduction que produira spontanément quiconque a appris l'espagnol d'Amérique. La troisième invente une interdiction : *entero* n'est pas un adverbe, personne n'écrirait *se recuperó entero*, et le « jamais » ne combat rien. La quatrième est la **quatrième** note du module sur *sensible*, après `vocabulaire-ideas.ts:es-voc-emociones`, `vocabulaire-oficios.ts:es-voc-medioambiente` et `avanzado-c2.ts:es-c1-psicologia` — quatre gloses du même faux ami, dans quatre fichiers, dont deux se contredisent sur son emploi pour un milieu naturel.
- **Correction proposée** : `aussiEtranger: ["Te extraño."]` et `["Estás en lo cierto."]` ; supprimer « entero jamais » ; et regrouper les quatre notes sur *sensible* en une seule, dans `es-voc-emociones`.

### [MOYEN] La règle des adverbes en *-mente* est juste dans un fichier et fausse dans un autre
- **Où** : `formacion-palabras.ts:193-195` — `es-sufijos-verbos` ; contre `sensaciones.ts:428-430` — `es-verbos-movimiento-2`
- **Texte** : « Fue extraordinariamente atenta. » / note « **-mente s'ajoute au féminin de l'adjectif : atenta, atentamente.** » — contre « Avanzaban penosamente por la nieve. » / note « Penosamente, avec peine. **L'adverbe est formé sur pena.** »
- **Problème** : la première note est exacte et c'est la formulation à retenir ; la seconde, qui porte sur le même procédé, fait dériver l'adverbe d'un **nom**. Le module possède donc la bonne règle, dans le fichier dont c'est précisément le sujet, et la contredit ailleurs. Comme pour *afectar*, *renta* ou le lieu avec *estar*, la correction consiste à propager la version juste, pas à en écrire une nouvelle.
- **Correction proposée** : note de `sensaciones.ts` → « Penosamente, avec peine : -mente s'ajoute au féminin de l'adjectif, penosa. »

### [MOYEN] Deux cartes d'une même série pour une seule règle sur *in-*
- **Où** : `formacion-palabras.ts:52-55` et `:62-65` — `es-prefijos`
- **Texte** : « La acusación es infundada. » / note « **In- devient im- devant p et b, i- devant l et r** : imposible, ilegal, irreal. » ; « Las dos versiones son incoherentes. » / note « **In- devant une consonne autre que p, b, l, r reste inchangé.** »
- **Problème** : la seconde note est le complément logique de la première et n'ajoute aucune information — si l'on sait devant quoi *in-* change, on sait aussi devant quoi il ne change pas. Deux des dix créneaux de la série partent donc sur un seul point, dans une série qui laisse de côté des préfixes productifs et piégeants : *entre-* (*entreabrir*), *contra-* (*contraatacar*), *auto-*, *co-*, *ex-*. La série contient par ailleurs le doublon interne déjà relevé en passe 1 (*acusación infundada*, ici et dans `es-sufijos-verbos`), ce qui porte à trois le nombre de cartes redondantes sur vingt.
- **Correction proposée** : fusionner les deux notes sur la première carte et remplacer la seconde par « Entreabrió la puerta con cuidado. » (note : « Entre- dit l'action à demi : entreabrir, entrever, entreoír. »)

### [MOYEN] « Insistir para est fautif » : la construction existe et est admise
- **Où** : `precision.ts:127-130` — `es-regimen-preposicional`, carte « Insistieron en pagar ellos. »
- **Texte** : note « Insistir en + infinitif. **Insistir para est fautif.** »
- **Problème** : *insistir para que* + subjonctif est courant et enregistré — *insistió para que fuéramos*, *insistieron para que se quedara* —, et le module lui-même l'admet indirectement dans `formacion-palabras.ts:235`, où la note écrit « insistir en que + subjonctif **si c'est une demande** », c'est-à-dire exactement le contexte où *para que* apparaît. Ce qui est fautif est *insistir para* + infinitif, pas *insistir para que*. La note, telle qu'elle est écrite, interdit les deux. C'est le douzième « jamais / fautif » du périmètre qui ne résiste pas à la vérification.
- **Correction proposée** : « Insistir en + infinitif ou + que. Devant une demande adressée à quelqu'un d'autre, insistir para que + subjonctif se dit aussi : insistió para que viniéramos. »

### [MINEUR] La série consacrée aux articles donne l'explication la plus faible du module sur *el agua*
- **Où** : `precision.ts:258-261` — `es-articulos-trampa` ; contre `vocabulaire-ideas.ts:477-479` — `es-voc-medicina`
- **Texte** : « El agua está fría. » / note « Agua est féminin mais prend el au singulier, **pour l'oreille**. L'adjectif reste féminin. » — contre « Le dieron el alta esta mañana. » / note « El alta est féminin malgré l'article masculin : **le a tonique impose el**. »
- **Problème** : la note de `precision.ts` est dans la série dont c'est le sujet même, et c'est la moins utilisable des deux : « pour l'oreille » ne dit pas quand la règle s'applique, alors que « le a tonique impose el » donne le critère exact et permet de le transposer (*el hambre*, *el águila*, *el aula*, mais *la arena*, *la amiga*, où le *a* n'est pas tonique). Le module a donc, une fois de plus, la bonne formulation ailleurs que là où elle sert. Il manque en outre le point qui trompe le plus : au pluriel, l'article redevient féminin — *las aguas*, *las aulas*.
- **Correction proposée** : « Agua est féminin, mais un a tonique initial impose el au singulier : el agua, el hambre, el águila. Au pluriel, l'article redevient féminin : las aguas. L'adjectif, lui, reste féminin partout. »

### [MINEUR] Trois cartes dont la traduction française ne rend pas la tournure espagnole
- **Où** : `formacion-palabras.ts:117-120`, `:132-135`, `:232-235`
- **Texte** : « El rechazo fue una sorpresa. » / « **Le refus a surpris.** » ; « Trabaja como cuidador. » / « Il travaille comme **aidant**. » ; « Insistieron en ver el expediente. » / « Ils ont **exigé** de voir le dossier. »
- **Problème** : (1) « Le refus a surpris » appelle *el rechazo sorprendió*, pas *fue una sorpresa* — et la carte sert précisément à montrer un nom déverbal. (2) « Aidant » désigne en français le proche qui accompagne un malade ; le *cuidador* rémunéré est un aide-soignant ou un auxiliaire de vie, et la carte fait donc apprendre le mauvais métier. (3) *Insistir* n'est pas *exiger* : la note dit d'ailleurs « insister », et le français « exiger » appellerait *exigieron ver*.
- **Correction proposée** : « Le refus a été une surprise. » ; « Il travaille comme auxiliaire de vie. » ; « Ils ont insisté pour voir le dossier. »

---

## Ce que la seconde passe a ajouté

La passe 1 avait travaillé carte par carte et fichier par fichier. La passe 2 a
relu la même matière en la croisant — c'est de là que vient l'essentiel de ce
qu'elle a trouvé. **Soixante-douze constats nouveaux — 8 GRAVE, 39 MOYEN, 25 MINEUR** :

**Ce que seule la relecture croisée pouvait donner**
- La règle **« estar pour le lieu, toujours »** (`conjugaison.ts`, `faux-amis.ts`)
  démentie par la carte « La reunión **es** en la sala grande » de `precision.ts` —
  la contradiction cherchée, trouvée exactement là.
- Le module **se contredit sur *afectar*** : « la préposition est obligatoire »
  (`avance.ts`) contre « sans préposition en Espagne » (`dominios-3.ts`), cette
  seconde version étant fausse.
- **« Quedo a la espera »** : formule standard dans `cours-usage.ts`, formule
  proscrite dans le statement d'`avance-b2.ts`, et correctement située dans la note
  de la carte voisine du même fichier.
- **« Alquiler en Espagne, renta au Mexique »** (`avance.ts`), démenti par le bail
  espagnol de `vocabulaire-oficios.ts` qui écrit *la renta*.
- **Le *se* involontaire** : trois cartes le traduisent par un aveu volontaire
  (`conjugacion-2.ts`, `vocabulaire-oficios.ts`, `sensaciones.ts`), une seule le
  traduit correctement (`vocabulaire-ideas.ts`) — et le cours du module a raison.
- **La règle des adverbes en *-mente*** juste dans `formacion-palabras.ts`, fausse
  dans `sensaciones.ts`. Même schéma pour *el agua* (`precision.ts` faible,
  `vocabulaire-ideas.ts` exacte), pour *coger* (`registres.ts` précis, deux autres
  fichiers généralisant à tort), pour *vosotros* et pour le *seseo*.
- **« Te entiendo, pero… »** : même carte, même note, deux fichiers, même niveau.
- **Cinq nouvelles paires de cartes jumelles** à deux niveaux, plus *adjuntar*
  enseigné **cinq fois**, *cabe* + infinitif **trois fois**, *negar que* **quatre
  fois**, *sensible* glosé **quatre fois**.

**Ce que le comptage systématique a révélé**
- **Seize séries** dont l'énoncé annonce un mot que leurs cartes ne contiennent
  pas — la passe 1 en avait vu trois et les croyait accidentelles. Six de ces mots
  (*cotizar*, *desbrozar*, *sofreír*, *detallista*, *esbozar*, *ensayar*)
  n'existent nulle part ailleurs dans le dossier `espagnol/`.
- **81 mentions de l'anglais** dans un module français, dont une série entière
  (`precision.ts:es-contables`) bâtie sur un contraste qui ne concerne pas le
  français. L'en-tête de `vocabulaire-oficios.ts` en donne la cause : « les mêmes
  champs que côté anglais ».
- **84 « jamais » et 49 « toujours »**, dont une quinzaine vérifiés faux.
- **11 cartes sans note**, toutes dans le même fichier.
- L'**astuce de la série recopiée mot pour mot** dans la note de sa première carte :
  six séries sur huit dans `oral-interaccion.ts`, et le procédé se retrouve dans
  `avance.ts`, `registres.ts`, `vocabulario-sociedad.ts`, `vocabulaire-oficios.ts`.
- **Six cartes traduites « Bref »** pour cinq marqueurs espagnols différents, et
  *o sea* avec trois françaises distinctes — l'illustration la plus nette du défaut
  d'`aussiEtranger`.
- Le compte final des cartes **dont la note nomme la variante juste sans
  l'accepter** : **dix-huit** sur la moitié avancée, dont **trois** qui refusent une
  réponse que leur propre note déclare correcte ou meilleure (*sentirse*,
  *desbordado*, *un mensaje*). C'est, à l'unité près, le chiffre relevé côté
  espagnol débutant.

**Défauts de fabrication vus seulement à la relecture**
- Le tableau des trois registres (`vocabulaire-c1.ts`) : les **cinq premières lignes
  sont justes, les cinq dernières décalées d'une colonne** — le tableau a été
  complété en deux fois. Diagnostic qui rend la correction mécanique.
- L'« échelle de la certitude » dont les barreaux ne sont pas dans l'ordre.
- Le visuel « Deux emplois que le français ne fait pas » qui en donne trois, et dont
  deux sont des emplois que le français fait.
- Le tableau des trois ordres de mots dont la troisième ligne contredit la règle
  énoncée au-dessus.
- Le caractère parasite `-´ramos` affiché à l'apprenant dans le visuel de
  conjugaison du subjonctif imparfait.
- Une phrase espagnole avec du français dedans dans un cours de conjugaison
  (« Ayer llovía **toute la journée** »), après celle déjà relevée en passe 1.
- **Aucune dictée au-dessus de B2** : les soixante séries C1-C2 du périmètre n'en
  ont aucune, et le seul texte contenant un *para* n'est pas celui rangé sous
  « por / para ».
- Deux dictées étiquetées « accent mexicain » écrites en espagnol d'Espagne, dans un
  fichier dont l'en-tête prévient que l'alternation « n'est pas cosmétique ».

## Ce qui est sain

Le socle grammatical est solide et souvent excellent : la formation du subjonctif
imparfait à partir de la troisième personne du pluriel du passé simple
(`avance-b2.ts`), la distinction passif réfléchi / se impersonnel avec le rôle du
a personnel, l'exposé de la concordance des temps, le cours sur l'accent tonique
(`cours-usage.ts`) sont justes, clairs et bien exemplifiés. Le vocabulaire
spécialisé — droit, énergie, démographie, presse (`vocabulario-sociedad.ts`,
`vocabulaire-oficios.ts`) — est précis et à jour, avec de vrais choix de
collocation (*dictar sentencia*, *no dar abasto*, *quedar pendiente de
reposición*, *el saldo migratorio*) qu'aucune liste de mots ne donnerait. Les
séries de `vocabulario-sociedad.ts` sont les plus propres du lot : je n'y ai
relevé aucune faute d'espagnol.

La seconde passe ajoute trois choses à ce crédit. La série `es-c2-ambiguedad`
(`gramatica-c1.ts`) est la mieux construite du périmètre : dix phrases réellement
ambiguës, chacune avec sa seconde lecture portée par le champ `aussi` — c'est le
modèle que le reste du module aurait dû suivre. La série `es-c2-cientifico`
(`avanzado-c2.ts`) fait de même, avec cinq `aussi` sur dix cartes et des notes qui
apprennent chacune quelque chose de plus que la traduction (*controlar por*, le *e*
qui remplace *y* devant un mot en *i-*, le sens statistique strict de
*significativo*). Et `es-c1-abstracto` (`vocabulaire-oficios.ts`) réussit ce que
peu de séries de vocabulaire réussissent : faire sentir un mot par sa collocation
plutôt que par sa définition (*exceder el alcance de*, *cabría introducir un
matiz*, *perder vigencia*).

Le cours sur les régionalismes (`registres.ts`), malgré la faute sur le *seseo*, a
la meilleure ligne du module — « comprendre large, produire prudemment » —, et
c'est exactement le principe que le champ `aussiEtranger` permettrait d'appliquer
à l'exercice de production. La correction la plus rentable du périmètre tient dans
cette phrase, déjà écrite par les auteurs.
