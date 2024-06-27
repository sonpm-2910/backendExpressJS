const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  paginationQuery,
  pagingResult,
  paginateDefault,
  saltOrRounds,
} = require("../services/constant");
const User = require("../../models/User");
const { roles } = require("../services/roles");
const bcrypt = require("bcrypt");
const Role = require("../../models/Role");
const NhanVien = require("../../models/NhanVien");
const { Op } = require("sequelize");

let selfController;

class userController {
  constructor() {
    selfController = this;
  }

  async getListUser(req, res) {
    try {
      const {
        page = paginateDefault.page,
        limit = paginateDefault.limit,
        username,
      } = req.query;
      const staffs = await User.findAndCountAll({
        include: [Role, NhanVien],
        attributes: { exclude: ["password"] },
        raw: true,
        nest: true,
        where: {
          username: {
            [Op.like]: `%${username || ""}%`,
          },
        },
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

  async createUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;

      const isExistAccount = await User.findOne({
        where: {
          username: body.username,
        },
      });

      if (isExistAccount) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "User đã tồn tại"));
      }

      const hashPassword = await bcrypt.hash(body.password, saltOrRounds);

      const result = await User.create({
        username: body.username,
        password: hashPassword,
        role_id: body.role_id,
        NhanVienID: body.NhanVienID || null,
        access_token: "",
        refresh_token: "",
      });

      const { password, ...dataUser } = result.dataValues;

      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(dataUser, "Tạo user thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async updateUser(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      if (dataUpdate.password) {
        dataUpdate.password = await bcrypt.hash(
          dataUpdate.password,
          saltOrRounds
        );
      }
      await User.update(
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

  async getDetailUser(req, res) {
    try {
      const data = await User.findOne({
        include: [Role, NhanVien],
        attributes: { exclude: ["password"] },
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Không tìm thấy user"));
      }
      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(data));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async deleteUser(req, res) {
    try {
      const data = await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!data) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Xóa user không thành công"));
      }
      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(true, "Xóa user thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new userController();
