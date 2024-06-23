const express = require("express");
const contractController = require("../../controller/contractController");
const authMiddleware = require("../../middleware/auth.middleware");
const {
  validateCreateContract,
} = require("../../middleware/validates/contract/CreateContract.validate");
const { roles } = require("../../services/roles");
const {
  validateUpdateContract,
} = require("../../middleware/validates/contract/UpdateContract.validate");
const contractRouters = express.Router();

contractRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateUpdateContract(),
  contractController.updateContract
);
contractRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  validateCreateContract(),
  contractController.createContract
);
contractRouters.get(
  "/listTypeContract",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  contractController.getListLoaiHD
);
contractRouters.get(
  "/listThanhVienBGD",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin, roles.isPhongCM]);
  },
  contractController.getListThanhVienBGD
);

module.exports = { contractRouters };
