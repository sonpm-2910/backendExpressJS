const { validationResult } = require("express-validator");
const User = require("../../models/User");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
  saltOrRounds,
} = require("../services/constant");
const { roles } = require("../services/roles");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../services/auth/auth.service");
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
        return {
          status: STATUS_RESPONSE.OK,
          result: user,
        };
      }
      return {
        status: STATUS_RESPONSE.UNAUTHORIZED,
        result: "Mật khẩu không chính xác",
      };
    }
    return {
      status: STATUS_RESPONSE.UNAUTHORIZED,
      result: "Tên đăng nhập không tồn tại",
    };
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(STATUS_RESPONSE.BAD_REQUEST)
          .json(apiResponseCommon(null, errors.array()[0].msg));
      }

      const body = req.body;

      const resultLogin = await selfController.validateUser(
        body.username,
        body.password
      );

      if (resultLogin.status !== STATUS_RESPONSE.OK) {
        return res
          .status(resultLogin.status)
          .json(apiResponseCommon(null, resultLogin.result));
      }

      const { password, ...dataUser } = resultLogin.result;
      const access_token = generateAccessToken({ username: dataUser.username });
      const refresh_token = generateRefreshToken({
        username: dataUser.username,
      });

      await User.update(
        {
          access_token,
          refresh_token,
        },
        {
          where: {
            username: dataUser.username,
          },
        }
      );

      const response = {
        access_token,
        dataUser,
      };

      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(response, "Đăng nhập thành công"));
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

      const hashPassword = await bcrypt.hash(body.password, saltOrRounds);

      const result = await User.create({
        username: body.username,
        password: hashPassword,
        role_id: body.role_id || roles.isPhongTH,
        NhanVienID: body.NhanVienID || null,
        access_token: "",
        refresh_token: "",
      });
      const { password, ...dataUser } = result.dataValues;
      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon(dataUser, "Đăng ký thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
}

module.exports = new AuthController();
