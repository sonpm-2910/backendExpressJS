
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('KhachHang', {
      fields: ['LoaiKH'],
      type: 'foreign key',
      name: 'fk_KhachHang_LoaiKH',
      references: {
        table: 'LoaiKH',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('KhachHang', 'fk_KhachHang_LoaiKH');
  }
};
  