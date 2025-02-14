import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";

export class SearchUser {
  constructor(private readonly usersRepository: UserRepositoryDatabase) {}

  async execute(data: { input: string }) {
    console.log(data);
    const users = await this.usersRepository.search(data.input);

    return {
      success: true,
      data: users,
    };
  }
}
