import { User } from "@/core/domain/entities/user";
import { CreateEncriptPass } from "@/core/domain/security/encrypter";
import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";

export class CreateUser {
  constructor(
    private readonly usersRepository: UserRepositoryDatabase,
    private readonly encrypter: CreateEncriptPass
  ) {}

  async execute(input: User.Props) {
    if (!input.email) {
      return {
        err: true,
        message: "Email not found!",
      };
    }

    const emailAlreadyExists = await this.usersRepository.emailAlreadyExists(
      input.email
    );

    if (emailAlreadyExists) {
      throw {
        message: "E-mail already registered!",
      };
    }

    const user = new User({
      name: input.name,
      email: input.email,
      password: this.encrypter.encriptPass(input.password),
      nivel: input.nivel || 1,
    });

    await this.usersRepository.create(user);
  }
}
