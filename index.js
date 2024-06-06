// src/index.js
const express = require("express");
const dotenv = require("dotenv");
const { config } = require("./config");
const { connectDB } = require("./config/database");

dotenv.config();

const app = express();
const port = process.env.PORT;

config(app);

connectDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
