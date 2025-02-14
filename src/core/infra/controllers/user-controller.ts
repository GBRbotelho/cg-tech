import { User } from "@/core/domain/entities/user";
import { UserFactory } from "../factories/user-factory";

export class UserController {
  static async create(params: any, body: User.Props) {
    return await UserFactory.create(body);
  }

  static async update(params: any, body: User.Props) {
    return await UserFactory.update(body);
  }

  static async search(params: any, body: string) {
    return await UserFactory.search(body);
  }

  static async delete(params: any, body: string) {
    return await UserFactory.delete(params.id);
  }

  static async password(params: any, body: string) {
    return await UserFactory.password(params.id, body);
  }

  static async verify(params: any, body: string, token: string) {
    return await UserFactory.verify(token);
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
