const { Router } = require("express");

/**
 * @param {ReturnType<typeof import("./users.controller")>} usersController
 */
function createUsersRouter(usersController) {
  const router = Router();

  router.get("/", usersController.list);
  router.get("/:id", usersController.getById);
  router.post("/", usersController.create);
  router.put("/:id", usersController.update);
  router.delete("/:id", usersController.remove);

  return router;
}

module.exports = createUsersRouter;
