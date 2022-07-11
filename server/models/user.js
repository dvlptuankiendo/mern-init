import mongoose from "mongoose";

import { ROLES } from "../utils/constants.js";

const { Schema } = mongoose;
const roles = Object.values(ROLES)

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: { type: String, enum: roles },
});

const User = mongoose.model("User", userSchema);

export default User;
