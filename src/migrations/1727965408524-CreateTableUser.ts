import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1727965408524 implements MigrationInterface {
  name = 'CreateTableUser1727965408524';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE \`user\` (
        \`id\` int NOT NULL AUTO_INCREMENT,
        \`username\` varchar(255) NOT NULL,
        \`email\` varchar(255) NOT NULL,
        \`password\` varchar(255) NOT NULL,
        \`address\` varchar(255),
        \`full_name\` varchar(255) NOT NULL,
        \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (\`id\`)
      ) ENGINE=InnoDB
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
