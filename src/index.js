const express = require("express");
const app = express();
const port = 8080;
const session = require("express-session");
const bodyParser = require("body-parser");
const configViewEngine = require("./config/viewEngine");
const db = require("./config/connectDB");
const route = require("./route");
const path = require("path");
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false  },
  })
);
db.connectDB();
configViewEngine(app);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
