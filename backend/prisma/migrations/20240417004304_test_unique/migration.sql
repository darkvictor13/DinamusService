/*
  Warnings:

  - The primary key for the `user_role_map` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[user_id,role_id]` on the table `user_role_map` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "user_role_map" DROP CONSTRAINT "user_role_map_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "user_role_map_user_id_role_id_key" ON "user_role_map"("user_id", "role_id");
