class ValidationError extends Error {}

class UsersService {
  /**
   * @param {import("../ports/users-repository.port")} usersRepository - port de saída
   */
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  listUsers() {
    return this.usersRepository.findAll();
  }

  getUser(id) {
    return this.usersRepository.findById(id);
  }

  createUser({ name, email }) {
    if (!name || !email) {
      throw new ValidationError("Campos 'name' e 'email' são obrigatórios");
    }
    return this.usersRepository.create({ name, email });
  }

  updateUser(id, data) {
    const user = this.usersRepository.findById(id);
    if (!user) return null;
    return this.usersRepository.update(id, data);
  }

  deleteUser(id) {
    return this.usersRepository.remove(id);
  }
}

module.exports = { UsersService, ValidationError };
