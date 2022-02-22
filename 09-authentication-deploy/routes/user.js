const router = require("express").Router();
const { UserController } = require("../controllers");

router.get("/dashboard", UserController.dashboard);

module.exports = router;
