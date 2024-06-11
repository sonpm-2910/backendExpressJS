const express = require("express");
const authController = require("../../controller/authController");
const {
  validateRegisterUser,
} = require("../../middleware/validates/auth/authRegister.validate");
const authRouters = express.Router();

authRouters.post("/register", validateRegisterUser(), authController.register);

module.exports = { authRouters };
