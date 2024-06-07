"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("HopDong", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      TrangThai: {
        type: Sequelize.STRING,
      },
      SoHopDong: {
        type: Sequelize.STRING,
      },
      NgayGhiThucTe: {
        type: Sequelize.STRING,
      },
      MaLoaiHD: {
        type: Sequelize.INTEGER,
      },
      GiaTriTruocVAT: {
        type: Sequelize.DECIMAL(10, 3),
      },
      VAT: {
        type: Sequelize.DECIMAL(10, 3),
      },
      ThoiGianHieuLuc: {
        type: Sequelize.DATEONLY,
      },
      TongGiaTri: {
        type: Sequelize.DECIMAL(10, 3),
      },
      SoLuu: {
        type: Sequelize.STRING,
      },
      SoBan: {
        type: Sequelize.DECIMAL,
      },
      Noidung: {
        type: Sequelize.STRING,
      },
      MaNguoiNhap: {
        type: Sequelize.INTEGER,
      },
      MaThanhVienBGD: {
        type: Sequelize.INTEGER,
      },
      MaKhachHang: {
        type: Sequelize.INTEGER,
      },
      LinkDrive: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      update_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("HopDong");
  },
};
