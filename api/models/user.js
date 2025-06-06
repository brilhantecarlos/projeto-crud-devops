// Modelo de usuário para separar a lógica de acesso ao banco
import { db } from "../db.js";

export const UserModel = {
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
