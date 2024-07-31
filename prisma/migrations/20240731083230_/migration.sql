-- DropForeignKey
ALTER TABLE `orderspayments` DROP FOREIGN KEY `ordersPayments_orderId_fkey`;

-- AddForeignKey
ALTER TABLE `ordersPayments` ADD CONSTRAINT `ordersPayments_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `customerOrders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
