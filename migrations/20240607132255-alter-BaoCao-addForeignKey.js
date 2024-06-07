"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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

    await queryInterface.addConstraint("BaoCao", {
      fields: ["MaLoaiBC"],
      type: "foreign key",
      name: "fk_BaoCao_MaLoaiBC",
      references: {
        table: "LoaiBC",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addConstraint("BaoCao", {
      fields: ["MaTruongNhom"],
      type: "foreign key",
      name: "fk_BaoCao_MaTruongNhom",
      references: {
        table: "NhanVien",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addConstraint("BaoCao", {
      fields: ["MaThanhVienBGD"],
      type: "foreign key",
      name: "fk_BaoCao_MaThanhVienBGD",
      references: {
        table: "NhanVien",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_HopDongID");
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_MaLoaiBC");
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_MaTruongNhom");
    await queryInterface.removeConstraint("BaoCao", "fk_BaoCao_MaThanhVienBGD");
  },
};
