const router = require("express").Router();
const { AuthController } = require("../controllers");

router.get("/", AuthController.register);
router.post("/", AuthController.create);

module.exports = router;
