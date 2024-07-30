/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `orderProducts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `orderProducts_id_key` ON `orderproducts`;

-- CreateIndex
CREATE UNIQUE INDEX `orderProducts_serialNumber_key` ON `orderProducts`(`serialNumber`);
