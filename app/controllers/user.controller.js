// Controlador que responde a rutas públicas (accesibles sin autenticación)
//Importamos la db de licencia para que funcione
import db from "../models/index.js";

const License = db.license;

export const allAccess = async (req, res) => {
  try {
    const licenses = await License.findAll();
    res.status(200).json(licenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/*
  export const allAccess = (req, res) => {
    res.status(200).send("Public Content."); // Responde con contenido público
  };
  
  // Controlador que responde a rutas accesibles solo para usuarios autenticados
  export const userBoard = (req, res) => {
    res.status(200).send("User Content."); // Responde con contenido para usuarios comunes
  };
  
  // Controlador que responde a rutas exclusivas para administradores
  export const adminBoard = (req, res) => {
    res.status(200).send("Admin Content."); // Responde con contenido para admins
  };
  
  // Controlador que responde a rutas exclusivas para moderadores
  export const moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content."); // Responde con contenido para moderadores
  };
*/

// Crear nueva licencia
export const createLicense = async (req, res) => {
  try {
    const license = await License.create(req.body);
    res.status(201).json(license);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getLicenseById = async (req, res) => {
  try {
    const license = await License.findByPk(req.params.id);
    if (!license) {
      return res.status(404).json({ message: "Licencia no encontrada" });
    }
    res.status(200).json(license);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar una licencia por ID
export const updateLicense = async (req, res) => {
  try {
    const [updated] = await License.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ message: "Licencia no encontrada" });
    res.status(200).json({ message: "Licencia actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una licencia por ID
export const deleteLicense = async (req, res) => {
  try {
    const deleted = await License.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Licencia no encontrada" });
    res.status(200).json({ message: "Licencia eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
/*export const allAccess = (req, res) => {
  res.status(200).send("Public Content."); // Responde con contenido público
};

export const userBoard = (req, res) => {
  res.status(200).send("User Content."); // Responde con contenido para usuarios comunes
};

export const adminBoard = (req, res) => {
  res.status(200).send("Admin Content."); // Responde con contenido para admins
};

export const moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content."); // Responde con contenido para moderadores
};*/