"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("KTV_BaoCao", {
      fields: ["MaKTV"],
      type: "foreign key",
      name: "fk_KTV_BaoCao_MaKTV",
      references: {
        table: "NhanVien",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("NhiemVuHD", "fk_KTV_BaoCao_MaKTV");
  },
};
