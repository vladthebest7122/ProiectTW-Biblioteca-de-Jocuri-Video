import express from "express";
import cors from "cors";
import jocuriRouter from "./routes/jocuri.js";

const app = express();

// CORS: permite cererile de pe portul 5173 către 3001
app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));

// Transformă corpul JSON al cererii în req.body
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/jocuri", jocuriRouter);

// Rută necunoscută
app.use((req, res) => {
  res.status(404).json({ error: "Ruta nu există" });
});

// Tratare centralizată a erorilor
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: status === 500 ? "Eroare internă" : err.message });
});

export default app;