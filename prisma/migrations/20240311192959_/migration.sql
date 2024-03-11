/*
  Warnings:

  - You are about to drop the column `departmentId` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `department` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_departmentId_fkey";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "departmentId",
ADD COLUMN     "department" TEXT;

-- DropTable
DROP TABLE "department";

-- CreateTable
CREATE TABLE "roomRequest" (
    "id" TEXT NOT NULL,
    "studentStudentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roomRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "roomRequest_studentStudentId_key" ON "roomRequest"("studentStudentId");

-- AddForeignKey
ALTER TABLE "roomRequest" ADD CONSTRAINT "roomRequest_studentStudentId_fkey" FOREIGN KEY ("studentStudentId") REFERENCES "student"("studentId") ON DELETE SET NULL ON UPDATE CASCADE;
