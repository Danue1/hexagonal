export type UserEntity = {
  id: string;
};

export abstract class UserRepository {
  abstract findById: (id: string) => Promise<UserEntity>;
}

export class UserAdapter implements UserRepository {
  async findById(id: string): Promise<UserEntity> {
    return { id };
  }
}
