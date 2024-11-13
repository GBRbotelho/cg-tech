import { UserAdapter } from "@/core/application/adapters/user-adapter";
import { User } from "@/core/domain/entities/user";
import { connection } from "@/core/infra/databases/mongodb";

export class UserRepositoryDatabase {
  private collection = connection.collection<User.Props>("users");

  async create(props: User): Promise<void> {
    await this.collection.insertOne(props.values());
  }

  async emailAlreadyExists(email: string): Promise<boolean> {
    const count = await this.collection.countDocuments({ email });
    return count > 0;
  }

  async getByEmail(email: string) {
    const userProps = await this.collection.findOne({ email });
    if (!userProps) {
      return null;
    }

    return UserAdapter.create(userProps);
  }
}
