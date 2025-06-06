import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";
import { logger } from "./logger.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

// Middleware de tratamento de erros
app.use(errorHandler);

app.listen(8800, () => {
  logger.info("Servidor rodando na porta 8800");
});