const express = require("express");
const repoModel = require("../models/repo_model");
const bodyParser = require("body-parser");
const axios = require("axios").default;
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.get("/user/signin/callback", (req, res) => {
  const { query } = req;
  const { code } = query;

  if (!code) {
    return res.send({
      success: false,
      message: "no code",
    });
  }

  axios({
    method: "post",
    url: "https://github.com/login/oauth/access_token",
    data: {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: code,
    },
    headers: { "Content-Type": "application/json" },
  }).then(function (result) {
    result.data
      ? res.redirect("http://localhost:8081/user_profile")
      : res.redirect("/");
  });
});

app.get("/user_profile", (req, res) => {
  axios({
    method: "get",
    url: "https://api.github.com/users/Hatemii/repos",
    headers: { "Content-Type": "application/json" },
  }).then(function (result) {
    res.send(result.data);
    const myObj = result.data.map((record) => {
      return {
        name: record.name,
        url: record.html_url,
        description: record.description,
        user: record.owner.id,
      };
    });
    repoModel.insertMany(myObj);
  });
});

app.get("/public_repositories", async (request, response) => {
  const repositories = await repoModel.find();
  try {
    response.send(repositories);
  } catch (error) {
    response.send(error);
  }
});

module.exports = app;
