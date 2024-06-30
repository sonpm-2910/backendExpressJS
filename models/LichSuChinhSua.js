const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const NhanVien = require("./NhanVien");

const LichSuChinhSua = sequelize.define(
  "LichSuChinhSua",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    SoVanBan: {
      type: DataTypes.STRING,
    },
    NgayThayDoi: {
      type: DataTypes.DATE,
    },
    LinkCu: {
      type: DataTypes.STRING,
    },
    NguoiSua: {
      type: DataTypes.INTEGER,
    },
    NoiDungSua: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "LichSuChinhSua",
    timestamps: false,
  }
);
NhanVien.hasMany(LichSuChinhSua, { foreignKey: "NguoiSua" });
LichSuChinhSua.belongsTo(NhanVien, { foreignKey: "NguoiSua" });
module.exports = LichSuChinhSua;
