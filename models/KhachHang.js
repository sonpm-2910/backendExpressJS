const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const LoaiKH = require("./LoaiKH");

const KhachHang = sequelize.define(
  "KhachHang",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    MST: {
      type: DataTypes.STRING,
    },
    SDT: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    DiaChi: {
      type: DataTypes.STRING,
    },
    TenNguoiDaiDien: {
      type: DataTypes.STRING,
    },
    MaLoaiKH: {
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
    tableName: "KhachHang",
    timestamps: false,
  }
);

LoaiKH.hasMany(KhachHang, { foreignKey: "MaLoaiKH" });

KhachHang.belongsTo(LoaiKH, { foreignKey: "MaLoaiKH" });

module.exports = KhachHang;
