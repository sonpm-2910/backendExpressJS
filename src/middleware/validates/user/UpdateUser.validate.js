const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateUser = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("username", messagesErrorCommon("username").mustBeString)
      .optional()
      .isString(),
    check("password", messagesErrorCommon("Mật khẩu").mustBeString)
      .optional()
      .isString(),
  ];
};

module.exports = { validateUpdateUser };
