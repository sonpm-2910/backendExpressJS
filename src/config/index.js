const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { routersInit } = require("../router");

const config = (app) => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "..", "..", "public")));

  //routers
  routersInit(app);
};

module.exports = { config };
