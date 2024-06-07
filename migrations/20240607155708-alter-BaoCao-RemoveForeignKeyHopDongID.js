"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_HopDongID");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BaoCao", {
      fields: ["HopDongID"],
      type: "foreign key",
      name: "fk_BaoCao_HopDongID",
      references: {
        table: "HopDong",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
};
