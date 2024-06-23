const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateContract = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").mustBeString)
      .optional()
      .isString(),
    check(
      "GiaTriTruocVAT",
      messagesErrorCommon("Giá trị trước VAT").mustBeNumber
    )
      .optional()
      .isNumeric(),
    check("VAT", messagesErrorCommon("VAT").mustBeNumber)
      .optional()
      .isNumeric(),
    check("TongGiaTri", messagesErrorCommon("Tổng giá trị").mustBeNumber)
      .optional()
      .isNumeric(),
    check("ThoiGianHieuLuc", messagesErrorCommon("Thời gian hiệu lực").inValid)
      .optional()
      .isDate(),
    check("Noidung", messagesErrorCommon("Nội dung").mustBeString)
      .optional()
      .isString(),
  ];
};

module.exports = { validateUpdateContract };
