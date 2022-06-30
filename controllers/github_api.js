// const express = require("express");
// const superagent = require('superagent');
// const app = express();

// app.get("/", (req, res) => {
//   app.get('/user/signin/callback', (req, res) => {
//     const { query } = req;
//     const { code } = query;

//     if (!code) {
//       return res.send({
//         success: false,
//         message: "Error: no code"
//       })
//     };

//     superagent.post('https://github.com/login/oauth/access_token')
//     .send({
//       client_id: "aa00582765f9040754a5",
//       client_secret: "d3993753b6011a136b1eea9b8c12a5b11e3ccda9",
//       code: code
//     })
//     .set("Accept", "application/json")
//     .then(function (result) {
//       res.send(result.body)
//     })
//   })
// })

// module.exports = app;