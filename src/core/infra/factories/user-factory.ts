import { CreateUser } from "../../application/usecases/user/user-create";
import { User } from "../../domain/entities/user";
import { UserRepositoryDatabase } from "../repositories/user-repository";
import { BcryptEncripter } from "../security/Bcrypt";

export const UserFactory = {
  create: async (user: User.Props) => {
    const createUser = new CreateUser(
      new UserRepositoryDatabase(),
      new BcryptEncripter()
    );

    const create = await createUser.execute(user);
  },
};
