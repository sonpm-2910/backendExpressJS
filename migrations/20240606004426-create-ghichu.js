
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('GhiChu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  VanBanId: {
    type: Sequelize.INTEGER
  },
  LoaiVB: {
    type: Sequelize.STRING
  },
  NguoiTao: {
    type: Sequelize.INTEGER
  },
  NgayTao: {
    type: Sequelize.DATE
  }
});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('GhiChu');
    }
  };
      