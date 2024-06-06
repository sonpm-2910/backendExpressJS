
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BaoCao', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  HopDongID: {
    type: Sequelize.Sequelize.INTEGER
  },
  TrangThai: {
    type: Sequelize.Sequelize.STRING
  },
  SoBaoCao: {
    type: Sequelize.Sequelize.STRING
  },
  NgayGhiThucTe: {
    type: Sequelize.Sequelize.STRING
  },
  ThoiGianHieuLuc: {
    type: Sequelize.DATEONLY
  },
  LoaiBC: {
    type: Sequelize.INTEGER
  },
  MaKTV: {
    type: Sequelize.INTEGER
  },
  MaTruongNhom: {
    type: Sequelize.INTEGER
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
  LinkDrive: {
    type: Sequelize.STRING
  },
  MaNguoiNhap: {
    type: Sequelize.INTEGER
  },
  MaThanhVienBGD: {
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
      await queryInterface.dropTable('BaoCao');
    }
  };
      