
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('HopDong', {
      fields: ['LoaiHD'],
      type: 'foreign key',
      name: 'fk_HopDong_LoaiHD',
      references: {
        table: 'LoaiHD',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('HopDong', 'fk_HopDong_LoaiHD');
  }
};
  