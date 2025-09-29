import express from "express";
import morgan from "morgan";
import cors from "cors";
import { sendMsg } from "./controlllers/web.controllers.js";
import { deleteMsg, getMsg } from "./controlllers/panel.controllers.js";

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.use(cors("https://ronspp.vercel.app/" || "https://gmail-clone-navy-eight.vercel.app/"));

// Rutas de la API
app.post("/send", sendMsg);
app.get("/adminpanel/get", getMsg);
app.delete("/adminpanel/delete/:id", deleteMsg);

// Ruta de health check
app.get("/", (req, res) => {
  res.json({ message: "API is running", status: "ok" });
});

// Para desarrollo local
if ("production") {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Exportar la app para Vercel
export default app;
