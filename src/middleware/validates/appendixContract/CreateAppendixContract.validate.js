const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateAppendixContract = () => {
  return [
    check("HopDongID", messagesErrorCommon("ID hợp đồng").notEmpty)
      .not()
      .isEmpty(),
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").mustBeString)
      .optional()
      .isString(),
    check("TongGiaTri", messagesErrorCommon("Tổng giá trị").mustBeNumber)
      .optional()
      .isNumeric(),
    check("SoBan", messagesErrorCommon("Số bản").mustBeNumber)
      .optional()
      .isNumeric(),
    check("listNhiemVu", messagesErrorCommon("listNhiemVu").notEmpty)
      .not()
      .isEmpty(),
    check(
      "listNhiemVu",
      messagesErrorCommon("listNhiemVu").mustBeArray
    ).isArray(),
  ];
};

module.exports = { validateCreateAppendixContract };
