const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateUpdateDepartment,
} = require("../../middleware/validates/department/UpdateDepartment.validate");
const departmentController = require("../../controller/departmentController");
const {
  validateCreateDepartment,
} = require("../../middleware/validates/department/CreateDepartment.validate");
const departmentRouters = express.Router();

departmentRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateCreateDepartment(),
  departmentController.createDepartment
);

departmentRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateUpdateDepartment(),
  departmentController.updateDepartment
);

departmentRouters.get(
  "/list",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  departmentController.getListDepartment
);

departmentRouters.get(
  "/:id/detail",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  departmentController.getDetailDepartment
);

departmentRouters.delete(
  "/:id/delete",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  departmentController.deleteDepartment
);

module.exports = { departmentRouters };
