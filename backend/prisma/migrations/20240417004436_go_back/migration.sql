-- DropIndex
DROP INDEX "user_role_map_user_id_role_id_key";

-- AlterTable
ALTER TABLE "user_role_map" ADD CONSTRAINT "user_role_map_pkey" PRIMARY KEY ("user_id", "role_id");
