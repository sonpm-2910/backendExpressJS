
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PhuLuc = sequelize.define('PhuLuc', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  HopDongID: {
    type: DataTypes.INTEGER
  },
  TrangThai: {
    type: DataTypes.STRING
  },
  SoPhuLuc: {
    type: DataTypes.STRING
  },
  NgayGhiThucTe: {
    type: DataTypes.STRING
  },
  SoBan: {
    type: DataTypes.DECIMAL
  },
  TongGiaTri: {
    type: DataTypes.DECIMAL(10,3)
  },
  LinkDrive: {
    type: DataTypes.STRING
  },
  MaNguoiNhap: {
    type: DataTypes.INTEGER
  },
  LoaiPL: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  update_at: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'PhuLuc',
  timestamps: false
});
module.exports = PhuLuc;