const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateContract = () => {
  return [
    check("NgayGhiThucTe", messagesErrorCommon("Ngày ghi thực tế").notEmpty)
      .not()
      .isEmpty(),
    check(
      "NgayGhiThucTe",
      messagesErrorCommon("Ngày ghi thực tế").mustBeString
    ).isString(),
    check("MaLoaiHD", messagesErrorCommon("Mã loại hợp đồng").notEmpty)
      .not()
      .isEmpty(),
    check("GiaTriTruocVAT", messagesErrorCommon("Giá trị trước VAT").notEmpty)
      .not()
      .isEmpty(),
    check(
      "GiaTriTruocVAT",
      messagesErrorCommon("Giá trị trước VAT").mustBeNumber
    ).isNumeric(),
    check("VAT", messagesErrorCommon("VAT").notEmpty).not().isEmpty(),
    check("VAT", messagesErrorCommon("VAT").mustBeNumber).isNumeric(),
    check("TongGiaTri", messagesErrorCommon("Tổng giá trị").notEmpty)
      .not()
      .isEmpty(),
    check(
      "TongGiaTri",
      messagesErrorCommon("Tổng giá trị").mustBeNumber
    ).isNumeric(),
    check("ThoiGianHieuLuc", messagesErrorCommon("Thời gian hiệu lực").notEmpty)
      .not()
      .isEmpty(),
    check(
      "ThoiGianHieuLuc",
      messagesErrorCommon("Thời gian hiệu lực").inValid
    ).isDate(),
    check("Noidung", messagesErrorCommon("Nội dung").notEmpty).not().isEmpty(),
    check("Noidung", messagesErrorCommon("Nội dung").mustBeString).isString(),
    check("MaThanhVienBGD", messagesErrorCommon("Mã thành viên").notEmpty)
      .not()
      .isEmpty(),
    check("MaKhachHang", messagesErrorCommon("Mã khách hàng").notEmpty)
      .not()
      .isEmpty(),
    check("listNhiemVu", messagesErrorCommon("listNhiemVu").notEmpty)
      .not()
      .isEmpty(),
    check(
      "listNhiemVu",
      messagesErrorCommon("listNhiemVu").mustBeArray
    ).isArray(),
  ];
};

module.exports = { validateCreateContract };
