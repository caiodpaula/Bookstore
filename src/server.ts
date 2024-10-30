import express from "express";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes";
import authRoutes from "./routes/authRoutes"; // Importando as rotas de autenticação

dotenv.config();

const app = express();
app.use(express.json()); // Para permitir o parsing de JSON

// Usando as rotas
app.use("/api", bookRoutes);
app.use("/api/auth", authRoutes); // Usando as rotas de autenticação

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
