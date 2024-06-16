const express = require("express");
const reportController = require("../../controller/reportController");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateCreateReport,
} = require("../../middleware/validates/report/CreateReport.validate");
const reportRouters = express.Router();

reportRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateCreateReport(),
  reportController.create
);

module.exports = { reportRouters };
