const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateReport = () => {
  return [
    check("TrangThai", messagesErrorCommon("Trạng thái").notEmpty)
      .not()
      .isEmpty(),
    check(
      "TrangThai",
      messagesErrorCommon("Trạng thái").mustBeString
    ).isString(),
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").notEmpty)
      .not()
      .isEmpty(),
    check(
      "NgayGhiThucTe",
      messagesErrorCommon("Ngày ghi thực tế").mustBeString
    ).isString(),
    check("ThoiGianHieuLuc", messagesErrorCommon("Thời gian hiệu lực").notEmpty)
      .not()
      .isEmpty(),
    check(
      "ThoiGianHieuLuc",
      messagesErrorCommon("Thời gian hiệu lực").inValid
    ).isDate(),
    check("SoBan", messagesErrorCommon("Số bản").notEmpty).not().isEmpty(),
    check("SoBan", messagesErrorCommon("Số bản").mustBeNumber).isNumeric(),
    check("MaLoaiBC", messagesErrorCommon("Loại báo cáo").notEmpty)
      .not()
      .isEmpty(),
    check("MaKTV", messagesErrorCommon("KTV").notEmpty).not().isEmpty(),
    check("MaTruongNhom", messagesErrorCommon("Trưởng nhóm").notEmpty)
      .not()
      .isEmpty(),
    check("Noidung", messagesErrorCommon("Nội dung").notEmpty).not().isEmpty(),
    check("Noidung", messagesErrorCommon("Nội dung").mustBeString).isString(),
    check("MaThanhVienBGD", messagesErrorCommon("Mã thành viên").notEmpty)
      .not()
      .isEmpty(),
    check(
      "DanhSachKTV",
      messagesErrorCommon("Danh sách KTV").mustBeArray
    ).isArray(),
  ];
};

module.exports = { validateCreateReport };
