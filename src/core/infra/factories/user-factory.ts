import {
  AuthenticateUser,
  AuthenticateUserInputDTO,
} from "@/core/application/usecases/user/user-authenticate";
import { CreateUser } from "../../application/usecases/user/user-create";
import { User } from "../../domain/entities/user";
import { UserRepositoryDatabase } from "../repositories/user-repository";
import { BcryptEncripter } from "../security/Bcrypt";
import { TokenService } from "../security/Token";
import user from "@/pages/api/user";
import { SearchUser } from "@/core/application/usecases/user/user-search";
import { EditUser } from "@/core/application/usecases/user/user-edit";
import { DeleteUser } from "@/core/application/usecases/user/user-delete";
import { UpdatePassword } from "@/core/application/usecases/user/user-password";
import { UserVerify } from "@/core/application/usecases/user/user-verify";

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

  search: async (input: any) => {
    const search = new SearchUser(new UserRepositoryDatabase());
    return await search.execute(input);
  },

  update: async (input: any) => {
    const edit = new EditUser(new UserRepositoryDatabase());
    return await edit.execute(input._id, {
      name: input.name,
      email: input.email,
      nivel: input.nivel,
    });
  },

  delete: async (input: any) => {
    const edit = new DeleteUser(new UserRepositoryDatabase());
    return await edit.execute(input);
  },

  password: async (userId: string, password: any) => {
    const updatePassword = new UpdatePassword(
      new UserRepositoryDatabase(),
      new BcryptEncripter()
    );

    return await updatePassword.execute(userId, password);
  },

  verify: async (token: string) => {
    const updatePassword = new UserVerify(
      new UserRepositoryDatabase(),
      new TokenService()
    );

    return await updatePassword.execute(token);
  },
};
