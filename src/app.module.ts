import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@/modules/user/user.module';
import { BlogModule } from '@/modules/blog/blog.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { ConfigsModule } from '@/config/config.module';
import { ConfigsService } from './config/config.service';
import { User } from './modules/user/user.entity';
import { Blog } from './modules/blog/blog.entity';

@Module({
  imports: [
    ConfigsModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigsService],
      imports: [ConfigsModule],
      useFactory: async (configsService: ConfigsService) => {
        const dataSourceConfig = configsService.databaseConfig;
        return {
          type: 'mysql',
          ...dataSourceConfig,
          entities: [User, Blog],
        };
      },
    }),
    AuthModule,
    UserModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
