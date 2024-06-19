const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  handleNumberWithMaxLength,
} = require("../services/constant");
const jwt = require("jsonwebtoken");
const BaoCao = require("../../models/BaoCao");
const NhanVien = require("../../models/NhanVien");
const DonVi = require("../../models/DonVi");
const LoaiBC = require("../../models/LoaiBC");
const contractController = require("./contractController");
const KTV_BaoCao = require("../../models/KTV_BaoCao");
const moment = require("moment");
const { getIncreasingConsecutive } = require("../services/helper");
const Phat = require("../../models/Phat");
const { Op } = require("sequelize");

let selfController;

class ReportController {
  constructor() {
    selfController = this;
  }

  getSTTInSBC(SoBaoCao) {
    return SoBaoCao.split(".")[1].split("/")[0];
  }

  async getListKTV(isCheckIncreasingSequence, IncreasingTimes = 3) {
    let ListKTV = [],
      ListKTVPhat = [],
      ListKTVKyLienTiep = [];
    const result = await NhanVien.findAll({
      where: {
        LaKTV: true,
      },
      include: [
        {
          model: DonVi,
        },
      ],
      raw: true,
      nest: true,
    });

    const mapKTVId = result.map((item) => item.id);

    const resultPhat = await Phat.findAll({
      include: [
        {
          model: NhanVien,
          include: [DonVi],
        },
      ],
      where: {
        NhanVienID: mapKTVId,
        BatDau: {
          [Op.lte]: moment().toDate(),
        },
        KetThuc: {
          [Op.gte]: moment().toDate(),
        },
      },
      raw: true,
      nest: true,
    });

    ListKTV = result;
    ListKTVPhat = resultPhat.map((item) => item.NhanVien);
    ListKTVKyLienTiep = [];

    if (isCheckIncreasingSequence) {
      for (let index = 0; index < result.length; index++) {
        const NhanVienKTV = result[index];
        const listKTV_BaoCao = await KTV_BaoCao.findAll({
          where: {
            MaKTV: NhanVienKTV.id,
          },
          attributes: ["NamKy"],
          raw: true,
          nest: true,
        });

        const convertArrayNumber = listKTV_BaoCao
          .map((item) => item.NamKy)
          .sort((a, b) => a - b);
        const dataCheckIncreasingConsecutive = getIncreasingConsecutive(
          convertArrayNumber,
          IncreasingTimes
        );

        if (dataCheckIncreasingConsecutive.isConsecutive) {
          ListKTVKyLienTiep.push({
            ...NhanVienKTV,
            ...{ NamKyLienTiep: dataCheckIncreasingConsecutive.data },
          });
        }
      }
    }

    return {
      ListKTV,
      ListKTVPhat,
      ListKTVKyLienTiep,
    };
  }

  async getListLoaiBC(req, res) {
    try {
      const result = await LoaiBC.findAll({
        raw: true,
        nest: true,
      });

      if (req && res) {
        return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(result));
      }
      return result;
    } catch (error) {
      return res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async generateSoBaoCao(body, user) {
    const listOldBaoCao = await BaoCao.findAll({
      include: [
        {
          model: NhanVien,
          foreignKey: "MaNguoiNhap",
          as: "NguoiNhap",
          include: [
            {
              model: DonVi,
            },
          ],
        },
        {
          model: LoaiBC,
        },
      ],
      where: {
        NgayGhiThucTe: body.NgayGhiThucTe,
        MaNguoiNhap: user.id,
        MaLoaiBC: body.MaLoaiBC,
      },
      order: [["update_at", "DESC"]],
      limit: 1,
      raw: true,
      nest: true,
    });

    let stt = 1,
      nameLoaiBaoCao = "",
      nameRoom = "";

    if (listOldBaoCao.length > 0) {
      stt = Number(selfController.getSTTInSBC(listOldBaoCao[0].SoBaoCao)) + 1;
      nameLoaiBaoCao = listOldBaoCao[0].LoaiBC.name;
      nameRoom = listOldBaoCao[0].NguoiNhap.DonVi.name;
    } else {
      nameLoaiBaoCao = (
        await LoaiBC.findOne({
          where: {
            id: body.MaLoaiBC,
          },
          raw: true,
          nest: true,
        })
      ).name;
      nameRoom = (
        await NhanVien.findOne({
          include: [
            {
              model: DonVi,
            },
          ],
          where: {
            id: user.id,
          },
          raw: true,
          nest: true,
        })
      ).DonVi.name;
    }

    const formatSTT = handleNumberWithMaxLength(stt);

    return `${body.NgayGhiThucTe}.${formatSTT}/${nameLoaiBaoCao}.${nameRoom}`;
  }

  async create(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const user = jwt.decode(req.headers.authorization.split(" ")[1]);
      const SoBaoCao = await selfController.generateSoBaoCao(body, user);

      if (!body?.HopDongID && !body?.PhuLucID) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, "Cần có mã hợp đồng hoặc mã phụ lục"));
      }

      const result = await BaoCao.create({
        HopDongID: body?.HopDongID || null,
        PhuLucID: body?.PhuLucID || null,
        TrangThai: body.TrangThai,
        SoBaoCao,
        NgayGhiThucTe: body.NgayGhiThucTe,
        ThoiGianHieuLuc: body.ThoiGianHieuLuc,
        MaLoaiBC: body.MaLoaiBC,
        MaKTV: body.MaKTV,
        MaTruongNhom: body.MaTruongNhom,
        SoLuu: null,
        SoBan: body.SoBan,
        Noidung: body.Noidung,
        MaNguoiNhap: user.id,
        MaThanhVienBGD: body.MaThanhVienBGD,
        LinkDrive: body.LinkDrive,
        created_at: new Date(),
        update_at: new Date(),
      });

      const loaiBaoCaoData = await LoaiBC.findOne({
        where: {
          id: body.MaLoaiBC,
        },
      });

      const NamKy = moment(body.ThoiGianHieuLuc).format("YYYY");

      const { id } = result.dataValues;

      for (let index = 0; index < body.DanhSachKTV.length; index++) {
        const MaKTV = body.DanhSachKTV[index];
        await KTV_BaoCao.create({
          MaKTV,
          BaoCaoID: id,
          NamKy,
        });
      }

      console.log("loaiBaoCaoData", loaiBaoCaoData);

      const [resultKTV, listLoaiBC, listThanhVienBGD] = await Promise.all([
        selfController.getListKTV(
          loaiBaoCaoData.KTKy || false,
          loaiBaoCaoData.ThoiGian || 3
        ),
        selfController.getListLoaiBC(),
        contractController.getListThanhVienBGD(),
      ]);

      return res.status(STATUS_RESPONSE.OK).json(
        apiResponseCommon({
          ...resultKTV,
          listLoaiBC,
          listThanhVienBGD,
        })
      );
    } catch (error) {
      console.log("error", error);
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new ReportController();
