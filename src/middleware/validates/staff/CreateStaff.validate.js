const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateStaff = () => {
  return [
    check("DonViID", messagesErrorCommon("Đơn vị").notEmpty).not().isEmpty(),
    check("ChucVu", messagesErrorCommon("Chức vụ").notEmpty).not().isEmpty(),
    check("ChucVu", messagesErrorCommon("Chức vụ").mustBeString).isString(),
    check("HoTen", messagesErrorCommon("Họ tên").notEmpty).not().isEmpty(),
    check("HoTen", messagesErrorCommon("Họ tên").mustBeString).isString(),
    check("LaKTV", messagesErrorCommon("LaKTV").mustBeBoolean)
      .optional()
      .isBoolean(),
  ];
};

module.exports = { validateCreateStaff };
