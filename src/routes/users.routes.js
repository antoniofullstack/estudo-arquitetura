const { Router } = require("express");
const usersController = require("../controllers/users.controller");

const router = Router();

router.get("/", usersController.list);
router.get("/:id", usersController.getById);
router.post("/", usersController.create);
router.put("/:id", usersController.update);
router.delete("/:id", usersController.remove);

module.exports = router;
