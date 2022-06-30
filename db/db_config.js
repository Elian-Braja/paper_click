const express = require("express");
const app = express();
const mongoose = require("mongoose")

mongoose.connect(
  `mongodb+srv://user:rUtZwavWfjBUywvp@cluster0.dfyfxzw.mongodb.net/github?retryWrites=true&w=majority`,
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