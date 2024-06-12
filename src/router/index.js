const { ResponseApi } = require("../services/api");
const { STATUS_RESPONSE } = require("../services/constant");
const { authRouters } = require("./auth/auth.router");
const { contractRouters } = require("./contract/contract.router");
const { generalRoomRouters } = require("./generalRoom/generalRoom.router");
const {
  specializeRoomRouters,
} = require("./specializeRoom/specializeRoom.router");

const routersInit = (app) => {
  app.use("/contract", contractRouters);
  app.use("/generalRoom", generalRoomRouters);
  app.use("/specializeRoom", specializeRoomRouters);
  app.use("/auth", authRouters);

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    res
      .status(STATUS_RESPONSE.NOT_FOUND)
      .json(new ResponseApi("not found nhe"));
  });
};

module.exports = { routersInit };
