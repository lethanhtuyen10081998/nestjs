import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertUserRow1727785427845 implements MigrationInterface {
  name = 'InsertUserRow1727785427845';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO user (username, email, password, address, full_name, created_at, updated_at)
      VALUES ('newuser123', 'newuser123@example.com', 'securepassword123', '123 Main St', 'New User', NOW(), NOW());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM user WHERE username = 'newuser123';
    `);
  }
}
