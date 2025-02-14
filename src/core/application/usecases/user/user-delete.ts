import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";

export class DeleteUser {
  constructor(private readonly usersRepository: UserRepositoryDatabase) {}

  async execute(userId: string) {
    console.log(userId);
    await this.usersRepository.delete(userId);

    return {
      success: true,
      message: "Usuário excluído com sucesso!",
    };
  }
}
