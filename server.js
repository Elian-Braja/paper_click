const express = require('express');
const Router = require("./routes/routes")
const MongoDb = require("./db/db_config")
const cors = require('cors');
const app = express();

app.use(MongoDb);
app.use(cors({origin: '*'}));

app.use("/", Router)
app.use("/user_profile", Router)
app.use("/public_repositories", Router)

app.listen(8080, () => console.log('server is running on port 8080'));

