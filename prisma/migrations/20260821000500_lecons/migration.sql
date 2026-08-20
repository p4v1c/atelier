-- Un support de cours attaché à une compétence.
--
-- Additif : aucune ligne n'est touchée, la colonne naît nulle partout. Le
-- module Français n'en a pas l'usage ; la culture générale y range ses
-- 238 leçons.
ALTER TABLE "Skill" ADD COLUMN "lesson" JSONB;
