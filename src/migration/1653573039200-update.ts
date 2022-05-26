import {MigrationInterface, QueryRunner} from "typeorm";

export class update1653573039200 implements MigrationInterface {
    name = 'update1653573039200'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" ADD "isUsed" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "event_time"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "event_time" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "event_time"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "event_time" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "subscription" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "subscription" DROP COLUMN "isUsed"`);
    }

}
