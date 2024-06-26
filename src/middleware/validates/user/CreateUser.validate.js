const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateUser = () => {
  return [
    check("username", messagesErrorCommon("username").notEmpty).not().isEmpty(),
    check("username", messagesErrorCommon("username").mustBeString).isString(),
    check("password", messagesErrorCommon("Mật khẩu").notEmpty).not().isEmpty(),
    check("password", messagesErrorCommon("Mật khẩu").mustBeString).isString(),
    check("role_id", messagesErrorCommon("role_id").notEmpty).not().isEmpty(),
  ];
};

module.exports = { validateCreateUser };
