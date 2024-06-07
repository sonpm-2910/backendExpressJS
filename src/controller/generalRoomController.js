const { Op } = require("sequelize");
const BaoCao = require("../../models/BaoCao");
const HopDong = require("../../models/HopDong");
const KhachHang = require("../../models/KhachHang");
const PhuLuc = require("../../models/PhuLuc");
const {
  MA_LOAI_BAO_CAO,
} = require("../services/generalRoom/generalRoom.service");
const LoaiHD = require("../../models/LoaiHD");

let selfController;

class generalRoomController {
  constructor() {
    selfController = this;
  }

  async getBaoCaos(id, loaiBC) {
    const BaoCaos = await BaoCao.findAll({
      where: {
        [Op.and]: {
          HopDongID: id,
          MaLoaiBC: loaiBC,
        },
      },
      attributes: ["id", "TrangThai", "SoBaoCao"],
      raw: true,
      nest: true,
    });

    return BaoCaos;
  }

  async getList(req, res) {
    try {
      const HopDongs = await HopDong.findAll({
        include: [
          {
            model: KhachHang,
            attributes: ["id", "name"],
          },
        ],
        attributes: ["id", "SoHopDong"],
        raw: true,
        nest: true,
      });

      for (let index = 0; index < HopDongs.length; index++) {
        const itemHD = HopDongs[index];
        const PhuLucs = await PhuLuc.findAll({
          where: {
            HopDongID: itemHD.id,
          },
          include: [
            {
              model: HopDong,
              include: {
                model: KhachHang,
                attributes: ["id", "name"],
              },
              attributes: [],
            },
          ],
          attributes: ["id", "SoPhuLuc"],
          raw: true,
          nest: true,
        });

        for (let index = 0; index < PhuLucs.length; index++) {
          const itemPhuLuc = PhuLucs[index];
          const BaoCaoPhuLucs = await selfController.getBaoCaos(
            itemPhuLuc.id,
            MA_LOAI_BAO_CAO.PHU_LUC
          );
          PhuLucs[index]["BaoCaos"] = BaoCaoPhuLucs;
        }

        const BaoCaoHopDongs = await selfController.getBaoCaos(
          itemHD.id,
          MA_LOAI_BAO_CAO.HOP_DONG
        );
        HopDongs[index]["PhuLucs"] = PhuLucs;
        HopDongs[index]["BaoCaos"] = BaoCaoHopDongs;
      }

      res.status(200).json({
        result: HopDongs,
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
      console.log("error", error);
      res.status(400).json({
        result: null,
      });
    }
  }
}

module.exports = new generalRoomController();
