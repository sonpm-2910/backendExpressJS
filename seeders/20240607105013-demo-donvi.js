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
    await queryInterface.bulkInsert("DonVi", [
      {
        name: "Phòng chuyên môn",
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "Đơn vị 2",
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "BGD",
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
    await queryInterface.bulkDelete("DonVi", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
