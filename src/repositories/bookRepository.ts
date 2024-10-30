import { Pool } from "pg";
import pool from "../config/database";
import { Book } from "../models/bookModel";

export class BookRepository {
   private pool: Pool = pool;

   // Método para obter todos os livros
   async getAllBooks(): Promise<Book[]> {
      const { rows } = await this.pool.query("SELECT * FROM books");
      return rows;
   }

   // Método para adicionar um novo livro
   async addBook(
      title: string,
      author: string,
      price: number,
      category_id: number,
   ): Promise<Book> {
      const query =
         "INSERT INTO books (title, author, price, category_id) VALUES ($1, $2, $3, $4) RETURNING *";
      const { rows } = await this.pool.query(query, [
         title,
         author,
         price,
         category_id,
      ]);
      return rows[0];
   }

   // Método para obter um livro pelo ID
   async getBookById(id: number): Promise<Book | null> {
      const { rows } = await this.pool.query(
         "SELECT * FROM books WHERE id = $1",
         [id],
      );
      return rows[0] || null;
   }
}
