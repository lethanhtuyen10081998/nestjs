import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigsService {
  get databaseConfig() {
    return {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: parseInt(process.env.DB_PORT) || 3306,
      host: process.env.DB_HOST,
      entities: ['dist/*/entities/*.entity.js'],
      migrations: ['dist/src/migrations/*.js'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE) || true,
    };
  }
}
