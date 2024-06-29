const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  paginationQuery,
  pagingResult,
  paginateDefault,
} = require("../services/constant");
const { Op } = require("sequelize");
const KhachHang = require("../../models/KhachHang");
const LoaiKH = require("../../models/LoaiKH");

let selfController;

class customerController {
  constructor() {
    selfController = this;
  }

  async getListCustomer(req, res) {
    try {
      const {
        page = paginateDefault.page,
        limit = paginateDefault.limit,
        name,
      } = req.query;
      const customers = await KhachHang.findAndCountAll({
        include: [LoaiKH],
        raw: true,
        nest: true,
        where: {
          name: {
            [Op.like]: `%${name || ""}%`,
          },
        },
        ...paginationQuery(page, limit),
      });
      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(pagingResult(customers, page, limit)));
    } catch (error) {
      console.log("error", error);
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async createCustomer(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const result = await KhachHang.create({
        name: body.name,
        MST: body.MST,
        SDT: body.SDT,
        email: body.email,
        DiaChi: body.DiaChi,
        TenNguoiDaiDien: body.TenNguoiDaiDien,
        MaLoaiKH: body.MaLoaiKH,
        created_at: new Date(),
        update_at: new Date(),
      });
      res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(result));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async updateCustomer(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      await KhachHang.update(
        {
          ...dataUpdate,
          update_at: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );
      return res.status(STATUS_RESPONSE.OK).json(
        apiResponseCommon(
          {
            id,
          },
          "Cập nhật thành công"
        )
      );
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async getDetailCustomer(req, res) {
    try {
      const data = await KhachHang.findOne({
        include: [LoaiKH],
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Không tìm thấy khách hàng"));
      }
      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(data));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async deleteCustomer(req, res) {
    try {
      const data = await KhachHang.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Xóa khách hàng không thành công"));
      }
      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(true, "Xóa khách hàng thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new customerController();
