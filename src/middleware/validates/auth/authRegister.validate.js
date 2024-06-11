const { checkSchema, check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateRegisterUser = () => {
  return [
    check("username", messagesErrorCommon("Tên đăng nhập").notEmpty)
      .not()
      .isEmpty(),
    check(
      "username",
      messagesErrorCommon("Tên đăng nhập").mustBeString
    ).isString(),
    check("password", messagesErrorCommon("Mật khẩu").notEmpty).not().isEmpty(),
    check("password", messagesErrorCommon("Mật khẩu").mustBeString).isString(),
  ];
};

module.exports = { validateRegisterUser };
