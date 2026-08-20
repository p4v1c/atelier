-- Niveaux du cadre européen, et accent de lecture des dictées.
--
-- Additif : aucune ligne n'est touchée. `level` naît nul partout — le français
-- et la culture générale n'en ont pas l'usage. `voice` prend "fr-FR" par
-- défaut, ce qui décrit exactement les 310 dictées existantes.
ALTER TABLE "Skill" ADD COLUMN "level" TEXT;
ALTER TABLE "Dictation" ADD COLUMN "level" TEXT;
ALTER TABLE "Dictation" ADD COLUMN "voice" TEXT NOT NULL DEFAULT 'fr-FR';

CREATE INDEX "Skill_moduleId_level_status_idx" ON "Skill"("moduleId", "level", "status");
CREATE INDEX "Dictation_moduleId_level_idx" ON "Dictation"("moduleId", "level");
