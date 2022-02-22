const router = require("express").Router();
const { AuthController } = require("../controllers");

router.get("/", AuthController.logout);

module.exports = router;
