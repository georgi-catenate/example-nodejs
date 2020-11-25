import {MigrationInterface, QueryRunner} from "typeorm";

export class addProduct1606233345882 implements MigrationInterface {
    name = 'addProduct1606233345882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "description" text NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT 'now()', "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
