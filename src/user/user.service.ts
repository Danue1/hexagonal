import { Injectable } from '@nestjs/common';
import { UserEntity, UserRepository } from './user.repository';

export type FindUserByIdPayload = {
  readonly userId: string;
};

export abstract class UserUseCase {
  abstract findUserById(
    payload: FindUserByIdPayload,
    userRepository: UserRepository,
  ): Promise<UserEntity>;
}

@Injectable()
export class UserService implements UserUseCase {
  findUserById(
    payload: FindUserByIdPayload,
    userRepository: UserRepository,
  ): Promise<UserEntity> {
    return userRepository.findById(payload.userId);
  }
}
