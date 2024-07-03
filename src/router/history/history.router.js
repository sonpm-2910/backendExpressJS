const express = require("express");
const { roles } = require("../../services/roles");
const authMiddleware = require("../../middleware/auth.middleware");
const historyController = require("../../controller/historyController");
const historyRouters = express.Router();

historyRouters.get(
  "/list",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  historyController.getList
);

module.exports = { historyRouters };
