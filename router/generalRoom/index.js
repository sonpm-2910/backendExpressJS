const express = require("express");
const moment = require("moment");
const generalRoomRouters = express.Router();

generalRoomRouters.get("/list", (req, res) => {
  console.log("timestamp: ", moment().unix());

  res.status(200).json({
    result: "oke nhe",
  });
});

module.exports = { generalRoomRouters };
