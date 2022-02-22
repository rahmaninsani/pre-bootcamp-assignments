async function main() {
  try {
    // Env
    require("dotenv").config();

    // DB
    const { openDbConnection } = require("./helpers");
    const environment = process.env.ENVIRONMENT || "development";
    await openDbConnection(environment);

    // Express App
    const express = require("express");
    const app = express();
    const port = process.env.APP_PORT || 3000;
    const { authConfig } = require("./helpers");
    const methodOverride = require("method-override");

    // Passport
    const passport = require("passport");
    const session = require("express-session");

    app.use(methodOverride("_method"));
    app.use(express.static("views/assets"));
    app.set("view engine", "ejs");
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use(
      session({
        name: "session-id",
        secret: process.env.TOKEN_SECRET || "=ToKeN-sEcReT=",
        saveUninitialized: false,
        resave: false,
        cookie: {
          maxAge: 1000 * 60 * 60,
        },
      })
    );

    // Passport
    app.use(passport.initialize());
    app.use(passport.session());
    authConfig(passport);

    // Routes
    const routes = require("./routes");
    app.use(routes);

    // Run
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.log("main: ", err);
  }
}

main();
