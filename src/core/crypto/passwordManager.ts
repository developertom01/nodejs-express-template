import { randomBytes, scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

const promisifiedScrypt = promisify(scrypt);

export class PasswordManager {
  private static _generateSalt(saltNumber: number): string {
    return randomBytes(saltNumber).toString("hex");
  }

  private static async _encryptPassword(
    password: string,
    salt: string
  ): Promise<Buffer> {
    return promisifiedScrypt(password, salt, 32) as Promise<Buffer>;
  }

  public static async hashPassword(
    password: string,
    salt: number
  ): Promise<string> {
    const saltString = this._generateSalt(salt);
    const bufferedEncryptedPasswordBuff = await this._encryptPassword(
      password,
      saltString
    );
    return bufferedEncryptedPasswordBuff.toString("hex") + salt;
  }

  public static async comparePassword(
    encrypted: string,
    password: string
  ): Promise<boolean> {
    const salt = encrypted.slice(64);
    const originalPasswordHash = encrypted.slice(0, 64);
    const currentPassword = await this._encryptPassword(password, salt);
    const originalPasswordHashBuff = Buffer.from(originalPasswordHash, "hex");
    return timingSafeEqual(originalPasswordHashBuff, currentPassword);
  }
}
