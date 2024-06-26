const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  paginationQuery,
  pagingResult,
  paginateDefault,
} = require("../services/constant");
const DonVi = require("../../models/DonVi");
const { Op } = require("sequelize");

let selfController;

class departmentController {
  constructor() {
    selfController = this;
  }

  async getListDepartment(req, res) {
    try {
      const {
        page = paginateDefault.page,
        limit = paginateDefault.limit,
        name,
      } = req.query;
      const departments = await DonVi.findAndCountAll({
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
        .json(apiResponseCommon(pagingResult(departments, page, limit)));
    } catch (error) {
      console.log("error", error);
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async createDepartment(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const result = await DonVi.create({
        name: body.name,
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

  async updateDepartment(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      await DonVi.update(
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

  async getDetailDepartment(req, res) {
    try {
      const data = await DonVi.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Không tìm thấy phòng ban"));
      }
      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(data));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async deleteDepartment(req, res) {
    try {
      const data = await DonVi.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Xóa phòng ban không thành công"));
      }
      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(true, "Xóa phòng ban thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new departmentController();
