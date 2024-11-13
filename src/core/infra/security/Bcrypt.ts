import { Encripter } from "@/core/domain/security/encrypter";
import bcrypt from "bcrypt";

export class BcryptEncripter implements Encripter {
  isValidPass(password: string, passwordEnc: string): boolean {
    return bcrypt.compareSync(password, passwordEnc);
  }
  encriptPass(password: string): string {
    return bcrypt.hashSync(password, 10);
  }
}
