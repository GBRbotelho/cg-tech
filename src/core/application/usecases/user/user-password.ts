import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";
import { CreateEncriptPass } from "@/core/domain/security/encrypter";

export class UpdatePassword {
  constructor(
    private readonly usersRepository: UserRepositoryDatabase,
    private readonly encrypter: CreateEncriptPass
  ) {}

  async execute(userId: string, newPassword: { password: string }) {
    const encryptedPassword = this.encrypter.encriptPass(newPassword.password);

    await this.usersRepository.updatePassword(userId, encryptedPassword);

    return {
      success: true,
      message: "Senha alterada com sucesso!",
    };
  }
}
