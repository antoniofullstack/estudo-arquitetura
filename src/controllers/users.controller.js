const usersModel = require("../models/users.model");
const usersView = require("../views/users.view");

function list(req, res) {
  res.json(usersView.renderMany(usersModel.findAll()));
}

function getById(req, res) {
  const user = usersModel.findById(Number(req.params.id));
  if (!user) {
    return res.status(404).json(usersView.renderError("Usuário não encontrado"));
  }
  res.json(usersView.renderUser(user));
}

function create(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res
      .status(400)
      .json(usersView.renderError("Campos 'name' e 'email' são obrigatórios"));
  }
  const user = usersModel.create({ name, email });
  res.status(201).json(usersView.renderUser(user));
}

function update(req, res) {
  const user = usersModel.update(Number(req.params.id), req.body);
  if (!user) {
    return res.status(404).json(usersView.renderError("Usuário não encontrado"));
  }
  res.json(usersView.renderUser(user));
}

function remove(req, res) {
  const removed = usersModel.remove(Number(req.params.id));
  if (!removed) {
    return res.status(404).json(usersView.renderError("Usuário não encontrado"));
  }
  res.status(204).send();
}

module.exports = { list, getById, create, update, remove };
