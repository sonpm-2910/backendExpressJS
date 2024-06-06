
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

  const DonVi = sequelize.define('DonVi', {
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
  tableName: 'DonVi',
  timestamps: false
});

module.exports = DonVi;