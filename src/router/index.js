const { upload } = require("../config/storage");
const authMiddleware = require("../middleware/auth.middleware");
const { ResponseApi } = require("../services/api");
const { STATUS_RESPONSE, apiResponseCommon } = require("../services/constant");
const { roles } = require("../services/roles");
const {
  appendixContractRouters,
} = require("./appendixContract/appendixContract.router");
const { authRouters } = require("./auth/auth.router");
const { contractRouters } = require("./contract/contract.router");
const { customerRouters } = require("./customer/customer.router");
const { departmentRouters } = require("./department/department.router");
const { generalRoomRouters } = require("./generalRoom/generalRoom.router");
const { historyRouters } = require("./history/history.router");
const { reportRouters } = require("./report/report.router");
const {
  specializeRoomRouters,
} = require("./specializeRoom/specializeRoom.router");
const { staffRouters } = require("./staff/staff.router");
const { userRouters } = require("./user/user.router");
const { fileRouters } = require("./file/file.router");

const routersInit = (app) => {
  app.use("/contract", contractRouters);
  app.use("/report", reportRouters);
  app.use("/generalRoom", generalRoomRouters);
  app.use("/specializeRoom", specializeRoomRouters);
  app.use("/appendixContract", appendixContractRouters);
  app.use("/staff", staffRouters);
  app.use("/department", departmentRouters);
  app.use("/user", userRouters);
  app.use("/customer", customerRouters);
  app.use("/history", historyRouters);
  app.use("/auth", authRouters);
  app.use("/file", fileRouters);

  app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    res
      .status(STATUS_RESPONSE.NOT_FOUND)
      .json(new ResponseApi("not found nhe"));
  });
};

module.exports = { routersInit };
