
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('NhanVien', {
      fields: ['DonViID'],
      type: 'foreign key',
      name: 'fk_NhanVien_DonViID',
      references: {
        table: 'DonVi',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('NhanVien', 'fk_NhanVien_DonViID');
  }
};
  