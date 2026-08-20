-- L'Atelier — généralisation du moteur en modules.
--
-- Cette migration ne SUPPRIME ni ne RECRÉE aucune ligne. Elle renomme des
-- tables et des colonnes : en PostgreSQL, un renommage est une écriture dans
-- le catalogue système, pas une copie de données. Les 618 règles, 4 336
-- phrases, 310 dictées et toute la progression restent physiquement en place.
--
-- Le seul contenu réellement transformé est la charge utile des exercices :
-- trois colonnes deviennent un objet JSON, construit à partir d'elles avant
-- qu'elles ne disparaissent.

BEGIN;

/* ─────────────────────────── 1. les modules ─────────────────────────── */

CREATE TABLE "Module" (
    "id"          TEXT NOT NULL,
    "name"        TEXT NOT NULL,
    "tagline"     TEXT NOT NULL,
    "position"    INTEGER NOT NULL,
    "progression" TEXT NOT NULL DEFAULT 'repetition-espacee',
    "status"      "ContentStatus" NOT NULL DEFAULT 'active',
    "createdAt"   TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Module_position_idx" ON "Module"("position");

-- Tout ce qui existe aujourd'hui appartient au module Français.
INSERT INTO "Module" ("id", "name", "tagline", "position")
VALUES ('francais', 'Français', 'Orthographe, grammaire et écrits professionnels', 1);

/* ────────────────────────── 2. les catégories ────────────────────────── */

ALTER TABLE "Category" ADD COLUMN "moduleId" TEXT NOT NULL DEFAULT 'francais';

-- Un slug de catégorie n'est plus unique globalement : deux modules peuvent
-- tous deux avoir un « Vocabulaire ».
DROP INDEX "Category_slug_key";
DROP INDEX "Category_name_key";
DROP INDEX "Category_position_idx";
CREATE UNIQUE INDEX "Category_moduleId_slug_key" ON "Category"("moduleId", "slug");
CREATE UNIQUE INDEX "Category_moduleId_name_key" ON "Category"("moduleId", "name");
CREATE INDEX "Category_moduleId_position_idx" ON "Category"("moduleId", "position");
ALTER TABLE "Category" ADD CONSTRAINT "Category_moduleId_fkey"
    FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/* ─────────────────────── 3. Rule devient Skill ─────────────────────── */

ALTER TABLE "Rule" RENAME TO "Skill";
ALTER TABLE "Skill" ADD COLUMN "moduleId" TEXT NOT NULL DEFAULT 'francais';

ALTER INDEX "Rule_pkey"                  RENAME TO "Skill_pkey";
ALTER INDEX "Rule_slug_key"              RENAME TO "Skill_slug_key";
ALTER INDEX "Rule_categoryId_status_idx" RENAME TO "Skill_categoryId_status_idx";
ALTER INDEX "Rule_status_difficulty_idx" RENAME TO "Skill_status_difficulty_idx";
ALTER TABLE "Skill" RENAME CONSTRAINT "Rule_categoryId_fkey" TO "Skill_categoryId_fkey";

CREATE INDEX "Skill_moduleId_status_idx" ON "Skill"("moduleId", "status");
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_moduleId_fkey"
    FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/* ────────────────── 4. Sentence devient Exercise ────────────────── */

ALTER TABLE "Sentence" RENAME TO "Exercise";
ALTER TABLE "Exercise" RENAME COLUMN "ruleId"         TO "skillId";
ALTER TABLE "Exercise" RENAME COLUMN "textNormalized" TO "fingerprint";

ALTER INDEX "Sentence_pkey"                RENAME TO "Exercise_pkey";
ALTER INDEX "Sentence_textNormalized_key"  RENAME TO "Exercise_fingerprint_key";
ALTER INDEX "Sentence_ruleId_status_idx"   RENAME TO "Exercise_skillId_status_idx";
ALTER TABLE "Exercise" RENAME CONSTRAINT "Sentence_ruleId_fkey" TO "Exercise_skillId_fkey";

ALTER TABLE "Exercise" ADD COLUMN "kind"    TEXT;
ALTER TABLE "Exercise" ADD COLUMN "payload" JSONB;

-- La seule vraie transformation de données de cette migration.
-- `correction` est NULL pour les phrases correctes : to_jsonb(NULL) donne
-- bien le JSON null attendu par le type d'exercice.
UPDATE "Exercise" SET
    "kind" = 'spot-error',
    "payload" = jsonb_build_object(
        'text',             "text",
        'faultyTokenIndex', "faultyTokenIndex",
        'correction',       "correction"
    );

ALTER TABLE "Exercise" ALTER COLUMN "kind"    SET NOT NULL;
ALTER TABLE "Exercise" ALTER COLUMN "payload" SET NOT NULL;
CREATE INDEX "Exercise_kind_idx" ON "Exercise"("kind");

ALTER TABLE "Exercise" DROP COLUMN "text";
ALTER TABLE "Exercise" DROP COLUMN "faultyTokenIndex";
ALTER TABLE "Exercise" DROP COLUMN "correction";
ALTER TABLE "Exercise" DROP COLUMN "isCorrect";

/* ─────────────── 5. RuleProgress devient SkillProgress ─────────────── */

ALTER TABLE "RuleProgress" RENAME TO "SkillProgress";
ALTER TABLE "SkillProgress" RENAME COLUMN "ruleId"         TO "skillId";
ALTER TABLE "SkillProgress" RENAME COLUMN "lastSentenceId" TO "lastExerciseId";

ALTER INDEX "RuleProgress_pkey"                     RENAME TO "SkillProgress_pkey";
ALTER INDEX "RuleProgress_userId_dueAtCounter_idx"  RENAME TO "SkillProgress_userId_dueAtCounter_idx";
ALTER INDEX "RuleProgress_userId_isNew_idx"         RENAME TO "SkillProgress_userId_isNew_idx";
ALTER TABLE "SkillProgress" RENAME CONSTRAINT "RuleProgress_ruleId_fkey" TO "SkillProgress_skillId_fkey";
ALTER TABLE "SkillProgress" RENAME CONSTRAINT "RuleProgress_userId_fkey" TO "SkillProgress_userId_fkey";

/* ──────────── 6. la réponse d'une tentative devient générique ──────────── */

ALTER TABLE "Attempt" RENAME COLUMN "sentenceId" TO "exerciseId";
ALTER INDEX "Attempt_sentenceId_idx" RENAME TO "Attempt_exerciseId_idx";
ALTER TABLE "Attempt" RENAME CONSTRAINT "Attempt_sentenceId_fkey" TO "Attempt_exerciseId_fkey";

-- Un rang de token devient un JSON : demain, un booléen pour une carte
-- mémoire ou une chaîne pour une traduction tiendront dans la même colonne.
ALTER TABLE "Attempt" ADD COLUMN "answer" JSONB;
UPDATE "Attempt" SET "answer" = to_jsonb("answerIndex");
ALTER TABLE "Attempt" ALTER COLUMN "answer" SET NOT NULL;
ALTER TABLE "Attempt" DROP COLUMN "answerIndex";

/* ──────────────────────── 7. dictées et séances ──────────────────────── */

ALTER TABLE "Dictation" ADD COLUMN "moduleId" TEXT NOT NULL DEFAULT 'francais';
CREATE INDEX "Dictation_moduleId_difficulty_status_idx" ON "Dictation"("moduleId", "difficulty", "status");
ALTER TABLE "Dictation" ADD CONSTRAINT "Dictation_moduleId_fkey"
    FOREIGN KEY ("moduleId") REFERENCES "Module"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "_DictationRules" RENAME TO "_DictationSkills";
ALTER INDEX "_DictationRules_AB_pkey"  RENAME TO "_DictationSkills_AB_pkey";
ALTER INDEX "_DictationRules_B_index"  RENAME TO "_DictationSkills_B_index";
ALTER TABLE "_DictationSkills" RENAME CONSTRAINT "_DictationRules_A_fkey" TO "_DictationSkills_A_fkey";
ALTER TABLE "_DictationSkills" RENAME CONSTRAINT "_DictationRules_B_fkey" TO "_DictationSkills_B_fkey";

ALTER TYPE "StudySessionType" RENAME VALUE 'rule' TO 'skill';
ALTER TABLE "StudySession" RENAME COLUMN "ruleSlug" TO "skillSlug";
ALTER TABLE "StudySession" ADD COLUMN "moduleId" TEXT NOT NULL DEFAULT 'francais';

/* ─────────── 8. retirer les valeurs par défaut de rattrapage ─────────── */

-- Elles n'ont servi qu'à rattacher l'existant au module Français. Les laisser
-- ferait qu'une compétence oubliée par un futur module y atterrirait en
-- silence ; mieux vaut une erreur franche.
ALTER TABLE "Category" ALTER COLUMN "moduleId" DROP DEFAULT;
ALTER TABLE "Skill"    ALTER COLUMN "moduleId" DROP DEFAULT;

COMMIT;
