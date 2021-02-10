import {MigrationInterface, QueryRunner} from "typeorm";

export default class CreateSingleTableInheritance1612976981991 implements MigrationInterface {
    name = 'CreateSingleTableInheritance1612976981991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institution" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying, "twoYearDegrees" character varying, "doctors" character varying, "masters" character varying, "type" character varying NOT NULL, CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_829e3ef7ee5db8aed1a64a2545" ON "institution" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_829e3ef7ee5db8aed1a64a2545"`);
        await queryRunner.query(`DROP TABLE "institution"`);
    }

}
