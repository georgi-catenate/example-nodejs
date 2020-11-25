import {MigrationInterface, QueryRunner} from "typeorm";

export class changedPrimaryKeyToAutoGen1606297398253 implements MigrationInterface {
    name = 'changedPrimaryKeyToAutoGen1606297398253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT '2020-11-24 17:56:39.124765+02'`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "PK_bebc9158e480b949565b4dc7a82"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id")`);
    }

}
