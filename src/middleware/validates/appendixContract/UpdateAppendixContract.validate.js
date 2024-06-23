const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateAppendixContract = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("HopDongID", messagesErrorCommon("ID hợp đồng").notEmpty)
      .not()
      .isEmpty(),
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").notEmpty)
      .not()
      .isEmpty(),
    check(
      "NgayGhiThucTe",
      messagesErrorCommon("Ngày ghi thực tế").mustBeString
    ).isString(),
    check("MaLoaiPL", messagesErrorCommon("Mã loại phụ lục").notEmpty)
      .not()
      .isEmpty(),
    check("TongGiaTri", messagesErrorCommon("Tổng giá trị").notEmpty)
      .not()
      .isEmpty(),
    check(
      "TongGiaTri",
      messagesErrorCommon("Tổng giá trị").mustBeNumber
    ).isNumeric(),
    check("SoBan", messagesErrorCommon("Số bản").notEmpty).not().isEmpty(),
    check("SoBan", messagesErrorCommon("Số bản").mustBeNumber).isNumeric(),
  ];
};

module.exports = { validateUpdateAppendixContract };
