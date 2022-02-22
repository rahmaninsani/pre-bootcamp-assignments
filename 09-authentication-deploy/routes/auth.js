const router = require("express").Router();
const { AuthController } = require("../controllers");

router.post("/", AuthController.auth);

module.exports = router;
