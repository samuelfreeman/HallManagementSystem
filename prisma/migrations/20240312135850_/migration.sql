/*
  Warnings:

  - You are about to drop the column `studentStudentId` on the `roomRequest` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[StudentId]` on the table `roomRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "roomRequest" DROP CONSTRAINT "roomRequest_studentStudentId_fkey";

-- DropIndex
DROP INDEX "roomRequest_studentStudentId_key";

-- AlterTable
ALTER TABLE "roomRequest" DROP COLUMN "studentStudentId",
ADD COLUMN     "StudentId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "roomRequest_StudentId_key" ON "roomRequest"("StudentId");

-- AddForeignKey
ALTER TABLE "roomRequest" ADD CONSTRAINT "roomRequest_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "student"("studentId") ON DELETE SET NULL ON UPDATE CASCADE;
