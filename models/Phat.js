
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const Phat = sequelize.define('Phat', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    NhanVienID: {
      type: DataTypes.INTEGER
    },
    BatDau: {
      type: DataTypes.TIME
    },
    KetThuc: {
      type: DataTypes.TIME
    },
    created_at: {
      type: DataTypes.DATE
    },
    update_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'Phat',
    timestamps: false
  });
module.exports = Phat;