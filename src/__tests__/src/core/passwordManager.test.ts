import { PasswordManager } from "../../../core";

describe("PasswordManager", () => {
  test("Should return true", async () => {
    const originalPassword = "password";
    const newPassword = "password";
    const hashedPassword = await PasswordManager.hashPassword(
      originalPassword,
      10
    );
    const isMatched = await PasswordManager.comparePassword(
      hashedPassword,
      newPassword
    );
    expect(isMatched).toBe(true);
  });
  test("Should return false", async () => {
    const originalPassword = "password";
    const newPassword = "password2";
    const hashedPassword = await PasswordManager.hashPassword(
      originalPassword,
      10
    );
    const isMatched = await PasswordManager.comparePassword(
      hashedPassword,
      newPassword
    );
    expect(isMatched).toBe(false);
  });
});
