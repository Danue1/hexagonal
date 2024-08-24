import { Controller, Get, Param } from '@nestjs/common';
import { UserEntity, UserRepository } from './user.repository';
import { UserUseCase } from './user.service';

@Controller()
export class UserController {
  constructor(
    private readonly userUseCase: UserUseCase,
    private readonly userRepository: UserRepository,
  ) {
    //
  }

  @Get('/users/:userId')
  findOneById(@Param('userId') userId: string): Promise<null | UserEntity> {
    return this.userUseCase.findUserById({ userId }, this.userRepository);
  }
}
