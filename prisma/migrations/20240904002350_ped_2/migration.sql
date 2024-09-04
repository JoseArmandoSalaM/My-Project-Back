/*
  Warnings:

  - A unique constraint covering the columns `[Name]` on the table `Tools` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `Cantidad_disponible` on the `Tools` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Tools" DROP COLUMN "Cantidad_disponible",
ADD COLUMN     "Cantidad_disponible" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tools_Name_key" ON "Tools"("Name");
