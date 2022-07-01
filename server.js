const express = require("express");
const MongoDb = require("./db/db_config");
const cors = require("cors");
const axios = require("axios").default;
const repoModel = require("./models/repo_model");
const app = express();

app.use(MongoDb);
app.use(cors({ origin: "*" }));

// app.use("/", Router)
// app.use("/user_profile", Router)
// app.use("/public_repositories", Router)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
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
        ? res.redirect("http://localhost:8080/user_profile")
        : res.redirect("/");
    });
  });
});

app.get("/user_profile", (req, res) => {
  axios({
    method: "get",
    url: process.env.account_url,
    headers: { "Content-Type": "application/json" },
  }).then(function (result) {
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
  res.sendFile(__dirname + "/views/user_profile.html");
});

app.get("/public_repositories", async (request, response) => {
  const repositories = await repoModel.find();
  try {
    response.send(repositories);
  } catch (error) {
    response.send(error);
  }
});

app.listen(8080, () => console.log("server is running on port 8080"));
