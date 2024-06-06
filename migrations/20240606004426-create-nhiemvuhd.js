
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('NhiemVuHD', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  HopDongID: {
    type: Sequelize.INTEGER
  },
  ThoiGianHoanThanh: {
    type: Sequelize.TIME
  },
  LoaiBC: {
    type: Sequelize.INTEGER
  },
  TrangThai: {
    type: Sequelize.STRING
  },
  PhuLucID: {
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
      await queryInterface.dropTable('NhiemVuHD');
    }
  };
      