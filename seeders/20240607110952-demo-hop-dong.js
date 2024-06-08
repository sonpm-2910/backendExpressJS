"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("HopDong", [
      {
        TrangThai: "Trạng thái test",
        SoHopDong: "MDS./13213123",
        NgayGhiThucTe: "29/10/2023",
        MaLoaiHD: 1,
        GiaTriTruocVAT: 2000000,
        VAT: 10,
        ThoiGianHieuLuc: new Date(),
        TongGiaTri: 3000000,
        SoLuu: "10",
        SoBan: 2,
        Noidung: "Nội dung",
        MaNguoiNhap: 1,
        MaThanhVienBGD: 1,
        MaKhachHang: 2,
        LinkDrive: "",
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        TrangThai: "Trạng thái test 2",
        SoHopDong: "MDS./4534534",
        NgayGhiThucTe: "29/10/2023",
        MaLoaiHD: 2,
        GiaTriTruocVAT: 2000000,
        VAT: 10,
        ThoiGianHieuLuc: new Date(),
        TongGiaTri: 3000000,
        SoLuu: "10",
        SoBan: 2,
        Noidung: "Nội dung",
        MaNguoiNhap: 2,
        MaThanhVienBGD: 1,
        MaKhachHang: 2,
        LinkDrive: "",
        created_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("HopDong", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
