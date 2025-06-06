// Modelo de usuário para separar a lógica de acesso ao banco
import { UserRepository } from "../repositories/userRepository.js";

export const UserModel = {
  getAll: (callback) => {
    UserRepository.ensureTableExists((err) => {
      if (err) return callback(err);
      UserRepository.getAll(callback);
    });
  },
  add: (values, callback) => {
    UserRepository.ensureTableExists((err) => {
      if (err) return callback(err);
      UserRepository.add(values, callback);
    });
  },
  update: (values, id, callback) => {
    UserRepository.ensureTableExists((err) => {
      if (err) return callback(err);
      UserRepository.update(values, id, callback);
    });
  },
  delete: (id, callback) => {
    UserRepository.ensureTableExists((err) => {
      if (err) return callback(err);
      UserRepository.delete(id, callback);
    });
  }
};
