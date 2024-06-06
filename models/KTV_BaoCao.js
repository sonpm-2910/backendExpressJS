
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const KTV_BaoCao = sequelize.define('KTV_BaoCao', {
    MaKTV: {
      type: DataTypes.INTEGER
    },
    BaoCaoID: {
      type: DataTypes.INTEGER
    },
    NamKy: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'KTV_BaoCao',
    timestamps: false
  });

  module.exports = KTV_BaoCao;