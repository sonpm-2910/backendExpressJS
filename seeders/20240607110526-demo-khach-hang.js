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
    await queryInterface.bulkInsert("KhachHang", [
      {
        name: "Loại Khách hàng 1",
        MST: "32131231",
        SDT: "0336272203",
        email: "dsada@gmail.com",
        DiaChi: "dasda",
        TenNguoiDaiDien: "Người đại diện",
        MaLoaiKH: 1,
        created_at: new Date(),
        update_at: new Date(),
      },
      {
        name: "Loại Khách hàng 2",
        MST: "32131231",
        SDT: "0336272203",
        email: "dsada@gmail.com",
        DiaChi: "dasda",
        TenNguoiDaiDien: "Người đại diện",
        MaLoaiKH: 2,
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
    await queryInterface.bulkDelete("KhachHang", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
