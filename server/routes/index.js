import express from "express";

import authRoute from "./authRoute.js";
import teacherRoute from "./teacherRoute.js";
import studentRoute from "./studentRoute.js";

import { userAuth, roleAuth } from "../middlewares/authMiddleware.js";
import { ROLES } from "../utils/constants.js";

const router = express.Router();

const authTeacher = roleAuth(ROLES.TEACHER)
const authStudent = roleAuth(ROLES.STUDENT)

router.use("/auth", authRoute)

// router.use(userAuth)

router.use("/teacher", userAuth, authTeacher, teacherRoute )
router.use("/student", userAuth, authStudent, studentRoute)

export default router
