import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string): Promise<string> => {
   const saltRounds = 10; 
   return await bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
   return await bcrypt.compare(password, hash);
};

// Função para criar uma nova sessão (token JWT)
export const createSession = (userId: number): string => {
   const token = jwt.sign({ id: userId }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
   return token;
};

