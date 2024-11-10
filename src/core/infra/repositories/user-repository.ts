import { User } from "@/core/domain/entities/user";
import { connection } from "@/core/infra/databases/mongodb";

export class UserRepositoryDatabase {
  private collection = connection.collection<User.Props>("users");

  async create(props: User): Promise<void> {
    await this.collection.insertOne(props.values());
  }
}
