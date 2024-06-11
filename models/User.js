const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Role = require("./Role");
const NhanVien = require("./NhanVien");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role_id: {
      type: DataTypes.INTEGER,
    },
    access_token: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
    NhanVienID: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "User",
    timestamps: false,
  }
);

Role.hasMany(User, { foreignKey: "role_id" });
NhanVien.hasMany(User, {
  foreignKey: {
    name: "NhanVienID",
    allowNull: true,
  },
});

User.belongsTo(Role, { foreignKey: "role_id" });
User.belongsTo(NhanVien, { foreignKey: "NhanVienID" });

module.exports = User;
