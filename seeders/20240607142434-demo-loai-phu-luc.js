"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("LoaiPL", [
      {
        name: "Loại phụ lục 1",
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "Loại phụ lục 2",
        created_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LoaiPL", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
