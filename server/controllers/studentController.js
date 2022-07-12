import {BAD_REQUEST} from "../utils/constants.js"

const getInfo = async (req, res, next) => {
  try {
    res.status(200).json({ data: "You are a student" });
  } catch (error) {
    res.status(401).json({ message: error.message || BAD_REQUEST });
  }
};

export default {
  getInfo,
};
