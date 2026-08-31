const { Router } = require("express");
const createUsersRouter = require("./users.routes");

/**
 * @param {{ usersController: ReturnType<typeof import("./users.controller")> }} deps
 */
function createRouter({ usersController }) {
  const router = Router();

  router.get("/health", (req, res) => {
    res.json({ status: "ok" });
  });

  router.use("/users", createUsersRouter(usersController));

  return router;
}

module.exports = createRouter;
