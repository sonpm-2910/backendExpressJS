const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const DonVi = require("./DonVi");

const NhanVien = sequelize.define(
  "NhanVien",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    DonViID: {
      type: DataTypes.INTEGER,
    },
    ChucVu: {
      type: DataTypes.STRING,
    },
    HoTen: {
      type: DataTypes.STRING,
    },
    LaKTV: {
      type: DataTypes.BOOLEAN,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    update_at: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "NhanVien",
    timestamps: false,
  }
);

DonVi.hasMany(NhanVien, { foreignKey: "DonViID" });

NhanVien.belongsTo(DonVi, { foreignKey: "DonViID" });

module.exports = NhanVien;
