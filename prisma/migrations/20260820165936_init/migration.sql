-- CreateEnum
CREATE TYPE "ContentStatus" AS ENUM ('active', 'draft', 'disputed');

-- CreateEnum
CREATE TYPE "StudySessionType" AS ENUM ('test', 'training', 'targeted', 'weakness', 'dictation');

-- CreateEnum
CREATE TYPE "AuthAction" AS ENUM ('login', 'register');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rule" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "statement" TEXT NOT NULL,
    "tip" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'active',
    "batch" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sentence" (
    "id" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "textNormalized" TEXT NOT NULL,
    "faultyTokenIndex" INTEGER NOT NULL,
    "correction" TEXT,
    "isCorrect" BOOLEAN NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'active',
    "batch" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sentence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dictation" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "status" "ContentStatus" NOT NULL DEFAULT 'active',
    "batch" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dictation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailKey" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "pseudo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginAt" TIMESTAMP(3),
    "answerCounter" INTEGER NOT NULL DEFAULT 0,
    "placementDoneAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "userId" TEXT NOT NULL,
    "seriesLength" INTEGER NOT NULL DEFAULT 20,
    "defaultCategoryId" TEXT,
    "options" JSONB NOT NULL DEFAULT '{}',

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "RuleProgress" (
    "userId" TEXT NOT NULL,
    "ruleId" TEXT NOT NULL,
    "box" INTEGER NOT NULL DEFAULT 0,
    "dueAtCounter" INTEGER NOT NULL DEFAULT 0,
    "seenCount" INTEGER NOT NULL DEFAULT 0,
    "correctCount" INTEGER NOT NULL DEFAULT 0,
    "lastReviewedAt" TIMESTAMP(3),
    "isNew" BOOLEAN NOT NULL DEFAULT true,
    "lastSentenceId" TEXT,

    CONSTRAINT "RuleProgress_pkey" PRIMARY KEY ("userId","ruleId")
);

-- CreateTable
CREATE TABLE "Attempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sentenceId" TEXT NOT NULL,
    "answerIndex" INTEGER NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "studySessionId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Attempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudySession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "StudySessionType" NOT NULL,
    "category" TEXT,
    "questionCount" INTEGER NOT NULL,
    "score" INTEGER,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedAt" TIMESTAMP(3),

    CONSTRAINT "StudySession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DictationAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dictationId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DictationAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthAttempt" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "action" "AuthAction" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuthAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DictationRules" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_DictationRules_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "Category_position_idx" ON "Category"("position");

-- CreateIndex
CREATE UNIQUE INDEX "Rule_slug_key" ON "Rule"("slug");

-- CreateIndex
CREATE INDEX "Rule_categoryId_status_idx" ON "Rule"("categoryId", "status");

-- CreateIndex
CREATE INDEX "Rule_status_difficulty_idx" ON "Rule"("status", "difficulty");

-- CreateIndex
CREATE UNIQUE INDEX "Sentence_textNormalized_key" ON "Sentence"("textNormalized");

-- CreateIndex
CREATE INDEX "Sentence_ruleId_status_idx" ON "Sentence"("ruleId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "Dictation_text_key" ON "Dictation"("text");

-- CreateIndex
CREATE INDEX "Dictation_difficulty_status_idx" ON "Dictation"("difficulty", "status");

-- CreateIndex
CREATE UNIQUE INDEX "User_emailKey_key" ON "User"("emailKey");

-- CreateIndex
CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expiresAt_idx" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "RuleProgress_userId_dueAtCounter_idx" ON "RuleProgress"("userId", "dueAtCounter");

-- CreateIndex
CREATE INDEX "RuleProgress_userId_isNew_idx" ON "RuleProgress"("userId", "isNew");

-- CreateIndex
CREATE INDEX "Attempt_userId_createdAt_idx" ON "Attempt"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Attempt_sentenceId_idx" ON "Attempt"("sentenceId");

-- CreateIndex
CREATE INDEX "StudySession_userId_startedAt_idx" ON "StudySession"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "DictationAttempt_userId_createdAt_idx" ON "DictationAttempt"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "AuthAttempt_ip_action_createdAt_idx" ON "AuthAttempt"("ip", "action", "createdAt");

-- CreateIndex
CREATE INDEX "_DictationRules_B_index" ON "_DictationRules"("B");

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sentence" ADD CONSTRAINT "Sentence_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_defaultCategoryId_fkey" FOREIGN KEY ("defaultCategoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuleProgress" ADD CONSTRAINT "RuleProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RuleProgress" ADD CONSTRAINT "RuleProgress_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "Rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_sentenceId_fkey" FOREIGN KEY ("sentenceId") REFERENCES "Sentence"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attempt" ADD CONSTRAINT "Attempt_studySessionId_fkey" FOREIGN KEY ("studySessionId") REFERENCES "StudySession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudySession" ADD CONSTRAINT "StudySession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DictationAttempt" ADD CONSTRAINT "DictationAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DictationAttempt" ADD CONSTRAINT "DictationAttempt_dictationId_fkey" FOREIGN KEY ("dictationId") REFERENCES "Dictation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DictationRules" ADD CONSTRAINT "_DictationRules_A_fkey" FOREIGN KEY ("A") REFERENCES "Dictation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DictationRules" ADD CONSTRAINT "_DictationRules_B_fkey" FOREIGN KEY ("B") REFERENCES "Rule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
