import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigsService {
  get databaseConfig() {
    return {
      username: process.env.DB_USERNAME || 'user',
      password: process.env.DB_PASSWORD || 'Tuyen@123',
      database: process.env.DB_NAME || 'nestjs_db',
      port: parseInt(process.env.DB_PORT) || 3306,
      host: process.env.DB_HOST || '127.0.0.1',
      entities: ['dist/*/entities/*.entity.js'],
      migrations: ['dist/src/migrations/*.js'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE) || true,
    };
  }
}
