import { hashPassword, comparePassword } from "../helpers/hashHelper";
import { isValidEmail } from "../helpers/validationHelper";

describe("Helpers", () => {
  it("should hash and compare passwords correctly", async () => {
    const password = "mySecretPassword";
    const hashedPassword = await hashPassword(password);

    expect(await comparePassword(password, hashedPassword)).toBe(true);
    expect(await comparePassword("wrongPassword", hashedPassword)).toBe(false);
  });

  it("should validate email correctly", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("invalid-email")).toBe(false);
  });
});
