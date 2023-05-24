import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { TodosModule } from './todos/todos.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [TodosModule, UserModule, TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "172.21.0.2",
      "port": 5432,
      "username": "postgres",
      "password": "password",
      "database": "my_database",
      "entities": [User],
      "synchronize": true
  }),
  TypeOrmModule.forFeature([User]),],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
