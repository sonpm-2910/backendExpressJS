const { validationResult } = require("express-validator");
const {
  apiResponseCommon,
  STATUS_RESPONSE,
  handleNumberWithMaxLength,
  STATUS_DOCUMENT,
} = require("../services/constant");
const jwt = require("jsonwebtoken");
const HopDong = require("../../models/HopDong");
const NhanVien = require("../../models/NhanVien");
const DonVi = require("../../models/DonVi");
const LoaiHD = require("../../models/LoaiHD");
const NhiemVuHD = require("../../models/NhiemVuHD");
const moment = require("moment");

let selfController;

class ContractController {
  constructor() {
    selfController = this;
  }

  getSTTInSHD(SoHopDong) {
    return SoHopDong.split(".")[1].split("/")[0];
  }

  async getListThanhVienBGD() {
    return await NhanVien.findAll({
      where: {
        DonViID: 3, //3 là thành viên BGD
      },
      raw: true,
      nest: true,
    });
  }

  async getListLoaiHD() {
    return await LoaiHD.findAll({
      raw: true,
      nest: true,
    });
  }

  async createContract(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const body = req.body;
      const user = jwt.decode(req.headers.authorization.split(" ")[1]);

      const listOldContract = await HopDong.findAll({
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
            model: LoaiHD,
          },
        ],
        where: {
          NgayGhiThucTe: body.NgayGhiThucTe,
          MaNguoiNhap: user.id,
          MaLoaiHD: body.MaLoaiHD,
        },
        order: [["update_at", "DESC"]],
        limit: 1,
        raw: true,
        nest: true,
      });

      let stt = 1,
        nameLoaiHD = "",
        nameRoom = "";

      if (listOldContract.length > 0) {
        stt =
          Number(selfController.getSTTInSHD(listOldContract[0].SoHopDong)) + 1;
        nameLoaiHD = listOldContract[0].LoaiHD.name;
        nameRoom = listOldContract[0].NguoiNhap.DonVi.name;
      } else {
        nameLoaiHD = (
          await LoaiHD.findOne({
            where: {
              id: body.MaLoaiHD,
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

      const SoHopDong = `${body.NgayGhiThucTe}.${formatSTT}/${nameLoaiHD}.${nameRoom}`;

      const newHD = await HopDong.create({
        TrangThai: body.TrangThai,
        SoHopDong,
        NgayGhiThucTe: body.NgayGhiThucTe,
        MaLoaiHD: body.MaLoaiHD,
        GiaTriTruocVAT: body.GiaTriTruocVAT,
        VAT: body.VAT,
        ThoiGianHieuLuc: body.ThoiGianHieuLuc,
        TongGiaTri: body.TongGiaTri,
        SoLuu: null,
        SoBan: body.SoBan,
        Noidung: body.Noidung,
        MaNguoiNhap: user.id,
        MaThanhVienBGD: body.MaThanhVienBGD,
        MaKhachHang: body.MaKhachHang,
        LinkDrive: body.LinkDrive,
        created_at: new Date(),
        update_at: new Date(),
      });

      const { id } = newHD.dataValues;

      await NhiemVuHD.create({
        HopDongID: id,
        ThoiGianHoanThanh: moment().format("HH:mm"),
        MaLoaiBC: 1, //1 là báo cáo hợp đồng, 2 là báo cáo phụ lục
        TrangThai: STATUS_DOCUMENT.approve,
        PhuLucID: null,
        created_at: new Date(),
        update_at: new Date(),
      });

      const [listThanhVienBGD, listLoaiHD] = await Promise.all([
        selfController.getListThanhVienBGD(),
        selfController.getListLoaiHD(),
      ]);

      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon({ listThanhVienBGD, listLoaiHD }));
    } catch (error) {
      console.log("error", error);
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new ContractController();
