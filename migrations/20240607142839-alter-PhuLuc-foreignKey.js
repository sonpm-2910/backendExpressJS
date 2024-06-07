"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("PhuLuc", {
      fields: ["MaNguoiNhap"],
      type: "foreign key",
      name: "fk_PhuLuc_MaNguoiNhap",
      references: {
        table: "NhanVien",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("PhuLuc", "fk_PhuLuc_MaNguoiNhap");
  },
};
