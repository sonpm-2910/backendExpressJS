
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('NhanVien', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  DonViID: {
    type: Sequelize.INTEGER
  },
  ChucVu: {
    type: Sequelize.STRING
  },
  HoTen: {
    type: Sequelize.STRING
  },
  LaKTV: {
    type: Sequelize.BOOLEAN
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
      await queryInterface.dropTable('NhanVien');
    }
  };
      