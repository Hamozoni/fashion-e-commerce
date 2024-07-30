/*
  Warnings:

  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[paymentClientSecret]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientSecret]` on the table `payments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderId` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `orders` DROP FOREIGN KEY `orders_paymentId_fkey`;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `paymentClientSecret` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `payments` ADD COLUMN `clientSecret` VARCHAR(191) NULL,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `verificationtoken`;

-- CreateIndex
CREATE UNIQUE INDEX `orders_paymentClientSecret_key` ON `orders`(`paymentClientSecret`);

-- CreateIndex
CREATE UNIQUE INDEX `payments_clientSecret_key` ON `payments`(`clientSecret`);

-- AddForeignKey
ALTER TABLE `payments` ADD CONSTRAINT `payments_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `orders`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
