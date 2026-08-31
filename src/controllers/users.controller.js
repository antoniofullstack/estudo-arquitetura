const usersModel = require("../models/users.model");

function list(req, res) {
  res.json(usersModel.findAll());
}

function getById(req, res) {
  const user = usersModel.findById(Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.json(user);
}

function create(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Campos 'name' e 'email' são obrigatórios" });
  }
  const user = usersModel.create({ name, email });
  res.status(201).json(user);
}

function update(req, res) {
  const user = usersModel.update(Number(req.params.id), req.body);
  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.json(user);
}

function remove(req, res) {
  const removed = usersModel.remove(Number(req.params.id));
  if (!removed) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.status(204).send();
}

module.exports = { list, getById, create, update, remove };
