const express = require("express");
const reportController = require("../../controller/reportController");
const reportRouters = express.Router();

reportRouters.post("/create", reportController.create);

module.exports = { reportRouters };
