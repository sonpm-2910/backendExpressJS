const { ResponseApi } = require("../services/api");
const { STATUS_RESPONSE } = require("../services/constant");
const { generalRoomRouters } = require("./generalRoom/generalRoom.router");

const routersInit = (app) => {
  app.use("/generalRoom", generalRoomRouters);

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    res
      .status(STATUS_RESPONSE.NOT_FOUND)
      .json(new ResponseApi("not found nhe"));
  });
};

module.exports = { routersInit };
