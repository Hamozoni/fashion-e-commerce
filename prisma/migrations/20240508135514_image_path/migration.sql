/*
  Warnings:

  - You are about to drop the `imagespath` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `imagePath` to the `productimages` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `imagespath` DROP FOREIGN KEY `imagespath_productImagesId_fkey`;

-- AlterTable
ALTER TABLE `productimages` ADD COLUMN `imagePath` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `imagespath`;
