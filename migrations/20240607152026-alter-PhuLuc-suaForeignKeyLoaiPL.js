"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("PhuLuc", "fk_PhuLuc_LoaiPL");
    await queryInterface.renameColumn("PhuLuc", "LoaiPL", "MaLoaiPL");
    await queryInterface.addConstraint("PhuLuc", {
      fields: ["MaLoaiPL"],
      type: "foreign key",
      name: "fk_PhuLuc_LoaiPL",
      references: {
        table: "LoaiPL",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("PhuLuc", "fk_PhuLuc_LoaiPL");
    await queryInterface.renameColumn("PhuLuc", "MaLoaiPL", "LoaiPL");
  },
};
