
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('PhuLuc', {
      fields: ['HopDongID'],
      type: 'foreign key',
      name: 'fk_PhuLuc_HopDongID',
      references: {
        table: 'HopDong',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('PhuLuc', 'fk_PhuLuc_HopDongID');
  }
};
  