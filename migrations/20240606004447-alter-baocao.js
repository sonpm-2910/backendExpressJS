
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('BaoCao', {
      fields: ['MaKTV'],
      type: 'foreign key',
      name: 'fk_BaoCao_MaKTV',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('BaoCao', 'fk_BaoCao_MaKTV');
  }
};
  