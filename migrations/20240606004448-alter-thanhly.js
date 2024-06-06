
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('ThanhLy', {
      fields: ['MaNguoiNhap'],
      type: 'foreign key',
      name: 'fk_ThanhLy_MaNguoiNhap',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('ThanhLy', 'fk_ThanhLy_MaNguoiNhap');
  }
};
  