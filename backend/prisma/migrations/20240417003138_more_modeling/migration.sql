/*
  Warnings:

  - A unique constraint covering the columns `[name,church_id]` on the table `ministries` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,ministry_id]` on the table `roles` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "user_role_map" (
    "user_id" INTEGER NOT NULL,
    "role_id" INTEGER NOT NULL,

    CONSTRAINT "user_role_map_pkey" PRIMARY KEY ("user_id","role_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ministries_name_church_id_key" ON "ministries"("name", "church_id");

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_ministry_id_key" ON "roles"("name", "ministry_id");

-- AddForeignKey
ALTER TABLE "user_role_map" ADD CONSTRAINT "user_role_map_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_role_map" ADD CONSTRAINT "user_role_map_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
