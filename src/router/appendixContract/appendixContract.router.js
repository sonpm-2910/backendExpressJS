const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateCreateAppendixContract,
} = require("../../middleware/validates/appendixContract/CreateAppendixContract.validate");
const appendixContractController = require("../../controller/appendixContractController");
const {
  validateUpdateAppendixContract,
} = require("../../middleware/validates/appendixContract/UpdateAppendixContract.validate");
const appendixContractRouters = express.Router();

appendixContractRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateCreateAppendixContract(),
  appendixContractController.createAppendixContract
);

appendixContractRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateUpdateAppendixContract(),
  appendixContractController.updateAppendixContract
);
appendixContractRouters.get(
  "/listTypeAppendixContract",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  appendixContractController.getListLoaiPL
);

module.exports = { appendixContractRouters };
