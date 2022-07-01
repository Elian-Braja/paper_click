const express = require('express');
const Router = require("./routes/routes")
const MongoDb = require("./db/db_config")
const cors = require('cors');
const axios = require('axios').default;
const bodyParser = require('body-parser')
const repoModel = require("./models/repo_model");
const app = express();

app.use(MongoDb);
app.use(cors({origin: '*'}));

// app.use("/", Router)
// app.use("/user_profile", Router)
// app.use("/public_repositories", Router)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
  app.get('/user/signin/callback', (req, res) => {
    const { query } = req;
    const { code } = query;

    if (!code) {
      return res.send({
        success: false,
        message: "no code"
      })
    };

    axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      data: {
        client_id: "aa00582765f9040754a5",
        client_secret: "d3993753b6011a136b1eea9b8c12a5b11e3ccda9",
        code: code
      },
      headers: { 'Content-Type': 'application/json' }
    }).then(function (result) {
      result.data ? res.redirect('http://localhost:8080/user_profile') : res.redirect('/')  
    })
  })
})

app.get("/user_profile", (req, res) => {
  axios({
      method: 'get',
      url: 'https://api.github.com/users/Hatemii/repos',
      headers: { 'Content-Type': 'application/json' }
  }).then(function (result) {
    const myObj = result.data.map((record) => {
      return {
        name: record.name,
        url: record.html_url,
        description: record.description,
        user: record.owner.id
      }
    })
    repoModel.insertMany(myObj)
  })
  res.sendFile(__dirname + "/views/user_profile.html");
})

app.get("/public_repositories", async (request, response) => {
  const repositories = await repoModel.find();
  try {
    response.send(repositories);
  } catch (error) {
    response.send(error);
  }
});

app.listen(8080, () => console.log('server is running on port 8080'));

