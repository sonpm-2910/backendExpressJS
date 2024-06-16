"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Phat", "BatDau");
    await queryInterface.removeColumn("Phat", "KetThuc");
    await queryInterface.addColumn("Phat", "BatDau", {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("Phat", "KetThuc", {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Phat", "BatDau", {
      type: Sequelize.TIME,
    });
    await queryInterface.changeColumn("Phat", "KetThuc", {
      type: Sequelize.TIME,
    });
  },
};
