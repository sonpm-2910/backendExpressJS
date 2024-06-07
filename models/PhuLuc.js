const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const HopDong = require("./HopDong");
const LoaiPL = require("./LoaiPL");
const NhanVien = require("./NhanVien");

const PhuLuc = sequelize.define(
  "PhuLuc",
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
    SoPhuLuc: {
      type: DataTypes.STRING,
    },
    NgayGhiThucTe: {
      type: DataTypes.STRING,
    },
    SoBan: {
      type: DataTypes.DECIMAL,
    },
    TongGiaTri: {
      type: DataTypes.DECIMAL(10, 3),
    },
    LinkDrive: {
      type: DataTypes.STRING,
    },
    MaNguoiNhap: {
      type: DataTypes.INTEGER,
    },
    MaLoaiPL: {
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
    tableName: "PhuLuc",
    timestamps: false,
  }
);

HopDong.hasMany(PhuLuc, { foreignKey: "HopDongID" });
LoaiPL.hasMany(PhuLuc, { foreignKey: "MaLoaiPL" });
NhanVien.hasMany(PhuLuc, { foreignKey: "MaNguoiNhap" });

PhuLuc.belongsTo(HopDong, { foreignKey: "HopDongID" });
PhuLuc.belongsTo(LoaiPL, { foreignKey: "MaLoaiPL" });
PhuLuc.belongsTo(NhanVien, { foreignKey: "MaNguoiNhap" });

module.exports = PhuLuc;
