import {
  AuthenticateUser,
  AuthenticateUserInputDTO,
} from "@/core/application/usecases/user/user-authenticate";
import { CreateUser } from "../../application/usecases/user/user-create";
import { User } from "../../domain/entities/user";
import { UserRepositoryDatabase } from "../repositories/user-repository";
import { BcryptEncripter } from "../security/Bcrypt";
import { TokenService } from "../security/Token";

export const UserFactory = {
  create: async (user: User.Props) => {
    const createUser = new CreateUser(
      new UserRepositoryDatabase(),
      new BcryptEncripter()
    );

    const create = await createUser.execute(user);
  },

  authenticate: async (user: AuthenticateUserInputDTO) => {
    const authenticate = new AuthenticateUser(
      new UserRepositoryDatabase(),
      new BcryptEncripter(),
      new TokenService()
    );

    return await authenticate.execute(user);
  },
};
