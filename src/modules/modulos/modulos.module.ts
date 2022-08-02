import { Module } from '@nestjs/common';
import { ModulosController } from './modulos.controller';
import { ModulosService } from './modulos.service';

@Module({
  controllers: [ModulosController],
  providers: [ModulosService],
})
export class ModulosModule {}
