import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";

export class EditUser {
  constructor(private readonly usersRepository: UserRepositoryDatabase) {}

  async execute(
    userId: string,
    updateData: Partial<{ name: string; email: string; nivel: number }>
  ) {
    await this.usersRepository.update(userId, updateData);

    return {
      success: true,
      message: "Usuário atualizado com sucesso!",
    };
  }
}
