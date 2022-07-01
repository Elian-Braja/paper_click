const express = require("express");
const MongoDb = require("./db/db_config");
const Router = require("./routes/routes");
const cors = require("cors");
const app = express();

app.use(MongoDb);
app.use(cors({ origin: "*" }));

app.use("/", Router);
app.use("/user_profile", Router);
app.use("/public_repositories", Router);

app.listen(8080, () => console.log("server is running on port 8080"));
