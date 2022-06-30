const express = require("express");
const userModel = require("../models/user_model");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());

app.get("/users", async (request, response) => {
  const users = await userModel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
