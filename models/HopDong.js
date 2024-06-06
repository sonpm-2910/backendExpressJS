
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const HopDong = sequelize.define('HopDong', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    TrangThai: {
      type: DataTypes.STRING
    },
    SoHopDong: {
      type: DataTypes.STRING
    },
    NgayGhiThucTe: {
      type: DataTypes.STRING
    },
    LoaiHD: {
      type: DataTypes.INTEGER
    },
    GiaTriTruocVAT: {
      type: DataTypes.DECIMAL(10,3)
    },
    VAT: {
      type: DataTypes.DECIMAL(10,3)
    },
    ThoiGianHieuLuc: {
      type: DataTypes.DATEONLY
    },
    TongGiaTri: {
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
    MaKhachHang: {
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
    tableName: 'HopDong',
    timestamps: false
  });

module.exports = HopDong;