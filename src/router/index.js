const { ResponseApi } = require("../services/api");
const { STATUS_RESPONSE } = require("../services/constant");
const {
  appendixContractRouters,
} = require("./appendixContract/appendixContract.router");
const { authRouters } = require("./auth/auth.router");
const { contractRouters } = require("./contract/contract.router");
const { departmentRouters } = require("./department/department.router");
const { generalRoomRouters } = require("./generalRoom/generalRoom.router");
const { reportRouters } = require("./report/report.router");
const {
  specializeRoomRouters,
} = require("./specializeRoom/specializeRoom.router");
const { staffRouters } = require("./staff/staff.router");
const { userRouters } = require("./user/user.router");

const routersInit = (app) => {
  app.use("/contract", contractRouters);
  app.use("/report", reportRouters);
  app.use("/generalRoom", generalRoomRouters);
  app.use("/specializeRoom", specializeRoomRouters);
  app.use("/appendixContract", appendixContractRouters);
  app.use("/staff", staffRouters);
  app.use("/department", departmentRouters);
  app.use("/user", userRouters);
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
