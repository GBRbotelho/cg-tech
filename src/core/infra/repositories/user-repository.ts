import { UserAdapter } from "@/core/application/adapters/user-adapter";
import { User } from "@/core/domain/entities/user";
import { connection } from "@/core/infra/databases/mongodb";
import { ObjectId } from "mongodb";

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

  async getById(userId: string) {
    const userProps = await this.collection.findOne({
      _id: new ObjectId(userId),
    });
    if (!userProps) {
      return null;
    }
    return UserAdapter.create(userProps);
  }

  async search(input?: string) {
    const query =
      input !== "" ? { name: { $regex: input, $options: "i" } } : {};

    const usersProps = await this.collection.find(query).toArray();
    return usersProps;
  }

  async update(userId: string, updateData: Partial<User.Props>) {
    return await this.collection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: updateData }
    );
  }

  async updatePassword(userId: string, newPassword: string): Promise<void> {
    await this.collection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { password: newPassword } }
    );
  }

  async delete(userId: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(userId) });
  }
}
