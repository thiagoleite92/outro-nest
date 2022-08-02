import { DatabaseModule } from './../../database/database.module';
import { UserProviders } from './user.providers';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
})
export class UserModule {}
