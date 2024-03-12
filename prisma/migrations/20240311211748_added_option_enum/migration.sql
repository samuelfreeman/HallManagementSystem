/*
  Warnings:

  - Added the required column `status` to the `roomRequest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "options" AS ENUM ('Rejected', 'Approved', 'Pending');

-- AlterTable
ALTER TABLE "roomRequest" ADD COLUMN     "status" "options" NOT NULL;
