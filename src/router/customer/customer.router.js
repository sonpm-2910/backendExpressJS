const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const customerController = require("../../controller/customerController");
const {
  validateUpdateCustomer,
} = require("../../middleware/validates/customer/UpdateCustomer.validate");
const {
  validateCreateCustomer,
} = require("../../middleware/validates/customer/CreateCustomer.validate");
const customerRouters = express.Router();

customerRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateCreateCustomer(),
  customerController.createCustomer
);

customerRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateUpdateCustomer(),
  customerController.updateCustomer
);

customerRouters.get(
  "/list",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  customerController.getListCustomer
);

customerRouters.get(
  "/:id/detail",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  customerController.getDetailCustomer
);

customerRouters.delete(
  "/:id/delete",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  customerController.deleteCustomer
);

module.exports = { customerRouters };
