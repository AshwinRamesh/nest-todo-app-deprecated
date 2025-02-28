import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, AuthService]
})
export class UsersModule {}
