const router = require("express").Router();
const { AdminController } = require("../controllers");

router.delete("/users/:userId", AdminController.deleteUser);

module.exports = router;
