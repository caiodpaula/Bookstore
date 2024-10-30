import { Router } from "express";
import { createUser, listUsers } from "../controllers/UserController"; // Importando os métodos do userController

const router = Router();

// Rota para registro de um novo usuário
router.post("/register", createUser);

// Rota para listar todos os usuários (opcional)
router.get("/users", listUsers); // Adicionando uma rota para listar usuários

export default router;
