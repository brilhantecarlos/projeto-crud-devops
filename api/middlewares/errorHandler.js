// Middleware para tratamento centralizado de erros
import { logger } from "../logger.js";

export function errorHandler(err, req, res, next) {
  logger.error(`Erro: ${err.message}`);
  res.status(500).json({ error: "Ocorreu um erro interno no servidor." });
}
