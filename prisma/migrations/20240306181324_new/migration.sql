/*
  Warnings:

  - Added the required column `blockName` to the `rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "rooms" ADD COLUMN     "blockName" TEXT NOT NULL,
ADD COLUMN     "status" "status" NOT NULL;

-- DropEnum
DROP TYPE "blockname";
