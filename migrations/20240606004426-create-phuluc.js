
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('PhuLuc', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  HopDongID: {
    type: Sequelize.INTEGER
  },
  TrangThai: {
    type: Sequelize.STRING
  },
  SoPhuLuc: {
    type: Sequelize.STRING
  },
  NgayGhiThucTe: {
    type: Sequelize.STRING
  },
  TongGiaTri: {
    type: Sequelize.DECIMAL(10,3)
  }, 
  SoBan: {
    type: Sequelize.DECIMAL
  },
  LinkDrive: {
    type: Sequelize.STRING
  },
  MaNguoiNhap: {
    type: Sequelize.INTEGER
  },
  LoaiPL: {
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
      await queryInterface.dropTable('PhuLuc');
    }
  };
      