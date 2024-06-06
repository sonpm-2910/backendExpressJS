const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  role_id: {
    type: DataTypes.INTEGER
  },
  access_token: {
    type: DataTypes.STRING
  },
  refresh_token: {
    type: DataTypes.STRING
  },
  NhanVienID: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'User',
  timestamps: false
});

module.exports = User;