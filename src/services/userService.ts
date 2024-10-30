import { isValidEmail, isValidName } from "../helpers/validationHelper";
import { UserRepository } from "../repositories/userRepository";
import { hashPassword } from "../helpers/hashHelper"; // Importando o hashHelper
import { User } from "../models/userModel"; // Importando o modelo User

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  // Método para criar um novo usuário
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<User> {
    if (!isValidName(name)) {
      throw new Error("Nome inválido");
    }
    if (!isValidEmail(email)) {
      throw new Error("Email inválido");
    }

    const passwordHash = await hashPassword(password); // Hasheia a senha antes de armazenar
    return await this.userRepository.addUser(name, email, passwordHash);
  }

  // Método para listar todos os usuários
  async listUsers(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }
}
