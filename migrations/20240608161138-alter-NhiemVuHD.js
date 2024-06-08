"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn("NhiemVuHD", "LoaiBC", "MaLoaiBC");
    await queryInterface.addConstraint("NhiemVuHD", {
      fields: ["MaLoaiBC"],
      type: "foreign key",
      name: "fk_NhiemVuHD_LoaiBC",
      references: {
        table: "LoaiBC",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addConstraint("NhiemVuHD", {
      fields: ["HopDongID"],
      type: "foreign key",
      name: "fk_NhiemVuHD_HopDongID",
      references: {
        table: "HopDong",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("NhiemVuHD", "fk_NhiemVuHD_LoaiBC");
    await queryInterface.removeConstraint(
      "NhiemVuHD",
      "fk_NhiemVuHD_HopDongID"
    );
  },
};
