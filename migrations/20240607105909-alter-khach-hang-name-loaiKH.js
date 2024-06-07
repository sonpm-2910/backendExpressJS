"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeConstraint("KhachHang", "fk_KhachHang_LoaiKH");
    await queryInterface.renameColumn("KhachHang", "LoaiKH", "MaLoaiKH");
    await queryInterface.addConstraint("KhachHang", {
      fields: ["MaLoaiKH"],
      type: "foreign key",
      name: "fk_KhachHang_LoaiKH",
      references: {
        table: "LoaiKH",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint("KhachHang", "fk_KhachHang_LoaiKH");
  },
};
