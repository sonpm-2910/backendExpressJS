const express = require("express");
const authController = require("../../controller/authController");
const {
  validateRegisterUser,
} = require("../../middleware/validates/auth/authRegister.validate");
const {
  validateLoginUser,
} = require("../../middleware/validates/auth/authLogin.validate");
const authRouters = express.Router();

authRouters.post("/register", validateRegisterUser(), authController.register);
authRouters.post("/login", validateLoginUser(), authController.login);

module.exports = { authRouters };
