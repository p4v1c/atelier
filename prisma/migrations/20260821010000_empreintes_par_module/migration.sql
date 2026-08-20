-- L'empreinte d'un exercice devient unique PAR MODULE, et non plus globalement.
--
-- Deux modules ont le droit de poser la même question : « Cordialement, » se
-- traduit en anglais et en espagnol, avec deux réponses différentes. Une
-- empreinte globale en écrasait une des deux au seed, en silence.
--
-- Les lignes ne bougent pas : on préfixe l'empreinte existante par
-- l'identifiant du module qui la porte. Aucun exercice n'est créé ni supprimé,
-- et les Attempt qui les référencent restent valides.
UPDATE "Exercise" e
SET "fingerprint" = s."moduleId" || ':' || e."fingerprint"
FROM "Skill" s
WHERE s.id = e."skillId"
  AND e."fingerprint" NOT LIKE s."moduleId" || ':%';
