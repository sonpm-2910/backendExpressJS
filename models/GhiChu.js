
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const GhiChu = sequelize.define('GhiChu', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    VanBanId: {
      type: DataTypes.INTEGER
    },
    LoaiVB: {
      type: DataTypes.STRING
    },
    NguoiTao: {
      type: DataTypes.INTEGER
    },
    NgayTao: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'GhiChu',
    timestamps: false
  });

module.exports = GhiChu;  