"use strict";

var fs = require("fs");

function saveImg(req, res, next) {
  var file = req.file;
  var oldPath = req.file.path;
  var newPath = "src/public/upload/users/" + file.filename;
  console.log(file);
  console.log("src/public/upload/users/" + file.filename);
  fs.rename(oldPath, newPath, function (err) {
    if (err) console.log(err);
    console.log("Successfully renamed - AKA moved!");
  });
  next();
}

module.exports = {
  saveImg: saveImg
};