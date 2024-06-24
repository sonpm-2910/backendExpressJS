const { checkSchema, check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateRefreshAccessToken = () => {
  return [
    check("access_token", messagesErrorCommon("access_token").notEmpty)
      .not()
      .isEmpty(),
    check(
      "access_token",
      messagesErrorCommon("access_token").mustBeString
    ).isString(),
  ];
};

module.exports = { validateRefreshAccessToken };
