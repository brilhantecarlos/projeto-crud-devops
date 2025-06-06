import { UserModel } from "../models/user.js";
import { logger } from "../logger.js";

export const getUsers = (req, res, next) => {
  UserModel.getAll((err, data) => {
    if (err) {
      logger.error(`Erro ao buscar usuários: ${err.message}`);
      return next(err);
    }
    logger.info("Usuários listados com sucesso");
    return res.status(200).json(data);
  });
};

export const addUser = (req, res, next) => {
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];
  UserModel.add(values, (err) => {
    if (err) {
      logger.error(`Erro ao criar usuário: ${err.message}`);
      return next(err);
    }
    logger.info("Usuário criado com sucesso");
    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res, next) => {
  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];
  UserModel.update(values, req.params.id, (err) => {
    if (err) {
      logger.error(`Erro ao atualizar usuário: ${err.message}`);
      return next(err);
    }
    logger.info("Usuário atualizado com sucesso");
    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res, next) => {
  UserModel.delete(req.params.id, (err) => {
    if (err) {
      logger.error(`Erro ao deletar usuário: ${err.message}`);
      return next(err);
    }
    logger.info("Usuário deletado com sucesso");
    return res.status(200).json("Usuário deletado com sucesso.");
  });
};
