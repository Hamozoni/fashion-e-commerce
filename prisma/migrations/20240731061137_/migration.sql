/*
  Warnings:

  - The primary key for the `orderproducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[serialNumber]` on the table `orderProducts` will be added. If there are existing duplicate values, this will fail.
  - The required column `cartId` was added to the `orderProducts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE `orderproducts` DROP PRIMARY KEY,
    ADD COLUMN `cartId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`cartId`);

-- CreateIndex
CREATE UNIQUE INDEX `orderProducts_serialNumber_key` ON `orderProducts`(`serialNumber`);
