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
const historyController = require("./historyController");

let selfController;

class ContractController {
  constructor() {
    selfController = this;
  }

  getSTTInSHD(SoHopDong) {
    return SoHopDong.split(".")[1].split("/")[0];
  }

  async getListThanhVienBGD(req, res) {
    try {
      const result = await NhanVien.findAll({
        where: {
          DonViID: 3, //3 là thành viên BGD
        },
        include: [
          {
            model: DonVi,
          },
        ],
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

  async getListLoaiHD(req, res) {
    try {
      const result = await LoaiHD.findAll({
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

  async generateSoHD(MaNguoiNhap, NgayGhiThucTe, MaLoaiHD) {
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
        NgayGhiThucTe,
        MaNguoiNhap,
        MaLoaiHD,
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
            id: MaLoaiHD,
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

    return `${NgayGhiThucTe}.${formatSTT}/${nameLoaiHD}.${nameRoom}`;
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
      const SoHopDong = await selfController.generateSoHD(
        user.NhanVienID,
        body.NgayGhiThucTe,
        body.MaLoaiHD
      );

      const bodyHistory = {
        SoVanBan: SoHopDong,
        NgayThayDoi: new Date(),
        LinkCu: body.LinkDrive,
        NguoiSua: user.NhanVienID,
        NoiDungSua: "Tạo mới hợp đồng",
      };

      const [newHD, resultHistory] = await Promise.all([
        HopDong.create({
          TrangThai: STATUS_DOCUMENT.approve,
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
          MaNguoiNhap: user.NhanVienID,
          MaThanhVienBGD: body.MaThanhVienBGD,
          MaKhachHang: body.MaKhachHang,
          LinkDrive: body.LinkDrive,
          created_at: new Date(),
          update_at: new Date(),
        }),
        historyController.createHistory(bodyHistory),
      ]);

      const { id } = newHD.dataValues;

      for (let index = 0; index < body.listNhiemVu.length; index++) {
        await NhiemVuHD.create({
          HopDongID: id,
          ThoiGianHoanThanh: body.listNhiemVu[index].ThoiGianHoanThanh,
          MaLoaiBC: body.listNhiemVu[index].MaLoaiBaoCao,
          TrangThai: STATUS_DOCUMENT.approve,
          PhuLucID: null,
          created_at: new Date(),
          update_at: new Date(),
        });
      }

      const [listThanhVienBGD, listLoaiHD] = await Promise.all([
        selfController.getListThanhVienBGD(),
        selfController.getListLoaiHD(),
      ]);

      return res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon({ listThanhVienBGD, listLoaiHD }));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async updateContract(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
      const { id, ...dataUpdate } = req.body;
      await HopDong.update(
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
      const dataHD = await HopDong.findOne({
        where: {
          id,
        },
      });

      const { MaNguoiNhap, NgayGhiThucTe, MaLoaiHD, LinkDrive } =
        dataHD.dataValues;
      const SoHopDong = await selfController.generateSoHD(
        MaNguoiNhap,
        NgayGhiThucTe,
        MaLoaiHD
      );
      dataHD.SoHopDong = SoHopDong;

      const bodyHistory = {
        SoVanBan: SoHopDong,
        NgayThayDoi: new Date(),
        LinkCu: LinkDrive,
        NguoiSua: MaNguoiNhap,
        NoiDungSua: "Sửa hợp đồng",
      };
      await Promise.all([
        dataHD.save(),
        historyController.createHistory(bodyHistory),
      ]);

      return res.status(STATUS_RESPONSE.OK).json(apiResponseCommon(dataHD));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new ContractController();
