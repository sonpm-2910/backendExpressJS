const express = require("express");
const staffController = require("../../controller/staffController");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateCreateStaff,
} = require("../../middleware/validates/staff/CreateStaff.validate");
const {
  validateUpdateStaff,
} = require("../../middleware/validates/staff/UpdateStaff.validate");
const staffRouters = express.Router();

staffRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateCreateStaff(),
  staffController.createStaff
);
staffRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateUpdateStaff(),
  staffController.updateStaff
);

staffRouters.get(
  "/list",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  staffController.getListStaff
);

staffRouters.get(
  "/:id/detail",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  staffController.getDetailStaff
);

staffRouters.delete(
  "/:id/delete",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  staffController.deleteStaff
);

module.exports = { staffRouters };
