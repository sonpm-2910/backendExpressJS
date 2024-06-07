const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const NhanVien = require("./NhanVien");
const KhachHang = require("./KhachHang");
const LoaiHD = require("./LoaiHD");

const HopDong = sequelize.define(
  "HopDong",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    TrangThai: {
      type: DataTypes.STRING,
    },
    SoHopDong: {
      type: DataTypes.STRING,
    },
    NgayGhiThucTe: {
      type: DataTypes.STRING,
    },
    MaLoaiHD: {
      type: DataTypes.INTEGER,
    },
    GiaTriTruocVAT: {
      type: DataTypes.DECIMAL(10, 3),
    },
    VAT: {
      type: DataTypes.DECIMAL(10, 3),
    },
    ThoiGianHieuLuc: {
      type: DataTypes.DATEONLY,
    },
    TongGiaTri: {
      type: DataTypes.DECIMAL(10, 3),
    },
    SoLuu: {
      type: DataTypes.STRING,
    },
    SoBan: {
      type: DataTypes.DECIMAL,
    },
    Noidung: {
      type: DataTypes.STRING,
    },
    MaNguoiNhap: {
      type: DataTypes.INTEGER,
    },
    MaThanhVienBGD: {
      type: DataTypes.INTEGER,
    },
    MaKhachHang: {
      type: DataTypes.INTEGER,
    },
    LinkDrive: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    update_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "HopDong",
    timestamps: false,
  }
);

NhanVien.hasMany(HopDong, { foreignKey: "MaThanhVienBGD" });
NhanVien.hasMany(HopDong, { foreignKey: "MaNguoiNhap" });
KhachHang.hasMany(HopDong, { foreignKey: "MaKhachHang" });
LoaiHD.hasMany(HopDong, { foreignKey: "MaLoaiHD" });

HopDong.belongsTo(NhanVien, { foreignKey: "MaNguoiNhap", as: "NguoiNhap" });
HopDong.belongsTo(NhanVien, {
  foreignKey: "MaThanhVienBGD",
  as: "ThanhVienBGD",
});
HopDong.belongsTo(KhachHang, { foreignKey: "MaKhachHang" });
HopDong.belongsTo(LoaiHD, { foreignKey: "MaLoaiHD" });

module.exports = HopDong;
