import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService, UserUseCase } from './user.service';
import { UserEntity, UserRepository } from './user.repository';

describe('AppController', () => {
  describe('getHello', () => {
    let app: TestingModule;

    class TestUserAdapter implements UserRepository {
      async findById(id: string): Promise<UserEntity> {
        return { id: `Test${id}` };
      }
    }

    beforeAll(async () => {
      app = await Test.createTestingModule({
        controllers: [UserController],
        providers: [
          { provide: UserUseCase, useClass: UserService },
          { provide: UserRepository, useClass: TestUserAdapter },
        ],
      }).compile();
    });

    it('should return { id: "Test123456789" }', () => {
      const userController = app.get(UserController);
      expect(userController.findOneById('123456789')).resolves.toEqual({
        id: 'Test123456789',
      });
    });
  });
});
