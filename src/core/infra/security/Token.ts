import jwt from "jsonwebtoken";
import config from "../config";

export class TokenService {
  private secret = config.get("jwt.password");

  create(payload: any): string {
    const registeredDate = new Date();
    registeredDate.setDate(registeredDate.getDate() + 1);

    return jwt.sign(
      { ...payload, registeredAt: registeredDate.getTime() },
      this.secret
    );
  }

  verify(token: string): boolean {
    try {
      jwt.verify(token, this.secret);
      return true;
    } catch (err) {
      return false;
    }
  }
}
