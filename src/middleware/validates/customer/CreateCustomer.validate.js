const { check } = require("express-validator");
const {
  messagesErrorCommon,
  regexPhoneNumber,
} = require("../../../services/constant");

const validateCreateCustomer = () => {
  return [
    check("name", messagesErrorCommon("Tên phòng").notEmpty).not().isEmpty(),
    check("name", messagesErrorCommon("Tên phòng").mustBeString).isString(),
    check("MST", messagesErrorCommon("Mã số thuế").notEmpty).not().isEmpty(),
    check("MST", messagesErrorCommon("Mã số thuế").mustBeString).isString(),
    check("SDT", messagesErrorCommon("Số điện thoại").notEmpty).not().isEmpty(),
    check("SDT", messagesErrorCommon("Số điện thoại").mustBeString).isString(),
    check("SDT", messagesErrorCommon("Số điện thoại").inValid).matches(
      regexPhoneNumber
    ),
    check("email", messagesErrorCommon("Email").notEmpty).not().isEmpty(),
    check("email", messagesErrorCommon("Email").mustBeString).isString(),
    check("email", messagesErrorCommon("Email").inValid).isEmail(),
    check("DiaChi", messagesErrorCommon("Địa chỉ").notEmpty).not().isEmpty(),
    check("DiaChi", messagesErrorCommon("Địa chỉ").mustBeString).isString(),
    check("TenNguoiDaiDien", messagesErrorCommon("Tên người đại diện").notEmpty)
      .not()
      .isEmpty(),
    check(
      "TenNguoiDaiDien",
      messagesErrorCommon("Tên người đại diện").mustBeString
    ).isString(),
    check("MaLoaiKH", messagesErrorCommon("MaLoaiKH").notEmpty).not().isEmpty(),
  ];
};

module.exports = { validateCreateCustomer };
