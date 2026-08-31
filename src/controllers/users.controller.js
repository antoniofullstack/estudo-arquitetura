const usersService = require("../services/users.service");

function list(req, res) {
  res.json(usersService.listUsers());
}

function getById(req, res) {
  const user = usersService.getUser(Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.json(user);
}

function create(req, res) {
  try {
    const user = usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    if (err instanceof usersService.ValidationError) {
      return res.status(400).json({ error: err.message });
    }
    throw err;
  }
}

function update(req, res) {
  const user = usersService.updateUser(Number(req.params.id), req.body);
  if (!user) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.json(user);
}

function remove(req, res) {
  const removed = usersService.deleteUser(Number(req.params.id));
  if (!removed) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }
  res.status(204).send();
}

module.exports = { list, getById, create, update, remove };
