import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoute.js";

dotenv.config();

const PORT = 8888;
const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error while connecting to MongoDB: ", error.message))

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())

app.use(cors());

app.get("/", (req, res) => {
  res.send("Root");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Backend URL: http://localhost:${PORT}`);
});
