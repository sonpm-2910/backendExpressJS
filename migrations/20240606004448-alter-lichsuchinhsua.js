
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('LichSuChinhSua', {
      fields: ['BaoCaoID'],
      type: 'foreign key',
      name: 'fk_LichSuChinhSua_BaoCaoID',
      references: {
        table: 'BaoCao',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('LichSuChinhSua', 'fk_LichSuChinhSua_BaoCaoID');
  }
};
  