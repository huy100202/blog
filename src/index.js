const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser")
const configViewEngine = require('./config/viewEngine')
const db =require("./config/connectDB");
const route = require('./route');
const path = require("path");
db.connectDB();
configViewEngine(app);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
