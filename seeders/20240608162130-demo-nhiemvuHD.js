"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("NhiemVuHD", [
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        HopDongID: 1,
        ThoiGianHoanThanh: new Date(),
        MaLoaiBC: 1,
        TrangThai: "DA_DUYET",
        PhuLucID: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("NhiemVuHD", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
