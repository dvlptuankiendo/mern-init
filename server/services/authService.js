import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

import User from "../models/user.js";
import { BAD_REQUEST, jwtOptions, salt } from "../utils/constants.js";

dotenv.config();

const { JWT_SECRET } = process.env;

const verify = async (token) => {
  const decode = jwt.verify(token, JWT_SECRET);
  return decode;
};

const login = async (username, password) => {
  const existUser = await User.findOne({ username });
  if (!existUser) throw new Error(BAD_REQUEST);
  const isValidPassword = bcrypt.compareSync(password, existUser.password);
  if (!isValidPassword) throw new Error(BAD_REQUEST);

  const payload = { username };
  const newToken = jwt.sign(payload, JWT_SECRET, jwtOptions);
  return newToken;
};

const register = async (username, password) => {
  const existUser = await User.findOne({ username });
  if (existUser) throw new Error("User exist");

  const hashedPassword = bcrypt.hashSync(password, salt);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  return { username };
};

export default {
  verify,
  login,
  register,
};
