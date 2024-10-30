import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Nome, email e senha são obrigatórios." });
  }

  try {
    const user = await userService.createUser(name, email, password);
    const { passwordHash, ...userWithoutPassword } = user;
    res.status(201).json(userWithoutPassword);
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido." });
    }
  }
};

export const listUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.listUsers();
    res.status(200).json(users);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(500).json({ error: "Erro desconhecido." });
    }
  }
};
