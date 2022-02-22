const { User } = require("../models");

class AdminController {
  static async deleteUser(req, res) {
    try {
      const { userId } = req.params;

      const user = await User.findByPk(userId, { raw: true });

      if (!user) {
        return res.redirect("/users/dashboard");
      }

      await User.destroy({
        where: {
          id: userId,
          email: user.email,
        },
      });

      res.redirect("/users/dashboard");
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = AdminController;
