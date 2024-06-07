"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("LoaiBC", [
      {
        name: "Báo cáo hợp đồng",
        KTKy: true,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "Báo cáo phụ lục",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("LoaiBC", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
