
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('HopDong', {
      fields: ['MaNguoiNhap'],
      type: 'foreign key',
      name: 'fk_HopDong_MaNguoiNhap',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('HopDong', 'fk_HopDong_MaNguoiNhap');
  }
};
  