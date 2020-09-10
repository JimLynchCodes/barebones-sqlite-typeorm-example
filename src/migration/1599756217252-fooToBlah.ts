import {MigrationInterface, QueryRunner} from "typeorm";

export class fooToBlah1599756217252 implements MigrationInterface {
    name = 'fooToBlah1599756217252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "bar" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_user"("id", "firstName", "lastName", "age", "bar") SELECT "id", "firstName", "lastName", "age", "foo" FROM "user"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, "foo" integer NOT NULL)`);
        await queryRunner.query(`INSERT INTO "user"("id", "firstName", "lastName", "age", "foo") SELECT "id", "firstName", "lastName", "age", "bar" FROM "temporary_user"`);
        await queryRunner.query(`DROP TABLE "temporary_user"`);
    }

}
