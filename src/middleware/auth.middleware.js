const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { STATUS_RESPONSE, apiResponseCommon } = require("../services/constant");
dotenv.config();

module.exports = (req, res, next, roles) => {
  try {
    const access_token = req.headers.authorization.toString().split(" ")[1];
    const user = jwt.decode(req.headers.authorization.split(" ")[1]);

    jwt.verify(access_token, process.env.TOKEN_SECRET);

    if (roles.length > 0 && !roles.includes(user.role_id)) {
      return res
        .status(STATUS_RESPONSE.PERMISSION_DENIED)
        .json(apiResponseCommon(null, "Quyền truy cập bị từ chối"));
    }

    next();
  } catch (error) {
    if (error?.name === "TokenExpiredError") {
      return res
        .status(STATUS_RESPONSE.TOKEN_EXPIRED)
        .json(apiResponseCommon(null, "Hết hạn token"));
    }
    return res
      .status(STATUS_RESPONSE.UNAUTHORIZED)
      .json(apiResponseCommon(null, "Unauthorized"));
  }
};
