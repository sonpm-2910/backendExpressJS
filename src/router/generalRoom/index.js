const express = require("express");
const db = require("../../../models");
const moment = require("moment");
const HopDong = require("../../../models/HopDong");
const generalRoomRouters = express.Router();

generalRoomRouters.get("/list", async (req, res) => {
  try {
    const HopDongs = await HopDong.findAll();
    console.log("HopDongs", HopDongs);
    res.status(200).json({
      result: "oke nhe",
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      result: null,
    });
  }
});

module.exports = { generalRoomRouters };
