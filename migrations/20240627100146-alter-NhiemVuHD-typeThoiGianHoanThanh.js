"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("NhiemVuHD", "ThoiGianHoanThanh");
    await queryInterface.addColumn("NhiemVuHD", "ThoiGianHoanThanh", {
      type: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("NhiemVuHD", "ThoiGianHoanThanh", {
      type: Sequelize.TIME,
    });
  },
};
