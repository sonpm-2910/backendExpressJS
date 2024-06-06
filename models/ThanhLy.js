
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ThanhLy = sequelize.define('ThanhLy', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    SoThanhLy: {
      type: DataTypes.STRING
    },
    HopDongID: {
      type: DataTypes.INTEGER
    },
    TrangThai: {
      type: DataTypes.STRING
    },
    NgayGhiThucTe: {
      type: DataTypes.STRING
    },
    LoaiTL: {
      type: DataTypes.INTEGER
    },
    GiaTriTruocVAT: {
      type: DataTypes.DECIMAL(10,3)
    },
    VAT: {
      type: DataTypes.DECIMAL(10,3)
    },
    SoLuu: {
      type: DataTypes.STRING
    },
    SoBan: {
      type: DataTypes.DECIMAL
    },
    Noidung: {
      type: DataTypes.STRING
    },
    MaNguoiNhap: {
      type: DataTypes.INTEGER
    },
    MaThanhVienBGD: {
      type: DataTypes.INTEGER
    },
    LinkDrive: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE
    },
    update_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'ThanhLy',
    timestamps: false
  });
  module.exports = ThanhLy;