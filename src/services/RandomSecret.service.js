const crypto = require("crypto");

const generateRandomSecret = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = generateRandomSecret;
