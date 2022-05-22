import {MigrationInterface, QueryRunner} from "typeorm";

export class initilize1653217379640 implements MigrationInterface {
    name = 'initilize1653217379640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subscription" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "alert_id" character varying NOT NULL, "checkout_id" character varying NOT NULL, "event_time" TIMESTAMP NOT NULL, "licence" character varying NOT NULL, "marketing_consent" integer NOT NULL, "order_id" character varying NOT NULL, "product_id" character varying NOT NULL, CONSTRAINT "PK_8c3e00ebd02103caa1174cd5d9d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "subscription"`);
    }

}
