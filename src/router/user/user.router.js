const express = require("express");
const authMiddleware = require("../../middleware/auth.middleware");
const { roles } = require("../../services/roles");
const {
  validateCreateUser,
} = require("../../middleware/validates/user/CreateUser.validate");
const {
  validateUpdateUser,
} = require("../../middleware/validates/user/UpdateUser.validate");
const userController = require("../../controller/userController");
const userRouters = express.Router();

userRouters.post(
  "/create",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateCreateUser(),
  userController.createUser
);
userRouters.put(
  "/update",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  validateUpdateUser(),
  userController.updateUser
);

userRouters.get(
  "/list",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  userController.getListUser
);

userRouters.get(
  "/:id/detail",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  userController.getDetailUser
);

userRouters.delete(
  "/:id/delete",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  userController.deleteUser
);

module.exports = { userRouters };
