// src/index.js
const express = require("express");
const dotenv = require("dotenv");
const { config } = require("./src/config");

dotenv.config();

const app = express();
const port = process.env.PORT;

config(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
