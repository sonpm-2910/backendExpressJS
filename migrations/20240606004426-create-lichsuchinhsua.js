
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('LichSuChinhSua', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  BaoCaoID: {
    type: Sequelize.INTEGER
  },
  NgayThayDoi: {
    type: Sequelize.DATE
  },
  LinkCu: {
    type: Sequelize.STRING
  },
  NguoiSua: {
    type: Sequelize.INTEGER
  },
  NoiDungSua: {
    type: Sequelize.STRING
  }
});
    },
  
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('LichSuChinhSua');
    }
  };
      