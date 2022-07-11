import authService from "../services/authService.js";
import { BAD_REQUEST } from "../utils/constants.js";

const { COOKIE_NAME, COOKIE_MAX_AGE } = process.env;

const verify = async (req, res, next) => {
  try {
    const token = req.cookies[COOKIE_NAME];
    if (!token) throw new Error("Unauthenticated");
    const data = await authService.verify(token);
    res.status(200).json(data)
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new Error(BAD_REQUEST);
    const token = await authService.login(username, password);
    res.cookie(COOKIE_NAME, token, { maxAge: COOKIE_MAX_AGE });
    res.status(200).json({ token });
    return;
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const register = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || role) throw new Error(BAD_REQUEST);
    const newUser = await authService.register(username, password, role);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export default {
  verify,
  login,
  register,
};
