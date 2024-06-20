const { validationResult } = require("express-validator");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  handleNumberWithMaxLength,
  STATUS_DOCUMENT,
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

  groupArrObjectAndSort(array) {
    console.log("array", array);
    const tempObj = array.reduce((acc, curr) => {
      if (curr.MaKTV in acc) {
        acc[curr.MaKTV].NamKy.push(curr.NamKy);
      } else {
        acc[curr.MaKTV] = {
          NhanVien: curr.NhanVien,
          NamKy: [curr.NamKy],
        };
      }
      return acc;
    }, {});

    let reorganized = Object.keys(tempObj).map((key) => ({
      MaKTV: key,
      NhanVien: tempObj[key].NhanVien,
      NamKy: tempObj[key].NamKy,
    }));

    reorganized = reorganized.map((item) => {
      let NamKy = item.NamKy.sort((a, b) => a - b);
      return {
        ...item,
        NamKy,
      };
    });

    return reorganized;
  }

  getSTTInSBC(SoBaoCao) {
    return SoBaoCao.split(".")[1].split("/")[0];
  }

  async getListKTV(
    isCheckIncreasingSequence,
    IncreasingTimes = 3,
    HopDongID,
    PhuLucID,
    MaLoaiBC
  ) {
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
      let listBaoCao = await BaoCao.findAll({
        where: {
          HopDongID,
          PhuLucID,
          MaLoaiBC,
          TrangThai: STATUS_DOCUMENT.complete,
        },
        raw: true,
        nest: true,
      });
      listBaoCao = listBaoCao.map((item) => item.id);
      const listKTV_BaoCao = await KTV_BaoCao.findAll({
        where: {
          BaoCaoID: listBaoCao,
        },
        include: [
          {
            model: NhanVien,
            include: [DonVi],
          },
        ],
        raw: true,
        nest: true,
      });
      const groups = selfController.groupArrObjectAndSort(listKTV_BaoCao);
      for (let index = 0; index < groups.length; index++) {
        const NhanVienKTV = groups[index].NhanVien;
        const arrayYears = groups[index].NamKy;
        const dataCheckIncreasingConsecutive = getIncreasingConsecutive(
          arrayYears,
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

      const [resultKTV, listLoaiBC, listThanhVienBGD] = await Promise.all([
        selfController.getListKTV(
          loaiBaoCaoData.KTKy || false,
          loaiBaoCaoData.ThoiGian || 3,
          body?.HopDongID || null,
          body?.PhuLucID || null,
          body.MaLoaiBC
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
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new ReportController();
