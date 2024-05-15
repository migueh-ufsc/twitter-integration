import { BaseUseCase } from 'contracts/usecases/BaseUseCase';
import { UserService } from 'services/UserService';

export class CreateUserUseCase implements BaseUseCase {
  constructor(private userService: UserService) {}

  async execute(userData: any) {
    const userAlreadyExists = await this.userService.findByUsername(userData.username);
    if (userAlreadyExists) {
      throw new Error('Usuário já existe.');
    }

    const user = await this.userService.create(userData);

    return user;
  }
}

