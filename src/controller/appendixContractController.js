const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  handleNumberWithMaxLength,
  STATUS_DOCUMENT,
} = require("../services/constant");
const LoaiPL = require("../../models/LoaiPL");
const NhanVien = require("../../models/NhanVien");
const PhuLuc = require("../../models/PhuLuc");
const DonVi = require("../../models/DonVi");
const jwt = require("jsonwebtoken");
const NhiemVuHD = require("../../models/NhiemVuHD");
const contractController = require("./contractController");
const moment = require("moment");
let selfController;

class AppendixContractController {
  constructor() {
    selfController = this;
  }

  getSTTInSPL(SoPhuLuc) {
    return SoPhuLuc.split(".")[1].split("/")[0];
  }

  async getListLoaiPL(req, res) {
    try {
      const result = await LoaiPL.findAll({
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

  async generateSoPL(MaNguoiNhap, NgayGhiThucTe, MaLoaiPL) {
    const listOldAppendixContract = await PhuLuc.findAll({
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
          model: LoaiPL,
        },
      ],
      where: {
        NgayGhiThucTe,
        MaNguoiNhap,
        MaLoaiPL,
      },
      order: [["update_at", "DESC"]],
      limit: 1,
      raw: true,
      nest: true,
    });

    let stt = 1,
      nameLoaiPL = "",
      nameRoom = "";

    if (listOldAppendixContract.length > 0) {
      stt =
        Number(
          selfController.getSTTInSPL(listOldAppendixContract[0].SoPhuLuc)
        ) + 1;
      nameLoaiPL = listOldAppendixContract[0].LoaiPL.name;
      nameRoom = listOldAppendixContract[0].NguoiNhap.DonVi.name;
    } else {
      nameLoaiPL = (
        await LoaiPL.findOne({
          where: {
            id: MaLoaiPL,
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
            id: MaNguoiNhap,
          },
          raw: true,
          nest: true,
        })
      ).DonVi.name;
    }

    const formatSTT = handleNumberWithMaxLength(stt);

    return `${NgayGhiThucTe}.${formatSTT}/${nameLoaiPL}.${nameRoom}`;
  }

  async createAppendixContract(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const user = jwt.decode(req.headers.authorization.split(" ")[1]);
      const SoPhuLuc = await selfController.generateSoPL(
        user.NhanVienID,
        body.NgayGhiThucTe,
        body.MaLoaiPL
      );

      const newPL = await PhuLuc.create({
        HopDongID: body.HopDongID,
        TrangThai: STATUS_DOCUMENT.approve,
        SoPhuLuc,
        NgayGhiThucTe: body.NgayGhiThucTe,
        MaLoaiPL: body.MaLoaiPL,
        TongGiaTri: body.TongGiaTri,
        SoBan: body.SoBan,
        MaNguoiNhap: user.NhanVienID,
        LinkDrive: body.LinkDrive,
        created_at: new Date(),
        update_at: new Date(),
      });

      const { id } = newPL.dataValues;
      for (let index = 0; index < body.listNhiemVu.length; index++) {
        await NhiemVuHD.create({
          HopDongID: null,
          ThoiGianHoanThanh: body.listNhiemVu[index].ThoiGianHoanThanh,
          MaLoaiBC: body.listNhiemVu[index].MaLoaiBaoCao,
          TrangThai: STATUS_DOCUMENT.approve,
          PhuLucID: id,
          created_at: new Date(),
          update_at: new Date(),
        });
      }

      const [listThanhVienBGD, listLoaiPL] = await Promise.all([
        contractController.getListThanhVienBGD(),
        selfController.getListLoaiPL(),
      ]);

      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon({ listThanhVienBGD, listLoaiPL }));
    } catch (error) {
      console.log("error", error);
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async updateAppendixContract(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      await PhuLuc.update(
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
      const dataPL = await PhuLuc.findOne({
        where: {
          id,
        },
      });

      const { MaNguoiNhap, NgayGhiThucTe, MaLoaiPL } = dataPL.dataValues;
      const SoPhuLuc = await selfController.generateSoPL(
        MaNguoiNhap,
        NgayGhiThucTe,
        MaLoaiPL
      );
      dataPL.SoPhuLuc = SoPhuLuc;
      await dataPL.save();

      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(dataPL));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new AppendixContractController();
