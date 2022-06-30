const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("dotenv/config")

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports = app;

// username: user
// password: rUtZwavWfjBUywvp
// db_name: github