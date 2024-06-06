
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('ThanhLy', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  SoThanhLy: {
    type: Sequelize.STRING
  },
  HopDongID: {
    type: Sequelize.INTEGER
  },
  TrangThai: {
    type: Sequelize.STRING
  },
  NgayGhiThucTe: {
    type: Sequelize.STRING
  },
  LoaiTL: {
    type: Sequelize.INTEGER
  },
  GiaTriTruocVAT: {
    type: Sequelize.DECIMAL(10,3)
  },
  VAT: {
    type: Sequelize.DECIMAL(10,3)
  },
  SoLuu: {
    type: Sequelize.STRING
  },
  SoBan: {
    type: Sequelize.DECIMAL
  },
  Noidung: {
    type: Sequelize.STRING
  },
  MaNguoiNhap: {
    type: Sequelize.INTEGER
  },
  MaThanhVienBGD: {
    type: Sequelize.INTEGER
  },
  LinkDrive: {
    type: Sequelize.STRING
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
      await queryInterface.dropTable('ThanhLy');
    }
  };
      