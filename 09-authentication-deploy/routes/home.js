const router = require("express").Router();
const { HomeController } = require("../controllers");

router.get("/", HomeController.home);

module.exports = router;
