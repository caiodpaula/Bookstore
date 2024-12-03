import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Simulação de banco de dados
let books = [
  {
    title: "Livro Exemplo",
    subtitle: "Um ótimo livro",
    image: "https://example.com/livro.jpg",
    price: "49.90",
  },
  {
    title: "Harry Potter",
    subtitle: "A ordem da fênix",
    image: "https://example.com/livro.jpg",
    price: "39.90",
  },
];

// Configuração do middleware CORS
app.use(
  cors({
    origin: ["http://localhost:4200", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// Configuração do body-parser
app.use(bodyParser.json());

// Rota DELETE para excluir um livro pelo título
app.delete(
  "/:title",
  (req: express.Request<{ title: string }>, res: express.Response): void => {
    const { title } = req.params;

    const index = books.findIndex((book) => book.title === title);

    if (index === -1) {
      res.status(404).json({ error: "Livro não encontrado." });
      return;
    }

    books.splice(index, 1);
    res.status(200).json({ message: "Livro excluído com sucesso." });
  },
);

// Rota GET para listar todos os livros
app.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).json(books);
});

// Rota POST para adicionar um novo livro
app.post("/", (req: express.Request, res: express.Response): void => {
  const { title, subtitle, image, price } = req.body;

  if (!title || !subtitle || !image || !price) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  books.push({ title, subtitle, image, price });
  res.status(201).json({
    message: "Livro adicionado com sucesso.",
    book: { title, subtitle, image, price },
  });
});

// Rota PUT para editar um livro pelo título
app.put(
  "/:title",
  (req: express.Request<{ title: string }>, res: express.Response): void => {
    const { title } = req.params;
    const { title: newTitle, subtitle, image, price } = req.body;

    const index = books.findIndex((book) => book.title === title);

    if (index === -1) {
      res.status(404).json({ error: "Livro não encontrado." });
      return;
    }

    // Atualiza os dados do livro
    books[index] = {
      title: newTitle || books[index].title,
      subtitle: subtitle || books[index].subtitle,
      image: image || books[index].image,
      price: price || books[index].price,
    };

    res.status(200).json({
      message: "Livro atualizado com sucesso.",
      book: books[index],
    });
  },
);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
