"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("LoaiBC", [
      {
        name: "BCTC",
        KTKy: true,
        ThoiGian: 3,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCXD",
        KTKy: true,
        ThoiGian: 3,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCTV",
        KTKy: true,
        ThoiGian: 3,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCTH",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCTĐ",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCCG",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCĐT",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BCKH",
        KTKy: false,
        ThoiGian: 2,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "CTTĐ",
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
