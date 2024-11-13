import { Encripter } from "@/core/domain/security/encrypter";
import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";
import { TokenService } from "@/core/infra/security/Token";

export type AuthenticateUserInputDTO = {
  email: string;
  password: string;
};

export class AuthenticateUser {
  constructor(
    private readonly usersRepository: UserRepositoryDatabase,
    private readonly encrypter: Encripter,
    private readonly tokenService: TokenService
  ) {}

  async execute(data: AuthenticateUserInputDTO) {
    const user = await this.usersRepository.getByEmail(data.email);

    if (!user) {
      throw { message: "Invalid username or password" };
    }

    if (!this.encrypter.isValidPass(data.password, user.password)) {
      throw { message: "Invalid username or password" };
    }

    const token = this.tokenService.create({
      _id: user._id,
    });

    return {
      token,
    };
  }
}
