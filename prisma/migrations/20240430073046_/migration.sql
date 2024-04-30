/*
  Warnings:

  - You are about to drop the column `imagePath` on the `productimages` table. All the data in the column will be lost.
  - Made the column `serialNumber` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `serialNumber` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `productimages` DROP COLUMN `imagePath`;

-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `rating` INTEGER NOT NULL DEFAULT 7;

-- CreateTable
CREATE TABLE `ImagesPath` (
    `id` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,
    `productImagesId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ImagesPath` ADD CONSTRAINT `ImagesPath_productImagesId_fkey` FOREIGN KEY (`productImagesId`) REFERENCES `ProductImages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
