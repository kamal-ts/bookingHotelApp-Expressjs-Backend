/*
  Warnings:

  - Added the required column `userUuid` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `userUuid` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_userUuid_fkey` FOREIGN KEY (`userUuid`) REFERENCES `User`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
