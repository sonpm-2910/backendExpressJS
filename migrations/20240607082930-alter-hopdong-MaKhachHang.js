"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("HopDong", {
      fields: ["MaKhachHang"],
      type: "foreign key",
      name: "fk_HopDong_MaKhachHang",
      references: {
        table: "KhachHang",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("HopDong", "fk_HopDong_MaKhachHang");
  },
};
