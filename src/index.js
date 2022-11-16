const express = require("express");
const app = express();
const port = 8080;

const user = require("./api/models/user");
const mongoose = require("mongoose");
const db =require("./config/connectDB");
db.connectDB();
app.get("/", async (req, res) => {
  try {
    const newUsers = new user({
      username: "gia huy",
      email: "gia@gmail.com",
      password: "haianhem",
    });
    const User = await newUsers.save();
    res.status(200).json(newUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
