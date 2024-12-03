# Livraria API - TypeScript

## Sobre o Projeto

Esta API foi desenvolvida para gerenciar os livros de uma livraria. Os usuários podem adicionar novos livros, listando informações como:

- **Título**
- **Subtítulo**
- **Imagem** (URL)
- **Preço**

Este projeto foi criado como parte de um exercício acadêmico e utiliza a arquitetura MVC (Model-View-Controller) para organizar o código.

## Funcionalidades da API

### 1. Listar todos os livros

- **Método:** `GET`
- **Rota:** `/books`
- **Descrição:** Retorna uma lista contendo todos os livros cadastrados.

#### Exemplo de Resposta:

```json
[
  {
    "id": 1,
    "name": "Exemplo de Livro",
    "subtitle": "Subtítulo do Livro",
    "image": "https://exemplo.com/livro.jpg",
    "price": 29.99
  }
]
```

### 2. Adicionar um novo livro

- **Método:** `POST`
- **Rota:** `/books`
- **Descrição:** Cadastra um novo livro no sistema.
- **Body:**

  ```json
  {
    "name": "Título do Livro",
    "subtitle": "Subtítulo do Livro",
    "image": "URL da imagem",
    "price": 39.99
  }
  ```

#### Exemplo de Resposta:

```json
{
  "id": 1,
  "name": "Título do Livro",
  "subtitle": "Subtítulo do Livro",
  "image": "https://exemplo.com/livro.jpg",
  "price": 29.99
}
```

#### Regras de Validação:

- `name`: obrigatório, deve ser uma string não vazia.
- `subtitle`: obrigatório, deve ser uma string não vazia.
- `image`: obrigatório, deve ser uma URL válida.
- `price`: obrigatório, deve ser um número maior que 0.

## Como Executar o Projeto

### 1. Requisitos

Certifique-se de ter instalado:

- Node.js (última versão recomendada)
- PostgreSQL (banco de dados)

### 2. Configuração do Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

3. Configure o banco de dados:

- As tabelas foram criadas no Supabase.
   - Crie uma tabela chamada `books` com as colunas `id`, `name`, `subtitle`, `image` e `price`.
   - Você pode usar o seguinte script SQL como exemplo:

     ```sql
     CREATE TABLE books (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       subtitle VARCHAR(255) NOT NULL,
       image TEXT NOT NULL,
       price NUMERIC(10, 2) NOT NULL
     );
     ```

4. Defina as variáveis de ambiente no arquivo `.env`:

   ```env
   DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
   PORT=3000
   ```

### 3. Executando a Aplicação

Para iniciar o servidor:

```bash
npm run dev
```

A API estará acessível em `http://localhost:3000`.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **PostgreSQL**
- **TypeScript**
- **Jest** (para testes automatizados)

## Licença

Este projeto está sob a licença MIT.

Autor: Caio Pereira de Paula