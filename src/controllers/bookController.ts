import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

const bookService = new BookService();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar livros.' });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price, category } = req.body;

  try {
    const book = await bookService.addBook(title, author, price, category);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
