const express = require("express");
const specializeRoomController = require("../../controller/specializeRoomController");
const specializeRoomRouters = express.Router();

specializeRoomRouters.get("/list", specializeRoomController.getList);
specializeRoomRouters.get("/detail", specializeRoomController.getDetail);

module.exports = { specializeRoomRouters };
