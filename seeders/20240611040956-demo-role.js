"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Role", [
      {
        name: "Admin",
      },
      {
        name: "Phòng tổng hợp",
      },
      {
        name: "Phòng chuyên môn",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Role", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
