const express = require("express");
const contractController = require("../../controller/contractController");
const authMiddleware = require("../../middleware/auth.middleware");
const {
  validateCreateContract,
} = require("../../middleware/validates/contract/CreateContract.validate");
const { roles } = require("../../services/roles");
const contractRouters = express.Router();

contractRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateCreateContract(),
  contractController.createContract
);
contractRouters.get(
  "/list-type-contract",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  contractController.getListLoaiHD
);
contractRouters.get(
  "/list-thanh-vien-bgd",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  contractController.getListThanhVienBGD
);

module.exports = { contractRouters };
