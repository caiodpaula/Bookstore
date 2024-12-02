import express from "express";
import { getAllBooks, addBook } from "../controllers/bookControllers";

const router = express.Router();

// Rota para listar todos os livros
router.get("/", getAllBooks);

// Rota para adicionar um novo livro
router.post("/", addBook);

export default router;
