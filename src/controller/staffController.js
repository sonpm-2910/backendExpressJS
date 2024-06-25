const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  paginationQuery,
  pagingResult,
  paginateDefault,
} = require("../services/constant");
const NhanVien = require("../../models/NhanVien");
const DonVi = require("../../models/DonVi");

let selfController;

class staffController {
  constructor() {
    selfController = this;
  }

  async getListStaff(req, res) {
    try {
      const { page = paginateDefault.page, limit = paginateDefault.limit } =
        req.query;
      const staffs = await NhanVien.findAndCountAll({
        include: [DonVi],
        raw: true,
        nest: true,
        ...paginationQuery(page, limit),
      });
      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(pagingResult(staffs, page, limit)));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async createStaff(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const newStaff = await NhanVien.create({
        DonViID: body.DonViID,
        ChucVu: body.ChucVu,
        HoTen: body.HoTen,
        LaKTV: body.LaKTV || false,
        created_at: new Date(),
        update_at: new Date(),
      });
      res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(newStaff));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async updateStaff(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      await NhanVien.update(
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

  async getDetailStaff(req, res) {
    try {
      const data = await NhanVien.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Không tìm thấy nhân viên"));
      }
      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(data));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async deleteStaff(req, res) {
    try {
      const data = await NhanVien.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Xóa nhân viên không thành công"));
      }
      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(true, "Xóa nhân viên thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new staffController();
