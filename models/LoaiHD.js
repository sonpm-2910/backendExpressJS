
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const LoaiHD = sequelize.define('LoaiHD', {
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
    tableName: 'LoaiHD',
    timestamps: false
  });
  module.exports = LoaiHD;
