
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Phat', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  NhanVienID: {
    type: Sequelize.INTEGER
  },
  BatDau: {
    type: Sequelize.TIME
  },
  KetThuc: {
    type: Sequelize.TIME
  },
  created_at: {
    type: Sequelize.DATE
  },
  update_at: {
    type: Sequelize.DATE
  }
});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('Phat');
    }
  };
      