const { check } = require("express-validator");
const { messagesErrorCommon } = require("../../../services/constant");

const validateCreateContract = () => {
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
    check("VAT", messagesErrorCommon("Mã loại hợp đồng").notEmpty)
      .not()
      .isEmpty(),
    check(
      "VAT",
      messagesErrorCommon("Mã loại hợp đồng").mustBeNumber
    ).isNumeric(),
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
    check("SoBan", messagesErrorCommon("Số bản").notEmpty).not().isEmpty(),
    check("SoBan", messagesErrorCommon("Số bản").mustBeNumber).isNumeric(),
    check("Noidung", messagesErrorCommon("Nội dung").notEmpty).not().isEmpty(),
    check("Noidung", messagesErrorCommon("Nội dung").mustBeString).isString(),
    check("MaThanhVienBGD", messagesErrorCommon("Mã thành viên").notEmpty)
      .not()
      .isEmpty(),
    check("MaKhachHang", messagesErrorCommon("Mã khách hàng").notEmpty)
      .not()
      .isEmpty(),
  ];
};

module.exports = { validateCreateContract };
