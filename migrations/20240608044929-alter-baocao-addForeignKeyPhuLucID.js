"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BaoCao", {
      fields: ["PhuLucID"],
      type: "foreign key",
      name: "fk_BaoCao_PhuLuc",
      references: {
        table: "PhuLuc",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_PhuLuc");
  },
};
