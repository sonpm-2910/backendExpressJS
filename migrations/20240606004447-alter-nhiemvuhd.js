
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('NhiemVuHD', {
      fields: ['PhuLucID'],
      type: 'foreign key',
      name: 'fk_NhiemVuHD_PhuLucID',
      references: {
        table: 'PhuLuc',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('NhiemVuHD', 'fk_NhiemVuHD_PhuLucID');
  }
};
  