import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";

export class SearchUser {
  constructor(private readonly usersRepository: UserRepositoryDatabase) {}

  async execute(data: { input: string }) {
    const users = await this.usersRepository.search(data.input);

    return {
      success: true,
      data: users.map((user) => ({
        ...user,
        password: null,
      })),
    };
  }
}
