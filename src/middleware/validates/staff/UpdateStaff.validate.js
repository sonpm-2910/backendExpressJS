const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateStaff = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("ChucVu", messagesErrorCommon("Chức vụ").mustBeString)
      .optional()
      .isString(),
    check("HoTen", messagesErrorCommon("Họ tên").mustBeString)
      .optional()
      .isString(),
    check("LaKTV", messagesErrorCommon("LaKTV").mustBeBoolean)
      .optional()
      .isBoolean(),
  ];
};

module.exports = { validateUpdateStaff };
