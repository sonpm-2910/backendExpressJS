const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const NhanVien = require("./NhanVien");

const Phat = sequelize.define(
  "Phat",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NhanVienID: {
      type: DataTypes.INTEGER,
    },
    BatDau: {
      type: DataTypes.DATE,
    },
    KetThuc: {
      type: DataTypes.DATE,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    update_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "Phat",
    timestamps: false,
  }
);

NhanVien.hasMany(Phat, { foreignKey: "NhanVienID" });
Phat.belongsTo(NhanVien, { foreignKey: "NhanVienID" });
module.exports = Phat;
