const { validationResult } = require("express-validator");
const User = require("../../models/User");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  saltOrRounds,
} = require("../services/constant");
const { roles } = require("../services/roles");
const bcrypt = require("bcrypt");
let selfController;

class AuthController {
  constructor() {
    selfController = this;
  }

  async validateUser(username, password) {
    const user = await User.findOne({
      where: {
        username,
      },
      raw: true,
      nest: true,
    });
    if (user) {
      const isMatchPassword = await bcrypt.compare(password, user.password);

      if (isMatchPassword) {
        return user;
      }
      throw res
        .status(STATUS_RESPONSE.UNAUTHORIZED)
        .json(apiResponseCommon(null, "Mật khẩu không chính xác"));
    }
    throw res
      .status(STATUS_RESPONSE.UNAUTHORIZED)
      .json(apiResponseCommon(null, "Tên đăng nhập không tồn tại"));
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }

  async register(req, res) {
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
          .status(STATUS_RESPONSE.OK)
          .json(apiResponseCommon(null, "Tài khoản đã tồn tại"));
      }

      console.log("isExistAccount", isExistAccount);

      const hashPassword = await bcrypt.hash(body.password, saltOrRounds);

      const result = await User.create({
        username: body.username,
        password: hashPassword,
        role_id: body.role_id || roles.isPhongTH,
        NhanVienID: body.NhanVienID || null,
        access_token: "",
        refresh_token: "",
      });
      console.log("result", result);
      res.status(STATUS_RESPONSE.OK).json(apiResponseCommon("oke"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new AuthController();
