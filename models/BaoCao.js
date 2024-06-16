const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const NhanVien = require("./NhanVien");
const HopDong = require("./HopDong");
const LoaiBC = require("./LoaiBC");
const PhuLuc = require("./PhuLuc");

const BaoCao = sequelize.define(
  "BaoCao",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    HopDongID: {
      type: DataTypes.INTEGER,
    },
    PhuLucID: {
      type: DataTypes.INTEGER,
    },
    TrangThai: {
      type: DataTypes.STRING,
    },
    SoBaoCao: {
      type: DataTypes.STRING,
    },
    NgayGhiThucTe: {
      type: DataTypes.STRING,
    },
    ThoiGianHieuLuc: {
      type: DataTypes.DATEONLY,
    },
    MaLoaiBC: {
      type: DataTypes.INTEGER,
    },
    MaKTV: {
      type: DataTypes.INTEGER,
    },
    MaTruongNhom: {
      type: DataTypes.INTEGER,
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
    LinkDrive: {
      type: DataTypes.STRING,
    },
    MaNguoiNhap: {
      type: DataTypes.INTEGER,
    },
    MaThanhVienBGD: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    update_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "BaoCao",
    timestamps: false,
  }
);

PhuLuc.hasMany(BaoCao, { foreignKey: "PhuLucID", allowNull: true });
HopDong.hasMany(BaoCao, { foreignKey: "HopDongID", allowNull: true });
LoaiBC.hasMany(BaoCao, { foreignKey: "MaLoaiBC" });
NhanVien.hasMany(BaoCao, { foreignKey: "MaKTV" });
NhanVien.hasMany(BaoCao, { foreignKey: "MaTruongNhom" });
NhanVien.hasMany(BaoCao, { foreignKey: "MaNguoiNhap" });
NhanVien.hasMany(BaoCao, { foreignKey: "MaThanhVienBGD" });

BaoCao.belongsTo(NhanVien, { foreignKey: "MaKTV", as: "KTV" });
BaoCao.belongsTo(NhanVien, { foreignKey: "MaTruongNhom", as: "TruongNhom" });
BaoCao.belongsTo(NhanVien, { foreignKey: "MaNguoiNhap", as: "NguoiNhap" });
BaoCao.belongsTo(NhanVien, {
  foreignKey: "MaThanhVienBGD",
  as: "ThanhVienBGD",
});
BaoCao.belongsTo(LoaiBC, { foreignKey: "MaLoaiBC" });
BaoCao.belongsTo(HopDong, { foreignKey: "HopDongID" });
BaoCao.belongsTo(PhuLuc, { foreignKey: "PhuLucID" });

module.exports = BaoCao;
