/*
  Warnings:

  - Added the required column `name` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hotel` ADD COLUMN `name` VARCHAR(191) NOT NULL;
