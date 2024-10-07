import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodolistModule } from './todolist/todolist.module';
import { FlagsModule } from './flags/flags.module';

@Module({
  // TODO - add user module import after completed `UsersModule`
  imports: [TodolistModule, FlagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
