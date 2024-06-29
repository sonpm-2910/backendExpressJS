const { check } = require("express-validator");
const {
  messagesErrorCommon,
  regexPhoneNumber,
} = require("../../../services/constant");

const validateUpdateCustomer = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("name", messagesErrorCommon("Tên phòng").mustBeString)
      .optional()
      .isString(),
    check("MST", messagesErrorCommon("Mã số thuế").mustBeString)
      .optional()
      .isString(),
    check("SDT", messagesErrorCommon("Số điện thoại").mustBeString)
      .optional()
      .isString(),
    check("SDT", messagesErrorCommon("Số điện thoại").inValid)
      .optional()
      .matches(regexPhoneNumber),
    check("email", messagesErrorCommon("Email").mustBeString)
      .optional()
      .isString(),
    check("email", messagesErrorCommon("Email").inValid).optional().isEmail(),
    check("DiaChi", messagesErrorCommon("Địa chỉ").mustBeString)
      .optional()
      .isString(),
    check(
      "TenNguoiDaiDien",
      messagesErrorCommon("Tên người đại diện").mustBeString
    )
      .optional()
      .isString(),
  ];
};

module.exports = { validateUpdateCustomer };
