const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const { decryptPassword } = require("./password");

function authConfig(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async function (username, password, done) {
      const user = await User.findOne({
        raw: true,
        where: {
          email: username,
        },
      });

      if (!user) return done(null, false);

      if (!(await decryptPassword(password, user.password))) return done(null, false);

      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
}

module.exports = authConfig;
