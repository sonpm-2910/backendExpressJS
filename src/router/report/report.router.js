const express = require("express");
const reportController = require("../../controller/reportController");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateCreateReport,
} = require("../../middleware/validates/report/CreateReport.validate");
const {
  validateUpdateReport,
} = require("../../middleware/validates/report/UpdateReport.validate");
const reportRouters = express.Router();

reportRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateCreateReport(),
  reportController.create
);

reportRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateUpdateReport(),
  reportController.update
);

module.exports = { reportRouters };
