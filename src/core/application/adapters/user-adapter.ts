import { User } from "@/core/domain/entities/user";

export class UserAdapter {
  static create(props?: User.Props) {
    return new User(props);
  }
}
