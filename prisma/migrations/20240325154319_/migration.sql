/*
  Warnings:

  - A unique constraint covering the columns `[telephone]` on the table `student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "student_telephone_key" ON "student"("telephone");
