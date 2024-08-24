import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService, UserUseCase } from './user.service';
import { UserAdapter, UserRepository } from './user.repository';

@Module({
  controllers: [UserController],
  providers: [
    { provide: UserUseCase, useClass: UserService },
    { provide: UserRepository, useClass: UserAdapter },
  ],
})
export class UserModule {
  //
}
