import jwt from "jsonwebtoken";

// Função para criar uma nova sessão (token JWT)
export const createSession = (userId: number): string => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || "secret", {
    expiresIn: "1h",
  });
  return token;
};
