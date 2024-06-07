"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("NhanVien", [
      {
        DonViID: 1,
        ChucVu: "Chức vụ test",
        HoTen: "Họ tên test 1",
        LaKTV: false,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        DonViID: 2,
        ChucVu: "Chức vụ test",
        HoTen: "Họ tên test 2",
        LaKTV: false,
        created_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("NhanVien", null, {});
  },
};
