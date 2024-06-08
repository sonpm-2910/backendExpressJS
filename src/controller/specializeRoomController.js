const { Op } = require("sequelize");
const BaoCao = require("../../models/BaoCao");
const HopDong = require("../../models/HopDong");
const KhachHang = require("../../models/KhachHang");
const PhuLuc = require("../../models/PhuLuc");
const LoaiHD = require("../../models/LoaiHD");
const {
  MA_LOAI_BAO_CAO,
} = require("../services/generalRoom/generalRoom.service");
const {
  paginateDefault,
  paginationQuery,
  pagingResult,
} = require("../services/constant");
const NhanVien = require("../../models/NhanVien");
const NhiemVuHD = require("../../models/NhiemVuHD");

let selfController;

class specializeRoomController {
  constructor() {
    selfController = this;
  }

  async getBaoCaos(id, loaiBC) {
    const query = {
      [loaiBC]: id,
    };
    const BaoCaos = await BaoCao.findAll({
      where: query,
      attributes: ["id", "TrangThai", "SoBaoCao"],
      raw: true,
      nest: true,
    });

    return BaoCaos;
  }

  async getSumNhiemVuHD(id, loaiBC) {
    const query = {
      [loaiBC]: id,
    };
    const sumBaoCao = await NhiemVuHD.count({
      where: query,
      raw: true,
      nest: true,
    });

    return sumBaoCao;
  }

  async getList(req, res) {
    try {
      const { page = paginateDefault.page, limit = paginateDefault.limit } =
        req.query;
      const HopDongs = await HopDong.findAndCountAll({
        include: [
          {
            model: NhanVien,
            foreignKey: "MaNguoiNhap",
            as: "NguoiNhap",
            where: {
              DonViID: 1,
            },
          },
          {
            model: KhachHang,
            attributes: ["id", "name"],
          },
        ],
        attributes: ["id", "SoHopDong"],
        raw: true,
        nest: true,
        ...paginationQuery(page, limit),
      });

      for (let index = 0; index < HopDongs.rows.length; index++) {
        const itemHD = HopDongs.rows[index];
        const PhuLucs = await PhuLuc.findAll({
          where: {
            HopDongID: itemHD.id,
          },
          attributes: ["id", "SoPhuLuc"],
          raw: true,
          nest: true,
        });

        for (let index = 0; index < PhuLucs.rows.length; index++) {
          const itemPhuLuc = PhuLucs.rows[index];
          const BaoCaoPhuLucs = await selfController.getBaoCaos(
            itemPhuLuc.id,
            MA_LOAI_BAO_CAO.PHU_LUC
          );
          const sumNhiemVuHDPhuLucs = await selfController.getSumNhiemVuHD(
            itemPhuLuc.id,
            MA_LOAI_BAO_CAO.PHU_LUC
          );
          PhuLucs.rows[index]["BaoCaos"] = BaoCaoPhuLucs;
          PhuLucs.rows[index]["TongBaoCaos"] = sumNhiemVuHDPhuLucs;
        }

        const BaoCaoHopDongs = await selfController.getBaoCaos(
          itemHD.id,
          MA_LOAI_BAO_CAO.HOP_DONG
        );
        const sumNhiemVuHD = await selfController.getSumNhiemVuHD(
          itemHD.id,
          MA_LOAI_BAO_CAO.HOP_DONG
        );
        HopDongs.rows[index]["PhuLucs"] = PhuLucs;
        HopDongs.rows[index]["BaoCaos"] = BaoCaoHopDongs;
        HopDongs.rows[index]["TongBaoCaos"] = sumNhiemVuHD;
      }

      res.status(200).json({
        result: pagingResult(HopDongs, page, limit),
      });
    } catch (error) {
      res.status(400).json({
        result: null,
      });
    }
  }

  async getDetail(req, res) {
    try {
      const result = await HopDong.findOne({
        where: {
          id: req.query.id,
        },
        include: [LoaiHD],
        raw: true,
        nest: true,
      });
      res.status(200).json({
        result,
      });
    } catch (error) {
      res.status(400).json({
        result: null,
      });
    }
  }
}

module.exports = new specializeRoomController();
