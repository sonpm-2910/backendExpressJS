const express = require("express");
const { roles } = require("../../services/roles");
const authMiddleware = require("../../middleware/auth.middleware");
const { upload } = require("../../config/storage");
const {
  STATUS_RESPONSE,
  apiResponseCommon,
} = require("../../services/constant");
const fileRouters = express.Router();

fileRouters.post(
  "/upload",
  (req, res, next) => {
    return authMiddleware(req, res, next, [roles.isAdmin]);
  },
  upload.single("file"),
  (req, res) => {
    try {
      res
        .status(STATUS_RESPONSE.OK)
        .json(apiResponseCommon("Upload file thành công"));
    } catch (error) {
      res
        .status(STATUS_RESPONSE.BAD_REQUEST)
        .json(apiResponseCommon(null, JSON.stringify(error)));
    }
  }
);

module.exports = { fileRouters };
