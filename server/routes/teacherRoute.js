import express from "express";
import teacherController from "../controllers/TeacherController.js";

const router = express.Router();

router.get("/", teacherController.getInfo);

export default router;
