
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Phat', {
      fields: ['NhanVienID'],
      type: 'foreign key',
      name: 'fk_Phat_NhanVienID',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Phat', 'fk_Phat_NhanVienID');
  }
};
  