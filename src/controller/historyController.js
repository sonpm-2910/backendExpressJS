const { Op } = require("sequelize");
const LichSuChinhSua = require("../../models/LichSuChinhSua");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  paginationQuery,
  pagingResult,
} = require("../services/constant");
const NhanVien = require("../../models/NhanVien");
let selfController;

class HistoryController {
  constructor() {
    selfController = this;
  }

  async getList(req, res) {
    try {
      const {
        page = paginateDefault.page,
        limit = paginateDefault.limit,
        SoVanBan,
      } = req.query;
      const querySearch = {
        SoVanBan: {
          [Op.like]: `%${SoVanBan || ""}%`,
        },
      };

      const histories = await LichSuChinhSua.findAndCountAll({
        include: [NhanVien],
        where: querySearch,
        raw: true,
        nest: true,
        ...paginationQuery(page, limit),
      });

      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(pagingResult(histories, page, limit)));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async createHistory(body) {
    try {
      const result = await LichSuChinhSua.create({
        SoVanBan: body.SoVanBan,
        NgayThayDoi: body.NgayThayDoi,
        LinkCu: body.LinkCu,
        NguoiSua: body.NguoiSua,
        NoiDungSua: body.NoiDungSua,
      });
      return result;
    } catch (error) {
      return JSON.stringify(error);
    }
  }
}

module.exports = new HistoryController();
