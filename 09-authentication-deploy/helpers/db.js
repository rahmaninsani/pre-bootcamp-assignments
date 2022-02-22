async function readConfigurationFile(environment) {
  try {
    const { readFile } = require("fs/promises");
    const config = JSON.parse(await readFile("././config/config.json", "utf8"));
    return config[environment];
  } catch (err) {
    console.log("Unable to read configuration file: ", err);
  }
}

async function openDbConnection(environment) {
  try {
    const Sequelize = require("sequelize");
    const { database, username, password, host, dialect } = await readConfigurationFile(environment);
    const sequelize = new Sequelize(database, username, password, { host, dialect });

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.log("Unable to connect to the database:", err);
    process.exit(1);
  }
}

module.exports = openDbConnection;
