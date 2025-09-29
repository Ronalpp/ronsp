import { db } from "../db.js";

export const getMsg = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM mensages");
    res.status(200).json({
      success: true,
      count: rows.length,
      msg: rows,
    });
  } catch (error) {
    console.error("Error getting messages:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: "No se pudieron obtener los mensajes",
    });
  }
};

export const deleteMsg = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({
        error: "ID inválido",
        message: "El ID debe ser un número válido",
      });
    }

    const { rows, rowCount } = await db.query(
      "DELETE FROM mensages WHERE id = $1 RETURNING *",
      [parseInt(id)],
    );

    if (rowCount === 0) {
      return res.status(404).json({
        error: "Mensaje no encontrado",
        message: "No se encontró un mensaje con ese ID",
      });
    }

    res.status(200).json({
      success: true,
      message: "Mensaje eliminado correctamente",
      data: rows[0],
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({
      error: "Error interno del servidor",
      message: "No se pudo eliminar el mensaje",
    });
  }
};
