
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('GhiChu', {
      fields: ['NguoiTao'],
      type: 'foreign key',
      name: 'fk_GhiChu_NguoiTao',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('GhiChu', 'fk_GhiChu_NguoiTao');
  }
};
  