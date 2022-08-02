import { AulasModule } from './modules/aulas/aulas.module';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ModulosModule } from './modules/modulos/modulos.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    ModulosModule,
    AulasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
