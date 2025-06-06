// userRepository.js
// Responsável apenas pelas queries SQL e acesso ao banco
import { db } from "../db.js";

export const UserRepository = {
  ensureTableExists: (callback) => {
    const createTableSQL = `CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      fone VARCHAR(20) NOT NULL,
      data_nascimento DATE NOT NULL
    )`;
    db.query(createTableSQL, callback);
  },
  getAll: (callback) => {
    db.query("SELECT * FROM usuarios", callback);
  },
  add: (values, callback) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";
    db.query(q, [values], callback);
  },
  update: (values, id, callback) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
    db.query(q, [...values, id], callback);
  },
  delete: (id, callback) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";
    db.query(q, [id], callback);
  }
};
