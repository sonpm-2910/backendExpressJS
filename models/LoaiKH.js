
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const LoaiKH = sequelize.define('LoaiKH', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    },
    update_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'LoaiKH',
    timestamps: false
  });
  module.exports = LoaiKH;
