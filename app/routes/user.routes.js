import express from "express";

import {
  allAccess,     // Respuesta para rutas públicas
  userBoard,     // Respuesta para usuarios autenticados
  adminBoard,    // Respuesta para administradores
  moderatorBoard,// Respuesta para moderadores
} from "../controllers/user.controller.js";

import {
  verifyToken,    // Verifica que el usuario esté autenticado (token válido)
  isAdmin,        // Verifica que el usuario tenga rol de admin
  isModerator,    // Verifica que el usuario tenga rol de moderador
  isModeratorOrAdmin, // Verifica que tenga uno de los dos roles
} from "../middlewares/authJwt.js";

const router = express.Router();

router.get("/all", allAccess);

router.get("/user", [verifyToken], userBoard);

router.get("/mod", [verifyToken, isModerator], moderatorBoard);

router.get("/admin", [verifyToken, isAdmin], adminBoard);

export default router;