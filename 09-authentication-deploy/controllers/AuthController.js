const passport = require("passport");
const { User } = require("../models");
const { encryptPassword } = require("../helpers");

class AuthController {
  static register(req, res) {
    try {
      const user = req.user;
      if (user) return res.redirect("/users/dashboard");

      res.render("pages/register");
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async create(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      });

      if (user) {
        res.render("pages/register");
        return;
      }

      const hashedPassword = await encryptPassword(password);

      await User.create({
        name: name,
        email: email,
        password: hashedPassword,
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      res.redirect("/login");
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static login(req, res) {
    try {
      const user = req.user;
      if (user) return res.redirect("/users/dashboard");

      res.render("pages/login");
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static async auth(req, res, next) {
    try {
      passport.authenticate("local", (err, user, info) => {
        if (err || !user) {
          return res.redirect("/login");
        }

        return req.login(user, (loginError) => {
          if (loginError) {
            console.error(loginError);
            return next(loginError);
          }

          return res.redirect("/users/dashboard");
        });
      })(req, res, next);
    } catch (err) {
      res.sendStatus(500);
    }
  }

  static logout(req, res) {
    try {
      req.logout();
      res.redirect("/login");
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = AuthController;
