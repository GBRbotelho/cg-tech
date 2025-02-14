import { UserRepositoryDatabase } from "@/core/infra/repositories/user-repository";
import { TokenService } from "@/core/infra/security/Token";

export class UserVerify {
  constructor(
    private readonly usersRepository: UserRepositoryDatabase,
    private readonly tokenService: TokenService
  ) {}

  async execute(token: string) {
    if (!token) {
      throw new Error("Token não fornecido");
    }

    // Decodifica o token para obter o ID do usuário
    const decoded: any = this.tokenService.decode(token);

    if (!decoded || !decoded._id) {
      throw new Error("Token inválido ou expirado");
    }

    // Busca o usuário no banco de dados
    const user = await this.usersRepository.getById(decoded._id);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return {
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        nivel: user.nivel,
      },
    };
  }
}
