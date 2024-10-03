import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1727965408524 implements MigrationInterface {
    name = 'CreateTableUser1727965408524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`auth\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`auth\``);
    }

}
