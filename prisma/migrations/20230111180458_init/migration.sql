/*
  Warnings:

  - Added the required column `title` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `title` VARCHAR(191) NOT NULL;
