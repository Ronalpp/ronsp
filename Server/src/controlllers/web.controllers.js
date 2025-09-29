import { db } from "../db.js";

export const sendMsg = async (req, res) => {
  try {
    const { nombre, email, msg } = req.body;

    const { rows } = await db.query(
      "INSERT INTO mensages (nombre, email, msg) VALUES ($1, $2, $3) RETURNING *",
      [nombre.trim(), email.trim(), msg.trim()],
    );

    res.status(201).json({
      success: true,
      message: "Mensaje enviado correctamente",
      data: rows[0],
    });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: "No se pudo enviar el mensaje",
    });
  }
};
