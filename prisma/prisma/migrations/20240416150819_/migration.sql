/*
  Warnings:

  - The values [momen] on the enum `Category_name` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updateddAt` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `name` ENUM('men', 'Women', 'kids') NOT NULL DEFAULT 'men';

-- AlterTable
ALTER TABLE `product` ADD COLUMN `oldPriceInCent` INTEGER NULL DEFAULT 0,
    ADD COLUMN `updateddAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `autherId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_autherId_fkey` FOREIGN KEY (`autherId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
