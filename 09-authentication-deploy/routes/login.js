const router = require("express").Router();
const { AuthController } = require("../controllers");

router.get("/", AuthController.login);

module.exports = router;
