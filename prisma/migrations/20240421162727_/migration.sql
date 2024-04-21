/*
  Warnings:

  - You are about to alter the column `name` on the `category` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `name` on the `subcategory` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `subcategory` MODIFY `name` VARCHAR(191) NOT NULL;
