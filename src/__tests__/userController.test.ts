import request from "supertest";
import express from "express";
import { createUser, listUsers } from "../controllers/UserController";
import { UserService } from "../services/userService";

jest.mock("../services/userService"); // Mockando o UserService

const app = express();
app.use(express.json());
app.post("/api/auth/register", createUser);
app.get("/api/auth/users", listUsers);

describe("User Controller", () => {
  it("should create a user successfully", async () => {
    (UserService.prototype.createUser as jest.Mock).mockResolvedValue({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      passwordHash: "hashedpassword123",
    });

    const response = await request(app).post("/api/auth/register").send({
      name: "John Doe",
      email: "john@example.com",
      password: "mypassword",
    });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 1,
      name: "John Doe",
      email: "john@example.com",
    });
  });

  it("should return a validation error when creating a user with invalid data", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ name: "", email: "invalid-email", password: "" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  it("should list all users", async () => {
    (UserService.prototype.listUsers as jest.Mock).mockResolvedValue([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Doe", email: "jane@example.com" },
    ]);

    const response = await request(app).get("/api/auth/users");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(2);
  });
});
