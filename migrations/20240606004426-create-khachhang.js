
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('KhachHang', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  MST: {
    type: Sequelize.STRING
  },
  SDT: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  DiaChi: {
    type: Sequelize.STRING
  },
  TenNguoiDaiDien: {
    type: Sequelize.STRING
  },
  LoaiKH: {
    type: Sequelize.INTEGER
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
      await queryInterface.dropTable('KhachHang');
    }
  };
      