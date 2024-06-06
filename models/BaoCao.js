const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

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
    TrangThai: {
      type: DataTypes.STRING,
    },
    SoBaoCao: {
      type: DataTypes.STRING,
    },
    NgayGhiThucTe: {
      type: DataTypes.INTEGER,
    },
    ThoiGianHieuLuc: {
      type: DataTypes.DATEONLY,
    },
    LoaiBC: {
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

module.exports = BaoCao;
