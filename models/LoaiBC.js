
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const LoaiBC = sequelize.define('LoaiBC', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    KTKy: {
      type: DataTypes.BOOLEAN
    },
    ThoiGian: {
      type: DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE
    },
    update_at: {
      type: DataTypes.DATE
    }
  }, {
    tableName: 'LoaiBC',
    timestamps: false
  });

module.exports = LoaiBC;