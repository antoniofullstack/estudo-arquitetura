const UsersRepositoryPort = require("../../../application/ports/users-repository.port");
const { createUser } = require("../../../domain/user");

class InMemoryUsersRepository extends UsersRepositoryPort {
  constructor() {
    super();
    this.users = [
      createUser({ id: 1, name: "Ana Silva", email: "ana@example.com" }),
      createUser({ id: 2, name: "Bruno Costa", email: "bruno@example.com" }),
    ];
    this.nextId = 3;
  }

  findAll() {
    return this.users;
  }

  findById(id) {
    return this.users.find((user) => user.id === id);
  }

  create({ name, email }) {
    const user = createUser({ id: this.nextId++, name, email });
    this.users.push(user);
    return user;
  }

  update(id, { name, email }) {
    const user = this.findById(id);
    if (!user) return null;
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    return user;
  }

  remove(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return false;
    this.users.splice(index, 1);
    return true;
  }
}

module.exports = InMemoryUsersRepository;
