const express = require("express");
const generalRoomController = require("../../controller/generalRoomController");
const generalRoomRouters = express.Router();

generalRoomRouters.get("/list", generalRoomController.getList);
generalRoomRouters.get("/detail", generalRoomController.getDetail);

module.exports = { generalRoomRouters };
