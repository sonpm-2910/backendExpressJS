"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("LichSuChinhSua", {
      fields: ["NguoiSua"],
      type: "foreign key",
      name: "fk_LichSuChinhSua_NguoiSua",
      references: {
        table: "NhanVien",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "LichSuChinhSua",
      "fk_LichSuChinhSua_NguoiSua"
    );
  },
};
