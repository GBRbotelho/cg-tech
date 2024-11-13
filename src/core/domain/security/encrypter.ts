export interface AuthenticateUserEncripter
  extends Pick<Encripter, "isValidPass"> {}

export interface CreateEncriptPass extends Pick<Encripter, "encriptPass"> {}

export interface Encripter {
  isValidPass(password: string, passwordEnc: string): boolean;
  encriptPass(password: string): string;
}
