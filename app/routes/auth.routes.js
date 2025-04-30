import express from "express";

import { signup, signin } from "../controllers/auth.controller.js";

import {
  checkDuplicateUsernameOrEmail, // Verifica si el username o email ya existen
  checkRolesExisted,              // Verifica si los roles enviados son válidos
} from "../middlewares/verifySignUp.js";

const router = express.Router();

router.post("/signup", [checkDuplicateUsernameOrEmail, checkRolesExisted], signup);

router.post("/signin", signin);

export default router;