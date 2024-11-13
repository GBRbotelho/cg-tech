import { User } from "@/core/domain/entities/user";
import { UserFactory } from "../factories/user-factory";

export class UserController {
  static async create(params: any, body: User.Props) {
    return await UserFactory.create(body);
  }

  static async authenticate(
    params: any,
    body: { email: string; password: string }
  ) {
    const response = await UserFactory.authenticate({
      email: body?.email || "",
      password: body?.password || "",
    });

    return response;
  }
}
