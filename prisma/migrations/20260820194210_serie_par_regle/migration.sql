-- AlterEnum
ALTER TYPE "StudySessionType" ADD VALUE 'rule';

-- AlterTable
ALTER TABLE "StudySession" ADD COLUMN     "ruleSlug" TEXT;
