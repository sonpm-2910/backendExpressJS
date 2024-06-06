
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('KTV_BaoCao', {
  MaKTV: {
    type: Sequelize.INTEGER
  },
  BaoCaoID: {
    type: Sequelize.INTEGER
  },
  NamKy: {
    type: Sequelize.INTEGER
  }
});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('KTV_BaoCao');
    }
  };
      