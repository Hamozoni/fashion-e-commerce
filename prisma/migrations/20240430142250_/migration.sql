-- CreateTable
CREATE TABLE `order` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('pendding') NOT NULL DEFAULT 'pendding',
    `pricePaidInCent` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `totalPaid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL,
    `priceInCent` INTEGER NOT NULL,
    `offerPriceInCent` INTEGER NULL DEFAULT 0,
    `isOffer` BOOLEAN NULL DEFAULT false,
    `isAvailable` BOOLEAN NOT NULL DEFAULT true,
    `description` TEXT NOT NULL,
    `count` INTEGER NOT NULL DEFAULT 1,
    `category` VARCHAR(191) NOT NULL,
    `subCategory` VARCHAR(191) NOT NULL,
    `aboutThisItem` TEXT NOT NULL,
    `serialNumber` VARCHAR(191) NOT NULL,
    `selectedSize` VARCHAR(191) NULL,
    `selectedColor` VARCHAR(191) NULL,

    UNIQUE INDEX `product_serialNumber_key`(`serialNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productimages` (
    `id` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imagespath` (
    `id` VARCHAR(191) NOT NULL,
    `imagePath` VARCHAR(191) NOT NULL,
    `productImagesId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productsizes` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reviews` (
    `id` VARCHAR(191) NOT NULL,
    `text` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `autherId` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 7,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specifications` (
    `id` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `uptatedAt` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NULL,
    `avatarPath` VARCHAR(191) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_orderToproduct` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_orderToproduct_AB_unique`(`A`, `B`),
    INDEX `_orderToproduct_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `order` ADD CONSTRAINT `order_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productimages` ADD CONSTRAINT `productimages_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imagespath` ADD CONSTRAINT `imagespath_productImagesId_fkey` FOREIGN KEY (`productImagesId`) REFERENCES `productimages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productsizes` ADD CONSTRAINT `productsizes_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reviews` ADD CONSTRAINT `reviews_autherId_fkey` FOREIGN KEY (`autherId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specifications` ADD CONSTRAINT `specifications_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_orderToproduct` ADD CONSTRAINT `_orderToproduct_A_fkey` FOREIGN KEY (`A`) REFERENCES `order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_orderToproduct` ADD CONSTRAINT `_orderToproduct_B_fkey` FOREIGN KEY (`B`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
