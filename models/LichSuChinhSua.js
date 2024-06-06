
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LichSuChinhSua = sequelize.define('LichSuChinhSua', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  BaoCaoID: {
    type: DataTypes.INTEGER
  },
  NgayThayDoi: {
    type: DataTypes.DATE
  },
  LinkCu: {
    type: DataTypes.STRING
  },
  NguoiSua: {
    type: DataTypes.INTEGER
  },
  NoiDungSua: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'LichSuChinhSua',
  timestamps: false
});
module.exports = LichSuChinhSua;