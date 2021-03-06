import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const { JWT_LIFETIME } = process.env;

export const salt = bcrypt.genSaltSync(10);

export const BAD_REQUEST = "Bad request";
export const UNAUTHORIZED = "Unauthorized";
export const FORBIDDEN = "Forbidden"

export const jwtOptions = {
  expiresIn: JWT_LIFETIME,
};

export const ROLES = {
  ADMIN: "admin",
  TEACHER: "teacher",
  STUDENT: "student"
}
