const InMemoryUsersRepository = require("../adapters/out/persistence/in-memory-users.repository");
const { UsersService } = require("../application/use-cases/users.service");
const createUsersController = require("../adapters/in/http/users.controller");
const createRouter = require("../adapters/in/http/routes");
const createApp = require("../app");

function buildApp() {
  const usersRepository = new InMemoryUsersRepository();
  const usersService = new UsersService(usersRepository);
  const usersController = createUsersController(usersService);
  const router = createRouter({ usersController });

  return createApp(router);
}

module.exports = { buildApp };
