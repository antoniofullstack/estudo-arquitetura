const { createUser } = require("../models/user");

let users = [
  createUser({ id: 1, name: "Ana Silva", email: "ana@example.com" }),
  createUser({ id: 2, name: "Bruno Costa", email: "bruno@example.com" }),
];
let nextId = 3;

function findAll() {
  return users;
}

function findById(id) {
  return users.find((user) => user.id === id);
}

function create({ name, email }) {
  const user = createUser({ id: nextId++, name, email });
  users.push(user);
  return user;
}

function update(id, { name, email }) {
  const user = findById(id);
  if (!user) return null;
  if (name !== undefined) user.name = name;
  if (email !== undefined) user.email = email;
  return user;
}

function remove(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
}

module.exports = { findAll, findById, create, update, remove };
