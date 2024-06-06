
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NhiemVuHD = sequelize.define('NhiemVuHD', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  HopDongID: {
    type: DataTypes.INTEGER
  },
  ThoiGianHoanThanh: {
    type: DataTypes.TIME
  },
  LoaiBC: {
    type: DataTypes.INTEGER
  },
  TrangThai: {
    type: DataTypes.STRING
  },
  PhuLucID: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  update_at: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'NhiemVuHD',
  timestamps: false
});

module.exports = NhiemVuHD;