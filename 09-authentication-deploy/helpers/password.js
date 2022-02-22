const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  const saltRounds = 12;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

async function decryptPassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}

module.exports = {
  encryptPassword,
  decryptPassword,
};
