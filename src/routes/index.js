const { Router } = require("express");
const usersRoutes = require("./users.routes");

const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.use("/users", usersRoutes);

module.exports = router;
