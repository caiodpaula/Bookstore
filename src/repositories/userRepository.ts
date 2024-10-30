import { Pool } from "pg";
import pool from "../config/database";
import { User } from "../models/userModel";

export class UserRepository {
  private pool: Pool = pool;

  // Método para adicionar um novo usuário
  async addUser(
    name: string,
    email: string,
    passwordHash: string,
  ): Promise<User> {
    const query =
      "INSERT INTO users (name, email, passwordHash) VALUES ($1, $2, $3) RETURNING *";
    const { rows } = await this.pool.query(query, [name, email, passwordHash]);
    return rows[0];
  }

  // Método para obter todos os usuários
  async getAllUsers(): Promise<User[]> {
    const { rows } = await this.pool.query("SELECT * FROM users");
    return rows; // Retorna todos os usuários
  }

  // Método para obter um usuário pelo email
  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );
    return rows[0] || null;
  }
}
