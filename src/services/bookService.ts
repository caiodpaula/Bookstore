import { BookRepository } from "../repositories/bookRepository";
import { Book } from "../models/bookModel";

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  // Método para obter todos os livros
  async getAllBooks(): Promise<Book[]> {
    return await this.bookRepository.getAllBooks();
  }

  // Método para adicionar um novo livro
  async addBook(
    title: string,
    author: string,
    price: number,
    category: number,
  ): Promise<Book> {
    // Aqui você pode adicionar validações adicionais se necessário
    return await this.bookRepository.addBook(title, author, price, category);
  }

  // Método para obter um livro pelo ID
  async getBookById(id: number): Promise<Book | null> {
    return await this.bookRepository.getBookById(id);
  }
}
