
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('KTV_BaoCao', {
      fields: ['BaoCaoID'],
      type: 'foreign key',
      name: 'fk_KTV_BaoCao_BaoCaoID',
      references: {
        table: 'BaoCao',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('KTV_BaoCao', 'fk_KTV_BaoCao_BaoCaoID');
  }
};
  