const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateUpdateReport = () => {
  return [
    check("id", messagesErrorCommon("id").notEmpty).not().isEmpty(),
    check("TrangThai", messagesErrorCommon("Trạng thái").mustBeString)
      .optional()
      .isString(),
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").mustBeString)
      .optional()
      .isString(),
    check("ThoiGianHieuLuc", messagesErrorCommon("Thời gian hiệu lực").inValid)
      .optional()
      .isDate(),
    check("SoLuu", messagesErrorCommon("Số lưu").mustBeString)
      .optional()
      .isString(),
    check("SoBan", messagesErrorCommon("Số bản").mustBeNumber)
      .optional()
      .isNumeric(),
    check("Noidung", messagesErrorCommon("Nội dung").mustBeString)
      .optional()
      .isString(),
    check("DanhSachKTV", messagesErrorCommon("Danh sách KTV").mustBeArray)
      .optional()
      .isArray(),
  ];
};

module.exports = { validateUpdateReport };
