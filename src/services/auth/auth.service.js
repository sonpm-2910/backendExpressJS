const dotenv = require("dotenv");
dotenv.config();

const generateAccessToken = (dataUser) => {
  return jwt.sign(dataUser, process.env.TOKEN_SECRET, { expiresIn: "1h" });
};

const generateRefreshToken = (dataUser) => {
  return jwt.sign(dataUser, process.env.TOKEN_SECRET, { expiresIn: "1d" });
};

module.exports = { generateAccessToken, generateRefreshToken };
