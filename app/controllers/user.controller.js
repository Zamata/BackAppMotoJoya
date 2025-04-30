export const allAccess = (req, res) => {
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
};