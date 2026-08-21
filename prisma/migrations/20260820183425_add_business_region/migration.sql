/*
  Warnings:

  - Added the required column `region` to the `Business` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Region" AS ENUM ('NORTH', 'CENTRAL', 'SOUTH', 'EAST');

-- AlterTable
ALTER TABLE "Business" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "region" "Region" NOT NULL;
