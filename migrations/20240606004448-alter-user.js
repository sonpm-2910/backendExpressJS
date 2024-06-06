
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('User', {
      fields: ['NhanVienID'],
      type: 'foreign key',
      name: 'fk_User_NhanVienID',
      references: {
        table: 'NhanVien',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('User', 'fk_User_NhanVienID');
  }
};
  