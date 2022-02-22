const router = require("express").Router();

const homeRoutes = require("./home");

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const authRoutes = require("./auth");
const logoutRoutes = require("./logout");

const userRoutes = require("./user");
const adminRoutes = require("./admin");

router.use("/register", registerRoutes);

router.use("/login", loginRoutes);
router.use("/auth", authRoutes);
router.use("/logout", logoutRoutes);

router.use("/users", userRoutes);
router.use("/admin", adminRoutes);

router.use("/", homeRoutes);
router.use("*", (req, res) => {
  res.render("pages/404");
});

module.exports = router;
