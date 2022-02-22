const { User } = require("../models");
const { capitalizeEachWord, convertDateTime } = require("../helpers");

class UserController {
  static async dashboard(req, res) {
    try {
      const user = req.user;
      if (!user) return res.redirect("/login");
      const dashboard = {
        admin: "pages/admin",
        student: "pages/student",
      };
      switch (user.role) {
        case "admin": {
          const students = await User.findAll({
            raw: true,
            where: { role: "student" },
          });

          students.map((student) => {
            student.role = capitalizeEachWord(student.role);
            student.createdAt = convertDateTime(student.createdAt);
            student.updatedAt = convertDateTime(student.updatedAt);
          });

          return res.render(dashboard[user.role], { data: students, role: "Admin" });
        }

        case "student": {
          const student = await User.findOne({
            raw: true,
            where: { email: user.email },
          });

          return res.render(dashboard[user.role], {
            data: student,
            studentSince: convertDateTime(student.createdAt),
            role: "Student",
          });
        }
      }
    } catch (err) {
      res.sendStatus(500);
    }
  }
}

module.exports = UserController;
