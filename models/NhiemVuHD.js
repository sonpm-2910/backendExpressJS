const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PhuLuc = require("./PhuLuc");
const HopDong = require("./HopDong");
const LoaiBC = require("./LoaiBC");

const NhiemVuHD = sequelize.define(
  "NhiemVuHD",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    HopDongID: {
      type: DataTypes.INTEGER,
    },
    ThoiGianHoanThanh: {
      type: DataTypes.TIME,
    },
    MaLoaiBC: {
      type: DataTypes.INTEGER,
    },
    TrangThai: {
      type: DataTypes.STRING,
    },
    PhuLucID: {
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
    tableName: "NhiemVuHD",
    timestamps: false,
  }
);

PhuLuc.hasMany(NhiemVuHD, { foreignKey: "PhuLucID" });
HopDong.hasMany(NhiemVuHD, { foreignKey: "HopDongID" });
LoaiBC.hasMany(NhiemVuHD, { foreignKey: "MaLoaiBC" });

NhiemVuHD.belongsTo(LoaiBC, { foreignKey: "MaLoaiBC" });
NhiemVuHD.belongsTo(HopDong, { foreignKey: "HopDongID" });
NhiemVuHD.belongsTo(PhuLuc, { foreignKey: "PhuLucID" });

module.exports = NhiemVuHD;
