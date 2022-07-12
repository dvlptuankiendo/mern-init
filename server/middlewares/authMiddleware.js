import { FORBIDDEN, UNAUTHORIZED } from "../utils/constants.js";
import authService from "../services/authService.js";

const { COOKIE_NAME } = process.env;

export const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.[COOKIE_NAME];

    if (!token) throw new Error(UNAUTHORIZED);

    const data = await authService.verify(token);
    next();
  } catch (error) {
    res.status(401).json({ message: error.message || UNAUTHORIZED });
    return;
  }
};

export const roleAuth = (userRole) => async (req, res, next) => {
  try {
    const token = req.cookies?.[COOKIE_NAME];
    if (!token) throw new Error(UNAUTHORIZED);

    const data = await authService.verify(token);
    const { role } = data;
    if (role !== userRole) throw new Error(FORBIDDEN);
    next();
  } catch (error) {
    res.status(403).json({ message: error.message || FORBIDDEN });
    return;
  }
};
