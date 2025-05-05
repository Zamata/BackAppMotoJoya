import dotenv from 'dotenv';
dotenv.config();
// Importa Express para crear la aplicación web
import express from "express";

// Importa CORS para permitir solicitudes desde otros dominios (por ejemplo, desde el frontend)
import cors from "cors";

// Importa los modelos y configuración de Sequelize (ORM para la base de datos)
import db from "./app/models/index.js";

// Importa las rutas de autenticación (signup, signin)
import authRoutes from "./app/routes/auth.routes.js";

// Importa las rutas protegidas por roles de usuario
import userRoutes from "./app/routes/user.routes.js";

//import licenseRoutes from "./app/routes/license.routes.js"; EMPLEO A FUTURO

// Crea una instancia de la aplicación Express
const app = express();

// Configura las opciones de CORS para permitir acceso desde el frontend en el puerto 8080
const corsOptions = {
  origin: [
    "http://localhost:5173",           // para desarrollo local
    "https://frontreactmotojoya.onrender.com"  // para producción en Render
  ],
  credentials: true // si usas cookies o autenticación
};

//app.use("/api/licenses", licenseRoutes);

// Aplica el middleware de CORS a la aplicación
app.use(cors(corsOptions));

// Middleware para analizar solicitudes con cuerpo en formato JSON
app.use(express.json());

// Middleware para analizar solicitudes con cuerpo en formato URL-encoded (formularios)
app.use(express.urlencoded({ extended: true }));

// Ruta simple para probar que el servidor está funcionando
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Node.js JWT Authentication API." });
});

// Define la ruta base para autenticación: /api/auth/signup y /api/auth/signin
app.use("/api/auth", authRoutes);

// Define la ruta base para pruebas de acceso según el rol del usuario: /api/test/*
app.use("/api/licenses", userRoutes);

// Define el puerto en el que se ejecutará el servidor. Usa 3000 por defecto o lo que se indique en el entorno
const PORT = process.env.PORT || 3000;

// Sincroniza los modelos con la base de datos (sin borrar datos si force está en false)
db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized");
});

// Luego inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*import dotenv from 'dotenv';
dotenv.config();
import express from "express";

import cors from "cors";

import db from "./app/models/index.js";

import authRoutes from "./app/routes/auth.routes.js";

import userRoutes from "./app/routes/user.routes.js";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:8080"]
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Node.js JWT Authentication API." });
});

app.use("/api/auth", authRoutes);

app.use("/api/test", userRoutes);

const PORT = process.env.PORT || 3000;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Database synchronized");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});*/