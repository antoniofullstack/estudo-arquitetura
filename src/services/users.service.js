const usersRepository = require("../repositories/users.repository");

class ValidationError extends Error {}

function listUsers() {
  return usersRepository.findAll();
}

function getUser(id) {
  return usersRepository.findById(id);
}

function createUser({ name, email }) {
  if (!name || !email) {
    throw new ValidationError("Campos 'name' e 'email' são obrigatórios");
  }
  return usersRepository.create({ name, email });
}

function updateUser(id, data) {
  const user = usersRepository.findById(id);
  if (!user) return null;
  return usersRepository.update(id, data);
}

function deleteUser(id) {
  return usersRepository.remove(id);
}

module.exports = { listUsers, getUser, createUser, updateUser, deleteUser, ValidationError };
