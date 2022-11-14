import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Item } from './models';
import { DbConfig } from './config';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: DbConfig.HOST,
      port: DbConfig.PORT,
      username: DbConfig.USER,
      password: DbConfig.PASSWORD,
      database: DbConfig.DB,
      models: [Item],
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Item]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
