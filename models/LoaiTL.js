
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const LoaiTL = sequelize.define('LoaiTL', {
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
    tableName: 'LoaiTL',
    timestamps: false
  });
  module.exports = LoaiTL;
