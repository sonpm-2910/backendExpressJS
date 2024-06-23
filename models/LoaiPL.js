const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const LoaiPL = sequelize.define(
  "LoaiPL",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
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
    tableName: "LoaiPL",
    timestamps: false,
  }
);
module.exports = LoaiPL;
